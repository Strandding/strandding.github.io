# Zihan Teng — Academic Homepage

A bilingual academic homepage, published at https://strandding.github.io/.

- English: `index.html`
- 中文: `zh/index.html`
- Shared styles: `assets/style.css`
- English CV: `assets/Zihan_Teng_CV_EN.pdf`
- 中文简历: `assets/Zihan_Teng_CV_ZH.pdf`
- `cv.pdf` is a compatibility copy of the current English CV for existing links.

The site is static HTML and CSS, with an optional small pointer-responsive line drawing in the sidebar (`assets/motion.js`). Academic content, language navigation, and CV downloads work without JavaScript. No build tools, web fonts, trackers, or external assets are required.

## Local preview

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000/ or http://localhost:8000/zh/.

## Updating content

Edit both language pages together and keep the publication titles and author order consistent. Replace each CV with the corresponding new PDF using the same filename; update `cv.pdf` when the English CV changes. Update the visible footer date when content changes.

GitHub Pages serves the repository root on `main`. `.nojekyll` keeps the site buildless. Canonical URLs, language alternatives, and `sitemap.xml` identify the two language versions.

The sidebar drawing only responds to a mouse on desktop, respects reduced-motion preferences, and stops requesting frames once it settles. It does not replace the cursor, move text, or collect pointer data. A static SVG remains when JavaScript is disabled; the ornament is hidden on narrow screens and in print.

## Publication sources

- SlimKV: https://aclanthology.org/2026.emnlp-main.983/
- SlimKV preprint: https://arxiv.org/abs/2610.02953
- Official EMNLP program: https://2026.emnlp.org/program/
- Oral schedule: https://docs.google.com/spreadsheets/d/1aXGTy_7Xeh-OXIs3iJSbDpUsZ6YhbfA76b17kBZH0Yk/edit?gid=943432490&range=A1047:L1047
- BitsMoE: https://arxiv.org/abs/2606.00079
- Harness Compilation: https://arxiv.org/abs/2610.11231. ICLR 2027 submission status follows the author's public OpenReview screenshot, supplied in November 2026.
- Personal education, experience, and BitsMoE's ICLR 2027 submission status follow the author's October 2026 CVs.
