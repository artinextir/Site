import type { Localized } from "@/lib/i18n/config";
import type { ArticleContent, ArticleImage } from "@/content/article-types";

const img = (file: string, alt: { fa: string; en: string }): Localized<ArticleImage> => ({
  fa: {
    src: `/images/articles/aec-workflow-automation/${file}.webp`,
    srcSmall: `/images/articles/aec-workflow-automation/${file}-640.webp`,
    srcMedium: `/images/articles/aec-workflow-automation/${file}-960.webp`,
    alt: alt.fa,
    width: 1200,
    height: 627,
  },
  en: {
    src: `/images/articles/aec-workflow-automation/${file}.webp`,
    srcSmall: `/images/articles/aec-workflow-automation/${file}-640.webp`,
    srcMedium: `/images/articles/aec-workflow-automation/${file}-960.webp`,
    alt: alt.en,
    width: 1200,
    height: 627,
  },
});

const heroImg = img("aec-workflow-automation-hero", {
  fa: "دستی با قلم دیجیتال در حال تیک‌زدن یک چک‌لیست روی تبلت، نماد اتوماسیون گردش کار AEC",
  en: "A hand checking off a digital checklist on a tablet with a stylus, standing in for AEC workflow automation",
});
const whatItMeansImg = img("aec-automation-repetitive-task-workflow", {
  fa: "دستی در حال مهرزدن یک برگه، نماد مرحله تکراری تأیید در یک فرایند اداری",
  en: "A hand stamping a document, standing in for a repetitive approval step in a process",
});
const whereToStartImg = img("aec-automation-untested-ceiling-limits", {
  fa: "نمای بالا از یک پلکان سنگی متقارن با یک نفر نشسته روی آن، نماد سقفی که هیچ‌وقت تست نشده",
  en: "An overhead view of a symmetrical stone staircase with someone seated on it, standing in for a ceiling that's never been tested",
});
const firstProcessImg = img("aec-workflow-first-process-selection", {
  fa: "بررسی یادداشت‌های چسبان روی تخته برنامه‌ریزی، نماد انتخاب اولین فرایند برای اتوماسیون",
  en: "Reviewing sticky notes on a planning board, standing in for choosing the first process to automate",
});
const dataProblemImg = img("aec-fragmented-data-bottleneck", {
  fa: "پوشه‌ها و دفترچه‌های پراکنده روی میز جلسه، نماد داده‌ای که در هیچ‌جا کامل نیست",
  en: "Scattered folders and notebooks on a meeting table, standing in for data that lives nowhere whole",
});
const dashboardImg = img("aec-operational-dashboard-screen", {
  fa: "انگشتی که به نمودار میله‌ای روی صفحه تبلت اشاره می‌کند، نماد داشبورد عملیاتی",
  en: "A finger pointing at a bar chart on a tablet screen, standing in for an operational dashboard",
});
const buildOrPartnerImg = img("aec-automation-build-or-partner-team", {
  fa: "سه نفر دور یک لپ‌تاپ در حال گفتگو، نماد تصمیم بین ساخت داخلی یا همکاری بیرونی",
  en: "Three people talking around a laptop, standing in for the decision between building in-house or bringing in outside help",
});

