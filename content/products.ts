import type { Localized } from "@/lib/i18n/config";

/**
 * The Products page.
 *
 * It answers "what do I get", artefact first. The service pages answer "how
 * do you work with us"; keeping the two questions on separate pages is what
 * stops four pages competing for the same searches. So nothing here restates
 * a service page — each section shows the thing, then hands the reader to the
 * page that explains the service, with that page's own title as the link.
 */
export type ProductSection = {
  /** Section anchor; the home page's product cards link to it. */
  id: "revit-families" | "digital-tools" | "automation";
  eyebrow: string;
  title: string;
  lead: string;
  /**
   * The service page this product is delivered through. The label is that
   * page's own title phrase — anchor text is how a link says what the page it
   * points to is about, and "read more" says nothing.
   */
  link: { label: string; href: string };
};

export type ProductsContent = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  families: ProductSection;
  tools: ProductSection;
  automation: ProductSection;
  /** The closing band is the home page's, but its number continues this page's count. */
  ctaEyebrow: string;
};

export const products: Localized<ProductsContent> = {
  fa: {
    meta: {
      title: "محصولات آرتینکست، فمیلی رویت، پلاگین رویت و اتوماسیون اداری",
      description:
        "سه چیزی که آرتینکست تحویل می‌دهد: فمیلی‌های پارامتریک رویت با عملکرد متناسب در مدل واقعی، پلاگین رویت بر اساس فرآیند دفتر، و اتوماسیون اداری و مدیریتی.",
    },
    breadcrumb: "محصولات",
    hero: {
      eyebrow: "محصولات",
      title: "سه چیز که بعد از پروژه برایتان می‌ماند.",
      lead: "فمیلی‌ای که در کتابخانه‌ی دفتر می‌ماند، ابزاری که روی ریبون رویت قرار می‌گیرد و فرآیندی که بدون تایپ دوباره پیش می‌رود. هرکدام را در ادامه به همان شکلی می‌بینید که تحویل شده است.",
    },
    families: {
      id: "revit-families",
      eyebrow: "۰۱، فمیلی رویت",
      title: "فمیلی با عملکرد متناسب در مدل واقعی",
      lead: "دو یونیت کرتین‌وال با اتصالات یکسان و پرکننده‌ی متفاوت. هر فمیلی پیش از تحویل در یک مدل واقعی بارگذاری و در اسکجوال‌ها تست شده است.",
      link: { label: "ساخت فمیلی رویت", href: "/fa/revit-family-creation/" },
    },
    tools: {
      id: "digital-tools",
      eyebrow: "۰۲، ابزار دیجیتال",
      title: "حذف کارهای تکراری با یک دکمه روی ریبون",
      lead: "دو ابزار در حال اجرا داخل رویت. هرکدام بر اساس مراحل کاری یک دفتر مشخص طراحی شده و در نتیجه، کل فرآیند با یک دکمه انجام می‌شود.",
      link: { label: "توسعه پلاگین رویت", href: "/fa/revit-plugin-development/" },
    },
    automation: {
      id: "automation",
      eyebrow: "۰۳، اتوماسیون",
      title: "یک صفحه برای کل دفتر",
      lead: "یک سیستم برای دو دفتر و دو زبان: درخواست‌ها، اسناد و وضعیت پروژه‌ها در یک صفحه. سیستم را در حال کار و با فرآیند مکتوبش تحویل می‌گیرید.",
      link: { label: "اتوماسیون اداری و مدیریتی", href: "/fa/aec-workflow-automation/" },
    },
    ctaEyebrow: "۰۴، شروع",
  },
  en: {
    meta: {
      title: "Products, Revit families, plugins, automation | ARTINEXT",
      description:
        "Three things ARTINEXT delivers: parametric Revit families that behave in a live model, Revit plugins built around your workflow, and office automation.",
    },
    breadcrumb: "Products",
    hero: {
      eyebrow: "Products",
      title: "Three things you keep after the project.",
      lead: "A family that lives in your library, a tool on your Revit ribbon, a process that runs without anyone re-typing it. Each is shown below as it actually shipped, the work, not a picture of it.",
    },
    families: {
      id: "revit-families",
      eyebrow: "01, Revit families",
      title: "Families that behave in a live model",
      lead: "Two curtain-wall units from one job share a frame; only the infill changes. You get the family and proof it behaves: flexed, scheduled and loaded into a live model first.",
      link: { label: "Revit family creation", href: "/en/revit-family-creation/" },
    },
    tools: {
      id: "digital-tools",
      eyebrow: "02, Digital tools",
      title: "A button on your ribbon that takes the tedious part",
      lead: "Two tools, recorded running inside Revit. Each was built around one office's own steps, which is why it's a button and not a ten-page procedure nobody opens.",
      link: { label: "Revit plugin development", href: "/en/revit-plugin-development/" },
    },
    automation: {
      id: "automation",
      eyebrow: "03, Automation",
      title: "One screen the whole office works from",
      lead: "One system for two offices in two languages: requests, documents and project status on one screen, not five. You get it running, with its process written down.",
      link: { label: "Office automation", href: "/en/aec-workflow-automation/" },
    },
    ctaEyebrow: "04, Start",
  },
};
