const CACHE_NAME = 'yas-hesabla-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Service Worker quraşdırılması
self.addEventListener('install', (event) => {
  console.log('[SW] Install hadisəsi');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache açıldı');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Bütün fayllar cache-ləndi');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Cache-ləmə xətası:', error);
      })
  );
});

// Aktivləşdirmə
self.addEventListener('activate', (event) => {
  console.log('[SW] Aktivləşdirmə hadisəsi');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Köhnə cache silindi:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service Worker aktivləşdirildi');
      return self.clients.claim();
    })
  );
});

// Fetch hadisələri - Cache-First strategiyası
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache-də varsa, onu qaytar
        if (response) {
          console.log('[SW] Cache-dən göndərildi:', event.request.url);
          return response;
        }

        // Cache-də yoxdursa, şəbəkədən əldə et
        console.log('[SW] Şəbəkədən yüklənir:', event.request.url);
        return fetch(event.request).then((response) => {
          // Düzgün cavab olub-olmadığını yoxla
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cavabı klonla və cache-lə
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
              console.log('[SW] Yeni fayl cache-ləndi:', event.request.url);
            });

          return response;
        }).catch((error) => {
          console.error('[SW] Fetch xətası:', error);
          
          // Offline səhifə göstər (əgər varsa)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          
          return new Response('Offline rejimdəsiniz və bu resurs mövcud deyil', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Background Sync (gələcək funksiyalar üçün hazır)
self.addEventListener('sync', (event) => {
  console.log('[SW] Sync hadisəsi:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    console.log('[SW] Məlumat sinxronlaşdırılır...');
    // Gələcək sinxronlaşdırma funksiyaları buraya əlavə edilə bilər
    return Promise.resolve();
  } catch (error) {
    console.error('[SW] Sinxronlaşdırma xətası:', error);
    return Promise.reject(error);
  }
}

// Push bildirişləri (gələcək funksiyalar üçün hazır)
self.addEventListener('push', (event) => {
  console.log('[SW] Push bildirişi alındı');
  
  const options = {
    body: event.data ? event.data.text() : 'Yeni bildiriş',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'yas-hesabla-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Yaş Hesablayıcı', options)
  );
});

// Bildiriş klikləri
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Bildirişə klik edildi');
  
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});

// Mesaj hadisələri (səhifə ilə kommunikasiya)
self.addEventListener('message', (event) => {
  console.log('[SW] Mesaj alındı:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(event.data.payload))
    );
  }
});

console.log('[SW] Service Worker yükləndi');
