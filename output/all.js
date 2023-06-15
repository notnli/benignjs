/*
合併清單
jQuery.min v2.1.1
jquery.cookie.min 2006
jquery.bxslider.min v4.1
jquery.lazyload.min v1.9.3
postscribe.min.js
common.js
*/



/***********************************jquery.min.js*********************************************************/
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});


/***********************************jquery.cookie.min.js*********************************************************/
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(e,o,i){if(void 0===o){var n=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),t=0;t<r.length;t++){var p=jQuery.trim(r[t]);if(p.substring(0,e.length+1)==e+"="){n=decodeURIComponent(p.substring(e.length+1));break}}return n}i=i||{},null===o&&(o="",i.expires=-1);var s,u="";i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(s=new Date).setTime(s.getTime()+24*i.expires*60*60*1e3):s=i.expires,u="; expires="+s.toUTCString());var c=i.path?"; path="+i.path:"",m=i.domain?"; domain="+i.domain:"",a=i.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(o),u,c,m,a].join("")};

/***********************************bxslider.min.js*********************************************************/
/**
 * BxSlider v4.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var o={},r=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){o.settings=e.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return o.cssPrefix=t[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=e('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:u()}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(p()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=e('<div class="bx-controls" />'),o.settings.captions&&E(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var t="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,t).clone().addClass("bx-clone"),n=o.children.slice(-t).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==f()-1,o.settings.video&&r.fitVids();var s=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(s=r.children()),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&T(),o.settings.auto&&o.settings.autoControls&&C(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),s.imagesLoaded(g)},g=function(){o.loader.remove(),m(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(h()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,e(window).bind("resize",Y),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&W(),o.settings.pager&&M(o.settings.startSlide),o.settings.controls&&D(),o.settings.touchEnabled&&!o.settings.ticker&&O()},h=function(){var t=0,n=e();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),o.settings.slideMargin>0&&(t+=o.settings.slideMargin*(o.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},u=function(){var e="100%";return o.settings.slideWidth>0&&(e="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),e},p=function(){var e=o.settings.slideWidth,t=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>t&&!o.carousel||"vertical"==o.settings.mode?e=t:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(t>o.maxThreshold||o.minThreshold>t&&(e=(t-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)e=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)e=o.settings.maxSlides;else{var t=o.children.first().width();e=Math.floor(o.viewport.width()/t)}else"vertical"==o.settings.mode&&(e=o.settings.minSlides);return e},f=function(){var e=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)e=o.children.length/x();else for(var t=0,i=0;o.children.length>t;)++e,t=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else e=Math.ceil(o.children.length/v());return e},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},m=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var e=o.children.last(),t=e.position();S(-(t.left-(o.viewport.width()-e.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,t=o.children.eq(i).position();S(-t.top,"reset",0)}}else{var t=o.children.eq(o.active.index*x()).position();o.active.index==f()-1&&(o.active.last=!0),void 0!=t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}},S=function(e,t,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()})):"reset"==t?r.css(o.animProp,s):"ticker"==t&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),H()}))}else{var a={};a[o.animProp]=e,"slide"==t?r.animate(a,i,o.settings.easing,function(){I()}):"reset"==t?r.css(o.animProp,e):"ticker"==t&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),H()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var s="";o.settings.buildPager&&e.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(t)},w=function(){o.settings.pagerCustom?o.pagerEl=e(o.settings.pagerCustom):(o.pagerEl=e('<div class="bx-pager" />'),o.settings.pagerSelector?e(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),b()),o.pagerEl.delegate("a","click",z)},T=function(){o.controls.next=e('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=e('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",A),o.controls.prev.bind("click",P),o.settings.nextSelector&&e(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&e(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=e('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},C=function(){o.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=e('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",y),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?e(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),q(o.settings.autoStart?"stop":"start")},E=function(){o.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},A=function(e){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),e.preventDefault()},P=function(e){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),e.preventDefault()},k=function(e){r.startAuto(),e.preventDefault()},y=function(e){r.stopAuto(),e.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),t.preventDefault()},M=function(t){return"short"==o.settings.pagerType?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},I=function(){if(o.settings.infiniteLoop){var e="";0==o.active.index?e=o.children.eq(0).position():o.active.index==f()-1&&o.carousel?e=o.children.eq((f()-1)*x()).position():o.active.index==o.children.length-1&&(e=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},q=function(e){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[e]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},D=function(){1==f()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==f()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},W=function(){var t=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();t="horizontal"==o.settings.mode?-i.left:-i.top}S(t,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var t=0;o.children.each(function(){t+="horizontal"==o.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=o.settings.speed/t,n="horizontal"==o.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(r.css(n))));H(s)}),H()},H=function(e){speed=e?e:o.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?t=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-t.left:-t.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",N)},N=function(e){if(o.working)e.preventDefault();else{o.touch.originalPos=r.position();var t=e.originalEvent;o.touch.start.x=t.changedTouches[0].pageX,o.touch.start.y=t.changedTouches[0].pageY,o.viewport.bind("touchmove",B),o.viewport.bind("touchend",X)}},B=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=t.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},X=function(e){o.viewport.unbind("touchmove",B);var t=e.originalEvent,i=0;if(o.touch.end.x=t.changedTouches[0].pageX,o.touch.end.y=t.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",X)},Y=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,r.redrawSlider())};return r.goToSlide=function(t,i){if(!o.working&&o.active.index!=t)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>t?f()-1:t>=f()?0:t,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=f()-1,o.settings.pager&&M(o.active.index),o.settings.controls&&D(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){e(this).css("zIndex",50),I()});else{o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-x():(f()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(t>=0){var c=t*x();s=o.children.eq(c).position()}if(s!==void 0){var g="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var e=parseInt(o.active.index)+1;r.goToSlide(e,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var e=parseInt(o.active.index)-1;r.goToSlide(e,"prev")}},r.startAuto=function(e){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=e&&q("stop"))},r.stopAuto=function(e){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=e&&q("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(p()),o.viewport.css("height",h()),o.settings.ticker||m(),o.active.last&&(o.active.index=f()-1),o.active.index>=f()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(b(),M(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,e(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),e(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),e(window).unbind("resize",Y))},r.reloadSlider=function(e){void 0!=e&&(s=e),r.destroySlider(),d()},d(),this}})(jQuery),function(e,t){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(n){function s(){var t=e(g),i=e(h);a&&(h.length?a.reject(d,t,i):a.resolve(d)),e.isFunction(n)&&n.call(r,d,t,i)}function o(t,n){t.src===i||-1!==e.inArray(t,c)||(c.push(t),n?h.push(t):g.push(t),e.data(t,"imagesLoaded",{isBroken:n,src:t.src}),l&&a.notifyWith(e(t),[n,d,e(g),e(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=e.isFunction(e.Deferred)?e.Deferred():0,l=e.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return e.isPlainObject(n)&&e.each(n,function(e,t){"callback"===e?n=t:a&&a[e](t)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(e){o(e.target,"error"===e.type)}).each(function(n,s){var r=s.src,a=e.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==t?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);

/***********************************lazyload.min.js*********************************************************/

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);


