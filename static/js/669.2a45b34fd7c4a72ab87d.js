"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[669],{35060:(w,I,t)=>{t.d(I,{yq:()=>E,uf:()=>M,dW:()=>Z,WY:()=>m});var h=t(88674),c=t(52861);let g=null,f=0;const p=()=>{f++},j=()=>{f--,f===0&&g?.close()},m=(H=>{const N=c.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...H});return N.interceptors.request.use(function(l){const{loading:x=!0}=l;return x&&p(),l},function(l){return Promise.reject(l)}),N.interceptors.response.use(function(l){const{loading:x=!0,notify:K=!1}=l.config;x&&j();const{code:A,data:C,message:D,cache:z,timeout:i}=l.data,y={200:()=>l.data,401:()=>{},default:()=>Promise.reject(l.data)};return y[A]?y[A]():y.default()},function(l){const{loading:x=!0}=l.config;return x&&j(),l.response&&l.response.status,Promise.reject(l)}),N})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),E=H=>m.post("/login",{...H}),Z=H=>m.post("/userInfo",{token:H}),M=H=>m.post("/logout",{token:H})},74173:(w,I,t)=>{t.d(I,{Z:()=>f});var h=t(67294),c=t(85893);const f=p=>{const{render:j,fallback:e,auth:P,...m}=p,E=j&&j();let Z=!1;return typeof P=="function"?Z=P():typeof P=="boolean"&&(Z=P),Z?E:(0,c.jsx)(c.Fragment,{children:e||null})}},95669:(w,I,t)=>{t.r(I),t.d(I,{default:()=>pt});var h=t(67294),c=t(86706),g=t(15286);const f=g.ZP.div`
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
    margin: 16px 14px;
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
`;var p=t(97183),j=t(74173),e=t(85893);const P="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",m=g.ZP.div`
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
`,Z=n=>{const{pageConfig:s}=(0,c.v9)(v=>v.topHeader),{layoutItems:r}=s??{};return(0,e.jsx)(j.Z,{auth:r?.includes("logo"),render:()=>(0,e.jsx)(m,{...n,children:(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:P})})})})};var M=t(8505),H=t(66992),N=t(33948),l=t(89250),x=t(5405),K=t(25150);function A(n){return(0,h.forwardRef)((s,r)=>{const v=(0,l.s0)(),{userInfo:d,collapsed:u}=(0,c.v9)(L=>L.global,c.wU),{pathname:o}=(0,l.TH)(),b=L=>L.map(a=>{var Y,V,X;return{...a,label:a==null||(Y=a.meta)===null||Y===void 0?void 0:Y.title,key:a.path,title:a==null||(V=a.meta)===null||V===void 0?void 0:V.title,icon:(0,e.jsx)(x.Z,{}),children:(a==null||(X=a.children)===null||X===void 0?void 0:X.length)&&b(a?.children)}}).filter(a=>{var Y,V,X,me,ve,pe,xe;if((a==null||(Y=a.meta)===null||Y===void 0?void 0:Y.hideInMenu)===!0)return!1;if(d?.role==="admin"||!(a!=null&&(V=a.meta)!==null&&V!==void 0&&(X=V.auth)!==null&&X!==void 0&&(me=X.roles)!==null&&me!==void 0&&me.length)||a!=null&&(ve=a.meta)!==null&&ve!==void 0&&(pe=ve.auth)!==null&&pe!==void 0&&(xe=pe.roles)!==null&&xe!==void 0&&xe.includes(d?.role))return!0}),S=b(K.Z);let _=[];const J=(L=S)=>(L.forEach(a=>{if(a.path===o&&_.push(a.path),o.indexOf(a.path)>-1&&_.push(a.path),a!=null&&a.children)return J(a.children)}),_),[q,Q]=(0,h.useState)([]),he=L=>{if(L.includes("rc-menu-more"))return Q(L);const a=L[L.length-1];if(a!=null&&a.includes(L[0]))return Q(L);Q([a])},B=({key:L})=>v(L);return(0,h.useImperativeHandle)(r,()=>({setOpenKeys:Q,defaultOpenKeys:J}),[o]),(0,e.jsx)(n,{ref:r,theme:"dark",selectedKeys:[o],mode:"inline",openKeys:q,items:S,onOpenChange:he,onClick:B,...s})})}class C extends h.PureComponent{render(){return(0,e.jsx)(M.Z,{...this.props})}}const D=A(C);var z=t(68298),i=t(12599),y=t(797);const U=n=>{const{pageConfig:s}=(0,c.v9)(o=>o.topHeader),{layoutItems:r}=s??{},v=(0,l.TH)(),u=(0,i.fp)(y.H,v).filter(o=>o.pathname!=="/"&&o.pathname!=="/home");return(0,e.jsx)(j.Z,{auth:r?.includes("breadcrumb"),render:()=>(0,e.jsxs)(z.Z,{separator:">",children:[(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("span",{children:"\u9996\u9875"})}),u.map(o=>{var b,S;return(0,e.jsx)(z.Z.Item,{children:(0,e.jsx)("span",{children:o==null||(b=o.route)===null||b===void 0||(S=b.meta)===null||S===void 0?void 0:S.title})},o?.pathname)})]}),fallback:(0,e.jsx)("span",{})})};var F=t(53807),R=t(99160),O=t(24616),T=t(65460),$=t(71230),k=t(15746),ee=t(27061),ae=t(63434),te=t(88369),G=t(48754);const be=[{value:"tabs",label:"\u6807\u7B7E\u9875"},{value:"breadcrumb",label:"\u9762\u5305\u5C51"},{value:"logo",label:"Logo"},{value:"pageFooter",label:"\u9875\u811A"}],Le=n=>{const{changeLayout:s,pageConfig:r={},changeLayoutMode:v}=n,{layoutItems:d,layoutMode:u}=r;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.Z,{children:"\u754C\u9762\u663E\u793A"}),(0,e.jsxs)(ee.A,{layout:"horizontal",submitter:{render:()=>null},children:[(0,e.jsx)(ae.Z.Group,{label:"",name:"layoutItems",initialValue:d,fieldProps:{onChange:o=>s(o)},options:be}),(0,e.jsx)(te.Z.Group,{onChange:o=>v(o),value:u,size:"small",style:{width:"100%"},children:(0,e.jsxs)($.Z,{gutter:20,children:[(0,e.jsx)(k.Z,{span:12,children:(0,e.jsx)(te.Z,{title:"\u5E03\u5C40",description:"\u7ECF\u5178\u5E03\u5C40",value:"classicLayout",style:{width:170,height:80}})}),(0,e.jsx)(k.Z,{span:12,children:(0,e.jsx)(te.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u6A2A\u5411\u5E03\u5C40",value:"landscapeLayout"})}),(0,e.jsx)(k.Z,{span:11,children:(0,e.jsx)(te.Z,{title:"\u5E03\u5C40",style:{width:170,height:80},description:"\u7EB5\u5411\u5E03\u5C40",value:"portraitLayout"})})]})})]})]})},Ee=(0,c.$j)(n=>n.topHeader,{changeLayout:G.c_,changeLayoutMode:G.fu})(Le);var se=t(66847),ne=t(19650),ye=t(72985),ge=t(79508),fe=t(28508),le=t(71473),Ze=t(93565);const Pe=(0,h.memo)(n=>{const{changeColorPrimary:s,changeTheme:r}=n,{token:{colorPrimary:v},themeMode:{isGrey:d,isColorWeakness:u}}=(0,c.v9)(o=>o.theme,c.wU);return(0,h.useLayoutEffect)(()=>{r({isGrey:d,isColorWeakness:u})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.Z,{children:"\u4E3B\u9898\u8BBE\u7F6E"}),(0,e.jsxs)(se.Z,{initialValues:{colorPrimary:v,isGrey:d,isColorWeakness:u},children:[(0,e.jsxs)(ne.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u7070\u8272\u6A21\u5F0F"}),(0,e.jsx)(se.Z.Item,{name:"isGrey",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(ge.Z,{}),unCheckedChildren:(0,e.jsx)(fe.Z,{}),checked:d===!0,onChange:o=>r({isGrey:o,isColorWeakness:!1})})})]}),(0,e.jsxs)(ne.Z,{style:{justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)("div",{children:"\u8272\u5F31\u6A21\u5F0F"}),(0,e.jsx)(se.Z.Item,{name:"isColorWeakness",valuePropName:"checked",children:(0,e.jsx)(ye.Z,{checkedChildren:(0,e.jsx)(ge.Z,{}),unCheckedChildren:(0,e.jsx)(fe.Z,{}),onChange:o=>r({isColorWeakness:o,isGrey:!1})})})]}),(0,e.jsx)(se.Z.Item,{valuePropName:"color",name:"colorPrimary",label:"\u4E3B\u9898\u8272",children:(0,e.jsx)(Ze.A8,{onChange:({hex:o})=>s(o)})})]})]})}),Oe=(0,c.$j)(null,{changeTheme:le.Lr,changeColorPrimary:le.gp})(Pe),Te=n=>{const[s,r]=(0,h.useState)(!1),v=()=>{r(!1)};function d(){r(!0)}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(F.Z,{style:{display:"flex",alignItems:"center"},placement:"bottom",title:"\u7CFB\u7EDF\u8BBE\u7F6E",children:(0,e.jsx)(O.Z,{onClick:d})}),(0,e.jsxs)(R.Z,{title:"\u7CFB\u7EDF\u8BBE\u7F6E",placement:"right",onClose:v,open:s,width:410,children:[(0,e.jsx)(Ee,{}),(0,e.jsx)(Oe,{})]})]})};var Ie=t(21444),Me=t(38296),oe=t(47489);const He=()=>{const[n,s]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{oe.Z.on("change",()=>{s(oe.Z.isFullscreen)})},[]),(0,e.jsx)(j.Z,{auth:oe.Z.isEnabled,render:r=>(0,e.jsx)(F.Z,{onClick:v=>oe.Z.toggle(),title:n?"\u53D6\u6D88\u5168\u5C4F":"\u5168\u5C4F",children:n?(0,e.jsx)(Ie.Z,{}):(0,e.jsx)(Me.Z,{})})})},Ae=h.memo(He);var De=t(27032),re=t(13013),Be=t(47759),Ke=t(68855),je=t(18655);const{confirm:Ue}=De.Z,Re=n=>{const{userInfo:s,token:r}=(0,c.v9)(o=>o.global),{logout:v}=n,d=[{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function u({key:o}){o==="logout"&&Ue({title:"\u6E29\u99A8\u63D0\u793A",icon:(0,e.jsx)(Ke.Z,{}),content:"\u662F\u5426\u786E\u8BA4\u9000\u51FA",onOk(){v(r)},onCancel(){}})}return(0,e.jsx)(re.Z,{menu:{items:d,onClick:u},children:(0,e.jsx)(Be.C,{style:{cursor:"pointer"},size:28,src:(0,e.jsx)("img",{src:s?.avatar,alt:"avatar"})})})},Se=(0,c.$j)(null,{logout:je.kS})(Re),We=[{label:"\u9ED8\u8BA4",key:"middle",disabled:!1},{label:"\u5C0F\u578B",key:"small",disabled:!1},{label:"\u5927\u578B",key:"large",disabled:!1}],Fe=(0,h.memo)(n=>{const{componentSize:s,changeComponentSize:r}=n,v=We.map(d=>(d.disabled=d.key===s,d));return(0,e.jsx)(re.Z,{trigger:["click"],menu:{items:v,onClick:({key:d})=>{r(d)}},children:(0,e.jsx)(F.Z,{placement:"left",title:"\u7EC4\u4EF6\u5C3A\u5BF8",children:(0,e.jsx)(x.Z,{})})})}),$e=(0,c.$j)(n=>n.theme,{changeComponentSize:le.It})(Fe),ce=n=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},align:"center",children:[(0,e.jsx)($e,{}),(0,e.jsx)(Ae,{}),(0,e.jsx)(Te,{}),(0,e.jsx)(Se,{})]});var Ne=t(72326),ze=t(84595),gt=t(88674),ft=t(17727),ke=t(34804),Ge=t(71577);const Ye=[{label:"\u5173\u95ED\u5F53\u524D",key:"current"},{label:"\u5173\u95ED\u5176\u4ED6",key:"other"},{label:"\u5173\u95ED\u6240\u6709",key:"all"}],Ve=n=>{const{pathname:s}=(0,l.TH)(),r=(0,l.s0)(),{deleteCurrentTab:v,deleteAllTab:d,deleteOtherTab:u}=n,o=({key:b})=>{if(b==="current")return v(s).then(({key:S})=>r(S));if(b==="other")return u(s);if(b==="all")return d(s).finally(r("/home"))};return(0,e.jsx)(ne.Z,{align:"center",children:(0,e.jsx)(re.Z,{menu:{items:Ye,onClick:o},children:(0,e.jsx)(Ge.ZP,{children:(0,e.jsxs)(ne.Z,{children:["\u66F4\u591A",(0,e.jsx)(ke.Z,{})]})})})})},Xe=(0,c.$j)(null,{deleteCurrentTab:G._I,deleteAllTab:G.Ud,deleteOtherTab:G.ND})(Ve),Je=n=>{const{addTabs:s,deleteCurrentTab:r,style:v}=n,d=(0,ze.nC)(),u=(0,l.s0)(),o=(0,l.TH)(),b=(0,c.I0)();let{tabList:S,activeKey:_}=(0,c.v9)(B=>B.topHeader,c.wU);const{pageConfig:J}=(0,c.v9)(B=>B.topHeader),{layoutItems:q}=J??{};(0,h.useEffect)(()=>{const{pathname:B}=o;s(d,B)},[o.pathname]);const Q=(B,L)=>{r(B).then(({key:a})=>u(a))},he=B=>u(B);return(0,e.jsx)(j.Z,{auth:q?.includes("tabs"),render:()=>(0,e.jsx)(Ne.Z,{type:"editable-card",hideAdd:!0,size:"small",onChange:()=>{},animated:!0,onEdit:Q,onTabClick:he,activeKey:_,items:S,tabBarExtraContent:(0,e.jsx)(Xe,{}),style:v})})},ie=(0,c.$j)(null,{addTabs:G.BH,deleteCurrentTab:G._I})(Je);var Qe=t(1351),we=t(76629);const _e=n=>{const{collapsed:s,updateCollapse:r}=n;return(0,e.jsx)("span",{style:{cursor:"pointer",transition:"color 0.3s"},onClick:()=>r(!s),children:s?(0,e.jsx)(Qe.Z,{}):(0,e.jsx)(we.Z,{})})},Ce=(0,c.$j)(n=>n.global,{updateCollapse:je.oR})(_e),qe=g.ZP.div`

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



