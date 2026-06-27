"use client";

import * as React from "react";
import { Paperclip, Mic, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatComposer({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/[0.06] p-4">
      <div className="glass-strong flex items-end gap-2 rounded-xl p-2.5">
        <button
          type="button"
          title="Attach a file (coming soon)"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
        >
          <Paperclip className="h-[18px] w-[18px]" />
        </button>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Message JARVIS…"
          className="max-h-40 flex-1 resize-none bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />

        <button
          type="button"
          title="Voice input (coming soon)"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
        >
          <Mic className="h-[18px] w-[18px]" />
        </button>

        <Button type="submit" size="icon" disabled={!value.trim() || disabled} className="flex-none">
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        JARVIS can make mistakes. Verify important information.
      </p>
    </form>
  );
}
