import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | 360 Techive",
  description:
    "Tell us what you are trying to build and we will help you work out what comes next.",
};

const prompts = [
  "What you are trying to build, or the problem you keep running into",
  "Who would use it, and how they work today",
  "Any deadline or budget you already have in mind",
];

/**
 * Kept deliberately plain. When a real form and inbox exist, the form drops
 * into the right hand column and the rest of the page stays as it is.
 */
export default function ContactPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div className="flex flex-col gap-6">
          <Eyebrow tone="primary">Contact</Eyebrow>

          <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-foreground md:text-6xl">
            Tell us what you are{" "}
            <span className="font-serif font-normal italic text-primary">
              building.
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            A paragraph is enough to start. We will read it, ask a few
            questions, and tell you honestly whether we are the right team for
            it.
          </p>

          <Reveal tier="quiet" delay={0.1}>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group mt-2 inline-flex items-center gap-3 text-lg font-medium text-foreground"
            >
              <span className="relative">
                {siteConfig.contactEmail}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-100 bg-primary transition-transform duration-300 group-hover:scale-x-0 motion-reduce:transition-none"
                />
              </span>
              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              >
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border/10 bg-surface/40 p-7 md:p-9">
            <h2 className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Helpful to include
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {prompts.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-border/10 pt-5 text-sm leading-relaxed text-muted">
              If you are not sure what you need yet, say that. Half of our
              projects start as a conversation about whether software is even
              the right answer.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
