"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Static calendar grid for the current month. This is a visual placeholder —
 * wire it to real task due-dates once the tasks API/Supabase table exists.
 */
export function CalendarPlaceholder() {
  const today = new Date();
  const monthLabel = today.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOffset = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const cells = [...Array(firstDayOffset).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{monthLabel}</CardTitle>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="py-1">
              {d}
            </span>
          ))}
          {cells.map((day, i) => (
            <span
              key={i}
              className={`flex h-8 items-center justify-center rounded-md text-xs ${
                day === today.getDate()
                  ? "bg-accent text-[#04141A] font-medium"
                  : day
                    ? "text-foreground/80 hover:bg-white/[0.06]"
                    : ""
              }`}
            >
              {day ?? ""}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
