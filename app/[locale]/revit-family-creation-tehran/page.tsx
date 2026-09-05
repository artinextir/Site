import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { HeroVisual } from "@/components/HeroVisual";
import { StrengthMarkers } from "@/components/StrengthMarkers";
import { Marquee } from "@/components/Marquee";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { localRevitFamilyCreationTehran } from "@/content/local-revit-family-creation-tehran";
import { products } from "@/content/products";
import { nav } from "@/content/nav";
import { locales, type Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";
import { site, siteUrl, hreflangAlternates, ogImageUrl } from "@/content/site";

const PATH = "/revit-family-creation-tehran";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = localRevitFamilyCreationTehran[locale as Locale] ?? localRevitFamilyCreationTehran.fa;
  const url = `${siteUrl}/${locale}${PATH}/`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates(PATH) },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url,
      siteName: "ARTINEXT",
      type: "website",
      images: [ogImageUrl(locale as Locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [ogImageUrl(locale as Locale)],
    },
  };
}

export default async function RevitFamilyCreationTehranPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = localRevitFamilyCreationTehran[locale];
  const p = products[locale];
  const n = nav[locale];
  const url = `${siteUrl}/${locale}${PATH}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.breadcrumb ?? c.meta.title,
    name: c.meta.title,
    description: c.meta.description,
    provider: { "@type": "Organization", name: site.name, url: siteUrl },
    areaServed: { "@type": "City", name: "Tehran" },
    url,
  };

  return (
    <>
      <Section tone="ink">
        <Container className="grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <JsonLd data={serviceSchema} />
            {c.breadcrumb && (
              <div className="mb-8">
                <Breadcrumbs
                  locale={locale}
                  items={[
                    { label: n.homeLabel, href: "/" },
                    { label: c.breadcrumb, href: PATH },
                  ]}
                />
              </div>
            )}
            <Tag tone="ink">{c.hero.eyebrow}</Tag>
            <h1 className="font-heading text-balance mt-6 text-4xl font-bold leading-[1.1] tracking-tightest md:text-5xl lg:text-6xl">
              {c.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {c.hero.subhead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={lh(locale, "/contact")} variant="primary">
                {c.hero.ctaPrimary}
              </Button>
              <Button href={lh(locale, "/solutions")} variant="outline-ink">
                {c.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <HeroVisual label={c.hero.visualLabel} tag={c.hero.visualTag} />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-16 md:pb-24">
          <StrengthMarkers markers={c.markers} />
        </Container>
      </Section>

      <Marquee items={c.marquee} />

      <Section tone="ink">
        <Container className="py-section-md md:py-section-lg">
          <p className="text-xs uppercase tracking-widest text-navy-300">{c.statement.kicker}</p>
          <h2 className="font-heading text-balance mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            {c.statement.headline}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-ink-border bg-ink-border md:grid-cols-3">
            {c.statement.frictions.map((f) => (
              <div key={f.title} className="bg-ink p-7">
                <h3 className="font-heading text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="smoke">
        <Container className="py-section-md md:py-section-lg">
          <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
            {c.productsTeaser.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {p.products.map((product) => (
              <div key={product.href} className="rounded-md border border-smoke-border bg-smoke p-1">
                <div className="rounded-[14px] bg-ink p-1">
                  <ProductCard
                    locale={locale}
                    eyebrow={product.eyebrow}
                    title={product.title}
                    description={product.description}
                    tags={product.tags}
                    href={product.href}
                    linkLabel={c.productsTeaser.linkLabel}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="py-section-md md:py-section-lg">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">{c.process.heading}</h2>
          <div className="mt-10">
            <ProcessSteps steps={c.process.steps} tone="ink" />
          </div>
        </Container>
      </Section>

      <Section tone="smoke">
        <Container className="py-16 md:py-20">
          <Link
            href={lh(locale, c.fieldNoteTeaser.href)}
            className="group flex flex-col items-start justify-between gap-6 rounded-md border border-smoke-border bg-ink p-8 text-smoke md:flex-row md:items-center md:p-10"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-navy-300">
                {c.fieldNoteTeaser.kicker}
              </span>
              <p className="font-heading mt-3 text-xl font-semibold md:text-2xl">
                {c.fieldNoteTeaser.title}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-navy-300 transition-transform group-hover:gap-3">
              {c.fieldNoteTeaser.linkLabel}
              <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
                &rarr;
              </span>
            </span>
          </Link>
        </Container>
      </Section>
    </>
  );
}
