(this.webpackJsonpanime_library=this.webpackJsonpanime_library||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(42),o=a.n(c),s=a(147),u=a(159),d=a(145),p=a.p+"static/media/1.9bf76863.png",l=a(148),b=a(150),j=a(151),x=a(79),h=a.n(x),f=a(80),g=a.n(f),O=a(37),m=function(){return Object(O.b)()},v=O.c,y=a(5),w=a(26),k=a(30),C=a.n(k),D=a(14),S=a(47),L=a(48),R=a.n(L),A=Object(w.b)("anime/searchData",function(){var e=Object(S.a)(C.a.mark((function e(t,a){var n,r,i,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(D.a)(t,2),r=n[0],i=n[1],e.prev=1,e.next=4,R()({method:"get",baseURL:"https://kitsu.io/api/edge/anime?filter[".concat(i,"]=").concat(r,"&page[limit]=9&page[offset]=0"),timeout:5e3});case 4:return c=e.sent,e.abrupt("return",c.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a.rejectWithValue("Anime not found"));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(w.b)("anime/searchData",function(){var e=Object(S.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R()({method:"get",baseURL:"https://kitsu.io/api/edge/anime?page[limit]=9&page[offset]=0"});case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue("Anime not found"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(w.b)("anime/categories",function(){var e=Object(S.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R()({method:"get",baseURL:"https://kitsu.io/api/edge/categories?page[limit]=20"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue("Categories not found"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),E={value:"",animeData:[],loading:!1,error:"",categories:void 0},V=Object(w.c)({name:"search",initialState:E,reducers:{changeValueSearch:function(e,t){e.value=t.payload}},extraReducers:(n={},Object(y.a)(n,A.fulfilled.type,(function(e,t){e.loading=!1,e.error="",e.animeData=t.payload})),Object(y.a)(n,A.pending.type,(function(e,t){e.loading=!0})),Object(y.a)(n,A.rejected.type,(function(e,t){e.loading=!1,e.error=t.payload})),Object(y.a)(n,I.fulfilled.type,(function(e,t){e.loading=!1,e.error="",e.animeData=t.payload})),Object(y.a)(n,I.pending.type,(function(e,t){e.loading=!0})),Object(y.a)(n,I.rejected.type,(function(e,t){e.loading=!1,e.error=t.payload})),Object(y.a)(n,W.fulfilled.type,(function(e,t){e.categories=t.payload,e.error=""})),Object(y.a)(n,W.pending.type,(function(e,t){})),Object(y.a)(n,W.rejected.type,(function(e,t){e.error=t.payload})),n)}),U=V.actions.changeValueSearch,B=V.reducer,z=a(7),G=a(135),J=a(143),M=a(146),P=Object(z.a)("div")((function(e){var t=e.theme;return Object(y.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(G.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(G.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),_=Object(z.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),K=Object(z.a)(J.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(y.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),T=Object(z.a)(M.a)((function(e){var t=e.theme;return Object(y.a)({},t.breakpoints.up("md"),{display:"none"})})),q=a(2),F=function(){var e=v((function(e){return e.search})).value,t=m();return Object(q.jsx)(s.a,{sx:{flexGrow:1},children:Object(q.jsx)(l.a,{position:"static",sx:{background:"linear-gradient(90deg, #f598a8, #f6edb2)"},children:Object(q.jsxs)(b.a,{children:[Object(q.jsx)(T,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(q.jsx)(h.a,{})}),Object(q.jsx)(j.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"Anime Library"}),Object(q.jsxs)(P,{children:[Object(q.jsx)(_,{children:Object(q.jsx)(g.a,{})}),Object(q.jsx)(K,{onChange:function(e){t(U(e.target.value))},onKeyUp:function(a){"Enter"===a.key&&e.trim()&&t(A([e,"text"]))},value:e,placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})})},H=a(155),N=a(152),Q=a(153),X=a(154),Y={actionArea:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}},Z=function(e){var t=e.img,a=e.title,n=e.startDate,r=e.id;return Object(q.jsx)(N.a,{id:r,sx:{flex:"0 0 32.5%"},children:Object(q.jsxs)(Q.a,{sx:Y.actionArea,children:[Object(q.jsx)("img",{src:t,style:{display:"block",width:"100%"}}),Object(q.jsxs)(X.a,{children:[Object(q.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:a}),Object(q.jsxs)(j.a,{variant:"body2",color:"text.secondary",children:["Start date : ",n]})]})]})})},$=Object(r.memo)(Z),ee=Object(z.a)(s.a)((function(e){var t=e.theme;return{position:"relative",backgroundColor:"white",padding:t.spacing(1),color:t.palette.text.secondary,boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",display:"flex",flexWrap:"wrap",gap:10}})),te=function(){var e=m(),t=v((function(e){return e.search})),a=t.animeData,n=t.loading,i=null===a||void 0===a?void 0:a.map((function(e){return Object(q.jsx)($,{img:e.attributes.posterImage.small,title:e.attributes.titles.en,startDate:e.attributes.startDate,id:e.id},e.id)}));return Object(r.useEffect)((function(){e(I())}),[]),Object(q.jsxs)(ee,{children:[n&&Object(q.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%"},children:Object(q.jsx)(H.a,{})}),i]})},ae=a(156),ne=a(157),re=a(158),ie=Object(z.a)(s.a)((function(e){var t=e.theme;return{backgroundColor:"white",padding:"".concat(t.spacing(1)," 0"),color:t.palette.text.secondary,boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"}})),ce=function(){var e=v((function(e){return e.search})).categories,t=m();Object(r.useEffect)((function(){t(W())}),[]);var a=null===e||void 0===e?void 0:e.data.map((function(e){return Object(q.jsx)(ae.a,{onClick:function(){return a=e.attributes.title,void t(A([a,"categories"]));var a},children:Object(q.jsx)(ne.a,{children:e.attributes.title})},e.id)}));return Object(q.jsxs)(ie,{children:[Object(q.jsx)(j.a,{variant:"h5",sx:{padding:"0 8px"},children:"Categories"}),Object(q.jsx)(re.a,{component:"nav","aria-label":"secondary mailbox folder",children:a})]})},oe={paddingTop:"64px",backgroundImage:"url(".concat(p,")"),backgroundColor:"#eee6e1",width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"-400px -100px"},se=function(){return Object(q.jsx)(s.a,{sx:oe,children:Object(q.jsxs)(u.a,{maxWidth:"lg",children:[Object(q.jsx)(F,{}),Object(q.jsxs)(d.a,{container:!0,spacing:1,children:[Object(q.jsx)(d.a,{item:!0,xs:3,children:Object(q.jsx)(ce,{})}),Object(q.jsx)(d.a,{item:!0,xs:9,children:Object(q.jsx)(te,{})})]})]})})},ue=a(141),de=Object(w.a)({reducer:{search:B}});o.a.render(Object(q.jsxs)(i.a.StrictMode,{children:[Object(q.jsx)(ue.a,{}),Object(q.jsx)(O.a,{store:de,children:Object(q.jsx)(se,{})})]}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.f5cf3dfe.chunk.js.map