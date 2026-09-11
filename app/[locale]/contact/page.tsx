import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { contact } from "@/content/contact";
import { site, siteUrl } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { Aurora } from "@/components/Aurora";
import { PointCloud } from "@/components/PointCloud";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolve(localeRaw: string) {
  if (!(locales as readonly string[]).includes(localeRaw)) notFound();
  const locale = localeRaw as Locale;
  return { locale, c: contact[locale] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/contact/`;

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${siteUrl}/fa/contact/`,
        en: `${siteUrl}/en/contact/`,
        "x-default": `${siteUrl}/fa/contact/`,
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

export default async function ContactPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeRaw } = await params;
  const { locale, c } = resolve(localeRaw);
  const url = `${siteUrl}/${locale}/contact/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": url,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${siteUrl}/#organization` },
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

      {/*
        The mark sits in the grid rather than in `behind`, because a full-bleed
        canvas would run under the headline and turn the type to mush at the
        crossover. In the column it occupies the half the copy leaves empty —
        which in fa is the left, in en the right, without either being
        specified: the grid follows the document direction.
      */}
      <Section behind={<Aurora />}>
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="relative z-10">
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[20ch] text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-fg">
              {c.hero.title}
            </h1>
            <p className="lead mt-7 max-w-[54ch]">{c.hero.lead}</p>
          </div>

          {/*
            The canvas bleeds 150px past this box on every side so a thrown
            point is not clipped mid-flight, which means it overlaps the copy
            column — hence z-0 here against z-10 on the text. Points fly behind
            the headline rather than across it.
          */}
          <div className="relative z-0 order-first min-h-[clamp(240px,34vh,320px)] lg:order-none lg:min-h-[min(58vh,560px)]">
            <PointCloud glyph="artinext-logo" fit={0.46} />
          </div>
        </Reveal>
      </Section>

      {/*
        One screen, everything in it. The form leads and the direct channels
        sit beside it: a reader who navigated here came to write, but the one
        who would rather not use a form at all should not have to hunt.
      */}
      <Section>
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.75fr] lg:gap-16">
          <ContactForm content={c.form} />

          <aside className="flex flex-col gap-px self-start overflow-hidden rounded-[4px] border border-line bg-line">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 bg-ink p-6 transition-colors duration-300 hover:bg-surface-2"
            >
              <Mail width={20} height={20} aria-hidden="true" className="shrink-0 text-sage" />
              <span>
                <span className="block text-[0.75rem] tracking-[0.08em] text-slate">
                  {c.aside.emailLabel}
                </span>
                <span dir="ltr" className="lat mt-1 block text-[0.9375rem] text-fg">
                  {site.email}
                </span>
              </span>
            </a>

            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-4 bg-ink p-6 transition-colors duration-300 hover:bg-surface-2"
            >
              <Phone width={20} height={20} aria-hidden="true" className="shrink-0 text-sage" />
              <span>
                <span className="block text-[0.75rem] tracking-[0.08em] text-slate">
                  {c.aside.phoneLabel}
                </span>
                <span dir="ltr" className="lat mt-1 block text-[0.9375rem] text-fg">
                  {site.phone}
                </span>
              </span>
            </a>

            <div className="bg-ink p-6">
              <p className="text-[0.75rem] tracking-[0.08em] text-slate">
                {c.aside.firstCallHeading}
              </p>
              <ol className="mt-4 flex flex-col gap-3">
                {c.aside.firstCallSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-[0.875rem] leading-relaxed text-fg-muted"
                  >
                    <span className="lat mt-px shrink-0 text-[0.75rem] text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Reveal>
      </Section>
    </main>
  );
}
