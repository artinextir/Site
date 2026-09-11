import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { HomeContent } from "@/content/home";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "@/components/Icons";

export function Cta({
  locale,
  s,
  action,
}: {
  locale: Locale;
  s: HomeContent["cta"];
  /** Label on the amber row — the same words as the header's button. */
  action: string;
}) {

  return (
    <section className="flex min-h-[100svh] flex-col justify-center border-t border-line bg-surface/35 pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pb-8 md:pt-[calc(var(--header-h)+1.5rem)] [@media(min-width:768px)_and_(max-height:740px)]:pb-4 [@media(min-width:768px)_and_(max-height:740px)]:pt-[calc(var(--header-h)+1rem)]">
      <div className="shell">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="mt-5 max-w-[18ch] text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
              {s.title}
            </h2>
            <p className="lead mt-6">{s.lead}</p>
            <p className="mt-8 max-w-[52ch] border-s-2 border-line-2 ps-4 text-[0.875rem] text-fg-muted">
              {s.notFor}
            </p>
          </div>

          <div className="flex h-fit flex-col gap-px self-center overflow-hidden rounded-[4px] border border-line bg-line">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-6 bg-ink p-7 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="flex items-center gap-4">
                <Mail width={20} height={20} aria-hidden="true" className="text-sage" />
                <span>
                  <span className="block text-[0.75rem] tracking-[0.08em] text-slate">
                    {s.emailLabel}
                  </span>
                  <span dir="ltr" className="lat mt-1 block text-[0.9375rem] text-fg">
                    {site.email}
                  </span>
                </span>
              </span>
              <ArrowUpRight
                width={17}
                height={17}
                aria-hidden="true"
                className="shrink-0 text-fg-muted transition-colors duration-200 group-hover:text-sage rtl:-scale-x-100"
              />
            </a>

            <a
              href={`tel:${site.phoneHref}`}
              className="group flex items-center justify-between gap-6 bg-ink p-7 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="flex items-center gap-4">
                <Phone width={20} height={20} aria-hidden="true" className="text-sage" />
                <span>
                  <span className="block text-[0.75rem] tracking-[0.08em] text-slate">
                    {s.phoneLabel}
                  </span>
                  <span dir="ltr" className="lat tnum mt-1 block text-[0.9375rem] text-fg">
                    {site.phone}
                  </span>
                </span>
              </span>
              <ArrowUpRight
                width={17}
                height={17}
                aria-hidden="true"
                className="shrink-0 text-fg-muted transition-colors duration-200 group-hover:text-sage rtl:-scale-x-100"
              />
            </a>

            {/* Same stack, but this one is the action, so it takes the amber. */}
            <Link
              prefetch={false}
              href={`/${locale}/contact/`}
              className="group flex items-center justify-between gap-6 bg-amber p-7 text-ink transition-opacity duration-200 hover:opacity-90"
            >
              <span className="text-[0.9375rem] font-medium">{action}</span>
              <ArrowRight
                width={17}
                height={17}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
