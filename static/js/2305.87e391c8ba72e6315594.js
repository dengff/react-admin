"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[2305],{63434:(y,x,t)=>{t.d(x,{Z:()=>o});var l=t(1413),A=t(44925),a=t(22270),M=t(9676),u=t(67294),h=t(64893),v=t(41420),_=t(85893),p=["options","fieldProps","proFieldProps","valueEnum"],P=u.forwardRef(function(e,n){var i=e.options,s=e.fieldProps,C=e.proFieldProps,T=e.valueEnum,f=(0,A.Z)(e,p);return(0,_.jsx)(v.Z,(0,l.Z)({ref:n,valueType:"checkbox",valueEnum:(0,a.h)(T,void 0),fieldProps:(0,l.Z)({options:i},s),lightProps:(0,l.Z)({labelFormatter:function(){return(0,_.jsx)(v.Z,(0,l.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,a.h)(T,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,l.Z)({options:i},s),proFieldProps:C},f))}},f.lightProps),proFieldProps:C},f))}),D=u.forwardRef(function(e,n){var i=e.fieldProps,s=e.children;return(0,_.jsx)(M.Z,(0,l.Z)((0,l.Z)({ref:n},i),{},{children:s}))}),m=(0,h.G)(D,{valuePropName:"checked"}),r=m;r.Group=P;const o=r},86615:(y,x,t)=>{t.d(x,{Z:()=>o});var l=t(1413),A=t(44925),a=t(22270),M=t(80575),u=t(67294),h=t(64893),v=t(41420),_=t(85893),p=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],P=u.forwardRef(function(e,n){var i=e.fieldProps,s=e.options,C=e.radioType,T=e.layout,f=e.proFieldProps,O=e.valueEnum,j=(0,A.Z)(e,p);return(0,_.jsx)(v.Z,(0,l.Z)((0,l.Z)({valueType:C==="button"?"radioButton":"radio",ref:n,valueEnum:(0,a.h)(O,void 0)},j),{},{fieldProps:(0,l.Z)({options:s,layout:T},i),proFieldProps:f,filedConfig:{customLightMode:!0}}))}),D=u.forwardRef(function(e,n){var i=e.fieldProps,s=e.children;return(0,_.jsx)(M.ZP,(0,l.Z)((0,l.Z)({},i),{},{ref:n,children:s}))}),m=(0,h.G)(D,{valuePropName:"checked",ignoreWidth:!0}),r=m;r.Group=P,r.Button=M.ZP.Button,r.displayName="ProFormComponent";const o=r},65460:(y,x,t)=>{t.d(x,{Z:()=>m});var l=t(94184),A=t.n(l),a=t(67294),M=t(53124),u=t(67968),h=t(45503),v=t(14747);const _=r=>{const{componentCls:o,sizePaddingEdgeHorizontal:e,colorSplit:n,lineWidth:i}=r;return{[o]:Object.assign(Object.assign({},(0,v.Wf)(r)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${r.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${r.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${o}-with-text`]:{display:"flex",alignItems:"center",margin:`${r.dividerHorizontalWithTextGutterMargin}px 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${o}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${o}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${o}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${o}-with-text${o}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${o}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${o}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${o}-with-text-left${o}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${o}-inner-text`]:{paddingInlineStart:e}},[`&-horizontal${o}-with-text-right${o}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${o}-inner-text`]:{paddingInlineEnd:e}}})}},p=(0,u.Z)("Divider",r=>{const o=(0,h.TS)(r,{dividerVerticalGutterMargin:r.marginXS,dividerHorizontalWithTextGutterMargin:r.margin,dividerHorizontalGutterMargin:r.marginLG});return[_(o)]},{sizePaddingEdgeHorizontal:0});var P=function(r,o){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&o.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)o.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(e[n[i]]=r[n[i]]);return e};const m=r=>{const{getPrefixCls:o,direction:e}=a.useContext(M.E_),{prefixCls:n,type:i="horizontal",orientation:s="center",orientationMargin:C,className:T,rootClassName:f,children:O,dashed:j,plain:R}=r,$=P(r,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),E=o("divider",n),[I,B]=p(E),b=s.length>0?`-${s}`:s,W=!!O,d=s==="left"&&C!=null,c=s==="right"&&C!=null,g=A()(E,B,`${E}-${i}`,{[`${E}-with-text`]:W,[`${E}-with-text${b}`]:W,[`${E}-dashed`]:!!j,[`${E}-plain`]:!!R,[`${E}-rtl`]:e==="rtl",[`${E}-no-default-orientation-margin-left`]:d,[`${E}-no-default-orientation-margin-right`]:c},T,f),L=Object.assign(Object.assign({},d&&{marginLeft:C}),c&&{marginRight:C});return I(a.createElement("div",Object.assign({className:g},$,{role:"separator"}),O&&i!=="vertical"&&a.createElement("span",{className:`${E}-inner-text`,style:L},O)))}},67713:(y,x,t)=>{t.d(x,{K:()=>M});var l=t(67294),A=t(54599),a=t(85893);const M=h=>{var v,_;const{route:p}=(0,A.nC)(),{backup:P,children:D,permissionControl:m}=h,r=(v=p.route.meta)===null||v===void 0||(_=v.auth)===null||_===void 0?void 0:_.permissionControl;let o=null;return typeof m=="function"?o=m():o=r?.filter(e=>m?.includes(e)),o?(0,a.jsx)(a.Fragment,{children:u(D)}):P?(0,a.jsx)(a.Fragment,{children:u(P)}):null};function u(h){return l.isValidElement(h)?h:(0,a.jsx)(a.Fragment,{children:h})}},42305:(y,x,t)=>{t.r(x),t.d(x,{default:()=>T});var l=t(66992),A=t.n(l),a=t(33948),M=t.n(a),u=t(27061),h=t(63434),v=t(86615),_=t(38345),p=t(67294),P=t(67713),D=t(19650),m=t(71577),r=t(65460),o=t(54599),e=t(85893);const n=["save","reset","edit","submit","view"],i=[{text:"Auth-- > [Admin]",role:["admin"],style:{height:"100%",background:"linear-gradient(to left, #4BC0C8, #C779D0, #FEAC5E)"}},{text:"Auth---> [Editor]",role:["editor"],style:{height:"100%",background:"linear-gradient(to right, #ed4264, #ffedbc,#ed4264)"}},{text:"Auth-- > [Guest]",role:["guest"],style:{height:"100%",background:"linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)"}}],s=[{text:"Save",permission:["save"]},{text:"Reset",permission:["reset"]},{text:"Edit",permission:["edit"]},{text:"Submit",permission:["submit"],backup:(0,e.jsx)("span",{children:"[\u6CA1\u6709Submit\u6743\u9650\u7684\u56DE\u663E!]"})},{text:"View",permission:["view"]}],T=()=>{var f,O,j;const R=(0,p.useRef)(),[$,E]=(0,p.useState)(["admin"]),[I,B]=(0,p.useState)([]),{route:b}=(0,o.nC)(),W=b==null||(f=b.route)===null||f===void 0||(O=f.meta)===null||O===void 0||(j=O.auth)===null||j===void 0?void 0:j.permissionControl;return(0,p.useEffect)(()=>{B(W)},[]),(0,e.jsxs)("div",{style:{background:"#fff"},children:[(0,e.jsx)(u.A,{formRef:R,layout:"horizontal",title:"\u5176\u4ED6\u6743\u9650",initialValues:{permissions:["save"]},submitter:{render:(d,c)=>[(0,e.jsx)(P.K,{permissionControl:["reset"],backup:(0,e.jsx)("a",{children:"backup"}),children:(0,e.jsx)(D.Z,{children:(0,e.jsx)(m.ZP,{onClick:()=>{var g;R==null||(g=R.current)===null||g===void 0||g.resetFields(),B(["save"])},children:"\u91CD\u7F6E"})})})]},onValuesChange:(d,c)=>{const{permissions:g=[]}=c;B(g)},children:(0,e.jsxs)(u.A.Group,{children:[(0,e.jsx)(h.Z.Group,{label:"\u5207\u6362\u6743\u9650\u6D4B\u8BD5",name:"permissions",options:n}),(0,e.jsx)(u.A.Item,{label:"\u6309\u94AE\u7EC4",children:(0,e.jsx)(D.Z,{size:[12,12],children:s.map(d=>(0,e.jsx)(P.K,{permissionControl:()=>{var c;return!!((c=d.permission.filter(g=>I.includes(g)))!==null&&c!==void 0&&c.length)},backup:d.backup,children:(0,e.jsx)(m.ZP,{size:"small",type:"primary",children:d.text})},d.text))})})]})}),(0,e.jsx)(r.Z,{}),(0,e.jsx)(u.A,{layout:"horizontal",submitter:{render:()=>null},initialValues:{role:"admin"},children:(0,e.jsx)(v.Z.Group,{name:"role",label:`\u5207\u6362\u6743\u9650 --> [${$}]`,radioType:"button",fieldProps:{onChange:d=>{const{value:c}=d.target;E([c])}},options:[{value:"admin",label:"admin"},{value:"editor",label:"editor"},{value:"guest",label:"guest"}]})}),(0,e.jsx)(_.Z,{split:"vertical",title:"\u5207\u6362\u6F14\u793A",bordered:!0,headerBordered:!0,boxShadow:!0,gutter:8,style:{height:"220px"},children:i.map(d=>(0,e.jsx)(P.K,{permissionControl:()=>{var c;return $.includes("admin")||!!((c=d.role.filter(g=>$.includes(g)))!==null&&c!==void 0&&c.length)},children:(0,e.jsx)(_.Z,{hoverable:!0,layout:"center",style:d.style,children:(0,e.jsx)("h1",{children:d.text})})},d.text))})]})}}}]);