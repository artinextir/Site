"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/i18n/config";

export function LocaleSwitch({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  const rest = pathname.split("/").slice(2).join("/");
  const href = `/${target}${rest ? `/${rest}` : ""}`;

  return (
    <Link
      href={href}
      className={className}
      aria-label={target === "fa" ? "تغییر زبان به فارسی" : "Switch language to English"}
    >
      {target === "fa" ? "فا" : "EN"}
    </Link>
  );
}
