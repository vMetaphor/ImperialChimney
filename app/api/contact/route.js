import nodemailer from "nodemailer";

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

  const subject = "New Website Estimate Request";
  const safe = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const ticketId = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
  const replyLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    "Re: Website Estimate Request"
  )}`;

  const htmlBody = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f2f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:680px;max-width:680px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#2f3139;padding:28px 18px;text-align:center;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:32px;color:#ffffff;font-weight:800;letter-spacing:0.5px;">
                NEW MESSAGE #${ticketId}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:26px 26px 10px 26px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#1f2937;">
                <div style="margin-bottom:12px;">Hello Nick,</div>
                <div style="margin-bottom:14px;">
                  You received a new website estimate request. Details are below.
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;">
                  <tr>
                    <td style="padding:14px 14px;">
                      <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#111827;">
                        <div><strong>Name:</strong> ${safe(first)} ${safe(last)}</div>
                        <div><strong>Email:</strong> ${safe(email)}</div>
                        <div><strong>Phone:</strong> ${safe(phone)}</div>
                        <div><strong>Service:</strong> ${safe(service)}</div>
                        <div style="margin-top:10px;"><strong>Message:</strong><br>${safe(message).replace(/\n/g, "<br>")}</div>
                      </div>
                    </td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px 0 6px 0;">
                  <tr>
                    <td>
                      <a href="${replyLink}"
                         style="display:inline-block;background:#16a085;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;
                                font-size:14px;line-height:16px;font-weight:700;padding:12px 18px;border-radius:6px;">
                        Reply to Customer
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#6b7280;margin-top:14px;">
                  Powered By: <strong>Imperial Chimney &amp; Masonry</strong>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textBody =
    `New Website Estimate Request\n\n` +
    `Name: ${first} ${last}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n\n` +
    `Message:\n${message}\n`;

  try {
    await transport.sendMail({
      from: `"Imperial Chimney & Masonry" <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody
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
