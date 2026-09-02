import type { Localized } from "@/lib/i18n/config";

export interface ResearchDevelopmentContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  feature: {
    tag: string;
    headline: string;
    description: string;
  };
  principles: { title: string; description: string }[];
  cta: { statement: string; label: string };
}

export const researchDevelopment: Localized<ResearchDevelopmentContent> = {
  fa: {
    meta: {
      title: "تحقیق و توسعه: نمونه اولیه سریع — آرتینکست",
      description:
        "پیش از سرمایه‌گذاری کامل، ایده را با نمونه اولیه سریع آزمایش می‌کنیم؛ نمونه‌سازی مرحله‌ای نشان می‌دهد چه چیزی کار می‌کند و چه چیزی اصلاً نباید ساخته شود.",
    },
    breadcrumb: "تحقیق و توسعه",
    intro: {
      eyebrow: "تحقیق و توسعه",
      aside: "ایده تا استفاده واقعی",
      headline: "بین یک ایده خوب و استفاده واقعی از آن، فاصله کمی می‌گذاریم.",
      description:
        "فناوری جدید فقط زمانی وارد محصول می‌شود که مسئله، داده و معیار موفقیت آن روشن و قابل‌آزمایش باشد.",
    },
    feature: {
      tag: "سیستم تکرار R&D",
      headline: "نمونه اولیه کوچک. یادگیری سریع. تصمیم بهتر.",
      description:
        "نمونه‌سازی مرحله‌ای نشان می‌دهد چه چیزی کار می‌کند، چه چیزی باید تغییر کند و چه چیزی اصلاً نباید ساخته شود؛ پیش از سرمایه‌گذاری کامل.",
    },
    principles: [
      { title: "تست پیش از توسعه کامل", description: "قبل از ساخت نسخه نهایی، فرضیه را با یک نمونه کوچک می‌سنجیم." },
      { title: "یادگیری از استفاده واقعی", description: "داده استفاده واقعی را بر فهرست ویژگی‌ها ترجیح می‌دهیم." },
      { title: "ساخت دانش قابل‌استفاده مجدد", description: "هر پروژه استاندارد و داده‌ای قابل‌استفاده مجدد بر جای می‌گذارد." },
    ],
    cta: {
      statement: "ایده‌ای دارید که ارزش آزمایش دارد؟ آزمایش درست را با هم تعریف می‌کنیم.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "Research & Development — ARTINEXT",
      description:
        "We test ideas with a small, fast prototype before full investment — real usage data over a feature list, and a clear answer on what's actually worth building.",
    },
    breadcrumb: "R&D",
    intro: {
      eyebrow: "Research & development",
      aside: "Idea to real use",
      headline: "We keep the distance between a good idea and real use as short as possible.",
      description: "New technology only enters a product once the problem, the data, and the success measure are clear and testable.",
    },
    feature: {
      tag: "R&D iteration system",
      headline: "Small prototype. Fast learning. Better decision.",
      description:
        "Staged prototyping shows what works, what needs to change, and what shouldn't be built at all, before full investment.",
    },
    principles: [
      { title: "Test before full development", description: "We check a hypothesis with a small prototype before building the final version." },
      { title: "Learn from use", description: "We favor real usage data over a list of features." },
      { title: "Build reusable knowledge", description: "Every project leaves behind standards and data we can reuse." },
    ],
    cta: {
      statement: "Have an idea worth testing? We will define the right experiment.",
      label: "Start a project",
    },
  },
};
