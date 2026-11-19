/* BF GYM PWA: cache public app shell only. Never intercept POST or third-party payments. */
const CACHE = 'bf-gym-shell-v1';
const PRECACHE = ['/app/', '/offline/', '/manifest.webmanifest', '/app-icon-192.png', '/app-icon-512.png', '/bf-icon.svg'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('bf-gym-shell-') && key !== CACHE).map((key) => caches.delete(key)))),
    self.clients.claim(),
  ]));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/.netlify/') || url.pathname.startsWith('/api/')) return;
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then((response) => {
        if (response.ok && (url.pathname === '/app/' || url.pathname === '/')) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then((cache) => cache.put(request, copy)));
        }
        return response;
      }).catch(async () => (await caches.match(request)) || (await caches.match('/offline/'))),
    );
    return;
  }
  if (['/manifest.webmanifest', '/app-icon-192.png', '/app-icon-512.png', '/bf-icon.svg'].includes(url.pathname) || url.pathname.startsWith('/_astro/')) {
    event.respondWith(
      caches.match(request).then((hit) => hit || fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then((cache) => cache.put(request, copy)));
        }
        return response;
      })),
    );
  }
});