import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/software-data-integration-consulting";
const NIST = "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0";
const FMI =
  "https://www.prnewswire.com/news-releases/study-from-autodesk-and-fmi-finds-better-data-strategies-could-save-the-global-construction-industry-1-85-trillion-301376278.html";
const ISO = "https://www.bsigroup.com/en-US/products-and-services/standards/iso-19650-building-information-modeling-bim/";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("software-data-integration-consulting", {
  fa: "کابل‌های فیبر نوری متصل به پنل شبکه در زمینه‌ی تیره، برای یکپارچه‌سازی نرم‌افزارها و داده‌ها",
  en: "Fibre optic cables plugged into a network patch panel on a dark ground, for software and data integration",
});
const flow = img("data-flow-between-systems", {
  fa: "رشته‌های مسی یک کابل که از هم باز شده‌اند، مانند داده‌ای که از یک منبع به چند سامانه می‌رسد",
  en: "Copper strands fanning out from one cable, like data moving from one source into several systems",
});

export const softwareDataIntegrationConsulting: ArticlePage = {
  slug: "software-data-integration-consulting",
  content: {
    fa: {
      slug: "software-data-integration-consulting",
      meta: {
        title: "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها، آرتینکست",
        description:
          "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها برای دفاتر فنی: نقشه‌ی داده، مالک هر داده، روش‌های اتصال، داده‌های BIM، متن فارسی و تاریخ شمسی، و گزارش خطا.",
      },
      keywords: [
        "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها",
        "یکپارچه سازی نرم افزار و داده",
        "یکپارچه‌سازی داده در شرکت‌های ساختمانی",
        "تبادل داده بین نرم‌افزارها",
        "منبع واحد داده",
      ],
      breadcrumb: "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها",
      category: "اتوماسیون",
      title: "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها؛ نقشه‌ی داده پیش از انتخاب ابزار",
      leadOpinion:
        "اتصال دو نرم‌افزار بخش آسان کار است. بخشی که نتیجه را تعیین می‌کند، توافق بر سر معنای هر داده است و کمتر کسی حاضر است برای آن وقت بگذارد.",
      publishedAt: "2026-09-28",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که یکپارچه‌سازی نرم‌افزارها و داده‌ها، اتوماسیون اداری و داشبوردهای عملیاتی را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-is", label: "یکپارچه‌سازی در دفتر فنی" },
        { id: "map", label: "نقشه‌ی داده" },
        { id: "owner", label: "مالک هر داده" },
        { id: "methods", label: "چهار روش اتصال" },
        { id: "bim", label: "داده‌های BIM و Revit" },
        { id: "persian", label: "متن فارسی و تاریخ شمسی" },
        { id: "failure", label: "وقتی اتصال خطا می‌دهد" },
        { id: "consulting", label: "خروجی مشاوره" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها یعنی تصمیم‌گیری درباره‌ی اینکه کدام نرم‌افزارهای دفتر باید به هم متصل شوند، هر داده در کدام سامانه ثبت می‌شود و چگونه و با چه قاعده‌ای به سامانه‌های دیگر منتقل می‌شود. در یک دفتر معماری یا مهندسی، این نرم‌افزارها معمولاً مدل‌های Revit، نرم‌افزار حسابداری، ثبت ساعت کار، کنترل مدارک و تعداد زیادی فایل Excel هستند. هرکدام به‌تنهایی درست کار می‌کنند، اما انتقال داده میان آن‌ها دستی انجام می‌شود و هر انتقال دستی، یک فرصت برای خطاست.\n\nبیشتر درخواست‌ها با نام یک ابزار شروع می‌شوند: «می‌خواهیم Revit به نرم‌افزار حسابداری وصل شود.» اتصال فنی معمولاً کوچک‌ترین بخش کار است.\n\nدر یکی از پروژه‌های پژوهشی ما، مرحله‌ی تولید داده به‌تنهایی حدود ۱۴۸ ساعت، یعنی نزدیک به شش روز و نیم پیوسته، طول کشید، پیش از آنکه هیچ مدلی ساخته شود. همه الگوریتم را می‌خواهند و کمتر کسی آماده‌سازی را. **در یکپارچه‌سازی نیز اتصال‌دهنده کالایی عمومی است و مزیت واقعی در نقشه‌ی داده ساخته می‌شود**: جدولی که مشخص می‌کند هر داده چه معنایی دارد، مالک آن کیست و در هر سامانه به چه شکلی ثبت می‌شود.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-is",
          heading: "یکپارچه‌سازی نرم‌افزارها و داده‌ها در یک دفتر فنی به چه معناست",
          paragraphs: [
            "یکپارچه‌سازی یک قاعده‌ی توافق‌شده است درباره‌ی اینکه یک رکورد چگونه از یک سامانه به سامانه‌ی دیگر می‌رسد، چه کسی مالک آن است و وقتی دو سامانه مقدار متفاوتی دارند، کدام مقدار معتبر است. بخش فنی، یعنی API، فایل خروجی یا پایگاه داده‌ی مشترک، فقط این قاعده را اجرا می‌کند.",
            "این مسئله قدیمی است و اندازه‌گیری هم شده است. [مطالعه‌ی NIST](" + NIST + ") هزینه‌ی ناکافی‌بودن تبادل داده در صنعت تأسیسات سرمایه‌ای آمریکا را برای سال ۲۰۰۲، ۱۵٫۸ میلیارد دلار برآورد کرده و خود گزارش، این عدد را احتمالاً محافظه‌کارانه می‌داند. مطالعه‌ی Autodesk و FMI نیز نشان داد ۳۰ درصد از پاسخ‌دهندگان گفتند بیش از نیمی از داده‌های پروژه‌هایشان نامناسب است.",
            "مشاوره در این حوزه به یک پرسش پاسخ می‌دهد: کدام اتصال‌ها ارزش ساخت دارند، به چه ترتیبی و با چه روشی؟",
          ],
        },
        {
          id: "map",
          heading: "پیش از انتخاب هر ابزار، نقشه‌ی داده را بکشید",
          image: flow.fa,
          paragraphs: [
            "نقشه‌ی داده یک جدول ساده است که برای هر سامانه، پنج پرسش را پاسخ می‌دهد:",
          ],
          list: {
            items: [
              "**چه داده‌ای در آن ثبت می‌شود**: پروژه‌ها، کارفرمایان، ساعت کار، هزینه‌ها، شیت‌ها، اتاق‌ها یا المان‌های مدل.",
              "**چه کسی آن را وارد می‌کند**: یک نفر، یک تیم یا یک سامانه‌ی دیگر.",
              "**کدام سامانه‌های دیگر به آن نیاز دارند**: و هرکدام به چه بخشی از آن.",
              "**امروز چگونه منتقل می‌شود**: کپی دستی، خروجی Excel، ایمیل یا بازنویسی کامل.",
              "**هر چند وقت یک‌بار**: هم‌زمان، روزانه، هفتگی یا فقط در پایان هر فاز.",
            ],
          },
          after: [
            "این جدول معمولاً در چند جلسه با کسانی که داده را وارد می‌کنند، کامل می‌شود. نتیجه‌ی آن اغلب با تصور مدیران از جریان داده تفاوت دارد، زیرا بخش زیادی از انتقال‌ها در ایمیل‌ها و فایل‌های شخصی انجام می‌شود که در هیچ نمودار سازمانی دیده نمی‌شوند.",
            "اولویت با انتقال‌هایی است که بیشترین تکرار را دارند یا خطای آن‌ها بیشترین هزینه را ایجاد می‌کند. جمع ساعت‌های کاری که هر ماه برای صدور صورت‌حساب دستی بازنویسی می‌شود، گزینه‌ی بهتری برای نخستین اتصال است تا گزارشی سالانه، هرچند تهیه‌ی آن گزارش دشوارتر باشد.",
          ],
        },
        {
          id: "owner",
          heading: "برای هر داده، یک مالک و یک منبع واحد تعیین کنید",
          paragraphs: [
            "شماره‌ی پروژه در همه‌ی سامانه‌ها یکسان است، تا زمانی که کسی آن را بررسی کند.",
            "داده‌هایی که میان همه‌ی سامانه‌ها مشترک‌اند، مانند شماره‌ی پروژه، نام کارفرما، کد فاز و کد هزینه، داده‌های مرجع نام دارند. برای هرکدام باید سه مورد مشخص شود:",
          ],
          list: {
            items: [
              "**منبع واحد**: داده فقط در یک سامانه ایجاد و ویرایش می‌شود و سامانه‌های دیگر آن را از همان منبع می‌خوانند.",
              "**قالب**: شماره‌ی پروژه با خط تیره یا بدون آن، کد فاز عددی یا متنی، تاریخ شمسی یا میلادی.",
              "**قاعده‌ی تعارض**: وقتی دو سامانه مقدار متفاوتی دارند، کدام معتبر است و چه کسی تعارض را برطرف می‌کند.",
            ],
          },
          after: [
            "بدون این سه تصمیم، هر اتصال فقط اختلاف‌ها را سریع‌تر منتقل می‌کند. [طراحی داشبورد مدیریتی](/articles/construction-management-dashboard/) نخستین جایی است که این اختلاف‌ها دیده می‌شوند، زیرا داشبورد عددهای چند سامانه را کنار هم قرار می‌دهد.",
          ],
        },
        {
          id: "methods",
          heading: "چهار روش برای اتصال سامانه‌ها",
          paragraphs: [
            "روش مناسب به تعداد دفعات انتقال، حجم داده و امکاناتی بستگی دارد که هر نرم‌افزار در اختیار می‌گذارد:",
          ],
          list: {
            items: [
              "**تبادل فایل زمان‌بندی‌شده**: یک سامانه خروجی CSV یا Excel تولید می‌کند و سامانه‌ی دیگر آن را در زمان مشخصی وارد می‌کند. ساده‌ترین روش و برای نرم‌افزارهایی که API ندارند، اغلب تنها روش.",
              "**اتصال مستقیم با API**: یک برنامه داده را از API یک سامانه می‌خواند و در سامانه‌ی دیگر می‌نویسد. سریع و دقیق، اما هر تغییر در API یکی از دو طرف، اتصال را متوقف می‌کند.",
              "**لایه‌ی میانی**: همه‌ی سامانه‌ها به یک لایه‌ی مشترک متصل می‌شوند و این لایه، قواعد تبدیل و ثبت خطاها را مدیریت می‌کند. وقتی تعداد سامانه‌ها از سه یا چهار بیشتر شود، از اتصال‌های دوبه‌دو قابل‌نگهداری‌تر است.",
              "**پایگاه داده‌ی مشترک**: داده‌های همه‌ی سامانه‌ها در یک پایگاه داده جمع می‌شوند و گزارش‌ها و داشبوردها فقط از همان‌جا می‌خوانند.",
            ],
          },
          after: [
            "اگر هر دو نرم‌افزار از پیش اتصال آماده‌ای به یکدیگر دارند، از همان استفاده کنید. برای اتصالی که سازنده‌ی نرم‌افزار پشتیبانی می‌کند، به ما یا شرکتی مانند ما نیازی ندارید. ساخت اختصاصی زمانی ارزش دارد که اتصال آماده وجود ندارد، داده‌ها باید پیش از انتقال تبدیل شوند یا یکی از سامانه‌ها ساخت داخلی است.",
            "جهت انتقال به اندازه‌ی روش آن اهمیت دارد. انتقال یک‌طرفه، مثلاً از سامانه‌ی ثبت ساعت کار به نرم‌افزار حسابداری، یک منبع و یک خواننده دارد. هم‌گام‌سازی دوطرفه، که در آن هر دو سامانه می‌توانند یک رکورد را ویرایش کنند، برای هر فیلد به قاعده‌ای نیاز دارد که مشخص کند کدام طرف معتبر است، و به روشی برای تشخیص زمانی که هر دو طرف هم‌زمان آن را تغییر داده‌اند. بیشتر دفاتر به اتصال‌های دوطرفه‌ی بسیار کمتری از آنچه درخواست می‌کنند نیاز دارند. هرجا یک سامانه می‌تواند مالک رکورد باشد و دیگری فقط آن را بخواند، اتصال را یک‌طرفه بسازید.",
          ],
        },
        {
          id: "bim",
          heading: "داده‌های BIM و Revit در یکپارچه‌سازی",
          paragraphs: [
            "مدل Revit در بیشتر دفاتر، بزرگ‌ترین منبع داده‌ای است که به هیچ سامانه‌ی دیگری متصل نیست. مساحت اتاق‌ها، مقادیر مصالح، فهرست شیت‌ها و وضعیت ارسال نقشه‌ها در مدل وجود دارند، اما برای رسیدن به برآورد هزینه یا کنترل پروژه، معمولاً دستی بازنویسی می‌شوند.",
            "سه ابزار این اتصال را ممکن می‌کنند:",
          ],
          list: {
            items: [
              "**Revit API**: برنامه‌ای که داده‌ها را مستقیماً از مدل می‌خواند و در صورت نیاز در آن می‌نویسد.",
              "**IFC**: قالب باز تبادل مدل که buildingSMART آن را نگهداری می‌کند و برای انتقال میان نرم‌افزارهای مختلف BIM به کار می‌رود.",
              "**ISO 19650**: استانداردی برای مدیریت اطلاعات در طول چرخه‌ی عمر یک دارایی ساخته‌شده با استفاده از BIM، که نام‌گذاری، وضعیت و مسیر تأیید اطلاعات را تعیین می‌کند.",
            ],
          },
          after: [
            "هر اتصالی به مدل Revit باید شناسه‌ی پایدار هر المان را حفظ کند، واحدها را درست تبدیل کند و میان پارامترهای تایپ و نمونه تفاوت بگذارد. [خروجی Excel از اسکجوال رویت](/articles/revit-schedule-to-excel-export/) این شرایط را برای رفت‌وبرگشت داده میان Revit و Excel به‌صورت کامل بررسی می‌کند.",
          ],
        },
        {
          id: "persian",
          heading: "متن فارسی، تاریخ شمسی و نرم‌افزارهای داخلی",
          paragraphs: [
            "راهنماهای یکپارچه‌سازی معمولاً انگلیسی و تقویم میلادی را فرض می‌گیرند. دفتری در ایران با مسائلی روبه‌رو می‌شود که در این راهنماها مطرح نمی‌شوند:",
          ],
          list: {
            items: [
              "**نویسه‌های فارسی و عربی**: «ی» و «ک» عربی در یک سامانه و فارسی در سامانه‌ی دیگر باعث می‌شوند نام یکسان کارفرما، دو رکورد متفاوت شناخته شود.",
              "**ارقام**: ارقام فارسی در یک فایل و لاتین در فایل دیگر، مقایسه‌ی کدها را ناممکن می‌کنند.",
              "**تاریخ**: تاریخ شمسی در نرم‌افزار حسابداری و میلادی در Revit یا نرم‌افزار زمان‌بندی، و سال مالی‌ای که با سال میلادی هم‌خوانی ندارد.",
              "**نرم‌افزارهای داخلی**: بسیاری از نرم‌افزارهای حسابداری و اداری داخلی API عمومی ندارند و تبادل فایل تنها روش اتصال آن‌ها است.",
            ],
          },
          after: [
            "یکسان‌سازی این موارد باید در قواعد تبدیل هر اتصال نوشته شود و یک‌بار برای همیشه انجام شود. [آماده‌سازی داده برای هوش مصنوعی](/articles/prepare-company-data-for-ai/) همین یکسان‌سازی را از زاویه‌ی جست‌وجو و بازیابی متن بررسی می‌کند.",
          ],
        },
        {
          id: "failure",
          heading: "برای روزی که اتصال خطا می‌دهد برنامه داشته باشید",
          paragraphs: [
            "هر اتصالی دیر یا زود با داده‌ای روبه‌رو می‌شود که قاعده‌ای برای آن نوشته نشده است: پروژه‌ای بدون کد فاز، کارفرمایی که نامش تغییر کرده یا فایلی که نیمه‌کاره ذخیره شده است. خطرناک‌ترین حالت، اتصالی است که بی‌صدا از این رکوردها عبور می‌کند.",
            "چهار مورد این ریسک را کنترل می‌کنند:",
          ],
          list: {
            items: [
              "**ثبت هر انتقال**: چه رکوردی، در چه زمانی، با چه نتیجه‌ای.",
              "**گزارش تطبیق**: مقایسه‌ی دوره‌ای تعداد و جمع رکوردها در دو سامانه.",
              "**اعلان خطا**: پیامی به فرد مسئول، هم‌زمان با رخ‌دادن خطا.",
              "**مسئول مشخص**: فردی در دفتر که خطا را بررسی و برطرف می‌کند.",
            ],
          },
          after: [
            "هیچ رکوردی نباید بی‌صدا از فرآیند حذف شود و هر مورد منتقل‌نشده باید قابل‌مشاهده و پیگیری باشد.",
          ],
        },
        {
          id: "consulting",
          heading: "خروجی مشاوره یکپارچه‌سازی چه باید باشد",
          paragraphs: [
            "مشاوره‌ای که فقط به فهرستی از نرم‌افزارهای پیشنهادی ختم شود، کار اصلی را انجام نداده است. خروجی قابل‌استفاده شامل این موارد است:",
          ],
          list: {
            ordered: true,
            items: [
              "نقشه‌ی داده، با همه‌ی سامانه‌ها و انتقال‌های فعلی.",
              "جدول داده‌های مرجع، با منبع واحد، قالب و قاعده‌ی تعارض هرکدام.",
              "فهرست اتصال‌ها بر اساس اولویت، همراه با زمانی که هرکدام صرفه‌جویی می‌کند یا خطایی که حذف می‌کند.",
              "روش پیشنهادی برای هر اتصال.",
              "نخستین اتصال، ساخته و اندازه‌گیری‌شده، پیش از تصمیم‌گیری درباره‌ی بقیه.",
            ],
          },
          after: [
            "یکپارچه‌سازی نرم‌افزارها و داده‌ها بخشی از خدمات [اتوماسیون اداری و مدیریتی](/aec-workflow-automation/) آرتینکست است و همیشه از همین نقشه‌ی داده شروع می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "اتصال دو نرم‌افزار را می‌توان در چند روز ساخت. توافق بر سر اینکه هر داده چه معنایی دارد، مالک آن کیست و در هر سامانه چگونه نوشته می‌شود، زمان بیشتری می‌گیرد و همین توافق است که تعیین می‌کند اتصال نتیجه‌ی درست منتقل می‌کند یا خطا را سریع‌تر پخش می‌کند. از جریان کاری‌تان بگویید، کجا داده دستی منتقل می‌شود و کجا اختلاف ایجاد می‌شود. [گفت‌وگو را شروع کنید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "طراحی داشبورد مدیریتی برای شرکت‌های ساختمانی", href: "/articles/construction-management-dashboard/" },
        { label: "خروجی Excel از اسکجوال رویت", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "آماده‌سازی داده برای هوش مصنوعی", href: "/articles/prepare-company-data-for-ai/" },
        { label: "اتوماسیون هوشمند در صفحه‌ی محصولات", href: "/products/#automation" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "NIST, Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry", href: NIST },
        { label: "Autodesk and FMI, better data strategies could save the global construction industry $1.85 trillion", href: FMI },
        { label: "BSI, ISO 19650 Building Information Modelling", href: ISO },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "مشاوره یکپارچه‌سازی نرم‌افزارها و داده‌ها چیست؟",
          answer:
            "تصمیم‌گیری درباره‌ی اینکه کدام نرم‌افزارهای دفتر به هم متصل شوند، هر داده در کدام سامانه ثبت شود و با چه قاعده‌ای منتقل شود. خروجی آن نقشه‌ی داده، جدول داده‌های مرجع و فهرست اتصال‌ها بر اساس اولویت است.",
        },
        {
          question: "منبع واحد داده یعنی چه؟",
          answer:
            "هر داده فقط در یک سامانه ایجاد و ویرایش می‌شود و سامانه‌های دیگر آن را از همان‌جا می‌خوانند. در نتیجه، وقتی مقدار تغییر می‌کند، همه‌ی سامانه‌ها همان مقدار جدید را دریافت می‌کنند.",
        },
        {
          question: "کدام روش اتصال بهتر است، API یا تبادل فایل؟",
          answer:
            "API سریع‌تر و دقیق‌تر است، اما همه‌ی نرم‌افزارها آن را ندارند. تبادل فایل زمان‌بندی‌شده برای نرم‌افزارهای بدون API و برای داده‌هایی که روزانه یا هفتگی منتقل می‌شوند، کافی است.",
        },
        {
          question: "آیا می‌توان داده‌های Revit را به نرم‌افزار حسابداری متصل کرد؟",
          answer:
            "بله، از طریق Revit API یا خروجی زمان‌بندی‌شده. شرط اصلی، کد مشترکی است که المان‌ها یا اتاق‌های مدل را به ردیف‌های هزینه متصل کند و باید پیش از ساخت اتصال تعریف شود.",
        },
        {
          question: "نرم‌افزارهای داخلی که API ندارند چگونه متصل می‌شوند؟",
          answer:
            "از طریق تبادل فایل: یک سامانه خروجی تولید می‌کند و سامانه‌ی دیگر آن را وارد می‌کند. قواعد تبدیل ارقام، نویسه‌های فارسی و تاریخ شمسی در همین مرحله اعمال می‌شوند.",
        },
        {
          question: "وقتی اتصال خطا می‌دهد چه می‌شود؟",
          answer:
            "هر انتقال ثبت می‌شود، گزارش تطبیق دوره‌ای اختلاف‌ها را نشان می‌دهد و فرد مسئول هم‌زمان با خطا مطلع می‌شود. هیچ رکوردی نباید بی‌صدا حذف شود.",
        },
        {
          question: "چه زمانی به یکپارچه‌سازی اختصاصی نیاز ندارید؟",
          answer:
            "زمانی که دو نرم‌افزار از پیش اتصال آماده‌ای به یکدیگر دارند که سازنده‌ی آن پشتیبانی می‌کند. در این حالت، فعال‌کردن همان اتصال کافی است.",
        },
      ],
    },
    en: {
      slug: "software-data-integration-consulting",
      meta: {
        title: "Software and Data Integration Consulting for AEC, ARTINEXT",
        description:
          "Software and data integration consulting for AEC offices: the data map, one owner per record, four ways to connect, BIM data, Persian text and Jalali dates, failures.",
      },
      keywords: [
        "software and data integration consulting",
        "data integration for construction companies",
        "AEC system integration",
        "construction software integration",
        "single source of truth",
      ],
      breadcrumb: "Software and data integration consulting",
      category: "Automation",
      title: "Software and data integration consulting: draw the data map before choosing a tool",
      leadOpinion:
        "Connecting two programs is the easy part. The part that decides the result is agreeing what each piece of data means, and almost nobody wants to spend time on it.",
      publishedAt: "2026-09-28",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds software and data integration, office automation and operational dashboards for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-is", label: "Integration in a technical office" },
        { id: "map", label: "The data map" },
        { id: "owner", label: "One owner per record" },
        { id: "methods", label: "Four ways to connect" },
        { id: "bim", label: "BIM and Revit data" },
        { id: "persian", label: "Persian text and Jalali dates" },
        { id: "failure", label: "When a connection fails" },
        { id: "consulting", label: "What consulting should deliver" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Software and data integration consulting decides which of an office's programs should be connected, which system each piece of data lives in, and by what rule it moves to the others. In an architecture or engineering office, those programs are usually Revit models, accounting software, timesheets, document control and a great many Excel files. Each one works on its own. The data moves between them by hand, and every manual move is a chance for an error.\n\nMost requests start with a tool: \"We want Revit connected to accounting.\" The technical connection is usually the smallest part of the job.\n\nOn one of our research projects, the dataset generation step alone ran about 148 hours, roughly six and a half continuous days, before any model was built. Everyone wants the algorithm. Nobody wants the preparation. **Integration works the same way: the connector is a commodity, and the advantage gets built in the data map**, the table that says what each piece of data means, who owns it, and how each system writes it.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-is",
          heading: "What software and data integration means in a technical office",
          paragraphs: [
            "An integration is an agreed rule about how a record gets from one system to another, who owns it, and which value wins when two systems disagree. The technical part, an API, an export file, a shared database, only carries that rule out.",
            "The problem is old and has been measured. A [NIST study](" + NIST + ") put the cost of inadequate interoperability in the U.S. capital facilities industry at $15.8 billion for 2002, and called the figure likely conservative. A study by Autodesk and FMI found that 30% of respondents said more than half of their project data was bad.",
            "Consulting here answers one question: which connections are worth building, in what order, and by which method?",
          ],
        },
        {
          id: "map",
          heading: "Draw the data map before choosing any tool",
          image: flow.en,
          paragraphs: [
            "A data map is a plain table that answers five questions for every system:",
          ],
          list: {
            items: [
              "**What it holds**: projects, clients, hours, costs, sheets, rooms or model elements.",
              "**Who enters it**: one person, a team, or another system.",
              "**Which other systems need it**, and which part of it each one needs.",
              "**How it moves today**: manual copying, an Excel export, email, or retyping from scratch.",
              "**How often**: live, daily, weekly, or only at the end of each stage.",
            ],
          },
          after: [
            "The table usually gets filled in over a few sessions with the people who actually enter the data. The result rarely matches what management thinks the data flow looks like, because a lot of the moving happens in email and personal files that appear on no org chart.",
            "Start with the transfers that happen most often, or cost the most when they go wrong. A timesheet total retyped into invoices every month is a better first connection than a yearly report, however awkward the yearly one is to put together.",
          ],
        },
        {
          id: "owner",
          heading: "Give every piece of data one owner and one source",
          paragraphs: [
            "The project number is the same in every system, until someone checks.",
            "Data shared by every system, the project number, the client name, the stage code, the cost code, is reference data. Each item needs three decisions:",
          ],
          list: {
            items: [
              "**A single source**: the data is created and edited in one system only, and the others read it from there.",
              "**A format**: project numbers with or without a dash, stage codes as numbers or text, Jalali or Gregorian dates.",
              "**A conflict rule**: when two systems disagree, which value stands, and who resolves it.",
            ],
          },
          after: [
            "Without those three decisions, every connection just moves the disagreements faster. A [management dashboard](/articles/construction-management-dashboard/) is usually where they first show, because it puts numbers from several systems side by side.",
          ],
        },
        {
          id: "methods",
          heading: "Four ways to connect systems",
          paragraphs: [
            "The right method depends on how often data moves, how much of it there is, and what each program exposes:",
          ],
          list: {
            items: [
              "**Scheduled file exchange**: one system writes a CSV or Excel export, the other imports it at a set time. The simplest method, and for software without an API often the only one.",
              "**Direct API connection**: a program reads from one system's API and writes to the other. Fast and exact, but any change to either API stops it.",
              "**An integration layer**: every system connects to one shared layer that handles the conversion rules and logs errors. Once there are more than three or four systems, it's easier to maintain than pair-by-pair connections.",
              "**A shared database**: data from every system is collected in one place, and reports and dashboards read only from there.",
            ],
          },
          after: [
            "If both programs already ship a connector to each other, use it. For a connection the vendor supports, you don't need us, or anyone like us. A custom build earns its cost when no connector exists, when the data has to be transformed on the way, or when one of the systems was built in-house.",
            "Direction matters as much as method. A one-way transfer, from the timesheet system into accounting, has one source and one reader. A two-way sync, where both systems can edit the same record, needs a rule for every field about which side wins, and a way to detect when both sides changed it at once. Most offices need far fewer two-way connections than they ask for. Where one system can own the record and the other only reads it, build it one-way.",
          ],
        },
        {
          id: "bim",
          heading: "Where BIM and Revit data fit",
          paragraphs: [
            "In most offices the Revit model is the largest source of data connected to nothing else. Room areas, material quantities, sheet lists and issue status are all in the model, and to reach a cost estimate or project control they usually get retyped.",
            "Three things make that connection possible:",
          ],
          list: {
            items: [
              "**The Revit API**: a program that reads data straight from the model and, where needed, writes back into it.",
              "**IFC**: the open model exchange format maintained by buildingSMART, used to move models between different BIM programs.",
              "**ISO 19650**: the standard for managing information over the whole life of a built asset using BIM, which sets naming, status and approval routes for that information.",
            ],
          },
          after: [
            "Any connection to a Revit model has to keep each element's stable identity, convert units correctly, and tell type parameters from instance parameters. [Exporting Revit schedules to Excel](/articles/revit-schedule-to-excel-export/) covers those conditions in full for the Revit and Excel round trip.",
          ],
        },
        {
          id: "persian",
          heading: "Persian text, Jalali dates and local software",
          paragraphs: [
            "Integration guides assume English and the Gregorian calendar. An office in Iran runs into problems those guides never mention:",
          ],
          list: {
            items: [
              "**Persian and Arabic characters**: Arabic ye and kaf in one system and Persian in another make the same client name two different records.",
              "**Digits**: Persian digits in one file and Latin in another make codes impossible to compare.",
              "**Dates**: Jalali dates in the accounting software, Gregorian in Revit or the scheduling tool, and a financial year that doesn't line up with the Gregorian one.",
              "**Local software**: many Iranian accounting and office programs have no public API, so file exchange is the only way in.",
            ],
          },
          after: [
            "Normalising all of this belongs in each connection's conversion rules, written once. [Preparing company data for AI](/articles/prepare-company-data-for-ai/) covers the same normalisation from the angle of search and retrieval.",
          ],
        },
        {
          id: "failure",
          heading: "Plan for the day a connection fails",
          paragraphs: [
            "Sooner or later every connection meets data nobody wrote a rule for: a project with no stage code, a client that changed its name, a file saved halfway. The dangerous case is the connection that skips those records silently.",
            "Four things keep that risk in check:",
          ],
          list: {
            items: [
              "**A log of every transfer**: which record, when, with what result.",
              "**A reconciliation report**: a periodic comparison of record counts and totals across the two systems.",
              "**An alert**: a message to the responsible person the moment an error happens.",
              "**A named owner**: someone in the office who looks at the error and fixes it.",
            ],
          },
          after: [
            "No record should drop out of the process silently. Every item that didn't transfer has to be visible and traceable.",
          ],
        },
        {
          id: "consulting",
          heading: "What integration consulting should actually deliver",
          paragraphs: [
            "Consulting that ends in a list of recommended software hasn't done the main job. A usable result includes:",
          ],
          list: {
            ordered: true,
            items: [
              "The data map, with every system and every current transfer.",
              "The reference data table, with the source, format and conflict rule for each item.",
              "The connections, ranked by the time each one saves or the error it removes.",
              "The recommended method for each connection.",
              "The first connection, built and measured, before anything is decided about the rest.",
            ],
          },
          after: [
            "Software and data integration is part of ARTINEXT's [office automation](/aec-workflow-automation/) work, and it always starts from that data map.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A connection between two programs can be built in days. Agreeing what each piece of data means, who owns it and how every system writes it takes longer, and that agreement decides whether the connection carries the right result or spreads the error faster. Tell us where data gets moved by hand and where the numbers stop agreeing. [Start the conversation](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Office automation for AEC teams", href: "/aec-workflow-automation/" },
        { label: "Management dashboard for construction companies", href: "/articles/construction-management-dashboard/" },
        { label: "Exporting Revit schedules to Excel", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "How to prepare company data for AI", href: "/articles/prepare-company-data-for-ai/" },
        { label: "Automation on the products page", href: "/products/#automation" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "NIST, Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry", href: NIST },
        { label: "Autodesk and FMI, better data strategies could save the global construction industry $1.85 trillion", href: FMI },
        { label: "BSI, ISO 19650 Building Information Modelling", href: ISO },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is software and data integration consulting?",
          answer:
            "Deciding which of an office's programs to connect, which system each piece of data lives in, and by what rule it moves. The output is a data map, a reference data table and a ranked list of connections.",
        },
        {
          question: "What does a single source of truth mean?",
          answer:
            "Each piece of data is created and edited in one system only, and the others read it from there. When the value changes, every system receives the same new value.",
        },
        {
          question: "Which is better, an API or file exchange?",
          answer:
            "An API is faster and more exact, but not every program has one. Scheduled file exchange is enough for software without an API and for data that moves daily or weekly.",
        },
        {
          question: "Can Revit data be connected to accounting software?",
          answer:
            "Yes, through the Revit API or a scheduled export. The main condition is a shared code linking model elements or rooms to cost lines, and it has to be defined before the connection is built.",
        },
        {
          question: "How do you connect local software that has no API?",
          answer:
            "Through file exchange: one system writes an export and the other imports it. The rules for digits, Persian characters and Jalali dates are applied at that step.",
        },
        {
          question: "What happens when a connection fails?",
          answer:
            "Every transfer is logged, a periodic reconciliation report shows the differences, and the responsible person is alerted as the error happens. No record should disappear silently.",
        },
        {
          question: "When don't you need custom integration?",
          answer:
            "When the two programs already have a connector to each other that the vendor supports. Turning that connector on is enough.",
        },
      ],
    },
  },
};
