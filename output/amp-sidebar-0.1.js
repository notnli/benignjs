;
(self.AMP=self.AMP||[]).push({m:0,v:"2305252018001",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function S(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function E(t){var i=O.apply(null,arguments);setTimeout((function(){throw S(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){E(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;var r;v||(r=Object.create(null),v=r);var s=v[i];if(!s||n){if(s=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(s=o)}n||(v[i]=s)}return s}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.Tt=null}var i=t.prototype;return i.add=function(t){var i=this;return this.Tt||(this.Tt=[]),this.Tt.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.Tt&&(n=t,-1!=(r=(i=this.Tt).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.Tt&&(this.Tt.length=0)},i.fire=function(t){if(this.Tt)for(var i,n=c(this.Tt.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.Tt)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this.Ir=ft(t),this.Mr=i,this.Sr=n||0,this.kr=-1,this._r=0,this.Rr=!1,this.Nr=function(){r.Cr()}}var i=t.prototype;return i.isPending=function(){return-1!=this.kr},i.schedule=function(t){var i=t||this.Sr;this.Rr&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this._r<-10)&&(this.cancel(),this._r=n,this.kr=this.Ir.delay(this.Nr,i),!0)},i.Cr=function(){this.kr=-1,this._r=0,this.Rr=!0,this.Mr(),this.Rr=!1},i.cancel=function(){this.isPending()&&(this.Ir.cancel(this.kr),this.kr=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.zl=t,this.GM=[],this.Lv=[],this.Kt=[],this.BM=[],this.FM=null;var r=t.ownerDocument.defaultView,s=ct(r);this.WM=i||s,this.XM=n,this.qM=!1,this.Cr=new mt(b(t),this.ad.bind(this)),this.ZM=new dt,this.$M=Object.create(null),this.KM=this.zp.bind(this),this.JM=this._p.bind(this),this.QM=this.qp.bind(this),this.tI=this.Yv.bind(this),this.zl.addEventListener("touchstart",this.KM,!!s&&{passive:!0}),this.zl.addEventListener("touchend",this.JM),this.zl.addEventListener("touchmove",this.QM,!!s&&{passive:!0}),this.zl.addEventListener("touchcancel",this.tI),this.iI=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.zl.removeEventListener("touchstart",this.KM),this.zl.removeEventListener("touchend",this.JM),this.zl.removeEventListener("touchmove",this.QM),this.zl.removeEventListener("touchcancel",this.tI),delete this.zl[pt],this.Cr.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.$M[r];return s||(this.GM.push(n),s=new dt,this.$M[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.$M[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.GM);return!(r<0||(this.GM.splice(r,1),this.Kt.splice(r,1),this.BM.splice(r,1),this.Lv.splice(r,1),delete this.$M[i],0))}return!1},i.onPointerDown=function(t){return this.ZM.add(t)},i.zp=function(t){var i=Date.now();this.qM=!1,this.ZM.fire(t);for(var n=0;n<this.GM.length;n++)this.Kt[n]||(this.BM[n]&&this.BM[n]<i&&this.Jv(n),this.GM[n].onTouchStart(t)&&this.Xv(n));this.nI(t)},i.qp=function(t){for(var i=Date.now(),n=0;n<this.GM.length;n++)this.Lv[n]&&(this.BM[n]&&this.BM[n]<i?this.Jv(n):this.GM[n].onTouchMove(t)||this.Jv(n));this.nI(t)},i._p=function(t){for(var i=Date.now(),n=0;n<this.GM.length;n++)if(this.Lv[n])if(this.BM[n]&&this.BM[n]<i)this.Jv(n);else{this.GM[n].onTouchEnd(t);var r=!this.BM[n],s=this.BM[n]<i;this.FM==this.GM[n]||!r&&!s||this.Jv(n)}this.nI(t)},i.Yv=function(t){for(var i=0;i<this.GM.length;i++)this.rI(i);this.nI(t)},i.Op=function(t,i){if(this.FM)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.GM.length;r++)this.GM[r]==t&&(this.Kt[r]=n+i,this.BM[r]=0);this.iI=!0}},i.oI=function(t,i){if(this.FM)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.GM.length;r++)this.GM[r]==t&&(this.BM[r]=n+i)},i.aI=function(t){this.FM==t&&(this.FM=null,this.qM=!0)},i.sI=function(t,i,n){p(this.FM==t);var r=this.$M[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.nI=function(t){var i=!!this.FM||this.qM;if(this.qM=!1,!i)for(var n=Date.now(),r=0;r<this.GM.length;r++)if(this.Kt[r]||this.BM[r]&&this.BM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.WM||t.preventDefault()):this.XM&&t.stopPropagation(),this.iI&&(this.iI=!1,this.ad())},i.ad=function(){for(var t=Date.now(),i=-1,n=0;n<this.GM.length;n++)this.Kt[n]?(-1==i||this.Kt[n]>this.Kt[i])&&(i=n):this.BM[n]&&this.BM[n]<t&&this.Jv(n);if(-1!=i){for(var r=0,s=0;s<this.GM.length;s++)!this.Kt[s]&&this.Lv[s]&&(r=Math.max(r,this.BM[s]-t));r<2?this.eI(i):this.Cr.schedule(r)}},i.eI=function(t){for(var i=this.GM[t],n=0;n<this.GM.length;n++)n!=t&&this.rI(n);this.Kt[t]=0,this.BM[t]=0,this.FM=i,i.acceptStart()},i.Xv=function(t){this.Lv[t]=!0,this.BM[t]=0},i.Jv=function(t){this.Lv[t]=!1,this.BM[t]=0,this.Kt[t]||this.GM[t].acceptCancel()},i.rI=function(t){this.Kt[t]=0,this.Jv(t)},t}(),wt=function(){function t(t,i){this.uI=t,this._y=i}var i=t.prototype;return i.getType=function(){return this.uI},i.signalReady=function(t){this._y.Op(this,t)},i.signalPending=function(t){this._y.oI(this,t)},i.signalEnd=function(){this._y.aI(this)},i.signalEmit=function(t,i){this._y.sI(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).hI=r,e.cI=s,e.FM=!1,e.lI=0,e.mI=0,e.fI=0,e.pI=0,e.dI=0,e.vI=0,e.ih=0,e.yI=0,e.gI=0,e.bI=0,e.xI=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.FM&&i&&i.length>1)||!(!i||1!=i.length)&&(this.ih=Date.now(),this.lI=i[0].clientX,this.mI=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.fI=r,this.pI=s,this.FM)this.wI(!1,!1,t);else{var e=Math.abs(r-this.lI),o=Math.abs(s-this.mI);if(this.hI&&this.cI)(e>=8||o>=8)&&this.signalReady(-10);else if(this.hI){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.cI)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.kI(t)},s.acceptStart=function(){this.FM=!0,this.dI=this.lI,this.vI=this.mI,this.gI=this.ih,this.lI=this.fI,this.mI=this.pI,this.wI(!0,!1,null)},s.acceptCancel=function(){this.FM=!1},s.wI=function(t,i,n){this.yI=Date.now();var r=this.yI-this.gI;if(!i&&r>4||i&&r>16){var s=gt(this.fI-this.dI,r,this.bI),e=gt(this.pI-this.vI,r,this.xI);(!i||r>32||0!=s||0!=e)&&(this.bI=Math.abs(s)>1e-4?s:0,this.xI=Math.abs(e)>1e-4?e:0),this.dI=this.fI,this.vI=this.pI,this.gI=this.yI}this.signalEmit({first:t,last:i,time:this.yI,deltaX:this.fI-this.lI,deltaY:this.pI-this.mI,startX:this.lI,startY:this.mI,lastX:this.fI,lastY:this.pI,velocityX:this.bI,velocityY:this.xI},n)},s.kI=function(t){this.FM&&(this.FM=!1,this.wI(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.Ix=i,this.tX=n,this.iX=xt,this.nX=Mt,this.rX=null,this.eX=null}var i=t.prototype;return i.sX=function(){return this.nX==Mt?this.rX.offsetWidth:this.rX.offsetHeight},i.oX=function(t,i){var n=this.nX==Mt?t:i;return this.iX==xt?-Math.min(n,0):Math.max(n,0)},i.aX=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.iX==xt?-t:t,r=this.nX==Mt?"".concat(n).concat(i):0,s=this.nX==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.rX=s,this.eX=n,this.iX=i,this.nX=r},i.swipeMove=function(t){this.hX(t,!1)},i.endSwipe=function(t){this.hX(t,!0)},i.uX=function(t,i){var n=.75*i;return R(this.rX,{transform:this.aX(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.fX=function(t){var i=this,n=.8*t;return this.Ix((function(){R(i.rX,{transform:i.aX(0),transition:"".concat(n,"ms transform ease-in")}),R(i.eX,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.cX=function(t){var i=this,n=.75*(this.sX()-t);return this.Ix((function(){R(i.rX,{transform:i.aX(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i.eX,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.tX()}))},i.lX=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.rX,{transform:t,transition:""}),R(this.eX,{opacity:i,transition:""})},i.vX=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.oX(e,o),h=this.oX(t,i),u=.5*this.sX();return a<u&&h<.65?this.uX(a,h).then((function(){return s.fX(a)})):this.cX(a)},i.hX=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.Ix((function(){if(i)n.vX(e,o,r,s).then((function(){n.lX()}));else{var t=n.oX(r,s),a=t/n.sX(),h=Math.max(0,1-a);n.lX(n.aX(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.Pb=i,this.dX=t,this.xi=i.getAmpDoc(),this.mX=this.dX.getAttribute("toolbar"),this.pX=null,this.bX=void 0,this.yX=!1,this.dX.classList.add("amp-sidebar-toolbar-target-hidden"),this.wX()}var i=t.prototype;return i.onLayoutChange=function(){this.xi.win.matchMedia(this.mX).matches?this.gX():this.kX()},i.wX=function(){this.pX=this.dX.cloneNode(!0);var t,i,n=(t=this.dX.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.dX,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.xi.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.bX=r,this.pX.classList.add("i-amphtml-toolbar"),P(this.bX,!1)},i.OX=function(){return this.yX},i.gX=function(){var t=this;return this.OX()?Z||(Z=Promise.resolve(void 0)):this.Pb.mutateElement((function(){t.bX&&(P(t.bX,!0),t.bX.contains(t.pX)||t.bX.appendChild(t.pX),t.dX.classList.add("amp-sidebar-toolbar-target-shown"),t.dX.classList.remove("amp-sidebar-toolbar-target-hidden"),t.yX=!0,lt(t.xi,t.pX))}))},i.kX=function(){var t=this;this.OX()&&this.Pb.mutateElement((function(){t.bX&&(P(t.bX,!1),t.dX.classList.add("amp-sidebar-toolbar-target-hidden"),t.dX.classList.remove("amp-sidebar-toolbar-target-shown"),t.yX=!1)}))},t}();function St(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var Et="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).ws=null,r.Gr=null,r.xX=null,r.jX=null,r.Wc=r.win.document,r.MX=r.Wc.documentElement,r.EX=null,r.SX=[];var s=it(r.win,"platform");return r.YC=s.isIos(),r.nC=s.isSafari(),r.gC=-1,r.AX=!1,r.PC=null,r.MC=null,r.DX=0,r.XX=!1,r._X=null,r.RX=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.PX(!0,3)})),r.vit=!1,r.dit=!1,r.Ob=r.Ob.bind(i(r)),r.TX=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.EX=n.getAttribute("side"),this.dit=n.hasAttribute("data-disable-swipe-close"),this.ws=this.getViewport(),this.Gr=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(Et,"".concat(Et," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.EX!=jt&&this.EX!=Dt&&(this.EX=this.zX("rtl"==((t=this.Wc).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.EX)),this.IX(),n.addEventListener("amp:dom-update",(function(){i.IX()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.SX.push(new Ot(t,i))}catch(t){i.user().error(Et,"Failed to instantiate toolbar",t)}})),i.Ob()})),this.YC&&this.CX(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this.MX.addEventListener("keydown",(function(t){"Escape"==t.key&&i._A(3)&&t.preventDefault()})),this.PC=this.sY(),this.PC||(this.PC=this.createScreenReaderCloseButton(),n.insertBefore(this.PC,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i._C(r,n)}),"open"),this.registerAction("close",(function(t){i._A(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.XX?i._A(r):i._C(r,n)})),this.Gr.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(St(r.href)!=St(e))return;s.hash&&i._A(3)}}),!0),this.NX(this.element)},e.attachedCallback=function(){this.TX=this.ws.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this.Ob)),this.Ob()},e.detachedCallback=function(){this.TX&&(this.TX(),this.TX=null)},e.IX=function(){if(!this._X){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this._X=t)}var i},e.sY=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.Gr.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.Wc.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t._A(3)})),n},e.Ob=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.SX.forEach((function(t){t.onLayoutChange()}))}))},e.LX=function(t,i){var n=this;this.xX=t;var r=function(){n.xX===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.WX=function(t){var i=this;P(this.element,!0),P(this.BX(),!0),this.ws.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.YC&&this.nC&&this.YX(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.BX().setAttribute("open",""),this.LX((function(){return i.FX(t)}),350),lt(this.getAmpDoc(),this.element)},e.FX=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.GX()||M(tt(this.PC)),this.fD("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.BX().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.UX=function(t,i){var n=this;this.BX().removeAttribute("open"),this.BX().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.LX((function(){return n.VX(i)}),t?0:350)},e.VX=function(t){P(this.element,!1),P(this.BX(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.fD("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e._C=function(t,i){var n=this;this.XX||(this.XX=!0,this.ws.enterOverlayMode(),this.LX((function(){return n.WX(t)})),this.HX().push((function(){n.YC?n.PX(!0,t):n._A(t)})).then((function(t){n.gC=t})),i&&(this.MC=i,this.DX=this.ws.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this.Ob))},e._A=function(t){return this.PX(!1,t)},e.PX=function(t,i){var n=this;if(!this.XX)return!1;this.XX=!1,this.ws.leaveOverlayMode();var r=this.DX==this.ws.getScrollTop(),s=this.element.contains(this.Wc.activeElement);return this.LX((function(){return n.UX(t,i)})),t&&(P(this.element,!1),P(this.BX(),!1)),-1!=this.gC&&(this.HX().pop(this.gC),this.gC=-1),this.MC&&s&&r&&(this.GX()||M(this.MC)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this.Ob),!0},e.NX=function(t){var i=this;this.dit||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.$X(n,r)}))},e.$X=function(t,i){var n;if(!t.first)return t.last?(this.vit&&this.RX.endSwipe(t),void(this.vit=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.vit=!0,this.RX.swipeMove(t)));this.RX.startSwipe({swipeElement:this.element,mask:this.jX,direction:this.EX==jt?xt:"forward",orientation:Mt})},e.zX=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.BX=function(){var t=this;if(!this.jX){var i=this.Wc.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t._A(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.NX(i),this.jX=i}return this.jX},e.CX=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.XX&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.YX=function(){if(!this.AX){var t=this.Wc.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.AX=!0}},e.HX=function(){return nt(this.getAmpDoc(),"history")},e.fD=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(Et,".").concat(t),{});this.Gr.trigger(this.element,t,n,i)},e.GX=function(){return this.YC&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map