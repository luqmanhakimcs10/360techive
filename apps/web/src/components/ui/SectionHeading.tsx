import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: string;
  /** Rendered in italic serif — this is the signature of the page. */
  accent?: string;
  /** One paragraph of supporting copy under the heading. */
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-[2.6rem]">
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif font-normal italic text-primary">
              {accent}
            </span>
          </>
        )}
      </h2>

      {lead && (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted">
          {lead}
        </p>
      )}
    </div>
  );
}
