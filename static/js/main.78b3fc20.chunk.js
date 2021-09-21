(this["webpackJsonpk6-star-wars-challenge-ts"]=this["webpackJsonpk6-star-wars-challenge-ts"]||[]).push([[0],{35:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var r,a,c,i,s,o,u,l,f,d,j,b,p=t(1),h=t.n(p),m=t(23),x=t.n(m),O=(t(35),t(13)),g=t(6),v=t(5),w=t.p+"static/media/logo.0489f5cd.png",y=t.p+"static/media/starfield-bg.ac306ea2.png",k=t.p+"static/media/StarJedi.13d540eb.woff",S=t.p+"static/media/StarJedi.74a9f1ff.woff2",F=t(0),C={yellow:"#dba90d",bg:"#000",jediFont:"Star Jedi",textFont:"Libre Franklin"},U=Object(v.b)(r||(r=Object(g.a)(["\n  @font-face {\n    font-family: 'Star Jedi';\n    src: url(",") format('woff2'),\n        url({","}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  body {\n    background: #000 url(",");\n  }\n"])),k,S,y),J=v.c.div(a||(a=Object(g.a)(["\n  width: 800px;\n  margin: 0 auto;\n"]))),N=v.c.img(c||(c=Object(g.a)(["\n  max-width: 100%;\n  margin-bottom: 50px;\n"]))),D=v.c.div(i||(i=Object(g.a)(["\n  font-size: 18px;\n  * {\n    color: ",";\n    font-family: ",";\n  }\n"])),(function(n){return n.theme.yellow}),(function(n){return n.theme.textFont})),E=function(n){var e=n.children;return Object(F.jsx)(v.a,{theme:C,children:Object(F.jsxs)(J,{children:[Object(F.jsx)(U,{}),Object(F.jsx)(N,{src:w,alt:"logo"}),Object(F.jsx)(D,{children:e})]})})},z=t(12),R=v.c.button(s||(s=Object(g.a)(["\n  background: ",";\n  color: ",";\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-family: ",";\n"])),(function(n){return n.theme.yellow}),(function(n){return n.theme.bg}),(function(n){return n.theme.jediFont})),Y=function(n){var e=n.style,t=n.children,r=n.onClick;return Object(F.jsx)(R,{style:e,onClick:r,children:t})},_=v.c.form(o||(o=Object(g.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),W=v.c.input(u||(u=Object(g.a)(["\n  border: 4px solid ",";\n  background: transparent;\n  font-weight: bold;\n  font-size: 22px;\n  &:focus {\n    outline: none;\n  }\n  flex-grow: 1;\n  text-align: center;\n"])),(function(n){return n.theme.yellow})),q=function(n){return function(e){e.preventDefault();var t=e.target;n(t.query.value)}},P=function(n){var e=n.setQuery;return Object(F.jsxs)(_,{onSubmit:q(e),children:[Object(F.jsx)(W,{name:"query",placeholder:"Search Star Wars Characters"}),Object(F.jsx)(Y,{style:{fontSize:"24px"},children:"Submit"})]})},T=function(n,e){var t=Object(O.b)(n,e),r=t.data,a=t.error;if(a)throw a;return{data:r}},A=t(7),I=t.n(A),L=t(8),B=t(3),Q=B.Record({name:B.String,films:B.Array(B.String),url:B.String,homeworld:B.String,species:B.Array(B.String)}),H=B.Record({count:B.Number,results:B.Array(Q)}),M=function(){var n=Object(L.a)(I.a.mark((function n(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:throw new Error;case 3:return t=n.sent,n.abrupt("return",H.check(t));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),G=B.Record({name:B.String,population:B.String}),K=function(){var n=Object(L.a)(I.a.mark((function n(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn(e);case 2:return t=n.sent,n.abrupt("return",G.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),V=B.Record({title:B.String,release_date:B.String,opening_crawl:B.String,url:B.String}),X=function(){var n=Object(L.a)(I.a.mark((function n(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn(e);case 2:return t=n.sent,n.abrupt("return",V.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=Object(L.a)(I.a.mark((function n(e){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(n){return X(n)}))));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),$=B.Record({name:B.String}),nn=function(){var n=Object(L.a)(I.a.mark((function n(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn(e);case 2:return t=n.sent,n.abrupt("return",$.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),en=function(){var n=Object(L.a)(I.a.mark((function n(e){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(n){return nn(n)}))));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),tn=function(){var n=Object(L.a)(I.a.mark((function n(e){var t,r;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Failed to fetch ".concat(e));case 5:return n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),rn=v.c.div(l||(l=Object(g.a)(["\n  margin: ",";\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n\n  > div {\n    background-color: ",";\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    margin: 0 3px 0 0;\n\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  }\n\n  .rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n  }\n\n  .rect3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  .rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n  }\n\n  .rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n  }\n\n  @-webkit-keyframes sk-stretchdelay {\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n    20% { -webkit-transform: scaleY(1.0) }\n  }\n\n  @keyframes sk-stretchdelay {\n    0%, 40%, 100% {\n      transform: scaleY(0.4);\n      -webkit-transform: scaleY(0.4);\n    }  20% {\n      transform: scaleY(1.0);\n      -webkit-transform: scaleY(1.0);\n    }\n  }\n"])),(function(n){return n.inline?"5px":"100px auto"}),(function(n){return n.theme.yellow})),an=function(n){var e=n.inline;return Object(F.jsxs)(rn,{inline:e,children:[Object(F.jsx)("div",{className:"rect1"}),Object(F.jsx)("div",{className:"rect2"}),Object(F.jsx)("div",{className:"rect3"}),Object(F.jsx)("div",{className:"rect4"}),Object(F.jsx)("div",{className:"rect5"})]})},cn=function(n){var e=n.title,t=n.releaseDate,r=n.openingCrawl;return Object(F.jsxs)("div",{children:[Object(F.jsxs)("h3",{children:[e," (",t,")"]}),Object(F.jsx)("p",{children:on(r,150)})]})},sn=function(n){return n.sort((function(n,e){return new Date(e.release_date).getTime()-new Date(n.release_date).getTime()}))},on=function(n,e){return n.substring(0,e)+(n.length>e?"...":"")},un=function(n){var e=n.movieUrls,t=T(JSON.stringify(e),(function(){return Z(e)})).data;if(!t)return Object(F.jsx)(an,{inline:!0});var r=sn(t).map((function(n){return Object(F.jsx)(cn,{title:n.title,releaseDate:n.release_date,openingCrawl:n.opening_crawl},n.url)}));return Object(F.jsx)("div",{children:r})},ln=v.c.div(f||(f=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  vertical-align: middle;\n  align-items: center;\n"]))),fn=v.c.div(d||(d=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  margin-right: 10px;\n  align-items: center;\n"]))),dn=v.c.h2(j||(j=Object(g.a)(["\n  font-size: 24px;\n  margin: 0;\n  span {\n    font-size: 16px;\n    font-weight: 300;\n  }\n"]))),jn=function(n){var e=n.homeWorldUrl,t=T(e,K).data;return t?Object(F.jsxs)("div",{children:[t.name,", pop.: ",t.population]}):null},bn=function(n){var e=n.speciesUrls,t=T(JSON.stringify(e),(function(){return en(e)})).data;return t?0===t.length?Object(F.jsx)(F.Fragment,{children:"Human"}):Object(F.jsx)(F.Fragment,{children:t.map((function(n){return n.name})).join(" ")}):null},pn=function(n){var e=n.name,t=n.homeWorldUrl,r=n.movieUrls,a=n.species,c=Object(p.useState)(!1),i=Object(z.a)(c,2),s=i[0],o=i[1];return Object(F.jsxs)("div",{children:[Object(F.jsxs)(ln,{children:[Object(F.jsxs)(fn,{children:[Object(F.jsxs)(dn,{children:[e," ",Object(F.jsx)("span",{children:Object(F.jsx)(bn,{speciesUrls:a})})]}),Object(F.jsx)(jn,{homeWorldUrl:t})]}),Object(F.jsx)(Y,{onClick:function(){return o(!s)},children:"show movies"})]}),s&&Object(F.jsx)(un,{movieUrls:r})]})},hn=v.c.div(b||(b=Object(g.a)(["\n  border-bottom: 2px solid ",";\n  padding: 10px 0;\n  &:last-child {\n    border: none;\n  }\n"])),(function(n){return n.theme.yellow})),mn=function(n){var e=n.query,t=T("/search/".concat(e),(function(){return M(e)})).data;if(!t)return Object(F.jsx)(an,{});var r=t.results.map((function(n){return Object(F.jsx)(hn,{children:Object(F.jsx)(pn,{name:n.name,homeWorldUrl:n.homeworld,movieUrls:n.films,species:n.species},n.url)})}));return Object(F.jsx)("div",{children:r})},xn=function(){var n=Object(p.useState)(""),e=Object(z.a)(n,2),t=e[0],r=e[1],a=t&&""!==t.trim();return Object(F.jsxs)("div",{children:[Object(F.jsx)(P,{setQuery:r}),a&&Object(F.jsx)(mn,{query:t})]})},On=t(27),gn=t(28),vn=t(30),wn=t(29),yn=function(n){Object(vn.a)(t,n);var e=Object(wn.a)(t);function t(n){var r;return Object(On.a)(this,t),(r=e.call(this,n)).state={hasError:!1},r}return Object(gn.a)(t,[{key:"render",value:function(){return this.state.hasError?Object(F.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(h.a.Component),kn={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1},Sn=function(){return Object(F.jsx)(O.a,{value:kn,children:Object(F.jsx)(E,{children:Object(F.jsx)(yn,{children:Object(F.jsx)(xn,{})})})})},Fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};x.a.render(Object(F.jsx)(h.a.StrictMode,{children:Object(F.jsx)(Sn,{})}),document.getElementById("root")),Fn()}},[[62,1,2]]]);
//# sourceMappingURL=main.78b3fc20.chunk.js.map