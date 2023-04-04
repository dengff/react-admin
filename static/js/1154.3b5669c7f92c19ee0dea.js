"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[1154],{48219:(T,x,t)=>{t.d(x,{oE:()=>p,vB:()=>f});const f={0:{text:"\u5F85\u5904\u7406",code:"0"},1:{text:"\u8D44\u6599\u586B\u62A5\u4E2D",code:"1"},2:{text:"\u8D44\u6599\u5DF2\u586B\u62A5\u5B8C\u6210",code:"2"},3:{text:"\u6682\u4E0D\u5408\u4F5C",code:"5"}},p=[{value:"guangdong",label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",value:"guangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"}]},{label:"\u4E91\u5357",value:"yunnan",children:[{value:"kunming",label:"\u6606\u660E"},{value:"qujing",label:"\u66F2\u9756"}]}],P={N:{text:"\u672A\u53D8\u66F4",code:"N"},Y:{text:"\u5DF2\u53D8\u66F4",code:"Y"}}},1154:(T,x,t)=>{t.r(x),t.d(x,{default:()=>J});var f=t(66992),p=t(33948),P=t(88674),q=t(74916),_=t(15306),Z=t(15286),I=t(84466),i=t(19650),h=t(6308),S=t(4107),B=t(88389),C=t(47759),N=t(71577),b=t(13202),F=t(70743),m=t(67294),z=t(57259),D=t(33348),e=t(85893);const K=Z.ZP.div`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  position: relative;
  background: #fff;
  gap: 10px;

  .user-mes {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px !important;
  }

  .ant-upload {
    position: relative;
    cursor: pointer;

    .camera {
      position: absolute;
      bottom: -55px;
      right: 4px;
    }
  }
`,Y=a=>{const{userInfo:s}=(0,F.v9)(D.b),[O,y]=(0,m.useState)(!1),[Q,E]=(0,m.useState)(!1),[X,le]=(0,m.useState)({userName:s?.name,realName:"N",accountId:"7802_sehjlkf_01gk",phoneNumber:"15977692030",registrationTime:"2021-02-10",mailbox:"2539872356@qq.com"});function A(n,v){const c=this.dataSource;return c[n]=v,new Promise((d,u)=>{setTimeout(()=>{this===null||this===void 0||this.setDataSource(c),I.ZP.success("success"),d(c)},600)})}const k=[{title:"\u7528\u6237\u540D",key:"text",dataIndex:"userName"},{title:"\u5B9E\u540D\u8BA4\u8BC1",key:"realName",dataIndex:"realName",valueType:"select",valueEnum:{Y:{text:"\u5DF2\u8BA4\u8BC1",status:"Success"},N:{text:"\u672A\u8BA4\u8BC1",status:"Error"}},render:(n,v,c,d,u)=>{const r=u?.valueEnum,l=r?.[n].text;return n==="Y"?(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(h.Z,{color:"rgba(207,250,207,0.95)",children:(0,e.jsx)("span",{style:{color:"#26b42a"},children:l})}),(0,e.jsx)("a",{children:"\u8BE6\u60C5"})]}):(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(h.Z,{color:"warning",children:(0,e.jsx)("span",{style:{color:"#b49826"},children:l})}),(0,e.jsx)("a",{onClick:()=>a?.changeActiveKey("security"),children:"\u524D\u5F80\u8BA4\u8BC1"})]})}},{title:"\u8D26\u53F7 ID",dataIndex:"accountId"},{title:"\u7ED1\u5B9A\u624B\u673A\u53F7",dataIndex:"phoneNumber",valueType:"text",render:(n,v,c,d,u)=>O?(0,e.jsx)(S.Z,{size:"small",defaultValue:n,placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",onBlur:r=>{var l;A.call(d,"phoneNumber",(l=r.target)===null||l===void 0?void 0:l.value).then(w=>y(!1))}}):n?(0,e.jsxs)(i.Z,{children:[n.replace(/^(\d{3})\d+(\d{4})$/,"$1****$2"),(0,e.jsx)("a",{onClick:()=>y(!0),children:"\u4FEE\u6539"})]}):(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(h.Z,{color:"error",children:(0,e.jsx)("span",{style:{color:"#f56c6c"},children:"\u672A\u7ED1\u5B9A"})}),(0,e.jsx)("a",{onClick:()=>y(!0),children:"\u524D\u53BB\u7ED1\u5B9A"})]})},{title:"\u6CE8\u518C\u65F6\u95F4",key:"date",dataIndex:"registrationTime",valueType:"dateTime"},{title:"\u90AE\u7BB1",key:"mailbox",dataIndex:"mailbox",valueType:"text",render:(n,v,c,d,u)=>Q?(0,e.jsx)(S.Z,{defaultValue:n,size:"small",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",onBlur:r=>{var l;A.call(d,"mailbox",(l=r.target)===null||l===void 0?void 0:l.value).then(w=>E(!1))}}):(0,e.jsxs)(i.Z,{children:[n,(0,e.jsx)("a",{onClick:r=>E(!0),children:"\u4FEE\u6539"})]})}];return(0,e.jsxs)(K,{children:[(0,e.jsxs)(i.Z,{direction:"horizontal",className:"user-mes",children:[(0,e.jsxs)(B.Z,{name:"avatar",className:"avatar-uploader",showUploadList:!1,action:"uploadUrl",children:[(0,e.jsx)(C.C,{size:120,src:s?.avatar}),(0,e.jsx)(N.ZP,{shape:"circle",className:"camera",icon:(0,e.jsx)(z.xm,{})})]}),(0,e.jsx)("span",{style:{fontSize:"12px",color:"#909399"},children:"\u751F\u6D3B\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u8FC7\u4E86\u4ECA\u65E5\u5C31\u662F\u660E\u5929\u3002"})]}),(0,e.jsx)("div",{style:{display:"grid",margin:"0 10px"},children:(0,e.jsx)(b.vY,{column:2,request:()=>Promise.resolve({data:X,success:!0}),columns:k})})]})};var $=t(38345),o=t(27061),j=t(5966),U=t(64317),H=t(8214),L=t(90672),V=t(48219);const W=()=>(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:(0,e.jsxs)(o.A,{layout:"horizontal",labelCol:{span:4},submitter:{onSubmit:()=>{I.ZP.success("success")},render:(a,s)=>(0,e.jsx)(i.Z,{style:{width:"100%",justifyContent:"center"},children:s})},children:[(0,e.jsx)(o.A.Item,{label:"\u90AE\u7BB1",name:"mailbox",children:(0,e.jsx)(j.Z,{})}),(0,e.jsx)(o.A.Item,{label:"\u6635\u79F0",name:"nickname",children:(0,e.jsx)(j.Z,{})}),(0,e.jsx)(o.A.Item,{label:"\u56FD\u5BB6/\u5730\u533A",name:"country",children:(0,e.jsx)(U.Z,{fieldProps:{options:[{label:"\u4E2D\u56FD",value:"zh"}]}})}),(0,e.jsx)(o.A.Item,{label:"\u6240\u5728\u533A\u57DF",name:"Region",children:(0,e.jsx)(H.Z,{fieldProps:{options:V.oE}})}),(0,e.jsx)(o.A.Item,{label:"\u5177\u4F53\u5730\u5740",name:"specificAddress",children:(0,e.jsx)(j.Z,{})}),(0,e.jsx)(o.A.Item,{label:"\u5907\u6CE8",name:"remark",children:(0,e.jsx)(L.Z,{})})]})});var se=t(41817),g=t(58900);const M=[{title:"\u767B\u9646\u5BC6\u7801",description:"\u5DF2\u8BBE\u7F6E\u3002\u5BC6\u7801\u81F3\u5C116\u4F4D\u5B57\u7B26\uFF0C\u652F\u6301\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u9664\u7A7A\u683C\u5916\u7684\u7279\u6B8A\u5B57\u7B26\uFF0C\u4E14\u5FC5\u987B\u540C\u65F6\u5305\u542B\u6570\u5B57\u548C\u5927\u5C0F\u5199\u5B57\u6BCD\u3002",actionText:"\u4FEE\u6539"},{title:"\u5BC6\u4FDD\u95EE\u9898",description:"\u60A8\u6682\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u4EE5\u6709\u6548\u7684\u4FDD\u62A4\u8D26\u53F7\u7684\u5B89\u5168\u3002",actionText:"\u8BBE\u7F6E"},{title:"\u5B9E\u540D\u8BA4\u8BC1",description:"\u60A8\u6682\u672A\u5B9E\u540D\u767B\u8BB0\uFF0C\u5B9E\u540D\u767B\u8BB0\u53EF\u4EE5\u6709\u6548\u7684\u4FDD\u62A4\u8D26\u53F7\u7684\u5B89\u5168\u3002",actionText:"\u8BA4\u8BC1"},{title:"\u5B89\u5168\u624B\u673A",description:"\u5DF2\u7ED1\u5B9A\uFF1A 177******10",actionText:"\u4FEE\u6539"},{title:"\u5B89\u5168\u90AE\u7BB1",description:"\u60A8\u6682\u672A\u8BBE\u7F6E\u90AE\u7BB1\uFF0C\u7ED1\u5B9A\u90AE\u7BB1\u53EF\u4EE5\u7528\u6765\u627E\u56DE\u5BC6\u7801\u3001\u63A5\u6536\u901A\u77E5\u7B49\u3002",actionText:"\u8BBE\u7F6E"}],R=()=>(0,e.jsx)(g.ZP,{itemLayout:"horizontal",dataSource:M,renderItem:a=>(0,e.jsx)(g.ZP.Item,{actions:[(0,e.jsx)("a",{children:a.actionText},"list-load-more")],children:(0,e.jsx)(g.ZP.Item.Meta,{title:(0,e.jsx)("a",{children:a.title}),description:a.description})})}),G=Z.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,J=()=>{const[a,s]=(0,m.useState)("basicInfo");return(0,e.jsxs)(G,{children:[(0,e.jsx)(Y,{changeActiveKey:s}),(0,e.jsx)($.Z,{tabs:{activeKey:a,items:[{label:"\u57FA\u672C\u4FE1\u606F",key:"basicInfo",children:(0,e.jsx)(W,{})},{label:"\u5B89\u5168\u8BBE\u7F6E",key:"security",children:(0,e.jsx)(R,{})}],onChange:s}})]})}}}]);