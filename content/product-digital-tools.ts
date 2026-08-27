import type { Localized } from "@/lib/i18n/config";
import type { ProductSubpageContent } from "@/content/product-revit-families";

export const productDigitalTools: Localized<ProductSubpageContent> = {
  fa: {
    meta: {
      title: "ابزارهای دیجیتال اختصاصی — آرتینکست",
      description:
        "پلاگین سفارشی، کنترل کیفیت مدل، مدیریت خروجی و ابزار داده؛ ابزارهایی که کار روزانه تیم شما را می‌شناسند.",
    },
    breadcrumb: "ابزارهای دیجیتال اختصاصی",
    step: "۰۲ / ۰۳",
    intro: {
      eyebrow: "ابزار دیجیتال",
      aside: "۰۲ از ۰۳",
      headline: "کلیک کمتر. خطای کمتر. تمرکز بیشتر روی کاری که واقعاً اهمیت دارد.",
      description:
        "ابزاری متناسب با روش واقعی کار تیم شما، که پیش از توسعه، بررسی و مطالعه شده است.",
    },
    collections: [
      { title: "پلاگین سفارشی", description: "برای رویت یا نرم‌افزارهای دیگر تیم شما، متناسب با فرایند واقعی." },
      { title: "کنترل کیفیت مدل", description: "بررسی خودکار مدل برای خطاهای رایج، پیش از رسیدن به مرحله تحویل." },
      { title: "مدیریت خروجی", description: "تولید و سازمان‌دهی خودکار خروجی‌ها، بدون کار دستی تکراری." },
      { title: "ابزار داده", description: "استخراج، پاک‌سازی و اتصال داده میان فایل‌ها و نرم‌افزارهای مختلف." },
    ],
    cta: {
      statement: "اگر تیم شما هر روز کاری را تکرار می‌کند، احتمالاً ابزاری برای ساختن وجود دارد.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "Custom digital tools — ARTINEXT",
      description:
        "Custom plugins, model quality control, output management, and data tools built around how your team actually works.",
    },
    breadcrumb: "Custom digital tools",
    step: "02 / 03",
    intro: {
      eyebrow: "Digital tools",
      aside: "02 of 03",
      headline: "Fewer clicks. Fewer errors. More focus on the work that actually matters.",
      description: "A tool shaped around how your team actually works, studied before we build anything.",
    },
    collections: [
      { title: "Custom plugins", description: "For Revit or other software your team uses, built around the real process." },
      { title: "Model quality control", description: "Automatic checks for common errors before a model reaches delivery." },
      { title: "Output management", description: "Automatic generation and organization of outputs, no repeat manual work." },
      { title: "Data tools", description: "Extracting, cleaning, and connecting data across files and software." },
    ],
    cta: {
      statement: "If your team repeats it every day, there is probably a tool worth building.",
      label: "Start a project",
    },
  },
};
