import type { Localized } from "@/lib/i18n/config";

/**
 * Every string here is grounded in llms.txt / llms-full.txt or in what is
 * visibly true in the two product recordings. No statistics, client counts,
 * testimonials, office address, or business hours — their absence on this
 * site is deliberate, not an oversight.
 */

export type NavItem = { label: string; href: string };
export type Numbered = { n: string; title: string; body: string };
export type Product = {
  code: string;
  title: string;
  body: string;
  bullets: string[];
  href: string;
};
export type DemoTab = {
  id: string;
  tab: string;
  flow: string;
  title: string;
  body: string;
  specs: { k: string; v: string }[];
  src: string;
  poster: string;
};
export type CapabilityGroup = { title: string; items: string[] };
export type Insight = { title: string; excerpt: string; date: string; href: string };
export type Faq = { q: string; a: string };

export type HomeContent = {
  meta: { title: string; description: string };
  ui: {
    skip: string;
    menu: string;
    close: string;
    langSwitch: string;
    langName: string;
    demoRegion: string;
    playHint: string;
  };
  nav: NavItem[];
  navCta: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    figureCaption: string;
    codeLines: { t: string; k?: boolean }[];
  };
  frictions: { eyebrow: string; title: string; lead: string; items: Numbered[] };
  products: { eyebrow: string; title: string; lead: string; items: Product[]; more: string };
  demo: { eyebrow: string; title: string; lead: string; note: string; tabs: DemoTab[] };
  process: { eyebrow: string; title: string; lead: string; steps: Numbered[] };
  rnd: { eyebrow: string; title: string; lead: string; points: string[]; cta: string; href: string };
  capabilities: { eyebrow: string; title: string; lead: string; groups: CapabilityGroup[] };
  insights: { eyebrow: string; title: string; lead: string; items: Insight[]; cta: string; href: string };
  faq: { eyebrow: string; title: string; items: Faq[] };
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    notFor: string;
  };
  footer: { tagline: string; navTitle: string; contactTitle: string; legal: string };
};

const navEn: NavItem[] = [
  { label: "Products", href: "/en/products/" },
  { label: "R&D", href: "/en/research-development/" },
  { label: "Insights", href: "/en/articles/" },
  { label: "About", href: "/en/about/" },
];

const navFa: NavItem[] = [
  { label: "محصولات", href: "/fa/products/" },
  { label: "تحقیق و توسعه", href: "/fa/research-development/" },
  { label: "بینش‌ها", href: "/fa/articles/" },
  { label: "درباره ما", href: "/fa/about/" },
];

