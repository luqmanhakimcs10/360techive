"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Large project preview: a browser plane carrying a real interface mockup,
 * with a supporting photograph on a second, overlapping surface — the same
 * pairing the product panels use (interface + real photo), so a case study
 * reads as a working system rather than a placeholder.
 *
 * Three compositions, cycled by index, so a new project always has a frame.
 * All data shown is invented sample content for the case study.
 */

/** Status pill colours, picked so they read in both themes. */
const status = {
  green:
    "border-emerald-500/25 bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  amber:
    "border-amber-500/30 bg-amber-500/12 text-amber-700 dark:text-amber-300",
  blue: "border-sky-500/30 bg-sky-500/12 text-sky-700 dark:text-sky-300",
  red: "border-rose-500/30 bg-rose-500/12 text-rose-700 dark:text-rose-300",
} as const;

type Composition = {
  url: string;
  body: React.ReactNode;
  photo: { src: string; alt: string; title: string; sub: string };
};

export function ProjectFrame({ variant }: { variant: number }) {
  const v = variant % 3;
  const composition = [opsComposition, supportComposition, approvalComposition][
    v
  ]();

  return (
    <div className="group/frame relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/10 bg-surface/50 transition-colors duration-500 group-hover:border-primary/25">
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
        className="absolute inset-y-4 left-4 right-[23%] flex flex-col overflow-hidden rounded-xl border border-border/10 bg-background/90 shadow-[0_28px_60px_-40px_rgb(0_0_0/0.7)] backdrop-blur-sm sm:inset-y-5 sm:left-5 md:inset-y-7 md:left-8"
      >
        <div className="flex items-center gap-1.5 border-b border-border/10 px-2.5 py-1.5 md:px-3 md:py-2">
          <span className="size-1.5 rounded-full bg-primary/60" />
          <span className="size-1.5 rounded-full bg-border/25" />
          <span className="size-1.5 rounded-full bg-border/25" />
          <span className="ml-2 truncate font-mono text-[6.5px] text-muted/70 sm:text-[7.5px] md:text-[9px]">
            {composition.url}
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-2 pr-[11%] sm:p-2.5 sm:pr-[10%] md:p-4 md:pr-[10%]">
          {composition.body}
        </div>
      </motion.div>

      {/* overlapping supporting photo */}
      <motion.div
        variants={{ rest: { y: 0, x: 0 }, hover: { y: -14, x: -6 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
        className="absolute bottom-6 right-4 w-[26%] overflow-hidden rounded-xl border border-border/10 bg-surface shadow-[0_20px_44px_-28px_rgb(0_0_0/0.75)] md:right-8"
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={composition.photo.src}
            alt={composition.photo.alt}
            fill
            sizes="(max-width: 768px) 30vw, 200px"
            className="object-cover dark:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/65 to-transparent p-1.5 md:p-2">
            <span className="block truncate text-[7px] font-semibold text-foreground md:text-[9px]">
              {composition.photo.title}
            </span>
            <span className="block truncate text-[6px] text-muted md:text-[8px]">
              {composition.photo.sub}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── shared building blocks ─────────────────────────────────────────────── */

function StatRow({
  stats,
}: {
  stats: { label: string; value: string; sub?: string }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5 md:gap-2">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-md border border-border/10 bg-surface/60 p-1.5 md:p-2"
        >
          <span className="block truncate text-[6px] uppercase tracking-wide text-muted sm:text-[7px] md:text-[8.5px]">
            {s.label}
          </span>
          <span className="block text-[9px] font-semibold tabular-nums text-foreground sm:text-[10px] md:text-[13px]">
            {s.value}
          </span>
          {s.sub && (
            <span className="hidden truncate text-[6.5px] text-muted md:block md:text-[8px]">
              {s.sub}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Pill({
  tone,
  children,
}: {
  tone: keyof typeof status;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`shrink-0 rounded-full border px-1.5 py-px text-[6px] font-medium sm:text-[7px] md:text-[8.5px] ${status[tone]}`}
    >
      {children}
    </span>
  );
}

/* ── 01. Operations platform for a service business ─────────────────────── */

function opsComposition(): Composition {
  const jobs = [
    {
      job: "Riverside HVAC — Unit inspection",
      crew: "M. Doyle",
      date: "14 Mar",
      label: "Invoiced",
      tone: "green" as const,
    },
    {
      job: "Bellview Apartments — Boiler service",
      crew: "K. Owusu",
      date: "15 Mar",
      label: "In progress",
      tone: "blue" as const,
    },
    {
      job: "Northgate Retail — Quarterly maintenance",
      crew: "S. Patel",
      date: "18 Mar",
      label: "Scheduled",
      tone: "amber" as const,
    },
    {
      job: "Harbour Café — Extractor repair",
      crew: "M. Doyle",
      date: "19 Mar",
      label: "Awaiting parts",
      tone: "red" as const,
    },
  ];

  return {
    url: "fieldbase.app/jobs",
    photo: {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      alt: "Service technician in a hard hat working on equipment on site",
      title: "Crew on site",
      sub: "Job updated from the van",
    },
    body: (
      <div className="flex min-h-0 flex-1 flex-col gap-2 md:gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[8px] font-semibold text-foreground sm:text-[9px] md:text-[12px]">
            Jobs board — this week
          </span>
          <Pill tone="green">All synced</Pill>
        </div>

        <StatRow
          stats={[
            { label: "Jobs this week", value: "34", sub: "6 more than last" },
            { label: "Time to invoice", value: "1.2 days", sub: "was 6 days" },
            { label: "Crew utilisation", value: "87%", sub: "5 crews out" },
          ]}
        />

        <div className="flex min-h-0 flex-1 flex-col rounded-md border border-border/10 bg-surface/40">
          <div className="flex items-center justify-between border-b border-border/10 px-2 py-1 text-[6px] font-medium uppercase tracking-wide text-muted/80 sm:text-[6.5px] md:text-[8px]">
            <span>Job</span>
            <span className="flex gap-3 md:gap-6">
              <span className="hidden sm:inline">Crew</span>
              <span>Due</span>
              <span>Status</span>
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-around px-2 py-0.5">
            {jobs.map((row, i) => (
              <div
                key={row.job}
                className={`flex items-center gap-2 py-0.5 md:py-1 ${
                  i === 3 ? "hidden sm:flex" : "flex"
                }`}
              >
                <span className="truncate text-[7px] font-medium text-foreground sm:text-[8px] md:text-[10px]">
                  {row.job}
                </span>
                <span className="ml-auto hidden shrink-0 text-[7px] text-muted sm:inline md:text-[9px]">
                  {row.crew}
                </span>
                <span className="shrink-0 text-[6.5px] tabular-nums text-muted sm:ml-0 md:text-[9px]">
                  {row.date}
                </span>
                <Pill tone={row.tone}>{row.label}</Pill>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };
}

/* ── 02. Customer support assistant ─────────────────────────────────────── */

function supportComposition(): Composition {
  return {
    url: "northline.supply/inbox",
    photo: {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      alt: "Support team at a desk working through customer conversations on screen",
      title: "Support desk",
      sub: "Escalations arrive with history",
    },
    body: (
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 md:gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[8px] font-semibold text-foreground sm:text-[9px] md:text-[12px]">
            Support assistant
          </span>
          <span className="hidden text-[8px] text-muted md:inline">
            68% resolved without a human today
          </span>
          <Pill tone="green">Online</Pill>
        </div>

        {/* order context card */}
        <div className="flex items-center gap-2 rounded-md border border-border/10 bg-surface/60 px-2 py-1 md:px-2.5 md:py-1.5">
          <span className="flex size-4 shrink-0 items-center justify-center rounded bg-primary/15 text-[6px] font-semibold text-primary md:size-6 md:text-[8px]">
            📦
          </span>
          <div className="min-w-0">
            <span className="block truncate text-[7px] font-semibold text-foreground sm:text-[8px] md:text-[10px]">
              Order #4521 · Shipped
            </span>
            <span className="block truncate text-[6px] text-muted sm:text-[7px] md:text-[9px]">
              2 items · DHL Express · arrives 16 Mar
            </span>
          </div>
          <Pill tone="blue">In transit</Pill>
        </div>

        {/* conversation */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 md:gap-2">
          <div className="ml-auto hidden max-w-[72%] rounded-lg rounded-br-xs border border-border/10 bg-surface/70 px-2 py-1 text-[7px] leading-snug text-foreground/85 sm:block sm:text-[8px] md:px-2.5 md:py-1.5 md:text-[10px]">
            Do the wool socks run small?
          </div>
          <div className="hidden max-w-[82%] rounded-lg rounded-bl-xs border border-primary/25 bg-primary/10 px-2 py-1 text-[7px] leading-snug text-foreground sm:block sm:text-[8px] md:px-2.5 md:py-1.5 md:text-[10px]">
            They run true to size — the merino pair is on the size chart as EU
            42-44 for a UK 8.
          </div>
          <div className="ml-auto max-w-[72%] rounded-lg rounded-br-xs border border-border/10 bg-surface/70 px-2 py-1 text-[7px] leading-snug text-foreground/85 sm:text-[8px] md:px-2.5 md:py-1.5 md:text-[10px]">
            Where&apos;s my order #4521?
          </div>
          <div className="max-w-[82%] rounded-lg rounded-bl-xs border border-primary/25 bg-primary/10 px-2 py-1 text-[7px] leading-snug text-foreground sm:text-[8px] md:px-2.5 md:py-1.5 md:text-[10px]">
            Order #4521 shipped yesterday — here&apos;s your tracking link. It
            is out for delivery on Saturday.
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-1.5 py-px text-[6px] font-medium text-primary sm:text-[7px] md:px-2 md:text-[8.5px]">
              Track parcel ↗
            </span>
            <span className="rounded-full border border-border/15 bg-surface/70 px-1.5 py-px text-[6px] text-muted sm:text-[7px] md:px-2 md:text-[8.5px]">
              Change delivery address
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-border/10 bg-surface/40 px-2 py-1 text-[6px] text-muted sm:text-[7px] md:text-[8.5px]">
            <span className="size-1 shrink-0 rounded-full bg-amber-500" />
            <span className="truncate">
              Refund request handed to Amira · full thread attached
            </span>
          </div>
        </div>
      </div>
    ),
  };
}

/* ── 03. Internal approval workflow ─────────────────────────────────────── */

const names: Record<string, string> = {
  AK: "A. Karim",
  MR: "M. Reyes",
  JD: "J. Dahl",
  LT: "L. Tan",
};

function approvalComposition(): Composition {
  const requests = [
    {
      name: "Q3 vendor contract — Legal review",
      approver: "AK",
      label: "Approved",
      tone: "green" as const,
    },
    {
      name: "New hire laptops — £2,400",
      approver: "MR",
      label: "Pending",
      tone: "amber" as const,
    },
    {
      name: "Client travel — Rotterdam site visit",
      approver: "JD",
      label: "Rejected",
      tone: "red" as const,
    },
    {
      name: "Marketing spend — Q3 campaign uplift",
      approver: "LT",
      label: "Pending",
      tone: "amber" as const,
    },
  ];

  return {
    url: "approvals.internal/requests",
    photo: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      alt: "Person reviewing printed documents and paperwork at a desk",
      title: "Sign-off",
      sub: "Every decision on the record",
    },
    body: (
      <div className="flex min-h-0 flex-1 flex-col gap-2 md:gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[8px] font-semibold text-foreground sm:text-[9px] md:text-[12px]">
            Requests · Q3
          </span>
          <Pill tone="amber">4 waiting on you</Pill>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-around gap-1.5">
          {requests.map((r, i) => (
            <div
              key={r.name}
              className={`items-center gap-2 rounded-md border border-border/10 bg-surface/50 px-1.5 py-1 md:px-2.5 md:py-1.5 ${
                i === 3 ? "hidden sm:flex" : "flex"
              }`}
            >
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-[5.5px] font-semibold text-primary sm:text-[6px] md:size-6 md:text-[8.5px]">
                {r.approver}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[7px] font-medium text-foreground sm:text-[8px] md:text-[10px]">
                  {r.name}
                </span>
                <span className="hidden truncate text-[8px] text-muted md:block">
                  Current approver · {names[r.approver]}
                </span>
              </div>
              <Pill tone={r.tone}>{r.label}</Pill>
            </div>
          ))}
        </div>

        {/* audit trail strip */}
        <div className="rounded-md border border-border/10 bg-surface/40 px-2 py-1 md:px-2.5 md:py-1.5">
          <div className="flex items-center gap-1.5 text-[6px] sm:text-[7px] md:text-[9px]">
            <span className="text-muted">Submitted</span>
            <span className="text-border/60">→</span>
            <span className="text-muted">Reviewed</span>
            <span className="text-border/60">→</span>
            <span className="font-medium text-emerald-700 dark:text-emerald-300">
              Approved
            </span>
          </div>
          <span className="mt-0.5 block truncate text-[6px] text-muted sm:text-[6.5px] md:text-[8px]">
            Approved 14:02 today by A. Karim · logged automatically
          </span>
        </div>
      </div>
    ),
  };
}
