interface SectionHeadingProps {
  title: string;
  accent?: string;
  className?: string;
}

export function SectionHeading({ title, accent, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl ${className}`}>
      {title}{" "}
      {accent && (
        <span className="font-serif italic text-primary">{accent}</span>
      )}
    </h2>
  );
}
