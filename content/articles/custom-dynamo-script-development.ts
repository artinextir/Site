import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/custom-dynamo-script-development";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("revit-dynamo-visual-programming-graph", {
  fa: "دستی در حال طراحی نمودار جریان کاری روی تبلت کنار مانیتور کد، برای نوشته‌ای درباره‌ی توسعه اسکریپت اختصاصی Dynamo",
  en: "A hand sketching a flow diagram on a tablet beside a monitor of code, for a piece on custom Dynamo script development",
});
const python = img("python-scripting-revit-api-code", {
  fa: "دستی روی صفحه‌کلید لپ‌تاپ با کد روی صفحه، برای بخش نودهای Python در Dynamo",
  en: "A hand on a laptop keyboard with code on screen, for the section on Python nodes in Dynamo",
});
const organize = img("dynamo-script-library-organization", {
  fa: "دستی در حال چیدن کتاب روی قفسه، برای نظم‌دادن به کتابخانه‌ی اسکریپت‌های Dynamo",
  en: "A hand placing a book on a shelf, for keeping a Dynamo script library in order",
});
const graduate = img("compiled-revit-addin-software-development", {
  fa: "برنامه‌نویس در برابر مانیتوری با کد، برای تبدیل گراف Dynamo به افزونه‌ی کامپایل‌شده",
  en: "A developer facing a monitor of code, for turning a Dynamo graph into a compiled add-in",
});

const PLAYER = "https://help.autodesk.com/cloudhelp/2019/ENU/Revit-AddIns/files/GUID-43872068-27CD-483D-B590-3F3423F55501.htm";
const PRIMER = "https://primer.dynamobim.org/10_Custom-Nodes/10-5_Python-Revit.html";
const NET8 = "https://dynamobim.org/dynamo-on-net-8/";

