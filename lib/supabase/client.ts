import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for use in Client Components.
 *
 * This is wired up but NOT required for the app to run — every page works
 * against the mock data services in `services/` until you add real
 * NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY values to .env.local.
 *
 * Usage:
 *   const supabase = createClient();
 *   const { data, error } = await supabase.from("threads").select("*");
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local — see .env.example."
    );
  }

  return createBrowserClient(url, anonKey);
}
