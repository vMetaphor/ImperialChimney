/**
 * Recompresses the photos in public/assets/img in place.
 *
 * Filenames and extensions are preserved, so no markup has to change. The
 * originals are committed to git, so `git checkout -- public/assets/img` is a
 * full undo.
 *
 * Usage:
 *   node scripts/optimize-images.js --dry    # report only
 *   node scripts/optimize-images.js          # rewrite the files
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "assets", "img");
const dryRun = process.argv.includes("--dry");

// Files we never touch: the favicon, and two files that are really WebP data
// behind a .png extension (re-encoding them would be a downgrade).
const skip = new Set(["favicon.png", "service-relining.png", "service-flue-beforeafter.png"]);

// Images whose on-page display size is much smaller than the general photo cap.
// Sizes are roughly 2x the largest CSS size so they stay sharp on retina.
const maxEdge = {
  "logo.png": 360, // .logo-img caps at 140px tall
  "logo-imperial.png": 360,
  "owner-nick.png": 440 // .owner-img is 220px
};
const DEFAULT_MAX_EDGE = 1400;
const MIN_BYTES = 60 * 1024; // leave already-small files alone

async function optimize(file) {
  const filePath = path.join(dir, file);
  // Read the bytes up front rather than handing sharp the path: on Windows a
  // path-backed sharp instance keeps the file open, and writing the optimized
  // result back to that same path then fails.
  const source = await fs.promises.readFile(filePath);
  const before = source.length;
  const image = sharp(source, { failOn: "none" });
  const meta = await image.metadata();
  const limit = maxEdge[file] || DEFAULT_MAX_EDGE;
  const longEdge = Math.max(meta.width || 0, meta.height || 0);

  let pipeline = image.rotate(); // bake in EXIF orientation before stripping it

  if (longEdge > limit) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? limit : null,
      height: meta.height > meta.width ? limit : null,
      withoutEnlargement: true
    });
  }

  // Keep the original container format so every existing src still resolves.
  if (meta.format === "jpeg") {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true });
  } else if (meta.format === "png") {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true, effort: 8 });
  } else {
    return { file, skipped: `unsupported format: ${meta.format}` };
  }

  const output = await pipeline.toBuffer();

  // Never write a result that is bigger than what we started with.
  if (output.length >= before) {
    return { file, before, after: before, skipped: "no gain" };
  }

  if (!dryRun) await fs.promises.writeFile(filePath, output);
  return { file, before, after: output.length, w: meta.width, h: meta.height, limit };
}

(async () => {
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .filter((f) => !skip.has(f))
    .filter((f) => fs.statSync(path.join(dir, f)).size >= MIN_BYTES);

  let before = 0;
  let after = 0;
  const results = [];

  for (const file of files) {
    try {
      const r = await optimize(file);
      results.push(r);
      before += r.before || 0;
      after += r.after || r.before || 0;
    } catch (e) {
      results.push({ file, error: e.message });
    }
  }

  results.sort((a, b) => (b.before - b.after) - (a.before - a.after));
  for (const r of results) {
    if (r.error) {
      console.log(`  ERROR  ${r.file}: ${r.error}`);
    } else if (r.skipped) {
      console.log(`   skip  ${r.file} (${r.skipped})`);
    } else {
      const pct = Math.round((1 - r.after / r.before) * 100);
      console.log(
        `${String(Math.round(r.before / 1024)).padStart(5)} KB -> ${String(Math.round(r.after / 1024)).padStart(4)} KB  (-${String(pct).padStart(2)}%)  ${r.file}`
      );
    }
  }

  console.log("");
  console.log(`${dryRun ? "[dry run] " : ""}${files.length} files`);
  console.log(`  before: ${(before / 1048576).toFixed(1)} MB`);
  console.log(`   after: ${(after / 1048576).toFixed(1)} MB`);
  console.log(`   saved: ${((before - after) / 1048576).toFixed(1)} MB (${Math.round((1 - after / before) * 100)}%)`);
})();
