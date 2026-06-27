"use client";

/**
 * Signature ambient backdrop: faint engineering grid + drifting glow orbs.
 * This is the one motif reused everywhere (landing hero, auth pages,
 * dashboard shell) so the whole app reads as a single coherent instrument
 * rather than a stitched-together set of screens.
 */
export function HudBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 hud-backdrop" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px] animate-float" />
      <div className="absolute right-[10%] top-[40%] h-[300px] w-[300px] rounded-full bg-signal/[0.06] blur-[100px] animate-float [animation-delay:-2s]" />
      <div className="absolute left-[8%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-accent/[0.05] blur-[90px] animate-float [animation-delay:-4s]" />
    </div>
  );
}
