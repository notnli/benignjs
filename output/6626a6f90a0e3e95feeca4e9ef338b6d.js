!function(){let e,t=window,n=!0,o={},a=function(){},s=function(){},r=function(){},i=function(){};try{e=window.top}catch(o){n=!1,e=t}if(e.__wmass||(e.__wmass={}),!e.__wmass.get||e.__wmass.set){let t={};e.__wmass.get||(e.__wmass.get=e=>t[e]),e.__wmass.set||(e.__wmass.set=(e,n)=>{t[e]||(t[e]=n)})}let c,l="outxurl",d="outxgam",f="outxcon",u=Math.floor(100*Math.random()),m={},p={forceDmpId:{anyof:"string"},forceDmpPKey:{anyof:"string"},keywords:{anyof:"object"}},g="sijai",b=(void 0!==e.orientation||navigator.userAgent.indexOf("IEMobile"),e.innerWidth||e.document.documentElement&&0!==e.document.documentElement.clientWidth&&e.document.documentElement.clientWidth||e.document.getElementsByTagName("body")[0].clientWidth,"_papns"),_=[];try{e.__wmass.logger||(e.__wmass.logger=(t="",n="")=>{let a,s,r,i,c=[],l=[],d=[],f=[],u=()=>{let e=new Date,t=e.getMilliseconds().toString();return`${e.toLocaleTimeString()}:${t.padStart(4,"0")}`},m=e=>{let t={info:1,log:2,warn:3,error:4}[o.enableLog];return!0===o.enableLog||t>=e};if(a=s=r=i=function(){},e.console){let o=`${"%cWemass"}${t}`,p=["display: inline-block; color: #fff; background: #92c01f; padding: 1px 4px; border-radius: 3px;",n];e.console.info&&(a=function(){let e=m(1),t=o+"%c INFO",n=[...p,"display: inline-block; color: #111 background: #e3e3e3; padding: 1px 4px; border-radius: 3px;"],a=Array.prototype.slice.call(arguments),s=[t,...n,u(),...a];if(e){for(;c.length>0;)c.shift()();console.info.apply(console,s)}else c.push(console.info.bind(console,...s))}),e.console.log&&(s=function(){let e=m(2),t=o+"%c LOG",n=[...p,"display: inline-block; color: #111 background: #3c3c3b; padding: 1px 4px; border-radius: 3px;"],a=Array.prototype.slice.call(arguments),s=[t,...n,u(),...a];if(e){for(;l.length>0;)l.shift()();console.log.apply(console,s)}else l.push(console.log.bind(console,...s))}),e.console.warn&&(r=function(){let e=m(3),t=o+"%c WARN",n=[...p,"display: inline-block; color: #111 background: orange; padding: 1px 4px; border-radius: 3px;"],a=Array.prototype.slice.call(arguments),s=[t,...n,u(),...a];if(e){for(;d.length>0;)d.shift()();console.warn.apply(console,s)}else d.push(console.warn.bind(console,...s))}),e.console.error&&(i=function(){let e=m(4),t=o+"%c ERROR",n=[...p,"display: inline-block; color: #111 background: red; padding: 1px 4px; border-radius: 3px;"],a=Array.prototype.slice.call(arguments),s=[t,...n,u(),...a];if(e){for(;f.length>0;)f.shift()();console.error.apply(console,s)}else f.push(console.error.bind(console,...s))})}return[a,s,r,i]}),[a,s,r,i]=e.__wmass.logger("%cDMP","display: inline-block; color: #fff; background: #658; padding: 1px 4px; border-radius: 3px;")}catch(e){}let y=[];e.__wmass.getSegments=function(e){let t=w(e),{callback:n,adunit:r,extraKw:c=!1,format:u}="object"===t?e:{},m=["gamvideo","gamvideohb"].indexOf(u)>-1?"wpm":"permutive",p=!1,g=function(){let e={},t=L(),n=(t=m,n=b)=>{let o=[];try{o=JSON.parse(window.localStorage.getItem(n)||"[]").slice(0,250).map(String)}catch(e){o=[]}o.length>0&&(e[t]=o)};if(!1!==p){let t=/^\/\d+\//;t.test(p)&&(p=p.replace(t,""));let n=p.split("/"),o=1;for(let t=0;t<n.length;t++){n[t].length>0&&(e["au"+o]=[`${o>1?"/":""}${n[t]}`],o++)}}if(t||(-1===y.indexOf(d)&&O()&&y.push(d),-1===y.indexOf(l)&&T()&&y.push(l),-1===y.indexOf(f)&&$()&&y.push(f)),n(),"array"===w(_)&&_.length>0){let[e,t]=_;e=["gamvideo","gamvideohb"].indexOf(u)>-1&&0===e.indexOf("per")?"permutive":e,n(e,t)}y.length>0&&(e.wirr=y,s("segmentos de wemass declarados",JSON.stringify(e)));for(let t of[c,o.keywords])if("object"===w(t))for(let n in t){let o=t[n],a=w(o);if(!e[n])switch(a){case"array":e[n]=o;break;case"number":e[n]=[o.toString()];break;case"string":o.length>0&&(o.indexOf(",")>-1?e[n]=o.split():e[n]=[o])}}return"xandr"===u?e:N(u,e)};if("object"!==t&&"undefined"!==t&&i("argumento pasado a getsegments incorrecto. Se esperaba object se recibio "+t),p="string"==typeof r&&r.length>0?r:D(),"function"!=typeof n)return g();a("llamando a getSegments con callback");var h=500,v=100,k=function(){var e=g(),t=v<h?v:h;e[m]&&e.wirr||h<=0?n(e):(h-=t,setTimeout(k,t))};"number"==typeof e.timeout&&(h=e.timeout),"number"==typeof e.interval&&(v=e.interval),k()},s("funcion getSegments sobreescrita");let h=t=>{let n=t+"=",o=e.document.cookie.split(";");for(let e of o){for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(n))return e.substring(n.length,e.length)}return null},w=(e,t)=>{var n,o=Object.prototype.toString.call(e);return t=t||{},n||void 0!==e||(n="undefined"),n||null!==e||(n="null"),!n&&e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)&&(n="buffer"),n||"object"!=typeof window||e!==window||(n="global"),n||"object"!=typeof global||e!==global||(n="global"),!n&&"number"==typeof e&&isNaN(e)&&(n="nan"),!n&&"object"==typeof e&&"[object Number]"==o&&isNaN(e)&&(n="nan"),n||"object"!=typeof e||"Event]"!=o.substr(-6)||(n="event"),n||"[object HTML"!=o.substr(0,12)||(n="html"),n||"[object Node"!=o.substr(0,12)||(n="html"),n||(n=o.match(/\[object\s*([^\]]+)\]/)[1].toLowerCase()),"object"==n&&t.pojoOnly&&e.constructor&&"Object"==(n=e.constructor.name||"unknown")&&(n="object"),n},v=(e,t,n)=>{let o=new Date,a=1e3,s={B:()=>{a*=0},M:e=>{a*=60*e},H:e=>{a*=3600*e},D:e=>{a*=86400*e},X:()=>{a*=864e5}};for(let e=0;e<t.length;e++)t[e]in s&&s[t[e]](parseInt(t.replace(t[e],""))||1);a+=o.getTime(),o.setTime(a),document.cookie=`${n}=${e}; path=/; domain=${location.hostname}; expires=${o.toUTCString()}; samesite=none; secure`};try{e.__wmass.testMode||(e.__wmass.testMode=function(t={},n="wmsstst"){let o=e=>{let t=["raPreviewMode=0; Max-Age=0; path=/; samesite=None; domain=.richaudience.com; secure","apn_prebid_debug=0; Max-Age=0; samesite=none; secure"];for(let e of t)document.cookie=e;!1===e?v(e,"B",n):v(JSON.stringify(e),"H",n)},s=(e=>{let t={enableLog:{values:[!0,"info","log","warn","error"],cookie:!0}};for(let n in e)t[n]||(t[n]=e[n]);return t})(t);return(t={})=>{if(!1===t)return o(!1),{};if("object"===w(t)){let r=((...e)=>{let t={};for(let n of e)if("object"===w(n))for(let e in n)t[e]||(t[e]=n[e]);return t})(t,(()=>{let e=h(n);if("string"===w(e))try{return JSON.parse(e)}catch(t){console.log(t,"error > valor de wmsstst = "+e)}return{}})(),(()=>{let t="wmsstst",n=e.location.search.replace("?","");if(-1===n.indexOf(t))return{};let o=n.split("&"),s={};for(let e of o)if(-1!==e.indexOf(t))if(e===t)s[enableTestCreatives]=!0;else{let[t,n]=e.replace("wmsstst.","").split("=");0===t.indexOf("key.")?(t=t.replace("key.",""),s.keywords||(s.keywords={}),s.keywords[t]||(s.keywords[t]=[]),-1===s.keywords[t].indexOf(n)&&s.keywords[t].push(n)):("true"===n&&(n=!0),"string"===w(n)&&s[t]?("string"===w(s[t])&&(s[t]=[s[t]]),s[t].push(n)):s[t]=n)}return a("parametros wemass detectados",s),s})()),i={},c={};for(let e in r)if(s[e]){let t=!1,n=r[e],o=s[e],{values:a,cookie:l=!1,anyof:d}=o,f=w(a),u=w(d),m=w(n);switch("string"===u&&m===d&&(t=!0),f){case"array":a.indexOf(n)>-1&&(t=!0);break;case"boolean":t=!0===n;case"function":t=a(n)}!0===t&&(c[e]=n,!0===l&&(i[e]=n))}return Object.keys(i).length>0&&o(i),c}}}),o=new e.__wmass.testMode(p,"6626a6f90a0e3e95feeca4e9ef338b6d")()}catch(e){}let{pathname:k,hostname:x,search:C}=e.location;x=x.toLowerCase(),k=k.toLowerCase(),s("Loading Wemass DMP Tag HOLA~DMP");let j,S,$=()=>!!e.document.getElementById("containerIntextAd"),O=()=>{if(e.googletag&&e.googletag.pubads){let t,n=["position"],o=["outofpage1x1"];try{t=e.googletag.pubads().getSlots()}catch(e){t=[]}for(let e of t)for(let t of n){let n=e.getTargeting(t).pop();if(o.indexOf(n)>-1)return!0}}return!1},T=()=>!1,L=()=>!!e.document.querySelector(".ev-paywall__container"),N=(e,t)=>{let n=t,o=Object.keys(n);if("gamvideo"===e){let e=o.map((e=>`${e}=${n[e].join()}`));return e=e.join("&"),encodeURIComponent(e)}if("gamvideohb"===e){let e={};return o.map((t=>{e[t]=n[t].join()})),e}if("smart"===e){return o.map((e=>`${e}=${n[e].join()}`)).join(";")}if("richaudience"===e){return o.map((e=>{let t=[];return n[e].map((n=>{t.push(`${e}=${n}`)})),t.join(";")})).join(";")}return n},E=e=>"addon"===e?function(t,n={},...o){n.page||(n.page={});let s=n.page.type;["belleza","actualidad","economia","tecnologia"].indexOf(s)>-1&&!n.page.classifications_watson&&(n.page.classifications_watson={categories:"$alchemy_taxonomy",keywords:"$alchemy_keywords",sentiment:"$alchemy_document_sentiment"}),y.length>0&&(y=[]),a(`Llamando a __wmass.dmp.${e} con argumentos`,[t,n,...o]),c[e].apply(null,[t,n,...o])}:"identify"===e?function(t=[],...n){let o=w(t);("array"===o||"string"===o)&&t.length>0&&(a(`Llamando a __wmass.dmp.${e} con argumentos`,[t,...n]),c[e].apply(null,[t,...n]))}:function(){a(`Llamando a __wmass.dmp.${e} con argumentos`,arguments),c[e].apply(null,arguments)},M=(e,n={})=>{let o="string"===w(e);if(o&&(e=n.useNs?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)),null!=typeof n)for(let o in n)if("string"===w(o)){let a=n[o],s=w(a);switch(o){case"T":e.appendChild(document.createTextNode(a));break;case"com":e.appendChild(document.createComment(a));break;case"Ct":e.style.cssText=a;break;case"Cn":if("string"===s||"array"===s){let t,n=[];if("string"===s?t=[a]:"array"===s&&(t=a),"array"===w(t))for(let e of t)"string"===w(e)&&("."===e.charAt(0)&&(e=e.substr(1)),n.push(e));n.length>0&&e.classList.add(...n)}break;case"H":e.innerHTML=a;break;case"St":t.attachEvent&&!t.opera?e.styleSheet.cssText=a:M(e,{T:a});break;default:"useNs"!==o&&(n.useNs?e.setAttributeNS(null,o,a):e.setAttribute(o,a))}}if(o)return e},I=(n,o,i,l,d)=>{if(!e.__wmass.dmp){if((x.indexOf("hola.com")>-1||x.indexOf("tuotrodiario.com")>-1)&&e.__wmass.bff.push(A),"string"===w(i)&&i.length>0&&"string"===w(l)&&l.length>0){s(`cargando dmp projectId: ${i}, key: ${l}`),"object"!==w(m)&&(m={}),e.__wmass.dmp=e.__wmass.dmp||{};let n=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],a=/.*\.html$/.test(k),f=!0;if(!e[o]){e[o]={},c=e[o],c.q=[],c.config=d||{},c.config.projectId=i,c.config.apiKey=l,c.config.environment=c.config.environment||"production","permutive"!==o&&(b=o+"_papns",c.config.stateNamespace=o);for(let e of n)c[e]=function(e){return function(){let t=Array.prototype.slice.call(arguments,0);c.q.push({functionName:e,arguments:t})}}(e)}window.localStorage.getItem(b)&&(f=!1,(a&&u%4>0||!a&&u%3==0)&&(f=!0)),f?(r(`iniciando permutive; isN:${a}; ab:${u}`),((e="about:blank",n="asyncScript",o=t)=>{let a=M("script",{src:e,async:"async",Cn:[n]});(o.document.body||o.document.head).appendChild(a)})(`https://cdn.permutive.com/${i}-web.js`)):r(`throttling permutive; isN:${a}; ab:${u}`);for(let t of n)!e.__wmass.dmp[t]&&c[t]&&(e.__wmass.dmp[t]=E(t))}e.__wmass.dmp.ready((function(){a("permutive initialised")}),"initialised"),e.__wmass.dmp.ready((function(){a("permutive realtime")}),"realtime")}},D=()=>!1,A=()=>{let t=((t=!1)=>{try{let n=null;return!1!==t&&(e.localStorage?n=e.localStorage.getItem(t):navigator.cookieEnabled&&(n=h(t))),n}catch(e){}return null})(g),n=t=>{let{data:a,origin:s,source:i}=t;"https://wemass.io"===s&&(e.removeEventListener("message",n),o(a),r.parentNode.removeChild(r))},o=t=>{((t,n)=>{try{if(e.localStorage)e.localStorage.setItem(t,n);else{if(!navigator.cookieEnabled)return!1;v(n,"X",t)}}catch(e){}})(g,t),a("UniqueId: "+t),__wmass.dmp.identify([{id:t,tag:"wmssId"}])},s="_wmss_messenger",r=M("iframe",{src:"about:blank",id:s,name:s,scrolling:"no",border:"no",src:"https://wemass.io/messenger",Ct:"width:0px;height:0px;border:0px;"});t?o(t):(e.addEventListener("message",n),document.body.appendChild(r))},P=()=>{if(s("permisos suficientes obtenidos o no habia CMP. Iniciando"),I(e.document,"28986622-e6be-473d-9a8f-e603a25f3c66","28986622-e6be-473d-9a8f-e603a25f3c66","390f11db-6eea-42eb-9ef9-4d27b1bb2bab",m),"array"===w(e.__wmass.bff)&&e.__wmass.bff.length>0){a("Ejecutando funciones en el buffer");for(let t of e.__wmass.bff)"function"===w(t)&&t()}"object"!==w(e.__wmass.bff)&&(e.__wmass.bff={push:function(e){"function"===w(e)&&e()}})},W=(e={},t={},n=!1)=>{let o=!0,a=w(n);for(let s in e)t.hasOwnProperty(s)&&!0===t[s]?e[s]=t[s]:o=!1,!1===o&&"object"===a&&!0===n[s]&&(e[s]=n[s],o=!0);return!1===o&&i("Consentimiento insuficiente. Obtenido:",e),o},q={getVendorConsents:e=>{try{let t,n=!0,{purposeConsents:o}=e;t=!n||W({1:!1,2:!1,3:!1,5:!1},o),!0===t&&P()}catch(e){i(e)}}},B={addEventListener:(t,n)=>{if(n){let n,o=!0,{eventStatus:a,listenerId:r,purpose:{consents:i={},legitimateInterests:c={}}={}}=t;s("Evento DMP purposes: ejecutado. Status: "+a),"tcloaded"!==a&&"useractioncomplete"!==a||(n=!o||W({1:!1,3:!1,4:!1,7:!1,10:!1},i),n&&(P(),e.__tcfapi("removeEventListener",2,(e=>{e&&s("Evento DMP purposes eliminado")}),r)))}}},F={milis:!1,callback:P};e.__wmass.bff||(e.__wmass.bff=[]),(({cmpCallbackTcf1:t={},cmpCallbackTcf2:n={},cmpTimeout:o={}})=>{let{milis:a=!1,callback:r}=o,c=w(r);if(e.__cmp||e.__tcfapi){if(e.__wmass.consentData||(e.__wmass.consentData={}),S=e.__wmass.consentData,e.__tcfapi)if(s("TCF v2 CMP detectado"),j=2,"object"===w(n)){if(!S.getTCData){let t=(t,n)=>{n&&(s("TCF v2 generic eventListener ejecutado. Estatus: "+t.eventStatus),("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus)&&"string"===w(t.tcString)&&t.tcString.length>0&&(s("TCF v2 generic eventListener tcdataString disponible: "+t.tcString),S.getTCData=t,e.__tcfapi("removeEventListener",2,(e=>{e&&s("TCF v2 generic eventListener event removed")}),t.listenerId)))};e.__tcfapi("addEventListener",2,t)}for(let t in n){let o=n[t],a=w(o);"function"===a?e.__tcfapi(t,2,o):i(`tcfversion 2 callback para ${t} es de tipo  ${a} se esperaba una funcion`)}}else i("Wemass CMP module required, tcfversion 2 detected but no cmpCallbackTcf2 set");else if(e.__cmp)if(s("TCF v1 CMP detectado"),j=1,"object"===w(t)){S.getConsentData||e.__cmp("getConsentData",null,(e=>{S.getConsentData=e})),S.getVendorConsents||e.__cmp("getVendorConsents",null,(e=>{S.getVendorConsents=e}));for(let n in t){let o=t[n],a=w(o);"function"===a?e.__cmp(n,null,o):i(`tcfversion 1 callback para ${n} es de tipo  ${a} se esperaba una funcion`)}}else i("Wemass CMP module required, tcfversion 1 detected but no cmpCallbackTcf1 set");0!=a&&"number"===w(a)&&(o.timer=setTimeout(r,a))}else"function"===c&&r()})({cmpCallbackTcf1:q,cmpCallbackTcf2:B,cmpTimeout:F})}();