import type { Localized } from "@/lib/i18n/config";

export interface ArticleSummary {
  slug: string;
  category: string;
  title: string;
  leadOpinion: string;
  publishedLabel: string;
}

export interface ArticlesContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  readMore: string;
  cta: { statement: string; label: string };
  articles: ArticleSummary[];
}

export const articles: Localized<ArticlesContent> = {
  fa: {
    meta: {
      title: "بینش‌ها — آرتینکست",
      description: "یادداشت‌های میدانی درباره اتوماسیون، توسعه ابزار، BIM و آمادگی هوش مصنوعی، بدون هیاهو.",
    },
    breadcrumb: "بینش‌ها",
    intro: {
      eyebrow: "بینش‌ها",
      aside: "یادداشت‌های میدانی",
      headline: "یادداشت‌هایی کوتاه و کاربردی درباره اتوماسیون، توسعه ابزار، BIM و آمادگی هوش مصنوعی.",
      description: "بدون هیاهو؛ تمرکز روی تصمیم درست، همان تصمیمی که معمولاً کسی دوست ندارد اول بگیرد.",
    },
    readMore: "خواندن یادداشت",
    cta: {
      statement: "چالش واقعی‌ای دارید که ارزش بررسی دقیق‌تر دارد؟",
      label: "شروع گفتگو",
    },
    articles: [
      {
        slug: "aec-workflow-automation",
        category: "اتوماسیون",
        title: "اتوماسیون گردش کار AEC از کجا واقعا شروع می‌شود؟",
        leadOpinion: "سقف چیزی که ارزش خودکارسازی دارد، معمولا تست‌نشده است، نه واقعی.",
        publishedLabel: "۲۰۲۶/۰۸/۲۸",
      },
      {
        slug: "custom-parametric-revit-family-creation",
        category: "BIM و رویت",
        title: "ساخت فمیلی پارامتریک اختصاصی رویت",
        leadOpinion: "فمیلی‌ای که فقط یک‌بار در ادیتور فلکس می‌شود، هنوز ثابت نکرده کار می‌کند؛ ثابت کرده یک‌بار کار کرده.",
        publishedLabel: "۲۰۲۶/۰۸/۲۸",
      },
      {
        slug: "revit-plugin-development-cost",
        category: "BIM و رویت",
        title: "توسعه پلاگین رویت چقدر هزینه دارد؟",
        leadOpinion: "پلاگینی که فقط یک دکمه به‌نظر می‌رسد، هیچ‌وقت بر اساس همان دکمه قیمت نمی‌خورد؛ بر اساس هفته‌ها کاری قیمت می‌خورد که پشت آن دکمه پنهان شده.",
        publishedLabel: "۲۰۲۶/۰۸/۲۷",
      },
      {
        slug: "revit-model-checker",
        category: "BIM و رویت",
        title: "چک‌کننده مدل رویت QAQC را خودکار می‌کند، جایگزینش نمی‌شود",
        leadOpinion: "گزارشی که یک چک‌کننده مدل تحویل می‌دهد کار ساده‌ای است؛ چیزی که آن گزارش را قابل‌اعتماد می‌کند، همان چک‌ستی است که کسی حوصله ساختنش را نداشت.",
        publishedLabel: "۲۰۲۶/۰۸/۲۶",
      },
      {
        slug: "revit-library-optimization",
        category: "BIM و رویت",
        title: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست",
        leadOpinion: "خطرناک‌ترین مشکل یک کتابخانه رویت معمولاً بزرگ‌ترین فایل نیست؛ همان جزئیاتی است که کسی بررسی نکرده.",
        publishedLabel: "۲۰۲۶/۰۸/۱۹",
      },
    ],
  },
  en: {
    meta: {
      title: "Insights — ARTINEXT",
      description: "Practical field notes on automation, tool development, BIM, and AI readiness, no hype.",
    },
    breadcrumb: "Insights",
    intro: {
      eyebrow: "Insights",
      aside: "Field notes",
      headline: "Short, practical notes on automation, tool development, BIM, and AI readiness.",
      description: "No hype. Just the decision that matters, usually the one nobody wants to make first.",
    },
    readMore: "Read the note",
    cta: {
      statement: "Have a real challenge worth examining more closely?",
      label: "Start a project",
    },
    articles: [
      {
        slug: "aec-workflow-automation",
        category: "Automation",
        title: "Where AEC workflow automation should start",
        leadOpinion: "The ceiling on what's worth automating is usually untested, not real.",
        publishedLabel: "Aug 28, 2026",
      },
      {
        slug: "custom-parametric-revit-family-creation",
        category: "BIM & Revit",
        title: "Custom parametric Revit family creation",
        leadOpinion: "A family that only flexes once in the editor hasn't proven it works. It's proven it worked once.",
        publishedLabel: "Aug 28, 2026",
      },
      {
        slug: "revit-plugin-development-cost",
        category: "BIM & Revit",
        title: "How much does Revit plugin development cost?",
        leadOpinion: "A plugin that looks like one button was never priced by the button — it's priced by the weeks of work standing behind it.",
        publishedLabel: "Aug 27, 2026",
      },
      {
        slug: "revit-model-checker",
        category: "BIM & Revit",
        title: "A Revit model checker automates QA/QC — it doesn't replace it",
        leadOpinion: "The report a model checker hands you is the easy part. The checkset that made that report worth trusting is the part nobody wanted to build.",
        publishedLabel: "Aug 26, 2026",
      },
      {
        slug: "revit-library-optimization",
        category: "BIM & Revit",
        title: "Revit library optimization isn't about deleting files",
        leadOpinion: "The most dangerous problem in a Revit library is rarely the biggest file — it's the one detail nobody checked.",
        publishedLabel: "Aug 19, 2026",
      },
    ],
  },
};
