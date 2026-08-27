import { articleRevitLibraryOptimization } from "@/content/article-revit-library-optimization";
import { articleRevitModelChecker } from "@/content/article-revit-model-checker";
import type { ArticleContent } from "@/content/article-types";
import type { Locale } from "@/lib/i18n/config";

export const articleRegistry = [articleRevitLibraryOptimization, articleRevitModelChecker];

export const articleSlugs = articleRegistry.map((entry) => entry.fa.slug);

export function getArticle(locale: Locale, slug: string): ArticleContent | undefined {
  const entry = articleRegistry.find((item) => item.fa.slug === slug);
  return entry?.[locale];
}
