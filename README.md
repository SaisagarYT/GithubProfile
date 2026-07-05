# README.builder — GitHub Profile Generator

Build a stunning GitHub profile README in seconds. Pick a theme, fill in your details, and get real working markdown — no backend, no login, no build step required.

---

## What it does

You fill in a form on the left. The right side shows a live preview of exactly how your `README.md` will look on GitHub. When you're happy, copy the markdown and paste it into a file called `README.md` inside a repository named exactly the same as your GitHub username.

---

## Features

### Themes
11 built-in color themes, each with matching banner color, stats card theme, streak theme, activity graph theme, and section styles:

| Theme | Style |
|---|---|
| Midnight Wave | Deep blue / purple |
| Glass Aurora | Soft pastel |
| Terminal Hack | Matrix green on black |
| Sunset Gradient | Orange to pink |
| Ocean Breeze | Cyan to deep blue |
| Forest Mist | Emerald green |
| Marine Blue | Professional navy |
| Amethyst Purple | Vibrant purple |
| Apricot Coral | Warm coral / orange |
| Arctic White | Clean minimal white |
| Slate Professional | Modern dark slate |

### Banner
- 10 animated banner styles via [capsule-render](https://github.com/kyechan99/capsule-render): Wave, Soft, Rect, Rounded, Cylinder, Slice, Shark, Transparent, Egg, Venom
- Banner color automatically matches the selected theme

### Typing animation
- Rotating text lines below the banner via [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg)

### About Me
- Working on, learning, collaborating, ask me about, fun fact — each with a matching Iconify icon

### Tech Stack
- 70+ skills selectable via [skillicons.dev](https://skillicons.dev)

### GitHub Stats
5 layout options, all using [github-readme-stats-fast](https://github.com/Pranesh-2005/github-readme-stats-fast):

| Layout | Description |
|---|---|
| Side by Side | Stats + languages side by side, streak below |
| Stacked | All cards full-width stacked |
| Compact | All 3 cards in one row |
| Detailed | Full-width detailed cards |
| Grid | 2x2 grid with activity graph in fourth slot |

### Streak Stats
- Current streak, total contributions, longest streak via [streak-stats.demolab.com](https://streak-stats.demolab.com)

### Achievements
- 3-card row (Stars/Commits/PRs, Languages, Productive Time) via [github-profile-summary-cards](https://github.com/vn7n24fzkq/github-profile-summary-cards)

### Activity Graph
- Contribution area chart via [github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph)

### Social Badges
- Email, LinkedIn, Twitter/X, Instagram, YouTube, Portfolio, LeetCode, Discord
- 3 badge styles: for-the-badge, flat-square, plastic

### Extra Sections
- WakaTime coding stats (requires WakaTime account)
- Random dev quote
- Random dev joke
- Spotify Now Playing (requires OAuth setup at spotify-github-profile.vercel.app)
- Pinned repositories
- Latest blog posts (requires GitHub Actions workflow)
- Support section (Buy Me a Coffee, Ko-fi, Patreon, PayPal)
- Profile view counter
- Contribution snake animation (requires one-time GitHub Actions setup)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Icons | Iconify (MDI + Simple Icons) |
| Build | Vite (no TypeScript, plain JSX) |

No backend. No database. No authentication. Everything runs in the browser.

---

## Project Structure

```
app/
├── public/
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── favicon-16.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── TitleBar.jsx         top nav bar
│   │   ├── Hero.jsx             headline section
│   │   ├── Sidebar.jsx          all form sections (01-10)
│   │   ├── Editor.jsx           live preview + markdown tab
│   │   ├── FormSection.jsx      collapsible section wrapper
│   │   ├── FormInput.jsx        text / textarea / email / url input
│   │   ├── Toggle.jsx           on/off toggle
│   │   ├── ThemeSelector.jsx    theme grid picker
│   │   ├── SkillSelector.jsx    skill icon multi-select
│   │   ├── BadgeStylePicker.jsx
│   │   ├── BannerStylePicker.jsx
│   │   └── StatsLayoutPicker.jsx
│   ├── data/
│   │   └── themes.js            all 11 theme definitions
│   ├── utils/
│   │   ├── markdown.js          buildMarkdown() - full README generator
│   │   └── helpers.js           badge/url/clipboard utilities
│   ├── App.jsx                  root state + layout
│   ├── main.jsx
│   └── index.css                Tailwind v4 + custom properties
├── index.html                   SEO meta tags + JSON-LD schema
├── vite.config.js
└── postcss.config.js
```

---

## How the preview works

The right panel renders the generated markdown as HTML in the browser. It:

- Converts markdown headings and bold text to HTML elements
- Preserves all raw HTML blocks from the generator (the div section wrappers)
- Loads all external images live from their public APIs — same URLs that GitHub uses
- Applies theme colors to headings, links, borders, and the dot-grid background

The preview is a close approximation of GitHub's rendering — not pixel-perfect, but accurate enough to make decisions.

---

## External APIs used

All images are generated server-side by public services and embedded as `<img>` tags:

| Service | What it provides |
|---|---|
| capsule-render.vercel.app | Animated banner SVGs |
| readme-typing-svg.demolab.com | Typing animation SVG |
| github-readme-stats-fast.vercel.app | Stats card, languages card, WakaTime card |
| streak-stats.demolab.com | Streak stats card |
| github-profile-summary-cards.vercel.app | Achievement summary cards |
| github-readme-activity-graph.vercel.app | Contribution activity graph |
| skillicons.dev | Tech stack icon sprites |
| api.iconify.design | Section heading icons |
| img.shields.io | Social / support badges |
| komarev.com/ghpvc | Profile view counter |
| spotify-github-profile.vercel.app | Spotify now playing (OAuth required) |

---

## Getting started locally

```bash
cd app
npm install
npm run dev
```

Open `http://localhost:5173`

```bash
npm run build   # production build to dist/
```

---

## How to use your generated README

1. Go to GitHub and create a new repository named exactly your GitHub username
2. Create a file called `README.md` in that repository
3. Paste the copied markdown from this tool
4. Commit — GitHub renders it automatically as your profile page

For sections that require setup (snake animation, Spotify, blog posts, WakaTime), follow the instructions included inline in the generated markdown.
