"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Lock, User } from "lucide-react";

/**
 * Registration form.
 *
 * Submission is stubbed — see LoginForm.tsx for the same pattern. Replace
 * with `supabase.auth.signUp(...)` once Supabase is configured.
 */
export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("Fill in every field to create your account.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setIsLoading(true);

    // --- Stub: replace with real Supabase signUp call ---
    await new Promise((resolve) => setTimeout(resolve, 900));
    // -----------------------------------------------------

    setIsLoading(false);
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="name"
            placeholder="Alex Chen"
            className="pl-9"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="pl-9"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            className="pl-9"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
      </div>

      {error && (
        <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating account…
          </>
        ) : (
          "Create account"
        )}
      </Button>

      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        By continuing you agree to JARVIS&apos;s Terms of Service and Privacy
        Policy.
      </p>
    </form>
  );
}
