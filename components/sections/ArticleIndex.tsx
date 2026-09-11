"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n/config";
import type { ArticleTab, ArticlesContent } from "@/content/articles";
import { hasLiveViews, useViews } from "@/lib/views";
import { ArrowRight } from "@/components/Icons";

/**
 * One row of tiles on a wide screen. With the three mock entries that is a
 * single page and the pager sits disabled; it starts paging at the fifth
 * article.
 */
const PAGE = 4;

/** Past this many characters a description is cut at a word and ended "...". */
const CLIP = 150;

/** The two view-based orderings exist only once there are real counts to sort on. */
const TABS: ArticleTab[] = hasLiveViews ? ["recent", "viewed", "hot"] : ["recent"];

function clip(s: string) {
  if (s.length <= CLIP) return s;
  const cut = s.slice(0, CLIP);
  // Back up to the last word boundary, unless that throws away most of it —
  // a single very long word is better cut mid-way than reduced to nothing.
  const at = cut.lastIndexOf(" ");
  return `${(at > CLIP * 0.6 ? cut.slice(0, at) : cut).replace(/[\s،,;:—-]+$/, "")}...`;
}

function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? "");
}

/**
 * The index: three orderings of the same list, paged.
 *
 * The orderings are the only thing the tabs change, so they are real tabs —
 * one panel, re-sorted — rather than three lists kept in step. Switching
 * returns to the first page, because "page two of the most viewed" and "page
 * two of the most recent" are unrelated places and staying on the number
 * would land the reader somewhere arbitrary.
 *
 * Dates and counts are formatted with the locale's own digits and, for
 * Persian, its own calendar. Formatting pins the time zone to UTC so the
 * server's render and the browser's agree on the day.
 */
export function ArticleIndex({
  c,
  locale,
}: {
  c: ArticlesContent;
  locale: Locale;
}) {
  const [tab, setTab] = useState<ArticleTab>("recent");
  const [page, setPage] = useState(0);
  const id = useId();

  const seed = useMemo(
    () => Object.fromEntries(c.articles.map((a) => [a.slug, { views: a.views, week: a.week }])),
    [c.articles],
  );
  const views = useViews(seed);

  const tag = locale === "fa" ? "fa-IR" : "en-GB";
  const num = useMemo(() => new Intl.NumberFormat(tag), [tag]);
  const date = useMemo(
    () => new Intl.DateTimeFormat(tag, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }),
    [tag],
  );

  const sorted = useMemo(() => {
    const list = [...c.articles];
    const v = (slug: string) => views[slug] ?? { views: 0, week: 0 };
    if (tab === "recent") list.sort((a, b) => b.date.localeCompare(a.date));
    else if (tab === "viewed") list.sort((a, b) => v(b.slug).views - v(a.slug).views);
    else list.sort((a, b) => v(b.slug).week - v(a.slug).week);
    return list;
  }, [c.articles, tab, views]);

  const pages = Math.max(1, Math.ceil(sorted.length / PAGE));
  const shown = sorted.slice(page * PAGE, page * PAGE + PAGE);

  const choose = (t: ArticleTab) => {
    setTab(t);
    setPage(0);
  };

  /** Arrow keys move between tabs, as the tablist pattern expects. */
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    // In RTL the visual order runs the other way, so the keys do too.
    const dir = locale === "fa" ? -step : step;
    const next = TABS[(i + dir + TABS.length) % TABS.length];
    choose(next);
    document.getElementById(`${id}-${next}`)?.focus();
  };

  const pagerBtn =
    "flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-fg-muted transition-colors duration-300 hover:border-sage hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line">
        {TABS.length > 1 ? (
        <div role="tablist" aria-label={c.index.tabsLabel} className="-mb-px flex gap-6">
          {TABS.map((t, i) => {
            const on = t === tab;
            return (
              <button
                key={t}
                id={`${id}-${t}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`${id}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => choose(t)}
                onKeyDown={(e) => onKey(e, i)}
                className={`border-b-2 pb-3 text-[0.875rem] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${
                  on ? "border-sage text-fg" : "border-transparent text-slate hover:text-fg"
                }`}
              >
                {c.index.tabs[t]}
              </button>
            );
          })}
        </div>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-3 pb-3">
          <button
            type="button"
            className={pagerBtn}
            aria-label={c.index.prev}
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <ArrowRight width={16} height={16} aria-hidden="true" className="rotate-180 rtl:rotate-0" />
          </button>
          <span className="tnum min-w-[4.5rem] text-center text-[0.75rem] tracking-[0.08em] text-slate" aria-live="polite">
            {fill(c.index.pageOf, { n: num.format(page + 1), total: num.format(pages) })}
          </span>
          <button
            type="button"
            className={pagerBtn}
            aria-label={c.index.next}
            disabled={page >= pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
          >
            <ArrowRight width={16} height={16} aria-hidden="true" className="rtl:rotate-180" />
          </button>
        </div>
      </div>

      <div
        id={`${id}-panel`}
        role={TABS.length > 1 ? "tabpanel" : undefined}
        aria-labelledby={TABS.length > 1 ? `${id}-${tab}` : undefined}
        // Keyed on tab and page so each change is a fresh mount and the fade
        // below runs — the list visibly changes rather than silently swapping.
        key={`${tab}-${page}`}
        className="article-page"
      >
        {shown.length ? (
          /*
            Tiles, not rows. A row the width of the page gives each entry far
            more room than a title and two lines of summary can use, and three
            of them fill a screen with very little said. Square from the small
            breakpoint up; on a phone a square the width of the screen is the
            same waste turned sideways, so there the tile only takes the height
            its words need.

            The text holds the top of the tile and the date and count sit on
            its floor, so a row of tiles lines its meta up whatever the length
            of the titles above it.
          */
          <ul className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {shown.map((a) => {
              const v = views[a.slug] ?? { views: 0, week: 0 };
              return (
                <li key={a.slug}>
                  <Link
                    prefetch={false}
                    href={`/${locale}/articles/${a.slug}/`}
                    className="group block h-full rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                  >
                  <article className="flex h-full min-h-[13rem] flex-col overflow-hidden rounded-[4px] border border-line bg-ink/60 p-5 transition-colors duration-300 group-hover:border-sage/50 sm:aspect-square sm:min-h-0">
                    {/*
                      Fixed slots: three lines of title, four of summary,
                      reserved whether the words fill them or not, so a short
                      title leaves its tile the same shape as a long one
                      instead of pulling the summary up.

                      Measured in `lh` — one line of whatever line-height is in
                      force — rather than a multiple of em. Persian body copy
                      runs a taller line than English, so a slot sized for one
                      script's leading comes out a line short in the other.
                    */}
                    <h3 className="line-clamp-3 min-h-[3lh] text-balance text-[1.0625rem] font-semibold leading-[1.35] tracking-[-0.01em] text-fg">
                      {a.title}
                    </h3>
                    <p className="body-copy mt-3 line-clamp-4 min-h-[4lh] text-[0.875rem]">
                      {clip(a.description)}
                    </p>
                    <p className="tnum mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-4 text-[0.6875rem] tracking-[0.06em] text-slate">
                      <time dateTime={a.date}>{date.format(new Date(`${a.date}T00:00:00Z`))}</time>
                      {hasLiveViews ? (
                        <>
                          <span aria-hidden="true" className="h-3 w-px bg-line-2" />
                          <span>{fill(c.index.views, { n: num.format(v.views) })}</span>
                        </>
                      ) : null}
                    </p>
                  </article>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="body-copy py-8">{c.index.empty}</p>
        )}
      </div>
    </div>
  );
}
