"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[284],{76284:(z,i,o)=>{o.r(i),o.d(i,{default:()=>f});var a=o(65460),l=o(66847),d=o(15286);const s="https://cdn.pixabay.com/photo/2016/02/15/11/40/background-1201008__480.jpg?imageView&blur=40x20",u=d.ZP.div`
  .login {
    height: 100vh;
    background-image: url(${s});
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
    background-image: url(${s});
    filter: blur(3px);
    z-index: 0;
    background-size: cover;
  }

  .ant-pro-form-login-logo  {
    z-index: 1;
  }

  .ant-divider-inner-text {
    z-index: 1;
  }

`;var g=o(86706),t=o(18655),c=o(56401),r=o(5966),x=o(89366),m=o(2603),n=o(85893);const Z={color:"rgba(0, 0, 0, 0.2)",fontSize:"18px",verticalAlign:"middle",cursor:"pointer"},p="https://cdn.pixabay.com/photo/2016/02/15/11/41/background-1201010__480.jpg",h=e=>{const{login:v,getUserInfo:j}=e,b=F=>{v(F).then(B=>{const{token:y}=B;j(y)})};return(0,n.jsx)(u,{loginBackground:p,children:(0,n.jsx)("div",{className:"login",children:(0,n.jsx)(c.U,{onFinish:b,logo:"https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png",title:"Admin",subTitle:"--",initialValues:{username:"admin",password:"123456"},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{name:"username",fieldProps:{size:"large",prefix:(0,n.jsx)(x.Z,{className:"prefixIcon"})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,n.jsx)(r.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(m.Z,{className:"prefixIcon"})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,n.jsx)(a.Z,{children:"Tip"}),(0,n.jsxs)(l.Z.Item,{style:{textAlign:"center"},children:[(0,n.jsx)("div",{children:"\u8D26\u53F7 : admin \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,n.jsx)("div",{children:"\u8D26\u53F7 : editor \u5BC6\u7801 : \u968F\u4FBF\u586B"}),(0,n.jsx)("div",{children:"\u8D26\u53F7 : guest \u5BC6\u7801 : \u968F\u4FBF\u586B"})]})]})})})})},k=e=>({global:e.global}),f=(0,g.$j)(e=>e.global,{login:t.x4,getUserInfo:t.bG})(h)}}]);
