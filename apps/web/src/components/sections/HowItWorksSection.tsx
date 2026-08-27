import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSteps } from "./ProcessSteps";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="From first conversation to"
          accent="running operation."
          lead="We don't hand over a bot and leave. Four phases turn a department into a measurable, continuously improving autonomous operation."
        />
      </Reveal>

      <div className="mt-14">
        <ProcessSteps />
      </div>
    </Section>
  );
}
