/* ============================================================
   Dictionary — English-to-Hindi lookup with multi-source fallback
   Sources:
     1. Wiktionary (Hindi translations + English definitions) — same request
     2. Google Translate (guaranteed Hindi, used when Wiktionary has no Hindi)
     3. Wikipedia REST summary (English context, when Wiktionary has no page)
   ============================================================ */

const Dictionary = {
  cache: new Map(),
  ua: 'UltraSummary/1.0 (educational dictionary lookup)',
  CACHE_VERSION: 2,
  cacheKey(word) { return 'dict-v' + this.CACHE_VERSION + '-' + word; },

  /**
   * Look up an English word. Returns a result object:
   *   { hindi: [{word, transliteration, source?}], english: [string], wikipedia: {title, description, extract} }
   * Any of the keys may be empty/missing. Returns null when nothing is found.
   */
  async lookup(word) {
    word = word.toLowerCase().replace(/[^a-z'’\-]/g, '').trim();
    if (!word || word.length < 2) return null;

    if (this.cache.has(word)) return this.cache.get(word);

    const cached = localStorage.getItem(this.cacheKey(word));
    if (cached) {
      const val = JSON.parse(cached);
      this.cache.set(word, val);
      return val;
    }

    const result = await this._fullLookup(word);
    this._store(word, result);
    return result;
  },

  /** Run the full chain: Wiktionary → GT → Wikipedia */
  async _fullLookup(word) {
    const wiktionary = await this._fromWiktionary(word);

    let gt = null;
    if (!wiktionary || !wiktionary.hindi || !wiktionary.hindi.length) {
      gt = await this._fromGoogleTranslate(word);
    }

    let wiki = null;
    if (!wiktionary) {
      wiki = await this._fromWikipedia(word);
    }

    const result = {};
    if (wiktionary) {
      if (wiktionary.hindi && wiktionary.hindi.length) result.hindi = wiktionary.hindi;
      if (wiktionary.english && wiktionary.english.length) result.english = wiktionary.english;
    }
    if (gt) {
      if (!result.hindi) result.hindi = [];
      result.hindi.push({ word: gt, source: 'google' });
    }
    if (wiki) result.wikipedia = wiki.wikipedia;
    return result.hindi || result.english || result.wikipedia ? result : null;
  },

  async _fromWiktionary(word) {
    const url = 'https://en.wiktionary.org/w/api.php?action=parse&page='
      + encodeURIComponent(word) + '&prop=wikitext&format=json&origin=*';

    let wt;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': this.ua } });
      const data = await res.json();
      if (data.error) return null;
      wt = data.parse.wikitext['*'];
    } catch {
      return null;
    }

    const hindi = this._parseHindi(wt);
    const english = this._parseEnglish(wt);
    if (!hindi.length && !english.length) return null;
    const result = {};
    if (hindi.length) result.hindi = hindi;
    if (english.length) result.english = english;
    return result;
  },

  async _fromGoogleTranslate(word) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q='
      + encodeURIComponent(word);

    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (!data || !data[0] || !data[0][0] || !data[0][0][0]) return null;
      const translation = String(data[0][0][0]).trim();
      if (!translation) return null;
      if (translation.toLowerCase() === word) return null;
      if (!/[\u0900-\u097F]/.test(translation)) return null;
      return translation;
    } catch {
      return null;
    }
  },

  async _fromWikipedia(word) {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
      + encodeURIComponent(word) + '?redirect=true';

    try {
      const res = await fetch(url, { headers: { 'User-Agent': this.ua } });
      if (!res.ok) return null;
      const data = await res.json();
      if (!data.extract) return null;
      return {
        wikipedia: {
          title: data.title || word,
          description: data.description || '',
          extract: data.extract,
        },
      };
    } catch {
      return null;
    }
  },

  /* ----- Wiktionary parsing ----- */

  _parseHindi(wt) {
    const seen = new Set();
    const results = [];

    const re = /\{\{t{1,2}\+?(\|hi\||hi\|)([^|}]+)/g;
    let m;
    while ((m = re.exec(wt)) !== null) {
      const raw = m[2].trim();
      if (raw && !raw.startsWith('tr=') && !seen.has(raw)) {
        seen.add(raw);
        results.push({ word: raw, transliteration: this._extractTr(wt, m.index) });
      }
    }
    return results;
  },

  _extractTr(wt, fromIndex) {
    const end = wt.indexOf('}}', fromIndex);
    const slice = wt.slice(fromIndex, end === -1 ? fromIndex + 60 : end);
    const m = slice.match(/tr=([^|}]+)/);
    return m ? m[1].trim() : '';
  },

  _parseEnglish(wt, limit = 3) {
    const lines = wt.split('\n');
    let start = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '==English==') { start = i; break; }
    }
    if (start === -1) return [];

    const out = [];
    for (let i = start; i < lines.length; i++) {
      const s = lines[i].trim();
      if (s.startsWith('==') && s !== '==English==') {
        if (out.length) break;
        continue;
      }
      const isDef = s.startsWith('# ') && !s.startsWith('#*') && !s.startsWith('#:');
      if (isDef) {
        const clean = this._cleanWikitext(s.slice(1));
        if (clean && clean.length > 3) {
          out.push(clean);
          if (out.length >= limit) break;
        }
      }
    }
    return out;
  },

  _cleanWikitext(s) {
    for (let guard = 0; guard < 8; guard++) {
      const m = s.match(/^\s*\{\{(lb|context|gloss|label)\|[^{}]*\}\}/);
      if (!m) break;
      s = s.slice(m[0].length);
    }
    s = s.replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, '$2');
    s = s.replace(/\[\[([^\]]*)\]\]/g, '$1');
    s = s.replace(/\{\{[^{}]*\}\}/g, '');
    s = s.replace(/<!--.*?-->/g, '');
    return s.replace(/\s+/g, ' ').trim().replace(/^:+/, '').trim();
  },

  _store(word, val) {
    this.cache.set(word, val);
    try { localStorage.setItem(this.cacheKey(word), JSON.stringify(val)); } catch {}
  },
};