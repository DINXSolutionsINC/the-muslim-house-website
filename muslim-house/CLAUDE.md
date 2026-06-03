# The Muslim House — Claude Code Handoff

This file orients any Claude Code agent working on the site. Read it first.

## What this is

Marketing/donations site for **The Muslim House Inc.** — a masjid in Flint, MI (est. 1995, 501(c)(3), EIN 43-2094480).

- **Live**: https://themuslimhouseflint.org
- **GitHub**: https://github.com/malikDINX87/the-muslim-house-website (private)
- **Hosting**: Netlify (project: `the-muslim-house-flint`, ID: `c3f19565-6934-4ca0-b01d-504b42677c93`)
- **Domain**: GoDaddy DNS → Netlify (A record `@` → `75.2.60.5`, CNAME `www` → `the-muslim-house-flint.netlify.app`)
- **Donations**: Donorbox embed (campaign slug: `support-the-muslim-house`)

## Tech stack

- React 19 + Vite 6
- Tailwind CSS v4 (using `@theme` + `@custom-variant dark` in `src/index.css`)
- React Router v7 for multi-page routes
- Aladhan API for live prayer times (no key needed)
- No backend — fully static SPA deployed to Netlify CDN

## Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `pages/HomePage.jsx` | Single-page scroll: Hero, Prayer Times, About, Services, Events, Donate, Visit, Contact |
| `/sadaqah` | `pages/SadaqahPage.jsx` | Dedicated Sadaqah page with embedded Donorbox iframe |
| `/events` | `pages/EventsPage.jsx` | Full events page (video hero + event list) |

## File structure

```
muslim-house/
├── public/
│   ├── logo-dark.svg, logo-light.svg   # Brand logos
│   ├── hero-video.mp4                   # Hero background video
│   └── photos/                          # Community photos
├── src/
│   ├── App.jsx                          # Routes + dark mode wrapper
│   ├── main.jsx                         # React entry
│   ├── index.css                        # Tailwind + custom CSS, brand colors
│   ├── components/
│   │   ├── Header.jsx                   # Sticky nav with prayer ticker
│   │   ├── Hero.jsx                     # Video bg + left-aligned content
│   │   ├── PrayerTimes.jsx              # 6-card prayer grid
│   │   ├── About.jsx                    # Timeline + Imam bio
│   │   ├── Services.jsx                 # Programs (food, janazah, etc)
│   │   ├── Events.jsx                   # Home page events preview
│   │   ├── Donate.jsx                   # Donation cards
│   │   ├── Visit.jsx                    # Map + address
│   │   ├── Contact.jsx                  # Form + socials
│   │   └── Footer.jsx                   # Logo, links, socials
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── SadaqahPage.jsx              # Donorbox embed
│   │   └── EventsPage.jsx
│   └── hooks/
│       ├── usePrayerTimes.js            # Aladhan API + countdown
│       ├── useDarkMode.js               # Persists to localStorage
│       └── useScrollAnimation.js        # IntersectionObserver fade-up
└── netlify.toml                          # Build config + SPA redirect
```

## Brand

| Token | Value | Usage |
|-------|-------|-------|
| `emerald-deep` | `#1B4332` | Primary, headers, dark sections |
| `emerald-medium` | `#2D6A4F` | Hover, accents |
| `gold` | `#C6973B` | CTAs, highlights, Arabic text |
| `gold-light` | `#F4E4BA` | Button hover |
| `cream` | `#F8F5F0` | Light backgrounds |

- Headings: **Playfair Display** (serif)
- Body: **Inter**
- Arabic: **Amiri**
- All fonts loaded from Google Fonts in `index.html`

## Voice & content

From the official branding guide (`/Users/dinx_015/Downloads/THE MUSLIM HOUSE REBRANDING/`):

- **Tone**: Warm, grounded, dignified, faithful. Never preachy, never begging.
- **Always use**: "community" over "donors", "service" over "charity"
- **Never use**: "despite the odds", "underserved", "struggling", pity language
- **Honorifics**: First mention of Prophet Muhammad must include "(peace be upon him)"
- **Key facts**: Founded 1995, 501(c)(3) since 1996, Food Program since 2017 (3rd Saturday monthly), Jumu'ah Fridays 2:00 PM

## Running locally

```bash
cd muslim-house
npm install
npm run dev          # http://localhost:5173
npm run build        # production bundle in dist/
```

## Deploying to production

Deploys are manual via the Netlify CLI using a **shared auth token** (you'll receive
this token privately from the maintainer — it is NOT stored in this repo, since the
repo is public). Set it as an environment variable, then deploy:

```bash
cd muslim-house
npm run build
export NETLIFY_AUTH_TOKEN="<token shared with you privately>"
npx netlify deploy --dir=dist --prod --site=c3f19565-6934-4ca0-b01d-504b42677c93 --message="your change description"
```

The `--site` flag targets the `the-muslim-house-flint` project so you don't need to
run `netlify link`. **Never commit the token** — keep it in your shell env or a local
`.env` that is gitignored.

Note: any push to `main` does NOT auto-deploy (no GitHub integration set up on Netlify).
Deploys are manual via CLI.

## Git workflow

```bash
# Always work on main for now (small team, no PR review)
git pull origin main
# ...make changes...
git add -A
git commit -m "descriptive message"
git push origin main
# Then deploy manually (see above)
```

## Common gotchas

1. **Tailwind v4 dark mode**: Uses `@custom-variant dark (&:where(.dark, .dark *))` in `index.css`. The `.dark` class is toggled on `<html>` and `<body>` by `useDarkMode`. Don't change this.
2. **Scroll animations**: Elements with `.fade-up` class are animated by `useScrollAnimation` via inline styles (CSS approach failed due to Tailwind v4 layer precedence). Keep using the hook.
3. **Hero video**: `/public/hero-video.mp4` is 2.2MB, H.264, 1280px wide. Re-encode with ffmpeg if replacing.
4. **Prayer times**: Aladhan API (`https://api.aladhan.com/v1/timingsByCity/...`) is rate-limited but generous. Fallback values exist in `usePrayerTimes.js` if fetch fails.
5. **Donorbox**: Embed iframe; donors complete payment on-site. Account is owned by the masjid.

## Adding a Shopify store

The site doesn't have e-commerce yet. To add a Shopify store:

### Option A: Embed via Shopify Buy Button (simplest)
1. In Shopify admin: Sales channels → Buy Button → create button → copy embed code
2. Create new route `/shop` in `App.jsx`
3. New page `pages/ShopPage.jsx` that injects the embed script
4. Add nav link in `components/Header.jsx` NAV_LINKS array

### Option B: Storefront API (custom UI, recommended for branded experience)
1. In Shopify admin: Apps → Develop apps → Create app → enable Storefront API
2. Get `Storefront access token` (public, safe in client code)
3. Install: `npm install @shopify/storefront-api-client` or use plain fetch
4. Build `pages/ShopPage.jsx` with product grid that matches the emerald/gold brand
5. Use Shopify's checkout (don't rebuild it) — redirect to `checkoutUrl` from the API

### Option C: Hydrogen (Shopify's React framework)
Heavier; only do this if planning a full e-commerce experience. Would mean restructuring as a Remix app.

**Match the existing design**: Use `bg-emerald-deep`, `text-gold`, `font-heading`, fade-up animations, and the same card styles you see in `Services.jsx` / `Events.jsx`.

## Contacts

- Site owner / GitHub admin: Muhammad Malik (malikDINX87)
- Masjid contact: themuslimhouseflint@gmail.com / (810) 513-5422
- Imam: Hanafi Abdul-Malik
