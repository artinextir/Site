"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * The real E2R output — 5,087 structural members from Hero Building.dxf,
 * reduced to centrelines by scripts/extract_hero_model.py and drawn as a
 * wireframe.
 *
 * No 3D library. Projecting a line list is a dot product and a divide, so
 * three.js would be ~150KB to do arithmetic the browser can already do. The
 * whole frame is two Path2D objects rebuilt per tick and stroked twice, which
 * is a couple of milliseconds even with five thousand members.
 *
 * The tower turns on its own, slowly. The pointer leans it a few degrees and
 * lets go — it steers the view, it does not take hold of it. An amber band
 * climbs the height on a long cycle, lighting whatever it passes, so members
 * fade out and back in the way the tool builds them.
 */

type Model = { columns: number[]; beams: number[]; height: number };

const SRC = "/hero-model.json";
/** Every column and every fourth beam — 9KB gzipped against 26KB. */
const SRC_LITE = "/hero-model-lite.json";

/** Radians per millisecond — one turn a little over the minute. */
const SPIN = 0.0001;
/**
 * Half the yaw the cursor commands: lean runs -1..1, so the full sweep from
 * one edge of the window to the other is twice this. 1.75 rad puts that at
 * about 200 degrees — most of the way around, deliberately.
 */
const LEAN_YAW = 1.75;
const TILT = 0.58;
/** Seconds for the build band to travel the full height. */
const SWEEP_PERIOD = 11000;

/**
 * The palette tokens are deliberately desaturated — they are text and hairline
 * colours on a near-black ground. Drawn as 0.75px wireframe strokes they wash
 * out to grey, so the model takes the same hues pushed toward their saturated
 * form. Derived from the tokens rather than hardcoded, so the wireframe still
 * moves if the palette does.
 */
