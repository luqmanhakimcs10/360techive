import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

/**
 * NOTE: this was `border-border`, which resolves to a full-opacity
 * white hairline in dark mode — every card had a glaring white outline.
 * Structural borders should always carry an alpha.
 */
export function Card({ children, icon, title, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border/10 bg-surface/40 p-7 ${className}`}
    >
      {icon && <div className="mb-5">{icon}</div>}
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      )}
      {children}
    </div>
  );
}
