"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[54],{35060:(C,v,t)=>{t.d(v,{yq:()=>L,uf:()=>s,dW:()=>y,WY:()=>g});var D=t(88674),T=t(52861);let c=null,u=0;const h=()=>{u++},E=()=>{u--,u===0&&c?.close()},g=(d=>{const a=T.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...d});return a.interceptors.request.use(function(o){const{loading:n=!0}=o;return n&&h(),o},function(o){return Promise.reject(o)}),a.interceptors.response.use(function(o){const{loading:n=!0,notify:p=!1}=o.config;n&&E();const{code:r,data:m,message:M,cache:P,timeout:e}=o.data,l={200:()=>o.data,401:()=>{},default:()=>Promise.reject(o.data)};return l[r]?l[r]():l.default()},function(o){const{loading:n=!0}=o.config;return n&&E(),o.response&&o.response.status,Promise.reject(o)}),a})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),L=d=>g.post("/login",{...d}),y=d=>g.post("/userInfo",{token:d}),s=d=>g.post("/logout",{token:d})},33572:(C,v,t)=>{t.r(v),t.d(v,{default:()=>o});var D=t(65460),T=t(66847),c=t(15286);const u=t.p+"img/loginBanner_2.b5dc7d3.jpg",h=c.ZP.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  & > .g-polygon-1, .g-polygon-2, .g-polygon-3 {
    position: absolute;
    opacity: .5;
    animation: colorChange 10.1s infinite;

  }

  @keyframes colorChange {
    100% {
      filter: hue-rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(150px);
    z-index: 1;
  }

  .g-polygon-1 {
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 714px;
    height: 390px;
    background: linear-gradient(#ffee55, #fdee99);
    clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
  }

  .g-polygon-2 {
    bottom: 0;
    left: 30%;
    transform: translate(-50%, 0);
    width: 1000px;
    height: 450px;
    background: linear-gradient(-36deg, #E950D1, #f980D9);
    clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
  }

  .g-polygon-3 {
    bottom: 0;
    left: 70%;
    transform: translate(-50%, 0);
    width: 800px;
    height: 450px;
    background: rgba(87, 80, 233);
    clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
  }


  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .ant-pro-form-login-container {
    overflow-y: hidden;
    position: relative;
    flex: none;
    box-shadow: 1px 1px 6px rgba(60, 116, 220, 0.98);
    height: auto;
    border-radius: 8px;
  }

`;var E=t(86706),i=t(18655),O=t(56401),g=t(5966),L=t(89366),y=t(2603),s=t(85893);const d=n=>{const{login:p,getUserInfo:r}=n,m=M=>{p(M).then(P=>{const{token:e}=P.data;r(e)})};return(0,s.jsxs)(h,{children:[(0,s.jsx)("div",{className:"login",children:(0,s.jsx)(O.U,{onFinish:m,logo:"https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",title:"Admin",subTitle:" ",initialValues:{username:"admin",password:"123456"},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(L.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,s.jsx)(g.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(y.Z,{className:"prefixIcon"})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,s.jsx)(D.Z,{children:"Tip"}),(0,s.jsxs)(T.Z.Item,{style:{textAlign:"center"},children:[(0,s.jsx)("div",{children:"\u8D26\u53F7 : admin \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : editor \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : guest \u5BC6\u7801 : \u968F\u4FBF\u586B"})]})]})})}),(0,s.jsx)("div",{className:"g-polygon-1"}),(0,s.jsx)("div",{className:"g-polygon-2"}),(0,s.jsx)("div",{className:"g-polygon-3"})]})},a=n=>({global:n.global}),o=(0,E.$j)(n=>n.global,{login:i.x4,getUserInfo:i.bG})(d)},18655:(C,v,t)=>{t.d(v,{bG:()=>O,kS:()=>g,oR:()=>L,x4:()=>i});var D=t(88674),T=t.n(D),c=t(35060),u=t(75544),h=t(84595),E=t(48754);const i=({username:a,password:o})=>n=>new Promise((p,r)=>{(0,c.yq)({username:a,password:o}).then(m=>{const{status:M,token:P}=m.data;M===0?(n(y(P)),(0,h.o4)(P),p(m)):r()})}),O=a=>o=>new Promise((n,p)=>{(0,c.dW)(a).then(r=>{const{userInfo:m}=r;o(s(m)),(0,h.ps)(m),n(r)})}),g=a=>o=>new Promise((n,p)=>{(0,c.uf)(a).then(r=>{r?.data.status===0&&(o(y(void 0)),o(d()),o((0,E.Yc)()),window.localStorage.clear(),n())}).catch(r=>p(r))}),L=a=>({type:u._U,collapsed:a}),y=a=>({type:u.rw,token:a}),s=a=>({type:u.rG,userInfo:a}),d=()=>({type:u.IR})},48754:(C,v,t)=>{t.d(v,{BH:()=>O,ND:()=>L,Ud:()=>y,Yc:()=>P,_I:()=>g,c_:()=>s,fu:()=>d});var D=t(66992),T=t.n(D),c=t(33948),u=t.n(c),h=t(88674),E=t.n(h),i=t(9994);const O=(e,l)=>(x,b)=>{const{topHeader:B}=b(),{tabList:_}=B;if(_.every(I=>I.key!==l)){var f,j;const I={key:e.pathname,label:e==null||(f=e.route)===null||f===void 0||(j=f.meta)===null||j===void 0?void 0:j.title};x(p([..._,I]))}x(r(l))},g=e=>(l,x)=>new Promise((b,B)=>{if(e==="/home")return;const{topHeader:_}=x(),{tabList:f}=_;let j=null;const I=f.filter((A,R)=>{if(A.key!==e)return!0;A.key===e&&(j=R)}),U=f[j-1];l(a(I)),l(r(U?.key)),b(U)}),L=e=>(l,x)=>{const{topHeader:b}=x(),{tabList:B}=b,_=B.filter(f=>f.key===e||f.key==="/home");l(o(_))},y=e=>(l,x)=>new Promise((b,B)=>{const{topHeader:_}=x(),{tabList:f}=_,j=f.filter(I=>I.key==="/home");l(n(j)),b()}),s=e=>l=>{l(m(e))},d=e=>l=>{l(M(e))},a=e=>({type:i.Rr,tabList:e}),o=e=>({type:i.tY,tabList:e}),n=e=>({type:i.L6,tabList:e}),p=e=>({type:i.zJ,tabList:e}),r=e=>({type:i.GK,activeKey:e}),m=e=>({type:i.mf,layoutItems:e}),M=e=>({type:i.rW,layoutMode:e}),P=()=>({type:i.cy})}}]);
