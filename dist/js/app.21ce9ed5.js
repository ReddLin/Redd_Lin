(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],d=0,s=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4846a729":"672d17e2","chunk-7063e3aa":"e1bc258c","chunk-71ba2efc":"59d352af","chunk-9d199cac":"fdee78d3"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4846a729":1,"chunk-7063e3aa":1,"chunk-71ba2efc":1,"chunk-9d199cac":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4846a729":"8602eaa2","chunk-7063e3aa":"4a63fc20","chunk-71ba2efc":"100a4929","chunk-9d199cac":"29776592"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],d=l.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Redd_Lin/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App"},c=i,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),d=l.exports,s=(n("d3b7"),n("8c4f"));r["a"].use(s["a"]);var f=[{path:"/Redd_Lin/",redirect:"/Redd_Lin/intro",name:"index",component:function(){return n.e("chunk-9d199cac").then(n.bind(null,"d9ce"))},meta:{title:"Redd Lin Profile"},children:[{path:"/Redd_Lin/intro",name:"intro",meta:{title:"Intro"},component:function(){return n.e("chunk-4846a729").then(n.bind(null,"ba18"))}},{path:"/Redd_Lin/experience",name:"experience",meta:{title:"Experience"},component:function(){return n.e("chunk-71ba2efc").then(n.bind(null,"92e8"))}},{path:"/Redd_Lin/skill",name:"skill",meta:{title:"Skill"},component:function(){return n.e("chunk-7063e3aa").then(n.bind(null,"f603"))}}]}],p=new s["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:f}),h=n("a925"),m={__chineseName:"林明鴻",__englishName:"Redd Lin",__topIntro:"目前已有5年的前端網頁以及3年後端架構的經驗，主要以JAVA、nodeJs為網頁架構，配上HTML、Vue框架編輯前端頁面，以及開發功能系統後台、撰寫前端或是外部使用的API接口。",__aboutMe:"About Me",__jobName:"前端工程師",__education:"EDUCATION:",__educationTime:"2012 年 9 月 - 2014 年 6 月",__educationTitle:"中原大學資訊工程學系碩士 畢",__address:"New Taipei City，TW",__mail:"Mail：",__phone:"Phone：",__followMe:"Follow Me",__skill:"Skill",__copyright:"Copyright © 2020"};r["a"].use(h["a"]);var _=localStorage.getItem("locale")||"tw",v=new h["a"]({locale:_,messages:{tw:m}}),b=v;r["a"].config.productionTip=!1,p.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()})),new r["a"]({router:p,i18n:b,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.21ce9ed5.js.map