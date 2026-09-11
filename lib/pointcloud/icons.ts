import { pointsFromShape, type Pt } from "./geometry";
import type { Channel, CloudSpec } from "./glyphs";
import { iconArt } from "@/content/about/icon-paths";
import { iconMasks } from "@/content/about/icon-masks";

/**
 * The vendor tool icons, as point clouds.
 *
 * Every icon runs through one builder. `pointsFromShape` rasterises the
 * composited artwork and buckets each sampled pixel to the nearest palette
 * entry, so the layers of an Autodesk mark — dark plate, mid face, bright
 * corner, white glyph — arrive as separate channels with occlusion already
 * resolved, without the builder knowing anything about the shape.
 *
 * Two rules govern the colour, and they pull against each other:
 *
 *   Match the icon. These colours are the brand; resolving them through the
 *   site palette would make them different logos.
 *
 *   Survive the ground. The site sits on near-black. A brand colour that is
 *   itself dark — Rhino's #231f20, AutoCAD's #770829 — renders as nothing at
 *   one pixel, which is the same trap that made the first hero cloud
 *   invisible. Those get lifted well past their real lightness. The hue is
 *   kept; the value is not sacred.
 */

/** Every cloud is the same size so any icon can morph into any other. */
export const ICON_POINTS = 4800;

const hexToRgb = (hex: string) => {
  const h = hex.replace("#", "");
  const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return `${parseInt(f.slice(0, 2), 16)},${parseInt(f.slice(2, 4), 16)},${parseInt(f.slice(4, 6), 16)}`;
};

/**
 * Per icon: the palette to bucket pixels into, and how each bucket is drawn.
 *
 * `vivid` is a saturation/lightness push, not a hue change. Anything whose
 * real colour already reads on near-black is left alone.
 */
type IconTune = {
  /** Fill colours as they appear in the artwork, in channel order. */
  palette: string[];
  /** One per palette entry. */
  channels: Channel[];
  /** Fraction of points on the silhouette rather than the faces. */
  rimShare?: number;
  /**
   * Build from a traced silhouette instead of the vector art.
   *
   * Rhino and Grasshopper only exist as PNGs, and their vector exports were
   * layered near-black on white — as clouds they were unreadable whatever the
   * channel tuning, because the shape was fighting its own colours. As
   * single-colour silhouettes they read instantly, which is the entire job.
   */
  mask?: keyof typeof iconMasks;
};

const dot = (hex: string, vividArg?: { s: number; l: number }, radius = 1.55): Channel => ({
  rgb: hexToRgb(hex),
  ...(vividArg ? { vivid: vividArg } : {}),
  radius,
  alpha: 1,
});

/**
 * The tune map is the source of truth for which icons exist.
 *
 * It used to key off the SVG-extracted module, which broke the moment an icon
 * arrived as a raster only — Dynamo has no vector art at all, and Rhino and
 * Grasshopper no longer do either. An entry declares its own source: `mask`
 * for a traced silhouette, otherwise the vector art under the same name.
 */
/**
 * One channel per facet colour, straight from the extracted palette.
 *
 * Written as a derivation rather than a list because the palette is generated
 * — hand-copying 21 colours here would go stale the moment the artwork is
 * re-traced, and silently, since nothing would fail.
 */
const DYNAMO_CHANNELS: Channel[] = (
  "palette" in iconMasks.dynamo ? iconMasks.dynamo.palette : []
).map((hex) => ({
  rgb: hexToRgb(hex),
  // Multipliers, not absolutes: these facets are deliberately muted and
  // differ from one another by small amounts. Pinning them all to one
  // saturation makes twenty-one neon chips of a logo that has none.
  lift: { s: 1.25, l: 1.5 },
  radius: 1.5,
  alpha: 1,
}));

const TUNE = {
  /** Autodesk blues read well as-is; only the darkest plate needs lifting. */
  revit: {
    palette: ["#0b3c8f", "#1a6afe", "#699bea", "#ffffff"],
    channels: [
      dot("#0b3c8f", { s: 0.95, l: 1.85 }),
      dot("#1a6afe", { s: 1, l: 1.22 }),
      dot("#699bea", { s: 0.95, l: 1.12 }),
      dot("#ffffff", undefined, 1.45),
    ],
  },
  navisworks: {
    palette: ["#0c3d91", "#186bff", "#679ae7", "#ffffff"],
    channels: [
      dot("#0c3d91", { s: 0.95, l: 1.85 }),
      dot("#186bff", { s: 1, l: 1.22 }),
      dot("#679ae7", { s: 0.95, l: 1.12 }),
      dot("#ffffff", undefined, 1.45),
    ],
  },
  /** #770829 is a near-black maroon — lifted hard, hue kept. */
  autocad: {
    palette: ["#770829", "#e51050", "#e85984", "#ffffff"],
    channels: [
      dot("#770829", { s: 1, l: 2.6 }),
      dot("#e51050", { s: 1, l: 1.18 }),
      dot("#e85984", { s: 0.95, l: 1.1 }),
      dot("#ffffff", undefined, 1.45),
    ],
  },
  /**
   * Its own green, pushed hard. Grasshopper's #579241 is a mid forest green
   * that sinks into the ground at one pixel; the hue is what people
   * recognise, so the hue stays and the value goes up. Site sage is the
   * alternative if this reads too saturated against the palette.
   */
  grasshopper: {
    mask: "grasshopper",
    palette: [],
    channels: [dot("#579241", { s: 1, l: 2.05 }, 1.5)],
    // Legs and antennae are nearly all outline, so most of it is rim.
    rimShare: 0.5,
  },
  /**
   * Dynamo is 21 faceted colours, and they are the mark.
   *
   * As a silhouette it read as a flat disc — the outline was right and the
   * logo was gone. The channels are generated from the palette the extractor
   * quantised out of the artwork, so the facets survive; they are lifted
   * together because the source colours are mid-tone and mid-tone on
   * near-black is the trap this whole file exists to avoid.
   */
  dynamo: {
    mask: "dynamo",
    palette: [],
    channels: DYNAMO_CHANNELS,
    // Nearly solid, so most points belong on the faces.
    rimShare: 0.24,
  },
  /**
   * White. Rhino's mark is #231f20 on white — a near-black silhouette on a
   * near-black page. There is no saturation push that rescues a hue which
   * barely has one, and the head shape is what identifies Rhino anyway.
   */
  rhinoceros: {
    mask: "rhinoceros",
    palette: [],
    channels: [dot("#ffffff", undefined, 1.5)],
    // A solid silhouette, so less of it needs to be edge than a thin mark.
    rimShare: 0.3,
  },
} satisfies Record<string, IconTune>;

