//instal service worker
self.addEventListener("install", e => {
    e.waitUntil(
        //create cache called static
        caches.open("static").then(cache => {
            //upload into cache
            return cache.addAll([
                "./",
                "style.css",
                "js/init.js",
                "js/script.js",
                "js/materialize.js",
                "css/materialize.css",
            ]).then(() => self.skipWaiting());
        }),
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called static
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
})
