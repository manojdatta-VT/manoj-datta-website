# manoj-datta-website

Personal academic site: plain HTML/CSS/JS, no build step, no frameworks. Free to host.

## Structure
- `index.html` — About / home
- `research.html` — Publications & working papers (detailed)
- `cv.html` — CV summary + download button
- `assets/css/style.css` — all styling (light/dark theme via CSS variables)
- `assets/js/main.js` — mobile nav, dark-mode toggle, abstract expand/collapse
- `assets/files/Manoj_Datta_CV.docx` — the downloadable CV

## Preview locally before publishing

Double-click won't fully work for a multi-page site (browsers block some local file
requests). Instead, right-click `serve.ps1` → **Run with PowerShell**, then open
`http://localhost:8181/index.html` in your browser. Close the PowerShell window to stop it.

## Publish it free with GitHub Pages (you already have GitHub Desktop installed)

1. Open **GitHub Desktop** → File → New Repository.
   - Name: `manoj-datta-website` (or anything you like)
   - Local path: choose the parent of this folder, i.e. `C:\Users\manoj\OneDrive\Desktop`
   - Point it at this existing folder when prompted, or create the repo here directly.
2. Commit all files (GitHub Desktop will show them staged automatically).
3. Click **Publish repository** (top bar). Keep it **public** — GitHub Pages needs a public repo on the free plan.
4. On GitHub.com, open the repo → **Settings → Pages** → under "Build and deployment", set
   **Source: Deploy from a branch**, Branch: `main`, folder: `/ (root)` → Save.
5. Wait ~1 minute, then your site is live at:
   `https://<your-github-username>.github.io/manoj-datta-website/`

To update the site later: edit files, then in GitHub Desktop write a commit summary and click
**Commit to main**, then **Push origin**. The live site updates automatically within a minute.

## Swapping in a PDF CV (optional, recommended)

Word docx downloads work everywhere but a PDF is more universal. To add one:
1. Open `assets/files/Manoj_Datta_CV.docx` in Word → File → Save As → choose PDF →
   save it as `assets/files/Manoj_Datta_CV.pdf` in this same folder.
2. In `index.html` and `cv.html`, change `Manoj_Datta_CV.docx` to `Manoj_Datta_CV.pdf`
   in the two `href="assets/files/..."` download links.

## Photo

`assets/img/photo.jpg` is used as the circular portrait in the hero section of `index.html`.
Swap the file (same filename) to update it, or edit the `<img src="assets/img/photo.jpg">`
line in `index.html` to point elsewhere.

## Custom domain (optional)

GitHub Pages supports a custom domain for free (you pay only the domain registrar, e.g. ~$12/yr
for a `.com`). Once you have one: Settings → Pages → Custom domain, then add the DNS records
GitHub shows you at your registrar.
