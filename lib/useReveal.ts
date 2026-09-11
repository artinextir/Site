"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals an element (and, when `stagger` is set, its direct children in
 * sequence) whenever it crosses into view, and puts it back when it leaves —
 * so scrolling up and down replays the entrance rather than firing once.
 *
 * The stagger delay is written as `--reveal-delay` and then cleared once the
 * run has finished. That matters: `.reveal-in` sets `transition-delay` from
 * that property, so leaving it in place made every later card in a grid lag
 * its own hover transitions by its stagger offset.
 *
 * Elements ship with the `reveal` class already applied, so the observer only
 * ever has to turn motion on. A `<noscript>` rule in the layout neutralises
 * `reveal` when JS is unavailable, and prefers-reduced-motion neutralises it
 * in CSS regardless of what this hook does.
 */
export function useReveal<T extends HTMLElement>(stagger = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: HTMLElement[] = stagger
      ? Array.from(el.children).filter((c): c is HTMLElement => c instanceof HTMLElement)
      : [el];

    let settle: ReturnType<typeof setTimeout> | undefined;

    const show = () => {
      targets.forEach((t, i) => {
        t.style.setProperty("--reveal-delay", `${i * stagger}ms`);
        t.classList.add("reveal-in");
      });
      clearTimeout(settle);
      settle = setTimeout(
        () => targets.forEach((t) => t.style.setProperty("--reveal-delay", "0ms")),
        targets.length * stagger + 700,
      );
    };

    const hide = () => {
      clearTimeout(settle);
      targets.forEach((t) => t.classList.remove("reveal-in"));
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show();
          else hide();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => {
      clearTimeout(settle);
      io.disconnect();
    };
  }, [stagger]);

  return ref;
}
