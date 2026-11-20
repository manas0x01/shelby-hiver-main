/* ============================================================
   SHELBY HIVER — SERVICE WORKER
   - Offline-capable app shell (installable PWA)
   - Notifications via the OS default notification sound
   - Drop-alert feed (drops.json) checked on open + periodic sync
   - Push handler ready for a real push server (VAPID)
   ============================================================ */
const VERSION = 'sh-v9';
const SHELL_CACHE = VERSION + '-shell';
const RUNTIME_CACHE = VERSION + '-runtime';
const IMAGE_CACHE = VERSION + '-images';
const META_CACHE = 'sh-meta';
const MAX_IMAGES = 70;

const SHELL = [
  'offline.html',
  'css/main.css', 'css/luxe.css', 'css/auth.css', 'css/checkout.css', 'css/wishlist.css',
  'js/main.js', 'js/auth.js', 'js/checkout.js', 'js/wishlist.js', 'js/luxe.js',
  'assets/logo-dark.png', 'assets/logo-light.png',
  'assets/icons/icon-192.png', 'assets/icons/badge-96.png'
];

const ICON = 'assets/icons/icon-192.png';
const BADGE = 'assets/icons/badge-96.png';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((k) => k.startsWith('sh-v') && ![SHELL_CACHE, RUNTIME_CACHE, IMAGE_CACHE].includes(k))
        .map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* ——— FETCH STRATEGIES ——— */
async function trimCache(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  if (keys.length > max) {
    await Promise.all(keys.slice(0, keys.length - max).map((k) => cache.delete(k)));
  }
}

async function networkFirstPage(request) {
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch (err) {
    const cached = await caches.match(request, { ignoreSearch: true });
    return cached || caches.match('offline.html');
  }
}

async function networkFirstAsset(request) {
  try {
    const fresh = await fetch(request, { cache: 'no-cache' });
    if (fresh && fresh.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch (err) {
    return (await caches.match(request)) || Response.error();
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((res) => { if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone()); return res; })
    .catch(() => cached);
  return cached || network;
}

async function cacheFirstImage(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res && res.ok) { cache.put(request, res.clone()); trimCache(IMAGE_CACHE, MAX_IMAGES); }
    return res;
  } catch (err) {
    return cached || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!/^https?:$/.test(url.protocol)) return;

  // Never cache the feed or the worker itself.
  if (url.origin === location.origin && (url.pathname.endsWith('/drops.json') || url.pathname.endsWith('/sw.js'))) return;

  if (req.mode === 'navigate') {
    event.respondWith(networkFirstPage(req));
    return;
  }

  if (url.origin === location.origin) {
    if (req.destination === 'image') { event.respondWith(cacheFirstImage(req)); return; }
    // Code: network-first so a new deploy is picked up immediately; cache is the offline fallback.
    if (['style', 'script'].includes(req.destination)) {
      event.respondWith(networkFirstAsset(req));
      return;
    }
    if (['font', 'manifest'].includes(req.destination) || url.pathname.endsWith('.webmanifest')) {
      event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
    }
    return;
  }

  // Google Fonts
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
  }
});

/* ——— NOTIFICATIONS ———
   No `silent` flag is set, so Android / iOS play the phone's own default
   notification sound and vibration for the app's notification channel. */
function showAlert(d) {
  const payload = d || {};
  return self.registration.showNotification(payload.title || 'Shelby Hiver', {
    body: payload.body || '',
    icon: payload.icon || ICON,
    badge: BADGE,
    image: payload.image || undefined,
    tag: payload.tag || 'sh-update',
    renotify: true,
    silent: false,
    vibrate: [140, 70, 140],
    timestamp: Date.now(),
    data: { url: payload.url || '/' },
    actions: payload.actions || [{ action: 'open', title: 'Open' }]
  });
}

self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; }
  catch (e) { data = { body: event.data ? event.data.text() : '' }; }
  event.waitUntil(showAlert(data));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL((event.notification.data && event.notification.data.url) || '/', self.registration.scope).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) {
          if ('navigate' in c) c.navigate(target).catch(() => {});
          return c.focus();
        }
      }
      return self.clients.openWindow(target);
    })
  );
});

/* ——— DROP-ALERT FEED ——— */
async function getSeen() {
  const cache = await caches.open(META_CACHE);
  const res = await cache.match('seen');
  return res ? res.json() : null;
}
async function setSeen(ids) {
  const cache = await caches.open(META_CACHE);
  await cache.put('seen', new Response(JSON.stringify(ids), { headers: { 'Content-Type': 'application/json' } }));
}

async function checkFeed() {
  if (!self.Notification || Notification.permission !== 'granted') return;
  let feed;
  try {
    const res = await fetch('drops.json', { cache: 'no-store' });
    if (!res.ok) return;
    feed = await res.json();
  } catch (e) { return; }
  const items = Array.isArray(feed.items) ? feed.items : [];
  if (!items.length) return;

  const seen = await getSeen();
  const ids = items.map((i) => i.id);
  if (seen === null) { await setSeen(ids); return; } // first run: don't spam existing items
  const fresh = items.filter((i) => !seen.includes(i.id)).slice(0, 3);
  for (const item of fresh) {
    await showAlert({ title: item.title, body: item.body, url: item.url, image: item.image, tag: 'drop-' + item.id });
  }
  if (fresh.length) await setSeen(Array.from(new Set(seen.concat(ids))));
}

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'sh-drops') event.waitUntil(checkFeed());
});

self.addEventListener('message', (event) => {
  const msg = event.data || {};
  if (msg.type === 'SHOW_NOTIFICATION') event.waitUntil(showAlert(msg.payload));
  else if (msg.type === 'CHECK_FEED') event.waitUntil(checkFeed());
  else if (msg.type === 'SKIP_WAITING') self.skipWaiting();
});
