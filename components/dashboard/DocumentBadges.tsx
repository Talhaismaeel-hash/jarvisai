import { FileText, FileSpreadsheet, FileImage, File } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DocumentItem } from "@/types";

export function DocumentTypeIcon({ type }: { type: DocumentItem["type"] }) {
  const className = "h-5 w-5";
  switch (type) {
    case "pdf":
      return <FileText className={className} />;
    case "csv":
      return <FileSpreadsheet className={className} />;
    case "image":
      return <FileImage className={className} />;
    default:
      return <File className={className} />;
  }
}

export function DocumentStatusBadge({ status }: { status: DocumentItem["status"] }) {
  if (status === "processed") return <Badge variant="success">Processed</Badge>;
  if (status === "processing") return <Badge variant="warning">Processing</Badge>;
  return <Badge variant="destructive">Failed</Badge>;
}
