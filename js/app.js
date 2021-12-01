let url = window.location.href
let swRedirect = '/pwau1p1/sw.js'

if (navigator.serviceWorker) {
    if (url.includes('localhost') || url.includes('127.0.0.1'))
        swRedirect = '/sw.js'

    navigator.serviceWorker.register(swRedirect)
} else {
    console.log('SW: No esta disponible, cambia de navegador');
}