"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[2791],{16470:(it,Z,p)=>{p.d(Z,{Z:()=>X});var L=p(70655),u=p(98071),x=function(k){(0,L.ZT)(C,k);function C(){var _=k!==null&&k.apply(this,arguments)||this;return _.type=C.type,_}return C.type="tooltip",C.dependencies=["axisPointer"],C.defaultOption={z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:null,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"#fff",shadowBlur:10,shadowColor:"rgba(0, 0, 0, .2)",shadowOffsetX:1,shadowOffsetY:2,borderRadius:4,borderWidth:1,padding:null,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#666",fontSize:14}},C}(u.Z);const X=x},70382:(it,Z,p)=>{p.d(Z,{Z:()=>Ot});var L=p(70655),u=p(33051),x=p(66387),X=p(61158),k=p(18553),C=p(78988),_=p(50261),D=p(5685),rt=(0,_.JJ)(_.Q_,"transition"),Y=(0,_.JJ)(_.HJ,"transform"),nt="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+(x.Z.transform3dSupported?"will-change:transform;":"");function st(s){return s=s==="left"?"right":s==="right"?"left":s==="top"?"bottom":"top",s}function at(s,e,o){if(!(0,u.HD)(o)||o==="inside")return"";var t=s.get("backgroundColor"),r=s.get("borderWidth");e=(0,C.Lz)(e);var i=st(o),n=Math.max(Math.round(r)*1.5,6),a="",h=Y+":",l;(0,u.cq)(["left","right"],i)>-1?(a+="top:50%",h+="translateY(-50%) rotate("+(l=i==="left"?-225:-45)+"deg)"):(a+="left:50%",h+="translateX(-50%) rotate("+(l=i==="top"?225:45)+"deg)");var d=l*Math.PI/180,f=n+r,v=f*Math.abs(Math.cos(d))+f*Math.abs(Math.sin(d)),g=Math.round(((v-Math.SQRT2*r)/2+Math.SQRT2*r-(v-f)/2)*100)/100;a+=";"+i+":-"+g+"px";var y=e+" solid "+r+"px;",c=["position:absolute;width:"+n+"px;height:"+n+"px;z-index:-1;",a+";"+h+";","border-bottom:"+y,"border-right:"+y,"background-color:"+t+";"];return'<div style="'+c.join("")+'"></div>'}function ht(s,e){var o="cubic-bezier(0.23,1,0.32,1)",t=" "+s/2+"s "+o,r="opacity"+t+",visibility"+t;return e||(t=" "+s+"s "+o,r+=x.Z.transformSupported?","+Y+t:",left"+t+",top"+t),rt+":"+r}function V(s,e,o){var t=s.toFixed(0)+"px",r=e.toFixed(0)+"px";if(!x.Z.transformSupported)return o?"top:"+r+";left:"+t+";":[["top",r],["left",t]];var i=x.Z.transform3dSupported,n="translate"+(i?"3d":"")+"("+t+","+r+(i?",0":"")+")";return o?"top:0;left:0;"+Y+":"+n+";":[["top",0],["left",0],[_.HJ,n]]}function lt(s){var e=[],o=s.get("fontSize"),t=s.getTextColor();t&&e.push("color:"+t),e.push("font:"+s.getFont()),o&&e.push("line-height:"+Math.round(o*3/2)+"px");var r=s.get("textShadowColor"),i=s.get("textShadowBlur")||0,n=s.get("textShadowOffsetX")||0,a=s.get("textShadowOffsetY")||0;return r&&i&&e.push("text-shadow:"+n+"px "+a+"px "+i+"px "+r),(0,u.S6)(["decoration","align"],function(h){var l=s.get(h);l&&e.push("text-"+h+":"+l)}),e.join(";")}function dt(s,e,o){var t=[],r=s.get("transitionDuration"),i=s.get("backgroundColor"),n=s.get("shadowBlur"),a=s.get("shadowColor"),h=s.get("shadowOffsetX"),l=s.get("shadowOffsetY"),d=s.getModel("textStyle"),f=(0,D.d_)(s,"html"),v=h+"px "+l+"px "+n+"px "+a;return t.push("box-shadow:"+v),e&&r&&t.push(ht(r,o)),i&&t.push("background-color:"+i),(0,u.S6)(["width","color","radius"],function(g){var y="border-"+g,c=(0,C.zW)(y),T=s.get(c);T!=null&&t.push(y+":"+T+(g==="color"?"":"px"))}),t.push(lt(d)),f!=null&&t.push("padding:"+(0,C.MY)(f).join("px ")+"px"),t.join(";")+";"}function j(s,e,o,t,r){var i=e&&e.painter;if(o){var n=i&&i.getViewportRoot();n&&(0,k.YB)(s,n,document.body,t,r)}else{s[0]=t,s[1]=r;var a=i&&i.getViewportRootOffset();a&&(s[0]+=a.offsetLeft,s[1]+=a.offsetTop)}s[2]=s[0]/e.getWidth(),s[3]=s[1]/e.getHeight()}var ft=function(){function s(e,o,t){if(this._show=!1,this._styleCoord=[0,0,0,0],this._enterable=!0,this._alwaysShowContent=!1,this._firstShow=!0,this._longHide=!0,x.Z.wxa)return null;var r=document.createElement("div");r.domBelongToZr=!0,this.el=r;var i=this._zr=o.getZr(),n=this._appendToBody=t&&t.appendToBody;j(this._styleCoord,i,n,o.getWidth()/2,o.getHeight()/2),n?document.body.appendChild(r):e.appendChild(r),this._container=e;var a=this;r.onmouseenter=function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0},r.onmousemove=function(h){if(h=h||window.event,!a._enterable){var l=i.handler,d=i.painter.getViewportRoot();(0,X.OD)(d,h,!0),l.dispatch("mousemove",h)}},r.onmouseleave=function(){a._inContent=!1,a._enterable&&a._show&&a.hideLater(a._hideDelay)}}return s.prototype.update=function(e){var o=this._container,t=(0,_.Dx)(o,"position"),r=o.style;r.position!=="absolute"&&t!=="absolute"&&(r.position="relative");var i=e.get("alwaysShowContent");i&&this._moveIfResized(),this._alwaysShowContent=i,this.el.className=e.get("className")||""},s.prototype.show=function(e,o){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout);var t=this.el,r=t.style,i=this._styleCoord;t.innerHTML?r.cssText=nt+dt(e,!this._firstShow,this._longHide)+V(i[0],i[1],!0)+("border-color:"+(0,C.Lz)(o)+";")+(e.get("extraCssText")||"")+(";pointer-events:"+(this._enterable?"auto":"none")):r.display="none",this._show=!0,this._firstShow=!1,this._longHide=!1},s.prototype.setContent=function(e,o,t,r,i){var n=this.el;if(e==null){n.innerHTML="";return}var a="";if((0,u.HD)(i)&&t.get("trigger")==="item"&&!(0,_.Pf)(t)&&(a=at(t,r,i)),(0,u.HD)(e))n.innerHTML=e+a;else if(e){n.innerHTML="",(0,u.kJ)(e)||(e=[e]);for(var h=0;h<e.length;h++)(0,u.Mh)(e[h])&&e[h].parentNode!==n&&n.appendChild(e[h]);if(a&&n.childNodes.length){var l=document.createElement("div");l.innerHTML=a,n.appendChild(l)}}},s.prototype.setEnterable=function(e){this._enterable=e},s.prototype.getSize=function(){var e=this.el;return[e.offsetWidth,e.offsetHeight]},s.prototype.moveTo=function(e,o){var t=this._styleCoord;if(j(t,this._zr,this._appendToBody,e,o),t[0]!=null&&t[1]!=null){var r=this.el.style,i=V(t[0],t[1]);(0,u.S6)(i,function(n){r[n[0]]=n[1]})}},s.prototype._moveIfResized=function(){var e=this._styleCoord[2],o=this._styleCoord[3];this.moveTo(e*this._zr.getWidth(),o*this._zr.getHeight())},s.prototype.hide=function(){var e=this,o=this.el.style;o.visibility="hidden",o.opacity="0",x.Z.transform3dSupported&&(o.willChange=""),this._show=!1,this._longHideTimeout=setTimeout(function(){return e._longHide=!0},500)},s.prototype.hideLater=function(e){this._show&&!(this._inContent&&this._enterable)&&!this._alwaysShowContent&&(e?(this._hideDelay=e,this._show=!1,this._hideTimeout=setTimeout((0,u.ak)(this.hide,this),e)):this.hide())},s.prototype.isShow=function(){return this._show},s.prototype.dispose=function(){this.el.parentNode.removeChild(this.el)},s}();const ut=ft;var vt=p(96498),gt=p(70175),pt=function(){function s(e){this._show=!1,this._styleCoord=[0,0,0,0],this._alwaysShowContent=!1,this._enterable=!0,this._zr=e.getZr(),G(this._styleCoord,this._zr,e.getWidth()/2,e.getHeight()/2)}return s.prototype.update=function(e){var o=e.get("alwaysShowContent");o&&this._moveIfResized(),this._alwaysShowContent=o},s.prototype.show=function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.show(),this._show=!0},s.prototype.setContent=function(e,o,t,r,i){var n=this;u.Kn(e)&&(0,gt._y)(""),this.el&&this._zr.remove(this.el);var a=t.getModel("textStyle");this.el=new vt.ZP({style:{rich:o.richTextStyles,text:e,lineHeight:22,borderWidth:1,borderColor:r,textShadowColor:a.get("textShadowColor"),fill:t.get(["textStyle","color"]),padding:(0,D.d_)(t,"richText"),verticalAlign:"top",align:"left"},z:t.get("z")}),u.S6(["backgroundColor","borderRadius","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"],function(l){n.el.style[l]=t.get(l)}),u.S6(["textShadowBlur","textShadowOffsetX","textShadowOffsetY"],function(l){n.el.style[l]=a.get(l)||0}),this._zr.add(this.el);var h=this;this.el.on("mouseover",function(){h._enterable&&(clearTimeout(h._hideTimeout),h._show=!0),h._inContent=!0}),this.el.on("mouseout",function(){h._enterable&&h._show&&h.hideLater(h._hideDelay),h._inContent=!1})},s.prototype.setEnterable=function(e){this._enterable=e},s.prototype.getSize=function(){var e=this.el,o=this.el.getBoundingRect(),t=K(e.style);return[o.width+t.left+t.right,o.height+t.top+t.bottom]},s.prototype.moveTo=function(e,o){var t=this.el;if(t){var r=this._styleCoord;G(r,this._zr,e,o),e=r[0],o=r[1];var i=t.style,n=I(i.borderWidth||0),a=K(i);t.x=e+n+a.left,t.y=o+n+a.top,t.markRedraw()}},s.prototype._moveIfResized=function(){var e=this._styleCoord[2],o=this._styleCoord[3];this.moveTo(e*this._zr.getWidth(),o*this._zr.getHeight())},s.prototype.hide=function(){this.el&&this.el.hide(),this._show=!1},s.prototype.hideLater=function(e){this._show&&!(this._inContent&&this._enterable)&&!this._alwaysShowContent&&(e?(this._hideDelay=e,this._show=!1,this._hideTimeout=setTimeout(u.ak(this.hide,this),e)):this.hide())},s.prototype.isShow=function(){return this._show},s.prototype.dispose=function(){this._zr.remove(this.el)},s}();function I(s){return Math.max(0,s)}function K(s){var e=I(s.shadowBlur||0),o=I(s.shadowOffsetX||0),t=I(s.shadowOffsetY||0);return{left:I(e-o),right:I(e+o),top:I(e-t),bottom:I(e+t)}}function G(s,e,o,t){s[0]=o,s[1]=t,s[2]=s[0]/e.getWidth(),s[3]=s[1]/e.getHeight()}const ct=pt;var Q=p(85669),mt=p(35151),yt=p(92448),wt=p(76172),A=p(4272),E=p(56996),Tt=p(97980),Ct=p(75539),W=p(32234),xt=p(33166),St=p(15015),O=p(30106),$=p(61219),_t=p(18310),N=p(270),bt=new mt.Z({shape:{x:-1,y:-1,width:2,height:2}}),Mt=function(s){(0,L.ZT)(e,s);function e(){var o=s!==null&&s.apply(this,arguments)||this;return o.type=e.type,o}return e.prototype.init=function(o,t){if(!(x.Z.node||!t.getDom())){var r=o.getComponent("tooltip"),i=this._renderMode=(0,W.U9)(r.get("renderMode"));this._tooltipContent=i==="richText"?new ct(t):new ut(t.getDom(),t,{appendToBody:r.get("appendToBody",!0)})}},e.prototype.render=function(o,t,r){if(!(x.Z.node||!r.getDom())){this.group.removeAll(),this._tooltipModel=o,this._ecModel=t,this._api=r;var i=this._tooltipContent;i.update(o),i.setEnterable(o.get("enterable")),this._initGlobalListener(),this._keepShow(),this._renderMode!=="richText"&&o.get("transitionDuration")?(0,N.T9)(this,"_updatePosition",50,"fixRate"):(0,N.ZH)(this,"_updatePosition")}},e.prototype._initGlobalListener=function(){var o=this._tooltipModel,t=o.get("triggerOn");E.z("itemTooltip",this._api,(0,u.ak)(function(r,i,n){t!=="none"&&(t.indexOf(r)>=0?this._tryShow(i,n):r==="leave"&&this._hide(n))},this))},e.prototype._keepShow=function(){var o=this._tooltipModel,t=this._ecModel,r=this._api,i=o.get("triggerOn");if(this._lastX!=null&&this._lastY!=null&&i!=="none"&&i!=="click"){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){!r.isDisposed()&&n.manuallyShowTip(o,t,r,{x:n._lastX,y:n._lastY,dataByCoordSys:n._lastDataByCoordSys})})}},e.prototype.manuallyShowTip=function(o,t,r,i){if(!(i.from===this.uid||x.Z.node||!r.getDom())){var n=q(i,r);this._ticket="";var a=i.dataByCoordSys,h=Ht(i,t,r);if(h){var l=h.el.getBoundingRect().clone();l.applyTransform(h.el.transform),this._tryShow({offsetX:l.x+l.width/2,offsetY:l.y+l.height/2,target:h.el,position:i.position,positionDefault:"bottom"},n)}else if(i.tooltip&&i.x!=null&&i.y!=null){var d=bt;d.x=i.x,d.y=i.y,d.update(),(0,O.A)(d).tooltipConfig={name:null,option:i.tooltip},this._tryShow({offsetX:i.x,offsetY:i.y,target:d},n)}else if(a)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,dataByCoordSys:a,tooltipOption:i.tooltipOption},n);else if(i.seriesIndex!=null){if(this._manuallyAxisShowTip(o,t,r,i))return;var f=(0,yt.Z)(i,t),v=f.point[0],g=f.point[1];v!=null&&g!=null&&this._tryShow({offsetX:v,offsetY:g,target:f.el,position:i.position,positionDefault:"bottom"},n)}else i.x!=null&&i.y!=null&&(r.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:r.getZr().findHover(i.x,i.y).target},n))}},e.prototype.manuallyHideTip=function(o,t,r,i){var n=this._tooltipContent;this._tooltipModel&&n.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=this._lastDataByCoordSys=null,i.from!==this.uid&&this._hide(q(i,r))},e.prototype._manuallyAxisShowTip=function(o,t,r,i){var n=i.seriesIndex,a=i.dataIndex,h=t.getComponent("axisPointer").coordSysAxesInfo;if(!(n==null||a==null||h==null)){var l=t.getSeriesByIndex(n);if(l){var d=l.getData(),f=z([d.getItemModel(a),l,(l.coordinateSystem||{}).model],this._tooltipModel);if(f.get("trigger")==="axis")return r.dispatchAction({type:"updateAxisPointer",seriesIndex:n,dataIndex:a,position:i.position}),!0}}},e.prototype._tryShow=function(o,t){var r=o.target,i=this._tooltipModel;if(i){this._lastX=o.offsetX,this._lastY=o.offsetY;var n=o.dataByCoordSys;if(n&&n.length)this._showAxisTooltip(n,o);else if(r){this._lastDataByCoordSys=null;var a,h;(0,_t.o)(r,function(l){if((0,O.A)(l).dataIndex!=null)return a=l,!0;if((0,O.A)(l).tooltipConfig!=null)return h=l,!0},!0),a?this._showSeriesItemTooltip(o,a,t):h?this._showComponentItemTooltip(o,h,t):this._hide(t)}else this._lastDataByCoordSys=null,this._hide(t)}},e.prototype._showOrMove=function(o,t){var r=o.get("showDelay");t=(0,u.ak)(t,this),clearTimeout(this._showTimout),r>0?this._showTimout=setTimeout(t,r):t()},e.prototype._showAxisTooltip=function(o,t){var r=this._ecModel,i=this._tooltipModel,n=[t.offsetX,t.offsetY],a=z([t.tooltipOption],i),h=this._renderMode,l=[],d=(0,D.TX)("section",{blocks:[],noHeader:!0}),f=[],v=new D.iv;(0,u.S6)(o,function(S){(0,u.S6)(S.dataByAxis,function(w){var b=r.getComponent(w.axisDim+"Axis",w.axisIndex),B=w.value;if(!(!b||B==null)){var H=Ct.gk(B,b.axis,r,w.seriesDataIndices,w.valueLabelOpt),P=(0,D.TX)("section",{header:H,noHeader:!(0,u.fy)(H),sortBlocks:!0,blocks:[]});d.blocks.push(P),(0,u.S6)(w.seriesDataIndices,function(R){var F=r.getSeriesByIndex(R.seriesIndex),et=R.dataIndexInside,M=F.getDataParams(et);if(!(M.dataIndex<0)){M.axisDim=w.axisDim,M.axisIndex=w.axisIndex,M.axisType=w.axisType,M.axisId=w.axisId,M.axisValue=Tt.DX(b.axis,{value:B}),M.axisValueLabel=H,M.marker=v.makeTooltipMarker("item",(0,C.Lz)(M.color),h);var U=(0,$.f)(F.formatTooltip(et,!0,null)),J=U.frag;if(J){var ot=z([F],i).get("valueFormatter");P.blocks.push(ot?(0,u.l7)({valueFormatter:ot},J):J)}U.text&&f.push(U.text),l.push(M)}})}})}),d.blocks.reverse(),f.reverse();var g=t.position,y=a.get("order"),c=(0,D.BY)(d,v,h,y,r.get("useUTC"),a.get("textStyle"));c&&f.unshift(c);var T=h==="richText"?`