`,et=n=>(0,e.jsxs)(qe,{children:[(0,e.jsxs)("div",{className:"classic-header",children:[(0,e.jsx)(Ce,{mode:"inline"}),(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsx)(U,{}),(0,e.jsx)(ce,{})]})]}),(0,e.jsx)(T.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ie,{})]}),{Content:tt}=p.Z,de=()=>(0,e.jsx)(tt,{className:"layout-content",children:(0,e.jsx)("section",{className:"layout-content-section",style:{padding:"6px 6px",height:"100%"},children:(0,e.jsx)(l.j3,{})})}),{Footer:st}=p.Z,ue=()=>{const{pageConfig:n}=(0,c.v9)(r=>r.topHeader),{layoutItems:s}=n??{};return(0,e.jsx)(j.Z,{auth:s?.includes("pageFooter"),render:()=>(0,e.jsx)(st,{className:"layout-footer",children:"Dengff Admin Template"})})},{Header:nt,Sider:ot}=p.Z,at=()=>{const{collapsed:n}=(0,c.v9)(u=>u.global,c.wU),{pageConfig:s}=(0,c.v9)(u=>u.topHeader),{layoutMode:r}=s??{},{pathname:v}=(0,l.TH)(),d=(0,h.useRef)(null);return(0,h.useEffect)(()=>{var u,o;const b=(u=d.current)===null||u===void 0?void 0:u.defaultOpenKeys();(o=d.current)===null||o===void 0||o.setOpenKeys(b)},[v,r]),(0,e.jsx)(f,{children:(0,e.jsxs)(p.Z,{style:{height:"100%"},children:[(0,e.jsxs)(ot,{trigger:null,collapsible:!0,collapsed:n,children:[(0,e.jsx)(Z,{mode:"classicLayout"}),(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(D,{ref:d})})]}),(0,e.jsxs)(p.Z,{className:"site-layout",children:[(0,e.jsx)(nt,{className:"layout-header",style:{padding:"0 14px"},children:(0,e.jsx)(et,{})}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})]})})},lt=g.ZP.div`
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

