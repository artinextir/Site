import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { home } from "@/content/home";
import { site, siteUrl } from "@/content/site";
import { articles, articleBySlug, articlePages } from "@/content/articles";
import type { ArticleContent, ArticleImage, ArticleList } from "@/content/articles";
import { InlineText, localHref } from "@/components/article/InlineText";
import { Cta } from "@/components/sections/Cta";
import { Plus } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => articlePages.map((a) => ({ locale, slug: a.slug })));
}

function resolve(localeRaw: string, slug: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const page = articleBySlug(slug);
  if (!page) notFound();
  const locale = localeRaw as Locale;
  return { locale, a: page.content[locale] };
}

const abs = (path: string) => `${siteUrl}${path}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const { locale, a } = resolve(l, slug);
  const url = abs(`/${locale}/articles/${slug}/`);
  const image = a.heroImage
    ? { url: a.heroImage.src, width: a.heroImage.width, height: a.heroImage.height, alt: a.heroImage.alt }
    : { url: `/images/og-${locale}.jpg`, width: 1200, height: 630, alt: a.meta.title };

  return {
    metadataBase: new URL(siteUrl),
    title: a.meta.title,
    description: a.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: abs(`/fa/articles/${slug}/`),
        en: abs(`/en/articles/${slug}/`),
        "x-default": abs(`/fa/articles/${slug}/`),
      },
    },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      title: a.meta.title,
      description: a.meta.description,
      url,
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt ?? a.publishedAt,
      authors: [abs(`/${locale}/about/`)],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: a.meta.title,
      description: a.meta.description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

/**
 * A photograph inside the drafting frame: hairline plate, corner ticks, and a
 * slight grade down so a daylight stock image sits on the ink ground instead of
 * glowing off it. Plain <img> because the export is `images.unoptimized` and a
 * multi-width srcset is exactly what that option gives up.
 */
function Figure({ image, priority }: { image: ArticleImage; priority?: boolean }) {
  const tick = "absolute h-3.5 w-3.5 border-line-2";
  return (
    <figure className="relative m-0 rounded-[4px] border border-line bg-surface/40 p-1.5">
      <span aria-hidden="true">
        <span className={`${tick} -start-px -top-px border-s border-t`} />
        <span className={`${tick} -end-px -top-px border-e border-t`} />
        <span className={`${tick} -bottom-px -start-px border-b border-s`} />
        <span className={`${tick} -bottom-px -end-px border-b border-e`} />
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element -- see the note above */}
      <img
        src={image.src}
        srcSet={
          image.srcSmall
            ? [`${image.srcSmall} 640w`, image.srcMedium && `${image.srcMedium} 960w`, `${image.src} 1200w`]
                .filter(Boolean)
                .join(", ")
            : undefined
        }
        sizes="(min-width: 1024px) 46rem, 100vw"
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="block aspect-[1200/627] w-full rounded-[2px] object-cover brightness-[0.86] saturate-[0.85]"
      />
    </figure>
  );
}

function ListView({ list, locale }: { list: ArticleList; locale: Locale }) {
  const Tag = list.ordered ? "ol" : "ul";
  return (
    <Tag className={`article-copy article-list ${list.ordered ? "list-decimal" : "list-disc"}`}>
      {list.items.map((item) => (
        <li key={item.slice(0, 32)}>
          <InlineText text={item} locale={locale} />
        </li>
      ))}
    </Tag>
  );
}

function Toc({ a, className = "" }: { a: ArticleContent; className?: string }) {
  return (
    <ol className={`flex flex-col gap-2.5 text-[0.8125rem] leading-snug ${className}`}>
      {a.toc.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`} className="text-fg-muted transition-colors duration-200 hover:text-sage">
            {t.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

const anchor = "scroll-mt-[calc(var(--header-h)+1.5rem)]";
const h2 = `fa-air ${anchor} text-balance text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold leading-[1.3] tracking-[-0.012em] text-fg`;

export default async function ArticleRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: l, slug } = await params;
  const { locale, a } = resolve(l, slug);
  const c = articles[locale];
  const h = home[locale];
  const url = abs(`/${locale}/articles/${slug}/`);
  const date = (d: string) =>
    new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${d}T00:00:00Z`));

  const org = `${siteUrl}/#organization`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        ...(a.heroImage ? { image: [abs(a.heroImage.src)] } : {}),
        datePublished: a.publishedAt,
        dateModified: a.updatedAt ?? a.publishedAt,
        articleSection: a.category,
        keywords: a.keywords.join(", "),
        author: {
          "@type": "Person",
          name: a.author.name,
          jobTitle: a.author.role,
          ...(a.author.bio ? { description: a.author.bio } : {}),
          ...(a.author.href ? { url: abs(localHref(locale, a.author.href)) } : {}),
        },
        publisher: { "@id": org },
        mainEntityOfPage: { "@id": url },
      },
      {
        "@type": "Organization",
        "@id": org,
        name: site.name,
        alternateName: [site.nameFa],
        url: siteUrl,
        logo: abs("/icon.svg"),
        sameAs: site.sameAs,
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: a.meta.title,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: abs(`/${locale}/`) },
          { "@type": "ListItem", position: 2, name: c.breadcrumb, item: abs(`/${locale}/articles/`) },
          { "@type": "ListItem", position: 3, name: a.breadcrumb, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: a.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  const crumb = "transition-colors duration-200 hover:text-sage";

  return (
    // Long-form: the one-screen band and its scroll snapping do not apply here
    // (style.md). `data-free-scroll` turns the snap off for this page only.
    <main id="main" data-free-scroll="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header id="top" className="shell pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]">
        <nav aria-label={c.article.breadcrumbLabel}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem] text-slate">
            <li>
              <Link prefetch={false} href={`/${locale}/`} className={crumb}>
                {c.article.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link prefetch={false} href={`/${locale}/articles/`} className={crumb}>
                {c.breadcrumb}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-fg-muted">
              {a.breadcrumb}
            </li>
          </ol>
        </nav>

        <p className="eyebrow mt-8">{a.category}</p>
        <h1 className="fa-air mt-4 max-w-[28ch] text-balance text-[clamp(1.75rem,4.2vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
          {a.title}
        </h1>
        <p className="lead mt-6">{a.leadOpinion}</p>

        <div className="mt-8 max-w-[46rem] border-t border-line pt-5">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-fg-muted">
            {a.author.href ? (
              <Link prefetch={false} rel="author" href={localHref(locale, a.author.href)} className="font-medium text-fg transition-colors duration-200 hover:text-sage">
                {a.author.name}
              </Link>
            ) : (
              <span className="font-medium text-fg">{a.author.name}</span>
            )}
            <span>{a.author.role}</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-2" />
            <span>
              {c.article.published} <time dateTime={a.publishedAt}>{date(a.publishedAt)}</time>
            </span>
            {a.updatedAt ? (
              <>
                <span aria-hidden="true" className="h-3 w-px bg-line-2" />
                <span>
                  {c.article.updated} <time dateTime={a.updatedAt}>{date(a.updatedAt)}</time>
                </span>
              </>
            ) : null}
          </p>
          {a.author.bio ? <p className="mt-2 text-[0.8125rem] leading-relaxed text-slate">{a.author.bio}</p> : null}
        </div>
      </header>

      <div className="shell pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,46rem)_15rem] lg:justify-between lg:gap-16">
          <article className="min-w-0">
            <details className="group mb-10 rounded-[4px] border border-line lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[0.875rem] font-medium text-fg [&::-webkit-details-marker]:hidden">
                {a.tocHeading}
                <Plus width={16} height={16} aria-hidden="true" className="text-slate transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <Toc a={a} className="border-t border-line px-4 py-4" />
            </details>

            <div id="overview" className={`${anchor} flex flex-col gap-5`}>
              {a.intro.split("\n\n").map((p) => (
                <p key={p.slice(0, 32)} className="article-copy">
                  <InlineText text={p} locale={locale} />
                </p>
              ))}
            </div>

            {a.heroImage ? (
              <div className="mt-10">
                <Figure image={a.heroImage} priority />
              </div>
            ) : null}

            {a.sections.map((s) => (
              <section key={s.id} id={s.id} className={`${anchor} mt-16`} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`} className={h2}>
                  {s.heading}
                </h2>
                {s.image ? (
                  <div className="mt-6">
                    <Figure image={s.image} />
                  </div>
                ) : null}
                <div className="mt-6 flex flex-col gap-5">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="article-copy">
                      <InlineText text={p} locale={locale} />
                    </p>
                  ))}
                  {s.list ? <ListView list={s.list} locale={locale} /> : null}
                  {s.after?.map((p) => (
                    <p key={p.slice(0, 32)} className="article-copy">
                      <InlineText text={p} locale={locale} />
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="rule mt-16" aria-hidden="true" />
            <section id="conclusion" className={`${anchor} mt-12`} aria-labelledby="conclusion-h">
              <h2 id="conclusion-h" className={h2}>
                {a.conclusionHeading}
              </h2>
              <p className="article-copy mt-5">
                <InlineText text={a.conclusion} locale={locale} />
              </p>
            </section>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <nav aria-labelledby="related-h">
                <h2 id="related-h" className="eyebrow">
                  {a.internalHeading}
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-[0.9375rem]">
                  {a.internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link prefetch={false} href={localHref(locale, link.href)} className="text-sage underline decoration-sage/30 underline-offset-4 transition-colors duration-200 hover:decoration-sage">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <h2 className="eyebrow">{a.externalHeading}</h2>
                <ul className="mt-4 flex flex-col gap-3 text-[0.9375rem]">
                  {a.externalLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" dir="ltr" className="lat text-fg-muted underline decoration-line-2 underline-offset-4 transition-colors duration-200 hover:text-sage">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section id="faq" className={`${anchor} mt-16`} aria-labelledby="faq-h">
              <h2 id="faq-h" className={h2}>
                {a.faqHeading}
              </h2>
              <div className="mt-6 border-t border-line">
                {a.faq.map((f) => (
                  <details key={f.question} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-[0.9688rem] font-medium text-fg transition-colors duration-200 hover:text-sage [&::-webkit-details-marker]:hidden">
                      <h3 className="fa-air text-[0.9688rem] font-medium">{f.question}</h3>
                      <Plus width={18} height={18} aria-hidden="true" className="mt-1 shrink-0 text-slate transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="article-copy pb-5 pe-10">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <a href="#top" className="mt-12 inline-flex min-h-[48px] items-center gap-2 text-[0.875rem] font-medium text-sage transition-colors duration-200 hover:text-fg">
              <span aria-hidden="true" className="inline-block -rotate-90 rtl:rotate-90">
                &rarr;
              </span>
              {c.article.backToTop}
            </a>
          </article>

          <aside className="hidden lg:block">
            <nav aria-labelledby="toc-h" className="sticky top-[calc(var(--header-h)+2rem)] border-s border-line ps-5">
              <h2 id="toc-h" className="eyebrow mb-4">
                {a.tocHeading}
              </h2>
              <Toc a={a} />
            </nav>
          </aside>
        </div>
      </div>

      <Cta locale={locale} s={{ ...h.cta, eyebrow: c.article.ctaEyebrow }} action={h.navCta} />
    </main>
  );
}
