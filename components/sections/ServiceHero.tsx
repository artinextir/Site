import { Fragment } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { ServiceContent } from "@/content/services";
import { HeroModel } from "@/components/HeroModel";
import { ArrowRight, Play } from "@/components/Icons";

/**
 * The homepage hero with one thing added and one thing removed: a visible
 * breadcrumb, because this page is a level down and the reader should be able
 * to see that, and no code legend, because the service is the subject here
 * rather than the tooling behind it.
 *
 * Same one-screen band, same scrim, same tower.
 */
export function ServiceHero({
  locale,
  s,
  home,
  trail = [],
}: {
  locale: Locale;
  s: ServiceContent;
  /** Label for the root crumb, taken from the site nav so it stays in step. */
  home: string;
  /** Levels between the root and this page. Empty on a top-level service. */
  trail?: { label: string; href: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden">
      {/* Art — mobile band */}
      <div className="hero-band relative -mb-10 h-[30vh] min-h-[190px] max-h-[260px] pt-[68px] lg:hidden">
        <div
          className="pointer-events-none absolute inset-0 grid-paper opacity-[0.5]"
          aria-hidden="true"
        />
        <HeroModel />
      </div>

      {/* Art — full-bleed from lg */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0 grid-paper opacity-[0.55]" />
        <div className="absolute bottom-0 end-0 top-[68px] w-[58%]">
          <HeroModel />
        </div>
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="shell relative w-full pb-14 pt-4 lg:pb-16 lg:pt-[150px]">
        <div className="max-w-[34rem] lg:max-w-[46rem]">
          {/* Visible trail, not only schema — the crumb is how a reader gets
              back up a level without hunting for the logo. */}
          <nav aria-label={s.breadcrumb} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-[0.75rem] text-fg-muted">
              <li>
                <Link
                  prefetch={false}
                  href={`/${locale}/`}
                  className="transition-colors duration-200 hover:text-sage"
                >
                  {home}
                </Link>
              </li>
              {trail.map((step) => (
                <Fragment key={step.href}>
                  <li aria-hidden="true" className="text-line-2">
                    /
                  </li>
                  <li>
                    <Link
                      prefetch={false}
                      href={step.href}
                      className="transition-colors duration-200 hover:text-sage"
                    >
                      {step.label}
                    </Link>
                  </li>
                </Fragment>
              ))}
              <li aria-hidden="true" className="text-line-2">
                /
              </li>
              <li className="text-slate">{s.breadcrumb}</li>
            </ol>
          </nav>

          <p className="eyebrow reveal-in">{s.hero.eyebrow}</p>

          <h1 className="fa-air mt-4 text-balance text-[clamp(1.75rem,4.6vw,2.9rem)] font-semibold leading-[1.12] tracking-[-0.028em] text-fg lg:mt-5">
            {s.hero.title}
          </h1>

          <p className="lead mt-5 max-w-[44ch] text-[0.9375rem] lg:mt-6 lg:max-w-[52ch] lg:text-[1rem]">
            {s.hero.lead}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-8">
            <Link
              prefetch={false}
              href={`/${locale}/contact/`}
              className="inline-flex items-center gap-2.5 rounded-[3px] bg-amber px-6 py-4 text-[0.9375rem] font-medium text-ink transition-opacity duration-200 hover:opacity-90"
            >
              {s.hero.primary}
              <ArrowRight width={17} height={17} aria-hidden="true" className="rtl:-scale-x-100" />
            </Link>

            <a
              href="#see-it-run"
              className="inline-flex items-center gap-2.5 rounded-[3px] border border-line-2 bg-ink/40 px-6 py-4 text-[0.9375rem] text-fg backdrop-blur-sm transition-colors duration-200 hover:border-sage hover:text-sage"
            >
              <Play width={16} height={16} aria-hidden="true" />
              {s.hero.secondary}
            </a>
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
