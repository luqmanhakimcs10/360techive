import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, icon, title, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface/60 p-6 ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {title && <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>}
      {children}
    </div>
  );
}
