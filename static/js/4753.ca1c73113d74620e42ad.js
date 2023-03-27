"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[4753],{35060:(_,F,t)=>{t.d(F,{yq:()=>S,uf:()=>X,dW:()=>H,WY:()=>e});var j=t(88674),c=t(52861);let M=null,T=0;const L=()=>{T++},A=()=>{T--,T===0&&M?.close()},e=(Z=>{const p=c.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...Z});return p.interceptors.request.use(function(l){const{loading:v=!0}=l;return v&&L(),l},function(l){return Promise.reject(l)}),p.interceptors.response.use(function(l){const{loading:v=!0,notify:R=!1}=l.config;v&&A();const{code:g,data:U,message:k,cache:G,timeout:r}=l.data,y={200:()=>l.data,401:()=>{},default:()=>Promise.reject(l.data)};return y[g]?y[g]():y.default()},function(l){const{loading:v=!0}=l.config;return v&&A(),l.response&&l.response.status,Promise.reject(l)}),p})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),S=Z=>e.post("/login",{...Z}),H=Z=>e.post("/userInfo",{token:Z}),X=Z=>e.post("/logout",{token:Z})},74173:(_,F,t)=>{t.d(F,{Z:()=>T});var j=t(67294),c=t(85893);const T=L=>{const{render:A,fallback:h,auth:E,...e}=L,S=A&&A();let H=!1;return typeof E=="function"?H=E():typeof E=="boolean"&&(H=E),H?S:(0,c.jsx)(c.Fragment,{children:h||null})}},4753:(_,F,t)=>{t.r(F),t.d(F,{default:()=>bt});var j=t(67294),c=t(86706),M=t(66992),T=t(33948),L=t(15286);const A=L.ZP.div`
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
`;var h=t(97183),E=t(74173),e=t(85893);const S="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",H=L.ZP.div`
  width: ${n=>n.mode==="horizontal"?"200px":!1};
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
`,Z=n=>{const{pageConfig:s}=(0,c.v9)(i=>i.topHeader),{layoutItems:o}=s??{};return(0,e.jsx)(E.Z,{auth:o?.includes("logo"),render:()=>(0,e.jsx)(H,{...n,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:S})})})})};var p=t(8505),l=t(89250),v=t(41658),R=t(16165),g=t(25150);const k=({menuRef:n,...s})=>{const o=(0,l.s0)(),[i,d]=(0,j.useState)([]),{userInfo:x}=(0,c.v9)(b=>b.global,c.wU),{pathname:u}=(0,l.TH)(),f=b=>b.map(a=>{var $,C,z,N,V;return{...a,label:a==null||($=a.meta)===null||$===void 0?void 0:$.title,key:a.path,title:a==null||(C=a.meta)===null||C===void 0?void 0:C.title,icon:v.FO[a==null||(z=a.meta)===null||z===void 0?void 0:z.icon]?(0,e.jsx)(R.Z,{component:v.FO[a==null||(N=a.meta)===null||N===void 0?void 0:N.icon]}):null,children:(a==null||(V=a.children)===null||V===void 0?void 0:V.length)&&f(a?.children)}}).filter(a=>{var $,C,z,N,V,ue,he;if((a==null||($=a.meta)===null||$===void 0?void 0:$.hideInMenu)===!0)return!1;if(x?.role==="admin"||!(a!=null&&(C=a.meta)!==null&&C!==void 0&&(z=C.auth)!==null&&z!==void 0&&(N=z.roles)!==null&&N!==void 0&&N.length)||a!=null&&(V=a.meta)!==null&&V!==void 0&&(ue=V.auth)!==null&&ue!==void 0&&(he=ue.roles)!==null&&he!==void 0&&he.includes(x?.role))return!0}),m=f(g.Z),w=b=>{if(b.includes("rc-menu-more"))return d(b);const a=b[b.length-1];if(a!=null&&a.includes(b[0]))return d(b);d([a])},q=({key:b})=>o(b);return(0,j.useImperativeHandle)(n,()=>({setOpenKeys:d}),[u]),(0,e.jsx)(p.Z,{theme:"dark",selectedKeys:[u],mode:"inline",openKeys:i,items:m,onOpenChange:w,onClick:q,...s})};var G=t(66298),r=t(12599),y=t(797);const B=n=>{const{pageConfig:s}=(0,c.v9)(u=>u.topHeader),{layoutItems:o}=s??{},i=(0,l.TH)(),x=(0,r.fp)(y.H,i).map(u=>{var f,m;return{title:(f=u.route)===null||f===void 0||(m=f.meta)===null||m===void 0?void 0:m.title}});return(0,e.jsx)(E.Z,{auth:o?.includes("breadcrumb"),render:()=>(0,e.jsx)(G.Z,{separator:">",items:x}),fallback:(0,e.jsx)("span",{})})};var K=t(53807),D=t(40385),I=t(24616),O=t(65460),P=t(19650),J=t(71230),Q=t(15746),se=t(27061),ye=t(63434),ee=t(88369),Y=t(48754);const je=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],fe=n=>{const{changeLayout:s,pageConfig:o={},changeLayoutMode:i}=n,{layoutItems:d,layoutMode:x}=o;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.Z,{children:(0,e.jsxs)(P.Z,{style:{alignItems:"center"},children:[(0,e.jsx)(v.WB,{}),"\u754C\u9762\u663E\u793A"]})}),(0,e.jsxs)(se.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(ye.Z.Group,{label:"",name:"layoutItems",initialValue:d,fieldProps:{onChange:u=>s(u)},options:je}),(0,e.jsx)(ee.Z.Group,{onChange:u=>i(u),value:x,size:"small",style:{width:"100%"},children:(0,e.jsxs)(J.Z,{gutter:20,children:[(0,e.jsx)(Q.Z,{span:12,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:170,height:80}})}),(0,e.jsx)(Q.Z,{span:12,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})}),(0,e.jsx)(Q.Z,{span:11,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})]})})]})]})},Ce=(0,c.$j)(n=>n.topHeader,{changeLayout:Y.c_,changeLayoutMode:Y.fu})(fe);var te=t(33845),me=t(97573),xe=t(79508),ve=t(28508),oe=t(14269);const be=n=>(s,o)=>{const i=document.body;return s(Ze(n)),n.isGrey?i.setAttribute("style","filter: grayscale(1)"):n.isColorWeakness?i.setAttribute("style","filter: invert(80%)"):i.setAttribute("style","")},Le=n=>s=>{s(Pe(n))},Ee=n=>s=>{s(Te(n))},Ze=n=>({type:oe.M$,themeMode:n}),Pe=n=>({type:oe.K9,colorPrimary:n}),Te=n=>({type:oe.Hj,componentSize:n}),Lt=()=>({type:actionsType.RESET_THEME_STATE});var Ie=t(55241),Oe=t(93565);const Ae=L.ZP.div`
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
`,He=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],Me=n=>{const{currentColor:s="#9b59b6"}=n,o=(i,d)=>{n?.onChange(i)};return(0,e.jsx)(Ae,{children:(0,e.jsx)(Ie.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Oe.xS,{presetColors:He,onChange:o,...n}),placement:"bottom",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:s}}),(0,e.jsx)("span",{children:s})]})})})},Fe=(0,j.memo)(n=>{const{changeColorPrimary:s,changeTheme:o}=n,{token:{colorPrimary:i},themeMode:{isGrey:d,isColorWeakness:x}}=(0,c.v9)(u=>u.theme,c.wU);return(0,j.useLayoutEffect)(()=>{o({isGrey:d,isColorWeakness:x})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.Z,{children:(0,e.jsxs)(P.Z,{children:[(0,e.jsx)(v.kS,{}),"\u4E3B\u9898\u8BBE\u7F6E"]})}),(0,e.jsxs)(te.Z,{initialValues:{colorPrimary:i,isGrey:d,isColorWeakness:x},children:[(0,e.jsx)(te.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(Me,{currentColor:i,onChange:u=>{console.log(u),s(u.hex)}})}),(0,e.jsxs)(P.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(te.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(me.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(ve.Z,{}),checked:d,onChange:u=>o({isGrey:u,isColorWeakness:!1})})})]}),(0,e.jsxs)(P.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(te.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(me.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(ve.Z,{}),onChange:u=>o({isColorWeakness:u,isGrey:!1})})})]})]})]})}),Be=(0,c.$j)(null,{changeTheme:be,changeColorPrimary:Le})(Fe),De=n=>{const[s,o]=(0,j.useState)(!1),i=()=>{o(!1)};function d(){o(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(K.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(I.Z,{onClick:d})}),(0,e.jsxs)(D.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:i,open:s,children:[(0,e.jsx)(Ce,{}),(0,e.jsx)(Be,{})]})]})};var Se=t(21444),Re=t(38296),ne=t(47489);const Ue=()=>{const[n,s]=(0,j.useState)(!1);return(0,j.useEffect)(()=>{ne.Z.on("change",()=>{s(ne.Z.isFullscreen)})},[]),(0,e.jsx)(E.Z,{auth:ne.Z.isEnabled,render:o=>(0,e.jsx)(K.Z,{onClick:i=>ne.Z.toggle(),title:n?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:n?(0,e.jsx)(Se.Z,{}):(0,e.jsx)(Re.Z,{})})})},We=j.memo(Ue);var Ke=t(27032),ae=t(13013),$e=t(47759),Ne=t(89366),ke=t(68855),pe=t(18655);const{confirm:ze}=Ke.Z,Ge=n=>{const{userInfo:s,token:o}=(0,c.v9)(u=>u.global),{logout:i}=n,d=(0,l.s0)(),x=[{label:(0,e.jsx)("span",{onClick:u=>{d("/user/info")},children:"\u4E2A\u4EBA\u4E2D\u5FC3"}),key:"/user/info",icon:(0,e.jsx)(Ne.Z,{})},{label:(0,e.jsx)("span",{onClick:()=>{ze({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(ke.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){i(o)}})},children:"\u9000\u51FA\u767B\u5F55"}),key:"logout",icon:(0,e.jsx)(v.R0,{})}];return(0,e.jsx)(ae.Z,{trigger:["click"],placement:"bottomLeft",menu:{items:x},children:(0,e.jsx)($e.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},Ye=(0,c.$j)(null,{logout:pe.kS})(Ge),Ve=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Xe=(0,j.memo)(n=>{const{componentSize:s,changeComponentSize:o}=n,i=Ve.map(d=>(d.disabled=d.key===s,d));return(0,e.jsx)(ae.Z,{trigger:["click"],menu:{items:i,onClick:({key:d})=>{o(d)}},children:(0,e.jsx)(K.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)("span",{tabIndex:"-1",className:"anticon",children:(0,e.jsx)(v.el,{})})})})}),Je=(0,c.$j)(n=>n.theme,{changeComponentSize:Ee})(Xe),le=n=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},align:"center",children:[(0,e.jsx)(Je,{}),(0,e.jsx)(We,{}),(0,e.jsx)(De,{}),(0,e.jsx)(Ye,{})]});var Qe=t(48700),we=t(84595),Tt=t(88674),It=t(17727),qe=t(34804);const _e=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],et=n=>{const{pathname:s}=(0,l.TH)(),o=(0,l.s0)(),{deleteCurrentTab:i,deleteAllTab:d,deleteOtherTab:x}=n,u=({key:f})=>{if(f==="current")return i(s).then(({key:m})=>o(m));if(f==="other")return x(s);if(f==="all")return d(s).finally(o("/home"))};return(0,e.jsx)(P.Z,{align:"center",children:(0,e.jsx)(ae.Z,{menu:{items:_e,onClick:u},children:(0,e.jsx)(P.Z,{style:{cursor:"pointer"},children:(0,e.jsx)(qe.Z,{})})})})},tt=(0,c.$j)(null,{deleteCurrentTab:Y._I,deleteAllTab:Y.Ud,deleteOtherTab:Y.ND})(et),nt=n=>{const{addTabs:s,deleteCurrentTab:o,style:i}=n,d=(0,we.nC)(),x=(0,l.s0)(),u=(0,l.TH)(),f=(0,c.I0)();let{tabList:m,activeKey:w}=(0,c.v9)(C=>C.topHeader,c.wU);const{pageConfig:q}=(0,c.v9)(C=>C.topHeader),{layoutItems:b}=q??{};(0,j.useEffect)(()=>{const{pathname:C}=u;s(d,C)},[u.pathname]);const a=(C,z)=>{o(C).then(({key:N})=>x(N))},$=C=>x(C);return(0,e.jsx)(E.Z,{auth:b?.includes("tabs"),render:()=>(0,e.jsx)(Qe.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:a,onTabClick:$,activeKey:w,items:m,tabBarExtraContent:(0,e.jsx)(tt,{}),style:i})})},re=(0,c.$j)(null,{addTabs:Y.BH,deleteCurrentTab:Y._I})(nt);var st=t(1351),ot=t(76629);const at=n=>{const{collapsed:s,updateCollapse:o}=n;return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>o(!s),children:s?(0,e.jsx)(st.Z,{}):(0,e.jsx)(ot.Z,{})})},ge=(0,c.$j)(n=>n.global,{updateCollapse:pe.oR})(at),lt=L.ZP.div`

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



