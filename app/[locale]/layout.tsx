import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Sans, Kode_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

import type { Locale } from "@/lib/i18n/config";
import { dirOf, locales } from "@/lib/i18n/config";
import { home } from "@/content/home";
import { site, siteUrl } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionAnchor } from "@/components/SectionAnchor";
import { SnapScroll } from "@/components/SnapScroll";

/* Kode Mono is the display + engineering voice: headlines, eyebrows, code,
   specs. It is deliberately NOT the body face — its advance widths push a
   56px headline to five lines and make long prose read like a terminal. */
const mono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

/* Instrument Sans carries Latin prose. Chosen for a tall x-height that holds
   up on the dark ground and a grotesque skeleton that sits next to the mono
   without arguing with it. */
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

/* Self-hosted rather than pulled from Google: their Arabic subset of Noto
   Kufi is 121KB, and since the Persian copy is set in it, it is what decides
   LCP on /fa/. scripts/subset_fonts.py clips the weight axis to the 400-700
   the site actually uses and drops the Presentation Forms and the non-Persian
   Arabic extensions, which takes the same face to 30KB. */
const persian = localFont({
  src: "../../assets/fonts/noto-kufi-arabic-fa.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-fa",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF,U+200C-200F,U+FB50-FDFF,U+FE70-FEFF" }],
  adjustFontFallback: false,
  fallback: ["Tahoma", "Segoe UI", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  colorScheme: "dark",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Anything that isn't a known locale is a 404, not a crash — a stray request
 *  for /favicon.ico would otherwise arrive here as locale="favicon.ico". */
function resolveLocale(value: string): Locale {
  if (!(locales as readonly string[]).includes(value)) notFound();
  return value as Locale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const c = home[locale];

  return {
    metadataBase: new URL(siteUrl),
    // Search Console ownership (HTML-tag method), carried over from V2. Every
    // page under /fa/ and /en/ inherits it; the root stub in postbuild repeats it.
    verification: { google: "__KQ4LYB2VWUh-e_l24qlvw9E4Kf10IcHPl0w8zsARA" },
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/`,
      languages: {
        fa: `${siteUrl}/fa/`,
        en: `${siteUrl}/en/`,
        "x-default": `${siteUrl}/fa/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      title: c.meta.title,
      description: c.meta.description,
      url: `${siteUrl}/${locale}/`,
      images: [
        {
          url: `/images/og-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: c.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [`/images/og-${locale}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const c = home[locale];

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${mono.variable} ${sans.variable} ${persian.variable}`}>
      <body className="min-h-dvh bg-ink text-fg antialiased">
        <noscript>
          {/* Without JS the reveal hook never runs, so neutralise its start state. */}
          <style>{`.reveal,[data-stagger]>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:inset-x-0 focus:top-3 focus:z-[60] focus:mx-auto focus:w-max focus:rounded-[3px] focus:bg-sage focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          {c.ui.skip}
        </a>

        <SectionAnchor />
        <SnapScroll />
        <Header locale={locale} c={c} />
        {children}
        <Footer locale={locale} c={c} />
      </body>
    </html>
  );
}
