// ── Agent Profile ──

export type AgentSlug =
  | "support"
  | "sales"
  | "finance"
  | "research"
  | "document"
  | "executive-assistant";

export type Department = "customer-support" | "sales" | "finance" | "research" | "documents" | "executive";

export interface AgentProfile {
  slug: AgentSlug;
  name: string;
  department: Department;
  tagline: string;
  description: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  features: string[];
  responsibilities: string[];
  businessBenefits: string[];
  useCases: string[];
  status: "available" | "coming-soon" | "beta";
  hasInteractiveDemo: boolean;
}

// ── Conversation ──

export type SenderRole = "user" | "agent" | "system";

export interface Message {
  id: string;
  conversationId: string;
  role: SenderRole;
  content: string;
  agentSlug?: AgentSlug;
  createdAt: string; // ISO 8601
}

export interface Conversation {
  id: string;
  title: string;
  agentSlug: AgentSlug;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

// ── API Contracts ──

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface HealthCheckResponse {
  status: "ok" | "degraded";
  timestamp: string;
  version: string;
  db: "connected" | "disconnected";
}
