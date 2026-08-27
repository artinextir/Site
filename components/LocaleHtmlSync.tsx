"use client";

import { useEffect } from "react";
import { dirOf, type Locale } from "@/lib/i18n/config";

export function LocaleHtmlSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dirOf(locale);
  }, [locale]);

  return null;
}
