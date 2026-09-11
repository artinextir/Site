"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { HomeContent } from "@/content/home";
import { Wordmark } from "@/components/Logo";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { ArrowRight, Close, Menu } from "@/components/Icons";

type Props = { locale: Locale; c: HomeContent };

export function Header({ locale, c }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/*
        The sheet is a sibling of <header>, not a child, and that is load-
        bearing. Once the page scrolls, the header takes `backdrop-blur-md`,
        and a non-none backdrop-filter makes an element the containing block
        for its fixed-position descendants. Nested, the sheet's `inset-0`
        resolved against the 68px header instead of the viewport, so it
        covered the header strip only and its own nav spilled over the page
        with nothing painted behind it.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          prefetch={false}
          href={`/${locale}/`}
          className="text-fg transition-colors duration-200 hover:text-sage"
          aria-label="ARTINEXT"
        >
          <Wordmark />
        </Link>

        <nav aria-label={locale === "fa" ? "ناوبری اصلی" : "Main"} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {c.nav.map((item) => (
              <li key={item.href}>
                <Link
                  prefetch={false}
                  href={item.href}
                  className="inline-flex min-h-[24px] items-center px-1 text-[0.8125rem] text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch
            locale={locale}
            label={c.ui.langSwitch}
            className="hidden rounded-[3px] border border-line px-3 py-2 text-[0.75rem] text-fg-muted transition-colors duration-200 hover:border-line-2 hover:text-fg sm:block"
          />

          <Link
            prefetch={false}
            href={`/${locale}/contact/`}
            className="hidden items-center gap-2 rounded-[3px] bg-amber px-4 py-2.5 text-[0.8125rem] font-medium text-ink transition-opacity duration-200 hover:opacity-90 sm:inline-flex"
          >
            {c.navCta}
            <ArrowRight
              width={15}
              height={15}
              aria-hidden="true"
              className="rtl:-scale-x-100"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={c.ui.menu}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-[3px] border border-line text-fg lg:hidden"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-ink lg:hidden">
          <div className="shell flex h-[var(--header-h)] items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={c.ui.close}
              autoFocus
              className="grid h-11 w-11 place-items-center rounded-[3px] border border-line text-fg"
            >
              <Close aria-hidden="true" />
            </button>
          </div>

          <nav className="shell mt-6" aria-label={locale === "fa" ? "ناوبری اصلی" : "Main"}>
            <ul className="flex flex-col">
              {c.nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    prefetch={false}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 text-xl text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                prefetch={false}
                href={`/${locale}/contact/`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-amber px-5 py-4 font-medium text-ink"
              >
                {c.navCta}
              </Link>
              <LocaleSwitch
                locale={locale}
                label={c.ui.langSwitch}
                onNavigate={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-[3px] border border-line px-5 py-4 text-fg-muted"
              />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
