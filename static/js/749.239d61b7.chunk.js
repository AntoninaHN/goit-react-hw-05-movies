"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[749],{877:function(n,e,t){t.d(e,{AR:function(){return f},Hx:function(){return g},Wg:function(){return d},bI:function(){return l},xc:function(){return p}});var c=t(861),r=t(757),a=t.n(r),i="https://api.themoviedb.org/3",u="7c2b5f1208ac9dcd0fcc391e6217ace1";function o(){return s.apply(this,arguments)}function s(){return s=(0,c.Z)(a().mark((function n(){var e,t,c,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(e,t);case 4:if(!(c=n.sent).ok){n.next=11;break}return n.next=8,c.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return o("".concat(i,"/trending/movie/day?api_key=").concat(u))}function l(n){return o("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}function d(n){return o("".concat(i,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function p(n){return o("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function g(n){return o("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}},749:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var c=t(152),r=t(791),a=t(504),i=t(871),u=t(877),o="HomePage_title__Iqtik",s=t(184);function f(){var n=(0,i.TH)(),e=(0,r.useState)(null),t=(0,c.Z)(e,2),f=t[0],l=t[1];return(0,r.useEffect)((function(){(0,u.AR)().then((function(n){return l(n.results)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:o,children:"Trending today"}),f&&(0,s.jsx)("ul",{children:f.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),state:n,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=749.239d61b7.chunk.js.map