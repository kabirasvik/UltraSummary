# Ultra Summary — Summary Creation Guide

This document defines **how** book summaries are created for the Ultra Summary website. Read it before writing, editing, or reviewing any summary so every entry follows the same structure, voice, and method.

---

## 1. The website in one line

> A calm, distraction-free library of book summaries. *Read less. Understand more.*

The site is a **static, data-driven app** — there is no server and no build step. All content lives in one data file (`js/data.js`) and is rendered by one script (`js/app.js`). Writing a summary = editing data. No HTML changes are needed.

### Files

| File | Role |
| --- | --- |
| `index.html` | Page shell (header, hero, library, summary dialog). Do not edit for content. |
| `styles.css` | Design system + all styling. Do not edit for content. |
| `js/data.js` | **The content source of truth.** A single `BOOKS` array of book objects. |
| `js/app.js` | Reads `BOOKS` and renders the library + summary view. Search, routing, UI. |
| `js/dictionary.js` | English→Hindi lookup for the tap-a-word feature. Fetches Wiktionary, parses Hindi meanings, caches in `localStorage`. |
| `images/covers/card/<id>.jpg` | Cover art per book (fallback: `<id>.png`). Not stored in data.js. |
| `backend/summary-guide.md` | This file. |

---

## 2. Tech conventions

- Plain JavaScript (no framework). Strings, arrays, objects in ES5-friendly style.
- `data.js` defines `const BOOKS = [ ... ];` — each entry is an object literal, one per book, separated by `,`.
- Strings are **single-quoted**. If the text contains an apostrophe (`'`), escape it as `\'` (e.g. `Bernoulli\'s Errors`).
- Optional keys can be omitted only if not applicable; **do not leave required keys missing**.
- Inline emphasis is done with `<b>...</b>` tags inside the strings (the app injects the raw HTML). Never use markdown (`**bold**`, `*italic*`) — it will render literally as text.
- After any edit to `data.js`, validate syntax:
  ```bash
  node --check js/data.js
  ```

---

## 3. Book entry schema

All books share these **required** fields. Optional fields appear only when relevant.

### 3.1 Required fields (every book)

| Key | Type | Rules |
| --- | --- | --- |
| `id` | string | kebab-case slug, e.g. `'thinking-fast-and-slow'`. Used for routing **and** the cover filename `images/covers/card/<id>.jpg`. Must match the cover file. |
| `title` | string | Book title, exact casing. |
| `author` | string | Author name. |
| `category` | string \| string[] | One or more of the 8 allowed categories (see §4). |
| `color` | string | Hex `#rrggbb`. Background of the cover placeholder / masthead. |
| `accent` | string | Hex `#rrggbb`. Accent color for that book's section. |
| `readingTime` | number | Estimated minutes to read the summary (integer, e.g. `4`). |
| `year` | number | Year of publication (integer; classical texts use an era approx, e.g. `800`). |
| `rating` | number | 0–5, one decimal (e.g. `4.6`). |
| `summary` | string | One-line blurb shown under the title in the masthead. 15–25 words, plain sentence, **no** `<b>` tags. |
| `keyIdeas` | string[] | 5–9 bullets. Core concepts of the book, each with a bolded lead term (§6.3). |
| `mainTakeaways` | string[] | 4–7 bullets. What a reader should actually remember/take from the book. |
| `practicalLessons` | string[] | 4–8 bullets. Actionable, how-to-apply takeaways. |
| `bestQuotes` | object[] | 4–6 quotes, each `{ text, cite }` (§6.7). |
| `finalTakeaway` | string | A single longer paragraph (90–170 words) synthesizing the whole book (§6.8). |

### 3.2 Optional fields (pick by book type)

| Key | Type | When to use |
| --- | --- | --- |
| `importantConcepts` | string[] | Standard glossaries / conceptual sections (used by ~28 books). Shown as "Important Concepts". |
| `chapters` | object[] | **Chapter-wise summaries** — use when the book is best summarized per chapter (e.g. The Art of War, Psycho-Cybernetics, Thinking Fast and Slow). Shown as "Chapters". §6.5. |
| `laws` | object[] | List-style content with numbered rules (e.g. The 48 Laws of Power). Shown as "The 48 Laws". §6.6. |
| `translation` | object | Vedantic / Upanishad texts with original verses. `{ translator, publisher, sanskritVerses[], verses[] }`. §6.9. |
| `status` | string | `'coming-soon'` renders a "Summary coming soon" placeholder instead of content. |

