"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[1500],{39649:(q,M,t)=>{t.d(M,{yq:()=>u,uf:()=>e,Il:()=>B,dW:()=>C,WY:()=>L});var p=t(88674),l=t(52861);const H={baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0},L=((m=H)=>{const k=l.Z.create({...m});return k.interceptors.request.use(function(y){return y},function(y){return Promise.reject(y)}),k.interceptors.response.use(function(y){const{code:g,data:x,message:Z,cache:F,timeout:j}=y.data,S={200:()=>y.data,401:()=>{},default:()=>Promise.reject(y.data)};return S[g]?S[g]():S.default()},function(y){return Promise.reject(y)}),k})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),u=m=>L.post("/login",{...m}),C=m=>L.post("/userInfo",{token:m}),e=m=>L.post("/logout",{token:m}),B=m=>L.post("/detailInfo",{...m})},67713:(q,M,t)=>{t.d(M,{Z:()=>U});var p=t(67294),l=t(85893);const U=P=>{const{render:L,fallback:u,auth:C,...e}=P,B=L&&L();let m=!1;return typeof C=="function"?m=C():typeof C=="boolean"&&(m=C),m?B:(0,l.jsx)(l.Fragment,{children:u||null})}},11500:(q,M,t)=>{t.r(M),t.d(M,{default:()=>Ct});var p=t(67294),l=t(86706),H=t(66992),U=t(33948),P=t(15286);const L=P.ZP.div`
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
`;var u=t(97183),C=t(67713),e=t(85893);const B="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",m=P.ZP.div`
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
`,y=n=>{const{pageConfig:s}=(0,l.v9)(i=>i.topHeader),{layoutItems:o}=s??{};return(0,e.jsx)(C.Z,{auth:o?.includes("logo"),render:()=>(0,e.jsx)(m,{...n,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:B})})})})};var g=t(8505),x=t(89250),Z=t(57259),F=t(16165),j=t(48925);const G=({menuRef:n,...s})=>{const o=(0,x.s0)(),[i,c]=(0,p.useState)([]),{userInfo:v}=(0,l.v9)(b=>b.global,l.wU),{pathname:d}=(0,x.TH)(),f=b=>b.map(a=>{var K,E,z,$,V;return{...a,label:a==null||(K=a.meta)===null||K===void 0?void 0:K.title,key:a.path,title:a==null||(E=a.meta)===null||E===void 0?void 0:E.title,icon:Z.FO[a==null||(z=a.meta)===null||z===void 0?void 0:z.icon]?(0,e.jsx)(F.Z,{component:Z.FO[a==null||($=a.meta)===null||$===void 0?void 0:$.icon]}):null,children:(a==null||(V=a.children)===null||V===void 0?void 0:V.length)&&f(a?.children)}}).filter(a=>{var K,E,z,$,V,ue,he;if((a==null||(K=a.meta)===null||K===void 0?void 0:K.hideInMenu)===!0)return!1;if(v?.role==="admin"||!(a!=null&&(E=a.meta)!==null&&E!==void 0&&(z=E.auth)!==null&&z!==void 0&&($=z.roles)!==null&&$!==void 0&&$.length)||a!=null&&(V=a.meta)!==null&&V!==void 0&&(ue=V.auth)!==null&&ue!==void 0&&(he=ue.roles)!==null&&he!==void 0&&he.includes(v?.role))return!0}),h=f(j.Z),Q=b=>{if(b.includes("rc-menu-more"))return c(b);const a=b[b.length-1];if(a!=null&&a.includes(b[0]))return c(b);c([a])},_=({key:b})=>o(b);return(0,p.useImperativeHandle)(n,()=>({setOpenKeys:c}),[d]),(0,e.jsx)(g.Z,{theme:"dark",selectedKeys:[d],mode:"inline",openKeys:i,items:h,onOpenChange:Q,onClick:_,...s})};var X=t(66298),r=t(12599),T=t(26055);const R=n=>{const{pageConfig:s}=(0,l.v9)(d=>d.topHeader),{layoutItems:o}=s??{},i=(0,x.TH)(),v=(0,r.fp)(T.H,i).map(d=>{var f,h;return{title:(f=d.route)===null||f===void 0||(h=f.meta)===null||h===void 0?void 0:h.title}});return(0,e.jsx)(C.Z,{auth:o?.includes("breadcrumb"),render:()=>(0,e.jsx)(X.Z,{separator:">",items:v}),fallback:(0,e.jsx)("span",{})})};var W=t(53807),D=t(40385),A=t(24616),I=t(65460),O=t(19650),w=t(71230),J=t(15746),se=t(27061),ye=t(63434),ee=t(88369),Y=t(38717);const je=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],fe=n=>{const{changeLayout:s,pageConfig:o={},changeLayoutMode:i}=n,{layoutItems:c,layoutMode:v}=o;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I.Z,{children:(0,e.jsxs)(O.Z,{style:{alignItems:"center"},children:[(0,e.jsx)(Z.WB,{}),"\u754C\u9762\u663E\u793A"]})}),(0,e.jsxs)(se.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(ye.Z.Group,{label:"",name:"layoutItems",initialValue:c,fieldProps:{onChange:d=>s(d)},options:je}),(0,e.jsx)(ee.Z.Group,{onChange:d=>i(d),value:v,size:"small",style:{width:"100%"},children:(0,e.jsxs)(w.Z,{gutter:20,children:[(0,e.jsx)(J.Z,{span:12,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:170,height:80}})}),(0,e.jsx)(J.Z,{span:12,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})}),(0,e.jsx)(J.Z,{span:11,children:(0,e.jsx)(ee.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})]})})]})]})},Ee=(0,l.$j)(n=>n.topHeader,{changeLayout:Y.c_,changeLayoutMode:Y.fu})(fe);var te=t(33845),ve=t(97573),xe=t(79508),me=t(28508),oe=t(51741);const Ce=n=>(s,o)=>{const i=document.body;return s(Ze(n)),n.isGrey?i.setAttribute("style","filter: grayscale(1)"):n.isColorWeakness?i.setAttribute("style","filter: invert(80%)"):i.setAttribute("style","")},be=n=>s=>{s(Te(n))},Le=n=>s=>{s(Pe(n))},Ze=n=>({type:oe.Z.CHANGE_THEME,themeMode:n}),Te=n=>({type:oe.Z.SET_COLOR_PRIMARY,colorPrimary:n}),Pe=n=>({type:oe.Z.SET_COMPONENT_SIZE,componentSize:n}),bt=()=>({type:actionsType.RESET_THEME_STATE});var Oe=t(55241),Ae=t(93565);const Ie=P.ZP.div`
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
`,Se=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],Me=n=>{const{currentColor:s="#9b59b6"}=n,o=(i,c)=>{n?.onChange(i)};return(0,e.jsx)(Ie,{children:(0,e.jsx)(Oe.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Ae.xS,{presetColors:Se,onChange:o,...n}),placement:"bottom",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:s}}),(0,e.jsx)("span",{children:s})]})})})},Re=(0,p.memo)(n=>{const{changeColorPrimary:s,changeTheme:o}=n,{token:{colorPrimary:i},themeMode:{isGrey:c,isColorWeakness:v}}=(0,l.v9)(d=>d.theme,l.wU);return(0,p.useLayoutEffect)(()=>{o({isGrey:c,isColorWeakness:v})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I.Z,{children:(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(Z.kS,{}),"\u4E3B\u9898\u8BBE\u7F6E"]})}),(0,e.jsxs)(te.Z,{initialValues:{colorPrimary:i,isGrey:c,isColorWeakness:v},children:[(0,e.jsx)(te.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(Me,{currentColor:i,onChange:d=>{console.log(d),s(d.hex)}})}),(0,e.jsxs)(O.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(te.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(me.Z,{}),checked:c,onChange:d=>o({isGrey:d,isColorWeakness:!1})})})]}),(0,e.jsxs)(O.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(te.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ve.Z,{checkedChildren:(0,e.jsx)(xe.Z,{}),unCheckedChildren:(0,e.jsx)(me.Z,{}),onChange:d=>o({isColorWeakness:d,isGrey:!1})})})]})]})]})}),De=(0,l.$j)(null,{changeTheme:Ce,changeColorPrimary:be})(Re),He=n=>{const[s,o]=(0,p.useState)(!1),i=()=>{o(!1)};function c(){o(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(A.Z,{onClick:c})}),(0,e.jsxs)(D.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:i,open:s,children:[(0,e.jsx)(Ee,{}),(0,e.jsx)(De,{})]})]})};var Ue=t(21444),Be=t(38296),ne=t(47489);const Fe=()=>{const[n,s]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{ne.Z.on("change",()=>{s(ne.Z.isFullscreen)})},[]),(0,e.jsx)(C.Z,{auth:ne.Z.isEnabled,render:()=>(0,e.jsx)(W.Z,{title:n?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:o=>ne.Z.toggle(),children:n?(0,e.jsx)(Ue.Z,{}):(0,e.jsx)(Be.Z,{})})})})},Ne=p.memo(Fe);var We=t(27032),ae=t(13013),Ke=t(47759),$e=t(89366),ke=t(68855),pe=t(40778);const{confirm:ze}=We.Z,Ge=n=>{const{userInfo:s,token:o}=(0,l.v9)(d=>d.global),{logout:i}=n,c=(0,x.s0)(),v=[{label:(0,e.jsx)("span",{onClick:d=>{c("/user/info")},children:"\u4E2A\u4EBA\u4E2D\u5FC3"}),key:"/user/info",icon:(0,e.jsx)($e.Z,{})},{label:(0,e.jsx)("span",{onClick:()=>{ze({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(ke.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){i(o)}})},children:"\u9000\u51FA\u767B\u5F55"}),key:"logout",icon:(0,e.jsx)(Z.R0,{})}];return(0,e.jsx)(ae.Z,{trigger:["click"],placement:"bottomLeft",menu:{items:v},children:(0,e.jsx)(Ke.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},Ye=(0,l.$j)(null,{logout:pe.kS})(Ge),Ve=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Xe=(0,p.memo)(n=>{const{componentSize:s,changeComponentSize:o}=n,i=Ve.map(c=>(c.disabled=c.key===s,c));return(0,e.jsx)(ae.Z,{trigger:["click"],menu:{items:i,onClick:({key:c})=>{o(c)}},children:(0,e.jsx)(W.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)("span",{className:"anticon",children:(0,e.jsx)(Z.el,{})})})})}),we=(0,l.$j)(n=>n.theme,{changeComponentSize:Le})(Xe),le=n=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(we,{}),(0,e.jsx)(Ne,{}),(0,e.jsx)(He,{}),(0,e.jsx)(Ye,{})]});var Je=t(48700),Qe=t(54599),Pt=t(88674),Ot=t(17727),_e=t(34804);const qe=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],et=n=>{const{pathname:s}=(0,x.TH)(),o=(0,x.s0)(),{deleteCurrentTab:i,deleteAllTab:c,deleteOtherTab:v}=n,d=({key:f})=>{if(f==="current")return i(s).then(({key:h})=>o(h));if(f==="other")return v(s);if(f==="all")return c(s).finally(o("/home"))};return(0,e.jsx)(O.Z,{align:"center",children:(0,e.jsx)(ae.Z,{menu:{items:qe,onClick:d},children:(0,e.jsx)(O.Z,{style:{cursor:"pointer"},children:(0,e.jsx)(_e.Z,{})})})})},tt=(0,l.$j)(null,{deleteCurrentTab:Y._I,deleteAllTab:Y.Ud,deleteOtherTab:Y.ND})(et),nt=n=>{const{addTabs:s,deleteCurrentTab:o,style:i}=n,c=(0,Qe.nC)(),v=(0,x.s0)(),d=(0,x.TH)(),f=(0,l.I0)();let{tabList:h,activeKey:Q}=(0,l.v9)(E=>E.topHeader,l.wU);const{pageConfig:_}=(0,l.v9)(E=>E.topHeader),{layoutItems:b}=_??{};(0,p.useEffect)(()=>{const{pathname:E}=d;s(c,E)},[d.pathname]);const a=(E,z)=>{o(E).then(({key:$})=>v($))},K=E=>v(E);return(0,e.jsx)(C.Z,{auth:b?.includes("tabs"),render:()=>(0,e.jsx)(Je.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:a,onTabClick:K,activeKey:Q,items:h,tabBarExtraContent:(0,e.jsx)(tt,{}),style:i})})},re=(0,l.$j)(null,{addTabs:Y.BH,deleteCurrentTab:Y._I})(nt);var st=t(1351),ot=t(76629);const at=n=>{const{collapsed:s,updateCollapse:o}=n;return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>o(!s),children:s?(0,e.jsx)(st.Z,{}):(0,e.jsx)(ot.Z,{})})},ge=(0,l.$j)(n=>n.global,{updateCollapse:pe.oR})(at),lt=P.ZP.div`

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



