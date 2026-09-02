import { dirOf, type Locale } from "@/lib/i18n/config";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { nav } from "@/content/nav";
import { site, siteUrl } from "@/content/site";

// The chrome every locale route shares: CSP meta tag, Peyda font preloads,
// Organization JSON-LD, skip link, Header, and Footer. Pulled out of
// app/[locale]/layout.tsx so the bare-domain root page (app/page.tsx) can
// render the same chrome around the "fa" homepage directly, instead of
// paying for a second full navigation through a meta-refresh redirect.
export function LocaleFrame({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
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
    sameAs: site.sameAs,
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
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.web3forms.com; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";

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
