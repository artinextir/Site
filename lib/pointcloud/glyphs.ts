import {
  ball,
  cylinder,
  lattice,
  mulberry32,
  pointsFromShape,
  sphere,
  torus,
  type Pt,
} from "./geometry";
import { iconSpecs } from "./icons";

/**
 * One material in a cloud. A cloud with two channels draws its points in two
 * colours and two weights — which is how the hero cloud reproduces the
 * wireframe's distinction between columns and beams.
 */
export type Channel = {
  /** CSS custom property holding "r,g,b" or "r g b". */
  token?: string;
  /** Literal "r,g,b", for colour that belongs to the artwork rather than to
      the site palette — a vendor icon is its colours, and swapping them for
      theme tokens would make it a different logo. Wins over `token`. */
  rgb?: string;
  /** Saturation push, absolute. Omit to use the token as authored. */
  vivid?: { s: number; l: number };
  /**
   * Saturation and lightness *multipliers*. For a generated palette, where an
   * absolute saturation would flatten every colour to the same intensity and
   * lose what distinguishes the facets from one another.
   */
  lift?: { s: number; l: number };
  /** Dot radius in CSS px at the nearest depth band. */
  radius: number;
  /** Alpha at the nearest depth band. */
  alpha: number;
  /**
   * Stroke joining linked points. Omit and the channel draws dots only.
   *
   * Lines are why a wireframe is legible and a sparse cloud is not: a stroked
   * member inks its whole length, a sampled one inks a few sub-pixel specks.
   * They are also cheaper per unit of visible structure than the arcs needed
   * to match them.
   */
  line?: { width: number; alpha: number };
};

/**
 * What the renderer knows about the box before the geometry is built. A cloud
 * that fills a hero needs more points than the same cloud in a card: `fit`
 * scales the model with the box, so a fixed point count spreads thinner as
 * the box grows and the form dissolves into specks.
 */
export type BuildHint = { hostW: number; hostH: number };

export type CloudSpec = {
  build: (hint: BuildHint) => Pt[] | Promise<Pt[]>;
  /** Indexed by `Pt.c`. A point with no `c` uses the first. */
  channels: Channel[];
  /**
   * The travelling light band. Defaults to raw amber.
   *
   * `"channel"` instead takes each point's own colour and cranks saturation
   * and lightness — the band then reads as light passing *through* the
   * material rather than as a second colour painted over it. A model being
   * assembled wants a fixed amber; artwork whose colours are the point wants
   * its own.
   */
  sweep?: Channel | "channel";
  /**
   * Per-band multipliers on radius and alpha, far to near. Defaults suit a
   * solid mark; a wireframe needs a much higher floor or its far half
   * disappears. Four entries each.
   */
  depth?: { r: number[]; a: number[] };
  /**
   * Dot shape. `arc` tessellates a circle; `rect` does not, and below about
   * two pixels the two are indistinguishable on screen. A cloud with hundreds
   * of large dots should stay round; one with thousands of ~1px dots should
   * not pay for curves nobody can see.
   */
  dot?: "round" | "square";
  /**
   * Throw strength. A dense frame wants a gentler hand than a mark — the same
   * impulse that reads as playful on 1,700 points reads as a demolition on
   * 10,000, because every member has two ends and the whole frame comes apart
   * at once rather than a few dots lifting off a face.
   */
  throw?: { launch?: number; maxV0?: number; hitR?: number };
  /**
   * Oscillate instead of turning all the way round.
   *
   * A structural frame reads well edge-on — that is a view of the building.
   * A logo does not: a full yaw leaves a brand mark an unreadable sliver for
   * a large part of every cycle, and the one job these clouds have is to be
   * recognised. Rocking through a shallow arc keeps the mark legible at every
   * moment while still showing it is a solid in space.
   */
  rock?: { amplitude: number; periodMs: number };
  /**
   * Radius of a containing sphere, in world units (the glyph is ~2 tall).
   *
   * Points thrown past it are held on the shell and slide along it instead of
   * stopping dead — velocity keeps its tangential part and loses only the
   * outward one. A hard stop piles points on a rim and reads as clipping,
   * which is the thing the bleed exists to avoid; sliding reads as energy
   * contained, which is the thing worth having.
   */
  sphere?: number;
  /**
   * A soft touch applied at random, forever, with no cursor involved.
   *
   * Implemented as a synthetic pointer stroke rather than as noise added to
   * positions: the cloud then answers it with exactly the physics it answers
   * a real touch with — a throw, the sphere, the spring home — so the ambient
   * motion and the interactive motion are the same gesture at different
   * strengths, instead of two systems that have to be made to agree.
   */
  ambient?: { everyMs: [number, number]; strength: number; radius: number };
};

