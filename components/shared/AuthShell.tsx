"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HudBackdrop } from "@/components/shared/HudBackdrop";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <HudBackdrop />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-strong relative z-10 w-full max-w-md rounded-2xl p-8"
      >
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent/15">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(61,217,235,0.7)]" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">JARVIS</span>
        </Link>

        <div className="mb-7 text-center">
          <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted">{subtitle}</p>
        </div>

        {children}

        <div className="mt-6 text-center text-sm text-muted">{footer}</div>
      </motion.div>
    </main>
  );
}