### 3.3 Field precedence (what the app actually renders)

`app.js` renders sections **in this order**, and the middle "concepts" section chooses **only one** of the three:

1. **Key Ideas** (`keyIdeas`) — always
2. **Main Takeaways** (`mainTakeaways`) — always
3. **Concepts** — picks exactly one:
   - `laws` → "Laws"
   - else `chapters` → "Chapters"
   - else `importantConcepts` → "Important Concepts"
4. **Practical Lessons** (`practicalLessons`) — always
5. **Best quotes** (`bestQuotes`) — always
6. **Translation** (`translation`) — only if present
7. **Final Takeaway** (`finalTakeaway`) — always

> So: if you add `chapters`, the app will show "Chapters" and **hide** `importantConcepts`. Do not put the same content in both.

The contents/anchor nav mirrors this order: Key Ideas → Takeaways → [Concepts/Laws/Chapters] → Lessons → Quotes → [Translation] → Final.

---

## 4. Categories

There are exactly **8** categories. Use only these strings (case-sensitive).

| Category | Focus |
| --- | --- |
| `Psychology` | Mind, habits, behavior — cognitive bias to lasting change. |
| `Business` | Building, leading, work and money frameworks. |
| `Productivity` | Focus, essentialism, getting things done. |
| `Philosophy` | Meaning, virtue, the art of living well. |
| `Science` | Big ideas from history, biology, the frontiers of knowledge. |
| `Strategy` | Power, influence, social dynamics (Machiavelli → modern psychology). |
| `Advaita` | The non-dual wisdom of Adi Shankarāchārya; path of self-realization. |
| `Upanishads` | Ancient Vedantic scriptures; Brahman and the Self. |

A book may have **multiple** categories (`category: ['Psychology', 'Business']`). Books appear under each of their categories.

### 4.1 How to choose categories wisely

Categories are the primary way readers find a book — choose them deliberately, book by book, never by rote. Rules:

1. **Judge each book on its own content**, not its region, author, or heritage. "Indian book" does not automatically mean Philosophy/Advaita/Upanishads; a history-of-philosophy survey and a practical wellness manual need different labels.
2. **Default to a single category** that is the strongest fit. Most books belong to exactly one.
3. **Use a dual category only when both labels are strong** — i.e. the book genuinely and substantially belongs to both. Do not add a second category as a default, a hedge, or because "it's kind of related."
4. **A thin framing does not justify a category.** If a topic appears only briefly (a short intro, a passing chapter), it is not a category. The category must reflect the bulk of the book's content and focus.
5. **Prefer the more specific label** when two categories could both claim a book, and order dual arrays with the dominant category first.
6. **Watch for overuse of `Philosophy` and `Science`:** not every traditional/Indian book is `Philosophy`, and a book is only `Science` if science (biology, physics, the frontiers of knowledge) is a genuine core — not because its title says "science" or it sits near other philosophy books.

Worked examples:
- A survey covering *all* Indian schools (Vedas, Upaniṣads, Buddha, Jainas, Nyāya, Vedānta, Cārvāka) → `'Philosophy'` (single; no sub-tradition dominates).
- A history of Buddhist philosophical systems → `'Philosophy'` (single).
- A practical breathwork manual (breath physiology, health, lung capacity + calming the mind, stress relief) with only a short Vedic intro → `['Science', 'Psychology']` (dual: both are core; Philosophy is not).
- A Vedantic text on self-realization → `'Advaita'` (single, the most specific fit).

---

## 5. The summary-writing method (overall plan)

Every summary follows the same **skeleton**. Write sections in this order:

