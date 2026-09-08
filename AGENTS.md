# AGENTS.md

Nuxt 4 marketing site for Rongta Bangladesh (POS/thermal printers). Minimal footprint — no tests, no lint, no CI.

## Commands

```bash
npm install    # install deps (runs `nuxt prepare` via postinstall)
npm run dev    # dev server at localhost:3000
npm run build  # production build
npm run preview # preview production build
```

No lint, typecheck, or test scripts exist. No `.env` files required for local dev.

## Architecture

- **Nuxt 4** with `app/` directory convention (pages, components, app.vue all live under `app/`)
- **Tailwind CSS** via `@nuxtjs/tailwindcss` module — no `tailwind.config.*` file, config is module-default
- **SEO** via `@nuxtjs/seo` module
- **No TypeScript** in app code (all `<script setup>` without `lang="ts"`)

### Data fetching

All product/brand data comes from a remote API: `https://admindash.comcitybd.com/api/`

- `server/api/brands/[limit].ts` — server-side proxy for brand listings
- `Hproduct.vue` — client-side fetch (`server: false`) for homepage featured products
- `product/index.vue` — server-side fetch for product listing
- `product/[slug].vue` — fetches single product by slug
- `search/[data].vue` — client-side search via `/api/customsearch/Rongta/{query}`

Contact form submits to Formspree (`https://formspree.io/f/mojlvdbj`).
Footer newsletter uses `https://submit-form.com/eNqzBhtY`.

### Layout

`app/app.vue` renders: `Header` (desktop, `hidden lg:block`) → `Mobilenav` (mobile, `block lg:hidden`) → `NuxtPage` → `Footer`.

### Pages

| Path | File |
|------|------|
| `/` | `app/pages/index.vue` |
| `/about` | `app/pages/About.vue` |
| `/product` | `app/pages/product/index.vue` |
| `/product/:slug` | `app/pages/product/[slug].vue` |
| `/search/:data` | `app/pages/search/[data].vue` |
| `/solution` | `app/pages/Solution.vue` |
| `/contact` | `app/pages/Contact.vue` |
| `/faq` | `app/pages/Faq.vue` |
| `/privacy` | `app/pages/Privacy.vue` |

### Gotchas

- `Footer.vue` uses **Options API** while all other components use `<script setup>` — keep existing style when editing, don't force-mix.
- Some components explicitly import `useFetch` from `#app` or `useRoute` from `vue-router` — Nuxt auto-imports these, but existing code does it explicitly. Follow the file's existing convention.
- `product/[slug].vue` "Buy Now" link points to the API URL directly, not a checkout page.
- No `public/sw.js` functionality appears wired up — service worker files exist but aren't registered in app config.
