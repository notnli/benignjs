!function(){"use strict";var t={6816:function(t,e){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o={},n=["https://accounts.firefox.com/","https://accounts.stage.mozaws.net/","https://monitor.firefox.com/","https://getpocket.com/","https://vpn.mozilla.org/","https://stage-vpn.guardian.nonprod.cloudops.mozgcp.net/","https://guardian-dev.herokuapp.com/"],a=["utm_source","utm_campaign","utm_content","utm_term","utm_medium"],i=["device_id","flow_id","flow_begin_time","entrypoint_experiment","entrypoint_variation"],c=/^[\w/.%-]+$/,u="fxa-product-referral-id";o.getHostName=function(t){var e=t.match(/^https?:\/\/(?:[^/?#]+)(?:[/?#]|$)/i);return e&&e[0]},o.getFxALinkReferralData=function(){var t;if("undefined"!=typeof Mozilla.Cookies&&Mozilla.Cookies.enabled()&&o.hasFxALinkReferralCookie()){var e=o.getFxALinkReferralCookie();if("string"==typeof e&&c.test(e)){var r="www.mozilla.org";-1!==e.indexOf("whatsnew")&&(r="www.mozilla.org-whatsnew"),-1!==e.indexOf("welcome")&&(r="www.mozilla.org-welcome"),t={entrypoint:r,utm_source:r,utm_medium:"referral",utm_campaign:e}}}return t||null},o.getSearchReferralData=function(t){var e="string"==typeof t?t:document.referrer,r={utm_medium:"organic"};switch(!0){case/^https?:\/\/www\.google\.\w{2,3}(\.\w{2})?\/?/.test(e):r.utm_source="google";break;case/^https?:\/\/www\.bing\.com\/?/.test(e):r.utm_source="bing";break;case/^https?:\/\/(\w*\.)?search\.yahoo\.com\/?/.test(e):r.utm_source="yahoo";break;case/^https?:\/\/duckduckgo\.com\/?/.test(e):r.utm_source="duckduckgo";break;case/^https?:\/\/yandex\.\w{2,3}(\.\w{2})?\/?/.test(e):r.utm_source="yandex";break;case/^https?:\/\/www\.baidu\.com\/?/.test(e):r.utm_source="baidu";break;case/^https?:\/\/search\.naver\.com\/?/.test(e):r.utm_source="naver";break;default:r=null}return r},o.hasFxALinkReferralCookie=function(){return Mozilla.Cookies.hasItem(u)},o.getFxALinkReferralCookie=function(){return Mozilla.Cookies.getItem(u)},o.setFxALinkReferralCookie=function(t){var e="undefined"!=typeof Mozilla.Cookies&&Mozilla.Cookies.enabled();if(t&&e&&!o.hasFxALinkReferralCookie()){var r=new Date;r.setTime(r.getTime()+36e5);var n=r.toUTCString();Mozilla.Cookies.setItem("fxa-product-referral-id",t,n,"/",undefined,!1,"lax")}},o.onFxALinkReferralClick=function(t){var e="_blank"===t.target.target||t.metaKey||t.ctrlKey,r=t.target.getAttribute("data-referral-id");e||t.preventDefault(),o.setFxALinkReferralCookie(r),e||(window.location.href=t.target.href)},o.bindFxALinkReferrals=function(){for(var t=document.querySelectorAll(".js-fxa-product-referral-link"),e=0;e<t.length;e++)t[e].addEventListener("click",o.onFxALinkReferralClick,!1)},o.filterParams=function(t,e){for(var r={},o=0;o<e.length;o++){var n=e[o];if(Object.prototype.hasOwnProperty.call(t,n))try{var a=decodeURIComponent(t[n]);c.test(a)&&(r[n]=a)}catch(i){}}return r},o.getUtmData=function(t){var e=o.filterParams(t,a);return Object.prototype.hasOwnProperty.call(e,"utm_source")&&Object.prototype.hasOwnProperty.call(e,"utm_campaign")?e:null},o.getExperimentData=function(t){var e=o.filterParams(t,i);return Object.prototype.hasOwnProperty.call(e,"entrypoint_experiment")&&Object.prototype.hasOwnProperty.call(e,"entrypoint_variation")?e:null},o.getCouponData=function(t){if("object"!==r(t))return null;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&"coupon"===e&&c.test(t[e]))return{coupon:t[e]};return null},o.appendToProductURL=function(t,e){var r,o;if(t.indexOf("?")>0){if(o=window._SearchParams.queryStringToObject(t.split("?")[1]),Object.prototype.hasOwnProperty.call(e,"utm_source")&&Object.prototype.hasOwnProperty.call(e,"utm_campaign"))for(var n=0;n<a.length;n++){var c=a[n];Object.prototype.hasOwnProperty.call(o,c)&&delete o[c]}if(Object.prototype.hasOwnProperty.call(e,"entrypoint_experiment")&&Object.prototype.hasOwnProperty.call(e,"entrypoint_variation"))for(var u=0;u<i.length;u++){var s=i[u];Object.prototype.hasOwnProperty.call(o,s)&&delete o[s]}r=Object.assign(o,e),Object.prototype.hasOwnProperty.call(r,"coupon")&&-1===t.indexOf("/subscriptions/")&&delete r.coupon}else r=e;return t.split("?")[0]+"?"+window._SearchParams.objectToQueryString(r)},o.getAttributionData=function(t){var e={},r=o.getUtmData(t),n=o.getExperimentData(t),a=o.getCouponData(t);if(r)e=Object.assign(e,r);else{var i=o.getFxALinkReferralData();if(i)e=Object.assign(e,i);else{var c=o.getSearchReferralData();c&&(e=Object.assign(e,c))}}return n&&(e=Object.assign(e,n)),a&&(e=Object.assign(e,a)),e},o.init=function(t){if("function"==typeof Object.assign){var e=document.querySelectorAll(".js-fxa-cta-link, .js-vpn-cta-link");o.bindFxALinkReferrals();var r=o.getAttributionData(t);if(0!==Object.keys(r).length)for(var a=0;a<e.length;a++){var i=e[a].hasAttribute("href")?e[a].href:null;if(i){var c=o.getHostName(i);if(c&&-1!==n.indexOf(c)){var u=o.appendToProductURL(i,r);e[a].href=u}}}}},e.Z=o},596:function(t,e,r){var o=r(6396),n=r(6816),a=new window._SearchParams;n.Z.init(a.params),o.Z.init()},6396:function(t,e){var r={},o=Mozilla.Client,n=["https://accounts.firefox.com/","https://accounts.stage.mozaws.net/","https://accounts.firefox.com.cn/"];r.updateURL=function(t){var e=t.indexOf("?")>0?"&":"?";return t+=e+"context=fx_desktop_v3"},r.getHostName=function(t){var e=t.match(/^https?:\/\/(?:[^/?#]+)(?:[/?#]|$)/i);return e&&e[0]},r.interceptFxANavigation=function(t){t.preventDefault();for(var e=new URL(t.target.href).search,r=new window._SearchParams(e).params,o={},n=/^[\w/.%-]+$/,a=["flow_id","flow_begin_time","device_id","entrypoint","entrypoint_experiment","entrypoint_variation","utm_source","utm_campaign","utm_content","utm_term","utm_medium"],i=0;i<a.length;i++){var c=a[i];if(Object.prototype.hasOwnProperty.call(r,c)){var u=decodeURIComponent(r[c]);n.test(u)&&(o[c]=u)}}var s=o.entrypoint;return delete o.entrypoint,Mozilla.UITour.showFirefoxAccounts(o,s)},r.init=function(t){if(t=t||function(){},o._isFirefoxDesktop()){var e=parseFloat(o._getFirefoxVersion())>=80&&"undefined"!=typeof Mozilla.UITour,a=document.querySelectorAll(".js-fxa-cta-link");e&&Mozilla.UITour.ping((function(){for(var e=0;e<a.length;e++){var o=a[e],i=r.getHostName(o.href);i&&-1===n.indexOf(i)||(o.href=r.updateURL(o.href),o.setAttribute("role","button"),o.oncontextmenu=function(t){t.preventDefault()},o.addEventListener("auxclick",r.interceptFxANavigation),o.addEventListener("click",r.interceptFxANavigation))}t()}))}},e.Z=r}},e={};function r(o){var n=e[o];if(n!==undefined)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r(6396),r(6816);r(596)}();