/***********************************postscribe.min.js*********************************************************/
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["postscribe"]=e():t["postscribe"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={"exports":{},"id":n,"loaded":!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),i=n(o);t.exports=i["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(){}function a(){var t=m.shift();if(t){var e=h.last(t);e.afterDequeue(),t.stream=s.apply(void 0,t),e.afterStreamStart()}}function s(t,e,r){function n(t){t=r.beforeWrite(t),g.write(t),r.afterWrite(t)}g=new p["default"](t,r),g.id=y++,g.name=r.name||g.id,u.streams[g.name]=g;var o=t.ownerDocument,s={"close":o.close,"open":o.open,"write":o.write,"writeln":o.writeln};c(o,{"close":i,"open":i,"write":function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n(e.join(""))},"writeln":function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n(e.join("")+"\n")}});var l=g.win.onerror||i;return g.win.onerror=function(t,e,n){r.error({"msg":t+" - "+e+": "+n}),l.apply(g.win,[t,e,n])},g.write(e,function(){c(o,s),g.win.onerror=l,r.done(),g=null,a()}),g}function u(t,e,r){if(h.isFunction(r))r={"done":r};else if("clear"===r)return m=[],g=null,void(y=0);r=h.defaults(r,d),t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t;var n=[t,e,r];return t.postscribe={"cancel":function(){n.stream?n.stream.abort():n[1]=i}},r.beforeEnqueue(n),m.push(n),g||a(),t.postscribe}e.__esModule=!0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=u;var l=r(2),p=o(l),f=r(4),h=n(f),d={"afterAsync":i,"afterDequeue":i,"afterStreamStart":i,"afterWrite":i,"autoFix":!0,"beforeEnqueue":i,"beforeWriteToken":function(t){return t},"beforeWrite":function(t){return t},"done":i,"error":function(t){throw new Error(t.msg)},"releaseAsync":!1},y=0,m=[],g=null;c(u,{"streams":{},"queue":m,"WriteStream":p["default"]})},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){var r=d+e,n=t.getAttribute(r);return f.existy(n)?String(n):n}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=d+e;f.existy(r)&&""!==r?t.setAttribute(n,r):t.removeAttribute(n)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=r(3),l=o(c),p=r(4),f=n(p),h=!1,d="data-ps-",y="ps-style",m="ps-script",g=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.root=e,this.options=r,this.doc=e.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new l["default"]("",{"autoFix":r.autoFix}),this.actuals=[e],this.proxyHistory="",this.proxyRoot=this.doc.createElement(e.nodeName),this.scriptStack=[],this.writeQueue=[],s(this.proxyRoot,"proxyof",0)}return t.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();f.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},t.prototype._callFunction=function(t){var e={"type":"function","value":t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},t.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,o=[];(e=this.parser.readToken())&&!(r=f.isScript(e))&&!(n=f.isStyle(e));)e=this.options.beforeWriteToken(e),e&&o.push(e);o.length>0&&this._writeStaticTokens(o),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},t.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,h&&(e.proxyInnerHTML=this.proxyRoot.innerHTML),this._walkChunk(),h&&(e.actualInnerHTML=this.root.innerHTML),e):null},t.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],o=[],i=t.length,a=0;a<i;a++){var s=t[a],u=s.toString();if(r.push(u),s.attrs){if(!/^noscript$/i.test(s.tagName)){var c=e++;n.push(u.replace(/(\/?>)/," "+d+"id="+c+" $1")),s.attrs.id!==m&&s.attrs.id!==y&&o.push("atomicTag"===s.type?"":"<"+s.tagName+" "+d+"proxyof="+c+(s.unary?" />":">"))}}else n.push(u),o.push("endTag"===s.type?u:"")}return{"tokens":t,"raw":r.join(""),"actual":n.join(""),"proxy":o.join("")}},t.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];f.existy(t=e.shift());){var r=1===t.nodeType,n=r&&a(t,"proxyof");if(!n){r&&(this.actuals[a(t,"id")]=t,s(t,"id"));var o=t.parentNode&&a(t.parentNode,"proxyof");o&&this.actuals[o].appendChild(t)}e.unshift.apply(e,f.toArray(t.childNodes))}},t.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,t=this.options.beforeWriteToken(t),t&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},t.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",t=this.options.beforeWriteToken(t),t&&this._writeStyleToken(t),e&&this.write()},t.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,y),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},t.prototype._buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),f.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),e},t.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},t.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},t.prototype._onScriptDone=function(t){return t!==this.scriptStack[0]?void this.options.error({"msg":"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)))},t.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),o=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?o:function(){e(),o()}));try{this._insertCursor(r,m),r.src&&!n||e()}catch(t){this.options.error(t),e()}},t.prototype._buildScript=function(t){var e=this.doc.createElement(t.tagName);return f.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),t.content&&(e.text=t.content),e},t.prototype._scriptLoadHandler=function(t,e){function r(){t=t.onload=t.onreadystatechange=t.onerror=null}function n(){r(),null!=e&&e(),e=null}function o(t){r(),a(t),null!=e&&e(),e=null}function i(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}var a=this.options.error;i(t,"load"),i(t,"error"),u(t,{"onload":function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){o({"msg":"onload handler failed "+e+" @ "+t.src})}n()},"onerror":function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void o({"msg":"onerror handler failed "+e+" @ "+t.src})}o({"msg":"remote script failed "+t.src})},"onreadystatechange":function(){/^(loaded|complete)$/.test(t.readyState)&&n()}})},t.prototype._shouldRelease=function(t){var e=/^script$/i.test(t.nodeName);return!e||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},t}();e["default"]=g},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={"exports":{},"id":n,"loaded":!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),i=n(o);t.exports=i["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var a=r(2),s=o(a),u=r(3),c=o(u),l=r(6),p=n(l),f=r(5),h={"comment":/^<!--/,"endTag":/^<\//,"atomicTag":/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,"startTag":/^</,"chars":/^[^<]/},d=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.stream=r;var o=!1,a={};for(var u in s)s.hasOwnProperty(u)&&(n.autoFix&&(a[u+"Fix"]=!0),o=o||a[u+"Fix"]);o?(this._readToken=(0,p["default"])(this,a,function(){return e._readTokenImpl()}),this._peekToken=(0,p["default"])(this,a,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return t.prototype.append=function(t){this.stream+=t},t.prototype.prepend=function(t){this.stream=t+this.stream},t.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},t.prototype._peekTokenImpl=function(){for(var t in h)if(h.hasOwnProperty(t)&&h[t].test(this.stream)){var e=c[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},t.prototype.peekToken=function(){return this._peekToken()},t.prototype.readToken=function(){return this._readToken()},t.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&t[e.type](e)===!1)return},t.prototype.clear=function(){var t=this.stream;return this.stream="",t},t.prototype.rest=function(){return this.stream},t}();e["default"]=d,d.tokenToString=function(t){return t.toString()},d.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,f.escapeQuotes)(t[r],null));return e},d.supports=s;for(var y in s)s.hasOwnProperty(y)&&(d.browserHasFlaw=d.browserHasFlaw||!s[y]&&y)},function(t,e){"use strict";e.__esModule=!0;var r=!1,n=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=r=o.innerHTML!==i}catch(t){e.tagSoup=r=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===o.childNodes.length}catch(t){e.selfClose=n=!1}o=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";function n(t){var e=t.indexOf("-->");if(e>=0)return new c.CommentToken(t.substr(4,e-1),e+3)}function o(t){var e=t.indexOf("<");return new c.CharsToken(e>=0?e:t.length)}function i(t){var e=t.indexOf(">");if(e!==-1){var r=t.match(l.startTag);if(r){var n=function(){var t={},e={},n=r[2];return r[2].replace(l.attr,function(r,o){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(t[arguments[5]]="",e[arguments[5]]=!0):t[o]=arguments[2]||arguments[3]||arguments[4]||l.fillAttr.test(o)&&o||"":t[o]="",n=n.replace(r,"")}),{"v":new c.StartTagToken(r[1],r[0].length,t,e,(!!r[3]),n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if("object"===("undefined"==typeof n?"undefined":u(n)))return n.v}}}function a(t){var e=i(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new c.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}}function s(t){var e=t.match(l.endTag);if(e)return new c.EndTagToken(e[1],e[0].length)}e.__esModule=!0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=n,e.chars=o,e.startTag=i,e.atomicTag=a,e.endTag=s;var c=r(4),l={"startTag":/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,"endTag":/^<\/([\-A-Za-z0-9_]+)[^>]*>/,"attr":/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,"fillAttr":/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var o=r(5),i=(e.Token=function t(e,r){n(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=function(){function t(e,r){n(this,t),this.type="comment",this.length=r||(e?e.length:0),this.text="",this.content=e}return t.prototype.toString=function(){return"<!--"+this.content},t}(),e.CharsToken=function(){function t(e){n(this,t),this.type="chars",this.length=e,this.text=""}return t.prototype.toString=function(){return this.text},t}(),e.TagToken=function(){function t(e,r,o,i,a){n(this,t),this.type=e,this.length=o,this.text="",this.tagName=r,this.attrs=i,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1}return t.formatTag=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="<"+t.tagName;for(var n in t.attrs)if(t.attrs.hasOwnProperty(n)){r+=" "+n;var i=t.attrs[n];"undefined"!=typeof t.booleanAttrs&&"undefined"!=typeof t.booleanAttrs[n]||(r+='="'+(0,o.escapeQuotes)(i)+'"')}return t.rest&&(r+=" "+t.rest),r+=t.unary&&!t.html5Unary?"/>":">",void 0!==e&&null!==e&&(r+=e+"</"+t.tagName+">"),r},t}());e.StartTagToken=function(){function t(e,r,o,i,a,s){n(this,t),this.type="startTag",this.length=r,this.text="",this.tagName=e,this.attrs=o,this.booleanAttrs=i,this.html5Unary=!1,this.unary=a,this.rest=s}return t.prototype.toString=function(){return i.formatTag(this)},t}(),e.AtomicTagToken=function(){function t(e,r,o,i,a){n(this,t),this.type="atomicTag",this.length=r,this.text="",this.tagName=e,this.attrs=o,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=a}return t.prototype.toString=function(){return i.formatTag(this,this.content)},t}(),e.EndTagToken=function(){function t(e,r){n(this,t),this.type="endTag",this.length=r,this.text="",this.tagName=e}return t.prototype.toString=function(){return"</"+this.tagName+">"},t}()},function(t,e){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}e.__esModule=!0,e.escapeQuotes=r},function(t,e){"use strict";function r(t){return t&&"startTag"===t.type&&(t.unary=s.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function n(t,e){var n=t.stream,o=r(e());return t.stream=n,o}function o(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}function i(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}function a(t,e,a){function s(){var e=n(t,a);e&&l[e.type]&&l[e.type](e)}var c=i(),l={"startTag":function(r){var n=r.tagName;"TR"===n.toUpperCase()&&c.lastTagNameEq("TABLE")?(t.prepend("<TBODY>"),s()):e.selfCloseFix&&u.test(n)&&c.containsTagName(n)?c.lastTagNameEq(n)?o(t,c):(t.prepend("</"+r.tagName+">"),s()):r.unary||c.push(r)},"endTag":function(r){var n=c.last();n?e.tagSoupFix&&!c.lastTagNameEq(r.tagName)?o(t,c):c.pop():e.tagSoupFix&&(a(),s())}};return function(){return s(),r(a())}}e.__esModule=!0,e["default"]=a;var s=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i}])})},function(t,e){"use strict";function r(t){return void 0!==t&&null!==t}function n(t){return"function"==typeof t}function o(t,e,r){var n=void 0,o=t&&t.length||0;for(n=0;n<o;n++)e.call(r,t[n],n)}function i(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function a(t,e){return t=t||{},i(e,function(e,n){r(t[e])||(t[e]=n)}),t}function s(t){try{return Array.prototype.slice.call(t)}catch(r){var e=function(){var e=[];return o(t,function(t){e.push(t)}),{"v":e}}();if("object"===("undefined"==typeof e?"undefined":f(e)))return e.v}}function u(t){return t[t.length-1]}function c(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}function l(t){return c(t,"script")}function p(t){return c(t,"style")}e.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.existy=r,e.isFunction=n,e.each=o,e.eachKey=i,e.defaults=a,e.toArray=s,e.last=u,e.isTag=c,e.isScript=l,e.isStyle=p}])});

/***********************************common.js*********************************************************/
/* 20180125 mark from wayne
//防止被 iframe=================
if (top.location !== self.location && document.referrer.search("ettoday.net") < 0) {
	top.location.href = window.location.href;
}
*/


//側欄固定開始(新聞雲主站)
$(function () {
	const topMenuH = 0; //★吸住選單高度(預設填0)
	const distance = 1500; // TOP吸住距離
	let stickyData = {};
	let stickySidebar; // 側攔
	let sInner; // 側攔inner
	let mainCol; // 主欄
	let executeBottom, tickingTop, tickingBom, setHeight = false;

	function getData() {
		let scrollH = window.pageYOffset;
		let sidebarHeight = sInner.clientHeight;
		let isStickyBottom = mainCol.clientHeight > sInner.clientHeight;
		let winH = window.innerHeight;
		let sPosTop = stickySidebar.getBoundingClientRect().top - topMenuH + window.pageYOffset;
		let point1 = Math.floor(distance + sPosTop);
		let point2 = Math.floor(point1 + sInner.clientHeight - winH)

		return {
			winH, sPosTop, point1, point2, scrollH, sidebarHeight, isStickyBottom
		}
	}

	function stickyTop() {
		sInner.classList.add('sticky');
		sInner.style.position = 'fixed';
		sInner.style.top = `${topMenuH}px`;
		sInner.style.bottom = 'unset';
	}

	function stickyBottom() {
		sInner.classList.add('sticky');
		sInner.style.position = 'fixed';
		sInner.style.top = 'unset';
		sInner.style.bottom = '0px';
	}

	function closeSticky() {
		sInner.style.position = 'static';
		sInner.style.top = 'unset';
		sInner.classList.remove('sticky');
	}

	function sticky() {
		sInner.style.position = 'absolute';
		sInner.style.top = `${stickyData.point1}px`;
		sInner.style.bottom = 'unset';
	}

	function checkBottom() {
		if (executeBottom) return;
		window.addEventListener('scroll', bottomListener);
		executeBottom = true
	}

	function topListener() {
		stickyData = getData();
		if (!tickingTop) {
			requestAnimationFrame(function () {
				if (!setHeight) {
					stickySidebar.style.height = `${stickyData.sidebarHeight + distance}px`;
					setHeight = true;
				}
				if (stickyData.sidebarHeight + distance > stickySidebar.clientHeight && !stickyData.isStickyBottom) {
					stickySidebar.style.height = `${stickyData.sidebarHeight + distance}px`;
				}
				if (stickyData.scrollH > stickyData.point2) { // 監聽 bottom觸發 
					if (stickyData.isStickyBottom) checkBottom(); //判斷是否執行 bottom 
				}
				switch (true) {
					case (stickyData.scrollH <= stickyData.sPosTop):
						closeSticky();
						break;
					case (stickyData.scrollH > stickyData.sPosTop && stickyData.scrollH <= stickyData.point1):
						stickyTop();
						break;
					case (stickyData.scrollH > stickyData.point1 && stickyData.scrollH <= stickyData.point2):
						sticky();
						break;
				}
				tickingTop = true;
			});
		}
		tickingTop = false;
	}

	function bottomListener() {
		if (!tickingBom) {
			requestAnimationFrame(function () {
				switch (true) {
					case (stickyData.scrollH > stickyData.point2):
						stickyBottom();
						break;
				}
				tickingBom = true;
			});
		}
		tickingBom = false;
	}

	//簡易監聽
	function initListener() {
		let sPosTop = stickySidebar.getBoundingClientRect().top + window.pageYOffset;
		let scrollH = window.pageYOffset;
		requestAnimationFrame(function () {
			if (scrollH > sPosTop) {
				stickyTop();
				window.removeEventListener('scroll', initListener);
				window.addEventListener('scroll', topListener);
			}
		});
	}


	function init(main, sidebar) {
		mainCol = document.querySelector(main);
		stickySidebar = document.querySelector(sidebar);
		sInner = stickySidebar.querySelector('.inner');
		sInner.style.width = '300px';
		window.addEventListener('scroll', initListener)
	};

	if (!!document.querySelector('body.index')) {
		init('.c2', '.c3'); // 首頁
	} else {
		init('.c1', '.c2'); // 其他頁
	}

	//有gotoTop要加
	$(".gototop").on("click", function () {
		closeSticky();
	});

});
//側欄固定結束(新聞雲主站)


// 模組 模組 新聞內頁 分享按鈕=========
$(function(){
	var iPoint = 500;
	var iWinScrollT;
	var oScrollTimer = null;
	$(window).on("scroll", function(){
		if( $("body.news-page").length > 0 ){ //新聞內頁
			if (oScrollTimer) {
				clearTimeout(oScrollTimer);
			}
			oScrollTimer = setTimeout(function () {
				iWinScrollT = $(window).scrollTop();
				if (iWinScrollT > iPoint) {
					$("#et_sticky_pc").css({"height": "500px"});
				} else {
					$("#et_sticky_pc").css({"height": "0px"});
				}
			}, 100);
		}
	});

	//拷貝連結
	$("#et_sticky_pc .link, .et_social_2 .copy-link").on('click', function(){
		var $temp = $("<input>"); //暫放網址用
		$("body").append($temp);
		$temp.val(window.location.href).select();
		document.execCommand("copy");
		$temp.remove(); //移除
	});

});


//有N則廣告，移除N則原有內容(熱門新聞) =====================
$(function(){
	var $piece =  $(".focus-news .part_list_1 .cover_pic > a");
	var iNum = $(".focus-news .adP01").length; // 要remove的則數
	if( iNum > 0 ){
		$piece.slice(-iNum).remove();
	}
});


//有N則廣告，移除N則原有內容(最夯影音 - 首頁) =====================
$(function(){
	$(".hot_video .part_pictxt_8 > div").each(function(){
		var iNum = $(this).find('.ad_pictxt_1').length; // 要remove的則數
		if(iNum > 0){
			$(this).find('.piece').slice(-iNum).remove();
		}
	});
});


//有N則廣告，移除N則原有內容(最夯影音 - 內頁) =====================
$(function(){
	var $piece =  $(".hot_video .part_pictxt_4 .piece");
	var iNum = $(".hot_video .part_pictxt_4 .ad_pictxt_1").length; // 要remove的則數
	if( iNum > 0 ){
		$piece.slice(-iNum).remove();
	}
});


// 判斷新聞內頁文字廣告，無內容隱藏=====================
$(function(){
	$(".ad_txt_2").find("li:not(:has(a))").hide();
});  


//修正 新聞內文 段落 圖說 margin =================
$(function(){
	$(".subject_article .story p strong").each(function (){
	
		var $strong = $(this);
		var $p = $strong.parent("p");
		var sTxt = $strong.text();
	
		switch (true) {  
	
			//strong 圖說在中間
			case Boolean(sTxt.match(/^▲▼/g)): //正規式 match 輸出陣列需要轉布林 
				$p.prev("p").addClass("no_margin");
				$p.addClass("no_margin");
				break;
	
			//strong 圖說在下
			case Boolean(sTxt.match(/^▲/g)): 
				$p.prev("p").addClass("no_margin");
				break;
	
			//strong 圖說在上
			case Boolean(sTxt.match(/^▼/g)): 
				$p.addClass("no_margin");
				break;
	
			default:
				// console.log("圖說無動作");
		}
	
		//strong 圖說加樣式
		if (sTxt.match(/▼|▲/g)) {
			$strong.addClass("figcaption");
		}
		
	});
});


//文中廣告，若有內容，顯示"請繼續往下閱讀"的文字 & 優化圖說與文中廣告的位置(if廣告插在圖片&圖說中間，移動圖片)
$(function(){
	setTimeout(function(){ 
		$('.ad_in_news').each(function () {
			if ( $(this).find("ins").length || $(this).find("img").length || $(this).find("iframe").length) { //ins:google聯播網，img:其他聯播網
				$(this).find(".ad_readmore").css({"display":"block"});


				//圖說優化 開始============
				switch (true) { 

					//廣告後有：圖說+圖片
					case Boolean( $(this).next('p').find('strong').text().match(/^▲▼/g)):
						$(this).prev("p").addClass("no_margin");
						$(this).next('p').insertBefore($(this));//圖說往上搬
						$(this).next('p').insertBefore($(this));//圖片往上搬
						break;

					//廣告後有：圖片
					case Boolean($(this).prev('p').find('strong').text().match(/^▲▼/g)): 
						$(this).next('p').insertBefore($(this));//圖片往上搬
						break;

					//廣告後有：圖說
					case Boolean($(this).next('p').find('strong').text().match(/^▲(?!▼)/g)):
						$(this).prev("p").addClass("no_margin");
						$(this).next('p').insertBefore($(this));//圖說往上搬
						break;

					default:
						break;
				}
				//圖說優化 結束============

			}	
		});	
	}, 2000);
});	

//標題吸住 最新即時 index.htm====================
$(function(){
	
	if( $(".block_title.fixed").length > 0){
		//複製分身
		$(".container").append( $(".block_title.fixed").clone() );
		$(".block_title.fixed").eq(0).addClass("ori");
		$(".block_title.fixed").eq(1).addClass("add"); //樣式寫在 block.css

		//吸住===
		var iPoint = parseInt( $(".block_title.fixed").offset().top );
		var iWinScrollT;

		var oScrollTimer = null;
		$(window).on("scroll", function(){
			if(oScrollTimer){
				clearTimeout(oScrollTimer);
			}
			oScrollTimer = setTimeout(function(){
				iWinScrollT = $(window).scrollTop();
				if( iWinScrollT > iPoint ){
					$(".block_title.fixed.ori").css("visibility","hidden");
					$(".block_title.fixed.add").css("visibility","visible");
				}else{
					$(".block_title.fixed.ori").css("visibility","visible");
					$(".block_title.fixed.add").css("visibility","hidden");
				}
			},100);
		});
	}
	
});	


//lightbox 合作媒體 （全站）====================================
$(function(){
	var sIframeSrc = "//www.ettoday.net/events/ettoday2017/partner.htm";
	$("a.btn_open_partner").click(function(){
		$(".partner .content iframe").attr("src",sIframeSrc);
		$(".partner").fadeIn(100,function(){
			$(".partner .overlay").css({"background":"rgba(0, 0, 0, 0.7)"});
		});
	});

	$(".btn_close_partner, .partner .overlay").click(function(){
		$(".partner .content iframe").attr("src","");
		$(".partner").fadeOut(100,function(){
			$(".partner .overlay").css({"background":"rgba(0, 0, 0, 0.3)"});
		});
	});
});




//lightbox 我要爆料 （focus.html）====================================
/* 打開 我要爆料， onclick="fnOpenExpose() 觸發 */
function fnOpenExpose(){
	var sIframeSrc = "//www.ettoday.net/events/ettoday2017/law-iframe/expose.htm";
	var sIframeHtml = '<div id="et_expose">\
							<div class="overlay"></div>\
							<div class="btn_close_expose"></div>\
							<div class="content">\
								<iframe src="" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true"></iframe>\
							</div>\
						</div>';
	
	$(".container_box").prepend(sIframeHtml);
	$("#et_expose .content iframe").attr("src",sIframeSrc);
	$("#et_expose").fadeIn(100,function(){
		$("#et_expose .overlay").css({"background":"rgba(0, 0, 0, 0.7)"});
	});

}

// 關閉 我要爆料
$(function(){
	$(".container_box").on("click",".btn_close_expose, #et_expose .overlay",function(){
		$("#et_expose .content iframe").attr("src","");
		$("#et_expose").fadeOut(100,function(){
			$("#et_expose .overlay").css({"background":"rgba(0, 0, 0, 0.3)"});
		});
	});
	
});


//tab 切換=========================
$(function(){
	$('.tab').each(function(index, el){
		var sDisplayVal = $(this).find('.tab_content > div').css("display");
		$(el).find('.tab_title > a').eq(0).addClass('current');
		$(el).find('.tab_title > a').on("mouseenter click",function(e){
			e.preventDefault();
			var iNo = $(this).index();
			$(el).find('.tab_content > div').eq(iNo).css("display",sDisplayVal).siblings().css("display","none");
			$(this).addClass("current").siblings().removeClass("current");
		});
	});
});


//側欄選單hover sub 定位=========================
$(function(){
	$('.nav_1_v3 .btn:has(.sub)').on('mouseenter', function(e){
		var iPosL = $(this).offset().left + 55;
		
		if($(this).hasClass('style_2')){ //專題下拉選單上移
			var iPosT = $(this).offset().top - $(window).scrollTop() - 60;
		}else{
			var iPosT = $(this).offset().top - $(window).scrollTop();
		}

		$(this).find('.sub').css({"left": iPosL, "top": iPosT});
	});
});	

//lazyload 新聞列表圖======================
$(function(){
	if( $(".part_pictxt_3.lazyload").length > 0 || $(".part_pictxt_5.lazyload").length > 0 ){
		$(".part_pictxt_3.lazyload img,.part_pictxt_5.lazyload img").lazyload();
	}
	
	//20200316 首頁、焦點頁、熱門新聞頁、新聞內頁、tag頁加 lazyload
	$(".part_list_1 .cover_pic img, .part_pictxt_2 img, .part_pictxt_8 img, .hot_video img, .part_pictxt_7 img, .related-news img, .hot-newslist img, .tag-newslist img, .story img").lazyload();
	
	//20200317 側欄圖片加 lazyload
	$(".part_pictxt_4 img, .sidebar-hot-express img").lazyload();
});



//TAG滾到指定位置 news.htm==================================================
$(function(){
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$('.scrollgo').click(function(e){
		e.preventDefault();
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({ scrollTop: $(sGoTo).offset().top-10 }, 800);
		return false;
	});
});


//ET快訊 news.htm====================
$(function(){
	//新聞內頁且有ET快訊
	if( $("body.news-page").length > 0 && $(".text_ticker_1").length > 0 ){ 
		
		//無內容 隱藏
		if($(".text_ticker_1 .run .inner a").length === 0){
			$(".text_ticker_1").hide();
		}

		//1則以上才輪播
		if($(".text_ticker_1 .run .inner a").length > 1){ 
			var text_ticker_1 = $(".text_ticker_1 .run .inner").bxSlider({  
				slideWidth:800,
				auto:true,
				speed:100,
				pause:3000,
				controls:false, 
				pager:false,
				autoHover:true,
				onSliderLoad:function(){
					$(".text_ticker_1 .run .inner .piece a").show();
				}
			});
		}
	}
});



// 404 亂數圖片===================
$(function(){
	function fnRandom(argMin, argMax){
			return Math.round(argMin + Math.random()*(argMax - argMin));
	}

	if(document.title.indexOf("找不到網頁") < 0) return;
	$(".subject_404 a.pic img").attr({"src":"https://cdn2.ettoday.net/style/ettoday2017/images/404/" + fnRandom(1, 30) + ".jpg"});
});




//go to top （全站）=======================================================
$(function(){
	
	var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //滾回的位置
	var iScrollPointB = 20; //滾到的位置 出現gototop
	
	//滾動事件
	var oScrollTimer = null;
	$(window).on("scroll", function(){

		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function(){
							if( $(window).scrollTop() > iScrollPointB) {
								$goToTop.css({"opacity":"0.3", "bottom":"70px"});	
							} else {
								$goToTop.css({"opacity":"0", "bottom":"30px"});	
							}
						},150);
	});
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 150);
		return false;
	});
//---	
});


