import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-room-finishing-automation";
const ROOMS_API =
  "https://help.autodesk.com/cloudhelp/2024/ENU/Revit-API/files/Revit_API_Developers_Guide/Discipline_Specific_Functionality/Architecture/Revit_API_Revit_API_Developers_Guide_Discipline_Specific_Functionality_Architecture_Rooms_html.html";
const FLOOR_CREATE = "https://www.revitapidocs.com/2022/a9c74a9f-46eb-a1b7-608e-2039f06be579.htm";
const ENECA = "https://enecagroup.com/news/bim/it-eneca-s-plugin-automates-revit-finishes/";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-room-finishing-automation", {
  fa: "دیوار بتنی و کف سنگ‌فرش یک گذرگاه در نور کم، برای نازک‌کاری خودکار اتاق‌ها در رویت",
  en: "A concrete wall and paved floor in a dim passage, for automating room finishes in Revit",
});
const materials = img("room-finish-materials", {
  fa: "کاشی‌های سنگی تیره با چیدمان مورب، مانند مصالح نازک‌کاری که بر اساس نوع اتاق انتخاب می‌شوند",
  en: "Dark stone tiles laid on the diagonal, like finish materials chosen by room type",
});

export const revitRoomFinishingAutomation: ArticlePage = {
  slug: "revit-room-finishing-automation",
  content: {
    fa: {
      slug: "revit-room-finishing-automation",
      meta: {
        title: "نازک‌کاری خودکار در رویت با پلاگین اختصاصی، آرتینکست",
        description:
          "نازک‌کاری خودکار در رویت: پلاگین از مرز اتاق‌ها دیوار نازک‌کاری، کف، سقف و قرنیز می‌سازد. قواعد، جزئیاتی که خطا ایجاد می‌کنند، به‌روزرسانی و متره را بخوانید.",
      },
      keywords: [
        "نازک‌کاری خودکار در رویت",
        "پلاگین نازک‌کاری رویت",
        "متره نازک‌کاری در رویت",
        "اسکجوال نازک‌کاری اتاق‌ها در رویت",
        "مدل‌سازی کف و قرنیز در رویت",
      ],
      breadcrumb: "نازک‌کاری خودکار در رویت",
      category: "BIM و Revit",
      title: "نازک‌کاری خودکار در رویت؛ آنچه پلاگین می‌سازد و جزئیات کوچکی که خطا ایجاد می‌کنند",
      leadOpinion:
        "بخش پیچیده‌ی نازک‌کاری خودکار، یعنی هندسه‌ی ساخته‌شده از مرز اتاق‌ها، به‌ندرت خطا می‌دهد. خطا معمولاً در یک آستانه‌ی در، یک شکاف در مرز اتاق یا اتاقی است که کسی نازک‌کاری آن را مشخص نکرده است.",
      publishedAt: "2026-09-28",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی رویت و اسکریپت‌های Dynamo را برای خودکارسازی مدل‌سازی و مستندسازی در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "manual", label: "نازک‌کاری دستی" },
        { id: "builds", label: "آنچه پلاگین می‌سازد" },
        { id: "rules", label: "قواعد نازک‌کاری" },
        { id: "details", label: "جزئیات کوچک" },
        { id: "update", label: "تغییر طرح" },
        { id: "takeoff", label: "متره و اسکجوال" },
        { id: "choice", label: "افزونه‌ی آماده یا اختصاصی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "نازک‌کاری خودکار در رویت یعنی پلاگینی که مرز هر اتاق را می‌خواند و نازک‌کاری آن را به‌صورت المان‌های واقعی می‌سازد: دیوارهای نازک‌کاری در محیط اتاق، کف و سقف در داخل آن و قرنیز در پای دیوارها، به‌گونه‌ای که هر المان به اتاق خود متصل باشد. انجام دستی این کار برای هر طبقه، ساعت‌ها ساخت دیوارهای نازک، Parts و تنظیم دستگیره‌های شکل است. با پلاگین، قواعد یک‌بار نوشته می‌شوند و همه‌ی اتاق‌ها از آن‌ها پیروی می‌کنند.\n\nنگرانی اصلی معمولاً هندسه است، اما خطا به‌ندرت از هندسه ایجاد می‌شود.\n\nبنیان‌گذار آرتینکست در دبیرستان در آزمونی شرکت کرد که آزمون رفع خطا بود: کد معیوب، پیدا کردن خطاها، از ۲۰ نمره. بالاترین نمره‌ی کلاس ۱۸ بود و نمره‌ی او ۲۳٫۵ از ۲۴. تنها نمره‌ای که از دست رفت، به دلیل یک غلط املایی بود. **خطرناک‌ترین خطاها پیچیده‌ترین آن‌ها نیستند.** در مدل نازک‌کاری نیز خطا معمولاً در دری است که برای آستانه‌ی آن قاعده‌ای نوشته نشده، در شکافی کوچک در مرز یک اتاق یا در اتاقی که نازک‌کاری آن مشخص نشده است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "manual",
          heading: "چرا مدل‌سازی دستی نازک‌کاری زمان زیادی می‌گیرد",
          paragraphs: [
            "Revit دو راه برای ثبت نازک‌کاری در اختیار می‌گذارد. راه اول، پارامترهای متنی اتاق است: Base Finish، Wall Finish، Floor Finish و Ceiling Finish. این پارامترها اسکجوال نازک‌کاری را پر می‌کنند، اما هیچ مقداری برای متره تولید نمی‌کنند.",
            "راه دوم، مدل‌سازی نازک‌کاری به‌صورت المان‌های جداگانه است: دیوارهای نازک در کنار دیوار اصلی، کف‌های نازک روی دال سازه‌ای و Parts برای تقسیم لایه‌های دیوار. این روش متره‌ی واقعی تولید می‌کند، اما برای هر اتاق باید دیوارها ساخته شوند، به دیوار اصلی متصل شوند، ارتفاع آن‌ها تنظیم شود و بازشوها دستی برش داده شوند. در یک ساختمان با صدها اتاق، این کار چند روز زمان می‌گیرد و با هر تغییر طرح باید تکرار شود.",
          ],
        },
        {
          id: "builds",
          heading: "پلاگین نازک‌کاری رویت چه چیزهایی را می‌سازد",
          paragraphs: [
            "Revit API مرز هر اتاق را از طریق متد SpatialElement.GetBoundarySegments در اختیار می‌گذارد. پلاگین از همین مرز، این المان‌ها را می‌سازد:",
          ],
          list: {
            items: [
              "**دیوارهای نازک‌کاری** در امتداد هر ضلع مرز، با ارتفاعی که از خود اتاق خوانده می‌شود.",
              "**کف نازک‌کاری** با متد Floor.Create، که از Revit 2022 یک حلقه‌ی بسته از منحنی‌ها، تایپ کف و تراز را دریافت می‌کند.",
              "**سقف کاذب** در ارتفاع تعیین‌شده برای هر نوع اتاق.",
              "**قرنیز** به‌صورت Wall Sweep یا فمیلی خطی، با قطع‌شدن در محل درها.",
              "**برش بازشوها** در دیوارهای نازک‌کاری، در محل درها و پنجره‌های دیوار اصلی.",
              "**شماره و نام اتاق** روی هر المان ساخته‌شده، تا اسکجوال‌ها و متره بر اساس اتاق مرتب شوند.",
            ],
          },
          after: [
            "افزونه‌ی Finishing شرکت IT-Eneca نمونه‌ای از همین الگوست: دیوارهای نازک‌کاری را بر اساس مرز اتاق‌ها می‌سازد، ارتفاع را از مشخصات اتاق کپی می‌کند و شماره یا نام اتاق را در هر المان ثبت می‌کند.",
          ],
        },
        {
          id: "rules",
          heading: "قواعد نازک‌کاری از اتاق خوانده می‌شوند",
          image: materials.fa,
          paragraphs: [
            "پلاگین تصمیم نمی‌گیرد کف آشپزخانه سرامیک باشد. این تصمیم پیش از اجرای پلاگین در جدولی گرفته می‌شود که نوع هر اتاق را به تایپ‌های Revit متصل می‌کند:",
          ],
          list: {
            items: [
              "**نوع اتاق به نازک‌کاری**: سرویس بهداشتی به کاشی دیوار تا ارتفاع مشخص و کف سرامیک ضدلغزش، دفتر کار به رنگ و کف‌پوش.",
              "**تایپ دیوار اصلی به تایپ دیوار نازک‌کاری**: دیوار بتنی و دیوار بلوکی ممکن است به لایه‌ی نازک‌کاری متفاوتی نیاز داشته باشند.",
              "**استثناها**: اتاق‌هایی که از قاعده‌ی کلی پیروی نمی‌کنند و باید به‌صورت جداگانه مشخص شوند.",
            ],
          },
          after: [
            "این جدول مهم‌ترین بخش کار است. **پلاگین فقط به اندازه‌ی جدول قواعد خود دقیق است** و اگر نوع یک اتاق خالی مانده باشد، هیچ هندسه‌ی دقیقی آن را جبران نمی‌کند.",
          ],
        },
        {
          id: "details",
          heading: "جزئیات کوچکی که در نازک‌کاری خودکار خطا ایجاد می‌کنند",
          paragraphs: [
            "این موارد بخش زیادی از زمان توسعه و آزمون را به خود اختصاص می‌دهند:",
          ],
          list: {
            items: [
              "**آستانه‌ی درها**: کف نازک‌کاری تا کجای در ادامه پیدا می‌کند، تا لبه‌ی دیوار، تا محور در یا تا زیر کل ضخامت دیوار؟",
              "**شکاف در مرز اتاق**: دیواری که پارامتر Room Bounding آن غیرفعال است یا خط جداکننده‌ای که کامل بسته نشده، اتاق را بدون مرز بسته رها می‌کند.",
              "**ستون‌ها و داکت‌ها**: عناصری داخل اتاق که مرز آن را تغییر می‌دهند و به نازک‌کاری جداگانه نیاز دارند.",
              "**اتاق‌های جانمایی‌نشده یا تکراری**: اتاق‌هایی که در اسکجوال وجود دارند، اما مساحت یا مرز معتبری ندارند.",
              "**دیوارهای منحنی**: که قطعه‌های مرزی آن‌ها کمان هستند و دیوار نازک‌کاری باید همان انحنا را دنبال کند.",
            ],
          },
          after: [
            "پلاگین مناسب هر اتاقی را که نتوانسته پردازش کند، همراه با دلیل آن گزارش می‌دهد. پیش از اجرای نازک‌کاری، [کنترل کیفیت مدل رویت](/articles/revit-model-checker/) اتاق‌های بدون مرز و تکراری را شناسایی می‌کند.",
          ],
        },
        {
          id: "update",
          heading: "وقتی طرح تغییر می‌کند",
          paragraphs: [
            "نازک‌کاری بارها در طول پروژه تغییر می‌کند. پلاگینی که فقط یک‌بار اجرا شود، پس از اولین تغییر طرح، المان‌هایی بی‌ارتباط با اتاق‌ها در مدل باقی می‌گذارد.",
            "برای به‌روزرسانی، هر المان ساخته‌شده باید شناسه‌ی اتاق خود را در یک پارامتر مشترک نگه دارد. در اجرای بعدی، پلاگین المان‌هایی را که اتاق آن‌ها تغییر کرده دوباره می‌سازد، المان‌هایی را که اتاقشان حذف شده گزارش می‌دهد و بقیه را دست‌نخورده باقی می‌گذارد. در غیر این صورت، هر اجرای دوباره یک لایه‌ی تکراری روی لایه‌ی قبلی می‌سازد.",
          ],
        },
        {
          id: "takeoff",
          heading: "متره‌ی نازک‌کاری و اسکجوال اتاق‌ها",
          paragraphs: [
            "نازک‌کاری مدل‌شده، متره‌ی مصالح را از هندسه‌ی واقعی به دست می‌دهد. دو مورد را پیش از استفاده از این اعداد بررسی کنید: هم‌پوشانی دیوارهای نازک‌کاری در گوشه‌ها، که مساحت را دو بار شمارش می‌کند، و کسر بازشوها از مساحت دیوار.",
            "اسکجوالی که بر اساس شماره‌ی اتاق مرتب شده، مساحت کف، دیوار و سقف هر اتاق را کنار هم نشان می‌دهد. [خروجی Excel از اسکجوال رویت](/articles/revit-schedule-to-excel-export/) توضیح می‌دهد این اعداد چگونه بدون ازدست‌رفتن ارتباط با المان‌ها به Excel منتقل شوند.",
          ],
        },
        {
          id: "choice",
          heading: "افزونه‌ی آماده، اسکریپت Dynamo یا پلاگین اختصاصی",
          paragraphs: [
            "چند افزونه‌ی رایگان و تجاری برای نازک‌کاری در Autodesk App Store وجود دارد. اگر هر اتاق یک نوع نازک‌کاری دارد و قاعده‌ی خاصی برای درها و به‌روزرسانی لازم نیست، یکی از همین افزونه‌ها را امتحان کنید. برای این کار به ما یا شرکتی مانند ما نیازی ندارید.",
            "اسکریپت Dynamo برای آزمون قواعد روی یک طبقه مناسب است. [توسعه‌ی اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) توضیح می‌دهد چه زمانی اسکریپت کافی است. پلاگین اختصاصی زمانی ارزش دارد که قواعد نازک‌کاری دفتر، نام‌گذاری فارسی اتاق‌ها، به‌روزرسانی پس از تغییر طرح و گزارش خطا باید در یک ابزار جمع شوند. این نوع کار بخشی از خدمات [توسعه پلاگین رویت](/revit-plugin-development/) است.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "ساخت دیوار، کف و سقف از مرز اتاق‌ها بخش شناخته‌شده‌ی نازک‌کاری خودکار در رویت است. نتیجه‌ی نهایی را جزئیات کوچک تعیین می‌کنند: آستانه‌ی درها، مرزهای بسته‌نشده، اتاق‌های بدون نوع و اجرای دوباره پس از تغییر طرح. پلاگینی که این موارد را گزارش کند، متره‌ای قابل‌اتکا تحویل می‌دهد. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "خروجی Excel از اسکجوال رویت", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
        { label: "ساخت فمیلی رویت", href: "/revit-family-creation/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk, Revit API Developer's Guide: Rooms", href: ROOMS_API },
        { label: "Revit API Docs, Floor.Create Method (Revit 2022)", href: FLOOR_CREATE },
        { label: "IT-Eneca, plugin that automates Revit finishes", href: ENECA },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "نازک‌کاری خودکار در رویت چگونه انجام می‌شود؟",
          answer:
            "پلاگین مرز هر اتاق را از Revit API می‌خواند و بر اساس جدول قواعد، دیوارهای نازک‌کاری، کف، سقف و قرنیز را می‌سازد. شماره و نام اتاق روی هر المان ثبت می‌شود تا اسکجوال و متره بر اساس اتاق مرتب شوند.",
        },
        {
          question: "تفاوت پارامترهای نازک‌کاری اتاق با نازک‌کاری مدل‌شده چیست؟",
          answer:
            "پارامترهای Wall Finish و Floor Finish متن هستند و فقط اسکجوال را پر می‌کنند. نازک‌کاری مدل‌شده المان واقعی است و متره‌ی مصالح را از هندسه به دست می‌دهد.",
        },
        {
          question: "پلاگین با درها چه می‌کند؟",
          answer:
            "در دیوارهای نازک‌کاری، در محل درهای دیوار اصلی بازشو برش می‌دهد و قرنیز را در محل درها قطع می‌کند. محل پایان کف نازک‌کاری در آستانه‌ی در باید پیش از اجرا در قواعد تعیین شود.",
        },
        {
          question: "اگر طرح تغییر کند، باید نازک‌کاری را دستی اصلاح کرد؟",
          answer:
            "اگر هر المان شناسه‌ی اتاق خود را نگه دارد، خیر. پلاگین در اجرای بعدی المان‌های اتاق‌های تغییریافته را دوباره می‌سازد و المان‌های اتاق‌های حذف‌شده را گزارش می‌دهد.",
        },
        {
          question: "آیا Dynamo برای نازک‌کاری خودکار کافی است؟",
          answer:
            "برای آزمون قواعد روی یک طبقه یا یک پروژه، بله. برای استفاده‌ی مداوم در دفتر، با به‌روزرسانی و گزارش خطا، پلاگین اختصاصی قابل‌اتکاتر است.",
        },
        {
          question: "چرا متره‌ی نازک‌کاری مدل‌شده با برآورد دستی تفاوت دارد؟",
          answer:
            "معمولاً به دلیل هم‌پوشانی دیوارها در گوشه‌ها یا کسرنشدن بازشوها. هر دو باید پیش از استفاده از متره در قواعد پلاگین و اسکجوال بررسی شوند.",
        },
        {
          question: "چه زمانی به پلاگین اختصاصی نیاز ندارید؟",
          answer:
            "زمانی که هر اتاق یک نوع نازک‌کاری دارد و قاعده‌ی خاصی برای درها و به‌روزرسانی لازم نیست. در این حالت یکی از افزونه‌های آماده‌ی Autodesk App Store کافی است.",
        },
      ],
    },
    en: {
      slug: "revit-room-finishing-automation",
      meta: {
        title: "Revit Room Finishing Automation Plugin: A Guide, ARTINEXT",
        description:
          "A Revit room finishing automation plugin builds finish walls, floors, ceilings and skirting from room boundaries. Rules, the small details that break it, updates, takeoff.",
      },
      keywords: [
        "revit room finishing automation plugin",
        "wall finish automation revit",
        "revit room finishes",
        "room finish schedule revit",
        "automatic floor finish revit",
      ],
      breadcrumb: "Revit room finishing automation",
      category: "BIM & Revit",
      title: "A Revit room finishing automation plugin: what it builds, and the small details that break it",
      leadOpinion:
        "The complicated part of automated finishes, geometry built from room boundaries, rarely fails. What fails is a door threshold, a gap in a room boundary, or a room nobody assigned a finish to.",
      publishedAt: "2026-09-28",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit plugins and Dynamo scripts to automate modelling and documentation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "manual", label: "Finishes by hand" },
        { id: "builds", label: "What the plugin builds" },
        { id: "rules", label: "Finish rules" },
        { id: "details", label: "The small details" },
        { id: "update", label: "When the design changes" },
        { id: "takeoff", label: "Takeoff and schedules" },
        { id: "choice", label: "Off the shelf or custom" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A Revit room finishing automation plugin reads each room's boundary and builds its finishes as real elements: finish walls around the perimeter, a floor finish and a ceiling inside it, skirting along the base, each one tagged with the room it belongs to. By hand, that's hours of thin walls, parts and shape handles per floor. With a plugin, the rules are written once and every room follows them.\n\nThe geometry is what people worry about. It's rarely what goes wrong.\n\nIn high school, the founder sat a final that was a debugging test: broken code, find the mistakes, graded out of 20. The class high was 18. The founder's score was 23.5 out of a possible 24. The one deduction was a spelling mistake. **The most dangerous bugs aren't the complicated ones.** In a finish model they're a door with no threshold rule, a small gap in a room boundary, a room nobody gave a finish.",
      heroImage: hero.en,
      sections: [
        {
          id: "manual",
          heading: "Why room finishes are slow to model by hand",
          paragraphs: [
            "Revit offers two ways to record finishes. The first is the room's text parameters: Base Finish, Wall Finish, Floor Finish and Ceiling Finish. They fill a finish schedule, and they produce no quantities at all.",
            "The second is modelling finishes as separate elements: thin walls against the main wall, thin floors on the structural slab, Parts to split wall layers. That gives real quantities, but every room needs its walls built, joined to the host wall, set to height, and cut at every opening by hand. In a building with hundreds of rooms that's days of work, repeated after every design change.",
          ],
        },
        {
          id: "builds",
          heading: "What a room finishing plugin actually builds",
          paragraphs: [
            "The Revit API returns each room's boundary through SpatialElement.GetBoundarySegments. From that boundary, the plugin builds:",
          ],
          list: {
            items: [
              "**Finish walls** along each boundary segment, at a height read from the room itself.",
              "**A floor finish** with Floor.Create, which since Revit 2022 takes a closed loop of curves, a floor type and a level.",
              "**A ceiling** at the height set for each room type.",
              "**Skirting**, as a wall sweep or a line-based family, broken at doors.",
              "**Openings cut** in the finish walls wherever the host wall has a door or window.",
              "**The room number and name** written onto every element, so schedules and takeoffs sort by room.",
            ],
          },
          after: [
            "IT-Eneca's Finishing plugin is one example of the pattern: it creates wall finishes from room boundaries, copies heights from the room, and writes the room number or name into each finish element.",
          ],
        },
        {
          id: "rules",
          heading: "The finish rules come from the room, not the modeller",
          image: materials.en,
          paragraphs: [
            "The plugin doesn't decide that the kitchen floor is ceramic. That decision is made before it runs, in a table linking each room type to Revit types:",
          ],
          list: {
            items: [
              "**Room type to finish**: a toilet gets wall tiles to a set height and a slip-resistant floor, an office gets paint and carpet.",
              "**Host wall type to finish wall type**: a concrete wall and a block wall may need different finish build-ups.",
              "**Exceptions**: rooms that don't follow the general rule and have to be named one by one.",
            ],
          },
          after: [
            "That table is the most important part of the job. **A plugin is only as accurate as its rule table**, and no amount of precise geometry makes up for a room whose type was left blank.",
          ],
        },
        {
          id: "details",
          heading: "The small details that break automated finishes",
          paragraphs: [
            "These take up most of the development and testing time:",
          ],
          list: {
            items: [
              "**Door thresholds**: where does the floor finish stop, at the wall face, at the door's centre line, or under the full wall thickness?",
              "**Gaps in room boundaries**: a wall with Room Bounding switched off, or a separation line that doesn't quite close, leaves a room without a closed boundary.",
              "**Columns and shafts**: elements inside a room that change its boundary and need finishes of their own.",
              "**Unplaced and redundant rooms**: rooms that exist in the schedule but have no valid area or boundary.",
              "**Curved walls**: boundary segments that are arcs, which the finish wall has to follow.",
            ],
          },
          after: [
            "A good plugin reports every room it couldn't process, and why. Before running finishes at all, a [Revit model checker](/articles/revit-model-checker/) will catch unbounded and redundant rooms.",
          ],
        },
        {
          id: "update",
          heading: "When the design changes",
          paragraphs: [
            "Finishes change many times over a project. A plugin that runs once leaves elements behind that no longer match their rooms after the first design change.",
            "To update, every element it creates has to store its room's ID in a shared parameter. On the next run, the plugin rebuilds elements whose room changed, reports elements whose room was deleted, and leaves the rest alone. Otherwise every rerun lays a duplicate layer over the last one.",
          ],
        },
        {
          id: "takeoff",
          heading: "Finish takeoff and the room schedule",
          paragraphs: [
            "Modelled finishes give material quantities from real geometry. Check two things before trusting the numbers: finish walls overlapping at corners, which counts area twice, and openings deducted from wall area.",
            "A schedule sorted by room number puts each room's floor, wall and ceiling areas side by side. [Exporting Revit schedules to Excel](/articles/revit-schedule-to-excel-export/) covers how to move those numbers into Excel without losing the link to the elements.",
          ],
        },
        {
          id: "choice",
          heading: "An off-the-shelf add-in, a Dynamo graph, or a custom plugin",
          paragraphs: [
            "The Autodesk App Store has several free and commercial finishing add-ins. If each room has one finish type and you don't need special rules for doors or updates, try one of those. You don't need us, or anyone like us, for that.",
            "A Dynamo graph is a good way to test the rules on one floor, and [custom Dynamo script development](/articles/custom-dynamo-script-development/) covers when a graph is enough. A custom plugin earns its cost when the office's finish rules, Persian room names, updates after design changes and error reporting all have to live in one tool. That's the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Building walls, floors and ceilings from room boundaries is the well-understood part of automating finishes in Revit. The small things decide the result: door thresholds, boundaries that don't close, rooms without a type, reruns after a design change. A plugin that reports those gives you a takeoff you can rely on. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Exporting Revit schedules to Excel", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
        { label: "Revit family creation", href: "/revit-family-creation/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk, Revit API Developer's Guide: Rooms", href: ROOMS_API },
        { label: "Revit API Docs, Floor.Create Method (Revit 2022)", href: FLOOR_CREATE },
        { label: "IT-Eneca, plugin that automates Revit finishes", href: ENECA },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "How does room finishing automation in Revit work?",
          answer:
            "A plugin reads each room's boundary through the Revit API and, following a rule table, builds finish walls, floors, ceilings and skirting. The room number and name go onto every element so schedules and takeoffs sort by room.",
        },
        {
          question: "What's the difference between room finish parameters and modelled finishes?",
          answer:
            "Wall Finish and Floor Finish are text parameters that only fill a schedule. Modelled finishes are real elements and give material quantities from geometry.",
        },
        {
          question: "What does the plugin do at doors?",
          answer:
            "It cuts openings in the finish walls where the host wall has a door and breaks the skirting there. Where the floor finish stops at the threshold has to be set in the rules before it runs.",
        },
        {
          question: "If the design changes, do finishes have to be fixed by hand?",
          answer:
            "Not if each element stores its room's ID. On the next run the plugin rebuilds elements for changed rooms and reports elements whose room was deleted.",
        },
        {
          question: "Is Dynamo enough for automated finishes?",
          answer:
            "For testing the rules on one floor or one project, yes. For everyday use across an office, with updates and error reports, a custom plugin is more dependable.",
        },
        {
          question: "Why does the modelled finish takeoff differ from a manual estimate?",
          answer:
            "Usually because finish walls overlap at corners or openings weren't deducted. Both have to be checked in the plugin's rules and the schedule before the quantities are used.",
        },
        {
          question: "When don't you need a custom plugin?",
          answer:
            "When each room has one finish type and you need no special rules for doors or updates. One of the ready-made add-ins on the Autodesk App Store will do.",
        },
      ],
    },
  },
};
