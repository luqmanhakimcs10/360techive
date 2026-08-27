"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { agents } from "@/config/agents";

const RADIUS = 110;
const CENTER = 140;
const NODE_SIZE = 28;

const agentIcons: Record<string, string> = {
  support: "S",
  sales: "T",
  finance: "F",
  research: "R",
  document: "D",
  "executive-assistant": "E",
};

function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

const THEME_COLORS = {
  dark: {
    primary: "#F87171",
    foreground: "#FAFAFA",
  },
  light: {
    primary: "#DC2626",
    foreground: "#0A0A0A",
  },
} as const;

function Node({
  index,
  total,
  label,
  primaryColor,
}: {
  index: number;
  total: number;
  label: string;
  primaryColor: string;
}) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const angle = (index / total) * Math.PI * 2;
  const orbitRadius = mobile ? 70 : RADIUS;
  const orbitX = CENTER + orbitRadius * Math.cos(angle);
  const orbitY = CENTER + orbitRadius * Math.sin(angle);

  return (
    <motion.g
      initial={false}
      animate={
        reduced
          ? { x: orbitX - NODE_SIZE / 2, y: orbitY - NODE_SIZE / 2 }
          : {
              x: [
                CENTER + orbitRadius * Math.cos(angle) - NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.cos(angle + Math.PI / 3) -
                  NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.cos(angle + (2 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER + orbitRadius * Math.cos(angle + Math.PI) - NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.cos(angle + (4 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.cos(angle + (5 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER + orbitRadius * Math.cos(angle) - NODE_SIZE / 2,
              ],
              y: [
                CENTER + orbitRadius * Math.sin(angle) - NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.sin(angle + Math.PI / 3) -
                  NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.sin(angle + (2 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER + orbitRadius * Math.sin(angle + Math.PI) - NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.sin(angle + (4 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER +
                  orbitRadius * Math.sin(angle + (5 * Math.PI) / 3) -
                  NODE_SIZE / 2,
                CENTER + orbitRadius * Math.sin(angle) - NODE_SIZE / 2,
              ],
            }
      }
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }
      }
    >
      <motion.circle
        r={NODE_SIZE / 2}
        fill={primaryColor}
        fillOpacity={0.15}
        stroke={primaryColor}
        strokeWidth={1.5}
        whileHover={{ scale: 1.2 }}
      />
      <text
        x={0}
        y={0}
        textAnchor="middle"
        dominantBaseline="central"
        fill={primaryColor}
        fontSize={11}
        fontWeight={600}
      >
        {agentIcons[label] ?? label[0].toUpperCase()}
      </text>
    </motion.g>
  );
}

function ConnectionLine({
  index,
  total,
  primaryColor,
}: {
  index: number;
  total: number;
  primaryColor: string;
}) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const orbitRadius = mobile ? 70 : RADIUS;
  const angle = (index / total) * Math.PI * 2;
  const x2 = CENTER + orbitRadius * Math.cos(angle);
  const y2 = CENTER + orbitRadius * Math.sin(angle);

  return (
    <motion.line
      x1={CENTER}
      y1={CENTER}
      x2={x2}
      y2={y2}
      stroke={primaryColor}
      strokeOpacity={0.2}
      strokeWidth={1}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        reduced
          ? { pathLength: 1, opacity: 0.2 }
          : { pathLength: 1, opacity: [0.1, 0.3, 0.1] }
      }
      transition={
        reduced
          ? { duration: 1 }
          : { duration: 1.5, delay: index * 0.2, repeat: Infinity, repeatDelay: 3 }
      }
    />
  );
}

export function AgentNetworkVisual() {
  const { resolvedTheme } = useTheme();
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const colors = THEME_COLORS[theme];

  const size = mobile ? 200 : 280;

  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 280 280"
        className="overflow-visible"
        aria-label="Network visualization showing AI Employees connected to a central hub"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity={0.3} />
            <stop offset="100%" stopColor={colors.primary} stopOpacity={0} />
          </radialGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={80} fill="url(#hubGlow)" />

        {agents.map((_, i) => (
          <ConnectionLine
            key={i}
            index={i}
            total={agents.length}
            primaryColor={colors.primary}
          />
        ))}

        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={22}
          fill={colors.primary}
          fillOpacity={0.2}
          stroke={colors.primary}
          strokeWidth={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={reduced ? 14 : 14}
          fill={colors.primary}
          animate={reduced ? {} : { r: [14, 16, 14] }}
          transition={
            reduced
              ? {}
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <text
            x={CENTER}
            y={CENTER - 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill={colors.foreground}
            fontSize={10}
            fontWeight={700}
          >
            AI
          </text>
        </motion.g>

        {agents.map((a, i) => (
          <Node
            key={a.slug}
            index={i}
            total={agents.length}
            label={a.slug}
            primaryColor={colors.primary}
          />
        ))}
      </svg>
    </div>
  );
}