1. **Read / ground in the source** — summaries must reflect the actual book (or its EPUB/text when provided). Extract the real concepts, chapter structure, and quotes; do not invent.
2. **Metadata** — title, author, category, colors, readingTime, year, rating, one-line `summary`.
3. **Key Ideas** — the conceptual spine (§6.3).
4. **Main Takeaways** — the durable messages (§6.4).
5. **Concepts / Chapters / Laws** — pick the right vehicle for this book (§6.5–6.6).
6. **Practical Lessons** — what to *do* (§6.7 in terms of lessons).
7. **Best Quotes** — real, attributable quotes (§6.7 quotes).
8. **Final Takeaway** — the closing synthesis (§6.8).
9. **Cover** — place `images/covers/card/<id>.jpg` (fallback `<id>.png`); never change an existing cover unless asked.
10. **Validate** — `node --check js/data.js`.

---

## 6. Writing style & section rules

### 6.1 Voice & tone

- **Calm, confident, plain-language** — "Read less. Understand more."
- Sentences are clear and direct. No hype, no clickbait, no fluff.
- Use **em-dashes ( — )** with spaces for asides and appositions (matches existing content).
- Use proper typographic punctuation inside strings: curly apostrophes `’` where natural, but escape `\'` in code. Existing entries mix straight escapes and typographic chars — the safe rule is **escape apostrophes in code** (`It\'s`) and otherwise write normal text.
- Be balanced and honest about the book (e.g. The Art of Seduction entry both explains and critiques).
- No comments in data; no markdown.

### 6.2 Bold lead-in convention

The signature style of this site: **each bullet starts with a bolded phrase** (`<b>...</b>`) that names the concept, followed by `:` (or `—`) and then a plain explanation.

Pattern:
```
'<b>System 1</b> operates automatically and quickly...'
'<b>WYSIATI (What You See Is All There Is):</b> System 1 uses only the information in view...'
```

Rules:
- Bold the **term** being explained, not random words.
- A short `<b>Label:</b>` followed by an explanation is the preferred pattern for concepts.
- Keep `<b>` spans short; don't bold half a sentence.

### 6.3 Key Ideas — how to write

- 5–9 items, one core idea each.
- Start with the book's fundamental framework, then its most important concepts.
- Prefer `'<b>Term:</b> explanation.'` structure.
- Mirror the book's own definitions and vocabulary.

### 6.4 Main Takeaways — how to write

- 4–7 items; the messages a reader should *retain*.
- More integrative than Key Ideas — they connect ideas rather than define terms.
- Can open with the bolded takeaway then explain.

### 6.5 Chapters (chapter-wise summaries) — how to write

Used when the book is best understood chapter by chapter. Schema:

```js
chapters: [
  {
    num: 1,
    title: 'Chapter Title',
    concept: 'One to two sentences summarizing what this chapter establishes.',
    points: [
      '<b>Point label:</b> explanation...',
      // 2–4 points per chapter
    ],
  },
  // one object per chapter, num = 1..N in order
]
```

Rules:
- Include **all** chapters in reading order (Thinking Fast and Slow has 38; The Art of War has 13).
- `num` is 1-based, sequential.
- `title` is the chapter's own title (cleaned of OCR/scanner noise if sourced from an EPUB).
- `concept` is a tight 1–2 sentence synopsis of the chapter's argument.
- `points` holds 2–4 key takeaways; each uses the bold-label pattern.
- Keep each chapter tight — a sentence or two of concept plus short bullets; the whole array is collapsible, so verbosity hides.
- If a chapter has structured sub-parts (steps, types), you may use `steps`/`types` keys — but the common format is `concept` + `points`.

### 6.6 Laws (numbered lists) — how to write

Used for list-style content:

```js
laws: [
  { num: 1, title: 'Never Outshine the Master', detail: 'Explanation...' },
]
```

- `num` 1-based, `title` the rule name, `detail` the explanation (may be omitted for some, but prefer filling it).

### 6.7 Quotes — how to write

- `{ text: '...', cite: '...' }`.
- Prefer **real, book-attributable quotes**. `cite` is usually the author; for per-chapter sources use `'Chapter N — Title'` or `'Author, on Herbert Simon'`.
- 4–6 quotes. Choose the most quoted / most characteristic lines.
- Text must match the source closely; do not paraphrase inside quote marks.

