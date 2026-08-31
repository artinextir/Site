import { Archivo, Inter } from "next/font/google";

// Peyda is declared as a plain @font-face in globals.css instead of via
// next/font/local: next/font's automatic preload <link> injection doesn't
// make it into the static HTML under output:export (verified empirically —
// even with preload:true, no font preload link was ever emitted). Serving
// it from a stable /public path lets the root layout preload the exact
// URL the CSS will request, which next/font's content-hashed output can't
// support without knowing the hash ahead of time.

// Only the two weights `.font-heading` actually sets (font-semibold /
// font-bold) are loaded — every extra static weight is a network request
// that pushes back FCP/LCP for no visual gain.
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
