import type { Localized } from "@/lib/i18n/config";

export interface NavContent {
  homeLabel: string;
  links: { label: string; href: string }[];
  productsDropdown: {
    heading: string;
    items: { label: string; description: string; href: string }[];
  };
  cta: string;
  footer: {
    bannerLine: string;
    bannerCta: string;
    blurb: string;
    exploreHeading: string;
    exploreLinks: { label: string; href: string }[];
    contactHeading: string;
    consultationLabel: string;
    consultationHref: string;
    emailLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    metaLine: string;
  };
}

export const nav: Localized<NavContent> = {
  fa: {
    homeLabel: "خانه",
    links: [
      { label: "راهکارها", href: "/solutions" },
      { label: "محصولات", href: "/products" },
      { label: "تحقیق و توسعه", href: "/research-development" },
      { label: "بینش‌ها", href: "/articles" },
      { label: "درباره", href: "/about" },
    ],
    productsDropdown: {
      heading: "سه مسیر برای تبدیل مسئله‌های واقعی به ابزارهای دقیق.",
      items: [
        {
          label: "محتوای تخصصی رویت",
          description: "محتوای BIM دقیق و سبک برای مدل‌های واقعی",
          href: "/products/revit-families",
        },
        {
          label: "ابزارهای دیجیتال اختصاصی",
          description: "پلاگین‌هایی که کار تکراری را حذف می‌کنند",
          href: "/products/digital-tools",
        },
        {
          label: "اتوماسیون هوشمند",
          description: "یک جریان کنترل‌شده از درخواست تا گزارش",
          href: "/products/automation",
        },
      ],
    },
    cta: "شروع گفتگو",
    footer: {
      bannerLine: "مسئله را روشن کنیم؛ سیستم درست از دل همان روشنی بیرون می‌آید.",
      bannerCta: "شروع گفتگو",
      blurb: "سیستم‌های دیجیتال برای تیم‌هایی که دقت، شفافیت و فضای رشد را جدی می‌گیرند.",
      exploreHeading: "کاوش",
      exploreLinks: [
        { label: "راهکارها", href: "/solutions" },
        { label: "محصولات", href: "/products" },
        { label: "بینش‌ها", href: "/articles" },
        { label: "درباره ما", href: "/about" },
      ],
      contactHeading: "تماس",
      consultationLabel: "فرم مشاوره",
      consultationHref: "/contact",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      instagramLabel: "اینستاگرام",
      metaLine: "© ۲۰۲۶ آرتینکست — طراحی فناوری / ایران",
    },
  },
  en: {
    homeLabel: "Home",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Products", href: "/products" },
      { label: "R&D", href: "/research-development" },
      { label: "Insights", href: "/articles" },
      { label: "About", href: "/about" },
    ],
    productsDropdown: {
      heading: "Three paths from operational friction to precise tools.",
      items: [
        {
          label: "Specialist Revit content",
          description: "Precise, lightweight BIM content for real models",
          href: "/products/revit-families",
        },
        {
          label: "Custom digital tools",
          description: "Plugins that remove repetitive work",
          href: "/products/digital-tools",
        },
        {
          label: "Intelligent automation",
          description: "One controlled flow from request to report",
          href: "/products/automation",
        },
      ],
    },
    cta: "Start a project",
    footer: {
      bannerLine: "Get the problem clear. The right system follows.",
      bannerCta: "Start a conversation",
      blurb: "Digital systems for teams that take precision, clarity, and room to grow seriously.",
      exploreHeading: "Explore",
      exploreLinks: [
        { label: "Solutions", href: "/solutions" },
        { label: "Products", href: "/products" },
        { label: "Insights", href: "/articles" },
        { label: "About us", href: "/about" },
      ],
      contactHeading: "Contact",
      consultationLabel: "Consultation form",
      consultationHref: "/contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      metaLine: "© 2026 ARTINEXT — DESIGN TECHNOLOGY / IRAN",
    },
  },
};
