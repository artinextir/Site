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
 * The first fix let a gesture's opening events through to the browser and
 * only took over once the stream looked dense. That broke the touchpad
 * (2026-09-13): a touchpad swipe is dense too, and Chrome decides on the
 * first event of a gesture whether the page may cancel the rest. Letting the
 * opening events through left the browser's own scroll running under ours,
 * which read as lag, and the swipe's momentum tail outlived the release
 * timer and moved a second section.
 *
 * So the page owns every wheel event on the snapping pages, from the first
 * one, and reads the shape of the stream rather than its density:
 *
 *   - a gesture ends when the wheel goes quiet or reverses;
 *   - it moves one section once it has travelled far enough to mean it;
 *   - after that, a decaying stream is momentum and is swallowed;
 *   - a stream that picks up again after decaying is a fresh swipe;
 *   - a stream that holds steady is someone holding the scroll, and moves
 *     on at about a section per second.
 *
 * Deliberately narrow. It runs only where the snap itself runs (desktop
 * width, a real pointer), never on the article pages and never over
 * something with its own scrollbar. Keyboard, touch and the scrollbar are
 * untouched.
 */
const SNAP_MEDIA = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
const SNAP_TARGETS = "main > section, [data-cloud-track] section, footer";

/** A wheel that goes quiet this long has ended its gesture. */
const GESTURE_QUIET_MS = 160;

/** Travel before a gesture counts as a move, so a brush of the touchpad does nothing. */
const INTENT_PX = 40;

/* The stream's shape is read by comparing its latest stretch with the one
   before it. Long enough to average out a touchpad's jitter, short enough
   to notice a second swipe while the first one's momentum is still going. */
const RECENT_MS = 120;
const EARLIER_MS = 360;

/** A steady stream this long after a move is a held scroll, not momentum. */
const SUSTAINED_MS = 850;

/** Covers the scroll animation when the browser has no `scrollend`. */
const FALLBACK_SETTLE_MS = 900;

type Sample = { t: number; v: number };

type Gesture = {
  direction: number;
  last: number;
  travel: number;
  /** Over a pane with its own scrollbar: the browser keeps the whole gesture. */
  native: boolean;
  moved: boolean;
  movedAt: number;
  /** Strongest event since the last move. */
  peak: number;
  samples: Sample[];
};

/** Wheel distance in pixels, whatever unit the device reports in. */
const pixels = (event: WheelEvent, delta: number) =>
  event.deltaMode === 1 ? delta * 16 : event.deltaMode === 2 ? delta * window.innerHeight : delta;

const mean = (samples: Sample[]) =>
  samples.length ? samples.reduce((sum, s) => sum + s.v, 0) / samples.length : 0;

export function SnapScroll() {
  useEffect(() => {
    const snapMedia = window.matchMedia(SNAP_MEDIA);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let moving = false;
    let settleTimer = 0;
    let gesture: Gesture | null = null;

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

    /** The latest stretch of the stream and the one before it. */
    const windows = (g: Gesture, now: number, since = 0) => {
      const samples = g.samples.filter((s) => s.t > since);
      return {
        recent: mean(samples.filter((s) => now - s.t <= RECENT_MS)),
        earlier: mean(samples.filter((s) => now - s.t > RECENT_MS)),
      };
    };

    /** Whether a gesture that has already moved should move again. */
    const movesAgain = (g: Gesture, now: number) => {
      // Only what came after the move: the swipe that caused it says nothing about what follows.
      const { recent, earlier } = windows(g, now, g.movedAt);
      if (!earlier) return false;
      // Momentum had died down and the stream picked up: a second swipe.
      const picksUp = earlier < g.peak * 0.5 && recent > earlier * 1.6 && recent >= 6;
      // Neither fading nor well below its peak: the scroll is being held.
      const held = now - g.movedAt >= SUSTAINED_MS && recent >= earlier * 0.75 && recent >= g.peak * 0.6;
      return picksUp || held;
    };

    const move = (g: Gesture, now: number) => {
      const y = window.scrollY;
      const points = snapPoints();
      const next =
        g.direction > 0 ? points.find((p) => p > y + 4) : [...points].reverse().find((p) => p < y - 4);
      g.moved = true;
      g.movedAt = now;
      g.peak = 0;
      // Nothing beyond this point: the gesture is spent, and there is nowhere to go.
      if (next === undefined) return;

      /* A section taller than the screen, which is what the media sections
         on /products/ become on a short laptop window, is stepped through a
         screen at a time, landing on the section edge at the end. Handing it
         back to the browser would hand a free-spinning wheel the page again. */
      const step = Math.round(window.innerHeight * 0.85);
      const far = Math.abs(next - y) > window.innerHeight * 1.2;
      const target = far ? (g.direction > 0 ? Math.min(y + step, next) : Math.max(y - step, next)) : next;

      moving = true;
      window.scrollTo({ top: target, behavior: reduceMotion.matches ? "auto" : "smooth" });
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, FALLBACK_SETTLE_MS);
    };

    const settle = () => {
      window.clearTimeout(settleTimer);
      moving = false;
    };

    const onWheel = (event: WheelEvent) => {
      if (!snapMedia.matches || event.defaultPrevented) return;
      // Ctrl is page zoom; the modifiers are not a section move.
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      const dy = pixels(event, event.deltaY);
      if (dy === 0 || Math.abs(dy) <= Math.abs(pixels(event, event.deltaX))) return;
      // The article pages scroll freely, so the browser keeps the wheel there.
      if (document.querySelector("main[data-free-scroll]")) return;

      const now = performance.now();
      const direction = Math.sign(dy);
      if (!gesture || now - gesture.last > GESTURE_QUIET_MS || direction !== gesture.direction) {
        gesture = {
          direction,
          last: now,
          travel: 0,
          native: !event.cancelable || scrollsItself(event.target, direction),
          moved: false,
          movedAt: 0,
          peak: 0,
          samples: [],
        };
      }
      const g = gesture;
      g.last = now;
      if (g.native) return;
      event.preventDefault();

      const v = Math.abs(dy);
      g.travel += v;
      g.peak = Math.max(g.peak, v);
      g.samples.push({ t: now, v });
      g.samples = g.samples.filter((s) => now - s.t <= RECENT_MS + EARLIER_MS);

      if (moving) return;
      if (g.moved ? movesAgain(g, now) : g.travel >= INTENT_PX) move(g, now);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scrollend", settle);
    return () => {
      window.clearTimeout(settleTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scrollend", settle);
    };
  }, []);

  return null;
}
