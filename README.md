# Zihan Teng — Academic Homepage

A bilingual academic homepage, published at https://strandding.github.io/.

- English: `index.html`
- 中文: `zh/index.html`
- Shared styles: `assets/style.css`
- English CV: `assets/Zihan_Teng_CV_EN.pdf`
- 中文简历: `assets/Zihan_Teng_CV_ZH.pdf`
- `cv.pdf` is a compatibility copy of the current English CV for existing links.

The site is static HTML and CSS. No JavaScript, build tools, web fonts, trackers, or external assets are required. Language navigation and CV downloads work without JavaScript.

## Local preview

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000/ or http://localhost:8000/zh/.

## Updating content

Edit both language pages together and keep the publication titles and author order consistent. Replace each CV with the corresponding new PDF using the same filename; update `cv.pdf` when the English CV changes. Update the visible footer date when content changes.

GitHub Pages serves the repository root on `main`. `.nojekyll` keeps the site buildless. Canonical URLs, language alternatives, and `sitemap.xml` identify the two language versions.

## Publication sources

- SlimKV: https://aclanthology.org/2026.emnlp-main.983/
- SlimKV preprint: https://arxiv.org/abs/2610.02953
- Official EMNLP program: https://2026.emnlp.org/program/
- Oral schedule: https://docs.google.com/spreadsheets/d/1aXGTy_7Xeh-OXIs3iJSbDpUsZ6YhbfA76b17kBZH0Yk/edit?gid=943432490&range=A1047:L1047
- BitsMoE: https://arxiv.org/abs/2606.00079
- Personal education, experience, and ICLR 2027 submission status follow the author's October 2026 CVs.
