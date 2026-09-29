// @ts-check
import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://philippliedl369.github.io/the-purpose-quest/.
// With a custom domain later: set `site` to that domain and `base` to '/'.
export default defineConfig({
  site: 'https://philippliedl369.github.io',
  base: '/the-purpose-quest',
  trailingSlash: 'ignore',
});