const AMBER: Channel = { token: "--amber-rgb", radius: 1.75, alpha: 1 };

/**
 * The shipped clouds.
 *
 * A glyph is a `() => Pt[]` run once on mount, client-side. Keep them cheap —
 * these run on the main thread during hydration.
 */

/**
 * The ARTINEXT mark: the logo path plus its counter dot, extruded to a slab.
 *
 * Traced from artinext-logo-vector.svg. The `d` string lives here rather than
 * being fetched so the cloud costs no request; it is ~700 bytes, which is far
 * less than the round trip it would otherwise take. If the logo is ever
 * redrawn, re-copy the path and the circle from that file — nothing else here
 * needs to change, because the rasteriser does not care what the shape is.
 */
const LOGO_D =
  "M 148.50,8.00 L 193.00,7.50 L 199.00,8.50 L 208.00,13.50 L 295.50,104.00 L 343.00,150.50 " +
  "L 343.50,134.00 L 341.50,127.00 L 306.50,90.00 L 306.50,15.00 L 308.00,7.50 L 362.00,7.50 " +
  "L 362.50,219.00 L 335.00,219.50 L 258.00,140.50 L 225.00,159.50 L 224.00,133.50 L 184.00,133.50 " +
  "L 178.00,135.50 L 169.50,143.00 L 118.00,219.50 L 86.00,219.50 L 86.50,216.00 L 145.50,129.00 " +
  "L 157.00,117.50 L 170.00,112.50 L 235.00,112.50 L 235.50,138.00 L 237.00,138.50 L 281.50,111.00 " +
  "L 237.00,79.50 L 235.50,80.00 L 235.50,99.00 L 224.00,99.50 L 178.00,52.50 L 65.00,219.50 " +
  "L 8.00,219.50 L 7.50,218.00 Z";

const LOGO_VW = 371;
const LOGO_VH = 228;

/** `count` is a parameter because the R&D page reuses the mark at its own
    density — every stage in a scroll blend has to have the same point count. */
export function artinextLogo(count = 1700): Pt[] {
  return pointsFromShape({
    vw: LOGO_VW,
    vh: LOGO_VH,
    draw: (ctx) => {
      ctx.fillStyle = "#fff";
      ctx.fill(new Path2D(LOGO_D));
      ctx.beginPath();
      ctx.arc(202, 180, 19.5, 0, Math.PI * 2);
      ctx.fill();
    },
    count,
    // The mark is mostly thin diagonal strokes, so a large share of it is
    // already edge — a lower rim budget than a chunky shape would want, or
    // the faces end up under-sampled and the slab reads hollow.
    rimShare: 0.34,
    thickness: 0.05,
    // Wider than it is tall, so height is what has to fit the canvas.
    height: 1.5,
    raster: 300,
  });
}

/**
 * The registry the renderer selects from.
 *
 * `PointCloud` takes a name from here rather than a builder function, because
 * a page is a Server Component and a function cannot cross the RSC boundary —
 * passing one fails the static export with "Functions cannot be passed
 * directly to Client Components". A string key serialises, and it keeps every
 * cloud on the site enumerated in one place.
 */
/**
 * The R&D stages.
 *
 * Every stage is the same two populations, and that is the whole trick:
 *
 *   ambient — a wide, dim field at *identical positions in every stage*, so it
 *     never morphs. It is the space the thing is happening in, not part of the
 *     thing, and it fills the frame behind the copy as well as beside it.
 *
 *   shape — the population that actually changes: a written idea, a formless
 *     mass, a first crude form, a rig to measure it in, the thing that ships.
 *
 * Splitting them is what lets the ambient be much dimmer than the shape. One
 * population cannot be both, because the moment a background point joins a
 * mark it has to be as bright as the rest of it.
 */