### 6.8 Final Takeaway — how to write

- A **single long paragraph** (roughly 90–170 words).
- Structure: open by naming the book and its core claim → summarize the book's main arc/parts in a few sentences → end with the balanced, lasting message ("neither… nor…"; what the reader gains).
- Use a synthesis of the whole work, not a restatement of one chapter.
- The `.final-block` renders it in the default body font at reduced opacity — keep it prose, no bullets.

### 6.9 Translation (Vedantic / Upanishad texts)

```js
translation: {
  translator: 'Swami Sivananda',
  publisher: 'Divine Life Society',
  sanskritVerses: [ 'verse 1 in Devanagari', '...' ],   // parallel to verses
  verses: [ 'verse 1 in English', '...' ],
}
```

- `sanskritVerses` and `verses` are parallel arrays (same length).
- `verses` are the English renderings; `sanskritVerses` are the Devanagari originals.
- The app renders "Translation" as its own section with a "See translation" toggle.

### 6.10 Coming-soon entries

Minimal placeholders keep a book in the library before its summary is ready:
`status: 'coming-soon'` with empty arrays and an empty `finalTakeaway`. The app shows a "Summary coming soon" panel instead of the normal sections.

---

## 7. Covers

- Cover files live at `images/covers/card/<id>.jpg` (the app tries `.jpg`, then falls back to `.png`, then to initials).
- `id` in data.js **must** match the cover filename, or the site falls back to the initials block.
- Do not change, move, or overwrite an existing cover unless explicitly asked.
- The cover is not data — it is a file; "keep the cover same as now" means leave that file alone.

---

## 8. Search behavior (know this when wording content)

The search index is built from: title, author, summary, keyIdeas, mainTakeaways, importantConcepts, practicalLessons, finalTakeaway, bestQuotes (text + cite), chapters (title + concept + points), and laws (title + detail). Wording matters: important terms should appear somewhere in the entry so the book is findable.

## 8.1 Newest-first ordering (don't forget this)

The home page sorts newest-first using `ADDED_DATES` at the bottom of `js/data.js`, and this ordering drives **both** the book order and the category-section order.

- When adding a book, **register its `id` in `ADDED_DATES` with today's date, at the very top** of the map. This is what puts the new book (and its categories) on top of the home page.
- `ADDED_DATES` order is the recency signal: for same-date books, the sort uses the position in `ADDED_DATES` (top = newest). So a book added later must be inserted *above* any other book with the same date.
- Never rely on file position in `BOOKS` for ordering — the map is the source of truth for "added" and recency.
- **The newest book's categories also rise to the top.** The home page groups books by category and orders the sections by their newest member's date (then `_order`). Because the new book is first, its categories sort to the top of the section list as well.
- `_order` is assigned from `ADDED_DATES` order (smaller = newer) in `js/data.js`, and the category-section sort in `app.js` uses the same ascending `_order`. Keep both in sync — a mismatch makes sections order backwards.
- Forgetting this step is a common mistake: the book still appears in the library, but not at the top as the newest addition.

---

## 9. Design-system notes (styling is done, do not reinvent)

All content styling already exists in `styles.css`:

- Body/paragraphs: `--font-body` (Merriweather serif), 16px, line-height 1.65.
- Headings: `--font-display` (Playfair Display).
- UI/labels: `--font-ui` (Inter).
- `--font-hand` (Schoolbell) and `--font-sketch` (Cabin Sketch) exist for decorative text — **the default body font is `--font-body`**; only apply decorative fonts deliberately.
- Sections use `.section-card`; the final takeaway uses `.final-block` (dark block, white text).
- Theme is light/dark via `[data-theme="dark"]`. Colors are tokens — always use the CSS variables, never hard-coded colors.

The implication: a content author only edits `js/data.js` — never CSS/HTML for content changes.

---

## 10. Workflow checklist (adding a new summary)

