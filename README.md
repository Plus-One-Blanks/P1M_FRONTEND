# Plus One Mailers — Frontend

Marketing site and estimate funnel for **Plus One Mailers**, an EDDM (Every Door Direct Mail) print-and-mail service built for local businesses.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Start production     |
| `npm run lint` | ESLint               |

## Deploy to Vercel

### Option A — Deploy `P1M_FRONTEND` (recommended)

This folder is the Next.js app. Connect Vercel to **`Plus-One-Blanks/P1M_FRONTEND`** on GitHub.

| Setting | Value |
|--------|--------|
| **Root Directory** | `.` (leave empty / repo root) |
| **Framework Preset** | Next.js |
| **Build Command** | `next build` (default) |
| **Output Directory** | *(leave empty — do not set `.next`)* |
| **Install Command** | `npm install` (default) |

### Option B — Deploy the parent `P1MAILERS` monorepo

If the Vercel project points at the parent repo (with a `frontend/` folder):

| Setting | Value |
|--------|--------|
| **Root Directory** | `frontend` |
| **Framework Preset** | Next.js |
| **Output Directory** | *(leave empty)* |

Then redeploy.

### Fix for 404 after deploy

A **404 on `*.vercel.app`** almost always means Vercel is not building the Next app:

1. Open **Vercel → Project → Settings → General → Root Directory**
   - Use `.` for `P1M_FRONTEND`, or `frontend` for the monorepo.
2. Open **Build & Development Settings**
   - Clear **Output Directory** if anything is set (e.g. `public`, `out`, `.next`).
   - Framework must be **Next.js**, not “Other”.
3. **Deployments → latest → View Build Logs** — confirm `next build` succeeds.
4. **Redeploy** (Deployments → … → Redeploy).

No extra env vars are required for the marketing site.

## Site structure

| Section              | Purpose                                      |
| -------------------- | -------------------------------------------- |
| Hero                 | Primary CTA for Facebook ad traffic          |
| Trust bar            | ROI / trust stats                            |
| How it works         | 4-step EDDM process                          |
| Mission              | Brand story & values                         |
| Pricing              | Transparent volume tiers                     |
| Estimate calculator  | Interactive pricing + lead capture form      |
| Industries           | Vertical targeting for ad audiences          |
| Testimonials         | Social proof (benchmark-based)               |
| FAQ                  | Objection handling                           |
| CTA banner           | Final conversion push                        |

## Estimate API

`POST /api/estimate` accepts lead + campaign data. Leads are logged to the server console for now. Wire to your CRM (HubSpot, Resend, Airtable, etc.) in `src/app/api/estimate/route.ts`.

## Pricing model

Rates in `src/lib/pricing.ts` are based on:

- USPS EDDM retail postage: **$0.247/piece** (2026)
- Competitive all-in bundles from $0.34–$0.52/piece by volume

Update tiers as your actual print costs are finalized.

## Images

Hero and section images use [Unsplash](https://unsplash.com) via `next/image`. Replace with your own brand photography when ready.
