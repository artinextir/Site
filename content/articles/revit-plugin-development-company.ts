import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-plugin-development-company";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("source-code-repository-review", {
  fa: "دستی کنار تبلتی که کد روی آن نمایش داده می‌شود، برای نوشته‌ای درباره‌ی انتخاب شرکت توسعه پلاگین رویت",
  en: "A hand beside a tablet showing code, for a piece on choosing a Revit plugin development company",
});
const workflow = img("aec-workflow-meeting-discussion", {
  fa: "دو نفر در حال بررسی نقشه‌ی فنی با خودکار، برای ارزیابی درک جریان کاری",
  en: "Two people reviewing a technical drawing with a pen, for checking workflow understanding",
});
const portfolio = img("reviewing-software-portfolio-case-study", {
  fa: "دستی روی صفحه‌ی لمسی لپ‌تاپ کنار برگه‌های چاپی، برای بررسی نمونه‌کار یک شرکت",
  en: "A hand on a laptop trackpad beside printed pages, for reviewing a company's portfolio",
});
const versions = img("software-version-update-maintenance", {
  fa: "صفحه‌ی تاریک با خطوط ترمینال و لاگ سیستم، برای به‌روزرسانی پلاگین در نسخه‌ی جدید رویت",
  en: "A dark screen of terminal lines and system logs, for updating a plugin for a new Revit release",
});
const flags = img("contract-review-warning-signs", {
  fa: "دو نفر در حال بررسی و امضای قرارداد چاپی، برای علائم هشدار پیش از امضا",
  en: "Two people reviewing and signing a printed contract, for the warning signs worth checking first",
});

