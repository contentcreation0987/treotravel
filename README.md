# Deploying to Vercel

The project is **static HTML** — no build step, no framework, no npm install.

## Fastest path

1. Push this whole folder to a GitHub repo.
2. In Vercel: **Add New → Project → import the repo**.
3. Framework preset: **Other**. Build command: **leave empty**. Output
   directory: **leave empty** (repo root).
4. Deploy.

`index.html` at the root forwards to `ui_kits/website/index.html`, which is the
site. Everything it needs — `styles.css`, `tokens/`, `assets/`, `_ds_bundle.js`
— sits alongside it and is served as-is.

## Before you go live

This is a **design prototype**, not production code. Three things to fix first:

1. **Babel runs in the browser.** `ui_kits/website/*.jsx` is transpiled by
   `@babel/standalone` on every page load — fine for review, too slow for real
   traffic on a 3G phone. For production, precompile the JSX (Vite, esbuild, or
   any bundler) and ship plain JS. Your hard rule is "anything over 3s loses the
   user"; browser Babel alone costs about that.
2. **Replace the placeholder data.** `ui_kits/website/data.js` holds every
   price, date, seat count and phone number. `phone: '+92 300 1234567'` is a
   placeholder — put the real WhatsApp number in before anyone sees this.
3. **Compress the images.** `assets/photos/*.png` are PNG crops from
   screenshots. Convert to WebP at ~75% quality and they will drop by roughly
   80%. Replace them entirely once Treo sends originals.

## Custom domain

Vercel → Project → Settings → Domains → add `treotravels.com` (or whichever),
then point the DNS records Vercel shows you. HTTPS is automatic.

## What each folder is

| Folder | Ships to production? |
|---|---|
| `ui_kits/website/` | **Yes** — this is the site |
| `styles.css`, `tokens/` | **Yes** — the CSS the site links |
| `assets/` | **Yes** — logos, icons, photos |
| `_ds_bundle.js` | **Yes** — the compiled component library |
| `components/` | No — source for the bundle |
| `guidelines/`, `templates/`, `uploads/` | No — design documentation |

Leaving the extra folders in the repo is harmless (they are just files), but you
can delete `uploads/` before pushing — it holds the original screenshots.
