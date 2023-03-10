"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[786],{74173:(w,I,n)=>{n.d(I,{Z:()=>T});var y=n(67294),C=n(85893);const T=P=>{const{render:H,fallback:e,auth:A,...W}=P,U=H&&H();let L=!1;return typeof A=="function"?L=A():typeof A=="boolean"&&(L=A),L?U:(0,C.jsx)(C.Fragment,{children:e||null})}},61786:(w,I,n)=>{n.r(I),n.d(I,{default:()=>at});var y=n(89250),C=n(97183),p=n(67294),T=n(68298),P=n(12599),H=n(797),e=n(85893);const W=t=>{const s=(0,y.TH)(),r=(0,P.fp)(H.H,s).filter(o=>o.pathname!=="/"&&o.pathname!=="/home");return(0,e.jsx)("div",{children:(0,e.jsxs)(T.Z,{separator:">",children:[(0,e.jsx)(T.Z.Item,{href:"/",children:(0,e.jsx)("span",{children:"\u9996\u9875"})}),r.map(o=>{var c,i;return(0,e.jsx)(T.Z.Item,{children:(0,e.jsx)("span",{children:o==null||(c=o.route)===null||c===void 0||(i=c.meta)===null||i===void 0?void 0:i.title})},o?.pathname)})]})})};var U=n(66992),L=n(33948),E=n(53807),q=n(99160),B=n(65460),O=n(66847),S=n(19650),G=n(72985),_=n(24616),D=n(79508),N=n(28508),ee=n(27061),te=n(63434),rt=n(88674),Z=n(9994);const ne=(t,s)=>(l,r)=>{const{topHeader:o}=r(),{tabList:c}=o;if(c.every(v=>v.key!==s)){var i,u;const v={key:t.pathname,label:t==null||(i=t.route)===null||i===void 0||(u=i.meta)===null||u===void 0?void 0:u.title};l(de([...c,v]))}l(X(s))},V=t=>(s,l)=>new Promise((r,o)=>{if(t==="/home")return;const{topHeader:c}=l(),{tabList:i}=c;let u=null;const v=i.filter((g,m)=>{if(g.key!==t)return!0;g.key===t&&(u=m)}),x=i[u-1];s(ae(v)),s(X(x?.key)),r(x)}),se=t=>(s,l)=>{const{topHeader:r}=l(),{tabList:o}=r,c=o.filter(i=>i.key===t||i.key==="/home");s(re(c))},oe=t=>(s,l)=>new Promise((r,o)=>{const{topHeader:c}=l(),{tabList:i}=c,u=i.filter(v=>v.key==="/home");s(ie(u)),r()}),le=t=>s=>{s(ce(t))},ae=t=>({type:Z.Rr,tabList:t}),re=t=>({type:Z.tY,tabList:t}),ie=t=>({type:Z.L6,tabList:t}),de=t=>({type:Z.zJ,tabList:t}),X=t=>({type:Z.GK,activeKey:t}),ce=t=>({type:Z.mf,layoutItems:t});var $=n(14269);const ue=t=>(s,l)=>{const r=document.body;return s(me(t)),t.isGrey?r.setAttribute("style","filter: grayscale(1)"):t.isColorWeakness?r.setAttribute("style","filter: invert(80%)"):r.setAttribute("style","")},he=t=>s=>{s(xe(t))},ve=t=>s=>{s(ge(t))},me=t=>({type:$.M$,themeMode:t}),xe=t=>({type:$.K9,colorPrimary:t}),ge=t=>({type:$.Hj,componentSize:t});var h=n(86706),ye=n(93565);const pe=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],je=t=>{const[s,l]=(0,p.useState)(!1),{changeLayout:r,pageConfig:o={},changeColorPrimary:c,changeTheme:i}=t,{layoutItems:u}=o,{token:{colorPrimary:v},themeMode:{isGrey:x,isColorWeakness:g}}=(0,h.v9)(d=>d.theme);(0,p.useLayoutEffect)(()=>{i({isGrey:x,isColorWeakness:g})},[]);const m=()=>{l(!1)};function F(){l(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(E.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(_.Z,{onClick:F})}),(0,e.jsxs)(q.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:m,open:s,width:410,children:[(0,e.jsx)(B.Z,{children:"\u754C\u9762\u663E\u793A"}),(0,e.jsx)(ee.A,{submitter:{render:()=>null},children:(0,e.jsx)(te.Z.Group,{label:"",name:"layoutItems",initialValue:u,fieldProps:{onChange:d=>r(d)},options:pe})}),(0,e.jsx)(B.Z,{children:"\u4E3B\u9898\u8BBE\u7F6E"}),(0,e.jsxs)(O.Z,{initialValues:{colorPrimary:v,isGrey:x,isColorWeakness:g},children:[(0,e.jsxs)(S.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F"}),(0,e.jsx)(O.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(G.Z,{checkedChildren:(0,e.jsx)(D.Z,{}),unCheckedChildren:(0,e.jsx)(N.Z,{}),checked:x===!0,onChange:d=>i({isGrey:d,isColorWeakness:!1})})})]}),(0,e.jsxs)(S.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F"}),(0,e.jsx)(O.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(G.Z,{checkedChildren:(0,e.jsx)(D.Z,{}),unCheckedChildren:(0,e.jsx)(N.Z,{}),onChange:d=>i({isColorWeakness:d,isGrey:!1})})})]}),(0,e.jsx)(O.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(ye.A8,{onChange:({hex:d})=>c(d)})})]})]})]})},fe=(0,h.$j)(t=>t.topHeader,{changeLayout:le,changeTheme:ue,changeColorPrimary:he})(je);var be=n(21444),Ce=n(38296);const Ze=()=>{const[t,s]=(0,p.useState)(!1);return t?(0,e.jsx)(E.Z,{title:"\u53D6\u6D88\u5168\u5C4F",children:(0,e.jsx)(be.Z,{})}):(0,e.jsx)(E.Z,{title:"\u5168\u5C4F",children:(0,e.jsx)(Ce.Z,{})})},Te=p.memo(Ze);var Ae=n(27032),k=n(13013),Ie=n(47759),He=n(68855),Y=n(18655);const{confirm:Le}=Ae.Z,Ee=t=>{const{userInfo:s,token:l}=(0,h.v9)(i=>i.global),{logout:r}=t,o=[{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function c({key:i}){i==="logout"&&Le({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(He.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){r(l)},onCancel(){}})}return(0,e.jsx)(k.Z,{menu:{items:o,onClick:c},children:(0,e.jsx)(Ie.C,{style:{},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},Oe=(0,h.$j)(null,{logout:Y.kS})(Ee);var J=n(5405);const Se=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Fe=(0,p.memo)(t=>{const{componentSize:s,changeComponentSize:l}=t,r=Se.map(o=>(o.disabled=o.key===s,o));return(0,e.jsx)(k.Z,{trigger:["click"],menu:{items:r,onClick:({key:o})=>{l(o)}},children:(0,e.jsx)(E.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)(J.Z,{})})})}),Pe=(0,h.$j)(t=>t.theme,{changeComponentSize:ve})(Fe),Be=t=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},align:"center",children:[(0,e.jsx)(Pe,{}),(0,e.jsx)(Te,{}),(0,e.jsx)(fe,{}),(0,e.jsx)(Oe,{})]});var $e=n(72326),ke=n(84595),dt=n(17727),Re=n(34804),Ke=n(71577);const Me=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],ze=t=>{const{pathname:s}=(0,y.TH)(),l=(0,y.s0)(),{deleteCurrentTab:r,deleteAllTab:o,deleteOtherTab:c}=t,i=({key:u})=>{if(u==="current")return r(s).then(({key:v})=>l(v));if(u==="other")return c(s);if(u==="all")return o(s).finally(l("/home"))};return(0,e.jsx)(S.Z,{align:"center",children:(0,e.jsx)(k.Z,{menu:{items:Me,onClick:i},children:(0,e.jsx)(Ke.ZP,{children:(0,e.jsxs)(S.Z,{children:["\u66F4\u591A",(0,e.jsx)(Re.Z,{})]})})})})},We=(0,h.$j)(null,{deleteCurrentTab:V,deleteAllTab:oe,deleteOtherTab:se})(ze),Ue=t=>{const{addTabs:s,deleteCurrentTab:l}=t,r=(0,ke.nC)(),o=(0,y.s0)(),c=(0,y.TH)(),i=(0,h.I0)();let{tabList:u,activeKey:v}=(0,h.v9)(m=>m.topHeader,h.wU);(0,p.useEffect)(()=>{const{pathname:m}=c;s(r,m)},[c.pathname]);const x=(m,F)=>{l(m).then(({key:d})=>o(d))},g=m=>o(m);return(0,e.jsx)($e.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},onEdit:x,onTabClick:g,activeKey:v,items:u,tabBarExtraContent:(0,e.jsx)(We,{})})},Ge=(0,h.$j)(null,{addTabs:ne,deleteCurrentTab:V})(Ue);var De=n(1351),Ne=n(76629);const Ve=t=>{const{collapsed:s,updateCollapse:l}=t;return(0,e.jsx)("span",{style:{fontSize:"20px",cursor:"pointer",transition:"color 0.3s"},onClick:()=>l(!s),children:s?(0,e.jsx)(De.Z,{}):(0,e.jsx)(Ne.Z,{})})},Xe=(0,h.$j)(t=>t.global,{updateCollapse:Y.oR})(Ve);var Ye=n(74173);const Je=t=>{const{pageConfig:s}=(0,h.v9)(r=>r.topHeader),{layoutItems:l}=s??{};return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",height:"38px"},children:[(0,e.jsx)(Xe,{}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[(0,e.jsx)(Ye.Z,{auth:l?.includes("breadcrumb"),render:()=>(0,e.jsx)(W,{}),fallback:(0,e.jsx)("span",{})}),(0,e.jsx)(Be,{})]})]}),(0,e.jsx)(B.Z,{style:{margin:"4px 0"}}),l?.includes("tabs")&&(0,e.jsx)(Ge,{})]})};var Q=n(15286);const Qe=Q.ZP.div`
  height: 100%;

  .layout-content {
    margin: 18px 16px;
    height: 100%;
    overflow-Y: auto;
    overflow-X: hidden;
    border-Radius: 4px;
    box-Shadow: 0 2px 6px;
    background: rgb(255, 255, 255);

  }

  .layout-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .layout-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent);
  }

  .layout-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
`;var we=n(8505),qe=n(16262);const _e="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",et=Q.ZP.div`
  .logo {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      width: auto;
      height: 48px;
    }
  }

  .scrollbar {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }

  .scrollbar::-webkit-scrollbar {
    width: 0;
  }
`,tt=()=>{const t=(0,y.s0)(),{userInfo:s,collapsed:l}=(0,h.v9)(d=>d.global,h.wU),{pageConfig:r={}}=(0,h.v9)(d=>d.topHeader),{layoutItems:o}=r,{pathname:c}=(0,y.TH)(),i=d=>d.map(a=>{var j,f,b;return{...a,label:a==null||(j=a.meta)===null||j===void 0?void 0:j.title,key:a.path,title:a==null||(f=a.meta)===null||f===void 0?void 0:f.title,icon:(0,e.jsx)(J.Z,{}),children:(a==null||(b=a.children)===null||b===void 0?void 0:b.length)&&i(a?.children)}}).filter(a=>{var j,f,b,R,K,M,z;if((a==null||(j=a.meta)===null||j===void 0?void 0:j.hideInMenu)===!0)return!1;if(s?.role==="admin"||!(a!=null&&(f=a.meta)!==null&&f!==void 0&&(b=f.auth)!==null&&b!==void 0&&(R=b.roles)!==null&&R!==void 0&&R.length)||a!=null&&(K=a.meta)!==null&&K!==void 0&&(M=K.auth)!==null&&M!==void 0&&(z=M.roles)!==null&&z!==void 0&&z.includes(s?.role))return!0}),u=i(qe.Z),v=d=>d.filter(a=>c.indexOf(a.path)>-1).map(a=>a.key),[x,g]=(0,p.useState)(()=>v(u)),m=d=>{const a=d[d.length-1];if(a!=null&&a.includes(d[0]))return g(d);g([a])},F=({key:d})=>t(d);return(0,e.jsxs)(et,{children:[o?.includes("logo")&&(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:_e})}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(we.Z,{theme:"dark",mode:"inline",selectedKeys:[c],openKeys:x,items:u,onOpenChange:m,onClick:F})})]})},{Header:nt,Sider:st,Content:ot,Footer:lt}=C.Z,at=()=>{const{userInfo:t,collapsed:s}=(0,h.v9)(o=>o.global,h.wU),{pageConfig:l}=(0,h.v9)(o=>o.topHeader),{layoutItems:r}=l??{};return(0,e.jsx)(Qe,{children:(0,e.jsxs)(C.Z,{style:{height:"100%"},children:[(0,e.jsx)(st,{trigger:null,collapsible:!0,collapsed:s,children:(0,e.jsx)(tt,{})}),(0,e.jsxs)(C.Z,{className:"site-layout",children:[(0,e.jsx)(nt,{style:{padding:"0 20px",background:"#fff",height:"auto"},children:(0,e.jsx)(Je,{})}),(0,e.jsx)(ot,{className:"layout-content",children:(0,e.jsx)("section",{className:"layout-content-section",style:{padding:"6px 6px",height:"100%"},children:(0,e.jsx)(y.j3,{})})}),r?.includes("pageFooter")&&(0,e.jsx)(lt,{style:{textAlign:"center",color:"#d9d9d9"},children:"Dengff Admin Template"})]})]})})}}}]);
