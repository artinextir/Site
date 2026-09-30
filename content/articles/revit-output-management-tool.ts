import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-output-management-tool";
const PDF_EXPORT = "https://help.autodesk.com/cloudhelp/2022/ENU/Revit-WhatsNew/files/GUID-1F2901D9-3EC3-4CB8-93B7-F4A687993A29.htm";
const ISSUE_REVISION = "https://help.autodesk.com/cloudhelp/2024/ENU/Revit-DocumentPresent/files/GUID-2D52A7D3-AE23-4FB8-9ED3-D019AF16CF11.htm";
const API_EXPORT = "https://www.revitapidocs.com/2022/93d66d57-c20e-a103-39a1-77bc2ea05183.htm";
const REGISTER = "https://www.atelierlab.in/articles/drawing-issue-register-transmittal-architects";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-output-management-tool", {
  fa: "نمای نزدیک از کارتریج‌های یک پلاتر عریض در نور کم، برای ابزار مدیریت خروجی رویت",
  en: "Close-up of a wide-format plotter's ink cartridges in low light, for a Revit output management tool",
});
const register = img("drawing-issue-register", {
  fa: "جعبه‌ای از نقشه‌های لوله‌شده و بسته‌شده با نخ، مانند بایگانی نقشه‌های ارسال‌شده‌ی یک پروژه",
  en: "A box of rolled drawings tied with string, like the archive of a project's issued drawings",
});

