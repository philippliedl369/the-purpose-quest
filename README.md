# The Purpose Quest

A home for projects and concepts, researched carefully and designed to be beautiful.

Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/the-purpose-quest/
npm run build     # static output in dist/
npm run preview   # serve the build locally
npm run check     # type check
```

Requires Node 22.12 or newer.

## Structure

```
src/
  i18n/                  languages, routing helpers, interface strings
  content/               page texts per language (site.ts, agroecology/{en,de,es}.ts)
  data/                  language-neutral figures and chart data
  styles/global.css      design tokens and shared styles
  layouts/Base.astro     page shell: fonts, meta, hreflang, header, footer
  components/            header, footer, logo, landscape illustration, charts
  views/                 page bodies shared by all languages
  pages/                 routes: English at the root, German and Spanish under [lang]/
labs/                    design explorations, not deployed (logo concepts)
```

English is served at `/`, German at `/de/`, Spanish at `/es/`.

## Adding an exploration

1. Write the texts in `src/content/<topic>/{en,de,es}.ts` and any figures in `src/data/`.
2. Create a view in `src/views/` and two routes: `src/pages/explorations/<slug>.astro` and `src/pages/[lang]/explorations/<slug>.astro`.
3. Register it in `explorations` in `src/content/site.ts` so it appears on the home page, the index and in the footer.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
In the repository settings, set **Pages → Source** to **GitHub Actions** once.

With a custom domain, set `site` in `astro.config.mjs` to the domain and `base` to `'/'`.
