// Offline cache for the OAU Heritage Gallery. Bump VERSION whenever any file changes.
const VERSION = 'oau-gallery-v1';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './vendor/three.min.js',
  './fonts/instrument-serif-latin-400-normal.woff2',
  './fonts/instrument-serif-latin-400-italic.woff2',
  './fonts/archivo-latin-400-normal.woff2',
  './fonts/archivo-latin-400-italic.woff2',
  './fonts/archivo-latin-500-normal.woff2',
  './fonts/archivo-latin-600-normal.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first, then network; pages fall back to the cached index when offline.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(hit => hit || fetch(event.request).catch(() => {
      if (event.request.mode === 'navigate') return caches.match('./index.html');
    }))
  );
});
