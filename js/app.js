if (navigator.serviceWorker) {
    console.log('SW: Esta disponible')
    navigator.serviceWorker.register('/sw.js')
} else {
    console.log('SW: No esta disponible, cambia de navegador');
}