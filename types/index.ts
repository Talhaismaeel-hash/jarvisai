// ---------------------------------------------------------------------------
// Chat
// ---------------------------------------------------------------------------

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
  isStreaming?: boolean;
  attachments?: ChatAttachment[];
}

export interface ChatAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
}

export interface ChatThread {
  id: string;
  title: string;
  updatedAt: string;
  preview: string;
}

// ---------------------------------------------------------------------------
// Documents
// ---------------------------------------------------------------------------

export type DocumentStatus = "processed" | "processing" | "failed";

export interface DocumentItem {
  id: string;
  name: string;
  type: "pdf" | "docx" | "txt" | "image" | "csv" | "other";
  sizeLabel: string;
  updatedAt: string;
  status: DocumentStatus;
}

// ---------------------------------------------------------------------------
// Tasks
// ---------------------------------------------------------------------------

export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  progress: number;
}

// ---------------------------------------------------------------------------
// Memory
// ---------------------------------------------------------------------------

export type MemoryCategory =
  | "preference"
  | "fact"
  | "project"
  | "person"
  | "goal";

export interface MemoryItem {
  id: string;
  title: string;
  content: string;
  category: MemoryCategory;
  createdAt: string;
  pinned?: boolean;
}

// ---------------------------------------------------------------------------
// Agents
// ---------------------------------------------------------------------------

export type AgentStatus = "idle" | "running" | "paused" | "error";

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: AgentStatus;
  lastRun?: string;
}

// ---------------------------------------------------------------------------
// User
// ---------------------------------------------------------------------------

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  plan: "free" | "pro" | "team";
}
