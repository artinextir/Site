import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { LocaleFrame } from "@/components/LocaleFrame";
import { siteUrl } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  return {
    alternates: {
      canonical: `${siteUrl}/${locale}/`,
      languages: {
        fa: `${siteUrl}/fa/`,
        en: `${siteUrl}/en/`,
        "x-default": `${siteUrl}/fa/`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  return <LocaleFrame locale={locale}>{children}</LocaleFrame>;
}