export type IconName = keyof typeof TUNE;

/** Human labels, kept beside the art so a section never hard-codes a name. */
export const ICON_LABEL: Record<IconName, string> = {
  revit: "Revit",
  navisworks: "Navisworks",
  autocad: "AutoCAD",
  rhinoceros: "Rhino",
  grasshopper: "Grasshopper",
  dynamo: "Dynamo",
};

function buildIcon(name: IconName): Pt[] {
  // Widened: `satisfies` keeps each entry's exact shape, so an entry without
  // `mask` has no such property in the union until it is read as an IconTune.
  const tune: IconTune = TUNE[name];
  const common = {
    count: ICON_POINTS,
    rimShare: tune.rimShare ?? 0.38,
    thickness: 0.055,
    // Longest side, not height: Rhino's art is wide and Grasshopper's is
    // tall, and scaling by height alone made one visibly bigger than the next.
    height: 1.8,
    fit: "box" as const,
    // Distinct per icon, so two icons never scatter identically.
    seed: 0x1c0 + name.length * 977 + name.charCodeAt(0) * 31,
  };

  if (tune.mask) {
    return ordered(pointsFromShape({ ...common, mask: iconMasks[tune.mask] }));
  }

  const art = iconArt[name as keyof typeof iconArt];
  if (!art) return [];
  return ordered(
    pointsFromShape({
    ...common,
    vw: art.vw,
    vh: art.vh,
    // Higher than a silhouette needs, because these have a small white glyph
    // inside a large plate — the "R" and the "N" are the whole difference
    // between Revit and Navisworks, and at 300 they sampled to a smudge.
    raster: 460,
    palette: tune.palette,
    draw: (ctx) => {
      for (const p of art.paths) {
        ctx.save();
        // Resolved cumulative transform, in Canvas2D argument order. Inkscape
        // exports carry a Y-flip here, which is why it cannot be skipped.
        ctx.transform(p.m[0], p.m[1], p.m[2], p.m[3], p.m[4], p.m[5]);
        ctx.fillStyle = p.fill;
        ctx.fill(new Path2D(p.d));
        ctx.restore();
      }
      },
    }),
  );
}

/**
 * Sort by angle about the centre, then by radius.
 *
 * Morphing pairs point *i* of one cloud with point *i* of the next, and two
 * independent random samples have no relationship at that index — the result
 * is every point crossing the shape to an unrelated place, which reads as
 * static rather than as one mark becoming another. Ordering both clouds the
 * same way means a point at the top-left of Revit travels to the top-left of
 * Navisworks, and the whole thing turns inside out coherently.
 */
function ordered(pts: Pt[]): Pt[] {
  return pts
    .map((p) => ({ p, a: Math.atan2(p.z, p.x), r: p.x * p.x + p.z * p.z }))
    .sort((u, v) => u.a - v.a || u.r - v.r)
    .map((e) => e.p);
}

/**
 * Listed explicitly rather than generated from a loop: `satisfies` keeps the
 * key literals, which is what lets `GlyphName` name each icon and a page pass
 * `glyph="icon-revit"` with the compiler checking it.
 */
const spec = (name: IconName): CloudSpec => ({
  build: () => buildIcon(name),
  channels: (TUNE[name] as IconTune).channels,
  /**
   * White, not the default amber.
   *
   * The amber band is a build sweep — it belongs to a model being assembled.
   * Run over a vendor mark it simply repaints part of the logo a colour the
   * logo does not have, which is the one thing these clouds must not do. A
   * white pass reads as light crossing the surface and leaves the hue alone.
   */
  sweep: "channel",
  dot: "round",
  // +-34 degrees over nine seconds: enough parallax to read as a slab, never
  // enough to turn the mark into an edge.
  rock: { amplitude: 0.6, periodMs: 9000 },
  // The glyph is 1.75 tall, so 1.35 leaves real room to fly before the shell
  // catches anything — a container, not a corset.
  sphere: 1.35,
  // A mark this size is read, not demolished — a gentler hand than the hero
  // frame, closer to the ARTINEXT logo's.
  throw: { launch: 0.3, maxV0: 780 },
});

export const iconSpecs = {
  "icon-revit": spec("revit"),
  "icon-navisworks": spec("navisworks"),
  "icon-autocad": spec("autocad"),
  "icon-rhinoceros": spec("rhinoceros"),
  "icon-grasshopper": spec("grasshopper"),
  "icon-dynamo": spec("dynamo"),
} satisfies Record<string, CloudSpec>;
