"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[3480],{39649:(Q,B,t)=>{t.d(B,{yq:()=>u,uf:()=>P,Il:()=>e,dW:()=>L,WY:()=>p});var v=t(88674),i=t(52861);const C={baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0},p=((g=C)=>{const Z=i.Z.create({...g});return Z.interceptors.request.use(function(j){return j},function(j){return Promise.reject(j)}),Z.interceptors.response.use(function(j){const{data:d}=j,{code:f,message:y}=d;if(d instanceof ArrayBuffer)return d;const E={200:()=>d,default:()=>Promise.reject(j.data)};return E[f]?E[f]():E.default()},function(j){return Promise.reject(j)}),Z})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),u=g=>p.post("/login",{...g}),L=g=>p.post("/userInfo",{token:g}),P=g=>p.post("/logout",{token:g}),e=g=>p.post("/detailInfo",{...g})},67713:(Q,B,t)=>{t.d(B,{K:()=>H});var v=t(67294),i=t(54599),C=t(85893);const H=p=>{var u,L;const{route:P}=(0,i.nC)(),{backup:e,children:g,permissionControl:Z}=p,j=(u=P.route.meta)===null||u===void 0||(L=u.auth)===null||L===void 0?void 0:L.permissionControl;let d=null;return typeof Z=="function"?d=Z():d=j?.filter(f=>Z?.includes(f)),d?(0,C.jsx)(C.Fragment,{children:b(g)}):e?(0,C.jsx)(C.Fragment,{children:b(e)}):null};function b(p){return v.isValidElement(p)?p:(0,C.jsx)(C.Fragment,{children:p})}},33480:(Q,B,t)=>{t.r(B),t.d(B,{default:()=>pt});var v=t(67294),i=t(70743),C=t(66992),H=t(33948),b=t(15286);const p=b.ZP.div`
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
`;var u=t(97183),L=t(67713);const P=s=>s.topHeader;var e=t(85893);const g="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",Z=b.ZP.div`
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
`,d=s=>{const{pageConfig:n}=(0,i.v9)(P),{layoutItems:a}=n??{};return(0,e.jsx)(L.K,{permissionControl:()=>a?.includes("logo"),children:(0,e.jsx)(Z,{...s,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:g,alt:"logo"})})})})};var f=t(8505),y=t(89250),E=t(57259),T=t(16165),r=t(48925),h=t(33348);const A=({menuRef:s,...n})=>{const a=(0,y.s0)(),[c,l]=(0,v.useState)([]),{userInfo:x}=(0,i.v9)(h.b,i.wU),{pathname:U}=(0,y.TH)(),F=S=>S.map(o=>{var K,k,z,G,Y;return{...o,label:o==null||(K=o.meta)===null||K===void 0?void 0:K.title,key:o.path,title:o==null||(k=o.meta)===null||k===void 0?void 0:k.title,icon:E.FO[o==null||(z=o.meta)===null||z===void 0?void 0:z.icon]?(0,e.jsx)(T.Z,{component:E.FO[o==null||(G=o.meta)===null||G===void 0?void 0:G.icon]}):null,children:(o==null||(Y=o.children)===null||Y===void 0?void 0:Y.length)&&F(o?.children)}}).filter(o=>{var K,k,z,G,Y,ue,he;if((o==null||(K=o.meta)===null||K===void 0?void 0:K.hideInMenu)===!0)return!1;if(x?.role==="admin"||!(o!=null&&(k=o.meta)!==null&&k!==void 0&&(z=k.auth)!==null&&z!==void 0&&(G=z.roles)!==null&&G!==void 0&&G.length)||o!=null&&(Y=o.meta)!==null&&Y!==void 0&&(ue=Y.auth)!==null&&ue!==void 0&&(he=ue.roles)!==null&&he!==void 0&&he.includes(x?.role))return!0}),m=F(r.Z),$=S=>{if(S.includes("rc-menu-more"))return l(S);const o=S[S.length-1];if(o!=null&&o.includes(S[0]))return l(S);l([o])},de=({key:S})=>a(S);return(0,v.useImperativeHandle)(s,()=>({setOpenKeys:l}),[U]),(0,e.jsx)(f.Z,{theme:"dark",selectedKeys:[U],mode:"inline",openKeys:c,items:m,onOpenChange:$,onClick:de,...n})};var W=t(66298),M=t(54599);const R=()=>{const{pageConfig:s}=(0,i.v9)(P),{layoutItems:n}=s??{},{matches:a}=(0,M.nC)(),c=a.map(l=>{var x,U;return{title:(x=l.route)===null||x===void 0||(U=x.meta)===null||U===void 0?void 0:U.title}});return(0,e.jsx)(L.K,{permissionControl:()=>!!(n!=null&&n.includes("breadcrumb")),backup:(0,e.jsx)("span",{}),children:(0,e.jsx)(W.Z,{separator:">",items:c})})};var D=t(53807),V=t(40385),w=t(24616),X=t(65460),J=t(19650),je=t(71230),te=t(15746),fe=t(27061),Ee=t(63434),_=t(88369),N=t(38717);const Ce=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],be=()=>{const{pageConfig:s}=(0,i.v9)(P),n=(0,i.I0)(),{layoutItems:a,layoutMode:c}=s;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.Z,{children:(0,e.jsxs)(J.Z,{style:{alignItems:"center"},children:[(0,e.jsx)(E.WB,{}),"\u754C\u9762\u663E\u793A"]})}),(0,e.jsxs)(fe.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(Ee.Z.Group,{label:"",name:"layoutItems",initialValue:a,fieldProps:{onChange:l=>n((0,N.c_)(l))},options:Ce}),(0,e.jsx)(_.Z.Group,{onChange:l=>n((0,N.fu)(l)),value:c,size:"small",style:{width:"100%"},children:(0,e.jsxs)(je.Z,{gutter:20,children:[(0,e.jsx)(te.Z,{span:12,children:(0,e.jsx)(_.Z,{title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:170,height:80}})}),(0,e.jsx)(te.Z,{span:12,children:(0,e.jsx)(_.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})}),(0,e.jsx)(te.Z,{span:11,children:(0,e.jsx)(_.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})]})})]})]})};var q=t(33845),ve=t(97573),xe=t(79508),me=t(28508),se=t(51741);const ne=s=>(n,a)=>{const c=document.body;return n(Pe(s)),s.isGrey?c.setAttribute("style","filter: grayscale(1)"):s.isColorWeakness?c.setAttribute("style","filter: invert(80%)"):c.setAttribute("style","")},Le=s=>n=>{n(Te(s))},Ze=s=>n=>{n(Ie(s))},Pe=s=>({type:se.Z.CHANGE_THEME,themeMode:s}),Te=s=>({type:se.Z.SET_COLOR_PRIMARY,colorPrimary:s}),Ie=s=>({type:se.Z.SET_COMPONENT_SIZE,componentSize:s}),yt=()=>({type:themeActions.RESET_THEME_STATE});var Oe=t(55241),Se=t(93565);const Ae=b.ZP.div`
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
`,Me=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],Re=({onChange:s,currentColor:n="#9b59b6",...a})=>{const c=(l,x)=>{s(l)};return(0,e.jsx)(Ae,{children:(0,e.jsx)(Oe.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Se.xS,{presetColors:Me,onChange:c,...a}),placement:"bottom",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:n}}),(0,e.jsx)("span",{children:n})]})})})};var pe=t(17925);const De=(0,v.memo)(()=>{const s=(0,i.I0)(),{token:{colorPrimary:n},themeMode:{isGrey:a,isColorWeakness:c}}=(0,i.v9)(pe.P,i.wU);return(0,v.useLayoutEffect)(()=>{s(ne({isGrey:a,isColorWeakness:c}))},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.Z,{children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(E.kS,{}),"\u4E3B\u9898\u8BBE\u7F6E"]})}),(0,e.jsxs)(q.Z,{initialValues:{colorPrimary:n,isGrey:a,isColorWeakness:c},children:[(0,e.jsx)(q.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(Re,{currentColor:n,onChange:l=>{console.log(l),s(Le(l.hex))}})}),(0,e.jsxs)(J.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(q.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(me.Z,{}),checked:a,onChange:l=>ne({isGrey:l,isColorWeakness:!1})})})]}),(0,e.jsxs)(J.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(q.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(me.Z,{}),onChange:l=>ne({isColorWeakness:l,isGrey:!1})})})]})]})]})}),Ue=()=>{const[s,n]=(0,v.useState)(!1),a=()=>{n(!1)};function c(){n(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(w.Z,{onClick:c})}),(0,e.jsxs)(V.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:a,open:s,children:[(0,e.jsx)(be,{}),(0,e.jsx)(De,{})]})]})};var Be=t(21444),Fe=t(38296),ee=t(47489);const He=()=>{const[s,n]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{ee.Z.on("change",()=>{n(ee.Z.isFullscreen)})},[]),(0,e.jsx)(L.K,{permissionControl:()=>ee.Z.isEnabled,children:(0,e.jsx)(D.Z,{title:s?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:a=>ee.Z.toggle(),children:s?(0,e.jsx)(Be.Z,{}):(0,e.jsx)(Fe.Z,{})})})})},Ke=v.memo(He);var We=t(27032),oe=t(13013),Ne=t(47759),$e=t(89366),ke=t(68855),ge=t(40778);const{confirm:ze}=We.Z,Ge=()=>{const{userInfo:s,token:n}=(0,i.v9)(h.b),a=(0,i.I0)(),c=(0,y.s0)(),l=[{label:(0,e.jsx)("span",{onClick:x=>{c("/user/info")},children:"\u4E2A\u4EBA\u4E2D\u5FC3"}),key:"/user/info",icon:(0,e.jsx)($e.Z,{})},{label:(0,e.jsx)("span",{onClick:()=>{ze({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(ke.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){a((0,ge.kS)(n))}})},children:"\u9000\u51FA\u767B\u5F55"}),key:"logout",icon:(0,e.jsx)(E.R0,{})}];return(0,e.jsx)(oe.Z,{trigger:["click"],placement:"bottomLeft",menu:{items:l},children:(0,e.jsx)(Ne.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},Ye=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Ve=(0,v.memo)(s=>{const{componentSize:n}=(0,i.v9)(pe.P),a=(0,i.I0)(),c=Ye.map(l=>(l.disabled=l.key===n,l));return(0,e.jsx)(oe.Z,{trigger:["click"],menu:{items:c,onClick:({key:l})=>{a(Ze(l))}},children:(0,e.jsx)(D.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)("span",{className:"anticon",children:(0,e.jsx)(E.el,{})})})})}),le=()=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(Ve,{}),(0,e.jsx)(Ke,{}),(0,e.jsx)(Ue,{}),(0,e.jsx)(Ge,{})]});var Xe=t(48700),Zt=t(88674),Pt=t(17727),Je=t(34804);const Qe=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],we=()=>{const s=(0,i.I0)(),{pathname:n}=(0,y.TH)(),a=(0,y.s0)(),c=({key:l})=>{if(l==="current")return s((0,N._I)(n)).then(({key:x})=>a(x));if(l==="other")return s((0,N.ND)(n));if(l==="all")return s((0,N.Ud)(n)).finally(()=>{a("/home")})};return(0,e.jsx)(J.Z,{align:"center",children:(0,e.jsx)(oe.Z,{menu:{items:Qe,onClick:c},children:(0,e.jsx)(J.Z,{style:{cursor:"pointer"},children:(0,e.jsx)(Je.Z,{})})})})},ae=s=>{const{style:n}=s,{route:a}=(0,M.nC)(),c=(0,y.s0)(),l=(0,y.TH)(),x=(0,i.I0)();let{tabList:U,activeKey:F,pageConfig:m}=(0,i.v9)(P,i.wU);const{layoutItems:$}=m??{};(0,v.useEffect)(()=>{const{pathname:o}=l;x((0,N.BH)(a,o))},[l.pathname]);const de=o=>{x((0,N._I)(o)).then(({key:K})=>c(K))},S=o=>c(o);return(0,e.jsx)(L.K,{permissionControl:()=>$?.includes("tabs"),children:(0,e.jsx)(Xe.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:o=>de(o),onTabClick:S,activeKey:F,items:U,tabBarExtraContent:(0,e.jsx)(we,{}),style:n})})};var _e=t(1351),qe=t(76629);const ye=()=>{const{collapsed:s}=(0,i.v9)(h.b),n=(0,i.I0)();return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>n((0,ge.oR)(!s)),children:s?(0,e.jsx)(_e.Z,{}):(0,e.jsx)(qe.Z,{})})},et=b.ZP.div`

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



