(window.webpackJsonp=window.webpackJsonp||[]).push([[148,61],{1002:function(e,t,r){var content=r(1017);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("08dc28ce",content,!0,{sourceMap:!1})},1016:function(e,t,r){"use strict";r(1002)},1017:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-globalImage{margin:unset}.c-globalImage_cmsImage{height:1px;overflow:hidden;position:relative;background:var(--global-image-background, #f9f9f9);background-size:cover;background-position:50%;background-repeat:no-repeat;display:block;padding-bottom:56.25%;contain:content}.c-globalImage_cmsImage picture{height:100%;width:100%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto 0}.c-globalImage_cmsImage picture img{object-fit:cover;width:100%;height:100%}",""]),o.locals={},e.exports=o},1023:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(989),l=r(992),n=class extends c.Vue{get styleAspectRatio(){return"padding-bottom: calc("+this.aspectRatio+"* 100%)"}};Object(o.c)([Object(c.Prop)({default:""}),Object(o.f)("design:type",String)],n.prototype,"theme",void 0),Object(o.c)([Object(c.Prop)({default:null}),Object(o.f)("design:type",Object)],n.prototype,"image",void 0),Object(o.c)([Object(c.Prop)({default:null}),Object(o.f)("design:type",String)],n.prototype,"size",void 0),Object(o.c)([Object(c.Prop)({default:null,type:Object}),Object(o.f)("design:type",Object)],n.prototype,"sizes",void 0),Object(o.c)([Object(c.Prop)({default:"9/16"}),Object(o.f)("design:type",String)],n.prototype,"aspectRatio",void 0),Object(o.c)([Object(c.Prop)({default:!1,type:Boolean}),Object(o.f)("design:type",Boolean)],n.prototype,"preload",void 0),Object(o.c)([Object(c.Prop)({default:!1,type:Boolean}),Object(o.f)("design:type",Boolean)],n.prototype,"lazyLoad",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],n.prototype,"showCredits",void 0);var d=n=Object(o.c)([Object(c.Component)({components:{CmsImage:l.default}})],n),m=(r(1016),r(137)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("figure",{staticClass:"c-globalImage",class:"".concat(e.theme)},[e.image?t("CmsImage",{staticClass:"c-globalImage_cmsImage",style:e.styleAspectRatio,attrs:{image:e.image,size:e.size,sizes:e.sizes,preload:e.preload,"lazy-load":!e.preload&&e.lazyLoad}}):e._e(),e._v(" "),e.showCredits&&e.image.credits?t("figcaption",{staticClass:"u-text-right"},[t("span",{staticClass:"g-outer-spacing-top-xsmall g-color-text-meta g-text-xxxsmall",domProps:{innerHTML:e._s(e.image.credits)}})]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},1100:function(e,t,r){var content=r(1186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("c3d427de",content,!0,{sourceMap:!1})},1185:function(e,t,r){"use strict";r(1100)},1186:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,'.c-storiesHero{--overlay-background-color: rgb(0, 0, 0);position:relative}.c-storiesHero-dark-text{--g-color-text-storiesGrid-primary: #141415;--g-color-text-storiesGrid-secondary: #141415}.c-storiesHero-dark-text .c-storiesHero_sectionTitle{border-top-color:#141415}.c-storiesHero-dark-text .c-storiesHero_metaWrapper{border-top-color:#141415}.c-storiesHero_mainContent{position:relative;background-color:var(--overlay-background-color)}@media(min-width: 1440px){.c-storiesHero_mainContent{overflow-y:hidden}}.c-storiesHero_media{--global-image-background: transparent;z-index:0;position:absolute;top:0;left:0;right:0;background-color:var(--overlay-background-color)}@media(min-width: 1440px){.c-storiesHero_media{width:calc(1440px - 2 * 72px);margin:0 auto}}.c-storiesHero_media .c-storiesHero_globalImage{display:none}@media(max-width: 767px){.c-storiesHero_media .c-storiesHero_globalImage-mobile{display:block}}.c-storiesHero_media .c-storiesHero_globalImage-mobile .c-cmsImage::after{background-image:linear-gradient(to bottom, transparent 75%, var(--overlay-background-color)),linear-gradient(to top, transparent 55%, var(--overlay-background-color))}.c-storiesHero_media .c-storiesHero_globalImage-mobile .c-cmsImage_video{position:relative;width:100%;height:420px}.c-storiesHero_media .c-storiesHero_globalImage-mobile .c-cmsImage_video::after{position:absolute;top:0;left:0;width:100%;height:100%;content:""}.c-storiesHero_media .c-storiesHero_globalImage-mobile .c-cmsImage_video video{width:100%;object-fit:cover}@media(min-width: 768px){.c-storiesHero_media .c-storiesHero_globalImage-tablet{display:block}.c-storiesHero_media .c-storiesHero_globalImage-tablet .c-cmsImage::after{background-image:linear-gradient(to bottom, transparent 75%, var(--overlay-background-color)),linear-gradient(to top, transparent 75%, var(--overlay-background-color))}}@media(min-width: 1440px){.c-storiesHero_media .c-storiesHero_globalImage-tablet{margin-left:-72px;width:calc(75% + 72px);max-width:1038px}.c-storiesHero_media .c-storiesHero_globalImage-tablet .c-cmsImage::after{background-image:linear-gradient(to left, transparent 55%, var(--overlay-background-color)),linear-gradient(to right, transparent 65%, var(--overlay-background-color))}.c-storiesHero_media .c-storiesHero_globalImage-tablet .c-cmsImage_video{position:relative;width:100%}.c-storiesHero_media .c-storiesHero_globalImage-tablet .c-cmsImage_video::after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background-image:linear-gradient(to left, transparent 55%, var(--overlay-background-color)),linear-gradient(to right, transparent 65%, var(--overlay-background-color))}.c-storiesHero_media .c-storiesHero_globalImage-tablet .c-cmsImage_video video{width:100%}}.c-storiesHero_media .c-storiesHero_globalImage .c-cmsImage::after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0}@media(min-width: 1440px){.c-storiesHero_content{width:calc(1440px - 2 * 72px);margin:0 auto;min-height:584px}}.c-storiesHero_sectionTitleWrapper{position:relative;height:0;width:100%;padding-bottom:100%;padding-top:1.5rem;margin-bottom:-4rem}@media(min-width: 768px){.c-storiesHero_sectionTitleWrapper{padding-bottom:56.25%}}@media(min-width: 1440px){.c-storiesHero_sectionTitleWrapper{float:left;width:16.6666666667%;display:grid;grid-gap:var(--grid-gap, 1.5rem);grid-template-columns:repeat(2, 1fr);padding:0;margin:0}}.c-storiesHero_sectionTitle{margin-left:1rem;margin-right:1rem;padding-top:1rem;border-top:1px solid #fff}@media(min-width: 768px){.c-storiesHero_sectionTitle{margin-left:2rem;margin-right:2rem}}@media(min-width: 1440px){.c-storiesHero_sectionTitle{margin:64px 0 0;padding-top:1.5rem;grid-column:1/span 2}}.c-storiesHero_metaWrapper{position:relative;display:block;padding-left:1rem;padding-right:1rem;padding-bottom:4rem}.c-storiesHero_metaWrapper:hover{--g-color-text-storiesGrid-primary: $cmg-color-link-hover}@media(min-width: 768px){.c-storiesHero_metaWrapper{padding-left:2rem;padding-right:2rem}}@media(min-width: 1440px){.c-storiesHero_metaWrapper{float:right;width:83.3333333333%;margin:64px 0 0;padding:1.5rem 0;display:grid;grid-gap:var(--grid-gap, 1.5rem);grid-template-columns:repeat(10, 1fr);border-top:1px solid #fff;min-height:456px}}.c-storiesHero_meta{padding:0 0 1rem}@media(min-width: 1440px){.c-storiesHero_meta{padding:0;grid-column:7/span 4}}.c-storiesHero_meta-dark{--keyline-color: #141415}.c-storiesHero_meta-light{--keyline-color: rgb(255, 255, 255)}',""]),o.locals={},e.exports=o},1200:function(e,t,r){"use strict";r.r(t);r(29),r(49),r(157);var o=r(0),c=r(989),l=r(993),n=r(389),d=r(996),m=r(1023),f=r(990),v=r(1103),y=r(1040),h=class extends c.Vue{get storyHref(){var e,t;return(null===(e=this.story)||void 0===e?void 0:e.slug)?{name:this.$routeNameForObject(this.story),params:{slug:null===(t=this.story)||void 0===t?void 0:t.slug},_object:this.story}:this.$objectToHref(this.story)}get overlayColorVar(){return"--overlay-background-color: ".concat(this.overlayColor)}get darkText(){if(0===this.overlayColor.length)return!1;var e=this.overlayColor.replace("#","");return 6!==e.length&&(e="".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])),6===e.length&&.299*parseInt("".concat(e[0]).concat(e[1]),16)+.587*parseInt("".concat(e[2]).concat(e[3]),16)+.114*parseInt("".concat(e[4]).concat(e[5]),16)>186}get imageSizes(){return{large:"deep_dives_image_large",medium:"deep_dives_image_medium",small:"deep_dives_image_small"}}get image(){var e;return null===(e=this.story)||void 0===e?void 0:e.image}};Object(o.c)([Object(c.Prop)({default:()=>({}),type:Object}),Object(o.f)("design:type",Object)],h.prototype,"component",void 0),Object(o.c)([Object(c.Prop)({default:()=>({}),type:Object}),Object(o.f)("design:type",Object)],h.prototype,"story",void 0),Object(o.c)([Object(c.Prop)({default:()=>({}),type:Object}),Object(o.f)("design:type",Object)],h.prototype,"sectionTitleData",void 0),Object(o.c)([Object(c.Prop)({default:!0}),Object(o.f)("design:type",Boolean)],h.prototype,"showAuthor",void 0),Object(o.c)([Object(c.Prop)({default:"",type:String}),Object(o.f)("design:type",String)],h.prototype,"overlayColor",void 0);var _=h=Object(o.c)([Object(c.Component)({components:{GlobalImage:m.default,GlobalLink:f.default,StoriesMeta:v.a,StoriesSectionTitle:y.a},mixins:[]}),Object(l.a)("track-click",Object(d.a)(n.a))],h),x=(r(1185),r(137)),component=Object(x.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesHero",class:{"c-storiesHero-dark-text":e.darkText}},[t("div",{staticClass:"c-storiesHero_mainContent",style:e.overlayColorVar},[t("div",{staticClass:"c-storiesHero_media"},[t("GlobalImage",{staticClass:"c-storiesHero_globalImage c-storiesHero_globalImage-mobile",attrs:{image:e.image,"lazy-load":!0,"aspect-ratio":"1/1",sizes:e.imageSizes}}),e._v(" "),t("GlobalImage",{staticClass:"c-storiesHero_globalImage c-storiesHero_globalImage-tablet",attrs:{image:e.image,"lazy-load":!0,sizes:e.imageSizes}})],1),e._v(" "),t("div",{staticClass:"c-storiesHero_content"},[t("div",{staticClass:"c-storiesHero_sectionTitleWrapper"},[t("div",{staticClass:"c-storiesHero_sectionTitle"},[t("StoriesSectionTitle",e._g({attrs:{item:e.sectionTitleData}},e.$listeners))],1)]),e._v(" "),t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"article_link",elementType:"LINK",location:e.$attributeRef.location,text:"trackStoriesHeroClick"}},expression:"{\n          outboundUrl: $attributeRef.href,\n          webElement: {\n            name: 'article_link',\n            elementType: 'LINK',\n            location: $attributeRef.location,\n            text: 'trackStoriesHeroClick'\n          }\n        }"}],staticClass:"c-storiesHero_metaWrapper",attrs:{to:e.storyHref}},[t("StoriesMeta",{staticClass:"c-storiesHero_meta u-flex-grow",class:e.darkText?"c-storiesHero_meta-dark":"c-storiesHero_meta-light",attrs:{story:e.story,"is-lead-story":!0,"show-author":e.showAuthor,"enable-override":!1}})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports},1421:function(e,t,r){var content=r(1778);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("663541bf",content,!0,{sourceMap:!1})},1422:function(e,t,r){var content=r(1780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("86b1c0c0",content,!0,{sourceMap:!1})},1423:function(e,t,r){var content=r(1782);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("b9d80eee",content,!0,{sourceMap:!1})},1424:function(e,t,r){var content=r(1784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("f8726b02",content,!0,{sourceMap:!1})},1425:function(e,t,r){var content=r(1786);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("0322d803",content,!0,{sourceMap:!1})},1426:function(e,t,r){var content=r(1788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("1b6926d0",content,!0,{sourceMap:!1})},1437:function(e,t,r){var content=r(1810);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("5ac089c0",content,!0,{sourceMap:!1})},1438:function(e,t,r){var content=r(1812);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(288).default)("3cc7236e",content,!0,{sourceMap:!1})},1777:function(e,t,r){"use strict";r(1421)},1778:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesExpertCardAuthor{gap:1rem}.c-storiesExpertCardAuthor_image{overflow:hidden;border-radius:50%;flex:0 0 4rem;height:4rem;filter:grayscale(100%)}.c-storiesExpertCardAuthor_blurb{color:#737373;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;min-height:3.75rem}",""]),o.locals={},e.exports=o},1779:function(e,t,r){"use strict";r(1422)},1780:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesExpertCardStory_link{transition:color .3s ease-in-out;gap:1rem;height:4rem;overflow:hidden}.c-storiesExpertCardStory_image{flex:0 0 72px;height:72px}.c-storiesExpertCardStory_hed{-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;min-height:4.125rem}",""]),o.locals={},e.exports=o},1781:function(e,t,r){"use strict";r(1423)},1782:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesExpertCard{--keyline-color: #e71d1d;background-color:#fff;overflow:hidden;border-radius:.25rem}.c-storiesExpertCard_hed{border-color:var(--keyline-color);padding-left:1rem;padding-right:1rem;margin-left:-1rem;margin-right:-1rem}.c-storiesExpertCard.isFirst .c-storiesExpertCard_hed{padding-left:0;margin-left:0}.c-storiesExpertCard.isLast .c-storiesExpertCard_hed{padding-right:0;margin-right:0}",""]),o.locals={},e.exports=o},1783:function(e,t,r){"use strict";r(1424)},1784:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesExpertAdvice{--g-color-text-storiesGrid-primary: rgb(255, 255, 255);--g-color-text-storiesGrid-secondary: rgb(255, 255, 255);position:relative}.c-storiesExpertAdvice_leadStory{margin-bottom:-4rem}@media(min-width: 1440px){.c-storiesExpertAdvice_cardWrapper>*{scroll-snap-align:end}}.c-storiesExpertAdvice_storyCardExpert{transition:box-shadow .3s ease-in-out;background-color:#fff;--g-color-text-storiesGrid-primary: #141415;--g-color-text-storiesGrid-secondary: #737373}.c-storiesExpertAdvice_cardWrapper:nth-child(even) .c-storiesExpertAdvice_storyCard{background-color:#000;--g-color-text-storiesGrid-primary: rgb(255, 255, 255)}",""]),o.locals={},e.exports=o},1785:function(e,t,r){"use strict";r(1425)},1786:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesOffsiteCard{--keyline-color: #fa4f8c;background-color:#fff;overflow:hidden;border-radius:.25rem}.c-storiesOffsiteCard_offsiteLabel{border-bottom:1px solid var(--keyline-color);fill:#737373;padding-left:1rem;padding-right:1rem;margin-left:-1rem;margin-right:-1rem}.c-storiesOffsiteCard_linkIcon{width:1.375rem;height:1.375rem}.c-storiesOffsiteCard_hed{transition:color .3s ease-in-out;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.c-storiesOffsiteCard_dek{color:#737373}.c-storiesOffsiteCard_media{min-height:408px}.c-storiesOffsiteCard:nth-child(even){background-color:#000}.c-storiesOffsiteCard:nth-child(even) .c-storiesOffsiteCard_offsiteLabel{fill:#dadada}.c-storiesOffsiteCard:nth-child(even) .c-storiesOffsiteCard_hed{color:#fff}.c-storiesOffsiteCard:nth-child(even) .c-storiesOffsiteCard_dek{color:#dadada}.c-storiesOffsiteCard:hover .c-storiesOffsiteCard_hed{color:#e71d1d}.c-storiesOffsiteCard.isFirst .c-storiesOffsiteCard_offsiteLabel{padding-left:0;margin-left:0}.c-storiesOffsiteCard.isLast .c-storiesOffsiteCard_offsiteLabel{padding-right:0;margin-right:0}",""]),o.locals={},e.exports=o},1787:function(e,t,r){"use strict";r(1426)},1788:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,'.c-storiesOffsite{position:relative}.c-storiesOffsite::before{content:"";display:block;width:calc(100vw - 2 * 1rem);margin:0 auto;border-bottom:1px solid #737373}@media(min-width: 768px){.c-storiesOffsite::before{width:calc(100vw - 2 * 2rem)}}@media(min-width: 1440px){.c-storiesOffsite::before{margin:0 auto;max-width:calc(1440px - 2 * 72px)}}.c-storiesOffsite_sectionTitle{width:calc(100vw - 2 * 1rem);min-width:288px;margin:0 auto;z-index:10}@media(min-width: 768px){.c-storiesOffsite_sectionTitle{width:calc(100vw - 2 * 2rem)}}@media(min-width: 1440px){.c-storiesOffsite_sectionTitle{position:absolute;width:calc((100vw - 1296px)*.5 + 196px);padding-left:calc((100vw - 1296px)*.5);padding-right:2rem;background-color:#fff;height:100%}}.c-storiesOffsite_storyCard{transition:box-shadow .3s ease-in-out}',""]),o.locals={},e.exports=o},1809:function(e,t,r){"use strict";r(1437)},1810:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesDeepDivesCard{background-color:#fff;overflow:hidden;border-radius:.25rem}.c-storiesDeepDivesCard:hover{--g-color-text-storiesGrid-primary: $cmg-color-link-hover}",""]),o.locals={},e.exports=o},1811:function(e,t,r){"use strict";r(1438)},1812:function(e,t,r){var o=r(287)((function(i){return i[1]}));o.push([e.i,".c-storiesDeepDives{--g-color-text-storiesGrid-primary: rgb(255, 255, 255);--g-color-text-storiesGrid-secondary: rgb(255, 255, 255);position:relative}.c-storiesDeepDives_leadStory{margin-bottom:-4rem}.c-storiesDeepDives_storyCard{transition:box-shadow .3s ease-in-out;background-color:#fff;--g-color-text-storiesGrid-primary: #141415;--g-color-text-storiesGrid-secondary: #737373}.c-storiesDeepDives_storyCard:hover{--g-color-text-storiesGrid-primary: #e71d1d}@media(min-width: 1440px){.c-storiesDeepDives_cardWrapper>*{scroll-snap-align:end}}.c-storiesDeepDives_cardWrapper:nth-child(even) .c-storiesDeepDives_storyCard{background-color:#000;--g-color-text-storiesGrid-primary: rgb(255, 255, 255);--g-color-text-storiesGrid-secondary: #dadada}.c-storiesDeepDives_cardWrapper:nth-child(even) .c-storiesDeepDives_storyCard:hover{--g-color-text-storiesGrid-primary: #e71d1d}",""]),o.locals={},e.exports=o},1924:function(e,t,r){"use strict";r.r(t);r(69),r(92);var o=r(0),c=r(989),l=r(992),n=r(4),d=class extends c.Vue{};Object(o.c)([Object(c.Prop)({default:()=>({})}),Object(o.f)("design:type",Object)],d.prototype,"author",void 0);var m=d=Object(o.c)([Object(c.Component)({components:{CmsImage:l.default},mixins:[]})],d),f=(r(1777),r(137)),v=Object(f.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesExpertCardAuthor g-inner-spacing-top-medium g-inner-spacing-bottom-medium u-flexbox u-flexbox-alignCenter"},[e.author.image?t("CmsImage",{staticClass:"c-storiesExpertCardAuthor_image",attrs:{image:e.author.image,"lazy-load":!0,size:"square_64"}}):e._e(),e._v(" "),t("span",{staticClass:"c-storiesExpertCardAuthor_blurb u-flex-shrink g-text-xxsmall"},[e._v("\n    "+e._s(e.author.bio)+"\n  ")])],1)}),[],!1,null,null,null).exports,y=r(993),h=r(389),_=r(996),x=r(990),O=class extends c.Vue{};Object(o.c)([Object(c.Prop)({default:()=>({})}),Object(o.f)("design:type",Object)],O.prototype,"story",void 0);var C=O=Object(o.c)([Object(c.Component)({components:{CmsImage:l.default,GlobalLink:x.default},mixins:[]}),Object(y.a)("track-click",Object(_.a)(h.a))],O),j=(r(1779),Object(f.a)(C,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesExpertCardStory g-inner-spacing-top-medium g-inner-spacing-bottom-medium"},[t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"article_link",text:"trackStoriesExpertClick",elementType:"LINK",location:e.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'article_link',\n        text: 'trackStoriesExpertClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],staticClass:"c-storiesExpertCardStory_link u-flexbox u-flexbox-alignTop",attrs:{to:{name:e.$routeNameForObject(e.story),params:{slug:e.story.slug},_object:e.story}}},[t("h3",{staticClass:"c-storiesExpertCardStory_hed u-flex-shrink g-text-xsmall"},[e._v("\n      "+e._s(e.story.title)+"\n    ")]),e._v(" "),e.story.image?t("CmsImage",{staticClass:"c-storiesExpertCardStory_image",attrs:{image:e.story.image,"lazy-load":!0,size:"square_144"}}):e._e()],1)],1)}),[],!1,null,null,null).exports);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S=class extends c.Vue{get storyAuthor(){var e;return w(w({},null===(e=this.stories.find((e=>!!(null==e?void 0:e.author))))||void 0===e?void 0:e.author),this.author)}get keylineColorVar(){return"--keyline-color: ".concat(this.keylineColor)}};Object(o.c)([Object(c.Prop)({default:[],type:Array}),Object(o.f)("design:type",Array)],S.prototype,"stories",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],S.prototype,"isFirst",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],S.prototype,"isLast",void 0),Object(o.c)([Object(c.Prop)({default:()=>{},type:Object}),Object(o.f)("design:type",Object)],S.prototype,"author",void 0),Object(o.c)([Object(c.Prop)({default:"",type:String}),Object(o.f)("design:type",String)],S.prototype,"topic",void 0),Object(o.c)([Object(c.Prop)({default:""}),Object(o.f)("design:type",String)],S.prototype,"keylineColor",void 0);var H=S=Object(o.c)([Object(c.Component)({components:{StoriesExpertCardAuthor:v,StoriesExpertCardStory:j}})],S),I=(r(1781),Object(f.a)(H,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.stories&&e.stories.length>0?t("div",{staticClass:"c-storiesExpertCard u-flexbox-column g-inner-spacing-medium",class:{isFirst:e.isFirst,isLast:e.isLast}},[t("h3",{staticClass:"c-storiesExpertCard_hed g-text-xsmall g-border-thin-light-bottom g-inner-spacing-bottom-small",style:e.keylineColorVar},[e._v("\n    "+e._s(e.topic)+"\n  ")]),e._v(" "),t("StoriesExpertCardAuthor",{attrs:{author:e.storyAuthor}}),e._v(" "),e._l(e.stories,(function(r){return t("StoriesExpertCardStory",e._g({key:"storiesExpertCard_story".concat(r.id),staticClass:"c-storiesExpertCard_story g-border-thin-light-top",attrs:{story:r}},e.$listeners))}))],2):e._e()}),[],!1,null,null,null).exports),D=r(1081),E=r(1200),P=r(1140),L=class extends P.a{getAuthorFromStory(e){var t={bio:e.description};return e.image&&(t.image=e.image),t}get leadStory(){return this.hasValidItems()?this.items[0]:null}get keylineColor(){var e,t;return null===(t=null===(e=this.leadStory)||void 0===e?void 0:e.metaData)||void 0===t?void 0:t.linkUrl}get overlayColor(){var e;return null===(e=this.leadStory)||void 0===e?void 0:e.label}get storiesByTopic(){return(this.hasValidItems()?this.items.slice(1):[]).reduce(((e,t)=>{if("topic"===t.label){var r=this.getAuthorFromStory(t);e.push({author:r,topic:t.title,stories:[]})}else e[e.length-1].stories.push(t);return e}),[])}},T=L=Object(o.c)([Object(c.Component)({components:{CmsImage:l.default,StoriesExpertCard:I,StoriesHero:E.default,StoriesListHorizontal:D.a},mixins:[]})],L),z=(r(1783),Object(f.a)(T,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.hasValidItems()?t("div",{staticClass:"c-storiesExpertAdvice g-outer-spacing-bottom-xxlarge",attrs:{"data-location":"SECTION"}},[t("StoriesHero",{staticClass:"c-storiesExpertAdvice_leadStory",attrs:{story:e.leadStory,"section-title-data":e.sectionTitleData,"overlay-color":e.overlayColor,"show-author":!1}}),e._v(" "),t("StoriesListHorizontal",{staticClass:"c-storiesExpertAdvice_storiesList",attrs:{"control-placement":"top","control-offset":"1.25","card-width":"large"}},e._l(e.storiesByTopic,(function(r,o){return t("div",{key:r.id,staticClass:"c-storiesExpertAdvice_cardWrapper u-flexbox-column u-flex-grow"},[r.stories&&r.stories.length>0?t("StoriesExpertCard",{staticClass:"c-storiesExpertAdvice_storyCardExpert u-flex-grow g-dropShadow-default-plusHover",attrs:{author:r.author,"is-first":0===o,"is-last":o===e.storiesByTopic.length-1,"keyline-color":e.keylineColor,stories:r.stories,topic:r.topic}}):e._e()],1)})),0)],1):e._e()}),[],!1,null,null,null));t.default=z.exports},1941:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(989),l=r(1081),n=(r(69),r(6),r(7),r(29),r(49),r(993)),d=r(389),m=r(996),f=r(992),v=r(990),y=r(991),h=class extends c.Vue{constructor(){super(...arguments),this.storyImageSizes={small:"offsite_promo_image"}}get OffsiteIcon(){return this.story.description.toLowerCase().replace(" ","")}get keylineColorVar(){return"--keyline-color: ".concat(this.keylineColor)}};Object(o.c)([Object(c.Prop)({default:()=>({})}),Object(o.f)("design:type",Object)],h.prototype,"story",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],h.prototype,"isFirst",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],h.prototype,"isLast",void 0),Object(o.c)([Object(c.Prop)({default:""}),Object(o.f)("design:type",String)],h.prototype,"keylineColor",void 0);var _=h=Object(o.c)([Object(c.Component)({components:{CmsImage:f.default,GlobalLink:v.default,GlobalSvgIcon:y.default}}),Object(n.a)("track-click",Object(m.a)(d.a))],h),x=(r(1785),r(137)),O=Object(x.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesOffsiteCard u-flexbox-column u-flex-grow",class:{isFirst:e.isFirst,isLast:e.isLast}},[t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"offsite_article_link",text:"trackStoriesOffsiteClick",elementType:"LINK",location:e.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'offsite_article_link',\n        text: 'trackStoriesOffsiteClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],staticClass:"u-flexbox-column u-flex-grow",attrs:{to:{name:e.$routeNameForObject(e.story),_object:e.story}}},[t("div",{staticClass:"c-storiesOffsiteCard_header u-flex-grow g-inner-spacing-medium g-inner-spacing-top-large"},[t("div",{staticClass:"c-storiesOffsiteCard_offsiteLabel u-flexbox u-flexbox-alignCenter g-inner-spacing-bottom-medium g-outer-spacing-bottom-medium g-border-thin-light-bottom",style:e.keylineColorVar},[t("GlobalSvgIcon",{staticClass:"c-storiesOffsiteCard_linkIcon",attrs:{id:e.OffsiteIcon}}),e._v(" "),t("span",{staticClass:"c-storiesOffsiteCard_dek g-outer-spacing-left-small u-text-uppercase g-text-xxxsmall"},[e._v(e._s(e.$t("cnet_on",{social:e.story.description})))])],1),e._v(" "),t("h3",{staticClass:"g-text-small c-storiesOffsiteCard_hed"},[e._v(e._s(e.story.title))])]),e._v(" "),t("CmsImage",{staticClass:"c-storiesOffsiteCard_media",attrs:{image:e.story.image,"lazy-load":!0,sizes:e.storyImageSizes}})],1)],1)}),[],!1,null,null,null).exports,C=r(1140),j=r(1040),k=class extends C.a{get keylineColor(){var e,t;return null===(t=null===(e=this.items)||void 0===e?void 0:e[0])||void 0===t?void 0:t.label}},w=k=Object(o.c)([Object(c.Component)({components:{StoriesOffsiteCard:O,StoriesListHorizontal:l.a,StoriesSectionTitle:j.a},mixins:[]})],k),S=(r(1787),Object(x.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.hasValidItems()?t("div",{staticClass:"c-storiesOffsite g-outer-spacing-bottom-xxlarge",attrs:{"data-location":"SECTON"}},[t("StoriesSectionTitle",{staticClass:"c-storiesOffsite_sectionTitle c-storiesOffsite_sectionTitle lg:u-col-12 md:u-col-6 sm:u-col-2 g-inner-spacing-top-medium g-outer-spacing-bottom-large",attrs:{item:e.sectionTitleData}}),e._v(" "),t("StoriesListHorizontal",{staticClass:"xl:u-col-10 c-storiesOffsite_storiesList g-inner-spacing-bottom-medium g-inner-spacing-top-large",attrs:{"control-placement":"top","control-offset":"2.5","card-width":"large"}},e._l(e.items,(function(r,o){return t("StoriesOffsiteCard",{key:"story".concat(o),staticClass:"c-storiesOffsite_storyCard g-dropShadow-default-plusHover",attrs:{"keyline-color":e.keylineColor,story:r,"is-first":0===o,"is-last":o===e.items.length-1}})})),1)],1):e._e()}),[],!1,null,null,null));t.default=S.exports},1943:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(989),l=r(4),n=r(993),d=r(389),m=r(996),f=r(992),v=r(990),y=r(1103);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=class extends c.Vue{get storyImageSizes(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({small:"stories_card"},this.imageSizes)}};Object(o.c)([Object(c.Prop)({default:()=>({})}),Object(o.f)("design:type",Object)],_.prototype,"story",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],_.prototype,"isFirst",void 0),Object(o.c)([Object(c.Prop)({default:!1}),Object(o.f)("design:type",Boolean)],_.prototype,"isLast",void 0),Object(o.c)([Object(c.Prop)({default:""}),Object(o.f)("design:type",String)],_.prototype,"keylineColor",void 0),Object(o.c)([Object(c.Prop)({default:!0,type:Boolean}),Object(o.f)("design:type",Boolean)],_.prototype,"lazyLoad",void 0),Object(o.c)([Object(c.Prop)({default:null,type:Object}),Object(o.f)("design:type",Object)],_.prototype,"imageSizes",void 0);var x=_=Object(o.c)([Object(c.Component)({components:{CmsImage:f.default,GlobalLink:v.default,StoriesMeta:y.a}}),Object(n.a)("track-click",Object(m.a)(d.a))],_),O=(r(1809),r(137)),C=Object(O.a)(x,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesDeepDivesCard u-flexbox-column"},[t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"article_link",text:"trackStoriesDeepDivesClick",elementType:"LINK",location:e.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'article_link',\n        text: 'trackStoriesDeepDivesClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],attrs:{to:{name:e.$routeNameForObject(e.story),params:{slug:e.story.slug},_object:e.story}}},[t("CmsImage",{staticClass:"c-storiesDeepDivesCard_media",attrs:{image:e.story.image,sizes:e.storyImageSizes,"lazy-load":e.lazyLoad}}),e._v(" "),t("StoriesMeta",{staticClass:"c-storiesDeepDivesCard_content u-flex-grow",attrs:{"is-first":e.isFirst,"is-last":e.isLast,"large-hed":!0,"keyline-color":e.keylineColor,story:e.story}})],1)],1)}),[],!1,null,null,null).exports,j=r(1081),k=r(1200),w=r(1140),S=r(1040),H=class extends w.a{get leadStory(){var e,t;return(null===(t=null===(e=this.items)||void 0===e?void 0:e[0])||void 0===t?void 0:t.slug)?this.items[0]:null}get otherStories(){var e,t;return(null===(t=null===(e=this.items)||void 0===e?void 0:e.slice(1,6))||void 0===t?void 0:t.filter((e=>{var t;return null!==(t=null==e?void 0:e.slug)&&void 0!==t&&t})))||[]}get keylineColor(){var e,t;return null===(t=null===(e=this.leadStory)||void 0===e?void 0:e.metaData)||void 0===t?void 0:t.linkUrl}get overlayColor(){var e;return null===(e=this.leadStory)||void 0===e?void 0:e.label}},I=H=Object(o.c)([Object(c.Component)({components:{StoriesDeepDivesCard:C,StoriesHero:k.default,StoriesListHorizontal:j.a,StoriesSectionTitle:S.a},mixins:[]})],H),D=(r(1811),Object(O.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.hasValidItems()?t("div",{staticClass:"c-storiesDeepDives g-outer-spacing-bottom-xxlarge",attrs:{"data-location":"SECTION"}},[t("StoriesHero",{staticClass:"c-storiesDeepDives_leadStory",attrs:{story:e.leadStory,"section-title-data":e.sectionTitleData,"overlay-color":e.overlayColor}}),e._v(" "),t("StoriesListHorizontal",{staticClass:"c-storiesDeepDives_storiesList",attrs:{"control-placement":"bottom","control-offset":"2.25","card-width":"large"}},e._l(e.otherStories,(function(r,o){return t("div",{key:r.id,staticClass:"c-storiesDeepDives_cardWrapper u-flexbox-column u-flex-grow"},[t("StoriesDeepDivesCard",{staticClass:"c-storiesDeepDives_storyCard u-flex-grow g-dropShadow-default-plusHover",attrs:{"is-first":0===o,"is-last":o===e.otherStories.length-1,"keyline-color":e.keylineColor,story:r,"image-sizes":{small:"stories_card_deep_dives"}}})],1)})),0)],1):e._e()}),[],!1,null,null,null));t.default=D.exports}}]);
//# sourceMappingURL=cc60913.modern.js.map