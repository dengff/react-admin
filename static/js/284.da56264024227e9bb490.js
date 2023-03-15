"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[284],{35060:(C,v,t)=>{t.d(v,{yq:()=>m,uf:()=>s,dW:()=>E,WY:()=>n});var _=t(88674),M=t(52861);let u=null,l=0;const y=()=>{l++},x=()=>{l--,l===0&&u?.close()},n=(f=>{const j=M.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...f});return j.interceptors.request.use(function(o){const{loading:a=!0}=o;return a&&y(),o},function(o){return Promise.reject(o)}),j.interceptors.response.use(function(o){const{loading:a=!0,notify:d=!1}=o.config;a&&x();const{code:g,data:c,message:h,cache:D,timeout:e}=o.data,r={200:()=>o.data,401:()=>{},default:()=>Promise.reject(o.data)};return r[g]?r[g]():r.default()},function(o){const{loading:a=!0}=o.config;return a&&x(),o.response&&o.response.status,Promise.reject(o)}),j})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),m=f=>n.post("/login",{...f}),E=f=>n.post("/userInfo",{token:f}),s=f=>n.post("/logout",{token:f})},76284:(C,v,t)=>{t.r(v),t.d(v,{default:()=>a});var _=t(65460),M=t(66847),u=t(15286);const l="https://cdn.pixabay.com/photo/2016/02/15/11/40/background-1201008__480.jpg?imageView&blur=40x20",y=u.ZP.div`
  .login {
    height: 100vh;
    background-image: url(${l});
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

`;var x=t(86706),i=t(18655),P=t(56401),n=t(5966),m=t(89366),E=t(2603),s=t(85893);const f="https://cdn.pixabay.com/photo/2016/02/15/11/41/background-1201010__480.jpg",j=d=>{const{login:g,getUserInfo:c}=d,h=D=>{g(D).then(e=>{const{token:r}=e.data;c(r)})};return(0,s.jsx)(y,{loginBackground:f,children:(0,s.jsx)("div",{className:"login",children:(0,s.jsx)(P.U,{onFinish:h,logo:"https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",title:"Admin",subTitle:"--",initialValues:{username:"admin",password:"123456"},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(m.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,s.jsx)(n.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(E.Z,{className:"prefixIcon"})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,s.jsx)(_.Z,{children:"Tip"}),(0,s.jsxs)(M.Z.Item,{style:{textAlign:"center"},children:[(0,s.jsx)("div",{children:"\u8D26\u53F7 : admin \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : editor \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : guest \u5BC6\u7801 : \u968F\u4FBF\u586B"})]})]})})})})},o=d=>({global:d.global}),a=(0,x.$j)(d=>d.global,{login:i.x4,getUserInfo:i.bG})(j)},18655:(C,v,t)=>{t.d(v,{bG:()=>n,kS:()=>m,oR:()=>E,x4:()=>P});var _=t(88674),M=t.n(_),u=t(35060),l=t(75544),y=t(84595),x=t(48754),i=t(71473);const P=({username:o,password:a})=>d=>new Promise((g,c)=>{(0,u.yq)({username:o,password:a}).then(h=>{const{status:D,token:e}=h.data;D===0?(d(s(e)),(0,y.o4)(e),g(h)):c()})}),n=o=>a=>new Promise((d,g)=>{(0,u.dW)(o).then(c=>{const{userInfo:h}=c;a(f(h)),(0,y.ps)(h),d(c)})}),m=o=>a=>new Promise((d,g)=>{(0,u.uf)(o).then(c=>{c?.data.status===0&&(a(s(void 0)),a(j()),a((0,x.Yc)()),a((0,i.Tx)()),window.localStorage.clear(),d())}).catch(c=>g(c))}),E=o=>({type:l._U,collapsed:o}),s=o=>({type:l.rw,token:o}),f=o=>({type:l.rG,userInfo:o}),j=()=>({type:l.IR})},71473:(C,v,t)=>{t.d(v,{It:()=>l,Lr:()=>M,Tx:()=>P,gp:()=>u});var _=t(14269);const M=n=>(m,E)=>{const s=document.body;return m(y(n)),n.isGrey?s.setAttribute("style","filter: grayscale(1)"):n.isColorWeakness?s.setAttribute("style","filter: invert(80%)"):s.setAttribute("style","")},u=n=>m=>{m(x(n))},l=n=>m=>{m(i(n))},y=n=>({type:_.M$,themeMode:n}),x=n=>({type:_.K9,colorPrimary:n}),i=n=>({type:_.Hj,componentSize:n}),P=()=>({type:_.Fy})},48754:(C,v,t)=>{t.d(v,{BH:()=>P,ND:()=>m,Ud:()=>E,Yc:()=>D,_I:()=>n,c_:()=>s,fu:()=>f});var _=t(66992),M=t.n(_),u=t(33948),l=t.n(u),y=t(88674),x=t.n(y),i=t(9994);const P=(e,r)=>(L,O)=>{const{topHeader:B}=O(),{tabList:I}=B;if(I.every(T=>T.key!==r)){var p,b;const T={key:e.pathname,label:e==null||(p=e.route)===null||p===void 0||(b=p.meta)===null||b===void 0?void 0:b.title};L(d([...I,T]))}L(g(r))},n=e=>(r,L)=>new Promise((O,B)=>{if(e==="/home")return;const{topHeader:I}=L(),{tabList:p}=I;let b=null;const T=p.filter((A,W)=>{if(A.key!==e)return!0;A.key===e&&(b=W)}),U=p[b-1];r(j(T)),r(g(U?.key)),O(U)}),m=e=>(r,L)=>{const{topHeader:O}=L(),{tabList:B}=O,I=B.filter(p=>p.key===e||p.key==="/home");r(o(I))},E=e=>(r,L)=>new Promise((O,B)=>{const{topHeader:I}=L(),{tabList:p}=I,b=p.filter(T=>T.key==="/home");r(a(b)),O()}),s=e=>r=>{r(c(e))},f=e=>r=>{r(h(e))},j=e=>({type:i.Rr,tabList:e}),o=e=>({type:i.tY,tabList:e}),a=e=>({type:i.L6,tabList:e}),d=e=>({type:i.zJ,tabList:e}),g=e=>({type:i.GK,activeKey:e}),c=e=>({type:i.mf,layoutItems:e}),h=e=>({type:i.rW,layoutMode:e}),D=()=>({type:i.cy})}}]);
