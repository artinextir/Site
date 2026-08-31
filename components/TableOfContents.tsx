export function TableOfContents({
  heading,
  items,
}: {
  heading: string;
  items: { id: string; label: string }[];
}) {
  return (
    <nav aria-label={heading} className="rounded-md border border-ink-border bg-ink-soft p-6">
      <p className="text-xs uppercase tracking-widest text-white/50">{heading}</p>
      <ol className="mt-4 flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-navy-300"
            >
              <span className="font-mono text-navy-400">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
