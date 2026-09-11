import type { ServicePage } from "@/content/services/types";

/**
 * The non-geo plugin page. No city in the slug, the URL or the copy — it
 * answers the bare, un-qualified search, and the city pages hang off it.
 *
 * Every claim here is either visible in the two product recordings or already
 * stated on the homepage. No client counts, no delivery times, no prices:
 * none of those are published anywhere on this site, and inventing one here
 * to fill out a section would be the first lie on it.
 */
export const revitPluginDevelopment: ServicePage = {
  slug: "revit-plugin-development",

  en: {
    meta: {
      title: "Revit Plugin Development for AEC Teams — ARTINEXT",
      description:
        "Custom Revit plugin and add-in development for architecture, structural, and MEP teams. Built from your actual workflow, not a generic add-on — see two of ours running end to end.",
    },
    breadcrumb: "Revit plugin development",
    reusedLabels: { demo: "02 — See it run", process: "04 — Process" },
    hero: {
      eyebrow: "Service · Custom tools · Working remotely",
      title: "Revit plugin development, built from your workflow.",
      lead:
        "Custom Revit plugins, add-ins and extensions for architecture, structural, and MEP teams. Every tool is studied against how your team actually works before a line of it is written.",
      primary: "Start a project",
      secondary: "See two running",
    },
    frictions: {
      eyebrow: "01 — Why a plugin, and why now",
      title: "The three things a plugin is usually bought to fix",
      lead:
        "Almost every plugin request traces back to one of these. Naming which one you're in decides what the tool has to do — and how much of it you actually need.",
      items: [
        {
          n: "01",
          title: "A step nobody should still be doing by hand",
          body:
            "Tracing linework, renaming, renumbering, copying values between views. Work that is fully determined by rules already in your standard, done by a person from memory, on every project.",
        },
        {
          n: "02",
          title: "Two pieces of software that don't speak",
          body:
            "The structural model, the spreadsheet, the drawing set. Each one is fine alone. Moving between them is a person retyping — which is where the discrepancies come from, and why nobody trusts the numbers.",
        },
        {
          n: "03",
          title: "A rule that only exists in someone's head",
          body:
            "The office standard everyone half-knows and nobody can check. Until it's written as something a machine can test, every model is compliant right up to the moment someone looks.",
        },
      ],
    },
    scope: {
      eyebrow: "03 — What moves the number",
      title: "What a plugin actually costs is decided before it's built",
      lead:
        "There's no price list on this site, because a plugin isn't priced by its button. Four things move the size of the job, and you can estimate all four before talking to anyone.",
      items: [
        {
          title: "How well the rule is already written",
          body:
            "A standard that exists as a document is a specification. A standard that lives in three people's judgement has to be extracted first, and that extraction is the work.",
        },
        {
          title: "How many systems it has to touch",
          body:
            "Inside Revit only is one job. Revit plus a spreadsheet is another. Revit plus a database plus something with a login is a different project, mostly for reasons that have nothing to do with Revit.",
        },
        {
          title: "How many people will run it",
          body:
            "A tool for the one person who requested it can be blunt. A tool for thirty needs to survive being used wrongly, on a model it didn't expect, by someone who wasn't in the kickoff.",
        },
        {
          title: "What has to happen when it fails",
          body:
            "Silence is cheap and useless. Reporting what didn't convert, and why, is the difference between a tool your team trusts and one they check by hand anyway — which means they now do both jobs.",
        },
      ],
      note: "No estimate is given before the first two stages. A number produced before the problem is stated in full is a guess wearing a currency symbol.",
    },
    faq: {
      eyebrow: "05 — Questions",
      title: "Before you write to us",
      items: [
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
          q: "Is Dynamo an option instead of a plugin?",
          a: "Sometimes it's the right one. A graph is faster to build and easier for your team to adjust; compiled code is faster to run, easier to distribute, and doesn't break when someone reorganises a node. Which one fits is decided against how the tool will be used, not by preference.",
        },
        {
          q: "How do we know it works before it's finished?",
          a: "The success measure is written down in stage two, before anything is built, and it has to be testable. A tool that can't be checked against a stated measure hasn't been finished — it's been stopped.",
        },
        {
          q: "Do you work with teams outside Iran?",
          a: "Yes. The studio is based in Iran and works remotely; that's how most projects run regardless of where the team sits.",
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
      audience: "Architecture, structural, and MEP teams",
    },
  },

  fa: {
    meta: {
      title: "توسعه پلاگین رویت برای تیم‌های فنی — آرتینکست",
      description:
        "توسعه پلاگین و افزونه‌ی اختصاصی رویت برای تیم‌های معماری، سازه و تأسیسات، ساخته‌شده برای فرآیند واقعی شما. دو نمونه را از ابتدا تا انتها مشاهده کنید.",
    },
    breadcrumb: "توسعه پلاگین رویت",
    reusedLabels: { demo: "۰۲ — ابزارها در عمل", process: "۰۴ — فرآیند" },
    hero: {
      eyebrow: "خدمت · ابزار اختصاصی · ریموت",
      title: "توسعه پلاگین رویت، بر اساس فرآیند شما",
      lead:
        "ساخت پلاگین، افزونه و اد-آن اختصاصی رویت برای تیم‌های معماری، سازه و تأسیسات. هر ابزار پیش از نوشتن اولین خط کد، بر اساس روند کاری واقعی تیم بررسی می‌شود.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱ — چرا پلاگین، و چرا حالا",
      title: "سه مسئله‌ای که معمولاً با پلاگین حل می‌شوند",
      lead:
        "تقریباً هر درخواست پلاگین به یکی از این سه مسئله مربوط است. مشخص‌کردن مسئله تعیین می‌کند ابزار باید چه کاری انجام دهد و چه بخشی از آن واقعاً لازم است.",
      items: [
        {
          n: "۰۱",
          title: "مرحله‌ای که دیگر نباید دستی انجام شود",
          body:
            "ترسیم روی خطوط، تغییر نام، شماره‌گذاری و انتقال مقادیر میان ویوها؛ کارهایی که قاعده‌ی آن‌ها از پیش در استاندارد شما وجود دارد، اما در هر پروژه به‌صورت دستی و بر اساس حافظه‌ی یک نفر تکرار می‌شوند.",
        },
        {
          n: "۰۲",
          title: "دو نرم‌افزار که با هم ارتباط ندارند",
          body:
            "مدل سازه، فایل اکسل و دفترچه‌ی نقشه هرکدام به‌تنهایی درست کار می‌کنند، اما انتقال داده میان آن‌ها با تایپ دوباره انجام می‌شود و مغایرت‌ها دقیقاً در همین مرحله ایجاد می‌شوند.",
        },
        {
          n: "۰۳",
          title: "قاعده‌ای که فقط در ذهن یک نفر است",
          body:
            "استانداردی که همه تا حدی از آن آگاه‌اند، اما هیچ‌کس امکان بررسی آن را ندارد. تا زمانی که این استاندارد به قواعدی قابل‌بررسی توسط نرم‌افزار تبدیل نشود، هر مدل تنها با نظر شخصی طراح سازگاری دارد.",
        },
      ],
    },
    scope: {
      eyebrow: "۰۳ — چه چیزی اندازه را تعیین می‌کند",
      title: "هزینه‌ی پلاگین پیش از ساخت آن تعیین می‌شود",
      lead:
        "در این سایت فهرست قیمت وجود ندارد، زیرا هزینه‌ی پلاگین به تعداد دکمه‌های آن بستگی ندارد. چهار عامل اندازه‌ی کار را تعیین می‌کنند و هر چهار را نیز خودتان پیش از گفت‌وگو می‌توانید بسنجید.",
      items: [
        {
          title: "اینکه قواعد چقدر تکمیل هستند",
          body:
            "استانداردی که به‌شکل یک سند وجود دارد، یعنی مشخصات آماده است. استانداردی که فقط در ذهن سه نفر وجود دارد، ابتدا باید استخراج شود و این استخراج، خود بخشی از کار است.",
        },
        {
          title: "اینکه با چند سامانه در ارتباط است",
          body:
            "هر نرم‌افزار لایه‌ای از پیچیدگی است. رویت به‌تنهایی یک لایه است، رویت و اکسل دو لایه، رویت و ETABS و اکسل سه لایه. تعریف و ساخت هر لایه، کار را بیشتر می‌کند.",
        },
        {
          title: "اینکه چند نفر آن را اجرا می‌کنند",
          body:
            "ابزاری برای یک نفر، با رفع نیازهای همان یک نفر کارش را انجام داده است. ابزاری برای چند نفر متفاوت، در زمان یکسان و روی کارهای متفاوت، به امنیت، مقاومت و ایده‌پردازی بیشتری نیاز دارد.",
        },
        {
          title: "اینکه در صورت خطا چه اتفاقی باید بیفتد",
          body:
            "ابزاری که خطا را گزارش نکند، ساده‌تر ساخته می‌شود اما کاربردی ندارد. گزارش اینکه چه چیزی تبدیل نشد و به چه دلیل، تفاوت میان ابزاری است که تیم به آن اعتماد می‌کند و ابزاری که به بازبینی دستی نیاز دارد؛ تفاوت میان سکوت سنگ‌انداز و صداقت راه‌انداز.",
        },
      ],
      note: "پیش از دو مرحله‌ی نخست، هیچ برآوردی ارائه نمی‌شود. عددی که پیش از تعریف کامل مسئله اعلام شود، تنها یک حدس است.",
    },
    faq: {
      eyebrow: "۰۵ — پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "برای نسخه‌ی خاصی از رویت می‌سازید؟",
          a: "برای همان نسخه‌هایی که دفتر شما واقعاً با آن‌ها کار می‌کند، حتی اگر هم‌زمان چند نسخه باشد. بازه‌ی نسخه‌ها در مرحله‌ی اول مشخص می‌شود، زیرا پشتیبانی از سه نسخه سه برابر کار نیست، اما هزینه‌ی اضافه دارد.",
        },
        {
          q: "با پلاگین‌ها و تمپلیت‌های فعلی ما کار می‌کنید؟",
          a: "بله، و معمولاً راه‌حل بهتر همین است. اگر ابزاری که از قبل نصب شده بخشی از کار را انجام می‌دهد، پیشنهاد ما توسعه یا اتصال آن است، نه جایگزینی. ابزاری را که مسئله‌ی واقعی را حل نکند پیشنهاد نمی‌دهیم، حتی اگر ساخت از صفر چشمگیرتر به نظر برسد.",
        },
        {
          q: "مالکیت کد با کیست؟",
          a: "با شما. این کد، فرآیند کاری خود شماست و باید کاملاً در اختیار شما باشد. سورس کد و راهنمای ساخت تحویل داده می‌شود.",
        },
        {
          q: "به‌جای پلاگین می‌شود از Dynamo استفاده کرد؟",
          a: "گاهی انتخاب درست همین است. گراف Dynamo سریع‌تر ساخته می‌شود و تیم شما راحت‌تر آن را تغییر می‌دهد، در مقابل کد کامپایل‌شده سریع‌تر اجرا می‌شود، ساده‌تر توزیع می‌شود و با جابه‌جایی یک نود از کار نمی‌افتد. انتخاب بر اساس نحوه‌ی استفاده انجام می‌شود، نه سلیقه.",
        },
        {
          q: "از کجا بدانیم کار می‌کند، پیش از آنکه تمام شود؟",
          a: "معیارهای موفقیت در مرحله‌ی دوم و پیش از ساخت مکتوب می‌شوند و باید قابل‌آزمون باشند. ابزاری که نتوان آن را با معیاری روشن ارزیابی کرد، کامل نشده است.",
        },
        {
          q: "با تیم‌های خارج از ایران هم کار می‌کنید؟",
          a: "بله. استودیو در ایران مستقر است و به‌صورت ریموت کار می‌کند. بیشتر پروژه‌ها، فارغ از محل استقرار تیم، به همین شکل پیش می‌روند.",
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
      audience: "تیم‌های معماری، سازه و تأسیسات",
    },
  },
};
