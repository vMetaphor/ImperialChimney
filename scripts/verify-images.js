const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "public", "assets", "img");
(async () => {
  let bad = 0, ok = 0;
  for (const f of fs.readdirSync(dir).filter((x) => /\.(jpe?g|png|webp|svg)$/i.test(x))) {
    const p = path.join(dir, f);
    if (/\.svg$/i.test(f)) { ok++; continue; }
    try {
      const m = await sharp(await fs.promises.readFile(p)).metadata();
      if (!m.width) throw new Error("no dimensions");
      ok++;
    } catch (e) {
      bad++;
      console.log(`  CORRUPT  ${f}  (${Math.round(fs.statSync(p).size / 1024)} KB)  ${e.message}`);
    }
  }
  console.log(`\ndecodable: ${ok}   corrupt: ${bad}`);
})();
