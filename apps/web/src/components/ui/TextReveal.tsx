"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

/**
 * Mask based line reveal for the large editorial headlines.
 *
 * Each line sits in its own overflow-hidden block and slides up from beneath
 * its own edge, so the type appears to be uncovered rather than to fly in.
 * Only headlines use this. Body copy uses <Reveal>, which is quieter.
 *
 * `trigger` decides whether the lines animate on mount (hero, above the fold)
 * or when scrolled into view (everything further down).
 *
 * The in-view test watches the WRAPPER, not the moving line. This matters:
 * the line starts translated a full 108% below the wrapper, and the wrapper
 * clips its overflow, so the line's own visible area is zero until it
 * animates. Hanging the trigger off the line itself, which is what
 * `whileInView` does, means it waits to become visible before it is allowed
 * to become visible, and the headline stays blank forever. The wrapper is
 * never transformed, so it is always measurable.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

interface LineRevealProps {
  children: ReactNode;
  delay?: number;
  trigger?: "mount" | "view";
  className?: string;
}

export function LineReveal({
  children,
  delay = 0,
  trigger = "view",
  className = "",
}: LineRevealProps) {
  const reduced = useSafeReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const shown = trigger === "mount" || inView;

  const hidden = reduced ? { opacity: 0 } : { opacity: 0, y: "108%" };
  const visible = { opacity: 1, y: 0 };

  return (
    // The wrapper clips; the inner block is what moves. Padding-bottom keeps
    // descenders (g, y, p) from being sliced by the mask.
    <span ref={ref} className={`block overflow-hidden pb-[0.12em] ${className}`}>
      <motion.span
        className="block"
        initial={hidden}
        animate={shown ? visible : hidden}
        transition={{
          duration: reduced ? 0.2 : 0.62,
          ease: EASE,
          delay: reduced ? 0 : delay,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
