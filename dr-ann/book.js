import {unlockSound,playSound,stopSound} from './sound.js';
const BASE = '/dr-ann/';
const $ = (id) => document.getElementById(id);
const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const copy = {
  sv:{original:'Original',colour:'I färg & rörelse',previous:'Tillbaka',next:'Nästa',begin:'Börja läsa',end:'Till omslaget',cover:'Omslag',littleBook:'EN LITEN BOK',choosePage:'Vart vill du gå?',reading:'Läs i din egen takt',textSize:'Textstorlek',animations:'Lugna animationer',fullscreen:'Läs i helskärm ↗',offline:'Spara boken för läsning offline ↓',install:'På mobilen kan du välja ”Lägg till på hemskärmen” i webbläsarens meny.',credits:'Text & teckningar · J. Dvärby',editionNote:'Svenska originalord. Varsamt satt text. Engelsk översättning och en färglagd tolkning.',source:'Se bokens fotograferade original ↗',sourceTitle:'Den handgjorda boken',sourceNote:'Originalfotona bakom det här uppslaget. Tryck på en bild för att se den större.',subtitle:'En liten bok om stora och små problem.',byline:'TEXT & TECKNINGAR · J. DVÄRBY',coverLabel:'Ann och hennes vänner',hint:'Svep för att vända blad · Din plats sparas',tap:'Tryck på bilden och se vad som händer',sourceShort:'Ur den handgjorda boken ↗',restart:'Läs en gång till ↻',page:'Uppslag',settings:'Läsinställningar',choose:'Välj sida',close:'Stäng',saved:'Boken är sparad. Du kan läsa den offline.',saving:'Sparar hela boken…',offlineError:'Boken kunde inte sparas. Kontrollera anslutningen och försök igen.',notSupported:'Offline-läsning stöds inte i den här webbläsaren.',fullError:'Använd webbläsarens helskärmsläge på den här enheten.',resume:'Fortsätt läsa',swipe:'Boknavigering',backLabel:'Föregående sida',nextLabel:'Nästa sida',sourcePhoto:'Fotograferad originalsida',act:'Lek med bilden',reduced:'Din enhet har minskad rörelse aktiverad.',offlineDone:'Boken är sparad offline ✓'},
  en:{original:'Original',colour:'Colour & motion',previous:'Back',next:'Next',begin:'Start reading',end:'Back to the cover',cover:'Cover',littleBook:'A LITTLE BOOK',choosePage:'Where shall we go?',reading:'Read at your own pace',textSize:'Text size',animations:'Gentle animations',fullscreen:'Read in full screen ↗',offline:'Save the book to read offline ↓',install:'On a phone, choose “Add to Home Screen” in your browser’s menu.',credits:'Words & drawings · J. Dvärby',editionNote:'The original Swedish words, carefully typeset. An English translation and a colour interpretation.',source:'See the photographed original book ↗',sourceTitle:'The handmade book',sourceNote:'The original photographs behind this spread. Tap a photograph to see it larger.',subtitle:'A little book about problems, great and small.',byline:'WORDS & DRAWINGS · J. DVÄRBY',coverLabel:'Ann and her friends',hint:'Swipe to turn the page · Your place is saved',tap:'Tap the picture and see what happens',sourceShort:'From the handmade book ↗',restart:'Read it once more ↻',page:'Spread',settings:'Reading settings',choose:'Choose a page',close:'Close',saved:'The book is saved. You can read it offline.',saving:'Saving the whole book…',offlineError:'The book could not be saved. Check your connection and try again.',notSupported:'This browser does not support offline reading.',fullError:'Use your browser’s full-screen mode on this device.',resume:'Continue reading',swipe:'Book navigation',backLabel:'Previous page',nextLabel:'Next page',sourcePhoto:'Photographed original page',act:'Play with the picture',reduced:'Your device has reduced motion enabled.',offlineDone:'Book saved offline ✓'}
};
const titles = [
 ['Omslag','Cover'],['Det här är Ann','This is Ann'],['Doktorssaker','Doctor-things'],['Mc Dinkelspiel','Mc Dinkelspiel'],['En borttappad fot','A missing foot'],['Zorbas','Zorbas'],['Det mjukaste handslaget','The gentlest handshake'],['Geggaöboy','Muck-o-boy'],['Vanlig människomat','Ordinary human food'],['En stadig frukost','A hearty breakfast'],['Den bästa medicinen','The best medicine']
];
const definitions = [
 {pages:[1],art:17,effect:'sun'}, {pages:[2],art:2,effect:'hello'}, {pages:[3],art:3,effect:'walk'}, {pages:[4],art:4,effect:'hello'}, {pages:[5],art:5,effect:'shake'}, {pages:[6,7],art:7,effect:'rocks'}, {pages:[8,9],art:9,effect:'shake'}, {pages:[10,11],art:11,effect:'muck'}, {pages:[12,13],art:13,effect:'steam'}, {pages:[14,15],art:15,effect:'steam'}, {pages:[16,17],art:17,effect:'sun'}
];
let stored = {};
try { stored = JSON.parse(localStorage.getItem('dr-ann-reader-v1') || '{}'); } catch {}
const mediaMotion = matchMedia('(prefers-reduced-motion: reduce)');
const routeEdition = location.pathname.includes('/colour') ? 'colour' : location.pathname.includes('/original') ? 'original' : null;
const hashPage = /^#p(\d+)$/.exec(location.hash);
const state = {lang:stored.lang === 'en' ? 'en' : 'sv',edition:routeEdition || (stored.edition === 'colour' ? 'colour' : 'original'),page:hashPage ? Math.min(10,Number(hashPage[1])) : 0,size:Math.max(.85,Math.min(1.3,Number(stored.size) || 1)),motion:stored.motion !== false,resume:Math.max(0,Math.min(10,Number(stored.page) || 0))};
const t = (key) => copy[state.lang][key];
Object.assign(copy.sv,{sound:'Små ljud i färgutgåvan',soundOn:'Slå på ljud',soundOff:'Stäng av ljud',soundEnabled:'Ljud på · Tryck på bilderna eller de understrukna orden',soundDisabled:'Ljud av',tap:'Tryck på bilden eller ett understruket ord',touchBandage:'bandage'});
Object.assign(copy.en,{sound:'Small sounds in the colour edition',soundOn:'Turn sound on',soundOff:'Turn sound off',soundEnabled:'Sound on · Tap the pictures or underlined words',soundDisabled:'Sound off',tap:'Tap the picture or an underlined word',touchBandage:'bandaged'});
state.sound=false;
if(hashPage && Number(hashPage[1])>0)state.resume=state.page;
const title = (n) => titles[n][state.lang === 'sv' ? 0 : 1];
let scenes = [], spriteId = 0, turnTimer, toastTimer, interactionTimer, workerReady;

