"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface RoadmapPhase {
  phase: string;
  status: "shipped" | "in-progress" | "planned";
  title: string;
  description: string;
}

const phases: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    status: "shipped",
    title: "Core assistant",
    description:
      "Chat, memory, and document understanding — the foundation everything else builds on.",
  },
  {
    phase: "Phase 2",
    status: "in-progress",
    title: "Voice & agents",
    description:
      "Natural voice conversations and the first scheduled agents for recurring work.",
  },
  {
    phase: "Phase 3",
    status: "planned",
    title: "Automations marketplace",
    description:
      "Pre-built automations for common tools, plus a builder for your own triggers and actions.",
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: "Team workspace",
    description:
      "Shared memory and agents across a team, with permissions and an audit trail.",
  },
];

const statusLabel: Record<RoadmapPhase["status"], string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  planned: "Planned",
};

const statusVariant: Record<RoadmapPhase["status"], "success" | "default" | "secondary"> = {
  shipped: "success",
  "in-progress": "default",
  planned: "secondary",
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            roadmap
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where JARVIS is headed
          </h2>
          <p className="mt-4 text-muted">
            Built in public, shipped in order. Here&apos;s the sequence.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent sm:left-[19px]" />

          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/10 bg-[#11131A] sm:h-10 sm:w-10">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      p.status === "shipped"
                        ? "bg-success"
                        : p.status === "in-progress"
                          ? "bg-accent shadow-[0_0_8px_2px_rgba(61,217,235,0.6)]"
                          : "bg-muted-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1 pb-2">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{p.phase}</span>
                    <Badge variant={statusVariant[p.status]}>{statusLabel[p.status]}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
