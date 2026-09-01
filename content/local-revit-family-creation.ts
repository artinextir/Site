import type { Localized } from "@/lib/i18n/config";
import type { HomeContent } from "@/content/home";

export const localRevitFamilyCreation: Localized<HomeContent> = {
  fa: {
    meta: {
      title: "ساخت فمیلی رویت — آرتینکست",
      description:
        "ساخت و توسعه فمیلی اختصاصی رویت برای تولیدکنندگان، دفاتر معماری و تیم‌های MEP در سراسر ایران؛ محتوای BIM دقیق و سبک، هماهنگ با استاندارد واقعی محصول یا پروژه شما.",
    },
    breadcrumb: "ساخت فمیلی رویت",
    hero: {
      eyebrow: "آرتینکست / ایران",
      headline: "پیش از ساخت فمیلی رویت، محصول یا پروژه شما را می‌فهمیم.",
      subhead:
        "ساخت، توسعه یا طراحی فمیلی رویت — هرچه صدایش کنید، برای تولیدکنندگان، دفاتر معماری و تیم‌های سازه و MEP، محتوای BIM دقیق و سبک می‌سازیم که با استاندارد واقعی محصول یا پروژه شما هماهنگ است، نه یک فمیلی عمومی دانلودی.",
      ctaPrimary: "شروع گفتگو",
      ctaSecondary: "مشاهده راهکارها",
      visualLabel: "فمیلی. رویت. اختصاصی.",
      visualTag: "۳۵.۶۸۹۲° شمالی، ۵۱.۳۸۹۰° شرقی — تهران",
    },
    markers: [
      { title: "ایران / ریموت", description: "تیم مستقر در ایران، همکاری کاملاً ریموت با هر شهر." },
      { title: "فمیلی اختصاصی رویت", description: "طراحی و ساخته‌شده برای استاندارد محصول یا دفتر شما، نه یک فمیلی عمومی دانلودی." },
      { title: "فرایند چهار مرحله‌ای", description: "کشف، تعریف، ساخت، تکامل." },
      { title: "فارسی / انگلیسی", description: "مستندسازی و تحویل به هر دو زبان." },
    ],
    marquee: ["ساخت فمیلی رویت", "طراحی فمیلی پروژه", "توسعه فمیلی محصول", "استانداردسازی کتابخانه رویت"],
    statement: {
      kicker: "یک فمیلی دانلودی، جواب استاندارد دفتر یا محصول شما نیست.",
      headline: "دقیقاً از همان‌جایی شروع می‌کنیم که یک فمیلی عمومی، محصول یا پروژه شما را درست طراحی نمی‌کند.",
      frictions: [
        {
          title: "فمیلی دانلودی که با پروژه واقعی جور درنمی‌آید",
          description: "هندسه سنگین، پارامتر بی‌مصرف یا استایلی که استاندارد دفتر شما را دنبال نمی‌کند.",
        },
        {
          title: "کاتالوگ محصولی که هنوز BIM نیست",
          description: "ابعاد و تنوع محصول شما هنوز به یک فمیلی رویت قابل‌استفاده در طراحی تبدیل نشده.",
        },
        {
          title: "دانشی که فقط دست یک نفر است",
          description: "فقط یک نفر می‌داند فمیلی درست چطور ساخته می‌شود؛ بقیه تیم دوباره از صفر شروع می‌کنند.",
        },
      ],
    },
    productsTeaser: {
      heading: "سه مسیر. یک استاندارد.",
      linkLabel: "مشاهده جزئیات",
    },
    process: {
      heading: "چطور یک فمیلی رویت توسعه می‌دهیم",
      steps: [
        { title: "کشف", description: "کاتالوگ محصول یا استاندارد فعلی دفتر شما و نمونه فایل‌های موجود را بررسی می‌کنیم." },
        { title: "تعریف", description: "سطح جزئیات (LOD)، پارامترها و نحوه استفاده نهایی فمیلی را مشخص می‌کنیم." },
        { title: "ساخت", description: "نسخه اول فمیلی را می‌سازیم و داخل یک مدل واقعی رویت تست می‌کنیم." },
        { title: "تکامل", description: "بر اساس بازخورد واقعی تیم طراحی، فمیلی را اصلاح و تکمیل می‌کنیم." },
      ],
    },
    fieldNoteTeaser: {
      kicker: "یادداشت میدانی",
      title: "ساخت فمیلی پارامتریک اختصاصی رویت",
      linkLabel: "خواندن یادداشت",
      href: "/articles/custom-parametric-revit-family-creation",
    },
  },
  en: {
    meta: {
      title: "Revit Family Creation — ARTINEXT",
      description:
        "Custom Revit family creation and development for manufacturers, architecture, and MEP firms — precise, lightweight BIM content matched to your real product or project standard.",
    },
    breadcrumb: "Revit Family Creation",
    hero: {
      eyebrow: "ARTINEXT",
      headline: "We understand your product before we build the Revit family.",
      subhead:
        "Call it Revit family creation, development, or design — for manufacturers, architecture offices, and structural and MEP teams, we build precise, lightweight BIM content matched to your actual product or project standard, not a generic downloaded family.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore solutions",
      visualLabel: "FAMILY. REVIT. CUSTOM.",
      visualTag: "35.6892° N, 51.3890° E — Tehran",
    },
    markers: [
      { title: "Iran / Remote", description: "Team based in Iran, fully remote collaboration." },
      { title: "Custom Revit family", description: "Designed and built for your product or office standard, not a generic downloaded family." },
      { title: "Four-stage process", description: "Discover, define, build, evolve." },
      { title: "FA / EN", description: "Documentation and delivery in both languages." },
    ],
    marquee: ["REVIT FAMILY CREATION", "PROJECT FAMILY DESIGN", "PRODUCT FAMILY DEVELOPMENT", "REVIT LIBRARY STANDARDIZATION"],
    statement: {
      kicker: "A downloaded family isn't a match for your office or product standard.",
      headline: "We start exactly where a generic family stops being good enough for your product or project.",
      frictions: [
        {
          title: "Downloaded families that don't fit the real project",
          description: "Heavy geometry, unused parameters, or a style that doesn't follow your office standard.",
        },
        {
          title: "A product catalog that isn't BIM yet",
          description: "Your product's dimensions and variants haven't become a family designers can actually use.",
        },
        {
          title: "Knowledge stuck with one person",
          description: "Only one person knows how the family should really be built; the rest of the team starts over from scratch.",
        },
      ],
    },
    productsTeaser: {
      heading: "Three paths. One standard.",
      linkLabel: "View details",
    },
    process: {
      heading: "How we develop a Revit family",
      steps: [
        { title: "Discover", description: "We review your product catalog or office standard and any existing sample files." },
        { title: "Define", description: "We set the level of detail (LOD), parameters, and how the family will actually be used." },
        { title: "Build", description: "We build a first version and test it inside a real Revit model." },
        { title: "Evolve", description: "We refine the family based on real feedback from the design team." },
      ],
    },
    fieldNoteTeaser: {
      kicker: "Field note",
      title: "Custom parametric Revit family creation",
      linkLabel: "Read the note",
      href: "/articles/custom-parametric-revit-family-creation",
    },
  },
};
