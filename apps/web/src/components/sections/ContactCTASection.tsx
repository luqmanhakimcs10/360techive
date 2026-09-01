import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

interface ContactCTASectionProps {
  agentName?: string;
}

export function ContactCTASection({ agentName }: ContactCTASectionProps) {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/10 bg-surface/40 px-8 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--color-primary)/0.12),transparent_65%)]"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow tone="primary">Start here</Eyebrow>

            <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-[2.6rem]">
              {agentName ? (
                <>
                  Ready to bring on your{" "}
                  <span className="font-serif font-normal italic text-primary">
                    {agentName}?
                  </span>
                </>
              ) : (
                <>
                  Which routine do you hand over{" "}
                  <span className="font-serif font-normal italic text-primary">
                    first?
                  </span>
                </>
              )}
            </h2>

            <p className="text-pretty text-base leading-relaxed text-muted">
              One short call. We identify the agent that pays for itself
              fastest in your business and lay out a concrete plan to get it
              running.
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="primary">
                Book a Demo
              </Button>
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
