import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/aec-workflow-automation";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("aec-operational-dashboard-screen", {
  fa: "انگشتی که به نمودار میله‌ای روی صفحه‌ی تبلت اشاره می‌کند، برای نوشته‌ای درباره‌ی هوشمندسازی فرآیند کاری در صنعت ساختمان",
  en: "A finger pointing at a bar chart on a tablet, for a piece on AEC workflow automation",
});
const firstProcess = img("aec-workflow-first-process-selection", {
  fa: "بررسی یادداشت‌های رنگی روی تخته‌ی برنامه‌ریزی، برای انتخاب اولین فرآیند قابل‌خودکارسازی",
  en: "Reviewing sticky notes on a planning board, for choosing the first process to automate",
});

const connected = img("aec-automation-connected-software", {
  fa: "معماری در حال کار با لپ‌تاپ کنار ماکت ساختمان در دفتری کم‌نور، برای بخش معنای هوشمندسازی فرآیند کاری",
  en: "An architect working on a laptop beside a building model in a dim office, for the section on what workflow automation means",
});
const ownership = img("aec-automation-ownership-team", {
  fa: "تیمی در حال گفت‌وگو در دفتری روشن که از بیرون و در شب دیده می‌شود، برای بخش ساخت داخلی یا همکاری بیرونی",
  en: "A team talking in a lit office seen from outside at night, for the section on building in-house or bringing in help",
});

const NIST = "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0";
const ECOSI = "https://www.ecosi.com.co/blog/why-aec-process-automation-should-start-with-well-defined-workflows";

