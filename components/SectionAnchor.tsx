"use client";

import { useEffect } from "react";

/**
 * Lands the reader on the section they came from.
 *
 * `LocaleSwitch` writes `#s3` onto the destination URL. This reads it once on
 * mount, jumps to that section without animating — a smooth scroll across
 * eight full-screen sections is a long ride nobody asked for — and strips the
 * hash so a reload or a shared link starts at the top like any other page.
 *
 * Sections are indexed rather than named because most of them have no id, and
 * inventing ids purely so a language button can aim at them would put a
 * routing concern into every section's markup.
 */
export function SectionAnchor() {
  useEffect(() => {
    const match = window.location.hash.match(/^#s(\d+)$/);
    if (!match) return;

    const index = Number(match[1]);
    const target = document.querySelectorAll("main > section")[index];
    history.replaceState(null, "", window.location.pathname + window.location.search);
    if (!target) return;

    // One frame's grace so fonts and the first layout pass settle, otherwise
    // the measurement is taken against a page that is still moving.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  return null;
}
