import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-wall-post-automation";
const RULES = "https://paracivil.org/articles/wall-post/";
const FIND_INSERTS = "https://www.revitapidocs.com/2015/58990230-38cb-3af7-fd25-96ed3215a43d.htm";
const MASONRY = "https://diroots.com/custom-software-development/case-studies/revit-automation-for-structural-masonry/";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-wall-post-automation", {
  fa: "ساختمان در حال ساخت با اسکلت بتنی و دیوارهای آجری میان‌قاب، جایی که وال‌پست‌ها دیوارهای غیرسازه‌ای را مهار می‌کنند",
  en: "A concrete-frame building under construction with brick infill walls, where wall posts restrain the non-structural masonry",
});
const openings = img("wall-post-openings", {
  fa: "دیوار آجری داخلی با یک بازشوی در، از محل‌هایی که قاعده‌ی وال‌پست‌گذاری باید در آن‌ها رعایت شود",
  en: "An interior brick wall with a door opening, one of the places a wall post placement rule has to handle",
});

export const revitWallPostAutomation: ArticlePage = {
  slug: "revit-wall-post-automation",
  content: {
    fa: {
      slug: "revit-wall-post-automation",
      meta: {
        title: "وال‌پست‌گذاری خودکار در رویت، از ضوابط تا فمیلی، آرتینکست",
        description:
          "وال‌پست‌گذاری خودکار در رویت: ضوابط طول و ارتفاع دیوارهای غیرسازه‌ای، فمیلی وال‌پست، منطق جانمایی کنار بازشوها و تقاطع‌ها، اجرای دوباره پس از تغییر طرح و متره‌ی وال‌پست‌ها.",
      },
      keywords: [
        "وال‌پست‌گذاری خودکار در رویت",
        "فمیلی وال‌پست در رویت",
        "ضوابط وال‌پست دیوار غیرسازه‌ای",
        "پلاگین وال‌پست رویت",
        "متره‌ی وال‌پست در رویت",
      ],
      breadcrumb: "وال‌پست‌گذاری خودکار در رویت",
      category: "BIM و Revit",
      title: "وال‌پست‌گذاری خودکار در رویت، از ضوابط دیوار تا فمیلی مدل‌شده",
      leadOpinion:
        "قرار دادن یک وال‌پست در هر چند متر، روی یک دیوار آزمایشی کار می‌کند. معیار پایان کار، درک قاعده است: بازشوها، تقاطع‌ها، جهت ترسیم دیوار و دیوارهایی که پس از اجرای اول تغییر می‌کنند.",
      publishedAt: "2026-09-30",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی رویت و فمیلی‌های پارامتریک را برای خودکارسازی مدل‌سازی جزئیات اجرایی در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "rules", label: "ضوابط، به‌صورت پارامتر" },
        { id: "family", label: "فمیلی وال‌پست" },
        { id: "placement", label: "منطق جانمایی" },
        { id: "edges", label: "جزئیاتی که خطا ایجاد می‌کنند" },
        { id: "rerun", label: "اجرای دوباره و متره" },
        { id: "choice", label: "Dynamo یا پلاگین" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "وال‌پست‌گذاری خودکار در رویت یعنی افزونه‌ای که دیوارهای غیرسازه‌ای مدل را می‌خواند، بر اساس ضوابط طول، ارتفاع و بازشوها محل هر وال‌پست را تعیین می‌کند و فمیلی وال‌پست را با ارتفاع درست، از روی کف تا زیر تیر یا سقف، در همان محل قرار می‌دهد. وال‌پست عضو فولادی قائمی است، معمولاً از ناودانی، نبشی یا قوطی، که دیوار بنایی را در برابر نیروی زلزله مهار می‌کند.\n\nمنطق اولیه ساده به نظر می‌رسد: هر چند متر یک وال‌پست. این منطق روی یک دیوار آزمایشی کار می‌کند، اما در مدل واقعی، کنار اولین بازشو یا تقاطع، نتیجه‌ی نادرست می‌دهد.\n\nبنیان‌گذار آرتینکست در اولین پروژه‌ی پژوهشی خود ۶۰۰ داده را به‌صورت دستی ساخت. پاسخی که شنید این بود: «۶۰۰؟ واقعاً؟ همین؟» به‌جای افزودن داده‌های دستی بیشتر، یک سامانه‌ی کامل تولید داده ساخت و به حدود ۲۲٬۰۰۰ پیکربندی رسید که نتیجه‌ی آن نخستین مقاله‌ی منتشرشده‌ی او شد. **کار کردن و درک کردن دو معیار متفاوت‌اند.** افزونه‌ی وال‌پست‌گذاری نیز زمانی کامل است که قاعده را درک کند، نه زمانی که روی دیوار آزمایشی درست کار کند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "rules",
          heading: "ضوابط وال‌پست، به‌صورت پارامتر و نه عدد ثابت",
          paragraphs: [
            "مبحث هشتم مقررات ملی ساختمان، طبق متنی که در منابع اجرایی نقل می‌شود، طول آزاد دیوار غیرسازه‌ای بین دو پشت‌بند یا کلاف را به ۴۰ برابر عرض دیوار یا ۶ متر محدود می‌کند و حداکثر ارتفاع آن را ۳٫۵ متر یا ۳۰ برابر عرض دیوار تعیین می‌کند. جزئیات اجرای وال‌پست در پیوست ششم استاندارد ۲۸۰۰ آمده است.",
            "راهنماهای اجرایی و دفاتر فنی معمولاً قاعده‌ی سخت‌گیرانه‌تری به کار می‌برند: وال‌پست میانی برای دیوارهای بلندتر از ۴ متر، یک وال‌پست در هر ۳ متر، وال‌پست در دو طرف بازشوهای بزرگ‌تر از ۲٫۵ متر و وال‌پست افقی برای دیوارهای بلندتر از ۳٫۵ متر. این اعداد از منبعی به منبع دیگر و از دفتری به دفتر دیگر متفاوت‌اند. در نتیجه، افزونه نباید هیچ‌کدام از آن‌ها را در کد ثابت کند. هر عدد یک پارامتر قابل‌تنظیم است که دفتر یک‌بار تعیین می‌کند و در هر پروژه قابل‌بازبینی است.",
          ],
        },
        {
          id: "family",
          heading: "فمیلی وال‌پست در رویت",
          paragraphs: [
            "فمیلی وال‌پست معمولاً یک فمیلی مستقل از میزبان در دسته‌ی Structural Columns یا Generic Models است، با پارامترهای نوع برای مقطع، مانند ناودانی، نبشی یا قوطی و ابعاد آن، و پارامترهای نمونه برای تراز پایین، تراز بالا و فاصله از زیر تیر. ارتفاع وال‌پست نباید دستی وارد شود، بلکه از فاصله‌ی کف تا زیر تیر یا دال بالای دیوار محاسبه می‌شود.",
            "فمیلی باید سبک باشد. در یک پروژه‌ی مسکونی چندطبقه، تعداد وال‌پست‌ها به صدها عدد می‌رسد و هر هندسه‌ی اضافه در همه‌ی آن‌ها تکرار می‌شود. قواعد ساخت [فمیلی‌های پارامتریک رویت](/articles/custom-parametric-revit-family-creation/)، از سطح جزئیات تا پرهیز از هندسه‌ی واردشده، این‌جا نیز اعمال می‌شوند.",
          ],
        },
        {
          id: "placement",
          heading: "منطق جانمایی وال‌پست‌ها",
          paragraphs: [
            "افزونه برای هر دیوار غیرسازه‌ای، این مراحل را به ترتیب اجرا می‌کند:",
          ],
          list: {
            ordered: true,
            items: [
              "**خواندن خط محور دیوار**، طول، ضخامت و ترازهای پایین و بالای آن.",
              "**پیدا کردن بازشوها** با متد FindInserts در Revit API، که شناسه‌ی درها، پنجره‌ها و بازشوهای درون دیوار را برمی‌گرداند.",
              "**تعیین نقاط اجباری**: انتهای آزاد دیوار، دو طرف بازشوهای بزرگ‌تر از حد تعیین‌شده و محل تقاطع با دیوارهای دیگر.",
              "**تقسیم فاصله‌های باقی‌مانده** به قطعات مساوی، به‌گونه‌ای که هیچ قطعه‌ای از حداکثر فاصله‌ی مجاز بیشتر نشود.",
              "**محاسبه‌ی ارتفاع** هر وال‌پست از کف تا زیر تیر یا دال بالای همان نقطه.",
              "**قرار دادن فمیلی** در هر نقطه، هم‌راستا با دیوار، و ثبت شناسه‌ی دیوار میزبان در یک پارامتر وال‌پست.",
            ],
          },
          after: [
            "تقسیم مساوی در مرحله‌ی چهارم اهمیت دارد. اگر وال‌پست‌ها از ابتدای دیوار در فاصله‌های ثابت قرار بگیرند، آخرین قطعه ممکن است فقط چند سانتی‌متر طول داشته باشد و یک وال‌پست بی‌مصرف در کنار ستون قرار گیرد.",
          ],
        },
        {
          id: "edges",
          heading: "جزئیاتی که وال‌پست‌گذاری خودکار را با خطا مواجه می‌کنند",
          image: openings.fa,
          paragraphs: [
            "بیشتر خطاها در منطق اصلی رخ نمی‌دهند، بلکه در جزئیاتی رخ می‌دهند که روی دیوار آزمایشی وجود نداشتند:",
          ],
          list: {
            items: [
              "**جهت ترسیم دیوار**: دیواری که از راست به چپ ترسیم شده، خط محور معکوس دارد. اگر فاصله‌ها از نقطه‌ی شروع خط محور اندازه‌گیری شوند، وال‌پست‌های دو دیوار مشابه در دو طرف مخالف قرار می‌گیرند.",
              "**تقاطع‌ها**: در تقاطع T یا L، قاعده‌ی هر دو دیوار یک وال‌پست در همان نقطه ایجاد می‌کند و بدون کنترل، دو وال‌پست روی هم مدل می‌شوند.",
              "**بازشوهای نزدیک به انتهای دیوار**: اگر فاصله‌ی بازشو تا ستون کمتر از عرض مقطع وال‌پست باشد، وال‌پست در جای خالی قرار نمی‌گیرد و باید گزارش شود.",
              "**دیوارهای قوسی و دیوارهای زیر تیرهای شیب‌دار**: فاصله روی قوس اندازه‌گیری می‌شود و ارتفاع هر وال‌پست جداگانه محاسبه می‌شود.",
              "**دیوارهای جان‌پناه** که تیر بالایی ندارند و قاعده‌ی اتصال متفاوتی دارند.",
            ],
          },
          after: [
            "اولین اجرای هر افزونه‌ای روی یک پروژه‌ی واقعی، دست‌کم یک وال‌پست را وسط یک در قرار می‌دهد. این اتفاق همیشه رخ نمی‌دهد، اما یک‌بار کافی است.",
          ],
        },
        {
          id: "rerun",
          heading: "اجرای دوباره پس از تغییر طرح و متره‌ی وال‌پست‌ها",
          paragraphs: [
            "طرح معماری پس از اولین اجرا تغییر می‌کند: دری جابه‌جا می‌شود، دیواری کوتاه‌تر می‌شود یا یک بازشو اضافه می‌شود. چون شناسه‌ی دیوار میزبان در هر وال‌پست ثبت شده، افزونه در اجرای بعدی فقط وال‌پست‌های دیوارهای تغییرکرده را حذف و دوباره جانمایی می‌کند و بقیه‌ی مدل را تغییر نمی‌دهد. دیوارهایی که قاعده روی آن‌ها قابل‌اجرا نبوده، همراه با دلیل در گزارش آمده و هیچ دیواری بی‌صدا از فرآیند حذف نمی‌شود.",
            "خروجی نهایی فقط مدل نیست. یک اسکجوال بر اساس مقطع و طول، تعداد و متراژ وال‌پست‌ها را برای خرید مصالح مشخص می‌کند و همان داده‌ها می‌توانند [به Excel منتقل شوند](/articles/revit-schedule-to-excel-export/). این همان الگویی است که در [نازک‌کاری خودکار در رویت](/articles/revit-room-finishing-automation/) نیز به کار می‌رود: قاعده، جانمایی، گزارش و متره.",
          ],
        },
        {
          id: "choice",
          heading: "اسکریپت Dynamo یا پلاگین اختصاصی",
          paragraphs: [
            "اگر نقشه‌های اجرایی دفتر شما وال‌پست‌ها را فقط در جزئیات تیپ نشان می‌دهند و مدل‌سازی تک‌تک آن‌ها جزو تعهدات پروژه نیست، به این ابزار نیازی ندارید، و به ما یا شرکتی مانند ما نیز نیازی ندارید. برای یک پروژه‌ی مشخص، یک [اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) برای آزمون قواعد کافی است.",
            "پلاگین اختصاصی زمانی ارزش دارد که قواعد در چند پروژه تکرار شوند، چند کاربر هم‌زمان در یک مدل اشتراکی کار کنند و اجرای دوباره پس از تغییرات طرح ضروری باشد. نمونه‌های بین‌المللی مشابهی نیز وجود دارد، مانند افزونه‌هایی که ستون‌ها و میلگردهای دیوارهای بنایی سازه‌ای را خودکار جانمایی می‌کنند. [برنامه‌نویسی Revit API](/articles/revit-api-development/) نشان می‌دهد چنین ابزاری چگونه ساخته می‌شود و این کار در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "وال‌پست‌گذاری خودکار در رویت با یک قاعده‌ی ساده شروع می‌شود و با جزئیات کامل می‌شود: ضوابطی که به‌صورت پارامتر تنظیم می‌شوند، فمیلی سبک، تقسیم مساوی فاصله‌ها، جهت ترسیم دیوار، تقاطع‌ها، بازشوها و اجرای دوباره پس از تغییر طرح. افزونه‌ای که فقط روی دیوار آزمایشی کار کند، هنوز کامل نشده است. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "نازک‌کاری خودکار در رویت", href: "/articles/revit-room-finishing-automation/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "فمیلی پارامتریک رویت", href: "/articles/custom-parametric-revit-family-creation/" },
        { label: "برنامه‌نویسی Revit API", href: "/articles/revit-api-development/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "پاراسیویل، وال پست چیست؟ ضوابط اجرایی و طراحی والپست", href: RULES },
        { label: "Revit API, HostObject.FindInserts", href: FIND_INSERTS },
        { label: "DiRoots, Revit Automation for Structural Masonry", href: MASONRY },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "وال‌پست چیست؟",
          answer:
            "عضو فولادی قائمی، معمولاً از ناودانی، نبشی یا قوطی، که از روی تیر یا کف طبقه تا زیر تیر طبقه‌ی بالا اجرا می‌شود و دیوار غیرسازه‌ای را در برابر نیروی زلزله مهار می‌کند.",
        },
        {
          question: "فاصله‌ی مجاز وال‌پست‌ها چقدر است؟",
          answer:
            "مبحث هشتم طول آزاد دیوار غیرسازه‌ای بین دو پشت‌بند یا کلاف را به ۴۰ برابر عرض دیوار یا ۶ متر محدود می‌کند. بسیاری از دفاتر قاعده‌ی سخت‌گیرانه‌تری دارند، به همین دلیل افزونه این اعداد را به‌صورت پارامتر می‌گیرد.",
        },
        {
          question: "آیا وال‌پست‌گذاری در رویت بدون افزونه ممکن است؟",
          answer:
            "بله، با قرار دادن دستی فمیلی وال‌پست. در پروژه‌های چندطبقه تعداد وال‌پست‌ها به صدها عدد می‌رسد و هر تغییر در بازشوها به جابه‌جایی دستی دوباره نیاز دارد.",
        },
        {
          question: "فمیلی وال‌پست باید در کدام دسته‌ی رویت ساخته شود؟",
          answer:
            "معمولاً Structural Columns یا Generic Models، مستقل از میزبان. انتخاب دسته به نحوه‌ی نمایش در نقشه‌های سازه و اسکجوال‌های متره‌ی دفتر بستگی دارد.",
        },
        {
          question: "افزونه چگونه بازشوهای دیوار را پیدا می‌کند؟",
          answer:
            "با متد FindInserts در Revit API که شناسه‌ی درها، پنجره‌ها و بازشوهای درون یک دیوار را برمی‌گرداند. موقعیت هر بازشو روی خط محور دیوار از همین شناسه‌ها محاسبه می‌شود.",
        },
        {
          question: "پس از تغییر طرح، وال‌پست‌ها چگونه به‌روز می‌شوند؟",
          answer:
            "هر وال‌پست شناسه‌ی دیوار میزبان را در یک پارامتر نگه می‌دارد. افزونه در اجرای بعدی فقط وال‌پست‌های دیوارهای تغییرکرده را حذف و دوباره جانمایی می‌کند.",
        },
        {
          question: "چه زمانی به این ابزار نیاز ندارید؟",
          answer:
            "زمانی که وال‌پست‌ها فقط در جزئیات تیپ نشان داده می‌شوند و مدل‌سازی تک‌تک آن‌ها جزو تعهدات پروژه نیست.",
        },
      ],
    },
    en: {
      slug: "revit-wall-post-automation",
      meta: {
        title: "Revit Wall Post Family Automation: Rules to Model, ARTINEXT",
        description:
          "Revit wall post family automation: code limits as settings, a light post family, placement at openings and junctions, wall direction, reruns after changes, and takeoff.",
      },
      keywords: [
        "revit wall post family automation",
        "revit wall post family",
        "wall post placement revit",
        "masonry wall post rules",
        "wind post revit",
      ],
      breadcrumb: "Revit wall post family automation",
      category: "BIM & Revit",
      title: "Revit wall post family automation: from wall rules to modelled posts",
      leadOpinion:
        "Placing a post every few metres works on a test wall. The finish line is understanding the rule: openings, junctions, the direction a wall was drawn, and walls that change after the first run.",
      publishedAt: "2026-09-30",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit plugins and parametric families to automate construction-detail modelling for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "rules", label: "Rules as parameters" },
        { id: "family", label: "The wall post family" },
        { id: "placement", label: "Placement logic" },
        { id: "edges", label: "Where it goes wrong" },
        { id: "rerun", label: "Reruns and takeoff" },
        { id: "choice", label: "Dynamo or a plugin" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Revit wall post family automation means a plugin that reads the non-structural walls in a model, works out where each post goes from the rules on length, height and openings, and places the wall post family at the right height, floor to underside of beam or slab. A wall post is a vertical steel member, usually a channel, angle or box section, that restrains a masonry wall against earthquake load. In Iranian practice it's standard on infill walls in concrete and steel frames. The closest UK equivalent is the wind post.\n\nThe first version of the logic looks easy. One post every few metres. That works on a test wall, and stops working on a real model at the first opening or junction.\n\nThe founder's first research project needed data, so 600 data points got built by hand. The response: \"600? Really? That's it?\" Instead of adding more by hand, a full generation system got built, which ended at roughly 22,000 configurations and a first published paper. **Stopping when something works is the wrong finish line. Stop when you understand it.** A wall post plugin is done when it understands the rule, not when it behaves on a test wall.",
      heroImage: hero.en,
      sections: [
        {
          id: "rules",
          heading: "Wall post rules as parameters, not constants",
          paragraphs: [
            "Iran's National Building Regulations, Topic 8, as quoted in construction guides, limit the free length of a non-structural wall between two supports or ties to 40 times the wall thickness or 6 m, and its height to 3.5 m or 30 times the thickness. Wall post details sit in Appendix 6 of Standard 2800.",
            "Construction guides and offices usually work to something stricter: an intermediate post once a wall runs past 4 m, one post every 3 m, posts on both sides of openings wider than 2.5 m, and a horizontal post for walls taller than 3.5 m. These numbers vary between sources and between offices. So the plugin shouldn't hard-code any of them. Each one is a setting the office fixes once and can review per project.",
          ],
        },
        {
          id: "family",
          heading: "The wall post family in Revit",
          paragraphs: [
            "A wall post family is usually a non-hosted family in Structural Columns or Generic Models, with type parameters for the section, channel, angle or box and its size, and instance parameters for base level, top level and offset below the beam. Height is never typed in. It's worked out from the floor to the underside of the beam or slab above the wall.",
            "Keep the family light. A multi-storey residential job runs to hundreds of posts, and any extra geometry is repeated in every one of them. The rules for [parametric Revit families](/articles/custom-parametric-revit-family-creation/), from detail levels to keeping imported geometry out, apply here too.",
          ],
        },
        {
          id: "placement",
          heading: "How the placement logic works",
          paragraphs: [
            "For each non-structural wall, the plugin runs these steps in order:",
          ],
          list: {
            ordered: true,
            items: [
              "**Read the wall's location line**, its length, thickness, and base and top constraints.",
              "**Find the openings** with FindInserts in the Revit API, which returns the IDs of the doors, windows and openings inserted into the wall.",
              "**Fix the mandatory points**: free wall ends, both sides of openings over the threshold, and junctions with other walls.",
              "**Split the remaining spans evenly**, so that no span exceeds the maximum spacing.",
              "**Work out each post's height** from floor to the underside of the beam or slab at that point.",
              "**Place the family** at each point, aligned to the wall, and write the host wall's ID into a parameter on the post.",
            ],
          },
          after: [
            "The even split in step four matters. Step posts out from the start of the wall at a fixed interval and the last span can come out a few centimetres long, with a useless post standing next to a column.",
          ],
        },
        {
          id: "edges",
          heading: "The details that break wall post automation",
          image: openings.en,
          paragraphs: [
            "Most failures aren't in the main logic. They're in details the test wall didn't have:",
          ],
          list: {
            items: [
              "**Wall direction**: a wall drawn right to left has a reversed location line. Measure spacing from the line's start and two identical walls get their posts on opposite sides.",
              "**Junctions**: at a T or L junction both walls ask for a post at the same point, and without a check you get two posts modelled on top of each other.",
              "**Openings near a wall end**: if the gap between an opening and a column is narrower than the post section, the post doesn't fit, and that has to be reported.",
              "**Curved walls and walls under sloped beams**: spacing is measured along the arc, and each post's height is worked out on its own.",
              "**Parapets**, which have no beam above and a different connection rule.",
            ],
          },
          after: [
            "The first run of any such plugin on a real project will put at least one post in the middle of a door. Not every time. Once is enough.",
          ],
        },
        {
          id: "rerun",
          heading: "Rerunning after design changes, and the takeoff",
          paragraphs: [
            "The architecture changes after the first run. A door moves, a wall gets shorter, an opening is added. Because every post stores its host wall's ID, the next run deletes and re-places posts only on walls that changed, and leaves the rest of the model alone. Walls the rule couldn't handle go into the report with a reason. None drop out silently.",
            "The output isn't only the model. A schedule by section and length gives post count and total length for procurement, and the same data can [go out to Excel](/articles/revit-schedule-to-excel-export/). It's the same pattern as [room finishing automation](/articles/revit-room-finishing-automation/): rule, placement, report, takeoff.",
          ],
        },
        {
          id: "choice",
          heading: "A Dynamo graph or a custom plugin",
          paragraphs: [
            "If your drawings show wall posts only in typical details, and modelling each one isn't part of the project deliverable, you don't need this tool, and you don't need us, or anyone like us. For a single project, a [custom Dynamo script](/articles/custom-dynamo-script-development/) is enough to test the rules.",
            "A custom plugin earns its cost when the rules repeat across projects, several users work in one workshared model, and reruns after design changes are routine. There are international precedents too, such as plugins that place grout columns and rebar in structural masonry walls automatically. [Revit API development](/articles/revit-api-development/) covers how a tool like this is built, and it's the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Revit wall post family automation starts with a simple rule and is finished by the details: limits set as parameters, a light family, evenly split spans, wall direction, junctions, openings, and reruns after the design changes. A plugin that only works on the test wall isn't finished yet. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit room finishing automation", href: "/articles/revit-room-finishing-automation/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Custom parametric Revit families", href: "/articles/custom-parametric-revit-family-creation/" },
        { label: "Revit API development", href: "/articles/revit-api-development/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Paracivil, Wall post rules and design (Persian)", href: RULES },
        { label: "Revit API, HostObject.FindInserts", href: FIND_INSERTS },
        { label: "DiRoots, Revit Automation for Structural Masonry", href: MASONRY },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is a wall post?",
          answer:
            "A vertical steel member, usually a channel, angle or box section, run from the floor or beam below to the underside of the beam above, that restrains a non-structural masonry wall against earthquake load.",
        },
        {
          question: "What is the maximum spacing for wall posts?",
          answer:
            "Iran's Topic 8 limits the free length of a non-structural wall between supports to 40 times its thickness or 6 m. Many offices work to something stricter, which is why the plugin takes these numbers as settings.",
        },
        {
          question: "Can you place wall posts in Revit without a plugin?",
          answer:
            "Yes, by placing the family by hand. On a multi-storey job that runs to hundreds of posts, and every change to an opening means moving them again by hand.",
        },
        {
          question: "Which Revit category should a wall post family use?",
          answer:
            "Usually Structural Columns or Generic Models, non-hosted. The choice depends on how posts should show on structural drawings and in the office's takeoff schedules.",
        },
        {
          question: "How does the plugin find openings in a wall?",
          answer:
            "With FindInserts in the Revit API, which returns the IDs of the doors, windows and openings in a wall. Each opening's position along the wall's location line is worked out from those.",
        },
        {
          question: "How do posts update after a design change?",
          answer:
            "Each post stores its host wall's ID in a parameter. On the next run, the plugin deletes and re-places posts only on walls that changed.",
        },
        {
          question: "When don't you need this tool?",
          answer:
            "When wall posts appear only in typical details and modelling each one isn't part of the project deliverable.",
        },
      ],
    },
  },
};
