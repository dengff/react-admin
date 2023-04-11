"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[3679],{39649:(N,k,t)=>{t.d(k,{yq:()=>x,uf:()=>u,Il:()=>m,dW:()=>b,WY:()=>f});var y=t(88674),l=t(7150);const S={baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0},f=((h=S)=>{const e=l.Z.create({...h});return e.interceptors.request.use(function(a){return a},function(a){return Promise.reject(a)}),e.interceptors.response.use(function(a){const{data:p}=a,{code:B,message:Z}=p;if(p instanceof ArrayBuffer)return p;const v={200:()=>p,default:()=>Promise.reject(a.data)};return v[B]?v[B]():v.default()},function(a){return Promise.reject(a)}),e})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),x=h=>f.post("/login",{...h}),b=h=>f.post("/userInfo",{token:h}),u=h=>f.post("/logout",{token:h}),m=h=>f.post("/detailInfo",{...h})},67713:(N,k,t)=>{t.d(k,{K:()=>M});var y=t(67294),l=t(54599),S=t(85893);const M=A=>{var f,x,b;const{route:u}=(0,l.nC)(),{backup:m,children:h,permissionControl:e}=A,a=(f=u.route.meta)===null||f===void 0||(x=f.auth)===null||x===void 0?void 0:x.permissionControl,p=typeof e=="function"?e():!!(a!=null&&(b=a.filter(Z=>e?.includes(Z)))!==null&&b!==void 0&&b.length),B=Z=>typeof h=="function"?h(Z):Z?h:m??null;return(0,S.jsx)(S.Fragment,{children:B(p)})}},93679:(N,k,t)=>{t.r(k),t.d(k,{default:()=>Bt});var y=t(67294),l=t(70743),S=t(66992),M=t(33948),A=t(71893);const f=A.ZP.div`
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

  .ant-layout-header {
    line-height: inherit;
  }

  .layout-footer {
    text-align: center;
    background: rgb(240, 242, 245);
    color: rgb(217, 217, 217);
    padding: 0px 0px 20px;
  }
`;var x=t(97183),b=t(67713);const u=o=>o.topHeader;var m=t(97131),h=t(17925),e=t(85893);const a=A.ZP.div`
  width: ${o=>o.mode==="horizontal"?"200px":!1};
  display: flex;
  align-items: center;
  transition: padding .3s cubic-bezier(.645, .045, .355, 1);

  .logo {
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    img {
      width: auto;
      height: 48px;
    }

    h1 {
      color: ${o=>o.colorPrimary};
      font-weight: 600;
      font-size: 18px;
      animation: slide-in 0.3s ease-in-out;
    }

    @keyframes slide-in {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 0;

        100% {
          opacity: 1;
        }
      }
    }
