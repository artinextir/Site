"use client";

import { useEffect, useState } from "react";

/**
 * View counts for the article index.
 *
 * The site is a static export, so there is nothing of ours on the server to
 * count with — and counting *by IP*, which is what makes a view a reader
 * rather than a reload, can only be done on a server. This is the seam where
 * one plugs in. Set `NEXT_PUBLIC_VIEWS_ENDPOINT` at build time and the index
 * reads live figures from it; leave it unset and the index shows the seeded
 * figures from `content/articles.ts`, which is what it does today.
 *
 * The endpoint's contract, for whoever builds it:
 *
 *   GET  {endpoint}?slugs=a,b,c  →  { [slug]: { views: number, week: number } }
 *   POST {endpoint}  { slug }    →  204
 *
 * The POST is where the counting happens and where the IP is read — from the
 * request, never sent by the page. It should count one view per address per
 * article per day, and keep a dated record so `week` can be the last seven
 * days rather than a counter that only ever grows. An article page will call
 * it once on load; there is no article page yet, so nothing does.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_VIEWS_ENDPOINT;

/**
 * Whether real counts exist. Without an endpoint there are no view figures to
 * show, and a seeded number next to a real article would be an invented
 * statistic, so the index hides the count and the two orderings built on it.
 */
export const hasLiveViews = Boolean(ENDPOINT);

export type Views = Record<string, { views: number; week: number }>;

/**
 * Seeded figures first, live ones when they land.
 *
 * Starting from the seed rather than from nothing means the list never
 * re-sorts itself under the reader's eye on a slow connection: it is in a
 * plausible order from the first paint, and only moves if the live numbers
 * disagree.
 */
export function useViews(seed: Views): Views {
  const [views, setViews] = useState(seed);

  useEffect(() => {
    if (!ENDPOINT) return;
    const ctrl = new AbortController();
    const slugs = Object.keys(seed).join(",");

    fetch(`${ENDPOINT}?slugs=${encodeURIComponent(slugs)}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? (r.json() as Promise<Views>) : null))
      .then((live) => {
        if (live) setViews((v) => ({ ...v, ...live }));
      })
      // A counter that is down should cost the page its numbers, not its list.
      .catch(() => {});

    return () => ctrl.abort();
  }, [seed]);

  return views;
}
