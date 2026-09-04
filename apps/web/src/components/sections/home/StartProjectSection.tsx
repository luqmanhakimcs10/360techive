"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";
import { useSafeReducedMotion } from "@/components/ui/useSafeReducedMotion";

/**
 * The close.
 *
 * The only full bleed section on the page, and the only one that breaks the
 * Section rhythm on purpose: after eleven bands of the same measure, a change
 * of shape is what makes the ask register. The grid behind it drifts slowly
 * with scroll, which is the same grid used in the hero visual, so the page
 * ends where it started.
 */
export function StartProjectSection() {
  const reduced = useSafeReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.35]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden border-t border-border/10 px-4 py-28 md:px-8 md:py-40"
    >
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: gridY }}
        className="pointer-events-none absolute inset-x-0 -inset-y-24 opacity-70"
      >
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(var(--color-border)/0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border)/0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { opacity: glow }}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--color-primary)/0.12),transparent_65%)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Eyebrow tone="primary">Start here</Eyebrow>

        <h2 className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-[3.6rem]">
          <LineReveal>Have an idea, a problem,</LineReveal>
          <LineReveal delay={0.09}>
            or something that should{" "}
            <span className="font-serif font-normal italic text-primary">
              work better?
            </span>
          </LineReveal>
        </h2>

        <Reveal tier="quiet" delay={0.14}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            Tell us what you are trying to build. We will help you figure out
            what comes next, even if that turns out to be something smaller than
            you expected.
          </p>
        </Reveal>

        <Reveal tier="quiet" delay={0.2}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Start a conversation
              </Button>
            </Link>
            <Link href="/#work">
              <Button size="lg" variant="secondary">
                See what we build
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal tier="quiet" delay={0.26}>
          <p className="mt-8 text-sm text-muted/70">
            No pitch deck required. A paragraph about the problem is enough.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
