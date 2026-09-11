import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/** A locale-free site path gets the reader's locale; anything else is left alone. */
export function localHref(locale: Locale, href: string) {
  return href.startsWith("/") ? `/${locale}${href}` : href;
}

/**
 * Inline `**bold**` and `[label](/href)` inside a paragraph.
 *
 * Site paths become `next/link`; absolute URLs open in a new tab with
 * `noopener`, which is the on-page SEO checklist's rule for outbound links.
 */
export function InlineText({ text, locale }: { text: string; locale: Locale }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) nodes.push(text.slice(last, at));
    const [full, bold, label, href] = m;

    if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-fg">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <Link
          key={key++}
          prefetch={false}
          href={localHref(locale, href)}
          className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors duration-200 hover:decoration-sage"
        >
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors duration-200 hover:decoration-sage"
        >
          {label}
        </a>,
      );
    }
    last = at + full.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
