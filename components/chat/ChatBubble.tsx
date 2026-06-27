"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { motion } from "framer-motion";
import { Copy, Check, RotateCcw, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";

export function ChatBubble({
  message,
  onRegenerate,
}: {
  message: ChatMessage;
  onRegenerate?: () => void;
}) {
  const [copied, setCopied] = React.useState(false);
  const isUser = message.role === "user";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — fail silently, this is a non-critical affordance.
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex gap-3", isUser && "flex-row-reverse")}
    >
      <div
        className={cn(
          "flex h-8 w-8 flex-none items-center justify-center rounded-full",
          isUser ? "bg-white/10" : "bg-accent/15 text-accent"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      <div className={cn("group flex max-w-[75%] flex-col", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            isUser
              ? "bg-accent/15 text-foreground"
              : "glass text-foreground"
          )}
        >
          {message.isStreaming && message.content.length === 0 ? (
            <TypingIndicator />
          ) : (
            <div className="prose-jarvis max-w-none text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {message.content}
              </ReactMarkdown>
              {message.isStreaming && (
                <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-accent-bright align-middle" />
              )}
            </div>
          )}
        </div>

        {!message.isStreaming && (
          <div className="mt-1.5 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded-md px-1.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied" : "Copy"}
            </button>
            {!isUser && onRegenerate && (
              <button
                onClick={onRegenerate}
                className="flex items-center gap-1 rounded-md px-1.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                <RotateCcw className="h-3 w-3" />
                Regenerate
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent/70"
          style={{
            animation: "blink 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