const RND_AMBIENT = 2200;
const RND_SHAPE = 2300;

/**
 * Point counts, scaled to the screen.
 *
 * Six stages built up front is the whole of this page's start-up cost, and on
 * a phone it was most of a second of blocked main thread. The figure there is
 * also a third smaller and the pixels are denser, so the counts a desktop
 * needs to look solid are past the point of being visible — cutting them is
 * free in every sense except that it has to be done at build time, since a
 * morph pairs stages index by index and they must all agree.
 */
function rndCounts(hint?: BuildHint) {
  const narrow = (hint?.hostW ?? 2000) < 1024 + 300;
  return narrow
    ? { ambient: 1200, shape: 1300, raster: 300 }
    : { ambient: RND_AMBIENT, shape: RND_SHAPE, raster: 460 };
}
const RND_SEED = 0x5244;

/** Identical in every stage — built from one seed, never interpolated. */
function ambientField(n: number): Pt[] {
  return ball(4.6, n, mulberry32(RND_SEED)).map((p) => ({ ...p, c: 0 }));
}

/**
 * Every stage's radius, in model units.
 *
 * The primitives are written at whatever size reads well on their own, and
 * left that way they differ by a factor of two — the lattice ran off the side
 * of the screen while the sphere sat politely in its corner, because the
 * engine's `fit` scales the whole cloud rather than each stage. Normalising
 * here means one number governs how much room the subject takes, and every
 * stage occupies the same amount of it.
 */
const SHAPE_R = 0.85;

/**
 * Centre, scale and *order* a stage's subject.
 *
 * The ordering is the part that is not obvious. A morph pairs the two stages
 * index by index, and the generators emit points in whatever order their loop
 * happened to run, so consecutive stages pair a point on one side of the mark
 * with a point on the other and the transition is a shuffle rather than a
 * change of shape. Sorting both by the angle they sit at in the screen plane
 * makes the pairing rotationally coherent: points travel outward and inward
 * along their own radius instead of crossing the figure.
 */
function shaped(pts: Pt[]): Pt[] {
  let lo = { x: Infinity, y: Infinity, z: Infinity };
  let hi = { x: -Infinity, y: -Infinity, z: -Infinity };
  for (const p of pts) {
    lo = { x: Math.min(lo.x, p.x), y: Math.min(lo.y, p.y), z: Math.min(lo.z, p.z) };
    hi = { x: Math.max(hi.x, p.x), y: Math.max(hi.y, p.y), z: Math.max(hi.z, p.z) };
  }
  const cx = (lo.x + hi.x) / 2;
  const cy = (lo.y + hi.y) / 2;
  const cz = (lo.z + hi.z) / 2;

  let max = 0;
  for (const p of pts) {
    const r = Math.hypot(p.x - cx, p.y - cy, p.z - cz);
    if (r > max) max = r;
  }
  const k = max > 0 ? SHAPE_R / max : 1;

  return pts
    .map((p) => ({
      ...p,
      x: (p.x - cx) * k,
      y: (p.y - cy) * k,
      z: (p.z - cz) * k,
      c: 1,
    }))
    .sort((a, c) => Math.atan2(a.z, a.x) - Math.atan2(c.z, c.x));
}

/** A written idea: `</>` condensed out of nothing. */
function shapeCode(n: number, raster: number): Pt[] {
  return shaped(
    pointsFromShape({
      vw: 320,
      vh: 200,
      draw: (ctx) => {
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Heavy weight so the strokes survive rasterising; a lighter face
        // samples to a dotted outline rather than a glyph.
        ctx.font = "700 132px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("</>", 160, 104);
      },
      count: n,
      rimShare: 0.34,
      thickness: 0.05,
      height: 1.25,
      fit: "box",
      raster: Math.min(320, raster),
      seed: RND_SEED + 7,
    }),
  );
}

/** No shape yet: the idea loses its letters and is just mass. */
function shapeFormless(n: number): Pt[] {
  return shaped(ball(1.15, n, mulberry32(RND_SEED + 1)));
}

/** The prototype: the simplest closed form there is. */
function shapePrototype(n: number): Pt[] {
  return shaped(sphere(0.98, { x: 0, y: 0, z: 0 }, n, mulberry32(RND_SEED + 2)));
}

