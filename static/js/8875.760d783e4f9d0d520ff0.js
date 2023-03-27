"use strict";(self.webpackChunkadmin_fe=self.webpackChunkadmin_fe||[]).push([[8875],{52688:(T,a,e)=>{e.d(a,{Z:()=>t});var _=e(1413),P=e(45987),p=e(67294),i=e(20492),n=e(85893),O=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],E=p.forwardRef(function(r,l){var d=r.fieldProps,u=r.unCheckedChildren,D=r.checkedChildren,s=r.proFieldProps,c=(0,P.Z)(r,O);return(0,n.jsx)(i.Z,(0,_.Z)({valueType:"switch",fieldProps:(0,_.Z)({unCheckedChildren:u,checkedChildren:D},d),ref:l,valuePropName:"checked",proFieldProps:s,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},c))});const t=E},5966:(T,a,e)=>{e.d(a,{Z:()=>u});var _=e(1413),P=e(45987),p=e(67294),i=e(20492),n=e(85893),O=["fieldProps","proFieldProps"],E=["fieldProps","proFieldProps"],t="text",r=function(s){var c=s.fieldProps,m=s.proFieldProps,v=(0,P.Z)(s,O);return(0,n.jsx)(i.Z,(0,_.Z)({valueType:t,fieldProps:c,filedConfig:{valueType:t},proFieldProps:m},v))},l=function(s){var c=s.fieldProps,m=s.proFieldProps,v=(0,P.Z)(s,E);return(0,n.jsx)(i.Z,(0,_.Z)({valueType:"password",fieldProps:c,proFieldProps:m,filedConfig:{valueType:t}},v))},d=r;d.Password=l,d.displayName="ProFormComponent";const u=d},90672:(T,a,e)=>{e.d(a,{Z:()=>t});var _=e(1413),P=e(45987),p=e(67294),i=e(20492),n=e(85893),O=["fieldProps","proFieldProps"],E=function(l,d){var u=l.fieldProps,D=l.proFieldProps,s=(0,P.Z)(l,O);return(0,n.jsx)(i.Z,(0,_.Z)({ref:d,valueType:"textarea",fieldProps:u,proFieldProps:D},s))};const t=p.forwardRef(E)},18875:(T,a,e)=>{e.r(a),e.d(a,{default:()=>W});var _=e(66992),P=e.n(_),p=e(33948),i=e.n(p),n=e(88674),O=e.n(n),E=e(37476),t=e(5966),r=e(90672),l=e(52688),d=e(45618),u=e(84466),D=e(19650),s=e(71577),c=e(57564),m=e(49101),v=e(73171),h=e(67294),o=e(85893);const F=({formRef:C,...A})=>{const[M,R]=(0,h.useState)(!1);return(0,h.useImperativeHandle)(C,()=>({setModalVisit:R})),(0,o.jsxs)(E.Y,{title:"\u65B0\u589E\u89D2\u8272",open:M,layout:"horizontal",onOpenChange:R,modalProps:{destroyOnClose:!0},labelCol:{span:3},onFinish:async f=>(u.ZP.success("\u63D0\u4EA4\u6210\u529F"),!0),children:[(0,o.jsx)(t.Z,{name:"role",label:"\u89D2\u8272\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"}),(0,o.jsx)(r.Z,{name:"roleDesc",label:"\u89D2\u8272\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"}),(0,o.jsx)(l.Z,{name:"status",label:"\u72B6\u6001",placeholder:"",checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528"})]})},B=[{key:1,role:"Admin",roleDesc:"\u62E5\u6709\u7CFB\u7EDF\u5168\u90E8\u64CD\u4F5C\u6743\u9650",status:0,id:97,creationTime:1602572994055},{key:2,role:"Guest",roleDesc:"\u62E5\u6709\u7CFB\u7EDF\u5168\u90E8\u64CD\u4F5C\u6743\u9650",status:1,id:103,creationTime:1603698994055}],W=()=>{const C=(0,h.useRef)(),A=[{title:"\u5E8F\u53F7",dataIndex:"key"},{title:"\u89D2\u8272\u540D\u79F0",valueType:"text",dataIndex:"role"},{title:"\u72B6\u6001",valueType:"select",dataIndex:"status",valueEnum:{0:{text:"\u542F\u7528",status:"success"},1:{text:"\u7981\u7528",status:"Error"}}},{title:"\u89D2\u8272\u63CF\u8FF0",valueType:"textArea",dataIndex:"roleDesc"},{title:"\u521B\u5EFA\u65F6\u95F4",valueType:"date",dataIndex:"creationTime"},{title:"\u64CD\u4F5C",key:"option",valueType:"option",fixed:"right",render:(M,R,f,I)=>(0,o.jsxs)(D.Z,{children:[(0,o.jsx)(s.ZP,{type:"text",size:"small",icon:(0,o.jsx)(m.Z,{style:{color:"#9b59b6"}}),onClick:()=>{var x;(x=C.current)===null||x===void 0||x.setModalVisit(!0)}},"edit"),(0,o.jsx)(c.Z,{title:"\u5220\u9664\u6B64\u884C",children:(0,o.jsx)(s.ZP,{type:"text",size:"small",danger:!0,icon:(0,o.jsx)(v.Z,{})},"delete")})]})}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{search:!1,columns:A,request:()=>Promise.resolve({data:B,success:!0}),rowKey:"role",pagination:!1,toolBarRender:()=>[(0,o.jsx)(s.ZP,{icon:(0,o.jsx)(m.Z,{}),type:"primary",onClick:()=>{var M;(M=C.current)===null||M===void 0||M.setModalVisit(!0)},children:"\u65B0\u589E\u89D2\u8272"},"set")],options:!1,dateFormatter:"string"}),(0,o.jsx)(F,{formRef:C})]})}}}]);
