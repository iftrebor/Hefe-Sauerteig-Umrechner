// Deaktiviert, um Caching-Effekte sicher auszuschließen.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
