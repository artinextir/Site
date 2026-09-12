import type { HomeContent } from "@/content/home";
import type { Locale } from "@/lib/i18n/config";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/SectionHead";
import { InlineText } from "@/components/article/InlineText";
import { Plus } from "@/components/Icons";

/**
 * Native <details> — keyboard and screen-reader behaviour comes for free, and
 * the answers stay in the DOM for search engines whether open or closed.
 */
export function Faq({ s, locale }: { s: HomeContent["faq"]; locale: Locale }) {

  return (
    <Section>
      <SectionHead eyebrow={s.eyebrow} title={s.title} />

      <Reveal stagger={60} className="border-t border-line">
        {s.items.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-[0.9375rem] font-medium text-fg transition-colors duration-200 hover:text-sage [&::-webkit-details-marker]:hidden">
              <span className="max-w-[52ch]">{item.q}</span>
              <Plus
                width={18}
                height={18}
                aria-hidden="true"
                className="mt-1 shrink-0 text-slate transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            {/* Answers carry `[label](/path)` so a question that already
                names a topic can point at the piece that covers it. */}
            <p className="body-copy max-w-[68ch] pb-5 pe-10">
              <InlineText text={item.a} locale={locale} />
            </p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
