"use client";

import dynamic from "next/dynamic";

/**
 * The curtain-wall family drawing, fetched after the page is up.
 *
 * It is a canvas: it carries no text a search engine reads and nothing the
 * first screen needs, but its code and edge data were being parsed before the
 * page's own hero could show. Split out, the section's heading, copy and specs
 * still arrive in the server's HTML and only the drawing waits — inside a box
 * that is already sized, so arriving late moves nothing.
 */
export const LazyFamilyModels = dynamic(
  () => import("@/components/FamilyModels").then((m) => m.FamilyModels),
  { ssr: false },
);
