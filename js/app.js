/* ============================================================
   Ultra Summary - Application
   Load components, rendering, routing, and UI logic
   ============================================================ */

/* ----- Category metadata ----- */
const CATEGORY_META = {
  Psychology: 'Understand the mind, habits, and behavior, from cognitive bias to lasting change.',
  Business: 'Ideas and frameworks for building, leading, and thinking about work and money.',
  Productivity: 'Do less, better. Focus, essentialism, and the science of getting things done.',
  Philosophy: 'Timeless questions about meaning, virtue, and the art of living well.',
  Science: 'Big ideas from history, biology, and the frontiers of human knowledge.',
  Strategy: 'Power, influence, and the game of social dynamics — from Machiavelli to modern psychology.',
  Advaita: 'The non-dual wisdom of Adi Shankarāchārya, the path of self-realization.',
  'Upanishads': 'The ancient Vedantic scriptures, the direct revelations of the seers on the nature of Brahman and the Self.',
};

/* ----- Category helpers ----- */
function getCategories(book) {
  return Array.isArray(book.category) ? book.category : [book.category];
}

function categoryLinksHTML(book, cls = 'category-link') {
  return getCategories(book)
    .map(c => '<a href="#/category/' + encodeURIComponent(c) + '" class="' + cls + '">' + c + '</a>')
    .join('');
}

/* ----- State ----- */
const state = {
  books: BOOKS,
  activeCategory: 'all',
  searchQuery: '',
  currentBook: null,
  summaryOpen: false,
  previousRoute: '#/',
  previouslyFocused: null,
  mobileLayout: window.innerWidth <= 768,
};

/* ----- DOM refs ----- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const bookGrid = $('#bookGrid');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const catLinks = $$('.cat-link');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');
const clearFilters = $('#clearFilters');
const toast = $('#toast');
const toTop = $('#toTop');
const summaryView = $('#summaryView');
const summaryScrim = $('#summaryScrim');
const summaryBack = $('#summaryBack');
const summaryClose = $('#summaryClose');
const summaryCover = $('#summaryCover');
const summaryTitle = $('#summaryTitle');
const summaryAuthor = $('#summaryAuthor');
const summaryCategory = $('#summaryCategory');
const summaryBlurb = $('#summaryBlurb');
const factTime = $('#factTime');
const factYear = $('#factYear');
const factRating = $('#factRating');
const summaryAnchors = $('#summaryAnchors');
const summarySections = $('#summarySections');
const summaryProgress = $('#summaryProgress');
const statBooks = $('#statBooks');

/* ----- Toast ----- */
let toastTimer;

function coverError(img, fallbackText) {
  const base = `images/covers/${img.dataset.folder}/${img.dataset.bookId}`;
  if (!img.dataset.triedPng) {
    img.dataset.triedPng = '1';
    img.src = `${base}.png`;
    return;
  }
  img.remove();
  if (fallbackText && img.parentElement) img.parentElement.textContent = fallbackText;
}

