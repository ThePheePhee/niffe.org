import {LEVELS,levelById} from './levels.js?v=20';
const PICKUPS=['bandage','coffee','cheese','tomato'],foodIds=['coffee','cheese','tomato'];
export class World {
 constructor(reducedMotion=false,saved=null){
  Object.assign(this,{version:2,time:0,camera:0,reducedMotion,flags:{},collected:{},positions:{},unlocked:['ann-garden'],completed:[],lastByActor:{ann:'ann-garden',zorbas:'zorbas-brook'},particles:[],events:[],activity:null,stirs:0,lastStir:0,hold:0,action:null,jumpBuffer:0,coyote:0,jumpLatch:false,actionLatch:false,switchLatch:false,respawnTime:0,falling:false,falls:0,finished:false,transition:0,cutscene:null,checkpoint:100,heartCount:0});
  if(saved?.version===2){
   for(const key of ['flags','collected','positions'])if(saved[key]&&typeof saved[key]==='object')this[key]={...saved[key]};
   this.unlocked=Array.isArray(saved.unlocked)?saved.unlocked.filter(id=>levelById(id)):['ann-garden'];if(!this.unlocked.includes('ann-garden'))this.unlocked.unshift('ann-garden');
   this.completed=Array.isArray(saved.completed)?saved.completed.filter(id=>levelById(id)):[];
   if(saved.lastByActor)this.lastByActor={...this.lastByActor,...saved.lastByActor};this.finished=!!saved.finished;this.stirs=Math.min(6,Math.max(0,Number(saved.stirs)||0));
  }
  this.enter(saved?.levelId&&this.unlocked.includes(saved.levelId)?saved.levelId:'ann-garden',false);
  if(saved?.atEnding)this.scene='sunset';
 }
 emit(type,value){this.events.push({type,value});} drain(){return this.events.splice(0);}
 save(){return {version:2,flags:this.flags,collected:this.collected,positions:{...this.positions,[this.levelId]:{x:this.falling?this.checkpoint:this.player.x,y:this.falling?0:this.player.y,checkpoint:this.checkpoint}},unlocked:this.unlocked,completed:this.completed,lastByActor:this.lastByActor,levelId:this.levelId,finished:this.finished,atEnding:this.scene==='sunset',stirs:this.stirs};}
 enter(id,announce=true){
  const d=levelById(id);if(!d||!this.unlocked.includes(id))return false;
  if(this.player)this.positions[this.levelId]={x:this.falling?this.checkpoint:this.player.x,y:this.falling?0:this.player.y,checkpoint:this.checkpoint};
  this.level=structuredClone(d);this.levelId=id;this.scene=d.actor;const pos=this.positions[id];this.checkpoint=Number(pos?.checkpoint)||d.spawn;
  const actor=d.actor==='ann'?{w:34,h:62}:{w:108,h:174};
  this.player={x:Math.max(30,Math.min(d.length-150,Number(pos?.x)||d.spawn)),y:Math.max(0,Math.min(190,Number(pos?.y)||0)),...actor,vx:0,vy:0,facing:1,grounded:false};
  this.camera=Math.max(0,this.player.x-300);this.activity=null;this.hold=0;this.lastStir=0;this.actionLatch=true;this.jumpLatch=true;this.respawnTime=0;this.falling=false;this.action=null;
  this.lastByActor[d.actor]=id;this.refresh();if(announce)this.emit('level',id);return true;
 }
 unlock(id){if(!this.unlocked.includes(id)){this.unlocked.push(id);this.emit('unlock',id);}}
 markComplete(id){if(!this.completed.includes(id))this.completed.push(id);}
 switchCharacter(){
  if(!this.flags.handshake)return false;const actor=this.scene==='ann'?'zorbas':'ann';
  const target=actor==='ann'&&this.flags.cocoa&&!this.flags.picnic?'ann-garden':this.lastByActor[actor];if(!this.unlocked.includes(target))return false;
  this.enter(target);this.emit('switch',actor);return true;
 }
 refresh(){
  for(const o of this.level.objects){o.done=!!this.flags[o.id];o.active=true;if(foodIds.includes(o.id)||o.id==='picnic')o.active=!!this.flags.cocoa;if(o.kind==='exit')o.done=false;}
  for(const c of this.level.collectibles)c.got=!!this.collected[c.id];this.heartCount=Object.keys(this.collected).length;this.hearts=[];
  this.bandage=['bandage1','bandage2','bandage3'].some(id=>this.flags[id]);this.healed=!!this.flags.patient;this.tree=!!this.flags.tree;this.muck=!!this.flags.muck;
 }
 sparkle(x,y,color='#bb782b'){for(let i=0;i<9;i++)this.particles.push({x,y,life:.7,dx:(i-4)*18,dy:55+(i%3)*22,color});}
 countBandages(){return ['bandage1','bandage2','bandage3'].filter(id=>this.flags[id]).length;}
 countFood(){return foodIds.filter(id=>this.flags[id]).length;}
 getAction(){
  if(this.activity)return {id:'stir',kind:'stir',x:this.player.x};
  const nearby=this.level.objects.filter(o=>o.active&&!PICKUPS.includes(o.kind)&&!o.done&&Math.abs(this.player.x+this.player.w/2-o.x)<(this.scene==='ann'?82:145)&&Math.abs(this.player.y-(o.y||0))<85);
  nearby.sort((a,b)=>Math.abs(this.player.x+this.player.w/2-a.x)-Math.abs(this.player.x+this.player.w/2-b.x));return nearby[0]||null;
 }
 act(o){
  if(!o)return;const id=o.id;
  if(id==='patient'&&this.countBandages()<3){this.emit('hint','needBandages');return;}
  if(id==='gardenExit'){if(!this.flags.patient){this.emit('hint','needPatient');return;}this.enter('ann-stones');return;}
  if(id==='brookExit'){if(!this.flags.tree||!this.flags.muck){this.emit('hint','needIngredients');return;}this.markComplete(this.levelId);this.unlock('zorbas-kitchen');this.emit('cutscene','muck');return;}
  if(id==='mug'){if(!this.flags.tree||!this.flags.muck){this.emit('hint','needIngredients');return;}this.activity='stir';this.emit('activity','stir');return;}
  if(id==='picnic'&&this.countFood()<3){this.emit('hint','needFood');return;}
  if(id==='sunset'){
   if(!this.flags.cocoa){this.emit('hint','needCocoa');return;}if(!this.flags.picnic){this.emit('hint','needPicnic');return;}
   this.finished=true;this.scene='sunset';this.markComplete('zorbas-kitchen');this.emit('cutscene','sunset');this.refresh();return;
  }
  this.flags[id]=true;this.sparkle(o.x,(o.y||0)+45);this.emit('action',id);
  if(id==='patient'){this.markComplete('ann-garden');this.unlock('ann-stones');this.emit('cutscene','bandage');}
  if(id==='handshake'){this.markComplete('ann-stones');this.unlock('zorbas-brook');this.emit('cutscene','handshake');}
  if(id==='picnic')this.emit('cutscene','picnic');this.refresh();
 }
 goal(){
  if(this.scene==='sunset')return 'finished';
  if(this.levelId==='ann-garden'){if(this.flags.cocoa&&!this.flags.picnic)return this.countFood()<3?'findFood':'setPicnic';return !this.flags.patient?(this.countBandages()<3?'findBandages':'bandagePatient'):'toStones';}
  if(this.levelId==='ann-stones')return !this.flags.lever1?'lever1':!this.flags.lever2?'lever2':!this.flags.handshake?'handshake':'toGiant';
  if(this.levelId==='zorbas-brook')return !this.flags.tree?'findTree':!this.flags.logBridge?'rollLog':!this.flags.muck?'findMuck':'toKitchen';
  if(!this.flags.cocoa)return this.activity?'stir':'toMug';return !this.flags.picnic?'backToAnn':'toSunset';
 }
 update(input,dt,width=960){
  dt=Math.min(.04,Math.max(0,dt));this.time+=dt;
  for(const s of this.particles){s.life-=dt;s.x+=s.dx*dt;s.y+=s.dy*dt;s.dy-=200*dt;}this.particles=this.particles.filter(s=>s.life>0);if(this.scene==='sunset')return;
  const p=this.player,ann=this.scene==='ann',actionEdge=input.action&&!this.actionLatch;
  if(this.falling){
   p.vx=0;p.vy-=1050*dt;p.y+=p.vy*dt;
   if(p.y< -150){this.falling=false;this.falls++;p.x=this.checkpoint;p.y=0;p.vx=0;p.vy=0;p.grounded=true;this.respawnTime=.45;this.hold=0;this.action=null;this.emit('bump');}
   return;
  }
  if(input.switch&&!this.switchLatch){this.switchCharacter();this.switchLatch=true;this.actionLatch=!!input.action;return;}this.switchLatch=!!input.switch;
  if(this.activity==='stir'){
   const direction=input.left&&!input.right?-1:input.right&&!input.left?1:0;
   if(direction&&direction!==this.lastStir){this.stirs++;this.lastStir=direction;this.emit('stir',this.stirs);this.sparkle(1150,150,'#875e40');}
   if(this.stirs>=6){this.flags.cocoa=true;this.flags.mug=true;this.activity=null;this.emit('cutscene','cocoa');this.refresh();}
   if(actionEdge&&this.activity)this.activity=null;this.actionLatch=!!input.action;this.action=this.getAction();return;
  }
  if(this.respawnTime>0){this.respawnTime-=dt;p.vx=0;return;}
  const direction=(input.right?1:0)-(input.left?1:0),speed=ann?145:170,gravity=1050;p.vx=direction*speed;if(direction)p.facing=direction;
  this.coyote=p.grounded?.12:Math.max(0,this.coyote-dt);
  if(input.jump&&!this.jumpLatch)this.jumpBuffer=.16;else this.jumpBuffer=Math.max(0,this.jumpBuffer-dt);this.jumpLatch=!!input.jump;
  if(this.jumpBuffer&&this.coyote){p.vy=ann?455:440;p.grounded=false;this.coyote=0;this.jumpBuffer=0;this.emit('jump');}
  const previousY=p.y,previousX=p.x;p.x=Math.max(25,Math.min(this.level.length-p.w-35,p.x+p.vx*dt));const surfaces=this.level.platforms.filter(s=>!s.requires||this.flags[s.requires]);
  for(const gate of this.level.gates||[])if(!this.flags[gate.requires]&&p.x+p.w>gate.x&&previousX+p.w<=gate.x+8)p.x=gate.x-p.w;
  // Only tiny roots receive a step assist. Higher rocks are real jump platforms.
  for(const s of surfaces){const overlaps=p.x+p.w>s.x&&p.x<s.x+s.w;if(overlaps&&p.y<s.h-1){
   if(p.grounded&&s.h-p.y<=12){p.y=s.h;p.vy=0;}
   else if(previousX+p.w<=s.x+1&&direction>0){p.x=s.x-p.w;p.vx=0;}
   else if(previousX>=s.x+s.w-1&&direction<0){p.x=s.x+s.w;p.vx=0;}
  }}
  p.vy-=gravity*dt;p.y+=p.vy*dt;let floor=0;
  for(const s of surfaces)if(p.x+p.w>s.x&&p.x<s.x+s.w&&previousY>=s.h-.5&&p.y<=s.h&&p.vy<=0)floor=Math.max(floor,s.h);
  if(p.y<=floor){const landed=!p.grounded&&p.vy<-200;p.y=floor;p.vy=0;p.grounded=true;if(landed)this.emit('land');}else p.grounded=false;
  for(const h of this.level.hazards||[]){const covered=surfaces.some(s=>s.x<=h.x&&s.x+s.w>=h.x+h.w&&s.h>0);
   if(!covered&&p.y<2&&p.x+p.w*.6>h.x&&p.x+p.w*.4<h.x+h.w){this.falling=true;p.grounded=false;p.vy=-85;this.action=null;this.hold=0;this.emit('fall');break;}
  }
  if(this.falling)return;
  for(const point of this.level.checkpoints)if(p.x>=point&&point>this.checkpoint&&p.grounded&&p.y<2){this.checkpoint=point;this.emit('checkpoint',point);}
  for(const o of this.level.objects)if(PICKUPS.includes(o.kind)&&o.active&&!o.done&&Math.abs(p.x+p.w/2-o.x)<(ann?36:65)&&Math.abs(p.y+p.h*.45-(o.y||0))<45){this.flags[o.id]=true;this.sparkle(o.x,o.y);this.emit('pickup',o.id);this.refresh();}
  for(const c of this.level.collectibles)if(!c.got&&Math.abs(p.x+p.w/2-c.x)<(ann?31:66)&&Math.abs(p.y+p.h*.5-c.y)<(ann?45:95)){this.collected[c.id]=true;this.sparkle(c.x,c.y);this.emit('collect',c.kind);this.refresh();}
  this.action=this.getAction();
  if(this.action&&['hand','log'].includes(this.action.kind)){if(input.action){this.hold=Math.min(1.5,this.hold+dt);if(this.hold>=1.5){this.act(this.action);this.hold=0;}}else this.hold=Math.max(0,this.hold-dt*.5);}
  else{this.hold=0;if(actionEdge&&this.action)this.act(this.action);}this.actionLatch=!!input.action;
  const desired=Math.max(0,Math.min(this.level.length-width,p.x-width*.34));this.camera+=(desired-this.camera)*(this.reducedMotion?1:Math.min(1,dt*8));this.camera=Math.max(0,Math.min(Math.max(0,this.level.length-width),this.camera));
 }
 progress(){return this.finished?100:(this.completed.length/4)*100;}
}
