import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The thesis, stated once, in the largest serif on the page.
 * Attributed to the company rather than a person — swap in a named
 * founder attribution when there's someone to name.
 */
export function PositionQuoteSection() {
  return (
    <Section tone="tinted">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-7">
          <Eyebrow tone="primary">The thesis</Eyebrow>

          <blockquote className="text-pretty font-serif text-2xl font-normal italic leading-[1.3] tracking-tight text-foreground md:text-[2.15rem]">
            &ldquo;The advantage isn&rsquo;t the model — everyone gets the same
            models. It&rsquo;s having the structure in place when the next one
            arrives.&rdquo;
          </blockquote>

          <footer className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">
              360 Techive
            </span>
            <span className="text-[13px] text-muted">
              Agents designed, built and operated for you
            </span>
          </footer>
        </div>
      </Reveal>
    </Section>
  );
}
