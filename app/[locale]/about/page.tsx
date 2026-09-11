import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { about } from "@/content/about";
import { site, siteUrl } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { ToolSection } from "@/components/sections/ToolSection";
import { AboutHero } from "@/components/sections/AboutHero";
import { ArrowRight } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolve(localeRaw: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const locale = localeRaw as Locale;
  return { locale, c: about[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/about/`;

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/about/`,
        en: `${siteUrl}/en/about/`,
        "x-default": `${siteUrl}/fa/about/`,
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

export default async function AboutPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/about/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": url,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${siteUrl}/#organization` },
        // The tools are stated as knowledge, not as products we sell.
        mentions: c.sections.flatMap((s) =>
          s.tools.map((t) => ({ "@type": "SoftwareApplication", name: t.name })),
        ),
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

      <AboutHero c={c} />

      {/*
        Alternating sides, starting with the art. Every other page on the site
        leads with copy and answers with a figure; leading with the figure here
        is the break, and from there it simply alternates.
      */}
      {c.sections.map((s, i) => (
        <ToolSection key={s.id} section={s} iconFirst={i % 2 === 0} />
      ))}

      <Section rule={false}>
        <Reveal>
          <p className="eyebrow">{c.cta.eyebrow}</p>
          <h2 className="mt-5 max-w-[24ch] text-balance text-[clamp(1.625rem,3.6vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
            {c.cta.title}
          </h2>
          <p className="lead mt-6 max-w-[54ch]">{c.cta.lead}</p>
          <Link
            href={`/${locale}/contact/`}
            className="mt-9 inline-flex items-center gap-2 rounded-[4px] border border-sage bg-sage px-6 py-3 text-[0.875rem] font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {c.cta.action}
            <ArrowRight width={16} height={16} aria-hidden="true" className="rtl:rotate-180" />
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
