"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[168],{35060:(ee,M,t)=>{t.d(M,{yq:()=>$,uf:()=>k,dW:()=>E,WY:()=>I});var p=t(88674),i=t(52861);let y=null,f=0;const m=()=>{f++},L=()=>{f--,f===0&&y?.close()},I=(T=>{const x=i.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...T});return x.interceptors.request.use(function(r){const{loading:j=!0}=r;return j&&m(),r},function(r){return Promise.reject(r)}),x.interceptors.response.use(function(r){const{loading:j=!0,notify:B=!1}=r.config;j&&L();const{code:g,data:A,message:N,cache:K,timeout:d}=r.data,v={200:()=>r.data,401:()=>{},default:()=>Promise.reject(r.data)};return v[g]?v[g]():v.default()},function(r){const{loading:j=!0}=r.config;return j&&L(),r.response&&r.response.status,Promise.reject(r)}),x})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),$=T=>I.post("/login",{...T}),E=T=>I.post("/userInfo",{token:T}),k=T=>I.post("/logout",{token:T})},74173:(ee,M,t)=>{t.d(M,{Z:()=>f});var p=t(67294),i=t(85893);const f=m=>{const{render:L,fallback:e,auth:O,...I}=m,$=L&&L();let E=!1;return typeof O=="function"?E=O():typeof O=="boolean"&&(E=O),E?$:(0,i.jsx)(i.Fragment,{children:e||null})}},52168:(ee,M,t)=>{t.r(M),t.d(M,{default:()=>Lt});var p=t(67294),i=t(86706),y=t(15286);const f=y.ZP.div`
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

    .top-header-content {
      padding: 0px 8px;
      display: grid;
      grid-template-columns: 4fr 1fr;
      color: rgba(255, 255, 255, 0.65);
      background: rgb(0, 21, 41);

      .top-header-right {
        display: flex;
        align-items: center;
        justify-content: end;
      }
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
`;var m=t(97183),L=t(74173),e=t(85893);const O="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",I=y.ZP.div`
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
`,E=s=>{const{pageConfig:n}=(0,i.v9)(u=>u.topHeader),{layoutItems:a}=n??{};return(0,e.jsx)(L.Z,{auth:a?.includes("logo"),render:()=>(0,e.jsx)(I,{...s,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:O})})})})};var k=t(8505),T=t(66992),x=t(33948),r=t(89250),j=t(5405),B=t(25150);function g(s){return(0,p.forwardRef)((n,a)=>{const u=(0,r.s0)(),{userInfo:c,collapsed:h}=(0,i.v9)(b=>b.global,i.wU),{pathname:o}=(0,r.TH)(),C=b=>b.map(l=>{var Y,w,V;return{...l,label:l==null||(Y=l.meta)===null||Y===void 0?void 0:Y.title,key:l.path,title:l==null||(w=l.meta)===null||w===void 0?void 0:w.title,icon:(0,e.jsx)(j.Z,{}),children:(l==null||(V=l.children)===null||V===void 0?void 0:V.length)&&C(l?.children)}}).filter(l=>{var Y,w,V,pe,me,ve,xe;if((l==null||(Y=l.meta)===null||Y===void 0?void 0:Y.hideInMenu)===!0)return!1;if(c?.role==="admin"||!(l!=null&&(w=l.meta)!==null&&w!==void 0&&(V=w.auth)!==null&&V!==void 0&&(pe=V.roles)!==null&&pe!==void 0&&pe.length)||l!=null&&(me=l.meta)!==null&&me!==void 0&&(ve=me.auth)!==null&&ve!==void 0&&(xe=ve.roles)!==null&&xe!==void 0&&xe.includes(c?.role))return!0}),R=C(B.Z);let _=[];const X=(b=R)=>(b.forEach(l=>{if(l.path===o&&_.push(l.path),o.indexOf(l.path)>-1&&_.push(l.path),l!=null&&l.children)return X(l.children)}),_),[q,J]=(0,p.useState)([]),he=b=>{if(b.includes("rc-menu-more"))return J(b);const l=b[b.length-1];if(l!=null&&l.includes(b[0]))return J(b);J([l])},H=({key:b})=>u(b);return(0,p.useImperativeHandle)(a,()=>({setOpenKeys:J,defaultOpenKeys:X}),[o]),(0,e.jsx)(s,{ref:a,theme:"dark",selectedKeys:[o],mode:"inline",openKeys:q,items:R,onOpenChange:he,onClick:H,...n})})}class A extends p.PureComponent{render(){return(0,e.jsx)(k.Z,{...this.props})}}const N=g(A);var K=t(68298),d=t(12599),v=t(797);const S=s=>{const{pageConfig:n}=(0,i.v9)(o=>o.topHeader),{layoutItems:a}=n??{},u=(0,r.TH)(),h=(0,d.fp)(v.H,u).filter(o=>o.pathname!=="/"&&o.pathname!=="/home");return(0,e.jsx)(L.Z,{auth:a?.includes("breadcrumb"),render:()=>(0,e.jsxs)(K.Z,{separator:">",children:[(0,e.jsx)(K.Z.Item,{children:(0,e.jsx)("span",{children:"\u9996\u9875"})}),h.map(o=>{var C,R;return(0,e.jsx)(K.Z.Item,{children:(0,e.jsx)("span",{children:o==null||(C=o.route)===null||C===void 0||(R=C.meta)===null||R===void 0?void 0:R.title})},o?.pathname)})]}),fallback:(0,e.jsx)("span",{})})};var W=t(53807),D=t(99160),Z=t(24616),P=t(65460),F=t(71230),z=t(15746),te=t(27061),ae=t(63434),se=t(88369),G=t(48754);const be=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],Le=s=>{const{changeLayout:n,pageConfig:a={},changeLayoutMode:u}=s,{layoutItems:c,layoutMode:h}=a;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{children:"\u754C\u9762\u663E\u793A"}),(0,e.jsxs)(te.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(ae.Z.Group,{label:"",name:"layoutItems",initialValue:c,fieldProps:{onChange:o=>n(o)},options:be}),(0,e.jsx)(se.Z.Group,{onChange:o=>u(o),value:h,size:"small",style:{width:"100%"},children:(0,e.jsxs)(F.Z,{gutter:20,children:[(0,e.jsx)(z.Z,{span:12,children:(0,e.jsx)(se.Z,{title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:170,height:80}})}),(0,e.jsx)(z.Z,{span:12,children:(0,e.jsx)(se.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})}),(0,e.jsx)(z.Z,{span:11,children:(0,e.jsx)(se.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})]})})]})]})},Ee=(0,i.$j)(s=>s.topHeader,{changeLayout:G.c_,changeLayoutMode:G.fu})(Le);var Q=t(66847),Ze=t(55241),ne=t(19650),ge=t(72985),ye=t(79508),fe=t(28508),le=t(14269);const Pe=s=>(n,a)=>{const u=document.body;return n(Ie(s)),s.isGrey?u.setAttribute("style","filter: grayscale(1)"):s.isColorWeakness?u.setAttribute("style","filter: invert(80%)"):u.setAttribute("style","")},Te=s=>n=>{n(He(s))},Oe=s=>n=>{n(Me(s))},Ie=s=>({type:le.M$,themeMode:s}),He=s=>({type:le.K9,colorPrimary:s}),Me=s=>({type:le.Hj,componentSize:s}),Et=()=>({type:actionsType.RESET_THEME_STATE});var Ae=t(93565);const Se=y.ZP.div`
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
      width: 100px;
    }
  }
