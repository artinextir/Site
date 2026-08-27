"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import type { NavContent } from "@/content/nav";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

export function Header({ locale, content }: { locale: Locale; content: NavContent }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href={lh(locale, "/")}
          aria-label="ARTINEXT — Home"
          className="flex items-center gap-2 text-smoke"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {content.links.map((link) =>
            link.href === "/products" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={lh(locale, link.href)}
                  className="text-sm text-white/70 transition-colors hover:text-navy-300"
                >
                  {link.label}
                </Link>
                {productsOpen && (
                  <div className="absolute start-0 top-full w-80 rounded-2xl border border-ink-border bg-ink-soft p-5 shadow-2xl">
                    <p className="mb-4 text-xs leading-relaxed text-white/50">
                      {content.productsDropdown.heading}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {content.productsDropdown.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={lh(locale, item.href)}
                            className="block rounded-lg px-2 py-1.5 transition-colors hover:bg-ink"
                          >
                            <span className="block text-sm font-medium text-smoke">
                              {item.label}
                            </span>
                            <span className="block text-xs text-white/45">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={lh(locale, link.href)}
                className="text-sm text-white/70 transition-colors hover:text-navy-300"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LocaleSwitch
            locale={locale}
            className="text-xs font-medium tracking-widest text-white/50 transition-colors hover:text-navy-300"
          />
          <Button href={lh(locale, "/contact")} variant="primary">
            {content.cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-smoke md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 right-0 top-1.5 h-px bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-border px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={lh(locale, link.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-white/80 transition-colors hover:bg-ink-soft hover:text-navy-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-ink-border pt-4">
            <LocaleSwitch
              locale={locale}
              className="text-xs font-medium tracking-widest text-white/50"
            />
            <Button href={lh(locale, "/contact")} variant="primary" className="!px-5 !py-2.5">
              {content.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
