import type { Localized } from "@/lib/i18n/config";
import type { ArticleContent, ArticleImage } from "@/content/article-types";

const img = (file: string, alt: { fa: string; en: string }): Localized<ArticleImage> => ({
  fa: {
    src: `/images/articles/revit-library-optimization/${file}.webp`,
    srcSmall: `/images/articles/revit-library-optimization/${file}-640.webp`,
    srcMedium: `/images/articles/revit-library-optimization/${file}-960.webp`,
    alt: alt.fa,
    width: 1200,
    height: 627,
  },
  en: {
    src: `/images/articles/revit-library-optimization/${file}.webp`,
    srcSmall: `/images/articles/revit-library-optimization/${file}-640.webp`,
    srcMedium: `/images/articles/revit-library-optimization/${file}-960.webp`,
    alt: alt.en,
    width: 1200,
    height: 627,
  },
});

const heroImg = img("revit-library-optimization-blueprint", {
  fa: "بهینه‌سازی کتابخانه رویت — نقشه معماری با پلان طبقه ابعادگذاری‌شده",
  en: "Revit library optimization — architectural blueprint with a dimensioned floor plan",
});
const fileSizeImg = img("revit-file-size-workspace", {
  fa: "بررسی حجم فایل رویت روی صفحه‌نمایش در محیط کار فنی",
  en: "Reviewing Revit file size on screen in a technical workspace",
});
const purgeImg = img("purge-unused-revit-elements", {
  fa: "میز کار مرتب پیش از اجرای Purge Unused در رویت",
  en: "An organized desk before running Purge Unused in Revit",
});
const downloadedImg = img("reviewing-downloaded-revit-content", {
  fa: "بررسی محتوای دانلودی رویت پیش از ورود به کتابخانه مشترک",
  en: "Reviewing downloaded Revit content before it enters the shared library",
});
const objectStylesImg = img("revit-object-styles-detail", {
  fa: "بررسی استایل اشیا و خطوط فنی یک فمیلی رویت",
  en: "Checking object styles and line detail on a Revit family",
});
const organizeImg = img("organize-revit-family-library", {
  fa: "قفسه‌بندی مرتب به‌عنوان استعاره سازمان‌دهی کتابخانه فمیلی رویت",
  en: "Organized shelving, a stand-in for a well-organized Revit family library",
});
const saveRebuildImg = img("rebuild-revit-library-standard", {
  fa: "اسکلت فولادی در حال ساخت — استعاره بازسازی کتابخانه رویت از پایه",
  en: "A steel structural frame under construction — rebuilding a Revit library from a clean standard",
});
const maintainImg = img("revit-library-maintenance-audit", {
  fa: "چیدمان مینیمال دفترچه یادداشت برای ممیزی دوره‌ای کتابخانه رویت",
  en: "A minimal notebook layout for a recurring Revit library audit",
});

