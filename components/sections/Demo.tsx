"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { HomeContent } from "@/content/home";
import { SectionHead } from "@/components/SectionHead";

/** Drafting corner ticks around the recording plate. */
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

export function Demo({
  s,
  ui,
  id = "see-it-run",
  aside,
}: {
  s: HomeContent["demo"];
  ui: HomeContent["ui"];
  /** Section anchor. Defaults to the id the home and service pages link to. */
  id?: string;
  /** Beside the heading — the Products page puts its service-page link here. */
  aside?: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [near, setNear] = useState(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Posters load on approach, not with the page. A <video poster> downloads
  // the moment it is in the document whatever preload says, and with the
  // recordings a few screens down that was ~70 KB competing with the hero's
  // fonts on a phone connection. A screen of warning is enough for the frame
  // to be there by the time the section is.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Autoplay is a convenience, never a requirement: it only runs for the
  // visible panel, only when the user hasn't asked for reduced motion, and
  // every clip keeps its native controls either way.
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== active) {
        v.pause();
        return;
      }
      if (inView && !reduced) {
        void v.play().catch(() => {
          /* autoplay blocked — poster + controls still stand */
        });
      } else {
        v.pause();
      }
    });
  }, [active, inView]);

  const onTabKey = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      const rtl = document.dir === "rtl";
      const fwd = rtl ? "ArrowLeft" : "ArrowRight";
      const back = rtl ? "ArrowRight" : "ArrowLeft";
      let next = i;
      if (e.key === fwd) next = (i + 1) % s.tabs.length;
      else if (e.key === back) next = (i - 1 + s.tabs.length) % s.tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = s.tabs.length - 1;
      else return;
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    },
    [s.tabs.length],
  );

  return (
    <section id={id} className="flex min-h-[100svh] flex-col justify-center border-y border-line bg-surface/35 pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pb-8 md:pt-[calc(var(--header-h)+1.5rem)] [@media(min-width:768px)_and_(max-height:740px)]:pb-4 [@media(min-width:768px)_and_(max-height:740px)]:pt-[calc(var(--header-h)+1rem)]">
      <div className="shell">
        <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} aside={aside} />

        <div
          role="tablist"
          aria-label={ui.demoRegion}
          className="flex flex-wrap gap-2 border-b border-line"
        >
          {s.tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${t.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`-mb-px flex items-center gap-3 border-b-2 px-1 pb-2.5 pt-0.5 text-start transition-colors duration-200 ${
                i === active
                  ? "border-sage text-fg"
                  : "border-transparent text-fg-muted hover:text-fg"
              }`}
            >
              <span dir="ltr" className="lat text-[1.0625rem] font-bold tracking-[0.06em]">
                {t.tab}
              </span>
              <span dir="ltr" className="lat text-[0.75rem] text-slate">
                {t.flow}
              </span>
            </button>
          ))}
        </div>

        <div ref={wrapRef} className="mt-6">
          {s.tabs.map((t, i) => (
            <div
              key={t.id}
              role="tabpanel"
              id={`panel-${t.id}`}
              aria-labelledby={`tab-${t.id}`}
              hidden={i !== active}
              className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12"
            >
              {/* The recordings are on a white ground; the plate makes that
                  deliberate product chrome instead of a leak into the page. */}
              {/* The plate is sized from the height budget, not the column:
                  a 16:9 recording is the tallest thing in this band, so its
                  width is derived from the height the section can spare. */}
              <div className="relative h-fit rounded-[4px] border border-line bg-plate p-2 sm:p-3 lg:w-[calc(31svh*16/9)]">
                <Corners />

                {/* A title strip so the recording's white ground reads as the
                    tool's own chrome rather than a hole in the page. */}
                <div className="mb-2 flex items-center justify-between gap-4 px-1 pt-0.5 sm:mb-3">
                  <span dir="ltr" className="lat flex items-center gap-2.5 text-[0.6875rem] font-medium tracking-[0.12em] text-[#3d4350]">
                    <span
                      className="block h-1.5 w-1.5 rounded-full bg-[#c0863b]"
                      aria-hidden="true"
                    />
                    ARTINEXT {t.tab}
                  </span>
                  <span dir="ltr" className="lat text-[0.6875rem] tracking-[0.08em] text-[#565E6B]">
                    {t.flow}
                  </span>
                </div>

                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="block w-full rounded-[2px]"
                  width={1280}
                  height={720}
                  style={{ aspectRatio: "16 / 9" }}
                  poster={near ? t.poster : undefined}
                  preload="none"
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={`${t.tab} — ${t.title}`}
                >
                  <source src={t.src} type="video/mp4" />
                  {/* The recordings genuinely have no audio. A caption track
                      says so, rather than leaving assistive tech to guess â€”
                      but not `default`, or the cue paints over the poster. */}
                  <track
                    kind="captions"
                    src="/videos/silent.vtt"
                    srcLang="en"
                    label={ui.playHint}
                  />
                </video>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-[1.125rem] font-semibold leading-snug text-fg">{t.title}</h3>
                <p className="body-copy mt-2.5 text-[0.875rem]">{t.body}</p>

                <dl className="mt-4 border-t border-line">
                  {t.specs.map((sp) => (
                    <div
                      key={sp.k}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-2 [@media(min-width:768px)_and_(max-height:740px)]:py-1.5"
                    >
                      <dt className="text-[0.75rem] tracking-[0.08em] text-slate">{sp.k}</dt>
                      <dd className="text-end text-[0.875rem] text-fg">{sp.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-3 text-[0.75rem] text-fg-muted [@media(min-width:768px)_and_(max-height:740px)]:mt-2">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
