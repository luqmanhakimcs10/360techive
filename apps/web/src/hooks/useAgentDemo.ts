"use client";

import { useState, useCallback } from "react";
import type { AgentSlug } from "@ai-software-house/shared-types";

interface Message {
  role: "user" | "agent";
  content: string;
}

interface UseAgentDemoReturn {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (text: string) => void;
  reset: () => void;
}

const cannedResponses: Record<AgentSlug, { user: string; agent: string }[]> = {
  support: [
    {
      user: "I need a refund for my subscription",
      agent:
        "I'd be happy to help with a refund. Can you provide your account email or order number so I can look up your subscription details?",
    },
    {
      user: "My account is locked and I can't log in",
      agent:
        "I can help unlock your account. First, let me verify your identity — could you confirm the email address associated with your account?",
    },
  ],
  sales: [
    {
      user: "How much does the Enterprise plan cost?",
      agent:
        "The Enterprise plan starts at $2,500/month and includes all six AI Employees plus dedicated support. I can schedule a quick call with our team to walk through the specifics for your use case.",
    },
    {
      user: "Can I try the Support Agent before committing?",
      agent:
        "Absolutely. We offer a 14-day free trial with full access to any single AI Employee. Would you like me to set that up for the Support Agent?",
    },
  ],
  finance: [
    {
      user: "Show me last quarter's expenses by department",
      agent:
        "Let me pull that report. Here's a summary: Engineering spent $124K, Marketing $89K, Sales $67K, and Operations $43K. I can break this down further by category if you'd like.",
    },
    {
      user: "Are there any unusual transactions this month?",
      agent:
        "I've scanned the transaction log. There's one flagged: a $12,500 payment to a new vendor 'DataSync Pro' that doesn't match any existing contract on file. Would you like me to flag this for your finance team?",
    },
  ],
  research: [
    {
      user: "What are the top AI trends in healthcare right now?",
      agent:
        "I've scanned recent reports. Three trends stand out: (1) AI-assisted medical imaging for radiology, (2) LLM-powered clinical documentation, and (3) predictive analytics for patient readmission. I can generate a full brief with sources if that's useful.",
    },
    {
      user: "Compare our main competitor's pricing",
      agent:
        "Based on the latest available data, Competitor A charges $299/month for their basic plan with 3 user seats. Competitor B offers a free tier but caps at 1,000 queries/month. I can compile a detailed comparison table if you'd like.",
    },
  ],
  document: [
    {
      user: "Draft a proposal for a new client",
      agent:
        "I can generate a proposal draft. I'll need the client's name, the services you're offering, the proposed timeline, and the pricing structure. Do you have these details ready, or should I pull from a recent template?",
    },
    {
      user: "Summarize the Q3 shareholder report",
      agent:
        "The Q3 report is 47 pages. Key takeaways: revenue grew 18% YoY to $4.2M, operating costs decreased 5%, and the company expanded into two new markets. I can provide a detailed section-by-section summary if needed.",
    },
  ],
  "executive-assistant": [
    {
      user: "Schedule a team standup for tomorrow at 9 AM",
      agent:
        "Let me check everyone's availability. I see that the conference room is free and all team members show as available at 9 AM tomorrow. I've sent the calendar invite with the usual Zoom link. Shall I set a recurring event?",
    },
    {
      user: "What's on my schedule for today?",
      agent:
        "Here's your day: 9:30 AM — Product review (30 min), 11:00 AM — Client call with Acme Corp (45 min), 1:00 PM — Lunch, 2:30 PM — Team sync (1 hr). You also have two pending reminder flags about the budget review due Friday.",
    },
  ],
};

function getCannedReply(
  slug: AgentSlug,
  userMessage: string
): string | null {
  const exchanges = cannedResponses[slug];
  if (!exchanges) return null;

  const lower = userMessage.toLowerCase();

  for (const exchange of exchanges) {
    if (lower.includes(exchange.user.toLowerCase().slice(0, 15))) {
      return exchange.agent;
    }
  }

  return null;
}

const fallbackResponses: Record<AgentSlug, string> = {
  support:
    "Thanks for your message. I've noted your request and will help resolve it. Could you provide a bit more detail so I can assist better?",
  sales:
    "I appreciate you reaching out. I'd be happy to discuss how our AI Employees can help your team. What specific area are you interested in?",
  finance:
    "Got it. I'll look into your request right away. Can you share any relevant details or account information to help me find what you need?",
  research:
    "I'll start looking into that for you. To give you the most relevant results, could you narrow down the scope or time frame?",
  document:
    "I can help with that. Let me know the specifics and I'll prepare the document for your review.",
  "executive-assistant":
    "On it. I'll check your calendars, tasks, and priorities. Let me know if there's anything specific you'd like me to prioritize.",
};

export function useAgentDemo(agentSlug: AgentSlug): UseAgentDemoReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(
    (text: string) => {
      const userMsg: Message = { role: "user", content: text };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      // Simulated delay — swap this for a real apiRequest() call later
      const delay = 600 + Math.random() * 400;
      setTimeout(() => {
        const reply =
          getCannedReply(agentSlug, text) ?? fallbackResponses[agentSlug];
        const agentMsg: Message = { role: "agent", content: reply };
        setMessages((prev) => [...prev, agentMsg]);
        setIsTyping(false);
      }, delay);
    },
    [agentSlug]
  );

  const reset = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
  }, []);

  return { messages, isTyping, sendMessage, reset };
}
