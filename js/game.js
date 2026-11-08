
const $=i=>document.getElementById(i),cv=$('g'),ui=$('ui');
let c=cv.getContext('2d'),pc=null,W,H,D,SAT=0,Z=1,VW=0,VH=0,SAB=0,vig,S,st='menu',joy=null,keys={};
const TS=48,CS=768,COLS=['#c51111','#132ed1','#117f2d','#ed54ba','#ef7d0d','#f5f557','#3f474e','#d6e0f0','#6b2fbb','#71491e','#38ffdd','#50ef39'],
HATN=['Ninguno','Corona','Copa','Vaquero','Chef','Globo','Hongo'],MC=['#e0509f','#8a5bf0','#2fd0b8','#f0873a'],look={c:5,h:1};
const WD={blaster:['Blaster de plasma','Dispara solo al enemigo más cercano. Más disparos y daño.'],drones:['Drones orbitales','Giran a tu alrededor y cortan a quien se acerque.'],emp:['Pulso EMP','Onda expansiva que daña y empuja a la horda.'],tesla:['Arco Tesla','Rayo que salta de impostor en impostor.'],rail:['Cañón de riel','Haz perforante de gran daño.']};
const PD={boots:['Botas propulsoras','+10% de velocidad.'],core:['Núcleo de energía','+15% de daño en todas las armas.'],mag:['Imán gravitacional','Atrae cristales desde más lejos.'],armor:['Blindaje','+20 de vida máxima y cura 20.']};
const ET=[{hp:12,sp:62,r:15,s:1,dm:8,hat:0,v:1},{hp:8,sp:105,r:12,s:.85,dm:10,col:'#ef7d0d',hat:0,v:1,kn:1,wk:'rail'},{hp:70,sp:42,r:23,s:1.5,dm:14,col:'#c51111',hat:2,v:6,wk:'drones'},{hp:600,sp:52,r:42,s:2.8,dm:22,col:'#9c0b0b',hat:1,v:40},{hp:16,sp:55,r:14,s:1,dm:5,col:'#5bd12e',hat:0,v:3,wk:'tesla'},{hp:14,sp:60,r:14,s:1,dm:5,col:'#8a3fd0',hat:0,v:3,kn:1,wk:'emp'},{hp:30,sp:50,r:15,s:1.1,dm:5,col:'#17a0a0',hat:0,v:4,wk:'blaster'},{hp:22,sp:92,r:15,s:1,dm:6,col:'#ff4d2e',hat:0,v:3,wk:'tesla'},{hp:18,sp:50,r:14,s:1,dm:5,col:'#2fa8d8',hat:0,v:4,wk:'rail'},{hp:40,sp:45,r:16,s:1.15,dm:5,col:'#e0509f',hat:2,v:6,wk:'blaster'},{hp:26,sp:48,r:14,s:1.05,dm:5,col:'#d6e0f0',hat:0,v:5,wk:'drones'}];const GC=['#0000ff','#a0123a','#71491e','#3f474e','#6b6b2a'];
function rs(){D=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;Z=Math.max(.5,H/620);VW=W/Z;VH=H/Z;SAB=parseFloat(getComputedStyle(document.documentElement).paddingBottom)||0;cv.width=W*D;cv.height=H*D;SAT=parseFloat(getComputedStyle(document.documentElement).paddingTop)||0;
 const g=c.createRadialGradient(W/2,H/2,Math.min(W,H)*.3,W/2,H/2,Math.max(W,H)*.75);g.addColorStop(0,'rgba(40,8,30,0)');g.addColorStop(1,'rgba(40,8,30,.5)');vig=g}
addEventListener('resize',rs);rs();
/* ---------- dibujo ---------- */
const sh=(h,k=.68)=>{const n=parseInt(h.slice(1),16);return`rgb(${(n>>16&255)*k|0},${(n>>8&255)*k|0},${(n&255)*k|0})`};
const ol=f=>{c.fillStyle=f;c.fill();c.stroke()};
function rr(x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
const poly=a=>{c.beginPath();a.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]))};
const HAT=[0,
()=>{poly([[-9,-43],[-11,-55],[-5,-50],[0,-57],[5,-50],[11,-55],[9,-43]]);c.closePath();ol('#ffd23f')},
()=>{rr(-14,-47,28,6,3);ol('#2b2d36');rr(-8,-61,16,16,3);ol('#2b2d36')},
()=>{c.beginPath();c.ellipse(0,-45,21,5,0,0,7);ol('#8a5530');rr(-9,-59,18,15,6);ol('#8a5530')},
()=>{rr(-10,-48,20,7,2);ol('#fff');[[-6,-54,7],[6,-54,7],[0,-58,8]].forEach(a=>{c.beginPath();c.arc(a[0],a[1],a[2],0,7);ol('#fff')})},
()=>{c.beginPath();c.moveTo(0,-44);c.lineTo(2,-62);c.stroke();c.beginPath();c.arc(2,-70,9,0,7);ol('#7a45d0')},
()=>{c.beginPath();c.arc(0,-43,14,Math.PI,0);c.closePath();ol('#ff5d73');c.fillStyle='#fff';[[-6,-49],[4,-52],[8,-47]].forEach(a=>{c.beginPath();c.arc(a[0],a[1],2.4,0,7);c.fill()})}];
const IM={},SCM={r:new Map(),b:new Map(),x:new Map(),k:new Map()},SCP=new Map();
for(const k in SP){const i=new Image();i.onload=()=>SP[k].ok=1;i.src=SP[k].src;IM[k]=i}
const SK=[{"n":"Ninguna","p":0},{"n":"Policía","p":60,"ic":["#27457a","#15181f","#1d2433"],"o":[["r","#27457a",-32,78,117,50],["r","#e8edf5",-32,78,117,6],["r","#15181f",-32,126,117,9],["r","#1d2433",-32,135,117,70],["c","#f2c94c",-8,98,8],["c","#fff3b0",-10,96,3]]},{"n":"Traje","p":80,"ic":["#2b2b33","#c0392b","#1a1a20"],"o":[["r","#2b2b33",-32,78,117,57],["p","#f4f4f4",[[-12,78],[12,78],[0,110]]],["r","#c0392b",-4,88,8,34],["r","#1a1a20",-32,135,117,70]]},{"n":"Científico","p":80,"ic":["#f2f5f7","#2f6fd0","#cfd8de"],"o":[["r","#f2f5f7",-32,78,117,130],["r","#cfd8de",-3,78,6,130],["r","#cfd8de",12,104,22,18],["r","#2f6fd0",18,100,3,10]]},{"n":"Prisionero","p":60,"ic":["#f08a1c","#15181f","#f08a1c"],"o":[["r","#f08a1c",-32,78,117,130],["s","#15181f",80,205,15,5]]},{"n":"Chef","p":100,"ic":["#f6f6f6","#c0392b","#f6f6f6"],"o":[["r","#f6f6f6",-32,78,117,130],["r","#c0392b",-32,78,117,9],["c","#555555",-9,100,3],["c","#555555",-9,116,3],["c","#555555",9,100,3],["c","#555555",9,116,3]]},{"n":"Médico","p":100,"ic":["#2fa7a0","#ffffff","#2fa7a0"],"o":[["r","#2fa7a0",-32,78,117,130],["r","#ffffff",-14,98,28,8],["r","#ffffff",-4,88,8,28]]},{"n":"Astronauta","p":140,"ic":["#e9edf2","#ff8a2a","#e9edf2"],"o":[["r","#e9edf2",-32,78,117,130],["r","#ff8a2a",-32,118,117,10],["r","#2a313a",-18,92,36,18],["c","#7dff7d",-8,101,4],["c","#ff6b6b",6,101,4]]},{"n":"Militar","p":120,"ic":["#4a5a2f","#2f3a1d","#4a5a2f"],"o":[["r","#4a5a2f",-32,78,117,130],["e","#2f3a1d",-14,100,18,10],["e","#6b7a45",16,92,16,9],["e","#2f3a1d",10,128,20,11],["e","#6b7a45",-18,140,16,9]]},{"n":"Minero","p":120,"ic":["#f2d21b","#d0d4d8","#3a3a3a"],"o":[["r","#f2d21b",-32,78,117,130],["r","#d0d4d8",-32,102,117,8],["r","#d0d4d8",-32,150,117,8],["r","#3a3a3a",-18,78,7,130],["r","#3a3a3a",16,78,7,130]]},{"n":"Pirata","p":160,"ic":["#c0392b","#f4f4f4","#c0392b"],"o":[["r","#f4f4f4",-32,78,117,130],["s","#c0392b",78,205,24,12]]}];
function skOps(g,x,y,ops){for(const q of ops){g.fillStyle=q[1];if(q[0]=='r')g.fillRect(x+q[2],y+q[3],q[4],q[5]);else if(q[0]=='c'){g.beginPath();g.arc(x+q[2],y+q[3],q[4],0,7);g.fill()}else if(q[0]=='e'){g.beginPath();g.ellipse(x+q[2],y+q[3],q[4],q[5],0,0,7);g.fill()}
 else if(q[0]=='p'){g.beginPath();q[2].forEach((p,i)=>i?g.lineTo(x+p[0],y+p[1]):g.moveTo(x+p[0],y+p[1]));g.fill()}else if(q[0]=='s')for(let yy=q[2];yy<q[3];yy+=q[4])g.fillRect(x-32,y+yy,117,q[5])}}
function applySkin(base,o,sk){const x=base.getContext('2d'),W=base.width,Hh=base.height,orig=x.getImageData(0,0,W,Hh),t=document.createElement('canvas');t.width=W;t.height=Hh;const g=t.getContext('2d');g.drawImage(base,0,0);g.globalCompositeOperation='source-atop';
 for(let i=0;i<o.n;i++)skOps(g,i*o.w+o.hx[i],o.hy[i],SK[sk].o);
 const nd=g.getImageData(0,0,W,Hh),a=nd.data,b=orig.data;
 for(let p=0;p<a.length;p+=4){if(!b[p+3])continue;const r=b[p],gg=b[p+1],bb=b[p+2],lu=.299*r+.587*gg+.114*bb,row=((p>>2)/W)|0;
  if(lu<46||(row<90&&((Math.abs(r-146)<16&&Math.abs(gg-197)<16&&Math.abs(bb-214)<16)||(Math.abs(r-71)<16&&Math.abs(gg-100)<16&&Math.abs(bb-108)<16)||(r>225&&gg>225&&bb>225)))){a[p]=r;a[p+1]=gg;a[p+2]=bb}}
 x.putImageData(nd,0,0)}
function sheet(k,col,sk){const o=SP[k],M=k=='g'?SCP:SCM[k],key=sk?col+'|'+sk:col;let s=M.get(key);if(s)return s;
 const base=document.createElement('canvas');base.width=o.n*o.w;base.height=o.h;const x=base.getContext('2d');x.drawImage(IM[k],0,0);
 const d=x.getImageData(0,0,base.width,base.height),a=d.data,T=parseInt(col.slice(1),16),R=T>>16&255,G=T>>8&255,B=T&255,AL=col=='#ffffff'&&o.m==2;
 for(let i=0;i<a.length;i+=4){if(!a[i+3])continue;const r=a[i],g=a[i+1],b=a[i+2],lu=.299*r+.587*g+.114*b;let ref=0,tr=R,tg=G,tb=B;
  if(AL){if(r+g+b>90){ref=1;tr=tg=tb=255}}
  else if(o.m==2){if(b>r*1.6&&b>g*1.6&&b>8)ref=o.l;else if(o.rr&&r>g*2&&r>b*1.5)ref=o.rr;else if(o.gr&&g>r*1.5&&g>b*1.5){ref=o.gr;tr=168;tg=220;tb=236}}
  else if(o.m?(g>r*1.5&&g>b*1.5):(r>g*2&&r>b*1.5))ref=o.l;
  if(ref){const t=ref==1?1:Math.min(1.12,lu/ref);a[i]=Math.min(255,tr*t);a[i+1]=Math.min(255,tg*t);a[i+2]=Math.min(255,tb*t)}}
 x.putImageData(d,0,0);if(sk&&SK[sk]&&SK[sk].o)applySkin(base,o,sk);
 s=[{c:base,w:o.w,h:o.h}];for(const f of [.5,.25]){const w=Math.max(1,Math.round(o.w*f)),h=Math.max(1,Math.round(o.h*f)),cv=document.createElement('canvas');cv.width=w*o.n;cv.height=h;const g=cv.getContext('2d');g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';for(let i=0;i<o.n;i++)g.drawImage(base,i*o.w,0,o.w,o.h,i*w,0,w,h);s.push({c:cv,w,h})}
 M.set(key,s);if(M.size>(k=='g'?5:60))M.delete(M.keys().next().value);return s}
function crew(x,y,s,col,hat,f,t,imp,fl,kn,fi,sk){
 const k=imp===1?'r':imp||'g',o=SP[k],u=s*54/o.ch;
 c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(x,y,17*s,6*s,0,0,7);c.fill();
 if(!o.ok)return;
 const sc=u*Z*D,SS=sheet(k,fl?'#ffffff':col,k=='g'?sk:0)[c===pc||sc>=.6?0:sc>=.3?1:2],i=fi!=null?fi:t<0?o.i:Math.floor((((t/6.2832)%1)+1)%1*o.n)%o.n;
 c.save();c.translate(x,y-(o.bob&&!fi?Math.abs(Math.sin(t))*4*s:0));c.scale(f*u,u);c.drawImage(SS.c,i*SS.w,0,SS.w,SS.h,-o.ax,-o.h,o.w,o.h);
 if(HAT[hat]){c.save();c.translate(o.hx[i]-o.ax,o.hy[i]-o.h+44*o.hs);c.scale(o.hs,o.hs);c.lineWidth=2.2;c.lineJoin='round';c.strokeStyle='#0a0612';HAT[hat]();c.restore()}
 if(kn){c.save();c.translate(o.w*.3+o.w/2-o.ax,-o.ch*.4);c.scale(o.hs,o.hs);c.rotate(-.5+Math.sin(t*1.5)*.35);c.lineWidth=2;c.lineJoin='round';c.strokeStyle='#0a0612';rr(-2,-2.5,7,5,2);ol('#5a3a22');poly([[5,-3],[19,-1.5],[22,0],[5,3]]);c.closePath();ol('#dfe6ee');c.restore()}
 c.restore()}

/* ---------- terreno Fungle ---------- */
const hh=(x,y,s)=>{let n=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(s+1,1442695041);n=Math.imul(n^n>>>13,1274126177);return((n^n>>>16)>>>0)/4294967296};
const TER={chunk:16,tile:48,
 tiles:{1:['SKELD_PISO_METAL',0],2:['SKELD_PANEL',0],3:['REJILLA_VENTILACION',0,{spawn:'vent'}],4:['MIRA_PISO_BLANCO',0],5:['MIRA_VIDRIO',0],6:['MIRA_HIDROPONICO',0],7:['MIRA_HONGO_LUMINISCENTE',0],8:['POLUS_ROCA_VOLCANICA',0],9:['POLUS_NIEVE_COMPACTA',0],10:['POLUS_TIERRA_GRIS',0],11:['FUNGLE_MUSGO',0],12:['FUNGLE_RAICES',0],13:['FUNGLE_SUELO_HUMEDO',0],
  20:['POZO_LAVA',2,{dps:16,burn:1}],21:['POZO_ACIDO',2,{dps:7,slow:.6}],22:['POZO_AGUA_REFRIGERANTE',2,{slow:.55}],
  30:['ROCA_VOLCANICA',1],31:['CRISTAL_LABORATORIO',1],32:['ARBOL_ALIENIGENA',1],33:['HONGO_GIGANTE',1],34:['MESA_CAFETERIA',1],35:['CONSOLA_CONTROL',1],36:['MOTOR',1],37:['REACTOR_NUCLEAR',1],38:['CAJA_CARGA',1],39:['TERMINAL_TAREAS',1]},
 bm:[{n:'The Skeld',piso:[1,1,1,2],liq:[22],obst:[34,35,36,38,38,39,37],vent:.02,deco:{}},
  {n:'The Fungle',piso:[11,11,11,11,11,11,12,13],liq:[21],obst:[32,32,33,33,32],vent:.006,deco:{7:.025}},
  {n:'Mira HQ',piso:[4,4,5,4],liq:[21],obst:[31,31,31,39,38],vent:.01,deco:{6:.05,7:.03}},
  {n:'Polus',piso:[8,8,9,10],liq:[20,20,22],obst:[30,30,30,38,39],vent:.006,deco:{}}],
 st:{30:[[1,1]],31:[[1,1]],32:[[1,1]],33:[[2,2]],34:[[2,2]],35:[[2,1]],36:[[2,2]],37:[[3,3]],38:[[1,1]],39:[[1,1]]},
 sp:{suelo:.85,obst:.10,liq:.05,pObst:.1,liqTh:.82,dzTh:.75}};
const SD={30:[18,1],31:[12,1],32:[9,1],33:[10,1.5],34:[13,1],35:[14,1],36:[15,1],37:[16,1],38:[5,.8],39:[17,1]},BRK={30:30,31:18,38:22};
const CK=new Map(),vn=(x,y)=>{const i=Math.floor(x),j=Math.floor(y),fx=x-i,fy=y-j,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),a=hh(i,j,90),b=hh(i+1,j,90),e=hh(i,j+1,90),d=hh(i+1,j+1,90);return a+(b-a)*u+(e-a)*v+(a-b-e+d)*u*v};
const BS=2600,SEEDS=new Map(),BC=[[127,137,150],[110,74,134],[228,236,240],[75,72,82]],BF={b1:1,b2:1,w:1};
function seed(i,j){const k=i*1000+j;let s=SEEDS.get(k);if(!s){s=[(i+.2+.6*hh(i,j,201))*BS,(j+.2+.6*hh(i,j,202))*BS,hh(i,j,203)*4|0];SEEDS.set(k,s)}return s}
function bioF(x,y){const wx=x+130*(vn(x/450+11,y/450+3)-.5)*2,wy=y+130*(vn(x/450+37,y/450+19)-.5)*2,gi=Math.floor(wx/BS),gj=Math.floor(wy/BS);let d1=1e9,d2=1e9,b1=1,b2=1;
 for(let i=-1;i<2;i++)for(let j=-1;j<2;j++){const s=seed(gi+i,gj+j),d=Math.hypot(wx-s[0],wy-s[1]);if(d<d1){d2=d1;b2=b1;d1=d;b1=s[2]}else if(d<d2){d2=d;b2=s[2]}}
 const d0=Math.hypot(wx-120,wy-120)*.55;if(d0<d1){d2=d1;b2=b1;d1=d0;b1=1}else if(d0<d2){d2=d0;b2=1}
 const t=Math.min(1,(d2-d1)/300);BF.b1=b1;BF.b2=b2;BF.w=.5+.5*t*t*(3-2*t)}
