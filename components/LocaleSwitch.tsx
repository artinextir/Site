"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales, otherLocale } from "@/lib/i18n/config";

/**
 * Switches language without losing your place.
 *
 * Two things were wrong with a plain `/{other}/` link. It threw the reader
 * back to the homepage from every page but the homepage — a translation
 * button that also navigates is a bug, not a feature. And even on the
 * homepage it dropped them at the top, which on a site of full-screen
 * sections means losing the one they were reading.
 *
 * So: swap only the locale segment, keep the rest of the path, and carry the
 * section index across as a hash for `SectionAnchor` to land on.
 */
export function LocaleSwitch({
  locale,
  label,
  className = "",
  onNavigate,
}: {
  locale: Locale;
  label: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const other = otherLocale(locale);
  const pathname = usePathname() || `/${locale}/`;

  // /fa/revit-plugin-development/ -> /en/revit-plugin-development/
  const segments = pathname.split("/").filter(Boolean);
  if ((locales as readonly string[]).includes(segments[0])) segments[0] = other;
  else segments.unshift(other);
  const href = `/${segments.join("/")}/`.replace(/\/{2,}/g, "/");

  /**
   * Which full-screen section is on screen right now. Read at click time
   * rather than tracked on scroll, so nothing runs until it is needed.
   */
  const currentSection = () => {
    const sections = Array.from(document.querySelectorAll("main > section"));
    if (!sections.length) return null;
    let best = 0;
    let bestDistance = Infinity;
    sections.forEach((s, i) => {
      const distance = Math.abs(s.getBoundingClientRect().top);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    return best;
  };

  return (
    <Link
      prefetch={false}
      href={href}
      hrefLang={other}
      lang={other}
      className={className}
      onClick={(e) => {
        onNavigate?.();
        const index = currentSection();
        if (index === null || index === 0) return;
        // Rewrite the destination so the target page knows where to land.
        e.preventDefault();
        window.location.assign(`${href}#s${index}`);
      }}
    >
      {label}
    </Link>
  );
}
