import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/TextReveal";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import {
  enquiryRoutes,
  conversationSteps,
  contactFaqs,
  contactNotes,
} from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact | 360 Techive",
  description:
    "Tell us what you are trying to build. We work with brands, founders and teams on custom software, digital products and automation.",
};

/**
 * The contact page is a sales conversation, so it answers the objections a
 * brand has before writing to an agency it does not know yet: who reads this,
 * what happens next, can you work with our team, who owns the code, what
 * about our NDA. The form stays at the top because that is the point of the
 * page; everything under it exists to make sending it feel low risk.
 */
export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 pt-32 md:pb-14 md:pt-40">
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
                We work with brands that have outgrown their current systems,
                teams that need a product built properly, and founders with an
                idea and no software yet. Whichever one you are, start with the
                problem and we will take it from there.
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
              <ul className="mt-4 flex flex-col gap-3 border-t border-border/10 pt-6">
                {contactNotes.map((note) => (
                  <li
                    key={note}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted"
                  >
                    <span className="mt-[9px] size-1 shrink-0 rounded-full bg-primary" />
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* Three doors, so an agency enquiry does not arrive looking like a brief */}
      <Section tone="tinted">
        <div className="flex flex-col gap-3">
          <Eyebrow>Who is writing</Eyebrow>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.1rem]">
            <LineReveal>
              Not every message is a{" "}
              <span className="font-serif font-normal italic text-primary">
                brief.
              </span>
            </LineReveal>
          </h2>
          <Reveal tier="quiet" delay={0.08}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted">
              Use whichever of these fits and your message reaches the right
              conversation, already labelled.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/10 bg-border/10 md:grid-cols-3"
          stagger={0.07}
        >
          {enquiryRoutes.map((route) => (
            <RevealItem key={route.label} className="bg-background">
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                  route.subject
                )}`}
                className="group flex h-full flex-col gap-3 p-7 transition-colors duration-300 hover:bg-surface/60 md:p-9"
              >
                <span className="h-px w-6 bg-primary transition-all duration-300 group-hover:w-10" />

                <span className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  {route.label}
                </span>

                <span className="text-pretty text-sm leading-relaxed text-muted">
                  {route.description}
                </span>

                <span className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
                  Write to us
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                  >
                    &rarr;
                  </span>
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* What happens after send, in order */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>After you send it</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.1rem]">
              <LineReveal>How the first</LineReveal>
              <LineReveal delay={0.08}>
                conversation{" "}
                <span className="font-serif font-normal italic text-primary">
                  goes.
                </span>
              </LineReveal>
            </h2>
            <Reveal tier="quiet" delay={0.12}>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted">
                No pitch deck, no discovery workshop you have to pay for before
                anyone tells you anything useful.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="flex flex-col" stagger={0.06}>
            {conversationSteps.map((item) => (
              <RevealItem key={item.step}>
                <div className="group flex gap-6 border-t border-border/10 py-7 last:border-b">
                  <span className="text-[11px] font-medium tabular-nums text-primary">
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* The objections that stop a brand from writing at all */}
      <Section tone="tinted">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Before you write</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.1rem]">
              <LineReveal>Questions we get</LineReveal>
              <LineReveal delay={0.08}>
                asked{" "}
                <span className="font-serif font-normal italic text-primary">
                  first.
                </span>
              </LineReveal>
            </h2>
            <Reveal tier="quiet" delay={0.12}>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted">
                If yours is not here, put it in the form. We would rather answer
                it now than halfway through a project.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <Accordion items={contactFaqs} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
