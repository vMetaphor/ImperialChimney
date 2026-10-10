/**
 * Spam checks for the estimate form.
 *
 * reCAPTCHA v2 alone is not enough here. Two reasons:
 *  1. The site key is public (it has to be - it ships in the page HTML), so a
 *     token can be solved somewhere other than this site. Google tells us
 *     where it was solved; we have to actually look.
 *  2. A v2 checkbox is cheap for human-solving farms, so some junk arrives
 *     with a perfectly valid token. The heuristics below raise the cost
 *     without putting another obstacle in front of real customers.
 */

/** Hostnames a reCAPTCHA solution is allowed to have been solved on. */
export function isAllowedCaptchaHostname(hostname, siteUrl) {
  if (!hostname) return false;

  const allowed = new Set(["localhost", "127.0.0.1"]);
  try {
    const host = new URL(siteUrl).hostname;
    allowed.add(host);
    allowed.add(host.startsWith("www.") ? host.slice(4) : `www.${host}`);
  } catch {
    // A malformed siteUrl should not widen what we accept.
  }

  // Vercel preview deployments get a generated subdomain.
  if (hostname.endsWith(".vercel.app")) return true;

  return allowed.has(hostname);
}

const URL_SOURCE = /\b(?:https?:\/\/|www\.)\S+|\[url[=\]]|<a\s+href/.source;

// Two separate regexes on purpose. A /g regex keeps `lastIndex` between
// .test() calls, so reusing one object for both counting and testing makes
// every other .test() return false.
const URL_PATTERN_ALL = new RegExp(URL_SOURCE, "gi");
const URL_PATTERN_ONE = new RegExp(URL_SOURCE, "i");

const BBCODE_PATTERN = /\[\/?(?:url|link|b|i)\b/i;

// Phrases that show up in SEO/backlink/crypto blasts and effectively never in
// a note about a chimney.
const SPAM_PHRASES = [
  "seo service",
  "seo expert",
  "search engine optimi",
  "backlink",
  "guest post",
  "link building",
  "rank your website",
  "first page of google",
  "web design service",
  "crypto",
  "bitcoin",
  "forex",
  "binary option",
  "casino",
  "viagra",
  "cialis",
  "loan offer",
  "investment opportunity",
  "bulk email",
  "email list",
  "lead generation service",
  "increase your traffic",
  "digital marketing agency"
];

/**
 * Returns a short machine-readable reason when a submission looks automated,
 * or null when it should go through.
 *
 * `elapsedMs` is how long the visitor had the form open. It is client-reported
 * and therefore spoofable, which is fine: it is one signal among several, and
 * a missing or nonsensical value is not by itself treated as spam.
 */
export function detectSpam({
  honeypot = "",
  elapsedMs = null,
  message = "",
  first = "",
  last = "",
  maxLinks = 2,
  minElapsedMs = 3000
}) {
  // Nothing renders this field visibly, so a human cannot fill it in.
  if (String(honeypot).trim()) return "honeypot";

  // Humans do not complete six fields in under three seconds.
  if (typeof elapsedMs === "number" && Number.isFinite(elapsedMs) && elapsedMs >= 0) {
    if (elapsedMs < minElapsedMs) return "too-fast";
  }

  const body = String(message);
  const links = body.match(URL_PATTERN_ALL);
  if (links && links.length > maxLinks) return "too-many-links";
  if (BBCODE_PATTERN.test(body)) return "markup-in-message";

  const haystack = `${first} ${last} ${body}`.toLowerCase();
  if (SPAM_PHRASES.some((phrase) => haystack.includes(phrase))) return "spam-phrase";

  // A name field holding a URL is a bot filling every input with its payload.
  if (URL_PATTERN_ONE.test(`${first} ${last}`)) return "link-in-name";

  return null;
}
