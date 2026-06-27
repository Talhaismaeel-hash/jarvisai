"use client";

import { UploadCloud } from "lucide-react";

export function UploadDropzone() {
  return (
    <div className="glass flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 px-6 py-10 text-center transition-colors hover:border-accent/40 hover:bg-white/[0.05]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
        <UploadCloud className="h-5 w-5" />
      </div>
      <p className="mt-3 text-sm font-medium text-foreground/90">
        Drag files here, or click to browse
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        PDF, DOCX, TXT, CSV — up to 25 MB each
      </p>
    </div>
  );
}
