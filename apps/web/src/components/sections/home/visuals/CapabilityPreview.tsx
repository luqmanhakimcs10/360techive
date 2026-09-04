"use client";

import { motion } from "framer-motion";

/**
 * Six small interface previews, one per capability. They are abstractions
 * rather than screenshots: enough structure to read as a dashboard, a phone,
 * an artboard or a flow, with no invented data on them.
 *
 * Every preview animates only transform and opacity, and each is keyed by
 * capability id so switching between them crossfades.
 */

const bar = "rounded-full bg-border/20";
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
    <div className="size-full rounded-xl border border-border/10 bg-background/40 p-4">
      {children}
    </div>
  );
}

function WebApps() {
  return (
    <Frame>
      <div className="flex h-full gap-3">
        <div className="flex w-[22%] flex-col gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 ${i === 1 ? "bg-primary/50" : "bg-border/20"} rounded-full`}
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`${chip} h-10`} />
            ))}
          </div>
          <div className="flex flex-1 items-end gap-2 rounded-lg border border-border/10 p-3">
            {[42, 68, 50, 84, 60, 92, 74].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: "6%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-sm ${i === 5 ? "bg-primary/55" : "bg-border/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Mobile() {
  return (
    <Frame>
      <div className="flex h-full items-center justify-center gap-4">
        <div className="h-full w-[42%] rounded-2xl border border-border/10 bg-surface/70 p-2.5">
          <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-border/20" />
          <div className="mb-3 h-14 rounded-lg bg-primary/20" />
          <div className="flex flex-col gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-2"
              >
                <span className="size-4 shrink-0 rounded-md bg-border/20" />
                <span className={`h-1.5 flex-1 ${bar}`} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex h-[80%] w-[30%] flex-col gap-2 rounded-2xl border border-border/10 bg-surface/40 p-2.5 opacity-60">
          <div className="h-10 rounded-lg bg-border/20" />
          <div className={`h-1.5 w-3/4 ${bar}`} />
          <div className={`h-1.5 w-1/2 ${bar}`} />
        </div>
      </div>
    </Frame>
  );
}

function WebDev() {
  return (
    <Frame>
      <div className="flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-2 border-b border-border/10 pb-2.5">
          <span className="size-1.5 rounded-full bg-primary/60" />
          <span className={`h-1.5 w-16 ${bar}`} />
          <span className="ml-auto flex gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`h-1.5 w-6 ${bar}`} />
            ))}
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2"
        >
          <div className="h-3 w-4/5 rounded-full bg-border/25" />
          <div className="h-3 w-3/5 rounded-full bg-primary/30" />
        </motion.div>
        <div className="mt-1 grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
              className={`${chip}`}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function DesignPreview() {
  return (
    <Frame>
      <div className="relative flex h-full gap-3">
        <div
          className="absolute inset-0 rounded-lg opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(var(--color-border)/0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border)/0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 rounded-lg border border-primary/40 bg-surface/70 p-3"
        >
          <div className="mb-2 h-2.5 w-1/2 rounded-full bg-border/25" />
          <div className={`mb-1.5 h-1.5 w-full ${bar}`} />
          <div className={`h-1.5 w-4/5 ${bar}`} />
          <div className="mt-3 h-6 w-20 rounded-md bg-primary/30" />
          {/* selection handles */}
          {[
            "-left-1 -top-1",
            "-right-1 -top-1",
            "-bottom-1 -left-1",
            "-bottom-1 -right-1",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} size-2 rounded-[2px] border border-primary bg-background`}
            />
          ))}
        </motion.div>
        <div className="relative flex w-[26%] flex-col gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`${chip} h-4`} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Agents() {
  return (
    <Frame>
      <div className="flex h-full flex-col justify-end gap-2.5">
        <div className="ml-auto w-3/5 rounded-xl rounded-br-sm border border-border/10 bg-surface/70 p-2.5">
          <div className={`mb-1.5 h-1.5 w-full ${bar}`} />
          <div className={`h-1.5 w-2/3 ${bar}`} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="w-4/5 rounded-xl rounded-bl-sm border border-primary/25 bg-primary/15 p-2.5"
        >
          <div className="mb-1.5 h-1.5 w-full rounded-full bg-primary/30" />
          <div className="mb-1.5 h-1.5 w-5/6 rounded-full bg-primary/30" />
          <div className="h-1.5 w-1/2 rounded-full bg-primary/30" />
        </motion.div>
        <div className="flex items-center gap-1.5 pl-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
              className="size-1.5 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Automation() {
  const nodes = ["A", "B", "C"];
  return (
    <Frame>
      <div className="flex h-full flex-col justify-center gap-5">
        {nodes.map((n, row) => (
          <div key={n} className="relative flex items-center justify-between">
            <span className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-border/20" />
            <motion.span
              animate={{ left: ["10%", "86%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: row * 0.5,
                times: [0, 0.15, 0.85, 1],
              }}
              className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary"
            />
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`relative size-5 rounded-md border ${
                  i === 2
                    ? "border-primary/40 bg-primary/15"
                    : "border-border/15 bg-surface/70"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}
