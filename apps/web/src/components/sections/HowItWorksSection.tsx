import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProcessSteps } from "./ProcessSteps";

export function HowItWorksSection() {
  return (
    <section className="border-y border-border px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <SectionHeading
              title="From discovery to"
              accent="continuous operation."
            />
            <p className="mt-4 text-muted">
              We don&apos;t hand you a bot and leave. Each deployment follows a
              four-phase process that turns a business department into a
              measurable, continuously improving autonomous operation.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <ProcessSteps />
        </RevealOnScroll>
      </div>
    </section>
  );
}
