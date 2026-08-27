export function ProcessSteps({
  steps,
  tone = "ink",
}: {
  steps: { title: string; description: string }[];
  tone?: "ink" | "smoke";
}) {
  const borderClass = tone === "ink" ? "border-ink-border" : "border-smoke-border";
  const mutedText = tone === "ink" ? "text-white/55" : "text-ink/60";
  const numberColor = tone === "ink" ? "text-navy-400" : "text-navy-700";

  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
      {steps.map((step, i) => (
        <div key={step.title} className={`border-t ${borderClass} pt-6`}>
          <span className={`font-heading text-2xl font-bold ${numberColor}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading mt-3 text-base font-semibold">{step.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${mutedText}`}>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
