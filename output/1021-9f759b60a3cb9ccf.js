"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1021,1119],{35593:function(e,t,o){o.r(t),o.d(t,{AddToCartButtonForProductContext:function(){return p}});var n=o(59499),r=o(85893),i=o(67294),l=o(89293),d=o(81982),a=o(71942),c=o(89175);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const p=e=>{const t=(0,l.Ao)((e=>e)),o=(0,l.ct)((e=>e)),{customGiftCardAmount:n}=(0,c.S)(),s="Custom value"===n?d.TX.DISABLE_WITH_CORRECT_BUTTON_TYPE:e.overrideBehavior,p=(0,l.MN)(),m=null!==p&&void 0!==p?p:null===t||void 0===t?void 0:t.tcin,v=(0,i.useMemo)((()=>u(u({},o),{},{children:void 0,parent:void 0})),[o]),g=(0,i.useMemo)((()=>u(u({},t),{},{parent:v,tcin:m})),[t,v,m]);return m?(0,r.jsx)(a.a,u(u({childOrStandaloneProduct:g,tcin:m},e),{},{overrideBehavior:s})):null};p.displayName="AddToCartButtonForProductContext"},50975:function(e,t,o){o.d(t,{q:function(){return p}});var n=o(59499),r=o(69992),i=o(42234),l=o(62193),d=o(18409);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const s="@web/domain-product/get-guest-specific-recommendations-placement",{useQuery:u}=(0,r.J)({name:s,keyFn:e=>(void 0!==e.channel||void 0!==e.placement_id||void 0!==e.page||void 0!==e.visitor_id||void 0!==e.member_id)&&[s,e],queryFn:async e=>{const t=await(0,i.W)(),{data:o,ok:n,statusText:r}=await(0,d.r)({requestParams:c({effective_date:t},e)});var l;if(n)return null!==(l=null===o||void 0===o?void 0:o.data)&&void 0!==l?l:null;throw new Error(`${r}`)}}),p=(0,l.p)(u)},18409:function(e,t,o){o.d(t,{r:function(){return a}});var n=o(59499),r=o(95052),i=o(47269),l=o(44350);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}const a=e=>{const{fetchOptions:t,requestParams:o}=null!==e&&void 0!==e?e:{},{channel:a,placement_id:c,page:s,visitor_id:u,pricing_store_id:p,member_id:m,category_id:v,tcins:g,purchasable_store_ids:f,exclusions:h,offer_id:_,keyword:y,include_sponsored_recommendations:b,effective_date:j,fulfillment_types:P,brand_ids:O,resolve_to_first_variation_child:x,slingshot_component_id:k,platform:w,facet_ids:T}=null!==o&&void 0!==o?o:{},{apiKey:C,baseUrl:I,apis:{product:N}}=(0,l.config)().services.redskyAggregations;if(!a||!c||!s||!u)throw new Error("Required parameters not defined for general recommendations placement query");const E={category_id:v,channel:a,effective_date:j,include_sponsored_recommendations:b,key:C,keyword:y,member_id:m,offer_id:_,page:s,placement_id:c,pricing_store_id:p,purchasable_store_ids:f,exclusions:h,tcins:g,visitor_id:u,fulfillment_types:P,brand_ids:O,resolve_to_first_variation_child:x,slingshot_component_id:k,platform:w,facet_ids:T},D=i.Z.buildURLWithParams(new URL(N.endpointPaths.generalRecommendationsPlacementV1,I),E);return(0,r.G)(D,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({partialErrorTag:"get_general_recommendations_placement_partial_api_error",errorTag:"get_general_recommendations_placement_api_error",timerTag:"get_general_recommendations_placement_api_call"},t))}},92076:function(e,t,o){o.d(t,{Dm:function(){return a},VB:function(){return i},Wk:function(){return c},YE:function(){return d},fr:function(){return r},k2:function(){return l},t_:function(){return n}});const n=e=>null===e||void 0===e?void 0:e.recommended_products,r=e=>null===e||void 0===e?void 0:e.recommended_products,i=e=>null===e||void 0===e?void 0:e.products,l=e=>null===e||void 0===e?void 0:e.strategy_description,d=e=>null===e||void 0===e?void 0:e.strategy_name,a=e=>null===e||void 0===e?void 0:e.strategy_id,c=e=>{var t,o;const n=null!==(t=null===e||void 0===e?void 0:e.products)&&void 0!==t?t:[];return{guest:{eventType:"recommendations"},products:null===n||void 0===n?void 0:n.map((e=>{var t;return{placementType:"recommendations",tcin:null!==(t=null===e||void 0===e?void 0:e.tcin)&&void 0!==t?t:""}})),recommendations:{docType:null!==(o=null===e||void 0===e?void 0:e.doctype)&&void 0!==o?o:"",placementId:null===e||void 0===e?void 0:e.strategy_id,strategyDescription:null===e||void 0===e?void 0:e.strategy_description,strategyId:null===e||void 0===e?void 0:e.strategy_id,strategyName:null===e||void 0===e?void 0:e.strategy_name,type:"product"}}}},69390:function(e,t,o){o.d(t,{Ql:function(){return g}});var n=o(59499),r=o(44350),i=o(69992),l=o(95052),d=o(47269),a=o(42234),c=o(62193),s=o(56276);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}const p="@web/domain-promotions/get-recommended-promotions-v1",m=["page","placement_id","pricing_store_id","visitor_id"],{useQuery:v}=(0,i.J)({name:p,keyFn:e=>(m.forEach((t=>{if(!e[t])throw new Error(`Required \`${t}\` was missing from query: \`${p}\``)})),[p,e]),queryFn:async(e,t)=>{var o;const i=await(0,a.W)(),{apiKey:c,apis:{promotions:s},baseUrl:p}=(0,r.config)().services.redskyAggregations,{barcode_id:m,category_id:v,channel:g="WEB",fulfillment_types:f,loyalty_id:h,member_id:_,offer_id:y,page:b,placement_id:j,plan_id:P,pricing_store_id:O,purchasable_store_ids:x,slingshot_component_id:k,tcins:w,visitor_id:T,page_token:C}=null!==e&&void 0!==e?e:{},I={barcode_id:m,category_id:v,channel:g,effective_date:i,fulfillment_types:f,loyalty_id:h,member_id:_,offer_id:y,page:b,placement_id:j,plan_id:P,pricing_store_id:O,purchasable_store_ids:x,slingshot_component_id:k,tcins:w,visitor_id:T,page_token:C,key:c},N=d.Z.buildURLWithParams(new URL(s.endpointPaths.getRecommendedPromotionsV1,p),I),{data:E,ok:D,statusText:S}=await(0,l.G)(N,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({partialErrorTag:"get_recommended_promotions_v1_error_partial",errorTag:"get_recommended_promotions_v1_error",timerTag:"get_recommended_promotions_v1_call"},t));if(D)return null!==(o=null===E||void 0===E?void 0:E.data)&&void 0!==o?o:null;throw new Error(`${S}`)},defaultOptions:{staleTime:s.e}}),g=(0,c.p)(v)},39271:function(e,t,o){o.d(t,{F5:function(){return n},hc:function(){return r}});const n=e=>null===e||void 0===e?void 0:e.promotion_id,r=e=>null===e||void 0===e?void 0:e.image_url},83047:function(e,t,o){o.d(t,{B6:function(){return i},CV:function(){return a},LA:function(){return d},NT:function(){return c},cF:function(){return l},pA:function(){return r},yl:function(){return n}});const n=e=>null===e||void 0===e?void 0:e.recommended_promotions,r=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.strategy_description},i=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.placement_id},l=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.doctype},d=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.strategy_id},a=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.strategy_name},c=e=>{var t;return null===e||void 0===e||null===(t=e.recommended_promotions)||void 0===t?void 0:t.promotions}},71021:function(e,t,o){o.r(t),o.d(t,{PersonalizationCarousel:function(){return Le}});var n=o(59499),r=o(85893),i=o(238),l=o(96026),d=o.n(l),a=o(41609),c=o.n(a),s=o(67294),u=o(17619),p=o(57159),m=o(87389),v=o(38927),g=o(50975),f=o(92076),h=o(89293),_=o(98373),y=o(80121),b=o(67300),j=o(11163),P=o(36199),O=o(88808),x=o(33510);function k(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}const w=e=>function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?k(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({guest:{eventType:"recommendations"}},(e=>{if(!e)return{};const{category_id:t,doctype:o,placement_id:n,strategy_description:r,strategy_id:i,strategy_name:l,products:d=[]}=e;return{recommendations:{categoryId:t,docType:o,placementId:n,strategyDescription:r,strategyId:i,strategyName:l,type:"product"},products:d.map((({tcin:e})=>({placementType:"recommendations",tcin:e})))}})(e));var T=o(88762);var C=o(28794),I=o(53726),N=o(29373),E=o(29791),D=o(35593),S=o(81982),A=o(72604),F=o(44350),B=o(77041),R=o(36786),z=o(69516),Z=o(30695),$=o(49852),L=o(57484),W=o(85702);function M(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function H(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?M(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const q=({product:e,handleAddToCartClick:t,handleAddToRegistryClick:o,handleItemClick:n,useBorder:i,callToAction:l,index:d,trackingPayload:a})=>{const{tcin:c}=e,u="add_to_cart"===l&&(0,F.flags)("PRZ_ITEM_CAROUSEL_ADD_TO_CART_ENABLED"),p="add_to_registry"===l,m=(0,h.ct)(N.Mw),v=(0,h.ct)(N.jz),g=(0,E.T)(),f=(0,B.u)(),_=(0,s.useMemo)((()=>({recClick:H({position:d,productId:c,type:"product"},a)})),[d,c,a]),y=(0,s.useCallback)((e=>H(H({},e),{},{lnk:H(H({},e.lnk),{},{recClick:H(H({},a),{},{position:d,productId:c})})})),[d,c,a]);return(0,r.jsxs)(W.a4,{"data-test":`item-card-${c}`,useBorder:i,children:[(0,r.jsxs)(C.r,{"data-index":c,"data-test":"item-link",href:m,onClick:n,style:{color:"#333",flex:"1 0 auto",width:"100%"},underline:"invert",children:[(0,r.jsx)(W.Vt,{alt:g,src:v}),(0,r.jsxs)(W.Mv,{children:[(0,r.jsx)($.S,{showPdpPromoMessage:!0,textAlignment:"left"}),(0,r.jsx)(I.k,{className:"h-text-md h-hidden-md-up h-margin-t-tiny","data-test":"product-title-sm",lines:3,children:g}),(0,r.jsx)(I.k,{className:"h-text-md h-hidden-sm-down h-margin-t-tiny","data-test":"product-title-md-lg",lines:2,children:g})]})]}),p?(0,r.jsx)(W.W4,{onClick:o,children:(0,r.jsx)(L.E,{buttonSize:"sm",isInPrzCarousel:!0,lnkData:_,showPlpVersionButton:!0})}):u?(0,r.jsx)(W.W4,{onClick:t,children:(0,r.jsx)(D.AddToCartButtonForProductContext,{"aria-label":`Add ${g} to Cart`,handleOverridingOrAddingTrackingFieldsToAddToCartSuccess:y,isFullWidth:!0,overrideBehavior:S.TX.ENABLE_CHOOSE_OPTIONS_ONLY_MODE,placementType:A.bo.SlingshotCarousel,size:"sm"})}):f?(0,r.jsx)(W.W4,{children:(0,r.jsx)(R.M,{placement:z.d7.PLP_PRZ})}):null]})};q.displayName="ProductsTile";var V=(0,Z.R)({tag:"error_boundary_prz_carousel_products_tile"})(q),U=o(66069),Y=o(56947);const G="@web/SlingshotComponents/ProductsCarousel";Y.colors.palette.gray.darkest,Y.colors.palette.white;var X=o(58979),K=o(19521);const J=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__PlaceholderWrapper",componentId:"sc-f6s8vj-0"})(["margin:",";width:calc(100% - ",");min-width:110px;"],Y.space.generic.x1,Y.space.generic.x2),Q=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__ImagePlaceholderWrapper",componentId:"sc-f6s8vj-1"})(["width:100%;min-width:117px;"]),ee=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__ImagePlaceholder",componentId:"sc-f6s8vj-2"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;padding-bottom:100%;background:#c4c4c4;}"]),te=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__TitlePlaceholder",componentId:"sc-f6s8vj-3"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:50%;height:1em;background:",";margin-top:0.25em;margin-bottom:0.4em;}"],Y.colors.palette.gray.darkest),oe=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__TextPlaceholder",componentId:"sc-f6s8vj-4"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:90%;height:1em;background:#c4c4c4;margin-bottom:0.25em;}&::after{content:' ';display:block;width:80%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}"]),ne=K.ZP.div.withConfig({displayName:"ProductsTilePlaceholder__BottomTextPlaceholder",componentId:"sc-f6s8vj-5"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:70%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}"]);function re({useBorder:e}){return(0,r.jsxs)(W.a4,{"data-test":"@web/SiteTopOfFunnel/ProductsTilePlaceholder",useBorder:e,children:[(0,r.jsx)(Q,{children:(0,r.jsx)(ee,{})}),(0,r.jsxs)(J,{children:[(0,r.jsx)(te,{}),(0,r.jsx)(oe,{}),(0,r.jsx)(ne,{})]})]})}re.displayName="ProductsTilePlaceholder";var ie=o(81316),le=o(69686);const de=(0,F.flags)("CONTENT_TRACKING_INTERACTIONS_ON_FIREFLY_NORTH_STAR_ENABLED"),ae=(e,t,o,n)=>({url:n?"https://api.target.com/web_analytics/v1":"https://api.target.com/web_analytics/v3",apiKey:"9f36aeafbe60771e321a7cc95a78140772ab3e96",event:e,links:de?{array:[{rel:{string:null===o||void 0===o?void 0:o.relationship},href:null!==o&&void 0!==o&&o.xApiId?{string:`/event/${o.xApiId}`}:void 0}]}:void 0,lnk:{contentClick:null,listClick:null,navClick:null,recClick:null},guest:t});function ce(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function se(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ce(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const ue=e=>"standard"===e?"default":e;function pe({content:e,metadata:t,options:o,order:n}){var i,l,a,k,C;const{background_color:I,endcap:N,margin_bottom:E,text_color:D,custom_headline:S}=null!==e&&void 0!==e?e:{},{fullWidth:A=!1}=null!==o&&void 0!==o?o:{},F=null!==(i=null!==(l=null===N||void 0===N?void 0:N.background_color)&&void 0!==l?l:I)&&void 0!==i?i:"",B=null!==(a=null!==D&&void 0!==D?D:null===N||void 0===N?void 0:N.text_color)&&void 0!==a?a:"",R=(0,v.rS)(),{asPath:z}=(0,j.useRouter)(),Z=(0,b.ew)(z),$=!I||"white"===I||"#FFFFFF"===I,{screenMd:L}=(0,u.l)(),W=(0,P.X)(),M=(0,O.Y)(z),H=(0,x.Y)()((e=>{var t;return null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t["x-api-id"]})),q="/c/0cb2f"===Z,[Y,K]=(0,g.q)({placement_id:null===e||void 0===e?void 0:e.placement_id,category_id:null===e||void 0===e?void 0:e.category_id,brand_ids:null===e||void 0===e?void 0:e.brand_ids,offer_id:null===e||void 0===e?void 0:e.offer_id,fulfillment_types:null===e||void 0===e?void 0:e.fulfillment_types,slingshot_component_id:null===t||void 0===t||null===(k=t.components)||void 0===k||null===(C=k[0])||void 0===C?void 0:C.id,resolve_to_first_variation_child:q,facet_ids:null===e||void 0===e?void 0:e.facet_ids}),J=K.isIdle||K.isFetching||K.isLoading,Q=Y(f.fr),ee=M?null!==S&&void 0!==S?S:"Headline placeholder":J?void 0:null!==S&&void 0!==S?S:"Headline placeholder",te=M?null!==S&&void 0!==S?S:"Headline placeholder":J?(0,r.jsx)("span",{children:"\xa0"}):null!==S&&void 0!==S?S:"Headline placeholder";(0,s.useEffect)((()=>{Q&&(R&&R.trackEvent(w(Q)),R&&R.trackEvent((e=>{var t;const o=null===e||void 0===e||null===(t=e.products)||void 0===t?void 0:t.filter((e=>"sponsored_ad"in e));return o.length<=0?{}:{guest:{eventType:"adimp"},adImpressions:null===o||void 0===o?void 0:o.map((e=>({creativeId:e.sponsored_ad?e.sponsored_ad.impression_id:"",lineItemId:e.tcin,orderId:"",slotSize:"",xApiId:"",sponsor:{name:e.sponsored_ad?e.sponsored_ad.ad_source:""}})))}})(Q)))}),[Q,R]);const oe=(0,f.VB)(Q),ne=(0,f.k2)(Q),de=(0,f.Dm)(Q),ce=(0,f.YE)(Q),pe=((e=[])=>e.map((e=>{const t=(0,T.hg)(e);return{tcin:t,sponsoredTrackingData:(0,_.TV)(e),id:t}})))(oe),me={strategyId:de,strategyName:ce},ve=(0,h.Ao)(_.$y),ge=(0,s.useCallback)(((o,r)=>i=>{const l=((e,t)=>{var o,n,r;const i=null!==(o=null===e||void 0===e||null===(n=e.components)||void 0===n?void 0:n[0])&&void 0!==o?o:{};return{name:null!==(r=null===i||void 0===i?void 0:i.title)&&void 0!==r?r:null===i||void 0===i?void 0:i.id,position:String(t),component:null!==i&&void 0!==i&&i.title?`${null===i||void 0===i?void 0:i.id} || ${null===i||void 0===i?void 0:i.title}`:null===i||void 0===i?void 0:i.id,componentType:null===i||void 0===i?void 0:i.type_name,contentType:null===i||void 0===i?void 0:i.content_type}})(t,n);ve?(R.trackEvent(((e,t)=>{const o=t.currentTarget?t.currentTarget.dataset.index:"",n=((e,t)=>{if(null!=t)return e[t]})(e,Number(o));if(null!==n&&void 0!==n&&n.sponsoredTrackingData){const{ad_source:e,click_id:t,click_token:o}=n.sponsoredTrackingData;return{customInteraction:{value:`${t}|${o}`},products:[{tcin:n.tcin,sponsor:{name:e}}],guest:{eventType:"customInteraction"}}}return{}})(pe,i)),R.trackEvent({event:{name:"openNewPage",source:`product ad | ${null===e||void 0===e?void 0:e.placement_id} | ${o}`,type:"click"},guest:{eventType:"click"},products:[{tcin:r}]})):(0,v.OK)({recClick:{position:o,productId:r,strategyId:de,strategyName:ce,type:"product"},contentClick:l})}),[null===e||void 0===e?void 0:e.placement_id,ve,de,ce,R,pe,t,n]),fe=(0,s.useCallback)((e=>{var o,n;const r=e.target===e.currentTarget,i=e.currentTarget.contains(e.target);!(r||i)||R.trackEvent(ae({name:"addToRegistry",source:null===t||void 0===t||null===(o=t.components)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.id,type:"click"},{eventType:"click"},{xApiId:H,relationship:"components"},!0))}),[t,R,H]),he=(0,s.useCallback)((e=>{var o,n;const r=e.target===e.currentTarget,i=e.currentTarget.contains(e.target);!(r||i)||R.trackEvent(ae({name:"addToCart",source:null===t||void 0===t||null===(o=t.components)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.id,type:"click"},{eventType:"click"},{xApiId:H,relationship:"components"}))}),[t,R,H]),_e=!(null===e||void 0===e||!e.placement_id)&&!(null===oe||void 0===oe||!oe.length),ye=c()(N)?null:(0,r.jsx)(X.e,se(se({},N),{},{background_color:F,headline:ne||(W?ee:""),text_color:B})),be=L?ye:null,je=L?null:ye,Pe=d()(10).map((e=>(0,r.jsx)(le.P,{},e))),Oe=d()(10).map((e=>(0,r.jsx)(re,{useBorder:$},e))),xe=N?null:(0,r.jsx)(U.J,{background_color:F||I,className:"l-container l-container-standard h-padding-a-x2",text_color:B,children:(0,r.jsx)(p.X,{className:"h-margin-b-none h-margin-t-x2",level:2,size:1,style:{color:"inherit"},children:ne||(W?te:J?(0,r.jsx)("span",{children:"\xa0"}):"")})});return W?(0,r.jsxs)("div",{"aria-label":"Carousel",className:"l-container "+(A?"":"l-container-standard"),"data-test":G,role:"region",children:[xe,(0,r.jsxs)(U.T,{backgroundColor:null===e||void 0===e?void 0:e.background_color,className:""+(E?`h-margin-b-${ue(E)}`:""),"data-test":"filmstrip-products-carousel",extraPadding:!(null===e||void 0===e||!e.background_color)&&!be&&L,children:[je,(0,r.jsxs)(m.T,{children:[be,c()(oe)?J?M?Oe:Pe:Oe:null===oe||void 0===oe?void 0:oe.map(((t,o)=>{var n;return(0,r.jsx)(y.d,{debugName:"PersonalizationCarouselWithProducts",queryResult:K,value:se({},t),children:(0,r.jsx)(V,{callToAction:null===e||void 0===e||null===(n=e.container)||void 0===n?void 0:n.callToAction,handleAddToCartClick:he,handleAddToRegistryClick:fe,handleItemClick:ge(o,null===t||void 0===t?void 0:t.tcin),index:o,product:t,trackingPayload:me,useBorder:$})},`product-${o}`)}))]})]})]}):(0,r.jsx)(ie.p,{controlled:!0,noAnimation:J||_e,open:J||_e,variant:"bare",children:(0,r.jsxs)("div",{"aria-label":"Carousel",className:"l-container "+(A?"":"l-container-standard"),"data-test":G,role:"region",children:[xe,(0,r.jsxs)(U.T,{backgroundColor:null===e||void 0===e?void 0:e.background_color,className:""+(E?`h-margin-b-${ue(E)}`:""),"data-test":"filmstrip-products-carousel",extraPadding:!(null===e||void 0===e||!e.background_color)&&!be&&L,children:[je,(0,r.jsxs)(m.T,{children:[be,_e?oe.map(((t,o)=>{var n;return(0,r.jsx)(y.d,{debugName:"PersonalizationCarouselWithProducts",queryResult:K,value:se({},t),children:(0,r.jsx)(V,{callToAction:null===e||void 0===e||null===(n=e.container)||void 0===n?void 0:n.callToAction,handleAddToCartClick:he,handleAddToRegistryClick:fe,handleItemClick:ge(o,null===t||void 0===t?void 0:t.tcin),index:o,product:t,trackingPayload:me,useBorder:$})},`product-${o}`)})):Pe]})]})]})})}pe.displayName="ProductsCarousel";var me=o(23258),ve=o(69390),ge=o(39271),fe=o(83047);const he="@web/SlingshotComponents/PromotionsCarousel",_e=(e,t,o)=>{if(!e.length)return{};return{offers:e.map(((e,t)=>({offerId:e.promotion_id,offerPosition:String(t),offerType:"promo"}))),strategyId:t,strategyName:o}};var ye=o(7337);const be=({item:e,index:t,handleRecItemClick:o,useBorder:n})=>{const{pdp_message:i,messaging:l}=null!==e&&void 0!==e?e:{},{short_description:d,title:a,subtitle:c}=null!==l&&void 0!==l?l:{},s=(0,ge.F5)(e),u=null!==i&&void 0!==i?i:`${null!==d&&void 0!==d?d:""} ${null!==a&&void 0!==a?a:""} ${null!==c&&void 0!==c?c:""}`;return(0,r.jsxs)(W.a4,{"data-test":`item-card-${t}`,useBorder:n,children:[(0,r.jsxs)(C.r,{"aria-label":u,"data-index":t,"data-test":"deal-link",href:`/pl/${s}?link=prz_top_deals_`,onClick:o,style:{flex:"1 0 auto",color:"#333"},underline:"invert",children:[(0,r.jsx)(W.Vt,{alt:"",src:(0,ge.hc)(e)}),(0,r.jsxs)(W.Mv,{children:[!!l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I.k,{className:"h-text-red h-text-bold h-text-md","data-test":"pbo-short-desc",lines:1,children:d}),(0,r.jsx)(I.k,{className:"h-text-bold h-text-md","data-test":"pbo-title",lines:2,children:a}),(0,r.jsx)(I.k,{className:"h-text-md h-hidden-md-up","data-test":"pbo-sub-sm",lines:3,children:c}),(0,r.jsx)(I.k,{className:"h-text-md h-hidden-sm-down","data-test":"pbo-sub-md-lg",lines:2,children:c})]}),!!i&&(0,r.jsx)(I.k,{className:"h-text-red h-text-bold h-text-md","data-test":"basket-offers-message",lines:3,children:i})]})]}),(0,r.jsx)(W.W4,{children:(0,r.jsx)(ye.P,{"aria-label":`Shop offer ${u}`,"data-index":t,"data-test":"deals-item-link",href:`/pl/${s}?link=prz_top_deals_`,isFullWidth:!0,onClick:o,role:"button",size:"sm",children:"Shop offer"})})]})};be.displayName="PromotionTile";var je=(0,Z.R)({tag:"error_boundary_prz_carousel_promotion_tile"})(be),Pe=o(86820);const Oe=K.ZP.div.attrs({className:"h-padding-h-tight"}).withConfig({displayName:"styles__StyledTextContainer",componentId:"sc-s1bnkt-0"})(["width:100%;h3{line-height:",";font-size:15px;@media (min-width:","){font-size:13px;}@media (min-width:","){font-size:15px;}}"],Y.font.lineHeight.heading,Y.breakpoints.lg,Y.breakpoints.xl),xe=K.ZP.div.withConfig({displayName:"styles__StyledGlobalLinkWrapper",componentId:"sc-s1bnkt-1"})(["display:flex;position:relative;background:",";max-width:175px;padding:",";margin:",";text-align:center;width:100%;align-items:center;&::before{content:'';display:block;}"],Y.colors.palette.white,Y.space.generic.x3,Y.space.generic.x2),ke=(0,K.ZP)(C.r).withConfig({displayName:"styles__StyledGlobalLink",componentId:"sc-s1bnkt-2"})(["width:100%;display:flex;align-items:center;min-height:66px;"]),we=({global_link:e})=>{if(!e)return null;const{link_name:t="",link_tag:o,link_url:n}=e;return(0,r.jsx)(xe,{children:(0,r.jsx)(ke,{"data-lnk":o,href:n,children:(0,r.jsx)(Oe,{children:(0,r.jsx)(p.X,{className:"h-margin-b-none",innerHTML:t,level:3,size:3})})})})};we.displayName="GlobalLink";var Te=we;const Ce=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__PlaceholderWrapper",componentId:"sc-1hj3rw-0"})(["margin:",";width:calc(100% - ",");min-width:110px;"],Y.space.generic.x1,Y.space.generic.x2),Ie=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__ImagePlaceholderWrapper",componentId:"sc-1hj3rw-1"})(["width:100%;min-width:117px;"]),Ne=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__ImagePlaceholder",componentId:"sc-1hj3rw-2"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;padding-bottom:100%;background:#c4c4c4;}"]),Ee=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__TitlePlaceholder",componentId:"sc-1hj3rw-3"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:50%;height:1em;background:",";margin-top:0.25em;margin-bottom:0.4em;}"],Y.colors.palette.red.default),De=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__TextPlaceholder",componentId:"sc-1hj3rw-4"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:90%;height:1em;background:#c4c4c4;margin-bottom:0.25em;}&::after{content:' ';display:block;width:80%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}"]),Se=K.ZP.div.withConfig({displayName:"PromotionTilePlaceholder__BottomTextPlaceholder",componentId:"sc-1hj3rw-5"})(["position:relative;font-size:14px;&::before{content:' ';display:block;width:70%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}"]);function Ae({useBorder:e}){return(0,r.jsxs)(W.a4,{"data-test":"@web/SiteTopOfFunnel/PromotionTilePlaceholder",useBorder:e,children:[(0,r.jsx)(Ie,{children:(0,r.jsx)(Ne,{})}),(0,r.jsxs)(Ce,{children:[(0,r.jsx)(Ee,{}),(0,r.jsx)(De,{}),(0,r.jsx)(Se,{})]})]})}function Fe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Be(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Fe(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}Ae.displayName="PromotionTilePlaceholder";const Re=e=>"standard"===e?"default":e,ze=({content:e,options:t,metadata:o,order:n})=>{var i,l,a,g,f;const{placement_id:h,offer_id:_,endcap:y,global_link:b,background_color:x,margin_bottom:k,category_id:w,text_color:T,fulfillment_types:C,slingshot_component_id:I,custom_headline:N}=null!==e&&void 0!==e?e:{},{fullWidth:E=!1}=null!==t&&void 0!==t?t:{},{background_color:D,headline:S,image:A}=null!==y&&void 0!==y?y:{},F=!x||"white"===x||"#FFFFFF"===x,{trackEvent:B}=(0,v.rS)(),{screenMd:R}=(0,u.l)(),[z,Z]=(0,ve.Ql)({category_id:w,offer_id:_,placement_id:null!==h&&void 0!==h?h:"promotions_component_tester",fulfillment_types:C,slingshot_component_id:I}),$=Z.isIdle||Z.isFetching||Z.isLoading,L=z(fe.yl),W=(0,s.useMemo)((()=>{var e;return null!==(e=z(fe.NT))&&void 0!==e?e:[]}),[z]),M=z(fe.LA),H=z(fe.CV),q=z(fe.pA),V=null!==q&&void 0!==q?q:S,Y=(null!==(i=null===W||void 0===W?void 0:W.length)&&void 0!==i?i:0)>0,G="item or promotion carousel"===(null===o||void 0===o||null===(l=o.components)||void 0===l||null===(a=l[0])||void 0===a||null===(g=a.type_name)||void 0===g?void 0:g.toLocaleLowerCase()),K=(0,P.X)(),{asPath:J}=(0,j.useRouter)(),Q=(0,O.Y)(J),ee=Q?null!==N&&void 0!==N?N:"Headline placeholder":$?void 0:null!==N&&void 0!==N?N:"Headline placeholder",te=Q?null!==N&&void 0!==N?N:"Headline placeholder":$?(0,r.jsx)("span",{children:"\xa0"}):null!==N&&void 0!==N?N:"Headline placeholder";(0,s.useEffect)((()=>{Y&&B((e=>{if(!e)return{};const{doctype:t,placement_id:o,strategy_description:n,strategy_id:r,strategy_name:i,promotions:l=[]}=e;return{guest:{eventType:"recommendations"},recommendations:{docType:t,placementId:o,strategyDescription:n,strategyId:r,strategyName:i,type:"promo"},products:l.map((({promotion_id:e})=>({placementType:"recommendations",tcin:e}))),offerInfo:_e(l,r,i)}})(L))}),[B,Y,L]);const oe=(0,s.useCallback)((e=>{var t;const r=null===e||void 0===e||null===(t=e.currentTarget)||void 0===t?void 0:t.getAttribute("data-index"),i=((e,t)=>{var o,n,r;const i=null!==(o=null===e||void 0===e||null===(n=e.components)||void 0===n?void 0:n[0])&&void 0!==o?o:{};return{name:null!==(r=null===i||void 0===i?void 0:i.title)&&void 0!==r?r:null===i||void 0===i?void 0:i.id,position:String(t),component:null!==i&&void 0!==i&&i.title?`${null===i||void 0===i?void 0:i.id} || ${null===i||void 0===i?void 0:i.title}`:null===i||void 0===i?void 0:i.id,componentType:null===i||void 0===i?void 0:i.type_name,contentType:null===i||void 0===i?void 0:i.content_type}})(o,n);W&&r&&(B(((e,t)=>({guest:{eventType:"click"},offerInfo:{offers:[{offerId:(0,ge.F5)(t[Number.parseInt(e,10)]),offerPosition:e,offerSelected:!0,offerType:"promo"}]}}))(r,W)),(0,v.OK)({recClick:{position:+r,productId:(0,ge.F5)(W[Number.parseInt(r,10)]),strategyId:M,strategyName:H,type:"promo"},contentClick:i}))}),[B,W,M,H,o,n]),ne=(0,r.jsx)(Pe.T,{backgroundColor:D,backgroundImages:A,headline:null!==V&&void 0!==V?V:"Top promotions",textColor:T}),re=c()(y)?null:(0,r.jsx)(X.e,Be(Be({},y),{},{background_color:null!==(f=null!==D&&void 0!==D?D:x)&&void 0!==f?f:"",headline:V||(K?ee:""),text_color:T})),de=R?G?re:ne:null,ae=R?null:G?re:ne,ce=y?null:(0,r.jsx)(U.J,{background_color:x,className:"l-container l-container-standard h-padding-a-x2",text_color:T,children:(0,r.jsx)(p.X,{className:"h-margin-b-none",level:2,size:1,style:{color:"inherit"},children:q||(K?te:$?(0,r.jsx)("span",{children:"\xa0"}):"")})}),se=d()(10).map((e=>(0,r.jsx)(le.P,{},e))),ue=d()(10).map((e=>(0,r.jsx)(Ae,{useBorder:F},e)));return K?(0,r.jsxs)("div",{"aria-label":"Carousel",className:"l-container "+(E?"":"l-container-standard"),"data-test":he,role:"region",children:[ce,(0,r.jsxs)(U.T,{backgroundColor:x,className:""+(k?`h-margin-b-${Re(k)}`:""),"data-test":"filmstrip-deals-carousel",extraPadding:!!x&&!de&&R,children:[ae,(0,r.jsxs)(m.T,{children:[de,Y?W.map(((e,t)=>(0,r.jsx)(je,{handleRecItemClick:oe,index:t,item:e,useBorder:F},e.promotion_id))):$?Q?ue:se:ue,(0,r.jsx)(Te,{global_link:b})]})]})]}):(0,r.jsx)(ie.p,{controlled:!0,noAnimation:$||Y,open:$||Y,variant:"bare",children:(0,r.jsxs)("div",{"aria-label":"Carousel",className:"l-container "+(E?"":"l-container-standard"),"data-test":he,role:"region",children:[ce,(0,r.jsxs)(U.T,{backgroundColor:x,className:""+(k?`h-margin-b-${Re(k)}`:""),"data-test":"filmstrip-deals-carousel",extraPadding:!!x&&!de&&R,children:[ae,(0,r.jsxs)(m.T,{children:[de,Y?W.map(((e,t)=>(0,r.jsx)(je,{handleRecItemClick:oe,index:t,item:e,useBorder:F},e.promotion_id))):se,(0,r.jsx)(Te,{global_link:b})]})]})]})})};function Ze(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function $e(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ze(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ze.displayName="PromotionsCarousel";const Le=e=>{var t,o,n,l,d;const{content:a,options:c,metadata:s,order:u,componentId:p}=e,m=(0,i.g)(null===a||void 0===a||null===(t=a.container)||void 0===t||null===(o=t.keyValuePairs)||void 0===o?void 0:o.context),v=$e($e({},a),{},{brand_ids:null===m||void 0===m?void 0:m.brandId,category_id:null===m||void 0===m?void 0:m.categoryId,fulfillment_types:null===m||void 0===m?void 0:m.fulfillmentId,offer_id:null===m||void 0===m?void 0:m.offerId,placement_id:null===m||void 0===m?void 0:m.placementId,slingshot_component_id:p,facet_ids:null===m||void 0===m?void 0:m.facetId});return"personalizedProducts"===(null===a||void 0===a||null===(n=a.container)||void 0===n?void 0:n.type)?(0,r.jsx)(pe,{content:v,metadata:s,options:c,order:u}):"personalizedPromotions"===(null===a||void 0===a||null===(l=a.container)||void 0===l?void 0:l.type)?(0,r.jsx)(ze,{content:v,metadata:s,options:c,order:u}):"personalizedOffers"===(null===a||void 0===a||null===(d=a.container)||void 0===d?void 0:d.type)?(0,r.jsx)(me.Zo,{content:v,metadata:s,options:c,order:u}):null};Le.displayName="PersonalizationCarousel"},238:function(e,t,o){o.d(t,{g:function(){return i}});var n=o(41609),r=o.n(n);const i=e=>{if(r()(e)||!e)return;const t=e.split(";").map((e=>{var t;const[o,...n]=null!==(t=e.split(","))&&void 0!==t?t:[];return[o,null===n||void 0===n?void 0:n.join(",")]}));return Object.fromEntries(t)}}}]);