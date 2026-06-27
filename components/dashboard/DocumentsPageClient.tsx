"use client";

import { FileText, MoreHorizontal, Download, Trash2 } from "lucide-react";
import { UploadDropzone } from "@/components/dashboard/UploadDropzone";
import { DocumentTypeIcon, DocumentStatusBadge } from "@/components/dashboard/DocumentBadges";
import { EmptyState } from "@/components/shared/EmptyState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { DocumentItem } from "@/types";

export function DocumentsPageClient({ documents }: { documents: DocumentItem[] }) {
  if (documents.length === 0) {
    return (
      <div className="container flex h-full max-w-5xl flex-col py-8">
        <PageHeader />
        <UploadDropzone />
        <EmptyState
          icon={FileText}
          title="No documents yet"
          description="Upload a file and JARVIS will index it so you can ask questions against its content."
        />
      </div>
    );
  }

  return (
    <div className="container max-w-5xl py-8">
      <PageHeader />
      <UploadDropzone />

      <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.02] text-left text-xs text-muted-foreground">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="border-b border-white/[0.05] last:border-0 transition-colors hover:bg-white/[0.03]"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/10 text-accent">
                      <DocumentTypeIcon type={doc.type} />
                    </div>
                    <span className="font-medium text-foreground/90">{doc.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <DocumentStatusBadge status={doc.status} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{doc.sizeLabel}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(doc.updatedAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-danger focus:text-danger">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="mb-6">
      <h1 className="font-display text-2xl font-semibold tracking-tight">Documents</h1>
      <p className="mt-1 text-sm text-muted">
        Files JARVIS has read and can reference in conversation.
      </p>
    </div>
  );
}
