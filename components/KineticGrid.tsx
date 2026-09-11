"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * A drafting grid that reacts to the cursor: lines bend away from it, the
 * intersections nearest it warm to sage, and a click sends one ring out.
 *
 * Scoped to its own section rather than the viewport — it is a background for
 * one band of the page, not a site-wide effect. It draws nothing until the
 * section is on screen, and nothing at all under prefers-reduced-motion or on
 * a coarse pointer, where a static grid is both honest and cheaper.
 */

type Point = { x: number; y: number };
type Ripple = { x: number; y: number; radius: number; opacity: number; born: number };

const CELL = 64;
const INFLUENCE = 340;
const MAX_WARP = 8;
const LERP = 0.07;

/** Edge columns and rows stay pinned so the grid never peels off its frame. */
const EDGE_MARGIN = 1.6;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** 0..1 in, eased 0..1 out — keeps the falloff from reading as a hard circle. */
function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function rgba(c: [number, number, number], a: number) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;
}

/** "#9ec1ac" | "rgb(158, 193, 172)" -> [158,193,172] */
function parseColor(value: string, fallback: [number, number, number]): [number, number, number] {
  const hex = value.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const rgbMatch = value.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  if (rgbMatch) return [+rgbMatch[1], +rgbMatch[2], +rgbMatch[3]];
  return fallback;
}