function mountCover(container, book, folder, fallbackText) {
  container.textContent = '';
  container.style.background = book.color;
  const img = document.createElement('img');
  img.className = 'cover-img';
  img.alt = '';
  img.dataset.bookId = book.id;
  img.dataset.folder = folder;
  img.onerror = () => coverError(img, fallbackText);
  img.src = `images/covers/${folder}/${book.id}.jpg`;
  container.appendChild(img);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ----- Render ----- */
function renderLibrary() {
  const filtered = state.books.filter(book => {
    const matchCategory = state.activeCategory === 'all' || getCategories(book).includes(state.activeCategory);
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q) || book.summary.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  resultCount.textContent = `${filtered.length} title${filtered.length !== 1 ? 's' : ''}`;

  // Clean up observers from previous sections before clearing
  bookGrid.querySelectorAll('.cat-section').forEach(sec => {
    if (sec._catResizeObserver) sec._catResizeObserver.disconnect();
    if (sec._catResizeHandler) window.removeEventListener('resize', sec._catResizeHandler);
  });
  bookGrid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  // On a category page, show a flat list of that category's books
  if (state.activeCategory !== 'all') {
    bookGrid.className = 'book-grid category-list';
    bookGrid.innerHTML = filtered.map(book => renderListBook(book)).join('');
    return;
  }

  bookGrid.className = 'book-grid category-sections';

  const catOrder = ['Psychology', 'Business', 'Productivity', 'Philosophy', 'Science', 'Strategy', 'Advaita', 'Upanishads'];
  const catRank = new Map(catOrder.map((c, i) => [c, i]));
  const grouped = {};
  filtered.forEach(book => {
    getCategories(book).forEach(cat => {
      (grouped[cat] = grouped[cat] || []).push(book);
    });
  });

  const frag = document.createDocumentFragment();
  const sectionOrder = Object.keys(grouped).sort((a, b) => {
    const na = grouped[a][0], nb = grouped[b][0];
    if (nb.added !== na.added) return nb.added.localeCompare(na.added);
    if (nb._order !== na._order) return nb._order - na._order;
    return (catRank.get(a) ?? 99) - (catRank.get(b) ?? 99);
  });
  for (const cat of sectionOrder) {
    frag.appendChild(renderCategorySection(cat, grouped[cat]));
  }
  bookGrid.appendChild(frag);
}

function renderListBook(book) {
  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return `
    <div class="list-book" data-id="${book.id}" tabindex="0" role="button" aria-label="Read summary of ${book.title} by ${book.author}">
      <div class="list-book-cover" style="background:${book.color}">
        <span class="cover-initials">${initials}</span>
        <img src="images/covers/card/${book.id}.jpg" alt="" class="cover-img" data-book-id="${book.id}" data-folder="card" loading="lazy" onerror="coverError(this)">
      </div>
      <div class="list-book-body">
        <h3 class="list-book-title">${book.title}</h3>
        <p class="list-book-author">${book.author}</p>
        <div class="list-book-cats">${getCategories(book).map(c => '<span class="list-cat-chip">' + c + '</span>').join('')}</div>
      </div>
    </div>
  `;
}

function renderCategorySection(cat, books) {
  const section = document.createElement('section');
  section.className = 'cat-section';
  section.innerHTML = `
    <div class="cat-section-head">
      <h2 class="cat-section-title">${cat}</h2>
      <span class="cat-section-count">${books.length}</span>
      <div class="cat-section-nav">
        <button class="cat-arrow cat-prev" type="button" aria-label="Scroll ${cat} left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="cat-arrow cat-next" type="button" aria-label="Scroll ${cat} right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
    <div class="cat-section-scroll">
      ${books.map(book => renderBookCardHTML(book)).join('')}
    </div>
  `;

  const scrollEl = section.querySelector('.cat-section-scroll');
  const prevBtn = section.querySelector('.cat-prev');
  const nextBtn = section.querySelector('.cat-next');
  const step = () => Math.max(240, scrollEl.clientWidth * 0.75);
  prevBtn.addEventListener('click', () => scrollEl.scrollBy({ left: -step(), behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => scrollEl.scrollBy({ left: step(), behavior: 'smooth' }));

  // Enable/disable arrows based on scroll position and whether the row overflows.
  const updateArrows = () => {
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    const canScroll = maxScroll > 1;
    prevBtn.disabled = !canScroll || scrollEl.scrollLeft <= 0;
    nextBtn.disabled = !canScroll || scrollEl.scrollLeft >= maxScroll - 1;
  };
  scrollEl.addEventListener('scroll', updateArrows, { passive: true });

  // Run after the section is attached so clientWidth/scrollWidth are accurate.
  requestAnimationFrame(updateArrows);

  // Keep arrows in sync if the row's size changes (resize, lazy image load, font shift).
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(updateArrows);
    ro.observe(scrollEl);
    section._catResizeObserver = ro;
  } else {
    window.addEventListener('resize', updateArrows);
    section._catResizeHandler = updateArrows;
  }

  return section;
}

function renderBookCardHTML(book) {
  const isComingSoon = book.status === 'coming-soon';
  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  const comingSoon = isComingSoon
    ? `<span class="coming-soon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg> Coming soon</span>`
    : '';
  return `
    <div class="book-card cat-card${isComingSoon ? ' card-coming-soon' : ''}" data-id="${book.id}" tabindex="0" role="button" aria-label="Read summary of ${book.title} by ${book.author}">
      <div class="book-cover" style="background:${book.color}">
        <span class="cover-initials">${initials}</span>
        <img src="images/covers/card/${book.id}.jpg" alt="" class="cover-img" data-book-id="${book.id}" data-folder="card" loading="lazy" onerror="coverError(this)">
        ${comingSoon}
      </div>
      <div class="book-body">
        <div class="book-cats">${getCategories(book).map(c => '<span class="book-category">' + c + '</span>').join('')}</div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-summary">${book.summary}</p>
        <div class="book-meta">
          <span class="chip">${book.readingTime} min</span>
          <span class="added-date">${new Date(book.added + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  `;
}

// Delegated interactions for category cards (rendered via innerHTML)
document.addEventListener('click', e => {
  const card = e.target.closest('.cat-card, .list-book');
  if (card) openSummary(card.dataset.id);
});
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList &&
      (e.target.classList.contains('cat-card') || e.target.classList.contains('list-book'))) {
    e.preventDefault();
    openSummary(e.target.dataset.id);
  }
});

