(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{767:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var o=t(11),r=t(3),c=t(763),d=function(e,n){var t=Object(r.q)(null),d=Object(c.b)(t,(function(n){Object(o.a)(n,1)[0].isIntersecting&&e()}),n).stop;return Object(r.m)((function(){d()})),[t,d]}},768:function(e,n,t){"use strict";t.d(n,"b",(function(){return h})),t.d(n,"f",(function(){return _})),t.d(n,"d",(function(){return O})),t.d(n,"i",(function(){return j})),t.d(n,"e",(function(){return L})),t.d(n,"c",(function(){return k})),t.d(n,"a",(function(){return M})),t.d(n,"k",(function(){return Y})),t.d(n,"h",(function(){return H})),t.d(n,"g",(function(){return I})),t.d(n,"j",(function(){return A}));t(25),t(18),t(21),t(36),t(22),t(40);var o=t(11),r=t(13),c=(t(17),t(28),t(24),t(50),t(61),t(55),t(29),t(30),t(51),t(15),t(72),t(62),t(3)),d=t(800),m=t(767),l=t(2),v=t(225);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var y=t(68).a.messages[l.G]["news-page"]["no-content"];function h(e){var n,t,o,r,c,m,l,v,f,h,_,O,article=e.article,j=e.adConfig,L=e.position,k=e.list,M=e.quantity,Y=null==article||null===(n=article.entries)||void 0===n?void 0:n.length;return Y&&(O=Y<=5?"Kısa":Y<=9?"Orta":Y<=14?"Uzun":"Çok Uzun"),w(w(w(w(w(w(w({item_name:article.title||y,item_id:article.legacyId,price:1,item_brand:(null===(t=article.author)||void 0===t?void 0:t.username)||(null===(o=article.authors)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.username)||"~no-username",item_category:(null===(c=article.breadcrumb)||void 0===c?void 0:c[0].name)||(null===(m=article.categories)||void 0===m||null===(l=m[0])||void 0===l?void 0:l.name)},(null===(v=article.breadcrumb)||void 0===v?void 0:v[1])&&{item_category2:article.breadcrumb[1].name}),Y&&{item_category3:O}),j&&{item_category4:"sponsored"===(null==j||null===(f=j.value)||void 0===f||null===(h=f.decidedMode)||void 0===h?void 0:h.value)}),(null===(_=article.breadcrumb)||void 0===_?void 0:_[2])&&{item_category5:article.breadcrumb[2].name}),{},{item_variant:article.dates?Object(d.d)(article.dates.created):""},k&&{item_list_name:k}),L&&{index:L}),M&&{quantity:M})}var _=function(){var e,n,t,r,d,l,v,f,w=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},y=w.list,h=void 0===y?"":y,_=w.item,j=void 0===_?{}:_,L=w.position,k=void 0===L?0:L,M=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],Y=Object(c.q)({}),H=function(){var e,n,t;return(null===(e=Y.value)||void 0===e?void 0:e.scroll)||(null===(n=Y.value)||void 0===n?void 0:n.initOnLoad)||(null===(t=Y.value)||void 0===t?void 0:t.init)};if(M.includes("scroll")&&(null===(e=Y.value)||void 0===e||!e.scroll)){var I=Object(c.e)("dataLayer"),C=Object(m.a)((function(){var e=O("content_impression",h,j,k),n=e.ua,t=e.ga;I.value.ua.push(n),I.value.ga.push(t),Y.value.scroll=!0,d()}),{threshold:.5}),T=Object(o.a)(C,2);r=T[0],d=T[1]}return M.includes("click")&&(l=function(){var data=O("content_click",h,j,k);A(data)}),!M.includes("initOnLoad")||null!==(n=Y.value)&&void 0!==n&&n.initOnLoad||(v=function(){var e=Object(c.e)("dataLayer"),n=O("content_impression",h,j,k),t=n.ua,o=n.ga;e.value.ua.push(t),e.value.ga.push(o),Y.value.initOnLoad=!0}),!M.includes("init")||null!==(t=Y.value)&&void 0!==t&&t.init||(f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.preventDuplicate,t=void 0!==n&&n;if(!t||!H()){var o=O("content_impression",h,j,k),r=o.ua,c=o.ga;window.dataLayer.push({event:"content_impression",ecommerce:{currencyCode:"TRY",impressions:[r]}}),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"view_item_list",ecommerce:{items:[c]}}),Y.value.init=!0}}),{elRef:r,clickEvent:l,initOnLoadEvent:v,initEvent:f}},O=function(e,n,t,o){var r,c,m;if(!e||!n||!t)return!1;var l,f,_=(null===(r=t.breadcrumb)||void 0===r?void 0:r.map((function(e){return e.name})).join("/"))||(null===(c=t.categories)||void 0===c||null===(m=c[0])||void 0===m?void 0:m.name),O=Object(v.c)(t);return"content_impression"===e?{ua:w(w(w({name:t.title||y,id:t.legacyId,price:"1.00",brand:(null===(l=t.author)||void 0===l?void 0:l.username)||"~no-username",category:_,variant:t.dates?Object(d.d)(t.dates.created):"",list:n,position:o},(null==t?void 0:t.yazioAuthor)&&{yazioAuthor:t.yazioAuthor}),(null==O?void 0:O[1])&&{dimension2:O[1]}),(null==O?void 0:O[2])&&{dimension6:O[2]}),ga:h({article:t,list:n,position:o})}:"content_click"===e&&{ua:{event:e,ecommerce:{click:{actionField:{list:n},products:[w(w({name:t.title||y,id:t.legacyId,price:"1.00",brand:(null===(f=t.author)||void 0===f?void 0:f.username)||"~no-username",category:_,variant:t.dates?Object(d.d)(t.dates.created):"",position:o},(null==O?void 0:O[1])&&{dimension2:O[1]}),(null==O?void 0:O[2])&&{dimension6:O[2]})]}}},ga:{event:"select_item",ecommerce:{items:[h({article:t,list:n,position:o})]}}}},j=function(e,n,data){var t,o,r,article=n.article,c=n.adConfig;var m,l=null===(t=article.breadcrumb)||void 0===t?void 0:t.map((function(e){return e.name})).join("/"),v=function(e){var n="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===n.length)return n.pop().split(";").shift()}("_ga")||"",f=+new Date;if(data){var w=data.icons.svg.split("/");m=w[w.length-1].split(".")[0]}window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"interaction_done",ecommerce:{purchase:{actionField:{id:"".concat(f,".").concat(v),affiliation:"Web",revenue:"1.00",tax:"0.00",shipping:"0.00",type:"reaction"===e?"Reaksiyon":"Yorum",subType:data?m:"Yorum"},products:[{name:article.title||y,id:article.legacyId,price:"1.00",brand:(null===(o=article.authors)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.username)||"~no-username",category:l,variant:Object(d.d)(article.dates.created),quantity:1}]}}}),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"purchase",ecommerce:{transaction_id:"".concat(f,".").concat(v),affiliation:"Web",value:1,tax:0,shipping:0,currency:"TRY",type:"reaction"===e?"Reaksiyon":"Yorum",subType:data?m:"Yorum",items:[h({article:article,quantity:1,adConfig:c})]}})},L=function(article,e){var n=Object(m.a)((function(){var n,t,o,r=null===(n=article.breadcrumb)||void 0===n?void 0:n.map((function(e){return e.name})).join("/");window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"content_read",ecommerce:{currencyCode:"TRY",add:{products:[{name:article.title||y,id:article.legacyId,price:"1.00",brand:(null===(t=article.authors)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.username)||"~no-username",category:r,variant:Object(d.d)(article.dates.created),quantity:1}]}}}),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"add_to_cart",ecommerce:{items:[h({article:article,quantity:1,adConfig:e})]}}),c()})),t=Object(o.a)(n,2),r=t[0],c=t[1];return r},k=function(){var e,n;return(null===(e=window.dataLayer.find((function(e){return"PageView"===e.event})))||void 0===e||null===(n=e.page)||void 0===n?void 0:n.type)||""},M=function(){clearTimeout(window.menuImpressionTimeout)},Y=function(e,n,t,o){"view"===e?(window.dataLayer.push({event:"promotion_view",ecommerce:{promoView:{promotions:[{id:"Anasayfa",name:"Anasayfa - ".concat(n),creative:t,position:o},{id:"Anasayfa",name:"Anasayfa - ".concat(n),creative:t,position:o}]}}}),window.dataLayer.push({event:"view_promotion",ecommerce:{items:[{promotion_id:"Anasayfa",promotion_name:"Anasayfa - ".concat(n),creative_name:t,creative_slot:o},{promotion_id:"Anasayfa",promotion_name:"Anasayfa - ".concat(n),creative_name:t,creative_slot:o}]}})):"click"===e&&(window.dataLayer.push({event:"promotion_click",ecommerce:{promoClick:{promotions:[{id:"Anasayfa",name:"Anasayfa - ".concat(n),creative:t,position:o}]}}}),window.dataLayer.push({event:"select_promotion",ecommerce:{items:[{promotion_id:"Anasayfa",promotion_name:"Anasayfa - ".concat(n),creative_name:t,creative_slot:o}]}}))},H=function(e,n){var t=n.currentCategory,o=n.subCategories;"desktop"===e?(M(),window.menuImpressionTimeout=setTimeout((function(){window.dataLayer.push({event:"promotion_view",ecommerce:{promoView:{promotions:[{id:"Main Header",name:"".concat(k()," - Main Header - ").concat(t.shortName),creative:"Other",position:"Other"}]}}}),window.dataLayer.push({event:"view_promotion",ecommerce:{items:[{promotion_id:"Main Header",promotion_name:"".concat(k()," - Main Header - ").concat(t.shortName),creative_name:"Other",creative_slot:"Other"}]}})}),1e3)):(M(),window.menuImpressionTimeout=setTimeout((function(){window.dataLayer.push({event:"promotion_view",ecommerce:{promoView:{promotions:o.map((function(e,n){return{id:"Mobile Header",name:"".concat(k()," - Mobile Header - ").concat(t.name),creative:e.name,position:n+1}}))}}}),window.dataLayer.push({event:"view_promotion",ecommerce:{items:o.map((function(e,n){return{promotion_id:"Mobile Header",promotion_name:"".concat(k()," - Mobile Header - ").concat(t.name),creative_name:e.name,creative_slot:n+1}}))}})}),1e3))},I=function(e,n){var t=n.firstLevel,o=n.secondLevel,r=n.currentCategory,c=n.position;"desktop"===e?(window.dataLayer.push({event:"promotion_click",ecommerce:{promoClick:{promotions:[{id:"Main Header",name:"".concat(k()," - Main Header - ").concat(r.shortName),creative:t,position:o}]}}}),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"select_promotion",ecommerce:{items:[{promotion_id:"Main Header",promotion_name:"".concat(k()," - Main Header - ").concat(r.shortName),creative_name:t,creative_slot:o}]}})):(window.dataLayer.push({event:"promotion_click",ecommerce:{promoClick:{promotions:[{id:"Mobile Header",name:"".concat(k()," - Main Header - ").concat(r.name),creative:t,position:c}]}}}),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"select_promotion",ecommerce:{items:[{promotion_id:"Mobile Header",promotion_name:"".concat(k()," - Main Header - ").concat(r.name),creative:t,position:c}]}}))},A=function(e){var n=e.ua,t=e.ga;window.dataLayer.push(n),window.dataLayer.push({ecommerce:null}),window.dataLayer.push(t)}},800:function(e,n,t){"use strict";t.d(n,"e",(function(){return w})),t.d(n,"a",(function(){return y})),t.d(n,"d",(function(){return h})),t.d(n,"i",(function(){return _})),t.d(n,"b",(function(){return O})),t.d(n,"j",(function(){return j})),t.d(n,"l",(function(){return L})),t.d(n,"f",(function(){return k})),t.d(n,"g",(function(){return M})),t.d(n,"h",(function(){return Y})),t.d(n,"k",(function(){return H}));t(17),t(56),t(121);var o=t(3),r=t(757),c=t.n(r);t.d(n,"c",(function(){return c.a}));t(779),t(780),t(781);var d=t(782),m=t.n(d),l=t(783),v=t.n(l),f=t(2);c.a.locale(f.G),c.a.extend(m.a),c.a.extend(v.a);var w=function(e){if(!e||!c()().isValid(e))return null;var n=c()().year()-c()(e).year()>0?f.n.withoutTime:f.n.withoutYear;return c.a.utc(e).tz("Europe/Istanbul").format(n)},y=function(e){return e&&c()().isValid(e)?c.a.utc(e).tz("Europe/Istanbul").format(f.n.default):null},h=function(e){return e&&c()().isValid(e)?c.a.utc(e).tz("Europe/Istanbul").format("YYYY-MM-DD"):null},_=function(e,n){return c.a.utc(e).tz("Europe/Istanbul").isSame(c.a.utc(n).tz("Europe/Istanbul"),"minute")},O=function(){for(var e=[Object(o.w)().i18n.t("main.time.day")],i=1;i<=31;i++)e.push(i.toString());return e},j=function(){for(var e=[Object(o.w)().i18n.t("main.time.month")],i=1;i<=12;i++)e.push(i.toString());return e},L=function(){for(var e=[Object(o.w)().i18n.t("main.time.year")],n=Number(c()(new Date).format("YYYY")),i=n;i>=n-100;i--)e.push(i.toString());return e},k=function(e){return e?Number(c()(e).format("D")):Object(o.w)().i18n.t("main.time.day")},M=function(e){return e?Number(c()(e).format("M")):Object(o.w)().i18n.t("main.time.month")},Y=function(e){return e?Number(c()(e).format("YYYY")):Object(o.w)().i18n.t("main.time.year")},H=function(e){var n=e.day,t=e.month,o=e.year;return c()().month(parseInt(t)-1).date(parseInt(n)).year(o).format()}}}]);