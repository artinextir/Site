import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import type { HomeContent } from "@/content/home";
import { site } from "@/content/site";
import { Wordmark } from "@/components/Logo";
import { Instagram, Mail, Phone } from "@/components/Icons";

export function Footer({ locale, c }: { locale: Locale; c: HomeContent }) {

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 md:py-20">
        <div>
          <Wordmark className="text-fg" />
          <p className="body-copy mt-5 max-w-[38ch]">{c.footer.tagline}</p>
          <p dir="ltr" className="lat mt-4 max-w-[46ch] text-[0.6875rem] tracking-[0.08em] text-slate rtl:text-right">
            {site.motto}
          </p>
        </div>

        <nav aria-label={c.footer.navTitle}>
          <h2 className="eyebrow">{c.footer.navTitle}</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {c.nav.map((item) => (
              <li key={item.href}>
                <Link
                  prefetch={false}
                  href={item.href}
                  className="inline-flex min-h-[24px] items-center text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                prefetch={false}
                href={`/${locale}/contact/`}
                className="inline-flex min-h-[24px] items-center text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                {c.footer.contactTitle}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">{c.footer.contactTitle}</h2>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                dir="ltr"
                className="lat inline-flex min-h-[24px] items-center gap-2.5 text-sm text-fg-muted transition-colors duration-200 hover:text-sage rtl:flex-row-reverse"
              >
                <Mail width={16} height={16} aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="lat inline-flex min-h-[24px] items-center gap-2.5 text-sm text-fg-muted transition-colors duration-200 hover:text-sage rtl:flex-row-reverse"
              >
                <Phone width={16} height={16} aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                dir="ltr"
                className="lat inline-flex min-h-[24px] items-center gap-2.5 text-sm text-fg-muted transition-colors duration-200 hover:text-sage rtl:flex-row-reverse"
              >
                <Instagram width={16} height={16} aria-hidden="true" />
                {site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.75rem] text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p dir="ltr" className="lat tracking-[0.08em]">
            {c.footer.legal}
          </p>
          <LocaleSwitch
            locale={locale}
            label={c.ui.langSwitch}
            className="inline-flex min-h-[24px] items-center transition-colors duration-200 hover:text-fg"
          />
        </div>
      </div>
    </footer>
  );
}
