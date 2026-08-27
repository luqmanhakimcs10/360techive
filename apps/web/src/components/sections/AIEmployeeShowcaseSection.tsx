"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgentCard } from "@/components/sections/AgentCard";
import { agents } from "@/config/agents";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AIEmployeeShowcaseSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionHeading
            title="Six AI Employees,"
            accent="one for every department."
          />
          <p className="mt-4 text-muted">
            Each agent is purpose-built for a single business function. Pick the
            ones you need, or deploy all six for end-to-end department
            automation.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {agents.map((agent) => (
            <motion.div key={agent.slug} variants={cardVariants}>
              <AgentCard agent={agent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
