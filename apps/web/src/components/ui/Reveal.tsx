"use client";

import type { ReactNode } from "react";
import {
  motion,
} from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

/**
 * The site's motion vocabulary. Three tiers, nothing else.
 *
 *   "block"  — a content block arrives. 12px rise, 300ms.
 *   "quiet"  — supporting copy / footnotes. 8px, 260ms.
 *   "hero"   — above-the-fold only. 18px, 420ms.
 *
 * Everything is transform + opacity (compositor-only), fires once, and
 * collapses to a plain fade when the user asks for reduced motion.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const tiers = {
  hero: { y: 18, duration: 0.42 },
  block: { y: 12, duration: 0.3 },
  quiet: { y: 8, duration: 0.26 },
} as const;

type Tier = keyof typeof tiers;

interface RevealProps {
  children: ReactNode;
  tier?: Tier;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  tier = "block",
  delay = 0,
  className,
}: RevealProps) {
  const reduced = useSafeReducedMotion();
  const { y, duration } = tiers[tier];

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: reduced ? 0.2 : duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Grid/list wrapper: children assemble one after another instead of
 * arriving as a single slab. Pair with <RevealItem>.
 * Stagger is capped so a long grid never crawls.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useSafeReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useSafeReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.2 : 0.3, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
