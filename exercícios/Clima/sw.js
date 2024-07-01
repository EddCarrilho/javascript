// Nome do cache (controle de versão)
const cachePWA = 'cache-v2';

// Arquivos a serem armazenados em cache
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/clima.js',
  '/sw.js',
  '/manifest.json',
  '/nuvem192.png',
  '/nuvem512.png',
  '/splash.jpg'
]

// Instalando o Service Worker e armazenando os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cachePWA)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
  )
})

// Interceptando as solicitações de rede e servindo arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})

async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 1 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}