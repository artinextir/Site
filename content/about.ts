import type { Localized } from "@/lib/i18n/config";

export interface AboutContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  pov: {
    headline: string;
    paragraphs: string[];
  };
  notFor: {
    heading: string;
    description: string;
  };
  values: { title: string; description: string }[];
  cta: { statement: string; label: string };
}

export const about: Localized<AboutContent> = {
  fa: {
    meta: {
      title: "درباره آرتینکست — استودیو سیستم‌های دیجیتال",
      description:
        "آرتینکست استودیوی طراحی سیستم‌های دیجیتال است که فرایند، داده و تجربه کاربری را در یک ابزار قابل‌اتکا ترکیب می‌کند.",
    },
    breadcrumb: "درباره",
    intro: {
      eyebrow: "درباره ما",
      aside: "از مسئله تا سیستم",
      headline: "بین یک مسئله واقعی و فناوری درست، یک مسیر روشن می‌سازیم.",
      description:
        "آرتینکست (که گاهی ارتینکست هم نوشته می‌شود) استودیوی سیستم‌های دیجیتال است؛ فرایند، داده و تجربه کاربری را در یک ابزار قابل‌اتکا ترکیب می‌کنیم، نه یک نمایش فنی صرف.",
    },
    pov: {
      headline: "اغلب سازمان‌ها کمبود ابزار ندارند؛ کمبود اتصال، استاندارد و دید روشن دارند.",
      paragraphs: [
        "بیشتر وقت ما صرف سه جا می‌شود: کاری که هنوز دستی انجام می‌شود، داده‌ای که پخش و پراکنده است، و نرم‌افزارهایی که با هم حرف نمی‌زنند. این‌ها جاهایی هستند که سیستم درست بیشترین اثر را می‌گذارد.",
        "فناوری را برای نمایش نمی‌سازیم. اگر ابزاری مسئله واقعی شما را حل نکند، پیشنهادش نمی‌دهیم؛ حتی اگر جذاب‌تر به نظر برسد.",
      ],
    },
    notFor: {
      heading: "این استودیو برای همه نیست",
      description:
        "اگر دنبال یک قالب آماده یا پلاگین عمومی هستید که بدون بررسی فرایند نصب شود، آرتینکست انتخاب درستی نیست. هر پروژه از مسئله شروع می‌شود، نه از یک محصول از‌پیش‌ساخته.",
    },
    values: [
      { title: "مسئله، پیش از ابزار", description: "قبل از هر پیشنهاد فنی، مسئله را تا انتها می‌فهمیم." },
      { title: "سادگی قابل‌دفاع", description: "هر پیچیدگی باید دلیلی داشته باشد که بتوان از آن دفاع کرد." },
      { title: "شواهد، پیش از ادعا", description: "هر تصمیم را با داده و تست واقعی می‌سنجیم، نه حدس." },
      { title: "ساخته‌شده برای تکامل", description: "سیستم را طوری می‌سازیم که با رشد شما تغییر کند." },
    ],
    cta: {
      statement: "مسئله پیچیده است؛ آن را به بخش‌هایی تقسیم می‌کنیم که واقعاً بتوانید حل کنید.",
      label: "شروع گفتگو",
    },
  },
  en: {
    meta: {
      title: "About ARTINEXT — a digital systems studio",
      description:
        "ARTINEXT is a digital-systems studio that combines process, data, and UX into one reliable tool, not a technical showpiece.",
    },
    breadcrumb: "About",
    intro: {
      eyebrow: "About us",
      aside: "From problem to system",
      headline: "We build the clear path between a real problem and the right technology.",
      description:
        "ARTINEXT is a digital-systems studio. We combine process, data, and UX into one reliable tool, not a technical showpiece.",
    },
    pov: {
      headline: "Most organizations don't lack tools. They lack connection, standards, and a clear view.",
      paragraphs: [
        "Most of our time goes to three places: work still done by hand, data that's scattered across sources, and software that doesn't talk to itself. These are exactly the places where the right system does the most.",
        "We don't build technology for show. If a tool doesn't solve your real problem, we don't recommend it, even when it looks more impressive.",
      ],
    },
    notFor: {
      heading: "This studio isn't for everyone",
      description:
        "If you want an off-the-shelf template or a generic plugin installed without any process review, we're the wrong studio for you. Every project starts from the problem, not a pre-built product.",
    },
    values: [
      { title: "Problem before tool", description: "We understand the problem in full before proposing any tool." },
      { title: "Defensible simplicity", description: "Every added layer of complexity has to earn its place." },
      { title: "Evidence before claims", description: "Every decision is checked against data and real tests, not a guess." },
      { title: "Built to evolve", description: "We build the system to change shape as your work grows." },
    ],
    cta: {
      statement: "The problem is complex. We break it into parts you can actually solve.",
      label: "Start a project",
    },
  },
};
