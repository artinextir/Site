import { defaultLocale } from "@/lib/i18n/config";

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
      <p>
        <a href={`/${defaultLocale}`}>Continue to ARTINEXT</a>
      </p>
    </>
  );
}
