"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";

/** Matches the 10px the stage itself rises, so rail and node travel together. */
const LIFT = 10;
/** Headroom above the rail so the raised vertex is never clipped. */
const PAD = 18;

/**
 * The rail is a polyline through the four nodes rather than a straight edge.
 * Pick up a stage and the rail comes with it: the line kinks up from the
 * stage before, through the raised node, back down at the stage after, and
 * runs flat from there.
 *
 * Node positions are measured rather than assumed — the grid's column widths
 * depend on the shell, and in Persian the whole row is mirrored. Measuring is
 * the only version that is correct in both directions at every width.
 */
export function Process({ s }: { s: HomeContent["process"] }) {
  const [active, setActive] = useState<number | null>(null);
  const [geometry, setGeometry] = useState<{ w: number; xs: number[] } | null>(null);

  const railRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const measure = useCallback(() => {
    const host = railRef.current;
    if (!host) return;
    const base = host.getBoundingClientRect();
    // Below md the stages stack and there is no rail to draw.
    if (window.innerWidth < 768) {
      setGeometry(null);
      return;
    }
    const xs = nodeRefs.current.map((n) => {
      if (!n) return 0;
      const r = n.getBoundingClientRect();
      return r.left - base.left + r.width / 2;
    });
    setGeometry({ w: base.width, xs });
  }, []);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const host = railRef.current;
    if (!host) return;
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  let path: string | null = null;
  if (geometry && geometry.xs.length) {
    const { w, xs } = geometry;
    // Persian mirrors the grid, so walk the nodes in visual order.
    const order = xs.map((x, i) => ({ x, i })).sort((a, b) => a.x - b.x);
    const y = (i: number) => PAD + (active === i ? -LIFT : 0);
    // The run starts and ends flat: only the picked-up node leaves the base.
    path = [
      `M0 ${PAD}`,
      ...order.map((n) => `L${n.x.toFixed(1)} ${y(n.i)}`),
      `L${w.toFixed(1)} ${PAD}`,
    ].join(" ");
  }

  return (
    <Section>
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      <div
        ref={railRef}
        className="relative mt-14 md:mt-16 [@media(min-width:768px)_and_(max-height:740px)]:mt-12"
      >
        {path ? (
          <svg
            className="pointer-events-none absolute inset-x-0 hidden md:block"
            style={{ top: -(PAD - 7.5) }}
            width="100%"
            height={PAD + 8}
            viewBox={`0 0 ${geometry!.w} ${PAD + 8}`}
            aria-hidden="true"
          >
            <path
              className="process-rail"
              d={path}
              fill="none"
              stroke="var(--line-2)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}

        <Reveal stagger={110} className="grid gap-10 md:grid-cols-4 md:gap-8">
          {s.steps.map((step, i) => (
            // The whole stage lifts off the rail together — node, number and
            // copy — so the timeline reads as one object being picked up.
            <article
              key={step.n}
              className="group stage relative"
              onPointerEnter={() => setActive(i)}
              onPointerLeave={() => setActive((cur) => (cur === i ? null : cur))}
            >
              <div className="flex items-center gap-3 md:block">
                <span
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className="stage-node block h-[15px] w-[15px] shrink-0 rounded-full border border-sage bg-ink"
                  aria-hidden="true"
                />
                <span
                  dir="ltr"
                  className="tnum text-[0.75rem] tracking-[0.14em] text-slate transition-colors duration-500 group-hover:text-sage md:mt-6 md:block"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
              </div>

              <h3 className="mt-4 text-[1.0625rem] font-semibold text-fg md:mt-3">{step.title}</h3>
              <p className="body-copy mt-3 transition-colors duration-500 group-hover:text-fg md:pe-6">
                {step.body}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
