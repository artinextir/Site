export interface ArticleImage {
  src: string;
  /** Smaller (~640w) variant for the srcset — same aspect ratio as `src`. */
  srcSmall?: string;
  /** Mid-size (~960w) variant — fills the gap so high-DPR mobile viewports
   * don't overshoot straight to the full 1200w file. */
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
}

export interface ArticleContent {
  slug: string;
  meta: { title: string; description: string };
  breadcrumb: string;
  category: string;
  title: string;
  leadOpinion: string;
  publishedAt: string;
  publishedLabel: string;
  /** Set when the post has been substantively revised after first publishing. */
  updatedAt?: string;
  updatedLabel?: string;
  author: {
    name: string;
    role: string;
    /** One-line credential/bio shown in the byline. */
    bio?: string;
    /** Path to the author's dedicated page, e.g. "/about". */
    href?: string;
  };
  tocHeading: string;
  toc: { id: string; label: string }[];
  intro: string;
  heroImage?: ArticleImage;
  /** Legacy short-form body: a single heading over a numbered list of items. */
  adviceHeading?: string;
  advice?: { title: string; description: string }[];
  /** Long-form body: an ordered list of H2 sections, each with its own optional image. */
  sections?: ArticleSection[];
  conclusion: string;
  internalHeading: string;
  internalLinks: { label: string; href: string }[];
  externalHeading: string;
  externalLinks: { label: string; href: string }[];
  faqHeading: string;
  faq: { question: string; answer: string }[];
}
