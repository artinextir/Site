import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { articles } from "@/content/articles";
import { nav } from "@/content/nav";
import { locales, type Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";
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
  const c = articles[locale as Locale] ?? articles.fa;
  const url = `${siteUrl}/${locale}/articles`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/articles") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = articles[locale];
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
                  { label: c.breadcrumb, href: "/articles" },
                ]}
              />
            }
          />
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <h2 className="sr-only">{c.breadcrumb}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.articles.map((article) => (
              <Link
                key={article.slug}
                href={lh(locale, `/articles/${article.slug}`)}
                className="group flex flex-col justify-between rounded-md border border-ink-border bg-ink-soft p-7 transition-colors duration-200 hover:border-navy-400"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-navy-300">
                      {article.category}
                    </span>
                    <time className="text-xs text-white/50">{article.publishedLabel}</time>
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-semibold leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{article.leadOpinion}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-300 transition-transform group-hover:gap-3">
                  {c.readMore}
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}
