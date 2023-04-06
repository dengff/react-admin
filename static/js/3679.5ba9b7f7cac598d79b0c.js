"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[3679],{39649:(Q,A,t)=>{t.d(A,{yq:()=>x,uf:()=>m,Il:()=>e,dW:()=>L,WY:()=>f});var y=t(88674),i=t(52861);const b={baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0},f=((p=b)=>{const r=i.Z.create({...p});return r.interceptors.request.use(function(u){return u},function(u){return Promise.reject(u)}),r.interceptors.response.use(function(u){const{data:a}=u,{code:P,message:C}=a;if(a instanceof ArrayBuffer)return a;const Z={200:()=>a,default:()=>Promise.reject(u.data)};return Z[P]?Z[P]():Z.default()},function(u){return Promise.reject(u)}),r})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),x=p=>f.post("/login",{...p}),L=p=>f.post("/userInfo",{token:p}),m=p=>f.post("/logout",{token:p}),e=p=>f.post("/detailInfo",{...p})},67713:(Q,A,t)=>{t.d(A,{K:()=>F});var y=t(67294),i=t(54599),b=t(85893);const F=f=>{var x,L;const{route:m}=(0,i.nC)(),{backup:e,children:p,permissionControl:r}=f,u=(x=m.route.meta)===null||x===void 0||(L=x.auth)===null||L===void 0?void 0:L.permissionControl;let a=null;return typeof r=="function"?a=r():a=u?.filter(P=>r?.includes(P)),a?(0,b.jsx)(b.Fragment,{children:g(p)}):e?(0,b.jsx)(b.Fragment,{children:g(e)}):null};function g(f){return y.isValidElement(f)?f:(0,b.jsx)(b.Fragment,{children:f})}},93679:(Q,A,t)=>{t.r(A),t.d(A,{default:()=>Ct});var y=t(67294),i=t(70743),b=t(66992),F=t(33948),g=t(15286);const f=g.ZP.div`
  height: 100%;

  .scrollbar {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }

  .scrollbar::-webkit-scrollbar {
    width: 0;
  }

  .site-layout {
    .layout-header {
      background: #fff;
      height: auto;
    }

  }

  .layout-content {
    min-width: 1100px;
    padding: 16px 14px;
    height: 100%;
    flex: 1;
    overflow-Y: auto;
    overflow-X: auto;
    //border-Radius: 4px;
    //box-Shadow: 0 2px 6px;
    //background: rgb(255, 255, 255);

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
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }

  .layout-footer {
    text-align: center;
    background: rgb(240, 242, 245);
    color: rgb(217, 217, 217);
    padding: 0px 0px 20px;
  }
`;var x=t(97183),L=t(67713);const m=s=>s.topHeader;var e=t(85893);const p="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",r=g.ZP.div`
  width: ${s=>s.mode==="horizontal"?"200px":!1};
  display: flex;
  align-items: center;

  .logo {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      width: auto;
      height: 48px;
    }
  }