function bio(x,y){bioF(x,y);return BF.b1}
function chunk(cx,cy){const key=(cx+2048)*4096+cy+2048;let k=CK.get(key);if(k)return k;
 const t=new Uint8Array(256),z=new Uint8Array(256),bi=new Uint8Array(256),S0=new Uint8Array(256),P=new Uint8Array(256),A=[],V=[],O=[],X=cx*16,Y=cy*16,SP=TER.sp,
 prot=i=>{const a=i&15,b=i>>4;return a==7||a==8||b==7||b==8},mk=(i,id,w,h)=>{const tx=X+(i&15),ty=Y+(i>>4),sd=SD[id];A.push({t:sd[0],x:(tx+w/2)*TS,y:(ty+h)*TS-4,s:sd[1],k:hh(tx,ty,5)*2|0,tx,ty,id,w,h})};
 for(let i=0;i<256;i++){const tx=X+(i&15),ty=Y+(i>>4),wx=tx*TS+24,wy=ty*TS+24;bioF(wx,wy);const b=hh(tx,ty,9)<BF.w?BF.b1:BF.b2,B=TER.bm[b];bi[i]=b;const dd=Math.hypot(wx-120,wy-120);
  z[i]=dd>1100&&vn(wx/520+33,wy/520+7)>SP.dzTh?1:0;S0[i]=dd<420?1:0;P[i]=prot(i)||S0[i]?1:0;t[i]=B.piso[hh(tx,ty,1)*B.piso.length|0]}
 for(let i=0;i<256;i++){if(P[i])continue;const tx=X+(i&15),ty=Y+(i>>4),L=TER.bm[bi[i]].liq;if(vn(tx/3.4+7,ty/3.4+11)>(z[i]?SP.liqTh-.14:SP.liqTh))t[i]=L[vn(tx/6+3,ty/6+5)*L.length*.999|0]}
 for(let i=0;i<256;i++){if(P[i]||t[i]>=20)continue;const tx=X+(i&15),ty=Y+(i>>4),B=TER.bm[bi[i]];if(hh(tx,ty,2)>=SP.pObst*(z[i]?1.7:1))continue;
  const id=B.obst[hh(tx,ty,3)*B.obst.length|0],Q=TER.st[id],sz=Q[hh(tx,ty,4)*Q.length|0],w=sz[0],h=sz[1];if((i&15)+w>16||(i>>4)+h>16)continue;
  let ok=1;for(let a=0;a<h&&ok;a++)for(let b=0;b<w;b++){const j=i+a*16+b;if(P[j]||t[j]>=20){ok=0;break}}if(!ok)continue;
  for(let a=0;a<h;a++)for(let b=0;b<w;b++)t[i+a*16+b]=id;mk(i,id,w,h)}
 for(let i=0;i<256;i++){if(t[i]>=20)continue;const tx=X+(i&15),ty=Y+(i>>4),B=TER.bm[bi[i]];
  if(!S0[i]&&hh(tx,ty,6)<B.vent*(z[i]?2.5:1)){t[i]=3;V.push([tx*TS+24,ty*TS+30])}
  else{const dv=hh(tx,ty,7);let a=0;for(const q in B.deco){a+=B.deco[q];if(dv<a){t[i]=+q;break}}}}
 const seen=new Uint8Array(256),q=[];for(let i=0;i<256;i++)if(prot(i)&&t[i]<30){seen[i]=1;q.push(i)}
 for(let n=0;n<q.length;n++){const i=q[n],a=i&15,b=i>>4;for(const d of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=a+d[0],ny=b+d[1];if(nx<0||ny<0||nx>15||ny>15)continue;const j=ny*16+nx;if(!seen[j]&&t[j]<30){seen[j]=1;q.push(j)}}}
 for(let i=0;i<256;i++)if(t[i]<30&&!seen[i]){const B=TER.bm[bi[i]],id=B.obst.find(d=>TER.st[d][0][0]==1&&TER.st[d][0][1]==1&&TER.st[d].length==1);t[i]=id;mk(i,id,1,1)}
 const free=[];for(let i=0;i<256;i++)if(t[i]<20&&!S0[i])free.push(i);let dzc=0;for(let i=0;i<256;i++)dzc+=z[i];dzc/=256;const bc=bi[136];
 const put=(tp,p,n)=>{if(!free.length)return;for(let j=0;j<n;j++)if(hh(cx*7+j,cy*13+tp,200+tp)<p){const i=free[hh(cx*5+j,cy*11+tp,300+tp)*free.length|0];O.push({t:tp,id:cx+','+cy+'|'+tp+j,x:(X+(i&15))*TS+24,y:(Y+(i>>4))*TS+40,s:1,k:0})}};
 put(6,.3+.8*dzc,2);put(7,bc==1||bc==2?.3:.1,1);put(8,.07+.4*dzc,1);put(11,.3+.5*dzc,2);
 k={t,z,A,V,O,cv:null,dp:null};CK.set(key,k);return k}
const cell=(cx,cy)=>chunk(cx,cy).O,tid=(x,y)=>tileAt(Math.floor(x/TS),Math.floor(y/TS)),dzT=(x,y)=>{const tx=Math.floor(x/TS),ty=Math.floor(y/TS);return chunk(tx>>4,ty>>4).z[(ty&15)*16+(tx&15)]};
let LCk=null,LCx=1e9,LCy=1e9;
function tileAt(tx,ty){const cx=tx>>4,cy=ty>>4;if(cx!=LCx||cy!=LCy){LCk=chunk(cx,cy);LCx=cx;LCy=cy}return LCk.t[(ty&15)*16+(tx&15)]}
function solidAt(x,y){const id=tid(x,y);return id>=30&&!(BRK[id]&&S.brk.has(Math.floor(x/TS)+','+Math.floor(y/TS)))}
function pickVent(){const P=S.P,cx=Math.floor(P.x/CS),cy=Math.floor(P.y/CS),L=[];for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)for(const v of chunk(cx+i,cy+j).V){const d=Math.hypot(v[0]-P.x,v[1]-P.y);if(d>280&&d<950)L.push(v)}
 if(!L.length)return null;const v=L[Math.random()*L.length|0];S.fx.push({k:'x',x:v[0],y:v[1],r:34,l:.3});return{x:v[0],y:v[1]}}
function mush(m){const s=m.s,x=m.x,y=m.y,k=m.k;c.lineWidth=3;c.strokeStyle='#2a0f2a';
 c.fillStyle='rgba(30,5,30,.25)';c.beginPath();c.ellipse(x,y,26*s,9*s,0,0,7);c.fill();
 if(k==2){c.beginPath();c.ellipse(x,y-24*s,16*s,26*s,0,0,7);ol('#b79b2d');c.strokeStyle='#4a3a10';c.lineWidth=2.5;poly([[x-2*s,y-46*s],[x+5*s,y-36*s],[x-3*s,y-28*s],[x+4*s,y-18*s]]);c.stroke();return}
 if(k==3){rr(x-3*s,y-26*s,6*s,26*s,2*s);ol('#6fa89a');c.beginPath();c.arc(x,y-30*s,10*s,0,7);ol('#8fd1c1');c.fillStyle='rgba(255,255,255,.6)';c.beginPath();c.arc(x-3*s,y-33*s,3*s,0,7);c.fill();return}
 const P=k?['#e79ac1','#f6c3da']:['#8a3fa0','#b563bd'];
 rr(x-8*s,y-30*s,16*s,30*s,5*s);ol('#ecc8dc');
 c.beginPath();c.ellipse(x,y-30*s,34*s,13*s,0,0,7);ol(P[0]);
 c.beginPath();c.ellipse(x,y-38*s,24*s,18*s,0,Math.PI,0);c.closePath();ol(P[1]);
 c.strokeStyle='rgba(255,226,240,.8)';c.lineWidth=2.4*s;c.beginPath();c.ellipse(x,y-38*s,16*s,11*s,0,Math.PI*1.1,Math.PI*1.9);c.stroke()}
function cry(k){const s=k.s;c.lineWidth=3;c.strokeStyle='#0a0612';[[-14,0,-10,-34],[0,4,2,-52],[14,0,12,-28]].forEach(a=>{poly([[k.x+(a[0]-8)*s,k.y+a[1]*s],[k.x+a[2]*s,k.y+a[3]*s],[k.x+(a[0]+8)*s,k.y+a[1]*s]]);c.closePath();ol('#d63b5e')})}
function spk(k){const s=k.s;c.lineWidth=3;c.strokeStyle='#2a1445';[[-16,0,-20,-40],[-4,4,-2,-62],[10,2,16,-46],[22,0,26,-26]].forEach(a=>{poly([[k.x+(a[0]-7)*s,k.y+a[1]*s],[k.x+a[2]*s,k.y+a[3]*s],[k.x+(a[0]+7)*s,k.y+a[1]*s]]);c.closePath();ol('#a56fd8')})}
function rock(k){const s=k.s,g=k.k%2;c.lineWidth=3;c.strokeStyle='#3a2a1a';c.beginPath();c.ellipse(k.x,k.y-10*s,24*s,16*s,0,0,7);ol(g?'#d99a3a':'#9a979c');c.fillStyle=g?'#efc064':'#bdbac0';c.beginPath();c.ellipse(k.x-6*s,k.y-15*s,12*s,7*s,0,0,7);c.fill()}
function crate(k){const s=k.s,x=k.x,y=k.y;c.lineWidth=3;c.strokeStyle='#1f262d';rr(x-30*s,y-30*s,60*s,30*s,4*s);ol('#7e909f');rr(x-30*s,y-40*s,60*s,12*s,4*s);ol('#4a5662');c.fillStyle='#2b343c';[-20,0,20].forEach(a=>{c.beginPath();c.arc(x+a*s,y-14*s,2.5*s,0,7);c.fill()})}
function tree(k){const s=k.s,x=k.x,y=k.y,br=a=>{poly(a);c.closePath();ol('#5a3050')};c.fillStyle='rgba(30,5,30,.25)';c.beginPath();c.ellipse(x,y,22*s,8*s,0,0,7);c.fill();c.lineWidth=3;c.strokeStyle='#1d0c1f';
 br([[x-9*s,y],[x-5*s,y-48*s],[x+5*s,y-48*s],[x+9*s,y]]);br([[x,y-40*s],[x-26*s,y-62*s],[x-22*s,y-66*s],[x,y-50*s]]);br([[x,y-44*s],[x+24*s,y-64*s],[x+20*s,y-68*s],[x,y-52*s]]);
 [[-22,-70,17],[0,-84,22],[22,-72,16]].forEach(a=>{c.beginPath();c.arc(x+a[0]*s,y+a[1]*s,a[2]*s,0,7);ol('#2f9a86')});
 c.fillStyle='rgba(255,240,170,.85)';[[-6,-86],[10,-78],[-24,-72],[24,-70]].forEach(a=>{c.beginPath();c.arc(x+a[0]*s,y+a[1]*s,2.4*s,0,7);c.fill()})}
function chest(k){const x=k.x,y=k.y,p=S.ip.get(k.id)||0;c.lineWidth=3;c.strokeStyle='#1f262d';rr(x-22,y-28,44,28,5);ol('#c9852b');rr(x-22,y-28,44,10,5);ol('#e0a64a');rr(x-5,y-22,10,12,2);ol('#2b343c');
 if(p>0){c.strokeStyle='#7df9ff';c.lineWidth=4;c.beginPath();c.arc(x,y-14,34,-1.57,-1.57+6.283*p);c.stroke()}}
function pod(k){const r=S.ip.has(k.id)?S.ip.get(k.id):60;c.lineWidth=3;c.strokeStyle='#0d3b3b';c.beginPath();c.ellipse(k.x,k.y,34,16,0,0,7);ol('rgba(80,230,210,'+(.25+.4*r/60)+')');c.fillStyle='#fff';c.fillRect(k.x-3,k.y-9,6,18);c.fillRect(k.x-9,k.y-3,18,6)}
function core(k){c.lineWidth=3;c.strokeStyle='#2a1445';c.beginPath();c.arc(k.x,k.y-18+Math.sin(performance.now()/300)*3,12,0,7);ol('#ff6bd6');c.fillStyle='#fff';c.beginPath();c.arc(k.x-3,k.y-21,3,0,7);c.fill()}
function ghostObj(k){const p=S.ip.get(k.id)||0,tm=performance.now()/1000;c.globalAlpha=.75;crew(k.x,k.y-8+Math.sin(tm*2+k.x)*5,.95,'#8fa3d4',0,1,tm*6,'x',0);c.globalAlpha=1;
 c.lineWidth=3;c.strokeStyle='rgba(125,249,255,.8)';c.beginPath();c.ellipse(k.x,k.y-24,28,36,0,0,7);c.stroke();
 if(p>0){c.strokeStyle='#ffd23f';c.lineWidth=5;c.beginPath();c.arc(k.x,k.y-24,34,-1.57,-1.57+6.283*p);c.stroke()}}
