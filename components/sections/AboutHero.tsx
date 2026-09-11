"use client";

import { useCallback, useState } from "react";
import type { AboutContent } from "@/content/about";
import { PointCloud } from "@/components/PointCloud";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { Aurora } from "@/components/Aurora";

/**
 * The About hero: one cloud carrying every tool on the page, cycling.
 *
 * The figure leads and the copy answers, which is the reverse of every other
 * page on the site — that inversion is the point of the section, so the cloud
 * takes the first column rather than sitting behind the type.
 *
 * It cycles rather than showing one mark because the hero's claim is the set:
 * these are the tools we work in. A single icon would be arguing for one of
 * them.
 *
 * The cadence belongs to the cloud, not to a timer here. It reports when its
 * sequence — bleach, morph, paint, beat, beam, beat — has finished, and only
 * then does this pick the next mark. An interval on this side would drift out
 * of step with an animation whose length it does not know, and the beam would
 * end up firing over a morph.
 */
export function AboutHero({ c }: { c: AboutContent }) {
  const cycle = c.hero.cycle;
  const [i, setI] = useState(0);

  const advance = useCallback(() => {
    setI((p) => (p + 1) % cycle.length);
  }, [cycle.length]);

  return (
    <Section behind={<Aurora />}>
      <Reveal className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
        {/*
          Bleeds past this box, so it sits at z-0 under the copy's z-10 and
          thrown points pass behind the headline rather than across it.
        */}
        <div className="relative z-0 order-first min-h-[clamp(280px,40vh,360px)] lg:order-none lg:min-h-[min(60vh,580px)]">
          <PointCloud
            glyph={cycle[i]}
            fit={0.46}
            onCycleComplete={cycle.length > 1 ? advance : undefined}
          />
        </div>

        <div className="relative z-10">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-[20ch] text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-fg">
            {c.hero.title}
          </h1>
          <p className="lead mt-7 max-w-[54ch]">{c.hero.lead}</p>
        </div>
      </Reveal>
    </Section>
  );
}
