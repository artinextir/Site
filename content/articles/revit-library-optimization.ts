import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-library-optimization";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-library-optimization-blueprint", {
  fa: "نقشه‌ی معماری با پلان اندازه‌گذاری‌شده، برای نوشته‌ای درباره‌ی بهینه‌سازی کتابخانه رویت",
  en: "An architectural drawing with a dimensioned floor plan, for a piece on Revit library optimization",
});
const fileSize = img("revit-file-size-workspace", {
  fa: "لپ‌تاپ با کد روی صفحه، برای بررسی عوامل حجم فایل رویت",
  en: "A laptop with code on screen, for looking at what drives Revit file size",
});
const objectStyles = img("revit-object-styles-detail", {
  fa: "مداد، متر و نقشه‌ی فنی روی میز، برای بررسی Object Styles و جزئیات خطوط فمیلی",
  en: "Pencils, a folding rule and a technical drawing, for checking object styles and line detail",
});
const rebuild = img("rebuild-revit-library-standard", {
  fa: "اسکلت فولادی در حال ساخت، برای بازسازی کتابخانه رویت بر اساس یک استاندارد تمیز",
  en: "A steel frame under construction, for rebuilding a Revit library against a clean standard",
});

export const revitLibraryOptimization: ArticlePage = {
  slug: "revit-library-optimization",
  content: {
    fa: {
      slug: "revit-library-optimization",
      meta: {
        title: "بهینه‌سازی کتابخانه رویت؛ از پاک‌سازی تا استاندارد، آرتینکست",
        description:
          "بهینه‌سازی کتابخانه رویت یعنی اصلاح فمیلی‌هایی که مشکل ایجاد می‌کنند، نه کوچک‌کردن کل کتابخانه. پاک‌سازی، محتوای دانلودی، Object Styles، استاندارد و ارزیابی دوره‌ای.",
      },
      keywords: [
        "بهینه‌سازی کتابخانه رویت",
        "کاهش حجم فایل رویت",
        "پاک‌سازی فمیلی رویت",
        "استاندارد کتابخانه رویت",
        "مدیریت کتابخانه فمیلی رویت",
      ],
      breadcrumb: "بهینه‌سازی کتابخانه رویت",
      category: "BIM و Revit",
      title: "بهینه‌سازی کتابخانه رویت فقط حذف فایل نیست",
      leadOpinion:
        "خطرناک‌ترین مشکل یک کتابخانه‌ی رویت معمولاً بزرگ‌ترین فایل نیست، بلکه جزئیاتی است که کسی آن را بررسی نکرده است.",
      publishedAt: "2026-08-19",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که محتوای BIM، ابزارهای اختصاصی و اتوماسیون رویت را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "file-size", label: "حجم فایل، مشکل اصلی نیست" },
        { id: "purge", label: "پاک‌سازی موارد بی‌استفاده" },
        { id: "downloaded-content", label: "محتوای دانلودی" },
        { id: "object-styles", label: "Object Styles و پارامترها" },
        { id: "model-weight", label: "عوامل دیگر سنگینی مدل" },
        { id: "organize-library", label: "استاندارد مکتوب کتابخانه" },
        { id: "save-or-rebuild", label: "پاک‌سازی یا بازسازی" },
        { id: "lighter-families", label: "فمیلی‌های سبک از ابتدا" },
        { id: "version-upgrades", label: "ارتقا با هر نسخه‌ی رویت" },
        { id: "maintain", label: "ارزیابی دوره‌ای" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "بهینه‌سازی کتابخانه رویت یعنی اصلاح فمیلی‌ها و تنظیمات مشخصی که باعث کندی سینک، خطا در اسکجوال‌ها یا حجم زیاد فایل می‌شوند، نه کوچک‌کردن کل کتابخانه. کتابخانه‌ای کوچک ممکن است دائماً مشکل ایجاد کند و کتابخانه‌ای بزرگ سال‌ها بدون مشکل کار کند. عامل اصلی هیچ‌وقت تعداد کل فمیلی‌ها نیست، **بلکه یک جزئیات مشخص در چند فمیلی است**: یک فایل واردشده‌ی تودرتو، یک پارامتر بی‌استفاده یا الگوی نام‌گذاری‌ای که درباره‌ی آن توافق نشده است. با اصلاح همین موارد، مشکل حجم فایل نیز تا حد زیادی برطرف می‌شود.\n\nدر یکی از امتحان‌های دیباگ دوران تحصیل بنیان‌گذار آرتینکست، تنها کسر نمره به یک غلط املایی مربوط بود: نمره‌ی ۲۳٫۵ از ۲۴، در کلاسی که بالاترین نمره‌ی بقیه ۱۸ بود. کتابخانه‌های رویت نیز به همین شکل دچار مشکل می‌شوند. بزرگ‌ترین ریسک کتابخانه به‌ندرت بزرگ‌ترین فایل است، بلکه کوچک‌ترین موردی است که کسی آن را بررسی نکرده است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "file-size",
          heading: "چرا حجم فایل مشکل اصلی نیست",
          image: fileSize.fa,
          paragraphs: [
            "حجم فایل رویت یک نشانه است، نه تشخیص مشکل. دو دفتر ممکن است کتابخانه‌هایی با حجم کاملاً متفاوت داشته باشند و تجربه‌ای برعکس یکدیگر داشته باشند. آنچه مشکل را پیش‌بینی می‌کند، تعداد فمیلی‌هایی است که وزن غیرضروری دارند: هندسه‌ی CAD واردشده‌ای که بازسازی نشده، فمیلی‌هایی با چند لایه‌ی تودرتو و پارامترهایی که کاربردی ندارند، اما در هر ریجنریت دوباره محاسبه می‌شوند.",
            "راهنمای ArchOverFlow درباره‌ی حجم فایل و عملکرد رویت این معیار را صریح بیان می‌کند: بیشتر فمیلی‌ها باید زیر **۱ مگابایت** و تقریباً همه‌ی آن‌ها زیر **۳ مگابایت** باشند. این اعداد را نشانه‌ای برای بررسی دقیق‌تر در نظر بگیرید، نه هدف. دنبال‌کردن حجم کلی کتابخانه زمان را هدر می‌دهد، اما بررسی فمیلی‌هایی که از این حد عبور کرده‌اند، مشکل واقعی را مشخص می‌کند.",
          ],
        },
        {
          id: "purge",
          heading: "ابتدا موارد بی‌استفاده را پاک کنید",
          paragraphs: [
            "همه‌ی راهنماهای معتبر درباره‌ی عملکرد رویت از یک نقطه شروع می‌کنند: اجرای Purge Unused، آن هم بیش از یک‌بار. مرحله‌ی اول، فمیلی‌ها، تایپ‌ها و متریال‌هایی را که هیچ نمونه‌ای در مدل ندارند حذف می‌کند. مراحل بعدی مواردی را پاک می‌کنند که پس از مرحله‌ی اول آزاد شده‌اند، زیرا حذف یک فمیلی ممکن است فمیلی تودرتوی زیر آن را نیز بی‌استفاده کند.",
            "این مرحله سریع و کم‌ریسک است، اما به‌تنهایی به‌ندرت کافی است. شلوغی آشکار را پاک می‌کند تا در مراحل بعد، فمیلی‌هایی که همچنان مشکل ایجاد می‌کنند پیدا شوند. فمیلی تودرتوی حجیم یا پارامتری با نام نادرست با این مرحله اصلاح نمی‌شود، زیرا هر دو پس از پاک‌سازی معمولی باقی می‌مانند.",
          ],
        },
        {
          id: "downloaded-content",
          heading: "محتوای دانلودی را پیش از ورود به کتابخانه پاک‌سازی کنید",
          paragraphs: [
            "بیشتر کتابخانه‌ها به دلیل کار داخلی نامرتب نشده‌اند، بلکه به دلیل فایل‌هایی که از سایت تولیدکنندگان یا سایت‌های محتوای رایگان دانلود شده‌اند و به دلیل کمبود زمان، بدون بررسی مستقیماً در پروژه بارگذاری شده‌اند. فمیلی‌های دانلودی رایج‌ترین منبع هندسه‌ی اضافه، فرمول‌هایی که به پارامترهای حذف‌شده ارجاع می‌دهند و Object Styles ناسازگار با استاندارد دفتر هستند.",
            "هر فمیلی دانلودی را تا زمانی که جداگانه باز، بررسی و پاک‌سازی نشده، تأییدنشده در نظر بگیرید، نه در همان پروژه‌ای که فوراً به آن نیاز داشت. پیش از ورود به کتابخانه‌ی مشترک، هندسه را بررسی کنید، پارامترهای تایپ بی‌استفاده را حذف کنید و متریال‌هایی را که روی By Category تنظیم نشده‌اند اصلاح کنید. فمیلی‌ای که از این مرحله عبور نکند، بعدها هزینه‌ی اصلاح بیشتری نسبت به پاک‌سازی در روز اول دارد.",
          ],
        },
        {
          id: "object-styles",
          heading: "Object Styles و پارامترهای بی‌استفاده را اصلاح کنید",
          image: objectStyles.fa,
          paragraphs: [
            "Object Styles تعیین می‌کند خطوط، هاشورها و ساب‌کتگوری‌های یک فمیلی چگونه نمایش داده و چاپ شوند. ناهماهنگی در این تنظیمات، یکی از رایج‌ترین دلایلی است که کتابخانه حتی با هندسه‌ی درست، غیرحرفه‌ای به نظر می‌رسد. این تنظیمات را برای هر فمیلی آگاهانه تعیین کنید، نه بر اساس آنچه همراه فایل دانلودی آمده است.",
            "در همین مرحله، پارامترهای بی‌استفاده‌ی باقی‌مانده از ویرایش‌های قبلی، فایل‌های Shared Parameter که هنوز در فمیلی‌ها ارجاع داده می‌شوند و تایپ‌های تکراری که فقط به دلیل دو بار بارگذاری یک فمیلی با دو نام متفاوت وجود دارند نیز باید پیدا شوند. هیچ‌کدام از این موارد در بررسی حجم فایل دیده نمی‌شوند، اما همه‌ی آن‌ها دیر یا زود به‌شکل خطا در اسکجوال یا تگی که مقدار نمی‌گیرد، ظاهر می‌شوند.",
          ],
        },
        {
          id: "model-weight",
          heading: "عوامل دیگری که مدل را سنگین می‌کنند",
          paragraphs: [
            "فمیلی‌ها معمولاً اولین مورد بررسی هستند، اما تنها عامل نیستند. در همین بازبینی این موارد را نیز بررسی کنید:",
          ],
          list: {
            items: [
              "**هشدارها (Warnings)** که رسیدگی نشده و انباشته شده‌اند؛ هرکدام یک مشکل حل‌نشده است که رویت آن را نگه می‌دارد.",
              "**ویوتمپلیت‌ها و ویوهای بی‌استفاده** که پروژه را شلوغ می‌کنند و ممکن است بدون اطلاع کسی، تنظیمات را تغییر دهند.",
              "**تصاویری که با وضوح کامل بارگذاری شده‌اند** و در مدل کوچک شده‌اند؛ رویت فایل کامل را نگه می‌دارد.",
              "**فمیلی‌های In-Place** در جایی که باید از فمیلی قابل‌استفاده‌ی مجدد استفاده می‌شد.",
              "**فایل‌های CAD واردشده** در جایی که Link یا هندسه‌ی بومی کافی بود.",
            ],
          },
          after: [
            "هیچ‌کدام از این موارد به‌تنهایی مشکل بزرگی ایجاد نمی‌کند، اما مجموع آن‌ها تفاوت میان مدلی است که سریع باز می‌شود و مدلی که باز شدنش زمان زیادی می‌برد.",
          ],
        },
        {
          id: "organize-library",
          heading: "کتابخانه را بر اساس یک استاندارد مکتوب مرتب کنید",
          paragraphs: [
            "فمیلی پاک‌سازی‌شده اگر قابل‌پیداکردن نباشد یا دو نفر دو نسخه‌ی آن را با دو نام متفاوت ذخیره کنند، همچنان مشکل‌ساز است. قواعد نام‌گذاری، ساختار پوشه‌ها و دسته‌بندی باید یک استاندارد مکتوب باشند که کل دفتر از آن پیروی می‌کند، نه عادتی که فقط یک نفر به یاد دارد.",
            "این استاندارد لازم نیست پیچیده باشد و سه مورد برای آن کافی است:",
          ],
          list: {
            items: [
              "یک **الگوی ثابت نام‌گذاری** که دسته و نوع را مشخص می‌کند.",
              "ساختار پوشه‌ای که با روش واقعی جست‌وجوی افراد هماهنگ است، نه با روند اتفاقی رشد کتابخانه.",
              "یک نفر یا یک تیم که مسئول تأیید فمیلی‌های جدید پیش از ورود به کتابخانه‌ی مشترک است.",
            ],
          },
          after: [
            "این همان پایه‌ای است که هر پروژه‌ی [ساخت فمیلی رویت](/revit-family-creation/) از آن شروع می‌شود، چه فمیلی‌ها جدید باشند و چه بازسازی شوند.",
          ],
        },
        {
          id: "save-or-rebuild",
          heading: "پاک‌سازی یا بازسازی",
          image: rebuild.fa,
          paragraphs: [
            "هر فمیلی ارزش پاک‌سازی ندارد. برخی را می‌توان در یک ساعت اصلاح کرد و برخی دیگر آن‌قدر ویرایش مستندنشده از افراد مختلف دارند که بازسازی از یک قالب تمیز سریع‌تر از پیداکردن مشکل است.",
            "در این مرحله درباره‌ی دامنه‌ی کار واقع‌بین باشید. اگر فقط چند فمیلی محدود دارید و کسی از حجم فایل شکایتی ندارد، به مشاور نیازی نیست، از جمله ما؛ ابتدا Purge Unused را اجرا کنید و فایل را با گزینه‌ی Compact File ذخیره کنید. [کمک بیرونی برای کتابخانه](/products/#revit-families) زمانی لازم است که کتابخانه میان یک تیم مشترک است، مشکل اصلی خود استاندارد است و مجموعه‌ای از فمیلی‌های پراکنده، اصلاح تدریجی را از بازسازی کندتر می‌کند.",
          ],
        },
        {
          id: "lighter-families",
          heading: "فمیلی‌های جدید را از ابتدا سبک بسازید",
          paragraphs: [
            "هر فمیلی که بازسازی می‌شود و هر فمیلی جدیدی که پس از پاک‌سازی به کتابخانه اضافه می‌شود، فرصتی است تا حجم اضافه دوباره به کتابخانه بازنگردد. بیشتر هزینه‌ی یک فمیلی در مدل به شیوه‌ی مدل‌سازی آن مربوط است، نه به میزان جزئیاتی که نمایش می‌دهد، و با رعایت سه اصل می‌توان این هزینه را پایین نگه داشت:",
          ],
          list: {
            items: [
              "**سطح جزئیات (Detail Level) برای پنهان‌سازی.** هندسه‌ی ریز، مانند دستگیره‌ها، پیچ‌ها و پروفیل‌های تزئینی، فقط به سطح Fine اختصاص داده شود تا نماهای Coarse و Medium نیازی به ترسیم آن نداشته باشند.",
              "**Symbolic Lines برای نماهای پلان.** نماد پلانی که با Symbolic Lines و Masking Region ترسیم شده، از برش هندسه‌ی کامل سه‌بعدی سبک‌تر و خواناتر است و مطابق استاندارد دفتر چاپ می‌شود.",
              "**آرایه، Void و فمیلی‌های تودرتو فقط در جای ضروری.** هرکدام از این موارد، در هر بار به‌روزرسانی هندسه‌ی فمیلی، محاسبات بیشتری ایجاد می‌کند. فمیلی تودرتویی که هرگز به‌تنهایی در اسکجوال شمارش یا جایگزین نمی‌شود، معمولاً بهتر است مستقیماً در فمیلی میزبان مدل شود.",
            ],
          },
          after: [
            "هیچ‌کدام از این موارد به ابزار خاصی نیاز ندارد، اما باید در استاندارد کتابخانه نوشته شود تا فرد بعدی نیز فمیلی را با همان روش بسازد. [راهنمای ساخت فمیلی پارامتریک](/articles/custom-parametric-revit-family-creation/) جنبه‌ی پارامترها را در همین چارچوب بررسی می‌کند.",
          ],
        },
        {
          id: "version-upgrades",
          heading: "کتابخانه را با هر نسخه‌ی جدید رویت، یک‌بار ارتقا دهید",
          paragraphs: [
            "فایلی که در نسخه‌ی جدیدتر رویت ذخیره شده، در نسخه‌ی قدیمی‌تر باز نمی‌شود و فمیلی‌ای که در نسخه‌ی قدیمی‌تر ساخته شده، هر بار که در پروژه‌ای با نسخه‌ی جدیدتر بارگذاری شود، ارتقا پیدا می‌کند. در نتیجه، وقتی کتابخانه در نسخه‌ی قدیمی باقی می‌ماند، زمان ارتقا در هر پروژه و برای هر عضو تیم دوباره صرف می‌شود و نسخه‌های ارتقایافته به‌جای کتابخانه، در فایل‌های پروژه پراکنده می‌شوند.",
            "راه‌حل، یک قاعده‌ی ساده است: هنگام انتقال دفتر به نسخه‌ی جدید رویت، کل کتابخانه یک‌بار ارتقا داده شود، نمونه‌ای از فمیلی‌های ارتقایافته در یک پروژه‌ی آزمایشی تست شود و کتابخانه‌ی نسخه‌ی قبلی، برای پروژه‌هایی که در همان نسخه ادامه پیدا می‌کنند، به‌صورت فقط‌خواندنی (Read-only) نگه داشته شود. نسخه‌ی هر پوشه باید از نام آن مشخص باشد تا کسی فمیلی را از پوشه‌ی اشتباه بارگذاری نکند.",
            "این مرحله، کم‌هزینه‌ترین زمان برای ارزیابی کتابخانه نیز هست، زیرا همه‌ی فمیلی‌ها در هر صورت باز می‌شوند. با انجام بررسی‌های فصلی بخش بعد در همین مرحله، ارزیابی به بخشی از کاری تبدیل می‌شود که دفتر در هر حال انجام می‌دهد.",
          ],
        },
        {
          id: "maintain",
          heading: "با ارزیابی دوره‌ای کتابخانه را مرتب نگه دارید",
          paragraphs: [
            "یک پاک‌سازی یک‌باره تنها چند ماه اثر دارد. کتابخانه‌ها به‌طور طبیعی دوباره نامرتب می‌شوند، زیرا بارگذاری یک فمیلی جدید زیر فشار زمان‌بندی همیشه سریع‌تر از بررسی آن است. تنها راه‌حل، ارزیابی دوره‌ای است، نه یک تلاش یک‌باره‌ی بزرگ‌تر.",
            "ابزارهای بررسی دسته‌ای زمانی ارزش استفاده دارند که کتابخانه به اندازه‌ی کافی مرتب باشد تا نتیجه‌ی آن‌ها معنادار شود. [کنترل‌کننده مدل با چک‌ستی بر اساس قواعد دفتر شما](/articles/revit-model-checker/) قدم بعدی است؛ اجرای آن روی کتابخانه‌ای نامرتب فقط فهرست بلندی تولید می‌کند که کسی بر اساس آن اقدام نمی‌کند.",
            "یک بازه‌ی زمانی ثابت تعیین کنید؛ اجرای **فصلی** برای یک دفتر پرکار پیش‌فرض مناسبی است و در هر نوبت، سه مورد را بررسی کنید:",
          ],
          list: {
            ordered: true,
            items: [
              "فمیلی‌های جدید بر اساس استاندارد نام‌گذاری و Object Styles.",
              "حجم فایل‌ها در مقایسه با حد مجاز هر فمیلی.",
              "تایپ‌های تکراری که دوباره به کتابخانه وارد شده‌اند.",
            ],
          },
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "هدف واقعی، کتابخانه‌ی تمیز نیست، بلکه کتابخانه‌ای است که دیگر کسی مجبور نباشد به آن فکر کند. این اتفاق تنها زمانی رخ می‌دهد که استاندارد پیش از پاک‌سازی تعیین شده باشد، محتوای دانلودی پیش از استفاده بررسی شود و ارزیابی‌های بعدی به‌جای پاک‌کردن همه‌چیز، به‌دنبال فمیلی‌های مشخصی باشند که مشکل ایجاد می‌کنند.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "ساخت فمیلی رویت", href: "/revit-family-creation/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
        { label: "ساخت فمیلی پارامتریک رویت", href: "/articles/custom-parametric-revit-family-creation/" },
        { label: "فمیلی رویت در صفحه‌ی محصولات", href: "/products/#revit-families" },
        { label: "درباره ما", href: "/about/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "ArchOverFlow, Managing Revit File Size & Performance", href: "https://archoverflow.com/managing-revit-file-size-performance/" },
        { label: "GRAITEC, Why Your Revit Model Is Slow, and How To Fix It", href: "https://graitec.com/ca-en/blog/why-revit-model-is-slow-how-to-fix-it/" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا برای بهینه‌سازی کتابخانه رویت باید کسی را استخدام کنیم؟",
          answer:
            "همیشه خیر. اگر چند فمیلی محدود دارید و کسی شکایتی ندارد، ابتدا Purge Unused را اجرا کنید و فایل را با گزینه‌ی Compact File ذخیره کنید. کمک بیرونی زمانی ارزش دارد که کتابخانه میان یک تیم مشترک است و مشکل اصلی خود استاندارد است، نه فقط حجم فایل.",
        },
        {
          question: "Purge Unused دقیقاً چه چیزی را حذف می‌کند؟",
          answer:
            "فمیلی‌ها، تایپ‌ها، متریال‌ها و سایر المان‌هایی که هیچ نمونه‌ای در مدل باز ندارند. به مواردی که هنوز استفاده می‌شوند، حتی اگر فقط یک نمونه‌ی فراموش‌شده باشد، دست نمی‌زند و فمیلی حجیم یا با نام نادرستی را که هنوز بارگذاری شده است، اصلاح نمی‌کند.",
        },
        {
          question: "چگونه بفهمیم کدام فمیلی‌ها باعث افزایش حجم شده‌اند؟",
          answer:
            "پیش از پاک‌سازی، ارزیابی کنید. فمیلی‌ها را بر اساس حجم مرتب کنید و بزرگ‌ترین‌ها را از نظر هندسه‌ی CAD واردشده یا جزئیات تودرتوی غیرضروری بررسی کنید؛ بیشتر حجم معمولاً در همین فمیلی‌هاست.",
        },
        {
          question: "حداکثر حجم مناسب برای یک فمیلی رویت چقدر است؟",
          answer:
            "راهنمای ArchOverFlow این حد را برای بیشتر فمیلی‌ها زیر ۱ مگابایت و تقریباً برای همه‌ی آن‌ها زیر ۳ مگابایت تعیین می‌کند. فمیلی‌ای که بسیار بزرگ‌تر از این حد است الزاماً اشتباه نیست، اما باید دلیل مشخص و مستندی برای حجم خود داشته باشد، مانند جزئیاتی که تولیدکننده الزام کرده است.",
        },
        {
          question: "آیا حذف فمیلی‌هایی که خودمان نساخته‌ایم بی‌خطر است؟",
          answer:
            "تنها پس از بررسی اینکه چیزی در پروژه‌ی فعلی به آن‌ها ارجاع نمی‌دهد. Purge Unused از حذف فمیلی‌هایی که نمونه‌ی فعال دارند جلوگیری می‌کند؛ فراتر از آن، هر فمیلی پیش از حذف از کتابخانه‌ی مشترک باید همان ارزیابی معمول را طی کند.",
        },
        {
          question: "آیا به‌جای بارگذاری همه‌ی تایپ‌ها باید از Type Catalog استفاده کنیم؟",
          answer:
            "بله، هر زمان که یک فمیلی بیش از چند تایپ محدود دارد. Type Catalog امکان می‌دهد پروژه فقط تایپ‌های مورد نیاز را بارگذاری کند، نه کل فمیلی را، و در نتیجه هم فمیلی و هم فایل پروژه سبک‌تر می‌مانند.",
        },
        {
          question: "پاک‌سازی کتابخانه‌ی قدیمی بهتر است یا بازسازی آن؟",
          answer:
            "به میزان پراکندگی آن بستگی دارد. کتابخانه‌ای با چند فمیلی ناهماهنگ ارزش پاک‌سازی دارد، اما در کتابخانه‌ای با سال‌ها تغییر مستندنشده از افراد مختلف، بازسازی بر اساس یک استاندارد تمیز معمولاً سریع‌تر از اصلاح تدریجی است.",
        },
        {
          question: "کتابخانه رویت را هر چند وقت یک‌بار باید ارزیابی کرد؟",
          answer:
            "اجرای فصلی برای یک دفتر پرکار پیش‌فرض مناسبی است. منتظرماندن برای شکایت یعنی صبر تا زمانی که کتابخانه مشکل واقعی ایجاد کرده باشد؛ با بازه‌ی زمانی ثابت، نامرتبی زمانی پیدا می‌شود که هنوز محدود به چند فمیلی است.",
        },
      ],
    },
    en: {
      slug: "revit-library-optimization",
      meta: {
        title: "Revit Library Optimization: What to Fix First, ARTINEXT",
        description:
          "Revit library optimization means fixing the specific families causing trouble, not shrinking the library. Purge, downloads, object styles, standards and audits.",
      },
      keywords: [
        "revit library optimization",
        "office revit library standards",
        "reduce revit file size",
        "revit family cleanup service",
        "bim content outsourcing",
      ],
      breadcrumb: "Revit library optimization",
      category: "BIM & Revit",
      title: "Revit library optimization isn't about deleting files",
      leadOpinion:
        "The most dangerous problem in a Revit library is rarely the biggest file. It's the one detail nobody checked.",
      publishedAt: "2026-08-19",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds BIM content, custom tools and Revit automation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "file-size", label: "Why file size isn't the problem" },
        { id: "purge", label: "Purge unused elements first" },
        { id: "downloaded-content", label: "Clean downloaded content" },
        { id: "object-styles", label: "Object styles and parameters" },
        { id: "model-weight", label: "What else weighs a model down" },
        { id: "organize-library", label: "A written library standard" },
        { id: "save-or-rebuild", label: "Save it or rebuild it" },
        { id: "lighter-families", label: "Build new families light" },
        { id: "version-upgrades", label: "Upgrade once per release" },
        { id: "maintain", label: "A recurring audit" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Revit library optimization means fixing the specific families and settings behind slow syncs, broken schedules and oversized files, not shrinking the library as a whole. A small library can fail constantly while a large one runs clean for years. What breaks it is never the total count. **It is one detail buried in a handful of families**: a nested import, an orphaned parameter, a naming pattern nobody agreed on. Fix those, and file size largely takes care of itself.\n\nOne of the founder's debugging exams at school came down to a single spelling mistake, the only deduction from 23.5 out of 24 in a class where the highest score was 18. Revit libraries fail the same way. The biggest risk is rarely the biggest file. It is the smallest thing nobody checked.",
      heroImage: hero.en,
      sections: [
        {
          id: "file-size",
          heading: "Why file size isn't the real problem",
          image: fileSize.en,
          paragraphs: [
            "A Revit file's size is a symptom, not a diagnosis. Two offices can run libraries of very different sizes and have the opposite experience. What predicts trouble is how many families carry weight they do not need: imported CAD geometry nobody rebuilt, families nested several levels deep, parameters that do nothing but are recalculated on every regeneration.",
            "ArchOverFlow's guide to Revit file size and performance puts it plainly: the vast majority of families should be below **1 MB**, and almost all of them below **3 MB**. Treat those numbers as a trigger for a closer look, not a target. Chasing a total library size wastes time; chasing the families past that ceiling finds the actual problem.",
          ],
        },
        {
          id: "purge",
          heading: "Purge unused elements first",
          paragraphs: [
            "Every serious guide to Revit performance starts in the same place: run Purge Unused, and run it more than once. The first pass removes families, types and materials with no instances left. Later passes catch what the first one freed, because removing one family can release a nested one beneath it.",
            "It is fast, low-risk and rarely enough on its own. It clears the obvious clutter so the next steps can find the families still doing damage. It will not fix an oversized nested family or a mislabelled parameter; both survive an ordinary purge.",
          ],
        },
        {
          id: "downloaded-content",
          heading: "Clean downloaded content before it enters the library",
          paragraphs: [
            "Most libraries did not get messy from in-house work. They got messy from files pulled off a manufacturer's site or a free content site and loaded straight into a project, because the deadline left no time to check them. Downloaded families are the most common source of excess geometry, formulas pointing at deleted parameters, and object styles that ignore the office standard.",
            "Treat every downloaded family as unverified until it has been opened, checked and cleaned on its own, outside the project that needed it in a hurry. Check the geometry, strip unused type parameters, and reset any material not set to By Category before it goes into the shared library. A family that skips this step costs more to fix later than it would have cost to clean on day one.",
          ],
        },
        {
          id: "object-styles",
          heading: "Fix object styles and orphaned parameters",
          image: objectStyles.en,
          paragraphs: [
            "Object styles decide how a family's lines, fills and subcategories display and print. Inconsistent ones are among the most common reasons a library looks careless even when the geometry underneath is fine. Set them deliberately for every family, not by whatever arrived with the download.",
            "The same pass should catch orphaned parameters left by an earlier edit, shared parameter files still referenced by families that no longer need them, and duplicate types that exist only because someone loaded the same family twice under two names. None of these show up in a file-size check. All of them show up eventually as a schedule error or a tag that will not fill.",
          ],
        },
        {
          id: "model-weight",
          heading: "What else weighs a model down",
          paragraphs: [
            "Families are the usual suspect, but not the only one. The same review should look at these:",
          ],
          list: {
            items: [
              "**Warnings** left to pile up. Each one is a small unresolved problem Revit keeps track of.",
              "**View templates and views nobody uses**, which clutter the project and can override settings without anyone noticing.",
              "**Images loaded at full resolution** and scaled down in the model; Revit keeps the full file.",
              "**In-place families** used where a reusable family belonged.",
              "**Imported CAD** where a link, or native geometry, would do.",
            ],
          },
          after: [
            "None of these is dramatic on its own. Together they are the difference between a model that opens promptly and one people wait for.",
          ],
        },
        {
          id: "organize-library",
          heading: "Organise the library around a written standard",
          paragraphs: [
            "A cleaned family still causes problems if nobody can find it, or if two people save two versions under two names. Naming, folder structure and category rules need to be a written standard the whole office follows, not a habit one person remembers.",
            "The standard does not need to be elaborate. It needs three things:",
          ],
          list: {
            items: [
              "A **consistent naming pattern** that encodes category and type.",
              "A folder structure that matches how people actually search, not how the library happened to grow.",
              "One person or team who approves new additions before they reach the shared library.",
            ],
          },
          after: [
            "This is the same groundwork a [Revit family creation](/revit-family-creation/) project starts from, whether the families are new or rebuilt.",
          ],
        },
        {
          id: "save-or-rebuild",
          heading: "Save it or rebuild it",
          image: rebuild.en,
          paragraphs: [
            "Not every family is worth cleaning. Some can be saved in an hour. Others carry so many undocumented edits from so many people that rebuilding from a clean template is faster than tracing what is wrong.",
            "Be honest about scope here. If it is a handful of families and nobody has complained about file size, you do not need a consultant, including us: run Purge Unused and save with Compact File first. Bring in [outside help with the library](/products/#revit-families) when it is shared across a team, the standard itself is the problem, and a badly fragmented set of families would take longer to patch than to rebuild.",
          ],
        },
        {
          id: "lighter-families",
          heading: "Build new families light from the start",
          paragraphs: [
            "Every family that gets rebuilt, and every new one added after the clean-up, is a chance to stop the weight from coming back. Most of what a family costs a model comes from how it was modelled, not from how much it shows, and three habits keep that cost low:",
          ],
          list: {
            items: [
              "**Let detail levels do the hiding.** Assign fine geometry, such as handles, bolts and trim profiles, to the Fine detail level only, so Coarse and Medium views never have to draw it.",
              "**Symbolic lines for plan views.** A plan symbol drawn with symbolic lines and a masking region is lighter and cleaner than a cut through full 3D geometry, and it prints the way the office standard expects.",
              "**Arrays, voids and nesting only where they earn their place.** Each one adds work every time the family's geometry regenerates. A nested family that is never scheduled or swapped on its own is usually better modelled directly in the host family.",
            ],
          },
          after: [
            "None of this needs special tools. It needs the rule written into the library standard, so the next person who builds a family builds it the same way. The [parametric family guide](/articles/custom-parametric-revit-family-creation/) covers the parameter side of the same discipline.",
          ],
        },
        {
          id: "version-upgrades",
          heading: "Upgrade the library once per Revit release",
          paragraphs: [
            "A file saved in a newer Revit release cannot be opened in an older one, and a family built in an older release is upgraded every time it is loaded into a project on a newer one. When the library stays on an old version, the upgrade time is spent again on every project and by every team member, and the upgraded copies end up scattered across project files instead of in the library.",
            "The fix is a simple rule. When the office moves to a new Revit release, upgrade the whole library once, test a sample of the upgraded families in a trial project, and keep the previous version's library read-only for projects that stay on the old release. Each folder's version should be obvious from its name, so nobody loads a family from the wrong one.",
            "This is also the cheapest moment to audit the library, because every family is being opened anyway. Folding the quarterly checks below into the upgrade pass turns the audit into part of work the office was already doing.",
          ],
        },
        {
          id: "maintain",
          heading: "Keep it clean with a recurring audit",
          paragraphs: [
            "A one-off clean-up buys a few months. Libraries drift back towards mess by default, because loading a new family under deadline pressure is always faster than checking it. The only defence is a recurring audit, not a bigger one-off effort.",
            "Batch-checking tools are worth using once the library is clean enough for their results to mean something. A [model checker running a checkset of your own rules](/articles/revit-model-checker/) is the natural next step; run against a disorganised library, it only produces a long list nobody acts on.",
            "Set a fixed cadence, **quarterly** being a reasonable default for a busy office, and check three things each time:",
          ],
          list: {
            ordered: true,
            items: [
              "New families against the naming and object-style standard.",
              "File sizes against the per-family ceiling.",
              "Duplicate types that have crept back in.",
            ],
          },
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A clean library is not the actual goal. A library nobody has to think about is. That only happens when the standard is set before the clean-up starts, downloaded content is checked before it is trusted, and the audit that follows looks for the specific families causing trouble instead of purging everything and hoping the right thing was fixed.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Revit family creation", href: "/revit-family-creation/" },
        { label: "A Revit model checker automates QA/QC", href: "/articles/revit-model-checker/" },
        { label: "Custom parametric Revit family creation", href: "/articles/custom-parametric-revit-family-creation/" },
        { label: "Revit families on the Products page", href: "/products/#revit-families" },
        { label: "About the studio", href: "/about/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "ArchOverFlow, Managing Revit File Size & Performance", href: "https://archoverflow.com/managing-revit-file-size-performance/" },
        { label: "GRAITEC, Why Your Revit Model Is Slow, and How To Fix It", href: "https://graitec.com/ca-en/blog/why-revit-model-is-slow-how-to-fix-it/" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Do we need to hire someone to optimize our Revit library?",
          answer:
            "Not always. If it is a handful of families and nobody has complained, run Purge Unused and save with Compact File first. Outside help is worth it when the library is shared across a team and the standard itself, not just file size, is the problem.",
        },
        {
          question: "What does Purge Unused actually remove in Revit?",
          answer:
            "Families, types, materials and other elements with no instances left in the open model. It does not touch anything still in use, even a single forgotten instance, and it will not fix an oversized or mislabelled family that is still loaded.",
        },
        {
          question: "How do we find which families are causing the file size problem?",
          answer:
            "Audit before you purge. Sort the families by file size and check the largest first for imported CAD geometry or unnecessary nested detail; that is where most of the size usually sits.",
        },
        {
          question: "What's a safe maximum size for a single Revit family?",
          answer:
            "ArchOverFlow's guide sets the bar at under 1 MB for the vast majority of families and under 3 MB for almost all of them. A family well past that is not automatically wrong, but it needs a specific, written-down reason for its size, such as detail a manufacturer requires.",
        },
        {
          question: "Is it safe to delete families we didn't create ourselves?",
          answer:
            "Only after checking whether anything in the current project still references them. Purge Unused already protects families with live instances; anything beyond that should go through the same audit as everything else before it leaves the shared library.",
        },
        {
          question: "Should we use type catalogs instead of loading every family type?",
          answer:
            "Yes, whenever a family has more than a handful of types. A type catalog lets a project load only the types it needs instead of the entire family, which keeps both the family and the project file lighter.",
        },
        {
          question: "Is it better to clean up an old library or rebuild it?",
          answer:
            "It depends how fragmented it is. A library with a handful of inconsistent families is worth cleaning. One with years of undocumented changes from different people is usually faster to rebuild against a clean standard than to patch.",
        },
        {
          question: "How often should a Revit library be audited?",
          answer:
            "Quarterly is a reasonable default for a busy office. Waiting for complaints means waiting until the library is already causing real damage; a fixed cadence catches drift while it is still a few families.",
        },
      ],
    },
  },
};
