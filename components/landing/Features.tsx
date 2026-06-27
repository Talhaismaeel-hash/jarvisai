"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Brain,
  Mic,
  FileText,
  Bot,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Fast, streaming conversations with markdown, code blocks, and full context across every thread.",
  },
  {
    icon: Brain,
    title: "Memory",
    description:
      "JARVIS remembers preferences, people, and projects — so you never re-explain yourself.",
  },
  {
    icon: Mic,
    title: "Voice",
    description:
      "Talk instead of type. Natural voice in, natural voice out, with instant transcription.",
  },
  {
    icon: FileText,
    title: "Documents",
    description:
      "Upload contracts, notes, or spreadsheets and ask questions directly against their content.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Delegate recurring work to agents that run on a schedule and report back what they did.",
  },
  {
    icon: Zap,
    title: "Automations",
    description:
      "Connect triggers and actions across your tools so JARVIS acts the moment something changes.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            capabilities
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Six systems, one assistant
          </h2>
          <p className="mt-4 text-muted">
            Each capability is built to work together — memory informs chat,
            documents feed agents, voice connects to everything.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="group relative h-full overflow-hidden p-6 transition-all hover:border-accent/30 hover:bg-white/[0.05]">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display relative mt-5 text-lg font-medium">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
