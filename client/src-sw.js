//Workbox stategies are required in order to cache js and css
//In  order to respond to a request with a precached response, the StaleWhileRecalidate is required from 'workbox'
// By using the StaleWhileRecalidate stategy, it will check if there is a cached reponse that can be sent
// Import  offlineFallback, warmStrategyCache from workbox-recipes
import { offlineFallback, warmStrategyCache } from "workbox-recipes";
// Import StaleWhileRevalidate, CacheFirst strategies from workbox
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
//Import registerRoute from workbox routing
import { registerRoute } from "workbox-routing";
//Import CacheableResponsePlugin from workbox-cacheable-response
import { CacheableResponsePlugin } from "workbox-cacheable-response";
//Import ExpirationPlugin from workbox
import { ExpirationPlugin } from "workbox-expiration";
//Import precacheAndRoute from workbox
import { precacheAndRoute } from "workbox-precaching";

//precacheAndRoute() method takes an array of URLs to precache.
//self.__WB_MANIFEST is the array of URLs to precache
precacheAndRoute(self.__WB_MANIFEST);

//Define cacheFirst strategy. Non critical assets that can be gradually cached
const pageCache = new CacheFirst({
  //cache storage name
  cacheName: "page-cache",
  plugins: [
    // Cache responses with defined statuses for a set expiration date (30days)
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

//During the service worker install phase, warmStrategyCache allows the user to load a URL into the cache
//index.html cached during installation
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

//register route to use strategy. When request.mode is 'navigate' it will use the cache strategy defined in pageCache
registerRoute(({ request }) => request.mode === "navigate", pageCache);

//Assest caching
registerRoute(
  //Define callback function that filters what to cache.
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  new StaleWhileRevalidate({
    //cache storage name
    cacheName: "asset-cache",
    plugins: [
      // Cache responses with defined statuses for up to 30days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
