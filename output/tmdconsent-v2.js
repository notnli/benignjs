function tmdCheckConsent(t){try{if(("0"==o("tmd_gdpr")||"1"==o("tmd_gdpr"))&&"undefined"!=typeof Cookiebot&&Cookiebot&&Cookiebot.consent&&!Cookiebot.consent[t])return!1}catch(t){}return!0;function o(t){for(var o=t+"=",e=decodeURIComponent(document.cookie).split(";"),i=0;i<e.length;i++){for(var n=e[i];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""}}function tmdAppendCookiebotDeclaration(t){try{var o=document.createElement("script");o.src="https://consent.cookiebot.com/26820762-c384-47cd-bdd5-31334982f129/cd.js",o.async=!0,o.id="CookieDeclaration",o.type="text/javascript",t.appendChild(o)}catch(t){}}function CookiebotCallback_OnAccept(){"undefined"!=typeof Cookiebot&&Cookiebot&&(Cookiebot.whitelist.push("tmd_gdpr"),!Cookiebot.isOutsideEU&&Cookiebot.changed&&(Cookiebot.removeCookies(),location.reload()))}!function(){var t=["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"],o=["/kariyer/is-basvuru","odeme.tmgrup.com.tr","patibuldular.com/#adoptionForm","sabah.com.tr/ygs-puan-hesaplama","sabah.com.tr/15-temmuz-yarismasi","uyelik.tmgrup.com.tr/uye_ol_1.php","sabah.com.tr/login","sabah.de/ilan-gir","sabah.de/abonelik","teknokulis.com/yorumoku","yeniasir.com.tr/anket","yeniasir.com.tr/ilan-verin","uyelik.tmgrup.com.tr/uye_ol_1.php","uyelik.tmgrup.com.tr/Authentication/EditUser","uyelik.tmgrup.com.tr","dailysabah.com/jobs","benibuldular.com/?#box-form","benibuldular.com/kayip-listesi","minika.com.tr/iyikidogdun/basvuru","minika.com.tr/iyikidogdun/basvuru-guncelle","minikacocukkulubu.com/yarisma","anket.tmgrup.com.tr","minikacocukdergi.com.tr/sende-gonder","minikagodergi.com.tr/sende-gonder","atv.com.tr/milyoner/form","atv.com.tr/milyoner/form/update","atv.com.tr/milyoner/form/ss","fotomac.com.tr/twitter","aboneturkuvaz.com/index.php?p=Abonelik&action=step1","turkuvazabone.com/uye_ol.html","turkuvazmatbaacilik.com/ik_basvuru_formu.html","turkuvazmatbaacilik.com/teklif_siparis.html","forbes.com.tr/30alti30","dailysabahcentre.com/academy/application-form.html","bizeulasin.tmgrup.com.tr/contactus/form","bizeulasin.tmgrup.com.tr/contactus/forwardform","yeniasir-staging.dev.tmd/ilan-verin","yeniasir-staging.dev.tmd/anket","patibuldular-test.dev.tmd/#adoptionForm","benibuldular-test.dev.tmd/?#box-form","benibuldular-test.dev.tmd/kayip-listesi","dailysabah-test.dev.tmd/jobs","sabahde-test.dev.tmd/ilan-gir","sabahde-test.dev.tmd/abonelik","sabah-test.dev.tmd/ygs-puan-hesaplama","sabah-test.dev.tmd/15-temmuz-yarismasi","fotomac-test.dev.tmd/twitter","sabah-test.dev.tmd/login","teknokulis-test.dev.tmd/yorumoku","teknokulis-staging.dev.tmd/yorumoku","sabah-staging.dev.tmd/ygs-puan-hesaplama","sabah-staging.dev.tmd/15-temmuz-yarismasi","sabah-staging.dev.tmd/login"],e=!1;function i(t,o,e){var i=new Date;i.setTime(i.getTime()+60*e*1e3);var n="expires="+i.toUTCString();document.cookie=t+"="+o+";"+n+";path=/"}function n(t){for(var o=t+"=",e=decodeURIComponent(document.cookie).split(";"),i=0;i<e.length;i++){for(var n=e[i];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""}function a(t,n,a){t&&n&&i("tmd_gdpr",t,n),"TR"!=a&&(!function(){if(o&&!(document.location.href.toLowerCase().indexOf("vega.tmgrup.com.tr")>-1))for(var t="https://i.tmgrup.com.tr/tmd-consent/static.html#"+decodeURIComponent(document.location.href),e=0;e<o.length;e++)document.location.href.toLowerCase().indexOf(o[e].toLowerCase())>-1&&(document.location.href=t)}(),e||(document.getElementsByTagName("head")[0].innerHTML+='<style style="text/css">.gdprRemove { display:none!important; } .gdprRemove * { display:none!important; } .gdprHide { visibility:hidden!important; } .gdprHide * { visibility:hidden!important; } .pb_feed_iframe { display:none!important; }</style>',e=!0))}function r(){try{if(!n("CookieConsent"))i("CookieConsent","{stamp:%27-1%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:"+(new Date).getTime()+"%2Ciab2:%27%27%2Cregion:%27TR%27}",10080)}catch(t){}}try{if("bypassgdpr"==function(){try{var t=document.location.href.lastIndexOf("#");if(t>-1)return decodeURIComponent(document.location.href.slice(t+1))}catch(t){}return null}())return;var m=n("tmd_gdpr");if(""==m){var d=new XMLHttpRequest;d.open("GET","https://ipcheck.tmgrup.com.tr/ipcheck/getcountry?json=1&v"+Math.round(1e7*Math.random()),!0),d.onerror=function(t){a("0",5),console.log(t.message)},d.onload=function(){if(200==this.status)try{var o=JSON.parse(d.responseText);if(t.indexOf(o.CountryCode)>-1)a("0",1440,o.CountryCode);else{i("tmd_gdpr","3",1440);try{window.addEventListener("CookiebotOnDialogInit",(function(){Cookiebot.setOutOfRegion()}))}catch(t){}r()}}catch(t){a("0",5),console.log(t.message)}else a("0",5),console.log("ipcheck status: "+this.status)},d.send(null)}else"0"==m||"1"==m?a():r();!function(){try{var t="TAMAM",o="",e=document.getElementById("Cookiebot");if(e){var i=e.getAttribute("data-culture");"EN"==i||"DE"==i?t="OK":"RU"==i?t="ХОРОШО":"AR"==i&&(t="حسنا"),document.location.href.toLowerCase().indexOf("dailysabah.com")>-1&&("AR"==i?o="#CybotCookiebotDialog {box-shadow: #adadad 2px 2px 5px 2px !important;} #CybotCookiebotDialogBody { max-width: 980px !important;} #CybotCookiebotDialogBodyContentText {line-height: 20px !important; padding-top: 0px !important;} #CybotCookiebotDialogBodyContentText span {font-size: 18px !important;font-family: Hasan Enas W23 !important;} #CybotCookiebotDialogBodyButtonAccept {background-color: #993232 !important;  border: 1px solid #993232 !important;} #CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink {margin-top: 13px !important;} #CybotCookiebotDialogBodyContentTitle {font-family: Hasan Enas W23 !important;font-size: 23px !important;} #CybotCookiebotDialogBodyContent {padding-bottom: 0px !important;}":"EN"!=i&&"DE"!=i&&"RU"!=i||(o="#CybotCookiebotDialog {box-shadow: #adadad 2px 2px 5px 2px !important;} #CybotCookiebotDialogBody { max-width: 980px !important;} #CybotCookiebotDialogBodyContentText {line-height: 15px !important; padding-top: 5px !important;} #CybotCookiebotDialogBodyContentText span { font-size: 12px !important; font-family: verdana !important; } #CybotCookiebotDialogBodyButtonAccept {background-color: #993232 !important;  border: 1px solid #993232 !important;} #CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink {margin-top: 13px !important;} #CybotCookiebotDialogBodyContentTitle {font-family: verdana !important; font-size: 15px !important;} #CybotCookiebotDialogBodyContent {padding-bottom: 0px !important;}"))}var n='#CybotCookiebotDialogBodyButtonAccept {float:right !important; padding:11px !important; text-indent:-9999px !important;line-height:0 !important;} #CybotCookiebotDialogBodyButtonDetails {float:left !important;} #CybotCookiebotDialogBody {max-width:1600px !important; padding:0 40px 0 40px !important;} #CybotCookiebotDialogBodyContentText>span{font-size:11pt !important;} #CybotCookiebotDialogBodyContentText{min-height:52px !important; padding-top:10px !important; line-height:22px !important; text-align:justify !important;} #CybotCookiebotDialogBodyButtonAccept:after{content:"'+t+'" !important; text-indent:0 !important; line-height: initial !important; display:block !important;}';o&&(n+=o);var a=document.createElement("style");a.innerHTML=n,document.head.appendChild(a)}catch(t){}}()}catch(t){console.log(t.message)}}();