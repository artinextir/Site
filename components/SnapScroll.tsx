"use client";

import { useEffect } from "react";

/**
 * One wheel gesture, one section.
 *
 * The desktop pages snap a section per screen. A notched wheel sends one
 * event per notch and behaves; a free-spinning or high-resolution wheel
 * sends a long stream of them from a single flick, and each one starts the
 * next snap, so the page races through the site. Reported from a visitor's
 * mouse on 2026-09-12.
 *
 * So the wheel drives the snap here instead of the browser: take the first
 * event, scroll to the neighbouring snap point, and swallow the rest of the
 * stream until the scroll settles. Every device then moves one section per
 * gesture.
 *
 * Deliberately narrow. It runs only where the snap itself runs (desktop
 * width, a real pointer), never on the article pages, never over something
 * with its own scrollbar, and never when the next section is further than a
 * screen away â€” a section taller than the viewport has to stay reachable.
 * Keyboard, touch and the scrollbar are untouched.
 */
const SNAP_MEDIA = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
const SNAP_TARGETS = "main > section, [data-cloud-track] section, footer";

/** A wheel that goes quiet for this long has ended its gesture. */
const GESTURE_QUIET_MS = 120;

/* What a runaway wheel looks like: events packed far tighter than a notch.
   A notched wheel sends one or two per detent with a human-sized gap after,
   so it never reaches this and keeps the browser's own snapping. A
   free-spinning or high-resolution wheel sends a steady stream and does. */
const DENSE_EVENTS = 3;
const DENSE_WINDOW_MS = 120;

/* A stream that never lets up is someone holding a scroll rather than
   flicking, so it keeps moving, at a readable section per second. */
const SUSTAINED_MS = 850;

/** Covers the snap animation when the browser has no `scrollend`. */
const FALLBACK_SETTLE_MS = 700;

export function SnapScroll() {
  useEffect(() => {
    const snapMedia = window.matchMedia(SNAP_MEDIA);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let moving = false;
    let lastWheel = 0;
    let releaseTimer = 0;
    let movedAt = 0;
    let recent: number[] = [];

    /** Snap offsets in document order: section tops, plus the footer's end. */
    const snapPoints = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const points = [...document.querySelectorAll<HTMLElement>(SNAP_TARGETS)].map((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const aligned = el.tagName === "FOOTER" ? top + el.offsetHeight - window.innerHeight : top;
        return Math.max(0, Math.min(max, Math.round(aligned)));
      });
      return [...new Set(points)].sort((a, b) => a - b);
    };

    /** A pane with its own scrollbar under the pointer keeps its wheel. */
    const scrollsItself = (node: EventTarget | null, direction: number) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = getComputedStyle(el);
        const scrollable = /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight + 4;
        if (scrollable) {
          const room = direction > 0 ? el.scrollHeight - el.clientHeight - el.scrollTop : el.scrollTop;
          if (room > 4) return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (event: WheelEvent) => {
      if (!snapMedia.matches || event.defaultPrevented) return;
      // Ctrl is page zoom; the modifiers and a sideways wheel are not a section move.
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || event.deltaY === 0) return;
      // The article pages scroll freely, so the browser keeps the wheel there.
      if (document.querySelector("main[data-free-scroll]")) return;

      const now = performance.now();
      lastWheel = now;
      recent = recent.filter((t) => now - t < DENSE_WINDOW_MS);
      recent.push(now);
      // Not a stream: leave the wheel to the browser, which handles a notch well.
      if (!moving && recent.length < DENSE_EVENTS) return;

      const direction = Math.sign(event.deltaY);
      if (scrollsItself(event.target, direction)) return;

      const y = window.scrollY;
      const points = snapPoints();
      const next = direction > 0 ? points.find((p) => p > y + 4) : [...points].reverse().find((p) => p < y - 4);
      // Past the last point, or a section taller than the screen: leave it native.
      if (next === undefined || Math.abs(next - y) > window.innerHeight * 1.2) return;

      event.preventDefault();
      if (moving) return;

      moving = true;
      movedAt = performance.now();
      window.scrollTo({ top: next, behavior: reduceMotion.matches ? "auto" : "smooth" });
      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(release, FALLBACK_SETTLE_MS);
    };

    /* The gesture is over when the scroll has settled and the wheel has gone
       quiet. Releasing on the settle alone would take the next event of a
       free-spinning stream as a fresh gesture, which is the runaway again. */
    const release = () => {
      const now = performance.now();
      const quietFor = now - lastWheel;
      if (quietFor < GESTURE_QUIET_MS && now - movedAt < SUSTAINED_MS) {
        releaseTimer = window.setTimeout(release, GESTURE_QUIET_MS - quietFor);
        return;
      }
      moving = false;
    };

    const onScrollEnd = () => {
      if (!moving) return;
      window.clearTimeout(releaseTimer);
      release();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.clearTimeout(releaseTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  return null;
}
