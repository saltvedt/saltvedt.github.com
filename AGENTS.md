# Project notes

- This is a static HTML/CSS site; there is no package manifest, build step, or automated test suite.
- Serve locally from the repository root with `python3 -m http.server 8000 --bind 127.0.0.1`.
- `index.html` is the portfolio homepage. `style.css` is shared with the pages under `lovdata/`; `.portfolio` supplies the shared site styling, while `.reading-page` scopes article and document styles.
- Lovdata pages retain Norwegian text and Open Sans body typography, with Raleway headings. Use relative HTML/PDF links so navigation works in direct-file previews as well as on GitHub Pages.
- Preserve the existing Raleway typeface, dark teal/green palette, project copy, and screenshots when refreshing the design.
- Verify changes with `git diff --check` and checks that local assets and section anchors resolve.
- The user will manually inspect the design in their browser. Do not take screenshots or run automated visual browser checks unless explicitly requested; provide the local preview URL instead.