//20220104 Her導購模組選單hover換圖
$(function(){
	var flag = 0;  
	  $("a.her").hover(function(){
		if(flag == 0) {
		  $("a.her img").attr("src","https://cdn2.ettoday.net/images/4310/4310109.jpg");
		  flag = 1;
		}
		else if(flag == 1) {
		  $("a.her img").attr("src","https://cdn2.ettoday.net/images/4302/4302183.jpg");
		  flag = 0;
		}
	});	  
});

// 重覆列表隱藏 ===============
$(function(){
	$('.nav_1_v3 .menu_1, .nav_1_v3 .menu_2, .nav_1_v2 .box_1, .nav_1_v2 .box_2').each(function(index, el){
		let temp = [];
		$(el).find('a').each(function(index, el){
			temp.push($(el).text());       
		});
		temp.forEach(function(item, index, arr){
			if(arr.indexOf(item) !== index){
				$(el).find('a').eq(index).addClass('hide');
			}
		});
	});
});

//ETtoday自製留言版 ===========================================================
//et_comments 全站共用 留言版模組 頁籤切換 et 或 fb
$(function(){
    $("#et_comments .btn_et").click(function(){
        //current
        $("#et_comments .btn_et, #et_comments .btn_fb").removeClass("current");
        $(this).addClass("current");
        //區塊
        $("#et_comments .et_board, #et_comments .fb_board").hide();
        $("#et_comments .et_board").show();
    });
    
    $("#et_comments .btn_fb").click(function(){
        //current
        $("#et_comments .btn_et, #et_comments .btn_fb").removeClass("current");
        $(this).addClass("current");
        //區塊
        $("#et_comments .et_board, #et_comments .fb_board").hide();
        $("#et_comments .fb_board").show();
    });
});

