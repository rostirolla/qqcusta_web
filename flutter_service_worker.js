'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "dcc412808ef2b26f6037e33e3055ca41",
"/assets\assets\images\logo_action.png": "415c9ecf809ba64c5b572dbf72101d15",
"/assets\assets\images\online_store.png": "3bcb14c3ee0f1fe54bccb3ebf9b17f86",
"/assets\assets\images\qrcode.png": "39c914676969e77904be90c413f15b07",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "a4f57faa7e00dece192239df1bbd2211",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "d5a11c84df274babdf17e97c20418fb3",
"/main.dart.js": "32dba0e8e5e608f9bcacbea151d4ef1a",
"/manifest.json": "0ccdd10547a6db058a339125f14581e3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
