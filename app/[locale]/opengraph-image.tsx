import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n/config";

export const dynamic = "force-static";
export const alt = "ARTINEXT — Design Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          padding: "72px",
          color: "#f4f2ee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="34" viewBox="0 0 371 228" fill="#6e89bb">
            <path d="M 148.50,8.00 L 193.00,7.50 L 199.00,8.50 L 208.00,13.50 L 295.50,104.00 L 343.00,150.50 L 343.50,134.00 L 341.50,127.00 L 306.50,90.00 L 306.50,15.00 L 308.00,7.50 L 362.00,7.50 L 362.50,219.00 L 335.00,219.50 L 258.00,140.50 L 225.00,159.50 L 224.00,133.50 L 184.00,133.50 L 178.00,135.50 L 169.50,143.00 L 118.00,219.50 L 86.00,219.50 L 86.50,216.00 L 145.50,129.00 L 157.00,117.50 L 170.00,112.50 L 235.00,112.50 L 235.50,138.00 L 237.00,138.50 L 281.50,111.00 L 237.00,79.50 L 235.50,80.00 L 235.50,99.00 L 224.00,99.50 L 178.00,52.50 L 65.00,219.50 L 8.00,219.50 L 7.50,218.00 Z" />
            <circle cx="202.00" cy="180.00" r="19.50" />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>ARTINEXT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            We find the friction. We build the clear system.
          </span>
          <span style={{ fontSize: 22, color: "rgba(244,242,238,0.55)", letterSpacing: 2 }}>
            DESIGN TECHNOLOGY / IRAN
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
