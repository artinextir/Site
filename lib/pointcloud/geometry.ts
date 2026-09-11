/**
 * Geometry helpers for the point-cloud renderer.
 *
 * A cloud is a plain array of world-space points. Nothing here touches the
 * DOM except `pointsFromShape`, which needs a canvas to rasterise into and so
 * must run client-side.
 *
 * Convention shared by every builder, and the renderer depends on it:
 *
 *   X  right        Z  up        Y  depth (toward the camera)
 *
 * The renderer yaws about Z, so a glyph built flat in the X-Z plane with its
 * thickness on Y turns edge-on and back like a coin. That is the read that
 * makes a flat mark look like a solid. Build a glyph lying in X-Y instead and
 * it will only ever wobble.
 *
 * Keep the glyph roughly two units tall and centred on the origin; the
 * renderer scales to fit from that assumption.
 */

export type Pt = {
  x: number;
  y: number;
  z: number;
  /**
   * Which channel this point belongs to — an index into the cloud's
   * `channels`. Lets one cloud carry several materials, the way the hero
   * wireframe draws columns and beams in different weights and colours.
   * Omitted means channel 0.
   */
  c?: number;
  /**
   * Draw a line from the previous point in the array to this one. The line is
   * struck between their *displaced* screen positions, so it stretches while
   * the pair is thrown apart and snaps back as they return — which is what
   * keeps a wireframe reading as a wireframe through a scatter.
   */
  link?: 1;
};

/** Deterministic scatter — a cloud should be the same shape every load. */
export function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Turn any 2D shape into a 3D slab of points by rasterising it.
 *
 * Sampling a raster rather than walking path maths is deliberate: it accepts
 * any drawing at all — several paths, holes, a circle, text — without the
 * builder having to understand fill rules, bezier flattening or winding. The
 * canvas already solved that.
 *
 * Points land in three places, and all three are needed:
 *
 *   front / back  the two faces, at -+thickness. These carry the shape.
 *   rim           the silhouette edge, spread through the full depth. Without
 *                 it the glyph vanishes into two flat sheets when it turns
 *                 edge-on, which is exactly the moment the rotation is meant
 *                 to be showing off its solidity.
 *
 * Rim pixels are a small fraction of a filled shape, so `rimShare` is a
 * budget, not a probability — the rim is deliberately oversampled relative to
 * its area or the outline reads thin next to the faces.
 */
