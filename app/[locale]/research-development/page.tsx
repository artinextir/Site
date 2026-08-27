import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { researchDevelopment } from "@/content/research-development";
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
  const c = researchDevelopment[locale as Locale] ?? researchDevelopment.fa;
  const url = `${siteUrl}/${locale}/research-development`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/research-development") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function ResearchDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = researchDevelopment[locale];
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
                  { label: c.breadcrumb, href: "/research-development" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-16 md:pb-20">
          <div className="rounded-2xl border border-ink-border bg-ink-soft p-8 md:p-12">
            <span className="text-xs uppercase tracking-widest text-navy-300">{c.feature.tag}</span>
            <h2 className="font-heading mt-4 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">
              {c.feature.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {c.feature.description}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.principles.map((p, i) => (
              <div key={p.title} className="border-t border-ink-border pt-6">
                <span className="font-heading text-2xl font-bold text-navy-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-3 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
