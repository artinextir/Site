import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { home } from "@/content/home";
import { site, siteUrl } from "@/content/site";
import { serviceBySlug, servicePages } from "@/content/services";

import { ServiceHero } from "@/components/sections/ServiceHero";
import { Frictions } from "@/components/sections/Frictions";
import { Demo } from "@/components/sections/Demo";
import { Showcase } from "@/components/sections/Showcase";
import { Dashboards } from "@/components/sections/Dashboards";
import { Scope } from "@/components/sections/Scope";
import { Process } from "@/components/sections/Process";
import { plainText } from "@/components/article/InlineText";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => servicePages.map((s) => ({ locale, service: s.slug })));
}

/** Anything that isn't a real locale + slug pair is a 404, not a crash. */
function resolve(localeRaw: string, slug: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const page = serviceBySlug(slug);
  if (!page) notFound();
  const locale = localeRaw as Locale;
  return { locale, page, s: page[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const { page, s } = resolve(locale, service);
  const url = `${siteUrl}/${locale}/${page.slug}/`;

  return {
    metadataBase: new URL(siteUrl),
    title: s.meta.title,
    description: s.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/${page.slug}/`,
        en: `${siteUrl}/en/${page.slug}/`,
        "x-default": `${siteUrl}/fa/${page.slug}/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      title: s.meta.title,
      description: s.meta.description,
      url,
      images: [
        { url: `/images/og-${locale}.jpg`, width: 1200, height: 630, alt: s.meta.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: s.meta.title,
      description: s.meta.description,
      images: [`/images/og-${locale}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale: localeRaw, service } = await params;
  const { locale, page, s } = resolve(localeRaw, service);
  const c = home[locale];
  const url = `${siteUrl}/${locale}/${page.slug}/`;

  /**
   * A city page is a branch of a service, not a peer of it, so the trail has
   * three levels and the middle one is a real link. Without it a reader who
   * lands on the Tehran page from search has no route to the service itself.
   */
  const parent = page.parent ? serviceBySlug(page.parent) : undefined;
  const trail = parent
    ? [
        {
          label: parent[locale].breadcrumb,
          href: `/${locale}/${parent.slug}/`,
        },
      ]
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.meta.title,
        description: s.meta.description,
        serviceType: s.schema.serviceType,
        url,
        provider: { "@id": `${siteUrl}/#organization` },
        audience: { "@type": "Audience", audienceType: s.schema.audience },
        // areaServed only where the copy names a place. A page that mentions
        // no location claims none, rather than have the schema disagree with
        // the words on it.
        ...(s.schema.areaServed
          ? {
              areaServed: {
                "@type": "Place",
                name: s.schema.areaServed,
                ...(page.geo
                  ? {
                      geo: {
                        "@type": "GeoCoordinates",
                        latitude: page.geo.latitude,
                        longitude: page.geo.longitude,
                      },
                    }
                  : {}),
              },
            }
          : {}),
        ...(parent ? { isRelatedTo: { "@id": `${siteUrl}/${locale}/${parent.slug}/#service` } } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: `${siteUrl}/${locale}/` },
          ...(parent
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: parent[locale].breadcrumb,
                  item: `${siteUrl}/${locale}/${parent.slug}/`,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: parent ? 3 : 2,
            name: s.breadcrumb,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: s.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
        })),
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: s.meta.title,
        description: s.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
      },
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero locale={locale} s={s} home={site.name} trail={trail} />
      <Frictions s={s.frictions} />

      {/* The four stages are the studio's, not this service's. The evidence
          slot is per-service: the built families where the deliverable is
          content, dashboard screens where it is a system of its own, and the
          Revit recordings where it is a tool that runs inside Revit. */}
      {s.showcase ? (
        <Showcase s={s.showcase} />
      ) : s.dashboards ? (
        <Dashboards s={s.dashboards} locale={locale} />
      ) : (
        <Demo s={{ ...c.demo, eyebrow: s.reusedLabels.demo }} ui={c.ui} />
      )}
      {/* One of the two, never both — see ServiceContent. */}
      {s.scope ? <Scope s={s.scope} /> : null}
      {s.local ? <Scope s={s.local} id="working-together" /> : null}
      <Process s={{ ...c.process, eyebrow: s.reusedLabels.process }} />

      <Faq s={s.faq} locale={locale} />
      <Cta locale={locale} s={s.cta} action={c.navCta} />
    </main>
  );
}