//FB外掛模組 開始
$(function(){
	var js = document.createElement('script');
	js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v16.0&appId=146858218737386';
	document.body.appendChild(js);
})
//FB外掛模組 結束


/*2019 Her導購廣告======= 
上線:10/6 12:00
下線:10/7 23:59
=====================*/
// $(function(){
// 	if( $("body.index").length <= 0) return false;
// 	let sHtml = `
// 		<div class="ad_120" style="width: 120px; height: 120px; overflow: hidden; margin-bottom: 5px;">
// 			<iframe src="https://events.ettoday.net/misc/20191005-goldenbell-sell/ad_120.htm" frameborder="0"></iframe>
// 		</div>
// 	`;
// 	let iNowTime = new Date();
// 	let iStartTime = new Date(2019, 10 - 1, 6, 12, 00, 00);
// 	let iEndTime = new Date(2019, 10 - 1, 7, 23, 59, 59);
	
// 	if(iNowTime >= iStartTime && iNowTime <= iEndTime){ //區間內
// 		if($('.ad_120').length <= 0){ //無結構
// 			$('.nav_1_v3').prepend(sHtml);
// 		}
// 	}else{ //區間外
// 		if($('.ad_120').length > 0){ //有結構
// 			$('.ad_120').remove();
// 		}
// 	}
// });





