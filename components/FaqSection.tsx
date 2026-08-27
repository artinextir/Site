import { JsonLd } from "@/components/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  heading,
  items,
  tone = "ink",
  id = "faq",
}: {
  heading: string;
  items: FaqItem[];
  tone?: "ink" | "smoke";
  id?: string;
}) {
  const borderClass = tone === "ink" ? "border-ink-border" : "border-smoke-border";
  const mutedText = tone === "ink" ? "text-white/60" : "text-ink/60";

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div id={id} className="scroll-mt-24">
      <JsonLd data={schema} />
      <h2 className="font-heading text-2xl md:text-3xl font-semibold">{heading}</h2>
      <div className="mt-8">
        {items.map((item) => (
          <div key={item.question} className={`border-t ${borderClass} py-6 first:border-t-0`}>
            <h3 className="text-base md:text-lg font-medium">{item.question}</h3>
            <p className={`mt-2 max-w-2xl text-sm md:text-base leading-relaxed ${mutedText}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
