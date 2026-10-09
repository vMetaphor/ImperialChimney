const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "assets", "img");

(async () => {
  const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  const rows = [];
  for (const f of files) {
    const p = path.join(dir, f);
    const size = fs.statSync(p).size;
    let m = {};
    try {
      m = await sharp(p).metadata();
    } catch (e) {
      m = { err: e.message };
    }
    rows.push({ f, kb: Math.round(size / 1024), w: m.width, h: m.height, fmt: m.format, alpha: m.hasAlpha });
  }
  rows.sort((a, b) => b.kb - a.kb);
  for (const r of rows) {
    console.log(`${String(r.kb).padStart(5)} KB  ${(r.w + "x" + r.h).padEnd(12)} ${r.fmt}${r.alpha ? " alpha" : ""}  ${r.f}`);
  }
  console.log("TOTAL", Math.round(rows.reduce((s, r) => s + r.kb, 0) / 1024), "MB /", rows.length, "files");
})();