function vrock(k){const s=k.s,x=k.x,y=k.y;c.lineWidth=3;c.strokeStyle='#1a1418';c.beginPath();c.ellipse(x,y-12*s,22*s,17*s,0,0,7);ol('#4a4046');c.fillStyle='#6b5f66';c.beginPath();c.ellipse(x-6*s,y-17*s,11*s,7*s,0,0,7);c.fill();c.strokeStyle='#ff6a1a';c.lineWidth=2;c.beginPath();c.moveTo(x+4*s,y-8*s);c.lineTo(x+12*s,y-20*s);c.stroke()}
function lcry(k){const s=k.s;c.lineWidth=3;c.strokeStyle='#0d3a4a';[[-10,0,-12,-34],[2,3,3,-48],[13,0,14,-26]].forEach(a=>{poly([[k.x+(a[0]-7)*s,k.y+a[1]*s],[k.x+a[2]*s,k.y+a[3]*s],[k.x+(a[0]+7)*s,k.y+a[1]*s]]);c.closePath();ol('#7de8f5')})}
function table(k){const x=k.x,y=k.y-48;c.lineWidth=3;c.strokeStyle='#1f262d';[[-52,0],[52,0],[0,-40],[0,40]].forEach(a=>{rr(x+a[0]-9,y+a[1]-9,18,18,5);ol('#c0392b')});c.beginPath();c.ellipse(x,y,44,32,0,0,7);ol('#b9c3cd');c.fillStyle='#e8eef3';c.beginPath();c.ellipse(x,y-3,36,24,0,0,7);c.fill()}
function consol(k){const x=k.x,y=k.y;c.lineWidth=3;c.strokeStyle='#161c22';rr(x-44,y-44,88,40,6);ol('#3a4654');rr(x-36,y-40,72,18,3);ol('#0f1a22');c.fillStyle='#4df3ff';c.fillRect(x-32,y-36,24,10);c.fillStyle='#7dff7d';c.fillRect(x-4,y-36,16,10);c.fillStyle='#ffd23f';c.fillRect(x+16,y-36,12,10);c.fillStyle='#e74c3c';[-28,-12,4,20].forEach(a=>{c.beginPath();c.arc(x+a,y-12,3,0,7);c.fill()})}
function engine(k){const x=k.x,y=k.y;c.lineWidth=3;c.strokeStyle='#161c22';rr(x-40,y-84,80,80,10);ol('#69737f');rr(x-30,y-74,60,24,6);ol('#4a535d');c.beginPath();c.arc(x,y-30,20,0,7);ol('#2b343c');c.fillStyle='#ff8a2a';c.beginPath();c.arc(x,y-30,11,0,7);c.fill();c.fillStyle='#ffd23f';c.beginPath();c.arc(x,y-30,5,0,7);c.fill()}
function reactor(k){const x=k.x,y=k.y-66,t=performance.now()/1000;c.lineWidth=3;c.strokeStyle='#161c22';c.beginPath();c.arc(x,y,62,0,7);ol('#3d4650');c.beginPath();c.arc(x,y,44,0,7);ol('#1f272e');c.fillStyle='rgba(125,255,125,'+(.55+.25*Math.sin(t*3))+')';c.beginPath();c.arc(x,y,28,0,7);c.fill();c.fillStyle='#e8ffe8';c.beginPath();c.arc(x,y,10,0,7);c.fill()}
function termi(k){const x=k.x,y=k.y;c.lineWidth=3;c.strokeStyle='#161c22';rr(x-17,y-38,34,36,5);ol('#46525e');rr(x-12,y-33,24,16,3);ol('#ffd23f');c.fillStyle='#161c22';c.fillRect(x-2,y-31,4,8);c.beginPath();c.arc(x,y-20,2,0,7);c.fill()}
const PS=576,PF=.75,FC=document.createElement('canvas'),PL=[],LQ={20:{bank:'rgba(38,12,8,.85)',wall:'#2a0d08',surf:'#ff7a1e',deep:'rgba(150,25,5,'},21:{bank:'rgba(16,56,24,.8)',wall:'#143a1a',surf:'#7bf05a',deep:'rgba(18,110,40,'},22:{bank:'rgba(18,64,104,.75)',wall:'#174a73',surf:'#6fcdf0',deep:'rgba(18,80,150,'}};FC.width=FC.height=256;const GRC=document.createElement('canvas');GRC.width=GRC.height=256;{const gx=GRC.getContext('2d'),gi=gx.createImageData(256,256);for(let j=0;j<256;j++)for(let i=0;i<256;i++){const v=128+(hh(i,j,77)-.5)*150,p=(j*256+i)*4;gi.data[p]=gi.data[p+1]=gi.data[p+2]=v;gi.data[p+3]=255}gx.putImageData(gi,0,0)}
function bioW(x,y,o){const wx=x+130*(vn(x/450+11,y/450+3)-.5)*2,wy=y+130*(vn(x/450+37,y/450+19)-.5)*2,gi=Math.floor(wx/BS),gj=Math.floor(wy/BS);o[0]=o[1]=o[2]=o[3]=1e9;
 for(let i=-1;i<2;i++)for(let j=-1;j<2;j++){const s=seed(gi+i,gj+j),d=Math.hypot(wx-s[0],wy-s[1]);if(d<o[s[2]])o[s[2]]=d}
 const d0=Math.hypot(wx-120,wy-120)*.55;if(d0<o[1])o[1]=d0;const m=Math.min(o[0],o[1],o[2],o[3]);let t=0;for(let k=0;k<4;k++){o[k]=Math.exp(-(o[k]-m)/100);t+=o[k]}for(let k=0;k<4;k++)o[k]/=t}
const OFF=307200;
function gen(N,steps,wts,seed){const F=new Float32Array(N*N);
 steps.forEach((s,k)=>{const n=N/s,a=new Float32Array(n*n),R=[];for(let j=0;j<n;j++)for(let i=0;i<n;i++)a[j*n+i]=hh(i,j,seed+k*7);
  for(let j=0;j<n;j++){const r=new Float32Array(N);for(let x=0;x<N;x++){const fx=x/s,i=fx|0,u=fx-i,u2=u*u*(3-2*u),p=a[j*n+i],q=a[j*n+(i+1)%n];r[x]=p+(q-p)*u2}R.push(r)}
  for(let y=0;y<N;y++){const fy=y/s,j=fy|0,w=fy-j,w2=w*w*(3-2*w),r0=R[j],r1=R[(j+1)%n],o=y*N,wk=wts[k];for(let x=0;x<N;x++)F[o+x]+=wk*(r0[x]+(r1[x]-r0[x])*w2)}});
 const T=new Uint8Array(N*N);for(let i=0;i<T.length;i++)T[i]=F[i]*255;return T}
const NA=gen(512,[2,4,8],[.5,.3,.2],11),NB=gen(1024,[8,16,32],[.4,.35,.25],23),NC=gen(1024,[16,32,64],[.4,.35,.25],37);
const nA=(x,y)=>NA[((((y+OFF)/3)>>0)&511)*512+((((x+OFF)/3)>>0)&511)]/255,nB=(x,y)=>NB[((((y+OFF)/3)>>0)&1023)*1024+((((x+OFF)/3)>>0)&1023)]/255,nC=(x,y)=>NC[((((y+OFF)/3)>>0)&1023)*1024+((((x+OFF)/3)>>0)&1023)]/255;
function bt(b,x,y,o){const a=nA(x,y),m=nB(x,y),k=nC(x,y);let r,g,bl,l;
 if(b==1){l=(k-.5)*30+(m-.5)*18+(a-.5)*14;r=110;g=74;bl=134;const bm=nB(x+702,y+300)*.55+nC(x+132,y+978)*.45;if(bm>.55){const q=Math.min(1,(bm-.55)*8)*.62;r+=(62-r)*q;g+=(100-g)*q;bl+=(172-bl)*q}
  const rd=Math.abs(nC(x/3+399,y/3+120)-.5);if(rd<.012&&nB(x+51,y+900)>.5){const q=(1-rd/.012)*.7;r+=(52-r)*q;g+=(30-g)*q;bl+=(78-bl)*q}if(a>.92)l-=20;else if(a<.06)l+=14;o[0]=r+l;o[1]=g+l*.9;o[2]=bl+l}
 else if(b==0){l=(nA(x/12,y)-.5)*20+(k-.5)*16+(m-.5)*10+(((Math.floor(nC(x+100,y+50)*7)*37)%7)-3)*2.6;if(m>.8)l-=12;if(a>.97)l-=18;o[0]=127+l;o[1]=137+l;o[2]=150+l*1.05}
 else if(b==2){l=(m-.5)*10+(a-.5)*5;r=228;g=236;bl=240;const bd=Math.sin((x+y*.6)/90+nC(x/6+10,y/6)*4);if(bd>.955)l+=(bd-.955)/.045*9;
  const mt=nC(x+501,y+699);if(mt>.64){const q=Math.min(1,(mt-.64)*6)*.5;r+=(196-r)*q;g+=(236-g)*q;bl+=(220-bl)*q}o[0]=r+l;o[1]=g+l;o[2]=bl+l}
 else{l=(a-.5)*26+(m-.5)*18;r=75;g=72;bl=82;const sn=k*.75+m*.3;
  if(sn>.68){const q=Math.min(1,(sn-.68)/.07);r+=(238-r)*q;g+=(245-g)*q;bl+=(252-bl)*q;l=l*(1-.75*q)+(a>.96?12:0)}
  else{if(sn>.655){const q=(sn-.655)/.025*.5;r+=(190-r)*q;g+=(208-g)*q;bl+=(228-bl)*q}const pt=Math.abs(nC(x/4+3000,y/4+1200)-.5);if(pt<.03){const q=(1-pt/.03)*.7;r+=(122-r)*q;g+=(120-g)*q;bl+=(110-bl)*q}}o[0]=r+l;o[1]=g+l;o[2]=bl+l}}
const GS=24,GN=34,SW=new Float32Array(GN*GN*4),SZ=new Float32Array(GN*GN),PW=[0,0,0,0],T1=[0,0,0],T2=[0,0,0];
function dom(q){let b=0;for(let k=1;k<4;k++)if(SW[q+k]>SW[q+b])b=k;return b}
function groundPixels(X,Y,d){
 for(let j=0;j<GN;j++)for(let i=0;i<GN;i++){const x=X+(i-1)*GS,y=Y+(j-1)*GS;bioW(x,y,PW);const q=(j*GN+i)*4;SW[q]=PW[0];SW[q+1]=PW[1];SW[q+2]=PW[2];SW[q+3]=PW[3];SZ[j*GN+i]=Math.hypot(x-120,y-120)>1100?Math.max(0,Math.min(1,(vn(x/520+33,y/520+7)-TER.sp.dzTh+.04)/.08)):0}
 for(let cj=0;cj<32;cj++)for(let ci=0;ci<32;ci++){const i00=(cj+1)*GN+ci+1,q00=i00*4,q10=q00+4,q01=q00+GN*4,q11=q01+4,b0=dom(q00),
  fast=dom(q10)==b0&&dom(q01)==b0&&dom(q11)==b0&&SW[q00+b0]>.97&&SW[q10+b0]>.97&&SW[q01+b0]>.97&&SW[q11+b0]>.97,zc=SZ[i00]||SZ[i00+1]||SZ[i00+GN]||SZ[i00+GN+1];
  for(let py=0;py<8;py++)for(let px=0;px<8;px++){const u=(px+.5)/8,v=(py+.5)/8,wx=X+ci*GS+px*3+1,wy=Y+cj*GS+py*3+1;let r,g,b,edge=0;
   if(fast){bt(b0,wx,wy,T1);r=T1[0];g=T1[1];b=T1[2]}
   else{for(let k=0;k<4;k++){const a=SW[q00+k]*(1-u)+SW[q10+k]*u,bb=SW[q01+k]*(1-u)+SW[q11+k]*u;PW[k]=a*(1-v)+bb*v}
    let ia=0,ib=-1;for(let k=1;k<4;k++)if(PW[k]>PW[ia])ia=k;for(let k=0;k<4;k++)if(k!=ia&&(ib<0||PW[k]>PW[ib]))ib=k;
    const s=PW[ia]-PW[ib],e=s+(nB(wx+1234,wy+777)-.5)*1.8*(1-s),t=e<=-.08?0:e>=.08?1:(e+.08)/.16,ts=t*t*(3-2*t);
    bt(ia,wx,wy,T1);if(ts<1){bt(ib,wx,wy,T2);r=T2[0]+(T1[0]-T2[0])*ts;g=T2[1]+(T1[1]-T2[1])*ts;b=T2[2]+(T1[2]-T2[2])*ts}else{r=T1[0];g=T1[1];b=T1[2]}
    if(Math.abs(e)<.03&&(ia==0||ia==2||ib==0||ib==2))edge=1}
   if(zc){const f=SZ[i00]*(1-u)*(1-v)+SZ[i00+1]*u*(1-v)+SZ[i00+GN]*(1-u)*v+SZ[i00+GN+1]*u*v;r+=(50-r)*.6*f;g+=(18-g)*.6*f;b+=(18-b)*.6*f}
   if(edge){r*=.8;g*=.8;b*=.8}
   const p=((cj*8+py)*256+ci*8+px)*4;d[p]=r;d[p+1]=g;d[p+2]=b;d[p+3]=255}}}
