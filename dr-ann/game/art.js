// Original book drawings, crisp ink contours, paper, crosshatching and parallax.
const C = { ink:'#24282b', paper:'#e9dfbd', light:'#f4eed9', olive:'#68704a', moss:'#8d955a', sage:'#a9bd8b', deep:'#3e5148', rust:'#b96338', gold:'#d7a145', stone:'#91938b', mauve:'#94808b', soil:'#9a8060', sky:'#d6d5bb' };
const book = { ann:null, zorbas:null, mcd:null };
const sources = { ann:new URL('../assets/color-2-v2.webp',import.meta.url).href, zorbas:new URL('../assets/color-7-green-v1.webp',import.meta.url).href, mcd:new URL('../assets/color-4-v2.webp',import.meta.url).href };
let loading;
export function preloadArt(loader) {
  if(loading) return loading;
  const load=loader||(src=>new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;}));
  loading=Promise.allSettled(Object.entries(sources).map(async([key,src])=>{book[key]=await load(src);}));
  return loading;
}
const hash=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
const mod=(n,m)=>((n%m)+m)%m;
function rect(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(Math.round(x),Math.round(y),Math.ceil(w),Math.ceil(h));}
function shape(c,points,fill,stroke=C.ink,width=2){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function line(c,points,color=C.ink,width=1.4){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.stroke();}
function ellipse(c,x,y,rx,ry,fill,stroke=C.ink,width=1.5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function curve(c,draw,fill,stroke=C.ink,width=1.5){c.beginPath();draw(c);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function hatch(c,x,y,w,h,gap=6,color=C.ink,cross=false){if(w<=0||h<=0)return;c.save();c.beginPath();c.rect(x,y,w,h);c.clip();for(let i=-h;i<w+h;i+=gap)line(c,[[x+i,y+h],[x+i+h*.5,y]],color,.85);if(cross)for(let i=-h;i<w+h;i+=gap+1)line(c,[[x+i,y],[x+i+h*.6,y+h]],color,.7);c.restore();}
function spark(c,x,y,size=5,color=C.gold){shape(c,[[x,y-size],[x+1.5,y-1.5],[x+size,y],[x+1.5,y+1.5],[x,y+size],[x-1.5,y+1.5],[x-size,y],[x-1.5,y-1.5]],color,C.ink,.75);}

function pine(c,x,bottom,h,fill,ink=C.deep,detail=false){
  const w=h*.27;shape(c,[[x-3,bottom],[x-2,bottom-h*.52],[x+2,bottom-h*.52],[x+4,bottom]],fill,ink,1.3);
  shape(c,[[x,bottom-h],[x+w*.34,bottom-h*.74],[x+w*.13,bottom-h*.75],[x+w*.68,bottom-h*.49],[x+w*.37,bottom-h*.51],[x+w,bottom-h*.18],[x+w*.4,bottom-h*.23],[x+w*.8,bottom-h*.07],[x-w*.8,bottom-h*.07],[x-w*.48,bottom-h*.23],[x-w,bottom-h*.18],[x-w*.37,bottom-h*.51],[x-w*.69,bottom-h*.49],[x-w*.13,bottom-h*.75],[x-w*.34,bottom-h*.74]],fill,ink,1.4);
  if(detail)for(let i=1;i<8;i++){const yy=bottom-h+i*h*.103,ww=i*w*.1;line(c,[[x-ww,yy+3],[x+ww*.6,yy-2]],ink,.8);line(c,[[x+1,yy-5],[x-ww*.5,yy+7]],ink,.8);}
}
function cloud(c,x,y,s,color='#e5dfc9'){c.save();c.translate(x,y);c.scale(s,s);shape(c,[[0,12],[13,6],[27,7],[32,0],[48,-2],[60,7],[77,8],[92,15],[72,18],[49,16],[27,19],[8,17]],color,'#8e8c80',.8);line(c,[[16,12],[28,11],[38,12],[47,8],[60,12],[75,13]],'#b2ac98',.8);c.restore();}
function mountain(c,x,base,w,h,fill,detail=false){shape(c,[[x-15,base],[x+w*.11,base-h*.23],[x+w*.22,base-h*.16],[x+w*.38,base-h*.7],[x+w*.48,base-h*.57],[x+w*.57,base-h],[x+w*.66,base-h*.58],[x+w*.76,base-h*.45],[x+w,base]],fill,'#77727c',1);if(detail){line(c,[[x+w*.57,base-h],[x+w*.52,base-h*.61],[x+w*.58,base-h*.49],[x+w*.47,base-h*.12]],'#77727c',1.2);for(let j=0;j<6;j++)line(c,[[x+w*(.6+j*.025),base-h*(.76-j*.07)],[x+w*(.63+j*.025),base-h*(.49-j*.05)]],'#77727c',.7);}}

function backdrop(c,s,W,H){
  const g=H-72,cam=s.camera||0,t=s.time||0,sunset=s.scene==='sunset',kitchen=s.levelId==='zorbas-kitchen';
  rect(c,0,0,W,H,sunset?'#d3bb93':kitchen?'#d7ccb0':C.sky);
  for(let i=0;i<74;i++)rect(c,hash(i+111)*W,hash(i+211)*(g-30),1,1,'#c4c1a8');
  const sunX=W*.77-mod(cam*.018,130),sunY=sunset?g*.63:92;
  ellipse(c,sunX,sunY,sunset?53:31,sunset?53:31,sunset?'#d9904b':'#e4c776','#8f7658',1.2);
  for(let i=0;i<7;i++){const x=mod(i*229-cam*.055+(s.reducedMotion?0:t*1.8),W+300)-150;cloud(c,x,30+hash(i+14)*66,.7+hash(i+33)*.7,sunset?'#d8c3a4':'#e8e1ca');}
  for(let layer=0;layer<2;layer++){const spacing=layer?480:540,par=layer?.17:.075,start=Math.floor(cam*par/spacing);for(let i=start-1;i<start+W/spacing+2;i++)mountain(c,i*spacing-cam*par,g-(layer?9:55),spacing+35,(layer?121:160)+hash(i+4)*80,layer?(sunset?'#8e7b81':'#9c9b9e'):'#b5adb0',layer===1);}
  if(sunset){
    rect(c,0,g-100,W,102,'#7c918a');line(c,[[0,g-100],[W,g-100]],C.ink,1.3);
    for(let j=0;j<11;j++)for(let i=0;i<W/100;i++){const x=mod(i*117+hash(j)*70+(s.reducedMotion?0:Math.sin(t+j)*2),W+80)-40;line(c,[[x,g-90+j*8],[x+24+hash(i+j)*40,g-90+j*8]],j%2?'#c5c5aa':'#455d59',1);}
    for(let j=0;j<11;j++)line(c,[[sunX-12-j*4,g-93+j*8],[sunX+9+j*4,g-93+j*8]],'#dfb47b',3);
  }else for(let layer=0;layer<3;layer++){
    const spacing=[74,111,193][layer],par=[.24,.41,.63][layer],start=Math.floor(cam*par/spacing);
    for(let i=start-1;i<start+W/spacing+2;i++){if(layer===2&&i%3===0)continue;pine(c,i*spacing-cam*par+hash(i+80)*25,g+(layer?3:-16),[88,132,172][layer]+hash(i+layer*41)*85,['#8d9987','#70816b','#526b57'][layer],['#788673','#566a58','#354e43'][layer],layer===2);}
  }
  rect(c,0,g,W,72,C.soil);rect(c,0,g,W,8,'#717848');line(c,[[0,g+1],[W,g+1]],C.ink,2.8);line(c,[[0,g+10],[W,g+10]],'#b7a27b',1.6);
  for(let i=Math.floor(cam/27)-1;i<(cam+W)/27+1;i++){const x=i*27-cam,yy=g+21+hash(i+4)*43;line(c,[[x,yy],[x+7,yy-4],[x+12,yy-1]],'#695d4c',.8);if(i%3===0)shape(c,[[x+8,g+43],[x+13,g+39],[x+22,g+41],[x+19,g+47]],'#bca480','#7b6b53',.8);}
}
function rock(c,x,g,w,h,kind){
  if(h<=0)return;
  if(kind==='hand'){
    shape(c,[[x,g],[x+2,g-h+5],[x+10,g-h],[x+w-10,g-h],[x+w,g-h+5],[x+w,g]],'#9db37c',C.ink,2.1);
    line(c,[[x+8,g-h+3],[x+w-9,g-h+3]],'#c7d4a7',3);
    for(let i=0;i<w/42;i++){line(c,[[x+20+i*40,g-h+12],[x+17+i*40,g-h+27]],'#5d734e',1.1);line(c,[[x+15+i*40,g-h+14],[x+23+i*40,g-h+14]],'#5d734e',1);}
    hatch(c,x+w*.78,g-h+32,w*.2,h-35,7,'#5d734e',true);return;
  }
  const log=['log','bridge','root','stump','table'].includes(kind);
  shape(c,[[x,g],[x+3,g-h+7],[x+Math.min(12,w*.15),g-h],[x+w*.72,g-h-1],[x+w-3,g-h+6],[x+w,g]],log?'#a1875d':C.stone,C.ink,2.2);
  shape(c,[[x+w*.7,g-h+1],[x+w-3,g-h+6],[x+w-1,g-1],[x+w*.67,g-1],[x+w*.56,g-h*.45]],log?'#7b654d':'#727b75',null);
  line(c,[[x+5,g-h+5],[x+w*.42,g-h+3],[x+w*.69,g-h+3]],'#d8d3b1',3);hatch(c,x+w*.72,g-h+9,w*.24,h-10,6,'#3f4645',true);
  if(h>26)line(c,[[x+w*.38,g-h*.77],[x+w*.45,g-h*.52],[x+w*.35,g-h*.29]],'#4c5451',1.2);
  if(log){for(let j=0;j<3;j++)line(c,[[x+8,g-h+8+j*7],[x+w-7,g-h+7+j*7]],'#5e503d',1);ellipse(c,x+w-8,g-h/2,6,Math.max(2,h/2-3),'#c4b083',C.ink,1);}
  else for(let i=0;i<w/29;i++)line(c,[[x+5+i*27,g-h+1],[x+10+i*27,g-h-4],[x+16+i*27,g-h+1]],C.olive,1.5);
}
function tree(c,x,g,h=150){
  c.save();c.translate(x,g);c.scale(h/160,h/160);
  shape(c,[[-15,0],[-5,-65],[-9,-130],[3,-135],[8,-76],[17,-102],[24,-97],[9,-53],[14,0]],'#8e7756',C.ink,2.5);
  line(c,[[-1,-16],[3,-48],[-1,-109]],'#d0b280',2.5);hatch(c,6,-66,5,54,8,'#544b3c');
  for(const[xx,yy,rx,ry]of[[-24,-114,31,24],[22,-126,37,25],[-8,-144,34,22]]){
    shape(c,[[xx-rx,yy+4],[xx-rx*.8,yy-ry*.6],[xx-rx*.25,yy-ry],[xx+rx*.4,yy-ry*.85],[xx+rx,yy-ry*.15],[xx+rx*.85,yy+ry*.6],[xx+rx*.2,yy+ry],[xx-rx*.6,yy+ry*.7]],C.olive,C.ink,2);
    line(c,[[xx-15,yy+2],[xx-2,yy-7],[xx+16,yy-4]],'#a3aa70',4);hatch(c,xx+10,yy+2,14,12,5,C.deep);
  }c.restore();
}
function house(c,x,g,scale=1){
  c.save();c.translate(x,g);c.scale(scale,scale);
  shape(c,[[0,0],[3,-111],[151,-106],[157,0]],'#d4c5a0',C.ink,2.5);
  shape(c,[[-13,-107],[64,-171],[161,-112],[151,-103],[64,-151],[-5,-100]],'#9f6145',C.ink,2.8);
  shape(c,[[116,-137],[115,-168],[132,-169],[135,-125]],'#ac7050',C.ink,2);
  for(let j=0;j<4;j++)line(c,[[9+j*12,-113-j*9],[52+j*6,-113-j*9]],'#583e32',1);hatch(c,135,-97,15,89,7,'#786c55');
  shape(c,[[61,0],[61,-74],[97,-75],[99,0]],'#586953',C.ink,2);ellipse(c,91,-35,2,2,C.gold,C.ink,.8);
  for(const xx of[17,112]){shape(c,[[xx,-76],[xx+26,-76],[xx+27,-42],[xx-1,-41]],'#91a8a2',C.ink,2);line(c,[[xx+13,-74],[xx+13,-43]],C.paper,3);line(c,[[xx+1,-59],[xx+25,-59]],C.paper,3);line(c,[[xx-5,-39],[xx+32,-40]],C.ink,3);}
  rect(c,67,-116,28,28,C.light);rect(c,78,-112,6,20,C.rust);rect(c,71,-105,20,6,C.rust);
  for(const xx of[6,143]){shape(c,[[xx,0],[xx-8,-22],[xx+13,-22],[xx+9,0]],C.rust,C.ink,1.4);line(c,[[xx+2,-22],[xx+7,-40],[xx+1,-49]],C.olive,2);}c.restore();
}

export function drawAnn(c,x,bottom,scale=1,facing=1,step=0,carrying=false){
  c.save();c.translate(x+17*scale,bottom);c.scale(scale*(facing<0?-1:1),scale);
  const swing=step?Math.sin(step*Math.PI/2)*2.2:0;c.translate(0,-Math.abs(swing)*.7);c.rotate(swing*.009);
  if(book.ann){
    c.save();c.beginPath();c.moveTo(-23,-76);c.lineTo(23,-76);c.lineTo(23,-24);c.lineTo(13.5,-24);c.lineTo(13.5,4);c.lineTo(-23,4);c.closePath();c.clip();
    c.drawImage(book.ann,260,34,870,1872,-18,-70,36,70);c.restore();
  }
  else{
    shape(c,[[-10,-44],[-15,-8],[-9,-3],[1,-6],[12,-2],[13,-46]],'#f3eee0',C.ink,1.6);
    shape(c,[[-11,-46],[-12,-61],[-5,-69],[8,-68],[14,-59],[12,-44],[1,-40]],'#e2bc8c',C.ink,1.4);
    shape(c,[[-13,-52],[-16,-62],[-8,-69],[-3,-72],[1,-68],[9,-70],[15,-60],[5,-63],[-3,-54]],C.gold,C.ink,1.3);
    line(c,[[-4,-53],[-1,-55]],C.ink,1.3);line(c,[[6,-54],[9,-53]],C.ink,1.3);line(c,[[-4,-48],[2,-45],[8,-48]],C.ink,1.4);
    shape(c,[[-7,-6],[-7,0],[0,0],[2,-12],[5,0],[13,0],[8,-7]],'#bc6c40',C.ink,1.3);line(c,[[-7,-40],[3,-29],[7,-41]],'#798b90',1.4);hatch(c,8,-27,3,19,5,'#798b90');
  }if(carrying)bandage(c,20,-28,.58);c.restore();
}
export function drawMcD(c,x,bottom,scale=1,healed=false,step=0){
  c.save();c.translate(x,bottom);c.scale(scale,scale);const wobble=Math.sin(step*Math.PI/2)*2;
  if(book.mcd){
    // The curly acorn stalk, wild eyebrows and gigantic moustache are the original drawing.
    const legs=[[[11,-11],[12-wobble,-2],[6-wobble,0]],[[23,-11],[25+wobble,-3],[31+wobble,-1]]];
    for(const leg of legs){line(c,leg,C.ink,2.6);line(c,leg,'#d3b28a',1.25);}
    c.drawImage(book.mcd,1090,1360,905,1145,-1,-47,32,40);
    if(healed)bandage(c,24,-5,.22);c.restore();return;
  }
  line(c,[[8,-8],[6-wobble,0],[-wobble,0]],C.ink,2);line(c,[[22,-8],[24+wobble,0],[30+wobble,0]],C.ink,2);
  shape(c,[[3,-27],[6,-34],[24,-34],[29,-25],[26,-7],[6,-6]],'#b6a878',C.ink,2);
  for(let i=0;i<4;i++)line(c,[[6,-25+i*5],[25,-26+i*5]],'#5c5744',1.3);
  shape(c,[[0,-28],[4,-36],[12,-40],[14,-46],[17,-46],[18,-40],[27,-35],[31,-28]],'#7e7255',C.ink,1.8);hatch(c,8,-38,16,9,4,'#403f34',true);
  line(c,[[0,-21],[-5,-14],[-4,-10]],C.ink,1.8);line(c,[[29,-21],[34,-16],[35,-11]],C.ink,1.8);
  ellipse(c,11,-25,1.3,1.9,C.ink,null);ellipse(c,22,-25,1.3,1.9,C.ink,null);line(c,[[11,-20],[17,healed?-17:-22],[22,-20]],C.ink,1.4);
  if(healed)bandage(c,24,-5,.25);c.restore();
}
function limb(c,points,width,fill=C.sage){c.lineCap='round';c.lineJoin='round';line(c,points,C.ink,width+3.8);line(c,points,fill,width);}
function forearm(c,ex,ey,wx,wy){
  const outline=p=>{p.moveTo(ex-4,ey-4);p.bezierCurveTo(ex-16,ey+1,wx-18,wy-12,wx-9,wy+6);p.quadraticCurveTo(wx,wy+11,wx+10,wy+5);p.bezierCurveTo(wx+18,wy-11,ex+14,ey+3,ex+4,ey-4);p.closePath();};
  curve(c,outline,C.sage,C.ink,2);c.save();c.beginPath();outline(c);c.clip();hatch(c,wx+7,wy-13,9,19,4,'#536747',true);c.restore();
  curve(c,p=>{p.moveTo(ex,ey+3);p.quadraticCurveTo(wx-7,wy-9,wx-2,wy+1);},null,'#536747',1.15);
}
function giantHand(c,x,y,s=1,flip=1){
  c.save();c.translate(x,y);c.scale(s*flip,s);
  shape(c,[[-7,-7],[-15,1],[-18,12],[-13,18],[-10,11],[-10,29],[-6,33],[-3,29],[-1,12],[0,36],[5,38],[8,34],[8,12],[11,33],[16,34],[19,30],[16,4],[11,-6]],C.sage,C.ink,1.8);
  hatch(c,8,1,6,11,4,'#586c49');line(c,[[-5,3],[0,0],[8,1]],'#60764d',1);
  line(c,[[-6,27],[-3,27]],C.ink,1);line(c,[[2,31],[6,31]],C.ink,1);line(c,[[12,27],[16,26]],C.ink,1);c.restore();
}
export function drawZorbas(c,x,bottom,scale=1,facing=1,step=0,carryingTree=false,happy=false){
  c.save();c.translate(x+54*scale,bottom);c.scale(scale*(facing<0?-1:1),scale);c.translate(-54,-174);
  const walk=step?Math.sin(step*Math.PI/2):0,sway=walk*8;
  limb(c,[[65,107],[66+sway,139],[66-sway*.5,165]],10,'#8fa774');ellipse(c,74-sway*.5,168,17,5,C.sage,C.ink,1.8);
  for(let j=0;j<3;j++)line(c,[[79+j*4-sway*.5,167],[79+j*4-sway*.5,171]],C.ink,.8);
  limb(c,[[44,108],[43-sway,140],[42+sway*.5,167]],10);ellipse(c,33+sway*.5,169,18,4.5,C.sage,C.ink,1.8);line(c,[[21+sway*.5,167],[22+sway*.5,171]],C.ink,.8);
  curve(c,p=>{p.moveTo(26,54);p.bezierCurveTo(27,47,35,44,43,47);p.lineTo(66,47);p.bezierCurveTo(77,43,84,51,83,59);p.bezierCurveTo(80,71,73,73,72,86);p.lineTo(68,112);p.quadraticCurveTo(54,118,40,113);p.lineTo(36,86);p.bezierCurveTo(36,73,28,71,26,54);p.closePath();},C.sage,C.ink,2.2);
  shape(c,[[66,67],[76,58],[69,106],[60,109]],'#8fa578',null);hatch(c,65,71,7,28,5,'#506547');
  curve(c,p=>{p.moveTo(35,70);p.quadraticCurveTo(41,77,49,74);p.moveTo(59,74);p.quadraticCurveTo(68,78,75,67);},null,C.ink,1.1);
  line(c,[[47,59],[50,64],[53,60],[55,65],[59,61]],'#62794f',1.1);
  curve(c,p=>{p.moveTo(53,82);p.bezierCurveTo(47,84,50,90,53,92);p.moveTo(59,82);p.quadraticCurveTo(64,87,60,92);p.moveTo(54,96);p.lineTo(53,102);},null,'#536747',1.1);
  ellipse(c,42,72,1.8,1,C.ink,null);ellipse(c,67,72,1.8,1,C.ink,null);
  for(const[xx,yy]of[[30,52],[78,51],[39,129],[63,134]]){line(c,[[xx-2,yy-2],[xx-3,yy-5]],C.ink,.8);line(c,[[xx+1,yy-1],[xx+1,yy-4]],C.ink,.8);}
  shape(c,[[37,104],[70,104],[73,120],[58,123],[53,116],[48,124],[35,120]],'#a28483',C.ink,2);line(c,[[39,109],[66,110]],'#d2b5a1',2);hatch(c,62,112,9,7,4,'#5e4e54');
  limb(c,[[27,58],[15-sway*.3,86]],10,'#91a775');forearm(c,15-sway*.3,86,7+sway*.5,118);giantHand(c,7+sway*.5,122,.92,1);
  limb(c,[[80,58],[90+sway*.3,89]],10);forearm(c,90+sway*.3,89,98-sway*.5,119);giantHand(c,98-sway*.5,123,.92,-1);
  for(let i=0;i<4;i++)line(c,[[61+sway,131+i*6],[65+sway,133+i*6]],'#536747',.8);
  if(book.zorbas){
    c.save();c.beginPath();[[19,-2],[91,-2],[91,32],[82,33],[85,43],[78,51],[35,53],[24,47],[24,40],[28,34],[19,32]].forEach(([xx,yy],i)=>i?c.lineTo(xx,yy):c.moveTo(xx,yy));c.closePath();c.clip();
    c.drawImage(book.zorbas,824,83,541,421,20,-1,69,54);c.restore();
    if(happy){
      // Replace the sad mouth with skin sampled from the same watercolour drawing.
      c.save();c.beginPath();c.ellipse(35.8,32.8,2.3,4.4,0,0,Math.PI*2);c.clip();c.drawImage(book.zorbas,1010,166,128,64,32,28,8,10);c.restore();
      c.save();c.beginPath();c.ellipse(54.5,38.5,19.5,7.8,0,0,Math.PI*2);c.clip();c.drawImage(book.zorbas,1010,166,128,64,34,30,42,17);c.restore();
      curve(c,p=>{p.moveTo(38,36);p.bezierCurveTo(45,44,65,45,73,35);},null,C.ink,1.2);
      curve(c,p=>{p.moveTo(37,34);p.quadraticCurveTo(34,35,35,38);p.moveTo(74,33);p.quadraticCurveTo(77,35,75,38);},null,C.ink,.9);
    }
  }
  else{
    shape(c,[[32,17],[17,10],[24,29],[32,32],[31,43],[42,49],[69,47],[78,36],[86,12],[72,18],[69,3],[49,-2],[36,4]],C.sage,C.ink,2);
    line(c,[[37,25],[45,27],[49,24]],C.ink,2);line(c,[[60,24],[65,27],[73,25]],C.ink,2);line(c,[[42,38],[52,42],[64,40]],C.ink,1.8);line(c,[[55,25],[52,34],[57,34]],C.ink,1.2);
  }
  if(carryingTree){c.save();c.translate(96-sway*.5,120);c.rotate(-.35);tree(c,0,0,65);c.restore();}c.restore();
}
function bandage(c,x,y,s=1){c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.18);shape(c,[[-18,-5],[-14,-8],[14,-8],[18,-5],[18,5],[14,8],[-14,8],[-18,5]],'#ead8aa',C.ink,1.8);rect(c,-5,-6,10,12,'#b67c56');for(const xx of[-13,-9,9,13])for(const yy of[-3,2])ellipse(c,xx,yy,.8,.8,'#766348',null);c.restore();}
function sign(c,x,g,dir=1,tiny=false){c.save();c.translate(x,g);if(tiny)c.scale(.6,.6);shape(c,[[-2,0],[-1,-44],[4,-44],[5,0]],'#8d7251',C.ink,1.5);shape(c,[[-22,-47],[21,-47],[30,-37],[20,-27],[-22,-27]],'#ceb783',C.ink,2);line(c,[[-9*dir,-37],[14*dir,-37],[7*dir,-43]],C.ink,2.5);line(c,[[14*dir,-37],[7*dir,-31]],C.ink,2.5);c.restore();}
function hazard(c,o,cam,g,t){
  const x=o.x-cam,w=o.w||130,water=o.kind==='water',bottom=g+73,surface=g+(water?48:53);
  // Remove the complete ground strip: this is a visible hole with a lower surface.
  rect(c,x,g-2,w,75,water?'#3e5657':'#514b39');
  rect(c,x+3,g+13,w-6,35,water?'#4b6461':'#65533b');
  shape(c,[[x,surface+3],[x+w*.2,surface-1],[x+w*.48,surface+2],[x+w*.72,surface-2],[x+w,surface+2],[x+w,bottom],[x,bottom]],water?'#668c88':'#82704b',null);
  for(let i=0;i<w/26;i++)for(let j=0;j<2;j++){
    const xx=x+6+i*26+(j%2)*7,yy=surface+5+j*10;
    line(c,[[xx,yy],[Math.min(x+w-3,xx+13),yy]],water?'#c0c7ae':'#aa9365',1.3);
  }
  // Ink-edged earth banks and exposed roots make the drop easy to judge.
  for(const side of[0,1]){
    const xx=side?x+w:x,dir=side?1:-1;
    shape(c,[[xx,g-1],[xx+dir*8,g-1],[xx+dir*6,g+13],[xx+dir*10,g+27],[xx+dir*5,g+44],[xx+dir*8,bottom],[xx,bottom]],'#786248',null);
    line(c,[[xx,g-2],[xx,g+12],[xx+dir*3,g+23],[xx,g+37],[xx,bottom]],C.ink,2.2);
    hatch(c,Math.min(xx,xx+dir*8),g+12,8,58,5,'#3e3b30',true);
    line(c,[[xx+dir*5,g-1],[xx+dir*12,g-3],[xx+dir*19,g]],C.ink,2.3);
    line(c,[[xx+dir*3,g+7],[xx-dir*5,g+13],[xx-dir*3,g+23]],'#a7986b',1.4);
    line(c,[[xx-dir*4,g+14],[xx-dir*10,g+17]],'#a7986b',1);
  }
  for(const xx of[x-9,x+w+8]){line(c,[[xx,g],[xx-2,g-25],[xx+4,g-34]],C.deep,1.4);line(c,[[xx+3,g],[xx+8,g-21]],C.deep,1.4);}
  if(water&&w>170){const xx=x+w*.61,yy=surface+Math.sin(t*2)*1.3;ellipse(c,xx,yy,10,3,'#535c42',C.ink,1);ellipse(c,xx+7,yy-2,3,3,'#869765',C.ink,1);ellipse(c,xx+8,yy-3,.8,.8,C.ink,null);}
}
function mug(c,x,g,s,flags,stirs=0,activity=null){
  c.save();c.translate(x,g);c.scale(s,s);
  shape(c,[[-33,-19],[-46,-3],[-24,-2]],'#a36342',C.ink,2);shape(c,[[33,-19],[47,-3],[24,-2]],'#a36342',C.ink,2);
  ellipse(c,40,-60,20,25,C.rust,C.ink,3);ellipse(c,42,-60,10,15,C.sky,C.ink,2);
  shape(c,[[-38,-94],[37,-94],[31,-14],[21,-5],[-23,-5],[-34,-16]],'#b36c43',C.ink,2.6);shape(c,[[20,-91],[36,-92],[29,-14],[19,-9]],'#884c37',null);hatch(c,24,-74,7,52,6,'#563f31');line(c,[[-27,-75],[-25,-23],[-17,-16]],'#d49d63',4);
  ellipse(c,0,-96,38,10,'#ceb990',C.ink,2.5);ellipse(c,0,-96,31,6,flags?.muck?'#493b2d':'#867d61',C.ink,1);
  rect(c,-21,-66,37,30,'#d1b47c');line(c,[[-12,-49],[-5,-41],[9,-59]],'#694b35',3);
  if(flags?.tree){c.save();c.translate(5,-98);c.rotate(activity==='stir'?-.45+(stirs%3)*.24:-.15);tree(c,0,0,61);c.restore();}
  for(let i=0;i<3;i++)line(c,[[-23+i*20,-116],[-28+i*20,-127],[-22+i*20,-139]],'#58615b',1.2);c.restore();
}
function collectible(c,o,cam,g,t,reduced){
  if(o.got)return;const x=o.x-cam,y=g-(o.y||26)+(reduced?0:Math.sin(t*2.3+o.x)*2);
  if(o.kind==='note'){line(c,[[x,y+5],[x,y-8],[x+8,y-11],[x+8,y+2]],C.ink,2.2);ellipse(c,x-3,y+5,4,2.5,C.gold,C.ink,1);ellipse(c,x+5,y+2,4,2.5,C.gold,C.ink,1);}
  else if(o.kind==='sun')spark(c,x,y,8);
  else{shape(c,[[x-6,y-2],[x+6,y-2],[x+5,y+5],[x,y+10],[x-5,y+5]],'#bb8650',C.ink,1.4);ellipse(c,x,y-3,7,4,'#796747',C.ink,1.5);hatch(c,x-5,y-6,10,5,3,'#3e3c32',true);line(c,[[x,y-6],[x+2,y-10]],C.ink,1.5);}
}
function patient(c,x,g,done,t){drawMcD(c,x-16,g,1.35,done,0);if(!done){const y=g-77+Math.sin(t*2)*1.5;shape(c,[[x-13,y-14],[x+13,y-14],[x+16,y+8],[x+3,y+10],[x,y+17],[x-3,y+10],[x-15,y+8]],C.light,C.ink,1.5);bandage(c,x,y-2,.5);}}
function giantPalm(c,x,g,h=100,done=false){
  c.save();c.translate(x,g-h);
  shape(c,[[-75,35],[-106,20],[-111,2],[-96,-7],[-70,6],[-47,-5],[51,-22],[93,-12],[118,15],[400,-25],[400,85],[87,71],[-20,57]],'#9eb37c',C.ink,3);
  for(let i=0;i<4;i++){const yy=6+i*12;line(c,[[-91+i*7,yy],[-37,yy+6],[22,yy+3]],'#485d41',1.5);line(c,[[-24,yy-3],[-19,yy+7]],'#485d41',1.1);}
  hatch(c,35,36,58,28,6,'#516448',true);line(c,[[95,32],[137,20],[211,23]],'#788d60',3);if(done)bandage(c,-38,16,1.2);c.restore();
}
function food(c,kind,x,y){
  if(kind==='coffee'){shape(c,[[x-19,y],[x-21,y-54],[x-10,y-62],[x+14,y-61],[x+23,y-51],[x+19,y]],'#b89a62',C.ink,2);rect(c,x-18,y-49,38,24,'#594932');ellipse(c,x,y-37,5,8,'#c89e58',C.ink,1.3);line(c,[[x+1,y-43],[x-2,y-31]],C.ink,1.2);hatch(c,x+11,y-20,8,16,4,'#69583d');}
  if(kind==='cheese'){shape(c,[[x-25,y],[x-25,y-18],[x+17,y-34],[x+26,y-19],[x+25,y]],'#d2b05e',C.ink,2);line(c,[[x-24,y-18],[x+25,y-19]],C.ink,1.2);for(const[dx,dy,r]of[[-10,-9,4],[11,-11,3],[8,-25,3]])ellipse(c,x+dx,y+dy,r,r*.7,'#b88e3b','#7d602d',.8);}
  if(kind==='tomato'){ellipse(c,x,y-20,22,20,'#af4f32',C.ink,2);line(c,[[x-10,y-34],[x,y-39],[x+12,y-31],[x+3,y-36],[x+5,y-46]],C.deep,2.7);line(c,[[x-12,y-24],[x-13,y-16]],'#d47d45',3);hatch(c,x+11,y-23,7,14,4,'#723b2b');}
}
function object(c,o,state,g){
  if(o.active===false)return;
  const flags=state.flags||{},done=o.done||flags[o.id],x=o.x-(state.camera||0),y=g-(o.y||0),t=state.time||0;
  switch(o.kind){
    case'bandage':if(!done){bandage(c,x,y,.9);spark(c,x+20,y-14,4,C.light);}break;
    case'patient':patient(c,x,y,done,t);break;
    case'switch':case'lever':rock(c,x-23,y,46,14);shape(c,[[x-7,y-13],[x-6,y-20],[x+13,y-20],[x+14,y-13]],done?C.moss:C.rust,C.ink,1.6);line(c,[[x+2,y-20],[x+(done?16:-10),y-42]],C.ink,4);ellipse(c,x+(done?16:-10),y-42,5,5,done?C.moss:C.gold,C.ink,1.5);break;
    case'hand':giantPalm(c,x,g,o.y||100,done);break;
    case'tree':if(!done&&!flags.tree)tree(c,x,g,state.scene==='zorbas'?85:175);else{rect(c,x-8,g-6,16,6,'#b59a6d');ellipse(c,x,g-6,8,3,'#c9b783',C.ink,1);}break;
    case'muck':if(!done){shape(c,[[x-21,y],[x-19,y-13],[x-10,y-17],[x-6,y-27],[x+4,y-29],[x+10,y-18],[x+19,y-14],[x+23,y]],'#7e694a',C.ink,2);hatch(c,x+5,y-15,12,12,4,'#493d30');}break;
    case'mug':mug(c,x,y,1.25,flags,state.stirs,state.activity);break;
    case'coffee':case'cheese':case'tomato':if(!done)food(c,o.kind,x,y);break;
    case'bridge':if(done||flags.logBridge)rock(c,x-67,g-(o.y||0),o.w||145,18,'log');break;
    case'log':if(!done){c.save();c.translate(x,g);c.rotate(-.22);rock(c,-48,0,96,22,'log');c.restore();}break;
    case'sunset':sign(c,x,g);spark(c,x,g-69,10);break;
    case'exit':sign(c,x,g,o.direction||1);break;
    case'picnic':shape(c,[[x-50,y],[x-41,y-8],[x+46,y-8],[x+54,y]],'#8d5f4b',C.ink,1.7);if(done){food(c,'cheese',x+15,y-8);food(c,'tomato',x-25,y-8);}else{ellipse(c,x,y-11,23,9,'#bda67e',C.ink,1.5);line(c,[[x-18,y-14],[x-12,y-37],[x+12,y-37],[x+19,y-13]],C.ink,2);}break;
    case'gate':for(const xx of[-26,26])shape(c,[[x+xx-3,y],[x+xx-4,y-54],[x+xx+3,y-57],[x+xx+4,y]],'#9a7b54',C.ink,1.7);for(const yy of[-17,-39])line(c,[[x-28,y+yy],[x+(done?-11:28),y+yy-(done?8:0)]],'#745c43',5);break;
  }
}
function flowers(c,cam,g,W,giant=false,hazards=[]){
  const spacing=giant?73:54;for(let i=Math.floor(cam/spacing)-1;i<(cam+W)/spacing+1;i++){
    const x=i*spacing+hash(i+19)*21-cam,h=8+hash(i+42)*(giant?5:14);
    if(hazards.some(gap=>x+cam>gap.x-8&&x+cam<gap.x+(gap.w||130)+8))continue;
    line(c,[[x,g],[x-2,g-h],[x+1,g-h-4]],C.deep,1.3);line(c,[[x-1,g-h*.5],[x-7,g-h*.8],[x-2,g-h*.7]],C.olive,1.5);
    if(i%5===0){shape(c,[[x-9,g-h],[x-6,g-h-7],[x+2,g-h-10],[x+9,g-h-4],[x+9,g-h]],C.rust,C.ink,1.2);line(c,[[x-5,g-h-2],[x+6,g-h-2]],'#dbc6a0',1);}
    else if(i%3===0){for(let k=0;k<4;k++)ellipse(c,x+Math.cos(k*Math.PI/2)*3,g-h-4+Math.sin(k*Math.PI/2)*3,2,3,i%2?C.gold:'#bbc0a0',C.ink,.65);}
    else line(c,[[x+2,g],[x+5,g-h*.7],[x+8,g-h]],C.olive,1.2);
  }
}
function annWorld(c,s,W,H){
  const cam=s.camera||0,g=H-72;
  if(s.levelId==='ann-garden'){
    house(c,60-cam,g,.95);for(const xx of[710,1480,2090,3030])tree(c,xx-cam,g,170+hash(xx)*50);
    for(let i=0;i<9;i++){const x=245+i*36-cam;line(c,[[x,g],[x+2,g-43-(i%2)*6]],'#706c4e',5);line(c,[[x,g-19],[x+38,g-21]],'#8f8a5f',4);}
  }else{
    tree(c,180-cam,g,205);sign(c,330-cam,g);
    const hand=s.level?.objects?.find(o=>o.kind==='hand'),gx=(hand?.x||2810)+250-cam;
    if(book.zorbas&&gx>-430&&gx<W+540)c.drawImage(book.zorbas,gx-240,g-555,530,556);
  }
}
function giantWorld(c,s,W,H){
  const cam=s.camera||0,g=H-72;
  if(s.levelId==='zorbas-brook'){
    house(c,48-cam,g,.24);tree(c,280-cam,g,54);tree(c,2020-cam,g,84);sign(c,355-cam,g,1,true);for(const xx of[160,190,221])rock(c,xx-cam,g,21,5+hash(xx)*8);
  }else{
    for(let i=Math.floor(cam/180)-1;i<(cam+W)/180+1;i++){const x=i*180-cam;line(c,[[x,g+19],[x+170,g+19]],'#5a4e3a',1);line(c,[[x+25,g+27],[x+87,g+29],[x+121,g+26]],'#6d5b42',1.2);}
    drawAnn(c,1020-cam,g,.3,1);drawMcD(c,1042-cam,g,.32,true);house(c,1640-cam,g,.25);
  }
}
function sunsetWorld(c,s,W,H){const g=H-72,x=W*.38;rock(c,x-70,g,245,30);drawZorbas(c,x-5,g-29,1.3,1,0,false,true);giantHand(c,x+125,g-103,.8,-1);drawAnn(c,x+103,g-100,.38,1);drawMcD(c,x+119,g-99,.39,true);mug(c,x-83,g,.57,{tree:true,muck:true});}

export function render(ctx,state,W,H){
  ctx.save();ctx.imageSmoothingEnabled=true;ctx.lineJoin='round';ctx.lineCap='round';backdrop(ctx,state,W,H);
  const cam=state.camera||0,g=H-72,t=state.time||0;
  if(state.scene==='sunset')sunsetWorld(ctx,state,W,H);
  else{
    if(state.scene==='zorbas')giantWorld(ctx,state,W,H);else annWorld(ctx,state,W,H);
    const level=state.level||{};
    for(const h of level.hazards||[])if(h.x+(h.w||130)>cam-40&&h.x<cam+W+40)hazard(ctx,h,cam,g,t);
    for(const p of level.platforms||[])if((!p.requires||state.flags?.[p.requires])&&p.x+p.w>cam-30&&p.x<cam+W+30)rock(ctx,p.x-cam,g,p.w,p.h,p.kind);
    for(const gate of level.gates||[])if(gate.x>cam-50&&gate.x<cam+W+50)object(ctx,{...gate,kind:'gate',done:!!state.flags?.[gate.requires]},state,g);
    for(const o of level.objects||[])if(o.x>cam-430&&o.x<cam+W+430)object(ctx,o,state,g);
    for(const o of level.collectibles||[])if(o.x>cam-30&&o.x<cam+W+30)collectible(ctx,o,cam,g,t,state.reducedMotion);
    const p=state.player||{x:90,y:0,vx:0,facing:1},step=!state.reducedMotion&&Math.abs(p.vx||0)>6&&p.grounded?1+Math.floor(t*(state.scene==='zorbas'?6:9))%4:0;
    const inGap=(level.hazards||[]).some(h=>p.x+(p.w||34)*.5>h.x&&p.x+(p.w||34)*.5<h.x+(h.w||130));
    if(!state.falling&&!inGap)ellipse(ctx,p.x-cam+(p.w||34)*.5,g+3,(p.w||34)*.54,3,'#5f674b',null);
    ctx.save();
    if(state.falling){
      // The bank occludes a falling character, while their head stays visible above ground.
      ctx.beginPath();ctx.rect(0,0,W,g);for(const h of level.hazards||[])ctx.rect(h.x-cam,g,h.w||130,73);ctx.clip();
    }
    if(state.respawnTime>0&&!state.reducedMotion)ctx.globalAlpha=.5+.5*(1-Math.min(1,state.respawnTime/.45));
    if(state.scene==='zorbas')drawZorbas(ctx,p.x-cam,g-p.y,1,p.facing||1,step,state.flags?.tree&&!state.flags?.cocoa,!!state.flags?.handshake);
    else drawAnn(ctx,p.x-cam,g-p.y,1,p.facing||1,step,!!state.flags?.bandage1&&!state.flags?.patient);
    ctx.restore();
    if(state.respawnTime>0&&state.reducedMotion){ellipse(ctx,p.x-cam+(p.w||34)*.5,g-p.y+3,(p.w||34)*.68,6,null,C.paper,3);ellipse(ctx,p.x-cam+(p.w||34)*.5,g-p.y+3,(p.w||34)*.68,6,null,C.ink,1);}
    flowers(ctx,cam,g,W,state.scene==='zorbas',level.hazards||[]);
    if(!state.reducedMotion)for(let i=0;i<3;i++){const x=mod(i*319-cam*.8+t*8,W+100)-50,y=g-28-i*28+Math.sin(t*1.7+i)*7;line(ctx,[[x-4,y-(Math.floor(t*8)%2?3:0)],[x,y],[x+4,y-(Math.floor(t*8)%2?0:3)]],C.ink,.8);}
  }
  for(const p of state.particles||[]){ctx.globalAlpha=Math.min(1,Math.max(0,p.life));rect(ctx,p.x-cam,g-p.y,3,3,p.color||C.gold);}ctx.globalAlpha=1;
  ctx.strokeStyle=C.ink;ctx.lineWidth=2;ctx.strokeRect(1,1,W-2,H-2);ctx.restore();
}
