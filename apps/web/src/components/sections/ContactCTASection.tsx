import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ContactCTASectionProps {
  agentName?: string;
}

export function ContactCTASection({ agentName }: ContactCTASectionProps) {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="glass-panel relative overflow-hidden rounded-2xl p-10 text-center md:p-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {agentName
                  ? `Ready to bring on your ${agentName}?`
                  : "Ready to automate a department?"}
              </h2>
              <p className="mt-4 text-muted">
                Tell us which business function you want to start with. We&apos;ll
                map the workflows, connect the tools, and have a prototype running
                within two weeks.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="primary">
                  Book a Demo
                </Button>
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
