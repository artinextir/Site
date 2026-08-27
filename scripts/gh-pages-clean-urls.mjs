// GitHub Pages, unlike Cloudflare Pages, does not automatically serve
// foo.html for a request to /foo — it needs foo/index.html instead. Next's
// static export (trailingSlash: false, kept as-is so the Cloudflare Pages
// build stays untouched) produces flat foo.html files, so this converts
// every out/**/name.html into out/**/name/index.html for the GitHub Pages
// build specifically. Only used by .github/workflows/deploy-pages.yml —
// not part of the Cloudflare build/deploy path.
//
// out/index.html and out/404.html are left as-is: index.html already is
// the form a directory needs, and 404.html is GitHub Pages' own convention
// for a custom not-found page, served from the site root regardless of path.

import { readdir, rename, mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
    if (entry.name === "index.html" || entry.name === "404.html") continue;

    const base = entry.name.slice(0, -".html".length);
    const newDir = path.join(dir, base);
    await mkdir(newDir, { recursive: true });
    await rename(fullPath, path.join(newDir, "index.html"));
  }
}

await walk(OUT_DIR);
console.log("gh-pages-clean-urls: converted flat .html files to directory/index.html form.");
