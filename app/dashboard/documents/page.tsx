import { DocumentsPageClient } from "@/components/dashboard/DocumentsPageClient";
import { getDocuments } from "@/services/mockData";

export default async function DocumentsPage() {
  const documents = await getDocuments();
  return <DocumentsPageClient documents={documents} />;
}
