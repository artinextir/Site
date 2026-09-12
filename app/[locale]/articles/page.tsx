import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { articles } from "@/content/articles";
import { site, siteUrl } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { PointCloud } from "@/components/PointCloud";
import { ArticleIndex } from "@/components/sections/ArticleIndex";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolve(localeRaw: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const locale = localeRaw as Locale;
  return { locale, c: articles[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/articles/`;

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/articles/`,
        en: `${siteUrl}/en/articles/`,
        "x-default": `${siteUrl}/fa/articles/`,
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
    // Indexed from the first real article on. It was noindex while it listed
    // mock-ups, which is exactly the thin page this domain was dropped for.
    robots: { index: true, follow: true },
  };
}

export default async function ArticlesPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/articles/`;

  /* The index is the only sitemap page without a graph. It lists the same
     articles in the same order the page shows first: newest by the date on
     the card, which is the updated date where there is one. */
  const listed = [...c.articles].sort((a, b) => b.date.localeCompare(a.date));

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
        mainEntity: { "@id": `${url}#articles` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#articles`,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: listed.length,
        itemListElement: listed.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: a.title,
          url: `${siteUrl}/${locale}/articles/${a.slug}/`,
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

      {/*
        The contact page's arrangement — copy in one column, an amber mark in
        the other — with a dim amber field in place of the aurora. The field
        is its own cloud so it can fill the section while the mark keeps to
        its column; both sit under the copy's z-10.
      */}
      <Section
        behind={
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <PointCloud glyph="amber-field" fit={0.3} />
          </div>
        }
      >
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="relative z-10">
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[20ch] text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-fg">
              {c.hero.title}
            </h1>
            <p className="lead mt-7 max-w-[54ch]">{c.hero.lead}</p>
          </div>

          <div className="relative z-0 order-first min-h-[clamp(240px,34vh,320px)] lg:order-none lg:min-h-[min(58vh,560px)]">
            <PointCloud glyph="info-mark" fit={0.46} />
          </div>
        </Reveal>
      </Section>

      <Section rule={false}>
        <SectionHead eyebrow={c.index.eyebrow} title={c.index.title} />
        <Reveal>
          <ArticleIndex c={c} locale={locale} />
        </Reveal>
      </Section>
    </main>
  );
}
