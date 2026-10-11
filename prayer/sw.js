const CACHE = 'mantra-pathan-v1';
const ASSETS = ['/prayer/', '/prayer/index.html', '/prayer/shri-dattamala-mantra.html', '/prayer/manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
