import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { siteUrl } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "__KQ4LYB2VWUh-e_l24qlvw9E4Kf10IcHPl0w8zsARA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-ink text-smoke`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
