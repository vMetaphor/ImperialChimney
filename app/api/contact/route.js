import nodemailer from "nodemailer";
import { isKnownService } from "../../../lib/contactServices";
import {
  detectSpam,
  isAllowedCaptchaHostname
} from "../../../lib/contactSpamChecks";
import { buildEstimateEmail } from "../../../lib/estimateEmail";
import { siteConfig } from "../../../lib/seo";

const requiredFields = [
  "first_name",
  "last_name",
  "phone",
  "email",
  "service",
  "message"
];

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request) {
  const formData = await request.formData();

  for (const field of requiredFields) {
    const value = String(formData.get(field) || "").trim();
    if (!value) {
      return Response.redirect(
        new URL("/contact?error=missing", request.url),
        303
      );
    }
  }

  const first = String(formData.get("first_name") || "").trim();
  const last = String(formData.get("last_name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const captcha = String(formData.get("g-recaptcha-response") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();
  const openedAtRaw = String(formData.get("form_opened_at") || "").trim();

  // Silently accept-and-drop anything the heuristics flag. A bot that sees an
  // error page learns what to change; one that sees the success redirect does
  // not. Real visitors can never hit this path - the honeypot is unreachable
  // without scripting and the other checks need bot-shaped input.
  // The Service field is a fixed dropdown, so anything outside that list did
  // not come from a person using the form. The 10 Oct spam submitted
  // "Gas Log &amp; Gas Fireplace Tune-Up" - the raw HTML entity, scraped from
  // the page source and posted back without being decoded, which a browser
  // would never do.
  if (!isKnownService(service)) {
    console.warn(`Contact form: dropped submission (service not in dropdown: ${service})`);
    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  }

  const openedAt = Number(openedAtRaw);
  const spamReason = detectSpam({
    honeypot,
    elapsedMs: Number.isFinite(openedAt) && openedAt > 0 ? Date.now() - openedAt : null,
    message,
    first,
    last
  });

  if (spamReason) {
    console.warn(`Contact form: dropped submission (${spamReason})`);
    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  }

  if (!isValidEmail(email)) {
    return Response.redirect(
      new URL("/contact?error=email", request.url),
      303
    );
  }

  if (!captcha) {
    return Response.redirect(
      new URL("/contact?error=captcha", request.url),
      303
    );
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET || "";
  if (!recaptchaSecret) {
    return Response.redirect(
      new URL("/contact?error=captcha", request.url),
      303
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  const captchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: captcha,
        remoteip: ip
      }).toString()
    }
  );

  const captchaResult = await captchaResponse.json();
  if (!captchaResult.success) {
    return Response.redirect(
      new URL("/contact?error=captcha", request.url),
      303
    );
  }

  // Google reports where the challenge was solved. Without this check a valid
  // token is a valid token no matter where it came from: the site key is
  // public, so anyone can embed it on their own page, solve the checkbox
  // there, and post the token here. Dropping silently, as above.
  if (!isAllowedCaptchaHostname(captchaResult.hostname, siteConfig.url)) {
    console.warn(
      `Contact form: captcha solved on unexpected host (${captchaResult.hostname})`
    );
    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  }

  const smtpHost = process.env.SMTP_HOST || "";
  const smtpUser = process.env.SMTP_USER || "";
  const smtpPass = process.env.SMTP_PASS || "";
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const mailTo = process.env.MAIL_TO || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
    return Response.redirect(
      new URL("/contact?error=send", request.url),
      303
    );
  }

  const transport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const { subject, html, text } = buildEstimateEmail({
    first,
    last,
    email,
    phone,
    service,
    message
  });

  try {
    await transport.sendMail({
      from: `"Imperial Chimney & Masonry" <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text,
      html
    });

    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch (error) {
    console.error("Mailer error:", error);
    return Response.redirect(
      new URL("/contact?error=send", request.url),
      303
    );
  }
}
