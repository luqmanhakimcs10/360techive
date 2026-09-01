import {
  HeroSection,
  TransformationSection,
  AIEmployeeShowcaseSection,
  CompoundingValueSection,
  ImpactMetricsSection,
  CostComparisonSection,
  SavingsCalculatorSection,
  CompanyBrainSection,
  ModelGenerationsSection,
  CapabilityCurveSection,
  PositionQuoteSection,
  HowItWorksSection,
  FAQSection,
  ContactCTASection,
} from "@/components/sections";

/**
 * The homepage is one continuous argument. Each section answers the
 * objection raised by the one before it:
 *
 *   1.  the shift on offer                  (hero)
 *   2.  your day, before and after          (transformation)
 *   3.  who does the work                   (the six agents)
 *   4.  "why not wait?"                     (compounding value)
 *   5.  "does it actually move numbers?"    (impact metrics)
 *   6.  "why not just hire someone?"        (cost comparison)
 *   7.  "what about MY numbers?"            (savings calculator)
 *   8.  "isn't this just chatbots?"         (company brain)
 *   9.  "won't it be obsolete in a year?"   (model generations)
 *   10. "says who?"                         (METR capability curve)
 *   11. the thesis, in one line             (position quote)
 *   12. how we get there                    (process)
 *   13. everything else                     (FAQ)
 *   14. the ask                             (CTA)
 *
 * Section tone alternates plain → tinted down the page; see ui/Section.tsx.
 *
 * Industries / Services / Testimonials teasers are intentionally NOT here —
 * they interrupt the argument. They still exist as components and belong on
 * their own pages until there is real proof material to put in them.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TransformationSection />
      <AIEmployeeShowcaseSection />
      <CompoundingValueSection />
      <ImpactMetricsSection />
      <CostComparisonSection />
      <SavingsCalculatorSection />
      <CompanyBrainSection />
      <ModelGenerationsSection />
      <CapabilityCurveSection />
      <PositionQuoteSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
