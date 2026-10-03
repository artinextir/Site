import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/custom-mep-revit-add-ins";
const CONNECTOR = "https://rvtdocs.com/2026/Autodesk.Revit.DB.Connector";
const UNITS =
  "https://help.autodesk.com/cloudhelp/2018/ENU/Revit-API/Revit_API_Developers_Guide/Introduction/Application_and_Document/Units.html";
const MEP_2026 = "https://www.symetri.co.uk/insights/blog/whats-new-in-mep-2026-a-guide-to-the-latest-features";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("custom-mep-revit-add-ins", {
  fa: "ردیفی از فیتینگ‌های مسی لوله‌کشی روی زمینه‌ی تیره، از اجزایی که پلاگین تأسیسات در رویت از طریق کانکتورهای آن‌ها پیمایش می‌کند",
  en: "A row of copper pipe fittings on a dark ground, the kind of parts a custom MEP Revit add-in walks through by their connectors",
});
const conduits = img("mep-electrical-conduits", {
  fa: "کاندوئیت‌ها و جعبه‌تقسیم‌های برق زیر سقف یک ساختمان صنعتی، در کنار یک چراغ روشن",
  en: "Electrical conduits and junction boxes run under an industrial ceiling beside a lit fitting",
});

export const customMepRevitAddIns: ArticlePage = {
  slug: "custom-mep-revit-add-ins",
  content: {
    fa: {
      slug: "custom-mep-revit-add-ins",
      meta: {
        title: "پلاگین اختصاصی تأسیسات در رویت، از کانکتور تا قاعده، آرتینکست",
        description:
          "پلاگین اختصاصی تأسیسات در رویت: پیمایش کانکتورها در Revit API، نقطه‌ی شروع دفاتر، سایز کابل در رویت ۲۰۲۶، خطاهای واحد و جهت، و انتخاب میان Dynamo و پلاگین.",
      },
      keywords: [
        "پلاگین اختصاصی تأسیسات در رویت",
        "افزونه‌ی اختصاصی تأسیسات در رویت",
        "خودکارسازی مدل تأسیسات در رویت",
        "کانکتورهای MEP در Revit API",
        "سایز کابل در رویت ۲۰۲۶",
      ],
      breadcrumb: "پلاگین اختصاصی تأسیسات در رویت",
      category: "BIM و Revit",
      title: "پلاگین اختصاصی تأسیسات در رویت، از کانکتورها تا قواعد دفتر",
      leadOpinion:
        "در پلاگین تأسیسات، بیشترین توجه صرف فرمول سایزبندی می‌شود، اما خطاها از جزئیات کوچک ایجاد می‌شوند: فوت به‌جای میلی‌متر، جهت کانکتور و سه‌راهی‌ای که پیمایش را دو شاخه می‌کند.",
      publishedAt: "2026-10-03",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی رویت را برای خودکارسازی کارهای تکراری مدل‌سازی و مستندسازی در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "network", label: "تفاوت پلاگین تأسیسات" },
        { id: "tasks", label: "نقطه‌ی شروع دفاتر" },
        { id: "revit-2026", label: "سایز کابل در رویت ۲۰۲۶" },
        { id: "details", label: "جزئیاتی که خطا ایجاد می‌کنند" },
        { id: "choice", label: "Dynamo یا پلاگین" },
        { id: "scope", label: "شرح کار پیش از توسعه" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "پلاگین اختصاصی تأسیسات در رویت افزونه‌ای است که بر اساس Revit API برای کارهایی نوشته می‌شود که تیم‌های مکانیکال، الکتریکال و لوله‌کشی در هر پروژه تکرار می‌کنند، آن هم به همان شیوه‌ای که دفتر انجام می‌دهد: سایزبندی لوله‌ها بر اساس جدول خود دفتر، نام‌گذاری و شماره‌گذاری سیستم‌ها، پیدا کردن کانکتورهای باز پیش از ارسال نقشه‌ها، تگ‌گذاری گسترده و بازگرداندن نتایج محاسبات به مدل. ابزارهای آماده حالت عمومی را پوشش می‌دهند و افزونه‌ی اختصاصی، استاندارد دفتر را اجرا می‌کند.\n\nخطای کوچک در تأسیسات بیشترین اثر را ایجاد می‌کند. دیواری که در جای نادرست قرار گرفته، فقط یک دیوار نادرست است. لوله‌ای با قطر نادرست، جریان را در تمام بخش‌های پایین‌دست خود تغییر می‌دهد.\n\nامتحان پایانی بنیان‌گذار آرتینکست در دبیرستان یک آزمون اشکال‌زدایی بود، با نمره‌ی پایه‌ی ۲۰ و حداکثر ۲۴. بالاترین نمره‌ی کلاس ۱۸ بود و نمره‌ی او ۲۳٫۵. نیم نمره‌ی کسرشده به‌دلیل یک غلط املایی بود، نه یک خطای منطقی. **خطرناک‌ترین باگ‌ها، پیچیده‌ترین آن‌ها نیستند.** در پلاگین تأسیسات نیز بیشترین توجه صرف منطق سایزبندی می‌شود، در حالی که خطاها از واحدها، جهت کانکتورها و فیتینگی با سه کانکتور به‌جای دو کانکتور ایجاد می‌شوند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "network",
          heading: "تفاوت پلاگین تأسیسات با سایر پلاگین‌های رویت",
          paragraphs: [
            "بیشتر افزونه‌های رویت المان‌ها را یکی‌یکی پردازش می‌کنند: یک دیوار را می‌خوانند، یک پارامتر را می‌نویسند و به المان بعدی می‌روند. المان‌های تأسیسات به هم متصل‌اند. هر لوله، داکت، سینی کابل، فیتینگ و تجهیز کانکتورهایی دارد و کار اصلی افزونه، حرکت از یک کانکتور به کانکتور بعدی است.",
            "در Revit API، لوله یا داکت یک MEPCurve است و ConnectorManager آن، کانکتورهای المان را برمی‌گرداند. هر Connector داده‌هایی را در اختیار افزونه قرار می‌دهد: Flow، Direction، Domain، شکل و ابعاد مقطع (Radius، یا Width و Height)، IsConnected و AllRefs، یعنی کانکتورهایی که به آن متصل‌اند. با دنبال کردن AllRefs از یک پمپ، افزونه به تمام لوله‌ها و فیتینگ‌هایی می‌رسد که آن پمپ تغذیه می‌کند.",
            "این پیمایش همان بخشی است که ابزارهای عمومی به‌ندرت متناسب با یک دفتر مشخص انجام می‌دهند. سیستم از کجا شروع می‌شود؟ انتهای یک انشعاب کجاست؟ کدام فیتینگ‌ها همراه با لوله سایزبندی می‌شوند؟ پاسخ این پرسش‌ها استاندارد دفتر است و افزونه بر اساس همین پاسخ‌ها نوشته می‌شود.",
          ],
        },
        {
          id: "tasks",
          heading: "دفاتر تأسیسات معمولاً از کجا شروع می‌کنند",
          paragraphs: ["اولین افزونه معمولاً یکی از این کارها را انجام می‌دهد:"],
          list: {
            items: [
              "**سایزبندی بر اساس جدول دفتر.** ابزار داخلی Duct/Pipe Sizing در رویت بر اساس سرعت یا افت اصطکاکی کار می‌کند. بسیاری از دفاتر از جدول خود یا یک ضابطه‌ی محلی استفاده می‌کنند و افزونه دبی را از کانکتورها می‌خواند، سایز را انتخاب می‌کند و در مدل می‌نویسد.",
              "**نام‌گذاری و شماره‌گذاری سیستم‌ها**، به‌گونه‌ای که هر سیستم در سراسر مدل و اسکجوال‌ها از یک الگو پیروی کند.",
              "**کنترل کانکتورهای باز** پیش از هر ارسال: هر کانکتوری که مقدار IsConnected آن false است و المان آن انتهای عمدی سیستم نیست.",
              "**تگ‌گذاری گسترده‌ی** لوله‌ها، داکت‌ها، تجهیزات و دستگاه‌ها بر اساس قاعده، با جانمایی تگ‌ها بدون هم‌پوشانی.",
              "**جانمایی آویزها و ساپورت‌ها** در طول مسیرها، با فاصله‌ی تعیین‌شده‌ی دفتر.",
              "**انتقال داده به برگه‌های محاسبات** و بازگرداندن نتایج به مدل، از طریق Excel یا یک پایگاه داده‌ی مشترک.",
            ],
          },
          after: [
            "کاری را انتخاب کنید که تیم بیشتر از همه تکرار می‌کند و کمتر از همه درباره‌ی آن اختلاف نظر دارد. کاری که قاعده‌ی توافق‌شده دارد، خودکار می‌شود. کاری که قاعده ندارد، ابتدا به یک جلسه نیاز دارد.",
          ],
        },
        {
          id: "revit-2026",
          heading: "سایز کابل در رویت ۲۰۲۶، قاعده‌ای که دفتر تعیین می‌کند",
          image: conduits.fa,
          paragraphs: [
            "در رویت ۲۰۲۶ تنظیمات هادی‌های الکتریکال تغییر کرد. این تنظیمات به پنجره‌ی مستقلی در Manage و MEP Settings منتقل شده‌اند و طبق راهنمای Symetri برای این نسخه، سایز هادی‌ها دیگر به جریان نامی یا داده‌های Ampacity وابسته نیست. نوع و سایز کابل هر مدار، مستقل از بار متصل یا جریان نامی وسیله‌ی حفاظتی تعیین می‌شود.",
            "این تغییر برای دفاتری که با استاندارد کابل محلی کار می‌کنند، انعطاف ایجاد می‌کند. هم‌زمان، منطق سایزبندی اکنون بر عهده‌ی خود دفتر است. دفتری که به رفتار خودکار نسخه‌های قبلی متکی بود، یا مدارها را به‌صورت دستی سایزبندی می‌کند یا قاعده را مکتوب می‌کند: جدول استاندارد محلی، روش نصب و ضرایب اصلاحی مورد استفاده. قاعده‌ی مکتوب به افزونه‌ای تبدیل می‌شود که هر مدار را می‌خواند و کابل آن را تعیین می‌کند.",
          ],
        },
        {
          id: "details",
          heading: "جزئیات کوچکی که پلاگین تأسیسات را با خطا مواجه می‌کنند",
          paragraphs: ["تقریباً هیچ‌کدام از خطاها در فرمول سایزبندی رخ نمی‌دهند:"],
          list: {
            items: [
              "**واحدهای داخلی.** Revit API طول را همیشه به فوت ذخیره می‌کند، صرف‌نظر از واحدهای پروژه. قطری که ۰٫۱۶۴ خوانده می‌شود، ۵۰ میلی‌متر است. تبدیل همیشه با UnitUtils.ConvertFromInternalUnits انجام می‌شود.",
              "**واحدهای مشتق.** دبی، سرعت و فشار در واحدهایی ذخیره می‌شوند که بخشی از آن‌ها بر پایه‌ی فوت است. در نتیجه، مقدار دبی تا پیش از تبدیل، بر حسب لیتر بر ثانیه نیست.",
              "**جهت کانکتور.** In، Out یا Bidirectional. پیمایشی که جهت را نادیده بگیرد، به سمت بالادست سیستم حرکت می‌کند و لوله‌ی اصلی را بر اساس یک انشعاب سایزبندی می‌کند.",
              "**فیتینگ‌هایی با بیش از دو کانکتور.** سه‌راهی یا چهارراهی، پیمایش را به چند مسیر تقسیم می‌کند. بدون ثبت کانکتورهای پیمایش‌شده، پیمایش یک سیستم حلقوی هرگز به پایان نمی‌رسد.",
              "**سایز نامی و سایز واقعی.** DN 50 و قطر خارجی لوله دو عدد متفاوت‌اند و جدول دفتر بر اساس یکی از آن‌ها نوشته شده است.",
              "**المان‌های اشتراکی** که در اختیار کاربر دیگری هستند. افزونه نمی‌تواند آن‌ها را تغییر دهد و باید آن‌ها را گزارش کند.",
            ],
          },
          after: [
            "هیچ‌کدام از این موارد دشوار نیست. همه‌ی آن‌ها در اولین پروژه‌ی واقعی ظاهر می‌شوند و هیچ‌کدام در مدل نمونه دیده نمی‌شوند.",
          ],
        },
        {
          id: "choice",
          heading: "اسکریپت Dynamo یا پلاگین اختصاصی",
          paragraphs: [
            "برای یک پروژه، یک [اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) اغلب کافی است: دبی‌ها را از یک اسکجوال می‌خواند، با جدول تطبیق می‌دهد و سایزها را در مدل می‌نویسد. این روش ارزان‌ترین راه برای ارزیابی این است که آیا قاعده‌ی دفتر واقعاً مکتوب شده است یا نه.",
            "پلاگین اختصاصی زمانی ارزش هزینه‌ی خود را دارد که پیمایش‌ها بزرگ شوند، یک قاعده در همه‌ی پروژه‌ها اجرا شود، چند کاربر در یک مدل اشتراکی از آن استفاده کنند و افزونه در هر نسخه‌ی جدید رویت به کار خود ادامه دهد. [برنامه‌نویسی Revit API](/articles/revit-api-development/) نشان می‌دهد چنین ابزاری چگونه ساخته می‌شود.",
            "اگر کار تأسیسات دفتر شما بیشتر تگ‌گذاری و اسکجوال‌سازی روی محتوای استاندارد رویت است، احتمالاً یک افزونه‌ی آماده از Autodesk App Store این کار را انجام می‌دهد، و به ما یا شرکتی مانند ما نیازی ندارید.",
          ],
        },
        {
          id: "scope",
          heading: "پیش از شروع توسعه، چه چیزی باید مکتوب شود",
          paragraphs: ["شرح کار مفید برای یک پلاگین تأسیسات در دو صفحه جا می‌شود:"],
          list: {
            items: [
              "خود قاعده: جدول سایزبندی، الگوی نام‌گذاری یا استاندارد تگ‌گذاری، همراه با منبع آن.",
              "دسته‌هایی که افزونه تغییر می‌دهد: Pipes، Ducts، Cable Trays، Conduits، فیتینگ‌های آن‌ها و تجهیزات.",
              "آنچه افزونه می‌نویسد، در کدام پارامتر، و آنچه هرگز تغییر نمی‌دهد.",
              "گزارش المان‌به‌المان مواردی که قاعده روی آن‌ها قابل‌اجرا نبوده است.",
              "یک مدل پروژه‌ی واقعی برای تست، شامل دشوارترین سیستم آن.",
            ],
          },
          after: [
            "با این اطلاعات، برآورد هزینه بر اساس دامنه‌ی کار انجام می‌شود. [هزینه‌ی توسعه پلاگین رویت](/articles/revit-plugin-development-cost/) نشان می‌دهد قیمت چگونه از این دامنه به دست می‌آید و این کار در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "پلاگین اختصاصی تأسیسات در رویت زمانی ارزش ساخت دارد که دفتر قاعده‌ای دارد که در هر پروژه اجرا می‌کند و رویت آن را به‌صورت پیش‌فرض اجرا نمی‌کند، و از رویت ۲۰۲۶ سایزبندی کابل نیز جزو همین قواعد است. پیمایش کانکتورها هسته‌ی کار است و ریسک در جزئیات کوچک قرار دارد: فوت، واحد دبی، جهت، سه‌راهی‌ها و سایزهای نامی. تست را از همین موارد شروع کنید. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "برنامه‌نویسی Revit API", href: "/articles/revit-api-development/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "هزینه‌ی توسعه پلاگین رویت", href: "/articles/revit-plugin-development-cost/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Revit API 2026, Connector Class", href: CONNECTOR },
        { label: "Autodesk, Revit API Developer's Guide, Units", href: UNITS },
        { label: "Symetri, What's new in MEP 2026", href: MEP_2026 },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "پلاگین اختصاصی تأسیسات در رویت چیست؟",
          answer:
            "افزونه‌ای که بر اساس Revit API برای کارهای تکراری مکانیکال، الکتریکال و لوله‌کشی نوشته می‌شود و استاندارد خود دفتر را اجرا می‌کند، مانند سایزبندی بر اساس جدول دفتر، نام‌گذاری سیستم‌ها یا کنترل کانکتورهای باز.",
        },
        {
          question: "آیا رویت لوله و داکت را خودکار سایزبندی می‌کند؟",
          answer:
            "ابزار Duct/Pipe Sizing رویت بر اساس سرعت یا افت اصطکاکی سایزبندی می‌کند. وقتی دفتر از جدول خود یا یک ضابطه‌ی محلی استفاده می‌کند، این قاعده باید در یک اسکریپت یا افزونه پیاده‌سازی شود.",
        },
        {
          question: "در رویت ۲۰۲۶ سایزبندی کابل چه تغییری کرد؟",
          answer:
            "طبق راهنمای Symetri، سایز هادی‌ها دیگر به جریان نامی یا داده‌های Ampacity وابسته نیست و نوع و سایز کابل هر مدار مستقل از بار تعیین می‌شود. در نتیجه، منطق سایزبندی بر عهده‌ی دفتر است.",
        },
        {
          question: "Revit API طول را با چه واحدی ذخیره می‌کند؟",
          answer:
            "با فوت، صرف‌نظر از واحدهای پروژه. مقادیر باید با UnitUtils به واحد مورد نظر تبدیل شوند. واحدهای مشتق مانند دبی نیز بخشی بر پایه‌ی فوت هستند.",
        },
        {
          question: "برای خودکارسازی تأسیسات، Dynamo بهتر است یا پلاگین؟",
          answer:
            "برای یک پروژه یا آزمون یک قاعده، Dynamo کافی است. وقتی قاعده در همه‌ی پروژه‌ها اجرا می‌شود، پیمایش‌ها بزرگ‌اند و چند کاربر از آن استفاده می‌کنند، پلاگین اختصاصی مناسب‌تر است.",
        },
        {
          question: "کدام کار تأسیسات برای شروع خودکارسازی مناسب‌تر است؟",
          answer:
            "کاری که تیم بیشتر از همه تکرار می‌کند و قاعده‌ی توافق‌شده‌ای دارد. سایزبندی بر اساس جدول دفتر، نام‌گذاری سیستم‌ها و کنترل کانکتورهای باز رایج‌ترین نقاط شروع هستند.",
        },
        {
          question: "چه زمانی به پلاگین اختصاصی نیاز ندارید؟",
          answer:
            "زمانی که کار تأسیسات دفتر بیشتر تگ‌گذاری و اسکجوال‌سازی روی محتوای استاندارد رویت است و یک افزونه‌ی آماده همان کار را انجام می‌دهد.",
        },
      ],
    },
    en: {
      slug: "custom-mep-revit-add-ins",
      meta: {
        title: "Custom MEP Revit Add-ins: Connectors to Office Rules, ARTINEXT",
        description:
          "Custom MEP Revit add-ins: walking connectors in the Revit API, where MEP offices start, Revit 2026 cable sizing, and the details that break add-ins.",
      },
      keywords: [
        "custom mep revit add-ins",
        "revit mep add-in development",
        "revit mep automation",
        "revit api mep connectors",
        "revit 2026 cable sizing",
      ],
      breadcrumb: "Custom MEP Revit add-ins",
      category: "BIM & Revit",
      title: "Custom MEP Revit add-ins: from connectors to the office's rules",
      leadOpinion:
        "In an MEP add-in the sizing formula gets all the attention. The failures come from small details: feet instead of millimetres, a connector's direction, a tee that splits the traversal in two.",
      publishedAt: "2026-10-03",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit plugins to automate repetitive modelling and documentation work for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "network", label: "What makes MEP different" },
        { id: "tasks", label: "Where offices start" },
        { id: "revit-2026", label: "Cable sizing in Revit 2026" },
        { id: "details", label: "The details that break it" },
        { id: "choice", label: "Dynamo or a plugin" },
        { id: "scope", label: "What to write down first" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Custom MEP Revit add-ins are plugins written against the Revit API for work the mechanical, electrical and plumbing disciplines repeat on every project, done the way the office does it: sizing pipes against the office's own table, naming and numbering systems, finding open connectors before an issue, tagging in bulk, and writing calculation results back into the model. Off-the-shelf tools cover the general case. A custom add-in covers the office's standard.\n\nMEP is also where a small mistake travels furthest. A wall in the wrong place is one wrong wall. A pipe with the wrong diameter changes the flow in everything downstream of it.\n\nThe founder's high school final was a debugging exam, graded out of 20 with 24 available. The class high was 18. His score was 23.5, and the half point went on a spelling mistake. Not a logic error. A typo. **The most dangerous bugs aren't the complicated ones.** In an MEP add-in the sizing logic gets the attention, and the failures come from units, connector directions, and a fitting with three connectors instead of two.",
      heroImage: hero.en,
      sections: [
        {
          id: "network",
          heading: "What makes an MEP add-in different",
          paragraphs: [
            "Most Revit add-ins work element by element: read a wall, write a parameter, move on. MEP elements are connected. Every pipe, duct, cable tray, fitting and piece of equipment carries connectors, and the add-in's real job is to walk from one to the next.",
            "In the Revit API a pipe or duct is an MEPCurve, and its ConnectorManager returns its connectors. Each Connector carries the data the add-in works with: Flow, Direction, Domain, its shape and size (Radius, or Width and Height), IsConnected, and AllRefs, the connectors it's joined to. Follow AllRefs out from a pump and you reach every pipe and fitting it serves.",
            "That traversal is the part a general-purpose tool rarely gets right for a specific office. Where does a system start? Where does a branch end? Which fittings get sized with the pipe? Those answers are the office's standard, and they're what the add-in is written from.",
          ],
        },
        {
          id: "tasks",
          heading: "Where MEP offices usually start",
          paragraphs: ["The first add-in is usually one of these:"],
          list: {
            items: [
              "**Sizing against the office's table.** Revit's built-in Duct/Pipe Sizing works from velocity or friction. Many offices size from their own table or a local code, so the add-in reads flow from the connectors, picks the size and writes it back.",
              "**System naming and numbering**, so every system follows one pattern across the model and the schedules.",
              "**Open connector checks** before each issue: every connector where IsConnected is false and the element isn't a deliberate end of the system.",
              "**Bulk tagging** of pipes, ducts, equipment and devices by rule, with the tags placed so they don't overlap.",
              "**Hangers and supports** placed along runs at the office's spacing.",
              "**Data out to calculation sheets** and results back in, through Excel or a shared database.",
            ],
          },
          after: [
            "Pick the one the team repeats most and argues about least. A task with an agreed rule gets automated. A task without one gets a meeting first.",
          ],
        },
        {
          id: "revit-2026",
          heading: "Revit 2026 made cable sizing the office's rule",
          image: conduits.en,
          paragraphs: [
            "Revit 2026 changed electrical conductors. Their settings moved to a dialog of their own under Manage, MEP Settings, and according to Symetri's guide to the release, conductor sizes are no longer linked to ratings or ampacity data. You set the cable type and size of a circuit independently of the connected load or the protective device rating.",
            "That's more flexible for offices working to a local cable standard. It also means the sizing logic is now the office's to supply. An office that relied on the old automatic behaviour either sizes circuits by hand or writes the rule down: the local standard's table, the installation method, the correction factors it applies. Written down, it becomes an add-in that reads each circuit and sets its cable.",
          ],
        },
        {
          id: "details",
          heading: "The small details that break MEP add-ins",
          paragraphs: ["Almost none of the failures are in the sizing formula:"],
          list: {
            items: [
              "**Internal units.** The Revit API stores length in feet, whatever the project units say. A diameter that reads 0.164 is 50 mm. Conversion always goes through UnitUtils.ConvertFromInternalUnits.",
              "**Derived units.** Flow, velocity and pressure are stored in units built partly on feet, so a flow value isn't in litres per second until it's converted.",
              "**Connector direction.** In, Out or Bidirectional. A traversal that ignores direction walks back upstream and sizes the main from a branch.",
              "**Fittings with more than two connectors.** A tee or a cross splits the traversal. Without a record of visited connectors, a looped system never finishes.",
              "**Nominal and actual size.** DN 50 and the pipe's outside diameter are different numbers, and the office's table is written in one of them.",
              "**Workshared elements** owned by someone else. The add-in can't change them and has to report them.",
            ],
          },
          after: [
            "None of these are hard. All of them show up on the first real project. None of them show up on the sample model.",
          ],
        },
        {
          id: "choice",
          heading: "A Dynamo graph or a custom add-in",
          paragraphs: [
            "For one project, a [custom Dynamo script](/articles/custom-dynamo-script-development/) is often enough: read flows from a schedule, match them against a table, write the sizes back. It's also the cheapest way to find out whether the office's rule is actually written down.",
            "A custom add-in earns its cost when the traversals get large, the same rule runs on every project, several people use it in a workshared model, and it has to keep working through each Revit release. [Revit API development](/articles/revit-api-development/) covers how a tool like that is built.",
            "If your MEP work is mostly tagging and scheduling on standard Revit content, an off-the-shelf add-in from the Autodesk App Store probably does it, and you don't need us, or anyone like us.",
          ],
        },
        {
          id: "scope",
          heading: "What to write down before anyone starts",
          paragraphs: ["A useful brief for an MEP add-in fits on two pages:"],
          list: {
            items: [
              "The rule itself: the sizing table, the naming pattern or the tagging standard, with its source.",
              "The categories it touches: Pipes, Ducts, Cable Trays, Conduits, their fittings, and equipment.",
              "What it writes, to which parameter, and what it never changes.",
              "What it reports, element by element, when the rule can't be applied.",
              "One real project model to test on, with its worst system in it.",
            ],
          },
          after: [
            "With that, a quote is about scope. The [cost article](/articles/revit-plugin-development-cost/) covers how the price follows from it, and it's the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Custom MEP Revit add-ins are worth building where the office has a rule it applies on every project and Revit doesn't apply it out of the box, which since Revit 2026 includes cable sizing. The connector traversal is the core. The risk sits in the small details: feet, flow units, direction, tees, nominal sizes. Test against those first. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit API development", href: "/articles/revit-api-development/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "How much does Revit plugin development cost", href: "/articles/revit-plugin-development-cost/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Revit API 2026, Connector Class", href: CONNECTOR },
        { label: "Autodesk, Revit API Developer's Guide, Units", href: UNITS },
        { label: "Symetri, What's new in MEP 2026", href: MEP_2026 },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is a custom MEP Revit add-in?",
          answer:
            "A plugin written against the Revit API for repetitive mechanical, electrical and plumbing work that applies the office's own standard, such as sizing against the office's table, naming systems, or checking for open connectors.",
        },
        {
          question: "Does Revit size pipes and ducts automatically?",
          answer:
            "Revit's Duct/Pipe Sizing tool sizes from velocity or friction. When an office sizes from its own table or a local code, that rule has to be implemented in a script or an add-in.",
        },
        {
          question: "What changed about cable sizing in Revit 2026?",
          answer:
            "According to Symetri's guide, conductor sizes are no longer linked to ratings or ampacity data, and a circuit's cable type and size are set independently of its load. The sizing logic is now the office's to supply.",
        },
        {
          question: "What units does the Revit API use for length?",
          answer:
            "Feet, whatever the project units are. Values have to be converted with UnitUtils. Derived units such as flow are partly based on feet as well.",
        },
        {
          question: "Is Dynamo or an add-in better for MEP automation?",
          answer:
            "Dynamo is enough for one project or for testing a rule. A custom add-in fits better when the rule runs on every project, the traversals are large, and several people use it.",
        },
        {
          question: "Which MEP task should you automate first?",
          answer:
            "The one the team repeats most and that has an agreed rule. Sizing against the office's table, system naming, and open connector checks are the most common starting points.",
        },
        {
          question: "When don't you need a custom MEP add-in?",
          answer:
            "When the office's MEP work is mostly tagging and scheduling on standard Revit content and an off-the-shelf add-in already does it.",
        },
      ],
    },
  },
};
