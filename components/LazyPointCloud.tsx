"use client";

import dynamic from "next/dynamic";

/**
 * The point-cloud canvas, fetched after the page is up rather than with it.
 *
 * For a cloud that is the page's subject — a hero mark, a stage — the code
 * belongs in the first load. For one that is a background below the fold it
 * does not: the engine and its glyph registry are ~22 KB compressed that the
 * browser would otherwise parse before the first screen is finished, for a
 * canvas nobody can see yet. On the home page that measured as 0.2s of mobile
 * LCP. Split out, it downloads after hydration and arrives long before the
 * section is scrolled to.
 *
 * No server render: the canvas is client-built either way, and its container
 * is sized by CSS, so arriving late moves nothing.
 */
export const LazyPointCloud = dynamic(
  () => import("@/components/PointCloud").then((m) => m.PointCloud),
  { ssr: false },
);