`,tt=()=>(0,e.jsxs)(et,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(ye,{}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(R,{}),(0,e.jsx)(le,{})]})]}),(0,e.jsx)(X.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ae,{})]}),{Content:st}=u.Z,re=()=>(0,e.jsx)(st,{className:"layout-content",children:(0,e.jsx)(y.j3,{})}),{Footer:nt}=u.Z,ie=()=>{const{pageConfig:s}=(0,i.v9)(P),{layoutItems:n}=s??{};return(0,e.jsx)(L.K,{permissionControl:()=>n?.includes("pageFooter"),children:(0,e.jsx)(nt,{className:"layout-footer",children:"Dengff Admin Template"})})};var St=t(74916);const ce=(s=!1)=>{var n;const a=(0,v.useRef)(null),{pathname:c}=(0,y.TH)();let l=[];const x=(n=c.split(/\//))===null||n===void 0?void 0:n[1],U=(F=r.Z)=>(F.forEach(m=>{if(m.path===c&&l.push(m.path),m.path.includes(x)&&c.indexOf(m.path)>-1&&l.push(m.path),m!=null&&m.children)return U(m.children)}),l);return(0,v.useEffect)(()=>{var F,m;if(s)return a==null||(F=a.current)===null||F===void 0?void 0:F.setOpenKeys([]);const $=U();(m=a.current)===null||m===void 0||m.setOpenKeys($)},[c]),[a]},{Header:ot,Sider:lt}=u.Z,at=()=>{const{collapsed:s}=(0,i.v9)(h.b,i.wU),[n]=ce();return(0,e.jsx)(p,{children:(0,e.jsxs)(u.Z,{style:{height:"100%"},children:[(0,e.jsxs)(lt,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:s,children:[(0,e.jsx)(d,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(A,{menuRef:n,theme:"light"})})]}),(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(ot,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(tt,{})}),(0,e.jsx)(re,{}),(0,e.jsx)(ie,{})]})]})})},rt=b.ZP.div`
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