export const revitPluginDevelopmentCompany: ArticlePage = {
  slug: "revit-plugin-development-company",
  content: {
    fa: {
      slug: "revit-plugin-development-company",
      meta: {
        title: "انتخاب شرکت توسعه پلاگین رویت: معیارهای اصلی — آرتینکست",
        description:
          "برای انتخاب شرکت توسعه پلاگین رویت، درک جریان کاری، مالکیت کد، به‌روزرسانی نسخه‌ها و پشتیبانی پس از تحویل را بسنجید، نه فقط نمونه‌کار. پرسش‌ها و علائم هشدار.",
      },
      keywords: [
        "شرکت توسعه پلاگین رویت",
        "انتخاب شرکت توسعه پلاگین رویت",
        "خدمات توسعه پلاگین رویت",
        "ساخت پلاگین اختصاصی رویت",
        "شرکت مشاوره رویت",
      ],
      breadcrumb: "انتخاب شرکت توسعه پلاگین رویت",
      category: "BIM و Revit",
      title: "انتخاب شرکت توسعه پلاگین رویت: به چه چیزی باید توجه کرد؟",
      leadOpinion:
        "خطرناک‌ترین مشکل در همکاری با یک شرکت توسعه پلاگین، معمولاً از نمونه‌کار ضعیف ناشی نمی‌شود، بلکه از جزئیات کوچکی است که هنگام ارزیابی بررسی نشده‌اند.",
      publishedAt: "2026-08-29",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی و اتوماسیون رویت را برای دفاتر معماری، سازه و تأسیسات می‌سازد و نگهداری می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-means", label: "شرکت توسعه پلاگین رویت چه می‌کند" },
        { id: "consulting", label: "مشاوره یا توسعه" },
        { id: "hire-model", label: "شرکت، فریلنسر یا توسعه‌دهنده‌ی داخلی" },
        { id: "workflow-fit", label: "درک جریان کاری، نه فقط API" },
        { id: "technical", label: "توانمندی‌های فنی قابل‌بررسی" },
        { id: "portfolio", label: "نمونه‌کار صادقانه" },
        { id: "scoping", label: "تعریف دامنه پیش از کدنویسی" },
        { id: "engagement", label: "روند کار پس از شروع" },
        { id: "ownership", label: "مالکیت و نگهداری کد" },
        { id: "version-updates", label: "نسخه‌ی بعدی رویت" },
        { id: "support", label: "پشتیبانی پس از تحویل" },
        { id: "questions", label: "پرسش‌های پیش از قرارداد" },
        { id: "compare-quotes", label: "مقایسه‌ی دو برآورد" },
        { id: "red-flags", label: "علائم هشدار" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "انتخاب شرکت توسعه پلاگین رویت به چند موضوع بستگی دارد که در نگاه اول دیده نمی‌شوند: اینکه تیم جریان کاری شما را درک می‌کند یا فقط با API آشناست، مالکیت کد نهایی با چه کسی است، با انتشار نسخه‌ی بعدی رویت چه اتفاقی می‌افتد و پشتیبانی پس از تحویل چگونه تعریف شده است. یک نمونه‌کار زیبا به هیچ‌کدام از این پرسش‌ها پاسخ نمی‌دهد.\n\nاین تصمیم با خرید یک افزونه‌ی آماده از فروشگاه Autodesk متفاوت است. در خرید، تنها پرسش این است که ابزار کار می‌کند یا نه. در این‌جا یک همکاری کاری را انتخاب می‌کنید، زیرا کد اختصاصی به کسی نیاز دارد که بداند هر تصمیم به چه دلیل گرفته شده است، هر بار که رویت تغییر می‌کند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-means",
          heading: "شرکت توسعه پلاگین رویت دقیقاً چه کاری انجام می‌دهد",
          paragraphs: [
            "شرکت توسعه پلاگین رویت تیمی است که با زبان C# و بر اساس Revit API ابزارهایی می‌سازد که داخل خود رویت اجرا می‌شوند؛ دکمه‌ای روی ریبون، یک پنجره‌ی تنظیمات یا بررسی‌ای که هنگام ذخیره‌ی فایل اجرا می‌شود. این کار با مشاوره‌ی عمومی BIM متفاوت است و با فردی که یک‌بار برای دفتر خود پلاگینی ساخته نیز تفاوت دارد.",
            "برخی شرکت‌ها فقط کد می‌نویسند. برخی دیگر بررسی جریان کاری، طراحی رابط کاربری، تست روی فایل‌های شما و به‌روزرسانی‌های سال‌های بعد را نیز بر عهده می‌گیرند. هیچ‌کدام از این دو مدل اشتباه نیست، اما دانستن اینکه با کدام‌یک صحبت می‌کنید، پیش از شروع کار از هر موضوع دیگری در این نوشته مهم‌تر است.",
          ],
        },
        {
          id: "consulting",
          heading: "مشاوره‌ی رویت یا توسعه‌ی پلاگین رویت، به کدام نیاز دارید؟",
          paragraphs: [
            "شرکت مشاوره‌ی رویت و شرکت توسعه پلاگین رویت گاهی عنوان مشابهی دارند، اما کار آن‌ها متفاوت است. مشاوره قواعد را تعیین می‌کند: تمپلیت‌ها، استانداردها، کتابخانه‌ی فمیلی و روش اشتراک‌گذاری و کنترل مدل‌ها. توسعه، قواعدی را که از پیش وجود دارند به ابزارهایی تبدیل می‌کند که آن‌ها را اجرا می‌کنند.",
            "ترتیب این دو اهمیت دارد. پلاگینی که بر اساس استانداردی ساخته شود که هنوز درباره‌ی آن توافق نشده است، تنها یکی از دیدگاه‌ها را در خود ثابت می‌کند. اگر دفتر شما هنوز در حال تعیین روش کار است، از مشاوره شروع کنید و پس از مکتوب‌شدن قاعده، ابزار را بسازید. اگر قاعده مشخص است و افراد آن را به‌صورت دستی اجرا می‌کنند، توسعه‌ی ابزار انتخاب درستی است.",
            "برخی تیم‌ها هر دو کار را انجام می‌دهند و این زمانی مفید است که استاندارد و ابزار هم‌زمان طراحی شوند. بپرسید شرکت مورد نظر بیشتر وقت خود را صرف کدام‌یک از این دو کار می‌کند.",
          ],
        },
        {
          id: "hire-model",
          heading: "شرکت، فریلنسر یا توسعه‌دهنده‌ی داخلی",
          paragraphs: [
            "ابزار اختصاصی رویت را می‌توان از سه مسیر ساخت و کیفیت کد در هر سه مسیر می‌تواند یکسان باشد. تفاوت اصلی در سال دوم مشخص می‌شود:",
          ],
          list: {
            items: [
              "**توسعه‌دهنده‌ی داخلی** استانداردهای دفتر را بهتر از هر فرد بیرونی می‌شناسد. این مدل زمانی مناسب است که ابزارهای مختلفی به‌طور مداوم نیاز به ساخت داشته باشند. اگر سالی یک ابزار ساخته شود، این نقش معمولاً به پشتیبانی عمومی IT تبدیل می‌شود.",
              "**فریلنسر** می‌تواند کدی دقیق و سریع بنویسد. ریسک اصلی، تداوم همکاری است؛ وقتی قرارداد بعدی او شروع شود، به‌روزرسانی ابزار شما برای نسخه‌ی جدید رویت منتظر می‌ماند.",
              "**شرکت توسعه** برای کارهای مقطعی، هزینه‌ای بیشتر از فریلنسر و کمتر از استخدام تمام‌وقت دارد. آنچه بابت آن پرداخت می‌کنید این است که پس از جابه‌جایی نویسنده‌ی اصلی کد، همچنان کسی پاسخ‌گوی ابزار باشد.",
            ],
          },
          after: [
            "اگر در دفتر توسعه‌دهنده دارید، پرسش اصلی این نیست که کار را برون‌سپاری کنید یا نه، بلکه این است که کدام بخش را: بررسی جریان کاری، ساخت و تست، یا به‌روزرسانی‌های سالانه.",
          ],
        },
        {
          id: "workflow-fit",
          heading: "آیا جریان کاری شما را درک می‌کنند یا فقط با API آشنا هستند؟",
          image: workflow.fa,
          paragraphs: [
            "تسلط بر Revit API شرط لازم است، اما کافی نیست. تیمی که هرگز کنار یک دفتر معماری یا مهندسی کار نکرده، معمولاً تصمیم فنی درست را در جای نادرست می‌گیرد؛ کدی درست و ابزاری که با روند واقعی پروژه سازگار نیست.",
            "بهترین روش ارزیابی، پرسیدن مستقیم درباره‌ی آشنایی آن‌ها با صنعت ساختمان نیست. یکی از فرآیندهای واقعی خود را برایشان توضیح دهید و به پرسش‌هایشان توجه کنید. پرسش درباره‌ی استثناهای فرآیند، یعنی همان مواردی که هیچ‌جا مستند نشده‌اند، بیش از هر فهرستی از فناوری‌ها نشان‌دهنده‌ی تجربه‌ی واقعی است.",
          ],
        },
        {
          id: "technical",
          heading: "کدام توانمندی‌های فنی را باید بررسی کرد",
          paragraphs: [
            "برای این بررسی لازم نیست کد C# بخوانید. کافی است از آن‌ها بخواهید به زبان ساده توضیح دهند که مسئله‌ی شما را چگونه حل می‌کنند. پاسخ خوب این موارد را پوشش می‌دهد:",
          ],
          list: {
            items: [
              "**Revit API با C# و .NET**، شامل مدیریت تراکنش‌ها، فیلترکردن المان‌ها در مقیاس یک مدل واقعی و ساخت برای چند نسخه‌ی رویت.",
              "**تشخیص زمانی که Dynamo کافی است.** تیمی که حتی برای یک کار یک‌باره هم فقط افزونه‌ی کامپایل‌شده پیشنهاد می‌کند، آنچه را که بلد است می‌فروشد.",
              "**یکپارچه‌سازی** با سامانه‌هایی که داده‌ی شما واقعاً در آن‌ها قرار دارد، مانند Excel، ETABS، سامانه‌ی ثبت اسناد یا Autodesk Construction Cloud.",
              "**تست روی مدل‌های واقعی**، نه یک فایل نمونه‌ی تمیز، بر اساس مواردی که پیش از شروع ساخت توافق شده‌اند.",
              "**گزارش خطا.** بپرسید ابزار در برابر ورودی نادرست چه واکنشی نشان می‌دهد. پاسخ درست یک گزارش است، نه توقف ابزار یا حذف بی‌صدای داده.",
            ],
          },
          after: [
            "در صفحه‌ی [توسعه پلاگین رویت](/revit-plugin-development/)، دو مبدل خود ما دقیقاً همین کار را انجام می‌دهند: مدل را می‌سازند و هم‌زمان گزارش می‌دهند چه المان‌هایی تبدیل نشده‌اند.",
          ],
        },
        {
          id: "portfolio",
          heading: "نمونه‌کار صادقانه چه چیزی را نشان می‌دهد",
          image: portfolio.fa,
          paragraphs: [
            "نمونه‌کار مفید فقط تصویر رابط کاربری نیست؛ نشان می‌دهد ابزار چه مسئله‌ای را حل کرده و پس از تحویل چه سرنوشتی داشته است. آیا هنوز استفاده می‌شود؟ آیا برای نسخه‌های جدیدتر رویت به‌روزرسانی شده است؟ ابزاری که دو سال پیش ساخته شده و از آن زمان تغییری نکرده، معمولاً یعنی همکاری با آن کارفرما همان‌جا تمام شده است، نه اینکه ابزار هرگز به تغییر نیاز نداشته است.",
            "**درخواست یک نمونه‌ی واقعی و قابل‌بررسی، هیچ‌وقت درخواست زیادی نیست.** شرکتی که در پاسخ به این درخواست تردید دارد، یا کار واقعی کمی انجام داده یا کارفرمایانش اجازه‌ی نمایش کار را نداده‌اند. در هر دو حالت، این موضوع را مستقیماً بپرسید.",
          ],
        },
        {
          id: "scoping",
          heading: "پیش از نوشتن کد، دامنه‌ی کار را چگونه تعریف می‌کنند",
          paragraphs: [
            "همه می‌خواهند مستقیماً کار ساخت را شروع کنند و کمتر کسی تمایل دارد روزهای اول را صرف پرسش و بررسی کند. اما همین ساعت‌های کم‌جلوه، دقیقاً مرحله‌ای است که ابزار قابل‌اعتماد و ابزار شکننده در آن از هم جدا می‌شوند و هیچ‌کدام از آن‌ها در دمو دیده نمی‌شود.",
            "شرکتی که در اولین تماس قیمت و زمان‌بندی اعلام می‌کند، جزئیاتی را نادیده گرفته است که بعدها هزینه‌ی واقعی را تعیین می‌کنند. جلسه‌ی جدی تعریف دامنه شامل ورودی و خروجی دقیق، فایل‌های پروژه‌ی واقعی و فهرست حالت‌های استثنایی است. عواملی که این عدد را تعیین می‌کنند، در نوشته‌ی [توسعه پلاگین رویت چقدر هزینه دارد](/articles/revit-plugin-development-cost/) توضیح داده شده‌اند.",
          ],
        },
        {
          id: "engagement",
          heading: "روند کار پس از شروع پروژه چگونه باید باشد",
          paragraphs: [
            "پس از توافق بر سر دامنه، روند ساخت باید قابل‌مشاهده باشد. مراحل کوتاهی که هرکدام با اجرای ابزار روی یکی از فایل‌های شما تمام می‌شوند، سوءتفاهم را در هفته‌ی اول مشخص می‌کنند، نه در زمان تحویل.",
            "تغییرات حتماً پیش می‌آیند. روش مفید این است که هر تغییر همراه با اثر آن بر زمان‌بندی مکتوب شود تا پایان پروژه به مذاکره درباره‌ی حرفی که سه هفته پیش در یک تماس زده شده تبدیل نشود.",
            "وقتی مراحل کار مشخص باشند، فاصله‌ی جغرافیایی کمتر از آنچه تصور می‌شود اهمیت دارد. ما از ایران و به‌صورت ریموت کار می‌کنیم و پروژه‌های خود را به همین شکل تنظیم می‌کنیم: هر مرحله با فایلی تمام می‌شود که کارفرما می‌تواند آن را باز کند و بررسی کند.",
          ],
        },
        {
          id: "ownership",
          heading: "مالکیت کد با کیست و نگهداری آن با چه کسی",
          paragraphs: [
            "برخلاف افزونه‌ای که از فروشگاه Autodesk خریداری می‌شود، سورس کد ابزار اختصاصی معمولاً متعلق به کارفرماست، مگر آنکه قرارداد چیز دیگری تعیین کند. این موضوع باید پیش از شروع کار مکتوب شود، نه اینکه هنگام انتقال کار به توسعه‌دهنده‌ی دیگری مشخص شود.",
            "نگهداری موضوع جداگانه‌ای است. برخی شرکت‌ها کد را تحویل می‌دهند و همکاری همان‌جا تمام می‌شود؛ برخی دیگر نگهداری بلندمدت را بخشی از قرارداد می‌کنند. هر دو مدل قابل‌قبول است، به شرط آنکه روشن باشد کدام‌یک را امضا کرده‌اید. ابزاری که مسیر نگهداری ندارد، تنها تا اولین نسخه‌ای از رویت کار می‌کند که API را تغییر دهد.",
          ],
        },
        {
          id: "version-updates",
          heading: "با انتشار نسخه‌ی بعدی رویت چه اتفاقی می‌افتد",
          image: versions.fa,
          paragraphs: [
            "Autodesk هر سال نسخه‌ی جدیدی از رویت منتشر می‌کند و API در برخی از این نسخه‌ها تغییر می‌کند. Revit 2025 به .NET 8 منتقل شد و افزونه‌هایی که برای نسخه‌های قبلی ساخته شده بودند، پیش از اجرا باید دوباره کامپایل می‌شدند. این ریسکی دائمی است و فقط شرکت‌های ضعیف با آن روبه‌رو نمی‌شوند.",
            "پرسش درست این نیست که آیا این ریسک وجود دارد، بلکه این است که در صورت بروز، هزینه و زمان اصلاح چگونه تعیین می‌شود. [برنامه‌ی Certified Apps](https://aps.autodesk.com/app-store/certified-apps/how-apply) خود Autodesk که در حال حاضر برای Inventor و Vault است و رویت را شامل نمی‌شود، از اپلیکیشن‌های تأییدشده می‌خواهد از آخرین نسخه و نسخه‌ی پیش از آن پشتیبانی کنند. این معیار منصفانه‌ای است که می‌توان از هر شرکت توسعه‌ی پلاگین رویت نیز انتظار داشت.",
          ],
        },
        {
          id: "support",
          heading: "پشتیبانی پس از تحویل، نه فقط پیش از فاکتور",
          paragraphs: [
            "پیش از عقد قرارداد، هر شرکتی پاسخ‌گو است. تفاوت واقعی زمانی مشخص می‌شود که سه هفته پس از تحویل، خطایی پیدا شود. زمان پاسخ‌گویی، روش مستند گزارش خطا و اینکه هزینه‌ی اصلاح از پیش توافق شده است یا هر بار مذاکره می‌شود، در این مرحله اهمیت پیدا می‌کنند.",
            "بهترین روش بررسی، پرسیدن از یک کارفرمای قبلی درباره‌ی یک خطای واقعی است، نه پرسش کلی درباره‌ی کیفیت پشتیبانی. پاسخی که تاریخ، مدت زمان رفع و نتیجه‌ی مشخصی دارد، بسیار قابل‌اعتمادتر از جمله‌ی «پشتیبانی‌شان عالی است» است.",
            "همچنین بپرسید پشتیبانی دقیقاً شامل چه مواردی است. رفع خطای ابزار تحویل‌شده یک موضوع است و تغییر ابزار به دلیل تغییر استاندارد دفتر، کاری جدید است؛ قرارداد خوب این دو را از هم جدا می‌کند.",
          ],
        },
        {
          id: "questions",
          heading: "پرسش‌هایی که پیش از امضای قرارداد باید مطرح کرد",
          paragraphs: [
            "هفت پرسش زیر بیشتر مطالب این نوشته را پوشش می‌دهند و شرکت مناسب بدون ابهام به آن‌ها پاسخ می‌دهد:",
          ],
          list: {
            ordered: true,
            items: [
              "بررسی جریان کاری ما را از کدام بخش شروع می‌کنید و به چه دلیل؟",
              "آیا می‌توانیم یکی از ابزارهایی را که ساخته‌اید و هنوز استفاده می‌شود ببینیم و با یکی از کاربران آن صحبت کنیم؟",
              "ابزار از کدام نسخه‌های رویت پشتیبانی می‌کند و به‌روزرسانی سال بعد بر عهده‌ی چه کسی است؟",
              "مالکیت سورس کد با کیست و دقیقاً چه چیزی تحویل داده می‌شود؟",
              "ابزار چگونه و روی فایل‌های چه کسی تست می‌شود؟",
              "ابزار در برابر ورودی نادرست چه واکنشی نشان می‌دهد؟",
              "خطاهای پس از تحویل چگونه گزارش می‌شوند و هزینه‌ی اصلاح آن‌ها چگونه تعیین می‌شود؟",
            ],
          },
        },
        {
          id: "compare-quotes",
          heading: "دو برآورد قیمت را چگونه مقایسه کنیم",
          paragraphs: [
            "دو برآورد برای یک ابزار، به‌ندرت یک ابزار واحد را توصیف می‌کنند. پیش از مقایسه‌ی مبلغ نهایی، دامنه‌ی کار را در کنار هم قرار دهید:",
          ],
          list: {
            items: [
              "**فهرست مراحل را کنار هم بگذارید.** برآورد ارزان‌تر اغلب مراحل کمتری را پوشش می‌دهد یا حالت‌های استثنایی را در نظر نمی‌گیرد.",
              "**بخش نسخه‌ها را بررسی کنید.** ممکن است یکی از برآوردها فقط نسخه‌ای از رویت را پوشش دهد که امروز از آن استفاده می‌کنید.",
              "**تست و تحویل را پیدا کنید.** تست روی فایل‌های شما، سورس کد و راهنمای ساخت گاهی جداگانه قیمت‌گذاری می‌شوند و گاهی اصلاً در برآورد وجود ندارند.",
              "**شرایط پشتیبانی را مقایسه کنید**، از جمله روش قیمت‌گذاری اصلاح خطا پس از تحویل.",
            ],
          },
          after: [
            "وقتی دامنه‌ی دو برآورد یکسان شد، هر تفاوتی که در قیمت باقی بماند، تفاوت واقعی در روش کار است و ارزش پرسیدن دارد.",
          ],
        },
        {
          id: "red-flags",
          heading: "علائم هشداری که باید جدی گرفت",
          image: flags.fa,
          paragraphs: [
            "در یکی از امتحان‌های دیباگ دوران تحصیل بنیان‌گذار آرتینکست، تنها کسر نمره به یک غلط املایی مربوط بود: نمره‌ی ۲۳٫۵ از ۲۴، در کلاسی که بالاترین نمره‌ی بقیه ۱۸ بود. خطا نه در منطق برنامه بود و نه در الگوریتم، بلکه یک غلط تایپی بود. مشکلی که واقعاً آسیب می‌زند تقریباً هیچ‌وقت پیچیده‌ترین بخش کار نیست، بلکه جزئیات کوچکی است که کسی آن را جدی نگرفته است.",
            "انتخاب شرکت توسعه نیز به همین شکل است. نمونه‌کار چشمگیر یا ارائه‌ی حرفه‌ای، ریسک واقعی را پنهان می‌کند. علائمی که باید جدی گرفته شوند کوچک‌ترند: تردید در نمایش یک نمونه‌ی واقعی، بی‌میلی به گفت‌وگو درباره‌ی مالکیت کد، اعلام قیمت پیش از تعریف دامنه و پاسخ مبهم به این پرسش که پس از به‌روزرسانی رویت چه اتفاقی می‌افتد.",
            "**اگر افزونه‌ای که همین حالا در فروشگاه Autodesk وجود دارد مسئله‌ی شما را حل می‌کند، سفارش توسعه‌ی اختصاصی لازم نیست**، چه به ما و چه به هر شرکت دیگری. خرید ابزار موجود ارزان‌تر و سریع‌تر است و ساخت اختصاصی زمانی توجیه دارد که هیچ ابزار آماده‌ای با جریان کاری شما سازگار نباشد.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "انتخاب شرکت توسعه پلاگین رویت به زیباترین نمونه‌کار یا کمترین قیمت مربوط نیست، بلکه به چند پرسش ساده و قابل‌بررسی بستگی دارد: آیا جریان کاری شما را درک می‌کنند، مالکیت کد با کیست، پس از نسخه‌ی بعدی رویت چه اتفاقی می‌افتد و پشتیبانی پس از تحویل چگونه است. پاسخ مبهم به هرکدام از این پرسش‌ها به همان اندازه‌ی پاسخ روشن، اطلاعات می‌دهد.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost/" },
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه پلاگین رویت در تهران", href: "/revit-plugin-development-tehran/" },
        { label: "ابزارهای دیجیتال در صفحه‌ی محصولات", href: "/products/#digital-tools" },
        { label: "درباره ما", href: "/about/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk Platform Services — Certified Apps Program, How to Apply", href: "https://aps.autodesk.com/app-store/certified-apps/how-apply" },
        { label: "Autodesk Platform Services — Marketplace Publisher Center", href: "https://aps.autodesk.com/app-store/publisher-center" },
        { label: "Autodesk Developer Blog — Migrating from .NET 4.8 to .NET Core 8", href: "https://blog.autodesk.io/migrating-from-net-48-to-net-core-8/" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "شرکت توسعه پلاگین رویت دقیقاً چه کاری انجام می‌دهد؟",
          answer:
            "ابزارهای اختصاصی‌ای می‌سازد که داخل رویت اجرا می‌شوند، معمولاً با زبان C# و بر اساس Revit API، برای جریان کاری مشخص دفتر شما. شرکت‌های بهتر پیش از ساخت، جریان کاری را بررسی می‌کنند، ابزار را روی فایل‌های واقعی شما تست می‌کنند و آن را در نسخه‌های مختلف رویت به‌روز نگه می‌دارند.",
        },
        {
          question: "تفاوت شرکت توسعه با فریلنسر چیست؟",
          answer:
            "کیفیت کد می‌تواند یکسان باشد. تفاوت اصلی در تداوم همکاری است؛ وقتی قرارداد بعدی فریلنسر شروع شود، به‌روزرسانی و اصلاح ابزار شما منتظر می‌ماند. شرکت توسعه به‌گونه‌ای کار می‌کند که پس از جابه‌جایی نویسنده‌ی اصلی کد نیز کسی پاسخ‌گوی ابزار باشد.",
        },
        {
          question: "آیا بهتر است توسعه‌دهنده‌ی داخلی استخدام کنیم؟",
          answer:
            "اگر ابزارهای مختلفی به‌طور مداوم نیاز به ساخت دارند، اغلب بله. برای یک یا دو ابزار در سال، نقش تمام‌وقت معمولاً به پشتیبانی عمومی IT تبدیل می‌شود و همکاری با تیم بیرونی همراه با تحویل کامل کد، گزینه‌ی مناسب‌تری است.",
        },
        {
          question: "مالکیت کد پلاگین اختصاصی معمولاً با کیست؟",
          answer:
            "معمولاً با کارفرما، مگر آنکه قرارداد چیز دیگری تعیین کند. این موضوع را پیش از شروع کار مکتوب کنید و مشخص کنید دقیقاً چه چیزی تحویل داده می‌شود: سورس کد، راهنمای ساخت و فایل نصب.",
        },
        {
          question: "اگر پلاگین پس از به‌روزرسانی رویت از کار بیفتد چه باید کرد؟",
          answer:
            "این ریسکی دائمی است، نه یک استثنا؛ انتقال Revit 2025 به .NET 8 باعث شد افزونه‌های قدیمی تا زمان کامپایل دوباره اجرا نشوند. از پیش توافق کنید هزینه‌ی اصلاح چگونه تعیین می‌شود و در چه مدتی انجام خواهد شد.",
        },
        {
          question: "پیش از قرارداد، کیفیت پشتیبانی یک شرکت را چگونه بسنجیم؟",
          answer:
            "از یکی از کارفرمایان قبلی درباره‌ی یک خطای واقعی بپرسید: چه زمانی گزارش شد، رفع آن چقدر طول کشید و چه هزینه‌ای داشت. پاسخ مشخص بسیار قابل‌اعتمادتر از توصیف کلی پشتیبانی خوب است.",
        },
        {
          question: "آیا یک تیم ریموت می‌تواند پلاگین ما را بسازد؟",
          answer:
            "بله، به شرط آنکه مراحل کار مشخص باشند. مراحل کوتاهی که هرکدام با اجرای ابزار روی یکی از فایل‌های شما تمام می‌شوند، از حضور در یک شهر مهم‌تر هستند.",
        },
        {
          question: "چه زمانی اصلاً نباید سراغ توسعه‌ی اختصاصی رفت؟",
          answer:
            "زمانی که افزونه‌ای در فروشگاه Autodesk همان مسئله را حل می‌کند. ساخت اختصاصی تنها زمانی توجیه دارد که هیچ ابزار آماده‌ای با جریان کاری شما سازگار نباشد.",
        },
      ],
    },
    en: {
      slug: "revit-plugin-development-company",
      meta: {
        title: "Choosing a Revit Plugin Development Company: What Matters",
        description:
          "Choosing a Revit plugin development company? Check workflow fit, code ownership, version updates and support, not the portfolio. Questions to ask and red flags.",
      },
      keywords: [
        "revit plugin development company",
        "revit consulting and development services",
        "revit plugin development services",
        "custom revit plugin creation",
        "revit consulting company",
      ],
      breadcrumb: "Choosing a Revit plugin development company",
      category: "BIM & Revit",
      title: "Choosing a Revit plugin development company: what actually matters",
      leadOpinion:
        "The most dangerous problem in a plugin development partnership rarely comes from a weak portfolio. It comes from the small detail nobody checked during evaluation.",
      publishedAt: "2026-08-29",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds and maintains custom Revit plugins and automation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-means", label: "What a plugin company actually is" },
        { id: "consulting", label: "Consulting or development" },
        { id: "hire-model", label: "Company, freelancer or in-house" },
        { id: "workflow-fit", label: "Your workflow, not just the API" },
        { id: "technical", label: "The technical depth to check" },
        { id: "portfolio", label: "An honest portfolio" },
        { id: "scoping", label: "Scoping before code" },
        { id: "engagement", label: "How the work should run" },
        { id: "ownership", label: "Code ownership and maintenance" },
        { id: "version-updates", label: "The next Revit release" },
        { id: "support", label: "Support after delivery" },
        { id: "questions", label: "Questions to ask first" },
        { id: "compare-quotes", label: "Comparing two quotes" },
        { id: "red-flags", label: "Red flags" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Choosing a Revit plugin development company comes down to a few things that never show up at first glance: whether the team understands your workflow or only the API, who owns the finished code, what happens when Revit ships its next version, and what support looks like after delivery. A polished portfolio answers none of those.\n\nThis is a different decision from buying an add-in off the Autodesk marketplace. There, the only question is whether the tool works. Here you are choosing a working relationship, because custom code needs someone who remembers why each decision was made, every time Revit changes underneath it.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-means",
          heading: "What a Revit plugin development company actually is",
          paragraphs: [
            "A Revit plugin development company is a team that writes C# against the Revit API and ships tools that run inside Revit itself: a ribbon button, a dialog, a check that runs when the file is saved. That is different from general BIM consulting, and different from someone who once built a plugin for their own office.",
            "Some companies write code and nothing else. Others take on the workflow review, the interface, testing on your files and the years of updates that follow. Neither is wrong. Knowing which one you are talking to before work starts matters more than anything else on this page.",
          ],
        },
        {
          id: "consulting",
          heading: "Revit consulting or Revit development: which do you need?",
          paragraphs: [
            "A Revit consulting company and a Revit plugin development company often share a name and not much else. Consulting sets the rules: templates, standards, family libraries, how models are shared and checked. Development turns rules that already exist into tools that apply them.",
            "The order matters. A plugin built on a standard that is still being argued about encodes one side of the argument. If your office is still deciding how it wants to work, start with consulting and build the tool once the rule is written down. If the rule is settled and people are applying it by hand, development is the right call.",
            "Some teams do both, which is useful when the standard and the tool are designed together. Ask which of the two a company actually spends its time on.",
          ],
        },
        {
          id: "hire-model",
          heading: "Company, freelancer or in-house developer",
          paragraphs: [
            "There are three ways to get a custom Revit tool built, and the code quality can be identical across all three. What differs is what happens in the second year:",
          ],
          list: {
            items: [
              "**An in-house developer** knows your standards better than anyone outside can. It works when there is a steady stream of tools to build. With one tool a year, the role tends to drift into general IT.",
              "**A freelancer** can write excellent code quickly. The risk is continuity: when their next contract starts, your update for the new Revit release waits.",
              "**A development company** costs more per hour than a freelancer and less than a full-time hire for occasional work. What you are paying for is that someone is still answering after the person who wrote the code has moved on.",
            ],
          },
          after: [
            "If you already have a developer in the office, the useful question is not whether to outsource but which parts: the workflow review, the build and testing, or the yearly updates.",
          ],
        },
        {
          id: "workflow-fit",
          heading: "Do they understand your workflow, or only the API?",
          image: workflow.en,
          paragraphs: [
            "Fluency in the Revit API is necessary and not sufficient. A team that has never sat next to an architecture or engineering office tends to make the right technical decision in the wrong place: code that is correct, and a tool that does not fit how the project is actually run.",
            "The best test is not asking whether they \"understand AEC.\" Walk them through one of your real processes and listen to what they ask. Questions about the odd edges, the exceptions nobody documented, tell you more than any list of technologies.",
          ],
        },
        {
          id: "technical",
          heading: "The technical depth worth checking",
          paragraphs: [
            "You do not need to read C# to check this. You need them to explain, in plain terms, how they would handle your case. A good answer covers these:",
          ],
          list: {
            items: [
              "**The Revit API in C#/.NET**, including transactions, filtering elements at the scale of a real model, and builds for more than one Revit version.",
              "**When Dynamo is enough.** A team that only ever proposes compiled add-ins, even for a one-off task a graph would handle, is selling what it knows.",
              "**Integrations** with the systems your data actually lives in: Excel, ETABS, a document register, Autodesk Construction Cloud.",
              "**Testing on real models**, not a clean sample file, against cases agreed before the build starts.",
              "**Error reporting.** Ask what the tool does when an input is wrong. The answer should be a report, not a crash and not silence.",
            ],
          },
          after: [
            "Our own [Revit plugin development](/revit-plugin-development/) page shows two converters doing exactly this: building the model and reporting, element by element, what did not convert.",
          ],
        },
        {
          id: "portfolio",
          heading: "What an honest portfolio actually shows",
          image: portfolio.en,
          paragraphs: [
            "A useful portfolio shows more than interface screenshots. It shows what problem the tool solved and what happened to it after delivery. Is it still in use? Has it been updated for newer Revit versions? A tool built two years ago and untouched since usually means the relationship ended there, not that the tool never needed a change.",
            "**Asking for one real, checkable example is never an unreasonable request.** A company that hesitates either has little real work behind it or clients who have not agreed to be shown. Both are worth asking about directly.",
          ],
        },
        {
          id: "scoping",
          heading: "How they scope the work before writing code",
          paragraphs: [
            "Everyone wants to go straight to building. Nobody enjoys the first days spent asking questions. But those unglamorous hours are exactly where a reliable tool separates from a fragile one, and none of it shows in a demo.",
            "A company that quotes a price and a timeline on the first call has skipped the details that set the real cost later. A serious scoping session covers exact inputs and outputs, real project files, and a list of exception cases. What drives that number is covered in [how much Revit plugin development costs](/articles/revit-plugin-development-cost/).",
          ],
        },
        {
          id: "engagement",
          heading: "How the work should run once it starts",
          paragraphs: [
            "Once the scope is agreed, the build should be visible. Short milestones, each ending with the tool running on one of your files, catch a misunderstanding in the first week instead of at handover.",
            "Changes will come. The useful habit is writing each one down with what it does to the schedule, so the end of the project is not a negotiation about what was said on a call three weeks earlier.",
            "Distance matters less than people expect when the milestones are concrete. We work remotely from Iran, so this is how our own projects are set up: every milestone ends with a file the client can open and check.",
          ],
        },
        {
          id: "ownership",
          heading: "Who owns the code, and who maintains it",
          paragraphs: [
            "Unlike an add-in bought on the Autodesk marketplace, custom source code usually belongs to the client unless the contract says otherwise. That needs to be in writing before work starts, not discovered when you try to move to another developer.",
            "Maintenance is a separate question. Some companies hand over the code and the relationship ends; others build long-term maintenance into the contract. Either can work, as long as it is clear which one you signed. Without a maintenance path, the tool works until the first Revit release that changes the API.",
          ],
        },
        {
          id: "version-updates",
          heading: "What happens when Revit ships its next version",
          image: versions.en,
          paragraphs: [
            "Autodesk ships a new Revit every year, and the API changes between some of them. Revit 2025 moved to .NET 8, and add-ins built for earlier versions had to be recompiled before they would load. The risk is permanent. It is not something only weak vendors run into.",
            "The right question is not whether this risk exists. It is how cost and turnaround are decided when it arrives. Autodesk's own [Certified Apps Program](https://aps.autodesk.com/app-store/certified-apps/how-apply), which currently covers Inventor and Vault rather than Revit, asks certified apps to support the latest release and the one before it. That is a fair bar to ask of any Revit vendor too.",
          ],
        },
        {
          id: "support",
          heading: "Support after delivery, not just before the invoice",
          paragraphs: [
            "Before the contract, every company is responsive. The difference shows when a bug appears three weeks after delivery. Response time, a documented way to report the bug, and whether the cost of a fix is agreed in advance or negotiated each time all matter here.",
            "The best check is asking a past client about one real bug, not about support in general. An answer with a date, a turnaround and an outcome is worth more than \"their support is great.\"",
            "Ask, too, what support covers. Fixing a bug in the delivered tool is one thing. Changing the tool because your own standard changed is new work, and a good contract says which is which.",
          ],
        },
        {
          id: "questions",
          heading: "Questions to ask before you sign",
          paragraphs: [
            "Seven questions cover most of this page, and a good company answers them without hedging:",
          ],
          list: {
            ordered: true,
            items: [
              "Which part of our workflow would you look at first, and why?",
              "Can we see one tool you built that is still in use, and speak to someone who uses it?",
              "Which Revit versions will the tool support, and who updates it next year?",
              "Who owns the source code, and what exactly is handed over?",
              "How is the tool tested, and on whose files?",
              "What does the tool do when an input is wrong?",
              "How is a bug reported after delivery, and how is a fix priced?",
            ],
          },
        },
        {
          id: "compare-quotes",
          heading: "How to compare two quotes",
          paragraphs: [
            "Two quotes for the same tool rarely describe the same tool. Before comparing totals, line them up on scope:",
          ],
          list: {
            items: [
              "**Put the step lists side by side.** A cheaper quote often covers fewer steps, or leaves out the exception cases.",
              "**Check the version line.** One quote may only cover the Revit version you run today.",
              "**Look for testing and handover.** Testing on your files, the source code and the build instructions are sometimes priced separately, and sometimes missing altogether.",
              "**Compare the support terms**, including how a fix after delivery is priced.",
            ],
          },
          after: [
            "Once the scopes match, whatever difference in price remains is a real difference in approach, and worth asking about.",
          ],
        },
        {
          id: "red-flags",
          heading: "Red flags worth walking away from",
          image: flags.en,
          paragraphs: [
            "One of the founder's debugging exams at school came down to a single spelling mistake: the only deduction from 23.5 out of 24, in a class where the highest score was 18. Not a logic error. Not a misunderstood algorithm. A typo. The problem that does the damage is almost never the complicated part. It is the small detail nobody took seriously.",
            "Choosing a company works the same way. A dazzling portfolio or a polished pitch hides the real risk. The signs worth taking seriously are smaller: hesitation about sharing a real example, reluctance to talk about code ownership, a price before any scoping, and a vague answer when you ask what happens after a Revit update.",
            "**If an add-in already on the Autodesk marketplace solves your problem today, do not commission custom development**, from us or anyone else. Buying an existing tool is cheaper and faster. Custom work earns its cost when nothing on the market fits your workflow.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Choosing a Revit plugin development company is not about the prettiest portfolio or the lowest price. It is a handful of plain, checkable questions: do they understand your workflow, who owns the code, what happens after the next Revit release, and what support looks like after delivery. A vague answer to any of them tells you as much as a clear one.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost/" },
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit plugin development in Tehran", href: "/revit-plugin-development-tehran/" },
        { label: "Digital tools on the Products page", href: "/products/#digital-tools" },
        { label: "About the studio", href: "/about/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk Platform Services — Certified Apps Program, How to Apply", href: "https://aps.autodesk.com/app-store/certified-apps/how-apply" },
        { label: "Autodesk Platform Services — Marketplace Publisher Center", href: "https://aps.autodesk.com/app-store/publisher-center" },
        { label: "Autodesk Developer Blog — Migrating from .NET 4.8 to .NET Core 8", href: "https://blog.autodesk.io/migrating-from-net-48-to-net-core-8/" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What does a Revit plugin development company do?",
          answer:
            "It builds custom tools that run inside Revit, usually in C# against the Revit API, around a workflow specific to your office. The better ones also review the workflow first, test on your real files, and keep the tool working across Revit releases.",
        },
        {
          question: "What's the difference between a company and a freelancer?",
          answer:
            "The code can be just as good. The difference is continuity: when a freelancer's next contract starts, updates and fixes for your tool wait. A company is set up so someone is still answering after the original developer has moved on.",
        },
        {
          question: "Should we hire an in-house developer instead?",
          answer:
            "If there is a steady stream of tools to build, often yes. For one or two tools a year, a full-time role tends to drift into general IT, and an outside team with a complete code handover is the better fit.",
        },
        {
          question: "Who usually owns the code for a custom Revit plugin?",
          answer:
            "Usually the client, unless the contract says otherwise. Put it in writing before work starts, along with exactly what is handed over: the source code, the build instructions and the installer.",
        },
        {
          question: "What happens if a plugin breaks after a Revit update?",
          answer:
            "It is a permanent risk, not an exception; Revit 2025's move to .NET 8 stopped older add-ins loading until they were recompiled. Agree in advance how a fix is priced and how quickly it is turned around.",
        },
        {
          question: "How do we check a company's support before signing?",
          answer:
            "Ask a past client about one real bug: when it was reported, how long the fix took and what it cost. A specific answer is far more reliable than a general description of good support.",
        },
        {
          question: "Can a remote team build our Revit plugin?",
          answer:
            "Yes, if the milestones are concrete. Short stages that each end with the tool running on one of your files matter more than being in the same city.",
        },
        {
          question: "When should we not commission custom development at all?",
          answer:
            "When an add-in already on the Autodesk marketplace solves the same problem. Custom development earns its cost only when nothing on the market fits your workflow.",
        },
      ],
    },
  },
};
