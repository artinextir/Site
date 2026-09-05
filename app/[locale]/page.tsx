import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { home } from "@/content/home";
import { locales, type Locale } from "@/lib/i18n/config";
import { siteUrl, hreflangAlternates, ogImageUrl } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = home[locale as Locale] ?? home.fa;
  const url = `${siteUrl}/${locale}/`;

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates("/") },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url,
      siteName: "ARTINEXT",
      type: "website",
      images: [ogImageUrl(locale as Locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [ogImageUrl(locale as Locale)],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  return <HomeContent locale={locale} />;
}