export const articleRevitLibraryOptimization: Localized<ArticleContent> = {
  fa: {
    slug: "revit-library-optimization",
    meta: {
      title: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست — آرتینکست",
      description:
        "بهینه‌سازی کتابخانه رویت یعنی اصلاح فمیلی‌های مشخصی که مشکل می‌سازند، نه کوچک‌کردن کل کتابخانه. راهنمای کامل: پاک‌سازی، محتوای دانلودی، استاندارد و ممیزی.",
    },
    breadcrumb: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست",
    category: "BIM و رویت",
    title: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست",
    leadOpinion: "خطرناک‌ترین مشکل یک کتابخانه رویت معمولاً بزرگ‌ترین فایل نیست؛ همان جزئیاتی است که کسی بررسی نکرده.",
    publishedAt: "2026-08-19",
    publishedLabel: "۲۰۲۶/۰۸/۱۹",
    updatedAt: "2026-08-23",
    updatedLabel: "۲۰۲۶/۰۸/۲۳",
    author: {
      name: "تیم آرتینکست",
      role: "استودیوی سیستم‌های دیجیتال",
      bio: "تیمی که محتوای BIM، ابزار اختصاصی و اتوماسیون رویت را برای دفاتر معماری و مهندسی می‌سازد.",
      href: "/about",
    },
    tocHeading: "فهرست مطالب",
    toc: [
      { id: "overview", label: "پاسخ کوتاه" },
      { id: "file-size", label: "چرا حجم فایل مشکل اصلی نیست" },
      { id: "purge", label: "ابتدا موارد بلااستفاده را پاک کنید" },
      { id: "downloaded-content", label: "اول محتوای دانلودی را تمیز کنید" },
      { id: "object-styles", label: "استایل اشیا و پارامترهای یتیم را اصلاح کنید" },
      { id: "organize-library", label: "کتابخانه را با استاندارد واقعی مرتب کنید" },
      { id: "save-or-rebuild", label: "نجات بدهید یا بازسازی کنید" },
      { id: "maintain", label: "با ممیزی دوره‌ای تمیز نگهش دارید" },
      { id: "conclusion", label: "جمع‌بندی" },
      { id: "faq", label: "پرسش‌های متداول" },
    ],
    intro:
      "بهینه‌سازی کتابخانه رویت یعنی اصلاح همان فمیلی‌ها و تنظیمات مشخصی که باعث سینک کند، شیت شکسته یا فایل حجیم می‌شوند، نه کوچک‌کردن کل کتابخانه. کتابخانه‌ای با چهل فمیلی می‌تواند دائم خراب شود و کتابخانه‌ای با چهارصد فمیلی می‌تواند سال‌ها تمیز کار کند. چیزی که خراب می‌کند هیچ‌وقت تعداد کل نیست؛ **یک جزئیات مشخص در چند فمیلی است**: یک ایمپورت تودرتو، یک پارامتر یتیم، یک الگوی نام‌گذاری که کسی روی آن توافق نکرده. همین‌ها را اصلاح کنید، حجم فایل خودش حل می‌شود.\n\nیکی از امتحان‌های دیباگ تیم ما زمانی فقط با یک غلط املایی نمره کم کرد؛ تنها کسری از نمره‌ای ۲۳.۵ از ۲۴، در حالی که بالاترین نمره کلاس ۱۸ بود. کتابخانه‌های رویت هم همین‌طور خراب می‌شوند. بزرگ‌ترین ریسک یک کتابخانه هیچ‌وقت بزرگ‌ترین فایل نیست؛ همان کوچک‌ترین چیزی است که کسی بررسی نکرده.",
    heroImage: heroImg.fa,
    sections: [
      {
        id: "file-size",
        heading: "چرا حجم فایل مشکل اصلی نیست",
        image: fileSizeImg.fa,
        paragraphs: [
          "حجم فایل رویت یک نشانه است، نه یک تشخیص. دو دفتر می‌توانند کتابخانه‌هایی با حجم کاملاً متفاوت داشته باشند و تجربه‌ای برعکس هم داشته باشند: دفتری با کتابخانه کوچک‌تر هر هفته کرش می‌کند و دفتری با کتابخانه بزرگ‌تر هرگز در تیکت پشتیبانی دیده نمی‌شود. آنچه واقعاً مشکل را پیش‌بینی می‌کند این است که چند فمیلی از این کتابخانه وزن غیرضروری حمل می‌کنند: هندسه ایمپورت‌شده از CAD که کسی صاف نکرده، فمیلی‌های تودرتو تا سه لایه عمق، پارامترهایی که هیچ کاری نمی‌کنند اما در هر ریجنریشن دوباره محاسبه می‌شوند.",
          "راهنمای رسمی اتودسک یک سقف تقریبی برای یک فمیلی تعیین می‌کند: **بین ۲ تا ۳ مگابایت**، پیش از آنکه دلیل مشخصی برای حجم بیشتر لازم باشد. این عدد یک هشدار مفید است، نه یک هدف. دنبال‌کردن یک حجم کلی دلخواه برای کل کتابخانه وقت تلف می‌کند؛ دنبال‌کردن فمیلی‌هایی که از همین سقف رد شده‌اند، مشکل واقعی را پیدا می‌کند.",
        ],
      },
      {
        id: "purge",
        heading: "ابتدا موارد بلااستفاده را پاک کنید",
        image: purgeImg.fa,
        paragraphs: [
          "همه منابع معتبر درباره عملکرد رویت روی یک قدم اول توافق دارند: Purge Unused را اجرا کنید، و بیش از یک‌بار اجرا کنید. مرحله اول فمیلی‌ها، تایپ‌ها و متریال‌هایی را که دیگر هیچ نمونه‌ای در مدل ندارند حذف می‌کند. مرحله دوم و سوم چیزی را می‌گیرند که مرحله اول باز کرده، چون حذف یک فمیلی بلااستفاده گاهی یک فمیلی تودرتوی زیرش را هم آزاد می‌کند.",
          "این قدم سریع و کم‌ریسک است، اما به‌تنهایی به‌ندرت کافی است. شلوغی آشکار را پاک می‌کند تا قدم‌های بعدی بتوانند فمیلی‌هایی را پیدا کنند که واقعاً آسیب می‌زنند؛ یک فمیلی تودرتوی حجیم یا یک پارامتر با نام اشتباه را اصلاح نمی‌کند، چون هر دو از یک پاک‌سازی معمولی جان سالم به‌در می‌برند.",
        ],
      },
      {
        id: "downloaded-content",
        heading: "اول محتوای دانلودی را تمیز کنید",
        image: downloadedImg.fa,
        paragraphs: [
          "اغلب کتابخانه‌ها از کار داخلی شلوغ نشده‌اند؛ از فایل‌هایی شلوغ شده‌اند که از سایت یک تولیدکننده یا یک سایت محتوای رایگان دانلود و مستقیم در پروژه لود شده‌اند، چون یک ددلاین وقت بررسی نگذاشته بود. فمیلی‌های دانلودی رایج‌ترین منبع همان مشکلاتی هستند که این راهنما برای رفع آن‌ها نوشته شده: هندسه اضافه، فرمول‌هایی که به پارامترهای حذف‌شده اشاره می‌کنند، استایل اشیایی که با استاندارد دفتر همخوانی ندارد.",
          "با هر فمیلی دانلودی طوری رفتار کنید که تا وقتی جداگانه باز، بررسی و تمیز نشده، تأییدنشده حساب شود؛ نه داخل همان پروژه‌ای که فوری به آن نیاز داشت. این یعنی بررسی پیچیدگی هندسه، حذف پارامترهای تایپ بلااستفاده و بازنشانی هر متریالی که روی By Category تنظیم نشده، پیش از ورود به کتابخانه مشترک. فمیلی‌ای که از این مرحله رد می‌شود، معمولاً بعداً هزینه بیشتری برای اصلاح دارد تا اگر همان روز اول تمیز می‌شد.",
        ],
      },
      {
        id: "object-styles",
        heading: "استایل اشیا و پارامترهای یتیم را اصلاح کنید",
        image: objectStylesImg.fa,
        paragraphs: [
          "استایل اشیا مشخص می‌کند خطوط، هاشورها و ساب‌کتگوری‌های یک فمیلی چطور رندر و چاپ می‌شوند، و ناهماهنگی در آن‌ها یکی از رایج‌ترین دلایلی است که یک کتابخانه غیرحرفه‌ای به‌نظر می‌رسد حتی وقتی هندسه زیرش کاملاً درست است. استایل اشیا و ساب‌کتگوری‌ها را برای هر فمیلی آگاهانه تنظیم کنید، نه هرچه با فایل دانلودی آمده.",
          "همین مرحله باید پارامترهای یتیمِ به‌جامانده از یک ویرایش قبلی، فایل‌های پارامتر مشترکِ بلااستفاده‌ای که هنوز در فمیلی ارجاع داده می‌شوند و تایپ‌های تکراری‌ای را که فقط به این دلیل وجود دارند که کسی یک فمیلی را دوبار با دو نام مختلف لود کرده، پیدا کند. هیچ‌کدام از این‌ها در بررسی حجم فایل دیده نمی‌شوند. همه‌شان دیر یا زود به شکل یک خطای شیت یا تگی که پر نمی‌شود ظاهر می‌شوند.",
        ],
      },
      {
        id: "organize-library",
        heading: "کتابخانه را با استاندارد واقعی مرتب کنید",
        image: organizeImg.fa,
        paragraphs: [
          "یک فمیلی تمیزشده هم اگر کسی نتواند پیدایش کند، یا دو نفر دو نسخه متفاوت را با دو نام متفاوت ذخیره کنند، همچنان مشکل‌ساز است. قواعد نام‌گذاری، سلسله‌مراتب پوشه‌ها و قواعد دسته‌بندی باید یک استاندارد نوشته‌شده باشند که کل دفتر از آن پیروی می‌کند، نه عادتی که فقط یک نفر یادش می‌ماند؛ دقیقاً همین خلأ است که [کار ما روی محتوای BIM و رویت](/solutions) معمولاً برای پرکردنش وارد می‌شود.",
          "این استاندارد لازم نیست پیچیده باشد. سه چیز کافی است:",
        ],
        list: {
          items: [
            "یک **الگوی نام‌گذاری ثابت** که دسته و نوع را در خود دارد.",
            "ساختار پوشه‌ای که با نحوه واقعی جست‌وجوی افراد هماهنگ است، نه با نحوه اتفاقی رشد کتابخانه.",
            "یک نفر یا یک تیم که مسئول تأیید ورودی‌های جدید پیش از قرارگرفتن در کتابخانه مشترک باشد.",
          ],
        },
      },
      {
        id: "save-or-rebuild",
        heading: "نجات بدهید یا بازسازی کنید",
        image: saveRebuildImg.fa,
        paragraphs: [
          "هر فمیلی ارزش تمیزکردن ندارد. برخی با یک ساعت کار قابل‌نجات‌اند. برخی دیگر آن‌قدر ویرایش مستندنشده از افراد مختلف روی خود دارند که بازسازی از یک قالب تمیز، سریع‌تر از ردیابی مشکل است.",
          "همین‌جاست که صداقت درباره دامنه کار اهمیت دارد. اگر چند فمیلی محدود دارید و کسی درباره حجم فایل شکایتی نکرده، استخدام یک مشاور پاک‌سازی زیاده‌روی است: اول بیست دقیقه با Purge Unused و Compact on Save امتحان کنید. [کمک بیرونی برای بازسازی کتابخانه](/products/revit-families) زمانی لازم است که کتابخانه بین چند نفر مشترک است، مشکل اصلی خودِ استاندارد است، و مجموعه‌ای از فمیلی‌های به‌شدت پراکنده واقعاً بازسازی‌شان از یک استاندارد تمیز سریع‌تر از اصلاح تکه‌تکه است.",
        ],
      },
      {
        id: "maintain",
        heading: "با ممیزی دوره‌ای تمیز نگهش دارید",
        image: maintainImg.fa,
        paragraphs: [
          "یک پاک‌سازی یک‌باره چند ماه وقت می‌خرد، نه دائمی بودن. کتابخانه‌ها به‌طور پیش‌فرض به سمت شلوغی برمی‌گردند، چون لودکردن یک فمیلی جدید زیر فشار ددلاین همیشه از بررسی‌کردنش سریع‌تر است. تنها دفاع، یک ممیزی دوره‌ای است، نه یک تلاش یک‌باره بزرگ‌تر.",
          "پلاگین‌هایی که این بررسی‌ها را روی کل کتابخانه به‌صورت دسته‌ای انجام می‌دهند وجود دارند و ارزش استفاده دارند، اما فقط وقتی کتابخانه به‌قدر کافی تمیز باشد که این بررسی‌ها معنا داشته باشند؛ اجرای یکی از آن‌ها روی یک کتابخانه نامرتب فقط یک فهرست بلند تولید می‌کند که کسی به آن عمل نمی‌کند.",
          "یک بازه زمانی ثابت تعیین کنید؛ **فصلی** برای یک دفتر شلوغ پیش‌فرض معقولی است، و هر بار سه چیز را بررسی کنید:",
        ],
        list: {
          ordered: true,
          items: [
            "فمیلی‌های جدید در برابر استاندارد نام‌گذاری و استایل اشیا.",
            "حجم فایل‌ها در برابر سقف هر فمیلی.",
            "تایپ‌های تکراری‌ای که دوباره نفوذ کرده‌اند.",
          ],
        },
      },
    ],
    conclusion:
      "هدف واقعی، کتابخانه تمیز نیست؛ کتابخانه‌ای است که دیگر کسی مجبور نیست به آن فکر کند. این فقط زمانی اتفاق می‌افتد که استاندارد پیش از پاک‌سازی تعیین شده باشد، محتوای دانلودی پیش از اعتمادکردن بررسی شود، و ممیزیِ بعدی دنبال فمیلی‌های مشخصی که مشکل‌ساز هستند بگردد، نه اینکه همه‌چیز پاک شود به امید اینکه چیز درست اصلاح شده باشد.",
    internalHeading: "مطالب مرتبط",
    internalLinks: [
      { label: "محتوای تخصصی رویت", href: "/products/revit-families" },
      { label: "راهکار محتوای BIM و رویت", href: "/solutions" },
      { label: "ابزارهای دیجیتال اختصاصی", href: "/products/digital-tools" },
      { label: "درباره ما", href: "/about" },
    ],
    externalHeading: "منابع",
    externalLinks: [
      {
        label: "Autodesk — How to keep the size of Revit files manageable",
        href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Revit-How-to-keep-size-of-Revit-files-manageable.html",
      },
      { label: "buildingSMART International — Standards", href: "https://www.buildingsmart.org/standards/" },
    ],
    faqHeading: "پرسش‌های متداول",
    faq: [
      {
        question: "آیا برای بهینه‌سازی کتابخانه رویت حتماً باید کسی را استخدام کنیم؟",
        answer:
          "نه همیشه. اگر چند فمیلی محدود دارید و کسی درباره حجم فایل شکایتی نکرده، ابتدا بیست دقیقه با Purge Unused و Compact on Save امتحان کنید. کمک بیرونی زمانی لازم است که کتابخانه بین چند نفر مشترک است و مشکل اصلی خودِ استاندارد است، نه فقط حجم.",
      },
      {
        question: "Purge Unused دقیقاً چه چیزی را از رویت حذف می‌کند؟",
        answer:
          "فمیلی‌ها، تایپ‌ها، متریال‌ها و سایر عناصری که هیچ نمونه‌ای در مدل یا پروژه باز ندارند. به چیزی که هنوز استفاده می‌شود دست نمی‌زند، حتی اگر آن استفاده یک نمونه تنها و فراموش‌شده باشد، و یک فمیلی حجیم یا با نام اشتباه را که هنوز لود است اصلاح نمی‌کند.",
      },
      {
        question: "چطور بفهمیم کدام فمیلی‌ها واقعاً باعث مشکل حجم شده‌اند؟",
        answer:
          "پیش از پاک‌سازی، ممیزی کنید. فمیلی‌ها را بر اساس حجم مرتب کنید و ابتدا بزرگ‌ترین‌ها را برای هندسه ایمپورت‌شده از CAD یا جزئیات تودرتوی غیرضروری بررسی کنید؛ معمولاً بیشتر حجم همان‌جاست، نه به‌طور یکنواخت در کل کتابخانه.",
      },
      {
        question: "حداکثر حجم امن برای یک فمیلی رویت چقدر است؟",
        answer:
          "راهنمای رسمی اتودسک آن را حدود ۲ تا ۳ مگابایت می‌داند. فمیلی‌ای که خیلی از این عدد بیشتر است لزوماً اشتباه نیست، اما باید دلیل مشخصی برای حجمش داشته باشد، نه صرفاً این فرض که هندسه بزرگ‌تر یعنی جزئیات بهتر.",
      },
      {
        question: "آیا حذف فمیلی‌هایی که خودمان نساخته‌ایم امن است؟",
        answer:
          "فقط پس از بررسی اینکه آیا چیزی در پروژه فعلی هنوز به آن‌ها ارجاع می‌دهد. Purge Unused از قبل در برابر حذف فمیلی‌های با نمونه فعال محافظت می‌کند؛ فراتر از آن، هر چیزی باید همان ممیزی معمول را پیش از حذف از کتابخانه مشترک طی کند.",
      },
      {
        question: "آیا به‌جای لودکردن همه تایپ‌های یک فمیلی، باید از Type Catalog استفاده کنیم؟",
        answer:
          "بله، هر وقت یک فمیلی بیش از چند تایپ محدود دارد. Type Catalog اجازه می‌دهد پروژه فقط همان تایپ‌های مشخصی را که نیاز دارد لود کند، نه کل فمیلی را، که هم فمیلی و هم فایل پروژه را سبک‌تر نگه می‌دارد.",
      },
      {
        question: "پاک‌سازی کتابخانه قدیمی بهتر است یا بازسازی آن؟",
        answer:
          "به میزان پراکندگی آن بستگی دارد. کتابخانه‌ای با چند فمیلی ناهماهنگ ارزش پاک‌سازی دارد. کتابخانه‌ای با سال‌ها تغییر مستندنشده از افراد مختلف، معمولاً بازسازی از یک استاندارد تمیز سریع‌تر از اصلاح تکه‌تکه است.",
      },
      {
        question: "کتابخانه رویت واقعاً هر چند وقت باید ممیزی شود؟",
        answer:
          "فصلی برای یک دفتر شلوغ پیش‌فرض معقولی است. منتظرماندن برای شکایت یعنی صبرکردن تا کتابخانه از قبل آسیب واقعی زده باشد؛ یک بازه زمانی ثابت، شلوغی را وقتی هنوز چند فمیلی است می‌گیرد، نه کل کتابخانه.",
      },
    ],
  },
  en: {
    slug: "revit-library-optimization",
    meta: {
      title: "Revit Library Optimization: What to Fix First — ARTINEXT",
      description:
        "Revit library optimization means fixing the specific families causing trouble, not the whole library. A complete guide: purge, downloads, standards, audits.",
    },
    breadcrumb: "Revit library optimization isn't about deleting files",
    category: "BIM & Revit",
    title: "Revit library optimization isn't about deleting files",
    leadOpinion: "The most dangerous problem in a Revit library is rarely the biggest file — it's the one detail nobody checked.",
    publishedAt: "2026-08-19",
    publishedLabel: "Aug 19, 2026",
    updatedAt: "2026-08-23",
    updatedLabel: "Aug 23, 2026",
    author: {
      name: "ARTINEXT Team",
      role: "Digital Systems Studio",
      bio: "The team that builds BIM content, custom tools, and Revit automation for architecture and engineering offices.",
      href: "/about",
    },
    tocHeading: "Table of contents",
    toc: [
      { id: "overview", label: "The short answer" },
      { id: "file-size", label: "Why file size isn't the real problem" },
      { id: "purge", label: "Purge unused elements first" },
      { id: "downloaded-content", label: "Clean up downloaded content first" },
      { id: "object-styles", label: "Fix object styles and orphaned parameters" },
      { id: "organize-library", label: "Organize the library with real standards" },
      { id: "save-or-rebuild", label: "Save it or rebuild it" },
      { id: "maintain", label: "Keep it clean with a recurring audit" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    intro:
      "Revit library optimization means fixing the specific families and settings causing slow syncs, broken schedules, or oversized files, not shrinking the library as a whole. A library with forty families can fail constantly. One with four hundred can run clean for years. What breaks it is never the total count. **It's one detail buried in a handful of families**: a nested import, an orphaned parameter, a naming pattern nobody agreed on. Fix those, and file size takes care of itself.\n\nOne of our own team's debugging exams once came down to a single spelling mistake, the only deduction from a score of 23.5 out of 24, when the class high was 18. Revit libraries fail the same way. The biggest risk in a library is never the biggest file. It's the smallest thing nobody checked.",
    heroImage: heroImg.en,
    sections: [
      {
        id: "file-size",
        heading: "Why file size isn't the real problem",
        image: fileSizeImg.en,
        paragraphs: [
          "A Revit file's size is a symptom, not a diagnosis. Two offices can run libraries of wildly different sizes and have the opposite experience: the smaller one crashes weekly, the larger one never shows up in a support ticket. What actually predicts trouble is how many families in that library carry unnecessary weight: imported CAD geometry nobody flattened, families nested three levels deep, parameters that do nothing but still get recalculated on every regeneration.",
          "Autodesk's own guidance puts a rough ceiling on a single family at **2 to 3 MB** before it needs a very good reason to be that size. That number is a useful trigger, not a target. Chasing an arbitrary total library size wastes time; chasing the families that blow past that per-family ceiling finds the actual problem.",
        ],
      },
      {
        id: "purge",
        heading: "Purge unused elements first",
        image: purgeImg.en,
        paragraphs: [
          "Every credible source on Revit performance agrees on one first move: run Purge Unused, and run it more than once. The first pass removes families, types, and materials with no instances left in the model. The second and third pass catch what the first one unlocked, since removing one unused family sometimes frees up a nested one underneath it.",
          "This step is fast, low-risk, and rarely enough on its own. It clears the obvious clutter so the next steps can find the families still causing real damage. It won't fix an oversized nested family or a mislabeled parameter, both of which survive an ordinary purge untouched.",
        ],
      },
      {
        id: "downloaded-content",
        heading: "Clean up downloaded content first",
        image: downloadedImg.en,
        paragraphs: [
          "Most libraries didn't get messy from in-house work. They got messy from files pulled off a manufacturer's website or a free content site, loaded straight into a project because a deadline didn't leave time to check them first. Downloaded families are the single most common source of the problems this guide is written to fix: excess geometry, formulas referencing deleted parameters, object styles that don't match the office standard.",
          "Treat every downloaded family as unverified until it's been opened, checked, and cleaned on its own, not inside the project that needed it urgently. That means checking geometry complexity, stripping unused type parameters, and resetting any material assignment that isn't set to By Category before it enters the shared library. A family that skips this step usually costs more to fix later than it would have cost to clean on day one.",
        ],
      },
      {
        id: "object-styles",
        heading: "Fix object styles and orphaned parameters",
        image: objectStylesImg.en,
        paragraphs: [
          "Object styles decide how a family's lines, fills, and subcategories render and print, and inconsistent ones are one of the most common reasons a library looks unprofessional even when the geometry underneath is fine. Set object styles and subcategories deliberately for every family, not by whatever came in with the download.",
          "The same pass should catch orphaned parameters left behind by a previous edit, unused shared parameter files still referenced in a family that no longer needs them, and duplicate types that exist only because someone loaded the same family twice under different names. None of these show up in a file-size check. All of them show up eventually as a scheduling error or a tag that won't populate.",
        ],
      },
      {
        id: "organize-library",
        heading: "Organize the library with real standards",
        image: organizeImg.en,
        paragraphs: [
          "A cleaned-up family still causes problems if nobody can find it, or if two people save two different versions under two different names. Naming conventions, folder hierarchy, and category rules need to be a written standard the whole office follows, not a habit one person remembers — this is exactly the gap our [BIM & Revit content work](/solutions) is usually brought in to close.",
          "The standard doesn't need to be elaborate. It needs three things:",
        ],
        list: {
          items: [
            "A **consistent naming pattern** that encodes category and type.",
            "A folder structure that matches how people actually search, not how the library happened to grow.",
            "One person or team responsible for approving new additions before they land in the shared library.",
          ],
        },
      },
      {
        id: "save-or-rebuild",
        heading: "Save it or rebuild it",
        image: saveRebuildImg.en,
        paragraphs: [
          "Not every family is worth cleaning. Some are worth salvaging with an hour of work. Others carry so many undocumented edits from so many different people that rebuilding from a clean template is faster than tracing what's wrong.",
          "This is also the point where it's worth being honest about scope. If it's a handful of families and nobody has complained about file size, a cleanup consultant is overkill: spend twenty minutes with Purge Unused and Compact on Save first. Bring in [outside help rebuilding the library](/products/revit-families) when it's shared across a team, the standard itself is the problem, and a badly fragmented set of families would genuinely take longer to patch than to rebuild against a clean standard.",
        ],
      },
      {
        id: "maintain",
        heading: "Keep it clean with a recurring audit",
        image: maintainImg.en,
        paragraphs: [
          "A one-time cleanup buys a few months, not permanence. Libraries drift back toward mess by default, because loading a new family under deadline pressure is always faster than checking it first. The only defense is a recurring audit, not a bigger one-time effort.",
          "Plugins that batch-check families across a whole library exist and are worth using, but only once the library is clean enough that the checks mean something; running one against an unorganized library just produces a long list nobody acts on.",
          "Set a fixed cadence — **quarterly** is a reasonable default for a busy office — and check three things every time:",
        ],
        list: {
          ordered: true,
          items: [
            "New families against the naming and object-style standard.",
            "File sizes against the per-family ceiling.",
            "Duplicate types that crept back in.",
          ],
        },
      },
    ],
    conclusion:
      "A clean library isn't the actual goal. A library nobody has to think about is. That only happens when the standard is set before cleanup starts, downloaded content gets checked before it's trusted, and the audit that follows looks for the specific families causing trouble instead of purging everything and hoping the right thing got fixed.",
    internalHeading: "Related reading",
    internalLinks: [
      { label: "Specialist Revit content", href: "/products/revit-families" },
      { label: "BIM & Revit content solution", href: "/solutions" },
      { label: "Custom digital tools", href: "/products/digital-tools" },
      { label: "About us", href: "/about" },
    ],
    externalHeading: "Further reading",
    externalLinks: [
      {
        label: "Autodesk — How to keep the size of Revit files manageable",
        href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Revit-How-to-keep-size-of-Revit-files-manageable.html",
      },
      { label: "buildingSMART International — Standards", href: "https://www.buildingsmart.org/standards/" },
    ],
    faqHeading: "FAQ",
    faq: [
      {
        question: "Do we need to hire someone to optimize our Revit library?",
        answer:
          "Not always. If it's a handful of families and nobody has complained about file size, spend twenty minutes with Purge Unused and Compact on Save before considering anything else. Bring in outside help when the library is shared across a team and the standard itself, not just file size, is the real problem.",
      },
      {
        question: "What does Purge Unused actually remove in Revit?",
        answer:
          "Families, types, materials, and other elements with zero instances left in the open model or project. It doesn't touch anything still in use, even if that use is a single, forgotten instance, and it won't fix an oversized or mislabeled family that's still loaded.",
      },
      {
        question: "How do we find which families are actually causing the file size problem?",
        answer:
          "Audit before you purge. Sort families by file size and check the largest ones first for imported CAD geometry or unnecessary nested detail; that's usually where most of the size lives, not spread evenly across the library.",
      },
      {
        question: "What's a safe maximum size for a single Revit family?",
        answer:
          "Autodesk's own guidance puts it around 2 to 3 MB. A family well past that isn't automatically wrong, but it needs a specific reason for its size, not just an assumption that bigger geometry means better detail.",
      },
      {
        question: "Is it safe to delete families we didn't create ourselves?",
        answer:
          "Only after checking whether anything in the current project still references them. Purge Unused already protects against deleting families with live instances; anything beyond that should go through the same audit as everything else before it's removed from the shared library.",
      },
      {
        question: "Should we use type catalogs instead of loading every family type?",
        answer:
          "Yes, whenever a family has more than a handful of types. A type catalog lets a project load only the specific types it needs instead of the entire family, which keeps both the family and the project file lighter.",
      },
      {
        question: "Is it better to clean up an old library or rebuild it?",
        answer:
          "Depends how fragmented it is. A library with a handful of inconsistent families is worth cleaning. A library with years of undocumented changes from different people is often faster to rebuild against a clean standard than to patch.",
      },
      {
        question: "How often should a Revit library actually be audited?",
        answer:
          "Quarterly is a reasonable default for a busy office. Waiting for complaints means waiting until the library is already causing real damage; a fixed cadence catches drift while it's still a few families, not the whole library.",
      },
    ],
  },
};
