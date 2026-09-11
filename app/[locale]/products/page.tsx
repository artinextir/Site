import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { products } from "@/content/products";
import { home } from "@/content/home";
import { site, siteUrl } from "@/content/site";
import { revitFamilyCreation } from "@/content/services/revit-family-creation";
import { aecWorkflowAutomation } from "@/content/services/aec-workflow-automation";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { Showcase } from "@/components/sections/Showcase";
import { Demo } from "@/components/sections/Demo";
import { Dashboards } from "@/components/sections/Dashboards";
import { Cta } from "@/components/sections/Cta";
import { ServiceLink } from "@/components/ServiceLink";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolve(localeRaw: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const locale = localeRaw as Locale;
  return { locale, c: products[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/products/`;

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/products/`,
        en: `${siteUrl}/en/products/`,
        "x-default": `${siteUrl}/fa/products/`,
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

export default async function ProductsPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const h = home[locale];
  const url = `${siteUrl}/${locale}/products/`;

  // The artefacts are the service pages' own evidence, reused as-is; only the
  // heading copy is this page's. Missing data is a build error, not a blank.
  const showcase = revitFamilyCreation[locale].showcase;
  const dashboards = aecWorkflowAutomation[locale].dashboards;
  if (!showcase || !dashboards) throw new Error("products: artefact data missing");

  const sections = [c.families, c.tools, c.automation];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${siteUrl}/#organization` },
        mainEntity: { "@id": `${url}#products` },
      },
      {
        // Each product is delivered through a service page; the list says so
        // explicitly, alongside the links in the sections themselves.
        "@type": "ItemList",
        "@id": `${url}#products`,
        itemListElement: sections.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: `${siteUrl}${p.link.href}`,
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

      <ProductsHero c={c} />

      <Showcase
        id={c.families.id}
        s={{ ...showcase, eyebrow: c.families.eyebrow, title: c.families.title, lead: c.families.lead }}
        aside={<ServiceLink {...c.families.link} />}
      />

      <Demo
        id={c.tools.id}
        s={{ ...h.demo, eyebrow: c.tools.eyebrow, title: c.tools.title, lead: c.tools.lead }}
        ui={h.ui}
        aside={<ServiceLink {...c.tools.link} />}
      />

      <Dashboards
        id={c.automation.id}
        locale={locale}
        s={{ ...dashboards, eyebrow: c.automation.eyebrow, title: c.automation.title, lead: c.automation.lead }}
        aside={<ServiceLink {...c.automation.link} />}
      />

      <Cta locale={locale} s={{ ...h.cta, eyebrow: c.ctaEyebrow }} action={h.navCta} />
    </main>
  );
}
