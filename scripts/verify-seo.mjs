// On-page SEO check for exported article pages (on-page-seo.md), V3 edition.
//
// Reads out/{fa,en}/articles/<slug>/index.html and checks the machine-checkable
// items: head metadata and lengths, OG/Twitter, one H1 carrying the primary
// keyword, the primary in the first 100 words, image attributes and srcset,
// the JSON-LD graph (BlogPosting, Person, Organization, BreadcrumbList,
// FAQPage), internal/external link counts, TOC and back-to-top, and a word
// count. The primary keyword is read back from the page's own BlogPosting
// `keywords`, so the check tests what shipped rather than a second list.
//
// Usage: node scripts/verify-seo.mjs [slug ...]   (after npm run build)
// Exits 1 if any required item fails. Word count is reported, not judged —
// the SERP average it is compared against lives in the article's notes.

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");
const only = new Set(process.argv.slice(2));

function schemaTypes(node, acc = new Set()) {
  if (Array.isArray(node)) node.forEach((n) => schemaTypes(n, acc));
  else if (node && typeof node === "object") {
    const t = node["@type"];
    if (t) (Array.isArray(t) ? t : [t]).forEach((v) => acc.add(v));
    Object.values(node).forEach((v) => schemaTypes(v, acc));
  }
  return acc;
}

