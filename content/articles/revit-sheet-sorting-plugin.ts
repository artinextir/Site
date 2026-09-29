import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-sheet-sorting-plugin";
const BROWSER_ORG =
  "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Customize/files/GUID-FC5A8E35-BAC5-45AD-B6C2-B6B551417CF9.htm";
const SHEET_LIST = "https://help.autodesk.com/cloudhelp/2014/ENU/Revit/files/GUID-63DB42D5-BA7B-4AC5-8C61-D3ED83C4BA0D.htm";
const NUMBERING = "https://novedge.com/blogs/design-news/revit-tip-revit-sheet-numbering-and-naming-standard";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-sheet-sorting-plugin", {
  fa: "مجموعه‌ای از شیت‌های نقشه که با گیره به هم بسته شده‌اند، برای مرتب‌سازی شیت در رویت",
  en: "A set of drawing sheets held together with binder clips, for a Revit sheet sorting plugin",
});
const binders = img("sheet-numbering-order", {
  fa: "زونکن‌های پر از برگه روی هم، مانند مجموعه نقشه‌ای که ترتیب آن به شماره‌ی شیت‌ها وابسته است",
  en: "Stacked binders full of paper, like a drawing set whose order depends on its sheet numbers",
});

export const revitSheetSortingPlugin: ArticlePage = {
  slug: "revit-sheet-sorting-plugin",
  content: {
    fa: {
      slug: "revit-sheet-sorting-plugin",
      meta: {
        title: "مرتب‌سازی شیت در رویت با پلاگین، آرتینکست",
        description:
          "مرتب‌سازی شیت در رویت: Browser Organization، پارامتر Sheet Order، دلیل جابه‌جایی ترتیب شیت‌ها، آنچه پلاگین مرتب‌سازی انجام می‌دهد و قفل شماره‌ها پس از ارسال نقشه.",
      },
      keywords: [
        "مرتب‌سازی شیت در رویت",
        "پلاگین مرتب‌سازی شیت رویت",
        "شماره‌گذاری شیت‌ها در رویت",
        "ترتیب لیست شیت‌ها در رویت",
        "خودکارسازی مرتب‌سازی شیت در رویت",
      ],
      breadcrumb: "مرتب‌سازی شیت در رویت",
      category: "BIM و Revit",
      title: "مرتب‌سازی شیت در رویت، از قاعده‌ی شماره‌گذاری تا مجموعه‌ی ارسال‌شده",
      leadOpinion:
        "منطق مرتب‌سازی شیت‌ها ساده است. ترتیب مجموعه نقشه معمولاً به دلیل یک صفر جاافتاده، یک شماره‌ی تکراری یا شیتی به هم می‌خورد که پس از ارسال دوباره شماره‌گذاری شده است.",
      publishedAt: "2026-09-29",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که پلاگین‌های اختصاصی رویت و اسکریپت‌های Dynamo را برای خودکارسازی مستندسازی و مدیریت شیت‌ها در دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "native", label: "امکانات خود رویت" },
        { id: "numbers", label: "شماره‌ی شیت متن است" },
        { id: "plugin", label: "آنچه پلاگین انجام می‌دهد" },
        { id: "issued", label: "پس از ارسال نقشه" },
        { id: "choice", label: "افزونه‌ی آماده یا اختصاصی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "مرتب‌سازی شیت در رویت با پلاگین یعنی شماره‌گذاری و ترتیب همه‌ی شیت‌های یک مجموعه بر اساس قواعدی که دفتر تعیین می‌کند، شامل پیشوند هر رشته، جداکننده، شماره‌ی شروع و تعداد ارقام، به‌گونه‌ای که Project Browser، لیست شیت‌ها و مجموعه‌ی ارسال‌شده یک ترتیب واحد داشته باشند. رویت ابزارهای لازم را دارد، اما هر بار که شیتی اضافه یا جابه‌جا می‌شود، این هماهنگی باید دستی تکرار شود.\n\nمنطق مرتب‌سازی پیچیده نیست و خطا نیز معمولاً از همین منطق ایجاد نمی‌شود.\n\nبنیان‌گذار آرتینکست در دبیرستان در آزمونی شرکت کرد که آزمون رفع خطا بود: کد معیوب، پیدا کردن خطاها، از ۲۰ نمره. بالاترین نمره‌ی کلاس ۱۸ بود و نمره‌ی او ۲۳٫۵ از ۲۴. تنها نمره‌ای که از دست رفت، به دلیل یک غلط املایی بود. **خطرناک‌ترین خطاها پیچیده‌ترین آن‌ها نیستند.** در مجموعه نقشه نیز ترتیب معمولاً به دلیل یک صفر جاافتاده، یک شماره‌ی تکراری یا شیتی به هم می‌خورد که پس از ارسال دوباره شماره‌گذاری شده است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "native",
          heading: "رویت بدون پلاگین چگونه شیت‌ها را مرتب می‌کند",
          paragraphs: [
            "رویت ترتیب شیت‌ها را در دو محل نگه می‌دارد. محل اول Project Browser است که به‌صورت پیش‌فرض شیت‌ها را بر اساس شماره و نام نمایش می‌دهد. با Browser Organization می‌توان شیت‌ها را تا شش سطح گروه‌بندی کرد، در هر گروه بر اساس یک ویژگی به‌صورت صعودی یا نزولی مرتب کرد و تا سه سطح فیلتر اعمال کرد.",
            "محل دوم لیست شیت‌ها (Sheet List) است، یعنی اسکجوالی که معمولاً روی شیت جلد قرار می‌گیرد. راه‌حل مستند Autodesk برای ترتیب دلخواه در این لیست، یک پارامتر پروژه به نام Sheet Order است: برای هر شیت یک عدد وارد می‌شود، لیست بر اساس آن مرتب می‌شود و ستون آن پنهان می‌شود. در نتیجه دو ترتیب وجود دارد که هرکدام به‌صورت دستی نگهداری می‌شوند.",
          ],
        },
        {
          id: "numbers",
          heading: "چرا ترتیب شیت‌ها به هم می‌خورد",
          image: binders.fa,
          paragraphs: [
            "شماره‌ی شیت در رویت متن است و مقدار عددی ندارد. اگر یک دفتر در یک پروژه A-101 و در ادامه A-1001 بنویسد، ترتیب نمایش با ترتیب موردنظر طراح یکسان نخواهد بود. راه‌حل رایج این است که همه‌ی شماره‌ها تعداد ارقام یکسانی داشته باشند و بخش عددی از ابتدا با صفر پر شود، مثلاً ۰۰۱ تا ۹۹۹.",
            "محدودیت دوم این است که رویت شماره‌ی تکراری برای شیت‌ها نمی‌پذیرد. برای جابه‌جا کردن دو شیت، ابتدا یکی از آن‌ها باید یک شماره‌ی موقت بگیرد، سپس دیگری شماره‌ی آن را بگیرد و در پایان شیت اول به شماره‌ی نهایی برسد. جابه‌جایی دو شیت به‌صورت دستی به سه تغییر نام و یک شماره نیاز دارد که قرار نبود هیچ‌وقت استفاده شود.",
          ],
        },
        {
          id: "plugin",
          heading: "پلاگین مرتب‌سازی شیت رویت چه کارهایی انجام می‌دهد",
          paragraphs: [
            "پلاگین مناسب، قواعد دفتر را یک‌بار دریافت می‌کند و در هر اجرا این کارها را انجام می‌دهد:",
          ],
          list: {
            items: [
              "**قاعده‌ی شماره‌گذاری**: پیشوند هر رشته، جداکننده، شماره‌ی شروع و تعداد ارقام، که برای همه‌ی شیت‌ها یکسان اعمال می‌شود.",
              "**پیش‌نمایش پیش از اعمال**: فهرست شماره‌های فعلی و جدید در کنار هم، پیش از آنکه تغییری در مدل ثبت شود.",
              "**جابه‌جایی بدون تداخل**: شماره‌های موقت درون یک تراکنش مدیریت می‌شوند و کل عملیات با یک Undo قابل‌بازگشت است.",
              "**هماهنگی لیست و مرورگر**: پارامتر Sheet Order هم‌زمان با شماره‌ها به‌روز می‌شود تا لیست شیت‌ها و Project Browser یک ترتیب داشته باشند.",
              "**گزارش موارد پردازش‌نشده**: شیت‌هایی که کاربر دیگری در کار اشتراکی در اختیار دارد یا شماره‌ی آن‌ها قفل شده است، همراه با دلیل.",
            ],
          },
          after: [
            "افزونه‌ی رایگان Sheet Sorter در Autodesk App Store نمونه‌ای از همین الگوست و شیت‌ها را بر اساس پیشوند، جداکننده و شماره‌ی شروع به‌صورت دسته‌ای شماره‌گذاری می‌کند.",
          ],
        },
        {
          id: "issued",
          heading: "شماره‌ی شیت پس از ارسال نقشه",
          paragraphs: [
            "شماره‌ی هر شیت پس از نخستین ارسال به خارج از دفتر، در مدارک دیگری نیز ثبت می‌شود: فرم‌های ارسال، صورت‌جلسه‌ها، استعلام‌های فنی و نامه‌ها. رویت ارجاع‌های داخلی مانند شماره‌ی شیت در سربرگ مقطع‌ها را خودکار به‌روز می‌کند، اما هیچ‌کدام از این مدارک بیرونی به‌روز نمی‌شوند.",
            "به همین دلیل، استانداردهای شماره‌گذاری توصیه می‌کنند شماره‌ها پس از نخستین ارسال قفل شوند. پلاگین مرتب‌سازی باید یک پارامتر وضعیت ارسال را بخواند و شیت‌های ارسال‌شده را بدون تأیید صریح، دوباره شماره‌گذاری نکند. شیت جدیدی که میان دو شیت ارسال‌شده قرار می‌گیرد، یک پسوند می‌گیرد و شماره‌ی شیت‌های بعدی تغییر نمی‌کند.",
          ],
        },
        {
          id: "choice",
          heading: "افزونه‌ی آماده، اسکریپت Dynamo یا پلاگین اختصاصی",
          paragraphs: [
            "اگر دفتر یک الگوی شماره‌گذاری ساده دارد و شیت‌ها به‌ندرت جابه‌جا می‌شوند، Browser Organization، پارامتر Sheet Order و یکی از افزونه‌های رایگان کافی است. برای این کار به ما یا شرکتی مانند ما نیازی ندارید. برای آزمون قواعد روی یک پروژه، [اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) گزینه‌ی مناسبی است.",
            "پلاگین اختصاصی زمانی ارزش دارد که قواعد شماره‌گذاری به داده‌های دیگری وابسته باشند: فهرست ارسال نقشه‌ها، پروژه‌های چندساختمانی، نام‌های فارسی شیت‌ها یا [خروجی لیست شیت‌ها به Excel](/articles/revit-schedule-to-excel-export/) برای دفتر مدیریت مدارک. [برنامه‌نویسی Revit API](/articles/revit-api-development/) نشان می‌دهد چنین ابزاری چگونه ساخته می‌شود و این کار در قالب خدمات [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "مرتب‌سازی شیت در رویت به یک قاعده‌ی شماره‌گذاری مکتوب و یک ترتیب واحد برای Project Browser و لیست شیت‌ها نیاز دارد. آنچه مجموعه نقشه را به هم می‌ریزد، جزئیات کوچک است: ارقامی که با صفر پر نشده‌اند، شماره‌هایی که باید موقتاً جابه‌جا شوند و شیت‌هایی که پس از ارسال تغییر شماره داده‌اند. پلاگینی که این موارد را کنترل و گزارش کند، مجموعه را مرتب نگه می‌دارد. اولین چیزی که می‌خواهید تغییر کند چیست؟ [از جریان کاری‌تان بگویید](/contact/).",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "برنامه‌نویسی Revit API", href: "/articles/revit-api-development/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "خروجی Excel از اسکجوال رویت", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk, About Browser Organization (Revit 2026)", href: BROWSER_ORG },
        { label: "Autodesk, Organizing a Sheet List", href: SHEET_LIST },
        { label: "Novedge, Revit Sheet Numbering and Naming Standard", href: NUMBERING },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "چگونه شیت‌ها را در رویت مرتب کنیم؟",
          answer:
            "در Project Browser از مسیر View، User Interface، Browser Organization و زبانه‌ی Sheets، معیار گروه‌بندی و مرتب‌سازی را تعیین کنید. برای لیست شیت‌ها، یک پارامتر پروژه به نام Sheet Order اضافه کنید و لیست را بر اساس آن مرتب کنید.",
        },
        {
          question: "چرا ترتیب شیت‌ها در رویت درست نمایش داده نمی‌شود؟",
          answer:
            "شماره‌ی شیت متن است. اگر بخش عددی شماره‌ها تعداد ارقام یکسانی نداشته باشد، ترتیب نمایش با ترتیب موردنظر متفاوت می‌شود. پرکردن ارقام با صفر، مثلاً ۰۰۱، این مشکل را برطرف می‌کند.",
        },
        {
          question: "چرا نمی‌توان شماره‌ی دو شیت را مستقیماً جابه‌جا کرد؟",
          answer:
            "رویت شماره‌ی تکراری برای شیت‌ها نمی‌پذیرد. یکی از دو شیت باید ابتدا یک شماره‌ی موقت بگیرد. پلاگین مرتب‌سازی این کار را درون یک تراکنش انجام می‌دهد.",
        },
        {
          question: "آیا Browser Organization ترتیب لیست شیت‌ها را هم تغییر می‌دهد؟",
          answer:
            "خیر. Browser Organization فقط Project Browser را مرتب می‌کند و لیست شیت‌ها مرتب‌سازی جداگانه‌ی خود را دارد. پلاگین می‌تواند هر دو را از یک پارامتر مشترک به‌روز کند.",
        },
        {
          question: "آیا پس از ارسال نقشه می‌توان شیت‌ها را دوباره شماره‌گذاری کرد؟",
          answer:
            "رویت ارجاع‌های داخلی را به‌روز می‌کند، اما فرم‌های ارسال، نامه‌ها و استعلام‌ها به‌روز نمی‌شوند. بهتر است شماره‌ها پس از نخستین ارسال قفل شوند و شیت‌های جدید پسوند بگیرند.",
        },
        {
          question: "چه زمانی به پلاگین اختصاصی نیاز ندارید؟",
          answer:
            "زمانی که الگوی شماره‌گذاری ساده است و شیت‌ها به‌ندرت جابه‌جا می‌شوند. در این حالت امکانات خود رویت و یک افزونه‌ی رایگان از Autodesk App Store کافی است.",
        },
      ],
    },
    en: {
      slug: "revit-sheet-sorting-plugin",
      meta: {
        title: "Revit Sheet Sorting Plugin: Numbering and Order, ARTINEXT",
        description:
          "What a Revit sheet sorting plugin adds to Browser Organization and Sheet Order: padded numbers, conflict-free swaps, one shared order, and locked issued sheets.",
      },
      keywords: [
        "revit sheet sorting plugin",
        "revit sheet sorting automation",
        "renumber sheets in revit",
        "revit sheet list order",
        "revit sheet numbering",
      ],
      breadcrumb: "Revit sheet sorting plugin",
      category: "BIM & Revit",
      title: "A Revit sheet sorting plugin: from the numbering rule to the issued set",
      leadOpinion:
        "The logic of sorting sheets is simple. What breaks a drawing set's order is a missing zero, a duplicate number, or a sheet renumbered after it was issued.",
      publishedAt: "2026-09-29",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds custom Revit plugins and Dynamo scripts to automate documentation and sheet management for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "native", label: "What Revit does natively" },
        { id: "numbers", label: "Sheet numbers are text" },
        { id: "plugin", label: "What the plugin does" },
        { id: "issued", label: "After the first issue" },
        { id: "choice", label: "Off the shelf or custom" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A Revit sheet sorting plugin numbers and orders every sheet in a set by rules the office sets, discipline prefix, separator, starting number and digit count, so the Project Browser, the sheet list and the issued set all agree. Revit has the tools to do this by hand. It just has to be done again every time a sheet is added or moved.\n\nThe sorting logic isn't hard. It's also rarely what goes wrong.\n\nIn high school, the founder sat a final that was a debugging test: broken code, find the mistakes, graded out of 20. The class high was 18. The founder's score was 23.5 out of a possible 24. The one deduction was a spelling mistake. **The most dangerous bugs aren't the complicated ones.** In a drawing set they're a missing zero, a duplicate number, a sheet renumbered after it went out.",
      heroImage: hero.en,
      sections: [
        {
          id: "native",
          heading: "How Revit sorts sheets without a plugin",
          paragraphs: [
            "Revit keeps sheet order in two places. The first is the Project Browser, which lists sheets by number and name by default. Browser Organization can group sheets up to six levels deep, sort within each group by a property in ascending or descending order, and filter up to three levels deep.",
            "The second is the sheet list, the schedule that usually sits on the cover sheet. Autodesk's documented way to force a custom order there is a project parameter called Sheet Order: type a number against each sheet, sort the list by it, hide the column. That leaves two orders, each kept up by hand.",
          ],
        },
        {
          id: "numbers",
          heading: "Why sheets end up in the wrong order",
          image: binders.en,
          paragraphs: [
            "A sheet number in Revit is text, not a number. If a project has A-101 and later gains A-1001, the order on screen won't match the order the designer meant. The usual fix is to give every number the same digit count and pad the numeric part with zeros from the start, 001 to 999.",
            "The second constraint is that Revit won't accept a duplicate sheet number. To swap two sheets, one has to take a temporary number, the other takes its place, then the first moves to its final number. Swapping two sheets by hand takes three renames and one number nobody meant to use.",
          ],
        },
        {
          id: "plugin",
          heading: "What a Revit sheet sorting plugin actually does",
          paragraphs: [
            "A good one takes the office's rules once, and on every run it handles:",
          ],
          list: {
            items: [
              "**The numbering rule**: discipline prefix, separator, starting number and digit count, applied the same way to every sheet.",
              "**A preview before committing**: current and new numbers side by side, before anything changes in the model.",
              "**Swaps without conflicts**: temporary numbers handled inside one transaction, so the whole run undoes in one step.",
              "**One order everywhere**: the Sheet Order parameter updated with the numbers, so the sheet list and the Project Browser agree.",
              "**A report of what it skipped**: sheets borrowed by another user under worksharing, or sheets whose numbers are locked, with the reason.",
            ],
          },
          after: [
            "The free Sheet Sorter add-in on the Autodesk App Store is one example of the pattern, renumbering sheets in batches by prefix, separator and starting number.",
          ],
        },
        {
          id: "issued",
          heading: "Sheet numbers after the first issue",
          paragraphs: [
            "Once a sheet leaves the office, its number is written into other documents: transmittals, meeting minutes, RFIs, letters. Revit updates its own references, such as the sheet number on a section head. None of those outside documents update.",
            "That's why numbering standards say to lock numbers after the first external issue. A sorting plugin should read an issue-status parameter and refuse to renumber issued sheets without an explicit confirmation. A new sheet that lands between two issued ones gets a suffix, and nothing after it moves.",
          ],
        },
        {
          id: "choice",
          heading: "An off-the-shelf add-in, a Dynamo graph, or a custom plugin",
          paragraphs: [
            "If the office has a simple numbering pattern and sheets rarely move, Browser Organization, a Sheet Order parameter and one of the free add-ins will do. You don't need us, or anyone like us, for that. To test the rules on one project, a [custom Dynamo script](/articles/custom-dynamo-script-development/) is enough.",
            "A custom plugin earns its cost when the numbering rules depend on other data: the issue register, multi-building projects, Persian sheet names, or a [sheet list exported to Excel](/articles/revit-schedule-to-excel-export/) for document control. [Revit API development](/articles/revit-api-development/) covers how a tool like that is built, and it's the kind of work our [custom Revit plugin development](/revit-plugin-development/) covers.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Sorting sheets in Revit needs a written numbering rule and one order shared by the Project Browser and the sheet list. What scrambles a drawing set is the small stuff: digits that weren't padded, numbers that have to swap through a temporary one, sheets renumbered after they went out. A plugin that checks and reports those keeps the set in order. What's the first thing you'd want to change? [Tell us about the workflow](/contact/).",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Custom Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit API development", href: "/articles/revit-api-development/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Exporting Revit schedules to Excel", href: "/articles/revit-schedule-to-excel-export/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk, About Browser Organization (Revit 2026)", href: BROWSER_ORG },
        { label: "Autodesk, Organizing a Sheet List", href: SHEET_LIST },
        { label: "Novedge, Revit Sheet Numbering and Naming Standard", href: NUMBERING },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "How do I sort sheets in Revit?",
          answer:
            "For the Project Browser, go to View, User Interface, Browser Organization, open the Sheets tab and set the grouping and sort. For the sheet list, add a project parameter called Sheet Order and sort the schedule by it.",
        },
        {
          question: "Why are my Revit sheets out of order?",
          answer:
            "Sheet numbers are text. If the numeric parts don't all have the same number of digits, the display order won't match the intended one. Padding with zeros, 001 rather than 1, fixes it.",
        },
        {
          question: "Why can't I just swap two sheet numbers?",
          answer:
            "Revit won't accept a duplicate sheet number, so one sheet has to take a temporary number first. A sorting plugin does this inside a single transaction.",
        },
        {
          question: "Does Browser Organization change the sheet list order too?",
          answer:
            "No. Browser Organization only sorts the Project Browser, and the sheet list has its own sort. A plugin can update both from one shared parameter.",
        },
        {
          question: "Can I renumber sheets after they've been issued?",
          answer:
            "Revit updates its internal references, but transmittals, letters and RFIs don't change. Lock numbers after the first issue and give new sheets a suffix.",
        },
        {
          question: "When don't you need a custom plugin?",
          answer:
            "When the numbering pattern is simple and sheets rarely move. Revit's own tools and a free add-in from the Autodesk App Store will do.",
        },
      ],
    },
  },
};
