import { Pin, User, Target, Briefcase, Heart, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MemoryItem, MemoryCategory } from "@/types";

const categoryConfig: Record<MemoryCategory, { label: string; icon: typeof Info }> = {
  preference: { label: "Preference", icon: Heart },
  fact: { label: "Fact", icon: Info },
  project: { label: "Project", icon: Briefcase },
  person: { label: "Person", icon: User },
  goal: { label: "Goal", icon: Target },
};

export function MemoryCard({ memory }: { memory: MemoryItem }) {
  const config = categoryConfig[memory.category];

  return (
    <Card className="relative p-5">
      {memory.pinned && (
        <Pin className="absolute right-4 top-4 h-3.5 w-3.5 fill-accent text-accent" />
      )}
      <Badge variant="secondary" className="gap-1">
        <config.icon className="h-3 w-3" />
        {config.label}
      </Badge>
      <h3 className="font-display mt-3 text-sm font-medium text-foreground/90">
        {memory.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{memory.content}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        {new Date(memory.createdAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </Card>
  );
}
