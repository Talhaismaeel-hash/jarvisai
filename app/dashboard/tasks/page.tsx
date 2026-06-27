import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskCard } from "@/components/dashboard/TaskCard";
import { CalendarPlaceholder } from "@/components/dashboard/CalendarPlaceholder";
import { getTasks } from "@/services/mockData";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">Tasks</h1>
          <p className="mt-1 text-sm text-muted">What JARVIS is tracking for you.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          New task
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <div>
          <CalendarPlaceholder />
        </div>
      </div>
    </div>
  );
}
