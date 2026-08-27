import type { Localized } from "@/lib/i18n/config";

export interface ProductSubpageContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  step: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  collections: { title: string; description: string }[];
  cta: { statement: string; label: string };
}

export const productRevitFamilies: Localized<ProductSubpageContent> = {
  fa: {
    meta: {
      title: "محتوای تخصصی رویت — آرتینکست",
      description:
        "محتوای BIM دقیق و سبک برای مدل‌های واقعی: فمیلی محصول، کتابخانه دفتر، فمیلی پروژه و بهینه‌سازی کتابخانه.",
    },
    breadcrumb: "محتوای تخصصی رویت",
    step: "۰۱ / ۰۳",
    intro: {
      eyebrow: "محتوای BIM",
      aside: "۰۱ از ۰۳",
      headline: "فمیلی‌ای که فقط خوب طراحی نشده؛ داخل مدل واقعی هم درست رفتار می‌کند.",
      description:
        "محصول شما را برای جریان طراحی واقعی آماده می‌کنیم؛ هندسه، پارامتر، متریال و گرافیک در یک آبجکت کنترل‌شده کنار هم قرار می‌گیرند.",
    },
    collections: [
      {
        title: "فمیلی محصول",
        description: "برای تولیدکنندگانی که می‌خواهند محصولشان در کتابخانه طراحان با استاندارد بالا حاضر باشد.",
      },
      {
        title: "کتابخانه دفتر",
        description: "برای تیم‌های طراحی که به یک کتابخانه یکدست و قابل‌اتکا برای کار روزانه نیاز دارند.",
      },
      {
        title: "فمیلی پروژه",
        description: "برای یک پروژه مشخص، هماهنگ با سطح جزئیات (LOD) مورد نیاز همان پروژه.",
      },
      {
        title: "بهینه‌سازی کتابخانه",
        description: "کتابخانه‌های پراکنده و ناهماهنگ موجود را پاک‌سازی و استاندارد می‌کنیم.",
      },
    ],
    cta: {
      statement: "محتوا را از روی کاتالوگ، استاندارد یا نمونه‌های فعلی شما توسعه می‌دهیم.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "Specialist Revit content — ARTINEXT",
      description:
        "Precise, lightweight BIM content for real models: product families, office libraries, project families, and library optimization.",
    },
    breadcrumb: "Specialist Revit content",
    step: "01 / 03",
    intro: {
      eyebrow: "BIM content",
      aside: "01 of 03",
      headline: "A family that isn't just well-drawn. It behaves correctly inside a real model.",
      description:
        "We get your product ready for real design workflows: geometry, parameters, materials, and graphics combined in one controlled object.",
    },
    collections: [
      {
        title: "Product families",
        description: "For manufacturers who want their product to meet a high standard inside designers' libraries.",
      },
      {
        title: "Office libraries",
        description: "For design teams who need one consistent, reliable library for daily work.",
      },
      {
        title: "Project families",
        description: "For a specific project, aligned to the level of detail (LOD) that project actually needs.",
      },
      {
        title: "Library optimization",
        description: "We clean up and standardize existing libraries that have grown fragmented.",
      },
    ],
    cta: {
      statement: "We develop content from your catalog, standards, or existing samples.",
      label: "Start a project",
    },
  },
};
