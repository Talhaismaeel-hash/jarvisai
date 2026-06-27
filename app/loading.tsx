export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-accent/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
          <div className="absolute inset-2 rounded-full bg-accent/10 animate-pulse-ring" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          loading
        </p>
      </div>
    </div>
  );
}
