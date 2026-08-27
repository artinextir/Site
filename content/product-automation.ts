import type { Localized } from "@/lib/i18n/config";
import type { ProductSubpageContent } from "@/content/product-revit-families";

export const productAutomation: Localized<ProductSubpageContent> = {
  fa: {
    meta: {
      title: "اتوماسیون هوشمند — آرتینکست",
      description:
        "اتوماسیون جریان کار، یکپارچه‌سازی نرم‌افزار و داده، داشبورد عملیاتی و دستیار هوش مصنوعی سازمانی.",
    },
    breadcrumb: "اتوماسیون هوشمند",
    step: "۰۳ / ۰۳",
    intro: {
      eyebrow: "اتوماسیون",
      aside: "۰۳ از ۰۳",
      headline: "اتوماسیونی که فرایند را ساده‌تر می‌کند، نه پیچیده‌تر.",
      description:
        "از درخواست تا اجرا تا گزارش‌دهی، همه در یک جریان کنترل‌شده؛ اتوماسیون کارها را جابه‌جا می‌کند، کنترل دست تیم شما می‌ماند.",
    },
    collections: [
      { title: "اتوماسیون جریان کار", description: "مراحل تکراری تأیید، ارجاع و پیگیری را به یک جریان واحد تبدیل می‌کنیم." },
      { title: "یکپارچه‌سازی نرم‌افزار و داده", description: "نرم‌افزارهای پراکنده شما را از طریق داده متصل می‌کنیم." },
      { title: "داشبورد عملیاتی", description: "وضعیت واقعی کار را در یک تصویر زنده و قابل‌تصمیم‌گیری نشان می‌دهیم." },
      { title: "دستیار هوش مصنوعی سازمانی", description: "دستیاری که به داده و مستندات شما مسلط است، در چارچوبی کنترل‌شده." },
    ],
    cta: {
      statement: "پیش از سرمایه‌گذاری روی ابزار اشتباه، نقطه شروع درست را پیدا کنید.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "Intelligent automation — ARTINEXT",
      description:
        "Workflow automation, software and data integration, operational dashboards, and organizational AI assistants.",
    },
    breadcrumb: "Intelligent automation",
    step: "03 / 03",
    intro: {
      eyebrow: "Automation",
      aside: "03 of 03",
      headline: "Automation that makes the process simpler, not more complicated.",
      description:
        "From request to execution to reporting, in one controlled flow. Automation moves things; control stays with the team.",
    },
    collections: [
      { title: "Workflow automation", description: "We turn repetitive approval, routing, and follow-up steps into one flow." },
      { title: "Software & data integration", description: "We connect your scattered software through shared data." },
      { title: "Operational dashboards", description: "A live, decision-ready picture of the real state of the work." },
      { title: "Organizational AI assistants", description: "An assistant fluent in your data and documentation, inside a controlled boundary." },
    ],
    cta: {
      statement: "Find the right starting point before investing in the wrong tool.",
      label: "Start a project",
    },
  },
};
