"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[6531],{39649:(P,o,e)=>{e.d(o,{yq:()=>E,uf:()=>v,Il:()=>D,dW:()=>i,WY:()=>r});var l=e(88674),u=e(52861);const c={baseURL:"/default-api",headers:{"x-access-token":"bqddxxwqmfncffacvbpkuxvwvqrhln"},timeout:3e3,withCredentials:!0},r=((t=c)=>{const d=u.Z.create({...t});return d.interceptors.request.use(function(a){return a},function(a){return Promise.reject(a)}),d.interceptors.response.use(function(a){const{code:n,data:I,message:g,cache:T,timeout:_}=a.data,s={200:()=>a.data,401:()=>{},default:()=>Promise.reject(a.data)};return s[n]?s[n]():s.default()},function(a){return Promise.reject(a)}),d})({baseURL:"https://mock.apifox.cn/m1/1225980-0-default"}),E=t=>r.post("/login",{...t}),i=t=>r.post("/userInfo",{token:t}),v=t=>r.post("/logout",{token:t}),D=t=>r.post("/detailInfo",{...t})},48219:(P,o,e)=>{e.d(o,{oE:()=>u,vB:()=>l});const l={0:{text:"\u5F85\u5904\u7406",code:"0"},1:{text:"\u8D44\u6599\u586B\u62A5\u4E2D",code:"1"},2:{text:"\u8D44\u6599\u5DF2\u586B\u62A5\u5B8C\u6210",code:"2"},3:{text:"\u6682\u4E0D\u5408\u4F5C",code:"5"}},u=[{value:"guangdong",label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",value:"guangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"}]},{label:"\u4E91\u5357",value:"yunnan",children:[{value:"kunming",label:"\u6606\u660E"},{value:"qujing",label:"\u66F2\u9756"}]}],c={N:{text:"\u672A\u53D8\u66F4",code:"N"},Y:{text:"\u5DF2\u53D8\u66F4",code:"Y"}}},66531:(P,o,e)=>{e.r(o),e.d(o,{default:()=>T});var l=e(88674),u=e.n(l),c=e(66992),y=e.n(c),x=e(33948),r=e.n(x),E=e(39649),i=e(67294),v=e(79655),D=e(13202),t=e(48219),d=e(71577),a=e(84466),n=e(85893);const I=async _=>{const{details:s}=await(0,E.Il)({id:_});return{data:s,success:!0}},T=()=>{const[_]=(0,v.lr)(),[s,f]=(0,i.useState)(!1),[h,j]=(0,i.useState)([]),C=_.get("id"),L=[{title:"\u6392\u5E8F",dataIndex:"index",valueType:"index"},{title:"\u57CE\u5E02",valueType:"select",dataIndex:"city",key:"value"},{title:"\u7EA7\u8054\u9009\u62E9",dataIndex:"provinces",hideInTable:!0,valueType:"cascader",request:async()=>t.oE},{title:"\u72B6\u6001",dataIndex:"progress",valueType:"select",valueEnum:t.vB},{title:"\u65F6\u95F4\u65E5\u671F",key:"dateTime",dataIndex:"dateTime",valueType:"dateTime",fieldProps:{format:"YYYY.MM.DD HH:mm:ss"}},{title:"\u7ED3\u679C",dataIndex:"result",ellipsis:!0,valueType:"textarea",key:"result",render:(M,m,p,O)=>[(0,n.jsx)("div",{children:[m.result]},"result")]},{title:"\u65F6\u95F4",tooltip:"table\u7684tip",dataIndex:"date",valueType:"date",key:"date",fieldProps:{format:"YYYY-MM-DD"}},{title:"\u4FEE\u6539\u4EBA",dataIndex:"Modified"},{title:"\u56FE\u7247",dataIndex:"image",valueType:"image",hideInSearch:!0},{title:"\u5907\u6CE8",dataIndex:"memo",valueType:"textarea",ellipsis:!0,copyable:!0,render:(M,m,p,O)=>[(0,n.jsx)("div",{children:[m.memo]},"memo")]},{title:"\u64CD\u4F5C",key:"option",valueType:"option",render:(M,m,p,O)=>[(0,n.jsx)(d.ZP,{type:"primary",loading:s,onClick:()=>(f(!0),new Promise((B,A)=>{setTimeout(()=>{f(!1),a.ZP.success("success!"),B(h)},1500)})),children:"\u4FDD\u5B58"},"save")]}];return(0,n.jsx)(D.vY,{style:{background:"#fff",height:"100%",padding:"6px 6px"},title:"\u5217\u8868\u8BE6\u60C5",onDataSourceChange:j,columns:L,request:()=>I(C),editable:{}})}}}]);