(self.webpackChunk=self.webpackChunk||[]).push([[1382],{62183:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(14909);let o;function i(e){if(o)return o;let t,n;o=new Promise(((e,r)=>{t=e,n=r}));const i=document.getElementById("scribd_recs");if(!i)return n("no rec container"),o;if(!i.dataset.async)return t(i),o;const s=new URLSearchParams,a=new URL(document.location);for(let[e,t]of a.searchParams.entries())e.startsWith("ab_test[")&&s.append(e,t);return fetch(`/slideshow/scribd_recs/${e}?${s}`,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw console.log("failed to load recs"),new Error("failed to load recs");return e.text()})).then((e=>{i.innerHTML=e,t(i);const n={};let o=!1;for(let e of i.querySelectorAll("[data-nway-test-name]"))o=!0,n[e.dataset.nwayTestValue]=e.dataset.nwayTestValue;o&&(0,r.default)("identify",n)})),o}},78846:function(e,t,n){("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"8e546e623160b891d9c9f8df90579cd8c936d9eb"}},9669:function(e,t,n){e.exports=n(51609)},55448:function(e,t,n){"use strict";var r=n(64867),o=n(36026),i=n(4372),s=n(15327),a=n(94097),u=n(84109),c=n(67985),l=n(85061),d=n(45655),f=n(65263);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,m=e.headers,g=e.responseType;function w(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete m["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(y+":"+b)}var _=a(e.baseURL,e.url);function x(){if(v){var r="getAllResponseHeaders"in v?u(v.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:r,config:e,request:v};o((function(e){t(e),w()}),(function(e){n(e),w()}),i),v=null}}if(v.open(e.method.toUpperCase(),s(_,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(x)},v.onabort=function(){v&&(n(l("Request aborted",e,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(l("Network Error",e,null,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||c(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(m[e.xsrfHeaderName]=S)}"setRequestHeader"in v&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:v.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),g&&"json"!==g&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){v&&(n(!e||e&&e.type?new f("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),v.send(h)}))}},51609:function(e,t,n){"use strict";var r=n(64867),o=n(91849),i=n(30321),s=n(47185),a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(45655));a.Axios=i,a.Cancel=n(65263),a.CancelToken=n(14972),a.isCancel=n(26502),a.VERSION=n(97288).version,a.all=function(e){return Promise.all(e)},a.spread=n(8713),a.isAxiosError=n(16268),e.exports=a,e.exports.default=a},65263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},14972:function(e,t,n){"use strict";var r=n(65263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},26502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},30321:function(e,t,n){"use strict";var r=n(64867),o=n(15327),i=n(80782),s=n(13572),a=n(47185),u=n(54875),c=u.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!o){var d=[s,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(l),i=Promise.resolve(t);d.length;)i=i.then(d.shift(),d.shift());return i}for(var f=t;r.length;){var p=r.shift(),h=r.shift();try{f=p(f)}catch(e){h(e);break}}try{i=s(f)}catch(e){return Promise.reject(e)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},80782:function(e,t,n){"use strict";var r=n(64867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},94097:function(e,t,n){"use strict";var r=n(91793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},85061:function(e,t,n){"use strict";var r=n(80481);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},13572:function(e,t,n){"use strict";var r=n(64867),o=n(18527),i=n(26502),s=n(45655),a=n(65263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},80481:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},47185:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},36026:function(e,t,n){"use strict";var r=n(85061);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},18527:function(e,t,n){"use strict";var r=n(64867),o=n(45655);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},45655:function(e,t,n){"use strict";var r=n(64867),o=n(16016),i=n(80481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(55448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},97288:function(e){e.exports={version:"0.25.0"}},91849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},15327:function(e,t,n){"use strict";var r=n(64867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(64867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},91793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},16268:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},67985:function(e,t,n){"use strict";var r=n(64867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16016:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},84109:function(e,t,n){"use strict";var r=n(64867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},54875:function(e,t,n){"use strict";var r=n(97288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},64867:function(e,t,n){"use strict";var r=n(91849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return u(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},14909:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.setUserId=t.setDocId=t.logEvent=t.default=void 0;var o=n(38652),i=r(n(10752));const s={queue:[],timeout:null,visibilityListener:null,userId:null,docId:null},a=()=>{if(0===s.queue.length)return;const e=[...s.queue];s.queue=[],async function(e){var t,n,r,a,u,c,l;const d=await i.default,f=document.querySelector("meta[name=x-web-analytics]");let p=s.docId||(null==f||null===(t=f.dataset)||void 0===t?void 0:t.docId)||(null===(n=window.slideshare_object)||void 0===n||null===(r=n.slideshow)||void 0===r?void 0:r.id)||null;p&&(p=parseInt(p,10));let h=s.userId||(null==f||null===(a=f.dataset)||void 0===a?void 0:a.userId)||(null===(u=window.slideshare_object)||void 0===u||null===(c=u.user)||void 0===c?void 0:c.id)||null;h&&(h=parseInt(h,10));const m={events:e,location:location.href,product:"slideshare",page_view_id:d,referrer:document.referrer||null,browser_id:(0,o.getCookie)("browser_id"),doc_id:p,user_id:h};let g;g=null!==(l=window.slideshare_object)&&void 0!==l&&l.web_analytics_url?`${window.slideshare_object.web_analytics_url}/api/v1/events`:"https://wa.slideshare.net/api/v1/events";let w=!1;if(navigator.sendBeacon)try{w=navigator.sendBeacon(g,JSON.stringify(m))}catch{console.warn(`Failed to send tracking event to ${g}`)}w||(await fetch(g,{method:"POST",body:JSON.stringify(m),credentials:"include"})).ok||console.warn("cannot send events")}(e)},u=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("undefined"==typeof window)return;"string"!=typeof e&&null!==e&&(e=JSON.stringify(e)),"string"!=typeof t&&null!==t&&(t=JSON.stringify(t));const r=(new Date).toISOString();s.queue.push({name:e,value:t,timestamp:r}),(s.queue.length>=10||n)&&a(),s.timeout||(s.timeout=setTimeout((()=>{s.timeout=null,a()}),1e3)),s.visibilityListener||(s.visibilityListener=window.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&a()})))};t.logEvent=u;var c=u;t.default=c,t.setUserId=e=>{s.userId=e},t.setDocId=e=>{s.docId=e},u("page_loaded")},38652:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSlideshowId=t.getPageKey=t.getCookie=void 0,t.getCookie=e=>{if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith(`${e}=`)));return t?t.split("=")[1]:""}return""},t.getPageKey=()=>window.slideshare_object&&window.slideshare_object.page_key||null,t.getSlideshowId=()=>window.slideshare_object&&window.slideshare_object.slideshow&&window.slideshare_object.slideshow.id||"-1"},10752:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=new Promise((e=>{try{e(([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))))}catch(t){console.log(`failed to generate uuid: ${t}`),fetch("/api/internal/uuid").then((e=>e.json())).then((t=>e(t[0]))).catch((()=>{e(null)}))}}));t.default=n},2459:function(e,t,n){"use strict";var r=n(64836),o=n(15130),i=n(38652),s=n(81030),a=r(n(62183)),u=r(n(14909));const c={trackedRecs:{},modules:{}},l=e=>{const{index:t,sourceName:n,recId:r,score:o,moduleId:a}=e.dataset,{section:u,modulePosition:l,moduleType:d}=c.modules[a];return{index:t,rec_id:r,source:n,score:o,section:u,module_position:l,page:(0,i.getPageKey)(),module_type:d,platform:(0,s.isMobile)()?"mobile_web":"desktop_web"}},d=async e=>{const t=e.currentTarget;(0,u.default)("rc",l(t))},f=e=>{e.forEach((async e=>{if(e.isIntersecting){const n=e.target,r=n.dataset.recId;c.trackedRecs[r]||(t=r,c.trackedRecs[t]=!0,(0,u.default)("rv",l(n)))}var t}))},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=new IntersectionObserver(f,{root:null,threshold:.5}),n=e.querySelectorAll(".recommendation");for(let e of n)e.dataset.recommendationTrackingInitialized||(e.dataset.recommendationTrackingInitialized=!0,t.observe(e),e.addEventListener("click",d.bind(e)))},h=e=>{const{section:t,moduleId:n,moduleType:r}=e.dataset;c.modules[n]||(c.modules[t]>=0?c.modules[t]=c.modules[t]+1:c.modules[t]=0,c.modules[n]={section:t,modulePosition:c.modules[t],moduleType:r})},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.querySelectorAll(".recommendation-module");for(let e of t)h(e)};(async()=>{await(0,o.getFlagValue)("recommendation_impression_tracking")&&(m(),p(),(0,a.default)((0,i.getSlideshowId)()).then((e=>{m(e),p(e)})))})()},15130:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.trackABTestsUpdate=t.loadTests=t.getTests=t.getTestValue=t.getFlags=t.getFlagValue=void 0;var o=n(63409),i=r(n(14909));let s=null;const a=e=>{if(e){const t={};Object.keys(e).forEach((n=>{const r=e[n].value;let o=n;e[n].version>0&&(o=`${o}:${e[n].version}`),"none"!==r&&(t[o]=r)})),(0,i.default)("identify",t)}};t.trackABTestsUpdate=a;const u=e=>new URLSearchParams(window.location.search).get(e),c=e=>u(e)||(window.ab_tests&&window.ab_tests[e]?window.ab_tests[e].value:null),l=e=>Array.isArray(e)&&e.length,d=e=>{let t=[];return l(e)&&(t=e.filter((e=>!c(e)))),l(t)?t:null},f=async e=>{const t=d(e);if(!s||t){const e=(e=>{const t=d(e);return t?`?${t.map((e=>`assign[]=${e}`)).join("&")}`:""})(t);s=(0,o.get)(`/ab_tests${e}`)}const n=await s;n&&200===n.status?(window.feature_flags=n.data.feature_flags,window.ab_tests=n.data.ab_tests,t&&a(window.ab_tests)):console.warn("Failed to load AB test assignments")};t.loadTests=f,t.getFlagValue=async e=>(window.feature_flags||await f(),(e=>{const t=u(e);return t?"true"===t:e in window.feature_flags?window.feature_flags[e]:null})(e)),t.getTestValue=async e=>(c(e)||await f([e]),c(e)),t.getTests=async e=>(!d(e)&&window.ab_tests||await f(e),window.ab_tests),t.getFlags=async()=>(window.feature_flags||await f(),window.feature_flags)},81030:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTouchDevice=t.isMobile=t.isDesktop=t.getDeviceOrientation=void 0,t.isMobile=()=>"undefined"!=typeof document&&document.body.offsetWidth<=928,t.isDesktop=()=>document.body.offsetWidth>928,t.isTouchDevice=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,t.getDeviceOrientation=()=>{let e;return e=window.orientation?0===window.orientation?"portrait":"landscape":(window.innerWidth||screen.width)>(window.innerHeight||screen.height)?"landscape":"portrait",e}},63409:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.putFile=t.postFormData=t.post=t.patch=t.getCSRFToken=t.get=t.deleteApiCall=void 0;var o=r(n(9669));let i;const s=async()=>{if(i)return i;const e=document.querySelector('meta[name="csrf-token"]');if(e)return e.getAttribute("content");const t=await o.default.get("/csrf_token",{headers:{credentials:"same-origin",method:"GET"}});if(200!==t.status)throw new Error(t.status);return i=t.data.csrf_token,t.data.csrf_token};t.getCSRFToken=s,t.postFormData=async(e,t,n)=>{const r=new FormData;for(let[e,n]of Object.entries(t))r.append(e,n);return await a(e,r,n)},t.putFile=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{};const i=new FormData;i.append("file",t,t.originalname);const s=await o.default.put(e,i,{...n,onUploadProgress:e=>r(e.loaded)});return s},t.patch=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await s(),i=await o.default.patch(e,t,{headers:{...n,"X-CSRF-Token":r}});return i};const a=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;const i=await s(),a=await o.default.post(e,t,{headers:{...n,"X-CSRF-Token":i},onUploadProgress:r?e=>r(e.loaded):null});return a};t.post=a,t.get=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await o.default.get(e,{headers:t});return n},t.deleteApiCall=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await s(),i=await o.default.delete(e,{headers:{...n,"X-CSRF-Token":r}});return i}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){var t=function(t){return e(e.s=t)};t(78846),t(2459)}]);
//# sourceMappingURL=recommendations-tracker.fbc20773ec364815109c.js.map