import type { ServicePage } from "@/content/services/types";

/**
 * The second non-geo service page. Families rather than tools, and a
 * different buyer: manufacturers who need their product in other people's
 * models, alongside offices who need their own library to stop fighting them.
 *
 * The argument is deliberately not "we draw families." Anyone can draw one.
 * It is that a family is a small piece of software — it has inputs, states it
 * has to survive, and a failure mode — and most of the cost is in proving it
 * behaves, not in drawing it.
 */
export const revitFamilyCreation: ServicePage = {
  slug: "revit-family-creation",

  en: {
    meta: {
      title: "Revit Family Creation & Development, ARTINEXT",
      description:
        "Custom Revit family creation for manufacturers and design offices: parametric, lightweight, and tested against real project conditions in a live model.",
    },
    breadcrumb: "Revit family creation",
    reusedLabels: { demo: "02, See it run", process: "04, Process" },
    hero: {
      eyebrow: "Service · BIM content · Working remotely",
      title: "Revit family creation that survives a real model.",
      lead:
        "Parametric families for manufacturers and design offices, built to your product or your standard, kept light, and tested against the conditions that break content rather than the ones that flatter it.",
      primary: "Start a project",
      secondary: "See two running",
    },
    frictions: {
      eyebrow: "01, Why libraries go wrong",
      title: "Three ways good content stops behaving",
      lead:
        "A family that fails rarely fails at being drawn. It fails at being used, in someone else's template, at someone else's scale, on a deadline. These are the three failures worth naming.",
      items: [
        {
          n: "01",
          title: "It flexed once and was called parametric",
          body:
        "Two type changes in the family editor is not a test. The parameters that break are the combinations nobody tried, the shortest length with the deepest offset, the one that inverts a constraint and takes the geometry with it.",
        },
        {
          n: "02",
          title: "It's correct and it's enormous",
          body:
        "Imported mesh geometry, full manufacturing detail, every fillet the CAD file had. Accurate, unusable, thirty of them in a model and the view regeneration is where the project day goes.",
        },
        {
          n: "03",
          title: "It carries no data anyone can schedule",
          body:
        "Looks right in a view, empty in a schedule. Shared parameters missing, classification absent, naming that doesn't match the office standard, so the model can be drawn from but not counted from.",
        },
      ],
    },
    showcase: {
      eyebrow: "02, Built work",
      title: "Same bones, two skins.",
      lead:
        "Two families for one company, designed around their needs and around their own connection details, for two different areas of the project.",
      body:
        "One curtain-wall system, two panel types. The frame, the brackets and the anchor detail are identical between them, what changes is the infill and the head condition, because the two sit in different parts of the elevation and answer to different requirements.\n\nThat is the case for building families rather than downloading them: the shared half is shared by construction, not by coincidence, so a change to the frame is one change and not two.",
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
    scope: {
      eyebrow: "03, What moves the number",
      title: "Families are priced by behaviour, not by geometry",
      lead:
        "Drawing the shape is the short part. Four things decide how long the rest takes, and you can assess all four from your own files.",
      items: [
        {
          title: "How many states it has to hold",
          body:
        "A fixed component is one thing. A family that flexes across a size range, swaps materials and hides parts by type is a matrix of combinations, and every one of them is a state that has to be checked, not assumed.",
        },
        {
          title: "How clean the source is",
          body:
        "A dimensioned drawing is a specification. A CAD export full of imported mesh, or a PDF of a brochure, is a reconstruction job first, and reconstruction is where the hours actually go.",
        },
        {
          title: "What the data has to line up with",
          body:
        "Content that only has to look right is quick. Content that has to schedule, price, classify and survive a client's own parameter file is doing a second job, and that job has its own scope.",
        },
        {
          title: "Whether it ships once or gets maintained",
          body:
        "A one-off is finished when it's handed over. A catalogue that tracks a real product line has versions, a Revit release range and a changelog, a different commitment, and better decided at the start than discovered later.",
        },
      ],
      note: "No estimate is given before the first two stages. A number produced before the problem is stated in full is a guess wearing a currency symbol.",
    },
    faq: {
      eyebrow: "05, Questions",
      title: "Before you write to us",
      items: [
        {
          q: "What do you need from us to start?",
          a: "Whatever actually exists, dimensioned drawings, a CAD file, a spec sheet, or a family that nearly works. The first stage establishes what is specification and what is a guess, because those are two very different jobs and they shouldn't be quoted as one.",
        },
        {
          q: "How do you keep families light?",
          a: "By deciding what the geometry is for. Detail that only reads at 1:5 is modelled as detail components at that scale, not carried in 3D through every view. Imported mesh is rebuilt as native geometry rather than wrapped. The size target is set in stage two and tested against, not hoped for.",
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
          q: "Do you fix an existing library instead of rebuilding it?",
          a: "Usually, yes, and it's usually cheaper. An audit establishes what is worth keeping, what is duplicated and what is genuinely broken. Rebuilding content that already works is billable and pointless.",
        },
        {
          q: "How do we know a family actually works?",
          a: "It's tested against the combinations that break content, not the ones that flatter it, and the test cases are written before the family is. A family that flexed once in the editor hasn't proven it works, it's proven it worked once.",
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
      audience: "Manufacturers, architecture, and MEP offices",
    },
  },

  fa: {
    meta: {
      title: "ساخت و توسعه فمیلی رویت، آرتینکست",
      description:
        "ساخت فمیلی اختصاصی رویت برای تولیدکنندگان و دفاتر طراحی؛ پارامتریک، سبک و تست‌شده در شرایط واقعی پروژه، با عملکرد متناسب در مدل و نه فقط در محیط فمیلی.",
    },
    breadcrumb: "ساخت فمیلی رویت",
    reusedLabels: { demo: "۰۲، ابزارها در عمل", process: "۰۴، فرآیند" },
    hero: {
      eyebrow: "خدمت · محتوای BIM · ریموت",
      title: "ساخت فمیلی رویت با عملکرد متناسب در مدل واقعی",
      lead:
        "فمیلی‌های پارامتریک برای تولیدکنندگان و دفاتر طراحی، ساخته‌شده بر اساس محصول یا استاندارد شما، سبک و تست‌شده در شرایطی که محتوا باید در آن استفاده شود.",
      primary: "شروع پروژه",
      secondary: "مشاهده نمونه‌ها",
    },
    frictions: {
      eyebrow: "۰۱، مشکلات رایج کتابخانه‌ها",
      title: "سه راهی که محتوای خوب از دید عملکرد افت می‌کند",
      lead:
        "فمیلی‌ای که ضعیف عمل می‌کند، معمولاً ایرادش از ترسیم نیست، بلکه در نوع ترسیم و کاربرد آن است، در تمپلیتی دیگر، برای کیفیتی دیگر، برای سطح توسعه (LOD) دیگر.",
      items: [
        {
          n: "۰۱",
          title: "یک‌بار تغییر کرد، اسمش شد پارامتریک",
          body:
        "دو بار تغییر تایپ در محیط فمیلی، الزاماً اسمش پارامتریک نیست. پارامترهایی شکننده که کسی ترکیب آن‌ها را امتحان نکرده، مثلاً کوتاه‌ترین طول با بیشترین آفست که یک قید را وارونه می‌کند و هندسه را نیز با خود جابه‌جا می‌کند، کار را خراب خواهد کرد.",
        },
        {
          n: "۰۲",
          title: "از دید ظاهری کامل است، عملکردش وحشتناک",
          body:
        "هندسه به‌صورت مش، با تمامی جزئیات و هر پیچ و خم کامل، دقیق اما غیرقابل‌استفاده است. کافی‌ست سی تا از این فمیلی در مدل قرار گیرد، باید با هر تغییر زاویه یک ساعت با سیستم خداحافظی کرد.",
        },
        {
          n: "۰۳",
          title: "داده هندسی کامل، غیرهندسی مفقود",
          body:
        "هندسه در ویو درست دیده می‌شود، اما در اسکجوال خالی است. پارامتر مشترک و طبقه‌بندی ندارد و نام‌گذاری آن استاندارد نیست، در نتیجه از مدل می‌توان نقشه گرفت، اما نمی‌توان متره و برآورد کرد.",
        },
      ],
    },
    showcase: {
      eyebrow: "۰۲، کار انجام‌شده",
      title: "استخوان‌بندی یکسان، با پوششی متفاوت",
      lead:
        "دو فمیلی که برای یک شرکت ساخته شد، مطابق نیازهای متفاوت برای قسمت‌های متفاوت پروژه، با جزئیات درخواستی کارفرما.",
      body:
        "یک سیستم کرتین‌وال با دو نوع پنل. قاب، براکت و جزئیات اتصال در هر دو یکسان است و تفاوت آن‌ها در پوشش و وضعیت سر پنل است، زیرا در قسمت‌های متفاوتی از نما قرار می‌گیرند.\n\nدلیل ساخت فمیلی به‌جای دانلود آن نیز همین است: بخش مشترک بر اساس یک ساختار واحد طراحی شده و هر تغییر در قاب، تنها یک‌بار انجام می‌شود.",
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
    scope: {
      eyebrow: "۰۳، چه چیزی اندازه را تعیین می‌کند",
      title: "هزینه‌ی فمیلی را عملکرد آن تعیین می‌کند، نه هندسه‌ی آن",
      lead:
        "ترسیم هندسه بخش کوتاهی از کار است. چهار عامل زمان لازم برای سایر جزئیات را تعیین می‌کنند و هر چهار را نیز خودتان با بررسی فایل‌های خود می‌توانید بسنجید.",
      items: [
        {
          title: "در چند حالت مختلف باید مدل شود",
          body:
        "یک قطعه‌ی ثابت یک‌بار مدل می‌شود، اما فمیلی‌ای که حرکت دارد، متریال آن تغییر می‌کند یا متناسب با تایپ اجزای متفاوتی دارد، ماتریسی از ترکیب‌هاست و هر ترکیب حالتی است که باید بررسی و مدل شود.",
        },
        {
          title: "پایه‌ی طراحی چقدر تمیز و دقیق است",
          body:
        "نقشه‌ی اندازه‌گذاری‌شده، خروجی‌های CAD و بروشور PDF همگی به درک، بازبینی و طراحی مجدد نیاز دارند و همین مرحله ساعت‌ها زمان می‌برد.",
        },
        {
          title: "هدف ساخت از این فمیلی چیست",
          body:
        "محتوایی که فقط باید ظاهر مناسبی داشته باشد، سریع ساخته می‌شود. محتوایی که باید متره شود، قیمت‌گذاری و طبقه‌بندی شود و با فایل پارامتر کارفرما سازگار باشد، سطح دیگری از کار است.",
        },
        {
          title: "تحویل یکباره دارد یا پشتیبانی",
          body:
        "کاری که یک‌بار انجام می‌شود، با تحویل تمام می‌شود. کاتالوگی که یک خط محصول واقعی را دنبال می‌کند نسخه دارد و به ارتباط، بازبینی و تعهد نیاز دارد؛ کار یک روز و یک زمان مشخص نیست.",
        },
      ],
      note: "پیش از دو مرحله‌ی نخست، هیچ برآوردی ارائه نمی‌شود. عددی که پیش از تعریف کامل مسئله اعلام شود، تنها یک حدس است.",
    },
    faq: {
      eyebrow: "۰۵، پرسش‌ها",
      title: "پیش از آنکه برایمان بنویسید",
      items: [
        {
          q: "برای شروع چه چیزی لازم دارید؟",
          a: "هر آنچه در دسترس است، مانند نقشه‌ی اندازه‌گذاری‌شده، فایل CAD، برگه‌ی مشخصات یا فمیلی‌ای که تا حدی کار می‌کند. مرحله‌ی اول مشخص می‌کند چه بخشی مشخصات قطعی است و چه بخشی حدس، زیرا این دو، کارهای بسیار متفاوتی هستند و هزینه‌ی جداگانه دارند.",
        },
        {
          q: "چگونه فمیلی‌ها را سبک نگه می‌دارید؟",
          a: "با مشخص‌کردن کاربرد هر بخش از هندسه. جزئیاتی که فقط در مقیاس ۱:۵ خوانده می‌شوند، به‌شکل دیتیل‌کامپوننت در همان مقیاس ساخته می‌شوند و به‌صورت سه‌بعدی در همه‌ی ویوها بارگذاری نمی‌شوند. مش واردشده نیز به‌صورت هندسه‌ی بومی بازسازی می‌شود. حجم هدف در مرحله‌ی دوم تعیین و فمیلی بر اساس آن تست می‌شود.",
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
          q: "به‌جای ساخت دوباره، کتابخانه‌ی موجود را اصلاح می‌کنید؟",
          a: "معمولاً بله، و معمولاً کم‌هزینه‌تر نیز هست. بازبینی مشخص می‌کند چه محتوایی ارزش نگه‌داشتن دارد، چه محتوایی تکراری است و چه محتوایی واقعاً ایراد دارد. ساخت دوباره‌ی محتوایی که درست کار می‌کند، تنها هزینه‌ی اضافه ایجاد می‌کند.",
        },
        {
          q: "از کجا بدانیم یک فمیلی واقعاً کار می‌کند؟",
          a: "فمیلی در ترکیب‌ها و شرایطی تست می‌شود که محتوا باید در آن استفاده شود و موارد تست پیش از ساخت فمیلی مکتوب می‌شوند. فمیلی‌ای که یک‌بار در محیط ادیتور تغییر کرده، الزاماً عملکرد درستی در پروژه ندارد.",
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
      audience: "تولیدکنندگان و دفاتر معماری و تأسیسات",
    },
  },
};
