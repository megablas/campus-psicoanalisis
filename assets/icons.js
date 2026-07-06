/* ==========================================================================
   CAMPUS PSICOANÁLISIS · Iconos (Tabler, set inline, sin build ni CDN)
   icons.js — Uso: ICONS.svg('book', 18)  →  '<svg ...>...</svg>'
   ==========================================================================
   Paths extraídos de Tabler Icons (MIT). Solo los que usa el campus.
   Para añadir uno nuevo, copiar el inner de un icono de tabler-icons.github.io
   ========================================================================== */

(function () {
  'use strict';

  const PATHS = {
    // Navegación / UI
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sun: '<path d="M12 12m4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M3 12h1m16 0h1M12 3v1m0 16v1m5.7-13.7.7.7m-12.8 12.8.7.7m12.1 0-.7.7M5.5 5.5l.7.7"/>',
    moon: '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>',
    settings: '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1 -2.83 0l-.06-.06a1.65 1.65 0 0 0 -1.82-.33a1.65 1.65 0 0 0 -1 1.51v.17a2 2 0 0 1 -4 0v-.09a1.65 1.65 0 0 0 -1 -1.51a1.65 1.65 0 0 0 -1.82.33l-.06.06a2 2 0 0 1 -2.83 0a2 2 0 0 1 0 -2.83l.06-.06a1.65 1.65 0 0 0 .33 -1.82a1.65 1.65 0 0 0 -1.51 -1h-.17a2 2 0 0 1 0 -4h.09a1.65 1.65 0 0 0 1.51 -1a1.65 1.65 0 0 0 -.33 -1.82l-.06-.06a2 2 0 0 1 0 -2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1 -1.51v-.17a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82 -.33l.06 -.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06 .06a1.65 1.65 0 0 0 -.33 1.82v0a1.65 1.65 0 0 0 1.51 1h.17a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0 -1.51 1z"/><circle cx="12" cy="12" r="3"/>',
    arrowLeft: '<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>',
    arrowRight: '<path d="M5 12l14 0"/><path d="M15 6l6 6"/><path d="M15 18l6 -6"/>',
    arrowUpRight: '<path d="M7 7l10 10"/><path d="M7 17l0 -10l10 0"/>',
    check: '<path d="M5 12l5 5l10 -10"/>',
    x: '<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
    chevronDown: '<path d="M6 9l6 6l6 -6"/>',

    // Contenido académico
    book: '<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>',
    calendar: '<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M16 3l0 4"/><path d="M8 3l0 4"/><path d="M4 11l16 0"/>',
    stack: '<path d="M12 4l-8 4l8 4l8 -4l-8 -4"/><path d="M4 12l8 4l8 -4"/><path d="M4 16l8 4l8 -4"/>',
    notes: '<path d="M5 3l14 0a1 1 0 0 1 1 1l0 16a1 1 0 0 1 -1 1l-14 0a1 1 0 0 1 -1 -1l0 -16a1 1 0 0 1 1 -1z"/><path d="M9 7l6 0"/><path d="M9 11l6 0"/><path d="M9 15l4 0"/>',
    microscope: '<path d="M5 21h14"/><path d="M6 13l4 -4"/><path d="M11 8l5 5"/><path d="M14 5l5 5"/><path d="M9 18a3 3 0 0 0 3 -3a3 3 0 0 0 -3 -3a3 3 0 0 0 -3 3a3 3 0 0 0 3 3z"/><path d="M9 18h-3a1 1 0 0 1 -1 -1l0 -1a2 2 0 0 1 2 -2h2"/>',
    message: '<path d="M21 14l-3 -3l-3 3l-3 -3l-3 3l-3 -3"/><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-7l-5 4l0 -4h-2a2 2 0 0 1 -2 -2z"/>',
    map: '<path d="M9 4l3 2l3 -2l6 2v14l-6 -2l-3 2l-3 -2l-6 2v-14z"/><path d="M9 4v14"/><path d="M15 4v14"/>',
    quiz: '<path d="M7 4h10a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z"/><path d="M10 8l4 4"/><path d="M14 8l-4 4"/>',
    brain: '<path d="M15.5 8.5a2.5 2.5 0 1 1 2.5 2.5"/><path d="M12 18.5a2.5 2.5 0 1 1 -2.5 2.5"/><path d="M8.5 15.5a2.5 2.5 0 1 1 -2.5 -2.5"/><path d="M12 8.5a2.5 2.5 0 1 0 -2.5 -2.5"/><path d="M9 18a3 3 0 0 1 0 -6h6a3 3 0 0 1 0 6"/>',
    video: '<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/><rect x="3" y="6" width="12" height="12" rx="2"/>',
    users: '<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.87"/>',
    bulb: '<path d="M3 12h1m2 -7l.7 .7m13.3 -.7l-.7 .7m1.4 6.3h1m-15.4 6.3l-.7 .7m13.4 0l.7 .7"/><path d="M12 4a6 6 0 0 0 -4 10.5c.5 .5 1 1.5 1 2.5v1h6v-1c0 -1 .5 -2 1 -2.5a6 6 0 0 0 -4 -10.5z"/><path d="M10 21h4"/>',
    file: '<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>',
    pdf: '<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 13h1.5a1.5 1.5 0 0 1 0 3h-1.5z"/><path d="M14 13v3"/>',
    clock: '<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 7v5l3 3"/>',
    award: '<path d="M12 9a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"/><path d="M8 9l-2 12l6 -3l6 3l-2 -12"/>',
    alert: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86l-8.18 14.18a2 2 0 0 0 1.71 3h16.36a2 2 0 0 0 1.71 -3l-8.18 -14.18a2 2 0 0 0 -3.42 0z"/>',
    info: '<path d="M12 9h.01"/><path d="M11 12h1v4h1"/><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"/>',
    download: '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>',
    send: '<path d="M10 14l11 -10"/><path d="M21 4l-6.5 17a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1z"/>',
    sparkles: '<path d="M12 3l1.9 4.6l4.6 1.9l-4.6 1.9l-1.9 4.6l-1.9 -4.6l-4.6 -1.9l4.6 -1.9z"/><path d="M18 14l.9 2.1l2.1 .9l-2.1 .9l-.9 2.1l-.9 -2.1l-2.1 -.9l2.1 -.9z"/>',
    refresh: '<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"/><path d="M4 5l0 4l4 0"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2"/><path d="M20 19l0 -4l-4 0"/>',
    user: '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1"/>',
    list: '<path d="M9 6l11 0"/><path d="M9 12l11 0"/><path d="M9 18l11 0"/><path d="M5 6l0 .01"/><path d="M5 12l0 .01"/><path d="M5 18l0 .01"/>',
    home: '<path d="M5 12l3 0l0 7a1 1 0 0 0 1 1l6 0a1 1 0 0 0 1 -1l0 -7l3 0"/><path d="M3 11l9 -8l9 8"/>',
    star: '<path d="M12 2l3 7l7 .5l-5.5 4.5l2 7l-6.5 -4l-6.5 4l2 -7l-5.5 -4.5l7 -.5z"/>',
  };

  window.ICONS = {
    svg(name, size = 18) {
      const inner = PATHS[name];
      if (!inner) return '';
      return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
    },
    has(name) { return !!PATHS[name]; }
  };
})();
