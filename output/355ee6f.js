(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1086:function(t,e,o){"use strict";o.d(e,"a",(function(){return n.a})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return T}));var n=o(473);var r=o(450),c=o(45);function l(t){return Object(r.createDecorator)((function(e){e.mixins.push({created:function(){!this.content||this.content instanceof t||(this.content=c.a.deserializeObject(this.content,t))}})}))}o(21),o(14),o(20),o(25),o(17),o(26);var d=o(5),y=o(42),f=o(11),v=(o(60),o(8),o(63),o(22),o(143)),O=o.n(v),j=o(18),h=o(145),m=o(102);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=new j.a("LoadPage");function T(t){return function(e,o,n){if("asyncData"===o)return{value:function(e){var o=arguments;return Object(f.a)(regeneratorRuntime.mark((function r(){var c,l,content,d,f,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:void 0,r.prev=1,r.next=4,e.app.$context.preAsyncDataActions(e);case 4:if(l="function"==typeof t?t(e):t,A.log("pageOptions: ",l),A.log("pageOverride: ",c),r.t0=c,r.t0){r.next=12;break}return r.next=11,e.store.dispatch("page/loadPage",l);case 11:r.t0=r.sent;case 12:if(content=r.t0,d={},"function"!=typeof n.value){r.next=20;break}return r.next=17,Promise.resolve(n.value(e,content));case 17:d=r.sent,r.next=24;break;case 20:if("object"!==Object(y.a)(n.value)){r.next=24;break}return r.next=23,Promise.resolve(n.value);case 23:d=r.sent;case 24:if(void 0!==c){r.next=27;break}return r.next=27,e.store.dispatch("updatePageData",content.getPageData());case 27:return r.next=29,e.app.$context.postAsyncDataActions(e);case 29:return r.abrupt("return",w({content:content},d));case 32:if(r.prev=32,r.t1=r.catch(1),A.error("Error encountered in LoadPage: "+r.t1.toString()),!(r.t1 instanceof h.c)){r.next=40;break}return f={name:Object(m.b)(e.route.name),params:e.params},r.abrupt("return",e.redirect(301,e.localePath(r.t1.getRouterArgs(f)),e.query));case 40:if(!(r.t1 instanceof h.b)){r.next=44;break}return r.abrupt("return",e.redirect(r.t1.responseCode,r.t1.path,r.t1.preserveQuery?e.query:{}));case 44:if(!(r.t1 instanceof h.a)){r.next=46;break}return r.abrupt("return",e.error({statusCode:404,message:r.t1.message}));case 46:if(!e.store.getters.isProd){r.next=53;break}return v=r.t1,(O.a.isAxiosError(r.t1)||r.t1 instanceof Error)&&(v=r.t1.message),r.abrupt("return",e.error({statusCode:500,message:v}));case 53:throw r.t1;case 54:case"end":return r.stop()}}),r,null,[[1,32]])})))()}};A.warn("`LoadPage` decorator should only be used on the `asyncData` property.")}}},1093:function(t,e,o){"use strict";o(8),o(13),o(21),o(14),o(20),o(25),o(17),o(26);var n=o(11),r=o(5),c=o(2),l=o(3),d=o(7),y=o(10),f=o(4),v=(o(60),o(22),o(19),o(31),o(247),o(0)),O=o(1069),j=o(24),h=o(102),m=o(57);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(y.a)(this,o)}}var T=function(t){Object(d.a)(o,t);var e=A(o);function o(){var t;return Object(c.a)(this,o),(t=e.apply(this,arguments)).content=null,t}return Object(l.a)(o,[{key:"getSeoTags",value:function(){var t=this.content&&"function"==typeof this.content.getSeoTags?this.content.getSeoTags():{},e=t.url||this.getCanonicalUrl();return w(w({},t),{},{url:e,ogUrl:e,twitterUrl:e})}},{key:"getCanonicalUrl",value:function(){var t,e,o,n=(null===(t=this.$route.meta)||void 0===t?void 0:t.canonicalRoute)||Object(h.b)(this.$route.name),r=this.$route.edition||(null===(o=null===(e=this.content)||void 0===e?void 0:e.meta)||void 0===o?void 0:o.edition);return n?m.a.liveUrl(this.localePath({name:n,params:this.$route.params,edition:r})):null}}]),o}(j.default),k=function(t){Object(d.a)(f,t);var e,o,r,y=A(f);function f(){var t;return Object(c.a)(this,f),(t=y.apply(this,arguments)).content=null,t}return Object(l.a)(f,[{key:"asyncData",value:function(t,content){}},{key:"adUnits",get:function(){var t,e,o;return null===(o=null===(e=null===(t=this.$ads)||void 0===t?void 0:t.adDisplay)||void 0===e?void 0:e.getAdUnits)||void 0===o?void 0:o.call(e,void 0,void 0,!1,this.$el)}},{key:"mounted",value:function(){var t;(null==this?void 0:this.isSeamless)||(null===(t=this.$config.ads.adDisplay)||void 0===t?void 0:t.delayLoad)||this.$ads.adDisplay.loadAds([],{loadAllAds:!0}),this.isSeamless||this.$nuxt.$emit("pageMounted",this)}},{key:"loadAds",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(o=null===(e=this.$ads)||void 0===e?void 0:e.adDisplay)&&void 0!==o){t.next=4;break}t.next=10;break;case 4:return t.t0=o,t.next=7,this.adUnits;case 7:t.t1=t.sent,t.t2={excludeDisabled:!0},t.t0.loadAds.call(t.t0,t.t1,t.t2);case 10:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"removeAds",value:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(o=null===(e=this.$ads)||void 0===e?void 0:e.adDisplay)&&void 0!==o){t.next=4;break}t.next=10;break;case 4:return t.t0=o,t.next=7,this.adUnits;case 7:t.t1=t.sent,t.t2={isDestructive:!0,waitForBidBarrel:!0},t.t0.removeAds.call(t.t0,t.t1,t.t2);case 10:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"trackPageView",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,o,n,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{},!this.content){t.next=8;break}return(n=this.content.getPageData()).tracking=w(w({},n.tracking),e),t.next=6,this.$store.dispatch("updatePageData",n);case 6:null===(o=this.$abtest)||void 0===o||o.executeAbLogic(),this.$tracking.trackPageView(n.tracking,["comscore","tagular"]);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"updateUrl",value:function(){var t,e,path=null===(e=null===(t=this.content)||void 0===t?void 0:t.content)||void 0===e?void 0:e.getPath(this);path&&window.history.replaceState({},null,"".concat(window.location.origin).concat(path).concat(window.location.search))}},{key:"setupPage",value:function(t){var e=this;this.updateUrl(),this.trackPageView(t),this.$scripts.loadScripts().then((function(){e.$config.ads.adDisplay.delayLoad=!1,e.loadAds()}))}},{key:"cleanupPage",value:function(){this.removeAds()}}]),f}(T);Object(v.c)([Object(O.Getter)("page/componentByName"),Object(v.f)("design:type",Function)],k.prototype,"getComponentByName",void 0),Object(v.c)([Object(O.Action)("page/loadComponent"),Object(v.f)("design:type",Function)],k.prototype,"loadComponent",void 0),Object(v.c)([Object(O.Action)("page/loadPage"),Object(v.f)("design:type",Function)],k.prototype,"loadPage",void 0),Object(v.c)([Object(O.Prop)({default:!1}),Object(v.f)("design:type",Boolean)],k.prototype,"isSeamless",void 0),k=Object(v.c)([O.Component],k),e.a=k},1101:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(459);function r(t){var head=new n.c;return t instanceof Function&&t(head),head.buildDecorator()}},1106:function(t,e,o){"use strict";o(8),o(13);var n=o(2),r=o(3),c=o(7),l=o(10),d=o(4),y=(o(14),o(39),o(80),o(22),o(0)),f=o(1),v=(o(109),o(471)),O=o(179),j=o(463),h=(o(48),o(59),o(27),o(31),o(58),o(28),o(68)),m=o(45),P=o(573),w=o(652);function A(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return T(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw r}}}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var k,D,J=function(t){var e=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"serialize",value:function(t){return m.a.serializeObject(t)}},{key:"deserialize",value:function(e){var o,n,r=[],c=A(e);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(l.fetcherName&&void 0!==l.status&&l.errors)r.push(m.a.deserializeObject(l,h.b));else{var d=(null===(o=(l=Object(P.a)(l)).meta)||void 0===o?void 0:o.componentType)||!1,y=Object(w.a)(d);d&&y?r.push(m.a.deserializeObject(l,y)):t===h.a&&h.d.isObjectComponent(l)?r.push(m.a.deserializeObject(l,h.d)):t===h.a&&h.c.isListingComponent(l)?r.push(m.a.deserializeObject(l,h.c)):r.push(m.a.deserializeObject(l,t))}}}catch(t){c.e(t)}finally{c.f()}return r}}]),e}();return e=Object(y.c)([f.JsonConverter],e)};function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var x=function(t){Object(c.a)(o,t);var e=S(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).pageType=null,t.id=null,t.queryParams=null,t.meta=null,t.header=[],t.components=[],t.footer=[],t.debug=null,t.isSeamless=!1,t}return Object(r.a)(o,[{key:"content",get:function(){return null}},{key:"getComponentByName",value:function(t){var component=null;return void 0!==this.components&&(component=this.components.find((function(component){var e;return(null===(e=component.meta)||void 0===e?void 0:e.componentName)===t}))),component||null}},{key:"getPageData",value:function(){var t;return{ads:this.getAdVars(),edition:null===(t=this.meta)||void 0===t?void 0:t.edition,pageType:this.pageType,tracking:this.getTrackingVars()}}}]),o}(o(111).a);Object(y.c)([Object(f.JsonProperty)("pageType",f.Any,!0),Object(y.f)("design:type",String)],x.prototype,"pageType",void 0),Object(y.c)([Object(f.JsonProperty)("id",f.Any,!0),Object(y.f)("design:type",String)],x.prototype,"id",void 0),Object(y.c)([Object(f.JsonProperty)("queryParams",f.Any,!0),Object(y.f)("design:type",Object)],x.prototype,"queryParams",void 0),Object(y.c)([Object(f.JsonProperty)("meta",j.a,!0),Object(y.f)("design:type","function"==typeof(k=void 0!==j.a&&j.a)?k:Object)],x.prototype,"meta",void 0),Object(y.c)([Object(f.JsonProperty)("header",J(O.a),!0),Object(y.f)("design:type",Array)],x.prototype,"header",void 0),Object(y.c)([Object(f.JsonProperty)("components",J(O.a),!0),Object(y.f)("design:type",Array)],x.prototype,"components",void 0),Object(y.c)([Object(f.JsonProperty)("footer",J(O.a),!0),Object(y.f)("design:type",Array)],x.prototype,"footer",void 0),Object(y.c)([Object(f.JsonProperty)("debug",v.a,!0),Object(y.f)("design:type","function"==typeof(D=void 0!==v.a&&v.a)?D:Object)],x.prototype,"debug",void 0),x=Object(y.c)([Object(f.JsonObject)("Core.Page.AbstractPage")],x);var I,R=o(242),C=o(1239),U=o(190);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var B=function(t){Object(c.a)(o,t);var e=$(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).meta=null,t}return Object(r.a)(o,[{key:"getSeoTags",value:function(){var t,e,o,n,r,c,l,d,y,f,v,O,j,h,m,P,w,A,T,k,D,J,S,x,I;return{description:(null===(t=this.meta)||void 0===t?void 0:t.seoMetaDescription)||(null===(e=this.meta)||void 0===e?void 0:e.description),title:(null===(o=this.meta)||void 0===o?void 0:o.titleTag)||(null===(n=this.meta)||void 0===n?void 0:n.title),url:void 0,jsonLd:void 0,postId:(null===(r=this.meta)||void 0===r?void 0:r.id)||void 0,robots:!0===(null===(c=this.meta)||void 0===c?void 0:c.noIndex)?"noindex, follow":"max-image-preview:large",author:void 0,articleAuthor:void 0,ogDescription:(null===(l=this.meta)||void 0===l?void 0:l.seoOgDescription)||(null===(d=this.meta)||void 0===d?void 0:d.seoMetaDescription)||(null===(y=this.meta)||void 0===y?void 0:y.description),ogImage:(null===(f=this.meta)||void 0===f?void 0:f.seoOgImage)||(null===(v=this.meta)||void 0===v?void 0:v.image),ogTitle:(null===(O=this.meta)||void 0===O?void 0:O.seoOgTitle)||(null===(j=this.meta)||void 0===j?void 0:j.titleTag)||(null===(h=this.meta)||void 0===h?void 0:h.title),ogUrl:void 0,twitterCreator:null===(m=this.meta)||void 0===m?void 0:m.seoTwitterCreator,twitterDescription:(null===(P=this.meta)||void 0===P?void 0:P.seoTwitterDescription)||(null===(w=this.meta)||void 0===w?void 0:w.seoMetaDescription)||(null===(A=this.meta)||void 0===A?void 0:A.description),twitterImage:(null===(T=this.meta)||void 0===T?void 0:T.seoTwitterImage)||(null===(k=this.meta)||void 0===k?void 0:k.image),twitterSite:(null===(D=this.meta)||void 0===D?void 0:D.seoTwitterSite)||(null===(J=this.meta)||void 0===J?void 0:J.seoTwitterCreator),twitterTitle:(null===(S=this.meta)||void 0===S?void 0:S.seoTwitterTitle)||(null===(x=this.meta)||void 0===x?void 0:x.titleTag)||(null===(I=this.meta)||void 0===I?void 0:I.title),twitterUrl:void 0}}},{key:"getJsonLdMarkup",value:function(t){return{"@context":"https://schema.org","@type":"WebPage"}}},{key:"getTrackingVars",value:function(){var t,e,o,n,r,c,l,d,y,f,v,O={collectionId:[(null===(t=this.meta)||void 0===t?void 0:t.collections)?null===(e=R.a.getPrimaryCollection(this.meta.collections))||void 0===e?void 0:e.id:""],contentId:this.id,contentType:null===(o=this.meta)||void 0===o?void 0:o.typeName,siteEdition:(null===(n=this.meta)||void 0===n?void 0:n.edition)?this.meta.edition:"",siteSection:(null===(r=this.meta)||void 0===r?void 0:r.section)?this.meta.section:"",tagSlugs:(null===(c=this.meta)||void 0===c?void 0:c.tags)?this.meta.tags.map((function(t){return t.slug})):[""],topicId:(null===(l=this.meta)||void 0===l?void 0:l.topics)?this.meta.topics.map((function(t){return t.id})):[""],topicName:(null===(d=this.meta)||void 0===d?void 0:d.topics)?this.meta.topics.map((function(t){return t.name.toLowerCase()})):[""],topicPaths:(null===(y=this.meta)||void 0===y?void 0:y.topics)?Object(U.f)(null===(f=this.meta)||void 0===f?void 0:f.topics):[""],topicSlugs:(null===(v=this.meta)||void 0===v?void 0:v.topics)?this.meta.topics.map((function(t){return t.slug})):[""]};return O}},{key:"getAdVars",value:function(){return{}}}]),o}(x);Object(y.c)([Object(f.JsonProperty)("meta",C.a,!0),Object(y.f)("design:type","function"==typeof(I=void 0!==C.a&&C.a)?I:Object)],B.prototype,"meta",void 0),B=Object(y.c)([Object(f.JsonObject)("Page")],B);e.a=B},1239:function(t,e,o){"use strict";o(8),o(13);var n,r,c,l,d,y,f,v,O,j=o(3),h=o(2),m=o(7),P=o(10),w=o(4),A=(o(14),o(39),o(0)),T=o(1),k=o(463),D=o(242),J=o(44),S=o(30),x=o(609),I=o(114),R=o(37);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(w.a)(t);if(e){var r=Object(w.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(P.a)(this,o)}}var U=function(t){Object(m.a)(o,t);var e=C(o);function o(){var t;return Object(h.a)(this,o),(t=e.apply(this,arguments)).brand=null,t.collections=[],t.contentType=null,t.datePublished=null,t.dateUpdated=null,t.description=null,t.displayDatePublished=null,t.displayDateUpdated=null,t.id=null,t.image=null,t.noIndex=!1,t.pageType=null,t.publishDate=null,t.section=null,t.seoMetaDescription=null,t.seoOgDescription=null,t.seoOgImage=null,t.seoOgTitle=null,t.seoTwitterCard=null,t.seoTwitterCreator=null,t.seoTwitterDescription=null,t.seoTwitterImage=null,t.seoTwitterImageAlt=null,t.seoOgImageHeight=null,t.seoOgImageWidth=null,t.seoTwitterTitle=null,t.seoTwitterSite=null,t.site=null,t.slug=null,t.suppressAds=!1,t.tags=[],t.title=null,t.titleTag=null,t.topics=[],t.type=null,t.typeName=null,t}return Object(j.a)(o)}(k.a);Object(A.c)([Object(T.JsonProperty)("brand",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"brand",void 0),Object(A.c)([Object(T.JsonProperty)("collections",R.a.array(D.a),!0),Object(A.f)("design:type",Array)],U.prototype,"collections",void 0),Object(A.c)([Object(T.JsonProperty)("contentType",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"contentType",void 0),Object(A.c)([Object(T.JsonProperty)("datePublished",J.a,!0),Object(A.f)("design:type","function"==typeof(n=void 0!==J.a&&J.a)?n:Object)],U.prototype,"datePublished",void 0),Object(A.c)([Object(T.JsonProperty)("dateUpdated",J.a,!0),Object(A.f)("design:type","function"==typeof(r=void 0!==J.a&&J.a)?r:Object)],U.prototype,"dateUpdated",void 0),Object(A.c)([Object(T.JsonProperty)("description",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"description",void 0),Object(A.c)([Object(T.JsonProperty)("displayDatePublished",J.a,!0),Object(A.f)("design:type","function"==typeof(c=void 0!==J.a&&J.a)?c:Object)],U.prototype,"displayDatePublished",void 0),Object(A.c)([Object(T.JsonProperty)("displayDateUpdated",J.a,!0),Object(A.f)("design:type","function"==typeof(l=void 0!==J.a&&J.a)?l:Object)],U.prototype,"displayDateUpdated",void 0),Object(A.c)([Object(T.JsonProperty)("id",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"id",void 0),Object(A.c)([Object(T.JsonProperty)("image",S.a,!0),Object(A.f)("design:type","function"==typeof(d=void 0!==S.a&&S.a)?d:Object)],U.prototype,"image",void 0),Object(A.c)([Object(T.JsonProperty)("noIndex",T.Any,!0),Object(A.f)("design:type",Boolean)],U.prototype,"noIndex",void 0),Object(A.c)([Object(T.JsonProperty)("pageType",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"pageType",void 0),Object(A.c)([Object(T.JsonProperty)("publishDate",J.a,!0),Object(A.f)("design:type","function"==typeof(y=void 0!==J.a&&J.a)?y:Object)],U.prototype,"publishDate",void 0),Object(A.c)([Object(T.JsonProperty)("section",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"section",void 0),Object(A.c)([Object(T.JsonProperty)("seoMetaDescription",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoMetaDescription",void 0),Object(A.c)([Object(T.JsonProperty)("seoOgDescription",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoOgDescription",void 0),Object(A.c)([Object(T.JsonProperty)("seoOgImage",S.a,!0),Object(A.f)("design:type","function"==typeof(f=void 0!==S.a&&S.a)?f:Object)],U.prototype,"seoOgImage",void 0),Object(A.c)([Object(T.JsonProperty)("seoOgTitle",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoOgTitle",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterCard",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoTwitterCard",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterCreator",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoTwitterCreator",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterDescription",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoTwitterDescription",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterImage",T.Any,!0),Object(A.f)("design:type","function"==typeof(v=void 0!==S.a&&S.a)?v:Object)],U.prototype,"seoTwitterImage",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterImageAlt",T.Any,!0),Object(A.f)("design:type","function"==typeof(O=void 0!==S.a&&S.a)?O:Object)],U.prototype,"seoTwitterImageAlt",void 0),Object(A.c)([Object(T.JsonProperty)("seoOgImageHeight",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoOgImageHeight",void 0),Object(A.c)([Object(T.JsonProperty)("seoOgImageWidth",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoOgImageWidth",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterTitle",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoTwitterTitle",void 0),Object(A.c)([Object(T.JsonProperty)("seoTwitterSite",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"seoTwitterSite",void 0),Object(A.c)([Object(T.JsonProperty)("site",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"site",void 0),Object(A.c)([Object(T.JsonProperty)("slug",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"slug",void 0),Object(A.c)([Object(T.JsonProperty)("suppressAds",T.Any,!0),Object(A.f)("design:type",Boolean)],U.prototype,"suppressAds",void 0),Object(A.c)([Object(T.JsonProperty)("tags",R.a.array(x.a),!0),Object(A.f)("design:type",Array)],U.prototype,"tags",void 0),Object(A.c)([Object(T.JsonProperty)("title",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"title",void 0),Object(A.c)([Object(T.JsonProperty)("titleTag",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"titleTag",void 0),Object(A.c)([Object(T.JsonProperty)("topics",R.a.array(I.c),!0),Object(A.f)("design:type",Array)],U.prototype,"topics",void 0),Object(A.c)([Object(T.JsonProperty)("type",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"type",void 0),Object(A.c)([Object(T.JsonProperty)("typeName",T.Any,!0),Object(A.f)("design:type",String)],U.prototype,"typeName",void 0),U=Object(A.c)([Object(T.JsonObject)("Meta")],U),e.a=U}}]);
//# sourceMappingURL=355ee6f.js.map