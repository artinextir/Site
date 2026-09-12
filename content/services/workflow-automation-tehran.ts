import type { ServicePage } from "@/content/services/types";

/**
 * The automation service, narrowed to Tehran — and the third page that has to
 * justify saying "Tehran" out loud without repeating the other two.
 *
 * For a plugin, being in the same city buys the workflow: you watch it at the
 * machine. For families it buys the source: you measure the product instead of
 * reconstructing it. For automation it buys the *people*. The thing that sinks
 * an office automation is never the code — it is that nobody agreed who owns
 * step three, and that the staff who have to use it were never in the room.
 * Both of those are settled by being in the building.
 *
 * Naming follows the parent: `اتوماسیون اداری و مدیریتی` is what the buyer
 * calls it and it carries the title, breadcrumb and H1. The cluster term
 * was `اتوماسیون گردش کار تهران` until the owner retired it on 2026-09-11;
 * `هوشمندسازی فرآیند کاری` now sits in the description, the lead and the first H2.
 */
export const workflowAutomationTehran: ServicePage = {
  slug: "workflow-automation-tehran",
  parent: "aec-workflow-automation",
  // Tehran, again. The studio's real base, and still the only city on this
  // site with coordinates, because it is the only one anybody sits in.
  geo: { latitude: 35.6892, longitude: 51.389 },

  en: {
    meta: {
      title: "Office Automation in Tehran, ARTINEXT",
      description:
        "Office and workflow automation, data integration and in-network dashboards for Tehran companies and technical offices, from a studio in the same city.",
    },
    breadcrumb: "Tehran",
    reusedLabels: { demo: "02, See it run", process: "04, Process" },
    hero: {
      eyebrow: "Service · Tehran · In person or remote",
      title: "Office automation in Tehran.",
      lead:
        "Workflow automation, software and data integration and in-network dashboards for Tehran companies and technical offices. The studio is here too, which means the process can be watched where it actually happens, and the people who run it are in the room when it is designed.",
      primary: "Start a project",
      secondary: "See two dashboards",
    },
    frictions: {
      eyebrow: "01, What Tehran offices ask for",
      title: "Three places workflow automation is asked for first",
      lead:
        "Tehran holds the country's largest concentration of technical offices, and the same three requests come out of almost all of them. Which one you're in decides where to start.",
      items: [
        {
          n: "01",
          title: "An approval chain that lives in a messaging app",
          body:
            "A request is raised in one place, approved in another, and recorded in a third, if it is recorded at all. Six months later nobody can show who approved what, and the answer is somewhere in a group chat.",
        },
        {
          n: "02",
          title: "Accounting, projects, and the drive that don't agree",
          body:
            "Each one is correct on its own terms. Between them, a person retypes, so the project's number, the invoice's number and the filed drawing's revision are three separate opinions about the same job.",
        },
        {
          n: "03",
          title: "A status that only exists when the manager asks for it",
          body:
            "Nothing is visible until somebody assembles it, so the assembling happens on demand and takes the afternoon of whoever is nearest. Everyone knows the report is already out of date when it is sent.",
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
    local: {
      eyebrow: "03, What being in Tehran changes",
      title: "Automation fails on people, and the people are here",
      lead:
        "The build itself is the same wherever anyone sits. Four things are genuinely different in the same city, and every one of them is about the people the process runs through rather than the code.",
      items: [
        {
          title: "The process is watched, not described",
          body:
            "What people say the procedure is and what they do at 4pm on a deadline are two different procedures. Sitting in the office for a day catches the second one; a call only ever gets the first.",
        },
        {
          title: "Who owns which step gets settled in a room",
          body:
            "Every flow that crosses three people has a step two of them think they own. That disagreement is older than the automation and it doesn't get resolved in a thread, it gets resolved by everyone being at one table for an hour.",
        },
        {
          title: "It can be installed on your own network",
          body:
            "Most offices here want this running on their own server rather than somewhere else's. Setting it up on the actual machine, with the actual permissions, is an afternoon in the same city and a long remote-access session otherwise.",
        },
        {
          title: "The people who use it are trained by someone in the room",
          body:
            "Automation is abandoned by the staff, not by the managers who bought it. Sitting with the people who will run it the first week is worth more than the documentation, and here, it costs an afternoon.",
        },
      ],
      note: "None of this is a requirement. Plenty of these projects run entirely remote, and the process is identical either way, this is what's available, not what's expected.",
    },
    faq: {
      eyebrow: "05, Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Can you come to our office?",
          a: "Yes, for the stages where it changes the answer, watching the process, the session where step ownership gets agreed, installation and the first week of use. The build itself doesn't improve with anyone in the room, so it isn't billed as if it does.",
        },
        {
          q: "Does any of this require Revit?",
          a: "No. This is the work between your software, whatever that software is, a spreadsheet, an accounting system, a shared drive, a form somebody fills in. Neither dashboard above runs inside an engineering application; both open in a browser. Revit-side automation is its own subject, covered in [the Dynamo piece](/articles/custom-dynamo-script-development/).",
        },
        {
          q: "Do we have to replace the software we already use?",
          a: "Usually not, and we'd argue against it. Replacing a working system is the most expensive way to fix a hand-off. The cheaper answer is almost always to make what you have exchange the record properly.",
        },
        {
          q: "Can it run on our own server?",
          a: "Yes, and for most offices here that is the default rather than the exception. Where it runs is decided in the first stage, because it changes the build, not assumed and discovered later.",
        },
        {
          q: "What does it cost?",
          a: "There's no price list, because two automations that look identical from outside can differ by a factor of ten underneath. Four things move the size of the job, and they're set out on the main office automation page. No estimate is given before the problem is stated in full.",
        },
        {
          q: "Do you only work with Tehran companies?",
          a: "No. The studio is based in Tehran and works remotely with teams anywhere. This page exists because being in the same city changes the first stage and the last one, not because it's a condition.",
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
      audience: "Companies and technical offices in Tehran",
      areaServed: "Tehran, Iran",
    },
  },

  fa: {
    meta: {
      title: "اتوماسیون اداری و مدیریتی در تهران، آرتینکست",
      description:
        "اتوماسیون اداری و مدیریتی در تهران؛ یکپارچه‌سازی نرم‌افزارها و داده‌ها و داشبوردهای درون‌شبکه برای شرکت‌ها و دفاتر فنی، با استودیویی در همان شهر.",
    },
    breadcrumb: "تهران",
    reusedLabels: { demo: "۰۲، ابزارها در عمل", process: "۰۴، فرآیند" },
    hero: {
      eyebrow: "خدمت · تهران · حضوری یا ریموت",
      title: "اتوماسیون اداری و مدیریتی در تهران",
      lead:
        "هوشمندسازی فرآیند کاری، یکپارچه‌سازی نرم‌افزارها و داشبوردهای درون‌شبکه برای شرکت‌ها و دفاتر فنی تهران. استودیو نیز در تهران است، در نتیجه فرآیند در همان محلی که انجام می‌شود بررسی می‌شود و افرادی که آن را پیش می‌برند، در طراحی آن حضور دارند.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱، دفاتر تهران چه می‌خواهند",
      title: "هوشمندسازی فرآیند کاری از کجا شروع می‌شود",
      lead:
        "بیشترین تمرکز دفاتر فنی کشور در تهران است و تقریباً همه‌ی آن‌ها یکی از این سه نیاز را دارند. نوع نیاز شما تعیین می‌کند کار از کجا شروع شود.",
      items: [
        {
          n: "۰۱",
          title: "زنجیره‌ی تأیید در پیام‌رسان",
          body:
            "درخواست در یک‌جا مطرح می‌شود، در جای دیگر تأیید می‌گیرد و در جای سوم ثبت می‌شود، اگر اصلاً ثبت شود. شش ماه بعد مشخص نیست چه کسی چه چیزی را تأیید کرده است، زیرا پاسخ در یک گروه پیام‌رسان باقی مانده است.",
        },
        {
          n: "۰۲",
          title: "مالی، پروژه و درایو، سه نسخه‌ی متفاوت از یک داده",
          body:
            "هرکدام با معیار خود درست‌اند، اما میان آن‌ها یک نفر داده‌ها را دوباره تایپ می‌کند. در نتیجه شماره‌ی پروژه، شماره‌ی فاکتور و نسخه‌ی نقشه‌ی بایگانی‌شده، سه اطلاعات متفاوت درباره‌ی یک کار هستند.",
        },
        {
          n: "۰۳",
          title: "وضعیتی که فقط با پرسش مدیر مشخص می‌شود",
          body:
            "تا زمانی که کسی اطلاعات را جمع‌آوری نکند، وضعیت کار مشخص نیست و این کار هر بار به نزدیک‌ترین فرد سپرده می‌شود و یک بعدازظهر از وقت او را می‌گیرد. گزارش نهایی نیز در زمان ارسال، دیگر به‌روز نیست.",
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
    local: {
      eyebrow: "۰۳، بودن در تهران چه چیزی را عوض می‌کند",
      title: "موفقیت اتوماسیون به افراد بستگی دارد",
      lead:
        "مرحله‌ی ساخت، فارغ از محل استقرار، یکسان است. حضور در یک شهر چهار مورد را تغییر می‌دهد و هر چهار به افرادی مربوط است که کار از آن‌ها عبور می‌کند، نه به کد.",
      items: [
        {
          title: "فرآیند دیده می‌شود، نه تعریف",
          body:
            "رویه‌ای که توضیح داده می‌شود و آنچه ساعت چهار بعدازظهر روز تحویل انجام می‌شود، دو رویه‌ی متفاوت‌اند. یک روز حضور در دفتر، رویه‌ی دوم را نشان می‌دهد، اما تماس تلفنی همیشه رویه‌ی اول را.",
        },
        {
          title: "مالکیت هر مرحله در جلسه‌ی حضوری مشخص می‌شود",
          body:
            "هر روندی که از سه نفر عبور می‌کند، مرحله‌ای دارد که دو نفر خود را مسئول آن می‌دانند. این اختلاف پیش از اتوماسیون وجود داشته و در گروه پیام‌رسان حل نمی‌شود، اما یک ساعت جلسه‌ی حضوری آن را حل می‌کند.",
        },
        {
          title: "روی شبکه‌ی خودتان نصب می‌شود",
          body:
            "بیشتر دفاتر تهران ترجیح می‌دهند سامانه روی سرور خودشان راه‌اندازی شود. نصب روی همان دستگاه و با همان دسترسی‌ها، در یک شهر یک بعدازظهر زمان می‌برد و از راه دور، یک جلسه‌ی طولانی ریموت.",
        },
        {
          title: "آموزش حضوری",
          body:
            "اتوماسیون را کارمندان کنار می‌گذارند، نه مدیری که آن را خریده است. حضور کنار افرادی که در هفته‌ی اول با سامانه کار می‌کنند، از هر راهنمای مکتوبی مؤثرتر است و در تهران، تنها یک بعدازظهر زمان می‌برد.",
        },
      ],
      note: "هیچ‌کدام از این موارد الزامی نیست. بسیاری از این پروژه‌ها کاملاً ریموت پیش می‌روند و فرآیند در هر دو حالت یکسان است؛ حضوری‌بودن یک امکان است، نه یک شرط.",
    },
    faq: {
      eyebrow: "۰۵، پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "می‌توانید به دفتر ما بیایید؟",
          a: "بله، برای مرحله‌هایی که حضور در آن‌ها نتیجه را تغییر می‌دهد، یعنی بررسی فرآیند، جلسه‌ی تعیین مالکیت مراحل، نصب و هفته‌ی اول استفاده. مرحله‌ی ساخت با حضور در دفتر بهتر نمی‌شود، به همین دلیل هزینه‌ی حضوری برای آن در نظر گرفته نمی‌شود.",
        },
        {
          q: "این خدمت به رویت نیاز دارد؟",
          a: "نه. موضوع، کاری است که میان نرم‌افزارهای شما انجام می‌شود، هر نرم‌افزاری که باشد، مانند اکسل، سامانه‌ی مالی، یک درایو مشترک یا فرمی که کسی پر می‌کند. هیچ‌کدام از دو داشبورد بالا داخل نرم‌افزار مهندسی اجرا نمی‌شوند و در مرورگر باز می‌شوند. ط®ظˆط¯ع©ط§ط±ط³ط§ط²غŒ ط¯ط± ط³ظ…طھ ط±ظˆغŒطھ ظ…ظˆط¶ظˆط¹ ط¬ط¯ط§ع¯ط§ظ†ظ‡â€Œط§غŒ ط§ط³طھ ظˆ ط¯ط± [ظ†ظˆط´طھظ‡â€ŒغŒ طھظˆط³ط¹ظ‡ ط§ط³ع©ط±غŒظ¾طھ ط§ط®طھطµط§طµغŒ Dynamo](/articles/custom-dynamo-script-development/) ط¨ط±ط±ط³غŒ ط´ط¯ظ‡ ط§ط³طھ.",
        },
        {
          q: "باید نرم‌افزارهای فعلی را کنار بگذاریم؟",
          a: "معمولاً نه، و پیشنهاد ما نیز همین نیست. جایگزینی سامانه‌ای که کار می‌کند، پرهزینه‌ترین راه برای رفع یک انتقال ناقص داده است. راه‌حل کم‌هزینه‌تر تقریباً همیشه این است که همان سامانه‌های موجود، داده را به‌درستی منتقل کنند.",
        },
        {
          q: "می‌شود روی سرور خودمان اجرا شود؟",
          a: "بله، و برای بیشتر دفاتر تهران حالت پیش‌فرض همین است. محل اجرا در مرحله‌ی اول تعیین می‌شود، زیرا روش ساخت را تغییر می‌دهد.",
        },
        {
          q: "هزینه چقدر است؟",
          a: "فهرست قیمت ثابتی وجود ندارد، زیرا دو اتوماسیون با ظاهر مشابه ممکن است از نظر حجم کار تا ده برابر تفاوت داشته باشند. چهار عامل اندازه‌ی کار را تعیین می‌کنند که در صفحه‌ی اصلی اتوماسیون اداری و مدیریتی توضیح داده شده‌اند. پیش از تعریف کامل مسئله، برآوردی ارائه نمی‌شود.",
        },
        {
          q: "فقط با شرکت‌های تهران کار می‌کنید؟",
          a: "نه. استودیو در تهران مستقر است و با تیم‌ها در هر شهری به‌صورت ریموت کار می‌کند. این صفحه به این دلیل وجود دارد که حضور در یک شهر، مرحله‌ی اول و آخر کار را تغییر می‌دهد، نه اینکه شرط همکاری باشد.",
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
      audience: "شرکت‌ها و دفاتر فنی در تهران",
      areaServed: "تهران، ایران",
    },
  },
};