`,a=s=>{const{pageConfig:o}=(0,i.v9)(m),{layoutItems:l}=o??{};return(0,e.jsx)(L.K,{permissionControl:()=>l?.includes("logo"),children:(0,e.jsx)(r,{...s,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:p,alt:"logo"})})})})};var P=t(8505),C=t(89250),Z=t(57259),I=t(16165),d=t(48925),j=t(33348);const R=({menuRef:s,...o})=>{const l=(0,C.s0)(),[h,c]=(0,y.useState)([]),{userInfo:v}=(0,i.v9)(j.b,i.wU),{pathname:O}=(0,C.TH)(),$=D=>D.map(n=>{var H,k,z,G,Y;return{...n,label:n==null||(H=n.meta)===null||H===void 0?void 0:H.title,key:n.path,title:n==null||(k=n.meta)===null||k===void 0?void 0:k.title,icon:Z.FO[n==null||(z=n.meta)===null||z===void 0?void 0:z.icon]?(0,e.jsx)(I.Z,{component:Z.FO[n==null||(G=n.meta)===null||G===void 0?void 0:G.icon]}):null,children:(n==null||(Y=n.children)===null||Y===void 0?void 0:Y.length)&&$(n?.children)}}).filter(n=>{var H,k,z,G,Y,ve,pe;if((n==null||(H=n.meta)===null||H===void 0?void 0:H.hideInMenu)===!0)return!1;if(v?.role==="admin"||!(n!=null&&(k=n.meta)!==null&&k!==void 0&&(z=k.auth)!==null&&z!==void 0&&(G=z.roles)!==null&&G!==void 0&&G.length)||n!=null&&(Y=n.meta)!==null&&Y!==void 0&&(ve=Y.auth)!==null&&ve!==void 0&&(pe=ve.roles)!==null&&pe!==void 0&&pe.includes(v?.role))return!0}),E=$(d.Z),N=D=>{if(D.includes("rc-menu-more"))return c(D);const n=D[D.length-1];if(n!=null&&n.includes(D[0]))return c(D);c([n])},xe=({key:D})=>l(D);return(0,y.useImperativeHandle)(s,()=>({setOpenKeys:c}),[O]),(0,e.jsx)(P.Z,{theme:"dark",selectedKeys:[O],mode:"inline",openKeys:h,items:E,onOpenChange:N,onClick:xe,...o})};var K=t(66298),U=t(54599);const B=()=>{const{pageConfig:s}=(0,i.v9)(m),{layoutItems:o}=s??{},{matches:l}=(0,U.nC)(),h=l.map(c=>{var v,O;return{title:(v=c.route)===null||v===void 0||(O=v.meta)===null||O===void 0?void 0:O.title}});return(0,e.jsx)(L.K,{permissionControl:()=>!!(o!=null&&o.includes("breadcrumb")),backup:(0,e.jsx)("span",{}),children:(0,e.jsx)(K.Z,{separator:">",items:h})})};var T=t(53807),V=t(40385),w=t(24616),X=t(65460),J=t(19650),be=t(71230),se=t(15746),Le=t(27061),Pe=t(63434),_=t(88369),W=t(38717),q=t(17925),oe=t(29225);const ne=g.iv`
  padding: 0 0;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  overflow: hidden;
  background-color: ${s=>(0,oe.fo)(s.colorPrimary,.82)};
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, .18);
`,ge=g.iv`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 11%;
    height: 100%;
    z-index: 1;
    background-color: ${s=>(0,oe.fo)(s.colorPrimary,.2)};
  }

`,re=g.iv`
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: ${s=>(0,oe.fo)(s.colorPrimary,.5)};
    content: "";
  }
`,Ze=g.ZP.div`
  .classicLayout {
    ::after {
      z-index: 1;
    }

    .ant-pro-checkcard-content {
      ${ne}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${ge}
      ${re}
      &::after {
        z-index: 1;
      }
    }
  }

  .landscapeLayout {
    .ant-pro-checkcard-content {
      ${ne}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${re}
    }
  }

  .portraitLayout {
    .ant-pro-checkcard-content {
      ${ne}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }
      ${ge}
      ${re}
    }
  }