`,B=o=>{const{pageConfig:s,collapsed:i}=(0,l.v9)(u),{token:{colorPrimary:g}}=(0,l.v9)(h.P),{layoutItems:n,layoutMode:d}=s??{};return(0,e.jsx)(b.K,{permissionControl:()=>n?.includes("logo"),children:(0,e.jsx)(a,{...o,colorPrimary:g,children:(0,e.jsxs)("div",{className:"logo",children:[(0,e.jsx)("img",{src:m,alt:"logo"}),(d==="portraitLayout"||!i)&&(0,e.jsx)("h1",{children:"React Admin"})]})})})};var Z=t(8505),v=t(89250),j=t(57259),$=t(16165),c=t(48925),L=t(33348);const F=({menuRef:o,...s})=>{const i=(0,v.s0)(),[g,n]=(0,y.useState)([]),{userInfo:d}=(0,l.v9)(L.b,l.wU),{pathname:E}=(0,v.TH)(),I=D=>D.map(r=>{var H,z,J,V,w;return{...r,label:r==null||(H=r.meta)===null||H===void 0?void 0:H.title,key:r.path,title:r==null||(z=r.meta)===null||z===void 0?void 0:z.title,icon:j.FO[r==null||(J=r.meta)===null||J===void 0?void 0:J.icon]?(0,e.jsx)($.Z,{component:j.FO[r==null||(V=r.meta)===null||V===void 0?void 0:V.icon]}):null,children:(r==null||(w=r.children)===null||w===void 0?void 0:w.length)&&I(r?.children)}}).filter(r=>{var H,z,J,V,w,pe,ve;if((r==null||(H=r.meta)===null||H===void 0?void 0:H.hideInMenu)===!0)return!1;if(d?.role==="admin"||!(r!=null&&(z=r.meta)!==null&&z!==void 0&&(J=z.auth)!==null&&J!==void 0&&(V=J.roles)!==null&&V!==void 0&&V.length)||r!=null&&(w=r.meta)!==null&&w!==void 0&&(pe=w.auth)!==null&&pe!==void 0&&(ve=pe.roles)!==null&&ve!==void 0&&ve.includes(d?.role))return!0}),Q=I(c.Z),X=D=>{if(D.includes("rc-menu-more"))return n(D);const r=D[D.length-1];if(r!=null&&r.includes(D[0]))return n(D);n([r])},me=({key:D})=>i(D);return(0,y.useImperativeHandle)(o,()=>({setOpenKeys:n}),[E]),(0,e.jsx)(Z.Z,{theme:"dark",selectedKeys:[E],mode:"inline",openKeys:g,items:Q,onOpenChange:X,onClick:me,...s})};var W=t(66298),O=t(54599);const U=()=>{const{pageConfig:o}=(0,l.v9)(u),{layoutItems:s}=o??{},{matches:i}=(0,O.nC)(),g=i.map(n=>{var d,E;return{title:(d=n.route)===null||d===void 0||(E=d.meta)===null||E===void 0?void 0:E.title}});return(0,e.jsx)(b.K,{permissionControl:()=>!!(s!=null&&s.includes("breadcrumb")),backup:(0,e.jsx)("span",{}),children:(0,e.jsx)(W.Z,{separator:">",items:g})})};var P=t(53807),Y=t(40385),G=t(65460),C=t(19650),Ee=t(71577),Ie=t(43425),be=t(23632),Be=t(71230),se=t(15746),Le=t(27061),Ze=t(63434),q=t(88369),R=t(38717),ne=t(29225);const re=A.iv`
  padding: 0 0;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  overflow: hidden;
  background-color: ${o=>(0,ne.fo)(o.colorPrimary,.82)};
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, .18);
`,Ae=A.iv`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 11%;
    height: 100%;
    z-index: 1;
    background-color: ${o=>(0,ne.fo)(o.colorPrimary,.2)};
  }

`,ae=A.iv`
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: ${o=>(0,ne.fo)(o.colorPrimary,.5)};
    content: "";
  }
`,Pe=A.ZP.div`
  .classicLayout {
    ::after {
      z-index: 1;
    }

    .ant-pro-checkcard-content {
      ${re}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${Ae}
      ${ae}
      &::after {
        z-index: 1;
      }
    }
  }

  .landscapeLayout {
    .ant-pro-checkcard-content {
      ${re}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${ae}
    }
  }

  .portraitLayout {
    .ant-pro-checkcard-content {
      ${re}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }
      ${Ae}
      ${ae}
    }
  }



