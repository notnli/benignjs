(()=>{"use strict";var e,o=function(e){var o=new URLSearchParams;return Object.keys(e).forEach((function(n){o.append(n,e[n])})),o.toString()},n=function(e){(window.goldlog_queue||(window.goldlog_queue=[])).push({action:"goldlog.record",arguments:["/sc.buyer_business.imageupload_click","CLK",o(e)]})},i=".ui-searchbar-body > form > .ui-searchbar-imgsearch-icon";function l(e,o){var n,i,l;if("link"===e||"script"===e){var r=null===(n=document)||void 0===n?void 0:n.createElement(e);if("link"===e){var c,u="link[href='".concat(o,"']");if(null!==(c=document)&&void 0!==c&&c.querySelector(u))return;r.rel="stylesheet",r.href=o}else{if("script"!==e)return;var t,d="script[src='".concat(o,"']");if(null!==(t=document)&&void 0!==t&&t.querySelector(d))return;r.type="text/javascript",r.src=o,r.setAttribute("defer",!0)}null===(i=document)||void 0===i||null===(l=i.body)||void 0===l||l.appendChild(r)}}null===(e=window)||void 0===e||e.addEventListener("DOMContentLoaded",(function(){fetch("//open-s.alibaba.com/openservice/btsBusinessService?bucketTest=image_search_upload_promotion",{body:null,method:"GET",mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){var r,c;if(200!==(null==e?void 0:e.code)||"new"!==(null==e||null===(r=e.data)||void 0===r?void 0:r.bucket))n({action:"enterOldImageSearch"});else{c={from:"imageupload",area:"uploadbtn2022"||"uploadbtn"},(window.goldlog_queue||(window.goldlog_queue=[])).push({action:"goldlog.record",arguments:["/sc.buyer_business.sourcenow_click","CLK",o(c)]});(function(e,o){return new Promise((function(n,i){var l=setInterval((function(){var i,r=null===(i=document)||void 0===i?void 0:i.querySelector(o);if(--e<=0&&clearInterval(l),r){var c,u=r.cloneNode(!0);u.id="image-upload-react",null==r||r.after(u),null==r||null===(c=r.parentNode)||void 0===c||c.removeChild(r),clearInterval(l),n()}}),1e3)}))})(30,i).then((function(){var e,o,r,c;e=i,o="image-upload-root",null==(c=null===(r=document)||void 0===r?void 0:r.querySelector(e))||c.addEventListener("click",(function(){var i,r,c,u,t,d;if(n({action:"newImageSearchClick"}),null===(null===(i=document)||void 0===i?void 0:i.querySelector(o))){var a,s,v=null===(a=document)||void 0===a?void 0:a.createElement("div");v.id=o,null===(s=document)||void 0===s||s.querySelector(e).after(v)}var g=null===(r=window.HEADER_DATA)||void 0===r||null===(c=r["sc-header-config"])||void 0===c?void 0:c["beacon-config"],m=null==g||null===(u=g["searbar-config"])||void 0===u||null===(t=u["image-upload-config"])||void 0===t?void 0:t["image-upload-version"];m=(null===(d=m)||void 0===d?void 0:d.trim())||"0.0.2",l("link","//s.alicdn.com/@g/sc/image-upload-react/".concat(m,"/index.css")),l("script","//s.alicdn.com/@g/sc/image-upload-react/".concat(m,"/index.bundle.js"))}))})).catch((function(){var e;e={reason:"hackIconError"},(window.goldlog_queue||(window.goldlog_queue=[])).push({action:"goldlog.record",arguments:["/sc.buyer_business.imageupload_err","CLK",o(e)]})}))}}))}))})();