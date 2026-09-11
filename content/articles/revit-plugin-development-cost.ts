import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-plugin-development-cost";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-plugin-development-cost-workspace", {
  fa: "میز کار توسعه‌دهنده با دو مانیتور در شب، برای نوشته‌ای درباره‌ی هزینه‌ی توسعه پلاگین رویت",
  en: "A developer's dual-monitor workspace at night, for a piece on Revit plugin development cost",
});
const drivers = img("revit-plugin-cost-drivers-workflow", {
  fa: "چند نفر در حال بررسی نقشه‌ی فنی روی میز، پیش از برآورد هزینه‌ی یک پلاگین",
  en: "A team reviewing a technical drawing on a table before a plugin is priced",
});
const tiers = img("revit-plugin-cost-by-project-scope", {
  fa: "بررسی پلان معماری و نمودار روی میز کار، برای سه شکل متفاوت از پروژه‌های پلاگین رویت",
  en: "A floor plan and a chart on a desk, for the three shapes of Revit plugin work",
});
const approach = img("revit-api-dynamo-forge-comparison", {
  fa: "دست‌ها روی لپ‌تاپ در حال نوشتن کد، برای انتخاب میان اسکریپت Dynamo، افزونه‌ی Revit API و APS",
  en: "Hands typing code on a laptop, for choosing between a Dynamo script, a Revit API add-in and APS",
});
const roi = img("revit-plugin-roi-time-savings", {
  fa: "ساعت شنی کنار لپ‌تاپ روی میز چوبی، برای محاسبه‌ی زمان بازگشت هزینه‌ی پلاگین",
  en: "An hourglass beside a laptop on a wooden desk, for the time it takes a plugin to pay for itself",
});
const buy = img("custom-revit-plugin-build-vs-buy", {
  fa: "نمای بالای یک پیاده‌رو با خطی منشعب، برای تصمیم میان خرید افزونه‌ی آماده و ساخت اختصاصی",
  en: "An overhead view of a pavement with a branching line, for the choice between buying and building",
});
const scoping = img("revit-plugin-scoping-framework", {
  fa: "دفترچه‌ی طراحی با یادداشت‌های دستی و خودکار، برای مستندکردن فرآیند پیش از درخواست برآورد",
  en: "A sketchbook with hand-drawn notes and a pen, for documenting a process before asking for a quote",
});

