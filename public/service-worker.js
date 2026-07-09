const CACHE_NAME = "persona-os-pwa-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./apple-touch-icon.png",
  "./icons/favicon-16.png",
  "./icons/favicon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512-maskable.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(cacheAppShell().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  event.respondWith(handleAssetRequest(request));
});

async function handleNavigationRequest(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch {
    return (
      (await cache.match(request)) ||
      (await cache.match("./index.html")) ||
      (await cache.match("./"))
    );
  }
}

async function handleAssetRequest(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);

  if (response && response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }

  return response;
}

async function cacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(APP_SHELL);

  const indexResponse =
    (await fetch("./index.html", { cache: "reload" }).catch(() => null)) ||
    (await fetch("./", { cache: "reload" }).catch(() => null));

  if (!indexResponse || !indexResponse.ok) {
    return;
  }

  await cache.put("./index.html", indexResponse.clone());

  const html = await indexResponse.text();
  const assetUrls = Array.from(
    html.matchAll(/\b(?:href|src)="([^"]+\.(?:css|js))"/g),
    (match) => new URL(match[1], self.location.href).toString()
  ).filter((assetUrl) => new URL(assetUrl).origin === self.location.origin);

  await Promise.all(
    assetUrls.map((assetUrl) =>
      fetch(assetUrl, { cache: "reload" })
        .then((response) => {
          if (response.ok) {
            return cache.put(assetUrl, response);
          }
          return undefined;
        })
        .catch(() => undefined)
    )
  );
}
