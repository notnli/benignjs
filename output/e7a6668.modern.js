(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1099:function(e,t,o){var content=o(1182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(288).default)("3f051c08",content,!0,{sourceMap:!1})},1103:function(e,t,o){"use strict";o(69);var r=o(0),l=o(989),c=o(25),n=o(990),d=o(73),h=class extends l.Vue{get keylineColorVar(){return"--keyline-color: ".concat(this.keylineColor)}get hasLinkUrl(){var e,t;return!!(null===(t=null===(e=this.story)||void 0===e?void 0:e.metaData)||void 0===t?void 0:t.linkUrl)}get cardHeadingClasses(){return this.isLeadStory?"g-text-large g-inner-spacing-bottom-xlarge":this.largeHed?"g-text-small u-flex-grow c-storiesMeta_hed-large":this.story.image?"g-text-xsmall u-flex-grow":"g-text-small u-flex-grow c-storiesMeta_hed-textOnly"}getAuthorName(e){var t;return null===(t=c.a.deserializeObject(e,d.a))||void 0===t?void 0:t.getFullName()}};Object(r.c)([Object(l.Prop)({default:()=>({})}),Object(r.f)("design:type",Object)],h.prototype,"story",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],h.prototype,"isLeadStory",void 0),Object(r.c)([Object(l.Prop)({default:!0}),Object(r.f)("design:type",Boolean)],h.prototype,"showAuthor",void 0),Object(r.c)([Object(l.Prop)({default:!0}),Object(r.f)("design:type",Boolean)],h.prototype,"enableOverride",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],h.prototype,"isFirst",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],h.prototype,"isLast",void 0),Object(r.c)([Object(l.Prop)({default:""}),Object(r.f)("design:type",String)],h.prototype,"keylineColor",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],h.prototype,"largeHed",void 0);var y=h=Object(r.c)([Object(l.Component)({components:{GlobalLink:n.default}})],h),m=(o(1181),o(137)),component=Object(m.a)(y,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesMeta g-inner-spacing-medium u-flexbox-column",class:{"c-storiesMeta-lead":e.isLeadStory,isFirst:e.isFirst,isLast:e.isLast}},[t("div",{staticClass:"u-flexbox-column u-flex-grow"},[t("h3",{staticClass:"c-storiesMeta_hed g-border-thin-light-bottom g-inner-spacing-bottom-medium g-outer-spacing-bottom-medium",class:e.cardHeadingClasses,style:e.keylineColorVar},[t("span",{staticClass:"c-storiesMeta_hedContent"},[e._v("\n        "+e._s(e.story.title)+"\n      ")])]),e._v(" "),e.isLeadStory?t("p",{staticClass:"c-storiesMeta_dek g-text-xxsmall"},[e._v("\n      "+e._s(e.story.description)+"\n    ")]):e._e(),e._v(" "),!e.showAuthor||!e.story.author||e.enableOverride&&e.hasLinkUrl?e._e():t("div",{staticClass:"c-storiesMeta_author g-text-xxxsmall"},[t("span",[e._v(e._s(e.$t("by")))]),e._v(" "),t("span",[e._v(e._s(e.getAuthorName(e.story.author)))])]),e._v(" "),e.enableOverride&&e.hasLinkUrl?t("span",{staticClass:"c-storiesMeta_storyBadge g-text-xxxsmall u-flexbox u-flexbox-alignCenter"},[e._v("\n      "+e._s(e.story.metaData.linkUrl)+"\n    ")]):e._e()])])}),[],!1,null,null,null);t.a=component.exports},1181:function(e,t,o){"use strict";o(1099)},1182:function(e,t,o){var r=o(287)((function(i){return i[1]}));r.push([e.i,'.c-storiesMeta{--keyline-color: #e71d1d}.c-storiesMeta .c-storiesMeta_hed{transition:color .3s ease-in-out}.c-storiesMeta.isFirst .c-storiesMeta_hed{padding-left:0;margin-left:0}.c-storiesMeta.isLast .c-storiesMeta_hed{padding-right:0;margin-right:0}.c-storiesMeta_hed{border-color:var(--keyline-color);padding-left:1rem;padding-right:1rem;margin-left:-1rem;margin-right:-1rem;color:var(--g-color-text-storiesGrid-primary, #141415)}.c-storiesMeta_hed .c-storiesMeta_hedContent{-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;min-height:4.125rem}.c-storiesMeta_hed-large .c-storiesMeta_hedContent{min-height:5.25rem}.c-storiesMeta_author,.c-storiesMeta_storyBadge{text-transform:uppercase}.c-storiesMeta_author{color:var(--g-color-text-storiesGrid-secondary, #141415)}.c-storiesMeta_storyBadge{position:relative;color:#e71d1d;padding-left:1rem}.c-storiesMeta_storyBadge::after{content:"";display:block;position:absolute;width:8px;height:8px;background-color:#e71d1d;border-radius:100%;animation:g-liveBlink 2s infinite}.c-storiesMeta_storyBadge::after{left:0}.c-storiesMeta_dek{color:var(--g-color-text-storiesGrid-secondary, #141415);-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;min-height:3.75rem}.c-storiesMeta-lead{padding:0}.c-storiesMeta-lead .c-storiesMeta_hed{margin-left:0;margin-right:0;padding-left:0;padding-right:0;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}@media(min-width: 1440px){.c-storiesMeta-lead .c-storiesMeta_hed{flex-basis:50%;padding-bottom:1.5rem;margin-bottom:1.5rem;min-height:7.125rem}}.c-storiesMeta-lead .c-storiesMeta_hedContent{min-height:0}.c-storiesMeta-lead .c-storiesMeta_dek{min-height:0;margin-bottom:0}@media(min-width: 1440px){.c-storiesMeta-lead .c-storiesMeta_dek{font-size:1rem;line-height:1.375rem;min-height:3.75rem}}.c-storiesMeta-lead .c-storiesMeta_author{margin-top:1.5rem}',""]),r.locals={},e.exports=r},1401:function(e,t,o){var content=o(1738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(288).default)("21acdb10",content,!0,{sourceMap:!1})},1402:function(e,t,o){var content=o(1740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(288).default)("44660406",content,!0,{sourceMap:!1})},1403:function(e,t,o){var content=o(1742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(288).default)("68bc70b0",content,!0,{sourceMap:!1})},1486:function(e,t,o){"use strict";o.r(t);var r=o(0),l=o(989),c=o(4),n=o(993),d=o(389),h=o(996),y=o(992),m=o(990),f=o(1103);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var O=class extends l.Vue{get storyImageSizes(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({small:"stories_card"},this.imageSizes)}};Object(r.c)([Object(l.Prop)({default:()=>({})}),Object(r.f)("design:type",Object)],O.prototype,"story",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],O.prototype,"isFirst",void 0),Object(r.c)([Object(l.Prop)({default:!1}),Object(r.f)("design:type",Boolean)],O.prototype,"isLast",void 0),Object(r.c)([Object(l.Prop)({default:""}),Object(r.f)("design:type",String)],O.prototype,"keylineColor",void 0),Object(r.c)([Object(l.Prop)({default:!0,type:Boolean}),Object(r.f)("design:type",Boolean)],O.prototype,"lazyLoad",void 0),Object(r.c)([Object(l.Prop)({default:null,type:Object}),Object(r.f)("design:type",Object)],O.prototype,"imageSizes",void 0);var _=O=Object(r.c)([Object(l.Component)({components:{CmsImage:y.default,GlobalLink:m.default,StoriesMeta:f.a}}),Object(n.a)("track-click",Object(h.a)(d.a))],O),j=(o(1737),o(137)),x=Object(j.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesHighlightsCard u-flexbox-column"},[t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"article_link",text:"trackStoriesHighlightsClick",elementType:"LINK",location:e.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'article_link',\n        text: 'trackStoriesHighlightsClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],attrs:{to:{name:e.$routeNameForObject(e.story),params:{slug:e.story.slug},_object:e.story}}},[t("CmsImage",{staticClass:"c-storiesHighlightsCard_media",attrs:{image:e.story.image,sizes:e.storyImageSizes,"lazy-load":e.lazyLoad}}),e._v(" "),t("StoriesMeta",{staticClass:"c-storiesHighlightsCard_content u-flex-grow",attrs:{"is-first":e.isFirst,"is-last":e.isLast,"keyline-color":e.keylineColor,story:e.story}})],1)],1)}),[],!1,null,null,null).exports,k=(o(6),o(7),class extends l.Vue{constructor(){super(...arguments),this.leadStoryImageSizes={small:"stories_card_lead_small",medium:"stories_card_lead_medium",large:"stories_card_lead_large"},this.storyImageSizes={small:"stories_card"}}get storyIsValid(){var e;return null===(e=this.story)||void 0===e?void 0:e.slug}});Object(r.c)([Object(l.Prop)({default:()=>({})}),Object(r.f)("design:type",Object)],k.prototype,"story",void 0),Object(r.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(r.f)("design:type",Boolean)],k.prototype,"isLeadStory",void 0),Object(r.c)([Object(l.Prop)({default:"",type:String}),Object(r.f)("design:type",String)],k.prototype,"keylineColor",void 0),Object(r.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(r.f)("design:type",Boolean)],k.prototype,"preload",void 0),Object(r.c)([Object(l.Prop)({default:!0,type:Boolean}),Object(r.f)("design:type",Boolean)],k.prototype,"lazyLoad",void 0);var C=k=Object(r.c)([Object(l.Component)({components:{CmsImage:y.default,GlobalLink:m.default,StoriesMeta:f.a}}),Object(n.a)("track-click",Object(h.a)(d.a))],k),w=(o(1739),Object(j.a)(C,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-storiesHighlightsLead"},[e.storyIsValid?t("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:e.$attributeRef.href,webElement:{name:"article_link",text:"trackStoriesHighlightsClick",elementType:"LINK",location:e.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'article_link',\n        text: 'trackStoriesHighlightsClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],attrs:{to:{name:e.$routeNameForObject(e.story),params:{slug:e.story.slug},_object:e.story}}},[t("div",{staticClass:"c-storiesHighlightsLead_grid u-grid-columns"},[t("div",{staticClass:"c-storiesHighlightsLead_media lg:u-col-6 md:u-col-6 sm:u-col-2"},[t("CmsImage",{attrs:{image:e.story.image,"lazy-load":e.lazyLoad,sizes:e.leadStoryImageSizes,preload:e.preload}})],1),e._v(" "),t("StoriesMeta",{staticClass:"c-storiesHighlightsLead_content u-flex-grow lg:u-col-4 md:u-col-6 sm:u-col-2",attrs:{"is-lead-story":!0,"keyline-color":e.keylineColor,story:e.story}})],1)]):e._e()],1)}),[],!1,null,null,null).exports),M=o(1081),L=o(1140),S=o(1040),H=class extends L.a{get leadStory(){return this.hasValidItems()?this.items[0]:null}get otherStories(){var e;return this.hasValidItems()?null===(e=this.items)||void 0===e?void 0:e.slice(1,6):[]}get keylineColor(){var e;return null===(e=this.leadStory)||void 0===e?void 0:e.label}};Object(r.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(r.f)("design:type",Boolean)],H.prototype,"useDatelineLayout",void 0),Object(r.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(r.f)("design:type",Boolean)],H.prototype,"preloadLeader",void 0),Object(r.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(r.f)("design:type",Boolean)],H.prototype,"hideBorder",void 0),Object(r.c)([Object(l.Prop)({default:!0,type:Boolean}),Object(r.f)("design:type",Boolean)],H.prototype,"lazyLoad",void 0);var P=H=Object(r.c)([Object(l.Component)({components:{StoriesHighlightsCard:x,StoriesHighlightsLead:w,StoriesListHorizontal:M.a,StoriesSectionTitle:S.a},mixins:[]})],H),B=(o(1741),Object(j.a)(P,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.hasValidItems()?t("div",{staticClass:"c-storiesHighlights g-outer-spacing-bottom-xxlarge",attrs:{"data-location":"SECTION"}},[t("div",{staticClass:"g-grid-container u-grid-columns c-storiesHighlights_mainContent",class:{"g-border-thin-dark-top":!e.hideBorder}},[t("div",{staticClass:"xl:u-col-2 lg:u-col-12 md:u-col-6 sm:u-col-2 g-outer-spacing-top-medium"},[t("StoriesSectionTitle",{staticClass:"c-storiesHighlights_sectionTitle",class:{"lg:u-col-hide md:u-col-hide sm:u-col-hide":e.useDatelineLayout},attrs:{item:e.sectionTitleData,"use-dateline-layout":e.useDatelineLayout}})],1),e._v(" "),t("div",{staticClass:"c-storiesHighlights_leadStory xl:u-col-10 lg:u-col-12 md:u-col-6 sm:u-col-2"},[t("StoriesHighlightsLead",{staticClass:"c-storiesHighlights_storyLead g-outer-spacing-bottom-large",attrs:{"keyline-color":e.keylineColor,story:e.leadStory,preload:e.preloadLeader,"lazy-load":e.lazyLoad}})],1)]),e._v(" "),t("StoriesListHorizontal",{attrs:{"control-placement":"bottom","control-offset":"2.25","card-width-min":"small","card-width-max":"medium"}},e._l(e.otherStories,(function(o,r){return t("StoriesHighlightsCard",{key:o.id,staticClass:"c-storiesHighlights_storyCard g-dropShadow-default-plusHover",attrs:{"keyline-color":e.keylineColor,"lazy-load":e.lazyLoad,story:o,"is-first":0===r,"is-last":r===e.otherStories.length-1}})})),1),e._v(" "),e.useDatelineLayout?t("StoriesSectionTitle",{staticClass:"g-grid-container xl:u-col-hide g-outer-spacing-top-medium",attrs:{item:e.sectionTitleData,"use-dateline-layout":e.useDatelineLayout}}):e._e()],1):e._e()}),[],!1,null,null,null));t.default=B.exports},1737:function(e,t,o){"use strict";o(1401)},1738:function(e,t,o){var r=o(287)((function(i){return i[1]}));r.push([e.i,".c-storiesHighlightsCard{background-color:#fff;overflow:hidden;border-radius:.25rem}",""]),r.locals={},e.exports=r},1739:function(e,t,o){"use strict";o(1402)},1740:function(e,t,o){var r=o(287)((function(i){return i[1]}));r.push([e.i,".c-storiesHighlightsLead:hover{--g-color-text-storiesGrid-primary: $cmg-color-link-hover}@media(min-width: 1024px){.c-storiesHighlightsLead_grid{--grid-cols: 10}}@media(max-width: 1023px){.c-storiesHighlightsLead_content{padding-right:0}}.c-storiesHighlightsLead_media{border-radius:.25rem;overflow:hidden;aspect-ratio:1.7777777778}",""]),r.locals={},e.exports=r},1741:function(e,t,o){"use strict";o(1403)},1742:function(e,t,o){var r=o(287)((function(i){return i[1]}));r.push([e.i,".c-storiesHighlights{--truncate-background-color: #0ff;--g-color-text-storiesGrid-primary: #141415;--g-color-text-storiesGrid-secondary: #737373;--stories-list-xl-padding-right: calc((100vw - calc(1440px - 2 * 72px)) * 0.5)}@media(min-width: 1440px){.c-storiesHighlights_sectionTitle{display:block}}.c-storiesHighlights_mainContent{row-gap:0}@media(min-width: 1440px){.c-storiesHighlights_leadStory{margin-top:1.5rem}}.c-storiesHighlights_storyCard{background-color:#fff;transition:box-shadow .3s ease-in-out}.c-storiesHighlights_storyCard:nth-child(even){background-color:#000;--g-color-text-storiesGrid-primary: rgb(255, 255, 255);--g-color-text-storiesGrid-secondary: #dadada}.c-storiesHighlights_storyCard:hover{--g-color-text-storiesGrid-primary: $cmg-color-link-hover}",""]),r.locals={},e.exports=r}}]);
//# sourceMappingURL=e7a6668.modern.js.map