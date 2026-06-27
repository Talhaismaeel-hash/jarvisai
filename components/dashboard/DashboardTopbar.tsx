"use client";

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MobileSidebar } from "@/components/dashboard/MobileSidebar";
import { mockUser } from "@/services/mockData";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export function DashboardTopbar() {
  const initials = mockUser.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="flex h-16 flex-none items-center justify-between gap-4 border-b border-white/[0.06] px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search threads, documents, tasks…"
            className="w-72 pl-9"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-signal" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-medium text-foreground">{mockUser.name}</p>
              <p className="text-xs text-muted-foreground">{mockUser.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">
                <User className="h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">
                <LogOut className="h-4 w-4" />
                Sign out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