export const revitOutputManagementTool: ArticlePage = {
  slug: "revit-output-management-tool",
  content: {
    fa: {
      slug: "revit-output-management-tool",
      meta: {
        title: "ابزار مدیریت خروجی رویت، از PDF تا ثبت ارسال، آرتینکست",
        description:
          "ابزار مدیریت خروجی رویت: مجموعه شیت‌ها، خروجی PDF دسته‌ای با قاعده‌ی نام‌گذاری، وضعیت Issued بازنگری‌ها، دفتر ثبت ارسال نقشه‌ها و کنترل خروجی ناقص.",
      },
      keywords: [
        "ابزار مدیریت خروجی رویت",
        "خروجی PDF دسته‌ای از رویت",
        "دفتر ثبت ارسال نقشه‌ها",
        "مدیریت بازنگری شیت‌ها در رویت",
        "مدیریت خروجی و شیت‌ها",
      ],
      breadcrumb: "ابزار مدیریت خروجی رویت",
      category: "BIM و Revit",
      title: "ابزار مدیریت خروجی رویت، از مجموعه شیت تا دفتر ثبت ارسال",
      leadOpinion:
        "رابط ساده‌ی یک ابزار، حاصل تصمیم‌های فشرده‌شده است. پشت دکمه‌ی «ارسال» در یک ابزار مدیریت خروجی، شش کار جداگانه قرار دارد که هرکدام پیش از این دستی انجام می‌شد.",
      publishedAt: "2026-09-30",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی رویت را برای خودکارسازی مستندسازی، خروجی نقشه‌ها و ثبت ارسال در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "native", label: "امکانات خود رویت" },
        { id: "naming", label: "نام فایل‌ها" },
        { id: "register", label: "دفتر ثبت ارسال" },
        { id: "tool", label: "آنچه ابزار انجام می‌دهد" },
        { id: "failures", label: "خروجی ناقص" },
        { id: "choice", label: "آماده یا اختصاصی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "ابزار مدیریت خروجی رویت، افزونه‌ای است که مجموعه‌ی شیت‌های یک ارسال را انتخاب می‌کند، پیش از خروجی آن‌ها را کنترل می‌کند، فایل‌های PDF و DWG را با قاعده‌ی نام‌گذاری دفتر می‌سازد، بازنگری مربوط را در وضعیت Issued قرار می‌دهد و برای هر شیت یک سطر در دفتر ثبت ارسال نقشه‌ها اضافه می‌کند. رویت بخش عمده‌ی این امکانات را دارد، اما هرکدام در یک پنجره‌ی جداگانه قرار دارند و ارتباطی با یکدیگر ندارند.\n\nیکی از پلاگین‌هایی که آرتینکست ساخته، فرآیندی را که معمولاً حدود ۲ هفته و گاهی نزدیک به ۱ ماه زمان می‌برد، به حدود ۱۰ دقیقه رساند. تمام رابط کاربری آن یک دکمه است. **رابط ساده‌ی یک ابزار، حاصل تصمیم‌های فشرده‌شده است** و ابزار مدیریت خروجی نمونه‌ی روشن آن است: پشت دکمه‌ی «ارسال» شش کار جداگانه قرار دارد که هرکدام پیش از این به‌صورت دستی و با احتمال خطا انجام می‌شد.",
      heroImage: hero.fa,
      sections: [
        {
          id: "native",
          heading: "رویت بدون افزونه چه امکاناتی برای خروجی دارد",
          paragraphs: [
            "رویت سه امکان اصلی برای خروجی دارد. امکان اول مجموعه‌ی شیت‌ها (View/Sheet Set) است که در پنجره‌ی چاپ و خروجی ذخیره می‌شود و یک فهرست ثابت از شیت‌ها را نگه می‌دارد. امکان دوم خروجی مستقیم PDF است که از نسخه‌ی ۲۰۲۲ اضافه شد: شیت‌ها به‌صورت فایل‌های جداگانه یا یک فایل ترکیبی ذخیره می‌شوند و قاعده‌ی نام‌گذاری فایل‌ها از پارامترهای شیت ساخته شده و در تنظیمات خروجی ذخیره می‌شود.",
            "امکان سوم پنجره‌ی Sheet Issues/Revisions است. هر بازنگری تاریخ، شرح، گیرنده و فرستنده دارد و پس از علامت‌گذاری Issued، اطلاعات آن قابل‌تغییر نیست، به ابرهای بازنگری جدید اختصاص نمی‌یابد و ابرهای موجود آن قابل‌ویرایش نیستند. این سه امکان وجود دارند، اما ارتباطی میان آن‌ها وجود ندارد: مجموعه‌ی شیت‌ها وضعیت بازنگری را بررسی نمی‌کند و خروجی PDF هیچ سابقه‌ای از آنچه ارسال شده است ثبت نمی‌کند.",
          ],
        },
        {
          id: "naming",
          heading: "نام فایل‌هایی که پس از ارسال قابل‌ردیابی بمانند",
          paragraphs: [
            "نام فایل خروجی، تنها بخشی از نقشه است که پس از خروج از دفتر همیشه همراه آن می‌ماند. یک الگوی رایج، ترکیب شماره‌ی پروژه، شماره‌ی شیت، نام شیت و شماره‌ی بازنگری فعلی است. قاعده‌ی نام‌گذاری رویت این ترکیب را می‌سازد، اما در پروژه‌ی تازه، شیت‌هایی که هنوز بازنگری ندارند، مقدار خالی به این قاعده می‌دهند و قاعده باید برای این حالت یک مقدار پیش‌فرض داشته باشد.",
            "در دفاتر ایرانی مسئله‌ی دیگری نیز وجود دارد. نام فارسی شیت‌ها در نام فایل، در برخی سامانه‌های بایگانی، فشرده‌سازی و ایمیل به نویسه‌های ناخوانا تبدیل می‌شود. راه‌حل مطمئن این است که نام فایل فقط از شماره‌ها و کدهای لاتین ساخته شود و نام فارسی شیت در دفتر ثبت ارسال و در خود نقشه باقی بماند.",
          ],
        },
        {
          id: "register",
          heading: "دفتر ثبت ارسال نقشه‌ها و فرم ارسال",
          image: register.fa,
          paragraphs: [
            "فرم ارسال (Transmittal) و دفتر ثبت ارسال دو مدرک متفاوت‌اند. فرم ارسال، یادداشت همراه یک ارسال مشخص است و فقط تا پایان همان ارسال کاربرد دارد. دفتر ثبت، سابقه‌ی تجمعی همه‌ی ارسال‌های پروژه است و در تمام عمر ساختمان به آن مراجعه می‌شود. از روی دفتر ثبت می‌توان هر فرم ارسال را دوباره ساخت، اما عکس آن ممکن نیست.",
            "قاعده‌ی مهم دفتر ثبت این است که فقط سطر به آن اضافه می‌شود. شیتی که چهار بار ارسال شده، چهار سطر جداگانه دارد و سطرهای قبلی آن هرگز ویرایش نمی‌شوند. هر سطر شماره و عنوان شیت، بازنگری، وضعیت ارسال، تاریخ، گیرنده و هدف ارسال را ثبت می‌کند. در دفاتر ایرانی، تاریخ این سطرها باید شمسی باشد، در حالی که رویت تاریخ بازنگری را به‌صورت متن آزاد نگه می‌دارد و قالب واحدی برای آن تعیین نمی‌کند.",
          ],
        },
        {
          id: "tool",
          heading: "ابزار مدیریت خروجی رویت چه کارهایی انجام می‌دهد",
          paragraphs: [
            "ابزار مناسب، قواعد دفتر را یک‌بار دریافت می‌کند و در هر ارسال این مراحل را به ترتیب اجرا می‌کند:",
          ],
          list: {
            ordered: true,
            items: [
              "**انتخاب شیت‌ها بر اساس قاعده**: مثلاً همه‌ی شیت‌های یک رشته که بازنگری جدید دارند، به‌جای یک مجموعه‌ی ثابت که باید دستی به‌روز شود.",
              "**کنترل پیش از خروجی**: شیت بدون بازنگری، فیلدهای خالی جدول مشخصات، شیت بدون نما و بازنگری‌ای که هنوز Issued نشده است.",
              "**خروجی PDF و DWG** با قاعده‌ی نام‌گذاری دفتر، در پوشه‌ای که نام آن از تاریخ و شماره‌ی ارسال ساخته می‌شود.",
              "**علامت‌گذاری Issued** برای بازنگری مربوط، فقط پس از آنکه خروجی همه‌ی فایل‌ها تأیید شده باشد.",
              "**اضافه‌کردن سطرها به دفتر ثبت** در Excel یا پایگاه داده‌ی دفتر، یک سطر برای هر شیت.",
              "**ساخت فرم ارسال** از همان سطرها، همراه با فهرست فایل‌ها.",
            ],
          },
          after: [
            "ترتیب این مراحل اهمیت دارد. اگر بازنگری پیش از تأیید خروجی Issued شود و خروجی یکی از شیت‌ها ناموفق باشد، دفتر ثبت ارسالی را نشان می‌دهد که هرگز انجام نشده است.",
          ],
        },
        {
          id: "failures",
          heading: "خروجی ناقص، خطرناک‌تر از خروجی ناموفق",
          paragraphs: [
            "متد خروجی PDF در Revit API، اگر خروجی یکی از نماها ناموفق باشد، مقدار False برمی‌گرداند، حتی اگر بقیه‌ی فایل‌ها ساخته شده باشند. این نتیجه مشخص نمی‌کند کدام شیت‌ها خروجی ندارند. ابزاری که فقط به این مقدار اتکا کند، یا کل ارسال را ناموفق اعلام می‌کند یا یک مجموعه‌ی ناقص را کامل فرض می‌کند.",
            "ابزار مدیریت خروجی باید پس از خروجی، وجود هر فایل مورد انتظار را جداگانه بررسی کند و گزارشی بدهد که شیت‌های موفق، شیت‌های ناموفق و دلیل هرکدام را نشان دهد. هیچ شیتی نباید بی‌صدا از مجموعه‌ی ارسال حذف شود، و مجموعه‌ای که یک شیت کم دارد، تا کامل نشده است در دفتر ثبت وارد نمی‌شود.",
          ],
        },
        {
          id: "choice",
          heading: "افزونه‌ی آماده، اسکریپت Dynamo یا پلاگین اختصاصی",
          paragraphs: [
            "اگر دفتر شما هر ماه یک یا دو ارسال دارد، خروجی PDF خود رویت با یک قاعده‌ی نام‌گذاری ذخیره‌شده و یک دفتر ثبت ساده در Excel کافی است. برای این کار به ما یا شرکتی مانند ما نیازی ندارید. افزونه‌های تجاری مانند ProSheets، Xrev Transmit و RTV Drawing Manager نیز خروجی دسته‌ای و فرم ارسال را پوشش می‌دهند و برای بسیاری از دفاتر کافی‌اند.",
            "پلاگین اختصاصی زمانی ارزش دارد که دفتر ثبت باید به سامانه‌ی مدیریت مدارک، نامه‌نگاری یا [داشبورد مدیریتی](/articles/construction-management-dashboard/) دفتر متصل شود، یا قواعدی مانند تاریخ شمسی، نام‌های فارسی و کدهای وضعیت اختصاصی دفتر در ابزارهای آماده پشتیبانی نشوند. ترتیب و شماره‌گذاری شیت‌ها موضوع جداگانه‌ای است که در [مرتب‌سازی شیت در رویت](/articles/revit-sheet-sorting-plugin/) آمده است. چنین ابزاری در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) ساخته می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "ابزار مدیریت خروجی رویت، مجموعه‌ی شیت‌ها، خروجی فایل‌ها، وضعیت بازنگری‌ها و دفتر ثبت ارسال را به یک فرآیند واحد تبدیل می‌کند. از بیرون یک دکمه دیده می‌شود، اما پشت آن ترتیبی از کنترل‌هاست که مشخص می‌کند چه چیزی، چه زمانی و برای چه کسی ارسال شده است. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "مرتب‌سازی شیت در رویت", href: "/articles/revit-sheet-sorting-plugin/" },
        { label: "خروجی Excel از اسکجوال رویت", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "برنامه‌نویسی Revit API", href: "/articles/revit-api-development/" },
        { label: "طراحی داشبورد مدیریتی", href: "/articles/construction-management-dashboard/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk, PDF Export (What's New in Revit 2022)", href: PDF_EXPORT },
        { label: "Autodesk, Issue a Revision (Revit 2024)", href: ISSUE_REVISION },
        { label: "Revit API, Document.Export (PDFExportOptions)", href: API_EXPORT },
        { label: "Atelier Lab, The drawing issue register", href: REGISTER },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا رویت بدون افزونه خروجی PDF دسته‌ای دارد؟",
          answer:
            "بله. از نسخه‌ی ۲۰۲۲، رویت شیت‌ها را مستقیماً به PDF خروجی می‌دهد، به‌صورت فایل‌های جداگانه یا یک فایل ترکیبی، و قاعده‌ی نام‌گذاری فایل‌ها را از پارامترهای شیت می‌سازد.",
        },
        {
          question: "علامت Issued در بازنگری‌های رویت چه کاری انجام می‌دهد؟",
          answer:
            "پس از علامت‌گذاری Issued، اطلاعات آن بازنگری قابل‌تغییر نیست، به ابرهای جدید اختصاص نمی‌یابد و ابرهای موجود آن قابل‌ویرایش نیستند. برای تغییر، باید علامت را برداشت و پس از ویرایش دوباره گذاشت.",
        },
        {
          question: "تفاوت فرم ارسال و دفتر ثبت ارسال نقشه‌ها چیست؟",
          answer:
            "فرم ارسال همراه یک ارسال مشخص است. دفتر ثبت، سابقه‌ی همه‌ی ارسال‌های پروژه است و فقط سطر به آن اضافه می‌شود. هر فرم ارسال را می‌توان از دفتر ثبت دوباره ساخت.",
        },
        {
          question: "چرا نام فارسی شیت‌ها را در نام فایل PDF قرار ندهیم؟",
          answer:
            "برخی سامانه‌های بایگانی، فشرده‌سازی و ایمیل، نام‌های فارسی را به نویسه‌های ناخوانا تبدیل می‌کنند. نام فایل از شماره‌ها و کدهای لاتین ساخته شود و نام فارسی در دفتر ثبت و روی نقشه بماند.",
        },
        {
          question: "ابزار مدیریت خروجی رویت چگونه خروجی ناقص را تشخیص می‌دهد؟",
          answer:
            "متد خروجی Revit API در صورت خطا در هر شیت، فقط یک مقدار False برمی‌گرداند. ابزار باید وجود هر فایل مورد انتظار را جداگانه بررسی کند و شیت‌های ناموفق را همراه با دلیل گزارش دهد.",
        },
        {
          question: "چه زمانی به ابزار اختصاصی مدیریت خروجی نیاز ندارید؟",
          answer:
            "زمانی که تعداد ارسال‌ها کم است و دفتر ثبت در Excel به‌راحتی نگهداری می‌شود. خروجی PDF خود رویت یا یک افزونه‌ی تجاری در این حالت کافی است.",
        },
      ],
    },
    en: {
      slug: "revit-output-management-tool",
      meta: {
        title: "Revit Output Management Tool: PDFs to Issue Register, ARTINEXT",
        description:
          "What a Revit output management tool does: sheet sets, batch PDF export with naming rules, Issued revisions, the drawing issue register, and catching partial exports.",
      },
      keywords: [
        "revit output management tool",
        "revit batch pdf export",
        "revit drawing issue register",
        "revit transmittal",
        "revit sheet set export",
      ],
      breadcrumb: "Revit output management tool",
      category: "BIM & Revit",
      title: "A Revit output management tool: from sheet set to issue register",
      leadOpinion:
        "A simple interface is compressed history. The Issue button on an output management tool hides six separate jobs that used to be done by hand.",
      publishedAt: "2026-09-30",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit plugins to automate documentation, drawing output and issue records for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "native", label: "What Revit does natively" },
        { id: "naming", label: "File names" },
        { id: "register", label: "The issue register" },
        { id: "tool", label: "What the tool does" },
        { id: "failures", label: "Partial exports" },
        { id: "choice", label: "Off the shelf or custom" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A Revit output management tool picks the sheets for an issue, checks them before export, writes the PDFs and DWGs under the office's naming rule, marks the revision as Issued, and adds a row per sheet to the drawing issue register. Revit has most of these pieces. They just live in separate dialogs that don't know about each other.\n\nOne plugin the studio built took a process from about 2 weeks, sometimes closer to 1 month, down to about 10 minutes. Its entire visible interface is one button. **A simple interface is compressed history, not a lack of depth.** An output tool is the plainest case of it. The Issue button hides six separate jobs, each of which used to be done by hand, each with its own way to go wrong.",
      heroImage: hero.en,
      sections: [
        {
          id: "native",
          heading: "What Revit gives you for output without an add-in",
          paragraphs: [
            "Revit has three pieces. The first is the View/Sheet Set, saved in the print and export dialogs, which holds a fixed list of sheets. The second is direct PDF export, added in Revit 2022: sheets go out as separate files or one combined file, and a naming rule built from sheet parameters is saved with the export setup.",
            "The third is the Sheet Issues/Revisions dialog. Each revision carries a date, description, and who it was issued to and by. Once it's marked Issued, its information can't change, it can't be assigned to new revision clouds, and its existing clouds can't be edited. All three pieces exist. None of them talks to the others. The sheet set doesn't check revision status, and the PDF export keeps no record of what went out.",
          ],
        },
        {
          id: "naming",
          heading: "File names that stay traceable after they leave",
          paragraphs: [
            "The file name is the one part of a drawing that always travels with it. A common pattern is project number, sheet number, sheet name and current revision. Revit's naming rule can build that. On a fresh project, though, sheets with no revision yet feed an empty value into the rule, so the rule needs a fallback for that case.",
            "Offices working in Persian hit a second problem. Persian sheet names in file names come out as unreadable characters in some archive, zip and email systems. The safe fix is to build file names from numbers and Latin codes only, and keep the Persian sheet name in the register and on the drawing itself.",
          ],
        },
        {
          id: "register",
          heading: "The drawing issue register and the transmittal",
          image: register.en,
          paragraphs: [
            "A transmittal and an issue register are different documents. The transmittal is the covering note for one issue, useful for about as long as that issue is current. The register is the cumulative record of every issue on the job, and it gets opened for the life of the building. You can rebuild any transmittal from the register. You can't do it the other way round.",
            "The register's one rule is that it only grows. A sheet issued four times has four rows, not one row edited four times. Each row holds sheet number and title, revision, status, date, recipient and purpose. In Iranian offices those dates are Jalali, while Revit stores a revision date as free text with no format of its own.",
          ],
        },
        {
          id: "tool",
          heading: "What a Revit output management tool actually does",
          paragraphs: [
            "A good one takes the office's rules once, then runs these steps in order on every issue:",
          ],
          list: {
            ordered: true,
            items: [
              "**Select sheets by rule**: for example, every sheet in a discipline with a new revision, instead of a fixed set someone has to keep current.",
              "**Check before export**: sheets with no revision, empty title block fields, sheets with no views placed, revisions not yet Issued.",
              "**Export PDF and DWG** under the office naming rule, into a folder named by date and issue number.",
              "**Mark the revision Issued**, only after every file has been confirmed.",
              "**Append register rows** to the office's Excel file or database, one per sheet.",
              "**Build the transmittal** from those same rows, with the file list attached.",
            ],
          },
          after: [
            "The order matters. Mark the revision Issued before the export is confirmed, have one sheet fail, and the register now records an issue that never happened.",
          ],
        },
        {
          id: "failures",
          heading: "A partial export is worse than a failed one",
          paragraphs: [
            "The Revit API's PDF export method returns False if any view fails, even if the others were written. That result doesn't say which sheets are missing. A tool that only reads it either reports the whole issue as failed, or treats an incomplete set as complete.",
            "An output tool has to check for each expected file on its own after export, and report which sheets succeeded, which failed, and why. Nothing drops out of an issue silently. A set that's one sheet short doesn't go into the register until it's whole.",
          ],
        },
        {
          id: "choice",
          heading: "An off-the-shelf add-in, a Dynamo graph, or a custom plugin",
          paragraphs: [
            "If your office issues once or twice a month, Revit's own PDF export with a saved naming rule and a plain Excel register will do. You don't need us, or anyone like us, for that. Commercial add-ins such as ProSheets, Xrev Transmit and RTV Drawing Manager also cover batch export and transmittals, and they're enough for a lot of offices.",
            "A custom plugin earns its cost when the register has to feed a document management system, office correspondence or a [management dashboard](/articles/construction-management-dashboard/), or when rules like Jalali dates, Persian names and the office's own status codes aren't supported off the shelf. Sheet order and numbering are a separate problem, covered in [the sheet sorting article](/articles/revit-sheet-sorting-plugin/). A tool like this is the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A Revit output management tool turns sheet sets, file export, revision status and the issue register into one process. From outside it's a button. Behind it is an ordered set of checks that decides what went out, when, and to whom. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit sheet sorting plugin", href: "/articles/revit-sheet-sorting-plugin/" },
        { label: "Exporting Revit schedules to Excel", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "Revit API development", href: "/articles/revit-api-development/" },
        { label: "Management dashboards for construction companies", href: "/articles/construction-management-dashboard/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk, PDF Export (What's New in Revit 2022)", href: PDF_EXPORT },
        { label: "Autodesk, Issue a Revision (Revit 2024)", href: ISSUE_REVISION },
        { label: "Revit API, Document.Export (PDFExportOptions)", href: API_EXPORT },
        { label: "Atelier Lab, The drawing issue register", href: REGISTER },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Can Revit batch export PDFs without an add-in?",
          answer:
            "Yes. Since Revit 2022, sheets export straight to PDF, as separate files or one combined file, with file names built from sheet parameters by a saved naming rule.",
        },
        {
          question: "What does marking a revision Issued do in Revit?",
          answer:
            "Its information can no longer change, it can't be assigned to new revision clouds, and its existing clouds can't be edited. To change it, untick Issued, edit, and tick it again.",
        },
        {
          question: "What's the difference between a transmittal and an issue register?",
          answer:
            "A transmittal covers one issue. The register is the record of every issue on the job and only ever gains rows. Any transmittal can be rebuilt from the register.",
        },
        {
          question: "Why keep Persian sheet names out of PDF file names?",
          answer:
            "Some archive, zip and email systems turn Persian file names into unreadable characters. Build file names from numbers and Latin codes, and keep the Persian name in the register and on the sheet.",
        },
        {
          question: "How does an output tool catch a partial export?",
          answer:
            "The Revit API export method returns a single False if any sheet fails. The tool checks for each expected file on its own and reports the failed sheets with the reason.",
        },
        {
          question: "When don't you need a custom output tool?",
          answer:
            "When issues are infrequent and an Excel register is easy to keep. Revit's own PDF export or a commercial add-in will do.",
        },
      ],
    },
  },
};