/* ----- Summary View ----- */
function trapFocus(e) {
  if (!state.summaryOpen) return;
  const focusable = summaryView.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first || !summaryView.contains(document.activeElement)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last || !summaryView.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

function openSummary(id) {
  const book = state.books.find(b => b.id === id);
  if (!book) return;
  state.currentBook = book;
  state.summaryOpen = true;
  state.previousRoute = currentHash().startsWith('#/book/') ? '#/' : currentHash();
  state.previouslyFocused = document.activeElement;

  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

  summaryCover.textContent = '';
  summaryCover.style.background = book.color;
  mountCover(summaryCover, book, 'card', initials);
  summaryTitle.textContent = book.title;
  summaryAuthor.textContent = book.author;
  summaryCategory.innerHTML = categoryLinksHTML(book);
  summaryBlurb.textContent = book.summary;
  factTime.textContent = book.readingTime;
  factYear.textContent = book.year;
  factRating.textContent = book.rating.toFixed(1);

  if (book.status === 'coming-soon') {
    summaryAnchors.innerHTML = '';
    summarySections.innerHTML = `
      <div class="coming-soon-panel">
        <div class="coming-soon-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
        </div>
        <h2>Summary coming soon</h2>
        <p>The full summary of <strong>${book.title}</strong> is being prepared and will appear here shortly. Check back soon.</p>
      </div>
    `;
  } else {
    // Section icons
    const ICONS = {
      key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"></path></svg>',
      takeaways: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
      concepts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      lessons: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      quotes: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>',
      translation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      final: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    };

    // Build anchor nav
    const sections = [
      { id: 'key-ideas', label: 'Key Ideas', icon: 'key' },
      { id: 'takeaways', label: 'Takeaways', icon: 'takeaways' },
    ];
    if (book.laws) sections.push({ id: 'concepts', label: 'Laws', icon: 'concepts' });
    else if (book.chapters) sections.push({ id: 'concepts', label: 'Chapters', icon: 'concepts' });
    else if (book.importantConcepts && book.importantConcepts.length) sections.push({ id: 'concepts', label: 'Concepts', icon: 'concepts' });
    sections.push({ id: 'lessons', label: 'Lessons', icon: 'lessons' });
    sections.push({ id: 'quotes', label: 'Quotes', icon: 'quotes' });
    if (book.translation) sections.push({ id: 'translation', label: 'Translation', icon: 'translation' });
    sections.push({ id: 'final', label: 'Final', icon: 'final' });

  const toRoman = n => {
    const vals = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let r = '';
    for (const [v, s] of vals) { while (n >= v) { r += s; n -= v; } }
    return r;
  };

  summaryAnchors.innerHTML = `
    <h3 class="anchors-title">Contents</h3>
    <ol class="anchors-list">
      ${sections.map((s, i) => `
        <li class="anchors-item">
          <a href="#summary-${s.id}" data-section="${s.id}">
            <span class="anchor-icon" aria-hidden="true">${ICONS[s.icon]}</span>
            <span class="anchor-label">${s.label}</span>
            <span class="anchor-leader" aria-hidden="true"></span>
            <span class="anchor-page" aria-hidden="true">${toRoman(i + 1)}</span>
          </a>
        </li>
      `).join('')}
    </ol>
  `;
  const sectionHTML = `
    <section id="summary-key-ideas">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.key}</span> Key Ideas</h2>
        <ul>${book.keyIdeas.map(idea => `<li>${idea}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-takeaways">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.takeaways}</span> Main Takeaways</h2>
        <ul>${book.mainTakeaways.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </section>
    ${book.laws ? `
    <section id="summary-concepts">
      <div class="section-card laws-card" id="lawsCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.concepts}</span> The 48 Laws</h2>
          <span class="translation-badge">${book.laws.length} laws</span>
        </div>
        <ol class="laws-list" id="lawsList">
          ${book.laws.map(law => `
            <li class="law">
              <span class="law-num" aria-hidden="true">${law.num}</span>
              <span class="law-text">
                <span class="law-title">${law.title}</span>
                ${law.detail ? `<span class="law-detail">${law.detail}</span>` : ''}
              </span>
            </li>
          `).join('')}
        </ol>
        <button class="translation-toggle" id="lawsToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See all laws</span>
          <span class="toggle-count">(${book.laws.length} laws)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : book.chapters ? `
    <section id="summary-concepts">
      <div class="section-card laws-card" id="lawsCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.concepts}</span> Chapters</h2>
          <span class="translation-badge">${book.chapters.length} chapters</span>
        </div>
        <ol class="laws-list" id="lawsList">
          ${book.chapters.map(ch => {
            const rows = [];
            if (ch.concept) rows.push(`<div class="law-row"><span class="law-row-label">Concept</span><span>${ch.concept}</span></div>`);
            if (ch.mechanics) rows.push(`<div class="law-row"><span class="law-row-label">Mechanics</span><span>${ch.mechanics}</span></div>`);
            if (ch.exemplar) rows.push(`<div class="law-row"><span class="law-row-label">Exemplar</span><span>${ch.exemplar}</span></div>`);
            if (ch.danger) rows.push(`<div class="law-row"><span class="law-row-label">Danger</span><span>${ch.danger}</span></div>`);
            if (ch.types) rows.push(...ch.types.map((t, i) => `<div class="law-row"><span class="law-row-label">Type ${i + 1}</span><span>${t}</span></div>`));
            if (ch.steps) rows.push(...ch.steps.map(s => `<div class="law-row"><span class="law-row-label">Step</span><span>${s}</span></div>`));
            if (ch.points) rows.push(`<div class="law-points">${ch.points.map(p => `<div class="law-point">${p}</div>`).join('')}</div>`);
            return `
            <li class="law">
              <span class="law-num" aria-hidden="true">${ch.num}</span>
              <span class="law-text">
                <span class="law-title">${ch.title}</span>
                ${rows.length ? `<span class="law-rows">${rows.join('')}</span>` : ''}
              </span>
            </li>`;
          }).join('')}
        </ol>
        <button class="translation-toggle" id="lawsToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See all chapters</span>
          <span class="toggle-count">(${book.chapters.length} chapters)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : book.importantConcepts && book.importantConcepts.length ? `
    <section id="summary-concepts">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.concepts}</span> Important Concepts</h2>
        <ul>${book.importantConcepts.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </section>
    ` : ''}
    <section id="summary-lessons">
      <div class="section-card">
        <h2><span class="section-icon">${ICONS.lessons}</span> Practical Lessons</h2>
        <ul>${book.practicalLessons.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-quotes">
      <div class="section-card">
        <h2><span class="quote-mark">${ICONS.quotes}</span> Best quotes</h2>
        ${book.bestQuotes.map(q => `
          <div class="quote-block">
            <blockquote>${q.text}</blockquote>
            <cite>${q.cite}</cite>
          </div>
        `).join('')}
      </div>
    </section>
    ${book.translation ? `
    <section id="summary-translation">
      <div class="section-card translation-card" id="translationCard">
        <div class="translation-head">
          <h2><span class="section-icon">${ICONS.translation}</span> Translation</h2>
          <span class="translation-badge">${book.translation.verses.length} verses</span>
        </div>
        <p class="translation-attrib">
          Translated by <strong>${book.translation.translator}</strong>
          <span class="attrib-sep" aria-hidden="true"></span>
          Published by <strong>${book.translation.publisher}</strong>
        </p>
        <ol class="translation-verses" id="translationVerses">
          ${book.translation.verses.map((v, i) => {
            const s = book.translation.sanskritVerses ? book.translation.sanskritVerses[i] || '' : '';
            return `<li class="verse"><span class="verse-num" aria-hidden="true">${i + 1}</span><span class="verse-text">${s ? '<span class="verse-sanskrit">' + s + '</span>' : ''}${v}</span></li>`;
          }).join('')}
        </ol>
        <button class="translation-toggle" id="translationToggle" type="button" aria-expanded="false">
          <span class="toggle-label">See translation</span>
          <span class="toggle-count">(${book.translation.verses.length} verses)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : ''}
    <section id="summary-final">
      <div class="final-block">
        <h2>${ICONS.final} Final Takeaway</h2>
        <p>${book.finalTakeaway}</p>
      </div>
    </section>
  `;
  summarySections.innerHTML = sectionHTML;

  // Anchor click tracking
  $$('.summary-anchors a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Laws / Chapters toggle
  const lawsToggle = document.getElementById('lawsToggle');
  if (lawsToggle) {
    const card = document.getElementById('lawsCard');
    const label = lawsToggle.querySelector('.toggle-label');
    const count = lawsToggle.querySelector('.toggle-count');
    const items = book.laws || book.chapters || [];
    const unit = book.laws ? 'laws' : 'chapters';
    lawsToggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      if (expanded) {
        label.textContent = 'Hide';
        if (count) count.textContent = '';
      } else {
        label.textContent = 'See all';
        if (count) count.textContent = `(${items.length} ${unit})`;
      }
      lawsToggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // Translation toggle
  const translationToggle = document.getElementById('translationToggle');
  if (translationToggle) {
    const card = document.getElementById('translationCard');
    const label = translationToggle.querySelector('.toggle-label');
    const count = translationToggle.querySelector('.toggle-count');
    translationToggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      if (expanded) {
        label.textContent = 'Hide translation';
        if (count) count.textContent = '';
      } else {
        label.textContent = 'See translation';
        if (count) count.textContent = `(${book.translation.verses.length} verses)`;
      }
      translationToggle.setAttribute('aria-expanded', String(expanded));
    });
  }
  }

  // Show
  document.body.style.overflow = 'hidden';
  summaryView.scrollTop = 0;
  summaryScrim.hidden = false;
  summaryView.classList.add('open');
  requestAnimationFrame(() => {
    summaryScrim.classList.add('open');
    summaryView.focus();
    document.addEventListener('keydown', trapFocus);
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.setAttribute('inert', '');
      mainEl.setAttribute('aria-hidden', 'true');
    }
  });

  updateSummaryProgress();
  setHash('#/book/' + encodeURIComponent(id));
}

function closeSummary(updateHash) {
  if (updateHash === undefined) updateHash = true;
  state.summaryOpen = false;
  summaryView.classList.remove('open');
  summaryScrim.classList.remove('open');
  summaryScrim.hidden = true;
  document.body.style.overflow = '';
  state.currentBook = null;
  summaryView.scrollTop = 0;
  toTop.classList.remove('show');
  document.removeEventListener('keydown', trapFocus);
  const mainEl = document.getElementById('main');
  if (mainEl) {
    mainEl.removeAttribute('inert');
    mainEl.removeAttribute('aria-hidden');
  }
  if (state.previouslyFocused && typeof state.previouslyFocused.focus === 'function') {
    state.previouslyFocused.focus();
  }
  if (updateHash && currentHash().startsWith('#/book/')) {
    setHash(state.previousRoute || '#/');
  }
}

function updateSummaryProgress() {
  const el = summaryView;
  const scrollTop = el.scrollTop;
  const scrollHeight = el.scrollHeight - el.clientHeight;
  const pct = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight * 100, 100) : 0;
  summaryProgress.style.width = pct + '%';
}

/* ----- Search ----- */
let searchDebounce;

function handleSearch() {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    state.searchQuery = searchInput.value.trim();
    searchClear.hidden = !state.searchQuery;
    renderLibrary();
  }, 200);
}

