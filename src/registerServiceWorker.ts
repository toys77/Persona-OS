export function registerServiceWorker() {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    const baseUrl = import.meta.env.BASE_URL;
    const serviceWorkerUrl = `${baseUrl}service-worker.js`;

    navigator.serviceWorker.register(serviceWorkerUrl, { scope: baseUrl }).catch(
      (error) => {
        console.warn("Failed to register Persona OS service worker", error);
      }
    );
  });
}
