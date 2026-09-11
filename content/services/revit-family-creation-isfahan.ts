import type { ServicePage } from "@/content/services/types";

/**
 * The first city page for a city nobody sits in.
 *
 * The Tehran pages get to say "we are here"; this one does not, and pretending
 * otherwise is what makes a doorway page. So `local` opens by stating that the
 * studio is in Tehran, and then argues the two things that are actually true
 * of Isfahan: the source has to be established without a visit — which is a
 * method, not a shrug — and a manufacturer here is selling into projects
 * modelled somewhere else, which is precisely what a family is for.
 *
 * No `geo` block. Tehran has coordinates because somebody is sitting at them.
 * `areaServed` is the honest maximum for a page like this.
 */
export const revitFamilyCreationIsfahan: ServicePage = {
  slug: "revit-family-creation-isfahan",
  parent: "revit-family-creation",

  en: {
    meta: {
      title: "Revit Family Creation for Isfahan, ARTINEXT",
      description:
        "Custom Revit family creation and development for manufacturers, architecture, and MEP offices working with Isfahan. Delivered fully remote from Tehran, with a measured method for establishing the source when nobody can visit.",
    },
    breadcrumb: "Isfahan",
    reusedLabels: { demo: "02, See it run", process: "04, Process" },
    hero: {
      eyebrow: "Service · Isfahan · Working remotely",
      title: "Revit family creation for Isfahan.",
      lead:
        "Parametric families for Isfahan manufacturers and design offices, built to your product or your office standard. The studio is in Tehran and this work runs remote, which changes how the source gets established, and nothing else.",
      primary: "Start a project",
      secondary: "See two running",
    },
    frictions: {
      eyebrow: "01, What Isfahan manufacturers and offices ask for",
      title: "Three problems that arrive with an existing library",
      lead:
        "Isfahan makes things, stone, metalwork, tile, façade and fit-out systems, that get specified in models drawn elsewhere. Almost every library here has at least one of these three.",
      items: [
        {
          n: "01",
          title: "A product that exists in a catalogue and nowhere else",
          body:
            "A specifier can only place what they can find. A product with no family gets substituted for one that has one, and the substitution happens quietly, in an office that never calls to ask.",
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
        "The frame, the brackets and the anchor detail are identical across both units. What changes is the infill and the head condition, because the two sit in different parts of the façade.\n\nThis one was built from drawings and a specification rather than from a visit, which is the ordinary case: what the first stage establishes is which dimensions are given and which are being inferred, because those two are different jobs.",
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
      eyebrow: "03, Working with Isfahan from Tehran",
      title: "Remote, and specific about what that means",
      lead:
        "The studio is in Tehran. Rather than imply otherwise, here is what remote actually costs, what replaces the site visit, and what is genuinely easier because both ends are in the same country.",
      items: [
        {
          title: "No office in Isfahan, and no pretending there is",
          body:
            "A trip is possible where it changes the answer, and it is priced as a trip. Everything else, drawings, review, revisions, handover, runs on files and calls, which is how most family work runs anyway, including for offices down the road from us.",
        },
        {
          title: "A measuring sheet replaces the site visit",
          body:
            "When nobody can put a tape on the product, we send exactly what to measure and photograph, which faces, which datum, which joint, instead of asking for “dimensions”. That sheet is the difference between a specification and a reconstruction.",
        },
        {
          title: "Same country, same week, same submission rules",
          body:
            "No timezone, no translation layer, and the same consultant expectations and submission requirements on both ends. Naming, parameters and classification land against a context that doesn't have to be explained first.",
        },
        {
          title: "Your product gets modelled where it gets specified",
          body:
            "Isfahan manufactures for projects drawn in other cities. A family is how the product travels into those models, and content that behaves is what keeps it from being swapped for whatever the designer could find.",
        },
      ],
      note: "The process is identical to the one on the parent page. This section is about what is available locally, not a different way of working.",
    },
    faq: {
      eyebrow: "05, Questions",
      title: "Before you write to us",
      items: [
        {
          q: "Do you have an office in Isfahan?",
          a: "No. The studio is in Tehran and this work is delivered remotely. We'd rather say that plainly than let a page imply a local presence that doesn't exist, and a visit is possible for the stages where it changes the answer.",
        },
        {
          q: "What do you need from us to start?",
          a: "Whatever actually exists, dimensioned drawings, a CAD file, a spec sheet, or a family that nearly works. The first stage establishes what is specification and what is a guess, because those are two very different jobs and they shouldn't be quoted as one.",
        },
        {
          q: "What if nobody can measure the product for us?",
          a: "Then it's a reconstruction, and it gets scoped as one. What we won't do is model from an undimensioned brochure and hand it over as if the dimensions were given, the family would look finished and be wrong, which is worse than not having it.",
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
      audience: "Manufacturers, architecture, and MEP offices working with Isfahan",
      areaServed: "Isfahan, Iran",
    },
  },

  fa: {
    meta: {
      title: "ساخت فمیلی رویت برای اصفهان، آرتینکست",
      description:
        "توسعه فمیلی رویت اصفهان برای تولیدکنندگان و دفاتر معماری و تأسیسات. کار به‌صورت دورکار از تهران انجام می‌شود، با روشی مشخص برای به‌دست‌آوردن منبع وقتی کسی نمی‌تواند از نزدیک ببیندش.",
    },
    breadcrumb: "اصفهان",
    reusedLabels: { demo: "۰۲، عملکرد", process: "۰۴، فرآیند" },
    hero: {
      eyebrow: "خدمت · اصفهان · دورکار",
      title: "ساخت فمیلی رویت برای اصفهان",
      lead:
        "فمیلی پارامتریک برای تولیدکنندگان و دفاتر طراحی اصفهان، بر پایه‌ی محصول یا استاندارد خودتان، چه اسمش را ساخت بگذارید، چه توسعه، چه طراحی. استودیو در تهران است و این کار دورکار پیش می‌رود؛ این فقط نحوه‌ی به‌دست‌آوردن منبع را عوض می‌کند، نه چیز دیگری را.",
      primary: "شروع پروژه",
      secondary: "دو نمونه را ببینید",
    },
    frictions: {
      eyebrow: "۰۱، تولیدکنندگان و دفاتر اصفهان چه می‌خواهند",
      title: "سه مشکلی که با کتابخانه‌ی فمیلی دفاتر اصفهان می‌آید",
      lead:
        "اصفهان تولید می‌کند، سنگ، فلز، کاشی، سیستم‌های نما و نازک‌کاری، و این محصولات در مدل‌هایی مشخص می‌شوند که جای دیگری ترسیم شده‌اند. تقریباً هر کتابخانه‌ای این‌جا دست‌کم یکی از این سه را دارد.",
      items: [
        {
          n: "۰۱",
          title: "محصول در کاتالوگ هست، در مدل نیست",
          body:
            "طراح فقط چیزی را جای‌گذاری می‌کند که پیدایش کند. محصولی که فمیلی ندارد، جایش را به محصولی می‌دهد که دارد، و این جایگزینی بی‌سروصدا اتفاق می‌افتد، در دفتری که هیچ‌وقت زنگ نمی‌زند بپرسد.",
        },
        {
          n: "۰۲",
          title: "کتابخانه‌ای جمع‌شده از دانلود",
          body:
            "محتوا از چهار منبع، با چهار شیوه‌ی نام‌گذاری، و مش واردشده در نیمی از فایل‌ها. تک‌تکشان رایگان بودند؛ هزینه‌اش را مدلی می‌دهد که هر روز باید باز شود.",
        },
        {
          n: "۰۳",
          title: "از دید ظاهر درست، از دید مشاور مردود",
          body:
            "در ویو درست دیده می‌شود و در جدول خالی است. پارامترها با فایل بازبین جور نیست، نام‌گذاری با الزامات ارائه نمی‌خواند، طبقه‌بندی ندارد، پس از مدل ترسیم می‌گیرند و متره را دستی انجام می‌دهند.",
        },
      ],
    },
    showcase: {
      eyebrow: "۰۲، کار انجام‌شده",
      title: "استخوان‌بندی یکسان، با پوششی متفاوت",
      lead:
        "یک سیستم کرتین‌وال که به‌شکل دو نوع پنل تحویل شد، یک شرکت، یک مجموعه جزئیات اتصال، دو جایگاه روی نما.",
      body:
        "قاب، براکت و جزئیات اتصال در هر دو واحد یکسان است. آنچه فرق می‌کند پوشش و وضعیت سر پنل است، چون این دو در قسمت‌های متفاوتی از نما می‌نشینند.\n\nاین کار هم از روی نقشه ساخته شد، نه بازدید. مرحله‌ی اول روشن می‌کند کدام اندازه داده شده و کدام حدس زده می‌شود؛ این دو، دو کار متفاوت‌اند.",
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
        caption: "همان گوشه‌ای که حلقه نشانش می‌دهد، در سطح جزئیاتی که نقشه‌های ساخت کارفرما با آن کار می‌کند",
      },
      note: "این خطوط از خود فمیلی‌های تحویل‌داده‌شده بیرون کشیده شده‌اند، هندسه‌ی واقعی، تا لبه‌های مرزی و شکست. هیچ‌چیز این‌جا جایگزین نمایشی نیست.",
    },
    local: {
      eyebrow: "۰۳، کار با اصفهان، از تهران",
      title: "دورکار، و مشخص درباره‌ی اینکه یعنی چه",
      lead:
        "استودیو در تهران است. به‌جای اینکه طور دیگری وانمود شود، این‌جا نوشته‌ایم دورکاری واقعاً چه چیزی را عوض می‌کند، چه چیزی جای بازدید را می‌گیرد، و چه چیزی واقعاً ساده‌تر است وقتی هر دو سر ماجرا در یک کشورند.",
      items: [
        {
          title: "در اصفهان دفتری نداریم، و وانمود هم نمی‌کنیم",
          body:
            "سفر، جایی که پاسخ را عوض کند ممکن است و مثل یک سفر هم حساب می‌شود. بقیه‌ی کار، نقشه، بازبینی، اصلاحات، تحویل، با فایل و تماس پیش می‌رود؛ همان‌طور که برای دفتر خیابان بغلی هم پیش می‌رود.",
        },
        {
          title: "یک برگه‌ی اندازه‌برداری، جای بازدید",
          body:
            "وقتی کسی نمی‌تواند روی محصول متر بگذارد، دقیقاً می‌گوییم چه چیزی را اندازه بگیرید و از کجا عکس بگیرید، کدام وجه، کدام مبنا، کدام اتصال، نه اینکه بگوییم «ابعاد را بفرستید». همین برگه، فاصله‌ی میان مشخصات و بازسازی است.",
        },
        {
          title: "همان کشور، همان هفته، همان الزامات ارائه",
          body:
            "بدون اختلاف ساعت، بدون لایه‌ی ترجمه، و با همان انتظارات مشاور و الزامات ارائه در هر دو سر. نام‌گذاری، پارامترها و طبقه‌بندی مقابل زمینه‌ای می‌نشیند که لازم نیست اول توضیح داده شود.",
        },
        {
          title: "محصول شما جایی مدل می‌شود که مشخص می‌شود",
          body:
            "اصفهان برای پروژه‌هایی تولید می‌کند که در شهرهای دیگر ترسیم می‌شوند. فمیلی همان چیزی است که محصول را به آن مدل‌ها می‌برد، و محتوایی که درست رفتار کند، جلوی جایگزین‌شدنش با هر چیزی که طراح پیدا کرده را می‌گیرد.",
        },
      ],
      note: "فرآیند دقیقاً همان است که در صفحه‌ی اصلی آمده. این بخش درباره‌ی چیزی است که به‌صورت محلی در دسترس است، نه شیوه‌ی کار متفاوت.",
    },
    faq: {
      eyebrow: "۰۵، پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "در اصفهان دفتر دارید؟",
          a: "نه. استودیو در تهران است و این کار دورکار انجام می‌شود. ترجیح می‌دهیم همین را روشن بگوییم تا صفحه‌ای حضور محلی‌ای را القا کند که وجود ندارد، و برای مرحله‌هایی که پاسخ را عوض می‌کند، سفر ممکن است.",
        },
        {
          q: "برای شروع چه چیزی لازم دارید؟",
          a: "هرچه واقعاً موجود است، نقشه‌ی اندازه‌گذاری‌شده، فایل CAD، برگه‌ی مشخصات، یا فمیلی‌ای که تقریباً کار می‌کند. مرحله‌ی اول روشن می‌کند چه چیزی مشخصات است و چه چیزی حدس، چون این دو کار بسیار متفاوتی‌اند و نباید یک‌جا قیمت بخورند.",
        },
        {
          q: "اگر کسی نتواند محصول را برایمان اندازه بگیرد چه؟",
          a: "آن‌وقت کار بازسازی است و به‌شکل بازسازی هم تعریف می‌شود. کاری که نمی‌کنیم این است که از روی بروشور بی‌اندازه مدل کنیم و طوری تحویل دهیم که انگار ابعاد داده شده بوده، فمیلی کامل به‌نظر می‌رسد و غلط است، که از نداشتنش بدتر است.",
        },
        {
          q: "با تمپلیت و استاندارد دفتر ما هماهنگ می‌شوید؟",
          a: "حالت معمول همین است. نام‌گذاری، پارامترهای مشترک، ساب‌کتگوری‌ها و ضخامت خطوط از استاندارد شما می‌آید، و هرجا استاندارد ابهام داشته باشد، ابهام مطرح می‌شود، نه اینکه بی‌صدا طوری حل شود که بعداً از آن خبردار شوید.",
        },
        {
          q: "تحویل در کدام نسخه‌های رویت است؟",
          a: "همان‌هایی که تیم شما و کارفرمایانتان با آن‌ها کار می‌کنند. فمیلی‌ها در قدیمی‌ترین نسخه‌ی درون دامنه تحویل می‌شوند تا رو به جلو باز شوند، بازه در مرحله‌ی اول توافق می‌شود، چون تعیین می‌کند اصلاً کدام قابلیت‌ها قابل‌استفاده‌اند.",
        },
        {
          q: "هزینه چقدر است؟",
          a: "فهرست قیمتی در کار نیست، چون فمیلی را با رفتارش قیمت می‌گذارند، نه با هندسه‌اش. چهار چیز اندازه‌ی کار را تعیین می‌کند و در صفحه‌ی اصلی ساخت فمیلی رویت آمده است. پیش از بیان کامل مسئله، برآوردی داده نمی‌شود.",
        },
      ],
    },
    cta: {
      eyebrow: "۰۶، شروع",
      title: "همان جزئیاتی را مطرح کنید که نیاز دارید",
      lead:
        "فمیلی، مدل یا خروجی‌ای را بیاورید که داده باید در آن زندگی کند، نه مشخصاتی از آنچه فکر می‌کنید لازم است. اگر کتابخانه‌تان به‌جای محتوای تازه به بازبینی نیاز دارد، ترجیح می‌دهیم اول همین را بگوییم.",
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      notFor:
        "اگر می‌خواهید هندسه از روی بروشور بدون اندازه ترسیم شود، یا تعداد فمیلی پیش از دیدن منبع قیمت بخورد، ما مناسب شما نیستیم.",
    },
    schema: {
      serviceType: "Revit family creation",
      audience: "تولیدکنندگان و دفاتر معماری و تأسیسات مرتبط با اصفهان",
      areaServed: "اصفهان، ایران",
    },
  },
};
