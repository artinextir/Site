import type { Locale } from "@/lib/i18n/config";

export const siteUrl = "https://artinext.ir";

// Deliberately no trailing slash: opengraph-image is Next's special image
// route convention, which next export always emits as a flat file (never
// a directory/index.html) regardless of the trailingSlash config — adding
// a slash here 404s.
export function ogImageUrl(locale: Locale): string {
  return `${siteUrl}/${locale}/opengraph-image`;
}

export function hreflangAlternates(path: string): Record<Locale | "x-default", string> {
  const suffix = path === "/" ? "" : path;
  return {
    fa: `${siteUrl}/fa${suffix}/`,
    en: `${siteUrl}/en${suffix}/`,
    // fa is defaultLocale and the primary audience — same page the bare
    // domain (app/page.tsx) renders directly.
    "x-default": `${siteUrl}/fa${suffix}/`,
  };
}

export const site = {
  name: "ARTINEXT",
  // Persian alternate names for the Organization schema's `alternateName` —
  // "ارتینکست" is the common no-madda spelling people actually type when
  // searching, since آ takes an extra keystroke most don't bother with.
  nameFa: "آرتینکست",
  nameFaAlt: "ارتینکست",
  legalLine: "ARTINEXT — DESIGN TECHNOLOGY / IRAN",
  email: "artinext.ai@gmail.com",
  phone: "+98 930 525 3240",
  phoneHref: "+989305253240",
  instagram: "@artinext.ir",
  instagramHref: "https://www.instagram.com/artinext.ir/",
  // Organization schema's `sameAs`. LinkedIn is planned but not live yet —
  // add its URL here the day it goes up, nothing else needs to change.
  sameAs: ["https://www.instagram.com/artinext.ir/"],
};
