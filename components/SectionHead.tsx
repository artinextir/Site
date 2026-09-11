import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHead({
  eyebrow,
  title,
  lead,
  aside,
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
  id?: string;
}) {
  return (
    <Reveal className="mb-7 md:mb-8 [@media(min-width:768px)_and_(max-height:740px)]:mb-3">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2
          id={id}
          className="fa-air max-w-[22ch] text-balance text-[clamp(1.45rem,2.9vw,2.05rem)] font-semibold leading-[1.22] tracking-[-0.015em] text-fg"
        >
          {title}
        </h2>
        {aside}
      </div>
      {lead ? <p className="lead mt-4 text-[0.9688rem]">{lead}</p> : null}
    </Reveal>
  );
}

/**
 * Every band on the page is one screen tall with its content centred in it.
 * That is what stops the page reading as a stack of blocks separated by dead
 * air: the space belongs to the section rather than sitting between sections.
 * `min-height` rather than `height`, so nothing is ever clipped — the dense
 * sections carry their own compaction instead.
 */
export function Section({
  children,
  id,
  className = "",
  rule = true,
  behind,
  ...rest
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  rule?: boolean;
  /** Full-bleed layer painted under the shell — backgrounds, canvases. */
  behind?: ReactNode;
  /** Marks the section as one stage of a scroll-driven cloud. */
  "data-cloud-stage"?: boolean;
}) {
  return (
    <section
      {...rest}
      id={id}
      className={`relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pb-8 md:pt-[calc(var(--header-h)+1.5rem)] [@media(min-width:768px)_and_(max-height:740px)]:pb-4 [@media(min-width:768px)_and_(max-height:740px)]:pt-[calc(var(--header-h)+1rem)] ${className}`}
    >
      {behind}
      <div className="shell relative w-full">{children}</div>
      {rule ? (
        <div className="shell pointer-events-none absolute inset-x-0 bottom-0 w-full" aria-hidden="true">
          <div className="rule" />
        </div>
      ) : null}
    </section>
  );
}
