window.suggestmeyes_loaded=!0,function(){const e="www.gsmarena.com";location.hostname!=e&&(location="//"+e+location.pathname)}(),$gsm={tag:function(e,t,n,s){var o=document.createElement(e);for(var i in t)o.setAttribute(i,t[i]);return n&&(o.innerHTML=n),s&&s.appendChild(o),o},hasClass:function(e,t){if(e)return e.classList&&t?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){if(e)return e.classList&&t?e.classList.add(t):void($gsm.hasClass(e,t)||(e.className+=" "+t))},removeClass:function(e,t){if(e)return e.classList&&t?e.classList.remove(t):void(e.className=e.className.replace(new RegExp("(\\s+|^)"+t+"(\\s+|$)")," "))},toggleClass:function(e,t,n){if(e){if(e.classList&&t)return e.classList.toggle(t,n);void 0===n&&(n=!$gsm.hasClass(e,t)),n?$gsm.addClass(e,t):$gsm.removeClass(e,t)}},isMobile:"undefined"!=typeof MOBILE_SITE&&MOBILE_SITE,addEventListener:function(e,t,n,s){for(var o=t.split(/\s+/),i=0;i<o.length;i++)window.addEventListener?e.addEventListener(o[i],n,s):e.attachEvent("on"+o[i],n)},onload:function(e){function t(){n||(n=!0,e())}var n=!1;$gsm.addEventListener(document,"DOMContentLoaded",t),$gsm.addEventListener(window,"load",t)},xhr:function(type,url,callback,data,fail,noParse,withCredentials){var request;if(window.XMLHttpRequest)request=new XMLHttpRequest;else if(window.ActiveXObject)try{request=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{request=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return}}if(data){var arr=[];for(var k in data)arr.push(k+"="+data[k]);url+="?"+arr.join("&")}withCredentials&&(request.withCredentials=withCredentials),request.open(type,url,!0),request.onreadystatechange=function(){var data;if(4==request.readyState&&200==request.status)if(noParse)callback(request.responseText);else{if(window.JSON)try{data=JSON.parse(request.responseText)}catch(e){fail&&fail(null,e)}else data=eval("("+request.responseText+")");callback(data)}else 4==request.readyState&&request.status>400&&fail&&fail(request)};try{request.send()}catch(e){fail(request,e)}},draggable:function(e,t,n){var s,o,i=!1,a="",r=function(e){i=!0,s=e.screenX,o=e.screenY,a=document.body.style.userSelect,document.body.style.userSelect="none"};e.addEventListener("mousedown",r);var l=function(e){i&&(t(e.screenX-s,e.screenY-o),s=e.screenX,o=e.screenY)};document.addEventListener("mousemove",l);var c=function(e){i&&(i=!1,n&&n(e.screenX-s,e.screenY-o),document.body.style.userSelect=a)};document.addEventListener("mouseup",c,!0),e.addEventListener("touchstart",function(e){r({screenX:e.touches[0].clientX,screenY:e.touches[0].clientY})}),document.addEventListener("touchmove",function(e){l({screenX:e.touches[0].clientX,screenY:e.touches[0].clientY})}),document.addEventListener("touchend",function(e){c({screenX:0,screenY:0})})},setCookie:function(e,t,n,s,o){if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var a="; expires="+i.toGMTString()}else a="";document.cookie=e+"="+t+a+"; path="+(s||"/")+(o?"; domain="+o:"")},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var o=n[s];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},loadModules:function(){"undefined"!=typeof MODULES_TO_LOAD&&$gsm.xhr("GET",MODULES_TO_LOAD,function(e){$gsm.LOADED_MODULES=e,$gsm.__loaded&&$gsm.__insertModules()},{},null,!0)},__insertModules:function(){var html=document.createElement("html");html.innerHTML=$gsm.LOADED_MODULES,$gsm.LOADED_MODULES=null;for(var contentContainers=html.querySelectorAll("[data-module]"),i=0;i<contentContainers.length;i++){var container=contentContainers[i],module=container.getAttribute("data-module"),target=document.querySelector('.dynamic[data-module="'+module+'"]');target&&(target.innerHTML=container.innerHTML)}for(var scripts=html.querySelectorAll("script"),i=0;i<scripts.length;i++)eval(scripts[i].innerHTML)},validateForm:function(e){var t=document.querySelector(e);if(t){var n=Array.prototype.slice.call(t.querySelectorAll("input[required]")),s=t.querySelector("input[type=submit]"),o=function(e){var t=n.every(function(e){return e.checkValidity&&e.checkValidity()});t?s.removeAttribute("disabled"):s.setAttribute("disabled","disabled")};o(),t.addEventListener("input",o)}},beacon:function(e){var t=new URL(e),n=new FormData;t.searchParams.forEach(function(e,t){n.append(t,e)}),t.search="",navigator.sendBeacon&&navigator.sendBeacon(t.href,n)||$gsm.xhr("GET",e,function(){},null,function(){},!0)}},$gsm.onload(function(){$gsm.__loaded=!0,$gsm.LOADED_MODULES&&$gsm.__insertModules()}),$gsm.loadModules(),$gsm.onload(function(){const e=document.querySelectorAll("#switch-version");for(let t=0;t<e.length;t++)e[t].onclick=function(e){e.preventDefault(),e.stopPropagation();const t=location.pathname.replace(/^\//,"")+location.search+location.hash,n=location.host.replace(/^(www|m)\./,"");$gsm.isMobile?($gsm.setCookie("sSiteVersion","desktop",100,"/",n),window.location=DESKTOP_BASE_URL+t):($gsm.setCookie("sSiteVersion","mobile",100,"/",n),window.location=MOBILE_BASE_URL+t)}}),document.createElement("header"),document.createElement("nav"),document.createElement("section"),document.createElement("article"),document.createElement("aside"),document.createElement("footer"),"flex"in document.body.style||$gsm.addEventListener(window,"load",function(){$gsm.addClass(document.querySelector(".brandmenu-v2"),"ie8")}),"bind"in Object&&function(e,t){"use strict";function n(e){this.callback=e,this.ticking=!1}function s(t){return t&&void 0!==e&&(t===e||t.nodeType)}function o(e){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var t,n,i=e||{};for(n=1;n<arguments.length;n++){var a=arguments[n]||{};for(t in a)i[t]="object"!=typeof i[t]||s(i[t])?i[t]||a[t]:o(i[t],a[t])}return i}function i(e){return e===Object(e)?e:{down:e,up:e}}function a(e,t){t=o(t,a.options),this.lastKnownScrollY=0,this.elem=e,this.debouncer=new n(this.update.bind(this)),this.tolerance=i(t.tolerance),this.classes=t.classes,this.offset=t.offset,this.scroller=t.scroller,this.initialised=!1,this.onPin=t.onPin,this.onUnpin=t.onUnpin,this.onTop=t.onTop,this.onNotTop=t.onNotTop}var r={bind:!!function(){}.bind,classList:"classList"in t.documentElement,rAF:!!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame)};e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,n.prototype={constructor:n,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},a.prototype={constructor:a,init:function(){return a.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var e=this.classes;this.initialised=!1,this.elem.classList.remove(e.unpinned,e.pinned,e.top,e.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var e=this.elem.classList,t=this.classes;(e.contains(t.pinned)||!e.contains(t.unpinned))&&(e.add(t.unpinned),e.remove(t.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var e=this.elem.classList,t=this.classes;e.contains(t.unpinned)&&(e.remove(t.unpinned),e.add(t.pinned),this.onPin&&this.onPin.call(this))},top:function(){var e=this.elem.classList,t=this.classes;e.contains(t.top)||(e.add(t.top),e.remove(t.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var e=this.elem.classList,t=this.classes;e.contains(t.notTop)||(e.add(t.notTop),e.remove(t.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(t.documentElement||t.body.parentNode||t.body).scrollTop},getViewportHeight:function(){return e.innerHeight||t.documentElement.clientHeight||t.body.clientHeight},getDocumentHeight:function(){var e=t.body,n=t.documentElement;return Math.max(e.scrollHeight,n.scrollHeight,e.offsetHeight,n.offsetHeight,e.clientHeight,n.clientHeight)},getElementHeight:function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},getScrollerHeight:function(){return this.scroller===e||this.scroller===t.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(e){var t=0>e,n=e+this.getViewportHeight()>this.getScrollerHeight();return t||n},toleranceExceeded:function(e,t){return Math.abs(e-this.lastKnownScrollY)>=this.tolerance[t]},shouldUnpin:function(e,t){var n=e>this.lastKnownScrollY,s=e>=this.offset;return n&&s&&t},shouldPin:function(e,t){var n=e<this.lastKnownScrollY,s=e<=this.offset;return n&&t||s},update:function(){var e=this.getScrollY(),t=e>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(e,t);this.isOutOfBounds(e)||(e<=this.offset?this.top():this.notTop(),this.shouldUnpin(e,n)?this.unpin():this.shouldPin(e,n)&&this.pin(),this.lastKnownScrollY=e)}},a.options={tolerance:{up:0,down:0},offset:0,scroller:e,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},a.cutsTheMustard=void 0!==r&&r.rAF&&r.bind&&r.classList,e.Headroom=a}(window,document),$gsm.onload(function(){var e=document.querySelector(".lines-button");e&&(e.onclick=function(){var t=!$gsm.hasClass(e,"open");$gsm.toggleClass(e,"open",t),$gsm.toggleClass(document.querySelector("#menu"),"open",t),$gsm.toggleClass(document.querySelector("#header"),"open",t),$gsm.setCookie("sSubmenuState",t?"open":"close",7)}),"Headroom"in window&&($gsm.headroom=new Headroom(document.getElementById("header"),{tolerance:{down:10,up:20},offset:52,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--up"}}),$gsm.headroom.init());var t=document.querySelector(".more-reviews-list-container"),n=document.querySelector(".more-reviews-list-toggle");n&&(n.onclick=function(){return"block"==t.style.display?(t.style.display="none",n.innerHTML="&#9650;"):(t.style.display="block",n.innerHTML="&#9660;"),!1});var s=""!==$gsm.getCookie("sLoginCookie"),o=document.querySelector(".specs-fans"),i=!1;"undefined"!=typeof BECOME_FAN_URL&&o&&(o.onclick=function(){if(i)return!1;var e=!$gsm.hasClass(o.parentNode,"active");return s?(i=!0,$gsm.xhr("GET",BECOME_FAN_URL+"&nFan="+(e?1:0),function(t){if(i=!1,$gsm.toggleClass(o.parentNode,"active","1"==t&&e),"1"==t){var n=o.querySelector("strong"),s=parseInt(n.lastChild.nodeValue,10);s+=e?1:-1,n.replaceChild(document.createTextNode(""+s),n.lastChild),o.querySelector("span").innerHTML=e?"You're a fan":"Become a fan"}},null,function(){i=!1,$gsm.removeClass(o.parentNode,"active")},!0)):($gsm.addClass(o.parentNode,"not-logged"),setTimeout(function(){$gsm.removeClass(o.parentNode,"not-logged")},4e3)),!1});var a=document.querySelector("#login-active"),r=document.querySelector("#login-popup")||document.querySelector("#login-popup2");$gsm.toggleLoginPopup=function(e){if(!s){e.preventDefault();var t="block"==r.style.display;r.style.display=t?"none":"block",$gsm.hasClass(l,"headroom--top")||($gsm.toggleClass(l,"slide--reset",!t),$gsm.toggleClass(l,"slide--up",t))}},a&&(a.onclick=$gsm.toggleLoginPopup);var l=document.querySelector("#header"),c=document.querySelector("#footer-side"),d=document.querySelector(".adv.sticky");if(d){var u,m=d.previousElementSibling;function h(){u=d.offsetHeight+(c?c.offsetHeight:0)+l.offsetHeight+30,window.innerHeight<u&&(d.style.position="",d.style.top="")}function g(e){""!==d.style.position&&m.getBoundingClientRect().bottom>0?(d.style.position="",d.style.top=""):window.innerHeight>u&&"fixed"!==d.style.position&&d.getBoundingClientRect().top<10&&(d.style.position="fixed",d.style.top="8px"),"fixed"==d.style.position&&(d.style.top=8+(l.getBoundingClientRect().bottom>0?l.offsetHeight:0)+"px")}h(),$gsm.addEventListener(window,"resize",h),$gsm.addEventListener(window,"scroll",g)}}),window.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".speedo");e&&e.length&&window.addEventListener("scroll",function(){for(var t=0;e&&t<e.length;t++){var n=e[t];if(n.getClientRects()[0].bottom<window.innerHeight){var s=1.8*parseInt(n.getAttribute("data-value"),10);n.querySelector("#needle").style.transform="rotate("+s+"deg)"}}})}),$gsm.onload(function(){var e=document.querySelector(".article-info-line .social-share");if(e){var t=e.querySelector(".share-button");t&&(t.onclick=function(){return $gsm.toggleClass(e,"close"),!1},$gsm.addEventListener(document.body,"click",function(t){$gsm.hasClass(t.target,"icon-share")||$gsm.addClass(e,"close")}))}});var ImagePopup=function(){},showMultipic=function(e,t){};document.addEventListener("DOMContentLoaded",function(){function e(e){x[e]||(x[e]=!0,$gsm.xhr("GET",DESKTOP_BASE_URL+"counter-js.php3",function(){},{sF:e},null,function(){},!0))}function t(){if("undefined"!=typeof googletag){var e;if(!(window.innerWidth<900))if(!b())e=document.createElement("script"),e.src="https://powerad.ai/script.js",e.setAttribute("async",""),top.document.querySelector("head").appendChild(e)}else{var n=$gsm.tag("script",{type:"text/javascript",async:"async",src:"https://www.googletagservices.com/tag/js/gpt.js"},"",ne);n.onload=t}}function n(e,t){return window.getComputedStyle?parseInt(window.getComputedStyle(e)[t],10):parseInt(e.currentStyle[t],10)}function s(e){var t=A.querySelector(".thumb.active"),n=ce.offsetHeight;if(e){var s=Math.floor(ce.scrollTop/n);s+=e}else s=Math.floor(t.offsetTop/n);ce.scrollTop=s*n}function o(){ve={};var e=document.querySelectorAll("a[onclick^='javascript:ShowImg']");ce.innerHTML="";be=e.length;for(var n=0;n<e.length;n++){var s=e[n],o=s.getAttribute("onclick"),i=o.match(/ShowImg2?\(["']([^"']+?)["']\)/)[1],a=s.children[0].getAttribute("src"),r=s.children[0].getAttribute("alt");r=r.replace(/ - (?:[^-]|\w-\w)+$/,""),r=r.replace(/^[a-z][^A-Z]/,function(e){return e.charAt(0).toUpperCase()+e.slice(1)});var l=$gsm.tag("div",{class:"thumb",style:"background-image: url("+a+");"},"",ce),c=o.match(/ShowImg2?/)[0];(function(e,n,o){l.onclick=function(){return d(e,n,o),t(),!1},s.onclick=l.onclick})(i,n,c),ve[i]={thumbLink:l,bigUrl:i,smallUrl:a,alt:r,index:n,link:s},ye[n]=ve[i]}}function i(e){if(e.requestFullscreen){var t=e.requestFullscreen();t&&t.catch&&t.catch(function(){})}else e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function a(){if(document.exitFullscreen){var e=document.exitFullscreen();e&&e.catch&&e.catch(function(){})}else document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}function r(e){U.innerHTML||(U.innerHTML='<img src="'+ASSETS_BASE_URL+'/i/logo.svg">'),A.style.display=e?"":"none",(Le||Se&&!location.hostname.match(/^m\./))&&(e?i(A):a())}function l(){}function c(){return fe=pe=!1,r(!1),F.checked=!1,$gsm.removeClass(A,"multipic-mode"),history.replaceState({},"",window.location.pathname+window.location.search),l(),x={},!1}function d(n,i,a){if(""!=q){if($gsm.hasClass(T,"multipic-compare")){if(void 0!==i)var l=ye[i];else l=ve[n];if(""==St)return St=n,void $gsm.addClass(l.link,"selected");if(n==St)return St="",void $gsm.removeClass(l.link,"selected");if("[multipic]"!=n)return $gsm.removeClass(T,"multipic-compare"),showMultipic(St,n)}if(r(!0),"[multipic]"==n)return $gsm.addClass(A,"multipic-mode"),$gsm.removeClass(A,"zoomable"),rt.src=q+rt._src,lt.src=q+lt._src,it.src=ve[rt._src].smallUrl,at.src=ve[lt._src].smallUrl,b(),t(),void(location.hostname.match(/^m\./)?e("m-comparegallery"):e("comparegallery"));if(location.hostname.match(/^m\./)?e("m-gallery"):e("gallery"),ve||o(),void 0!==i){l=ye[i];we=i}else{l=ve[n];we=l.index}return $e.src=q+n,ke.src=l.smallUrl,G.style.backgroundImage="url("+q+n+"), url("+l.smallUrl+")",G.style.backgroundPosition="",G.style.backgroundSize="",D.setAttribute("href",$e.src),oe.innerHTML=l.alt,ie.innerHTML=l.index+1+"/"+be,$gsm.removeClass(A.querySelector(".thumb.active"),"active"),$gsm.addClass(l.thumbLink,"active"),s(),pe=!1,fe=!!n.match(/\/camera\//),$gsm.removeClass(A,"zoomed-in"),ee.style.display="none",ee.style.backgroundImage="url("+q+n+")",Oe=1,b(),history.replaceState({},"","#image"+l.index),F.checked=!1,z.setAttribute("href","//www.facebook.com/sharer.php?u="+encodeURIComponent(window.location)),B.setAttribute("href","https://twitter.com/intent/tweet?text="+escape(l.alt)+"&url="+encodeURIComponent(window.location)),!1}"ShowImg"==a?ShowImg(n):ShowImg2(n)}function u(e,t){var n=we+e;n=(n+be)%be;var s=ye[n];return t==Ee?s:t==Me?s.smallUrl:t==Ce?q+s.bigUrl:void 0}function m(e,t){var n=t||this.getAttribute("href").replace("#","");if(!He){A.querySelector(".thumb.active"),t="next"==n?1:-1;var s=u(t,Ee).thumbLink.onclick;V.style.display="",V.style.backgroundImage="url("+u(t,Me)+")";var o=new Image;o.src=u(2*t,Ce);var i=.5;return""==V.style.transform&&(V.style.transform="translateX("+100*("next"==n?1:-1)+"%)"),G.style.transition=i+"s",setTimeout(function(){G.style.transform="translateX("+100*("next"==n?-1:1)+"%)",V.style.transition=i+"s",V.style.transform=""},100),He=setTimeout(function(){He=0,G.style.transition="",G.style.transform="",s(),V.style.transition="",V.style.display="none"},1e3*i+50),!1}}function h(){var e=this.getAttribute("href").replace("#","");return s("up"==e?-1:1),!1}function g(e,t,n){var s=[0,0],o=e[0]/e[1],i=t[0]/t[1];return o>i?(s[0]=t[0],s[1]=t[0]/o):(s[0]=t[1]*o,s[1]=t[1]),n||(s[0]=Math.floor(s[0]),s[1]=Math.floor(s[1])),s}function f(){var e,t;Te=g([$e.width,$e.height],[ee.offsetWidth,ee.offsetHeight]);try{var n=Math.min(Te[0],Te[1]);e=Math.round(n*G.offsetWidth/($e.height*Oe)),t=Math.round(n*G.offsetHeight/($e.height*Oe))}catch(n){e=20,t=20}return te.style.width=e+"px",te.style.height=t+"px",[e,t]}function p(e,t){qe=Math.min(Math.max(0,e),1),xe=Math.min(Math.max(0,t),1),pe?(G.style.backgroundPosition=100*qe+"% "+100*xe+"%",G.style.backgroundSize=Oe*$e.naturalWidth+"px "+Oe*$e.naturalHeight+"px, contain"):(G.style.backgroundPosition="center, center",G.style.backgroundSize="contain, contain"),te.style.transform="translate("+Math.round(qe*(Te[0]-te.offsetWidth))+"px, "+Math.round(xe*(Te[1]-te.offsetHeight))+"px)"}function v(e){return Math.hypot(e[0].screenX-e[1].screenX,e[0].screenY-e[1].screenY)}function y(e){return[(e[0].screenX+e[1].screenX)/2,(e[0].screenY+e[1].screenY)/2]}function w(e){Oe=Math.min(e,Ye),($e.naturalWidth*e<G.offsetWidth||$e.naturalHeight*e<G.offsetHeight)&&Y.onclick(),f()}function b(){var e,t;return $gsm.hasClass(A,"multipic-mode")?(t=O.offsetWidth-I.offsetWidth-n(O,"paddingLeft")-20<ut.offsetWidth,window.innerWidth>window.innerHeight?U.style.display=t?"none":"":U.style.display="none"):(I.style.visibility="",e=!(window.innerWidth>window.innerHeight)||ne.offsetHeight<ze,re.style.display=e?"none":"",ae.style.display=e?"none":"",t=O.offsetWidth<Be+I.offsetWidth,U.style.display=t?"none":""),e}function $(){setTimeout(function(){pe?(f(),p(qe,xe)):G.style.backgroundSize="contain, contain",fe=$e.width>G.offsetWidth||$e.height>G.offsetHeight,$gsm.toggleClass(A,"zoomable",fe),!fe&&pe&&Y.onclick(),b()&&l()},10)}function k(){Qe=(lt.naturalWidth-ot.offsetWidth)/(rt.naturalWidth-st.offsetWidth),et=(lt.naturalHeight-ot.offsetHeight)/(rt.naturalHeight-st.offsetHeight),Ve=-rt.naturalWidth+st.offsetWidth,Ge=-rt.naturalHeight+st.offsetHeight,Je=-lt.naturalWidth+ot.offsetWidth,Ze=-lt.naturalHeight+ot.offsetHeight}function L(e){if(rt.complete&&lt.complete||e){e||($gsm.removeClass(nt,"loading"),bt=!0,k()),ht=-(rt.naturalWidth-st.offsetWidth)/2,gt=-(rt.naturalHeight-st.offsetHeight)/2,ft=-(lt.naturalWidth-ot.offsetWidth)/2,pt=-(lt.naturalHeight-ot.offsetHeight)/2;var t=window.location.hash.match(/#compare-\d+,\d+-at-(-?\d+)x(-?\d+),(-?\d+)x(-?\d+)/);t&&(ht=parseInt(t[1],10),gt=parseInt(t[2],10),ft=parseInt(t[3],10),pt=parseInt(t[4],10)),E(0,0,0,0)}}function S(e,t,n){return Math.min(e,Math.max(t,n))}function E(e,t,n,s){ht+=e,gt+=t,ft+=n*Qe,pt+=s*et,wt?(vt<=0?(ht=S(-vt/Qe,ht,Ve),ft=S(0,ft,Je+vt)):(ht=S(0,ht,Ve-vt/Qe),ft=S(vt,ft,Je)),yt<=0?(gt=S(-yt/et,gt,Ge),pt=S(0,pt,Ze+yt)):(gt=S(0,gt,Ge-yt/et),pt=S(yt,pt,Ze))):(0!=e&&0!=t&&(ht=S(ft/Qe+rt.naturalWidth*tt,ht,ft/Qe-rt.naturalWidth*tt),gt=S(pt/et+rt.naturalHeight*tt,gt,pt/et-rt.naturalHeight*tt)),ft=S(ht*Qe+lt.naturalWidth*tt,ft,ht*Qe-lt.naturalWidth*tt),pt=S(gt*et+lt.naturalHeight*tt,pt,gt*et-lt.naturalHeight*tt),vt=Math.round(ft-ht*Qe),yt=Math.round(pt-gt*et)),rt.style.transform="translate("+Math.round(ht)+"px,"+Math.round(gt)+"px)",lt.style.transform="translate("+Math.round(ft)+"px,"+Math.round(pt)+"px)"}function M(){history.replaceState({},"",Ke+"-at-"+Math.round(ht)+"x"+Math.round(gt)+","+Math.round(ft)+"x"+Math.round(pt))}function C(){St="",$gsm.toggleClass(T,"multipic-compare"),$gsm.removeClass(document.querySelector(".image-row.comparable a.selected"),"selected")}var H=!1,q="";ImagePopup=function(e,t){q=e,d(t)};var x={},T=document.querySelector("#review-body")||document.querySelector("#content"),A=$gsm.tag("div",{class:"image-gallery",style:"display: none;",draggable:"false"},"",document.body);if(H)$gsm.tag("div",{style:"display: none; position: absolute; z-index: 999; background: antiquewhite; padding: 2px; max-width: 80%; font-family: auto; position: fixed; top: 0; left: 0;"},"",A);var _=$gsm.tag("div",{class:"top-row",draggable:"false"},"",A),O=$gsm.tag("div",{class:"header",draggable:"false"},"",_),I=$gsm.tag("span",{class:"title",draggable:"false"},"",O),U=$gsm.tag("div",{class:"logo",draggable:"false"},"",O),W=$gsm.tag("div",{class:"buttons"},"",_),Y=$gsm.tag("div",{class:"gbutton zoom",title:"Zoom in"},"",W),D=$gsm.tag("a",{class:"gbutton new-tab",title:"Open image in new tab",target:"_blank"},"",W),F=$gsm.tag("input",{type:"checkbox",id:"gallery-share-checkbox"},"",W),R=$gsm.tag("label",{class:"gbutton share",title:"Share image",for:"gallery-share-checkbox"},"",W),X=$gsm.tag("div",{class:"gbutton close",title:"Close gallery"},"",W),P=$gsm.tag("span",{class:"share-panel"},"",R),z=$gsm.tag("a",{class:"facebook",title:"Share on Facebook"},"&#59652;",P),B=$gsm.tag("a",{class:"twitter",title:"Share on Twitter"},"&#59655;",P),N=$gsm.tag("div",{class:"bottom-row"},"",A),j=$gsm.tag("div",{class:"left-column"},"",N),K=$gsm.tag("div",{class:"image-container"},"",j),V=$gsm.tag("div",{class:"second image"},"",K),G=$gsm.tag("div",{class:"image"},"",K),J=$gsm.tag("div",{class:"next-prev"},"",K),Z=$gsm.tag("a",{class:"go-left",href:"#prev"},"",J),Q=$gsm.tag("a",{class:"go-right",href:"#next"},"",J),ee=$gsm.tag("div",{class:"map",style:"display: none;"},"",G),te=$gsm.tag("div",{class:"view"},"",ee),ne=$gsm.tag("div",{class:"right-column"},"",N),se=$gsm.tag("div",{class:"image-details"},"",ne),oe=$gsm.tag("span",{class:"image-text"},"",se),ie=$gsm.tag("span",{class:"image-count"},"",se),ae=$gsm.tag("div",{class:"ad",id:"crt-766803"},"",ne),re=$gsm.tag("div",{class:"thumb-gallery"},"",ne),le=$gsm.tag("a",{class:"go-up",href:"#up"},"&#9650;",re),ce=$gsm.tag("div",{class:"thumbs"},"",re),de=$gsm.tag("a",{class:"go-down",href:"#down"},"&#9660;",re),ue=document.querySelector(".article-info-name"),me=document.querySelector("#gallery .normal-text h2"),he=document.querySelector("#content h1.section");I.innerHTML=(ue||me||he||{innerHTML:""}).innerHTML;var ge=!1,fe=!1,pe=!1,ve=!1,ye=[],we=0,be=0,$e=new Image,ke=new Image;o();var Le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,Se=/Android/.test(navigator.userAgent);Le&&(A.style.touchAction="unset"),X.onclick=c,$e.onload=function(){$(),G.style.backgroundImage="url("+u(0,Ce)+")"};var Ee=0,Me=1,Ce=2,He=0;Q.onclick=m,Z.onclick=m,$gsm.addEventListener(document,"keyup",function(e){"none"!=A.style.display&&(27==e.which?c():37!=e.which&&39!=e.which||m(null,37==e.which?"prev":"next"))}),de.onclick=h,le.onclick=h,Y.onclick=function(e){if(pe=!pe,$gsm.toggleClass(A,"zoomed-in"),ee.style.display=pe?"":"none",pe)if(Oe=1,f(),e.target==Y)p(.5,.5);else{var t=g([$e.width,$e.height],[G.clientWidth,G.clientHeight]),n=e.offsetX-(G.offsetWidth-t[0])/2,s=e.offsetY-(G.offsetHeight-t[1])/2;p(n/t[0],s/t[1])}else p(.5,.5);return!1};var qe,xe,Te=[1,1];$gsm.addEventListener(G,"click",function(e){fe&&Y.onclick(e),F.checked=!1}),$gsm.addEventListener(G,"mousemove",function(e){if(fe&&pe){var t=e.offsetX/G.offsetWidth,n=e.offsetY/G.offsetHeight;p(t,n)}});var Ae,_e,Oe,Ie,Ue,We,Ye=4,De=(Math.sqrt(window.devicePixelRatio||1),0),Fe=0,Re=0,Xe=0,Pe=0;$gsm.addEventListener(G,"touchstart",function(e){De=e.touches[0].clientX,Fe=e.touches[0].clientY,2==e.touches.length&&(Ie=Oe,Ae=v(e.touches),_e=y(e.touches)),F.checked=!1}),$gsm.addEventListener(G,"touchmove",function(e){if(pe){if(1==e.touches.length)Le||e.preventDefault(),dx=(De-e.touches[0].clientX)/($e.height*Oe),dy=(Fe-e.touches[0].clientY)/($e.height*Oe),De=e.touches[0].clientX,Fe=e.touches[0].clientY;else if(2==e.touches.length){if(Le)return;e.preventDefault();var t=y(e.touches);dx=(_e[0]-t[0])/($e.height*Oe),dy=(_e[1]-t[1])/($e.height*Oe),_e=t;var n=v(e.touches)/Ae;w(Ie+(n-1)*Ie)}p(qe+dx,xe+dy);var s=Date.now()-Re+1,o=40;Re=Date.now(),Xe=(Ue-e.touches[0].clientX)/(s*o),Pe=(We-e.touches[0].clientY)/(s*o),Ue=e.touches[0].clientX,We=e.touches[0].clientY}else Le||e.preventDefault(),Xe=e.touches[0].clientX-De,G.style.transform="translateX("+Xe+"px)",V.style.display="",V.style.backgroundImage="url("+u(Xe<0?1:-1,Me)+")",V.style.transform="translateX(calc("+(Xe>0?"-":"")+"100%"+(Xe>0?" + ":" - ")+Math.abs(Xe)+"px))"}),$gsm.addEventListener(G,"touchend",function(e){if(pe){if(1==e.touches.length&&1==e.changedTouches.length)return De=e.touches[0].clientX,Fe=e.touches[0].clientY,Ue=De,void(We=Fe);var t=.8,n=qe,s=xe,o=Xe/Oe,i=Pe/Oe;function a(){o*=t,i*=t,n+=o,s+=i,p(n,s),Math.abs(o*i)>1e-7&&requestAnimationFrame(a)}requestAnimationFrame(a)}else{if(Math.abs(Xe/K.offsetWidth)>.2)G.style.display="",m({},Xe>0?"prev":"next");else{0!=Xe&&(V.style.transform="translateX("+(Xe>0?"-100%":"100%")+")");var r=.3;G.style.transform="",G.style.transition="transform "+r+"s",V.style.transition=G.style.transition,setTimeout(function(){G.style.transition="",G.style.display="",V.style.transition="",V.style.transform="",V.style.display="none"},1e3*r)}Xe=0}}),$gsm.addEventListener(G,"wheel",function(e){e.deltaY<0&&w(Oe+.25),e.deltaY>0&&w(Oe-.25),p(qe,xe)});var ze=620,Be=n(O,"padding-left")+n(U,"width")+20;$gsm.addEventListener(window,"resize",$),$gsm.addEventListener(window,"orientationchange",$);var Ne=window.location.hash.match(/#image(\d+)/);if(ge=!!Ne,Ne){var je=parseInt(Ne[1],10);ve||o(),ye[je].thumbLink.onclick()}z.onclick=function(){var e="//www.facebook.com/sharer.php?u="+encodeURIComponent(window.location);return window.open(e,"fbookshare","width=500,height=400,left="+(screen.availWidth/2-225)+",top="+(screen.availHeight/2-150)),!1},B.onclick=function(){var e="https://twitter.com/intent/tweet";return e+="?text="+escape(oe.innerHTML),e+="&url="+encodeURIComponent(window.location),window.open(e,"twitshare","width=500,height=400,left="+(screen.availWidth/2-225)+",top="+(screen.availHeight/2-150)),!1},$gsm.addEventListener(ne,"click",function(){F.checked=!1});var Ke,Ve,Ge,Je,Ze,Qe,et,tt=.2,nt=$gsm.tag("div",{class:"multipic",draggable:"false"},"",A),st=$gsm.tag("div",{class:"left",draggable:"false"},"",nt),ot=$gsm.tag("div",{class:"right",draggable:"false"},"",nt),it=$gsm.tag("img",{class:"preview"},"",st),at=$gsm.tag("img",{class:"preview"},"",ot),rt=$gsm.tag("img",{draggable:"false"},"",st),lt=$gsm.tag("img",{draggable:"false"},"",ot),ct=$gsm.tag("span",{class:"label"},"",st),dt=$gsm.tag("span",{class:"label"},"",ot),ut=$gsm.tag("div",{class:"ad-top",id:"crt-1097675",draggable:"false"},"",O),mt=$gsm.tag("div",{class:"lock",draggable:"false"},"",nt),ht=0,gt=0,ft=0,pt=0,vt=0,yt=0,wt=!0;$gsm.addEventListener(nt,"click",function(){F.checked=!1});var bt=!1;rt.onload=function(){L(!1)},lt.onload=rt.onload,$gsm.draggable(st,function(e,t){bt&&(wt?E(e,t,e,t):E(e,t,0,0),F.checked=!1)},M),$gsm.draggable(ot,function(e,t){bt&&(wt?E(e,t,e,t):E(0,0,e,t),F.checked=!1)},M);var $t={true:"Unlock to align images separately",false:"Lock to move images simultaneously"};if(mt.onclick=function(){$gsm.toggleClass(mt,"unlock"),wt=!wt,mt.setAttribute("title",$t[wt])},mt.setAttribute("title",$t[!0]),showMultipic=function(e,t){bt=!1,$gsm.addClass(nt,"loading"),wt=!0,$gsm.removeClass(mt,"unlock"),rt.src="",lt.src="",it.src="",at.src="",rt._src=e,lt._src=t,ShowImg2("[multipic]"),ct.innerHTML=ve[e].alt,dt.innerHTML=ve[t].alt;var n="translate(calc(-50% + "+st.offsetWidth/2+"px), calc(-50% + "+st.offsetHeight/2+"px))";L(!0),it.style.transform=n,at.style.transform=n,Ke="#compare-"+ve[e].index+","+ve[t].index,location.hash.match(/^#compare/)||history.replaceState({},"",Ke)},Ne=null,Ne=window.location.hash.match(/#compare-(\d+),(\d+)/),ge=ge||!!Ne,Ne){ve||o();var kt=ye[parseInt(Ne[1],10)],Lt=ye[parseInt(Ne[2],10)];showMultipic(kt.bigUrl,Lt.bigUrl)}for(var St="",Et="Enable compare mode. Click here, then select two images to compare.",Mt=document.querySelectorAll(".image-row.comparable"),Ct=0;Ct<Mt.length;Ct++){var Ht=Mt[Ct],qt=$gsm.tag("button",{class:"compare head-icon icon-compare",title:Et},"",Ht);qt.onclick=C}}),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("a[data-click"),t=0;t<e.length;t++){var n=e[t];n.hostname!==location.hostname&&n.addEventListener("click",function(){$gsm.beacon(DESKTOP_BASE_URL+this.getAttribute("data-click"))})}}),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("[data-clickmate]"),t=0;t<e.length;t++){var n=e[t],s=n.getAttribute("href"),o="gsmarena",i=document.title,a=window.location.href,r="https://shop-links.co/link?url="+encodeURIComponent(s)+"&publisher_slug="+o+"&article_name="+encodeURIComponent(i)+"&article_url="+encodeURIComponent(a)+"&exclusive=1";n.href=r}});