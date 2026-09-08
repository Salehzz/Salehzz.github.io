# Salehzz.github.io

Personal academic website for Saleh Zare Zade, built for GitHub Pages with static HTML, CSS, and minimal vanilla JavaScript.

## Pages

- `index.html` — biography, selected publications, awards, and contact details
- `research.html` — research interests, experience, and technical background
- `publications.html` — full publication list with client-side status filters
- `projects.html` — project-oriented summaries of the publication record
- `cv.html` — embedded and downloadable PDF curriculum vitae

Shared presentation and behavior live in `styles.css` and `script.js`. The local resume source is ignored in `Resume/`; the publishable PDF is `assets/Saleh-Zare-Zade-CV.pdf`.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

No build step or package installation is required.
