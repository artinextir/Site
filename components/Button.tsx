import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline-ink" | "outline-smoke";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-400 text-ink hover:bg-navy-300 border border-navy-400",
  "outline-ink":
    "border border-ink-border text-smoke hover:border-navy-400 hover:text-navy-300",
  "outline-smoke":
    "border border-smoke-border text-ink hover:border-navy-700 hover:text-navy-700",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200 ${focusRing} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
