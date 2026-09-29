# The Purpose Quest: working notes

Public website presenting projects, concepts and explorations. Independent from any other site.

## Languages
- English is the default (served at `/`), German at `/de/`, Spanish at `/es/`. Every page exists in all three.
- Interface strings: `src/i18n/ui.ts`. Page content: `src/content/` (one file per language for long pages, e.g. `src/content/agroecology/{en,de,es}.ts`). Language-neutral data (numbers, months, colours): `src/data/`.
- The English object defines the shape; TypeScript enforces that German and Spanish match it.
- Code comments, README and commit messages are in English.

## Content rules
- Explorations are informative: knowledge, techniques, insights. They do not plan a specific site, community or household.
- Every figure must trace to the research behind it. For agroecology that is the kreislauf-projekt repository (report "Symbiotischer Anbau und Tiere Costa Rica" and its research notes).
- Statements rated low confidence in the research carry the estimate label (`.estimate`). Examples from outside Costa Rica are named as such.
- Do not publish: specific candidate sites or land, material from third-party projects, personal data.
- Generated images must be labelled as such when shown.

## Design
- Warm editorial base: cream canvas, Fraunces (display) + Inter (body), earth-green and bloom-yellow accents.
- Dark "band" sections for featured content, structured data blocks with hairlines.
- Charts are HTML/CSS or inline SVG components fed from `src/data/`, never images, so figures stay exact and editable.
- Tokens live in `src/styles/global.css`; change values there, not in components.
- The logo mark lives in `src/components/Logo.astro`; concepts are explored in `labs/` (not deployed).
- Check every page at 390 px and 1440 px width in all three languages; no horizontal page scroll.

## Links
- Internal links go through `localizedPath()` from `src/i18n/config.ts`, which also handles the GitHub Pages base path.
