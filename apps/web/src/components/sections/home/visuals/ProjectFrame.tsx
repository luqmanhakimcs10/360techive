"use client";

import { motion } from "framer-motion";

/**
 * Large project preview: a browser plane with a second surface overlapping it,
 * so a case study reads as a system rather than a screenshot. Three
 * compositions, cycled by index, so a new project always has a frame.
 *
 * Structure only. When real screenshots exist, swap the inner blocks for an
 * <Image> and keep the frame.
 */
export function ProjectFrame({ variant }: { variant: number }) {
  const v = variant % 3;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/10 bg-surface/50">
      {/* faint grid ground */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(var(--color-border)/0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border)/0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* main window */}
      <motion.div
        variants={{ rest: { y: 0 }, hover: { y: -8 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-6 top-8 rounded-xl border border-border/10 bg-background/85 shadow-[0_28px_60px_-40px_rgb(0_0_0/0.7)] backdrop-blur-sm md:inset-x-10 md:top-10"
      >
        <div className="flex items-center gap-1.5 border-b border-border/10 px-3 py-2.5">
          <span className="size-1.5 rounded-full bg-primary/60" />
          <span className="size-1.5 rounded-full bg-border/25" />
          <span className="size-1.5 rounded-full bg-border/25" />
          <span className="ml-2 h-1 w-20 rounded-full bg-border/20" />
        </div>

        <div className="p-4 md:p-5">
          {v === 0 && <OpsBody />}
          {v === 1 && <ConversationBody />}
          {v === 2 && <ApprovalBody />}
        </div>
      </motion.div>

      {/* overlapping secondary surface */}
      <motion.div
        variants={{ rest: { y: 0, x: 0 }, hover: { y: -14, x: -6 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        className="absolute bottom-5 right-6 w-[26%] rounded-xl border border-border/10 bg-surface shadow-[0_20px_44px_-28px_rgb(0_0_0/0.75)] md:right-10"
      >
        <div className="p-2.5">
          <div className="mb-2 h-1 w-8 rounded-full bg-primary/50" />
          <div className="mb-1.5 h-1 w-full rounded-full bg-border/20" />
          <div className="mb-1.5 h-1 w-4/5 rounded-full bg-border/20" />
          <div className="h-6 rounded-md bg-primary/15" />
        </div>
      </motion.div>
    </div>
  );
}

function OpsBody() {
  return (
    <div className="flex gap-3">
      <div className="flex w-1/5 flex-col gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full ${
              i === 2 ? "bg-primary/45" : "bg-border/20"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-8 rounded-md border border-border/10 bg-surface/60"
            />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="flex h-5 items-center gap-2 rounded-md border border-border/10 px-2"
            >
              <span className="size-2 rounded-full bg-border/25" />
              <span className="h-1 flex-1 rounded-full bg-border/20" />
              <span
                className={`h-1 w-8 rounded-full ${
                  i === 1 ? "bg-primary/40" : "bg-border/20"
                }`}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConversationBody() {
  return (
    <div className="flex flex-col gap-2">
      <div className="ml-auto w-1/2 rounded-lg rounded-br-sm border border-border/10 bg-surface/60 p-2">
        <span className="mb-1 block h-1 w-full rounded-full bg-border/20" />
        <span className="block h-1 w-2/3 rounded-full bg-border/20" />
      </div>
      <div className="w-2/3 rounded-lg rounded-bl-sm border border-primary/25 bg-primary/20 p-2">
        <span className="mb-1 block h-1 w-full rounded-full bg-primary/30" />
        <span className="mb-1 block h-1 w-5/6 rounded-full bg-primary/30" />
        <span className="block h-1 w-1/2 rounded-full bg-primary/30" />
      </div>
      <div className="ml-auto w-2/5 rounded-lg rounded-br-sm border border-border/10 bg-surface/60 p-2">
        <span className="block h-1 w-3/4 rounded-full bg-border/20" />
      </div>
      <div className="mt-1 flex items-center gap-2 rounded-lg border border-border/10 px-2 py-1.5">
        <span className="h-1 flex-1 rounded-full bg-border/20" />
        <span className="size-4 rounded-md bg-primary/30" />
      </div>
    </div>
  );
}

function ApprovalBody() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="h-2 w-24 rounded-full bg-border/25" />
        <span className="h-4 w-16 rounded-full border border-primary/30 bg-primary/15" />
      </div>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border/10 p-2"
        >
          <span
            className={`size-4 shrink-0 rounded-full border ${
              i === 0
                ? "border-primary/50 bg-primary/20"
                : "border-border/15"
            }`}
          />
          <span className="flex flex-1 flex-col gap-1">
            <span className="h-1 w-1/3 rounded-full bg-border/25" />
            <span className="h-1 w-2/3 rounded-full bg-border/20" />
          </span>
          <span className="h-1 w-10 rounded-full bg-border/20" />
        </span>
      ))}
    </div>
  );
}
