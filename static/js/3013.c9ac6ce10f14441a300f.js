"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[3013],{80867:(Ne,ie,i)=>{i.d(ie,{Z:()=>_});var R=i(8812),l=i(94184),G=i.n(l),pe=i(96753),D=i(66680),w=i(21770),ne=i(98423),y=i(67294),E=i(8745),W=i(80636),ge=i(96159),$e=i(53124),fe=i(8505),Pe=i(76529),le=i(4173),de=i(50167),je=i(44545),be=i(71577),Te=i(19650),ve=i(14747),V=i(67771),he=i(33297),m=i(50438),C=i(97414),g=i(67968),b=i(45503);const X=a=>{const{componentCls:s,menuCls:x,colorError:h,colorTextLightSolid:H}=a,M=`${x}-item`;return{[`${s}, ${s}-menu-submenu`]:{[`${x} ${M}`]:{[`&${M}-danger:not(${M}-disabled)`]:{color:h,"&:hover":{color:H,backgroundColor:h}}}}}},Z=a=>{const{componentCls:s,menuCls:x,zIndexPopup:h,dropdownArrowDistance:H,sizePopupArrow:M,antCls:c,iconCls:A,motionDurationMid:Q,dropdownPaddingVertical:ee,fontSize:ae,dropdownEdgeChildPadding:te,colorTextDisabled:L,fontSizeIcon:$,controlPaddingHorizontal:n,colorBgElevated:t}=a;return[{[s]:Object.assign(Object.assign({},(0,ve.Wf)(a)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:h,display:"block","&::before":{position:"absolute",insetBlock:-H+M/2,zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${c}-btn > ${A}-down`]:{fontSize:$,transform:"none"},[`${s}-wrap`]:{position:"relative",[`${c}-btn > ${A}-down`]:{fontSize:$},[`${A}-down::before`]:{transition:`transform ${Q}`}},[`${s}-wrap-open`]:{[`${A}-down::before`]:{transform:"rotate(180deg)"}},[`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]:{display:"none"},[`&${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottomLeft,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottomLeft,
          &${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottom,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottom,
          &${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottomRight,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottomRight`]:{animationName:V.fJ},[`&${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-topLeft,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-topLeft,
          &${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-top,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-top,
          &${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-topRight,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-topRight`]:{animationName:V.Qt},[`&${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottomLeft,
          &${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottom,
          &${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottomRight`]:{animationName:V.Uw},[`&${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-topLeft,
          &${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-top,
          &${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-topRight`]:{animationName:V.ly}})},(0,C.ZP)(a,{colorBg:t,limitVerticalRadius:!0,arrowPlacement:{top:!0,bottom:!0}}),{[`${s} ${x}`]:{position:"relative",margin:0},[`${x}-submenu-popup`]:{position:"absolute",zIndex:h,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${s}, ${s}-menu-submenu`]:{[x]:Object.assign(Object.assign({padding:te,listStyleType:"none",backgroundColor:t,backgroundClip:"padding-box",borderRadius:a.borderRadiusLG,outline:"none",boxShadow:a.boxShadowSecondary},(0,ve.Qy)(a)),{[`${x}-item-group-title`]:{padding:`${ee}px ${n}px`,color:a.colorTextDescription,transition:`all ${Q}`},[`${x}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${x}-item-icon`]:{minWidth:ae,marginInlineEnd:a.marginXS,fontSize:a.fontSizeSM},[`${x}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${Q}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${x}-item, ${x}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${ee}px ${n}px`,color:a.colorText,fontWeight:"normal",fontSize:ae,lineHeight:a.lineHeight,cursor:"pointer",transition:`all ${Q}`,borderRadius:a.borderRadiusSM,["&:hover, &-active"]:{backgroundColor:a.controlItemBgHover}},(0,ve.Qy)(a)),{"&-selected":{color:a.colorPrimary,backgroundColor:a.controlItemBgActive,"&:hover, &-active":{backgroundColor:a.controlItemBgActiveHover}},"&-disabled":{color:L,cursor:"not-allowed","&:hover":{color:L,backgroundColor:t,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${a.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:a.colorSplit},[`${s}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:a.paddingXS,[`${s}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:a.colorTextDescription,fontSize:$,fontStyle:"normal"}}}),[`${x}-item-group-list`]:{margin:`0 ${a.marginXS}px`,padding:0,listStyle:"none"},[`${x}-submenu-title`]:{paddingInlineEnd:n+a.fontSizeSM},[`${x}-submenu-vertical`]:{position:"relative"},[`${x}-submenu${x}-submenu-disabled ${s}-menu-submenu-title`]:{[`&, ${s}-menu-submenu-arrow-icon`]:{color:L,backgroundColor:t,cursor:"not-allowed"}},[`${x}-submenu-selected ${s}-menu-submenu-title`]:{color:a.colorPrimary}})}},[(0,V.oN)(a,"slide-up"),(0,V.oN)(a,"slide-down"),(0,he.Fm)(a,"move-up"),(0,he.Fm)(a,"move-down"),(0,m._y)(a,"zoom-big")]]},Y=(0,g.Z)("Dropdown",(a,s)=>{let{rootPrefixCls:x}=s;const{marginXXS:h,sizePopupArrow:H,controlHeight:M,fontSize:c,lineHeight:A,paddingXXS:Q,componentCls:ee,borderRadiusLG:ae}=a,te=(M-c*A)/2,{dropdownArrowOffset:L}=(0,C.fS)({contentRadius:ae}),$=(0,b.TS)(a,{menuCls:`${ee}-menu`,rootPrefixCls:x,dropdownArrowDistance:H/2+h,dropdownArrowOffset:L,dropdownPaddingVertical:te,dropdownEdgeChildPadding:Q});return[Z($),X($)]},a=>({zIndexPopup:a.zIndexPopupBase+50}));var K=function(a,s){var x={};for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&s.indexOf(h)<0&&(x[h]=a[h]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var H=0,h=Object.getOwnPropertySymbols(a);H<h.length;H++)s.indexOf(h[H])<0&&Object.prototype.propertyIsEnumerable.call(a,h[H])&&(x[h[H]]=a[h[H]]);return x};const J=a=>{const{getPopupContainer:s,getPrefixCls:x,direction:h}=y.useContext($e.E_),{prefixCls:H,type:M="default",danger:c,disabled:A,loading:Q,onClick:ee,htmlType:ae,children:te,className:L,menu:$,arrow:n,autoFocus:t,overlay:e,trigger:o,align:r,open:d,onOpenChange:u,placement:p,getPopupContainer:f,href:S,icon:B=y.createElement(je.Z,null),title:P,buttonsRender:O=He=>He,mouseEnterDelay:j,mouseLeaveDelay:I,overlayClassName:T,overlayStyle:N,destroyPopupOnHide:oe,dropdownRender:k}=a,ce=K(a,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),ue=x("dropdown",H),me=`${ue}-button`,[xe,Oe]=Y(ue),se={menu:$,arrow:n,autoFocus:t,align:r,disabled:A,trigger:A?[]:o,onOpenChange:u,getPopupContainer:f||s,mouseEnterDelay:j,mouseLeaveDelay:I,overlayClassName:T,overlayStyle:N,destroyPopupOnHide:oe,dropdownRender:k},{compactSize:Be,compactItemClassnames:Ie}=(0,le.ri)(ue,h),z=G()(me,Ie,L,Oe);"overlay"in a&&(se.overlay=e),"open"in a&&(se.open=d),"placement"in a?se.placement=p:se.placement=h==="rtl"?"bottomLeft":"bottomRight";const Ce=y.createElement(be.ZP,{type:M,danger:c,disabled:A,loading:Q,onClick:ee,htmlType:ae,href:S,title:P},te),we=y.createElement(be.ZP,{type:M,danger:c,icon:B}),[ze,Se]=O([Ce,we]);return xe(y.createElement(Te.Z.Compact,Object.assign({className:z,size:Be,block:!0},ce),ze,y.createElement(_,Object.assign({},se),Se)))};J.__ANT_BUTTON=!0;const q=J,ye=null,U=a=>{const{menu:s,arrow:x,prefixCls:h,children:H,trigger:M,disabled:c,dropdownRender:A,getPopupContainer:Q,overlayClassName:ee,rootClassName:ae,open:te,onOpenChange:L,visible:$,onVisibleChange:n,mouseEnterDelay:t=.15,mouseLeaveDelay:e=.1,autoAdjustOverflow:o=!0,placement:r="",overlay:d,transitionName:u}=a,{getPopupContainer:p,getPrefixCls:f,direction:S}=y.useContext($e.E_),B=y.useMemo(()=>{const z=f();return u!==void 0?u:r.includes("top")?`${z}-slide-down`:`${z}-slide-up`},[f,r,u]),P=y.useMemo(()=>r?r.includes("Center")?r.slice(0,r.indexOf("Center")):r:S==="rtl"?"bottomRight":"bottomLeft",[r,S]),O=f("dropdown",h),[j,I]=Y(O),{token:T}=de.Z.useToken(),N=y.Children.only(H),oe=(0,ge.Tm)(N,{className:G()(`${O}-trigger`,{[`${O}-rtl`]:S==="rtl"},N.props.className),disabled:c}),k=c?[]:M;let ce;k&&k.includes("contextMenu")&&(ce=!0);const[ue,me]=(0,w.Z)(!1,{value:te??$}),xe=(0,D.Z)(z=>{L?.(z),n?.(z),me(z)}),Oe=G()(ee,ae,I,{[`${O}-rtl`]:S==="rtl"}),se=(0,W.Z)({arrowPointAtCenter:typeof x=="object"&&x.pointAtCenter,autoAdjustOverflow:o,offset:T.marginXXS,arrowWidth:x?T.sizePopupArrow:0,borderRadius:T.borderRadius}),Be=y.useCallback(()=>{me(!1)},[]),Ie=()=>{let z;return s?.items?z=y.createElement(fe.Z,Object.assign({},s)):typeof d=="function"?z=d():z=d,A&&(z=A(z)),z=y.Children.only(typeof z=="string"?y.createElement("span",null,z):z),y.createElement(Pe.J,{prefixCls:`${O}-menu`,expandIcon:y.createElement("span",{className:`${O}-menu-submenu-arrow`},y.createElement(R.Z,{className:`${O}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:Be,validator:Ce=>{let{mode:we}=Ce}},y.createElement(le.BR,null,z))};return j(y.createElement(pe.Z,Object.assign({alignPoint:ce},(0,ne.Z)(a,["rootClassName"]),{mouseEnterDelay:t,mouseLeaveDelay:e,visible:ue,builtinPlacements:se,arrow:!!x,overlayClassName:Oe,prefixCls:O,getPopupContainer:Q||p,transitionName:B,trigger:k,overlay:Ie,placement:P,onVisibleChange:xe}),oe))};U.Button=q;const re=(0,E.Z)(U,"dropdown",a=>a),F=a=>y.createElement(re,Object.assign({},a),y.createElement("span",null));U._InternalPanelDoNotUseOrYouWillBeFired=F;const _=U},13013:(Ne,ie,i)=>{i.d(ie,{Z:()=>l});var R=i(80867);const l=R.Z},14025:(Ne,ie,i)=>{i.d(ie,{D:()=>Te,Z:()=>he});var R=i(1413),l=i(67294),G={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const pe=G;var D=i(27029),w=function(C,g){return l.createElement(D.Z,(0,R.Z)((0,R.Z)({},C),{},{ref:g,icon:pe}))};w.displayName="BarsOutlined";const ne=l.forwardRef(w);var y=i(67724),E=i(8812),W=i(94184),ge=i.n(W),$e=i(98423),fe=i(53124);const le=m=>!isNaN(parseFloat(m))&&isFinite(m);var de=i(21881),je=function(m,C){var g={};for(var b in m)Object.prototype.hasOwnProperty.call(m,b)&&C.indexOf(b)<0&&(g[b]=m[b]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,b=Object.getOwnPropertySymbols(m);v<b.length;v++)C.indexOf(b[v])<0&&Object.prototype.propertyIsEnumerable.call(m,b[v])&&(g[b[v]]=m[b[v]]);return g};const be={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Te=l.createContext({}),ve=(()=>{let m=0;return function(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return m+=1,`${C}${m}`}})(),he=l.forwardRef((m,C)=>{var{prefixCls:g,className:b,trigger:v,children:X,defaultCollapsed:Z=!1,theme:Y="dark",style:K={},collapsible:J=!1,reverseArrow:q=!1,width:ye=200,collapsedWidth:U=80,zeroWidthTriggerStyle:re,breakpoint:F,onCollapse:_,onBreakpoint:a}=m,s=je(m,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);const{siderHook:x}=(0,l.useContext)(de.Gs),[h,H]=(0,l.useState)("collapsed"in s?s.collapsed:Z),[M,c]=(0,l.useState)(!1);(0,l.useEffect)(()=>{"collapsed"in s&&H(s.collapsed)},[s.collapsed]);const A=($,n)=>{"collapsed"in s||H($),_?.($,n)},Q=(0,l.useRef)();Q.current=$=>{c($.matches),a?.($.matches),h!==$.matches&&A($.matches,"responsive")},(0,l.useEffect)(()=>{function $(t){return Q.current(t)}let n;if(typeof window<"u"){const{matchMedia:t}=window;if(t&&F&&F in be){n=t(`(max-width: ${be[F]})`);try{n.addEventListener("change",$)}catch{n.addListener($)}$(n)}}return()=>{try{n?.removeEventListener("change",$)}catch{n?.removeListener($)}}},[F]),(0,l.useEffect)(()=>{const $=ve("ant-sider-");return x.addSider($),()=>x.removeSider($)},[]);const ee=()=>{A(!h,"clickTrigger")},{getPrefixCls:ae}=(0,l.useContext)(fe.E_),te=()=>{const $=ae("layout-sider",g),n=(0,$e.Z)(s,["collapsed"]),t=h?U:ye,e=le(t)?`${t}px`:String(t),o=parseFloat(String(U||0))===0?l.createElement("span",{onClick:ee,className:ge()(`${$}-zero-width-trigger`,`${$}-zero-width-trigger-${q?"right":"left"}`),style:re},v||l.createElement(ne,null)):null,u={expanded:q?l.createElement(E.Z,null):l.createElement(y.Z,null),collapsed:q?l.createElement(y.Z,null):l.createElement(E.Z,null)}[h?"collapsed":"expanded"],p=v!==null?o||l.createElement("div",{className:`${$}-trigger`,onClick:ee,style:{width:e}},v||u):null,f=Object.assign(Object.assign({},K),{flex:`0 0 ${e}`,maxWidth:e,minWidth:e,width:e}),S=ge()($,`${$}-${Y}`,{[`${$}-collapsed`]:!!h,[`${$}-has-trigger`]:J&&v!==null&&!o,[`${$}-below`]:!!M,[`${$}-zero-width`]:parseFloat(e)===0},b);return l.createElement("aside",Object.assign({className:S},n,{style:f,ref:C}),l.createElement("div",{className:`${$}-children`},X),J||M&&o?p:null)},L=l.useMemo(()=>({siderCollapsed:h}),[h]);return l.createElement(Te.Provider,{value:L},te())})},21881:(Ne,ie,i)=>{i.d(ie,{VY:()=>V,$_:()=>ve,h4:()=>Te,Gs:()=>Pe,ZP:()=>he});var R=i(93433),l=i(94184),G=i.n(l),pe=i(98423),D=i(67294),w=i(53124),ne=i(67968),y=i(45503);const W=m=>{const{componentCls:C,colorBgContainer:g,colorBgBody:b,colorText:v}=m;return{[`${C}-sider-light`]:{background:g,[`${C}-sider-trigger`]:{color:v,background:g},[`${C}-sider-zero-width-trigger`]:{color:v,background:g,border:`1px solid ${b}`,borderInlineStart:0}}}},ge=m=>{const{antCls:C,componentCls:g,colorText:b,colorTextLightSolid:v,colorBgHeader:X,colorBgBody:Z,colorBgTrigger:Y,layoutHeaderHeight:K,layoutHeaderPaddingInline:J,layoutHeaderColor:q,layoutFooterPadding:ye,layoutTriggerHeight:U,layoutZeroTriggerSize:re,motionDurationMid:F,motionDurationSlow:_,fontSize:a,borderRadius:s}=m;return{[g]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:Z,"&, *":{boxSizing:"border-box"},[`&${g}-has-sider`]:{flexDirection:"row",[`> ${g}, > ${g}-content`]:{width:0}},[`${g}-header, &${g}-footer`]:{flex:"0 0 auto"},[`${g}-sider`]:{position:"relative",minWidth:0,background:X,transition:`all ${F}`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${C}-menu${C}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:U},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:U,color:v,lineHeight:`${U}px`,textAlign:"center",background:Y,cursor:"pointer",transition:`all ${F}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:K,insetInlineEnd:-re,zIndex:1,width:re,height:re,color:v,fontSize:m.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:X,borderStartStartRadius:0,borderStartEndRadius:s,borderEndEndRadius:s,borderEndStartRadius:0,cursor:"pointer",transition:`background ${_} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${_}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-re,borderStartStartRadius:s,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:s}}}}},W(m)),{"&-rtl":{direction:"rtl"}}),[`${g}-header`]:{height:K,paddingInline:J,color:q,lineHeight:`${K}px`,background:X,[`${C}-menu`]:{lineHeight:"inherit"}},[`${g}-footer`]:{padding:ye,color:b,fontSize:a,background:Z},[`${g}-content`]:{flex:"auto",minHeight:0}}},$e=(0,ne.Z)("Layout",m=>{const{colorText:C,controlHeightSM:g,controlHeight:b,controlHeightLG:v,marginXXS:X}=m,Z=v*1.25,Y=(0,y.TS)(m,{layoutHeaderHeight:b*2,layoutHeaderPaddingInline:Z,layoutHeaderColor:C,layoutFooterPadding:`${g}px ${Z}px`,layoutTriggerHeight:v+X*2,layoutZeroTriggerSize:v});return[ge(Y)]},m=>{const{colorBgLayout:C}=m;return{colorBgHeader:"#001529",colorBgBody:C,colorBgTrigger:"#002140"}});var fe=function(m,C){var g={};for(var b in m)Object.prototype.hasOwnProperty.call(m,b)&&C.indexOf(b)<0&&(g[b]=m[b]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,b=Object.getOwnPropertySymbols(m);v<b.length;v++)C.indexOf(b[v])<0&&Object.prototype.propertyIsEnumerable.call(m,b[v])&&(g[b[v]]=m[b[v]]);return g};const Pe=D.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function le(m){let{suffixCls:C,tagName:g,displayName:b}=m;return v=>D.forwardRef((Z,Y)=>D.createElement(v,Object.assign({ref:Y,suffixCls:C,tagName:g},Z)))}const de=D.forwardRef((m,C)=>{const{prefixCls:g,suffixCls:b,className:v,tagName:X}=m,Z=fe(m,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:Y}=D.useContext(w.E_),K=Y("layout",g),[J,q]=$e(K),ye=b?`${K}-${b}`:K;return J(D.createElement(X,Object.assign({className:G()(g||ye,v,q),ref:C},Z)))}),je=D.forwardRef((m,C)=>{const{direction:g}=D.useContext(w.E_),[b,v]=D.useState([]),{prefixCls:X,className:Z,rootClassName:Y,children:K,hasSider:J,tagName:q}=m,ye=fe(m,["prefixCls","className","rootClassName","children","hasSider","tagName"]),U=(0,pe.Z)(ye,["suffixCls"]),{getPrefixCls:re}=D.useContext(w.E_),F=re("layout",X),[_,a]=$e(F),s=G()(F,{[`${F}-has-sider`]:typeof J=="boolean"?J:b.length>0,[`${F}-rtl`]:g==="rtl"},Z,Y,a),x=D.useMemo(()=>({siderHook:{addSider:h=>{v(H=>[].concat((0,R.Z)(H),[h]))},removeSider:h=>{v(H=>H.filter(M=>M!==h))}}}),[]);return _(D.createElement(Pe.Provider,{value:x},D.createElement(q,Object.assign({ref:C,className:s},U),K)))}),be=le({tagName:"section",displayName:"Layout"})(je),Te=le({suffixCls:"header",tagName:"header",displayName:"Header"})(de),ve=le({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(de),V=le({suffixCls:"content",tagName:"main",displayName:"Content"})(de),he=be},76529:(Ne,ie,i)=>{i.d(ie,{J:()=>pe,Z:()=>D});var R=i(67294),l=function(w,ne){var y={};for(var E in w)Object.prototype.hasOwnProperty.call(w,E)&&ne.indexOf(E)<0&&(y[E]=w[E]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,E=Object.getOwnPropertySymbols(w);W<E.length;W++)ne.indexOf(E[W])<0&&Object.prototype.propertyIsEnumerable.call(w,E[W])&&(y[E[W]]=w[E[W]]);return y};const G=R.createContext(null),pe=w=>{const{children:ne}=w,y=l(w,["children"]),E=R.useContext(G),W=R.useMemo(()=>Object.assign(Object.assign({},E),y),[E,y.prefixCls,y.mode,y.selectable]);return R.createElement(G.Provider,{value:W},ne)},D=G},8505:(Ne,ie,i)=>{i.d(ie,{Z:()=>$});var R=i(94423),l=i(67294),G=i(98423),pe=i(66680),D=i(94184),w=i.n(D),ne=i(44545),y=i(33603),E=i(96159),W=i(53124),ge=i(10274),$e=i(33507),fe=i(67771),Pe=i(50438),le=i(67968),de=i(45503);const be=n=>{const{componentCls:t,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:r,lineWidth:d,lineType:u,menuItemPaddingInline:p}=n;return{[`${t}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${d}px ${u} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:p},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},ve=n=>{let{componentCls:t,menuArrowOffset:e}=n;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}};var V=i(14747);const he=n=>Object.assign({},(0,V.oN)(n)),C=(n,t)=>{const{componentCls:e,colorItemText:o,colorItemTextSelected:r,colorGroupTitle:d,colorItemBg:u,colorSubItemBg:p,colorItemBgSelected:f,colorActiveBarHeight:S,colorActiveBarWidth:B,colorActiveBarBorderSize:P,motionDurationSlow:O,motionEaseInOut:j,motionEaseOut:I,menuItemPaddingInline:T,motionDurationMid:N,colorItemTextHover:oe,lineType:k,colorSplit:ce,colorItemTextDisabled:ue,colorDangerItemText:me,colorDangerItemTextHover:xe,colorDangerItemTextSelected:Oe,colorDangerItemBgActive:se,colorDangerItemBgSelected:Be,colorItemBgHover:Ie,menuSubMenuBg:z,colorItemTextSelectedHorizontal:Ce,colorItemBgSelectedHorizontal:we}=n;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:o,background:u,[`&${e}-root:focus-visible`]:Object.assign({},he(n)),[`${e}-item-group-title`]:{color:d},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:r}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${ue} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:oe}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:Ie},"&:active":{backgroundColor:f}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:Ie},"&:active":{backgroundColor:f}}},[`${e}-item-danger`]:{color:me,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:xe}},[`&${e}-item:active`]:{background:se}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:r,[`&${e}-item-danger`]:{color:Oe},["a, a:hover"]:{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:f,[`&${e}-item-danger`]:{backgroundColor:Be}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},he(n))},[`&${e}-submenu > ${e}`]:{backgroundColor:z},[`&${e}-popup > ${e}`]:{backgroundColor:u},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:P,marginTop:-P,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:T,bottom:0,borderBottom:`${S}px solid transparent`,transition:`border-color ${O} ${j}`,content:'""'},["&:hover, &-active, &-open"]:{"&::after":{borderBottomWidth:S,borderBottomColor:Ce}},["&-selected"]:{color:Ce,backgroundColor:we,"&::after":{borderBottomWidth:S,borderBottomColor:Ce}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${P}px ${k} ${ce}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:p},[`${e}-item, ${e}-submenu-title`]:P&&B?{width:`calc(100% + ${P}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${B}px solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${N} ${I}`,`opacity ${N} ${I}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:Oe}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${N} ${j}`,`opacity ${N} ${j}`].join(",")}}}}}},g=n=>{const{componentCls:t,menuItemHeight:e,itemMarginInline:o,padding:r,menuArrowSize:d,marginXS:u,marginXXS:p}=n,f=r+d+u;return{[`${t}-item`]:{position:"relative"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:p,width:`calc(100% - ${o*2}px)`},[`${t}-submenu`]:{paddingBottom:.02},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:f}}},v=n=>{const{componentCls:t,iconCls:e,menuItemHeight:o,colorTextLightSolid:r,dropdownWidth:d,controlHeightLG:u,motionDurationMid:p,motionEaseOut:f,paddingXL:S,fontSizeSM:B,fontSizeLG:P,motionDurationSlow:O,paddingXS:j,boxShadowSecondary:I}=n,T={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{["&-inline, &-vertical"]:Object.assign({[`&${t}-root`]:{boxShadow:"none"}},g(n))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},g(n)),{boxShadow:I})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:d,maxHeight:`calc(100vh - ${u*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${O}`,`background ${O}`,`padding ${p} ${f}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:T,[`& ${t}-item-group-title`]:{paddingInlineStart:S}},[`${t}-item`]:T}},{[`${t}-inline-collapsed`]:{width:o*2,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:P,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${B}px)`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:P,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},V.vS),{paddingInline:j})}}]},X=n=>{const{componentCls:t,fontSize:e,motionDurationSlow:o,motionDurationMid:r,motionEaseInOut:d,motionEaseOut:u,iconCls:p,controlHeightSM:f}=n;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${d}`].join(","),[`${t}-item-icon, ${p}`]:{minWidth:e,fontSize:e,transition:[`font-size ${r} ${u}`,`margin ${o} ${d}`,`color ${o}`].join(","),"+ span":{marginInlineStart:f-e,opacity:1,transition:[`opacity ${o} ${d}`,`margin ${o}`,`color ${o}`].join(",")}},[`${t}-item-icon`]:Object.assign({},(0,V.Ro)()),[`&${t}-item-only-child`]:{[`> ${p}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},Z=n=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:o,borderRadius:r,menuArrowSize:d,menuArrowOffset:u}=n;return{[`${t}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:n.margin,width:d,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:d*.6,height:d*.15,backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${u})`},"&::after":{transform:`rotate(-45deg) translateY(${u})`}}}}},Y=n=>{const{antCls:t,componentCls:e,fontSize:o,motionDurationSlow:r,motionDurationMid:d,motionEaseInOut:u,lineHeight:p,paddingXS:f,padding:S,colorSplit:B,lineWidth:P,zIndexPopup:O,borderRadiusLG:j,radiusSubMenuItem:I,menuArrowSize:T,menuArrowOffset:N,lineType:oe,menuPanelMaskInset:k}=n;return[{"":{[`${e}`]:Object.assign(Object.assign({},(0,V.dF)()),{["&-hidden"]:{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,V.Wf)(n)),(0,V.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:[`background ${r}`,`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`].join(","),["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:n.radiusItem},[`${e}-item-group-title`]:{padding:`${f}px ${S}px`,fontSize:o,lineHeight:p,transition:`all ${r}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${r} ${u}`,`background ${r} ${u}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${r} ${u}`,`background ${r} ${u}`,`padding ${d} ${u}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${r} ${u}`,`padding ${r} ${u}`].join(",")},[`${e}-title-content`]:{transition:`color ${r}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:B,borderStyle:oe,borderWidth:0,borderTopWidth:P,marginBlock:P,padding:0,"&-dashed":{borderStyle:"dashed"}}}),X(n)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${S}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:O,background:"transparent",borderRadius:j,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${k}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:k},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:j},X(n)),Z(n)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:I},[`${e}-submenu-title::after`]:{transition:`transform ${r} ${u}`}})}}),Z(n)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${N})`},"&::after":{transform:`rotate(45deg) translateX(-${N})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${T*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${N})`},"&::before":{transform:`rotate(45deg) translateX(${N})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},K=(n,t)=>(0,le.Z)("Menu",(o,r)=>{let{overrideComponentToken:d}=r;if(t===!1)return[];const{colorBgElevated:u,colorPrimary:p,colorError:f,colorErrorHover:S,colorTextLightSolid:B,controlHeightLG:P,fontSize:O}=o,j=O/7*5,I=(0,de.TS)(o,{menuItemHeight:P,menuItemPaddingInline:o.margin,menuArrowSize:j,menuHorizontalHeight:P*1.15,menuArrowOffset:`${j*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:u}),T=new ge.C(B).setAlpha(.65).toRgbString(),N=(0,de.TS)(I,{colorItemText:T,colorItemTextHover:B,colorGroupTitle:T,colorItemTextSelected:B,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:p,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new ge.C(B).setAlpha(.25).toRgbString(),colorDangerItemText:f,colorDangerItemTextHover:S,colorDangerItemTextSelected:B,colorDangerItemBgActive:f,colorDangerItemBgSelected:f,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:B,colorItemBgSelectedHorizontal:p},Object.assign({},d));return[Y(I),be(I),v(I),C(I,"light"),C(N,"dark"),ve(I),(0,$e.Z)(I),(0,fe.oN)(I,"slide-up"),(0,fe.oN)(I,"slide-down"),(0,Pe._y)(I,"zoom-big")]},o=>{const{colorPrimary:r,colorError:d,colorTextDisabled:u,colorErrorBg:p,colorText:f,colorTextDescription:S,colorBgContainer:B,colorFillAlter:P,colorFillContent:O,lineWidth:j,lineWidthBold:I,controlItemBgActive:T,colorBgTextHover:N}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:f,colorItemTextHover:f,colorItemTextHoverHorizontal:r,colorGroupTitle:S,colorItemTextSelected:r,colorItemTextSelectedHorizontal:r,colorItemBg:B,colorItemBgHover:N,colorItemBgActive:O,colorSubItemBg:P,colorItemBgSelected:T,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:I,colorActiveBarBorderSize:j,colorItemTextDisabled:u,colorDangerItemText:d,colorDangerItemTextHover:d,colorDangerItemTextSelected:d,colorDangerItemBgActive:p,colorDangerItemBgSelected:p,itemMarginInline:o.marginXXS}})(n);var J=i(76529),q=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const U=n=>{const{prefixCls:t,className:e,dashed:o}=n,r=q(n,["prefixCls","className","dashed"]),{getPrefixCls:d}=l.useContext(W.E_),u=d("menu",t),p=w()({[`${u}-item-divider-dashed`]:!!o},e);return l.createElement(R.iz,Object.assign({className:p},r))};var re=i(50344),F=i(14025),_=i(53807);const s=(0,l.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),h=n=>{var t;const{className:e,children:o,icon:r,title:d,danger:u}=n,{prefixCls:p,firstLevel:f,direction:S,disableMenuItemTitleTooltip:B,inlineCollapsed:P}=l.useContext(s),O=k=>{const ce=l.createElement("span",{className:`${p}-title-content`},o);return(!r||(0,E.l$)(o)&&o.type==="span")&&o&&k&&f&&typeof o=="string"?l.createElement("div",{className:`${p}-inline-collapsed-noicon`},o.charAt(0)):ce},{siderCollapsed:j}=l.useContext(F.D);let I=d;typeof d>"u"?I=f?o:"":d===!1&&(I="");const T={title:I};!j&&!P&&(T.title=null,T.open=!1);const N=(0,re.Z)(o).length;let oe=l.createElement(R.ck,Object.assign({},(0,G.Z)(n,["title","icon","danger"]),{className:w()({[`${p}-item-danger`]:u,[`${p}-item-only-child`]:(r?N+1:N)===1},e),title:typeof d=="string"?d:void 0}),(0,E.Tm)(r,{className:w()((0,E.l$)(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${p}-item-icon`)}),O(P));return B||(oe=l.createElement(_.Z,Object.assign({},T,{placement:S==="rtl"?"left":"right",overlayClassName:`${p}-inline-collapsed-tooltip`}),oe)),oe},M=n=>{var t;const{popupClassName:e,icon:o,title:r,theme:d}=n,u=l.useContext(s),{prefixCls:p,inlineCollapsed:f,theme:S,mode:B}=u,P=(0,R.Xl)();let O;if(!o)O=f&&!P.length&&r&&typeof r=="string"?l.createElement("div",{className:`${p}-inline-collapsed-noicon`},r.charAt(0)):l.createElement("span",{className:`${p}-title-content`},r);else{const T=(0,E.l$)(r)&&r.type==="span";O=l.createElement(l.Fragment,null,(0,E.Tm)(o,{className:w()((0,E.l$)(o)?(t=o.props)===null||t===void 0?void 0:t.className:"",`${p}-item-icon`)}),T?r:l.createElement("span",{className:`${p}-title-content`},r))}const j=l.useMemo(()=>Object.assign(Object.assign({},u),{firstLevel:!1}),[u]),I=B==="horizontal"?[0,8]:[10,0];return l.createElement(s.Provider,{value:j},l.createElement(R.Wd,Object.assign({popupOffset:I},(0,G.Z)(n,["icon"]),{title:O,popupClassName:w()(p,e,`${p}-${d||S}`)})))};var c=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};function A(n){return(n||[]).map((t,e)=>{if(t&&typeof t=="object"){const o=t,{label:r,children:d,key:u,type:p}=o,f=c(o,["label","children","key","type"]),S=u??`tmp-${e}`;return d||p==="group"?p==="group"?l.createElement(R.BW,Object.assign({key:S},f,{title:r}),A(d)):l.createElement(M,Object.assign({key:S},f,{title:r}),A(d)):p==="divider"?l.createElement(U,Object.assign({key:S},f)):l.createElement(h,Object.assign({key:S},f),r)}return null}).filter(t=>t)}function Q(n){return l.useMemo(()=>n&&A(n),[n])}var ee=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const te=(0,l.forwardRef)((n,t)=>{var e,o;const r=l.useContext(J.Z),d=r||{},{getPrefixCls:u,getPopupContainer:p,direction:f}=l.useContext(W.E_),S=u(),{prefixCls:B,className:P,theme:O="light",expandIcon:j,_internalDisableMenuItemTitleTooltip:I,inlineCollapsed:T,siderCollapsed:N,items:oe,children:k,rootClassName:ce,mode:ue,selectable:me,onClick:xe}=n,Oe=ee(n,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick"]),se=(0,G.Z)(Oe,["collapsedWidth"]),Be=Q(oe)||k;(e=d.validator)===null||e===void 0||e.call(d,{mode:ue});const Ie=(0,pe.Z)(function(){var Ee;xe?.apply(void 0,arguments),(Ee=d.onClick)===null||Ee===void 0||Ee.call(d)}),z=d.mode||ue,Ce=me??d.selectable,we=l.useMemo(()=>N!==void 0?N:T,[T,N]),ze={horizontal:{motionName:`${S}-slide-up`},inline:(0,y.ZP)(S),other:{motionName:`${S}-zoom-big`}},Se=u("menu",B||d.prefixCls),[He,De]=K(Se,!r),Me=w()(`${Se}-${O}`,P);let Re;if(typeof j=="function")Re=j;else{const Ee=j||d.expandIcon;Re=(0,E.Tm)(Ee,{className:w()(`${Se}-submenu-expand-icon`,(o=Ee?.props)===null||o===void 0?void 0:o.className)})}const Ae=l.useMemo(()=>({prefixCls:Se,inlineCollapsed:we||!1,direction:f,firstLevel:!0,theme:O,mode:z,disableMenuItemTitleTooltip:I}),[Se,we,f,I,O]);return He(l.createElement(J.Z.Provider,{value:null},l.createElement(s.Provider,{value:Ae},l.createElement(R.ZP,Object.assign({getPopupContainer:p,overflowedIndicator:l.createElement(ne.Z,null),overflowedIndicatorPopupClassName:`${Se}-${O}`,mode:z,selectable:Ce,onClick:Ie},se,{inlineCollapsed:we,className:Me,prefixCls:Se,direction:f,defaultMotions:ze,expandIcon:Re,ref:t,rootClassName:w()(ce,De)}),Be))))}),L=(0,l.forwardRef)((n,t)=>{const e=(0,l.useRef)(null),o=l.useContext(F.D);return(0,l.useImperativeHandle)(t,()=>({menu:e.current,focus:r=>{var d;(d=e.current)===null||d===void 0||d.focus(r)}})),l.createElement(te,Object.assign({ref:e},n,o))});L.Item=h,L.SubMenu=M,L.Divider=U,L.ItemGroup=R.BW;const $=L}}]);