export const revitPluginDevelopmentCost: ArticlePage = {
  slug: "revit-plugin-development-cost",
  content: {
    fa: {
      slug: "revit-plugin-development-cost",
      meta: {
        title: "توسعه پلاگین رویت چقدر هزینه دارد؟ عوامل اصلی، آرتینکست",
        description:
          "توسعه پلاگین رویت چقدر هزینه دارد؟ قیمت به پیچیدگی جریان کاری، یکپارچه‌سازی، تعداد کاربران و نسخه‌های رویت بستگی دارد. عوامل اصلی و روش برآورد را بخوانید.",
      },
      keywords: [
        "توسعه پلاگین رویت چقدر هزینه دارد",
        "هزینه توسعه پلاگین رویت",
        "قیمت ساخت پلاگین رویت",
        "ساخت افزونه اختصاصی رویت",
        "توسعه پلاگین با Revit API",
      ],
      breadcrumb: "هزینه‌ی توسعه پلاگین رویت",
      category: "BIM و Revit",
      title: "توسعه پلاگین رویت چقدر هزینه دارد؟",
      leadOpinion:
        "پلاگینی که فقط یک دکمه به نظر می‌رسد، بر اساس همان دکمه قیمت‌گذاری نمی‌شود، بلکه بر اساس هفته‌ها کاری که پشت آن دکمه انجام شده است.",
      publishedAt: "2026-08-27",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که دامنه، معماری و هزینه‌ی پلاگین‌های اختصاصی رویت را برای دفاتر معماری، سازه و تأسیسات تعریف و اجرا می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "drivers", label: "چه عواملی قیمت را تعیین می‌کنند" },
        { id: "tiers", label: "سه شکل متفاوت از کار پلاگین" },
        { id: "workflows", label: "کدام جریان‌های کاری ارزش خودکارسازی دارند" },
        { id: "approach", label: "اسکریپت Dynamo، افزونه‌ی API یا APS" },
        { id: "maintenance", label: "هزینه‌ی پس از تحویل" },
        { id: "roi", label: "زمان جبران هزینه" },
        { id: "build-or-buy", label: "خرید افزونه‌ی آماده یا ساخت اختصاصی" },
        { id: "scoping", label: "تعریف دامنه‌ی اولین پروژه" },
        { id: "quote", label: "آنچه برآورد باید مشخص کند" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "توسعه پلاگین رویت چقدر هزینه دارد؟ عدد ثابتی وجود ندارد و هر برآوردی که پیش از بررسی جریان کاری واقعی شما ارائه شود، تنها یک حدس است. چهار عامل قیمت را تعیین می‌کنند: پیچیدگی جریان کاری که پلاگین جایگزین آن می‌شود، نیاز به ارتباط با سامانه‌های دیگر، تعداد کاربرانی که هر روز از آن استفاده می‌کنند و مدت زمانی که ابزار باید در نسخه‌های مختلف رویت کار کند.\n\nپلاگینی که نام شیت‌ها را در یک تمپلیت اصلاح می‌کند، پروژه‌ای کاملاً متفاوت از پلاگینی است که داده‌ی زنده را از Autodesk Construction Cloud به یک داشبورد مدیریتی منتقل می‌کند. هر دو «پلاگین» نامیده می‌شوند، اما حجم کار آن‌ها قابل‌مقایسه نیست.\n\nیکی از ابزارهای خود ما فرآیندی را که حدود ۲ هفته و گاهی نزدیک به ۱ ماه طول می‌کشید، به حدود ۱۰ دقیقه و یک دکمه تبدیل کرد. در زمان تحویل، کسی آن ۲ هفته را نمی‌بیند؛ آنچه دیده می‌شود همان دکمه است و همان دکمه با قیمت مقایسه می‌شود. **رابط کاربری ساده، حاصل فشرده‌شدن یک مسیر طولانی است، نه نشانه‌ی کم‌عمق‌بودن ابزار.** قضاوت درباره‌ی هزینه‌ی یک ابزار بر اساس سادگی ظاهر آن، دقیقاً برعکس واقعیت است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "drivers",
          heading: "چه عواملی قیمت را تعیین می‌کنند",
          image: drivers.fa,
          paragraphs: [
            "اولین عامل، منطق کار است. اسکریپتی که یک محاسبه‌ی تکراری را روی مدل باز انجام می‌دهد، ساده‌تر از ابزاری است که هندسه‌ی چند فمیلی را بررسی می‌کند، بر اساس آن تصمیم می‌گیرد و نتیجه را در پارامترهای درست ثبت می‌کند. بیشتر ساعت‌های توسعه صرف همین لایه‌ی تصمیم‌گیری می‌شود، نه صرف پنجره‌ای که کاربر روی آن کلیک می‌کند.",
            "عامل دوم، یکپارچه‌سازی است. پلاگینی که فقط با فایل باز رویت کار می‌کند، هزینه‌ای مشابه پلاگینی ندارد که باید با BIM 360، یک ERP یا یک پایگاه داده‌ی بیرونی نیز ارتباط داشته باشد. هر اتصال بیرونی، احراز هویت، حالت‌های خطا و نگهداری خود را به کار اضافه می‌کند.",
            "عامل سوم، تعداد کاربران است. ابزاری که برای جریان کاری یک مدل‌ساز ساخته می‌شود، می‌تواند از بسیاری از حالت‌های استثنایی صرف‌نظر کند، اما ابزاری که قرار است در یک دفتر بیست‌نفره استفاده شود چنین امکانی ندارد. کاربران بیشتر یعنی پروژه‌ها، تمپلیت‌ها و ورودی‌های متنوع‌تر. عامل چهارم، یعنی نسخه‌های رویت، در ادامه بخش جداگانه‌ای دارد.",
          ],
        },
        {
          id: "tiers",
          heading: "سه شکل متفاوت از کار پلاگین، سه بودجه‌ی متفاوت",
          image: tiers.fa,
          paragraphs: [
            "این فهرست، فهرست قیمت نیست؛ روشی است برای تشخیص اینکه پروژه‌ی شما پیش از هر برآوردی به کدام شکل نزدیک‌تر است. سه شکل در پروژه‌های پلاگین رویت بیشتر از بقیه دیده می‌شوند:",
          ],
          list: {
            items: [
              "**ابزار تک‌منظوره**: یک کار مشخص و تکراری داخل رویت، مانند تغییر نام گروهی ویوها یا قراردادن تگ بر اساس قاعده. معمولاً سریع‌ترین مسیر ساخت و تست است.",
              "**ابزار با منطق چندمرحله‌ای**: چند نوع پروژه، چند حالت استثنایی، رابط کاربری کامل و تست روی پروژه‌های واقعی به‌جای یک فایل نمونه.",
              "**سیستم یکپارچه**: بخشی از آن یا تمام آن خارج از رویت اجرا می‌شود، داده را میان سامانه‌ها منتقل می‌کند و به گزارش خطایی نیاز دارد که واقعاً خوانده شود.",
            ],
          },
        },
        {
          id: "workflows",
          heading: "کدام جریان‌های کاری رویت ارزش خودکارسازی دارند",
          paragraphs: [
            "بهترین گزینه‌ها سه ویژگی مشترک دارند: قاعده‌ی کار از پیش در استاندارد دفتر وجود دارد، کار در هر پروژه تکرار می‌شود و خطای آن دیر و با هزینه‌ی زیاد پیدا می‌شود. کاری که در هر پروژه به قضاوت تازه‌ای نیاز دارد، هرچقدر هم وقت‌گیر باشد، گزینه‌ی مناسبی برای خودکارسازی نیست.",
            "مورد دوم و سوم فهرست زیر، همان دو ابزاری هستند که در صفحه‌ی [توسعه پلاگین رویت](/revit-plugin-development/) در حال اجرا نمایش داده شده‌اند. ابزار ETABS هم‌زمان با ساخت مدل گزارش می‌دهد چه المان‌هایی ساخته شده‌اند و چه المان‌هایی ساخته نشده‌اند، زیرا مبدلی که خطا را گزارش نکند، بیشتر از زمانی که در مدل‌سازی صرفه‌جویی می‌کند، هزینه‌ی بررسی ایجاد می‌کند.",
          ],
          list: {
            items: [
              "**تنظیم شیت‌ها و ویوها**: ساخت، شماره‌گذاری و تغییر نام شیت‌ها و ویوها بر اساس فهرستی که دفتر از پیش در Excel نگه می‌دارد.",
              "**تبدیل CAD به Revit**: ساخت دیوارها، کف‌ها، ترازها و بازشوهای بومی از روی نقشه‌های هماهنگ‌شده‌ی CAD، به‌جای بازترسیم دستی خطوط.",
              "**انتقال مدل سازه**: تبدیل خروجی ETABS به اسکلت بومی Revit، همراه با گزارش تمام اعضایی که تبدیل نشده‌اند.",
              "**کنترل کیفیت مدل**: اجرای قواعد نام‌گذاری، پارامترها و ویوتمپلیت‌های دفتر به‌صورت تست خودکار، به‌جای چک‌لیستی که کسی باید آن را بخواند.",
              "**خروجی اسکجوال‌ها و مقادیر**: انتقال داده‌ی اسکجوال‌ها به Excel در قالبی که تیم برآورد واقعاً از آن استفاده می‌کند.",
            ],
          },
        },
        {
          id: "approach",
          heading: "اسکریپت Dynamo، افزونه‌ی API یا APS، هزینه صرف کدام می‌شود",
          image: approach.fa,
          paragraphs: [
            "اگر جریان کاری همین حالا با نودهای Dynamo قابل‌ساخت است، اسکریپت Dynamo کم‌هزینه‌ترین مسیر است. داخل رویت اجرا می‌شود، به نصب جداگانه نیاز ندارد و تیم شما می‌تواند آن را باز کند و تغییر دهد. ماکرو نیز در همین بازه‌ی هزینه قرار می‌گیرد، اما به یک فایل یا یک دستگاه محدود است و اشتراک‌گذاری آن دشوار است.",
            "افزونه‌ی Revit API کدی کامپایل‌شده به زبان C# و بر پایه‌ی .NET است که رابط کاربری و فایل نصب مستقل دارد. این مسیر زمانی ارزش ساخت دارد که جریان کاری به رابط کاربری کامل، دسترسی‌هایی فراتر از نودهای Dynamo یا توزیع میان اعضای تیمی نیاز داشته باشد که نباید برای استفاده، گراف را باز کنند.",
            "Autodesk Platform Services که پیش‌تر Forge نام داشت، زمانی کاربرد دارد که اتوماسیون باید بدون بازکردن رویت اجرا شود یا تعداد فایل‌ها بیشتر از توان پردازش یک دستگاه دسکتاپ باشد. راهنمای خود Autodesk برای برآورد هزینه‌ی Design Automation API، هزینه‌ی پردازش Revit را ۶ Cloud Credit در ساعت اعلام کرده است؛ پیش از آنکه فرض کنید ابزار ابری همیشه گزینه‌ی گران‌تر است، این عدد را در نظر بگیرید.",
          ],
        },
        {
          id: "maintenance",
          heading: "هزینه‌ی پس از تحویل، هر نسخه‌ی جدید رویت",
          paragraphs: [
            "رویت هر سال نسخه‌ی جدیدی منتشر می‌کند و افزونه‌ای که برای یک نسخه کامپایل شده است، الزاماً در نسخه‌ی بعدی اجرا نمی‌شود. در بیشتر سال‌ها تغییرات کوچک است، اما همیشه این‌طور نیست.",
            "Revit 2025 نمونه‌ی روشن آن است. API این نسخه از .NET Framework 4.8 به .NET 8 منتقل شد و افزونه‌هایی که برای Revit 2024 و نسخه‌های پیش از آن ساخته شده بودند، پیش از اجرا باید دوباره کامپایل و در بخش‌هایی بازنویسی می‌شدند. دفتری که هم‌زمان با دو یا سه نسخه‌ی رویت کار می‌کند، به پلاگینی نیاز دارد که برای همه‌ی آن‌ها ساخته شده باشد و این تصمیم باید در ابتدای کار گرفته شود، نه پس از اولین به‌روزرسانی ناموفق.",
            "به همین دلیل پیش از هر برآورد، دو پرسش را مطرح کنید: ابزار باید از کدام نسخه‌ها پشتیبانی کند و با انتشار نسخه‌ی بعدی، به‌روزرسانی آن بر عهده‌ی چه کسی است. اگر پاسخ پرسش دوم مشخص نباشد، قیمتی که مقایسه می‌کنید قیمت ابزاری با عمر محدود است.",
            "مالکیت کد نیز بخشی از همین گفت‌وگوست. اگر سورس کد و راهنمای ساخت تحویل داده شود، هر توسعه‌دهنده‌ی باتجربه‌ای می‌تواند به‌روزرسانی سالانه را انجام دهد. در غیر این صورت، هزینه‌ی این به‌روزرسانی را به توسعه‌دهنده‌ی اصلی پرداخت می‌کنید، چه از پیش برای آن برنامه‌ریزی کرده باشید و چه نه.",
          ],
        },
        {
          id: "roi",
          heading: "پلاگین چه زمانی هزینه‌ی خود را جبران می‌کند",
          image: roi.fa,
          paragraphs: [
            "محاسبه‌ی بازگشت سرمایه پیچیده نیست: ساعت‌هایی را که هر هفته صرف کار دستی می‌شود در تعداد افرادی که آن را انجام می‌دهند ضرب کنید و نتیجه را با مدت زمانی مقایسه کنید که ابزار مورد استفاده خواهد بود. کاری که یک نفر ماهی یک‌بار انجام می‌دهد، به‌ندرت ساخت پلاگین اختصاصی را توجیه می‌کند، اما کاری که چند نفر هر هفته انجام می‌دهند، معمولاً توجیه اقتصادی دارد.",
            "خطای رایج در همین محاسبه، انتخاب مبنای مقایسه است. قیمت ابزار با ۱۰ دقیقه‌ی اجرای نهایی آن مقایسه می‌شود، نه با ۲ هفته کاری که جایگزین آن شده است. عددی که اهمیت دارد، فاصله‌ی میان این دو است.",
            "خطای دوم، محاسبه‌ی زمان به‌تنهایی است. مرحله‌ی دستی‌ای که خطا ایجاد می‌کند، ساعت‌های پیداکردن و اصلاح آن خطاها در مرحله‌ی هماهنگی یا اجرا را نیز به هزینه اضافه می‌کند.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "چه زمانی خرید افزونه‌ی آماده بهتر از ساخت اختصاصی است",
          image: buy.fa,
          paragraphs: [
            "اگر افزونه‌ای که همین حالا در Autodesk App Store وجود دارد مسئله‌ی واقعی شما را حل می‌کند، همان را بخرید. این را پیش از هر جلسه‌ی فروش می‌گوییم. توسعه‌ی اختصاصی زمانی هزینه‌ی خود را توجیه می‌کند که جریان کاری آن‌قدر به استاندارد دفتر شما وابسته باشد که هیچ ابزار آماده‌ای با آن سازگار نباشد، نه صرفاً به این دلیل که کاری تکراری است.",
            "ابزارهای تجاری هزینه‌هایی را پوشش می‌دهند که در غیر این صورت بر عهده‌ی خود شما خواهد بود: پشتیبانی، یکپارچه‌سازی برای مخاطبان محدود و به‌روزرسانی سالانه برای نسخه‌ی جدید رویت. قیمت ساخت پلاگین اختصاصی را باید با قیمت یک افزونه‌ی تجاری خوب مقایسه کرد که این هزینه‌ها را از پیش در قیمت خود لحاظ کرده است.",
            "بیشتر برآوردهای سریع به یک شکل انجام می‌شوند: فرآیند در یک تماس تلفنی توضیح داده می‌شود، در زمانی کوتاه‌تر از بازشدن یک مدل بزرگ رویت. برآوردی که بر اساس یک توضیح شفاهی ارائه شود، دقیق‌تر از همان توضیح نیست. اگر به عددی قابل‌دفاع نیاز دارید، [کار را با بررسی فایل‌های واقعی شروع کنید](/contact/).",
          ],
        },
        {
          id: "scoping",
          heading: "دامنه‌ی اولین پروژه‌ی پلاگین را چگونه تعریف کنیم",
          image: scoping.fa,
          paragraphs: [
            "برآورد دقیق از بررسی فرآیند واقعی به دست می‌آید، نه از خلاصه‌ای از آن. پیش از هر برآورد جدی، چهار مورد باید آماده باشد:",
          ],
          list: {
            ordered: true,
            items: [
              "شرح مرحله‌به‌مرحله‌ی فرآیند دستی فعلی، همراه با بخش‌هایی که در آن‌ها خطا رخ می‌دهد.",
              "یک یا دو فایل پروژه‌ی واقعی که ابزار روی آن‌ها اجرا خواهد شد.",
              "افرادی که از ابزار نهایی استفاده می‌کنند و نسخه‌های رویتی که با آن‌ها کار می‌کنند.",
              "اینکه ابزار فقط داخل رویت کار می‌کند یا باید با سامانه‌ی دیگری تبادل داده داشته باشد.",
            ],
          },
        },
        {
          id: "quote",
          heading: "برآورد قیمت باید چه مواردی را مشخص کند",
          paragraphs: [
            "پس از بررسی فرآیند، برآوردی قابل‌اتکاست که فراتر از یک عدد کلی، موارد زیر را مشخص کند. اگر هرکدام از این موارد در برآورد وجود نداشته باشد، عدد نهایی هنوز یک حدس است:",
          ],
          after: [
            "چنین برآوردی از یک عدد در یک خط طولانی‌تر است، اما تنها برآوردی است که مشخص می‌کند قیمت دقیقاً برای چه چیزی پرداخت می‌شود.",
          ],
          list: {
            items: [
              "**مراحلی که ابزار انجام می‌دهد**، به ترتیب اجرا، همراه با واکنش ابزار در برابر ورودی نادرست.",
              "**نسخه‌های رویتی که پشتیبانی می‌شوند** و آنچه با انتشار نسخه‌ی بعدی اتفاق می‌افتد.",
              "**مواردی که در دامنه‌ی کار نیستند**، به همان روشنی مواردی که در دامنه قرار دارند.",
              "**روش تست**: روی فایل‌های خود شما و بر اساس مواردی که پیش از شروع ساخت توافق شده‌اند.",
              "**آنچه در زمان تحویل دریافت می‌کنید**: فایل نصب، سورس کد و راهنمای ساخت.",
            ],
          },
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "پاسخ این پرسش هیچ‌وقت یک عدد تنها نیست، بلکه چارچوبی برای درک آن عدد است. منطق کار، یکپارچه‌سازی، تعداد کاربران و سال‌هایی که ابزار باید کار کند، هزینه را تعیین می‌کنند. دکمه‌ای که کاربر در پایان می‌بیند، در این فهرست جایی ندارد.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه پلاگین رویت در تهران", href: "/revit-plugin-development-tehran/" },
        { label: "ابزارهای دیجیتال در صفحه‌ی محصولات", href: "/products/#digital-tools" },
        { label: "انتخاب شرکت توسعه پلاگین رویت", href: "/articles/revit-plugin-development-company/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk Platform Services, Revit SDKs and Tools", href: "https://aps.autodesk.com/developer/overview/revit-api" },
        { label: "Autodesk Platform Services, Estimate Automation costs", href: "https://aps.autodesk.com/blog/estimate-design-automation-costs" },
        { label: "Autodesk Developer Blog, Migrating from .NET 4.8 to .NET Core 8", href: "https://blog.autodesk.io/migrating-from-net-48-to-net-core-8/" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "توسعه پلاگین رویت واقعاً چقدر هزینه دارد؟",
          answer:
            "عدد ثابتی وجود ندارد. قیمت را پیچیدگی جریان کاری، یکپارچه‌سازی، تعداد کاربران و نسخه‌هایی از رویت تعیین می‌کنند که ابزار باید از آن‌ها پشتیبانی کند. یک ابزار تک‌منظوره و سیستمی که داده‌ی زنده را به یک داشبورد منتقل می‌کند، دو پروژه با دامنه‌ی کاملاً متفاوت هستند.",
        },
        {
          question: "توسعه پلاگین رویت چقدر زمان می‌برد؟",
          answer:
            "ابزار تک‌منظوره سریع‌ترین مسیر ساخت است. ابزاری که چند نوع پروژه را پوشش می‌دهد یا باید روی پروژه‌های واقعی تست شود، زمان بیشتری می‌برد و هر یکپارچه‌سازی بیرونی این زمان را افزایش می‌دهد. پاسخ دقیق به همان عواملی بستگی دارد که قیمت را تعیین می‌کنند.",
        },
        {
          question: "تفاوت اسکریپت Dynamo و افزونه‌ی Revit API چیست؟",
          answer:
            "اسکریپت Dynamo داخل محیط Dynamo و رویت اجرا می‌شود و وقتی جریان کاری با نودها قابل‌ساخت است، مسیر سریع‌تر و کم‌هزینه‌تری است. افزونه‌ی Revit API کد کامپایل‌شده با رابط کاربری و فایل نصب مستقل است و زمانی ارزش ساخت دارد که به رابط کامل، دسترسی عمیق‌تر یا توزیع در کل تیم نیاز باشد.",
        },
        {
          question: "Autodesk Platform Services چه زمانی از افزونه‌ی دسکتاپ مناسب‌تر است؟",
          answer:
            "زمانی که اتوماسیون باید بدون بازکردن رویت اجرا شود یا تعداد فایل‌ها بیشتر از توان یک دستگاه دسکتاپ باشد. Autodesk هزینه‌ی Design Automation API را بر اساس زمان پردازش و با Cloud Credit محاسبه می‌کند، نه با مبلغ ثابت.",
        },
        {
          question: "آیا به‌روزرسانی‌های رویت به هزینه اضافه می‌کند؟",
          answer:
            "ممکن است. رویت هر سال نسخه‌ی جدیدی منتشر می‌کند و در Revit 2025، API به .NET 8 منتقل شد، در نتیجه افزونه‌های قدیمی پیش از اجرا باید دوباره کامپایل می‌شدند. از ابتدا مشخص کنید ابزار از کدام نسخه‌ها پشتیبانی می‌کند و به‌روزرسانی آن بر عهده‌ی چه کسی است.",
        },
        {
          question: "آیا خرید افزونه‌ی آماده ارزان‌تر از ساخت اختصاصی است؟",
          answer:
            "اغلب بله و این را از ابتدا می‌گوییم. اگر افزونه‌ای که در Autodesk App Store وجود دارد مسئله را حل می‌کند، همان را بخرید. ساخت اختصاصی زمانی توجیه دارد که جریان کاری آن‌قدر به استاندارد دفتر شما وابسته باشد که ابزار آماده‌ای با آن سازگار نباشد.",
        },
        {
          question: "پیش از درخواست برآورد، چه چیزی باید آماده باشد؟",
          answer:
            "شرح مرحله‌به‌مرحله‌ی فرآیند دستی فعلی، یک یا دو فایل پروژه‌ی واقعی و مشخص‌بودن کاربران و نسخه‌های رویت. اگر فقط هدف نهایی به‌صورت کلی توضیح داده شود و جریان کاری واقعی بررسی نشود، برآورد به یک حدس تبدیل می‌شود.",
        },
        {
          question: "آیا تعداد کاربران پلاگین روی هزینه اثر می‌گذارد؟",
          answer:
            "بله. ابزاری که برای جریان کاری یک مدل‌ساز ساخته می‌شود، می‌تواند از بخش زیادی از خطایابی و جزئیات رابط کاربری صرف‌نظر کند، اما ابزاری که در یک دفتر بیست‌نفره استفاده می‌شود چنین امکانی ندارد. کاربران بیشتر یعنی حالت‌های استثنایی بیشتری که پلاگین باید به‌درستی مدیریت کند.",
        },
      ],
    },
    en: {
      slug: "revit-plugin-development-cost",
      meta: {
        title: "Revit Plugin Development Cost, Explained, ARTINEXT",
        description:
          "How much does Revit plugin development cost? It depends on workflow complexity, integrations, users and yearly Revit updates. Here is what sets the number.",
      },
      keywords: [
        "how much does revit plugin development cost",
        "revit plugin development cost",
        "revit addins development",
        "revit add-in development service",
        "custom revit plugin development",
        "revit api plugin development",
      ],
      breadcrumb: "Revit plugin development cost",
      category: "BIM & Revit",
      title: "How much does Revit plugin development cost?",
      leadOpinion:
        "A plugin that looks like one button was never priced by the button. It's priced by the weeks of work standing behind it.",
      publishedAt: "2026-08-27",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that scopes, architects and prices custom Revit plugins for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "drivers", label: "What actually sets the price" },
        { id: "tiers", label: "Three shapes of plugin work" },
        { id: "workflows", label: "Which workflows are worth automating" },
        { id: "approach", label: "Dynamo, API add-in or APS" },
        { id: "maintenance", label: "The cost after delivery" },
        { id: "roi", label: "When it pays for itself" },
        { id: "build-or-buy", label: "When a paid plugin wins" },
        { id: "scoping", label: "Scoping your first project" },
        { id: "quote", label: "What a good quote spells out" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "How much does Revit plugin development cost? There is no fixed number, and any quote handed over before someone has seen your actual workflow is a guess wearing a number. Four things set the price: how complex the workflow being replaced is, whether the plugin has to talk to another system, how many people will use it every day, and how many Revit versions it has to survive.\n\nA plugin that renames sheets inside one template is a different job from one that pulls live data out of Autodesk Construction Cloud into a management dashboard. Both are \"a plugin.\" Only one of them is a short project.\n\nOne of our own tools replaced a process that took about 2 weeks, sometimes closer to 1 month, with roughly 10 minutes and a button. Nobody at handover sees the 2 weeks. They see the button, and the button is what gets compared to the price. **A simple interface is compressed history, not a lack of depth.** Judging what a tool should cost by how little it asks of the user is exactly backwards.",
      heroImage: hero.en,
      sections: [
        {
          id: "drivers",
          heading: "What actually sets the price",
          image: drivers.en,
          paragraphs: [
            "Start with the logic. A script that runs one repetitive calculation on the open model is simpler than a tool that reads geometry across several families, decides something, and writes the answer back into the right parameters. Most build hours go into that decision layer, not into the window the user clicks.",
            "Then integration. A plugin that only ever touches the open Revit file never costs what one costs that also talks to BIM 360, an ERP or an outside database. Every external connection brings its own authentication, its own failure modes and its own maintenance.",
            "Then users. A tool built for one modeller's own workflow can skip edge cases that a tool rolled out to a twenty-person office cannot skip. More people means more projects, more templates, and more ways for an input to arrive wrong. The fourth factor, Revit versions, gets its own section below.",
          ],
        },
        {
          id: "tiers",
          heading: "Three shapes of plugin work, three budgets",
          image: tiers.en,
          paragraphs: [
            "This is not a price list. It's a way to see which shape your project is closer to before anyone quotes it. Three shapes come up more than the rest:",
          ],
          list: {
            items: [
              "**A single-purpose utility**: one specific, repeatable task inside Revit, such as batch-renaming views or placing tags by rule. Usually the fastest to build and test.",
              "**A tool with multi-step logic**: several project types, several edge cases, a real interface, and testing against live projects rather than one sample file.",
              "**A system with integrations**: runs partly or wholly outside Revit, moves data between systems, and needs error reporting that someone will actually read.",
            ],
          },
        },
        {
          id: "workflows",
          heading: "Which Revit workflows are worth paying to automate",
          paragraphs: [
            "The good candidates have three things in common. The rule already exists in your standard. The task repeats on every project. And a mistake in it is expensive to find later. Work that needs fresh judgment every time is a poor candidate, however tedious it feels.",
            "The second and third items below are the two tools shown running on our [custom Revit plugin development](/revit-plugin-development/) page. The ETABS one reports what it built and what it could not, element by element, as it goes. A converter that fails silently costs more in checking than it ever saves in modelling.",
          ],
          list: {
            items: [
              "**Sheet and view setup**: creating, numbering and renaming sheets and views from a list the office already keeps in Excel.",
              "**CAD to Revit conversion**: building native walls, floors, levels and openings from a coordinated CAD set instead of tracing linework by hand.",
              "**Structural model import**: turning an ETABS export into a native Revit frame, with a report of every member that did not convert.",
              "**Model checks**: running the office's naming, parameter and view-template rules as a test instead of a checklist someone has to read.",
              "**Schedules and quantities out**: pushing schedule data to Excel in the format the cost team actually uses.",
            ],
          },
        },
        {
          id: "approach",
          heading: "Dynamo script, API add-in or APS: where the money goes",
          image: approach.en,
          paragraphs: [
            "If the workflow can already be wired together with nodes, a Dynamo script is the cheapest route. It runs inside Revit, needs no installer, and your own team can open it and change it. A macro sits in the same bracket but lives inside one file or one machine, which makes it hard to share.",
            "A Revit API add-in is compiled C#/.NET code with its own interface and its own installer. It is worth building when the workflow needs a real UI, access the Dynamo nodes do not expose, or distribution across a team that should not have to open a graph to use it.",
            "Autodesk Platform Services, formerly Forge, makes sense when the automation has to run without anyone opening Revit, or across more files than a desktop can handle. Autodesk's own cost guide for the Design Automation API puts Revit processing at 6 Cloud Credits per hour. Worth knowing before assuming the cloud option is automatically the expensive one.",
          ],
        },
        {
          id: "maintenance",
          heading: "The cost after delivery: every Revit release",
          paragraphs: [
            "Revit ships a new version every year, and an add-in compiled against one version is not guaranteed to load in the next. Most years the changes are small.",
            "Some years they are not. Revit 2025 moved its API from .NET Framework 4.8 to .NET 8, and add-ins built for Revit 2024 and earlier had to be recompiled, and in places rewritten, before they would load. An office running two or three Revit versions at once needs a plugin built for all of them. That is a decision for the start of the project, not for the morning after the first upgrade breaks it.",
            "So ask two things before any quote: which versions the tool must support, and who updates it when the next one ships. If nobody can answer the second, the price you are comparing is the price of a tool with a shelf life.",
            "Code ownership belongs in the same conversation. If the source and the build instructions are handed over, any competent developer can do the yearly update. If they are not, you are paying the original developer for it, whether you planned to or not.",
          ],
        },
        {
          id: "roi",
          heading: "When a plugin pays for itself",
          image: roi.en,
          paragraphs: [
            "The payback maths is not complicated. Multiply the hours spent each week on the manual task by the number of people who do it, and weigh that against how long the tool will stay in use. A task one person does once a month rarely justifies a custom plugin. A task several people do every week usually does.",
            "Where the maths goes wrong is the baseline. People weigh the price against the 10 minutes the finished tool takes to run, instead of the 2 weeks it replaced. The number that matters is the gap between the two.",
            "The other mistake is counting only time. A manual step that introduces errors also costs the hours spent finding and fixing them later, at coordination or on site.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "When a paid plugin beats a custom one",
          image: buy.en,
          paragraphs: [
            "If an add-in already on the Autodesk App Store solves the actual problem, buy that one. We say so before any sales call, not after. Custom development earns its cost when the workflow is specific enough to your office's standard that nothing on the market fits it, not just because a task is repetitive.",
            "A good commercial add-in is also carrying costs you would otherwise carry yourself: support, integrations built for a small audience, and the yearly update for the new Revit release. Compare a custom quote against a tool that has already priced those in.",
            "Most quick estimates happen the same way. Someone describes the process on a call, in less time than a large Revit model takes to open. An estimate built from a description is never more accurate than the description. If you need a number you can defend, [start from a review of real files](/contact/) instead.",
          ],
        },
        {
          id: "scoping",
          heading: "How to scope your first plugin project",
          image: scoping.en,
          paragraphs: [
            "An accurate estimate comes from seeing the real process, not a summary of it. Four things need to be ready first:",
          ],
          list: {
            ordered: true,
            items: [
              "A step-by-step description of the current manual process, including where it goes wrong.",
              "One or two real project files the tool will actually run on.",
              "Who will use the finished tool, and on which Revit versions.",
              "Whether the tool stays inside Revit or has to exchange data with another system.",
            ],
          },
        },
        {
          id: "quote",
          heading: "What a good quote should spell out",
          paragraphs: [
            "Once the process has been seen, a quote you can hold someone to names more than a total. If any of these are missing, the number is still a guess, just a better-dressed one:",
          ],
          after: [
            "A quote that covers these reads longer than one line with a price on it. It is also the only kind that tells you what the price is for.",
          ],
          list: {
            items: [
              "**The steps the tool performs**, in the order it performs them, and what it does when an input is wrong.",
              "**The Revit versions it supports**, and what happens when the next one ships.",
              "**What is excluded**, stated as plainly as what is included.",
              "**How it is tested**: on your files, against cases agreed before the build starts.",
              "**What you receive at handover**: the installer, the source code and the instructions to build it.",
            ],
          },
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "The answer to this question is never a single number. It's a frame for reading one. Logic, integration, users and the years the tool has to keep working are what build the cost. The button the user sees at the end is not on that list.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit plugin development in Tehran", href: "/revit-plugin-development-tehran/" },
        { label: "Digital tools on the Products page", href: "/products/#digital-tools" },
        { label: "Choosing a Revit plugin development company", href: "/articles/revit-plugin-development-company/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk Platform Services, Revit SDKs and Tools", href: "https://aps.autodesk.com/developer/overview/revit-api" },
        { label: "Autodesk Platform Services, Estimate Automation costs", href: "https://aps.autodesk.com/blog/estimate-design-automation-costs" },
        { label: "Autodesk Developer Blog, Migrating from .NET 4.8 to .NET Core 8", href: "https://blog.autodesk.io/migrating-from-net-48-to-net-core-8/" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "How much does Revit plugin development actually cost?",
          answer:
            "There is no fixed figure. The price is set by workflow complexity, integrations, the number of users and the Revit versions the tool must support, not by the fact that it is \"a plugin.\" A single-purpose utility and a system pulling live data into a dashboard are two different projects.",
        },
        {
          question: "How long does Revit plugin development take?",
          answer:
            "A single-purpose utility is the fastest to build. A tool that covers several project types or has to be tested on live projects takes longer, and anything with external integrations takes longer again. The honest answer comes back to the same factors that set the cost.",
        },
        {
          question: "What is the difference between a Dynamo script and a Revit API add-in?",
          answer:
            "A Dynamo script runs inside Dynamo and Revit, and it is the faster, cheaper route when the workflow can be wired together with nodes. A Revit API add-in is compiled code with its own interface and installer, worth building when you need a real UI, deeper access or distribution across a whole team.",
        },
        {
          question: "When does Autodesk Platform Services make sense over a desktop add-in?",
          answer:
            "When the automation has to run without anyone opening Revit, or across more files than a desktop can handle. Autodesk bills its Design Automation API by processing time in Cloud Credits, not a flat fee.",
        },
        {
          question: "Do Revit updates add to the cost?",
          answer:
            "They can. Revit ships a new version every year, and Revit 2025 moved its API to .NET 8, so older add-ins had to be recompiled before they would load. Agree up front which versions the tool supports and who updates it.",
        },
        {
          question: "Is buying an existing plugin cheaper than building one?",
          answer:
            "Often, yes, and we say so up front. If an add-in already on the Autodesk App Store solves the problem, buy that one. Custom development earns its cost when your workflow is specific enough to your office's standard that nothing on the market fits.",
        },
        {
          question: "What should we have ready before asking for a quote?",
          answer:
            "A step-by-step description of the current manual process, one or two real project files, and a clear answer on who will use the tool and on which Revit versions. A vague description of the end goal, without a look at the real workflow, is what turns quotes into guesses.",
        },
        {
          question: "Does the number of people using the plugin change the cost?",
          answer:
            "Yes. A tool built for one modeller's own workflow can skip a lot of error handling and interface polish that a tool rolled out across a twenty-person office cannot. More users means more edge cases the plugin has to handle without breaking.",
        },
      ],
    },
  },
};
