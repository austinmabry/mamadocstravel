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
| `_headers` | Cloudflare Pages security/cache headers |

## Adding a physician

1. Open `creators.js`.
2. Copy one of the existing objects in the `CREATORS` array and paste it at the end.
3. Fill in her details. Only `name` and `site` are required; drop any other field you don't have.
4. (Optional) Put a square headshot in `assets/creators/` and set `photo: "assets/creators/her-name.jpg"`. Without a photo a monogram avatar is shown.
5. Commit and push to `main` — Cloudflare redeploys automatically.

Supported social keys: `instagram`, `tiktok`, `youtube`, `facebook`, `podcast`, `website`.

## Deploying to Cloudflare Pages (free)

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repository.
2. Production branch: `main`. Framework preset: **None**. Build command: *(leave empty)*. Build output directory: `/`.
3. Save and deploy. Then under **Custom domains** add `mamadocstravel.com` and `www.mamadocstravel.com` (Cloudflare fills in the DNS records for you if the domain is already on Cloudflare).

## Local preview

Open `index.html` in a browser, or run any static server, e.g. `python3 -m http.server 8080`.
