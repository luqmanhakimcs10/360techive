import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const processSteps = [
  {
    num: "01",
    title: "Discovery & analysis",
    description:
      "We audit how the department actually works — tools, handoffs, decision points — and rank where an agent has the biggest lever. Your processes, not a generic template.",
  },
  {
    num: "02",
    title: "Architecture",
    description:
      "We design the agent system: which data it reads, which tools it can act in, where it escalates to a human, and how success gets measured.",
  },
  {
    num: "03",
    title: "Build & training",
    description:
      "We build the agents and train them on your data, processes and language. Every action is traceable, so you can see exactly what the agent did and why.",
  },
  {
    num: "04",
    title: "Operate & improve",
    description:
      "We run the agents and keep developing them. Agent-as-a-service — not a one-off project handover with a manual attached.",
  },
];

export function ProcessSteps() {
  return (
    <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-border/10 bg-border/10 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <RevealItem key={step.num} className="h-full">
          <div className="flex h-full flex-col gap-3 bg-background p-8">
            <span className="font-serif text-4xl font-normal italic leading-none text-primary">
              {step.num}
            </span>
            <h3 className="text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