export function pointsFromShape({
  draw,
  vw,
  vh,
  count = 1600,
  rimShare = 0.42,
  thickness = 0.055,
  height = 2,
  raster = 260,
  fit = "height",
  seed = 0x41525449,
  palette,
  mask,
}: {
  /** Fill the shape in viewBox coordinates. Colour is ignored, only alpha. */
  draw?: (ctx: CanvasRenderingContext2D) => void;
  /** viewBox width and height the `draw` callback works in. */
  vw?: number;
  vh?: number;
  /**
   * A pre-traced 1-bit silhouette, as an alternative to `draw`.
   *
   * Used where the source art is a raster: the cloud only ever asked whether
   * a pixel is part of the shape, so a mask carries everything the colour art
   * was contributing. It also skips the canvas entirely — no rasterise, no
   * getImageData — which makes it the cheapest way in.
   */
  mask?:
    | { w: number; h: number; bits: string }
    | { w: number; h: number; palette: string[]; rle: string };
  count?: number;
  rimShare?: number;
  /** Half-depth on Y, in world units. */
  thickness?: number;
  /** World size the glyph is scaled to — see `fit`. */
  height?: number;
  /**
   * How `height` is applied.
   *
   * `"height"` scales the glyph's height to it, so a wide shape ends up wider
   * than a tall one. `"box"` scales the *longer* side instead, so every glyph
   * fits the same square however its artwork is proportioned — which is what
   * a row of vendor icons needs, since one being visibly larger than the next
   * reads as a mistake rather than as the artwork's aspect ratio.
   */
  fit?: "height" | "box";
  /** Rasterised height in pixels. Higher is finer but slower to build. */
  raster?: number;
  seed?: number;
  /**
   * Channel colours, as "#rrggbb". When given, every sampled point is
   * assigned the channel whose colour is nearest the pixel it landed on.
   *
   * Sampling the *composited* raster rather than each layer separately is
   * what makes occlusion free: a vendor icon stacks a dark plate under a
   * bright face, and rasterising the layers independently would scatter
   * points across the dark plate's hidden half. Whatever colour survived to
   * the pixel is the layer that is actually visible there.
   */
  palette?: string[];
}): Pt[] {
  let w: number;
  let h: number;
  let opaque: (x: number, y: number) => boolean;
  let data: Uint8ClampedArray | null = null;

  /** Set for an indexed colour mask: per-pixel channel, 0-based. */
  let indexAt: ((x: number, y: number) => number) | null = null;

  if (mask && "rle" in mask) {
    // Indexed colour grid. Index 0 is transparent; a colour is its palette
    // position + 1, which is why the channel is one less than the stored byte.
    w = mask.w;
    h = mask.h;
    const bin = atob(mask.rle);
    const grid = new Uint8Array(w * h);
    let at = 0;
    for (let i = 0; i + 1 < bin.length; i += 2) {
      const v = bin.charCodeAt(i);
      const run = bin.charCodeAt(i + 1);
      grid.fill(v, at, at + run);
      at += run;
    }
    opaque = (x, y) => x >= 0 && y >= 0 && x < w && y < h && grid[y * w + x] !== 0;
    indexAt = (x, y) => grid[y * w + x] - 1;
  } else if (mask) {
    w = mask.w;
    h = mask.h;
    const bin = atob(mask.bits);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
    opaque = (x, y) => {
      if (x < 0 || y < 0 || x >= w || y >= h) return false;
      const bit = y * w + x;
      return ((bytes[bit >> 3] >> (7 - (bit & 7))) & 1) === 1;
    };
  } else {
    if (!draw || !vw || !vh) return [];
    h = Math.max(32, Math.round(raster));
    w = Math.max(32, Math.round((vw / vh) * h));

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return [];

    ctx.scale(h / vh, h / vh);
    draw(ctx);

    data = ctx.getImageData(0, 0, w, h).data;
    const px = data;
    opaque = (x, y) =>
      x >= 0 && y >= 0 && x < w && y < h && px[(y * w + x) * 4 + 3] > 128;
  }

  const pal = (palette ?? []).map((c) => {
    const hex = c.replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((ch) => ch + ch).join("") : hex;
    return [
      parseInt(full.slice(0, 2), 16),
      parseInt(full.slice(2, 4), 16),
      parseInt(full.slice(4, 6), 16),
    ];
  });
  /** Nearest palette entry in plain RGB. The distances here are between
      brand colours that are far apart, so a perceptual space would cost
      more than it decides. */
  const channelAt = (px: number, py: number) => {
    if (indexAt) return indexAt(px, py);
    if (!pal.length || !data) return 0;
    const o = (py * w + px) * 4;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    let best = 0;
    let bestD = Infinity;
    for (let k = 0; k < pal.length; k += 1) {
      const dr = r - pal[k][0];
      const dg = g - pal[k][1];
      const db = b - pal[k][2];
      const d = dr * dr + dg * dg + db * db;
      if (d < bestD) {
        bestD = d;
        best = k;
      }
    }
    return best;
  };

  const solid: number[] = [];
  const rim: number[] = [];
  // Ink bounds, not raster bounds. Artwork arrives with whatever margin its
  // author left around it, so scaling by the raster makes a tightly-cropped
  // icon render larger than a loosely-cropped one at identical settings —
  // which reads as one logo being more important than the next.
  let ix0 = Infinity;
  let iy0 = Infinity;
  let ix1 = -Infinity;
  let iy1 = -Infinity;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      if (!opaque(x, y)) continue;
      if (x < ix0) ix0 = x;
      if (x > ix1) ix1 = x;
      if (y < iy0) iy0 = y;
      if (y > iy1) iy1 = y;
      // A pixel with any transparent 4-neighbour is on the silhouette.
      if (!opaque(x - 1, y) || !opaque(x + 1, y) || !opaque(x, y - 1) || !opaque(x, y + 1)) {
        rim.push(x, y);
      } else {
        solid.push(x, y);
      }
    }
  }
  if (!solid.length && !rim.length) return [];

  const rnd = mulberry32(seed);
  const pts: Pt[] = [];

  // Pixel space to world: uniform scale, origin at the ink's centre.
  const inkW = ix1 - ix0 + 1;
  const inkH = iy1 - iy0 + 1;
  const s = height / (fit === "box" ? Math.max(inkW, inkH) : inkH);
  const cx = (ix0 + ix1) / 2;
  const cy = (iy0 + iy1) / 2;
  // Sub-pixel jitter, or the cloud reads as a visible pixel lattice.
  const toWorld = (px: number, py: number) => ({
    x: (px + rnd() - 0.5 - cx) * s,
    z: -(py + rnd() - 0.5 - cy) * s,
  });

  let rimCount = Math.round(count * rimShare);
  let faceCount = count - rimCount;
  if (!rim.length) {
    faceCount = count;
    rimCount = 0;
  }
  if (!solid.length) {
    rimCount = count;
    faceCount = 0;
  }

  for (let i = 0; i < faceCount; i += 1) {
    const k = (Math.floor(rnd() * (solid.length / 2)) | 0) * 2;
    const { x, z } = toWorld(solid[k], solid[k + 1]);
    pts.push({ x, y: rnd() < 0.5 ? -thickness : thickness, z, c: channelAt(solid[k], solid[k + 1]) });
  }

  for (let i = 0; i < rimCount; i += 1) {
    const k = (Math.floor(rnd() * (rim.length / 2)) | 0) * 2;
    const { x, z } = toWorld(rim[k], rim[k + 1]);
    pts.push({ x, y: (rnd() * 2 - 1) * thickness, z, c: channelAt(rim[k], rim[k + 1]) });
  }

  return pts;
}

