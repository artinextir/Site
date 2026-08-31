import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ListCard } from "@/components/ListCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaBand } from "@/components/CtaBand";
import { solutions } from "@/content/solutions";
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
  const c = solutions[locale as Locale] ?? solutions.fa;
  const url = `${siteUrl}/${locale}/solutions`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/solutions") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = solutions[locale];
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
                  { label: c.breadcrumb, href: "/solutions" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          {c.services.map((service, i) => (
            <ListCard
              key={service.title}
              index={String(i + 1).padStart(2, "0")}
              title={service.title}
              description={service.description}
              tag={service.tag}
              tone="ink"
            />
          ))}
        </Container>
      </Section>

      <Section tone="smoke">
        <Container className="py-section-md md:py-section-lg">
          <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
            {c.process.heading}
          </h2>
          <div className="mt-10">
            <ProcessSteps steps={c.process.steps} tone="smoke" />
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
