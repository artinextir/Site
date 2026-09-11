import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

/**
 * A product section's way into its service page. Sits beside the section's
 * heading, so it reads as the next step rather than as a footnote, and its
 * text is the service page's own title — the words the linked page ranks for.
 */
export function ServiceLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-[4px] border border-line-2 px-4 py-2.5 text-[0.875rem] font-medium text-fg transition-colors duration-300 hover:border-sage hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:self-end"
    >
      {label}
      <ArrowRight
        width={16}
        height={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
      />
    </Link>
  );
}
