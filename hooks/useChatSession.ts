"use client";

import * as React from "react";
import type { ChatMessage } from "@/types";

function createMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

export function useChatSession(initialMessages: ChatMessage[] = []) {
  const [messages, setMessages] = React.useState(initialMessages);
  const [isResponding, setIsResponding] = React.useState(false);

  async function sendMessage(content: string) {
    const userMessage = createMessage("user", content);
    setMessages((prev) => [...prev, userMessage]);
    setIsResponding(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          data.reply || "No response from Gemini."
        ),
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "❌ Failed to connect to Gemini."
        ),
      ]);
    } finally {
      setIsResponding(false);
    }
  }

  async function regenerateLast() {
    const lastUser = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (lastUser) {
      await sendMessage(lastUser.content);
    }
  }

  return {
    messages,
    isResponding,
    sendMessage,
    regenerateLast,
    setMessages,
  };
}
