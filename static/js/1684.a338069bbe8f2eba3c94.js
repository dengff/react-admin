"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[1684],{21684:(er,X,P)=>{P.d(X,{Z:()=>V});var A=P(4990),U=P(33051),Z=P(66642),S=P(22795),W=P(66387),k=P(97772),z=P(14414),E=P(5787),g=1e5,y=314159,R=.01,b=.001;function I(v){return v?v.__builtin__?!0:!(typeof v.resize!="function"||typeof v.refresh!="function"):!1}function M(v,e){var n=document.createElement("div");return n.style.cssText=["position:relative","width:"+v+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}var H=function(){function v(e,n,a,o){this.type="canvas",this._zlevelList=[],this._prevDisplayList=[],this._layers={},this._layerConfig={},this._needsManuallyCompositing=!1,this.type="canvas";var h=!e.nodeName||e.nodeName.toUpperCase()==="CANVAS";this._opts=a=U.l7({},a||{}),this.dpr=a.devicePixelRatio||A.KL,this._singleCanvas=h,this.root=e;var u=e.style;u&&(U.$j(e),e.innerHTML=""),this.storage=n;var D=this._zlevelList;this._prevDisplayList=[];var L=this._layers;if(h){var C=e,m=C.width,Y=C.height;a.width!=null&&(m=a.width),a.height!=null&&(Y=a.height),this.dpr=a.devicePixelRatio||1,C.width=m*this.dpr,C.height=Y*this.dpr,this._width=m,this._height=Y;var K=new Z.Z(C,this,this.dpr);K.__builtin__=!0,K.initContext(),L[y]=K,K.zlevel=y,D.push(y),this._domRoot=e}else{this._width=(0,E.ap)(e,0,a),this._height=(0,E.ap)(e,1,a);var w=this._domRoot=M(this._width,this._height);e.appendChild(w)}}return v.prototype.getType=function(){return"canvas"},v.prototype.isSingleCanvas=function(){return this._singleCanvas},v.prototype.getViewportRoot=function(){return this._domRoot},v.prototype.getViewportRootOffset=function(){var e=this.getViewportRoot();if(e)return{offsetLeft:e.offsetLeft||0,offsetTop:e.offsetTop||0}},v.prototype.refresh=function(e){var n=this.storage.getDisplayList(!0),a=this._prevDisplayList,o=this._zlevelList;this._redrawId=Math.random(),this._paintList(n,a,e,this._redrawId);for(var h=0;h<o.length;h++){var u=o[h],D=this._layers[u];if(!D.__builtin__&&D.refresh){var L=h===0?this._backgroundColor:null;D.refresh(L)}}return this._opts.useDirtyRect&&(this._prevDisplayList=n.slice()),this},v.prototype.refreshHover=function(){this._paintHoverList(this.storage.getDisplayList(!1))},v.prototype._paintHoverList=function(e){var n=e.length,a=this._hoverlayer;if(a&&a.clear(),!!n){for(var o={inHover:!0,viewWidth:this._width,viewHeight:this._height},h,u=0;u<n;u++){var D=e[u];D.__inHover&&(a||(a=this._hoverlayer=this.getLayer(g)),h||(h=a.ctx,h.save()),(0,k.Dm)(h,D,o,u===n-1))}h&&h.restore()}},v.prototype.getHoverLayer=function(){return this.getLayer(g)},v.prototype.paintOne=function(e,n){(0,k.RV)(e,n)},v.prototype._paintList=function(e,n,a,o){if(this._redrawId===o){a=a||!1,this._updateLayerStatus(e);var h=this._doPaintList(e,n,a),u=h.finished,D=h.needsRefreshHover;if(this._needsManuallyCompositing&&this._compositeManually(),D&&this._paintHoverList(e),u)this.eachLayer(function(w){w.afterBrush&&w.afterBrush()});else{var L=this;(0,S.Z)(function(){L._paintList(e,n,a,o)})}}},v.prototype._compositeManually=function(){var e=this.getLayer(y).ctx,n=this._domRoot.width,a=this._domRoot.height;e.clearRect(0,0,n,a),this.eachBuiltinLayer(function(o){o.virtual&&e.drawImage(o.dom,0,0,n,a)})},v.prototype._doPaintList=function(e,n,a){for(var o=this,h=[],u=this._opts.useDirtyRect,D=0;D<this._zlevelList.length;D++){var L=this._zlevelList[D],w=this._layers[L];w.__builtin__&&w!==this._hoverlayer&&(w.__dirty||a)&&h.push(w)}for(var C=!0,m=!1,Y=function(G){var O=h[G],j=O.ctx,B=u&&O.createRepaintRects(e,n,K._width,K._height),N=a?O.__startIndex:O.__drawIndex,q=!a&&O.incremental&&Date.now,$=q&&Date.now(),rr=O.zlevel===K._zlevelList[0]?K._backgroundColor:null;if(O.__startIndex===O.__endIndex)O.clear(!1,rr,B);else if(N===O.__startIndex){var i=e[N];(!i.incremental||!i.notClear||a)&&O.clear(!1,rr,B)}N===-1&&(console.error("For some unknown reason. drawIndex is -1"),N=O.__startIndex);var r,t=function(d){var p={inHover:!1,allClipped:!1,prevEl:null,viewWidth:o._width,viewHeight:o._height};for(r=N;r<O.__endIndex;r++){var l=e[r];if(l.__inHover&&(m=!0),o._doPaintEl(l,O,u,d,p,r===O.__endIndex-1),q){var T=Date.now()-$;if(T>15)break}}p.prevElClipPaths&&j.restore()};if(B)if(B.length===0)r=O.__endIndex;else for(var f=K.dpr,_=0;_<B.length;++_){var s=B[_];j.save(),j.beginPath(),j.rect(s.x*f,s.y*f,s.width*f,s.height*f),j.clip(),t(s),j.restore()}else j.save(),t(),j.restore();O.__drawIndex=r,O.__drawIndex<O.__endIndex&&(C=!1)},K=this,J=0;J<h.length;J++)Y(J);return W.Z.wxa&&U.S6(this._layers,function(G){G&&G.ctx&&G.ctx.draw&&G.ctx.draw()}),{finished:C,needsRefreshHover:m}},v.prototype._doPaintEl=function(e,n,a,o,h,u){var D=n.ctx;if(a){var L=e.getPaintRect();(!o||L&&L.intersect(o))&&((0,k.Dm)(D,e,h,u),e.setPrevPaintRect(L))}else(0,k.Dm)(D,e,h,u)},v.prototype.getLayer=function(e,n){this._singleCanvas&&!this._needsManuallyCompositing&&(e=y);var a=this._layers[e];return a||(a=new Z.Z("zr_"+e,this,this.dpr),a.zlevel=e,a.__builtin__=!0,this._layerConfig[e]?U.TS(a,this._layerConfig[e],!0):this._layerConfig[e-R]&&U.TS(a,this._layerConfig[e-R],!0),n&&(a.virtual=n),this.insertLayer(e,a),a.initContext()),a},v.prototype.insertLayer=function(e,n){var a=this._layers,o=this._zlevelList,h=o.length,u=this._domRoot,D=null,L=-1;if(!a[e]&&I(n)){if(h>0&&e>o[0]){for(L=0;L<h-1&&!(o[L]<e&&o[L+1]>e);L++);D=a[o[L]]}if(o.splice(L+1,0,e),a[e]=n,!n.virtual)if(D){var w=D.dom;w.nextSibling?u.insertBefore(n.dom,w.nextSibling):u.appendChild(n.dom)}else u.firstChild?u.insertBefore(n.dom,u.firstChild):u.appendChild(n.dom);n.__painter=this}},v.prototype.eachLayer=function(e,n){for(var a=this._zlevelList,o=0;o<a.length;o++){var h=a[o];e.call(n,this._layers[h],h)}},v.prototype.eachBuiltinLayer=function(e,n){for(var a=this._zlevelList,o=0;o<a.length;o++){var h=a[o],u=this._layers[h];u.__builtin__&&e.call(n,u,h)}},v.prototype.eachOtherLayer=function(e,n){for(var a=this._zlevelList,o=0;o<a.length;o++){var h=a[o],u=this._layers[h];u.__builtin__||e.call(n,u,h)}},v.prototype.getLayers=function(){return this._layers},v.prototype._updateLayerStatus=function(e){this.eachBuiltinLayer(function(m,Y){m.__dirty=m.__used=!1});function n(m){h&&(h.__endIndex!==m&&(h.__dirty=!0),h.__endIndex=m)}if(this._singleCanvas)for(var a=1;a<e.length;a++){var o=e[a];if(o.zlevel!==e[a-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}}var h=null,u=0,D,L;for(L=0;L<e.length;L++){var o=e[L],w=o.zlevel,C=void 0;D!==w&&(D=w,u=0),o.incremental?(C=this.getLayer(w+b,this._needsManuallyCompositing),C.incremental=!0,u=1):C=this.getLayer(w+(u>0?R:0),this._needsManuallyCompositing),C.__builtin__||U.H("ZLevel "+w+" has been used by unkown layer "+C.id),C!==h&&(C.__used=!0,C.__startIndex!==L&&(C.__dirty=!0),C.__startIndex=L,C.incremental?C.__drawIndex=-1:C.__drawIndex=L,n(L),h=C),o.__dirty&z.YV&&!o.__inHover&&(C.__dirty=!0,C.incremental&&C.__drawIndex<0&&(C.__drawIndex=L))}n(L),this.eachBuiltinLayer(function(m,Y){!m.__used&&m.getElementCount()>0&&(m.__dirty=!0,m.__startIndex=m.__endIndex=m.__drawIndex=0),m.__dirty&&m.__drawIndex<0&&(m.__drawIndex=m.__startIndex)})},v.prototype.clear=function(){return this.eachBuiltinLayer(this._clearLayer),this},v.prototype._clearLayer=function(e){e.clear()},v.prototype.setBackgroundColor=function(e){this._backgroundColor=e,U.S6(this._layers,function(n){n.setUnpainted()})},v.prototype.configLayer=function(e,n){if(n){var a=this._layerConfig;a[e]?U.TS(a[e],n,!0):a[e]=n;for(var o=0;o<this._zlevelList.length;o++){var h=this._zlevelList[o];if(h===e||h===e+R){var u=this._layers[h];U.TS(u,a[e],!0)}}}},v.prototype.delLayer=function(e){var n=this._layers,a=this._zlevelList,o=n[e];o&&(o.dom.parentNode.removeChild(o.dom),delete n[e],a.splice(U.cq(a,e),1))},v.prototype.resize=function(e,n){if(this._domRoot.style){var a=this._domRoot;a.style.display="none";var o=this._opts,h=this.root;if(e!=null&&(o.width=e),n!=null&&(o.height=n),e=(0,E.ap)(h,0,o),n=(0,E.ap)(h,1,o),a.style.display="",this._width!==e||n!==this._height){a.style.width=e+"px",a.style.height=n+"px";for(var u in this._layers)this._layers.hasOwnProperty(u)&&this._layers[u].resize(e,n);this.refresh(!0)}this._width=e,this._height=n}else{if(e==null||n==null)return;this._width=e,this._height=n,this.getLayer(y).resize(e,n)}return this},v.prototype.clearLayer=function(e){var n=this._layers[e];n&&n.clear()},v.prototype.dispose=function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},v.prototype.getRenderedCanvas=function(e){if(e=e||{},this._singleCanvas&&!this._compositeManually)return this._layers[y].dom;var n=new Z.Z("image",this,e.pixelRatio||this.dpr);n.initContext(),n.clear(!1,e.backgroundColor||this._backgroundColor);var a=n.ctx;if(e.pixelRatio<=this.dpr){this.refresh();var o=n.dom.width,h=n.dom.height;this.eachLayer(function(m){m.__builtin__?a.drawImage(m.dom,0,0,o,h):m.renderToCanvas&&(a.save(),m.renderToCanvas(a),a.restore())})}else for(var u={inHover:!1,viewWidth:this._width,viewHeight:this._height},D=this.storage.getDisplayList(!0),L=0,w=D.length;L<w;L++){var C=D[L];(0,k.Dm)(a,C,u,L===w-1)}return n.dom},v.prototype.getWidth=function(){return this._width},v.prototype.getHeight=function(){return this._height},v}();const V=H},50810:(er,X,P)=>{P.d(X,{a:()=>Z});var A=P(33051);function U(S,W){return!S||S==="solid"||!(W>0)?null:S==="dashed"?[4*W,2*W]:S==="dotted"?[W]:(0,A.hj)(S)?[S]:(0,A.kJ)(S)?S:null}function Z(S){var W=S.style,k=W.lineDash&&W.lineWidth>0&&U(W.lineDash,W.lineWidth),z=W.lineDashOffset;if(k){var E=W.strokeNoScale&&S.getLineScale?S.getLineScale():1;E&&E!==1&&(k=(0,A.UI)(k,function(g){return g/E}),z/=E)}return[k,z]}},97772:(er,X,P)=>{P.d(X,{Dm:()=>$,RV:()=>q,RZ:()=>e});var A=P(7719),U=P(14014),Z=P(8007),S=P(5787),W=P(10712),k=P(44535),z=P(71505),E=P(33051),g=P(50810),y=P(14414),R=P(23132),b=new U.Z(!0);function I(i){var r=i.stroke;return!(r==null||r==="none"||!(i.lineWidth>0))}function M(i){return typeof i=="string"&&i!=="none"}function H(i){var r=i.fill;return r!=null&&r!=="none"}function V(i,r){if(r.fillOpacity!=null&&r.fillOpacity!==1){var t=i.globalAlpha;i.globalAlpha=r.fillOpacity*r.opacity,i.fill(),i.globalAlpha=t}else i.fill()}function v(i,r){if(r.strokeOpacity!=null&&r.strokeOpacity!==1){var t=i.globalAlpha;i.globalAlpha=r.strokeOpacity*r.opacity,i.stroke(),i.globalAlpha=t}else i.stroke()}function e(i,r,t){var f=(0,Z.Gq)(r.image,r.__image,t);if((0,Z.v5)(f)){var _=i.createPattern(f,r.repeat||"repeat");if(typeof DOMMatrix=="function"&&_&&_.setTransform){var s=new DOMMatrix;s.translateSelf(r.x||0,r.y||0),s.rotateSelf(0,0,(r.rotation||0)*E.I3),s.scaleSelf(r.scaleX||1,r.scaleY||1),_.setTransform(s)}return _}}function n(i,r,t,f){var _,s=I(t),d=H(t),p=t.strokePercent,l=p<1,T=!r.path;(!r.silent||l)&&T&&r.createPathProxy();var c=r.path||b,F=r.__dirty;if(!f){var x=t.fill,ir=t.stroke,ar=d&&!!x.colorStops,nr=s&&!!ir.colorStops,_r=d&&!!x.image,vr=s&&!!ir.image,sr=void 0,or=void 0,Q=void 0,fr=void 0,hr=void 0;(ar||nr)&&(hr=r.getBoundingRect()),ar&&(sr=F?(0,S.ZF)(i,x,hr):r.__canvasFillGradient,r.__canvasFillGradient=sr),nr&&(or=F?(0,S.ZF)(i,ir,hr):r.__canvasStrokeGradient,r.__canvasStrokeGradient=or),_r&&(Q=F||!r.__canvasFillPattern?e(i,x,r):r.__canvasFillPattern,r.__canvasFillPattern=Q),vr&&(fr=F||!r.__canvasStrokePattern?e(i,ir,r):r.__canvasStrokePattern,r.__canvasStrokePattern=Q),ar?i.fillStyle=sr:_r&&(Q?i.fillStyle=Q:d=!1),nr?i.strokeStyle=or:vr&&(fr?i.strokeStyle=fr:s=!1)}var lr=r.getGlobalScale();c.setScale(lr[0],lr[1],r.segmentIgnoreThreshold);var tr,ur;i.setLineDash&&t.lineDash&&(_=(0,g.a)(r),tr=_[0],ur=_[1]);var dr=!0;(T||F&y.RH)&&(c.setDPR(i.dpr),l?c.setContext(null):(c.setContext(i),dr=!1),c.reset(),r.buildPath(c,r.shape,f),c.toStatic(),r.pathUpdated()),dr&&c.rebuildPath(i,l?p:1),tr&&(i.setLineDash(tr),i.lineDashOffset=ur),f||(t.strokeFirst?(s&&v(i,t),d&&V(i,t)):(d&&V(i,t),s&&v(i,t))),tr&&i.setLineDash([])}function a(i,r,t){var f=r.__image=(0,Z.Gq)(t.image,r.__image,r,r.onload);if(!(!f||!(0,Z.v5)(f))){var _=t.x||0,s=t.y||0,d=r.getWidth(),p=r.getHeight(),l=f.width/f.height;if(d==null&&p!=null?d=p*l:p==null&&d!=null?p=d/l:d==null&&p==null&&(d=f.width,p=f.height),t.sWidth&&t.sHeight){var T=t.sx||0,c=t.sy||0;i.drawImage(f,T,c,t.sWidth,t.sHeight,_,s,d,p)}else if(t.sx&&t.sy){var T=t.sx,c=t.sy,F=d-T,x=p-c;i.drawImage(f,T,c,F,x,_,s,d,p)}else i.drawImage(f,_,s,d,p)}}function o(i,r,t){var f,_=t.text;if(_!=null&&(_+=""),_){i.font=t.font||R.Uo,i.textAlign=t.textAlign,i.textBaseline=t.textBaseline;var s=void 0,d=void 0;i.setLineDash&&t.lineDash&&(f=(0,g.a)(r),s=f[0],d=f[1]),s&&(i.setLineDash(s),i.lineDashOffset=d),t.strokeFirst?(I(t)&&i.strokeText(_,t.x,t.y),H(t)&&i.fillText(_,t.x,t.y)):(H(t)&&i.fillText(_,t.x,t.y),I(t)&&i.strokeText(_,t.x,t.y)),s&&i.setLineDash([])}}var h=["shadowBlur","shadowOffsetX","shadowOffsetY"],u=[["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]];function D(i,r,t,f,_){var s=!1;if(!f&&(t=t||{},r===t))return!1;if(f||r.opacity!==t.opacity){B(i,_),s=!0;var d=Math.max(Math.min(r.opacity,1),0);i.globalAlpha=isNaN(d)?A.tj.opacity:d}(f||r.blend!==t.blend)&&(s||(B(i,_),s=!0),i.globalCompositeOperation=r.blend||A.tj.blend);for(var p=0;p<h.length;p++){var l=h[p];(f||r[l]!==t[l])&&(s||(B(i,_),s=!0),i[l]=i.dpr*(r[l]||0))}return(f||r.shadowColor!==t.shadowColor)&&(s||(B(i,_),s=!0),i.shadowColor=r.shadowColor||A.tj.shadowColor),s}function L(i,r,t,f,_){var s=N(r,_.inHover),d=f?null:t&&N(t,_.inHover)||{};if(s===d)return!1;var p=D(i,s,d,f,_);if((f||s.fill!==d.fill)&&(p||(B(i,_),p=!0),M(s.fill)&&(i.fillStyle=s.fill)),(f||s.stroke!==d.stroke)&&(p||(B(i,_),p=!0),M(s.stroke)&&(i.strokeStyle=s.stroke)),(f||s.opacity!==d.opacity)&&(p||(B(i,_),p=!0),i.globalAlpha=s.opacity==null?1:s.opacity),r.hasStroke()){var l=s.lineWidth,T=l/(s.strokeNoScale&&r.getLineScale?r.getLineScale():1);i.lineWidth!==T&&(p||(B(i,_),p=!0),i.lineWidth=T)}for(var c=0;c<u.length;c++){var F=u[c],x=F[0];(f||s[x]!==d[x])&&(p||(B(i,_),p=!0),i[x]=s[x]||F[1])}return p}function w(i,r,t,f,_){return D(i,N(r,_.inHover),t&&N(t,_.inHover),f,_)}function C(i,r){var t=r.transform,f=i.dpr||1;t?i.setTransform(f*t[0],f*t[1],f*t[2],f*t[3],f*t[4],f*t[5]):i.setTransform(f,0,0,f,0,0)}function m(i,r,t){for(var f=!1,_=0;_<i.length;_++){var s=i[_];f=f||s.isZeroArea(),C(r,s),r.beginPath(),s.buildPath(r,s.shape),r.clip()}t.allClipped=f}function Y(i,r){return i&&r?i[0]!==r[0]||i[1]!==r[1]||i[2]!==r[2]||i[3]!==r[3]||i[4]!==r[4]||i[5]!==r[5]:!(!i&&!r)}var K=1,J=2,G=3,O=4;function j(i){var r=H(i),t=I(i);return!(i.lineDash||!(+r^+t)||r&&typeof i.fill!="string"||t&&typeof i.stroke!="string"||i.strokePercent<1||i.strokeOpacity<1||i.fillOpacity<1)}function B(i,r){r.batchFill&&i.fill(),r.batchStroke&&i.stroke(),r.batchFill="",r.batchStroke=""}function N(i,r){return r&&i.__hoverStyle||i.style}function q(i,r){$(i,r,{inHover:!1,viewWidth:0,viewHeight:0},!0)}function $(i,r,t,f){var _=r.transform;if(!r.shouldBePainted(t.viewWidth,t.viewHeight,!1,!1)){r.__dirty&=~y.YV,r.__isRendered=!1;return}var s=r.__clipPaths,d=t.prevElClipPaths,p=!1,l=!1;if((!d||(0,S.cF)(s,d))&&(d&&d.length&&(B(i,t),i.restore(),l=p=!0,t.prevElClipPaths=null,t.allClipped=!1,t.prevEl=null),s&&s.length&&(B(i,t),i.save(),m(s,i,t),p=!0),t.prevElClipPaths=s),t.allClipped){r.__isRendered=!1;return}r.beforeBrush&&r.beforeBrush(),r.innerBeforeBrush();var T=t.prevEl;T||(l=p=!0);var c=r instanceof W.ZP&&r.autoBatch&&j(r.style);p||Y(_,T.transform)?(B(i,t),C(i,r)):c||B(i,t);var F=N(r,t.inHover);r instanceof W.ZP?(t.lastDrawType!==K&&(l=!0,t.lastDrawType=K),L(i,r,T,l,t),(!c||!t.batchFill&&!t.batchStroke)&&i.beginPath(),n(i,r,F,c),c&&(t.batchFill=F.fill||"",t.batchStroke=F.stroke||"")):r instanceof z.Z?(t.lastDrawType!==G&&(l=!0,t.lastDrawType=G),L(i,r,T,l,t),o(i,r,F)):r instanceof k.ZP?(t.lastDrawType!==J&&(l=!0,t.lastDrawType=J),w(i,r,T,l,t),a(i,r,F)):r.getTemporalDisplayables&&(t.lastDrawType!==O&&(l=!0,t.lastDrawType=O),rr(i,r,t)),c&&f&&B(i,t),r.innerAfterBrush(),r.afterBrush&&r.afterBrush(),t.prevEl=r,r.__dirty=0,r.__isRendered=!0}function rr(i,r,t){var f=r.getDisplayables(),_=r.getTemporalDisplayables();i.save();var s={prevElClipPaths:null,prevEl:null,allClipped:!1,viewWidth:t.viewWidth,viewHeight:t.viewHeight,inHover:t.inHover},d,p;for(d=r.getCursor(),p=f.length;d<p;d++){var l=f[d];l.beforeBrush&&l.beforeBrush(),l.innerBeforeBrush(),$(i,l,s,d===p-1),l.innerAfterBrush(),l.afterBrush&&l.afterBrush(),s.prevEl=l}for(var T=0,c=_.length;T<c;T++){var l=_[T];l.beforeBrush&&l.beforeBrush(),l.innerBeforeBrush(),$(i,l,s,T===c-1),l.innerAfterBrush(),l.afterBrush&&l.afterBrush(),s.prevEl=l}r.clearTemporalDisplayables(),r.notClear=!0,i.restore()}},5787:(er,X,P)=>{P.d(X,{ZF:()=>S,ap:()=>z,cF:()=>W});function A(E){return isFinite(E)}function U(E,g,y){var R=g.x==null?0:g.x,b=g.x2==null?1:g.x2,I=g.y==null?0:g.y,M=g.y2==null?0:g.y2;g.global||(R=R*y.width+y.x,b=b*y.width+y.x,I=I*y.height+y.y,M=M*y.height+y.y),R=A(R)?R:0,b=A(b)?b:1,I=A(I)?I:0,M=A(M)?M:0;var H=E.createLinearGradient(R,I,b,M);return H}function Z(E,g,y){var R=y.width,b=y.height,I=Math.min(R,b),M=g.x==null?.5:g.x,H=g.y==null?.5:g.y,V=g.r==null?.5:g.r;g.global||(M=M*R+y.x,H=H*b+y.y,V=V*I),M=A(M)?M:.5,H=A(H)?H:.5,V=V>=0&&A(V)?V:.5;var v=E.createRadialGradient(M,H,0,M,H,V);return v}function S(E,g,y){for(var R=g.type==="radial"?Z(E,g,y):U(E,g,y),b=g.colorStops,I=0;I<b.length;I++)R.addColorStop(b[I].offset,b[I].color);return R}function W(E,g){if(E===g||!E&&!g)return!1;if(!E||!g||E.length!==g.length)return!0;for(var y=0;y<E.length;y++)if(E[y]!==g[y])return!0;return!1}function k(E){return parseInt(E,10)}function z(E,g,y){var R=["width","height"][g],b=["clientWidth","clientHeight"][g],I=["paddingLeft","paddingTop"][g],M=["paddingRight","paddingBottom"][g];if(y[R]!=null&&y[R]!=="auto")return parseFloat(y[R]);var H=document.defaultView.getComputedStyle(E);return(E[b]||k(H[R])||k(E.style[R]))-(k(H[I])||0)-(k(H[M])||0)|0}}}]);