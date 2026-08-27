import Link from "next/link";
import { lh } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";

export function ProductCard({
  locale,
  eyebrow,
  title,
  description,
  tags,
  href,
  linkLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
}) {
  return (
    <Link
      href={lh(locale, href)}
      className="group flex flex-col justify-between rounded-2xl border border-ink-border bg-ink-soft p-7 text-smoke transition-colors duration-200 hover:border-navy-400 md:p-8"
    >
      <div>
        <span className="text-xs uppercase tracking-widest text-navy-300">{eyebrow}</span>
        <h3 className="font-heading mt-4 text-xl font-semibold leading-snug md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-border px-3 py-1 text-[11px] uppercase tracking-widest text-white/45"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-300 transition-transform group-hover:gap-3">
        {linkLabel}
        <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
