import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { gone, redirects } from "../content/redirects.mjs";

/**
 * `next export` emits /fa/ and /en/ but nothing at the root, so the bare
 * domain would 404 on any host that doesn't honour public/_redirects.
 * llms.txt states the bare domain goes to /fa (Persian is the primary
 * audience), so ship a real root document that does it three ways:
 * a canonical pointing at /fa/, a meta refresh, and a script redirect
 * that keeps any query string or hash.
 */
const html = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ARTINEXT</title>
<meta name="google-site-verification" content="__KQ4LYB2VWUh-e_l24qlvw9E4Kf10IcHPl0w8zsARA">
<link rel="canonical" href="https://artinext.ir/fa/">
<link rel="alternate" hreflang="fa" href="https://artinext.ir/fa/">
<link rel="alternate" hreflang="en" href="https://artinext.ir/en/">
<link rel="alternate" hreflang="x-default" href="https://artinext.ir/fa/">
<meta http-equiv="refresh" content="0; url=/fa/">
<meta name="robots" content="noindex, follow">
<style>html{background:#0b0c10;color:#e9ebef;font-family:system-ui,sans-serif}
body{margin:0;display:grid;min-height:100dvh;place-items:center}
a{color:#9ec1ac}</style>
<script>location.replace("/fa/" + location.search + location.hash);</script>
</head>
<body>
<p><a href="/fa/">ادامه به سایت آرتینکست</a> &middot; <a href="/en/">English</a></p>
</body>
</html>
`;

await writeFile(join("out", "index.html"), html, "utf8");
console.log("postbuild: wrote out/index.html (root -> /fa/)");


/**
 * Add a font preload to every exported page.
 *
 * The text that decides LCP is set in a webfont, so the font is on the
 * critical path: without a preload the browser cannot even discover it until
 * the stylesheet has parsed, which is one extra serial hop.
 *
 * Inlining the stylesheets was tried here and measured worse, badly — a 35KB
 * <style> block in the document pushed observed first paint from 0.5s to
 * 2.5s and Speed Index from 1.5s to 4.3s, because the parser has to take the
 * whole sheet before it can paint anything. Two small gzipped stylesheet
 * requests beat that comfortably. Left as a note so it is not re-attempted.
 */
function preloadFonts(css, html) {
  const lang = /<html[^>]*lang="([a-z-]+)"/.exec(html)?.[1] ?? "en";
  // The Persian headline and body are both Kufi, so /fa/ needs one face
  // above the fold. English sets the headline in the mono and the body in
  // the sans, so it needs both.
  const vars = lang === "fa" ? ["--font-fa"] : ["--font-mono", "--font-sans"];

  // Resolve each custom property to the family name Next generated for it,
  // rather than hard-coding names — one of these faces is self-hosted and
  // gets a hashed family, and all of them change if the fonts change.
  const families = new Set();
  for (const name of vars) {
    const value = new RegExp(`${name}:\s*([^;}]+)`).exec(css)?.[1];
    if (!value) continue;
    const first = value.split(",")[0].trim().replace(/^['"]|['"]$/g, "");
    if (first) families.add(first);
  }

  const faces = [...css.matchAll(/@font-face\s*\{(.*?)\}/gs)];
  const urls = new Set();

  for (const [, body] of faces) {
    const family = /font-family:\s*['"]?([^;'"]+)['"]?/.exec(body)?.[1]?.trim();
    const url = /url\(([^)]+)\)/.exec(body)?.[1];
    if (!family || !url || !families.has(family)) continue;
    // Google splits a family across unicode subsets and marks the primary
    // one `.p.`; a self-hosted face is a single file with no marker.
    const siblings = faces.filter(([, b]) => b.includes(`font-family:${family}`));
    const hasPrimary = siblings.some(([, b]) => /url\([^)]*\.p\./.test(b));
    if (!hasPrimary || url.includes(".p.")) urls.add(url);
  }

  return [...urls]
    .map((u) => `<link rel="preload" as="font" type="font/woff2" href="${u}" crossorigin="anonymous">`)
    .join("");
}

async function addFontPreloads() {
  const pages = [];
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".html")) pages.push(full);
    }
  };
  await walk("out");

  const cache = new Map();
  let touched = 0;

  for (const page of pages) {
    const html = await readFile(page, "utf8");
    const links = [...html.matchAll(/<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+)"/g)];
    if (!links.length) continue;

    let css = "";
    for (const [, href] of links) {
      if (!cache.has(href)) cache.set(href, await readFile(join("out", href), "utf8"));
      css += cache.get(href);
    }

    const preloads = preloadFonts(css, html);
    if (!preloads) continue;

    await writeFile(page, html.replace("</head>", preloads + "</head>"), "utf8");
    touched += 1;
  }

  console.log(`postbuild: added font preloads to ${touched} page(s)`);
}

await addFontPreloads();


/**
 * Emit a disposition for every URL V2 published that V3 does not build.
 *
 * A static export has no way to answer with a status code, so this ships two
 * layers and lets whichever one the host understands win:
 *
 *   1. An HTML stub at the old path. Works on any host, GitHub Pages
 *      included. For a redirect it carries a canonical plus an instant meta
 *      refresh, which Google reads as a redirect and follows; for a 410 it
 *      carries `noindex` and says the page is gone. This is strictly weaker
 *      than a real status code — it is the ceiling on a status-code-less host.
 *
 *   2. Rules appended to _redirects, which Netlify and Cloudflare Pages read
 *      and turn into real 301s. Netlify honours the 410 lines too; Cloudflare
 *      Pages does not support 410 in _redirects, so out/gone-urls.txt is
 *      written for pasting into a Cloudflare Redirect Rule.
 *
 * If the site moves back behind Cloudflare, layer 2 takes over and layer 1
 * simply stops being reached. Nothing needs to change here.
 */
const COPY = {
  fa: {
    lang: "fa", dir: "rtl",
    movedTitle: "منتقل شد",
    movedBody: (to) => `این صفحه به <a href="${to}">نشانی جدید</a> منتقل شده است.`,
    goneTitle: "این صفحه حذف شده است",
    goneBody: `این صفحه دیگر وجود ندارد. به <a href="/fa/">صفحه اصلی</a> بروید.`,
  },
  en: {
    lang: "en", dir: "ltr",
    movedTitle: "Moved",
    movedBody: (to) => `This page has moved to <a href="${to}">its new address</a>.`,
    goneTitle: "This page is gone",
    goneBody: `This page no longer exists. Go to the <a href="/en/">homepage</a>.`,
  },
};

const SHELL = (c, { title, body, head }) => `<!doctype html>
<html lang="${c.lang}" dir="${c.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${head}
<style>html{background:#0b0c10;color:#e9ebef;font-family:system-ui,sans-serif}
body{margin:0;display:grid;min-height:100dvh;place-items:center;text-align:center;padding:2rem}
a{color:#9ec1ac}</style>
</head>
<body><p>${body}</p></body>
</html>
`;

function copyFor(path) {
  return path.startsWith("/en/") ? COPY.en : COPY.fa;
}

async function writeStub(path, html) {
  // Every path in the map ends in "/", so the file is that directory's index.
  const dir = join("out", path.replace(/^\/|\/$/g, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html, "utf8");
}

const NL = String.fromCharCode(10);
const GENERATED = "# Generated by postbuild from content/redirects.mjs - do not hand-edit.";

async function emitDispositions() {
  const rules = [];
  const stubs = new Set();

  for (const [from, to] of redirects) {
    const c = copyFor(from);
    // No `noindex` here on purpose: noindex tells Google to drop the URL,
    // which throws away the signal the canonical exists to consolidate.
    await writeStub(from, SHELL(c, {
      title: c.movedTitle,
      body: c.movedBody(to),
      head: `<link rel="canonical" href="https://artinext.ir${to}">
<meta name="robots" content="follow">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace("${to}" + location.search + location.hash);</script>`,
    }));
    rules.push(`${from}  ${to}  301`);
    stubs.add(from);
  }

  for (const path of gone) {
    const c = copyFor(path);
    await writeStub(path, SHELL(c, {
      title: c.goneTitle,
      body: c.goneBody,
      head: `<meta name="robots" content="noindex">`,
    }));
    rules.push(`${path}  /404.html  410`);
    stubs.add(path);
  }

  // Idempotent: postbuild can be run standalone against an existing out/,
  // so drop any previously generated block before appending a fresh one.
  const existing = await readFile(join("out", "_redirects"), "utf8").catch(() => "");
  const base = existing.split(GENERATED)[0].trimEnd();
  await writeFile(
    join("out", "_redirects"),
    `${base}

${GENERATED}
${rules.join(NL)}
`,
    "utf8",
  );

  await writeFile(
    join("out", "gone-urls.txt"),
    `# Paths that must answer 410 Gone.
` +
    `# Cloudflare Pages ignores 410 in _redirects - paste these into a
` +
    `# Redirect Rule (or a Worker) if the site sits behind Cloudflare.
` +
    gone.map((p) => `https://artinext.ir${p}`).join(NL) + NL,
    "utf8",
  );

  console.log(
    `postbuild: wrote ${redirects.length} redirect stub(s), ${gone.length} gone stub(s), ${rules.length} _redirects rule(s)`,
  );
  return stubs;
}

/**
 * Generate sitemap.xml from what was actually exported.
 *
 * The previous sitemap was hand-maintained, which is how it came to list
 * /fa instead of /fa/ and how it kept advertising pages that no longer
 * existed. Deriving it from out/ means the sitemap cannot drift from the
 * build again: if a page is not exported, it cannot be listed.
 *
 * Excluded: the root shell (noindex, redirects to /fa/), the 404 page, every
 * redirect or gone stub - a sitemap is a list of pages worth indexing, and
 * pointing a crawler at a redirect is the exact mistake being undone - and
 * any page that ships a noindex robots tag.
 *
 * That last rule is read from the built HTML rather than kept as a list here.
 * An experiment or a staging page marks itself noindex in its own metadata;
 * having to also remember a second list in this file is how a page ends up
 * excluded from Google and advertised in the sitemap at the same time.
 */
async function generateSitemap(stubs) {
  const paths = [];
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name === "index.html") {
        const rel = dir.split(String.fromCharCode(92)).join("/").replace(/^out/, "");
        paths.push(rel === "" ? "/" : `${rel}/`);
      }
    }
  };
  await walk("out");

  const candidates = paths
    .filter((p) => p !== "/" && p !== "/404/" && !stubs.has(p))
    .sort();

  const indexable = [];
  const skipped = [];
  for (const p of candidates) {
    const html = await readFile(join("out", p.replace(/^\/|\/$/g, ""), "index.html"), "utf8");
    // Matches <meta name="robots" content="... noindex ..."> in any order.
    const tag = /<meta[^>]+name=["']robots["'][^>]*>/i.exec(html);
    if (tag && /noindex/i.test(tag[0])) skipped.push(p);
    else indexable.push(p);
  }

  const alt = (p) => {
    const other = p.startsWith("/fa/") ? p.replace("/fa/", "/en/") : p.replace("/en/", "/fa/");
    const fa = p.startsWith("/fa/") ? p : other;
    const en = p.startsWith("/en/") ? p : other;
    return [
      `<xhtml:link rel="alternate" hreflang="fa" href="https://artinext.ir${fa}" />`,
      `<xhtml:link rel="alternate" hreflang="en" href="https://artinext.ir${en}" />`,
      `<xhtml:link rel="alternate" hreflang="x-default" href="https://artinext.ir${fa}" />`,
    ].join(NL);
  };

  const body = indexable
    .map((p) => `<url>
<loc>https://artinext.ir${p}</loc>
${alt(p)}
</url>`)
    .join(NL);

  await writeFile(
    join("out", "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
` +
    `${body}
</urlset>
`,
    "utf8",
  );

  console.log(
    `postbuild: wrote sitemap.xml with ${indexable.length} URL(s)` +
      (skipped.length ? ` (${skipped.length} noindex page(s) excluded: ${skipped.join(", ")})` : ""),
  );
}

const stubPaths = await emitDispositions();
await generateSitemap(stubPaths);


/**
 * Fail the build if a deploy-critical file did not reach out/.
 *
 * Both of these are one-line files whose absence breaks the site silently,
 * which is the worst way to break a site: the build goes green, the deploy
 * succeeds, and the damage only shows up as deindexing weeks later.
 *
 *   CNAME      - GitHub Pages serves the custom domain from this file when
 *                the output is pushed to a branch. Without it artinext.ir
 *                stops resolving to the site.
 *   .nojekyll  - without it GitHub Pages runs the output through Jekyll,
 *                which skips every directory starting with an underscore.
 *                That is all of /_next/, so every stylesheet and script
 *                404s and the page renders naked.
 */
async function assertDeployFiles() {
  const required = ["CNAME", ".nojekyll"];
  const missing = [];
  for (const name of required) {
    try {
      await readFile(join("out", name));
    } catch {
      missing.push(name);
    }
  }
  if (missing.length) {
    throw new Error(
      `postbuild: missing deploy file(s) in out/: ${missing.join(", ")}. ` +
      `Add them to public/ - the site will deploy green and break silently without them.`,
    );
  }
  console.log(`postbuild: deploy files present (${required.join(", ")})`);
}

await assertDeployFiles();
