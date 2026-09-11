/**
 * Serve `out/` the way the host will.
 *
 * `next dev` is not a preview of production. Two differences matter enough to
 * change what an audit reports:
 *
 *   1. In dev, Next streams metadata into the <body> and React hoists it into
 *      the head on the client. Lighthouse reads the delivered document, so it
 *      reports the page as having no meta description — even though it does.
 *      In the export the tags are in <head> in the bytes.
 *   2. Dev serves unminified bundles with no compression and no cache headers,
 *      keeps a HMR WebSocket open, and injects a devtools overlay. That is
 *      most of a Lighthouse performance score.
 *
 * So this reads the same `_headers` and `_redirects` files the host reads,
 * compresses like the host does, and resolves paths like the host does.
 * Numbers taken here are numbers you can expect in production.
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { brotliCompressSync, gzipSync, constants as zlib } from "node:zlib";

const ROOT = "out";
const PORT = Number(process.env.PORT) || 4321;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".vtt": "text/vtt; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

const COMPRESSIBLE = /^(text\/|application\/(json|xml|javascript))/;

/** Netlify/Cloudflare path pattern -> RegExp. `*` spans path segments. */
function pattern(glob) {
  const escaped = glob.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${escaped}$`);
}

/**
 * `_headers`: a path line in column 0, then indented `Name: value` lines.
 * Later matching blocks win, which is how both hosts resolve overlaps.
 */
async function loadHeaders() {
  const text = await readFile(join(ROOT, "_headers"), "utf8").catch(() => "");
  const blocks = [];
  let current = null;

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\s+$/, "");
    if (!line.trim() || line.trim().startsWith("#")) continue;

    if (!/^\s/.test(line)) {
      current = { match: pattern(line.trim()), headers: {} };
      blocks.push(current);
      continue;
    }
    if (!current) continue;
    const at = line.indexOf(":");
    if (at === -1) continue;
    current.headers[line.slice(0, at).trim()] = line.slice(at + 1).trim();
  }
  return blocks;
}

/**
 * `_redirects`: `from to [status]`. A rule without `!` only fires when no
 * static file matched, which is why `/*  /fa/  200` does not swallow /en/.
 */
async function loadRedirects() {
  const text = await readFile(join(ROOT, "_redirects"), "utf8").catch(() => "");
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const [from, to, code = "301"] = l.split(/\s+/);
      const forced = code.endsWith("!");
      return { match: pattern(from), to, status: Number(code.replace("!", "")), forced };
    });
}

/** Resolve a URL path to a file, the way a static host does. */
async function resolve(urlPath) {
  const clean = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const candidates = [];

  if (clean.endsWith("/")) candidates.push(join(ROOT, clean, "index.html"));
  else candidates.push(join(ROOT, clean), join(ROOT, clean, "index.html"), join(ROOT, `${clean}.html`));

  for (const file of candidates) {
    // Never serve outside the export, whatever the request path claims.
    if (!normalize(file).startsWith(ROOT + sep) && normalize(file) !== ROOT) continue;
    const info = await stat(file).catch(() => null);
    if (info?.isFile()) return file;
  }
  return null;
}

const headerBlocks = await loadHeaders();
const redirects = await loadRedirects();

function headersFor(urlPath) {
  const out = {};
  for (const block of headerBlocks) {
    if (block.match.test(urlPath)) Object.assign(out, block.headers);
  }
  return out;
}

async function send(res, file, urlPath, acceptEncoding) {
  let body = await readFile(file);
  const type = TYPES[extname(file)] || "application/octet-stream";
  const headers = { "content-type": type, ...headersFor(urlPath) };

  if (COMPRESSIBLE.test(type) && body.length > 512) {
    if (acceptEncoding.includes("br")) {
      body = brotliCompressSync(body, {
        params: { [zlib.BROTLI_PARAM_QUALITY]: 5 },
      });
      headers["content-encoding"] = "br";
    } else if (acceptEncoding.includes("gzip")) {
      body = gzipSync(body, { level: 6 });
      headers["content-encoding"] = "gzip";
    }
    if (headers["content-encoding"]) headers.vary = "Accept-Encoding";
  }

  headers["content-length"] = body.length;
  res.writeHead(200, headers);
  res.end(body);
}

const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const accept = req.headers["accept-encoding"] || "";

  try {
    for (const rule of redirects) {
      if (rule.forced && rule.match.test(urlPath)) {
        if (rule.status === 200) {
          const file = await resolve(rule.to);
          if (file) return void (await send(res, file, rule.to, accept));
        } else {
          res.writeHead(rule.status, { location: rule.to });
          return void res.end();
        }
      }
    }

    const file = await resolve(urlPath);
    if (file) return void (await send(res, file, urlPath, accept));

    for (const rule of redirects) {
      if (!rule.match.test(urlPath)) continue;
      if (rule.status === 200) {
        const target = await resolve(rule.to);
        if (target) return void (await send(res, target, rule.to, accept));
      } else {
        res.writeHead(rule.status, { location: rule.to });
        return void res.end();
      }
    }

    const notFound = await resolve("/404.html");
    if (notFound) {
      const body = await readFile(notFound);
      res.writeHead(404, { "content-type": TYPES[".html"] });
      return void res.end(body);
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("not found");
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end(String(err));
  }
});

server.listen(PORT, () => {
  console.log(`  Production preview of out/  —  http://localhost:${PORT}/fa/`);
  console.log(`  English                     —  http://localhost:${PORT}/en/`);
  console.log(
    `  ${headerBlocks.length} header rule(s), ${redirects.length} redirect rule(s), brotli + gzip on.`,
  );
});
