"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { AgentCard } from "@/components/sections/AgentCard";
import { agents } from "@/config/agents";

export function AIEmployeeShowcaseSection() {
  return (
    <Section tone="tinted" id="ai-employees">
      <Reveal>
        <SectionHeading
          eyebrow="The team"
          title="A team of"
          accent="digital employees."
          lead="We build the agents that have the biggest lever in your business — developed for your processes, not bought off the shelf. Coordinated with each other, working around the clock."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <RevealItem key={agent.slug} className="h-full">
            <AgentCard agent={agent} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
