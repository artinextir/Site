import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { home } from "@/content/home";
import { site, siteUrl } from "@/content/site";

import { Hero } from "@/components/sections/Hero";
import { Frictions } from "@/components/sections/Frictions";
import { Products } from "@/components/sections/Products";
import { Demo } from "@/components/sections/Demo";
import { Process } from "@/components/sections/Process";
import { Rnd } from "@/components/sections/Rnd";
import { Capabilities } from "@/components/sections/Capabilities";
import { Insights } from "@/components/sections/Insights";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const raw = (await params).locale;
  if (!(locales as readonly string[]).includes(raw)) notFound();
  const locale = raw as Locale;
  const c = home[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        alternateName: [site.nameFa, site.nameFaAlt],
        url: `${siteUrl}/${locale}/`,
        email: site.email,
        telephone: site.phone,
        sameAs: site.sameAs,
        address: { "@type": "PostalAddress", addressCountry: "IR" },
        description: c.meta.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: locale === "fa" ? "fa-IR" : "en",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${locale}/#faq`,
        mainEntity: c.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero locale={locale} c={c} />
      <Frictions s={c.frictions} />
      <Products c={c} />
      <Demo s={c.demo} ui={c.ui} />
      <Process s={c.process} />
      <Rnd c={c} />
      <Capabilities c={c} />
      <Insights c={c} />
      <Faq s={c.faq} />
      <Cta locale={locale} s={c.cta} action={c.navCta} />
    </main>
  );
}