/*========================================================================
以下GA TrackEvent 點擊追蹤
==========================================================================*/

//GA4 點擊追蹤
$(function(){
    //新聞頁-內文連結
    $(".story a").click(function(){
        gtag('event', '內文點擊_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '內文連結文字': $(this).text(),
            '內文連結網址': $(this).attr("href"),
			'新聞標題': $("body.news-page").find("h1").text(),
			'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-內文側邊分享模組：LOGO
    $("#et_sticky_pc a.logo").click(function(){
        gtag('event', '內文側邊分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'LOGO',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-內文側邊分享模組：Facebook
    $("#et_sticky_pc a.fb").click(function(){
        gtag('event', '內文側邊分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'FB分享',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-內文側邊分享模組：Line
    $("#et_sticky_pc a.line").click(function(){
        gtag('event', '內文側邊分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'LINE',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-內文側邊分享模組：Twitter
    $("#et_sticky_pc a.twitter").click(function(){
        gtag('event', '內文側邊分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'Twitter',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-內文側邊分享模組：複製連結
    $("#et_sticky_pc a.link").click(function(){
        gtag('event', '內文側邊分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': '複製連結',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
        //alert("連結已複製")
    });

    //新聞頁-文末分享模組-1：FB分享
    $(".et_social_2 .facebook").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'FB分享',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末分享模組-1：LINE
    $(".et_social_2 .line").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'LINE',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末分享模組-1：Twitter
    $(".et_social_2 .twitter").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'Twitter',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末分享模組-1：複製連結
    $(".et_social_2 .copy-link").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': '複製連結',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末分享模組-1：列印
    $(".et_social_2 .print").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': '列印',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末分享模組-1：我要留言
    $(".et_social_2 .message").click(function(){
        gtag('event', '內文文末分享模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': '我要留言',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末社群模組-2：YouTube
    $(".et_social_3 .youtube").click(function () {
        gtag('event', '內文文末社群模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'YouTube',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末社群模組-2：Instagram
    $(".et_social_3 .instagram").click(function(){
        gtag('event', '內文文末社群模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'Instagram',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末社群模組-2：LINE
    $(".et_social_3 .line").click(function(){
        gtag('event', '內文文末社群模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'LINE',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末社群模組-2：Twitter
    $(".et_social_3 .twitter").click(function(){
        gtag('event', '內文文末社群模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'Twitter',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });

    //新聞頁-文末社群模組-2：Telegram
    $(".et_social_3 .telegram").click(function(){
        gtag('event', '內文文末社群模組_ettoday_PC', {
            '頻道名稱': 'ettoday',
            '頻道名稱_平台': 'ettoday_PC',
            '平台': 'PC',
            '按鈕類型': 'Telegram',
            '新聞標題': $("body.news-page").find("h1").text(),
            'send_to': ['G-EK0KZ2R7Q6','G-KD7QNC2PBP'] //全網、新聞雲PC
        });
    });
});

//以下是通用版 GA 點擊追蹤
$(function(){	

	//側欄-Footer版權
	$(".footer .menu_1 a").click(function(){
		ga("PCWeb.send", "event", "側欄-Footer版權", ""+ $(this).text() +"");
	});
	
	//首頁-header選單
	$("body.index .menu_box a").click(function(){
		ga("PCWeb.send", "event", "首頁-header選單", ""+ $(this).text() +"");
	});
	
	//首頁-主選單
	$("body.index .nav_1_v3 a").click(function(){
		ga("PCWeb.send", "event", "首頁-主選單", ""+ $(this).text() +"");
	});
	
	//首頁-ET快訊
	$("body.index .text_ticker_1 .piece a").click(function(){
	   ga("PCWeb.send", "event", "首頁-ET快訊", ""+ $(this).text() +"");
	});
	
	//首頁-大圖
	$("body.index .area_1 .piece a img").click(function(){
	   var sImgText = $(this).attr("title");
	   var sImgHref = $(this).parents("a").attr("href");	
	   ga("PCWeb.send", "event", "首頁-大圖", ""+ sImgText +"", ""+ sImgHref +"");
	});
	
	//首頁-頭條快報
	$("body.index .area_2 .part_thumb_3 .piece a").click(function(){
	   var sTitleText = $(this).closest(".piece").find("h3").text();
	   ga("PCWeb.send", "event", "首頁-頭條快報", ""+ sTitleText +"", ""+ $(this).attr('href') +"");
	});
	
	//首頁-頁籤新聞-第1則
	$("body.index .tab_news .part_list_6 .box_2 a img").on("click",function(){
		var iCurrentText = $(this).attr("alt");
		var iParentsNo = $(this).parents(".part_list_6").index();
		var sParentsNo = $("body.index .tab_news .tab_title a").eq(iParentsNo).index()+1;
		var sParentsText = $("body.index .tab_news .tab_title a").eq(iParentsNo).text();
		ga("PCWeb.send", "event", "首頁-頁籤新聞"+"(第"+sParentsNo+"頁籤-"+sParentsText+")", "第1則", ""+ sParentsText + "-" + iCurrentText + "");
	});
	
	//首頁-頁籤新聞
	$("body.index .tab_news .part_list_6 h2 a").on("click",function(){
		var iCurrentNo = $(this).closest(".part_list_6").find("a").index($(this));
		var iCurrentText = $(this).text();
		var iParentsNo = $(this).parents(".part_list_6").index();
		var sParentsNo = $("body.index .tab_news .tab_title a").eq(iParentsNo).index()+1;
		var sParentsText = $("body.index .tab_news .tab_title a").eq(iParentsNo).text();
		ga("PCWeb.send", "event", "首頁-頁籤新聞"+"(第"+sParentsNo+"頁籤-"+sParentsText+")", "第"+iCurrentNo+"則", ""+ sParentsText + "-" + iCurrentText + "");
	});
	
	//首頁-頁籤新聞-看更多
	$("body.index .tab_news .part_list_6 .box_1 .more_box a").on("click",function(){
		var iParentsNo = $(this).parents(".part_list_6").index();
		var sParentsNo = $("body.index .tab_news .tab_title a").eq(iParentsNo).index()+1;
		var sParentsText = $("body.index .tab_news .tab_title a").eq(iParentsNo).text();
		ga("PCWeb.send", "event", "首頁-頁籤新聞"+"(第"+sParentsNo+"頁籤-"+sParentsText+")", "看更多", ""+ $(this).attr('href') +"");
	});
	
	//首頁-頁籤導購
	$("body.index .tab_shopping .part_thumb_1 .piece a").on("click",function(){
		var iCurrentNo = $(this).closest(".part_thumb_1 .piece").index()+1;
		var iCurrentText = $(this).text();
		var iParentsNo = $(this).parents(".part_thumb_1").index();
		var sParentsText = $("body.index .tab_shopping .tab_title a").eq(iParentsNo).text();
		ga("PCWeb.send", "event", "首頁-頁籤導購"+"("+sParentsText+")", "第"+iCurrentNo+"則", ""+ sParentsText + "-" + iCurrentText + "");
	});
	
	//首頁-熱門新聞-第一張圖
	$("body.index .focus-news .cover_pic a").click(function(){
	   ga("PCWeb.send", "event", "首頁-熱門新聞", ""+ $(this).find('img').attr('alt') +"", "第1張圖");
	});	
		
	//首頁-熱門新聞-標題
	$("body.index .focus-news h3 a").click(function(){
	   ga("PCWeb.send", "event", "首頁-熱門新聞", ""+ $(this).text() +"", "標題");
	});	
	
	//首頁-熱門新聞-更多
	$("body.index .focus-news .btn_more").click(function(){
	   ga("PCWeb.send", "event", "首頁-熱門新聞", "更多", "");
	});	
	
	//首頁-貼稿區群組-圖
	$("body.index .part_pictxt_2 .cover_pic").click(function(){
	   ga("PCWeb.send", "event", "首頁-貼稿區群組", ""+ $(this).parent().find('h2').text() +"", ""+ $(this).find('h3').text() +"");
	});	
	
	//首頁-貼稿區群組-標
	$("body.index .part_pictxt_2 .list h3 a").click(function(){
	   ga("PCWeb.send", "event", "首頁-貼稿區群組", ""+ $(this).closest('.piece').find('h2').text() +"", ""+ $(this).text() +"");
	});		
	
	//首頁-貼稿區群組-more
	$("body.index .part_pictxt_2 .btn_more").click(function(){
	   ga("PCWeb.send", "event", "首頁-貼稿區群組", ""+ $(this).closest('.title').find('h2').text() +"", "更多");
	});	
			
	//首頁-最夯影音
	$("body.index .hot_video a").click(function(){
	   ga("PCWeb.send", "event", "首頁-最夯影音", ""+ $(this).attr('href') +"");
	});	
	
	//首頁-最夯影音-更多
	$("body.index .hot_video .btn_more").click(function(){
	   ga("PCWeb.send", "event", "首頁-最夯影音", "更多", "");
	});	
	
	//首頁-大檸檬-圖+文
	$("body.index .lemon .part_thumb_1 a").click(function(){
	   ga("PCWeb.send", "event", "首頁-鍵盤大檸檬", ""+ $(this).closest(".piece").find("h3").text() +"", "");
	});	
	
	//首頁-大檸檬-更多
	$("body.index .lemon .btn_more").click(function(){
	   ga("PCWeb.send", "event", "首頁-鍵盤大檸檬", "更多", "");
	});	
	
	//首頁-影音開框關閉鈕
	$("body.index #etnews_live_player .box_2 .close").click(function(){		
	   var sTitleText = $(this).parents(".box_2").siblings(".box_1").find("a").text();
	   ga("PCWeb.send", "event", "首頁-影音開框關閉鈕", ""+ sTitleText +"");	
	});
	
	//首頁-無限捲動-新聞列表 (新)
	$("body.index .infinite_scroll .part_list_7 h3 a").click(function(){
	   ga("PCWeb.send", "event", "首頁-無限捲動", ""+ $(this).text() +"", "標題");
	});
	
	//首頁-無限捲動-新聞大類 (舊)
	$("body.index .infinite_scroll .part_pictxt_5 a.tag").click(function(){
	   ga("PCWeb.send", "event", "首頁-無限捲動", "大類標籤" , ""+ $(this).text() +"");
	});
	
	//首頁-無限捲動-新聞列表圖 (舊)
	$("body.index .infinite_scroll .part_pictxt_5 a.pic").click(function(){
	   ga("PCWeb.send", "event", "首頁-無限捲動", ""+ $(this).siblings('h3').text() +"","圖片");
	});
	
	//首頁-無限捲動-新聞列表 (舊)
	$("body.index .infinite_scroll .part_pictxt_5 h3 a").click(function(){
	   ga("PCWeb.send", "event", "首頁-無限捲動", ""+ $(this).text() +"", "標題");
	});
		
	//內頁版頭-Topbar
	$(".topbar a").click(function(){
		ga("PCWeb.send", "event", "內頁版頭-Topbar", ""+ $(this).text() +"");
	});
	
	//內頁版頭-主選單
	$(".nav_1_v2 a").click(function(){
		ga("PCWeb.send", "event", "內頁版頭-主選單", ""+ $(this).text() +"");
	});
	
	//內頁版頭-主選單
	$(".nav_1_v2 a.her").click(function(){
		ga("PCWeb.send", "event", "內頁版頭-主選單", "her森森");
	});
	
	//內頁版頭-右上選單
	$(".nav_2 a").click(function(){
		ga("PCWeb.send", "event", "內頁版頭-右上特開選單", ""+ $(this).text() +"");
	});
	
	//內頁側欄-熱門新聞
	$(".sidebar-hot-news h3 a").click(function(){
		var iNo = $(".sidebar-hot-news h3 a").index($(this))+1;
		ga("PCWeb.send", "event", "內頁側欄-熱門新聞", "第"+iNo+"則", ""+ $(this).text() +"");
	});
	
	//內頁側欄-最夯影音第一則
	$(".hot_video .part_pictxt_4 .cover_pic a.pic").click(function(){
		var sTitle = $(this).find("h3").text();
		ga("PCWeb.send", "event", "內頁側欄-最夯影音", ""+ sTitle +"", "第1則");
	});
	
	//內頁側欄-最夯影音
	$(".hot_video .part_pictxt_4 .piece a").click(function(){
		var thisParent = $(this).parents(".piece");
		var iNo = $(".hot_video .part_pictxt_4 .piece").index(thisParent)+3;
		var videoH = $(this).parents(".piece").find("h3").find("a").text();
		ga("PCWeb.send", "event", "內頁側欄-最夯影音", ""+ videoH +"", "第"+iNo+"則");
	});
	
	//內頁側欄-熱門快報
	$(".sidebar-hot-express .part_pictxt_6 .piece a").click(function(){
		var thisParent = $(this).parents(".piece");
		var iNo = $(".sidebar-hot-express .part_pictxt_6 .piece").index(thisParent)+1;
		var sNewsH = $(this).parent(".piece").find("h3.title").find("a").text();
		ga("PCWeb.send", "event", "內頁側欄-熱門快報", "第"+iNo+"則", ""+ sNewsH +"-"+ $(this).attr('href') +"");
	});
	
	//新聞頁-次類別
	$(".news-page .c1 .part_menu_5 a").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
	   ga("PCWeb.send", "event", "新聞頁-次類別", ""+ sFocusA +"", ""+ $(this).text() +"");
	});
	
	//新聞頁-新聞內連結
	$(".story a").click(function(){
	   ga("PCWeb.send", "event", "新聞頁-新聞本文區", ""+$(this).text()+"",""+$(this).attr('href')+"");
	});
	
	//新聞頁-ET快訊
	$(".news-page .text_ticker_1 .piece a").click(function(){
	   ga("PCWeb.send", "event", "新聞頁-ET快訊", ""+ $(this).text() +"");
	});
	
	//新聞頁-突發新聞-小圖
	$(".news-page .breakingnews .et_pictxt_1 .piece a.pic img").click(function(){
	   var bTitle = $(this).parents(".piece").find(".title").text();	
	   ga("PCWeb.send", "event", "新聞頁-突發新聞", ""+ bTitle +"", "小圖");
	});
	
	//新聞頁-突發新聞-標題
	$(".news-page .breakingnews .et_pictxt_1 .piece a.title").click(function(){
	   ga("PCWeb.send", "event", "新聞頁-突發新聞", ""+ $(this).text() +"", "標題");
	});
	
	//新聞頁-突發新聞-大圖
	$(".news-page .breakingnews .et_pictxt_1 .banner_1 img").click(function(){
	   var Btitle = $(this).parents(".breakingnews").find(".block_title").text();	
	   ga("PCWeb.send", "event", "新聞頁-突發新聞", ""+ Btitle +"", "大圖");
	});
	
	//新聞頁-文末關鍵字
	$(".part_tag_1 a").click(function(){
		ga("PCWeb.send", "event", "新聞頁-文末關鍵字", ""+$(this).text()+"",""+$(this).attr('href')+"");
	});
	
	//新聞頁-文末頁籤新聞
	$("#hot_area .piece .part_list_3 h3 a").on("click",function(){
		var iCurrentNo = $(this).closest(".piece").find("a").index($(this))+1;
		var iCurrentText = $(this).text();
		var iParentsNo = $(this).parents(".piece").index();
		var sParentsText = $("#hot_area .tab_title a").eq(iParentsNo).text();
		ga("PCWeb.send", "event", "新聞頁-文末頁籤"+"("+sParentsText+")", "第"+iCurrentNo+"則", ""+ sParentsText + "-" + iCurrentText + "");
	});
	
	//新聞頁-文末熱門新聞
	$(".news-page .hot-news .part_list_3 h3 a").click(function(){
		var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
		var iNo = $(".news-page .hot-news .part_list_3 h3 a").index($(this))+1;
		ga("PCWeb.send", "event", "新聞頁-文末熱門新聞", ""+ sFocusA +"-"+"第"+iNo+"則", ""+ $(this).text() +"");
	});
	
	//新聞頁-文末相關新聞-第一則圖片
	$(".related-news .part_pictxt_7 .box_1 a").click(function(){
		var sTitle = $(this).parents(".part_pictxt_7").find(".box_2").find("h3").text();
		ga("PCWeb.send", "event", "新聞頁-文末相關新聞", ""+ sTitle +"", "第1則圖片");
	});
	
	//新聞頁-文末相關新聞-第一則標題
	$(".related-news .part_pictxt_7 .box_2 a").click(function(){
		ga("PCWeb.send", "event", "新聞頁-文末相關新聞", ""+$(this).text()+"", "第1則標題");
	});
	
	//新聞頁-文末相關新聞
	$(".related-news .part_thumb_1 .piece a").click(function(){
		var sTitle = $(this).parent(".piece").find("h3").text();
		var iNo = $(this).parents(".piece").index()+2;
		ga("PCWeb.send", "event", "新聞頁-文末相關新聞", ""+ sTitle +"", "第"+iNo+"則");
	});
	
	//新聞頁-左側社群按鈕：logo回首頁
	$("#et_sticky_pc a.logo").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "logo回首頁",""+self.location.href+"");
	});	
	
	//新聞頁-左側社群按鈕：Facebook
	$("#et_sticky_pc a.fb").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "Facebook-share",""+self.location.href+"");
	});	
	
	//新聞頁-左側社群按鈕：Line
	$("#et_sticky_pc a.line").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "Line-share",""+self.location.href+"");
	});
	
	//新聞頁-左側社群按鈕：Twitter
	$("#et_sticky_pc a.twitter").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "Twitter-share",""+self.location.href+"");
	});	
	
	//新聞頁-左側社群按鈕：wechat
	$("#et_sticky_pc a.wechat").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "wechat-share",""+self.location.href+"");
	});	
	
	//新聞頁-左側社群按鈕：Copylink
	$("#et_sticky_pc a.link").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-左側社群分享", "Copylink",""+self.location.href+"");
	  alert("連結已複製");	
	});	
	
	//新聞頁-社群分享：Facebook  /*20201214 上線觀察一陣子後就可拔除*/
	$(".part_menu_4 a.fb").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-文末社群分享", "Facebook-share",""+self.location.href+"");
	});
	
	//新聞頁-文末分享組件：Facebook
	$(".et_social_2 .facebook").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","Facebook", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末分享組件：Line
	$(".et_social_2 .line").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","Line", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末分享組件：Twitter
	$(".et_social_2 .twitter").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","Twitter", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末分享組件：複製連結
	$(".et_social_2 .copy-link").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","複製連結", h1Title+"-"+thisUrl); 
		alert("連結已複製");
	});	
	
	//新聞頁-文末分享組件：列印
	$(".et_social_2 .print").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","列印", h1Title+"-"+thisUrl); 
	});		
	
	//新聞頁-文末分享組件：留言
	$(".et_social_2 .message").click(function() {     
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末分享","留言", h1Title+"-"+thisUrl); 
	});	

	//新聞頁-文末社群追蹤：Youtube
	$(".et_social_3 .youtube").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末追蹤","Youtube", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末社群追蹤：Instagram
	$(".et_social_3 .instagram").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末追蹤","Instagram", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末社群追蹤：Line
	$(".et_social_3 .line").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末追蹤","Line", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末社群追蹤：Twitter
	$(".et_social_3 .twitter").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末追蹤","Twitter", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-文末社群追蹤：Telegram
	$(".et_social_3 .telegram").click(function() {    
		var thisUrl = self.location.href;
		var h1Title = $(this).parents(".subject_article").find("h1").text();  
		ga("PCWeb.send", "event", "新聞雲PC-文末追蹤","Telegram", h1Title+"-"+thisUrl); 
	});	
	
	//新聞頁-影音開框關閉鈕
	$("body.news-page #etnews_live_player .box_2 .close").click(function(){		
	   var sTitleText = $(this).parents(".box_2").siblings(".box_1").find("#video_title").text();
	   ga("PCWeb.send", "event", "新聞頁-影音開框關閉鈕", ""+ sTitleText +"");	
	});
		
	//新聞頁-影音開框節目表開關
	$("body.news-page #etnews_live_player .box_2 .slidmenu .videotrack").click(function(){
	   $(this).removeClass("videotrack");
	   var sTitleText = $(this).parents(".box_2").siblings(".box_1").find("#video_title").text();
	   ga("PCWeb.send", "event", "新聞頁-影音開框節目表開關", ""+ sTitleText +"");	
	});
	
	//新聞頁-文末粉絲團連結
	$(".fb_fans a").click(function(){
	  ga("PCWeb.send", "event", "新聞頁-文末粉絲團文字", ""+ $(this).text() +"", ""+ $(this).attr('href') +"");
	});
		
	//新聞頁-發燒話題
	$(".news-page .part_menu_3 .menu_txt_2 a").click(function(){
		ga("PCWeb.send", "event", "新聞頁-發燒話題", ""+ $(this).text() +"", ""+$(this).attr('href')+"");
	});
	
	//焦點頁-次選單
	$(".focus .c1 .part_menu_5 a").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
	   ga("PCWeb.send", "event", "焦點頁-次選單", ""+ sFocusA +"", ""+ $(this).text() +"");
	});
	
	//焦點頁-首圖
	$(".focus .c1 .part_pictxt_7 .box_1 a.pic").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
	   var sFocusH = $(this).parents(".c1").find(".box_2 h3").text();
	   ga("PCWeb.send", "event", "焦點頁", ""+ sFocusA +"-"+ sFocusH +"", "首則帶圖");
	});
	
	//焦點頁-首標
	$(".focus .c1 .part_pictxt_7 .box_2 h3").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();	
	   ga("PCWeb.send", "event", "焦點頁", ""+ sFocusA +"-"+ $(this).text() +"", "首則標題");
	});
	
	//焦點頁-標籤第1到3則
	$(".focus .c1 .part_area_1 .part_list_3 h3 a").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();	
	   var iNo = $(".focus .c1 .part_area_1 .part_list_3 h3 a").index($(this))+1;	
	   ga("PCWeb.send", "event", "焦點頁", ""+ sFocusA +"-"+ $(this).text() +"", "第"+iNo+"則");
	});
	
	//焦點頁-熱門新聞
	$(".focus .two_col h3 a").click(function(){
		var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
		var iNo = $(".focus .two_col h3 a").index($(this))+1;
		ga("PCWeb.send", "event", "焦點頁-熱門新聞", ""+ sFocusA +"-"+"第"+iNo+"則", ""+ $(this).text() +"");
	});
		
	//焦點頁-無限滾動列表-圖片
	$(".focus .c1 .part_pictxt_3 .piece a.pic").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
	   var sHTxt = $(this).parent(".piece").find("h3").text();
	   ga("PCWeb.send", "event", "焦點頁", ""+ sFocusA +"-"+ sHTxt +"", "無限滾動-圖片");
	});
	
	//焦點頁-無限滾動列表-標題
	$(".focus .c1 .part_pictxt_3 .piece h3 a").click(function(){
	   var sFocusA = $(this).parents(".c1").find(".part_menu_5 strong").text();
	   ga("PCWeb.send", "event", "焦點頁", ""+ sFocusA +"-"+ $(this).text() +"", "無限滾動-標題");
	});
	
	//熱門新聞頁-點標題
	$(".hot-newslist .part_pictxt_3 .piece h3 a").click(function(){
	   ga("PCWeb.send", "event", "熱門新聞頁", ""+ $(this).text() +"", "標題");
	});
	
    //熱門新聞頁-點圖片
	$(".hot-newslist .part_pictxt_3 .piece a").click(function(){
	   var sHotText = $(this).parent(".piece").find("h3").text();
	   ga("PCWeb.send", "event", "熱門新聞頁", ""+ sHotText +"", "圖片");
	});
	
	//新聞總覽頁-選單
	$(".news-list .part_menu_2 li a").click(function(){
	   ga("PCWeb.send", "event", "新聞總覽頁-選單", ""+ $(this).text() +"");
	});
	
	//新聞總覽頁
	$(".news-list .part_list_2 h3 a").on("click", function(){
	   var sPeerEm = $(this).siblings("em").text();
	   ga("PCWeb.send", "event", "新聞總覽頁", ""+ sPeerEm +"", ""+ $(this).text() +"");
	});
	
	//關鍵字頁-點圖片
	$(".tag-newslist .part_pictxt_3 .piece a").click(function(){
	   var sTagText = $(this).parent(".piece").find("h3").text();
	   ga("PCWeb.send", "event", "關鍵字頁", "" + sTagText +"", "圖片");
	});	
	
	//關鍵字頁-點標題
	$(".tag-newslist .part_pictxt_3 h3 a").click(function(){
	   ga("PCWeb.send", "event", "關鍵字頁", "" + $(this).text() +"", "標題");
	});
});





