"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[7706],{62288:(jr,dr,P)=>{P.d(dr,{C5:()=>er,HO:()=>fr,So:()=>vr,Wm:()=>m,Wu:()=>xr,ar:()=>_,az:()=>sr,rv:()=>J,wU:()=>mr});var c=P(33051),F=P(18553),ir="http://www.w3.org/2000/svg",_="http://www.w3.org/1999/xlink",J="http://www.w3.org/2000/xmlns/",er="http://www.w3.org/XML/1998/namespace";function sr(G){return document.createElementNS(ir,G)}function m(G,g,U,M,k){return{tag:G,attrs:U||{},children:M,text:k,key:g}}function Z(G,g){var U=[];if(g)for(var M in g){var k=g[M],E=M;k!==!1&&(k!==!0&&k!=null&&(E+='="'+k+'"'),U.push(E))}return"<"+G+" "+U.join(" ")+">"}function Ir(G){return"</"+G+">"}function fr(G,g){g=g||{};var U=g.newline?`
`:"";function M(k){var E=k.children,$=k.tag,K=k.attrs,w=k.text;return Z($,K)+($!=="style"?(0,F.F1)(w):w||"")+(E?""+U+(0,c.UI)(E,function(Y){return M(Y)}).join(U)+U:"")+Ir($)}return M(G)}function mr(G,g,U){U=U||{};var M=U.newline?`
`:"",k=" {"+M,E=M+"}",$=(0,c.UI)((0,c.XP)(G),function(w){return w+k+(0,c.UI)((0,c.XP)(G[w]),function(Y){return Y+":"+G[w][Y]+";"}).join(M)+E}).join(M),K=(0,c.UI)((0,c.XP)(g),function(w){return"@keyframes "+w+k+(0,c.UI)((0,c.XP)(g[w]),function(Y){return Y+k+(0,c.UI)((0,c.XP)(g[w][Y]),function(q){var rr=g[w][Y][q];return q==="d"&&(rr='path("'+rr+'")'),q+":"+rr+";"}).join(M)+E}).join(M)+E}).join(M);return!$&&!K?"":["<![CDATA[",$,K,"]]>"].join(M)}function vr(G){return{zrId:G,shadowCache:{},patternCache:{},gradientCache:{},clipPathCache:{},defs:{},cssNodes:{},cssAnims:{},cssClassIdx:0,cssAnimIdx:0,shadowIdx:0,gradientIdx:0,patternIdx:0,clipPathIdx:0}}function xr(G,g,U,M){return m("svg","root",{width:G,height:g,xmlns:ir,"xmlns:xlink":_,version:"1.1",baseProfile:"full",viewBox:M?"0 0 "+G+" "+g:!1},U)}},12954:(jr,dr,P)=>{P.d(dr,{Dm:()=>$r,qk:()=>_r,Qo:()=>Rr,YU:()=>Xr});var c=P(24839),F=P(10712),ir=P(44535),_=P(80423),J=P(71505),er=P(45212),sr=P(50810),m=P(33051),Z="none",Ir=Math.round;function fr(r){var a=r.fill;return a!=null&&a!==Z}function mr(r){var a=r.stroke;return a!=null&&a!==Z}var vr=["lineCap","miterLimit","lineJoin"],xr=(0,m.UI)(vr,function(r){return"stroke-"+r.toLowerCase()});function G(r,a,t,e){var f=a.opacity==null?1:a.opacity;if(t instanceof ir.ZP){r("opacity",f);return}if(fr(a)){var v=(0,c.ut)(a.fill);r("fill",v.color);var u=a.fillOpacity!=null?a.fillOpacity*v.opacity*f:v.opacity*f;(e||u<1)&&r("fill-opacity",u)}else r("fill",Z);if(mr(a)){var p=(0,c.ut)(a.stroke);r("stroke",p.color);var h=a.strokeNoScale?t.getLineScale():1,S=h?(a.lineWidth||0)/h:0,j=a.strokeOpacity!=null?a.strokeOpacity*p.opacity*f:p.opacity*f,C=a.strokeFirst;if((e||S!==1)&&r("stroke-width",S),(e||C)&&r("paint-order",C?"stroke":"fill"),(e||j<1)&&r("stroke-opacity",j),a.lineDash){var A=(0,sr.a)(t),T=A[0],O=A[1];T&&(O=Ir(O||0),r("stroke-dasharray",T.join(",")),(O||e)&&r("stroke-dashoffset",O))}else e&&r("stroke-dasharray",Z);for(var y=0;y<vr.length;y++){var z=vr[y];if(e||a[z]!==F.$t[z]){var H=a[z]||F.$t[z];H&&r(xr[y],H)}}}else e&&r("stroke",Z)}var g=P(62288),U=P(8007),M=P(87411),k=P(14014),E=P(52776),$=P(75188),K={cubicIn:"0.32,0,0.67,0",cubicOut:"0.33,1,0.68,1",cubicInOut:"0.65,0,0.35,1",quadraticIn:"0.11,0,0.5,0",quadraticOut:"0.5,1,0.89,1",quadraticInOut:"0.45,0,0.55,1",quarticIn:"0.5,0,0.75,0",quarticOut:"0.25,1,0.5,1",quarticInOut:"0.76,0,0.24,1",quinticIn:"0.64,0,0.78,0",quinticOut:"0.22,1,0.36,1",quinticInOut:"0.83,0,0.17,1",sinusoidalIn:"0.12,0,0.39,0",sinusoidalOut:"0.61,1,0.88,1",sinusoidalInOut:"0.37,0,0.63,1",exponentialIn:"0.7,0,0.84,0",exponentialOut:"0.16,1,0.3,1",exponentialInOut:"0.87,0,0.13,1",circularIn:"0.55,0,1,0.45",circularOut:"0,0.55,0.45,1",circularInOut:"0.85,0,0.15,1"},w="transform-origin";function Y(r,a,t){var e=(0,m.l7)({},r.shape);(0,m.l7)(e,a),r.buildPath(t,e);var f=new er.Z;return f.reset((0,c.Gk)(r)),t.rebuildPath(f,1),f.generateStr(),f.getStr()}function q(r,a){var t=a.originX,e=a.originY;(t||e)&&(r[w]=t+"px "+e+"px")}var rr={fill:"fill",opacity:"opacity",lineWidth:"stroke-width",lineDashOffset:"stroke-dashoffset"};function i(r,a){var t=a.zrId+"-ani-"+a.cssAnimIdx++;return a.cssAnims[t]=r,t}function I(r,a,t){var e=r.shape.paths,f={},v,u;if((0,m.S6)(e,function(h){var S=(0,g.So)(t.zrId);S.animation=!0,n(h,{},S,!0);var j=S.cssAnims,C=S.cssNodes,A=(0,m.XP)(j),T=A.length;if(T){u=A[T-1];var O=j[u];for(var y in O){var z=O[y];f[y]=f[y]||{d:""},f[y].d+=z.d||""}for(var H in C){var B=C[H].animation;B.indexOf(u)>=0&&(v=B)}}}),!!v){a.d=!1;var p=i(f,t);return v.replace(u,p)}}function D(r){return(0,m.HD)(r)?K[r]?"cubic-bezier("+K[r]+")":(0,$.H)(r)?r:"":""}function n(r,a,t,e){var f=r.animators,v=f.length,u=[];if(r instanceof E.Z){var p=I(r,a,t);if(p)u.push(p);else if(!v)return}else if(!v)return;for(var h={},S=0;S<v;S++){var j=f[S],C=[j.getMaxTime()/1e3+"s"],A=D(j.getClip().easing),T=j.getDelay();A?C.push(A):C.push("linear"),T&&C.push(T/1e3+"s"),j.getLoop()&&C.push("infinite");var O=C.join(" ");h[O]=h[O]||[O,[]],h[O][1].push(j)}function y(B){var Q=B[1],W=Q.length,gr={},lr={},N={},cr="animation-timing-function";function ar(wr,Cr,Vr){for(var br=wr.getTracks(),it=wr.getMaxTime(),kr=0;kr<br.length;kr++){var Nr=br[kr];if(Nr.needsAnimate()){var Zr=Nr.keyframes,Dr=Nr.propName;if(Vr&&(Dr=Vr(Dr)),Dr)for(var Lr=0;Lr<Zr.length;Lr++){var Mr=Zr[Lr],Er=Math.round(Mr.time/it*100)+"%",Hr=D(Mr.easing),Fr=Mr.rawValue;((0,m.HD)(Fr)||(0,m.hj)(Fr))&&(Cr[Er]=Cr[Er]||{},Cr[Er][Dr]=Mr.rawValue,Hr&&(Cr[Er][cr]=Hr))}}}}for(var R=0;R<W;R++){var or=Q[R],hr=or.targetName;hr?hr==="shape"&&ar(or,lr):!e&&ar(or,gr)}for(var L in gr){var ur={};(0,M.kY)(ur,r),(0,m.l7)(ur,gr[L]);var zr=(0,c.gA)(ur),Tr=gr[L][cr];N[L]=zr?{transform:zr}:{},q(N[L],ur),Tr&&(N[L][cr]=Tr)}var Pr,Wr=!0;for(var L in lr){N[L]=N[L]||{};var Br=!Pr,Tr=lr[L][cr];Br&&(Pr=new k.Z);var rt=Pr.len();Pr.reset(),N[L].d=Y(r,lr[L],Pr);var tt=Pr.len();if(!Br&&rt!==tt){Wr=!1;break}Tr&&(N[L][cr]=Tr)}if(!Wr)for(var L in N)delete N[L].d;if(!e)for(var R=0;R<W;R++){var or=Q[R],hr=or.targetName;hr==="style"&&ar(or,N,function(br){return rr[br]})}for(var Ar=(0,m.XP)(N),Kr=!0,Gr,R=1;R<Ar.length;R++){var Yr=Ar[R-1],nt=Ar[R];if(N[Yr][w]!==N[nt][w]){Kr=!1;break}Gr=N[Yr][w]}if(Kr&&Gr){for(var L in N)N[L][w]&&delete N[L][w];a[w]=Gr}if((0,m.hX)(Ar,function(wr){return(0,m.XP)(N[wr]).length>0}).length){var at=i(N,t);return at+" "+B[0]+" both"}}for(var z in h){var p=y(h[z]);p&&u.push(p)}if(u.length){var H=t.zrId+"-cls-"+t.cssClassIdx++;t.cssNodes["."+H]={animation:u.join(",")},a.class=H}}var s=P(96498),o=P(23132),l=Math.round;function d(r){return r&&(0,m.HD)(r.src)}function x(r){return r&&(0,m.mf)(r.toDataURL)}function b(r,a,t,e){G(function(f,v){var u=f==="fill"||f==="stroke";u&&(0,c.H3)(v)?Rr(a,r,f,e):u&&(0,c.R)(v)?Xr(t,r,f,e):r[f]=v},a,t,!1),qr(t,r,e)}function V(r){return(0,c.zT)(r[0]-1)&&(0,c.zT)(r[1])&&(0,c.zT)(r[2])&&(0,c.zT)(r[3]-1)}function tr(r){return(0,c.zT)(r[4])&&(0,c.zT)(r[5])}function X(r,a,t){if(a&&!(tr(a)&&V(a))){var e=t?10:1e4;r.transform=V(a)?"translate("+l(a[4]*e)/e+" "+l(a[5]*e)/e+")":(0,c.qV)(a)}}function nr(r,a,t){for(var e=r.points,f=[],v=0;v<e.length;v++)f.push(l(e[v][0]*t)/t),f.push(l(e[v][1]*t)/t);a.points=f.join(" ")}function pr(r){return!r.smooth}function Sr(r){var a=(0,m.UI)(r,function(t){return typeof t=="string"?[t,t]:t});return function(t,e,f){for(var v=0;v<a.length;v++){var u=a[v],p=t[u[0]];p!=null&&(e[u[1]]=l(p*f)/f)}}}var yr={circle:[Sr(["cx","cy","r"])],polyline:[nr,pr],polygon:[nr,pr]};function Or(r){for(var a=r.animators,t=0;t<a.length;t++)if(a[t].targetName==="shape")return!0;return!1}function Ur(r,a){var t=r.style,e=r.shape,f=yr[r.type],v={},u=a.animation,p="path",h=r.style.strokePercent,S=a.compress&&(0,c.Gk)(r)||4;if(f&&!a.willUpdate&&!(f[1]&&!f[1](e))&&!(u&&Or(r))&&!(h<1)){p=r.type;var j=Math.pow(10,S);f[0](e,v,j)}else{var C=!r.path||r.shapeChanged();r.path||r.createPathProxy();var A=r.path;C&&(A.beginPath(),r.buildPath(A,r.shape),r.pathUpdated());var T=A.getVersion(),O=r,y=O.__svgPathBuilder;(O.__svgPathVersion!==T||!y||h!==O.__svgPathStrokePercent)&&(y||(y=O.__svgPathBuilder=new er.Z),y.reset(S),A.rebuildPath(y,h),y.generateStr(),O.__svgPathVersion=T,O.__svgPathStrokePercent=h),v.d=y.getStr()}return X(v,r.transform),b(v,t,r,a),a.animation&&n(r,v,a),(0,g.Wm)(p,r.id+"",v)}function Jr(r,a){var t=r.style,e=t.image;if(e&&!(0,m.HD)(e)&&(d(e)?e=e.src:x(e)&&(e=e.toDataURL())),!!e){var f=t.x||0,v=t.y||0,u=t.width,p=t.height,h={href:e,width:u,height:p};return f&&(h.x=f),v&&(h.y=v),X(h,r.transform),b(h,t,r,a),a.animation&&n(r,h,a),(0,g.Wm)("image",r.id+"",h)}}function Qr(r,a){var t=r.style,e=t.text;if(e!=null&&(e+=""),!(!e||isNaN(t.x)||isNaN(t.y))){var f=t.font||o.Uo,v=t.x||0,u=(0,c.mU)(t.y||0,(0,_.Dp)(f),t.textBaseline),p=c.jY[t.textAlign]||t.textAlign,h={"dominant-baseline":"central","text-anchor":p};if((0,s.Y1)(t)){var S="",j=t.fontStyle,C=(0,s.VG)(t.fontSize);if(!parseFloat(C))return;var A=t.fontFamily||o.rk,T=t.fontWeight;S+="font-size:"+C+";font-family:"+A+";",j&&j!=="normal"&&(S+="font-style:"+j+";"),T&&T!=="normal"&&(S+="font-weight:"+T+";"),h.style=S}else h.style="font: "+f;return e.match(/\s/)&&(h["xml:space"]="preserve"),v&&(h.x=v),u&&(h.y=u),X(h,r.transform),b(h,t,r,a),a.animation&&n(r,h,a),(0,g.Wm)("text",r.id+"",h,void 0,e)}}function $r(r,a){if(r instanceof F.ZP)return Ur(r,a);if(r instanceof ir.ZP)return Jr(r,a);if(r instanceof J.Z)return Qr(r,a)}function qr(r,a,t){var e=r.style;if((0,c.i2)(e)){var f=(0,c.n1)(r),v=t.shadowCache,u=v[f];if(!u){var p=r.getGlobalScale(),h=p[0],S=p[1];if(!h||!S)return;var j=e.shadowOffsetX||0,C=e.shadowOffsetY||0,A=e.shadowBlur,T=(0,c.ut)(e.shadowColor),O=T.opacity,y=T.color,z=A/2/h,H=A/2/S,B=z+" "+H;u=t.zrId+"-s"+t.shadowIdx++,t.defs[u]=(0,g.Wm)("filter",u,{id:u,x:"-100%",y:"-100%",width:"300%",height:"300%"},[(0,g.Wm)("feDropShadow","",{dx:j/h,dy:C/S,stdDeviation:B,"flood-color":y,"flood-opacity":O})]),v[f]=u}a.filter=(0,c.m1)(u)}}function Rr(r,a,t,e){var f=r[t],v,u={gradientUnits:f.global?"userSpaceOnUse":"objectBoundingBox"};if((0,c.I1)(f))v="linearGradient",u.x1=f.x,u.y1=f.y,u.x2=f.x2,u.y2=f.y2;else if((0,c.gO)(f))v="radialGradient",u.cx=(0,m.pD)(f.x,.5),u.cy=(0,m.pD)(f.y,.5),u.r=(0,m.pD)(f.r,.5);else return;for(var p=f.colorStops,h=[],S=0,j=p.length;S<j;++S){var C=(0,c.Pn)(p[S].offset)*100+"%",A=p[S].color,T=(0,c.ut)(A),O=T.color,y=T.opacity,z={offset:C};z["stop-color"]=O,y<1&&(z["stop-opacity"]=y),h.push((0,g.Wm)("stop",S+"",z))}var H=(0,g.Wm)(v,"",u,h),B=(0,g.HO)(H),Q=e.gradientCache,W=Q[B];W||(W=e.zrId+"-g"+e.gradientIdx++,Q[B]=W,u.id=W,e.defs[W]=(0,g.Wm)(v,W,u,h)),a[t]=(0,c.m1)(W)}function Xr(r,a,t,e){var f=r.style[t],v=r.getBoundingRect(),u={},p=f.repeat,h=p==="no-repeat",S=p==="repeat-x",j=p==="repeat-y",C;if((0,c.Cv)(f)){var A=f.imageWidth,T=f.imageHeight,O=void 0,y=f.image;if((0,m.HD)(y)?O=y:d(y)?O=y.src:x(y)&&(O=y.toDataURL()),typeof Image>"u"){var z="Image width/height must been given explictly in svg-ssr renderer.";(0,m.hu)(A,z),(0,m.hu)(T,z)}else if(A==null||T==null){var H=function(R,or){if(R){var hr=R.elm,L=A||or.width,ur=T||or.height;R.tag==="pattern"&&(S?(ur=1,L/=v.width):j&&(L=1,ur/=v.height)),R.attrs.width=L,R.attrs.height=ur,hr&&(hr.setAttribute("width",L),hr.setAttribute("height",ur))}},B=(0,U.Gq)(O,null,r,function(R){h||H(lr,R),H(C,R)});B&&B.width&&B.height&&(A=A||B.width,T=T||B.height)}C=(0,g.Wm)("image","img",{href:O,width:A,height:T}),u.width=A,u.height=T}else f.svgElement&&(C=(0,m.d9)(f.svgElement),u.width=f.svgWidth,u.height=f.svgHeight);if(C){var Q,W;h?Q=W=1:S?(W=1,Q=u.width/v.width):j?(Q=1,W=u.height/v.height):u.patternUnits="userSpaceOnUse",Q!=null&&!isNaN(Q)&&(u.width=Q),W!=null&&!isNaN(W)&&(u.height=W);var gr=(0,c.gA)(f);gr&&(u.patternTransform=gr);var lr=(0,g.Wm)("pattern","",u,[C]),N=(0,g.HO)(lr),cr=e.patternCache,ar=cr[N];ar||(ar=e.zrId+"-p"+e.patternIdx++,cr[N]=ar,u.id=ar,lr=e.defs[ar]=(0,g.Wm)("pattern",ar,u,[C])),a[t]=(0,c.m1)(ar)}}function _r(r,a,t){var e=t.clipPathCache,f=t.defs,v=e[r.id];if(!v){v=t.zrId+"-c"+t.clipPathIdx++;var u={id:v};e[r.id]=v,f[v]=(0,g.Wm)("clipPath",v,u,[Ur(r,t)])}a["clip-path"]=(0,c.m1)(v)}},24839:(jr,dr,P)=>{P.d(dr,{Cv:()=>U,Gk:()=>Y,H3:()=>K,I1:()=>E,Pn:()=>Z,R:()=>k,gA:()=>q,gO:()=>$,i2:()=>xr,jY:()=>mr,m1:()=>w,mU:()=>vr,n1:()=>G,oF:()=>rr,qV:()=>fr,ut:()=>J,zT:()=>sr});var c=P(33051),F=P(21092),ir=P(66387),_=Math.round;function J(i){var I;if(!i||i==="transparent")i="none";else if(typeof i=="string"&&i.indexOf("rgba")>-1){var D=(0,F.Qc)(i);D&&(i="rgb("+D[0]+","+D[1]+","+D[2]+")",I=D[3])}return{color:i,opacity:I??1}}var er=1e-4;function sr(i){return i<er&&i>-er}function m(i){return _(i*1e3)/1e3}function Z(i){return _(i*1e4)/1e4}function Ir(i){return _(i*10)/10}function fr(i){return"matrix("+m(i[0])+","+m(i[1])+","+m(i[2])+","+m(i[3])+","+Z(i[4])+","+Z(i[5])+")"}var mr={left:"start",right:"end",center:"middle",middle:"middle"};function vr(i,I,D){return D==="top"?i+=I/2:D==="bottom"&&(i-=I/2),i}function xr(i){return i&&(i.shadowBlur||i.shadowOffsetX||i.shadowOffsetY)}function G(i){var I=i.style,D=i.getGlobalScale();return[I.shadowColor,(I.shadowBlur||0).toFixed(2),(I.shadowOffsetX||0).toFixed(2),(I.shadowOffsetY||0).toFixed(2),D[0],D[1]].join(",")}function g(i){var I=[];if(i)for(var D=0;D<i.length;D++){var n=i[D];I.push(n.id)}return I.join(",")}function U(i){return i&&!!i.image}function M(i){return i&&!!i.svgElement}function k(i){return U(i)||M(i)}function E(i){return i.type==="linear"}function $(i){return i.type==="radial"}function K(i){return i&&(i.type==="linear"||i.type==="radial")}function w(i){return"url(#"+i+")"}function Y(i){var I=i.getGlobalScale(),D=Math.max(I[0],I[1]);return Math.max(Math.ceil(Math.log(D)/Math.log(10)),1)}function q(i){var I=i.x||0,D=i.y||0,n=(i.rotation||0)*c.I3,s=(0,c.pD)(i.scaleX,1),o=(0,c.pD)(i.scaleY,1),l=i.skewX||0,d=i.skewY||0,x=[];return(I||D)&&x.push("translate("+I+"px,"+D+"px)"),n&&x.push("rotate("+n+")"),(s!==1||o!==1)&&x.push("scale("+s+","+o+")"),(l||d)&&x.push("skew("+_(l*c.I3)+"deg, "+_(d*c.I3)+"deg)"),x.join(" ")}var rr=function(){return ir.Z.hasGlobalWindow&&(0,c.mf)(window.btoa)?function(i){return window.btoa(unescape(encodeURIComponent(i)))}:typeof Buffer<"u"?function(i){return Buffer.from(i).toString("base64")}:function(i){return null}}()},14929:(jr,dr,P)=>{P.d(dr,{Z:()=>D,G:()=>rr});var c=P(33051),F=P(62288);function ir(n){return document.createTextNode(n)}function _(n){return document.createComment(n)}function J(n,s,o){n.insertBefore(s,o)}function er(n,s){n.removeChild(s)}function sr(n,s){n.appendChild(s)}function m(n){return n.parentNode}function Z(n){return n.nextSibling}function Ir(n){return n.tagName}function fr(n,s){n.textContent=s}function mr(n){return n.textContent}function vr(n){return n.nodeType===1}function xr(n){return n.nodeType===3}function G(n){return n.nodeType===8}var g=58,U=120,M=(0,F.Wm)("","");function k(n){return n===void 0}function E(n){return n!==void 0}function $(n,s,o){for(var l={},d=s;d<=o;++d){var x=n[d].key;x!==void 0&&(l[x]=d)}return l}function K(n,s){var o=n.key===s.key,l=n.tag===s.tag;return l&&o}function w(n){var s,o=n.children,l=n.tag;if(E(l)){var d=n.elm=(0,F.az)(l);if(rr(M,n),(0,c.kJ)(o))for(s=0;s<o.length;++s){var x=o[s];x!=null&&sr(d,w(x))}else E(n.text)&&!(0,c.Kn)(n.text)&&sr(d,ir(n.text))}else n.elm=ir(n.text);return n.elm}function Y(n,s,o,l,d){for(;l<=d;++l){var x=o[l];x!=null&&J(n,w(x),s)}}function q(n,s,o,l){for(;o<=l;++o){var d=s[o];if(d!=null)if(E(d.tag)){var x=m(d.elm);er(x,d.elm)}else er(n,d.elm)}}function rr(n,s){var o,l=s.elm,d=n&&n.attrs||{},x=s.attrs||{};if(d!==x){for(o in x){var b=x[o],V=d[o];V!==b&&(b===!0?l.setAttribute(o,""):b===!1?l.removeAttribute(o):o.charCodeAt(0)!==U?l.setAttribute(o,b):o==="xmlns:xlink"||o==="xmlns"?l.setAttributeNS(F.rv,o,b):o.charCodeAt(3)===g?l.setAttributeNS(F.C5,o,b):o.charCodeAt(5)===g?l.setAttributeNS(F.ar,o,b):l.setAttribute(o,b))}for(o in d)o in x||l.removeAttribute(o)}}function i(n,s,o){for(var l=0,d=0,x=s.length-1,b=s[0],V=s[x],tr=o.length-1,X=o[0],nr=o[tr],pr,Sr,yr,Or;l<=x&&d<=tr;)b==null?b=s[++l]:V==null?V=s[--x]:X==null?X=o[++d]:nr==null?nr=o[--tr]:K(b,X)?(I(b,X),b=s[++l],X=o[++d]):K(V,nr)?(I(V,nr),V=s[--x],nr=o[--tr]):K(b,nr)?(I(b,nr),J(n,b.elm,Z(V.elm)),b=s[++l],nr=o[--tr]):K(V,X)?(I(V,X),J(n,V.elm,b.elm),V=s[--x],X=o[++d]):(k(pr)&&(pr=$(s,l,x)),Sr=pr[X.key],k(Sr)?J(n,w(X),b.elm):(yr=s[Sr],yr.tag!==X.tag?J(n,w(X),b.elm):(I(yr,X),s[Sr]=void 0,J(n,yr.elm,b.elm))),X=o[++d]);(l<=x||d<=tr)&&(l>x?(Or=o[tr+1]==null?null:o[tr+1].elm,Y(n,Or,o,d,tr)):q(n,s,l,x))}function I(n,s){var o=s.elm=n.elm,l=n.children,d=s.children;n!==s&&(rr(n,s),k(s.text)?E(l)&&E(d)?l!==d&&i(o,l,d):E(d)?(E(n.text)&&fr(o,""),Y(o,null,d,0,d.length-1)):E(l)?q(o,l,0,l.length-1):E(n.text)&&fr(o,""):n.text!==s.text&&(E(l)&&q(o,l,0,l.length-1),fr(o,s.text)))}function D(n,s){if(K(n,s))I(n,s);else{var o=n.elm,l=m(o);w(s),l!==null&&(J(l,s.elm,Z(o)),q(l,[n],0,0))}return s}}}]);