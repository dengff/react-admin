"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[9926],{85456:(De,G,f)=>{f.d(G,{Z:()=>Qe});var P=f(1413),k=f(87462),W=f(15671),Y=f(43144),a=f(97326),ae=f(79340),ue=f(98557),l=f(4942),r=f(67294),M=f(73935),T=f(75164),S=f(94999),w=f(34203),O=f(42550),x=f(64019),E=f(98924),Ne=(0,r.forwardRef)(function(o,m){var c=o.didUpdate,v=o.getContainer,h=o.children,s=(0,r.useRef)(),e=(0,r.useRef)();(0,r.useImperativeHandle)(m,function(){return{}});var i=(0,r.useRef)(!1);return!i.current&&(0,E.Z)()&&(e.current=v(),s.current=e.current.parentNode,i.current=!0),(0,r.useEffect)(function(){c?.(o)}),(0,r.useEffect)(function(){return e.current.parentNode===null&&s.current!==null&&s.current.appendChild(e.current),function(){var t,n;(t=e.current)===null||t===void 0||(n=t.parentNode)===null||n===void 0||n.removeChild(e.current)}},[]),e.current?M.createPortal(h,e.current):null});const xe=Ne;var Ee=f(94184),j=f.n(Ee);function be(o,m,c){return c?o[0]===m[0]:o[0]===m[0]&&o[1]===m[1]}function ke(o,m,c){var v=o[m]||{};return(0,P.Z)((0,P.Z)({},v),c)}function we(o,m,c,v){for(var h=c.points,s=Object.keys(o),e=0;e<s.length;e+=1){var i=s[e];if(be(o[i].points,h,v))return"".concat(m,"-placement-").concat(i)}return""}var A=f(29439),Ae=f(44925),Re=f(31131),J=f(63441);function le(o){var m=o.prefixCls,c=o.motion,v=o.animation,h=o.transitionName;return c||(v?{motionName:"".concat(m,"-").concat(v)}:h?{motionName:h}:null)}function Oe(o){var m=o.prefixCls,c=o.visible,v=o.zIndex,h=o.mask,s=o.maskMotion,e=o.maskAnimation,i=o.maskTransitionName;if(!h)return null;var t={};return(s||i||e)&&(t=(0,P.Z)({motionAppear:!0},le({motion:s,prefixCls:m,transitionName:i,animation:e}))),r.createElement(J.Z,(0,k.Z)({},t,{visible:c,removeOnLeave:!0}),function(n){var u=n.className;return r.createElement("div",{style:{zIndex:v},className:j()("".concat(m,"-mask"),u)})})}var He=f(84480),ce=f(8410),pe=f(74165),Ve=f(15861),Le=f(30470),fe=["measure","alignPre","align",null,"motion"];const Fe=function(o,m){var c=(0,Le.Z)(null),v=(0,A.Z)(c,2),h=v[0],s=v[1],e=(0,r.useRef)();function i(u){s(u,!0)}function t(){T.Z.cancel(e.current)}function n(u){t(),e.current=(0,T.Z)(function(){i(function(d){switch(h){case"align":return"motion";case"motion":return"stable";default:}return d}),u?.()})}return(0,r.useEffect)(function(){i("measure")},[o]),(0,r.useEffect)(function(){switch(h){case"measure":m();break;default:}h&&(e.current=(0,T.Z)((0,Ve.Z)((0,pe.Z)().mark(function u(){var d,C;return(0,pe.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:d=fe.indexOf(h),C=fe[d+1],C&&d!==-1&&i(C);case 3:case"end":return p.stop()}},u)}))))},[h]),(0,r.useEffect)(function(){return function(){t()}},[]),[h,n]},Ie=function(o){var m=r.useState({width:0,height:0}),c=(0,A.Z)(m,2),v=c[0],h=c[1];function s(i){var t=i.offsetWidth,n=i.offsetHeight,u=i.getBoundingClientRect(),d=u.width,C=u.height;Math.abs(t-d)<1&&Math.abs(n-C)<1&&(t=d,n=C),h({width:t,height:n})}var e=r.useMemo(function(){var i={};if(o){var t=v.width,n=v.height;o.indexOf("height")!==-1&&n?i.height=n:o.indexOf("minHeight")!==-1&&n&&(i.minHeight=n),o.indexOf("width")!==-1&&t?i.width=t:o.indexOf("minWidth")!==-1&&t&&(i.minWidth=t)}return i},[o,v]);return[e,s]};var de=r.forwardRef(function(o,m){var c=o.visible,v=o.prefixCls,h=o.className,s=o.style,e=o.children,i=o.zIndex,t=o.stretch,n=o.destroyPopupOnHide,u=o.forceRender,d=o.align,C=o.point,g=o.getRootDomNode,p=o.getClassNameFromAlign,y=o.onAlign,D=o.onMouseEnter,H=o.onMouseLeave,b=o.onMouseDown,I=o.onTouchStart,$=o.onClick,K=(0,r.useRef)(),L=(0,r.useRef)(),_=(0,r.useState)(),X=(0,A.Z)(_,2),Q=X[0],ee=X[1],te=Ie(t),z=(0,A.Z)(te,2),ne=z[0],oe=z[1];function ie(){t&&oe(g())}var V=Fe(c,ie),ge=(0,A.Z)(V,2),N=ge[0],re=ge[1],Ge=(0,r.useState)(0),Ce=(0,A.Z)(Ge,2),Ze=Ce[0],Me=Ce[1],se=(0,r.useRef)();(0,ce.Z)(function(){N==="alignPre"&&Me(0)},[N]);function Je(){return C||g}function Pe(){var Z;(Z=K.current)===null||Z===void 0||Z.forceAlign()}function qe(Z,R){var F=p(R);Q!==F&&ee(F),Me(function(U){return U+1}),N==="align"&&y?.(Z,R)}(0,ce.Z)(function(){N==="align"&&(Ze<3?Pe():re(function(){var Z;(Z=se.current)===null||Z===void 0||Z.call(se)}))},[Ze]);var B=(0,P.Z)({},le(o));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(Z){var R=B[Z];B[Z]=function(F,U){return re(),R?.(F,U)}});function Te(){return new Promise(function(Z){se.current=Z})}r.useEffect(function(){!B.motionName&&N==="motion"&&re()},[B.motionName,N]),r.useImperativeHandle(m,function(){return{forceAlign:Pe,getElement:function(){return L.current}}});var _e=(0,P.Z)((0,P.Z)({},ne),{},{zIndex:i,opacity:N==="motion"||N==="stable"||!c?void 0:0,pointerEvents:!c&&N!=="stable"?"none":void 0},s),ye=!0;d!=null&&d.points&&(N==="align"||N==="stable")&&(ye=!1);var Se=e;return r.Children.count(e)>1&&(Se=r.createElement("div",{className:"".concat(v,"-content")},e)),r.createElement(J.Z,(0,k.Z)({visible:c,ref:L,leavedClassName:"".concat(v,"-hidden")},B,{onAppearPrepare:Te,onEnterPrepare:Te,removeOnLeave:n,forceRender:u}),function(Z,R){var F=Z.className,U=Z.style,et=j()(v,h,Q,F);return r.createElement(He.Z,{target:Je(),key:"popup",ref:K,monitorWindowResize:!0,disabled:ye,align:d,onAlign:qe},r.createElement("div",{ref:R,className:et,onMouseEnter:D,onMouseLeave:H,onMouseDownCapture:b,onTouchStartCapture:I,onClick:$,style:(0,P.Z)((0,P.Z)({},U),_e)},Se))})});de.displayName="PopupInner";const $e=de;var me=r.forwardRef(function(o,m){var c=o.prefixCls,v=o.visible,h=o.zIndex,s=o.children,e=o.mobile;e=e===void 0?{}:e;var i=e.popupClassName,t=e.popupStyle,n=e.popupMotion,u=n===void 0?{}:n,d=e.popupRender,C=o.onClick,g=r.useRef();r.useImperativeHandle(m,function(){return{forceAlign:function(){},getElement:function(){return g.current}}});var p=(0,P.Z)({zIndex:h},t),y=s;return r.Children.count(s)>1&&(y=r.createElement("div",{className:"".concat(c,"-content")},s)),d&&(y=d(y)),r.createElement(J.Z,(0,k.Z)({visible:v,ref:g,removeOnLeave:!0},u),function(D,H){var b=D.className,I=D.style,$=j()(c,i,b);return r.createElement("div",{ref:H,className:$,onClick:C,style:(0,P.Z)((0,P.Z)({},I),p)},y)})});me.displayName="MobilePopupInner";const ze=me;var Be=["visible","mobile"],ve=r.forwardRef(function(o,m){var c=o.visible,v=o.mobile,h=(0,Ae.Z)(o,Be),s=(0,r.useState)(c),e=(0,A.Z)(s,2),i=e[0],t=e[1],n=(0,r.useState)(!1),u=(0,A.Z)(n,2),d=u[0],C=u[1],g=(0,P.Z)((0,P.Z)({},h),{},{visible:i});(0,r.useEffect)(function(){t(c),c&&v&&C((0,Re.Z)())},[c,v]);var p=d?r.createElement(ze,(0,k.Z)({},g,{mobile:v,ref:m})):r.createElement($e,(0,k.Z)({},g,{ref:m}));return r.createElement("div",null,r.createElement(Oe,g),p)});ve.displayName="Popup";const Ue=ve;var We=r.createContext(null);const he=We;function q(){}function Ye(){return""}function je(o){return o?o.ownerDocument:window.document}var Ke=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function Xe(o){var m=function(c){(0,ae.Z)(h,c);var v=(0,ue.Z)(h);function h(s){var e;(0,W.Z)(this,h),e=v.call(this,s),(0,l.Z)((0,a.Z)(e),"popupRef",r.createRef()),(0,l.Z)((0,a.Z)(e),"triggerRef",r.createRef()),(0,l.Z)((0,a.Z)(e),"portalContainer",void 0),(0,l.Z)((0,a.Z)(e),"attachId",void 0),(0,l.Z)((0,a.Z)(e),"clickOutsideHandler",void 0),(0,l.Z)((0,a.Z)(e),"touchOutsideHandler",void 0),(0,l.Z)((0,a.Z)(e),"contextMenuOutsideHandler1",void 0),(0,l.Z)((0,a.Z)(e),"contextMenuOutsideHandler2",void 0),(0,l.Z)((0,a.Z)(e),"mouseDownTimeout",void 0),(0,l.Z)((0,a.Z)(e),"focusTime",void 0),(0,l.Z)((0,a.Z)(e),"preClickTime",void 0),(0,l.Z)((0,a.Z)(e),"preTouchTime",void 0),(0,l.Z)((0,a.Z)(e),"delayTimer",void 0),(0,l.Z)((0,a.Z)(e),"hasPopupMouseDown",void 0),(0,l.Z)((0,a.Z)(e),"onMouseEnter",function(t){var n=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,n,n?null:t)}),(0,l.Z)((0,a.Z)(e),"onMouseMove",function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)}),(0,l.Z)((0,a.Z)(e),"onMouseLeave",function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),(0,l.Z)((0,a.Z)(e),"onPopupMouseEnter",function(){e.clearDelayTimer()}),(0,l.Z)((0,a.Z)(e),"onPopupMouseLeave",function(t){var n;t.relatedTarget&&!t.relatedTarget.setTimeout&&(0,S.Z)((n=e.popupRef.current)===null||n===void 0?void 0:n.getElement(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),(0,l.Z)((0,a.Z)(e),"onFocus",function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))}),(0,l.Z)((0,a.Z)(e),"onMouseDown",function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()}),(0,l.Z)((0,a.Z)(e),"onTouchStart",function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()}),(0,l.Z)((0,a.Z)(e),"onBlur",function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)}),(0,l.Z)((0,a.Z)(e),"onContextMenu",function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)}),(0,l.Z)((0,a.Z)(e),"onContextMenuClose",function(){e.isContextMenuToShow()&&e.close()}),(0,l.Z)((0,a.Z)(e),"onClick",function(t){if(e.fireEvents("onClick",t),e.focusTime){var n;if(e.preClickTime&&e.preTouchTime?n=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?n=e.preClickTime:e.preTouchTime&&(n=e.preTouchTime),Math.abs(n-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var u=!e.state.popupVisible;(e.isClickToHide()&&!u||u&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)}),(0,l.Z)((0,a.Z)(e),"onPopupMouseDown",function(){if(e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=window.setTimeout(function(){e.hasPopupMouseDown=!1},0),e.context){var t;(t=e.context).onPopupMouseDown.apply(t,arguments)}}),(0,l.Z)((0,a.Z)(e),"onDocumentClick",function(t){if(!(e.props.mask&&!e.props.maskClosable)){var n=t.target,u=e.getRootDomNode(),d=e.getPopupDomNode();(!(0,S.Z)(u,n)||e.isContextMenuOnly())&&!(0,S.Z)(d,n)&&!e.hasPopupMouseDown&&e.close()}}),(0,l.Z)((0,a.Z)(e),"getRootDomNode",function(){var t=e.props.getTriggerDOMNode;if(t)return t(e.triggerRef.current);try{var n=(0,w.Z)(e.triggerRef.current);if(n)return n}catch{}return M.findDOMNode((0,a.Z)(e))}),(0,l.Z)((0,a.Z)(e),"getPopupClassNameFromAlign",function(t){var n=[],u=e.props,d=u.popupPlacement,C=u.builtinPlacements,g=u.prefixCls,p=u.alignPoint,y=u.getPopupClassNameFromAlign;return d&&C&&n.push(we(C,g,t,p)),y&&n.push(y(t)),n.join(" ")}),(0,l.Z)((0,a.Z)(e),"getComponent",function(){var t=e.props,n=t.prefixCls,u=t.destroyPopupOnHide,d=t.popupClassName,C=t.onPopupAlign,g=t.popupMotion,p=t.popupAnimation,y=t.popupTransitionName,D=t.popupStyle,H=t.mask,b=t.maskAnimation,I=t.maskTransitionName,$=t.maskMotion,K=t.zIndex,L=t.popup,_=t.stretch,X=t.alignPoint,Q=t.mobile,ee=t.forceRender,te=t.onPopupClick,z=e.state,ne=z.popupVisible,oe=z.point,ie=e.getPopupAlign(),V={};return e.isMouseEnterToShow()&&(V.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(V.onMouseLeave=e.onPopupMouseLeave),V.onMouseDown=e.onPopupMouseDown,V.onTouchStart=e.onPopupMouseDown,r.createElement(Ue,(0,k.Z)({prefixCls:n,destroyPopupOnHide:u,visible:ne,point:X&&oe,className:d,align:ie,onAlign:C,animation:p,getClassNameFromAlign:e.getPopupClassNameFromAlign},V,{stretch:_,getRootDomNode:e.getRootDomNode,style:D,mask:H,zIndex:K,transitionName:y,maskAnimation:b,maskTransitionName:I,maskMotion:$,ref:e.popupRef,motion:g,mobile:Q,forceRender:ee,onClick:te}),typeof L=="function"?L():L)}),(0,l.Z)((0,a.Z)(e),"attachParent",function(t){T.Z.cancel(e.attachId);var n=e.props,u=n.getPopupContainer,d=n.getDocument,C=e.getRootDomNode(),g;u?(C||u.length===0)&&(g=u(C)):g=d(e.getRootDomNode()).body,g?g.appendChild(t):e.attachId=(0,T.Z)(function(){e.attachParent(t)})}),(0,l.Z)((0,a.Z)(e),"getContainer",function(){if(!e.portalContainer){var t=e.props.getDocument,n=t(e.getRootDomNode()).createElement("div");n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",e.portalContainer=n}return e.attachParent(e.portalContainer),e.portalContainer}),(0,l.Z)((0,a.Z)(e),"setPoint",function(t){var n=e.props.alignPoint;!n||!t||e.setState({point:{pageX:t.pageX,pageY:t.pageY}})}),(0,l.Z)((0,a.Z)(e),"handlePortalUpdate",function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)}),(0,l.Z)((0,a.Z)(e),"triggerContextValue",{onPopupMouseDown:e.onPopupMouseDown});var i;return"popupVisible"in s?i=!!s.popupVisible:i=!!s.defaultPopupVisible,e.state={prevPopupVisible:i,popupVisible:i},Ke.forEach(function(t){e["fire".concat(t)]=function(n){e.fireEvents(t,n)}}),e}return(0,Y.Z)(h,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,i=this.state;if(i.popupVisible){var t;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(t=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,x.Z)(t,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(t=t||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,x.Z)(t,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(t=t||e.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,x.Z)(t,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,x.Z)(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),T.Z.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return((e=this.popupRef.current)===null||e===void 0?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,i=e.popupPlacement,t=e.popupAlign,n=e.builtinPlacements;return i&&n?ke(n,i,t):t}},{key:"setPopupVisible",value:function(e,i){var t=this.props.alignPoint,n=this.state.popupVisible;this.clearDelayTimer(),n!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:n}),this.props.onPopupVisibleChange(e)),t&&i&&e&&this.setPoint(i)}},{key:"delaySetPopupVisible",value:function(e,i,t){var n=this,u=i*1e3;if(this.clearDelayTimer(),u){var d=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout(function(){n.setPopupVisible(e,d),n.clearDelayTimer()},u)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var i=this.props.children.props,t=this.props;return i[e]&&t[e]?this["fire".concat(e)]:i[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return e==="contextMenu"||e.length===1&&e[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("contextMenu")!==-1||t.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("hover")!==-1||t.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("hover")!==-1||t.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("focus")!==-1||t.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("focus")!==-1||t.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var e;(e=this.popupRef.current)===null||e===void 0||e.forceAlign()}}},{key:"fireEvents",value:function(e,i){var t=this.props.children.props[e];t&&t(i);var n=this.props[e];n&&n(i)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,i=this.props,t=i.children,n=i.forceRender,u=i.alignPoint,d=i.className,C=i.autoDestroy,g=r.Children.only(t),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,u&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var y=j()(g&&g.props&&g.props.className,d);y&&(p.className=y);var D=(0,P.Z)({},p);(0,O.Yr)(g)&&(D.ref=(0,O.sQ)(this.triggerRef,g.ref));var H=r.cloneElement(g,D),b;return(e||this.popupRef.current||n)&&(b=r.createElement(o,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&C&&(b=null),r.createElement(he.Provider,{value:this.triggerContextValue},H,b)}}],[{key:"getDerivedStateFromProps",value:function(e,i){var t=e.popupVisible,n={};return t!==void 0&&i.popupVisible!==t&&(n.popupVisible=t,n.prevPopupVisible=i.popupVisible),n}}]),h}(r.Component);return(0,l.Z)(m,"contextType",he),(0,l.Z)(m,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:Ye,getDocument:je,onPopupVisibleChange:q,afterPopupVisibleChange:q,onPopupAlign:q,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),m}const Qe=Xe(xe)},88603:(De,G,f)=>{f.d(G,{tS:()=>Y});var P=f(93433),k=f(5110);function W(M){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if((0,k.Z)(M)){var S=M.nodeName.toLowerCase(),w=["input","select","textarea","button"].includes(S)||M.isContentEditable||S==="a"&&!!M.getAttribute("href"),O=M.getAttribute("tabindex"),x=Number(O),E=null;return O&&!Number.isNaN(x)?E=x:w&&E===null&&(E=0),w&&M.disabled&&(E=null),E!==null&&(E>=0||T&&E<0)}return!1}function Y(M){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S=(0,P.Z)(M.querySelectorAll("*")).filter(function(w){return W(w,T)});return W(M,T)&&S.unshift(M),S}var a=null;function ae(){a=document.activeElement}function ue(){a=null}function l(){if(a)try{a.focus()}catch{}}function r(M,T){if(T.keyCode===9){var S=Y(M),w=S[T.shiftKey?0:S.length-1],O=w===document.activeElement||M===document.activeElement;if(O){var x=S[T.shiftKey?S.length-1:0];x.focus(),T.preventDefault()}}}}}]);
