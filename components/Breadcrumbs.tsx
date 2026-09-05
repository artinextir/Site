import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/content/site";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({
  locale,
  items,
  tone = "ink",
}: {
  locale: Locale;
  items: Crumb[];
  tone?: "ink" | "smoke";
}) {
  const textMuted = tone === "ink" ? "text-white/50" : "text-ink/50";
  const textActive = tone === "ink" ? "text-smoke" : "text-ink";
  const textLink = tone === "ink" ? "text-white/60 hover:text-navy-300" : "text-ink/60 hover:text-navy-700";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}/${locale}${item.href === "/" ? "" : item.href}/`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className={textActive}>{item.label}</span>
              ) : (
                <Link href={lh(locale, item.href)} className={`transition-colors ${textLink}`}>
                  {item.label}
                </Link>
              )}
              {!isLast && <span className={textMuted}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
