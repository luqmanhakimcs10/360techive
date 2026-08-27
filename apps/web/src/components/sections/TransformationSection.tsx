"use client";

import { ArrowDown, ArrowRight, Mail, Phone, DollarSign, FileText, MessageSquare, User, TrendingUp, CheckCircle, Clock, BarChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NodeNetworkDiagram } from "@/components/ui/NodeNetworkDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const todayNodes = [
  { id: "email", label: "Email", icon: Mail },
  { id: "calls", label: "Calls", icon: Phone },
  { id: "billing", label: "Billing", icon: DollarSign },
  { id: "docs", label: "Documents", icon: FileText },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "admin", label: "Admin", icon: User },
];

const aiNodes = [
  { id: "oversight", label: "Full Oversight", icon: TrendingUp },
  { id: "accuracy", label: "Accuracy", icon: CheckCircle },
  { id: "speed", label: "Speed", icon: Clock },
  { id: "insights", label: "Insights", icon: BarChart },
];

export function TransformationSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionHeading
            title="From working in the company"
            accent="to working on the company."
          />
        </div>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          <RevealOnScroll direction="left" className="flex h-full">
            <div className="flex w-full flex-col rounded-2xl border border-border bg-surface/30 p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Today &middot; at your company
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Trapped in the daily grind.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Your team spends hours on repetitive tasks — emails, billing,
                documents, admin. The work gets done, but there&apos;s no time
                left to improve the business itself.
              </p>
              <div className="mt-auto flex justify-center pt-6">
                <NodeNetworkDiagram
                  nodes={todayNodes}
                  variant="scattered"
                  className="mx-auto max-w-[320px]"
                />
              </div>
            </div>
          </RevealOnScroll>

          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex size-12 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-lg">
              <ArrowRight className="size-5" />
            </div>
          </div>

          <div className="flex lg:hidden">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-lg">
              <ArrowDown className="size-5" />
            </div>
          </div>

          <RevealOnScroll direction="right" className="flex h-full">
            <div className="flex w-full flex-col rounded-2xl border border-primary/20 bg-primary/[0.02] p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                With AI Employees &middot; at your company
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                You have full visibility.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                AI Employees handle the routine work autonomously. Your team
                monitors outcomes, makes strategic decisions, and focuses on
                what moves the business forward — not what keeps it running.
              </p>
              <div className="mt-auto flex justify-center pt-6">
                <NodeNetworkDiagram
                  centerLabel="You"
                  nodes={aiNodes}
                  variant="orbit"
                  animated
                  className="mx-auto max-w-[320px]"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