function blobR(x,y,w,h,N,E,S_,W,r){const a=!N&&!W?r:0,b=!N&&!E?r:0,d=!S_&&!E?r:0,e=!S_&&!W?r:0;c.beginPath();c.moveTo(x+a,y);c.arcTo(x+w,y,x+w,y+h,b);c.arcTo(x+w,y+h,x,y+h,d);c.arcTo(x,y+h,x,y,e);c.arcTo(x,y,x+w,y,a);c.closePath()}
function detail(b,x,y,r,n){const rx=30+r*70,dots=(col,k,sp,rd)=>{c.fillStyle=col;for(let i=0;i<k;i++){c.beginPath();c.arc(x+(hh(n,i,7)-.5)*sp,y+(hh(n,i,8)-.5)*sp*.55,rd+hh(n,i,9)*rd,0,7);c.fill()}};
 if(b==1){if(r<.45)dots('rgba(35,20,50,.55)',4,90,2.5);else if(r<.75)dots('rgba(150,255,235,.55)',3,70,1.8);else{c.strokeStyle='rgba(60,35,85,.7)';c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+rx*.6,y-rx*.5,x+rx,y+rx*.1);c.stroke()}}
 else if(b==0){const w=90+r*110,h=70+hh(n,3,9)*80;if(r<.5){c.fillStyle=r<.25?'rgba(255,255,255,.07)':'rgba(0,0,0,.07)';rr(x,y,w,h,12);c.fill();c.strokeStyle='rgba(0,0,0,.16)';c.lineWidth=3;c.stroke();c.fillStyle='rgba(0,0,0,.3)';for(const q of [[8,8],[w-8,8],[8,h-8],[w-8,h-8]]){c.beginPath();c.arc(x+q[0],y+q[1],3,0,7);c.fill()}}
  else if(r>.9){c.save();rr(x,y,w,46,6);c.clip();c.fillStyle='rgba(242,201,76,.5)';c.fillRect(x,y,w,46);c.strokeStyle='rgba(20,20,24,.55)';c.lineWidth=10;for(let i=-46;i<w+46;i+=26){c.beginPath();c.moveTo(x+i,y+46);c.lineTo(x+i+46,y);c.stroke()}c.restore()}else dots('rgba(0,0,0,.3)',5,80,1.8)}
 else if(b==2){if(r<.5){c.fillStyle='rgba(255,255,255,.5)';c.beginPath();c.ellipse(x,y,rx*1.4,rx*.18,-.5,0,7);c.fill()}else if(r<.8){c.strokeStyle='rgba(110,170,200,.3)';c.lineWidth=3;c.beginPath();c.moveTo(x,y);c.lineTo(x+rx*1.3,y-rx*.4);c.stroke()}else dots('rgba(120,200,190,.35)',4,80,2)}
 else{if(r<.5)dots('rgba(25,22,28,.5)',6,110,2.2);else if(r<.8){c.fillStyle='rgba(95,92,100,.8)';c.beginPath();c.ellipse(x,y,6+r*8,4+r*5,r*3,0,7);c.fill();c.fillStyle='rgba(160,158,168,.7)';c.beginPath();c.ellipse(x-1,y-2,3+r*3,2+r*2,r*3,0,7);c.fill()}
  else{c.fillStyle='rgba(215,238,250,.85)';c.strokeStyle='rgba(120,160,190,.8)';c.lineWidth=1.5;for(let i=0;i<3;i++){const ax=x+i*7,ah=10+hh(n,i,5)*10;c.beginPath();c.moveTo(ax-3,y);c.lineTo(ax,y-ah);c.lineTo(ax+3,y);c.closePath();c.fill();c.stroke()}}}}
function paint(ck,cx,cy){const sv=c,cvs=document.createElement('canvas');cvs.width=cvs.height=PS;const g=cvs.getContext('2d'),fx=FC.getContext('2d'),im=fx.createImageData(256,256),X=cx*768,Y=cy*768;
 groundPixels(X,Y,im.data);fx.putImageData(im,0,0);g.imageSmoothingEnabled=true;g.drawImage(FC,0,0,256,256,0,0,PS,PS);
 g.globalAlpha=.5;g.globalCompositeOperation='overlay';g.fillStyle=g.createPattern(GRC,'repeat');g.fillRect(0,0,PS,PS);g.globalAlpha=1;g.globalCompositeOperation='source-over';
 c=g;c.save();c.scale(PF,PF);c.translate(-X,-Y);
 for(let n=0;n<40;n++){const px=X+hh(cx,cy,400+n)*768,py=Y+hh(cx,cy,440+n)*768;bioF(px,py);detail(hh(cx,cy,520+n)<BF.w?BF.b1:BF.b2,px,py,hh(cx,cy,480+n),n)}
 
const at=(tx,ty)=>tileAt(tx,ty),dpa=new Uint8Array(256),T0=cx*16,U0=cy*16;
 for(const L of [22,21,20]){const list=[];for(let ty=U0-1;ty<=U0+16;ty++)for(let tx=T0-1;tx<=T0+16;tx++)if(at(tx,ty)==L)list.push([tx,ty,at(tx,ty-1)==L,at(tx+1,ty)==L,at(tx,ty+1)==L,at(tx-1,ty)==L]);if(!list.length)continue;const C=LQ[L];
  c.fillStyle=C.bank;for(const q of list){blobR(q[0]*48-6,q[1]*48-6,60,60,q[2],q[3],q[4],q[5],22);c.fill()}
  c.fillStyle=C.wall;for(const q of list){blobR(q[0]*48,q[1]*48,48,48,q[2],q[3],q[4],q[5],16);c.fill()}
  c.fillStyle=C.surf;for(const q of list){const x=q[0]*48,y=q[1]*48,x0=q[5]?x-1:x+3,y0=q[2]?y-1:y+9,x1=q[3]?x+49:x+45,y1=q[4]?y+49:y+45;blobR(x0,y0,x1-x0,y1-y0,q[2],q[3],q[4],q[5],14);c.fill()}
  for(const q of list){const x=q[0]*48,y=q[1]*48;let n8=0;for(let a=-1;a<2;a++)for(let b=-1;b<2;b++)if((a||b)&&at(q[0]+b,q[1]+a)==L)n8++;
   if(q[0]>=T0&&q[0]<T0+16&&q[1]>=U0&&q[1]<U0+16)dpa[(q[1]-U0)*16+q[0]-T0]=n8;
   if(n8>=3){const gr=c.createRadialGradient(x+24,y+28,2,x+24,y+28,40);gr.addColorStop(0,C.deep+(n8>=7?.7:n8>=5?.5:.3)+')');gr.addColorStop(1,C.deep+'0)');c.fillStyle=gr;c.fillRect(x-20,y-16,88,88)}
   if(!q[2]){const gr=c.createLinearGradient(0,y+9,0,y+25);gr.addColorStop(0,'rgba(0,0,0,.42)');gr.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gr;c.fillRect(x+3,y+9,42,16)}
   if(!q[4]){c.fillStyle='rgba(255,255,255,.28)';c.fillRect(x+6,y+42,36,3)}}}
 c.restore();c=sv;ck.cv=cvs;ck.dp=dpa;PL.push(ck);if(PL.length>32){const e=PL.shift();e.cv=null}}
function tileFx(id,x,y,tm,tx,ty,dep){
 if(id==3){c.fillStyle='#2d333b';c.fillRect(x+6,y+8,36,32);c.fillStyle='#8c97a3';for(let i=0;i<5;i++)c.fillRect(x+9,y+11+i*6,30,3)}
 else if(id==5){c.fillStyle='rgba(255,255,255,.35)';poly([[x+10,y+36],[x+24,y+8],[x+29,y+8],[x+15,y+36]]);c.fill()}
 else if(id==6){c.fillStyle='#4caf68';for(let i=0;i<3;i++){c.beginPath();c.ellipse(x+12+i*12,y+30-(i&1)*6,7,12,.3*(i-1),0,7);c.fill()}}
 else if(id==7){c.fillStyle='rgba(120,255,230,'+(.35+.2*Math.sin(tm*2+tx))+')';c.beginPath();c.arc(x+24,y+26,16,0,7);c.fill();c.fillStyle='#d9fff6';c.fillRect(x+22,y+26,4,10);c.fillStyle='#8ff0d8';c.beginPath();c.arc(x+24,y+24,8,Math.PI,0);c.fill()}
 else if(id==9){c.fillStyle='rgba(255,255,255,.7)';c.fillRect(x+8,y+12,4,3);c.fillRect(x+30,y+30,5,3)}
 else if(id==12){const f=hh(tx,ty,3)<.5?1:-1,h=8+hh(tx,ty,4)*20;c.strokeStyle='#3d2650';c.lineWidth=3;c.beginPath();c.moveTo(f>0?x+4:x+44,y+40);c.quadraticCurveTo(x+24,y+h,f>0?x+44:x+4,y+34);c.stroke()}
 else{const q=(((tm*.5+tx*.31+ty*.17)%1)+1)%1;
  if(id==20){if(dep>=5){c.fillStyle='rgba(255,215,90,'+(.2+.15*Math.sin(tm*2.4+tx*1.3+ty))+')';c.beginPath();c.arc(x+24,y+30,16,0,7);c.fill()}if(((tx*7+ty*13)&3)==0){c.fillStyle='rgba(255,230,120,'+(1-q)+')';c.beginPath();c.arc(x+16+(ty&1)*14,y+38-q*18,2+q*3,0,7);c.fill()}}
  else if(id==21){if(((tx*5+ty*11)&1)==0){c.strokeStyle='rgba(225,255,195,'+(1-q)*.9+')';c.lineWidth=2;c.beginPath();c.arc(x+14+(ty&1)*16,y+38-q*20,2+q*4,0,7);c.stroke()}}
  else if(id==22){c.strokeStyle='rgba(235,250,255,'+(.8-q*.7)+')';c.lineWidth=2;c.beginPath();c.ellipse(x+24,y+30,6+q*14,3+q*6,0,0,7);c.stroke()}}}
const DEC=[mush,0,cry,spk,rock,crate,chest,pod,core,tree,mush,ghostObj,lcry,table,consol,engine,reactor,termi,vrock];
/* ---------- juego ---------- */
let SV={coins:0,best:0,bk:0,hats:[1,1,0,0,0,0,0],sk:[1]},cfg={vol:60,num:1,shk:1};
try{const j=JSON.parse(localStorage.getItem('among_survivor_v1')||'{}');if(j.sv)Object.assign(SV,j.sv);if(j.cfg)Object.assign(cfg,j.cfg)}catch(e){}if(cfg.vol==35)cfg.vol=60;look.c=cfg.lc??look.c;look.h=cfg.lh??look.h;look.s=cfg.ls||0;if(!SV.hats[look.h])look.h=1;if(!SV.sk[look.s])look.s=0;
const save=()=>{try{localStorage.setItem('among_survivor_v1',JSON.stringify({sv:SV,cfg}))}catch(e){}},HC=[0,0,80,80,120,60,150],BR={4:30,5:22},WK={blaster:'BL',drones:'DR',emp:'EMP',tesla:'TES',rail:'RIE'},
EV={blaster:['Ráfaga múltiple','5 disparos que perforan.'],drones:['Enjambre','+3 drones y más daño.'],emp:['Pulso doble','Onda más grande y rápida.'],tesla:['Tormenta Tesla','+4 saltos y más daño.'],rail:['Riel cuádruple','Dispara en 4 direcciones.']},
WX=[{k:'tesla',m:'Lluvia ácida: ¡Arco Tesla +50%!',n:'Lluvia ácida',c:'r'},{k:'rail',m:'Tormenta de polvo: ¡Cañón de riel +50%!',n:'Tormenta de polvo',c:'s'},{k:'drones',m:'Niebla de esporas: ¡Drones +50%!',n:'Niebla de esporas',c:'f'}];
Object.assign(PD,{regen:['Regeneración','Recupera 1.2 PV por segundo.'],haste:['Cadencia','-8% de enfriamiento en las armas.'],wis:['Sabiduría','+15% de experiencia.']});
Object.assign(WD,{blade:['Cuchilla de energía','Cuerpo a cuerpo: tajo en arco frente a ti.'],dash:['Impulso propulsor','Embestida: cruzas hacia el enemigo dañando todo el camino.'],flame:['Lanzallamas','Abanico: chorro de fuego corto que perfora.'],turret:['Torreta autónoma','Torreta: deja un cañón que dispara solo.'],spin:['Giro de cuchillas','Giro: cuchillas a tu alrededor varias veces.'],trail:['Rastro de ácido','Rastro: charcos que dañan a quien los pise.']});
Object.assign(WK,{blade:'CUC',dash:'IMP',flame:'LLA',turret:'TOR',spin:'GIR',trail:'RAS'});
Object.assign(EV,{blade:['Tajo circular','Golpea en 360° con más daño.'],dash:['Salto cuántico','Más distancia y daño, menos recarga.'],flame:['Llamarada','+4 llamas, más daño y perforación.'],turret:['Torreta doble','Más torretas y disparo más rápido.'],spin:['Torbellino','+2 vueltas, más radio y daño.'],trail:['Ácido concentrado','Charcos más grandes y dañinos.']});
const NW=['blade','dash','flame','turret','spin','trail'],CL=[{n:'Tirador',c:'Proyectil',w:'blaster',f:P=>{P.spd*=1.05}},{n:'Guerrero',c:'Cuerpo a cuerpo',w:'blade',f:P=>{P.mx+=25;P.hp+=25}},{n:'Piloto',c:'Embestida',w:'dash',f:P=>{P.spd*=1.15}},{n:'Pirómano',c:'Abanico',w:'flame',f:P=>{P.dm+=.1}},{n:'Ingeniero',c:'Torreta',w:'turret',f:P=>{P.mag+=40}},{n:'Centinela',c:'Órbita',w:'drones',f:P=>{P.mx+=20;P.hp+=20}},{n:'Duelista',c:'Giro',w:'spin',f:P=>{P.dm+=.05;P.spd*=1.05}},{n:'Químico',c:'Rastro',w:'trail',f:P=>{P.spd*=1.08}}];
look.k=Math.min(cfg.cls||0,CL.length-1);
function lunge(t,d){const P=S.P,a=Math.atan2(t.y-P.y,t.x-P.x);P.ax=Math.cos(a);P.ay=Math.sin(a);P.at=P.atm=d||.22;return a}
function dot(e,v,wk){if(e.dead)return;e.hp-=v*S.P.dm*(e.wk==wk?1.5:1);e.fl=Math.max(e.fl,.05);if(e.hp<=0)kill(e)}
/* ---------- impostores (fábrica determinista por id) ---------- */
function einf(id,ty,gd){const T=ET[ty];return{spr:ty==0&&hh(id,1,11)<.4?'b':'r',col:gd?'#ffd23f':T.col||GC[hh(id,2,12)*5|0],ph:hh(id,3,13)*6,wk:T.wk||NW[hh(id,4,14)*6|0]}}
function mkE(id,ty,x,y,hm,gd){const T=ET[ty],q=einf(id,ty,gd);return{id,x,y,ty,hp:T.hp*hm,mh:T.hp*hm,sp:T.sp*(.9+hh(id,5,15)*.2)*(gd?1.1:1),r:T.r,s:T.s,dm:T.dm,col:q.col,gd,wk:q.wk,hat:T.hat,v:T.v,kn:T.kn,spr:q.spr,fi:q.spr=='b'?0:null,rc:SP.b.tl*54*T.s/SP.b.ch,at:1+hh(id,6,16)*2,ds:0,ux:0,uy:0,kx:0,ky:0,fl:0,dt:0,eid:0,f:1,ph:q.ph}}
function newGame(){S={t:0,P:{x:120,y:120,hp:100,mx:100,spd:150,xp:0,lv:1,need:5,mag:70,dm:1,inv:0,f:1,wt:0,fl:0,pz:0,lz:0,mv:0,at:0,atm:.2,ax:1,ay:0},en:[],bl:[],gm:[],pt:[],fx:[],dr:[],ac:[],kn:[],pk:[],dn:[],tu:[],tz:[],tzc:0,ds:null,st:[],cp:[],gh:[],gt:0,gh2:0,cap:260,eid:0,da:0,
 W:{blaster:0,drones:0,emp:0,tesla:0,rail:0,blade:0,dash:0,flame:0,turret:0,spin:0,trail:0},cd:{blaster:0,emp:1,tesla:.5,rail:1,blade:0,dash:2,flame:0,turret:0,spin:1,trail:0},pas:{boots:0,core:0,mag:0,armor:0,regen:0,haste:0,wis:0},evo:{},kills:0,coins:0,sp:0,hd:30,bs:0,msg:'',mt:0,id:0,shake:0,wx:null,wt:60,sd:0,
 brk:new Set(),bh:new Map(),us:new Set(),ip:new Map()};const kc=CL[look.k||0];S.W[kc.w]=1;kc.f(S.P);st='play';ui.hidden=true}