/*========================================================================
pushnotification.js
==========================================================================*/
var WPD = 'web.net.ettoday.www';	
var WSU = 'https://restful.ettoday.net:8888/';


var config = {
    apiKey: "AIzaSyD2i2bvJ1pvh4nT_4GnFN8Hhnp2SL1JY98",
    authDomain: "ettoday-webpush.firebaseapp.com",
    databaseURL: "https://ettoday-webpush.firebaseio.com",
    projectId: "ettoday-webpush",
    storageBucket: "ettoday-webpush.appspot.com",
    messagingSenderId: "157983452924"
};
firebase.initializeApp(config);

var time = new Date()

var sHtml = '<div class="et_push_notification">\
                  <img src="https://www.ettoday.net/webpush/img/icon_et.png" >\
                  <h3>歡迎訂閱 ETtoday 新聞推播。</h3>\
                  <span class="et_push_close"><!--關閉--></span>\
                  <p>請點選「訂閱」後，再點擊「允許」即可完成網頁新聞推播訂閱！</p>\
                  <button class="et_push_confirm">訂閱</button>\
                  <button class="et_push_refuse">暫時不要</button>\
          </div>';

const messaging = firebase.messaging();

	messaging.onTokenRefresh(function() {
	    messaging.getToken()
	    .then(function(refreshedToken) {
	        setTokenSentToServer(false);
	        sendTokenToServer(refreshedToken);
	    })
	    .catch(function(err) {
	    });
	});

	messaging.onMessage(function(payload) {
	    const Title = payload.notification['title'];
	    const Options = {
	        body: payload.notification['body'],
	        icon: payload.notification['icon'],
	        click_action: payload.notification['click_action'],
          image: payload.data['image'],
	        sound: 1
	    };
	    var n = new Notification(Title, Options);
	    setTimeout(n.close.bind(n), 80000); 
	}); 

