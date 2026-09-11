import type { ReactNode } from "react";
import type { ServiceContent } from "@/content/services";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { LazyFamilyModels } from "@/components/LazyFamilyModels";
import { NearImage } from "@/components/NearImage";

/** Drafting ticks, the same ones the recording plate and the R&D sheet use. */
function Corners() {
  const c = "absolute h-3.5 w-3.5 border-line-2";
  return (
    <span aria-hidden="true">
      <span className={`${c} -start-px -top-px border-s border-t`} />
      <span className={`${c} -end-px -top-px border-e border-t`} />
      <span className={`${c} -bottom-px -start-px border-b border-s`} />
      <span className={`${c} -bottom-px -end-px border-b border-e`} />
    </span>
  );
}

/**
 * Real work, for the pages where a screen recording of a plugin would be the
 * wrong evidence. Two units from one job, turning together so the shared
 * frame is obvious, with a ring on the corner the detail belongs to and a
 * leader running out to the detail itself.
 *
 * Laid out like the recordings section: the drawing on one side, its own copy
 * on the other, so the section explains itself rather than relying on the
 * reader to infer what "same bones" means. The side follows the reading
 * direction, since the grid mirrors with `dir`.
 */
export function Showcase({
  s,
  id = "see-it-run",
  aside,
}: {
  s: NonNullable<ServiceContent["showcase"]>;
  /** Section anchor. Defaults to the id the home and service pages link to. */
  id?: string;
  /** Beside the heading — the Products page puts its service-page link here. */
  aside?: ReactNode;
}) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} aside={aside} />

      <Reveal className="grid gap-6 lg:grid-cols-[1.75fr_1fr] lg:gap-10">
        <div className="relative overflow-hidden rounded-[4px] border border-line bg-surface/40 lg:self-center">
          <Corners />
          <div className="grid gap-px bg-line sm:grid-cols-[1.5fr_1fr] lg:h-[clamp(220px,36svh,300px)] lg:grid-rows-[1fr]">
            {/* The two units */}
            <div className="relative min-h-[560px] bg-ink/60 sm:min-h-[210px] lg:min-h-0">
              <LazyFamilyModels />
              {/* Stacked on a phone, so each label heads its own unit — and the
                  glazed one moves to the lower row, directly above the detail. */}
              <ul
                dir="ltr"
                className="pointer-events-none absolute inset-0 grid grid-rows-2 gap-3 p-3.5 sm:inset-b-auto sm:bottom-auto sm:grid-cols-2 sm:grid-rows-1"
              >
                {s.units.map((u, i) => (
                  <li
                    key={u.name}
                    dir="auto"
                    className={`self-start text-center ${
                      i === 0 ? "row-start-2 sm:row-start-1" : "row-start-1"
                    }`}
                  >
                    <span className="block text-[0.75rem] font-medium leading-snug text-sage">
                      {u.name}
                    </span>
                    <span className="mt-0.5 block text-[0.6875rem] leading-snug text-fg-muted">
                      {u.caption}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The detail the ring points at, on a light plate like the
                recordings — a render out of the model, not page furniture. */}
            <figure className="relative m-0 flex min-h-0 flex-col bg-plate p-2.5">
              <span
                dir="ltr"
                className="lat mb-2 flex items-center gap-2.5 px-0.5 text-[0.6875rem] font-medium tracking-[0.12em] text-[#3d4350]"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-[#c0863b]" aria-hidden="true" />
                {s.detail.label}
              </span>
              <NearImage
                // 720px WebP: it never displays wider than ~350px, and the 900px
                // JPEG was 147 KB loading ahead of the hero on a phone.
                src="/images/family-detail.webp"
                alt={s.detail.alt}
                width={720}
                height={650}
                sizes="(min-width: 1024px) 24vw, 90vw"
                className="min-h-0 w-full flex-1 rounded-[2px] object-contain object-center"
              />
              <figcaption className="mt-2 px-0.5 text-[0.6875rem] leading-snug text-[#565e6b]">
                {s.detail.caption}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* The copy, beside the drawing rather than under it. */}
        <div className="flex flex-col justify-center">
          {s.body.split("\n\n").map((para, i) => (
            <p key={para.slice(0, 24)} className={i === 0 ? "body-copy" : "body-copy mt-3"}>
              {para}
            </p>
          ))}

          <dl className="mt-4 border-t border-line">
            {s.specs.map((sp) => (
              <div
                key={sp.k}
                className="flex items-baseline justify-between gap-6 border-b border-line py-1.5"
              >
                <dt className="text-[0.75rem] tracking-[0.08em] text-slate">{sp.k}</dt>
                <dd className="text-end text-[0.8125rem] text-fg">{sp.v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-[0.6875rem] leading-snug text-fg-muted">{s.note}</p>
        </div>
      </Reveal>
    </Section>
  );
}