function save() {
  try { localStorage.setItem('dr-ann-reader-v1',JSON.stringify({...state,page:state.page || state.resume})); } catch {}
}

// SVG viewports show only the original ink. The source photograph itself is never redrawn.
function sprite(page,box,description,cls='',polygon=null) {
  const [l,top,r,b] = box;
  const id = `ink-${++spriteId}`;
  const points = polygon?.map(([x,y]) => `${x*1000},${y*4000/3}`).join(' ');
  const clip=points?`<polygon points="${points}"/>`:`<rect x="${l*1000}" y="${top*4000/3}" width="${(r-l)*1000}" height="${(b-top)*4000/3}"/>`;
  return `<svg class="ink-sprite ${cls}" viewBox="${l*1000} ${top*4000/3} ${(r-l)*1000} ${(b-top)*4000/3}" role="img" aria-label="${escape(description)}" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="${id}">${clip}</clipPath></defs><image href="${BASE}assets/page-${page}.webp" width="1000" height="1333.3333" clip-path="url(#${id})"/></svg>`;
}
function faithfulArt(page,cls='') {
  const sv = state.lang === 'sv';
  switch(page) {
    case 2:return sprite(2,[.18,.445,.48,.91],sv?'Ann med händerna i rockfickorna':'Ann with her hands in her coat pockets',cls,[[.18,.445],[.47,.445],[.48,.86],[.455,.905],[.335,.905],[.33,.87],[.28,.855],[.19,.87]]);
    case 3:return `<div class="art-group ${cls}">${sprite(3,[.121,.545,.375,.836],sv?'Anns hus':'Ann’s house','house',[[.121,.55],[.16,.545],[.34,.62],[.34,.77],[.375,.81],[.375,.836],[.121,.836]])}${sprite(3,[.46,.73,.537,.812],sv?'Ann går ut':'Ann walks out','walker')}${sprite(3,[.35,.813,.889,.834],'','ground')}</div>`;
    case 4:return `<div class="art-group ${cls}">${sprite(4,[.14,.145,.502,.51],sv?'Ann tittar på Mc Dinkelspiel':'Ann looks at Mc Dinkelspiel','mc-ann',[[.15,.35],[.19,.22],[.3,.145],[.43,.15],[.502,.225],[.477,.275],[.46,.33],[.425,.385],[.385,.421],[.335,.423],[.235,.402],[.22,.47],[.14,.51]])}${sprite(4,[.486,.471,.774,.827],sv?'Mc Dinkelspiel och hans borttappade fot':'Mc Dinkelspiel and his missing foot','mc-acorn')}</div>`;
    case 5:return sprite(5,[.378,.586,.691,.873],sv?'En fot med bandage runt benet':'A foot with a bandaged ankle',cls,[[.47,.586],[.558,.586],[.542,.714],[.493,.79],[.607,.79],[.676,.813],[.691,.873],[.378,.873],[.378,.826],[.416,.782],[.452,.7]]);
    case 7:return sprite(7,[.142,.365,.817,.85],sv?'Den ledsne Zorbas bland krossade stenar':'Sad Zorbas among crushed stones',cls);
    case 9:return sprite(9,[.105,.23,.86,.905],sv?'Ann tar Zorbas jättelika hand medan Mc Dinkelspiel ser på':'Ann shakes Zorbas’s enormous hand while Mc Dinkelspiel watches',cls,[[.105,.765],[.282,.765],[.282,.52],[.34,.48],[.35,.23],[.86,.23],[.86,.905],[.64,.905],[.56,.86],[.45,.865],[.36,.89],[.27,.86],[.18,.905],[.105,.905]]);
    case 11:return `<div class="art-group ${cls}">${sprite(11,[.124,.32,.45,.874],sv?'Raketmuggen med ett träd som sked':'The rocket mug with a tree as a spoon','rocket',[[.124,.32],[.45,.32],[.45,.874],[.21,.874],[.195,.85],[.17,.72],[.15,.56],[.124,.45]])}${sprite(11,[.535,.718,.915,.89],sv?'En hög med sjögegga':'A heap of lake-bottom muck','muck')}</div>`;
    case 13:return sprite(13,[.111,.46,.784,.853],sv?'Kaffe, ostmacka och körsbärstomater':'Coffee, a cheese sandwich and cherry tomatoes',cls);
    case 15:return `<div class="art-group ${cls}">${sprite(15,[.27,.735,.39,.903],sv?'Ett ekollon':'An acorn','acorn')}${sprite(15,[.438,.671,.853,.891],sv?'Slingerstek på spett':'Wriggle-roast on a skewer','skewer')}${sprite(15,[.191,.856,.25,.908],'','tiny')}</div>`;
    case 17:return sprite(17,[.163,.24,.869,.577],sv?'De tre vännerna ser solen gå ner över sjön':'The three friends watch the sun set over the lake',cls,[[.163,.24],[.78,.24],[.85,.35],[.869,.53],[.869,.577],[.163,.577]]);
    default:return '';
  }
}

