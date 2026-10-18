# Portfolio — Raed Alkurdi

One scrolling page at `/` presenting Raed as an MSc student in Complex Adaptive Systems at Chalmers, focused on Machine Learning and AI. Uses sample content you can replace later.

## Look and feel
- Palette "Paper & Ink": off-white paper background (#f5f3ee), soft sand surfaces (#e8e4dd), ink text (#2d2d2d / #0d0d0d). Thin rule lines, no gradients, a calm research-notebook feel.
- Headings in JetBrains Mono (code/terminal flavor), body in Work Sans.
- Small touches: section labels like `01 / projects`, a blinking cursor in the hero, subtle fade-in on scroll.

## Page sections (top to bottom)
1. **Sticky top bar** — name on the left, links that scroll to each section.
2. **Hero** — large name, title "MSc Complex Adaptive Systems @ Chalmers", one-line intro on ML & AI, buttons "View projects" and "Get in touch".
3. **Projects grid** — 6 sample cards (e.g. multi-agent research assistant, RL agent, LLM tool-use agent, graph neural network study, time-series forecasting, emergent behavior simulation). Each card: title, short description, tag chips (Agentic AI, ML, RL…), GitHub / demo links. Filter chips above the grid by tag.
4. **About & skills** — short bio plus grouped skills (Languages, ML frameworks, Agent tooling, Research areas).
5. **Experience / CV** — vertical timeline: Chalmers MSc, previous degree, sample internships/research roles, plus "Download CV" button.
6. **Contact** — email, GitHub, LinkedIn, Scholar links and a simple message form that opens your email app (no backend needed).
7. **Footer** — name and year.

## Technical details
- Rewrite `src/routes/index.tsx` with full `head()` metadata (title, description, og tags); update root defaults away from "Lovable App".
- Fonts loaded via `<link>` in `__root.tsx`; tokens set in `src/styles.css` as oklch semantic colors.
- Content kept in a single `src/content/portfolio.ts` data file so placeholders are easy to swap.
- Section components under `src/components/portfolio/`.

## Next steps after this
Send your real projects, links, bio and CV, and they'll replace the samples.
