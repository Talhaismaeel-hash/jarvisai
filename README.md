# Project JARVIS

A premium, futuristic AI assistant interface — built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This is the **front-end foundation**: every screen is fully built and navigable, running on realistic mock data, ready for you to wire up a real AI backend and Supabase.

![status](https://img.shields.io/badge/status-private%20beta%20UI-3DD9EB)
![stack](https://img.shields.io/badge/stack-Next.js%2015%20%2B%20TypeScript-0A0B0F)

---

## What's in this build

| Area | Status |
|---|---|
| Landing page (hero, features, roadmap, CTA, footer) | ✅ Built |
| Auth pages (`/login`, `/register`) | ✅ UI complete, sign-in/sign-up calls **stubbed** |
| Dashboard shell (sidebar, topbar, search, notifications, profile menu) | ✅ Built |
| Chat (`/dashboard/chat`) — bubbles, markdown, code blocks, streaming UI, copy/regenerate, file & voice placeholders | ✅ Built, **simulated** streaming |
| Documents (`/dashboard/documents`) — file table, upload dropzone, empty state | ✅ Built, mock data |
| Tasks (`/dashboard/tasks`) — cards, progress bars, calendar | ✅ Built, mock data |
| Memory (`/dashboard/memory`) — cards, timeline view, search, category filters | ✅ Built, mock data |
| Agents (`/dashboard/agents`) — agent list with status controls | ✅ Built, mock data |
| Settings (`/dashboard/settings`) — Profile, Theme, API Keys, Voice, Security tabs | ✅ Built |
| Supabase client (browser + server) | ✅ Scaffolded, **not connected** |
| Auth middleware | ✅ Scaffolded, **inactive** until Supabase env vars are set |
| Real AI integration | ⬜ Not built — chat currently streams a canned sample reply |

Nothing here is a static mockup — every page is real, typed, interactive code. The things marked "stubbed" or "simulated" are intentionally left as clearly-commented placeholders so you can drop in real logic without restructuring anything.

---

## Design language

The UI follows a dark, glassmorphic "HUD" aesthetic — inspired by Apple, Linear, Vercel, Notion, and Iron Man's heads-up display:

- **Base**: near-black (`#0A0B0F`) with a faint engineering grid and drifting ambient glow orbs
- **Accent**: arc-reactor cyan (`#3DD9EB`) as the primary signature color, with a warm amber (`#FFB454`) reserved for alerts/active states
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (data/code/timestamps)
- **Signature motif**: a recurring scan-line sweep and radar-pulse dot used for "this is alive" moments — the hero's live status readout, sidebar active-indicators, agent status, recording/online states

All tokens live in `tailwind.config.ts` and `styles/globals.css` — change the `accent` color there to re-theme the whole app.

---

## Project structure

```
jarvis/
├── app/                        # Next.js App Router routes
│   ├── page.tsx                # Landing page
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── dashboard/
│       ├── layout.tsx           # Sidebar + topbar shell
│       ├── page.tsx             # Dashboard overview
│       ├── chat/page.tsx
│       ├── documents/page.tsx
│       ├── tasks/page.tsx
│       ├── memory/page.tsx
│       ├── agents/page.tsx
│       └── settings/page.tsx
├── components/
│   ├── ui/                      # shadcn/ui-style primitives (button, card, dialog, ...)
│   ├── landing/                  # Landing page sections
│   ├── dashboard/                # Dashboard-specific components
│   ├── chat/                     # Chat-specific components
│   └── shared/                   # Cross-cutting components (auth shell, empty states, backdrop)
├── hooks/                        # useChatSession, useAutoScroll
├── lib/
│   ├── utils.ts                  # cn() class merger
│   └── supabase/                 # client.ts (browser), server.ts (server components)
├── services/
│   └── mockData.ts               # All fake data lives here — swap for real calls later
├── types/
│   └── index.ts                  # Shared domain types
├── styles/
│   └── globals.css               # HUD backdrop, glass utilities, markdown/code theme
├── middleware.ts                  # Auth route protection (inactive until Supabase is wired)
├── .env.example
└── tailwind.config.ts             # Design tokens
```

**Why this structure:** mock data is isolated in `services/`, so every page already calls an `async` function — when you're ready to go live, you replace the body of those functions with real Supabase/API calls and no component code needs to change.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). See `INSTALLATION.md` for full setup details and `DEPLOYMENT.md` for shipping to Vercel.

---

## Connecting real services later

- **Supabase (auth + DB)**: fill in `.env.local` from `.env.example`, then see `lib/supabase/client.ts` / `server.ts` and the commented-out logic in `middleware.ts`.
- **AI model**: replace `simulateAssistantReply()` in `hooks/useChatSession.ts` with a real `fetch` to an `/api/chat` route that calls the Anthropic API with streaming enabled. The chat UI (bubbles, typing indicator, auto-scroll) needs no changes — it's already built to consume a streaming `content` string.

---

## License

This is a starter codebase generated for your project — use it however you like.
