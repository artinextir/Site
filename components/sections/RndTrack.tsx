"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { RndContent } from "@/content/rnd";
import type { Locale } from "@/lib/i18n/config";
import type { GlyphName } from "@/lib/pointcloud/glyphs";
import { PointCloud } from "@/components/PointCloud";
import { Reveal } from "@/components/Reveal";
import { StageCopy } from "@/components/StageCopy";
import { Section } from "@/components/SectionHead";
import { ArrowRight } from "@/components/Icons";

/**
 * Where the subject rests at each stage, as fractions of the canvas offset
 * from its centre.
 *
 * Only the side changes. Every stage rests on the vertical middle, level with
 * the copy beside it, because that is where it is looked at for all but a
 * second of its life — the diagonal comes from STAGE_ARC, which bends the
 * path between two stages without moving either end of it.
 */
const STAGE_POS = [
  [0.22, 0],
  [-0.22, 0],
  [0.22, 0],
  [-0.22, 0],
  [0.22, 0],
  [0.22, 0],
] as const;

/**
 * How far each transition bows off that straight line, positive downward.
 *
 * They alternate, so a subject crossing the page rises on one leg and falls
 * on the next instead of tracing the same arc five times. The last is the
 * exception, and larger: the mark and the bulb share a side, so there is no
 * sideways component left and the whole move is the drop — which is the
 * argument landing rather than another step across the page.
 */
const STAGE_ARC = [0.1, -0.1, 0.1, -0.1, 0.18] as const;

/** The breakpoint the two-column layout, the snap and the typing all use. */
const WIDE = "(min-width: 1024px)";

/**
 * Which presentation this screen gets, decided on the client.
 *
 * `null` until hydration, and neither cloud mounts until it is known. Both
 * are client-built canvases anyway, so waiting costs nothing visible — and it
 * is what stops a phone from building the six-stage cloud it will never show,
 * or a desktop from building six figures it has hidden.
 */
function useWide() {
  const [wide, setWide] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide;
}

/**
 * One stage's figure, for a one-column screen.
 *
 * Presented the way the About and Insights pages present theirs: a box above
 * the copy holding one shape, turning and swept by its beam exactly as the
 * contact hero's mark is — same box, same fit. The box is always in the
 * layout, sized by CSS, so the figure arriving after hydration moves nothing;
 * only its canvas waits for the screen to be known.
 *
 * And for the figure to come within a screen of the viewport. Six clouds
 * built during hydration is most of a phone's blocked main thread, for five
 * figures nobody has scrolled to yet; built on approach, only the hero's
 * costs anything at load and the rest spread themselves across the scroll.
 */
