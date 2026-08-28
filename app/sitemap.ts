import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { articleSlugs } from "@/lib/articles-registry";
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const suffix = path === "/" ? "" : path;
      entries.push({
        url: `${siteUrl}/${locale}${suffix}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${suffix}`])
          ),
        },
      });
    }

    for (const slug of articleSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/articles/${slug}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}/articles/${slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
