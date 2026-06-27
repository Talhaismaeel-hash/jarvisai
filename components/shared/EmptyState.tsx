import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 py-20 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display mt-4 text-base font-medium">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-muted">{description}</p>
      {actionLabel && (
        <Button className="mt-5" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
