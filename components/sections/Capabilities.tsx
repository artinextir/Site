import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";

export function Capabilities({ c }: { c: HomeContent }) {
  const s = c.capabilities;

  return (
    <Section>
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      <Reveal stagger={90} className="grid gap-8 md:grid-cols-3 md:gap-8">
        {s.groups.map((g) => (
          <div key={g.title}>
            <h3 className="border-b border-line-2 pb-3 text-[0.9375rem] font-semibold text-fg">
              {g.title}
            </h3>
            <ul className="mt-1">
              {g.items.map((item) => (
                // The row's own rule is the underline: it redraws in sage from
                // the reading edge as the word lights, so both move together.
                <li
                  key={item}
                  className="cap-row relative border-b border-line py-2.5 text-[0.8125rem] text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
