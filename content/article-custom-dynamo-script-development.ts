import type { Localized } from "@/lib/i18n/config";
import type { ArticleContent, ArticleImage } from "@/content/article-types";

const img = (file: string, alt: { fa: string; en: string }): Localized<ArticleImage> => ({
  fa: {
    src: `/images/articles/custom-dynamo-script-development/${file}.webp`,
    srcSmall: `/images/articles/custom-dynamo-script-development/${file}-640.webp`,
    srcMedium: `/images/articles/custom-dynamo-script-development/${file}-960.webp`,
    alt: alt.fa,
    width: 1200,
    height: 627,
  },
  en: {
    src: `/images/articles/custom-dynamo-script-development/${file}.webp`,
    srcSmall: `/images/articles/custom-dynamo-script-development/${file}-640.webp`,
    srcMedium: `/images/articles/custom-dynamo-script-development/${file}-960.webp`,
    alt: alt.en,
    width: 1200,
    height: 627,
  },
});

const heroImg = img("revit-dynamo-visual-programming-graph", {
  fa: "دستی در حال طراحی نمودار گردش‌کار روی تبلت کنار مانیتور کد، نماد اسکریپت‌نویسی داینامو",
  en: "A hand sketching a workflow diagram on a tablet beside a monitor of code, standing in for Dynamo scripting",
});
const fundamentalsImg = img("dynamo-graph-workspace-nodes", {
  fa: "میز کار دو مانیتوره در محیطی کم‌نور با خطوط کد روی صفحه",
  en: "A dual-monitor desk in a dim workspace with lines of code on screen",
});
const documentationImg = img("revit-sheet-documentation-review", {
  fa: "نقشه فنی، ابزار طراحی و مداد رنگی روی میز کار، نماد اتوماسیون شیت و مستندسازی",
  en: "A technical drawing, drafting tools, and a colored pencil on a desk, standing in for sheet and documentation automation",
});
const qualityControlImg = img("revit-model-quality-check-review", {
  fa: "مهندس در حال بررسی نقشه فنی نصب‌شده روی ستون در محل پروژه",
  en: "An engineer reviewing a technical drawing pinned to a column on site",
});
const repetitiveAutomationImg = img("revit-family-placement-automation", {
  fa: "نمای بالا از نمای هندسی تکرارشونده یک نما ساختمانی، نماد جانمایی خودکار عناصر",
  en: "An overhead view of a repeating geometric building facade, standing in for automated element placement",
});
const pythonImg = img("python-scripting-revit-api-code", {
  fa: "برنامه‌نویس در حال نوشتن کد پایتون روی صفحه‌نمایش",
  en: "A programmer writing Python code on screen",
});
const organizeImg = img("dynamo-script-library-organization", {
  fa: "دستی در حال چیدن کتاب روی قفسه‌ای مرتب، نماد سازمان‌دهی کتابخانه اسکریپت",
  en: "A hand placing a book on an organized shelf, standing in for organizing a script library",
});
const graduateImg = img("compiled-revit-addin-software-development", {
  fa: "تیم توسعه نرم‌افزار در حال کار روی چند مانیتور در دفتر کار",
  en: "A software development team working across multiple monitors in an office",
});
const buildOrOutsourceImg = img("revit-automation-team-collaboration", {
  fa: "تیمی از مهندسان دور میز کار مشترک در حال بحث درباره یک پروژه",
  en: "A team of engineers gathered around a shared desk discussing a project",
});

