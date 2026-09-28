import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/mvp-development-internal-tools";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("mvp-development-internal-tools", {
  fa: "پرگار روی نقشه‌ی چاپ‌شده با زمینه‌ی تیره، برای تعیین محدوده‌ی MVP یک ابزار داخلی",
  en: "A drafting compass on a dark printed floor plan, for scoping the MVP of an internal tool",
});
const testing = img("prototype-testing-with-users", {
  fa: "دست‌های یک برنامه‌نویس روی صفحه‌کلید در کنار دو نمایشگر، در نور کم، هنگام آزمون نمونه‌ی اولیه‌ی یک ابزار داخلی",
  en: "A developer typing beside two monitors in low light, testing a prototype of an internal tool",
});

export const mvpDevelopmentInternalTools: ArticlePage = {
  slug: "mvp-development-internal-tools",
  content: {
    fa: {
      slug: "mvp-development-internal-tools",
      meta: {
        title: "ساخت MVP برای ابزار داخلی در دفاتر فنی، آرتینکست",
        description:
          "ساخت MVP برای ابزار داخلی یعنی کوچک‌ترین نسخه‌ای که یک کار واقعی را روی فایل‌های واقعی انجام دهد. تفاوت با نمونه‌ی اولیه، محدوده، آزمون و سه نتیجه‌ی ممکن را بخوانید.",
      },
      keywords: [
        "ساخت MVP برای ابزار داخلی",
        "توسعه نمونه اولیه نرم‌افزار",
        "اثبات مفهوم نرم‌افزار",
        "نمونه‌سازی سریع نرم‌افزار",
        "MVP ابزار داخلی",
      ],
      breadcrumb: "ساخت MVP برای ابزار داخلی",
      category: "اتوماسیون",
      title: "ساخت MVP برای ابزار داخلی؛ کوچک‌ترین نسخه‌ای که به یک پرسش مشخص پاسخ می‌دهد",
      leadOpinion:
        "MVPای که کار می‌کند، نیمی از کار خود را انجام داده است. کار آن زمانی تمام می‌شود که بدانید چرا کار می‌کند.",
      publishedAt: "2026-09-28",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که ابزارهای داخلی، پلاگین‌های رویت و سامانه‌های اتوماسیون را به‌صورت مرحله‌ای، از نمونه‌ی اولیه تا نسخه‌ی نهایی، برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "internal", label: "MVP وقتی کاربران همکاران شما هستند" },
        { id: "three-questions", label: "اثبات مفهوم، نمونه‌ی اولیه و MVP" },
        { id: "when", label: "چه زمانی ارزش ساخت دارد" },
        { id: "measure", label: "یک پرسش و یک معیار" },
        { id: "scope", label: "محدوده‌ی MVP" },
        { id: "testing", label: "آزمون در محیط واقعی کار" },
        { id: "outcomes", label: "سه نتیجه‌ی ممکن" },
        { id: "after", label: "پس از MVP" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "ساخت MVP برای ابزار داخلی یعنی ساخت کوچک‌ترین نسخه‌ای از یک ابزار که بتواند یک کار واقعی را برای کسانی که از آن استفاده می‌کنند، روی فایل‌های واقعی پروژه انجام دهد، و سنجش اینکه آیا این کار را درست انجام داده است یا خیر. در ابزار داخلی، کاربران همکاران خود شما هستند و بازاری برای آزمون وجود ندارد. در نتیجه، پرسش محدودتر است: آیا این ابزار زمان را کاهش می‌دهد، آیا نتیجه را درست به دست می‌آورد و آیا همکاران پس از هفته‌ی نخست همچنان از آن استفاده می‌کنند؟ MVP برای پاسخ به همین پرسش ساخته می‌شود.\n\nاثبات مفهوم و نمونه‌ی اولیه پیش از MVP قرار می‌گیرند و هرکدام به پرسش دیگری پاسخ می‌دهند. توسعه‌ی نمونه‌ی اولیه‌ی نرم‌افزار زمانی بیشترین فایده را دارد که هر مرحله اجازه داشته باشد کوچک بماند.\n\nیکی از نخستین پروژه‌های پژوهشی ما به داده‌های تولیدشده نیاز داشت. ۶۰۰ داده‌ی نخست به‌صورت دستی ساخته شد و واکنشی که دریافت کرد این بود: «۶۰۰؟ واقعاً؟ همین؟» همین واکنش باعث شد کار دستی متوقف شود و یک سامانه‌ی تولید داده ساخته شود که حدود ۲۲٬۰۰۰ پیکربندی تولید کرد و به نخستین مقاله‌ی منتشرشده تبدیل شد. آن ۶۰۰ داده کار خود را انجام داده بودند: نشان دادند تولید این داده ارزش دارد و سامانه‌ی تولید باید چه چیزهایی را درست انجام دهد. **MVPای که کار می‌کند، نیمی از کار خود را انجام داده است. کار آن زمانی تمام می‌شود که بدانید چرا کار می‌کند.**",
      heroImage: hero.fa,
      sections: [
        {
          id: "internal",
          heading: "MVP وقتی کاربران آن همکاران خود شما هستند",
          paragraphs: [
            "Eric Ries، که اصطلاح MVP با کتاب Lean Startup شناخته شد، آن را نسخه‌ای از محصول تعریف می‌کند که با کمترین تلاش، بیشترین یادگیری تأییدشده را درباره‌ی مشتریان فراهم کند. Frank Robinson، که این اصطلاح را پیش از او به کار برده بود، MVP را محصولی با اندازه‌ی مناسب می‌داند: به اندازه‌ای بزرگ که پذیرفته شود و به اندازه‌ای کوچک که پرریسک نباشد.",
            "هر دو تعریف برای محصولی نوشته شده‌اند که باید مشتری پیدا کند. ابزار داخلی شرایط متفاوتی دارد و این تفاوت‌ها شکل MVP را تغییر می‌دهند:",
          ],
          list: {
            items: [
              "**کاربران مشخص‌اند.** می‌دانید چه کسانی از ابزار استفاده می‌کنند و می‌توانید کنار آن‌ها بنشینید و کارشان را ببینید.",
              "**معیار موفقیت قابل‌اندازه‌گیری است.** زمان انجام یک کار، تعداد خطاها یا تعداد دفعاتی که یک فایل دوباره ارسال می‌شود، پیش از ساخت قابل‌ثبت است.",
              "**رقیب اصلی روش فعلی است.** ابزار داخلی با Excel، با کپی‌کردن دستی و با عادت چندساله‌ی تیم رقابت می‌کند.",
            ],
          },
          after: [
            "ابزار داخلی کاربرانی دارد که نمی‌توانند به محصول رقیب بروند. اما می‌توانند به Excel برگردند و معمولاً از روز دوم، بی‌آنکه چیزی بگویند، همین کار را می‌کنند.",
          ],
        },
        {
          id: "three-questions",
          heading: "اثبات مفهوم، نمونه‌ی اولیه و MVP به سه پرسش متفاوت پاسخ می‌دهند",
          paragraphs: [
            "این سه اصطلاح اغلب به‌جای یکدیگر به کار می‌روند، اما هرکدام پرسش خود را دارد و مرحله‌ای که پرسش آن هنوز پاسخ داده نشده، نباید نادیده گرفته شود:",
          ],
          list: {
            items: [
              "**اثبات مفهوم (PoC)**: آیا از نظر فنی امکان‌پذیر است؟ مثلاً آیا Revit API اطلاعات موردنیاز را از این نوع المان در اختیار می‌گذارد، یا آیا خروجی نرم‌افزار دیگر ساختار قابل‌خواندنی دارد؟ نتیجه‌ی آن معمولاً کدی است که فقط سازنده‌ی آن اجرایش می‌کند.",
              "**نمونه‌ی اولیه**: آیا ابزار باید به این شکل کار کند؟ ورودی‌ها، ترتیب مراحل و شکل خروجی به کاربران نشان داده می‌شود، حتی اگر پشت آن هنوز داده‌ی ساختگی باشد.",
              "**MVP**: آیا ابزار در کار واقعی نتیجه می‌دهد؟ یک جریان کاری، یک تیم، فایل‌های واقعی پروژه و معیاری که پیش از ساخت ثبت شده است.",
            ],
          },
          after: [
            "اثبات مفهوم نرم‌افزار زمانی لازم است که ریسک اصلی فنی باشد. نمونه‌ی اولیه زمانی لازم است که ریسک اصلی در شیوه‌ی استفاده باشد. اگر هیچ‌کدام از این دو ریسک جدی نیست، می‌توانید مستقیماً سراغ MVP بروید.",
          ],
        },
        {
          id: "when",
          heading: "چه زمانی یک ابزار داخلی ارزش ساخت MVP دارد",
          paragraphs: [
            "همه‌ی ایده‌ها به نرم‌افزار اختصاصی نیاز ندارند. پیش از هر ساختی، بررسی کنید که آیا محصولی آماده، یک افزونه‌ی موجود یا یک فایل Excel بهتر سازمان‌یافته همین کار را انجام می‌دهد یا خیر. اگر پرسش شما این است که آیا محصولی آماده این کار را انجام می‌دهد، پاسخ آن را با یک نسخه‌ی آزمایشی رایگان پیدا کنید. برای این پرسش به ما یا شرکتی مانند ما نیازی ندارید.",
            "ساخت MVP زمانی ارزش دارد که چند نشانه‌ی زیر هم‌زمان وجود داشته باشند:",
          ],
          list: {
            items: [
              "کاری تکرارشونده که هر هفته یا هر پروژه انجام می‌شود و قاعده‌ی آن قابل‌نوشتن است.",
              "داده‌هایی که در فایل‌های خود دفتر هستند، مانند مدل‌های Revit، نقشه‌ها یا جدول‌ها، و محصولات آماده به آن‌ها دسترسی ندارند.",
              "خطایی که هزینه‌ی آن دیر مشخص می‌شود، معمولاً هنگام ارسال نقشه‌ها یا در کارگاه.",
              "کاری که به یک نفر وابسته است و با غیبت او متوقف می‌شود.",
            ],
          },
          after: [
            "[هوشمندسازی فرآیند کاری در صنعت ساختمان](/articles/aec-workflow-automation/) نشان می‌دهد این فرآیندها معمولاً در کجای دفتر پیدا می‌شوند. MVP گام بعدی است، پس از آنکه فرآیند مشخص شد.",
          ],
        },
        {
          id: "measure",
          heading: "با یک پرسش و یک معیار، پیش از نوشتن اولین خط کد شروع کنید",
          paragraphs: [
            "MVP بدون معیار، به نسخه‌ی کوچکی از محصول تبدیل می‌شود که کسی نمی‌داند موفق بوده است یا خیر. پیش از ساخت، سه مورد را بنویسید:",
          ],
          list: {
            ordered: true,
            items: [
              "**پرسش**: یک جمله، مانند «آیا این ابزار می‌تواند شیت‌های یک پروژه را بدون ویرایش دستی شماره‌گذاری کند؟»",
              "**وضعیت فعلی**: این کار امروز چه مدت طول می‌کشد، چه کسی آن را انجام می‌دهد و خطاها معمولاً در کجا رخ می‌دهند. این اعداد را از یک اجرای واقعی ثبت کنید، از حافظه‌ی افراد استفاده نکنید.",
              "**معیار موفقیت**: چه نتیجه‌ای نشان می‌دهد پاسخ مثبت است، و چه نتیجه‌ای نشان می‌دهد باید متوقف شوید.",
            ],
          },
          after: [
            "معیار توقف به همان اندازه‌ی معیار موفقیت اهمیت دارد. اگر پیش از شروع مشخص نشده باشد که چه نتیجه‌ای به معنای توقف است، هر نتیجه‌ای به دلیلی برای ادامه تبدیل می‌شود. این همان رویکردی است که [تحقیق و توسعه‌ی آرتینکست](/research-development/) بر آن استوار است: معیار، پیش از ساخت.",
          ],
        },
        {
          id: "scope",
          heading: "محدوده‌ی MVP: یک جریان کاری، یک تیم، داده‌های واقعی",
          paragraphs: [
            "محدوده‌ی MVP با حذف تعیین می‌شود. هرچه به پاسخ پرسش کمک نکند، به نسخه‌ی بعدی منتقل می‌شود:",
          ],
          list: {
            items: [
              "**حذف می‌شود**: پنل مدیریت، تنظیمات قابل‌تغییر، پشتیبانی از چند نسخه‌ی نرم‌افزار، ظاهر نهایی و هر قابلیتی که فقط یک نفر درخواست کرده است.",
              "**باقی می‌ماند**: درستی نتیجه، گزارش مواردی که ابزار نتوانسته پردازش کند و امکان بازگشت به وضعیت پیشین، مانند Undo در Revit یا نسخه‌ی پشتیبان از فایل.",
            ],
          },
          after: [
            "در دفاتر فنی، کوتاه‌ترین مسیر اغلب در همان نرم‌افزاری است که تیم هر روز از آن استفاده می‌کند. یک اسکریپت Dynamo یا pyRevit می‌تواند منطق یک پلاگین را روی یک پروژه‌ی واقعی آزمون کند، پیش از آنکه برای رابط کاربری، نصب و به‌روزرسانی آن هزینه‌ای شود. [توسعه‌ی اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) توضیح می‌دهد چه زمانی یک اسکریپت کافی است و چه زمانی باید به پلاگین تبدیل شود. در این مسیر، اسکریپت به مشخصات فنی پلاگین تبدیل می‌شود.",
            "کاهش محدوده نباید به کاهش دقت منجر شود. **ابزاری که نتیجه‌ی نادرست را بی‌صدا تحویل دهد، از روش دستی پرهزینه‌تر است**، زیرا بررسی هر خروجی آن زمان بیشتری از انجام دستی کار می‌گیرد.",
          ],
        },
        {
          id: "testing",
          heading: "MVP را در همان جایی آزمون کنید که کار انجام می‌شود",
          image: testing.fa,
          paragraphs: [
            "آزمون روی فایل نمونه‌ای که سازنده آماده کرده، فقط نشان می‌دهد ابزار روی همان فایل کار می‌کند. فایل‌های واقعی پروژه نام‌گذاری‌های ناهماهنگ، المان‌های قدیمی و استثناهایی دارند که در هیچ فایل نمونه‌ای وجود ندارند.",
            "راهنمای خدمات دولت بریتانیا (GOV.UK) مرحله‌ی alpha را مرحله‌ای می‌داند که در آن راه‌حل‌های مختلف برای مسائلی که در مرحله‌ی شناخت پیدا شده‌اند، آزمون می‌شوند. برای ابزار داخلی، این آزمون سه شرط دارد:",
          ],
          list: {
            items: [
              "**کاربر واقعی**: کسی که امروز این کار را انجام می‌دهد، ابزار را اجرا کند.",
              "**اجرای موازی**: برای مدتی کار هم به روش فعلی و هم با ابزار انجام شود و نتیجه‌ها مقایسه شوند.",
              "**ثبت همه‌ی موارد**: هر خطا، هر مورد پردازش‌نشده و هر جایی که کاربر مجبور شد کار را دستی تمام کند، ثبت شود.",
            ],
          },
          after: [
            "این فهرست مهم‌ترین خروجی مرحله‌ی MVP است و تعیین می‌کند نسخه‌ی بعدی باید چه چیزی را حل کند.",
          ],
        },
        {
          id: "outcomes",
          heading: "سه نتیجه‌ی ممکن، که یکی از آن‌ها نساختن است",
          paragraphs: [
            "MVP با یکی از سه نتیجه تمام می‌شود و هر سه نتیجه ارزشمندند:",
          ],
          list: {
            items: [
              "**ساخت نسخه‌ی کامل**: معیار موفقیت برآورده شده و مشخص است نسخه‌ی کامل چه چیزهایی را باید اضافه کند.",
              "**تغییر مسیر**: بخشی از ایده کار کرده و بخشی نه. نسخه‌ی بعدی بر بخشی تمرکز می‌کند که نتیجه داده است.",
              "**توقف**: ابزار زمان کافی صرفه‌جویی نمی‌کند، داده‌ها قابل‌اتکا نیستند یا محصولی آماده همین کار را بهتر انجام می‌دهد.",
            ],
          },
          after: [
            "نتیجه‌ی سوم نیز یک نتیجه است، با هزینه‌ای که هنوز پرداخت نکرده‌اید. Martin Fowler این نگاه را «معماری قربانی‌شونده» می‌نامد: پذیرفتن اینکه آنچه امروز ساخته می‌شود، ممکن است بعدها کنار گذاشته شود. کد MVP برای یادگیری نوشته می‌شود و اگر نسخه‌ی کامل با ساختاری متفاوت ساخته شود، هدف آن محقق شده است.",
          ],
        },
        {
          id: "after",
          heading: "از MVP تا ابزاری که دفتر به آن متکی است",
          paragraphs: [
            "وقتی تصمیم به ساخت نسخه‌ی کامل گرفته می‌شود، پرسش‌ها تغییر می‌کنند. دیگر پرسش این نیست که آیا ابزار کار می‌کند، بلکه این است که آیا سال بعد هم کار می‌کند:",
          ],
          list: {
            items: [
              "**نگهداری در برابر نسخه‌های جدید**: Revit هر سال نسخه‌ی جدیدی منتشر می‌کند و پلاگین‌ها باید با آن سازگار شوند.",
              "**مالکیت کد**: کد منبع، مستندات و دسترسی به مخزن کد باید در اختیار دفتر باشد.",
              "**پشتیبانی**: چه کسی به پرسش کاربران پاسخ می‌دهد و خطاها چگونه گزارش می‌شوند.",
              "**آموزش**: همکاران جدید چگونه با ابزار آشنا می‌شوند.",
            ],
          },
          after: [
            "[هزینه‌ی توسعه‌ی پلاگین رویت](/articles/revit-plugin-development-cost/) این هزینه‌های پس از تحویل را جزءبه‌جزء بررسی می‌کند. MVP کمک می‌کند این هزینه‌ها فقط برای ابزاری پرداخت شوند که ارزش خود را در کار واقعی ثابت کرده است.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "MVP ابزار داخلی نسخه‌ی ارزان محصول نهایی نیست، بلکه ابزاری برای پاسخ به یک پرسش مشخص است. اگر کار کند و ندانید چرا، هنوز پاسخی به دست نیامده است. اگر کار نکند و بدانید چرا، پاسخ را با کمترین هزینه به دست آورده‌اید. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "تحقیق و توسعه در آرتینکست", href: "/research-development/" },
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "توسعه پلاگین رویت چقدر هزینه دارد", href: "/articles/revit-plugin-development-cost/" },
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Eric Ries, Minimum Viable Product: a guide", href: "http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html" },
        { label: "Martin Fowler, Sacrificial Architecture", href: "https://martinfowler.com/bliki/SacrificialArchitecture.html" },
        { label: "GOV.UK Service Manual, How the alpha phase works", href: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "MVP ابزار داخلی چیست؟",
          answer:
            "کوچک‌ترین نسخه‌ای از یک ابزار که یک کار واقعی را برای یک تیم، روی فایل‌های واقعی پروژه انجام می‌دهد. هدف آن پاسخ به یک پرسش مشخص است: آیا این ابزار زمان را کاهش می‌دهد، نتیجه را درست به دست می‌آورد و همکاران از آن استفاده می‌کنند؟",
        },
        {
          question: "تفاوت MVP، نمونه‌ی اولیه و اثبات مفهوم چیست؟",
          answer:
            "اثبات مفهوم نشان می‌دهد کاری از نظر فنی امکان‌پذیر است. نمونه‌ی اولیه نشان می‌دهد ابزار باید به چه شکلی کار کند. MVP نشان می‌دهد ابزار در کار واقعی نتیجه می‌دهد یا خیر.",
        },
        {
          question: "ساخت MVP یک ابزار داخلی چه مدت طول می‌کشد؟",
          answer:
            "به اندازه‌ی جریان کاری، وضعیت داده‌ها و تعداد نرم‌افزارهایی بستگی دارد که ابزار با آن‌ها ارتباط دارد. زمان‌بندی قابل‌دفاع پس از بررسی فایل‌های واقعی پروژه مشخص می‌شود.",
        },
        {
          question: "آیا یک اسکریپت Dynamo می‌تواند MVP باشد؟",
          answer:
            "بله، برای بسیاری از ابزارهای رویت کوتاه‌ترین مسیر همین است. اسکریپت منطق کار را روی پروژه‌ی واقعی آزمون می‌کند و اگر نتیجه داد، به مشخصات فنی پلاگین تبدیل می‌شود.",
        },
        {
          question: "چه چیزهایی باید از MVP حذف شوند؟",
          answer:
            "پنل مدیریت، تنظیمات قابل‌تغییر، پشتیبانی از چند نسخه و ظاهر نهایی. درستی نتیجه، گزارش موارد پردازش‌نشده و امکان بازگشت به وضعیت پیشین باید باقی بمانند.",
        },
        {
          question: "اگر نتیجه‌ی MVP منفی باشد چه می‌شود؟",
          answer:
            "توقف نیز یک نتیجه است. MVP با کمترین هزینه نشان داده که این ابزار نباید ساخته شود یا محصولی آماده همین کار را بهتر انجام می‌دهد، پیش از آنکه هزینه‌ی نسخه‌ی کامل پرداخت شود.",
        },
        {
          question: "چه زمانی ساخت MVP لازم نیست؟",
          answer:
            "زمانی که محصولی آماده یا یک افزونه‌ی موجود همین کار را انجام می‌دهد. در این حالت، یک نسخه‌ی آزمایشی رایگان پاسخ را سریع‌تر و کم‌هزینه‌تر از هر ساختی به دست می‌دهد.",
        },
      ],
    },
    en: {
      slug: "mvp-development-internal-tools",
      meta: {
        title: "MVP Development for Internal Tools: A Guide, ARTINEXT",
        description:
          "MVP development for internal tools means the smallest version that does one real job on real files. How it differs from a prototype, scope, testing, three outcomes.",
      },
      keywords: [
        "MVP development for internal tools",
        "proof of concept software development",
        "rapid prototyping software development",
        "internal tool MVP",
        "MVP vs prototype vs proof of concept",
      ],
      breadcrumb: "MVP development for internal tools",
      category: "Automation",
      title: "MVP development for internal tools: the smallest version that answers one question",
      leadOpinion:
        "An MVP that works is half done. It's finished when you understand why it works.",
      publishedAt: "2026-09-28",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds internal tools, Revit plugins and automation in stages, from first prototype to finished tool, for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "internal", label: "When the users are your staff" },
        { id: "three-questions", label: "PoC, prototype and MVP" },
        { id: "when", label: "When it's worth building" },
        { id: "measure", label: "One question, one measure" },
        { id: "scope", label: "Scope" },
        { id: "testing", label: "Testing where the work happens" },
        { id: "outcomes", label: "Three outcomes" },
        { id: "after", label: "After the MVP" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "MVP development for internal tools means building the smallest version of a tool that can do one real job for the people who will use it, on real project files, and then measuring whether it did. The users are your own staff, and there is no market to test. So the question is narrower: does this save time, does it get the answer right, and will people still be using it after the first week? An MVP is built to answer that.\n\nA proof of concept and a prototype come earlier, and answer different questions. Rapid prototyping software development pays off exactly when each stage is allowed to stay small.\n\nOne of our first research projects needed generated data. The first 600 data points were built by hand. The reaction: \"600? Really? That's it?\" That was annoying enough to stop and build a generation system instead, which produced about 22,000 configurations and became a first published paper. The 600 had done their job. They showed the data was worth generating, and what the generator had to get right. **An MVP that works is half done. It's finished when you understand why it works.**",
      heroImage: hero.en,
      sections: [
        {
          id: "internal",
          heading: "What an MVP means when the users are your own staff",
          paragraphs: [
            "Eric Ries, whose Lean Startup made the term famous, defines the MVP as the version of a new product that collects the maximum amount of validated learning about customers with the least effort. Frank Robinson, who used the term before him, called it the right-sized product: big enough to be adopted, not so big that it's bloated and risky.",
            "Both definitions were written for a product that has to find customers. An internal tool is in a different position, and the differences change the MVP:",
          ],
          list: {
            items: [
              "**The users are known.** You know who will run it, and you can sit next to them while they work.",
              "**Success can be measured.** The time a task takes, the errors it produces, how often a file is sent back: all of it can be recorded before anything is built.",
              "**The competitor is the current way.** An internal tool competes with Excel, with manual copying, and with years of habit.",
            ],
          },
          after: [
            "An internal tool has users who can't switch to a competitor. They can go back to Excel, though, and they usually do, quietly, on the second day.",
          ],
        },
        {
          id: "three-questions",
          heading: "Proof of concept, prototype, MVP: three different questions",
          paragraphs: [
            "The three terms get used interchangeably. Each one answers its own question, and a stage whose question is still open shouldn't be skipped:",
          ],
          list: {
            items: [
              "**Proof of concept**: can it be done at all? Does the Revit API expose what you need from this kind of element? Is the other program's export readable? The result is usually code only its author can run.",
              "**Prototype**: is this how it should work? The inputs, the order of steps and the shape of the output are shown to users, even if fake data sits behind them.",
              "**MVP**: does it deliver in real work? One workflow, one team, real project files, and a measure written down before the build.",
            ],
          },
          after: [
            "Proof of concept software development is worth doing when the main risk is technical. A prototype is worth doing when the main risk is how people will use it. If neither risk is serious, go straight to the MVP.",
          ],
        },
        {
          id: "when",
          heading: "When an internal tool deserves an MVP",
          paragraphs: [
            "Not every idea needs custom software. Before building anything, check whether an existing product, an add-in someone already sells, or a better organised Excel file does the job. If your question is whether a product already does this, answer it with a free trial. You don't need us, or anyone like us, for that.",
            "An MVP earns its cost when several of these hold at once:",
          ],
          list: {
            items: [
              "A repetitive task that happens every week or every project, with a rule you could write down.",
              "Data that lives in the office's own files, Revit models, drawing sets, spreadsheets, where off-the-shelf products don't reach.",
              "An error whose cost shows up late, usually at issue or on site.",
              "A task that depends on one person and stops when they're away.",
            ],
          },
          after: [
            "[AEC workflow automation](/articles/aec-workflow-automation/) covers where those processes usually hide in an office. The MVP is the next step, once the process is known.",
          ],
        },
        {
          id: "measure",
          heading: "Start from one question and one measure, before the first line of code",
          paragraphs: [
            "An MVP without a measure turns into a small version of a product nobody can call a success or a failure. Before building, write down three things:",
          ],
          list: {
            ordered: true,
            items: [
              "**The question**, in one sentence: \"Can this number a project's sheets without anyone editing them by hand?\"",
              "**The current state**: how long the task takes today, who does it, and where it usually goes wrong. Record it from a real run, not from memory.",
              "**The measure**: which result means yes, and which result means stop.",
            ],
          },
          after: [
            "The stop condition matters as much as the success condition. If nobody decided in advance what result means stopping, every result becomes a reason to continue. It's the same approach [research and development at ARTINEXT](/research-development/) runs on: the measure comes before the build.",
          ],
        },
        {
          id: "scope",
          heading: "Scope: one workflow, one team, real data",
          paragraphs: [
            "An MVP's scope is set by cutting. Anything that doesn't help answer the question moves to the next version:",
          ],
          list: {
            items: [
              "**Cut**: admin panels, configurable settings, support for several software versions, final visual design, and any feature only one person asked for.",
              "**Keep**: correct results, a report of what the tool couldn't process, and a way back, Revit's Undo or a backup of the file.",
            ],
          },
          after: [
            "In a technical office the shortest path is often inside the software the team already opens every day. A Dynamo graph or a pyRevit script can test a plugin's logic on a real project before anyone pays for an interface, an installer and upgrades. [Custom Dynamo script development](/articles/custom-dynamo-script-development/) covers when a graph is enough and when it should become a plugin. Done this way, the script becomes the plugin's specification.",
            "Smaller scope is not lower accuracy. **A tool that delivers a wrong result silently costs more than the manual way**, because checking each of its outputs takes longer than doing the task by hand.",
          ],
        },
        {
          id: "testing",
          heading: "Test it where the work actually happens",
          image: testing.en,
          paragraphs: [
            "A test on a sample file the developer prepared proves the tool works on that file. Real project files carry inconsistent naming, legacy elements and exceptions no sample file has.",
            "The GOV.UK Service Manual describes its alpha phase as the stage where you try out different solutions to the problems found during discovery. For an internal tool, that test has three conditions:",
          ],
          list: {
            items: [
              "**A real user**: the person who does this task today runs the tool.",
              "**A parallel run**: for a while, the work is done both ways and the results are compared.",
              "**Everything logged**: every error, every unprocessed item, every point where someone had to finish the job by hand.",
            ],
          },
          after: [
            "That log is the most useful thing the MVP produces. It decides what the next version has to solve.",
          ],
        },
        {
          id: "outcomes",
          heading: "Three outcomes, and one of them is not building it",
          paragraphs: [
            "An MVP ends in one of three ways, and all three are worth having:",
          ],
          list: {
            items: [
              "**Build it**: the measure was met, and it's clear what the full version has to add.",
              "**Change course**: part of the idea worked and part didn't. The next version concentrates on the part that did.",
              "**Stop**: the tool doesn't save enough time, the data can't be trusted, or an existing product does it better.",
            ],
          },
          after: [
            "The third outcome is also a result, at a cost you haven't paid yet. Martin Fowler calls the mindset sacrificial architecture: accepting now that what you're building may be thrown away later. MVP code is written to learn. If the full version is built on a different structure, the MVP did what it was for.",
          ],
        },
        {
          id: "after",
          heading: "From MVP to a tool the office relies on",
          paragraphs: [
            "Once the full version is approved, the questions change. It's no longer whether the tool works. It's whether it still works next year:",
          ],
          list: {
            items: [
              "**Upkeep across releases**: Revit ships a new version every year, and plugins have to follow.",
              "**Code ownership**: the source code, documentation and repository access belong with the office.",
              "**Support**: who answers users' questions, and how errors get reported.",
              "**Onboarding**: how new staff learn the tool.",
            ],
          },
          after: [
            "[What Revit plugin development costs](/articles/revit-plugin-development-cost/) breaks those after-delivery costs down item by item. The MVP makes sure they're only paid for a tool that has already proved itself in real work.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "An internal tool's MVP isn't a cheap copy of the finished product. It's an instrument for answering one question. If it works and you don't know why, you don't have the answer yet. If it fails and you know why, you got the answer at the lowest price available. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Research and development at ARTINEXT", href: "/research-development/" },
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "How much Revit plugin development costs", href: "/articles/revit-plugin-development-cost/" },
        { label: "Office automation for AEC teams", href: "/aec-workflow-automation/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Eric Ries, Minimum Viable Product: a guide", href: "http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html" },
        { label: "Martin Fowler, Sacrificial Architecture", href: "https://martinfowler.com/bliki/SacrificialArchitecture.html" },
        { label: "GOV.UK Service Manual, How the alpha phase works", href: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is an MVP for an internal tool?",
          answer:
            "The smallest version of a tool that does one real job for one team, on real project files. Its purpose is to answer a specific question: does it save time, does it get the result right, and do people keep using it?",
        },
        {
          question: "What's the difference between an MVP, a prototype and a proof of concept?",
          answer:
            "A proof of concept shows something is technically possible. A prototype shows how the tool should work. An MVP shows whether it delivers in real work.",
        },
        {
          question: "How long does an internal tool MVP take to build?",
          answer:
            "It depends on the workflow, the state of the data, and how many other programs the tool has to talk to. A timeline you can defend comes from reviewing real files, not from a description on a call.",
        },
        {
          question: "Can a Dynamo script be an MVP?",
          answer:
            "Yes, and for many Revit tools it's the shortest path. The graph tests the logic on a real project, and if it holds up, it becomes the plugin's specification.",
        },
        {
          question: "What should be left out of an MVP?",
          answer:
            "Admin panels, configurable settings, multi-version support and final visual design. Correct results, a report of unprocessed items and a way to undo have to stay.",
        },
        {
          question: "What if the MVP result is negative?",
          answer:
            "Stopping is a result too. The MVP showed, at the lowest cost, that the tool shouldn't be built or that an existing product does it better, before the full version was paid for.",
        },
        {
          question: "When is an MVP not needed?",
          answer:
            "When an existing product or add-in already does the job. A free trial answers that question faster and cheaper than building anything.",
        },
      ],
    },
  },
};
