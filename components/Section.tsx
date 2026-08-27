import type { ReactNode } from "react";

type Tone = "ink" | "smoke";

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink text-smoke",
  smoke: "bg-smoke text-ink",
};

export function Section({
  children,
  tone = "ink",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  );
}
