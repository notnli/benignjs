var AMEXHP={};
var blueBoxPublicCookie=document.cookie.indexOf("blueboxpublic");
var sbo=false;
var sboHoldout=false;
var bauHoldout=false;
$(document).ready(function(){var f=$("#heroSection div.hero-content");
var b=f.length;
if($(".carousel-new").length>=1){document.querySelectorAll(".carousel-new").forEach(function(o){var p=o.querySelector(".carousel-inner");
var n=Array.from(p.children);
while(n.length){p.append(n.splice(Math.floor(Math.random()*n.length),1)[0])
}o.setAttribute("data-toggle","carousel")
});
j()
}else{if($(".filtr-item").length>0){$(".filtr-item .hero").each(function(){var n=$(this);
var q=n.find(".hero-bg.desktop").attr("data-src");
var r=n.find(".hero-bg.tablet").attr("data-src");
var o=n.find(".hero-bg.mobile").attr("data-src");
var p=n.find(".hero-bg.desktopXL").attr("data-src");
n.find(".hero-bg.desktop").css("background-image","url("+q+")");
n.find(".hero-bg.tablet").css("background-image","url("+r+")");
n.find(".hero-bg.mobile").css("background-image","url("+o+")");
n.find(".hero-bg.desktopXL").css("background-image","url("+p+")")
})
}else{if(b>1){selectSingleHeroRandomly(b)
}var g=$(".hero-bg.desktop").attr("data-src");
var c=$(".hero-bg.tablet").attr("data-src");
var i=$(".hero-bg.mobile").attr("data-src");
var k=$(".hero-bg.desktopXL").attr("data-src");
$(".hero-bg.desktop").css("background-image","url("+g+")");
$(".hero-bg.tablet").css("background-image","url("+c+")");
$(".hero-bg.mobile").css("background-image","url("+i+")");
$(".hero-bg.desktopXL").css("background-image","url("+k+")");
if(typeof Granite!="undefined"){if(ftheroesLength>0){ftheroes.each(function(){var n=$(this);
var q=n.find(".hero-bg.desktop").attr("data-src");
var r=n.find(".hero-bg.tablet").attr("data-src");
var o=n.find(".hero-bg.mobile").attr("data-src");
var p=n.find(".hero-bg.desktopXL").attr("data-src");
n.find(".hero-bg.desktop").css("background-image","url("+q+")");
n.find(".hero-bg.tablet").css("background-image","url("+r+")");
n.find(".hero-bg.mobile").css("background-image","url("+o+")");
n.find(".hero-bg.desktopXL").css("background-image","url("+p+")")
})
}}j()
}}var d=$(".hp-random-items");
var e=d.length;
function m(p){var o=Math.floor(Math.random()*p);
d.hide();
d.eq(o).show();
d.not(":eq("+o+")").remove()
}if(typeof Granite==="undefined"||typeof Granite.author==="undefined"){if(e>1){m(e)
}}function j(){$(".homepage-loaded").css("display","block");
$(".homepage-loading").remove()
}function h(n){if($(n).children().length===0){$(n).remove()
}}var a=document.querySelectorAll(".contentlibrary-container");
if(a.length>0){[].forEach.call(a,function(n){h(n)
})
}$(".morelink").on("click",expandtext);
var l=$(".card .image-wrap div.card-detail-image");
l.each(function(){var n;
n=$(this).attr("data-src");
$(this).attr("src",n)
});
$("button.alert-close").click(function(){$(this).closest("div").remove()
});
$(window).on("click scroll change keypress resize",function(){if($("#offers-section").is(":visible")){$(".offer-header").each(function(){$(this).removeAttr("style")
});
$(".offer-desc").each(function(){$(this).removeAttr("style")
});
equalheight(".offer-header");
equalheight(".offer-desc")
}})
});
$(document).ready(function(){var a=$(".app-banner-data");
AMEXHP.isAndroidTrackerFired=false;
AMEXHP.smartbanner=(function(){var h=/android/i.test(navigator.userAgent.toLowerCase()),d="android",c="AppBanner",i=6000000,f=false,k={title:a.data("title"),author:a.data("author"),store:a.data("store"),link:a.data("link"),button:a.data("button")},l="au-homepage-android-view",e="Android";
function n(){try{$("body").addClass("appbanner_show");
$(".appbanner").addClass("appbanner_"+d);
$(".appbanner__icon").addClass("appbanner__icon-"+d);
$(".appbanner__title").html(k.title);
$(".appbanner__author").html(k.author);
$(".appbanner__store").html(k.store);
$(".appbanner-button").attr("href",k.link);
$(".appbanner-button__text").html(k.button);
$(".appbanner-button").on("click",j);
$(".appbanner__close").on("click",p);
b()
}catch(q){$("html").removeClass("appbanner_show")
}}function p(){document.cookie=c+"=1; expires="+i+"; path=/";
$("body").removeClass("appbanner_show");
if(!f){g(f)
}}function j(q){q.preventDefault();
f=true;
p();
g(f);
window.location.href=this.href
}function g(q){if(q){(typeof($iTagTracker)=="function")?$iTagTracker("rmaction","Click_AppStoreBanner"):null
}else{AMEXHP.hpTrack.trackAction("Click>"+e+"Close")
}}function m(){return l
}function b(){itag_intlinkimp="HomePage-AppstoreBanner";
AMEXHP.hpTrack.trackLoad(itag_pagename);
AMEXHP.isAndroidTrackerFired=true
}function o(){if(h&&document.cookie.indexOf("blueboxpublic")!==-1&&document.cookie.indexOf(c)===-1){n()
}}return{getOmnVars:m,init:function(){var q=window.onload;
window.onload=function(){if(q){q()
}o()
}
}}
}());
if(document.cookie.indexOf("blueboxpublic")!==-1){AMEXHP.smartbanner.init()
}});
$(document).ready(function(){var f=$("#label-myAccount ~ div").find("a").first();
f.addClass("comp-track");
f.attr("data-rm","homepage-login-inav");
function i(){window.setTimeout(d,500)
}var g=0;
function d(){g++;
var k=$(".carousel-item");
var m=$("#carousel-cardmember .carousel-indicators a");
var l=$("#carousel-prospect .carousel-indicators a");
if(k.length==l.length||k.length==m.length){m.each(function(){$(this).attr("data-rm","Carousel-CM-Item");
$(this).addClass("comp-track");
$(this).attr("aria-label","slide")
});
l.each(function(){$(this).attr("data-rm","Carousel-PR-Item");
$(this).addClass("comp-track");
$(this).attr("aria-label","slide")
})
}else{if(g<=5){i()
}}}d();
var a=$(".carousel-control");
a.on("click",function(l){var k=$(this).attr("data-rm");
b(k)
});
$(".comp-track").on("click",function(l){var k=$(this).attr("data-rm");
if(k!==undefined){b(k)
}});
function b(k){if(typeof(digitalData.event)!="undefined"){digitalData.event.length=0
}digitalData.event.push({eventInfo:{eventAction:"Click",eventAsset:k,eventType:"pageInteraction"}});
if(typeof(_satellite)!="undefined"){_satellite.track("event")
}}function h(l,k){return(RegExp(k+"=(.+?)(&|$)").exec(l)||[,null])[1]
}function c(n,m,l,k){return n.substring(0,m)+k+n.substring(l)
}function e(o,n,l){var k=h(l,o)+"-HeroID_"+n;
var m=l.indexOf(o+"=");
var p=l.indexOf("&",m);
return c(l,m,p>0?p:l.length,o+"="+k)
}$(".card-section-tracking").on("click contextmenu",function(){if($(this).attr("href").indexOf("HeroID")===-1){var k=$("#heroSection div.hero-bg").data("src");
var n;
if(k){var m=k.split("/").pop();
var l=m.split(".").shift();
n=l
}$(this).attr("href",function(){var o=$(this).attr("href");
var p=o.indexOf("intlink");
var q=o.indexOf("extlink");
if(n&&n!=undefined){if(p>0){return e("intlink",n,this.href)
}else{if(q>0){return e("extlink",n,this.href)
}}}else{return this.href
}})
}});
function j(){var o=$(".hero-bg.desktop").attr("data-src");
var n=o;
if(n){var m=n.split("/").pop();
var l=m.split(".").shift();
n=l;
if(sbo){n=n+"-17835680"
}else{if(sboHoldout){n=n+"-17835671"
}else{if(bauHoldout){n=n+"-bau-holdout"
}}}k(n)
}function k(p){if(typeof(digitalData.event)!="undefined"){digitalData.event.length=0
}digitalData.event.push({eventInfo:{eventAction:"Impression",eventAsset:p,eventType:"pageInteraction"}});
if(typeof(_satellite)!="undefined"){_satellite.track("event")
}}}window.heroImpressions=j;
window.addEventListener("load",function(k){if(document.documentElement.lang!="en-US"){j()
}},false);
AMEXHP.hpTrack=(function(){function r(y,v,x,w){var z=x||1;
if(z<25){if(!!w){window.setTimeout("AMEXHP.hpTrack."+y+'("'+v+'",'+(z+1)+","+w+");",500)
}else{window.setTimeout("AMEXHP.hpTrack."+y+'("'+v+'",'+(z+1)+");",500)
}}}function t(x,v,w){v=v||1;
if(typeof $iTagTracker==="function"){$iTagTracker("rmaction",x)
}else{r("trackAction",x,v,w)
}}function p(w,v,x){t(w,"","e");
window.setTimeout(function(){window.location.href=v
},1000)
}function l(w,x,v){if(typeof $iTagTracker==="function"){omn_rmsocialaction(v,x,w)
}else{r("trackShare",x,v)
}}function n(w,v){v=v||1;
if(typeof iTagTracker==="function"){$iTagTracker("vidstart",w)
}else{r("trackVideoStart",w,v)
}}function u(w,v){v=v||1;
if(typeof iTagTracker==="function"){$iTagTracker("vidcomplete",w)
}else{r("trackVideoComplete",w,v)
}}function k(w,v){if(v==="start"){n(w)
}if(v==="complete"){u(w)
}}function m(w,v){v=v||1;
if(typeof $iTagTracker==="function"){$iTagTracker("layertrack",w)
}else{r("trackLoad",w,v)
}}function q(v){v=v||1;
if(typeof s==="object"&&typeof s.t==="function"&&typeof $iTagTracker==="function"){s.t()
}else{r("trackPage",v)
}}function o(v,y){var x=y||1;
console.log(x);
try{if(typeof s==="object"&&typeof($iTagTracker)=="function"){itag_intlinkimp=v;
$iTagTracker("custom",itag_intlinkimp)
}else{if(x<25){x++;
window.setTimeout(function(){o(v,x)
},500)
}}}catch(w){}}return{trackLoad:m,trackAction:t,trackLink:p,trackShare:l,trackVideo:k,trackDelay:r,trackPage:q,trackOnLoad:o}
}())
});
$(document).ready(function(){var f=document.getElementById("envValue");
var c=f!=undefined?f.value:"E3";
var a;
var g="flash-flood";
var b;
var d="bdaas-prefetch";
if(c=="E3"){a="https://cdaas.americanexpress.com/cdaas/myca/flash-flood/lib/flash-flood.html";
b="https://bdaas.americanexpress.com/api/servicing/v2/prefetch"
}else{if(c=="E2"){a="https://cdaas-test.americanexpress.com/cdaas/myca/flash-flood/lib/flash-flood.html";
b="https://bdaas-staging-qa.americanexpress.com/api/servicing/v2/prefetch"
}else{if(c=="E1"){a="https://cdaas-test.americanexpress.com/cdaas/myca/flash-flood/lib/flash-flood.html";
b="https://bdaas-staging-dev.americanexpress.com/api/servicing/v2/prefetch"
}else{a="https://cdaas.americanexpress.com/cdaas/myca/flash-flood/lib/flash-flood.html";
b="https://bdaas.americanexpress.com/api/servicing/v2/prefetch"
}}}function h(k,j){var l;
l=document.createElement("iframe");
l.src=k;
l.title=j;
l.setAttribute("style","display: none;");
document.getElementsByTagName("body")[0].appendChild(l)
}function e(){if(blueBoxPublicCookie!==-1){h(b,d)
}h(a,g)
}window.InjectIframes=e;
function i(){setTimeout("InjectIframes()",250)
}if(document.readyState==="complete"){i()
}else{window.addEventListener("load",function(j){i()
},false)
}});
$(document).ready(function(){var a=$(".cmp-contentlibrary-container--hero-contentlibrary").length;
var b=$(".clmasterviewlist").length;
if(a>0||b>0){$(".heroLogin").removeClass("hero-login").addClass("no-login-hp");
$(".hero-container .container").removeClass("container");
$(".cards-container .container .row.pad-3-t.pad-3-b .col-md-3.margin-0-tb ").addClass("pad-3 col-md-6 col-lg-3 anim-slide-up anim-delay-3 card-component_container");
$(".icons-container .container .row.pad-3-t.pad-3-b.pad-2-l.pad-2-r .col-md-4.margin-0-tb").addClass("col-xs-12 margin-3-b").attr("id","iconslot");
$(".offers-container .container .row.pad-3-t.pad-3-b.pad-2-l.pad-2-r .col-md-4.margin-0-tb").addClass("col-xs-12 margin-b")
}if(b>0){$(".shp-content").removeClass("col-lg-6")
}});