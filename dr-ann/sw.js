const VERSION='dr-ann-v8';
const ROOT='/dr-ann/';
const CORE=[ROOT,ROOT+'original/',ROOT+'colour/',ROOT+'book.css',ROOT+'compositions.css',ROOT+'book.js',ROOT+'sound.js',ROOT+'manifest.webmanifest',ROOT+'assets/icon.svg',ROOT+'assets/icon-192.png',ROOT+'assets/icon-512.png',ROOT+'source/transcription.json','/fonts/CormorantGaramond.woff2','/fonts/CormorantGaramond-Italic.woff2'];
const PAGES=Array.from({length:17},(_,i)=>`${ROOT}assets/page-${i+1}.webp`);
const COLOUR=[2,3,4,5,7,9,11,13,15,17].map(n=>`${ROOT}assets/color-${n}.webp`);
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('dr-ann-')&&key!==VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  const url=new URL(event.request.url);
  if(!url.pathname.startsWith(ROOT)&&!url.pathname.startsWith('/fonts/'))return;
  event.respondWith((async()=>{
    const cache=await caches.open(VERSION);
    if(event.request.mode==='navigate'){
      try {const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;}
      catch{return (await cache.match(event.request)) || (await cache.match(ROOT));}
    }
    const saved=await cache.match(event.request);
    if(saved)return saved;
    const response=await fetch(event.request);
    if(response.ok)await cache.put(event.request,response.clone());
    return response;
  })());
});
self.addEventListener('message',event=>{
  if(event.data?.type!=='save-book')return;
  event.waitUntil((async()=>{
    try{
      const cache=await caches.open(VERSION);
      // Bounded batches keep this friendly to phones and slower connections.
      const files=[...CORE,...PAGES,...COLOUR];
      for(let i=0;i<files.length;i+=4)await Promise.all(files.slice(i,i+4).map(async file=>{if(!await cache.match(file))await cache.add(file);}));
      event.ports[0]?.postMessage({type:'saved'});
    }catch(error){event.ports[0]?.postMessage({type:'error',error:String(error)});}
  })());
});