`,rt=n=>(0,e.jsxs)(lt,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(ge,{mode:"inline"}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(B,{}),(0,e.jsx)(le,{})]})]}),(0,e.jsx)(O.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(re,{})]}),{Content:it}=h.Z,ie=()=>(0,e.jsx)(it,{className:"layout-content",children:(0,e.jsx)(l.j3,{})}),{Footer:ct}=h.Z,ce=()=>{const{pageConfig:n}=(0,c.v9)(o=>o.topHeader),{layoutItems:s}=n??{};return(0,e.jsx)(E.Z,{auth:s?.includes("pageFooter"),render:()=>(0,e.jsx)(ct,{className:"layout-footer",children:"Dengff Admin Template"})})};var Ot=t(74916);const de=(n=!1)=>{var s;const o=(0,j.useRef)(null),{pathname:i}=(0,l.TH)();let d=[];const x=(s=i.split(/\//))===null||s===void 0?void 0:s[1],u=(f=g.Z)=>(f.forEach(m=>{if(m.path===i&&d.push(m.path),m.path.includes(x)&&i.indexOf(m.path)>-1&&d.push(m.path),m!=null&&m.children)return u(m.children)}),d);return(0,j.useEffect)(()=>{var f,m;if(n)return o==null||(f=o.current)===null||f===void 0?void 0:f.setOpenKeys([]);const w=u();o==null||(m=o.current)===null||m===void 0||m.setOpenKeys(w)},[i]),[o]},{Header:dt,Sider:ut}=h.Z,ht=()=>{const{collapsed:n}=(0,c.v9)(o=>o.global,c.wU),[s]=de();return(0,e.jsx)(A,{children:(0,e.jsxs)(h.Z,{style:{height:"100%"},children:[(0,e.jsxs)(ut,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:n,children:[(0,e.jsx)(Z,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(k,{menuRef:s,theme:"light"})})]}),(0,e.jsxs)(h.Z,{className:"site-layout",children:[(0,e.jsx)(dt,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(rt,{})}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})]})})},mt=L.ZP.div`
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

