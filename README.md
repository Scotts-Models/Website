# Scott's Models website

The company website for Scott's Models (Mark Scott and Aaron Scott), built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages from the Scotts-Models organization's `Website` repository.

- **Pages:** Home, Projects (search, filter, sort), one page per project, About, Contact, 404.
- **Output:** plain HTML, one CSS file, one small script for the project gallery. No framework runtime, no third-party requests, about 100 KB for the home page including fonts.
- **Links are relative**, so the same build works at `https://<org>.github.io/Website/`, on a custom domain, or opened straight from disk.

## Run it locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```
npm install
npm start          # builds and serves at http://localhost:8080, rebuilding on save
npm run build      # builds once into _site/
npm run check      # checks the build: internal links, titles, one h1 per page, external-link attributes
```

To preview without a server, run `npm run build` and open `_site/index.html` in a browser.

## Add or update a project

Each project is one Markdown file in `src/projects/`. The file name becomes the page address (`howell.md` becomes `projects/howell.html`).

1. Copy an existing file, for example `src/projects/stock-trader.md`, to `src/projects/<project-name>.md`.
2. Edit the front matter at the top:

   | Field | What it is |
   |--|--|
   | `title` | Project name |
   | `status` | One of `Idea`, `Exploring`, `Active`, `Paused`, `Shelved`, `Done` (same as the repo README) |
   | `statusNote` | Optional one-line note shown next to the status |
   | `summary` | One or two sentences, shown in the gallery and as the page lead |
   | `question` | The project's research question |
   | `started`, `updated` | Dates in quotes, `"YYYY-MM-DD"` |
   | `owners` | List of names; `[]` shows "Not yet assigned" |
   | `languages`, `tags`, `tools` | Lists; `tags` become the gallery's topic filter |
   | `featured` | `1`, `2`, `3` to show on the home page in that order; `0` to leave off |
   | `folder` | Path in the Scotts-Models repo, used for "View on GitHub" once the repo is public |
   | `highlights` | Optional key figures: `value`, `label`, and `source` (the report file the number comes from) |
   | `links` | Optional related external links: `label` and `url` |

3. Write the body in Markdown with `##` headings (Why it matters, Approach, Success criteria, and so on).
4. Run `npm run build` and `npm run check`.

The project automatically appears in the gallery, its filters, the sitemap, and the previous/next links.

## Change site-wide settings

- `src/_data/site.js`: name, description, GitHub links, and two switches:
  - `github.repoPublic`: set to `true` once the Scotts-Models repo is public; project pages then link to their source folders.
  - `github.orgVisible`: set to `true` whether the footer links to the Scotts-Models organization page (on by default).
- `src/_data/people.js`: team bios, links, and email addresses. Add an email only with that person's approval.
- `src/_data/practice.js`: the decision-log excerpt, capabilities, and the decision-record count on the home page. Re-count from the repo when updating; do not estimate.

## Deploy

Deployment runs from `.github/workflows/deploy.yml` on every push to `main`.

One-time setup in the `Website` repository on GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.

The workflow builds the site with the correct public address (used for canonical links, social previews, and `sitemap.xml`), runs `npm run check`, and publishes `_site/`.

## Project layout

```
src/
  _data/           site settings, team, and home-page content
  _includes/       page layouts and shared partials (header, footer, logo, macros)
  projects/        one Markdown file per project
  assets/          CSS, gallery script, fonts (OFL licensed), social card image
  index.njk        home page
  projects.njk     project gallery
  about.njk, contact.njk, 404.njk, sitemap.njk, robots.njk
scripts/
  check-site.mjs   post-build checks
  social-card.html source for assets/img/social-card.png (render with render-social-card.py)
eleventy.config.js
```

## Why Eleventy

| Option | Fit |
|--|--|
| **Eleventy (chosen)** | Markdown per project, plain HTML output, nothing to learn beyond Markdown and front matter, builds in under a second. |
| Quarto | Matches Mark's personal site and R work, but its listing pages are less flexible for a company gallery and the toolchain is heavier for non-R contributors. |
| Astro / Next.js | Capable, but adds a JavaScript framework and more to maintain than a mostly static site needs. |
| Hand-written HTML | No build step, but every new project means editing several pages by hand. |

## Content sources

All project content comes from the Scotts-Models repository (`origin/main` as of 2026-11-12): each project's `README.md`, decision records, and reports. Team details come from Mark's public website and GitHub, and from Aaron. External links were checked on 2026-11-12.

## License

Copyright (c) 2026 Mark Scott and Aaron Scott. All rights reserved. Fonts are under the SIL Open Font License (see `src/assets/fonts/`).
