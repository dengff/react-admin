"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[4139],{74139:(W,g,r)=>{r.r(g),r.d(g,{UserInfo:()=>C,default:()=>V});var H=r(41817),J=r(66992),Q=r(33948),u=r(67294),n=r(58900),l=r(47759),x=r(38345),B=r(99662),h=r(15286),t=r(85893);const E=h.ZP.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 10px;

  .ant-statistic-content {
    display: none;
  }

  .ant-pro-statistic-card-chart {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,P=[...Array(6)].map((e,s)=>({title:"\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u8BBE\u8BA1\u7CFB\u7EDF",subTitle:"A System",description:"\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",avatars:[`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${s}`,`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${s+1}`,`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${s+2}`,`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${s+3}`],userActivities:Math.floor(Math.random()*(9999-6666)+9999)})),Z=({avatars:e=[]})=>(0,t.jsx)(t.Fragment,{children:e.map(s=>(0,t.jsx)(l.C,{src:s,size:28,style:{background:"#bbc3cb"}},s))}),b=()=>(0,t.jsx)(x.Z,{headerBordered:!0,title:"\u9879\u76EE",extra:(0,t.jsx)("a",{children:"\u66F4\u591A"}),split:"horizontal",children:(0,t.jsx)(E,{children:P.map(e=>(0,t.jsx)(B.Z,{hoverable:!0,title:e.title,subTitle:e.subTitle,size:"small",bordered:!0,statistic:{value:" ",description:e.description},chart:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.C.Group,{children:(0,t.jsx)(Z,{avatars:e.avatars})}),(0,t.jsxs)("span",{style:{color:"#909399",fontSize:"12px"},children:["\u7528\u6237\u6570: ",e.userActivities]})]})},e.userActivities))})});var c=r(19650),F=r(6308),I=r(89366),p=r(1413),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const $=S;var G=r(27029),m=function(s,o){return u.createElement(G.Z,(0,p.Z)((0,p.Z)({},s),{},{ref:o,icon:$}))};m.displayName="GithubOutlined";const T=u.forwardRef(m);var z=r(57259),v=r(70743),Y=r(74916),k=r(15306);function f(e){let s="";if(/^\#?[0-9A-Fa-f]{6}$/.test(e)){e=e.replace("#",""),s=e.match(/../g);for(let a=0;a<3;a++)s[a]=parseInt(s[a],16);return s}}function j(e,s,o){let a=/^\d{1,3}$/;if(!a.test(e)||!a.test(s)||!a.test(o))return!1;let i=[e.toString(16),s.toString(16),o.toString(16)];for(let d=0;d<3;d++)i[d].length==1&&(i[d]=`0${i[d]}`);return`#${i.join("")}`}function w(e,s){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return!1;let a=f(e);for(let i=0;i<3;i++)a[i]=Math.round(20.5*s+a[i]*(1-s));return j(a[0],a[1],a[2])}function L(e,s){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return!1;let a=f(e);for(let i=0;i<3;i++)a[i]=Math.round(255*s+a[i]*(1-s));return j(a[0],a[1],a[2])}var M=r(33348),O=r(17925);const D=h.ZP.div`
  height: 240px;
  display: flex;
  position: relative;
  background: ${e=>`linear-gradient(128deg, ${e?.BGColor}, #72ece933)`};

  .user-mes {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 14px !important;
  }
`,R=[{tagColor:"rgba(180,129,224,0.26)",text:"react 18",textColor:"#752aa8"},{tagColor:"rgba(125,234,154,0.37)",text:"redux",textColor:"#17d543"},{tagColor:"rgba(222,116,105,0.29)",text:"react-router V6",textColor:"rgba(213,39,23,0.82)"},{tagColor:"rgba(252,129,171,0.36)",text:"antd design",textColor:"#FF5C93"},{tagColor:"rgba(152,236,220,0.47)",text:"vite",textColor:"#14c9c9"},{tagColor:"#bdcef5",text:"webpack 5",textColor:"#165dff"}],U=()=>{const{userInfo:e}=(0,v.v9)(M.b),{token:{colorPrimary:s}}=(0,v.v9)(O.P),o=(0,u.useMemo)(()=>L(s,.82),[s]);return(0,t.jsx)(D,{BGColor:o,children:(0,t.jsxs)(c.Z,{direction:"horizontal",className:"user-mes",children:[(0,t.jsx)(l.C,{size:66,src:e?.avatar}),(0,t.jsx)("span",{children:e?.name}),(0,t.jsxs)("div",{style:{display:"flex",gap:"32px"},children:[(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(I.Z,{}),"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08"]}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(z._t,{}),"\u5E7F\u5DDE"]}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(T,{}),(0,t.jsx)("a",{children:"https://github.com/"})]})]}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("span",{children:"\u6807\u7B7E\uFF1A"}),R.map(a=>(0,t.jsx)(F.Z,{color:a.tagColor,children:(0,t.jsx)("span",{style:{color:a.textColor},children:a.text})},a.text))]})]})})},K=[{title:"System Bug Fix",description:"ASP\u7CFB\u7EDF***\u6A21\u5757bug\u4FEE\u590D"},{title:"System Feat",description:"ASP\u7CFB\u7EDF***\u65B0\u589E\u8BA2\u5355\u6A21\u5757"},{title:"System Feat",description:"ASP\u7CFB\u7EDF\u65B0\u589E\u5B89\u5168\u8BA4\u8BC1\u529F\u80FD"},{title:"Bug Fix",description:"ASP\u7CFB\u7EDF***\u4FEE\u590D\u6253\u5370\u663E\u793A\u9519\u4F4D\u5F02\u5E38"},{title:"Bug Fix",description:"CMS\u7CFB\u7EDF***\u4FEE\u590D\u83DC\u5355\u663E\u793A"}],N=()=>(0,t.jsx)(x.Z,{title:"\u4EFB\u52A1\u901A\u77E5",extra:(0,t.jsx)("a",{children:"\u66F4\u591A"}),children:(0,t.jsx)(n.ZP,{itemLayout:"horizontal",dataSource:K,renderItem:(e,s)=>(0,t.jsx)(n.ZP.Item,{children:(0,t.jsx)(n.ZP.Item.Meta,{avatar:(0,t.jsx)(l.C,{src:`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${s}`}),title:(0,t.jsx)("a",{children:e.title}),description:e.description})})})}),A=[{title:"Rain",description:"\u52AA\u529B\uFF0C\u8DDF\u4F60\u7684\u6027\u522B\u65E0\u5173\uFF0C\u8DDF\u4F60\u8BFB\u4E0D\u8BFB\u5927\u5B66\u7684\u5DEE\u8DDD\u65E0\u5173\u3002\u4E70\u5F97\u8D77\u81EA\u5DF1\u559C\u6B22\u7684\u4E1C\u897F\uFF0C\u53BB\u5F97\u4E86\u81EA\u5DF1\u60F3\u53BB\u7684\u5730\u65B9\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u8EAB\u8FB9\u4EBA\u7684\u6765\u6216\u8D70\u635F\u5931\u751F\u6D3B\u7684\u8D28\u91CF\uFF0C\u53CD\u800C\u4F1A\u56E0\u4E3A\u82B1\u81EA\u5DF1\u7684\u94B1\uFF0C\u6765\u5F97\u66F4\u6709\u5E95\u6C14\u4E00\u4E9B\uFF0C\u8FD9\u5C31\u662F\u5E94\u8BE5\u52AA\u529B\u7684\u539F\u56E0\u3002"},{title:"\u8001\u8857",description:"\u5982\u679C\u8981\u7ED9\u5B8C\u7F8E\u4EBA\u751F\u4E00\u4E2A\u5B9A\u4E49\uFF0C\u90A3\u5C31\u662F\u60EC\u610F\u3002\u5982\u679C\u8981\u7ED9\u60EC\u610F\u4E00\u4E2A\u5B9A\u4E49\uFF0C\u90A3\u5C31\u662F\u4E09\u4E94\u77E5\u5DF1\u8C08\u7B11\u98CE\u751F\u3002"},{title:"\u6768\u7231\u5929",description:"\u4EBA\u683C\u7684\u5B8C\u5584\u662F\u672C\uFF0C\u8D22\u5BCC\u7684\u786E\u7ACB\u662F\u672B\u3002"},{title:"VILIN",description:"\u4E16\u754C\u4E0A\u6CA1\u6709\u7EDD\u5BF9\u7684\u8BA9\u4EBA\u5F00\u5FC3\u7684\u4E50\u56ED\uFF0C\u53EA\u6709\u76F8\u5BF9\u7684\u80FD\u81EA\u5DF1\u627E\u4E50\u7684\u4EBA\u3002"},{title:"\u674E\u4E91\u7EF4",description:"\u8FDB\u53D6\u5411\u4E0A\u7684\u5FC3\u6001\uFF0C\u662F\u6210\u529F\u8005\u7684\u6700\u57FA\u672C\u8981\u7D20\u3002"},{title:"\u738B\u5FB7\u53D1",description:"\u8DD1\u5F97\u8D8A\u5FEB\uFF0C\u9047\u5230\u98CE\u7684\u963B\u529B\u8D8A\u5927\u3002\u963B\u529B\u4E0E\u6210\u5C31\u76F8\u4F34\u968F\u3002"},{title:"\u738B\u5FB7\u53D1",description:"\u9A7E\u9A6D\u547D\u8FD0\u7684\u8235\u662F\u594B\u6597\uFF0C\u4E0D\u62B1\u6709\u4E00\u4E1D\u5E7B\u60F3\uFF0C\u4E0D\u653E\u4E0B\u4E00\u70B9\u673A\u4F1A\uFF0C\u4E0D\u505C\u6B62\u4E00\u65E5\u52AA\u529B\u3002"}],y=({data:e=[]})=>(0,t.jsx)(n.ZP,{style:{height:"300px",overflow:"auto"},itemLayout:"horizontal",dataSource:e,renderItem:(s,o)=>(0,t.jsx)(n.ZP.Item,{children:(0,t.jsx)(n.ZP.Item.Meta,{avatar:(0,t.jsx)(l.C,{src:`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${o}`}),title:(0,t.jsx)("a",{children:s.title}),description:s.description})})}),C=()=>{const[e,s]=(0,u.useState)("essay");return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(U,{}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3fr 1fr",gap:"20px"},children:[(0,t.jsx)(b,{}),(0,t.jsx)(N,{})]}),(0,t.jsx)(x.Z,{tabs:{activeKey:e,items:[{label:"\u6587\u7AE0",key:"essay",children:(0,t.jsx)(y,{data:A})},{label:"\u5E94\u7528\uFF083\uFF09",key:"apply",children:(0,t.jsx)(y,{data:A})}],onChange:o=>{s(o)}}})]})},V=C}}]);