`,Se=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],ke=()=>{const{pageConfig:o}=(0,l.v9)(u),{token:{colorPrimary:s}}=(0,l.v9)(h.P),i=(0,l.I0)(),{layoutItems:g,layoutMode:n}=o;return(0,e.jsxs)(Pe,{colorPrimary:s,children:[(0,e.jsx)(G.Z,{children:(0,e.jsxs)(C.Z,{style:{alignItems:"center"},children:[(0,e.jsx)(j.WB,{}),"\u754C\u9762\u663E\u793A"]})}),(0,e.jsxs)(Le.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(Ze.Z.Group,{label:"",name:"layoutItems",initialValue:g,fieldProps:{onChange:d=>i((0,R.c_)(d))},options:Se}),(0,e.jsx)(q.Z.Group,{onChange:d=>i((0,R.fu)(d)),value:n,size:"small",style:{width:"100%"},children:(0,e.jsxs)(Be.Z,{gutter:20,style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},children:[(0,e.jsx)(P.Z,{title:"\u7ECF\u5178\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(q.Z,{className:"classicLayout",title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:90,height:60}})})}),(0,e.jsx)(P.Z,{title:"\u6A2A\u5411\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(q.Z,{className:"landscapeLayout",title:"\u5E03\u5C40",style:{width:90,height:60},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})})}),(0,e.jsx)(P.Z,{title:"\u7EB5\u5411\u5E03\u5C40",children:(0,e.jsx)(se.Z,{children:(0,e.jsx)(q.Z,{className:"portraitLayout",title:"\u5E03\u5C40",style:{width:90,height:60},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})})]})})]})]})};var _=t(33792),ye=t(72985),fe=t(88284),je=t(28508),ee=t(51741);const le=o=>(s,i)=>{const g=document.body;return s(Fe(o)),o.isGrey?g.setAttribute("style","filter: grayscale(1)"):o.isColorWeakness?g.setAttribute("style","filter: invert(80%)"):g.setAttribute("style","")},Te=o=>s=>{s(Oe(o))},De=o=>s=>{s(Ue(o))},Fe=o=>({type:ee.Z.CHANGE_THEME,themeMode:o}),Oe=o=>({type:ee.Z.SET_COLOR_PRIMARY,colorPrimary:o}),Ue=o=>({type:ee.Z.SET_COMPONENT_SIZE,componentSize:o}),Qe=()=>({type:ee.Z.RESET_THEME_STATE});var Me=t(55241),Ke=t(2615);const Re=A.ZP.div`
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
`,He=["#409EFF","#DAA96E","#00cf74","#009688","#27ae60","#ff5c93","#e53935","#d81b60","#14c9c9","#e74c3c","#fd726d","#f39c12","#9b59b6"],Ge=({onChange:o,currentColor:s="#9b59b6",...i})=>{const g=(n,d)=>{o(n)};return(0,e.jsx)(Re,{children:(0,e.jsx)(Me.Z,{overlayInnerStyle:{padding:"0"},trigger:"click",content:(0,e.jsx)(Ke.xS,{presetColors:He,onChange:g,...i}),placement:"bottom",children:(0,e.jsxs)("div",{className:"theme-input",children:[(0,e.jsx)("div",{className:"theme-color",style:{background:s}}),(0,e.jsx)("span",{children:s})]})})})},Ne=(0,y.memo)(()=>{const o=(0,l.I0)(),{token:{colorPrimary:s},themeMode:{isGrey:i,isColorWeakness:g}}=(0,l.v9)(h.P,l.wU);return(0,y.useLayoutEffect)(()=>{o(le({isGrey:i,isColorWeakness:g}))},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{children:(0,e.jsxs)(C.Z,{children:[(0,e.jsx)(j.kS,{}),"\u4E3B\u9898\u8BBE\u7F6E"]})}),(0,e.jsxs)(_.Z,{initialValues:{colorPrimary:s,isGrey:i,isColorWeakness:g},children:[(0,e.jsx)(_.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(Ge,{currentColor:s,onChange:n=>{console.log(n),o(Te(n.hex))}})}),(0,e.jsxs)(C.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(_.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(fe.Z,{}),unCheckedChildren:(0,e.jsx)(je.Z,{}),checked:i,onChange:n=>o(le({isGrey:n,isColorWeakness:!1}))})})]}),(0,e.jsxs)(C.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F\uFF1A"}),(0,e.jsx)(_.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(fe.Z,{}),unCheckedChildren:(0,e.jsx)(je.Z,{}),onChange:n=>o(le({isColorWeakness:n,isGrey:!1}))})})]})]})]})}),We=()=>{const[o,s]=(0,y.useState)(!1),i=(0,l.I0)(),g=()=>{s(!1)};function n(){s(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(Ie.Z,{onClick:n})}),(0,e.jsxs)(Y.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:g,open:o,children:[(0,e.jsx)(ke,{}),(0,e.jsx)(Ne,{}),(0,e.jsx)(G.Z,{}),(0,e.jsx)(C.Z,{style:{width:"100%"},direction:"vertical",children:(0,e.jsx)(Ee.ZP,{icon:(0,e.jsx)(be.Z,{}),type:"primary",style:{width:"100%"},onClick:()=>{i(Qe()),i((0,R.Yc)())},children:"\u91CD\u7F6E"})})]})]})};var ze=t(19078),Je=t(5785),te=t(47489);const Ve=()=>{const[o,s]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{te.Z.on("change",()=>{s(te.Z.isFullscreen)})},[]),(0,e.jsx)(b.K,{permissionControl:()=>te.Z.isEnabled,children:(0,e.jsx)(P.Z,{title:o?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)("div",{style:{cursor:"pointer"},onClick:i=>te.Z.toggle(),children:o?(0,e.jsx)(ze.Z,{}):(0,e.jsx)(Je.Z,{})})})})},we=y.memo(Ve);var Ye=t(27032),Xe=t(84466),ie=t(13013),$e=t(47759),oe=t(29177),qe=t(82114),ce=t(40778);const{confirm:_e}=Ye.Z,et=()=>{const{userInfo:o,token:s}=(0,l.v9)(L.b),i=(0,l.I0)(),g=(0,v.s0)(),n=E=>{i((0,ce.x4)({username:E,password:"123456"})).then(I=>{const{token:Q}=I?.data;i((0,ce.bG)(Q)).then(X=>Xe.ZP.success("success"))})},d=[{label:(0,e.jsxs)(C.Z,{children:[(0,e.jsx)(j.UR,{}),"\u5207\u6362\u89D2\u8272"]}),key:"switchRoles",children:[{label:(0,e.jsxs)(C.Z,{onClick:E=>n("admin"),children:[(0,e.jsx)(oe.Z,{}),"Admin"]}),key:"admin",disabled:s==="admin"},{label:(0,e.jsxs)(C.Z,{onClick:E=>n("editor"),children:[(0,e.jsx)(oe.Z,{}),"Editor"]}),key:"editor",disabled:s==="editor"},{label:(0,e.jsxs)(C.Z,{onClick:E=>n("guest"),children:[(0,e.jsx)(oe.Z,{}),"Guest"]}),key:"guest",disabled:s==="guest"}]},{label:(0,e.jsxs)(C.Z,{onClick:E=>{g("/user/info")},children:[(0,e.jsx)(oe.Z,{}),"\u4E2A\u4EBA\u4E2D\u5FC3"]}),key:"/user/info"},{type:"divider",key:"divider"},{label:(0,e.jsxs)(C.Z,{onClick:()=>{_e({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(qe.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){i((0,ce.kS)(s))}})},children:[(0,e.jsx)(j.R0,{}),"\u9000\u51FA\u767B\u5F55"]}),key:"logout"}];return(0,e.jsx)(ie.Z,{placement:"bottomLeft",menu:{items:d},children:(0,e.jsx)($e.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:o?.avatar,alt:"avatar"})})})},tt=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],ot=(0,y.memo)(o=>{const{componentSize:s}=(0,l.v9)(h.P),i=(0,l.I0)(),g=tt.map(n=>(n.disabled=n.key===s,n));return(0,e.jsx)(ie.Z,{trigger:["click"],menu:{items:g,onClick:({key:n})=>{i(De(n))}},children:(0,e.jsx)(P.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)("span",{className:"anticon",children:(0,e.jsx)(j.el,{})})})})}),de=()=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(ot,{}),(0,e.jsx)(we,{}),(0,e.jsx)(We,{}),(0,e.jsx)(et,{})]});var st=t(72326),Ft=t(88674),Ot=t(17727),nt=t(34804);const rt=A.ZP.div`
  .ant-space-item {
    cursor: pointer;
  }

  .ant-space-item:hover {
    color: ${o=>o.colorPrimary};
    background-color: #f7f8fa;
  }
