import { NextResponse, type NextRequest } from "next/server";

/**
 * Auth middleware scaffold.
 *
 * This currently lets every request through — Supabase isn't connected yet,
 * so there's no session to check. Once NEXT_PUBLIC_SUPABASE_URL and
 * NEXT_PUBLIC_SUPABASE_ANON_KEY are set, replace the body below with a real
 * session check (see https://supabase.com/docs/guides/auth/server-side/nextjs)
 * and redirect unauthenticated users away from /dashboard, and authenticated
 * users away from /login and /register.
 */
export async function middleware(request: NextRequest) {
  const isSupabaseConfigured =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!isSupabaseConfigured) {
    return NextResponse.next();
  }

  // --- Real auth check goes here once Supabase is configured ---
  // const { supabase, response } = createMiddlewareClient(request);
  // const { data: { session } } = await supabase.auth.getSession();
  //
  // const isAuthRoute = ["/login", "/register"].includes(request.nextUrl.pathname);
  // const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");
  //
  // if (!session && isProtectedRoute) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (session && isAuthRoute) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
  // ----------------------------------------------------------------

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
