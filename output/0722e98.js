(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1093:function(e,t,n){var content=n(1242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("18444764",content,!0,{sourceMap:!1})},1241:function(e,t,n){"use strict";n(1093)},1242:function(e,t,n){var l=n(83)((function(i){return i[1]}));l.push([e.i,'.yazio-wrapper[data-v-6e043612]{display:block;color:#fff;transition:all .2s ease-in 0s}.yazio-wrapper[data-v-6e043612]:hover{transform:scale(.95)}.yazio-image-wrapper[data-v-6e043612]{position:relative;border-radius:100%;background:linear-gradient(180deg,hsla(0,0%,100%,.419227),hsla(0,0%,100%,0))}.yazio-image[data-v-6e043612]{background-color:#9786bf;top:50%;left:50%;transform:translate(-50%,-50%)}.widget-header[data-v-6e043612]:before{content:"";position:absolute;width:100%;top:50%;transform:translateY(-50%);border-bottom:1px solid hsla(0,0%,100%,.22)}',""]),l.locals={},e.exports=l},1381:function(e,t,n){"use strict";n.r(t);n(24),n(62);var l=n(3),o=n(855),r=n(810),c=n(809),d=n(758),v=n(173),m=n(281),f=Object(l.b)({components:{Swiper:r.a,SwiperSlide:c.a,OLink:m.a},props:{authors:{type:Object}},setup:function(e){var t=Object(l.q)(null),n=Object(l.q)(null),r=Object(l.q)(null),c=Object(d.a)().sendWidgetEvent,m=Object(l.q)(null);Object(l.l)((function(){for(var i=0;i<(f.value?2:6);i++)c("view","Yazio",e.authors.data[i].name,i+1)}));var f=Object(v.a)().isMobile;return{settings:Object(l.a)((function(){return{slidesPerView:f.value?2.4:6,slidesPerGroup:f.value?1:6,speed:150,loop:!0,preloadImages:!1,navigation:{nextEl:n,prevEl:r},breakpoints:{320:{spaceBetween:16},640:{spaceBetween:24}}}})),nextNavBtn:n,prevNavBtn:r,onSwiper:function(n){t.value=n,n.on("slideChange",(function(){clearTimeout(m.value),m.value=setTimeout((function(){for(var t=n.realIndex+(f.value?1:0),i=t;i<(f.value?t+1:t+6);i++)c("view","Yazio",e.authors.data[i].name,i+1)}),1e3)})),n.on("click",(function(){var t=parseInt(n.clickedSlide.dataset.swiperSlideIndex);c("click","Yazio",e.authors.data[t].name,t+1)}))},constantData:{style:{icon:"yazio",containerColor:"#9786BF",arrowColor:"#6F59A1",linkColor:"#FFFFFF",headerTextColor:"#FFFFFF"},text:{headerName:"Yazio",headerLinkName:"Tümünü Gör",headerLink:"/yazio"}},slideChange:function(e){var n;null===(n=t.value)||void 0===n||n.slideToLoop(e)},Navigation:o.a,isMobile:f}}}),h=(n(1241),n(12)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"relative sm:mx-auto pl-4 sm:px-8 py-6 rounded-none sm:rounded-lg",class:e.isMobile?"h-min-[350px]":"h-min-[345px]",style:{backgroundColor:e.constantData.style.containerColor},attrs:{id:e.authors.id}},[n("div",{staticClass:"widget-header w-full relative flex items-center mb-8"},[n("div",{staticClass:"flex items-center relative w-auto",style:{backgroundColor:e.constantData.style.containerColor,color:e.constantData.style.headerTextColor}},[n("OIcon",{attrs:{icon:"category/"+e.constantData.style.icon,"svg-class":"w-7 h-7"}}),e._v(" "),n("div",{staticClass:"block pl-1 flex-shrink-0 mr-1",class:e.isMobile?"text-xl":"text-20"},[e._v(e._s(e.constantData.text.headerName))])],1),e._v(" "),n("a",{staticClass:"absolute flex items-center",class:e.isMobile?"right-3":"right-5",style:{backgroundColor:e.constantData.style.containerColor,color:e.constantData.style.linkColor},attrs:{href:e.constantData.text.headerLink}},[n("div",{staticClass:"pl-1 flex-shrink-0 font-normal",class:e.isMobile?"text-md":"text-base"},[e._v(e._s(e.constantData.text.headerLinkName))]),e._v(" "),n("OIcon",{attrs:{icon:"homepage/arrow-circle-right","svg-class":"w-4 h-4 mx-1"}})],1)]),e._v(" "),n("Swiper",{attrs:{settings:e.settings,modules:[e.Navigation]},on:{swiper:e.onSwiper}},e._l(e.authors.data,(function(t,l){return n("SwiperSlide",{key:l},[n("OLink",{staticClass:"yazio-wrapper",attrs:{href:"/yazio/"+t.slug}},[n("div",{staticClass:"flex text-center items-center justify-start flex-col text-13 relative"},[n("div",{staticClass:"yazio-image-wrapper h-[120px] w-[120px] sm:h-[135px] sm:w-[135px] block mb-1"},[n("img",{staticClass:"yazio-image absolute h-[117px] w-[117px] sm:h-[132px] sm:w-[132px] rounded-full object-cover p-2",attrs:{src:t.image}})]),e._v(" "),n("div",{staticClass:"font-semibold text-base"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"text-13"},[e._v(e._s(t.title))])])])],1)})),1),e._v(" "),e.isMobile?e._e():n("OIcon",{ref:"prevNavBtn",style:{color:e.constantData.style.arrowColor},attrs:{icon:"homepage/arrow-circle-right","svg-class":"\n      absolute\n      left-0\n      top-1/2\n      -translate-y-1/2 -translate-x-1/2\n      u-center\n      w-12\n      h-12\n      rounded-full\n      z-1\n      cursor-pointer\n      border-white border-3\n      bg-white\n      rotate-180\n      text-xl"}}),e._v(" "),e.isMobile?e._e():n("OIcon",{ref:"nextNavBtn",style:{color:e.constantData.style.arrowColor},attrs:{icon:"homepage/arrow-circle-right","svg-class":"\n      absolute\n      right-0\n      top-1/2\n      -translate-y-1/2\n      translate-x-1/2\n      u-center\n      cursor-pointer\n      w-12\n      h-12\n      rounded-full\n      border-white border-3\n      bg-white\n      z-1\n      text-xl"}})],1)}),[],!1,null,"6e043612",null);t.default=component.exports},796:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(22),n(25);var l=n(786);function o(e,t,n,o){var r=Object(l.a)();return e.params.createElements&&Object.keys(o).forEach((function(l){if(!n[l]&&!0===n.auto){var element=e.$el.children(".".concat(o[l]))[0];element||((element=r.createElement("div")).className=o[l],e.$el.append(element)),n[l]=element,t[l]=element}})),n}},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(72);var l=n(796),o=n(799);function r(e){var t=e.swiper,n=e.extendParams,r=e.on,c=e.emit;function d(e){var n;return e&&(n=Object(o.a)(e),t.params.uniqueNavElements&&"string"==typeof e&&n.length>1&&1===t.$el.find(e).length&&(n=t.$el.find(e))),n}function v(e,n){var l=t.params.navigation;e&&e.length>0&&(e[n?"addClass":"removeClass"](l.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=n),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](l.lockClass))}function m(){if(!t.params.loop){var e=t.navigation,n=e.$nextEl;v(e.$prevEl,t.isBeginning&&!t.params.rewind),v(n,t.isEnd&&!t.params.rewind)}}function f(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function h(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function C(){var e=t.params.navigation;if(t.params.navigation=Object(l.a)(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),e.nextEl||e.prevEl){var n=d(e.nextEl),o=d(e.prevEl);n&&n.length>0&&n.on("click",h),o&&o.length>0&&o.on("click",f),Object.assign(t.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:o,prevEl:o&&o[0]}),t.enabled||(n&&n.addClass(e.lockClass),o&&o.addClass(e.lockClass))}}function x(){var e=t.navigation,n=e.$nextEl,l=e.$prevEl;n&&n.length&&(n.off("click",h),n.removeClass(t.params.navigation.disabledClass)),l&&l.length&&(l.off("click",f),l.removeClass(t.params.navigation.disabledClass))}n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},r("init",(function(){!1===t.params.navigation.enabled?w():(C(),m())})),r("toEdge fromEdge lock unlock",(function(){m()})),r("destroy",(function(){x()})),r("enable disable",(function(){var e=t.navigation,n=e.$nextEl,l=e.$prevEl;n&&n[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),l&&l[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),r("click",(function(e,n){var l=t.navigation,r=l.$nextEl,d=l.$prevEl,v=n.target;if(t.params.navigation.hideOnClick&&!Object(o.a)(v).is(d)&&!Object(o.a)(v).is(r)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===v||t.pagination.el.contains(v)))return;var m;r?m=r.hasClass(t.params.navigation.hiddenClass):d&&(m=d.hasClass(t.params.navigation.hiddenClass)),c(!0===m?"navigationShow":"navigationHide"),r&&r.toggleClass(t.params.navigation.hiddenClass),d&&d.toggleClass(t.params.navigation.hiddenClass)}}));var w=function(){t.$el.addClass(t.params.navigation.navigationDisabledClass),x()};Object.assign(t.navigation,{enable:function(){t.$el.removeClass(t.params.navigation.navigationDisabledClass),C(),m()},disable:w,update:m,init:C,destroy:x})}}}]);