function Figure({ glyph, show }: { glyph: GlyphName; show: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!show || !el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return (
    <div
      ref={box}
      aria-hidden="true"
      className="relative z-0 order-first min-h-[clamp(240px,34vh,320px)] lg:hidden"
    >
      {show && near ? (
        <PointCloud glyph={`${glyph}-solo` as GlyphName} fit={0.46} />
      ) : null}
    </div>
  );
}

/**
 * The whole page: the hero is the first stage and the closing call is the
 * last one. It is two pages depending on the screen.
 *
 * On a wide screen one cloud runs the length of it, fixed behind the copy,
 * and scrolling is what moves it — the page snaps a stage per screen, the
 * subject crosses from one side to the other as it becomes the next shape,
 * and each stage's copy types itself on beside it.
 *
 * On a phone none of that holds up. There is no side for the subject to keep
 * to, a fixed layer behind full-width copy is printed over the words, and a
 * transformation driven by a thumb flick is mostly a blur. So a phone gets
 * the argument laid out instead of performed: each section a figure of its
 * stage above plain copy, turning in place the way the contact hero's mark
 * does, and the field drawn once, behind the hero. Nothing crosses the page
 * and nothing turns into anything else — the same six states in the same
 * order, each one shown whole where its copy is.
 *
 * The wide layer is fixed, and released by position rather than by the
 * layout. Sticky stops sticking one full viewport before its container ends,
 * so the mark would scroll away during the closing call unless that section
 * were padded with a screen of nothing before the footer. So the layer stays
 * fixed and fades once the track's end has entered the viewport — the moment
 * the footer begins — then drops out of it so the engine's own visibility
 * gate can stop the loop.
 *
 * A stage is anchored to a hairline in its copy rather than to the section
 * around it. Progress, snapping and the typing band all read that one point,
 * so a section can be whatever height the scroll needs without dragging the
 * stage off the words it belongs to.
 */
export function RndTrack({ c, locale }: { c: RndContent; locale: Locale }) {
  const end = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(true);
  const wide = useWide();
  const narrow = wide === false;

  useEffect(() => {
    const el = end.current;
    if (!el || !wide) return;

    /*
      Compared against a cached offset rather than watched with an observer.

      An IntersectionObserver reports threshold *crossings*, and a hairline at
      the end of the track is easy to jump straight over — a snap from the
      last section to a footer taller than the screen moves further in one go
      than the hairline is wide, so the callback never runs and the layer is
      left on over the footer. `isIntersecting` is also false on both sides of
      the viewport, and those two sides mean opposite things here.

      Position answers both. The offset is measured once and re-measured when
      the document resizes, so the scroll handler only does arithmetic — no
      layout read per event — and React drops the update when the answer has
      not changed.
    */
    let end0 = 0;
    const measure = () => {
      end0 = el.getBoundingClientRect().top + window.scrollY;
    };
    const check = () => {
      setLive(window.scrollY + window.innerHeight <= end0 + 4);
    };

    measure();
    check();

    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => {
      measure();
      check();
    });
    ro.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [wide]);

  const [first, ...rest] = c.stages;
  const last = c.stages[c.stages.length - 1];

  return (
    <div data-cloud-track className="relative">
      {wide ? (
        <div
          aria-hidden="true"
          /*
            Clipped, because the canvas is deliberately wider than the layer:
            it bleeds 150px each side so points thrown past the edge are still
            drawn. Against a full-width layer that bleed is overflow, and the
            page grows a horizontal scrollbar the width of it.
          */
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          style={{
            opacity: live ? 1 : 0,
            transform: live ? "none" : "translateY(100%)",
            // The move is instant and held back until the fade has finished:
            // it is there to take the canvas out of the viewport so the engine
            // stops drawing, not to be seen happening.
            transition: live
              ? "opacity 260ms ease, transform 0ms"
              : "opacity 260ms ease, transform 0ms linear 260ms",
          }}
        >
          <div className="relative h-full w-full">
            <PointCloud
              stages={c.stages}
              glyph={first}
              fit={0.3}
              stagePos={STAGE_POS}
              stageArc={STAGE_ARC}
            />
          </div>
        </div>
      ) : null}

      <div className="relative z-10">
        {/*
          Stage one is the hero: the idea exists, but only as something
          written. No aurora behind it — the cloud is this page's light, and a
          gradient in the same section would paint over the field the hero is
          supposed to be standing in. On a phone that field is drawn here,
          once, the way the Insights hero stands in its own.

          The hero is not typed. It is the page's largest text and the thing a
          load is measured on; withholding it to animate would cost more than
          the effect is worth.
        */}
        <Section
          rule={false}
          behind={
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
              {narrow ? <PointCloud glyph="rnd-field" fit={0.3} /> : null}
            </div>
          }
        >
          <Figure glyph={first} show={narrow} />
          <Reveal
            data-cloud-stage
            className="relative z-10 mt-8 max-w-[46ch] lg:mt-0 lg:w-1/2 lg:max-w-none lg:pe-10"
          >
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="mt-5 text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-fg">
              {c.hero.title}
            </h1>
            <p className="lead mt-7">{c.hero.lead}</p>
            <p className="eyebrow mt-10 text-slate">{c.hero.scrollHint}</p>
          </Reveal>
        </Section>

        {c.panels.map((p, i) => (
          <section
            key={p.eyebrow}
            className="relative flex min-h-[100svh] items-center overflow-hidden py-16 lg:py-0"
            aria-label={p.title}
          >
            {/*
              Copy takes the side the subject has left, in its own half-column
              so it cannot drift across the middle and end up printed over the
              points. The hero's copy holds the start side, so panel one takes
              the end side and they alternate from there. On a phone the figure
              sits above instead and the column is the page.
            */}
            <div className="shell relative grid w-full gap-8 lg:grid-cols-2 lg:gap-0">
              <Figure glyph={rest[i]} show={narrow} />
              <StageCopy
                className={`relative z-10 max-w-[44ch] ${
                  i % 2 === 0
                    ? "lg:col-start-2 lg:ms-auto lg:ps-10"
                    : "lg:col-start-1 lg:pe-10"
                }`}
                lines={[
                  { className: "eyebrow", text: p.eyebrow },
                  {
                    as: "h2",
                    className:
                      "mt-4 text-balance text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-[1.22] tracking-[-0.02em] text-fg",
                    text: p.title,
                  },
                  { className: "lead mt-5", text: p.body },
                  {
                    className:
                      "lat mt-8 text-[0.75rem] tracking-[0.08em] text-slate rtl:text-right",
                    dir: "ltr" as const,
                    text: `${String(i + 1).padStart(2, "0")} / ${String(
                      c.panels.length,
                    ).padStart(2, "0")}`,
                  },
                ]}
              />
            </div>
          </section>
        ))}

        {/*
          The last stage, and the only one that asks for something. One screen
          like the rest, so the footer follows it directly.
        */}
        <section
          className="relative flex min-h-[100svh] items-center overflow-hidden py-16 lg:py-0"
          aria-label={c.cta.title}
        >
          <div className="shell relative grid w-full gap-8 lg:grid-cols-2 lg:gap-0">
            <Figure glyph={last} show={narrow} />
            <StageCopy
              className="relative z-10 max-w-[46ch] lg:col-start-1 lg:pe-10"
              lines={[
                { className: "eyebrow", text: c.cta.eyebrow },
                {
                  as: "h2",
                  className:
                    "mt-5 text-balance text-[clamp(1.625rem,3.6vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fg",
                  text: c.cta.title,
                },
                { className: "lead mt-6", text: c.cta.lead },
              ]}
              after={
                <Link
                  href={`/${locale}/contact/`}
                  className="mt-9 inline-flex items-center gap-2 rounded-[4px] border border-sage bg-sage px-6 py-3 text-[0.875rem] font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {c.cta.action}
                  <ArrowRight
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="rtl:rotate-180"
                  />
                </Link>
              }
            />
          </div>
        </section>
      </div>

      {/* The last pixel of the argument; everything below it is the footer. */}
      <div ref={end} aria-hidden="true" className="h-px w-full" />
    </div>
  );
}