`,rt=()=>{const n=(0,h.useRef)(null);return(0,h.useEffect)(()=>{var s;(s=n.current)===null||s===void 0||s.setOpenKeys([])},[]),(0,e.jsx)(lt,{children:(0,e.jsxs)("div",{className:"horizontal-top-header",children:[(0,e.jsxs)("div",{className:"top-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[(0,e.jsx)(Z,{mode:"horizontal"}),(0,e.jsx)(D,{ref:n,mode:"horizontal",style:{height:"50px",lineHeight:"50px",width:"calc(100% - 200px)"}})]}),(0,e.jsx)("div",{className:"top-header-right",children:(0,e.jsx)(ce,{})})]}),(0,e.jsxs)("div",{style:{padding:"0 8px"},children:[(0,e.jsx)(T.Z,{style:{margin:"4px 0"}}),(0,e.jsx)(ie,{})]})]})})},{Header:ct}=p.Z,it=()=>(0,e.jsx)(f,{children:(0,e.jsx)(p.Z,{style:{height:"100%"},children:(0,e.jsxs)(p.Z,{className:"site-layout",children:[(0,e.jsx)(ct,{className:"layout-header",style:{padding:"0"},children:(0,e.jsx)(rt,{})}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})})}),dt=g.ZP.div`

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




