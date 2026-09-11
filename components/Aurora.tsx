"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Two slow-drifting fields of colour — one sage, one amber — behind a
 * section. They breathe on their own and lean toward the cursor, heavily
 * damped, so the movement registers as atmosphere rather than as a thing
 * following your mouse.
 *
 * Everything here is a `transform` on two elements, which the compositor
 * handles off the main thread. There is deliberately no `filter: blur()`:
 * blurring a viewport-sized layer every frame is the single most expensive
 * way to get a soft edge, and a radial gradient with a long falloff is
 * already soft. The fields are masked to nothing at the section's top and
 * bottom edges so the band dissolves into the page instead of ending on a
 * seam you can see while scrolling past it.
 */
export function Aurora() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pending = useRef<{ x: number; y: number } | null>(null);

  const flush = useCallback(() => {
    frame.current = 0;
    const el = ref.current;
    const p = pending.current;
    if (!el || !p) return;
    const r = el.getBoundingClientRect();
    // -1..1 either side of centre; the CSS turns that into a few percent of
    // travel, which is all the lean this needs.
    el.style.setProperty("--lean-x", ((p.x - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--lean-y", ((p.y - r.top) / r.height - 0.5).toFixed(3));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const host = el.parentElement;
    if (!host) return;

    // The drift only runs while the band is on screen; off-screen it is not
    // just invisible, it is not being composited either.
    const io = new IntersectionObserver(([e]) => {
      el.dataset.aurora = e.isIntersecting ? "on" : "off";
    });
    io.observe(host);

    const onMove = (e: PointerEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      if (!frame.current) frame.current = requestAnimationFrame(flush);
    };
    const onLeave = () => {
      el.style.setProperty("--lean-x", "0");
      el.style.setProperty("--lean-y", "0");
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [flush]);

  return (
    <div ref={ref} className="aurora pointer-events-none absolute inset-0" aria-hidden="true">
      <span className="aurora-field aurora-sage" />
      <span className="aurora-field aurora-amber" />
    </div>
  );
}