- [ ] Confirm/obtain the source (EPUB, PDF, or text) and extract real content.
- [ ] Add a new object to `BOOKS` in `js/data.js` (place near related books by category, or at the end).
- [ ] Fill all required fields (§3.1).
- [ ] Add `importantConcepts`, `chapters`, or `laws` — pick exactly one, matching the book type (§3.3).
- [ ] Add `translation` only for verse-based texts (§6.9).
- [ ] Write `keyIdeas` → `mainTakeaways` → concepts/chapters → `practicalLessons` → `bestQuotes` → `finalTakeaway` (§6).
- [ ] Verify `id` matches the cover file `images/covers/card/<id>.jpg` (§7). Do not modify an existing cover.
- [ ] **Register the added date** in `ADDED_DATES` at the bottom of `data.js` with today's date, **at the very top** of the map (§8.1). This is what puts the new book first on the home page.
- [ ] Validate: `node --check js/data.js`.
- [ ] Open the site and verify: book appears at the top, in the right category, summary sections render in order, chapters toggle works, search finds it.

---

## 11. Quick style reference (do / don't)

| Do | Don't |
| --- | --- |
| Use `<b>Term:</b> explanation.` bullets | Use markdown `**bold**` |
| Write calm, plain, accurate prose | Add hype, emoji, or marketing tone |
| Use em-dashes ` — ` with spaces | Use hyphens as dashes |
| Escape apostrophes `\'` in single-quoted strings | Leave unescaped `'` inside a single-quoted string |
| Match book facts and quotes to the source | Invent concepts or fake quotes |
| Pick one concepts vehicle (laws/chapters/concepts) | Duplicate content across them |
| Keep finalTakeaway a single synthesis paragraph | Split it into bullets |
| Validate with `node --check` | Forget to test after editing |

---

## 12. English→Hindi tap-a-word dictionary

The site lets readers tap any word in a summary and see its Hindi meaning. This is a **site feature**, not per-book content — nothing needs to be added to `data.js` for it to work.

### How it works

- **Files:** `js/dictionary.js` (lookup + parsing + cache), the popover in `index.html`, popover styling in `styles.css`, and a delegated click handler in `app.js` (`handleSummaryWordClick`, `wordAtPoint`, `renderDictMeanings`).
- **Fallback chain (every word resolves if possible):**
  1. **Wiktionary Hindi** — `https://en.wiktionary.org/w/api.php?action=parse&page=<word>&prop=wikitext&format=json&origin=*`; parses Hindi translation templates (`{{t+|hi|…}}`, `{{tt|hi|…}}`, etc.) into Devanagari + optional `tr=` transliteration.
  2. **Wiktionary English** — parsed from the *same* response (`==English==` section definitions, `# ` lines; strips label templates and wiki links). No extra request.
  3. **Google Translate** — guaranteed Hindi when Wiktionary has no Hindi: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=<word>` (CORS `*`, no key). Only accepted if the result contains Devanagari and differs from the input (rejects echo for made-up words).
  4. **Wikipedia summary** — only when Wiktionary has no page at all: `https://en.wikipedia.org/api/rest_v1/page/summary/<word>?redirect=true` (CORS-friendly; shows `description` + `extract`).
- **Result shape:** `{ hindi: [{word, transliteration, source?}], english: [string], wikipedia: {title, description, extract} }` — any subset may be present. Google-provided Hindi items carry `source: 'google'` so the UI labels the section "Hindi · Google".
- **Cache:** results are cached in-memory and in `localStorage` under a versioned key (`dict-v<N>-<word>`, `CACHE_VERSION`). Bump `CACHE_VERSION` in `dictionary.js` whenever the lookup logic changes so stale entries refresh.
- **UX:** tap/click a word in the summary body → popover near the cursor shows labelled **Hindi / English / Wikipedia** sections (up to 5 Hindi, 3 English, 1 Wikipedia); closes on outside click, the × button, scroll, or closing the summary.

### Attribution

Meanings come from Wiktionary and are shown with a "from Wiktionary · CC BY-SA" credit in the popover footer. Keep that attribution line intact.

### When editing summaries

- The feature works on any rendered summary text automatically — no per-book setup.
- For a cleaner result, keep prose in normal English words (Wiktionary coverage is best for common words); rare, invented, or highly technical terms may return "No Hindi meaning found", which is an acceptable graceful fallback.
- Validate after any change: `node --check js/app.js js/dictionary.js`.
