import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, dirOf, type Locale } from "@/lib/i18n/config";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { nav } from "@/content/nav";
import { site, siteUrl } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  return {
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        fa: `${siteUrl}/fa`,
        en: `${siteUrl}/en`,
      },
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
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  // Typed as both Organization and ProfessionalService (the closest
  // LocalBusiness subtype to a digital-systems studio) in one block —
  // schema.org supports multi-typing via an array. Deliberately omits
  // address/openingHours/geo: this business doesn't have a public office
  // or fixed hours, and CONTENT.md's no-fabrication policy means we don't
  // invent them just to satisfy a LocalBusiness checklist item.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    alternateName: [site.nameFa, site.nameFaAlt],
    url: siteUrl,
    email: site.email,
    telephone: site.phoneHref,
    logo: `${siteUrl}/artinext-logo.svg`,
  };

  // GitHub Pages can't serve custom HTTP response headers, so the CSP that
  // lives in public/_headers for Cloudflare Pages doesn't apply there. This
  // meta-tag version is the closest equivalent GitHub Pages allows — it
  // recovers the core anti-injection value (script-src/style-src/etc), but
  // frame-ancestors is invalid in a meta tag (browsers ignore it silently,
  // so it's dropped here rather than shipped broken) and HSTS/nosniff/
  // Permissions-Policy/COOP can only exist as real headers and are just
  // absent on GitHub Pages. Harmless to also render on Cloudflare Pages,
  // where the real header already covers this.
  const cspContent =
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";

  return (
    <div dir={dirOf(locale)}>
      <meta httpEquiv="Content-Security-Policy" content={cspContent} />
      {locale === "fa" && (
        <>
          {/* Peyda Bold/Regular/Medium are the weights rendered above the fold
              (h1 heading, subhead paragraph, and the header's font-medium nav
              links/CTA). next/font's automatic preload doesn't reach the
              static HTML under output:export, so these are preloaded manually
              against the stable /public path — see app/globals.css and
              lib/fonts.ts for why. Medium was missing here, which is why
              Lighthouse flagged it as a late-loading font causing layout
              shift on the header's CTA button. */}
          <link
            rel="preload"
            href="/fonts/peyda/Peyda-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/peyda/Peyda-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/peyda/Peyda-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </>
      )}
      <JsonLd data={organizationSchema} />
      <LocaleHtmlSync locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
      >
        {locale === "fa" ? "رفتن به محتوای اصلی" : "Skip to main content"}
      </a>
      <Header locale={locale} content={nav[locale]} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} content={nav[locale]} />
    </div>
  );
}
