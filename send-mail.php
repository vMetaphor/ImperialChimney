<?php
// ---------- IIS-friendly error logging ----------
error_reporting(E_ALL);
ini_set('display_errors', '0'); // keep off for visitors
ini_set('log_errors', '1');
ini_set('error_log', __DIR__ . '/php-error.log');

function log_line($msg) {
    @file_put_contents(__DIR__ . '/php-error.log', date('Y-m-d H:i:s') . " | " . $msg . PHP_EOL, FILE_APPEND);
}

// ---------- Only accept POST ----------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact');
    exit;
}

// ---------- Config ----------
$toEmail = 'info@imperialchimney-masonry.com';

// reCAPTCHA SECRET (server-side secret, NOT the site key)
$recaptchaSecret = '6LeRGC4sAAAAAL4CkOhfCx_E9GEDyh_BepGPhXrb';

// IONOS SMTP
$smtpHost = 'mail.privateemail.com';
$smtpUser = 'info@imperialchimney-masonry.com';
$smtpPass = 'Andrew071618!'; // <-- change this (your password was exposed)
$smtpPort = 587; // try 465 if 587 blocked

// ---------- Validate form ----------
$first   = trim($_POST['first_name'] ?? '');
$last    = trim($_POST['last_name'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$email   = trim($_POST['email'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$first || !$last || !$phone || !$email || !$service || !$message) {
    header('Location: /contact?error=missing');
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /contact?error=email');
    exit;
}

// ---------- Verify reCAPTCHA (cURL - IIS workaround) ----------
$captcha = $_POST['g-recaptcha-response'] ?? '';
if (!$captcha) {
    header('Location: /contact?error=captcha');
    exit;
}

$ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'secret'   => $recaptchaSecret,
        'response' => $captcha,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,

    // TEMP FIX: disable SSL verification so IIS/PHP without CA bundle can still verify reCAPTCHA
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => 0,
]);

$verifyResponse = curl_exec($ch);
$curlErr = curl_error($ch);
curl_close($ch);

if ($verifyResponse === false) {
    log_line("reCAPTCHA curl error: {$curlErr}");
    header('Location: /contact?error=captcha');
    exit;
}

$captchaResult = json_decode($verifyResponse, true);
if (empty($captchaResult['success'])) {
    log_line("reCAPTCHA failed: " . $verifyResponse);
    header('Location: /contact?error=captcha');
    exit;
}

// ---------- Load PHPMailer (no 'use' statements) ----------
$base = __DIR__ . '/includes/PHPMailer/src/';
$need = ['PHPMailer.php', 'SMTP.php', 'Exception.php'];
foreach ($need as $f) {
    if (!file_exists($base . $f)) {
        log_line("Missing PHPMailer file: {$base}{$f}");
        http_response_code(500);
        exit("Server mail library missing.");
    }
}
require_once $base . 'Exception.php';
require_once $base . 'PHPMailer.php';
require_once $base . 'SMTP.php';

// ---------- Build email ----------
$subject = 'New Website Estimate Request';
// ---------- Build a nice HTML email (inbox-style) ----------
$safeFirst   = htmlspecialchars($first ?? '', ENT_QUOTES, 'UTF-8');
$safeLast    = htmlspecialchars($last ?? '', ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email ?? '', ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($phone ?? '', ENT_QUOTES, 'UTF-8');
$safeService = htmlspecialchars($service ?? '', ENT_QUOTES, 'UTF-8');
$safeMsg     = nl2br(htmlspecialchars($message ?? '', ENT_QUOTES, 'UTF-8'));

$ticketId = date('Ymd-His');
$replyLink = 'mailto:' . rawurlencode($email ?? '') . '?subject=' . rawurlencode('Re: Website Estimate Request');

$body = <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{$subject}</title>
</head>
<body style="margin:0;padding:0;background:#f2f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:680px;max-width:680px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">

          <tr>
            <td style="background:#2f3139;padding:28px 18px;text-align:center;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:32px;color:#ffffff;font-weight:800;letter-spacing:0.5px;">
                NEW MESSAGE #{$ticketId}
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
                        <div><strong>Name:</strong> {$safeFirst} {$safeLast}</div>
                        <div><strong>Email:</strong> {$safeEmail}</div>
                        <div><strong>Phone:</strong> {$safePhone}</div>
                        <div><strong>Service:</strong> {$safeService}</div>
                        <div style="margin-top:10px;"><strong>Message:</strong><br>{$safeMsg}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px 0 6px 0;">
                  <tr>
                    <td>
                      <a href="{$replyLink}"
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
</html>
HTML;

$altBody =
"New Website Estimate Request\n\n" .
"Name: {$first} {$last}\n" .
"Email: {$email}\n" .
"Phone: {$phone}\n" .
"Service: {$service}\n\n" .
"Message:\n{$message}\n";
// ---------- Send via IONOS SMTP ----------
$mail = new \PHPMailer\PHPMailer\PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host     = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;

    if ((int)$smtpPort === 465) {
        $mail->Port       = 465;
        $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->Port       = 587;
        $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    }

    // IONOS prefers From = authenticated mailbox
    $mail->setFrom('info@imperialchimney-masonry.com', 'Imperial Chimney & Masonry');
    $mail->addAddress($toEmail);

    // Reply-To customer
    $mail->addReplyTo($email, "{$first} {$last}");

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = $altBody;
$mail->send();

    header('Location: /contact?sent=1');
    exit;

} catch (\Throwable $e) {
    log_line("PHPMailer ErrorInfo: {$mail->ErrorInfo} | Exception: {$e->getMessage()}");
    header('Location: /contact?error=send');
    exit;
}
