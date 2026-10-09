const TIMEZONE = "America/New_York";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Human-readable reference for a submission, in the shop's local timezone.
 *
 * The previous implementation sliced a raw ISO string
 * (`new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14)`), which
 * produced an unreadable 14-digit run like "20261009185228" and was offset
 * from Pottstown time by 4-5 hours.
 */
export function buildTicketId(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  })
    .formatToParts(now)
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});

  return `IC-${parts.year}${parts.month}${parts.day}-${parts.hour}${parts.minute}`;
}

/**
 * `mailto:` link for the "Reply to Customer" button.
 *
 * Two things matter here:
 *  - The address is NOT percent-encoded. The old version wrapped the whole
 *    address in encodeURIComponent, so "a@b.com" became "a%40b.com" and
 *    several mail clients failed to resolve a recipient at all.
 *  - Query values use encodeURIComponent rather than URLSearchParams, because
 *    URLSearchParams encodes a space as "+" and mailto needs %20 (otherwise
 *    the "+" shows up literally in the drafted subject and body).
 *
 * The caller is responsible for HTML-escaping the result before putting it in
 * an href, so the "&" between parameters becomes "&amp;".
 */
export function buildReplyLink({ email, first, service, ticketId }) {
  const body = `Hi ${first},\n\nThanks for reaching out to Imperial Chimney & Masonry about ${
    service ? service.toLowerCase() : "your project"
  }.\n\n`;

  return (
    `mailto:${email}` +
    `?subject=${encodeURIComponent(`Re: Your estimate request [${ticketId}]`)}` +
    `&body=${encodeURIComponent(body)}`
  );
}

/** `tel:` link for the phone the customer typed, or "" if it held no digits. */
export function buildCallLink(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits ? `tel:${digits}` : "";
}

/**
 * Renders the notification email for one estimate request.
 *
 * Returns the pieces nodemailer needs plus the derived values, so the route
 * handler stays focused on validation and delivery.
 */
export function buildEstimateEmail({
  first = "",
  last = "",
  email = "",
  phone = "",
  service = "",
  message = "",
  now = new Date()
}) {
  const ticketId = buildTicketId(now);
  const receivedAt = now.toLocaleString("en-US", {
    timeZone: TIMEZONE,
    dateStyle: "long",
    timeStyle: "short"
  });

  const customerName = `${first} ${last}`.trim();
  const replyLink = buildReplyLink({ email, first, service, ticketId });
  const callLink = buildCallLink(phone);

  // Every notification used to arrive titled "New Website Estimate Request",
  // which made the inbox a wall of identical subjects. Lead with who it is so
  // the list is scannable and the reference is searchable.
  const subject = `New Estimate Request - ${customerName}${
    service ? ` (${service})` : ""
  } [${ticketId}]`;

  const phoneCell = callLink
    ? `<a href="${escapeHtml(callLink)}" style="color:#1d4ed8;">${escapeHtml(phone)}</a>`
    : escapeHtml(phone);

  const callButton = callLink
    ? `<td style="padding-right:10px;">
                      <a href="${escapeHtml(callLink)}"
                         style="display:inline-block;background:#e25b1a;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;
                                font-size:14px;line-height:16px;font-weight:700;padding:12px 18px;border-radius:6px;">
                        Call ${escapeHtml(phone)}
                      </a>
                    </td>`
    : "";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f2f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:680px;max-width:680px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#2f3139;padding:24px 18px;text-align:center;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:30px;color:#ffffff;font-weight:800;letter-spacing:0.5px;">
                New Estimate Request
              </div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#c9ccd4;margin-top:6px;">
                ${escapeHtml(ticketId)} &nbsp;&middot;&nbsp; ${escapeHtml(receivedAt)}
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
                        <div><strong>Name:</strong> ${escapeHtml(customerName)}</div>
                        <div><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8;">${escapeHtml(email)}</a></div>
                        <div><strong>Phone:</strong> ${phoneCell}</div>
                        <div><strong>Service:</strong> ${escapeHtml(service)}</div>
                        <div style="margin-top:10px;"><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</div>
                      </div>
                    </td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px 0 6px 0;">
                  <tr>
                    ${callButton}
                    <td>
                      <a href="${escapeHtml(replyLink)}"
                         style="display:inline-block;background:#16a085;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;
                                font-size:14px;line-height:16px;font-weight:700;padding:12px 18px;border-radius:6px;">
                        Reply to Customer
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#6b7280;margin-top:4px;">
                  Hitting Reply in your mail app also goes straight to ${escapeHtml(email)}.
                </div>
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

  const text =
    `New Estimate Request\n` +
    `${ticketId} - ${receivedAt}\n\n` +
    `Name: ${customerName}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n\n` +
    `Message:\n${message}\n`;

  return { subject, html, text, replyLink, callLink, ticketId, receivedAt };
}
