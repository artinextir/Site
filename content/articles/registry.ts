import type { ArticlePage } from "@/content/articles/types";
import { revitPluginDevelopmentCost } from "@/content/articles/revit-plugin-development-cost";
import { revitPluginDevelopmentCompany } from "@/content/articles/revit-plugin-development-company";
import { customParametricRevitFamilyCreation } from "@/content/articles/custom-parametric-revit-family-creation";
import { revitModelChecker } from "@/content/articles/revit-model-checker";
import { revitLibraryOptimization } from "@/content/articles/revit-library-optimization";
import { customDynamoScriptDevelopment } from "@/content/articles/custom-dynamo-script-development";
import { aecWorkflowAutomation } from "@/content/articles/aec-workflow-automation";

/**
 * Every published article. The `/[locale]/articles/[slug]/` route builds
 * exactly these, the index lists exactly these, and the sitemap picks them up
 * from the export — so adding a post is a content file plus one line here.
 *
 * Order is publishing order; the index sorts by date on its own.
 */
export const articlePages: ArticlePage[] = [
  revitPluginDevelopmentCost,
  revitPluginDevelopmentCompany,
  customParametricRevitFamilyCreation,
  revitModelChecker,
  revitLibraryOptimization,
  customDynamoScriptDevelopment,
  aecWorkflowAutomation,
];

export const articleSlugs = articlePages.map((a) => a.slug);

export function articleBySlug(slug: string): ArticlePage | undefined {
  return articlePages.find((a) => a.slug === slug);
}
