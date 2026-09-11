import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-model-checker";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("building-custom-revit-checkset", {
  fa: "دست‌ها روی صفحه‌کلید لپ‌تاپ در محیطی تاریک، برای ساخت چک‌ست کنترل‌کننده مدل رویت",
  en: "Hands on a laptop keyboard in a dark room, for building a Revit model checker checkset",
});
const triage = img("reviewing-model-checker-report", {
  fa: "علامت‌گذاری خطاهای پلان با ماژیک قرمز، پیش از اصلاح آن‌ها در مدل",
  en: "Marking up plan errors in red before they are fixed in the model",
});
const cadence = img("bim-audit-dashboard-analytics", {
  fa: "نمای نزدیک یک سرور با نور آبی، برای پیگیری دوره‌ای سلامت مدل",
  en: "A close-up of a server under blue light, for tracking model health over time",
});
const hire = img("deciding-revit-qaqc-outside-help", {
  fa: "طراحی پشت میز کار با نقشه‌ها، در حال تصمیم درباره‌ی کمک بیرونی برای کنترل کیفیت مدل",
  en: "A designer at a desk of drawings, deciding whether outside help for model QA/QC is worth it",
});

export const revitModelChecker: ArticlePage = {
  slug: "revit-model-checker",
  content: {
    fa: {
      slug: "revit-model-checker",
      meta: {
        title: "کنترل‌کننده مدل رویت؛ چک‌ست و کنترل کیفیت، آرتینکست",
        description:
          "کنترل‌کننده مدل رویت پارامترها و نام‌گذاری را با قواعد مکتوب مقایسه می‌کند. روش ساخت چک‌ست، اولویت‌بندی خطاها و زمان مناسب برای کمک بیرونی را بخوانید.",
      },
      keywords: [
        "کنترل‌کننده مدل رویت",
        "کنترل کیفیت مدل رویت",
        "Model Checker رویت",
        "ارزیابی مدل رویت",
        "نرم‌افزار کنترل کیفیت BIM",
      ],
      breadcrumb: "کنترل‌کننده مدل رویت",
      category: "BIM و Revit",
      title: "کنترل‌کننده مدل رویت؛ خودکارسازی کنترل کیفیت، نه جایگزین آن",
      leadOpinion:
        "گزارشی که کنترل‌کننده مدل ارائه می‌دهد، بخش ساده‌ی کار است؛ آنچه آن گزارش را قابل‌اعتماد می‌کند، چک‌ستی است که کمتر کسی حاضر به ساختن آن بوده است.",
      publishedAt: "2026-08-26",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که محتوای BIM، ابزارهای اختصاصی و اتوماسیون رویت را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-checks", label: "کنترل‌کننده مدل چه چیزی را بررسی می‌کند" },
        { id: "get-checkable", label: "آماده‌سازی مدل پیش از بررسی" },
        { id: "build-checksets", label: "ساخت چک‌ست" },
        { id: "first-checkset", label: "قواعد چک‌ست اول" },
        { id: "run-and-triage", label: "اجرا و اولویت‌بندی علامت‌ها" },
        { id: "beyond-native", label: "فراتر از کنترل‌کننده‌ی داخلی" },
        { id: "cadence", label: "بررسی دوره‌ای" },
        { id: "hire-or-build", label: "زمان مناسب برای کمک بیرونی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "کنترل‌کننده مدل رویت یک مقایسه را خودکار می‌کند: مقایسه‌ی مدل با یک قاعده‌ی مکتوب. آیا این در نرخ مقاومت در برابر آتش دارد؟ آیا این اتاق پارامتر بخش را دارد؟ آیا این دیوار تایپ واقعی دارد یا هنوز Basic Wall است؟ ابزار رایگان Model Checker از Autodesk همین کار را انجام می‌دهد و بسیاری از دفاتر لایه‌ی دیگری نیز روی آن اضافه می‌کنند. آنچه خودکار نمی‌شود، تشخیص این است که کدام قواعد در این پروژه اهمیت دارند و آیا المانی که علامت خورده، واقعاً اشتباه است یا نه. این بخش همچنان بر عهده‌ی یک نفر است.\n\nهمه گزارش را می‌خواهند، اما کمتر کسی تمایل دارد چک‌ستی را بسازد که گزارش را قابل‌اعتماد می‌کند. در یکی از پروژه‌های بنیان‌گذار آرتینکست، حدود ۱۴۸ ساعت، یعنی نزدیک به ۶٫۵ روز، فقط صرف تولید دیتاست شد، پیش از آنکه هیچ مدلی ساخته شود. **همه الگوریتم را می‌خواهند، اما مزیت واقعی در مرحله‌ی آماده‌سازی ساخته می‌شود.** نوشتن و تست قواعد در برابر حالت‌های استثنایی کندتر از زدن دکمه‌ی Run است و تنها بخشی است که تعیین می‌کند گزارش اصلاً معنایی دارد یا نه.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-checks",
          heading: "کنترل‌کننده مدل رویت دقیقاً چه چیزی را بررسی می‌کند",
          paragraphs: [
            "Model Checker رویت بیشتر به یک غلط‌یاب برای داده‌های داخلی مدل شبیه است تا یک ابزار کامل کنترل کیفیت. این ابزار داده‌هایی را بررسی می‌کند که رویت ذخیره کرده است: اینکه پارامترها پر شده‌اند، نام‌ها از الگوی مشخص پیروی می‌کنند و تایپ درست بارگذاری شده است. کیفیت خود طراحی در این بررسی قرار نمی‌گیرد.",
            "به همین دلیل یک چک‌ست خوب می‌تواند بلافاصله نشان دهد کدام اتاق‌ها پارامتر بخش ندارند یا کدام درها نرخ مقاومت در برابر آتش ندارند. اما نمی‌تواند تشخیص دهد دیواری با برچسب درست از نظر سازه‌ای اشتباه است یا انحراف از استاندارد، یک مشکل است یا یک استثنای موجه. **همین تفاوت تعیین می‌کند یک گزارش بدون خطا تا چه اندازه قابل‌اعتماد است.**",
          ],
        },
        {
          id: "get-checkable",
          heading: "پیش از بررسی، مدل را قابل‌بررسی کنید",
          paragraphs: [
            "اجرای چک‌ست روی مدلی که از قبل نامرتب است، فهرست بلندی از هشدارها تولید می‌کند که کسی فرصت رسیدگی به آن را ندارد. تایپ‌های تکراری، پارامترهای بی‌استفاده و فمیلی‌های دانلودی بررسی‌نشده، همان مواردی که در نوشته‌ی [بهینه‌سازی کتابخانه رویت](/articles/revit-library-optimization/) بررسی شده‌اند، گزارش را به‌جای موارد واقعی با موارد بی‌اهمیت پر می‌کنند.",
            "یک پاک‌سازی اولیه شامل Purge Unused، بررسی Object Styles و یکدست‌کردن نام‌گذاری، تفاوت میان گزارشی است که کسی آن را بررسی می‌کند و گزارشی که هرگز باز نمی‌شود.",
          ],
        },
        {
          id: "build-checksets",
          heading: "به‌جای اتکا به پیش‌فرض‌ها، چک‌ست بسازید",
          paragraphs: [
            "Model Checker Configurator از Autodesk امکان نوشتن قواعد اختصاصی را فراهم می‌کند و چک‌ست‌های نمونه، مانند مجموعه‌های Revit Best Practice و COBie، نقطه‌ی شروع مناسبی هستند. چک‌ست وارداتی به‌ندرت دقیقاً با نیاز دفتر شما مطابقت دارد؛ نقطه‌ی شروع است، نه پاسخ نهایی.",
            "ساخت چک‌ست یک مهارت است، نه چند کلیک ساده. سه روش کاری بیشترین تفاوت را ایجاد می‌کنند:",
          ],
          list: {
            items: [
              "**با یک مدل تست کوچک شروع کنید** که المان‌های آن را می‌شناسید، نه با پروژه‌ی اصلی. یک قاعده‌ی نادرست روی مدل واقعی، تعداد زیادی علامت اشتباه تولید می‌کند.",
              "**بدانید رویت داده را چگونه ذخیره می‌کند، نه چگونه نمایش می‌دهد.** طول‌ها فارغ از واحد پروژه به‌صورت فوت اعشاری ذخیره می‌شوند، در نتیجه مقایسه‌ی عددی‌ای که بر اساس میلی‌متر نوشته شود، بدون هیچ هشداری نادرست عمل می‌کند.",
              "**یک چک‌ست موجود را کپی و ویرایش کنید** و از صفر شروع نکنید؛ بیشتر قواعد مفید را پیش‌تر کسی نوشته است.",
            ],
          },
        },
        {
          id: "first-checkset",
          heading: "چک‌ست اول باید شامل چه قواعدی باشد",
          paragraphs: [
            "چک‌ست اول باید آن‌قدر کوتاه باشد که بتوان بر اساس آن اقدام کرد. پنج گروه قاعده، بیشتر موضوعاتی را پوشش می‌دهند که در دفاتر درباره‌ی آن‌ها اختلاف‌نظر وجود دارد:",
          ],
          list: {
            items: [
              "**نام‌گذاری**: ویوها، شیت‌ها، فمیلی‌ها و تایپ‌ها بر اساس الگوی دفتر.",
              "**پارامترهای ضروری**: فیلدهایی که اسکجوال‌ها و تگ‌ها به آن‌ها وابسته‌اند، پر و با قالب درست.",
              "**ویوتمپلیت‌ها**: هر ویوی کاری تمپلیت دارد و کسی آن را به‌صورت دستی تغییر نداده است.",
              "**پاکیزگی مدل**: فمیلی‌های In-Place، فایل‌های CAD واردشده و المان‌های بی‌استفاده، در حد نیاز واقعی پروژه.",
              "**داده‌های تحویل**: فیلدهایی که قالب تحویلی مانند COBie انتظار دارد، اگر پروژه به آن نیاز داشته باشد.",
            ],
          },
          after: [
            "هر قاعده‌ای فراتر از این موارد، به چک‌ست دوم تعلق دارد؛ چک‌ستی که پس از اجرای چک‌ست اول روی پروژه‌های واقعی و اطمینان از نتیجه‌ی آن نوشته می‌شود.",
          ],
        },
        {
          id: "run-and-triage",
          heading: "بررسی را اجرا کنید، سپس هر علامت را اولویت‌بندی کنید",
          image: triage.fa,
          paragraphs: [
            "هر علامت در گزارش یکی از سه حالت است: خطای واقعی، موردی که به دلیل نبود اطلاعات زمینه‌ای علامت خورده، یا موردی که به تصمیم یک نفر نیاز دارد. اگر همه‌ی موارد به ترتیب فهرست و بدون این دسته‌بندی اصلاح شوند، زمان صرف موارد نادرست می‌شود و موارد مهم دیرتر از همه پیدا می‌شوند.",
            "فهرست بلند علامت‌ها ممکن است علت‌های محدودی داشته باشد. اگر فمیلی‌ای با تایپ پارامتر نادرست بارگذاری شده باشد، همه‌ی نمونه‌های آن در گزارش علامت می‌خورند. پیش از هر اصلاحی، علامت‌ها را بر اساس فمیلی و قاعده گروه‌بندی کنید.",
            "پس از اصلاح، بررسی را دوباره اجرا کنید تا از رفع مشکل مطمئن شوید و قاعده را برای دفعات بعد نگه دارید. موردی که یک‌بار پیدا شده است، نباید دوباره با جست‌وجوی دستی پیدا شود.",
          ],
        },
        {
          id: "beyond-native",
          heading: "وقتی کنترل‌کننده‌ی داخلی کافی نیست",
          paragraphs: [
            "Model Checker فقط داده‌هایی را می‌خواند که رویت ذخیره کرده است. تشخیص تداخل میان رشته‌ها، بررسی‌های هندسی و انتقال پارامترها به صفحه‌گسترده برای بازبینی، خارج از محدوده‌ی آن قرار دارند. Navisworks و Solibri تداخل و هندسه را پوشش می‌دهند و اسکریپت‌های Dynamo و افزونه‌هایی مانند Ideate BIMLink، بازبینی پارامترها را.",
            "ترتیب معمول، ابتدا داده و سپس هندسه است. ابتدا نام‌گذاری و پارامترها را با کنترل‌کننده‌ی داخلی تأیید کنید و سپس تشخیص تداخل را اجرا کنید. گزارش تداخل روی مدلی که داده‌های پایه‌ی آن هنوز نادرست است، ارزش بررسی ندارد.",
            "اگر قواعد دفتر شما در Configurator قابل‌تعریف نباشند، کنترل‌کننده‌ی اختصاصی بر پایه‌ی Revit API قدم بعدی است؛ همان قواعد به‌صورت تست روی هر مدل اجرا می‌شوند و گزارش برای افرادی نوشته می‌شود که باید بر اساس آن اقدام کنند. کنترل کیفیت مدل یکی از جریان‌های کاری است که در نوشته‌ی [توسعه پلاگین رویت چقدر هزینه دارد](/articles/revit-plugin-development-cost/) بررسی شده است.",
          ],
        },
        {
          id: "cadence",
          heading: "بررسی را دوره‌ای کنید، نه یک پاک‌سازی یک‌باره",
          image: cadence.fa,
          paragraphs: [
            "یک بررسی یک‌باره تنها چند هفته فرصت ایجاد می‌کند. مدل‌ها زیر فشار زمان‌بندی، همانند کتابخانه‌ها، دوباره نامرتب می‌شوند. اجرای **فصلی** چک‌ست برای پروژه‌های فعال، پیش‌فرض مناسبی است.",
            "با اجرای منظم، نتیجه‌ی بررسی‌ها از یک فهرست به یک روند تبدیل می‌شود: کدام پروژه‌ها بهتر می‌شوند و کدام‌ها دوباره به همان مشکلات برمی‌گردند. این روند ارزش نمایش در [داشبوردی را دارد که تیم واقعاً از آن استفاده می‌کند](/aec-workflow-automation/)، نه در صفحه‌گسترده‌ای که یک‌بار ارسال و فراموش می‌شود.",
          ],
        },
        {
          id: "hire-or-build",
          heading: "کمک بیرونی چه زمانی واقعاً ارزش دارد",
          image: hire.fa,
          paragraphs: [
            "اگر یک پروژه دارید، چند قاعده‌ی محدود کافی است و ابزار رایگان Autodesk همان را پوشش می‌دهد، نیازی به استخدام کسی نیست، از جمله ما. به‌جای آن، یک بعدازظهر را صرف کار با Model Checker Configurator کنید.",
            "کمک بیرونی زمانی منطقی است که بررسی‌ها باید سال‌ها روی چند پروژه اجرا شوند، استاندارد دفتر هنوز مکتوب نشده است و چیزی برای تبدیل به قاعده وجود ندارد، یا نتیجه‌ی بررسی‌ها باید به یک فرآیند خودکار منتقل شود. این فاصله، میان ابزار رایگان و استانداردی که به‌طور خودکار کنترل می‌شود، همان جایی است که [توسعه پلاگین رویت](/revit-plugin-development/) کاربرد پیدا می‌کند.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "کنترل‌کننده مدل رویت کار را سریع‌تر می‌کند، اما قضاوت را حذف نمی‌کند. گزارش آن فقط به اندازه‌ی چک‌ستی قابل‌اعتماد است که پشت آن ساخته شده و ساخت همین چک‌ست، بخشی است که کمتر کسی مایل است اول انجام دهد.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost/" },
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "ابزارهای دیجیتال در صفحه‌ی محصولات", href: "/products/#digital-tools" },
        { label: "درباره ما", href: "/about/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk, Model Checker for Revit", href: "https://interoperability.autodesk.com/modelchecker.php" },
        { label: "Autodesk, Model Checker Configurator", href: "https://interoperability.autodesk.com/modelcheckerconfigurator.php" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا Model Checker از Autodesk رایگان است؟",
          answer:
            "بله. ابزارهای Interoperability برای رویت که Model Checker و Configurator را شامل می‌شوند، برای کاربرانی که لایسنس رویت دارند رایگان هستند. نسخه‌های فعلی آن، Revit 2023 تا Revit 2026 را پوشش می‌دهند.",
        },
        {
          question: "تفاوت Model Checker و Model Checker Configurator چیست؟",
          answer:
            "Model Checker ابزاری است که چک‌ست را روی مدل اجرا می‌کند و گزارش تولید می‌کند. Configurator ابزار جداگانه‌ای است که با آن قواعد اختصاصی خود را می‌سازید، به‌جای اینکه فقط از چک‌ست‌های آماده استفاده کنید.",
        },
        {
          question: "آیا کنترل‌کننده مدل رویت جایگزین تشخیص تداخل می‌شود؟",
          answer:
            "خیر. Model Checker داده‌ها و پارامترهای ذخیره‌شده در رویت را بررسی می‌کند، نه هندسه‌ی فیزیکی میان رشته‌های مختلف. تشخیص تداخل با ابزارهایی مانند Navisworks یا Solibri انجام می‌شود و معمولاً پس از پاک‌سازی داده‌های مدل اجرا می‌شود.",
        },
        {
          question: "آیا کنترل‌کننده مدل، انطباق با ضوابط ساختمانی را بررسی می‌کند؟",
          answer:
            "نه به‌طور مستقیم. چک‌ست خوب می‌تواند تأیید کند پارامتری که بررسی ضوابط به آن وابسته است وجود دارد و مقدار گرفته است، اما قضاوت درباره‌ی انطباق همچنان به بازبینی یک متخصص نیاز دارد.",
        },
        {
          question: "ساخت چک‌ست اختصاصی را از کجا شروع کنیم؟",
          answer:
            "از یک چک‌ست موجود شروع کنید و آن را روی یک مدل تست کوچک، نه پروژه‌ی اصلی، ویرایش کنید. دانستن اینکه رویت داده را چگونه ذخیره می‌کند، مانند ذخیره‌ی طول‌ها به‌صورت فوت اعشاری، از بیشتر خطاهای رایج در نوشتن قاعده جلوگیری می‌کند.",
        },
        {
          question: "آیا برای راه‌اندازی کنترل کیفیت مدل باید کسی را استخدام کنیم؟",
          answer:
            "همیشه خیر. اگر یک پروژه دارید و چند قاعده‌ی محدود کافی است، ابتدا ابزار رایگان Autodesk را امتحان کنید. کمک بیرونی زمانی ارزش دارد که بررسی‌ها باید سال‌ها روی چند پروژه اجرا شوند یا نتیجه باید به یک داشبورد واقعی منتقل شود.",
        },
        {
          question: "آیا هر علامت در گزارش یعنی مدل ایراد دارد؟",
          answer:
            "خیر. هر علامت یکی از سه حالت است: خطای واقعی، موردی که به دلیل نبود اطلاعات زمینه‌ای به‌اشتباه علامت خورده یا استثنای موجهی که به تصمیم یک نفر نیاز دارد. دسته‌بندی این سه حالت پیش از هر اصلاحی، در زمان صرفه‌جویی می‌کند.",
        },
        {
          question: "مدل رویت را هر چند وقت یک‌بار باید بررسی کرد؟",
          answer:
            "اجرای فصلی برای بیشتر پروژه‌های فعال پیش‌فرض مناسبی است. اگر منتظر بمانید تا مشکل در یک اسکجوال نادرست دیده شود، آن را دیرتر از زمان لازم پیدا می‌کنید.",
        },
      ],
    },
    en: {
      slug: "revit-model-checker",
      meta: {
        title: "Revit Model Checker: It Automates QA/QC, Not Replaces It",
        description:
          "A Revit model checker measures parameters and naming against written rules. How to build a checkset, triage every flag, and when outside help is worth it.",
      },
      keywords: [
        "revit model checker",
        "QAQC for Revit",
        "revit model quality control tool",
        "revit model audit tool",
        "BIM quality control software",
      ],
      breadcrumb: "Revit model checker",
      category: "BIM & Revit",
      title: "A Revit model checker automates QA/QC. It doesn't replace it.",
      leadOpinion:
        "The report a model checker hands you is the easy part. The checkset that made that report worth trusting is the part nobody wanted to build.",
      publishedAt: "2026-08-26",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds BIM content, custom tools and Revit automation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-checks", label: "What a model checker checks" },
        { id: "get-checkable", label: "Make the model checkable" },
        { id: "build-checksets", label: "Build a checkset" },
        { id: "first-checkset", label: "What goes in a first checkset" },
        { id: "run-and-triage", label: "Run it, then triage" },
        { id: "beyond-native", label: "Beyond the native checker" },
        { id: "cadence", label: "Make it a cadence" },
        { id: "hire-or-build", label: "When outside help is worth it" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A Revit model checker automates one comparison: a model against a written rule. Does this door have a fire rating? Does this room carry a department? Is this wall a real type, or still Basic Wall? Autodesk's free Model Checker does this, and so does the layer many offices add on top of it. What it does not automate is deciding which rules matter on this project, or whether a flagged element is actually wrong. That part stays a person's job.\n\nEveryone wants the report. Nobody wants to build the checkset that makes it worth reading. One of the founder's projects spent about 148 hours, roughly six and a half days, on nothing but generating a dataset before any model was built. **Everyone wants the algorithm. Nobody wants the preparation, and the preparation is where the advantage gets built.** Writing and testing rules against edge cases is slower than clicking Run, and it is the only part that decides whether the report means anything.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-checks",
          heading: "What a Revit model checker actually checks",
          paragraphs: [
            "Revit's Model Checker is closer to a spellchecker for the model's bookkeeping than a complete quality-control tool. It reads what Revit has stored: whether parameters are filled in, whether names follow a pattern, whether the right type is loaded. It does not judge the design.",
            "So a good checkset can tell you at once which rooms have no department or which doors have no fire rating. It cannot tell you a wall is structurally wrong if its label is right, and it cannot decide whether a deviation from the standard is a problem or a justified exception. **That distinction is how much a clean report is actually worth.**",
          ],
        },
        {
          id: "get-checkable",
          heading: "Make the model checkable before you check it",
          paragraphs: [
            "Running a checkset on a model that is already a mess produces a long list of warnings nobody has time to act on. Duplicate types, orphaned parameters and downloaded families nobody reviewed, the same clutter covered in [Revit library optimization](/articles/revit-library-optimization/), fill the report with noise rather than findings.",
            "A basic clean-up first, meaning Purge Unused, an object-styles pass and consistent naming, is the difference between a report someone works through and one nobody opens.",
          ],
        },
        {
          id: "build-checksets",
          heading: "Build a checkset instead of trusting the defaults",
          paragraphs: [
            "Autodesk's Model Checker Configurator lets you write your own rules, and sample checksets such as the Revit best-practice and COBie sets are a place to start. An imported checkset rarely matches what your office actually needs. It is a starting point, not the answer.",
            "Building one is a skill, not a handful of clicks. Three habits make the biggest difference:",
          ],
          list: {
            items: [
              "**Start on a small test model** with known elements, not the live project. One wrong rule against a real model produces a flood of false flags.",
              "**Know how Revit stores data, not how it displays it.** Lengths are stored in decimal feet whatever the project units, so a numeric comparison written in millimetres fails without warning.",
              "**Copy and edit an existing checkset** rather than starting from a blank one. Most useful rules have already been written by someone.",
            ],
          },
        },
        {
          id: "first-checkset",
          heading: "What to put in a first checkset",
          paragraphs: [
            "A first checkset should be short enough to act on. Five groups of rules cover most of what offices actually argue about:",
          ],
          list: {
            items: [
              "**Naming**: views, sheets, families and types against the office pattern.",
              "**Required parameters**: the fields schedules and tags depend on, filled in and in the right format.",
              "**View templates**: every working view has one, and nobody has overridden it by hand.",
              "**Model hygiene**: in-place families, imported CAD and unused elements kept to what the project actually needs.",
              "**Handover data**: the fields a delivery format such as COBie expects, if the project needs one.",
            ],
          },
          after: [
            "Anything beyond these belongs in a second checkset, written once the first one has been run on real projects and earned some trust.",
          ],
        },
        {
          id: "run-and-triage",
          heading: "Run it, then triage every flag",
          image: triage.en,
          paragraphs: [
            "Every flag is one of three things: a real violation, a false positive because the checker has no context, or a judgment call that needs a person. Fixing everything in the order the report lists it, without that sort, spends time on the wrong items and finds the ones that matter last.",
            "A long list of flags can come from very few causes. One family loaded with the wrong parameter type flags every instance of it. Group the flags by family and by rule before fixing anything.",
            "Once something is fixed, rerun the check to confirm it, and keep the rule. Nothing found once should have to be found twice.",
          ],
        },
        {
          id: "beyond-native",
          heading: "When the native checker isn't enough",
          paragraphs: [
            "Model Checker only reads what Revit has stored. Clash detection between disciplines, geometry-level checks and exporting parameters to a spreadsheet for review all sit outside it. Navisworks and Solibri cover clashes and geometry; Dynamo scripts and add-ins such as Ideate BIMLink cover parameter review.",
            "The usual order is data first, geometry second. Confirm naming and parameters with the native checker, then run clash detection. A clash report on a model whose basic data is still wrong is not worth reading yet.",
            "When an office's rules cannot be expressed in the Configurator at all, a custom checker built on the Revit API is the next step: the same rules, run as a test on every model, with a report written for the people who have to act on it. Model checks are one of the workflows covered in [how much Revit plugin development costs](/articles/revit-plugin-development-cost/).",
          ],
        },
        {
          id: "cadence",
          heading: "Make it a cadence, not a one-off sweep",
          image: cadence.en,
          paragraphs: [
            "A one-off check buys a few weeks. Models drift back under deadline pressure, the same way libraries do. A **quarterly** rerun is a reasonable default for active projects.",
            "Run regularly, the results stop being a list and become a trend: which projects are improving and which keep returning to the same problems. That trend belongs on [a dashboard the team actually opens](/aec-workflow-automation/), not in a spreadsheet emailed once and forgotten.",
          ],
        },
        {
          id: "hire-or-build",
          heading: "When outside help is actually worth it",
          image: hire.en,
          paragraphs: [
            "If it is one project, a handful of rules cover it and Autodesk's free tool already does the job, nobody needs to be hired, including us. Spend an afternoon in the Model Checker Configurator instead.",
            "Outside help makes sense when the checks must run across several projects for years, when the standard itself is not written down yet so there is nothing to encode, or when the results need to feed an automated flow. That gap, between a free tool and a standard that checks itself on every model, is where [custom Revit plugin development](/revit-plugin-development/) earns its place.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A Revit model checker makes the work faster. It does not make the judgment optional. Its report is only as trustworthy as the checkset behind it, and building that checkset is the part nobody wants to do first.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost/" },
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Office automation", href: "/aec-workflow-automation/" },
        { label: "Digital tools on the Products page", href: "/products/#digital-tools" },
        { label: "About the studio", href: "/about/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk, Model Checker for Revit", href: "https://interoperability.autodesk.com/modelchecker.php" },
        { label: "Autodesk, Model Checker Configurator", href: "https://interoperability.autodesk.com/modelcheckerconfigurator.php" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Is Autodesk's Model Checker free?",
          answer:
            "Yes. Autodesk's Interoperability Tools for Revit, which include Model Checker and the Configurator, are free for licensed Revit users. Current releases cover Revit 2023 to 2026.",
        },
        {
          question: "What's the difference between Model Checker and Model Checker Configurator?",
          answer:
            "Model Checker runs a checkset against your model and produces the report. The Configurator is a separate tool for building your own rules instead of relying only on pre-built checksets.",
        },
        {
          question: "Does a Revit model checker replace clash detection?",
          answer:
            "No. Model Checker evaluates data and parameters stored inside Revit, not physical geometry across disciplines. Clash detection is done in tools like Navisworks or Solibri, usually after the model's own data is clean.",
        },
        {
          question: "Does a Revit model checker verify building code compliance?",
          answer:
            "Not directly. A good checkset can confirm that the parameter a code check depends on exists and is filled in, but judging actual compliance still needs a qualified person.",
        },
        {
          question: "Where do we start building a custom checkset?",
          answer:
            "Start from an existing checkset and edit it against a small test model, not the live project. Knowing how Revit stores data, such as lengths in decimal feet, prevents most of the common mistakes in writing a rule.",
        },
        {
          question: "Do we need to hire someone to set up Revit QA/QC?",
          answer:
            "Not always. If it is one project and a handful of rules cover it, try Autodesk's free tool first. Outside help is worth it when checks must run across several projects for years, or when the output needs to become a real dashboard.",
        },
        {
          question: "Does every flag in a model checker report mean the model is broken?",
          answer:
            "No. Every flag is a real violation, a false positive from missing context, or a justified exception that needs a person's call. Sorting those three before fixing anything saves time.",
        },
        {
          question: "How often should a Revit model be checked?",
          answer:
            "Quarterly is a reasonable default for active projects. Waiting until a problem shows up as a broken schedule means finding it later than you needed to.",
        },
      ],
    },
  },
};
