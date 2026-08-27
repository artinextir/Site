import type { Localized } from "@/lib/i18n/config";
import type { ArticleContent, ArticleImage } from "@/content/article-types";

const img = (file: string, alt: { fa: string; en: string }): Localized<ArticleImage> => ({
  fa: {
    src: `/images/articles/revit-plugin-development-cost/${file}.webp`,
    srcSmall: `/images/articles/revit-plugin-development-cost/${file}-640.webp`,
    srcMedium: `/images/articles/revit-plugin-development-cost/${file}-960.webp`,
    alt: alt.fa,
    width: 1200,
    height: 627,
  },
  en: {
    src: `/images/articles/revit-plugin-development-cost/${file}.webp`,
    srcSmall: `/images/articles/revit-plugin-development-cost/${file}-640.webp`,
    srcMedium: `/images/articles/revit-plugin-development-cost/${file}-960.webp`,
    alt: alt.en,
    width: 1200,
    height: 627,
  },
});

const heroImg = img("revit-plugin-development-cost-workspace", {
  fa: "میز کار توسعه‌دهنده با دو مانیتور کد، نماد برنامه‌ریزی هزینه توسعه پلاگین رویت",
  en: "A developer's dual-monitor workspace at night, standing in for scoping a Revit plugin development cost",
});
const driversImg = img("revit-plugin-cost-drivers-workflow", {
  fa: "چند نفر در حال بررسی نقشه فنی روی میز، نماد تحلیل جریان کار پیش از برآورد هزینه پلاگین",
  en: "A team reviewing a technical drawing on a table, standing in for mapping a workflow before pricing a plugin",
});
const tiersImg = img("revit-plugin-cost-by-project-scope", {
  fa: "بررسی پلان معماری و نمودار روی میز کار، نماد سه دسته متفاوت پروژه پلاگین رویت",
  en: "Reviewing a floor plan and a chart on a desk, standing in for the three different shapes of Revit plugin work",
});
const approachImg = img("revit-api-dynamo-forge-comparison", {
  fa: "دست‌ها روی لپ‌تاپ در حال نوشتن کد، نماد انتخاب بین اسکریپت داینامو، افزونه API رویت و Forge",
  en: "Hands typing code on a laptop, standing in for choosing between a Dynamo script, a Revit API add-in, and Forge",
});
const roiImg = img("revit-plugin-roi-time-savings", {
  fa: "ساعت شنی کنار یک لپ‌تاپ روی میز چوبی، نماد بازگشت زمانی سرمایه‌گذاری روی پلاگین",
  en: "An hourglass beside a laptop on a wooden desk, standing in for the time payback of a plugin",
});
const buildOrBuyImg = img("custom-revit-plugin-build-vs-buy", {
  fa: "نمای بالا از یک پیاده‌رو با یک مسیر منشعب، نماد تصمیم بین خرید افزونه آماده یا ساخت اختصاصی",
  en: "An overhead view of a pavement with a branching line, standing in for the choice between buying and building",
});
const scopingImg = img("revit-plugin-scoping-framework", {
  fa: "دفترچه طراحی با اسکیس دستی و خودکار، نماد مستندکردن فرایند پیش از درخواست برآورد پلاگین",
  en: "A sketchbook with hand-drawn design notes and a pen, standing in for documenting a process before requesting a plugin quote",
});

