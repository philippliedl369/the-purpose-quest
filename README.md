# The Purpose Quest

A home for projects and concepts, researched carefully and designed to be beautiful.

Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/the-purpose-quest/
npm run build     # static output in dist/
npm run preview   # serve the build locally
```

Requires Node 22.12 or newer.

## Structure

```
src/
  styles/global.css      design tokens and shared styles
  layouts/Base.astro     page shell: fonts, meta, header, footer
  components/            header, footer, landscape illustration, charts
  data/projects.ts       project index
  data/living-place.ts   figures and chart data for the Costa Rica project
  pages/                 one file per route
```

## Adding a project

1. Add an entry to `src/data/projects.ts`.
2. Create `src/pages/projects/<slug>.astro`, using the Costa Rica page as a template.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
In the repository settings, set **Pages → Source** to **GitHub Actions** once.

With a custom domain, set `site` in `astro.config.mjs` to the domain and `base` to `'/'`.
