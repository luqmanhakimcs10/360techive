"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * `useReducedMotion` reads matchMedia synchronously, so on the client it
 * returns the real answer during the very first render while the server had no
 * idea. Anything that branches on it, an `initial` prop or a whole wrapper
 * element, then renders differently on the two sides and React throws the tree
 * away and rebuilds it.
 *
 * This returns false until after mount, so the first client render matches the
 * server exactly and the preference is applied on the next commit. The cost is
 * one extra render for users who asked for reduced motion, which is also the
 * one case where nothing is animating anyway.
 *
 * Use this instead of useReducedMotion anywhere the answer changes what is
 * rendered. Plain event handlers can keep using the framer hook directly.
 */
export function useSafeReducedMotion(): boolean {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted && !!reduced;
}
