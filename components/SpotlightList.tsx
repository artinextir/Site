"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

/**
 * Tracks one cursor across a whole list. It paints a wide sheen where the
 * cursor is and flags the wrapper while the pointer is inside, which lets CSS
 * dim every row the reader is not on. One rAF and two custom properties serve
 * however many rows are in the list.
 *
 * Silent under prefers-reduced-motion and on coarse pointers.
 */
export function SpotlightList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
    el.style.setProperty("--spot-x", `${p.x - r.left}px`);
    el.style.setProperty("--spot-y", `${p.y - r.top}px`);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    el.dataset.spotlight = "on";

    const onMove = (e: PointerEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      if (!frame.current) frame.current = requestAnimationFrame(flush);
    };
    const onEnter = () => {
      el.dataset.hovering = "true";
    };
    const onLeave = () => {
      delete el.dataset.hovering;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [flush]);

  return (
    <div ref={ref} className={`spotlight-list relative ${className}`}>
      <span className="spotlight-sheen" aria-hidden="true" />
      {children}
    </div>
  );
}