/** The test: structure you can measure against. */
function shapeLattice(n: number): Pt[] {
  return shaped(lattice(1.9, 4, n, mulberry32(RND_SEED + 3)));
}

/**
 * The bulb, traced from the icon rather than assembled from primitives.
 *
 * The built version — a sphere on a cylinder — was a diagram of a bulb and
 * looked like one. The artwork has the things that actually read at this
 * size: the shoulder where the glass meets the neck, the ribs of the cap and
 * the filament crossing inside it.
 */
const BULB_GLASS =
  "M373.029,48.879C342.418,17.908,301.597,0.554,258.083,0.013c-44.08-0.553-85.786,16.291-117.402,47.417c-31.599,31.11-49.079,72.51-49.219,116.575c-0.138,43.229,16.365,84.114,46.464,115.123c23.99,24.714,37.202,56.758,37.202,90.23v68.005h-0.001c0,22.817,18.563,41.379,41.379,41.379h4.372c0.451,18.414,15.56,33.258,34.083,33.258c18.522,0,33.631-14.844,34.083-33.259h4.372c22.817,0,41.379-18.563,41.379-41.379v-65.005c0-34.413,13.644-67.213,38.419-92.358c30.518-30.973,47.324-71.978,47.324-115.46C420.539,120.952,403.667,79.877,373.029,48.879z M254.961,491.602c-7.274,0-13.243-5.694-13.68-12.86h27.359C268.203,485.907,262.234,491.602,254.961,491.602z M293.415,458.344h-14.55h-47.81h-14.55c-8.282,0-15.436-4.835-18.847-11.821h89.52c5.632,0,10.199-4.566,10.199-10.199c0-5.633-4.567-10.199-10.199-10.199h-91.655v-10.782h43.846c5.632,0,10.199-4.566,10.199-10.199c0-5.633-4.567-10.199-10.199-10.199h-43.846v-10.782h118.872v53.2h0.001C314.396,448.932,304.983,458.344,293.415,458.344z M358.684,265.683c-26.497,26.893-41.949,61.442-44.043,98.082h-48.442v-91.119h12.161c38.971,0,70.676-31.705,70.676-70.675v-22.36c0-5.633-4.567-10.199-10.199-10.199h-22.36c-25.608,0-48.078,13.691-60.477,34.138c-12.399-20.446-34.869-34.138-60.477-34.138h-22.36c-5.632,0-10.199,4.566-10.199,10.199v22.36c0,38.97,31.705,70.675,70.676,70.675H245.8v91.119h-50.381c-1.392-36.765-16.486-71.678-42.858-98.846c-26.368-27.163-40.822-62.978-40.702-100.849c0.122-38.581,15.441-74.841,43.131-102.103c27.707-27.278,64.183-42.022,102.839-41.557c78.471,0.975,142.31,65.632,142.31,144.13C400.141,202.631,385.417,238.551,358.684,265.683z M308.839,208.902c-3.984-3.983-10.44-3.983-14.425,0l-28.113,28.113c1.593-26.298,23.484-47.207,50.175-47.207h12.161v12.161c0,27.186-21.694,49.387-48.678,50.237l28.88-28.88C312.822,219.344,312.822,212.886,308.839,208.902z M203.159,223.327l28.88,28.88c-26.984-0.85-48.678-23.05-48.678-50.237v-12.161h12.161c26.691,0,48.582,20.909,50.175,47.207l-28.113-28.114c-3.984-3.983-10.44-3.983-14.425,0C199.177,212.885,199.177,219.343,203.159,223.327z";
const BULB_RIB =
  "M287.18,394.945h-6.236c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h6.236c5.632,0,10.199-4.566,10.199-10.199C297.38,399.511,292.812,394.945,287.18,394.945z";

/** Degrees off vertical the bulb leans. */
const BULB_LEAN = 37;

