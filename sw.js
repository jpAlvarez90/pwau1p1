self.addEventListener('install', e => {
    console.log('SW: Instalado')
})

self.addEventListener('activate', e => {
    console.log('SW: Activado');
})

self.addEventListener('fetch', e => {
    if (e.request.url.includes('.jpeg') || e.request.url.includes('.jpg')) {
        let response = fetch('./img/gato2.jpg')
        e.respondWith(response)
    }

    if (e.request.url.includes('page.css')) {
        let response = new Response(`body {
            background-color: black !important;
            color: red;
        }`, 
        {
            headers: {
                'Content-Type':'text/css'
            }
        })
        e.respondWith(response)
    }
})