import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import type { Locale } from "@/lib/i18n/config";
import { lh } from "@/lib/i18n/href";

export function CtaBand({
  locale,
  statement,
  ctaLabel,
  ctaHref = "/contact",
}: {
  locale: Locale;
  statement: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <Section tone="smoke" className="relative overflow-hidden border-t border-smoke-border">
      <Container className="py-section-md md:py-section-lg flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-balance max-w-2xl text-2xl md:text-3xl font-semibold leading-tight text-ink">
          {statement}
        </p>
        <Button href={lh(locale, ctaHref)} variant="outline-smoke" className="shrink-0 !bg-navy-700 !text-smoke !border-navy-700 hover:!bg-navy-800">
          {ctaLabel}
        </Button>
      </Container>
    </Section>
  );
}