function shapeBulb(n: number, raster: number): Pt[] {
  const flat = pointsFromShape({
    vw: 512,
    vh: 512,
    draw: (ctx) => {
      ctx.fillStyle = "#fff";
      ctx.fill(new Path2D(BULB_GLASS));
      ctx.fill(new Path2D(BULB_RIB));
    },
    count: n,
    rimShare: 0.44,
    // Enough depth to turn as a solid; a plate this tall reads as paper.
    thickness: 0.14,
    height: 2,
    fit: "box",
    raster,
    seed: RND_SEED + 4,
  });

  // Leaned in the plane the glyph was traced in, so it stands at an angle
  // when facing the reader and precesses as the cloud turns — an object
  // tipped over, rather than a picture of one that has been rotated.
  const a = (BULB_LEAN * Math.PI) / 180;
  const ca = Math.cos(a);
  const sa = Math.sin(a);
  return shaped(
    flat.map((p) => ({ ...p, x: p.x * ca + p.z * sa, z: p.z * ca - p.x * sa })),
  );
}

/** The decision: the thing that ships. */
function shapeMark(n: number): Pt[] {
  return shaped(artinextLogo(n));
}

const rndStage =
  (shape: (n: number, raster: number) => Pt[]) =>
  (hint?: BuildHint): Pt[] => {
    const { ambient, shape: n, raster } = rndCounts(hint);
    return ambientField(ambient).concat(shape(n, raster));
  };

export const rndCode = rndStage(shapeCode);
export const rndFormless = rndStage(shapeFormless);
export const rndPrototype = rndStage(shapePrototype);
export const rndLattice = rndStage(shapeLattice);
export const rndBulb = rndStage(shapeBulb);
export const rndMark = rndStage(shapeMark);

/**
 * The same six shapes without the field around them.
 *
 * On a phone the page does not scrub one cloud through six states; each
 * section carries its own figure in a box above its copy, the way the About
 * and Insights pages present theirs. A box that size has no room for a field
 * nearly five times the shape's radius — it would be clipped to a dim square
 * — so the figure is the shape alone, and the field is drawn once, behind
 * the hero, where there is room for it.
 */
const rndSolo =
  (shape: (n: number, raster: number) => Pt[]) =>
  (hint?: BuildHint): Pt[] => {
    const { shape: n, raster } = rndCounts(hint);
    return shape(n, raster);
  };

/** The engine's pitch. A face-on field's rows are foreshortened by its cosine. */
const FIELD_TILT = 0.34;

/**
 * An even field of points laid out to the host box.
 *
 * Assumes the caller renders it at `fit={0.5}` and face-on (`turn={false}`):
 * one world unit is then half the host's shorter side, x maps straight onto
 * the screen, and z does after the pitch. Runs 8% past every edge, into the
 * canvas bleed, so a scatter at the edge still has points to pull in and a
 * modest resize does not open a gap. One point per ~750 px² of section.
 */
function sageField({ hostW, hostH }: BuildHint): Pt[] {
  const W = hostW || 1440;
  const H = hostH || 900;
  const unit = Math.min(W, H) * 0.5;
  const hx = (W / 2 / unit) * 1.08;
  const hz = (H / 2 / unit / Math.cos(FIELD_TILT)) * 1.08;
  const n = Math.max(600, Math.min(2600, Math.round((W * H) / 750)));
  const rnd = mulberry32(0x53474644);
  const pts: Pt[] = [];
  for (let i = 0; i < n; i += 1) {
    pts.push({
      x: (rnd() * 2 - 1) * hx,
      y: (rnd() * 2 - 1) * 0.6,
      z: (rnd() * 2 - 1) * hz,
      c: 0,
    });
  }
  return pts;
}

/**
 * Channel 0 is the space; channel 1 is the subject.
 *
 * The gap between them is deliberately large. Ambient points turn with
 * everything else, and at anything near the shape's weight a field this wide
 * reads as the whole screen being in motion — which is exactly the restless
 * feeling it has to avoid.
 */
const RND_AMBIENT_INK: Channel = {
  token: "--sage-rgb",
  vivid: { s: 0.3, l: 0.62 },
  radius: 0.85,
  alpha: 0.3,
};

const RND_INK: Channel = {
  token: "--sage-rgb",
  vivid: { s: 0.7, l: 1.3 },
  radius: 1.35,
  alpha: 1,
};

