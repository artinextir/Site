import type { Localized } from "@/lib/i18n/config";

/**
 * The contact page.
 *
 * The homepage `cta` section already carries the email and phone, so this page
 * does not repeat that block as its main event - it exists for the reader who
 * has more to say than a mailto can hold. The sidebar restates the two direct
 * channels because someone who navigated here deliberately should not have to
 * go back for them, but the page argues for the form.
 *
 * `needOptions` is deliberately six lines and ends on an out. A reader who
 * cannot place themselves in a list stops filling in the form, so the last
 * option has to let them through without choosing wrong.
 */
export interface ContactContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  aside: {
    emailLabel: string;
    phoneLabel: string;
    /** What actually happens next, so the form is not a black box. */
    firstCallHeading: string;
    firstCallSteps: string[];
  };
  form: {
    heading: string;
    fields: {
      fullName: string;
      company: string;
      phone: string;
      email: string;
      need: string;
      needPlaceholder: string;
      needOptions: string[];
      brief: string;
      briefPlaceholder: string;
    };
    submit: string;
    submitting: string;
    status: {
      success: string;
      validationError: string;
      error: string;
    };
    requiredNote: string;
  };
}

export const contact: Localized<ContactContent> = {
  fa: {
    meta: {
      title: "تماس با آرتینکست — اتوماسیون، BIM و ابزار اختصاصی",
      description:
        "مسئله را کوتاه و دقیق بنویسید: روند کاری فعلی، بخشی که در آن مشکل وجود دارد و نتیجه‌ای که انتظار دارید. مسئله را با هم بررسی می‌کنیم و قدم بعدی را پیشنهاد می‌دهیم.",
    },
    breadcrumb: "تماس",
    hero: {
      eyebrow: "تماس",
      title: "مسئله را کوتاه و دقیق بنویسید، قدم بعدی را با هم مشخص می‌کنیم.",
      lead: "از روند کاری فعلی، بخشی که در آن مشکل وجود دارد و نتیجه‌ای که انتظار دارید بنویسید. هرچه توضیح دقیق‌تر باشد، پاسخ ما نیز دقیق‌تر خواهد بود.",
    },
    aside: {
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      firstCallHeading: "در اولین گفت‌وگو",
      firstCallSteps: [
        "مسئله و روند کاری فعلی را با هم بررسی می‌کنیم.",
        "ظرفیت واقعی بهبود را ارزیابی می‌کنیم.",
        "دامنه‌ی کار و قدم بعدی را پیشنهاد می‌دهیم.",
      ],
    },
    form: {
      heading: "مسئله را برای ما شرح دهید",
      fields: {
        fullName: "نام و نام خانوادگی",
        company: "نام شرکت",
        phone: "تلفن",
        email: "ایمیل",
        need: "به چه چیزی نیاز دارید؟",
        needPlaceholder: "یک گزینه را انتخاب کنید",
        // Vocabulary per the persian-rules skill, matching the home page:
        // «اتوماسیون اداری و مدیریتی» is the service name, and the AI item is
        // «امکان‌سنجی کاربرد هوش مصنوعی».
        needOptions: [
          "اتوماسیون اداری و مدیریتی",
          "پلاگین یا ابزار اختصاصی",
          "سیستم مدیریت یا داشبورد",
          "BIM، فمیلی رویت یا مدل‌سازی",
          "امکان‌سنجی کاربرد هوش مصنوعی",
          "هنوز مطمئن نیستم، نیاز به بررسی اولیه دارم",
        ],
        brief: "شرح مختصر پروژه",
        briefPlaceholder:
          "روند کاری فعلی، بخشی که در آن مشکل وجود دارد و نتیجه‌ای که انتظار دارید را بنویسید.",
      },
      submit: "ارسال درخواست",
      submitting: "در حال ارسال…",
      status: {
        success: "پیام شما ارسال شد. پاسخ را به همین شماره یا ایمیل می‌فرستیم.",
        validationError: "لطفاً فیلدهای الزامی را کامل کنید.",
        error: "ارسال با خطا مواجه شد. دوباره تلاش کنید یا مستقیماً ایمیل ارسال کنید.",
      },
      requiredNote: "فیلدهای ستاره‌دار الزامی هستند.",
    },
  },
  en: {
    meta: {
      title: "Contact ARTINEXT — Automation, BIM & Custom Tools",
      description:
        "Write the problem down, short and specific: your current process, where it breaks, and the outcome you want. We map it together and propose the next step.",
    },
    breadcrumb: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Write the problem down, short and specific. We work out the next step together.",
      lead: "Tell us your current process, where it breaks, and the outcome you want. The more specific you are, the more specific our answer can be.",
    },
    aside: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      firstCallHeading: "In the first conversation",
      firstCallSteps: [
        "We map the problem and your current workflow together.",
        "We assess the real potential for improvement.",
        "We propose a scope and the next step.",
      ],
    },
    form: {
      heading: "Tell us the problem",
      fields: {
        fullName: "Full name",
        company: "Company",
        phone: "Phone",
        email: "Email",
        need: "What do you need?",
        needPlaceholder: "Choose an option",
        needOptions: [
          "Office and management automation",
          "Custom plugin or tool",
          "Management system or dashboard",
          "BIM, Revit families, or modeling",
          "Fitting an existing workflow to AI",
          "Not sure yet - I need an initial review",
        ],
        brief: "Project brief",
        briefPlaceholder:
          "Describe your current process, where it breaks, and the outcome you want.",
      },
      submit: "Send request",
      submitting: "Sending…",
      status: {
        success: "Your message was sent. We will reply to the number or email you gave us.",
        validationError: "Please fill in the required fields.",
        error: "Something went wrong. Try again, or email us directly.",
      },
      requiredNote: "Fields marked with * are required.",
    },
  },
};
