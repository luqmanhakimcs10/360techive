"use client";

import type { ReactNode } from "react";
import {
  motion,
} from "framer-motion";
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

  const hidden = reduced ? { opacity: 0 } : { opacity: 0, y: "108%" };
  const shown = { opacity: 1, y: 0 };
  const transition = {
    duration: reduced ? 0.2 : 0.62,
    ease: EASE,
    delay: reduced ? 0 : delay,
  };

  return (
    // The wrapper clips; the inner block is what moves. Padding-bottom keeps
    // descenders (g, y, p) from being sliced by the mask.
    <span className={`block overflow-hidden pb-[0.12em] ${className}`}>
      <motion.span
        className="block"
        initial={hidden}
        {...(trigger === "mount"
          ? { animate: shown }
          : {
              whileInView: shown,
              viewport: { once: true, margin: "-80px" },
            })}
        transition={transition}
      >
        {children}
      </motion.span>
    </span>
  );
}
