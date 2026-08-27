import {
  HeroSection,
  AIEmployeeShowcaseSection,
  HowItWorksSection,
  IndustriesTeaserSection,
  ServicesTeaserSection,
  TestimonialsSection,
  FAQSection,
  ContactCTASection,
  TransformationSection,
  TeamOfDigitalEmployeesSection,
  GrowthSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TransformationSection />
      <TeamOfDigitalEmployeesSection />
      <AIEmployeeShowcaseSection />
      <HowItWorksSection />
      <GrowthSection />
      <IndustriesTeaserSection />
      <ServicesTeaserSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