function vivid(rgb: string, saturation: number, lightness: number) {
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

export function HeroModel({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const model = useRef<Model | null>(null);
  const raf = useRef(0);
  const live = useRef(false);
  const lean = useRef({ x: 0, y: 0 });
  const leanTarget = useRef({ x: 0, y: 0 });
  const size = useRef({ w: 0, h: 0 });
  /** One still frame instead of a live orbit, for prefers-reduced-motion. */
  const still = useRef(false);
  /** A touch device: it still turns, but on the decimated model and at half
      the frame rate, and without the pointer lean there is no cursor to feed.
      The orbit was frozen here until 2026-09-12; a phone showing a dead
      wireframe reads as broken rather than as restraint. */
  const coarse = useRef(false);
  /** Minimum gap between drawn frames: every frame on a desktop, ~30fps on a
      phone, where the battery matters more than the extra smoothness. */
  const frameGap = useRef(0);
  const lastFrame = useRef(0);

  const palette = useRef({
    sage: "158,193,172",
    slate: "143,165,188",
    amber: "216,167,106",
  });

  const draw = useCallback((now: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const m = model.current;
    if (!canvas || !ctx || !m) return;

    const { w: W, h: H } = size.current;
    if (!W || !H) return;

    ctx.clearRect(0, 0, W, H);

    const spin = still.current ? 0.72 : now * SPIN;
    // Orbit convention: the cursor moves the camera, not the model. Push left
    // and you walk around to the model's left, which reads as the frame
    // turning to the right.
    const yaw = spin + lean.current.x * LEAN_YAW;
    const pitch = TILT + lean.current.y * 0.1;

    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);

    // The model is normalised to ~2 units wide; fit its height to the canvas.
    const scale = (H * 0.94) / m.height;
    const ox = W / 2;
    const oz = H / 2;

    /** World XYZ to screen, in one step: yaw about Z, then tip toward camera.
     *  Depth is *added* before the flip, which puts the camera above the
     *  model looking down. Subtracting it — the earlier version — put the
     *  camera underneath, so the frame read as an upturned soffit whenever
     *  the yaw brought a corner forward. */
    const px = (x: number, y: number) => (x * cy - y * sy) * scale + ox;
    const py = (x: number, y: number, z: number) =>
      oz - (z * cp + (x * sy + y * cy) * sp) * scale;

    const band = still.current ? 2 : ((now % SWEEP_PERIOD) / SWEEP_PERIOD) * 2.4 - 1.2;
    const half = m.height / 2;

    /**
     * Depth cueing, and the reason for it: a flat wireframe is a Necker cube.
     * With every member drawn at one weight there is no cue for which face is
     * nearer, so the eye picks an interpretation and periodically swaps it —
     * which is what "sometimes it looks upside down" was. The projection was
     * never wrong. Splitting each colour into three depth bands and drawing
     * far to near settles the ambiguity: what is closer is heavier.
     */
    const stroke = (flat: number[], colour: string, alpha: number, width: number) => {
      const far = new Path2D();
      const mid = new Path2D();
      const near = new Path2D();
      const lit = new Path2D();
      let anyLit = false;

      for (let i = 0; i < flat.length; i += 6) {
        const x0 = flat[i];
        const y0 = flat[i + 1];
        const z0 = flat[i + 2];
        const x1 = flat[i + 3];
        const y1 = flat[i + 4];
        const z1 = flat[i + 5];

        const ax = px(x0, y0);
        const ay = py(x0, y0, z0);
        const bx = px(x1, y1);
        const by = py(x1, y1, z1);

        // Members inside the travelling band get drawn again, brighter.
        const midZ = (z0 + z1) / 2 / half;
        if (Math.abs(midZ - band) < 0.16) {
          lit.moveTo(ax, ay);
          lit.lineTo(bx, by);
          anyLit = true;
        }

        // Distance along the view axis. Larger is further from the camera.
        const depth = ((x0 + x1) / 2) * sy + ((y0 + y1) / 2) * cy;
        const band3 = depth > 0.3 ? far : depth > -0.3 ? mid : near;
        band3.moveTo(ax, ay);
        band3.lineTo(bx, by);
      }

      const pass = (path: Path2D, a: number, w: number) => {
        ctx.lineWidth = w;
        ctx.strokeStyle = `rgba(${colour},${Math.min(1, a)})`;
        ctx.stroke(path);
      };

      pass(far, alpha * 0.42, width * 0.8);
      pass(mid, alpha * 0.78, width);
      pass(near, alpha * 1.3, width * 1.2);

      if (anyLit) {
        // Two passes, not one: a wide soft halo under a narrow solid core.
        // That reads as light coming off the member. A single heavier stroke
        // just reads as a thicker line and disappears into the frame.
        ctx.lineWidth = width * 3.4;
        ctx.strokeStyle = `rgba(${palette.current.amber},0.2)`;
        ctx.stroke(lit);

        ctx.lineWidth = width * 1.6;
        ctx.strokeStyle = `rgba(${palette.current.amber},1)`;
        ctx.stroke(lit);
      }
    };

    stroke(m.beams, palette.current.slate, 0.36, 0.8);
    stroke(m.columns, palette.current.sage, 1, 1.45);
  }, []);

  const tick = useCallback(
    (now: number) => {
      if (now - lastFrame.current >= frameGap.current) {
        lastFrame.current = now;
        lean.current.x += (leanTarget.current.x - lean.current.x) * 0.045;
        lean.current.y += (leanTarget.current.y - lean.current.y) * 0.045;
        draw(now);
      }
      raf.current = requestAnimationFrame(tick);
    },
    [draw],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    if (!ctx || !host) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    still.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    coarse.current = !fine;
    frameGap.current = fine ? 0 : 33;

    const styles = getComputedStyle(canvas);
    const channels = (name: string, fallback: string) => {
      const v = styles.getPropertyValue(name).trim();
      const m = v.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
      return m ? `${m[1]},${m[2]},${m[3]}` : fallback;
    };
    palette.current = {
      sage: vivid(channels("--sage-rgb", "158,193,172"), 0.5, 1.1),
      slate: vivid(channels("--slate-rgb", "143,165,188"), 0.42, 1.05),
      amber: vivid(channels("--amber-rgb", "216,167,106"), 0.95, 1.22),
    };

    /* Assigned once the loader exists below; `resize` runs before that. */
    let scheduleLoad: () => void = () => {};

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = host.getBoundingClientRect();
      size.current = { w: width, h: height };
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      if (model.current) draw(performance.now());
      // A band that was hidden at load can gain a box on rotate or resize.
      else scheduleLoad();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const start = () => {
      if (live.current || !model.current) return;
      live.current = true;
      if (still.current) {
        draw(0);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      live.current = false;
      cancelAnimationFrame(raf.current);
    };

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
      rootMargin: "80px",
    });
    io.observe(host);

    /* The hero renders its art twice: a short band for phones and a full-bleed
       copy from lg up, one of which is always display:none. Both used to fetch
       and parse the model — 188KB of JSON, twice per page, for a canvas with no
       box. Nothing starts here until the host actually has one. */
    const hasBox = () => {
      const r = host.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };

    let cancelled = false;
    // The geometry is decoration, and 188KB of it. Waiting for an idle frame
    // keeps the fetch and the JSON parse out of the critical path entirely.
    // A phone gets the decimated frame. The band is ~300px tall there, where
    // the full member list reads as noise, and the full file lands late
    // enough over a slow connection to show up as a Speed Index penalty.
    const src = still.current || coarse.current ? SRC_LITE : SRC;
    const load = () =>
      fetch(src, { priority: "low" } as RequestInit)
        .then((r) => r.json())
        .then((data: Model) => {
          if (cancelled) return;
          model.current = data;
          start();
        })
        .catch(() => {
          /* No model, no wireframe — the hero still stands on its own. */
        });

    // lib.dom declares requestIdleCallback unconditionally, so the detection
    // has to go through typeof — `in` and truthiness both get narrowed away.
    const supportsIdle = typeof window.requestIdleCallback === "function";
    let idle = 0;
    scheduleLoad = () => {
      if (idle || cancelled || model.current || !hasBox()) return;
      idle = supportsIdle
        ? window.requestIdleCallback(load, { timeout: 2500 })
        : window.setTimeout(load, 600);
    };
    scheduleLoad();

    const onMove = (e: PointerEvent) => {
      leanTarget.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    // Only the visible copy needs the cursor: the hidden band has no box.
    if (!still.current && fine && hasBox()) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelled = true;
      if (idle) {
        if (supportsIdle) window.cancelIdleCallback(idle);
        else clearTimeout(idle);
      }
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [draw, tick]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
