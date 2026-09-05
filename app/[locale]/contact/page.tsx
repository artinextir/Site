import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/content/contact";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
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
  const c = contact[locale as Locale] ?? contact.fa;
  const url = `${siteUrl}/${locale}/contact/`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/contact") },
    openGraph: { title: c.meta.title, description: c.meta.description, url, type: "website", images: [ogImageUrl(locale as Locale)] },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description, images: [ogImageUrl(locale as Locale)] },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const c = contact[locale];
  const n = nav[locale];

  return (
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
                { label: c.breadcrumb, href: "/contact" },
              ]}
            />
          }
        />
      </Container>

      <Container className="pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div className="rounded-md border border-ink-border bg-ink-soft p-7 md:p-10">
            <ContactForm content={c.form} />
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-md border border-ink-border p-7">
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <span className="block text-white/50">{c.sidebar.emailLabel}</span>
                  <a href={`mailto:${site.email}`} className="text-navy-300 transition-colors hover:text-navy-200">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block text-white/50">{c.sidebar.phoneLabel}</span>
                  <a
                    href={`tel:${site.phoneHref}`}
                    dir="ltr"
                    className="inline-block text-navy-300 transition-colors hover:text-navy-200"
                  >
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-ink-border p-7">
              <h2 className="font-heading text-base font-semibold">{c.sidebar.firstCallHeading}</h2>
              <ol className="mt-5 flex flex-col gap-4">
                {c.sidebar.firstCallSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 text-sm text-white/60">
                    <span className="font-heading shrink-0 text-navy-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
