import type { ServicePage } from "@/content/services/types";
import { revitPluginDevelopment } from "@/content/services/revit-plugin-development";
import { revitPluginDevelopmentTehran } from "@/content/services/revit-plugin-development-tehran";
import { revitFamilyCreation } from "@/content/services/revit-family-creation";
import { aecWorkflowAutomation } from "@/content/services/aec-workflow-automation";
import { revitFamilyCreationTehran } from "@/content/services/revit-family-creation-tehran";
import { workflowAutomationTehran } from "@/content/services/workflow-automation-tehran";

/**
 * Registry for the `/[locale]/[service]/` route. Order here is the order the
 * pages were built, which is the priority order in order.txt — it has no
 * effect on routing, but it makes the queue readable.
 *
 * revit-family-creation-isfahan.ts is intentionally NOT registered. It shared
 * ~59% of its prose with the Tehran page — the closest pair in the set — and
 * the domain is too young to carry a near-duplicate city page. The file is
 * kept so it can be re-registered once it has genuinely local substance, and
 * content/redirects.mjs points its old URL at the generic service page.
 */
export const servicePages: ServicePage[] = [
  revitPluginDevelopment,
  revitPluginDevelopmentTehran,
  revitFamilyCreation,
  aecWorkflowAutomation,
  revitFamilyCreationTehran,
  workflowAutomationTehran,
];

export const serviceSlugs = servicePages.map((s) => s.slug);

export function serviceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export type { PanelSection, ServiceContent, ServicePage } from "@/content/services/types";