`,at=()=>{const o=(0,l.I0)(),{pathname:s}=(0,v.TH)(),i=(0,v.s0)(),{token:{colorPrimary:g}}=(0,l.v9)(h.P),n=[{label:(0,e.jsxs)(C.Z,{onClick:()=>{o((0,R._I)(s)).then(({key:d})=>i(d))},children:[(0,e.jsx)(j.tV,{}),"\u5173\u95ED\u5F53\u524D"]}),key:"current"},{label:(0,e.jsxs)(C.Z,{onClick:()=>{o((0,R.ND)(s))},children:[(0,e.jsx)(j.wE,{}),"\u5173\u95ED\u5176\u4ED6"]}),key:"other"},{label:(0,e.jsxs)(C.Z,{onClick:()=>{o((0,R.Ud)(s)).finally(()=>{i("/home")})},children:[(0,e.jsx)(j.eq,{}),"\u5173\u95ED\u6240\u6709"]}),key:"all"}];return(0,e.jsx)(rt,{colorPrimary:g,children:(0,e.jsx)(C.Z,{align:"center",children:(0,e.jsx)(ie.Z,{menu:{items:n},children:(0,e.jsx)(C.Z,{children:(0,e.jsx)(nt.Z,{})})})})})},ue=o=>{const{style:s}=o,{route:i}=(0,O.nC)(),g=(0,v.s0)(),n=(0,v.TH)(),d=(0,l.I0)();let{tabList:E,activeKey:I,pageConfig:Q}=(0,l.v9)(u,l.wU);const{layoutItems:X}=Q??{};(0,y.useEffect)(()=>{const{pathname:r}=n;d((0,R.BH)(i,r))},[n.pathname]);const me=r=>{d((0,R._I)(r)).then(({key:H})=>g(H))},D=r=>g(r);return(0,e.jsx)(b.K,{permissionControl:()=>X?.includes("tabs"),children:(0,e.jsx)(st.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},tabBarGutter:-1,animated:!0,onEdit:r=>me(r),onTabClick:D,activeKey:I,items:E,tabBarExtraContent:(0,e.jsx)(at,{}),style:s})})};var lt=t(21985),it=t(38014);const ct=A.ZP.span`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${o=>o.colorPrimary};
  }