`,ut=n=>(0,e.jsx)(dt,{children:(0,e.jsx)("div",{className:"classic-header",children:(0,e.jsxs)("div",{className:"classic-header-content",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(Z,{mode:"horizontal"}),(0,e.jsx)("div",{style:{padding:"0 14px"},children:(0,e.jsx)(Ce,{mode:"inline"})}),(0,e.jsx)(U,{})]}),(0,e.jsx)("div",{style:{paddingRight:"14px"},children:(0,e.jsx)(ce,{})})]})})}),{Header:ht,Sider:mt}=p.Z,vt=()=>{const{collapsed:n}=(0,c.v9)(u=>u.global,c.wU),{pageConfig:s}=(0,c.v9)(u=>u.topHeader),{layoutMode:r}=s??{},{pathname:v}=(0,l.TH)(),d=(0,h.useRef)(null);return(0,h.useEffect)(()=>{var u,o;const b=(u=d.current)===null||u===void 0?void 0:u.defaultOpenKeys();(o=d.current)===null||o===void 0||o.setOpenKeys(b)},[v,r]),(0,e.jsx)(f,{children:(0,e.jsxs)(p.Z,{style:{height:"100%"},children:[(0,e.jsx)(ht,{style:{padding:"0 0px",color:"#fff",height:"auto"},children:(0,e.jsx)(ut,{})}),(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(mt,{style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:n,children:(0,e.jsx)("div",{className:"scrollbar",children:(0,e.jsx)(D,{ref:d,theme:"light"})})}),(0,e.jsxs)(p.Z,{className:"site-layout",children:[(0,e.jsx)(ie,{style:{padding:"0px 14px",height:"38px",background:"#fff"}}),(0,e.jsx)(de,{}),(0,e.jsx)(ue,{})]})]})]})})},pt=()=>{const{pageConfig:n}=(0,c.v9)(r=>r.topHeader),{layoutMode:s}=n??{};return(0,e.jsxs)(e.Fragment,{children:[s==="classicLayout"&&(0,e.jsx)(at,{}),s==="landscapeLayout"&&(0,e.jsx)(it,{}),s==="portraitLayout"&&(0,e.jsx)(vt,{})]})}},18655:(w,I,t)=>{t.d(I,{bG:()=>m,kS:()=>E,oR:()=>Z,x4:()=>P});var h=t(88674),c=t.n(h),g=t(35060),f=t(75544),p=t(84595),j=t(48754),e=t(71473);const P=({username:l,password:x})=>K=>new Promise((A,C)=>{(0,g.yq)({username:l,password:x}).then(D=>{const{status:z,token:i}=D.data;z===0?(K(M(i)),(0,p.o4)(i),A(D)):C()})}),m=l=>x=>new Promise((K,A)=>{(0,g.dW)(l).then(C=>{const{userInfo:D}=C;x(H(D)),(0,p.ps)(D),K(C)})}),E=l=>x=>new Promise((K,A)=>{(0,g.uf)(l).then(C=>{C?.data.status===0&&(x(M(void 0)),x(N()),x((0,j.Yc)()),x((0,e.Tx)()),window.localStorage.clear(),K())}).catch(C=>A(C))}),Z=l=>({type:f._U,collapsed:l}),M=l=>({type:f.rw,token:l}),H=l=>({type:f.rG,userInfo:l}),N=()=>({type:f.IR})},71473:(w,I,t)=>{t.d(I,{It:()=>f,Lr:()=>c,Tx:()=>P,gp:()=>g});var h=t(14269);const c=m=>(E,Z)=>{const M=document.body;return E(p(m)),m.isGrey?M.setAttribute("style","filter: grayscale(1)"):m.isColorWeakness?M.setAttribute("style","filter: invert(80%)"):M.setAttribute("style","")},g=m=>E=>{E(j(m))},f=m=>E=>{E(e(m))},p=m=>({type:h.M$,themeMode:m}),j=m=>({type:h.K9,colorPrimary:m}),e=m=>({type:h.Hj,componentSize:m}),P=()=>({type:h.Fy})},48754:(w,I,t)=>{t.d(I,{BH:()=>P,ND:()=>E,Ud:()=>Z,Yc:()=>z,_I:()=>m,c_:()=>M,fu:()=>H});var h=t(66992),c=t.n(h),g=t(33948),f=t.n(g),p=t(88674),j=t.n(p),e=t(9994);const P=(i,y)=>(W,U)=>{const{topHeader:F}=U(),{tabList:R}=F;if(R.every($=>$.key!==y)){var O,T;const $={key:i.pathname,label:i==null||(O=i.route)===null||O===void 0||(T=O.meta)===null||T===void 0?void 0:T.title};W(K([...R,$]))}W(A(y))},m=i=>(y,W)=>new Promise((U,F)=>{if(i==="/home")return;const{topHeader:R}=W(),{tabList:O}=R;let T=null;const $=O.filter((ee,ae)=>{if(ee.key!==i)return!0;ee.key===i&&(T=ae)}),k=O[T-1];y(N($)),y(A(k?.key)),U(k)}),E=i=>(y,W)=>{const{topHeader:U}=W(),{tabList:F}=U,R=F.filter(O=>O.key===i||O.key==="/home");y(l(R))},Z=i=>(y,W)=>new Promise((U,F)=>{const{topHeader:R}=W(),{tabList:O}=R,T=O.filter($=>$.key==="/home");y(x(T)),U()}),M=i=>y=>{y(C(i))},H=i=>y=>{y(D(i))},N=i=>({type:e.Rr,tabList:i}),l=i=>({type:e.tY,tabList:i}),x=i=>({type:e.L6,tabList:i}),K=i=>({type:e.zJ,tabList:i}),A=i=>({type:e.GK,activeKey:i}),C=i=>({type:e.mf,layoutItems:i}),D=i=>({type:e.rW,layoutMode:i}),z=()=>({type:e.cy})}}]);
