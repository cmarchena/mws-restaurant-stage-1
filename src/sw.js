let staticCacheName = "udacity-mws-restaurants-v3";
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "assets/css/styles.css",
        "assets/js/dbhelper.js",
        "assets/js/main.js",
        "assets/js/restaurant_info.js",
        "assets/data/restaurants.json",
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyACGz0tWs__s2RqU_lZ5dZc3PYTYn-O7-E&libraries=places&callback=initMap"
      ]);
    })
  );
});
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith("udacity-") && cacheName != staticCacheName
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

