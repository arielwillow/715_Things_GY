(function(n){function t(t){for(var a,i,r=t[0],c=t[1],u=t[2],h=0,l=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);g&&g(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],a=!0,i=1;i<e.length;i++){var r=e[i];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),n=c(c.s=e[0]))}return n}var a={},i={app:0},s={app:0},o=[];function r(n){return c.p+"js/"+({}[n]||n)+"."+{"chunk-14ca8771":"06f7ba2d","chunk-286a35fe":"52b0ef5f","chunk-2d237770":"6f9cb6a7","chunk-11ba5fa8":"7ceecfb8","chunk-24dd91cc":"1be39c02","chunk-68d08d18":"8df4bbae","chunk-6a60c879":"b4e99e79","chunk-7720c292":"937e8417"}[n]+".js"}function c(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(n){var t=[],e={"chunk-14ca8771":1,"chunk-286a35fe":1,"chunk-11ba5fa8":1,"chunk-24dd91cc":1,"chunk-68d08d18":1,"chunk-6a60c879":1,"chunk-7720c292":1};i[n]?t.push(i[n]):0!==i[n]&&e[n]&&t.push(i[n]=new Promise((function(t,e){for(var a="css/"+({}[n]||n)+"."+{"chunk-14ca8771":"3136e6a4","chunk-286a35fe":"fe829813","chunk-2d237770":"31d6cfe0","chunk-11ba5fa8":"86a3bdc4","chunk-24dd91cc":"f7d7e700","chunk-68d08d18":"d6832923","chunk-6a60c879":"e4c92216","chunk-7720c292":"667d4ef4"}[n]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],h=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(h===a||h===s))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],h=u.getAttribute("data-href");if(h===a||h===s)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[n],g.parentNode.removeChild(g),e(o)},g.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){i[n]=0})));var a=s[n];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,e){a=s[n]=[t,e]}));t.push(a[2]=o);var u,h=document.createElement("script");h.charset="utf-8",h.timeout=120,c.nc&&h.setAttribute("nonce",c.nc),h.src=r(n);var l=new Error;u=function(t){h.onerror=h.onload=null,clearTimeout(g);var e=s[n];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,e[1](l)}s[n]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:h})}),12e4);h.onerror=h.onload=u,document.head.appendChild(h)}return Promise.all(t)},c.m=n,c.c=a,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)c.d(e,a,function(t){return n[t]}.bind(null,a));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/715_Things_GY/",c.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],h=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var g=h;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"1a5e":function(n,t,e){"use strict";var a=e("d4ab"),i=e.n(a);i.a},"56d7":function(n,t,e){"use strict";e.r(t);var a=e("2b0e"),i=e("5f5b"),s=e("b1e0"),o=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"app"},[a("audio",{ref:"bgMusic",attrs:{src:e("67d3"),loop:"loop",preload:"auto"},on:{canplaythrough:n.updateStatus}}),"/home"===n.rout&&"origin"===n.status?a("div",{staticClass:"mscDiv1"},[a("div",{staticClass:"mscBtn1",on:{click:n.playMusic}})]):n._e(),"/home"===n.rout&&"load"===n.status?a("div",{staticClass:"mscDiv2"},[a("div",{staticClass:"mscBtn2"})]):n._e(),"/home"===n.rout&&"play"===n.status?a("div",{staticClass:"mscDiv3"},[a("div",{staticClass:"mscBtn3",on:{click:n.playMusic}})]):n._e(),a("transition",{attrs:{name:"slide-left"}},[a("router-view",{on:{login:n.saveName}})],1)],1)},r=[],c={data(){const n=this.$router.currentRoute.fullPath;return{name:"",rout:n,status:"origin",already:0}},watch:{$route(n){"/"!==n.path&&"/home"!==n.path?this.rout="123":"/home"===n.path?this.rout="/home":this.rout="/"}},methods:{saveName(n){this.name=n},playMusic(){const{bgMusic:n}=this.$refs;n.paused&&1===this.already?(n.play(),this.status="play"):n.paused&&0===this.already?(n.play(),this.status="load"):(n.pause(),this.status="origin")},updateStatus(){this.already=1,"load"===this.status&&(this.status="play")}},mounted(){const{NODE_ENV:n}=Object({NODE_ENV:"production",BASE_URL:"/715_Things_GY/"});document.documentElement.className=n}},u=c,h=(e("5c0b"),e("2877")),l=Object(h["a"])(u,o,r,!1,null,null,null),g=l.exports,p=e("8c4f"),d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"page-container"},[e("div",{staticClass:"loading-panel"},[e("p",[n._v("送给24岁的高先生")]),e("p"),e("p",[n._v("也送给喜欢高杨的你")]),e("p"),e("p",[n._v(n._s(n.percent))])])])},f=[],m={data(){return{count:0,percent:"0%"}},mounted(){this.preload()},methods:{preload(){const n=["/715_Things_GY/img/mscBtn.png","/715_Things_GY/img/title.png","/715_Things_GY/img/nextBtn.png","/715_Things_GY/img/con.png","/715_Things_GY/img/inputBg.png","/715_Things_GY/img/error.png","/715_Things_GY/img/backBtn.png","/715_Things_GY/img/selectTop.png","/715_Things_GY/img/endingTxt.png","/715_Things_GY/img/wishBg.png","/715_Things_GY/img/avatar.png","/715_Things_GY/img/loading.png","/715_Things_GY/img/title3.png","/715_Things_GY/img/backS.png","/715_Things_GY/things/1.png","/715_Things_GY/things/2.png","/715_Things_GY/things/3.png","/715_Things_GY/things/4.png","/715_Things_GY/things/5.png","/715_Things_GY/things/6.png","/715_Things_GY/things/7.png","/715_Things_GY/things/8.png","/715_Things_GY/things/9.png","/715_Things_GY/things/10.png","/715_Things_GY/things/11.png","/715_Things_GY/things/12.png","/715_Things_GY/things/13.png","/715_Things_GY/things/14.png","/715_Things_GY/things/15.png","/715_Things_GY/things/16.png","/715_Things_GY/things/17.png","/715_Things_GY/things/18.png","/715_Things_GY/things/19.png","/715_Things_GY/things/20.png","/715_Things_GY/things/21.png"];for(let t=0,e=n.length;t<e;t+=1){const e=new Image;e.src=n[t],e.onload=()=>{this.count+=1;const n=Math.floor(this.count/35*100);this.percent=n+"%"}}}},watch:{count(n){35===n&&(this.rout="/home",this.$router.replace({path:"home"}))}}},_=m,b=(e("1a5e"),Object(h["a"])(_,d,f,!1,null,"7172c0a6",null)),v=b.exports;a["default"].use(p["a"]);const T=[{path:"/",name:"predload",component:v},{path:"/home",name:"home",component:()=>e.e("chunk-68d08d18").then(e.bind(null,"bb51"))},{path:"/login",name:"login",component:()=>Promise.all([e.e("chunk-2d237770"),e.e("chunk-11ba5fa8")]).then(e.bind(null,"a55b"))},{path:"/name",name:"name",component:()=>e.e("chunk-6a60c879").then(e.bind(null,"bb7b"))},{path:"/list",name:"list",component:()=>e.e("chunk-7720c292").then(e.bind(null,"1a33"))},{path:"/loading",name:"loading",component:()=>e.e("chunk-14ca8771").then(e.bind(null,"45d6"))},{path:"/share",name:"share",component:()=>e.e("chunk-286a35fe").then(e.bind(null,"fbd8"))},{path:"/group",name:"group",component:()=>Promise.all([e.e("chunk-2d237770"),e.e("chunk-24dd91cc")]).then(e.bind(null,"4ebe"))}],k=new p["a"]({routes:T});var y=k;a["default"].directive("focus",{inserted(n){n.focus()}});e("f9e3"),e("2dd8");var G={Name:"",Wish:"",Selection:[],Globalheight:0,setName(n){this.Name=n},setWish(n){this.Wish=n},setSelection(n){this.Selection=n},setGlobalheight(n){this.Globalheight=n}};a["default"].use(i["a"]),a["default"].use(s["a"]),a["default"].config.productionTip=!1,a["default"].prototype.VAR=G,new a["default"]({router:y,render:n=>n(g)}).$mount("#app")},"5c0b":function(n,t,e){"use strict";var a=e("9c0c"),i=e.n(a);i.a},"67d3":function(n,t,e){n.exports=e.p+"media/bg.8521baf2.mp3"},"9c0c":function(n,t,e){},d4ab:function(n,t,e){}});
//# sourceMappingURL=app.8aaeff0d.js.map