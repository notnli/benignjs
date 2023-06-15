(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1034:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(5),o=r(11),l=r(10),d=r(995),c=new l.a("observerDirective");class v{constructor(){this.refreshOnUpdate=!1}bind(e,t){var r=this;return Object(n.a)((function*(){var n,l,v,h,f,O;yield o.default.nextTick(),r.refreshOnUpdate="undefined"!==(null===(n=null==t?void 0:t.value)||void 0===n?void 0:n.refreshOnUpdate)&&(null===(l=null==t?void 0:t.value)||void 0===l?void 0:l.refreshOnUpdate),r.observer=new d.a({data:null===(v=null==t?void 0:t.value)||void 0===v?void 0:v.data,rootMargin:(null===(h=null==t?void 0:t.value)||void 0===h?void 0:h.rootMargin)||"0px 0px -100% 0px",el:e,threshold:(null===(f=null==t?void 0:t.value)||void 0===f?void 0:f.threshold)||0,singleIntersection:(null===(O=null==t?void 0:t.value)||void 0===O?void 0:O.singleIntersection)||!1},(data=>{var e;c.log(data);var r=null===(e=null==t?void 0:t.value)||void 0===e?void 0:e.handler;r?r(data):c.warn("No handler specified on Intersection Observer directive")}))}))()}update(){this.observer&&this.refreshOnUpdate&&this.observer.refresh()}componentUpdated(){this.observer&&this.refreshOnUpdate&&this.observer.refresh()}unbind(){this.observer&&this.observer.destroy()}}},1932:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(6),r(7),r(20),r(0)),l=r(989),d=r(40),c=r(46),v=r(30),h=r(70),f=class extends h.a{constructor(e){super(e),this.services=["tagular"]}get defaults(){return{"@type":"core.InfinitePageScrolled.v1",isInfiniteScroll:!0}}};f=Object(o.c)([Object(d.a)(v.a.Transient),Object(o.g)(0,c.a),Object(o.f)("design:paramtypes",[Object])],f);var O=r(4),m=r(993),P=r(1034);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=new(r(10).a)("SeamlessTriggers"),$=class extends l.Vue{constructor(){super(...arguments),this.requested=!1}get config(){return this.$seamless.config}get requestObserverOptions(){var e,t;return y({handler:this.requestPage,data:{index:this.index}},(null===(t=null===(e=this.config)||void 0===e?void 0:e.intersectionObservers)||void 0===t?void 0:t.request)||{})}get enterObserverOptions(){var e,t;return y({handler:this.enterPage,data:{index:this.index}},(null===(t=null===(e=this.config)||void 0===e?void 0:e.intersectionObservers)||void 0===t?void 0:t.enter)||{})}requestPage(e){var{data:data,direction:t}=e;if("down"===t&&!this.requested){j.log("requestPage",t,data);try{this.$emit("seamless-insert-page",data.index,this.$seamless.requestPage({data:data,direction:t})),this.requested=!0}catch(e){j.error(e)}}}enterPage(e){var{data:data,direction:t}=e;j.log("enterPage",t,data),this.$emit("seamless-enter-page",{data:data,direction:t})}};Object(o.c)([Object(l.Prop)({default:!1,required:!0}),Object(o.f)("design:type",Number)],$.prototype,"index",void 0);var w=$=Object(o.c)([l.Component,Object(m.a)("intersection-observer",P.a)],$),S=r(137),_=Object(S.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-seamlessTriggers"},[t("div",{directives:[{name:"intersection-observer",rawName:"v-intersection-observer",value:e.requestObserverOptions,expression:"requestObserverOptions"}]}),e._v(" "),t("div",{directives:[{name:"intersection-observer",rawName:"v-intersection-observer",value:e.enterObserverOptions,expression:"enterObserverOptions"}]})])}),[],!1,null,null,null).exports,k=r(74),I=r(1212),T=class extends l.Vue{constructor(){super(...arguments),this.pages=[],this.currentParentPage=null,this.listing=null,this.pageRequestPromises=[],this.loading=!1}getPages(){var e,t=(null===(e=this.$refs)||void 0===e?void 0:e.pages)?this.$refs.pages:[];return[this.currentParentPage,...t]}getPageByIndex(e){var t;return(null===(t=this.getPages())||void 0===t?void 0:t[e])||null}routeChange(){this.cleanup()}beforeDestroy(){this.cleanup(),this.$nuxt.$off("pageMounted")}beforeMount(){this.$nuxt.$on("pageMounted",(e=>{this.currentParentPage=e,this.initializeSeamless()}))}initializeSeamless(){var e=this;return Object(n.a)((function*(){var t,r;e.$services.isFeatureEnabled("seamless")?(e.$seamless.createSeamlessMeta(e.$meta()),e.listing=null===(r=yield e.$seamless.requestSeamlessListing(null===(t=e.currentParentPage)||void 0===t?void 0:t.content))||void 0===r?void 0:r.items):k.a.warn("Seamless is disabled")}))()}enterPage(e){var t=this;return Object(n.a)((function*(){var{data:data,direction:r}=e;k.a.log("waiting for page to be requested and inserted");try{yield t.pageRequestPromises[data.index]}catch(e){return void k.a.error(e)}k.a.log("enterPage",data,r);var n="down"===r?data.index+1:data.index,o=t.getPageByIndex(n),l="down"===r?data.index-1:data.index+1,d=t.getPageByIndex(l);k.a.log("previousPage",d),d&&d.removeAds(),t.$seamless.enterPage(o,d,{data:data,direction:r}),t.$nuxt.$emit("seamless-enter",o)}))()}preInsertPage(e,t){this.loading=!0;try{this.pageRequestPromises[e]=new Promise(((r,n)=>{t.then((t=>{var n;if(!(null===(n=null==t?void 0:t.content)||void 0===n?void 0:n.content))throw new Error("no content found on page");this.insertPage(t.content,e,t.pageTypeConfig).then(r),this.loading=!1}))}))}catch(e){k.a.error(e),this.loading=!1}}insertPage(content,e,t){var r=this;return Object(n.a)((function*(){var component=yield t.component();component=component.extend({data:()=>({content:content}),beforeCreate(){try{this.$options.asyncData(this.$nuxt.context,content)}catch(e){k.a.error("error calling 'asyncData' for page with slug: '".concat(content.id,"'"),e)}}}),r.$config.ads.adDisplay.delayLoad=!0,r.$nuxt.$meta().pause(),r.pages.push(component),yield r.$nextTick();try{r.$refs.pages[e]?k.a.log("inserted page: '".concat(content.pageType,"' with slug: '").concat(content.id,"'")):(r.pages.pop(),k.a.warn("could not find a reference to a page at index ".concat(e)))}catch(e){k.a.error("error getting page reference for slug: '".concat(content.id,"'"),e)}}))()}trackScroll(e,t){var r,n,o,l,d;if(this.$services.isFeatureEnabled("seamless")){k.a.log("Firing Cohesion scroll event",e,null===(r=null==t?void 0:t.data)||void 0===r?void 0:r.index),this.$track(f).with({scrollDistance:e,pageIndex:null===(n=null==t?void 0:t.data)||void 0===n?void 0:n.index}).fire();var content=null===(d=null===(l=this.getPageByIndex(null===(o=null==t?void 0:t.data)||void 0===o?void 0:o.index))||void 0===l?void 0:l.content)||void 0===d?void 0:d.content;this.$nuxt.$emit("track-scroll",e,content)}else k.a.log("Not firing scroll events, seamless is disabled")}cleanup(){this.$config.ads.adDisplay.delayLoad=!1,this.pages=[],this.pageRequestPromises=[],this.listing=null,this.$store.commit("page/clearSeamless"),this.$nuxt.$meta().resume()}};Object(o.c)([Object(l.Watch)("$route"),Object(o.f)("design:type",Function),Object(o.f)("design:paramtypes",[]),Object(o.f)("design:returntype",void 0)],T.prototype,"routeChange",null);var D=T=Object(o.c)([Object(l.Component)({components:{SeamlessTriggers:_,TrackScroll:I.a}})],T),C=Object(S.a)(D,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-seamlessListing"},[t("TrackScroll",{attrs:{"tracking-data":{index:0}},on:{"scroll-change":e.trackScroll}},[e._t("default")],2),e._v(" "),e.listing?[t("SeamlessTriggers",{attrs:{index:0},on:{"seamless-insert-page":e.preInsertPage,"seamless-enter-page":e.enterPage}}),e._v(" "),e._l(e.pages,(function(r,n){return[t("TrackScroll",{key:r.slug,attrs:{"tracking-data":{index:n+1}},on:{"scroll-change":e.trackScroll}},[t(r,{ref:"pages",refInFor:!0,tag:"component",attrs:{"is-seamless":!0}})],1),e._v(" "),n<e.listing.length-1?t("SeamlessTriggers",{key:r.slug,attrs:{index:n+1},on:{"seamless-insert-page":e.preInsertPage,"seamless-enter-page":e.enterPage}}):e._e()]}))]:e._e(),e._v(" "),e.loading?e._t("loader"):e._e()],2)}),[],!1,null,null,null);t.default=C.exports}}]);
//# sourceMappingURL=b96a252.modern.js.map