export const customDynamoScriptDevelopment: ArticlePage = {
  slug: "custom-dynamo-script-development",
  content: {
    fa: {
      slug: "custom-dynamo-script-development",
      meta: {
        title: "توسعه اسکریپت اختصاصی Dynamo؛ کاربردها و مرزها — آرتینکست",
        description:
          "توسعه اسکریپت اختصاصی Dynamo یعنی تبدیل یک کار تکراری رویت به گرافی که دیگران هم بتوانند اجرا کنند. کاربردها، Dynamo Player، Python، ارتقای نسخه و زمان ساخت افزونه.",
      },
      keywords: [
        "توسعه اسکریپت اختصاصی Dynamo",
        "خدمات اسکریپت‌نویسی Dynamo",
        "اسکریپت Dynamo برای رویت",
        "خودکارسازی مرتب‌سازی شیت در رویت",
        "خودکارسازی فمیلی والپست در رویت",
      ],
      breadcrumb: "توسعه اسکریپت اختصاصی Dynamo",
      category: "BIM و Revit",
      title: "توسعه اسکریپت اختصاصی Dynamo دقیقاً چه چیزی را جایگزین می‌کند؟",
      leadOpinion:
        "گرافی که یک‌بار روی مدل سازنده‌ی خود اجرا می‌شود، یک آزمایش است؛ کاری که آن را به ابزار تبدیل می‌کند، بخشی است که روی صفحه‌ی Dynamo دیده نمی‌شود.",
      publishedAt: "2026-08-29",
      updatedAt: "2026-09-11",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که اسکریپت‌های Dynamo، افزونه‌های اختصاصی و خودکارسازی رویت را برای دفاتر معماری، سازه و تأسیسات می‌سازد.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "fundamentals", label: "اسکریپت Dynamo چه چیزی را جایگزین می‌کند" },
        { id: "documentation", label: "ابتدا شیت‌ها، ویوها و داده‌ها" },
        { id: "quality-control", label: "کنترل مدل با گراف" },
        { id: "repetitive-placement", label: "جانمایی تکراری" },
        { id: "run-by-others", label: "گرافی که دیگران هم اجرا کنند" },
        { id: "python", label: "نودهای Python" },
        { id: "organize", label: "پکیج‌ها و کتابخانه‌ی اسکریپت‌ها" },
        { id: "upgrades", label: "اثر ارتقای نسخه‌ی رویت" },
        { id: "graduate", label: "زمان ساخت افزونه" },
        { id: "build-or-outsource", label: "ساخت داخلی یا کمک بیرونی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "توسعه اسکریپت اختصاصی Dynamo یعنی ساخت گرافی که یک کار مشخص و تکراری در رویت را، با همان دقتی که یک فرد باتجربه انجام می‌دهد، هر بار و در هر پروژه‌ای اجرا کند. این کار با اتصال چند نود برای یک نتیجه‌ی یک‌باره تفاوت دارد. گرافی که فقط یک‌بار و روی همان مدلی که برای آن ساخته شده کار می‌کند، یک آزمایش است. گرافی که ماه بعد، در پروژه‌ی بعدی و توسط کسی که هرگز آن را در ویرایشگر باز نکرده نیز همان‌طور کار می‌کند، یک ابزار است.\n\nبیشتر دفاتر جایی میان این دو حالت قرار دارند. یک نفر گرافی ساخته است، فقط خود او می‌داند گراف چه ورودی‌هایی لازم دارد و در هفته‌ای که حضور ندارد، تیم دوباره کار را به‌صورت دستی انجام می‌دهد. **توسعه اسکریپت اختصاصی Dynamo** همین فاصله را از میان برمی‌دارد، با ساخت گرافی که افرادی غیر از سازنده‌ی آن نیز بتوانند اجرایش کنند و به نتیجه‌ی آن اعتماد داشته باشند.",
      heroImage: hero.fa,
      sections: [
        {
          id: "fundamentals",
          heading: "اسکریپت Dynamo دقیقاً چه چیزی را جایگزین می‌کند",
          paragraphs: [
            "Dynamo یک محیط برنامه‌نویسی بصری است که همراه رویت ارائه می‌شود. هر گراف از نودهایی ساخته می‌شود که هرکدام یک کار مشخص انجام می‌دهند، مانند جمع‌آوری تمام شیت‌ها یا تنظیم یک پارامتر، و از سیم‌هایی که داده را از خروجی یک نود به ورودی نود بعدی منتقل می‌کنند. گراف از طریق همین نودها به Revit API دسترسی پیدا می‌کند و در نتیجه، کاری که هر بار با همان کلیک‌ها انجام می‌شود، یک‌بار تعریف شده و بارها اجرا می‌شود.",
            "آنچه این ابزار جایگزین می‌کند، **زمان تکرار دستی** است، نه قضاوت فنی. کسی که می‌داند شیت‌ها باید چگونه شماره‌گذاری شوند، همچنان باید این را بداند؛ گراف فقط او را از تکرار دستی همین کار در هر پروژه بی‌نیاز می‌کند. گرافی که قاعده را درست ثبت کرده باشد، آن را در پایان یک روز طولانی نیز به همان شکلی اجرا می‌کند که در ابتدای روز.",
            "همین نکته، مرز کار را هم مشخص می‌کند. گراف فقط تصمیمی را تکرار می‌کند که پیش‌تر به‌روشنی گرفته شده باشد. اگر دفتر نتواند قاعده را مکتوب کند، گراف همان نسخه‌ای از قاعده را اجرا می‌کند که سازنده‌ی آن در ذهن داشته است.",
          ],
        },
        {
          id: "documentation",
          heading: "جایی که خودکارسازی زودتر نتیجه می‌دهد: شیت‌ها، ویوها و داده‌ها",
          paragraphs: [
            "مرتب‌سازی شیت‌ها، نام‌گذاری ویوها، جانمایی لجندها و پرکردن فیلدهای کادر نقشه معمولاً نخستین جاهایی هستند که دفتر نتیجه‌ی خودکارسازی را در آن‌ها می‌بیند، زیرا این کارها مدام تکرار می‌شوند و قاعده‌ی روشنی دارند: یک شیوه‌ی شماره‌گذاری، یک ترتیب و یک قالب مشخص. همین وضوح، ریسک خودکارسازی آن‌ها را از کارهای طراحی‌محور کمتر می‌کند و به همین دلیل، خودکارسازی مرتب‌سازی شیت در رویت برای بیشتر دفاتر نقطه‌ی شروع مناسبی است.",
            "داده‌ها دومین نقطه‌ی شروع هستند. Dynamo می‌تواند از Excel بخواند و در آن بنویسد، در نتیجه پارامترهایی که امروز یک نفر آن‌ها را میان اسکجوال و فایل Excel جابه‌جا می‌کند، با یک گراف در هر دو جهت منتقل می‌شوند. قاعده همان قاعده‌ی شیت‌هاست: اگر بتوان ارتباط میان ستون‌ها و پارامترها را مکتوب کرد، می‌توان آن را خودکار نیز کرد.",
            "ارزش این بخش فقط در سرعت نیست. مستندسازی‌ای که با گراف انجام می‌شود، هر بار از یک قاعده‌ی ثابت پیروی می‌کند و به برداشت فردی که آن روز کار را انجام داده، وابسته نیست.",
          ],
        },
        {
          id: "quality-control",
          heading: "کنترل مدل با گراف",
          paragraphs: [
            "گراف می‌تواند نقش یک بازرس خودکار را داشته باشد: المان‌ها را جمع‌آوری کند، پارامترهای خالی، درهای بدون تگ یا ویوهای بدون View Template را مشخص کند و در برخی موارد آن‌ها را اصلاح کند. این همان منطقی است که [کنترل‌کننده مدل رویت](/articles/revit-model-checker/) به کار می‌گیرد، با یک تفاوت: گراف اختصاصی دقیقاً قواعدی را بررسی می‌کند که استاندارد داخلی دفتر شما تعریف کرده است.",
            "ریسک این بخش، گراف کنترلی است که خود آن تست نشده باشد. با هر هشدار نادرست، اعتماد به گزارش سریع‌تر از هر هشدار جاافتاده کاهش می‌یابد، زیرا پس از چند مورد، افراد دیگر گزارش را نمی‌خوانند. گراف بازرسی پیش از آنکه کسی به آن تکیه کند، باید روی چند مدل واقعی و متفاوت اجرا شود، نه فقط روی مدلی که برای آن نوشته شده است.",
          ],
        },
        {
          id: "repetitive-placement",
          heading: "جانمایی تکراری: فمیلی‌ها، والپست‌ها و نازک‌کاری",
          paragraphs: [
            "جانمایی خودکار فمیلی‌ها در امتداد محیط اتاق، ساخت والپست‌ها بر اساس نوع دیوار یا اعمال نازک‌کاری بر اساس اسکجوال اتاق‌ها، همه از یک الگو پیروی می‌کنند. قاعده از پیش در داده‌های پروژه وجود دارد، مانند نوع اتاق، نوع دیوار یا نازک‌کاری موردنیاز، و فقط باید یک‌بار به‌صورت منطق نوشته شود. خودکارسازی فمیلی والپست در رویت و خودکارسازی نازک‌کاری دیوار، دو نمونه از همین ایده هستند.",
            "در این بخش، فاصله‌ی میان یک گراف آزمایشی و یک ابزار واقعی بیشترین اهمیت را دارد. جانمایی‌ای که در یک اتاق مستطیلی درست کار می‌کند، ممکن است در اتاقی نامنظم یا اتاقی با چند بازشو با خطا روبه‌رو شود. گرافی که فقط حالت ساده را پوشش می‌دهد، پس از هر اجرا به یک بررسی دستی نیاز دارد و در نتیجه، زمانی که قرار بود صرفه‌جویی شود، دوباره صرف همین بررسی می‌شود.",
          ],
        },
        {
          id: "run-by-others",
          heading: "گرافی که دیگران هم بتوانند اجرا کنند",
          paragraphs: [
            "بیشتر گراف‌ها در مرحله‌ی تحویل با مشکل روبه‌رو می‌شوند، نه در منطق. سازنده می‌داند پیش از اجرا کدام نود باید تغییر کند، کدام ویو باید باز باشد و کدام هشدارها اهمیتی ندارند. دیگران این موارد را نمی‌دانند و هیچ‌کدام از آن‌ها روی صفحه‌ی گراف نوشته نشده است.",
            `در رویت، ابزار این کار از پیش وجود دارد. [Dynamo Player](${PLAYER}) گراف‌های یک پوشه‌ی مشترک را فهرست می‌کند و آن‌ها را از زبانه‌ی Manage، بدون بازکردن ویرایشگر Dynamo، اجرا می‌کند؛ اگر گراف ورودی لازم داشته باشد، Player آن را از کاربر می‌پرسد و طبق راهنمای Autodesk، نتیجه‌ی هر اجرا با Undo در رویت قابل‌بازگشت است. برای آنکه گراف به این شکل کار کند، باید از ابتدا برای آن ساخته شود:`,
          ],
          list: {
            items: [
              "**فقط ورودی‌های نام‌گذاری‌شده.** هر مقداری که کاربر ممکن است تغییر دهد، یک نود ورودی با نام روشن است و هیچ چیزی نیاز به ویرایش در داخل گراف ندارد.",
              "**گروه‌بندی و یادداشت.** نودها بر اساس مرحله گروه‌بندی می‌شوند و هر گروه یادداشت کوتاهی درباره‌ی کار خود دارد تا فرد بعدی بتواند منطق را دنبال کند.",
              "**نتیجه‌ی قابل‌پیش‌بینی.** گراف گزارش می‌دهد چه چیزی را تغییر داده و از چه چیزی گذشته است تا بتوان اجرا را بدون مقایسه‌ی چشمی مدل بررسی کرد.",
            ],
          },
          after: [
            "گراف‌هایی که مدل را تغییر می‌دهند نیز باید در حالت اجرای Manual ذخیره شوند، نه Automatic، تا هیچ اجرایی بدون درخواست کاربر انجام نشود.",
          ],
        },
        {
          id: "python",
          heading: "نودهای Python: وقتی برنامه‌نویسی بصری کافی نیست",
          image: python.fa,
          paragraphs: [
            `نودهای بصری برای بیشتر منطق‌های خطی کافی هستند. اما وقتی گراف به شرط‌های پیچیده، حلقه‌های تودرتو یا بخشی از Revit API نیاز دارد که نود آماده‌ای برای آن وجود ندارد، یک نود Python در همان گراف سریع‌تر نوشته می‌شود و نگهداری آن از زنجیره‌ی بلندی از نودهای بصری ساده‌تر است. [فصل Python و رویت در Dynamo Primer](${PRIMER}) این الگو را نشان می‌دهد.`,
            "این به معنای کنارگذاشتن Dynamo نیست. گراف لایه‌ی قابل‌مشاهده، یعنی ورودی‌ها و خروجی‌ها، باقی می‌ماند و منطق اصلی در چند خط کد زیر آن قرار می‌گیرد. تیمی که هم برنامه‌نویسی بصری و هم Revit API را می‌شناسد، می‌تواند برای هر بخش تصمیم بگیرد که نود کافی است یا Python با نگهداری کمتر همان کار را انجام می‌دهد.",
          ],
        },
        {
          id: "organize",
          heading: "پکیج‌ها و نظم کتابخانه‌ی اسکریپت‌ها",
          image: organize.fa,
          paragraphs: [
            "کتابخانه‌ی گراف‌ها نیز مانند کتابخانه‌ی فمیلی‌ها به‌تدریج نامرتب می‌شود: نسخه‌های تقریباً یکسانی از یک گراف با نام‌های نزدیک به هم، پکیج‌های شخص‌ثالثی که سال‌هاست به‌روزرسانی نشده‌اند و گرافی که فقط سازنده‌ی آن می‌داند چه ورودی‌ای لازم دارد. همان اصولی که در [استاندارد مکتوب کتابخانه‌ی رویت](/articles/revit-library-optimization/) مطرح است، این‌جا هم کاربرد دارد و سه مورد این وضعیت را قابل‌کنترل نگه می‌دارد:",
          ],
          list: {
            items: [
              "یک **الگوی نام‌گذاری ثابت** برای هر گراف که هدف و نسخه‌ی آن را نشان دهد.",
              "فهرستی از پکیج‌های شخص‌ثالث مورد استفاده، مانند Clockwork یا archi-lab، همراه با نسخه‌ی دقیق هرکدام، برای روزی که یک به‌روزرسانی مشکلی ایجاد می‌کند.",
              "یادداشتی کوتاه همراه هر گراف که ورودی موردنیاز و خروجی آن را مشخص کند.",
            ],
          },
        },
        {
          id: "upgrades",
          heading: "اثر ارتقای نسخه‌ی رویت بر گراف‌ها",
          paragraphs: [
            `پایداری هر گراف به پکیج‌هایی بستگی دارد که از آن‌ها استفاده می‌کند. هر نسخه‌ی رویت با نسخه‌ی مشخصی از Dynamo ارائه می‌شود و پکیج‌ها باید با آن هماهنگ شوند. روشن‌ترین نمونه‌ی اخیر، Revit 2025 است: این نسخه با Dynamo 3.0 ارائه می‌شود که بر پایه‌ی .NET 8 اجرا می‌شود و [راهنمای خود Dynamo](${NET8}) تصریح می‌کند پکیجی که به .NET 8 منتقل شده، در نسخه‌های قدیمی‌تر Dynamo بارگذاری نمی‌شود. دفتری که Revit 2024 و Revit 2025 را هم‌زمان استفاده می‌کند، ممکن است به دو نسخه از یک پکیج نیاز داشته باشد.`,
            "قاعده‌ی عملی از همین‌جا به دست می‌آید. نسخه‌ی Dynamo و پکیج‌هایی را که هر گراف با آن‌ها تست شده ثبت کنید، پیش از انتقال دفتر به نسخه‌ی جدید، کتابخانه‌ی گراف‌ها را در یک پروژه‌ی آزمایشی تست کنید و گراف‌های نسخه‌ی قبلی را برای پروژه‌هایی که در همان نسخه می‌مانند، نگه دارید. [نوشته‌ی هزینه‌ی توسعه پلاگین رویت](/articles/revit-plugin-development-cost/) همین تغییر .NET 8 را از سمت افزونه‌ها بررسی می‌کند.",
          ],
        },
        {
          id: "graduate",
          heading: "چه زمانی گراف باید به افزونه‌ی کامپایل‌شده تبدیل شود",
          image: graduate.fa,
          paragraphs: [
            "گراف تا زمانی ابزار مناسبی است که اجرای دستی آن از یک پوشه‌ی مشترک قابل‌قبول باشد. زمان این تغییر را می‌توان از سه نشانه تشخیص داد:",
          ],
          list: {
            items: [
              "**تعداد زیاد کاربران.** وقتی کار هر روز توسط افرادی اجرا می‌شود که هرگز Dynamo را باز نمی‌کنند و نسخه‌های فایل .dyn باید روی هر رایانه هماهنگ نگه داشته شوند، توزیع به‌تنهایی به مشکل اصلی تبدیل می‌شود.",
              "**سرعت.** Dynamo روی رشته‌ی اصلی رابط کاربری رویت (UI Thread) اجرا می‌شود و در نتیجه، یک گراف سنگین روی مدل بزرگ، رویت را تا پایان اجرا متوقف نگه می‌دارد.",
              "**یکپارچگی یا رابط کاربری.** کار به یک پنجره‌ی اختصاصی، اتصال به یک سیستم بیرونی یا قاعده‌ای نیاز دارد که در هر ذخیره‌سازی اعمال شود، کارهایی که گراف به‌طور قابل‌اعتماد انجام نمی‌دهد.",
            ],
          },
          after: [
            "در این مرحله، گراف هدر نمی‌رود. گرافی که ماه‌ها در پروژه‌های واقعی اجرا شده، بهترین مشخصات فنی برای شروع یک پروژه‌ی [توسعه پلاگین رویت](/revit-plugin-development/) است، زیرا هر حالت استثنایی که از آن عبور کرده، از پیش در آن ثبت شده است.",
          ],
        },
        {
          id: "build-or-outsource",
          heading: "ساخت داخلی یا کمک بیرونی",
          paragraphs: [
            "اگر اسکریپتی فقط برای یک پروژه لازم است و پس از آن دیگر اجرا نمی‌شود، سفارش توسعه‌ی اختصاصی آن، چه به ما و چه به هر تیم دیگری، منطقی نیست. یک گراف ساده با یک پکیج آماده، یا حتی انجام یک‌باره‌ی کار به‌صورت دستی، ارزان‌تر و سریع‌تر است. **توسعه اسکریپت اختصاصی Dynamo زمانی ارزش هزینه‌ی خود را دارد که یک فرآیند مشخص، بارها، توسط افراد مختلف و در پروژه‌های مختلف تکرار شود.**",
            "یکی از پروژه‌های خود ما دقیقاً همین الگو را داشت: فرآیندی که به‌صورت دستی حدود دو هفته و گاهی نزدیک به یک ماه طول می‌کشید، پس از تبدیل‌شدن به یک ابزار خودکار، به حدود ۱۰ دقیقه رسید. آنچه از بیرون یک دکمه به نظر می‌رسید، بر اساس همان دکمه ساخته نشده بود، بلکه حاصل هفته‌ها تصمیم کوچک پشت آن بود، همان تصمیم‌هایی که در یک اسکریپت آزمایشی هنوز گرفته نشده‌اند.",
            "اگر در دفتر کسی Dynamo را می‌شناسد و برای نگهداری کتابخانه وقت دارد، گراف‌ها را داخلی بسازید و از کمک بیرونی برای بازبینی یا برای گراف‌هایی استفاده کنید که از توان Dynamo فراتر رفته‌اند. اگر کتابخانه مسئولی ندارد، گراف‌هایی که پس از ارتقای بعدی از کار بیفتند، دیگر اصلاح نمی‌شوند و این همان نقطه‌ای است که باید نگهداری آن‌ها را به کسی سپرد که این کار جزو وظایف اوست، چه یک نیروی جدید و چه تیمی که [ابزارهای دیجیتال اختصاصی](/products/#digital-tools) می‌سازد. چه نام آن را توسعه، ساخت یا طراحی اسکریپت Dynamo بگذارید، آنچه اهمیت دارد، مسئول مشخص برای نگهداری آن است.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "گراف Dynamo زمانی ارزش واقعی خود را نشان می‌دهد که برای یک کار مشخص، تکرارشونده و قاعده‌مند ساخته شود، نه زمانی که هدف فقط داشتن نوعی خودکارسازی باشد. گرافی که روی چند مدل واقعی تست شده، بدون سازنده‌ی خود از Dynamo Player اجرا می‌شود، نسخه‌ی وابستگی‌های خود را ثبت کرده و مرز روشنی با افزونه دارد، یک‌بار ساخته می‌شود و به کار خود ادامه می‌دهد. هر گراف دیگری هنوز یک آزمایش است و با رفتن سازنده‌ی آن یا ارتقای رویت، باید دوباره ساخته شود.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "توسعه پلاگین رویت چقدر هزینه دارد؟", href: "/articles/revit-plugin-development-cost/" },
        { label: "کنترل‌کننده مدل رویت و کنترل کیفیت", href: "/articles/revit-model-checker/" },
        { label: "انتخاب شرکت توسعه پلاگین رویت", href: "/articles/revit-plugin-development-company/" },
        { label: "توسعه پلاگین رویت", href: "/revit-plugin-development/" },
        { label: "ابزارهای دیجیتال اختصاصی", href: "/products/#digital-tools" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk — Play a Script in Dynamo Player", href: PLAYER },
        { label: "The Dynamo Primer — Python and Revit", href: PRIMER },
        { label: "Dynamo BIM — Dynamo on .NET 8", href: NET8 },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "اسکریپت Dynamo در رویت دقیقاً چیست؟",
          answer:
            "گرافی از نودهای متصل به هم که با استفاده از Revit API یک کار مشخص را در رویت اجرا می‌کند، در نتیجه آن کار دیگر نیازی به انجام دستی در هر نوبت ندارد. کاربرد آن از مرتب‌سازی شیت‌ها تا کنترل کیفیت مدل را شامل می‌شود.",
        },
        {
          question: "آیا اسکریپت‌نویسی Dynamo همان برنامه‌نویسی با Revit API است؟",
          answer:
            "به‌طور کامل نه. Dynamo یک لایه‌ی بصری روی بخشی از Revit API است. برای منطق ساده و خطی همین لایه کافی است؛ برای منطق پیچیده‌تر یا بخش‌هایی از API که نود آماده ندارند، یک نود Python در همان گراف یا یک افزونه‌ی کامل لازم می‌شود.",
        },
        {
          question: "آیا افراد بدون یادگیری Dynamo می‌توانند اسکریپت را اجرا کنند؟",
          answer:
            "بله. Dynamo Player در زبانه‌ی Manage رویت، گراف‌ها را از یک پوشه‌ی مشترک و بدون بازکردن ویرایشگر Dynamo اجرا می‌کند و ورودی‌های تعریف‌شده در گراف را از کاربر می‌پرسد. گراف باید برای این کار ساخته شده باشد، با ورودی‌های نام‌گذاری‌شده و بدون نیاز به ویرایش در داخل گراف.",
        },
        {
          question: "آیا اسکریپت Dynamo پس از ارتقای رویت همچنان کار می‌کند؟",
          answer:
            "نه همیشه. هر نسخه‌ی رویت با نسخه‌ی مشخصی از Dynamo ارائه می‌شود و گرافی که به پکیج‌های شخص‌ثالث وابسته است، اگر آن پکیج‌ها به‌روزرسانی نشده باشند، ممکن است از کار بیفتد. انتقال Revit 2025 به Dynamo 3.0 و .NET 8 نمونه‌ی اخیر آن است. ثبت نسخه‌ی پکیج‌ها و تست کتابخانه پیش از ارتقای دفتر، ریسک را کاهش می‌دهد، اما آن را از بین نمی‌برد.",
        },
        {
          question: "چه زمانی اسکریپت Dynamo باید به افزونه‌ی کامپایل‌شده تبدیل شود؟",
          answer:
            "وقتی کار هر روز توسط افرادی اجرا می‌شود که Dynamo را باز نمی‌کنند، وقتی یک گراف سنگین روی مدل‌های بزرگ رویت را متوقف می‌کند، یا وقتی ابزار به رابط کاربری اختصاصی، اتصال به سیستم بیرونی یا قاعده‌ای نیاز دارد که در هر ذخیره‌سازی اعمال شود.",
        },
        {
          question: "آیا برای اسکریپت‌نویسی Dynamo حتماً به برنامه‌نویس نیاز داریم؟",
          answer:
            "برای یک گراف ساده و یک‌باره، خیر. برای گرافی که در پروژه‌های مختلف استفاده می‌شود و باید در برابر مدل‌های واقعی و نامرتب پایدار بماند، تجربه در Revit API و منطق برنامه‌نویسی، نتیجه را قابل‌اعتمادتر می‌کند.",
        },
        {
          question: "هزینه‌ی توسعه اسکریپت اختصاصی Dynamo به چه عواملی بستگی دارد؟",
          answer:
            "به پیچیدگی منطق، تعداد حالت‌های استثنایی که باید پوشش داده شوند و میزان تست لازم روی مدل‌های واقعی، نه به تعداد نودهای روی صفحه. گرافی که فقط حالت ساده را پوشش می‌دهد، ارزان‌تر است و در عمل قابلیت اطمینان کمتری دارد.",
        },
        {
          question: "چه زمانی توسعه اسکریپت اختصاصی ارزش ندارد؟",
          answer:
            "وقتی کار فقط یک‌بار و برای یک پروژه لازم است. در این حالت، یک گراف ساده با یک پکیج آماده یا انجام دستی کار، ارزان‌تر و سریع‌تر از سفارش توسعه‌ی اختصاصی است.",
        },
      ],
    },
    en: {
      slug: "custom-dynamo-script-development",
      meta: {
        title: "Custom Dynamo Script Development: What It Replaces — ARTINEXT",
        description:
          "Custom Dynamo script development turns a repeated Revit task into a graph other people can run and trust: use cases, Dynamo Player, Python, upgrades and add-ins.",
      },
      keywords: [
        "custom dynamo script development",
        "Dynamo scripting services",
        "revit dynamo scripting services",
        "revit sheet sorting automation",
        "revit wall post family automation",
      ],
      breadcrumb: "Custom Dynamo script development",
      category: "BIM & Revit",
      title: "Custom Dynamo script development: what it actually replaces",
      leadOpinion:
        "A graph that runs once on its author's model is an experiment. The work that turns it into a tool is the part nobody sees on the canvas.",
      publishedAt: "2026-08-29",
      updatedAt: "2026-09-11",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that builds Dynamo scripts, custom add-ins and Revit automation for architecture, structural and MEP offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "fundamentals", label: "What a Dynamo script replaces" },
        { id: "documentation", label: "Sheets, views and data first" },
        { id: "quality-control", label: "Model checking with a graph" },
        { id: "repetitive-placement", label: "Repetitive placement" },
        { id: "run-by-others", label: "A graph someone else can run" },
        { id: "python", label: "Python nodes" },
        { id: "organize", label: "Packages and the script library" },
        { id: "upgrades", label: "What a Revit upgrade does" },
        { id: "graduate", label: "When to build an add-in" },
        { id: "build-or-outsource", label: "In-house or outside help" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "Custom Dynamo script development means building a graph that runs one specific, repeated Revit task the way a careful person would, every time, on any project. It is not wiring a few nodes together for a one-off result. A graph that works once, on the model it was built against, is an experiment. A graph that still works next month, on the next project, run by someone who has never opened it in the editor, is a tool.\n\nMost offices sit somewhere in between. Someone built a graph, only they know which inputs it expects, and the week they are away the team goes back to doing the task by hand. **Custom Dynamo script development** closes that gap, not by making the graph more complicated, but by making it something people other than its author can run and trust.",
      heroImage: hero.en,
      sections: [
        {
          id: "fundamentals",
          heading: "What a Dynamo script actually replaces",
          paragraphs: [
            "Dynamo is the visual programming environment that ships with Revit. A graph is built from nodes, each doing a single job, such as collecting every sheet or setting a parameter, and wires that carry data from one node's output to the next node's input. Through those nodes the graph reaches the Revit API, so a task that takes the same clicks every time can be defined once and run again.",
            "What it replaces is **manual repetition time**, not judgment. The person who knows how the sheets should be numbered still has to know that; the graph only stops them typing it by hand on every project. A graph that captures the rule correctly applies it the same way at the end of a long day as at the start of one.",
            "That also sets the limit. A graph can only repeat a decision someone has already made clearly. If the office cannot write the rule down, the graph will run whichever version of it its author had in mind.",
          ],
        },
        {
          id: "documentation",
          heading: "Where automation pays off first: sheets, views and data",
          paragraphs: [
            "Sheet sorting, view naming, legend placement and title-block fields are usually where an office first sees the payoff, because they repeat constantly and follow clear rules: a numbering scheme, an order, a template. That clarity makes them lower-risk to automate than anything design-driven, and it is why Revit sheet sorting automation is a sensible first graph for most offices.",
            "Data is the second early win. Dynamo can read from and write to Excel, so parameters someone currently copies between a schedule and a spreadsheet can move in both directions from one graph. The rule is the same as for sheets: if the mapping between columns and parameters can be written down, it can be automated.",
            "The payoff here is not only speed. A documentation pass run by a graph follows the same rule every time, instead of whatever interpretation the person running it used that day.",
          ],
        },
        {
          id: "quality-control",
          heading: "Model checking with a graph",
          paragraphs: [
            "A graph can act as an automated inspector: collect elements, flag empty parameters, untagged doors or views without a view template, and in some cases correct them. It is the same logic a [Revit model checker](/articles/revit-model-checker/) applies, with one difference: a custom graph checks exactly the rules your own office standard defines.",
            "The risk is a checking graph that has not been tested itself. Every false flag costs more trust than a missed one, because after a few of them people stop reading the report. An inspection graph needs to run against several real, different models before anyone relies on it, not only the one it was written against.",
          ],
        },
        {
          id: "repetitive-placement",
          heading: "Repetitive placement: families, wall posts and finishes",
          paragraphs: [
            "Placing families along a room's perimeter, generating wall posts by wall type, or applying finishes from a room schedule all share one pattern. The rule already exists in the project data, as the room type, the wall type or the required finish, and someone only has to write it once as logic. Wall post family automation in Revit and wall finish automation are two versions of the same idea.",
            "This is where the gap between a demo graph and a real tool is widest. Placement that works in a rectangular room can fail in an irregular one, or in a room with several openings. A graph that only handles the simple case needs a manual check after every run, and the time it was meant to save goes into that check instead.",
          ],
        },
        {
          id: "run-by-others",
          heading: "A graph someone else can run",
          paragraphs: [
            "Most graphs fail at handover rather than in the logic. The author knows which node to change before a run, which view has to be open and which warnings to ignore. Nobody else does, and none of it is written on the canvas.",
            `Revit already has the tool for this. [Dynamo Player](${PLAYER}) lists the graphs in a shared folder and runs them from the Manage tab without opening the Dynamo editor. If a graph needs inputs, the player asks for them, and Autodesk's help notes that the results of a run can be reversed with Undo in Revit. For a graph to work that way, it has to be built for it:`,
          ],
          list: {
            items: [
              "**Named inputs only.** Every value a user may change is an input node with a clear name, and nothing has to be edited inside the graph.",
              "**Groups and notes.** Nodes are grouped by stage, each group with a short note on what it does, so the next person to open the graph can follow the logic.",
              "**A predictable result.** The graph reports what it changed and what it skipped, so a run can be checked without comparing the model by eye.",
            ],
          },
          after: [
            "Graphs that change the model should also be saved in Manual run mode rather than Automatic, so nothing runs until someone asks it to.",
          ],
        },
        {
          id: "python",
          heading: "Python nodes: when visual programming runs out",
          image: python.en,
          paragraphs: [
            `Visual nodes handle most linear logic well. The moment the graph needs complex conditions, nested loops or a part of the Revit API with no ready-made node, a Python node inside the same graph is quicker to write and easier to maintain than a long chain of visual nodes doing the same thing. [The Dynamo Primer's chapter on Python and Revit](${PRIMER}) shows the pattern.`,
            "That is not abandoning Dynamo. The graph stays the visible layer, its inputs and outputs, with the real logic in a few lines of code underneath. A team that knows both visual programming and the Revit API can decide, part by part, where a node is enough and where Python does the same job with less upkeep.",
          ],
        },
        {
          id: "organize",
          heading: "Custom packages and keeping a script library organized",
          image: organize.en,
          paragraphs: [
            "A graph library drifts the same way a family library does: near-duplicate versions of one graph under slightly different names, third-party packages nobody has updated in years, and graphs only their author knows the expected input for. The discipline behind a [written Revit library standard](/articles/revit-library-optimization/) applies here too, and three things keep it under control:",
          ],
          list: {
            items: [
              "A **consistent naming pattern** for every graph that states its purpose and version.",
              "A list of the third-party packages in use, such as Clockwork or archi-lab, with the exact version of each, for the day an update breaks something.",
              "A short note with every graph stating what input it expects and what output it produces.",
            ],
          },
        },
        {
          id: "upgrades",
          heading: "What a Revit upgrade does to a graph",
          paragraphs: [
            `A graph is only as stable as the packages it depends on. Each Revit release ships with its own Dynamo version, and packages have to keep up. The clearest recent case is Revit 2025: it ships Dynamo 3.0, which runs on .NET 8, and [Dynamo's own guidance](${NET8}) states that a package migrated to .NET 8 no longer loads in older versions of Dynamo. An office running Revit 2024 and Revit 2025 side by side can end up needing two versions of the same package.`,
            "The practical rule follows from that. Record the Dynamo and package versions each graph was tested on, test the graph library in a trial project before the office moves to a new release, and keep the previous version's graphs for projects that stay behind. The [Revit plugin cost article](/articles/revit-plugin-development-cost/) covers the same .NET 8 change from the add-in side.",
          ],
        },
        {
          id: "graduate",
          heading: "When a graph should become a compiled add-in",
          image: graduate.en,
          paragraphs: [
            "A graph is the right tool while running it by hand, from a shared folder, is acceptable. Three signs say it is time to move on:",
          ],
          list: {
            items: [
              "**Many users.** When the task runs daily across people who never open Dynamo, and copies of the .dyn file have to be kept in step on every machine, distribution alone becomes the problem.",
              "**Speed.** Dynamo runs on Revit's main UI thread, so a heavy graph on a large model leaves Revit unresponsive until it finishes.",
              "**Integration or interface.** The task needs a custom dialog, a connection to an outside system, or a rule enforced every time someone saves, none of which a graph does reliably.",
            ],
          },
          after: [
            "The graph is not wasted when that happens. A graph that has run on real projects for months is the best specification a [Revit plugin development](/revit-plugin-development/) project can start from, because every edge case it survived is already written into it.",
          ],
        },
        {
          id: "build-or-outsource",
          heading: "Build it in-house or bring in outside help",
          paragraphs: [
            "If a script is needed for one project and will never run again, commissioning custom development for it makes no sense, from us or from anyone else. A simple graph built from an existing package, or even doing the task by hand once, is cheaper and faster. **Custom Dynamo script development earns its cost when the same process repeats across many people and many projects.**",
            "One of our own projects followed exactly this pattern: a process that took about two weeks by hand, sometimes closer to a month, came down to roughly 10 minutes once it became an automated tool. What looked like one button from the outside was never built by the button. It was built by the weeks of small decisions behind it, the same decisions nobody has made yet in a demo script.",
            "If someone in the office knows Dynamo and has time to maintain the library, build in-house and use outside help for review or for the graphs that outgrow the canvas. If nobody owns the library, the graphs that break at the next upgrade stay broken, and that is the point to hand their upkeep to someone whose job it is, whether a new hire or a studio that builds [custom digital tools](/products/#digital-tools).",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A Dynamo graph earns its value when it is pointed at a specific, repeated, rule-based task, not when the goal is simply to have some automation. A graph that has been tested on several real models, runs from Dynamo Player without its author, records the versions it depends on, and has a clear line where the add-in begins is the kind that gets built once and keeps working. Anything less is still an experiment, and it gets rebuilt every time its author leaves or Revit upgrades.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "How much does Revit plugin development cost?", href: "/articles/revit-plugin-development-cost/" },
        { label: "A Revit model checker automates QA/QC", href: "/articles/revit-model-checker/" },
        { label: "Choosing a Revit plugin development company", href: "/articles/revit-plugin-development-company/" },
        { label: "Revit plugin development", href: "/revit-plugin-development/" },
        { label: "Custom digital tools", href: "/products/#digital-tools" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk — Play a Script in Dynamo Player", href: PLAYER },
        { label: "The Dynamo Primer — Python and Revit", href: PRIMER },
        { label: "Dynamo BIM — Dynamo on .NET 8", href: NET8 },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is a Dynamo script in Revit?",
          answer:
            "A graph of connected nodes that uses the Revit API to run a specific task inside Revit, so the task no longer has to be done by hand each time. It can range from sorting sheets to checking model quality.",
        },
        {
          question: "Is Dynamo scripting the same as Revit API programming?",
          answer:
            "Not quite. Dynamo is a visual layer over part of the Revit API. For simple, linear logic that layer is enough; for more complex logic, or parts of the API with no ready-made node, a Python node inside the graph or a full add-in becomes necessary.",
        },
        {
          question: "Can people run a Dynamo script without learning Dynamo?",
          answer:
            "Yes. Dynamo Player, on Revit's Manage tab, runs graphs from a shared folder without opening the Dynamo editor and asks for any inputs the graph exposes. The graph has to be built for it, with named inputs and nothing that needs editing inside the canvas.",
        },
        {
          question: "Does a Dynamo script keep working after a Revit upgrade?",
          answer:
            "Not always. Each Revit release ships its own Dynamo version, and a graph that depends on third-party packages can break if a package has not been updated. Revit 2025's move to Dynamo 3.0 on .NET 8 is the recent example. Recording package versions and testing the library before the office upgrades reduces the risk; it does not remove it.",
        },
        {
          question: "When should a Dynamo script become a compiled add-in?",
          answer:
            "When the task runs daily across people who never open Dynamo, when a heavy graph leaves Revit unresponsive on large models, or when the tool needs a custom interface, an outside connection or a rule enforced on every save.",
        },
        {
          question: "Do we need a programmer for Dynamo scripting?",
          answer:
            "For a simple graph used once, no. For a graph reused across many projects that has to hold up against real, messy models, experience with both the Revit API and programming logic makes the result more reliable.",
        },
        {
          question: "What does custom Dynamo script development cost depend on?",
          answer:
            "The complexity of the logic, how many edge cases have to be covered and how much testing against real models is needed, not the number of nodes on screen. A graph that only covers the simple case is cheaper and less reliable in practice.",
        },
        {
          question: "When is custom script development not worth it?",
          answer:
            "When the task is needed once, on one project. A simple graph from an existing package, or doing the task by hand, is cheaper and faster than commissioning custom development.",
        },
      ],
    },
  },
};
