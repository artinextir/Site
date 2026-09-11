"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * The two curtain-wall units, drawn as outlines and turning together.
 *
 * Same extraction idea as the hero, different problem: these DXFs are solid
 * models, ~2,000 polyface meshes each. `scripts/extract_family_models.py`
 * keeps only boundary and crease edges, so what arrives here is roughly a
 * thousand lines per unit rather than thirty thousand — a drawing, not a
 * tessellation.
 *
 * Both share one rotation on purpose. The point of the section is that the
 * frame is identical and only the infill differs, and that only reads if the
 * two are at the same angle at the same moment.
 */

type Model = Record<string, number[]>;
type Payload = { models: Record<string, Model> };

const SRC = "/family-models.json";
const SPIN = 0.00016;
const TILT = 0.52;
/**
 * The callout ring. It follows one fixed corner of the glazed unit rather than
 * whichever vertex happens to be lowest-and-outermost this frame — recomputing
 * the extreme each frame made it hop between corners as the model turned.
 * The corner is chosen once, in model space, and simply projected after that.
 */
const RING = { model: "glass", radius: 15 };

export function FamilyModels({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const data = useRef<Payload | null>(null);
  const raf = useRef(0);
  const live = useRef(false);
  const size = useRef({ w: 0, h: 0 });
  const still = useRef(false);
  /**
   * The spin waits for the visitor's first input. Until then the page is
   * still loading and the main thread belongs to that; a still frame says the
   * same thing. `t0` makes the turn start from the still pose, not jump to it.
   */
  const engaged = useRef(false);
  const t0 = useRef(0);
  /** Persian mirrors the layout: the detail sits on the other side, so the
      ring moves to the corner nearest it and the leader runs the other way. */
  const rtl = useRef(false);
  /** The ring's corner in model space, resolved once when the geometry lands. */
  const corner = useRef<[number, number, number] | null>(null);

  const palette = useRef({ sage: "158,193,172", slate: "143,165,188", amber: "216,167,106" });

  const draw = useCallback((now: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const payload = data.current;
    if (!canvas || !ctx || !payload) return;

    const { w: W, h: H } = size.current;
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);

    const all = Object.keys(payload.models);

    /**
     * A tall cell means the phone layout, where the two units stack instead of
     * sitting side by side. Aspect is the honest signal here — the canvas is
     * the only thing that knows how much room it actually got.
     */
    const stacked = H > W;

    // Stacked, the glazed unit goes last so it sits directly above the detail
    // the ring points into. Side by side, it goes first, nearest the copy.
    const names = stacked ? [...all].reverse() : all;
    const yaw = still.current || !engaged.current ? 0.62 : 0.62 + (now - t0.current) * SPIN;
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(TILT);
    const sp = Math.sin(TILT);

    const cellW = stacked ? W : W / names.length;
    const cellH = stacked ? H / names.length : H;
    const scale = stacked
      ? Math.min(cellW * 0.42, (cellH - 74) * 0.45)
      : Math.min(cellW * 0.58, (cellH - 66) * 0.43);

    // Where the ring goes, worked out before anything is drawn: the leader
    // has to be laid down first so the second unit passes over it rather than
    // being crossed by it, and the ring has to sit on top of both.
    const place = (i: number) => {
      const ox = stacked ? W / 2 : cellW * (i + 0.5);
      const oz = stacked ? cellH * (i + 0.5) - 4 : H / 2 + 14;
      return {
        px: (x: number, y: number) => (x * cy - y * sy) * scale + ox,
        py: (x: number, y: number, z: number) =>
          oz - (z * cp + (x * sy + y * cy) * sp) * scale,
      };
    };

    let ringAt: { x: number; y: number } | null = null;
    const ringIndex = names.indexOf(RING.model);
    if (ringIndex >= 0 && corner.current) {
      const { px, py } = place(ringIndex);
      const [cxm, cym, czm] = corner.current;
      ringAt = { x: px(cxm, cym), y: py(cxm, cym, czm) };
    }

    if (ringAt) {
      // Stacked, the detail sits underneath, so the leader drops rather than
      // running sideways into the edge of the screen.
      ctx.beginPath();
      if (stacked) {
        ctx.moveTo(ringAt.x, ringAt.y + RING.radius);
        ctx.lineTo(ringAt.x, H - 2);
      } else {
        const dir = rtl.current ? -1 : 1;
        ctx.moveTo(ringAt.x + RING.radius * dir, ringAt.y);
        ctx.lineTo(rtl.current ? 2 : W - 2, ringAt.y);
      }
      ctx.strokeStyle = `rgba(${palette.current.amber},0.4)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    names.forEach((name, i) => {
      const { px, py } = place(i);
      const model = payload.models[name];
      // Glazing behind, frame in front — the frame is the subject.
      for (const [role, flat] of [
        ["glazing", model.glazing ?? []],
        ["frame", model.frame ?? []],
      ] as const) {
        const path = new Path2D();
        for (let k = 0; k < flat.length; k += 6) {
          path.moveTo(px(flat[k], flat[k + 1]), py(flat[k], flat[k + 1], flat[k + 2]));
          path.lineTo(px(flat[k + 3], flat[k + 4]), py(flat[k + 3], flat[k + 4], flat[k + 5]));
        }
        ctx.strokeStyle =
          role === "frame"
            ? `rgba(${palette.current.sage},0.85)`
            : `rgba(${palette.current.slate},0.4)`;
        ctx.lineWidth = role === "frame" ? 1.15 : 0.8;
        ctx.stroke(path);
      }
    });

    if (ringAt) {
      const { x, y } = ringAt;
      const r = RING.radius;

      // Hatched, the way a detail callout is marked up on a drawing.
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = `rgba(${palette.current.amber},0.22)`;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      for (let o = -r * 2; o <= r * 2; o += 5) {
        ctx.moveTo(x + o, y - r);
        ctx.lineTo(x + o + r * 2, y + r);
      }
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = `rgba(${palette.current.amber},0.9)`;
      ctx.lineWidth = 1.15;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, []);

  const tick = useCallback(
    (now: number) => {
      draw(now);
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
    still.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !fine;
    rtl.current = getComputedStyle(canvas).direction === "rtl";

    const styles = getComputedStyle(canvas);
    const ch = (name: string, fallback: string) => {
      const m = styles.getPropertyValue(name).trim().match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
      return m ? `${m[1]},${m[2]},${m[3]}` : fallback;
    };
    palette.current = {
      sage: ch("--sage-rgb", "158,193,172"),
      slate: ch("--slate-rgb", "143,165,188"),
      amber: ch("--amber-rgb", "216,167,106"),
    };

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
      if (data.current) draw(performance.now());
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const start = () => {
      if (live.current || !data.current) return;
      live.current = true;
      if (still.current || !engaged.current) {
        draw(0);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      live.current = false;
      cancelAnimationFrame(raf.current);
    };

    const INPUTS = ["pointermove", "wheel", "scroll", "keydown"] as const;
    const engage = () => {
      if (engaged.current) return;
      engaged.current = true;
      t0.current = performance.now();
      for (const ev of INPUTS) window.removeEventListener(ev, engage);
      if (live.current && !still.current) raf.current = requestAnimationFrame(tick);
    };
    for (const ev of INPUTS) window.addEventListener(ev, engage, { passive: true });

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
      rootMargin: "100px",
    });
    io.observe(host);

    let cancelled = false;
    const load = () =>
      fetch(SRC)
        .then((r) => r.json())
        .then((json: Payload) => {
          if (cancelled) return;
          data.current = json;

          // Bottom, and outermost on the side the detail sits: low z, and x
          // pushed toward the reading edge. One vertex, chosen once.
          const frame = json.models[RING.model]?.frame ?? [];
          const sign = rtl.current ? -1 : 1;
          let best = -Infinity;
          for (let k = 0; k < frame.length; k += 3) {
            const score = frame[k] * sign - frame[k + 2] * 3;
            if (score > best) {
              best = score;
              corner.current = [frame[k], frame[k + 1], frame[k + 2]];
            }
          }

          start();
        })
        .catch(() => {
          /* No geometry, no drawing — the section still reads from its copy. */
        });
    const idle: number =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(load, { timeout: 3500 })
        : (setTimeout(load, 900) as unknown as number);

    return () => {
      cancelled = true;
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle);
      else clearTimeout(idle);
      stop();
      for (const ev of INPUTS) window.removeEventListener(ev, engage);
      ro.disconnect();
      io.disconnect();
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