export const articleRevitPluginDevelopmentCost: Localized<ArticleContent> = {
  fa: {
    slug: "revit-plugin-development-cost",
    meta: {
      title: "توسعه پلاگین رویت چقدر هزینه دارد؟ — آرتینکست",
      description:
        "هزینه توسعه پلاگین رویت به پیچیدگی جریان کار، نیاز به یکپارچه‌سازی و تعداد کاربر بستگی دارد، نه یک لیست قیمت ثابت. عاملی که واقعا قیمت را تعیین می‌کند.",
    },
    breadcrumb: "توسعه پلاگین رویت چقدر هزینه دارد؟",
    category: "BIM و رویت",
    title: "توسعه پلاگین رویت چقدر هزینه دارد؟",
    leadOpinion:
      "پلاگینی که فقط یک دکمه به‌نظر می‌رسد، هیچ‌وقت بر اساس همان دکمه قیمت نمی‌خورد؛ بر اساس هفته‌ها کاری قیمت می‌خورد که پشت آن دکمه پنهان شده.",
    publishedAt: "2026-08-27",
    publishedLabel: "۲۰۲۶/۰۸/۲۷",
    author: {
      name: "تیم آرتینکست",
      role: "استودیوی سیستم‌های دیجیتال",
      bio: "تیمی که دامنه، معماری و هزینه واقعی پلاگین‌های اختصاصی رویت را برای دفاتر معماری و مهندسی برآورد و اجرا می‌کند.",
      href: "/about",
    },
    tocHeading: "فهرست مطالب",
    toc: [
      { id: "overview", label: "پاسخ کوتاه" },
      { id: "drivers", label: "چه چیزی واقعا قیمت را تعیین می‌کند" },
      { id: "tiers", label: "سه شکل متفاوت از کار پلاگین، سه بودجه متفاوت" },
      { id: "approach", label: "اسکریپت داینامو، افزونه API یا Forge — پول واقعا صرف کدام می‌شود" },
      { id: "roi", label: "پلاگین کی هزینه‌اش را برمی‌گرداند" },
      { id: "build-or-buy", label: "کی خرید یک افزونه آماده بهتر از ساخت اختصاصی است" },
      { id: "scoping", label: "چطور اولین پروژه پلاگین را دامنه‌بندی کنیم" },
      { id: "conclusion", label: "جمع‌بندی" },
      { id: "faq", label: "پرسش‌های متداول" },
    ],
    intro:
      "هزینه توسعه پلاگین رویت یک عدد ثابت نیست؛ هر برآوردی که پیش از دیدن جریان کار واقعی شما داده شود، یک حدس است با ظاهر یک عدد. سه چیز قیمت را تعیین می‌کند: پیچیدگی جریان کاری که پلاگین جایگزینش می‌شود، نیاز به ارتباط با یک سیستم دیگر، و تعداد نفراتی که هر روز از آن استفاده می‌کنند. پلاگینی که فقط نام شیت‌ها را در یک تمپلیت پروژه اصلاح می‌کند، پروژه‌ای کاملا متفاوت از پلاگینی است که داده زنده را از BIM 360 به یک داشبورد مدیریتی می‌کشد.\n\nیکی از ابزارهای خودمان فرایندی را که حدود دو هفته - گاهی نزدیک به یک ماه - طول می‌کشید، به حدود ده دقیقه کلیک‌کردن روی یک دکمه رساند. در تحویل نهایی، هیچ‌کس آن دو هفته را نمی‌بیند؛ فقط همان دکمه را می‌بیند، و همان دکمه است که با قیمت مقایسه می‌شود. **یک رابط کاربری ساده، تاریخچه فشرده‌شده است، نه نبود عمق**؛ قضاوت درباره هزینه یک ابزار بر اساس میزان سادگی‌ای که به کاربر نشان می‌دهد، دقیقا برعکس واقعیت است.",
    heroImage: heroImg.fa,
    sections: [
      {
        id: "drivers",
        heading: "چه چیزی واقعا قیمت را تعیین می‌کند",
        image: driversImg.fa,
        paragraphs: [
          "اولین عامل، پیچیدگی خودِ جریان کار است. اسکریپتی که یک محاسبه تکراری را روی مدل باز انجام می‌دهد، منطق ساده‌تری از ابزاری دارد که باید هندسه چند فمیلی را در لحظه تحلیل کند، تصمیم بگیرد و نتیجه را در پارامترهای درست بنویسد. پیچیدگی منطق، نه ظاهر رابط کاربری، جایی است که بیشتر ساعت‌های کار واقعا صرف آن می‌شود.",
          "عامل دوم، یکپارچه‌سازی است. پلاگینی که فقط داخل یک فایل رویت کار می‌کند، هیچ‌وقت هزینه‌ای مشابه پلاگینی ندارد که باید با BIM 360، یک ERP یا یک پایگاه داده بیرونی حرف بزند؛ هر اتصال بیرونی یعنی یک لایه احراز هویت، خطایابی و نگهداری بیشتر. عامل سوم، تعداد کاربران است: ابزاری که فقط برای یک مدل‌ساز ساخته می‌شود می‌تواند از بسیاری از حالت‌های خطا صرف‌نظر کند، اما ابزاری که قرار است در یک دفتر بیست‌نفره پخش شود، این لوکس را ندارد.",
        ],
      },
      {
        id: "tiers",
        heading: "سه شکل متفاوت از کار پلاگین، سه بودجه متفاوت",
        image: tiersImg.fa,
        paragraphs: [
          "قبل از هرچیز، این جدول قیمت نیست؛ یک الگو برای تشخیص این است که پروژه شما احتمالا به کدام سمت نزدیک‌تر است. سه شکل رایج در پروژه‌های پلاگین رویت وجود دارد و هرکدام دامنه کاری متفاوتی می‌طلبد:",
        ],
        list: {
          items: [
            "**یک ابزار تک‌منظوره** که یک کار مشخص و تکراری را در یک محیط رویت خودکار می‌کند — معمولا سریع‌ترین مسیر برای ساخت و آزمایش.",
            "**ابزاری با منطق چندمرحله‌ای** که چند نوع پروژه یا چند حالت خطا را پوشش می‌دهد و باید کنار پروژه‌های واقعی زنده تست شود.",
            "**سیستمی با یکپارچه‌سازی ابری** که خارج از رویت هم اجرا می‌شود، داده را بین چند سیستم جابه‌جا می‌کند و به زیرساخت اتوماسیون نیاز دارد.",
          ],
        },
      },
      {
        id: "approach",
        heading: "اسکریپت داینامو، افزونه API یا Forge — پول واقعا صرف کدام می‌شود",
        image: approachImg.fa,
        paragraphs: [
          "اگر جریان کار همین حالا هم با نودهای داینامو قابل ساخت است، اسکریپت داینامو ارزان‌ترین و سریع‌ترین مسیر است؛ داخل همان محیط رویت اجرا می‌شود و نیازی به توزیع جداگانه ندارد. وقتی جریان کار به یک رابط کاربری واقعی، توزیع بین چند نفر یا دسترسی عمیق‌تر از چیزی که نودهای داینامو ارائه می‌دهند نیاز دارد، افزونه API رویت (کد C#/.NET با پکیج مستقل) گزینه درست است.",
          "Forge - که حالا Autodesk Platform Services نام دارد - زمانی معنا پیدا می‌کند که اتوماسیون باید بدون بازکردن رویت روی سرور اجرا شود یا حجمی از فایل‌ها را پردازش کند که یک دستگاه دسکتاپ از پس آن برنمی‌آید. خودِ Autodesk هزینه API اتوماسیونش را بر اساس مصرف اعتبار ابری متناسب با زمان پردازش قیمت‌گذاری می‌کند، نه یک هزینه ثابت؛ نکته‌ای که پیش از فرض‌کردن اینکه ابزار ابری همیشه گزینه گران‌تر است، ارزش دانستن دارد.",
        ],
      },
      {
        id: "roi",
        heading: "پلاگین کی هزینه‌اش را برمی‌گرداند",
        image: roiImg.fa,
        paragraphs: [
          "محاسبه بازگشت سرمایه پیچیده نیست: ساعت صرف‌شده در هفته روی کار دستی را در تعداد نفراتی که آن کار را انجام می‌دهند ضرب کنید، و آن را با مدت زمانی که ابزار واقعا مورد استفاده باقی می‌ماند مقایسه کنید. کاری که فقط یک نفر، یک‌بار در ماه انجامش می‌دهد، به‌ندرت توجیه‌کننده یک پلاگین اختصاصی است؛ کاری که چند نفر هر هفته انجام می‌دهند، معمولا در چند ماه هزینه خودش را برمی‌گرداند.",
          "همان‌جایی که ذهن معمولا اشتباه می‌کند این است: بازگشت سرمایه را با ساعت آخرین اجرای ابزار می‌سنجد، نه با ساعت‌هایی که آن دکمه ساده جایگزینش شده. عددی که واقعا اهمیت دارد، تفاوت بین این دو است.",
        ],
      },
      {
        id: "build-or-buy",
        heading: "کی خرید یک افزونه آماده بهتر از ساخت اختصاصی است",
        image: buildOrBuyImg.fa,
        paragraphs: [
          "اگر یک افزونه موجود در Autodesk App Store همان مسئله را حل می‌کند، همان را بخرید. این را همین اول می‌گوییم، نه بعد از یک جلسه فروش: توسعه اختصاصی وقتی هزینه‌اش را توجیه می‌کند که جریان کار آن‌قدر مختص استاندارد دفتر شماست که هیچ ابزار بازار با آن جور درنمی‌آید، نه هر بار که یک کار تکراری وجود دارد.",
          "در عمل، بیشتر «برآوردهای سریع» همین‌طور اتفاق می‌افتد: کسی فرایند را در یک تماس تعریف می‌کند، در زمانی کوتاه‌تر از آنچه طول می‌کشد یک مدل بزرگ رویت باز شود. برآوردی که از یک توضیح شفاهی بیرون بیاید، هیچ‌وقت دقیق‌تر از همان توضیح نیست؛ اگر واقعا به دامنه واضح نیاز دارید، وقت بگذارید و [کار اختصاصی روی پلاگین رویت](/products/digital-tools) را از همان قدم اول، با بررسی فایل واقعی شروع کنید.",
        ],
      },
      {
        id: "scoping",
        heading: "چطور اولین پروژه پلاگین را دامنه‌بندی کنیم",
        image: scopingImg.fa,
        paragraphs: [
          "برآورد دقیق از یک توضیح کلی بیرون نمی‌آید؛ از دیدن فرایند واقعی بیرون می‌آید. چهار چیز پیش از هر برآورد جدی لازم است:",
        ],
        list: {
          ordered: true,
          items: [
            "توضیح دقیق فرایند دستی فعلی، قدم به قدم.",
            "یک یا دو فایل یا پروژه نمونه که ابزار روی آن‌ها اجرا می‌شود.",
            "مشخص‌کردن اینکه چه کسانی واقعا از ابزار نهایی استفاده می‌کنند.",
            "شفاف‌کردن اینکه آیا ابزار باید با سیستم دیگری هم حرف بزند یا فقط داخل رویت می‌ماند.",
          ],
        },
      },
    ],
    conclusion:
      "پاسخ به این سوال هیچ‌وقت یک عدد تنها نیست؛ یک قاب برای فهمیدن آن عدد است. پیچیدگی منطق، نیاز به یکپارچه‌سازی و تعداد کاربر، همراه هم، همان چیزی هستند که واقعا هزینه را می‌سازند - نه ظاهر ساده یا پیچیده‌ای که ابزار در نهایت نشان می‌دهد.",
    internalHeading: "مطالب مرتبط",
    internalLinks: [
      { label: "ابزارهای دیجیتال اختصاصی", href: "/products/digital-tools" },
      { label: "توسعه پلاگین رویت در تهران", href: "/revit-plugin-development-tehran" },
      { label: "چک‌کننده مدل رویت QAQC را خودکار می‌کند", href: "/articles/revit-model-checker" },
      { label: "درباره ما", href: "/about" },
    ],
    externalHeading: "منابع",
    externalLinks: [
      { label: "Autodesk Platform Services — Revit SDKs and Tools", href: "https://aps.autodesk.com/developer/overview/revit-api" },
      { label: "Autodesk Platform Services — Estimate Design Automation Costs", href: "https://aps.autodesk.com/blog/estimate-design-automation-costs" },
    ],
    faqHeading: "پرسش‌های متداول",
    faq: [
      {
        question: "توسعه پلاگین رویت واقعا چقدر هزینه دارد؟",
        answer:
          "عدد ثابتی وجود ندارد، چون قیمت را پیچیدگی جریان کار، نیاز به یکپارچه‌سازی و تعداد کاربران نهایی تعیین می‌کند، نه صرف اینکه چیزی «یک پلاگین» است. یک ابزار تک‌منظوره و سیستمی که داده زنده را از BIM 360 به یک داشبورد می‌کشد، دو پروژه با دامنه کاملا متفاوت‌اند.",
      },
      {
        question: "تفاوت اسکریپت داینامو و افزونه API رویت چیست؟",
        answer:
          "اسکریپت داینامو داخل محیط گرافیکی داینامو و رویت اجرا می‌شود و وقتی جریان کار همین حالا با نودها قابل ساخت است، مسیر سریع‌تر و ارزان‌تری است. افزونه API رویت، کد C#/.NET با رابط کاربری مستقل و قابل‌توزیع است؛ وقتی نیاز به رابط واقعی، دسترسی عمیق‌تر به API یا توزیع بین چند نفر باشد، ارزش ساختن دارد.",
      },
      {
        question: "Autodesk Platform Services (Forge) کی به‌صرفه‌تر از یک افزونه دسکتاپ است؟",
        answer:
          "وقتی اتوماسیون باید بدون بازکردن رویت اجرا شود یا حجمی از فایل‌ها را پردازش کند که یک دستگاه دسکتاپ توانش را ندارد. Autodesk هزینه API اتوماسیون خودش را بر اساس مصرف اعتبار ابری متناسب با زمان پردازش تعیین می‌کند، نه یک هزینه ثابت.",
      },
      {
        question: "توسعه پلاگین رویت واقعا چقدر طول می‌کشد؟",
        answer:
          "ابزار تک‌منظوره معمولا سریع‌ترین مسیر ساخت است. ابزاری که چند نوع پروژه را پوشش می‌دهد یا باید کنار چند پروژه واقعی تست شود، زمان بیشتری می‌برد، و هرچه یکپارچه‌سازی ابری یا زیرساخت اتوماسیون وارد شود، زمان باز هم بیشتر می‌شود. پاسخ صادقانه به همان سه عاملی برمی‌گردد که قیمت را هم تعیین می‌کنند.",
      },
      {
        question: "خرید یک افزونه آماده ارزان‌تر از ساخت اختصاصی است؟",
        answer:
          "اغلب بله، و همین اول می‌گوییم. اگر افزونه‌ای که همین حالا در Autodesk App Store هست مسئله را حل می‌کند، همان را بخرید. توسعه اختصاصی وقتی هزینه‌اش را توجیه می‌کند که جریان کار آن‌قدر مختص استاندارد دفتر شماست که هیچ ابزار بازار با آن جور درنمی‌آید.",
      },
      {
        question: "پیش از درخواست برآورد، چه چیزی باید آماده داشته باشیم؟",
        answer:
          "توضیح دقیق فرایند دستی فعلی، یک یا دو فایل یا پروژه نمونه که ابزار روی آن اجرا می‌شود، و مشخص‌بودن اینکه چه کسانی واقعا از ابزار نهایی استفاده می‌کنند. توضیح کلی از هدف نهایی بدون نگاه به جریان کار واقعی، همان چیزی است که برآوردها را به حدس تبدیل می‌کند.",
      },
      {
        question: "آیا تعداد کاربران پلاگین روی هزینه اثر می‌گذارد؟",
        answer:
          "بله. ابزاری که فقط برای جریان کار شخصی یک مدل‌ساز ساخته می‌شود، می‌تواند از بخش زیادی از خطایابی و صیقل رابط کاربری صرف‌نظر کند؛ ابزاری که قرار است در یک دفتر بیست‌نفره پخش شود این امکان را ندارد، چون هرچه کاربر بیشتر باشد، حالت‌های خطای بیشتری هم پیش می‌آید که پلاگین باید درست مدیریتشان کند.",
      },
    ],
  },
  en: {
    slug: "revit-plugin-development-cost",
    meta: {
      title: "Revit Plugin Development Cost, Explained — ARTINEXT",
      description:
        "Revit plugin development cost depends on workflow complexity, integrations, and team size, not a flat price list. Here's what actually sets the number.",
    },
    breadcrumb: "How much does Revit plugin development cost?",
    category: "BIM & Revit",
    title: "How much does Revit plugin development cost?",
    leadOpinion:
      "A plugin that looks like one button was never priced by the button — it's priced by the weeks of work standing behind it.",
    publishedAt: "2026-08-27",
    publishedLabel: "Aug 27, 2026",
    author: {
      name: "ARTINEXT Team",
      role: "Digital Systems Studio",
      bio: "The team that scopes, architects, and prices custom Revit plugins for architecture and engineering offices.",
      href: "/about",
    },
    tocHeading: "Table of contents",
    toc: [
      { id: "overview", label: "The short answer" },
      { id: "drivers", label: "What actually sets the price" },
      { id: "tiers", label: "Three shapes of plugin work, three budgets" },
      { id: "approach", label: "Dynamo script, API add-in, or Forge — where the money actually goes" },
      { id: "roi", label: "When it pays for itself" },
      { id: "build-or-buy", label: "When a paid plugin beats a custom one" },
      { id: "scoping", label: "How to scope your first plugin project" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    intro:
      "Revit plugin development cost is not a fixed number, and any quote handed over before someone sees your actual workflow is a guess wearing a number. Three things set the price: how complex the workflow being replaced is, whether the plugin needs to talk to another system, and how many people will use it every day. A plugin that renames sheets inside one project template is a different job from one that pulls live data from BIM 360 into a management dashboard.\n\nOne of our own tools replaced a process that used to take about 2 weeks, sometimes closer to 1 month, with roughly 10 minutes of clicking a button. Nobody in the final handoff sees the 2 weeks. They see the button, and the button is what gets compared to the price. **A simple interface is compressed history, not a lack of depth** — judging what a tool should cost by how little friction it shows the user is exactly backwards.",
    heroImage: heroImg.en,
    sections: [
      {
        id: "drivers",
        heading: "What actually sets the price",
        image: driversImg.en,
        paragraphs: [
          "The first factor is the complexity of the workflow itself. A script that runs one repetitive calculation against the open model carries simpler logic than a tool that has to read geometry across several families, make a decision, and write the result back to the right parameters. Logic complexity, not interface polish, is where most of the build hours actually go.",
          "The second factor is integration. A plugin that only ever touches one open Revit file never costs the same as one that has to talk to BIM 360, an ERP, or an outside database — every external connection adds a layer of authentication, error handling, and maintenance. The third factor is the number of users: a tool built for one modeler's own workflow can skip a lot of edge-case handling that a tool rolled out across a twenty-person office can't skip.",
        ],
      },
      {
        id: "tiers",
        heading: "Three shapes of plugin work, three budgets",
        image: tiersImg.en,
        paragraphs: [
          "This isn't a price list. It's a way to recognize which shape your own project is closer to. Three shapes come up repeatedly in Revit plugin work, and each calls for a different scope:",
        ],
        list: {
          items: [
            "**A single-purpose utility** that automates one specific, repeatable task inside Revit — usually the fastest to build and test.",
            "**A tool with multi-step logic** that covers several project types or edge cases and needs to be tested against real, live projects.",
            "**A system with cloud integration** that runs outside Revit entirely, moves data between systems, and needs automation infrastructure behind it.",
          ],
        },
      },
      {
        id: "approach",
        heading: "Dynamo script, API add-in, or Forge — where the money actually goes",
        image: approachImg.en,
        paragraphs: [
          "If the workflow can already be wired together with nodes, a Dynamo script is the cheapest and fastest route — it runs inside Revit's own environment and doesn't need separate distribution. A Revit API add-in, compiled C#/.NET code with its own packaged interface, is worth building when the workflow needs a real UI, distribution across a team, or deeper access than Dynamo's nodes expose.",
          "Forge, now Autodesk Platform Services, makes sense when the automation has to run without anyone opening Revit at all, or needs to process files at a scale a single desktop machine can't handle. Autodesk prices its own automation API by cloud-credit consumption tied to processing time, not a flat fee, which is worth knowing before assuming a cloud-based tool is automatically the expensive option.",
        ],
      },
      {
        id: "roi",
        heading: "When it pays for itself",
        image: roiImg.en,
        paragraphs: [
          "The payback math isn't complicated: multiply hours spent per week on the manual task by how many people do that task, and weigh it against how long the tool stays in actual use. Something one person does once a month rarely justifies a custom plugin. Something several people do every week usually pays for itself within a few months.",
          "This is where the math usually goes wrong: people weigh the payback against the hours the finished tool takes to run, not the hours it replaced. The number that actually matters is the gap between those two.",
        ],
      },
      {
        id: "build-or-buy",
        heading: "When a paid plugin beats a custom one",
        image: buildOrBuyImg.en,
        paragraphs: [
          "If an add-in already on the Autodesk App Store solves the actual problem, buy that one. We'll say that upfront, not after a sales call: custom development earns its cost when the workflow is specific enough to your office's own standard that no marketplace tool fits it, not just because a repetitive task exists.",
          "In practice, most \"quick estimates\" happen the same way: someone describes the process on a single call, in less time than it takes a large Revit model to open. An estimate built from a verbal description is never more accurate than that description. If you actually need a defensible number, take the time and start [custom Revit plugin work](/products/digital-tools) from a real file review instead of a phone summary.",
        ],
      },
      {
        id: "scoping",
        heading: "How to scope your first plugin project",
        image: scopingImg.en,
        paragraphs: [
          "An accurate estimate doesn't come from a general description. It comes from seeing the real process. Four things need to be ready before any serious estimate is possible:",
        ],
        list: {
          ordered: true,
          items: [
            "A step-by-step description of the current manual process.",
            "One or two sample files or projects the tool will actually run on.",
            "A clear answer to who on the team will use the finished tool.",
            "Whether the tool needs to talk to another system or stays entirely inside Revit.",
          ],
        },
      },
    ],
    conclusion:
      "The answer to this question is never a single number. It's a frame for understanding that number. Logic complexity, integration needs, and user count, together, are what actually build the cost, not how simple or complicated the finished tool looks from the outside.",
    internalHeading: "Related reading",
    internalLinks: [
      { label: "Custom digital tools", href: "/products/digital-tools" },
      { label: "Revit plugin development in Tehran", href: "/revit-plugin-development-tehran" },
      { label: "A Revit model checker automates QA/QC", href: "/articles/revit-model-checker" },
      { label: "About us", href: "/about" },
    ],
    externalHeading: "Further reading",
    externalLinks: [
      { label: "Autodesk Platform Services — Revit SDKs and Tools", href: "https://aps.autodesk.com/developer/overview/revit-api" },
      { label: "Autodesk Platform Services — Estimate Design Automation Costs", href: "https://aps.autodesk.com/blog/estimate-design-automation-costs" },
    ],
    faqHeading: "FAQ",
    faq: [
      {
        question: "How much does Revit plugin development actually cost?",
        answer:
          "There's no fixed number, because the price is set by workflow complexity, integration needs, and how many people will use the finished tool, not by the fact that it's \"a plugin.\" A single-purpose utility and a system pulling live data from BIM 360 into a dashboard are two projects with completely different scopes.",
      },
      {
        question: "What's the difference between a Dynamo script and a Revit API add-in?",
        answer:
          "A Dynamo script lives inside Dynamo and Revit's own graphical environment, and it's the faster, cheaper route when the workflow is already something you can wire together with nodes. A Revit API add-in is compiled C#/.NET code with its own packaged, distributable interface — worth building when the workflow needs a real UI, deeper API access than Dynamo exposes, or distribution across a whole team.",
      },
      {
        question: "When does Autodesk Platform Services (Forge) make sense over a desktop add-in?",
        answer:
          "When the automation needs to run without anyone opening Revit at all, or needs to process files at a scale a single desktop machine can't handle. Autodesk prices its own automation API by cloud-credit consumption tied to processing time, not a flat fee.",
      },
      {
        question: "How long does Revit plugin development actually take?",
        answer:
          "A single-purpose utility is typically the fastest to build. A tool that covers multiple project types or needs testing across several live projects takes longer, and anything involving cloud integration or automation infrastructure takes longer still. The honest answer comes back to the same three factors that set the cost.",
      },
      {
        question: "Is buying an existing plugin cheaper than building a custom one?",
        answer:
          "Often, yes, and we'll say so upfront. If an add-in already on the Autodesk App Store solves the actual problem, buy that one. Custom development earns its cost when the workflow is specific enough to your office's own standard that no marketplace tool fits it.",
      },
      {
        question: "What do we need ready before asking for a quote?",
        answer:
          "A clear, step-by-step description of the current manual process, one or two sample files or projects it runs on, and a clear answer to who on the team will actually use the finished tool. A vague description of the end goal, without a look at the actual workflow, is what turns quotes into guesses.",
      },
      {
        question: "Does the number of people using the plugin change the cost?",
        answer:
          "Yes. A tool built for one modeler's personal workflow can skip a lot of the error handling and interface polish that a tool deployed across a twenty-person office can't skip, because more users means more edge cases the plugin has to handle gracefully.",
      },
    ],
  },
};
