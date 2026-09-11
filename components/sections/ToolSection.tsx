"use client";

import { useState } from "react";
import type { AboutSection } from "@/content/about";
import { PointCloud } from "@/components/PointCloud";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { ArrowRight } from "@/components/Icons";

/**
 * One discipline: its argument on one side, its tools as a point cloud on the
 * other, and a stepper that morphs the cloud from one tool to the next.
 *
 * `iconFirst` sets DOM order, not a side. The grid follows document
 * direction, so icon-first is the left in English and the right in Persian —
 * which is what keeps the alternation reading the same way in both without
 * either being written down twice.
 */
export function ToolSection({
  section,
  iconFirst,
}: {
  section: AboutSection;
  iconFirst: boolean;
}) {
  const [i, setI] = useState(0);
  const tools = section.tools;
  const tool = tools[i];
  const many = tools.length > 1;

  const step = (d: number) => setI((prev) => (prev + d + tools.length) % tools.length);

  const art = (
    <div className="relative z-0 order-first min-h-[clamp(260px,38vh,340px)] lg:order-none lg:min-h-[min(56vh,540px)]">
      <PointCloud glyph={tool.glyph} fit={0.44} />
    </div>
  );

  const copy = (
    <div className="relative z-10">
      <p className="eyebrow">{section.eyebrow}</p>
      <h2 className="mt-5 max-w-[22ch] text-balance text-[clamp(1.625rem,3.6vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
        {section.title}
      </h2>
      <p className="lead mt-6 max-w-[54ch]">{section.lead}</p>

      {/*
        The tool panel is one region that swaps contents rather than a list
        that highlights one of several: the cloud shows a single tool at a
        time, and a visible list beside it would be describing something the
        reader cannot see.
      */}
      <div className="mt-9 rounded-[4px] border border-line bg-ink/60 p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="lat text-[0.9375rem] font-semibold tracking-[0.02em] text-fg">
            {tool.name}
          </p>

          {many ? (
            <div className="flex items-center gap-2" role="group" aria-label={section.controls.label}>
              <span className="lat me-1 text-[0.75rem] text-slate" aria-hidden="true">
                {i + 1}/{tools.length}
              </span>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={section.controls.prev}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-colors duration-300 hover:border-sage hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                {/* Previous points against the reading direction, so it
                    turns the other way in Persian. */}
                <ArrowRight
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="rotate-180 rtl:rotate-0"
                />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={section.controls.next}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-colors duration-300 hover:border-sage hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                <ArrowRight
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="rtl:rotate-180"
                />
              </button>
            </div>
          ) : null}
        </div>

        {/* Announced on change, so the stepper is not silent to a screen reader. */}
        <p aria-live="polite" className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
          {tool.note}
        </p>
      </div>
    </div>
  );

  return (
    <Section id={section.id}>
      {/* The ratio follows the order, not the axis: copy always gets the wider
          column whichever side it lands on. */}
      <Reveal
        className={`grid items-center gap-10 lg:gap-16 ${
          iconFirst ? "lg:grid-cols-[0.85fr_1fr]" : "lg:grid-cols-[1fr_0.85fr]"
        }`}
      >
        {iconFirst ? art : copy}
        {iconFirst ? copy : art}
      </Reveal>
    </Section>
  );
}
