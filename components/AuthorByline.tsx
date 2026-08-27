import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/content/site";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

export function AuthorByline({
  locale,
  name,
  role,
  bio,
  href,
  date,
  dateLabel,
  updatedDate,
  updatedDateLabel,
  updatedPrefix,
}: {
  locale: Locale;
  name: string;
  role: string;
  bio?: string;
  href?: string;
  date: string;
  dateLabel: string;
  updatedDate?: string;
  updatedDateLabel?: string;
  updatedPrefix?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    ...(bio ? { description: bio } : {}),
    ...(href ? { url: `${siteUrl}/${locale}${href}` } : {}),
    worksFor: {
      "@type": "Organization",
      name: "ARTINEXT",
      url: siteUrl,
    },
  };

  const nameNode = href ? (
    <Link href={lh(locale, href)} className="text-white/80 hover:text-navy-300 transition-colors">
      {name}
    </Link>
  ) : (
    <span className="text-white/80">{name}</span>
  );

  return (
    <div className="flex items-start gap-3 text-sm text-white/55">
      <JsonLd data={schema} />
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-border text-xs font-semibold text-navy-300">
        {name.charAt(0)}
      </span>
      <div>
        <div>
          {nameNode}
          <span className="mx-2 text-white/25">&middot;</span>
          <span>{role}</span>
          <span className="mx-2 text-white/25">&middot;</span>
          <time dateTime={date}>{dateLabel}</time>
          {updatedDate && updatedDateLabel && (
            <>
              <span className="mx-2 text-white/25">&middot;</span>
              <span className="text-white/50">
                {updatedPrefix} <time dateTime={updatedDate}>{updatedDateLabel}</time>
              </span>
            </>
          )}
        </div>
        {bio && <p className="mt-1 max-w-md text-xs leading-relaxed text-white/50">{bio}</p>}
      </div>
    </div>
  );
}
