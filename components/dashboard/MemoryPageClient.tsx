"use client";

import * as React from "react";
import { Search, LayoutGrid, ListTree } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MemoryCard } from "@/components/dashboard/MemoryCard";
import { MemoryTimeline } from "@/components/dashboard/MemoryTimeline";
import { EmptyState } from "@/components/shared/EmptyState";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MemoryItem, MemoryCategory } from "@/types";

const categories: { value: MemoryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "preference", label: "Preferences" },
  { value: "project", label: "Projects" },
  { value: "fact", label: "Facts" },
  { value: "person", label: "People" },
  { value: "goal", label: "Goals" },
];

export function MemoryPageClient({ memories }: { memories: MemoryItem[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<MemoryCategory | "all">("all");
  const [view, setView] = React.useState<"grid" | "timeline">("grid");

  const filtered = memories.filter((m) => {
    const matchesCategory = category === "all" || m.category === category;
    const matchesQuery =
      query.trim() === "" ||
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.content.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Memory</h1>
        <p className="mt-1 text-sm text-muted">
          What JARVIS remembers about you, your projects, and your preferences.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={category} onValueChange={(v) => setCategory(v as MemoryCategory | "all")}>
          <TabsList className="flex-wrap">
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <div className="relative sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search memory…"
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex rounded-md border border-white/10 bg-white/[0.03] p-1">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-7 w-7", view === "grid" && "bg-accent/15 text-accent-bright")}
              onClick={() => setView("grid")}
              title="Grid view"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-7 w-7", view === "timeline" && "bg-accent/15 text-accent-bright")}
              onClick={() => setView("timeline")}
              title="Timeline view"
            >
              <ListTree className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Brain}
          title="Nothing here yet"
          description="Try a different search term or category — or keep chatting with JARVIS and it'll start remembering things automatically."
        />
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      ) : (
        <MemoryTimeline memories={filtered} />
      )}
    </div>
  );
}
