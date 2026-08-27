"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface LinkArrowProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * NOTE: `primary-light` was referenced here but never defined in
 * tailwind.config.ts, so the hover colour never applied. Using
 * `primary-hover` (which in dark mode is the lighter coral).
 *
 * The arrow now moves via a CSS group-hover transform rather than
 * framer-motion's whileHover — whileHover on the child never fired,
 * because the pointer is over the parent link, not the span.
 */
export function LinkArrow({ href, children, className = "" }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
      >
        &rarr;
      </span>
    </Link>
  );
}
