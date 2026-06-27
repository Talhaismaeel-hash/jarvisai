import { cn } from "@/lib/utils";

type PulseDotStatus = "active" | "idle" | "error";

const statusColor: Record<PulseDotStatus, string> = {
  active: "bg-accent",
  idle: "bg-muted-foreground",
  error: "bg-danger",
};

/**
 * Small radar-ping indicator — the recurring "instrument is alive" signature
 * used for online status, agent state, and recording indicators.
 */
export function PulseDot({
  status = "active",
  className,
}: {
  status?: PulseDotStatus;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex h-2 w-2", className)}>
      {status === "active" && (
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
      )}
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", statusColor[status])} />
    </span>
  );
}
