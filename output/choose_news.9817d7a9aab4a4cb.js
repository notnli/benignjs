!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("CAAS_AOLCOM",[],t):"object"==typeof exports?exports.CAAS_AOLCOM=t():e.CAAS_AOLCOM=t()}(self,(function(){return function(){var e={9729:function(e,t,n){"use strict";n.r(t),n.d(t,{paramCase:function(){return u}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create,Object.create;var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e){return e.toLowerCase()}Object.create,Object.create;var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function l(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function u(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?i:n,o=t.stripRegexp,u=void 0===o?c:o,s=t.transform,f=void 0===s?a:s,d=t.delimiter,p=void 0===d?" ":d,m=l(l(e,r,"$1\0$2"),u,"\0"),v=0,h=m.length;"\0"===m.charAt(v);)v++;for(;"\0"===m.charAt(h-1);)h--;return m.slice(v,h).split("\0").map(f).join(p)}(e,o({delimiter:"."},t))}(e,r({delimiter:"-"},t))}},6880:function(e){!function(t,n){"use strict";var r=/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]{1,300}@(.{1,300}\.)[a-zA-Z]{2,3})/g;function o(e,t,n){return n.length!==e.length&&t.ellipsis?n+=t.ellipsis:n}function a(e,t,n){var a,i,c="",l=!0,u=t;if((n=n||{}).ellipsis=void 0===n.ellipsis?"…":n.ellipsis,!e||0===e.length)return"";for(l=!0;l;){if(r.lastIndex=c.length,!(l=r.exec(e))||l.index-c.length>=u)return c+=e.substring(c.length,t),o(e,n,c);if(a=l[0],i=l.index,c+=e.substring(c.length,i+a.length),(u-=i+a.length)<=0)break}return o(e,n,c)}e.exports?e.exports=a:t.truncate=a}(String)},942:function(e){var t=["img","link","meta","br","hr","input","iframe"],n=["svg","path","circle","rect","polygon","defs","linearGradient","stop","ellipse","text"],r=function(e,t){for(var n=!1,r=0;r<e.length;r+=1)if(e[r]===t){n=!0;break}return n},o=function(e){return null!==e},a=function(e){return e instanceof Node?e:"string"==typeof e||"number"==typeof e?document.createTextNode(e):null},i=function(e,t){if("function"==typeof e)return e();if("string"!=typeof e)return null;for(var i=document.createDocumentFragment(),c=r(n,e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),l=arguments.length,u=new Array(l>2?l-2:0),s=2;s<l;s++)u[s-2]=arguments[s];u.forEach((function(e){Array.isArray(e)?e.forEach((function(e){return o(e)&&i.appendChild(a(e))})):o(e)&&i.appendChild(a(e))})),c.appendChild(i);var f=t||{};return Object.keys(f).forEach((function(e){var t="className"===e?"class":e;c.setAttribute(t,f[e])})),c},c=function(e){for(var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})||{},a=Object.keys(n).map((function(e){return"".concat("className"===e?"class":e,'="').concat(n[e],'"')})).join(" "),i=arguments.length,c=new Array(i>2?i-2:0),l=2;l<i;l++)c[l-2]=arguments[l];return r(t,e)?"<".concat(e," ").concat(a," />"):"<".concat(e," ").concat(a,">").concat(function(e){var t="";return e.forEach((function(e){Array.isArray(e)?e.forEach((function(e){o(e)&&(t+=e)})):o(e)&&(t+=e)})),t}(c),"</").concat(e,">")};e.exports=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"undefined"!=typeof window?i.apply(void 0,[e,t].concat(r)):c.apply(void 0,[e,t].concat(r))}},7958:function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n={rapidInit:"rapid:init"};e.exports={events:n,rapidReady:function(e){window.rapidInstance?e(window.rapidInstance):document.addEventListener(n.rapidInit,(function(){e(window.rapidInstance)}),{passive:!0,once:!0})},ylkStringToObj:function(){var e=["itc","cpos","pos"];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(";").filter(Boolean).reduce((function(n,r){var o,a,i=(o=r.split(":"),a=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(o,a)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(o,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],l=i[1];return n[c]=e.includes(c)?parseInt(l,10):l,n}),{})},ylkObjToString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(t){return"".concat(t,":").concat(e[t])})).join(";")}}},6848:function(e,t,n){var r=n(6880),o=n(9729).paramCase,a={teaspoon:"tsp",tablespoon:"tbsp",cup:"cup",count:"",pound:"lb",gallon:"gal",ounce:"oz",none:"",can:"can",quart:"quart",pint:"pint","fluid ounce":"oz",g:"g",l:"ltr",ml:"ml",kg:"kg"};e.exports={getLinkTarget:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return"_blank";var t=e.indexOf("//")>-1?e.split("/")[2]:"aol.com";return t=(t=t.split(":")[0]).split("?")[0],new RegExp(["aol.com","aol.it"].join("|")).test(t)?"":"_blank"},getArticleIdFromURL:function(e){var t=e.split("/");return t.pop()||t.pop()},toSnakeCase:function(e){return e.toLowerCase().trim().replace(/[\W]/gi,"_")},toKebabCase:function(e){return e.toLowerCase().trim().replace(/[\W_]/gi,"-")},regexEscape:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},snakeToKebab:function(e){return"string"==typeof e?e.replace(/_/g,"-"):""},parameterize:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return"string"==typeof e?e.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s/g,t):""},truncate:r,formatCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"USD";return new Intl.NumberFormat(t,{style:"currency",currency:n,minimumFractionDigits:0}).format(e)},convertUnitName:function(e){var t=e.toLowerCase();return a[t]},toBoolean:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"==typeof e?"1"===e||"true"===e.toLowerCase()||!1:!!e},capitalizeFirstLetter:function(e){return e&&"string"==typeof e&&""!==e?e.charAt(0).toUpperCase()+e.slice(1):""},paramCase:o}},4970:function(e,t,n){var r=n(6848).getLinkTarget,o=n(942);e.exports=function(e,t){return o("div",{className:e.feed_key},o("ul",{className:"m-choosenews__items-wrapper"},e.items.map((function(e,n){return o("li",{className:"m-choosenews__item content-1"},o("a",{className:"m-choosenews__item-link",target:r(e.url,t),rel:"noopener noreferrer",href:e.url,"data-ylk":"ll2:amp-bon;elm:hdln;aid:aol_com_127=bsd:".concat(e.id,";cpos:").concat(n+1,";").concat(e.id?"g:"+e.id:"")},e.title))}))))}},6636:function(e,t,n){var r=n(6848).getLinkTarget,o=n(942);e.exports=function(e,t,n){return o("div",{className:"m-choosenews__readmore"},o("a",{className:"m-choosenews__readmore-link content-2",target:r(e,n),rel:"noopener noreferrer",href:e,"data-ylk":"elm:link;itc:0;","aria-label":"Read more news"},t," >"))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(a)?a:String(a)),o)}var a}n.r(r),n.d(r,{default:function(){return d}});var i=n(4970),c=n(6636),l=n(7958).rapidReady,u="chooseNews-prefs",s="#m-choosenews__form",f="shimmer-stop",d=new(function(){function n(e){var r=this,a=e.selector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.elems=function(e,t,n){if(t&&!Array.isArray(t)&&"number"==typeof t.length){var r=t.length;return o(t,r)}return e(t,n)}(t,document.querySelectorAll(a)),this.elems.length&&(this.deleteOldLocalStorage(),this.elems.forEach((function(e,t){r.init(e,0!==t)})))}var r,d;return r=n,(d=[{key:"init",value:function(e,t){var n=e.getAttribute("data-defer")||"1";this.addEventListeners(e),"1"===n&&(t?this.loadInitialWithViewportDectection(e):this.loadInitial(e))}},{key:"loadInitialWithViewportDectection",value:function(e){var t=this,n=window.wafer.utils.throttle;e._validateWithThrottle=n((function(){t.validateElem(e)}),50,this),window.addEventListener("scroll",e._validateWithThrottle,{passive:!0}),e._validateWithThrottle()}},{key:"validateElem",value:function(e){var t=window.wafer.utils.elementInView;!e._initialized&&t(e,{offsetY:50},window.wafer.base.viewport)&&(window.removeEventListener("scroll",e._validateWithThrottle),e._initialized=!0,this.loadInitial(e))}},{key:"addEventListeners",value:function(e){var t=this,n=e.getAttribute("data-channel"),r=e.querySelector("".concat(s,"-").concat(n));r&&r.addEventListener("change",(function(n){t.handleDropdownChange(n,e)}))}},{key:"handleDropdownChange",value:function(e,t){var n=t.dataset,r=void 0===n?{}:n,o=r.channel,a=r.domain,i=r.localStorage,c=e.target,l=(void 0===c?{}:c).value;this.loadNews(t,o,l,a),"1"===i&&this.setLocalStorage(o,l)}},{key:"loadInitial",value:function(e){var t=e.getAttribute("data-channel"),n=e.getAttribute("data-domain")||"wwwaolcom",r=e.getAttribute("data-initial-key"),o=e.getAttribute("data-local-storage"),a=e.querySelector("".concat(s,"-").concat(t)),i=r;"1"===o&&(i=this.getLocalStorage()[t]||r),a&&(a.value=i),this.loadNews(e,t,i,n)}},{key:"getLocalStorage",value:function(){try{var t=window.localStorage.getItem(u);if(!t)return{};var n=JSON.parse(t);return"object"!==e(n)?(this.deleteLocalStorage(),{}):n}catch(e){return this.deleteLocalStorage(),{}}}},{key:"setLocalStorage",value:function(e,t){var n=this.getLocalStorage()||{};n[e]=t,window.localStorage.setItem(u,JSON.stringify(n))}},{key:"deleteLocalStorage",value:function(){window.localStorage.removeItem(u)}},{key:"deleteOldLocalStorage",value:function(){window.localStorage.removeItem("chooseNews-sourceKey")}},{key:"loadNews",value:function(e,t,n,r){fetch("/nex/modules/choose_news/v1?channel=homepage&slot=cw&moduleKey=choose_news_".concat(encodeURIComponent(t),"&domain=").concat(encodeURIComponent(r),"&m_mode=json&isXHR=true&version=").concat(encodeURIComponent(n))).then((function(e){return e.json()})).then((function(t){e.classList.add("loaded"),e.classList.add(f);for(var n=e.querySelector(".m-choosenews__items"),r=t.data.response,o=t.data.metadata,a=o.forceLinkOut,u=o.moreUrl,s=i(r,a),d=document.querySelector(".m-choosenews").getAttribute("data-readmore"),p=c(u,d,a);n.children.length>0;)n.removeChild(n.firstElementChild);n.appendChild(s),n.appendChild(p),l((function(t){t.refreshModule(e.id)}))})).catch((function(t){e.classList.add(f),console.error("Issue fetching or parsing ChooseNews ".concat(t))}))}}])&&a(r.prototype,d),Object.defineProperty(r,"prototype",{writable:!1}),n}())({selector:".m-choosenews"})}(),r}()}));
//# sourceMappingURL=choose_news.js.map