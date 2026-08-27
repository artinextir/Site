import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders inline `**bold**` and `[label](/href)` markup within plain paragraph text. */
export function InlineText({ text, locale }: { text: string; locale: Locale }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    const [full, boldText, linkLabel, linkHref] = match;
    if (boldText !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-smoke">
          {boldText}
        </strong>
      );
    } else {
      nodes.push(
        <Link
          key={key++}
          href={lh(locale, linkHref)}
          className="text-navy-300 underline decoration-navy-300/40 underline-offset-4 transition-colors hover:text-navy-200"
        >
          {linkLabel}
        </Link>
      );
    }
    lastIndex = index + full.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}