export const articleAecWorkflowAutomation: Localized<ArticleContent> = {
  fa: {
    slug: "aec-workflow-automation",
    meta: {
      title: "اتوماسیون گردش کار AEC از کجا واقعا شروع می‌شود؟ — آرتینکست",
      description:
        "اتوماسیون گردش کار AEC یعنی خودکارسازی یک فرایند تکراری مشخص، نه خرید یک ابزار جدید. راهنمای انتخاب اولین فرایند، رفع مشکل داده و تصمیم ساخت یا همکاری.",
    },
    breadcrumb: "اتوماسیون گردش کار AEC از کجا واقعا شروع می‌شود؟",
    category: "اتوماسیون",
    title: "اتوماسیون گردش کار AEC از کجا واقعا شروع می‌شود؟",
    leadOpinion: "سقف چیزی که ارزش خودکارسازی دارد، معمولا تست‌نشده است، نه واقعی.",
    publishedAt: "2026-08-28",
    publishedLabel: "۲۰۲۶/۰۸/۲۸",
    author: {
      name: "تیم آرتینکست",
      role: "استودیوی سیستم‌های دیجیتال",
      bio: "تیمی که اتوماسیون گردش کار، یکپارچه‌سازی داده و داشبورد عملیاتی را برای دفاتر و شرکت‌های فنی طراحی می‌کند.",
      href: "/about",
    },
    tocHeading: "فهرست مطالب",
    toc: [
      { id: "overview", label: "پاسخ کوتاه" },
      { id: "what-it-means", label: "اتوماسیون گردش کار AEC یعنی چه" },
      { id: "where-to-start", label: "سقفی که هیچ‌وقت تست نشده" },
      { id: "first-process", label: "چطور اولین فرایند را انتخاب کنیم" },
      { id: "data-problem", label: "گلوگاه واقعی معمولا داده است، نه وظیفه" },
      { id: "dashboard-payoff", label: "کجا یک داشبورد واقعا جواب می‌دهد" },
      { id: "build-or-partner", label: "ساخت داخلی یا همکاری بیرونی" },
      { id: "conclusion", label: "جمع‌بندی" },
      { id: "faq", label: "پرسش‌های متداول" },
    ],
    intro:
      "اتوماسیون گردش کار AEC یعنی یک فرایند تکراری و مشخص - ارجاع یک تأیید، تولید یک گزارش هفتگی، انتقال داده بین دو نرم‌افزار - را از حالت دستی به یک جریان خودکار و قابل‌ردیابی تبدیل کنید. این با «خریدن یک ابزار جدید» یا «اضافه‌کردن هوش مصنوعی» فرق دارد؛ همان‌طور که [ابزار اختصاصی رویت](/revit-plugin-development-tehran) یک لایه جداست، اتوماسیون گردش کار لایه‌ای عمومی‌تر است که هر نرم‌افزاری می‌تواند داخلش قرار بگیرد.\n\nیک دانشجو در دانشگاهی سخت‌گیر، یک پروژه اختیاری با حداکثر ۲ نمره اضافه برداشت؛ نمره‌اش از ۱۸.۵ شروع می‌شد. کار را آن‌قدر جدی گرفت که استاد به‌جای ۲ نمره کامل، فقط ۱ نمره داد - نه چون کار ضعیف بود، دقیقا چون آن‌قدر خوب بود که نمره کامل می‌شد. **سقفی که کسی برایش تعیین کرده، معمولا واقعی نیست؛ فقط چیزی است که هیچ‌کس امتحانش نکرده.** همین قاعده درباره اتوماسیون هم صادق است: بیشتر دفاتر سقف را جایی می‌گذارند که هیچ‌وقت واقعا تستش نکرده‌اند.",
    heroImage: heroImg.fa,
    sections: [
      {
        id: "what-it-means",
        heading: "اتوماسیون گردش کار AEC یعنی چه",
        image: whatItMeansImg.fa,
        paragraphs: [
          "اتوماسیون گردش کار سه شکل رایج دارد: ارجاع و مسیریابی خودکار یک تأیید به فرد درست، تولید خودکار یک گزارش دوره‌ای از داده‌ای که همین حالا وجود دارد، و انتقال داده بین دو نرم‌افزار بدون کپی‌پیست دستی. هیچ‌کدام از این‌ها به هوش مصنوعی پیچیده نیاز ندارد؛ هر سه‌شان معمولا با یک جریان کاری ساده و چند قانون مشخص قابل‌ساخت‌اند.",
          "چیزی که این را از یک افزونه رویت جدا می‌کند این است که این لایه به یک نرم‌افزار خاص وابسته نیست. یک جریان اتوماسیون می‌تواند بین ایمیل، یک صفحه گسترده و یک سیستم مدیریت پروژه حرکت کند، بدون اینکه اصلا داخل رویت یا هر نرم‌افزار طراحی دیگری باز شود.",
        ],
      },
      {
        id: "where-to-start",
        heading: "سقفی که هیچ‌وقت تست نشده",
        image: whereToStartImg.fa,
        paragraphs: [
          "اکثر دفاتر فرض می‌کنند اتوماسیون فقط برای «کارهای واقعا تکراری و ساده» جواب می‌دهد - یک اکسپورت، یک فرمت‌بندی - و هر چیز پیچیده‌تر را خارج از دسترس می‌دانند. این فرض معمولا هیچ‌وقت واقعا تست نشده؛ فقط یک عادت ذهنی است.",
          "در عمل، بیشتر فرایندهایی که «خیلی پیچیده‌اند» فقط چند تصمیم شرطی هستند که هیچ‌کس آن‌ها را مکتوب نکرده. وقتی همان تصمیم‌ها روی کاغذ نوشته شوند - اگر X باشد، Y را انجام بده - همان چیزی که غیرقابل‌خودکارسازی به‌نظر می‌رسید، تبدیل به یک جریان ساده می‌شود.",
        ],
      },
      {
        id: "first-process",
        heading: "چطور اولین فرایند را انتخاب کنیم",
        image: firstProcessImg.fa,
        paragraphs: [
          "اولین فرایند را بر اساس سه معیار انتخاب کنید:",
        ],
        list: {
          ordered: true,
          items: [
            "**تکرار واقعی**: کاری که هفتگی یا روزانه اتفاق می‌افتد، نه یک‌بار در سال.",
            "**تعداد نفرات درگیر**: هرچه افراد بیشتری همان کار را انجام دهند، بازگشت زمانی سریع‌تر است.",
            "**قوانین مشخص**: فرایندی که قدم‌هایش را می‌توان روی کاغذ نوشت، نه چیزی که هر بار بر اساس قضاوت شخصی تغییر می‌کند.",
          ],
        },
      },
      {
        id: "data-problem",
        heading: "گلوگاه واقعی معمولا داده است، نه وظیفه",
        image: dataProblemImg.fa,
        paragraphs: [
          "خیلی از تلاش‌های اتوماسیون در همان قدم اول گیر می‌کنند، نه چون منطق پیچیده است، بلکه چون داده لازم در سه فایل مختلف، دست دو نفر متفاوت و دو فرمت ناسازگار پخش شده. یک مطالعه قدیمی اما هنوز پرارجاع NIST هزینه سالانه ناسازگاری داده در صنعت ساخت‌وساز آمریکا را در حد میلیاردها دلار برآورد کرده بود.",
          "قبل از خودکارسازی یک فرایند، اول بررسی کنید داده پشت آن کجاست و چند نسخه از آن وجود دارد. اتوماسیونی که روی داده پخش‌شده ساخته شود، فقط همان پخش‌شدگی را سریع‌تر تکرار می‌کند.",
        ],
      },
      {
        id: "dashboard-payoff",
        heading: "کجا یک داشبورد واقعا جواب می‌دهد",
        image: dashboardImg.fa,
        paragraphs: [
          "داشبورد وقتی ارزش دارد که یک تصمیم واقعی و تکرارشونده را سریع‌تر می‌کند - مثلا اینکه کدام پروژه از برنامه عقب است، یا کدام تیم بیشترین حجم درخواست تأیید معلق دارد. داشبوردی که کسی هفته‌ای یک‌بار نگاهش می‌کند اما هیچ تصمیمی بر اساسش نمی‌گیرد، فقط یک نمایشگر زیباست.",
          "قبل از ساخت یک داشبورد، مشخص کنید دقیقا چه تصمیمی قرار است سریع‌تر گرفته شود و چه کسی آن را می‌گیرد. بدون آن پاسخ، داشبورد همان مشکل داده پخش‌شده را فقط با رنگ‌های قشنگ‌تر نشان می‌دهد.",
        ],
      },
      {
        id: "build-or-partner",
        heading: "ساخت داخلی یا همکاری بیرونی",
        image: buildOrPartnerImg.fa,
        paragraphs: [
          "اگر فرایند ساده است و در تیم کسی با ابزارهای بدون کد (No-Code) راحت است، ساخت داخلی منطقی‌تر است؛ نیازی به کمک بیرونی نیست. کمک بیرونی وقتی معنا پیدا می‌کند که فرایند چند سیستم را همزمان لمس می‌کند، داده پشتش واقعا پخش و ناهماهنگ است، یا نتیجه باید به یک داشبورد قابل‌اتکا با منطق دائمی تبدیل شود.",
          "این دقیقا همان جایی است که [کار ما روی اتوماسیون هوشمند](/products/automation) با فرایند شروع می‌شود، نه با ابزار: اول همان‌جایی را پیدا می‌کنیم که کار واقعا کند یا نامرئی می‌شود، بعد تصمیم می‌گیریم چه چیزی واقعا لازم است. اگر فقط یک اسکریپت ساده جواب می‌دهد، همان را پیشنهاد می‌دهیم، نه یک سیستم بزرگ‌تر از نیاز واقعی.",
        ],
      },
    ],
    conclusion:
      "اتوماسیون گردش کار AEC از یک ابزار شروع نمی‌شود؛ از یک فرایند مشخص، تکراری و مستندشده شروع می‌شود. سقفی که فکر می‌کنید دارید، معمولا فقط چیزی است که هیچ‌وقت واقعا امتحانش نکرده‌اید؛ اولین قدم واقعی، پیداکردن همان فرایند و داده پشتش است، نه خریدن یک پلتفرم جدید.",
    internalHeading: "مطالب مرتبط",
    internalLinks: [
      { label: "اتوماسیون هوشمند", href: "/products/automation" },
      { label: "راهکارها و خدمات", href: "/solutions" },
      { label: "ابزارهای دیجیتال اختصاصی", href: "/products/digital-tools" },
      { label: "توسعه پلاگین رویت در تهران", href: "/revit-plugin-development-tehran" },
      { label: "درباره ما", href: "/about" },
    ],
    externalHeading: "منابع",
    externalLinks: [
      {
        label: "NIST — Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry",
        href: "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0",
      },
      { label: "buildingSMART International — Standards", href: "https://www.buildingsmart.org/standards/" },
    ],
    faqHeading: "پرسش‌های متداول",
    faq: [
      {
        question: "اتوماسیون گردش کار AEC دقیقا یعنی چه؟",
        answer:
          "یعنی یک فرایند تکراری - ارجاع یک تأیید، تولید یک گزارش، انتقال داده بین دو نرم‌افزار - را از حالت دستی به یک جریان خودکار تبدیل کنید. این با ابزار یا نرم‌افزار خاصی مثل رویت گره‌نخورده؛ لایه‌ای عمومی‌تر است.",
      },
      {
        question: "کدام فرایندها را باید اول خودکار کنیم؟",
        answer:
          "فرایندی که واقعا تکرار می‌شود (هفتگی یا روزانه)، چند نفر را درگیر می‌کند و قوانینش مشخص و قابل‌نوشتن روی کاغذ است. فرایندی که هر بار بر اساس قضاوت شخصی تغییر می‌کند، کاندید خوبی برای شروع نیست.",
      },
      {
        question: "برای شروع اتوماسیون حتما به هوش مصنوعی نیاز داریم؟",
        answer:
          "نه. بیشتر اتوماسیون‌های واقعی AEC فقط چند قانون شرطی و یک جریان ساده‌اند - ارجاع، فرمت‌بندی، انتقال داده. هوش مصنوعی برای موارد خاص مفید است، اما شرط لازم برای شروع نیست.",
      },
      {
        question: "فرق خودکارسازی یک وظیفه با فقط استفاده از نرم‌افزار بیشتر چیست؟",
        answer:
          "نرم‌افزار بیشتر یعنی همان کار دستی را در یک برنامه جدید انجام بدهید. اتوماسیون یعنی آن کار دیگر نیازی به دست انسان ندارد - قانون از قبل تعریف شده و جریان خودش اجرا می‌شود.",
      },
      {
        question: "چطور بفهمیم مشکل واقعی خودِ فرایند است یا داده پشت آن؟",
        answer:
          "اگر داده لازم در چند فایل و چند فرمت ناسازگار پخش است، مشکل از داده شروع می‌شود، نه از فرایند. اتوماسیونی که روی داده پخش‌شده ساخته شود، فقط همان مشکل را سریع‌تر تکرار می‌کند.",
      },
      {
        question: "کی باید برای اتوماسیون به‌جای ساخت داخلی، کمک بیرونی بگیریم؟",
        answer:
          "وقتی فرایند چند سیستم را همزمان لمس می‌کند، داده پشتش واقعا ناهماهنگ است، یا نتیجه باید به یک داشبورد با منطق دائمی تبدیل شود. برای یک فرایند ساده که تیم داخلی با ابزار بدون کد راحت است، کمک بیرونی لازم نیست.",
      },
      {
        question: "آیا اتوماسیون گردش کار جای افراد را می‌گیرد؟",
        answer:
          "نه؛ کارِ تکراری و بدون قضاوت را از دست انسان می‌گیرد، نه خودِ تصمیم را. کسی که قبلا وقتش صرف ارجاع دستی یا فرمت‌بندی می‌شد، همان وقت را صرف تصمیمی می‌کند که واقعا به قضاوت انسانی نیاز دارد.",
      },
    ],
  },
  en: {
    slug: "aec-workflow-automation",
    meta: {
      title: "Where AEC Workflow Automation Should Start — ARTINEXT",
      description:
        "AEC workflow automation means automating one specific repeated process, not buying a new tool. A guide to picking the first process, fixing the data, and build vs. partner.",
    },
    breadcrumb: "Where AEC workflow automation should start",
    category: "Automation",
    title: "Where AEC workflow automation should start",
    leadOpinion: "The ceiling on what's worth automating is usually untested, not real.",
    publishedAt: "2026-08-28",
    publishedLabel: "Aug 28, 2026",
    author: {
      name: "ARTINEXT Team",
      role: "Digital Systems Studio",
      bio: "The team that designs workflow automation, data integration, and operational dashboards for technical offices and firms.",
      href: "/about",
    },
    tocHeading: "Table of contents",
    toc: [
      { id: "overview", label: "The short answer" },
      { id: "what-it-means", label: "What AEC workflow automation actually means" },
      { id: "where-to-start", label: "The ceiling nobody has tested" },
      { id: "first-process", label: "How to choose the first process" },
      { id: "data-problem", label: "The real bottleneck is usually the data" },
      { id: "dashboard-payoff", label: "Where a dashboard actually pays off" },
      { id: "build-or-partner", label: "Build in-house or bring in outside help" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    intro:
      "AEC workflow automation means turning one specific, repeated process — routing an approval, generating a weekly report, moving data between two pieces of software — from manual into an automatic, traceable flow. That's different from \"buying a new tool\" or \"adding AI.\" The same way [custom Revit plugin work](/revit-plugin-development-tehran) is its own layer, workflow automation is a more general layer that any software can sit inside.\n\nAt a notoriously demanding university, a student took on an optional project worth a maximum of 2 extra credit points, starting from a grade of 18.5. He took the work seriously enough that the professor gave 1 point instead of the full 2, not because the work fell short, but because it was good enough that 2 points would have meant a perfect score. **A ceiling someone else set is usually not real. It's just something nobody has tested.** The same rule applies to automation: most offices set the ceiling somewhere they've never actually tried to push past.",
    heroImage: heroImg.en,
    sections: [
      {
        id: "what-it-means",
        heading: "What AEC workflow automation actually means",
        image: whatItMeansImg.en,
        paragraphs: [
          "Workflow automation shows up in three common shapes: automatically routing an approval to the right person, generating a recurring report from data that already exists, and moving data between two systems without manual copy-paste. None of these need complex AI; all three are usually buildable with a simple flow and a handful of defined rules.",
          "What separates this from a Revit add-in is that this layer doesn't depend on any one piece of software. An automation flow can move between email, a spreadsheet, and a project management system without ever opening Revit or any other design software at all.",
        ],
      },
      {
        id: "where-to-start",
        heading: "The ceiling nobody has tested",
        image: whereToStartImg.en,
        paragraphs: [
          "Most offices assume automation only works for \"genuinely repetitive, simple work\" — an export, a formatting pass — and treat anything more complex as out of reach. That assumption is usually never actually tested. It's just a habit of thought.",
          "In practice, most processes that \"seem too complicated\" are just a few conditional decisions nobody has written down. Once those decisions are on paper — if X, then do Y — what looked impossible to automate turns into a simple flow.",
        ],
      },
      {
        id: "first-process",
        heading: "How to choose the first process",
        image: firstProcessImg.en,
        paragraphs: [
          "Pick the first process against three criteria:",
        ],
        list: {
          ordered: true,
          items: [
            "**Genuine repetition**: something that happens weekly or daily, not once a year.",
            "**How many people it touches**: the more people doing the same task, the faster the payback.",
            "**Defined rules**: a process whose steps can be written down, not one that changes by personal judgment every time.",
          ],
        },
      },
      {
        id: "data-problem",
        heading: "The real bottleneck is usually the data",
        image: dataProblemImg.en,
        paragraphs: [
          "Most automation efforts stall at the first step, not because the logic is complex, but because the data it needs is spread across three different files, two different people, and two incompatible formats. An old but still widely cited NIST study put the annual cost of data interoperability problems in the U.S. capital facilities industry in the billions of dollars.",
          "Before automating a process, check where the data behind it actually lives and how many versions of it exist. Automation built on top of scattered data just repeats the same scattering faster.",
        ],
      },
      {
        id: "dashboard-payoff",
        heading: "Where a dashboard actually pays off",
        image: dashboardImg.en,
        paragraphs: [
          "A dashboard earns its cost when it makes one real, recurring decision faster — which project is behind schedule, or which team is sitting on the most pending approvals. A dashboard someone glances at once a week without acting on it is just a nice-looking display.",
          "Before building a dashboard, name the exact decision it's supposed to speed up and who makes it. Without that answer, the dashboard just shows the same scattered-data problem in nicer colors.",
        ],
      },
      {
        id: "build-or-partner",
        heading: "Build in-house or bring in outside help",
        image: buildOrPartnerImg.en,
        paragraphs: [
          "If the process is simple and someone on the team is comfortable with no-code tools, building it in-house makes more sense; outside help isn't needed. Outside help earns its place when a process touches several systems at once, the data behind it is genuinely scattered, or the result needs to become a dashboard with durable, reliable logic.",
          "This is exactly where [our intelligent automation work](/products/automation) starts with the process, not the tool: we find where the work actually slows down or goes invisible first, then decide what's genuinely needed. If a simple script is enough, that's what we recommend, not a bigger system than the problem calls for.",
        ],
      },
    ],
    conclusion:
      "AEC workflow automation doesn't start with a tool. It starts with one specific, repeated, documented process. The ceiling you think you have is usually just something you've never actually tested — the real first step is finding that process and the data behind it, not buying a new platform.",
    internalHeading: "Related reading",
    internalLinks: [
      { label: "Intelligent automation", href: "/products/automation" },
      { label: "Solutions & services", href: "/solutions" },
      { label: "Custom digital tools", href: "/products/digital-tools" },
      { label: "Revit plugin development in Tehran", href: "/revit-plugin-development-tehran" },
      { label: "About us", href: "/about" },
    ],
    externalHeading: "Further reading",
    externalLinks: [
      {
        label: "NIST — Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry",
        href: "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0",
      },
      { label: "buildingSMART International — Standards", href: "https://www.buildingsmart.org/standards/" },
    ],
    faqHeading: "FAQ",
    faq: [
      {
        question: "What does AEC workflow automation actually mean?",
        answer:
          "It means turning one repeated process — routing an approval, generating a report, moving data between two systems — from manual into an automatic flow. It isn't tied to a specific tool like Revit; it's a more general layer.",
      },
      {
        question: "Which processes should we automate first?",
        answer:
          "A process that genuinely repeats (weekly or daily), touches several people, and has rules clear enough to write down. A process that changes by personal judgment every time isn't a good starting candidate.",
      },
      {
        question: "Do we need AI to start automating anything?",
        answer:
          "No. Most real AEC automation is just a handful of conditional rules and a simple flow — routing, formatting, moving data. AI is useful for specific cases but isn't a requirement to get started.",
      },
      {
        question: "What's the difference between automating a task and just using more software?",
        answer:
          "More software means doing the same manual work inside a new app. Automation means that work no longer needs a human hand at all — the rule is already defined and the flow runs itself.",
      },
      {
        question: "How do we know if the real problem is the process or the data behind it?",
        answer:
          "If the data a process needs is scattered across several files and incompatible formats, the problem starts with the data, not the process. Automation built on top of scattered data just repeats the same problem faster.",
      },
      {
        question: "When should we bring in outside help instead of building automation ourselves?",
        answer:
          "When the process touches several systems at once, the data behind it is genuinely inconsistent, or the result needs to become a dashboard with durable logic. For a simple process a team is comfortable handling with no-code tools, outside help isn't needed.",
      },
      {
        question: "Does workflow automation replace the people doing the work?",
        answer:
          "No; it removes the repetitive, judgment-free part of the work, not the decision itself. Time that used to go into manual routing or formatting goes instead into the decisions that actually need human judgment.",
      },
    ],
  },
};
