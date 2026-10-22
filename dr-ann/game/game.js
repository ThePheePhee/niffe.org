import {World} from './world.js?v=1';
import {render} from './art.js?v=1';

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let lang='sv';
try{lang=JSON.parse(localStorage.getItem('dr-ann-reader-v1')||'{}').lang==='en'?'en':'sv';}catch{}
const copy={
  sv:{back:'Till boken',eyebrow:'ETT LITET SPEL OM STORA OCH SMÅ VÄNNER',title:'Små steg. Stora vänner.',
    chapterAnn:'En hjälpande hand',chapterZorbas:'Stark och mjuk',chapterSunset:'Den bästa medicinen',
    left:'Gå åt vänster',right:'Gå åt höger',jump:'Hoppa',action:'Hjälp',
    controls:'← → Gå · Mellanslag Hoppa · X eller ↓ Hjälp',gentle:'Ingen brådska. Inga liv att förlora. Bara vänner att hjälpa.',
    credit:'Efter boken av J. Dvärby',restart:'Börja om',soundOn:'Slå på ljud',soundOff:'Stäng av ljud',pause:'Pausa',resume:'Fortsätt',
    gameLabel:'Dr. Ann och Zorbas, ett spel. Gå med piltangenterna, hoppa med mellanslag och hjälp med X.',
    introKicker:'TVÅ STORLEKAR · ETT ÄVENTYR',introTitle:'Hej, doktor Ann!',introCopy:'Gå ut och hjälp en vän. Följ hjärtana och hitta bandaget.',start:'Nu leker vi →',
    scaleKicker:'DEL 2 · SAMMA VÄRLD',scaleTitle:'Nu är du Zorbas!',scaleCopy:'Stenarna är pyttesmå! Ett helt träd får plats i din hand. Hjälp till att blanda geggaO’boy.',scaleStart:'Ta stora steg →',
    pauseKicker:'EN LITEN PAUS',pauseTitle:'Vi väntar här.',pauseCopy:'Dina vänner finns kvar när du vill fortsätta.',
    endKicker:'ALLA TRE TILLSAMMANS',endTitle:'Vänner är den bästa medicinen.',endCopy:'Ann, Mc Dinkelspiel och Zorbas tittar på solnedgången. I morgon finns nya saker att hjälpa till med.',again:'Lek en gång till ↻',
    goals:['Hitta bandaget. Följ stigen åt höger →','Gå till Mc Dinkelspiel och hjälp hans fot.','Gå över stenarna. Ge Zorbas ett mjukt handslag.','Hämta trädet. För dig är det en liten visp!','Hämta lite gegga vid sjön.','Blanda i raketmuggen. Håll Hjälp nere!','Gå till stranden och möt dina vänner.','Tack för hjälpen!'],
    actions:['Hitta bandaget','Lägg bandage','Mjukt handslag','Ta trädet','Hämta gegga','Rör om','Sitt tillsammans','Spela igen'],
    bandage:'Ett bandage! Mc Dinkelspiel väntar längre fram.',bandaged:'Så! Nu får foten vila i fem dagar.',handshake:'Det mjukaste handslaget. Tack, Ann!',tree:'Ett helt träd blir en visp!',muck:'Gegga till Zorbas. Ann gillar ostmacka.',cocoa:'GeggaO’boy är färdig! Nu går vi till vännerna.',
    stir:'Rör om',near:'Tryck på Hjälp',go:'Följ stigen →',chapter:'Del',hearts:'hjärtan',fullscreen:'Helskärm',footerBook:'Läs berättelsen ↗',stepAnn:'Hjälp som Ann',stepZorbas:'Lek som Zorbas',stepSunset:'Vänner i solnedgången'},
  en:{back:'Back to the book',eyebrow:'A LITTLE GAME ABOUT FRIENDS GREAT AND SMALL',title:'Little steps. Big friends.',
    chapterAnn:'A helping hand',chapterZorbas:'Strong and gentle',chapterSunset:'The best medicine',
    left:'Walk left',right:'Walk right',jump:'Jump',action:'Help',
    controls:'← → Walk · Space Jump · X or ↓ Help',gentle:'No hurry. No lives to lose. Just friends to help.',
    credit:'Based on the book by J. Dvärby',restart:'Start over',soundOn:'Turn sound on',soundOff:'Turn sound off',pause:'Pause',resume:'Continue',
    gameLabel:'Dr. Ann and Zorbas, a game. Walk with arrow keys, jump with space, and help with X.',
    introKicker:'TWO SIZES · ONE ADVENTURE',introTitle:'Hello, Doctor Ann!',introCopy:'Go out and help a friend. Follow the hearts and find the bandage.',start:'Let’s play →',
    scaleKicker:'PART 2 · THE SAME WORLD',scaleTitle:'Now you’re Zorbas!',scaleCopy:'The stones are tiny! A whole tree fits in your hand. Help make some muckO’boy.',scaleStart:'Take big steps →',
    pauseKicker:'A LITTLE BREAK',pauseTitle:'We’ll wait here.',pauseCopy:'Your friends will be here when you’re ready.',
    endKicker:'ALL THREE TOGETHER',endTitle:'Friends are the best medicine.',endCopy:'Ann, Mc Dinkelspiel and Zorbas watch the sunset. Tomorrow brings new things to help with.',again:'Play again ↻',
    goals:['Find the bandage. Follow the path to the right →','Find Mc Dinkelspiel and help his foot.','Cross the stones. Give Zorbas a gentle handshake.','Pick up the tree. It’s a little stirrer to you!','Scoop some muck beside the lake.','Mix it in the rocket mug. Hold Help!','Walk to the shore and meet your friends.','Thank you for helping!'],
    actions:['Find the bandage','Bandage the foot','Gentle handshake','Pick up the tree','Scoop the muck','Stir gently','Sit together','Play again'],
    bandage:'A bandage! Mc Dinkelspiel is just ahead.',bandaged:'There! His foot needs five days to rest.',handshake:'The gentlest handshake. Thank you, Ann!',tree:'A whole tree becomes a stirrer!',muck:'Muck for Zorbas. Ann likes a cheese sandwich.',cocoa:'MuckO’boy is ready! Let’s find our friends.',
    stir:'Stir',near:'Press Help',go:'Follow the path →',chapter:'Part',hearts:'hearts',fullscreen:'Full screen',footerBook:'Read the story ↗',stepAnn:'Help as Ann',stepZorbas:'Play as Zorbas',stepSunset:'Friends at sunset'}
};
let world=new World(reduced.matches),mode='intro',sound=false,audioContext,toastUntil=0,last=0;
const input={left:false,right:false,jump:false,action:false},sources=new Map();
const t=key=>copy[lang][key];
Object.assign(copy.sv,{skip:'Till spelet',intro:'Ett litet äventyr med Dr. Ann och Zorbas. Alla kan hjälpa till.',chapterLabel:'DEL',heartsLabel:'vänskapshjärtan',controlsLabel:'Spelknappar',leftAria:'Gå åt vänster',rightAria:'Gå åt höger',actionAria:'Hjälp en vän',journeyLabel:'Äventyrets tre delar',canvasLabel:copy.sv.gameLabel,controlsNote:copy.sv.controls,gentleNote:copy.sv.gentle,readBook:'Läs boken'});
Object.assign(copy.en,{skip:'Skip to the game',intro:'A little adventure with Dr. Ann and Zorbas. Everyone can help.',chapterLabel:'PART',heartsLabel:'friendship hearts',controlsLabel:'Game controls',leftAria:'Walk left',rightAria:'Walk right',actionAria:'Help a friend',journeyLabel:'Three parts of the adventure',canvasLabel:copy.en.gameLabel,controlsNote:copy.en.controls,gentleNote:copy.en.gentle,readBook:'Read the book'});
copy.sv.left='Vänster';copy.sv.right='Höger';copy.en.left='Left';copy.en.right='Right';
const clearInput=()=>{sources.clear();for(const k in input)input[k]=false;document.querySelectorAll('[data-control]').forEach(b=>b.classList.remove('held'));};
function setInput(source,key,down) {
  if(down)sources.set(source,key);else sources.delete(source);
  for(const name in input)input[name]=[...sources.values()].includes(name);
  document.querySelectorAll('[data-control]').forEach(b=>b.classList.toggle('held',input[b.dataset.control]));
}
function cue(kind) {
  if(!sound||!audioContext)return;
  const start=audioContext.currentTime;
  const notes=kind==='help'?[523,659,784]:kind==='jump'?[260,390]:kind==='heart'?[784,988]:[392,523];
  notes.forEach((freq,i)=>{const o=audioContext.createOscillator(),gain=audioContext.createGain();o.type='triangle';o.frequency.setValueAtTime(freq,start+i*.075);gain.gain.setValueAtTime(.0001,start+i*.075);gain.gain.exponentialRampToValueAtTime(.045,start+i*.075+.01);gain.gain.exponentialRampToValueAtTime(.0001,start+i*.075+.18);o.connect(gain);gain.connect(audioContext.destination);o.start(start+i*.075);o.stop(start+i*.075+.2);});
}
function overlay(kind) {
  mode=kind;clearInput();
  const prefix=kind==='paused'?'pause':kind==='scale'?'scale':kind==='end'?'end':'intro';
  $('overlay-kicker').textContent=t(prefix+'Kicker');$('overlay-title').textContent=t(prefix+'Title');
  $('overlay-copy').textContent=t(prefix+'Copy');
  $('start').textContent=t(kind==='paused'?'resume':kind==='scale'?'scaleStart':kind==='end'?'again':'start');
  $('overlay').hidden=false;
  $('pause').setAttribute('aria-pressed',kind==='paused');
  $('pause').setAttribute('aria-label',t(kind==='paused'?'resume':'pause'));
  if(kind!=='intro')$('start').focus({preventScroll:true});
}
function localize() {
  document.documentElement.lang=lang;document.title=lang==='sv'?'Dr. Ann · Små steg. Stora vänner.':'Dr. Ann · Little steps. Big friends.';
  document.querySelectorAll('[data-copy]').forEach(el=>{if(t(el.dataset.copy))el.textContent=t(el.dataset.copy);});
  document.querySelectorAll('[data-copy-aria]').forEach(el=>{if(t(el.dataset.copyAria))el.setAttribute('aria-label',t(el.dataset.copyAria));});
  $('language').textContent=lang==='sv'?'SV / EN':'EN / SV';
  $('language').setAttribute('aria-label',lang==='sv'?'Read in English':'Läs på svenska');
  $('sound').setAttribute('aria-label',t(sound?'soundOff':'soundOn'));
  if(mode!=='playing')overlay(mode);
  updateUI();
}
function updateUI() {
  const phase=world.phase,near=world.nearTarget(),active=mode==='playing';
  $('objective').textContent=t('goals')[phase]+(phase===5?` ${world.stirs} / 3`:'');
  $('chapter').textContent=`0${phase<3?1:phase<7?2:3} / 03`;
  const actor=phase<3?'Dr. Ann':'Zorbas';
  $('character').textContent=innerWidth<=700?actor:t(phase<3?'chapterAnn':phase<7?'chapterZorbas':'chapterSunset')+' · '+actor;
  $('heart-count').textContent=world.heartCount;
  $('heart-count').setAttribute('aria-label',`${world.heartCount} ${t('hearts')}`);
  $('progress').style.width=world.progress()+'%';
  $('action-label').textContent=phase===5?`${t('stir')} ${world.stirs}/3`:t('action');
  $('action').setAttribute('aria-label',t('actions')[phase]);
  $('action').classList.toggle('ready',near&&phase>0&&active);
  $('action-hint').textContent=near&&phase>0?t('actions')[phase]:t('go');
  $('pause').disabled=mode==='intro'||mode==='scale'||mode==='end';
  document.body.dataset.character=phase<3?'ann':'zorbas';
  ['step-ann','step-zorbas','step-sunset'].forEach((id,i)=>{const el=$(id).closest('li');el.classList.toggle('active',i===(phase<3?0:phase<7?1:2));if(i===(phase<3?0:phase<7?1:2))el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
}
function toast(message) {$('toast').textContent=message;$('toast').hidden=false;toastUntil=performance.now()+4200;}
function events() {
  for(const event of world.drain()) {
    if(event.type==='help'){cue('help');toast(t(event.value));}
    if(event.type==='heart')cue('heart');
    if(event.type==='jump')cue('jump');
    if(event.type==='stir')cue('stir');
    if(event.type==='scale'){overlay('scale');$('toast').hidden=true;}
    if(event.type==='end'){cue('help');overlay('end');$('toast').hidden=true;}
  }
}
$('start').addEventListener('click',()=>{
  if(mode==='end')world=new World(reduced.matches);
  mode='playing';$('overlay').hidden=true;clearInput();last=0;updateUI();$('game').focus({preventScroll:true});
});
$('pause').addEventListener('click',()=>{if(mode==='playing')overlay('paused');else if(mode==='paused')$('start').click();});
$('restart').addEventListener('click',()=>{world=new World(reduced.matches);overlay('intro');$('toast').hidden=true;localize();});
$('language').addEventListener('click',()=>{lang=lang==='sv'?'en':'sv';localize();if(mode==='playing')$('game').focus({preventScroll:true});});
$('sound').addEventListener('click',async()=>{
  sound=!sound;
  if(sound){try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();await audioContext.resume();cue('heart');}catch{sound=false;}}
  $('sound').setAttribute('aria-pressed',sound);$('sound').setAttribute('aria-label',t(sound?'soundOff':'soundOn'));
  if(mode==='playing')$('game').focus({preventScroll:true});
});
const keys={ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right',' ':'jump',ArrowUp:'jump',w:'jump',W:'jump',x:'action',X:'action',e:'action',E:'action',ArrowDown:'action'};
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(mode==='playing')overlay('paused');else if(mode==='paused')$('start').click();return;}
  // Let focused UI buttons keep normal keyboard activation.
  if(mode!=='playing'||e.target.closest('button,a,input'))return;
  const key=keys[e.key];if(key){e.preventDefault();setInput('key:'+e.code,key,true);}
});
document.addEventListener('keyup',e=>{if(keys[e.key]){setInput('key:'+e.code,keys[e.key],false);if(mode==='playing')e.preventDefault();}});
document.querySelectorAll('[data-control]').forEach(button=>{
  let pressAt=0;
  button.addEventListener('pointerdown',e=>{if(mode!=='playing')return;e.preventDefault();pressAt=performance.now();button.setPointerCapture(e.pointerId);setInput('pointer:'+e.pointerId,button.dataset.control,true);});
  button.addEventListener('pointerup',e=>{
    const source='pointer:'+e.pointerId,key=button.dataset.control;
    const startedAt=pressAt;
    // A quick little tap should still make a visible step or an action.
    const remaining=Math.max(0,(key==='left'||key==='right'?140:65)-(performance.now()-pressAt));
    setTimeout(()=>{if(pressAt===startedAt)setInput(source,key,false);},remaining);
  });
  button.addEventListener('pointercancel',e=>setInput('pointer:'+e.pointerId,button.dataset.control,false));
  button.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&mode==='playing'){e.preventDefault();setInput('button:'+button.id,button.dataset.control,true);}});
  button.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();setInput('button:'+button.id,button.dataset.control,false);}});
  button.addEventListener('contextmenu',e=>e.preventDefault());
});
window.addEventListener('blur',()=>{clearInput();if(mode==='playing')overlay('paused');});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInput();if(mode==='playing')overlay('paused');}});
reduced.addEventListener('change',()=>{world.reducedMotion=reduced.matches;});
const canvas=$('game'),ctx=canvas.getContext('2d',{alpha:false});
function resize(){const mobile=innerWidth<=700&&!(innerWidth>innerHeight&&innerHeight<=600);canvas.width=mobile?384:640;canvas.height=mobile?300:360;}
new ResizeObserver(resize).observe($('stage'));resize();
let uiClock=0;
function frame(now) {
  const dt=last?Math.min(.04,(now-last)/1000):0;last=now;
  if(mode==='playing'){world.update(input,dt,canvas.width);events();}
  // Idle breathing stops with reduced motion, and pause freezes the world entirely.
  render(ctx,world,canvas.width,canvas.height);
  uiClock+=dt;if(uiClock>.1){updateUI();uiClock=0;}
  if(toastUntil&&now>toastUntil){$('toast').hidden=true;toastUntil=0;}
  requestAnimationFrame(frame);
}
localize();requestAnimationFrame(frame);
