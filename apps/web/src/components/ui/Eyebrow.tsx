import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  tone?: "muted" | "primary";
  className?: string;
}

/**
 * Small uppercase label that sits above every section heading.
 * This is the rhythm marker for the whole page — one per section, no exceptions.
 */
export function Eyebrow({
  children,
  tone = "muted",
  className = "",
}: EyebrowProps) {
  return (
    <span
      className={`block text-xs font-medium uppercase tracking-[0.14em] ${
        tone === "primary" ? "text-primary" : "text-muted"
      } ${className}`}
    >
      {children}
    </span>
  );
}