`,xt=()=>{const[n]=de(!0);return(0,e.jsx)(mt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(Z,{mode:"horizontal"}),(0,e.jsx)(k,{theme:"light",menuRef:n,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(le,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(O.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(re,{})]})]})})},{Header:vt}=h.Z,pt=()=>(0,e.jsx)(A,{children:(0,e.jsx)(h.Z,{style:{height:"100%"},children:(0,e.jsxs)(h.Z,{className:"site-layout",children:[(0,e.jsx)(vt,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(xt,{})}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})})}),gt=L.ZP.div`

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




`,yt=n=>(0,e.jsx)(gt,{children:(0,e.jsx)("div",{className:"portrait-header",children:(0,e.jsxs)("div",{className:"portrait-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(Z,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(ge,{mode:"inline"})}),(0,e.jsx)(B,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(le,{})})]})})}),{Header:jt,Sider:ft}=h.Z,Ct=()=>{const{collapsed:n}=(0,c.v9)(o=>o.global,c.wU),[s]=de();return(0,e.jsx)(A,{children:(0,e.jsxs)(h.Z,{style:{height:"100%"},children:[(0,e.jsx)(jt,{style:{padding:"0 0px",background:"#fff",height:"auto"},children:(0,e.jsx)(yt,{})}),(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(ft,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:n,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(k,{menuRef:s,theme:"light"})})}),(0,e.jsxs)(h.Z,{className:"site-layout",children:[(0,e.jsx)(re,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})]})]})})},bt=()=>{const{pageConfig:n}=(0,c.v9)(o=>o.topHeader),{layoutMode:s}=n??{};return(0,e.jsxs)(e.Fragment,{children:[s==="classicLayout"&&(0,e.jsx)(ht,{}),s==="landscapeLayout"&&(0,e.jsx)(pt,{}),s==="portraitLayout"&&(0,e.jsx)(Ct,{})]})}},18655:(_,F,t)=>{t.d(F,{bG:()=>E,kS:()=>e,oR:()=>S,x4:()=>h});var j=t(88674),c=t.n(j),M=t(35060),T=t(75544),L=t(84595),A=t(48754);const h=({username:p,password:l})=>v=>new Promise((R,g)=>{(0,M.yq)({username:p,password:l}).then(U=>{const{status:k,token:G}=U.data;k===0?(v(H(G)),(0,L.o4)(G),R(U)):g()})}),E=p=>l=>new Promise((v,R)=>{(0,M.dW)(p).then(g=>{const{userInfo:U}=g;l(X(U)),(0,L.ps)(U),v(g)})}),e=p=>l=>new Promise((v,R)=>{(0,M.uf)(p).then(g=>{g?.data.status===0&&(l(H(void 0)),l(Z()),l((0,A.Yc)()),window.localStorage.clear(),v())}).catch(g=>R(g))}),S=p=>({type:T._U,collapsed:p}),H=p=>({type:T.rw,token:p}),X=p=>({type:T.rG,userInfo:p}),Z=()=>({type:T.IR})},48754:(_,F,t)=>{t.d(F,{BH:()=>E,ND:()=>S,Ud:()=>H,Yc:()=>G,_I:()=>e,c_:()=>X,fu:()=>Z});var j=t(66992),c=t.n(j),M=t(33948),T=t.n(M),L=t(88674),A=t.n(L),h=t(9994);const E=(r,y)=>(W,B)=>{const{topHeader:K}=B(),{tabList:D}=K;if(D.every(P=>P.key!==y)){var I,O;const P={key:r.pathname,label:r==null||(I=r.route)===null||I===void 0||(O=I.meta)===null||O===void 0?void 0:O.title};W(R([...D,P]))}W(g(y))},e=r=>(y,W)=>new Promise((B,K)=>{if(r==="/home")return;const{topHeader:D}=W(),{tabList:I}=D;let O=null;const P=I.filter((Q,se)=>{if(Q.key!==r)return!0;Q.key===r&&(O=se)}),J=I[O-1];y(p(P)),y(g(J?.key)),B(J)}),S=r=>(y,W)=>{const{topHeader:B}=W(),{tabList:K}=B,D=K.filter(I=>I.key===r||I.key==="/home");y(l(D))},H=r=>(y,W)=>new Promise((B,K)=>{const{topHeader:D}=W(),{tabList:I}=D,O=I.filter(P=>P.key==="/home");y(v(O)),B()}),X=r=>y=>{y(U(r))},Z=r=>y=>{y(k(r))},p=r=>({type:h.Rr,tabList:r}),l=r=>({type:h.tY,tabList:r}),v=r=>({type:h.L6,tabList:r}),R=r=>({type:h.zJ,tabList:r}),g=r=>({type:h.GK,activeKey:r}),U=r=>({type:h.mf,layoutItems:r}),k=r=>({type:h.rW,layoutMode:r}),G=()=>({type:h.cy})}}]);
