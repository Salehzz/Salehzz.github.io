# Salehzz.github.io

Personal academic website for Saleh Zare Zade, built for GitHub Pages with static HTML, CSS, and minimal vanilla JavaScript.

## Pages

- `index.html`: biography, selected publications, awards, and contact details
- `research.html`: research interests, experience, and technical background
- `publications.html`: full publication list with client-side status filters
- `projects.html`: project-oriented summaries of the publication record
- `cv.html`: embedded and downloadable PDF curriculum vitae

Shared presentation and behavior live in `styles.css` and `script.js`. `theme.js` applies and manages the saved light/dark preference. The local resume source is ignored in `Resume/`; the publishable PDF is `assets/files/CV.pdf`, and the profile photograph is `assets/images/profile.jpg`.

## Update the public CV

The standard `Resume/main.tex` build keeps private contact details for Overleaf. To build the public version without the phone number and update the website PDF, run this from the repository root:

```sh
./scripts/build-public-cv.sh
```

Add new papers and make other resume changes in `Resume/main.tex` as usual. The public build loads the complete file and removes only the phone number, so new publications appear in both CV versions without maintaining a second resume.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

No build step or package installation is required.
