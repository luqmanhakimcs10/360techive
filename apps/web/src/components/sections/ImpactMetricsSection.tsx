"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Projected target values, not claimed client results.
 * Keep the disclaimer in place until real case-study numbers exist —
 * the credibility of this section depends entirely on it being honest.
 */
const metrics = [
  {
    value: "\u221285%",
    label: "Document drafting time",
    detail:
      "The Document Agent produces structured drafts in your house style. Your team reviews for substance instead of writing from scratch.",
  },
  {
    value: "\u221290%",
    label: "Time spent searching",
    detail:
      "Natural-language search across your knowledge base returns the relevant passage immediately, instead of opening a dozen files.",
  },
  {
    value: "\u221288%",
    label: "Client onboarding time",
    detail:
      "New accounts are captured, enriched and set up automatically — productive on day one rather than after three weeks.",
  },
  {
    value: "4\u00d7",
    label: "Capacity per team member",
    detail:
      "Each person supports a multiple of the accounts they can today. Growth comes from throughput, not headcount.",
  },
  {
    value: "10\u00d7",
    label: "Speed of response to change",
    detail:
      "Market, pricing and regulatory changes are detected daily and matched to the accounts they affect.",
  },
  {
    value: "\u221285%",
    label: "Audit preparation",
    detail:
      "Evidence and documentation assemble themselves from the knowledge base, with completeness enforced structurally.",
  },
];

export function ImpactMetricsSection() {
  return (
    <Section tone="tinted">
      <Reveal>
        <SectionHeading
          eyebrow="What changes"
          title="The numbers that move when agents take"
          accent="the routine."
          lead="Projected targets modelled on a real agent deployment — what happens when the repeatable work stops touching a human."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/10 bg-border/10 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <RevealItem key={m.label} className="h-full">
            <div className="group flex h-full flex-col gap-3 bg-background p-8 transition-colors duration-300 hover:bg-surface/60">
              <span className="font-serif text-4xl font-normal italic leading-none text-primary md:text-5xl">
                {m.value}
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {m.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{m.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal tier="quiet">
        <p className="mt-6 text-xs text-muted/60">
          Illustrative projections based on modelled workflows. Figures vary by
          process, data quality and volume — we validate them against your own
          numbers during discovery.
        </p>
      </Reveal>
    </Section>
  );
}
