!function(){var t="https://services.insurads.com",e="S9H7OMZB",n=function(){var t=n=window;for(;t!=t.top;){try{t.frameElement&&(n=t.parent)}catch(t){}t=t.parent}return n}(),a=n.__tgconf=n.__tgconf||{};function i(){var e=a.locked,i=e.parts;if(i){var o=0,c={ua:i[o++],tz:i[o++],gi:i[o++],la:i[o++],ls:i[o++],sl:i[o++],hc:i[o++]};!function(t){var e=n.document.createElement("img");e.setAttribute("style","width:0;height:0;display:none;"),e.setAttribute("src",t),n.document.body.appendChild(e),n.setTimeout(function(){n.document.body.removeChild(e)},2e3)}(t+"/iatdebug?appId="+a.appId+"&iatId="+e.iatId+"&iatIdB="+e.iatIdB+"&iatIdM="+e.iatIdM+"&iatIdV="+e.iatIdV+"&lIatId="+e.lIatId+"&lIatIdB="+e.lIatIdB+"&lIatIdM="+e.lIatIdM+"&lIatIdV="+e.lIatIdV+"&iatIdDL="+r(JSON.stringify(c))+"&t="+ +new Date)}}function o(t){return(n.document.cookie.match("(^|; )"+t+"=([^;]*)")||0)[2]}function c(t,e,i){var o=new Date;o.setTime(o.getTime()+1e3*(a.cookies?e:-1));var c="; expires="+o.toGMTString();n.document.cookie=t+"="+i+c+"; domain="+("localhost"===a.domain?"":"."+a.domain)+"; path=/; samesite=lax"}function r(t){return encodeURIComponent(t).replace(/%(?![0-9a-fA-F]{2})/g,"%25")}function d(t,e){var a=n.document.createElement("script");a.type="text/javascript",a.async=!0,e&&(a.defer=!0),a.src=t,n.document.getElementsByTagName("HEAD")[0].appendChild(a)}function s(i,o,c){o&&n.__tcfapi("removeEventListener",2,function(){},o.listenerId),a.boot||(a.boot=1,a.tcData=o,a.consent=c?0:1,l(i,o),d(t+"/init?appId="+e+"&h="+r(n.location||"")+"&tcfc="+(a.consent||0)+"&t="+ +new Date,!0))}function l(t,e){if((n.location&&n.location.href||"").indexOf("iat_debug")>0){var a=e&&e.isServiceSpecific;console.warn("[IAT]: "+t,a?"":"invalid service specific configuration")}}function u(t,e){var n=function(t,e){return(65535&t)*e+(((t>>>16)*e&65535)<<16)},a=function(t,e){return t<<e|t>>>32-e},i=function(t){return t=n(t^=t>>>16,2246822507),t=n(t^=t>>>13,3266489909),t^=t>>>16};e=e||0;for(var o=(t=t||"").length%16,c=t.length-o,r=e,d=e,s=e,l=e,u=0,I=0,h=0,v=0,f=597399067,g=2869860233,p=951274213,m=2716044179,A=0;A<c;A+=16)u=255&t.charCodeAt(A)|(255&t.charCodeAt(A+1))<<8|(255&t.charCodeAt(A+2))<<16|(255&t.charCodeAt(A+3))<<24,I=255&t.charCodeAt(A+4)|(255&t.charCodeAt(A+5))<<8|(255&t.charCodeAt(A+6))<<16|(255&t.charCodeAt(A+7))<<24,h=255&t.charCodeAt(A+8)|(255&t.charCodeAt(A+9))<<8|(255&t.charCodeAt(A+10))<<16|(255&t.charCodeAt(A+11))<<24,v=255&t.charCodeAt(A+12)|(255&t.charCodeAt(A+13))<<8|(255&t.charCodeAt(A+14))<<16|(255&t.charCodeAt(A+15))<<24,u=a(u=n(u,f),15),r=a(r^=u=n(u,g),19),r=n(r+=d,5)+1444728091,I=a(I=n(I,g),16),d=a(d^=I=n(I,p),17),d=n(d+=s,5)+197830471,h=a(h=n(h,p),17),s=a(s^=h=n(h,m),15),s=n(s+=l,5)+2530024501,v=a(v=n(v,m),18),l=a(l^=v=n(v,f),13),l=n(l+=r,5)+850148119;switch(u=0,I=0,h=0,v=0,o){case 15:v^=t.charCodeAt(A+14)<<16;case 14:v^=t.charCodeAt(A+13)<<8;case 13:v^=t.charCodeAt(A+12),v=a(v=n(v,m),18),l^=v=n(v,f);case 12:h^=t.charCodeAt(A+11)<<24;case 11:h^=t.charCodeAt(A+10)<<16;case 10:h^=t.charCodeAt(A+9)<<8;case 9:h^=t.charCodeAt(A+8),h=a(h=n(h,p),17),s^=h=n(h,m);case 8:I^=t.charCodeAt(A+7)<<24;case 7:I^=t.charCodeAt(A+6)<<16;case 6:I^=t.charCodeAt(A+5)<<8;case 5:I^=t.charCodeAt(A+4),I=a(I=n(I,g),16),d^=I=n(I,p);case 4:u^=t.charCodeAt(A+3)<<24;case 3:u^=t.charCodeAt(A+2)<<16;case 2:u^=t.charCodeAt(A+1)<<8;case 1:u^=t.charCodeAt(A),u=a(u=n(u,f),15),r^=u=n(u,g)}return r^=t.length,r+=d^=t.length,r+=s^=t.length,d+=r+=l^=t.length,s+=r,l+=r,r=i(r),r+=d=i(d),r+=s=i(s),d+=r+=l=i(l),s+=r,l+=r,("00000000"+(r>>>0).toString(16)).slice(-8)+("00000000"+(d>>>0).toString(16)).slice(-8)+("00000000"+(s>>>0).toString(16)).slice(-8)+("00000000"+(l>>>0).toString(16)).slice(-8)}n.__tginitcb=n.__tginitcb||function(){var t=n.document.location.hostname.replace("www.","");t.match(a.domain)||(a.domain=t);var e=o(a.scn),s=function(t,e,n){c(t,e,n);var i=o(t);a.consent||(a.cookies=0,c(t,e,n));return!!i}(a.scn,a.scd,a.sessionId),l=o(a.vcn),I=function(t){a.locked=a.locked||{};var e=a.locked;if(e.log=i,e.iatId)return e;var n=[navigator.userAgent.replace(/(\d+(?:\.\d+)*)/g,function(t){return t.includes(".")?t.match(/(\d+\.)(\d+)/g)[0]:t}),function(){var t,e,n,a;t=new Date,(e=String(-t.getTimezoneOffset()/60))<0?(n=("0"+(e*=-1)).slice(-2),a="-"+n):(n=("0"+e).slice(-2),a="+"+n);return a}(),function(){if(!a.allowLockedId||!a.consent)return"";var t,e=document.createElement("canvas");try{t=e.getContext("2d")}catch(t){return""}var n="IaID,org <canvas> 1.0";return t.textBaseline="top",t.font="14px 'Arial'",t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(125,1,62,20),t.fillStyle="#069",t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.7)",t.fillText(n,4,17),e.toDataURL()}(),function(){if(!a.allowLockedId||!a.consent)return"";var t,e,n,i,o=document.createElement("canvas");try{t=o.getContext("webgl")||o.getContext("experimental-webgl")}catch(t){}t&&(e=t.getExtension("WEBGL_debug_renderer_info"),n=t.getParameter(e.UNMASKED_VENDOR_WEBGL),i=t.getParameter(e.UNMASKED_RENDERER_WEBGL));return n+"~"+i}(),navigator.language,navigator.languages,navigator.systemLanguage||window.navigator.language,navigator.hardwareConcurrency],o="";for(let t=0;t<n.length;t++)o+=n[t]?"1":"0";var c=n.join("|");return e.lIatId=t&&t.split(".")[1]||0,e.lIatIdB=t&&t.split(".")[3]||0,e.lIatIdM=t&&t.split(".")[5]||0,e.lIatIdV=t&&t.split(".")[6]||0,e.controlHash=t&&t.split(".")[4]?t.split(".")[4]:a.controlHash?a.controlHash:"",e.iatId=u(c,256),e.iatIdB=u(c+"|"+e.controlHash,256),e.iatIdM=o,e.iatIdV="1.0",e.parts=n,e}(l);c(a.vcn,a.vcd,a.sessionId+"."+I.iatId+"."+a.ts+"."+I.iatIdB+"."+I.controlHash+"."+I.iatIdM+"."+I.iatIdV);var h,v,f,g=a.rootPath+"/initcb?v=1.0.12&appId="+a.appId+"&vId="+a.sessionId+"&s="+r(a.section||"")+"&fpc="+(s?1:0)+"&nv="+(e?0:1)+"&h="+r(n.location||"")+"&tcfc="+(a.consent||0)+"&lts="+(l&&l.split(".")[2]||0)+"&ts="+ +new Date+"&iatId="+I.iatId+"&iatIdB="+I.iatIdB+"&iatIdM="+I.iatIdM+"&iatIdV="+I.iatIdV+"&lIatId="+I.lIatId+"&lIatIdB="+I.lIatIdB+"&lIatIdM="+I.lIatIdM+"&lIatIdV="+I.lIatIdV+"&lch="+I.controlHash;h=g,v=null,f=function(){void 0!==n.document.addEventListener&&"prerender"===n.document.visibilityState||(d(h,!0),v&&n.document.removeEventListener(v,f))},void 0===n.document.addEventListener||"prerender"!==n.document.visibilityState?f():(void 0!==n.document.hidden?v="visibilitychange":void 0!==n.document.mozHidden?v="mozvisibilitychange":void 0!==n.document.msHidden?v="msvisibilitychange":void 0!==n.document.webkitHidden&&(v="webkitvisibilitychange"),n.document.addEventListener(v,f))},n===window.top?function t(e){if(void 0===n.__tcfapi&&e<20)n.setTimeout(function(){t(++e)});else if(e>=20)s("timeout waiting for tcfapi to be available");else{var a=n.setTimeout(function(){s("timeout waiting for TCF listener")},2e3);n.__tcfapi("addEventListener",2,function(t,e){if(n.clearTimeout(a),t.gdprApplies){if(e&&("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus)){var i=t.vendor&&t.vendor.consents&&t.vendor.consents[596],o=t.purpose&&t.purpose.consents&&Object.keys(t.purpose.consents).length>=8,c=t.tcString&&i&&o;s(c?"consent granted":"no valid consent",t,!c)}}else s("gdpr does not apply",t)})}}(0):l("unable to load bootstrap script")}();