searchInput.addEventListener('input', handleSearch);
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.hidden = true;
  state.searchQuery = '';
  renderLibrary();
  searchInput.focus();
});

const searchForm = document.querySelector('.search-wrap');
if (searchForm) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    clearTimeout(searchDebounce);
    state.searchQuery = searchInput.value.trim();
    searchClear.hidden = !state.searchQuery;
    renderLibrary();
  });
}

/* ----- Routing ----- */
function currentHash() { return location.hash || '#/'; }

function setHash(h) {
  if (location.hash !== h) location.hash = h;
}

function updateCatLinksActive() {
  $$('.cat-link').forEach(b => b.classList.toggle('active', b.dataset.filter === state.activeCategory));
}

function showHomeView() {
  state.activeCategory = 'all';
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = '';
  document.getElementById('categoryBanner').hidden = true;
  const title = document.getElementById('libraryTitle');
  title.textContent = 'The library';
  title.hidden = false;
  renderLibrary();
}

function showCategoryView(cat) {
  const exists = state.books.some(b => getCategories(b).includes(cat));
  if (!exists) { showHomeView(); return; }
  state.activeCategory = cat;
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = 'none';
  const banner = document.getElementById('categoryBanner');
  banner.hidden = false;
  document.getElementById('categoryTitle').textContent = cat;
  document.getElementById('categoryDesc').textContent = CATEGORY_META[cat] || 'Browse all summaries in this category.';
  const count = state.books.filter(b => getCategories(b).includes(cat)).length;
  document.getElementById('categoryCount').textContent = `${count} ${count === 1 ? 'book' : 'books'}`;
  document.getElementById('libraryTitle').hidden = true;
  renderLibrary();
  window.scrollTo({ top: 0 });
}

