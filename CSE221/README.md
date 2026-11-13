# RedGrid — proposal presentation

React + Vite deck for the CSE 222 (OOP Lab) project proposal. Fourteen slides, fixed
16:9 stage, light editorial theme.

## Run

```bash
npm install
npm run dev
```

## Present

| Key | Action |
| --- | --- |
| `→` `↓` `Space` | next slide |
| `←` `↑` | previous slide |
| `Home` / `End` | first / last slide |
| `N` | presenter notes |
| `F` | fullscreen |
| `R` | reset the timer |

The HUD and controls fade in when the mouse moves and hide again after a moment, so a
recording stays clean.

Jump straight to a slide with `?slide=9`.

## Export a PDF backup

Open `http://localhost:5173/?print=1`, then print to PDF (1600 × 900 pages, one per slide).

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
Enable **Settings → Pages → Source: GitHub Actions** once.

`vite.config.ts` uses `base: './'`, so the deck works from any repository sub-path.
