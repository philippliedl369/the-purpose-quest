# The Purpose Quest: working notes

Public website presenting projects and concepts. Independent from any other site.

## Language
- All site copy, code comments, README and commit messages are in English.

## Content rules
- Every figure on the site must trace to the research behind the project. For the Costa Rica project that is the kreislauf-projekt repository (report "Symbiotischer Anbau und Tiere Costa Rica" and the findings files).
- Statements rated low confidence in the research are shown with the "Estimate" label (`.estimate`).
- Do not publish: specific candidate sites or land, material from third-party projects, personal data.
- Generated images must be labelled as such when shown.

## Design
- Warm editorial base: cream canvas, Fraunces (display) + Inter (body), earth-green and bloom-yellow accents.
- Dark "band" sections for featured content, structured data blocks with hairlines.
- Charts are HTML/CSS or inline SVG components fed from `src/data/`, never images, so figures stay exact and editable.
- Tokens live in `src/styles/global.css`; change values there, not in components.
- Check every page at 390 px and 1440 px width; no horizontal page scroll.

## Links
- Internal links go through `url()` from `src/lib/url.ts` so the GitHub Pages base path works.