function spawn(ty,ang,pos){const P=S.P;if(!pos&&ang==null&&Math.random()<.65)pos=pickVent();const a=ang==null?Math.random()*6.283:ang,R=Math.hypot(VW,VH)/2+70,gd=ty!=3&&ty!=2&&Math.random()<.02,hm=(1+S.t/160)*(gd?2.5:1);
 S.en.push(mkE(++S.eid,ty,pos?pos.x:P.x+Math.cos(a)*R,pos?pos.y:P.y+Math.sin(a)*R,hm,gd))}
function kill(e){if(e.dead)return;e.dead=1;S.kills++;S.cp.push({x:e.x,y:e.y,col:e.col,s:e.s,f:e.f,t:0});if(S.cp.length>30)S.cp.shift();if(S.gm.length>200){for(const q of S.gm.splice(0,25))S.P.xp+=q.v}S.gm.push({x:e.x,y:e.y,v:e.v*(e.gd?8:1)});
 const pk=(n,v)=>{for(let i=0;i<n;i++)S.pk.push({x:e.x+(Math.random()-.5)*50,y:e.y+(Math.random()-.5)*30,k:'c',v})};
 if(e.gd)pk(6,3);else if(Math.random()<.06)pk(1,1);if(e.ty==3){S.P.hp=S.P.mx;pk(10,3)}
 if(S.pt.length<160)for(let i=0;i<3;i++)S.pt.push({x:e.x,y:e.y-15,vx:(Math.random()-.5)*240,vy:(Math.random()-.5)*240,l:.45})}
function hurt(e,d,kx,ky,wk){if(e.dead)return;const wz=wk&&e.wk==wk,v=d*S.P.dm*(wz?1.5:1)*(S.wx&&S.wx.k==wk?1.5:1);e.hp-=v;e.fl=.08;e.kx+=kx;e.ky+=ky;
 if(cfg.num&&S.dn.length<28)S.dn.push({x:e.x+(Math.random()-.5)*14,y:e.y-e.s*42,v:Math.round(v),l:.7,w:wz});if(e.hp<=0)kill(e)}
function drop(x,y,t){const g=(v,n)=>{for(let i=0;i<n;i++)S.gm.push({x:x+(Math.random()-.5)*30,y:y+(Math.random()-.5)*20,v})},r=Math.random(),p=(k,v)=>S.pk.push({x:x+(Math.random()-.5)*40,y:y+(Math.random()-.5)*24,k,v});
 if(t==9)for(let i=0;i<6;i++)p('c',3);else if(t==5){g(3,1+(r<.5));if(r<.45)p('c',2);if(r>.85)p('h',25)}else g(2,1)}
function smash(x,y,r,d){const t0=Math.floor((x-r)/TS)-1,t1=Math.floor((x+r)/TS)+1,u0=Math.floor((y-r)/TS)-1,u1=Math.floor((y+r)/TS)+1;
 for(let ty=u0;ty<=u1;ty++)for(let tx=t0;tx<=t1;tx++){const id=tileAt(tx,ty),hp=BRK[id];if(!hp)continue;const key=tx+','+ty;if(S.brk.has(key))continue;
  if(Math.hypot(tx*TS+24-x,ty*TS+24-y)<r+24){const h=(S.bh.has(key)?S.bh.get(key):hp)-d;S.bh.set(key,h);if(h<=0){S.brk.add(key);drop(tx*TS+24,ty*TS+40,id==38?5:4)}}}}
function push(e,r){const t0=Math.floor((e.x-r)/TS),t1=Math.floor((e.x+r)/TS),u0=Math.floor((e.y-r)/TS),u1=Math.floor((e.y+r)/TS);
 for(let ty=u0;ty<=u1;ty++)for(let tx=t0;tx<=t1;tx++){const id=tileAt(tx,ty);if(id<30||(BRK[id]&&S.brk.has(tx+','+ty)))continue;
  const x0=tx*TS,y0=ty*TS,px=Math.max(x0,Math.min(e.x,x0+TS)),py=Math.max(y0,Math.min(e.y,y0+TS)),dx=e.x-px,dy=e.y-py,d2=dx*dx+dy*dy;
  if(d2<r*r){if(d2>1e-4){const d=Math.sqrt(d2);e.x=px+dx/d*r;e.y=py+dy/d*r}else{const a=e.x-x0,b=x0+TS-e.x,u=e.y-y0,v=y0+TS-e.y,m=Math.min(a,b,u,v);if(m==a)e.x=x0-r;else if(m==b)e.x=x0+TS+r;else if(m==u)e.y=y0-r;else e.y=y0+TS+r}}}}
