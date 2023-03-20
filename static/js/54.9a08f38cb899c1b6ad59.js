"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[54],{35060:(C,p,e)=>{e.d(p,{yq:()=>L,uf:()=>s,dW:()=>x,WY:()=>m});var D=e(88674),T=e(52861);let u=null,c=0;const _=()=>{c++},E=()=>{c--,c===0&&u?.close()},m=(d=>{const a=T.Z.create({baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0,...d});return a.interceptors.request.use(function(o){const{loading:n=!0}=o;return n&&_(),o},function(o){return Promise.reject(o)}),a.interceptors.response.use(function(o){const{loading:n=!0,notify:v=!1}=o.config;n&&E();const{code:r,data:g,message:b,cache:P,timeout:t}=o.data,i={200:()=>o.data,401:()=>{},default:()=>Promise.reject(o.data)};return i[r]?i[r]():i.default()},function(o){const{loading:n=!0}=o.config;return n&&E(),o.response&&o.response.status,Promise.reject(o)}),a})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),L=d=>m.post("/login",{...d}),x=d=>m.post("/userInfo",{token:d}),s=d=>m.post("/logout",{token:d})},33572:(C,p,e)=>{e.r(p),e.d(p,{default:()=>o});var D=e(65460),T=e(66847),u=e(15286);const c=e.p+"img/loginBanner_2.b5dc7d3.jpg",_=u.ZP.div`
  .login {
    height: 100vh;
    background-image: url(${c});
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
    box-shadow: 2px 3px 8px rgba(60, 116, 220, 0.98);
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

  .ant-pro-form-login-logo {
    z-index: 1;
  }

  .ant-divider-inner-text {
    z-index: 1;
  }

`;var E=e(86706),l=e(18655),M=e(56401),m=e(5966),L=e(89366),x=e(2603),s=e(85893);const d=n=>{const{login:v,getUserInfo:r}=n,g=b=>{v(b).then(P=>{const{token:t}=P.data;r(t)})};return(0,s.jsx)(_,{children:(0,s.jsx)("div",{className:"login",children:(0,s.jsx)(M.U,{onFinish:g,logo:"https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",title:"Admin",subTitle:"--",initialValues:{username:"admin",password:"123456"},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(L.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,s.jsx)(m.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(x.Z,{className:"prefixIcon"})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,s.jsx)(D.Z,{children:"Tip"}),(0,s.jsxs)(T.Z.Item,{style:{textAlign:"center"},children:[(0,s.jsx)("div",{children:"\u8D26\u53F7 : admin \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : editor \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,s.jsx)("div",{children:"\u8D26\u53F7 : guest \u5BC6\u7801 : \u968F\u4FBF\u586B"})]})]})})})})},a=n=>({global:n.global}),o=(0,E.$j)(n=>n.global,{login:l.x4,getUserInfo:l.bG})(d)},18655:(C,p,e)=>{e.d(p,{bG:()=>M,kS:()=>m,oR:()=>L,x4:()=>l});var D=e(88674),T=e.n(D),u=e(35060),c=e(75544),_=e(84595),E=e(48754);const l=({username:a,password:o})=>n=>new Promise((v,r)=>{(0,u.yq)({username:a,password:o}).then(g=>{const{status:b,token:P}=g.data;b===0?(n(x(P)),(0,_.o4)(P),v(g)):r()})}),M=a=>o=>new Promise((n,v)=>{(0,u.dW)(a).then(r=>{const{userInfo:g}=r;o(s(g)),(0,_.ps)(g),n(r)})}),m=a=>o=>new Promise((n,v)=>{(0,u.uf)(a).then(r=>{r?.data.status===0&&(o(x(void 0)),o(d()),o((0,E.Yc)()),window.localStorage.clear(),n())}).catch(r=>v(r))}),L=a=>({type:c._U,collapsed:a}),x=a=>({type:c.rw,token:a}),s=a=>({type:c.rG,userInfo:a}),d=()=>({type:c.IR})},48754:(C,p,e)=>{e.d(p,{BH:()=>M,ND:()=>L,Ud:()=>x,Yc:()=>P,_I:()=>m,c_:()=>s,fu:()=>d});var D=e(66992),T=e.n(D),u=e(33948),c=e.n(u),_=e(88674),E=e.n(_),l=e(9994);const M=(t,i)=>(j,I)=>{const{topHeader:B}=I(),{tabList:h}=B;if(h.every(O=>O.key!==i)){var f,y;const O={key:t.pathname,label:t==null||(f=t.route)===null||f===void 0||(y=f.meta)===null||y===void 0?void 0:y.title};j(v([...h,O]))}j(r(i))},m=t=>(i,j)=>new Promise((I,B)=>{if(t==="/home")return;const{topHeader:h}=j(),{tabList:f}=h;let y=null;const O=f.filter((A,R)=>{if(A.key!==t)return!0;A.key===t&&(y=R)}),U=f[y-1];i(a(O)),i(r(U?.key)),I(U)}),L=t=>(i,j)=>{const{topHeader:I}=j(),{tabList:B}=I,h=B.filter(f=>f.key===t||f.key==="/home");i(o(h))},x=t=>(i,j)=>new Promise((I,B)=>{const{topHeader:h}=j(),{tabList:f}=h,y=f.filter(O=>O.key==="/home");i(n(y)),I()}),s=t=>i=>{i(g(t))},d=t=>i=>{i(b(t))},a=t=>({type:l.Rr,tabList:t}),o=t=>({type:l.tY,tabList:t}),n=t=>({type:l.L6,tabList:t}),v=t=>({type:l.zJ,tabList:t}),r=t=>({type:l.GK,activeKey:t}),g=t=>({type:l.mf,layoutItems:t}),b=t=>({type:l.rW,layoutMode:t}),P=()=>({type:l.cy})}}]);
