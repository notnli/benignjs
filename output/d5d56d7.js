(window.webpackJsonp=window.webpackJsonp||[]).push([[151,61,66],{1070:function(t,e,n){"use strict";n.r(e);n(8),n(13);var r,o=n(2),c=n(3),l=n(7),f=n(10),d=n(4),v=(n(22),n(0)),m=n(1069),h=n(452),y=n(102),O=n(451);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t){Object(l.a)(n,t);var e=j(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(t){var e,n,r,o,c,l,f,d,v=null,m=null,j=this.to;if("string"!=typeof j)(null==j?void 0:j.name)&&(Object(y.b)(j.name)===j.name&&(j.name=Object(y.a)(j.name,this.$i18n.locale)),j=this.$router.resolve(j).route);else{var k=this.$router.resolve(this.to);k.route.name&&(j=k.route)}if(j&&"string"!=typeof j)if(j.name){this.$di.getInstance(h.a).hasRoute(j.name)?(v="a",m={attrs:{href:this.localePath(j)}}):this.$services.isFeatureEnabled("clientNavigation")?(v="NuxtLink",m={props:{to:j}}):(v="a",m={attrs:{href:null!==(c=j.fullPath)&&void 0!==c?c:j.path}})}else{var _=(null===(n=null===(e=j._object)||void 0===e?void 0:e.metaData)||void 0===n?void 0:n.linkUrl)||(null===(r=j._object)||void 0===r?void 0:r.linkUrl)||(null===(o=j._object)||void 0===o?void 0:o.href);_?(v="a",m={attrs:{href:_}}):(v="template",m={})}else v="a",m={attrs:{href:this.to}};if(null===(l=null==m?void 0:m.attrs)||void 0===l?void 0:l.href){var x=Object(O.b)(null===(f=null==m?void 0:m.attrs)||void 0===f?void 0:f.href);x===O.a&&this.target&&(m.attrs.target="_blank"),m.attrs.rel=x}else(null===(d=null==m?void 0:m.props)||void 0===d?void 0:d.to)&&this.target&&(m.attrs={target:"_blank"});if(v)return t(v,m,this.$slots.default)}}]),n}(m.Vue);Object(v.c)([Object(m.Prop)({default:function(){return null},type:[String,Object]}),Object(v.f)("design:type",Object)],k.prototype,"to",void 0),Object(v.c)([Object(m.Prop)({default:!1,type:Boolean}),Object(v.f)("design:type","function"==typeof(r="undefined"!=typeof Boolean&&Boolean)?r:Object)],k.prototype,"target",void 0);var _=k=Object(v.c)([Object(m.Component)({})],k),x=n(166),component=Object(x.a)(_,undefined,undefined,!1,null,null,null);e.default=component.exports},1071:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(24);var r=n(450);function o(t){return{bind:t.bind?function(){return t.bind.apply(t,arguments)}:function(){},componentUpdated:t.componentUpdated?function(){return t.componentUpdated.apply(t,arguments)}:function(){},inserted:t.inserted?function(){return t.inserted.apply(t,arguments)}:function(){},unbind:t.unbind?function(){return t.unbind.apply(t,arguments)}:function(){},update:t.update?function(){return t.update.apply(t,arguments)}:function(){}}}function c(t,e){var n=new e;return Object(r.createDecorator)((function(e){e.directives=(null==e?void 0:e.directives)||{},e.directives[t]=o(n)}))}},1073:function(t,e,n){"use strict";n.r(e);n(8),n(13);var r=n(2),o=n(3),c=n(7),l=n(10),f=n(4),d=n(0),v=n(1069);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"hashedId",get:function(){return"#"+this.id}}]),n}(v.Vue);Object(d.c)([Object(v.Prop)({default:null,type:String}),Object(d.f)("design:type",String)],h.prototype,"id",void 0),Object(d.c)([Object(v.Prop)({default:null,type:String}),Object(d.f)("design:type",String)],h.prototype,"title",void 0),Object(d.c)([Object(v.Prop)({default:null,type:String}),Object(d.f)("design:type",String)],h.prototype,"classes",void 0);var y=h=Object(d.c)([Object(v.Component)({})],h),O=n(166),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"c-globalSvgIcon",class:t.classes,attrs:{"aria-hidden":"true"}},[t.title?[e("title",[t._v(t._s(t.title))])]:t._e(),t._v(" "),e("use",{attrs:{"xlink:href":t.hashedId}})],2)}),[],!1,null,null,null);e.default=component.exports},1076:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(8),n(13);var r=n(7),o=n(10),c=n(4),l=n(2),f=n(3),d=n(453);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var l=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(){function t(){Object(l.a)(this,t)}return Object(f.a)(t,[{key:"bind",value:function(t,e,n){var r=this,o=e.arg,c=e.value,l=n.context;this.action=function(){var e,n=l.$track(r.eventType);(e="function"==typeof c?n.create(c):n.with(c).create()).trackingData=d.a.replaceAttributeReferences(t,e.trackingData),e.fire()},t.addEventListener(o||"mousedown",this.action)}},{key:"unbind",value:function(t,e){var n=e.arg;e.value;t.removeEventListener(n||"mousedown",this.action)}}]),t}();function h(t){return function(e){Object(r.a)(o,e);var n=v(o);function o(){return Object(l.a)(this,o),n.apply(this,arguments)}return Object(f.a)(o,[{key:"eventType",get:function(){return t}}]),o}(m)}},1126:function(t,e,n){"use strict";n(8),n(13);var r=n(2),o=n(3),c=n(7),l=n(10),f=n(4),d=(n(14),n(39),n(0)),v=n(1069),m=n(1071),h=n(449),y=n(1076),O=n(141),j=n(1070),k=n(1073);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t){Object(c.a)(n,t);var e=_(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"sectionDescription",get:function(){var t,e;return this.useDatelineLayout?null===(t=this.item)||void 0===t?void 0:t.title:null===(e=this.item)||void 0===e?void 0:e.description}},{key:"todaysDate",get:function(){var t=new Date;return O.a.getIntlDateFormatString(t,"medium",this.$i18n.locale)+","}}]),n}(v.Vue);Object(d.c)([Object(v.Prop)({default:function(){return{}}}),Object(d.f)("design:type",Object)],x.prototype,"item",void 0),Object(d.c)([Object(v.Prop)({default:!1,type:Boolean}),Object(d.f)("design:type",Boolean)],x.prototype,"useDatelineLayout",void 0);var S=x=Object(d.c)([Object(v.Component)({components:{GlobalSvgIcon:k.default,GlobalLink:j.default},mixins:[]}),Object(m.a)("track-click",Object(y.a)(h.a))],x),T=(n(1218),n(166)),component=Object(T.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-storiesSectionTitle"},[t.item.linkUrl?e("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:t.$attributeRef.href,webElement:{name:"section_meta_link",text:"trackStorySectionClick",elementType:"LINK",location:t.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'section_meta_link',\n        text: 'trackStorySectionClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],staticClass:"c-storiesSectionTitle_link g-text-xxxsmall u-flexbox u-flexbox-alignCenter u-float-right",class:t.useDatelineLayout?"u-hidden":"",attrs:{to:{_object:t.item}}},[t._v("\n    "+t._s(t.item.linkText)+"\n    "),e("GlobalSvgIcon",{staticClass:"c-storiesSectionTitle_linkIcon",attrs:{id:"arrow-horizontal"}})],1):t._e(),t._v(" "),e("h2",{staticClass:"c-storiesSectionTitle_heading g-text-medium g-outer-spacing-bottom-medium"},[t.useDatelineLayout?e("span",[t._v(t._s(t._f("apDate")(t.todaysDate)))]):e("span",[t._v(t._s(t.item.title))])]),t._v(" "),t.sectionDescription?e("p",{staticClass:"c-storiesSectionTitle_description g-text-xxsmall g-outer-spacing-bottom-medium g-color-text-meta"},[t._v("\n    "+t._s(t.sectionDescription)+"\n  ")]):t._e(),t._v(" "),t.item.linkUrl?e("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:t.$attributeRef.href,webElement:{name:"section_meta_link",text:"trackStorySectionClick",elementType:"LINK",location:t.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'section_meta_link',\n        text: 'trackStorySectionClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],staticClass:"c-storiesSectionTitle_link g-text-xxxsmall u-flexbox u-flexbox-alignCenter",class:t.useDatelineLayout?"c-storiesSectionTitle_link-wide":"c-storiesSectionTitle_link-narrow",attrs:{to:{_object:t.item}}},[t._v("\n    "+t._s(t.item.linkText)+"\n    "),e("GlobalSvgIcon",{staticClass:"c-storiesSectionTitle_linkIcon",attrs:{id:"arrow-horizontal"}})],1):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},1155:function(t,e,n){var content=n(1219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(345).default)("84d5484c",content,!0,{sourceMap:!1})},1218:function(t,e,n){"use strict";n(1155)},1219:function(t,e,n){var r=n(344)((function(i){return i[1]}));r.push([t.i,".c-storiesSectionTitle_heading{display:block;color:var(--g-color-text-storiesGrid-primary, #141415)}.c-storiesSectionTitle_description{color:var(--g-color-text-storiesGrid-secondary, #737373)}.c-storiesSectionTitle_link{color:var(--g-color-text-storiesGrid-primary, #141415);transition:color .3s ease-in-out;margin-inline-start:1rem;line-height:1.75rem;display:flex}.c-storiesSectionTitle_link:hover{color:#e71d1d}.c-storiesSectionTitle_link:hover .c-storiesSectionTitle_linkIcon{fill:#e71d1d}@media(min-width: 1440px){.c-storiesSectionTitle_link{display:none}}.c-storiesSectionTitle_link-wide{display:flex;margin-inline-start:0}.c-storiesSectionTitle_link-narrow{display:none}@media(min-width: 1440px){.c-storiesSectionTitle_link-narrow{display:flex;margin-inline-start:0;line-height:1.5rem}}.c-storiesSectionTitle_linkIcon{fill:var(--g-color-text-storiesGrid-primary, #141415);display:inline-block;width:13px;height:8px;margin-left:.5rem;transition:fill .3s ease-in-out}",""]),r.locals={},t.exports=r},1488:function(t,e,n){var content=n(1827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(345).default)("1a28729c",content,!0,{sourceMap:!1})},1826:function(t,e,n){"use strict";n(1488)},1827:function(t,e,n){var r=n(344)((function(i){return i[1]}));r.push([t.i,".c-storiesTrending{grid-template-columns:repeat(auto-fill, minmax(196px, 306px));grid-auto-columns:minmax(196px, 306px);grid-auto-flow:column;overflow-x:auto;overflow:scroll;overflow-y:hidden;scrollbar-width:none}.c-storiesTrending::-webkit-scrollbar{width:0;height:0;background:rgba(0,0,0,0)}.c-storiesTrending::-webkit-scrollbar-thumb{background:rgba(0,0,0,0)}@media(min-width: 1024px){.c-storiesTrending{grid-template-columns:repeat(var(--grid-cols), 1fr);grid-auto-flow:unset}}.c-storiesTrending_story{transition:color .3s ease-in-out}@media(min-width: 1024px){.c-storiesTrending_story{border-bottom:1px solid #dadada}.c-storiesTrending_story:nth-last-child(-n+5){border-bottom:0}}.c-storiesTrending_hed{-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;min-height:4.125rem}@media(min-width: 1024px){.c-storiesTrending_hed{margin-bottom:1.5rem}}",""]),r.locals={},t.exports=r},2152:function(t,e,n){"use strict";n.r(e);n(13);var r=n(2),o=n(3),c=n(7),l=n(10),f=n(4),d=(n(20),n(8),n(0)),v=n(1069),m=n(1071),h=n(449),y=n(18),O=n(1076),j=n(1070),k=n(1126);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=new y.b("storiestrending"),S=function(t){Object(c.a)(n,t);var e=_(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"stories",get:function(){var t,e,n=(null===(e=null===(t=this.component)||void 0===t?void 0:t.items)||void 0===e?void 0:e.filter((function(t){var e,n;return null!==(n=t.slug||(null===(e=t.metaData)||void 0===e?void 0:e.linkUrl))&&void 0!==n&&n})))||[];return 0===n.length&&x.error("StoriesTrending received no valid items: ".concat(JSON.stringify(this.component))),n}}]),n}(v.Vue);Object(d.c)([Object(v.Prop)({default:null,type:Object}),Object(d.f)("design:type",Object)],S.prototype,"component",void 0);var T=S=Object(d.c)([Object(v.Component)({components:{GlobalLink:j.default,StoriesSectionTitle:k.a},mixins:[]}),Object(m.a)("track-click",Object(O.a)(h.a))],S),w=(n(1826),n(166)),component=Object(w.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.stories.length>0?e("div",{staticClass:"c-storiesTrending g-grid-container u-grid-columns g-inner-spacing-top-medium g-inner-spacing-bottom-medium g-outer-spacing-bottom-large g-border-thin-dark-top",attrs:{"data-location":"SECTION"}},[e("StoriesSectionTitle",{staticClass:"xl:u-col-2 g-text-medium",attrs:{item:{title:t.component.title}}}),t._v(" "),t._l(t.stories,(function(n,r){return e("GlobalLink",{directives:[{name:"track-click",rawName:"v-track-click",value:{outboundUrl:t.$attributeRef.href,webElement:{name:"article_link",text:"trackStoriesTrendingClick",elementType:"LINK",location:t.$attributeRef.location}},expression:"{\n      outboundUrl: $attributeRef.href,\n      webElement: {\n        name: 'article_link',\n        text: 'trackStoriesTrendingClick',\n        elementType: 'LINK',\n        location: $attributeRef.location\n      }\n    }"}],key:n.id,staticClass:"c-storiesTrending_story lg:u-col-2",class:{"lg:u-col-start-3":!(r%5)},attrs:{to:{name:t.$routeNameForObject(n),params:{slug:n.slug},_object:n}}},[e("h3",{staticClass:"c-storiesTrending_hed g-text-xsmall"},[t._v(t._s(n.title))])])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=d5d56d7.js.map