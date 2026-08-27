import { Logo } from "@/components/Logo";

export function HeroVisual({ label, tag }: { label: string; tag: string }) {
  const rings = [40, 65, 90, 115, 140, 165];

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-ink-border bg-ink-soft">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,242,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,242,238,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        viewBox="0 0 320 320"
        className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {rings.map((r) => (
          <circle
            key={r}
            cx="160"
            cy="160"
            r={r}
            fill="none"
            stroke="rgba(110,137,187,0.35)"
            strokeWidth="0.6"
          />
        ))}
        <line x1="160" y1="0" x2="160" y2="320" stroke="rgba(110,137,187,0.15)" strokeWidth="0.6" />
        <line x1="0" y1="160" x2="320" y2="160" stroke="rgba(110,137,187,0.15)" strokeWidth="0.6" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <Logo className="h-20 w-auto text-navy-300/70 md:h-28" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
        <span className="font-heading text-xs tracking-[0.2em] text-white/60">{label}</span>
        <span className="text-[11px] tracking-wide text-white/50">{tag}</span>
      </div>
    </div>
  );
}
