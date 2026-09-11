"use client";

import { useCallback, useState } from "react";
import type { ProductsContent } from "@/content/products";
import type { GlyphName } from "@/lib/pointcloud/glyphs";
import { LazyPointCloud } from "@/components/LazyPointCloud";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/SectionHead";
import { Aurora } from "@/components/Aurora";

/** Home-page order: families, tools, automation. */
const CYCLE: GlyphName[] = ["product-family", "product-tool", "product-flow"];

/**
 * The Products hero: the contact page's layout, with a mark that cycles
 * through the three products the way the About hero cycles its tools.
 *
 * The cloud owns the cadence. It reports when its bleach, morph, beam and
 * beats are done, and only then does the next mark come in — a timer here
 * would drift out of step with an animation whose length it cannot see.
 *
 * Loaded after the page rather than with it. The hero's copy is the page's
 * largest paint and only appears once the page's script has run, so every
 * kilobyte on that path is paid for in mobile LCP — and this page also carries
 * the recordings, the dashboards and the family drawing. The canvas has a
 * sized box and no text, so arriving a moment late costs nothing visible.
 */
export function ProductsHero({ c }: { c: ProductsContent }) {
  const [i, setI] = useState(0);
  const advance = useCallback(() => setI((p) => (p + 1) % CYCLE.length), []);

  return (
    <Section behind={<Aurora />}>
      <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <div className="relative z-10">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-[20ch] text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-fg">
            {c.hero.title}
          </h1>
          <p className="lead mt-7 max-w-[54ch]">{c.hero.lead}</p>
        </div>
        <div className="relative z-0 order-first min-h-[clamp(240px,34vh,320px)] lg:order-none lg:min-h-[min(58vh,560px)]">
          <LazyPointCloud glyph={CYCLE[i]} fit={0.46} onCycleComplete={advance} />
        </div>
      </Reveal>
    </Section>
  );
}
