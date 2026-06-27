import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/shared/AuthShell";
import { LoginForm } from "@/components/shared/LoginForm";

export const metadata: Metadata = {
  title: "Sign in — JARVIS",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to pick up where you left off."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-accent hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
