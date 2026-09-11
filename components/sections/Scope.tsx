import type { PanelSection } from "@/content/services";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { Aurora } from "@/components/Aurora";

/**
 * Four panels on the aurora band. Carries whichever of the two arguments the
 * page is making in this slot — `scope` (what moves the size of the job) on
 * the non-geo pages, `local` (what working together looks like from there) on
 * the city and country ones. Same furniture, because they do the same job in
 * the same position; different content, because they have to.
 *
 * No prices in either case. None are published anywhere on this site, and a
 * range invented to fill the section would be the least trustworthy thing on
 * the page.
 */
export function Scope({ s, id }: { s: PanelSection; id?: string }) {
  return (
    <Section id={id} behind={<Aurora />}>
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      <Reveal
        stagger={80}
        className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line/70 sm:grid-cols-2 lg:grid-cols-4"
      >
        {s.items.map((item, i) => (
          <article
            key={item.title}
            className="group bg-ink/75 p-4 backdrop-blur-[3px] transition-colors duration-500 hover:bg-ink/55 md:p-5"
          >
            <span
              dir="ltr"
              className="tnum block text-[0.75rem] font-medium tracking-[0.1em] text-sage transition-all duration-500 group-hover:tracking-[0.2em]"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="card-title mt-3.5 min-h-[2.75em] text-[0.9688rem] font-semibold leading-snug">{item.title}</h3>
            <p className="body-copy mt-2 text-[0.8438rem]">{item.body}</p>
          </article>
        ))}
      </Reveal>

      <p className="mt-4 max-w-[62ch] border-s-2 border-line-2 ps-4 text-[0.8125rem] text-fg-muted">
        {s.note}
      </p>
    </Section>
  );
}
