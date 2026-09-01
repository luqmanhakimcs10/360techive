"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const generations = [
  {
    when: "Today",
    sub: "current models",
    width: "34%",
    opacity: 1,
    body: "Your agents run reliably on what's available now. Nothing speculative.",
  },
  {
    when: "Next",
    sub: "generation",
    width: "56%",
    opacity: 0.85,
    body: "The same agents handle longer, less supervised tasks. No rebuild.",
  },
  {
    when: "After that",
    sub: "generation",
    width: "78%",
    opacity: 0.7,
    body: "Work you currently keep in-house because no model could be trusted with it.",
  },
  {
    when: "Onward",
    sub: "toward general capability",
    width: "100%",
    opacity: 0.5,
    body: "Your structure is already there. Latecomers start where you did in month one.",
  },
];

export function ModelGenerationsSection() {
  return (
    <Section tone="tinted">
      <Reveal>
        <SectionHeading
          eyebrow="Built to appreciate"
          title="Stronger with every"
          accent="model generation."
          lead="The structure you build today runs on tomorrow's far more capable models without being rebuilt. Put the structure in place now and every subsequent generation multiplies what it's worth."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/10 bg-border/10 sm:grid-cols-2 lg:grid-cols-4">
        {generations.map((g) => (
          <RevealItem key={g.when} className="h-full">
            <div className="flex h-full flex-col gap-5 bg-background p-8">
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-foreground">
                  {g.when}
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {g.sub}
                </span>
              </div>

              <div
                className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.08]"
                aria-hidden="true"
              >
                <span
                  className="block h-full rounded-full bg-primary"
                  style={{ width: g.width, opacity: g.opacity }}
                />
              </div>

              <p className="text-sm leading-relaxed text-muted">{g.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal tier="quiet">
        <p className="mt-6 text-xs text-muted/60">
          Same agent structure throughout — only the underlying model changes.
        </p>
      </Reveal>
    </Section>
  );
}
