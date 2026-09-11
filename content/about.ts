import type { Localized } from "@/lib/i18n/config";
import type { GlyphName } from "@/lib/pointcloud/glyphs";

/**
 * The About page.
 *
 * Three sections, one per discipline, each carrying the tools that discipline
 * actually runs on. The split is by what the work *is*, not by vendor: Revit
 * and Navisworks are one job seen twice, and Grasshopper is not a drawing
 * tool at all, so it does not sit with the drawing tools.
 *
 * `tools` is in carousel order — the arrows step through it and the cloud
 * morphs between entries. A section with one tool renders no arrows.
 */
export interface AboutTool {
  glyph: GlyphName;
  name: string;
  /** What we do with it. One sentence, a mechanism, not a capability list. */
  note: string;
}

export interface AboutSection {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  tools: AboutTool[];
  /** Accessible names for the stepper. */
  controls: { prev: string; next: string; label: string };
}

export interface AboutContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Cycled by the hero cloud, one morph at a time. */
    cycle: GlyphName[];
  };
  sections: AboutSection[];
  cta: { eyebrow: string; title: string; lead: string; action: string };
}

/**
 * Every tool on the page, in the order the hero cycles them: the two BIM
 * marks, the two drawing tools, then the two visual-programming ones — the
 * same order the sections below appear in, so the hero reads as a contents
 * page rather than a shuffle.
 */
const HERO_CYCLE: GlyphName[] = [
  "icon-revit",
  "icon-navisworks",
  "icon-autocad",
  "icon-rhinoceros",
  "icon-grasshopper",
  "icon-dynamo",
];

