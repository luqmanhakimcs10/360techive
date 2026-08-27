import {
  Building2,
  FileText,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";

export function CaseStudiesTeaserSection() {
  return (
    <section className="border-y border-border px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading
            title="First"
            accent="cases."
          />
          <p className="mt-4 text-muted">
            We publish case studies only with client approval. Here is one
            anonymized example of the work we do.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={
              <IconBox color="primary">
                <Building2 className="size-5" />
              </IconBox>
            }
            title="Financial services compliance (anonymized)"
            className="flex flex-col"
          >
            <p className="text-sm leading-relaxed text-muted">
              A financial advisory firm deployed our Document and Research
              agents to automate regulatory filing reviews and competitor
              monitoring. The agents now process 200+ documents per week and
              surface compliance risks in hours instead of days.
              <br />
              <br />
              <span className="text-xs italic text-muted/60">
                This is an illustrative example based on a client engagement.
                The client identity and specific figures have been anonymized.
              </span>
            </p>
          </Card>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface/60 p-8 text-center">
            <IconBox color="surface">
              <FileText className="size-5" />
            </IconBox>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              More case studies coming soon
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We publish detailed case studies only after receiving client
              approval. If you&apos;d like to be featured, we&apos;d love
              to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
