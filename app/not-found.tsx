import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HudBackdrop } from "@/components/shared/HudBackdrop";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <HudBackdrop />
      <div className="relative z-10 text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight">
          Signal lost
        </h1>
        <p className="mt-3 max-w-sm text-sm text-muted">
          This page doesn&apos;t exist, or it moved. Let&apos;s get you back on course.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
