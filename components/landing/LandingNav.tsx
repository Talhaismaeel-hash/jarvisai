"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Pricing", href: "#pricing" },
];

export function LandingNav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
    >
      <div className="glass flex items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent/15">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(61,217,235,0.7)]" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">JARVIS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">Get started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
