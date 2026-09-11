"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

/**
 * A panel that tips toward the cursor and carries a soft light where the
 * cursor is. Both are driven by CSS custom properties written from a single
 * rAF-throttled pointer handler, so hovering a row of these costs one frame's
 * worth of work regardless of how many are on screen.
 *
 * Under prefers-reduced-motion, or on a coarse pointer where there is no
 * hover to speak of, the listeners never attach and the card renders flat.
 */
export function TiltCard({
  children,
  className = "",
  /** Applied to the inner, parallaxed layer — use it to lay content out. */
  innerClassName = "",
  /** Max degrees of tip at the far corners. */
  intensity = 6,
  /** How far the panel lifts toward the viewer, in px. */
  lift = 10,
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
  lift?: number;
  as?: "article" | "div" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pending = useRef<{ x: number; y: number } | null>(null);

  const flush = useCallback(() => {
    frame.current = 0;
    const el = ref.current;
    const p = pending.current;
    if (!el || !p) return;

    const r = el.getBoundingClientRect();
    const px = (p.x - r.left) / r.width;
    const py = (p.y - r.top) / r.height;

    el.style.setProperty("--tilt-x", `${(0.5 - py) * 2 * intensity}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 2 * intensity}deg`);
    el.style.setProperty("--spot-x", `${(px * 100).toFixed(2)}%`);
    el.style.setProperty("--spot-y", `${(py * 100).toFixed(2)}%`);
  }, [intensity]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    el.dataset.tilt = "on";

    const onMove = (e: PointerEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      if (!frame.current) frame.current = requestAnimationFrame(flush);
    };
    const onLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = 0;
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [flush]);

  return (
    <Tag
      ref={ref as never}
      className={`tilt-card ${className}`}
      style={{ ["--tilt-lift" as string]: `${lift}px` }}
    >
      <span className="tilt-spot" aria-hidden="true" />
      <span className={`tilt-inner ${innerClassName}`}>{children}</span>
    </Tag>
  );
}
