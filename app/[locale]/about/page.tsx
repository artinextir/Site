import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { about } from "@/content/about";
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
  const c = about[locale as Locale] ?? about.fa;
  const url = `${siteUrl}/${locale}/about/`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/about") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = about[locale];
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
                  { label: c.breadcrumb, href: "/about" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <h2 className="font-heading text-balance max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
            {c.pov.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-5">
            {c.pov.paragraphs.map((p) => (
              <p key={p} className="max-w-2xl text-base leading-relaxed text-white/60">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="smoke">
        <Container className="py-16 md:py-20">
          <div className="rounded-md border border-navy-700/30 bg-ink p-8 text-smoke md:p-10">
            <h2 className="font-heading text-xl font-semibold md:text-2xl">{c.notFor.heading}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {c.notFor.description}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="smoke">
        <Container className="pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {c.values.map((value) => (
              <div key={value.title} className="border-t border-smoke-border pt-5">
                <h3 className="font-heading text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
