import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  /**
   * Opt in to a badge that fills its container.
   *
   * Off by default, and deliberately so: a badge is a chip and has to hug its
   * own text. A bare `inline-flex` is not enough — inside a `flex-col` (or a
   * grid cell) the default `align-items: stretch` resolves the child's `auto`
   * width to the full column, which is how the department pill on the agent
   * detail pages ended up spanning the whole content column. `w-fit` is a
   * definite width, so stretch no longer applies anywhere it is used.
   */
  fullWidth?: boolean;
  className?: string;
}

export function Badge({
  children,
  icon,
  fullWidth = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-muted ${
        fullWidth ? "w-full justify-center" : "w-fit max-w-full"
      } ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
