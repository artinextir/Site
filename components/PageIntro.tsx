import type { ReactNode } from "react";
import { Tag } from "@/components/Tag";

export function PageIntro({
  eyebrow,
  aside,
  headline,
  description,
  tone = "ink",
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  aside: string;
  headline: string;
  description: string;
  tone?: "ink" | "smoke";
  breadcrumbs?: ReactNode;
  children?: ReactNode;
}) {
  const mutedText = tone === "ink" ? "text-white/60" : "text-ink/60";

  return (
    <div className="top-tick relative py-section-md md:py-section-lg">
      {breadcrumbs && <div className="mb-10">{breadcrumbs}</div>}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Tag tone={tone}>{eyebrow}</Tag>
        <Tag tone={tone}>{aside}</Tag>
      </div>
      <h1 className="font-heading text-balance max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tightest">
        {headline}
      </h1>
      <p className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed ${mutedText}`}>
        {description}
      </p>
      {children}
    </div>
  );
}