export const articleCustomDynamoScriptDevelopment: Localized<ArticleContent> = {
  fa: {
    slug: "custom-dynamo-script-development",
    meta: {
      title: "توسعه اسکریپت اختصاصی داینامو چه چیزی را واقعاً جایگزین می‌کند؟",
      description:
        "توسعه اسکریپت اختصاصی داینامو یعنی خودکارسازی یک فرایند رویت با گراف‌های قابل‌اعتماد، نه فقط اتصال چند نود. راهنمای کامل: مستندسازی، کنترل کیفیت، پایتون و تصمیم ساخت افزونه.",
    },
    breadcrumb: "توسعه اسکریپت اختصاصی داینامو",
    category: "BIM و رویت",
    title: "توسعه اسکریپت اختصاصی داینامو چه چیزی را واقعاً جایگزین می‌کند؟",
    leadOpinion:
      "پلاگینی که فقط یک دکمه به‌نظر می‌رسد، هیچ‌وقت بر اساس همان دکمه ساخته نشده؛ بر اساس هفته‌ها تصمیم پشت آن دکمه ساخته شده، و همین حرف درباره یک گراف داینامو هم صادق است.",
    publishedAt: "2026-08-29",
    publishedLabel: "۲۰۲۶/۰۸/۲۹",
    author: {
      name: "تیم آرتینکست",
      role: "استودیوی سیستم‌های دیجیتال",
      bio: "تیمی که اسکریپت‌نویسی داینامو و اتوماسیون رویت را برای دفاتر معماری و مهندسی می‌سازد.",
      href: "/about",
    },
    tocHeading: "فهرست مطالب",
    toc: [
      { id: "overview", label: "پاسخ کوتاه" },
      { id: "fundamentals", label: "اسکریپت داینامو دقیقاً چه چیزی جایگزین می‌کند" },
      { id: "documentation", label: "جایی که اتوماسیون اول جواب می‌دهد: شیت و مستندسازی" },
      { id: "quality-control", label: "کنترل کیفیت و بررسی مدل با داینامو" },
      { id: "repetitive-automation", label: "جانمایی تکراری: فمیلی، والپست و نازک‌کاری" },
      { id: "python", label: "کد پایتون: وقتی برنامه‌نویسی بصری کافی نیست" },
      { id: "organize", label: "پکیج‌های سفارشی و مرتب‌نگه‌داشتن کتابخانه اسکریپت" },
      { id: "graduate", label: "کِی یک اسکریپت باید به افزونه کامپایل‌شده تبدیل شود" },
      { id: "build-or-outsource", label: "داخلی بسازید یا کمک بیرونی بگیرید" },
      { id: "conclusion", label: "جمع‌بندی" },
      { id: "faq", label: "پرسش‌های متداول" },
    ],
    intro:
      "توسعه اسکریپت اختصاصی داینامو یعنی ساختن یک گرافی که یک فرایند مشخص و تکراری رویت را با همان دقتی که یک آدم انجام می‌دهد، انجام بدهد؛ نه فقط اتصال چند نود آماده به هم برای یک نتیجه یک‌باره. تفاوت بین این دو خیلی بیشتر از ظاهرشان است. گرافی که یک‌بار روی یک پروژه کار می‌کند یک آزمایش است. گرافی که ماه بعد، روی پروژه بعدی، با تیم بعدی هم همان‌طور کار می‌کند، یک ابزار است.\n\nاکثر دفاتر جایی بین این دو گیر می‌کنند: یک نفر یک گراف نیمه‌کاره ساخته، فقط خودش می‌داند چطور اجرایش کند، و وقتی آن نفر مرخصی می‌رود، همه به روش قدیمی و دستی برمی‌گردند. **توسعه اسکریپت اختصاصی داینامو** دقیقاً همین شکاف را می‌بندد: نه با پیچیده‌ترکردن ابزار، بلکه با ساختن گرافی که کسی غیر از سازنده‌اش هم بتواند به آن اعتماد کند.",
    heroImage: heroImg.fa,
    sections: [
      {
        id: "fundamentals",
        heading: "اسکریپت داینامو دقیقاً چه چیزی جایگزین می‌کند",
        image: fundamentalsImg.fa,
        paragraphs: [
          "داینامو یک محیط برنامه‌نویسی بصری است که با اتصال نودها به هم، به Revit API دسترسی می‌دهد بدون آنکه لازم باشد یک خط کد نوشته شود. این یعنی کاری که در حالت عادی باید در رویت با کلیک‌های تکراری انجام شود، حالا می‌تواند به‌عنوان یک گراف قابل‌اجرا و قابل‌اشتراک تعریف شود.",
          "چیزی که این ابزار واقعاً جایگزین می‌کند، **زمان تکرار دستی** است، نه مهارت انسانی. یک نفر که می‌داند چطور شیت‌ها را مرتب کند، همچنان باید بداند شیت‌ها چطور باید مرتب شوند؛ فقط دیگر مجبور نیست هر بار آن را با دست انجام دهد. گرافی که این منطق را درست ثبت کرده باشد، همان تصمیم را بدون خطای انسانی و بدون افت تمرکز در ساعت آخر روز تکرار می‌کند.",
        ],
      },
      {
        id: "documentation",
        heading: "جایی که اتوماسیون اول جواب می‌دهد: شیت و مستندسازی",
        image: documentationImg.fa,
        paragraphs: [
          "مرتب‌سازی شیت، نام‌گذاری ویو و چیدمان لیجند معمولاً اولین جایی هستند که یک دفتر ارزش خودکارسازی را حس می‌کند، چون این کارها هم زیاد تکرار می‌شوند و هم قانون واضحی دارند: یک شماره‌گذاری مشخص، یک ترتیب مشخص، یک قالب مشخص. همین وضوح باعث می‌شود ساخت یک گراف داینامو برایشان کم‌ریسک‌تر از کارهای طراحی‌محور باشد.",
          "همین‌جاست که خدمات اسکریپت‌نویسی داینامو معمولاً از ارزش خودشان دفاع می‌کنند: یک فرایند مستندسازی که هر بار سی تا چهل دقیقه طول می‌کشد، وقتی به یک گراف تبدیل شود، به چند دقیقه اجرای خودکار می‌رسد، و آن چند دقیقه هربار دقیقاً همان قانون را دنبال می‌کند، نه نسخه‌ای که هرکس به سلیقه خودش تفسیر کرده.",
        ],
      },
      {
        id: "quality-control",
        heading: "کنترل کیفیت و بررسی مدل با داینامو",
        image: qualityControlImg.fa,
        paragraphs: [
          "داینامو می‌تواند مثل یک بازرس خودکار عمل کند: مدل را اسکن کند، پارامترهای خالی یا عناصر بدون تگ را پیدا کند، و حتی برخی خطاها را خودش اصلاح کند. این دقیقاً همان منطقی است که [چک‌کننده مدل رویت](/articles/revit-model-checker) به آن می‌پردازد؛ تفاوت اینجاست که یک گراف اختصاصی، برخلاف یک ابزار عمومی، دقیقاً همان قواعدی را چک می‌کند که استاندارد داخلی همان دفتر تعریف کرده.",
          "ریسک این بخش این است که یک گراف کنترل کیفیت که خودش تست نشده، خطاهای غلط تولید می‌کند و اعتماد به کل ابزار را از بین می‌برد. یک گراف بازرسی باید روی چند مدل واقعی و متفاوت امتحان شود، نه فقط روی همان مدلی که برایش نوشته شده.",
        ],
      },
      {
        id: "repetitive-automation",
        heading: "جانمایی تکراری: فمیلی، والپست و نازک‌کاری",
        image: repetitiveAutomationImg.fa,
        paragraphs: [
          "جانمایی خودکار فمیلی در طول محیط اتاق، ساخت والپست بر اساس نوع دیوار، یا اجرای نازک‌کاری خودکار بر اساس جدول اتاق، همه یک الگوی مشترک دارند: قانون از قبل در دیتای پروژه وجود دارد (نوع اتاق، نوع دیوار، فینیش موردنیاز)، فقط کسی باید آن را یک‌بار به‌صورت منطق بنویسد.",
          "این‌جا جایی است که تفاوت بین یک گراف آزمایشی و یک ابزار واقعی بیشترین اهمیت را دارد. جانمایی خودکار روی یک اتاق مربعی ساده کار می‌کند؛ روی یک اتاق با شکل نامنظم، یا اتاقی با چند بازشو، ممکن است شکست بخورد. گرافی که فقط حالت ساده را پوشش می‌دهد، در عمل هر بار به یک بررسی دستی نیاز دارد که خودش همان زمانی را می‌گیرد که قرار بود صرفه‌جویی شود.",
        ],
      },
      {
        id: "python",
        heading: "کد پایتون: وقتی برنامه‌نویسی بصری کافی نیست",
        image: pythonImg.fa,
        paragraphs: [
          "نودهای بصری برای اکثر منطق‌های خطی کافی‌اند، اما هر جا منطق شرطی پیچیده، حلقه‌های تودرتو یا دسترسی مستقیم به بخش‌هایی از Revit API که نود آماده‌ای ندارند لازم شود، یک نود پایتون داخل همان گراف، سریع‌تر و قابل‌نگهداری‌تر از زنجیره‌ای طولانی از نودهای بصری است.",
          "این به‌معنای رهاکردن داینامو نیست؛ به‌معنای استفاده از آن به‌عنوان یک لایه‌ی گلو بین رابط بصری و منطق واقعی است. یک تیم که هم برنامه‌نویسی بصری و هم Revit API را می‌شناسد، می‌تواند تصمیم بگیرد کجا نود کافی است و کجا چند خط کد پایتون همان کار را با نگهداری کمتر انجام می‌دهد.",
        ],
      },
      {
        id: "organize",
        heading: "پکیج‌های سفارشی و مرتب‌نگه‌داشتن کتابخانه اسکریپت",
        image: organizeImg.fa,
        paragraphs: [
          "همان‌طور که یک کتابخانه فمیلی بدون استاندارد نام‌گذاری شلوغ می‌شود، یک کتابخانه گراف داینامو هم بدون سازمان‌دهی همین سرنوشت را پیدا می‌کند: نسخه‌های مختلف یک گراف با نام‌های نزدیک به هم، پکیج‌های شخص‌ثالثی که دیگر به‌روزرسانی نمی‌شوند، و گرافی که فقط سازنده‌اش می‌داند دقیقاً چه ورودی‌ای انتظار دارد.",
          "سه چیز این وضعیت را کنترل می‌کند:",
        ],
        list: {
          items: [
            "یک **نام‌گذاری ثابت** برای هر گراف که هدف و نسخه را نشان می‌دهد.",
            "فهرستی از پکیج‌های شخص‌ثالث مورد استفاده (مثل Clockwork یا archi-lab) با نسخه دقیق، برای وقتی که یک به‌روزرسانی چیزی را می‌شکند.",
            "یک یادداشت کوتاه کنار هر گراف که می‌گوید چه ورودی‌ای انتظار می‌رود و چه خروجی‌ای تولید می‌کند.",
          ],
        },
      },
      {
        id: "graduate",
        heading: "کِی یک اسکریپت باید به افزونه کامپایل‌شده تبدیل شود",
        image: graduateImg.fa,
        paragraphs: [
          "یک گراف داینامو وقتی جواب می‌دهد که اجرایش دستی، از سمت یک نفر آشنا با ابزار، قابل‌قبول باشد. وقتی همان فرایند باید توسط چند نفر مختلف، بدون شناخت داینامو، هر روز اجرا شود؛ یا وقتی زمان اجرا برای یک گراف بصری غیرقابل‌قبول کند می‌شود؛ آن‌وقت زمان تبدیل آن به یک افزونه کامپایل‌شده رسیده است. همین مسیر را [توسعه پلاگین اختصاصی رویت](/articles/revit-plugin-development-cost) با جزئیات بیشتری پوشش می‌دهد.",
          "این تصمیم فقط درباره سرعت نیست؛ درباره پایداری در برابر به‌روزرسانی رویت هم هست. یک گراف داینامو معمولاً به نسخه‌ای از یک پکیج شخص‌ثالث وابسته است که ممکن است با هر ارتقای رویت نشکند، اما ممکن هم هست بشکند. یک افزونه کامپایل‌شده در برابر Revit API نسخه‌بندی‌شده کامپایل می‌شود و این وابستگی را قابل‌پیش‌بینی‌تر می‌کند، هرچند به‌قیمت زمان توسعه بیشتر تمام می‌شود.",
        ],
      },
      {
        id: "build-or-outsource",
        heading: "داخلی بسازید یا کمک بیرونی بگیرید",
        image: buildOrOutsourceImg.fa,
        paragraphs: [
          "اگر یک اسکریپت فقط برای یک پروژه خاص لازم است و بعد از تحویل آن پروژه دیگر استفاده نمی‌شود، سفارش‌دادن توسعه اختصاصی آن معنا ندارد؛ یک گراف ساده از یک پکیج آماده یا حتی یک بار انجام دستی همان کار، ارزان‌تر و سریع‌تر تمام می‌شود. **توسعه اسکریپت اختصاصی داینامو ارزشش را وقتی نشان می‌دهد که همان فرایند بارها، توسط افراد مختلف، در پروژه‌های مختلف تکرار می‌شود.**",
          "یک پروژه سابق تیم ما درست همین الگو را داشت: فرایندی که به‌صورت دستی حدود دو هفته و گاهی نزدیک به یک ماه طول می‌کشید، بعد از تبدیل‌شدن به یک ابزار خودکار، به حدود ده دقیقه رسید. چیزی که از بیرون یک دکمه ساده به‌نظر می‌رسد، هیچ‌وقت بر اساس همان دکمه قیمت نمی‌خورد؛ بر اساس هفته‌هایی از تصمیم‌های ریز پشت آن دکمه قیمت می‌خورد، همان تصمیم‌هایی که یک اسکریپت آزمایشی هنوز آن‌ها را نگرفته.",
        ],
      },
    ],
    conclusion:
      "توسعه اسکریپت اختصاصی داینامو زمانی ارزش واقعی خودش را نشان می‌دهد که یک فرایند مشخص، تکرارشونده و قانونمند پیدا شود، نه وقتی هدف صرفاً «داشتن یک اتوماسیون» باشد. گرافی که روی چند مدل واقعی تست شده، مستند شده و مرز مشخصی بین آنچه داینامو انجام می‌دهد و آنچه باید به یک افزونه کامپایل‌شده برسد دارد، همان چیزی است که یک بار ساخته می‌شود و سال‌ها کار می‌کند؛ نه چیزی که هر چند ماه دوباره باید ساخته شود.",
    internalHeading: "مطالب مرتبط",
    internalLinks: [
      { label: "چک‌کننده مدل رویت QAQC را خودکار می‌کند", href: "/articles/revit-model-checker" },
      { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost" },
      { label: "توسعه پلاگین رویت تهران", href: "/revit-plugin-development-tehran" },
      { label: "راهکار محتوای BIM و رویت", href: "/solutions" },
      { label: "درباره ما", href: "/about" },
    ],
    externalHeading: "منابع",
    externalLinks: [
      {
        label: "Autodesk — About Creating Dynamo Scripts for Revit",
        href: "https://help.autodesk.com/cloudhelp/2018/ENU/Revit-Customize/files/GUID-768D1E37-10CC-405D-A9D4-E2D5CF4224E5.htm",
      },
      { label: "The Dynamo Primer — Python and Revit", href: "https://primer.dynamobim.org/10_Custom-Nodes/10-5_Python-Revit.html" },
    ],
    faqHeading: "پرسش‌های متداول",
    faq: [
      {
        question: "اسکریپت داینامو در رویت دقیقاً چیست؟",
        answer:
          "یک گراف از نودهای متصل به هم است که با استفاده از Revit API یک فرایند مشخص را در رویت اجرا می‌کند، بدون آنکه لازم باشد آن فرایند هر بار با دست انجام شود. خروجی می‌تواند از مرتب‌سازی شیت تا بررسی کیفیت مدل باشد.",
      },
      {
        question: "آیا اسکریپت‌نویسی داینامو همان برنامه‌نویسی با Revit API است؟",
        answer:
          "نه دقیقاً. داینامو یک لایه بصری روی بخشی از Revit API است. برای منطق‌های ساده و خطی همین لایه کافی است؛ برای منطق پیچیده‌تر یا دسترسی به بخش‌هایی که نود آماده ندارند، یک نود پایتون داخل همان گراف یا توسعه یک افزونه کامل لازم می‌شود.",
      },
      {
        question: "آیا اسکریپت داینامو بعد از هر به‌روزرسانی رویت هم کار می‌کند؟",
        answer:
          "همیشه تضمین‌شده نیست. اگر گراف به پکیج‌های شخص‌ثالثی وابسته باشد که با نسخه جدید رویت هماهنگ نشده باشند، ممکن است بشکند. مستندسازی نسخه دقیق هر پکیج و تست‌کردن گراف بعد از هر ارتقا، ریسک را کم می‌کند نه صفر.",
      },
      {
        question: "چه زمانی یک اسکریپت داینامو باید به یک افزونه کامپایل‌شده تبدیل شود؟",
        answer:
          "وقتی فرایند باید توسط افراد بدون شناخت داینامو اجرا شود، وقتی سرعت اجرای گراف بصری کند می‌شود، یا وقتی پایداری در برابر به‌روزرسانی‌های رویت اهمیت بیشتری از سرعت توسعه پیدا می‌کند.",
      },
      {
        question: "آیا برای اسکریپت‌نویسی داینامو حتماً باید برنامه‌نویس استخدام کنیم؟",
        answer:
          "برای یک گراف ساده و یک‌باره، نه. برای گرافی که بارها در پروژه‌های مختلف استفاده می‌شود و باید در برابر داده‌های واقعی و نامنظم پایدار بماند، تجربه‌ای که هم Revit API و هم منطق برنامه‌نویسی را بشناسد، نتیجه را قابل‌اعتمادتر می‌کند.",
      },
      {
        question: "هزینه توسعه اسکریپت اختصاصی داینامو به چه چیزی بستگی دارد؟",
        answer:
          "به پیچیدگی منطق، تعداد حالت‌های استثنا که باید پوشش داده شوند، و میزان تست لازم روی مدل‌های واقعی بستگی دارد؛ نه به تعداد نودهای روی صفحه. گرافی که فقط حالت ساده را پوشش می‌دهد ارزان‌تر است اما در عمل کمتر قابل‌اعتماد است.",
      },
      {
        question: "چه زمانی اصلاً نباید سراغ توسعه اسکریپت اختصاصی برویم؟",
        answer:
          "وقتی فرایند فقط یک‌بار، برای یک پروژه خاص لازم است. در آن حالت یک گراف ساده از یک پکیج آماده یا حتی انجام دستی همان کار، ارزان‌تر و سریع‌تر از سفارش توسعه اختصاصی است.",
      },
    ],
  },
  en: {
    slug: "custom-dynamo-script-development",
    meta: {
      title: "Custom Dynamo Script Development: What It Replaces",
      description:
        "Custom Dynamo script development means automating a Revit process with a graph people can trust, not wiring nodes together once. Covers documentation, QC, Python, and add-ins.",
    },
    breadcrumb: "Custom Dynamo script development",
    category: "BIM & Revit",
    title: "Custom Dynamo script development: what it actually replaces",
    leadOpinion:
      "A plugin that looks like one button was never priced by the button — it's priced by the weeks of decisions standing behind it, and the same is true of a Dynamo graph.",
    publishedAt: "2026-08-29",
    publishedLabel: "Aug 29, 2026",
    author: {
      name: "ARTINEXT Team",
      role: "Digital Systems Studio",
      bio: "The team that builds Dynamo scripting and Revit automation for architecture and engineering offices.",
      href: "/about",
    },
    tocHeading: "Table of contents",
    toc: [
      { id: "overview", label: "The short answer" },
      { id: "fundamentals", label: "What a Dynamo script actually replaces" },
      { id: "documentation", label: "Where automation pays off first: sheets and documentation" },
      { id: "quality-control", label: "Quality control and model checking with Dynamo" },
      { id: "repetitive-automation", label: "Repetitive placement: families, wall posts, and finishes" },
      { id: "python", label: "Python nodes: when visual programming runs out" },
      { id: "organize", label: "Custom packages and keeping a script library organized" },
      { id: "graduate", label: "When a script should graduate into a compiled add-in" },
      { id: "build-or-outsource", label: "Build it in-house or bring in outside help" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    intro:
      "Custom Dynamo script development means building a graph that runs a specific, repeatable Revit process with the same precision a person would, not just wiring a few nodes together for a one-off result. The difference between the two is bigger than it looks. A graph that works once on one project is an experiment. A graph that still works next month, on the next project, with the next team, is a tool.\n\nMost offices get stuck somewhere in between: someone builds a half-finished graph, only they know how to run it, and the moment they're out sick everyone falls back to doing it by hand. **Custom Dynamo script development** closes exactly that gap, not by making the tool more complicated, but by building a graph someone other than its author can actually trust.",
    heroImage: heroImg.en,
    sections: [
      {
        id: "fundamentals",
        heading: "What a Dynamo script actually replaces",
        image: fundamentalsImg.en,
        paragraphs: [
          "Dynamo is a visual programming environment that reaches into the Revit API by wiring nodes together, without requiring a single line of code. That means work that would normally take repetitive clicks inside Revit can be defined once as a runnable, shareable graph.",
          "What it actually replaces is **manual repetition time**, not human judgment. Someone who knows how sheets should be sorted still needs to know that; they just no longer have to do it by hand every time. A graph that captures that logic correctly repeats the same decision without human error and without the fatigue that sets in during the last hour of a deadline day.",
        ],
      },
      {
        id: "documentation",
        heading: "Where automation pays off first: sheets and documentation",
        image: documentationImg.en,
        paragraphs: [
          "Sheet sorting, view naming, and legend layout are usually the first place an office feels the payoff of automation, because they're both highly repetitive and clearly rule-based: a specific numbering scheme, a specific order, a specific template. That clarity is exactly what makes building a Dynamo graph for them lower risk than automating anything design-driven.",
          "This is where Dynamo scripting services usually earn their keep: a documentation pass that took thirty or forty minutes every time becomes a few minutes of automated execution, and those few minutes follow the same rule every single time instead of whatever interpretation the person running it happened to use that day.",
        ],
      },
      {
        id: "quality-control",
        heading: "Quality control and model checking with Dynamo",
        image: qualityControlImg.en,
        paragraphs: [
          "Dynamo can act as an automated inspector: scan the model, flag empty parameters or untagged elements, and in some cases fix issues on its own. That's the same logic our [Revit model checker](/articles/revit-model-checker) piece covers in more depth. The difference is that a custom graph, unlike a general-purpose tool, checks exactly the rules a specific office's own standard defines.",
          "The risk in this section is a QC graph that hasn't been tested itself, producing false flags and burning trust in the whole tool. An inspection graph needs to run against several real, different models, not just the one it was written against.",
        ],
      },
      {
        id: "repetitive-automation",
        heading: "Repetitive placement: families, wall posts, and finishes",
        image: repetitiveAutomationImg.en,
        paragraphs: [
          "Placing families automatically along a room's perimeter, generating wall posts by wall type, or running finish automation off a room schedule all share the same pattern: the rule already exists in the project's own data (room type, wall type, required finish); someone just has to write that logic once.",
          "This is where the gap between a demo graph and a real tool matters most. Automated placement works fine on a simple rectangular room. On an irregular room, or one with several openings, it can fail. A graph that only covers the simple case ends up needing a manual check every time anyway, which eats back exactly the time it was supposed to save.",
        ],
      },
      {
        id: "python",
        heading: "Python nodes: when visual programming runs out",
        image: pythonImg.en,
        paragraphs: [
          "Visual nodes handle most linear logic fine, but the moment complex conditionals, nested loops, or direct access to parts of the Revit API with no ready-made node show up, a Python node inside the same graph is faster to write and easier to maintain than a long chain of visual nodes trying to do the same thing.",
          "That's not abandoning Dynamo. It's using it as a glue layer between the visual interface and the actual logic. A team that knows both visual programming and the Revit API can decide where a node is enough and where a few lines of Python do the same job with less upkeep later.",
        ],
      },
      {
        id: "organize",
        heading: "Custom packages and keeping a script library organized",
        image: organizeImg.en,
        paragraphs: [
          "Just like a family library gets messy without a naming standard, a Dynamo graph library ends up the same way without organization: near-duplicate versions of the same graph under slightly different names, third-party packages nobody's updating anymore, and a graph only its author knows the exact expected input for.",
          "Three things keep that under control:",
        ],
        list: {
          items: [
            "A **consistent naming pattern** for every graph that states its purpose and version.",
            "A list of third-party packages in use (Clockwork, archi-lab, and the like) with the exact version, for when an update breaks something.",
            "A short note next to every graph stating what input it expects and what output it produces.",
          ],
        },
      },
      {
        id: "graduate",
        heading: "When a script should graduate into a compiled add-in",
        image: graduateImg.en,
        paragraphs: [
          "A Dynamo graph works fine when running it manually, by someone already familiar with the tool, is acceptable. Once the same process needs to run every day across several people with no Dynamo experience, or once execution time for a visual graph becomes unacceptably slow, that's the point to convert it into a compiled add-in. Our piece on [Revit plugin development cost](/articles/revit-plugin-development-cost) covers that path in more detail.",
          "This decision isn't only about speed. It's also about stability across Revit updates. A Dynamo graph usually depends on a specific version of a third-party package, which may or may not survive the next Revit upgrade. A compiled add-in builds against a versioned Revit API, which makes that dependency more predictable, at the cost of more development time upfront.",
        ],
      },
      {
        id: "build-or-outsource",
        heading: "Build it in-house or bring in outside help",
        image: buildOrOutsourceImg.en,
        paragraphs: [
          "If a script is only needed for one specific project and won't be used again after that project ships, commissioning custom development for it doesn't make sense. A simple graph from an existing package, or even doing it by hand once, is cheaper and faster. **Custom Dynamo script development earns its cost when the same process repeats across many people and many projects, not just once.**",
          "A past project of ours followed exactly this pattern: a process that manually took about two weeks, sometimes closer to a month, dropped to roughly ten minutes once it became an automated tool. What looks like one button from the outside was never priced by that button. It's priced by the weeks of small decisions standing behind it, decisions a demo script hasn't made yet.",
        ],
      },
    ],
    conclusion:
      "Custom Dynamo script development earns its real value when there's a specific, repeatable, rule-based process to point it at, not when the goal is simply \"having an automation.\" A graph that's been tested against several real models, documented, and drawn with a clear line between what Dynamo should handle and what belongs in a compiled add-in is the kind that gets built once and runs for years, not the kind that needs rebuilding every few months.",
    internalHeading: "Related reading",
    internalLinks: [
      { label: "A Revit model checker automates QA/QC", href: "/articles/revit-model-checker" },
      { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost" },
      { label: "Revit plugin development, Tehran", href: "/revit-plugin-development-tehran" },
      { label: "BIM & Revit content solution", href: "/solutions" },
      { label: "About us", href: "/about" },
    ],
    externalHeading: "Further reading",
    externalLinks: [
      {
        label: "Autodesk — About Creating Dynamo Scripts for Revit",
        href: "https://help.autodesk.com/cloudhelp/2018/ENU/Revit-Customize/files/GUID-768D1E37-10CC-405D-A9D4-E2D5CF4224E5.htm",
      },
      { label: "The Dynamo Primer — Python and Revit", href: "https://primer.dynamobim.org/10_Custom-Nodes/10-5_Python-Revit.html" },
    ],
    faqHeading: "FAQ",
    faq: [
      {
        question: "What is a Dynamo script in Revit exactly?",
        answer:
          "A graph of connected nodes that uses the Revit API to run a specific process inside Revit, without needing to be done by hand every time. The output can range from sheet sorting to model quality checks.",
      },
      {
        question: "Is Dynamo scripting the same as Revit API programming?",
        answer:
          "Not quite. Dynamo is a visual layer over part of the Revit API. For simple, linear logic that layer is enough. For more complex logic, or access to parts with no ready-made node, a Python node inside the same graph, or a full add-in, becomes necessary.",
      },
      {
        question: "Does a Dynamo script keep working after every Revit update?",
        answer:
          "Not always guaranteed. If the graph depends on third-party packages that haven't been updated for the new Revit version, it can break. Documenting the exact package version and testing the graph after every upgrade reduces that risk, not eliminates it.",
      },
      {
        question: "When should a Dynamo script graduate into a compiled add-in?",
        answer:
          "When the process needs to run across people with no Dynamo experience, when execution time for the visual graph becomes too slow, or when stability across Revit updates matters more than development speed.",
      },
      {
        question: "Do we need to hire a programmer for Dynamo scripting?",
        answer:
          "For a simple, one-off graph, no. For a graph reused across many projects that has to stay stable against real, messy data, experience with both the Revit API and programming logic makes the result more reliable.",
      },
      {
        question: "What does custom Dynamo script development cost depend on?",
        answer:
          "Logic complexity, how many edge cases need covering, and how much testing against real models is required, not the number of nodes on screen. A graph that only covers the simple case is cheaper but less reliable in practice.",
      },
      {
        question: "When should we not bother with custom script development at all?",
        answer:
          "When the process is only needed once, for one specific project. In that case, a simple graph built from an existing package, or even doing it by hand once, is cheaper and faster than commissioning custom development.",
      },
    ],
  },
};
