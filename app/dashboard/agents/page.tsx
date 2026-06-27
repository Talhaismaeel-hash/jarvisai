import { Plus, Play, Pause, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PulseDot } from "@/components/shared/PulseDot";
import { getAgents } from "@/services/mockData";
import type { Agent } from "@/types";

const statusBadge: Record<Agent["status"], { label: string; variant: "success" | "secondary" | "warning" | "destructive" }> = {
  running: { label: "Running", variant: "success" },
  idle: { label: "Idle", variant: "secondary" },
  paused: { label: "Paused", variant: "warning" },
  error: { label: "Error", variant: "destructive" },
};

export default async function AgentsPage() {
  const agents = await getAgents();

  return (
    <div className="container max-w-5xl py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">Agents</h1>
          <p className="mt-1 text-sm text-muted">
            Background workers that act on JARVIS&apos;s behalf.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          New agent
        </Button>
      </div>

      <div className="space-y-3">
        {agents.map((agent) => {
          const badge = statusBadge[agent.status];
          return (
            <Card key={agent.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <PulseDot status={agent.status === "running" ? "active" : agent.status === "error" ? "error" : "idle"} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground/90">{agent.name}</h3>
                    <Badge variant={badge.variant}>{badge.label}</Badge>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{agent.description}</p>
                  {agent.lastRun && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Last run{" "}
                      {new Date(agent.lastRun).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  {agent.status === "running" ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
