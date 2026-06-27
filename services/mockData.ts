import type {
  Agent,
  ChatThread,
  DocumentItem,
  MemoryItem,
  Task,
  UserProfile,
} from "@/types";

/**
 * Mock data layer.
 *
 * Every function here returns static or randomly-generated data and is
 * written as `async` so call sites don't need to change when these are
 * swapped for real Supabase/API calls later. Keep all fake-data generation
 * isolated to this file — components should never hardcode sample content.
 */

export const mockUser: UserProfile = {
  id: "usr_001",
  name: "Alex Chen",
  email: "alex@projectjarvis.ai",
  plan: "pro",
};

export async function getChatThreads(): Promise<ChatThread[]> {
  return [
    {
      id: "thr_1",
      title: "Quarterly report outline",
      updatedAt: "2026-06-27T14:32:00Z",
      preview: "Here's a structure for the Q2 report based on...",
    },
    {
      id: "thr_2",
      title: "Debugging the auth flow",
      updatedAt: "2026-06-26T09:10:00Z",
      preview: "The token refresh logic should check expiry before...",
    },
    {
      id: "thr_3",
      title: "Trip planning — Tokyo",
      updatedAt: "2026-06-24T18:02:00Z",
      preview: "Five days is enough for Shibuya, Asakusa, and a day trip...",
    },
    {
      id: "thr_4",
      title: "Refactor notification service",
      updatedAt: "2026-06-22T11:45:00Z",
      preview: "Splitting this into a queue-based architecture would...",
    },
  ];
}

export async function getDocuments(): Promise<DocumentItem[]> {
  return [
    {
      id: "doc_1",
      name: "Series A Pitch Deck.pdf",
      type: "pdf",
      sizeLabel: "4.2 MB",
      updatedAt: "2026-06-25T10:00:00Z",
      status: "processed",
    },
    {
      id: "doc_2",
      name: "Brand Guidelines.docx",
      type: "docx",
      sizeLabel: "1.8 MB",
      updatedAt: "2026-06-24T15:30:00Z",
      status: "processed",
    },
    {
      id: "doc_3",
      name: "Customer Interview Notes.txt",
      type: "txt",
      sizeLabel: "112 KB",
      updatedAt: "2026-06-23T08:12:00Z",
      status: "processing",
    },
    {
      id: "doc_4",
      name: "Revenue Model Q3.csv",
      type: "csv",
      sizeLabel: "340 KB",
      updatedAt: "2026-06-20T13:00:00Z",
      status: "processed",
    },
  ];
}

export async function getTasks(): Promise<Task[]> {
  return [
    {
      id: "tsk_1",
      title: "Design the onboarding flow",
      description: "Cover empty states, first-run tooltips, and sample data.",
      status: "in_progress",
      priority: "high",
      dueDate: "2026-07-02",
      progress: 60,
    },
    {
      id: "tsk_2",
      title: "Write API rate-limit docs",
      status: "todo",
      priority: "medium",
      dueDate: "2026-07-05",
      progress: 0,
    },
    {
      id: "tsk_3",
      title: "Fix streaming reconnect bug",
      description: "Socket drops silently after 60s of inactivity.",
      status: "in_progress",
      priority: "high",
      dueDate: "2026-06-30",
      progress: 35,
    },
    {
      id: "tsk_4",
      title: "Ship dark-mode chart palette",
      status: "done",
      priority: "low",
      progress: 100,
    },
    {
      id: "tsk_5",
      title: "Review Q3 roadmap with design",
      status: "todo",
      priority: "medium",
      dueDate: "2026-07-08",
      progress: 0,
    },
  ];
}

export async function getMemories(): Promise<MemoryItem[]> {
  return [
    {
      id: "mem_1",
      title: "Prefers concise responses",
      content: "Likes short, direct answers without preamble unless asked for depth.",
      category: "preference",
      createdAt: "2026-06-10T09:00:00Z",
      pinned: true,
    },
    {
      id: "mem_2",
      title: "Working on Project JARVIS",
      content: "Building a production AI assistant SaaS with Next.js and Supabase.",
      category: "project",
      createdAt: "2026-06-15T12:00:00Z",
      pinned: true,
    },
    {
      id: "mem_3",
      title: "Timezone: PKT (UTC+5)",
      content: "Based in Lahore, Pakistan. Schedule reminders accordingly.",
      category: "fact",
      createdAt: "2026-06-12T07:30:00Z",
    },
    {
      id: "mem_4",
      title: "Goal: launch beta by August",
      content: "Targeting a closed beta with 50 users by end of August 2026.",
      category: "goal",
      createdAt: "2026-06-20T16:45:00Z",
    },
    {
      id: "mem_5",
      title: "Co-founder: Sara",
      content: "Handles design and customer interviews.",
      category: "person",
      createdAt: "2026-06-18T11:20:00Z",
    },
  ];
}

export async function getAgents(): Promise<Agent[]> {
  return [
    {
      id: "agt_1",
      name: "Inbox Triage",
      description: "Sorts and labels incoming email, drafts replies for review.",
      status: "running",
      lastRun: "2026-06-28T08:00:00Z",
    },
    {
      id: "agt_2",
      name: "Weekly Report Builder",
      description: "Compiles task and memory activity into a Friday summary.",
      status: "idle",
      lastRun: "2026-06-21T17:00:00Z",
    },
    {
      id: "agt_3",
      name: "Research Watcher",
      description: "Monitors saved topics and surfaces new relevant sources.",
      status: "paused",
    },
  ];
}
