import {
  Users,
  FileSearch,
  Headphones,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";

const categories: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Lead Qualification & CRM Upkeep",
    description:
      "Agents that engage inbound leads, score them against your ICP, update CRM records, and hand off warm conversations to your closers — no manual data entry.",
    icon: Users,
  },
  {
    title: "Data Extraction & Reporting",
    description:
      "Pull structured data from documents, emails, and spreadsheets. Generate reports, summaries, and dashboards on demand without waiting on a data team.",
    icon: FileSearch,
  },
  {
    title: "Always-On Customer Support",
    description:
      "Handle tier-1 tickets around the clock. Answer from your knowledge base, triage by urgency, and escalate only when a human touch is required.",
    icon: Headphones,
  },
  {
    title: "Content & Workflow Automation",
    description:
      "Draft proposals, generate invoices, schedule meetings, and route approvals — agents that own the workflow from trigger to completion.",
    icon: Zap,
  },
];

export function UseCaseCategoriesSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading
            title="What businesses"
            accent="have us build for."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.title}
                icon={
                  <IconBox color="primary">
                    <Icon className="size-5" />
                  </IconBox>
                }
                title={cat.title}
              >
                <p className="text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
