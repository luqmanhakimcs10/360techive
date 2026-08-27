import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionHeading
            title="What teams say about"
            accent="working with us."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <RevealOnScroll delay={0}>
            <Card className="flex flex-col">
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;We deployed the Support Agent in two weeks. Our first-reply
                time dropped from four hours to under a minute, and our support
                team can finally focus on complex cases instead of password
                resets.&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  — Client Name, Head of Customer Experience
                </p>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Card className="flex flex-col">
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;The Sales Agent books more qualified meetings per week than
                our previous two SDRs combined. It handles the first three
                touchpoints automatically and passes warm leads straight to our
                closers.&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  — Client Name, VP of Sales
                </p>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Card className="flex flex-col">
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;We asked the Finance Agent for a revenue breakdown by
                product line and got it in five seconds. That used to take a human
                analyst half a day. It&apos;s become our default dashboard.&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  — Client Name, Finance Director
                </p>
              </div>
            </Card>
          </RevealOnScroll>
        </div>

        {/*
          TODO: replace placeholder testimonials with real client quotes
          and company names once available. Add avatar images if provided.
        */}
      </div>
    </section>
  );
}
