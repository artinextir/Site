import { articleRevitLibraryOptimization } from "@/content/article-revit-library-optimization";
import { articleRevitModelChecker } from "@/content/article-revit-model-checker";
import { articleRevitPluginDevelopmentCost } from "@/content/article-revit-plugin-development-cost";
import { articleCustomParametricRevitFamilyCreation } from "@/content/article-custom-parametric-revit-family-creation";
import { articleAecWorkflowAutomation } from "@/content/article-aec-workflow-automation";
import { articleCustomDynamoScriptDevelopment } from "@/content/article-custom-dynamo-script-development";
import { articleRevitPluginDevelopmentCompany } from "@/content/article-revit-plugin-development-company";
import type { ArticleContent } from "@/content/article-types";
import type { Locale } from "@/lib/i18n/config";

export const articleRegistry = [
  articleRevitLibraryOptimization,
  articleRevitModelChecker,
  articleRevitPluginDevelopmentCost,
  articleCustomParametricRevitFamilyCreation,
  articleAecWorkflowAutomation,
  articleCustomDynamoScriptDevelopment,
  articleRevitPluginDevelopmentCompany,
];

export const articleSlugs = articleRegistry.map((entry) => entry.fa.slug);

export function getArticle(locale: Locale, slug: string): ArticleContent | undefined {
  const entry = articleRegistry.find((item) => item.fa.slug === slug);
  return entry?.[locale];
}
