self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // Become available to all pages
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request)); // Always fetch from network
});