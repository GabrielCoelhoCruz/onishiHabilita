# Habilita SP

Landing page for a driver's license consulting service in São Paulo. It explains Brazil's new licensing process and captures leads through a form and WhatsApp.

Live: [habilitasp.vercel.app](https://habilitasp.vercel.app)

## Features

- Sections: hero, what changed, benefits, how it works, who it is for, testimonials, FAQ
- Lead form with validation, stored in Supabase
- WhatsApp contact button
- Scroll and reveal animations with Framer Motion
- Playwright tests for the landing page

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Supabase · Playwright

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The lead form needs the Supabase URL and anon key in `.env.local`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx playwright test` | End-to-end tests |