function renderRoute() {
  const hash = currentHash();
  const bookMatch = hash.match(/^#\/book\/(.+)$/);
  if (bookMatch) {
    const id = decodeURIComponent(bookMatch[1]);
    if (!state.books.some(b => b.id === id)) { showHomeView(); return; }
    const alreadyOpen = state.summaryOpen && state.currentBook && state.currentBook.id === id;
    if (!alreadyOpen) {
      if (currentHash().startsWith('#/book/') && hash !== '#/book/' + id) {
        // switching books directly
      }
      openSummary(id);
    }
    return;
  }
  if (state.summaryOpen) closeSummary(false);
  const catMatch = hash.match(/^#\/category\/(.+)$/);
  if (catMatch) {
    showCategoryView(decodeURIComponent(catMatch[1]));
  } else {
    showHomeView();
  }
}

/* ----- Category ----- */
function bindCategory(btn) {
  btn.addEventListener('click', () => {
    closeMobileNav();
    const filter = btn.dataset.filter;
    if (filter === 'all') setHash('#/');
    else setHash('#/category/' + encodeURIComponent(filter));
  });
}
catLinks.forEach(bindCategory);

/* ----- More dropdown ----- */
const moreBtn = $('#moreBtn');
const moreMenu = $('#moreMenu');
const moreDropdown = moreBtn.closest('.more-dropdown');
if (moreBtn && moreMenu) {
  const openMore = () => {
    moreDropdown.classList.add('open');
    moreBtn.setAttribute('aria-expanded', 'true');
  };
  const closeMore = () => {
    moreDropdown.classList.remove('open');
    moreBtn.setAttribute('aria-expanded', 'false');
  };
  moreBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (moreDropdown.classList.contains('open')) closeMore();
    else openMore();
  });
  if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    moreDropdown.addEventListener('mouseenter', openMore);
    moreDropdown.addEventListener('mouseleave', closeMore);
  }
  document.addEventListener('click', e => {
    if (moreDropdown.classList.contains('open') && !e.target.closest('.more-dropdown')) closeMore();
  });
  moreMenu.querySelectorAll('.cat-link').forEach(btn => {
    btn.addEventListener('click', closeMore);
  });
}

