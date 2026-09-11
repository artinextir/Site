import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { ArrowUpRight } from "@/components/Icons";

export function Insights({ c }: { c: HomeContent }) {
  const s = c.insights;

  return (
    <Section>
      <SectionHead
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        aside={
          <Link
            prefetch={false}
            href={s.href}
            className="inline-flex min-h-[24px] shrink-0 items-center gap-2 text-[0.875rem] text-fg-muted transition-colors duration-200 hover:text-sage"
          >
            {s.cta}
            <ArrowUpRight width={15} height={15} aria-hidden="true" className="rtl:-scale-x-100" />
          </Link>
        }
      />

      <Reveal stagger={90} className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        {s.items.map((item) => (
          <article key={item.href} className="group bg-ink">
            <Link prefetch={false} href={item.href} className="flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface">
              <time
                dateTime={item.date.includes("-") ? item.date : undefined}
                className="tnum text-[0.75rem] tracking-[0.08em] text-slate"
              >
                {item.date}
              </time>
              <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-fg transition-colors duration-200 group-hover:text-sage">
                {item.title}
              </h3>
              <p className="body-copy mt-3">{item.excerpt}</p>
              <span
                className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] text-fg-muted"
                aria-hidden="true"
              >
                <ArrowUpRight width={15} height={15} className="rtl:-scale-x-100" />
              </span>
            </Link>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
