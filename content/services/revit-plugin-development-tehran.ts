import type { ServicePage } from "@/content/services/types";

/**
 * Tehran is the one city page where "local" is literally true — the studio is
 * based here. That is the whole reason this page exists separately from
 * `revit-plugin-development`, and it is the only thing it is allowed to claim
 * that the parent page doesn't.
 *
 * So the fourth section is not the parent's pricing panel with a city name
 * dropped into it. It is what actually differs: same room, same working day,
 * same standards conversation everyone in this market is having. A city page
 * that is its parent with a search-replace is a doorway page, and it reads
 * like one.
 */
export const revitPluginDevelopmentTehran: ServicePage = {
  slug: "revit-plugin-development-tehran",
  parent: "revit-plugin-development",
  // Tehran. The studio's real base, and the only city on this site that gets
  // coordinates because it is the only one where anybody is sitting.
  geo: { latitude: 35.6892, longitude: 51.389 },

  en: {
    meta: {
      title: "Revit Plugin Development in Tehran — ARTINEXT",
      description:
        "Custom Revit plugin and add-in development for architecture, structural and MEP offices in Tehran, from workflow analysis to a tool your team uses.",
    },
    breadcrumb: "Tehran",
    reusedLabels: { demo: "02 — See it run", process: "04 — Process" },
    hero: {
      eyebrow: "Service · Tehran · In person or remote",
      title: "Revit plugin development in Tehran.",
      lead:
        "Custom Revit plugins and add-ins for Tehran architecture, structural, and MEP offices. The studio is here too — which means the workflow analysis can happen in your office, at your machines, watching the actual work.",
      primary: "Start a project",
      secondary: "See two running",
    },
    frictions: {
      eyebrow: "01 — What Tehran offices ask for",
      title: "Three needs almost every office has",
      lead:
        "Tehran runs the largest concentration of BIM-capable offices in the country, and the same three problems surface across almost all of them. Which one you're in decides what the tool has to do.",
      items: [
        {
          n: "01",
          title: "Drawings that arrive as CAD and have to become a model",
          body:
            "Consultant sets, municipality submissions, an archive of legacy projects. Someone traces them into Revit by hand, and every trace is a chance to introduce something the drawing never said.",
        },
        {
          n: "02",
          title: "A standard the office wrote but can't enforce",
          body:
            "Naming, parameters, sheet setup — decided years ago, written down somewhere, and checked by whoever happens to open the model. Until it's a test, it's a preference.",
        },
        {
          n: "03",
          title: "Structural output that has to survive the trip to Revit",
          body:
            "ETABS on one side, the drawing set on the other, and a person retyping between them. The discrepancies that come out of that gap are the ones nobody finds until coordination.",
        },
      ],
    },
    local: {
      eyebrow: "03 — Working with a studio in the same city",
      title: "What being in Tehran actually changes",
      lead:
        "Most of this work is done remotely regardless of where anyone sits. Four things are genuinely different when both offices are in the same city, and they are all in the first half of the project.",
      items: [
        {
          title: "Discovery happens at your machines",
          body:
            "The first stage is watching the real workflow, not the documented one. Doing that in the room — at the workstation, with the actual model open — surfaces in an afternoon what a screen-share turns into three calls.",
        },
        {
          title: "No timezone to schedule around",
          body:
            "Same working day, same week. A question that comes up while a tool is being built gets answered the same afternoon rather than becoming tomorrow's blocker.",
        },
        {
          title: "Handover can be in person",
          body:
            "A tool nobody was taught to use is a tool nobody uses. Sitting with the team the first time they run it is worth more than the documentation, and in the same city it costs an afternoon.",
        },
        {
          title: "The same standards conversation",
          body:
            "Tehran offices are working against a shared set of consultant expectations and submission requirements. That context doesn't have to be explained from scratch before the real problem can be discussed.",
        },
      ],
      note: "None of this is a requirement. Plenty of projects run entirely remote, and the process is the same either way — this is what is available, not what is expected.",
    },
    faq: {
      eyebrow: "05 — Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Can you come to our office?",
          a: "Yes, for the stages where it helps — discovery and handover, mostly. The build itself doesn't get better with anyone in the room, so it isn't billed as if it does.",
        },
        {
          q: "Do you build for a specific Revit version?",
          a: "Whichever ones your office actually runs, including more than one at a time. The version range is a scoping question asked in the first stage — supporting three versions is not three times the work, but it isn't free either.",
        },
        {
          q: "Can you work with our existing plugins and templates?",
          a: "Yes, and it's usually the better answer. If something already installed does part of the job, the honest recommendation is to extend or connect it rather than replace it. If a tool doesn't solve the real problem, we don't recommend it — even when building it from scratch would look more impressive.",
        },
        {
          q: "Who owns the code?",
          a: "You do. It's your process encoded — it shouldn't live somewhere you can't reach it. Source and build instructions are handed over.",
        },
        {
          q: "What does it cost?",
          a: "There's no price list, because a plugin isn't priced by its button. Four things move the size of the job, and they're set out on the main Revit plugin development page. No estimate is given before the problem is stated in full.",
        },
        {
          q: "Do you only work with Tehran offices?",
          a: "No. The studio is based in Tehran and works remotely with teams anywhere. This page exists because being in the same city changes the first stage, not because it's a condition.",
        },
      ],
    },
    cta: {
      eyebrow: "06 — Start",
      title: "Tell us the step you'd stop doing by hand",
      lead:
        "Bring the workflow, not the spec. If a plugin is the wrong answer, we'd rather tell you that in the first conversation than at the end of a build.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      notFor:
        "We are not a fit if you want a generic add-on installed without any process review, or an estimate before the problem is stated.",
    },
    schema: {
      serviceType: "Revit plugin development",
      audience: "Architecture, structural, and MEP offices in Tehran",
      areaServed: "Tehran, Iran",
    },
  },

  fa: {
    meta: {
      title: "توسعه پلاگین رویت در تهران — آرتینکست",
      description:
        "ساخت و توسعه پلاگین اختصاصی رویت برای دفاتر معماری، سازه و تأسیسات در تهران؛ استودیویی در همان شهر، از بررسی فرآیند تا ابزاری که تیم واقعاً از آن استفاده می‌کند.",
    },
    breadcrumb: "تهران",
    reusedLabels: { demo: "۰۲ — ابزارها در عمل", process: "۰۴ — فرآیند" },
    hero: {
      eyebrow: "خدمت · تهران · حضوری یا ریموت",
      title: "توسعه پلاگین رویت در تهران",
      lead:
        "ساخت پلاگین و افزونه‌ی اختصاصی رویت برای دفاتر معماری، سازه و تأسیسات تهران، چه آن را توسعه بنامید، چه ساخت یا طراحی. استودیو نیز در تهران است و بررسی فرآیند می‌تواند در دفتر شما و روی همان سیستم‌ها انجام شود.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱ — دفاتر تهران چه می‌خواهند",
      title: "سه نیازی که تقریباً همه‌ی دفاتر دارند",
      lead:
        "بیشترین تمرکز دفاتر مجهز به BIM در کشور در تهران است و در بیشتر آن‌ها همین سه مسئله تکرار می‌شود. مشخص‌کردن مسئله‌ی شما تعیین می‌کند ابزار باید چه کاری انجام دهد.",
      items: [
        {
          n: "۰۱",
          title: "نقشه‌هایی که به‌صورت CAD می‌رسند و باید مدل شوند",
          body:
            "نقشه‌ی مشاور، مدارک شهرداری و آرشیو پروژه‌های قدیمی به‌صورت دستی در رویت ترسیم می‌شوند و هر ترسیم، فرصتی برای ورود خطایی است که در نقشه وجود نداشته است.",
        },
        {
          n: "۰۲",
          title: "استانداردی که دفتر نوشته اما نمی‌تواند اجرا کند",
          body:
            "نام‌گذاری، پارامترها و چیدمان شیت سال‌ها پیش تعیین و مکتوب شده‌اند، اما بررسی آن‌ها به هر فردی که مدل را باز می‌کند سپرده شده است. تا زمانی که این قواعد به‌صورت خودکار تست نشوند، تنها یک توصیه باقی می‌مانند.",
        },
        {
          n: "۰۳",
          title: "خروجی سازه که باید بدون خطا به رویت منتقل شود",
          body:
            "ETABS در یک سو، دفترچه‌ی نقشه در سوی دیگر و یک نفر که داده‌ها را میان آن‌ها دوباره تایپ می‌کند. مغایرت‌هایی که در این مرحله ایجاد می‌شوند، تا مرحله‌ی هماهنگی از دید پنهان می‌مانند.",
        },
      ],
    },
    local: {
      eyebrow: "۰۳ — کار با استودیویی در همان شهر",
      title: "حضور در تهران چه چیزی را تغییر می‌دهد",
      lead:
        "بیشتر این کار، فارغ از محل استقرار تیم‌ها، به‌صورت ریموت انجام می‌شود. وقتی هر دو دفتر در یک شهر باشند، چهار مورد تغییر می‌کند و هر چهار به نیمه‌ی اول پروژه مربوط‌اند.",
      items: [
        {
          title: "بررسی روی سیستم‌های خودتان",
          body:
            "مرحله‌ی اول، بررسی فرآیند واقعی است، نه نسخه‌ی مستندشده‌ی آن. انجام این بررسی در دفتر شما، کنار ورک‌استیشن و با مدل باز، در یک بعدازظهر مواردی را مشخص می‌کند که با اشتراک صفحه سه جلسه زمان می‌برد.",
        },
        {
          title: "بدون اختلاف ساعت",
          body:
            "روز کاری و هفته‌ی کاری یکسان است. پرسشی که در میانه‌ی ساخت مطرح می‌شود، همان روز پاسخ داده می‌شود و کار متوقف نمی‌ماند.",
        },
        {
          title: "تحویل می‌تواند حضوری باشد",
          body:
            "ابزاری که آموزش داده نشود، استفاده نمی‌شود. حضور کنار تیم در اولین اجرا از هر راهنمای مکتوبی مؤثرتر است و در یک شهر، تنها یک بعدازظهر زمان می‌برد.",
        },
        {
          title: "زمینه‌ی مشترک استانداردها",
          body:
            "دفاتر تهران با مجموعه‌ی مشترکی از انتظارات مشاور و الزامات ارائه کار می‌کنند، در نتیجه نیازی به توضیح این زمینه از ابتدا نیست و کار مستقیماً از مسئله‌ی اصلی شروع می‌شود.",
        },
      ],
      note: "هیچ‌کدام از این موارد الزامی نیست. بسیاری از پروژه‌ها کاملاً ریموت پیش می‌روند و فرآیند در هر دو حالت یکسان است؛ حضوری‌بودن یک امکان است، نه یک شرط.",
    },
    faq: {
      eyebrow: "۰۵ — پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "می‌توانید به دفتر ما بیایید؟",
          a: "بله، برای مرحله‌هایی که حضور در آن‌ها مؤثر است، عمدتاً بررسی اولیه و تحویل. مرحله‌ی ساخت با حضور در دفتر بهتر نمی‌شود، به همین دلیل هزینه‌ی حضوری برای آن در نظر گرفته نمی‌شود.",
        },
        {
          q: "برای نسخه‌ی خاصی از رویت می‌سازید؟",
          a: "برای همان نسخه‌هایی که دفتر شما واقعاً با آن‌ها کار می‌کند، حتی اگر هم‌زمان چند نسخه باشد. بازه‌ی نسخه‌ها در مرحله‌ی اول مشخص می‌شود، زیرا پشتیبانی از سه نسخه سه برابر کار نیست، اما هزینه‌ی اضافه دارد.",
        },
        {
          q: "با پلاگین‌ها و تمپلیت‌های فعلی ما کار می‌کنید؟",
          a: "بله، و معمولاً راه‌حل بهتر همین است. اگر افزونه‌ای که از قبل نصب شده بخشی از کار را انجام می‌دهد، پیشنهاد ما توسعه یا اتصال آن است، نه جایگزینی. ابزاری را که مسئله‌ی واقعی را حل نکند پیشنهاد نمی‌دهیم، حتی اگر ساخت از صفر چشمگیرتر به نظر برسد.",
        },
        {
          q: "مالکیت کد با کیست؟",
          a: "با شما. این کد، فرآیند کاری خود شماست و باید کاملاً در اختیار شما باشد. سورس کد و راهنمای ساخت تحویل داده می‌شود.",
        },
        {
          q: "هزینه چقدر است؟",
          a: "فهرست قیمت ثابتی وجود ندارد، زیرا هزینه‌ی پلاگین به تعداد دکمه‌های آن بستگی ندارد. چهار عامل اندازه‌ی کار را تعیین می‌کنند که در صفحه‌ی اصلی توسعه پلاگین رویت توضیح داده شده‌اند. پیش از تعریف کامل مسئله، برآوردی ارائه نمی‌شود.",
        },
        {
          q: "فقط با دفاتر تهران کار می‌کنید؟",
          a: "نه. استودیو در تهران مستقر است و با تیم‌ها در هر شهری به‌صورت ریموت کار می‌کند. این صفحه به این دلیل وجود دارد که حضور در یک شهر، مرحله‌ی اول کار را تغییر می‌دهد، نه اینکه شرط همکاری باشد.",
        },
      ],
    },
    cta: {
      eyebrow: "۰۶ — شروع",
      title: "کدام مرحله را می‌خواهید دیگر به‌صورت دستی انجام ندهید؟",
      lead:
        "از روند کاری‌تان بگویید، کجا زمان از دست می‌رود و کجا خطا ایجاد می‌شود. اگر راه‌حل پلاگین نباشد، همان ابتدا می‌گوییم.",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      notFor:
        "اگر فقط به‌دنبال نصب یک افزونه‌ی پیش‌ساخته هستید یا پیش از تعریف مسئله برآورد قیمت می‌خواهید، احتمالاً جای درستی نیامده‌اید.",
    },
    schema: {
      serviceType: "Revit plugin development",
      audience: "دفاتر معماری، سازه و تأسیسات در تهران",
      areaServed: "تهران، ایران",
    },
  },
};
