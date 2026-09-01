import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

export function HowWeBuildAgentsSection() {
  return (
    <section className="border-y border-border/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading
            title="How we build"
            accent="and deploy each agent."
          />
          <p className="mt-4 text-muted">
            Every AI Employee follows the same four-phase lifecycle — from
            understanding your workflows to ongoing operation and improvement.
          </p>
        </div>

        <ProcessSteps />
      </div>
    </section>
  );
}
