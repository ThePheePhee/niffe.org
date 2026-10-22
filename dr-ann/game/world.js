export const ANN_PLATFORMS = [
  {x:830,w:74,h:13},{x:950,w:75,h:26},{x:1070,w:80,h:39},
  {x:1200,w:105,h:52},{x:1340,w:140,h:65},{x:1480,w:150,h:65}
];

const trail = scene => (scene === 'ann'
  ? [[200,22],[430,22],[715,22],[870,36],[985,50],[1245,76],[1410,89]]
  : [[405,35],[670,35],[925,35],[1270,35],[1390,35]])
  .map(([x,y])=>({x,y,got:false}));

// All mechanics live in world coordinates; presentation and input are independent.
export class World {
  constructor(reducedMotion=false) {
    Object.assign(this,{scene:'ann',phase:0,time:0,camera:0,bandage:false,healed:false,
      tree:false,muck:false,stirs:0,transition:0,reducedMotion,heartCount:0,
      particles:[],events:[],actionCooldown:0,jumpLatch:false,walkTime:0});
    this.player={x:94,y:0,w:22,h:38,vx:0,vy:0,facing:1,grounded:true};
    this.hearts=trail('ann');
  }
  emit(type,value) {this.events.push({type,value});}
  drain() {return this.events.splice(0);}
  sparkle(x,y,color='#f4c966') {
    for(let i=0;i<9;i++)this.particles.push({x,y,life:1,dx:(i-4)*13,dy:22+(i%3)*12,color});
  }
  target() {
    return [310,560,1485,520,790,1110,1480,1480][this.phase];
  }
  nearTarget() {
    const p=this.player;
    return Math.abs(p.x+p.w/2-this.target())<(this.scene==='ann'?65:110)
      && (this.phase!==2||p.y>24);
  }
  help() {
    if(this.transition||this.phase===0||this.phase===7||!this.nearTarget())return;
    const p=this.player;
    if(this.phase===1) {
      this.healed=true;this.phase=2;this.emit('help','bandaged');
    } else if(this.phase===2) {
      this.transition=2.4;this.emit('help','handshake');
    } else if(this.phase===3) {
      this.tree=true;this.phase=4;this.emit('help','tree');
    } else if(this.phase===4) {
      this.muck=true;this.phase=5;this.emit('help','muck');
    } else if(this.phase===5) {
      this.stirs++;
      this.emit('stir',this.stirs);
      if(this.stirs===3){this.phase=6;this.emit('help','cocoa');}
    } else if(this.phase===6) {
      this.phase=7;this.scene='sunset';this.emit('end');
    }
    this.sparkle(p.x+p.w/2,p.y+p.h/2);
    this.actionCooldown=.8;
  }
  update(input,dt,width=640) {
    dt=Math.min(.04,Math.max(0,dt));this.time+=dt;
    this.actionCooldown=Math.max(0,this.actionCooldown-dt);
    for(const s of this.particles){s.life-=dt;s.x+=s.dx*dt;s.y+=s.dy*dt;s.dy-=70*dt;}
    this.particles=this.particles.filter(s=>s.life>0);
    if(this.transition) {
      this.transition=Math.max(0,this.transition-dt);
      if(!this.transition) {
        this.scene='zorbas';this.phase=3;
        this.player={x:290,y:0,w:70,h:112,vx:0,vy:0,facing:1,grounded:true};
        this.hearts=trail('zorbas');this.particles=[];this.camera=0;
        this.emit('scale');
      }
      return;
    }
    if(this.phase===7)return;
    const p=this.player,ann=this.scene==='ann';
    const direction=(input.right?1:0)-(input.left?1:0),speed=ann?108:135;
    p.vx=direction*speed;
    if(direction){p.facing=direction;this.walkTime+=dt;}
    if(input.jump&&!this.jumpLatch&&p.grounded) {
      p.vy=ann?245:218;p.grounded=false;this.emit('jump');
    }
    this.jumpLatch=!!input.jump;
    const previousY=p.y;
    p.x+=p.vx*dt;
    let limit=ann?(this.healed?1505:610):this.phase===3?570:this.phase===4?850:this.phase===5?1170:1510;
    p.x=Math.max(25,Math.min(limit,p.x));
    // Small steps are assisted. Jumping offers extra play, never a precision gate.
    if(ann&&p.grounded) {
      for(const step of ANN_PLATFORMS) {
        if(p.x+p.w>step.x&&p.x<step.x+step.w&&step.h-p.y>0&&step.h-p.y<=15){p.y=step.h;p.vy=0;}
        else if(direction&&p.x+p.w>step.x&&p.x<step.x+step.w&&step.h>p.y&&step.h-p.y<=70){
          p.vy=Math.sqrt(2*650*(step.h-p.y+18));p.grounded=false;this.emit('jump');break;
        }
      }
    }
    let floor=0;
    if(ann)for(const step of ANN_PLATFORMS) {
      if(p.x+p.w>step.x&&p.x<step.x+step.w&&p.y>=step.h-.5&&p.vy<=0)floor=Math.max(floor,step.h);
    }
    p.vy-=650*dt;p.y+=p.vy*dt;
    // Landing on platforms works from above; their sides cannot trap little players.
    if(ann)for(const step of ANN_PLATFORMS) {
      if(p.x+p.w>step.x&&p.x<step.x+step.w&&previousY>=step.h&&p.y<=step.h&&p.vy<=0)floor=Math.max(floor,step.h);
    }
    if(p.y<=floor){p.y=floor;p.vy=0;p.grounded=true;}else p.grounded=false;
    if(ann&&!this.bandage&&Math.abs(p.x+11-310)<31) {
      this.bandage=true;this.phase=1;this.emit('help','bandage');this.sparkle(310,24);
    }
    for(const heart of this.hearts) {
      if(!heart.got&&Math.abs(p.x+p.w/2-heart.x)<(ann?25:42)
        &&Math.abs(p.y+p.h*.55-heart.y)<(ann?37:90)) {
        heart.got=true;this.heartCount++;this.sparkle(heart.x,heart.y,'#dd7a83');this.emit('heart');
      }
    }
    if(input.action&&this.actionCooldown<=0)this.help();
    const desired=Math.max(0,Math.min((ann?1950:1650)-width,p.x-width*.34));
    this.camera+= (desired-this.camera)*(this.reducedMotion?1:Math.min(1,dt*7));
  }
  progress() {
    if(this.phase===7)return 100;
    if(this.scene==='ann')return Math.min(48,this.player.x/1505*48);
    return Math.min(98,50+(this.player.x-290)/1190*48);
  }
}