function effects(effect) {
  if(effect === 'steam' || effect === 'muck') return `<div class="scene-effects"><svg class="steam" viewBox="0 0 70 130"><path d="M28 124C0 93 59 79 29 53S42 20 31 4"/></svg><svg class="steam" viewBox="0 0 70 130"><path d="M28 124C0 93 59 79 29 53S42 20 31 4"/></svg>${effect === 'muck' ? '<i class="bubble"></i><i class="bubble"></i>' : ''}</div>`;
  if(effect === 'rocks') return '<div class="scene-effects"><i class="scene-rock"></i><i class="scene-rock"></i><i class="scene-rock"></i></div>';
  if(effect === 'sun') return '<div class="scene-effects"><i class="sun-glow"></i></div>';
  return '';
}
function colouredArt(scene,cover=false) {
  const desc = title(cover ? 10 : state.page);
  const dimensions={2:[1120,1024],3:[1600,900],4:[1024,1536],5:[1024,1024],7:[1232,1280],9:[1088,1448],11:[1254,1254],13:[1536,1024],15:[1600,901],17:[1536,1024]};
  const [w,h]=dimensions[scene.art];
  const parts={3:[[.418,.626],[.459,.625],[.484,.65],[.485,.711],[.5,.766],[.485,.79],[.458,.766],[.427,.79],[.415,.774],[.431,.727],[.425,.682]],11:[[.071,.04],[.182,.04],[.198,.189],[.202,.28],[.239,.386],[.166,.395],[.13,.276],[.09,.218]],7:[[.789,.751],[.816,.733],[.848,.749],[.869,.795],[.846,.823],[.802,.806]],9:[[.6,.36],[.9,.36],[.91,.52],[.84,.62],[.68,.65],[.51,.61],[.43,.57],[.41,.50],[.46,.44]]};
  const part=parts[scene.art];
  let art;
  if(part){
    const id=`part-${++spriteId}`,points=part.map(([x,y])=>`${x*w},${y*h}`).join(' ');
    art=`<svg class="art-plane coloured-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escape(desc)}"><defs><clipPath id="${id}"><polygon points="${points}"/></clipPath><mask id="${id}-base" maskUnits="userSpaceOnUse" x="0" y="0" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="white"/><polygon points="${points}" fill="black"/></mask></defs><image href="${BASE}assets/color-${scene.art}.webp" width="${w}" height="${h}" mask="url(#${id}-base)"/><g class="moving-part part-${scene.art}"><image href="${BASE}assets/color-${scene.art}.webp" width="${w}" height="${h}" clip-path="url(#${id})"/></g></svg>`;
  }else art=`<img class="art-plane" src="${BASE}assets/color-${scene.art}.webp" alt="${escape(desc)}" width="${w}" height="${h}" decoding="async" fetchpriority="high">`;
  return `<button class="art-trigger" data-effect="${scene.effect}" data-art="${scene.art}" aria-label="${escape(t('act')+': '+desc)}"><span class="scene-wash"></span>${art}${effects(scene.effect)}${scene.art===5?'<span class="bandage-glow"></span>':''}</button>`;
}
function cover() {
  return `<section class="cover" aria-label="${t('cover')}"><div class="cover-copy"><p class="eyebrow">${state.lang==='sv'?'EN BERÄTTELSE AV J. DVÄRBY':'A STORY BY J. DVÄRBY'}</p><h1>Dr. Ann</h1><span class="cover-rule" aria-hidden="true"></span><p class="cover-subtitle">${t('subtitle')}</p><p class="byline">${state.lang==='sv'?'EN HANDGJORD BOK, ATT LÄSA TILLSAMMANS':'A HANDMADE BOOK, TO READ TOGETHER'}</p></div><div class="cover-visual">${state.edition === 'colour' ? colouredArt(definitions[0],true) : `<div class="cover-characters"><span class="cover-sun" aria-hidden="true"></span>${faithfulArt(2,'cover-ann')}${faithfulArt(7,'cover-zorbas')}${sprite(4,[.486,.471,.774,.827],state.lang==='sv'?'Mc Dinkelspiel':'Mc Dinkelspiel','cover-mc')}</div>`}<span class="cover-label">${t('coverLabel')}</span></div><button class="start-reading" data-start><span>${t(state.resume>0?'resume':'begin')}</span><span aria-hidden="true">→</span></button><p class="cover-footnote">${t('hint')}</p></section>`;
}
function spread() {
  const scene = scenes[state.page];
  const picture=`<figure class="illustration"><div class="art-stage">${state.edition==='colour'?colouredArt(scene):faithfulArt(scene.art)}</div>${state.edition==='colour'?`<figcaption class="scene-tip">${t('tap')}</figcaption>`:''}</figure>`;
  const paragraph=(p,i)=>{
    let html=escape(p).replace(/^[-–]\s*/,'— ');
    if(state.edition==='colour'){
      const words={2:['doktor','doctor'],3:['doktorssaker','doctor-things'],4:['foten','foot'],5:['bandage','bandaged'],7:['stenar','stones'],9:['mjukaste handslag','gentlest handshake'],11:['geggaöboy','muck-o-boy','raketmugg','rocket mug','träd','tree'],13:['kaffe','coffee'],15:['slingerstek','wriggle-roast'],17:['solen','sun']};
      for(const word of words[scene.art]||[])html=html.replace(new RegExp(`(?<![\\p{L}])${word}(?![\\p{L}])`,'iu'),match=>`<button class="story-word" data-illustration>${match}</button>`);
    }
    return `<p class="${/^\s*[-—–“‘]/.test(p)?'dialogue ':''}${/^(Slut\.|The End\.)$/.test(p)?'the-end':''}" data-paragraph="${i}">${html}</p>`;
  };
  const paras=scene[state.lang].map(paragraph);
  const folio=`<p class="scene-eyebrow"><span class="scene-number">${String(state.page).padStart(2,'0')}</span>DR. ANN</p>`;
  const sourceLink=`<button class="source-link" data-source>${t('sourceShort')}</button>`;
  if([1,2,3,4,7,8,9].includes(state.page)){
    const at={1:0,2:1,3:0,4:1,7:2,8:1,9:1}[state.page];
    const body=[...paras];body.splice(at,0,picture);
    return `<article class="spread flow-spread scene-${state.page}" aria-label="${escape(title(state.page))}"><div class="page-flow">${folio}<div class="story flowing-story">${body.join('')}</div>${state.edition==='colour'?`<p class="reading-tip">${t('tap')}</p>`:''}${sourceLink}</div></article>`;
  }
  if(state.page===10){
    return `<article class="spread ending-spread scene-10" aria-label="${escape(title(10))}"><div class="ending-conversation">${folio}<div class="story">${paras.slice(0,3).join('')}</div></div>${picture}<div class="ending-last story">${paras.slice(3).join('')}<button class="restart" data-restart>${t('restart')}</button>${sourceLink}</div></article>`;
  }
  return `<article class="spread scene-${state.page}" aria-label="${escape(title(state.page))}"><span class="paper-seam" aria-hidden="true"></span>${picture}<div class="text-page">${folio}<div class="story">${paras.join('')}</div>${sourceLink}</div></article>`;
}

