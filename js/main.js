/* DevTables — editorial homepage JS */
(function () {
  'use strict';

  // ── Command palette actions (real app actions, real default bindings) ───
  // Each entry maps to the section of this page that shows the feature.
  const ACTIONS = [
    { name: 'Go to Table…',           kbd: '⌘P',   href: '#keyboard' },
    { name: 'Run Current Query',      kbd: '⌘↩',   href: '#editor' },
    { name: 'Run All Queries',        kbd: '⇧⌘↩',  href: '#editor' },
    { name: 'Save Changes',           kbd: '⌘S',   href: '#safety' },
    { name: 'Save to Queries',        kbd: '⇧⌘S',  href: '#editor' },
    { name: 'Open SQL Editor',        kbd: '⌘T',   href: '#editor' },
    { name: 'Switch Connection…',     kbd: '⌘K',   href: '#features' },
    { name: 'Switch Database…',       kbd: '⇧⌘K',  href: '#databases' },
    { name: 'Refresh Data',           kbd: '⌘R',   href: '#features' },
    { name: 'Show Table Data',        kbd: '⌃⌘[',  href: '#features' },
    { name: 'Show Table Structure',   kbd: '⌃⌘]',  href: '#features' },
    { name: 'Toggle Left Sidebar',    kbd: '⌃⌘S',  href: '#features' },
    { name: 'Toggle Console Log',     kbd: '⇧⌘C',  href: '#features' },
    { name: 'Toggle Row Detail',      kbd: '⇧⌘D',  href: '#features' },
    { name: 'Toggle Line Comment',    kbd: '⌘/',   href: '#editor' },
    { name: 'Review Changes',         kbd: '',     href: '#safety' },
    { name: 'Import CSV…',            kbd: '',     href: '#features' },
    { name: 'Export Result as CSV…',  kbd: '',     href: '#features' },
    { name: 'Export Table as JSON…',  kbd: '',     href: '#features' },
    { name: 'New Connection…',        kbd: '',     href: '#features' },
    { name: 'Edit Keymap…',           kbd: '',     href: '#keyboard' },
    { name: 'View Changelog',         kbd: '',     href: 'release-notes.html' },
    { name: 'Download DevTables',     kbd: '',     href: '#download' },
    { name: 'Report an Issue',        kbd: '',     href: 'https://github.com/hengfeiyang/devtables/issues' },
  ];

  // ── Feature index ────────────────────────────────────────────────────────
  const FEATURES = [
    { n: '01', cat: 'Connect', name: 'Saved connections',
      blurb: 'A fast start page of saved connections — open, edit, duplicate, test. Passwords live in the macOS Keychain, not in config files.', tag: '' },
    { n: '02', cat: 'Connect', name: 'SSH tunnels & TLS',
      blurb: 'Tunnel to Postgres and MySQL through a bastion host — password or private-key auth, including ed25519, ECDSA, and RSA .pem keys.', tag: 'Improved · 1.0.1' },
    { n: '03', cat: 'Connect', name: 'Multi-window workspaces',
      blurb: 'Every window owns its own session, tabs, and selection. All windows share one saved-connection list.', tag: '' },
    { n: '04', cat: 'Connect', name: 'Sessions that survive',
      blurb: 'Optional launch restore reopens your last connection and tabs. A dropped connection keeps everything and offers tap-to-reconnect.', tag: '' },
    { n: '05', cat: 'Browse', name: 'Object browser',
      blurb: 'Tables, views, indexes, triggers, and schemas — searchable, in a native sidebar.', tag: '' },
    { n: '06', cat: 'Browse', name: 'Instant table switching',
      blurb: 'Open tables stay live. Flip back and land on the same page, sort, scroll, and selected row — never back on page one.', tag: 'Signature' },
    { n: '07', cat: 'Browse', name: 'Pagination first',
      blurb: 'A safe row limit by default. First / Prev / Next / Last, rows-per-page, native sorting, column resizing, multi-row selection.', tag: '' },
    { n: '08', cat: 'Browse', name: 'Your view, remembered',
      blurb: 'Column show/hide choices and per-table WHERE filters persist — per table, per connection.', tag: 'Signature' },
    { n: '09', cat: 'Query', name: 'Schema-aware autocomplete',
      blurb: 'Tables, views, and typed columns pulled from the statement you are writing, ranked above keywords.', tag: 'Signature' },
    { n: '10', cat: 'Query', name: 'Query history',
      blurb: 'Every statement filed automatically, per connection, grouped Today / Yesterday / older.', tag: '' },
    { n: '11', cat: 'Query', name: 'A query library',
      blurb: 'Name queries, file them in folders, favorite the ones you reach for. ⇧⌘S saves the editor’s SQL.', tag: '' },
    { n: '12', cat: 'Query', name: 'Beautify / uglify',
      blurb: 'Formatting that respects -- comments and statement boundaries. Run all statements, or just the current one.', tag: '' },
    { n: '13', cat: 'Edit', name: 'Transactional row editing',
      blurb: 'Insert, update, duplicate, delete — staged as dirty cells and committed in one transaction with ⌘S.', tag: '' },
    { n: '14', cat: 'Edit', name: 'Review Changes',
      blurb: 'A sheet shows the exact SQL a commit will run, before it runs. No surprises in production.', tag: 'Signature' },
    { n: '15', cat: 'Edit', name: 'NULL fidelity',
      blurb: 'A genuine SQL NULL and the literal text "NULL" never blur together — across all three engines.', tag: '' },
    { n: '16', cat: 'Structure', name: 'Inline schema editing',
      blurb: 'Add, rename, drop columns; edit type, nullability, default, comment; manage indexes and foreign keys — staged, committed together.', tag: '' },
    { n: '17', cat: 'Structure', name: 'Tables & databases',
      blurb: 'Create, rename, and drop tables. Create databases on Postgres and MySQL. Truncate sits behind a guarded dialog.', tag: '' },
    { n: '18', cat: 'Users', name: 'User management',
      blurb: 'Create Postgres and MySQL users and edit a compact permissions matrix with dialect-correct GRANT / REVOKE.', tag: '' },
    { n: '19', cat: 'Data', name: 'CSV import',
      blurb: 'Mapping and preview before a single row is written — per-header column mapping, validation warnings, cancellable background work.', tag: '' },
    { n: '20', cat: 'Data', name: 'CSV / JSON export',
      blurb: 'Export tables — current page or all filtered rows — and query results, streamed in pages with progress and cancel.', tag: '' },
    { n: '21', cat: 'Data', name: 'Run .sql files',
      blurb: 'Open a .sql file straight into an editor tab and run it. SQLite gets lightweight local backup and restore.', tag: '' },
    { n: '22', cat: 'Settings', name: 'Fonts & colors',
      blurb: 'Appearance and accent applied app-wide, per-section fonts, and a live syntax preview with per-token colors.', tag: '' },
    { n: '23', cat: 'Settings', name: 'Rebindable keymap',
      blurb: 'Every common action takes the binding you give it. Settings → Keymap, with conflict checking.', tag: '' },
    { n: '24', cat: 'Settings', name: 'Guard rails',
      blurb: 'Destructive-query confirmation, NULL and boolean display options, and a configurable connect timeout.', tag: '' },
  ];

  const CATEGORIES = ['All', 'Connect', 'Browse', 'Query', 'Edit', 'Structure', 'Users', 'Data', 'Settings'];

  // ── Hero rotator ─────────────────────────────────────────────────────────
  function initHeroRotator() {
    const el = document.querySelector('.rot-value');
    if (!el) return;
    const items = ['⇧⌘P — anything.', '⌘P — any table.', '⌘↩ — run it.', '⌘S — commit.', '⌘K — connections.', '⌘R — refresh.'];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % items.length;
      el.textContent = items[i];
      el.style.animation = 'none';
      void el.offsetWidth; // force reflow to restart animation
      el.style.animation = '';
    }, 2400);
  }

  // ── Scroll progress hairline ─────────────────────────────────────────────
  function initScrollProgress() {
    const bar = document.querySelector('.nav-progress');
    if (!bar || document.querySelector('.nav-static')) return;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? Math.min(1, h.scrollTop / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Reveal on scroll ─────────────────────────────────────────────────────
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  }

  // ── Smooth in-page anchor scroll ─────────────────────────────────────────
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return false;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }
  function initSmoothAnchors() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      if (scrollToId(id)) e.preventDefault();
    });
  }

  // ── Live command palette demo ────────────────────────────────────────────
  function initPalette() {
    const pal = document.getElementById('palette');
    if (!pal) return;
    const input = pal.querySelector('input');
    const list = pal.querySelector('.pal-list');
    let q = '';
    let active = 0;
    let filtered = ACTIONS;

    function highlight(name) {
      if (!q) return name;
      const i = name.toLowerCase().indexOf(q.toLowerCase());
      if (i < 0) return name;
      return name.slice(0, i) + '<b>' + name.slice(i, i + q.length) + '</b>' + name.slice(i + q.length);
    }

    function render() {
      filtered = ACTIONS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()));
      if (active >= filtered.length) active = Math.max(0, filtered.length - 1);
      if (!filtered.length) {
        list.innerHTML = '<div class="pal-empty">No matching action — in the app this list covers every command.</div>';
        return;
      }
      list.innerHTML = filtered.map((a, i) =>
        `<div class="pal-item ${i === active ? 'on' : ''}" data-i="${i}">
          <span class="pal-name">${highlight(a.name)}</span>
          ${a.kbd ? `<span class="kbd">${a.kbd}</span>` : ''}
        </div>`
      ).join('');
      const on = list.querySelector('.pal-item.on');
      if (on) {
        // Scroll only within the list, never the page (avoids load-time jump).
        const top = on.offsetTop;
        const bottom = top + on.offsetHeight;
        if (top < list.scrollTop) list.scrollTop = top;
        else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
      }
      list.querySelectorAll('.pal-item').forEach((el) => {
        el.addEventListener('mousemove', () => {
          const i = Number(el.dataset.i);
          if (i !== active) { active = i; render(); }
        });
        el.addEventListener('click', () => run(Number(el.dataset.i)));
      });
    }

    function run(i) {
      const a = filtered[i];
      if (!a) return;
      if (a.href.startsWith('#')) {
        scrollToId(a.href.slice(1));
        input.blur();
      } else {
        window.location.href = a.href;
      }
    }

    function focusPalette() {
      pal.classList.add('flash');
      setTimeout(() => pal.classList.remove('flash'), 700);
      const top = pal.getBoundingClientRect().top;
      if (top < 70 || top > window.innerHeight - 220) {
        const y = pal.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      input.focus({ preventScroll: true });
      input.select();
    }

    input.addEventListener('input', () => { q = input.value; active = 0; render(); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, filtered.length - 1); render(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); render(); }
      else if (e.key === 'Enter') { e.preventDefault(); run(active); }
      else if (e.key === 'Escape') { input.blur(); }
    });

    // ⇧⌘P from anywhere on the page — same binding as the app.
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        focusPalette();
      }
    });
    document.querySelectorAll('[data-palette-open]').forEach((el) => {
      el.addEventListener('click', (e) => { e.preventDefault(); focusPalette(); });
    });

    render();
  }

  // ── Feature index (search + categories) ──────────────────────────────────
  function initFeatureIndex() {
    const grid = document.getElementById('features-grid');
    const cats = document.getElementById('features-cats');
    const input = document.getElementById('features-search');
    const clear = document.getElementById('features-search-clear');
    if (!grid) return;

    let q = '';
    let cat = 'All';

    function renderCats() {
      if (!cats) return;
      cats.innerHTML = CATEGORIES.map((c) => {
        const count = c === 'All' ? FEATURES.length : FEATURES.filter((t) => t.cat === c).length;
        return `<button type="button" class="cat ${cat === c ? 'on' : ''}" data-cat="${c}">
          ${c}<span class="cat-n">${count}</span>
        </button>`;
      }).join('');
      cats.querySelectorAll('.cat').forEach((b) => {
        b.addEventListener('click', () => {
          cat = b.dataset.cat;
          renderCats();
          render();
        });
      });
    }

    function render() {
      const filtered = FEATURES.filter((t) => {
        if (cat !== 'All' && t.cat !== cat) return false;
        if (q) {
          const hay = `${t.name} ${t.blurb} ${t.cat}`.toLowerCase();
          if (!hay.includes(q.toLowerCase())) return false;
        }
        return true;
      });
      if (!filtered.length) {
        grid.innerHTML = `<div class="tools-empty">
          <p>Nothing matches that search. Try a different word, or browse all 24.</p>
          <button type="button" class="btn-ghost" id="features-reset">Reset</button>
        </div>`;
        const btn = document.getElementById('features-reset');
        if (btn) btn.addEventListener('click', () => {
          q = ''; cat = 'All';
          if (input) input.value = '';
          renderCats(); render();
        });
        return;
      }
      grid.innerHTML = filtered.map((t) => {
        const tag = t.tag ? `<span class="tool-tag">${t.tag}</span>` : '<span></span>';
        return `<div class="tool">
          <div class="tool-head">
            <span class="tool-n">${t.n}</span>
            <span class="tool-cat">${t.cat}</span>
          </div>
          <h3 class="tool-name">${t.name}</h3>
          <p class="tool-blurb">${t.blurb}</p>
          <div class="tool-foot">${tag}</div>
        </div>`;
      }).join('');
    }

    if (input) {
      input.addEventListener('input', () => {
        q = input.value;
        if (clear) clear.style.display = q ? '' : 'none';
        render();
      });
    }
    if (clear) {
      clear.style.display = 'none';
      clear.addEventListener('click', () => {
        q = '';
        if (input) input.value = '';
        clear.style.display = 'none';
        render();
      });
    }
    renderCats();
    render();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeroRotator();
    initScrollProgress();
    initReveal();
    initSmoothAnchors();
    initPalette();
    initFeatureIndex();
  });
})();
