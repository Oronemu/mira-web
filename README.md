# mira-web

Static marketing site for **Mira — Offline AI Journal**, deployed to GitHub Pages at [mira-diary.com](https://mira-diary.com).

Built with [Astro 4](https://astro.build), [Tailwind CSS 3](https://tailwindcss.com), MDX, and a hand-tuned glassmorphism design system that mirrors the iOS app's Liquid Glass aesthetic.

This is a standalone repo. The Mira iOS source lives in a sibling folder (`../Mira`) — only used for one-shot legal-text sync (see below).

---

## Stack at a glance

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 4 (static output) | Zero-JS by default, perfect for marketing + content |
| Styling | Tailwind 3 + custom CSS | Design tokens in `tailwind.config.mjs`, glass utilities in `global.css` |
| Content | Astro Markdown + MDX | Privacy/Terms render straight from canonical `.md` |
| Fonts | Fraunces + Inter via [bunny.net](https://fonts.bunny.net) | No Google tracking, GDPR-friendly |
| i18n | Astro built-in (`en` default, `ru`) | `/` for EN, `/ru/` for RU |
| Hosting | GitHub Pages (Actions deploy) | Free, fast, custom domain via CNAME |
| Domain | `mira-diary.com` | Apex + `www` |

No analytics, no third-party trackers, no cookies. The site mirrors the app's privacy posture.

## Local development

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Project structure

```
mira-web/
├── astro.config.mjs           Astro + i18n + integrations
├── tailwind.config.mjs        Design tokens (colors, type, glass shadows, animations)
├── tsconfig.json              Strict TS, paths alias `~/*`
├── scripts/sync-legal.mjs     Manual sync of legal markdown from ../Mira (sibling iOS repo)
├── .github/workflows/
│   └── deploy.yml             Build + publish to GitHub Pages on every push to main
├── public/
│   ├── CNAME                  mira-diary.com — required for GH Pages custom domain
│   ├── favicon.svg            Generated mark
│   ├── apple-touch-icon.svg
│   ├── og-image.svg           Open Graph preview card
│   └── robots.txt
└── src/
    ├── consts.ts              Single source of truth: domain, email, App Store URL
    ├── i18n/
    │   ├── ui.ts              All UI strings, EN + RU
    │   └── utils.ts           Path helpers
    ├── styles/global.css      Tailwind layers + glass utilities + mood orbs + grain
    ├── layouts/
    │   ├── BaseLayout.astro   <html>, head, fonts, MoodOrbs, Header, Footer
    │   └── LegalLayout.astro  Privacy/Terms — wraps markdown in glass card
    ├── components/
    │   ├── Header.astro       Glass nav, sticky
    │   ├── Footer.astro       Legal links, support email, lang switch
    │   ├── LangSwitch.astro   EN ⇄ RU pill
    │   ├── MoodOrbs.astro     3 drifting blurred orbs + grain overlay
    │   ├── ScrollReveal.astro IntersectionObserver wiring for `.reveal`
    │   ├── Hero.astro
    │   ├── PhoneMockup.astro  CSS-only iPhone mockup with sample journal UI
    │   ├── FeatureGrid.astro
    │   ├── Philosophy.astro
    │   ├── PrivacyHighlights.astro
    │   ├── AICard.astro
    │   ├── FAQ.astro
    │   └── DownloadCTA.astro
    ├── content/legal/         Privacy + Terms markdown (committed; refresh via npm run sync-legal)
    └── pages/
        ├── index.astro        EN landing
        ├── privacy.astro      EN privacy policy
        ├── terms.astro        EN terms of use
        ├── support.astro      EN support page
        ├── 404.astro
        └── ru/
            ├── index.astro    RU landing
            ├── privacy.astro
            ├── terms.astro
            └── support.astro
```

## Updating content

| Want to change | Edit |
|---|---|
| App Store URL (once you have one) | `src/consts.ts` → `SITE.appStoreUrl` |
| Support email | `src/consts.ts` → `SITE.supportEmail` |
| UI copy in any language | `src/i18n/ui.ts` |
| Privacy policy or Terms | edit the `.md` files in `src/content/legal/` directly, *or* update them in the iOS repo (`../Mira/PRIVACY.md` etc.) and run `npm run sync-legal` |
| Hero/Features/FAQ copy | the corresponding `*.astro` component (some keys live there too) |
| Colors and design tokens | `tailwind.config.mjs` + CSS variables in `src/styles/global.css` |

### Syncing legal text from the iOS repo

The iOS app and the website both publish the same Privacy Policy and Terms of Use. The iOS repo at `../Mira` is the canonical source. To pull fresh text into this repo:

```bash
npm run sync-legal
git diff src/content/legal/   # review the changes
git commit -am "docs: sync legal from iOS repo"
```

If `../Mira` doesn't exist, the script tells you what to do.

## Build & deploy

The site auto-deploys via GitHub Actions on every push to `main`. Workflow: `.github/workflows/deploy.yml`.

Manual deploy:
```bash
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally to sanity-check
```

## DNS setup for `mira-diary.com`

In your domain registrar's DNS panel, point the apex and `www` to GitHub Pages:

**Apex (`@`) → 4 A records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**`www` → CNAME:** `oronemu.github.io`

Then in the GitHub repo:
1. **Settings → Pages**
2. Set **Source** to *GitHub Actions* (the workflow handles the rest)
3. Set **Custom domain** to `mira-diary.com`
4. Wait a few minutes for GH to verify DNS, then tick **Enforce HTTPS**

The `public/CNAME` file ensures the custom domain isn't reset on each deploy.

## First-time setup checklist

```bash
# from /Users/ivan/Desktop/mira-web (or wherever this lives)
git init
git add -A
git commit -m "feat: initial marketing site"
gh repo create oronemu/mira-web --public --source=. --remote=origin --push
# In the GitHub web UI:
#   Settings → Pages → Source: GitHub Actions
#   Settings → Pages → Custom domain: mira-diary.com (after DNS propagates)
```

## Design notes

- **Type scale** uses Fraunces (variable: `opsz`, `wght`, `SOFT`) for editorial headings, Inter for body — matches the app's quiet-but-warm feel.
- **Glass surfaces** use `backdrop-filter: blur(40px) saturate(180%)` with an inset highlight at the top edge to mimic real Liquid Glass.
- **Mood orbs** are large blurred radial gradients with a slow GPU-accelerated drift; `prefers-reduced-motion` shuts them down.
- **No external icon library** — every icon is an inline SVG.
- **No JS framework** — only Astro components, a `<script>` tag for IntersectionObserver and theme-flash prevention, and Astro View Transitions.

## Adding new content

To add a new section to the landing page, create `src/components/MyNewSection.astro`, then import and place it in `src/pages/index.astro` and `src/pages/ru/index.astro`. Pass `locale` so the same component renders both languages.

## License

Marketing copy and brand assets © 2026 Ivan Rovkov.