function render(animate=false,direction=1,focus=false) {
  document.documentElement.lang = state.lang;
  document.documentElement.style.setProperty('--story-size',state.size);
  document.body.classList.toggle('edition-colour',state.edition==='colour');
  document.body.classList.toggle('motion-off',!state.motion || mediaMotion.matches);
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
  $('reader').innerHTML = state.page===0 ? cover() : spread();
  // Keep the cover action directly beneath its copy on desktop and below the art on mobile.
  if(state.page===0 && innerWidth>700) {
    const action=document.querySelector('[data-start]'), note=document.querySelector('.cover-footnote');
    document.querySelector('.cover-copy').append(action,note);
  }
  $('reader').classList.remove('turn-in','turn-back');
  if(animate && state.motion && !mediaMotion.matches) {
    requestAnimationFrame(()=>{$('reader').classList.add('turn-in');if(direction<0)$('reader').classList.add('turn-back');});
  }
  $('original').setAttribute('aria-pressed',state.edition==='original');
  $('colour').setAttribute('aria-pressed',state.edition==='colour');
  $('lang-sv').classList.toggle('selected',state.lang==='sv');
  $('lang-en').classList.toggle('selected',state.lang==='en');
  $('language').setAttribute('aria-label',state.lang==='sv'?'Read in English':'Läs på svenska');
  $('home').setAttribute('aria-label',t('end'));
  $('settings-button').setAttribute('aria-label',t('settings'));
  $('chapters-button').setAttribute('aria-label',t('choose'));
  document.querySelector('.booknav').setAttribute('aria-label',t('swipe'));
  document.querySelector('.editions').setAttribute('aria-label',state.lang==='sv'?'Utgåva':'Edition');
  document.querySelectorAll('[data-close]').forEach(el=>el.setAttribute('aria-label',t('close')));
  $('previous').disabled=state.page===0;
  $('previous').setAttribute('aria-label',t('backLabel'));
  $('next').querySelector('[data-i18n]').textContent=t(state.page===0?'begin':state.page===10?'end':'next');
  $('next').setAttribute('aria-label',t(state.page===0?'begin':state.page===10?'end':'nextLabel'));
  $('page-label').textContent=state.page===0?t('cover'):`${String(state.page).padStart(2,'0')} / 10`;
  $('progress').style.width=`${state.page*10}%`;
  $('page-dots').innerHTML=scenes.map((_,i)=>`<button data-page="${i}" aria-label="${escape(title(i))}" ${i===state.page?'aria-current="page"':''}></button>`).join('');
  $('motion').checked=state.motion;
  $('motion').disabled=mediaMotion.matches;
  $('motion').title=mediaMotion.matches?t('reduced'):'';
  $('sound').checked=state.sound;
  $('sound-button').setAttribute('aria-pressed',state.sound);
  $('sound-button').setAttribute('aria-label',t(state.sound?'soundOff':'soundOn'));
  $('text-size').textContent=`${Math.round(state.size*100)}%`;
  $('smaller').disabled=state.size<=.85;
  $('larger').disabled=state.size>=1.3;
  $('smaller').setAttribute('aria-label',state.lang==='sv'?'Mindre text':'Smaller text');
  $('larger').setAttribute('aria-label',state.lang==='sv'?'Större text':'Larger text');
  document.title=`Dr. Ann · ${state.page?title(state.page):'J. Dvärby'}`;
  history.replaceState(null,'',`${BASE}${state.edition}/${state.page?'#p'+state.page:''}`);
  save();
  if(focus)$('reader').focus({preventScroll:true});
  wireArt();
  preloadNext();
}
function go(page) {
  page=Math.max(0,Math.min(10,page));
  if(page===state.page)return;
  const direction=page>state.page?1:-1;
  state.page=page;
  if(page)state.resume=page;
  clearTimeout(interactionTimer);
  if(state.edition==='colour'&&state.sound)playSound('page');
  window.scrollTo({top:0,behavior:'instant'});
  render(true,direction,true);
  $('announcement').textContent=`${page?t('page')+' '+page+' / 10':t('cover')}. ${title(page)}`;
}
function wireArt() {
  const art=document.querySelector('.art-trigger');
  if(!art)return;
  art.addEventListener('click',()=>{
    if(state.sound)playSound(art.dataset.art==='5'?'page':art.dataset.effect);
    if(!state.motion || mediaMotion.matches)return;
    clearTimeout(interactionTimer);
    art.classList.remove('play');
    void art.offsetWidth;
    art.classList.add('play');
    interactionTimer=setTimeout(()=>art.classList.remove('play'),3100);
  });
  art.addEventListener('pointermove',e=>{
    if(e.pointerType!=='mouse' || !state.motion || mediaMotion.matches)return;
    const r=art.getBoundingClientRect();
    art.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*6}deg`);
    art.style.setProperty('--rx',`${((e.clientY-r.top)/r.height-.5)*-5}deg`);
  });
  art.addEventListener('pointerleave',()=>{art.style.setProperty('--rx','0deg');art.style.setProperty('--ry','0deg');});
}
function preloadNext(){
  const next=scenes[Math.min(state.page+1,10)];
  const img=new Image();img.src=`${BASE}assets/${state.edition==='colour'?'color-'+next.art:'page-'+next.art}.webp`;
}
function chapters() {
  $('chapter-grid').innerHTML=scenes.map((s,i)=>`<button class="chapter" data-page="${i}" ${i===state.page?'aria-current="page"':''}><span class="chapter-thumb">${state.edition==='colour'?`<img src="${BASE}assets/color-${s.art}.webp" loading="lazy" alt="">`:faithfulArt(s.art)}</span><span class="chapter-num">${i?String(i).padStart(2,'0'):t('cover')}</span><span class="chapter-name">${escape(title(i))}</span></button>`).join('');
  $('chapters-dialog').showModal();
}
function source(){
  if($('settings-dialog').open)$('settings-dialog').close();
  $('source-photos').innerHTML=definitions[state.page].pages.map(p=>`<a href="${BASE}assets/page-${p}.webp" target="_blank" rel="noopener" aria-label="${t('sourcePhoto')} ${p}"><img src="${BASE}assets/page-${p}.webp" alt="${t('sourcePhoto')} ${p}" loading="lazy" width="1530" height="2040"></a>`).join('');
  $('source-dialog').showModal();
}
function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),4500);}
async function offline(){
  if(!('serviceWorker' in navigator) || !('caches' in window)){toast(t('notSupported'));return;}
  $('offline').disabled=true;toast(t('saving'));
  try {
    const registered=await workerReady;
    if(!registered)throw new Error('registration failed');
    const reg=await Promise.race([navigator.serviceWorker.ready,new Promise((_,reject)=>setTimeout(()=>reject(new Error('worker not ready')),20000))]);
    const channel=new MessageChannel();
    await new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>reject(new Error('timeout')),180000);
      channel.port1.onmessage=({data})=>{if(data.type==='saved'){clearTimeout(timeout);resolve();}else if(data.type==='error'){clearTimeout(timeout);reject(new Error(data.error));}};
      reg.active.postMessage({type:'save-book'},[channel.port2]);
    });
    toast(t('saved'));$('offline').textContent=t('offlineDone');
  } catch {toast(t('offlineError'));}
  finally{$('offline').disabled=false;}
}

async function init(){
  const response=await fetch(`${BASE}source/transcription.json`);
  if(!response.ok)throw new Error('The story could not be loaded.');
  const raw=await response.json();
  const byPage=new Map(raw.map(p=>[p.page,p]));
  scenes=definitions.map((def,i)=>({...def,sv:def.pages.flatMap(p=>byPage.get(p)?.sv||[]),en:def.pages.flatMap(p=>byPage.get(p)?.en||[])}));
  // Join sentences that originally continue across a photographed page turn.
  for(const lang of ['sv','en']){
    const giant=scenes[5][lang];giant[giant.length-2]+=' '+giant.pop();
    const ending=scenes[10][lang];ending[ending.length-3]+=' '+ending.splice(ending.length-2,1)[0];
  }
  // A light punctuation edit; every Swedish word stays as handwritten.
  scenes[3].sv[1]='– Har du problem? sa Ann.';
  scenes[3].sv[2]=scenes[3].sv[2].replace('Nej här','Nej, här').replace('problem sa Mc','problem, sa Mc');
  scenes[4].sv[1]=scenes[4].sv[1].replace('fast sa Mc','fast, sa Mc')+'.';
  scenes[4].sv[2]=scenes[4].sv[2].replace('problem sa Ann och','problem, sa Ann, och');
  scenes[5].sv[2]=scenes[5].sv[2].replace('Nej jag','Nej, jag').replace('problem sa Zorbas men','problem, sa Zorbas, men');
  scenes[7].sv[3]=scenes[7].sv[3].replace(/,$/,'.');
  scenes[7].en[3]=scenes[7].en[3].replace(/,$/,'.');
  scenes[3].en=[byPage.get(4).en[0],'— Have you got a problem? said Ann.','— No, no problems here, said Mc Dinkelspiel. It’s just that I’ve lost my foot.'];
  scenes[4].en=['— But isn’t it a problem that you’ve only got one foot, then? asked Ann.','— Yes, but I lose it all the time. It never grows back on, said Mc Dinkelspiel.','— Just because a problem has happened several times doesn’t mean it stops being a problem, said Ann, and she bandaged his leg. Now let it grow back on again. It takes 5 days.'];
  scenes[5].en[1]='— Have you got a problem? asked Ann.';
  scenes[5].en[2]='— No, I haven’t got any problems, said Zorbas, but I’m sad. They say, “Zorbas is so strong he can squeeze water out of a stone, but strong in the head? He’s feeble instead!” I’ve tried to squeeze the water out of every stone I’ve found, but they just crumble into gravel. I seem to be feeble in my hands and in my head…';
  scenes[10].en[1]='— We haven’t solved any of your problems today, Ann, said Mc Dinkelspiel.';
  scenes[10].en[2]='— Well-yes, I think being lonely is a problem, and you are the very best medicine for that.';
  for(const lang of ['sv','en']){
    const breakfast=scenes[9][lang][0];
    const point=breakfast.indexOf('. ');
    scenes[9][lang]=[breakfast.slice(0,point+1),breakfast.slice(point+2)];
  }
  $('home').addEventListener('click',()=>go(0));
  $('previous').addEventListener('click',()=>go(state.page-1));
  $('next').addEventListener('click',()=>go(state.page===10?0:state.page+1));
  $('language').addEventListener('click',()=>{state.lang=state.lang==='sv'?'en':'sv';render();});
  document.querySelectorAll('[data-edition]').forEach(b=>b.addEventListener('click',()=>{if(state.edition!==b.dataset.edition){stopSound();state.sound=false;}state.edition=b.dataset.edition;render(true);}));
  $('chapters-button').addEventListener('click',chapters);
  $('settings-button').addEventListener('click',()=>$('settings-dialog').showModal());
  $('source-button').addEventListener('click',source);
  $('smaller').addEventListener('click',()=>{state.size=Math.max(.85,Math.round((state.size-.1)*100)/100);render();});
  $('larger').addEventListener('click',()=>{state.size=Math.min(1.3,Math.round((state.size+.1)*100)/100);render();});
  $('motion').addEventListener('change',e=>{state.motion=e.target.checked;render();});
  const toggleSound=async()=>{state.sound=!state.sound;if(state.sound){try{state.sound=await unlockSound();if(state.sound)toast(t('soundEnabled'));}catch{state.sound=false;}}else{stopSound();toast(t('soundDisabled'));}render();};
  $('sound-button').addEventListener('click',toggleSound);
  $('sound').addEventListener('change',toggleSound);
  $('offline').addEventListener('click',offline);
  $('fullscreen').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen();$('settings-dialog').close();}catch{toast(t('fullError'));}});
  document.addEventListener('click',e=>{
    const page=e.target.closest('[data-page]');
    if(page){go(Number(page.dataset.page));$('chapters-dialog').close();}
    if(e.target.closest('[data-start]'))go(state.resume||1);
    if(e.target.closest('[data-restart]'))go(1);
    if(e.target.closest('[data-source]'))source();
    if(e.target.closest('[data-illustration]'))document.querySelector('.art-trigger')?.click();
    if(e.target.closest('[data-close]'))e.target.closest('dialog').close();
  });
  document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}}));
  document.addEventListener('keydown',e=>{
    if(document.querySelector('dialog[open]') || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
    if(e.key==='ArrowRight'){e.preventDefault();go(state.page===10?0:state.page+1);}
    if(e.key==='ArrowLeft'){e.preventDefault();go(state.page-1);}
    if(e.key==='Home'){e.preventDefault();go(0);}
  });
  let touch;
  $('reader').addEventListener('touchstart',e=>{if(e.touches.length!==1){touch=null;return;}touch={x:e.touches[0].clientX,y:e.touches[0].clientY,time:Date.now()};},{passive:true});
  $('reader').addEventListener('touchend',e=>{
    if(!touch || e.changedTouches.length!==1)return;
    const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;
    if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.8 && Date.now()-touch.time<800 && !window.getSelection()?.toString())go(dx<0?(state.page===10?0:state.page+1):state.page-1);
    touch=null;
  },{passive:true});
  mediaMotion.addEventListener('change',()=>render());
  window.addEventListener('hashchange',()=>{const match=/^#p(\d+)$/.exec(location.hash);if(match)go(Number(match[1]));});
  let oldMobile=innerWidth<=700;
  window.addEventListener('resize',()=>{const mobile=innerWidth<=700;if(mobile!==oldMobile&&state.page===0)render();oldMobile=mobile;});
  render();
  if('serviceWorker' in navigator)workerReady=navigator.serviceWorker.register(`${BASE}sw.js`,{scope:BASE}).catch(()=>null);
  window.drAnn={getState:()=>({...state}),getScenes:()=>scenes.map(s=>({pages:s.pages,sv:[...s.sv],en:[...s.en]}))};
}
init().catch(error=>{
  $('reader').innerHTML=`<div style="padding:60px 30px;max-width:600px;margin:auto"><h1>Dr. Ann</h1><p>Boken kunde inte laddas. Försök ladda om sidan.</p><p>The book could not be loaded. Please reload the page.</p><button onclick="location.reload()">Ladda om / Reload ↻</button></div>`;
  console.error(error);
});
