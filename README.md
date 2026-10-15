# Rifqi Afta Ronanda — IT & AI Engineering Portfolio

A responsive React + JavaScript portfolio based on the ten-slide **IT & AI Engineering Portfolio — Rifqi Afta Ronanda**, supplemented with experience and selected Dicoding courses from the public LinkedIn profile.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

```bash
npm test
npm run build
```

Vite writes the production build to `dist/`. Relative asset paths support GitHub Pages subdirectories and other static hosts.

## Features

- Eight case studies with Problem → Role → Action → Output and evidence links.
- Project filtering and accessible native dialog detail views.
- Ten-slide presentation with the same primary slide text and order as the source deck: cover, profile, eight projects.
- Previous/next, arrow keys, Page Up/Down, Space, Home/End, slide selector, fullscreen, and shareable `#present/3` slide links.
- Responsive layouts with scrollable slides on smaller screens.
- Profile, experience, education, selected courses and side projects.

## Edit content

`src/data.js` is shared by the website and presentation. Edit projects, biography, links, experience and certificates there. The presentation follows the deck's primary content and order, with an adapted web design rather than pixel-identical slide artwork. No placeholder screenshots are presented as real project outputs; the waveforms are decorative illustrations. The source slide deck remains unchanged.

Sources read on 15 October 2026:
- Portfolio: https://drive.google.com/file/d/1yHNebXQSCIS8r-n3TrIK99TvBIfHdunKKlgpjxYriBY
- LinkedIn: https://www.linkedin.com/in/rifqiaftaronanda

Research and prototype limitations remain visible. The private surveillance repository and notebook are not linked publicly. LinkedIn course names are historical learning records, not a claim that every credential remains active. No unverified production impact or field accuracy is claimed. Editorial draft instructions and internal review notes from the deck are not visitor-facing content.

## Deployment

Upload `dist/` to a static host after `npm ci && npm run build`. For GitHub Pages, the included manual workflow uses GitHub Actions. First select **Settings → Pages → Build and deployment → Source: GitHub Actions**, then run **Deploy portfolio to GitHub Pages** in the Actions tab. This setting is not changed automatically by this project.

A separate private Sites preview is managed in the working checkout. Its hosting configuration is not required for GitHub Pages.
