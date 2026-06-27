"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-2xl px-8 py-16 text-center"
        >
          <div className="absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-hud-glow" />
          <h2 className="font-display relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Put JARVIS to work today.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted">
            Free during private beta. No credit card required.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                Create your account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
