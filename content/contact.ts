import type { Localized } from "@/lib/i18n/config";

export interface ContactContent {
  meta: { title: string; description: string };
  breadcrumb: string;
  intro: {
    eyebrow: string;
    aside: string;
    headline: string;
    description: string;
  };
  sidebar: {
    emailLabel: string;
    phoneLabel: string;
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
        "مسئله را کوتاه و دقیق بنویسید: فرایند فعلی، جایی که کار می‌شکند و نتیجه‌ای که می‌خواهید. با هم مسئله را ترسیم می‌کنیم و قدم بعدی را پیشنهاد می‌دهیم.",
    },
    breadcrumb: "تماس",
    intro: {
      eyebrow: "تماس",
      aside: "قدم اول",
      headline: "مسئله را کوتاه و دقیق بنویسید؛ قدم بعدی را با هم روشن می‌کنیم.",
      description:
        "فرایند فعلی، جایی که کار می‌شکند و نتیجه‌ای که می‌خواهید را برایمان بنویسید. هرچه دقیق‌تر، پاسخ ما دقیق‌تر.",
    },
    sidebar: {
      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      firstCallHeading: "در اولین گفتگو",
      firstCallSteps: [
        "مسئله و جریان کار فعلی را با هم ترسیم می‌کنیم.",
        "پتانسیل واقعی بهبود را می‌سنجیم.",
        "دامنه کار و قدم بعدی را پیشنهاد می‌دهیم.",
      ],
    },
    form: {
      heading: "مسئله را برای ما بگویید",
      fields: {
        fullName: "نام و نام خانوادگی",
        company: "نام شرکت",
        phone: "تلفن",
        email: "ایمیل",
        need: "به چه چیزی نیاز دارید؟",
        needPlaceholder: "یک گزینه را انتخاب کنید",
        needOptions: [
          "اتوماسیون و یکپارچه‌سازی",
          "پلاگین یا ابزار سفارشی",
          "سیستم مدیریت یا داشبورد",
          "BIM، فمیلی رویت یا مدل‌سازی",
          "آمادگی داده و هوش مصنوعی",
          "نیاز به بررسی اولیه دارم",
        ],
        brief: "شرح مختصر پروژه",
        briefPlaceholder: "فرایند فعلی، جایی که می‌شکند، و نتیجه‌ای که می‌خواهید را بنویسید.",
      },
      submit: "ارسال درخواست",
      submitting: "در حال ارسال…",
      status: {
        success: "پیام شما ارسال شد. به‌زودی پاسخ می‌دهیم.",
        validationError: "لطفاً فیلدهای الزامی را کامل کنید.",
        error: "ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید یا مستقیم ایمیل بزنید.",
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
    intro: {
      eyebrow: "Contact",
      aside: "First step",
      headline: "Write the problem down, short and specific. We'll figure out the next step together.",
      description:
        "Tell us your current process, where it breaks, and the outcome you want. The more specific, the more specific our answer.",
    },
    sidebar: {
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
          "Automation & integration",
          "Custom plugin or tool",
          "Management system or dashboard",
          "BIM, Revit families, or modeling",
          "Data & AI readiness",
          "I need an initial review",
        ],
        brief: "Project brief",
        briefPlaceholder: "Describe your current process, where it breaks, and the outcome you want.",
      },
      submit: "Send request",
      submitting: "Sending…",
      status: {
        success: "Your message was sent. We'll get back to you shortly.",
        validationError: "Please fill in the required fields.",
        error: "Something went wrong. Please try again or email us directly.",
      },
      requiredNote: "Fields marked with * are required.",
    },
  },
};
