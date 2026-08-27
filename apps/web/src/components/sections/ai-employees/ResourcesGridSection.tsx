import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Badge } from "@/components/ui/Badge";
import { resourceTopics } from "@/config/resources";

export function ResourcesGridSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading title="Dive" accent="deeper." />
          <p className="mt-4 text-muted">
            Articles, guides, and explainers to help you understand how
            autonomous department agents work and what they can do for your
            business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card
                key={topic.slug}
                icon={
                  <IconBox color="primary">
                    <Icon className="size-5" />
                  </IconBox>
                }
                title={topic.title}
                className="relative flex h-full flex-col"
              >
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {topic.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted/40">
                    Coming soon
                  </span>
                  <Badge className="text-[10px]">
                    Article
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
