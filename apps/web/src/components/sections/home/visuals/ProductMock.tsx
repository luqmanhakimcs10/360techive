"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Product interface mockups with real supporting photography.
 *
 * Keyed by mockId string so each product gets its own recognisable visual.
 * All are structure only: original mockups combined with supporting real photography
 * from Unsplash.
 */

const line = "rounded-full bg-border/25";

export function ProductMock({ mockId }: { mockId: string }) {
  switch (mockId) {
    case "wa-agent":
      return <WAAgentMock />;
    case "chatbots":
      return <ChatbotMock />;
    case "websites":
      return <WebsitesMock />;
    case "ecommerce":
      return <EcommerceMock />;
    case "management":
      return <ManagementMock />;
    default:
      return <ManagementMock />;
  }
}

/** 1. WhatsApp-style chat interface for WA Agent + supporting messaging photo. */
function WAAgentMock() {
  const photoUrl =
    "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="size-full rounded-xl border border-border/10 bg-background/50 p-3 md:p-4">
      <div className="flex h-full gap-3">
        {/* Main: WhatsApp-style chat mockup */}
        <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-lg border border-border/15 bg-surface/70">
          {/* Header bar with contact name & online status */}
          <div className="flex items-center gap-2 border-b border-border/10 bg-surface px-3 py-2">
            <div className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
              WA
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[8.5px] font-semibold text-foreground">
                Client Concierge
              </div>
              <div className="flex items-center gap-1">
                <span className="size-1 rounded-full bg-emerald-500" />
                <span className="text-[7px] text-emerald-600 dark:text-emerald-400 font-medium">online</span>
              </div>
            </div>
            <div className="flex gap-1.5 text-muted">
              <span className="text-[10px]">📞</span>
              <span className="text-[10px]">⋮</span>
            </div>
          </div>

          {/* Messages stream */}
          <div className="flex flex-1 flex-col justify-end gap-2 p-2.5">
            {/* Incoming User Message */}
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex max-w-[85%] flex-col rounded-lg rounded-tl-xs border border-border/10 bg-background px-2.5 py-1.5 shadow-xs"
            >
              <span className="text-[7.5px] text-foreground/85">
                Hi, can I confirm our project sprint status?
              </span>
              <span className="mt-0.5 text-right text-[6px] text-muted">10:42 AM</span>
            </motion.div>

            {/* WA Agent AI Response */}
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="ml-auto flex max-w-[85%] flex-col rounded-lg rounded-tr-xs border border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-1.5 shadow-xs"
            >
              <span className="text-[7.5px] font-medium text-foreground">
                Sprint 3 is on track. 14 tasks finished, QA verification complete.
              </span>
              <div className="mt-1 flex items-center justify-end gap-1">
                <span className="text-[6px] text-muted">10:42 AM</span>
                <span className="text-[8px] text-emerald-600 dark:text-emerald-400">✓✓</span>
              </div>
            </motion.div>

            {/* Quick interactive action chips */}
            <div className="flex gap-1.5 pt-0.5">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[6.5px] font-medium text-primary">
                View Sprint Board
              </span>
              <span className="rounded-full border border-border/15 bg-background px-2 py-0.5 text-[6.5px] text-muted">
                Schedule Sync
              </span>
            </div>
          </div>

          {/* WhatsApp input bar */}
          <div className="flex items-center gap-1.5 border-t border-border/10 bg-surface px-2 py-1.5">
            <span className="text-[10px] text-muted">😊</span>
            <div className="h-5 flex-1 rounded-full border border-border/10 bg-background px-2 text-[7px] text-muted flex items-center">
              Type a reply...
            </div>
            <span className="flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[8px]">
              ➤
            </span>
          </div>
        </div>

        {/* Supporting real photo */}
        <div className="relative w-[32%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="Person using smartphone for messaging"
            fill
            sizes="(max-width: 768px) 33vw, 220px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-2">
            <span className="block text-[7.5px] font-semibold text-foreground">
              Direct WhatsApp
            </span>
            <span className="block text-[6.5px] text-muted">
              Real-time customer comms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 2. Embeddable chat widget for Chatbots + supporting customer support photo. */
function ChatbotMock() {
  const photoUrl =
    "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="size-full rounded-xl border border-border/10 bg-background/50 p-3 md:p-4">
      <div className="flex h-full gap-3">
        {/* Main: Webpage layout with floating embeddable chat widget */}
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-lg border border-border/15 bg-surface/40 p-2.5">
          {/* Background webpage header */}
          <div className="mb-2 flex items-center justify-between border-b border-border/10 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[8px] font-semibold text-foreground">KnowledgeHub</span>
            </div>
            <div className="flex gap-2">
              <span className="h-1 w-6 rounded-full bg-border/40" />
              <span className="h-1 w-6 rounded-full bg-border/40" />
            </div>
          </div>

          {/* Webpage dummy content */}
          <div className="space-y-1.5 opacity-60">
            <div className="h-2 w-3/4 rounded-full bg-border/40" />
            <div className="h-1.5 w-full rounded-full bg-border/25" />
            <div className="h-1.5 w-5/6 rounded-full bg-border/25" />
          </div>

          {/* Embeddable Floating Chat Window Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="absolute bottom-2 right-2 w-[72%] rounded-xl border border-primary/25 bg-surface/95 shadow-xl backdrop-blur-md"
          >
            {/* Widget header */}
            <div className="flex items-center justify-between border-b border-border/10 bg-primary/10 px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7.5px] font-semibold text-foreground">Support Assistant</span>
              </div>
              <span className="text-[8px] text-muted">✕</span>
            </div>

            {/* Widget conversation */}
            <div className="flex flex-col gap-1.5 p-2">
              <div className="rounded-lg rounded-tl-xs border border-border/10 bg-background/80 p-1.5 text-[7px] text-foreground/80 leading-tight">
                Welcome! How can I help resolve your inquiry today?
              </div>
              <div className="ml-auto rounded-lg rounded-tr-xs bg-primary p-1.5 text-[7px] text-white font-medium leading-tight">
                I need to integrate with our custom webhook.
              </div>
              <div className="rounded-lg rounded-tl-xs border border-border/10 bg-background/80 p-1.5 text-[7px] text-foreground/80 leading-tight">
                Here is the docs link and starter payload. 🚀
              </div>
            </div>

            {/* Widget input */}
            <div className="flex items-center gap-1 border-t border-border/10 px-2 py-1">
              <div className="h-4 flex-1 rounded border border-border/10 bg-background px-1.5 text-[6.5px] text-muted flex items-center">
                Reply here...
              </div>
              <span className="flex size-4 items-center justify-center rounded bg-primary text-[7px] text-white">
                ➤
              </span>
            </div>
          </motion.div>
        </div>

        {/* Supporting real photo */}
        <div className="relative w-[32%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="Customer support team workspace with headsets"
            fill
            sizes="(max-width: 768px) 33vw, 220px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-2">
            <span className="block text-[7.5px] font-semibold text-foreground">
              Always-On Support
            </span>
            <span className="block text-[6.5px] text-muted">
              Zero ticket backlog
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 3. Research/data platform mockup for Websites (CoinStudy) + supporting finance photo. */
function WebsitesMock() {
  const photoUrl =
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="size-full rounded-xl border border-border/10 bg-background/50 p-3 md:p-4">
      <div className="flex h-full gap-3">
        {/* Main: Research/data dashboard mockup */}
        <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-lg border border-border/15 bg-surface/70 p-2.5">
          {/* Browser address bar */}
          <div className="flex items-center gap-1.5 border-b border-border/10 pb-2">
            <div className="flex gap-1">
              <span className="size-1.5 rounded-full bg-border/40" />
              <span className="size-1.5 rounded-full bg-border/40" />
              <span className="size-1.5 rounded-full bg-border/40" />
            </div>
            <div className="ml-1 flex h-4 flex-1 items-center rounded-sm bg-background px-2 text-[7.5px] font-mono text-muted/70">
              coinstudy.ai/markets/terminal
            </div>
          </div>

          {/* Research platform header with time filters */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold text-foreground">Market Pulse</span>
              <span className="rounded bg-emerald-500/10 px-1 text-[6.5px] font-semibold text-emerald-500">
                +4.2% Bullish
              </span>
            </div>
            <div className="flex gap-1 text-[6.5px] font-mono text-muted">
              <span className="rounded bg-primary px-1 text-white">24H</span>
              <span className="px-0.5">7D</span>
              <span className="px-0.5">1M</span>
            </div>
          </div>

          {/* 3 Metric cards with mini trendlines */}
          <div className="grid grid-cols-3 gap-1.5 py-1">
            {[
              { label: "Vol Index", val: "$3.4B", change: "+14%" },
              { label: "Liquidity", val: "94.8", change: "+2.1%" },
              { label: "Sentiment", val: "78/100", change: "Greed" },
            ].map((m, i) => (
              <div key={i} className="rounded-md border border-border/10 bg-background/60 p-1.5">
                <span className="block text-[6.5px] text-muted">{m.label}</span>
                <span className="block text-[8px] font-semibold text-foreground tabular-nums">
                  {m.val}
                </span>
                <span className="block text-[6px] font-medium text-emerald-500">
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Mini market table */}
          <div className="flex flex-col gap-1 rounded border border-border/10 bg-background/40 p-1.5">
            {[
              { asset: "BTC/USDT", price: "$64,280", trend: "+3.8%" },
              { asset: "ETH/USDT", price: "$3,450", trend: "+5.1%" },
              { asset: "SOL/USDT", price: "$148.2", trend: "+7.4%" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between text-[7px]">
                <span className="font-semibold text-foreground">{row.asset}</span>
                <span className="font-mono text-muted tabular-nums">{row.price}</span>
                <span className="font-mono font-medium text-emerald-500">{row.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting real photo */}
        <div className="relative w-[32%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="Financial crypto and stock candlestick charts and real-time market data"
            fill
            sizes="(max-width: 768px) 33vw, 220px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-2">
            <span className="block text-[7.5px] font-semibold text-foreground">
              Market Intelligence
            </span>
            <span className="block text-[6.5px] text-muted">
              Deep analytics engine
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 4. Storefront mockup for E-commerce (AQ Gimel) + supporting retail photo. */
function EcommerceMock() {
  const photoUrl =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="size-full rounded-xl border border-border/10 bg-background/50 p-3 md:p-4">
      <div className="flex h-full gap-3">
        {/* Main: E-commerce storefront & product grid mockup */}
        <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-lg border border-border/15 bg-surface/70 p-2.5">
          {/* Store navigation bar */}
          <div className="flex items-center justify-between border-b border-border/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold italic text-primary text-[9px]">AQ Gimel</span>
              <span className="text-[7px] text-muted">Store</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-muted">Catalog</span>
              <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[6.5px] font-semibold text-primary">
                Cart (2)
              </span>
            </div>
          </div>

          {/* Product showcase grid */}
          <div className="grid flex-1 grid-cols-2 gap-2 py-1.5">
            {[
              {
                title: "Chronograph Watch",
                category: "Edition 01",
                price: "$180",
                badge: "Best Seller",
              },
              {
                title: "Studio Headphones",
                category: "Noise Cancelling",
                price: "$240",
                badge: "New",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-lg border border-border/10 bg-background/80 p-2"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-primary/10 px-1 text-[6px] font-semibold text-primary">
                    {p.badge}
                  </span>
                  <span className="text-[7px] text-muted">♡</span>
                </div>
                <div className="my-1.5 flex h-10 items-center justify-center rounded bg-surface/50 border border-border/10">
                  <span className="text-[8px] font-mono text-muted/60">PRODUCT PREVIEW</span>
                </div>
                <div>
                  <span className="block truncate text-[7.5px] font-semibold text-foreground">
                    {p.title}
                  </span>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="text-[7.5px] font-bold text-foreground">{p.price}</span>
                    <span className="rounded bg-primary px-1.5 py-0.5 text-[6px] font-medium text-white">
                      Add +
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom store stats */}
          <div className="flex items-center justify-between border-t border-border/10 pt-1.5 text-[6.5px] text-muted">
            <span>Free Global Shipping</span>
            <span className="text-emerald-500 font-medium">99.8% Checkout Success</span>
          </div>
        </div>

        {/* Supporting real photo */}
        <div className="relative w-[32%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="Curated retail boutique products and storefront"
            fill
            sizes="(max-width: 768px) 33vw, 220px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-2">
            <span className="block text-[7.5px] font-semibold text-foreground">
              Modern Commerce
            </span>
            <span className="block text-[6.5px] text-muted">
              Optimized for conversion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 5. Dashboard/table mockup for Management System + supporting operations photo. */
function ManagementMock() {
  const photoUrl =
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="size-full rounded-xl border border-border/10 bg-background/50 p-3 md:p-4">
      <div className="flex h-full gap-3">
        {/* Main: Table / Operations dashboard mockup */}
        <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-lg border border-border/15 bg-surface/70 p-2.5">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between border-b border-border/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-primary" />
              <span className="text-[9px] font-semibold text-foreground">Enterprise Operations</span>
            </div>
            <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[6.5px] font-medium text-emerald-500">
              System Healthy
            </span>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-1.5 py-1">
            {[
              { label: "Active Orders", val: "342", sub: "98.6% on-time" },
              { label: "Fleet Capacity", val: "84%", sub: "18 vehicles out" },
              { label: "Pending Approvals", val: "12", sub: "Require review" },
            ].map((kpi, i) => (
              <div key={i} className="rounded-md border border-border/10 bg-background/60 p-1.5">
                <span className="block text-[6.5px] text-muted">{kpi.label}</span>
                <span className="block text-[8.5px] font-bold text-foreground tabular-nums">
                  {kpi.val}
                </span>
                <span className="block text-[6px] text-muted">{kpi.sub}</span>
              </div>
            ))}
          </div>

          {/* Operations Table */}
          <div className="flex flex-1 flex-col justify-between rounded border border-border/10 bg-background/40 p-1.5">
            <div className="flex items-center justify-between border-b border-border/10 pb-1 text-[6.5px] font-mono text-muted uppercase">
              <span>Task / Entity</span>
              <span>Owner</span>
              <span>Status</span>
            </div>
            {[
              { task: "Logistics Sync #401", owner: "Auto-Dispatch", status: "Completed", color: "text-emerald-500 bg-emerald-500/10" },
              { task: "Inventory Restock", owner: "Ops Team", status: "In Progress", color: "text-amber-500 bg-amber-500/10" },
              { task: "Audit Pipeline", owner: "Security Agent", status: "Scheduled", color: "text-primary bg-primary/10" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-1 text-[7px] border-b border-border/5 last:border-b-0">
                <span className="font-medium text-foreground">{row.task}</span>
                <span className="text-muted">{row.owner}</span>
                <span className={`rounded px-1 py-0.5 font-medium ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting real photo */}
        <div className="relative w-[32%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="Organized modern corporate office workspace and operations planning"
            fill
            sizes="(max-width: 768px) 33vw, 220px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-2">
            <span className="block text-[7.5px] font-semibold text-foreground">
              Operations Control
            </span>
            <span className="block text-[6.5px] text-muted">
              Centralized efficiency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
