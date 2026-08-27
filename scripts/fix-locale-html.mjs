// next build's root layout can't read the [locale] param, so every
// exported page ships the root layout's hardcoded lang="fa" dir="rtl".
// This rewrites the <html> tag in the English export to match its
// actual locale, so crawlers and first paint see the correct value
// instead of waiting on LocaleHtmlSync's client-side correction.

import { readdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const EN_DIR = path.join(OUT_DIR, "en");
const EN_ROOT_PAGE = path.join(OUT_DIR, "en.html");

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectHtmlFiles(fullPath);
      if (entry.isFile() && entry.name.endsWith(".html")) return [fullPath];
      return [];
    })
  );
  return files.flat();
}

async function main() {
  let files;
  try {
    files = await collectHtmlFiles(EN_DIR);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`fix-locale-html: ${EN_DIR} not found, skipping`);
      return;
    }
    throw err;
  }

  try {
    await access(EN_ROOT_PAGE);
    files.push(EN_ROOT_PAGE);
  } catch {
    // /en route wasn't exported as a sibling file (e.g. trailingSlash: true) — nothing to add.
  }

  let fixed = 0;
  for (const file of files) {
    const html = await readFile(file, "utf8");
    const updated = html.replace(
      /<html lang="fa" dir="rtl">/,
      '<html lang="en" dir="ltr">'
    );
    if (updated !== html) {
      await writeFile(file, updated, "utf8");
      fixed++;
    }
  }

  console.log(`fix-locale-html: corrected lang/dir in ${fixed}/${files.length} file(s) under out/en`);
}

main();
