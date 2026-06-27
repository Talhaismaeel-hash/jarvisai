import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Task } from "@/types";

const priorityVariant: Record<Task["priority"], "destructive" | "warning" | "secondary"> = {
  high: "destructive",
  medium: "warning",
  low: "secondary",
};

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card
      className={cn(
        "p-4 transition-colors hover:border-accent/25",
        task.status === "done" && "opacity-60"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3
          className={cn(
            "text-sm font-medium text-foreground/90",
            task.status === "done" && "line-through"
          )}
        >
          {task.title}
        </h3>
        <Badge variant={priorityVariant[task.priority]} className="flex-none">
          {task.priority}
        </Badge>
      </div>

      {task.description && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {task.description}
        </p>
      )}

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{task.progress}%</span>
        </div>
        <Progress value={task.progress} />
      </div>

      {task.dueDate && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          Due {new Date(task.dueDate).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
        </div>
      )}
    </Card>
  );
}
