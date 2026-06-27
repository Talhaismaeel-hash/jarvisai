import { ChatPageClient } from "@/components/chat/ChatPageClient";
import { getChatThreads } from "@/services/mockData";

export default async function ChatPage() {
  const threads = await getChatThreads();
  return <ChatPageClient threads={threads} />;
}
