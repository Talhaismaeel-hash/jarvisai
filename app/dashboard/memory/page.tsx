import { MemoryPageClient } from "@/components/dashboard/MemoryPageClient";
import { getMemories } from "@/services/mockData";

export default async function MemoryPage() {
  const memories = await getMemories();
  return <MemoryPageClient memories={memories} />;
}
