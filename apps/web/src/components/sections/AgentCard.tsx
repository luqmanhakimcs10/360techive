"use client";

import {
  Headphones,
  TrendingUp,
  Wallet,
  Search,
  FileText,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { LinkArrow } from "@/components/ui/LinkArrow";
import type { AgentProfile } from "@ai-software-house/shared-types";

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  TrendingUp,
  Wallet,
  Search,
  FileText,
  Crown,
};

interface AgentCardProps {
  agent: AgentProfile;
  descriptionLength?: number;
}

export function AgentCard({ agent, descriptionLength = 130 }: AgentCardProps) {
  const Icon = iconMap[agent.icon] ?? Headphones;

  return (
    <Card
      icon={
        <IconBox color="primary">
          <Icon className="size-5" />
        </IconBox>
      }
      title={agent.name}
      className="flex h-full flex-col"
    >
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {agent.description.slice(0, descriptionLength)}
        {agent.description.length > descriptionLength ? "…" : ""}
      </p>
      <LinkArrow href={`/ai-employees/${agent.slug}`}>Learn more</LinkArrow>
    </Card>
  );
}
