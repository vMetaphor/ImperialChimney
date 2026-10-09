import nodemailer from "nodemailer";
import { buildEstimateEmail } from "../../../lib/estimateEmail";

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
