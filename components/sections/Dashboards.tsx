"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { ServiceContent } from "@/content/services";
import { SectionHead } from "@/components/SectionHead";
import { ArrowRight } from "@/components/Icons";

/** Drafting corner ticks, same as the recording plate. */
function Corners() {
  const c = "absolute h-4 w-4 border-sage";
  return (
    <span aria-hidden="true">
      <span className={`${c} -start-px -top-px border-s border-t`} />
      <span className={`${c} -end-px -top-px border-e border-t`} />
      <span className={`${c} -bottom-px -start-px border-b border-s`} />
      <span className={`${c} -bottom-px -end-px border-b border-e`} />
    </span>
  );
}

/**
 * Screen order is the order somebody walks through the product, and it is
 * also how the files are named — `/images/dashboards/<screen>-<set>.webp`.
 * It lives here rather than in content because it is a property of the
 * screenshots, not of the copy.
 */
const SCREENS = ["login", "mainpage", "projects", "documents"] as const;
const ADVANCE = 5200;

/** Native pixel size of every screenshot. Fixed, so CLS stays 0. */
const SHOT = { w: 1440, h: 652 };

/**
 * The evidence slot for the automation page: two real builds of one internal
 * dashboard, one Persian and right-to-left, one English and dark.
 *
 * Both sets are reachable from either locale on purpose. The argument of the
 * section is that the structure is the same and the content is not, and that
 * only lands if the reader can put the two next to each other — so the page
 * language picks the *default* set and never restricts the choice.
 */
