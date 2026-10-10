/**
 * Verifies lib/contactServices.js still matches the Service dropdown in
 * lib/pageHtml.js.
 *
 * The API rejects any service value not on that list, so if someone edits the
 * dropdown and forgets the list, real customers start getting silently
 * dropped. This catches that.
 *
 *   node scripts/check-service-options.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "lib", "pageHtml.js"), "utf8");
const list = fs.readFileSync(path.join(root, "lib", "contactServices.js"), "utf8");

const selectBlock = html.match(/<select id="service"[\s\S]*?<\/select>/);
if (!selectBlock) {
  console.error("Could not find the service <select> in lib/pageHtml.js");
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const fromMarkup = [...selectBlock[0].matchAll(/<option value="([^"]*)"/g)]
  .map((m) => decode(m[1]))
  .filter(Boolean);

const fromList = [...list.matchAll(/^\s{2}"((?:[^"\\]|\\.)*)",?$/gm)].map((m) =>
  m[1].replace(/\\"/g, '"')
);

const missing = fromMarkup.filter((v) => !fromList.includes(v));
const extra = fromList.filter((v) => !fromMarkup.includes(v));

console.log(`dropdown options: ${fromMarkup.length}`);
console.log(`allow-list entries: ${fromList.length}`);

if (missing.length || extra.length) {
  if (missing.length) {
    console.error("\nIn the dropdown but NOT allowed (customers would be dropped):");
    missing.forEach((v) => console.error(`  - ${v}`));
  }
  if (extra.length) {
    console.error("\nAllowed but no longer in the dropdown:");
    extra.forEach((v) => console.error(`  - ${v}`));
  }
  process.exit(1);
}

console.log("\nIn sync.");
