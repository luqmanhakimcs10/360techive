"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";

interface NodeData {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  highlighted?: boolean;
}

interface NodeNetworkDiagramProps {
  centerLabel?: string;
  centerIcon?: LucideIcon;
  nodes: NodeData[];
  variant: "scattered" | "orbit";
  animated?: boolean;
  staggeredReveal?: boolean;
  activeNodeCycle?: { intervalMs: number };
  className?: string;
}

const scatterPositions = [
  { x: 18, y: 12 },
  { x: 78, y: 8 },
  { x: 12, y: 58 },
  { x: 52, y: 42 },
  { x: 82, y: 65 },
  { x: 30, y: 82 },
  { x: 65, y: 28 },
  { x: 40, y: 65 },
];

function getOrbitPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

function getNodePosition(index: number, total: number, variant: "scattered" | "orbit") {
  if (variant === "scattered") {
    return scatterPositions[index % scatterPositions.length];
  }
  return getOrbitPosition(index, total, 32);
}

function NodeDot({
  pos,
  index,
  variant,
  staggeredReveal,
  reduced,
}: {
  pos: { x: number; y: number };
  index: number;
  variant: "scattered" | "orbit";
  staggeredReveal?: boolean;
  reduced: boolean;
}) {
  const drift = variant === "scattered" && !reduced;

  return (
    <motion.circle
      cx={pos.x}
      cy={pos.y}
      r={2.5}
      fill="rgb(var(--color-primary))"
      fillOpacity={0.3}
      initial={
        staggeredReveal
          ? { opacity: 0, scale: 0 }
          : { opacity: 0.3 }
      }
      whileInView={
        staggeredReveal
          ? { opacity: 0.3, scale: 1 }
          : {}
      }
      viewport={staggeredReveal ? { once: true } : undefined}
      animate={
        drift
          ? { cy: [pos.y - 3, pos.y + 3, pos.y - 3] }
          : {}
      }
      transition={
        staggeredReveal
          ? { duration: 0.4, delay: index * 0.15, ease: "easeOut" }
          : drift
            ? {
                duration: 3 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
      }
    />
  );
}

function PulseDot({
  from,
  to,
  index,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  index: number;
}) {
  return (
    <motion.circle
      r={1.8}
      fill="rgb(var(--color-primary))"
      initial={false}
      animate={{
        cx: [from.x, to.x, from.x],
        cy: [from.y, to.y, from.y],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: index * 0.4,
        ease: "linear",
      }}
    />
  );
}

export function NodeNetworkDiagram({
  centerLabel,
  centerIcon: CenterIcon,
  nodes,
  variant,
  animated,
  staggeredReveal,
  activeNodeCycle,
  className = "",
}: NodeNetworkDiagramProps) {
  const reduced = !!useReducedMotion();
  const total = nodes.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(
    activeNodeCycle ? 0 : null
  );

  const centerRadius = centerLabel ? 10 : 8;

  useEffect(() => {
    if (!activeNodeCycle || reduced) return;
    if (!inView) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % total));
    }, activeNodeCycle.intervalMs);

    return () => clearInterval(id);
  }, [activeNodeCycle, total, inView, reduced]);

  const mergedNodes = nodes.map((nd, i) => ({
    ...nd,
    _active: activeNodeCycle !== undefined && i === activeIndex,
  }));

  const dotTarget =
    activeNodeCycle !== undefined && activeIndex !== null
      ? getNodePosition(activeIndex, total, variant)
      : null;

  return (
    <div ref={containerRef} className={`relative aspect-square w-full max-w-sm ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        aria-label={centerLabel ? `Network diagram centered on ${centerLabel}` : "Network diagram"}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--color-primary))" stopOpacity={0.2} />
            <stop offset="100%" stopColor="rgb(var(--color-primary))" stopOpacity={0} />
          </radialGradient>
        </defs>

        <circle cx={50} cy={50} r={38} fill="url(#centerGlow)" />

        {animated && !reduced && (
          <>
            {nodes.map((_, i) => {
              const to = getNodePosition(i, total, variant);
              if (to.x === 50 && to.y === 50) return null;
              return <PulseDot key={i} from={{ x: 50, y: 50 }} to={to} index={i} />;
            })}
          </>
        )}

        {nodes.map((nd, i) => {
          const pos = getNodePosition(i, total, variant);
          const isActive = activeNodeCycle !== undefined && i === activeIndex;
          return (
            <line
              key={nd.id}
              x1={50}
              y1={50}
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "rgb(var(--color-primary))" : "rgb(var(--color-border))"}
              strokeWidth={isActive ? 1.2 : 0.8}
              strokeOpacity={isActive ? 0.8 : 0.6}
            />
          );
        })}

        {nodes.map((nd, i) => {
          const pos = getNodePosition(i, total, variant);
          return (
            <NodeDot
              key={nd.id}
              pos={pos}
              index={i}
              variant={variant}
              staggeredReveal={staggeredReveal}
              reduced={reduced}
            />
          );
        })}

        {activeNodeCycle && dotTarget && !reduced && (
          <motion.circle
            r={3.5}
            fill="rgb(var(--color-primary))"
            animate={{ cx: dotTarget.x, cy: dotTarget.y }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}

        {!staggeredReveal && (
          <>
            <motion.circle
              cx={50}
              cy={50}
              r={centerRadius + 8}
              fill="rgb(var(--color-primary) / 0.08)"
              stroke="rgb(var(--color-border))"
              strokeWidth={1}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {reduced ? (
              <circle
                cx={50}
                cy={50}
                r={centerRadius}
                fill="rgb(var(--color-primary))"
              />
            ) : (
              <motion.circle
                cx={50}
                cy={50}
                r={centerRadius}
                fill="rgb(var(--color-primary))"
                animate={{ r: [centerRadius, centerRadius + 1.5, centerRadius] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </>
        )}
      </svg>

      {mergedNodes.map((nd, i) => {
        const pos = getNodePosition(i, total, variant);
        const NodeIcon = nd.icon;
        const isActive = activeNodeCycle !== undefined && i === activeIndex;

        const content = (
          <div
            className={`absolute flex flex-col items-center gap-1 transition-colors duration-500 ${
              isActive || nd.highlighted ? "text-primary" : "text-foreground"
            }`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className={`flex size-10 items-center justify-center rounded-xl border bg-surface/80 backdrop-blur-sm transition-colors duration-500 ${
                isActive || nd.highlighted
                  ? "border-primary/30 text-primary"
                  : "border-border text-foreground"
              }`}
            >
              <NodeIcon className="size-4" />
            </div>
            <span
              className={`select-none text-center text-[10px] font-medium leading-tight transition-colors duration-500 ${
                isActive || nd.highlighted ? "text-primary" : "text-muted"
              }`}
            >
              {nd.label}
            </span>
          </div>
        );

        if (nd.href) {
          return (
            <a
              key={nd.id}
              href={nd.href}
              className="absolute block"
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={nd.id}
            className="absolute"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={
                staggeredReveal
                  ? { opacity: 0, scale: 0.6 }
                  : {}
              }
              whileInView={
                staggeredReveal
                  ? { opacity: 1, scale: 1 }
                  : {}
              }
              viewport={staggeredReveal ? { once: true } : undefined}
              transition={
                staggeredReveal
                  ? { duration: 0.35, delay: i * 0.15, ease: "easeOut" }
                  : {}
              }
            >
              {content}
            </motion.div>
          </div>
        );
      })}

      {centerLabel && !staggeredReveal && (
        <div
          className="absolute flex flex-col items-center gap-0.5"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          {CenterIcon && (
            <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white">
              <CenterIcon className="size-4" />
            </div>
          )}
          <span className="text-xs font-semibold text-foreground">
            {centerLabel}
          </span>
        </div>
      )}

      {centerLabel && staggeredReveal && (
        <motion.div
          className="absolute flex flex-col items-center gap-0.5"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {CenterIcon && (
            <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white">
              <CenterIcon className="size-4" />
            </div>
          )}
          <span className="text-xs font-semibold text-foreground">
            {centerLabel}
          </span>
        </motion.div>
      )}
    </div>
  );
}