`,rt=()=>(0,e.jsxs)(lt,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(ge,{}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(R,{}),(0,e.jsx)(le,{})]})]}),(0,e.jsx)(I.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(re,{})]}),{Content:it}=u.Z,ie=()=>(0,e.jsx)(it,{className:"layout-content",children:(0,e.jsx)(x.j3,{})}),{Footer:ct}=u.Z,ce=()=>{const{pageConfig:n}=(0,l.v9)(o=>o.topHeader),{layoutItems:s}=n??{};return(0,e.jsx)(C.Z,{auth:s?.includes("pageFooter"),render:()=>(0,e.jsx)(ct,{className:"layout-footer",children:"Dengff Admin Template"})})};var At=t(74916);const de=(n=!1)=>{var s;const o=(0,p.useRef)(null),{pathname:i}=(0,x.TH)();let c=[];const v=(s=i.split(/\//))===null||s===void 0?void 0:s[1],d=(f=j.Z)=>(f.forEach(h=>{if(h.path===i&&c.push(h.path),h.path.includes(v)&&i.indexOf(h.path)>-1&&c.push(h.path),h!=null&&h.children)return d(h.children)}),c);return(0,p.useEffect)(()=>{var f,h;if(n)return o==null||(f=o.current)===null||f===void 0?void 0:f.setOpenKeys([]);const Q=d();o==null||(h=o.current)===null||h===void 0||h.setOpenKeys(Q)},[i]),[o]},{Header:dt,Sider:ut}=u.Z,ht=()=>{const{collapsed:n}=(0,l.v9)(o=>o.global,l.wU),[s]=de();return(0,e.jsx)(L,{children:(0,e.jsxs)(u.Z,{style:{height:"100%"},children:[(0,e.jsxs)(ut,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:n,children:[(0,e.jsx)(y,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(G,{menuRef:s,theme:"light"})})]}),(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(dt,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(rt,{})}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})]})})},vt=P.ZP.div`
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

