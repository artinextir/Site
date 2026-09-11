import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* Channel form so Tailwind's /alpha modifier works on every token —
         bg-ink/70, border-sage/40, text-fg/90 all resolve correctly. */
      colors: {
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        line: "rgb(var(--line-rgb) / <alpha-value>)",
        "line-2": "rgb(var(--line-2-rgb) / <alpha-value>)",
        sage: "rgb(var(--sage-rgb) / <alpha-value>)",
        amber: "rgb(var(--amber-rgb) / <alpha-value>)",
        slate: "rgb(var(--slate-rgb) / <alpha-value>)",
        fg: "rgb(var(--fg-rgb) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted-rgb) / <alpha-value>)",
        plate: "rgb(var(--plate-rgb) / <alpha-value>)",
      },
      fontFamily: {
        mono: "var(--font-stack-mono)",
        sans: "var(--font-stack-sans)",
        fa: "var(--font-fa)",
      },
      maxWidth: {
        shell: "82rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
