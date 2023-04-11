"use strict";(self.webpackChunkantd_admin=self.webpackChunkantd_admin||[]).push([[5676],{79385:(Ir,ir,l)=>{l.d(ir,{L9:()=>Ce,ZP:()=>mr,MP:()=>pe,NA:()=>t,aK:()=>Ve});var N=l(1413),ze=l(44925),i=l(29439),se=l(93433),Le=l(71002),be=l(4942),lr=l(59852),Te=l(98082),M=l(75661),or=l(21770),ar=l(27068),We=l(33983),dr=l(19650),k=l(58331),ur=l(36646),O=l(67294),sr=l(83757),G=l(44644),E=l(85893),Qe={Success:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"success",text:u})},Error:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"error",text:u})},Default:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"default",text:u})},Processing:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"processing",text:u})},Warning:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"warning",text:u})},success:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"success",text:u})},error:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"error",text:u})},default:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"default",text:u})},processing:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"processing",text:u})},warning:function(n){var u=n.children;return(0,E.jsx)(G.Z,{status:"warning",text:u})}},vr=function(n){var u=n.color,Z=n.children;return(0,E.jsx)(G.Z,{color:u,text:Z})};const fr=Qe;var Ue=l(72006),Ge=l(36287),Xe=["value","text"],Je=["mode","valueEnum","render","renderFormItem","request","fieldProps","plain","children","light","proFieldKey","params","label","bordered","id","lightLabel","labelTrigger"],Ce=function(n){return Me(n)==="map"?n:new Map(Object.entries(n||{}))},pe=function v(n,u,Z){if(Array.isArray(n))return(0,E.jsx)(dr.Z,{split:",",size:2,wrap:!0,children:n.map(function(I,z){return v(I,u,z)})},Z);var Y=Ce(u);if(!Y.has(n)&&!Y.has("".concat(n)))return n?.label||n;var R=Y.get(n)||Y.get("".concat(n));if(!R)return(0,E.jsx)(O.Fragment,{children:n?.label||n},Z);var F=R.status,y=R.color,oe=fr[F||"Init"];return oe?(0,E.jsx)(oe,{children:R.text},Z):y?(0,E.jsx)(vr,{color:y,children:R.text},Z):(0,E.jsx)(O.Fragment,{children:R.text||R},Z)},cr=function(n){for(var u=n.label,Z=n.words,Y=(0,O.useContext)(k.ZP.ConfigContext),R=Y.getPrefixCls,F=R("pro-select-item-option-content-light"),y=R("pro-select-item-option-content"),oe=(0,Te.Xj)("Highlight",function(te){var K;return K={},(0,be.Z)(K,".".concat(F),{color:te.colorPrimary}),(0,be.Z)(K,".".concat(y),{flex:"auto",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),K}),I=oe.wrapSSR,z=new RegExp(Z.map(function(te){return te.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}).join("|"),"gi"),X=u,ae=[];X.length;){var T=z.exec(X);if(!T){ae.push(X);break}var ve=T.index,fe=T[0].length+ve;ae.push(X.slice(0,ve),O.createElement("span",{className:F},X.slice(ve,fe))),X=X.slice(fe)}return I(O.createElement.apply(O,["div",{title:u,className:y}].concat(ae)))};function Me(v){var n=Object.prototype.toString.call(v).match(/^\[object (.*)\]$/)[1].toLowerCase();return n==="string"&&(0,Le.Z)(v)==="object"?"object":v===null?"null":v===void 0?"undefined":n}function Ne(v,n){var u,Z;if(!n||v!=null&&(u=v.label)!==null&&u!==void 0&&u.toString().toLowerCase().includes(n.toLowerCase())||v!=null&&(Z=v.value)!==null&&Z!==void 0&&Z.toString().toLowerCase().includes(n.toLowerCase()))return!0;if(v.children||v.options){var Y=[].concat((0,se.Z)(v.children||[]),[v.options||[]]).find(function(R){return Ne(R,n)});if(Y)return!0}return!1}var t=function(n){var u=[],Z=Ce(n);return Z.forEach(function(Y,R){var F=Z.get(R)||Z.get("".concat(R));if(F){if((0,Le.Z)(F)==="object"&&F!==null&&F!==void 0&&F.text){u.push({text:F?.text,value:R,label:F?.text,disabled:F.disabled});return}u.push({text:F,value:R})}}),u},Ve=function(n){var u,Z,Y,R,F=n.cacheForSwr,y=n.fieldProps,oe=(0,O.useState)(n.defaultKeyWords),I=(0,i.Z)(oe,2),z=I[0],X=I[1],ae=(0,O.useState)(function(){return n.proFieldKey?n.proFieldKey.toString():n.request?(0,M.x)():"no-fetch"}),T=(0,i.Z)(ae,1),ve=T[0],fe=(0,O.useRef)(ve),te=(0,O.useCallback)(function(j){return t(Ce(j)).map(function($){var w=$.value,m=$.text,ne=(0,ze.Z)($,Xe);return(0,N.Z)({label:m,value:w,key:w},ne)})},[]),K=(0,O.useMemo)(function(){if(y){var j=y?.options||y?.treeData;if(j){var $=y.fieldNames||{},w=$.children,m=$.label,ne=$.value,ce=function Oe(he,me){if(he!=null&&he.length)for(var xe=he.length,q=0;q<xe;){var B=he[q++];(B[w]||B[m]||B[ne])&&(B[me]=B[me==="children"?w:me==="label"?m:ne],Oe(B[w],me))}};return w&&ce(j,"children"),m&&ce(j,"label"),ne&&ce(j,"value"),j}}},[y]),Be=(0,or.Z)(function(){return n.valueEnum?te(n.valueEnum):[]},{value:K}),Ye=(0,i.Z)(Be,2),re=Ye[0],De=Ye[1];(0,ar.KW)(function(){var j,$;!n.valueEnum||(j=n.fieldProps)!==null&&j!==void 0&&j.options||($=n.fieldProps)!==null&&$!==void 0&&$.treeData||De(te(n.valueEnum))},[n.valueEnum]);var Ie=(0,We.n)([fe.current,n.params,z],(u=(Z=n.debounceTime)!==null&&Z!==void 0?Z:n==null||(Y=n.fieldProps)===null||Y===void 0?void 0:Y.debounceTime)!==null&&u!==void 0?u:0,[n.params,z]),de=(0,sr.ZP)(function(){return n.request?Ie:null},function(j){var $=(0,i.Z)(j,3),w=$[1],m=$[2];return n.request((0,N.Z)((0,N.Z)({},w),{},{keyWords:m}),n)},{revalidateIfStale:!F,revalidateOnReconnect:F,shouldRetryOnError:!1,revalidateOnFocus:!1}),$e=de.data,Ae=de.mutate,je=de.isValidating,Ee=(0,O.useMemo)(function(){var j,$,w=re?.map(function(m){if(typeof m=="string")return{label:m,value:m};if(m.children||m.options){var ne=[].concat((0,se.Z)(m.children||[]),(0,se.Z)(m.options||[])).filter(function(ce){return Ne(ce,z)});return(0,N.Z)((0,N.Z)({},m),{},{children:ne,options:ne})}return m});return((j=n.fieldProps)===null||j===void 0?void 0:j.filterOption)===!0||(($=n.fieldProps)===null||$===void 0?void 0:$.filterOption)===void 0?w?.filter(function(m){return m?z?Ne(m,z):!0:!1}):w},[re,z,(R=n.fieldProps)===null||R===void 0?void 0:R.filterOption]);return[je,n.request?$e:Ee,function(j){X(j)},function(){X(void 0),Ae([],!1)}]},hr=function(n,u){var Z,Y=n.mode,R=n.valueEnum,F=n.render,y=n.renderFormItem,oe=n.request,I=n.fieldProps,z=n.plain,X=n.children,ae=n.light,T=n.proFieldKey,ve=n.params,fe=n.label,te=n.bordered,K=n.id,Be=n.lightLabel,Ye=n.labelTrigger,re=(0,ze.Z)(n,Je),De=(0,O.useRef)(),Ie=(0,lr.YB)(),de=(0,O.useRef)(""),$e=I.fieldNames;(0,O.useEffect)(function(){de.current=I?.searchValue},[I?.searchValue]);var Ae=Ve(n),je=(0,i.Z)(Ae,4),Ee=je[0],j=je[1],$=je[2],w=je[3],m=(k.ZP===null||k.ZP===void 0||(Z=k.ZP.useConfig)===null||Z===void 0?void 0:Z.call(k.ZP))||{componentSize:"middle"},ne=m.componentSize;(0,O.useImperativeHandle)(u,function(){return(0,N.Z)((0,N.Z)({},De.current||{}),{},{fetchData:function(q){return $(q)}})});var ce=(0,O.useMemo)(function(){if(Y==="read"){var xe=$e||{},q=xe.label,B=q===void 0?"label":q,ke=xe.value,xr=ke===void 0?"value":ke,qe=xe.options,Zr=qe===void 0?"options":qe,_=new Map,e=function o(r){if(!(r!=null&&r.length))return _;for(var d=r.length,f=0;f<d;){var c=r[f++];_.set(c[xr],c[B]),o(c[Zr])}return _};return e(j)}},[$e,Y,j]);if(Y==="read"){var Oe=(0,E.jsx)(E.Fragment,{children:pe(re.text,Ce(R||ce))});return F?F(re.text,(0,N.Z)({mode:Y},I),Oe)||null:Oe}if(Y==="edit"||Y==="update"){var he=function(){return ae?(0,E.jsx)(Ue.Z,(0,N.Z)({bordered:te,id:K,loading:Ee,ref:De,allowClear:!0,size:ne,options:j,label:fe,placeholder:Ie.getMessage("tableForm.selectPlaceholder","\u8BF7\u9009\u62E9"),lightLabel:Be,labelTrigger:Ye},I)):(0,E.jsx)(Ge.Z,(0,N.Z)((0,N.Z)({className:re.className,style:(0,N.Z)({minWidth:100},re.style),bordered:te,id:K,loading:Ee,ref:De,allowClear:!0,defaultSearchValue:n.defaultKeyWords,notFoundContent:Ee?(0,E.jsx)(ur.Z,{size:"small"}):I?.notFoundContent,fetchData:function(B){de.current=B??"",$(B)},resetData:w,optionItemRender:function(B){return typeof B.label=="string"&&de.current?(0,E.jsx)(cr,{label:B.label,words:[de.current]}):B.label},placeholder:Ie.getMessage("tableForm.selectPlaceholder","\u8BF7\u9009\u62E9"),label:fe},I),{},{options:j}),"SearchSelect")},me=he();return y?y(re.text,(0,N.Z)((0,N.Z)({mode:Y},I),{},{options:j}),me)||null:me}return null};const mr=O.forwardRef(hr)},65676:(Ir,ir,l)=>{l.d(ir,{ZP:()=>Zr});var N=l(44925),ze=l(71002),i=l(1413),se=l(59852),Le=l(29969),be=l(51812),lr=l(47759),Te=l(80334),M=l(67294),or=l(87355),ar=l(29406),We=l(96121),dr=l(19112),k=l(31211),ur=l(53247),O=l(91544),sr=l(51133),G=l(94864),E=l(93676),Qe=l(70396),vr=l(28266),fr=l(56520),Ue=l(23995),Ge=l(34054),Xe=l(54048),Je=l(20554),Ce=l(93489),pe=l(83102),cr=l(19294),Me=l(79385),Ne=l(27892),t=l(85893),Ve=function(e,o){var r=e.text,d=e.mode,f=e.render,c=e.renderFormItem,a=e.fieldProps;if(d==="read"){var P=r;return f?f(r,(0,i.Z)({mode:d},a),(0,t.jsx)(t.Fragment,{children:P})):(0,t.jsx)(t.Fragment,{children:P})}if(d==="edit"||d==="update"){var h=(0,t.jsx)(Ne.Z,(0,i.Z)({ref:o},a));return c?c(r,(0,i.Z)({mode:d},a),h):h}return null};const hr=M.forwardRef(Ve);var mr=l(72985),v=l(97435),n=function(e,o){var r=e.text,d=e.mode,f=e.render,c=e.renderFormItem,a=e.fieldProps,P=(0,se.YB)(),h=(0,M.useMemo)(function(){var s,C;return r==null||"".concat(r).length<1?"-":r?(s=a?.checkedChildren)!==null&&s!==void 0?s:P.getMessage("switch.open","\u6253\u5F00"):(C=a?.unCheckedChildren)!==null&&C!==void 0?C:P.getMessage("switch.close","\u5173\u95ED")},[a?.checkedChildren,a?.unCheckedChildren,r]);if(d==="read")return f?f(r,(0,i.Z)({mode:d},a),(0,t.jsx)(t.Fragment,{children:h})):h??"-";if(d==="edit"||d==="update"){var S,A=(0,t.jsx)(mr.Z,(0,i.Z)((0,i.Z)({ref:o},(0,v.Z)(a,["value"])),{},{checked:(S=a?.checked)!==null&&S!==void 0?S:a?.value}));return c?c(r,(0,i.Z)({mode:d},a),A):A}return null};const u=M.forwardRef(n);var Z=l(4107),Y=function(e,o){var r=e.text,d=e.mode,f=e.render,c=e.renderFormItem,a=e.fieldProps,P=e.emptyText,h=P===void 0?"-":P,S=a||{},A=S.autoFocus,s=S.prefix,C=s===void 0?"":s,L=S.suffix,ee=L===void 0?"":L,J=(0,se.YB)(),g=(0,M.useRef)();if((0,M.useImperativeHandle)(o,function(){return g.current}),(0,M.useEffect)(function(){if(A){var H;(H=g.current)===null||H===void 0||H.focus()}},[A]),d==="read"){var p=(0,t.jsxs)(t.Fragment,{children:[C,r??h,ee]});if(f){var D;return(D=f(r,(0,i.Z)({mode:d},a),p))!==null&&D!==void 0?D:h}return p}if(d==="edit"||d==="update"){var ie=J.getMessage("tableForm.inputPlaceholder","\u8BF7\u8F93\u5165"),b=(0,t.jsx)(Z.Z,(0,i.Z)({ref:g,placeholder:ie,allowClear:!0},a));return c?c(r,(0,i.Z)({mode:d},a),b):b}return null};const R=M.forwardRef(Y);var F=function(e,o){var r=e.text,d=e.mode,f=e.render,c=e.renderFormItem,a=e.fieldProps,P=(0,se.YB)();if(d==="read"){var h=(0,t.jsx)("span",{ref:o,style:{display:"inline-block",padding:"4px 11px",lineHeight:"1.5715",maxWidth:"100%",whiteSpace:"pre-wrap"},children:r??"-"});return f?f(r,(0,i.Z)({mode:d},a),h):h}if(d==="edit"||d==="update"){var S=(0,t.jsx)(Z.Z.TextArea,(0,i.Z)({ref:o,rows:3,onKeyPress:function(s){s.key==="Enter"&&s.stopPropagation()},placeholder:P.getMessage("tableForm.inputPlaceholder","\u8BF7\u8F93\u5165")},a));return c?c(r,(0,i.Z)({mode:d},a),S):S}return null};const y=M.forwardRef(F);var oe=l(74165),I=l(15861),z=l(29439),X=l(86887),ae=l(93035),T=l(58331),ve=l(68351),fe=l(70699),te=l(27484),K=l.n(te),Be=function(e,o){var r,d=e.text,f=e.mode,c=e.light,a=e.label,P=e.format,h=e.render,S=e.renderFormItem,A=e.plain,s=e.fieldProps,C=e.lightLabel,L=e.labelTrigger,ee=(0,M.useState)(!1),J=(0,z.Z)(ee,2),g=J[0],p=J[1],D=(T.ZP===null||T.ZP===void 0||(r=T.ZP.useConfig)===null||r===void 0?void 0:r.call(T.ZP))||{componentSize:"middle"},ie=D.componentSize,b=ie,H=(0,k.g)(),Ze=H.hashId,V=H.prefixCls,W=H.wrapSSR,Pe=s?.format||P||"HH:mm:ss",_e=K().isDayjs(d)||typeof d=="number";if(f==="read"){var gr=(0,t.jsx)("span",{ref:o,children:d?K()(d,_e?void 0:Pe).format(Pe):"-"});return h?h(d,(0,i.Z)({mode:f},s),(0,t.jsx)("span",{children:gr})):gr}if(f==="edit"||f==="update"){var He,er=s.disabled,x=s.onChange,jr=s.placeholder,Pr=s.allowClear,Fr=s.value,ye=(0,X.i)(Fr,Pe);if(c){var Sr=ye&&ye.format(Pe)||"";He=W((0,t.jsxs)("div",{className:"".concat(V,"-light ").concat(Ze),onClick:function(Se){var ge,ue,le,rr=C==null||(ge=C.current)===null||ge===void 0||(ue=ge.labelRef)===null||ue===void 0||(le=ue.current)===null||le===void 0?void 0:le.contains(Se.target);p(rr?!g:!0)},children:[(0,t.jsx)(ve.Z,(0,i.Z)((0,i.Z)({value:ye,format:P,ref:o},s),{},{onChange:function(){var Fe=(0,I.Z)((0,oe.Z)().mark(function Se(ge){return(0,oe.Z)().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,x?.(ge);case 2:return le.next=4,p(!1);case 4:case"end":return le.stop()}},Se)}));return function(Se){return Fe.apply(this,arguments)}}(),onOpenChange:function(Se){L||p(Se)},open:g})),(0,t.jsx)(ae.Q,{label:a,disabled:er,placeholder:jr,size:b,value:Sr,allowClear:Pr,onClear:function(){return x?.(null)},expanded:g,ref:C})]}))}else He=(0,t.jsx)(fe.Z.TimePicker,(0,i.Z)((0,i.Z)({ref:o,format:P,bordered:A===void 0?!0:!A},s),{},{value:ye}));return S?S(d,(0,i.Z)({mode:f},s),He):He}return null},Ye=function(e,o){var r=e.text,d=e.mode,f=e.format,c=e.render,a=e.renderFormItem,P=e.plain,h=e.fieldProps,S=h?.format||f||"HH:mm:ss",A=Array.isArray(r)?r:[],s=(0,z.Z)(A,2),C=s[0],L=s[1],ee=K().isDayjs(C)||typeof C=="number",J=K().isDayjs(L)||typeof L=="number",g=C?K()(C,ee?void 0:S).format(S):"",p=L?K()(L,J?void 0:S).format(S):"";if(d==="read"){var D=(0,t.jsxs)("div",{ref:o,children:[(0,t.jsx)("div",{children:g||"-"}),(0,t.jsx)("div",{children:p||"-"})]});return c?c(r,(0,i.Z)({mode:d},h),(0,t.jsx)("span",{children:D})):D}if(d==="edit"||d==="update"){var ie=h.value,b=(0,X.i)(ie,S),H=(0,t.jsx)(ve.Z.RangePicker,(0,i.Z)((0,i.Z)({ref:o,format:f,bordered:P===void 0?!0:!P},h),{},{value:b}));return a?a(r,(0,i.Z)({mode:d},h),H):H}return null},re=M.forwardRef(Ye);const De=M.forwardRef(Be);var Ie=l(36646),de=l(61239),$e=l(94184),Ae=l.n($e),je=l(21770),Ee=["radioType","renderFormItem","mode","light","label","render","fetchDataOnSearch"],j=["onSearch","onClear","onChange","onBlur","showSearch","autoClearSearchValue","treeData","fetchDataOnSearch","searchValue"],$=function(e,o){var r,d=e.radioType,f=e.renderFormItem,c=e.mode,a=e.light,P=e.label,h=e.render,S=e.fetchDataOnSearch,A=S===void 0?!0:S,s=(0,N.Z)(e,Ee),C=(0,M.useContext)(T.ZP.ConfigContext),L=C.getPrefixCls,ee=L("pro-field-tree-select"),J=(0,M.useRef)(null),g=(0,M.useState)(!1),p=(0,z.Z)(g,2),D=p[0],ie=p[1],b=s.fieldProps,H=b.onSearch,Ze=b.onClear,V=b.onChange,W=b.onBlur,Pe=b.showSearch,_e=b.autoClearSearchValue,gr=b.treeData,He=b.fetchDataOnSearch,er=b.searchValue,x=(0,N.Z)(b,j),jr=(T.ZP===null||T.ZP===void 0||(r=T.ZP.useConfig)===null||r===void 0?void 0:r.call(T.ZP))||{componentSize:"middle"},Pr=jr.componentSize,Fr=Pr,ye=(0,se.YB)(),Sr=(0,Me.aK)((0,i.Z)((0,i.Z)({},s),{},{defaultKeyWords:er})),Fe=(0,z.Z)(Sr,3),Se=Fe[0],ge=Fe[1],ue=Fe[2],le=(0,je.Z)(void 0,{onChange:H,value:er}),rr=(0,z.Z)(le,2),$r=rr[0],nr=rr[1];(0,M.useImperativeHandle)(o,function(){return(0,i.Z)((0,i.Z)({},J.current||{}),{},{fetchData:function(U){return ue(U)}})});var Or=(0,M.useMemo)(function(){if(c==="read"){var Q=x?.fieldNames||{},U=Q.value,Ke=U===void 0?"value":U,Re=Q.label,Ar=Re===void 0?"label":Re,Mr=Q.children,Hr=Mr===void 0?"children":Mr,Dr=new Map,Kr=function wr(we){if(!(we!=null&&we.length))return Dr;for(var zr=we.length,Yr=0;Yr<zr;){var Er=we[Yr++];Dr.set(Er[Ke],Er[Ar]),wr(Er[Hr])}return Dr};return Kr(ge)}},[x?.fieldNames,c,ge]),yr=function(U,Ke,Re){Pe&&_e&&(ue(void 0),nr(void 0)),V?.(U,Ke,Re)};if(c==="read"){var Rr=(0,t.jsx)(t.Fragment,{children:(0,Me.MP)(s.text,(0,Me.L9)(s.valueEnum||Or))});return h?h(s.text,(0,i.Z)({mode:c},x),Rr)||null:Rr}if(c==="edit"){var Cr,br=Array.isArray(x?.value)?x==null||(Cr=x.value)===null||Cr===void 0?void 0:Cr.length:0,tr=(0,t.jsx)(Ie.Z,{spinning:Se,children:(0,t.jsx)(de.Z,(0,i.Z)((0,i.Z)({open:D,onDropdownVisibleChange:ie,ref:J,dropdownMatchSelectWidth:!a,placeholder:ye.getMessage("tableForm.selectPlaceholder","\u8BF7\u9009\u62E9"),tagRender:a?function(Q){var U;if(br<2)return(0,t.jsx)(t.Fragment,{children:Q.label});var Ke=x==null||(U=x.value)===null||U===void 0?void 0:U.findIndex(function(Re){return Re===Q.value||Re.value===Q.value});return(0,t.jsxs)(t.Fragment,{children:[Q.label," ",Ke<br-1?",":""]})}:void 0},x),{},{bordered:!a,treeData:ge,showSearch:Pe,style:(0,i.Z)({minWidth:60},x.style),searchValue:$r,autoClearSearchValue:_e,onClear:function(){Ze?.(),ue(void 0),Pe&&nr(void 0)},onChange:yr,onSearch:function(U){A&&ue(U),nr(U)},onBlur:function(U){nr(void 0),ue(void 0),W?.(U)},className:Ae()(x?.className,ee)}))});if(f&&(tr=f(s.text,(0,i.Z)({mode:c},x),tr)||null),a){var Lr=x.disabled,Nr=x.allowClear,Br=x.placeholder;return(0,t.jsx)(ae.Q,{label:P,disabled:Lr,placeholder:Br,size:Fr,onLabelClick:function(){return ie(!D)},allowClear:Nr,bordered:s.bordered,value:tr,onClear:function(){return V?.(void 0,[],{})}})}return tr}return null};const w=M.forwardRef($);var m=l(38542),ne=l(72540),ce=l.n(ne),Oe=l(96036),he=l.n(Oe),me=["text","valueType","mode","onChange","renderFormItem","value","readonly"],xe=["placeholder"];K().extend(ce()),K().extend(he());var q=["select","radio","radioButton","checkbook"],B=function(e,o,r){var d=(0,Le.j)(r.fieldProps);return o.type==="progress"?(0,t.jsx)(Ge.Z,(0,i.Z)((0,i.Z)({},r),{},{text:e,fieldProps:(0,i.Z)({status:o.status?o.status:void 0},d)})):o.type==="money"?(0,t.jsx)(Qe.Z,(0,i.Z)((0,i.Z)({locale:o.locale},r),{},{fieldProps:d,text:e,moneySymbol:o.moneySymbol})):o.type==="percent"?(0,t.jsx)(Ue.Z,(0,i.Z)((0,i.Z)({},r),{},{text:e,showSymbol:o.showSymbol,precision:o.precision,fieldProps:d,showColor:o.showColor})):o.type==="image"?(0,t.jsx)(G.Z,(0,i.Z)((0,i.Z)({},r),{},{text:e,width:o.width})):e},ke=function(e,o,r,d){var f,c=r.mode,a=c===void 0?"read":c,P=r.emptyText,h=P===void 0?"-":P;if(h!==!1&&a==="read"&&o!=="option"&&o!=="switch"&&typeof e!="boolean"&&typeof e!="number"&&!e){var S=r.fieldProps,A=r.render;return A?A(e,(0,i.Z)({mode:a},S),(0,t.jsx)(t.Fragment,{children:h})):(0,t.jsx)(t.Fragment,{children:h})}if(delete r.emptyText,(0,ze.Z)(o)==="object")return B(e,o,r);var s=d&&d[o];if(s){if(delete r.ref,a==="read"){var C;return(C=s.render)===null||C===void 0?void 0:C.call(s,e,(0,i.Z)((0,i.Z)({text:e},r),{},{mode:a||"read"}),(0,t.jsx)(t.Fragment,{children:e}))}if(a==="update"||a==="edit"){var L;return(L=s.renderFormItem)===null||L===void 0?void 0:L.call(s,e,(0,i.Z)({text:e},r),(0,t.jsx)(t.Fragment,{children:e}))}}var ee=q.includes(o),J=!!(r.valueEnum||r.request||r.options||(f=r.fieldProps)!==null&&f!==void 0&&f.options);return(0,Te.ET)(!ee||J,"\u5982\u679C\u8BBE\u7F6E\u4E86 valueType \u4E3A ".concat(q.join(","),"\u4E2D\u4EFB\u610F\u4E00\u4E2A\uFF0C\u5219\u9700\u8981\u914D\u7F6Eoptions\uFF0Crequest, valueEnum \u5176\u4E2D\u4E4B\u4E00\uFF0C\u5426\u5219\u65E0\u6CD5\u751F\u6210\u9009\u9879\u3002")),(0,Te.ET)(!ee||J,"If you set valueType to any of ".concat(q.join(","),", you need to configure options, request or valueEnum.")),o==="money"?(0,t.jsx)(Qe.Z,(0,i.Z)((0,i.Z)({},r),{},{text:e})):o==="date"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY-MM-DD"},r))}):o==="dateWeek"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY-wo",picker:"week"},r))}):o==="dateMonth"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY-MM",picker:"month"},r))}):o==="dateQuarter"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY-[Q]Q",picker:"quarter"},r))}):o==="dateYear"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY",picker:"year"},r))}):o==="dateRange"?(0,t.jsx)(Je.Z,(0,i.Z)({text:e,format:"YYYY-MM-DD"},r)):o==="dateTime"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(k.Z,(0,i.Z)({text:e,format:"YYYY-MM-DD HH:mm:ss",showTime:!0},r))}):o==="dateTimeRange"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(Je.Z,(0,i.Z)({text:e,format:"YYYY-MM-DD HH:mm:ss",showTime:!0},r))}):o==="time"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(De,(0,i.Z)({text:e,format:"HH:mm:ss"},r))}):o==="timeRange"?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(re,(0,i.Z)({text:e,format:"HH:mm:ss"},r))}):o==="fromNow"?(0,t.jsx)(sr.Z,(0,i.Z)({text:e},r)):o==="index"?(0,t.jsx)(E.Z,{children:e+1}):o==="indexBorder"?(0,t.jsx)(E.Z,{border:!0,children:e+1}):o==="progress"?(0,t.jsx)(Ge.Z,(0,i.Z)((0,i.Z)({},r),{},{text:e})):o==="percent"?(0,t.jsx)(Ue.Z,(0,i.Z)({text:e},r)):o==="avatar"&&typeof e=="string"&&r.mode==="read"?(0,t.jsx)(lr.C,{src:e,size:22,shape:"circle"}):o==="code"?(0,t.jsx)(We.Z,(0,i.Z)({text:e},r)):o==="jsonCode"?(0,t.jsx)(We.Z,(0,i.Z)({text:e,language:"json"},r)):o==="textarea"?(0,t.jsx)(y,(0,i.Z)({text:e},r)):o==="digit"?(0,t.jsx)(ur.Z,(0,i.Z)({text:e},r)):o==="digitRange"?(0,t.jsx)(O.Z,(0,i.Z)({text:e},r)):o==="second"?(0,t.jsx)(pe.Z,(0,i.Z)({text:e},r)):o==="select"||o==="text"&&(r.valueEnum||r.request)?(0,t.jsx)(m.Z,{isLight:r.light,children:(0,t.jsx)(Me.ZP,(0,i.Z)({text:e},r))}):o==="checkbox"?(0,t.jsx)(ar.Z,(0,i.Z)({text:e},r)):o==="radio"?(0,t.jsx)(Xe.Z,(0,i.Z)({text:e},r)):o==="radioButton"?(0,t.jsx)(Xe.Z,(0,i.Z)({radioType:"button",text:e},r)):o==="rate"?(0,t.jsx)(Ce.Z,(0,i.Z)({text:e},r)):o==="slider"?(0,t.jsx)(hr,(0,i.Z)({text:e},r)):o==="switch"?(0,t.jsx)(u,(0,i.Z)({text:e},r)):o==="option"?(0,t.jsx)(vr.Z,(0,i.Z)({text:e},r)):o==="password"?(0,t.jsx)(fr.Z,(0,i.Z)({text:e},r)):o==="image"?(0,t.jsx)(G.Z,(0,i.Z)({text:e},r)):o==="cascader"?(0,t.jsx)(or.Z,(0,i.Z)({text:e},r)):o==="treeSelect"?(0,t.jsx)(w,(0,i.Z)({text:e},r)):o==="color"?(0,t.jsx)(dr.Z,(0,i.Z)({text:e},r)):o==="segmented"?(0,t.jsx)(cr.Z,(0,i.Z)({text:e},r)):(0,t.jsx)(R,(0,i.Z)({text:e},r))},xr=function(e,o){var r,d,f,c,a,P=e.text,h=e.valueType,S=h===void 0?"text":h,A=e.mode,s=A===void 0?"read":A,C=e.onChange,L=e.renderFormItem,ee=e.value,J=e.readonly,g=(0,N.Z)(e,me),p=(0,M.useContext)(se.ZP),D=(ee!==void 0||C||g?.fieldProps)&&(0,i.Z)((0,i.Z)({value:ee},(0,be.Y)(g?.fieldProps)),{},{onChange:function(){for(var b,H,Ze=arguments.length,V=new Array(Ze),W=0;W<Ze;W++)V[W]=arguments[W];g==null||(b=g.fieldProps)===null||b===void 0||(H=b.onChange)===null||H===void 0||H.call.apply(H,[b].concat(V)),C?.apply(void 0,V)}});return(0,t.jsx)(M.Fragment,{children:ke(s==="edit"?(r=(d=D?.value)!==null&&d!==void 0?d:P)!==null&&r!==void 0?r:"":(f=P??D?.value)!==null&&f!==void 0?f:"",S||"text",(0,be.Y)((0,i.Z)((0,i.Z)({ref:o},g),{},{mode:J?"read":s,renderFormItem:L?function(ie,b,H){var Ze=b.placeholder,V=(0,N.Z)(b,xe),W=L(ie,V,H);return M.isValidElement(W)?M.cloneElement(W,(0,i.Z)((0,i.Z)({},D),W.props||{})):W}:void 0,placeholder:L?void 0:(c=g?.placeholder)!==null&&c!==void 0?c:D?.placeholder,fieldProps:(0,Le.j)((0,be.Y)((0,i.Z)((0,i.Z)({},D),{},{placeholder:L?void 0:(a=g?.placeholder)!==null&&a!==void 0?a:D?.placeholder})))})),p.valueTypeMap||{})})},qe=M.forwardRef(xr);const Zr=qe}}]);
