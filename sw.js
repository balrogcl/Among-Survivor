/* Caché sin conexión. Sube el número de versión al publicar cambios. */
const V='among-survivor-v27',FILES=['./','index.html','css/style.css','js/game.js','assets/sprites.js','assets/cafeteria.js','assets/medbay.js','assets/electrical.js','assets/reactor.js','assets/engine.js','assets/admin.js','assets/deco.js','assets/music.mp3','manifest.webmanifest','assets/icon-192.png','assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match('index.html'))))});
