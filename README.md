[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# E-Cell Website

Live: [ecell.iiita.ac.in](http://ecell.iiita.ac.in)

E-Cell (IIIT Allahabad) is the official platform showcasing our initiatives, events, mentors, and student projects. This site highlights E-Summit, timelines, collaborations, and the entrepreneurial culture at IIITA.

## ✨ Features

- Hero with typewriter intro and social links
- Sections: Works/Projects, Skills, Timeline, Contact
- Dedicated E-Summit page at `/e-summit`
- Smooth scroll and reveal animations (GSAP + ScrollTrigger)
- Responsive, mobile-first UI styled with Tailwind CSS
- Optimized assets with `next/image`

## 🧰 Tech Stack

- Next.js (React, SSG/SSR)
- TypeScript
- Tailwind CSS + SCSS modules
- GSAP (core + ScrollTrigger)
- typed.js

## 📂 Project Structure

- `components/` — UI and section components
	- `home/` — hero, projects, skills (Mentors), timeline, etc.
	- `common/` — header, menu, layout, footer, shared UI
	- `e-summit/` — sections and UI for the E-Summit page
- `pages/` — Next.js routes
	- `index.tsx` — Home
	- `e-summit/index.tsx` — E-Summit landing
- `public/` — static assets (logos, images, icons)
- `constants.ts` — site metadata, menu links, typed strings, social links, projects, timeline
- `styles/` — global styles

## ⚙️ Configuration

- Update site metadata and links in `constants.ts`
	- `METADATA` — title, description, siteUrl
	- `MENULINKS` — menu items with `name`, `href`, and optional `ref`
	- `SOCIAL_LINKS` — social profiles used in the hero and footer
	- `PROJECTS`, `TIMELINE` — content data

## 🚀 Run Locally

1) Install dependencies

```bash
npm install
```

2) Start the dev server

```bash
npm run dev
```

Visit http://localhost:3000

## 🧪 Linting

```bash
npm run lint
```

## 📦 Build

```bash
npm run build
```

## 🔗 Key Links

- Home: `/`
- E-Summit: `/e-summit`
- Contact: footer mailto (see `components/common/footer.tsx`)

## 🙌 Credits

- Base concept inspired by modern portfolio layouts; adapted for E-Cell
- Icons and images under respective licenses (see `public/`)

## 📜 License

MIT — see `LICENSE`.