/**
 * Points through the volume of a ball, not on its surface.
 *
 * The one place filling a volume is right: this is meant to read as unformed —
 * an idea before it has an edge. The cube root keeps the density even rather
 * than piling everything at the centre, which is where a uniform radius lands
 * it and which looks like a shape rather than a scatter.
 */
export function ball(radius: number, count: number, rnd: () => number, out: Pt[] = []): Pt[] {
  for (let i = 0; i < count; i += 1) {
    const u = rnd() * Math.PI * 2;
    const v = Math.acos(1 - 2 * rnd());
    const r = radius * Math.cbrt(rnd());
    out.push({
      x: r * Math.sin(v) * Math.cos(u),
      y: r * Math.sin(v) * Math.sin(u),
      z: r * Math.cos(v),
    });
  }
  return out;
}

/**
 * A cubic lattice: points on the edges of an n x n x n grid of cells.
 *
 * Edges rather than a solid array of nodes, because a lattice has to read as
 * a structure you could measure against. A field of unconnected dots at grid
 * positions reads as a scatter that happens to be regular.
 */
export function lattice(size: number, n: number, count: number, rnd: () => number, out: Pt[] = []): Pt[] {
  const step = size / n;
  const half = size / 2;
  for (let i = 0; i < count; i += 1) {
    // Pick an axis to run along, then a cell corner for the other two.
    const axis = Math.floor(rnd() * 3);
    const a = Math.round(rnd() * n) * step - half;
    const b = Math.round(rnd() * n) * step - half;
    const t = rnd() * size - half;
    if (axis === 0) out.push({ x: t, y: a, z: b });
    else if (axis === 1) out.push({ x: a, y: t, z: b });
    else out.push({ x: a, y: b, z: t });
  }
  return out;
}

/** Torus shell in the X-Z plane, tube thickness on Y. */
/**
 * The sweep colour for a material: same hue, as much chroma as the space
 * allows, lightness lifted only as far as it can go without bleaching.
 *
 * Not `vivid` with a big lightness push — that was the bug this replaces. HSL
 * chroma is `(1 - |2L - 1|) * s`, so it peaks at L 0.5 and collapses to zero
 * as L approaches 1. Asking for "brighter and more saturated" by raising L
 * gets you white: at L 0.96 the chroma left is 0.08 whatever the saturation.
 * Brightness for the band comes from the double fill instead — a wide soft
 * halo under a bright core — and this only has to supply the hue at full
 * strength.
 *
 * A material that is already neutral stays neutral: lit white is white, and
 * inventing a hue for it would be the same mistake as the fixed amber.
 */
