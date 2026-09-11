"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type TypedLine = {
  as?: "p" | "h1" | "h2";
  className?: string;
  text: string;
  /**
   * Forces a direction on this line alone.
   *
   * Needed for a line made entirely of neutral characters — "02 / 04" has no
   * strong-direction character in it, so in a Persian paragraph the whole run
   * takes the paragraph's direction and the counter reads backwards.
   */
  dir?: "ltr" | "rtl";
};

/** Between one word appearing and the next. */
const IN_STEP = 16;
/** Between one word leaving and the one before it. */
const OUT_STEP = 8;
const IN_MS = 90;
const OUT_MS = 55;

/**
 * Copy that types itself on when it arrives, and is un-typed when it leaves.
 *
 * Word by word and top to bottom, which is the order it would be written in —
 * and in reverse on the way out, last word first, so leaving reads as the
 * writing being taken back rather than as a second arrival.
 *
 * Two things this deliberately does not do:
 *
 * It does not reveal on overlap. An observer that fires as soon as any part
 * of a tall block enters the viewport starts the text while the block is
 * still halfway down the screen, so the reader sees the words land somewhere
 * that is not where they belong. The observer watches a hairline at the
 * block's own middle instead, against a band a quarter of the viewport tall,
 * so the copy is typed at its resting position and nowhere else.
 *
 * It does not animate with timers. Every word carries its own transition
 * delay, so the whole run is one state change and the browser schedules the
 * rest — no interval, no re-render per word, and scrubbing back up reverses
 * it for free. The fade is short enough to read as a cut; at this stagger
 * only a handful of words are ever mid-transition.
 *
 * Only on a wide screen. The state is written as custom properties and the
 * stylesheet applies them inside a `min-width: 1024px` query, so a phone —
 * which has no stage beside the copy for the typing to be timed against —
 * shows the text from the first paint, including in the server's HTML, rather
 * than waiting for hydration to reveal it.
 */
export function StageCopy({
  className = "",
  lines,
  after,
}: {
  className?: string;
  lines: readonly TypedLine[];
  /** Rendered under the copy, revealed once the last word has landed. */
  after?: ReactNode;
}) {
  const mark = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const el = mark.current;
    if (!el) return;

    // Nothing to type for a reader who has asked for stillness; the copy is
    // the content, so it simply stays.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(([e]) => setShown(e.isIntersecting), {
      rootMargin: "-38% 0px -38% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = lines.map((l) => l.text.split(/\s+/).filter(Boolean));
  const offsets: number[] = [];
  let running = 0;
  for (const w of words) {
    offsets.push(running);
    running += w.length;
  }
  const total = running;

  return (
    <div className={`relative ${className}`}>
      {/*
        The anchor, and the only thing measured: progress between stages, the
        snap position and the typing band all read this one hairline.

        It sits at the copy's own middle, because the subject is beside the
        copy and the two share a centre line. Only a wide screen reads it: a
        phone has no scroll-driven cloud to steer, and its copy is not typed.
      */}
      <span
        ref={mark}
        data-cloud-stage
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 block h-px"
      />

      {lines.map((line, li) => {
        const Tag = line.as ?? "p";
        return (
          <Tag key={li} className={line.className} dir={line.dir}>
            {words[li].map((word, wi) => {
              const k = offsets[li] + wi;
              return (
                <span
                  key={wi}
                  className="typed"
                  style={
                    still
                      ? undefined
                      : ({
                          "--o": shown ? 1 : 0,
                          "--t": `${shown ? IN_MS : OUT_MS}ms`,
                          "--d": `${shown ? k * IN_STEP : (total - 1 - k) * OUT_STEP}ms`,
                        } as CSSProperties)
                  }
                >
                  {word}
                  {wi < words[li].length - 1 ? " " : ""}
                </span>
              );
            })}
          </Tag>
        );
      })}

      {after ? (
        <div
          className="typed"
          style={
            still
              ? undefined
              : ({
                  "--o": shown ? 1 : 0,
                  "--t": "220ms",
                  "--d": `${shown ? total * IN_STEP : 0}ms`,
                } as CSSProperties)
          }
        >
          {after}
        </div>
      ) : null}
    </div>
  );
}