export const about: Localized<AboutContent> = {
  fa: {
    meta: {
      title: "درباره‌ی آرتینکست — ابزارهایی که با آن‌ها کار می‌کنیم",
      description:
        "آرتینکست با Revit، Navisworks، AutoCAD، Rhino، Grasshopper و Dynamo کار می‌کند. در این صفحه توضیح داده‌ایم در هرکدام دقیقاً چه کاری انجام می‌دهیم و به چه دلیل.",
    },
    breadcrumb: "درباره ما",
    hero: {
      eyebrow: "درباره ما",
      // Two halves, comma, no verb in the second - the house title pattern.
      title: "ابزار را نمی‌فروشیم، با آن کار می‌کنیم.",
      lead: "آرتینکست با همان نرم‌افزارهایی کار می‌کند که دفتر شما هر روز از آن‌ها استفاده می‌کند. آنچه اضافه می‌کنیم ابزاری تازه نیست، بلکه اصلاح همان بخشی از روند کاری شماست که در آن مشکل وجود دارد.",
      cycle: HERO_CYCLE,
    },
    sections: [
      {
        id: "bim",
        eyebrow: "مدل‌سازی و هماهنگی",
        title: "مدل‌سازی در Revit، هماهنگی در Navisworks.",
        lead: "بیشتر کار BIM در دو بخش متمرکز است: محتوایی که مدل بر اساس آن ساخته می‌شود و مرحله‌ای که مدل‌های رشته‌های مختلف با هم هماهنگ می‌شوند. هر دو را می‌سازیم و به فرآیندی قابل‌تکرار تبدیل می‌کنیم.",
        tools: [
          {
            glyph: "icon-revit",
            name: "Revit",
            note: "فمیلی‌های پارامتریک، تمپلیت و کتابخانه‌ای که در پروژه‌های بعدی نیز قابل‌استفاده باشد، به‌همراه افزونه‌هایی که کارهای تکراری مدل‌سازی را خودکار می‌کنند.",
          },
          {
            glyph: "icon-navisworks",
            name: "Navisworks",
            note: "تداخل‌گیری و بازبینی مدل به‌صورت یک روند مشخص، با تست‌های ذخیره‌شده و گزارشی که برای نفر بعدی نیز قابل‌استفاده است.",
          },
        ],
        controls: { prev: "ابزار قبلی", next: "ابزار بعدی", label: "ابزارهای مدل‌سازی و هماهنگی" },
      },
      {
        id: "cad",
        eyebrow: "ترسیم و هندسه",
        title: "نقشه در AutoCAD، فرم در Rhino.",
        lead: "هر پروژه‌ای در رویت شروع نمی‌شود و لزومی هم به آن نیست. نقشه‌های دوبعدی، فایل‌های قدیمی و هندسه‌ی آزاد جایگاه خود را دارند و کار ما این است که این اطلاعات به مدل متصل بمانند.",
        tools: [
          {
            glyph: "icon-autocad",
            name: "AutoCAD",
            note: "پاک‌سازی و استانداردسازی فایل‌های موجود، نام‌گذاری و لایه‌بندی یکدست، و ارتباطی که نقشه‌ی دوبعدی را به مدل متصل نگه می‌دارد.",
          },
          {
            glyph: "icon-rhinoceros",
            name: "Rhino",
            note: "هندسه‌ای که ساخت آن در رویت منطقی نیست، مانند نما، پوسته و فرم آزاد، و سپس انتقال همان هندسه به مدل به‌شکلی که قابل‌استفاده باشد.",
          },
        ],
        controls: { prev: "ابزار قبلی", next: "ابزار بعدی", label: "ابزارهای ترسیم و هندسه" },
      },
      {
        id: "visual-coding",
        eyebrow: "برنامه‌نویسی تصویری",
        title: "قاعده را می‌نویسیم، نه نتیجه را.",
        lead: "وقتی یک کار قرار است ده بار با ورودی‌های متفاوت تکرار شود، ساخت ده خروجی جداگانه راه‌حل نیست. راه‌حل، قاعده‌ای است که هر ده خروجی را می‌سازد و با تغییر ورودی نیز معتبر می‌ماند.",
        tools: [
          {
            glyph: "icon-grasshopper",
            name: "Grasshopper",
            note: "تعریف پارامتریک نما، الگو و هندسه‌ی تکرارشونده، به‌شکلی که تیم شما بتواند ورودی را تغییر دهد و بدون نیاز به ما، خروجی را دریافت کند.",
          },
          {
            glyph: "icon-dynamo",
            name: "Dynamo",
            note: "اسکریپت برای کارهایی که داخل خود رویت تکرار می‌شوند، مانند تغییر پارامتر در گروه بزرگی از المان‌ها، ساخت شیت و ویو، و بررسی‌هایی که انجام دستی آن‌ها زمان‌بر است.",
          },
        ],
        controls: { prev: "ابزار قبلی", next: "ابزار بعدی", label: "ابزارهای برنامه‌نویسی تصویری" },
      },
    ],
    cta: {
      eyebrow: "قدم بعدی",
      title: "اگر یکی از این بخش‌ها در کار شما مشکل ایجاد کرده است، برایمان بنویسید.",
      lead: "لازم نیست از قبل بدانید مسئله به کدام ابزار مربوط است. از روند کاری فعلی و بخشی که در آن مشکل وجود دارد بگویید، ادامه‌ی مسیر را با هم مشخص می‌کنیم.",
      action: "شروع پروژه",
    },
  },
  en: {
    meta: {
      title: "About ARTINEXT — the tools we work in",
      description:
        "ARTINEXT works in Revit, Navisworks, AutoCAD, Rhino, Grasshopper and Dynamo. Here is exactly what we do in each, and why.",
    },
    breadcrumb: "About",
    hero: {
      eyebrow: "About",
      title: "We don't sell the tools. We work in them.",
      lead: "ARTINEXT works inside the same software your office already opens every morning. What we add isn't another tool — it's your own process, at the one place it keeps catching.",
      cycle: HERO_CYCLE,
    },
    sections: [
      {
        id: "bim",
        eyebrow: "Modelling and coordination",
        title: "Modelled in Revit, coordinated in Navisworks.",
        lead: "Most BIM work collects at two points: the content a model is built from, and the moment several disciplines' models sit down together. We build both, and we make both repeatable.",
        tools: [
          {
            glyph: "icon-revit",
            name: "Revit",
            note: "Parametric families, templates and a library that still works on the next project — plus the add-ins that take the repetitive modelling off your hands.",
          },
          {
            glyph: "icon-navisworks",
            name: "Navisworks",
            note: "Clash detection and model review as an actual process — saved tests and a report the next person can read, rather than one manual pass.",
          },
        ],
        controls: { prev: "Previous tool", next: "Next tool", label: "Modelling and coordination tools" },
      },
      {
        id: "cad",
        eyebrow: "Drafting and geometry",
        title: "Drawn in AutoCAD, shaped in Rhino.",
        lead: "Not every project starts in Revit, and it doesn't need to. Two-dimensional drawings, inherited files and free-form geometry all have their place — our job is keeping them attached to the model rather than beside it.",
        tools: [
          {
            glyph: "icon-autocad",
            name: "AutoCAD",
            note: "Cleaning up and standardising what already exists — consistent layers and naming, and a bridge that keeps the 2D drawing connected to the model.",
          },
          {
            glyph: "icon-rhinoceros",
            name: "Rhino",
            note: "Geometry it makes no sense to build in Revit — façades, shells, free-form — and then getting that geometry back into the model in a state you can actually use.",
          },
        ],
        controls: { prev: "Previous tool", next: "Next tool", label: "Drafting and geometry tools" },
      },
      {
        id: "visual-coding",
        eyebrow: "Visual programming",
        title: "We write the rule, not the result.",
        lead: "When a job is going to run ten times with different inputs, ten outputs is not the answer. The rule that produces them is — and the rule survives the input changing.",
        tools: [
          {
            glyph: "icon-grasshopper",
            name: "Grasshopper",
            note: "Parametric definitions for façades, patterns and repeating geometry — built so your team changes the input and gets the output themselves, without coming back to us each time.",
          },
          {
            glyph: "icon-dynamo",
            name: "Dynamo",
            note: "Scripts for the jobs that repeat inside Revit itself — parameter changes across a large set of elements, sheet and view creation, and the checks that take real time by hand.",
          },
        ],
        controls: { prev: "Previous tool", next: "Next tool", label: "Visual programming tools" },
      },
    ],
    cta: {
      eyebrow: "Next step",
      title: "If one of these is where your work keeps catching, write to us.",
      lead: "You don't need to know which tool the problem belongs to. Describe your current process and where it catches; we'll work out the rest together.",
      action: "Start a project",
    },
  },
};
