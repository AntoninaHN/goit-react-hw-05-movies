"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{877:function(A,e,n){n.d(e,{AR:function(){return u},Hx:function(){return p},Wg:function(){return f},bI:function(){return B},xc:function(){return D}});var t=n(861),r=n(757),c=n.n(r),a="https://api.themoviedb.org/3",s="7c2b5f1208ac9dcd0fcc391e6217ace1";function o(){return i.apply(this,arguments)}function i(){return i=(0,t.Z)(c().mark((function A(){var e,n,t,r=arguments;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},A.next=4,fetch(e,n);case 4:if(!(t=A.sent).ok){A.next=11;break}return A.next=8,t.json();case 8:A.t0=A.sent,A.next=12;break;case 11:A.t0=Promise.reject(new Error("Not found"));case 12:return A.abrupt("return",A.t0);case 13:case"end":return A.stop()}}),A)}))),i.apply(this,arguments)}function u(){return o("".concat(a,"/trending/movie/day?api_key=").concat(s))}function B(A){return o("".concat(a,"/search/movie?api_key=").concat(s,"&query=").concat(A,"&language=en-US&page=1&include_adult=false"))}function f(A){return o("".concat(a,"/movie/").concat(A,"?api_key=").concat(s,"&language=en-US"))}function D(A){return o("".concat(a,"/movie/").concat(A,"/credits?api_key=").concat(s,"&language=en-US"))}function p(A){return o("".concat(a,"/movie/").concat(A,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}},76:function(A,e,n){n.r(e),n.d(e,{default:function(){return B}});var t=n(152),r=n(791),c=n(871),a=n(877),s=n(415),o="Cast_actorList__0r4HV",i="Cast_actorImg__T6qL2",u=n(184);function B(){var A=(0,c.UO)().movieId,e=(0,r.useState)(null),n=(0,t.Z)(e,2),B=n[0],f=n[1];return(0,r.useEffect)((function(){(0,a.xc)(A).then((function(A){f(A.cast)}))}),[A]),(0,u.jsx)(u.Fragment,{children:B&&(0,u.jsx)("ul",{className:o,children:B.map((function(A){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{className:i,src:A.profile_path?"https://image.tmdb.org/t/p/w500".concat(A.profile_path):s,alt:A.name}),(0,u.jsx)("p",{children:A.name}),(0,u.jsxs)("p",{children:["Character:",A.character]})]},A.id)}))})})}},415:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=76.dd63e5a2.chunk.js.map