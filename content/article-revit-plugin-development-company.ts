import type { Localized } from "@/lib/i18n/config";
import type { ArticleContent, ArticleImage } from "@/content/article-types";

const img = (file: string, alt: { fa: string; en: string }): Localized<ArticleImage> => ({
  fa: {
    src: `/images/articles/revit-plugin-development-company/${file}.webp`,
    srcSmall: `/images/articles/revit-plugin-development-company/${file}-640.webp`,
    srcMedium: `/images/articles/revit-plugin-development-company/${file}-960.webp`,
    alt: alt.fa,
    width: 1200,
    height: 627,
  },
  en: {
    src: `/images/articles/revit-plugin-development-company/${file}.webp`,
    srcSmall: `/images/articles/revit-plugin-development-company/${file}-640.webp`,
    srcMedium: `/images/articles/revit-plugin-development-company/${file}-960.webp`,
    alt: alt.en,
    width: 1200,
    height: 627,
  },
});

const heroImg = img("revit-plugin-development-company-handshake", {
  fa: "دست‌دادن دو نفر در محیط اداری، نماد بستن قرارداد با یک شرکت توسعه پلاگین رویت",
  en: "Two people shaking hands in an office setting, standing in for signing on with a Revit plugin development company",
});
const whatItMeansImg = img("revit-api-software-development-office", {
  fa: "میز کار دو مانیتوره در محیطی کم‌نور با خطوط کد روی صفحه",
  en: "A dual-monitor desk in a dim workspace with lines of code on screen",
});
const workflowFitImg = img("aec-workflow-meeting-discussion", {
  fa: "دو نفر در حال بررسی یک نقشه فنی با دست و خودکار",
  en: "Two people reviewing a technical drawing by hand with a pen",
});
const portfolioImg = img("reviewing-software-portfolio-case-study", {
  fa: "دستی روی صفحه‌لمسی لپ‌تاپ کنار برگه‌های چاپ‌شده، نماد بررسی نمونه‌کار",
  en: "A hand on a laptop trackpad beside printed pages, standing in for reviewing a portfolio",
});
const scopingImg = img("project-scoping-whiteboard-planning", {
  fa: "دفترچه اسکیس معماری باز و خودکار روی میز، نماد جلسه تعیین دامنه کار",
  en: "An open architectural sketch notebook and a pen on a desk, standing in for a project scoping session",
});
const ownershipImg = img("source-code-repository-review", {
  fa: "دستی نزدیک به تبلت با کد روی صفحه",
  en: "A hand near a tablet showing code on screen",
});
const versionUpdatesImg = img("software-version-update-maintenance", {
  fa: "صفحه‌نمایش تاریک با خطوط ترمینال و لاگ سیستم",
  en: "A dark screen with terminal lines and system logs",
});
const supportImg = img("technical-support-communication-office", {
  fa: "مردی در حال صحبت با تلفن ثابت در دفتر کار",
  en: "A man speaking on a landline phone in an office",
});
const redFlagsImg = img("contract-review-warning-signs", {
  fa: "دو نفر در حال بررسی و امضای یک قرارداد چاپی",
  en: "Two people reviewing and signing a printed contract",
});

