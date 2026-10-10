/**
 * The exact values the Service dropdown can submit.
 *
 * These mirror the <option value="..."> entries in contactHtml (lib/pageHtml.js)
 * AFTER the browser has decoded the HTML entities in those attributes - so
 * "Brick &amp; Stone Repointing" in the markup arrives here as
 * "Brick & Stone Repointing".
 *
 * That distinction is the point. A person using the form can only ever submit
 * one of these decoded strings. A script that scrapes the page source and
 * posts the fields back without decoding sends the raw "&amp;" instead, which
 * is exactly how the 10 Oct spam gave itself away:
 *
 *   Service: Gas Log &amp; Gas Fireplace Tune-Up
 *
 * Anything not on this list did not come from the form.
 *
 * Keep in sync with the <select id="service"> block in lib/pageHtml.js.
 * scripts/check-service-options.js verifies the two still match.
 */
export const SERVICE_OPTIONS = [
  "Chimney Sweeping",
  "Chimney Repairs",
  "Chimney Re-Lining",
  "Masonry Services",
  "Brick & Stone Repointing",
  "Pressure Washing",
  "Fireplace Repairs",
  "Chimney Cap Installation & Replacement",
  "Chimney Leak Diagnostics & Repairs",
  "Chimney Flashing Repair & Replacement",
  "Masonry & Chimney Waterproofing",
  "Dryer Vent Cleaning",
  "Gas Log & Gas Fireplace Tune-Up",
  "Smoke, Odor & Draft Issue Diagnostics"
];

export function isKnownService(value) {
  return SERVICE_OPTIONS.includes(String(value).trim());
}
