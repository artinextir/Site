import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { CaseStudyClip } from "@/components/CaseStudyClip";
import { CtaBand } from "@/components/CtaBand";
import { products } from "@/content/products";
import { nav } from "@/content/nav";
import { locales, type Locale } from "@/lib/i18n/config";
import { siteUrl, ogImageUrl, hreflangAlternates } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = products[locale as Locale] ?? products.fa;
  const url = `${siteUrl}/${locale}/products`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/products") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = products[locale];
  const n = nav[locale];

  return (
    <>
      <Section tone="ink">
        <Container>
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
                  { label: c.breadcrumb, href: "/products" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-16 md:pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.products.map((product) => (
              <ProductCard
                key={product.href}
                locale={locale}
                eyebrow={product.eyebrow}
                title={product.title}
                description={product.description}
                tags={product.tags}
                href={product.href}
                linkLabel={c.linkLabel}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-16 md:pb-20">
          <p className="text-xs uppercase tracking-widest text-navy-300">{c.caseStudy.kicker}</p>
          <h2 className="font-heading text-balance mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            {c.caseStudy.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            {c.caseStudy.caption}
          </p>
          <div className="mt-10">
            <CaseStudyClip
              src="/case-studies/cad-to-revit.mp4"
              poster="/case-studies/cad-to-revit-poster.jpg"
            />
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <p className="font-heading max-w-2xl text-xl font-semibold leading-snug md:text-2xl">
            {c.principle}
          </p>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
