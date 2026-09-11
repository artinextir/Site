import type { Localized } from "@/lib/i18n/config";

/**
 * The shape of one article, per locale.
 *
 * Ported from V2's `article-types.ts`, minus the legacy `advice` body that only
 * the three original V2 posts used — every V3 article is `sections`.
 *
 * Internal links, both inline `[label](/path/)` markup and `internalLinks`,
 * are written locale-free (`/revit-plugin-development/`); the page prefixes the
 * reader's locale. External links are absolute and open in a new tab.
 */
export interface ArticleImage {
  src: string;
  /** ~640w variant, same aspect ratio as `src`. */
  srcSmall?: string;
  /** ~960w variant, so a high-DPR phone doesn't jump straight to 1200w. */
  srcMedium?: string;
  alt: string;
  width: number;
  height: number;
}

export interface ArticleList {
  ordered?: boolean;
  items: string[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  image?: ArticleImage;
  /** Paragraph text. Supports inline `**bold**` and `[label](/href)` markup. */
  paragraphs: string[];
  list?: ArticleList;
  /** Paragraphs that follow the list, when a section closes on a line of its own. */
  after?: string[];
}

export interface ArticleContent {
  slug: string;
  meta: { title: string; description: string };
  /**
   * The primary keyword first, then the cluster. Written into the
   * BlogPosting JSON-LD, and read back by `scripts/verify-seo.mjs` to check the
   * H1 and the opening words actually carry the primary.
   */
  keywords: string[];
  breadcrumb: string;
  category: string;
  title: string;
  leadOpinion: string;
  /** ISO date. Formatted per locale at render — Persian gets a Jalali date. */
  publishedAt: string;
  /** Set only when the post is substantively revised after first publishing. */
  updatedAt?: string;
  author: {
    name: string;
    role: string;
    bio?: string;
    /** Locale-free path to the author's page, e.g. "/about/". */
    href?: string;
  };
  tocHeading: string;
  toc: { id: string; label: string }[];
  /** Paragraphs separated by a blank line. */
  intro: string;
  heroImage?: ArticleImage;
  sections: ArticleSection[];
  conclusionHeading: string;
  conclusion: string;
  internalHeading: string;
  internalLinks: { label: string; href: string }[];
  externalHeading: string;
  externalLinks: { label: string; href: string }[];
  faqHeading: string;
  faq: { question: string; answer: string }[];
}

export interface ArticlePage {
  slug: string;
  content: Localized<ArticleContent>;
}
