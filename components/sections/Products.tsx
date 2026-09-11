import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { TiltCard } from "@/components/TiltCard";
import { ArrowUpRight, Tick } from "@/components/Icons";

export function Products({ c }: { c: HomeContent }) {
  const s = c.products;

  return (
    <Section id="products">
      <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      {/*
        Five named rows on the outer grid — code, title, body, bullets, link —
        and each card is a subgrid spanning all five. That is what keeps the
        divider above the bullets and the Explore link on one line across all
        three cards, in Persian as well as English, whatever the copy length.
      */}
      <Reveal
        stagger={90}
        className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto] lg:gap-y-0"
      >
        {s.items.map((item) => (
          <TiltCard
            key={item.code}
            lift={12}
            intensity={4.5}
            className="group trace rounded-[4px] border border-line bg-surface hover:border-line-2 hover:bg-surface-2 lg:row-span-5 lg:grid lg:grid-rows-subgrid"
            innerClassName="p-5 lg:row-span-5 lg:grid lg:grid-rows-subgrid"
          >
            <div className="flex items-center justify-between">
              <span dir="ltr" className="lat text-[0.75rem] tracking-[0.14em] text-slate">
                {item.code}
              </span>
              <span
                className="h-px w-10 bg-line-2 transition-all duration-500 group-hover:w-16 group-hover:bg-sage"
                aria-hidden="true"
              />
            </div>

            <h3 className="card-title mt-4 text-[1.0938rem] font-semibold leading-snug">
              {item.title}
            </h3>

            <p className="body-copy mt-2.5 text-[0.9063rem]">{item.body}</p>

            <ul className="mt-4 flex flex-col gap-1.5 border-t border-line pt-3.5 transition-colors duration-500 group-hover:border-line-2">
              {item.bullets.map((b, i) => (
                <li
                  key={b}
                  className="bullet-row flex items-start gap-2.5 text-[0.8438rem] text-fg-muted group-hover:text-fg"
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
                  <Tick className="mt-[0.3rem] shrink-0 text-sage" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              prefetch={false}
              href={item.href}
              // Three links reading "Explore" that go three different places
              // are indistinguishable to a screen reader listing them.
              aria-label={`${s.more}${/[؀-ۿ]/.test(item.title) ? "،" : ","} ${item.title}`}
              className="mt-5 inline-flex min-h-[24px] items-center gap-2 justify-self-start self-start text-[0.875rem] text-fg transition-colors duration-200 hover:text-sage"
            >
              {s.more}
              <ArrowUpRight
                width={15}
                height={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              />
            </Link>
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
