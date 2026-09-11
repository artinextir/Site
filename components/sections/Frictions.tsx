import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { LazyPointCloud } from "@/components/LazyPointCloud";
import { TiltCard } from "@/components/TiltCard";

export function Frictions({ s }: { s: HomeContent["frictions"] }) {

  return (
    <Section
      behind={
        <>
          {/* A still field of sage points: it does not turn, the cursor
              scatters it, and the beam passes through it every few seconds.
              Between beams, with nothing touching it, it stops drawing
              altogether.

              The field is laid out to the section's own width and height, so
              it reaches both edges on any screen, and it fades only at the top
              and bottom seams. The radial vignette the grid used darkened the
              sides as well, which with a field meant to span the page is
              exactly the part it would hide. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <LazyPointCloud glyph="sage-field" fit={0.5} turn={false} />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--ink),transparent_16%,transparent_84%,var(--ink))]"
            aria-hidden="true"
          />
        </>
      }
    >
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      <Reveal stagger={90} className="grid gap-4 md:grid-cols-3">
        {s.items.map((item) => (
          <TiltCard
            key={item.n}
            lift={14}
            intensity={5.5}
            className="group rounded-[4px] border border-line bg-ink/70 backdrop-blur-[2px] hover:border-sage/40"
          >
            <div className="p-6 md:p-7">
              <div className="flex items-center justify-between">
                <p
                  dir="ltr"
                  className="numeral tnum text-[2.125rem] font-bold leading-none"
                  aria-hidden="true"
                >
                  {item.n}
                </p>
                <span
                  className="h-px w-8 bg-line-2 transition-all duration-500 group-hover:w-14 group-hover:bg-sage"
                  aria-hidden="true"
                />
              </div>

              <h3 className="card-title mt-5 min-h-[2.4em] text-[1.0625rem] font-semibold leading-snug">{item.title}</h3>
              <p className="body-copy mt-2.5">{item.body}</p>
            </div>
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
