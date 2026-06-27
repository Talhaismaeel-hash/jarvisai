"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Eye, EyeOff, Plus, ShieldCheck, Smartphone } from "lucide-react";
import { mockUser } from "@/services/mockData";

export default function SettingsPage() {
  return (
    <div className="container max-w-3xl py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted">Manage your account, appearance, and access.</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="voice">Voice</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
        <TabsContent value="theme">
          <ThemeSection />
        </TabsContent>
        <TabsContent value="api-keys">
          <ApiKeysSection />
        </TabsContent>
        <TabsContent value="voice">
          <VoiceSection />
        </TabsContent>
        <TabsContent value="security">
          <SecuritySection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileSection() {
  const initials = mockUser.name.split(" ").map((n) => n[0]).join("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>This is how JARVIS will refer to you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          <Button variant="secondary" size="sm">
            Change avatar
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" defaultValue={mockUser.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue={mockUser.email} disabled />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-sm font-medium text-foreground/90">Current plan</p>
            <p className="text-xs text-muted-foreground">You&apos;re on the Pro plan</p>
          </div>
          <Badge>Pro</Badge>
        </div>

        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ThemeSection() {
  const [accent, setAccent] = React.useState("cyan");
  const accents = [
    { id: "cyan", color: "#3DD9EB" },
    { id: "amber", color: "#FFB454" },
    { id: "violet", color: "#9D7FFF" },
    { id: "green", color: "#3DE08A" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme</CardTitle>
        <CardDescription>JARVIS is dark by design — fine-tune the accent.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground/90">Reduce motion</p>
            <p className="text-xs text-muted-foreground">Turns off ambient animation and transitions</p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div>
          <p className="mb-3 text-sm font-medium text-foreground/90">Accent color</p>
          <div className="flex gap-3">
            {accents.map((a) => (
              <button
                key={a.id}
                onClick={() => setAccent(a.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform hover:scale-105"
                style={{ borderColor: accent === a.id ? a.color : "transparent" }}
              >
                <span className="h-6 w-6 rounded-full" style={{ backgroundColor: a.color }} />
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ApiKeysSection() {
  const [visible, setVisible] = React.useState(false);
  const keyValue = "sk-jarvis-••••••••••••••••••••••••a1f9";

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>
          Use these to call the JARVIS API directly from your own apps. Placeholder — key
          generation isn&apos;t wired up yet.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <span className="flex-1 font-mono text-sm text-foreground/90">
            {visible ? "sk-jarvis-9d72f1a8b3c4e5d6a7b8c9d0e1f2a1f9" : keyValue}
          </span>
          <button
            onClick={() => setVisible((v) => !v)}
            className="text-muted-foreground hover:text-foreground"
          >
            {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <Button variant="secondary" size="sm">
          <Plus className="h-4 w-4" />
          Generate new key
        </Button>
      </CardContent>
    </Card>
  );
}

function VoiceSection() {
  const voices = ["Aria — warm, neutral", "Cove — calm, low", "River — bright, energetic"];
  const [selected, setSelected] = React.useState(voices[0]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Settings</CardTitle>
        <CardDescription>Choose how JARVIS sounds when speaking responses aloud.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {voices.map((voice) => (
          <button
            key={voice}
            onClick={() => setSelected(voice)}
            className={`flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-sm transition-colors ${
              selected === voice
                ? "border-accent/40 bg-accent/10 text-accent-bright"
                : "border-white/10 bg-white/[0.02] text-foreground/80 hover:bg-white/[0.05]"
            }`}
          >
            {voice}
            {selected === voice && <Badge>Selected</Badge>}
          </button>
        ))}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm font-medium text-foreground/90">Auto-play responses</p>
            <p className="text-xs text-muted-foreground">Speak replies aloud automatically</p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}

function SecuritySection() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your account password.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="flex justify-end">
            <Button>Update password</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-factor authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-3">
              <Smartphone className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground/90">Authenticator app</p>
                <p className="text-xs text-muted-foreground">Not enabled</p>
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Enable
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-success" />
          <CardTitle>Active sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="text-foreground/90">This device</p>
              <p className="text-xs text-muted-foreground">Lahore, Pakistan · Active now</p>
            </div>
            <Badge variant="success">Current</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
