"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * The "start now" argument: an agent system accumulates rather than
 * depreciating. Each stage shows more of the bar row filled — the visual
 * carries the point without a chart.
 *
 * The story is told by the COUNT of filled bars, never by their height. Every
 * bar — filled or empty, in every card — is the same width, height, gap and
 * radius, so the four mini-charts read as one instrument with four readings.
 */
const BAR_COUNT = 6;
const stages: {
  when: string;
  title: string;
  body: string;
  /** How many of the BAR_COUNT slots are filled at this stage. */
  filled: number;
}[] = [
  {
    when: "Month 1",
    title: "First agent live",
    body: "The use case that pays for itself fastest. The knowledge base starts here.",
    filled: 1,
  },
  {
    when: "Month 3",
    title: "Two more join",
    body: "Each new agent inherits what the first one already learned about your business.",
    filled: 3,
  },
  {
    when: "Month 6",
    title: "Departments connect",
    body: "Agents hand work to each other. The knowledge base is now the asset.",
    filled: 5,
  },
  {
    when: "Year 1+",
    title: "Compounding",
    body: "A structure a competitor starting today still has twelve months of work to reach.",
    filled: 6,
  },
];

/**
 * The cards fill in temporal order rather than all at once, so the row reads
 * as the growth story unfolding left to right. Cards overlap deliberately —
 * Month 3 starts while Month 1 is still finishing — which keeps the whole
 * sequence under 2s (last bar lands at ~1.88s) instead of feeling sluggish.
 */
const EASE = [0.16, 1, 0.3, 1] as const;
const BASE_DELAY = 0.15; // let the card itself arrive first
const CARD_STEP = 0.32;
const BAR_STAGGER = 0.07;
const BAR_DURATION = 0.42;

export function CompoundingValueSection() {
  const reduced = useReducedMotion();

  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Why it pays to start now"
          title="The longer it runs,"
          accent="the stronger it gets."
          lead="An agent system isn't a one-off project — it accumulates. Every new agent inherits what the existing ones have already learned about your business. Start today and in a year you're operating on a foundation a competitor still has to build from scratch."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, stageIndex) => (
          <RevealItem key={stage.when} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/10 bg-surface/30 p-6">
              <Eyebrow tone="primary">{stage.when}</Eyebrow>

              <div
                className="flex h-16 items-stretch gap-1.5"
                role="img"
                aria-label={`${stage.filled} of ${BAR_COUNT} departments covered`}
              >
                {Array.from({ length: BAR_COUNT }, (_, i) =>
                  i < stage.filled ? (
                    <motion.span
                      key={i}
                      className="flex-1 rounded-[3px] bg-primary"
                      style={{ transformOrigin: "bottom" }}
                      initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-64px" }}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : {
                              duration: BAR_DURATION,
                              ease: EASE,
                              delay:
                                BASE_DELAY +
                                stageIndex * CARD_STEP +
                                i * BAR_STAGGER,
                            }
                      }
                    />
                  ) : (
                    // an empty slot is a full-height placeholder bar, not a
                    // baseline tick — it reads as "a department not covered yet"
                    <span
                      key={i}
                      className="flex-1 rounded-[3px] border border-foreground/10 bg-foreground/[0.04]"
                    />
                  )
                )}
              </div>

              <h3 className="text-[15px] font-semibold text-foreground">
                {stage.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{stage.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