$(function(){
	wp = getCookie("webpush");
	wpcountry = getCookie("et_client_country");
  
	if((wp =='' || wp < 1) && wpcountry == 'TW'){
	 BrowserDetect.init();
	 if(BrowserDetect.browser == 'Safari'){
		//apnsInit(); //20200103 隱藏
	 }
	 else if(BrowserDetect.browser == 'Chrome' || BrowserDetect.browser == 'Firefox'){
	  fcmInit();
	 }
	}  
  });


$(document).on("click",".et_push_confirm",function(){
    if(BrowserDetect.browser == 'Safari'){
        apnsOrder();
    }
    else if(BrowserDetect.browser == 'Chrome' || BrowserDetect.browser == 'Firefox'){
       fcmOrder()
    }
    $(".et_push_notification").remove();
});

$(document).on("click",".et_push_refuse",function(){
    $(".et_push_notification").remove();
    var st = ""
    var expires = new Date();
    expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000);
    var ti = getCookie("webpush");
    st = "webpush=" + (Number(ti)+1) +"; expires=" + expires.toGMTString() +"; domain=ettoday.net; path=/"
    document.cookie = st;
});

$(document).on("click",".et_push_close",function(){
    $(".et_push_notification").remove();
});


function OrderConfirm(){ //20181016：捲動800px觸發推播
  $("body").prepend(sHtml);
  $(window).on("scroll", function(){
  	if( $(window).scrollTop() > 800) {
	
		$(".et_push_notification").css({"display":"block"});
		$(".et_push_notification").animate({opacity:1,top:20},500);
	}
  });	  
}


