import type { Localized } from "@/lib/i18n/config";

export interface ProductSummary {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface ProductsContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  products: ProductSummary[];
  principle: string;
  linkLabel: string;
  cta: { statement: string; label: string };
}

export const products: Localized<ProductsContent> = {
  fa: {
    meta: {
      title: "محصولات آرتینکست — محتوای BIM، ابزار دیجیتال، اتوماسیون",
      description:
        "سه مسیر محصول آرتینکست: محتوای تخصصی رویت، ابزارهای دیجیتال اختصاصی و اتوماسیون هوشمند، هرکدام برای یک مسئله مشخص طراحی شده‌اند.",
    },
    breadcrumb: "محصولات",
    intro: {
      eyebrow: "محصولات",
      aside: "سه مسیر، یک استاندارد",
      headline: "محصولی که با جریان کار شما هماهنگ است، نه برعکس.",
      description:
        "هر محصول برای حل یک مسئله مشخص ساخته شده است: محتوایی دقیق‌تر، اجرایی سریع‌تر، یا فرایندی قابل‌کنترل و قابل‌توسعه.",
    },
    products: [
      {
        eyebrow: "محتوای BIM",
        title: "محتوای تخصصی رویت",
        description:
          "از داده محصول و استاندارد پروژه، محتوای BIM دقیق و سبک می‌سازیم که در مدل واقعی درست رفتار می‌کند.",
        tags: ["فمیلی محصول", "کتابخانه دفتر", "فمیلی سفارشی"],
        href: "/products/revit-families",
      },
      {
        eyebrow: "ابزار دیجیتال",
        title: "ابزارهای دیجیتال اختصاصی",
        description: "ابزارهایی که کار تکراری را حذف می‌کنند، خطا را کم می‌کنند و خروجی را استاندارد می‌سازند.",
        tags: ["پلاگین رویت", "ابزار داده", "جریان کار سفارشی"],
        href: "/products/digital-tools",
      },
      {
        eyebrow: "اتوماسیون",
        title: "اتوماسیون هوشمند",
        description:
          "سیستم‌های متصلی که جریان کار، داده، درخواست و گزارش‌دهی را در یک نقطه مدیریت می‌کنند.",
        tags: ["جریان کار", "یکپارچه‌سازی", "داشبورد"],
        href: "/products/automation",
      },
    ],
    principle:
      "پاسخ آماده را به شما تحمیل نمی‌کنیم. محصول را بر اساس داده و جریان کار واقعی شما می‌سازیم.",
    linkLabel: "مشاهده جزئیات",
    cta: {
      statement: "مسئله را کوتاه و دقیق بنویسید؛ قدم بعدی را با هم روشن می‌کنیم.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "ARTINEXT Products — BIM content, digital tools, automation",
      description:
        "Three ARTINEXT product paths: specialist Revit content, custom digital tools, and intelligent automation, each built to remove one specific friction.",
    },
    breadcrumb: "Products",
    intro: {
      eyebrow: "Products",
      aside: "Three paths, one standard",
      headline: "Products shaped around your workflow, not the other way around.",
      description:
        "Each product solves one specific friction: sharper content, faster execution, or a process you can control and extend.",
    },
    products: [
      {
        eyebrow: "BIM content",
        title: "Specialist Revit content",
        description:
          "We turn product data and project standards into precise, lightweight BIM content that behaves correctly inside a real model.",
        tags: ["Product BIM", "Office library", "Custom family"],
        href: "/products/revit-families",
      },
      {
        eyebrow: "Digital tools",
        title: "Custom digital tools",
        description: "Tools that remove repetitive work, cut error rates, and standardize output.",
        tags: ["Revit plugin", "Data tools", "Custom workflow"],
        href: "/products/digital-tools",
      },
      {
        eyebrow: "Automation",
        title: "Intelligent automation",
        description:
          "Connected systems that manage workflow, data, requests, and reporting from one place.",
        tags: ["Workflow", "Integration", "Dashboard"],
        href: "/products/automation",
      },
    ],
    principle: "We don't force a ready-made answer. We build the product around your real data and workflow.",
    linkLabel: "View details",
    cta: {
      statement: "Write the problem down, short and specific. We'll figure out the next step together.",
      label: "Start a project",
    },
  },
};
