import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { HomeContent } from "@/content/home";
import { heroMedia } from "@/content/site";
import { HeroModel } from "@/components/HeroModel";
import { ArrowRight, Play } from "@/components/Icons";

/** The recording, when there is one. Muted + inline so iOS plays it at all. */
function HeroFilm() {
  if (!heroMedia) return null;
  return (
    <video
      className="h-full w-full object-cover"
      poster={heroMedia.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      {heroMedia.webm ? <source src={heroMedia.webm} type="video/webm" /> : null}
      <source src={heroMedia.mp4} type="video/mp4" />
    </video>
  );
}

/** Source, not prose: mono in both locales, always left-to-right. */
function CodeFragment({ c }: { c: HomeContent }) {
  return (
    <div dir="ltr" className="lat select-none text-[0.75rem] leading-[1.85] sm:text-[0.8125rem]">
      {c.hero.codeLines.map((l, i) => (
        <div key={l.t} className={i === 0 ? "text-fg/90" : "text-fg-muted/90 ps-6"}>
          {i === 0 ? (
            <>
              <span className="text-amber">void </span>
              <span className="text-sage">CreateStructuralFraming(</span>
            </>
          ) : (
            <>
              <span className="text-line-2">{"····· "}</span>
              <span className="text-slate">{l.t}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Two layouts, not one shrunk.
 *
 * Below lg the art is a band the message sits under — a phone has no room for
 * a headline and a model side by side, and overlaying them makes both worse.
 * From lg the art goes full-bleed and the message rides on the scrim. The
 * whole band is one screen, with the copy sitting below centre so it balances
 * against the tower instead of floating in the middle of it.
 */
export function Hero({ locale, c }: { locale: Locale; c: HomeContent }) {
  const hasFilm = heroMedia !== null;
  const Art = hasFilm ? HeroFilm : HeroModel;

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden">
      {/* Art — mobile band */}
      <div className="hero-band relative -mb-10 h-[34vh] min-h-[210px] max-h-[300px] pt-[68px] lg:hidden">
        <div
          className="pointer-events-none absolute inset-0 grid-paper opacity-[0.5]"
          aria-hidden="true"
        />
        <Art />
      </div>

      {/* Art — full-bleed from lg */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0 grid-paper opacity-[0.55]" />
        {/* Starts below the fixed header so the frame never runs under it. */}
        <div className="absolute bottom-0 end-0 top-[68px] w-[58%]">
          <Art />
        </div>
        <div className="hero-scrim absolute inset-0" />
      </div>

      {/* Message */}
      <div className="shell relative w-full pb-14 pt-4 lg:pb-16 lg:pt-[150px]">
        <div className="max-w-[34rem] lg:max-w-[46rem]">
          <p className="eyebrow reveal-in">{c.hero.eyebrow}</p>

          {/* Three words carry the whole fold, so they get the full scale.
              Kode Mono runs ~0.59em per character — the clamp is set from the
              column width, not from taste, so it never wraps mid-phrase. */}
          <h1 className="mt-5 text-[clamp(2rem,7.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-fg lg:mt-7">
            {c.hero.title}
          </h1>

          <p className="lead mt-5 max-w-[42ch] text-[0.9375rem] lg:mt-7 lg:max-w-[46ch] lg:text-[1rem]">
            {c.hero.lead}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-8">
            <Link
              prefetch={false}
              href={`/${locale}/contact/`}
              className="inline-flex items-center gap-2.5 rounded-[3px] bg-amber px-6 py-4 text-[0.9375rem] font-medium text-ink transition-opacity duration-200 hover:opacity-90"
            >
              {c.hero.primary}
              <ArrowRight width={17} height={17} aria-hidden="true" className="rtl:-scale-x-100" />
            </Link>

            <a
              href="#see-it-run"
              className="inline-flex items-center gap-2.5 rounded-[3px] border border-line-2 bg-ink/40 px-6 py-4 text-[0.9375rem] text-fg backdrop-blur-sm transition-colors duration-200 hover:border-sage hover:text-sage"
            >
              <Play width={16} height={16} aria-hidden="true" />
              {c.hero.secondary}
            </a>
          </div>

          {/* The fragment and its caption are the model's legend. They only
              earn their space where the model is beside them. */}
          <div className="mt-8 hidden border-s border-line-2 ps-4 [@media(min-width:1024px)_and_(min-height:800px)]:block">
            <CodeFragment c={c} />
            <p className="mt-2 text-[0.75rem] text-fg-muted">{c.hero.figureCaption}</p>
          </div>
        </div>
      </div>

      <div
        className="shell pointer-events-none absolute inset-x-0 bottom-0 w-full"
        aria-hidden="true"
      >
        <div className="rule" />
      </div>
    </section>
  );
}
