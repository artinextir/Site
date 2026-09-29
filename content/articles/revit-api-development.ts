import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-api-development";
const EXTERNAL_COMMANDS =
  "https://help.autodesk.com/cloudhelp/2021/ENU/Revit-API/files/Revit_API_Developers_Guide/Introduction/Getting_Started/Using_the_Autodesk_Revit_API/Revit_API_Revit_API_Developers_Guide_Introduction_Getting_Started_Using_the_Autodesk_Revit_API_External_Commands_html.html";
const NET8 = "https://www.revitapidocs.com/2025/2db849bc-e193-4919-a96c-cc324cf06f66.htm";
const APS_REVIT = "https://aps.autodesk.com/developer/overview/revit-api";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-api-development", {
  fa: "نمای نزدیک یک برد مدار الکترونیکی تیره، برای برنامه‌نویسی Revit API",
  en: "A close view of a dark circuit board, for Revit API development",
});
const structure = img("revit-api-building-structure", {
  fa: "قاب فولادی یک ساختمان در حال ساخت با تیرها، ستون‌ها و بادبندها، مانند المان‌هایی که یک افزونه‌ی رویت می‌خواند و می‌سازد",
  en: "The steel frame of a building under construction, beams, columns and bracing, like the elements a Revit add-in reads and creates",
});

