import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-accent/30 bg-accent/10 text-accent",
        secondary: "border-white/10 bg-white/[0.05] text-foreground/80",
        success: "border-success/30 bg-success/10 text-success",
        warning: "border-signal/30 bg-signal/10 text-signal",
        destructive: "border-danger/30 bg-danger/10 text-danger",
        outline: "border-white/15 text-foreground/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
