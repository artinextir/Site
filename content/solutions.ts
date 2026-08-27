import type { Localized } from "@/lib/i18n/config";

export interface SolutionsContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  services: { title: string; description: string; tag: string }[];
  process: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  cta: { statement: string; label: string };
}

export const solutions: Localized<SolutionsContent> = {
  fa: {
    meta: {
      title: "راهکارهای آرتینکست — اتوماسیون، ابزار، داشبورد، BIM",
      description:
        "شش راهکار آرتینکست: اتوماسیون فرایند، ابزار اختصاصی، داشبورد مدیریتی، محتوای BIM، سیستم مدل‌سازی و آمادگی هوش مصنوعی.",
    },
    breadcrumb: "راهکارها",
    intro: {
      eyebrow: "راهکارها و خدمات",
      aside: "از مسئله تا سیستم",
      headline: "فناوری وقتی ارزش دارد که یک مسئله واقعی را حل کند.",
      description:
        "کار را با یک ابزار شروع نمی‌کنیم. اول فرایند، کاربر و نتیجه مطلوب را می‌فهمیم؛ بعد راهکار را می‌سازیم.",
    },
    services: [
      {
        title: "اتوماسیون فرایند",
        description: "مراحل تکراری را به یک جریان واحد و قابل‌ردیابی تبدیل می‌کنیم.",
        tag: "زمان کمتر / وابستگی کمتر",
      },
      {
        title: "توسعه ابزار اختصاصی",
        description: "پلاگین‌هایی که بر اساس کاربران واقعی و استانداردهای شما ساخته می‌شوند.",
        tag: "دقت / تکرارپذیری",
      },
      {
        title: "داشبورد و سیستم مدیریت",
        description: "داده پراکنده را به یک تصویر خوانا و قابل‌تصمیم‌گیری تبدیل می‌کنیم.",
        tag: "شفافیت عملیاتی",
      },
      {
        title: "محتوای BIM و رویت",
        description: "محتوایی طراحی‌شده برای استفاده روزانه، نه یک دموی نمایشی.",
        tag: "مدل‌های قابل‌اتکا",
      },
      {
        title: "مدل‌سازی و سیستم داده",
        description: "منطق هندسه و داده را در یک راهکار قابل‌کنترل کنار هم قرار می‌دهیم.",
        tag: "پیوند مدل و داده",
      },
      {
        title: "آمادگی برای هوش مصنوعی",
        description: "پیش از هوش مصنوعی، دانش، داده و مرزهای دسترسی را سازمان‌دهی می‌کنیم.",
        tag: "مفید / کنترل‌شده",
      },
    ],
    process: {
      heading: "چطور کار می‌کنیم",
      steps: [
        { title: "کشف", description: "جریان کار فعلی و جایی را که کار گیر می‌کند، بررسی می‌کنیم." },
        { title: "تعریف", description: "دامنه دقیق راهکار و معیار موفقیت را مشخص می‌کنیم." },
        { title: "ساخت", description: "نسخه اول را می‌سازیم و در محیط واقعی آزمایش می‌کنیم." },
        { title: "بهبود", description: "بر اساس بازخورد واقعی، راهکار را اصلاح می‌کنیم." },
      ],
    },
    cta: {
      statement: "با یک مسئله مشخص شروع کنید، نه فهرستی از فناوری‌ها.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "ARTINEXT Solutions — automation, tools, dashboards, BIM",
      description:
        "Six ARTINEXT solutions: process automation, custom tools, management dashboards, BIM content, modeling systems, and AI readiness.",
    },
    breadcrumb: "Solutions",
    intro: {
      eyebrow: "Solutions & services",
      aside: "From problem to system",
      headline: "Technology matters when it removes real friction.",
      description:
        "We don't start with a tool. We understand the process, the user, and the outcome first, then build the solution.",
    },
    services: [
      {
        title: "Process automation",
        description: "We turn repetitive steps into one traceable flow.",
        tag: "Less time / less dependency",
      },
      {
        title: "Custom tool development",
        description: "Plugins built around your real users and standards.",
        tag: "Accuracy / repeatability",
      },
      {
        title: "Dashboards & management systems",
        description: "We turn fragmented data into one readable picture.",
        tag: "Operational clarity",
      },
      {
        title: "BIM & Revit content",
        description: "Content designed for daily use, not a demo.",
        tag: "Reliable models",
      },
      {
        title: "Modeling & data systems",
        description: "Geometry and data logic combined in one controllable solution.",
        tag: "Model / data link",
      },
      {
        title: "AI readiness",
        description: "We organize knowledge, data, and boundaries before AI, not after.",
        tag: "Useful / controlled",
      },
    ],
    process: {
      heading: "How we work",
      steps: [
        { title: "Discover", description: "We look at your current workflow and the friction point." },
        { title: "Define", description: "We set the exact scope and the measure of success." },
        { title: "Build", description: "We build a first version and test it in a real environment." },
        { title: "Improve", description: "We refine the solution based on real feedback." },
      ],
    },
    cta: {
      statement: "Start with a specific problem, not a list of technologies.",
      label: "Start a project",
    },
  },
};
