import { Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { MemoryItem } from "@/types";

export function MemoryTimeline({ memories }: { memories: MemoryItem[] }) {
  const sorted = [...memories].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
      <div className="space-y-6">
        {sorted.map((memory) => (
          <div key={memory.id} className="relative flex gap-4 pl-0">
            <div className="relative z-10 mt-1.5 h-3.5 w-3.5 flex-none rounded-full border-2 border-accent bg-[#0A0B0F]" />
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-mono">
                  {new Date(memory.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {memory.pinned && <Pin className="h-3 w-3 fill-accent text-accent" />}
              </div>
              <h3 className="font-display mt-1 text-sm font-medium text-foreground/90">
                {memory.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{memory.content}</p>
              <Badge variant="secondary" className="mt-2">
                {memory.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
