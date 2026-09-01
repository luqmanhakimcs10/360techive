import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    label: "Which businesses is this actually worth it for?",
    content:
      "Established businesses with recurring, knowledge-heavy processes — sales, support, finance, operations. Industry-agnostic. The test isn't your sector, it's whether the same kind of work happens repeatedly.",
  },
  {
    label: "What's the difference between an AI Employee and a chatbot?",
    content:
      "A chatbot answers questions in a chat window. An AI Employee is a persistent autonomous agent connected to your tools — it creates tickets, updates CRM records, generates invoices and schedules meetings across multiple systems without a human in the loop. A team member, not an FAQ interface.",
  },
  {
    label: "How long until something is actually running?",
    content:
      "The first productive agent is typically live within two to four weeks. We start with the use case that pays for itself fastest and build outward from there. Discovery and architecture happen in week one.",
  },
  {
    label: "What happens to our data?",
    content:
      "Your data stays yours. Each agent operates within your own infrastructure or a dedicated private cloud, around a knowledge base you own. Encrypted at rest and in transit, with explicit access and retention rules. We never train base models on your data.",
  },
  {
    label: "Do we need AI expertise on the team?",
    content:
      "No. We build, operate and improve the agents for you — agent-as-a-service. You keep control of scope and policy without having to hire for model engineering.",
  },
  {
    label: "Is this just ChatGPT with a different interface?",
    content:
      "No. These are custom multi-agent systems connected to your tools and data and trained on your processes. The value is in the integration and the knowledge base underneath, not the model.",
  },
];

export function FAQSection() {
  return (
    <Section tone="tinted">
      <Reveal>
        <SectionHeading
          align="center"
          className="max-w-3xl"
          eyebrow="Before you ask"
          title="Frequently asked"
          accent="questions."
        />
      </Reveal>

      <Reveal className="mt-12">
        <Accordion items={faqs} />
      </Reveal>
    </Section>
  );
}
