import type { Localized } from "@/lib/i18n/config";
import type { GlyphName } from "@/lib/pointcloud/glyphs";

/**
 * The R&D page.
 *
 * One cloud runs the length of it, and scrolling is what moves it: an
 * unformed scatter becomes a crude shape, the shape gets a structure to be
 * measured against, and the structure resolves into the mark. The stages are
 * the argument, not decoration for it — R&D here means staged prototyping,
 * and the reader watches a thing be staged.
 *
 * `stages` runs one ahead of `panels` at each end: stage 0 belongs to the
 * hero and the last belongs to the closing call, with panel n taking stage
 * n+1. The cloud is at a stage when that section is centred.
 */
export interface RndPanel {
  eyebrow: string;
  title: string;
  body: string;
}

export interface RndContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string; scrollHint: string };
  stages: GlyphName[];
  panels: RndPanel[];
  cta: { eyebrow: string; title: string; lead: string; action: string };
}

/**
 * Six states for six sections. The hero counts, because it is where the idea
 * is still only written, and so does the closing call — the mark arriving is
 * the end of the argument, not decoration beside it. Panel n shows stage n+1.
 */
const STAGES: GlyphName[] = [
  "rnd-code",
  "rnd-formless",
  "rnd-prototype",
  "rnd-lattice",
  "rnd-bulb",
  "rnd-mark",
];

export const rnd: Localized<RndContent> = {
  fa: {
    meta: {
      title: "تحقیق و توسعه در آرتینکست — نمونه‌ی اولیه، تصمیم بهتر",
      description:
        "فناوری جدید تنها زمانی وارد کار می‌شود که مسئله، داده و معیار موفقیت آن روشن و قابل‌آزمون باشد. در این صفحه توضیح داده‌ایم نمونه‌سازی مرحله‌ای در آرتینکست چگونه انجام می‌شود.",
    },
    breadcrumb: "تحقیق و توسعه",
    hero: {
      eyebrow: "تحقیق و توسعه",
      title: "نمونه‌ی اولیه، تصمیم بهتر.",
      lead: "فناوری جدید به‌خودی‌خود ارزشی به کار اضافه نمی‌کند. این ارزش زمانی ایجاد می‌شود که مسئله مشخص، داده در دسترس و معیار سنجش نتیجه از پیش تعیین شده باشد.",
      scrollHint: "برای دیدن مراحل، پایین بروید",
    },
    stages: STAGES,
    panels: [
      {
        eyebrow: "مرحله‌ی اول",
        title: "هنوز شکلی ندارد.",
        body: "هر ایده در ابتدا مجموعه‌ای از فرضیه‌هاست: شاید این کار قابل‌خودکارسازی باشد، شاید این داده کاربردی باشد، شاید این ابزار پاسخ‌گو باشد. در این مرحله هیچ‌کدام تست نشده‌اند و ساخت کامل، پرهزینه‌ترین راه برای ارزیابی آن‌هاست.",
      },
      {
        eyebrow: "مرحله‌ی دوم",
        title: "ساده‌ترین نمونه‌ای که به پرسش پاسخ می‌دهد.",
        body: "نمونه‌ی اولیه محصول نهایی نیست، بلکه برای پاسخ به یک پرسش مشخص ساخته می‌شود. هرچه ساده‌تر باشد، خطای فرضیه‌ها زودتر مشخص می‌شود، در زمانی که تغییر آن هنوز کم‌هزینه است.",
      },
      {
        eyebrow: "مرحله‌ی سوم",
        title: "معیار، پیش از ساخت.",
        body: "اگر معیار سنجش نتیجه از پیش مکتوب نشود، پس از ساخت هر نتیجه‌ای قابل‌توجیه خواهد بود. معیارها بر اساس داده و روند کاری واقعی شما تعیین می‌شوند، نه بر اساس برداشت شخصی از بهبود.",
      },
      {
        eyebrow: "مرحله‌ی چهارم",
        title: "سه نتیجه‌ی ممکن، از جمله نساختن.",
        body: "نمونه یا به محصولی تبدیل می‌شود که ساخته خواهد شد، یا نشان می‌دهد کدام بخش نیاز به تغییر دارد، یا مشخص می‌کند که اساساً نباید ساخته شود. نتیجه‌ی سوم نیز یک دستاورد است، پیش از آنکه هزینه‌ی کامل پرداخت شود.",
      },
    ],
    cta: {
      eyebrow: "قدم بعدی",
      title: "اگر ایده‌ای دارید و از ارزش ساخت آن مطمئن نیستید، برایمان بنویسید.",
      lead: "لازم نیست از قبل پاسخ را بدانید. پرسش خود را مطرح کنید، ساده‌ترین راه رسیدن به پاسخ را با هم پیدا می‌کنیم.",
      action: "شروع پروژه",
    },
  },
  en: {
    meta: {
      title: "Research & development at ARTINEXT — small prototype, better decision",
      description:
        "New technology enters the work once the problem, the data and the measure of success are clear and testable. Here is how staged prototyping runs at ARTINEXT.",
    },
    breadcrumb: "R&D",
    hero: {
      eyebrow: "Research & development",
      title: "Small prototype, better decision.",
      lead: "New technology adds nothing to the work on its own. It adds something when the problem is specific, the data is reachable, and we agreed in advance what we would measure the result against.",
      scrollHint: "Scroll to follow the stages",
    },
    stages: STAGES,
    panels: [
      {
        eyebrow: "Stage one",
        title: "It has no shape yet.",
        body: "Every idea starts as a set of guesses: maybe this job can be automated, maybe this data is useful, maybe this tool answers it. None of them have been tested yet, and building the whole thing is the most expensive way to find out.",
      },
      {
        eyebrow: "Stage two",
        title: "The smallest thing that answers the question.",
        body: "The first prototype isn't meant to be a product. It's meant to answer one specific question. The smaller it is, the sooner we find out what we were wrong about — while changing it is still cheap.",
      },
      {
        eyebrow: "Stage three",
        title: "The measure comes before the build.",
        body: "If we don't write down what we're measuring against beforehand, any result can be justified afterwards. The measure is tied to your real data and your real process, not to something feeling better.",
      },
      {
        eyebrow: "Stage four",
        title: "Three outcomes, and one is not building it.",
        body: "A prototype either becomes something we build, or shows which part has to change, or makes clear it shouldn't be built at all. That third result is also a result — at a cost you haven't paid yet.",
      },
    ],
    cta: {
      eyebrow: "Next step",
      title: "If you have an idea and don't know whether it's worth building, that's the thing to write.",
      lead: "You don't need the answer first. Write the question you want answered; we'll work out the smallest way to reach it.",
      action: "Start a project",
    },
  },
};
