"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

interface BrandLogoProps {
  className?: string;
  showDot?: boolean;
}

/**
 * Brand Logo component.
 *
 * Expected logo location: apps/web/public/logo.svg (or /logo.png).
 * Once the user adds logo.svg to apps/web/public/, the image logo will display automatically.
 * If /logo.svg does not exist or fails to load, it cleanly falls back to the text wordmark
 * "360 Techive" without displaying any broken image icon.
 */
export function BrandLogo({ className = "", showDot = true }: BrandLogoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/*
        Image logo pointing to /logo.svg (expected at apps/web/public/logo.svg).
        Remains hidden until onLoad confirms it exists and is loaded successfully,
        preventing any broken image placeholder if the file is absent.
      */}
      {!imageFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo.svg"
          alt={siteConfig.name}
          width={130}
          height={28}
          className={`h-6 w-auto max-h-7 object-contain transition-opacity duration-200 ${
            imageLoaded ? "opacity-100" : "hidden opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageFailed(true)}
        />
      )}

      {/* Fallback text wordmark shown until/unless logo.svg is supplied and loaded */}
      {(!imageLoaded || imageFailed) && (
        <span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          {showDot && (
            <span className="size-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150 motion-reduce:transform-none" />
          )}
          {siteConfig.name}
        </span>
      )}
    </div>
  );
}
