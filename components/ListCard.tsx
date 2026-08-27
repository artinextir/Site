export function ListCard({
  index,
  title,
  description,
  tag,
  tone = "ink",
}: {
  index: string;
  title: string;
  description: string;
  tag?: string;
  tone?: "ink" | "smoke";
}) {
  const borderClass = tone === "ink" ? "border-ink-border" : "border-smoke-border";
  const mutedText = tone === "ink" ? "text-white/55" : "text-ink/60";
  const indexColor = tone === "ink" ? "text-navy-400" : "text-navy-700";
  const tagClass =
    tone === "ink"
      ? "border-ink-border text-navy-300"
      : "border-smoke-border text-navy-700";

  return (
    <div className={`border-t ${borderClass} py-7 first:border-t-0 first:pt-0`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
        <span className={`font-heading text-sm font-semibold ${indexColor} md:w-10 md:shrink-0`}>
          {index}
        </span>
        <div className="flex-1">
          <h3 className="font-heading text-lg md:text-xl font-semibold">{title}</h3>
          <p className={`mt-2 max-w-2xl text-sm md:text-base leading-relaxed ${mutedText}`}>
            {description}
          </p>
        </div>
        {tag && (
          <span
            className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-widest ${tagClass}`}
          >
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}
