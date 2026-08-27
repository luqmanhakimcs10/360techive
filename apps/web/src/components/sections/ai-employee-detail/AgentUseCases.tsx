import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AgentProfile } from "@ai-software-house/shared-types";

interface AgentUseCasesProps {
  agent: AgentProfile;
}

export function AgentUseCases({ agent }: AgentUseCasesProps) {
  return (
    <section className="border-y border-border px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading
            title="Real scenarios"
            accent="this agent handles."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {agent.useCases.map((scenario, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Scenario {i + 1}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{scenario}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
