import {
  ShoppingCart,
  HeartPulse,
  Building2,
  Warehouse,
  Truck,
  Briefcase,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { IconBox } from "@/components/ui/IconBox";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const industries = [
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Finance", icon: Building2 },
  { label: "Real Estate", icon: Warehouse },
  { label: "Logistics", icon: Truck },
  { label: "Professional Services", icon: Briefcase },
];

export function IndustriesTeaserSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-12 max-w-2xl">
            <SectionHeading
              title="Built for"
              accent="regulated and fast-moving industries."
            />
            <p className="mt-4 text-muted">
              Our agents adapt to industry-specific workflows, compliance
              requirements, and tool ecosystems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mb-10 flex flex-wrap gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <RevealOnScroll key={ind.label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-3">
                  <IconBox color="surface">
                    <Icon className="size-4" />
                  </IconBox>
                  <span className="text-sm font-medium text-foreground">
                    {ind.label}
                  </span>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <LinkArrow href="/industries">View all industries we serve</LinkArrow>
        </RevealOnScroll>
      </div>
    </section>
  );
}
