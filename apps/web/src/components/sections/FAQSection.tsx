import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    label: "What's the difference between an AI Employee and a chatbot?",
    content:
      "A chatbot answers questions in a chat window. An AI Employee is a persistent autonomous agent connected to your tools — it can create tickets, update CRM records, generate invoices, schedule meetings, and take actions across multiple systems without a human in the loop. Think of it as a new team member, not a FAQ interface.",
  },
  {
    label: "How long does it take to deploy an AI Employee?",
    content:
      "Most agents are integrated and producing value within two to four weeks. The timeline depends on how many data sources and tools the agent needs to connect to, and whether custom workflows are required. Discovery and architecture design happen in the first week.",
  },
  {
    label: "Is my data secure?",
    content:
      "Yes. Each agent operates within your own infrastructure or a dedicated virtual private cloud. Data is encrypted at rest and in transit. We never train our base models on your data, and you retain full control over access permissions and retention policies. SOC 2 compliance is in place for our platform layer.",
  },
  {
    label: "Can AI Employees integrate with our existing tools?",
    content:
      "We support direct integrations with major CRM, helpdesk, accounting, calendar, and document platforms via API — including Salesforce, HubSpot, Zendesk, Stripe, QuickBooks, Google Workspace, and Microsoft 365. Custom API integrations for internal tools are part of every deployment.",
  },
  {
    label: "What does it cost?",
    content:
      "Pricing is per-agent, per-month, with volume discounts for deploying multiple agents. Each plan includes integration, monitoring, and continuous improvement. Custom pricing is available for enterprise deployments with dedicated infrastructure or compliance requirements.",
  },
  {
    label: "Do we need technical staff to maintain this?",
    content:
      "No. We handle deployment, monitoring, updates, and retraining as part of the service. Your team interacts with each agent through its native interface — no code changes required on your end. If a workflow changes, we adjust the agent configuration for you.",
  },
];

export function FAQSection() {
  return (
    <section className="border-y border-border px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <SectionHeading
              title="Frequently asked"
              accent="questions."
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <Accordion items={faqs} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
