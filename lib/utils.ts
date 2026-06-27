import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility classes.
 * Standard helper used across all shadcn/ui-derived components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
