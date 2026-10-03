import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/custom-revit-ribbon-dynamo";
const RELAY = "https://johnpierson.github.io/Relay/";
const PYREVIT = "https://pyrevit1.readthedocs.io/en/latest/creatingexts.html";
const UI_APP = "https://rvtdocs.com/2026/Autodesk.Revit.UI.UIControlledApplication";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("custom-revit-ribbon-dynamo", {
  fa: "دیواری از پنل‌های کنترل با کلیدها و نشانگرهای منظم در فضایی کم‌نور، تصویری از منویی که ابزارهای دفتر را در یک‌جا جمع می‌کند",
  en: "A dim wall of control panels with switches and gauges in rows, like a ribbon that gathers an office's tools in one place",
});
const organised = img("revit-ribbon-tools-organized", {
  fa: "آچارها و پیچ‌گوشتی‌هایی که بر اساس نوع روی یک تخته‌ی سوراخ‌دار تیره مرتب شده‌اند",
  en: "Spanners and screwdrivers arranged by type on a dark pegboard",
});

export const customRevitRibbonDynamo: ArticlePage = {
  slug: "custom-revit-ribbon-dynamo",
  content: {
    fa: {
      slug: "custom-revit-ribbon-dynamo",
      meta: {
        title: "ساخت منوی اختصاصی در رویت با Dynamo، از پوشه تا ریبون، آرتینکست",
        description:
          "ساخت منوی اختصاصی در رویت با Dynamo: Dynamo Player، Relay، pyRevit و افزونه‌ی C#، آماده‌سازی گراف‌ها برای اجرا از دکمه، ساختار پنل‌ها و استقرار در دفتر.",
      },
      keywords: [
        "ساخت منوی اختصاصی در رویت با Dynamo",
        "ساخت تب اختصاصی در رویت",
        "اجرای اسکریپت Dynamo از ریبون رویت",
        "منوی ابزارهای دفتر در رویت",
        "ساخت منو در رویت با pyRevit",
      ],
      breadcrumb: "ساخت منوی اختصاصی در رویت با Dynamo",
      category: "BIM و Revit",
      title: "ساخت منوی اختصاصی در رویت با Dynamo، از پوشه‌ی گراف‌ها تا منوی دفتر",
      leadOpinion:
        "دکمه‌ای که ساده به نظر می‌رسد، خلاصه‌ی تصمیم‌های پشت آن است. منو جایی است که کار Dynamo دفتر از پوشه‌ی شخصی یک نفر خارج می‌شود و به ابزاری تبدیل می‌شود که کل تیم آن را پیدا می‌کند.",
      publishedAt: "2026-10-03",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که اسکریپت‌های Dynamo و پلاگین‌های اختصاصی رویت را می‌سازد و آن‌ها را به ابزارهای قابل‌استفاده برای کل تیم در دفاتر معماری، سازه و تأسیسات تبدیل می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "player", label: "محدودیت Dynamo Player" },
        { id: "routes", label: "چهار روش ساخت منو" },
        { id: "prepare", label: "آماده‌سازی گراف" },
        { id: "organise", label: "ساختار تب و پنل‌ها" },
        { id: "rollout", label: "استقرار در دفتر" },
        { id: "plugin", label: "زمان تبدیل به پلاگین" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "ساخت منوی اختصاصی در رویت با Dynamo یعنی یک تب مستقل در رویت که در آن هرکدام از گراف‌های Dynamo دفتر، یک دکمه‌ی نام‌دار با آیکون و توضیح است و دکمه‌ها در پنل‌ها دسته‌بندی شده‌اند. کاربر روی دکمه کلیک می‌کند، اگر گراف ورودی داشته باشد یک پنجره‌ی کوتاه را تکمیل می‌کند و گراف اجرا می‌شود. نیازی به باز کردن Dynamo نیست و کاربر لازم ندارد بداند فایل در کدام پوشه قرار دارد.\n\nچهار روش برای ساخت این منو وجود دارد: پوشه‌ی Dynamo Player، یک افزونه‌ی رایگان مانند Relay، چارچوب pyRevit یا یک افزونه‌ی اختصاصی C#. انتخاب میان آن‌ها به تعداد گراف‌ها، تعداد کاربران و میزان تغییر گراف‌ها بستگی دارد.\n\nبنیان‌گذار آرتینکست پلاگینی ساخت که فرآیندی حدوداً دوهفته‌ای، و گاهی نزدیک به یک ماه، را به حدود ۱۰ دقیقه کاهش داد. آنچه کاربر می‌بیند فقط یک دکمه است. **رابط ساده، خلاصه‌ی پیچیدگی‌هایی است که پشت آن حل شده‌اند، نه نشانه‌ی کم‌عمقی.** منوی دکمه‌های Dynamo نیز همین‌گونه است: آنچه آن را قابل‌استفاده می‌کند، تصمیم‌هایی است که پیش از افزودن هر دکمه گرفته شده‌اند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "player",
          heading: "چرا Dynamo Player هنوز یک منو نیست",
          paragraphs: [
            "Dynamo Player گراف‌ها را بدون باز کردن Dynamo اجرا می‌کند و همراه رویت نصب می‌شود. کافی است یک پوشه به آن معرفی شود تا تمام گراف‌های آن پوشه را فهرست کند. برای کسی که گراف‌ها را نوشته، همین کافی است.",
            "برای یک تیم ده‌نفره، نتیجه فهرستی از نام فایل‌هاست. دسته‌بندی بر اساس نوع کار وجود ندارد، نام‌ها همان چیزی است که نویسنده تایپ کرده و گرافی که کاربر به آن نیاز دارد، کنار سه نسخه‌ی قدیمی خود قرار گرفته است. یک تب در ریبون، هر گراف را در جایی قرار می‌دهد که کاربران ابزارها را در آن جست‌وجو می‌کنند، با نامی که کار آن را توضیح می‌دهد.",
            "پیش از همه‌ی این‌ها، خود گراف باید برای کسی جز نویسنده‌ی آن قابل‌اجرا باشد. [توسعه اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) شرایط آن را توضیح می‌دهد.",
          ],
        },
        {
          id: "routes",
          heading: "چهار روش ساخت منو در رویت",
          paragraphs: ["از کمترین تا بیشترین کار:"],
          list: {
            ordered: true,
            items: [
              "**پوشه‌ی Dynamo Player.** بدون نصب هیچ افزونه‌ای، یک پوشه‌ی مشترک و یک فهرست. این روش نقطه‌ی شروع است و برای تعداد کمی گراف، ممکن است تمام نیاز دفتر را پوشش دهد.",
              "**Relay**، یک افزونه‌ی رایگان و متن‌باز. زیرپوشه‌های پوشه‌ی گراف‌ها به پنل‌های ریبون و هر فایل .dyn به یک دکمه تبدیل می‌شود. آیکون‌ها فایل‌های PNG اختیاری با پسوندهای _16 و _32 هستند. نودهایی که با Is Input علامت خورده‌اند، پیش از اجرا به یک پنجره‌ی ورودی تبدیل می‌شوند و نودهای Is Output نتایج را پس از اجرا نمایش می‌دهند. مستندات Relay نسخه‌های فعلی را برای Revit 2025 تا 2027 و نسخه‌ی 1.5.2 را برای Revit 2021 تا 2024 معرفی می‌کند.",
              "**pyRevit**، یک چارچوب متن‌باز که تب‌های ریبون را از ساختار پوشه‌ها می‌سازد: پوشه‌ی .extension شامل پوشه‌های .tab است، هر .tab شامل پوشه‌های .panel و هر .panel شامل پوشه‌های .pushbutton که هرکدام یک اسکریپت و یک icon.png دارند. دکمه‌ها کد Python را روی Revit API اجرا می‌کنند. این روش برای دفاتری مناسب است که بخش اصلی کار گراف‌هایشان در یک نود Python انجام می‌شود.",
              "**افزونه‌ی اختصاصی C#.** افزونه هنگام اجرای رویت، با متدهای CreateRibbonTab و CreateRibbonPanel از کلاس UIControlledApplication در Revit API، تب و پنل‌ها را می‌سازد و هر دکمه کد اختصاصی دفتر را اجرا می‌کند. این روش کنترل کامل بر پنجره‌ها، اعتبارسنجی، نصب و به‌روزرسانی ایجاد می‌کند، به قیمت نوشتن و نگهداری کد.",
            ],
          },
        },
        {
          id: "prepare",
          heading: "آماده‌سازی گراف برای اجرا از یک دکمه",
          paragraphs: [
            "هنگام اجرای گراف از یک دکمه، نویسنده‌ی آن در کنار کاربر حضور ندارد. پیش از افزودن گراف به ریبون، این موارد کنترل می‌شوند:",
          ],
          list: {
            items: [
              "هر مقداری که کاربر باید انتخاب کند، یک نود **Is Input** با نامی قابل‌درک برای کاربر است. سایر مقادیر درون گراف ثابت‌اند.",
              "نتایجی که کاربر باید ببیند، مانند تعداد المان‌های تغییرکرده یا فهرست المان‌های ردشده، با Is Output علامت خورده‌اند.",
              "هیچ مسیر فایلی به دسکتاپ یک فرد اشاره نمی‌کند و فقط مسیرهای مشترک استفاده می‌شوند.",
              "پکیج‌های مورد استفاده‌ی گراف، با نسخه‌ی یکسان، روی تمام سیستم‌هایی که این دکمه را دارند نصب شده‌اند.",
              "گراف علاوه بر مدلی که در آن نوشته شده، روی یک مدل پروژه‌ی واقعی نیز اجرا شده است.",
            ],
          },
          after: [
            "مورد آخر از همه مهم‌تر است. گرافی که روی مدل نویسنده کار می‌کند و روی مدل بعدی با خطا مواجه می‌شود، دکمه را به یک درخواست پشتیبانی تبدیل می‌کند.",
          ],
        },
        {
          id: "organise",
          heading: "ساختار تب و پنل‌های منو",
          image: organised.fa,
          paragraphs: [
            "پنل‌ها بر اساس مرحله‌ی کار دسته‌بندی می‌شوند، نه بر اساس نویسنده‌ی گراف: مدل‌سازی، مستندسازی، شیت‌ها و کنترل. کاربری که ابزار شماره‌گذاری شیت‌ها را جست‌وجو می‌کند، به پنل شیت‌ها مراجعه می‌کند و لازم نیست بداند کدام همکار آن را نوشته است.",
            "نام هر دکمه کاری است که انجام می‌دهد، مانند شماره‌گذاری شیت‌ها، جانمایی وال‌پست‌ها یا خروجی اسکجوال‌ها، و به اندازه‌ای کوتاه است که زیر آیکون جا شود. توضیح هر دکمه مشخص می‌کند گراف کدام المان‌های مدل را تغییر می‌دهد.",
            "گراف‌هایی که کسی اجرا نمی‌کند، از منو حذف می‌شوند. تبی که برای هر گرافی که تا امروز نوشته شده یک دکمه دارد، همان پوشه‌ی قبلی است، این‌بار با آیکون.",
          ],
        },
        {
          id: "rollout",
          heading: "استقرار منو در دفتر",
          paragraphs: [
            "یک نسخه از گراف‌ها روی یک پوشه‌ی مشترک شبکه نگه‌داری می‌شود و منوی همه‌ی سیستم‌ها به همان پوشه اشاره می‌کند. وقتی گرافی اصلاح می‌شود، همه‌ی کاربران در اجرای بعدی نسخه‌ی اصلاح‌شده را در اختیار دارند. فقط یک یا دو نفر امکان تغییر این پوشه را دارند و سایر کاربران فقط دسترسی خواندن دارند.",
            "دکمه‌های جدید ابتدا به یک پنل آزمایشی اضافه می‌شوند و کسی که گراف را درخواست کرده از آن استفاده می‌کند، پیش از آنکه به پنل‌های اصلی منتقل شوند.",
            "نسخه‌های رویت نیز باید در برنامه دیده شوند. رویت ۲۰۲۵ همراه Dynamo 3.0 روی .NET 8 عرضه شد و پکیجی که به .NET 8 منتقل شده، در نسخه‌های قدیمی‌تر Dynamo بارگذاری نمی‌شود. در نتیجه، دفتری که هم‌زمان با دو نسخه‌ی رویت کار می‌کند، ممکن است به دو پوشه نیاز داشته باشد. مقاله‌های [مرتب‌سازی شیت در رویت](/articles/revit-sheet-sorting-plugin/) و [وال‌پست‌گذاری خودکار در رویت](/articles/revit-wall-post-automation/) دو گرافی را توضیح می‌دهند که معمولاً به دکمه‌های این منو تبدیل می‌شوند.",
          ],
        },
        {
          id: "plugin",
          heading: "چه زمانی منو باید به پلاگین تبدیل شود",
          paragraphs: [
            "منوی دکمه‌های Dynamo برای مدت طولانی ابزار مناسبی است. نشانه‌های اینکه یک گراف به چیزی فراتر از این منو نیاز دارد:",
          ],
          list: {
            items: [
              "اجرای آن روی یک مدل بزرگ چند دقیقه طول می‌کشد و کاربران چند بار در روز آن را اجرا می‌کنند.",
              "کاربران به یک پنجره‌ی کامل نیاز دارند: گزینه‌هایی که به مدل وابسته‌اند، اعتبارسنجی پیش از هر تغییر و گزارشی روشن پس از اجرا.",
              "با هر نسخه‌ی جدید رویت دچار خطا می‌شود و اصلاح آن همیشه بر عهده‌ی یک نفر است.",
              "در دفاتری استفاده می‌شود که شبکه‌ی مشترک ندارند.",
            ],
          },
          after: [
            "در این مرحله، گراف شرح کار پلاگین است. [برنامه‌نویسی Revit API](/articles/revit-api-development/) نشان می‌دهد این تبدیل چگونه انجام می‌شود، [هزینه‌ی توسعه پلاگین رویت](/articles/revit-plugin-development-cost/) قیمت آن را توضیح می‌دهد و این کار در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
            "اگر دفتر تعداد کمی گراف و یک نفر برای اجرای آن‌ها دارد، یک تب Relay یا pyRevit که در یک بعدازظهر راه‌اندازی می‌شود کافی است، و به ما یا شرکتی مانند ما نیازی ندارید.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "ساخت منوی اختصاصی در رویت با Dynamo، پوشه‌ای از گراف‌ها را به منویی تبدیل می‌کند که کل تیم از آن استفاده می‌کند: گراف‌هایی که بدون نویسنده‌ی خود اجرا می‌شوند، پنل‌هایی که بر اساس مرحله‌ی کار دسته‌بندی شده‌اند، یک نسخه‌ی مشترک و یک پنل آزمایشی برای هر دکمه‌ی جدید. دکمه ساده به نظر می‌رسد و آنچه پشت آن قرار دارد، تصمیم‌هایی است که این سادگی را ممکن کرده‌اند. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "برنامه‌نویسی Revit API", href: "/articles/revit-api-development/" },
        { label: "مرتب‌سازی شیت در رویت", href: "/articles/revit-sheet-sorting-plugin/" },
        { label: "وال‌پست‌گذاری خودکار در رویت", href: "/articles/revit-wall-post-automation/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Relay for Revit, documentation", href: RELAY },
        { label: "pyRevit, Extensions and Commands", href: PYREVIT },
        { label: "Revit API 2026, UIControlledApplication Class", href: UI_APP },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا می‌توان اسکریپت‌های Dynamo را به ریبون رویت اضافه کرد؟",
          answer:
            "بله. افزونه‌ی Relay فایل‌های .dyn را مستقیماً به دکمه‌های ریبون تبدیل می‌کند، pyRevit دکمه‌هایی می‌سازد که کد Python اجرا می‌کنند و یک افزونه‌ی اختصاصی C# می‌تواند هر منطقی را پشت یک دکمه قرار دهد.",
        },
        {
          question: "آیا روش رایگانی برای ساخت منوی اختصاصی در رویت وجود دارد؟",
          answer:
            "Relay و pyRevit هر دو رایگان و متن‌باز هستند. Dynamo Player نیز همراه رویت نصب می‌شود، اما گراف‌ها را به‌صورت فهرست نمایش می‌دهد و تب مستقلی در ریبون نمی‌سازد.",
        },
        {
          question: "ورودی‌های گراف چگونه از کاربر گرفته می‌شوند؟",
          answer:
            "نودهایی که با Is Input علامت خورده‌اند، پیش از اجرا به یک پنجره‌ی ورودی تبدیل می‌شوند. سایر مقادیر درون گراف ثابت می‌مانند.",
        },
        {
          question: "آیکون دکمه‌ها چگونه تعیین می‌شود؟",
          answer:
            "در Relay، فایل‌های PNG هم‌نام با گراف و با پسوندهای _16 و _32. در pyRevit، یک فایل icon.png درون پوشه‌ی هر دکمه.",
        },
        {
          question: "با ارتقای رویت، منو چه تغییری می‌کند؟",
          answer:
            "هر نسخه‌ی رویت با نسخه‌ی مشخصی از Dynamo عرضه می‌شود. پکیج‌ها و گراف‌ها باید روی نسخه‌ی جدید تست شوند و دفتری که با دو نسخه‌ی رویت کار می‌کند ممکن است به دو پوشه نیاز داشته باشد.",
        },
        {
          question: "چه زمانی یک گراف Dynamo باید به پلاگین تبدیل شود؟",
          answer:
            "وقتی اجرای آن روی مدل‌های بزرگ کند است، کاربران به پنجره و اعتبارسنجی کامل نیاز دارند، با هر نسخه‌ی رویت دچار خطا می‌شود یا در چند دفتر بدون شبکه‌ی مشترک استفاده می‌شود.",
        },
        {
          question: "چه زمانی به خدمات توسعه نیاز ندارید؟",
          answer:
            "زمانی که دفتر تعداد کمی گراف و یک نفر برای اجرای آن‌ها دارد. یک تب Relay یا pyRevit برای این وضعیت کافی است.",
        },
      ],
    },
    en: {
      slug: "custom-revit-ribbon-dynamo",
      meta: {
        title: "Custom Revit Ribbon for Dynamo Scripts, Folder to Menu, ARTINEXT",
        description:
          "A custom Revit ribbon for Dynamo scripts: Dynamo Player, Relay, pyRevit or a C# add-in, preparing graphs to run from a button, organising panels, and rollout.",
      },
      keywords: [
        "custom revit ribbon for dynamo scripts",
        "custom revit tab",
        "run dynamo scripts from revit ribbon",
        "pyrevit custom toolbar",
        "dynamo player alternative",
      ],
      breadcrumb: "Custom Revit ribbon for Dynamo scripts",
      category: "BIM & Revit",
      title: "A custom Revit ribbon for Dynamo scripts: from a folder of graphs to an office menu",
      leadOpinion:
        "A button that looks simple is compressed history. The menu is where an office's Dynamo work stops being one person's folder and becomes a tool the whole team can find.",
      publishedAt: "2026-10-03",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds Dynamo scripts and custom Revit plugins, and turns them into tools a whole architecture, structural or MEP office can use.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "player", label: "Where Dynamo Player stops" },
        { id: "routes", label: "Four ways to build it" },
        { id: "prepare", label: "Preparing a graph" },
        { id: "organise", label: "Organising the tab" },
        { id: "rollout", label: "Rolling it out" },
        { id: "plugin", label: "When to move to a plugin" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A custom Revit ribbon for Dynamo scripts is a tab of its own in Revit where each of the office's Dynamo graphs is a named button, grouped into panels, with an icon and a tooltip. A user clicks the button, fills in a short dialog if the graph has inputs, and the graph runs. Nobody opens Dynamo. Nobody has to know which folder the file lives in.\n\nThere are four ways to build it: Dynamo Player's folder, a free add-in such as Relay, pyRevit, or a custom C# add-in. Which one fits depends on how many graphs there are, how many people run them, and how often they change.\n\nOne plugin the founder built took a process that normally ran about two weeks, sometimes closer to a month, down to roughly 10 minutes. What the user sees is one button. **A simple interface is compressed history, not a lack of depth.** A menu of Dynamo buttons works the same way. What makes it usable is everything decided before each button was added.",
      heroImage: hero.en,
      sections: [
        {
          id: "player",
          heading: "Why Dynamo Player isn't a menu yet",
          paragraphs: [
            "Dynamo Player runs graphs without opening Dynamo, and it's installed with Revit. Point it at a folder and it lists every graph in it. For the person who wrote the graphs, that's enough.",
            "For a team of ten it's a list of file names. There's no grouping by task, the names are whatever the author typed, and the graph a user needs sits next to three old versions of itself. A ribbon tab puts each graph where users already look for tools, under a name that says what it does.",
            "Before any of that, the graph has to run for someone other than its author. [Custom Dynamo script development](/articles/custom-dynamo-script-development/) covers what that takes.",
          ],
        },
        {
          id: "routes",
          heading: "Four ways to build the menu",
          paragraphs: ["From the least work to the most:"],
          list: {
            ordered: true,
            items: [
              "**A Dynamo Player folder.** Nothing to install. One shared folder, one list. It's the baseline, and for a handful of graphs it may be all the office needs.",
              "**Relay**, a free, open-source add-in. Subfolders of its graph folder become ribbon panels and each .dyn file becomes a button. Icons are optional PNGs named with _16 and _32 suffixes. Nodes marked Is Input become a dialog before the graph runs, and nodes marked Is Output show their results afterwards. Its documentation lists current builds for Revit 2025 to 2027, and v1.5.2 for Revit 2021 to 2024.",
              "**pyRevit**, an open-source framework that builds ribbon tabs from folders: an .extension folder holds .tab folders, which hold .panel folders, which hold .pushbutton folders, each with a script and an icon.png. Its buttons run Python against the Revit API. It suits offices whose graphs already do most of their work inside a Python node.",
              "**A custom C# add-in.** When Revit starts, the add-in creates the tab and panels through UIControlledApplication's CreateRibbonTab and CreateRibbonPanel, and each button runs the office's own code. Full control over dialogs, validation, installers and updates, at the price of writing and maintaining it.",
            ],
          },
        },
        {
          id: "prepare",
          heading: "Preparing a graph to become a button",
          paragraphs: [
            "A graph that runs from a button has no author standing next to it. Before it goes on the ribbon:",
          ],
          list: {
            items: [
              "Every value the user should choose is a node marked **Is Input**, with a name the user understands. Everything else is fixed inside the graph.",
              "Results the user needs to see, a count of changed elements or a list of skipped ones, are marked Is Output.",
              "No file path points at someone's desktop. Shared paths only.",
              "The packages it uses are installed, in the same version, on every machine that has the button.",
              "It has been run on a real project model, not only the one it was written in.",
            ],
          },
          after: [
            "The last point matters most. A graph that works on its author's model and fails on the next one turns the button into a support request.",
          ],
        },
        {
          id: "organise",
          heading: "Organising the tab and its panels",
          image: organised.en,
          paragraphs: [
            "Group panels by stage of work, not by who wrote the graph: Modelling, Documentation, Sheets, Checks. A user looking for the tool that renumbers sheets looks under Sheets, and doesn't need to remember which colleague wrote it.",
            "Name buttons as actions, Renumber sheets, Place wall posts, Export schedules, short enough to fit under the icon. The tooltip says which elements in the model the graph changes.",
            "Retire graphs nobody runs. A tab with a button for every graph ever written is the same folder again, with icons.",
          ],
        },
        {
          id: "rollout",
          heading: "Rolling the menu out to the office",
          paragraphs: [
            "Keep one copy of the graphs on a shared network folder and point every machine's menu at it. When a graph is fixed, everyone gets the fix on their next run. One or two people can write to that folder. Everyone else reads.",
            "New buttons go on a test panel first, used by the person who asked for the graph, before they move to the main panels.",
            "Plan for Revit releases. Revit 2025 shipped Dynamo 3.0 on .NET 8, and a package migrated to .NET 8 no longer loads in older Dynamo, so an office running two Revit versions may need two folders. The [sheet sorting](/articles/revit-sheet-sorting-plugin/) and [wall post](/articles/revit-wall-post-automation/) articles describe two graphs that often end up as buttons on a menu like this.",
          ],
        },
        {
          id: "plugin",
          heading: "When the menu should become a plugin",
          paragraphs: [
            "A ribbon of Dynamo buttons is the right tool for a long time. The signs a graph has outgrown it:",
          ],
          list: {
            items: [
              "It takes minutes on a large model, and users run it several times a day.",
              "Users need a real dialog: choices that depend on the model, validation before anything changes, a clear report afterwards.",
              "It breaks at every Revit release, and the fix is always the same person's job.",
              "It's used across offices that don't share a network.",
            ],
          },
          after: [
            "At that point the graph is the add-in's specification. [Revit API development](/articles/revit-api-development/) covers how it becomes one, the [cost article](/articles/revit-plugin-development-cost/) covers the price, and it's the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
            "If the office has a handful of graphs and one person who runs them, a Relay or pyRevit tab set up in an afternoon is enough, and you don't need us, or anyone like us.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A custom Revit ribbon for Dynamo scripts turns a folder of graphs into a menu the whole team uses: graphs that run without their author, panels grouped by stage of work, one shared copy, and a test panel for anything new. The button looks simple. Behind it are the decisions that made it simple. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit API development", href: "/articles/revit-api-development/" },
        { label: "Revit sheet sorting plugin", href: "/articles/revit-sheet-sorting-plugin/" },
        { label: "Revit wall post family automation", href: "/articles/revit-wall-post-automation/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Relay for Revit, documentation", href: RELAY },
        { label: "pyRevit, Extensions and Commands", href: PYREVIT },
        { label: "Revit API 2026, UIControlledApplication Class", href: UI_APP },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Can you add Dynamo scripts to the Revit ribbon?",
          answer:
            "Yes. Relay turns .dyn files directly into ribbon buttons, pyRevit builds buttons that run Python, and a custom C# add-in can put any logic behind a button.",
        },
        {
          question: "Is there a free way to build a custom Revit tab?",
          answer:
            "Relay and pyRevit are both free and open source. Dynamo Player is installed with Revit too, but it shows graphs as a list rather than building a tab of its own.",
        },
        {
          question: "How does a graph get its inputs from the user?",
          answer:
            "Nodes marked Is Input become a dialog before the graph runs. Every other value stays fixed inside the graph.",
        },
        {
          question: "How are button icons set?",
          answer:
            "In Relay, PNG files named after the graph with _16 and _32 suffixes. In pyRevit, an icon.png inside each button's folder.",
        },
        {
          question: "What happens to the menu when Revit is upgraded?",
          answer:
            "Each Revit release ships a specific Dynamo version. Packages and graphs have to be tested on the new one, and an office running two Revit versions may need two folders.",
        },
        {
          question: "When should a Dynamo graph become a plugin?",
          answer:
            "When it's slow on large models, users need a full dialog with validation, it breaks at every Revit release, or it's used across offices without a shared network.",
        },
        {
          question: "When don't you need development help?",
          answer:
            "When the office has a handful of graphs and one person who runs them. A Relay or pyRevit tab covers that.",
        },
      ],
    },
  },
};
