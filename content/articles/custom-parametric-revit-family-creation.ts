import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/custom-parametric-revit-family-creation";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("custom-parametric-revit-family-creation-hero", {
  fa: "رندر وایرفریم قرمز روی زمینه‌ی تیره، برای منطق پارامتریک یک فمیلی رویت",
  en: "A red wireframe render on a dark ground, for the parametric logic behind a Revit family",
});
const params = img("revit-family-parameters-formula-workspace", {
  fa: "بررسی نقشه‌ی فنی روی میز، پیش از تعریف پارامترهای یک فمیلی رویت",
  en: "Reviewing a technical drawing at a desk before defining a Revit family's parameters",
});
const planning = img("revit-reference-planes-planning-sketch", {
  fa: "مداد و پرگار روی میز ترسیم، برای برنامه‌ریزی صفحات مرجع پیش از هندسه",
  en: "Pencils and a compass on a drafting desk, for planning reference planes before geometry",
});

export const customParametricRevitFamilyCreation: ArticlePage = {
  slug: "custom-parametric-revit-family-creation",
  content: {
    fa: {
      slug: "custom-parametric-revit-family-creation",
      meta: {
        title: "ساخت فمیلی پارامتریک رویت؛ پارامتر، فرمول و تست — آرتینکست",
        description:
          "ساخت فمیلی پارامتریک رویت یعنی طراحی پارامترها، فرمول‌ها و قیدها برای عملکرد در پروژه‌ی واقعی، نه یک‌بار فلکس در ادیتور. روش تست و زمان مناسب را بخوانید.",
      },
      keywords: [
        "فمیلی پارامتریک رویت",
        "ساخت فمیلی پارامتریک رویت",
        "فمیلی سبک رویت",
        "ساخت فمیلی اختصاصی رویت",
        "فمیلی محصول برای تولیدکنندگان",
      ],
      breadcrumb: "ساخت فمیلی پارامتریک رویت",
      category: "BIM و Revit",
      title: "ساخت فمیلی پارامتریک رویت، از پارامتر تا تست",
      leadOpinion:
        "فمیلی‌ای که فقط یک‌بار در ادیتور فلکس شده است، هنوز ثابت نکرده که کار می‌کند؛ فقط ثابت کرده که یک‌بار کار کرده است.",
      publishedAt: "2026-08-28",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که فمیلی‌های پارامتریک اختصاصی رویت را برای تولیدکنندگان و دفاتر معماری طراحی و تست می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "params", label: "چه چیزی فمیلی را پارامتریک می‌کند" },
        { id: "planning", label: "صفحات مرجع و قیدها" },
        { id: "formulas", label: "فرمول‌های کاربردی" },
        { id: "testing", label: "فلکس‌کردن، خط پایان نیست" },
        { id: "lightweight", label: "سبک‌نگه‌داشتن فمیلی" },
        { id: "build-or-outsource", label: "ساخت داخلی یا برون‌سپاری" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "ساخت فمیلی پارامتریک رویت یعنی طراحی پارامترها و فرمول‌ها به‌گونه‌ای که فمیلی در پروژه‌ی واقعی، در کنار نمونه‌های متعدد و در اسکجوال‌های واقعی، عملکرد درستی داشته باشد، نه اینکه فقط یک‌بار در ادیتور فلکس شود. فمیلی‌ای که در اولین تست کاملاً درست به نظر می‌رسد، ممکن است همان هفته در یک اسکجوال واقعی یا در کنار ده نمونه‌ی دیگر از خود دچار خطا شود. همین تفاوت است که فمیلی پارامتریک را از فمیلی‌ای با چند پارامتر جدا می‌کند.\n\nاولین پروژه‌ی تحقیقاتی بنیان‌گذار آرتینکست با ۶۰۰ داده‌ی دستی شروع شد و پاسخی که شنید این بود: «۶۰۰؟ همین؟» همین پاسخ باعث شد به‌جای افزودن دستی داده، یک سیستم تولید خودکار بسازد و نتیجه به حدود ۲۲٬۰۰۰ پیکربندی رسید. **متوقف‌شدن در نقطه‌ای که چیزی کار می‌کند، خط پایان درستی نیست؛ خط پایان جایی است که آن را کاملاً درک کرده باشید.** همین قاعده درباره‌ی فمیلی پارامتریک نیز صادق است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "params",
          heading: "چه چیزی یک فمیلی را واقعاً پارامتریک می‌کند",
          image: params.fa,
          paragraphs: [
            "پارامتر تایپ روی همه‌ی نمونه‌های یک تایپ اثر می‌گذارد، اما پارامتر نمونه به هر نسخه اجازه می‌دهد مقدار مستقل خود را داشته باشد. خطای رایج این است که پارامتری مهم به‌صورت تایپ تعریف شود، در حالی که باید نمونه باشد؛ نتیجه، فمیلی‌ای است که در ادیتور فلکس می‌شود، اما در پروژه‌ی واقعی همه‌ی نمونه‌های آن ناچار به یک اندازه هستند.",
            "فرمول‌ها پارامترها را از مقدار ثابت به منطق واقعی تبدیل می‌کنند: یک محاسبه، یک شرط یا رابطه‌ای میان دو بعد. فمیلی بدون فرمول تنها چند مقدار قابل‌تغییر دارد، اما در فمیلی‌ای که فرمول‌های درست دارد، ابعاد و نمایش اجزا بر اساس ورودی‌ها تعیین می‌شوند.",
          ],
        },
        {
          id: "planning",
          heading: "صفحات مرجع و قیدها، پیش از هندسه",
          image: planning.fa,
          paragraphs: [
            "پیش از ترسیم اولین خط هندسه، صفحات مرجع باید نام‌گذاری و قفل شوند. صفحه‌ی مرجعی که به مبدأ قفل نشده یا نامی ندارد، معمولاً همان عاملی است که بعدها با تغییر یک پارامتر، هندسه‌ی فمیلی را به هم می‌ریزد.",
            "قیدها و برابری‌ها (EQ) پس از صفحات مرجع تعریف می‌شوند، نه هم‌زمان با هندسه. ترتیب معکوس، یعنی اول هندسه و بعد قید، الگوی مشترک بیشتر فمیلی‌های شکننده است.",
          ],
        },
        {
          id: "formulas",
          heading: "فرمول‌هایی که واقعاً کاربرد دارند",
          paragraphs: ["سه نوع فرمول بیشتر نیازهای واقعی را پوشش می‌دهند:"],
          list: {
            items: [
              "**محاسبه‌ی عددی ساده**، مانند محاسبه‌ی حجم از طول، عرض و ارتفاع.",
              "**منطق شرطی برای نمایش**، یعنی نمایش بخشی از هندسه تنها زمانی که یک پارامتر فعال است.",
              "**محدودسازی مقدار ورودی** به بازه‌ی واقعی محصول.",
            ],
          },
          after: [
            "محدودسازی همان جایی است که بیشتر فمیلی‌های دانلودی ضعف دارند. بدون حداقل و حداکثر برای یک بعد، کاربر می‌تواند عددی وارد کند که محصول واقعی در آن اندازه تولید نمی‌شود. یک فرمول شرطی ساده که مقدار را به بازه‌ی واقعی محدود کند، بسیار کم‌هزینه‌تر از اصلاح همان خطا در میانه‌ی یک پروژه است.",
          ],
        },
        {
          id: "testing",
          heading: "فلکس‌کردن، خط پایان نیست",
          paragraphs: [
            "فلکس‌کردن در ادیتور تنها نشان می‌دهد فرمول‌ها خطای منطقی ندارند. این کار نشان نمی‌دهد فمیلی در یک اسکجوال واقعی درست عمل می‌کند یا وقتی ده نمونه‌ی آن هم‌زمان در پروژه بارگذاری شوند چه اتفاقی می‌افتد. تست واقعی سه مورد را بررسی می‌کند:",
          ],
          list: {
            ordered: true,
            items: [
              "بارگذاری فمیلی در یک پروژه‌ی واقعی، نه فقط در پنجره‌ی ادیتور.",
              "رفتار چند نمونه‌ی هم‌زمان با مقادیر متفاوت پارامترها.",
              "خوانایی و درستی مقادیر در یک اسکجوال واقعی، نه فقط در پنل ویژگی‌ها.",
            ],
          },
          after: [
            "دو یونیت کرتین‌وال که در صفحه‌ی [ساخت فمیلی رویت](/revit-family-creation/) نمایش داده شده‌اند، پیش از تحویل به همین ترتیب تست شده‌اند: فلکس در ادیتور، بررسی در اسکجوال و بارگذاری در یک مدل واقعی.",
          ],
        },
        {
          id: "lightweight",
          heading: "فمیلی را سبک نگه دارید و بدانید کجا پارامتریک لازم نیست",
          paragraphs: [
            "هر فمیلی به منطق پارامتریک پیچیده نیاز ندارد. محصولی که فقط در چند اندازه‌ی ثابت تولید می‌شود، با یک Type Catalog و چند تایپ ثابت بهتر پوشش داده می‌شود تا با فمیلی‌ای که ده پارامتر و پنج فرمول دارد و هرگز خارج از همان چند اندازه استفاده نمی‌شود.",
            "منطق پارامتریک اضافه هزینه‌ی واقعی دارد: هر پارامتر یک مسیر احتمالی برای خطاست و هر فرمول در هر ریجنریت دوباره محاسبه می‌شود. پرسش درست این نیست که آیا می‌توان این مورد را پارامتریک کرد، بلکه این است که آیا کسی واقعاً این پارامتر را تغییر خواهد داد.",
            "سبک‌بودن فمیلی به هندسه نیز بستگی دارد. جزئیاتی که فقط در مقیاس‌های بزرگ دیده می‌شوند، باید در Detail Level مناسب نمایش داده شوند و مش یا فایل CAD واردشده باید با هندسه‌ی بومی رویت جایگزین شود.",
          ],
        },
        {
          id: "build-or-outsource",
          heading: "ساخت داخلی یا برون‌سپاری",
          paragraphs: [
            "اگر محتوای مورد نیاز استاندارد است و با کمی تغییر از فمیلی‌های پیش‌فرض رویت ساخته می‌شود، ساخت داخلی منطقی‌تر است، زیرا زمانی که صرف آن می‌شود در پروژه‌های بعدی نیز جبران می‌شود. برون‌سپاری زمانی توجیه دارد که حجم محتوا زیاد باشد، پیچیدگی فنی بیش از توان تیم فعلی باشد یا زمان‌بندی پروژه فرصت یادگیری و آزمون‌وخطا را ندهد.",
            "اگر فقط به چند فمیلی محدود نیاز دارید و تیم داخلی زمان کافی دارد، سپردن کار به یک تیم بیرونی لازم نیست. [محتوای تخصصی رویت](/products/#revit-families) را زمانی برون‌سپاری کنید که حجم کار واقعاً از ظرفیت تیم داخلی بیشتر شده باشد، نه صرفاً به این دلیل که فمیلی پارامتریک پیچیده به نظر می‌رسد.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "فمیلی پارامتریک درست، فمیلی‌ای با بیشترین تعداد پارامتر نیست، بلکه فمیلی‌ای است که فرمول‌هایش دقیقاً آنچه را در محصول یا پروژه‌ی واقعی اتفاق می‌افتد مدل می‌کنند. پارامترها و فرمول‌ها با صفحات مرجع درست شروع می‌شوند، با تست در پروژه‌ی واقعی تأیید می‌شوند و اگر کسی آن‌ها را تغییر ندهد، افزودن آن‌ها ارزشی ندارد.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "ساخت فمیلی رویت", href: "/revit-family-creation/" },
        { label: "ساخت فمیلی رویت در تهران", href: "/revit-family-creation-tehran/" },
        { label: "فمیلی رویت در صفحه‌ی محصولات", href: "/products/#revit-families" },
        { label: "بهینه‌سازی کتابخانه رویت", href: "/articles/revit-library-optimization/" },
        { label: "درباره ما", href: "/about/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk Revit Help — Family Editor Tools", href: "https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-253B2300-35C2-4024-AB70-43E576CEA49C" },
        { label: "Autodesk Revit Help — Formula Examples", href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-7610D11E-D1C9-44AF-9B0B-4A75EAC709B9.htm" },
        { label: "Autodesk Revit Help — Create a Type Catalog", href: "https://help.autodesk.com/cloudhelp/2021/ENU/Revit-Customize/files/GUID-FFA71D72-D4C5-416D-BF65-1757657C3CE9.htm" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "تفاوت فمیلی پارامتریک و فمیلی معمولی رویت چیست؟",
          answer:
            "فمیلی معمولی هندسه و ابعاد ثابتی دارد. فمیلی پارامتریک با استفاده از پارامترها و فرمول‌ها، ابعاد و رفتار خود را بر اساس ورودی‌ها تنظیم می‌کند، بدون اینکه کسی هندسه را به‌صورت دستی دوباره بسازد.",
        },
        {
          question: "پارامتر تایپ و پارامتر نمونه چه تفاوتی دارند؟",
          answer:
            "پارامتر تایپ روی همه‌ی نمونه‌های یک تایپ به‌طور یکسان اثر می‌گذارد و تغییر آن، همه‌ی نسخه‌ها را تغییر می‌دهد. پارامتر نمونه به هر نسخه اجازه می‌دهد مقدار مستقل خود را داشته باشد، بدون اینکه بر نسخه‌های دیگر اثر بگذارد.",
        },
        {
          question: "چگونه بخشی از فمیلی را فقط در شرایط خاص نمایش دهیم؟",
          answer:
            "با یک پارامتر Yes/No و یک فرمول شرطی برای نمایش آن هندسه. وقتی شرط برقرار باشد آن بخش نمایش داده می‌شود و در غیر این صورت پنهان می‌ماند، بدون نیاز به دو نسخه‌ی جداگانه از فمیلی.",
        },
        {
          question: "آیا هر فمیلی رویت باید پارامتریک باشد؟",
          answer:
            "خیر. محصولی که فقط در چند اندازه‌ی ثابت وجود دارد، معمولاً با یک Type Catalog و چند تایپ ثابت بهتر پوشش داده می‌شود. منطق پارامتریک اضافه تنها زمانی ارزش دارد که کسی واقعاً آن پارامتر را تغییر دهد.",
        },
        {
          question: "چه زمانی برون‌سپاری ساخت فمیلی رویت به‌صرفه‌تر از ساخت داخلی است؟",
          answer:
            "زمانی که حجم محتوا زیاد است، پیچیدگی فنی بیش از توان تیم فعلی است یا زمان‌بندی، فرصت یادگیری و آزمون‌وخطای داخلی را نمی‌دهد. برای چند فمیلی محدود و تیمی که زمان کافی دارد، ساخت داخلی معمولاً کافی است.",
        },
        {
          question: "مطمئن‌ترین روش تست فمیلی پارامتریک چیست؟",
          answer:
            "فلکس‌کردن در ادیتور تنها قدم اول است. تست واقعی شامل بارگذاری فمیلی در یک پروژه‌ی واقعی، بررسی رفتار چند نمونه‌ی هم‌زمان با مقادیر متفاوت و بررسی درستی مقادیر در یک اسکجوال واقعی است.",
        },
        {
          question: "آیا Dynamo یا Grasshopper می‌تواند جایگزین ساخت دستی فمیلی پارامتریک شود؟",
          answer:
            "برای تولید انبوه یا تغییرات پیچیده‌ی هندسی، این ابزارها کار را سریع‌تر می‌کنند. اما پایه‌ی فمیلی، یعنی صفحات مرجع، دسته‌بندی و پارامترهای درست، همچنان باید در Family Editor رویت به‌درستی تعریف شود تا خروجی Dynamo یا Grasshopper کاربردی باشد.",
        },
      ],
    },
    en: {
      slug: "custom-parametric-revit-family-creation",
      meta: {
        title: "Custom Parametric Revit Family Creation — ARTINEXT",
        description:
          "Custom parametric Revit family creation: parameters, formulas and constraints built for real project behavior, not a single flex in the editor. How to test it.",
      },
      keywords: [
        "custom parametric revit family creation",
        "lightweight revit families",
        "BIM object creation services",
        "revit family creation company",
        "manufacturer BIM content",
      ],
      breadcrumb: "Custom parametric Revit family creation",
      category: "BIM & Revit",
      title: "Custom parametric Revit family creation: what makes a family actually work",
      leadOpinion:
        "A family that only flexes once in the editor hasn't proven it works. It's proven it worked once.",
      publishedAt: "2026-08-28",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that designs and tests custom parametric Revit families for manufacturers and architecture offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "params", label: "What makes a family parametric" },
        { id: "planning", label: "Reference planes and constraints" },
        { id: "formulas", label: "Formulas that do the work" },
        { id: "testing", label: "Flexing isn't the finish line" },
        { id: "lightweight", label: "Keeping a family light" },
        { id: "build-or-outsource", label: "Build in-house or outsource" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Custom parametric Revit family creation means designing parameters and formulas so the family behaves correctly in a real project, next to many instances of itself and inside a real schedule, not just flexing once in the editor. A family can look completely right on its first test and break the same week in a live schedule. That gap is what separates \"parametric\" from \"has a few parameters.\"\n\nThe founder's first research project started with 600 data points built by hand. The response was: \"600? Really? That's it?\" That was enough to stop adding data by hand and build a generation system instead, which ended at roughly 22,000 configurations. **Stopping when something works is the wrong finish line. Stop when you understand it.** The same rule applies to a parametric family.",
      heroImage: hero.en,
      sections: [
        {
          id: "params",
          heading: "What actually makes a family parametric",
          image: params.en,
          paragraphs: [
            "A type parameter affects every instance of a type; an instance parameter lets each copy carry its own value. The common mistake is making an important parameter a type parameter when it should be an instance one. The family flexes fine, and then every instance in a real project is forced to share one size.",
            "Formulas are what turn parameters from fixed values into logic: a calculation, a condition, a relationship between two dimensions. A family with no formulas has a few values you can change. In a family with the right formulas, its dimensions and visibility follow from its inputs.",
          ],
        },
        {
          id: "planning",
          heading: "Reference planes and constraints before geometry",
          image: planning.en,
          paragraphs: [
            "Before the first line of geometry is drawn, the reference planes need to be named and locked. A reference plane that is not locked to the origin, or has no name, is usually what pulls the geometry apart later when one parameter changes.",
            "Constraints and EQ come after the reference planes, not alongside the geometry. The reverse order, geometry first and constraints after, is the pattern behind most fragile families.",
          ],
        },
        {
          id: "formulas",
          heading: "Formulas that actually do the work",
          paragraphs: ["Three kinds of formula cover most real cases:"],
          list: {
            items: [
              "**Simple arithmetic**, such as volume from length, width and height.",
              "**Conditional visibility**, showing a piece of geometry only when a parameter is on.",
              "**Clamping an input** to the product's real range.",
            ],
          },
          after: [
            "Clamping is where most downloaded families fall short. With no minimum or maximum on a dimension, a user can enter a size the real product never comes in. A simple conditional formula that pins the value to the real range costs far less than fixing the same error halfway through a project.",
          ],
        },
        {
          id: "testing",
          heading: "Flexing isn't the finish line",
          paragraphs: [
            "Flexing in the editor proves the formulas have no logic errors. It does not prove the family reads correctly in a real schedule, or what happens when ten instances load into a project at once. Real testing checks three things:",
          ],
          list: {
            ordered: true,
            items: [
              "Loading the family into a real project, not just the editor window.",
              "How several instances with different parameter values behave together.",
              "Whether the values read correctly in a real schedule, not just the properties panel.",
            ],
          },
          after: [
            "The two curtain-wall units shown on our [Revit family creation](/revit-family-creation/) page went through exactly this before delivery: flexed in the editor, checked in schedules, and loaded into a live model.",
          ],
        },
        {
          id: "lightweight",
          heading: "Keep it light, and know when not to go parametric",
          paragraphs: [
            "Not every family needs deep parametric logic. A product that only ships in a handful of fixed sizes is better served by a type catalog with a few fixed types than by a family carrying ten parameters and five formulas that are never used outside those same sizes.",
            "Extra logic has a real cost. Every parameter is one more path for an error, and every formula is recalculated on every regeneration. The right question is not whether something can be parametric. It is whether anyone will actually change that parameter.",
            "Lightweight families are also a matter of geometry. Detail that only reads at large scales belongs at the right detail level, and imported mesh or CAD belongs rebuilt as native Revit geometry.",
          ],
        },
        {
          id: "build-or-outsource",
          heading: "Build in-house or outsource",
          paragraphs: [
            "If the content is standard and buildable from Revit's own families with small changes, build it in-house; the time pays off again on the next project. Outsourcing earns its cost when the volume is high, the technical complexity is beyond the current team, or the deadline leaves no room for trial and error.",
            "If it is a handful of families and your team has the time, you do not need an outside team, including us. Save [specialist Revit content work](/products/#revit-families) for when the volume genuinely exceeds what the team can take on, not just because a parametric family looks complicated on paper.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A well-built parametric family is not the one with the most parameters. It is the one whose formulas model exactly what happens in the real product or project. Parameters and formulas start from the right reference planes, get proven in a real project, and none of them are worth adding if nobody will ever change them.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Revit family creation", href: "/revit-family-creation/" },
        { label: "Revit family creation in Tehran", href: "/revit-family-creation-tehran/" },
        { label: "Revit families on the Products page", href: "/products/#revit-families" },
        { label: "Revit library optimization", href: "/articles/revit-library-optimization/" },
        { label: "About the studio", href: "/about/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk Revit Help — Family Editor Tools", href: "https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-253B2300-35C2-4024-AB70-43E576CEA49C" },
        { label: "Autodesk Revit Help — Formula Examples", href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-7610D11E-D1C9-44AF-9B0B-4A75EAC709B9.htm" },
        { label: "Autodesk Revit Help — Create a Type Catalog", href: "https://help.autodesk.com/cloudhelp/2021/ENU/Revit-Customize/files/GUID-FFA71D72-D4C5-416D-BF65-1757657C3CE9.htm" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What's the difference between a parametric and a non-parametric Revit family?",
          answer:
            "A non-parametric family has fixed geometry and dimensions. A parametric family uses parameters and formulas to adjust its own dimensions and behavior from its inputs, without anyone rebuilding the geometry by hand.",
        },
        {
          question: "What's the difference between type and instance parameters?",
          answer:
            "A type parameter affects every instance of a type equally, so changing it changes every copy. An instance parameter lets each copy carry its own value without affecting the rest.",
        },
        {
          question: "How do I make part of a family show only under a condition?",
          answer:
            "With a yes/no parameter and a conditional formula driving that geometry's visibility. The piece shows when the condition is true and stays hidden when it isn't, with no need for two versions of the family.",
        },
        {
          question: "Should every Revit family be parametric?",
          answer:
            "No. A product that only ships in a handful of fixed sizes is usually better served by a type catalog with a few fixed types. Extra parametric logic only earns its cost when someone will actually change that parameter.",
        },
        {
          question: "When does outsourcing Revit family creation beat building in-house?",
          answer:
            "When the volume is high, the technical complexity is beyond the current team, or the deadline leaves no room for trial and error. For a handful of families and a team with time to spare, building in-house is usually enough.",
        },
        {
          question: "What's the safest way to test a parametric family?",
          answer:
            "Flexing in the editor is only the first step. Real testing means loading the family into an actual project, checking several instances with different values together, and confirming the values read correctly in a real schedule.",
        },
        {
          question: "Can Dynamo or Grasshopper replace building a parametric family by hand?",
          answer:
            "For bulk generation or complex geometric variation, they speed the work up. But the family's foundation, meaning its reference planes, category and the right parameters, still has to be set up correctly in the Revit Family Editor for their output to mean anything.",
        },
      ],
    },
  },
};
