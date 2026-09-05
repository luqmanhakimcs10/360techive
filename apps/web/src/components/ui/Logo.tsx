"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * The brand mark.
 *
 * The artwork lives in `public/brand/` and is referenced by path rather than
 * imported, so replacing the file is the only step needed to change the logo
 * across the site. If the file is missing or fails to load, this falls back to
 * the typographic wordmark that the site used before, which means the header
 * is never broken by a missing asset and never shows the browser's broken
 * image icon.
 *
 * Height is fixed and width is auto, so any sensible aspect ratio works
 * without redesigning the header. `LOGO_SRC` accepts svg, png or webp.
 *
 * The missing file case needs both checks below. A 404 on the logo usually
 * resolves while the server HTML is still being parsed, which is before React
 * has attached anything, so `onError` alone never fires and the page keeps a
 * broken image. The mount check catches that case by asking the element
 * whether it finished loading with no intrinsic width; `onError` then covers
 * everything that fails later.
 */

const LOGO_SRC = "/brand/techive-logo.svg";

interface LogoProps {
  /** Rendered height in pixels. The header uses 28, the footer 32. */
  height?: number;
  className?: string;
}

export function Logo({ height = 28, className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span
        className={`flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground ${className}`}
      >
        <span className="size-1.5 rounded-full bg-primary" />
        {siteConfig.name}
      </span>
    );
  }

  return (
    // A plain img rather than next/image: the asset is a fixed brand mark, it
    // needs no responsive srcset, and onError is what makes the fallback work.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={LOGO_SRC}
      alt={siteConfig.name}
      height={height}
      style={{ height }}
      className={`w-auto ${className}`}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}
