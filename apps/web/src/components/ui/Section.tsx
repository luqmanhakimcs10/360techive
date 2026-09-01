import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  /** Alternating band. Sections should alternate plain → tinted down the page. */
  tone?: "plain" | "tinted";
  id?: string;
  className?: string;
}

/**
 * Single source of vertical rhythm. Every homepage section uses this —
 * the page reads as one system instead of ten different paddings.
 */
export function Section({
  children,
  tone = "plain",
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-20 md:px-8 md:py-28 ${
        tone === "tinted" ? "border-y border-border/10 bg-surface/30" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
