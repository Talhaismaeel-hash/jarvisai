export default function DashboardLoading() {
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8 h-7 w-56 animate-pulse rounded-md bg-white/[0.06]" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-lg border border-white/[0.06] bg-white/[0.03]" />
        ))}
      </div>
      <div className="mt-6 h-64 animate-pulse rounded-lg border border-white/[0.06] bg-white/[0.03]" />
    </div>
  );
}
