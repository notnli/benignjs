var SfdcWwwBase=SfdcWwwBase||{};
var oneTrustComponent=(function(){var b,f=0;
var a={TAB:9,ESCAPE:27,ENTER:13,SPACE:32,LEFT:37,RIGHT:39};
function e(){var m=((b&&b.querySelectorAll(".category-menu-switch-handler"))?b.querySelectorAll(".category-menu-switch-handler"):false);
var n=((b&&b.querySelector(".save-preference-btn-handler"))?b.querySelector(".save-preference-btn-handler"):false);
var l=((b&&b.querySelector("#accept-recommended-btn-handler"))?b.querySelector("#accept-recommended-btn-handler"):false);
var k=((b&&b.querySelector("#ot-tab-desc"))?b.querySelector("#ot-tab-desc"):false);
function j(o){if(n&&l){if(typeof o.parentElement.dataset.optanongroupid==="undefined"){if(n.classList.contains("visible")){n.classList.remove("visible")
}if(l.classList.contains("optanon-ghost-button")){l.classList.remove("optanon-ghost-button")
}}else{n.classList.add("visible");
l.classList.add("optanon-ghost-button")
}}}for(let i=0;
i<m.length;
i++){m[i].addEventListener("click",function(o){j(o.currentTarget)
});
m[i].addEventListener("keydown",function(o){if(o.keyCode===a.LEFT||o.keyCode===a.RIGHT){h()
}})
}if(k&&n&&l&&m.length){for(let i=0;
i<m.length;
i++){if(i===0){m[0].addEventListener("keydown",function(o){if(o.shiftKey===true&&o.keyCode===a.TAB){setTimeout(function(){l.focus()
},100)
}if(o.shiftKey===false&&o.keyCode===a.TAB){setTimeout(function(){k.focus()
},100)
}})
}else{m[i].addEventListener("keydown",function(o){if(o.shiftKey===true&&o.keyCode===a.TAB){setTimeout(function(){l.focus()
},100)
}})
}}}function h(){for(let i=0;
i<m.length;
i++){if(m[i].classList.contains("ot-active-menu")){j(m[i])
}}}}function d(){var h=setInterval(function(){b=document.querySelector("#onetrust-pc-sdk");
if(b!==undefined&&b!==null&&b){e();
clearInterval(h)
}if(f++>10){clearInterval(h)
}},500)
}function c(){var k=new Date();
k.setTime(k.getTime()+1*3600*1000*24*365);
function j(){if(!h("cleared-onetrust-cookies")){document.cookie="OptanonAlertBoxClosed=; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
document.cookie="OptanonConsent=; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT"
}document.cookie="cleared-onetrust-cookies=; path=/; domain=.salesforce.com; expires="+k
}function h(n){var l="; "+document.cookie;
var m=l.split("; "+n+"=");
if(m.length==2){return true
}}j()
}function g(){c();
d()
}return{init:g,oneTrustComponent:oneTrustComponent}
}());
function runOneTrustComponent(){oneTrustComponent.init()
}if(document.readyState!="loading"){runOneTrustComponent()
}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",runOneTrustComponent)
}else{document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete"){runOneTrustComponent()
}})
}};