const strip = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
const norm = (s) => s.toLowerCase().replace(/‌/g, "").replace(/[؟?،,.:;()«»"'—-]/g, " ").replace(/\s+/g, " ");

function check(rel, html) {
  const errors = [];
  const notes = [];
  const attr = (re) => html.match(re)?.[1];

  const title = attr(/<title>([^<]+)<\/title>/);
  if (!title) errors.push("missing <title>");
  else if (title.length < 30 || title.length > 65) errors.push(`title ${title.length} chars (target 50-60)`);
  else notes.push(`title ${title.length}`);

  const desc = attr(/<meta name="description" content="([^"]+)"/);
  if (!desc) errors.push("missing meta description");
  else if (desc.length < 100 || desc.length > 175) errors.push(`description ${desc.length} chars (target 150-160)`);
  else notes.push(`desc ${desc.length}`);

  if (!/<link rel="canonical" href="[^"]+\/"/.test(html)) errors.push("canonical missing or without trailing slash");
  for (const p of ["og:title", "og:description", "og:image", "og:url", "og:type"])
    if (!new RegExp(`<meta property="${p}" content="[^"]+"`).test(html)) errors.push(`missing ${p}`);
  if (!/<meta property="og:type" content="article"/.test(html)) errors.push("og:type is not article");
  for (const n of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"])
    if (!new RegExp(`<meta name="${n}" content="[^"]+"`).test(html)) errors.push(`missing ${n}`);
  if (!/<html lang="(fa|en)" dir="(rtl|ltr)"/.test(html)) errors.push("missing <html lang dir>");
  if (!/<meta name="viewport"/.test(html)) errors.push("missing viewport");
  if (!/<meta charSet="utf-8"/i.test(html)) errors.push("missing charset");
  if (!/hreflang="fa"/i.test(html) || !/hreflang="en"/i.test(html)) errors.push("missing hreflang alternates");

  // JSON-LD
  const types = new Set();
  let keywords = [];
  for (const [, body] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(body);
      schemaTypes(data, types);
      const post = (data["@graph"] ?? [data]).find((n) => n["@type"] === "BlogPosting");
      if (post?.keywords) keywords = post.keywords.split(",").map((k) => k.trim());
    } catch {
      errors.push("a JSON-LD block failed to parse");
    }
  }
  for (const t of ["BlogPosting", "Person", "Organization", "BreadcrumbList", "FAQPage"])
    if (!types.has(t)) errors.push(`missing ${t} JSON-LD`);

  // Headings
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  if (h1s.length !== 1) errors.push(`expected one <h1>, found ${h1s.length}`);
  const primary = keywords[0];
  if (!primary) errors.push("no primary keyword in BlogPosting.keywords");
  else if (h1s[0] && !norm(h1s[0]).includes(norm(primary))) errors.push(`H1 does not contain the primary "${primary}"`);

  // Body: the <article> element
  const article = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? "";
  if (!article) errors.push("no <article> element");
  const intro = article.match(/id="overview"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? "";
  const first100 = strip(intro).split(" ").slice(0, 100).join(" ");
  if (primary && !norm(first100).includes(norm(primary))) errors.push(`primary "${primary}" not in the first 100 words`);
  const words = strip(article).split(" ").filter(Boolean).length;
  // Body only — intro, sections and conclusion, without the FAQ, the TOC and
  // the link lists — which is what the SERP pages' counts are compared to.
  const bodyHtml =
    intro +
    [...article.matchAll(/<section id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)]
      .filter((m) => m[1] !== "faq")
      .map((m) => m[2])
      .join(" ");
  const body = strip(bodyHtml).split(" ").filter(Boolean).length;
  notes.push(`words ${words} (body ${body})`);

  // Persian house spelling (persian-rules §1): forms that must never ship.
  if (rel.startsWith("fa/")) {
    const text = strip(html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "");
    const banned = [
      [/فرایند/, "فرایند → فرآیند"],
      [/هٔ|ۀ/, "هٔ → ه‌ی"],
      [/هر کدام/, "هر کدام → هرکدام"],
      [/براساس/, "براساس → بر اساس"],
      [/همزمان/, "همزمان → هم‌زمان"],
      [/نرم افزار/, "نرم افزار → نرم‌افزار"],
      [/(^|[^؀-ۿ‌])قابل [؀-ۿ]/, "قابل + space → قابل‌"],
      [/(^|[^؀-ۿ‌])به (صورت|طور|جای|شکل|دنبال)/, "به + space → به‌"],
      [/(^|[^؀-ۿ‌])(اینجا|چطور)/, "اینجا/چطور → این‌جا/چگونه"],
      [/دورکار|گردش کار/, "دورکار/گردش کار → ریموت/جریان کاری"],
      [/[َ-ِ]/, "short-vowel marks"],
      [/[يك]/, "Arabic ي/ك"],
    ];
    for (const [re, label] of banned) if (re.test(text)) errors.push(`Persian rule: ${label}`);
  }

  // No em dash anywhere on the site, either language (owner's rule, 2026-09-12):
  // it reads as machine-written. Persian joins with «،», English with ",".
  if (/—/.test(strip(html.match(/<body[\s\S]*<\/body>/)?.[0] ?? html))) errors.push("em dash in page text (use ، or ,)");

  // Images
  const imgs = article.match(/<img [^>]*>/g) ?? [];
  if (!imgs.length) errors.push("no images in the article");
  imgs.forEach((img, i) => {
    if (!/ alt="[^"]+"/.test(img)) errors.push(`image ${i} has empty/missing alt`);
    if (!/ width="\d+"/.test(img) || !/ height="\d+"/.test(img)) errors.push(`image ${i} missing width/height`);
    if (!/srcSet="[^"]*640w[^"]*960w[^"]*1200w"/.test(img)) errors.push(`image ${i} srcset lacks 640/960/1200`);
    if (i > 0 && !/loading="lazy"/.test(img)) errors.push(`image ${i} below the fold is not lazy`);
  });
  notes.push(`images ${imgs.length}`);

  // Links inside the article column
  const anchors = [...article.matchAll(/<a [^>]*href="([^"]+)"[^>]*>/g)];
  const internal = new Set(anchors.map((m) => m[1]).filter((h) => /^\/(fa|en)\//.test(h) && !h.includes("/articles/#")));
  const external = anchors.filter((m) => /^https?:/.test(m[1]));
  if (internal.size < 3) errors.push(`only ${internal.size} distinct internal links (need 3-5+)`);
  if (external.length < 2) errors.push(`only ${external.length} external links (need 2-3)`);
  external.forEach((m) => {
    if (!/target="_blank"/.test(m[0]) || !/rel="[^"]*noopener/.test(m[0])) errors.push(`external link without _blank/noopener: ${m[1]}`);
  });
  notes.push(`internal ${internal.size}`, `external ${external.length}`);

  // FAQ, TOC, back-to-top, breadcrumb, byline
  const faq = (article.match(/<details class="group border-b/g) ?? []).length;
  if (faq < 4 || faq > 8) errors.push(`FAQ has ${faq} questions (need 4-8)`);
  if (!/href="#top"/.test(article)) errors.push("no back-to-top link");
  if ((html.match(/href="#[a-z0-9-]+"/g) ?? []).length < 4) errors.push("table of contents missing");
  if (!/aria-current="page"/.test(html)) errors.push("no visible breadcrumb");
  if (!/rel="author"/.test(html)) errors.push("byline without author link");
  if (!/<time dateTime="\d{4}-\d{2}-\d{2}"/.test(html)) errors.push("no published <time>");
  notes.push(`faq ${faq}`);

  return { errors, notes, primary };
}

async function main() {
  let failed = 0;
  for (const locale of ["fa", "en"]) {
    const dir = path.join(OUT, locale, "articles");
    const slugs = (await readdir(dir, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
    for (const slug of slugs) {
      if (only.size && !only.has(slug)) continue;
      const rel = `${locale}/articles/${slug}/`;
      const html = await readFile(path.join(dir, slug, "index.html"), "utf8");
      if (/http-equiv="refresh"/.test(html)) continue;
      const { errors, notes, primary } = check(rel, html);
      console.log(`${errors.length ? "FAIL" : "ok  "} ${rel}  [${primary ?? "-"}]  ${notes.join(" | ")}`);
      errors.forEach((e) => console.log(`       - ${e}`));
      failed += errors.length;
    }
  }
  if (failed) {
    console.log(`verify-seo: ${failed} issue(s)`);
    process.exit(1);
  }
  console.log("verify-seo: all article pages passed");
}

main();
