import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/cad-to-revit-automation";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("cad-to-revit-automation-floor-plans", {
  fa: "دستی که در نور باریک روی پلان معماری اشاره می‌کند، نقطه‌ی شروع تبدیل خودکار CAD به رویت",
  en: "A hand tracing a floor plan in a narrow beam of light, the starting point for CAD-to-Revit automation",
});
const prepare = img("cad-drawing-layer-standards", {
  fa: "ترسیم پلان با مداد روی میز طراحی، جایی که استاندارد لایه‌ها شکل می‌گیرد",
  en: "A plan being drawn by hand at a drafting desk, where a layer standard starts",
});
const model = img("native-revit-model-from-cad", {
  fa: "اسکلت یک ساختمان در حال ساخت، مشابه مدل بومی رویت که از نقشه‌ی CAD ساخته می‌شود",
  en: "A building frame under construction, like the native Revit model built from a CAD plan",
});

export const cadToRevitAutomation: ArticlePage = {
  slug: "cad-to-revit-automation",
  content: {
    fa: {
      slug: "cad-to-revit-automation",
      meta: {
        title: "تبدیل خودکار CAD به رویت؛ از نقشه تا مدل بومی، آرتینکست",
        description:
          "تبدیل خودکار CAD به رویت، نقشه‌های هماهنگ‌شده را به دیوار، کف و بازشوی بومی Revit تبدیل می‌کند. پیش‌نیازهای نقشه، سازوکار افزونه و زمان صرفه‌ی آن را بخوانید.",
      },
      keywords: [
        "تبدیل خودکار CAD به رویت",
        "تبدیل نقشه AutoCAD به مدل رویت",
        "توسعه پلاگین تبدیل CAD به رویت",
        "برنامه‌نویسی Revit API",
        "خدمات اتوماسیون BIM",
      ],
      breadcrumb: "تبدیل خودکار CAD به رویت",
      category: "BIM و Revit",
      title: "تبدیل خودکار CAD به رویت؛ آنچه افزونه می‌سازد و آنچه به تصمیم طراح نیاز دارد",
      leadOpinion:
        "افزونه‌ی تبدیلی که فقط یک دکمه به نظر می‌رسد، حاصل فشرده‌شدن یک مسیر طولانی است. هر قاعده درباره‌ی اینکه کدام خط دیوار است، تصمیمی است که پیش از ساخت آن دکمه گرفته شده است.",
      publishedAt: "2026-09-26",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که افزونه‌های تبدیل داده، از جمله تبدیل CAD و ETABS به Revit، را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-produces", label: "خروجی تبدیل خودکار" },
        { id: "link-vs-import", label: "Link CAD و Import CAD" },
        { id: "manual-route", label: "زمان در روش دستی" },
        { id: "prepare-drawings", label: "پیش‌نیازهای نقشه" },
        { id: "how-it-works", label: "سازوکار افزونه‌ی تبدیل" },
        { id: "levels-floors", label: "ترازها، کف‌ها و اتاق‌ها" },
        { id: "choose-route", label: "Dynamo، پلاگین یا سرویس" },
        { id: "leave-to-people", label: "آنچه به طراح سپرده می‌شود" },
        { id: "structure-mep", label: "سازه و تأسیسات" },
        { id: "worth-it", label: "زمان صرفه‌ی ساخت افزونه" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "تبدیل خودکار CAD به رویت یعنی افزونه‌ای مجموعه‌ی نقشه‌های هماهنگ‌شده‌ی CAD را می‌خواند و بر اساس آن، المان‌های بومی رویت را می‌سازد: دیوارها در تایپ‌های دفتر، کف‌ها، ترازها و درها و پنجره‌هایی که در محل مشخص‌شده در نقشه قرار می‌گیرند. دستورهای Link CAD و Import CAD در خود رویت چنین کاری انجام نمی‌دهند. این دستورها نقشه را به‌صورت یک شیء واردشده به مدل می‌آورند تا روی آن ترسیم شود و همین ترسیم دوباره، بخشی است که هفته‌ها زمان می‌برد.\n\nافزونه‌ی تبدیل، قضاوت را حذف نمی‌کند. آنچه حذف می‌شود، کارهای تکرارشونده است: انتخاب خطوط، انتخاب تایپ دیوار و قراردادن درها، برای تک‌تک المان‌های ساختمان. تصمیم درباره‌ی بخش‌هایی از نقشه که معنای آن‌ها روشن نیست، همچنان بر عهده‌ی یک نفر است.\n\nیکی از ابزارهای خود ما فرآیندی را که حدود ۲ هفته و گاهی نزدیک به ۱ ماه طول می‌کشید، به حدود ۱۰ دقیقه کاهش داد. از بیرون، این ابزار یک دکمه است. **رابط کاربری ساده، حاصل فشرده‌شدن یک مسیر طولانی است، نه نشانه‌ی کم‌عمق‌بودن ابزار.** هر قاعده‌ی پشت آن دکمه، اینکه کدام لایه دیوار است، کدام بلوک در است و وقتی دو خط تقریباً موازی هستند چه باید کرد، تصمیمی است که پیش از ساخت دکمه گرفته شده است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-produces",
          heading: "تبدیل خودکار CAD به رویت دقیقاً چه چیزی تحویل می‌دهد",
          paragraphs: [
            "معیار ارزیابی، خروجی است. مدل تبدیل‌شده باید المان‌هایی داشته باشد که رویت آن‌ها را دیوار، کف و بازشو می‌شناسد و هرکدام تایپ، تراز و پارامترهایی دارند که اسکجوال‌ها می‌توانند آن‌ها را بخوانند. اگر خروجی فقط خطوطی روی یک ویو باشد، یا حجمی In-Place به‌شکل ساختمان، تبدیلی انجام نشده است. نقشه فقط جابه‌جا شده است.",
            "همین معیار، تفاوت این روش با خدماتی را نشان می‌دهد که مجموعه‌ی نقشه را به‌صورت دستی بازترسیم می‌کنند و مدل تحویل می‌دهند. ظاهر نتیجه ممکن است یکسان باشد. تفاوت در مجموعه‌ی نقشه‌ی بعدی است: یا دوباره همان هفته‌ها صرف می‌شود، یا یک اجرا و یک بازبینی.",
          ],
        },
        {
          id: "link-vs-import",
          heading: "Link CAD، Import CAD و اینکه چرا هیچ‌کدام مدل نیستند",
          paragraphs: [
            "رویت دو روش برای واردکردن فایل DWG دارد که هر دو در زبانه‌ی Insert قرار دارند. Link CAD ارجاعی به فایل اصلی نگه می‌دارد، در نتیجه نقشه‌ی اصلاح‌شده با بارگذاری دوباره‌ی لینک به‌روز می‌شود. Import CAD نسخه‌ای ثابت را در پروژه جای می‌دهد که دیگر تغییرات فایل اصلی را دنبال نمی‌کند. مستندات Revit API نتیجه‌ی هر دو را یکسان توصیف می‌کند: یک ImportInstance، یعنی المانی که در عملیات Import یا Link ساخته می‌شود.",
            "یک المان. تمام خطوط، کمان‌ها و بلوک‌های نقشه درون همین المان قرار دارند. رویت می‌تواند لایه‌های آن را نمایش دهد یا پنهان کند و به هندسه‌ی آن اسنپ کند، اما دیواری را که فقط به‌صورت دو خط درون یک فایل واردشده وجود دارد، در اسکجوال نمی‌آورد.",
            "برای ترسیم روی نقشه، Link بهتر از Import است. لینک مدل را سبک‌تر نگه می‌دارد، با نقشه به‌روز می‌شود و پس از تکمیل مدل به‌راحتی حذف می‌شود. گزینه‌ای که باید از آن پرهیز کرد، Explode کردن فایل واردشده است؛ این کار یک المان را به تعداد زیادی خط جداگانه و Line Style جدید تبدیل می‌کند که مدت‌ها پس از حذف نقشه در پروژه باقی می‌مانند.",
            "دو تنظیم تعیین می‌کند که مراحل بعدی درست روی هم قرار بگیرند یا نه. واحد واردکردن باید با واحد نقشه یکسان باشد و به حدس Auto-Detect سپرده نشود، و روش جای‌گذاری، معمولاً Origin to Origin یا Shared Coordinates، باید پیش از ورود اولین پلان توافق شود. پلانی که با مقیاس یا جابه‌جایی نادرست وارد شود، خطای خود را به تمام مراحل بعدی منتقل می‌کند.",
          ],
        },
        {
          id: "manual-route",
          heading: "زمان در روش دستی کجا صرف می‌شود",
          paragraphs: [
            "مراحل روش دستی شناخته‌شده است: پاک‌سازی نقشه، لینک‌کردن آن، ترسیم دیوارها با Pick Lines، قراردادن درها و پنجره‌ها یکی‌یکی، تعریف ترازها، تکمیل پارامترها و در پایان تطبیق همه‌چیز با نقشه. هر مرحله ساده است، اما در ابعاد یک ساختمان واقعی، هیچ‌کدام سریع نیست.",
            "Pick Lines مرحله‌ای است که خودکار به نظر می‌رسد، اما خودکار نیست. این ابزار از هر خطی که انتخاب می‌کنید یک دیوار می‌سازد، یکی پس از دیگری، و هر بار که نقشه تغییر می‌کند، تصمیم درباره‌ی تایپ دیوار، Location Line و ارتفاع را از کاربر می‌خواهد.",
            "مرحله‌ی تطبیق، همان مرحله‌ای است که تیم‌ها نزدیک موعد تحویل حذف می‌کنند و همان مرحله‌ای است که قابل‌اعتمادبودن مدل را تعیین می‌کند. دیواری که از خط نادرست یک جفت خط ترسیم شود، به اندازه‌ی ضخامت خود جابه‌جا است. هیچ هشداری ظاهر نمی‌شود و خطا بعدها به‌صورت اندازه‌ای که جمع آن درست درنمی‌آید، دیده می‌شود.",
          ],
        },
        {
          id: "prepare-drawings",
          heading: "نقشه‌ها پیش از تبدیل باید چه ویژگی‌هایی داشته باشند",
          image: prepare.fa,
          paragraphs: [
            "افزونه‌ی تبدیل آنچه را نقشه نشان می‌دهد می‌خواند، نه آنچه ترسیم‌کننده در نظر داشته است. این دو به‌ندرت یک نقشه هستند.",
            "ریشه‌ی بیشتر تبدیل‌های ناموفق در مجموعه‌ی نقشه است، نه در ابزار. پیش از هر اجرا، مجموعه‌ی نقشه باید این ویژگی‌ها را داشته باشد:",
          ],
          list: {
            items: [
              "**استاندارد لایه‌ای که واقعاً رعایت شده است**: دیوارها، درها، پنجره‌ها، ستون‌ها و حاشیه‌نویسی روی لایه‌های جداگانه، با نام‌های یکسان در تمام شیت‌ها.",
              "**بلوک برای درها و پنجره‌ها**، به‌جای خطوط Explode‌شده، تا هر مورد به‌صورت یک شیء با موقعیت و عرض مشخص خوانده شود.",
              "**ضخامت یکسان برای هر نوع دیوار**، تا یک جفت خط با فاصله‌ی مشخص به یک تایپ دیوار در Revit نسبت داده شود.",
              "**هندسه‌ی تمیز**: گوشه‌های بسته، بدون خطوط تکراری روی هم و بدون دیوارهایی که با هاشور ترسیم شده‌اند.",
              "**یک پلان برای هر تراز، با مبدأ مشترک**، تا طبقات در محل درست روی هم قرار بگیرند.",
            ],
          },
          after: [
            "هیچ‌کدام از این موارد کار تازه‌ای نیست. این همان استاندارد ترسیمی است که بیشتر دفاتر یک‌بار آن را مکتوب کرده‌اند. افزونه‌ی تبدیل، اولین خواننده‌ای است که نقشه را واقعاً بر اساس آن استاندارد می‌سنجد.",
          ],
        },
        {
          id: "how-it-works",
          heading: "افزونه‌ی تبدیل CAD به رویت چگونه کار می‌کند",
          image: model.fa,
          paragraphs: [
            "افزونه‌ی تبدیل، یک Add-in است که بر پایه‌ی Revit API ساخته می‌شود. این افزونه هندسه‌ی نقشه‌ی لینک‌شده را می‌خواند، یعنی تک‌تک خطوط و کمان‌ها و لایه‌ای که هرکدام روی آن قرار دارد. از این‌جا به بعد، کار شامل دسته‌بندی و جای‌گذاری است:",
          ],
          list: {
            ordered: true,
            items: [
              "**دسته‌بندی**: هندسه بر اساس لایه و بلوک به دیوار، بازشو، ستون و مواردی که باید نادیده گرفته شوند تفکیک می‌شود.",
              "**جفت‌کردن خطوط**: خطوط موازی با فاصله‌ی مشخص پیدا می‌شوند و هر جفت به محور یک دیوار با ضخامت معین تبدیل می‌شود.",
              "**تطبیق تایپ**: هر ضخامت و لایه به تایپ دیواری نسبت داده می‌شود که دفتر از پیش در [کتابخانه‌ی فمیلی‌های خود](/revit-family-creation/) دارد.",
              "**جای‌گذاری**: دیوارها روی تراز درست ساخته می‌شوند و درها و پنجره‌ها در محل‌هایی که بلوک‌ها مشخص کرده‌اند، درون دیوار میزبان قرار می‌گیرند.",
              "**گزارش**: تعداد المان‌های ساخته‌شده شمارش می‌شود و مواردی که ساخته نشده‌اند، همراه با موقعیت آن‌ها فهرست می‌شوند تا یک نفر آن‌ها را بررسی کند.",
            ],
          },
          after: [
            "مرحله‌ی پنجم، همان مرحله‌ای است که باید بر آن تأکید کرد. ابزاری که دیوار ناخوانا را بی‌صدا کنار بگذارد، مدلی تحویل می‌دهد که کامل به نظر می‌رسد و کامل نیست. ابزار تبدیل ETABS به Revit ما نیز آنچه را ساخته نشده، روی صفحه گزارش می‌دهد، چون المان جامانده پرهزینه‌ترین موردی است که بعدها باید پیدا شود.",
          ],
        },
        {
          id: "levels-floors",
          heading: "ترازها، کف‌ها و اتاق‌ها از کل مجموعه‌ی نقشه ساخته می‌شوند",
          paragraphs: [
            "دیوارها ساده‌ترین بخش برای توضیح و کوچک‌ترین بخش یک مدل قابل‌استفاده هستند. ترازها از کل مجموعه‌ی نقشه به دست می‌آیند: هر پلان به یک طبقه تعلق دارد و ارتفاع طبقات از مقطع یا جدول ترازها خوانده می‌شود، نه از خود پلان. افزونه‌ی تبدیل باید این ارتفاع‌ها را یک‌بار دریافت کند و تمام ترازها را بر اساس آن‌ها بسازد.",
            "کف‌ها و اتاق‌ها به مرزهای بسته وابسته‌اند. محدوده‌ی دالی که به‌صورت یک پلی‌لاین بسته ترسیم شده، مستقیماً به کف تبدیل می‌شود، اما محدوده‌ای که از قطعه‌خطوط جداگانه تشکیل شده، ابتدا باید به هم متصل شود و فاصله‌ای چند میلی‌متری کافی است تا این کار متوقف شود. اتاق‌ها به دیوارها وابسته‌اند: وقتی دیوارها درست قرار گرفته و به هم متصل شده باشند، رویت در هر فضای بسته یک اتاق قرار می‌دهد.",
            "نام اتاق‌ها مسئله‌ی جداگانه‌ای است. Revit API متن‌های درون فایل CAD واردشده را در اختیار نمی‌گذارد، در نتیجه انتقال نام‌ها معمولاً به خواندن مستقیم خود فایل DWG نیاز دارد، نه هندسه‌ی لینک‌شده‌ی آن.",
          ],
        },
        {
          id: "choose-route",
          heading: "اسکریپت Dynamo، پلاگین اختصاصی یا سرویس تبدیل",
          paragraphs: [
            "سه مسیر واقعی وجود دارد و هرکدام برای حجم متفاوتی از کار مناسب است:",
          ],
          list: {
            items: [
              "**اسکریپت Dynamo** نقشه‌ی لینک‌شده را می‌خواند، خطوط را بر اساس لایه فیلتر می‌کند و از منحنی‌ها دیوار می‌سازد. این روش برای یک پروژه و یک استاندارد ترسیم مناسب است و سریع‌ترین راه برای شناخت محتوای واقعی نقشه‌هاست. نوشته‌ی [توسعه اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) نشان می‌دهد اسکریپت از چه نقطه‌ای دیگر کافی نیست.",
              "**پلاگین اختصاصی** همین کار را از طریق Revit API انجام می‌دهد، با قواعد دسته‌بندی، جدول تطبیق تایپ‌ها و گزارش نهایی. این روش برای دفاتری مناسب است که مجموعه‌ی نقشه را بارها از منابع ثابتی دریافت می‌کنند.",
              "**سکو یا سرویس تبدیل**، که برخی از آن‌ها هندسه را با یادگیری ماشین دسته‌بندی می‌کنند، حتی نقشه‌های بدون استاندارد لایه را نیز می‌خوانند. در عوض، دسته‌بندی به یک حدس تبدیل می‌شود و هر حدس، مانند ترسیم دستی، به بررسی نیاز دارد.",
            ],
          },
          after: [
            "دسته‌بندی بر اساس لایه و نام بلوک قطعی است: یک نقشه‌ی مشخص، هر بار همان مدل را تولید می‌کند. عامل تعیین‌کننده میان این سه مسیر، تکرار است. یک ساختمان که یک‌بار تبدیل می‌شود، ساخت هیچ ابزاری را توجیه نمی‌کند. مجموعه‌ی نقشه‌ای با قالب مشابه که هر ماه می‌رسد، توجیه می‌کند.",
          ],
        },
        {
          id: "leave-to-people",
          heading: "چه بخش‌هایی باید به طراح سپرده شود",
          paragraphs: [
            "خودکارسازی همه‌چیز، نقطه‌ای است که این پروژه‌ها در آن از مسیر خارج می‌شوند. مدل‌سازی دستی برخی بخش‌های نقشه ارزان‌تر از آموزش آن‌ها به ابزار است: دیوارهای منحنی و نامنظم، پله‌ها، جزئیات یک‌باره و هر چیزی که در هر شیت به‌شکل متفاوتی ترسیم شده است.",
            "جزئیات دوبعدی مرز دیگر است. مقطع دیوار یا جزئیات آب‌بندی به‌ندرت باید به هندسه‌ی مدل تبدیل شود. این جزئیات می‌توانند به‌صورت Drafting View، لینک‌شده یا بازترسیم‌شده، منتقل شوند و دوبعدی باقی بمانند.",
            "افزونه‌ی تبدیل مناسب، المان‌های تکرارشونده را می‌سازد و بقیه را همراه با فهرستی از موارد باقی‌مانده و محل آن‌ها، به‌روشنی تحویل می‌دهد. کسی که مدل را تکمیل می‌کند، باید تصمیم بگیرد، نه جست‌وجو کند.",
          ],
        },
        {
          id: "structure-mep",
          heading: "سازه و تأسیسات، مسئله‌هایی متفاوت",
          paragraphs: [
            "بیشتر نوشته‌ها درباره‌ی تبدیل CAD به رویت در معماری متوقف می‌شوند: دیوار، در و پنجره. سازه و تأسیسات به چیزی بیش از هندسه نیاز دارند.",
            "اعضای سازه‌ای باید به‌صورت تیر و ستون با فمیلی، جهت و رفتار تحلیلی درست ساخته شوند. وقتی مدل سازه در نرم‌افزار تحلیل وجود دارد، تبدیل از همان منبع معمولاً قابل‌اعتمادتر از خواندن نقشه‌ی آن است. به همین دلیل ابزار تبدیل ETABS به Revit ما خروجی Excel خود ETABS را می‌خواند، نه پلان CAD را.",
            "تأسیسات دشوارترین حالت است. داکت در رویت بخشی از یک سیستم با کانکتور، ابعاد و جهت جریان است و یک خط روی پلان CAD هیچ‌کدام از این اطلاعات را ندارد. تبدیل نقشه‌های تأسیسات امکان‌پذیر است، اما مدل حاصل برای هر المان به بازبینی بیشتری نسبت به معماری نیاز دارد و بهتر است هزینه‌ی این بازبینی از ابتدا در برآورد دیده شود.",
          ],
        },
        {
          id: "worth-it",
          heading: "ساخت افزونه‌ی تبدیل چه زمانی ارزش دارد",
          paragraphs: [
            "اگر فقط یک ساختمان قدیمی دارید که باید به رویت منتقل شود، آن را دستی مدل کنید. پلان‌ها را لینک کنید، ترازها را تعریف کنید و با فهرست مرتبی از تایپ‌های دیوار، مدل را بسازید. برای این کار نیازی به ساخت ابزار یا استخدام کسی، از جمله ما، نیست.",
            "ساخت افزونه‌ی تبدیل زمانی منطقی است که مجموعه‌ی نقشه‌ها با قالب مشابهی مدام می‌رسند، تایپ‌های دیوار و در در هر پروژه تکرار می‌شوند و هفته‌های ترسیم دوباره، هزینه‌ای تکرارشونده است. در این حالت، قیمت ابزار را میزان نامرتب‌بودن نقشه‌ها و تعداد انواع المانی که باید پوشش دهد تعیین می‌کند، همان منطقی که در نوشته‌ی [توسعه پلاگین رویت چقدر هزینه دارد](/articles/revit-plugin-development-cost/) شرح داده شده است. ساخت خود ابزار در قالب [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "تبدیل خودکار CAD به رویت با خروجی آن سنجیده می‌شود: المان‌های بومی، در تایپ‌های واقعی دفتر، همراه با گزارشی از آنچه ساخته نشده است. دکمه‌ی پایانی ساده به نظر می‌رسد و آنچه آن را ساده کرده، تمام تصمیم‌هایی است که درباره‌ی لایه‌ها، جفت خطوط، تایپ‌ها و استثناها پیش از اولین اجرا گرفته شده است.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "ساخت فمیلی رویت", href: "/revit-family-creation/" },
        { label: "ابزارهای دیجیتال در صفحه‌ی محصولات", href: "/products/#digital-tools" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Revit API, ImportInstance Class", href: "https://www.revitapidocs.com/2015/85b534b8-dd6c-bc13-7c46-c803c83481e4.htm" },
        { label: "Revit API, Document.Import (DWG and DXF)", href: "https://www.revitapidocs.com/2015/1b1413fd-1358-709b-77a8-e383d6c1301e.htm" },
        { label: "The Dynamo Primer, Dynamo for Revit", href: "https://primer.dynamobim.org/08_Dynamo-for-Revit/8_Dynamo-for-Revit.html" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا رویت می‌تواند نقشه‌ی AutoCAD را به‌طور خودکار به دیوار تبدیل کند؟",
          answer:
            "نه در یک مرحله. ابزار Pick Lines در رویت از هر خط CAD که انتخاب شود، یک دیوار می‌سازد، یکی پس از دیگری. تبدیل خودکار یک مجموعه‌ی کامل نقشه به اسکریپت Dynamo یا افزونه‌ای بر پایه‌ی Revit API نیاز دارد.",
        },
        {
          question: "فایل CAD را در رویت لینک کنیم یا Import؟",
          answer:
            "در بیشتر موارد لینک. فایل DWG لینک‌شده با تغییر فایل اصلی به‌روز می‌شود و به‌راحتی Unload یا حذف می‌شود. فایل Import‌شده نسخه‌ای ثابت است و Explode کردن آن، پروژه را از خطوط جداگانه و Line Style‌های اضافه پر می‌کند.",
        },
        {
          question: "آیا لایه‌های AutoCAD پس از لینک‌کردن در رویت حفظ می‌شوند؟",
          answer:
            "بله. لایه‌ها درون نمونه‌ی لینک‌شده یا واردشده باقی می‌مانند و نمایش آن‌ها از زبانه‌ی Imported Categories در Visibility/Graphics کنترل می‌شود. افزونه‌ی تبدیل نیز بر اساس همین لایه‌ها تشخیص می‌دهد کدام خطوط دیوار هستند.",
        },
        {
          question: "آیا یک فایل DWG را می‌توان در چند پروژه‌ی رویت لینک کرد؟",
          answer:
            "بله. فایل لینک‌شده یک ارجاع است، در نتیجه همان DWG در هر تعداد پروژه قابل‌لینک است و هر پروژه با بارگذاری دوباره‌ی لینک به‌روز می‌شود.",
        },
        {
          question: "آیا نقشه‌ی اسکن‌شده یا PDF را هم می‌توان تبدیل کرد؟",
          answer:
            "نه با افزونه‌ای که هندسه‌ی CAD را می‌خواند. شیت اسکن‌شده یک تصویر است و خط یا لایه‌ای برای خواندن ندارد. این نقشه‌ها ابتدا باید بازترسیم یا برداری شوند و نقشه‌ی برداری‌شده همان پاک‌سازی یک فایل CAD نامرتب را لازم دارد.",
        },
        {
          question: "دقت تبدیل خودکار CAD به رویت چقدر است؟",
          answer:
            "به اندازه‌ی دقت نقشه‌ها و قواعد. با استاندارد لایه‌ای که رعایت شده باشد، افزونه‌ی مبتنی بر قاعده هر بار نتیجه‌ی یکسانی تولید می‌کند و گزارش آن مواردی را که ساخته نشده‌اند نشان می‌دهد. بدون چنین استانداردی، هر ابزاری حدس می‌زند و مدل باید المان به المان بررسی شود.",
        },
        {
          question: "آیا تبدیل خودکار برای یک پروژه‌ی تکی ارزش دارد؟",
          answer:
            "به‌ندرت. مدل‌سازی دستی یک ساختمان معمولاً سریع‌تر از خودکارسازی آن است. افزونه‌ی تبدیل زمانی به صرفه است که مجموعه‌ی نقشه‌هایی با قالب مشابه مدام دریافت شوند.",
        },
      ],
    },
    en: {
      slug: "cad-to-revit-automation",
      meta: {
        title: "CAD-to-Revit Automation: From Plan Set to Native Model",
        description:
          "CAD-to-Revit automation turns a coordinated plan set into native Revit walls, floors and openings. What the drawings need, how a converter works, when it pays.",
      },
      keywords: [
        "CAD-to-Revit automation",
        "CAD to Revit plugin development",
        "revit api development services",
        "bim automation services",
        "convert AutoCAD to Revit",
      ],
      breadcrumb: "CAD-to-Revit automation",
      category: "BIM & Revit",
      title: "CAD-to-Revit automation: what a converter builds, and what still needs a person",
      leadOpinion:
        "A converter that looks like one button is compressed history. Every rule about which line is a wall was a decision someone made before the button existed.",
      publishedAt: "2026-09-26",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds data-conversion tools, including CAD-to-Revit and ETABS-to-Revit, for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-produces", label: "What it produces" },
        { id: "link-vs-import", label: "Link CAD and Import CAD" },
        { id: "manual-route", label: "Where manual time goes" },
        { id: "prepare-drawings", label: "What the drawings need" },
        { id: "how-it-works", label: "How a converter works" },
        { id: "levels-floors", label: "Levels, floors and rooms" },
        { id: "choose-route", label: "Dynamo, plugin or service" },
        { id: "leave-to-people", label: "What to leave to a person" },
        { id: "structure-mep", label: "Structure and MEP" },
        { id: "worth-it", label: "When it's worth building" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "CAD-to-Revit automation means a tool reads a coordinated CAD plan set and creates native Revit elements from it: walls on the office's real wall types, floors, levels, and doors and windows hosted where the drawing puts them. Revit's own Link CAD and Import CAD commands don't do that. They bring the drawing in as one imported object you can trace over, and the tracing is the part that takes weeks.\n\nA converter doesn't remove the judgment. It removes the repetition: picking lines, picking the same wall type, placing the same door, for every element in the building. Deciding what the drawing meant where it's ambiguous stays with a person.\n\nOne of our own tools replaced a process that took about 2 weeks, sometimes closer to 1 month, with roughly 10 minutes. From the outside it's a button. **A simple interface is compressed history, not a lack of depth.** Every rule behind that button, which layer is a wall, which block is a door, what to do when two lines are almost parallel, is a decision somebody had to make before the button could exist.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-produces",
          heading: "What CAD-to-Revit automation actually produces",
          paragraphs: [
            "The output is the test. A converted model should contain elements Revit understands as walls, floors and openings, each with a type, a level and parameters a schedule can read. If what comes out is lines on a view, or an in-place mass shaped like a building, nothing was converted. The drawing was moved.",
            "That's also what separates it from services that redraw a plan set by hand and deliver a model. The result can look the same. The difference shows up with the next plan set: either the same weeks again, or a run and a review.",
          ],
        },
        {
          id: "link-vs-import",
          heading: "Link CAD, Import CAD, and why neither is a model",
          paragraphs: [
            "Revit has two ways to bring a DWG in, both on the Insert tab. Link CAD keeps a reference to the file, so a revised drawing updates when the link is reloaded. Import CAD embeds a copy that no longer follows the original. The Revit API documentation describes the result of either the same way: an ImportInstance, \"an element created during either import or link operation.\"",
            "One element. Every line, arc and block in the drawing sits inside it. Revit can show or hide its layers and snap to its geometry, but it cannot schedule a wall that only exists as two lines inside an import.",
            "For tracing, link rather than import. A link keeps the model lighter, updates with the drawing, and comes out cleanly once the model stands on its own. The option to avoid is exploding an import: it turns one element into a mass of loose lines and new line styles that stay in the project long after the drawing is gone.",
            "Two settings decide whether anything lines up later. Import units should match the drawing rather than be left to Auto-Detect, and positioning, usually origin to origin or shared coordinates, should be agreed before the first plan comes in. A plan brought in at the wrong scale or offset passes its error to every step after it.",
          ],
        },
        {
          id: "manual-route",
          heading: "Where the manual route spends its time",
          paragraphs: [
            "The manual route is well documented: clean the drawing, link it, trace walls with Pick Lines, place doors and windows one at a time, set levels, fill in parameters, then check it all against the drawing. Each step is simple. None of them is fast at the size of a real building.",
            "Pick Lines is the step that looks automated and isn't. It creates a wall from a line you click, one at a time, and asks the person clicking to decide the wall type, the location line and the height every time the drawing changes its mind.",
            "The checking step is the one teams cut when the deadline arrives, and it's the one that decides whether the model can be trusted. A wall traced from the wrong line of a pair is off by its own thickness. Nothing flags it. It shows up later as a string of dimensions that doesn't add up.",
          ],
        },
        {
          id: "prepare-drawings",
          heading: "What the drawing set has to get right first",
          image: prepare.en,
          paragraphs: [
            "A converter reads what the drawing says, not what the drafter meant. Those are rarely the same drawing.",
            "Most failed conversions trace back to the source set, not the tool. Before anything runs, the plan set needs:",
          ],
          list: {
            items: [
              "**A layer standard that is actually followed**: walls, doors, windows, columns and annotation on separate layers, named the same on every sheet.",
              "**Blocks for doors and windows**, not exploded linework, so each one can be read as an object with a position and a width.",
              "**One thickness per wall type**, so a pair of lines at a known spacing maps to one Revit wall type.",
              "**Clean geometry**: closed corners, no duplicate lines stacked on each other, no walls drawn as hatches.",
              "**One plan per level, on a shared origin**, so floors stack where they should.",
            ],
          },
          after: [
            "None of this is new work. It's the drawing standard most offices wrote down once. The converter is the first reader that actually holds the drawing to it.",
          ],
        },
        {
          id: "how-it-works",
          heading: "How a CAD-to-Revit converter actually works",
          image: model.en,
          paragraphs: [
            "A converter is an add-in built on the Revit API. It reads the linked drawing's geometry: every line and arc, and the layer each one sits on. From there the work is classification and placement:",
          ],
          list: {
            ordered: true,
            items: [
              "**Classify**: sort geometry by layer and block into walls, openings, columns and things to ignore.",
              "**Pair**: find parallel lines at a known spacing and turn each pair into a wall centreline with a thickness.",
              "**Map**: match each thickness and layer to a wall type the office already uses, from its [own family library](/revit-family-creation/).",
              "**Place**: create walls on the right level, then host doors and windows in them where the blocks mark them.",
              "**Report**: count what was created and list what wasn't, with its location, so a person can look at it.",
            ],
          },
          after: [
            "The fifth step is the one worth insisting on. A tool that silently skips a wall it couldn't read delivers a model that looks finished and isn't. Our own ETABS-to-Revit tool reports on screen what was not created, because the missing element is the most expensive one to find later.",
          ],
        },
        {
          id: "levels-floors",
          heading: "Levels, floors and rooms come from the whole set",
          paragraphs: [
            "Walls are the easiest part to explain and the smallest part of a usable model. Levels come from the plan set as a whole: each plan belongs to a storey, and the storey heights come from a section or a level table, not from the plan itself. A converter should ask for those heights once and build every level from them.",
            "Floors and rooms depend on closed boundaries. A slab outline drawn as one closed polyline becomes a floor directly. One drawn as loose segments has to be joined first, and a gap of a few millimetres is enough to stop it. Rooms follow the walls: once the walls are placed and joined properly, Revit can place a room in every enclosed space.",
            "Room names are a separate problem. The Revit API doesn't expose the text inside an imported CAD file, so bringing names across usually means reading the DWG itself rather than its linked geometry.",
          ],
        },
        {
          id: "choose-route",
          heading: "A Dynamo graph, a custom plugin, or a conversion service",
          paragraphs: [
            "There are three realistic routes, and they suit different volumes of work:",
          ],
          list: {
            items: [
              "**A Dynamo graph** reads the linked CAD, filters it by layer and creates walls from the curves. It suits one project and one drawing standard, and it's the fastest way to learn what the drawings actually contain. [Custom Dynamo script development](/articles/custom-dynamo-script-development/) covers where a graph stops being enough.",
              "**A custom plugin** does the same through the Revit API, with the classification rules, the type mapping and the report built in. It suits an office that receives plan sets from the same sources again and again.",
              "**A conversion platform or service**, some of them classifying geometry with machine learning, can read drawings with no layer standard at all. The price is that classification becomes a guess, and a guess needs checking just like a trace does.",
            ],
          },
          after: [
            "Classifying by layer and block name is deterministic: the same drawing gives the same model every time. What decides between the three is repetition. One building converted once doesn't justify building anything. A similar plan set arriving every month does.",
          ],
        },
        {
          id: "leave-to-people",
          heading: "What to leave to a person",
          paragraphs: [
            "Automating everything is where these projects go wrong. Some parts of a drawing set are cheaper to model by hand than to teach a tool: curved and irregular walls, stairs, one-off details, anything drawn differently on every sheet.",
            "2D details are the other boundary. A wall section or a flashing detail rarely needs to become model geometry. It can come across as a drafting view, linked or redrawn, and stay 2D.",
            "A good converter builds the repeated elements and hands the rest over clearly, with a list of what it left and where. The person finishing the model should be deciding, not searching.",
          ],
        },
        {
          id: "structure-mep",
          heading: "Structure and MEP are different problems",
          paragraphs: [
            "Most writing on CAD-to-Revit conversion stops at architecture: walls, doors, windows. Structure and building services need more than geometry.",
            "Structural members have to exist as framing and columns with the right family, orientation and analytical behaviour. When the structural model already exists in analysis software, converting from that source is usually more reliable than reading a drawing of it. That's why our ETABS-to-Revit tool reads ETABS's own Excel export rather than a CAD plan.",
            "MEP is the hardest case. A duct in Revit belongs to a system with connectors, sizes and a flow direction, and a single line on a CAD plan carries none of that. Converting services plans is possible, but the result needs more review per element than architecture does, and that review belongs in the estimate from the start.",
          ],
        },
        {
          id: "worth-it",
          heading: "When building a converter is worth it",
          paragraphs: [
            "If you have one legacy building to bring into Revit, trace it. Link the plans, set up the levels, and model it by hand from a clean list of wall types. Nobody needs to build a tool for that, or hire anyone, including us.",
            "A converter makes sense when plan sets keep arriving in a similar format, the same wall and door types come up on every job, and the weeks of tracing are a recurring cost rather than a one-off. At that point the price is set by how messy the drawings are and how many element types the tool has to cover, the same logic laid out in [how much Revit plugin development costs](/articles/revit-plugin-development-cost/). The build itself is [custom Revit plugin development](/revit-plugin-development/).",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "CAD-to-Revit automation is judged by what it produces: native elements, on real types, with a report of what it left behind. The button at the end looks simple. What made it simple is every decision about layers, line pairs, types and exceptions made before anyone pressed it.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Revit family creation", href: "/revit-family-creation/" },
        { label: "Digital tools on the Products page", href: "/products/#digital-tools" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Revit API, ImportInstance Class", href: "https://www.revitapidocs.com/2015/85b534b8-dd6c-bc13-7c46-c803c83481e4.htm" },
        { label: "Revit API, Document.Import (DWG and DXF)", href: "https://www.revitapidocs.com/2015/1b1413fd-1358-709b-77a8-e383d6c1301e.htm" },
        { label: "The Dynamo Primer, Dynamo for Revit", href: "https://primer.dynamobim.org/08_Dynamo-for-Revit/8_Dynamo-for-Revit.html" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Can Revit convert AutoCAD drawings to walls automatically?",
          answer:
            "Not in one step. Revit's Pick Lines tool creates a wall from each CAD line you select, one at a time. Converting a whole plan set automatically needs a Dynamo graph or an add-in built on the Revit API.",
        },
        {
          question: "Should I link or import a CAD file into Revit?",
          answer:
            "Link, in most cases. A linked DWG updates when the file changes and can be unloaded or removed cleanly. An import is a fixed copy, and exploding it fills the project with loose lines and extra line styles.",
        },
        {
          question: "Does Revit keep AutoCAD layers when you link a DWG?",
          answer:
            "Yes. The layers stay available inside the linked or imported instance, and their visibility is controlled on the Imported Categories tab of Visibility/Graphics. Layers are also what a converter reads to decide which lines are walls.",
        },
        {
          question: "Can the same DWG be linked into several Revit projects?",
          answer:
            "Yes. A linked file is a reference, so the same DWG can be linked into as many projects as needed, and each one updates when the link is reloaded.",
        },
        {
          question: "Can a scanned drawing or a PDF be converted?",
          answer:
            "Not by a tool that reads CAD geometry. A scanned sheet is an image with no lines or layers to read. It has to be redrawn or vectorised first, and a vectorised scan needs the same clean-up as any messy CAD file.",
        },
        {
          question: "How accurate is automated CAD-to-Revit conversion?",
          answer:
            "As accurate as the drawing set and the rules. With a layer standard that is followed, a rule-based converter gives the same result every time and its report shows what it couldn't place. Without one, any tool is guessing, and the model needs checking element by element.",
        },
        {
          question: "Is automated conversion worth it for a single project?",
          answer:
            "Rarely. One building is usually faster to model by hand than to automate. A converter pays off when similar plan sets keep arriving.",
        },
      ],
    },
  },
};
