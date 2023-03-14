"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[284],{35060:(C,_,t)=>{t.d(_,{yq:()=>m,uf:()=>s,dW:()=>L,WY:()=>n});var g=t(88674),M=t(52861);let u=null,d=0;const v=()=>{d++},j=()=>{d--,d===0&&u?.close()},n=(f=>{const P=M.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...f});return P.interceptors.request.use(function(o){const{loading:a=!0}=o;return a&&v(),o},function(o){return Promise.reject(o)}),P.interceptors.response.use(function(o){const{loading:a=!0,notify:y=!1}=o.config;a&&j();const{code:c,data:l,message:x,cache:D,timeout:e}=o.data,r={200:()=>o.data,401:()=>{},default:()=>Promise.reject(o.data)};return r[c]?r[c]():r.default()},function(o){const{loading:a=!0}=o.config;return a&&j(),o.response&&o.response.status,Promise.reject(o)}),P})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),m=f=>n.post("/login",{...f}),L=f=>n.post("/userInfo",{token:f}),s=f=>n.post("/logout",{token:f})},76284:(C,_,t)=>{t.r(_),t.d(_,{default:()=>y});var g=t(65460),M=t(66847),u=t(15286);const d="https://cdn.pixabay.com/photo/2016/02/15/11/40/background-1201008__480.jpg?imageView&blur=40x20",v=u.ZP.div`
  .login {
    height: 100vh;
    background-image: url(${d});
    display: flex;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ant-pro-form-login-container {
    overflow-y: hidden;
    position: relative;
    flex: none;
    box-shadow: 2px 3px 8px #d9c3bf;
    height: auto;
    border-radius: 8px;
  }

  .ant-pro-form-login-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 0;
    background-size: cover;
  }

  .ant-pro-form-login-logo  {
    z-index: 1;
  }

  .ant-divider-inner-text {
    z-index: 1;
  }

`;var j=t(86706),i=t(18655),E=t(56401),n=t(5966),m=t(89366),L=t(2603),s=t(85893);const f={color:"rgba(0, 0, 0, 0.2)",fontSize:"18px",verticalAlign:"middle",cursor:"pointer"},P="https://cdn.pixabay.com/photo/2016/02/15/11/41/background-1201010__480.jpg",o=c=>{const{login:l,getUserInfo:x}=c,D=e=>{l(e).then(r=>{const{token:h}=r;x(h)})};return(0,s.jsx)(v,{loginBackground:P,children:(0,s.jsx)("div",{className:"login",children:(0,s.jsx)(E.U,{onFinish:D,logo:"https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",title:"Admin",subTitle:"--",initialValues:{username:"admin",password:"123456"},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(m.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,s.jsx)(n.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(L.Z,{className:"prefixIcon"})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,s.jsx)(g.Z,{children:"Tip"}),(0,s.jsxs)(M.Z.Item,{style:{textAlign:"center"},children:[(0,s.jsx)("div",{children:"\u8D26\u53F7 : admin \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : editor \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : guest \u5BC6\u7801 : \u968F\u4FBF\u586B"})]})]})})})})},a=c=>({global:c.global}),y=(0,j.$j)(c=>c.global,{login:i.x4,getUserInfo:i.bG})(o)},18655:(C,_,t)=>{t.d(_,{bG:()=>n,kS:()=>m,oR:()=>L,x4:()=>E});var g=t(88674),M=t.n(g),u=t(35060),d=t(75544),v=t(84595),j=t(48754),i=t(71473);const E=({username:o,password:a})=>y=>new Promise((c,l)=>{(0,u.yq)({username:o,password:a}).then(x=>{const{status:D,token:e}=x.data;D===0?(y(s(e)),(0,v.o4)(e),c(x)):l()})}),n=o=>a=>new Promise((y,c)=>{(0,u.dW)(o).then(l=>{const{userInfo:x}=l;a(f(x)),(0,v.ps)(x),y(l)})}),m=o=>a=>new Promise((y,c)=>{(0,u.uf)(o).then(l=>{l?.data.status===0&&(a(s(void 0)),a(P()),a((0,j.Yc)()),a((0,i.Tx)()),window.localStorage.clear(),y())}).catch(l=>c(l))}),L=o=>({type:d._U,collapsed:o}),s=o=>({type:d.rw,token:o}),f=o=>({type:d.rG,userInfo:o}),P=()=>({type:d.IR})},71473:(C,_,t)=>{t.d(_,{It:()=>d,Lr:()=>M,Tx:()=>E,gp:()=>u});var g=t(14269);const M=n=>(m,L)=>{const s=document.body;return m(v(n)),n.isGrey?s.setAttribute("style","filter: grayscale(1)"):n.isColorWeakness?s.setAttribute("style","filter: invert(80%)"):s.setAttribute("style","")},u=n=>m=>{m(j(n))},d=n=>m=>{m(i(n))},v=n=>({type:g.M$,themeMode:n}),j=n=>({type:g.K9,colorPrimary:n}),i=n=>({type:g.Hj,componentSize:n}),E=()=>({type:g.Fy})},48754:(C,_,t)=>{t.d(_,{BH:()=>E,ND:()=>m,Ud:()=>L,Yc:()=>D,_I:()=>n,c_:()=>s,fu:()=>f});var g=t(66992),M=t.n(g),u=t(33948),d=t.n(u),v=t(88674),j=t.n(v),i=t(9994);const E=(e,r)=>(h,O)=>{const{topHeader:B}=O(),{tabList:b}=B;if(b.every(T=>T.key!==r)){var p,I;const T={key:e.pathname,label:e==null||(p=e.route)===null||p===void 0||(I=p.meta)===null||I===void 0?void 0:I.title};h(y([...b,T]))}h(c(r))},n=e=>(r,h)=>new Promise((O,B)=>{if(e==="/home")return;const{topHeader:b}=h(),{tabList:p}=b;let I=null;const T=p.filter((A,W)=>{if(A.key!==e)return!0;A.key===e&&(I=W)}),U=p[I-1];r(P(T)),r(c(U?.key)),O(U)}),m=e=>(r,h)=>{const{topHeader:O}=h(),{tabList:B}=O,b=B.filter(p=>p.key===e||p.key==="/home");r(o(b))},L=e=>(r,h)=>new Promise((O,B)=>{const{topHeader:b}=h(),{tabList:p}=b,I=p.filter(T=>T.key==="/home");r(a(I)),O()}),s=e=>r=>{r(l(e))},f=e=>r=>{r(x(e))},P=e=>({type:i.Rr,tabList:e}),o=e=>({type:i.tY,tabList:e}),a=e=>({type:i.L6,tabList:e}),y=e=>({type:i.zJ,tabList:e}),c=e=>({type:i.GK,activeKey:e}),l=e=>({type:i.mf,layoutItems:e}),x=e=>({type:i.rW,layoutMode:e}),D=()=>({type:i.cy})}}]);