/**
 * Rocking, not spinning.
 *
 * Three of the six stages are traced from flat artwork — the `</>`, the bulb
 * and the mark — and a full turn takes each of them edge-on twice a
 * revolution, where a shape the page has just spent a screen arriving at
 * collapses to a vertical line. Swinging through a third of a turn and back
 * keeps every one of them legible while still reading as a solid being
 * turned; the ambient field is a ball and cannot tell the difference.
 */
const RND_ROCK = { amplitude: 0.62, periodMs: 11000 };

const rndSpec = (build: (hint: BuildHint) => Pt[]) => ({
  build,
  channels: [RND_AMBIENT_INK, RND_INK],
  sweep: "channel" as const,
  rock: RND_ROCK,
});

/**
 * A phone figure turns the way the contact hero's mark does — a full,
 * unbroken revolution with the beam passing through it — rather than rocking.
 * The rock exists for the desktop run, where one flat shape is held on screen
 * through a whole stage and catching it edge-on reads as the shape vanishing.
 * A figure in its own box beside its own copy is a mark being shown, and the
 * site already has one convention for that.
 */
const rndSoloSpec = (build: (hint: BuildHint) => Pt[]) => ({
  build,
  channels: [RND_AMBIENT_INK, RND_INK],
  sweep: "channel" as const,
});

/** Shared by the three Products hero marks, below; declared here because the registry reads them. */
const PRODUCT_POINTS = 1800;
const PRODUCT_ROCK = { amplitude: 0.55, periodMs: 9000 };

export const glyphs = {
  ...iconSpecs,

  "rnd-code": rndSpec(rndCode),
  "rnd-formless": rndSpec(rndFormless),
  "rnd-prototype": rndSpec(rndPrototype),
  "rnd-lattice": rndSpec(rndLattice),
  "rnd-bulb": rndSpec(rndBulb),
  "rnd-mark": rndSpec(rndMark),

  "rnd-code-solo": rndSoloSpec(rndSolo(shapeCode)),
  "rnd-formless-solo": rndSoloSpec(rndSolo(shapeFormless)),
  "rnd-prototype-solo": rndSoloSpec(rndSolo(shapePrototype)),
  "rnd-lattice-solo": rndSoloSpec(rndSolo(shapeLattice)),
  "rnd-bulb-solo": rndSoloSpec(rndSolo(shapeBulb)),
  "rnd-mark-solo": rndSoloSpec(rndSolo(shapeMark)),
  "rnd-field": { build: () => ambientField(900), channels: [RND_AMBIENT_INK] },

  /**
   * A section background: an even field of sage points laid out to the
   * section's own width and height, standing in for the drafting grid behind
   * the home page's frictions.
   *
   * Laid out, not sampled from a ball. A ball projects to a disc that is dense
   * in the middle and empty at the rim, so on a wide section it left both
   * sides bare — and on a phone, where the section is several screens tall,
   * the top and bottom. A rectangle sized from the host box reaches every edge
   * at the same density on any screen.
   */
  "sage-field": {
    build: sageField,
    // The brand sage, pushed a little further into green than the token so a
    // one-pixel dot still reads as sage against the near-black ground instead
    // of as grey. The depth fade is kept shallow: the default drops the far
    // half of a cloud to a fifth of its strength, which suits a solid and
    // turned most of this field grey.
    channels: [{ token: "--sage-rgb", lift: { s: 1.35, l: 1 }, radius: 1.05, alpha: 0.62 }],
    depth: { r: [0.8, 0.88, 0.95, 1], a: [0.55, 0.7, 0.85, 1] },
    sweep: "channel" as const,
  },

  "artinext-logo": { build: () => artinextLogo(), channels: [AMBER] },
  "info-mark": { build: infoMark, channels: [AMBER] },

  /**
   * The Products hero cycles through these. Rocked rather than spun: all three
   * are flat drawings, and a full turn takes each of them edge-on.
   */
  "product-family": { build: productFamily, channels: [AMBER], rock: PRODUCT_ROCK },
  "product-tool": { build: productTool, channels: [AMBER], rock: PRODUCT_ROCK },
  "product-flow": { build: productFlow, channels: [AMBER], rock: PRODUCT_ROCK },

  /**
   * The room the mark stands in.
   *
   * Wide, sparse and dim enough that it reads as depth rather than as a
   * second subject — at anything near the mark's weight a field this size
   * turns the whole screen into motion, which is the one thing a page of
   * reading cannot have behind it. Its own cloud rather than a channel of
   * the mark's, because it fills the section while the mark keeps to one
   * column of it.
   */
  "amber-field": {
    build: () => ball(4.6, 900, mulberry32(0x414d42)),
    channels: [
      { token: "--amber-rgb", vivid: { s: 0.55, l: 0.5 }, radius: 0.8, alpha: 0.26 },
    ],
  },

  /**
   * Matched to `HeroModel`, deliberately: this is the same building drawn the
   * same way, so it takes the same two materials — sage columns carrying the
   * frame, dimmer slate beams behind them — and the same amber build band.
   * The saturation values are HeroModel's, for its reason: these tokens are
   * hairline colours on near-black and wash out to grey at one pixel.
   *
   * The dots are much smaller than a mark's. A 5,087-member frame at the
   * radius the logo uses is a solid blob with no structure in it; the form
   * only appears once a point is small enough to read as a member rather
   * than as a blot.
   */
  "hero-building": {
    build: heroBuilding,
    channels: [
      {
        token: "--sage-rgb",
        vivid: { s: 0.62, l: 1.28 },
        radius: 1.2,
        alpha: 1,
        line: { width: 1.3, alpha: 0.85 },
      },
      {
        token: "--slate-rgb",
        vivid: { s: 0.52, l: 1.18 },
        radius: 0.85,
        alpha: 0.72,
        line: { width: 0.75, alpha: 0.44 },
      },
    ],
    sweep: { token: "--amber-rgb", vivid: { s: 0.95, l: 1.22 }, radius: 1.1, alpha: 1 },
    /**
     * Far higher floor than a mark uses. HeroModel - the wireframe this is
     * derived from, and which is legible - fades its far band only to 0.42.
     * At the mark default of 0.22 the back half of a frame this deep simply
     * is not there, which is what made the first version invisible.
     */
    depth: { r: [0.8, 0.92, 1, 1.08], a: [0.45, 0.68, 0.88, 1] },
    dot: "square",
    throw: { launch: 0.2, maxV0: 520 },
  },
} satisfies Record<string, CloudSpec>;