const near=(x,y,rg,ex)=>{let b=null,bd=rg*rg;for(const e of S.en){if(e.dead||(ex&&ex.includes(e)))continue;const d=(e.x-x)**2+(e.y-y)**2;if(d<bd){bd=d;b=e}}return b};
const segd=(ax,ay,bx,by,px,py)=>{const dx=bx-ax,dy=by-ay,t=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/(dx*dx+dy*dy)));return Math.hypot(ax+dx*t-px,ay+dy*t-py)};
function update(dt){
 const P=S.P,w=S.W,cd=S.cd,ev=S.evo,pas=S.pas,hs=1-.08*pas.haste;let en=S.en;
 S.t+=dt;S.mt-=dt;S.shake-=dt;P.inv-=dt;P.fl-=dt;P.pz-=dt;P.lz-=dt;P.at-=dt;
 if(S.t>=600)return end(1);
 S.wt-=dt;if(S.wx&&(S.wx.l-=dt)<=0)S.wx=null;
 if(S.wt<=0){S.wt=100;S.wx={...WX[Math.random()*3|0],l:40};S.msg=S.wx.m;S.mt=3}
 if(pas.regen)P.hp=Math.min(P.mx,P.hp+pas.regen*1.2*dt);
 let mx=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0),my=(keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0);
 if(joy&&Math.hypot(joy.x,joy.y)>.15){mx=joy.x;my=joy.y}
 const m=Math.hypot(mx,my);if(m>1){mx/=m;my/=m}
 let hz=0;const pcx=Math.floor(P.x/CS),pcy=Math.floor(P.y/CS);S.dz=dzT(P.x,P.y);
 for(let i=-1;i<2;i++)for(let j=-1;j<2;j++)for(const o of cell(pcx+i,pcy+j)){if(S.brk.has(o.id)||S.us.has(o.id))continue;const d=Math.hypot(P.x-o.x,P.y-o.y);
  if(o.t==1){const a=(P.x-o.x)/o.rx,b=(P.y-o.y)/o.ry;if(a*a+b*b<1)hz|=1<<(o.k||0)}
  else if(o.t==6&&d<75){const p=(S.ip.get(o.id)||0)+dt/3;S.ip.set(o.id,p);if(p>=1){S.us.add(o.id);P.xp+=P.need;drop(o.x,o.y,9);S.msg='¡Caja de armas abierta!';S.mt=1.8}}
  else if(o.t==7&&d<65){const r=S.ip.has(o.id)?S.ip.get(o.id):60,h=Math.min(r,20*dt,P.mx-P.hp);if(h>0){P.hp+=h;S.ip.set(o.id,r-h);if(r-h<.5)S.us.add(o.id)}}
  else if(o.t==8&&d<45){S.us.add(o.id);P.dm+=.1;S.msg='Núcleo del reactor: +10% de daño';S.mt=2}
  else if(o.t==11&&d<85){let p=S.ip.get(o.id)||0,busy=0;for(const e of en)if(!e.dead&&(e.x-o.x)**2+(e.y-o.y)**2<22500){busy=1;break}
   p=busy?Math.max(0,p-dt*.6):p+dt/3.5;S.ip.set(o.id,p);
   if(p>=1){S.us.add(o.id);if(S.gh.length<4){S.gh.push({cd:1,x:o.x,y:o.y-24});S.msg='¡Fantasma rescatado! Ahora te ayuda.'}else{P.xp+=P.need*.5;drop(o.x,o.y,9);S.msg='¡Fantasma rescatado! (+experiencia)'}S.mt=2.2}}}
 {const T0=tid(P.x,P.y);hz=T0==20?2:T0==21?1:T0==22?4:0}if(hz&1){P.hp-=7*dt;P.pz=.2}if(hz&2){P.hp-=16*dt;P.lz=.2}
 const sp=P.spd*(hz&1?.6:1)*(hz&4?.55:1);P.x+=mx*sp*dt;P.y+=my*sp*dt;push(P,10);if(mx)P.f=mx>0?1:-1;P.mv=m>.05;if(P.mv)P.wt+=dt*12;
 S.sp=Math.min(4,S.sp+dt*(2+S.t*.045)*(S.dz?1.6:1));
 while(S.sp>=1&&en.length<(S.cap|0)){S.sp--;const r=Math.random();let ty=0,a=0;for(const z of [[2,80,.06],[9,130,.03],[10,110,.04],[8,90,.04],[7,45,.07],[6,100,.04],[5,60,.06],[4,30,.1],[1,15,.2]])if(S.t>z[1]&&r<(a+=z[2])){ty=z[0];break}
  if(ty==4&&Math.random()>.65)ty=0;spawn(ty)}
 S.hd-=dt;if(S.hd<=0){S.hd=45;const n=22+(S.t/8|0);for(let i=0;i<n;i++)spawn(i%11==3?4:i%5?0:1,i/n*6.283);S.msg='¡Oleada de impostores!';S.mt=2.2}
 if(S.t>=120*(S.bs+1)&&S.bs<4){S.bs++;spawn(3);S.msg='¡Llegó el Gran Impostor!';S.mt=2.5}
 const R=Math.hypot(VW,VH)/2+70,kk=1-Math.min(1,dt*7),g=new Map();
 for(const e of en){const dx=P.x-e.x,dy=P.y-e.y,d=Math.hypot(dx,dy)||1;
  if(d>R+250){const a=Math.random()*6.283;e.x=P.x+Math.cos(a)*R;e.y=P.y+Math.sin(a)*R}
  e.f=dx>0?1:-1;e.at-=dt;const ax=dx/d,ay=dy/d;let v=e.sp,ux=ax,uy=ay;
  if(e.ty==1){if(e.ds>0){e.ds-=dt;v*=3.4;ux=e.ux;uy=e.uy}else if(e.at<=0&&d<300){e.ds=.45;e.at=2.4+Math.random();e.ux=ax;e.uy=ay}}
  else if(e.ty==0&&e.spr=='b'){if(e.ak>0){e.ak-=dt;v=0;ux=0;uy=0;if(e.ak>.8){uy=Math.sign(P.y-e.y);v=70}const fr=1+Math.min(14,(1-e.ak/1.3)*15|0);e.fi=e.ak>0?fr:0;
   if(!e.hit&&SP.b.sk.includes(fr)){e.hit=1;const rx=(P.x-e.x)*e.f;if(rx>0&&rx<e.rc+14&&Math.abs(P.y-e.y)<30&&P.inv<=0){P.hp-=12;P.inv=.5;P.fl=.2;S.shake=.25}}}
   else{e.fi=0;if(d<115&&e.at<=0){e.ak=1.3;e.hit=0;e.at=2.5+Math.random()*1.5}}}
  else if(e.ty==7){if(e.fz>0){e.fz-=dt;v=0;if(e.fz<=0){if(d<90&&P.inv<=0){P.hp-=18;P.inv=.5;P.fl=.2;S.shake=.35}S.fx.push({k:'x',x:e.x,y:e.y,r:90,l:.3});kill(e)}}else if(d<80)e.fz=.9}
  else if(e.ty>3){const R0=[0,0,0,0,300,230,260,0,380,320,340][e.ty];if(d<R0-40){ux=-ax;uy=-ay;v*=.7}else if(d<R0+30)v=0;
   if(e.aim>0)v=0;if(e.ty==8&&e.aim>0){e.aim-=dt;if(e.aim>.3)e.aa=Math.atan2(P.y-12-e.y,P.x-e.x);if(e.aim<=0){const ex=e.x+Math.cos(e.aa)*800,ey=e.y-16+Math.sin(e.aa)*800;S.fx.push({k:'z',x1:e.x,y1:e.y-16,x2:ex,y2:ey,l:.25,c:'#ff4d4d',j:0});if(segd(e.x,e.y-16,ex,ey,P.x,P.y-12)<16&&P.inv<=0){P.hp-=14;P.inv=.4;P.fl=.2;S.shake=.2}}}
   if(e.at<=0&&d<540){e.at=[0,0,0,0,2.6,1.9,3.4,0,3.4,7,4.5][e.ty]+Math.random()*.6;
    if(e.ty==4)S.ac.push({tx:P.x+(Math.random()-.5)*40,ty:P.y+(Math.random()-.5)*40,x:e.x,y:e.y,t:0,l:3.6});
    else if(e.ty==5)S.kn.push({x:e.x,y:e.y-20,vx:ax*270,vy:(P.y-12-e.y+20)/d*270,l:2.2,a:0});
    else if(e.ty==8){e.aim=1.2;e.aa=Math.atan2(P.y-12-e.y,P.x-e.x)}
    else if(e.ty==9){for(let i=0;i<3&&en.length<240;i++)spawn(0,0,{x:e.x+(Math.random()-.5)*70,y:e.y+(Math.random()-.5)*50});S.fx.push({k:'h',x:e.x,y:e.y,r:0,m:120,c:1})}
    else if(e.ty==10){for(let i=0;i<3;i++)S.st.push({x:P.x+(Math.random()-.5)*150,y:P.y+(Math.random()-.5)*110,t:0,T:1.2})}
    else{S.fx.push({k:'h',x:e.x,y:e.y,r:0,m:170});for(const o of en)if(!o.dead&&(o.x-e.x)**2+(o.y-e.y)**2<28900)o.hp=Math.min(o.mh,o.hp+o.mh*.25)}}}
  else if(e.ty==3&&e.at<=0){e.at=4;for(let i=0;i<3;i++)S.ac.push({tx:P.x+(Math.random()-.5)*170,ty:P.y+(Math.random()-.5)*170,x:e.x,y:e.y,t:0,l:3.6})}
  {const id=tid(e.x,e.y);if(id==22)v*=.6;else if(id==21){v*=.7;e.hp-=7*dt;if(e.hp<=0)kill(e)}else if(id==20){e.hp-=14*dt;if(e.hp<=0)kill(e)}}
  if(solidAt(e.x+ux*30,e.y+uy*30)){const t1=ux*.866-uy*.5,t2=ux*.5+uy*.866;if(!solidAt(e.x+t1*30,e.y+t2*30)){ux=t1;uy=t2}else{const t3=ux*.866+uy*.5,t4=-ux*.5+uy*.866;ux=t3;uy=t4}}
  e.x+=(ux*v+e.kx)*dt;e.y+=(uy*v+e.ky)*dt;push(e,e.r*.7);e.kx*=kk;e.ky*=kk;e.fl-=dt;e.dt-=dt;
  if(d<e.r+12&&P.inv<=0&&!e.dead){P.hp-=e.dm;P.inv=.6;P.fl=.2;S.shake=.2}
  const k=Math.floor(e.x/40)*65536+Math.floor(e.y/40);(g.get(k)||g.set(k,[]).get(k)).push(e)}
 S.fr=(S.fr||0)^1;for(let ei=S.fr;ei<en.length;ei+=2){const e=en[ei],gx=Math.floor(e.x/40),gy=Math.floor(e.y/40);let n=0;
  for(let i=-1;i<2;i++)for(let j=-1;j<2;j++){const a=g.get((gx+i)*65536+gy+j);if(a)for(const o of a){if(o===e)continue;if(++n>12)break;const dx=e.x-o.x,dy=e.y-o.y,d2=dx*dx+dy*dy,q=(e.r+o.r)*.75;if(d2<q*q&&d2>1e-4){const d=Math.sqrt(d2);e.x+=dx/d*(q-d)*.5;e.y+=dy/d*(q-d)*.5}}}}
 for(const k in cd)cd[k]-=dt;
 if(w.blaster&&cd.blaster<=0){const t=near(P.x,P.y,520);if(t){cd.blaster=hs*Math.max(.22,.75-.1*w.blaster);lunge(t,.14);const n=ev.blaster?5:w.blaster>=5?3:w.blaster>=3?2:1,a0=Math.atan2(t.y-P.y,t.x-P.x);
  for(let i=0;i<n;i++){const a=a0+(i-(n-1)/2)*.16;S.bl.push({x:P.x,y:P.y,vx:Math.cos(a)*560,vy:Math.sin(a)*560,l:1.1,d:9+3*w.blaster,pi:ev.blaster?2:w.blaster>=4?1:0,h:[]})}}}
 if(w.emp&&cd.emp<=0){cd.emp=hs*Math.max(1.6,3.8-.4*w.emp)*(ev.emp?.7:1);P.at=P.atm=.25;P.ax=P.ay=0;const mr=(110+28*w.emp)*(ev.emp?1.4:1);S.fx.push({k:'e',x:P.x,y:P.y,r:0,m:mr,id:++S.id,d:(12+4*w.emp)*(ev.emp?1.5:1)});smash(P.x,P.y,mr*.8,25)}
 if(w.tesla&&cd.tesla<=0){const t=near(P.x,P.y,380);if(t){cd.tesla=hs*Math.max(.5,1.5-.2*w.tesla);lunge(t,.2);const pts=[[P.x,P.y]],hit=[];let cur=t;
  for(let i=0;i<2+w.tesla+(ev.tesla?4:0)&&cur;i++){hit.push(cur);pts.push([cur.x,cur.y]);hurt(cur,(13+5*w.tesla)*(ev.tesla?1.5:1),0,0,'tesla');cur=near(cur.x,cur.y,170,hit)}S.fx.push({k:'a',p:pts,l:.2})}}
 if(w.rail&&cd.rail<=0){const t=near(P.x,P.y,600);if(t){cd.rail=hs*Math.max(.9,2.6-.35*w.rail);lunge(t,.28);const a0=Math.atan2(t.y-P.y,t.x-P.x),n=ev.rail?4:w.rail>=4?2:1;
  for(let i=0;i<n;i++){const a=a0+i*(ev.rail?Math.PI/2:Math.PI),ex=P.x+Math.cos(a)*700,ey=P.y+Math.sin(a)*700;
   for(const e of en)if(!e.dead&&segd(P.x,P.y,ex,ey,e.x,e.y)<e.r+14)hurt(e,30+14*w.rail,Math.cos(a)*200,Math.sin(a)*200,'rail');
   for(let j=1;j<8;j++)smash(P.x+Math.cos(a)*j*80,P.y+Math.sin(a)*j*80,20,30);S.fx.push({k:'b',x1:P.x,y1:P.y,x2:ex,y2:ey,l:.28})}}}
 if(w.blade&&cd.blade<=0){const t=near(P.x,P.y,170);if(t){cd.blade=hs*Math.max(.55,1.1-.12*w.blade);const a=lunge(t,.24),rg=95+12*w.blade,dm=(14+7*w.blade)*(ev.blade?1.9:1);
  for(const e of en)if(!e.dead){const dx=e.x-P.x,dy=e.y-P.y,d=Math.hypot(dx,dy)||1;if(d<rg+e.r){let da=Math.abs(Math.atan2(dy,dx)-a);da=Math.min(da,6.283-da);if(ev.blade||da<.6)hurt(e,dm,dx/d*220,dy/d*220,'blade')}}
  smash(P.x+Math.cos(a)*50,P.y+Math.sin(a)*50,rg*.6,25);S.fx.push({k:'s',x:P.x,y:P.y-18,a,r:rg,arc:ev.blade?6.283:1.2,l:.2})}}
 if(w.dash&&cd.dash<=0){const t=near(P.x,P.y,360);if(t){cd.dash=hs*Math.max(1.8,4-.4*w.dash)*(ev.dash?.7:1);const a=lunge(t,.3);S.ds={a,t:0,T:.16,v:(190+30*w.dash)*(ev.dash?1.5:1)/.16,id:++S.id,dm:(16+8*w.dash)*(ev.dash?1.9:1)}}}
 if(S.ds){const d=S.ds;d.t+=dt;P.x+=Math.cos(d.a)*d.v*dt;P.y+=Math.sin(d.a)*d.v*dt;push(P,10);P.inv=Math.max(P.inv,.15);S.fx.push({k:'d',x:P.x,y:P.y,l:.3});
  for(const e of en)if(!e.dead&&e.eid!=d.id&&(e.x-P.x)**2+(e.y-P.y)**2<(e.r+26)**2){e.eid=d.id;hurt(e,d.dm,Math.cos(d.a)*260,Math.sin(d.a)*260,'dash')}smash(P.x,P.y,24,30);if(d.t>=d.T)S.ds=null}
 if(w.flame&&cd.flame<=0){const t=near(P.x,P.y,230);if(t){cd.flame=hs*Math.max(.18,.45-.05*w.flame);const a0=lunge(t,.15),n=3+w.flame+(ev.flame?4:0);
  for(let i=0;i<n;i++){const a=a0+(Math.random()-.5)*(ev.flame?.9:.6),sp=330+Math.random()*100;S.bl.push({x:P.x,y:P.y-12,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,l:.42,d:(5+2*w.flame)*(ev.flame?1.7:1),pi:ev.flame?4:2,h:[],ty:'f',wk:'flame'})}}}
 if(w.turret&&cd.turret<=0){cd.turret=hs*Math.max(3,7-.8*w.turret);S.tu.push({x:P.x+(Math.random()-.5)*60,y:P.y+(Math.random()-.5)*40,l:8+w.turret+(ev.turret?4:0),c:0,a:0});if(S.tu.length>2+w.turret+(ev.turret?2:0))S.tu.shift()}
 for(const u of S.tu){u.l-=dt;u.c-=dt;if(u.c<=0){const t=near(u.x,u.y,380);if(t){u.c=(ev.turret?.28:.55)-.02*w.turret;u.a=Math.atan2(t.y-u.y,t.x-u.x);S.bl.push({x:u.x,y:u.y-14,vx:Math.cos(u.a)*540,vy:Math.sin(u.a)*540,l:.9,d:7+3*w.turret,pi:ev.turret?1:0,h:[],ty:'t',wk:'turret'})}}}
 S.tu=S.tu.filter(u=>u.l>0);
 if(w.spin&&cd.spin<=0&&near(P.x,P.y,130)){cd.spin=hs*Math.max(1.2,3-.35*w.spin)*(ev.spin?.7:1);S.fx.push({k:'g',r:(70+8*w.spin)*(ev.spin?1.4:1),n:3+(ev.spin?2:0),tm:0,l:.6,d:(9+4*w.spin)*(ev.spin?1.7:1)})}
 if(w.trail){S.tzc-=dt;if(S.tzc<=0&&P.mv){S.tzc=.22;S.tz.push({x:P.x,y:P.y,l:3+.5*w.trail,r:(26+3*w.trail)*(ev.trail?1.5:1)})}
  for(const z of S.tz){z.l-=dt;for(const e of en)if(!e.dead&&(e.x-z.x)**2+(e.y-z.y)**2<(z.r+e.r)**2)dot(e,(10+4*w.trail)*(ev.trail?1.8:1)*dt,'trail')}S.tz=S.tz.filter(z=>z.l>0)}
 S.dr=[];if(w.drones){const n=w.drones+1+(ev.drones?3:0);S.da+=dt*3.2;for(let i=0;i<n;i++){const a=S.da+i*6.283/n;S.dr.push([P.x+Math.cos(a)*80,P.y+Math.sin(a)*80])}
  for(const e of en)if(!e.dead&&e.dt<=0)for(const q of S.dr)if((e.x-q[0])**2+(e.y-q[1])**2<(e.r+12)**2){hurt(e,(7+2*w.drones)*(ev.drones?1.6:1),(e.x-q[0])*4,(e.y-q[1])*4,'drones');e.dt=.35;break}
  if((S.sd-=dt)<=0){S.sd=.35;for(const q of S.dr)smash(q[0],q[1],14,8)}}
 for(const b of S.bl){b.x+=b.vx*dt;b.y+=b.vy*dt;b.l-=dt;if(BRK[tid(b.x,b.y)])smash(b.x,b.y,8,b.d);
  const gx=Math.floor(b.x/40),gy=Math.floor(b.y/40);
  for(let i=-2;i<3&&b.l>0;i++)for(let j=-2;j<3&&b.l>0;j++){const a=g.get((gx+i)*65536+gy+j);if(a)for(const e of a){if(e.dead||b.l<=0)continue;if((e.x-b.x)**2+(e.y-b.y)**2<(e.r+6)**2&&!b.h.includes(e)){hurt(e,b.d,b.vx*.25,b.vy*.25,b.wk||'blaster');b.h.push(e);if(b.pi--<=0)b.l=0}}}}
 S.bl=S.bl.filter(b=>b.l>0);
 for(const f of S.fx){if(f.k=='e'){f.r+=dt*460;for(const e of en){if(e.dead||e.eid==f.id)continue;const dx=e.x-f.x,dy=e.y-f.y,d=Math.hypot(dx,dy)||1;if(d<f.r+12){e.eid=f.id;hurt(e,f.d,dx/d*380,dy/d*380,'emp')}}}else if(f.k=='h')f.r+=dt*400;else{f.l-=dt;if(f.k=='g'){f.tm-=dt;if(f.tm<=0&&f.n>0){f.n--;f.tm=.14;P.at=P.atm=.3;P.ax=P.ay=0;for(const e of en)if(!e.dead){const dx=e.x-P.x,dy=e.y-P.y,d=Math.hypot(dx,dy)||1;if(d<f.r+e.r)hurt(e,f.d,dx/d*200,dy/d*200,'spin')}smash(P.x,P.y,f.r,20)}}}}
 S.fx=S.fx.filter(f=>f.k=='e'||f.k=='h'?f.r<f.m:f.l>0);
 for(const q of S.gm){const dx=P.x-q.x,dy=P.y-q.y,d=Math.hypot(dx,dy)||1;if(d<P.mag||q.m){q.m=1;q.x+=dx/d*430*dt;q.y+=dy/d*430*dt}if(d<16){P.xp+=q.v*(1+.15*pas.wis);q.v=0}}
 S.gm=S.gm.filter(q=>q.v>0);
 for(const q of S.pk){const dx=P.x-q.x,dy=P.y-q.y,d=Math.hypot(dx,dy)||1;if(d<P.mag*.8){q.x+=dx/d*300*dt;q.y+=dy/d*300*dt}if(d<18){if(q.k=='c')S.coins+=q.v;else P.hp=Math.min(P.mx,P.hp+q.v);q.v=0}}
 S.pk=S.pk.filter(q=>q.v>0);
 for(const a of S.ac){a.t+=dt;a.l-=dt;if(a.t>=1){const ins=Math.hypot(P.x-a.tx,(P.y-a.ty)*1.6)<40;if(!a.p){a.p=1;if(ins&&P.inv<=0){P.hp-=10;P.inv=.4;P.fl=.2}}if(ins){P.hp-=8*dt;P.pz=.2}}}
 S.ac=S.ac.filter(a=>a.l>0);
 for(const k of S.kn){k.x+=k.vx*dt;k.y+=k.vy*dt;k.l-=dt;k.a+=dt*18;{const id=tid(k.x,k.y-10);if(id>=30&&!(BRK[id]&&S.brk.has(Math.floor(k.x/TS)+','+Math.floor((k.y-10)/TS))))k.l=0}
  if(Math.hypot(P.x-k.x,P.y-12-k.y)<18){k.l=0;if(P.inv<=0){P.hp-=7;P.inv=.4;P.fl=.2;S.shake=.15}}}
 S.kn=S.kn.filter(k=>k.l>0);
 for(const p of S.pt){p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt}S.pt=S.pt.filter(p=>p.l>0);
 for(const n of S.dn){n.y-=40*dt;n.l-=dt}S.dn=S.dn.filter(n=>n.l>0);
 for(const b of S.cp)b.t+=dt;S.cp=S.cp.filter(b=>b.t<1);
 S.gt+=dt;S.gh.forEach((g,i)=>{const a=S.gt*1.4+i*6.283/S.gh.length,tx=P.x+Math.cos(a)*75,ty=P.y-30+Math.sin(a)*40;g.x+=(tx-g.x)*Math.min(1,dt*4);g.y+=(ty-g.y)*Math.min(1,dt*4);g.cd-=dt;
  if(g.cd<=0){const t=near(g.x,g.y,340);if(t){g.cd=1.1-.1*S.gh.length;const aa=Math.atan2(t.y-g.y,t.x-g.x);S.bl.push({x:g.x,y:g.y,vx:Math.cos(aa)*480,vy:Math.sin(aa)*480,l:1,d:8+2*S.gh.length,pi:1,h:[],ty:'g',wk:'ghost'})}}});
 if(S.gh.length&&(S.gh2-=dt)<=0){S.gh2=14;P.hp=Math.min(P.mx,P.hp+4*S.gh.length);S.fx.push({k:'h',x:P.x,y:P.y,r:0,m:90})}
 for(const z of S.st){z.t+=dt;if(!z.f&&z.t>=z.T){z.f=1;S.fx.push({k:'z',x1:z.x+(Math.random()-.5)*20,y1:z.y-300,x2:z.x,y2:z.y,l:.25,c:'#fff3a0',j:1});if(Math.hypot(P.x-z.x,(P.y-z.y)*1.4)<44&&P.inv<=0){P.hp-=14;P.inv=.4;P.fl=.2;S.shake=.25}}}
 S.st=S.st.filter(z=>z.t<z.T+.1);
 S.en=en=en.filter(e=>!e.dead);en.sort((a,b)=>a.y-b.y);
 if(P.hp<=0)return end(0);
 if(P.xp>=P.need){P.xp-=P.need;P.lv++;P.need=Math.round(P.need*1.3+3);lvUp()}}
function lvUp(){const pool=[];for(const k in WD){if(S.W[k]<5)pool.push(['W',k]);else if(!S.evo[k])pool.push(['E',k])}for(const k in PD)if(S.pas[k]<5)pool.push(['P',k]);
 pool.sort(()=>Math.random()-.5);const ch=pool.sort((a,b)=>(b[0]=='E')-(a[0]=='E')).slice(0,3);st='lvl';ui.hidden=false;
 const nf=a=>{const k=a[1],l=a[0]=='W'?S.W[k]:S.pas[k];return a[0]=='E'?['★ '+EV[k][0],EV[k][1],'Evolución']:[(a[0]=='W'?WD:PD)[k][0],(a[0]=='W'?WD:PD)[k][1],l?'Nv '+l+' → '+(l+1):'Nueva']};
 ui.innerHTML='<div class="p" style="max-width:720px"><h1>¡Nivel '+S.P.lv+'!</h1><p>Elige una mejora</p><div class="cr">'+(ch.map((a,i)=>{const d=nf(a);return'<button class="b card" data-i="'+i+'"><b>'+d[0]+'</b><br>'+d[2]+'<small>'+d[1]+'</small></button>'}).join('')||'<button class="b card" data-i="-1">Reparaciones: +30 PV</button>')+'</div></div>';
 ui.querySelectorAll('.card').forEach(b=>b.onclick=()=>{const a=ch[+b.dataset.i],P=S.P;
  if(a){const k=a[1];if(a[0]=='W')S.W[k]++;else if(a[0]=='E')S.evo[k]=1;else{S.pas[k]++;if(k=='boots')P.spd*=1.1;if(k=='core')P.dm+=.15;if(k=='mag')P.mag+=40;if(k=='armor'){P.mx+=20;P.hp=Math.min(P.mx,P.hp+20)}}}else P.hp=Math.min(P.mx,P.hp+30);
  ui.hidden=true;st='play'})}
