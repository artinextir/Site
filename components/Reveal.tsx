"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  /** ms between each direct child; 0 reveals the wrapper as one unit */
  stagger?: number;
  as?: ElementType;
  /** Marks the block as one stage of a scroll-driven cloud. */
  "data-cloud-stage"?: boolean;
};

export function Reveal({ children, className = "", stagger = 0, as: Tag = "div", ...rest }: Props) {
  const ref = useReveal<HTMLDivElement>(stagger);

  if (stagger) {
    return (
      <Tag ref={ref} {...rest} className={className} data-stagger="">
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} {...rest} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
