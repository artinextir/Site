import type { Localized } from "@/lib/i18n/config";
import type { ArticleImage, ArticlePage } from "@/content/articles/types";

const DIR = "/images/articles/construction-management-dashboard";

const img = (file: string, alt: Localized<string>): Localized<ArticleImage> => ({
  fa: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.fa, width: 1200, height: 627 },
  en: { src: `${DIR}/${file}.webp`, srcSmall: `${DIR}/${file}-640.webp`, srcMedium: `${DIR}/${file}-960.webp`, alt: alt.en, width: 1200, height: 627 },
});

const hero = img("construction-management-dashboard", {
  fa: "مهندسی که نمودارهای یک صفحه‌ی نمایش را در اتاقی کم‌نور بررسی می‌کند، برای طراحی داشبورد مدیریتی",
  en: "An engineer reviewing charts on a monitor in a dim room, for a construction management dashboard",
});
const sources = img("construction-site-data-sources", {
  fa: "ساختمان‌های در حال ساخت و جرثقیل در شب، جایی که داده‌های پروژه تولید می‌شوند",
  en: "Buildings under construction with a crane at night, where a project's data is produced",
});

export const constructionManagementDashboard: ArticlePage = {
  slug: "construction-management-dashboard",
  content: {
    fa: {
      slug: "construction-management-dashboard",
      meta: {
        title: "طراحی داشبورد مدیریتی برای شرکت‌های ساختمانی، آرتینکست",
        description:
          "طراحی داشبورد مدیریتی با تصمیم‌های مدیران شروع می‌شود. شاخص‌ها، منابع داده، اعتمادپذیری اعداد، تقویم شمسی و انتخاب میان Power BI و ساخت اختصاصی را بخوانید.",
      },
      keywords: [
        "طراحی داشبورد مدیریتی",
        "داشبورد عملیاتی سازمانی",
        "داشبورد مدیریت پروژه ساختمانی",
        "شاخص‌های کلیدی عملکرد پروژه‌های ساختمانی",
        "داشبورد مدیریتی برای شرکت‌های ساختمانی",
      ],
      breadcrumb: "طراحی داشبورد مدیریتی",
      category: "اتوماسیون",
      title: "طراحی داشبورد مدیریتی برای شرکت‌های ساختمانی، از تصمیم تا داده",
      leadOpinion:
        "خطرناک‌ترین خطاها پیچیده‌ترین آن‌ها نیستند. داشبورد به‌ندرت به دلیل نمودار یا پایگاه داده اعتبار خود را از دست می‌دهد؛ یک وضعیت که به دو شکل تایپ شده یا یک تاریخ نادرست کافی است.",
      publishedAt: "2026-09-27",
      author: {
        name: "تیم آرتینکست",
        role: "استودیوی سامانه‌های دیجیتال",
        bio: "تیمی که اتوماسیون اداری و مدیریتی، یکپارچه‌سازی داده‌ها و داشبوردهای عملیاتی را برای شرکت‌های ساختمانی و دفاتر فنی طراحی می‌کند.",
        href: "/about/",
      },
      tocHeading: "فهرست مطالب",
      toc: [
        { id: "overview", label: "پاسخ کوتاه" },
        { id: "what-it-is", label: "داشبورد مدیریتی چیست" },
        { id: "decisions-first", label: "شروع از تصمیم‌ها" },
        { id: "kpis", label: "شاخص‌هایی که مدیران نیاز دارند" },
        { id: "sources", label: "منابع واقعی اعداد" },
        { id: "trust", label: "اعتماد به اعداد" },
        { id: "refresh", label: "دوره‌ی به‌روزرسانی" },
        { id: "persian", label: "راست‌به‌چپ، تقویم شمسی و ارقام فارسی" },
        { id: "build-or-buy", label: "Excel، Power BI یا ساخت اختصاصی" },
        { id: "rollout", label: "ساخت مرحله‌ای" },
        { id: "upkeep", label: "نگهداری پس از راه‌اندازی" },
        { id: "conclusion", label: "جمع‌بندی" },
        { id: "faq", label: "پرسش‌های متداول" },
      ],
      intro:
        "طراحی داشبورد مدیریتی برای یک شرکت ساختمانی یعنی ساخت صفحه‌ای که چند عدد محدود را نشان می‌دهد که مدیران بر اساس آن‌ها تصمیم می‌گیرند: هزینه در برابر بودجه، پیشرفت در برابر برنامه‌ی زمانی، وضعیت نقدینگی، تأییدهای در انتظار و ایمنی کارگاه. این اعداد به‌طور خودکار از سامانه‌هایی خوانده می‌شوند که کار در آن‌ها ثبت می‌شود. ارزش داشبورد در نمودارهای آن نیست؛ در این است که کسی پیش از جلسه‌ی هفتگی اعداد را به‌صورت دستی جمع‌آوری نمی‌کند و همه‌ی کسانی که آن را می‌بینند به اعداد آن اعتماد دارند.\n\nبخش دوم دشوارتر از چیزی است که به نظر می‌رسد.\n\nبنیان‌گذار آرتینکست در دبیرستان در آزمونی شرکت کرد که آزمون برنامه‌نویسی معمول نبود، بلکه آزمون رفع خطا بود: کد معیوب، پیدا کردن خطاها، از ۲۰ نمره. بالاترین نمره‌ی کلاس ۱۸ بود و نمره‌ی او ۲۳٫۵ از ۲۴. تنها نمره‌ای که از دست رفت، به دلیل یک غلط املایی بود، نه یک خطای منطقی. **خطرناک‌ترین خطاها پیچیده‌ترین آن‌ها نیستند.** داشبوردها نیز به همین شکل اعتبار خود را از دست می‌دهند. معمولاً مشکل در ابزار نمودار یا پایگاه داده نیست؛ در وضعیتی است که در یک فایل «متوقف» و در فایل دیگر «توقف» ثبت شده است.",
      heroImage: hero.fa,
      sections: [
        {
          id: "what-it-is",
          heading: "داشبورد مدیریتی چیست و چه چیزی نیست",
          paragraphs: [
            "گزارش خوانده می‌شود، اما داشبورد بارها و بارها بررسی می‌شود. گزارش ماهانه یک وضعیت را توضیح می‌دهد، در حالی که داشبورد باید در چند ثانیه نشان دهد کجا به توجه نیاز است. شرکت‌های ساختمانی معمولاً به سه سطح داشبورد نیاز دارند که هرکدام مخاطب و دوره‌ی زمانی خاص خود را دارد:",
          ],
          list: {
            items: [
              "**سطح مدیریت ارشد**: همه‌ی پروژه‌ها در یک صفحه، برای تصمیم درباره‌ی اینکه کدام پروژه این هفته به توجه مدیریت نیاز دارد.",
              "**سطح پروژه**: داشبورد مدیریت پروژه ساختمانی، شامل هزینه، برنامه‌ی زمانی، مدارک و ریسک‌های یک پروژه، برای مدیر همان پروژه.",
              "**سطح عملیات**: کارهای امروز و این هفته، مانند درخواست‌های در انتظار تأیید، مدارک ارسال‌نشده و گزارش‌های روزانه‌ی کارگاه.",
            ],
          },
          after: [
            "داشبورد عملیاتی سازمانی معمولاً از سطح سوم شروع می‌شود، چون داده‌های آن هر روز تولید می‌شوند. داشبورد سطح مدیریت ارشد بر همین داده‌ها استوار است و بدون آن‌ها، فقط خلاصه‌ای از اعدادی است که کسی به‌صورت دستی وارد کرده است.",
          ],
        },
        {
          id: "decisions-first",
          heading: "از تصمیم‌ها شروع کنید، نه از فهرست شاخص‌ها",
          paragraphs: [
            "بیشتر داشبوردها با فهرستی از شاخص‌ها شروع می‌شوند و در نتیجه، صفحه‌ای پر از عدد به دست می‌آید که هیچ تصمیمی را سریع‌تر نمی‌کند. روش مناسب، برعکس است: ابتدا تصمیم‌هایی را بنویسید که مدیران به‌طور منظم می‌گیرند و سپس عددی را که هر تصمیم به آن وابسته است.",
            "چند نمونه از تصمیم‌هایی که در شرکت‌های ساختمانی تکرار می‌شوند:",
          ],
          list: {
            items: [
              "کدام پروژه این هفته به حضور مدیریت نیاز دارد؟",
              "آیا با نیروی فعلی می‌توان مناقصه‌ی بعدی را پذیرفت؟",
              "پیگیری کدام صورت‌وضعیت‌ها در اولویت است؟",
              "کدام تأییدها کار کارگاه را متوقف کرده‌اند؟",
            ],
          },
          after: [
            "برای هر تصمیم سه مورد را مشخص کنید: عددی که تصمیم را پشتیبانی می‌کند، آستانه‌ای که از آن به بعد اقدام لازم است و فردی که تصمیم می‌گیرد. CIFE دانشگاه استنفورد، بر پایه‌ی پایگاه داده‌ی شاخص‌های عملکرد CII از ۱۰۰۰ پروژه، مجموعه‌ای از ۱۸ شاخص کلیدی عملکرد را برای صنعت ساختمان پیشنهاد کرده است. ۱۸ شاخص یک مجموعه‌ی پژوهشی برای کل صنعت است؛ اولین داشبورد یک شرکت به همان چند عددی نیاز دارد که مدیرانش واقعاً بر اساس آن‌ها اقدام می‌کنند.",
          ],
        },
        {
          id: "kpis",
          heading: "شاخص‌های کلیدی عملکرد پروژه‌های ساختمانی",
          paragraphs: [
            "پس از مشخص‌شدن تصمیم‌ها، شاخص‌ها معمولاً در این گروه‌ها قرار می‌گیرند:",
          ],
          list: {
            items: [
              "**هزینه**: هزینه‌ی تعهدشده و انجام‌شده در برابر بودجه، دستورکارها و تغییرات تأییدشده.",
              "**برنامه‌ی زمانی**: پیشرفت برنامه‌ریزی‌شده در برابر پیشرفت واقعی و نقاط کنترلی در معرض تأخیر.",
              "**نقدینگی**: صورت‌وضعیت‌های ارسال‌شده، مبالغ دریافت‌شده و مطالبات معوق.",
              "**منابع انسانی**: تخصیص نیروها به پروژه‌ها و حجم کار هر تیم.",
              "**کنترل مدارک**: RFIهای باز، مدارک در انتظار تأیید و نقشه‌هایی که با تأخیر ارسال شده‌اند.",
              "**ایمنی و کیفیت**: حوادث ثبت‌شده و موارد عدم انطباق باز.",
            ],
          },
          after: [
            "بیشتر این شاخص‌ها پس‌نگر هستند و آنچه را پیش از این رخ داده گزارش می‌کنند. تعداد کمی از آن‌ها پیش‌نگرند. مدارکی که امروز در انتظار تأیید هستند، تأخیر ماه آینده‌ی کارگاه را پیش‌بینی می‌کنند و RFIای که از موعد پاسخ آن گذشته، احتمال یک دستورکار تغییر را نشان می‌دهد. در هر صفحه دست‌کم یک شاخص پیش‌نگر قرار دهید، چون تنها نوع شاخصی است که مدیر هنوز می‌تواند بر اساس آن اقدام کند.",
            "دفاتر مهندسی و طراحی با پیمانکاران تفاوت دارند و راهنماهای عمومی کمتر به این تفاوت اشاره می‌کنند. برای یک دفتر طراحی، مهم‌ترین عدد معمولاً ساعت‌های کارکرد در برابر حق‌الزحمه‌ی هر مرحله است و پس از آن، مدارکی که طبق برنامه ارسال شده‌اند. داشبوردی که برای یک پیمانکار طراحی شده، این دو عدد را نشان نمی‌دهد.",
          ],
        },
        {
          id: "sources",
          heading: "اعداد داشبورد واقعاً از کجا می‌آیند",
          image: sources.fa,
          paragraphs: [
            "بیشتر پروژه‌های داشبورد در این مرحله با مشکل روبه‌رو می‌شوند، نه در مرحله‌ی طراحی نمودارها. در یک شرکت ساختمانی، داده‌ها معمولاً در این منابع پراکنده‌اند:",
          ],
          list: {
            items: [
              "**نرم‌افزار حسابداری**: هزینه‌ها، صورت‌حساب‌ها و دریافتی‌ها.",
              "**سامانه‌ی کارکرد**: ساعت کار هر فرد برای هر پروژه.",
              "**نرم‌افزار برنامه‌ریزی**: فایل‌های MSP یا Primavera با برنامه‌ی زمانی و پیشرفت.",
              "**فایل‌های Excel**: جدول‌های پیگیری که هرکدام را یک نفر نگهداری می‌کند.",
              "**کنترل مدارک**: فهرست مدارک ارسالی، RFIها و وضعیت تأییدها.",
              "**گزارش‌های کارگاه**: گزارش روزانه روی کاغذ، در پیام‌رسان یا در یک فرم.",
              "**مدل‌های BIM**: مقادیر و اسکجوال‌هایی که از مدل‌های Revit استخراج می‌شوند.",
            ],
          },
          after: [
            "مطالعه‌ی Autodesk و FMI که بیش از ۳۹۰۰ متخصص صنعت ساختمان را بررسی کرد، هزینه‌ی داده‌ی نامناسب، یعنی داده‌ی نادرست، ناقص، غیرقابل‌دسترس، ناسازگار یا دیرهنگام، را برای صنعت ساختمان جهان در سال ۲۰۲۰، ۱٫۸۵ تریلیون دلار برآورد کرد. در همان مطالعه، ۳۰ درصد از پاسخ‌دهندگان گفتند بیش از نیمی از داده‌های پروژه‌هایشان نامناسب است.",
            "برای هر عدد داشبورد یک منبع مرجع و یک مالک تعیین کنید و مشخص کنید عدد چگونه خوانده می‌شود: از طریق API، از خروجی منظم یک نرم‌افزار، یا از فرمی که جای یک فایل Excel را می‌گیرد. این همان کاری است که در نوشته‌ی [هوشمندسازی فرآیند کاری در صنعت ساختمان](/articles/aec-workflow-automation/) به‌عنوان پیش‌نیاز هر داشبورد مطرح شده است.",
          ],
        },
        {
          id: "trust",
          heading: "یک عدد نادرست کافی است تا به بقیه‌ی اعداد نیز اعتماد نشود",
          paragraphs: [
            "داشبوردی که برای پروژه‌ای در مرحله‌ی فونداسیون پیشرفت ۱۰۴ درصد نشان دهد، فقط در یک جلسه مورد توجه قرار می‌گیرد. پس از آن، به یک تصویر پس‌زمینه تبدیل می‌شود.",
            "اعتماد به داشبورد از جزئیاتی ساخته می‌شود که در نگاه اول کم‌اهمیت به نظر می‌رسند:",
          ],
          list: {
            items: [
              "**تعریف مکتوب هر شاخص**: «پیشرفت» می‌تواند درصد ساعت‌های صرف‌شده، درصد مدارک ارسال‌شده یا پیشرفت فیزیکی باشد. تعریف باید یکی باشد و در کنار عدد نمایش داده شود.",
              "**واژگان ثابت برای وضعیت‌ها**: فهرست کشویی به‌جای متن آزاد، تا «متوقف» و «توقف» دو وضعیت متفاوت ثبت نشوند.",
              "**یکسانی تاریخ‌ها و واحدها**: یک تقویم، یک قالب تاریخ و یک واحد پول در تمام منابع.",
              "**زمان آخرین به‌روزرسانی**: کنار هر عدد، تا مشخص باشد عدد امروز است یا مربوط به ماه گذشته.",
              "**امکان ردیابی تا منبع**: هر عدد با یک کلیک به سطرهایی برسد که از آن‌ها محاسبه شده است.",
            ],
          },
          after: [
            "مورد آخر از همه مهم‌تر است. وقتی مدیری عددی را باور نمی‌کند و می‌تواند منبع آن را ببیند، یا عدد تأیید می‌شود یا خطای منبع پیدا و اصلاح می‌شود. بدون این امکان، بحث به جلسه‌ی بعد موکول می‌شود و کسی دوباره فایل Excel خود را باز می‌کند.",
          ],
        },
        {
          id: "refresh",
          heading: "اعداد تا چه حد باید به‌روز باشند",
          paragraphs: [
            "«هم‌زمان» یکی از رایج‌ترین درخواست‌ها درباره‌ی داشبوردهاست و همیشه ضروری نیست. دوره‌ی به‌روزرسانی هر عدد باید با دوره‌ی تصمیمی که به آن وابسته است متناسب باشد. تأییدهای در انتظار و گزارش‌های کارگاه ارزش به‌روزرسانی روزانه یا هم‌زمان را دارند. هزینه‌ی پروژه معمولاً هفتگی یا ماهانه بررسی می‌شود و به‌روزرسانی لحظه‌ای آن تصمیمی را تغییر نمی‌دهد.",
            "هر درجه‌ی به‌روزبودن هزینه‌ای در یکپارچه‌سازی دارد. اتصال هم‌زمان به نرم‌افزار حسابداری ممکن است به توسعه‌ی قابل‌توجهی نیاز داشته باشد، در حالی که یک خروجی شبانه همان نتیجه را برای جلسه‌ی هفتگی فراهم می‌کند.",
          ],
        },
        {
          id: "persian",
          heading: "راست‌به‌چپ، تقویم شمسی و ارقام فارسی",
          paragraphs: [
            "بیشتر ابزارهای آماده‌ی هوش تجاری برای زبان‌های چپ‌به‌راست و تقویم میلادی ساخته شده‌اند. برای یک شرکت ایرانی، این موضوع جزئیات ظاهری نیست و بر درستی خود اعداد اثر می‌گذارد:",
          ],
          list: {
            items: [
              "**سال مالی شمسی**: گزارش‌های ماهانه و سالانه باید بر اساس ماه‌های شمسی و سال مالی‌ای که از فروردین شروع می‌شود گروه‌بندی شوند، نه ماه‌های میلادی.",
              "**هفته‌ی کاری**: هفته از شنبه شروع می‌شود و گزارش‌های هفتگی باید همین مرز را رعایت کنند.",
              "**چیدمان راست‌به‌چپ**: جدول‌ها، محور نمودارها و ترتیب ستون‌ها از ابتدا برای راست‌به‌چپ طراحی شوند، نه اینکه نسخه‌ی چپ‌به‌راست قرینه شود.",
              "**ارقام و نام‌های ترکیبی**: ارقام فارسی در نمایش، و نام پروژه‌هایی که بخشی از آن‌ها فارسی و بخشی لاتین است، بدون جابه‌جایی واژه‌ها.",
            ],
          },
          after: [
            "صفحه‌ی [اتوماسیون اداری و مدیریتی](/aec-workflow-automation/) یک داشبورد داخلی را در دو نسخه نشان می‌دهد، یکی برای دفتری فارسی‌زبان با تقویم شمسی و دیگری برای استودیویی انگلیسی‌زبان. ساختار یکسان است، اما مراحل، وضعیت‌ها و نام‌گذاری هر دفتر با دیگری تفاوت دارد.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "Excel، Power BI یا ساخت اختصاصی",
          paragraphs: [
            "انتخاب ابزار پس از مشخص‌شدن تصمیم‌ها و منابع انجام می‌شود و هر گزینه جایگاه خود را دارد:",
          ],
          list: {
            items: [
              "**قالب Excel**: برای یک شرکت کوچک با چند پروژه و یک نفر که داده‌ها را نگهداری می‌کند، کافی است.",
              "**Power BI یا Looker Studio**: زمانی مناسب است که داده‌ها در سامانه‌هایی قرار دارند که این ابزارها به آن‌ها متصل می‌شوند و محدودیت‌های راست‌به‌چپ و تقویم شمسی برای شرکت قابل‌قبول است.",
              "**داشبورد داخلی نرم‌افزار مدیریت پروژه**: اگر همه‌ی اعداد از پیش در یک نرم‌افزار مدیریت پروژه ثبت می‌شوند، از داشبورد همان نرم‌افزار استفاده کنید. برای این کار به ما یا شرکت مشابهی نیاز ندارید.",
              "**توسعه‌ی داشبورد اختصاصی**: زمانی ارزش هزینه‌ی خود را دارد که داده‌ها میان ابزارهای داخلی پراکنده‌اند، راست‌به‌چپ و تقویم شمسی الزامی است، دسترسی‌ها برای هر پروژه متفاوت است، یا کارکنان باید وضعیت‌ها را در همان داشبورد ثبت کنند و فقط بیننده‌ی آن نباشند.",
            ],
          },
          after: [
            "مورد آخر معمولاً عامل تعیین‌کننده است. داشبوردی که فقط نمایش می‌دهد، به ورود داده در جای دیگری وابسته است. داشبوردی که محل ثبت وضعیت‌ها نیز هست، منبع مرجع همان داده‌ها می‌شود و در نتیجه، یک فایل Excel و یک مرحله‌ی دستی حذف می‌شود.",
          ],
        },
        {
          id: "rollout",
          heading: "داشبورد را مرحله‌به‌مرحله بسازید",
          paragraphs: [
            "داشبوردی که همه‌ی صفحه‌های آن هم‌زمان تحویل داده شود، معمولاً با اولین عدد نادرست کنار گذاشته می‌شود. ترتیب مناسب این است:",
          ],
          list: {
            ordered: true,
            items: [
              "یک تصمیم و یک صفحه، برای مدیری که آن تصمیم را می‌گیرد.",
              "اتصال منابع همان اعداد، همراه با تعریف مکتوب و مالک هرکدام.",
              "اجرای موازی با گزارش دستی فعلی به مدت چند هفته و مقایسه‌ی اعداد.",
              "کنار گذاشتن گزارش دستی، پس از آنکه اعداد چند هفته پیاپی با آن یکسان بودند.",
              "افزودن صفحه‌ی بعدی برای تصمیم بعدی.",
            ],
          },
          after: [
            "مرحله‌ی سوم اهمیت زیادی دارد. هر تفاوتی میان داشبورد و گزارش دستی یا خطای داشبورد را آشکار می‌کند یا خطایی را که سال‌ها در گزارش دستی وجود داشته است. هر دو یافته ارزشمندند و هر دو پیش از آنکه کسی بر اساس داشبورد تصمیم بگیرد، پیدا می‌شوند.",
            "داشبورد را در همان جلسه‌ای به کار ببرید که اعداد در آن بررسی می‌شوند. اگر جلسه هنوز با فایل Excel برگزار می‌شود، داشبورد هنوز جایگزین آن نشده است.",
          ],
        },
        {
          id: "upkeep",
          heading: "درستی داشبورد پس از راه‌اندازی بر عهده‌ی چه کسی است",
          paragraphs: [
            "داشبورد در روز تحویل درست است. پس از آن، پروژه‌ای با نوع جدید و مراحلی متفاوت اضافه می‌شود، کد هزینه‌ی تازه‌ای در نرم‌افزار حسابداری تعریف می‌شود و تیم یک کارگاه گزارش روزانه را در قالب دیگری ارسال می‌کند. هیچ‌کدام از این تغییرها خطای آشکاری ایجاد نمی‌کند، اما اعداد به‌تدریج از واقعیت فاصله می‌گیرند.",
            "سه نقش درستی داشبورد را حفظ می‌کنند:",
          ],
          list: {
            items: [
              "**مالکان داده**: یک نفر برای هر منبع، که در صورت نادرست‌بودن اعداد مطلع می‌شود و خطا را در خود منبع اصلاح می‌کند، نه روی داشبورد.",
              "**مالک داشبورد**: فردی در خود شرکت که تصمیم می‌گیرد چه چیزی اضافه شود، چه چیزی کنار گذاشته شود و کدام تعریف‌ها تغییر کنند.",
              "**تیم سازنده**: برای تغییرهایی که به کدنویسی نیاز دارند، مانند افزودن یک سامانه‌ی منبع یا یک قاعده‌ی دسترسی جدید.",
            ],
          },
          after: [
            "یک فهرست کوتاه از تغییرها را در کنار تعریف شاخص‌ها نگه دارید. وقتی مدیری می‌پرسد چرا یک عدد میان دو جلسه تغییر کرده، پاسخ باید یک سطر در همین فهرست باشد، نه یک بعدازظهر جست‌وجو. صفحه‌ای که یک ماه باز نشده را کنار بگذارید. داشبوردی با صفحه‌های کمتر که به همه‌ی آن‌ها اعتماد می‌شود، از داشبوردی با صفحه‌های بیشتر که نیمی از آن‌ها باور نمی‌شوند، مفیدتر است.",
          ],
        },
      ],
      conclusionHeading: "جمع‌بندی",
      conclusion:
        "طراحی داشبورد مدیریتی برای شرکت‌های ساختمانی بیشتر به داده مربوط است تا به نمودار: تصمیم‌ها، منابع، تعریف‌ها، مالک‌ها و راهی برای ردیابی هر عدد تا منبع آن. داشبورد به اندازه‌ی ضعیف‌ترین عدد خود قابل‌اعتماد است و آن عدد معمولاً به دلیل یک جزئیات کوچک نادرست است، نه یک مسئله‌ی پیچیده.",
      internalHeading: "مطالب مرتبط",
      internalLinks: [
        { label: "اتوماسیون اداری و مدیریتی", href: "/aec-workflow-automation/" },
        { label: "هوشمندسازی فرآیند کاری در صنعت ساختمان", href: "/articles/aec-workflow-automation/" },
        { label: "اتوماسیون اداری در تهران", href: "/workflow-automation-tehran/" },
        { label: "دستیار هوش مصنوعی سازمانی", href: "/articles/custom-ai-assistant-for-business/" },
        { label: "خروجی اکسل از اسکجوال رویت", href: "/articles/revit-schedule-to-excel-export/" },
      ],
      externalHeading: "منابع",
      externalLinks: [
        { label: "Autodesk and FMI, better data strategies could save the global construction industry $1.85 trillion", href: "https://www.prnewswire.com/news-releases/study-from-autodesk-and-fmi-finds-better-data-strategies-could-save-the-global-construction-industry-1-85-trillion-301376278.html" },
        { label: "Stanford CIFE, Performance Dashboard for Innovative and Industrialized Construction", href: "https://cife.stanford.edu/performance-dashboard-innovative-and-industrialized-construction" },
      ],
      faqHeading: "پرسش‌های متداول",
      faq: [
        {
          question: "داشبورد مدیریتی برای شرکت ساختمانی چیست؟",
          answer:
            "صفحه‌ای که چند عدد محدود مورد نیاز برای تصمیم‌های مدیریتی، مانند هزینه در برابر بودجه، پیشرفت در برابر برنامه، نقدینگی و تأییدهای در انتظار را به‌طور خودکار از سامانه‌های شرکت می‌خواند و نمایش می‌دهد.",
        },
        {
          question: "یک داشبورد پروژه‌ی ساختمانی چه شاخص‌هایی باید داشته باشد؟",
          answer:
            "شاخص‌هایی که تصمیم‌های منظم مدیران به آن‌ها وابسته است. معمولاً هزینه، برنامه‌ی زمانی، نقدینگی، منابع انسانی، کنترل مدارک و ایمنی. تعداد کم و تعریف روشن مهم‌تر از فهرست کامل است.",
        },
        {
          question: "تفاوت داشبورد پروژه با داشبورد مدیریتی چیست؟",
          answer:
            "داشبورد پروژه جزئیات یک پروژه را برای مدیر همان پروژه نشان می‌دهد. داشبورد مدیریتی همه‌ی پروژه‌ها را در یک صفحه نشان می‌دهد تا مشخص شود کدام پروژه به توجه مدیریت نیاز دارد.",
        },
        {
          question: "آیا می‌توان داشبورد را با Excel یا Power BI ساخت؟",
          answer:
            "بله. Excel برای شرکت‌های کوچک کافی است و Power BI زمانی مناسب است که داده‌ها در سامانه‌های قابل‌اتصال قرار دارند و محدودیت‌های راست‌به‌چپ و تقویم شمسی قابل‌قبول است.",
        },
        {
          question: "آیا داشبورد باید هم‌زمان به‌روز شود؟",
          answer:
            "فقط برای اعدادی که تصمیم‌های روزانه به آن‌ها وابسته است، مانند تأییدهای در انتظار. هزینه و پیشرفت معمولاً هفتگی بررسی می‌شوند و به‌روزرسانی شبانه برای آن‌ها کافی است.",
        },
        {
          question: "آیا داشبورد می‌تواند با تقویم شمسی و زبان فارسی کار کند؟",
          answer:
            "بله، اما باید از ابتدا برای آن طراحی شود: گروه‌بندی بر اساس ماه‌های شمسی، هفته‌ای که از شنبه شروع می‌شود، چیدمان راست‌به‌چپ و ارقام فارسی. قرینه‌کردن یک داشبورد چپ‌به‌راست این نیازها را برآورده نمی‌کند.",
        },
        {
          question: "توسعه‌ی داشبورد اختصاصی چه زمانی ارزش ندارد؟",
          answer:
            "زمانی که همه‌ی اعداد از پیش در یک نرم‌افزار مدیریت پروژه ثبت می‌شوند و داشبورد همان نرم‌افزار نیاز مدیران را برآورده می‌کند. در این حالت از همان داشبورد استفاده کنید.",
        },
      ],
    },
    en: {
      slug: "construction-management-dashboard",
      meta: {
        title: "Management Dashboard for Construction Companies, ARTINEXT",
        description:
          "A management dashboard for construction companies starts with decisions, not KPIs. Which numbers, where they come from, why one wrong figure costs trust, and build vs buy.",
      },
      keywords: [
        "management dashboard for construction companies",
        "operational dashboard development",
        "custom business dashboard development",
        "construction project dashboard",
        "construction KPIs",
      ],
      breadcrumb: "Construction management dashboard",
      category: "Automation",
      title: "A management dashboard for construction companies is only as good as its worst number",
      leadOpinion:
        "The most dangerous bugs aren't the complicated ones. A dashboard rarely loses trust because of its charts or its database. It loses it over one status typed two ways, or one wrong date.",
      publishedAt: "2026-09-27",
      author: {
        name: "ARTINEXT Team",
        role: "Digital Systems Studio",
        bio: "The team that designs office automation, data integration and operational dashboards for construction companies and technical offices.",
        href: "/about/",
      },
      tocHeading: "Contents",
      toc: [
        { id: "overview", label: "The short answer" },
        { id: "what-it-is", label: "What a management dashboard is" },
        { id: "decisions-first", label: "Start with decisions" },
        { id: "kpis", label: "The numbers managers need" },
        { id: "sources", label: "Where the numbers come from" },
        { id: "trust", label: "Trusting the numbers" },
        { id: "refresh", label: "How fresh is fresh enough" },
        { id: "persian", label: "Right-to-left, Jalali, Persian digits" },
        { id: "build-or-buy", label: "Excel, Power BI or custom" },
        { id: "rollout", label: "Build it in stages" },
        { id: "upkeep", label: "Upkeep after launch" },
        { id: "conclusion", label: "Conclusion" },
        { id: "faq", label: "FAQ" },
      ],
      intro:
        "A management dashboard for construction companies is one screen showing the few numbers managers decide on: cost against budget, progress against programme, cash, approvals waiting, site safety. Those numbers are pulled automatically from the systems where the work is recorded. The value isn't the charts. It's that nobody assembles the figures by hand before the Monday meeting, and that everyone looking at them trusts them.\n\nThe second part is harder than it sounds.\n\nIn high school, the founder sat a final exam that wasn't a normal programming test. It was a debugging test: broken code, find the mistakes, graded out of 20. The class high was 18. The founder's score was 23.5 out of a possible 24. The one deduction was a spelling mistake, not a logic error. **The most dangerous bugs aren't the complicated ones.** Dashboards fail the same way. Rarely the chart library, rarely the database. Usually a status recorded as \"On hold\" in one sheet and \"Hold\" in another.",
      heroImage: hero.en,
      sections: [
        {
          id: "what-it-is",
          heading: "What a management dashboard is, and what it isn't",
          paragraphs: [
            "A report gets read. A dashboard gets checked, over and over. A monthly report explains a situation; a dashboard has to show in seconds where attention is needed. Construction companies usually need three levels, each with its own audience and time horizon:",
          ],
          list: {
            items: [
              "**Director level**: every project on one screen, to decide which one needs management attention this week.",
              "**Project level**: the construction project dashboard, with cost, programme, documents and risks for one project, for that project's manager.",
              "**Operations level**: today and this week, such as requests awaiting approval, documents not yet issued, and daily site reports.",
            ],
          },
          after: [
            "Operational dashboard development usually starts at the third level, because that's where data is produced every day. The director's screen rests on the same data. Without it, the director's screen is a summary of numbers someone typed in.",
          ],
        },
        {
          id: "decisions-first",
          heading: "Start with the decisions, not a list of KPIs",
          paragraphs: [
            "Most dashboards start from a list of KPIs and end up as a screen full of numbers that makes no decision faster. Work the other way round: write down the decisions managers make on a regular basis, then the number each one depends on.",
            "A few decisions that come up in almost every construction company:",
          ],
          list: {
            items: [
              "Which project needs a director on site this week?",
              "Can we take on the next tender with the staff we have?",
              "Which invoices should be chased first?",
              "Which approvals are holding up work on site?",
            ],
          },
          after: [
            "For each decision, name three things: the number that supports it, the threshold at which someone acts, and the person who decides. Stanford's CIFE, working from CII's database of performance indicators from 1000 projects, proposed a set of 18 key performance indicators for the industry. Eighteen is a research set for a whole industry. A company's first dashboard needs the handful its managers actually act on.",
          ],
        },
        {
          id: "kpis",
          heading: "The construction KPIs managers usually need",
          paragraphs: [
            "Once the decisions are written down, the numbers tend to fall into these groups:",
          ],
          list: {
            items: [
              "**Cost**: committed and actual cost against budget, variations and approved changes.",
              "**Programme**: planned against actual progress, and milestones at risk.",
              "**Cash**: invoices issued, payments received, amounts overdue.",
              "**People**: staff allocation across projects and each team's workload.",
              "**Document control**: open RFIs, submittals awaiting approval, drawings issued late.",
              "**Safety and quality**: recorded incidents and open non-conformances.",
            ],
          },
          after: [
            "Most of these are lagging numbers: they report what already happened. A few are leading. Submittals awaiting approval today predict a delay on site next month; an RFI open past its due date predicts a variation. Put at least one leading number on every screen, because it's the only kind a manager can still do something about.",
            "Engineering and design offices differ from contractors, and generic guides rarely say so. For a design office, the number that matters most is usually hours spent against the fee for each stage, followed by deliverables issued on schedule. A dashboard designed for a contractor shows neither.",
          ],
        },
        {
          id: "sources",
          heading: "Where the numbers actually come from",
          image: sources.en,
          paragraphs: [
            "This is where most dashboard projects run into trouble, not at the chart design. In a construction company, the data is usually scattered across these places:",
          ],
          list: {
            items: [
              "**Accounting software**: costs, invoices, receipts.",
              "**Timesheets**: hours per person per project.",
              "**Planning software**: MSP or Primavera files holding the programme and progress.",
              "**Excel trackers**, each kept by one person.",
              "**Document control**: transmittals, RFIs, approval status.",
              "**Site reports**: daily reports on paper, in a messaging app, or in a form.",
              "**BIM models**: quantities and schedules extracted from Revit models.",
            ],
          },
          after: [
            "A study by Autodesk and FMI, surveying over 3,900 construction professionals, estimated that bad data, meaning data that is inaccurate, incomplete, inaccessible, inconsistent or untimely, may have cost the global construction industry $1.85 trillion in 2020. In the same study, 30% of respondents said more than half of their project data was bad.",
            "Give every number on the dashboard one source of truth and one owner, and decide how it's read: through an API, from a scheduled export, or from a form that replaces the Excel file. That's the groundwork described in [where AEC workflow automation should start](/articles/aec-workflow-automation/), and it comes before any dashboard.",
          ],
        },
        {
          id: "trust",
          heading: "One wrong number and nobody trusts the rest",
          paragraphs: [
            "A dashboard showing 104% progress on a project still pouring foundations gets one meeting's worth of attention. After that it's a screensaver.",
            "Trust is built from details that look minor at first:",
          ],
          list: {
            items: [
              "**A written definition for every KPI**: \"progress\" can mean hours spent, deliverables issued or physical progress. Pick one and show it next to the number.",
              "**A fixed status vocabulary**: a dropdown instead of free text, so \"On hold\" and \"Hold\" can't become two statuses.",
              "**Consistent dates and units**: one calendar, one date format, one currency across every source.",
              "**A last-updated time** beside each figure, so it's clear whether a number is from today or last month.",
              "**A path back to the source**: every number opens the rows it was calculated from.",
            ],
          },
          after: [
            "The last one matters most. When a manager doubts a number and can see its source, either the number is confirmed or the error in the source is found and fixed. Without that, the argument moves to the next meeting and someone opens their own spreadsheet again.",
          ],
        },
        {
          id: "refresh",
          heading: "How fresh the numbers need to be",
          paragraphs: [
            "\"Real-time\" is one of the most common dashboard requests, and it isn't always needed. Each number should refresh as often as the decision that depends on it. Pending approvals and site reports are worth updating daily or live. Project cost is usually reviewed weekly or monthly, and a live feed of it changes no decision.",
            "Every step towards live data has an integration cost. A real-time connection to the accounting system can take real development work, while a nightly export gives the weekly meeting exactly the same result.",
          ],
        },
        {
          id: "persian",
          heading: "Right-to-left, the Jalali calendar and Persian digits",
          paragraphs: [
            "Most off-the-shelf business intelligence tools are built for left-to-right languages and the Gregorian calendar. For an Iranian company that's not cosmetic. It affects whether the numbers are right:",
          ],
          list: {
            items: [
              "**The Jalali financial year**: monthly and annual figures have to group by Jalali months and a financial year starting in Farvardin, not by Gregorian months.",
              "**The working week** starts on Saturday, and weekly figures have to respect that boundary.",
              "**Right-to-left layout**: tables, chart axes and column order designed right-to-left from the start, not a mirrored left-to-right version.",
              "**Digits and mixed names**: Persian digits on screen, and project names that mix Persian and Latin without the words jumping around.",
            ],
          },
          after: [
            "The [office automation](/aec-workflow-automation/) page shows one internal dashboard built twice, once for a Persian-speaking office on the Jalali calendar and once for an English-speaking studio. The structure carries across. The phases, statuses and naming of each office don't.",
          ],
        },
        {
          id: "build-or-buy",
          heading: "Excel, Power BI, or custom business dashboard development",
          paragraphs: [
            "The tool comes after the decisions and the sources, and each option has its place:",
          ],
          list: {
            items: [
              "**An Excel template** is enough for a small company with a few projects and one person keeping the data.",
              "**Power BI or Looker Studio** fits when the data already sits in systems those tools connect to, and their limits on right-to-left and the Jalali calendar are acceptable.",
              "**The built-in dashboard of your project management software**: if every number is already recorded in one project management system, use its dashboard. You don't need us, or anyone like us, for that.",
              "**A custom dashboard** earns its cost when data is scattered across in-house tools, right-to-left and Jalali are required, permissions differ by project, or staff need to record statuses in the dashboard rather than only look at it.",
            ],
          },
          after: [
            "That last condition usually decides it. A dashboard that only displays depends on data entered somewhere else. A dashboard where statuses are also recorded becomes the source of truth for that data, and a spreadsheet and a manual step disappear with it.",
          ],
        },
        {
          id: "rollout",
          heading: "Build it in stages",
          paragraphs: [
            "A dashboard delivered with every screen at once usually gets dropped at the first wrong number. A better order:",
          ],
          list: {
            ordered: true,
            items: [
              "One decision and one screen, for the manager who makes that decision.",
              "Connect the sources for those numbers, each with a written definition and an owner.",
              "Run it alongside the current manual report for a few weeks and compare the figures.",
              "Retire the manual report once the numbers have matched for several weeks in a row.",
              "Add the next screen for the next decision.",
            ],
          },
          after: [
            "The third step matters more than it looks. Every difference between the dashboard and the manual report exposes either a dashboard error or an error that has sat in the manual report for years. Both findings are worth having, and both turn up before anyone makes a decision from the dashboard.",
            "Use the dashboard in the meeting where the numbers are discussed. If that meeting still runs off a spreadsheet, the dashboard hasn't replaced it yet.",
          ],
        },
        {
          id: "upkeep",
          heading: "Who keeps it right after launch",
          paragraphs: [
            "A dashboard is correct on the day it ships. Then a new type of project arrives with phases the old ones didn't have, the accounting system gets a new cost code, and one site team starts sending its daily report in a different format. None of that breaks the dashboard visibly. The numbers just drift away from reality.",
            "Three roles keep it honest:",
          ],
          list: {
            items: [
              "**Data owners**: one person per source, told when their numbers look wrong and responsible for fixing them at the source, not on the dashboard.",
              "**A dashboard owner**: someone inside the company who decides what gets added, what gets retired and which definitions change.",
              "**Whoever built it**: for changes that need code, such as a new source system or a new permission rule.",
            ],
          },
          after: [
            "Keep a short change log next to the KPI definitions. When a director asks why a number moved between two meetings, the answer should be a line in that log, not an afternoon of detective work. And retire any screen nobody has opened in a month. A dashboard with fewer screens that are all trusted beats one with many that are half-believed.",
          ],
        },
      ],
      conclusionHeading: "Conclusion",
      conclusion:
        "A management dashboard for construction companies is mostly a data project with a chart on top: decisions, sources, definitions, owners, and a way to trace every number back to where it came from. It's only as trustworthy as its worst number, and that number is usually wrong because of a small detail, not a hard problem.",
      internalHeading: "Related reading",
      internalLinks: [
        { label: "Office automation", href: "/aec-workflow-automation/" },
        { label: "Where AEC workflow automation should start", href: "/articles/aec-workflow-automation/" },
        { label: "Office automation in Tehran", href: "/workflow-automation-tehran/" },
        { label: "Custom AI assistant for business", href: "/articles/custom-ai-assistant-for-business/" },
        { label: "Revit schedule to Excel export", href: "/articles/revit-schedule-to-excel-export/" },
      ],
      externalHeading: "Sources",
      externalLinks: [
        { label: "Autodesk and FMI, better data strategies could save the global construction industry $1.85 trillion", href: "https://www.prnewswire.com/news-releases/study-from-autodesk-and-fmi-finds-better-data-strategies-could-save-the-global-construction-industry-1-85-trillion-301376278.html" },
        { label: "Stanford CIFE, Performance Dashboard for Innovative and Industrialized Construction", href: "https://cife.stanford.edu/performance-dashboard-innovative-and-industrialized-construction" },
      ],
      faqHeading: "FAQ",
      faq: [
        {
          question: "What is a management dashboard for a construction company?",
          answer:
            "A screen that reads the few numbers management decisions depend on, such as cost against budget, progress against programme, cash and pending approvals, automatically from the company's systems, and shows them in one place.",
        },
        {
          question: "What KPIs should a construction project dashboard track?",
          answer:
            "The ones managers' regular decisions depend on. Usually cost, programme, cash, people, document control and safety. A short list with clear definitions beats a complete one.",
        },
        {
          question: "What's the difference between a project dashboard and a management dashboard?",
          answer:
            "A project dashboard shows one project in detail for that project's manager. A management dashboard shows every project on one screen, so directors can see which one needs attention.",
        },
        {
          question: "Can we build a construction dashboard in Excel or Power BI?",
          answer:
            "Yes. Excel is enough for small companies, and Power BI fits when the data sits in systems it connects to and its limits on right-to-left and the Jalali calendar are acceptable.",
        },
        {
          question: "Does a construction dashboard need to be real-time?",
          answer:
            "Only for numbers behind daily decisions, such as pending approvals. Cost and progress are usually reviewed weekly, and a nightly refresh is enough for them.",
        },
        {
          question: "Can a dashboard work in Persian with the Jalali calendar?",
          answer:
            "Yes, if it's designed for it from the start: grouping by Jalali months, a week starting on Saturday, right-to-left layout and Persian digits. Mirroring a left-to-right dashboard doesn't meet those needs.",
        },
        {
          question: "When is custom dashboard development not worth it?",
          answer:
            "When every number is already recorded in one project management system and its built-in dashboard covers what managers need. Use that one.",
        },
      ],
    },
  },
};
