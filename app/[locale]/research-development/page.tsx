import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { rnd } from "@/content/rnd";
import { site, siteUrl } from "@/content/site";
import { RndTrack } from "@/components/sections/RndTrack";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolve(localeRaw: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const locale = localeRaw as Locale;
  return { locale, c: rnd[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/research-development/`;

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/research-development/`,
        en: `${siteUrl}/en/research-development/`,
        "x-default": `${siteUrl}/fa/research-development/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      title: c.meta.title,
      description: c.meta.description,
      url,
      images: [{ url: `/images/og-${locale}.jpg`, width: 1200, height: 630, alt: c.meta.title }],
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

export default async function RndPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/research-development/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${siteUrl}/#organization` },
      },
      {
        // The panels are the stages of one process, in order — that is exactly
        // what HowTo describes, and it is true of the page rather than bolted
        // on for the markup's sake.
        "@type": "HowTo",
        "@id": `${url}#process`,
        name: c.hero.title,
        description: c.hero.lead,
        step: c.panels.map((p, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: p.title,
          text: p.body,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: `${siteUrl}/${locale}/` },
          { "@type": "ListItem", position: 2, name: c.breadcrumb, item: url },
        ],
      },
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <RndTrack c={c} locale={locale} />

    </main>
  );
}
