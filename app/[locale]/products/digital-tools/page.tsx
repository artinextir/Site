import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { productDigitalTools } from "@/content/product-digital-tools";
import { products } from "@/content/products";
import { nav } from "@/content/nav";
import { locales, type Locale } from "@/lib/i18n/config";
import { site, siteUrl, ogImageUrl, hreflangAlternates } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = productDigitalTools[locale as Locale] ?? productDigitalTools.fa;
  const url = `${siteUrl}/${locale}/products/digital-tools`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/products/digital-tools") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function DigitalToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = productDigitalTools[locale];
  const n = nav[locale];
  const hub = products[locale];
  const url = `${siteUrl}/${locale}/products/digital-tools`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.breadcrumb,
    name: c.meta.title,
    description: c.meta.description,
    provider: { "@type": "Organization", name: site.name, url: siteUrl },
    url,
  };

  return (
    <>
      <Section tone="ink">
        <Container>
          <JsonLd data={serviceSchema} />
          <PageIntro
            eyebrow={c.intro.eyebrow}
            aside={c.intro.aside}
            headline={c.intro.headline}
            description={c.intro.description}
            breadcrumbs={
              <Breadcrumbs
                locale={locale}
                items={[
                  { label: n.homeLabel, href: "/" },
                  { label: hub.breadcrumb, href: "/products" },
                  { label: c.breadcrumb, href: "/products/digital-tools" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <h2 className="sr-only">{c.breadcrumb}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {c.collections.map((item) => (
              <div key={item.title} className="rounded-md border border-ink-border p-7">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