export const articleRevitPluginDevelopmentCompany: Localized<ArticleContent> = {
  fa: {
    slug: "revit-plugin-development-company",
    meta: {
      title: "انتخاب شرکت توسعه پلاگین رویت: به چه چیزی واقعاً باید نگاه کرد؟",
      description:
        "انتخاب شرکت توسعه پلاگین رویت یعنی بررسی درک آن‌ها از جریان کار، مالکیت کد و پشتیبانی بعد از تحویل، نه فقط نمونه‌کار. راهنمای کامل ارزیابی و علائم هشدار.",
    },
    breadcrumb: "انتخاب شرکت توسعه پلاگین رویت",
    category: "BIM و رویت",
    title: "انتخاب شرکت توسعه پلاگین رویت: به چه چیزی واقعاً باید نگاه کرد؟",
    leadOpinion:
      "خطرناک‌ترین مشکل یک همکاری با شرکت توسعه پلاگین معمولاً از نمونه‌کار ضعیف نمی‌آید؛ از همان جزئیات کوچکی می‌آید که کسی موقع ارزیابی بررسی نکرده: زمان پاسخ‌گویی، مستندسازی، سازگاری با نسخه بعدی رویت.",
    publishedAt: "2026-08-29",
    publishedLabel: "۲۰۲۶/۰۸/۲۹",
    author: {
      name: "تیم آرتینکست",
      role: "استودیوی سیستم‌های دیجیتال",
      bio: "تیمی که پلاگین اختصاصی و اتوماسیون رویت را برای دفاتر معماری و مهندسی می‌سازد و نگه‌داری می‌کند.",
      href: "/about",
    },
    tocHeading: "فهرست مطالب",
    toc: [
      { id: "overview", label: "پاسخ کوتاه" },
      { id: "what-it-means", label: "شرکت توسعه پلاگین رویت دقیقاً یعنی چه" },
      { id: "workflow-fit", label: "آیا جریان کار شما را می‌فهمند، نه فقط API را" },
      { id: "portfolio", label: "یک نمونه‌کار صادقانه چه چیزی واقعاً نشان می‌دهد" },
      { id: "scoping", label: "چطور پیش از نوشتن کد، دامنه کار را مشخص می‌کنند" },
      { id: "ownership", label: "مالکیت کد با چه کسی است و نگه‌داری با چه کسی" },
      { id: "version-updates", label: "وقتی رویت نسخه بعدی را منتشر می‌کند چه اتفاقی می‌افتد" },
      { id: "support", label: "پشتیبانی بعد از تحویل، نه فقط پیش از فاکتور" },
      { id: "red-flags", label: "علائم هشداری که ارزش کنارگذاشتن دارند" },
      { id: "conclusion", label: "جمع‌بندی" },
      { id: "faq", label: "پرسش‌های متداول" },
    ],
    intro:
      "انتخاب شرکت توسعه پلاگین رویت یعنی ارزیابی چند چیز مشخص که هیچ‌کدام در نگاه اول دیده نمی‌شوند: آیا تیم واقعاً جریان کار رویت را می‌فهمد یا فقط API را بلد است، مالکیت کد نهایی با چه کسی است، و بعد از تحویل، پشتیبانی چطور تعریف شده. یک نمونه‌کار زیبا یا یک سایت شرکتی حرفه‌ای، هیچ‌کدام این سؤال‌ها را جواب نمی‌دهند.\n\nاین تصمیم با انتخاب یک پلاگین آماده از فروشگاه فرق دارد. آنجا فقط باید ببینید ابزار کار می‌کند یا نه. اینجا دارید یک رابطه بلندمدت را انتخاب می‌کنید، چون کد اختصاصی، بر خلاف یک محصول عمومی، بعد از هر به‌روزرسانی رویت به کسی نیاز دارد که بداند چرا هر تصمیم آن‌طور گرفته شده.",
    heroImage: heroImg.fa,
    sections: [
      {
        id: "what-it-means",
        heading: "شرکت توسعه پلاگین رویت دقیقاً یعنی چه",
        image: whatItMeansImg.fa,
        paragraphs: [
          "یک شرکت توسعه پلاگین رویت واقعی، تیمی است که با C#، .NET و Revit API کار می‌کند و می‌تواند یک ابزار اختصاصی بسازد که مستقیم داخل رویت اجرا می‌شود، نه یک اسکریپت جانبی. این با خدمات مشاوره‌ای عمومی BIM یا یک فریلنسر که یک‌بار یک پلاگین ساخته فرق دارد؛ تفاوت اصلی در تداوم است، نه در توانایی نوشتن یک خط کد اول.",
          "برخی شرکت‌ها فقط توسعه کد را انجام می‌دهند. برخی دیگر ارزیابی جریان کار، طراحی رابط کاربری و پشتیبانی بلندمدت را هم در دامنه خدمات خود می‌گنجانند. دانستن اینکه یک شرکت مشخص کدام‌یک است، پیش از شروع کار، از هر بخش دیگر این ارزیابی مهم‌تر است.",
        ],
      },
      {
        id: "workflow-fit",
        heading: "آیا جریان کار شما را می‌فهمند، نه فقط API را",
        image: workflowFitImg.fa,
        paragraphs: [
          "تسلط بر Revit API شرط لازم است، نه شرط کافی. تیمی که هرگز کنار یک تیم معماری یا مهندسی واقعی کار نکرده، معمولاً همان تصمیم فنی درست را می‌گیرد اما در جای نادرست: مثلاً یک ابزار که از نظر کد بی‌نقص است اما جریان کاری را که واقعاً روی آن پروژه اتفاق می‌افتد نمی‌فهمد.",
          "بهترین راه بررسی همین است، نه پرسیدن مستقیم «آیا AEC را می‌فهمید». از تیم بخواهید یک نمونه از فرایند واقعی خودتان را توضیح دهند و ببینید چه سؤال‌هایی می‌پرسند. سؤال درباره لبه‌های عجیب فرایند — همان استثناهایی که هیچ مستندی ندارد — نشانه بهتری از تجربه واقعی است تا فهرستی از تکنولوژی‌های استفاده‌شده.",
        ],
      },
      {
        id: "portfolio",
        heading: "یک نمونه‌کار صادقانه چه چیزی واقعاً نشان می‌دهد",
        image: portfolioImg.fa,
        paragraphs: [
          "یک نمونه‌کار خوب فقط تصویر رابط کاربری نشان نمی‌دهد؛ نشان می‌دهد آن ابزار چه مشکل مشخصی را حل کرده و بعد از تحویل چه اتفاقی برایش افتاده. آیا هنوز در حال استفاده است؟ آیا با نسخه‌های جدیدتر رویت به‌روزرسانی شده؟ ابزاری که دو سال پیش ساخته شده و از آن زمان دست نخورده، معمولاً یعنی رابطه با آن مشتری همان‌جا تمام شده، نه اینکه ابزار کامل بوده و نیاز به تغییر نداشته.",
          "**مطالبه یک نمونه واقعی و قابل‌بررسی، نه فقط توصیف کلی، هیچ‌وقت درخواست بیش‌ازحدی نیست.** شرکتی که به این درخواست با تردید جواب می‌دهد، معمولاً یا کار واقعی کمی دارد یا مشتریانش اجازه اشتراک‌گذاری نداده‌اند؛ هر دو حالت ارزش پرسیدن مستقیم را دارد.",
        ],
      },
      {
        id: "scoping",
        heading: "چطور پیش از نوشتن کد، دامنه کار را مشخص می‌کنند",
        image: scopingImg.fa,
        paragraphs: [
          "همه می‌خواهند فقط سراغ ساخت بروند؛ کسی دوست ندارد چند روز اول را صرف پرسیدن سؤال کند. اما همان ساعت‌های بی‌جلوه‌ی جلسه دامنه‌بندی، دقیقاً همان‌جایی است که یک ابزار قابل‌اعتماد از یک ابزار شکننده جدا می‌شود؛ نه چیزی که در دمو دیده می‌شود.",
          "شرکتی که بدون پرسیدن جزئیات فوراً یک قیمت و بازه زمانی می‌دهد، معمولاً همان جزئیاتی را که بعداً هزینه واقعی را تعیین می‌کنند نادیده گرفته. یک جلسه دامنه‌بندی جدی باید شامل ورودی و خروجی دقیق، نمونه‌های داده واقعی پروژه، و فهرست حالت‌های استثنایی باشد، نه فقط یک توصیف یک‌خطی از خواسته.",
        ],
      },
      {
        id: "ownership",
        heading: "مالکیت کد با چه کسی است و نگه‌داری با چه کسی",
        image: ownershipImg.fa,
        paragraphs: [
          "برخلاف یک پلاگین عمومی که از فروشگاه اتودسک خریداری می‌شود، یک ابزار اختصاصی معمولاً کد منبعش متعلق به مشتری است، مگر آنکه قرارداد چیز دیگری بگوید. این باید پیش از شروع کار، به‌صورت مکتوب روشن باشد، نه چیزی که بعداً هنگام تغییر شرکت توسعه‌دهنده کشف شود.",
          "نگه‌داری موضوع جداگانه‌ای است. برخی شرکت‌ها کد را تحویل می‌دهند و همان‌جا رابطه تمام می‌شود؛ برخی دیگر نگه‌داری بلندمدت را بخشی از قرارداد می‌کنند. هیچ‌کدام ذاتاً اشتباه نیست، اما باید از قبل مشخص باشد کدام مدل است، چون یک ابزار بدون مسیر نگه‌داری، دیر یا زود به همان مشکلی برمی‌خورد که این راهنما درباره‌اش هشدار می‌دهد.",
        ],
      },
      {
        id: "version-updates",
        heading: "وقتی رویت نسخه بعدی را منتشر می‌کند چه اتفاقی می‌افتد",
        image: versionUpdatesImg.fa,
        paragraphs: [
          "اتودسک هر سال یک نسخه جدید رویت منتشر می‌کند، و Revit API بین نسخه‌ها گاهی تغییر می‌کند. یک افزونه که امسال بی‌نقص کار می‌کند، ممکن است سال بعد بدون کامپایل مجدد کار نکند. این ریسک همیشگی است، نه چیزی که فقط شرکت‌های ضعیف با آن روبه‌رو می‌شوند.",
          "سؤال درست این نیست که «آیا این ریسک را دارید»؛ سؤال درست این است که «وقتی این اتفاق بیفتد، هزینه و زمان به‌روزرسانی چطور تعیین می‌شود». برنامه Certified Apps اتودسک دقیقاً همین سازگاری با آخرین و نسخه قبلی را از توسعه‌دهندگان می‌خواهد؛ شرکتی که پاسخی مشابه دارد، معمولاً این ریسک را جدی گرفته.",
        ],
      },
      {
        id: "support",
        heading: "پشتیبانی بعد از تحویل، نه فقط پیش از فاکتور",
        image: supportImg.fa,
        paragraphs: [
          "پیش از امضای قرارداد، هر شرکتی پاسخ‌گو به‌نظر می‌رسد. تفاوت واقعی وقتی دیده می‌شود که یک باگ سه هفته بعد از تحویل کشف شود. زمان پاسخ‌گویی، مستندبودن روند گزارش باگ، و اینکه آیا هزینه اصلاح از قبل روشن است یا هر بار مذاکره می‌شود، همه اینجا اهمیت پیدا می‌کنند.",
          "بهترین راه بررسی، پرسیدن از مشتریان قبلی درباره یک باگ واقعی است که پیش آمده، نه پرسیدن کلی درباره کیفیت پشتیبانی. جوابی که یک تاریخ، یک زمان پاسخ و یک نتیجه مشخص دارد، خیلی قابل‌اعتمادتر از «پشتیبانی‌شان عالی است» است.",
        ],
      },
      {
        id: "red-flags",
        heading: "علائم هشداری که ارزش کنارگذاشتن دارند",
        image: redFlagsImg.fa,
        paragraphs: [
          "یکی از امتحان‌های دیباگ تیم ما زمانی فقط با یک غلط املایی نمره کم کرد؛ تنها کسری از نمره‌ای ۲۳.۵ از ۲۴، در حالی که بالاترین نمره کلاس ۱۸ بود. مشکلی که واقعاً آسیب می‌زند تقریباً هیچ‌وقت پیچیده‌ترین بخش پروژه نیست؛ همان جزئیات کوچکی است که کسی موقع ارزیابی جدی نگرفته.",
          "همین منطق درباره انتخاب شرکت هم صادق است. نمونه‌کار خیره‌کننده یا یک ارائه حرفه‌ای، ریسک واقعی را پنهان می‌کند. علائمی که واقعاً باید جدی گرفته شوند: تردید در اشتراک‌گذاری نمونه‌های واقعی، بی‌میلی به بحث درباره مالکیت کد، وعده قیمت و زمان بدون یک جلسه دامنه‌بندی واقعی، و سکوت وقتی از رفتار بعد از یک به‌روزرسانی رویت پرسیده می‌شود.",
          "**اگر فقط یک پلاگین آماده از فروشگاه اتودسک نیاز دارید که مشکل شما را همین حالا حل می‌کند، سفارش توسعه اختصاصی معنا ندارد.** خریدن یک ابزار موجود، ارزان‌تر و سریع‌تر از ساخت چیزی از صفر است؛ توسعه اختصاصی وقتی توجیه دارد که هیچ ابزار آماده‌ای دقیقاً همان جریان کار شما را پوشش ندهد.",
        ],
      },
    ],
    conclusion:
      "انتخاب شرکت توسعه پلاگین رویت واقعاً درباره نمونه‌کار زیبا یا قیمت پایین نیست؛ درباره چند سؤال ساده و قابل‌بررسی است: آیا جریان کار شما را می‌فهمند، مالکیت کد کجاست، بعد از یک به‌روزرسانی رویت چه اتفاقی می‌افتد، و پشتیبانی بعد از تحویل واقعاً چه شکلی است. جوابی که به هرکدام از این سؤال‌ها مبهم است، همان‌قدر مهم است که جوابی که واضح است.",
    internalHeading: "مطالب مرتبط",
    internalLinks: [
      { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost" },
      { label: "توسعه اسکریپت اختصاصی داینامو", href: "/articles/custom-dynamo-script-development" },
      { label: "توسعه پلاگین رویت تهران", href: "/revit-plugin-development-tehran" },
      { label: "راهکار محتوای BIM و رویت", href: "/solutions" },
      { label: "درباره ما", href: "/about" },
    ],
    externalHeading: "منابع",
    externalLinks: [
      {
        label: "Autodesk Platform Services — Certified Apps Program, How to Apply",
        href: "https://aps.autodesk.com/app-store/certified-apps/how-apply",
      },
      { label: "Autodesk Platform Services — App Store Publisher Center", href: "https://aps.autodesk.com/app-store/publisher-center" },
    ],
    faqHeading: "پرسش‌های متداول",
    faq: [
      {
        question: "تفاوت یک شرکت توسعه پلاگین رویت با یک فریلنسر چیست؟",
        answer:
          "تفاوت اصلی در تداوم است. یک فریلنسر ممکن است همان کیفیت کد را داشته باشد، اما وقتی پروژه بعدی‌اش شروع شود یا در دسترس نباشد، پشتیبانی بلندمدت و به‌روزرسانی برای نسخه‌های جدید رویت با ریسک بیشتری همراه است.",
      },
      {
        question: "آیا باید نمونه‌کار واقعی شرکت را بخواهیم؟",
        answer:
          "بله. یک نمونه‌کار خوب باید نشان دهد ابزار چه مشکلی را حل کرده، هنوز در حال استفاده هست یا نه، و آیا با نسخه‌های جدیدتر رویت به‌روزرسانی شده. تردید در پاسخ به این درخواست خودش یک علامت هشدار است.",
      },
      {
        question: "مالکیت کد پلاگین اختصاصی معمولاً با چه کسی است؟",
        answer:
          "معمولاً با مشتری، مگر آنکه قرارداد چیز دیگری بگوید. این نکته باید پیش از شروع کار به‌صورت مکتوب روشن شود، نه بعد از تصمیم به تغییر شرکت توسعه‌دهنده.",
      },
      {
        question: "اگر بعد از یک به‌روزرسانی رویت، پلاگین از کار بیفتد چه باید کرد؟",
        answer:
          "این یک ریسک همیشگی است، نه یک استثنا. پیش از شروع کار باید مشخص باشد هزینه و زمان اصلاح در این حالت چطور تعیین می‌شود؛ شرکتی که از قبل پاسخ روشنی دارد، این ریسک را جدی گرفته.",
      },
      {
        question: "چطور پشتیبانی واقعی یک شرکت را پیش از قرارداد بسنجیم؟",
        answer:
          "به‌جای پرسیدن کلی درباره کیفیت پشتیبانی، از مشتریان قبلی درباره یک باگ واقعی و زمان دقیق رفع آن بپرسید. پاسخی با جزئیات مشخص خیلی قابل‌اعتمادتر از یک توصیف کلی است.",
      },
      {
        question: "کِی اصلاً نباید سراغ توسعه اختصاصی پلاگین برویم؟",
        answer:
          "وقتی یک پلاگین آماده از فروشگاه اتودسک همان مشکل را حل می‌کند. توسعه اختصاصی فقط وقتی توجیه دارد که هیچ ابزار موجودی دقیقاً همان جریان کار شما را پوشش ندهد.",
      },
      {
        question: "بزرگ‌ترین علامت هشدار در انتخاب یک شرکت توسعه پلاگین چیست؟",
        answer:
          "قیمت و زمان‌بندی بدون یک جلسه دامنه‌بندی واقعی. جلسه دامنه‌بندی همان‌جایی است که یک ابزار قابل‌اعتماد از یک ابزار شکننده جدا می‌شود؛ رد کردن این مرحله معمولاً یعنی جزئیات مهم بعداً کشف می‌شوند، نه حالا.",
      },
    ],
  },
  en: {
    slug: "revit-plugin-development-company",
    meta: {
      title: "Choosing a Revit Plugin Development Company: What Matters",
      description:
        "Choosing a Revit plugin development company means checking workflow fit, code ownership, and support after delivery, not just the portfolio. An evaluation guide and red flags.",
    },
    breadcrumb: "Choosing a Revit plugin development company",
    category: "BIM & Revit",
    title: "Choosing a Revit plugin development company: what actually matters",
    leadOpinion:
      "The most dangerous problem in a plugin development partnership rarely comes from a weak portfolio. It comes from the small detail nobody checked during evaluation: response time, documentation, compatibility with next year's Revit.",
    publishedAt: "2026-08-29",
    publishedLabel: "Aug 29, 2026",
    author: {
      name: "ARTINEXT Team",
      role: "Digital Systems Studio",
      bio: "The team that builds and maintains custom Revit plugins and automation for architecture and engineering offices.",
      href: "/about",
    },
    tocHeading: "Table of contents",
    toc: [
      { id: "overview", label: "The short answer" },
      { id: "what-it-means", label: "What a Revit plugin development company actually means" },
      { id: "workflow-fit", label: "Do they understand your workflow, not just the API" },
      { id: "portfolio", label: "What an honest portfolio actually shows" },
      { id: "scoping", label: "How they scope work before writing any code" },
      { id: "ownership", label: "Who owns the code, and who maintains it" },
      { id: "version-updates", label: "What happens when Revit ships its next version" },
      { id: "support", label: "Support after delivery, not just before the invoice" },
      { id: "red-flags", label: "Red flags worth walking away from" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    intro:
      "Choosing a Revit plugin development company means evaluating a few specific things that never show up at first glance: whether the team actually understands the Revit workflow or just knows the API, who owns the finished code, and how support is defined after delivery. A polished portfolio or a professional-looking website answers none of those questions.\n\nThis decision is different from choosing an off-the-shelf plugin from a marketplace. There, all that matters is whether the tool works. Here, you're choosing a long-term relationship, because custom code, unlike a generic product, needs someone who remembers why every decision was made the way it was, after every Revit update.",
    heroImage: heroImg.en,
    sections: [
      {
        id: "what-it-means",
        heading: "What a Revit plugin development company actually means",
        image: whatItMeansImg.en,
        paragraphs: [
          "A real Revit plugin development company is a team that works with C#, .NET, and the Revit API and can build a custom tool that runs directly inside Revit, not a side script. That's different from general BIM consulting, or a freelancer who's built one plugin once. The real difference is continuity, not the ability to write a first line of code.",
          "Some companies only handle code development. Others fold workflow assessment, interface design, and long-term support into their scope. Knowing which one a specific company is, before work starts, matters more than any other part of this evaluation.",
        ],
      },
      {
        id: "workflow-fit",
        heading: "Do they understand your workflow, not just the API",
        image: workflowFitImg.en,
        paragraphs: [
          "Fluency in the Revit API is necessary, not sufficient. A team that's never worked alongside a real architecture or engineering team usually still makes the correct technical decision, just in the wrong place: a tool that's flawless in code but doesn't fit the workflow actually happening on that project.",
          "The best way to check this isn't asking directly whether they \"understand AEC.\" Ask the team to walk through one of your real processes and watch what they ask. Questions about the process's odd edges, the exceptions nobody's documented, are a better sign of real experience than a list of technologies used.",
        ],
      },
      {
        id: "portfolio",
        heading: "What an honest portfolio actually shows",
        image: portfolioImg.en,
        paragraphs: [
          "A good portfolio doesn't just show interface screenshots. It shows what specific problem the tool solved and what happened to it after delivery. Is it still in use? Has it been updated for newer Revit versions? A tool built two years ago and untouched since usually means the relationship with that client ended right there, not that the tool was so complete it never needed a change.",
          "**Asking for one real, checkable example, not just a general description, is never an unreasonable request.** A company that hesitates at this usually either has thin real work behind it or clients who haven't given permission to share; either case is worth asking about directly.",
        ],
      },
      {
        id: "scoping",
        heading: "How they scope work before writing any code",
        image: scopingImg.en,
        paragraphs: [
          "Everyone wants to jump straight to building; nobody enjoys spending the first few days just asking questions. But those unglamorous hours in a scoping session are exactly where a reliable tool separates from a fragile one, not anything visible in a demo.",
          "A company that gives a price and timeline instantly, without asking for detail, has usually skipped over exactly the details that determine the real cost later. A serious scoping session should cover exact inputs and outputs, real project data samples, and a list of exception cases, not a one-line description of the ask.",
        ],
      },
      {
        id: "ownership",
        heading: "Who owns the code, and who maintains it",
        image: ownershipImg.en,
        paragraphs: [
          "Unlike a generic plugin bought from the Autodesk App Store, custom-built source code usually belongs to the client, unless the contract says otherwise. That needs to be in writing before work starts, not discovered later when switching development companies.",
          "Maintenance is a separate question. Some companies deliver the code and the relationship ends there; others fold long-term maintenance into the contract. Neither model is inherently wrong, but which one applies needs to be clear upfront, because a tool with no maintenance path eventually runs into exactly the problem this guide is written to warn about.",
        ],
      },
      {
        id: "version-updates",
        heading: "What happens when Revit ships its next version",
        image: versionUpdatesImg.en,
        paragraphs: [
          "Autodesk ships a new Revit version every year, and the Revit API sometimes changes between versions. An add-in that works flawlessly this year might not work next year without a recompile. That risk is constant, not something only weaker companies run into.",
          "The right question isn't whether this risk exists; it's how cost and turnaround are decided when it happens. Autodesk's own [Certified Apps Program](https://aps.autodesk.com/app-store/certified-apps/how-apply) specifically requires compatibility with the latest and previous annual releases from developers. A company with a similarly clear answer has usually taken this risk seriously.",
        ],
      },
      {
        id: "support",
        heading: "Support after delivery, not just before the invoice",
        image: supportImg.en,
        paragraphs: [
          "Before signing, every company looks responsive. The real difference shows up when a bug surfaces three weeks after delivery. Response time, whether the bug-reporting process is documented, and whether the cost of a fix is agreed upfront or negotiated every time all matter here.",
          "The best way to check is asking past clients about one real bug that came up, not asking generally about support quality. An answer with a date, a response time, and a concrete outcome is far more reliable than \"their support is great.\"",
        ],
      },
      {
        id: "red-flags",
        heading: "Red flags worth walking away from",
        image: redFlagsImg.en,
        paragraphs: [
          "One of our own team's debugging exams once came down to a single spelling mistake, the only deduction from a score of 23.5 out of 24, when the class high was 18. The problem that actually causes damage is almost never the most complicated part of a project. It's the small detail nobody took seriously during evaluation.",
          "The same logic applies to choosing a company. A dazzling portfolio or a polished pitch hides the real risk. The signs actually worth taking seriously: hesitation about sharing real examples, reluctance to discuss code ownership, a price and timeline offered without a real scoping conversation, and silence when asked how they handle a Revit update breaking things.",
          "**If all you need is an off-the-shelf plugin from the Autodesk App Store that solves your problem right now, commissioning custom development doesn't make sense.** Buying an existing tool is cheaper and faster than building something from scratch; custom development earns its cost when no existing tool fits your workflow exactly.",
        ],
      },
    ],
    conclusion:
      "Choosing a Revit plugin development company isn't really about the prettiest portfolio or the lowest price. It's about a few plain, checkable questions: do they understand your workflow, where does code ownership sit, what happens after a Revit update, and what does support actually look like after delivery. A vague answer to any of these matters as much as a clear one.",
    internalHeading: "Related reading",
    internalLinks: [
      { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost" },
      { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development" },
      { label: "Revit plugin development, Tehran", href: "/revit-plugin-development-tehran" },
      { label: "BIM & Revit content solution", href: "/solutions" },
      { label: "About us", href: "/about" },
    ],
    externalHeading: "Further reading",
    externalLinks: [
      {
        label: "Autodesk Platform Services — Certified Apps Program, How to Apply",
        href: "https://aps.autodesk.com/app-store/certified-apps/how-apply",
      },
      { label: "Autodesk Platform Services — App Store Publisher Center", href: "https://aps.autodesk.com/app-store/publisher-center" },
    ],
    faqHeading: "FAQ",
    faq: [
      {
        question: "What's the difference between a Revit plugin development company and a freelancer?",
        answer:
          "The main difference is continuity. A freelancer might write equally good code, but once their next project starts or they become unavailable, long-term support and updates for new Revit versions carry more risk.",
      },
      {
        question: "Should we ask for a company's real portfolio?",
        answer:
          "Yes. A good portfolio should show what problem the tool solved, whether it's still in use, and whether it's been updated for newer Revit versions. Hesitation about this request is itself a red flag.",
      },
      {
        question: "Who usually owns the code for a custom Revit plugin?",
        answer:
          "Usually the client, unless the contract states otherwise. This needs to be clear in writing before work starts, not discovered after deciding to switch development companies.",
      },
      {
        question: "What happens if a plugin breaks after a Revit update?",
        answer:
          "That's a constant risk, not an exception. Before work starts, it should be clear how cost and turnaround for a fix are decided in that case. A company with a clear answer already has taken this risk seriously.",
      },
      {
        question: "How do we check a company's real support quality before signing?",
        answer:
          "Instead of asking generally about support quality, ask past clients about one real bug and exactly how long it took to fix. A specific answer is far more reliable than a general description.",
      },
      {
        question: "When should we not bother with custom plugin development at all?",
        answer:
          "When an off-the-shelf plugin from the Autodesk App Store already solves the same problem. Custom development only earns its cost when no existing tool fits your workflow exactly.",
      },
      {
        question: "What's the biggest red flag when choosing a plugin development company?",
        answer:
          "A price and timeline given without a real scoping conversation. The scoping session is exactly where a reliable tool separates from a fragile one; skipping it usually means important details get discovered later, not now.",
      },
    ],
  },
};
