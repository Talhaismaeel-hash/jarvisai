"use client";

import * as React from "react";
import type { ChatMessage } from "@/types";

const SAMPLE_RESPONSE = [
  "Here's a quick breakdown:",
  "",
  "1. **Set up the data model** — define the shape of what you're storing first.",
  "2. **Build the API layer** — keep it thin; just translate requests to data calls.",
  "3. **Wire up the UI** — connect components last, once the contract is stable.",
  "",
  "```ts",
  "function greet(name: string) {",
  "  return `Hello, ${name}!`;",
  "}",
  "```",
  "",
  "Let me know if you'd like me to go deeper on any of these.",
].join("\n");

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Chat session state.
 *
 * `simulateAssistantReply` is a placeholder that streams a canned response
 * character-by-character so the UI is fully demonstrable. Swap this for a
 * real fetch to your /api/chat route (backed by the Anthropic API) once
 * the AI integration is ready — the streaming UI itself needs no changes.
 */
export function useChatSession(initialMessages: ChatMessage[] = []) {
  const [messages, setMessages] = React.useState<ChatMessage[]>(initialMessages);
  const [isResponding, setIsResponding] = React.useState(false);
  const streamTimer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    return () => {
      if (streamTimer.current) clearInterval(streamTimer.current);
    };
  }, []);

  function simulateAssistantReply() {
    const assistantId = createMessage("assistant", "").id;
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "", createdAt: new Date().toISOString(), isStreaming: true },
    ]);
    setIsResponding(true);

    let i = 0;
    streamTimer.current = setInterval(() => {
      i += 3;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content: SAMPLE_RESPONSE.slice(0, i),
                isStreaming: i < SAMPLE_RESPONSE.length,
              }
            : m
        )
      );
      if (i >= SAMPLE_RESPONSE.length) {
        if (streamTimer.current) clearInterval(streamTimer.current);
        setIsResponding(false);
      }
    }, 12);
  }

  function sendMessage(content: string) {
    setMessages((prev) => [...prev, createMessage("user", content)]);
    simulateAssistantReply();
  }

  function regenerateLast() {
    setMessages((prev) => {
      const hasAssistantMessage = prev.some((m) => m.role === "assistant");
      if (!hasAssistantMessage) return prev;
      // Drop the most recent message (the prior assistant reply) before re-streaming.
      return prev.slice(0, prev.length - 1);
    });
    simulateAssistantReply();
  }

  return { messages, isResponding, sendMessage, regenerateLast, setMessages };
}
