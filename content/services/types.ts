import type { Faq, Numbered } from "@/content/home";

/**
 * One product in the dashboards carousel. The screen order is fixed in the
 * component (`login → mainpage → projects → documents`) because it is the
 * order somebody actually walks through the product, and the image files are
 * named for it — so the content here supplies words, not paths.
 */
export type DashboardSet = {
  /** Which image variant, and the language the product itself is in. */
  key: "fa" | "en";
  /** As the product shows it — the mono wordmark, not a translated name. */
  company: string;
  kicker: string;
  /** Logo file under `/images/dashboards/`. */
  logo: string;
  /** Tab label. Names the company and which language build this is. */
  tab: string;
  body: string;
  specs: { k: string; v: string }[];
  /** Exactly four, in screen order. */
  screens: { label: string; caption: string; alt: string }[];
};

/** Four panels and a footnote. Used by both `scope` and `local`. */
export type PanelSection = {
  eyebrow: string;
  title: string;
  lead: string;
  items: { title: string; body: string }[];
  note: string;
};

/**
 * One service page. Deliberately narrower than `HomeContent`: a service page
 * argues one thing, so it gets the sections that serve that argument and none
 * of the ones that don't.
 *
 * `demo` and `process` are not in here on purpose. Both are the same
 * recordings and the same four stages the homepage shows, and duplicating
 * that copy per service is how two versions of one fact start to drift. The
 * page pulls them from `home[locale]` instead.
 */
export type ServiceContent = {
  meta: { title: string; description: string };
  /** Label for the breadcrumb trail and its schema. Short, no locale prefix. */
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
  };
  /**
   * Eyebrows for the two sections whose copy is reused from the homepage.
   * The copy is shared; the numbering isn't, because the sections sit at
   * different positions on a service page than they do on the homepage.
   */
  reusedLabels: { demo: string; process: string };
  frictions: { eyebrow: string; title: string; lead: string; items: Numbered[] };
  /**
   * A service page argues one of two things in this slot, never both.
   *
   * `scope` — what moves the size of the job. The non-geo pages carry it,
   * because someone arriving on a bare service search is sizing the work.
   *
   * `local` — what working together actually looks like from that place. The
   * city and country pages carry it instead. A city page that is the parent
   * page with a place name search-replaced into it is a doorway page, and
   * both Google and the reader can tell. The section has to say something
   * that is only true of that location.
   */
  scope?: PanelSection;
  local?: PanelSection;

  /**
   * Replaces the product recordings on pages where a screen capture of a
   * plugin would be the wrong evidence. A family page has to show families.
   */
  showcase?: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Reads beside the drawing, the way the recordings carry their own copy. */
    body: string;
    specs: { k: string; v: string }[];
    units: { name: string; caption: string }[];
    detail: { label: string; alt: string; caption: string };
    note: string;
  };
  /**
   * The third evidence variant. `Demo` proves a tool by recording it running
   * inside Revit; on a page that says the work is *between* the software,
   * a Revit recording proves the wrong thing. These are two builds of the
   * same idea for two offices, and the reader can switch between them
   * regardless of which locale they are reading in — the point of the
   * section is that the same structure carries two different languages.
   */
  dashboards?: {
    eyebrow: string;
    title: string;
    lead: string;
    /** aria-label for the set tablist. */
    regionLabel: string;
    controls: { prev: string; next: string };
    note: string;
    sets: DashboardSet[];
  };
  faq: { eyebrow: string; title: string; items: Faq[] };
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    notFor: string;
  };
  /** Fed straight into Service schema. Every term has to be honest. */
  schema: {
    serviceType: string;
    /** Named so the page can say what it is without inventing a location. */
    audience: string;
    /**
     * Only on pages whose copy actually names a place. A non-geo page leaves
     * this out rather than claiming an area it does not mention, which would
     * be the schema disagreeing with the words on the page.
     */
    areaServed?: string;
  };
};

export type ServicePage = {
  /** URL segment, identical in both locales. */
  slug: string;
  /**
   * The non-geo page this one narrows. Adds a breadcrumb level and an
   * explicit link back up, so a city page reads as a branch of a service
   * rather than as a page competing with its own parent.
   */
  parent?: string;
  /** Real coordinates, on pages that name a place. Never invented. */
  geo?: { latitude: number; longitude: number };
  fa: ServiceContent;
  en: ServiceContent;
};
