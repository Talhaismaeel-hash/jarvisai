import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "JARVIS — Your AI, always on",
  description:
    "An AI assistant with memory, voice, documents, and agents — built to run your day, not just answer questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
