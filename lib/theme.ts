// Single source of truth for the raw hex values next/og's ImageResponse needs
// (icon.tsx, apple-icon.tsx, opengraph-image.tsx) — that renderer can't read
// Tailwind classes or CSS variables, so these have to exist as plain
// constants. Keep in sync with the `ink`/`navy` tokens in tailwind.config.ts.
export const theme = {
  ink: "#0a0a0b",
  paper: "#f4f2ee",
  navy: "#6e89bb",
} as const;
