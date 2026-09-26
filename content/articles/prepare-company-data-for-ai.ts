import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/prepare-company-data-for-ai";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("prepare-company-data-for-ai", {
  fa: "کابل‌های شبکه در یک مرکز داده‌ی تاریک، برای آماده‌سازی داده برای هوش مصنوعی",
  en: "Network cables in a dark data centre, for preparing company data for AI",
});
const inventory = img("project-archive-data-inventory", {
  fa: "قفسه‌های بایگانی پوشه‌ها، جایی که بخشی از داده‌های پروژه نگهداری می‌شود",
  en: "Archive shelves of folders, where part of a firm's project data still lives",
});
const assess = img("ai-data-readiness-assessment", {
  fa: "نمایش داده روی صفحه‌ای تاریک، برای ارزیابی آمادگی هوش مصنوعی",
  en: "Data displayed on a dark screen, for an AI readiness assessment",
});

export const prepareCompanyDataForAi: ArticlePage = {
  slug: "prepare-company-data-for-ai",
  content: {
    fa: {
      slug: "prepare-company-data-for-ai",
      meta: {
        title: "آماده‌سازی داده برای هوش مصنوعی در دفاتر فنی، آرتینکست",
        description:
          "آماده‌سازی داده برای هوش مصنوعی با یک پرسش مشخص شروع می‌شود. منابع داده در مدل‌ها و نقشه‌ها، نام‌گذاری، پاک‌سازی، مالکیت و ارزیابی آمادگی را بخوانید.",
      },
      keywords: [
        "آماده‌سازی داده برای هوش مصنوعی",
        "ارزیابی آمادگی هوش مصنوعی",
        "آمادگی هوش مصنوعی شرکت‌ها",
        "پیاده‌سازی هوش مصنوعی در شرکت",
        "امکان‌سنجی کاربرد هوش مصنوعی",
      ],
      breadcrumb: "آماده‌سازی داده برای هوش مصنوعی",
      category: "داده و هوش مصنوعی",
      title: "آماده‌سازی داده برای هوش مصنوعی؛ از فایل‌هایی که همین حالا در دفتر دارید",
      leadOpinion:
        "هوش مصنوعی پیش از آماده‌شدن داده‌ها مزیتی ایجاد نمی‌کند. همه الگوریتم را می‌خواهند، اما مزیت واقعی در مرحله‌ی آماده‌سازی ساخته می‌شود و مدل، بخشی است که هر کسی می‌تواند بخرد.",
      publishedAt: "2026-09-26",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که سامانه‌های داده، اتوماسیون و امکان‌سنجی کاربرد هوش مصنوعی را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-ready-means", label: "داده‌ی آماده چه ویژگی‌هایی دارد" },
        { id: "one-question", label: "شروع از یک پرسش" },
        { id: "inventory", label: "داده کجا نگهداری می‌شود" },
        { id: "naming", label: "نام‌گذاری، پوشه‌ها و نسخه‌ها" },
        { id: "model-data", label: "داده‌ی مدل‌ها و نقشه‌ها" },
        { id: "documents", label: "مدارک متنی" },
        { id: "clean", label: "پاک‌سازی و یکسان‌سازی" },
        { id: "ownership", label: "مالکیت و دسترسی" },
        { id: "assessment", label: "ارزیابی آمادگی هوش مصنوعی" },
        { id: "keep-ready", label: "آماده نگه‌داشتن داده" },
        { id: "measure", label: "سنجش پاسخ‌ها" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "آماده‌سازی داده برای هوش مصنوعی با یک پرسش شروع می‌شود، نه با یک مدل: هوش مصنوعی قرار است به کدام تصمیم مشخص کمک کند و برای این کمک، چه داده‌هایی را باید بخواند؟ آماده‌سازی یعنی همین داده‌های مشخص، پیش از خرید هر ابزاری، قابل‌دسترس، یکدست، به‌روز و دارای مالک باشند. در یک دفتر معماری یا مهندسی، بیشتر این داده‌ها در پایگاه داده نیستند؛ در مدل‌های رویت، مجموعه‌های نقشه، فایل‌های PDF، صفحه‌گسترده‌ها و ایمیل‌ها قرار دارند.\n\nهوش مصنوعی پیش از آماده‌شدن داده‌ها مزیتی ایجاد نمی‌کند. این ابزار فقط آنچه را فایل‌های شما می‌گویند سریع‌تر تکرار می‌کند، از جمله آنچه نادرست می‌گویند.\n\nدر یکی از پروژه‌های بنیان‌گذار آرتینکست، حدود ۱۴۸ ساعت، یعنی نزدیک به ۶٫۵ روز، فقط صرف تولید دیتاست شد. ۱۴۸ ساعت برای یک سفر، یادگرفتن یک مهارت تازه یا به‌هم‌ریختن کامل برنامه‌ی خواب کافی است؛ این زمان صرف داده شد. **همه الگوریتم را می‌خواهند، اما مزیت واقعی در مرحله‌ی آماده‌سازی ساخته می‌شود.** مدل، بخشی است که هر کسی می‌تواند بخرد.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-ready-means",
          heading: "داده‌ی آماده برای هوش مصنوعی دقیقاً یعنی چه",
          paragraphs: [
            "داده همیشه برای یک هدف مشخص آماده است، نه به‌طور کلی. یک بایگانی پروژه ممکن است برای پرسش «تمام نقشه‌هایی که برای این پیمانکار ارسال شده کدام‌اند؟» آماده باشد و برای «وزن فولاد برج بعدی چقدر است؟» کاملاً ناکافی.",
            "برای هدفی که انتخاب می‌کنید، داده‌ی آماده پنج ویژگی دارد:",
          ],
          list: {
            items: [
              "**قابل‌دسترس**: ابزار به آن دسترسی دارد و داده فقط روی لپ‌تاپ یک نفر نگهداری نمی‌شود.",
              "**یکدست**: هر موضوع در همه‌جا با یک نام، یک قالب تاریخ و یک واحد ثبت شده است.",
              "**به‌روز**: نسخه‌های قدیمی علامت‌گذاری شده‌اند، تا پاسخ از روی یک ویرایش منسوخ داده نشود.",
              "**دارای مالک**: فردی مسئول درستی داده است و می‌تواند نادرست‌بودن آن را اعلام کند.",
              "**دارای مجوز**: مشخص است ابزار اجازه‌ی خواندن چه داده‌هایی را دارد و چه داده‌هایی را نباید بخواند.",
            ],
          },
          after: [
            "در مطالعه‌ی IBM روی مدیران ارشد داده، تنها ۲۶ درصد اطمینان داشتند که داده‌هایشان می‌تواند از درآمدهای جدید مبتنی بر هوش مصنوعی پشتیبانی کند. فاصله معمولاً در مدل نیست، در همین پنج ویژگی است.",
          ],
        },
        {
          id: "one-question",
          heading: "از یک پرسش شروع کنید، نه از تمام داده‌ها",
          paragraphs: [
            "پرهزینه‌ترین روش آماده‌سازی داده برای هوش مصنوعی، تلاش برای آماده‌سازی همه‌ی داده‌هاست. پاک‌سازی تمام پوشه‌های دفتر پروژه‌ای بدون پایان و بدون معیار مشخصی برای موفقیت است.",
            "پرسشی را انتخاب کنید که دفتر بارها می‌پرسد و پاسخ آن را دیر پیدا می‌کند. کدام پروژه‌های پیشین سیستم سازه‌ای مشابهی داشتند؟ هزینه‌ی پروژه‌های بازسازی بیمارستانی پیشین چقدر بود؟ کدام اتاق‌های این مدل هنوز نازک‌کاری ندارند؟",
            "پرسش مناسب برای شروع سه ویژگی دارد: هر هفته مطرح می‌شود، پاسخ آن در فایل‌های خود دفتر وجود دارد و کسی در دفتر می‌تواند پاسخ درست را از پاسخ نادرست تشخیص دهد.",
            "سپس مسیر را برعکس طی کنید: کدام فایل‌ها پاسخ را در خود دارند، چه کسی می‌تواند درستی آن‌ها را تأیید کند و پاسخ درست چه شکلی دارد. بخش آخر همان معیار موفقیت است و باید پیش از ساخت هر چیزی تعیین شود. در کار [تحقیق و توسعه‌ی آرتینکست](/research-development/) نیز همین قاعده برقرار است: معیار، پیش از ساخت.",
          ],
        },
        {
          id: "inventory",
          heading: "داده‌های شما واقعاً کجا نگهداری می‌شوند",
          image: inventory.fa,
          paragraphs: [
            "در یک شرکت عمومی، داده در سامانه‌ی مدیریت مشتری و نرم‌افزار حسابداری قرار دارد. در یک دفتر فنی، ارزشمندترین داده‌ها در فایل‌هایی نگهداری می‌شوند که برای ترسیم ساخته شده‌اند، نه برای خوانده‌شدن:",
          ],
          list: {
            items: [
              "**مدل‌های Revit**: مساحت اتاق‌ها، تایپ المان‌ها، مقادیر و پارامترها، در صورتی که تکمیل شده باشند.",
              "**مجموعه‌های نقشه‌ی CAD و PDF**: اطلاعاتی که برای یک فرد قابل‌مشاهده است و برای یک برنامه عمدتاً قابل‌خواندن نیست.",
              "**صفحه‌گسترده‌ها**: برآوردها، اسکجوال‌های خروجی‌گرفته‌شده از مدل‌ها و جدول‌های پیگیری‌ای که یک نفر نگهداری می‌کند.",
              "**ایمیل و پیام‌رسان‌ها**: جایی که تصمیم‌ها واقعاً گرفته شده‌اند و در هیچ جای دیگری ثبت نشده‌اند.",
              "**سامانه‌های حسابداری و کارکرد**: که هزینه‌ی پروژه را می‌دانند، اما محتوای آن را نمی‌دانند.",
            ],
          },
          after: [
            "برای هر منبع بنویسید کجا نگهداری می‌شود، مالک آن کیست و یک برنامه چگونه می‌تواند آن را بخواند. این فهرست، اولین خروجی واقعی هر ارزیابی آمادگی هوش مصنوعی است و معمولاً اولین باری است که دفتر همه‌ی منابع خود را یک‌جا می‌بیند. پراکندگی داده میان سامانه‌ها هزینه‌ی مستندی دارد: NIST هزینه‌ی ناسازگاری سامانه‌ها در صنعت تأسیسات سرمایه‌ای آمریکا را برای سال ۲۰۰۲، ۱۵٫۸ میلیارد دلار برآورد کرد و آن را رقمی احتمالاً محافظه‌کارانه دانست.",
          ],
        },
        {
          id: "naming",
          heading: "نام‌گذاری، پوشه‌ها و نسخه‌ها",
          paragraphs: [
            "راهنماهای عمومی جدول‌ها را فرض می‌گیرند. داده‌ی دفاتر فنی بیشتر به‌شکل فایل است و نام و پوشه‌ی هر فایل، فراداده‌ی آن است. نقشه‌ای با نام «plan-final-v2-NEW» برای یک فرد اطلاعات کمی دارد و برای یک برنامه هیچ اطلاعاتی ندارد.",
            "پیش از آنکه هر ابزار هوش مصنوعی بایگانی پروژه‌ها را بخواند، سه موضوع باید قاعده داشته باشد: نام‌گذاری فایل‌ها، محل نگهداری هر نوع فایل و روش علامت‌گذاری نسخه‌های منسوخ. استانداردهایی مانند ISO 19650 ساختار نام‌گذاری مناسبی برای شروع ارائه می‌کنند. آنچه اهمیت دارد، انتخاب یک ساختار و اجرای آن است، نه به‌کارگیری تمام فیلدهای یک استاندارد.",
            "قاعده‌ی نسخه‌ها از همه مهم‌تر است. ابزاری که از روی یک ویرایش منسوخ پاسخ دهد، پاسخی مطمئن، خوش‌نوشته و نادرست تحویل می‌دهد. این وضعیت از نبود پاسخ بدتر است، چون کسی پاسخ مطمئن را بررسی نمی‌کند.",
          ],
        },
        {
          id: "model-data",
          heading: "داده را از مدل‌ها و نقشه‌ها بیرون بیاورید",
          paragraphs: [
            "مدل رویت یک پایگاه داده است که کسی با آن مانند پایگاه داده رفتار نمی‌کند. مساحت اتاق‌ها، تایپ دیوارها، تعداد درها و اطلاعات نازک‌کاری همگی در مدل وجود دارند، اما کیفیت آن‌ها به اندازه‌ی پارامترهایی است که واقعاً تکمیل شده‌اند.",
            "دو مرحله این داده را قابل‌استفاده می‌کند. نخست، بررسی اینکه پارامترهایی که پرسش به آن‌ها وابسته است تکمیل و یکدست باشند، که دقیقاً کار چک‌لیست یک [کنترل‌کننده مدل رویت](/articles/revit-model-checker/) است. دوم، استخراج این پارامترها در جدول‌هایی که یک برنامه می‌تواند بخواند، به‌طور منظم و نه یک‌بار. [خروجی اکسل از اسکجوال رویت](/articles/revit-schedule-to-excel-export/) نسخه‌ی دستی همین مرحله است.",
            "مجموعه‌های نقشه دشوارترند. متن یک PDF قابل‌استخراج است، اما معنای یک خط روی پلان عمدتاً قابل‌استخراج نیست. اگر پرسشی به اطلاعاتی وابسته است که فقط به‌صورت هندسه‌ی ترسیمی وجود دارد، پاسخ صادقانه این است که داده پیش از آماده‌شدن باید تبدیل شود.",
          ],
        },
        {
          id: "documents",
          heading: "مدارک متنی: مشخصات فنی، گزارش‌ها و مکاتبات",
          paragraphs: [
            "نیمه‌ی دیگر دانش یک دفتر در مدارک متنی قرار دارد: مشخصات فنی، گزارش‌های طراحی، صورت‌جلسه‌ها، RFIها و ایمیل‌های مرتبط با آن‌ها. این همان داده‌ای است که بیشتر دستیارهای هوش مصنوعی ابتدا به آن متصل می‌شوند و کمتر از هر داده‌ی دیگری برای آن آماده است.",
            "در همان مطالعه‌ی IBM، تنها ۲۶ درصد از مدیران ارشد داده اطمینان داشتند که سازمانشان می‌تواند از داده‌های بدون ساختار به‌گونه‌ای استفاده کند که ارزش تجاری ایجاد کند. برای یک بایگانی مدارک، آماده‌سازی به چهار موضوع برمی‌گردد:",
          ],
          list: {
            items: [
              "**متن، نه تصویر متن**: PDF اسکن‌شده پیش از هر جست‌وجویی به تشخیص نویسه نیاز دارد.",
              "**یک نسخه‌ی معتبر**: پیش‌نویس‌ها و نسخه‌های منسوخ حذف یا به‌وضوح علامت‌گذاری شده‌اند.",
              "**برچسب‌های پایه**: پروژه، تاریخ، رشته و وضعیت برای هر مدرک، در نام فایل یا در کنار آن.",
              "**محدوده‌ی مشخص**: پوشه‌هایی که دستیار اجازه‌ی جست‌وجو در آن‌ها را دارد، برای هر پروژه تعیین شده است.",
            ],
          },
          after: [
            "دستیاری که در تمام پیش‌نویس‌های یک گزارش جست‌وجو کند، از روی اولین نسخه‌ای که پیدا کرده پاسخ می‌دهد.",
          ],
        },
        {
          id: "clean",
          heading: "پاک‌سازی، یکسان‌سازی و حذف موارد تکراری",
          paragraphs: [
            "پاک‌سازی، بخش کم‌جلوه‌ی میانی کار است: اصلاح واحدها، تاریخ‌ها، نام‌ها و موارد تکراری، به‌گونه‌ای که هر موضوع فقط به یک شکل ثبت شده باشد.",
            "دفاتر فارسی‌زبان با مسئله‌ای روبه‌رو هستند که کمتر راهنمایی به آن اشاره می‌کند. نام یک کارفرما که در یک فایل با «ی» و «ک» عربی و در فایل دیگر با «ی» و «ک» فارسی تایپ شده، برای یک برنامه دو رشته‌ی متفاوت است. تاریخی با ارقام فارسی در کنار تاریخی با ارقام لاتین، یا تاریخ شمسی در کنار تاریخ میلادی نیز همین وضعیت را دارد. یک فرد آن‌ها را یکسان می‌خواند، اما جست‌وجو یا مدل هوش مصنوعی آن‌ها را یکسان نمی‌خواند.",
            "موارد تکراری نیمه‌ی دیگر کار است. پروژه‌ای که با چند نام ذخیره شده یا مشاوری که با دو املای متفاوت ثبت شده، هر پاسخ را به چند بخش تقسیم می‌کند. این موارد را یک‌بار ادغام کنید و سپس در نقطه‌ی ورود داده قاعده‌ای بگذارید تا دوباره تکرار نشوند.",
            "واحدها و تعریف‌ها نسخه‌ی مهندسی همین مسئله هستند. مساحت خالص در یک جدول و مساحت ناخالص همراه با دیوارها در جدولی دیگر، هر دو «مساحت» نامیده می‌شوند و عدد یکسانی نیستند. هر ستونی که ممکن است دو تعریف داشته باشد، باید تعریف خود را در کنار نام خود داشته باشد.",
          ],
        },
        {
          id: "ownership",
          heading: "مالک داده و محدوده‌ی دسترسی هوش مصنوعی را تعیین کنید",
          paragraphs: [
            "هر مجموعه‌داده به یک مالک نیاز دارد: فردی مشخص که مسئول درستی آن است و در صورت نادرست‌بودن داده به او اطلاع داده می‌شود. بدون مالک، داده‌ی پاک‌شده با رسیدن اولین موعد تحویل به وضعیت پیشین خود برمی‌گردد.",
            "دسترسی، تصمیم دیگر است. قراردادها، حق‌الزحمه‌ها، اطلاعات شخصی و نقشه‌های محرمانه‌ی کارفرما ممکن است دقیقاً همان داده‌هایی باشند که یک پرسش به آن‌ها نیاز دارد و دقیقاً همان‌هایی که ابزار نباید بخواند. پیش از اتصال هر ابزاری، بنویسید چه داده‌هایی در محدوده قرار دارند و چه داده‌هایی خارج از آن. چارچوب مدیریت ریسک هوش مصنوعی NIST مرجع داوطلبانه و مفیدی برای بررسی این ریسک‌هاست.",
            "مالکیت به مسیری برای گزارش خطا نیز نیاز دارد. وقتی ابزار پاسخ نادرستی می‌دهد، فاصله‌ی میان «این پاسخ نادرست است» و فایلی که باعث آن شده، باید کوتاه باشد. اگر کسی نتواند یک پاسخ را تا منبع آن دنبال کند، کسی نیز نمی‌تواند آن منبع را اصلاح کند.",
          ],
        },
        {
          id: "assessment",
          heading: "ارزیابی آمادگی هوش مصنوعی باید چه خروجی‌ای داشته باشد",
          image: assess.fa,
          paragraphs: [
            "ارزیابی مفید کوتاه است و به یک تصمیم ختم می‌شود. خروجی آن باید شامل این موارد باشد:",
          ],
          list: {
            ordered: true,
            items: [
              "پرسش مشخص و شکل پاسخ درست آن.",
              "منابعی که پاسخ را در خود دارند، همراه با مالک هرکدام.",
              "بررسی نمونه‌ای این منابع: چه میزان از داده‌ها تکمیل‌شده، یکدست و به‌روز است.",
              "قواعد دسترسی: چه داده‌هایی قابل‌خواندن است و چه داده‌هایی نیست.",
              "نتیجه‌ی نهایی: آماده، آماده پس از یک پاک‌سازی مشخص، یا فاقد ارزش اجرا.",
            ],
          },
          after: [
            "نتیجه‌ی سوم یک خروجی واقعی است. اگر پاسخ پرسش با یک گزارش یا یک اسکجوال فیلترشده به دست می‌آید، به هوش مصنوعی نیازی نیست و هیچ‌کس، از جمله ما، نباید آن را به شما بفروشد. اگر داده‌های پشت پرسش با هزینه‌ی معقول یکدست نمی‌شوند، نتیجه‌ی صادقانه توقف در همین نقطه است.",
          ],
        },
        {
          id: "keep-ready",
          heading: "آماده‌سازی را پیوسته کنید، نه یک پاک‌سازی یک‌باره",
          paragraphs: [
            "پاک‌سازی یک‌باره فقط تا زمانی آماده باقی می‌ماند که کسی به فایل‌ها دست نزند. داده زمانی آماده باقی می‌ماند که قواعد در نقطه‌ی تولید داده اجرا شوند: کنترل نام‌گذاری هنگام ذخیره، پارامتر الزامی در کنترل مدل و فهرست کشویی به‌جای متن آزاد.",
            "استخراج داده نیز باید به‌طور خودکار و منظم، در یک منبع مرجع برای هر مجموعه‌داده انجام شود؛ موضوعی که در نوشته‌ی [هوشمندسازی فرآیند کاری در صنعت ساختمان](/articles/aec-workflow-automation/) بررسی شده است. در این مرحله، هوش مصنوعی فقط یک خواننده‌ی دیگر برای داده‌هایی است که دفتر از پیش به آن‌ها اعتماد دارد و تنها در همین مرحله است که به مزیت تبدیل می‌شود.",
          ],
        },
        {
          id: "measure",
          heading: "پاسخ‌ها را بسنجید، نه مدل را",
          paragraphs: [
            "پس از راه‌اندازی ابزار، معیار سنجش همان معیاری است که در ابتدا نوشته شد: آیا ابزار به پرسش انتخاب‌شده، بر اساس منابع به‌روز، پاسخ درست می‌دهد؟ هر ماه نمونه‌ای از پاسخ‌ها را با فایل‌ها مقایسه کنید و پاسخ‌های نادرست را ثبت کنید.",
            "هر پاسخ نادرست به یکی از سه علت برمی‌گردد: داده‌ی ناموجود، داده‌ی ناهمگون یا داده‌ای که ابزار نباید آن را می‌خواند. در این مرحله هرکدام از این منابع مالک مشخصی دارد و دلیل تعیین مالک‌ها در ابتدای کار همین است.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "آماده‌سازی داده برای هوش مصنوعی، بیشتر حجم کار استفاده از هوش مصنوعی است و همان بخشی است که در هیچ نمایش محصولی دیده نمی‌شود. یک پرسش انتخاب کنید، فایل‌هایی را که به آن پاسخ می‌دهند پیدا کنید، آن‌ها را یکدست کنید، برایشان مالک تعیین کنید و همین وضعیت را حفظ کنید. مدل را می‌توان خرید، اما آماده‌سازی را نمی‌توان.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "هوشمندسازی فرآیند کاری در صنعت ساختمان", href: "/articles/aec-workflow-automation/" },
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
        { label: "تحقیق و توسعه", href: "/research-development/" },
        { label: "اتوماسیون هوشمند در صفحه‌ی محصولات", href: "/products/#automation" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "NIST, AI Risk Management Framework", href: "https://www.nist.gov/itl/ai-risk-management-framework" },
        { label: "IBM study, Chief data officers redefine strategies as AI ambitions outpace readiness", href: "https://www.prnewswire.com/news-releases/ibm-study-chief-data-officers-redefine-strategies-as-ai-ambitions-outpace-readiness-302613794.html" },
        { label: "NIST, Cost analysis of inadequate interoperability in the U.S. capital facilities industry", href: "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "داده‌ی آماده برای هوش مصنوعی یعنی چه؟",
          answer:
            "داده‌ای که برای یک پرسش مشخص، قابل‌دسترس، یکدست، به‌روز، دارای مالک و دارای مجوز خواندن باشد. آمادگی همیشه برای یک هدف مشخص سنجیده می‌شود، نه به‌طور کلی.",
        },
        {
          question: "ارزیابی آمادگی هوش مصنوعی چیست؟",
          answer:
            "بررسی کوتاهی که یک پرسش مشخص، منابع داده‌ی آن، کیفیت نمونه‌ای این منابع و قواعد دسترسی را مشخص می‌کند و به یک نتیجه می‌رسد: آماده، آماده پس از پاک‌سازی مشخص، یا فاقد ارزش اجرا.",
        },
        {
          question: "آماده‌سازی داده برای هوش مصنوعی چقدر زمان می‌برد؟",
          answer:
            "خود ارزیابی برای یک پرسش مشخص کوتاه است. زمان پاک‌سازی کاملاً به وضعیت منابع بستگی دارد و به همین دلیل ارزیابی پیش از برآورد زمان انجام می‌شود.",
        },
        {
          question: "آیا پیش از استفاده از هوش مصنوعی به انبار داده نیاز داریم؟",
          answer:
            "برای اولین کاربرد خیر. کافی است داده‌های یک پرسش قابل‌دسترس، یکدست و دارای مالک باشند. انبار داده ممکن است بعدها، زمانی که چند پرسش به منابع مشترک وابسته‌اند، لازم شود.",
        },
        {
          question: "آیا هوش مصنوعی می‌تواند مستقیماً مدل‌های رویت و نقشه‌ها را بخواند؟",
          answer:
            "به‌طور محدود. متن PDF و پارامترهای استخراج‌شده از مدل قابل‌خواندن هستند، اما معنای هندسه‌ی ترسیمی عمدتاً قابل‌خواندن نیست. داده‌ی مدل ابتدا باید کنترل و در جدول استخراج شود.",
        },
        {
          question: "آیا می‌توان پس از راه‌اندازی هوش مصنوعی داده‌ها را پاک‌سازی کرد؟",
          answer:
            "امکان‌پذیر است، اما در این فاصله ابزار از روی داده‌ی نادرست پاسخ می‌دهد و اعتماد تیم به آن کاهش پیدا می‌کند. بازگرداندن این اعتماد دشوارتر از آماده‌سازی داده پیش از راه‌اندازی است.",
        },
        {
          question: "آیا دفاتر کوچک هم باید داده‌ها را برای هوش مصنوعی آماده کنند؟",
          answer:
            "اگر پرسش تکرارشونده‌ای وجود ندارد که داده بتواند سریع‌تر به آن پاسخ دهد، خیر. نام‌گذاری یکدست و یک منبع مرجع برای هر مجموعه‌داده، حتی بدون هوش مصنوعی، ارزش خود را دارد.",
        },
      ],
    },
    en: {
      slug: "prepare-company-data-for-ai",
      meta: {
        title: "How to Prepare Company Data for AI in an AEC Office",
        description:
          "How to prepare company data for AI: start from one question, find the data in models and drawings, fix naming and duplicates, assign owners, assess readiness.",
      },
      keywords: [
        "how to prepare company data for AI",
        "data readiness for AI",
        "AI readiness assessment",
        "AI is not an advantage before your data is ready",
        "AI data preparation",
      ],
      breadcrumb: "Preparing company data for AI",
      category: "Data & AI",
      title: "How to prepare company data for AI, starting with the files you already have",
      leadOpinion:
        "AI is not an advantage before your data is ready. Everyone wants the algorithm. Nobody wants the preparation, and the model is the part anyone can buy.",
      publishedAt: "2026-09-26",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds data systems, automation and AI readiness work for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-ready-means", label: "What AI-ready data means" },
        { id: "one-question", label: "Start from one question" },
        { id: "inventory", label: "Where the data lives" },
        { id: "naming", label: "Naming, folders and versions" },
        { id: "model-data", label: "Data in models and drawings" },
        { id: "documents", label: "Documents" },
        { id: "clean", label: "Clean and standardise" },
        { id: "ownership", label: "Ownership and access" },
        { id: "assessment", label: "An AI readiness assessment" },
        { id: "keep-ready", label: "Keeping data ready" },
        { id: "measure", label: "Measuring the answers" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "How to prepare company data for AI starts with a question, not a model: which specific decision should AI help with, and what data would it have to read to help? Preparing data means making that data findable, consistent, current and owned by someone, before any tool is bought. In an architecture or engineering office, most of it isn't in a database. It's in Revit models, drawing sets, PDFs, spreadsheets and email.\n\nAI is not an advantage before your data is ready. It's a faster way to repeat what your files already say, including what they say wrong.\n\nOne of the founder's projects spent about 148 hours, roughly six and a half days, on nothing but generating a dataset. 148 hours is enough time to travel somewhere, learn something new, or completely destroy your sleep schedule. It went on data. **Everyone wants the algorithm. Nobody wants the preparation, and the preparation is where the advantage gets built.** The model is the part anyone can buy.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-ready-means",
          heading: "What AI-ready data actually means",
          paragraphs: [
            "Data is ready for a purpose, never in general. The same project archive can be ready for \"find every drawing issued to this contractor\" and hopeless for \"estimate the steel tonnage of the next tower.\"",
            "For the purpose you pick, ready means five things:",
          ],
          list: {
            items: [
              "**Findable**: the tool can reach it, and it doesn't live on one person's laptop.",
              "**Consistent**: the same thing is named, dated and measured the same way everywhere.",
              "**Current**: superseded versions are marked, so answers don't come from an old revision.",
              "**Owned**: someone is responsible for it being right, and can say when it isn't.",
              "**Permitted**: it's clear what the tool may read, and what it must not.",
            ],
          },
          after: [
            "In IBM's study of chief data officers, only 26% were confident their data could support new AI-enabled revenue streams. The gap is rarely the model. It's this list.",
          ],
        },
        {
          id: "one-question",
          heading: "Start from one question, not from all your data",
          paragraphs: [
            "The most expensive way to prepare data for AI is to try to prepare all of it. Cleaning every folder in the office is a project with no end and no test of success.",
            "Pick one question the office asks repeatedly and answers slowly. Which of our past projects had a similar structural system? What did our past hospital fit-outs cost? Which rooms in this model still have no finish?",
            "A good first question has three properties: it comes up every week, the answer already exists somewhere in the office's own files, and someone in the office can tell a right answer from a wrong one.",
            "Then work backwards: which files hold the answer, who can say whether they're right, and what a correct answer looks like. That last part is the success test, and it has to exist before anything is built. The same rule runs through our [research and development](/research-development/) work: the measure comes before the build.",
          ],
        },
        {
          id: "inventory",
          heading: "Find out where your data actually lives",
          image: inventory.en,
          paragraphs: [
            "In a generic company, data lives in a CRM and an accounting system. In an AEC office, the most valuable data lives in files built for drawing, not for reading:",
          ],
          list: {
            items: [
              "**Revit models**, holding room areas, element types, quantities and parameters, when they're filled in.",
              "**CAD and PDF drawing sets**, where information is visible to a person and mostly unreadable to a program.",
              "**Spreadsheets**: estimates, schedules exported from models, and trackers kept by one person.",
              "**Email and messaging**, where decisions were actually made and never written down anywhere else.",
              "**Accounting and timesheet systems**, which know what a project cost but not what it contained.",
            ],
          },
          after: [
            "For each source, write down where it lives, who owns it and how a program could read it. That list is the first real output of any AI readiness assessment, and usually the first time an office sees all its sources in one place. Scattered data has a documented price: NIST estimated the cost of inadequate interoperability in the US capital facilities industry at $15.8 billion for 2002, and called that figure likely conservative.",
          ],
        },
        {
          id: "naming",
          heading: "Naming, folders and versions",
          paragraphs: [
            "Generic guides assume tables. AEC data is mostly files, and a file's name and folder are its metadata. A drawing called \"plan-final-v2-NEW\" tells a person little and a program nothing.",
            "Before any AI reads a project archive, three things need a rule: how files are named, where each kind of file lives, and how a superseded version is marked. Standards such as ISO 19650 give a naming structure to start from. The point is to pick one and apply it, not to adopt every field a standard offers.",
            "The version rule matters most. A tool answering from a superseded revision gives a confident, well-written, wrong answer. That's worse than no answer, because nobody checks a confident one.",
          ],
        },
        {
          id: "model-data",
          heading: "Get the data out of models and drawings",
          paragraphs: [
            "A Revit model is a database nobody treats as one. Room areas, wall types, door counts and finish data are all in there, but only as good as the parameters people actually filled in.",
            "Two steps make it usable. First, check that the parameters the question depends on are filled in and consistent, which is exactly what a [Revit model checker](/articles/revit-model-checker/) checkset is for. Second, extract them into tables a program can read, regularly rather than once. [Exporting a Revit schedule to Excel](/articles/revit-schedule-to-excel-export/) is the manual version of that step.",
            "Drawing sets are harder. Text in a PDF can be extracted; the meaning of a line on a plan mostly can't. If a question depends on information that only exists as drawn geometry, the honest answer is that the data needs converting before it's ready.",
          ],
        },
        {
          id: "documents",
          heading: "Documents: specifications, reports and correspondence",
          paragraphs: [
            "The other half of an office's knowledge sits in documents: specifications, design reports, meeting minutes, RFIs and the email around them. This is the data most AI assistants get pointed at first, and the data least prepared for it.",
            "In the same IBM study, only 26% of chief data officers were confident their organization could use unstructured data in a way that delivers business value. For a document archive, preparation comes down to four things:",
          ],
          list: {
            items: [
              "**Text, not pictures of text**: a scanned PDF needs text recognition before anything can search it.",
              "**One current version**: drafts and superseded issues removed or clearly marked.",
              "**Basic tags**: project, date, discipline and status on every document, in the file name or alongside it.",
              "**A boundary**: the folders the assistant may search, decided per project.",
            ],
          },
          after: [
            "An assistant that searches every draft of every report answers from whichever version it found first.",
          ],
        },
        {
          id: "clean",
          heading: "Clean, standardise, remove duplicates",
          paragraphs: [
            "Cleaning is the unglamorous middle: fixing units, dates, names and duplicates so that one thing is recorded one way.",
            "Persian-language offices have a problem most guides never mention. A client name typed with the Arabic forms of ye and kaf in one file and the Persian forms in another is two different strings to a program. So is a date in Persian digits next to one in Latin digits, or a Jalali date next to a Gregorian one. A person reads them as the same thing. A search or a model doesn't.",
            "Duplicates are the other half. One project stored under several names, or one consultant under two spellings, splits every answer into pieces. Merge them once, then add a rule at the point of entry so they don't come back.",
            "Units and definitions are the engineering version of the same problem. Net area in one table and gross area including walls in another are both called \"area\" and are not the same number. Any column that could mean two things should carry its definition next to its name.",
          ],
        },
        {
          id: "ownership",
          heading: "Decide who owns the data and what AI may read",
          paragraphs: [
            "Every dataset needs an owner: a named person responsible for it being right, who gets told when it isn't. Without one, cleaned data drifts back to its old state the moment the next deadline arrives.",
            "Access is the other decision. Contracts, fees, personal data and client-confidential drawings may be exactly what a question needs and exactly what a tool must not read. Write down what's in and what's out before connecting anything. NIST's AI Risk Management Framework is a useful, voluntary reference for working through those risks.",
            "Ownership also needs a way to report errors. When the tool gives a wrong answer, the path from \"this is wrong\" to the file that caused it should be short. If nobody can trace an answer back to its source, nobody can fix the source.",
          ],
        },
        {
          id: "assessment",
          heading: "What an AI readiness assessment should produce",
          image: assess.en,
          paragraphs: [
            "A useful assessment is short and ends in a decision. It should produce:",
          ],
          list: {
            ordered: true,
            items: [
              "The one question, and what a correct answer looks like.",
              "The sources that hold the answer, with an owner for each.",
              "A sample check of those sources: how much is filled in, consistent and current.",
              "The access rules: what may be read and what may not.",
              "A verdict: ready, ready after a named clean-up, or not worth doing.",
            ],
          },
          after: [
            "The third verdict is a real outcome. If the question can be answered by a report or a filtered schedule, it doesn't need AI, and nobody should sell you any, including us. If the data behind it can't be made consistent at a reasonable cost, the honest result is to stop there.",
          ],
        },
        {
          id: "keep-ready",
          heading: "Make preparation continuous, not a one-off clean-up",
          paragraphs: [
            "A one-off clean-up stays ready for about as long as nobody touches the files. Data stays ready when the rules are enforced where data is created: a naming check on save, a required parameter in the model check, a dropdown instead of free text.",
            "Extraction should run on its own too, regularly, into one source of truth per dataset, as covered in [where AEC workflow automation should start](/articles/aec-workflow-automation/). At that point AI is one more reader of data the office already trusts, and that's the only point at which it becomes an advantage.",
          ],
        },
        {
          id: "measure",
          heading: "Measure the answers, not the model",
          paragraphs: [
            "Once a tool is running, the test is the one written at the start: does it answer the chosen question correctly, from current sources? Check a sample of answers against the files every month, and keep a record of the wrong ones.",
            "Every wrong answer traces back to one of three causes: missing data, inconsistent data, or data it shouldn't have read. By then each source has an owner, which is exactly why the owners were named first.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Preparing company data for AI is most of the work of using AI, and the part nobody shows in a demo. Pick one question, find the files that answer it, make them consistent, give them an owner, and keep them that way. The model can be bought. The preparation can't.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Where AEC workflow automation should start", href: "/articles/aec-workflow-automation/" },
        { label: "Office automation", href: "/aec-workflow-automation/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
        { label: "Research and development", href: "/research-development/" },
        { label: "Intelligent automation on the Products page", href: "/products/#automation" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "NIST, AI Risk Management Framework", href: "https://www.nist.gov/itl/ai-risk-management-framework" },
        { label: "IBM study, Chief data officers redefine strategies as AI ambitions outpace readiness", href: "https://www.prnewswire.com/news-releases/ibm-study-chief-data-officers-redefine-strategies-as-ai-ambitions-outpace-readiness-302613794.html" },
        { label: "NIST, Cost analysis of inadequate interoperability in the U.S. capital facilities industry", href: "https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry-0" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What does AI-ready data mean?",
          answer:
            "Data that, for one specific question, is findable, consistent, current, owned by someone and permitted to be read. Readiness is always measured against a purpose, never in general.",
        },
        {
          question: "What is an AI readiness assessment?",
          answer:
            "A short review that fixes one question, its data sources, a sample check of their quality and the access rules, and ends in a verdict: ready, ready after a named clean-up, or not worth doing.",
        },
        {
          question: "How long does it take to prepare data for AI?",
          answer:
            "The assessment for one well-chosen question is short. The clean-up depends entirely on the state of the sources, which is why the assessment comes before any estimate of time.",
        },
        {
          question: "Do we need a data warehouse before using AI?",
          answer:
            "Not for a first use case. The data for one question needs to be findable, consistent and owned. A warehouse may come later, when several questions share the same sources.",
        },
        {
          question: "Can AI read our Revit models and drawings directly?",
          answer:
            "In a limited way. PDF text and parameters extracted from a model can be read; the meaning of drawn geometry mostly can't. Model data should be checked and extracted into tables first.",
        },
        {
          question: "Can we clean the data after deploying AI?",
          answer:
            "You can, but in the meantime the tool answers from bad data and the team's trust in it drops. Winning that trust back is harder than preparing the data before launch.",
        },
        {
          question: "Should a small office bother preparing data for AI?",
          answer:
            "Not if there's no repeated question the data could answer faster. Consistent naming and one source of truth per dataset are worth having even without AI.",
        },
      ],
    },
  },
};
