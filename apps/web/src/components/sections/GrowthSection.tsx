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

export function GrowthSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll direction="left">
            <SectionHeading
              title="Start with one."
              accent="Scale department by department."
            />
            <p className="mt-4 text-muted">
              Most clients begin with a single AI Employee — Support or Finance
              are common first choices — then expand coverage across additional
              departments over time. Each new agent integrates faster because
              the foundation is already in place.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="flex flex-col items-center">
            <NodeNetworkDiagram
              centerLabel="Your Company"
              nodes={diagramNodes}
              variant="orbit"
              animated
              activeNodeCycle={{ intervalMs: 2800 }}
            />
            <span className="mt-4 text-[10px] uppercase tracking-widest text-muted/40">
              Illustrative example
            </span>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
