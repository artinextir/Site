import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { LocaleFrame } from "@/components/LocaleFrame";
import { home } from "@/content/home";
import { hreflangAlternates, ogImageUrl, siteUrl } from "@/content/site";

// The bare domain used to be a client-side meta-refresh to /fa: a full
// second page load (fetch, parse, hydrate) stacked on top of the first,
// which is what was driving the 4.4s LCP PageSpeed flagged on
// https://artinext.ir/. defaultLocale is a fixed constant, not
// browser-detected, so the redirect was never doing real routing work —
// rendering the fa homepage here directly removes that extra round trip.
// canonical still points at /fa (the URL in the sitemap and every internal
// link) so this isn't a duplicate-content page in Google's eyes.
export function generateMetadata(): Metadata {
  const c = home.fa;
  const url = `${siteUrl}/fa/`;

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
      images: [ogImageUrl("fa")],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [ogImageUrl("fa")],
    },
  };
}

export default function RootPage() {
  return (
    <LocaleFrame locale="fa">
      <HomeContent locale="fa" />
    </LocaleFrame>
  );
}
