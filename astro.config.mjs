// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// While the site lives at jeremyhamann87.github.io/design-portfolio the base is
// "/design-portfolio". Once the custom domain is pointed here, the base becomes "/".
const site = process.env.SITE_URL || 'https://jeremyhamann.co';
const base = process.env.BASE_PATH || '/';
const withBase = (p) => `${base.replace(/\/$/, '')}${p}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects: {
    // Old Figma Sites pages that are now states of other pages.
    '/home-table-view': withBase('/?view=table'),
    '/mobile-nav': withBase('/'),
  },
});
