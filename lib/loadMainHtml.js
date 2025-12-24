import fs from "fs";
import path from "path";

const MAIN_REGEX = /<main>([\s\S]*?)<\/main>/i;

export function loadMainHtml(filename, { replacements = [] } = {}) {
  const filePath = path.join(process.cwd(), filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(MAIN_REGEX);
  let html = match ? match[1] : "";

  html = html.replace(/\s*<script[\s\S]*?<\/script>\s*/gi, "");
  html = html.replace(/(src|href)="assets\//gi, "$1=\"/assets/");

  replacements.forEach(([pattern, replacement]) => {
    html = html.replace(pattern, replacement);
  });

  return html.trim();
}
