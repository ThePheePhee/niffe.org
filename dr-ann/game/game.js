import {World} from './world.js?v=21';
import {LEVELS} from './levels.js?v=21';
import {render,preloadArt} from './art.js?v=21';
import {GameAudio} from './music.js?v=21';
import {COPY} from './copy.js?v=21';

const $=id=>document.getElementById(id),motion=matchMedia('(prefers-reduced-motion: reduce)');
const SAVE='dr-ann-game-v2',PREF='dr-ann-game-preferences-v2';
const read=key=>{try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}};
let prefs=read(PREF)||{music:true},saved=read(SAVE),lang=prefs.lang||read('dr-ann-reader-v1')?.lang||'sv';
if(!COPY[lang])lang='sv';
let world=new World(motion.matches,saved),mode='intro',storyId=null,modeBeforeMap='playing',ready=false;
let last=0,uiClock=0,saveClock=0,toastUntil=0,saveStamp=0;
const input={left:false,right:false,jump:false,action:false,switch:false},pulses={left:false,right:false,jump:false,action:false,switch:false},sources=new Map(),music=new GameAudio();
const canvas=$('game'),ctx=canvas.getContext('2d',{alpha:false}),t=key=>COPY[lang][key];
const artFiles={5:'color-5-v3.svg',9:'color-9-green-v1.webp',11:'color-11-v3.svg',13:'color-13-v2.webp',15:'color-15-v2.webp',17:'color-17-green-v1.webp'};
const ICONS={
 use:'<path d="M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-5a2 2 0 0 1 4 0v10c0 4-3 6-7 6-2 0-4-2-5-3L3 13a2 2 0 0 1 3-3l2 2z"/>',
 patient:'<path d="m4 7 13 13 4-4L8 3zM7 17l10-10M8 9h.1m3 3h.1m3 3h.1"/>',
 lever:'<path d="M4 21h16M8 21v-5h8v5M12 16 5 5"/><circle cx="5" cy="5" r="3"/>',
 hand:'<path d="m2 12 6 4 5-1 5-5 4 2M7 8l5-2 7 5-4 6-5-1-5-4M3 6l4 2M21 7l-3 3"/>',
 tree:'<path d="m12 2-7 7h4l-6 7h7v6h4v-6h7l-6-7h4z"/>',
 log:'<path d="m5 8 13-4 4 12-13 4zM7 10l11-3M10 17l9-3"/><ellipse cx="6" cy="14" rx="4" ry="6"/>',
 muck:'<path d="M3 16h18l-3 6H6zM12 16 19 3M15 6l5 3M5 12c-4-6 6-8 7-3"/>',
 mug:'<path d="M3 8h13v12H3zM16 10h5v7h-5M7 5c-3-3 3-3 0-5M12 5c-3-3 3-3 0-5"/>',
 stir:'<path d="M5 9a8 8 0 0 1 13-4l3 3M21 2v6h-6M19 15A8 8 0 0 1 6 19l-3-3M3 22v-6h6"/>',
 picnic:'<path d="M3 11h18l-3 10H6zM7 11l5-9 5 9M4 15h16M10 11v10m4-10v10"/>',
 exit:'<path d="M3 12h17m-7-7 7 7-7 7M4 3v5m0 8v5"/>',
 sunset:'<path d="M2 16h20M5 16a7 7 0 0 1 14 0M3 21h18M12 1v4M2 7l3 3m17-3-3 3"/>'
};
let iconKind='';
function persist(){try{localStorage.setItem(SAVE,JSON.stringify(world.save()));saveStamp=performance.now();}catch{}}
function savePrefs(){try{localStorage.setItem(PREF,JSON.stringify(prefs));}catch{}}
function clearInput(){sources.clear();Object.keys(input).forEach(k=>{input[k]=false;pulses[k]=false;});document.querySelectorAll('[data-control]').forEach(b=>b.classList.remove('held'));}
function setInput(source,key,down){if(down){if(!input[key])pulses[key]=true;sources.set(source,key);}else sources.delete(source);for(const name in input)input[name]=[...sources.values()].includes(name);document.querySelectorAll('[data-control]').forEach(b=>b.classList.toggle('held',input[b.dataset.control]));}
function syncMusic(){music.setScene(world.scene==='sunset'?'sunset':world.levelId);music.setPaused(mode==='paused'||mode==='map'||document.hidden);$('sound').setAttribute('aria-pressed',music.enabled);$('sound').setAttribute('aria-label',t(music.enabled?'soundOff':'soundOn'));}
function toast(message,duration=4000){$('toast').textContent=message;$('toast').hidden=false;toastUntil=performance.now()+duration;}
function showOverlay(kind,id=null){
  mode=kind;storyId=id;clearInput();$('overlay').hidden=false;$('overlay').className='game-overlay '+(id?'story':'welcome');
  $('story-art').hidden=!id;$('overlay-secondary').hidden=true;
  if(id){const text=t('story')[id];$('overlay-kicker').textContent=text[0];$('overlay-title').textContent=text[1];$('overlay-copy').textContent=text[2];$('start').textContent=text[3];$('story-art').src='/dr-ann/assets/'+artFiles[text[4]];$('story-art').alt=text[1];
    if(id==='sunset'){$('overlay-secondary').textContent=t('newGame');$('overlay-secondary').hidden=false;}
  }else if(kind==='restart'){$('overlay-kicker').textContent=t('introKicker');$('overlay-title').textContent=t('newGame');$('overlay-copy').textContent=lang==='sv'?'Börja från Anns hus med en tom doktorsväska.':'Begin again at Ann’s house with an empty doctor’s bag.';$('start').textContent=t('newGame');$('overlay-secondary').textContent=t('continue');$('overlay-secondary').hidden=false;}
  else if(kind==='paused'){$('overlay-kicker').textContent=t('pauseKicker');$('overlay-title').textContent=t('pauseTitle');$('overlay-copy').textContent=t('pauseCopy');$('start').textContent=t('continue');}
  else{$('overlay-kicker').textContent=t('introKicker');$('overlay-title').textContent=t(saved?'resumeTitle':'introTitle');$('overlay-copy').textContent=t(saved?'resumeCopy':'introCopy');$('start').textContent=t(ready?(saved?'resume':'start'):'loading');if(saved){$('overlay-secondary').textContent=t('newGame');$('overlay-secondary').hidden=false;}}
  $('start').disabled=!ready;$('pause').setAttribute('aria-pressed',kind==='paused');syncMusic();updateUI();
  if(kind!=='intro')$('start').focus({preventScroll:true});
}
function play(){mode='playing';storyId=null;clearInput();world.actionLatch=false;world.jumpLatch=false;$('overlay').hidden=true;$('toast').hidden=true;last=0;syncMusic();updateUI();canvas.focus({preventScroll:true});}
function newGame(){world=new World(motion.matches);saved=null;persist();showOverlay('intro');buildMap();}
function continueStory(){
  const id=storyId;
  if(id==='bandage')world.enter('ann-stones');
  if(id==='handshake')world.enter('zorbas-brook');
  if(id==='muck')world.enter('zorbas-kitchen');
  if(id==='cocoa')world.enter('ann-garden');
  if(id==='picnic')world.enter('zorbas-kitchen');
  if(id==='sunset'){mode='playing';$('overlay').hidden=true;openMap();return;}
  play();handleEvents();persist();buildMap();
}
function openMap(){
  if($('map-dialog').open)return;modeBeforeMap=mode;mode='map';clearInput();persist();buildMap();syncMusic();$('map-dialog').showModal();
}
function closeMap(){if($('map-dialog').open)$('map-dialog').close();mode=modeBeforeMap;syncMusic();if(mode==='playing')canvas.focus({preventScroll:true});}
function chooseLevel(id){if(!world.unlocked.includes(id))return;if($('map-dialog').open)$('map-dialog').close();world.enter(id);play();handleEvents();persist();buildMap();}
function buildMap(){
  $('map-list').replaceChildren();$('journey').replaceChildren();
  LEVELS.forEach((level,index)=>{
    const unlocked=world.unlocked.includes(level.id),complete=world.completed.includes(level.id),current=world.levelId===level.id;
    const button=document.createElement('button');button.type='button';button.disabled=!unlocked;button.className=[current?'current':'',complete?'complete':'',!unlocked?'locked':''].join(' ');
    const num=document.createElement('span');num.className='map-number';num.textContent=String(index+1).padStart(2,'0');
    const info=document.createElement('span');info.className='map-copy';info.textContent=level.title[lang];
    const detail=document.createElement('small');detail.textContent=(level.actor==='ann'?'Dr. Ann':'Zorbas')+' · '+t(!unlocked?'locked':complete?'complete':'continue');info.append(detail);button.append(num,info);button.addEventListener('click',()=>chooseLevel(level.id));$('map-list').append(button);
    const li=document.createElement('li');li.className=current?'current':complete?'complete':'';
    const short=document.createElement('button');short.type='button';short.disabled=!unlocked;const badge=document.createElement('span');badge.className='step-number';badge.textContent=String(index+1).padStart(2,'0');const label=document.createElement('span');label.textContent=level.title[lang];short.append(badge,label);short.addEventListener('click',()=>chooseLevel(level.id));if(current)short.setAttribute('aria-current','step');li.append(short);$('journey').append(li);
  });
}
function localize(){
  document.documentElement.lang=lang;document.title='Dr. Ann & Zorbas · '+t('title');
  document.querySelectorAll('[data-copy]').forEach(el=>{const value=t(el.dataset.copy);if(typeof value==='string')el.textContent=value;});
  document.querySelectorAll('[data-copy-aria]').forEach(el=>{const value=t(el.dataset.copyAria);if(typeof value==='string')el.setAttribute('aria-label',value);});
  $('language').setAttribute('aria-label',lang==='sv'?'Read in English':'Läs på svenska');$('lang-sv').classList.toggle('selected',lang==='sv');$('lang-en').classList.toggle('selected',lang==='en');
  if(['intro','paused','story','end','restart'].includes(mode))showOverlay(mode,storyId);buildMap();updateUI();syncMusic();
}
function updateUI(){
  const index=LEVELS.findIndex(l=>l.id===world.levelId),goal=world.goal(),action=world.falling?null:world.getAction(),playing=mode==='playing';
  $('chapter').textContent=`0${index+1} / 04`;$('character').textContent=world.scene==='ann'?'Dr. Ann':world.scene==='sunset'?'Dr. Ann & Zorbas':'Zorbas';document.body.dataset.character=world.scene;
  $('heart-count').textContent=world.heartCount;$('heart-count').setAttribute('aria-label',world.heartCount+' '+t('heartsLabel'));$('progress').style.width=world.progress()+'%';
  $('objective').textContent=t('goals')[goal]+(goal==='findBandages'?` ${world.countBandages()} / 3`:goal==='findFood'?` ${world.countFood()} / 3`:goal==='stir'?` ${world.stirs} / 6`:'');
  const kind=action?.kind||'use';if(iconKind!==kind){iconKind=kind;$('action-icon').innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[kind]||ICONS.use)+'</svg>';}
  $('action-label').textContent=action?t('actions')[kind]||t('action'):t('action');$('action').disabled=!playing||!action;$('action').setAttribute('aria-label',$('action-label').textContent);$('action').classList.toggle('ready',!!action&&playing);
  $('action').style.setProperty('--hold-progress',world.hold/1.5*100+'%');
  $('action-hint').textContent=world.activity?t('stirHint'):action?(['hand','log'].includes(kind)?`${t('hold')} ${Math.floor(world.hold/1.5*100)}%`:'E · '+t('actions')[kind]):(world.flags.handshake?t('switchHint'):'');
  const obstacle=world.level.platforms.find(s=>(!s.requires||world.flags[s.requires])&&s.x>world.player.x&&s.x-world.player.x<170&&s.h>world.player.y+12);
  $('scene-note').textContent=world.activity?t('stirNote'):obstacle?t('jumpHint'):'';
  $('inventory').textContent=world.scene==='ann'?(world.flags.cocoa?`${t('picnicItems')} ${world.countFood()}/3`:`${t('bandages')} ${world.countBandages()}/3`):`${world.tree?'▣':'□'} ${lang==='sv'?'Träd':'Tree'}  ${world.muck?'▣':'□'} ${lang==='sv'?'Gegga':'Muck'}`;
  $('checkpoint-label').textContent=saveStamp&&performance.now()-saveStamp<2400?t('saved')+' ✓':t('checkpoint')+' ✓';
  $('switch-button').disabled=!world.flags.handshake||!ready;$('switch-button').querySelector('[data-copy=switch]').textContent=world.scene==='ann'?(lang==='sv'?'Spela som Zorbas':'Play as Zorbas'):(lang==='sv'?'Spela som Ann':'Play as Ann');
  $('switch-button').title=world.flags.handshake?t('switchHint'):t('switchLocked');$('pause').disabled=['intro','story','end','map','restart'].includes(mode);$('pause').setAttribute('aria-pressed',mode==='paused');$('pause').setAttribute('aria-label',t(mode==='paused'?'continue':'pause'));
}
function handleEvents(){
  for(const e of world.drain()){
    if(['pickup','collect'].includes(e.type))music.cue('pickup');
    if(['jump','land','checkpoint','switch','bump'].includes(e.type))music.cue(e.type);
    if(e.type==='bump')toast(t('tryAgain'));
    if(e.type==='hint')toast(t(e.value));
    if(e.type==='action'||e.type==='stir')music.cue('action');
    if(e.type==='level'){clearInput();syncMusic();buildMap();toast(world.level.title[lang],2400);}
    if(e.type==='unlock')buildMap();
    if(e.type==='cutscene'){persist();showOverlay(e.value==='sunset'?'end':'story',e.value);if(e.value==='sunset')music.cue('win');}
    if(['pickup','collect','action','checkpoint','level','stir','unlock','switch'].includes(e.type))persist();
  }
}
$('start').addEventListener('click',async()=>{if(!ready)return;if(prefs.music&&!music.enabled){await music.enable();syncMusic();}if(mode==='restart'){newGame();play();return;}if(storyId)continueStory();else play();});
$('pause').addEventListener('click',()=>{if(mode==='playing'){persist();showOverlay('paused');}else if(mode==='paused')play();});
$('restart').addEventListener('click',()=>showOverlay('restart'));
// Restart is a two-button in-game choice, so a stray tap does not erase an adventure.
$('overlay-secondary').addEventListener('click',()=>{if(mode==='restart')play();else newGame();});
$('language').addEventListener('click',()=>{lang=lang==='sv'?'en':'sv';prefs.lang=lang;savePrefs();localize();if(mode==='playing')canvas.focus({preventScroll:true});});
$('sound').addEventListener('click',async()=>{if(music.enabled){music.disable();prefs.music=false;}else{prefs.music=await music.enable();if(!prefs.music)toast(t('soundUnavailable'));}savePrefs();syncMusic();if(mode==='playing')canvas.focus({preventScroll:true});});
$('map-button').addEventListener('click',openMap);$('map-close').addEventListener('click',closeMap);
$('map-dialog').addEventListener('cancel',e=>{e.preventDefault();closeMap();});
$('switch-button').addEventListener('click',()=>{if(!ready||!world.flags.handshake)return;if(world.switchCharacter()){play();handleEvents();persist();buildMap();}});
const keys={ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right',' ':'jump',ArrowUp:'jump',w:'jump',W:'jump',e:'action',E:'action',x:'action',X:'action',ArrowDown:'action',c:'switch',C:'switch'};
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(mode==='playing'){persist();showOverlay('paused');}else if(mode==='paused'||mode==='restart')play();return;}
  if(e.key==='m'||e.key==='M'){if(mode!=='map')openMap();else closeMap();e.preventDefault();return;}
  if(mode!=='playing'||e.target.closest('button,a,input'))return;const key=keys[e.key];if(key){e.preventDefault();setInput('key:'+e.code,key,true);}
});
document.addEventListener('keyup',e=>{if(keys[e.key])setInput('key:'+e.code,keys[e.key],false);});
document.querySelectorAll('[data-control]').forEach(button=>{
  let pressAt=0;
  button.addEventListener('pointerdown',e=>{if(mode!=='playing')return;e.preventDefault();pressAt=performance.now();button.setPointerCapture(e.pointerId);setInput('pointer:'+e.pointerId,button.dataset.control,true);});
  button.addEventListener('pointerup',e=>{const startAt=pressAt,key=button.dataset.control,remaining=Math.max(0,(key==='left'||key==='right'?130:80)-(performance.now()-pressAt));setTimeout(()=>{if(pressAt===startAt)setInput('pointer:'+e.pointerId,key,false);},remaining);});
  button.addEventListener('pointercancel',e=>setInput('pointer:'+e.pointerId,button.dataset.control,false));
  button.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&mode==='playing'){e.preventDefault();setInput('button:'+button.id,button.dataset.control,true);}});
  button.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();setInput('button:'+button.id,button.dataset.control,false);}});
  button.addEventListener('contextmenu',e=>e.preventDefault());
});
function backgroundPause(){clearInput();persist();if(mode==='playing')showOverlay('paused');syncMusic();}
window.addEventListener('blur',backgroundPause);document.addEventListener('visibilitychange',()=>{if(document.hidden)backgroundPause();else syncMusic();});window.addEventListener('pagehide',persist);
motion.addEventListener('change',()=>{world.reducedMotion=motion.matches;});
function resize(){const mobile=innerWidth<=700&&!(innerWidth>innerHeight&&innerHeight<=600);canvas.width=mobile?560:960;canvas.height=mobile?430:540;}
new ResizeObserver(resize).observe($('stage'));resize();
function frame(now){const dt=last?Math.min(.15,(now-last)/1000):1/60;last=now;if(mode==='playing'){const frameInput=Object.fromEntries(Object.keys(input).map(key=>[key,input[key]||pulses[key]]));let remaining=dt;while(remaining>0&&mode==='playing'){const step=Math.min(.025,remaining);world.update(frameInput,step,canvas.width);remaining-=step;handleEvents();}Object.keys(pulses).forEach(key=>pulses[key]=false);saveClock+=dt;if(saveClock>2){persist();saveClock=0;}}
  render(ctx,world,canvas.width,canvas.height);uiClock+=dt;if(uiClock>.1){updateUI();uiClock=0;}if(toastUntil&&now>toastUntil){$('toast').hidden=true;toastUntil=0;}requestAnimationFrame(frame);
}
localize();requestAnimationFrame(frame);
Promise.resolve(preloadArt()).catch(()=>{}).finally(()=>{ready=true;localize();if(saved?.atEnding)showOverlay('end','sunset');});