`:"<br/>",m=f.join(T);this._showOrMove(a,function(){this._updateContentNotChangedOnAxis(o,l)?this._updatePosition(a,g,n[0],n[1],this._tooltipContent,l):this._showTooltipContent(a,m,l,Math.random()+"",n[0],n[1],g,null,v)})},e.prototype._showSeriesItemTooltip=function(o,t,r){var i=this._ecModel,n=(0,O.A)(t),a=n.seriesIndex,h=i.getSeriesByIndex(a),l=n.dataModel||h,d=n.dataIndex,f=n.dataType,v=l.getData(f),g=this._renderMode,y=o.positionDefault,c=z([v.getItemModel(d),l,h&&(h.coordinateSystem||{}).model],this._tooltipModel,y?{position:y}:null),T=c.get("trigger");if(!(T!=null&&T!=="item")){var m=l.getDataParams(d,f),S=new D.iv;m.marker=S.makeTooltipMarker("item",(0,C.Lz)(m.color),g);var w=(0,$.f)(l.formatTooltip(d,!1,f)),b=c.get("order"),B=c.get("valueFormatter"),H=w.frag,P=H?(0,D.BY)(B?(0,u.l7)({valueFormatter:B},H):H,S,g,b,i.get("useUTC"),c.get("textStyle")):w.text,R="item_"+l.name+"_"+d;this._showOrMove(c,function(){this._showTooltipContent(c,P,m,R,o.offsetX,o.offsetY,o.position,o.target,S)}),r({type:"showTip",dataIndexInside:d,dataIndex:v.getRawIndex(d),seriesIndex:a,from:this.uid})}},e.prototype._showComponentItemTooltip=function(o,t,r){var i=(0,O.A)(t),n=i.tooltipConfig,a=n.option||{};if((0,u.HD)(a)){var h=a;a={content:h,formatter:h}}var l=[a],d=this._ecModel.getComponent(i.componentMainType,i.componentIndex);d&&l.push(d),l.push({formatter:a.content});var f=o.positionDefault,v=z(l,this._tooltipModel,f?{position:f}:null),g=v.get("content"),y=Math.random()+"",c=new D.iv;this._showOrMove(v,function(){var T=(0,u.d9)(v.get("formatterParams")||{});this._showTooltipContent(v,g,T,y,o.offsetX,o.offsetY,o.position,t,c)}),r({type:"showTip",from:this.uid})},e.prototype._showTooltipContent=function(o,t,r,i,n,a,h,l,d){if(this._ticket="",!(!o.get("showContent")||!o.get("show"))){var f=this._tooltipContent;f.setEnterable(o.get("enterable"));var v=o.get("formatter");h=h||o.get("position");var g=t,y=this._getNearestPoint([n,a],r,o.get("trigger"),o.get("borderColor")),c=y.color;if(v)if((0,u.HD)(v)){var T=o.ecModel.get("useUTC"),m=(0,u.kJ)(r)?r[0]:r,S=m&&m.axisType&&m.axisType.indexOf("time")>=0;g=v,S&&(g=(0,St.WU)(m.axisValue,g,T)),g=(0,C.kF)(g,r,!0)}else if((0,u.mf)(v)){var w=(0,u.ak)(function(b,B){b===this._ticket&&(f.setContent(B,d,o,c,h),this._updatePosition(o,h,n,a,f,r,l))},this);this._ticket=i,g=v(r,i,w)}else g=v;f.setContent(g,d,o,c,h),f.show(o,c),this._updatePosition(o,h,n,a,f,r,l)}},e.prototype._getNearestPoint=function(o,t,r,i){if(r==="axis"||(0,u.kJ)(t))return{color:i||(this._renderMode==="html"?"#fff":"none")};if(!(0,u.kJ)(t))return{color:i||t.color||t.borderColor}},e.prototype._updatePosition=function(o,t,r,i,n,a,h){var l=this._api.getWidth(),d=this._api.getHeight();t=t||o.get("position");var f=n.getSize(),v=o.get("align"),g=o.get("verticalAlign"),y=h&&h.getBoundingRect().clone();if(h&&y.applyTransform(h.transform),(0,u.mf)(t)&&(t=t([r,i],a,n.el,y,{viewSize:[l,d],contentSize:f.slice()})),(0,u.kJ)(t))r=(0,Q.GM)(t[0],l),i=(0,Q.GM)(t[1],d);else if((0,u.Kn)(t)){var c=t;c.width=f[0],c.height=f[1];var T=(0,wt.ME)(c,{width:l,height:d});r=T.x,i=T.y,v=null,g=null}else if((0,u.HD)(t)&&h){var m=Bt(t,y,f,o.get("borderWidth"));r=m[0],i=m[1]}else{var m=Dt(r,i,n,l,d,v?null:20,g?null:20);r=m[0],i=m[1]}if(v&&(r-=tt(v)?f[0]/2:v==="right"?f[0]:0),g&&(i-=tt(g)?f[1]/2:g==="bottom"?f[1]:0),(0,_.Pf)(o)){var m=It(r,i,n,l,d);r=m[0],i=m[1]}n.moveTo(r,i)},e.prototype._updateContentNotChangedOnAxis=function(o,t){var r=this._lastDataByCoordSys,i=this._cbParamsList,n=!!r&&r.length===o.length;return n&&(0,u.S6)(r,function(a,h){var l=a.dataByAxis||[],d=o[h]||{},f=d.dataByAxis||[];n=n&&l.length===f.length,n&&(0,u.S6)(l,function(v,g){var y=f[g]||{},c=v.seriesDataIndices||[],T=y.seriesDataIndices||[];n=n&&v.value===y.value&&v.axisType===y.axisType&&v.axisId===y.axisId&&c.length===T.length,n&&(0,u.S6)(c,function(m,S){var w=T[S];n=n&&m.seriesIndex===w.seriesIndex&&m.dataIndex===w.dataIndex}),i&&(0,u.S6)(v.seriesDataIndices,function(m){var S=m.seriesIndex,w=t[S],b=i[S];w&&b&&b.data!==w.data&&(n=!1)})})}),this._lastDataByCoordSys=o,this._cbParamsList=t,!!n},e.prototype._hide=function(o){this._lastDataByCoordSys=null,o({type:"hideTip",from:this.uid})},e.prototype.dispose=function(o,t){x.Z.node||!t.getDom()||((0,N.ZH)(this,"_updatePosition"),this._tooltipContent.dispose(),E.E("itemTooltip",t))},e.type="tooltip",e}(xt.Z);function z(s,e,o){var t=e.ecModel,r;o?(r=new A.Z(o,t,t),r=new A.Z(e.option,r,t)):r=e;for(var i=s.length-1;i>=0;i--){var n=s[i];n&&(n instanceof A.Z&&(n=n.get("tooltip",!0)),(0,u.HD)(n)&&(n={formatter:n}),n&&(r=new A.Z(n,r,t)))}return r}function q(s,e){return s.dispatchAction||(0,u.ak)(e.dispatchAction,e)}function Dt(s,e,o,t,r,i,n){var a=o.getSize(),h=a[0],l=a[1];return i!=null&&(s+h+i+2>t?s-=h+i:s+=i),n!=null&&(e+l+n>r?e-=l+n:e+=n),[s,e]}function It(s,e,o,t,r){var i=o.getSize(),n=i[0],a=i[1];return s=Math.min(s+n,t)-n,e=Math.min(e+a,r)-a,s=Math.max(s,0),e=Math.max(e,0),[s,e]}function Bt(s,e,o,t){var r=o[0],i=o[1],n=Math.ceil(Math.SQRT2*t)+8,a=0,h=0,l=e.width,d=e.height;switch(s){case"inside":a=e.x+l/2-r/2,h=e.y+d/2-i/2;break;case"top":a=e.x+l/2-r/2,h=e.y-i-n;break;case"bottom":a=e.x+l/2-r/2,h=e.y+d+n;break;case"left":a=e.x-r-n,h=e.y+d/2-i/2;break;case"right":a=e.x+l+n,h=e.y+d/2-i/2}return[a,h]}function tt(s){return s==="center"||s==="middle"}function Ht(s,e,o){var t=(0,W.zH)(s).queryOptionMap,r=t.keys()[0];if(!(!r||r==="series")){var i=(0,W.HZ)(e,r,t.get(r),{useDefault:!1,enableAll:!1,enableNone:!1}),n=i.models[0];if(n){var a=o.getViewOfComponentModel(n),h;if(a.group.traverse(function(l){var d=(0,O.A)(l).tooltipConfig;if(d&&d.name===s.name)return h=l,!0}),h)return{componentMainType:r,componentIndex:n.componentIndex,el:h}}}}const Ot=Mt}}]);