export type GlyphName = keyof typeof glyphs;

/** An information mark — ring, stem, dot. The first cloud built for the site. */
/**
 * The Products hero's three marks. Drawn, not traced: each is a few strokes
 * on a 200-unit canvas, rasterised into points like the `</>` on the R&D page.
 * One count for all three so the hero morphs from one to the next.
 */

function productMark(draw: (ctx: CanvasRenderingContext2D) => void, seed: number): Pt[] {
  return pointsFromShape({
    vw: 200,
    vh: 200,
    draw: (ctx) => {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "#fff";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      draw(ctx);
    },
    count: PRODUCT_POINTS,
    rimShare: 0.4,
    thickness: 0.09,
    height: 2,
    fit: "box",
    raster: 320,
    seed,
  });
}

/** Rounded rectangle without `roundRect`, which older Safari lacks. */
function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** A link with a head at its far end, stopping short of the node it enters. */
function arrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2 - Math.cos(a) * 8, y2 - Math.sin(a) * 8);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - Math.cos(a - 0.5) * 18, y2 - Math.sin(a - 0.5) * 18);
  ctx.lineTo(x2 - Math.cos(a + 0.5) * 18, y2 - Math.sin(a + 0.5) * 18);
  ctx.closePath();
  ctx.fill();
}

/** Revit families: a curtain-wall unit — frame, two mullions, two transoms. */
export function productFamily(): Pt[] {
  return productMark((ctx) => {
    ctx.lineWidth = 12;
    ctx.strokeRect(46, 18, 108, 164);
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(82, 18);
    ctx.lineTo(82, 182);
    ctx.moveTo(118, 18);
    ctx.lineTo(118, 182);
    ctx.moveTo(46, 72);
    ctx.lineTo(154, 72);
    ctx.moveTo(46, 128);
    ctx.lineTo(154, 128);
    ctx.stroke();
  }, 0x50524631);
}