function apnsInit(){
	if ('safari' in window && 'pushNotification' in window.safari) {  //如果browser支援 notification
        apnsCheck();
    }  
}

function apnsCheck(){
	var permissionData = window.safari.pushNotification.permission(WPD);
	if (permissionData.permission === 'default') {
        setTokenSentToServer(false);
        OrderConfirm();
    } else if (permissionData.permission === 'denied') {
        setTokenSentToServer(false);
    } else if (permissionData.permission === 'granted') {
    }	
}

function apnsOrder(){
	window.safari.pushNotification.requestPermission(WSU, WPD, {}, function(c) {
      if(c.permission === 'granted') {
        token = c.deviceToken;
        sendTokenToServer(token,BrowserDetect.browser);
        apnsCheck(); 
      }
      else if(c.permission === 'denied') {
        apnsCheck();
      }
    });
}

function fcmInit(){ 
	if (window.Notification ) {  
        fcmCheck();
    }    
}	

function fcmCheck(){
    if (Notification.permission === 'default' || Notification.permission === 'undefined') {
        setTokenSentToServer(false);
        OrderConfirm();
      }else if (Notification.permission === 'denied') {
        setTokenSentToServer(false);
      }else if (Notification.permission === 'granted') {
        perCheck();
      }  
}

function fcmOrder() {
    messaging.requestPermission()
    .then(function() {
      perCheck();
    })
    .catch(function(err) {
    });
}

function perCheck() {
    messaging.getToken()
    .then(function(currentToken) {
      if (currentToken) {
        sendTokenToServer(currentToken,BrowserDetect.browser);
      } else {
        setTokenSentToServer(false);
      }
    })
    .catch(function(err) {
    });
}

function sendTokenToServer(currentToken,kind) {
    if (!isTokenSentToServer()) {
      $.post("https://api.ettoday.net/push/web/reg.php",
      {
        token:currentToken,
        kind:kind,
        website:'www'
      },
      function(data,status){
      
      });
      setTokenSentToServer(true);
    } else {
    }
}

function isTokenSentToServer() {
  
    if (window.localStorage.getItem('sent_status') == 1 && ((time.getTime() - window.localStorage.getItem('sent_last')) < 10*60*1000)) {
          return true;
    }
    return false;
}

function setTokenSentToServer(sent) {
    if (sent) {
        window.localStorage.setItem('sent_status', 1);
        window.localStorage.setItem('sent_last', time.getTime());
    } else {
        window.localStorage.setItem('sent_status', 0);
        window.localStorage.setItem('sent_last', 0);
    }
}

var BrowserDetect = {
  init: function () {
    this.userAgent = navigator.userAgent;
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
    || this.searchVersion(navigator.appVersion)
    || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++)	{
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    { // for IE 11
      string: navigator.userAgent,
      subString: ".NET",
      identity: "Explorer",
      versionSearch: "rv",
      icon: "_ie.png"
    },
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome",
      icon: "_chrome.png"
    },
    { 	string: navigator.userAgent,
     subString: "OmniWeb",
     versionSearch: "OmniWeb/",
     identity: "OmniWeb",
     icon: "_omni.png"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version",
      icon: "_safari.png"

    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version",
      icon: "_opera.png"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab",
      icon: "_icab.jpg"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror",
      icon: "_unknown.png"

    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox",
      icon: "_firefox.png"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino",
      icon: "_unknown.png"
    },
    {		
      // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape",
      icon: "_netscape.png"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE",
      icon: "_ie.png"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv",
      icon: "_unknown.png"
    },
    { 
      // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla",
      icon: "_mozilla.png"
    }
  ],
  dataOS : [
  ]

};

function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}