`,De=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],Re=(0,p.memo)(s=>{const{changeColorPrimary:n,changeTheme:a}=s,{token:{colorPrimary:u},themeMode:{isGrey:c,isColorWeakness:h}}=(0,i.v9)(o=>o.theme,i.wU);return(0,p.useLayoutEffect)(()=>{a({isGrey:c,isColorWeakness:h})},[]),(0,e.jsxs)(Se,{children:[(0,e.jsx)(P.Z,{children:"\u4E3B\u9898\u8BBE\u7F6E"}),(0,e.jsxs)(Q.Z,{initialValues:{colorPrimary:u,isGrey:c,isColorWeakness:h},children:[(0,e.jsx)(Ze.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Q.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"",children:(0,e.jsx)(Ae.xS,{presetColors:De,onChange:({hex:o})=>n(o)})}),placement:"bottom",children:(0,e.jsx)(Q.Z.Item,{label:"\u4E3B\u9898\u8272",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:u}}),(0,e.jsx)("span",{children:u})]})})}),(0,e.jsxs)(ne.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F"}),(0,e.jsx)(Q.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ge.Z,{checkedChildren:(0,e.jsx)(ye.Z,{}),unCheckedChildren:(0,e.jsx)(fe.Z,{}),checked:c,onChange:o=>a({isGrey:o,isColorWeakness:!1})})})]}),(0,e.jsxs)(ne.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F"}),(0,e.jsx)(Q.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ge.Z,{checkedChildren:(0,e.jsx)(ye.Z,{}),unCheckedChildren:(0,e.jsx)(fe.Z,{}),onChange:o=>a({isColorWeakness:o,isGrey:!1})})})]})]})]})}),Be=(0,i.$j)(null,{changeTheme:Pe,changeColorPrimary:Te})(Re),Ke=s=>{const[n,a]=(0,p.useState)(!1),u=()=>{a(!1)};function c(){a(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(Z.Z,{onClick:c})}),(0,e.jsxs)(D.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:u,open:n,children:[(0,e.jsx)(Ee,{}),(0,e.jsx)(Be,{})]})]})};var Ue=t(21444),We=t(38296),oe=t(47489);const Fe=()=>{const[s,n]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{oe.Z.on("change",()=>{n(oe.Z.isFullscreen)})},[]),(0,e.jsx)(L.Z,{auth:oe.Z.isEnabled,render:a=>(0,e.jsx)(W.Z,{onClick:u=>oe.Z.toggle(),title:s?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:s?(0,e.jsx)(Ue.Z,{}):(0,e.jsx)(We.Z,{})})})},$e=p.memo(Fe);var Ne=t(27032),re=t(13013),ze=t(47759),ke=t(68855),je=t(18655);const{confirm:Ge}=Ne.Z,Ye=s=>{const{userInfo:n,token:a}=(0,i.v9)(o=>o.global),{logout:u}=s,c=[{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function h({key:o}){o==="logout"&&Ge({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(ke.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){u(a)},onCancel(){}})}return(0,e.jsx)(re.Z,{menu:{items:c,onClick:h},children:(0,e.jsx)(ze.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:n?.avatar,alt:"avatar"})})})},we=(0,i.$j)(null,{logout:je.kS})(Ye),Ve=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Xe=(0,p.memo)(s=>{const{componentSize:n,changeComponentSize:a}=s,u=Ve.map(c=>(c.disabled=c.key===n,c));return(0,e.jsx)(re.Z,{trigger:["click"],menu:{items:u,onClick:({key:c})=>{a(c)}},children:(0,e.jsx)(W.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)(j.Z,{})})})}),Je=(0,i.$j)(s=>s.theme,{changeComponentSize:Oe})(Xe),ce=s=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},align:"center",children:[(0,e.jsx)(Je,{}),(0,e.jsx)($e,{}),(0,e.jsx)(Ke,{}),(0,e.jsx)(we,{})]});var Qe=t(72326),_e=t(84595),Tt=t(88674),Ot=t(17727),qe=t(34804);const et=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],tt=s=>{const{pathname:n}=(0,r.TH)(),a=(0,r.s0)(),{deleteCurrentTab:u,deleteAllTab:c,deleteOtherTab:h}=s,o=({key:C})=>{if(C==="current")return u(n).then(({key:R})=>a(R));if(C==="other")return h(n);if(C==="all")return c(n).finally(a("/home"))};return(0,e.jsx)(ne.Z,{align:"center",children:(0,e.jsx)(re.Z,{menu:{items:et,onClick:o},children:(0,e.jsx)(ne.Z,{style:{cursor:"pointer"},children:(0,e.jsx)(qe.Z,{})})})})},st=(0,i.$j)(null,{deleteCurrentTab:G._I,deleteAllTab:G.Ud,deleteOtherTab:G.ND})(tt),nt=s=>{const{addTabs:n,deleteCurrentTab:a,style:u}=s,c=(0,_e.nC)(),h=(0,r.s0)(),o=(0,r.TH)(),C=(0,i.I0)();let{tabList:R,activeKey:_}=(0,i.v9)(H=>H.topHeader,i.wU);const{pageConfig:X}=(0,i.v9)(H=>H.topHeader),{layoutItems:q}=X??{};(0,p.useEffect)(()=>{const{pathname:H}=o;n(c,H)},[o.pathname]);const J=(H,b)=>{a(H).then(({key:l})=>h(l))},he=H=>h(H);return(0,e.jsx)(L.Z,{auth:q?.includes("tabs"),render:()=>(0,e.jsx)(Qe.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:J,onTabClick:he,activeKey:_,items:R,tabBarExtraContent:(0,e.jsx)(st,{}),style:u})})},ie=(0,i.$j)(null,{addTabs:G.BH,deleteCurrentTab:G._I})(nt);var ot=t(1351),at=t(76629);const lt=s=>{const{collapsed:n,updateCollapse:a}=s;return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>a(!n),children:n?(0,e.jsx)(ot.Z,{}):(0,e.jsx)(at.Z,{})})},Ce=(0,i.$j)(s=>s.global,{updateCollapse:je.oR})(lt),rt=y.ZP.div`

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



