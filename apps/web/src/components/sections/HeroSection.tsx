"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AgentNetworkVisual } from "./hero/AgentNetworkVisual";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden px-4 pb-24 pt-32 md:px-8">
      {/* single ambient wash — the only decorative gradient on the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[680px] rounded-full bg-[radial-gradient(circle,rgb(var(--color-primary)/0.10),transparent_65%)]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-6">
          <Reveal tier="hero">
            <Eyebrow>AI Employees for every department</Eyebrow>
          </Reveal>

          <Reveal tier="hero" delay={0.06}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
              Stop working{" "}
              <span className="font-serif font-normal italic text-primary">
                in
              </span>{" "}
              the business. Start working{" "}
              <span className="font-serif font-normal italic text-primary">
                on
              </span>{" "}
              it.
            </h1>
          </Reveal>

          <Reveal tier="hero" delay={0.12}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              Autonomous agents that act on their own, rather than waiting to be
              asked. We design, build and run the agent infrastructure that takes
              the routine off your team — support, sales, finance, research,
              documents and coordination.
            </p>
          </Reveal>

          <Reveal tier="hero" delay={0.18}>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" variant="primary">
                Book a Demo
              </Button>
              <Button size="lg" variant="secondary">
                See How It Works
              </Button>
            </div>
          </Reveal>

          <Reveal tier="quiet" delay={0.26}>
            <p className="pt-4 text-sm text-muted/70">
              Built, integrated and operated for you — not a tool you have to
              staff.
            </p>
          </Reveal>
        </div>

        <Reveal tier="hero" delay={0.1} className="hidden md:block">
          <div className="flex items-center justify-center">
            <AgentNetworkVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
