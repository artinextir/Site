import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { articleRegistry } from "@/lib/articles-registry";
import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/about",
  "/solutions",
  "/products",
  "/products/revit-families",
  "/products/digital-tools",
  "/products/automation",
  "/research-development",
  "/articles",
  "/contact",
  "/revit-plugin-development-tehran",
  "/revit-family-creation-isfahan",
  "/revit-family-creation-tehran",
  "/workflow-automation-tehran",
  "/revit-plugin-development-uae",
  "/revit-plugin-development-mashhad",
  "/revit-family-creation-service-united-states",
];

// Google's own sitemap guidance is explicit that a lastmod stamped with
// "now" on every build (rather than the page's real last-edited date) is
// worse than omitting it — a signal that's never accurate gets ignored
// wholesale, including on pages where it would be. Static pages here have
// no authored date to draw on, so they're left out of `lastModified`
// entirely; articles do carry a real `publishedAt`/`updatedAt`, so those
// are used verbatim.
function languagesFor(suffix: string) {
  return {
    languages: Object.fromEntries([
      ...locales.map((l) => [l, `${siteUrl}/${l}${suffix}`]),
      ["x-default", `${siteUrl}/fa${suffix}`],
    ]),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const suffix = path === "/" ? "" : path;
      entries.push({
        url: `${siteUrl}/${locale}${suffix}`,
        alternates: languagesFor(suffix),
      });
    }

    for (const article of articleRegistry) {
      const entry = article[locale];
      const suffix = `/articles/${entry.slug}`;
      entries.push({
        url: `${siteUrl}/${locale}${suffix}`,
        lastModified: new Date(entry.updatedAt ?? entry.publishedAt),
        alternates: languagesFor(suffix),
      });
    }
  }

  return entries;
}