export const home: Localized<HomeContent> = {
  en: {
    meta: {
      title: "ARTINEXT — Revit tools, BIM content and workflow automation",
      description:
        "Custom Revit content, digital tools and workflow automation for architecture, structural and MEP teams, built from your own process by a studio working remotely.",
    },
    ui: {
      skip: "Skip to content",
      menu: "Open menu",
      close: "Close menu",
      langSwitch: "فارسی",
      langName: "Persian",
      demoRegion: "Product recordings",
      playHint: "Recording has no sound.",
    },
    nav: navEn,
    navCta: "Start a project",
    hero: {
      eyebrow: "Digital-systems studio · Iran · working remotely",
      title: "Build what's next.",
      lead:
        "Custom Revit content, digital tools, and office automation for architecture, structural, and MEP teams — built from your process, never off a shelf.",
      primary: "Start a project",
      secondary: "See it run",
      figureCaption: "ETABS model rebuilt as native Revit framing — 5,087 members",
      codeLines: [
        { t: "void CreateStructuralFraming(", k: true },
        { t: "EtabsMember m," },
        { t: "FramingType ft," },
        { t: "Level lvl)" },
      ],
    },
    frictions: {
      eyebrow: "01 — Where the time goes",
      title: "Three frictions, in almost every office",
      lead:
        "Our time goes to three places: work still done by hand, data scattered across sources, and software that doesn't talk to itself. That's where the right system does the most.",
      items: [
        {
          n: "01",
          title: "Manual work, repeated",
          body:
            "Steps a person redoes on every project, the same way, from memory. Each repetition is another chance for the error nobody catches until it's already in a drawing set.",
        },
        {
          n: "02",
          title: "Data with no single home",
          body:
            "Quantities, statuses, and decisions scattered across files, people, and software. Nothing whole enough to decide from without someone rebuilding it by hand first.",
        },
        {
          n: "03",
          title: "Tools that don't talk",
          body:
            "Each one is fine on its own. Together they never become one traceable flow from request to execution to report — so the seams stay manual, and invisible.",
        },
      ],
    },
    products: {
      eyebrow: "02 — Products",
      title: "Three paths into the work",
      lead: "Whichever one you start from, the first step is the same: understand the problem in full.",
      items: [
        {
          code: "P·01",
          title: "Specialist Revit content",
          body:
            "A family that isn't just well-drawn — it behaves correctly inside a real model, under real project conditions.",
          bullets: [
            "Product families for manufacturers",
            "Office libraries for design teams",
            "LOD-aligned project families",
            "Library optimization and standardization",
          ],
          href: "/en/products/#revit-families",
        },
        {
          code: "P·02",
          title: "Custom digital tools",
          body:
            "Fewer clicks, fewer errors, more focus on the work that matters. Every tool is studied against how the team actually works before development starts.",
          bullets: [
            "Custom Revit plugins and add-ins",
            "Model quality control and checksets",
            "Output and sheet management",
            "Data tools and Dynamo scripts",
          ],
          href: "/en/products/#digital-tools",
        },
        {
          code: "P·03",
          title: "Intelligent automation",
          body:
            "One controlled flow from request to execution to reporting. Automation moves things; control stays with the team.",
          bullets: [
            "Workflow automation",
            "Software and data integration",
            "Operational dashboards",
            "Organizational AI assistants",
          ],
          href: "/en/products/#automation",
        },
      ],
      more: "Explore",
    },
    demo: {
      eyebrow: "03 — See it run",
      title: "Two tools, recorded end to end",
      lead:
        "Both of these were built for a specific conversion problem a team was doing by hand. Nothing here is a mockup — these are screen recordings of the tools running.",
      note: "Recordings are silent and play without sound.",
      tabs: [
        {
          id: "c2r",
          tab: "C2R",
          flow: "CAD → Revit",
          title: "Builds the Revit model from a coordinated CAD plan set",
          body:
            "Instead of a team tracing linework by hand, the tool reads the plan set and creates native Revit elements from it — walls placed on their real wall types, floors, levels, and openings — so the model starts from the drawing rather than from someone's interpretation of it.",
          specs: [
            { k: "Input", v: "Coordinated CAD plan set" },
            { k: "Output", v: "Native Revit elements" },
            { k: "Runs in", v: "Revit" },
          ],
          src: "/videos/artinext-c2r.mp4",
          poster: "/videos/artinext-c2r-poster.jpg",
        },
        {
          id: "e2r",
          tab: "E2R",
          flow: "ETABS → Revit",
          title: "Rebuilds an ETABS structural model as native Revit framing",
          body:
            "The model is built live in Revit's isometric 3D view while the tool reports its own progress: elements processed, beams, columns and braces created, non-master members, and — the line that matters most — what was not created. Anything that didn't convert is visible on screen instead of silently missing.",
          specs: [
            { k: "Input", v: "ETABS Excel export" },
            { k: "Output", v: "Revit structural framing" },
            { k: "Reports", v: "Per-element counts, including failures" },
          ],
          src: "/videos/artinext-e2r.mp4",
          poster: "/videos/artinext-e2r-poster.jpg",
        },
      ],
    },
    process: {
      eyebrow: "04 — Process",
      title: "Discover, define, build, evolve",
      lead: "Four stages. The first two are where most of the risk gets removed.",
      steps: [
        {
          n: "01",
          title: "Discover",
          body:
            "We watch the real workflow, not the documented one. What's actually done by hand, by whom, and how often it goes wrong.",
        },
        {
          n: "02",
          title: "Define",
          body:
            "The problem gets stated in full, with a success measure that can be tested, before any tool is proposed.",
        },
        {
          n: "03",
          title: "Build",
          body:
            "Built against your standards and your users. Every added layer of complexity has to earn its place.",
        },
        {
          n: "04",
          title: "Evolve",
          body:
            "Systems are built to change shape as your work grows, so the tool doesn't become the next thing to work around.",
        },
      ],
    },
    rnd: {
      eyebrow: "05 — Research & development",
      title: "Small prototype, fast learning, better decision",
      lead:
        "New technology only enters a product once the problem, the data, and the success measure are clear and testable. Staged prototyping surfaces what works, what needs to change, and what shouldn't be built at all — before full investment happens.",
      points: [
        "Test the idea before committing the budget",
        "Learn what needs to change while changing it is still cheap",
        "Find out what shouldn't be built",
      ],
      cta: "How R&D works",
      href: "/en/research-development/",
    },
    capabilities: {
      eyebrow: "06 — Capabilities",
      title: "What we work across",
      lead: "The technical surface behind the three product paths.",
      groups: [
        {
          title: "BIM & Revit content",
          items: [
            "Parametric family authoring",
            "Manufacturer product families",
            "Office standard libraries",
            "LOD-aligned project families",
            "Library audit and optimization",
          ],
        },
        {
          title: "Custom digital tools",
          items: [
            "Revit plugins and add-ins",
            "Model QA/QC checkers and checksets",
            "Dynamo script development",
            "Output and sheet management",
            "Model and data conversion tools",
          ],
        },
        {
          title: "Automation & data",
          items: [
            "Workflow and process automation",
            "Software and data integration",
            "Operational dashboards",
            "Modeling and data systems",
            "AI readiness and assistants",
          ],
        },
      ],
    },
    insights: {
      eyebrow: "07 — Insights",
      title: "Written from the work",
      lead: "No listicles. Each one comes out of a decision we had to make on a real project.",
      items: [
        {
          title: "Choosing a Revit plugin development company",
          excerpt:
            "The most dangerous problem in a plugin development partnership rarely comes from a weak portfolio. It comes from the small detail nobody checked during evaluation.",
          date: "2026-08-29",
          href: "/en/articles/revit-plugin-development-company/",
        },
        {
          title: "Custom Dynamo script development: what it actually replaces",
          excerpt:
            "A graph that runs once on its author's model is an experiment. The work that turns it into a tool is the part nobody sees on the canvas.",
          date: "2026-08-29",
          href: "/en/articles/custom-dynamo-script-development/",
        },
        {
          title: "Where AEC workflow automation should start",
          excerpt:
            "The ceiling on what's worth automating is usually untested, not real.",
          date: "2026-08-28",
          href: "/en/articles/aec-workflow-automation/",
        },
      ],
      cta: "All insights",
      href: "/en/articles/",
    },
    faq: {
      eyebrow: "08 — Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Can you just install a plugin we already picked?",
          a: "No. If what you want is an off-the-shelf template or a generic plugin installed without any process review, we're the wrong studio — and we'll say so rather than take the work. Every project starts from the problem, not a pre-built product.",
        },
        {
          q: "Where are you based, and can you work with our team remotely?",
          a: "We're based in Iran and work remotely with architecture, structural, and MEP teams. Remote is how we normally work, not an exception we make.",
        },
        {
          q: "How is a custom tool priced?",
          a: "By workflow complexity, integration needs, and how many people will use it — not by a flat price list. A plugin that looks like one button is priced by the weeks of decisions standing behind that button.",
        },
        {
          q: "Can we start with something small?",
          a: "Yes, and often that's the right move. A staged prototype tests the idea, the data, and the success measure before full investment — including the possibility that the thing shouldn't be built.",
        },
        {
          q: "Do you work in Persian and English?",
          a: "Both. This site ships in Persian and English at matching URLs, and projects run in whichever language your team works in.",
        },
        {
          q: "What happens in the first conversation?",
          a: "We go through the workflow you want to change: what's done by hand today, where the data lives, what a good outcome would actually look like, and whether a tool is even the right answer.",
        },
      ],
    },
    cta: {
      eyebrow: "09 — Start",
      title: "Tell us the process you'd change first",
      lead:
        "Bring the workflow, not the spec. If a tool is the wrong answer, we'd rather tell you that in the first conversation than at the end of a build.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      notFor:
        "We are not a fit if you want an off-the-shelf template or a generic plugin installed without a process review.",
    },
    footer: {
      tagline:
        "Digital-systems studio working remotely with architecture, structural, and MEP teams.",
      navTitle: "Site",
      contactTitle: "Contact",
      legal: "ARTINEXT — DESIGN TECHNOLOGY / IRAN",
    },
  },

  fa: {
    meta: {
      title: "آرتینکست — ابزار رویت، محتوای BIM و اتوماسیون اداری و مدیریتی",
      description:
        "محتوای اختصاصی رویت، ابزارهای دیجیتال و اتوماسیون اداری و مدیریتی برای تیم‌های معماری، سازه و تأسیسات، ساخته‌شده برای فرآیند شما، به‌صورت ریموت.",
    },
    ui: {
      skip: "رفتن به محتوا",
      menu: "باز کردن منو",
      close: "بستن منو",
      langSwitch: "English",
      langName: "انگلیسی",
      demoRegion: "ویدیوی محصول‌ها",
      playHint: "این ویدیو صدا ندارد.",
    },
    nav: navFa,
    navCta: "شروع پروژه",
    hero: {
      eyebrow: "استودیوی سامانه‌های دیجیتال · ایران · ریموت",
      title: "قدم بعدی را باهم بسازیم.",
      lead:
        "محتوای اختصاصی رویت، ابزار دیجیتال سفارشی و اتوماسیون اداری و مدیریتی برای تیم‌های معماری، سازه و تأسیسات — ساخته‌شده برای فرآیند شما.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه",
      figureCaption: "مدل ETABS بازسازی‌شده به اسکلت بومی Revit — ۵٬۰۸۷ عضو",
      codeLines: [
        { t: "void CreateStructuralFraming(", k: true },
        { t: "EtabsMember m," },
        { t: "FramingType ft," },
        { t: "Level lvl)" },
      ],
    },
    frictions: {
      eyebrow: "۰۱ — زمان کجا می‌رود",
      title: "سه مشکل هر دفتر فنی",
      lead:
        "وقت ما صرف سه چیز می‌شود: کارهایی که هنوز دستی انجام می‌شوند، داده‌هایی که میان منابع پراکنده‌اند، و نرم‌افزارهایی که با هم ارتباط ندارند. سامانه‌ی مناسب، بیشترین اثر را دقیقاً در همین بخش‌ها ایجاد می‌کند.",
      items: [
        {
          n: "۰۱",
          title: "کار دستی تکرارشونده",
          body:
            "مراحلی که در هر پروژه به‌صورت دستی و مکرر انجام می‌شود. هر تکرار، فرصتی تازه است برای خطایی که تا رسیدن به نقشه‌های اجرایی از دید پنهان می‌ماند.",
        },
        {
          n: "۰۲",
          title: "داده‌ای که یک خانه‌ی واحد ندارد",
          body:
            "متره و برآورد، تصمیم‌های پراکنده بین فایل‌ها و مسیرهای کاری پخش‌شده بین افراد و نرم‌افزارها، مانع شکل‌گیری دورنمای کامل می‌شوند و در نتیجه، نیاز به بازبینی دستی را افزایش می‌دهند.",
        },
        {
          n: "۰۳",
          title: "ابزارهایی که با هم ارتباط ندارند",
          body:
            "هرکدام به‌تنهایی درست کار می‌کنند، اما کنار هم یک جریان پیوسته و قابل‌ردیابی از ابتدا تا انتها ندارند، انتقال هرکدام به دیگری دستی انجام شده و زمان ارزشمند از دست می‌رود.",
        },
      ],
    },
    products: {
      eyebrow: "۰۲ — محصولات",
      title: "سه مسیر ورود به کار",
      lead: "از هرکدام که شروع کنید، گام اول یکی است: درک کامل مسئله.",
      items: [
        {
          code: "P·۰۱",
          title: "محتوای تخصصی رویت",
          body:
            "فمیلی‌ای که فقط خوش‌ترسیم نیست؛ داخل مدل و در شرایط واقعی پروژه عملکرد متناسبی دارد.",
          bullets: [
            "فمیلی محصول برای تولیدکنندگان",
            "کتابخانه‌ی استاندارد دفاتر طراحی",
            "فمیلی پروژه، متناسب با LOD",
            "بهینه‌سازی و استانداردسازی کتابخانه",
          ],
          href: "/fa/products/#revit-families",
        },
        {
          code: "P·۰۲",
          title: "ابزارهای دیجیتال اختصاصی",
          body:
            "کلیک کمتر، خطای کمتر و تمرکز بیشتر بر کاری که واقعاً اهمیت دارد. هر ابزار پیش از شروع توسعه، بر اساس روند کاری واقعی تیم بررسی می‌شود.",
          bullets: [
            "پلاگین و افزونه‌ی اختصاصی رویت",
            "کنترل کیفیت مدل و بررسی چک‌لیست",
            "مدیریت خروجی و شیت‌ها",
            "ابزارهای داده و اسکریپت Dynamo",
          ],
          href: "/fa/products/#digital-tools",
        },
        {
          code: "P·۰۳",
          title: "اتوماسیون هوشمند",
          body:
            "یک جریان یکپارچه و قابل‌کنترل، از قرارداد تا اجرا و گزارش. سیستم کارها را پیش می‌برد، کنترل و تصمیم‌گیری همچنان در اختیار تیم می‌ماند.",
          bullets: [
            "هوشمندسازی فرآیند کاری",
            "یکپارچه‌سازی نرم‌افزارها و داده‌ها",
            "داشبوردهای عملیاتی",
            "دستیارهای هوش مصنوعی سازمانی",
          ],
          href: "/fa/products/#automation",
        },
      ],
      more: "مشاهده",
    },
    demo: {
      eyebrow: "۰۳ — ابزارها در عمل",
      title: "دو ابزار، از ابتدا تا انتها",
      lead:
        "هر دو برای یک مسئله‌ی تبدیل خروجی نرم‌افزاری به نرم‌افزاری دیگر طراحی شدند، فرآیندی که پیش از این به‌صورت دستی توسط تیم انجام می‌شد.",
      note: "ویدیوها بی‌صدا هستند و بدون صدا پخش می‌شوند.",
      tabs: [
        {
          id: "c2r",
          tab: "C2R",
          flow: "CAD → Revit",
          title: "ساخت مدل رویت از روی نقشه‌های هماهنگ‌شده‌ی CAD",
          body:
            "به‌جای بازترسیم دستی خطوط نقشه توسط تیم، افزونه نقشه را می‌خواند و بر اساس آن، المان‌های بومی رویت را می‌سازد. دیوارها در تایپ مدنظر طراح و در کنار کف‌ها، ترازها و بازشوها در محل طراحی‌شده قرار گرفته، در نتیجه مدل مستقیماً از نقشه شکل می‌گیرد.",
          specs: [
            { k: "ورودی", v: "نقشه‌های هماهنگ‌شده‌ی CAD" },
            { k: "خروجی", v: "المان‌های بومی Revit" },
            { k: "بستر اجرا", v: "Revit" },
          ],
          src: "/videos/artinext-c2r.mp4",
          poster: "/videos/artinext-c2r-poster.jpg",
        },
        {
          id: "e2r",
          tab: "E2R",
          flow: "ETABS → Revit",
          title: "بازسازی مدل سازه‌ی ETABS به‌صورت اسکلت بومی Revit",
          body:
            "مدل به‌صورت زنده در نمای ایزومتریک سه‌بعدی رویت ساخته می‌شود و ابزار هم‌زمان گزارش می‌دهد، تعداد المان‌های پردازش‌شده، تعداد تیرها، ستون‌ها و بادبندهای مدل‌شده، اعضای غیرمستر، و مهم‌تر از همه، آنچه ساخته نشده است. هیچ المانی بی‌صدا از فرآیند حذف نمی‌شود، هر مورد تبدیل‌نشده روی صفحه قابل‌مشاهده و پیگیری است.",
          specs: [
            { k: "ورودی", v: "خروجی Excel از ETABS" },
            { k: "خروجی", v: "اسکلت سازه‌ای در Revit" },
            { k: "گزارش", v: "شمارش تمام المان‌ها، شامل موارد ناموفق" },
          ],
          src: "/videos/artinext-e2r.mp4",
          poster: "/videos/artinext-e2r-poster.jpg",
        },
      ],
    },
    process: {
      eyebrow: "۰۴ — فرآیند",
      title: "کشف، تعریف، ساخت، تکامل",
      lead: "چهار مرحله، با تمرکز بر حذف بیشترین ریسک در دو مرحله‌ی نخست.",
      steps: [
        {
          n: "۰۱",
          title: "کشف",
          body:
            "جریان کاری را بررسی می‌کنیم، نه نسخه‌ی مستندشده‌ی آن را. می‌بینیم چه چیزی به‌صورت دستی انجام می‌شود، چه کسی آن را انجام می‌دهد و خطاها معمولاً در کجا رخ می‌دهند.",
        },
        {
          n: "۰۲",
          title: "تعریف",
          body:
            "پیش از پیشنهاد هر ابزار، مسئله به‌طور کامل صورت‌بندی می‌شود و معیارهای مشخصی برای ارزیابی موفقیت آن در مراحل اجرا و پس از آن تعیین می‌شود.",
        },
        {
          n: "۰۳",
          title: "ساخت",
          body:
            "راهکار بر اساس استانداردها و نیازهای واقعی کاربران شما ساخته می‌شود. هر لایه‌ی پیچیدگی باید ضرورت نیاز و ارزش خود را ثابت کند.",
        },
        {
          n: "۰۴",
          title: "تکامل",
          body:
            "سامانه‌ها به‌گونه‌ای طراحی می‌شوند که هم‌زمان با رشد و تغییر کار شما، قابلیت پیشرفت و تطبیق داشته باشند، تا خود ابزار به مانعی در مسیر بعدی شما تبدیل نشود.",
        },
      ],
    },
    rnd: {
      eyebrow: "۰۵ — تحقیق و توسعه",
      title: "نمونه‌ی اولیه، یادگیری سریع، تصمیم بهتر",
      lead:
        "فناوری جدید تنها زمانی وارد محصول می‌شود که مسئله، داده و معیار موفقیت آن روشن و قابل‌آزمون باشد. نمونه‌سازی مرحله‌ای مشخص می‌کند چه چیزی کار می‌کند، چه چیزی نیاز به تغییر دارد و چه چیزی اساساً نباید ساخته شود، پیش از آنکه سرمایه‌گذاری کامل انجام شود.",
      points: [
        "آزمودن ایده پیش از تعهد بودجه",
        "فهمیدن آنچه باید تغییر کند، وقتی تغییر هنوز ارزان است",
        "کشف آنچه اصلاً نباید ساخته شود",
      ],
      cta: "تحقیق و توسعه چگونه کار می‌کند",
      href: "/fa/research-development/",
    },
    capabilities: {
      eyebrow: "۰۶ — توانمندی‌ها",
      title: "دامنه‌ی کاری ما",
      lead: "توانمندی‌های فنی پشت سه شکل اصلی محصولات.",
      groups: [
        {
          title: "محتوای BIM و Revit",
          items: [
            "ساخت فمیلی‌های پارامتریک",
            "فمیلی محصول برای تولیدکنندگان",
            "کتابخانه‌ی استاندارد برای دفاتر فنی",
            "فمیلی پروژه متناسب با LOD",
            "ارزیابی و بهینه‌سازی کتابخانه‌ها",
          ],
        },
        {
          title: "ابزارهای دیجیتال اختصاصی",
          items: [
            "پلاگین و افزونه‌ی رویت",
            "کنترل‌کننده کیفیت و بررسی چک‌لیست‌ها",
            "توسعه‌ی اسکریپت‌های Dynamo",
            "مدیریت خروجی و شیت‌ها",
            "ابزارهای تبدیل مدل و داده",
          ],
        },
        {
          title: "اتوماسیون و داده",
          items: [
            "تسریع‌سازی جریان و فرآیند کاری",
            "یکپارچه‌سازی نرم‌افزارها و داده‌ها",
            "داشبوردهای عملیاتی",
            "سامانه‌های مدل‌سازی و داده",
            "امکان‌سنجی کاربرد هوش مصنوعی",
          ],
        },
      ],
    },
    insights: {
      eyebrow: "۰۷ — بینش‌ها",
      title: "نوشته‌شده از دل کار",
      lead: "هر نوشته حاصل تصمیم و نتیجه‌گیری‌ای است که در جریان کاری یک پروژه‌ی واقعی با آن روبه‌رو شده‌ایم.",
      items: [
        {
          title: "انتخاب شرکت توسعه پلاگین رویت",
          excerpt:
            "خطرناک‌ترین مشکل در همکاری با یک شرکت توسعه پلاگین، معمولاً از نمونه‌کار ضعیف ناشی نمی‌شود، بلکه از جزئیات کوچکی است که هنگام ارزیابی بررسی نشده‌اند.",
          date: "۱۴۰۵/۰۶/۰۷",
          href: "/fa/articles/revit-plugin-development-company/",
        },
        {
          title: "توسعه اسکریپت اختصاصی Dynamo دقیقاً چه چیزی را جایگزین می‌کند؟",
          excerpt:
            "گرافی که یک‌بار روی مدل سازنده‌ی خود اجرا می‌شود، یک آزمایش است؛ کاری که آن را به ابزار تبدیل می‌کند، بخشی است که روی صفحه‌ی Dynamo دیده نمی‌شود.",
          date: "۱۴۰۵/۰۶/۰۷",
          href: "/fa/articles/custom-dynamo-script-development/",
        },
        {
          title: "هوشمندسازی فرآیند کاری در صنعت ساختمان از کجا شروع می‌شود؟",
          excerpt:
            "سقف آنچه ارزش خودکارسازی دارد، معمولاً تست‌نشده است، نه واقعی.",
          date: "۱۴۰۵/۰۶/۰۶",
          href: "/fa/articles/aec-workflow-automation/",
        },
      ],
      cta: "همه‌ی بینش‌ها",
      href: "/fa/articles/",
    },
    faq: {
      eyebrow: "۰۸ — پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "می‌شود فقط پلاگینی را که خودمان انتخاب کرده‌ایم نصب کنید؟",
          a: "نه. اگر آنچه می‌خواهید یک قالب آماده یا نصب یک پلاگین عمومی بدون هیچ بازبینی فرآیندی است، ما استودیوی مناسبی نیستیم و همین را می‌گوییم به‌جای اینکه کار را بپذیریم. هر پروژه از مسئله شروع می‌شود، نه از محصولی از پیش ساخته‌شده.",
        },
        {
          q: "کجا مستقر هستید و آیا می‌توانید به‌صورت ریموت با تیم ما کار کنید؟",
          a: "ما در ایران مستقریم و به‌صورت ریموت با تیم‌های معماری، سازه و تأسیسات کار می‌کنیم. کار ریموت شیوه‌ی معمول کار ماست، نه استثنا.",
        },
        {
          q: "قیمت یک ابزار اختصاصی چگونه تعیین می‌شود؟",
          a: "بر اساس پیچیدگی جریان کاری، نیازهای یکپارچه‌سازی و تعداد کاربران؛ نه بر اساس فهرست قیمت ثابت. پلاگینی که شبیه یک دکمه به نظر می‌رسد، بر اساس هفته‌ها تصمیم پشت آن دکمه قیمت می‌خورد.",
        },
        {
          q: "می‌شود از چیزی کوچک شروع کرد؟",
          a: "بله، و اغلب همین حرکت درست است. نمونه‌ی مرحله‌ای، ایده و داده و معیار موفقیت را پیش از سرمایه‌گذاری کامل می‌آزماید — از جمله این احتمال که اصلاً نباید ساخته شود.",
        },
        {
          q: "به فارسی و انگلیسی کار می‌کنید؟",
          a: "هر دو. این سایت به فارسی و انگلیسی روی نشانی‌های متناظر منتشر می‌شود و پروژه‌ها به زبانی پیش می‌روند که تیم شما با آن کار می‌کند.",
        },
        {
          q: "در نخستین گفت‌وگو چه اتفاقی می‌افتد؟",
          a: "جریان کاری را که می‌خواهید تغییر دهید مرور می‌کنیم: امروز چه چیزی دستی انجام می‌شود، داده کجا زندگی می‌کند، نتیجه‌ی خوب دقیقاً چه شکلی است، و اصلاً آیا ابزار پاسخ درستی هست یا نه.",
        },
      ],
    },
    cta: {
      eyebrow: "۰۹ — شروع",
      title: "اولین چیزی که می‌خواهید تغییر کند چیست؟",
      lead:
        "از جریان کاری‌تان بگویید، کجا زمان از دست می‌رود و کجا خطا ایجاد می‌شود. بعد تصمیم می‌گیریم چه چیزی باید ساخته شود. اگر راه‌حل ابزار نباشد، همان ابتدا می‌گوییم.",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      notFor:
        "اگر فقط به‌دنبال یک قالب آماده یا پلاگین پیش‌ساخته هستید و نمی‌خواهید فرآیندتان بررسی شود، احتمالاً جای درستی نیامده‌اید.",
    },
    footer: {
      tagline: "استودیوی سامانه‌های دیجیتال، به‌صورت ریموت در کنار تیم‌های معماری، سازه و تأسیسات.",
      navTitle: "سایت",
      contactTitle: "تماس",
      legal: "ARTINEXT — DESIGN TECHNOLOGY / IRAN",
    },
  },
};