`,it=()=>{const[s]=ce(!0);return(0,e.jsx)(rt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(d,{mode:"horizontal"}),(0,e.jsx)(A,{theme:"light",menuRef:s,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(le,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(X.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ae,{})]})]})})},{Header:ct}=u.Z,dt=()=>(0,e.jsx)(p,{children:(0,e.jsx)(u.Z,{style:{height:"100%"},children:(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(ct,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(it,{})}),(0,e.jsx)(re,{}),(0,e.jsx)(ie,{})]})})}),ut=b.ZP.div`

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




`,ht=()=>(0,e.jsx)(ut,{children:(0,e.jsx)("div",{className:"portrait-header",children:(0,e.jsxs)("div",{className:"portrait-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(d,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(ye,{})}),(0,e.jsx)(R,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(le,{})})]})})}),{Header:vt,Sider:xt}=u.Z,mt=()=>{const{collapsed:s}=(0,i.v9)(h.b,i.wU),[n]=ce();return(0,e.jsx)(p,{children:(0,e.jsxs)(u.Z,{style:{height:"100%"},children:[(0,e.jsx)(vt,{style:{padding:"0 0px",background:"#fff",height:"auto"},children:(0,e.jsx)(ht,{})}),(0,e.jsxs)(u.Z,{children:[(0,e.jsx)(xt,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:s,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(A,{menuRef:n,theme:"light"})})}),(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(ae,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(re,{}),(0,e.jsx)(ie,{})]})]})]})})},pt=()=>{const{pageConfig:s}=(0,i.v9)(P),{layoutMode:n}=s??{};return(0,e.jsxs)(e.Fragment,{children:[n==="classicLayout"&&(0,e.jsx)(at,{}),n==="landscapeLayout"&&(0,e.jsx)(dt,{}),n==="portraitLayout"&&(0,e.jsx)(mt,{})]})}},40778:(Q,B,t)=>{t.d(B,{bG:()=>L,kS:()=>P,oR:()=>e,x4:()=>u});var v=t(88674),i=t.n(v),C=t(39649),H=t(93762),b=t(54599),p=t(38717);const u=({username:d,password:f})=>y=>new Promise((E,T)=>{(0,C.yq)({username:d,password:f}).then(r=>{const{status:h,token:I}=r.data;h===0?(y(g(I)),(0,b.o4)(I),E(r)):T()})}),L=d=>f=>new Promise((y,E)=>{(0,C.dW)(d).then(T=>{const{userInfo:r}=T;f(Z(r)),(0,b.ps)(r),y(T)})}),P=d=>f=>new Promise((y,E)=>{(0,C.uf)(d).then(T=>{T?.data.status===0&&(f(g("")),f(j()),f((0,p.Yc)()),window.localStorage.clear(),y(!0))}).catch(T=>E(!1))}),e=d=>({type:H.Z.UPDATE_COLLAPSE,collapsed:d}),g=d=>({type:H.Z.USER_SET_USER_TOKEN,token:d}),Z=d=>({type:H.Z.USER_SET_USER_INFO,userInfo:d}),j=()=>({type:H.Z.USER_RESET_USER})},38717:(Q,B,t)=>{t.d(B,{BH:()=>L,ND:()=>e,Ud:()=>g,Yc:()=>T,_I:()=>P,c_:()=>Z,fu:()=>j});var v=t(66992),i=t.n(v),C=t(33948),H=t.n(C),b=t(88674),p=t.n(b),u=t(20409);const L=(r,h)=>(I,A)=>{const{topHeader:W}=A(),{tabList:M}=W;if(M.every(D=>D.key!==h)){var O,R;const D={key:r.pathname,label:r==null||(O=r.route)===null||O===void 0||(R=O.meta)===null||R===void 0?void 0:R.title,closable:!1};I(d([...M,D]))}I(f(h))},P=r=>(h,I)=>new Promise((A,W)=>{if(r==="/home")return;const{topHeader:M}=I(),{tabList:O}=M;let R=0;const D=O.filter((w,X)=>{if(w.key!==r)return!0;w.key===r&&(R=X)}),V=O[R-1];h(d(D)),h(f(V?.key)),A(V)}),e=r=>(h,I)=>{const{topHeader:A}=I(),{tabList:W}=A,M=W.filter(O=>O.key===r||O.key==="/home");h(d(M))},g=r=>(h,I)=>new Promise((A,W)=>{const{topHeader:M}=I(),{tabList:O}=M,R=O.filter(D=>D.key==="/home");h(d(R)),A(!0)}),Z=r=>h=>{h(y(r))},j=r=>h=>{h(E(r))},d=r=>({type:u.Z.SET_TABS,tabList:r}),f=r=>({type:u.Z.SET_TABS_ACTIVE_KEY,activeKey:r}),y=r=>({type:u.Z.SET_PAGE_LAYOUT_ITEMS,layoutItems:r}),E=r=>({type:u.Z.SET_LAYOUT_MODE,layoutMode:r}),T=()=>({type:u.Z.RESET_TOP_HEADER_STATE})}}]);
