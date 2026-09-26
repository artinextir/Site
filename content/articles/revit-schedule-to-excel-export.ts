import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/revit-schedule-to-excel-export";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("door-schedule-building-corridor", {
  fa: "درهای یک راهرو، هرکدام یک ردیف در اسکجوال درها، پیش از خروجی اکسل از اسکجوال رویت",
  en: "Doors along a corridor, each one a row in the door schedule before a Revit schedule to Excel export",
});
const roundTrip = img("excel-round-trip-revit-parameters", {
  fa: "نمای نزدیک جدول داده روی نمایشگر، برای انتقال رفت‌وبرگشتی پارامترهای رویت",
  en: "A close-up of a data table on a monitor, for a Revit parameter round trip",
});
const decide = img("checking-exported-quantities", {
  fa: "بررسی مدارک و جدول‌ها روی میز، پیش از انتخاب ابزار خروجی اکسل",
  en: "Documents and tables reviewed on a desk before choosing an Excel export tool",
});

export const revitScheduleToExcelExport: ArticlePage = {
  slug: "revit-schedule-to-excel-export",
  content: {
    fa: {
      slug: "revit-schedule-to-excel-export",
      meta: {
        title: "خروجی اکسل از اسکجوال رویت و بازگشت داده، آرتینکست",
        description:
          "خروجی اکسل از اسکجوال رویت با ابزار داخلی فقط یک‌طرفه است. پاک‌سازی فایل، کار پلاگین و آنچه انتقال رفت‌وبرگشتی داده باید حفظ کند را بخوانید.",
      },
      keywords: [
        "خروجی اکسل از اسکجوال رویت",
        "خروجی اکسل از شیت‌های رویت",
        "ابزار مدیریت خروجی رویت",
        "پلاگین خروجی اکسل رویت",
        "ورود داده از اکسل به رویت",
      ],
      breadcrumb: "خروجی اکسل از اسکجوال رویت",
      category: "BIM و Revit",
      title: "خروجی اکسل از اسکجوال رویت؛ آنچه انتقال رفت‌وبرگشتی داده باید حفظ کند",
      leadOpinion:
        "خروجی‌ای که در اکسل باز می‌شود، کار می‌کند. انتقال رفت‌وبرگشتی‌ای که می‌داند رویت هر مقدار را چگونه ذخیره می‌کند، درک شده است و تفاوت این دو، همان جایی است که داده‌ی مدل خراب می‌شود.",
      publishedAt: "2026-09-26",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که ابزارهای مدیریت خروجی، داده و اتوماسیون رویت را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "native-export", label: "خروجی داخلی رویت" },
        { id: "prepare-schedule", label: "آماده‌سازی اسکجوال" },
        { id: "cleanup", label: "پاک‌سازی فایل در اکسل" },
        { id: "one-way", label: "مسیر یک‌طرفه" },
        { id: "what-plugin-adds", label: "آنچه پلاگین اضافه می‌کند" },
        { id: "round-trip", label: "حفاظت از داده در مسیر برگشت" },
        { id: "output-management", label: "مدیریت خروجی‌ها" },
        { id: "build-or-buy", label: "ابزار آماده یا اختصاصی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "خروجی اکسل از اسکجوال رویت با یک پلاگین، اسکجوال را مستقیماً در یک فایل ‎.xlsx می‌نویسد و پلاگین‌های کامل‌تر، مقادیر ویرایش‌شده را نیز به مدل برمی‌گردانند. رویت نیمه‌ی اول این کار را به‌تنهایی و به‌شکلی ساده انجام می‌دهد: مسیر File، Export، Reports، Schedule یک فایل متنی جداشده با کاراکتر ذخیره می‌کند که اکسل آن را باز می‌کند. نیمه‌ی دوم در رویت وجود ندارد. خروجی داخلی هیچ مسیری برای بازگرداندن صفحه‌گسترده به مدل ندارد.\n\nخطا معمولاً در مرحله‌ی خروجی رخ نمی‌دهد، در مرحله‌ی بازگشت رخ می‌دهد. مقداری که به میلی‌متر وارد شده، ردیفی که به المان نادرست نسبت داده شده و پارامتر تایپی که در یک ردیف تغییر کرده و بدون هیچ هشداری تمام درهای آن تایپ را تغییر داده است.\n\nاولین پروژه‌ی پژوهشی بنیان‌گذار آرتینکست به داده‌ی تولیدشده نیاز داشت و ۶۰۰ داده‌ی اول به‌صورت دستی ساخته شد. واکنش این بود: «۶۰۰؟ واقعاً؟ همین؟» به‌جای افزودن ردیف‌های بیشتر، یک سامانه‌ی تولید داده ساخته شد که به حدود ۲۲٬۰۰۰ پیکربندی رسید. کپی دستی مقادیر میان اسکجوال و صفحه‌گسترده، همان دام در مقیاس یک دفتر است. **توقف در نقطه‌ای که کار انجام می‌شود، خط پایان نادرستی است؛ نقطه‌ی درست، جایی است که سازوکار آن درک شده باشد.**",
      heroImage: hero.fa,
      sections: [
        {
          id: "native-export",
          heading: "خروجی داخلی رویت دقیقاً چه چیزی تحویل می‌دهد",
          paragraphs: [
            "خروجی داخلی فقط از اسکجوالی گرفته می‌شود که در ویوی فعال باز است. پس از انتخاب File، Export، Reports و Schedule، رویت چند گزینه نمایش می‌دهد:",
          ],
          list: {
            items: [
              "**سرستون‌ها**: خروجی گرفتن از عنوان ستون‌ها در یک ردیف یا چند ردیف.",
              "**ردیف‌های گروه**: خروجی گرفتن از سرگروه‌ها، پاگروه‌ها و ردیف‌های خالی.",
              "**جداکننده‌ی فیلد**: Tab، کاما یا کاراکتر دیگر.",
              "**Text Qualifier**: کاراکتری که متن هر خانه را در بر می‌گیرد.",
            ],
          },
          after: [
            "نتیجه یک فایل متنی جداشده با کاراکتر است، نه یک فایل ‎.xlsx. Revit API نیز همین رفتار را دارد: متد ViewSchedule.Export اسکجوال را در یک فایل متنی ذخیره می‌کند. فهرست شیت‌ها نیز یک اسکجوال است، در نتیجه خروجی اکسل از شیت‌های رویت با همین روش و با همین محدودیت‌ها انجام می‌شود.",
          ],
        },
        {
          id: "prepare-schedule",
          heading: "اسکجوال را برای مسیر برگشت آماده کنید",
          paragraphs: [
            "بیشتر مشکلات خروجی هنگام ساخت اسکجوال تعیین می‌شوند، نه هنگام خروجی گرفتن. اسکجوالی که برای اکسل ساخته می‌شود، باید برای خوانده‌شدن توسط یک برنامه طراحی شود، نه برای قرارگرفتن روی شیت:",
          ],
          list: {
            items: [
              "**یک ردیف برای هر المان**: گزینه‌ی Itemize every instance را فعال کنید تا هیچ ردیفی نماینده‌ی گروهی از درها نباشد.",
              "**فیلدهای شناسایی**: Family and Type، Mark و Level، تا هر ردیف در مدل قابل‌پیدا کردن باشد.",
              "**مقادیر بدون قالب‌بندی**: نماد واحد غیرفعال و گردکردن متناسب با دقتی که داده واقعاً نیاز دارد.",
              "**فقط فیلدهایی که کسی می‌خواند یا ویرایش می‌کند**: هر ستون اضافه، یک محل دیگر برای بازگشت مقدار نادرست است.",
            ],
          },
          after: [
            "اسکجوال‌های رویت شناسه‌ی المان را به‌عنوان فیلد نمایش نمی‌دهند و به همین دلیل مسیر رفت‌وبرگشتی به پلاگین یا اسکریپتی نیاز دارد که این ستون را اضافه کند. همین یک ستون، تفاوت میان یک گزارش و یک منبع داده است.",
          ],
        },
        {
          id: "cleanup",
          heading: "چرا فایل خروجی در اکسل به پاک‌سازی نیاز دارد",
          paragraphs: [
            "فایل متنی آنچه را اسکجوال روی صفحه نشان می‌دهد ذخیره می‌کند، نه داده‌ی خام را. به همین دلیل پس از باز شدن در اکسل، چند ایراد تکراری ظاهر می‌شود:",
          ],
          list: {
            items: [
              "**اعداد به‌صورت متن**: اگر اسکجوال نماد واحد را نمایش دهد، مقداری مانند «2400 mm» یک متن است و در فرمول‌ها محاسبه نمی‌شود.",
              "**ردیف‌های اضافه**: سرگروه‌ها، جمع‌های جزئی و ردیف‌های خالی میان داده‌ها قرار می‌گیرند و مرتب‌سازی و فیلتر را مختل می‌کنند.",
              "**سرستون چندردیفی**: عنوان‌های گروه‌بندی‌شده در چند ردیف قرار می‌گیرند و باید دستی در یک ردیف ادغام شوند.",
            ],
          },
          after: [
            "بیشتر این موارد پیش از خروجی قابل‌پیشگیری است. یک نسخه‌ی مخصوص خروجی از اسکجوال، بدون گروه‌بندی، بدون جمع جزئی و بدون نماد واحد، فایلی تولید می‌کند که اکسل آن را مستقیماً به‌صورت عدد می‌خواند.",
          ],
        },
        {
          id: "one-way",
          heading: "خروجی داخلی یک‌طرفه است",
          paragraphs: [
            "فایل متنی هیچ ارتباطی با مدل ندارد. اگر تیم مقادیر را در اکسل اصلاح کند، این مقادیر تا زمانی که کسی آن‌ها را یکی‌یکی در رویت وارد کند، فقط در صفحه‌گسترده وجود دارند.",
            "همین وارد کردن دستی، جایی است که هفته‌ها صرف می‌شود و خطا شکل می‌گیرد. کسی که صدها مقدار را از یک پنجره به پنجره‌ی دیگر منتقل می‌کند، دیر یا زود ردیفی را جا می‌اندازد و هیچ ابزاری آن را گزارش نمی‌دهد.",
            "Dynamo معمولاً اولین راه‌حل است. این نرم‌افزار نودهایی برای خواندن و نوشتن مستقیم فایل‌های اکسل دارد، در نتیجه یک اسکریپت می‌تواند المان‌های اسکجوال را همراه با شناسه‌ی آن‌ها خروجی بگیرد و فایل ویرایش‌شده را دوباره بخواند. این روش برای یک پروژه و یک قالب مشخص به‌خوبی کار می‌کند و تمام ریسک‌های فهرست رفت‌وبرگشت در ادامه‌ی این نوشته را نیز به همراه دارد.",
          ],
        },
        {
          id: "what-plugin-adds",
          heading: "پلاگین خروجی اکسل از اسکجوال رویت چه چیزی اضافه می‌کند",
          paragraphs: [
            "پلاگین مراحل میانی را حذف می‌کند و در عوض، مسئولیت درستی داده را بر عهده می‌گیرد. کار یک پلاگین کامل معمولاً شامل این موارد است:",
          ],
          list: {
            items: [
              "**خروجی مستقیم ‎.xlsx**، با اعداد به‌صورت عدد و سرستون‌ها در یک ردیف.",
              "**چند اسکجوال در یک فایل**، هر اسکجوال در یک Worksheet جداگانه.",
              "**خروجی دسته‌ای** از تمام اسکجوال‌های یک پروژه یا چند پروژه، با نام‌گذاری یکسان.",
              "**شناسه‌ی المان** در ستونی پنهان، تا هر ردیف در مسیر برگشت به المان درست برسد.",
              "**ورود داده از اکسل به رویت**، همراه با گزارشی از مقادیر تغییرکرده و مقادیری که نوشته نشده‌اند.",
            ],
          },
          after: [
            "ابزارهای شناخته‌شده‌ای مانند Ideate BIMLink و SheetLink از DiRoots همین مسیر رفت‌وبرگشتی را پوشش می‌دهند و فروشگاه Autodesk نیز پلاگین‌های ساده‌تری برای خروجی یک‌طرفه دارد. همان‌طور که در نوشته‌ی [کنترل‌کننده مدل رویت](/articles/revit-model-checker/) آمده است، بازبینی پارامترها در صفحه‌گسترده یکی از رایج‌ترین کاربردهای این ابزارهاست.",
          ],
        },
        {
          id: "round-trip",
          heading: "آنچه انتقال رفت‌وبرگشتی داده باید حفظ کند",
          image: roundTrip.fa,
          paragraphs: [
            "بیشتر راهنماها در مرحله‌ی خروجی متوقف می‌شوند. خطر اصلی در مسیر برگشت است و پنج مورد تعیین می‌کند که داده‌ی مدل پس از بازگشت درست باقی بماند یا نه:",
          ],
          list: {
            ordered: true,
            items: [
              "**شناسه‌ی هر المان**: ردیف‌ها باید با ElementId یا UniqueId به المان‌ها متصل باشند. تطبیق بر اساس نام یا Mark با اولین مقدار تکراری از کار می‌افتد.",
              "**واحد ذخیره‌سازی**: رویت طول‌ها را فارغ از واحد پروژه به‌صورت فوت اعشاری ذخیره می‌کند. ابزاری که عدد میلی‌متری را بدون تبدیل بنویسد، هر اندازه را چند صد برابر بزرگ‌تر ثبت می‌کند.",
              "**فیلدهای فقط‌خواندنی**: Area، Volume، Count، فیلدهای محاسباتی و فرمول‌ها قابل‌نوشتن نیستند. ابزار باید این ستون‌ها را قفل کند، نه اینکه تغییر آن‌ها را بی‌صدا نادیده بگیرد.",
              "**پارامترهای تایپ و نمونه**: تغییر یک پارامتر تایپ در یک ردیف، مقدار آن را برای تمام نمونه‌های همان تایپ تغییر می‌دهد. این ستون‌ها باید در صفحه‌گسترده به‌وضوح مشخص باشند.",
              "**ردیف‌های حذف‌شده یا اضافه‌شده**: حذف یک ردیف در اکسل به معنای حذف المان نیست و ردیف جدید، المان جدیدی نمی‌سازد. ابزار باید هر دو حالت را گزارش دهد.",
            ],
          },
          after: [
            "خروجی‌ای که در اکسل باز می‌شود، کار می‌کند. انتقالی که هر پنج مورد بالا را رعایت کند، درک شده است و فقط همین نوع دوم را می‌توان روی مدل در حال کار اجرا کرد.",
          ],
        },
        {
          id: "output-management",
          heading: "اسکجوال، یکی از چند خروجی پروژه",
          paragraphs: [
            "در بیشتر دفاتر، اسکجوال فقط یکی از خروجی‌های تکرارشونده است. فهرست شیت‌ها، فهرست درها برای مشاور، جدول مساحت‌ها برای کارفرما و مجموعه‌ی PDF برای هر ارسال، همگی در هر مرحله دوباره تولید می‌شوند.",
            "ابزار مدیریت خروجی رویت همه‌ی این موارد را با یک قاعده‌ی نام‌گذاری، یک پوشه‌ی مقصد و یک سابقه‌ی ارسال تولید می‌کند. وقتی همین داده باید به‌طور منظم به دست مدیران برسد، جای آن در یک [داشبورد مدیریتی](/aec-workflow-automation/) است، نه در پیوست یک ایمیل.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "ابزار آماده، اسکریپت Dynamo یا پلاگین اختصاصی",
          image: decide.fa,
          paragraphs: [
            "اگر ماهی یک‌بار از یک اسکجوال خروجی می‌گیرید تا عددی را بررسی کنید، خروجی داخلی رویت و چند دقیقه پاک‌سازی در اکسل کافی است. اگر ابزاری آماده، رفت‌وبرگشت مورد نیاز شما را پوشش می‌دهد، آن را بخرید. در هیچ‌کدام از این دو حالت نیازی به ساخت ابزار اختصاصی یا استخدام کسی، از جمله ما، نیست.",
            "اسکریپت Dynamo برای یک جریان مشخص و یک پروژه مناسب است؛ نوشته‌ی [توسعه اسکریپت اختصاصی Dynamo](/articles/custom-dynamo-script-development/) کاربرد اکسل در مستندسازی را بررسی می‌کند. پلاگین اختصاصی زمانی منطقی است که ساختار صفحه‌گسترده را یک فرآیند بیرونی تعیین می‌کند، مانند قالب برآورد یا قالب تحویل کارفرما، یا زمانی که داده باید در یک مسیر مشخص، با کنترل و گزارش، به مدل برگردد. ساخت چنین ابزاری در قالب [توسعه پلاگین رویت](/revit-plugin-development/) انجام می‌شود.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "خروجی اکسل از اسکجوال رویت در رویت یک‌طرفه و در اکسل نیازمند پاک‌سازی است. پلاگین هر دو مشکل را حل می‌کند، به شرط آنکه مسیر برگشت را جدی بگیرد: شناسه‌ها، واحدها، فیلدهای فقط‌خواندنی و تفاوت تایپ و نمونه. ابزاری که فقط کار می‌کند، کافی نیست. ابزاری لازم است که سازوکار ذخیره‌ی داده در رویت را درک کرده باشد.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "کنترل‌کننده مدل رویت", href: "/articles/revit-model-checker/" },
        { label: "توسعه اسکریپت اختصاصی Dynamo", href: "/articles/custom-dynamo-script-development/" },
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "ابزارهای دیجیتال در صفحه‌ی محصولات", href: "/products/#digital-tools" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "The Building Coder, Schedule API and access to schedule data", href: "https://jeremytammik.github.io/tbc/a/0761_access_schedule_data.htm" },
        { label: "Revit API, ViewSchedule.GetTableData", href: "https://www.revitapidocs.com/2024/e067f2c7-f809-89d4-5b61-a93004e3710d.htm" },
        { label: "Autodesk App Store, Schedule TO EXCEL", href: "https://marketplace.autodesk.com/apps?id=5141672835013457165&appLang=en&os=Win64" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "آیا رویت بدون پلاگین از اسکجوال خروجی اکسل می‌گیرد؟",
          answer:
            "به‌شکل غیرمستقیم. مسیر File، Export، Reports، Schedule یک فایل متنی جداشده با کاراکتر ذخیره می‌کند که اکسل آن را باز می‌کند، اما فایل ‎.xlsx مستقیم تولید نمی‌شود.",
        },
        {
          question: "چرا اعداد پس از خروجی در اکسل به‌صورت متن ظاهر می‌شوند؟",
          answer:
            "چون فایل متنی مقادیر را همان‌طور که اسکجوال نمایش می‌دهد ذخیره می‌کند، همراه با نماد واحد. حذف نماد واحد در تنظیمات فرمت ستون‌ها پیش از خروجی، این مشکل را برطرف می‌کند.",
        },
        {
          question: "آیا می‌توان داده‌ی ویرایش‌شده در اکسل را به رویت برگرداند؟",
          answer:
            "نه با ابزارهای داخلی رویت. این کار به اسکریپت Dynamo یا پلاگینی نیاز دارد که هر ردیف را با شناسه‌ی المان به مدل متصل کند و واحدها را پیش از نوشتن تبدیل کند.",
        },
        {
          question: "کدام پارامترها از اکسل قابل‌بازگشت به رویت نیستند؟",
          answer:
            "فیلدهای فقط‌خواندنی مانند Area، Volume و Count، فیلدهای محاسباتی و مقادیر حاصل از فرمول. پارامترهای تایپ قابل‌نوشتن هستند، اما تغییر آن‌ها بر تمام نمونه‌های همان تایپ اثر می‌گذارد.",
        },
        {
          question: "آیا می‌توان از چند اسکجوال هم‌زمان خروجی گرفت؟",
          answer:
            "خروجی داخلی رویت هر بار فقط از یک اسکجوال فعال خروجی می‌گیرد. خروجی دسته‌ای از چند اسکجوال یا چند پروژه در یک فایل، به پلاگین یا اسکریپت نیاز دارد.",
        },
        {
          question: "برای خروجی گاه‌به‌گاه هم پلاگین لازم است؟",
          answer:
            "خیر. اگر خروجی فقط برای بررسی گرفته می‌شود و داده به مدل برنمی‌گردد، خروجی داخلی و یک نسخه‌ی مخصوص خروجی از اسکجوال، بدون گروه‌بندی و نماد واحد، کافی است.",
        },
      ],
    },
    en: {
      slug: "revit-schedule-to-excel-export",
      meta: {
        title: "Revit Schedule to Excel Export Plugin: The Round Trip",
        description:
          "Revit's own schedule export only goes one way. What the text file needs in Excel, what a plugin adds, and what a round trip back into the model must protect.",
      },
      keywords: [
        "revit schedule to excel export plugin",
        "revit output management tool",
        "export revit schedule to excel",
        "import excel into revit",
        "revit excel round trip",
      ],
      breadcrumb: "Revit schedule to Excel",
      category: "BIM & Revit",
      title: "A Revit schedule to Excel export plugin is judged by the trip back",
      leadOpinion:
        "An export that opens in Excel works. A round trip that knows how Revit stores each value is understood, and the gap between the two is where model data gets damaged.",
      publishedAt: "2026-09-26",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds output-management, data and automation tools for Revit, for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "native-export", label: "Revit's own export" },
        { id: "prepare-schedule", label: "Setting the schedule up" },
        { id: "cleanup", label: "Cleaning the file in Excel" },
        { id: "one-way", label: "A one-way street" },
        { id: "what-plugin-adds", label: "What a plugin adds" },
        { id: "round-trip", label: "Protecting the trip back" },
        { id: "output-management", label: "Managing outputs" },
        { id: "build-or-buy", label: "Buy, script or build" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A Revit schedule to Excel export plugin writes a schedule straight into an .xlsx workbook, and the better ones bring the edited values back into the model. Revit can do a rough version of the first half on its own: File, Export, Reports, Schedule saves a delimited text file that Excel can open. It can't do the second half at all. Nothing in the native export writes a spreadsheet back into the model.\n\nThe export is rarely where things go wrong. The trip back is. A value typed in millimetres, a row matched to the wrong element, a type parameter edited on one line that quietly changes every door of that type.\n\nThe founder's first research project needed generated data, and the first 600 data points were built by hand. The response: \"600? Really? That's it?\" Instead of adding more rows, he built a generation system, which ended at roughly 22,000 configurations. Copying values between a schedule and a spreadsheet by hand is the same trap at office scale. **Stopping when something works is the wrong finish line. Stop when you understand it.**",
      heroImage: hero.en,
      sections: [
        {
          id: "native-export",
          heading: "What Revit's own schedule export gives you",
          paragraphs: [
            "The native export only works from a schedule open in the active view. Choose File, Export, Reports, Schedule, and Revit offers a handful of options:",
          ],
          list: {
            items: [
              "**Column headers**: export them on one row or across several.",
              "**Group rows**: include or drop group headers, footers and blank lines.",
              "**Field delimiter**: tab, comma or another character.",
              "**Text qualifier**: the character that wraps each cell's text.",
            ],
          },
          after: [
            "The result is a delimited text file, not an .xlsx workbook. The API behaves the same way: ViewSchedule.Export writes the schedule to a text file. A sheet list is a schedule too, so exporting a list of sheets to Excel works the same way and has the same limits.",
          ],
        },
        {
          id: "prepare-schedule",
          heading: "Set the schedule up for the trip back",
          paragraphs: [
            "Most export problems are decided when the schedule is built, not when it's exported. A schedule meant for Excel should be built for a program to read, not for a sheet:",
          ],
          list: {
            items: [
              "**One row per element**: turn on Itemize every instance, so no row is a group of doors standing in for one.",
              "**Identifying fields**: Family and Type, Mark and Level, so a person can find each row in the model.",
              "**Unformatted values**: unit symbols off, and rounding set to the precision the data actually needs.",
              "**Only the fields someone will read or edit**: every extra column is one more place for a wrong value to come back from.",
            ],
          },
          after: [
            "Revit schedules can't show an element's ID as a field, which is why a round trip needs a plugin or a script to add it. That one missing column is the difference between a report and a data source.",
          ],
        },
        {
          id: "cleanup",
          heading: "Why the exported file needs cleaning in Excel",
          paragraphs: [
            "The text file stores what the schedule shows on screen, not the raw data. So the same few problems appear once it opens in Excel:",
          ],
          list: {
            items: [
              "**Numbers stored as text**: if the schedule shows unit symbols, a value like \"2400 mm\" is text, and formulas skip it.",
              "**Extra rows**: group headers, subtotals and blank lines sit between the data and break sorting and filtering.",
              "**Multi-row headers**: grouped column titles land on several rows and have to be merged by hand.",
            ],
          },
          after: [
            "Most of this can be prevented before the export. A copy of the schedule made only for exporting, with no grouping, no subtotals and no unit symbols, produces a file Excel reads as numbers straight away.",
          ],
        },
        {
          id: "one-way",
          heading: "The native export is a one-way street",
          paragraphs: [
            "The text file has no link to the model. If the team corrects values in Excel, those corrections exist only in the spreadsheet until someone types them into Revit, one by one.",
            "That retyping is where the weeks go and where the errors start. Anyone moving hundreds of values from one window to another will eventually skip a row, and nothing reports it.",
            "Dynamo is the usual first fix. It ships nodes that read and write Excel files directly, so a graph can export a schedule's elements with their IDs and read the edited file back in. It works well for one project and one layout, and it inherits every risk in the round-trip list below.",
          ],
        },
        {
          id: "what-plugin-adds",
          heading: "What a Revit schedule to Excel export plugin adds",
          paragraphs: [
            "A plugin removes the steps in the middle, and in exchange takes responsibility for the data being right. A complete one usually covers:",
          ],
          list: {
            items: [
              "**Direct .xlsx output**, with numbers as numbers and headers on one row.",
              "**Several schedules in one workbook**, each on its own worksheet.",
              "**Batch export** of every schedule in one project or several, named consistently.",
              "**Element IDs** in a hidden column, so every row finds its element on the way back.",
              "**Import from Excel back into Revit**, with a report of what changed and what wasn't written.",
            ],
          },
          after: [
            "Established tools such as Ideate BIMLink and DiRoots' SheetLink cover this round trip, and the Autodesk App Store lists simpler plugins for the one-way export. As the [Revit model checker](/articles/revit-model-checker/) article notes, reviewing parameters in a spreadsheet is one of the most common reasons offices use them.",
          ],
        },
        {
          id: "round-trip",
          heading: "What a round trip has to protect",
          image: roundTrip.en,
          paragraphs: [
            "Most guides stop at the export. The real risk is on the way back, and five things decide whether the model's data survives it:",
          ],
          list: {
            ordered: true,
            items: [
              "**Element identity**: rows must be tied to elements by ElementId or UniqueId. Matching by name or Mark breaks at the first duplicate.",
              "**Stored units**: Revit stores lengths in decimal feet whatever the project units. A tool that writes a millimetre value without converting it records every dimension hundreds of times too large.",
              "**Read-only fields**: Area, Volume, Count, calculated fields and formulas can't be written. The tool should lock those columns, not silently ignore changes to them.",
              "**Type versus instance**: changing a type parameter on one row changes it for every instance of that type. Those columns need to be marked clearly in the spreadsheet.",
              "**Deleted and added rows**: deleting a row in Excel doesn't delete an element, and a new row doesn't create one. The tool should report both.",
            ],
          },
          after: [
            "An export that opens in Excel works. A round trip that respects all five is understood, and only the second kind is safe to run on a live model.",
          ],
        },
        {
          id: "output-management",
          heading: "A schedule is one output among many",
          paragraphs: [
            "In most offices a schedule is only one of the outputs rebuilt at every stage. Sheet lists, door lists for a consultant, area tables for the client and a PDF set for every issue all get produced again and again.",
            "A Revit output management tool produces all of them under one naming rule, into one destination folder, with a record of what was issued. When the same data has to reach management regularly, it belongs on [a dashboard](/aec-workflow-automation/), not in an email attachment.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "Buy a tool, write a Dynamo graph, or build a plugin",
          image: decide.en,
          paragraphs: [
            "If you export one schedule once a month to check a number, Revit's own export and a few minutes of cleaning in Excel are enough. If an off-the-shelf tool already covers the round trip you need, buy it. In neither case does anyone need to build anything, or hire anyone, including us.",
            "A Dynamo graph suits one workflow on one project; [custom Dynamo script development](/articles/custom-dynamo-script-development/) covers Excel round trips in documentation work. A custom plugin makes sense when an outside process dictates the spreadsheet's shape, such as an estimating template or a client's handover format, or when data has to come back into the model along a controlled path with a report. That's [custom Revit plugin development](/revit-plugin-development/).",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "Revit's schedule export is one-way inside Revit and needs cleaning inside Excel. A plugin fixes both, as long as it takes the trip back seriously: identity, units, read-only fields, and the difference between type and instance. A tool that works isn't enough. It has to understand how Revit stores the data it's writing.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Revit model checker", href: "/articles/revit-model-checker/" },
        { label: "Custom Dynamo script development", href: "/articles/custom-dynamo-script-development/" },
        { label: "Office automation", href: "/aec-workflow-automation/" },
        { label: "Digital tools on the Products page", href: "/products/#digital-tools" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "The Building Coder, Schedule API and access to schedule data", href: "https://jeremytammik.github.io/tbc/a/0761_access_schedule_data.htm" },
        { label: "Revit API, ViewSchedule.GetTableData", href: "https://www.revitapidocs.com/2024/e067f2c7-f809-89d4-5b61-a93004e3710d.htm" },
        { label: "Autodesk App Store, Schedule TO EXCEL", href: "https://marketplace.autodesk.com/apps?id=5141672835013457165&appLang=en&os=Win64" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "Can Revit export a schedule to Excel without a plugin?",
          answer:
            "Indirectly. File, Export, Reports, Schedule saves a delimited text file that Excel can open, but Revit doesn't write an .xlsx file itself.",
        },
        {
          question: "Why do numbers show up as text after exporting to Excel?",
          answer:
            "Because the text file stores values as the schedule displays them, unit symbols included. Turning the unit symbols off in the schedule's field formatting before exporting fixes it.",
        },
        {
          question: "Can edited Excel data be imported back into Revit?",
          answer:
            "Not with Revit's own tools. It needs a Dynamo graph or a plugin that ties each row to its element by ID and converts units before writing.",
        },
        {
          question: "Which parameters can't be written back from Excel?",
          answer:
            "Read-only fields such as Area, Volume and Count, calculated fields and anything driven by a formula. Type parameters can be written, but a change applies to every instance of that type.",
        },
        {
          question: "Can several schedules be exported at once?",
          answer:
            "Revit's own export handles one active schedule at a time. Exporting several schedules, or several projects, into one workbook needs a plugin or a script.",
        },
        {
          question: "Do I need a plugin for occasional exports?",
          answer:
            "No. If the export is only for review and nothing goes back into the model, the native export plus a copy of the schedule without grouping or unit symbols is enough.",
        },
      ],
    },
  },
};
