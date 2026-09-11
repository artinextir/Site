"use client";

import { useCallback, useEffect, useRef } from "react";
import { beamOf, lift, vivid, type Pt } from "@/lib/pointcloud/geometry";
import { glyphs, type CloudSpec, type GlyphName } from "@/lib/pointcloud/glyphs";

/**
 * A point cloud that turns in 3D and scatters under the cursor.
 *
 * No 3D library. Projecting points is a dot product and a divide, so three.js
 * would be ~150KB to do arithmetic the browser already does. Geometry comes
 * from `lib/pointcloud/glyphs` and is built once on mount, so nothing is
 * fetched either.
 *
 * The spin is a yaw about Z. A glyph built flat in the X-Z plane with its
 * thickness on Y therefore turns edge-on and back like a coin, which is what
 * makes a flat mark read as a solid in space.
 *
 * The pointer does not steer the rotation. It throws points: anything the
 * cursor passes through is flung in its direction of travel at a share of its
 * speed, then pulled home by a spring. Scattering the cloud and watching it
 * reassemble says "these are individual points" far better than a lean does,
 * and the two fight each other — a lean moves every point at once, which is
 * the reading the scatter exists to break.
 */

/** Radians per millisecond — a little under a turn every forty seconds. */
const SPIN = 0.00016;
const TILT = 0.34;
/**
 * The beam is a step in the cycle, not a metronome running underneath it.
 *
 * One pass, bottom to top, scheduled between morphs: paint finishes, a beat,
 * the beam crosses, another beat, then the next mark. Free-running it meant
 * the beam could be halfway up when a morph started, or fire twice during one
 * hold — the two motions read as unrelated because they were.
 */
const BEAM_MS = 2600;
/** The beat either side of the beam. */
const PAUSE_MS = 750;
/**
 * Extra rest for a cloud nobody is advancing — a section figure sits between
 * manual steps, and a beam every 2.4s there would be pure fidget.
 */
const REST_MS = 6500;

/** How near the cursor has to pass, in CSS pixels, to throw a point. */
const HIT_R = 34;
const HIT_R2 = HIT_R * HIT_R;
/** Share of the cursor's speed handed to a point it passes through. */
const LAUNCH = 0.34;
/** Ceiling on launch speed, px/s. Caps the throw at ~87px of travel. */
const MAX_V0 = 900;

/**
 * How far past its host the canvas extends, in CSS pixels.
 *
 * The canvas clips, so without this the throw dies on an invisible wall right
 * where it should be most fun — points pile up on the edge instead of flying
 * off it. The bleed is larger than the ~87px a maximum throw covers, and the
 * glyph is scaled from the host box rather than the canvas box, so widening
 * this adds room to fly without changing how big the mark looks.
 */
const BLEED = 150;

/**
 * The return is a damped spring, x'' = -w^2 x - 2*zeta*w*x'.
 *
 * w 3.6 / zeta 0.92 puts a small throw back under a pixel in 1.55s and a hard
 * one in 1.83s, cresting about a quarter-second after impact. Slightly under
 * critical damping on purpose: the sliver of overshoot reads as the point
 * being caught rather than easing to a halt.
 */
const OMEGA = 3.6;
const ZETA = 0.92;
const SPRING_K = OMEGA * OMEGA;
const SPRING_C = 2 * ZETA * OMEGA;

/** Below both of these a point is home; under it for every point, the whole
    scatter branch switches back off. */
const REST_X = 0.08;
const REST_V = 0.6;
/** Integration clamp. A backgrounded tab returns with a huge timestamp gap,
    and an unclamped dt turns the spring into an explosion. */
const MAX_DT = 1 / 30;

/**
 * Frame budget on a device with no cursor, in ms.
 *
 * Without a pointer there is nothing to scatter, so the only motion is a turn
 * that takes forty seconds and a band that takes eight. Neither needs 60fps,
 * let alone the 144 a modern panel offers — but rendering ~1,700 arcs at panel
 * rate still costs the main thread, and Lighthouse mobile measured 3.1s of it
 * against 0.8s for a page with no canvas. Capping to 30fps roughly halves that
 * for motion nobody can tell apart at this speed. A cursor device is left
 * uncapped, because the throw and its return genuinely need the frames.
 */
const IDLE_FRAME_MS = 1000 / 30;

/**
 * A morph runs in three acts, and the middle one is the only one that moves.
 *
 * A hard colour swap is the worst possible way to change a cloud's palette:
 * it happens in a single frame, at full opacity, on every point at once. So
 * the colour leaves and returns as a sweep instead — a band crosses the mark
 * and drains it to white, the white shape becomes the new shape, and a second
 * band crosses and paints the new colours in. The change is then something
 * that travels, which is the same language the build beam already speaks.
 *
 * Bleaching first also means the shape morph happens on a single-colour
 * cloud, so no point is ever seen crossing the frame in a colour that belongs
 * to neither the mark it left nor the one it is joining.
 *
 * These sum, with the two beats and the beam, to an eight-second cycle. The
 * whole sequence is one idea being stated slowly; at half this length it read
 * as a slideshow hurrying to the next slide.
 */
const BLEACH_MS = 900;
const MORPH_MS = 2100;
const PAINT_MS = 900;
const TRANSITION_MS = BLEACH_MS + MORPH_MS + PAINT_MS;

/** The glyph spans about +-1.3 in z; the wipe starts and ends clear of it. */
const WIPE_LO = -1.45;
const WIPE_HI = 1.45;

/**
 * The ambient touch, when a cloud is asked for one.
 *
 * Weak enough that a point travels roughly ten pixels and is home in about a
 * second — the cloud should look like it is being brushed past, not played
 * with. The interval is a range so the touches never fall into a rhythm; a
 * fixed cadence reads as a loop, which is the one thing idle motion must not.
 */
const AMBIENT = { everyMs: [420, 1250] as [number, number], strength: 165, radius: 78 };

/**
 * Four depth bands, drawn far to near, as multipliers on a channel's radius
 * and alpha. A cloud at one dot size is as ambiguous as a flat wireframe: the
 * eye cannot tell the near face from the far one, picks a reading, and
 * periodically swaps it. Size and opacity both tracking depth settles it.
 */
const DEPTH_R = [0.514, 0.657, 0.829, 1];
const DEPTH_A = [0.22, 0.4, 0.68, 1];
const BANDS = 4;

