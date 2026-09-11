import type { ServicePage } from "@/content/services/types";

/**
 * The family service, narrowed to Tehran. Same city as
 * `revit-plugin-development-tehran`, different thing being sold — and that
 * changes what "local" is allowed to mean.
 *
 * For a plugin, being in the same city buys you the workflow: you can sit at
 * the machine and watch the real one. For families it buys you the *source*.
 * The expensive half of a family is almost never the drawing, it is working
 * out what the thing actually is when the only documentation is a brochure —
 * and in the same city that is a visit rather than a reconstruction.
 *
 * That is the only claim this page makes that the parent doesn't, and it is
 * the reason the page exists rather than being a search-replace of it.
 */
export const revitFamilyCreationTehran: ServicePage = {
  slug: "revit-family-creation-tehran",
  parent: "revit-family-creation",
  // Same coordinates as the plugin page: the studio's real base, and still
  // the only city on this site that gets any, because it is the only one
  // where anybody is sitting.
  geo: { latitude: 35.6892, longitude: 51.389 },

  en: {
    meta: {
      title: "Revit Family Creation in Tehran, ARTINEXT",
      description:
        "Custom Revit family creation for manufacturers, architecture and MEP offices in Tehran, from a studio in the same city that measures the product itself.",
    },
    breadcrumb: "Tehran",
    reusedLabels: { demo: "02, See it run", process: "04, Process" },
    hero: {
      eyebrow: "Service · Tehran · In person or remote",
      title: "Revit family creation in Tehran.",
      lead:
        "Parametric families for Tehran manufacturers and design offices, built to your product or your office standard. The studio is here too, which means the source can be measured in a room rather than inferred from a PDF.",
      primary: "Start a project",
      secondary: "See two running",
    },
    frictions: {
      eyebrow: "01, What Tehran offices and manufacturers ask for",
      title: "Three problems that arrive with an existing library",
      lead:
        "Tehran holds the largest concentration of BIM-capable offices in the country, and almost every library here has at least one of these. Which one you have decides whether the answer is new content or an audit.",
      items: [
        {
          n: "01",
          title: "A product that exists in a catalogue and nowhere else",
          body:
            "A specifier can only place what they can find. A product with no family gets substituted for one that has one, and the substitution happens quietly, at the exact stage where nobody is asking the manufacturer anything.",
        },
        {
          n: "02",
          title: "A library assembled from downloads",
          body:
            "Content from four sources, four naming schemes, imported mesh inside half of it. Each file was free; the model that has to open every day is paying for all of them.",
        },
        {
          n: "03",
          title: "Content the consultant won't accept",
          body:
            "It looks right and it schedules empty. Parameters that don't match the reviewer's file, naming that doesn't match the submission, classification missing, so the model gets drawn from and counted by hand.",
        },
      ],
    },
    showcase: {
      eyebrow: "02, Built work",
      title: "Same bones, two skins.",
      lead:
        "A curtain-wall system delivered as two panel types, one company, one set of connection details, two positions on the elevation.",
      body:
        "The frame, the brackets and the anchor detail are identical across both units. What changes is the infill and the head condition, because the two sit in different parts of the façade and answer to different requirements.\n\nThat shared half is the argument for having families built rather than collected. It is shared by construction rather than by coincidence, so a change to the frame is one change, made once, and not a hunt through a library for everything that happened to look similar.",
      specs: [
        { k: "Scope", v: "Two unitized panel types" },
        { k: "Shared", v: "Frame, brackets, anchor detail" },
        { k: "Differs", v: "Infill and head condition" },
      ],
      units: [
        { name: "Transparent glazing panel", caption: "Double-glazed vision unit" },
        { name: "Opaque 3D pyramid panel", caption: "Faceted spandrel, same frame" },
      ],
      detail: {
        label: "ARTINEXT · 3D DETAIL",
        alt: "Three-dimensional detail of the unitized glazed curtain wall corner, showing the mullion, transom and glazing rebate",
        caption: "Ringed corner, at the detail level the client's fabrication drawings work to",
      },
      note: "Drawn from the delivered families themselves, the outlines above are the real geometry, reduced to boundary and crease edges. Nothing here is a stand-in.",
    },
    local: {
      eyebrow: "03, What being in Tehran changes",
      title: "The product is in the same city as the people modelling it",
      lead:
        "Most of this work is done remotely regardless of where anyone sits. Four things are genuinely different when the source is an hour away, and they are all in the half of the job that costs the most.",
      items: [
        {
          title: "The product can be measured, not inferred",
          body:
            "A dimensioned drawing is a specification. A brochure is a reconstruction job, and reconstruction is where the hours go. Being able to go and put a tape on the real unit turns the most expensive stage into an afternoon.",
        },
        {
          title: "The first family gets reviewed in a room",
          body:
            "The fastest way to settle whether content is right is to open it next to the person who knows the product, on their template, and let them point. That review is a meeting here and a fortnight of comments otherwise.",
        },
        {
          title: "No timezone to schedule around",
          body:
            "Same working day, same week. A question about a connection detail gets answered the same afternoon rather than becoming tomorrow's blocker.",
        },
        {
          title: "The same standards conversation",
          body:
            "Tehran offices are working against a shared set of consultant expectations and submission requirements. Naming, parameters and classification land against a context that doesn't have to be explained from scratch first.",
        },
      ],
      note: "None of it is a requirement. Plenty of family work runs entirely on files and calls, and the process is identical either way, this is what is available, not what is expected.",
    },
    faq: {
      eyebrow: "05, Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Can you come to our office or our production line?",
          a: "Yes, for the stages where it changes the answer, establishing what the product actually is, and reviewing the first family against it. The rest doesn't get better with anyone in the room, so it isn't billed as if it does.",
        },
        {
          q: "What do you need from us to start?",
          a: "Whatever actually exists, dimensioned drawings, a CAD file, a spec sheet, or a family that nearly works. The first stage establishes what is specification and what is a guess, because those are two very different jobs and they shouldn't be quoted as one.",
        },
        {
          q: "Can you match our office template and standards?",
          a: "That's the usual case. Naming, shared parameters, subcategories and line weights come from your standard, and where the standard is ambiguous, the ambiguity gets raised rather than silently resolved in a way you find out about later.",
        },
        {
          q: "Which Revit versions do you deliver in?",
          a: "The ones your team and your clients run. Families are delivered in the oldest version in scope so they open forward, the range is agreed in the first stage, since it affects which features can be used at all.",
        },
        {
          q: "What does it cost?",
          a: "There's no price list, because a family is priced by its behaviour rather than its geometry. Four things move the size of the job, and they're set out on the main Revit family creation page. No estimate is given before the problem is stated in full.",
        },
        {
          q: "Do you only work with Tehran companies?",
          a: "No. The studio is based in Tehran and works remotely with teams anywhere. This page exists because being in the same city changes how the source gets established, not because it's a condition.",
        },
      ],
    },
    cta: {
      eyebrow: "06, Start",
      title: "Send the family that keeps breaking",
      lead:
        "Bring the file and the model it has to live in, not a specification of what you think it needs. If your library needs an audit rather than new content, we'd rather say so first.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      notFor:
        "We are not a fit if you want geometry traced from a brochure with no dimensions, or a family count quoted before anyone has looked at the source.",
    },
    schema: {
      serviceType: "Revit family creation",
      audience: "Manufacturers, architecture, and MEP offices in Tehran",
      areaServed: "Tehran, Iran",
    },
  },

  fa: {
    meta: {
      title: "ساخت فمیلی رویت در تهران، آرتینکست",
      description:
        "ساخت و توسعه فمیلی رویت برای تولیدکنندگان و دفاتر معماری و تأسیسات در تهران؛ استودیویی در همان شهر که اندازه‌گیری را روی خود محصول انجام می‌دهد، نه از روی بروشور.",
    },
    breadcrumb: "تهران",
    reusedLabels: { demo: "۰۲، ابزارها در عمل", process: "۰۴، فرآیند" },
    hero: {
      eyebrow: "خدمت · تهران · حضوری یا ریموت",
      title: "ساخت فمیلی رویت در تهران",
      lead:
        "فمیلی‌های پارامتریک برای تولیدکنندگان و دفاتر طراحی تهران، بر اساس محصول یا استاندارد شما، چه آن را ساخت بنامید، چه توسعه یا طراحی. استودیو نیز در تهران است و اندازه‌گیری مستقیماً روی خود محصول انجام می‌شود، نه از روی یک فایل PDF.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱، دفاتر و تولیدکنندگان تهران چه می‌خواهند",
      title: "سه مشکل رایج در کتابخانه‌ی فمیلی دفاتر تهران",
      lead:
        "بیشترین تمرکز دفاتر مجهز به BIM در کشور در تهران است و تقریباً هر کتابخانه‌ای در این شهر دست‌کم یکی از این سه مشکل را دارد. نوع مشکل تعیین می‌کند راه‌حل، محتوای جدید است یا بازبینی.",
      items: [
        {
          n: "۰۱",
          title: "محصول در کاتالوگ هست، در مدل نیست",
          body:
            "طراح تنها محصولی را در مدل قرار می‌دهد که فمیلی آن در دسترس باشد. در نتیجه، محصولی که فمیلی ندارد با محصول دیگری جایگزین می‌شود، آن هم در مرحله‌ای که هنوز با تولیدکننده تماسی گرفته نشده است.",
        },
        {
          n: "۰۲",
          title: "کتابخانه‌ای جمع‌شده از دانلود",
          body:
            "محتوا از چهار منبع، با چهار شیوه‌ی نام‌گذاری و مش واردشده در نیمی از فایل‌ها. هرکدام به‌تنهایی رایگان بوده‌اند، اما هزینه‌ی آن‌ها در سنگینی مدلی پرداخت می‌شود که هر روز باید باز شود.",
        },
        {
          n: "۰۳",
          title: "از دید ظاهر درست، از دید مشاور مردود",
          body:
            "در ویو درست دیده می‌شود، اما در اسکجوال خالی است. پارامترها با فایل بازبین هماهنگ نیستند، نام‌گذاری با الزامات ارائه مطابقت ندارد و طبقه‌بندی وجود ندارد، در نتیجه از مدل فقط نقشه گرفته می‌شود و متره و برآورد به‌صورت دستی انجام می‌شود.",
        },
      ],
    },
    showcase: {
      eyebrow: "۰۲، کار انجام‌شده",
      title: "استخوان‌بندی یکسان، با پوششی متفاوت",
      lead:
        "یک سیستم کرتین‌وال که به‌شکل دو نوع پنل تحویل شد، برای یک شرکت، با یک مجموعه جزئیات اتصال و دو جایگاه متفاوت روی نما.",
      body:
        "قاب، براکت و جزئیات اتصال در هر دو واحد یکسان است و تفاوت آن‌ها در پوشش و وضعیت سر پنل است، زیرا در قسمت‌های متفاوتی از نما قرار می‌گیرند.\n\nهمین بخش مشترک، دلیل ساخت فمیلی به‌جای جمع‌آوری آن است: هر دو بر اساس یک ساختار واحد ساخته شده‌اند و هر تغییر در قاب، تنها یک‌بار انجام می‌شود.",
      specs: [
        { k: "دامنه", v: "دو نوع پنل یونیتایز" },
        { k: "مشترک", v: "قاب، براکت، جزئیات اتصال" },
        { k: "متفاوت", v: "پوشش و وضعیت سر پنل" },
      ],
      units: [
        { name: "پنل شیشه‌ای دوجداره", caption: "واحد دیددار، با شیشه دوجداره" },
        { name: "پنل نمای سه‌بعدی کدر", caption: "پنل سه‌بعدی نما، همان اتصالات" },
      ],
      detail: {
        label: "ARTINEXT · 3D DETAIL",
        alt: "جزئیات سه‌بعدی گوشه‌ی کرتین‌وال یونیتایز شیشه‌ای، شامل مالیون، ترنزوم و نشیمن شیشه",
        caption: "گوشه‌ای که با حلقه مشخص شده، در سطح جزئیات نقشه‌های ساخت کارفرما",
      },
      note: "این خطوط مستقیماً از فمیلی‌های تحویل‌داده‌شده استخراج شده‌اند و هندسه‌ی واقعی را تا لبه‌های مرزی و شکست نشان می‌دهند.",
    },
    local: {
      eyebrow: "۰۳، بودن در تهران چه چیزی را عوض می‌کند",
      title: "محصول در همان شهری است که مدل می‌شود",
      lead:
        "بیشتر این کار، فارغ از محل استقرار تیم‌ها، به‌صورت ریموت انجام می‌شود. وقتی منبع تنها یک ساعت با شما فاصله دارد، چهار مورد تغییر می‌کند و هر چهار به پرهزینه‌ترین بخش کار مربوط‌اند.",
      items: [
        {
          title: "محصول اندازه گرفته می‌شود، نه حدس زده",
          body:
            "نقشه‌ی اندازه‌گذاری‌شده یعنی مشخصات آماده است، اما بروشور یعنی بازسازی و ساعت‌ها زمان. وقتی اندازه‌گیری مستقیماً روی خود واحد انجام شود، پرهزینه‌ترین مرحله به یک بعدازظهر کاهش می‌یابد.",
        },
        {
          title: "اولین فمیلی حضوری بازبینی می‌شود",
          body:
            "سریع‌ترین راه برای اطمینان از درستی محتوا، بازکردن آن روی تمپلیت شما و در کنار فردی است که محصول را می‌شناسد. این بازبینی در تهران یک جلسه است و از راه دور، دو هفته رفت‌وبرگشت کامنت.",
        },
        {
          title: "بدون اختلاف ساعت",
          body:
            "روز کاری و هفته‌ی کاری یکسان است. پرسش درباره‌ی یک جزئیات اتصال همان روز پاسخ داده می‌شود و کار متوقف نمی‌ماند.",
        },
        {
          title: "زمینه‌ی مشترک استانداردهای تهران",
          body:
            "دفاتر تهران با مجموعه‌ی مشترکی از انتظارات مشاور و الزامات ارائه کار می‌کنند. نام‌گذاری، پارامترها و طبقه‌بندی بر اساس همین زمینه تعیین می‌شوند و نیازی به توضیح آن از ابتدا نیست.",
        },
      ],
      note: "هیچ‌کدام از این موارد الزامی نیست. بسیاری از کارهای فمیلی کاملاً از طریق فایل و تماس پیش می‌روند و فرآیند در هر دو حالت یکسان است؛ حضوری‌بودن یک امکان است، نه یک شرط.",
    },
    faq: {
      eyebrow: "۰۵، پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "می‌توانید به دفتر یا خط تولید ما بیایید؟",
          a: "بله، برای مرحله‌هایی که حضور در آن‌ها نتیجه را تغییر می‌دهد، یعنی شناخت دقیق محصول و بازبینی اولین فمیلی در کنار خود محصول. سایر مراحل با حضور در محل بهتر نمی‌شوند، به همین دلیل هزینه‌ی حضوری برای آن‌ها در نظر گرفته نمی‌شود.",
        },
        {
          q: "برای شروع چه چیزی لازم دارید؟",
          a: "هر آنچه در دسترس است، مانند نقشه‌ی اندازه‌گذاری‌شده، فایل CAD، برگه‌ی مشخصات یا فمیلی‌ای که تا حدی کار می‌کند. مرحله‌ی اول مشخص می‌کند چه بخشی مشخصات قطعی است و چه بخشی حدس، زیرا این دو، کارهای بسیار متفاوتی هستند و هزینه‌ی جداگانه دارند.",
        },
        {
          q: "با تمپلیت و استاندارد دفتر ما هماهنگ می‌شوید؟",
          a: "حالت معمول همین است. نام‌گذاری، پارامترهای مشترک، ساب‌کتگوری‌ها و ضخامت خطوط بر اساس استاندارد شما تعیین می‌شوند و هرجا استاندارد ابهام داشته باشد، پیش از ادامه‌ی کار با شما مطرح می‌شود.",
        },
        {
          q: "تحویل در کدام نسخه‌های رویت است؟",
          a: "همان نسخه‌هایی که تیم شما و کارفرمایانتان با آن‌ها کار می‌کنند. فمیلی‌ها در قدیمی‌ترین نسخه‌ی مورد توافق تحویل می‌شوند تا در نسخه‌های جدیدتر نیز باز شوند. این بازه در مرحله‌ی اول تعیین می‌شود، زیرا مشخص می‌کند کدام قابلیت‌ها قابل‌استفاده‌اند.",
        },
        {
          q: "هزینه چقدر است؟",
          a: "فهرست قیمت ثابتی وجود ندارد، زیرا هزینه‌ی فمیلی را عملکرد آن تعیین می‌کند، نه هندسه‌ی آن. چهار عامل اندازه‌ی کار را تعیین می‌کنند که در صفحه‌ی اصلی ساخت فمیلی رویت توضیح داده شده‌اند. پیش از تعریف کامل مسئله، برآوردی ارائه نمی‌شود.",
        },
        {
          q: "فقط با شرکت‌های تهران کار می‌کنید؟",
          a: "نه. استودیو در تهران مستقر است و با تیم‌ها در هر شهری به‌صورت ریموت کار می‌کند. این صفحه به این دلیل وجود دارد که حضور در یک شهر، روش دسترسی به منبع را تغییر می‌دهد، نه اینکه شرط همکاری باشد.",
        },
      ],
    },
    cta: {
      eyebrow: "۰۶، شروع",
      title: "چه جزئیاتی برای کار شما لازم است؟",
      lead:
        "فمیلی، مدل یا خروجی‌ای را که داده باید در آن استفاده شود با ما در میان بگذارید. اگر کتابخانه‌ی شما به‌جای محتوای جدید به بازبینی نیاز داشته باشد، همان ابتدا می‌گوییم.",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      notFor:
        "اگر فقط به‌دنبال ترسیم هندسه از روی بروشور بدون اندازه هستید یا پیش از بررسی منبع، قیمت هر فمیلی را می‌خواهید، احتمالاً جای درستی نیامده‌اید.",
    },
    schema: {
      serviceType: "Revit family creation",
      audience: "تولیدکنندگان و دفاتر معماری و تأسیسات در تهران",
      areaServed: "تهران، ایران",
    },
  },
};
