"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AgentNetworkVisual } from "./hero/AgentNetworkVisual";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-4 pb-20 pt-32 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge icon={<span className="size-3 rounded-full bg-primary" />}>
            Autonomous Department Agents
          </Badge>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            AI Employees that run{" "}
            <span className="font-serif italic text-primary">
              entire departments.
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            We build autonomous AI agents that plug into your existing tools and
            handle the day-to-day work of an entire business function — support,
            sales, finance, research, documents, and executive coordination.
            Each agent is purpose-built for one department, trained on your
            data, and ready to produce results on day one.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="primary">
              Book a Demo
            </Button>
            <Button size="lg" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center">
          <AgentNetworkVisual />
        </div>
      </div>
    </section>
  );
}
