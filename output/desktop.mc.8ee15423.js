/*! For license information please see desktop.mc.8ee15423.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[967,691],{813:(t,e,r)=>{t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}([function(t,e){t.exports=r(7294)},function(t,e){t.exports=r(1715)},function(t,e){t.exports=r(8926)},function(t,e){t.exports=r(8)},function(t,e){t.exports=r(3038)},function(t,e){t.exports=r(1539)},function(t,e){t.exports=r(8674)},function(t,e){t.exports=r(2564)},function(t,e){t.exports=r(5666)},function(t,e){t.exports=r(9254)},function(t,e){t.exports=r(5884)},function(t,e){t.exports=r(4301)},function(t,e){t.exports=r(2222)},function(t,e){t.exports=r(1249)},function(t,e){t.exports=r(6977)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(3),a=r.n(i),c=(r(5),r(6),r(7),r(4)),u=r.n(c),s=r(1),l=r.n(s),f=(r(8),r(2)),h=r.n(f);function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function d(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,o)&&(m=g);var w=v.prototype=h.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function c(){return new e((function(n,c){!function n(o,i,c,u){var s=l(t[o],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==a()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var d=function(){var t=h()(p().mark((function t(){var e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.rambler.ru/api/v4/weather/",{credentials:"include"});case 3:if((e=t.sent)&&!1!==e.ok){t.next=6;break}throw new Error("@media-components/header-extension: Не удалось получить weather");case 6:return t.next=8,e.json();case 8:if(r=t.sent,!l()(r)){t.next=11;break}throw new Error("@media-components/header-extension: Ошибка парсинга weather");case 11:return t.abrupt("return",r);case 14:return t.prev=14,t.t0=t.catch(0),console.error(t.t0.message),t.abrupt("return",null);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,o)&&(m=g);var w=d.prototype=h.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function c(){return new e((function(n,c){!function n(o,i,c,u){var s=l(t[o],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==a()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,u(w,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}r(11);var m=function(){var t=h()(v().mark((function t(){var e,r,n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"undefined"!=typeof window&&(e={credentials:"include"}),t.prev=1,t.next=4,fetch("https://www.rambler.ru/api/v4/currencies/",e);case 4:if((r=t.sent)&&!1!==r.ok){t.next=7;break}throw new Error("@media-components/header-extension: Не удалось получить currencies");case 7:return t.next=9,r.json();case 9:if(n=t.sent,!l()(n)){t.next=12;break}throw new Error("@media-components/header-extension: Ошибка парсинга currencies");case 12:return t.abrupt("return",n);case 15:return t.prev=15,t.t0=t.catch(1),console.error(t.t0.message),t.abrupt("return",null);case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(){return t.apply(this,arguments)}}(),y=(r(9),r(10)),g=r.n(y),w={root:"rui__1lBb-t4",widget:"rui__1NJcqsX",link:"rui__38P4P86",locative:"rui__2Lf7kEV",currency:"rui__3GVxjnm",delta:"rui__2oJ89bN",icon:"rui__3YX6c-d",cloudy:"rui__1VhEbCR","clear-night":"rui__1VpRdYj",clear:"rui__36a4dX7",fog:"rui__2rQTT9D","light-rain":"rui__29_LVAl","light-rain-night":"rui__1H-kkH-","rain-night":"rui__2OoNE5y","occ-rain":"rui__2aybOZf","occ-snow":"rui__1CNMRLE","light-snow-night":"rui__1XXcoDW","snow-night":"rui__Id6yMml",thunder:"rui__6HNRms6",snow:"rui__2_wlpog",rain:"rui__1pXfLFj",sleet:"rui__CKxVHPE","partly-cloudy":"rui__12o6BU2","partly-cloudy-night":"rui__9RalLah"},_=function(t){var e=t.data;return o.a.createElement("a",{className:w.link,href:"https://weather.rambler.ru/".concat(e.city,"/"),target:"_blank",rel:"noopener","data-cerber":"header::widgets::weather::link"},e.now.temp,"°",o.a.createElement("span",{className:g()(w.icon,w[e.now.alias])}),o.a.createElement("span",{className:w.locative},e.locative.length>20?"".concat(e.locative.substr(0,19),"..."):e.locative))},x=(r(12),r(13),r(14),{USD:"$",EUR:"€"}),b=function(t){var e=t.data;return o.a.createElement(o.a.Fragment,null,e.map((function(t){return x[t.code]?o.a.createElement("a",{key:t.code,className:w.link,href:t.url,target:"_blank",rel:"noopener","data-cerber":"header::widgets::currency::".concat(t.code.toLowerCase())},o.a.createElement("span",{className:w.currency},x[t.code]),o.a.createElement("span",{className:w.value},t.value.toFixed(2)),t.delta&&o.a.createElement("span",{className:w.delta},"".concat(t.delta<0?"":"+").concat(t.delta.toFixed(2)))):null})))};r.d(e,"fetchCurrencies",(function(){return m})),e.default=function(t){var e,r,i,a,c,s=t.currencies,f=(e=t.reloadKey,r=Object(n.useState)(null),a=(i=u()(r,2))[0],c=i[1],Object(n.useEffect)((function(){var t={awaiting:!0},e=function(){var r=h()(p().mark((function r(){var n,o,i=arguments;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r.prev=1,r.next=4,d();case 4:o=r.sent,t.awaiting&&!l()(o)&&c(o),r.next=18;break;case 8:if(r.prev=8,r.t0=r.catch(1),!(n<3)){r.next=17;break}return console.error(r.t0.message),r.next=14,new Promise((function(t){return setTimeout(t,1e3)}));case 14:e(n+1),r.next=18;break;case 17:console.error("@media-components/header-extension: Превышено количество запросов currencies");case 18:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();return e(),function(){t.awaiting=!1}}),[e]),a),y=function(t){var e=Object(n.useState)(t),r=u()(e,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){var e={awaiting:!0};if(l()(t)){var r=function(){var t=h()(v().mark((function t(){var n,o,a=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,t.next=4,m();case 4:o=t.sent,e.awaiting&&!l()(o)&&i(o),t.next=18;break;case 8:if(t.prev=8,t.t0=t.catch(1),!(n<3)){t.next=17;break}return console.error(t.t0.message),t.next=14,new Promise((function(t){return setTimeout(t,1e3)}));case 14:r(n+1),t.next=18;break;case 17:console.error("@media-components/header-extension: Превышено количество запросов currencies");case 18:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();r()}return function(){e.awaiting=!1}}),[]),o}(s);return o.a.createElement("div",{className:w.root},f&&o.a.createElement("div",{className:w.widget},o.a.createElement(_,{data:f})),y&&o.a.createElement("div",{className:w.widget},o.a.createElement(b,{data:y})))}}])},5884:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},3559:(t,e,r)=>{t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e){t.exports=r(7294)},function(t,e){t.exports=r(4184)},function(t,e){t.exports=r(1715)},function(t,e){t.exports=r(3038)},function(t,e){t.exports=r(8)},function(t,e){t.exports=r(8926)},function(t,e){t.exports=r(2222)},function(t,e){t.exports=r(9254)},function(t,e){t.exports=r(4916)},function(t,e){t.exports=r(4765)},function(t,e){t.exports=r(1539)},function(t,e){t.exports=r(8674)},function(t,e){t.exports=r(5666)},function(t,e){t.exports=r(4301)},function(t,e,r){"use strict";r.r(e),r(6),r(7);var n,o=r(2),i=r.n(o),a=r(0),c=r.n(a),u=r(1),s=r.n(u);r(8),r(9),function(t){t[t.head=1]="head",t[t.mail=2]="mail",t[t.top100=3]="top100",t[t.kassa=4]="kassa",t[t.weather=5]="weather",t[t.horoscopes=6]="horoscopes",t[t.dating=7]="dating",t[t.help=8]="help",t[t.soft=9]="soft",t[t.class=10]="class",t[t.likes=11]="likes",t[t.afisha=12]="afisha",t[t.news=13]="news",t[t.finance=14]="finance",t[t.woman=15]="woman",t[t.kino=16]="kino",t[t.sport=17]="sport",t[t.auto=18]="auto",t[t.doctor=19]="doctor",t[t.weekend=20]="weekend",t[t.travel=21]="travel",t[t.games=22]="games",t[t.beat=23]="beat",t[t.search=24]="search",t[t.search_r0=25]="search_r0",t[t.search_org=26]="search_org",t[t.search_img=27]="search_img",t[t.search_map=28]="search_map",t[t.id=29]="id",t[t.daily=30]="daily"}(n||(n={}));var l=r(3),f=r.n(l),h=r(4),p=r.n(h),d=(r(10),r(11),r(12),r(5)),v=r.n(d);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function h(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,o)&&(v=g);var w=d.prototype=f.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==p()(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=d,c(w,"constructor",d),c(d,"constructor",h),h.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}r(13);var y={root:"rui__uTUwd0q",list:"rui__26HRKsF",card:"rui__3Vhf3rG",woman:"rui__2AU2eJP",mobile:"rui__1etyPDK","mobile-list":"rui__1A_NOLZ",preload:"rui__2JIT2sV",cover:"rui__2OE93LS",body:"rui__qBaXOEe",link:"rui__20xDPBu",title:"rui__2Vmm7AP",annotation:"rui__35LMXC2",head:"rui__35tpnGB",bottom:"rui__2F55koV",pics:"rui__1A9i4C6",pic:"rui__3ew1cxv",inverse:"rui__37WTVjR",common:"rui__36zQ8yG",mainOn:"rui__EFKKUde",mainOff:"rui__2_1KGd1",aquarius:"rui__1ym0-du",aries:"rui__19Qmwcs",cancer:"rui__2fHYMgK",capricorn:"rui__1OT1Jaw",gemini:"rui__2Y838qO",leo:"rui__d6QjXHR",libra:"rui__3AOkSsl",pisces:"rui__nMKyQnh",sagittarius:"rui__UBTc9ap",scorpio:"rui__1f3r2kC",taurus:"rui__fBF9IAr",virgo:"rui__ZR1iBCA",leftLarge:"rui__2Vejkvp",leftSmall:"rui__d4ujRUH",rightSmall:"rui__1vL2QV1",rightLarge:"rui__1aIphUS",fading:"rui__29sYKAM"},g={common:["aries","gemini","cancer","taurus"],aquarius:["capricorn","libra","gemini","pisces"],aries:["pisces","sagittarius","leo","taurus"],cancer:["gemini","pisces","scorpio","leo"],capricorn:["sagittarius","virgo","taurus","aquarius"],gemini:["taurus","aquarius","libra","cancer"],leo:["cancer","aries","sagittarius","virgo"],libra:["virgo","gemini","aquarius","scorpio"],pisces:["aquarius","scorpio","cancer","aries"],sagittarius:["scorpio","leo","aries","capricorn"],scorpio:["libra","cancer","pisces","sagittarius"],taurus:["aries","capricorn","virgo","gemini"],virgo:["leo","taurus","capricorn","libra"]};e.default=function(t){var e=t.type,r=void 0===e?"card":e,o=t.projectCode,u=void 0===o?"head":o,l=t.pageName,h=t.className,p=t.style,d=t.reloadKey,w=function(){var t=Object(a.useState)(!1),e=f()(t,2),r=e[0],n=e[1];return Object(a.useEffect)((function(){window.requestAnimationFrame((function(){n(!0)}))}),[]),r}(),_=function(t){var e=Object(a.useState)(null),r=f()(e,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){!function(){var t=v()(m().mark((function t(){var e,r,n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={credentials:"include"},t.next=3,fetch("https://".concat("www.rambler.ru","/api/v4/personalized/"),e);case 3:if((r=t.sent)&&!1!==r.ok){t.next=6;break}throw new Error("@media-components/widget-horoscope: Не удалось получить данные из API Horoscope");case 6:return t.next=8,r.json();case 8:if(n=t.sent,!i()(n.horoscope)){t.next=11;break}throw new Error("@media-components/widget-horoscope: Ошибка парсинга данных из API Horoscope");case 11:o(n.horoscope);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[t]),n}(d);if(Object(a.useEffect)((function(){!function(t){t?n[t]||console.error("@media-components: Указан невалидный projectCode: ".concat(t)):console.error("@media-components: Не указан projectCode")}(u)}),[u]),!w||i()(_))return c.a.createElement("div",{className:s()(y.root,y[r],y.preload,y[u],h),style:p});var x=_.sign,b=_.title,E=_.annotation,L=_.button;return c.a.createElement("div",{className:s()(y.root,y[r],y[u],h),style:p},c.a.createElement("div",{className:y.cover},"mobile-list"!==r&&c.a.createElement("div",{className:y.pics},c.a.createElement("div",{className:s()(y.pic,y.leftLarge,y.inverse,y[g[x][0]])}),c.a.createElement("div",{className:s()(y.pic,y.leftSmall,y.inverse,y[g[x][1]])}),c.a.createElement("div",{className:s()(y.pic,y.rightSmall,y.inverse,y[g[x][2]])}),c.a.createElement("div",{className:s()(y.pic,y.rightLarge,y.inverse,y[g[x][3]])}),c.a.createElement("div",{className:s()(y.pic,y.mainPic,y.mainOff,y[x])}),c.a.createElement("div",{className:s()(y.pic,y.mainPic,y.mainOn,y[x])})),"mobile-list"===r&&c.a.createElement("div",{className:s()(y.pic,y[x])})),c.a.createElement("div",{className:y.body},c.a.createElement("a",{className:y.link,href:L,target:"_blank",rel:"noopener","data-mc":"widget-horoscope::".concat(u).concat(l&&"::".concat(l),"::link")},c.a.createElement("span",{className:y.title},b),c.a.createElement("span",{className:y.annotation},E)),c.a.createElement("div",{className:y.bottom},"Рамблер/гороскопы")))}}])},7673:()=>{},2305:()=>{}}]);