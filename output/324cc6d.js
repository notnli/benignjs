(window.webpackJsonp=window.webpackJsonp||[]).push([[65,8,11,25,45,48],{419:function(t,e,n){t.exports=n.p+"img/no_img.0bc50b7.png"},421:function(t,e,n){t.exports=n.p+"img/fire.db0ccc2.svg"},422:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjQ5OTk1IDAuNDk4MjQyQzIuMDk5OTUgMC4wOTgyNDIyIDEuNDk5OTUgMC4wOTgyNDIyIDEuMDk5OTUgMC40OTgyNDJDMC42OTk5NTEgMC44OTgyNDIgMC42OTk5NTEgMS40OTgyNCAxLjA5OTk1IDEuODk4MjRMMy4yOTk5NSA0LjE5ODI0TDAuOTk5OTUxIDYuNDk4MjRDMC43OTk5NTEgNi42OTgyNCAwLjY5OTk1MSA2Ljg5ODI0IDAuNjk5OTUxIDcuMTk4MjRDMC42OTk5NTEgNy43OTgyNCAxLjA5OTk1IDguMTk4MjQgMS42OTk5NSA4LjE5ODI0QzEuOTk5OTUgOC4xOTgyNCAyLjE5OTk1IDguMDk4MjQgMi4zOTk5NSA3Ljg5ODI0TDUuMzk5OTUgNC44OTgyNEM1Ljc5OTk1IDQuNDk4MjQgNS43OTk5NSAzLjg5ODI0IDUuMzk5OTUgMy40OTgyNEwyLjQ5OTk1IDAuNDk4MjQyWk0xMSAzLjQ5ODI0TDcuOTk5OTUgMC40OTgyNDJDNy41OTk5NSAwLjA5ODI0MjIgNi45OTk5NSAwLjA5ODI0MjIgNi41OTk5NSAwLjQ5ODI0MkM2LjE5OTk1IDAuODk4MjQyIDYuMTk5OTUgMS40OTgyNCA2LjU5OTk1IDEuODk4MjRMOC44OTk5NSA0LjE5ODI0TDYuNTk5OTUgNi40OTgyNEM2LjM5OTk1IDYuNjk4MjQgNi4yOTk5NSA2Ljg5ODI0IDYuMjk5OTUgNy4xOTgyNEM2LjI5OTk1IDcuNzk4MjQgNi42OTk5NSA4LjE5ODI0IDcuMjk5OTUgOC4xOTgyNEM3LjU5OTk1IDguMTk4MjQgNy43OTk5NSA4LjA5ODI0IDcuOTk5OTUgNy44OTgyNEwxMSA0Ljg5ODI0QzExLjMgNC40OTgyNCAxMS4zIDMuODk4MjQgMTEgMy40OTgyNFoiIGZpbGw9IiNGRjcyMDAiLz4KPC9zdmc+Cg=="},456:function(t,e,n){"use strict";n.r(e);n(88);var r={name:"collection-card",props:{article:Object},methods:{imgError:function(img){img.src=n(419)}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"collection__card"},[e("a",{staticClass:"collection__link",attrs:{href:t.article.link,target:"_blank",rel:"noreferrer noopenner"}},[t.article.image?e("img",{staticClass:"collection__img",attrs:{src:t.article.image,alt:"article image",rel:"noreferrer noopenner",loading:"lazy"},on:{error:function(e){return t.imgError(e.target)}}}):e("img",{staticClass:"collection__img",attrs:{src:n(419),alt:"article image",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"collection__text"},[e("a",{attrs:{href:t.article.author.link,target:"_blank",rel:"noreferrer noopenner"}},[e("p",{staticClass:"collection__user-info"},[t._v(t._s(t.article.author.displayname)+"．"+t._s(t.article.date))])]),t._v(" "),e("a",{attrs:{href:t.article.link,target:"_blank",rel:"noreferrer noopenner"}},[e("p",{staticClass:"collection__title"},[t._v(t._s(t.article.title))])])])])}),[],!1,null,null,null);e.default=component.exports},465:function(t,e,n){"use strict";n.r(e);n(29),n(28),n(21),n(24),n(35),n(36);var r=n(1),o=n(13),c=(n(16),n(7),n(22),n(14));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"tag-index-container",components:{FalconAd:n(450).default},data:function(){return{isVisible:!0}},computed:{tag_data:function(){return this.$store.state.tag.index_tag_data},model_id:function(){return this.$store.state.tag.searchtext_model_id}},methods:d(d({},Object(c.b)("tag",["getAllSiteTagData"])),{},{paFunction:function(text,t){var e=1+(t+1)/1e4;window._piq.push(["trackEvent","rs2022::十大頻道::首頁","imps::熱搜關鍵字::hashtag_card::"+this.model_id,"熱搜關鍵字::"+text,e])},paClickFunction:function(text,t){var e=1+(t+1)/1e4;window._piq.push(["trackEvent","rs2022::十大頻道::首頁","click::熱搜關鍵字::hashtag_card::"+this.model_id,"熱搜關鍵字::"+text,e])},visibilityChanged:function(t,e){var n=this;this.isVisible=t,e.intersectionRatio>0&&this.tag_data.forEach((function(t,e){n.paFunction(t.name,e)}))}}),fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllSiteTagData();case 2:case"end":return e.stop()}}),e)})))()}},v=n(6),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{\n            callback: visibilityChanged,\n            once: true,\n         }"}],staticClass:"index-tag"},[e("div",{staticClass:"index-tag__title"},[t._v("熱搜關鍵字")]),t._v(" "),e("div",{staticClass:"index-tag__tag-container"},t._l(t.tag_data,(function(n,r){return e("div",{key:r,staticClass:"index-tag__tag"},[e("a",{attrs:{href:"https://www.pixnet.net/ppage/".concat(n.name),target:"_blank",rel:"noreferrer noopenner"},on:{click:function(e){return t.paClickFunction(n.name,r)}}},[t._v("\n                "+t._s(n.name)+"\n            ")])])})),0),t._v(" "),e("div",{staticClass:"pix-ad"},[e("FalconAd",{attrs:{adSlot:4697,ratio:.83,radius:!1}})],1)])}),[],!1,null,null,null);e.default=component.exports},466:function(t,e,n){"use strict";n.r(e);n(88);var r=[function(){var t=this._self._c;return t("a",{staticClass:"blogger-ranking__hundred",attrs:{href:"https://pixranking.events.pixnet.net/personalrank/?category=16"}},[this._v("前100名完整榜單 "),t("img",{attrs:{src:n(422)}})])}],o=(n(28),n(21),n(24),n(7),n(35),n(22),n(36),n(1)),c=n(13),l=(n(16),n(40),n(14));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"blogger-ranking",data:function(){return{rank_status:1,params:{page_size:5,with_blog:1,with_counter:1,with_articles:1,with_profile:1},pa_text:"熱門",isVisible:!0}},computed:{top_one:function(){return this.$store.state.blogger.blogger_top_rank},other_blogger:function(){return this.$store.state.blogger.blogger_ranking_data.slice(1)},all_blogger:function(){return this.$store.state.blogger.blogger_ranking_data},model_id:function(){return this.$store.state.blogger.blogger_top_rank_model_id}},methods:_(_({},Object(l.b)("blogger",["getBloggerTopRankingData","getBloggerNewRankingData"])),{},{switchBloggerRank:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.rank_status==t){n.next=11;break}if(e.rank_status=t,1!=e.rank_status){n.next=8;break}return e.pa_text="熱門",n.next=6,e.$store.dispatch("blogger/getBloggerTopRankingData",e.params);case 6:n.next=11;break;case 8:return e.pa_text="新星",n.next=11,e.$store.dispatch("blogger/getBloggerNewRankingData",e.params);case 11:case"end":return n.stop()}}),n)})))()},formatteNumber:function(t){return new Intl.NumberFormat("zh-Hant-TW",{style:"decimal",minimumFractionDigits:0}).format(t)},paFunction:function(t,e){window._piq.push(["trackEvent","rs2022::十大頻道::首頁","imps::部落客排行::blogger_card::"+this.model_id,"部落客排行/"+this.pa_text+"::"+t,"1.000"+e])},paClickFunction:function(t,e){window._piq.push(["trackEvent","rs2022::十大頻道::首頁","click::部落客排行::blogger_card::"+this.model_id,"部落客排行/"+this.pa_text+"::"+t,"1.000"+e])},visibilityChanged:function(t,e){if(this.isVisible=t,e.intersectionRatio>0)for(var i=0;i<5;i++){var n=this.all_blogger[i].displayname+"/"+this.all_blogger[i].articles.user;this.paFunction(n,i+1)}}}),fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("blogger/getBloggerTopRankingData",t.params);case 2:case"end":return e.stop()}}),e)})))()}},f=n(6),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{\n            callback: visibilityChanged,\n            once: true,\n         }"}],staticClass:"blogger-ranking"},[e("div",{staticClass:"blogger-ranking__title"},[e("div",{staticClass:"text"},[t._v("\n            部落客排行\n        ")]),t._v(" "),e("div",{staticClass:"switch"},[e("div",{staticClass:"hot",class:{active:1==t.rank_status},on:{click:function(e){return t.switchBloggerRank(1)}}},[e("img",{attrs:{src:n(421)}}),t._v(" 熱門\n            ")]),t._v(" "),e("div",{staticClass:"new",class:{active:2==t.rank_status},on:{click:function(e){return t.switchBloggerRank(2)}}},[e("img",{attrs:{src:n(421)}}),t._v(" 新星\n            ")])])]),t._v(" "),null!=this.top_one&&null!=this.top_one?e("div",{staticClass:"blogger-ranking__top"},[e("div",{staticClass:"top-photo"},[e("div",{staticClass:"crown"}),t._v(" "),e("div",{staticClass:"member-photo",style:{backgroundImage:"url(".concat(this.top_one.avatar,")")}}),t._v(" "),e("div",{staticClass:"bg-photo"})]),t._v(" "),this.top_one.displayname?e("div",{staticClass:"blogger-title"},[t._v("\n            1. "+t._s(this.top_one.displayname)+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"total-article"},[e("span",[t._v(t._s(t.formatteNumber(this.top_one.counter.post_count)))]),t._v(" 篇文章")]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(this.top_one.profile.self_intro))]),t._v(" "),e("div",{staticClass:"first-article"},[e("div",{staticClass:"article-photo"},[""!=t.top_one.articles.articles[0].image&&null!=t.top_one.articles.articles[0].image&&null!=t.top_one.articles.articles[0].image?e("img",{attrs:{src:this.top_one.articles.articles[0].image,alt:"article image",loading:"lazy"},on:{error:function(e){return t.imgError(e.target)}}}):e("img",{attrs:{src:n(419),alt:"article image",loading:"lazy"}})]),t._v(" "),0!=t.top_one.articles.articles.length?e("div",{staticClass:"article-title"},[t._v(t._s(t.top_one.articles.articles[0].title))]):t._e()]),t._v(" "),t.top_one&&0!=t.top_one.articles.articles.length?e("a",{attrs:{href:"".concat(t.top_one.articles.articles[0].link)},on:{click:function(e){return t.paClickFunction(t.top_one.displayname+"/"+t.top_one.articles.user,1)}}},[t._v("\n            "+t._s(t.top_one.articles.articles[0].title)+"\n        ")]):t._e()]):t._e(),t._v(" "),t.other_blogger!=[]?e("div",{staticClass:"blogger-ranking__other"},t._l(t.other_blogger,(function(n,r){return t.other_blogger?e("div",{key:r,staticClass:"blogger-ranking__element"},[e("div",{staticClass:"crown",class:"rank_"+r}),t._v(" "),e("div",{staticClass:"photo",style:{backgroundImage:"url(".concat(n.avatar,")")}}),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"blogger-title"},[t._v("\n                    "+t._s(r+2)+". "+t._s(n.displayname)+"    \n                ")]),t._v(" "),e("div",{staticClass:"total-article"},[e("span",[t._v(t._s(t.formatteNumber(n.counter.post_count)))]),t._v(" 篇文章")]),t._v(" "),0!=n.articles.articles.length?e("div",{staticClass:"first-article"},[t._v(t._s(n.articles.articles[0].title))]):t._e()]),t._v(" "),0!=n.articles.articles.length?e("a",{attrs:{href:"".concat(n.articles.articles[0].link)},on:{click:function(e){return t.paClickFunction(n.displayname+"/"+n.articles.user,r+2)}}},[t._v("\n                "+t._s(n.articles.articles[0].title)+"\n            ")]):t._e()]):t._e()})),0):t._e(),t._v(" "),t._m(0)])}),r,!1,null,null,null);e.default=component.exports},467:function(t,e,n){"use strict";n.r(e);n(21),n(54);var r=[function(){var t=this._self._c;return t("a",{staticClass:"advertise__more",attrs:{target:"_blank",rel:"noreferrer noopenner",href:"https://channel.pixnet.net/events"}},[this._v("更多主題策展 "),t("img",{attrs:{src:n(422)}})])}],o=(n(28),n(24),n(7),n(35),n(22),n(36),n(1)),c=n(13),l=(n(16),n(27),n(53),n(494)),d=n(469),_=n(14);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"advertise-container",computed:{advertise_list:function(){return this.$store.state.advertise.advertise_list}},data:function(){return{pa_count:1}},methods:f(f({},Object(_.b)("advertise",["getAdvertiseList"])),{},{setSwiper:function(){l.a.use([d.a]),this.swiper=new l.a(".advertise",{direction:"horizontal",observer:!0,centeredSlides:!0,loop:!0,loopedSlides:50,modules:[d.a],autoplay:{delay:3e3}})},paFunction:function(t,link,e){var n=link.replace("https://","http://");window._piq.push(["trackEvent","rs2022::十大頻道::首頁","imps::活動::article_card::"+t,"活動::"+n,"1.000"+e])},paClickFunction:function(t,link,e){var n=link.replace("https://","http://");window._piq.push(["trackEvent","rs2022::十大頻道::首頁","click::活動::article_card::"+t,"活動::"+n,"1.000"+e])}}),fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAdvertiseList();case 2:case"end":return e.stop()}}),e)})))()},updated:function(){var t=this;this.setSwiper(),this.paFunction(this.advertise_list[0].id,this.advertise_list[0].url,1),this.swiper.on("slideChange",(function(){t.pa_count=t.pa_count+1,t.pa_count<5&&t.paFunction(t.advertise_list[t.swiper.realIndex].id,t.advertise_list[t.swiper.realIndex].url,t.swiper.realIndex+1)}))}},h=n(6),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"advertise_container"},[e("div",{staticClass:"advertise swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.advertise_list,(function(n,r){return e("div",{key:n.id,staticClass:"advertise__main swiper-slide",on:{click:function(e){return t.paClickFunction(n.id,n.url,r+1)}}},[e("a",{attrs:{href:n.url,target:"_blank",rel:"noreferrer noopenner"}},[e("div",{staticClass:"main-img",style:{backgroundImage:"url(".concat(n.image,")")}}),t._v(" "),e("div",{staticClass:"main-content"},[e("div",{staticClass:"date"},[t._v(t._s(n.start_date)+" ~ "+t._s(n.end_date))]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(n.description))])])])])})),0),t._v(" "),e("div",{staticClass:"advertise_m"},t._l(t.advertise_list,(function(n){return e("div",{key:n.title,staticClass:"advertise_m__main"},[e("a",{attrs:{href:n.url,target:"_blank",rel:"noreferrer noopenner"}},[e("div",{staticClass:"main-img",style:{backgroundImage:"url(".concat(n.image,")")}}),t._v(" "),e("div",{staticClass:"main-content"},[e("div",{staticClass:"date"},[t._v(t._s(n.start_date)+" ~ "+t._s(n.end_date))]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(n.description))])])])])})),0),t._v(" "),t._m(0)])])}),r,!1,null,null,null);e.default=component.exports},468:function(t,e,n){"use strict";n.r(e);n(28),n(21),n(24),n(7),n(35),n(22),n(36);var r=n(1),o=n(13),c=(n(16),n(40),n(14)),l=n(456);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _=Object(o.a)({name:"article-list-card-container",components:{CollectionCard:l.default},props:{item:{type:Object}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("article_list",["getRandomArticleListData"])),data:function(){return{pa_count:1,isVisible:!0}},computed:{article_collection:function(){return this.$store.state.article_list.random_list_data.slice(0,5)},article_collection_title:function(){return this.$store.state.article_list.random_list_title},article_collection_link:function(){return this.$store.state.article_list.random_list_link},article_model_id:function(){return this.$store.state.article_list.list_model_id}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("article_list/getRandomArticleListData");case 2:case"end":return e.stop()}}),e)})))()}},"methods",{randomList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("article_list/getRandomArticleListData");case 2:t.addPaCount(),t.paRunfunction();case 4:case"end":return e.stop()}}),e)})))()},imgError:function(img){img.src=n(419)},addPaCount:function(){this.pa_count=this.pa_count+1},paFunction:function(link,t){var e=t/1e4;window._piq.push(["trackEvent","rs2022::十大頻道::首頁","imps::熱門頻道文章::article_card::"+this.article_model_id,"熱門"+this.article_collection_title+"文章::"+link,this.pa_count+e])},paClickFunction:function(link,t){var e=(5*(this.pa_count-1)+t)/1e4;window._piq.push(["trackEvent","rs2022::十大頻道::首頁","click::熱門頻道文章::article_card::"+this.article_model_id,"熱門"+this.article_collection_title+"文章::"+link,this.pa_count+e])},paRunfunction:function(){for(var t=this.article_collection,i=1;i<6;i++){var e="http://"+t[i-1].author.user_name+".pixnet.net/blog/post/"+t[i-1].id;this.paFunction(e,5*(this.pa_count-1)+i)}},visibilityChanged:function(t,e){this.isVisible=t,e.intersectionRatio>0&&this.paRunfunction()}}),v=_,f=n(6),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return t.article_collection?e("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{\n            callback: visibilityChanged,\n            once: true,\n         }"}],staticClass:"article-list-card"},[e("div",{staticClass:"article-list-card__title"},[e("div",[t._v("熱門 "),e("span",[t._v(t._s(t.article_collection_title))]),t._v(" 文章")]),t._v(" "),e("div",{staticClass:"random",on:{click:function(e){return t.randomList()}}},[e("img",{attrs:{src:n(451)}}),t._v(" 換一換\n        ")])]),t._v(" "),e("div",{staticClass:"article-list-card__box"},t._l(t.article_collection,(function(n,r){return t.article_collection?e("CollectionCard",{key:n.title,attrs:{article:n},nativeOn:{click:function(e){return t.paClickFunction("http://"+n.author.user_name+".pixnet.net/blog/post/"+n.id,r+1)}}}):t._e()})),1),t._v(" "),e("a",{staticClass:"more",attrs:{href:t.article_collection_link}},[t._v("更多 "+t._s(t.article_collection_title)+" 文章"),e("img",{attrs:{src:n(422)}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";var r=n(424),o=n(420);function c(){return c=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},c.apply(this,arguments)}var l={run:function(){var t=this,e=t.slides.eq(t.activeIndex),n=t.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(n=e.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(t.autoplay.timeout),t.autoplay.timeout=Object(o.g)((function(){var e;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),e=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(e=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),t.emit("autoplay")):(e=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.params.loop?(t.loopFix(),e=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(e=t.slideTo(0,t.params.speed,!0,!0),t.emit("autoplay")):(e=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")),(t.params.cssMode&&t.autoplay.running||!1===e)&&t.autoplay.run()}),n)},start:function(){var t=this;return void 0===t.autoplay.timeout&&(!t.autoplay.running&&(t.autoplay.running=!0,t.emit("autoplayStart"),t.autoplay.run(),!0))},stop:function(){var t=this;return!!t.autoplay.running&&(void 0!==t.autoplay.timeout&&(t.autoplay.timeout&&(clearTimeout(t.autoplay.timeout),t.autoplay.timeout=void 0),t.autoplay.running=!1,t.emit("autoplayStop"),!0))},pause:function(t){var e=this;e.autoplay.running&&(e.autoplay.paused||(e.autoplay.timeout&&clearTimeout(e.autoplay.timeout),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].addEventListener(t,e.autoplay.onTransitionEnd)})):(e.autoplay.paused=!1,e.autoplay.run())))},onVisibilityChange:function(){var t=this,e=Object(r.a)();"hidden"===e.visibilityState&&t.autoplay.running&&t.autoplay.pause(),"visible"===e.visibilityState&&t.autoplay.paused&&(t.autoplay.run(),t.autoplay.paused=!1)},onTransitionEnd:function(t){var e=this;e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)})),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())},onMouseEnter:function(){var t=this;t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)}))},onMouseLeave:function(){var t=this;t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,t.autoplay.run())},attachMouseEvents:function(){var t=this;t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",t.autoplay.onMouseEnter),t.$el.on("mouseleave",t.autoplay.onMouseLeave))},detachMouseEvents:function(){var t=this;t.$el.off("mouseenter",t.autoplay.onMouseEnter),t.$el.off("mouseleave",t.autoplay.onMouseLeave)}};e.a={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){Object(o.a)(this,{autoplay:c({},l,{running:!1,paused:!1})})},on:{init:function(t){t.params.autoplay.enabled&&(t.autoplay.start(),Object(r.a)().addEventListener("visibilitychange",t.autoplay.onVisibilityChange),t.autoplay.attachMouseEvents())},beforeTransitionStart:function(t,e,n){t.autoplay.running&&(n||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(e):t.autoplay.stop())},sliderFirstMove:function(t){t.autoplay.running&&(t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause())},touchEnd:function(t){t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&t.autoplay.run()},destroy:function(t){t.autoplay.detachMouseEvents(),t.autoplay.running&&t.autoplay.stop(),Object(r.a)().removeEventListener("visibilitychange",t.autoplay.onVisibilityChange)}}}},478:function(t,e,n){"use strict";n.r(e);var r={name:"ga-container",props:["ga_number"],methods:{gtag:function(){window.dataLayer.push(arguments)},activeGA:function(){this.gtag("js",new Date),this.gtag("config",this.ga_number)}},mounted:function(){this.activeGA()}},o=r,c=n(6),component=Object(c.a)(o,(function(){return(0,this._self._c)("span")}),[],!1,null,null,null);e.default=component.exports},487:function(t,e,n){"use strict";n.r(e);var r=n(465),o=n(466),c=n(467),l=n(468),d=n(488),_={name:"right-container",components:{TagIndexContainer:r.default,BloggerRanking:o.default,AdvertiseContainer:c.default,ArticleListCardContainer:l.default,PixstarContainer:d.default},computed:{tab_id:function(){return this.$store.state.index_tab.tab_id},window_width:function(){return this.$store.state.index_tab.window_width}}},v=n(6),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"right_container"},[4==t.tab_id||t.window_width>1024?e("AdvertiseContainer"):t._e(),t._v(" "),3==t.tab_id||t.window_width>1024?e("PixstarContainer"):t._e(),t._v(" "),3==t.tab_id||t.window_width>1024?e("BloggerRanking"):t._e(),t._v(" "),e("ArticleListCardContainer"),t._v(" "),e("TagIndexContainer")],1)}),[],!1,null,null,null);e.default=component.exports},489:function(t,e,n){"use strict";n.r(e);var r={name:"gam-ad",props:{adSlot:String,adId:String,adSize:String}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gam-ad"},[e("script",[t._v("\n        window.googletag = window.googletag || {cmd: []};\n        googletag.cmd.push(function() {\n            googletag.defineSlot( '"+t._s(t.adSlot)+"', "+t._s(t.adSize)+", '"+t._s(t.adId)+"').addService(googletag.pubads());\n            googletag.pubads().enableSingleRequest();\n            googletag.pubads().collapseEmptyDivs();\n            googletag.enableServices();\n            googletag.display('"+t._s(t.adId)+"');\n        });\n    ")]),t._v(" "),e("div",{attrs:{id:t.adId}})])}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){"use strict";n.r(e);n(28),n(21),n(24),n(7),n(35),n(22),n(36);var r=n(13),o=n(14),c=n(478),l=n(479),d=n(487),_=n(489);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"IndexPage",components:{MainContainer:l.default,RightContainer:d.default,GAContainer:c.default,GamAd:_.default},head:function(){return{title:"痞客邦-首頁",script:[{src:"https://www.googletagmanager.com/gtag/js?id=G-RPGK0ML6QM"},{type:"text/javascript",src:"/js/ga/ga_index.js"}],meta:[{hid:"description",name:"description",content:"痞客邦提供部落格、網路相簿服務，匯集台灣最豐富且即時的美食、旅遊、親子、3C 等文章，以及各式好康活動。立即下載痞客邦App，發現並分享更多生活靈感吧！"},{hid:"og:description",name:"og:description",property:"og:description",content:"痞客邦提供部落格、網路相簿服務，匯集台灣最豐富且即時的美食、旅遊、親子、3C 等文章，以及各式好康活動。立即下載痞客邦App，發現並分享更多生活靈感吧！"},{hid:"twitter:description",name:"twitter:description",property:"twitter:description",content:"痞客邦提供部落格、網路相簿服務，匯集台灣最豐富且即時的美食、旅遊、親子、3C 等文章，以及各式好康活動。立即下載痞客邦App，發現並分享更多生活靈感吧！"},{hid:"keywords",name:"keywords",content:"痞客邦,pixnet,部落格"},{hid:"og:title",name:"og:title",property:"og:title",content:"痞客邦-首頁"}]}},jsonld:function(){return{"@context":" https://schema.org/","@graph":[{"@context":"https://schema.org","@type":"Organization",url:"https://www.pixnet.net",logo:"https://www.pixnet.net/img/public/OG.png",name:"痞客邦","@id":"https://www.pixnet.net/#organization",description:"痞客邦提供部落格、網路相簿服務，匯集台灣最豐富且即時的美食、旅遊、親子、3C 等文章，以及各式好康活動。立即下載痞客邦App，發現並分享更多生活靈感吧！",address:"",brand:{"@type":"Brand",logo:"https://www.pixnet.net/img/public/OG.png"},sameAs:"https://www.facebook.com/pixnet.net"},{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"痞客邦-首頁",item:" https://www.pixnet.net"}]}]}},data:function(){return{pa_page_name:"首頁",isMobile:!1}},methods:f(f({},Object(o.c)("tab",["updateTabId"])),{},{paFunction:function(){window._piq.push(["setCustomVar","venue","93-62ce92c0c8add"],["setCustomVar","visitor_id",""],["setCustomVar","member_uniqid",""],["trackPageView"]),window._piq.push(["trackEvent","rs2022::十大頻道::首頁","imps::頁面::page::user_action","",""])},paScrollFunction:function(){addEventListener("scroll",(function(){window._piq.push(["trackEvent","rs2022::十大頻道::首頁","scroll::頁面::page::user_action","",""])}),{once:!0})}}),mounted:function(){this.updateTabId(1),this.paFunction(),this.paScrollFunction(),this.$cookies.remove("pixdata"),this.$cookies.remove("read_article_list"),this.isMobile=window.screen.width<768}},h=n(6),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"index"}},[e("MainContainer",{attrs:{pa_page_name:t.pa_page_name}}),t._v(" "),e("RightContainer"),t._v(" "),t.isMobile?t._e():e("GamAd",{attrs:{"ad-slot":"/1021267/pixnet_pc_hp_fluid","ad-size":"[[1, 1], [300, 250]]","ad-id":"div-gpt-ad-1684383524359-0"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainContainer:n(479).default})}}]);