export const revitApiDevelopment: ArticlePage = {
  slug: "revit-api-development",
  content: {
    fa: {
      slug: "revit-api-development",
      meta: {
        title: "برنامه‌نویسی Revit API، راهنمای ساخت افزونه، آرتینکست",
        description:
          "برنامه‌نویسی Revit API: پنج راه برنامه‌نویسی رویت، ساختار یک افزونه، تراکنش‌ها، مهاجرت به .NET 8 در Revit 2025 و آنچه افزونه‌ی قابل‌اتکا را از افزونه‌ی آزمایشی جدا می‌کند.",
      },
      keywords: [
        "برنامه‌نویسی Revit API",
        "خدمات برنامه‌نویسی Revit API",
        "توسعه افزونه با Revit API",
        "افزونه‌ی اختصاصی تأسیسات در رویت",
        "پلاگین در رویت چیست",
      ],
      breadcrumb: "برنامه‌نویسی Revit API",
      category: "BIM و Revit",
      title: "برنامه‌نویسی Revit API، آنچه می‌توان ساخت و آنچه افزونه‌ی قابل‌اتکا لازم دارد",
      leadOpinion:
        "اجرای یک افزونه بخش ساده‌ی برنامه‌نویسی Revit API است. افزونه زمانی آماده است که رفتار آن با مدل‌های واقعی دفتر، المان‌های قفل‌شده، لینک‌ها، هشدارها و نسخه‌ی بعدی رویت نیز مشخص باشد.",
      publishedAt: "2026-09-29",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که با Revit API افزونه‌های اختصاصی رویت را برای خودکارسازی مدل‌سازی، کنترل کیفیت و مستندسازی در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what", label: "Revit API چیست" },
        { id: "routes", label: "پنج راه برنامه‌نویسی رویت" },
        { id: "anatomy", label: "ساختار یک افزونه" },
        { id: "work", label: "آنچه دفاتر می‌سازند" },
        { id: "versions", label: "نسخه‌های رویت" },
        { id: "depth", label: "افزونه‌ی قابل‌اتکا" },
        { id: "choice", label: "یادگیری یا سفارش" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "برنامه‌نویسی Revit API یعنی نوشتن کد، معمولاً به زبان C# و روی .NET، برای رابط برنامه‌نویسی‌ای که Autodesk همراه رویت ارائه می‌دهد، به‌گونه‌ای که رویت کارهایی را انجام دهد که به‌صورت پیش‌فرض انجام نمی‌دهد: دکمه‌ای در ریبون که همه‌ی شیت‌های یک مجموعه را شماره‌گذاری می‌کند، کنترلی که پیش از هر ارسال نقشه اجرا می‌شود یا خروجی‌ای که نرم‌افزار دیگری بتواند آن را بخواند.\n\nاجرای یک افزونه، بخش ساده‌ی این کار است.\n\nنخستین پروژه‌ی پژوهشی بنیان‌گذار آرتینکست به داده‌هایی نیاز داشت که باید تولید می‌شدند و ۶۰۰ داده‌ی اول به‌صورت دستی ساخته شد. واکنش به این پیشرفت این بود: «۶۰۰؟ واقعاً؟ همین؟» همین واکنش باعث شد افزودن دستی داده متوقف شود و به‌جای آن سامانه‌ای برای تولید داده ساخته شود که حدود ۲۲٬۰۰۰ پیکربندی تولید کرد و به نخستین مقاله‌ی منتشرشده رسید. **کار زمانی تمام نمی‌شود که نتیجه می‌دهد، بلکه زمانی تمام می‌شود که دلیل آن را درک کنید.** در برنامه‌نویسی Revit API نیز افزونه‌ای که فقط روی مدل آزمایشی درست کار می‌کند، در مرحله‌ی نخست متوقف شده است. افزونه‌ی قابل‌اتکا زمانی آماده است که رفتار آن با مدل‌های واقعی دفتر نیز مشخص باشد.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what",
          heading: "Revit API چیست",
          paragraphs: [
            "Revit API یک کتابخانه‌ی .NET است که همراه رویت نصب می‌شود. Autodesk آن را رابطی معرفی می‌کند که امکان خودکارسازی کارهای تکراری و گسترش قابلیت‌های اصلی نرم‌افزار را فراهم می‌کند. افزونه درون فرآیند خود رویت بارگذاری می‌شود و با همان اشیایی کار می‌کند که رویت برای مدل باز استفاده می‌کند.",
            "تقریباً همه‌چیز در مدل یک Element است: دیوارها، درها، ویوها، شیت‌ها و حتی تایپ‌هایی که آن‌ها را تعریف می‌کنند. کد، المان‌ها را با FilteredElementCollector پیدا می‌کند، پارامترهای آن‌ها را می‌خواند و می‌نویسد و المان‌های جدید می‌سازد. هر تغییر در مدل درون یک Transaction انجام می‌شود و همین تراکنش به‌صورت یک مرحله در فهرست Undo رویت نمایش داده می‌شود.",
            "رویت طول‌ها را به‌صورت داخلی بر حسب فوت اعشاری ذخیره می‌کند. در نتیجه، دفتری که هرگز چیزی را با فوت اندازه نگرفته است نیز طول همه‌ی دیوارها را از API بر حسب فوت دریافت می‌کند و افزونه باید پیش از نمایش هر عدد، آن را تبدیل کند.",
          ],
        },
        {
          id: "routes",
          heading: "پنج راه برای برنامه‌نویسی رویت",
          paragraphs: [
            "همه‌ی کارهای رویت به افزونه‌ی کامپایل‌شده نیاز ندارند. Revit API از پنج مسیر در دسترس است و انتخاب مسیر مناسب به این بستگی دارد که چه کسی ابزار را اجرا می‌کند و هر چند وقت یک‌بار:",
          ],
          list: {
            items: [
              "**Macro**: کدهای C# که در Macro Manager خود رویت نوشته و همراه مدل یا برنامه ذخیره می‌شوند. برای کارهای کوچک شخصی مناسب هستند و اشتراک‌گذاری آن‌ها دشوار است.",
              "**Dynamo**: گراف‌های بصری همراه با نودهای Python که کاربر نیازمند نتیجه، خود آن‌ها را اجرا می‌کند. [توسعه‌ی اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) توضیح می‌دهد چه زمانی یک گراف کافی است.",
              "**pyRevit**: چارچوبی متن‌باز که اسکریپت‌های Python را به دکمه‌های ریبون تبدیل می‌کند و برای نوار ابزار اختصاصی دفاتر رایج است.",
              "**افزونه‌ی کامپایل‌شده**: پروژه‌ی C# که در Visual Studio ساخته و با یک فایل manifest نصب می‌شود و ریبون، پنجره‌ها و تنظیمات خود را دارد. منظور بیشتر افراد از پلاگین رویت همین گزینه است.",
              "**Design Automation for Revit**: بخشی از Autodesk Platform Services، سکویی که پیش‌تر Forge نام داشت. این سرویس رویت را بدون رابط کاربری در فضای ابری Autodesk اجرا می‌کند، به‌گونه‌ای که افزونه بتواند مدل‌ها را از یک صفحه‌ی وب یا یک پردازش دسته‌ای پردازش کند و ورودی‌ها را به‌جای پنجره‌های گفت‌وگو از فایل بخواند.",
            ],
          },
          after: [
            "کارهایی که پیش‌تر با نام توسعه‌ی Autodesk Forge API شناخته می‌شدند، امروز با نام APS انجام می‌شوند. برای رویت، این کار معمولاً به معنای Design Automation است و افزونه‌ای که در آن اجرا می‌شود، از همان قواعد API نسخه‌ی دسکتاپ پیروی می‌کند.",
          ],
        },
        {
          id: "anatomy",
          heading: "ساختار یک افزونه‌ی رویت",
          image: structure.fa,
          paragraphs: [
            "هر فرمان، کلاسی است که رابط IExternalCommand را پیاده‌سازی می‌کند. رویت با کلیک کاربر روی دکمه، متد Execute آن را فراخوانی می‌کند و پس از پایان متد، شیء فرمان را کنار می‌گذارد. یک فایل manifest با پسوند ‎.addin در پوشه‌ی Addins رویت، وجود فرمان را به رویت اعلام می‌کند و بدون آن، رویت کد را شناسایی نمی‌کند.",
            "افزونه‌ای که زبانه‌ی ریبون اختصاصی دارد، یک IExternalApplication نیز دارد که هنگام شروع رویت، پنل‌ها و دکمه‌ها را می‌سازد. ویژگی TransactionMode روی هر فرمان مشخص می‌کند چه کسی تراکنش‌ها را باز می‌کند. در حالت Manual، فرمان تراکنش‌های خود را باز می‌کند و می‌تواند چند تراکنش را در یک مرحله‌ی Undo گروه‌بندی کند.",
            "یک قاعده بیشتر نخستین افزونه‌ها را متوقف می‌کند: API فقط از رشته‌ی اجرایی خود رویت و زمانی که رویت آماده‌ی پذیرش درخواست است، قابل‌فراخوانی است. پنجره‌ای که در کنار مدل باز می‌ماند، باید کار خود را از طریق یک ExternalEvent به رویت بسپارد. فراخوانی مستقیم API از چنین پنجره‌ای با خطا متوقف می‌شود.",
          ],
        },
        {
          id: "work",
          heading: "دفاتر با برنامه‌نویسی Revit API چه چیزهایی می‌سازند",
          paragraphs: [
            "درخواست‌هایی که به برنامه‌نویس رویت می‌رسند، معمولاً در این گروه‌ها قرار می‌گیرند:",
          ],
          list: {
            items: [
              "**کنترل‌ها**: افزونه‌هایی که مدل را می‌خوانند و گزارش می‌دهند، از نام‌گذاری و پارامترهای خالی تا هشدارها و اتاق‌های بدون مرز. [کنترل‌کننده مدل رویت](/articles/revit-model-checker/) بخش قاعده‌محور این کار را توضیح می‌دهد.",
              "**ویرایش دسته‌ای**: شماره‌گذاری دوباره‌ی شیت‌ها و ویوها، تغییر نام فمیلی‌ها و پرکردن فیلدهای کادر نقشه در یک مجموعه.",
              "**ساخت مدل از داده‌های دیگر**: دیوارها از خطوط CAD، اسکلت سازه از مدل تحلیلی و نازک‌کاری از مرز اتاق‌ها.",
              "**تبادل داده**: اسکجوال‌ها به Excel و بازگشت آن‌ها به مدل، پارامترها به پایگاه داده و گزارش‌ها به داشبورد.",
              "**افزونه‌های اختصاصی تأسیسات**: نام‌گذاری سیستم‌ها، کنترل کانکتورها، قواعد سایزبندی و جانمایی آویزها، در جایی که ابزارهای MEP رویت با استاندارد دفتر هم‌خوانی ندارند.",
            ],
          },
          after: [
            "[تبدیل خودکار CAD به رویت](/articles/cad-to-revit-automation/) نمونه‌ی ساخت مدل از داده‌های دیگر را با جزئیات بررسی می‌کند.",
          ],
        },
        {
          id: "versions",
          heading: "هر نسخه‌ی رویت، هدفی تازه برای افزونه است",
          paragraphs: [
            "Autodesk هر سال یک نسخه‌ی جدید رویت منتشر می‌کند و هر افزونه برای نسخه‌ی مشخصی از API کامپایل می‌شود. بیشتر کد به نسخه‌ی بعد منتقل می‌شود، اما متدهای منسوخ حذف می‌شوند و هر نسخه به ساخت، تست و فایل نصب جداگانه نیاز دارد.",
            "Revit 2025 بزرگ‌ترین تغییر سال‌های اخیر بود. به گفته‌ی مستندات API، این نسخه روی .NET 8 ساخته شده و افزونه‌ها باید برای .NET 8 دوباره کامپایل شوند. Revit 2024 روی .NET Framework 4.8 اجرا می‌شد، در نتیجه دفتری که از هر دو نسخه استفاده می‌کند، به دو خروجی نیاز دارد. یک پروژه با چند Target Framework، هر دو خروجی را از یک کد واحد می‌سازد.",
            "هنگام سفارش افزونه بپرسید این کار در هر نسخه‌ی جدید بر عهده‌ی چه کسی است و چه هزینه‌ای دارد.",
          ],
        },
        {
          id: "depth",
          heading: "تفاوت افزونه‌ای که اجرا می‌شود با افزونه‌ای که قابل‌اتکاست",
          paragraphs: [
            "مدل آزمایشی تمیز است، اما مدل‌های واقعی این‌گونه نیستند. بیشترین زمان توسعه صرف این موارد می‌شود:",
          ],
          list: {
            items: [
              "**کار اشتراکی (Worksharing)**: المانی که کاربر دیگری در اختیار دارد قابل‌ویرایش نیست و افزونه باید اعلام کند کدام المان‌ها را کنار گذاشته است.",
              "**مدل‌های لینک‌شده**: المان‌های درون لینک از مدل میزبان فقط‌خواندنی هستند و در دستگاه مختصات دیگری قرار دارند.",
              "**هشدارها و خطاها**: تغییری که نمونه‌های تکراری یا دیوارهای هم‌پوشان ایجاد می‌کند، خطاهایی به وجود می‌آورد که افزونه باید خود آن‌ها را مدیریت کند و پنجره‌ی هشدار را برای کاربر باقی نگذارد.",
              "**مقیاس**: جست‌وجویی که همه‌ی المان‌ها را با فیلتری کند بررسی می‌کند، در فایل آزمایشی سریع و در مدل یک بیمارستان کند است. فیلترهای سریع بر اساس کلاس و دسته باید پیش از بقیه اجرا شوند.",
              "**گزارش**: هر المانی که افزونه نتوانسته پردازش کند، همراه با دلیل آن.",
            ],
          },
          after: [
            "هیچ‌کدام از این موارد در نمایش اولیه‌ی افزونه دیده نمی‌شود و همه‌ی آن‌ها در هفته‌ی نخست استفاده روی پروژه‌های واقعی ظاهر می‌شوند.",
          ],
        },
        {
          id: "choice",
          heading: "یادگیری Revit API یا سفارش خدمات برنامه‌نویسی Revit API",
          paragraphs: [
            "اگر با C# آشنا هستید، مسیر یادگیری مشخص است: نمونه‌های Revit SDK، مستندات API در سایت revitapidocs.com و افزونه‌ی RevitLookup برای بررسی داده‌هایی که هر المان در خود دارد. با یک Macro یا یک فرمان ساده شروع کنید و ساخت ریبون را به مرحله‌ی بعد بسپارید.",
            "اگر کار فقط یک‌بار انجام می‌شود یا یک گراف Dynamo همین حالا آن را انجام می‌دهد، سفارش افزونه ضرورتی ندارد و برای آن به ما یا شرکتی مانند ما نیازی ندارید. خدمات برنامه‌نویسی Revit API زمانی ارزش هزینه‌ی خود را دارند که ابزار در پروژه‌های مختلف، توسط افرادی غیر از سازنده‌ی آن و در چند نسخه‌ی رویت استفاده شود. نوشته‌ی [توسعه پلاگین رویت چقدر هزینه دارد](/articles/revit-plugin-development-cost/) عوامل مؤثر بر قیمت را شرح می‌دهد و این کار در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "برنامه‌نویسی Revit API با یک کلاس، یک فایل manifest و یک تراکنش شروع می‌شود. آنچه تعیین می‌کند دفتر به استفاده از ابزار ادامه دهد یا خیر، همه‌ی مواردی است که در مدل آزمایشی وجود نداشتند: المان‌های در اختیار دیگران، لینک‌ها، هشدارها و نسخه‌ی بعدی رویت. افزونه زمانی کامل است که رفتار آن با این موارد درک شده باشد. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه پلاگین رویت چقدر هزینه دارد", href: "/articles/revit-plugin-development-cost/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "تبدیل خودکار CAD به رویت", href: "/articles/cad-to-revit-automation/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk, Revit API Developer's Guide: External Commands", href: EXTERNAL_COMMANDS },
        { label: "Revit API Docs, Revit .NET 8 Upgrade Tips (Revit 2025)", href: NET8 },
        { label: "Autodesk Platform Services, Revit API overview", href: APS_REVIT },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "برنامه‌نویسی Revit API چیست؟",
          answer:
            "نوشتن کد برای رابط برنامه‌نویسی‌ای که Autodesk همراه رویت ارائه می‌دهد، تا رویت کارهایی مانند کنترل مدل، ویرایش دسته‌ای یا ساخت المان از داده‌های دیگر را به‌صورت خودکار انجام دهد. نتیجه معمولاً یک افزونه‌ی C# است که در ریبون رویت قرار می‌گیرد.",
        },
        {
          question: "پلاگین در رویت چیست؟",
          answer:
            "برنامه‌ای که درون رویت بارگذاری می‌شود و از طریق Revit API به مدل دسترسی دارد. Autodesk به آن Add-in می‌گوید و پلاگین و افزونه نام‌های دیگر همین برنامه هستند.",
        },
        {
          question: "Revit API با چه زبانی نوشته می‌شود؟",
          answer:
            "با هر زبان .NET، که در عمل تقریباً همیشه C# است. Python از طریق Dynamo و pyRevit نیز به API دسترسی دارد.",
        },
        {
          question: "آیا افزونه در نسخه‌ی بعدی رویت هم کار می‌کند؟",
          answer:
            "برای هر نسخه باید دوباره ساخته و تست شود. از Revit 2025، API فقط روی .NET 8 اجرا می‌شود و افزونه‌های نسخه‌های قبلی باید دوباره کامپایل شوند.",
        },
        {
          question: "Autodesk Forge یا APS چه ارتباطی با رویت دارد؟",
          answer:
            "Forge اکنون Autodesk Platform Services نام دارد. سرویس Design Automation آن، رویت را بدون رابط کاربری در فضای ابری اجرا می‌کند تا افزونه‌ها بتوانند مدل‌ها را بدون باز کردن رویت روی رایانه‌ی کاربر پردازش کنند.",
        },
        {
          question: "چه زمانی Dynamo کافی است و به افزونه نیازی نیست؟",
          answer:
            "زمانی که کاربر نیازمند نتیجه، خود گراف را اجرا می‌کند و کار در چند پروژه‌ی محدود تکرار می‌شود. وقتی ابزار باید برای کل دفتر نصب شود، پنجره‌ی اختصاصی داشته باشد و در چند نسخه‌ی رویت پشتیبانی شود، افزونه‌ی کامپایل‌شده گزینه‌ی مناسب‌تری است.",
        },
        {
          question: "برای شروع برنامه‌نویسی Revit API به چه ابزارهایی نیاز است؟",
          answer:
            "یک نسخه‌ی رویت، Visual Studio، Revit SDK و افزونه‌ی RevitLookup. برای Macro و Dynamo، خود رویت کافی است.",
        },
      ],
    },
    en: {
      slug: "revit-api-development",
      meta: {
        title: "Revit API Development: How Add-ins Are Built, ARTINEXT",
        description:
          "Revit API development explained: five ways to program Revit, how an add-in is put together, transactions, the .NET 8 move in Revit 2025, and what makes an add-in dependable.",
      },
      keywords: [
        "revit api development",
        "revit api development services",
        "autodesk forge api development",
        "custom mep revit add-ins",
        "revit add-in C#",
      ],
      breadcrumb: "Revit API development",
      category: "BIM & Revit",
      title: "Revit API development: what you can build, and what a dependable add-in takes",
      leadOpinion:
        "Getting an add-in to run is the easy half of Revit API development. It is finished when you know what it does to real models: borrowed elements, links, warnings, and the next Revit release.",
      publishedAt: "2026-09-29",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit add-ins on the Revit API to automate modelling, quality control and documentation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what", label: "What the Revit API is" },
        { id: "routes", label: "Five ways to program Revit" },
        { id: "anatomy", label: "How an add-in is built" },
        { id: "work", label: "What offices build" },
        { id: "versions", label: "Revit releases" },
        { id: "depth", label: "A dependable add-in" },
        { id: "choice", label: "Learn it or hire it" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Revit API development is writing code, usually C# on .NET, against the programming interface Autodesk ships with Revit, so that Revit does work it doesn't do out of the box: a ribbon button that renumbers every sheet in a set, a check that runs before each issue, an export another system can read.\n\nGetting an add-in to run is the easy half.\n\nThe founder's first research project needed generated data, and the first 600 data points were built by hand. The response was \"600? Really? That's it?\" That was annoying enough to stop adding points by hand and build a generation system instead, which ended at roughly 22,000 configurations and a first published paper. **Stopping when something works is the wrong finish line. Stop when you understand it.** In Revit API development, an add-in that works on the model it was written against has stopped at the first finish line. A dependable one is finished when you know what it does to every other model in the office.",
      heroImage: hero.en,
      sections: [
        {
          id: "what",
          heading: "What the Revit API is",
          paragraphs: [
            "The Revit API is a .NET library installed with Revit. Autodesk describes it as an API that lets you automate repetitive tasks and extend the software's core functionality. An add-in loads into Revit's own process and works on the open model through the same objects Revit uses.",
            "Almost everything in that model is an Element: walls, doors, views, sheets, even the types that define them. Code finds elements with a FilteredElementCollector, reads and writes their parameters, and creates new ones. Every change to the model happens inside a Transaction, and each transaction appears as one step in Revit's undo list.",
            "Revit stores every length internally in decimal feet. An office that has never measured anything in feet still gets every wall length back from the API in feet, and the add-in converts it before anyone sees a number.",
          ],
        },
        {
          id: "routes",
          heading: "Five ways to program Revit",
          paragraphs: [
            "Not every Revit task needs a compiled add-in. The API is reachable from five places, and the right one depends on who runs the tool and how often:",
          ],
          list: {
            items: [
              "**Macros**: C# written inside Revit's own Macro Manager and saved with a model or the application. Good for a small personal task, awkward to share.",
              "**Dynamo**: visual graphs with Python nodes, run by the person who needs the result. [Custom Dynamo script development](/articles/custom-dynamo-script-development/) covers when a graph is enough.",
              "**pyRevit**: an open-source framework that turns Python scripts into ribbon buttons, common for office toolbars.",
              "**Compiled add-ins**: C# projects built in Visual Studio and installed with a manifest, with their own ribbon, windows and settings. This is what most people mean by a Revit plugin.",
              "**Design Automation for Revit**: part of Autodesk Platform Services, the platform formerly called Forge. It runs Revit without an interface in Autodesk's cloud, so an add-in can process models from a web page or a batch job, reading its inputs from files instead of dialogs.",
            ],
          },
          after: [
            "Most of what used to be called Autodesk Forge API development now happens under the APS name. For Revit it usually means Design Automation, and the add-in running inside it follows the same API rules as the desktop.",
          ],
        },
        {
          id: "anatomy",
          heading: "How a Revit add-in is put together",
          image: structure.en,
          paragraphs: [
            "A command is a class that implements IExternalCommand. Revit calls its Execute method when someone clicks the button and discards the object when the method returns. A .addin manifest file in Revit's Addins folder tells Revit the command exists. Without it, Revit never sees the code.",
            "An add-in with its own ribbon tab also has an IExternalApplication, which builds the panels and buttons when Revit starts. The TransactionMode attribute on each command decides who opens transactions. In Manual mode the command opens its own, and can group several into one undo step.",
            "One rule stops most first add-ins: the API can only be called from Revit's own thread, while Revit is ready for it. A window that stays open beside the model has to hand its work to Revit through an ExternalEvent. Calling the API straight from that window fails with an exception.",
          ],
        },
        {
          id: "work",
          heading: "What offices build with Revit API development",
          paragraphs: [
            "The requests that reach a Revit developer tend to fall into these groups:",
          ],
          list: {
            items: [
              "**Checks** that read the model and report: naming, empty parameters, warnings, rooms without boundaries. A [Revit model checker](/articles/revit-model-checker/) covers the rule-based end of this.",
              "**Batch edits**: renumbering sheets and views, renaming families, filling title-block fields across a set.",
              "**Model generation** from other data: walls from CAD linework, a structural frame from an analysis model, finishes from room boundaries.",
              "**Data exchange**: schedules out to Excel and back, parameters to a database, reports to a dashboard.",
              "**Custom MEP add-ins**: system naming, connector checks, sizing rules and hanger placement, wherever Revit's MEP tools stop short of the office standard.",
            ],
          },
          after: [
            "[CAD-to-Revit automation](/articles/cad-to-revit-automation/) works through the model-generation case in detail.",
          ],
        },
        {
          id: "versions",
          heading: "Every Revit release is a new target",
          paragraphs: [
            "Autodesk ships a Revit release every year, and an add-in is compiled against a specific version of the API. Most code carries over, but deprecated methods are removed, and each release needs its own build, test and installer.",
            "Revit 2025 was the largest break in years. Autodesk's API notes say Revit 2025 is built on .NET 8 and that \"Revit add-ins need to be recompiled for .NET 8.\" Revit 2024 ran on .NET Framework 4.8, so an office on both versions needs two builds. One project with multiple target frameworks produces both from the same code.",
            "When you commission an add-in, ask who does that work each release, and what it costs.",
          ],
        },
        {
          id: "depth",
          heading: "The difference between an add-in that runs and one you can rely on",
          paragraphs: [
            "The test model is clean. Real models aren't. This is where the development time goes:",
          ],
          list: {
            items: [
              "**Worksharing**: an element borrowed by another user can't be edited, and the add-in has to say which ones it skipped.",
              "**Linked models**: elements inside a link are read-only from the host, and sit in a different coordinate system.",
              "**Warnings and failures**: a change that creates duplicate instances or overlapping walls raises failures the add-in has to handle itself, instead of leaving a dialog for the user.",
              "**Scale**: a collector that runs a slow filter over every element is quick on a test file and slow on a hospital. Quick filters by class and category go first.",
              "**Reporting**: every element the add-in couldn't process, and why.",
            ],
          },
          after: [
            "None of these show up in a demo. All of them show up in the first week on real projects.",
          ],
        },
        {
          id: "choice",
          heading: "Learn the Revit API, or hire Revit API development services",
          paragraphs: [
            "If you already write C#, the path is well marked: the Revit SDK samples, the API reference on revitapidocs.com, and RevitLookup for inspecting what an element actually holds. Start with a macro or a single command, and leave the ribbon for later.",
            "If the task runs once, or a Dynamo graph already does it, don't commission an add-in. You don't need us, or anyone like us, for that. Revit API development services earn their cost when the tool is used across projects, by people who didn't write it, through several Revit releases. [How much Revit plugin development costs](/articles/revit-plugin-development-cost/) sets out what drives the price, and [custom Revit plugin development](/revit-plugin-development/) is where we do that work.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Revit API development starts with a class, a manifest and a transaction. What decides whether an office keeps using the tool is everything the test model didn't contain: borrowed elements, links, warnings, the next Revit release. An add-in is finished when you understand what it does to those, not when it runs. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "How much Revit plugin development costs", href: "/articles/revit-plugin-development-cost/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "CAD-to-Revit automation", href: "/articles/cad-to-revit-automation/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk, Revit API Developer's Guide: External Commands", href: EXTERNAL_COMMANDS },
        { label: "Revit API Docs, Revit .NET 8 Upgrade Tips (Revit 2025)", href: NET8 },
        { label: "Autodesk Platform Services, Revit API overview", href: APS_REVIT },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is Revit API development?",
          answer:
            "Writing code against the programming interface Autodesk ships with Revit, so Revit does work such as model checks, batch edits or generating elements from other data automatically. The result is usually a C# add-in with its own place on the Revit ribbon.",
        },
        {
          question: "Is a Revit plugin the same as an add-in?",
          answer:
            "Yes. Add-in is Autodesk's term, plugin is the everyday one. Both mean a program that loads into Revit and reaches the model through the Revit API.",
        },
        {
          question: "What language is the Revit API written in?",
          answer:
            "Any .NET language, which in practice almost always means C#. Python reaches the same API through Dynamo and pyRevit.",
        },
        {
          question: "Will my add-in work in the next version of Revit?",
          answer:
            "It has to be rebuilt and tested for each release. Since Revit 2025 the API runs on .NET 8 only, so add-ins built for earlier versions have to be recompiled.",
        },
        {
          question: "What do Autodesk Forge and APS have to do with Revit?",
          answer:
            "Forge is now called Autodesk Platform Services. Its Design Automation service runs Revit without an interface in the cloud, so an add-in can process models without Revit open on anyone's machine.",
        },
        {
          question: "When is Dynamo enough, without an add-in?",
          answer:
            "When the person who needs the result runs the graph and the task repeats across a handful of projects. When the tool has to be installed across an office, have its own window and be supported through several Revit releases, a compiled add-in fits better.",
        },
        {
          question: "What do I need to start Revit API development?",
          answer:
            "A copy of Revit, Visual Studio, the Revit SDK and RevitLookup. For macros and Dynamo, Revit alone is enough.",
        },
      ],
    },
  },
};
