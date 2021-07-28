var cacheName = 'shell-contentv1';
var filesToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/css/materialize.min.css',
  '/css/style.css',
  '/js/materialize.min.js',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  //Add the file to the cache
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }).then(function(){
        return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e){
  console.log('[ServiceWorker] Activated');
  e.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key) {
        if(key !== filesToCache){
          console.log('Remove Old Cache', key);
          return caches.delete(key)
        }
      }));
    })
  );
  return self.clients.claim();
})
