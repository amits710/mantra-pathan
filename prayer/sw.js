const CACHE = 'mantra-pathan-v2';
const ASSETS = [
  '/prayer/',
  '/prayer/index.html',
  '/prayer/shri-dattamala-mantra.html',
  '/prayer/om-anandam-himalayam.html',
  '/prayer/shri-ganesh-gayatri.html',
  '/prayer/shri-navagraha-kavach-stotra.html',
  '/prayer/shri-brihaspati-kripa-kavach.html',
  '/prayer/rudrashtakavach.html',
  '/prayer/dadaji-aarti.html',
  '/prayer/manifest.json'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