function end(win){st='end';ui.hidden=false;const t=S.t|0;SV.coins+=S.coins;SV.best=Math.max(SV.best,t);SV.bk=Math.max(SV.bk,S.kills);save();
 ui.innerHTML='<div class="p"><h1>'+(win?'¡Misión cumplida!':'Eliminado')+'</h1><p>'+(win?'Resististe 10 minutos a la horda.':'Los impostores te alcanzaron.')+'</p><p><b>Tiempo '+(t/60|0)+':'+String(t%60).padStart(2,'0')+'</b> · Nivel '+S.P.lv+' · '+S.kills+' impostores · +'+S.coins+' monedas</p><button class="b go" id="r">Reintentar</button><div class="row"><button class="b" id="m">Cambiar look</button></div></div>';
 $('r').onclick=newGame;$('m').onclick=menu}
function setVol(){if(mg)mg.gain.value=mOn?cfg.vol/100:0;if(mEl)mEl.volume=mOn?cfg.vol/100:0}
function pauseM(){if(st!='play')return;st='pause';ui.hidden=false;
 ui.innerHTML='<div class="p"><h1>Pausa</h1><div class="row"><button class="b go" id="rs">Continuar</button></div><p>Volumen de la música</p><input type="range" id="vo" min="0" max="100" value="'+cfg.vol+'" style="width:80%"><div class="row"><button class="b" id="t1"></button><button class="b" id="t2"></button><button class="b" id="fs2">Pantalla completa</button></div><div class="row"><button class="b" id="mn">Salir al menú</button></div></div>';
 const lab=()=>{$('t1').textContent='Números de daño: '+(cfg.num?'sí':'no');$('t2').textContent='Menos sacudidas: '+(cfg.shk?'no':'sí')};lab();
 $('vo').oninput=e=>{cfg.vol=+e.target.value;setVol();save()};$('t1').onclick=()=>{cfg.num^=1;lab();save()};$('t2').onclick=()=>{cfg.shk^=1;lab();save()};
 $('rs').onclick=()=>{ui.hidden=true;st='play'};$('mn').onclick=menu;$('fs2').onclick=fsToggle}
function toast(m){const t=$('tt');t.textContent=m;t.style.display='block';clearTimeout(toast.h);toast.h=setTimeout(()=>{t.style.display='none'},2800)}
function fsToggle(){const d=document,e=d.documentElement,on=d.fullscreenElement||d.webkitFullscreenElement;
 try{if(!on){const r=e.requestFullscreen||e.webkitRequestFullscreen;if(!r)throw 0;const p=r.call(e);if(p&&p.then)p.then(()=>{try{screen.orientation.lock('landscape').catch(()=>{})}catch(_){}}).catch(()=>toast('Pantalla completa no disponible aquí. Abre el juego en su propia pestaña.'));else{try{screen.orientation.lock('landscape')}catch(_){}}}
  else{(d.exitFullscreen||d.webkitExitFullscreen).call(d)}}catch(_){toast('Pantalla completa no disponible en este navegador.')}}
function hatIcon(g,i){const o=c;c=g;c.save();c.translate(32,60);c.scale(.72,.72);c.lineWidth=3;c.lineJoin='round';c.strokeStyle='#0a0612';c.beginPath();c.arc(0,-28,17,Math.PI,0);c.lineTo(17,-8);c.lineTo(-17,-8);c.closePath();ol(COLS[look.c]);c.beginPath();c.ellipse(7,-33,11,7.5,0,0,7);ol('#a8dcec');if(HAT[i])HAT[i]();c.restore();c=o}
function skinIcon(g,s){g.lineWidth=3;g.strokeStyle='#0a0612';if(!s.ic){g.strokeStyle='#8a8a98';g.beginPath();g.arc(32,32,16,0,7);g.moveTo(21,43);g.lineTo(43,21);g.stroke();return}
 g.fillStyle=s.ic[0];g.fillRect(18,12,28,24);g.strokeRect(18,12,28,24);g.fillStyle=s.ic[2];g.fillRect(18,36,12,18);g.fillRect(34,36,12,18);g.strokeRect(18,36,12,18);g.strokeRect(34,36,12,18);g.fillStyle=s.ic[1];g.fillRect(18,32,28,5)}
let tab=0;
function custM(){st='menu';ui.hidden=false;
 ui.innerHTML='<div class="p cm"><div class="tabs" id="tb"></div><div class="cmb"><div class="pvw"><canvas id="pv2" width="240" height="260"></canvas><div class="coin" id="cn"></div></div><div class="grid" id="gd"></div></div><button class="b go" id="bk">Listo</button></div>';
 const TB=['Color','Sombrero','Skin'],items=()=>tab==0?COLS.map((k,i)=>({d:g=>{g.fillStyle=k;g.beginPath();g.arc(32,32,20,0,7);g.fill();g.lineWidth=3;g.strokeStyle='#0a0612';g.stroke()},own:1,cost:0,sel:look.c==i,set:()=>{look.c=i;cfg.lc=i}}))
  :tab==1?HATN.map((n,i)=>({d:g=>hatIcon(g,i),own:SV.hats[i],cost:HC[i],sel:look.h==i,set:()=>{look.h=i;cfg.lh=i},buy:()=>{SV.hats[i]=1}}))
  :SK.map((s,i)=>({d:g=>skinIcon(g,s),own:i==0||SV.sk[i],cost:s.p,sel:look.s==i,set:()=>{look.s=i;cfg.ls=i},buy:()=>{SV.sk[i]=1}})),
 render=()=>{$('cn').textContent='$ '+SV.coins;const tb=$('tb'),gd=$('gd');tb.innerHTML='';gd.innerHTML='';
  TB.forEach((n,i)=>{const b=document.createElement('button');b.className='b'+(i==tab?' on':'');b.textContent=n;b.onclick=()=>{tab=i;render()};tb.append(b)});
  for(const it of items()){const b=document.createElement('button');b.className='b tile'+(it.sel?' on':'');const cv=document.createElement('canvas');cv.width=cv.height=64;it.d(cv.getContext('2d'));b.append(cv);
   const sm=document.createElement('small');sm.textContent=it.own?(it.sel?'✓':''):'$ '+it.cost;b.append(sm);
   b.onclick=()=>{if(!it.own){if(SV.coins<it.cost){toast('Monedas insuficientes');return}SV.coins-=it.cost;it.buy()}it.set();save();render()};gd.append(b)}};
 render();$('bk').onclick=menu;pc=$('pv2').getContext('2d')}
function menu(){st='menu';ui.hidden=false;
 ui.innerHTML='<div class="p m"><div class="l"><h1>Among Survivor</h1><canvas id="pv" width="240" height="260"></canvas><button class="b go" id="pl">¡Jugar!</button><button class="b" id="cu" style="width:100%;margin-top:8px">Personalizar</button><button class="b" id="fs3" style="width:100%;margin-top:8px">Pantalla completa</button></div><div class="r"><p>Resiste 10 minutos en las zonas de Among Us. Las armas disparan solas: esquiva los peligros, rompe cajas, abre cofres, rescata fantasmas y busca el punto débil de cada impostor (número amarillo).</p><div class="row" id="ks"></div><p id="kd"></p><p id="rc"></p><p style="font-size:11px">Fan game sin ánimo de lucro, inspirado en Among Us y en el sistema de clases de ataque de PokéSurvivor (JPTER78).</p></div></div>';
 const mark=()=>{[...$('ks').children].forEach((b,i)=>b.classList.toggle('on',i==look.k));$('kd').textContent=CL[look.k].c+' · '+WD[CL[look.k].w][1];$('rc').textContent='Mejor: '+(SV.best/60|0)+':'+String(SV.best%60).padStart(2,'0')+' · '+SV.bk+' bajas · Monedas: '+SV.coins};
 CL.forEach((k,i)=>{const b=document.createElement('button');b.className='b';b.textContent=k.n;b.onclick=()=>{look.k=i;cfg.cls=i;save();mark()};$('ks').append(b)});
 mark();$('pl').onclick=newGame;$('cu').onclick=custM;$('fs3').onclick=fsToggle;pc=$('pv').getContext('2d')}
