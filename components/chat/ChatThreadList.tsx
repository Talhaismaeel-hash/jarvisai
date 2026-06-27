"use client";

import { Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { ChatThread } from "@/types";

export function ChatThreadList({
  threads,
  activeId,
  onSelect,
  onNewChat,
}: {
  threads: ChatThread[];
  activeId: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
}) {
  return (
    <div className="flex h-full w-72 flex-none flex-col border-r border-white/[0.06]">
      <div className="p-3">
        <Button className="w-full" variant="secondary" onClick={onNewChat}>
          <Plus className="h-4 w-4" />
          New chat
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 pb-3">
          {threads.map((thread) => (
            <button
              key={thread.id}
              onClick={() => onSelect(thread.id)}
              className={cn(
                "flex w-full items-start gap-2.5 rounded-md px-2.5 py-2.5 text-left transition-colors",
                activeId === thread.id
                  ? "bg-accent/10 text-accent-bright"
                  : "text-muted hover:bg-white/[0.05] hover:text-foreground"
              )}
            >
              <MessageSquare className="mt-0.5 h-3.5 w-3.5 flex-none" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{thread.title}</p>
                <p className="truncate text-xs text-muted-foreground">{thread.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