/**
 * Lift a colour toward the light without flattening it.
 *
 * `vivid` takes saturation as an absolute, which is right for two or three
 * hand-picked channels and wrong for a generated palette: setting every facet
 * to s 0.95 turns a muted brick and a warm grey into magenta and yellow, and
 * the artwork's whole character — that it is *muted* facets — is gone. Here
 * both are multipliers, so a colour keeps its position relative to its
 * neighbours and only moves toward the front of the screen.
 *
 * Lightness is capped short of the white ceiling for the reason beamOf
 * documents: chroma is (1 - |2L - 1|) * s and collapses as L approaches 1.
 */
export function lift(rgb: string, satMul: number, lightMul: number): string {
  const [r, g, b] = rgb.split(",").map((v) => Number(v) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l0 = (max + min) / 2;
  const d = max - min;
  const L = Math.min(0.82, l0 * lightMul);
  if (d < 0.02) {
    const v = Math.round(L * 255);
    return `${v},${v},${v}`;
  }

  const s0 = d / (1 - Math.abs(2 * l0 - 1));
  const s = Math.min(1, s0 * satMul);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;

  const c = (1 - Math.abs(2 * L - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = L - c / 2;
  const seg = Math.floor(h * 6) % 6;
  const [rr, gg, bb] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][seg];
  return [rr, gg, bb].map((v) => Math.round((v + m) * 255)).join(",");
}

export function beamOf(rgb: string): string {
  const [r, g, b] = rgb.split(",").map((v) => Number(v) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d < 0.06) return rgb;

  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;

  // Just above the chroma peak: bright enough to read as lit, still saturated.
  const L = Math.min(0.62, Math.max(0.52, l * 1.1));
  const c = (1 - Math.abs(2 * L - 1)) * 1;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = L - c / 2;
  const seg = Math.floor(h * 6) % 6;
  const [rr, gg, bb] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][seg];
  return [rr, gg, bb].map((v) => Math.round((v + m) * 255)).join(",");
}

export function torus(
  R: number,
  tube: number,
  count: number,
  rnd: () => number,
  out: Pt[] = [],
): Pt[] {
  for (let i = 0; i < count; i += 1) {
    const u = rnd() * Math.PI * 2;
    const v = rnd() * Math.PI * 2;
    const rr = R + tube * Math.cos(v);
    out.push({ x: rr * Math.cos(u), y: tube * Math.sin(v), z: rr * Math.sin(u) });
  }
  return out;
}

/** Cylinder shell standing on Z. */
export function cylinder(
  radius: number,
  z0: number,
  z1: number,
  count: number,
  rnd: () => number,
  out: Pt[] = [],
): Pt[] {
  for (let i = 0; i < count; i += 1) {
    const a = rnd() * Math.PI * 2;
    out.push({ x: radius * Math.cos(a), y: radius * Math.sin(a), z: z0 + rnd() * (z1 - z0) });
  }
  return out;
}

/** Sphere shell. */
export function sphere(
  radius: number,
  center: Pt,
  count: number,
  rnd: () => number,
  out: Pt[] = [],
): Pt[] {
  for (let i = 0; i < count; i += 1) {
    const t = Math.acos(1 - 2 * rnd());
    const p = rnd() * Math.PI * 2;
    out.push({
      x: center.x + radius * Math.sin(t) * Math.cos(p),
      y: center.y + radius * Math.sin(t) * Math.sin(p),
      z: center.z + radius * Math.cos(t),
    });
  }
  return out;
}


/**
 * Push a token colour toward its saturated form.
 *
 * Lifted from HeroModel, where the reasoning is the same and worth repeating:
 * the palette tokens are deliberately desaturated because they are text and
 * hairline colours on a near-black ground. Drawn as one-pixel points they
 * wash out to grey, so a cloud takes the same hues pushed toward saturation.
 * Derived from the tokens rather than hardcoded, so the cloud still moves if
 * the palette does.
 */
export function vivid(rgb: string, saturation: number, lightness: number) {
  const [r, g, b] = rgb.split(",").map((v) => Number(v) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  if (max !== min) {
    const d = max - min;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }

  const s = saturation;
  const L = Math.min(1, l * lightness);
  const c = (1 - Math.abs(2 * L - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = L - c / 2;
  const seg = Math.floor(h * 6) % 6;
  const [rr, gg, bb] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][seg];

  return [rr, gg, bb].map((v) => Math.round((v + m) * 255)).join(",");
}