export function PointCloud({
  glyph,
  className = "",
  fit = 0.43,
  ambient: wantAmbient = false,
  turn = true,
  onCycleComplete,
  stages,
  stagePos,
  stageArc,
}: {
  /** Which cloud to build, from the `glyphs` registry. Built once, on mount,
      client-side. A name rather than a function because a page is a Server
      Component and functions cannot cross that boundary. */
  glyph: GlyphName;
  className?: string;
  /** Share of the host's smaller side the glyph spans. */
  fit?: number;
  /**
   * Keep touching it, gently, forever. For a cloud that has to hold a hero on
   * its own; a section figure beside copy should sit still until asked.
   */
  ambient?: boolean;
  /**
   * Hold the cloud face-on instead of turning it. The beam
   * still passes and the cursor still scatters it — only the rotation stops.
   *
   * It is also what lets the cloud go quiet: a cloud that turns changes every
   * frame, but a still one between beams with nothing touching it paints the
   * same frame forever, so the loop stops drawing until the next beam is due.
   * For a section background that is the difference between a canvas that
   * costs something only when it is doing something, and one that redraws an
   * identical image at the display's refresh rate for as long as it is seen.
   */
  turn?: boolean;
  /**
   * Called once the post-morph beam and both beats have finished — the cue to
   * hand the next glyph in. Given one, the cloud drives the cadence and the
   * parent only chooses what comes next; without one it simply keeps its own
   * beam going.
   */
  onCycleComplete?: () => void;
  /**
   * Scroll-driven mode. Given a list of glyphs, the cloud ignores `glyph` and
   * its own cadence entirely and instead blends between these by how far the
   * nearest `[data-cloud-track]` ancestor has been scrolled through.
   *
   * Every stage must have the same point count — the blend pairs them index
   * by index, which is what makes it the same points arriving somewhere
   * rather than one cloud being swapped for another.
   */
  stages?: GlyphName[];
  /**
   * Where the subject sits at each stage, as `[x, y]` fractions of the
   * canvas offset from its centre. One pair per stage, interpolated across a
   * transition, so the path between two stages is whatever line joins them —
   * diagonal where the stage swaps both side and height, straight down where
   * only the height changes.
   *
   * The x component is mirrored in RTL; the y component is not, because
   * vertical reading order does not flip.
   *
   * Only the subject moves. The ambient field stays centred on the canvas:
   * it is the space the stages happen in, and space that slides across the
   * screen every time the subject does reads as the whole page lurching.
   */
  stagePos?: readonly (readonly [number, number])[];
  /**
   * How far the subject bows off the straight line between two stages, as a
   * fraction of canvas height. One entry per transition, so `stageArc[k]`
   * governs the move from stage k to stage k+1; positive bows downward.
   *
   * This is what makes a move diagonal without putting the stages themselves
   * at different heights. Resting a stage above or below the middle is the
   * obvious way to get a diagonal and it is wrong: the copy beside it is
   * centred, so every stage that sits high or low sits wrong for the whole
   * time it is being read, to buy a shape of motion that is only visible for
   * a second. Bowing the path costs nothing at rest.
   */
  stageArc?: readonly number[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  /**
   * The cloud as flat typed arrays rather than an array of objects.
   *
   * The draw loop touches every point every frame; at 10,000 points that is
   * three property loads per point per frame off a heap object, plus the GC
   * pressure of keeping them alive. Float32Array turns each into an indexed
   * read the JIT can keep in registers, and the channel and link flags become
   * byte lookups. Same geometry, measurably cheaper to walk.
   */
  const cloud = useRef({
    xyz: new Float32Array(0),
    ch: new Uint8Array(0),
    link: new Uint8Array(0),
    n: 0,
  });
  const raf = useRef(0);
  const live = useRef(false);
  /** Canvas box, and the host box it is centred on — the glyph scales to the
      host, the canvas is bigger by BLEED so throws are not clipped. */
  const size = useRef({ w: 0, h: 0, hostW: 0, hostH: 0 });
  /** One still frame, for prefers-reduced-motion only. */
  const still = useRef(false);
  /** Whether a fine pointer exists to scatter with. */
  const interactive = useRef(false);
  /** Mirrors `turn`, read by the draw loop without rebuilding it. */
  const turning = useRef(true);
  /** Set once a still cloud has painted a frame with nothing left to change. */
  const asleep = useRef(false);
  /** When a sleeping cloud next has something to draw: its next beam. */
  const wakeAt = useRef(0);
  /**
   * The beam's travel, in world z. The constants suit a glyph about two units
   * tall; a field laid out to a tall section runs far past them, and a beam
   * that stopped at ±1.45 would light only its middle. Widened to the cloud's
   * own extent when that is larger, never narrowed, so every glyph that fits
   * the old range keeps exactly the pass it had.
   */
  const wipeLo = useRef(WIPE_LO);
  const wipeHi = useRef(WIPE_HI);
  /** Resolved "r,g,b" per channel, plus the sweep band's. */
  const inks = useRef<string[]>(["216,167,106"]);
  const inkSweep = useRef("216,167,106");
  /** Per channel, the sweep colour when the band takes its hue from whatever
      it is crossing rather than from one fixed colour. */
  const inkLit = useRef<string[]>(["216,167,106"]);
  const sweepFromChannel = useRef(false);
  const radii = useRef<number[]>([1.75]);
  const alphas = useRef<number[]>([1]);
  /** Per channel: stroke width and alpha, or null for a dots-only channel. */
  const lineSpec = useRef<({ width: number; alpha: number } | null)[]>([null]);
  const square = useRef(false);
  /** True when any channel strokes lines. A dots-only cloud skips the line
      paths and the per-point link bookkeeping entirely. */
  const hasLines = useRef(false);
  /** Widest stroke any channel uses — the lit sweep draws members at one
      weight regardless of which channel they came from, because the band is a
      light passing over the frame, not a property of the material. */
  const maxLineWidth = useRef(1);
  /**
   * Bounds of what the last frame actually drew, plus a pad.
   *
   * The bleed makes the canvas roughly four times the area the glyph occupies,
   * and clearing all of it every frame pays for emptiness. Clearing only what
   * was inked is the same picture for a quarter of the fill. Starts as the
   * whole canvas so the first frame cannot leave anything behind.
   */
  const dirty = useRef({ x0: 0, y0: 0, x1: 0, y1: 0, all: true });
  /** Half the widest thing drawn at a point, so the clear covers its edges. */
  const clearPad = useRef(8);
  /** Throw strength, per cloud. A dense frame wants a gentler hand than a
      mark: the same impulse that reads as playful on 1,700 points reads as a
      demolition on 10,000. */
  const launchK = useRef(LAUNCH);
  const maxV0 = useRef(MAX_V0);
  const hitR2 = useRef(HIT_R2);
  /**
   * Morph state. `to` is the cloud being travelled toward; positions are
   * interpolated from `cloud` into it, and both the per-point channel and the
   * whole resolved style swap at the halfway mark — the moment the points are
   * most scrambled and a colour change is least visible.
   */
  const morphTo = useRef<{ xyz: Float32Array<ArrayBuffer>; ch: Uint8Array<ArrayBuffer> } | null>(
    null,
  );
  const morphStart = useRef(0);
  /** Stage geometry for scroll mode, in order. */
  const stageXYZ = useRef<Float32Array<ArrayBuffer>[]>([]);
  /** 0..stages-1 target, written by the scroll listener. */
  const scrollAt = useRef(0);
  /** +1 in LTR, -1 in RTL, so the sideways bias mirrors with the text. */
  const dirSign = useRef(1);
  /** What is actually drawn, easing toward the target. */
  const scrollShown = useRef(-1);
  /** When the next beam pass begins. The cycle hangs off this one timestamp. */
  const beamAt = useRef(0);
  /** Guards the hand-off so it fires once per pass, not once per frame. */
  const cycled = useRef(false);
  /** In a ref so a new callback identity never rebuilds the draw loop. */
  const onDone = useRef<(() => void) | null>(null);
  /** Applies the incoming glyph's colours and weights; run at the midpoint. */
  const pendingStyle = useRef<null | (() => void)>(null);
  /** Random ambient touches, or null. */
  const ambient = useRef<{ everyMs: [number, number]; strength: number; radius: number } | null>(
    null,
  );
  const nextTouch = useRef(0);
  /** Containing sphere radius in world units, or 0 for none. */
  const sphere = useRef(0);
  /** Non-null to oscillate rather than yaw continuously. */
  const rock = useRef<{ amplitude: number; periodMs: number } | null>(null);
  /**
   * Colour strings, resolved once per style rather than per frame.
   *
   * Indexed [channel * BANDS + band]. Dynamo has 21 facet colours, so the
   * loop below would otherwise build 84 rgba() template strings every frame
   * and hand them all to the collector — pure waste for values that only
   * change when the glyph does.
   */
  const dotStyle = useRef<string[]>([]);
  const lineStyle = useRef<string[]>([]);
  const litHalo = useRef<string[]>([]);
  const litCore = useRef<string[]>([]);
  /** White, per depth band, for the drained state during a transition. */
  const whiteStyle = useRef<string[]>([]);
  const depthR = useRef<number[]>(DEPTH_R);
  const depthA = useRef<number[]>(DEPTH_A);
  const lastTime = useRef(0);
  /** 0 means render every frame; otherwise the minimum ms between renders. */
  const frameBudget = useRef(0);
  const lastRender = useRef(0);

  /**
   * Screen-space displacement and its velocity, one pair each per point.
   *
   * Screen space rather than world space on purpose. Displacing the world
   * position would mean re-projecting every thrown point and counter-rotating
   * the offset to keep it anchored; here it is two adds after the projection
   * that already happened. The model turns about 10 degrees over the ~1.7s a
   * throw lasts, which the eye does not hold against a point visibly flying
   * back to a mark that is itself turning.
   */
  const offX = useRef<Float32Array>(new Float32Array(0));
  const offY = useRef<Float32Array>(new Float32Array(0));
  const velX = useRef<Float32Array>(new Float32Array(0));
  const velY = useRef<Float32Array>(new Float32Array(0));
  /** False means every point is home and the scatter branch is skipped
      entirely — the idle frame costs what it did before any of this. */
  const active = useRef(false);

  /** Pointer in canvas-local pixels. `moved` marks a fresh position the next
      frame has not yet swept. */
  const ptr = useRef({ x: 0, y: 0, has: false, moved: false });
  /** Where the cursor was at the previous frame — the other end of the
      segment swept this frame. */
  const prev = useRef({ x: 0, y: 0, has: false });
  /** Cached so the draw loop never reads layout. Refreshed on resize/scroll. */
  const rect = useRef({ left: 0, top: 0, width: 0, height: 0 });

  // Kept in a ref so a parent re-render with a new closure never tears down
  // and rebuilds the animation.
  useEffect(() => {
    onDone.current = onCycleComplete ?? null;
  });

  const draw = useCallback(
    (now: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const { ch: chOf, link: linkOf, n } = cloud.current;
      let xyz = cloud.current.xyz;
      if (!canvas || !ctx || !n) return;

      const { w: W, h: H, hostW, hostH } = size.current;
      if (!W || !H) return;

      let dt = lastTime.current ? (now - lastTime.current) / 1000 : 1 / 60;
      lastTime.current = now;
      if (dt > MAX_DT) dt = MAX_DT;
      else if (dt <= 0) dt = 1 / 60;

      // Clear last frame's ink, not the whole canvas.
      const dr = dirty.current;
      if (dr.all) ctx.clearRect(0, 0, W, H);
      else ctx.clearRect(dr.x0, dr.y0, dr.x1 - dr.x0, dr.y1 - dr.y0);

      // Held at a three-quarter angle when still, the pose that reads most
      // clearly as a shape rather than an edge.
      const rk = rock.current;
      // A cloud told not to turn is held face-on: it is a field, or a mark
      // meant to be read square to the page, not a solid caught mid-turn.
      const spin = !turning.current
        ? 0
        : still.current
          ? rk
            ? rk.amplitude * 0.5
            : 0.62
          : rk
            ? rk.amplitude * Math.sin((now / rk.periodMs) * Math.PI * 2)
            : now * SPIN;
      const cy = Math.cos(spin);
      const sy = Math.sin(spin);
      const cp = Math.cos(TILT);
      const sp = Math.sin(TILT);

      // Scaled from the host box, not the canvas box: the bleed is margin to
      // fly into, not extra room for the glyph to grow into.
      const scale = Math.min(hostW, hostH) * fit;

      /**
       * Beam position, driven by the schedule rather than by the clock. Parked
       * below the glyph before its pass and above it after, so "not running"
       * is expressed as a position no point can be inside.
       */
      let sweepZ = wipeHi.current + 9;
      if (!still.current) {
        const since = now - beamAt.current;
        const lo = wipeLo.current;
        const hi = wipeHi.current;
        if (since < 0) {
          sweepZ = lo - 9;
        } else if (since < BEAM_MS) {
          sweepZ = lo + ((hi - lo) * since) / BEAM_MS;
        } else if (since >= BEAM_MS + PAUSE_MS && !cycled.current) {
          cycled.current = true;
          if (onDone.current) onDone.current();
          // Nothing driving the cycle: rest, then beam again on our own.
          else beamAt.current = now + REST_MS;
          if (!onDone.current) cycled.current = false;
        }
      }

      /**
       * The cursor is tested as the segment it swept this frame, not the point
       * it sits on now. At speed a pointer jumps sixty pixels between frames,
       * so a point test misses most of what it visibly passed through — the
       * throw would fire only on slow movement, the opposite of the intent.
       */
      const p = ptr.current;
      const q = prev.current;
      let ax = 0;
      let ay = 0;
      let abx = 0;
      let aby = 0;
      let segLen2 = 0;
      let v0x = 0;
      let v0y = 0;
      let sweeping = false;

      if (interactive.current && p.has && q.has && p.moved) {
        ax = q.x;
        ay = q.y;
        abx = p.x - q.x;
        aby = p.y - q.y;
        segLen2 = abx * abx + aby * aby;
        if (segLen2 > 0.5) {
          const len = Math.sqrt(segLen2);
          const lk = launchK.current;
          let speed = len / dt;
          if (speed > maxV0.current / lk) speed = maxV0.current / lk;
          const launch = speed * lk;
          v0x = (abx / len) * launch;
          v0y = (aby / len) * launch;
          sweeping = true;
        }
      }


      /**
       * Eased 0..1 across the morph. smoothstep rather than linear: a linear
       * blend starts and stops abruptly, which across thousands of points
       * reads as a jump-cut rather than a transformation.
       *
       * Resolved before anything reads the style, and that ordering is load
       * bearing: the incoming glyph's channel count arrives with
       * `pendingStyle`, and the path arrays below are sized from it. Sized
       * first and swapped after, a morph from a one-channel silhouette to a
       * four-channel plate indexes past the end of them.
       */
      /**
       * Scroll mode short-circuits the whole cadence: no morph timer, no
       * bleach, no hand-off. Position is a function of where the page is, and
       * scrolling back up runs it backwards for free.
       */
      const st = stageXYZ.current;
      let stageB: Float32Array<ArrayBuffer> | null = null;
      let stageF = 0;
      let biasX = 0;
      let biasY = 0;
      if (st.length > 1) {
        /**
         * Eased toward the scroll position rather than pinned to it.
         *
         * Tied rigidly to the scrollbar, a wheel notch is a jump and a fast
         * flick is a snap — the cloud reads as being scrubbed rather than as
         * transforming. A first-order follow lets it arrive under its own
         * momentum instead.
         *
         * The constant is doing more work here than it looks: unpinned, the
         * whole sequence only gets about a screen and a half of scroll, so the
         * easing is what supplies the sense of the change taking time. Frame
         * rate independent, so it feels the same at 60 and 144.
         */
        if (scrollShown.current < 0) scrollShown.current = scrollAt.current;
        else {
          // Long, because the page snaps. A snap moves a whole stage in a
          // few hundred milliseconds, so the scroll position is no longer
          // what paces the change — this is. The subject keeps arriving for
          // about a second after the page has come to rest, which is the
          // difference between watching a thing transform and finding that
          // it already has.
          const k = 1 - Math.exp(-dt / 0.5);
          scrollShown.current += (scrollAt.current - scrollShown.current) * k;
        }
        const p = Math.max(-1, Math.min(st.length - 1, scrollShown.current));

        const i0 = Math.floor(p);
        const u = p - i0;
        const lastStage = st.length - 1;

        /**
         * The change happens in the gap between two panels, never on one.
         *
         * A panel's copy is centred on its own progress integer, so a
         * transition centred there would morph the shape out from under the
         * paragraph being read, and the reader would never see either state
         * whole. Holding across the first third, morphing through the middle
         * third and holding again through the last puts the transition in the
         * empty space between panels: a shape finishes arriving, its copy
         * comes up, the copy leaves, and only then does it become the next
         * thing.
         */
        // Most of the gap is spent moving. With the page snapping, this is
        // measured against eased travel rather than against the scrollbar:
        // the ease is fast at the start, so a narrow window would spend its
        // hold in the moment the reader is least able to see it and then
        // rush the part they can.
        const w = 0.6;
        const lo = 0.5 - w / 2;
        const hi = 0.5 + w / 2;
        const t = u <= lo ? 0 : u >= hi ? 1 : (u - lo) / w;

        const a = Math.max(0, Math.min(lastStage, i0));
        const b = Math.max(0, Math.min(lastStage, i0 + 1));
        xyz = st[a];
        stageB = st[b];
        stageF = t * t * (3 - 2 * t);

        if (stagePos && stagePos.length) {
          const pa = stagePos[Math.min(a, stagePos.length - 1)];
          const pb = stagePos[Math.min(b, stagePos.length - 1)];
          biasX = (pa[0] + (pb[0] - pa[0]) * stageF) * dirSign.current;
          biasY = pa[1] + (pb[1] - pa[1]) * stageF;

          // Zero at both ends by construction, so the arc can never leave a
          // stage resting anywhere but where its copy expects it.
          const arc = stageArc?.[a];
          if (arc) biasY += Math.sin(Math.PI * stageF) * arc;
        }
      }

      // Origin is settled after the stage block, because a scroll-driven
      // cloud shifts it sideways as the stages advance.
      // Two origins: the field's, which never moves, and the subject's,
      // which is where the stage has placed it.
      const oxA = W / 2;
      const ozA = H / 2;
      const oxS = oxA + biasX * W;
      const ozS = ozA + biasY * H;
      const sphereR = sphere.current * scale;
      const sphereR2 = sphereR * sphereR;

      /**
       * An ambient touch only fires when the cursor is not already doing one.
       * A real gesture always wins: being nudged by the page while you are
       * pushing it yourself reads as the thing fighting you.
       */
      let hr2 = hitR2.current;
      const amb = ambient.current;
      if (!sweeping && amb && !still.current && now >= nextTouch.current) {
        const [lo, hi] = amb.everyMs;
        nextTouch.current = now + lo + Math.random() * (hi - lo);
        // sqrt keeps the touches evenly spread over the disc rather than
        // clustering them at the centre, which is where uniform r lands them.
        const at = Math.random() * Math.PI * 2;
        const rr = Math.sqrt(Math.random()) * scale * 0.95;
        ax = oxA + Math.cos(at) * rr;
        ay = ozA + Math.sin(at) * rr;
        const dir = Math.random() * Math.PI * 2;
        abx = Math.cos(dir) * 6;
        aby = Math.sin(dir) * 6;
        segLen2 = 36;
        v0x = Math.cos(dir) * amb.strength;
        v0y = Math.sin(dir) * amb.strength;
        hr2 = amb.radius * amb.radius;
        sweeping = true;
      }

      const mo = morphTo.current;
      let me = 0;
      /**
       * Height of the wipe line in world z, and which side of it is white.
       *
       * `wipeUp` true means everything below the line has been drained; false
       * means everything below it has been repainted. Outside a transition
       * `wipe` is null and the routing below is skipped entirely.
       */
      let wipe: number | null = null;
      let wipeUp = true;
      if (mo) {
        const el = now - morphStart.current;
        if (el < BLEACH_MS) {
          // Act one: drain to white. Nothing moves yet.
          wipe = WIPE_LO + ((WIPE_HI - WIPE_LO) * el) / BLEACH_MS;
          wipeUp = true;
        } else if (el < BLEACH_MS + MORPH_MS) {
          const raw = (el - BLEACH_MS) / MORPH_MS;
          me = raw * raw * (3 - 2 * raw);
          // Fully white through the move; the wipe line is past the top.
          wipe = WIPE_HI + 1;
          wipeUp = true;
          // The channels and the palette change while everything is white, so
          // the swap itself is invisible — which is the whole point of the act.
          if (pendingStyle.current) {
            pendingStyle.current();
            pendingStyle.current = null;
          }
        } else {
          // Act three: paint the new colours in, shape already settled.
          me = 1;
          const raw = Math.min(1, (el - BLEACH_MS - MORPH_MS) / PAINT_MS);
          wipe = WIPE_LO + (WIPE_HI - WIPE_LO) * raw;
          wipeUp = false;
        }
        if (el >= TRANSITION_MS) {
          cloud.current = { xyz: mo.xyz, ch: mo.ch, link: linkOf, n };
          morphTo.current = null;
          wipe = null;
          // Paint has finished: beat, beam, beat, then hand back.
          beamAt.current = now + PAUSE_MS;
          cycled.current = false;
        }
      }
      const mxyz = stageB ?? (mo ? mo.xyz : null);
      if (stageB) me = stageF;
      // Past the bleach the cloud already wears the incoming channels; before
      // it, the outgoing ones still matter because they are still on screen.
      const mch = mo && me > 0 ? mo.ch : null;

      const dxs = offX.current;
      const dys = offY.current;
      const vxs = velX.current;
      const vys = velY.current;
      const simulate = active.current || sweeping;
      let awake = false;

      // One dot path and one line path per channel per depth band, plus the
      // sweep band. Building them per frame and filling once each is the whole
      // trick: five fills a frame instead of three thousand.
      const chR = radii.current;
      const chN = chR.length;
      const chLine = lineSpec.current;
      const dR = depthR.current;
      const dA = depthA.current;
      const sq = square.current;
      const wantLines = hasLines.current;
      const paths: Path2D[] = new Array(chN * BANDS);
      const lines: Path2D[] | null = wantLines ? new Array(chN * BANDS) : null;
      for (let k = 0; k < paths.length; k += 1) {
        paths[k] = new Path2D();
        if (lines) lines[k] = new Path2D();
      }
      // One lit path per channel. When the band takes the channel's own hue it
      // has to keep them apart; when it is a fixed colour they all fill the
      // same, and a handful of spare Path2D objects is not worth branching on.
      const litPaths: Path2D[] = new Array(chN);
      for (let k = 0; k < chN; k += 1) litPaths[k] = new Path2D();
      // Only allocated while a transition is running.
      const whitePaths: Path2D[] | null = wipe === null ? null : new Array(BANDS);
      if (whitePaths) for (let k = 0; k < BANDS; k += 1) whitePaths[k] = new Path2D();
      const wipeGlow = wipe === null ? null : new Path2D();
      let anyGlow = false;
      /** Members with an end inside the band. The band is a build sweep — it
          should light the member it reaches, not leave a lit node floating on
          an unlit line. */
      const litLine = wantLines ? new Path2D() : null;
      let anyLit = false;
      let anyLitLine = false;
      // Displaced screen position of the previous point, for linked pairs.
      let prevSx = 0;
      let prevSy = 0;
      let prevLit = false;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;


      for (let i = 0, j = 0; i < n; i += 1, j += 3) {
        let x = xyz[j];
        let y = xyz[j + 1];
        let z = xyz[j + 2];
        if (mxyz) {
          x += (mxyz[j] - x) * me;
          y += (mxyz[j + 1] - y) * me;
          z += (mxyz[j + 2] - z) * me;
        }

        // Channel 0 is the ambient field, which is pinned to the canvas.
        const ox = chOf[i] === 0 ? oxA : oxS;
        const oz = chOf[i] === 0 ? ozA : ozS;

        let sx = (x * cy - y * sy) * scale + ox;
        let sy2 = oz - (z * cp + (x * sy + y * cy) * sp) * scale;

        if (simulate) {
          let dx = dxs[i];
          let dy = dys[i];

          if (sweeping) {
            // Distance from the point's current position to the swept segment.
            const rx = sx + dx - ax;
            const ry = sy2 + dy - ay;
            let t = (rx * abx + ry * aby) / segLen2;
            if (t < 0) t = 0;
            else if (t > 1) t = 1;
            const cxp = rx - abx * t;
            const cyp = ry - aby * t;
            const d2 = cxp * cxp + cyp * cyp;
            if (d2 < hr2) {
              // Full throw at the centre of the stroke, tapering to nothing at
              // its edge, so the cursor leaves a soft-edged hole not a disc.
              const f = 1 - d2 / hr2;
              vxs[i] += v0x * f;
              vys[i] += v0y * f;
            }
          }

          // Semi-implicit Euler: velocity first, then position. Stable at the
          // frame rates a browser actually produces, unlike explicit Euler.
          let vx = vxs[i] + (-SPRING_K * dx - SPRING_C * vxs[i]) * dt;
          let vy = vys[i] + (-SPRING_K * dy - SPRING_C * vys[i]) * dt;
          dx += vx * dt;
          dy += vy * dt;

          if (sphereR2) {
            // Constrain the *displaced* position, then strip the outward part
            // of the velocity so the point slides on the shell rather than
            // stalling against it.
            const px2 = sx + dx - ox;
            const py2 = sy2 + dy - oz;
            const q = px2 * px2 + py2 * py2;
            if (q > sphereR2) {
              const inv = 1 / Math.sqrt(q);
              const nx = px2 * inv;
              const ny = py2 * inv;
              dx = ox + nx * sphereR - sx;
              dy = oz + ny * sphereR - sy2;
              const radial = vx * nx + vy * ny;
              if (radial > 0) {
                vx -= radial * nx;
                vy -= radial * ny;
              }
            }
          }

          const adx = dx < 0 ? -dx : dx;
          const ady = dy < 0 ? -dy : dy;
          const avx = vx < 0 ? -vx : vx;
          const avy = vy < 0 ? -vy : vy;
          if (adx < REST_X && ady < REST_X && avx < REST_V && avy < REST_V) {
            dx = 0;
            dy = 0;
            vx = 0;
            vy = 0;
          } else {
            awake = true;
          }

          dxs[i] = dx;
          dys[i] = dy;
          vxs[i] = vx;
          vys[i] = vy;
          sx += dx;
          sy2 += dy;
        }

        // Along the view axis. Larger is further from the camera.
        const depth = x * sy + y * cy;

        // Independent tests, not else-if: for 100, 90, 95 an else-if records a
        // max of 95 while 100 was drawn, and the next clear leaves a trail.
        if (sx < minX) minX = sx;
        if (sx > maxX) maxX = sx;
        if (sy2 < minY) minY = sy2;
        if (sy2 > maxY) maxY = sy2;

        const band = depth > 0.55 ? 0 : depth > 0 ? 1 : depth > -0.55 ? 2 : 3;
        // Clamped. The ordering above should make this unreachable, but an
        // out-of-range channel throws inside the draw loop and takes the whole
        // page down with it — an expensive failure for a decorative canvas.
        const raw = mch ? mch[i] : chOf[i];
        const ch = raw < chN ? raw : chN - 1;
        const r = chR[ch] * dR[band];

        /**
         * Which side of the wipe this point is on. Draining runs bottom-up and
         * leaves white behind it; painting runs bottom-up and leaves colour.
         */
        const white =
          whitePaths !== null && (wipeUp ? z < (wipe as number) : z > (wipe as number));

        const path = white ? whitePaths[band] : paths[ch * BANDS + band];
        if (sq) {
          path.rect(sx - r, sy2 - r, r + r, r + r);
        } else {
          path.moveTo(sx + r, sy2);
          path.arc(sx, sy2, r, 0, Math.PI * 2);
        }

        const isLit = z > sweepZ - 0.13 && z < sweepZ + 0.13;

        // Struck between displaced positions, so the member stretches with the
        // throw instead of the cloud coming apart into unrelated specks.
        if (lines && linkOf[i] && chLine[ch]) {
          if (isLit || prevLit) {
            litLine!.moveTo(prevSx, prevSy);
            litLine!.lineTo(sx, sy2);
            anyLitLine = true;
          } else {
            const lp = lines[ch * BANDS + band];
            lp.moveTo(prevSx, prevSy);
            lp.lineTo(sx, sy2);
          }
        }
        if (wantLines) {
          prevSx = sx;
          prevSy = sy2;
          prevLit = isLit;
        }

        // The line itself glows, so the change reads as something crossing the
        // mark rather than as a boundary that happens to be moving.
        if (wipeGlow !== null && Math.abs(z - (wipe as number)) < 0.1) {
          const gr = r * 1.6;
          if (sq) wipeGlow.rect(sx - gr, sy2 - gr, gr + gr, gr + gr);
          else {
            wipeGlow.moveTo(sx + gr, sy2);
            wipeGlow.arc(sx, sy2, gr, 0, Math.PI * 2);
          }
          anyGlow = true;
        }

        if (isLit && wipe === null) {
          const lp = litPaths[ch];
          const lr = r * 1.5;
          if (sq) {
            lp.rect(sx - lr, sy2 - lr, lr + lr, lr + lr);
          } else {
            lp.moveTo(sx + lr, sy2);
            lp.arc(sx, sy2, lr, 0, Math.PI * 2);
          }
          anyLit = true;
        }
      }

      active.current = awake;

      /*
        Nothing left to draw until the next beam.

        A cloud that is not turning, not being touched, not changing shape and
        not being swept paints the same frame forever. Once one such frame is
        on the canvas, the loop stops spending frames on it until the beam is
        next due — the same way the drafting grid it replaces went quiet once
        the cursor settled. The pointer handler and a resize wake it early.

        Waking at the end of the pause rather than at the start of the next
        beam when the pass has just finished: that is the frame on which the
        schedule sets the next beam, and a sleeping loop would never reach it.
      */
      if (!turning.current && !awake && !sweeping && !amb && !mo && !stageB) {
        const since = now - beamAt.current;
        if (since < 0 || since >= BEAM_MS) {
          asleep.current = true;
          wakeAt.current = since < 0 ? beamAt.current : beamAt.current + BEAM_MS + PAUSE_MS;
        }
      }

      // Bounds for the next frame's clear. A frame that drew nothing falls
      // back to clearing everything rather than guessing.
      if (minX <= maxX && minY <= maxY) {
        const pad = clearPad.current;
        dirty.current = {
          x0: Math.max(0, minX - pad),
          y0: Math.max(0, minY - pad),
          x1: Math.min(W, maxX + pad),
          y1: Math.min(H, maxY + pad),
          all: false,
        };
      } else {
        dirty.current = { x0: 0, y0: 0, x1: W, y1: H, all: true };
      }

      // This frame has consumed the cursor's travel; the next one sweeps from
      // here. Without this a parked cursor re-throws the same segment forever.
      if (p.has) {
        q.x = p.x;
        q.y = p.y;
        q.has = true;
        p.moved = false;
      }

      // Band outer, channel inner: everything at one depth is laid down
      // before anything nearer, so a near beam still covers a far column.
      const dStyle = dotStyle.current;
      const lStyle = lineStyle.current;
      const wStyle = whiteStyle.current;
      for (let b = 0; b < BANDS; b += 1) {
        if (whitePaths) {
          ctx.fillStyle = wStyle[b];
          ctx.fill(whitePaths[b]);
        }
        for (let ch = 0; ch < chN; ch += 1) {
          // Lines under dots: the dots are nodes sitting on the member, and a
          // stroke drawn over them would eat the thing it is connecting.
          const ln = lines ? chLine[ch] : null;
          if (ln && lines) {
            ctx.lineWidth = ln.width * dR[b];
            ctx.strokeStyle = lStyle[ch * BANDS + b];
            ctx.stroke(lines[ch * BANDS + b]);
          }
          ctx.fillStyle = dStyle[ch * BANDS + b];
          ctx.fill(paths[ch * BANDS + b]);
        }
      }

      // Lit members first, so the lit nodes still sit on top of their own
      // line the way unlit ones do.
      if (anyLitLine && litLine) {
        const w = maxLineWidth.current;
        ctx.lineWidth = w * 2.6;
        ctx.strokeStyle = `rgba(${inkSweep.current},0.13)`;
        ctx.stroke(litLine);
        ctx.lineWidth = w * 1.15;
        ctx.strokeStyle = `rgba(${inkSweep.current},0.92)`;
        ctx.stroke(litLine);
      }

      if (anyGlow && wipeGlow) {
        ctx.fillStyle = "rgba(255,255,255,0.16)";
        ctx.fill(wipeGlow);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fill(wipeGlow);
      }

      if (anyLit) {
        const halo = litHalo.current;
        const core = litCore.current;
        for (let k = 0; k < chN; k += 1) {
          // Wide soft halo under a bright core — light coming off the points
          // rather than just larger dots.
          ctx.fillStyle = halo[k];
          ctx.fill(litPaths[k]);
          ctx.fillStyle = core[k];
          ctx.fill(litPaths[k]);
        }
      }
    },
    [fit, stagePos, stageArc],
  );

  const tick = useCallback(
    (now: number) => {
      raf.current = requestAnimationFrame(tick);
      // Queue the next frame first, then decide whether to spend this one.
      if (asleep.current) {
        if (now < wakeAt.current) return;
        asleep.current = false;
      }
      const budget = frameBudget.current;
      if (budget && now - lastRender.current < budget) return;
      lastRender.current = now;
      draw(now);
    },
    [draw],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    if (!ctx || !host) return;

    /**
     * Only prefers-reduced-motion freezes the cloud. HeroModel also freezes on
     * touch, where a permanent rAF is a battery cost with no pointer to
     * answer — but that model is 5,087 members and this is ~1,700 points with
     * no pointer term in its rotation, so the turn and the sweep are cheap
     * enough to keep once capped. The scatter is what goes without a cursor.
     */
    still.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    turning.current = turn;
    asleep.current = false;
    interactive.current =
      !still.current && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    frameBudget.current = interactive.current ? 0 : IDLE_FRAME_MS;

    const spec: CloudSpec = glyphs[glyph];
    const styles = getComputedStyle(canvas);
    const token = (name: string) => {
      const v = styles.getPropertyValue(name).trim();
      const m = v.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
      return m ? `${m[1]},${m[2]},${m[3]}` : "216,167,106";
    };
    // A literal rgb wins over a theme token: a vendor icon *is* its colours,
    // and resolving them through the site palette would make it another logo.
    const resolve = (c: {
      token?: string;
      rgb?: string;
      vivid?: { s: number; l: number };
      lift?: { s: number; l: number };
    }) => {
      const base = c.rgb ?? (c.token ? token(c.token) : "216,167,106");
      if (c.lift) return lift(base, c.lift.s, c.lift.l);
      return c.vivid ? vivid(base, c.vivid.s, c.vivid.l) : base;
    };

    /**
     * Everything the renderer needs from the spec, as one closure.
     *
     * Grouped so a glyph change can hold it back: during a morph it runs at
     * the halfway mark instead of immediately, so the colours arrive with the
     * new shape rather than repainting the old one mid-flight.
     */
    const applyStyle = () => {
      inks.current = spec.channels.map(resolve);
      radii.current = spec.channels.map((c) => c.radius);
      alphas.current = spec.channels.map((c) => c.alpha);
      sweepFromChannel.current = spec.sweep === "channel";
      inkSweep.current =
        spec.sweep && spec.sweep !== "channel" ? resolve(spec.sweep) : token("--amber-rgb");
      /**
       * The band as the channel's own colour at full chroma. Brightness is the
       * double fill's job, not this one's — see beamOf.
       */
      inkLit.current = inks.current.map(beamOf);
      lineSpec.current = spec.channels.map((c) => c.line ?? null);
      square.current = spec.dot === "square";
      rock.current = spec.rock ?? null;
      sphere.current = spec.sphere ?? 0;
      ambient.current = wantAmbient ? AMBIENT : (spec.ambient ?? null);
      launchK.current = spec.throw?.launch ?? LAUNCH;
      maxV0.current = spec.throw?.maxV0 ?? MAX_V0;
      hitR2.current = (spec.throw?.hitR ?? HIT_R) ** 2;
      hasLines.current = spec.channels.some((c) => !!c.line);
      maxLineWidth.current = Math.max(1, ...spec.channels.map((c) => c.line?.width ?? 0));
      // Widest ink at any single point: the sweep halo is the largest of them.
      clearPad.current =
        Math.ceil(
          Math.max(
            maxLineWidth.current * 1.3,
            ...spec.channels.map((c) => c.radius),
            ((spec.sweep && spec.sweep !== "channel" ? spec.sweep.radius : 1.75) ?? 1.75) * 1.5,
          ),
        ) + 3;

      const dS: string[] = [];
      const lS: string[] = [];
      for (let ch = 0; ch < inks.current.length; ch += 1) {
        const ink = inks.current[ch];
        const ln = lineSpec.current[ch];
        for (let b = 0; b < BANDS; b += 1) {
          dS[ch * BANDS + b] = `rgba(${ink},${alphas.current[ch] * depthA.current[b]})`;
          lS[ch * BANDS + b] = ln ? `rgba(${ink},${ln.alpha * depthA.current[b]})` : "";
        }
      }
      dotStyle.current = dS;
      lineStyle.current = lS;
      litHalo.current = inks.current.map((_, ch) =>
        sweepFromChannel.current
          ? `rgba(${inkLit.current[ch]},0.14)`
          : `rgba(${inkSweep.current},0.14)`,
      );
      whiteStyle.current = depthA.current.map((a) => `rgba(255,255,255,${a})`);
      litCore.current = inks.current.map((_, ch) =>
        sweepFromChannel.current
          ? `rgba(${inkLit.current[ch]},0.9)`
          : `rgba(${inkSweep.current},0.9)`,
      );
    };

    depthR.current = spec.depth?.r ?? DEPTH_R;
    depthA.current = spec.depth?.a ?? DEPTH_A;
    ctx.lineCap = "round";

    /**
     * Geometry may arrive later. Most glyphs are generated synchronously, but
     * a surveyed model has to be fetched, and the section must render without
     * it rather than block on it — so the cloud is adopted whenever it lands
     * and the loop only starts once there is something to draw.
     */
    let cancelled = false;
    let visible = false;

    const adopt = (pts: Pt[]) => {
      if (cancelled) return;
      const n = pts.length;
      // Flatten once, here, so the draw loop never walks an object array.
      const xyz = new Float32Array(n * 3);
      const chArr = new Uint8Array(n);
      const linkArr = new Uint8Array(n);
      let zLo = Infinity;
      let zHi = -Infinity;
      for (let i = 0, j = 0; i < n; i += 1, j += 3) {
        const pt = pts[i];
        xyz[j] = pt.x;
        xyz[j + 1] = pt.y;
        xyz[j + 2] = pt.z;
        if (pt.z < zLo) zLo = pt.z;
        if (pt.z > zHi) zHi = pt.z;
        chArr[i] = pt.c ?? 0;
        linkArr[i] = pt.link ?? 0;
      }
      wipeLo.current = n ? Math.min(WIPE_LO, zLo - 0.45) : WIPE_LO;
      wipeHi.current = n ? Math.max(WIPE_HI, zHi + 0.45) : WIPE_HI;
      const prev = cloud.current;
      if (prev.n === n && n > 0) {
        // Same point count: travel to it rather than cutting. The offset and
        // velocity arrays are already the right size, so a scatter in flight
        // survives the transition instead of being dropped.
        morphTo.current = { xyz, ch: chArr };
        asleep.current = false;
        morphStart.current = performance.now();
        pendingStyle.current = applyStyle;
      } else {
        applyStyle();
        morphTo.current = null;
        pendingStyle.current = null;
        cloud.current = { xyz, ch: chArr, link: linkArr, n };
        offX.current = new Float32Array(n);
        offY.current = new Float32Array(n);
        velX.current = new Float32Array(n);
        velY.current = new Float32Array(n);
        // First pass gets the same beat a post-morph one does.
        beamAt.current = performance.now() + PAUSE_MS;
        cycled.current = false;
      }
      draw(performance.now());
      if (visible) start();
    };

    const measure = () => {
      const r = canvas.getBoundingClientRect();
      rect.current = { left: r.left, top: r.top, width: r.width, height: r.height };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const box = host.getBoundingClientRect();
      const width = box.width + BLEED * 2;
      const height = box.height + BLEED * 2;
      size.current = { w: width, h: height, hostW: box.width, hostH: box.height };
      // Only the backing store is set here. The CSS size is declared on the
      // element so the canvas is the right size in the very first frame —
      // sizing it from JS let it paint once at the default 300x150 and then
      // jump, which Chrome scores as layout shift. On the hero that measured
      // CLS 0.402 against 0 for the wireframe, and was the whole of a 19-point
      // desktop performance gap.
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Setting canvas.width already wiped it, and the stored rect belongs to
      // the old box — clear everything next frame rather than trust it.
      dirty.current = { x0: 0, y0: 0, x1: width, y1: height, all: true };
      asleep.current = false;
      measure();
      draw(performance.now());
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    function start() {
      if (live.current || !cloud.current.n) return;
      live.current = true;
      lastTime.current = 0;
      lastRender.current = 0;
      if (still.current) {
        draw(0);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    }
    function stop() {
      live.current = false;
      cancelAnimationFrame(raf.current);
    }

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "80px" },
    );
    io.observe(host);

    // resize() has already run, so the host box is known and the builder can
    // size its cloud to the area it has to fill.
    const built = stages?.length
      ? null
      : spec.build({ hostW: size.current.hostW, hostH: size.current.hostH });
    if (built === null) {
      /* scroll mode already adopted stage zero */
    } else if (built instanceof Promise) {
      // No cloud, no section-breaking failure: the hero stands on its own.
      built.then(adopt).catch(() => {});
    } else {
      adopt(built);
    }

    /**
     * Scroll mode: build every stage up front and find the track to measure
     * against. All stages are generated synchronously — a stage that had to be
     * fetched would arrive mid-scroll and jump.
     */
    dirSign.current = getComputedStyle(canvas).direction === "rtl" ? -1 : 1;

    const track = stages?.length
      ? (canvas.closest("[data-cloud-track]") as HTMLElement | null)
      : null;
    if (stages?.length) {
      const flat: Float32Array<ArrayBuffer>[] = [];
      let base: Pt[] | null = null;
      for (const name of stages) {
        const built = glyphs[name].build({
          hostW: size.current.hostW,
          hostH: size.current.hostH,
        });
        if (built instanceof Promise) continue;
        if (!base) base = built;
        const a = new Float32Array(built.length * 3);
        for (let i = 0, j = 0; i < built.length; i += 1, j += 3) {
          a[j] = built[i].x;
          a[j + 1] = built[i].y;
          a[j + 2] = built[i].z;
        }
        flat.push(a);
      }
      // Every stage has to be the same length; the blend pairs them by index.
      const n0 = flat.length ? flat[0].length : 0;
      stageXYZ.current = flat.filter((a) => a.length === n0);
      if (base) adopt(base);
    }

    /**
     * Progress is which section is centred, not how far the page is scrolled.
     *
     * A scroll fraction only maps onto stages when every section is the same
     * height. Here the hero is one screen and the panels are three, so a
     * linear fraction drifts: a panel's copy reaches the middle of the screen
     * while the cloud is still holding the previous stage. Interpolating
     * between the sections' own centres pins stage n to section n whatever
     * they measure, and a section can be resized without re-deriving anything.
     *
     * Sections opt in with `data-cloud-stage` rather than being counted by
     * position, because the cloud's own sticky layer has to be a child of the
     * track too and a positional rule would count it as a stage.
     *
     * Falls back to the scrolled-through fraction when the track marks no
     * stages — a bare element that merely crosses the viewport.
     */
    const readScroll = () => {
      const count = stageXYZ.current.length;
      if (!track || count < 2) return;
      const v = window.innerHeight;
      const mid = v / 2;
      const secs = Array.from(track.querySelectorAll("[data-cloud-stage]"));

      if (secs.length >= 2) {
        // Signed distance from the viewport's middle to each section's middle.
        const d = secs.map((el) => {
          const b = el.getBoundingClientRect();
          return b.top + b.height / 2 - mid;
        });
        const n = d.length;
        let p: number;
        if (d[0] >= 0) p = 0;
        else if (d[n - 1] <= 0) p = n - 1;
        else {
          p = n - 1;
          for (let i = 0; i < n - 1; i += 1) {
            if (d[i] <= 0 && d[i + 1] >= 0) {
              const gap = d[i + 1] - d[i];
              p = i + (gap !== 0 ? -d[i] / gap : 0);
              break;
            }
          }
        }
        scrollAt.current = Math.max(0, Math.min(count - 1, p));
        return;
      }

      const r = track.getBoundingClientRect();
      const span = r.height - v;
      const p = span > 0 ? -r.top / span : 0;
      scrollAt.current = Math.max(0, Math.min(1, p)) * (count - 1);
    };
    readScroll();

    // The rect only moves on scroll and resize, so it is cached rather than
    // read in the loop — a getBoundingClientRect per frame is a forced layout,
    // which is the one thing that would make this expensive.
    const onScroll = () => {
      measure();
      readScroll();
    };

    const onMove = (e: PointerEvent) => {
      const r = rect.current;
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const p = ptr.current;
      const q = prev.current;

      // Far outside the canvas in every direction: park the cursor rather than
      // tracking it, so re-entry does not sweep one giant segment across the
      // whole cloud and throw every point at once.
      const outside =
        x < -HIT_R * 3 || y < -HIT_R * 3 || x > r.width + HIT_R * 3 || y > r.height + HIT_R * 3;
      if (outside) {
        p.has = false;
        q.has = false;
        return;
      }

      if (!p.has) {
        // First position after being away is an anchor, not a stroke.
        q.x = x;
        q.y = y;
        q.has = true;
      }
      p.x = x;
      p.y = y;
      p.has = true;
      p.moved = true;
      asleep.current = false;
    };

    if (interactive.current) {
      // Listening on the window rather than the canvas: the canvas is
      // pointer-events:none so it receives nothing, and a stroke that starts
      // just outside should still catch the points near that edge.
      window.addEventListener("pointermove", onMove, { passive: true });
    }
    // Scroll is tracked regardless of pointer: it positions the cloud in
    // stage mode, not just the cached rect.
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [glyph, wantAmbient, turn, stages, stagePos, stageArc, draw, tick]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        top: -BLEED,
        left: -BLEED,
        width: `calc(100% + ${BLEED * 2}px)`,
        height: `calc(100% + ${BLEED * 2}px)`,
      }}
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    />
  );
}