`,Ce=()=>{const{collapsed:o}=(0,l.v9)(u),{token:{colorPrimary:s}}=(0,l.v9)(h.P),i=(0,l.I0)();return(0,e.jsx)(ct,{colorPrimary:s,onClick:()=>i((0,R.oR)(!o)),children:o?(0,e.jsx)(lt.Z,{}):(0,e.jsx)(it.Z,{})})},dt=A.ZP.div`

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



`,ut=()=>(0,e.jsxs)(dt,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(Ce,{}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(U,{}),(0,e.jsx)(de,{})]})]}),(0,e.jsx)(G.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ue,{})]}),{Content:ht}=x.Z,he=()=>(0,e.jsx)(ht,{className:"layout-content",children:(0,e.jsx)(v.j3,{})}),{Footer:gt}=x.Z,ge=()=>{const{pageConfig:o}=(0,l.v9)(u),{layoutItems:s}=o??{};return(0,e.jsx)(b.K,{permissionControl:()=>s?.includes("pageFooter"),children:(0,e.jsx)(gt,{className:"layout-footer",children:"Dengff Admin Template"})})};var Kt=t(74916),Rt=t(86535),Ht=t(86587);const xe=(o=!1)=>{const s=(0,y.useRef)(null),{pathname:i}=(0,v.TH)(),g=(n=c.Z)=>{var d;const E=(d=i.split(/\//))===null||d===void 0?void 0:d[1];return n.flatMap(I=>{var Q;return[I.path===i||(Q=I.path)!==null&&Q!==void 0&&Q.includes(E)&&i.indexOf(I.path)>-1?I.path:[],...I!=null&&I.children?g(I.children):[]]})};return(0,y.useEffect)(()=>{var n,d;if(o)return s==null||(n=s.current)===null||n===void 0?void 0:n.setOpenKeys([]);const E=g();(d=s.current)===null||d===void 0||d.setOpenKeys(E)},[i]),[s]},{Header:xt,Sider:mt}=x.Z,pt=()=>{const{collapsed:o}=(0,l.v9)(u,l.wU),[s]=xe();return(0,e.jsx)(f,{children:(0,e.jsxs)(x.Z,{style:{height:"100%"},children:[(0,e.jsxs)(mt,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:o,children:[(0,e.jsx)(B,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(F,{menuRef:s,theme:"light"})})]}),(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(xt,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(ut,{})}),(0,e.jsx)(he,{}),(0,e.jsx)(ge,{})]})]})})},vt=A.ZP.div`
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