`,Te=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],Ie=()=>{const{pageConfig:s}=(0,i.v9)(m),{token:{colorPrimary:o}}=(0,i.v9)(q.P),l=(0,i.I0)(),{layoutItems:h,layoutMode:c}=s;return(0,e.jsxs)(Ze,{colorPrimary:o,children:[(0,e.jsx)(X.Z,{children:(0,e.jsxs)(J.Z,{style:{alignItems:"center"},children:[(0,e.jsx)(Z.WB,{}),"\u754C\u9762\u663E\u793A"]})}),(0,e.jsxs)(Le.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(Pe.Z.Group,{label:"",name:"layoutItems",initialValue:h,fieldProps:{onChange:v=>l((0,W.c_)(v))},options:Te}),(0,e.jsx)(_.Z.Group,{onChange:v=>l((0,W.fu)(v)),value:c,size:"small",style:{width:"100%"},children:(0,e.jsxs)(be.Z,{gutter:20,style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},children:[(0,e.jsx)(T.Z,{title:"\u7ECF\u5178\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(_.Z,{className:"classicLayout",title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:90,height:60}})})}),(0,e.jsx)(T.Z,{title:"\u6A2A\u5411\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(_.Z,{className:"landscapeLayout",title:"\u5E03\u5C40",style:{width:90,height:60},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})})}),(0,e.jsx)(T.Z,{title:"\u7EB5\u5411\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(_.Z,{className:"portraitLayout",title:"\u5E03\u5C40",style:{width:90,height:60},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})})]})})]})]})};var ee=t(33845),ye=t(97573),fe=t(79508),je=t(28508),ae=t(51741);const le=s=>(o,l)=>{const h=document.body;return o(Se(s)),s.isGrey?h.setAttribute("style","filter: grayscale(1)"):s.isColorWeakness?h.setAttribute("style","filter: invert(80%)"):h.setAttribute("style","")},Oe=s=>o=>{o(Me(s))},Ae=s=>o=>{o(De(s))},Se=s=>({type:ae.Z.CHANGE_THEME,themeMode:s}),Me=s=>({type:ae.Z.SET_COLOR_PRIMARY,colorPrimary:s}),De=s=>({type:ae.Z.SET_COMPONENT_SIZE,componentSize:s}),Lt=()=>({type:themeActions.RESET_THEME_STATE});var Re=t(55241),Ue=t(93565);const Be=g.ZP.div`
  .theme-input {
    border: 1px solid rgb(229, 230, 235);
    box-sizing: border-box;
    display: flex;
    height: 32px;
    padding: 3px;
    width: 100%;
    cursor: pointer;

    .theme-color {
      height: 24px;
      margin-right: 10px;
      min-width: 100px;
    }
  }
`,Fe=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#d81b60","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],$e=({onChange:s,currentColor:o="#9b59b6",...l})=>{const h=(c,v)=>{s(c)};return(0,e.jsx)(Be,{children:(0,e.jsx)(Re.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Ue.xS,{presetColors:Fe,onChange:h,...l}),placement:"bottom",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:o}}),(0,e.jsx)("span",{children:o})]})})})},He=(0,y.memo)(()=>{const s=(0,i.I0)(),{token:{colorPrimary:o},themeMode:{isGrey:l,isColorWeakness:h}}=(0,i.v9)(q.P,i.wU);return(0,y.useLayoutEffect)(()=>{s(le({isGrey:l,isColorWeakness:h}))},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.Z,{children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(Z.kS,{}),"\u4E3B\u9898\u8BBE\u7F6E"]})}),(0,e.jsxs)(ee.Z,{initialValues:{colorPrimary:o,isGrey:l,isColorWeakness:h},children:[(0,e.jsx)(ee.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)($e,{currentColor:o,onChange:c=>{console.log(c),s(Oe(c.hex))}})}),(0,e.jsxs)(J.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(ee.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(fe.Z,{}),unCheckedChildren:(0,e.jsx)(je.Z,{}),checked:l,onChange:c=>s(le({isGrey:c,isColorWeakness:!1}))})})]}),(0,e.jsxs)(J.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(ee.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(fe.Z,{}),unCheckedChildren:(0,e.jsx)(je.Z,{}),onChange:c=>s(le({isColorWeakness:c,isGrey:!1}))})})]})]})]})}),Ke=()=>{const[s,o]=(0,y.useState)(!1),l=()=>{o(!1)};function h(){o(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(w.Z,{onClick:h})}),(0,e.jsxs)(V.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:l,open:s,children:[(0,e.jsx)(Ie,{}),(0,e.jsx)(He,{})]})]})};var We=t(21444),Ne=t(38296),te=t(47489);const ke=()=>{const[s,o]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{te.Z.on("change",()=>{o(te.Z.isFullscreen)})},[]),(0,e.jsx)(L.K,{permissionControl:()=>te.Z.isEnabled,children:(0,e.jsx)(T.Z,{title:s?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:l=>te.Z.toggle(),children:s?(0,e.jsx)(We.Z,{}):(0,e.jsx)(Ne.Z,{})})})})},ze=y.memo(ke);var Ge=t(27032),ie=t(13013),Ye=t(47759),Ve=t(89366),Xe=t(68855),Ee=t(40778);const{confirm:Je}=Ge.Z,Qe=()=>{const{userInfo:s,token:o}=(0,i.v9)(j.b),l=(0,i.I0)(),h=(0,C.s0)(),c=[{label:(0,e.jsx)("span",{onClick:v=>{h("/user/info")},children:"\u4E2A\u4EBA\u4E2D\u5FC3"}),key:"/user/info",icon:(0,e.jsx)(Ve.Z,{})},{label:(0,e.jsx)("span",{onClick:()=>{Je({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(Xe.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){l((0,Ee.kS)(o))}})},children:"\u9000\u51FA\u767B\u5F55"}),key:"logout",icon:(0,e.jsx)(Z.R0,{})}];return(0,e.jsx)(ie.Z,{trigger:["click"],placement:"bottomLeft",menu:{items:c},children:(0,e.jsx)(Ye.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},we=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],_e=(0,y.memo)(s=>{const{componentSize:o}=(0,i.v9)(q.P),l=(0,i.I0)(),h=we.map(c=>(c.disabled=c.key===o,c));return(0,e.jsx)(ie.Z,{trigger:["click"],menu:{items:h,onClick:({key:c})=>{l(Ae(c))}},children:(0,e.jsx)(T.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)("span",{className:"anticon",children:(0,e.jsx)(Z.el,{})})})})}),ce=()=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(_e,{}),(0,e.jsx)(ze,{}),(0,e.jsx)(Ke,{}),(0,e.jsx)(Qe,{})]});var qe=t(48700),St=t(88674),Mt=t(17727),et=t(34804);const tt=g.ZP.div`
  .ant-space-item {
    cursor: pointer;
    transform: rotate(136deg);
    transition: all .3s .1s;
  }

  .ant-space-item:hover {
    transform: rotate(180deg) scale(1);
    color: ${s=>s.colorPrimary};
  }