`,xt=()=>{const[n]=de(!0);return(0,e.jsx)(vt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(y,{mode:"horizontal"}),(0,e.jsx)(G,{theme:"light",menuRef:n,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(le,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(I.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(re,{})]})]})})},{Header:mt}=u.Z,pt=()=>(0,e.jsx)(L,{children:(0,e.jsx)(u.Z,{style:{height:"100%"},children:(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(mt,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(xt,{})}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})})}),gt=P.ZP.div`

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




`,yt=n=>(0,e.jsx)(gt,{children:(0,e.jsx)("div",{className:"portrait-header",children:(0,e.jsxs)("div",{className:"portrait-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(y,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(ge,{})}),(0,e.jsx)(R,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(le,{})})]})})}),{Header:jt,Sider:ft}=u.Z,Et=()=>{const{collapsed:n}=(0,l.v9)(o=>o.global,l.wU),[s]=de();return(0,e.jsx)(L,{children:(0,e.jsxs)(u.Z,{style:{height:"100%"},children:[(0,e.jsx)(jt,{style:{padding:"0 0px",background:"#fff",height:"auto"},children:(0,e.jsx)(yt,{})}),(0,e.jsxs)(u.Z,{children:[(0,e.jsx)(ft,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:n,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(G,{menuRef:s,theme:"light"})})}),(0,e.jsxs)(u.Z,{className:"site-layout",children:[(0,e.jsx)(re,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(ie,{}),(0,e.jsx)(ce,{})]})]})]})})},Ct=()=>{const{pageConfig:n}=(0,l.v9)(o=>o.topHeader),{layoutMode:s}=n??{};return(0,e.jsxs)(e.Fragment,{children:[s==="classicLayout"&&(0,e.jsx)(ht,{}),s==="landscapeLayout"&&(0,e.jsx)(pt,{}),s==="portraitLayout"&&(0,e.jsx)(Et,{})]})}},40778:(q,M,t)=>{t.d(M,{bG:()=>C,kS:()=>e,oR:()=>B,x4:()=>u});var p=t(88674),l=t.n(p),H=t(39649),U=t(93762),P=t(54599),L=t(38717);const u=({username:g,password:x})=>Z=>new Promise((F,j)=>{(0,H.yq)({username:g,password:x}).then(S=>{const{status:G,token:X}=S.data;G===0?(Z(m(X)),(0,P.o4)(X),F(S)):j()})}),C=g=>x=>new Promise((Z,F)=>{(0,H.dW)(g).then(j=>{const{userInfo:S}=j;x(k(S)),(0,P.ps)(S),Z(j)})}),e=g=>x=>new Promise((Z,F)=>{(0,H.uf)(g).then(j=>{j?.data.status===0&&(x(m(void 0)),x(y()),x((0,L.Yc)()),window.localStorage.clear(),Z(!0))}).catch(j=>F(j))}),B=g=>({type:U.Z.UPDATE_COLLAPSE,collapsed:g}),m=g=>({type:U.Z.USER_SET_USER_TOKEN,token:g}),k=g=>({type:U.Z.USER_SET_USER_INFO,userInfo:g}),y=()=>({type:U.Z.USER_RESET_USER})},38717:(q,M,t)=>{t.d(M,{BH:()=>C,ND:()=>B,Ud:()=>m,Yc:()=>X,_I:()=>e,c_:()=>k,fu:()=>y});var p=t(66992),l=t.n(p),H=t(33948),U=t.n(H),P=t(88674),L=t.n(P),u=t(20409);const C=(r,T)=>(N,R)=>{const{topHeader:W}=R(),{tabList:D}=W;if(D.every(O=>O.key!==T)){var A,I;const O={key:r.pathname,label:r==null||(A=r.route)===null||A===void 0||(I=A.meta)===null||I===void 0?void 0:I.title};N(F([...D,O]))}N(j(T))},e=r=>(T,N)=>new Promise((R,W)=>{if(r==="/home")return;const{topHeader:D}=N(),{tabList:A}=D;let I=null;const O=A.filter((J,se)=>{if(J.key!==r)return!0;J.key===r&&(I=se)}),w=A[I-1];T(g(O)),T(j(w?.key)),R(w)}),B=r=>(T,N)=>{const{topHeader:R}=N(),{tabList:W}=R,D=W.filter(A=>A.key===r||A.key==="/home");T(x(D))},m=r=>(T,N)=>new Promise((R,W)=>{const{topHeader:D}=N(),{tabList:A}=D,I=A.filter(O=>O.key==="/home");T(Z(I)),R(!0)}),k=r=>T=>{T(S(r))},y=r=>T=>{T(G(r))},g=r=>({type:u.Z.DELETE_CURRENT_TAB,tabList:r}),x=r=>({type:u.Z.DELETE_OTHER_TAB,tabList:r}),Z=r=>({type:u.Z.DELETE_ALL_TAB,tabList:r}),F=r=>({type:u.Z.SET_TABS,tabList:r}),j=r=>({type:u.Z.SET_TABS_ACTIVE_KEY,activeKey:r}),S=r=>({type:u.Z.SET_PAGE_LAYOUT_ITEMS,layoutItems:r}),G=r=>({type:u.Z.SET_LAYOUT_MODE,layoutMode:r}),X=()=>({type:u.Z.RESET_TOP_HEADER_STATE})}}]);