`,At=()=>{const[o]=xe(!0);return(0,e.jsx)(vt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(B,{mode:"horizontal"}),(0,e.jsx)(F,{theme:"light",menuRef:o,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(de,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(G.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ue,{})]})]})})},{Header:yt}=x.Z,ft=()=>(0,e.jsx)(f,{children:(0,e.jsx)(x.Z,{style:{height:"100%"},children:(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(yt,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(At,{})}),(0,e.jsx)(he,{}),(0,e.jsx)(ge,{})]})})}),jt=A.ZP.div`

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




`,Ct=()=>(0,e.jsx)(jt,{children:(0,e.jsx)("div",{className:"portrait-header",children:(0,e.jsxs)("div",{className:"portrait-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(B,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(Ce,{})}),(0,e.jsx)(U,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(de,{})})]})})}),{Header:Et,Sider:It}=x.Z,bt=()=>{const{collapsed:o}=(0,l.v9)(u,l.wU),[s]=xe();return(0,e.jsx)(f,{children:(0,e.jsxs)(x.Z,{style:{height:"100%"},children:[(0,e.jsx)(Et,{style:{padding:"0 0px",background:"#fff",height:"auto"},children:(0,e.jsx)(Ct,{})}),(0,e.jsxs)(x.Z,{children:[(0,e.jsx)(It,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:o,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(F,{menuRef:s,theme:"light"})})}),(0,e.jsxs)(x.Z,{className:"site-layout",children:[(0,e.jsx)(ue,{style:{paddingRight:"14px",height:"38px",background:"#fff"}}),(0,e.jsx)(he,{}),(0,e.jsx)(ge,{})]})]})]})})},Bt=()=>{const{pageConfig:o}=(0,l.v9)(u),{layoutMode:s}=o??{};return(0,e.jsxs)(e.Fragment,{children:[s==="classicLayout"&&(0,e.jsx)(pt,{}),s==="landscapeLayout"&&(0,e.jsx)(ft,{}),s==="portraitLayout"&&(0,e.jsx)(bt,{})]})}},40778:(N,k,t)=>{t.d(k,{bG:()=>b,kS:()=>u,x4:()=>x});var y=t(88674),l=t.n(y),S=t(39649),M=t(93762),A=t(54599),f=t(38717);const x=({username:a,password:p})=>B=>new Promise((Z,v)=>{(0,S.yq)({username:a,password:p}).then(j=>{const{status:$,token:c}=j.data;$===0?(B(m(c)),(0,A.o4)(c),Z(j)):v()})}),b=a=>p=>new Promise((B,Z)=>{(0,S.dW)(a).then(v=>{const{userInfo:j}=v;p(h(j)),(0,A.ps)(j),B(v)})}),u=a=>p=>new Promise((B,Z)=>{(0,S.uf)(a).then(v=>{v?.data.status===0&&(localStorage.removeItem("token"),p(e()),p(m("")),p((0,f.Yc)()),B(!0))}).catch(v=>Z(!1))}),m=a=>({type:M.Z.USER_SET_USER_TOKEN,token:a}),h=a=>({type:M.Z.USER_SET_USER_INFO,userInfo:a}),e=()=>({type:M.Z.USER_RESET_USER})},38717:(N,k,t)=>{t.d(k,{BH:()=>b,ND:()=>m,Ud:()=>h,Yc:()=>j,_I:()=>u,c_:()=>e,fu:()=>a,oR:()=>$});var y=t(66992),l=t.n(y),S=t(33948),M=t.n(S),A=t(88674),f=t.n(A),x=t(20409);const b=(c,L)=>(K,F)=>{const{topHeader:W}=F(),{tabList:O}=W;if(O.every(P=>P.key!==L)){var T,U;const P={key:c.pathname,label:c==null||(T=c.route)===null||T===void 0||(U=T.meta)===null||U===void 0?void 0:U.title,closable:!0};K(p([...O,P]))}K(B(L))},u=c=>(L,K)=>new Promise((F,W)=>{if(c==="/home")return;const{topHeader:O}=K(),{tabList:T}=O;let U=0;const P=T.filter((G,C)=>{if(G.key!==c)return!0;G.key===c&&(U=C)}),Y=T[U-1];L(p(P)),L(B(Y?.key)),F(Y)}),m=c=>(L,K)=>{const{topHeader:F}=K(),{tabList:W}=F,O=W.filter(T=>T.key===c||T.key==="/home");L(p(O))},h=c=>(L,K)=>new Promise((F,W)=>{const{topHeader:O}=K(),{tabList:T}=O,U=T.filter(P=>P.key==="/home");L(p(U)),F(!0)}),e=c=>L=>{L(Z(c))},a=c=>L=>{c&&L(v(c))},p=c=>({type:x.Z.SET_TABS,tabList:c}),B=c=>({type:x.Z.SET_TABS_ACTIVE_KEY,activeKey:c}),Z=c=>({type:x.Z.SET_PAGE_LAYOUT_ITEMS,layoutItems:c}),v=c=>({type:x.Z.SET_LAYOUT_MODE,layoutMode:c}),j=()=>({type:x.Z.RESET_TOP_HEADER_STATE}),$=c=>({type:x.Z.UPDATE_COLLAPSE,collapsed:c})},29225:(N,k,t)=>{t.d(k,{fo:()=>b});var y=t(74916),l=t.n(y),S=t(15306),M=t.n(S);function A(u){let m="";if(/^\#?[0-9A-Fa-f]{6}$/.test(u)){u=u.replace("#",""),m=u.match(/../g);for(let e=0;e<3;e++)m[e]=parseInt(m[e],16);return m}}function f(u,m,h){let e=/^\d{1,3}$/;if(!e.test(u)||!e.test(m)||!e.test(h))return!1;let a=[u.toString(16),m.toString(16),h.toString(16)];for(let p=0;p<3;p++)a[p].length==1&&(a[p]=`0${a[p]}`);return`#${a.join("")}`}function x(u,m){if(!/^\#?[0-9A-Fa-f]{6}$/.test(u))return!1;let e=A(u);for(let a=0;a<3;a++)e[a]=Math.round(20.5*m+e[a]*(1-m));return f(e[0],e[1],e[2])}function b(u,m){if(!/^\#?[0-9A-Fa-f]{6}$/.test(u))return!1;let e=A(u);for(let a=0;a<3;a++)e[a]=Math.round(255*m+e[a]*(1-m));return f(e[0],e[1],e[2])}},97131:N=>{N.exports="data:image/png;base64,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"}}]);
