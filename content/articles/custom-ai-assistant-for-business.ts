import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/custom-ai-assistant-for-business";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("custom-ai-assistant-for-business", {
  fa: "کد برنامه روی یک صفحه‌ی تاریک، برای توسعه‌ی دستیار هوش مصنوعی سازمانی",
  en: "Program code on a dark screen, for building a custom AI assistant for business",
});
const retrieval = img("ai-assistant-document-retrieval", {
  fa: "قفسه‌های کتابخانه با ردیف‌های کتاب، مانند مدارکی که دستیار از میان آن‌ها پاسخ را پیدا می‌کند",
  en: "Library shelves lined with books, like the documents an assistant retrieves its answers from",
});
const access = img("ai-assistant-access-control", {
  fa: "رک سرورها با چراغ‌های روشن در اتاقی تاریک، برای کنترل دسترسی دستیار هوش مصنوعی",
  en: "Server racks with status lights in a dark room, for controlling what an AI assistant can access",
});

export const customAiAssistantForBusiness: ArticlePage = {
  slug: "custom-ai-assistant-for-business",
  content: {
    fa: {
      slug: "custom-ai-assistant-for-business",
      meta: {
        title: "دستیار هوش مصنوعی سازمانی برای دفاتر فنی، آرتینکست",
        description:
          "دستیار هوش مصنوعی سازمانی از روی مدارک خود دفتر پاسخ می‌دهد و منبع هر پاسخ را نشان می‌دهد. اجزا، بازیابی مدارک، متن فارسی، دسترسی‌ها و مراحل ساخت را بخوانید.",
      },
      keywords: [
        "دستیار هوش مصنوعی سازمانی",
        "دستیار هوشمند سازمانی",
        "دستیار هوش مصنوعی فارسی",
        "توسعه دستیار هوش مصنوعی اختصاصی",
        "ساخت دستیار هوش مصنوعی برای شرکت",
      ],
      breadcrumb: "دستیار هوش مصنوعی سازمانی",
      category: "داده و هوش مصنوعی",
      title: "دستیار هوش مصنوعی سازمانی؛ پاسخ از روی مدارک دفتر، همراه با منبع هر پاسخ",
      leadOpinion:
        "کادر گفت‌وگو ساده‌ترین رابط کاربری نرم‌افزار است. سادگی رابط نشانه‌ی ساده‌بودن ساخت آن نیست؛ نشانه‌ی این است که بخش دشوار کار پیش از رسیدن به کاربر حل شده است.",
      publishedAt: "2026-09-27",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که سامانه‌های داده، اتوماسیون و امکان‌سنجی کاربرد هوش مصنوعی را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-is", label: "دستیار سازمانی از چه اجزایی ساخته می‌شود" },
        { id: "custom-or-licensed", label: "ساخت اختصاصی یا اشتراک آماده" },
        { id: "first-job", label: "یک وظیفه‌ی مشخص برای شروع" },
        { id: "retrieval", label: "پاسخ از روی مدارک" },
        { id: "sources", label: "منبع برای هر پاسخ" },
        { id: "persian", label: "مدارک فارسی" },
        { id: "access", label: "دسترسی‌ها و محل داده" },
        { id: "testing", label: "آزمون با پرسش‌های شناخته‌شده" },
        { id: "build", label: "مراحل ساخت" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "دستیار هوش مصنوعی سازمانی یک مدل زبانی است که به مدارک خود شرکت متصل شده و برای آن قاعده تعریف شده است: چه مدارکی را می‌تواند بخواند، چه کسانی می‌توانند از آن بپرسند و منبع هر پاسخ را چگونه نشان دهد. این دستیار از روی مشخصات فنی، استانداردها، سوابق پروژه‌ها و کارهای پیشین دفتر پاسخ می‌دهد، نه از روی اینترنت، و فایلی را که هر پاسخ از آن آمده مشخص می‌کند. بیشتر کار توسعه‌ی یک دستیار هوشمند سازمانی همین اتصال است. مدل خریداری می‌شود و بقیه ساخته می‌شود.\n\nکادر گفت‌وگو ساده‌ترین رابط کاربری نرم‌افزار است و دقیقاً به همین دلیل، تصویر نادرستی از کار پشت آن ایجاد می‌کند.\n\nیکی از پلاگین‌هایی که آرتینکست ساخته، فرآیندی را که معمولاً حدود دو هفته و گاهی نزدیک به یک ماه زمان می‌برد، به حدود ۱۰ دقیقه رساند. تمام رابط کاربری آن یک دکمه است. **رابط ساده، حاصل فشرده‌شدن تصمیم‌های پیشین است، نه نشانه‌ی کم‌عمق‌بودن کار.** دستیار هوش مصنوعی نیز همین وضعیت را دارد: یک کادر متن در ظاهر، و پشت آن تصمیم‌هایی درباره‌ی اینکه کدام فایل‌ها معتبرند، کدام نسخه به‌روز است و دستیار چه چیزی را نباید بگوید.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-is",
          heading: "دستیار هوش مصنوعی سازمانی از چه اجزایی ساخته می‌شود",
          paragraphs: [
            "اگر توضیحات تبلیغاتی را کنار بگذاریم، هر دستیار سازمانی چهار جزء دارد:",
          ],
          list: {
            items: [
              "**مدل زبانی**: از طریق API خریداری می‌شود یا روی سرور خود شرکت اجرا می‌شود. پاسخ را می‌نویسد، اما دفتر شما را نمی‌شناسد.",
              "**منابع**: مشخصات فنی، استانداردها، گزارش‌ها و سوابقی که دستیار اجازه‌ی جست‌وجو در آن‌ها را دارد.",
              "**بازیابی**: مرحله‌ای که برای هر پرسش، بخش‌های مرتبط مدارک را پیدا می‌کند و در اختیار مدل قرار می‌دهد.",
              "**قواعد**: اینکه چه کسی چه چیزی می‌تواند بپرسد، هر فرد به کدام پوشه‌ها دسترسی دارد و دستیار وقتی پاسخ در منابع وجود ندارد چه باید بکند.",
            ],
          },
          after: [
            "چت‌بات بر اساس یک سناریوی ازپیش‌نوشته‌شده پاسخ می‌دهد. دستیار عمومی مانند ChatGPT بر اساس آنچه مدل در آموزش یاد گرفته پاسخ می‌دهد. دستیار سازمانی بر اساس مدارک شما پاسخ می‌دهد. عامل هوشمند یک گام جلوتر می‌رود و اقدام انجام می‌دهد: ایمیل می‌فرستد، درخواست ثبت می‌کند یا یک رکورد را تغییر می‌دهد.",
            "بیشتر دفاتر بهتر است از گزینه‌ی سوم شروع کنند و مدتی در همان‌جا بمانند. ریسک دستیاری که فقط می‌خواند، با ریسک دستیاری که می‌نویسد یکسان نیست.",
          ],
        },
        {
          id: "custom-or-licensed",
          heading: "ساخت اختصاصی یا اشتراک یک دستیار آماده",
          paragraphs: [
            "Microsoft 365 Copilot، ChatGPT Enterprise و محصولات مشابه از پیش امکان جست‌وجو در فایل‌های شرکت را دارند. اگر مدارک شما در سامانه‌ای نگهداری می‌شوند که این محصولات به آن متصل می‌شوند، کارکنان به انگلیسی می‌پرسند و همه‌ی کارکنان اجازه‌ی دیدن همه‌ی فایل‌ها را دارند، خرید اشتراک احتمالاً پاسخ مناسبی است و برای آن به ما یا شرکت مشابهی نیازی ندارید.",
            "توسعه‌ی دستیار هوش مصنوعی اختصاصی زمانی ارزش هزینه‌ی خود را دارد که یکی از این شرایط برقرار باشد:",
          ],
          list: {
            items: [
              "دانش دفتر در جاهایی نگهداری می‌شود که این محصولات به آن دسترسی ندارند: مدل‌های Revit، مجموعه‌های نقشه، پایگاه داده‌ی پروژه‌ها یا سامانه‌ی کنترل مدارکی که در خود دفتر ساخته شده است.",
              "دسترسی‌ها برای هر پروژه متفاوت است و دستیار باید آن‌ها را برای تک‌تک فایل‌ها رعایت کند.",
              "پرسش‌ها و مدارک به زبان فارسی هستند و کیفیت پاسخ‌ها باید به فارسی سنجیده شود.",
              "هر پاسخ باید به یک بند یا شیت مشخص ارجاع دهد، در قالبی که دفتر بتواند آن را بررسی کند.",
              "دستیار باید درون ابزاری قرار بگیرد که کارکنان همین حالا از آن استفاده می‌کنند، مانند [داشبورد مدیریتی دفتر](/articles/construction-management-dashboard/).",
            ],
          },
          after: [
            "اگر هیچ‌کدام از این شرایط برقرار نیست، اشتراک بخرید. اگر دو مورد یا بیشتر برقرار است، محصول آماده بیشتر کار را انجام می‌دهد و در همان بخشی که اهمیت دارد، ناکافی خواهد بود.",
          ],
        },
        {
          id: "first-job",
          heading: "پیش از پاسخ به همه‌ی پرسش‌ها، یک وظیفه‌ی مشخص تعریف کنید",
          paragraphs: [
            "دستیاری که قرار است به هر پرسشی درباره‌ی شرکت پاسخ دهد، معمولاً هرگز به مرحله‌ی استفاده نمی‌رسد. یک وظیفه‌ی مشخص برای یک تیم مشخص انتخاب کنید؛ وظیفه‌ای که پاسخ درست آن به‌صورت مکتوب وجود دارد و کسی در دفتر می‌تواند آن را تشخیص دهد.",
            "در یک دفتر معماری یا مهندسی، وظایفی که معمولاً این شرایط را دارند عبارت‌اند از:",
          ],
          list: {
            items: [
              "**جست‌وجو در مشخصات فنی**: کدام محصول، رده‌ی مقاومت یا رواداری در مشخصات تعیین شده است، همراه با شماره‌ی بند.",
              "**استانداردهای دفتر**: دستورالعمل ترسیم، قواعد نام‌گذاری، انتخاب تمپلیت‌ها و برنامه‌ی اجرای BIM.",
              "**جست‌وجو در پروژه‌های پیشین**: کدام پروژه‌ها سیستم، کارفرما یا جزئیات مشابهی داشته‌اند.",
              "**سابقه‌ی RFIها و مکاتبات**: چه چیزی پرسیده شد، چه پاسخی داده شد و در چه تاریخی.",
              "**آشنایی کارکنان جدید**: پرسش‌هایی که هر همکار تازه‌وارد در ماه نخست مطرح می‌کند.",
            ],
          },
          after: [
            "پرسش‌های واقعی این وظیفه را از کسانی که آن‌ها را مطرح می‌کنند جمع‌آوری کنید و پاسخ درست هرکدام را در کنار آن بنویسید. این فهرست در مرحله‌ی آزمون به معیار سنجش تبدیل می‌شود و باید پیش از ساخت هر چیزی آماده باشد.",
          ],
        },
        {
          id: "retrieval",
          heading: "دستیار چگونه از روی مدارک شما پاسخ می‌دهد",
          image: retrieval.fa,
          paragraphs: [
            "روشی که تقریباً همه‌ی دستیارهای سازمانی بر آن استوارند، تولید متن با پشتیبانی بازیابی (RAG) نام دارد و از مقاله‌ای در سال ۲۰۲۰ به نویسندگی Patrick Lewis و همکارانش آمده است. نقطه‌ی شروع آن مقاله هنوز مسئله را به‌درستی توصیف می‌کند: توانایی مدل‌های زبانی در دسترسی دقیق به دانش محدود است و نشان‌دادن منبع پاسخ‌ها مسئله‌ای حل‌نشده بود.",
            "در عمل، این روش چهار مرحله دارد:",
          ],
          list: {
            ordered: true,
            items: [
              "مدارک به بخش‌های کوچک تقسیم می‌شوند: یک بند، یک پاراگراف یا یک سطر از جدول.",
              "هر بخش نمایه‌سازی می‌شود تا هم بر اساس معنا و هم بر اساس واژه‌های دقیق قابل‌جست‌وجو باشد.",
              "برای هر پرسش، بخش‌هایی که به احتمال زیاد پاسخ را در خود دارند بازیابی می‌شوند.",
              "مدل پاسخ را فقط بر اساس همین بخش‌ها می‌نویسد و به آن‌ها ارجاع می‌دهد.",
            ],
          },
          after: [
            "بیشترین توجه معمولاً به مدل است، اما مرحله‌ای که پاسخ را تعیین می‌کند، بازیابی است. اگر بند درست بازیابی نشود، بهترین مدل موجود نیز پاسخی روان بر اساس بند نادرست می‌نویسد.",
            "در نتیجه، پروژه‌ی اصلی خود مدارک است. مشخصات فنی‌ای که به‌صورت تصویر اسکن شده، سه پیش‌نویس از یک گزارش در یک پوشه یا استانداردی که سال گذشته جایگزین شده، همگی مستقیماً وارد پاسخ‌ها می‌شوند. [آماده‌سازی داده برای هوش مصنوعی](/articles/prepare-company-data-for-ai/) این کار را به‌طور کامل بررسی می‌کند و دستیار، نخستین جایی است که نادیده‌گرفتن آن آشکار می‌شود.",
          ],
        },
        {
          id: "sources",
          heading: "هر پاسخ منبع خود را نشان می‌دهد، یا پاسخی داده نمی‌شود",
          paragraphs: [
            "پروفایل هوش مصنوعی مولد NIST خطای اصلی این مدل‌ها را «confabulation» می‌نامد: تولید محتوایی که با اطمینان بیان می‌شود، اما نادرست است. این خطا را نمی‌توان به‌طور کامل از مدل حذف کرد، اما می‌توان سامانه را به‌گونه‌ای طراحی کرد که اثر آن محدود شود.",
            "اگر از یک چت‌بات عمومی درباره‌ی جدول درهای پروژه‌ی دفتر خود بپرسید، باز هم پاسخ دریافت می‌کنید؛ پاسخی مرتب، روان و مربوط به دفتری دیگر.",
            "سه قاعده دستیار سازمانی را قابل‌اعتماد نگه می‌دارد:",
          ],
          list: {
            items: [
              "**ارجاع برای هر پاسخ**: نام فایل، شماره‌ی ویرایش و بند، صفحه یا شیت، به‌صورت پیوندی که خواننده بتواند آن را باز کند.",
              "**اعلام نبود پاسخ در منابع**: «در مدارکی که به آن‌ها دسترسی دارید پیدا نشد» پاسخ درستی است و دستیار باید برای همین حالت نیز آزمون شود.",
              "**ماندن در محدوده‌ی وظیفه**: پرسش‌های خارج از منابع به مرجع مناسب ارجاع داده می‌شوند و دستیار برای آن‌ها پاسخی نمی‌سازد.",
            ],
          },
          after: [
            "ارجاع، شیوه‌ی استفاده از دستیار را تغییر می‌دهد. پاسخی که منبع دارد با بازکردن یک فایل بررسی می‌شود. پاسخی که منبع ندارد یا بدون بررسی پذیرفته می‌شود یا کنار گذاشته می‌شود و هیچ‌کدام از این دو نتیجه مطلوب نیست.",
          ],
        },
        {
          id: "persian",
          heading: "دستیار هوش مصنوعی فارسی به آزمون جداگانه نیاز دارد",
          paragraphs: [
            "بیشتر راهنماها زبان انگلیسی را فرض می‌گیرند. دفتری که به فارسی کار می‌کند، با مسائلی روبه‌رو می‌شود که در این راهنماها مطرح نمی‌شوند.",
            "یک واژه ممکن است به چند شکل ذخیره شده باشد: «ی» و «ک» عربی در کنار «ی» و «ک» فارسی، نیم‌فاصله در یک فایل و فاصله در فایل دیگر، ارقام فارسی در کنار ارقام لاتین و تاریخ شمسی در کنار تاریخ میلادی. یک فرد همه‌ی این‌ها را یکسان می‌خواند، اما نمایه‌ی جست‌وجو ممکن است آن‌ها را واژه‌های متفاوتی در نظر بگیرد و در نتیجه، بخشی که پاسخ پرسش را در خود دارد هرگز بازیابی نشود.",
            "مدارک فارسی اسکن‌شده دشوارترند. تشخیص نویسه باید حروف متصل، نقطه‌ها و سطرهایی با دو جهت نوشتاری را درست تشخیص دهد و ممکن است متنی به دست بیاید که کامل به نظر می‌رسد، اما کامل نیست. پیش از نمایه‌سازی، نمونه‌ای از این متن‌ها را با چشم بررسی کنید.",
            "پروفایل NIST تفاوت عملکرد مدل‌ها میان زبان‌های مختلف را یکی از ریسک‌های هوش مصنوعی مولد می‌داند. نتیجه‌ی عملی آن روشن است: **متن فارسی پیش از نمایه‌سازی یکسان‌سازی شود** و دستیار با پرسش‌های فارسی‌ای آزمون شود که همان کسانی نوشته‌اند که بعدها از آن استفاده می‌کنند. عملکرد خوب یک مدل در نمایش انگلیسی، اطلاعات کمی درباره‌ی رفتار آن با مشخصات فنی فارسی می‌دهد.",
          ],
        },
        {
          id: "access",
          heading: "چه کسی می‌تواند بپرسد و دستیار چه چیزی را می‌تواند بخواند",
          image: access.fa,
          paragraphs: [
            "دستیاری که به همه‌ی فایل‌ها دسترسی دارد، دیر یا زود پیشنهاد حق‌الزحمه‌ای را برای کسی نقل می‌کند که نباید آن را ببیند. دسترسی‌ها باید در مرحله‌ی بازیابی اعمال شوند و به قضاوت مدل واگذار نشوند: هر فرد فقط باید بخش‌هایی را دریافت کند که از مدارکی آمده‌اند که پیش از این نیز اجازه‌ی بازکردن آن‌ها را داشته است.",
            "دو تصمیم دیگر نیز در همین مرحله گرفته می‌شود:",
          ],
          list: {
            items: [
              "**محل پردازش داده**: مدلی که از طریق API فراخوانی می‌شود، بخش‌های مدارک را همراه هر پرسش به ارائه‌دهنده می‌فرستد. مدلی که روی سرور خود شرکت اجرا می‌شود این کار را نمی‌کند، اما میزبانی آن هزینه‌ی بیشتری دارد. شرایط ارائه‌دهنده درباره‌ی داده‌ها را پیش از نمایه‌سازی اولین مدرک بخوانید.",
              "**اقدام‌های مجاز**: کار را با دستیاری شروع کنید که فقط می‌خواند. OWASP تزریق دستور (prompt injection) را نخستین ریسک برنامه‌های مبتنی بر مدل زبانی می‌داند، از جمله حالت غیرمستقیم آن، که در آن دستورهایی پنهان در یک فایل یا صفحه‌ی وب، رفتار مدل را تغییر می‌دهند. دستیاری که فقط می‌خواند و ارجاع می‌دهد، در برابر این ریسک آسیب بسیار کمتری از دستیاری می‌بیند که می‌تواند بفرستد، ویرایش کند یا حذف کند.",
            ],
          },
          after: [
            "پرسش‌ها، پاسخ‌ها و بخش‌های استفاده‌شده را از روز نخست ثبت کنید. به این ترتیب، هر پاسخ نادرست تا فایلی که باعث آن شده قابل‌ردیابی است.",
          ],
        },
        {
          id: "testing",
          heading: "دستیار را با پرسش‌هایی آزمون کنید که پاسخشان را می‌دانید",
          paragraphs: [
            "پیش از آنکه کسی به دستیار اتکا کند، فهرست پرسش‌های مرحله‌ی نخست را اجرا کنید. هر پاسخ را درست، نادرست یا به‌درستی ردشده علامت بزنید و بررسی کنید که ارجاع هر پاسخ واقعاً آن را پشتیبانی می‌کند؛ ارجاع نادرست خطایی جدا از پاسخ نادرست است.",
            "آزمون پس از راه‌اندازی نیز ادامه پیدا می‌کند. مدارک تغییر می‌کنند، استانداردها جایگزین می‌شوند و هر پروژه‌ی جدید پوشه‌هایی اضافه می‌کند که هنوز نمایه‌سازی نشده‌اند. هر بار که منابع تغییر می‌کنند، فهرست را دوباره اجرا کنید و هر پرسش واقعی‌ای را که دستیار به آن پاسخ نادرست داده، به فهرست اضافه کنید. به این ترتیب، فهرست به دقیق‌ترین توصیف از کارهایی تبدیل می‌شود که می‌توان به دستیار سپرد.",
          ],
        },
        {
          id: "build",
          heading: "ساخت دستیار هوش مصنوعی برای شرکت معمولاً چگونه پیش می‌رود",
          paragraphs: [
            "مراحل ساخت، همان ترتیبی را دارند که در بخش‌های پیشین آمد:",
          ],
          list: {
            ordered: true,
            items: [
              "**تعیین محدوده**: یک وظیفه، یک تیم و فهرست پرسش‌ها همراه با پاسخ درست هرکدام.",
              "**فهرست منابع**: کدام فایل‌ها به این پرسش‌ها پاسخ می‌دهند، مالک هرکدام کیست و کدام نسخه به‌روز است.",
              "**نمونه‌ی اولیه روی بخشی از مدارک**: مدارک یک پروژه، به اندازه‌ای که مشخص شود بازیابی بخش‌های درست را پیدا می‌کند یا نه.",
              "**آزمون**: اجرای فهرست پرسش‌ها، شامل پرسش‌هایی که باید رد شوند.",
              "**اجرای آزمایشی**: یک تیم، پرسش‌های واقعی و ثبت تمام پرسش و پاسخ‌ها.",
              "**گسترش**: افزودن منابع یا تیم دوم، فقط پس از آنکه تیم نخست به دستیار اعتماد کرده باشد.",
            ],
          },
          after: [
            "هزینه به همان عواملی بستگی دارد که در هر نرم‌افزار اختصاصی دیگری مؤثرند: تعداد سامانه‌های منبع، وضعیت مدارک، جزئیات دسترسی‌ها و اینکه دستیار از طریق API یک ارائه‌دهنده اجرا می‌شود یا روی سخت‌افزار خود شرکت. نمونه‌ی اولیه روی بخشی از مدارک، کم‌هزینه‌ترین راه برای شناختن پرهزینه‌ترین بخش پروژه، پیش از قیمت‌گذاری ساخت کامل است. این رویکرد مرحله‌ای، همان رویکردی است که در [تحقیق و توسعه‌ی آرتینکست](/research-development/) به کار می‌رود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "دستیار هوش مصنوعی سازمانی یک کادر متن است که روی مجموعه‌ای از تصمیم‌های دقیق قرار گرفته: کدام فایل‌ها معتبرند، کدام ویرایش به‌روز است، چه کسی چه چیزی را می‌تواند ببیند و دستیار وقتی پاسخ را نمی‌داند چه می‌گوید. محصول اصلی همین تصمیم‌هاست و هرچه کادر ساده‌تر به نظر برسد، تصمیم‌های بیشتری پیش از آن گرفته شده است.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "آماده‌سازی داده برای هوش مصنوعی", href: "/articles/prepare-company-data-for-ai/" },
        { label: "طراحی داشبورد مدیریتی برای شرکت‌های ساختمانی", href: "/articles/construction-management-dashboard/" },
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "تحقیق و توسعه", href: "/research-development/" },
        { label: "اتوماسیون هوشمند در صفحه‌ی محصولات", href: "/products/#automation" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)", href: "https://arxiv.org/abs/2005.11401" },
        { label: "OWASP, LLM01:2025 Prompt Injection", href: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
        { label: "NIST AI 600-1, Generative Artificial Intelligence Profile", href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "دستیار هوش مصنوعی سازمانی چیست؟",
          answer:
            "یک مدل زبانی که به مدارک خود شرکت متصل شده، فقط از روی همین مدارک پاسخ می‌دهد و منبع هر پاسخ را نشان می‌دهد. قواعد دسترسی تعیین می‌کنند هر فرد از کدام مدارک پاسخ دریافت کند.",
        },
        {
          question: "تفاوت دستیار سازمانی با ChatGPT چیست؟",
          answer:
            "ChatGPT بر اساس آنچه مدل در آموزش یاد گرفته پاسخ می‌دهد و مدارک دفتر شما را نمی‌شناسد. دستیار سازمانی پیش از نوشتن پاسخ، بخش‌های مرتبط مدارک شما را بازیابی می‌کند و به آن‌ها ارجاع می‌دهد.",
        },
        {
          question: "آیا دستیار هوش مصنوعی فارسی قابل‌ساخت است؟",
          answer:
            "بله، به شرط آنکه متن فارسی پیش از نمایه‌سازی یکسان‌سازی شود، مدارک اسکن‌شده بررسی شوند و دستیار با پرسش‌های فارسی کاربران واقعی آزمون شود. عملکرد مدل در انگلیسی معیار مناسبی برای عملکرد آن در فارسی نیست.",
        },
        {
          question: "آیا داده‌های ما از شرکت خارج می‌شوند؟",
          answer:
            "اگر مدل از طریق API یک ارائه‌دهنده فراخوانی شود، بخش‌هایی از مدارک همراه هر پرسش ارسال می‌شوند. اگر مدل روی سرور خود شرکت اجرا شود، داده‌ها خارج نمی‌شوند و هزینه‌ی میزبانی بیشتر است. این تصمیم پیش از نمایه‌سازی گرفته می‌شود.",
        },
        {
          question: "آیا باید مدل اختصاصی خود را آموزش دهیم؟",
          answer:
            "برای پاسخ‌دادن از روی مدارک معمولاً خیر. روش بازیابی با مدل‌های موجود کار می‌کند و مدارک در زمان پرسش به مدل داده می‌شوند. به‌روزکردن یک مدرک نیز به آموزش دوباره نیازی ندارد.",
        },
        {
          question: "آیا دستیار می‌تواند اقدام انجام دهد، مثلاً درخواست ثبت کند؟",
          answer:
            "امکان‌پذیر است، اما بهتر است کار با دستیاری شروع شود که فقط می‌خواند و ارجاع می‌دهد. تزریق دستور از طریق فایل‌ها یا صفحه‌های وب ریسک شناخته‌شده‌ای است و دستیاری که فقط می‌خواند، آسیب کمتری از آن می‌بیند.",
        },
        {
          question: "ساخت دستیار اختصاصی چه زمانی ارزش ندارد؟",
          answer:
            "زمانی که مدارک در سامانه‌ای هستند که محصولات آماده به آن متصل می‌شوند، پرسش‌ها به انگلیسی است و دسترسی‌ها برای همه یکسان است. در این حالت اشتراک یک محصول آماده کافی است و به ساخت اختصاصی نیازی ندارید.",
        },
      ],
    },
    en: {
      slug: "custom-ai-assistant-for-business",
      meta: {
        title: "Custom AI Assistant for Business: How It Works, ARTINEXT",
        description:
          "A custom AI assistant for business answers from your own documents and cites each source. Parts, retrieval, Persian text, permissions, testing and how the build runs.",
      },
      keywords: [
        "custom AI assistant for business",
        "enterprise AI assistant development",
        "custom AI assistant",
        "retrieval-augmented generation",
        "AI assistant for engineering firms",
      ],
      breadcrumb: "Custom AI assistant for business",
      category: "Data & AI",
      title: "A custom AI assistant for business answers from your files, with the source attached",
      leadOpinion:
        "A chat box is the simplest interface software has. That isn't a sign the assistant behind it was simple to build. It's a sign the hard part was absorbed before anyone typed a question.",
      publishedAt: "2026-09-27",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds data systems, automation and AI readiness work for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-is", label: "What an assistant is made of" },
        { id: "custom-or-licensed", label: "Custom or licensed" },
        { id: "first-job", label: "One job first" },
        { id: "retrieval", label: "Answering from documents" },
        { id: "sources", label: "A source for every answer" },
        { id: "persian", label: "Persian documents" },
        { id: "access", label: "Access and data location" },
        { id: "testing", label: "Testing with known answers" },
        { id: "build", label: "How the build runs" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A custom AI assistant for business is a language model connected to your own documents, with rules about what it may read, who may ask, and how it must show its sources. It answers from your specifications, standards, project records and past work, not from the internet, and it points to the file each answer came from. Enterprise AI assistant development is mostly that connection. The model is bought. The rest is built.\n\nA chat box is the simplest interface software has. That's exactly why it misleads people about the work behind it.\n\nOne plugin the studio built took a process from about two weeks, sometimes closer to a month, down to about 10 minutes. Its entire visible interface is one button. **A simple interface is compressed history, not a lack of depth.** An assistant is the same bargain: one text box on the front, and behind it every decision about which files count, which version is current, and what it must refuse to say.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-is",
          heading: "What a custom AI assistant is actually made of",
          paragraphs: [
            "Take the marketing away and there are four parts:",
          ],
          list: {
            items: [
              "**A language model**, bought through an API or run on your own server. It writes the answer. It doesn't know your office.",
              "**Your sources**: the specifications, standards, reports and records it's allowed to search.",
              "**Retrieval**: the step that finds the passages relevant to each question and hands them to the model.",
              "**Rules**: who may ask what, which folders each person can reach, and what the assistant does when the sources hold no answer.",
            ],
          },
          after: [
            "A chatbot answers from a script. A general assistant like ChatGPT answers from what its model learned in training. A custom assistant answers from your documents. An agent goes one step further and acts: it sends the email, files the request, edits the record.",
            "Most offices should start with the third and stay there for a while. An assistant that reads is a different risk from one that writes.",
          ],
        },
        {
          id: "custom-or-licensed",
          heading: "Custom, or a licensed assistant with your files attached",
          paragraphs: [
            "Microsoft 365 Copilot, ChatGPT Enterprise and similar products already search company files. If your documents sit in a system those products connect to, your staff ask in English, and everyone may see every file, a licence is probably the right answer. You don't need us, or anyone like us, for that.",
            "A custom build earns its cost when one of these is true:",
          ],
          list: {
            items: [
              "The knowledge sits where the products don't reach: Revit models, drawing sets, a project database, a document control system built in-house.",
              "Permissions differ by project, and the assistant has to respect them file by file.",
              "The questions and documents are in Persian, and answer quality has to be tested in Persian.",
              "Every answer must cite a specific clause or sheet, in a form the office can check.",
              "The assistant has to live inside a tool people already use, such as the office's own [management dashboard](/articles/construction-management-dashboard/).",
            ],
          },
          after: [
            "If none of those apply, buy. If two or more do, the licence will do most of the job and fall short on the part that matters.",
          ],
        },
        {
          id: "first-job",
          heading: "Give it one job before you give it every question",
          paragraphs: [
            "The assistant that answers anything about the company is the one that never ships. Pick a single job for a single team, where the right answer exists in writing and someone can recognise it.",
            "In an architecture or engineering office, the jobs that usually qualify are these:",
          ],
          list: {
            items: [
              "**Specification lookup**: which product, rating or tolerance the spec calls for, with the clause number.",
              "**Office standards**: the drafting manual, naming rules, template choices, the BIM execution plan.",
              "**Past-project search**: which earlier projects used a similar system, client or detail.",
              "**RFI and correspondence history**: what was asked, what was answered, and when.",
              "**Onboarding**: the questions every new hire asks in their first month.",
            ],
          },
          after: [
            "Collect real questions for that job from the people who ask them, and write the correct answer beside each one. That list becomes the test later on, and it has to exist before anything is built.",
          ],
        },
        {
          id: "retrieval",
          heading: "How it answers from your documents",
          image: retrieval.en,
          paragraphs: [
            "The technique behind almost every custom assistant is called retrieval-augmented generation, from a 2020 paper by Patrick Lewis and colleagues. The paper's starting point still describes the problem: a language model's ability to access and precisely manipulate knowledge is limited, and showing where its answers came from was an open problem.",
            "In practice it runs in four steps:",
          ],
          list: {
            ordered: true,
            items: [
              "Documents are split into passages: a clause, a paragraph, a table row.",
              "Each passage is indexed so it can be found by meaning as well as by exact words.",
              "For each question, the passages most likely to answer it are retrieved.",
              "The model writes the answer from those passages only, and cites them.",
            ],
          },
          after: [
            "The model is the step people talk about. Retrieval is the step that decides the answer. If the right clause isn't retrieved, the best model available writes a fluent answer from the wrong one.",
            "That makes the documents the real project. A specification scanned as images, three drafts of the same report in one folder, a standard replaced last year: all of it goes straight into answers. [Preparing company data for AI](/articles/prepare-company-data-for-ai/) covers that work in full. An assistant is where skipping it shows first.",
          ],
        },
        {
          id: "sources",
          heading: "Every answer shows its source, or it doesn't answer",
          paragraphs: [
            "NIST's Generative AI Profile names the core failure confabulation: the production of confidently stated but erroneous or false content. You can't train it fully out of a model. You can design around it.",
            "Ask a general chatbot about your office's door schedule and you'll still get an answer. Tidy, fluent, and about some other office.",
            "Three rules keep a custom assistant honest:",
          ],
          list: {
            items: [
              "**Cite every answer**: file name, revision, and the clause, page or sheet, linked so the reader can open it.",
              "**Say when the sources don't answer**: \"not found in the documents you can access\" is a correct response, and the assistant should be tested for it.",
              "**Stay inside the job**: questions outside its sources get pointed elsewhere, not improvised.",
            ],
          },
          after: [
            "Citations change how people use it. An answer with a source gets checked by opening one file. An answer without one gets either trusted blindly or ignored, and neither is what you paid for.",
          ],
        },
        {
          id: "persian",
          heading: "Persian documents need their own test",
          paragraphs: [
            "Most guides assume English. An office working in Persian runs into problems none of them mention.",
            "The same word can be stored several ways: Arabic and Persian forms of ye and kaf, a zero-width non-joiner in one file and a space in the next, Persian digits beside Latin ones, Jalali dates beside Gregorian. A person reads them as one thing. A search index can treat them as different words, and the passage that answers the question is never retrieved.",
            "Scanned Persian documents are harder. Text recognition has to get joined letters, dots and mixed-direction lines right, and it can return text that looks complete and isn't. Check a sample by eye before anything is indexed.",
            "NIST's profile lists performance disparities between languages as a generative AI risk. The practical consequence is plain: **normalise Persian text before indexing**, and test the assistant with Persian questions written by the people who will ask them. A model that shines in an English demo tells you little about how it handles a Persian specification.",
          ],
        },
        {
          id: "access",
          heading: "Who may ask, and what it may read",
          image: access.en,
          paragraphs: [
            "An assistant that can read every file will, sooner or later, quote a fee proposal to someone who shouldn't see it. Permissions have to be enforced at retrieval, not left to the model's judgment: a person asking a question should only ever get passages from documents they could already open.",
            "Two more decisions belong here:",
          ],
          list: {
            items: [
              "**Where the data goes.** A model called through an API sends passages to the provider with each question. A model run on your own server doesn't, and costs more to host. Read the provider's data terms before the first document is indexed, not after.",
              "**What it may do.** Start read-only. OWASP ranks prompt injection as the first risk for LLM applications, including the indirect kind, where instructions hidden in a file or web page change how the model behaves. An assistant that can only read and cite has far less to lose to that than one that can send, edit or delete.",
            ],
          },
          after: [
            "Log questions, answers and the passages used from the first day. That's how a wrong answer gets traced to the file that caused it.",
          ],
        },
        {
          id: "testing",
          heading: "Test it with questions you already know the answers to",
          paragraphs: [
            "Before anyone relies on it, run the question list from the first step. Mark each answer correct, wrong, or correctly declined, and check that each citation actually supports its answer. A wrong citation is a separate failure from a wrong answer.",
            "Keep testing after launch. Documents change, standards get replaced, and every new project adds folders nobody has indexed yet. Re-run the list whenever the sources change, and add every real question the assistant got wrong. Over time the list becomes the most accurate description of what the assistant can be trusted with.",
          ],
        },
        {
          id: "build",
          heading: "How enterprise AI assistant development usually runs",
          paragraphs: [
            "The build follows the same order as this article:",
          ],
          list: {
            ordered: true,
            items: [
              "**Scope**: one job, one team, and the question list with a correct answer for each.",
              "**Source inventory**: which files answer those questions, who owns them, which version is current.",
              "**Prototype on a slice**: one project's documents, enough to see whether retrieval finds the right passages.",
              "**Test**: the question list, including the questions that should be declined.",
              "**Pilot**: one team, real questions, everything logged.",
              "**Widen**: more sources or a second team, only once the first team trusts it.",
            ],
          },
          after: [
            "Cost follows the same drivers as any custom software: how many source systems there are, how messy the documents are, how fine-grained the permissions need to be, and whether it runs on a provider's API or your own hardware. A prototype on one slice is the cheapest way to find out which of those will be expensive before the full build is priced. It's the same staged approach our [research and development](/research-development/) work uses.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A custom AI assistant for business is a text box sitting on a great deal of settled detail: which files count, which revision is current, who may see what, and what it says when it doesn't know. That detail is the product. The simpler the box looks, the more of it someone had to decide first.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "How to prepare company data for AI", href: "/articles/prepare-company-data-for-ai/" },
        { label: "Management dashboards for construction companies", href: "/articles/construction-management-dashboard/" },
        { label: "Office automation", href: "/aec-workflow-automation/" },
        { label: "Research and development", href: "/research-development/" },
        { label: "Intelligent automation on the Products page", href: "/products/#automation" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)", href: "https://arxiv.org/abs/2005.11401" },
        { label: "OWASP, LLM01:2025 Prompt Injection", href: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
        { label: "NIST AI 600-1, Generative Artificial Intelligence Profile", href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is a custom AI assistant for business?",
          answer:
            "A language model connected to a company's own documents that answers only from those documents and shows the source of each answer. Access rules decide which documents each person's answers can come from.",
        },
        {
          question: "How is a custom AI assistant different from ChatGPT?",
          answer:
            "ChatGPT answers from what its model learned in training and doesn't know your office's documents. A custom assistant retrieves the relevant passages from your documents before it writes an answer, and cites them.",
        },
        {
          question: "Can a custom AI assistant work in Persian?",
          answer:
            "Yes, provided Persian text is normalised before indexing, scanned documents are checked, and the assistant is tested with Persian questions from real users. How a model performs in English is not a guide to how it performs in Persian.",
        },
        {
          question: "Does our data leave the company?",
          answer:
            "If the model is called through a provider's API, passages from your documents are sent with each question. If the model runs on your own server, the data stays in-house and hosting costs more. That decision comes before indexing.",
        },
        {
          question: "Do we need to train our own model?",
          answer:
            "For answering from documents, usually not. Retrieval works with existing models, and the documents are handed to the model at question time. Updating a document doesn't require retraining anything.",
        },
        {
          question: "Can the assistant take actions, like filing requests?",
          answer:
            "It can, but start with an assistant that only reads and cites. Prompt injection through files and web pages is a known risk, and a read-only assistant has much less to lose to it.",
        },
        {
          question: "When is a custom AI assistant not worth building?",
          answer:
            "When your documents sit in a system off-the-shelf products already connect to, questions are asked in English, and everyone has the same access. A licence covers that, and a custom build would be money spent on nothing.",
        },
      ],
    },
  },
};