/* ----- Mobile nav ----- */
const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');

function setupMobileNav() {
  const categories = [...new Set(state.books.flatMap(b => getCategories(b)))];
  const filters = ['all', ...categories];
  mobileNav.innerHTML = `
    <button class="mobile-close" type="button" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    ${filters.map(f => {
      const label = f === 'all' ? 'All' : f;
      return `<button class="cat-link ${f === state.activeCategory ? 'active' : ''}" data-filter="${f}">${label}</button>`;
    }).join('')}
  `;
  $$('.mobile-nav .cat-link').forEach(bindCategory);
  const closeBtn = $('.mobile-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
}

function toggleMobileNav(force) {
  const open = typeof force === 'boolean' ? force : !mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

function closeMobileNav() {
  toggleMobileNav(false);
}

menuBtn.addEventListener('click', () => toggleMobileNav());
document.addEventListener('click', e => {
  if (mobileNav.classList.contains('open') && !e.target.closest('#mobileNav') && !e.target.closest('#menuBtn')) {
    closeMobileNav();
  }
});

/* ----- Clear filters ----- */
clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.hidden = true;
  const target = '#/';
  if (location.hash === target) {
    state.activeCategory = 'all';
    showHomeView();
  } else {
    setHash(target);
  }
});

/* ----- Scroll ----- */
function handleScroll() {
  const isScrolled = state.summaryOpen ? summaryView.scrollTop > 400 : window.scrollY > 400;
  toTop.classList.toggle('show', isScrolled);
  if (state.summaryOpen) {
    updateSummaryProgress();
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
summaryView.addEventListener('scroll', handleScroll, { passive: true });
toTop.addEventListener('click', () => {
  if (state.summaryOpen) {
    summaryView.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

/* ----- Summary events ----- */
summaryBack.addEventListener('click', closeSummary);
summaryClose.addEventListener('click', closeSummary);
summaryScrim.addEventListener('click', closeSummary);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.summaryOpen) closeSummary();
  else if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMobileNav();
});

/* ----- Theme ----- */
const themeToggle = document.getElementById('themeToggle');

function getTheme() {
  return localStorage.getItem('ultra-theme') || 'light';
}

function setTheme(theme, persist = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  if (persist) localStorage.setItem('ultra-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

/* ----- Font size ----- */
const fontMinus = document.getElementById('fontMinus');
const fontPlus = document.getElementById('fontPlus');
const FS_KEY = 'ultra-font-scale';
const MIN_FS = 0.8, MAX_FS = 1.5, FS_STEP = 0.1;

function getFontScale() {
  return parseFloat(localStorage.getItem(FS_KEY)) || 1;
}

function applyFontScale(scale) {
  summaryView.style.setProperty('--fs', scale.toFixed(1));
  const pct = Math.round(scale * 100);
  if (fontMinus) {
    fontMinus.disabled = scale <= MIN_FS;
    fontMinus.setAttribute('aria-label', `Decrease text size (currently ${pct}%)`);
  }
  if (fontPlus) {
    fontPlus.disabled = scale >= MAX_FS;
    fontPlus.setAttribute('aria-label', `Increase text size (currently ${pct}%)`);
  }
}

function setFontScale(scale) {
  const clamped = Math.min(MAX_FS, Math.max(MIN_FS, Math.round(scale * 10) / 10));
  localStorage.setItem(FS_KEY, clamped);
  applyFontScale(clamped);
}

if (fontMinus) fontMinus.addEventListener('click', () => setFontScale(getFontScale() - FS_STEP));
if (fontPlus) fontPlus.addEventListener('click', () => setFontScale(getFontScale() + FS_STEP));

/* ----- Init ----- */
statBooks.textContent = state.books.length;
const heroBookCount = document.getElementById('heroBookCount');
if (heroBookCount) heroBookCount.textContent = state.books.length;
setupMobileNav();
setTheme(getTheme(), false);
applyFontScale(getFontScale());
renderRoute();
window.addEventListener('hashchange', renderRoute);

// Re-render on breakpoint cross so grid/mobile layout stays in sync
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const mobile = window.innerWidth <= 768;
    const wasMobile = state.mobileLayout;
    if (mobile !== wasMobile) {
      state.mobileLayout = mobile;
      if (!state.summaryOpen) renderLibrary();
    }
  }, 150);
});

/* ----- Summary scroll tracking ----- */
summaryView.addEventListener('scroll', updateSummaryProgress, { passive: true });