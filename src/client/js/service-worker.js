self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
    event.waitUntil(
        caches.open("travel-app-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/main.js",
                "/styles.css"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
