import type { Localized } from "@/lib/i18n/config";

export interface HomeContent {
  meta: { title: string; description: string };
  // Optional: the homepage itself is the root and doesn't need one. A page
  // sharing this shape one level deep (e.g. a local-SEO landing page) should
  // set this for breadcrumb nav + BreadcrumbList schema.
  breadcrumb?: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    visualLabel: string;
    visualTag: string;
  };
  markers: { title: string; description: string }[];
  marquee: string[];
  statement: {
    kicker: string;
    headline: string;
    frictions: { title: string; description: string }[];
  };
  productsTeaser: {
    heading: string;
    linkLabel: string;
  };
  process: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  fieldNoteTeaser: {
    kicker: string;
    title: string;
    linkLabel: string;
    href: string;
  };
}

export const home: Localized<HomeContent> = {
  fa: {
    meta: {
      title: "آرتینکست — سیستم‌های دیجیتال برای تیم‌های فنی",
      description:
        "آرتینکست جایی از کار شما را پیدا می‌کند که واقعاً گیر دارد و سیستم روشنی برایش می‌سازد: محتوای BIM، ابزار اختصاصی و اتوماسیون هماهنگ با کار واقعی شما.",
    },
    hero: {
      eyebrow: "آرتینکست / طراحی فناوری",
      headline: "اول می‌فهمیم؛ بعد می‌سازیم.",
      subhead:
        "برای تیم‌های فنی، خودِ جریان کار را دقیق‌تر می‌کنیم: محتوای BIM، ابزار اختصاصی و اتوماسیونی که با کار واقعی شما هماهنگ است.",
      ctaPrimary: "شروع گفتگو",
      ctaSecondary: "مشاهده راهکارها",
      visualLabel: "مدل. منطق. جریان.",
      visualTag: "۳۵.۶۸۹۲° شمالی، ۵۱.۳۸۹۰° شرقی — تهران",
    },
    markers: [
      { title: "سه مسیر محصول", description: "محتوای BIM، ابزار اختصاصی و اتوماسیون؛ هرکدام برای یک مسئله مشخص." },
      { title: "فرایند چهار مرحله‌ای", description: "کشف، تعریف، ساخت، تکامل." },
      { title: "فارسی / انگلیسی", description: "مستندسازی و تحویل به هر دو زبان." },
      { title: "ایران / ریموت", description: "تیم مستقر در ایران، همکاری کاملاً ریموت." },
    ],
    marquee: ["محتوای BIM", "ابزار اختصاصی", "اتوماسیون", "سیستم‌های داده"],
    statement: {
      kicker: "فناوری نقطه شروع ما نیست.",
      headline: "از همان نقطه‌ای شروع می‌کنیم که کار شما کند، پرخطا یا نامرئی می‌شود.",
      frictions: [
        {
          title: "کار دستی و تکراری",
          description: "کارهای روزمره‌ای که با هر تکرار، خطر خطا در آن‌ها بیشتر می‌شود.",
        },
        {
          title: "داده‌ای که هیچ‌جا کامل نیست",
          description: "داده پخش‌شده میان فایل‌ها، افراد و نرم‌افزارهای مختلف که تصمیم‌گیری را کند می‌کند.",
        },
        {
          title: "ابزارهایی که با هم حرف نمی‌زنند",
          description: "هر ابزار به‌تنهایی خوب کار می‌کند، اما هرگز یک جریان واحد و قابل‌ردیابی نمی‌سازند.",
        },
      ],
    },
    productsTeaser: {
      heading: "سه مسیر. یک استاندارد.",
      linkLabel: "مشاهده جزئیات",
    },
    process: {
      heading: "چطور کار می‌کنیم",
      steps: [
        { title: "کشف", description: "جریان کار فعلی، جایی که کار گیر می‌کند و داده‌های موجود را با هم بررسی می‌کنیم." },
        { title: "تعریف", description: "مسئله را به بخش‌های قابل‌حل تقسیم می‌کنیم و دامنه دقیق کار را مشخص می‌کنیم." },
        { title: "ساخت", description: "نسخه اول را می‌سازیم و در کنار کار واقعی شما آزمایش می‌کنیم." },
        { title: "تکامل", description: "بر اساس داده استفاده واقعی، سیستم را اصلاح و گسترش می‌دهیم." },
      ],
    },
    fieldNoteTeaser: {
      kicker: "یادداشت میدانی",
      title: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست.",
      linkLabel: "خواندن یادداشت",
      href: "/articles/revit-library-optimization",
    },
  },
  en: {
    meta: {
      title: "ARTINEXT — Digital systems for technical teams",
      description:
        "ARTINEXT finds exactly where your work gets stuck and builds the clear system for it: BIM content, custom tools, and automation built around the work you already do.",
    },
    hero: {
      eyebrow: "ARTINEXT / DESIGN TECHNOLOGY",
      headline: "We build after we understand. Not before.",
      subhead:
        "For technical teams we sharpen the workflow itself: BIM content, custom tools, and automation built around the work you already do.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore solutions",
      visualLabel: "MODEL. LOGIC. FLOW.",
      visualTag: "35.6892° N, 51.3890° E — Tehran",
    },
    markers: [
      { title: "Three product paths", description: "BIM content, custom tools, and automation, each solving one specific problem." },
      { title: "Four-stage process", description: "Discover, define, build, evolve." },
      { title: "FA / EN", description: "Documentation and delivery in both languages." },
      { title: "Iran / Remote", description: "Team based in Iran, fully remote collaboration." },
    ],
    marquee: ["BIM CONTENT", "CUSTOM TOOLS", "AUTOMATION", "DATA SYSTEMS"],
    statement: {
      kicker: "Technology is not where we start.",
      headline: "We start exactly where your work slows down, breaks, or disappears from view.",
      frictions: [
        {
          title: "Manual, repeat work",
          description: "Daily busywork that gets riskier with every repetition.",
        },
        {
          title: "Data that lives nowhere whole",
          description: "Scattered across files, people, and software, slowing every decision.",
        },
        {
          title: "Tools that don't talk to each other",
          description: "Each one fine alone, never one traceable flow together.",
        },
      ],
    },
    productsTeaser: {
      heading: "Three paths. One standard.",
      linkLabel: "View details",
    },
    process: {
      heading: "How we work",
      steps: [
        { title: "Discover", description: "We look at your current workflow, where the work actually gets stuck, and the data you already have." },
        { title: "Define", description: "We break the problem into solvable parts and set an exact scope." },
        { title: "Build", description: "We build a first version and test it against your real work." },
        { title: "Evolve", description: "We refine and extend the system based on real usage data." },
      ],
    },
    fieldNoteTeaser: {
      kicker: "Field note",
      title: "Revit library optimization isn't about deleting files.",
      linkLabel: "Read the note",
      href: "/articles/revit-library-optimization",
    },
  },
};