`,st=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],ot=()=>{const s=(0,i.I0)(),{pathname:o}=(0,C.TH)(),l=(0,C.s0)(),{token:{colorPrimary:h}}=(0,i.v9)(q.P),c=({key:v})=>{if(v==="current")return s((0,W._I)(o)).then(({key:O})=>l(O));if(v==="other")return s((0,W.ND)(o));if(v==="all")return s((0,W.Ud)(o)).finally(()=>{l("/home")})};return(0,e.jsx)(tt,{colorPrimary:h,children:(0,e.jsx)(J.Z,{align:"center",children:(0,e.jsx)(ie.Z,{menu:{items:st,onClick:c},children:(0,e.jsx)(J.Z,{children:(0,e.jsx)(et.Z,{})})})})})},de=s=>{const{style:o}=s,{route:l}=(0,U.nC)(),h=(0,C.s0)(),c=(0,C.TH)(),v=(0,i.I0)();let{tabList:O,activeKey:$,pageConfig:E}=(0,i.v9)(m,i.wU);const{layoutItems:N}=E??{};(0,y.useEffect)(()=>{const{pathname:n}=c;v((0,W.BH)(l,n))},[c.pathname]);const xe=n=>{v((0,W._I)(n)).then(({key:H})=>h(H))},D=n=>h(n);return(0,e.jsx)(L.K,{permissionControl:()=>N?.includes("tabs"),children:(0,e.jsx)(qe.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:n=>xe(n),onTabClick:D,activeKey:$,items:O,tabBarExtraContent:(0,e.jsx)(ot,{}),style:o})})};var nt=t(1351),rt=t(76629);const Ce=()=>{const{collapsed:s}=(0,i.v9)(j.b),o=(0,i.I0)();return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>o((0,Ee.oR)(!s)),children:s?(0,e.jsx)(nt.Z,{}):(0,e.jsx)(rt.Z,{})})},at=g.ZP.div`

  .classic-header {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;

    .classic-header-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }



`,lt=()=>(0,e.jsxs)(at,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(Ce,{}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(B,{}),(0,e.jsx)(ce,{})]})]}),(0,e.jsx)(X.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(de,{})]}),{Content:it}=x.Z,ue=()=>(0,e.jsx)(it,{className:"layout-content",children:(0,e.jsx)(C.j3,{})}),{Footer:ct}=x.Z,he=()=>{const{pageConfig:s}=(0,i.v9)(m),{layoutItems:o}=s??{};return(0,e.jsx)(L.K,{permissionControl:()=>o?.includes("pageFooter"),children:(0,e.jsx)(ct,{className:"layout-footer",children:"Dengff Admin Template"})})};var Bt=t(74916);const me=(s=!1)=>{var o;const l=(0,y.useRef)(null),{pathname:h}=(0,C.TH)();let c=[];const v=(o=h.split(/\//))===null||o===void 0?void 0:o[1],O=($=d.Z)=>($.forEach(E=>{if(E.path===h&&c.push(E.path),E.path.includes(v)&&h.indexOf(E.path)>-1&&c.push(E.path),E!=null&&E.children)return O(E.children)}),c);return(0,y.useEffect)(()=>{var $,E;if(s)return l==null||($=l.current)===null||$===void 0?void 0:$.setOpenKeys([]);const N=O();(E=l.current)===null||E===void 0||E.setOpenKeys(N)},[h]),[l]},{Header:dt,Sider:ut}=x.Z,ht=()=>{const{collapsed:s}=(0,i.v9)(j.b,i.wU),[o]=me();return(0,e.jsx)(f,{children:(0,e.jsxs)(x.Z,{style:{height:"100%"},children:[(0,e.jsxs)(ut,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:s,children:[(0,e.jsx)(a,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(R,{menuRef:o,theme:"light"})})]}),(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(dt,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(lt,{})}),(0,e.jsx)(ue,{}),(0,e.jsx)(he,{})]})]})})},mt=g.ZP.div`
  height: 100%;

  .top-header-content {
    padding: 0 8px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    //color: rgba(255, 255, 255, 0.65);
    //background: rgb(0, 21, 41);
    .ant-menu-horizontal {
      border: none;
    }

    .top-header-right {
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }

`,xt=()=>{const[s]=me(!0);return(0,e.jsx)(mt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(a,{mode:"horizontal"}),(0,e.jsx)(R,{theme:"light",menuRef:s,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(ce,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(X.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(de,{})]})]})})},{Header:vt}=x.Z,pt=()=>(0,e.jsx)(f,{children:(0,e.jsx)(x.Z,{style:{height:"100%"},children:(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(vt,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(xt,{})}),(0,e.jsx)(ue,{}),(0,e.jsx)(he,{})]})})}),gt=g.ZP.div`

  .portrait-header {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;
    //border-bottom: 1px solid #e1e6eb;
    .portrait-header-content {
      height: 100%;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }




`,yt=()=>(0,e.jsx)(gt,{children:(0,e.jsx)("div",{className:"portrait-header",children:(0,e.jsxs)("div",{className:"portrait-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(a,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(Ce,{})}),(0,e.jsx)(B,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(ce,{})})]})})}),{Header:ft,Sider:jt}=x.Z,Et=()=>{const{collapsed:s}=(0,i.v9)(j.b,i.wU),[o]=me();return(0,e.jsx)(f,{children:(0,e.jsxs)(x.Z,{style:{height:"100%"},children:[(0,e.jsx)(ft,{style:{padding:"0 0px",background:"#fff",height:"auto"},children:(0,e.jsx)(yt,{})}),(0,e.jsxs)(x.Z,{children:[(0,e.jsx)(jt,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:s,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(R,{menuRef:o,theme:"light"})})}),(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(de,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(ue,{}),(0,e.jsx)(he,{})]})]})]})})},Ct=()=>{const{pageConfig:s}=(0,i.v9)(m),{layoutMode:o}=s??{};return(0,e.jsxs)(e.Fragment,{children:[o==="classicLayout"&&(0,e.jsx)(ht,{}),o==="landscapeLayout"&&(0,e.jsx)(pt,{}),o==="portraitLayout"&&(0,e.jsx)(Et,{})]})}},40778:(Q,A,t)=>{t.d(A,{bG:()=>L,kS:()=>m,oR:()=>e,x4:()=>x});var y=t(88674),i=t.n(y),b=t(39649),F=t(93762),g=t(54599),f=t(38717);const x=({username:a,password:P})=>C=>new Promise((Z,I)=>{(0,b.yq)({username:a,password:P}).then(d=>{const{status:j,token:S}=d.data;j===0?(C(p(S)),(0,g.o4)(S),Z(d)):I()})}),L=a=>P=>new Promise((C,Z)=>{(0,b.dW)(a).then(I=>{const{userInfo:d}=I;P(r(d)),(0,g.ps)(d),C(I)})}),m=a=>P=>new Promise((C,Z)=>{(0,b.uf)(a).then(I=>{I?.data.status===0&&(localStorage.removeItem("token"),P(u()),P(p("")),P((0,f.Yc)()),C(!0))}).catch(I=>Z(!1))}),e=a=>({type:F.Z.UPDATE_COLLAPSE,collapsed:a}),p=a=>({type:F.Z.USER_SET_USER_TOKEN,token:a}),r=a=>({type:F.Z.USER_SET_USER_INFO,userInfo:a}),u=()=>({type:F.Z.USER_RESET_USER})},38717:(Q,A,t)=>{t.d(A,{BH:()=>L,ND:()=>e,Ud:()=>p,Yc:()=>I,_I:()=>m,c_:()=>r,fu:()=>u});var y=t(66992),i=t.n(y),b=t(33948),F=t.n(b),g=t(88674),f=t.n(g),x=t(20409);const L=(d,j)=>(S,R)=>{const{topHeader:K}=R(),{tabList:U}=K;if(U.every(T=>T.key!==j)){var M,B;const T={key:d.pathname,label:d==null||(M=d.route)===null||M===void 0||(B=M.meta)===null||B===void 0?void 0:B.title,closable:!0};S(a([...U,T]))}S(P(j))},m=d=>(j,S)=>new Promise((R,K)=>{if(d==="/home")return;const{topHeader:U}=S(),{tabList:M}=U;let B=0;const T=M.filter((w,X)=>{if(w.key!==d)return!0;w.key===d&&(B=X)}),V=M[B-1];j(a(T)),j(P(V?.key)),R(V)}),e=d=>(j,S)=>{const{topHeader:R}=S(),{tabList:K}=R,U=K.filter(M=>M.key===d||M.key==="/home");j(a(U))},p=d=>(j,S)=>new Promise((R,K)=>{const{topHeader:U}=S(),{tabList:M}=U,B=M.filter(T=>T.key==="/home");j(a(B)),R(!0)}),r=d=>j=>{j(C(d))},u=d=>j=>{d&&j(Z(d))},a=d=>({type:x.Z.SET_TABS,tabList:d}),P=d=>({type:x.Z.SET_TABS_ACTIVE_KEY,activeKey:d}),C=d=>({type:x.Z.SET_PAGE_LAYOUT_ITEMS,layoutItems:d}),Z=d=>({type:x.Z.SET_LAYOUT_MODE,layoutMode:d}),I=()=>({type:x.Z.RESET_TOP_HEADER_STATE})},29225:(Q,A,t)=>{t.d(A,{fo:()=>L});var y=t(74916),i=t.n(y),b=t(15306),F=t.n(b);function g(m){let e="";if(/^\#?[0-9A-Fa-f]{6}$/.test(m)){m=m.replace("#",""),e=m.match(/../g);for(let r=0;r<3;r++)e[r]=parseInt(e[r],16);return e}}function f(m,e,p){let r=/^\d{1,3}$/;if(!r.test(m)||!r.test(e)||!r.test(p))return!1;let u=[m.toString(16),e.toString(16),p.toString(16)];for(let a=0;a<3;a++)u[a].length==1&&(u[a]=`0${u[a]}`);return`#${u.join("")}`}function x(m,e){if(!/^\#?[0-9A-Fa-f]{6}$/.test(m))return!1;let r=g(m);for(let u=0;u<3;u++)r[u]=Math.round(20.5*e+r[u]*(1-e));return f(r[0],r[1],r[2])}function L(m,e){if(!/^\#?[0-9A-Fa-f]{6}$/.test(m))return!1;let r=g(m);for(let u=0;u<3;u++)r[u]=Math.round(255*e+r[u]*(1-e));return f(r[0],r[1],r[2])}}}]);
