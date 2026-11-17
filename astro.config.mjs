// @ts-check
import { defineConfig } from 'astro/config';

// The site's home is https://www.jeremyhamann.co, served from "/".
// The GitHub Pages workflow sets SITE_URL and BASE_PATH from the repo's Pages settings, so
// once the custom domain is saved there the build uses it automatically. Until then it
// keeps building for jeremyhamann87.github.io/design-portfolio, so nothing breaks in between.
const site = process.env.SITE_URL || 'https://www.jeremyhamann.co';
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
    // The advisor dashboard case study was replaced by the MAI advisor portal.
    '/project-3-advisor-dashboard': withBase('/project-3-mai-advisor-portal'),
  },
});
