import Link from "next/link";
import { MessageSquare, FileText, CheckSquare, Bot, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PulseDot } from "@/components/shared/PulseDot";
import { getChatThreads, getTasks, getAgents, mockUser } from "@/services/mockData";

const statCards = [
  { label: "Active threads", value: "12", icon: MessageSquare, delta: "+3 this week" },
  { label: "Documents indexed", value: "47", icon: FileText, delta: "+5 this week" },
  { label: "Open tasks", value: "8", icon: CheckSquare, delta: "2 due soon" },
  { label: "Agents running", value: "1", icon: Bot, delta: "2 idle" },
];

export default async function DashboardPage() {
  const [threads, tasks, agents] = await Promise.all([
    getChatThreads(),
    getTasks(),
    getAgents(),
  ]);

  const firstName = mockUser.name.split(" ")[0];

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-sm text-muted">Here&apos;s what JARVIS has been working on.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.label} className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <stat.icon className="h-[18px] w-[18px]" />
              </div>
            </div>
            <p className="mt-4 font-display text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-xs text-accent">{stat.delta}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Recent threads */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Recent threads</CardTitle>
            <Link
              href="/dashboard/chat"
              className="flex items-center gap-1 text-xs text-accent hover:underline"
            >
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-1">
            {threads.map((thread) => (
              <Link
                key={thread.id}
                href="/dashboard/chat"
                className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-white/[0.04]"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground/90">
                    {thread.title}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{thread.preview}</p>
                </div>
                <span className="flex-none text-xs text-muted-foreground">
                  {new Date(thread.updatedAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Agents summary */}
        <Card>
          <CardHeader>
            <CardTitle>Agents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {agents.map((agent) => (
              <div key={agent.id} className="flex items-start gap-3">
                <PulseDot status={agent.status === "running" ? "active" : "idle"} className="mt-1.5" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground/90">{agent.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{agent.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Tasks progress */}
      <Card className="mt-4">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Task progress</CardTitle>
          <Link
            href="/dashboard/tasks"
            className="flex items-center gap-1 text-xs text-accent hover:underline"
          >
            View all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {tasks
            .filter((t) => t.status !== "done")
            .slice(0, 3)
            .map((task) => (
              <div key={task.id}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm text-foreground/90">{task.title}</span>
                  <Badge variant={task.priority === "high" ? "warning" : "secondary"}>
                    {task.priority}
                  </Badge>
                </div>
                <Progress value={task.progress} />
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
