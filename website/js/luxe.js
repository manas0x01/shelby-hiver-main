/* ============================================================
   SHELBY HIVER — MAISON LUXE ENHANCEMENTS
   - Line-icon sprite (Lucide, 1.5px stroke) + icon upgrades
   - Top bar: Install App + Enable Alerts (replaces marquee on phones)
   - PWA: service worker, install prompt, iOS install guidance
   - Notifications with the phone's default notification sound
   - Header scroll state, scroll reveals
   Purely additive: pages work without it.
   ============================================================ */
(function () {
  'use strict';

  /* ——— ICONS ——— */
  var ICONS = {
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    droplets: '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
    'circle-dot': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
    'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
    package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    'badge-check': '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    banknote: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    diamond: '<path d="M12 2 22 12 12 22 2 12Z"/>',
    'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'log-in': '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    'bell-ring': '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',
    'bell-off': '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"/><path d="m2 2 20 20"/><path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/>',
    download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    share: '<path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>',
    'square-plus': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/>',
    'circle-check': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
  };

  function icon(name, cls) {
    return '<svg class="lx-i ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#lx-' + name + '"></use></svg>';
  }
  window.LuxeIcon = icon;

  function injectSprite() {
    if (document.getElementById('lx-sprite')) return;
    var s = '<svg id="lx-sprite" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true"><defs>';
    Object.keys(ICONS).forEach(function (k) { s += '<symbol id="lx-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>'; });
    s += '</defs></svg>';
    document.body.insertAdjacentHTML('afterbegin', s);
  }

  function toast(msg) {
    if (typeof window.toast === 'function') { window.toast(msg); return; }
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    var c = document.getElementById('toasts') || document.body;
    c.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 400); }, 2800);
  }

  /* ——— ENVIRONMENT ——— */
  var ua = navigator.userAgent || '';
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  var isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  var deferredPrompt = null;
  var swReg = null;

  /* ——— SERVICE WORKER ——— */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    if (!/^https?:$/.test(location.protocol)) return Promise.resolve(null);
    return navigator.serviceWorker.register('/sw.js').then(function (reg) {
      swReg = reg;
      return navigator.serviceWorker.ready;
    }).then(function (reg) { swReg = reg; return reg; }).catch(function () { return null; });
  }

  /* ——— TOP BAR ——— */
  function injectTopBar() {
    var header = document.querySelector('.site-header');
    if (!header || document.querySelector('.lx-topbar')) return;
    var items = [
      ['truck', 'Complimentary 24-hour dispatch · Pan-India'],
      ['gem', '220 GSM heavyweight combed cotton'],
      ['shield-check', '100% pre-shrunk bio-wash'],
      ['rotate-ccw', 'Effortless size exchanges'],
      ['message-circle', 'Private concierge on WhatsApp']
    ];
    var one = items.map(function (i) {
      return '<span class="lx-announce-item">' + icon(i[0]) + i[1] + '</span><span class="lx-announce-sep">◆</span>';
    }).join('');
    var bar = document.createElement('div');
    bar.className = 'lx-topbar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'App and store announcements');
    bar.innerHTML =
      '<div class="lx-announce" aria-hidden="false"><div class="lx-announce-track">' + one + one + '</div></div>' +
      '<div class="lx-topbar-actions">' +
        '<button type="button" class="lx-tb-btn" data-lx="install" hidden aria-label="Install app" title="Install app">' + icon('download') + '<span class="lx-tb-label">Install app</span></button>' +
        '<button type="button" class="lx-tb-btn" data-lx="alerts" aria-label="Get alerts" title="Get alerts">' + icon('bell') + '<span class="lx-tb-label">Get alerts</span></button>' +
      '</div>';
    header.parentNode.insertBefore(bar, header);
  }

  // Phones: icon-only Install / Alerts buttons live inside the header itself.
  function injectHeaderActions() {
    var hi = document.querySelector('.site-header .header-inner');
    if (!hi || hi.querySelector('.lx-hdr-actions')) return;
    hi.insertAdjacentHTML('beforeend',
      '<div class="lx-hdr-actions">' +
        '<button type="button" class="lx-hdr-btn" data-lx="install" hidden aria-label="Install app" title="Install app">' + icon('download') + '</button>' +
        '<button type="button" class="lx-hdr-btn" data-lx="alerts" aria-label="Get alerts" title="Get alerts">' + icon('bell') + '</button>' +
      '</div>');
  }

  // Phones: the Profile tab opens the full menu (everything the hamburger used to hold).
  function bindProfileTab() {
    var p = document.getElementById('mobBarProfile');
    if (!p || p.dataset.lxMenu) return;
    p.dataset.lxMenu = '1';
    p.addEventListener('click', function (e) {
      var burger = document.getElementById('openMob');
      if (burger && window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault(); e.stopPropagation();
        burger.click();
      }
    }, true);
  }

  /* ——— STATE → UI ——— */
  function alertState() {
    if (!('Notification' in window)) return isIOS && !isStandalone ? 'needs-install' : 'unsupported';
    return Notification.permission; // granted | denied | default
  }

  function canShowInstall() {
    if (isStandalone) return false;
    if (deferredPrompt) return true;
    return isMobile || isIOS; // phones always get guidance
  }

  function updateUI() {
    var showInstall = canShowInstall();
    document.querySelectorAll('[data-lx="install"]').forEach(function (el) {
      el.hidden = !showInstall;
    });
    var st = alertState();
    var label = 'Get alerts', ico = 'bell', on = false;
    if (st === 'granted') { label = 'Alerts on'; ico = 'bell-ring'; on = true; }
    else if (st === 'denied') { ico = 'bell-off'; }
    document.querySelectorAll('[data-lx="alerts"]').forEach(function (el) {
      el.classList.toggle('is-on', on);
      el.setAttribute('aria-label', label); el.setAttribute('title', label);
      var l = el.querySelector('.lx-tb-label, .mob-nav-text');
      if (l) l.textContent = el.classList.contains('mob-nav-item') ? (on ? 'Drop alerts are on' : 'Enable drop alerts') : label;
      var old = el.querySelector('svg.lx-i:not(.mob-nav-chev)');
      if (old) old.outerHTML = icon(ico);
    });
    var bar = document.querySelector('.lx-topbar');
    if (bar) bar.classList.toggle('lx-single', !showInstall);
  }

  /* ——— BOTTOM SHEET ——— */
  function closeSheet() {
    var s = document.querySelector('.lx-sheet-wrap');
    if (!s) return;
    s.classList.remove('on');
    setTimeout(function () { s.remove(); }, 320);
  }
  function openSheet(o) {
    closeSheet();
    var steps = (o.steps || []).map(function (st, i) {
      return '<li><span class="lx-step-n">' + (i + 1) + '</span><span class="lx-step-t">' + st + '</span></li>';
    }).join('');
    var w = document.createElement('div');
    w.className = 'lx-sheet-wrap';
    w.innerHTML =
      '<div class="lx-sheet-scrim"></div>' +
      '<div class="lx-sheet" role="dialog" aria-modal="true" aria-label="' + o.title + '">' +
        '<span class="lx-sheet-grab"></span>' +
        '<div class="lx-sheet-ico">' + icon(o.icon || 'info') + '</div>' +
        '<h3 class="lx-sheet-title">' + o.title + '</h3>' +
        '<p class="lx-sheet-body">' + o.body + '</p>' +
        (steps ? '<ol class="lx-steps">' + steps + '</ol>' : '') +
        '<div class="lx-sheet-actions">' +
          (o.primary ? '<button type="button" class="lx-sheet-primary">' + o.primary.label + '</button>' : '') +
          '<button type="button" class="lx-sheet-secondary">' + (o.secondary || 'Close') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(w);
    setTimeout(function () { w.classList.add('on'); }, 20);
    w.querySelector('.lx-sheet-scrim').addEventListener('click', closeSheet);
    w.querySelector('.lx-sheet-secondary').addEventListener('click', closeSheet);
    var p = w.querySelector('.lx-sheet-primary');
    if (p) p.addEventListener('click', function () { closeSheet(); o.primary.fn(); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });

  /* ——— INSTALL ——— */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    updateUI();
  });
  window.addEventListener('appinstalled', function () {
    deferredPrompt = null; isStandalone = true;
    updateUI();
    toast('Shelby Hiver is installed. Open it from your home screen.');
  });

  function installApp() {
    if (isStandalone) { toast('You are already using the app.'); return; }
    if (deferredPrompt) {
      var p = deferredPrompt; deferredPrompt = null;
      p.prompt();
      p.userChoice.then(function (r) { if (r.outcome !== 'accepted') updateUI(); });
      return;
    }
    if (isIOS) {
      openSheet({
        icon: 'download', title: 'Add Shelby Hiver to your Home Screen',
        body: 'Install the app for one-tap access, a full-screen experience, and drop alerts on your iPhone.',
        steps: [
          'Tap the <b>Share</b> icon ' + icon('share', 'lx-inline') + ' in Safari’s toolbar.',
          'Scroll and choose <b>Add to Home Screen</b> ' + icon('square-plus', 'lx-inline') + '.',
          'Tap <b>Add</b>, then open the app and enable alerts.'
        ],
        secondary: 'Got it'
      });
    } else {
      openSheet({
        icon: 'download', title: 'Install Shelby Hiver',
        body: 'Get the full-screen app with offline access and drop alerts.',
        steps: [
          'Open your browser menu (<b>⋮</b> or <b>Share</b>).',
          'Choose <b>Install app</b> or <b>Add to Home screen</b>.',
          'Confirm, then open Shelby Hiver from your home screen.'
        ],
        secondary: 'Got it'
      });
    }
  }

  /* ——— NOTIFICATIONS ——— */
  function showNotification(payload) {
    return (swReg ? Promise.resolve(swReg) : navigator.serviceWorker.ready).then(function (reg) {
      // Via the service worker so it works on Android; no "silent" flag => device default sound.
      return reg.showNotification(payload.title, {
        body: payload.body,
        icon: '/assets/icons/icon-192.png',
        badge: '/assets/icons/badge-96.png',
        tag: payload.tag || 'sh-update',
        renotify: true,
        silent: false,
        vibrate: [140, 70, 140],
        data: { url: payload.url || '/' }
      });
    });
  }

  function afterGranted() {
    showNotification({
      title: 'Alerts are on',
      body: 'You’ll hear from us first about new drops, restocks and order updates.',
      tag: 'sh-welcome', url: '/catalogue.html'
    }).catch(function () {});
    registerBackgroundWork();
    updateUI();
    toast('Drop alerts enabled.');
  }

  function registerBackgroundWork() {
    registerSW().then(function (reg) {
      if (!reg) return;
      try { if (reg.active) reg.active.postMessage({ type: 'CHECK_FEED' }); } catch (e) {}
      if ('periodicSync' in reg) {
        reg.periodicSync.register('sh-drops', { minInterval: 6 * 60 * 60 * 1000 }).catch(function () {});
      }
      // Optional real push: define window.SH_VAPID_PUBLIC_KEY and window.SH_PUSH_ENDPOINT.
      if (window.SH_VAPID_PUBLIC_KEY && 'pushManager' in reg) {
        var b64 = window.SH_VAPID_PUBLIC_KEY.replace(/-/g, '+').replace(/_/g, '/');
        var raw = atob(b64 + '==='.slice((b64.length + 3) % 4));
        var key = new Uint8Array(raw.length);
        for (var i = 0; i < raw.length; i++) key[i] = raw.charCodeAt(i);
        reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key }).then(function (sub) {
          if (window.SH_PUSH_ENDPOINT) {
            fetch(window.SH_PUSH_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sub) }).catch(function () {});
          }
        }).catch(function () {});
      }
    });
  }

  function enableAlerts() {
    var st = alertState();
    if (st === 'needs-install') {
      openSheet({
        icon: 'bell', title: 'Install the app to get alerts',
        body: 'On iPhone, notifications work once Shelby Hiver is added to your Home Screen (iOS 16.4 or later).',
        steps: [
          'Tap the <b>Share</b> icon ' + icon('share', 'lx-inline') + ' in Safari.',
          'Choose <b>Add to Home Screen</b> ' + icon('square-plus', 'lx-inline') + '.',
          'Open the app from your Home Screen and tap <b>Enable alerts</b>.'
        ],
        secondary: 'Got it'
      });
      return;
    }
    if (st === 'unsupported') { toast('This browser does not support notifications.'); return; }
    if (st === 'denied') {
      openSheet({
        icon: 'bell-off', title: 'Alerts are blocked',
        body: 'Notifications were turned off for this site. You can switch them back on in your phone settings.',
        steps: [
          'Open <b>Settings</b> → <b>Apps</b> (or <b>Notifications</b>) → <b>Shelby Hiver</b> or your browser.',
          'Choose <b>Notifications</b> and turn them <b>On</b>.',
          'Come back here and tap <b>Enable alerts</b>.'
        ],
        secondary: 'Got it'
      });
      return;
    }
    if (st === 'granted') {
      openSheet({
        icon: 'bell-ring', title: 'Drop alerts are on',
        body: 'You will be notified about new drops, restocks and order updates with your phone’s default notification sound.',
        primary: { label: 'Send a test alert', fn: function () {
          showNotification({ title: 'Test alert', body: 'This is how Shelby Hiver alerts will look and sound.', tag: 'sh-test', url: '/' })
            .catch(function () { toast('Could not show the test alert.'); });
        } },
        secondary: 'Close'
      });
      return;
    }
    // default → ask
    registerSW().then(function () {
      var req = Notification.requestPermission(function () {});
      var done = function (perm) { if (perm === 'granted') afterGranted(); else updateUI(); };
      if (req && typeof req.then === 'function') req.then(done); else setTimeout(function () { done(Notification.permission); }, 600);
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-lx]');
    if (!t) return;
    var act = t.getAttribute('data-lx');
    if (act === 'install') { e.preventDefault(); if (typeof window.closeMobileNav === 'function') try { window.closeMobileNav(); } catch (x) {} installApp(); }
    else if (act === 'alerts') { e.preventDefault(); if (typeof window.closeMobileNav === 'function') try { window.closeMobileNav(); } catch (x) {} enableAlerts(); }
  });

  /* ——— ICON UPGRADES (header, bottom bar, drawer) ——— */
  function swapSvg(container, name, cls) {
    if (!container) return;
    var svg = container.querySelector('svg');
    var html = icon(name, cls);
    if (svg) svg.outerHTML = html; else container.insertAdjacentHTML('afterbegin', html);
  }

  function upgradeChrome() {
    // Header
    swapSvg(document.querySelector('.h-act-wishlist .h-act-icon'), 'heart');
    swapSvg(document.querySelector('#openCart .h-act-icon'), 'shopping-bag');
    document.querySelectorAll('.header-search-icon, .mobile-search-icon').forEach(function (s) {
      s.outerHTML = icon('search', s.getAttribute('class').replace('lx-i', ''));
    });
    var burger = document.getElementById('openMob');
    if (burger && !burger.dataset.lx) { burger.dataset.lx = '1'; burger.innerHTML = icon('menu'); }

    // Bottom bar
    var map = { mobBarHome: 'home', mobBarCatalogue: 'layout-grid', mobBarWishlist: 'heart', mobBarCart: 'shopping-bag', mobBarProfile: 'user' };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) swapSvg(el.querySelector('.mob-bar-icon'), map[id]);
    });

    // Theme toggle (sun / moon)
    document.querySelectorAll('.theme-switch-btn').forEach(function (b) {
      if (b.dataset.lx) return; b.dataset.lx = '1';
      var sun = b.querySelector('.theme-icon-sun'), moon = b.querySelector('.theme-icon-moon');
      if (sun) sun.outerHTML = icon('sun', 'theme-icon-sun');
      if (moon) moon.outerHTML = icon('moon', 'theme-icon-moon');
    });

    // Drawer
    var rules = [
      [/all collection/i, 'layout-grid'], [/t-?shirt|tees/i, 'shirt'], [/hoodie/i, 'layers'], [/cargo|pants/i, 'package'],
      [/lookbook/i, 'book-open'], [/bag/i, 'shopping-bag'], [/wishlist/i, 'heart'], [/orders|track/i, 'truck'],
      [/whatsapp|concierge/i, 'message-circle'], [/size|fit/i, 'ruler'], [/catalogue|shop/i, 'layout-grid'],
      [/sign|log/i, 'log-in'], [/account|profile/i, 'user']
    ];
    document.querySelectorAll('.mobile-drawer-panel .mob-nav-item').forEach(function (a) {
      if (a.dataset.lx || a.hasAttribute('data-lx')) return;
      if (a.dataset.lxDone) return; a.dataset.lxDone = '1';
      var txt = (a.querySelector('.mob-nav-text') || a).textContent || '';
      var name = 'chevron-right';
      for (var i = 0; i < rules.length; i++) if (rules[i][0].test(txt)) { name = rules[i][1]; break; }
      a.querySelectorAll(':scope > svg').forEach(function (s) { s.remove(); });
      a.insertAdjacentHTML('afterbegin', '<span class="mob-nav-ico">' + icon(name) + '</span>');
      var arrow = a.querySelector('.mob-nav-arrow');
      if (arrow) {
        var ext = /↗/.test(arrow.textContent);
        arrow.innerHTML = icon(ext ? 'arrow-up-right' : 'chevron-right', 'mob-nav-chev');
      }
    });
    var close = document.querySelector('.mob-drawer-close');
    if (close && !close.dataset.lx) { close.dataset.lx = '1'; close.innerHTML = icon('x'); }

    // Social buttons in drawer
    swapSvg(document.querySelector('.mob-social-btn-colored.btn-instagram'), 'instagram');
    swapSvg(document.querySelector('.mob-social-btn-colored.btn-facebook'), 'facebook');
  }

  function addDrawerAppSection() {
    var panel = document.querySelector('.mobile-drawer-panel');
    if (!panel || panel.querySelector('.lx-drawer-app')) return;
    var sections = panel.querySelectorAll('.mob-drawer-section');
    var anchor = null;
    sections.forEach(function (s) {
      var t = s.querySelector('.mob-drawer-sec-title');
      if (t && /appearance/i.test(t.textContent)) anchor = s;
    });
    var sec = document.createElement('div');
    sec.className = 'mob-drawer-section lx-drawer-app';
    sec.innerHTML =
      '<div class="mob-drawer-sec-title">APP</div>' +
      '<nav class="mob-drawer-nav">' +
        '<a href="#" class="mob-nav-item" data-lx="install" hidden><span class="mob-nav-ico">' + icon('download') + '</span><span class="mob-nav-text">Install Shelby Hiver app</span><span class="mob-nav-arrow">' + icon('chevron-right', 'mob-nav-chev') + '</span></a>' +
        '<a href="#" class="mob-nav-item" data-lx="alerts"><span class="mob-nav-ico">' + icon('bell') + '</span><span class="mob-nav-text">Enable drop alerts</span><span class="mob-nav-arrow">' + icon('chevron-right', 'mob-nav-chev') + '</span></a>' +
      '</nav>';
    if (anchor) anchor.parentNode.insertBefore(sec, anchor); else panel.appendChild(sec);
  }

  /* ——— MISC ——— */
  function headerScroll() {
    var h = document.querySelector('.site-header');
    if (!h) return;
    var on = function () { h.classList.toggle('lx-scrolled', window.scrollY > 12); };
    window.addEventListener('scroll', on, { passive: true });
    on();
  }

  function upgradeStars() {
    document.querySelectorAll('.review-stars').forEach(function (el) {
      if (el.dataset.lx) return;
      el.dataset.lx = '1';
      el.setAttribute('aria-label', '5 out of 5 stars');
      el.innerHTML = new Array(6).join(icon('star'));
    });
    document.querySelectorAll('.review-card').forEach(function (c) {
      if (c.querySelector('.lx-quote')) return;
      c.insertAdjacentHTML('afterbegin', icon('quote', 'lx-quote'));
    });
    document.querySelectorAll('.review-author strong').forEach(function (s) {
      if (s.querySelector('.lx-i')) return;
      s.insertAdjacentHTML('afterbegin', icon('badge-check'));
    });
  }

  function reveal() {
    var sel = '.sec-editorial-head, .craft-card, .trust-item, .lookbook-card, .review-card, .faq-item, .ssl-item, .silhouette-visual, .matrix-table-card, .concierge-banner-grid, .lookbook-head-row, .lx-hero-stats';
    var els = document.querySelectorAll(sel);
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('lx-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--lx-d', (Math.min(sib, 5) * 0.09) + 's');
      el.classList.add('lx-reveal');
      io.observe(el);
    });
    setTimeout(function () { els.forEach(function (el) { el.classList.add('lx-in'); }); }, 6000);
  }

  /* ——— 3D: card tilt + hero parallax + footer wordmark ——— */
  function initTilt() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var sel = '.pc, .lookbook-card, .review-card';
    document.addEventListener('mousemove', function (e) {
      var el = e.target.closest && e.target.closest(sel);
      if (!el) return;
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.classList.add('lx-tilting');
      el.style.setProperty('--ry', ((px - 0.5) * 12).toFixed(2) + 'deg');
      el.style.setProperty('--rx', ((0.5 - py) * 9).toFixed(2) + 'deg');
      el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    }, { passive: true });
    document.addEventListener('mouseout', function (e) {
      var el = e.target.closest && e.target.closest(sel);
      if (!el || el.contains(e.relatedTarget)) return;
      el.classList.remove('lx-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  }

  function initHeroParallax() {
    var card = document.getElementById('lxHero');
    var vis = document.getElementById('lxHeroVis');
    if (!card || !vis) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      vis.style.setProperty('--mx', (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
      vis.style.setProperty('--my', (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
    }, { passive: true });
    card.addEventListener('mouseleave', function () {
      vis.style.setProperty('--mx', 0); vis.style.setProperty('--my', 0);
    });
    // Touch / no-hover devices: let the layers drift gently with scroll.
    if (!window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('scroll', function () {
        var r = card.getBoundingClientRect();
        var t = Math.max(-1, Math.min(1, -r.top / Math.max(1, r.height)));
        vis.style.setProperty('--my', (t * 1.4).toFixed(3));
      }, { passive: true });
    }
  }

  function addMegaWordmark() {
    var c = document.querySelector('.site-footer .container');
    if (!c || c.querySelector('.lx-mega')) return;
    c.insertAdjacentHTML('beforeend', '<div class="lx-mega" aria-hidden="true">Shelby Hiver</div>');
  }

  // The stock preloader waits for every multi-megabyte image. Cap it.
  function capPreloader() {
    var pl = document.getElementById('preloader');
    if (pl) setTimeout(function () { pl.classList.add('done'); }, 1400);
  }

  function init() {
    if (isStandalone) document.documentElement.classList.add('lx-standalone');
    capPreloader();
    injectSprite();
    injectTopBar();
    injectHeaderActions();
    bindProfileTab();
    addDrawerAppSection();
    upgradeChrome();
    headerScroll();
    upgradeStars();
    reveal();
    initTilt();
    initHeroParallax();
    addMegaWordmark();
    updateUI();
    registerSW().then(function () {
      if (alertState() === 'granted') registerBackgroundWork();
    });
    // Account card is (re)rendered by auth.js; make sure its icons are in place.
    setTimeout(function () { upgradeChrome(); updateUI(); }, 400);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
