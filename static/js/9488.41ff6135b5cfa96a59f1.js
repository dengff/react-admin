"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[9488],{76069:(et,H,p)=>{p.d(H,{Z:()=>U,h:()=>S});var W=p(70655),R=p(23510),c=p(22795),q=p(95622);function S(){return new Date().getTime()}var $=function(N){(0,W.ZT)(E,N);function E(f){var v=N.call(this)||this;return v._running=!1,v._time=0,v._pausedTime=0,v._pauseStart=0,v._paused=!1,f=f||{},v.stage=f.stage||{},v}return E.prototype.addClip=function(f){f.animation&&this.removeClip(f),this._head?(this._tail.next=f,f.prev=this._tail,f.next=null,this._tail=f):this._head=this._tail=f,f.animation=this},E.prototype.addAnimator=function(f){f.animation=this;var v=f.getClip();v&&this.addClip(v)},E.prototype.removeClip=function(f){if(f.animation){var v=f.prev,B=f.next;v?v.next=B:this._head=B,B?B.prev=v:this._tail=v,f.next=f.prev=f.animation=null}},E.prototype.removeAnimator=function(f){var v=f.getClip();v&&this.removeClip(v),f.animation=null},E.prototype.update=function(f){for(var v=S()-this._pausedTime,B=v-this._time,A=this._head;A;){var P=A.next,g=A.step(v,B);g&&(A.ondestroy(),this.removeClip(A)),A=P}this._time=v,f||(this.trigger("frame",B),this.stage.update&&this.stage.update())},E.prototype._startLoop=function(){var f=this;this._running=!0;function v(){f._running&&((0,c.Z)(v),!f._paused&&f.update())}(0,c.Z)(v)},E.prototype.start=function(){this._running||(this._time=S(),this._pausedTime=0,this._startLoop())},E.prototype.stop=function(){this._running=!1},E.prototype.pause=function(){this._paused||(this._pauseStart=S(),this._paused=!0)},E.prototype.resume=function(){this._paused&&(this._pausedTime+=S()-this._pauseStart,this._paused=!1)},E.prototype.clear=function(){for(var f=this._head;f;){var v=f.next;f.prev=f.next=f.animation=null,f=v}this._head=this._tail=null},E.prototype.isFinished=function(){return this._head==null},E.prototype.animate=function(f,v){v=v||{},this.start();var B=new q.Z(f,v.loop);return this.addAnimator(B),B},E}(R.Z);const U=$},95622:(et,H,p)=>{p.d(H,{V:()=>y,Z:()=>z});var W={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return .5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return t===0?0:Math.pow(1024,t-1)},exponentialOut:function(t){return t===1?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1,r=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,e=r/4):e=r*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)))},elasticOut:function(t){var e,i=.1,r=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,e=r/4):e=r*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/r)+1)},elasticInOut:function(t){var e,i=.1,r=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,e=r/4):e=r*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-W.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?W.bounceIn(t*2)*.5:W.bounceOut(t*2-1)*.5+.5}};const R=W;var c=p(33051),q=p(75188),S=function(){function t(e){this._inited=!1,this._startTime=0,this._pausedTime=0,this._paused=!1,this._life=e.life||1e3,this._delay=e.delay||0,this.loop=e.loop||!1,this.onframe=e.onframe||c.ZT,this.ondestroy=e.ondestroy||c.ZT,this.onrestart=e.onrestart||c.ZT,e.easing&&this.setEasing(e.easing)}return t.prototype.step=function(e,i){if(this._inited||(this._startTime=e+this._delay,this._inited=!0),this._paused){this._pausedTime+=i;return}var r=this._life,n=e-this._startTime-this._pausedTime,a=n/r;a<0&&(a=0),a=Math.min(a,1);var o=this.easingFunc,s=o?o(a):a;if(this.onframe(s),a===1)if(this.loop){var _=n%r;this._startTime=e-_,this._pausedTime=0,this.onrestart()}else return!0;return!1},t.prototype.pause=function(){this._paused=!0},t.prototype.resume=function(){this._paused=!1},t.prototype.setEasing=function(e){this.easing=e,this.easingFunc=(0,c.mf)(e)?e:R[e]||(0,q.H)(e)},t}();const $=S;var U=p(21092),N=p(24839),E=Array.prototype.slice;function f(t,e,i){return(e-t)*i+t}function v(t,e,i,r){for(var n=e.length,a=0;a<n;a++)t[a]=f(e[a],i[a],r);return t}function B(t,e,i,r){for(var n=e.length,a=n&&e[0].length,o=0;o<n;o++){t[o]||(t[o]=[]);for(var s=0;s<a;s++)t[o][s]=f(e[o][s],i[o][s],r)}return t}function A(t,e,i,r){for(var n=e.length,a=0;a<n;a++)t[a]=e[a]+i[a]*r;return t}function P(t,e,i,r){for(var n=e.length,a=n&&e[0].length,o=0;o<n;o++){t[o]||(t[o]=[]);for(var s=0;s<a;s++)t[o][s]=e[o][s]+i[o][s]*r}return t}function g(t,e){for(var i=t.length,r=e.length,n=i>r?e:t,a=Math.min(i,r),o=n[a-1]||{color:[0,0,0,0],offset:0},s=a;s<Math.max(i,r);s++)n.push({offset:o.offset,color:o.color.slice()})}function d(t,e,i){var r=t,n=e;if(!(!r.push||!n.push)){var a=r.length,o=n.length;if(a!==o){var s=a>o;if(s)r.length=o;else for(var _=a;_<o;_++)r.push(i===1?n[_]:E.call(n[_]))}for(var T=r[0]&&r[0].length,_=0;_<r.length;_++)if(i===1)isNaN(r[_])&&(r[_]=n[_]);else for(var h=0;h<T;h++)isNaN(r[_][h])&&(r[_][h]=n[_][h])}}function y(t){if((0,c.zG)(t)){var e=t.length;if((0,c.zG)(t[0])){for(var i=[],r=0;r<e;r++)i.push(E.call(t[r]));return i}return E.call(t)}return t}function l(t){return t[0]=Math.floor(t[0])||0,t[1]=Math.floor(t[1])||0,t[2]=Math.floor(t[2])||0,t[3]=t[3]==null?1:t[3],"rgba("+t.join(",")+")"}function u(t){return(0,c.zG)(t&&t[0])?2:1}var C=0,Y=1,G=2,X=3,m=4,I=5,j=6;function Q(t){return t===m||t===I}function L(t){return t===Y||t===G}var Z=[0,0,0,0],K=function(){function t(e){this.keyframes=[],this.discrete=!1,this._invalid=!1,this._needsSort=!1,this._lastFr=0,this._lastFrP=0,this.propName=e}return t.prototype.isFinished=function(){return this._finished},t.prototype.setFinished=function(){this._finished=!0,this._additiveTrack&&this._additiveTrack.setFinished()},t.prototype.needsAnimate=function(){return this.keyframes.length>=1},t.prototype.getAdditiveTrack=function(){return this._additiveTrack},t.prototype.addKeyframe=function(e,i,r){this._needsSort=!0;var n=this.keyframes,a=n.length,o=!1,s=j,_=i;if((0,c.zG)(i)){var T=u(i);s=T,(T===1&&!(0,c.hj)(i[0])||T===2&&!(0,c.hj)(i[0][0]))&&(o=!0)}else if((0,c.hj)(i)&&!(0,c.Bu)(i))s=C;else if((0,c.HD)(i))if(!isNaN(+i))s=C;else{var h=U.Qc(i);h&&(_=h,s=X)}else if((0,c.Qq)(i)){var w=(0,c.l7)({},_);w.colorStops=(0,c.UI)(i.colorStops,function(x){return{offset:x.offset,color:U.Qc(x.color)}}),(0,N.I1)(i)?s=m:(0,N.gO)(i)&&(s=I),_=w}a===0?this.valType=s:(s!==this.valType||s===j)&&(o=!0),this.discrete=this.discrete||o;var D={time:e,value:_,rawValue:i,percent:0};return r&&(D.easing=r,D.easingFunc=(0,c.mf)(r)?r:R[r]||(0,q.H)(r)),n.push(D),D},t.prototype.prepare=function(e,i){var r=this.keyframes;this._needsSort&&r.sort(function(V,b){return V.time-b.time});for(var n=this.valType,a=r.length,o=r[a-1],s=this.discrete,_=L(n),T=Q(n),h=0;h<a;h++){var w=r[h],D=w.value,x=o.value;w.percent=w.time/e,s||(_&&h!==a-1?d(D,x,n):T&&g(D.colorStops,x.colorStops))}if(!s&&n!==I&&i&&this.needsAnimate()&&i.needsAnimate()&&n===i.valType&&!i._finished){this._additiveTrack=i;for(var M=r[0].value,h=0;h<a;h++)n===C?r[h].additiveValue=r[h].value-M:n===X?r[h].additiveValue=A([],r[h].value,M,-1):L(n)&&(r[h].additiveValue=n===Y?A([],r[h].value,M,-1):P([],r[h].value,M,-1))}},t.prototype.step=function(e,i){if(!this._finished){this._additiveTrack&&this._additiveTrack._finished&&(this._additiveTrack=null);var r=this._additiveTrack!=null,n=r?"additiveValue":"value",a=this.valType,o=this.keyframes,s=o.length,_=this.propName,T=a===X,h,w=this._lastFr,D=Math.min,x,M;if(s===1)x=M=o[0];else{if(i<0)h=0;else if(i<this._lastFrP){var V=D(w+1,s-1);for(h=V;h>=0&&!(o[h].percent<=i);h--);h=D(h,s-2)}else{for(h=w;h<s&&!(o[h].percent>i);h++);h=D(h-1,s-2)}M=o[h+1],x=o[h]}if(x&&M){this._lastFr=h,this._lastFrP=i;var b=M.percent-x.percent,F=b===0?1:D((i-x.percent)/b,1);M.easingFunc&&(F=M.easingFunc(F));var k=r?this._additiveValue:T?Z:e[_];if((L(a)||T)&&!k&&(k=this._additiveValue=[]),this.discrete)e[_]=F<1?x.rawValue:M.rawValue;else if(L(a))a===Y?v(k,x[n],M[n],F):B(k,x[n],M[n],F);else if(Q(a)){var tt=x[n],J=M[n],it=a===m;e[_]={type:it?"linear":"radial",x:f(tt.x,J.x,F),y:f(tt.y,J.y,F),colorStops:(0,c.UI)(tt.colorStops,function(nt,st){var at=J.colorStops[st];return{offset:f(nt.offset,at.offset,F),color:l(v([],nt.color,at.color,F))}}),global:J.global},it?(e[_].x2=f(tt.x2,J.x2,F),e[_].y2=f(tt.y2,J.y2,F)):e[_].r=f(tt.r,J.r,F)}else if(T)v(k,x[n],M[n],F),r||(e[_]=l(k));else{var rt=f(x[n],M[n],F);r?this._additiveValue=rt:e[_]=rt}r&&this._addToTarget(e)}}},t.prototype._addToTarget=function(e){var i=this.valType,r=this.propName,n=this._additiveValue;i===C?e[r]=e[r]+n:i===X?(U.Qc(e[r],Z),A(Z,Z,n,1),e[r]=l(Z)):i===Y?A(e[r],e[r],n,1):i===G&&P(e[r],e[r],n,1)},t}(),O=function(){function t(e,i,r,n){if(this._tracks={},this._trackKeys=[],this._maxTime=0,this._started=0,this._clip=null,this._target=e,this._loop=i,i&&n){(0,c.H)("Can' use additive animation on looped animation.");return}this._additiveAnimators=n,this._allowDiscrete=r}return t.prototype.getMaxTime=function(){return this._maxTime},t.prototype.getDelay=function(){return this._delay},t.prototype.getLoop=function(){return this._loop},t.prototype.getTarget=function(){return this._target},t.prototype.changeTarget=function(e){this._target=e},t.prototype.when=function(e,i,r){return this.whenWithKeys(e,i,(0,c.XP)(i),r)},t.prototype.whenWithKeys=function(e,i,r,n){for(var a=this._tracks,o=0;o<r.length;o++){var s=r[o],_=a[s];if(!_){_=a[s]=new K(s);var T=void 0,h=this._getAdditiveTrack(s);if(h){var w=h.keyframes,D=w[w.length-1];T=D&&D.value,h.valType===X&&T&&(T=l(T))}else T=this._target[s];if(T==null)continue;e>0&&_.addKeyframe(0,y(T),n),this._trackKeys.push(s)}_.addKeyframe(e,y(i[s]),n)}return this._maxTime=Math.max(this._maxTime,e),this},t.prototype.pause=function(){this._clip.pause(),this._paused=!0},t.prototype.resume=function(){this._clip.resume(),this._paused=!1},t.prototype.isPaused=function(){return!!this._paused},t.prototype.duration=function(e){return this._maxTime=e,this._force=!0,this},t.prototype._doneCallback=function(){this._setTracksFinished(),this._clip=null;var e=this._doneCbs;if(e)for(var i=e.length,r=0;r<i;r++)e[r].call(this)},t.prototype._abortedCallback=function(){this._setTracksFinished();var e=this.animation,i=this._abortedCbs;if(e&&e.removeClip(this._clip),this._clip=null,i)for(var r=0;r<i.length;r++)i[r].call(this)},t.prototype._setTracksFinished=function(){for(var e=this._tracks,i=this._trackKeys,r=0;r<i.length;r++)e[i[r]].setFinished()},t.prototype._getAdditiveTrack=function(e){var i,r=this._additiveAnimators;if(r)for(var n=0;n<r.length;n++){var a=r[n].getTrack(e);a&&(i=a)}return i},t.prototype.start=function(e){if(!(this._started>0)){this._started=1;for(var i=this,r=[],n=this._maxTime||0,a=0;a<this._trackKeys.length;a++){var o=this._trackKeys[a],s=this._tracks[o],_=this._getAdditiveTrack(o),T=s.keyframes,h=T.length;if(s.prepare(n,_),s.needsAnimate())if(!this._allowDiscrete&&s.discrete){var w=T[h-1];w&&(i._target[s.propName]=w.rawValue),s.setFinished()}else r.push(s)}if(r.length||this._force){var D=new $({life:n,loop:this._loop,delay:this._delay||0,onframe:function(x){i._started=2;var M=i._additiveAnimators;if(M){for(var V=!1,b=0;b<M.length;b++)if(M[b]._clip){V=!0;break}V||(i._additiveAnimators=null)}for(var b=0;b<r.length;b++)r[b].step(i._target,x);var F=i._onframeCbs;if(F)for(var b=0;b<F.length;b++)F[b](i._target,x)},ondestroy:function(){i._doneCallback()}});this._clip=D,this.animation&&this.animation.addClip(D),e&&D.setEasing(e)}else this._doneCallback();return this}},t.prototype.stop=function(e){if(this._clip){var i=this._clip;e&&i.onframe(1),this._abortedCallback()}},t.prototype.delay=function(e){return this._delay=e,this},t.prototype.during=function(e){return e&&(this._onframeCbs||(this._onframeCbs=[]),this._onframeCbs.push(e)),this},t.prototype.done=function(e){return e&&(this._doneCbs||(this._doneCbs=[]),this._doneCbs.push(e)),this},t.prototype.aborted=function(e){return e&&(this._abortedCbs||(this._abortedCbs=[]),this._abortedCbs.push(e)),this},t.prototype.getClip=function(){return this._clip},t.prototype.getTrack=function(e){return this._tracks[e]},t.prototype.getTracks=function(){var e=this;return(0,c.UI)(this._trackKeys,function(i){return e._tracks[i]})},t.prototype.stopTracks=function(e,i){if(!e.length||!this._clip)return!0;for(var r=this._tracks,n=this._trackKeys,a=0;a<e.length;a++){var o=r[e[a]];o&&!o.isFinished()&&(i?o.step(this._target,1):this._started===1&&o.step(this._target,0),o.setFinished())}for(var s=!0,a=0;a<n.length;a++)if(!r[n[a]].isFinished()){s=!1;break}return s&&this._abortedCallback(),s},t.prototype.saveTo=function(e,i,r){if(e){i=i||this._trackKeys;for(var n=0;n<i.length;n++){var a=i[n],o=this._tracks[a];if(!(!o||o.isFinished())){var s=o.keyframes,_=s[r?0:s.length-1];_&&(e[a]=y(_.rawValue))}}}},t.prototype.__changeFinalValue=function(e,i){i=i||(0,c.XP)(e);for(var r=0;r<i.length;r++){var n=i[r],a=this._tracks[n];if(a){var o=a.keyframes;if(o.length>1){var s=o.pop();a.addKeyframe(s.time,e[n]),a.prepare(this._maxTime,a.getAdditiveTrack())}}}},t}();const z=O},75188:(et,H,p)=>{p.d(H,{H:()=>q});var W=p(29023),R=p(33051),c=/cubic-bezier\(([0-9,\.e ]+)\)/;function q(S){var $=S&&c.exec(S);if($){var U=$[1].split(","),N=+(0,R.fy)(U[0]),E=+(0,R.fy)(U[1]),f=+(0,R.fy)(U[2]),v=+(0,R.fy)(U[3]);if(isNaN(N+E+f+v))return;var B=[];return function(A){return A<=0?0:A>=1?1:(0,W.kD)(0,N,f,1,A,B)&&(0,W.af)(0,E,v,1,B[0])}}}},22795:(et,H,p)=>{p.d(H,{Z:()=>c});var W=p(66387),R;R=W.Z.hasGlobalWindow&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(q){return setTimeout(q,16)};const c=R},66642:(et,H,p)=>{p.d(H,{Z:()=>B});var W=p(70655),R=p(33051),c=p(4990),q=p(23510),S=p(5787),$=p(97772),U=p(60479),N=p(14414),E=p(23132);function f(A,P,g){var d=E.qW.createCanvas(),y=P.getWidth(),l=P.getHeight(),u=d.style;return u&&(u.position="absolute",u.left="0",u.top="0",u.width=y+"px",u.height=l+"px",d.setAttribute("data-zr-dom-id",A)),d.width=y*g,d.height=l*g,d}var v=function(A){(0,W.ZT)(P,A);function P(g,d,y){var l=A.call(this)||this;l.motionBlur=!1,l.lastFrameAlpha=.7,l.dpr=1,l.virtual=!1,l.config={},l.incremental=!1,l.zlevel=0,l.maxRepaintRectCount=5,l.__dirty=!0,l.__firstTimePaint=!0,l.__used=!1,l.__drawIndex=0,l.__startIndex=0,l.__endIndex=0,l.__prevStartIndex=null,l.__prevEndIndex=null;var u;y=y||c.KL,typeof g=="string"?u=f(g,d,y):R.Kn(g)&&(u=g,g=u.id),l.id=g,l.dom=u;var C=u.style;return C&&(R.$j(u),u.onselectstart=function(){return!1},C.padding="0",C.margin="0",C.borderWidth="0"),l.painter=d,l.dpr=y,l}return P.prototype.getElementCount=function(){return this.__endIndex-this.__startIndex},P.prototype.afterBrush=function(){this.__prevStartIndex=this.__startIndex,this.__prevEndIndex=this.__endIndex},P.prototype.initContext=function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},P.prototype.setUnpainted=function(){this.__firstTimePaint=!0},P.prototype.createBackBuffer=function(){var g=this.dpr;this.domBack=f("back-"+this.id,this.painter,g),this.ctxBack=this.domBack.getContext("2d"),g!==1&&this.ctxBack.scale(g,g)},P.prototype.createRepaintRects=function(g,d,y,l){if(this.__firstTimePaint)return this.__firstTimePaint=!1,null;var u=[],C=this.maxRepaintRectCount,Y=!1,G=new U.Z(0,0,0,0);function X(O){if(!(!O.isFinite()||O.isZero()))if(u.length===0){var z=new U.Z(0,0,0,0);z.copy(O),u.push(z)}else{for(var t=!1,e=1/0,i=0,r=0;r<u.length;++r){var n=u[r];if(n.intersect(O)){var a=new U.Z(0,0,0,0);a.copy(n),a.union(O),u[r]=a,t=!0;break}else if(Y){G.copy(O),G.union(n);var o=O.width*O.height,s=n.width*n.height,_=G.width*G.height,T=_-o-s;T<e&&(e=T,i=r)}}if(Y&&(u[i].union(O),t=!0),!t){var z=new U.Z(0,0,0,0);z.copy(O),u.push(z)}Y||(Y=u.length>=C)}}for(var m=this.__startIndex;m<this.__endIndex;++m){var I=g[m];if(I){var j=I.shouldBePainted(y,l,!0,!0),Q=I.__isRendered&&(I.__dirty&N.YV||!j)?I.getPrevPaintRect():null;Q&&X(Q);var L=j&&(I.__dirty&N.YV||!I.__isRendered)?I.getPaintRect():null;L&&X(L)}}for(var m=this.__prevStartIndex;m<this.__prevEndIndex;++m){var I=d[m],j=I.shouldBePainted(y,l,!0,!0);if(I&&(!j||!I.__zr)&&I.__isRendered){var Q=I.getPrevPaintRect();Q&&X(Q)}}var Z;do{Z=!1;for(var m=0;m<u.length;){if(u[m].isZero()){u.splice(m,1);continue}for(var K=m+1;K<u.length;)u[m].intersect(u[K])?(Z=!0,u[m].union(u[K]),u.splice(K,1)):K++;m++}}while(Z);return this._paintRects=u,u},P.prototype.debugGetPaintRects=function(){return(this._paintRects||[]).slice()},P.prototype.resize=function(g,d){var y=this.dpr,l=this.dom,u=l.style,C=this.domBack;u&&(u.width=g+"px",u.height=d+"px"),l.width=g*y,l.height=d*y,C&&(C.width=g*y,C.height=d*y,y!==1&&this.ctxBack.scale(y,y))},P.prototype.clear=function(g,d,y){var l=this.dom,u=this.ctx,C=l.width,Y=l.height;d=d||this.clearColor;var G=this.motionBlur&&!g,X=this.lastFrameAlpha,m=this.dpr,I=this;G&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(l,0,0,C/m,Y/m));var j=this.domBack;function Q(L,Z,K,O){if(u.clearRect(L,Z,K,O),d&&d!=="transparent"){var z=void 0;if(R.Qq(d)){var t=d.global||d.__width===K&&d.__height===O;z=t&&d.__canvasGradient||(0,S.ZF)(u,d,{x:0,y:0,width:K,height:O}),d.__canvasGradient=z,d.__width=K,d.__height=O}else R.dL(d)&&(d.scaleX=d.scaleX||m,d.scaleY=d.scaleY||m,z=(0,$.RZ)(u,d,{dirty:function(){I.setUnpainted(),I.__painter.refresh()}}));u.save(),u.fillStyle=z||d,u.fillRect(L,Z,K,O),u.restore()}G&&(u.save(),u.globalAlpha=X,u.drawImage(j,L,Z,K,O),u.restore())}!y||G?Q(0,0,C,Y):y.length&&R.S6(y,function(L){Q(L.x*m,L.y*m,L.width*m,L.height*m)})},P}(q.Z);const B=v}}]);
