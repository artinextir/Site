import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { ArrowUpRight } from "@/components/Icons";

/** Drafting ticks at the sheet's four corners. */
function Corners() {
  const c = "absolute h-4 w-4 border-line-2";
  return (
    <span aria-hidden="true">
      <span className={`${c} start-4 top-4 border-s border-t`} />
      <span className={`${c} end-4 top-4 border-e border-t`} />
      <span className={`${c} bottom-4 start-4 border-b border-s`} />
      <span className={`${c} bottom-4 end-4 border-b border-e`} />
    </span>
  );
}

/**
 * R&D is presented as a drawing sheet rather than a card: drafting ticks, a
 * ruled ground, and a plotter head that crosses it every fourteen seconds.
 * The research points hang off a spine, and picking one out fills its node
 * and runs a leader line across to the text — the way a callout is built on
 * a real sheet. Deliberately not the tilt panel used in two sections above.
 */
export function Rnd({ c }: { c: HomeContent }) {
  const s = c.rnd;

  return (
    <Section>
      <Reveal className="rnd-sheet relative overflow-hidden rounded-[4px] border border-line bg-surface p-8 md:p-14">
        <span className="rnd-rule-ground" aria-hidden="true" />
        <span className="rnd-plot" aria-hidden="true" />
        <Corners />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="mt-4 max-w-[20ch] text-balance text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-[1.25] tracking-[-0.015em] text-fg">
              {s.title}
            </h2>
            <p className="lead mt-5 text-[1rem]">{s.lead}</p>

            <Link
              prefetch={false}
              href={s.href}
              className="rnd-cta mt-8 inline-flex min-h-[24px] items-center gap-2 pb-1 text-[0.9375rem] text-fg transition-colors duration-300 hover:text-sage"
            >
              {s.cta}
              <ArrowUpRight width={15} height={15} aria-hidden="true" className="rtl:-scale-x-100" />
            </Link>
          </div>

          <ul className="rnd-spine relative flex flex-col justify-center">
            {s.points.map((p) => (
              <li
                key={p}
                className="rnd-point relative py-3 ps-9 text-[0.9375rem] text-fg-muted transition-colors duration-500 hover:text-fg"
              >
                <span className="rnd-node" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
