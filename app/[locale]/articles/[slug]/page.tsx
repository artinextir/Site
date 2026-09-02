import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Tag } from "@/components/Tag";
import { AuthorByline } from "@/components/AuthorByline";
import { TableOfContents } from "@/components/TableOfContents";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { InlineText } from "@/components/InlineText";
import { JsonLd } from "@/components/JsonLd";
import { articles } from "@/content/articles";
import { nav } from "@/content/nav";
import { getArticle, articleSlugs } from "@/lib/articles-registry";
import { locales, type Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";
import { siteUrl, hreflangAlternates } from "@/content/site";
import type { ArticleImage, ArticleList } from "@/content/article-types";

export function generateStaticParams() {
  return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);
  if (!article) return {};
  const url = `${siteUrl}/${locale}/articles/${slug}`;

  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates(`/articles/${slug}`) },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
    },
  };
}

function ResponsiveImage({ image, priority }: { image: ArticleImage; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-ink-border">
      {/* eslint-disable-next-line @next/next/no-img-element -- manual multi-source srcset; next/image can't emit one under output:export */}
      <img
        src={image.src}
        srcSet={
          image.srcSmall
            ? [
                `${image.srcSmall} 640w`,
                image.srcMedium && `${image.srcMedium} 960w`,
                `${image.src} 1200w`,
              ]
                .filter(Boolean)
                .join(", ")
            : undefined
        }
        sizes="(min-width: 1024px) 800px, 100vw"
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="aspect-[16/9] w-full object-cover grayscale-[15%] contrast-[1.05] brightness-[0.85]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const article = getArticle(locale, slug);
  if (!article) notFound();

  const c = articles[locale];
  const n = nav[locale];
  const url = `${siteUrl}/${locale}/articles/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.meta.description,
    ...(article.heroImage ? { image: [`${siteUrl}${article.heroImage.src}`] } : {}),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@type": "Person", name: article.author.name },
    publisher: {
      "@type": "Organization",
      name: "ARTINEXT",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/artinext-logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <Section tone="ink">
        <Container id="top" className="scroll-mt-24 py-16 md:py-20">
          <Breadcrumbs
            locale={locale}
            items={[
              { label: n.homeLabel, href: "/" },
              { label: c.breadcrumb, href: "/articles" },
              { label: article.breadcrumb, href: `/articles/${slug}` },
            ]}
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Tag tone="ink">{article.category}</Tag>
          </div>
          <h1 className="font-heading text-balance mt-6 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tightest md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            {article.leadOpinion}
          </p>
          <div className="mt-8">
            <AuthorByline
              locale={locale}
              name={article.author.name}
              role={article.author.role}
              bio={article.author.bio}
              href={article.author.href}
              date={article.publishedAt}
              dateLabel={article.publishedLabel}
              updatedDate={article.updatedAt}
              updatedDateLabel={article.updatedLabel}
              updatedPrefix={locale === "fa" ? "به‌روزرسانی" : "Updated"}
            />
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="pb-20 md:pb-28">
          <JsonLd data={articleSchema} />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
            <article className="min-w-0">
              <div id="overview" className="scroll-mt-24">
                <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                  <InlineText text={article.intro} locale={locale} />
                </p>
              </div>

              {article.heroImage && (
                <div className="mt-10">
                  <ResponsiveImage image={article.heroImage} priority />
                </div>
              )}

              {article.sections ? (
                article.sections.map((section) => (
                  <div key={section.id} id={section.id} className="mt-14 scroll-mt-24">
                    {section.image && (
                      <div className="mb-8">
                        <ResponsiveImage image={section.image} />
                      </div>
                    )}
                    <h2 className="font-heading text-2xl font-semibold md:text-3xl">{section.heading}</h2>
                    <div className="mt-5 flex flex-col gap-4">
                      {section.paragraphs.map((paragraph, i) => (
                        <p
                          key={i}
                          className="max-w-2xl text-sm leading-relaxed text-white/65 md:text-base"
                        >
                          <InlineText text={paragraph} locale={locale} />
                        </p>
                      ))}
                      {section.list && <ArticleListView list={section.list} locale={locale} />}
                    </div>
                  </div>
                ))
              ) : (
                <div id="steps" className="mt-14 scroll-mt-24">
                  <h2 className="font-heading text-2xl font-semibold md:text-3xl">
                    {article.adviceHeading}
                  </h2>
                  <div className="mt-8">
                    {article.advice?.map((item, i) => (
                      <div key={item.title} className="border-t border-ink-border py-6 first:border-t-0">
                        <div className="flex items-start gap-5">
                          <span className="font-heading shrink-0 text-sm font-semibold text-navy-400">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div id="conclusion" className="mt-14 scroll-mt-24 border-t border-ink-border pt-10">
                <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                  <InlineText text={article.conclusion} locale={locale} />
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-white/50">
                    {article.internalHeading}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {article.internalLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={lh(locale, link.href)}
                          className="text-sm text-navy-300 transition-colors hover:text-navy-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-white/50">
                    {article.externalHeading}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {article.externalLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 underline decoration-ink-border underline-offset-4 transition-colors hover:text-navy-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 border-t border-ink-border pt-10">
                <FaqSection heading={article.faqHeading} items={article.faq} tone="ink" />
              </div>

              <div className="mt-10">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy-300 transition-colors hover:text-navy-200"
                >
                  <span aria-hidden="true" className="inline-block -rotate-90 rtl:rotate-90">
                    &rarr;
                  </span>
                  {locale === "fa" ? "بازگشت به بالا" : "Back to top"}
                </a>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents heading={article.tocHeading} items={article.toc} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CtaBand locale={locale} statement={c.cta.statement} ctaLabel={c.cta.label} />
    </>
  );
}

function ArticleListView({ list, locale }: { list: ArticleList; locale: Locale }) {
  const ListTag = list.ordered ? "ol" : "ul";
  return (
    <ListTag
      className={`ms-5 flex flex-col gap-2 text-sm leading-relaxed text-white/65 md:text-base ${
        list.ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {list.items.map((item, i) => (
        <li key={i}>
          <InlineText text={item} locale={locale} />
        </li>
      ))}
    </ListTag>
  );
}
