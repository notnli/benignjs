_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"0sNQ":function(t,e){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,e){return e=this.concat.apply([],this),t>1&&e.some(Array.isArray)?e.flat(t-1):e},Array.prototype.flatMap=function(t,e){return this.map(t,e).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var e=this.constructor||Promise;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))})},"1ccW":function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},22:function(t,e,r){r("GbXU"),t.exports=r("BMP1")},"48fX":function(t,e,r){var n=r("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},BMP1:function(t,e,r){"use strict";var n=r("7KCV")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},DqTX:function(t,e,r){"use strict";var n=r("zoAU");e.__esModule=!0,e.default=function(t){var e=document.getElementsByTagName("head")[0],r=new Set(e.children);a(r,t.map((function(t){var e=n(t,2),r=e[0],i=e[1];return(0,o.createElement)(r,i)})),!1);var i=null;return{mountedInstances:new Set,updateHead:function(t){var e=i=Promise.resolve().then((function(){e===i&&(i=null,a(r,t,!0))}))}}};var o=r("q1tI"),i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function a(t,e,r){var n=document.getElementsByTagName("head")[0],o=new Set(t);e.forEach((function(e){if("title"!==e.type){for(var r=function(t){var e=t.type,r=t.props,n=document.createElement(e);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==r[o]){var a=i[o]||o.toLowerCase();n.setAttribute(a,r[o])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?n.innerHTML=u.__html||"":c&&(n.textContent="string"===typeof c?c:Array.isArray(c)?c.join(""):""),n}(e),a=t.values();;){var c=a.next(),u=c.done,s=c.value;if(null==s?void 0:s.isEqualNode(r))return void o.delete(s);if(u)break}t.add(r),n.appendChild(r)}else{var f="";if(e){var l=e.props.children;f="string"===typeof l?l:Array.isArray(l)?l.join(""):""}f!==document.title&&(document.title=f)}})),o.forEach((function(e){r&&e.parentNode.removeChild(e),t.delete(e)}))}},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},GbXU:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js",{scope:"/"}).then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))}))},IKlv:function(t,e,r){"use strict";var n=r("qVT1"),o=r("/GRZ"),i=r("i2R6"),a=r("48fX"),c=r("tCBg"),u=r("T0f4"),s=r("zoAU");function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var m={};u(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==e&&r.call(g,i)&&(m=g);var w=v.prototype=p.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var h=r("7KCV"),p=r("AroE");e.__esModule=!0,e.render=it,e.renderError=ct,e.default=e.emitter=e.router=e.version=void 0;var d=p(r("1ccW"));p(r("7KCV"));r("0sNQ");var v=p(r("q1tI")),m=p(r("i8i4")),y=r("FYa8"),g=p(r("dZ6Y")),w=r("qOIg"),E=r("elyg"),_=r("/jkW"),b=h(r("3WeD")),S=h(r("yLiY")),x=r("g/15"),L=p(r("DqTX")),P=h(r("zmvN")),T=p(r("bGXG")),k=r("nOHt"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;e.version="10.0.1";var N=A.props,R=A.err,C=A.page,O=A.query,I=A.buildId,j=A.assetPrefix,F=A.runtimeConfig,M=A.dynamicIds,D=A.isFallback,B=A.head,G=A.locales,q=A.locale,X=A.defaultLocale,U=j||"";r.p="".concat(U,"/_next/"),S.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var W=(0,x.getURL)();(0,E.hasBasePath)(W)&&(W=(0,E.delBasePath)(W));var H=new P.default(I,U,C),Y=function(t){var e=s(t,2),r=e[0],n=e[1];return H.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(t){return setTimeout((function(){return Y(t)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=Y;var V,z,K,J,Z,Q,$,tt=(0,L.default)(B),et=document.getElementById("__next");e.router=K;var rt=function(t){a(r,t);var e=l(r);function r(){return o(this,r),e.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(t,e){this.props.fn(t,e)}},{key:"componentDidMount",value:function(){this.scrollToHash(),K.isSsr&&(D||A.nextExport&&((0,_.isDynamicRoute)(K.pathname)||location.search)||N&&N.__N_SSG&&location.search)&&K.replace(K.pathname+"?"+String(b.assign(b.urlQueryToSearchParams(K.query),new URLSearchParams(location.search))),W,{_h:1,shallow:!D})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=location.hash;if(t=t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout((function(){return e.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(v.default.Component),nt=(0,g.default)();e.emitter=nt;var ot=function(){var t=n(f().mark((function t(){var r,n,o,i,a,c,u=arguments;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.length>0&&void 0!==u[0]?u[0]:{},t.next=4,H.loadPage("/_app");case 4:return r=t.sent,n=r.page,o=r.mod,Q=n,o&&o.reportWebVitals&&($=function(t){var e,r=t.id,n=t.name,i=t.startTime,a=t.value,c=t.duration,u=t.entryType,s=t.entries,f="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(e=s[0].startTime),o.reportWebVitals({id:r||f,name:n,startTime:i||e,value:null==a?c:a,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),i=R,t.prev=10,t.next=14,H.loadPage(C);case 14:a=t.sent,J=a.page,Z=a.styleSheets,t.next=21;break;case 21:t.next=28;break;case 23:if(t.prev=23,t.t0=t.catch(10),!(P.INITIAL_CSS_LOAD_ERROR in t.t0)){t.next=27;break}throw t.t0;case 27:i=t.t0;case 28:if(!window.__NEXT_PRELOADREADY){t.next=32;break}return t.next=32,window.__NEXT_PRELOADREADY(M);case 32:return e.router=K=(0,k.createRouter)(C,O,W,{initialProps:N,pageLoader:H,App:Q,Component:J,initialStyleSheets:Z,wrapApp:pt,err:i,isFallback:Boolean(D),subscription:function(t,e){return it({App:e,Component:t.Component,styleSheets:t.styleSheets,props:t.props,err:t.err})},locale:q,locales:G,defaultLocale:X}),it(c={App:Q,Component:J,styleSheets:Z,props:N,err:i}),t.abrupt("return",nt);case 40:return t.abrupt("return",{emitter:nt,render:it,renderCtx:c});case 41:case"end":return t.stop()}}),t,null,[[10,23]])})));return function(){return t.apply(this,arguments)}}();function it(t){return at.apply(this,arguments)}function at(){return(at=n(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.err){t.next=4;break}return t.next=3,ct(e);case 3:return t.abrupt("return");case 4:return t.prev=4,t.next=7,dt(e);case 7:t.next=16;break;case 9:if(t.prev=9,t.t0=t.catch(4),!t.t0.cancelled){t.next=13;break}throw t.t0;case 13:return t.next=16,ct((0,d.default)({},e,{err:t.t0}));case 16:case"end":return t.stop()}}),t,null,[[4,9]])})))).apply(this,arguments)}function ct(t){var e=t.App,r=t.err;return console.error(r),H.loadPage("/_error").then((function(n){var o=n.page,i=n.styleSheets,a=pt(e),c={Component:o,AppTree:a,router:K,ctx:{err:r,pathname:C,query:O,asPath:W,AppTree:a}};return Promise.resolve(t.props?t.props:(0,x.loadGetInitialProps)(e,c)).then((function(e){return dt((0,d.default)({},t,{err:r,Component:o,styleSheets:i,props:e}))}))}))}e.default=ot;var ut="function"===typeof m.default.hydrate;function st(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),$&&performance.getEntriesByName("Next.js-hydration").forEach($),lt())}function ft(){if(x.ST){performance.mark("afterRender");var t=performance.getEntriesByName("routeChange","mark");t.length&&(performance.measure("Next.js-route-change-to-render",t[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),$&&(performance.getEntriesByName("Next.js-render").forEach($),performance.getEntriesByName("Next.js-route-change-to-render").forEach($)),lt(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(t){return performance.clearMeasures(t)})))}}function lt(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(t){return performance.clearMarks(t)}))}function ht(t){var e=t.children;return v.default.createElement(rt,{fn:function(t){return ct({App:Q,err:t}).catch((function(t){return console.error("Error rendering page: ",t)}))}},v.default.createElement(w.RouterContext.Provider,{value:(0,k.makePublicRouterInstance)(K)},v.default.createElement(y.HeadManagerContext.Provider,{value:tt},e)))}var pt=function(t){return function(e){var r=(0,d.default)({},e,{Component:J,err:R,router:K});return v.default.createElement(ht,null,v.default.createElement(t,r))}};function dt(t){var e=t.App,r=t.Component,n=t.props,o=t.err,i=t.styleSheets;r=r||V.Component,n=n||V.props;var a=(0,d.default)({},n,{Component:r,err:o,router:K});V=a;var c,u=!1,s=new Promise((function(t,e){z&&z(),c=function(){z=null,t()},z=function(){u=!0,z=null;var t=new Error("Cancel rendering route");t.cancelled=!0,e(t)}}));var f,l,h=v.default.createElement(vt,{callback:function(){if(!ut&&!u){for(var t=new Set(i.map((function(t){return t.href}))),e=(0,P.looseToArray)(document.querySelectorAll("style[data-n-href]")),r=e.map((function(t){return t.getAttribute("data-n-href")})),n=0;n<r.length;++n)t.has(r[n])?e[n].removeAttribute("media"):e[n].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&i.forEach((function(t){var e=t.href,r=document.querySelector('style[data-n-href="'.concat(e,'"]'));r&&(o.parentNode.insertBefore(r,o.nextSibling),o=r)})),(0,P.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(t){t.parentNode.removeChild(t)})),getComputedStyle(document.body,"height")}c()}},v.default.createElement(ht,null,v.default.createElement(e,a)));return function(){if(ut)return!1;var t=(0,P.looseToArray)(document.querySelectorAll("style[data-n-href]")),e=new Set(t.map((function(t){return t.getAttribute("data-n-href")})));i.forEach((function(t){var r=t.href,n=t.text;if(!e.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(n))}}))}(),f=h,l=et,x.ST&&performance.mark("beforeRender"),ut?(m.default.hydrate(f,l,st),ut=!1):m.default.render(f,l,ft),s}function vt(t){var e=t.callback,r=t.children;return v.default.useLayoutEffect((function(){return e()}),[e]),v.default.useEffect((function(){(0,T.default)($)}),[]),r}},Lab5:function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/"===t?"/index":/^\/index(\/|$)/.test(t)?"/index".concat(t):"".concat(t);return r+e}},T0f4:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},bGXG:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n,o=r("w6Sm"),i=(location.href,!1);function a(t){n&&n(t)}e.default=function(t){n=t,i||(i=!0,(0,o.getCLS)(a),(0,o.getFID)(a),(0,o.getFCP)(a),(0,o.getLCP)(a),(0,o.getTTFB)(a))}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},tCBg:function(t,e,r){var n=r("C+bE"),o=r("qXWd");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},w6Sm:function(t,e,r){"use strict";r.r(e),r.d(e,"getCLS",(function(){return d})),r.d(e,"getFCP",(function(){return m})),r.d(e,"getFID",(function(){return y})),r.d(e,"getLCP",(function(){return w})),r.d(e,"getTTFB",(function(){return E}));var n,o,i=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:i(),isFinal:!1}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return r.observe({type:t,buffered:!0}),r}}catch(t){}},u=!1,s=!1,f=function(t){u=!t.persisted},l=function(){addEventListener("pagehide",f),addEventListener("beforeunload",(function(){}))},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(e){var r=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:r,isUnloading:u})}),{capture:!0,once:e})},p=function(t,e,r,n){var o;return function(){r&&e.isFinal&&r.disconnect(),e.value>=0&&(n||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(o||0),(e.delta||e.isFinal||void 0===o)&&(t(e),o=e.value))}},d=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("CLS",0),o=function(t){t.hadRecentInput||(n.value+=t.value,n.entries.push(t),e())},i=c("layout-shift",o);i&&(e=p(t,n,i,r),h((function(t){var r=t.isUnloading;i.takeRecords().map(o),r&&(n.isFinal=!0),e()})))},v=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,h((function(t){var e=t.timeStamp;return n=e}),!0)),{get timeStamp(){return n}}},m=function(t){var e,r=a("FCP"),n=v(),o=c("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<n.timeStamp&&(r.value=t.startTime,r.isFinal=!0,r.entries.push(t),e())}));o&&(e=p(t,r,o))},y=function(t){var e=a("FID"),r=v(),n=function(t){t.startTime<r.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,i())},o=c("first-input",n),i=p(t,e,o);o?h((function(){o.takeRecords().map(n),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,n){n.timeStamp<r.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+t}],i())}))},g=function(){return o||(o=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("LCP"),o=v(),i=function(t){var r=t.startTime;r<o.timeStamp?(n.value=r,n.entries.push(t)):n.isFinal=!0,e()},u=c("largest-contentful-paint",i);if(u){e=p(t,n,u,r);var s=function(){n.isFinal||(u.takeRecords().map(i),n.isFinal=!0,e())};g().then(s),h(s,!0)}},E=function(t){var e,r=a("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var r in t)"navigationStart"!==r&&"toJSON"!==r&&(e[r]=Math.max(t[r]-t.navigationStart,0));return e}();r.value=r.delta=e.responseStart,r.entries=[e],r.isFinal=!0,t(r)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}},yLiY:function(t,e,r){"use strict";var n;e.__esModule=!0,e.setConfig=function(t){n=t},e.default=void 0;e.default=function(){return n}},zmvN:function(t,e,r){"use strict";var n=r("qVT1"),o=r("/GRZ"),i=r("i2R6");function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=f;var h={};function p(){}function d(){}function v(){}var m={};s(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==e&&r.call(g,i)&&(m=g);var w=v.prototype=p.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var c=r("AroE");e.__esModule=!0,e.default=e.INITIAL_CSS_LOAD_ERROR=e.looseToArray=void 0;var u=c(r("dZ6Y")),s=r("elyg"),f=c(r("Lab5")),l=r("/jkW"),h=r("hS4m"),p=function(t){return[].slice.call(t)};function d(t,e){try{return document.createElement("link").relList.supports(t)}catch(r){}}function v(t){return(0,s.markLoadingError)(new Error("Error loading ".concat(t)))}e.looseToArray=p;var m=Symbol("INITIAL_CSS_LOAD_ERROR");e.INITIAL_CSS_LOAD_ERROR=m;var y=d("preload")&&!d("prefetch")?"preload":"prefetch",g=d("preload")?"preload":y;document.createElement("script");function w(t){if("/"!==t[0])throw new Error('Route name should start with a "/", got "'.concat(t,'"'));return"/"===t?t:t.replace(/\/$/,"")}function E(t,e,r,n){return new Promise((function(o,i){n=document.createElement("link"),r&&(n.as=r),n.rel=e,n.crossOrigin=void 0,n.onload=o,n.onerror=i,n.href=t,document.head.appendChild(n)}))}var _=function(){function t(e,r,n){o(this,t),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=n,this.buildId=e,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,u.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==n&&(this.loadingRoutes[n]=!0),this.promisedBuildManifest=new Promise((function(t){window.__BUILD_MANIFEST?t(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){t(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(t){window.__SSG_MANIFEST?t(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){t(window.__SSG_MANIFEST)}}))}return i(t,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(t){return t.sortedPages}))}},{key:"getDependencies",value:function(t){var e=this;return this.promisedBuildManifest.then((function(r){return r[t]?r[t].map((function(t){return"".concat(e.assetPrefix,"/_next/").concat(encodeURI(t))})):Promise.reject(v(t))}))}},{key:"getDataHref",value:function(t,e,r,n){var o=this,i=(0,h.parseRelativeUrl)(t),a=i.pathname,c=i.query,u=i.search,p=(0,h.parseRelativeUrl)(e).pathname,d=w(a),v=function(t){var e=(0,s.addLocale)((0,f.default)(t,".json"),n);return(0,s.addBasePath)("/_next/data/".concat(o.buildId).concat(e).concat(r?"":u))},m=(0,l.isDynamicRoute)(d),y=m?(0,s.interpolateAs)(a,p,c).result:"";return m?y&&v(y):v(d)}},{key:"prefetchData",value:function(t,e,r){var n=this,o=w((0,h.parseRelativeUrl)(t).pathname);return this.promisedSsgManifest.then((function(i,a){return i.has(o)&&(a=n.getDataHref(t,e,!0,r))&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(a,'"]'))&&E(a,y,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(t){var e=this;return t=w(t),new Promise((function(r,n){var o=e.pageCache[t];if(o)"error"in o?n(o.error):r(o);else{var i=function o(i){e.pageRegisterEvents.off(t,o),delete e.loadingRoutes[t],"error"in i?n(i.error):r(i)};if(e.pageRegisterEvents.on(t,i),!e.loadingRoutes[t])e.loadingRoutes[t]=!0,e.getDependencies(t).then((function(t){var e=[];return t.forEach((function(t){t.endsWith(".js")&&!document.querySelector('script[src^="'.concat(t,'"]'))&&e.push(function(t){return new Promise((function(e,r){var n=document.createElement("script");n.crossOrigin=void 0,n.src=t,n.onload=e,n.onerror=function(){return r(v(t))},document.body.appendChild(n)}))}(t)),t.endsWith(".css")&&!document.querySelector('link[rel="'.concat(g,'"][href^="').concat(t,'"]'))&&E(t,g,"fetch").catch((function(){}))})),Promise.all(e)})).catch((function(r){e.pageCache[t]={error:r},i({error:r})}))}}))}},{key:"registerPage",value:function(t,e){var r=this,o=this,i=function(){var r=n(a().mark((function r(n){var i,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e();case 3:i=r.sent,c={page:i.default||i,mod:i,styleSheets:n},o.pageCache[t]=c,o.pageRegisterEvents.emit(t,c),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),o.pageCache[t]={error:r.t0},o.pageRegisterEvents.emit(t,{error:r.t0});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}();var c=t===this.initialPage;("/_app"===t?Promise.resolve([]):(c?Promise.resolve(p(document.querySelectorAll("link[data-n-p]")).map((function(t){return t.getAttribute("href")}))):this.getDependencies(t).then((function(t){return t.filter((function(t){return t.endsWith(".css")}))}))).then((function(t){return Promise.all(t.map((function(t){return e=t,fetch(e).then((function(t){if(!t.ok)throw v(e);return t.text().then((function(t){return{href:e,text:t}}))}));var e}))).catch((function(t){throw c&&Object.defineProperty(t,m,{}),t}))}))).then((function(t){return i(t)}),(function(e){r.pageCache[t]={error:e},r.pageRegisterEvents.emit(t,{error:e})}))}},{key:"prefetch",value:function(t,e){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(e)n=t;else;return Promise.all(document.querySelector('link[rel="'.concat(y,'"][href^="').concat(n,'"]'))?[]:[n&&E(n,y,n.endsWith(".css")?"fetch":"script"),!e&&this.getDependencies(t).then((function(t){return Promise.all(t.map((function(t){return o.prefetch(t,!0)})))}))]).then((function(){}),(function(){}))}}]),t}();e.default=_}},[[22,1,0,3]]]);
//# sourceMappingURL=main-7226efe4739c97af2ee5.js.map