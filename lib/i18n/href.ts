import type { Locale } from "@/lib/i18n/config";

export function lh(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}/`;
  return `/${locale}${path}/`;
}
