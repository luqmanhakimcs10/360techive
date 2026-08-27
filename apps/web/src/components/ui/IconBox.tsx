import type { ReactNode } from "react";

type IconBoxColor = "primary" | "surface";

interface IconBoxProps {
  children: ReactNode;
  color?: IconBoxColor;
  className?: string;
}

const colorStyles: Record<IconBoxColor, string> = {
  primary: "bg-primary/10 text-primary",
  surface: "bg-foreground/5 text-muted",
};

export function IconBox({ children, color = "primary", className = "" }: IconBoxProps) {
  return (
    <span
      className={`inline-flex size-10 items-center justify-center rounded-xl ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
