
# Web4application — Branded Project Knowledge Base

This build includes:
- Branded neon-teal theme and ChatGPT5 Mini logo (assets/gpt5-mini-logo.png)
- Auto-linking to GitHub org `Web4application` for repos/apps
- Domain auto-detection and linking
- Live search and responsive layout

## Preview locally
```bash
python3 -m http.server 8080
# then open https://127.0.0.1:8080
```

## Deploy
Push to GitHub and enable Pages, or drop into Vercel/Netlify — no build step required.

Edit `data.json` to change content. The app reads `window.__SITE_DATA__` embedded in `index.html`.
