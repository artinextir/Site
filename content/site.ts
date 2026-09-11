export const siteUrl = "https://artinext.ir";

/**
 * The hero recording. Null until the asset lands, and the hero falls back to
 * the drawn section detail — so the fold is never broken by a missing file.
 *
 * Asset contract: 1920x1200, 8-12s, seamless loop, no audio track, no UI
 * chrome, and a quiet third on the text side (inline-start in en, inline-end
 * in fa) for the headline to sit on. Poster is the FINAL frame, so the
 * no-JS / reduced-motion path still shows the finished model.
 */
export const heroMedia: {
  mp4: string;
  webm?: string;
  poster: string;
} | null = null;

export const site = {
  name: "ARTINEXT",
  nameFa: "آرتینکست",
  nameFaAlt: "ارتینکست",
  legalLine: "ARTINEXT — DESIGN TECHNOLOGY / IRAN",
  /** Footer line, in English on both locales. */
  motto: "advanced research & technology innovation for the next generation",
  email: "artinext.ai@gmail.com",
  phone: "+98 930 525 3240",
  phoneHref: "+989305253240",
  instagram: "@artinext.ir",
  instagramHref: "https://www.instagram.com/artinext.ir/",
  sameAs: ["https://www.instagram.com/artinext.ir/"],
};