function prev(tm){if(!pc||!pc.canvas.isConnected)return;const o=c;c=pc;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,240,260);crew(120,232,2.7,COLS[look.c],look.h,1,tm*8,0,0,0,null,look.s);c=o}
function draw(tm){
 c.setTransform(D,0,0,D,0,0);const P=S.P,q=S.shake>0&&cfg.shk?5:0,ox=Math.round(P.x-VW/2+(Math.random()-.5)*q),oy=Math.round(P.y-VH/2+(Math.random()-.5)*q);
 c.fillStyle='#4a3a5a';c.fillRect(0,0,W,H);c.save();c.scale(Z,Z);c.translate(-ox,-oy);
 let PN=0;const deco=[],X0=Math.floor(ox/TS),X1=Math.floor((ox+VW)/TS),Y0=Math.floor(oy/TS),Y1=Math.floor((oy+VH)/TS);
 for(let gy=Y0>>4;gy<=Y1>>4;gy++)for(let gx=X0>>4;gx<=X1>>4;gx++){const q=chunk(gx,gy);if(!q.cv){if(PN<2||S.t<.5){paint(q,gx,gy);PN++}else continue}c.drawImage(q.cv,gx*768,gy*768,769,769);
  for(const a of q.A){if(a.x<ox-150||a.x>ox+VW+150||a.y<oy-80||a.y>oy+VH+260)continue;if(BRK[a.id]&&S.brk.has(a.tx+','+a.ty))continue;deco.push(a)}
  for(const o of q.O){if(o.x<ox-150||o.x>ox+VW+150||o.y<oy-80||o.y>oy+VH+260)continue;if(S.brk.has(o.id)||(o.t>=6&&S.us.has(o.id)))continue;deco.push(o)}}
 let ck=null,kx=1e9,ky=1e9;
 if(PN<1&&fe<.02){const c0=Math.floor(P.x/768),c1=Math.floor(P.y/768);pre:for(let r=1;r<=2;r++)for(let j=-r;j<=r;j++)for(let i=-r;i<=r;i++){if(Math.max(Math.abs(i),Math.abs(j))!=r)continue;const q=chunk(c0+i,c1+j);if(!q.cv){paint(q,c0+i,c1+j);break pre}}}
 for(let ty=Y0;ty<=Y1;ty++)for(let tx=X0;tx<=X1;tx++){const cx=tx>>4,cy=ty>>4;if(cx!=kx||cy!=ky){ck=chunk(cx,cy);kx=cx;ky=cy}const i=(ty&15)*16+(tx&15),id=ck.t[i];
  if(id==3||id==5||id==6||id==7||id==9||id==12||(id>=20&&id<=22))tileFx(id,tx*TS,ty*TS,tm,tx,ty,ck.dp?ck.dp[i]:0)}
for(const a of S.ac){c.beginPath();c.ellipse(a.tx,a.ty,38,22,0,0,7);if(a.t<1){c.strokeStyle='rgba(140,255,70,.9)';c.lineWidth=3;c.stroke()}else{c.globalAlpha=Math.min(1,a.l*2);c.lineWidth=3;c.strokeStyle='#0a0612';ol('rgba(110,240,50,.8)');c.globalAlpha=1}}
 for(const z of S.tz){c.globalAlpha=Math.min(1,z.l);c.fillStyle='rgba(120,255,60,.55)';c.beginPath();c.ellipse(z.x,z.y,z.r,z.r*.6,0,0,7);c.fill();c.strokeStyle='rgba(30,120,20,.9)';c.lineWidth=2;c.stroke()}c.globalAlpha=1;
 for(const b of S.cp){const q=b.t;if(b.x<ox-140||b.x>ox+VW+140||b.y<oy-100||b.y>oy+VH+200)continue;c.globalAlpha=Math.max(0,1-q*q*.2-q*.8);crew(b.x,b.y+q*5,b.s*(1-.2*q),b.col,0,b.f,0,'k',0);c.fillStyle='rgba(165,175,40,'+.7*(1-q)+')';for(let i=0;i<4;i++){c.beginPath();c.arc(b.x+(i-1.5)*9,b.y-6-q*(14+i*5),2.5*(1-q)+.6,0,7);c.fill()}}c.globalAlpha=1;
 for(const e of S.en){if(e.fz>0){const q=1-e.fz/.9;c.fillStyle='rgba(255,90,40,'+(.15+.3*q)+')';c.beginPath();c.arc(e.x,e.y,90*q+8,0,7);c.fill();c.strokeStyle='rgba(255,120,60,.9)';c.lineWidth=3;c.beginPath();c.arc(e.x,e.y,90,0,7);c.stroke()}
  if(e.aim>0){c.strokeStyle='rgba(255,60,60,'+(.3+.5*(1-e.aim/1.2))+')';c.lineWidth=2;c.beginPath();c.moveTo(e.x,e.y-16);c.lineTo(e.x+Math.cos(e.aa)*800,e.y-16+Math.sin(e.aa)*800);c.stroke()}}
 for(const z of S.st){const q=Math.min(1,z.t/z.T);c.strokeStyle='rgba(255,243,160,.9)';c.lineWidth=3;c.beginPath();c.ellipse(z.x,z.y,44,28,0,0,7);c.stroke();c.fillStyle='rgba(255,243,160,'+(.12+.3*q)+')';c.beginPath();c.ellipse(z.x,z.y,44*q,28*q,0,0,7);c.fill()}
 deco.sort((a,b)=>a.y-b.y);
 for(const o of deco)if(o.y<=P.y)DEC[o.t](o);
 c.strokeStyle='#0a0612';c.lineWidth=2;
 {const gs=[[],[]];for(const g of S.gm){if(g.x<ox-20||g.x>ox+VW+20||g.y<oy-20||g.y>oy+VH+20)continue;gs[g.v>1?1:0].push(g)}
 for(let t=0;t<2;t++){if(!gs[t].length)continue;c.beginPath();for(const g of gs[t]){c.moveTo(g.x,g.y-7);c.lineTo(g.x+5,g.y);c.lineTo(g.x,g.y+7);c.lineTo(g.x-5,g.y);c.closePath()}c.fillStyle=t?'#ffd23f':'#4df3ff';c.fill();c.stroke()}}
 for(const k of S.pk){if(k.k=='c'){c.beginPath();c.arc(k.x,k.y,6,0,7);ol('#ffcf33');c.fillStyle='#fff3b0';c.fillRect(k.x-1.5,k.y-3,3,6)}else{rr(k.x-8,k.y-8,16,16,4);ol('#4cd964');c.fillStyle='#fff';c.fillRect(k.x-1.5,k.y-5,3,10);c.fillRect(k.x-5,k.y-1.5,10,3)}}
 const dp=()=>{const k=P.at>0?Math.sin(Math.min(1,P.at/(P.atm||.2))*Math.PI):0,fc=P.at>0&&Math.abs(P.ax)>.25?Math.sign(P.ax):P.f;c.globalAlpha=P.inv>0&&(tm*20|0)%2?.5:1;crew(P.x+P.ax*9*k,P.y+P.ay*6*k,1.15*(1+.07*k),COLS[look.c],look.h,fc,P.mv?P.wt:-1,0,0,0,null,look.s);c.globalAlpha=1};
 let dn=0;for(const e of S.en){if(!dn&&e.y>P.y){dp();dn=1}if(e.x<ox-140||e.x>ox+VW+140||e.y<oy-100||e.y>oy+VH+230)continue;
  if(e.gd){c.fillStyle='rgba(255,210,63,.28)';c.beginPath();c.ellipse(e.x,e.y-22*e.s,28*e.s,34*e.s,0,0,7);c.fill()}
  crew(e.x,e.y,e.s,e.col,e.hat,e.f,tm*9+e.ph,e.spr,e.fl>0,e.kn,e.fi);
  if(e.ty>1&&e.ty!=4&&e.ty!=5||e.hp<e.mh){const by=e.y-e.s*66;c.fillStyle='#000';c.fillRect(e.x-23,by,46,7);c.fillStyle='#ff4d6d';c.fillRect(e.x-21,by+1.5,42*Math.max(0,e.hp/e.mh),4)}}
 if(!dn)dp();
 for(const g of S.gh){c.globalAlpha=.8;crew(g.x,g.y+24,.8,'#cfeeff',0,P.x>g.x?1:-1,tm*6,'x',0);c.globalAlpha=1}
 for(const o of deco)if(o.y>P.y)DEC[o.t](o);
 for(const u of S.tu){c.lineWidth=3;c.strokeStyle='#0a0612';rr(u.x-12,u.y-12,24,12,3);ol('#5b6b7a');c.save();c.translate(u.x,u.y-14);c.rotate(u.a||0);rr(0,-3,20,6,2);ol('#9fb1c1');c.restore();c.beginPath();c.arc(u.x,u.y-16,7,0,7);ol('#ffd23f')}
 c.lineCap='round';
 for(const a of S.ac)if(a.t<1){const p=a.t,x=a.x+(a.tx-a.x)*p,y=a.y+(a.ty-a.y)*p-Math.sin(p*Math.PI)*70-18;c.lineWidth=2.5;c.strokeStyle='#0a0612';c.beginPath();c.arc(x,y,8,0,7);ol('#8cff46')}
 for(const k of S.kn){c.save();c.translate(k.x,k.y);c.rotate(k.a);c.lineWidth=2;c.strokeStyle='#0a0612';poly([[-9,-2.5],[9,0],[-9,2.5]]);c.closePath();ol('#dfe6ee');rr(-14,-2.5,6,5,2);ol('#5a3a22');c.restore()}
 for(const b of S.bl){if(b.ty=='f'){const q=b.l/.42;c.fillStyle='rgba(255,'+(90+q*140|0)+',30,'+Math.min(1,q+.2)+')';c.beginPath();c.arc(b.x,b.y,7+(1-q)*9,0,7);c.fill();c.fillStyle='rgba(255,240,150,.7)';c.beginPath();c.arc(b.x,b.y,3+(1-q)*3,0,7);c.fill()}else{const o=b.ty=='t'?['#ffd23f','#fff8d0']:b.ty=='g'?['#d6b8ff','#fff']:['#7df9ff','#fff'];c.strokeStyle=o[0];c.lineWidth=6;c.beginPath();c.moveTo(b.x,b.y);c.lineTo(b.x-b.vx*.035,b.y-b.vy*.035);c.stroke();c.strokeStyle=o[1];c.lineWidth=2.5;c.stroke()}}
 for(const d of S.dr){c.lineWidth=3;c.strokeStyle='#0a0612';c.beginPath();c.arc(d[0],d[1],10,0,7);ol('#ffd23f');c.fillStyle='#fff';c.beginPath();c.arc(d[0]-3,d[1]-3,3,0,7);c.fill()}
 for(const f of S.fx){
  if(f.k=='e'||f.k=='h'){c.strokeStyle=(f.k=='e'?'rgba(125,249,255,':f.c?'rgba(224,80,159,':'rgba(120,255,140,')+Math.max(0,1-f.r/f.m)+')';c.lineWidth=9;c.beginPath();c.arc(f.x,f.y,f.r,0,7);c.stroke()}
  else if(f.k=='a'){for(const z of [[6,'#c06bff'],[2,'#fff']]){c.lineWidth=z[0];c.strokeStyle=z[1];c.beginPath();f.p.forEach((p,i)=>{if(i){const o=f.p[i-1];c.lineTo((p[0]+o[0])/2+(Math.random()-.5)*18,(p[1]+o[1])/2+(Math.random()-.5)*18);c.lineTo(p[0],p[1])}else c.moveTo(p[0],p[1])});c.stroke()}}
  else if(f.k=='s'){const q=f.l/.2;c.save();c.translate(f.x,f.y);c.rotate(f.a);for(const z of [[18,'rgba(125,249,255,'],[7,'rgba(255,255,255,']]){c.lineWidth=z[0]*q+2;c.strokeStyle=z[1]+q+')';c.beginPath();c.arc(0,0,f.r*(.65+.35*(1-q)),-f.arc/2,f.arc/2);c.stroke()}c.restore()}
  else if(f.k=='z'){const q=f.l/.25;c.lineCap='round';for(const y of [[10,f.c],[3,'#fff']]){c.lineWidth=y[0]*q+1;c.strokeStyle=y[1];c.globalAlpha=Math.min(1,q+.3);c.beginPath();c.moveTo(f.x1,f.y1);if(f.j)c.lineTo((f.x1+f.x2)/2+(Math.random()-.5)*30,(f.y1+f.y2)/2);c.lineTo(f.x2,f.y2);c.stroke()}c.globalAlpha=1}
  else if(f.k=='x'){const q=1-f.l/.3;c.fillStyle='rgba(255,140,40,'+(.5*(1-q))+')';c.beginPath();c.arc(f.x,f.y,f.r*(.5+q*.5),0,7);c.fill();c.strokeStyle='#ffd23f';c.lineWidth=4;c.stroke()}
  else if(f.k=='d'){c.globalAlpha=f.l*1.6;c.fillStyle='#7df9ff';c.beginPath();c.ellipse(f.x,f.y-20,16,22,0,0,7);c.fill();c.globalAlpha=1}
  else if(f.k=='g'){c.save();c.translate(S.P.x,S.P.y-20);c.rotate(tm*18);c.lineWidth=2;c.strokeStyle='#0a0612';for(let i=0;i<4;i++){c.rotate(1.5708);poly([[f.r*.35,-4],[f.r,0],[f.r*.35,4]]);c.closePath();ol('#e8f4ff')}c.restore()}
  else{const k=f.l/.28;for(const z of [[22,'#ff6bd6'],[7,'#fff']]){c.lineWidth=z[0]*k;c.strokeStyle=z[1];c.beginPath();c.moveTo(f.x1,f.y1);c.lineTo(f.x2,f.y2);c.stroke()}}}
 c.fillStyle='#ff9bb5';for(const p of S.pt)c.fillRect(p.x-2,p.y-2,4,4);
 c.textAlign='center';c.textBaseline='middle';c.font='bold 15px system-ui,sans-serif';c.lineWidth=3;c.strokeStyle='#0a0612';
 for(const n of S.dn){c.globalAlpha=Math.min(1,n.l*2);const s=n.v+(n.w?'!':'');c.strokeText(s,n.x,n.y);c.fillStyle=n.w?'#ffd23f':'#fff';c.fillText(s,n.x,n.y)}c.globalAlpha=1;
 c.restore();c.setTransform(D,0,0,D,0,0);
 const T=SAT,wx=S.wx;c.fillStyle=vig;c.fillRect(0,0,W,H);if(P.pz>0){c.fillStyle='rgba(90,255,60,.14)';c.fillRect(0,0,W,H)}if(P.lz>0){c.fillStyle='rgba(255,110,30,.18)';c.fillRect(0,0,W,H)}
 if(wx){if(wx.c=='r'){c.strokeStyle='rgba(160,230,255,.4)';c.lineWidth=1.5;c.beginPath();for(let i=0;i<70;i++){const x=Math.random()*W,y=Math.random()*H;c.moveTo(x,y);c.lineTo(x-8,y+22)}c.stroke()}
  else{c.fillStyle=wx.c=='s'?'rgba(230,150,60,.2)':'rgba(255,255,255,.17)';c.fillRect(0,0,W,H)}}
 for(const e of S.en)if(e.gd){const sx=(e.x-ox)*Z,sy=(e.y-oy)*Z;if(sx<0||sx>W||sy<0||sy>H){const px=Math.max(24,Math.min(W-24,sx)),py=Math.max(T+70,Math.min(H-24,sy));c.save();c.translate(px,py);c.rotate(Math.atan2(sy-py,sx-px));c.lineWidth=3;c.strokeStyle='#0a0612';poly([[12,0],[-8,-9],[-8,9]]);c.closePath();ol('#ffd23f');c.restore()}}
 c.fillStyle='rgba(0,0,0,.45)';c.fillRect(0,T,W,8);c.fillStyle='#4df3ff';c.fillRect(0,T,W*P.xp/P.need,8);
 c.textAlign='left';c.fillStyle='#fff';c.font='bold 13px system-ui,sans-serif';c.fillText('Tripulante · Nv '+P.lv,12,T+22);
 c.fillStyle='rgba(0,0,0,.55)';c.fillRect(12,T+32,220,16);c.fillStyle='#ff4d6d';c.fillRect(12,T+32,220*Math.max(0,P.hp)/P.mx,16);c.fillStyle='#fff';c.fillText(Math.ceil(Math.max(0,P.hp))+' / '+P.mx,18,T+41);if(S.gh.length){c.font='12px system-ui,sans-serif';c.fillText('Fantasmas aliados: '+S.gh.length,14,T+62)}
 const t=S.t|0;c.textAlign='center';c.font='bold 24px system-ui,sans-serif';c.fillText((t/60|0)+':'+String(t%60).padStart(2,'0'),W/2,T+28);
 c.font='11px system-ui,sans-serif';c.fillStyle='rgba(255,255,255,.85)';c.fillText(TER.bm[bio(P.x,P.y)].n.toUpperCase()+' · '+S.kills+' BAJAS · '+S.coins+' MONEDAS',W/2,T+50);
 if(wx)c.fillText(wx.n.toUpperCase()+' · '+Math.ceil(wx.l)+' s',W/2,T+65);
 if(S.dz){c.fillStyle='rgba(255,100,80,'+(.75+.25*Math.sin(tm*6))+')';c.font='bold 13px system-ui,sans-serif';c.fillText('ZONA DE ALTO PELIGRO · más impostores, mejor botín',W/2,T+83)}
 const ks=Object.keys(S.W).filter(k=>S.W[k]),sw=46,x0=W/2-ks.length*(sw+8)/2+4;
 ks.forEach((k,i)=>{const x=x0+i*(sw+8),y=H-sw-12-SAB;rr(x,y,sw,sw,8);c.lineWidth=3;c.strokeStyle=S.evo[k]?'#ffd23f':'#b36bff';ol('rgba(20,8,35,.72)');c.fillStyle='#fff';c.font='bold 12px system-ui,sans-serif';c.fillText(WK[k],x+sw/2,y+19);
  for(let j=0;j<S.W[k];j++){c.fillStyle=S.evo[k]?'#ffd23f':'#b36bff';c.fillRect(x+6+j*7,y+sw-9,5,4)}});
 if(S.mt>0){c.font='bold 26px system-ui,sans-serif';c.globalAlpha=Math.min(1,S.mt);c.lineWidth=5;c.strokeStyle='#0a0612';c.strokeText(S.msg,W/2,H*.3);c.fillStyle='#ffd23f';c.fillText(S.msg,W/2,H*.3);c.globalAlpha=1}
 if(joy){const m=Math.hypot(joy.x,joy.y)||1,k=Math.min(1,m)/m;c.fillStyle='rgba(255,255,255,.15)';c.beginPath();c.arc(joy.ox,joy.oy,55,0,7);c.fill();c.fillStyle='rgba(255,255,255,.4)';c.beginPath();c.arc(joy.ox+joy.x*55*k,joy.oy+joy.y*55*k,24,0,7);c.fill()}}
addEventListener('keydown',e=>{const k=e.key.toLowerCase();keys[k]=1;if(k.startsWith('arrow'))e.preventDefault();if(k=='escape'||k=='p'){if(st=='pause')$('rs').click();else pauseM()}});
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=0);
addEventListener('visibilitychange',()=>{if(document.hidden)pauseM()});
$('ps').onclick=pauseM;$('fs').onclick=fsToggle;
cv.addEventListener('pointerdown',e=>{joy={ox:e.clientX,oy:e.clientY,x:0,y:0,id:e.pointerId};cv.setPointerCapture(e.pointerId)});
cv.addEventListener('pointermove',e=>{if(joy&&e.pointerId==joy.id){joy.x=(e.clientX-joy.ox)/55;joy.y=(e.clientY-joy.oy)/55}});
['pointerup','pointercancel'].forEach(n=>cv.addEventListener(n,e=>{if(joy&&e.pointerId==joy.id)joy=null}));
let last=0,rot=null,fe=.016;
function loop(ts){requestAnimationFrame(loop);const rd=(ts-last)/1000||0,dt=Math.min(.05,rd);last=ts;fe=fe*.95+Math.min(rd,.1)*.05;if(S&&st=='play'){if(fe>.026&&S.cap>110)S.cap-=.4;else if(fe<.019&&S.cap<260)S.cap+=.15}
 const pr=H>W&&(st=='play'||st=='pause'||st=='lvl');if(pr!==rot){rot=pr;$('rot').style.display=pr?'flex':'none'}
 if(st=='menu'){prev(ts/1000);c.setTransform(D,0,0,D,0,0);c.fillStyle='#2a0f3d';c.fillRect(0,0,W,H);return}
 if(st=='play'&&!pr)update(dt);if(S)draw(ts/1000)}

let AC,mg,mOn=1,mBuf=null,mSrc=null,mEl=null;
function mStart(){if(!AC||!mBuf||mSrc)return;mSrc=AC.createBufferSource();mSrc.buffer=mBuf;mSrc.loop=true;mSrc.connect(mg);mSrc.start(0)}
function mFallback(){if(mEl)return;mEl=new Audio('assets/music.mp3');mEl.loop=true;mEl.volume=mOn?cfg.vol/100:0;const p=mEl.play();if(p&&p.catch)p.catch(()=>{})}
function music(){try{if(!AC){const Cx=window.AudioContext||window.webkitAudioContext;if(!Cx){mFallback();return}AC=new Cx();mg=AC.createGain();setVol();mg.connect(AC.destination);
   const sb=AC.createBufferSource();sb.buffer=AC.createBuffer(1,1,22050);sb.connect(AC.destination);sb.start(0);
   fetch('assets/music.mp3').then(r=>r.arrayBuffer()).then(b=>AC.decodeAudioData(b)).then(b=>{mBuf=b;mStart()}).catch(mFallback)}
  if(AC.state!='running'){const r=AC.resume();if(r&&r.catch)r.catch(()=>{})}}catch(e){}}
['pointerdown','pointerup','touchend','click','keydown'].forEach(n=>addEventListener(n,music,{passive:true}));
addEventListener('visibilitychange',()=>{if(document.hidden){if(AC)AC.suspend();if(mEl)mEl.pause()}else{music();if(mEl&&mOn)mEl.play().catch(()=>{})}});
$('mu').onclick=()=>{mOn=!mOn;setVol();$('mu').classList.toggle('off',!mOn)};
menu();requestAnimationFrame(loop);
