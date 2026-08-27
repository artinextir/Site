import type { ReactNode } from "react";

export function Tag({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "smoke";
  className?: string;
}) {
  const toneClasses =
    tone === "ink"
      ? "border-ink-border text-navy-300"
      : "border-smoke-border text-navy-700";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
