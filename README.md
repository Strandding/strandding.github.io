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

Edit both language pages together and keep the publication titles and author order consistent. Use “Preprint · Under review” / “预印本 · 在投” for submitted preprints, without naming the target venue. Replace each CV with the corresponding new PDF using the same filename; update `cv.pdf` when the English CV changes. Update the visible footer date when content changes.

GitHub Pages serves the repository root on `main`. `.nojekyll` keeps the site buildless. Canonical URLs, language alternatives, and `sitemap.xml` identify the two language versions.

The sidebar drawing only responds to a mouse on desktop, respects reduced-motion preferences, and stops requesting frames once it settles. It does not replace the cursor, move text, or collect pointer data. A static SVG remains when JavaScript is disabled; the ornament is hidden on narrow screens and in print.

## Publication sources

- SlimKV: https://aclanthology.org/2026.emnlp-main.983/
- SlimKV preprint: https://arxiv.org/abs/2610.02953
- Official EMNLP program: https://2026.emnlp.org/program/
- SlimKV benchmarks: https://github.com/Strandding/SlimKV#decode-speed. The homepage uses the 128K-context results for Llama-3.1-8B-r4, t8f4, BF16, batch size 1, FA2 on NVIDIA H20, compared with full KV. Attention speedup is 16.58 / 5.32 ≈ 3.12×; end-to-end decoding throughput is 96.74 / 46.43 ≈ 2.08×. These measurements exclude prefill, compilation, and graph capture. The repository's 256K capacity probe is not used for the homepage headline.
- BitsMoE: https://arxiv.org/abs/2606.00079
- Harness Compilation: https://arxiv.org/abs/2610.11231. Under-review status follows the author's public OpenReview screenshot, supplied in November 2026.
- Personal education, experience, and BitsMoE's under-review status follow the author's October 2026 CVs.
- News dates: arXiv v1 submissions are October 2, 2026 (SlimKV) and October 8, 2026 (Harness Compilation). The SlimKV news date refers to its preprint release, not the acceptance notification. Tencent's start and the NTU visit's end are both June 2026, as recorded in the CVs; no day is specified.
