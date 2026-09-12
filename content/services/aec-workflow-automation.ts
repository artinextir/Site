import type { ServicePage } from "@/content/services/types";

/**
 * The third and last non-geo service page, and the only one that is not about
 * Revit. That is the whole point of it: the studio's other two service pages
 * answer "we need a tool inside Revit", and this one answers "the work that
 * is killing us happens between the software, not inside any of it."
 *
 * So the copy deliberately never assumes a model. The buyer here runs an
 * office — requests, approvals, spreadsheets, a drive full of drawings, and
 * one person who remembers how it all connects.
 *
 * The evidence slot is `Dashboards` rather than the Revit recordings: a
 * recording of a tool running inside Revit would argue against the page it
 * was sitting on. Two builds of one internal dashboard, and the reader can
 * open either from either locale — the claim of the section is that one
 * structure carries two languages.
 *
 * The page is named for what the buyer calls it — اتوماسیون اداری و مدیریتی /
 * office automation — in the title, the breadcrumb and the H1. The phrase
 * `اتوماسیون گردش کار` was retired on 2026-09-11 (persian-rules skill); the
 * phrase `هوشمندسازی فرآیند کاری` now belongs to the AEC workflow automation
 * article, so this page's meta description leaves it out.
 */
export const aecWorkflowAutomation: ServicePage = {
  slug: "aec-workflow-automation",

  en: {
    meta: {
      title: "Office Automation for AEC Companies and Technical Teams, ARTINEXT",
      description:
        "Office automation, software and data integration, and operational dashboards for AEC companies and technical offices, built from the process you already run.",
    },
    breadcrumb: "Office automation",
    reusedLabels: { demo: "02, See it run", process: "04, Process" },
    hero: {
      eyebrow: "Service · Office automation · Working remotely",
      title: "Office automation, from contract to delivery.",
      lead:
        "Automation, software and data integration, and operational dashboards for AEC companies and technical offices. This isn't software design, it's your own chain of work, the one that repeats every week and depends each time on one person.",
      primary: "Start a project",
      secondary: "See two dashboards",
    },
    frictions: {
      eyebrow: "01, Why automate, and where to start",
      title: "Three signs your process needs automation",
      lead:
        "Not every process is worth automating, and some are fine exactly as they run today. These three say which one is a candidate, and which needs reviewing first, automating second.",
      items: [
        {
          n: "01",
          title: "A hand-off that is really a re-typing",
          body:
            "One system's output is the next system's input, and between them sits a person entering the whole thing again by hand. The result is one number that exists in three files in three versions, and nobody can say which is right.",
        },
        {
          n: "02",
          title: "A process carried by experience, not by documentation",
          body:
            "Everyone knows how the work moves; nowhere is it written down. Until it is, it can't be improved and then automated, and you can't show where the delay is coming from, so the first conversation is about the process, not the software.",
        },
        {
          n: "03",
          title: "Daily reports, already-expired data",
          body:
            "Finding out where the work stands means a person opening four files and explaining the current state. By the time that report is ready the state has changed; the decision gets made against data whose expiry date has passed.",
        },
      ],
    },
    dashboards: {
      eyebrow: "02, Built work",
      title: "One structure, two offices.",
      lead:
        "Project status, documents and correspondence on one page, instead of four files and somebody assembling them. Two builds, each in its own language, open either one from here.",
      regionLabel: "Dashboard builds",
      controls: { prev: "Previous screen", next: "Next screen" },
      note: "Demonstration data. No real project, document or person appears on these screens.",
      sets: [
        {
          key: "fa",
          company: "ARCLINK",
          kicker: "Office automation, in Persian",
          logo: "arclink.webp",
          tab: "Persian build",
          body:
            "An internal dashboard for a Persian-speaking office: sign-in, desk, project list, document archive. Right-to-left from the first line of layout rather than a mirrored afterthought, on the Jalali calendar the office actually works in.\n\nEvery document carries a state and a revision and belongs to a project, so “where is it?” is answered by looking rather than by asking.",
          specs: [
            { k: "Language", v: "Persian · right-to-left" },
            { k: "Screens", v: "Four" },
            { k: "Runs in", v: "Browser" },
          ],
          screens: [
            {
              label: "Sign in",
              caption: "Entry to the office workspace",
              alt: "ARCLINK sign-in screen in Persian, with the workspace form on the right and a project photograph filling the left",
            },
            {
              label: "Desk",
              caption: "Featured project, counters, correspondence and deadlines",
              alt: "ARCLINK Persian dashboard showing a featured project card, active project and document counters, recent correspondence and upcoming deadlines",
            },
            {
              label: "Projects",
              caption: "Every project with its phase, lead and progress",
              alt: "ARCLINK Persian project list with phase, project manager and progress for each project, and a detail panel beside it",
            },
            {
              label: "Documents",
              caption: "Archive by type, revision and review state",
              alt: "ARCLINK Persian document archive listing documents with type, project, registration date and review status",
            },
          ],
        },
        {
          key: "en",
          company: "SABER R&D",
          kicker: "The same idea, an English office",
          logo: "saber.webp",
          tab: "English build",
          body:
            "The same four screens for an English-speaking studio, on a dark theme. The structure carries across; the content does not, each office has its own phases, states and naming.\n\nThat is the case against a dashboard off a shelf. Columns can be renamed; the order the work moves in cannot.",
          specs: [
            { k: "Language", v: "English · left-to-right" },
            { k: "Screens", v: "Four" },
            { k: "Runs in", v: "Browser" },
          ],
          screens: [
            {
              label: "Sign in",
              caption: "Entry to the studio workspace",
              alt: "SABER R&D sign-in screen with the workspace form on a dark ground and a featured project study alongside",
            },
            {
              label: "Desk",
              caption: "Featured project, counters, correspondence and deadlines",
              alt: "SABER R&D dashboard showing a featured project card, active project and open document counters, recent correspondence and a project calendar",
            },
            {
              label: "Projects",
              caption: "Every project with its phase, lead and progress",
              alt: "SABER R&D project list with phase, lead and progress per project, and a detail panel for the selected one",
            },
            {
              label: "Documents",
              caption: "Register by type, revision and review state",
              alt: "SABER R&D document register listing records with project, revision, status and last updated date",
            },
          ],
        },
      ],
    },
    scope: {
      eyebrow: "03, What moves the number",
      title: "The process sets the size of the job, not the button count",
      lead:
        "No price list, because two automations that look identical from the outside can differ by a factor of ten underneath. Four things decide it, and you can assess all four before speaking to anyone.",
      items: [
        {
          title: "How much of the process is documented",
          body:
            "A procedure that exists as a document already has its specification. A procedure that lives in three people's heads has to be written down and agreed first, and that extraction is itself part of the work.",
        },
        {
          title: "Whether the systems have an API",
          body:
            "A system with a documented API is understood in an afternoon of reading. One that exports a file can be worked with. One that has only a screen, and a vendor who doesn't answer, carries a layer of human complexity on top of the technical one.",
        },
        {
          title: "How many people steer the process",
          body:
            "A tool for one person can be simple and uncomplicated. A flow that passes through three has to survive their disagreements about who owns which step, disagreements that existed before the automation and will outlive it.",
        },
        {
          title: "What happens off stage",
          body:
            "Something that runs in front of a person can fail without causing trouble. Something that runs off stage at 2am has to know it failed, say so to someone, and leave the data in a state that can be resumed, or repaired.",
        },
      ],
      note: "No estimate is given before the first two stages. A number produced before the problem is stated in full is a guess wearing a currency symbol.",
    },
    faq: {
      eyebrow: "05, Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Does any of this require Revit?",
          a: "No. This service is about the work between your software, whatever that software is, a spreadsheet, an ERP export, a shared drive, a form somebody fills in. Neither dashboard above runs inside an engineering application; both open in a browser. Revit-side automation is its own subject, covered in [the Dynamo piece](/articles/custom-dynamo-script-development/).",
        },
        {
          q: "Do we have to replace the software we already use?",
          a: "Usually not, and we'd argue against it. Replacing a working system is the most expensive way to fix a hand-off. The cheaper answer is almost always to make what you have exchange the record properly, and that recommendation stands even when a rebuild would be the bigger project for us.",
        },
        {
          q: "What happens when the process changes next year?",
          a: "It will, so the parts that change are separated from the parts that don't. The rules that move, a threshold, an approver, a naming pattern, live somewhere a person can edit without opening code. Anything hard-coded that should have been a setting is a maintenance bill you pay later. Writing the process down before automating it is covered in [where automation should start](/articles/aec-workflow-automation/).",
        },
        {
          q: "Where does it run, and who can see the data?",
          a: "Wherever the data is allowed to be. That's decided in the first stage, not assumed, some offices can only run on their own machines, some already have a server, some have a client contract that settles it for them. The answer changes the build, so it's asked early rather than discovered late.",
        },
        {
          q: "Who owns what gets built?",
          a: "You do. It's your process encoded, it shouldn't live somewhere you can't reach it. Source and build instructions are handed over.",
        },
        {
          q: "Do you work with teams outside Iran?",
          a: "Yes. The studio is based in Iran and works remotely; that's how most projects run regardless of where the team sits.",
        },
      ],
    },
    cta: {
      eyebrow: "06, Start",
      title: "Tell us the step that runs on someone remembering",
      lead:
        "Bring the process, not a platform you've been quoted for. If the honest answer is that the process needs writing down before anything is built, we'd rather say that first.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      notFor:
        "We are not a fit if you want a platform installed without any process review, or an automation of a procedure nobody is willing to write down.",
    },
    schema: {
      serviceType: "Office automation",
      audience: "AEC companies and technical offices",
    },
  },

  fa: {
    meta: {
      title: "اتوماسیون اداری و مدیریتی برای شرکت‌ها و دفاتر فنی، آرتینکست",
      description:
        "اتوماسیون اداری و مدیریتی، یکپارچه‌سازی نرم‌افزارها و داده‌ها و داشبوردهای عملیاتی برای شرکت‌ها و دفاتر فنی، ساخته‌شده برای فرآیندی که همین حالا اجرا می‌کنید.",
    },
    breadcrumb: "اتوماسیون اداری و مدیریتی",
    reusedLabels: { demo: "۰۲، ابزارها در عمل", process: "۰۴، فرآیند" },
    hero: {
      eyebrow: "خدمت · اتوماسیون اداری و مدیریتی · ریموت",
      title: "اتوماسیون اداری و مدیریتی، از قرارداد تا تحویل",
      lead:
        "اتوماسیون و یکپارچه‌سازی نرم‌افزارها و داشبوردهای عملیاتی برای شرکت‌ها و دفاتر فنی. این‌جا حرف از طراحی نرم‌افزار نیست؛ حرف از همان زنجیره‌ی کاری شماست که هر هفته تکرار می‌شود و هر بار به یک نفر وابسته است.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱، چرا اتوماسیون، و از کجا شروع شود",
      title: "سه نشانه که فرآیند شما نیاز به اتوماسیون دارد",
      lead:
        "هر فرآیندی ارزش خودکارشدن ندارد و بعضی در شرایط فعلی خود کافی هستند. این سه نشانه مشخص می‌کنند کدام فرآیند برای اتوماسیون مناسب است و کدام ابتدا باید بررسی شود.",
      items: [
        {
          n: "۰۱",
          title: "کار جابه‌جا نمی‌شود، دوباره تایپ می‌شود",
          body:
            "خروجی یک سامانه، ورودی سامانه‌ی بعدی است و میان آن‌ها یک نفر همه‌چیز را به‌صورت دستی دوباره وارد می‌کند. نتیجه، عددی است که در سه فایل به سه شکل ثبت شده و مشخص نیست کدام درست است.",
        },
        {
          n: "۰۲",
          title: "روند کار تجربه‌محور، نه مستند",
          body:
            "همه می‌دانند کار چگونه پیش می‌رود، اما هیچ‌جا مستند نشده است. تا زمانی که فرآیند مکتوب نشود، نه می‌توان آن را بهینه و سپس خودکار کرد و نه می‌توان نشان داد کندی کار از کجاست. به همین دلیل، اولین گفت‌وگو معمولاً درباره‌ی فرآیند است، نه نرم‌افزار.",
        },
        {
          n: "۰۳",
          title: "گزارش‌های روزانه، نشخوار زمانی",
          body:
            "برای اینکه بدانید کار کجاست، یک نفر باید چهار فایل را باز کند و وضعیت فعلی را توضیح دهد. تا آن گزارش آماده شود وضعیت عوض شده؛ تصمیم بر اساس داده‌ای گرفته می‌شود که تاریخ انقضای آن گذشته است.",
        },
      ],
    },
    dashboards: {
      eyebrow: "۰۲، کار انجام‌شده",
      title: "یک ساختار، دو دفتر",
      lead:
        "وضعیت پروژه‌ها، اسناد و مکاتبات در یک صفحه، به‌جای چهار فایل جداگانه. دو نمونه، هرکدام به زبان خود.",
      regionLabel: "نمونه‌های داشبورد",
      controls: { prev: "صفحه‌ی قبل", next: "صفحه‌ی بعد" },
      note: "داده‌های این تصویرها نمایشی است؛ هیچ پروژه، سند یا نامی در آن‌ها واقعی نیست.",
      sets: [
        {
          key: "fa",
          company: "ARCLINK",
          kicker: "اتوماسیون اداری، فارسی",
          logo: "arclink.webp",
          tab: "نسخه‌ی فارسی",
          body:
            "داشبورد داخلی یک دفتر فنی فارسی‌زبان، شامل ورود، میز کار، فهرست پروژه‌ها و بایگانی اسناد. طراحی از ابتدا راست‌به‌چپ و با تقویم شمسی و اعداد فارسی انجام شده است.\n\nهر سند وضعیت و نسخه‌ی مشخص دارد و به پروژه‌ی خود متصل است، در نتیجه جای هر سند بدون پرسیدن از دیگران مشخص است.",
          specs: [
            { k: "زبان", v: "فارسی · راست‌به‌چپ" },
            { k: "صفحه‌ها", v: "چهار" },
            { k: "اجرا در", v: "مرورگر" },
          ],
          screens: [
            {
              label: "ورود",
              caption: "ورود به فضای کاری دفتر",
              alt: "صفحه‌ی ورود آرک‌لینک به فارسی، با فرم ورود در یک سمت و تصویر پروژه در سمت دیگر",
            },
            {
              label: "میز کار",
              caption: "پروژه‌ی منتخب، شمارنده‌ها، مکاتبات و موعدها",
              alt: "میز کار آرک‌لینک با کارت پروژه‌ی منتخب، شمارنده‌ی پروژه‌های فعال و اسناد، آخرین مکاتبات و موعدهای نزدیک",
            },
            {
              label: "پروژه‌ها",
              caption: "هر پروژه با مرحله، مدیر و میزان پیشرفت",
              alt: "فهرست پروژه‌های آرک‌لینک با مرحله، مدیر پروژه و درصد پیشرفت، و پنل جزئیات در کنار آن",
            },
            {
              label: "اسناد",
              caption: "بایگانی بر اساس نوع، نسخه و وضعیت بررسی",
              alt: "بایگانی اسناد آرک‌لینک با نوع سند، پروژه، تاریخ ثبت و وضعیت بررسی",
            },
          ],
        },
        {
          key: "en",
          company: "SABER R&D",
          kicker: "همان ایده، برای دفتری انگلیسی‌زبان",
          logo: "saber.webp",
          tab: "نسخه‌ی انگلیسی",
          body:
            "همان چهار صفحه برای دفتری انگلیسی‌زبان، با تم تیره. ساختار ثابت می‌ماند، اما محتوا تغییر می‌کند، زیرا هر دفتر مراحل، وضعیت‌ها و نام‌گذاری خود را دارد.\n\nدلیل ناکارآمدی داشبوردهای آماده نیز همین است: نام ستون‌ها قابل‌تغییر است، اما ترتیب پیشرفت کار در آن‌ها ثابت است.",
          specs: [
            { k: "زبان", v: "انگلیسی · چپ‌به‌راست" },
            { k: "صفحه‌ها", v: "چهار" },
            { k: "اجرا در", v: "مرورگر" },
          ],
          screens: [
            {
              label: "ورود",
              caption: "ورود به فضای کاری دفتر",
              alt: "صفحه‌ی ورود سیبر آر اند دی، با فرم ورود روی زمینه‌ی تیره و تصویر پروژه در کنار آن",
            },
            {
              label: "میز کار",
              caption: "پروژه‌ی منتخب، شمارنده‌ها، مکاتبات و موعدها",
              alt: "میز کار سیبر آر اند دی با کارت پروژه‌ی منتخب، شمارنده‌ی پروژه‌ها و اسناد باز، آخرین مکاتبات و تقویم پروژه",
            },
            {
              label: "پروژه‌ها",
              caption: "هر پروژه با مرحله، مدیر و میزان پیشرفت",
              alt: "فهرست پروژه‌های سیبر آر اند دی با مرحله، مسئول و درصد پیشرفت، و پنل جزئیات پروژه‌ی انتخاب‌شده",
            },
            {
              label: "اسناد",
              caption: "دفتر ثبت بر اساس نوع، نسخه و وضعیت بررسی",
              alt: "دفتر ثبت اسناد سیبر آر اند دی با نام پروژه، شماره‌ی نسخه، وضعیت و تاریخ آخرین به‌روزرسانی",
            },
          ],
        },
      ],
    },
    scope: {
      eyebrow: "۰۳، چه چیزی اندازه را تعیین می‌کند",
      title: "اندازه‌ی کار را فرآیند تعیین می‌کند، نه تعداد دکمه‌ها",
      lead:
        "فهرست قیمت ثابتی وجود ندارد، زیرا دو اتوماسیون با ظاهر مشابه ممکن است از نظر حجم کار تا ده برابر تفاوت داشته باشند. چهار عامل این تفاوت را ایجاد می‌کنند و هر چهار را نیز خودتان پیش از هر گفت‌وگویی می‌توانید بسنجید.",
      items: [
        {
          title: "چقدر از فرآیند مستند است",
          body:
            "رویه‌ای که به‌شکل یک سند وجود دارد، یعنی مشخصاتش آماده است. رویه‌ای که در ذهن سه نفر زندگی می‌کند، اول باید مستند و توافق شود و این استخراج، خود بخشی از کار است.",
        },
        {
          title: "سامانه‌ها API دارند یا خیر",
          body:
            "سامانه‌ای با API مستند، با یک بعدازظهر مطالعه قابل‌درک است. سامانه‌ای که خروجی فایل می‌دهد، قابل‌بررسی است. سامانه‌ای که فقط یک صفحه‌ی کاربری دارد و پشتیبانی فروشنده هم در دسترس نیست، یک لایه‌ی پیچیدگی اضافه دارد.",
        },
        {
          title: "هدایت‌کننده‌ی روند چند نفر هستند",
          body:
            "ابزاری برای یک نفر، می‌تواند ساده و بی‌پیچیدگی باشد. روند کاری‌ای که از سه نفر رد می‌شود، باید اختلاف‌نظر آن‌ها درباره‌ی مالکیت هر مرحله را نیز در نظر بگیرد؛ اختلافی که پیش از اتوماسیون وجود داشته و پس از آن هم باقی می‌ماند.",
        },
        {
          title: "در پشت صحنه چه اتفاقی می‌افتد",
          body:
            "کاری که جلوی چشم کاربر اجرا می‌شود، اگر خطا بدهد بلافاصله دیده می‌شود. کاری که در پشت صحنه و ساعت دو بامداد اجرا می‌شود، باید خطا را تشخیص دهد، اطلاع‌رسانی کند و داده را در وضعیتی نگه دارد که بشود ادامه‌اش داد یا ترمیمش کرد.",
        },
      ],
      note: "پیش از دو مرحله‌ی نخست، هیچ برآوردی ارائه نمی‌شود. عددی که پیش از تعریف کامل مسئله اعلام شود، تنها یک حدس است.",
    },
    faq: {
      eyebrow: "۰۵، پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "این خدمت به رویت نیاز دارد؟",
          a: "نه. موضوع این صفحه کاری است که میان نرم‌افزارهای شما انجام می‌شود، هر نرم‌افزاری که باشد، مانند اکسل، خروجی یک سامانه‌ی ERP، یک درایو مشترک یا فرمی که کسی پر می‌کند. هیچ‌کدام از دو داشبورد بالا داخل نرم‌افزار مهندسی اجرا نمی‌شوند و در مرورگر باز می‌شوند. ط®ظˆط¯ع©ط§ط±ط³ط§ط²غŒ ط¯ط± ط³ظ…طھ ط±ظˆغŒطھ ظ…ظˆط¶ظˆط¹ ط¬ط¯ط§ع¯ط§ظ†ظ‡â€Œط§غŒ ط§ط³طھ ظˆ ط¯ط± [ظ†ظˆط´طھظ‡â€ŒغŒ طھظˆط³ط¹ظ‡ ط§ط³ع©ط±غŒظ¾طھ ط§ط®طھطµط§طµغŒ Dynamo](/articles/custom-dynamo-script-development/) ط¨ط±ط±ط³غŒ ط´ط¯ظ‡ ط§ط³طھ.",
        },
        {
          q: "باید نرم‌افزارهای فعلی را کنار بگذاریم؟",
          a: "معمولاً نه، و پیشنهاد ما نیز همین نیست. جایگزینی سامانه‌ای که کار می‌کند، پرهزینه‌ترین راه برای رفع یک انتقال ناقص داده است. راه‌حل کم‌هزینه‌تر تقریباً همیشه این است که همان سامانه‌های موجود، داده را به‌درستی منتقل کنند؛ حتی زمانی که ساخت از نو برای ما پروژه‌ی بزرگ‌تری باشد.",
        },
        {
          q: "اگر سال آینده فرآیند عوض شود چه؟",
          a: "فرآیندها تغییر می‌کنند، به همین دلیل بخش‌های متغیر از بخش‌های ثابت جدا نگه داشته می‌شوند. قواعدی که ممکن است تغییر کنند، مانند یک حد آستانه، یک تأییدکننده یا یک الگوی نام‌گذاری، در تنظیماتی قرار می‌گیرند که بدون بازکردن کد قابل‌ویرایش باشد. هر قاعده‌ای که به‌جای تنظیمات در کد ثابت شود، بعداً هزینه‌ی اضافه ایجاد می‌کند. ظ…ع©طھظˆط¨â€Œع©ط±ط¯ظ† ظپط±ط¢غŒظ†ط¯ ظ¾غŒط´ ط§ط² ط®ظˆط¯ع©ط§ط±ط³ط§ط²غŒطŒ ط¯ط± [ظ†ظˆط´طھظ‡â€ŒغŒ ظ‡ظˆط´ظ…ظ†ط¯ط³ط§ط²غŒ ظپط±ط¢غŒظ†ط¯ ع©ط§ط±غŒ](/articles/aec-workflow-automation/) ط¨ط±ط±ط³غŒ ط´ط¯ظ‡ ط§ط³طھ.",
        },
        {
          q: "کجا اجرا می‌شود و داده کجا می‌ماند؟",
          a: "همان‌جا که داده مجاز به نگهداری است. این موضوع در مرحله‌ی اول تعیین می‌شود؛ بعضی دفاتر فقط روی سیستم‌های خود امکان اجرا دارند، بعضی از قبل سرور دارند و برای بعضی، قرارداد کارفرما تکلیف را مشخص کرده است. پاسخ این پرسش روش ساخت را تغییر می‌دهد، به همین دلیل در ابتدای کار مطرح می‌شود.",
        },
        {
          q: "مالکیت آنچه ساخته می‌شود با کیست؟",
          a: "با شما. این کد، فرآیند کاری خود شماست و باید کاملاً در اختیار شما باشد. سورس کد و راهنمای ساخت تحویل داده می‌شود.",
        },
        {
          q: "با تیم‌های خارج از ایران هم کار می‌کنید؟",
          a: "بله. استودیو در ایران مستقر است و به‌صورت ریموت کار می‌کند. بیشتر پروژه‌ها، فارغ از محل استقرار تیم، به همین شکل پیش می‌روند.",
        },
      ],
    },
    cta: {
      eyebrow: "۰۶، شروع",
      title: "کدام مرحله از کار شما به یک نفر وابسته است؟",
      lead:
        "از فرآیند کاری‌تان بگویید، کجا زمان از دست می‌رود و کجا کار به یک نفر وابسته است. اگر لازم باشد فرآیند پیش از هر ساختی مستند شود، همان ابتدا می‌گوییم.",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      notFor:
        "اگر فقط به‌دنبال نصب یک سامانه‌ی آماده هستید و نمی‌خواهید فرآیندتان بررسی شود، احتمالاً جای درستی نیامده‌اید.",
    },
    schema: {
      serviceType: "Office automation",
      audience: "شرکت‌ها و دفاتر فنی",
    },
  },
};
