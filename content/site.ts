import type { Locale } from "@/lib/i18n/config";

export const siteUrl = "https://artinext.ir";

export function ogImageUrl(locale: Locale): string {
  return `${siteUrl}/${locale}/opengraph-image`;
}

export function hreflangAlternates(path: string): Record<Locale, string> {
  const suffix = path === "/" ? "" : path;
  return {
    fa: `${siteUrl}/fa${suffix}`,
    en: `${siteUrl}/en${suffix}`,
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
};
