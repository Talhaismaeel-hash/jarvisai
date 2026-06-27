"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HudBackdrop } from "@/components/shared/HudBackdrop";
import { useEffect, useState } from "react";

const readouts = [
  "calendar synced",
  "3 documents indexed",
  "memory: 128 entries",
  "agent: inbox triage — running",
];

export function Hero() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((i) => (i + 1) % readouts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      <HudBackdrop />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-accent-bright"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Now in private beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          An assistant that
          <br />
          <span className="text-gradient">runs alongside you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-balance text-lg text-muted"
        >
          JARVIS remembers context, reads your documents, talks back, and
          works in the background — so you spend less time managing tools and
          more time deciding things.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="/register">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </motion.div>

        {/* Live readout panel — the hero's signature element: JARVIS as a
            running instrument, not a static product shot. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-strong relative mt-16 w-full max-w-md overflow-hidden rounded-xl p-5 text-left"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              system status
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(61,217,235,0.6)]" />
              online
            </span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            {readouts.map((line, i) => (
              <div
                key={line}
                className={`flex items-center gap-2 transition-colors duration-500 ${
                  i === activeLine ? "text-accent-bright" : "text-muted-foreground/70"
                }`}
              >
                <span className="text-muted-foreground/50">{`>`}</span>
                {line}
                {i === activeLine && (
                  <span className="ml-0.5 inline-block h-3 w-1.5 animate-blink bg-accent-bright" />
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 top-0 h-full w-full overflow-hidden rounded-xl">
            <div className="absolute left-0 top-0 h-px w-full animate-scan-sweep bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