export function Dashboards({
  s,
  locale,
  id = "see-it-run",
  aside,
}: {
  s: NonNullable<ServiceContent["dashboards"]>;
  locale: Locale;
  /** Section anchor. Defaults to the id the home and service pages link to. */
  id?: string;
  /** Beside the heading — the Products page puts its service-page link here. */
  aside?: ReactNode;
}) {
  const initial = Math.max(
    0,
    s.sets.findIndex((set) => set.key === locale),
  );
  const [set, setSet] = useState(initial);
  const [shot, setShot] = useState(0);
  /** Paused while off screen, hovered, or focused — and under reduced motion. */
  const [running, setRunning] = useState(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const held = useRef({ inView: false, held: false });

  const active = s.sets[set];

  const sync = useCallback(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setRunning(held.current.inView && !held.current.held && !reduced);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        held.current.inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sync]);

  useEffect(() => {
    if (!running) return;
    const t = window.setInterval(
      () => setShot((i) => (i + 1) % SCREENS.length),
      ADVANCE,
    );
    return () => window.clearInterval(t);
  }, [running, set]);

  const hold = (v: boolean) => {
    held.current.held = v;
    sync();
  };

  const step = useCallback((delta: number) => {
    setShot((i) => (i + delta + SCREENS.length) % SCREENS.length);
  }, []);

  const onTabKey = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      const rtl = document.dir === "rtl";
      const fwd = rtl ? "ArrowLeft" : "ArrowRight";
      const back = rtl ? "ArrowRight" : "ArrowLeft";
      let next = i;
      if (e.key === fwd) next = (i + 1) % s.sets.length;
      else if (e.key === back) next = (i - 1 + s.sets.length) % s.sets.length;
      else return;
      e.preventDefault();
      setSet(next);
      setShot(0);
      tabRefs.current[next]?.focus();
    },
    [s.sets.length],
  );

  const screen = active.screens[shot];
  const arrow =
    "pointer-events-auto absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-[3px] border border-line-2 bg-ink/70 text-fg backdrop-blur-sm transition-colors duration-200 hover:border-sage hover:text-sage";

  return (
    <section
      id={id}
      className="flex min-h-[100svh] flex-col justify-center border-y border-line bg-surface/35 pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pb-8 md:pt-[calc(var(--header-h)+1.5rem)] [@media(min-width:768px)_and_(max-height:740px)]:pb-4 [@media(min-width:768px)_and_(max-height:740px)]:pt-[calc(var(--header-h)+1rem)]"
    >
      <div className="shell">
        <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} aside={aside} />

        <div
          role="tablist"
          aria-label={s.regionLabel}
          className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line"
        >
          {s.sets.map((t, i) => (
            <button
              key={t.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`dash-tab-${t.key}`}
              aria-selected={i === set}
              aria-controls={`dash-panel-${t.key}`}
              tabIndex={i === set ? 0 : -1}
              onClick={() => {
                setSet(i);
                setShot(0);
              }}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`-mb-px flex items-center gap-3 border-b-2 px-1 pb-2.5 pt-0.5 text-start transition-colors duration-200 ${
                i === set
                  ? "border-sage text-fg"
                  : "border-transparent text-fg-muted hover:text-fg"
              }`}
            >
              <span dir="ltr" className="lat text-[1.0625rem] font-bold tracking-[0.06em]">
                {t.company}
              </span>
              <span className="text-[0.75rem] text-slate">{t.tab}</span>
            </button>
          ))}
        </div>

        <div
          ref={wrapRef}
          className="mt-6 grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10"
          onMouseEnter={() => hold(true)}
          onMouseLeave={() => hold(false)}
          onFocusCapture={() => hold(true)}
          onBlurCapture={() => hold(false)}
        >
          {/* The screenshots carry their own chrome, so the plate here is a
              frame rather than a background: a hairline panel and a title
              strip naming which product and which screen is on it. */}
          <div
            id={`dash-panel-${active.key}`}
            role="tabpanel"
            aria-labelledby={`dash-tab-${active.key}`}
            /* Width comes from the height the band can spare, the same way
               the recording plate is sized: these are 2.21:1 screenshots and
               the section's budget is vertical, not horizontal. */
            className="relative h-fit rounded-[4px] border border-line bg-surface/60 p-2 sm:p-3 lg:w-[calc(36svh*1440/652)] [@media(min-width:1024px)_and_(max-height:740px)]:w-[calc(33svh*1440/652)]"
          >
            <Corners />

            <div className="mb-2 flex items-center justify-between gap-4 px-1 pt-0.5 sm:mb-3">
              <span className="flex items-center gap-2.5">
                {/* The marks are the clients' own, and one of them is drawn
                    black — so both sit on the same light chip rather than one
                    of them disappearing into the page. */}
                <Image
                  src={`/images/dashboards/${active.logo}`}
                  alt=""
                  width={160}
                  height={160}
                  className="h-6 w-6 rounded-[2px] bg-plate object-contain p-0.5"
                  aria-hidden="true"
                />
                <span
                  dir="ltr"
                  className="lat text-[0.6875rem] font-medium tracking-[0.12em] text-fg-muted"
                >
                  {active.company}
                </span>
              </span>
              <span className="text-[0.6875rem] tracking-[0.08em] text-slate">
                {screen.label}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[2px]">
              {/* Every shot is rendered and cross-faded rather than swapped,
                  so a click never lands on an empty frame while a file
                  decodes. All of them lazy: the carousel is never the first
                  thing on a page, and a preloaded first shot was competing
                  with the hero's fonts on a phone connection. */}
              <div style={{ aspectRatio: `${SHOT.w} / ${SHOT.h}` }} />
              {SCREENS.map((name, i) => (
                <Image
                  key={name}
                  src={`/images/dashboards/${name}-${active.key}.webp`}
                  alt={active.screens[i].alt}
                  width={SHOT.w}
                  height={SHOT.h}
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                    i === shot ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={s.controls.prev}
                  className={`${arrow} start-2`}
                >
                  <ArrowRight
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="-scale-x-100 rtl:scale-x-100"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={s.controls.next}
                  className={`${arrow} end-2`}
                >
                  <ArrowRight
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="rtl:-scale-x-100"
                  />
                </button>
              </div>
            </div>

            {/* Caption and position, on one line: what this screen is, and
                where it sits in the four. */}
            <div className="mt-2.5 flex items-baseline justify-between gap-4 px-1">
              <p className="text-[0.75rem] leading-snug text-fg-muted">{screen.caption}</p>
              {/* The counter belongs to this page, not to the product on the
                  plate — so it takes the reader's numerals even when the set
                  being shown is the other language's build. */}
              <span className="tnum shrink-0 text-[0.6875rem] tracking-[0.08em] text-slate">
                {locale === "fa"
                  ? `${shot + 1} / ${SCREENS.length}`.replace(/\d/g, (d) =>
                      "۰۱۲۳۴۵۶۷۸۹"[Number(d)],
                    )
                  : `${shot + 1} / ${SCREENS.length}`}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="fa-air text-[1.125rem] font-semibold leading-snug text-fg">
              {active.kicker}
            </h3>
            {active.body.split("\n\n").map((para, i) => (
              <p
                key={para.slice(0, 24)}
                className={i === 0 ? "body-copy mt-2.5 text-[0.875rem]" : "body-copy mt-3 text-[0.875rem]"}
              >
                {para}
              </p>
            ))}

            <dl className="mt-4 border-t border-line">
              {active.specs.map((sp) => (
                <div
                  key={sp.k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-2 [@media(min-width:768px)_and_(max-height:740px)]:py-1.5"
                >
                  <dt className="text-[0.75rem] tracking-[0.08em] text-slate">{sp.k}</dt>
                  <dd className="text-end text-[0.875rem] text-fg">{sp.v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 text-[0.75rem] text-fg-muted [@media(min-width:768px)_and_(max-height:740px)]:mt-2">
              {s.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
