import type { AgentSlug, AgentProfile } from "@ai-software-house/shared-types";

const profiles: Record<AgentSlug, AgentProfile> = {
  support: {
    slug: "support",
    name: "Support Agent",
    department: "customer-support",
    tagline: "Resolve tickets before they escalate",
    description:
      "An autonomous helpdesk agent that triages incoming requests, answers common questions from your knowledge base, and escalates only when human judgment is needed.",
    icon: "Headphones",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Ticket triage and categorization", "Knowledge-base auto-reply", "Escalation routing"],
    responsibilities: [
      "Answer customer questions from your documentation and FAQ",
      "Track and update support tickets across their lifecycle",
      "Escalate complex or sensitive issues to the right human team",
    ],
    businessBenefits: [
      "Respond to customers in seconds, not hours",
      "Reduce support ticket volume by 40–60%",
      "Free senior engineers from tier-1 triage",
    ],
    useCases: [
      "A SaaS company routes all tier-1 billing and account questions to the Support Agent, cutting average first-reply time from 4 hours to 30 seconds.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
  sales: {
    slug: "sales",
    name: "Sales Agent",
    department: "sales",
    tagline: "Qualify leads and book meetings",
    description:
      "An AI sales development representative that engages website visitors, answers product questions, qualifies inbound leads, and schedules demos.",
    icon: "TrendingUp",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Lead qualification and scoring", "Multi-channel outreach sequences", "Calendar booking"],
    responsibilities: [
      "Explain your services and recommend the right solution for each prospect",
      "Qualify leads against your ideal customer profile",
      "Schedule meetings and demos with the right sales rep",
    ],
    businessBenefits: [
      "Convert more inbound traffic into qualified meetings",
      "Shorten the sales cycle with instant, informed responses",
      "Let your closers focus on the final conversation, not the first fifty",
    ],
    useCases: [
      "A B2B agency installs the Sales Agent on its pricing page, answering technical questions and booking 15-minute discovery calls around the clock.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
  finance: {
    slug: "finance",
    name: "Finance Agent",
    department: "finance",
    tagline: "Reconcile, report, forecast",
    description:
      "An AI finance analyst that connects to your accounting stack, generates expense summaries and revenue reports, and answers natural-language questions about your financial data.",
    icon: "Wallet",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Expense categorization", "Revenue reporting", "Invoice lookup"],
    responsibilities: [
      "Summarize expenses by category, department, or project",
      "Generate weekly and monthly revenue reports with comparisons",
      "Look up invoices, payment status, and vendor history",
    ],
    businessBenefits: [
      "Close the books faster — no waiting for manual spreadsheet consolidation",
      "Get instant answers to financial questions without pulling a report",
      "Catch billing anomalies before they compound",
    ],
    useCases: [
      "A mid-market agency asks the Finance Agent for 'last month's ad spend by channel' and gets a categorized breakdown in seconds.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
  research: {
    slug: "research",
    name: "Research Agent",
    department: "research",
    tagline: "Deep research at machine speed",
    description:
      "An AI research associate that gathers, synthesizes, and summarizes information from the web, documents, and databases on demand or on a schedule.",
    icon: "Search",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Multi-source web research", "Competitor analysis", "Trend identification"],
    responsibilities: [
      "Conduct market research on industries, competitors, and emerging trends",
      "Produce competitor analysis with pricing, positioning, and feature comparisons",
      "Generate concise business insight briefs for leadership",
    ],
    businessBenefits: [
      "Get research briefs in minutes instead of days",
      "Track competitors continuously instead of quarterly",
      "Free your strategy team from hours of manual reading",
    ],
    useCases: [
      "A management consultancy asks the Research Agent to compare AI compliance frameworks across regions and receives a sourced, structured brief within five minutes.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
  document: {
    slug: "document",
    name: "Document Agent",
    department: "documents",
    tagline: "Draft, review, distribute",
    description:
      "An AI document specialist that drafts proposals, reports, and contracts from templates and structured data, and summarizes lengthy documents on request.",
    icon: "FileText",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Template-based document generation", "Document summarization", "Key-term extraction"],
    responsibilities: [
      "Generate quotations, proposals, and invoices from structured data",
      "Summarize lengthy reports, contracts, and articles",
      "Extract key clauses and obligations from legal documents",
    ],
    businessBenefits: [
      "Reduce document drafting time by 70%",
      "Eliminate copy-paste errors in proposals and contracts",
      "Keep a searchable, version-controlled document history",
    ],
    useCases: [
      "A professional services firm generates client proposals from standardized modules — the agent populates pricing, scope, and timelines from the CRM in under a minute.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
  "executive-assistant": {
    slug: "executive-assistant",
    name: "Executive Assistant Agent",
    department: "executive",
    tagline: "Your AI chief of staff",
    description:
      "An AI executive assistant that coordinates schedules, drafts correspondence, sets reminders, and surfaces what needs your attention across calendars, email, and task tools.",
    icon: "Crown",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    features: ["Cross-calendar scheduling", "Email drafting", "Priority triage"],
    responsibilities: [
      "Manage schedules by finding availability across attendees and booking time",
      "Draft emails, meeting agendas, and follow-up messages",
      "Create and track reminders for deadlines, reviews, and follow-ups",
    ],
    businessBenefits: [
      "Recover hours per week spent on calendar wrangling",
      "Never miss a follow-up or deadline again",
      "Walk into every meeting with a prep brief already written",
    ],
    useCases: [
      "An executive asks the agent to find time for a 30-minute sync with each department head — it cross-references calendars and books all five slots in one request.",
    ],
    status: "available",
    hasInteractiveDemo: true,
  },
};

export function getAgentProfile(slug: AgentSlug): AgentProfile | undefined {
  return profiles[slug];
}

export function getAllAgentProfiles(): AgentProfile[] {
  return Object.values(profiles);
}
