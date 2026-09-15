# Petty Bestie (mamadocstravel.com)

Landing page for **www.mamadocstravel.com** — a curated directory of women physicians who create content about points, miles and award travel.

It is a plain static site (HTML + CSS + a little JavaScript), so it deploys to Cloudflare Pages' free tier with no build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `styles.css` | Styling |
| `creators.js` | **The list of physicians** — edit this to add/remove people |
| `script.js` | Renders the cards and powers the search box |
| `assets/hero.jpg` | Desktop hero (the full composed picture; nav/buttons in it are clickable via hotspots in `index.html`) |
| `assets/hero-mobile.jpg` | Text-free crop of the hero used on phones |
| `assets/creators/` | Drop creator headshots here (optional) |
| `_headers` | Cloudflare security/cache headers |
| `wrangler.jsonc` | Cloudflare Workers config (static assets, no build step) |
| `.assetsignore` | Repo files that should not be uploaded to the site |

## Adding a physician

1. Open `creators.js`.
2. Copy one of the existing objects in the `CREATORS` array and paste it at the end.
3. Fill in her details. Only `name` and `site` are required; drop any other field you don't have.
4. (Optional) Put a square headshot in `assets/creators/` and set `photo: "assets/creators/her-name.jpg"`. Without a photo a monogram avatar is shown.
5. Commit and push to `main` — Cloudflare redeploys automatically.

Supported social keys: `instagram`, `tiktok`, `youtube`, `facebook`, `podcast`, `website`.

## Deploying on Cloudflare (free)

**Workers (recommended, uses `wrangler.jsonc`):** In the Cloudflare dashboard go to **Workers & Pages → Create → Workers → Import a repository** and pick this repo. Production branch `main`, build command *(empty)*, deploy command `npx wrangler deploy`. Every push to `main` redeploys. Under **Settings → Domains & Routes** add `mamadocstravel.com` and `www.mamadocstravel.com`.

**Pages (also works):** **Workers & Pages → Create → Pages → Connect to Git**, framework preset **None**, build command *(empty)*, build output directory `/`. Then add the custom domains.

## Local preview

Open `index.html` in a browser, or run any static server, e.g. `python3 -m http.server 8080`.
