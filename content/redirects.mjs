/**
 * URL disposition map for everything the V2 site published that V3 does not.
 *
 * Plain .mjs rather than .ts because scripts/postbuild.mjs consumes it
 * directly at build time, after `next build` has already run.
 *
 * Two categories, and the difference is deliberate:
 *
 *   redirects â€” the page is gone but the intent behind it is still served
 *     somewhere. Sends the visitor and consolidates the ranking signal onto
 *     the surviving page. Use this by default.
 *
 *   gone â€” the page should never have existed and we do not want it back.
 *     These are the Persian-language pages that targeted Canada, the UAE and
 *     the United States: nobody in those markets searches in Persian, so they
 *     read as doorway pages to Google and as nonsense to a human. A redirect
 *     would launder that signal onto a page we care about. 410 tells Google
 *     to drop them and stop asking.
 *
 * The English foreign-market pages are redirects, not 410s â€” targeting Canada
 * in English is a thin page, not an incoherent one, so the signal is worth
 * keeping on the generic service page.
 */

/** Old path -> surviving path. Both need the trailing slash. */
export const redirects = [
  // City pages V3 does not rebuild. Intent survives on the generic service.
  ["/fa/revit-family-creation-shiraz/", "/fa/revit-family-creation/"],
  ["/en/revit-family-creation-shiraz/", "/en/revit-family-creation/"],
  ["/fa/revit-family-creation-isfahan/", "/fa/revit-family-creation/"],
  ["/en/revit-family-creation-isfahan/", "/en/revit-family-creation/"],
  ["/fa/revit-plugin-development-mashhad/", "/fa/revit-plugin-development/"],
  ["/en/revit-plugin-development-mashhad/", "/en/revit-plugin-development/"],
  ["/fa/workflow-automation-isfahan/", "/fa/aec-workflow-automation/"],
  ["/en/workflow-automation-isfahan/", "/en/aec-workflow-automation/"],

  // English foreign-market pages: thin, but coherent. Keep the signal.
  ["/en/revit-plugin-development-canada/", "/en/revit-plugin-development/"],
  ["/en/revit-plugin-development-uae/", "/en/revit-plugin-development/"],
  ["/en/revit-family-creation-service-united-states/", "/en/revit-family-creation/"],

  // V2 pages with no V3 counterpart of their own. Solutions restated the
  // homepage's services; the three product subpages folded into /products/.
  // All four are in the live V2 sitemap, so they get a 301, not a 404.
  ["/fa/solutions/", "/fa/"],
  ["/en/solutions/", "/en/"],
  ["/fa/products/revit-families/", "/fa/products/"],
  ["/en/products/revit-families/", "/en/products/"],
  ["/fa/products/digital-tools/", "/fa/products/"],
  ["/en/products/digital-tools/", "/en/products/"],
  ["/fa/products/automation/", "/fa/products/"],
  ["/en/products/automation/", "/en/products/"],

  /* Unprefixed V1/V2 URLs. Search Console still reports these as 404s: they
     predate the locale prefix, and Google has them on file. GitHub Pages
     cannot issue a real 301, so these land as the same stub the other moved
     paths use, which Google follows as a redirect and which carries the
     canonical to the surviving page. */
  ["/solutions/", "/fa/"],
  ["/about/", "/fa/about/"],
  ["/products/", "/fa/products/"],
  ["/products/automation/", "/fa/products/"],
  ["/products/revit-families/", "/fa/products/"],
  ["/products/digital-tools/", "/fa/products/"],
  ["/research-development/", "/fa/research-development/"],
  ["/revit-family-creation-tehran/", "/fa/revit-family-creation-tehran/"],
  ["/workflow-automation-tehran/", "/fa/workflow-automation-tehran/"],
  ["/revit-family-creation-isfahan/", "/fa/revit-family-creation/"],
  ["/articles/aec-workflow-automation/", "/fa/articles/aec-workflow-automation/"],
  ["/articles/custom-parametric-revit-family-creation/", "/fa/articles/custom-parametric-revit-family-creation/"],
  ["/articles/revit-plugin-development-company/", "/fa/articles/revit-plugin-development-company/"],
  ["/articles/custom-dynamo-script-development/", "/fa/articles/custom-dynamo-script-development/"],
  ["/articles/revit-plugin-development-cost/", "/fa/articles/revit-plugin-development-cost/"],
  ["/articles/revit-model-checker/", "/fa/articles/revit-model-checker/"],
];

/** Paths that should return 410 Gone and never come back. */
export const gone = [
  "/fa/revit-plugin-development-canada/",
  "/fa/revit-plugin-development-uae/",
  "/fa/revit-family-creation-service-united-states/",
];
