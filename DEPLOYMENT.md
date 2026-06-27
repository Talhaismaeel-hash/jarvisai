# Deployment Guide

This project is built for [Vercel](https://vercel.com), the platform made by the Next.js team — zero-config deploys, automatic preview URLs per PR, and edge-ready middleware.

## Option A: Deploy via the Vercel dashboard (easiest)

1. Push this project to a GitHub, GitLab, or Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings to change. Framework preset: **Next.js**, build command: `next build`, output: `.next`.
4. Add environment variables under **Settings → Environment Variables** (see below). You can deploy without any — the app runs on mock data.
5. Click **Deploy**.

Every push to your default branch redeploys production; every PR gets its own preview URL automatically.

## Option B: Deploy via the Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (link to a new or existing project). For a production deploy:

```bash
vercel --prod
```

---

## Environment variables on Vercel

Go to your project → **Settings → Environment Variables** and add (for each environment: Production, Preview, Development):

| Variable | Required to run? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | No | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Supabase public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Server-only Supabase key (never expose with `NEXT_PUBLIC_`) |
| `ANTHROPIC_API_KEY` | No | Server-only key for a future `/api/chat` route |
| `NEXT_PUBLIC_APP_URL` | No | Used for absolute URLs (e.g. auth redirects) once needed |

None of these are required for the build to succeed or the UI to render — they only matter once you wire up real Supabase/AI calls.

---

## Custom domain

In your Vercel project: **Settings → Domains → Add**. Point your DNS (A/CNAME, Vercel will show exact records) and Vercel issues an SSL certificate automatically.

---

## Build settings reference

If Vercel's auto-detection ever needs to be set manually:

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 18.x or 20.x |

---

## Post-deploy checklist

- [ ] Visit the deployed URL and click through landing → register → dashboard → each sidebar item
- [ ] Confirm fonts load correctly (Space Grotesk headings, Inter body)
- [ ] If you've added Supabase env vars, confirm `middleware.ts` redirect logic before relying on it — it's currently scaffolded but commented out (see `README.md`)
- [ ] Set up a custom domain if needed
- [ ] Consider enabling Vercel Analytics or Speed Insights from the project dashboard for production monitoring
