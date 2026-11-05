# Jeremy Hamann, design portfolio

Static portfolio site built with [Astro](https://astro.build), rebuilt from the Figma design file and the Figma Sites version at jeremyhamann.co. It deploys to GitHub Pages on every push to `main`.

## Run it locally

Needs Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

| What | Where |
| --- | --- |
| Design tokens (colors, type sizes, spacing) | `src/styles/global.css` |
| Project titles, blurbs, tags, card images | `src/data/projects.ts` |
| Home, About, Resume | `src/pages/index.astro`, `about.astro`, `resume.astro` |
| Case studies | `src/pages/project-*.astro` (one file each, URLs match the old site) |
| Shared pieces (nav, footer, case study sections) | `src/components/` |
| Images | `src/assets/<page>/`, optimized to WebP at build time |
| Animated CommSec clips | `public/media/` |

To change copy, edit the page file directly. To add a case study, add an entry in `src/data/projects.ts`, put its images in `src/assets/<slug>/`, and copy an existing `project-*.astro` page as a starting point.

## URLs

All of the old Figma Sites URLs still work. `/home-table-view` redirects to `/?view=table` (the home page's table layout) and `/mobile-nav` redirects to `/`, since both are now states of the home page rather than pages.

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. One-time setup: in the repo's Settings → Pages, set Source to "GitHub Actions".

Until a custom domain is set, the site serves from `https://jeremyhamann87.github.io/design-portfolio/`. To move jeremyhamann.co over, add the domain under Settings → Pages → Custom domain and point DNS at GitHub Pages. The workflow picks up the new base path on its own.
