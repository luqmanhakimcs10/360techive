import type { ReactNode } from "react";

export type Glow =
  | "none"
  | "top-left"
  | "top-right"
  | "left"
  | "right"
  | "center"
  | "bottom";

type Strength = "soft" | "medium" | "strong";

interface SectionProps {
  children: ReactNode;
  /** Alternating band. Sections should alternate plain and tinted down the page. */
  tone?: "plain" | "tinted";
  /**
   * Where the ambient red wash sits. Vary it down the page so consecutive
   * sections do not read as the same rectangle twice.
   */
  glow?: Glow;
  glowStrength?: Strength;
  id?: string;
  className?: string;
}

/** Position and size of the wash. Sizes are deliberately larger than the
 *  section is tall, so the falloff is gradual rather than a visible disc. */
const glowPlacement: Record<Exclude<Glow, "none">, string> = {
  "top-left": "-top-56 -left-40 size-[680px]",
  "top-right": "-top-56 -right-40 size-[680px]",
  left: "top-1/2 -left-52 size-[620px] -translate-y-1/2",
  right: "top-1/2 -right-52 size-[620px] -translate-y-1/2",
  center: "top-1/2 left-1/2 size-[820px] -translate-x-1/2 -translate-y-1/2",
  bottom: "-bottom-56 left-1/4 size-[640px]",
};

const glowAlpha: Record<Strength, string> = {
  soft: "0.07",
  medium: "0.12",
  strong: "0.17",
};

/**
 * Single source of vertical rhythm, and the section's ambient lighting.
 *
 * The wash lives inside its own absolutely positioned, clipped wrapper rather
 * than on the section itself. That matters: putting `overflow-hidden` on the
 * section would make it a scroll container and quietly kill the `lg:sticky`
 * columns several sections rely on. This wrapper clips the glow without ever
 * being an ancestor of the content.
 *
 * It is a plain radial gradient, not a blurred element. A `filter: blur` of
 * this size costs real paint time on every scroll frame; a radial falloff is
 * free and looks the same.
 */
export function Section({
  children,
  tone = "plain",
  glow = "none",
  glowStrength = "medium",
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-4 py-20 md:px-8 md:py-28 ${
        tone === "tinted" ? "border-y border-border/10 bg-surface/40" : ""
      } ${className}`}
    >
      {tone === "tinted" && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgb(var(--color-primary) / 0.35), transparent)",
          }}
        />
      )}

      {glow !== "none" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span
            className={`absolute rounded-full ${glowPlacement[glow]}`}
            style={{
              background: `radial-gradient(circle, rgb(var(--color-primary) / ${glowAlpha[glowStrength]}), transparent 68%)`,
            }}
          />
        </div>
      )}

      <div className="relative mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
