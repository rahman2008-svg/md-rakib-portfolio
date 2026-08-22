# MD Rakib Islam — Gamer & Student Portfolio

A static, dependency-free personal portfolio for **MD Rakib Islam** — Gamer + Student, Saidpur City, Bangladesh. Built with plain HTML5, CSS3 and vanilla JavaScript only.

## Structure

```
md-rakib-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/        ← add rakib-01.jpg … rakib-10.jpg here
│   └── favicon.png
└── README.md
```

## Adding photos

Drop real photos into `assets/images/` using these exact filenames:

```
rakib-01.jpg   (used as the hero photo)
rakib-02.jpg   (used in the About section)
rakib-03.jpg … rakib-10.jpg   (used in the Gallery)
```

Any filename that is missing is skipped automatically — the hero and About frames fall back to an "RI" monogram, and gallery slots simply collapse — so the site never shows a broken image icon. No code changes are needed once the files are in place.

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploying to Render (Static Site)

1. Push this folder to a Git repository.
2. In Render, create a **New Static Site** and connect the repo.
3. Build command: leave empty.
4. Publish directory: `.`
5. Deploy.

All assets use relative paths, so no further configuration is required.

## Editing content

- **Games, gaming interests, achievements, timelines, gallery order, and social links** are all defined as plain data objects near the top of `script.js` — edit the values there and the page re-renders them automatically.
- **Verified gaming stats** (UID, rank, clan, device, socials like YouTube/Discord, etc.) have a ready `optionalGamingData` object in `script.js`. Fill in real values there and extend the gaming dashboard markup in `index.html` to display them — nothing appears until real data is supplied.
- **Achievements** stay hidden site-wide until entries are added to the `achievements` array in `script.js`.

## Notes

- Game entries (Free Fire, PUBG, Clash of Clans, E-Football) use original CSS/SVG artwork only — no copyrighted logos or game assets are included.
- Respects `prefers-reduced-motion` throughout.
- No backend, database, or build tooling of any kind — pure static files.
