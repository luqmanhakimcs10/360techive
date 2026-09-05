"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Six small interface previews, one per capability.
 * All six panels share the same outer frame (border, radius, padding) as each
 * other and as the hero panels.
 */

const chip = "rounded-md border border-border/10 bg-surface/70";

export function CapabilityPreview({ id }: { id: string }) {
  switch (id) {
    case "web-apps":
      return <WebApps />;
    case "mobile":
      return <Mobile />;
    case "web":
      return <WebDev />;
    case "design":
      return <DesignPreview />;
    case "agents":
      return <Agents />;
    case "automation":
      return <Automation />;
    default:
      return null;
  }
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-full overflow-hidden rounded-xl border border-border/10 bg-background/50 p-3.5 shadow-sm">
      {children}
    </div>
  );
}

function WebApps() {
  return (
    <Frame>
      <div className="flex h-full flex-col">
        {/* Browser Chrome Header */}
        <div className="mb-2.5 flex items-center justify-between border-b border-border/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-500/70" />
            <span className="size-2 rounded-full bg-amber-500/70" />
            <span className="size-2 rounded-full bg-emerald-500/70" />
            <div className="ml-2 flex h-4 items-center rounded-sm bg-surface/80 px-2 text-[8px] font-mono text-muted/70">
              app.360techive.io/analytics
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-[8px] font-medium text-muted">Live</span>
          </div>
        </div>

        {/* Web App Body: Sidebar + Main Content Layout */}
        <div className="flex flex-1 gap-2.5 overflow-hidden">
          {/* Sidebar */}
          <div className="flex w-[20%] flex-col gap-1 border-r border-border/10 pr-2">
            {[
              { label: "Dashboard", active: true },
              { label: "Analytics", active: false },
              { label: "Customers", active: false },
              { label: "Settings", active: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[8px] font-medium ${
                  item.active
                    ? "bg-primary/15 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span className={`size-1 rounded-full ${item.active ? "bg-primary" : "bg-border/30"}`} />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col gap-2">
            {/* 3 mini stat cards */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Users", val: "14.2k", change: "+12%" },
                { label: "Revenue", val: "$48.5k", change: "+24%" },
                { label: "Conversion", val: "4.8%", change: "+0.6%" },
              ].map((stat, i) => (
                <div key={i} className={`${chip} p-1.5`}>
                  <span className="text-[7px] text-muted">{stat.label}</span>
                  <div className="mt-0.5 flex items-baseline justify-between">
                    <span className="text-[9px] font-semibold tracking-tight text-foreground tabular-nums">
                      {stat.val}
                    </span>
                    <span className="text-[6px] font-medium text-emerald-500">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="flex flex-1 items-end gap-1 rounded-lg border border-border/10 bg-surface/30 p-2">
              {[42, 68, 50, 84, 60, 92, 74].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: "6%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-xs ${i === 5 ? "bg-primary" : "bg-border/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Mobile() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=160&q=80",
      title: "Alpine Explorer",
      category: "Travel & Tours",
      rating: "4.9 ★",
      active: false,
    },
    {
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=160&q=80",
      title: "Studio Acoustics",
      category: "Audio Streaming",
      rating: "5.0 ★",
      active: true, // highlighted in primary red
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&q=80",
      title: "Dev Workspace",
      category: "Productivity",
      rating: "4.8 ★",
      active: false,
    },
  ];

  return (
    <Frame>
      <div className="flex h-full items-center justify-center">
        <div className="flex h-full w-[54%] max-w-[210px] flex-col overflow-hidden rounded-[1.2rem] border border-border/15 bg-surface/80 p-2 shadow-sm">
          {/* Status Bar */}
          <div className="mb-1 flex items-center justify-between px-1 text-[7px] font-medium text-muted/70">
            <span>9:41</span>
            <div className="h-1.5 w-8 rounded-full bg-border/40" />
            <div className="flex items-center gap-0.5">
              <span className="size-1 rounded-full bg-foreground/40" />
              <span className="h-1 w-2 rounded-xs bg-foreground/40" />
            </div>
          </div>

          {/* App Header */}
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="text-[9px] font-semibold text-foreground">Featured Apps</span>
            <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[7px] font-medium text-primary">
              Pro
            </span>
          </div>

          {/* 3 Card Rows with Real Photos */}
          <div className="flex flex-1 flex-col justify-between gap-1.5">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
                className={`flex items-center gap-2 rounded-lg border p-1.5 transition-colors ${
                  card.active
                    ? "border-primary/40 bg-primary/10 shadow-xs"
                    : "border-border/10 bg-background/50"
                }`}
              >
                <div className="relative size-7 shrink-0 overflow-hidden rounded-md ring-1 ring-border/10">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="size-full object-cover dark:brightness-90"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col leading-none">
                  <span className="truncate text-[8px] font-semibold text-foreground">
                    {card.title}
                  </span>
                  <span className="mt-0.5 truncate text-[6.5px] text-muted">
                    {card.category}
                  </span>
                </div>
                <span className={`text-[7px] font-semibold tabular-nums ${card.active ? "text-primary" : "text-muted"}`}>
                  {card.rating}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Tab Bar */}
          <div className="mt-2 flex items-center justify-around border-t border-border/10 pt-1.5 text-[8px]">
            <span className="text-primary font-bold">●</span>
            <span className="text-muted/60">◆</span>
            <span className="text-muted/60">▲</span>
            <span className="text-muted/60">■</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function WebDev() {
  const codeLines = [
    { num: 1, indent: 0, tokens: [{ text: "export", c: "text-primary font-semibold" }, { text: " function Page() {", c: "text-foreground/70" }] },
    { num: 2, indent: 2, tokens: [{ text: "const", c: "text-primary/80" }, { text: " data = useMetrics();", c: "text-muted" }] },
    { num: 3, indent: 2, tokens: [{ text: "return (", c: "text-foreground/60" }] },
    { num: 4, indent: 4, tokens: [{ text: "<Dashboard", c: "text-emerald-500 font-medium" }, { text: " live={true} />", c: "text-amber-500" }] },
    { num: 5, indent: 2, tokens: [{ text: ");", c: "text-foreground/60" }] },
    { num: 6, indent: 0, tokens: [{ text: "}", c: "text-foreground/70" }] },
  ];

  return (
    <Frame>
      <div className="flex h-full gap-2 overflow-hidden rounded-lg border border-border/10 bg-background/50">
        {/* Code Editor */}
        <div className="flex w-1/2 flex-col gap-1.5 border-r border-border/10 bg-surface/80 p-2.5 font-mono text-[8px]">
          <div className="mb-1 flex items-center gap-1 border-b border-border/10 pb-1 text-[7px] text-muted">
            <span className="size-1.5 rounded-full bg-primary/70" />
            <span>App.tsx</span>
          </div>
          {codeLines.map((line) => (
            <div key={line.num} className="flex items-center gap-2 leading-none">
              <span className="w-2 shrink-0 text-right text-[7px] text-muted/40">{line.num}</span>
              <div style={{ paddingLeft: `${line.indent * 4}px` }}>
                {line.tokens.map((token, idx) => (
                  <span key={idx} className={token.c}>{token.text}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview Panel */}
        <div className="flex flex-1 flex-col gap-2 p-2.5">
          <div className="flex items-center justify-between border-b border-border/10 pb-1">
            <div className="flex items-center gap-1">
              <span className="size-1 rounded-full bg-emerald-500" />
              <span className="text-[7px] font-mono text-muted">localhost:3000</span>
            </div>
            <span className="rounded bg-primary/10 px-1 text-[6px] font-medium text-primary">Preview</span>
          </div>

          {/* Mini mock webpage layout */}
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex h-10 w-full flex-col justify-center rounded-md border border-primary/20 bg-primary/15 p-2">
              <span className="text-[8px] font-semibold leading-none text-foreground">
                Live metrics, one screen
              </span>
              <span className="mt-1 text-[6.5px] leading-none text-muted">
                Updated 4 seconds ago
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded-md border border-border/10 bg-surface/60 p-1.5">
                <span className="block text-[6px] leading-none text-muted">
                  Load time
                </span>
                <span className="mt-1 block text-[8.5px] font-semibold leading-none tabular-nums text-primary">
                  0.9s
                </span>
              </div>
              <div className="h-8 rounded-md border border-border/10 bg-surface/60 p-1.5">
                <span className="block text-[6px] leading-none text-muted">
                  Lighthouse
                </span>
                <span className="mt-1 block text-[8.5px] font-semibold leading-none tabular-nums text-foreground">
                  98 / 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DesignPreview() {
  const photoUrl =
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80";

  return (
    <Frame>
      <div className="flex h-full gap-3">
        {/* Left: Artboards progression + Swatches */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-medium uppercase tracking-wider text-muted">Design System</span>
            <span className="text-[7px] text-muted/60 font-mono">v2.4</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Wireframe Artboard */}
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="flex h-24 flex-1 flex-col justify-between rounded-lg border border-border/20 bg-surface/40 p-2"
            >
              <span className="text-[6px] font-mono text-muted/60 uppercase">Wireframe</span>
              <div className="leading-tight">
                <span className="block text-[7.5px] font-medium text-foreground/70">
                  Checkout · step 2
                </span>
                <span className="block text-[6px] text-muted">
                  Delivery details
                </span>
              </div>
              <div className="flex h-6 w-full items-center justify-center rounded border border-dashed border-border/30 bg-border/10 text-[6px] text-muted">
                3 fields · button
              </div>
            </motion.div>

            {/* Transition Arrow */}
            <span className="text-[10px] text-primary font-bold">→</span>

            {/* Polished Artboard */}
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex h-24 flex-1 flex-col justify-between rounded-lg border border-primary/30 bg-surface/80 p-2 shadow-xs"
            >
              <span className="text-[6px] font-mono text-primary uppercase font-semibold">Polished</span>
              <div className="leading-tight">
                <span className="block text-[7.5px] font-semibold text-foreground">
                  Where should it go?
                </span>
                <span className="block text-[6px] text-primary">
                  Free delivery over £50
                </span>
              </div>
              <div className="flex h-6 w-full items-center justify-center rounded bg-primary text-[7px] font-medium text-white shadow-xs">
                Continue to payment
              </div>
            </motion.div>
          </div>

          {/* Color Swatches */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <span className="size-2.5 rounded-full bg-primary shadow-xs" />
            <span className="size-2.5 rounded-full bg-primary/40" />
            <span className="size-2.5 rounded-full bg-foreground/80" />
            <span className="size-2.5 rounded-full bg-border/40" />
            <span className="size-2.5 rounded-full border border-border/20 bg-background" />
          </div>
        </div>

        {/* Right: Real Supporting Photo */}
        <div className="relative w-[34%] shrink-0 overflow-hidden rounded-lg border border-border/15">
          <Image
            src={photoUrl}
            alt="UI and UX design sketching and planning workspace"
            fill
            sizes="(max-width: 768px) 33vw, 200px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-1.5 text-[6.5px] font-medium text-foreground">
            Research & Ideation
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Agents() {
  const userAvatar =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80";
  const agentAvatar =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80";

  return (
    <Frame>
      <div className="flex h-full flex-col justify-between">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-semibold text-foreground">Agent</span>
            <span className="text-[8px] text-muted">· Online</span>
          </div>
          <span className="text-[7px] font-mono text-muted/60">latency 42ms</span>
        </div>

        {/* Message Bubbles with Real Photos */}
        <div className="flex flex-col gap-2 py-1">
          {/* User message */}
          <div className="flex items-end gap-2 self-end">
            <div className="max-w-[190px] rounded-xl rounded-br-xs border border-border/10 bg-surface/70 px-2.5 py-1.5 text-[8px] text-foreground/85">
              Can you generate the monthly customer report?
            </div>
            <div className="relative size-5 shrink-0 overflow-hidden rounded-full ring-1 ring-border/20">
              <Image
                src={userAvatar}
                alt="User headshot avatar"
                width={20}
                height={20}
                className="size-full object-cover dark:brightness-90"
              />
            </div>
          </div>

          {/* Agent response */}
          <div className="flex items-end gap-2 self-start">
            <div className="relative size-5 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/30">
              <Image
                src={agentAvatar}
                alt="AI assistant headshot avatar"
                width={20}
                height={20}
                className="size-full object-cover dark:brightness-90"
              />
            </div>
            <div className="max-w-[210px] rounded-xl rounded-bl-xs border border-primary/25 bg-primary/10 px-2.5 py-1.5 text-[8px] text-foreground/90 shadow-xs">
              Report compiled. 1,240 records analyzed with 99.4% accuracy.
            </div>
          </div>
        </div>

        {/* Input Bar & Suggested Reply Chips */}
        <div className="flex flex-col gap-1.5 border-t border-border/10 pt-2">
          <div className="flex items-center gap-2 rounded-lg border border-border/10 bg-surface/60 px-2 py-1">
            <span className="text-[8px] text-muted">Ask anything...</span>
            <span className="ml-auto rounded bg-primary px-1.5 py-0.5 text-[7px] font-medium text-white">
              Send
            </span>
          </div>

          {/* 2 Suggested Reply Chips */}
          <div className="flex items-center gap-1.5">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[7px] font-medium text-primary hover:bg-primary/15 transition-colors cursor-pointer">
              Download CSV ↗
            </span>
            <span className="rounded-full border border-border/15 bg-surface/80 px-2 py-0.5 text-[7px] text-muted hover:text-foreground transition-colors cursor-pointer">
              Schedule follow-up
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Automation() {
  const nodes = [
    {
      step: "01",
      title: "Trigger",
      sub: "Webhook",
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5">
          <path d="M9 1L3 9h5l-1 6 7-8h-5l1-6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      active: false,
    },
    {
      step: "02",
      title: "Condition",
      sub: "Filter & Validate",
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5">
          <path d="M2 3h12M4 7h8M6 11h4M7 15h2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      active: false,
    },
    {
      step: "03",
      title: "Action",
      sub: "Process Payload",
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5">
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1v2M8 13v2M1 8h2M13 8h2" strokeLinecap="round" />
        </svg>
      ),
      active: false,
    },
    {
      step: "04",
      title: "Output",
      sub: "Dispatched",
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5 text-white">
          <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      active: true, // Final node in primary red
    },
  ];

  return (
    <Frame>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between border-b border-border/10 pb-2">
          <span className="text-[8px] font-medium uppercase tracking-wider text-muted">
            Pipeline Architecture
          </span>
          <span className="text-[7px] font-mono text-emerald-500">Active · 100% health</span>
        </div>

        {/* Connected Nodes Diagram */}
        <div className="relative flex items-center justify-between px-1 py-4">
          {/* Connecting line */}
          <div className="absolute left-6 right-6 top-1/2 h-0.5 -translate-y-1/2 bg-border/20" />
          <motion.div
            animate={{ left: ["10%", "88%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary shadow-sm"
          />

          {nodes.map((node, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-1.5">
              <div
                className={`flex size-10 items-center justify-center rounded-xl border transition-all ${
                  node.active
                    ? "border-primary bg-primary text-white shadow-md shadow-primary/20 scale-105"
                    : "border-border/15 bg-surface/90 text-foreground/80 shadow-xs"
                }`}
              >
                {node.icon}
              </div>
              <div className="text-center">
                <span className={`block text-[8px] font-semibold ${node.active ? "text-primary" : "text-foreground/90"}`}>
                  {node.title}
                </span>
                <span className="block text-[6.5px] text-muted">
                  {node.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between rounded-md border border-border/10 bg-surface/40 px-2 py-1 text-[7px] text-muted">
          <span>Executed in 18ms</span>
          <span className="font-mono text-primary">0 errors / 24,000 runs</span>
        </div>
      </div>
    </Frame>
  );
}
