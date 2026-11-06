const VERSION="awacak-v3";
const SHELL=["./", "index.html", "reperes.js", "manifest.webmanifest", "img/avatar-castor.png", "img/avatar-cerf.png", "img/avatar-ecureuil.png", "img/avatar-herisson.png", "img/avatar-hibou.png", "img/avatar-lievre.png", "img/avatar-loup.png", "img/avatar-ours.png", "img/avatar-raton.png", "img/avatar-renard.png", "img/enfants.png", "img/icon-192.png", "img/icon-512.png", "img/sph-coeur.webp", "img/sph-corps.webp", "img/sph-esprit.webp", "img/sph-tete.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("awacak-")&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;
  if(e.request.mode==="navigate"||u.pathname.endsWith(".html")||u.pathname.endsWith(".js")){e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("index.html"))));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
