# Project notes

- This is a static HTML/CSS site; there is no package manifest, build step, or automated test suite.
- Serve locally from the repository root with `python3 -m http.server 8000 --bind 127.0.0.1`.
- `index.html` is the portfolio homepage. `style.css` is shared with the articles under `lovdata/`; scope homepage-specific styles under `.portfolio`.
- Preserve the existing Raleway typeface, dark teal/green palette, project copy, and screenshots when refreshing the design.
- Verify changes with `git diff --check` and checks that local assets and section anchors resolve.
- The user will manually inspect the design in their browser. Do not take screenshots or run automated visual browser checks unless explicitly requested; provide the local preview URL instead.
