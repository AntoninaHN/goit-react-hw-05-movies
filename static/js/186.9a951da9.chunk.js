"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{877:function(n,e,t){t.d(e,{AR:function(){return f},Hx:function(){return d},Wg:function(){return h},bI:function(){return l},xc:function(){return p}});var c=t(861),r=t(757),a=t.n(r),u="https://api.themoviedb.org/3",o="7c2b5f1208ac9dcd0fcc391e6217ace1";function i(){return s.apply(this,arguments)}function s(){return s=(0,c.Z)(a().mark((function n(){var e,t,c,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(e,t);case 4:if(!(c=n.sent).ok){n.next=11;break}return n.next=8,c.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return i("".concat(u,"/trending/movie/day?api_key=").concat(o))}function l(n){return i("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}function h(n){return i("".concat(u,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function p(n){return i("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function d(n){return i("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},186:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var c=t(152),r=t(791),a=t(871),u=t(877),o=t(184);function i(){var n=(0,a.UO)().movieId,e=(0,r.useState)(null),t=(0,c.Z)(e,2),i=t[0],s=t[1];return(0,r.useEffect)((function(){(0,u.Hx)(n).then((function(n){return s(n.results)}))}),[n]),(0,o.jsx)(o.Fragment,{children:i&&(0,o.jsx)("ul",{children:i.map((function(n){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author:",n.author]}),(0,o.jsx)("p",{children:n.content})]},n.author_details.username)}))})})}}}]);
//# sourceMappingURL=186.9a951da9.chunk.js.map