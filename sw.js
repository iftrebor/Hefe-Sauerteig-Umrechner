// Service Worker derzeit absichtlich leer/deaktiviert.
// Hintergrund: iOS/PWA-Caching als Fehlerquelle ausschließen.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
