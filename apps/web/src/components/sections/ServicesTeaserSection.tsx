import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ServicesTeaserSection() {
  return (
    <section className="border-y border-border/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <SectionHeading
              title="Beyond the agent:"
              accent="strategy, integration, and operations."
            />
            <p className="mt-4 leading-relaxed text-muted">
              We design and build custom AI agents tailored to your specific
              workflows and tech stack. Every deployment includes integration with
              your existing tools, ongoing monitoring, and continuous improvement
              — so your agents get smarter over time without extra work from your
              team.
            </p>
            <div className="mt-8">
              <LinkArrow href="/services">
                Explore our full service offering
              </LinkArrow>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
