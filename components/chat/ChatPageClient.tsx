"use client";

import * as React from "react";
import { ChatThreadList } from "@/components/chat/ChatThreadList";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { useChatSession } from "@/hooks/useChatSession";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { Sparkles } from "lucide-react";
import type { ChatMessage, ChatThread } from "@/types";

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hey, I'm JARVIS. Ask me anything, drop in a document, or tell me what you're working on — I'll keep context across this whole conversation.",
  createdAt: new Date().toISOString(),
};

export function ChatPageClient({ threads }: { threads: ChatThread[] }) {
  const [activeId, setActiveId] = React.useState(threads[0]?.id ?? "new");
  const { messages, isResponding, sendMessage, regenerateLast } = useChatSession([
    welcomeMessage,
  ]);
  const scrollRef = useAutoScroll<HTMLDivElement>([messages]);

  return (
    <div className="flex h-full">
      <ChatThreadList
        threads={threads}
        activeId={activeId}
        onSelect={setActiveId}
        onNewChat={() => setActiveId("new")}
      />

      <div className="flex flex-1 flex-col">
        <div className="flex h-14 flex-none items-center gap-2 border-b border-white/[0.06] px-5">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground/90">
            {threads.find((t) => t.id === activeId)?.title ?? "New chat"}
          </span>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-6 overflow-y-auto scrollbar-thin px-5 py-6">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
              onRegenerate={message.role === "assistant" ? regenerateLast : undefined}
            />
          ))}
        </div>

        <ChatComposer onSend={sendMessage} disabled={isResponding} />
      </div>
    </div>
  );
}