export function KineticGrid({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef<Point>({ x: -9999, y: -9999 });
  const target = useRef<Point>({ x: -9999, y: -9999 });
  const ripples = useRef<Ripple[]>([]);
  const size = useRef({ w: 0, h: 0 });
  const raf = useRef(0);
  const live = useRef(false);
  /** Forces one more paint after the cursor settles, so the last frame lands. */
  const dirty = useRef(true);

  const palette = useRef({
    line: [46, 52, 66] as [number, number, number],
    sage: [158, 193, 172] as [number, number, number],
  });

  const warp = useCallback(
    (gx: number, gy: number, col: number, row: number, cols: number, rows: number) => {
      const pin =
        Math.min(col / EDGE_MARGIN, (cols - 1 - col) / EDGE_MARGIN, 1) ** 2 *
        Math.min(row / EDGE_MARGIN, (rows - 1 - row) / EDGE_MARGIN, 1) ** 2;

      const dx = gx - mouse.current.x;
      const dy = gy - mouse.current.y;
      const dist = Math.hypot(dx, dy);
      const proximity = Math.max(0, 1 - dist / INFLUENCE) * pin;

      let rx = 0;
      let ry = 0;
      for (const r of ripples.current) {
        const rd = Math.hypot(gx - r.x, gy - r.y);
        const diff = rd - r.radius;
        const band = 60;
        if (Math.abs(diff) < band) {
          const strength = (1 - Math.abs(diff) / band) * r.opacity * 11 * pin;
          const angle = Math.atan2(gy - r.y, gx - r.x);
          const sign = diff < 0 ? 1 : -1;
          rx += Math.cos(angle) * strength * sign;
          ry += Math.sin(angle) * strength * sign;
        }
      }

      if (dist < INFLUENCE && dist > 0 && pin > 0) {
        const t = dist / INFLUENCE;
        const eased = (1 - t) * (1 - t) * Math.min(1, dist / 70);
        const amount = eased * MAX_WARP * pin;
        const angle = Math.atan2(dy, dx);
        return {
          x: gx - Math.cos(angle) * amount + rx,
          y: gy - Math.sin(angle) * amount + ry,
          p: proximity,
        };
      }

      return { x: gx + rx, y: gy + ry, p: proximity };
    },
    [],
  );

  /**
   * Segments are binned by how close to the cursor they are, and each bin is
   * stroked once.
   *
   * The first version set strokeStyle and called stroke() per segment, which
   * at 1366x700 is ~560 draw calls a frame — each one its own state change
   * and raster op. That is what made the section feel heavy on the way in.
   * Six bins covers the same visual gradient in six calls.
   */
  const BINS = 6;

  const draw = useCallback(
    (now: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const { w: W, h: H } = size.current;
      const { line, sage } = palette.current;
      ctx.clearRect(0, 0, W, H);

      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const r = ripples.current[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 340);
        r.opacity = Math.max(0, 1 - age * 1.3);
        if (r.opacity <= 0) ripples.current.splice(i, 1);
      }

      const cols = Math.max(2, Math.ceil(W / CELL)) + 1;
      const rows = Math.max(2, Math.ceil(H / CELL)) + 1;
      const cw = W / (cols - 1);
      const ch = H / (rows - 1);

      const pts: { x: number; y: number; p: number }[][] = [];
      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        for (let col = 0; col < cols; col++) {
          pts[row][col] = warp(col * cw, row * ch, col, row, cols, rows);
        }
      }

      const bins: Path2D[] = [];
      for (let i = 0; i < BINS; i++) bins.push(new Path2D());
      const nodes = new Path2D();
      let anyNode = false;

      const seg = (a: (typeof pts)[0][0], b: (typeof pts)[0][0]) => {
        const t = smoothstep((a.p + b.p) / 2);
        const bin = Math.min(BINS - 1, (t * BINS) | 0);
        bins[bin].moveTo(a.x, a.y);
        bins[bin].lineTo(b.x, b.y);
      };

      for (let row = 0; row < rows; row++)
        for (let col = 0; col < cols - 1; col++) seg(pts[row][col], pts[row][col + 1]);
      for (let col = 0; col < cols; col++)
        for (let row = 0; row < rows - 1; row++) seg(pts[row][col], pts[row + 1][col]);

      for (let i = 0; i < BINS; i++) {
        const t = i / (BINS - 1);
        ctx.strokeStyle =
          i === 0
            ? rgba(line, 0.42)
            : rgba(
                [
                  Math.round(lerp(line[0], sage[0], t)),
                  Math.round(lerp(line[1], sage[1], t)),
                  Math.round(lerp(line[2], sage[2], t)),
                ],
                lerp(0.42, 0.3, t),
              );
        ctx.lineWidth = lerp(0.7, 0.95, t);
        ctx.stroke(bins[i]);
      }

      // Nodes only exist near the cursor, so one path covers all of them.
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const t = smoothstep(p.p);
          if (t < 0.04) continue;
          nodes.moveTo(p.x + lerp(0.8, 1.6, t), p.y);
          nodes.arc(p.x, p.y, lerp(0.8, 1.6, t), 0, Math.PI * 2);
          anyNode = true;
        }
      }
      if (anyNode) {
        ctx.fillStyle = rgba(sage, 0.2);
        ctx.fill(nodes);
      }

      for (const r of ripples.current) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius), 0, Math.PI * 2);
        ctx.strokeStyle = rgba(sage, r.opacity * 0.09);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    },
    [warp],
  );

  /**
   * A settled grid is a still image. Once the cursor has stopped and the
   * ripples have died there is nothing left to animate, so the loop stops
   * painting rather than re-drawing an identical frame sixty times a second.
   */
  const tick = useCallback(
    (now: number) => {
      const m = mouse.current;
      const t = target.current;
      const dx = t.x - m.x;
      const dy = t.y - m.y;
      const moving = Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15;

      if (moving || ripples.current.length || dirty.current) {
        m.x += dx * LERP;
        m.y += dy * LERP;
        draw(now);
        dirty.current = moving || ripples.current.length > 0;
      }

      raf.current = requestAnimationFrame(tick);
    },
    [draw],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced || coarse) return;

    const styles = getComputedStyle(canvas);
    palette.current = {
      line: parseColor(styles.getPropertyValue("--line-2"), [46, 52, 66]),
      sage: parseColor(styles.getPropertyValue("--sage"), [158, 193, 172]),
    };

    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    if (!ctx || !host) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = host.getBoundingClientRect();
      size.current = { w: width, h: height };
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const start = () => {
      if (live.current) return;
      live.current = true;
      raf.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      live.current = false;
      cancelAnimationFrame(raf.current);
    };

    // Off-screen the grid costs nothing — no frames, no listeners doing work.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "120px" },
    );
    io.observe(host);

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      target.current = { x: -9999, y: -9999 };
    };
    const onClick = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      ripples.current.push({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        radius: 0,
        opacity: 1,
        born: performance.now(),
      });
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("click", onClick);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("click", onClick);
    };
  }, [tick]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
