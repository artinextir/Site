import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import type { NavContent } from "@/content/nav";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

export function Footer({ locale, content }: { locale: Locale; content: NavContent }) {
  const f = content.footer;

  return (
    <footer className="border-t border-ink-border bg-ink text-smoke">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-ink-border pb-14 md:flex-row md:items-center">
          <p className="font-heading max-w-xl text-2xl md:text-3xl font-semibold leading-tight">
            {f.bannerLine}
          </p>
          <Button href={lh(locale, "/contact")} variant="outline-ink" className="shrink-0">
            {f.bannerCta}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-9 w-auto text-smoke" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">{f.blurb}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50">{f.exploreHeading}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {f.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={lh(locale, link.href)}
                    className="text-sm text-white/70 transition-colors hover:text-navy-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50">{f.contactHeading}</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <li>
                <span className="text-white/50">{f.emailLabel}: </span>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-navy-300">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-white/50">{f.phoneLabel}: </span>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-navy-300" dir="ltr">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="text-white/50">{f.instagramLabel}: </span>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-navy-300"
                  dir="ltr"
                >
                  {site.instagram}
                </a>
              </li>
              <li>
                <Link href={lh(locale, f.consultationHref)} className="transition-colors hover:text-navy-300">
                  {f.consultationLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-ink-border pt-8 text-xs text-white/50">{f.metaLine}</p>
      </Container>
    </footer>
  );
}
