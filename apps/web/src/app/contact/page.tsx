import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/TextReveal";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | 360 Techive",
  description:
    "Tell us what you are trying to build and we will help you work out what comes next.",
};

const expectations = [
  {
    step: "01",
    title: "We read it properly",
    body: "A real person goes through what you sent, not an autoresponder.",
  },
  {
    step: "02",
    title: "We ask a few questions",
    body: "Usually about how the work happens today and who it is for.",
  },
  {
    step: "03",
    title: "We tell you what we think",
    body: "Including when the honest answer is that you need something smaller, or someone else.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8 pt-32 md:pb-10 md:pt-40">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="primary">Contact</Eyebrow>

            <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-foreground md:text-[3.4rem]">
              <LineReveal trigger="mount">Tell us what you are</LineReveal>
              <LineReveal trigger="mount" delay={0.1}>
                <span className="font-serif font-normal italic text-primary">
                  building.
                </span>
              </LineReveal>
            </h1>

            <Reveal tier="quiet" delay={0.12}>
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
                A paragraph is enough to start. Fill in the form and we will
                come back to you, usually within a working day.
              </p>
            </Reveal>

            <Reveal tier="quiet" delay={0.18}>
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                  Prefer email
                </span>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="group inline-flex w-fit items-center gap-3 text-lg font-medium text-foreground"
                >
                  <span className="relative">
                    {siteConfig.contactEmail}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-px origin-left bg-primary transition-transform duration-300 group-hover:scale-x-0 motion-reduce:transition-none"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal tier="quiet" delay={0.24}>
              <ol className="mt-6 flex flex-col gap-5 border-t border-border/10 pt-7">
                {expectations.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="text-[11px] font-medium tabular-nums text-primary">
                      {item.step}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] font-semibold text-foreground">
                        {item.title}
                      </span>
                      <span className="text-pretty text-sm leading-relaxed text-muted">
                        {item.body}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
