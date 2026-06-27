"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Brain,
  CheckSquare,
  Bot,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Chat", href: "/dashboard/chat", icon: MessageSquare },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Memory", href: "/dashboard/memory", icon: Brain },
  { label: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { label: "Agents", href: "/dashboard/agents", icon: Bot },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 flex-none flex-col border-r border-white/[0.06] bg-[#0B0C11]/80 p-4 lg:flex">
      <Link href="/" className="mb-8 flex items-center gap-2 px-2">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent/15">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(61,217,235,0.7)]" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide">JARVIS</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-accent/10 text-accent-bright"
                  : "text-muted hover:bg-white/[0.05] hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(61,217,235,0.6)]" />
              )}
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="glass mt-4 rounded-lg p-3">
        <p className="text-xs font-medium text-foreground/90">Pro plan</p>
        <p className="mt-0.5 text-xs text-muted-foreground">42% of monthly tokens used</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-accent-dim to-accent" />
        </div>
      </div>
    </aside>
  );
}
