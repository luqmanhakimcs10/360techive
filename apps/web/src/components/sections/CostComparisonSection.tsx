"use client";

import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const employeeCosts = [
  "Salary and annual increases",
  "Employer taxes and contributions",
  "Benefits and pension",
  "Paid leave",
  "Sick days and cover",
  "Recruitment and onboarding",
  "Ramp-up before productivity",
  "A fixed number of working hours",
];

const agentTraits = [
  "Runs 24/7 with no leave or downtime",
  "No employer taxes or benefits load",
  "Duplicated in minutes to scale",
  "Consistent, auditable output quality",
  "Improves with every model generation",
  "Productive from the first day",
];

export function CostComparisonSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="The real comparison"
          title="A hire costs more than"
          accent="their salary."
          lead="Every role carries a bundle of fixed costs and risks behind it. An agent carries none of them."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2">
        <RevealItem className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-border/10 bg-surface/30 p-8">
            <Eyebrow>Per employee</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              Fixed costs and risk
            </h3>

            <ul className="mt-8 flex flex-col divide-y divide-border/10">
              {employeeCosts.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="text-sm text-muted line-through decoration-muted/30">
                    {item}
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted/50">
                    <X className="size-3" />
                    Gone
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>

        <RevealItem className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-primary/25 bg-primary/[0.03] p-8">
            <Eyebrow tone="primary">Per agent</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              An investment, not a salary
            </h3>

            <ul className="mt-8 flex flex-col divide-y divide-border/10">
              {agentTraits.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
