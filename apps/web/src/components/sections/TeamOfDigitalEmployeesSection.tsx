"use client";

import type { LucideIcon } from "lucide-react";
import { Headphones, TrendingUp, Wallet, Search, FileText, Crown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NodeNetworkDiagram } from "@/components/ui/NodeNetworkDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { agents } from "@/config/agents";

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  TrendingUp,
  Wallet,
  Search,
  FileText,
  Crown,
};

const diagramNodes = agents.map((a) => ({
  id: a.slug,
  label: a.name.replace(" Agent", ""),
  icon: iconMap[a.icon] ?? FileText,
  href: `/ai-employees/${a.slug}`,
}));

export function TeamOfDigitalEmployeesSection() {
  return (
    <section className="border-y border-border px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll direction="left">
            <SectionHeading
              title="A team of"
              accent="digital employees."
            />
            <p className="mt-4 text-muted">
              We build precisely the AI Employees your business needs —
              individually developed for each department, not off-the-shelf.
              Coordinated, autonomous, and working around the clock.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="flex justify-center">
            <NodeNetworkDiagram
              centerLabel="Your Company"
              nodes={diagramNodes}
              variant="orbit"
              animated
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