`,ct=s=>(0,e.jsxs)(rt,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(Ce,{mode:"inline"}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(S,{}),(0,e.jsx)(ce,{})]})]}),(0,e.jsx)(P.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ie,{})]}),{Content:it}=m.Z,de=()=>(0,e.jsx)(it,{className:"layout-content",children:(0,e.jsx)(r.j3,{})}),{Footer:dt}=m.Z,ue=()=>{const{pageConfig:s}=(0,i.v9)(a=>a.topHeader),{layoutItems:n}=s??{};return(0,e.jsx)(L.Z,{auth:n?.includes("pageFooter"),render:()=>(0,e.jsx)(dt,{className:"layout-footer",children:"Dengff Admin Template"})})},{Header:ut,Sider:ht}=m.Z,pt=()=>{const{collapsed:s}=(0,i.v9)(h=>h.global,i.wU),{pageConfig:n}=(0,i.v9)(h=>h.topHeader),{layoutMode:a}=n??{},{pathname:u}=(0,r.TH)(),c=(0,p.useRef)(null);return(0,p.useEffect)(()=>{var h,o;const C=(h=c.current)===null||h===void 0?void 0:h.defaultOpenKeys();(o=c.current)===null||o===void 0||o.setOpenKeys(C)},[u,a]),(0,e.jsx)(f,{children:(0,e.jsxs)(m.Z,{style:{height:"100%"},children:[(0,e.jsxs)(ht,{trigger:null,collapsible:!0,collapsed:s,children:[(0,e.jsx)(E,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(N,{ref:c})})]}),(0,e.jsxs)(m.Z,{className:"site-layout",children:[(0,e.jsx)(ut,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(ct,{})}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})]})})},mt=y.ZP.div`
  height: 100%;

  .top-header-content {
    padding: 0 8px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    color: rgba(255, 255, 255, 0.65);
    background: rgb(0, 21, 41);

    .top-header-right {
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }

`,vt=()=>{const s=(0,p.useRef)(null);return(0,p.useEffect)(()=>{var n;(n=s.current)===null||n===void 0||n.setOpenKeys([])},[]),(0,e.jsx)(mt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(E,{mode:"horizontal"}),(0,e.jsx)(N,{ref:s,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(ce,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(P.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ie,{})]})]})})},{Header:xt}=m.Z,gt=()=>(0,e.jsx)(f,{children:(0,e.jsx)(m.Z,{style:{height:"100%"},children:(0,e.jsxs)(m.Z,{className:"site-layout",children:[(0,e.jsx)(xt,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(vt,{})}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})})}),yt=y.ZP.div`

  .classic-header {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;

    .classic-header-content {
      height: 100%;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .ant-breadcrumb, .ant-breadcrumb-separator, .ant-breadcrumb-link {
        color: rgba(255, 255, 255, .7);
      }
    }
  }




`,ft=s=>(0,e.jsx)(yt,{children:(0,e.jsx)("div",{className:"classic-header",children:(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(E,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(Ce,{mode:"inline"})}),(0,e.jsx)(S,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(ce,{})})]})})}),{Header:jt,Sider:Ct}=m.Z,bt=()=>{const{collapsed:s}=(0,i.v9)(h=>h.global,i.wU),{pageConfig:n}=(0,i.v9)(h=>h.topHeader),{layoutMode:a}=n??{},{pathname:u}=(0,r.TH)(),c=(0,p.useRef)(null);return(0,p.useEffect)(()=>{var h,o;const C=(h=c.current)===null||h===void 0?void 0:h.defaultOpenKeys();(o=c.current)===null||o===void 0||o.setOpenKeys(C)},[u,a]),(0,e.jsx)(f,{children:(0,e.jsxs)(m.Z,{style:{height:"100%"},children:[(0,e.jsx)(jt,{style:{padding:"0 0px",color:"#fff",height:"auto"},children:(0,e.jsx)(ft,{})}),(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(Ct,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:s,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(N,{ref:c,theme:"light"})})}),(0,e.jsxs)(m.Z,{className:"site-layout",children:[(0,e.jsx)(ie,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})]})]})})},Lt=()=>{const{pageConfig:s}=(0,i.v9)(a=>a.topHeader),{layoutMode:n}=s??{};return(0,e.jsxs)(e.Fragment,{children:[n==="classicLayout"&&(0,e.jsx)(pt,{}),n==="landscapeLayout"&&(0,e.jsx)(gt,{}),n==="portraitLayout"&&(0,e.jsx)(bt,{})]})}},18655:(ee,M,t)=>{t.d(M,{bG:()=>O,kS:()=>I,oR:()=>$,x4:()=>e});var p=t(88674),i=t.n(p),y=t(35060),f=t(75544),m=t(84595),L=t(48754);const e=({username:x,password:r})=>j=>new Promise((B,g)=>{(0,y.yq)({username:x,password:r}).then(A=>{const{status:N,token:K}=A.data;N===0?(j(E(K)),(0,m.o4)(K),B(A)):g()})}),O=x=>r=>new Promise((j,B)=>{(0,y.dW)(x).then(g=>{const{userInfo:A}=g;r(k(A)),(0,m.ps)(A),j(g)})}),I=x=>r=>new Promise((j,B)=>{(0,y.uf)(x).then(g=>{g?.data.status===0&&(r(E(void 0)),r(T()),r((0,L.Yc)()),window.localStorage.clear(),j())}).catch(g=>B(g))}),$=x=>({type:f._U,collapsed:x}),E=x=>({type:f.rw,token:x}),k=x=>({type:f.rG,userInfo:x}),T=()=>({type:f.IR})},48754:(ee,M,t)=>{t.d(M,{BH:()=>O,ND:()=>$,Ud:()=>E,Yc:()=>K,_I:()=>I,c_:()=>k,fu:()=>T});var p=t(66992),i=t.n(p),y=t(33948),f=t.n(y),m=t(88674),L=t.n(m),e=t(9994);const O=(d,v)=>(U,S)=>{const{topHeader:W}=S(),{tabList:D}=W;if(D.every(F=>F.key!==v)){var Z,P;const F={key:d.pathname,label:d==null||(Z=d.route)===null||Z===void 0||(P=Z.meta)===null||P===void 0?void 0:P.title};U(B([...D,F]))}U(g(v))},I=d=>(v,U)=>new Promise((S,W)=>{if(d==="/home")return;const{topHeader:D}=U(),{tabList:Z}=D;let P=null;const F=Z.filter((te,ae)=>{if(te.key!==d)return!0;te.key===d&&(P=ae)}),z=Z[P-1];v(x(F)),v(g(z?.key)),S(z)}),$=d=>(v,U)=>{const{topHeader:S}=U(),{tabList:W}=S,D=W.filter(Z=>Z.key===d||Z.key==="/home");v(r(D))},E=d=>(v,U)=>new Promise((S,W)=>{const{topHeader:D}=U(),{tabList:Z}=D,P=Z.filter(F=>F.key==="/home");v(j(P)),S()}),k=d=>v=>{v(A(d))},T=d=>v=>{v(N(d))},x=d=>({type:e.Rr,tabList:d}),r=d=>({type:e.tY,tabList:d}),j=d=>({type:e.L6,tabList:d}),B=d=>({type:e.zJ,tabList:d}),g=d=>({type:e.GK,activeKey:d}),A=d=>({type:e.mf,layoutItems:d}),N=d=>({type:e.rW,layoutMode:d}),K=()=>({type:e.cy})}}]);