/** Digital tools: a ribbon button with a run glyph, and the cursor pressing it. */
export function productTool(): Pt[] {
  return productMark((ctx) => {
    ctx.lineWidth = 10;
    roundedRect(ctx, 22, 34, 124, 110, 18);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(66, 64);
    ctx.lineTo(66, 114);
    ctx.lineTo(108, 89);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(122, 112);
    ctx.lineTo(122, 184);
    ctx.lineTo(139, 168);
    ctx.lineTo(151, 192);
    ctx.lineTo(163, 186);
    ctx.lineTo(151, 162);
    ctx.lineTo(174, 160);
    ctx.closePath();
    ctx.fill();
  }, 0x50524f32);
}

/** Automation: start, step, result — three nodes joined left to right. */
export function productFlow(): Pt[] {
  return productMark((ctx) => {
    ctx.lineWidth = 8;
    arrow(ctx, 54, 76, 82, 118);
    arrow(ctx, 122, 118, 146, 78);
    ctx.beginPath();
    ctx.arc(38, 60, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 10;
    roundedRect(ctx, 80, 118, 42, 42, 8);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(162, 60, 22, 0, Math.PI * 2);
    ctx.fill();
  }, 0x50524633);
}

export function infoMark(): Pt[] {
  const rnd = mulberry32(0x41525449);
  const pts: Pt[] = [];
  torus(1, 0.078, 980, rnd, pts);
  cylinder(0.088, -0.56, 0.2, 360, rnd, pts);
  sphere(0.132, { x: 0, y: 0, z: 0.47 }, 250, rnd, pts);
  return pts;
}

/**
 * The Hero Building — the real E2R output, as a point cloud.
 *
 * 5,087 structural members reduced to centrelines by
 * scripts/extract_hero_model.py and shared with `HeroModel`, which draws the
 * same file as a wireframe. This is the only glyph that fetches: the geometry
 * is a surveyed building, not three primitives, so there is nothing to
 * generate. 26KB gzipped, requested at low priority after mount, and the
 * section renders without it until it lands.
 *
 * Points are spread along each member by length rather than per member. Per
 * member would put the same number of points on a 4m column as on a 0.2m
 * stub, so the short members — of which a frame has thousands — would read as
 * bright knots and the long spans as dotted lines.
 */
export async function heroBuilding({ hostW, hostH }: BuildHint): Promise<Pt[]> {
  /**
   * Two points per member and a line between them, rather than a scatter of
   * samples along it. A member sampled into one point cannot be joined to
   * anything, and at the density this frame needs, most members got exactly
   * one - so there was nothing to draw lines between and nothing to hold the
   * structure together.
   *
   * The decimated file on a small box, the same trade HeroModel makes: at a
   * few hundred pixels the full member list reads as noise, and this is the
   * one glyph heavy enough for the distinction to matter. It also makes the
   * phone cheaper than the version it replaces - 1,412 members against 3,200
   * loose dots.
   */
  /**
   * The threshold has to clear a phone's hero band with room to spare.
   *
   * It was first set at 320x320, which a 412x280 band exceeds - so phones
   * loaded the full 5,087-member file and Lighthouse mobile measured a
   * 60-second blocking time. The desktop hero is ~826x832, so anything
   * between about 130k and 650k square pixels separates them; 500x500 sits
   * in the middle of that gap rather than on the edge of one side.
   */
  const small = hostW * hostH < 500 * 500;
  const src = small ? "/hero-model-lite.json" : "/hero-model.json";
  const res = await fetch(src, { priority: "low" } as RequestInit);
  const m = (await res.json()) as { columns: number[]; beams: number[]; height: number };

  // Every other glyph is ~2 units tall and the renderer's `fit` assumes it.
  const k = 2 / m.height;
  const pts: Pt[] = [];

  const segs = [m.columns, m.beams];
  for (let ch = 0; ch < segs.length; ch += 1) {
    const flat = segs[ch];
    for (let i = 0; i < flat.length; i += 6) {
      pts.push({ x: flat[i] * k, y: flat[i + 1] * k, z: flat[i + 2] * k, c: ch });
      pts.push({ x: flat[i + 3] * k, y: flat[i + 4] * k, z: flat[i + 5] * k, c: ch, link: 1 });
    }
  }

  return pts;
}