export const aecWorkflowAutomation: ArticlePage = {
  slug: "aec-workflow-automation",
  content: {
    fa: {
      slug: "aec-workflow-automation",
      meta: {
        title: "هوشمندسازی فرآیند کاری از کجا شروع می‌شود؟ آرتینکست",
        description:
          "هوشمندسازی فرآیند کاری در صنعت ساختمان با یک فرآیند تکراری و مکتوب شروع می‌شود، نه با خرید یک پلتفرم. انتخاب اولین فرآیند، اصلاح داده، اجرای آزمایشی و تصمیم ساخت یا همکاری.",
      },
      keywords: [
        "هوشمندسازی فرآیند کاری در صنعت ساختمان",
        "اتوماسیون جریان کاری در AEC",
        "خودکارسازی فرآیندهای BIM",
        "مشاوره خودکارسازی فرآیند",
        "ابزارهای اختصاصی خودکارسازی فرآیند",
      ],
      breadcrumb: "هوشمندسازی فرآیند کاری در صنعت ساختمان",
      category: "اتوماسیون",
      title: "هوشمندسازی فرآیند کاری در صنعت ساختمان از کجا شروع می‌شود؟",
      leadOpinion: "سقف آنچه ارزش خودکارسازی دارد، معمولاً تست‌نشده است، نه واقعی.",
      publishedAt: "2026-08-28",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که هوشمندسازی فرآیند کاری، یکپارچه‌سازی داده‌ها و داشبوردهای عملیاتی را برای شرکت‌ها و دفاتر فنی طراحی می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-means", label: "هوشمندسازی فرآیند کاری یعنی چه" },
        { id: "untested-ceiling", label: "سقفی که هرگز تست نشده" },
        { id: "common-processes", label: "محل معمول اولین فرآیند" },
        { id: "first-process", label: "انتخاب اولین فرآیند" },
        { id: "define-workflow", label: "مکتوب‌کردن فرآیند" },
        { id: "data-problem", label: "گلوگاه اصلی، داده‌ها" },
        { id: "pilot", label: "اجرای آزمایشی موازی" },
        { id: "dashboard-payoff", label: "داشبورد در کجا نتیجه می‌دهد" },
        { id: "build-or-partner", label: "ساخت داخلی یا همکاری بیرونی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "هوشمندسازی فرآیند کاری در صنعت ساختمان یعنی یک فرآیند مشخص و تکراری، مانند ارجاع یک تأییدیه، تهیه‌ی گزارش هفتگی یا انتقال داده‌ها میان دو نرم‌افزار، از کار دستی به جریانی قابل‌ردیابی تبدیل شود که بر اساس قواعد تعریف‌شده اجرا می‌شود. این کار با خرید یک پلتفرم جدید یا افزودن هوش مصنوعی تفاوت دارد. افزونه‌ی رویت کار را در داخل یک نرم‌افزار خودکار می‌کند، اما اتوماسیون جریان کاری یک لایه بالاتر و میان همه‌ی نرم‌افزارهایی قرار می‌گیرد که دفتر همین حالا از آن‌ها استفاده می‌کند.\n\nیکی از ما در دوران دانشگاه، پروژه‌ای اختیاری با حداکثر ۲ نمره‌ی اضافه را برداشت، در حالی که نمره‌ی او از ۱۸٫۵ شروع می‌شد، و آن را مانند یک پروژه‌ی واقعی انجام داد. نتیجه آن‌قدر خوب بود که دادن ۲ نمره‌ی کامل، نمره‌ی درس را به حداکثر می‌رساند و استاد به‌جای آن، ۱ نمره داد. **سقفی که دیگران تعیین کرده‌اند معمولاً واقعی نیست، بلکه سقفی است که کسی آن را تست نکرده است.** خودکارسازی نیز همین‌طور است. بیشتر دفاتر مرز آنچه قابل‌خودکارسازی است را جایی قرار می‌دهند که هرگز برای عبور از آن تلاش نکرده‌اند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-means",
          heading: "هوشمندسازی فرآیند کاری در عمل یعنی چه",
          image: connected.fa,
          paragraphs: [
            "در عمل، این کار سه شکل رایج دارد: ارجاع خودکار یک تأییدیه یا درخواست به فرد مسئول، تهیه‌ی گزارش دوره‌ای از داده‌هایی که همین حالا وجود دارند و انتقال داده‌ها میان دو سامانه، بدون آنکه کسی آن‌ها را به‌صورت دستی کپی کند. هیچ‌کدام از این سه به هوش مصنوعی نیاز ندارند. هرکدام معمولاً از یک رویداد آغازگر، چند قاعده‌ی مکتوب و یک خروجی ساخته می‌شوند.",
            "تفاوت آن با یک [پلاگین رویت](/revit-plugin-development/) در این است که به یک نرم‌افزار وابسته نیست. یک جریان می‌تواند با ثبت یک فرم آغاز شود، یک فایل Excel را بخواند، سامانه‌ی مدیریت پروژه را به‌روز کند و ایمیلی ارسال کند، بدون آنکه هیچ نرم‌افزار طراحی باز شود. به همین دلیل، این کار به کل دفتر مربوط است، نه فقط به تیم BIM.",
            "یک آزمون ساده این است که فرآیند را در قالب یک جمله توصیف کنید: وقتی این اتفاق می‌افتد، این داده را بگیر، آن را با این قاعده بررسی کن و نتیجه را به آن‌جا بفرست. اگر این جمله قابل‌نوشتن باشد، فرآیند قابل‌خودکارسازی است. اگر هنگام نوشتن، مدام استثنای تازه‌ای به آن اضافه شود، فرآیند ابتدا به تعریف نیاز دارد و دانستن این موضوع پیش از هر هزینه‌ای ارزشمند است.",
          ],
        },
        {
          id: "untested-ceiling",
          heading: "سقفی که هرگز تست نشده است",
          paragraphs: [
            "بیشتر دفاتر فرض می‌کنند خودکارسازی فقط برای کارهای آشکارا تکراری، مانند خروجی‌گرفتن یا قالب‌بندی، مناسب است و هر کاری را که در آن قضاوت وجود دارد، خارج از دسترس می‌دانند. این فرض به‌ندرت تست می‌شود و بیشتر یک عادت است تا نتیجه‌ی یک بررسی.",
            "در عمل، بیشتر فرآیندهایی که بیش از حد پیچیده به نظر می‌رسند، چند تصمیم شرطی هستند که کسی آن‌ها را مکتوب نکرده است: اگر نقشه سازه‌ای است، برای این بررسی‌کننده ارسال شود؛ اگر مبلغ از سقف مشخصی بیشتر است، امضای دوم لازم است. وقتی این تصمیم‌ها روی کاغذ نوشته شوند، کاری که غیرقابل‌خودکارسازی به نظر می‌رسید، به فهرست کوتاهی از قواعد تبدیل می‌شود و مرز واقعی، معمولاً دورتر از تصور اولیه قرار می‌گیرد.",
            "همین اتفاق درباره‌ی دامنه‌ی کار هم رخ می‌دهد. اولین جریان برای محدوده‌ی کوچکی ساخته می‌شود که دفتر به آن اطمینان داشت، درست کار می‌کند و درخواست بعدی همیشه بزرگ‌تر است. این همان جابه‌جاشدن سقف است و دلیل آن تست‌شدن سقف است، نه تغییر ابزار.",
          ],
        },
        {
          id: "common-processes",
          heading: "دفاتر فنی معمولاً اولین فرآیند را در کجا پیدا می‌کنند",
          paragraphs: ["گزینه‌ها، فارغ از اندازه‌ی دفتر، معمولاً از چند بخش ثابت می‌آیند:"],
          list: {
            items: [
              "**کنترل اسناد.** فرم‌های ارسال نقشه (Transmittal)، فهرست نقشه‌ها و شماره‌گذاری ویرایش‌ها، جایی که یک فهرست در چند جا کپی می‌شود.",
              "**درخواست‌ها و تأییدها.** RFIها، مدارک ارسالی برای تأیید (Submittal) و درخواست‌های تغییر که از طریق ایمیل جابه‌جا می‌شوند و در صندوق ورودی یک نفر منتظر می‌مانند.",
              "**گزارش‌های دوره‌ای.** گزارش پیشرفت هفتگی، کارکرد افراد و خلاصه‌ی هزینه‌ها که به‌صورت دستی از چند فایل جمع‌آوری می‌شوند.",
              "**کنترل‌های سمت مدل.** مقادیر پارامترها، نام‌گذاری و هشدارهای استاندارد در مدل Revit، که با یک [گراف Dynamo](/articles/custom-dynamo-script-development/) یا یک کنترل‌کننده قابل‌پوشش است.",
              "**انتقال میان نرم‌افزارها.** خروجی یک مدل سازه‌ای که دوباره در فایل Excel یا نرم‌افزاری دیگر تایپ می‌شود.",
            ],
          },
          after: [
            "هرکدام از این موارد از پیش یک رویداد آغازگر و یک خروجی دارند. آنچه معمولاً وجود ندارد، قاعده‌ی مکتوب میان این دو است و به همین دلیل، مکتوب‌کردن فرآیند پیش از انتخاب هر ابزاری قرار می‌گیرد.",
          ],
        },
        {
          id: "first-process",
          heading: "چگونه اولین فرآیند را انتخاب کنیم",
          image: firstProcess.fa,
          paragraphs: ["اولین فرآیند را بر اساس سه معیار و به همین ترتیب انتخاب کنید:"],
          list: {
            ordered: true,
            items: [
              "**تکرار واقعی.** کاری که هر هفته یا هر روز انجام می‌شود، نه سالی یک‌بار.",
              "**تعداد افراد درگیر.** هرچه افراد بیشتری همان کار را انجام دهند، زمان صرفه‌جویی‌شده زودتر قابل‌مشاهده می‌شود.",
              "**قواعدی که بتوان مکتوب کرد.** فرآیندی که مراحل آن در یک صفحه جا می‌شود، نه فرآیندی که هر بار بر اساس قضاوت شخصی تغییر می‌کند.",
            ],
          },
          after: [
            "فرآیندی که هر سه معیار را دارد و بر داده‌هایی تکیه می‌کند که دفتر به آن‌ها اعتماد دارد، بهترین گزینه برای شروع است، حتی اگر کوچک به نظر برسد. اولین خودکارسازی همان تجربه‌ای است که تیم از آن یاد می‌گیرد موارد بعدی چگونه باید ساخته شوند، در نتیجه یک موفقیت کوچک و قابل‌مشاهده از یک پروژه‌ی بلندپروازانه که نیمه‌کاره می‌ماند، ارزشمندتر است.",
          ],
        },
        {
          id: "define-workflow",
          heading: "فرآیند را پیش از خودکارسازی مکتوب کنید",
          paragraphs: [
            `همان‌طور که [راهنمای ECOSI درباره‌ی خودکارسازی فرآیندهای AEC](${ECOSI}) می‌گوید، خودکارسازی فرآیند معیوب را اصلاح نمی‌کند، بلکه آن را بزرگ‌تر می‌کند. پیش از انتخاب هر ابزاری، فرآیند باید تعریفی مکتوب داشته باشد که به شش پرسش پاسخ دهد:`,
          ],
          list: {
            items: [
              "**رویداد آغازگر.** چه چیزی فرآیند را شروع می‌کند: ثبت یک فرم، پروژه‌ی جدید، فایلی در یک پوشه یا تغییر یک وضعیت.",
              "**ورودی‌ها و خروجی‌ها.** چه اطلاعاتی وارد فرآیند می‌شود و چه نتیجه‌ای باید از آن خارج شود.",
              "**نقش‌ها.** هر مرحله را چه کسی انجام می‌دهد و در صورت اختلاف، چه کسی تصمیم می‌گیرد.",
              "**وضعیت‌ها و نام‌گذاری.** یک مجموعه وضعیت و یک الگوی نام‌گذاری که همه از آن استفاده کنند.",
              "**قواعد تأیید.** کدام مراحل به تأیید نیاز دارند و با چه شرطی.",
              "**موارد استثنا.** اگر ورودی ناقص باشد یا قاعده با شرایط نخواند، چه اتفاقی می‌افتد.",
            ],
          },
          after: [
            "موارد استثنا بیش از بقیه نادیده گرفته می‌شوند و همین مورد تعیین می‌کند که خودکارسازی ماه اول را پشت سر بگذارد یا خیر. وقتی جریانی حالت عادی را اجرا می‌کند و در حالت غیرعادی بی‌صدا متوقف می‌شود، افراد به‌تدریج دیگر به آن اعتماد نمی‌کنند.",
          ],
        },
        {
          id: "data-problem",
          heading: "گلوگاه اصلی معمولاً داده‌ها هستند، نه وظایف",
          paragraphs: [
            `بسیاری از تلاش‌ها برای خودکارسازی در همان قدم اول متوقف می‌شوند، نه به این دلیل که منطق پیچیده است، بلکه به این دلیل که داده‌های موردنیاز میان چند فایل، چند نفر و چند قالب ناسازگار پراکنده‌اند. این مشکل قدیمی است و اندازه‌گیری هم شده است: [مطالعه‌ی NIST](${NIST}) هزینه‌ی ناکافی‌بودن تبادل داده (Interoperability) در صنعت تأسیسات سرمایه‌ای آمریکا را برای سال ۲۰۰۲، **۱۵٫۸ میلیارد دلار** برآورد کرده که دوسوم آن بر عهده‌ی مالکان و بهره‌برداران بوده است و خود گزارش، این عدد را احتمالاً محافظه‌کارانه می‌داند.`,
            "پیش از خودکارسازی یک فرآیند، مشخص کنید داده‌های پشت آن واقعاً کجا نگهداری می‌شوند و چند نسخه از آن‌ها وجود دارد. خودکارسازی‌ای که بر داده‌های پراکنده بنا شود، همان پراکندگی را سریع‌تر تکرار می‌کند. بسیاری از اوقات، اولین پروژه اصلاً خودکارسازی نیست، بلکه ایجاد یک منبع واحد و مورد توافق برای داده‌هاست و خودکارسازی پس از آن، بخش ساده‌تر کار است.",
            "برای یک دفتر فنی، این کار معمولاً به معنای تعیین منبع اصلی هر بخش از اطلاعات است: فهرست پروژه‌ها، فهرست نقشه‌ها و فهرست مخاطبان. هر جای دیگری که همین اطلاعات را نمایش می‌دهد، از آن منبع می‌خواند و نسخه‌ی جداگانه‌ای نگه نمی‌دارد.",
          ],
        },
        {
          id: "pilot",
          heading: "پیش از جایگزینی، اجرای آزمایشی موازی",
          paragraphs: [
            "یک پروژه‌ی کم‌ریسک انتخاب کنید و فرآیند دستی و فرآیند خودکار را برای چند دوره در کنار هم اجرا کنید. خروجی‌ها، زمان صرف‌شده و خطاهای هرکدام را مقایسه کنید و از افرادی که کار را انجام می‌دهند بپرسید چه چیزی برایشان تغییر کرده است.",
            "این مقایسه دو نتیجه دارد. مواردی را که قواعد پوشش نداده‌اند، در زمانی مشخص می‌کند که فرآیند دستی هنوز به‌عنوان پشتیبان وجود دارد، و در زمان تصمیم‌گیری برای گسترش جریان، به‌جای برداشت شخصی، شواهد در اختیار دفتر قرار می‌دهد. خودکارسازی باید در کنار افرادی باشد که فرآیند را اجرا می‌کنند و اجرای آزمایشی همان جایی است که آن‌ها با رفتار سیستم آشنا می‌شوند.",
            "فقط همان چیزی را اندازه بگیرید که فرآیند به خاطر آن انتخاب شده است. اگر معیار انتخاب تکرار بوده، ساعت‌ها را بشمارید؛ اگر خطا بوده، اصلاحیه‌ها را. اجرای آزمایشی‌ای که همه‌چیز را اندازه بگیرد، هیچ چیزی را ثابت نمی‌کند.",
            "پس از جایگزینی نیز بررسی را ادامه دهید. فرآیندها تغییر می‌کنند، افراد جابه‌جا می‌شوند و قاعده‌ای که با جریان کاری سال گذشته متناسب بود، ممکن است با جریان کاری امسال متناسب نباشد. یک بازبینی کوتاه هر چند ماه یک‌بار، با تمرکز بر موارد استثنایی که جریان گزارش کرده، آن را قابل‌اعتماد نگه می‌دارد.",
          ],
        },
        {
          id: "dashboard-payoff",
          heading: "داشبورد در کجا واقعاً نتیجه می‌دهد",
          paragraphs: [
            "داشبورد زمانی ارزش هزینه‌ی خود را دارد که یک تصمیم واقعی و تکرارشونده را سریع‌تر کند، مانند اینکه کدام پروژه از برنامه عقب است یا کدام تیم بیشترین درخواست تأیید در انتظار را دارد. داشبوردی که کسی هفته‌ای یک‌بار به آن نگاه می‌کند اما بر اساس آن تصمیمی نمی‌گیرد، یک نمایشگر است، نه یک ابزار.",
            "پیش از ساخت داشبورد، تصمیمی را که قرار است سریع‌تر گرفته شود و فردی را که آن تصمیم را می‌گیرد، مشخص کنید. بدون این پاسخ، داشبورد همان داده‌های پراکنده را فقط با رنگ‌های بهتر نمایش می‌دهد. صفحه‌ی [اتوماسیون اداری و مدیریتی](/aec-workflow-automation/) دو داشبورد را نشان می‌دهد که بر همین اساس ساخته شده‌اند.",
            "داشبورد را در آخر بسازید. داشبورد بر پایه‌ی جریان‌ها و منبع داده‌ها قرار می‌گیرد و اگر پیش از آن‌ها ساخته شود، به محل دیگری تبدیل می‌شود که کسی در آن اعداد را به‌صورت دستی به‌روز می‌کند.",
          ],
        },
        {
          id: "build-or-partner",
          heading: "ساخت داخلی یا همکاری بیرونی",
          image: ownership.fa,
          paragraphs: [
            "ابزارهایی که در بیشتر راهنماها نام برده می‌شوند، از Autodesk Construction Cloud و Procore تا Bluebeam و Dynamo، همه توانمند هستند. هیچ‌کدام از آن‌ها تعیین نمی‌کنند کدام فرآیند باید خودکار شود یا قواعد آن چیست. ابزار را پس از تعریف فرآیند و توافق بر سر منبع داده‌ها انتخاب کنید و اگر ابزاری که دفتر همین حالا برای آن هزینه می‌پردازد از عهده‌ی کار برمی‌آید، همان را انتخاب کنید.",
            "اگر فرآیند ساده است و کسی در تیم با ابزارهای بدون کد (No-Code) آشناست، آن را داخلی بسازید؛ برای این کار به ما یا هر تیم دیگری نیاز ندارید. کمک بیرونی زمانی منطقی است که فرآیند هم‌زمان با چند سامانه سروکار دارد، داده‌های پشت آن واقعاً پراکنده است یا نتیجه باید به داشبوردی تبدیل شود که دفتر سال‌ها بتواند به منطق آن تکیه کند.",
            "[کار ما در هوشمندسازی فرآیند](/products/#automation) نیز از همین نقطه و با فرآیند شروع می‌شود، نه با ابزار: ابتدا جایی را پیدا می‌کنیم که کار کند می‌شود یا از دید پنهان می‌ماند و سپس تصمیم می‌گیریم چه چیزی واقعاً لازم است. اگر یک اسکریپت کوتاه کافی باشد، همان را پیشنهاد می‌دهیم. دفاتر تهران می‌توانند از صفحه‌ی [اتوماسیون اداری و مدیریتی در تهران](/workflow-automation-tehran/) شروع کنند.",
            "در هر دو حالت، مالکیت را در داخل دفتر نگه دارید: کسی در تیم باید بداند هر جریان چه کاری انجام می‌دهد و بتواند آن را متوقف کند. خودکارسازی‌ای که فقط یک فرد بیرونی آن را درک می‌کند، وابستگی به یک نفر را جابه‌جا کرده است، نه اینکه آن را از بین برده باشد.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "هوشمندسازی فرآیند کاری با یک ابزار شروع نمی‌شود، بلکه با یک فرآیند مشخص، تکراری و مکتوب و داده‌های پشت آن آغاز می‌شود. سقفی که تصور می‌کنید وجود دارد، معمولاً سقفی است که کسی آن را تست نکرده و اولین قدم واقعی، پیداکردن فرآیندی است که این را نشان دهد، نه خرید یک پلتفرم جدید.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "اتوماسیون اداری و مدیریتی در تهران", href: "/workflow-automation-tehran/" },
        { label: "محصولات هوشمندسازی فرآیند", href: "/products/#automation" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "NIST, Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry", href: NIST },
        { label: "ECOSI, Why AEC Process Automation Should Start with Well-Defined Workflows", href: ECOSI },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "هوشمندسازی فرآیند کاری در صنعت ساختمان دقیقاً یعنی چه؟",
          answer:
            "یعنی یک فرآیند تکراری، مانند ارجاع یک تأییدیه، تهیه‌ی گزارش یا انتقال داده‌ها میان دو سامانه، از کار دستی به جریانی تبدیل شود که بر اساس قواعد تعریف‌شده اجرا می‌شود. این کار به نرم‌افزار خاصی مانند رویت وابسته نیست و میان نرم‌افزارهای موجود دفتر قرار می‌گیرد.",
        },
        {
          question: "کدام فرآیندها را باید ابتدا خودکار کرد؟",
          answer:
            "فرآیندی که واقعاً تکرار می‌شود، هفتگی یا روزانه، چند نفر را درگیر می‌کند و قواعد آن آن‌قدر روشن است که در یک صفحه نوشته شود. فرآیندی که هر بار بر اساس قضاوت شخصی تغییر می‌کند، گزینه‌ی مناسبی برای شروع نیست.",
        },
        {
          question: "آیا برای شروع به هوش مصنوعی نیاز داریم؟",
          answer:
            "خیر. بیشتر خودکارسازی‌های مفید در صنعت ساختمان از یک رویداد آغازگر، چند قاعده‌ی شرطی و یک خروجی تشکیل می‌شوند. هوش مصنوعی در موارد خاص، مانند خواندن اسناد بدون ساختار، کمک می‌کند، اما شرط شروع نیست.",
        },
        {
          question: "پیش از خودکارسازی یک فرآیند، چه چیزهایی باید تعریف شود؟",
          answer:
            "رویداد آغازگر، ورودی‌ها و خروجی‌ها، مسئول هر مرحله، یک مجموعه وضعیت و الگوی نام‌گذاری، قواعد تأیید و نحوه‌ی رسیدگی به موارد استثنا. بدون این تعریف، خودکارسازی همان سردرگمی فعلی را سریع‌تر تکرار می‌کند.",
        },
        {
          question: "چگونه بفهمیم مشکل از فرآیند است یا از داده‌ها؟",
          answer:
            "اگر داده‌های موردنیاز یک فرآیند در چند فایل و چند قالب ناسازگار نگهداری می‌شوند، مشکل از داده‌ها شروع می‌شود. توافق بر سر یک منبع واحد برای داده‌ها معمولاً باید پیش از هر خودکارسازی انجام شود.",
        },
        {
          question: "چگونه یک خودکارسازی را پیش از اتکا به آن تست کنیم؟",
          answer:
            "آن را برای چند دوره، در یک پروژه‌ی کم‌ریسک و به‌موازات فرآیند دستی اجرا کنید و خروجی، زمان و خطاها را مقایسه کنید. تنها زمانی جایگزین کنید که جریان خودکار در همان معیاری که برای آن انتخاب شده، هم‌سطح یا بهتر از روش دستی باشد.",
        },
        {
          question: "چه زمانی باید به‌جای ساخت داخلی، از کمک بیرونی استفاده کرد؟",
          answer:
            "وقتی فرآیند هم‌زمان با چند سامانه سروکار دارد، داده‌های پشت آن واقعاً ناهماهنگ است یا نتیجه باید به داشبوردی با منطق پایدار تبدیل شود. برای فرآیند ساده‌ای که تیم داخلی با ابزارهای بدون کد از عهده‌ی آن برمی‌آید، کمک بیرونی لازم نیست.",
        },
        {
          question: "آیا هوشمندسازی فرآیند کاری جای افراد را می‌گیرد؟",
          answer:
            "خیر. بخش تکراری و بدون قضاوت کار حذف می‌شود، نه خود تصمیم. زمانی که صرف ارجاع دستی یا تایپ دوباره می‌شد، صرف تصمیم‌هایی می‌شود که واقعاً به قضاوت انسانی نیاز دارند.",
        },
      ],
    },
    en: {
      slug: "aec-workflow-automation",
      meta: {
        title: "Where AEC Workflow Automation Should Start, ARTINEXT",
        description:
          "AEC workflow automation starts with one defined, repeated process, not a new platform. How to pick it, fix its data, pilot it, and decide who should build it.",
      },
      keywords: [
        "AEC workflow automation",
        "BIM process automation",
        "construction workflow automation software",
        "process automation consulting",
        "custom workflow automation tools",
      ],
      breadcrumb: "Where AEC workflow automation should start",
      category: "Automation",
      title: "Where AEC workflow automation should start",
      leadOpinion: "The ceiling on what's worth automating is usually untested, not real.",
      publishedAt: "2026-08-28",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that designs workflow automation, data integration and operational dashboards for technical offices and firms.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-means", label: "What it actually means" },
        { id: "untested-ceiling", label: "The ceiling nobody has tested" },
        { id: "common-processes", label: "Where the first process usually is" },
        { id: "first-process", label: "Choosing the first process" },
        { id: "define-workflow", label: "Write the workflow down" },
        { id: "data-problem", label: "The data is the bottleneck" },
        { id: "pilot", label: "Run a pilot in parallel" },
        { id: "dashboard-payoff", label: "Where a dashboard pays off" },
        { id: "build-or-partner", label: "Build or bring in help" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "AEC workflow automation means taking one specific, repeated process, such as routing an approval, producing a weekly report or moving data between two pieces of software, and turning it from manual work into a traceable flow that runs on defined rules. It is not the same as buying a new platform or adding AI. A Revit add-in automates work inside one program; workflow automation sits a layer above it, across whatever software the office already uses.\n\nOne of us once took an optional university project worth at most 2 extra points, starting from a grade of 18.5, and treated it as a real brief. The work came back strong enough that the full 2 points would have produced a perfect score, so the professor gave 1. **A ceiling someone else set is usually not real; it is simply one nobody has tested.** Automation works the same way. Most offices put the limit of what can be automated at a point they have never actually tried to pass.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-means",
          heading: "What AEC workflow automation actually means",
          image: connected.en,
          paragraphs: [
            "In practice it takes three common shapes: routing an approval or request to the right person automatically, producing a recurring report from data that already exists, and moving data between two systems without anyone copying it by hand. None of the three needs AI. Each is usually built from a trigger, a handful of written rules and one output.",
            "What separates it from a [Revit plugin](/revit-plugin-development/) is that it does not depend on one program. A flow can start when a form is submitted, read a spreadsheet, update a project management system and send an email, without a design application ever opening. That is also why it belongs to the whole office, not only the BIM team.",
            "A useful test is to describe the process as one sentence: when this happens, take that, check it against this rule, and send the result there. If the sentence can be written, the process can be automated. If it keeps growing exceptions as you write it, the process needs defining first, and that is worth knowing before anyone spends money.",
          ],
        },
        {
          id: "untested-ceiling",
          heading: "The ceiling nobody has tested",
          paragraphs: [
            "Most offices assume automation only suits the plainly repetitive work, an export or a formatting pass, and treat anything with judgement in it as out of reach. That assumption is rarely tested. It is a habit, not a finding.",
            "In practice, most processes that seem too complicated are a few conditional decisions nobody has written down: if the drawing is structural, it goes to this reviewer; if the amount is above a set limit, it needs a second signature. Once those decisions are on paper, what looked impossible to automate becomes a short list of rules, and the real limit usually sits further out than anyone assumed.",
            "The same happens with scope. The first flow gets built for the narrow case the office was sure about, it works, and the next request is always bigger. That is the ceiling moving, and it moves because someone tested it, not because the tool changed.",
          ],
        },
        {
          id: "common-processes",
          heading: "Where AEC offices usually find their first process",
          paragraphs: ["The candidates tend to come from the same places, whatever the size of the office:"],
          list: {
            items: [
              "**Document control.** Transmittals, drawing registers and revision numbering, where one list is copied into several places.",
              "**Requests and approvals.** RFIs, submittals and change requests that move by email and wait in someone's inbox.",
              "**Recurring reports.** Weekly progress, timesheets and cost summaries assembled by hand from several files.",
              "**Model-side checks.** Parameter values, naming and standard warnings in the Revit model, which a [Dynamo graph](/articles/custom-dynamo-script-development/) or a model checker can cover.",
              "**Hand-offs between programs.** A structural model's output re-typed into a spreadsheet or another program.",
            ],
          },
          after: [
            "Each of these already has a trigger and an output. What is usually missing is the written rule in between, which is why writing the workflow down comes before choosing any tool.",
          ],
        },
        {
          id: "first-process",
          heading: "How to choose the first process",
          image: firstProcess.en,
          paragraphs: ["Pick the first process against three criteria, in this order:"],
          list: {
            ordered: true,
            items: [
              "**Genuine repetition.** Something that happens weekly or daily, not once a year.",
              "**How many people it touches.** The more people doing the same task, the sooner the time saved adds up.",
              "**Rules that can be written down.** A process whose steps fit on one page, not one that changes by personal judgement every time.",
            ],
          },
          after: [
            "A process that passes all three and runs on data the office already trusts is the right first candidate, even if it looks small. The first automation is also the one that teaches the team how the next ones should be built, so a small, visible success is worth more than an ambitious project that stalls halfway.",
          ],
        },
        {
          id: "define-workflow",
          heading: "Write the workflow down before automating it",
          paragraphs: [
            `As [ECOSI's guide to AEC process automation](${ECOSI}) puts it, "Automation does not fix a broken process; it scales it." Before any tool is chosen, the process needs a written definition that answers six questions:`,
          ],
          list: {
            items: [
              "**Trigger.** What starts it: a submitted form, a new project, a file in a folder, a status change.",
              "**Inputs and outputs.** What information goes in, and what result has to come out.",
              "**Roles.** Who does each step, and who decides when a step is disputed.",
              "**Statuses and names.** One set of statuses and one naming pattern, used by everyone.",
              "**Approval rules.** Which steps need a sign-off, and on what condition.",
              "**Exceptions.** What happens when the input is incomplete or the rule does not fit.",
            ],
          },
          after: [
            "Exceptions are the item most often skipped, and they decide whether the automation survives its first month. When a flow handles the normal case and stops silently on the unusual one, people gradually stop trusting it.",
          ],
        },
        {
          id: "data-problem",
          heading: "The real bottleneck is usually the data",
          paragraphs: [
            `Many automation efforts stall at the first step, not because the logic is complex, but because the data they need is spread across several files, several people and incompatible formats. The problem is old and has been measured: a [NIST study](${NIST}) quantified the cost of inadequate interoperability in the U.S. capital facilities industry at **$15.8 billion** for 2002, with two-thirds of it borne by owners and operators, and called the figure likely conservative.`,
            "Before automating a process, find where the data behind it actually lives and how many versions of it exist. Automation built on scattered data reproduces the scattering faster. Often the first project is not an automation at all but a single, agreed source for the data, and the automation that follows is the easy part.",
            "For a technical office this usually means deciding which system is the source for each piece of information: the project list, the drawing register, the contact list. Every other place that shows that information then reads from the source instead of keeping its own copy.",
          ],
        },
        {
          id: "pilot",
          heading: "Run a pilot in parallel before switching over",
          paragraphs: [
            "Choose one low-risk project and run the manual process and the automated one side by side for a few cycles. Compare the outputs, the time each took and the errors each produced, and ask the people doing the work what changed for them.",
            "The comparison does two jobs. It catches the cases the rules missed while the manual process is still there as a safety net, and it gives the office evidence instead of opinion when deciding whether to roll the flow out further. Automation should support the people running the process, and the pilot is where they learn what it will do.",
            "Measure only what the process was chosen for. If it was chosen for repetition, count hours; if for errors, count corrections. A pilot that measures everything proves nothing.",
            "After the switch, keep checking. Processes change, people move on, and a rule that fitted last year's workflow can stop fitting this year's. A short review every few months, looking at the exceptions the flow raised, keeps it reliable.",
          ],
        },
        {
          id: "dashboard-payoff",
          heading: "Where a dashboard actually pays off",
          paragraphs: [
            "A dashboard earns its cost when it makes one real, recurring decision faster, such as which project is behind schedule or which team has the most approvals waiting. A dashboard someone glances at once a week without acting on it is a display, not a tool.",
            "Before building one, name the decision it is meant to speed up and the person who makes it. Without that answer, the dashboard shows the same scattered data in nicer colours. The [office automation service](/aec-workflow-automation/) page shows two dashboards built on that principle.",
            "Build the dashboard last. It sits on top of the flows and the data source; built first, it becomes one more place where someone updates numbers by hand.",
          ],
        },
        {
          id: "build-or-partner",
          heading: "Build in-house or bring in outside help",
          image: ownership.en,
          paragraphs: [
            "The tools named in most guides, from Autodesk Construction Cloud and Procore to Bluebeam and Dynamo, are all capable. None of them decides which process to automate or what its rules are. Choose the tool after the process is defined and the data source is agreed, and if a tool the office already pays for can do the job, choose that one.",
            "If the process is simple and someone on the team is comfortable with no-code tools, build it in-house; you do not need us or anyone else for that. Outside help earns its place when a process touches several systems at once, the data behind it is genuinely scattered, or the result has to become a dashboard with logic the office can rely on for years.",
            "That is where [our automation work](/products/#automation) starts from the process rather than the tool: first finding where the work slows down or drops out of view, then deciding what is actually needed. If a short script is enough, that is what we recommend. Offices in Tehran can start from the [Tehran workflow automation page](/workflow-automation-tehran/).",
            "Either way, keep ownership inside the office: someone on the team should understand what each flow does and be able to switch it off. An automation only one outsider understands has moved the dependency on a single person, not removed it.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "AEC workflow automation does not start with a tool. It starts with one specific, repeated, written-down process and the data behind it. The ceiling you think you have is usually one nobody has tested, and the first real step is finding the process that proves it, not buying a new platform.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Office automation for AEC companies", href: "/aec-workflow-automation/" },
        { label: "Workflow automation, Tehran", href: "/workflow-automation-tehran/" },
        { label: "Intelligent automation products", href: "/products/#automation" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "NIST, Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry", href: NIST },
        { label: "ECOSI, Why AEC Process Automation Should Start with Well-Defined Workflows", href: ECOSI },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What does AEC workflow automation actually mean?",
          answer:
            "Turning one repeated process, such as routing an approval, producing a report or moving data between two systems, from manual work into a flow that runs on defined rules. It is not tied to one program like Revit; it sits across the software the office already uses.",
        },
        {
          question: "Which processes should we automate first?",
          answer:
            "One that genuinely repeats, weekly or daily, touches several people, and has rules clear enough to write on one page. A process that changes by personal judgement every time is not a good first candidate.",
        },
        {
          question: "Do we need AI to start automating?",
          answer:
            "No. Most useful AEC automation is a trigger, a few conditional rules and one output. AI helps in specific cases, such as reading unstructured documents, but it is not a requirement to start.",
        },
        {
          question: "What should be defined before a process is automated?",
          answer:
            "The trigger, the inputs and outputs, who does each step, one set of statuses and names, the approval rules, and what happens with exceptions. Without that definition, automation repeats the current confusion faster.",
        },
        {
          question: "How do we know if the problem is the process or the data?",
          answer:
            "If the data a process needs lives in several files and incompatible formats, the problem starts with the data. Agreeing on one source for it usually has to come before any automation.",
        },
        {
          question: "How do we test an automation before relying on it?",
          answer:
            "Run it in parallel with the manual process on one low-risk project for a few cycles, then compare output, time and errors. Switch over only once the automated flow matches or beats the manual one on what it was chosen to fix.",
        },
        {
          question: "When should we bring in outside help instead of building it ourselves?",
          answer:
            "When the process touches several systems at once, the data behind it is genuinely inconsistent, or the result has to become a dashboard with durable logic. A simple process the team can handle with no-code tools does not need outside help.",
        },
        {
          question: "Does workflow automation replace the people doing the work?",
          answer:
            "No. It removes the repetitive, judgement-free part of the work, not the decision. Time that went into routing or re-typing goes into the decisions that actually need someone's judgement.",
        },
      ],
    },
  },
};
