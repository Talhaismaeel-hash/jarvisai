import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/shared/AuthShell";
import { RegisterForm } from "@/components/shared/RegisterForm";

export const metadata: Metadata = {
  title: "Create your account — JARVIS",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Free during private beta. No credit card required."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
