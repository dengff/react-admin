(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[964],{35060:(U,h,n)=>{"use strict";n.d(h,{yq:()=>O,uf:()=>P,dW:()=>w,WY:()=>R});var _=n(88674),x=n(52861);let T=null,o=0;const D=()=>{o++},c=()=>{o--,o===0&&T?.close()},R=(s=>{const S=x.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...s});return S.interceptors.request.use(function(d){const{loading:M=!0}=d;return M&&D(),d},function(d){return Promise.reject(d)}),S.interceptors.response.use(function(d){const{loading:M=!0,notify:j=!1}=d.config;M&&c();const{code:N,data:e,message:r,cache:a,timeout:t}=d.data,u={200:()=>d.data,401:()=>{},default:()=>Promise.reject(d.data)};return u[N]?u[N]():u.default()},function(d){const{loading:M=!0}=d.config;return M&&c(),d.response&&d.response.status,Promise.reject(d)}),S})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),O=s=>R.post("/login",{...s}),w=s=>R.post("/userInfo",{token:s}),P=s=>R.post("/logout",{token:s})},98025:(U,h,n)=>{"use strict";n.d(h,{oE:()=>x,vB:()=>_});const _={0:{text:"\u5F85\u5904\u7406",code:"0"},1:{text:"\u8D44\u6599\u586B\u62A5\u4E2D",code:"1"},2:{text:"\u8D44\u6599\u5DF2\u586B\u62A5\u5B8C\u6210",code:"2"},3:{text:"\u6682\u4E0D\u5408\u4F5C",code:"5"}},x=[{value:"guangdong",label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",value:"guangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"}]},{label:"\u4E91\u5357",value:"yunnan",children:[{value:"kunming",label:"\u6606\u660E"},{value:"qujing",label:"\u66F2\u9756"}]}],T={N:{text:"\u672A\u53D8\u66F4",code:"N"},Y:{text:"\u5DF2\u53D8\u66F4",code:"Y"}}},53916:(U,h,n)=>{"use strict";n.r(h),n.d(h,{default:()=>j});var _=n(88674),x=n.n(_),T=n(66992),o=n.n(T),D=n(33948),c=n.n(D),f=n(35060),m=n(67294),R=n(79655),O=n(52769),w=n(98025),P=n(71577),s=n(32823),S=n(85893);const d=async N=>{const{details:e}=await f.WY.post("/detailInfo",{id:N});return{data:e,success:!0}},j=()=>{const[N,e]=(0,R.lr)(),[r,a]=(0,m.useState)(!1),[t,u]=(0,m.useState)([]),C=N.get("id"),v=[{title:"\u6392\u5E8F",dataIndex:"index",valueType:"index",width:48},{title:"\u57CE\u5E02",valueType:"select",dataIndex:"city",key:"value"},{title:"\u7EA7\u8054\u9009\u62E9",dataIndex:"provinces",hideInTable:!0,search:{},valueType:"cascader",request:()=>w.oE},{title:"\u72B6\u6001",dataIndex:"progress",valueType:"select",valueEnum:w.vB},{title:"\u65F6\u95F4\u65E5\u671F",key:"dateTime",dataIndex:"dateTime",valueType:"dateTime",fieldProps:{format:"YYYY.MM.DD HH:mm:ss"}},{title:"\u7ED3\u679C",dataIndex:"result",ellipsis:!0,valueType:"textarea",key:"result",render:(y,g,A,b)=>[(0,S.jsx)("div",{children:[g.result]},"result")]},{title:"\u65F6\u95F4",tooltip:"table\u7684tip",dataIndex:"date",valueType:"date",key:"date",fieldProps:{format:"YYYY-MM-DD"}},{title:"\u4FEE\u6539\u4EBA",dataIndex:"Modified"},{title:"\u56FE\u7247",dataIndex:"image",valueType:"image",hideInSearch:!0},{title:"\u5907\u6CE8",dataIndex:"memo",valueType:"textarea",ellipsis:!0,copyable:!0,render:(y,g,A,b)=>[(0,S.jsx)("div",{children:[g.memo]},"memo")]},{title:"\u64CD\u4F5C",key:"option",valueType:"option",render:(y,g,A,b)=>[(0,S.jsx)(P.ZP,{type:"primary",loading:r,onClick:()=>(a(!0),new Promise((K,Z)=>{setTimeout(()=>{a(!1),s.ZP.success("success!"),K(t)},1500)})),children:"\u4FDD\u5B58"},"save")]}];return(0,S.jsx)("div",{children:(0,S.jsx)(O.vY,{title:"\u5217\u8868\u8BE6\u60C5",onDataSourceChange:u,columns:v,request:()=>d(C),editable:{}})})}},20640:(U,h,n)=>{"use strict";var _=n(11742),x={"text/plain":"Text","text/html":"Url",default:"Text"},T="Copy to clipboard: #{key}, Enter";function o(c){var f=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return c.replace(/#{\s*key\s*}/g,f)}function D(c,f){var m,R,O,w,P,s,S=!1;f||(f={}),m=f.debug||!1;try{O=_(),w=document.createRange(),P=document.getSelection(),s=document.createElement("span"),s.textContent=c,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(M){if(M.stopPropagation(),f.format)if(M.preventDefault(),typeof M.clipboardData>"u"){m&&console.warn("unable to use e.clipboardData"),m&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=x[f.format]||x.default;window.clipboardData.setData(j,c)}else M.clipboardData.clearData(),M.clipboardData.setData(f.format,c);f.onCopy&&(M.preventDefault(),f.onCopy(M.clipboardData))}),document.body.appendChild(s),w.selectNodeContents(s),P.addRange(w);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");S=!0}catch(M){m&&console.error("unable to copy using execCommand: ",M),m&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(f.format||"text",c),f.onCopy&&f.onCopy(window.clipboardData),S=!0}catch(j){m&&console.error("unable to copy using clipboardData: ",j),m&&console.error("falling back to prompt"),R=o("message"in f?f.message:T),window.prompt(R,c)}}finally{P&&(typeof P.removeRange=="function"?P.removeRange(w):P.removeAllRanges()),s&&document.body.removeChild(s),O()}return S}U.exports=D},35637:(U,h,n)=>{"use strict";n.d(h,{q:()=>S,l:()=>a});var _=n(93433),x=n(29439),T=n(45987),o=n(67294),D=n(87462),c=n(1413),f=n(73935),m=n(63441),R=n(94184),O=n.n(R),w=n(4942),P=n(15105),s=o.forwardRef(function(t,u){var C=t.prefixCls,v=t.style,y=t.className,g=t.duration,A=g===void 0?4.5:g,b=t.eventKey,K=t.content,Z=t.closable,G=t.closeIcon,X=G===void 0?"x":G,Q=t.props,z=t.onClick,W=t.onNoticeClose,J=t.times,V=o.useState(!1),L=(0,x.Z)(V,2),B=L[0],$=L[1],Y=function(){W(b)},k=function(E){(E.key==="Enter"||E.code==="Enter"||E.keyCode===P.Z.ENTER)&&Y()};o.useEffect(function(){if(!B&&A>0){var i=setTimeout(function(){Y()},A*1e3);return function(){clearTimeout(i)}}},[A,B,J]);var l="".concat(C,"-notice");return o.createElement("div",(0,D.Z)({},Q,{ref:u,className:O()(l,y,(0,w.Z)({},"".concat(l,"-closable"),Z)),style:v,onMouseEnter:function(){$(!0)},onMouseLeave:function(){$(!1)},onClick:z}),o.createElement("div",{className:"".concat(l,"-content")},K),Z&&o.createElement("a",{tabIndex:0,className:"".concat(l,"-close"),onKeyDown:k,onClick:function(E){E.preventDefault(),E.stopPropagation(),Y()}},X))});const S=s;var d=o.forwardRef(function(t,u){var C=t.prefixCls,v=C===void 0?"rc-notification":C,y=t.container,g=t.motion,A=t.maxCount,b=t.className,K=t.style,Z=t.onAllRemoved,G=o.useState([]),X=(0,x.Z)(G,2),Q=X[0],z=X[1],W=function(i){var E,p=Q.find(function(I){return I.key===i});p==null||(E=p.onClose)===null||E===void 0||E.call(p),z(function(I){return I.filter(function(F){return F.key!==i})})};o.useImperativeHandle(u,function(){return{open:function(i){z(function(E){var p=(0,_.Z)(E),I=p.findIndex(function(q){return q.key===i.key}),F=(0,c.Z)({},i);if(I>=0){var H;F.times=(((H=E[I])===null||H===void 0?void 0:H.times)||0)+1,p[I]=F}else F.times=0,p.push(F);return A>0&&p.length>A&&(p=p.slice(-A)),p})},close:function(i){W(i)},destroy:function(){z([])}}});var J=o.useState({}),V=(0,x.Z)(J,2),L=V[0],B=V[1];o.useEffect(function(){var l={};Q.forEach(function(i){var E=i.placement,p=E===void 0?"topRight":E;p&&(l[p]=l[p]||[],l[p].push(i))}),Object.keys(L).forEach(function(i){l[i]=l[i]||[]}),B(l)},[Q]);var $=function(i){B(function(E){var p=(0,c.Z)({},E),I=p[i]||[];return I.length||delete p[i],p})},Y=o.useRef(!1);if(o.useEffect(function(){Object.keys(L).length>0?Y.current=!0:Y.current&&(Z?.(),Y.current=!1)},[L]),!y)return null;var k=Object.keys(L);return(0,f.createPortal)(o.createElement(o.Fragment,null,k.map(function(l){var i=L[l],E=i.map(function(I){return{config:I,key:I.key}}),p=typeof g=="function"?g(l):g;return o.createElement(m.V,(0,D.Z)({key:l,className:O()(v,"".concat(v,"-").concat(l),b?.(l)),style:K?.(l),keys:E,motionAppear:!0},p,{onAllRemoved:function(){$(l)}}),function(I,F){var H=I.config,q=I.className,te=I.style,ee=H.key,ne=H.times,ae=H.className,re=H.style;return o.createElement(S,(0,D.Z)({},H,{ref:F,prefixCls:v,className:O()(q,ae),style:(0,c.Z)((0,c.Z)({},te),re),times:ne,key:ee,eventKey:ee,onNoticeClose:W}))})})),y)});const M=d;var j=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],N=function(){return document.body},e=0;function r(){for(var t={},u=arguments.length,C=new Array(u),v=0;v<u;v++)C[v]=arguments[v];return C.forEach(function(y){y&&Object.keys(y).forEach(function(g){var A=y[g];A!==void 0&&(t[g]=A)})}),t}function a(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=t.getContainer,C=u===void 0?N:u,v=t.motion,y=t.prefixCls,g=t.maxCount,A=t.className,b=t.style,K=t.onAllRemoved,Z=(0,T.Z)(t,j),G=o.useState(),X=(0,x.Z)(G,2),Q=X[0],z=X[1],W=o.useRef(),J=o.createElement(M,{container:Q,ref:W,prefixCls:y,motion:v,maxCount:g,className:A,style:b,onAllRemoved:K}),V=o.useState([]),L=(0,x.Z)(V,2),B=L[0],$=L[1],Y=o.useMemo(function(){return{open:function(l){var i=r(Z,l);(i.key===null||i.key===void 0)&&(i.key="rc-notification-".concat(e),e+=1),$(function(E){return[].concat((0,_.Z)(E),[{type:"open",config:i}])})},close:function(l){$(function(i){return[].concat((0,_.Z)(i),[{type:"close",key:l}])})},destroy:function(){$(function(l){return[].concat((0,_.Z)(l),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){z(C())}),o.useEffect(function(){W.current&&B.length&&(B.forEach(function(k){switch(k.type){case"open":W.current.open(k.config);break;case"close":W.current.close(k.key);break;case"destroy":W.current.destroy();break}}),$([]))},[B]),[Y,J]}},79370:(U,h,n)=>{"use strict";n.d(h,{G:()=>o});var _=n(98924),x=function(c){if((0,_.Z)()&&window.document.documentElement){var f=Array.isArray(c)?c:[c],m=window.document.documentElement;return f.some(function(R){return R in m.style})}return!1},T=function(c,f){if(!x(c))return!1;var m=document.createElement("div"),R=m.style[c];return m.style[c]=f,m.style[c]!==R};function o(D,c){return!Array.isArray(D)&&c!==void 0?T(D,c):x(D)}},11742:U=>{U.exports=function(){var h=document.getSelection();if(!h.rangeCount)return function(){};for(var n=document.activeElement,_=[],x=0;x<h.rangeCount;x++)_.push(h.getRangeAt(x));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return h.removeAllRanges(),function(){h.type==="Caret"&&h.removeAllRanges(),h.rangeCount||_.forEach(function(T){h.addRange(T)}),n&&n.focus()}}},38069:(U,h,n)=>{"use strict";n.d(h,{ZP:()=>N});var _=n(67294);function x(e,r){return f(e)||c(e,r)||o(e,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(e,r){if(e){if(typeof e=="string")return D(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,r)}}function D(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function c(e,r){var a=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(a!=null){var t=[],u=!0,C=!1,v,y;try{for(a=a.call(e);!(u=(v=a.next()).done)&&(t.push(v.value),!(r&&t.length===r));u=!0);}catch(g){C=!0,y=g}finally{try{!u&&a.return!=null&&a.return()}finally{if(C)throw y}}return t}}function f(e){if(Array.isArray(e))return e}function m(e){var r=typeof window>"u",a=(0,_.useState)(function(){return r?!1:window.matchMedia(e).matches}),t=x(a,2),u=t[0],C=t[1];return(0,_.useLayoutEffect)(function(){if(!r){var v=window.matchMedia(e),y=function(A){return C(A.matches)};return v.addListener(y),function(){return v.removeListener(y)}}},[e]),u}function R(e,r){return S(e)||s(e,r)||w(e,r)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,r){if(e){if(typeof e=="string")return P(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,r)}}function P(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function s(e,r){var a=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(a!=null){var t=[],u=!0,C=!1,v,y;try{for(a=a.call(e);!(u=(v=a.next()).done)&&(t.push(v.value),!(r&&t.length===r));u=!0);}catch(g){C=!0,y=g}finally{try{!u&&a.return!=null&&a.return()}finally{if(C)throw y}}return t}}function S(e){if(Array.isArray(e))return e}var d={xs:{maxWidth:575,matchMedia:"(max-width: 575px)"},sm:{minWidth:576,maxWidth:767,matchMedia:"(min-width: 576px) and (max-width: 767px)"},md:{minWidth:768,maxWidth:991,matchMedia:"(min-width: 768px) and (max-width: 991px)"},lg:{minWidth:992,maxWidth:1199,matchMedia:"(min-width: 992px) and (max-width: 1199px)"},xl:{minWidth:1200,maxWidth:1599,matchMedia:"(min-width: 1200px) and (max-width: 1599px)"},xxl:{minWidth:1600,matchMedia:"(min-width: 1600px)"}},M=function(){var r="md";if(typeof window>"u")return r;var a=Object.keys(d).find(function(t){var u=d[t].matchMedia;return!!window.matchMedia(u).matches});return r=a,r},j=function(){var r=m(d.md.matchMedia),a=m(d.lg.matchMedia),t=m(d.xxl.matchMedia),u=m(d.xl.matchMedia),C=m(d.sm.matchMedia),v=m(d.xs.matchMedia),y=(0,_.useState)(M()),g=R(y,2),A=g[0],b=g[1];return(0,_.useEffect)(function(){if(t){b("xxl");return}if(u){b("xl");return}if(a){b("lg");return}if(r){b("md");return}if(C){b("sm");return}if(v){b("xs");return}b("md")},[r,a,t,u,C,v]),A};const N=j}}]);