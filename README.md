# Saltvedt

Torstein Saltvedt’s personal portfolio and articles, hosted on [GitHub Pages](https://docs.github.com/en/pages) at [saltvedt.net](http://saltvedt.net/).

## How it works

This is a static site written in plain HTML and CSS. There is no package installation, application server, or local build step.

GitHub Pages can use Jekyll as part of its default publishing process, but this repository does not contain a Jekyll configuration, Liquid templates, or pages with YAML front matter. You do not need Ruby or Jekyll to work on the site.

The pages load Bootstrap CSS and Google Fonts from external services. The homepage uses Raleway with a dark teal and green palette.

## Preview locally

Open `index.html` directly in your browser. Refresh the page after editing HTML or CSS. An internet connection is needed to load the external stylesheets and fonts.

For an optional HTTP preview, run this from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:8000>. Stop the server with `Ctrl+C`.

Direct-file previews are sufficient for visual inspection, but root-relative links such as the header’s `/` link require an HTTP server to behave as they do on the live site.

## Repository layout

- `index.html` — portfolio homepage and project links.
- `style.css` — shared styles for the homepage and articles. Homepage-specific rules are scoped under `.portfolio`.
- `*.png` — project screenshots and favicon.
- `lovdata/` — articles and supporting documents about Lovdata.
- `CNAME` — the GitHub Pages custom domain, `saltvedt.net`.
- `AGENTS.md` — project conventions for coding agents.

## Publishing

The repository is `saltvedt/saltvedt.github.com`, using GitHub’s older personal-site repository naming convention. The custom domain is recorded in `CNAME`.

GitHub Pages deployment settings are managed in the repository’s **Settings → Pages**. Check those settings for the publishing branch and directory; they are not specified by a workflow in this repository. Push changes to the configured publishing source to update the site.

## Verification

There is no automated test suite. Before publishing:

- Run `git diff --check` to catch whitespace errors.
- Inspect the site manually in a browser at desktop and mobile widths.
- Check project links, section navigation, and images.
- If changing shared CSS, also check the articles under `lovdata/`.
