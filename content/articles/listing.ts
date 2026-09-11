import type { Locale, Localized } from "@/lib/i18n/config";
import { articlePages } from "@/content/articles/registry";

/**
 * One entry in the index.
 *
 * `views` and `week` are what the "most viewed" and "hot" orderings sort on.
 * There is no counter yet (see `lib/views.ts`), so they start at zero and the
 * index hides both the figures and the two orderings built on them — a seeded
 * number next to a real article would be an invented statistic.
 */
export type ArticleCard = {
  slug: string;
  title: string;
  description: string;
  /** ISO date. Formatted per locale at render — Persian gets a Jalali date. */
  date: string;
  views: number;
  /** Views in the last seven days. What the "hot" tab sorts on. */
  week: number;
};

export type ArticleTab = "recent" | "viewed" | "hot";

export type ArticlesContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  index: {
    eyebrow: string;
    title: string;
    tabsLabel: string;
    tabs: Record<ArticleTab, string>;
    /** Screen-reader names for the pager. */
    prev: string;
    next: string;
    /**
     * Templates, not functions: this object is handed to a client component
     * from a server page, and a function cannot cross that boundary. `{n}`
     * and `{total}` are filled with locale digits at render.
     */
    pageOf: string;
    views: string;
    empty: string;
  };
  /** The article page's own furniture, shared by every post. */
  article: {
    breadcrumbLabel: string;
    home: string;
    published: string;
    updated: string;
    backToTop: string;
    /** The closing band reuses the home CTA; its number would be the home page's. */
    ctaEyebrow: string;
  };
  articles: ArticleCard[];
};

/** The index lists exactly what the registry publishes — nothing to keep in step by hand. */
function cards(locale: Locale): ArticleCard[] {
  return articlePages.map(({ content }) => {
    const a = content[locale];
    return {
      slug: a.slug,
      title: a.title,
      description: a.leadOpinion,
      date: a.updatedAt ?? a.publishedAt,
      views: 0,
      week: 0,
    };
  });
}

export const articles: Localized<ArticlesContent> = {
  fa: {
    meta: {
      title: "بینش‌ها، نوشته‌های آرتینکست درباره‌ی رویت، BIM و اتوماسیون",
      description:
        "نوشته‌هایی درباره‌ی ساخت پلاگین رویت، کنترل کیفیت مدل، بهینه‌سازی کتابخانه و هوشمندسازی فرآیند کاری در تیم‌های معماری، سازه و تأسیسات.",
    },
    breadcrumb: "بینش‌ها",
    hero: {
      eyebrow: "بینش‌ها",
      title: "پرسش‌هایی که در جلسه‌ها تکرار می‌شوند.",
      lead: "هر پرسشی که چند بار از سوی تیم‌های مختلف مطرح شود، ارزش نوشتن دارد. هر نوشته به یک پرسش مشخص پاسخ می‌دهد، حتی اگر پاسخ این باشد که کاری نباید انجام شود.",
    },
    index: {
      eyebrow: "۰۱، نوشته‌ها",
      title: "فهرست",
      tabsLabel: "ترتیب نمایش",
      tabs: { recent: "تازه‌ترین", viewed: "پربازدید", hot: "داغ" },
      prev: "صفحه‌ی قبل",
      next: "صفحه‌ی بعد",
      pageOf: "{n} از {total}",
      views: "{n} بازدید",
      empty: "هنوز نوشته‌ای منتشر نشده است.",
    },
    article: {
      breadcrumbLabel: "مسیر صفحه",
      home: "خانه",
      published: "انتشار:",
      updated: "به‌روزرسانی:",
      backToTop: "بازگشت به بالا",
      ctaEyebrow: "قدم بعدی",
    },
    articles: cards("fa"),
  },
  en: {
    meta: {
      title: "Insights, writing on Revit, BIM and workflow automation | ARTINEXT",
      description:
        "Writing on Revit plugin development, model quality control, library optimization, and workflow automation for architecture, structural and MEP teams.",
    },
    breadcrumb: "Insights",
    hero: {
      eyebrow: "Insights",
      title: "The things that keep coming up in meetings.",
      lead: "Any question asked enough times, by enough different teams, is worth writing down. Each piece answers one specific question, and where the answer is that something shouldn't be done, that's what gets written.",
    },
    index: {
      eyebrow: "01, Writing",
      title: "The index",
      tabsLabel: "Sort order",
      tabs: { recent: "Recent", viewed: "Most viewed", hot: "Hot topics" },
      prev: "Previous page",
      next: "Next page",
      pageOf: "{n} of {total}",
      views: "{n} views",
      empty: "Nothing published yet.",
    },
    article: {
      breadcrumbLabel: "Breadcrumb",
      home: "Home",
      published: "Published",
      updated: "Updated",
      backToTop: "Back to top",
      ctaEyebrow: "Next step",
    },
    articles: cards("en"),
  },
};
