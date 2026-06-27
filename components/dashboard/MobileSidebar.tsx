"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Brain,
  CheckSquare,
  Bot,
  Settings,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <DialogPrimitive.Content className="fixed inset-y-0 left-0 z-50 w-72 border-r border-white/[0.08] bg-[#0B0C11] p-4 focus:outline-none">
          <DialogPrimitive.Title className="sr-only">Navigation</DialogPrimitive.Title>
          <div className="mb-8 flex items-center justify-between px-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent/15">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-sm font-semibold tracking-wide">JARVIS</span>
            </Link>
            <DialogPrimitive.Close asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);
              return (
                <DialogPrimitive.Close asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-accent/10 text-accent-bright"
                        : "text-muted hover:bg-white/[0.05] hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </DialogPrimitive.Close>
              );
            })}
          </nav>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
