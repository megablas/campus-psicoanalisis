/* ==========================================================================
   CAMPUS PSICOANÁLISIS · Cromado reutilizable
   ui.js — Nav, tema, búsqueda Ctrl+K, progreso, modal, toast, embed-sync
   ==========================================================================
   Depende de: assets/data.js (debe cargarse ANTES que ui.js)
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     1. TEMA (claro / oscuro / auto)
     ======================================================================== */
  const Theme = {
    KEY: 'psico-campus-theme',

    init() {
      const saved = localStorage.getItem(this.KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      this.apply(theme);

      // Si no hay elección manual, seguir al sistema
      if (!saved) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          this.apply(e.matches ? 'dark' : 'light');
        });
      }
    },

    apply(theme) {
      document.documentElement.setAttribute('data-theme', theme);
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      this.apply(next);
      localStorage.setItem(this.KEY, next);
      return next;
    },

    current() {
      return document.documentElement.getAttribute('data-theme') || 'light';
    }
  };

  /* ========================================================================
     2. EMBED-SYNC (auto-resize del iframe para Moodle)
     Reemplaza las ~15 copias duplicadas del script viejo.
     ======================================================================== */
  const Embed = {
    SOURCE: 'campus-psicoanalisis',
    lastHeight: 0,
    pendingFrame: null,

    getDocHeight() {
      const b = document.body, h = document.documentElement;
      return Math.max(
        b ? b.scrollHeight : 0,
        b ? b.offsetHeight : 0,
        h ? h.clientHeight : 0,
        h ? h.scrollHeight : 0,
        h ? h.offsetHeight : 0
      );
    },

    post(payload) {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(payload, '*');
      }
    },

    send(reason = 'update', force = false) {
      if (this.pendingFrame) cancelAnimationFrame(this.pendingFrame);
      this.pendingFrame = requestAnimationFrame(() => {
        const height = this.getDocHeight();
        const changed = Math.abs(height - this.lastHeight) > 4;
        if (!force && !changed) return;
        this.lastHeight = height;
        this.post({ type: 'campusHeight', source: this.SOURCE, height, reason });
        this.post({ height });
      });
    },

    init() {
      // Prevenir restauración de scroll del navegador
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

      const start = () => {
        this.send('init', true);
        if ('ResizeObserver' in window) {
          new ResizeObserver(() => this.send('resize')).observe(document.body);
        }
        if ('MutationObserver' in window) {
          new MutationObserver(() => this.send('mutation')).observe(document.body, {
            childList: true, subtree: true, attributes: true, characterData: true
          });
        }
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
      } else { start(); }
      window.addEventListener('load', () => this.send('load', true));
      window.addEventListener('resize', () => this.send('window-resize', true));
      window.addEventListener('pageshow', () => this.send('pageshow', true));
    }
  };

  /* ========================================================================
     3. PROGRESO (marcar clases como leídas, localStorage)
     ======================================================================== */
  const Progress = {
    KEY: 'psico-campus-progress',

    getAll() {
      try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); }
      catch { return {}; }
    },

    isDone(id) { return !!this.getAll()[id]; },

    toggle(id) {
      const all = this.getAll();
      all[id] = !all[id];
      localStorage.setItem(this.KEY, JSON.stringify(all));
      return all[id];
    },

    markDone(id, done = true) {
      const all = this.getAll();
      all[id] = done;
      localStorage.setItem(this.KEY, JSON.stringify(all));
    },

    /** Calcula % de un conjunto de ids */
    percent(ids) {
      if (!ids || !ids.length) return 0;
      const all = this.getAll();
      const done = ids.filter(id => all[id]).length;
      return Math.round((done / ids.length) * 100);
    }
  };

  /* ========================================================================
     4. MODAL (sistema propio, reemplaza alert/confirm)
     ======================================================================== */
  const Modal = {
    open({ title, body, actions = [] }) {
      this.close();
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      backdrop.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true">
          ${title ? `<h3 class="modal__title">${title}</h3>` : ''}
          <div class="modal__body">${body || ''}</div>
          <div class="modal__actions"></div>
        </div>`;
      const actionsEl = backdrop.querySelector('.modal__actions');
      actions.forEach(a => {
        const btn = document.createElement('button');
        btn.className = `btn ${a.variant || 'btn--secondary'}`;
        btn.textContent = a.label;
        btn.onclick = () => { this.close(); a.onClick && a.onClick(); };
        actionsEl.appendChild(btn);
      });
      backdrop.addEventListener('click', (e) => { if (e.target === backdrop) this.close(); });
      document.body.appendChild(backdrop);
      requestAnimationFrame(() => backdrop.classList.add('is-open'));
      this._el = backdrop;
    },

    confirm({ title, body, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar', onConfirm, variant = 'btn--primary' }) {
      this.open({
        title, body,
        actions: [
          { label: cancelLabel, variant: 'btn--ghost', onClick: () => {} },
          { label: confirmLabel, variant, onClick: onConfirm }
        ]
      });
    },

    close() {
      if (this._el) { this._el.remove(); this._el = null; }
    }
  };

  // ESC cierra modal
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') Modal.close(); });

  /* ========================================================================
     5. TOAST (notificación efímera)
     ======================================================================== */
  const Toast = {
    show(message, ms = 2600) {
      let el = document.querySelector('.toast');
      if (!el) {
        el = document.createElement('div');
        el.className = 'toast';
        document.body.appendChild(el);
      }
      el.textContent = message;
      requestAnimationFrame(() => el.classList.add('is-show'));
      clearTimeout(this._t);
      this._t = setTimeout(() => el.classList.remove('is-show'), ms);
    }
  };

  /* ========================================================================
     6. BÚSQUEDA GLOBAL (Ctrl/Cmd+K)
     Usa CONCEPTOS + PROGRAMA de data.js
     ======================================================================== */
  const Search = {
    open() {
      if (typeof CAMPUS_DATA === 'undefined') return;
      this.build();
      this._el.classList.add('is-open');
      this._input.value = '';
      this.render('');
      setTimeout(() => this._input.focus(), 50);
    },

    build() {
      if (this._el) return;
      const el = document.createElement('div');
      el.className = 'search-palette';
      el.innerHTML = `
        <div class="search-palette__panel" role="dialog" aria-modal="true">
          <input type="text" class="search-palette__input" placeholder="Buscar conceptos, clases, unidades..." autocomplete="off">
          <div class="search-palette__results"></div>
        </div>`;
      el.addEventListener('click', (e) => { if (e.target === el) el.classList.remove('is-open'); });
      this._el = el;
      this._input = el.querySelector('.search-palette__input');
      this._results = el.querySelector('.search-palette__results');
      this._input.addEventListener('input', () => this.render(this._input.value));
      document.body.appendChild(el);
    },

    collect() {
      const data = CAMPUS_DATA;
      const items = [];
      (data.CONCEPTOS || []).forEach(c => items.push({
        title: c.termino, meta: 'Glosario', icon: 'book', href: c.href || 'glosario.html'
      }));
      (data.PROGRAMA || []).forEach(p => {
        if (p.tipo === 'clase' || p.tipo === 'examen') {
          items.push({
            title: p.titulo, meta: p.unidad ? `Unidad ${p.unidad}` : 'Cronograma',
            icon: 'calendar', href: p.href || '#'
          });
        }
      });
      (data.UNIDADES || []).forEach(u => items.push({
        title: `Unidad ${u.numero}: ${u.titulo}`, meta: 'Unidad', icon: 'stack', href: u.href
      }));
      return items;
    },

    render(query) {
      const q = query.trim().toLowerCase();
      let items = this.collect();
      if (q) {
        items = items.filter(i =>
          i.title.toLowerCase().includes(q) || i.meta.toLowerCase().includes(q)
        );
      }
      if (!items.length) {
        this._results.innerHTML = `<div class="search-palette__empty">Sin resultados para "${this._escape(query)}"</div>`;
        return;
      }
      this._results.innerHTML = items.slice(0, 8).map(i => `
        <a class="search-palette__result" href="${i.href}">
          <span class="search-palette__result-icon">${ICONS.svg(i.icon, 18)}</span>
          <span>
            <div>${i.title}</div>
            <div class="search-palette__result-meta">${i.meta}</div>
          </span>
        </a>`).join('');
    },

    _escape(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  };

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      Search.open();
    }
    if (e.key === 'Escape') Search._el && Search._el.classList.remove('is-open');
  });

  /* ========================================================================
     7. UTILIDADES DE FECHA (para el hero dinámico y el cronograma)
     ======================================================================== */
  const Dates = {
    MONTHS_ES: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    MONTHS_LONG: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    DAYS_ES: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],

    /** Convierte "2026-03-16" o {año,mes,dia} a Date */
    toDate(entry) {
      if (entry instanceof Date) return entry;
      if (typeof entry === 'string') return new Date(entry + 'T00:00:00');
      if (entry && entry.año) return new Date(entry.año, (entry.mes || 1) - 1, entry.dia || 1);
      return new Date();
    },

    /** Diferencia en días (positivo = futuro, negativo = pasado) */
    daysUntil(dateEntry) {
      const target = this.toDate(dateEntry);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      target.setHours(0, 0, 0, 0);
      return Math.round((target - now) / 86400000);
    },

    /** ¿Es hoy? */
    isToday(dateEntry) { return this.daysUntil(dateEntry) === 0; },

    formatLong(dateEntry) {
      const d = this.toDate(dateEntry);
      return `${this.DAYS_ES[d.getDay()]} ${d.getDate()} de ${this.MONTHS_LONG[d.getMonth()]}`;
    },

    /** Dada una lista de entradas con fecha, devuelve {pasadas, actual, proxima} */
    statusOf(entries) {
      const sorted = entries
        .map(e => ({ ...e, _days: this.daysUntil(e.fecha) }))
        .sort((a, b) => a._days - b._days);
      const proxima = sorted.find(e => e._days >= 0);
      const actual = sorted.find(e => e._days === 0);
      const pasadas = sorted.filter(e => e._days < 0);
      return { proxima, actual, pasadas, all: sorted };
    }
  };

  /* ========================================================================
     8. RENDER DE NAV (inyecta el header en cualquier página)
     Marcado: <div data-ui="nav" data-active="inicio"></div>
     ======================================================================== */
  const Nav = {
    render() {
      const mount = document.querySelector('[data-ui="nav"]');
      if (!mount) return;
      const active = mount.dataset.active || '';
      const depth = mount.dataset.depth || ''; // '../' si está en units/
      const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

      const links = [
        { key: 'inicio', label: 'Inicio', href: `${depth}index.html` },
        { key: 'unidades', label: 'Unidades', href: `${depth}index.html#unidades` },
        { key: 'cronograma', label: 'Cronograma', href: `${depth}index.html#cronograma` },
        { key: 'final', label: 'Final', href: `${depth}index.html#final` },
      ];

      mount.innerHTML = `
        <nav class="nav">
          <div class="nav__inner">
            <a class="nav__brand" href="${depth}index.html">
              <span class="nav__brand-dot"></span>
              Psicoanálisis
            </a>
            <div class="nav__links">
              ${links.map(l => `
                <a class="nav__link ${active === l.key ? 'is-active' : ''}" href="${l.href}">${l.label}</a>
              `).join('')}
            </div>
            <div class="nav__actions">
              <button class="icon-btn" onclick="CampusUI.search()" title="Buscar (Ctrl+K)" aria-label="Buscar">
                ${ICONS.svg('search', 20)}
              </button>
              <button class="icon-btn" onclick="CampusUI.toggleTheme()" title="Cambiar tema" aria-label="Cambiar tema" id="theme-toggle">
                ${ICONS.svg(Theme.current() === 'dark' ? 'sun' : 'moon', 20)}
              </button>
            </div>
          </div>
        </nav>`;
    },

    refreshThemeIcon() {
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.innerHTML = ICONS.svg(Theme.current() === 'dark' ? 'sun' : 'moon', 20);
    }
  };

  /* ========================================================================
     9. API PÚBLICA
     ======================================================================== */
  window.CampusUI = {
    Theme, Embed, Progress, Modal, Toast, Search, Dates, Nav,
    /** Resuelve un href root-relative de data.js según la profundidad de la página.
        data.js guarda rutas desde la raíz (ej. "units/clase-01.html"); si estamos
        dentro de /units/, hay que quitar el prefijo "units/" para que sea hermano. */
    path(href) {
      if (!href) return '#';
      if (location.pathname.includes('/units/')) return href.replace(/^units\//, '');
      return href;
    },
    toggleTheme() { Theme.toggle(); Nav.refreshThemeIcon(); },
    search() { Search.open(); },
    confirm(opts) { Modal.confirm(opts); },
    toast(msg, ms) { Toast.show(msg, ms); },
    init() {
      Theme.init();
      Embed.init();
      Nav.render();
    }
  };

  // Auto-init al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CampusUI.init());
  } else {
    CampusUI.init();
  }
})();
