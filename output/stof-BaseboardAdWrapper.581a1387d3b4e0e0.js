"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{13483:function(e,t,n){n.d(t,{M:function(){return E}});var s=n(59499),i=n(4730),o=n(50308),r=n.n(o),a=n(85893),d=n(67294),l=n(60707),c=n(30695),u=n(38927),g=n(19521),p=n(56947);const v=g.ZP.div.withConfig({displayName:"styles__PubAdWrapper",componentId:"sc-1ro03th-0"})(["min-height:",";",";"],(e=>e.isFilled?"75px":0),(e=>!e.isFilled&&"transition: min-height 0.4s ease-in-out;")),f=g.ZP.p.withConfig({displayName:"styles__SponsoredLogo",componentId:"sc-1ro03th-1"})(["font-size:",";line-height:",";text-align:right;"],p.font.size.text.xsmall,p.font.lineHeight.text);var h=n(16326),b=n(80029),y=n(36852);const m=["adName","assumeAdFilled","showSponsored","onReady"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const E=(0,c.R)({tag:h.Y})((e=>{let{adName:t,assumeAdFilled:n=!0,showSponsored:s=!1,onReady:o=r()}=e,c=(0,i.Z)(e,m);const{0:g,1:p}=(0,d.useState)(!1),{0:h,1:w}=(0,d.useState)(n),{0:E,1:O}=(0,d.useState)(),{0:P,1:j}=(0,d.useState)(),{0:I,1:R}=(0,d.useState)(),{trackEvent:L}=(0,u.rS)();(0,y.p)({slotRenderEnded:e=>{const{isEmpty:n,slot:s,lineItemId:i,creativeId:o}=e;s.getSlotElementId()===t&&(w(!n),O(s.getTargeting("as").find((e=>e.includes(s.getSlotElementId())))),j(i),R(o))},slots:[]});const N=(0,d.useCallback)((e=>{var t,n,s,i,o,r;(null!==e&&void 0!==e&&null!==(t=e.origin)&&void 0!==t&&t.endsWith("safeframe.googlesyndication.com")||null!==e&&void 0!==e&&null!==(n=e.origin)&&void 0!==n&&n.endsWith("target.com"))&&null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&null!==(i=s.lineItemID)&&void 0!==i&&i.includes(`l${null===P||void 0===P?void 0:P.toString()}`)&&null!==e&&void 0!==e&&null!==(o=e.data)&&void 0!==o&&null!==(r=o.lineItemID)&&void 0!==r&&r.includes(`c${null===I||void 0===I?void 0:I.toString()}`)&&L({event:{name:"openNewPage",source:`display ad | ${E} | ${null===P||void 0===P?void 0:P.toString()}`,type:"click"},guest:{eventType:"click"}})}),[I,E,P,L]);return(0,d.useEffect)((()=>{g&&window.googletag.cmd.push((()=>{window.googletag.display(t)}))}),[t,g]),(0,d.useEffect)((()=>(g&&window.addEventListener("message",N),()=>{window.removeEventListener("message",N)})),[N,g]),(0,l.Y)((()=>{var e,n;null!==(e=window.googletag)&&void 0!==e&&e.apiReady&&null!==(n=window.googletag)&&void 0!==n&&n.pubadsReady&&b.I.isSlotReady(t)&&(p(!0),o(!0))}),g?null:100),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{isFilled:h,children:g&&(0,a.jsx)("div",S({"data-test":t,id:t},c))}),g&&s&&h&&(0,a.jsx)(f,{"data-test":"sponsored-text",children:"sponsored"})]})}));E.displayName="PubAd"},16326:function(e,t,n){n.d(t,{Y:function(){return s}});const s="error_boundary_ad_critical_error"},80029:function(e,t,n){n.d(t,{I:function(){return a}});var s=n(59499),i=n(50308),o=n.n(i),r=n(30896);class a{static createNewInstance(){const e=new a;return a.instances.push(e),e}static isSlotReady(e){return a.instances.some((t=>t.isSlotReady(e)))}constructor(){(0,s.Z)(this,"listeners",void 0),(0,s.Z)(this,"slots",void 0),this.listeners={},this.slots={}}addEventListener(e,t){this.listeners[e]=t,a.registeredEvents.includes(e)||(a.registeredEvents.push(e),(0,r.dE)("addEventListener",e,a.createGptEventHandler(e)))}addEventListeners(e){Object.entries(e).forEach((([e,t])=>{e&&t&&this.addEventListener(e,t)}))}addSlot(e,t){this.slots[e]=t}isSlotReady(e){return Object.keys(this.slots).includes(e)}clearListeners(){this.listeners={}}clearSlots(){var e,t;null===(e=window.googletag)||void 0===e||null===(t=e.cmd)||void 0===t||t.push((()=>{window.googletag.destroySlots(Object.values(this.slots))})),this.slots={}}unregister(){const e=a.instances.indexOf(this);-1!==e&&a.instances.splice(e,1)}cleanup(){this.clearListeners(),this.clearSlots(),this.unregister()}}(0,s.Z)(a,"instances",[]),(0,s.Z)(a,"registeredEvents",[]),(0,s.Z)(a,"createGptEventHandler",(e=>t=>{a.instances.forEach((n=>{var s;(null!==(s=n.listeners[e])&&void 0!==s?s:o())(t)}))}))},36852:function(e,t,n){n.d(t,{p:function(){return p}});var s=n(59499),i=n(67294),o=n(26023),r=n(60707),a=n(33483),d=n(38927),l=n(80029),c=n(30896);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=e=>{var t;const{deferAdLoading:n,onScriptLoaded:s,slotOnload:u,slotRenderEnded:p,slotRequested:v,slotResponseReceived:f,slotVisibilityChanged:h,impressionViewable:b,collapseEmptyDivs:y=!0,collapseBeforeAdFetch:m=!1,enableSingleRequest:w=!1,enableVideoAds:S=!1,enableLazyLoad:E=!1,lazyLoadConfig:O={fetchMarginPercent:500,renderMarginPercent:200,mobileScaling:2},disableInitialLoad:P=!1,setRequestNonPersonalizedAds:j=!1,privacySettings:I={restrictDataProcessing:!1},location:R,slots:L=[],targeting:N}=null!==e&&void 0!==e?e:{},{0:A,1:D}=(0,i.useState)(null===(t=window.googletag)||void 0===t?void 0:t.apiReady);(0,r.Y)((()=>{var e;null!==(e=window.googletag)&&void 0!==e&&e.apiReady&&D(!0)}),A?null:100);const x=(0,i.useRef)(void 0),{trackEvent:Z}=(0,d.rS)(),_=(0,i.useCallback)((e=>{const{creativeId:t,lineItemId:n,campaignId:s,size:i}=e,o=(0,c.Y8)(i);t&&n&&s&&o&&Z({guest:{eventType:"adimp"},adImpressions:[{creativeId:null===t||void 0===t?void 0:t.toString(),lineItemId:null===n||void 0===n?void 0:n.toString(),orderId:null===s||void 0===s?void 0:s.toString(),slotSize:o}]})}),[Z]);return(0,a.G)((()=>{if(A&&!n){var e,t,i;x.current=l.I.createNewInstance(),s&&s(),w&&(0,c.dE)("enableSingleRequest"),P&&(0,c.dE)("disableInitialLoad"),y&&(0,c.dE)("collapseEmptyDivs",m),E&&!y&&(0,c.dE)("enableLazyLoad",O);const n=g(g({},I),{},{restrictDataProcessing:null===(e=(0,o.e3)())||void 0===e?void 0:e.optOutSale});(0,c.dE)("setPrivacySettings",n),n.restrictDataProcessing||j?(0,c.dE)("setRequestNonPersonalizedAds",1):R&&(0,c.dE)("setLocation",R),N&&Object.entries(N).forEach((([e,t])=>{(0,c.dE)("setTargeting",e,t)})),S&&(0,c.dE)("enableVideoAds"),null===(t=x.current)||void 0===t||t.addEventListeners({slotOnload:u,slotRenderEnded:null!==p&&void 0!==p?p:_,slotRequested:v,slotResponseReceived:f,slotVisibilityChanged:h,impressionViewable:b}),L.forEach((({adUnitPath:e,sizeMapping:t,adName:n,targeting:s})=>{var i;const{slotSizeArray:o,sizeMappingArray:r}=(0,c.Mg)(t);null===(i=window.googletag.cmd)||void 0===i||i.push((()=>{var t;const i=window.googletag.defineSlot(e,o,n);null===(t=x.current)||void 0===t||t.addSlot(n,i),i.defineSizeMapping(r).addService(window.googletag.pubads()),s&&i.updateTargetingFromMap(s)}))})),null===(i=window.googletag.cmd)||void 0===i||i.push(googletag.enableServices)}return()=>{var e;null===(e=x.current)||void 0===e||e.cleanup(),x.current=void 0}}),[n,A]),[window.googletag,x]}},17718:function(e,t,n){n.r(t),n.d(t,{BaseboardAdWrapper:function(){return h}});var s=n(19525),i=n(85893),o=n(67294),r=n(23609),a=n(30695),d=n(19521);const l=(0,d.F4)(["0%{opacity:0;}100%{opacity:1;}"]),c=d.ZP.div.withConfig({displayName:"styles__PubAdDivContainer",componentId:"sc-lt6fsx-0"})(["animation:"," 0.6s;",""],l,(({transition:e})=>e&&"\n    transform: translate(0, 100%);\n    transition: transform 1s;\n  "));var u=n(13483),g=n(16326);const p="baseBoardShown",v=(0,a.R)({tag:g.Y})((()=>{const{0:e,1:t}=(0,o.useState)(!1),{0:n,1:s}=(0,o.useState)(!0),{0:a,1:d}=(0,o.useState)(!1),{0:l,1:g}=(0,o.useState)(!0);return(0,o.useEffect)((()=>{(async()=>{await r.ZP.get(p)||(s(!1),await r.ZP.set(p,"true",{expiry:Date.now()+108e5}))})()}),[]),(0,o.useEffect)((()=>{if(!e)return;const t=setTimeout((()=>{d(!0)}),4e3),n=setTimeout((()=>{g(!1),d(!1)}),8e3);return()=>{clearTimeout(t),clearTimeout(n)}}),[e]),n?null:(0,i.jsx)(c,{className:"h-bg-white baseboard-fade-in "+(l?"h-position-fixed-bottom":""),"data-test":"@web/baseboardAd",transition:a,children:(0,i.jsx)(u.M,{adName:"ss",onReady:t,showSponsored:!0})})}));v.displayName="BaseboardAd";var f=n(11163);const h=()=>(0,f.useRouter)().asPath.length>1?(0,s.Z)(v,{}):null;h.displayName="BaseboardAdWrapper"}}]);