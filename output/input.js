define("lofty/alicn/suggestion/3.0/input",["jquery","lofty/alicn/suggestion/3.0/history","lofty/util/template/2.0/template","lofty/lang/class","lofty/lang/base","util/cookie/1.0","lofty/util/json/1.0/json","lofty/ui/tabs/2.0/tabs"],function(t,e,a,i,r,l,s,n){var o=!1;if(e.loaded?o=!0:(e.on("ready",function(){o=!0}),e.init(),e.enableHtmlEscape(!0)),window.lib){const g=/_mtopEnv_=pre/.test(window.location.href);window.lib.mtop.config.prefix="h5api",window.lib.mtop.config.subDomain=g?"wapa":"m",window.lib.mtop.config.mainDomain="1688.com"}var c=["{{if left.length}}",'<div data-spm="suggestion" class="suggest_input_ctn fd-clr {{if (currentMod == "")}}suggest_input_ctn_no_mohe{{/if}}">','<div class="suggest_content_left fd-left">','<ul class="suggest_left_list">',"{{each left as item }}",'{{if (item.type=="brandSeller")}}',"{{if (item.useLogoUrl)}}",'<li class="suggest_left_list_item fd-clr brand_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="1" {{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<a href="{{item.logo_url}}">','<span class="fd-left" style="width:100%;">','<img src="https://img.alicdn.com/tfs/TB1UrUbeeL2gK0jSZPhXXahvXXa-128-32.png" class="power_seller_icon fd-left" style="width:64px;"/>','<span class="power_seller_name">{{item.name}}</span>',"</span>","</a>","</li>","{{else}}",'<li class="suggest_left_list_item fd-clr brand_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','	<span class="fd-left" style="width:100%;">','<img src="https://img.alicdn.com/tfs/TB1UrUbeeL2gK0jSZPhXXahvXXa-128-32.png" class="power_seller_icon fd-left" style="width:64px;"/>','<span class="power_seller_name">{{item.name}}</span>',"</span>",'<span class="move_arrow">&gt;</span>',"</li>","{{/if}}",'{{else if (item.type=="powerfulSeller")}}','<li class="suggest_left_list_item fd-clr power_seller_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<span class="fd-left" style="width:100%;">','<img src="https://cbu01.alicdn.com/cms/upload/2017/401/741/4147104_532208266.png" class="power_seller_icon fd-left"/>','<span class="power_seller_name">{{#item.q}}{{item.name}}</span>',"</span>",'<span class="move_arrow">&gt;</span>',"</li>",'{{else if (item.type=="indusCspu")}}','<li class="suggest_left_list_item fd-clr brand_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="1" {{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<a href="{{item.logo_url}}">','<span class="fd-left indus_cspu_container" style="width:100%;">','<img src="https://img.alicdn.com/imgextra/i2/O1CN01ur3aGs1VhmGD07rLb_!!6000000002685-2-tps-128-32.png" class="power_seller_icon fd-left indus_cspu_icon" style="width:64px;"/>','<span class="indus_cspu_name" style="margin-left: 8px; color: #1071a8 !important;">{{item.name}}</span>',"</span>","</a>","</li>",'{{else if (item.type=="superFactory")}}','<li class="suggest_left_list_item fd-clr power_seller_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<span class="fd-left" style="width:100%;">','<img src="https://img.alicdn.com/imgextra/i3/O1CN01LcOfhW1QrmfmYQ66J_!!6000000002030-2-tps-112-112.png" class="power_seller_icon fd-left" style="width:16px;"/>','<span class="power_seller_name">{{#item.q}}{{item.name}}</span>',"</span>",'<span class="move_arrow">&gt;</span>',"</li>",'{{else if (item.type=="category")}}','<li class="suggest_left_list_item" data-action-param="{{item.extendParams}}" data-value="{{item.val}}">','<span class="cate_key">{{#item.q}}</span>','<span class="cate_name">\u5728{{item.cateName}}\u5206\u7c7b\u4e0b\u641c\u7d22</span>',"</li>",'{{else if (item.type=="topic")}}','<li data-action-url="{{item.topicSearchUrl}}" data-action-param="{{item.topicSearchParams}}" data-value="{{item.val}}" class="suggest_left_list_item{{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}}>','<span class="topic_key">{{#item.q}}</span>','<span class="topic_name">\u901b{{item.topicName}}</span>','<span class="static_arrow">&gt;&gt;</span>',"</li>",'{{else if (item.type=="history")}}','<li class="suggest_left_list_item history_list_item fd-clr" data-value="{{item.htmlKey}}" data-action-param="{{item.extendParams}}">','<span class="history_item fd-left">{{item.htmlKey}}</span>','<span class="history_item_remove fd-right" data-key="{{item.htmlKey}}">\u5220\u9664</span>',"</li>",'{{else if (item.type=="normal")}}','<li data-value="{{item.val}}" data-action-param="{{item.leftExtendParams}}" class="suggest_left_list_item fd-clr{{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}}>','<span class="normal_item fd-left">{{#item.q}}</span>','<span class="move_arrow">&gt;</span>',"</li>",'{{else if (item.type=="bottom")}}','<li data-value="{{item.textDes}}" data-type="link" data-action-url="{{item.linkHref}}" data-action-param="{{item.extendParams}}" data-trace="{{item.trace}}" class="suggest_left_list_item">','<img src="{{item.linkImg}}" />',"</li>","{{/if}}","{{/each}}","</ul>","</div>",'<div class="suggest_content_right fd-left">',"{{if (right.length)}}",'<div class="suggest_right_ctn">',"{{each right as rightItem}}",'{{if (rightItem.type=="powerfulSeller" || rightItem.type=="brandSeller")}}',"{{if (rightItem.rightData.length > 5)}}",'<div class="suggest_right_item suggest_right_power_seller power_seller_tab {{rightItem.type}} relation_{{rightItem.relation}}">','<div class="tab_content">',"<ul>",'<li class="current">',"{{each rightItem.rightData as seller idx}}","{{if (idx % 5 == 0 && idx > 0)}}","</li>","<li>","{{/if}}",'<a class="seller_ctn" href="{{seller.url}}" data-action-param="{{rightItem.rightExtendParams}}">','<span class="company_name">{{seller.name}}</span>','<span class="company_type">{{seller.hint}}</span>',"</a>","{{/each}}","</li>","</ul>","</div>",'<div class="tab_action fd-clr">','<a href="#" class="next fd-right"><span>&#xe602;</span></a>','<a href="#" class="prev fd-right"><span>&#xe601;</span></a>',"</div>","</div>","{{else}}",'<div class="suggest_right_item suggest_right_power_seller relation_{{rightItem.relation}}">',"{{each rightItem.rightData as seller idx}}",'<a class="seller_ctn" href="{{seller.url}}" data-action-param="{{rightItem.rightExtendParams}}">','<span class="company_name">{{seller.name}}</span>','<span class="company_type">{{seller.hint}}</span>',"</a>","{{/each}}","</div>","{{/if}}",'{{else if (rightItem.type=="topic")}}','<div class="suggest_right_item suggest_right_topic relation_{{rightItem.relation}}" data-action-url="{{rightItem.topicMarketUrl}}" data-action-param="{{rightItem.topicMarketParams}}">','<img src="{{rightItem.topicPicUrl}}"></img>','<div style="position:absolute;height:75px;width:100%;bottom:20px;left:0;">','<div style="width:192px;height:65px;background-color:#000;background-color: rgba(0, 0, 0, 0.4);filter: alpha(opacity=40);margin:0 auto;padding-top:10px;">','<span style="display:block;height:40px;line-height:40px;color:#eee;font-size:20px;">{{rightItem.topicName}}</span>','<span style="display:block;height:1px;width:30px;margin:0 auto;background-color:#999;"></span>',"</div>","</div>","</div>",'{{else if (rightItem.type=="normal")}}','<div class="suggest_right_item suggest_right_normal relation_{{rightItem.relation}}">','<div class="suggest_right_title relation_{{rightItem.relation}}">{{#rightItem.q}}</div>',"{{each rightItem.rightData as group index}}","{{if (index>0)}}",'<hr class="right_group_split"/>',"{{/if}}",'<div class="suggest_right_normal_group fd-clr group{{index}}">',"{{each group.data as tag}}",'<span class="suggest_right_normal_tag fd-left {{if (tag.hot)}} hotTag {{/if}}" data-value="{{tag.val}}" data-action-param="{{rightItem.rightExtendParams}}">{{tag.q}}</span>',"{{/each}}","</div>","{{/each}}","</div>","{{/if}}","{{/each}}","</div>","{{/if}}","</div>","</div>","{{/if}}"].join(""),h="",u="",m=function(t,e,i){var r=this;r.tplRender||(r.tplRender=a.compile(c));var l=r.tplRender(t);e.trigger("htmlReady",{token:i,html:l})},p=function(t){var e=1,a=this.get("listCount"),i=0,r={currentMod:t.currentMod,left:[],right:[]};if(t.brandSeller)for(var l=0;l<t.brandSeller.length&&!(r.left.length>=a);l++){var n=t.brandSeller[l],o={type:"brandSeller"};if(o.q=n.q,o.val=n.val,o.leftExtendParams=n.leftExtendParams,o.name=n.name,o.logo_url=n.logo_url,o.useLogoUrl=n.useLogoUrl,n.rightData&&n.rightData.length){o.hasRight="1",e++,o.relation=e;var g={type:"brandSeller",relation:e};g.rightExtendParams=n.rightExtendParams,g.rightData=n.rightData,r.right.push(g)}r.left.push(o)}if(t.powerfulSeller)for(var l=0;l<t.powerfulSeller.length&&!(r.left.length>=a);l++){var n=t.powerfulSeller[l],o={type:"powerfulSeller"};if(o.q=n.q,o.val=n.val,o.leftExtendParams=n.leftExtendParams,o.name=n.name,o.logo_url=n.logo_url,n.rightData&&n.rightData.length){o.hasRight="1",e++,o.relation=e;var g={type:"powerfulSeller",relation:e};g.rightExtendParams=n.rightExtendParams,g.rightData=n.rightData,r.right.push(g)}r.left.push(o)}if(t.superFactory)for(var l=0;l<t.superFactory.length&&!(r.left.length>=a);l++){var n=t.superFactory[l],o={type:"superFactory"};if(o.q=n.q,o.val=n.val,o.leftExtendParams=n.leftExtendParams,o.name=n.name,o.logo_url=n.logo_url,n.rightData&&n.rightData.length){o.hasRight="1",e++,o.relation=e;var g={type:"superFactory",relation:e};g.rightExtendParams=n.rightExtendParams,g.rightData=n.rightData,r.right.push(g)}r.left.push(o)}if(t.indusCspu)for(var l=0;l<t.indusCspu.length&&!(r.left.length>=a);l++){var n=t.indusCspu[l],o={type:"indusCspu"};if(o.q=n.q,o.val=n.val,o.leftExtendParams=n.leftExtendParams,o.name=n.name,o.logo_url=n.logo_url,n.rightData&&n.rightData.length){o.hasRight="1",e++,o.relation=e;var g={type:"indusCspu",relation:e};g.rightExtendParams=n.rightExtendParams,g.rightData=n.rightData,r.right.push(g)}r.left.push(o)}if(t.topic)for(var l=0;l<t.topic.length&&!(r.left.length>=a);l++){var n=t.topic[l];e++;var o={type:"topic",hasRight:"1",relation:e},g={type:"topic",relation:e};o.q=n.q,o.val=n.val,o.topicName=n.topicName,o.topicSearchParams=n.topicSearchParams,o.topicSearchUrl=n.topicSearchUrl,r.left.push(o),g.topicName=n.topicName,g.topicMarketParams=n.topicMarketParams,g.topicMarketUrl=n.topicMarketUrl,g.topicPicUrl=n.topicPicUrl,r.right.push(g)}if(t.category)for(var l=0;l<t.category.length&&!(r.left.length>=a-i);l++){var n=t.category[l];n.type="category",r.left.push(n)}if(t.history)for(var l=0;l<t.history.length&&!(r.left.length>=a-i);l++){var n=t.history[l];n.type="history",n.extendParams=s.stringify({sug:"1_0"}),r.left.push(n)}if(t.normal)for(var l=0;l<t.normal.length&&!(r.left.length>=a-i);l++){var n=t.normal[l],o={type:"normal"};if(o.q=n.q,o.val=n.val,o.leftExtendParams=n.leftExtendParams,n.rightData&&n.rightData.length){o.hasRight="1",e++,o.relation=e;var g={type:"normal",relation:e};g.q=n.q,g.rightExtendParams=n.rightExtendParams,g.rightData=n.rightData,r.right.push(g)}r.left.push(o)}if(this.get("bottomBanner")){var c=this.get("bottomBanner");c.type="bottom",c.extendParams=s.stringify({sug:"0_0"}),r.left.push(c)}return r},f={index:"offer",factory:"wapfactory",imall:"wapindustry"},d={major:"offer",supplier:"wapfactory",imallPCSearch:"wapindustry"},_=function(t){var e=window.data&&window.data.pageMessage&&window.data.pageMessage.pageName?window.data.pageMessage.pageName:"";if(e)return d[e]||d.major||"offer";var a="index";try{a=window.document.documentElement.attributes["data-theme"].value}catch(i){a="index"}return f[a]||t.get("type")||"offer"},v=function(a,i,r){function l(t,e){try{return s.parse(t)}catch(a){return e}}function n(t){try{const e=t&&t.data&&t.data.data&&t.data.data[0]||{},a=l(e&&e.oneSugPc,{}),i=e.queryWords;if("indus_cspu"===a.type&&e&&"string"==typeof i){const r=e&&e.url,s=window.__CSPU__CACHE__||(window.__CSPU__CACHE__={}),n=i.toLocaleLowerCase();s[n]={url:r,querywords:i,type:a.type,originRes:t}}}catch(o){}}var g=this;if(k.call(this),g.currentMod=g.get("mod"),"mohe"==g.currentMod&&a.getWidth()<450&&(g.currentMod=""),"gbk"!==u.toLowerCase()&&"utf-8"!==u.toLowerCase()&&(u="gbk"),!window.lib)return void console.warn("\u627e\u4e0d\u5230mtop");var c=_(g);window.lib.mtop.request({api:"mtop.1688.suggestion.common.getSuggestWords",data:s.stringify({integrateTrace:!0,keywords:r.replace(/%/g,"%25").replace(/&/g,"%26"),appName:"nodeSearchWork",type:c,urlEncodeType:u}),ecode:0,v:"1.0",type:"GET",timeout:2e4},function(l){var c=l.data;n(l),c.result=c.data;var h="sale_search_suggest_show",u={};if(c.result)for(var f=c.result.length,d=0;f>d;d++){var _=c.result[d];try{_=s.parse(_.oneSugPc)}catch(v){_={}}var y;if("brand_seller"==_.type){u.brandSeller||(u.brandSeller=[]);var w=_.q.replace(/[_%]/g,"");if(y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:w},_.left){var x;if(_.left.param&&(x=_.left.param),_.left.click)if(x)for(var b in _.left.click)x[b]=_.left.click[b];else x=_.left.click;x&&(y.leftExtendParams=s.stringify(x)),_.left.name&&(y.name=_.left.name),_.left.logo_url&&(y.logo_url=_.left.logo_url)}_.right&&(_.right.click&&(y.rightExtendParams=s.stringify(_.right.click)),_.right.shops&&(y.rightData=_.right.shops)),_.right&&_.right.shops||(y.useLogoUrl=!0),h+="_"+y.val,u.brandSeller.push(y)}else if("powerful_seller"==_.type){u.powerfulSeller||(u.powerfulSeller=[]);var w=_.q.replace(/[_%]/g,"");if(y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:w},_.left){var x;if(_.left.param&&(x=_.left.param),_.left.click)if(x)for(var b in _.left.click)x[b]=_.left.click[b];else x=_.left.click;x&&(y.leftExtendParams=s.stringify(x)),_.left.name&&(y.name=_.left.name),_.left.logo_url&&(y.logo_url=_.left.logo_url)}_.right&&(_.right.click&&(y.rightExtendParams=s.stringify(_.right.click)),_.right.shops&&(y.rightData=_.right.shops)),h+="_"+y.val,u.powerfulSeller.push(y)}else if("indus_cspu"==_.type){u.indusCspu||(u.indusCspu=[]);var w=_.q.replace(/[_%]/g,"");if(y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:w},_.left){var x;if(_.left.param&&(x=_.left.param),_.left.click)if(x)for(var b in _.left.click)x[b]=_.left.click[b];else x=_.left.click;x&&(y.leftExtendParams=s.stringify(x)),_.left.name&&(y.name=_.left.name),_.left.logo_url&&(y.logo_url=_.left.logo_url)}_.right&&(_.right.click&&(y.rightExtendParams=s.stringify(_.right.click)),_.right.shops&&(y.rightData=_.right.shops)),h+="_"+y.val,u.indusCspu.push(y)}else if("super_factory"==_.type){u.superFactory||(u.superFactory=[]);var w=_.q.replace(/[_%]/g,"");if(y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:w},_.left){var x;if(_.left.param&&(x=_.left.param),_.left.click)if(x)for(var b in _.left.click)x[b]=_.left.click[b];else x=_.left.click;x&&(y.leftExtendParams=s.stringify(x)),_.left.name&&(y.name=_.left.name),_.left.logo_url&&(y.logo_url=_.left.logo_url)}_.right&&(_.right.click&&(y.rightExtendParams=s.stringify(_.right.click)),_.right.shops&&(y.rightData=_.right.shops)),h+="_"+y.val,u.superFactory.push(y)}else if("category"==_.type)u.category||(u.category=[]),y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:_.q.replace(/[_%]/g,"")},_.left&&(_.left.name&&(y.cateName=_.left.name),_.left.id&&(y.cateId=_.left.id),_.left.click&&(_.left.click.categoryId=_.left.id,y.extendParams=s.stringify(_.left.click))),h+="_"+y.val+"_cate_"+y.cateId,u.category.push(y);else if("topic"==_.type){if(u.topic||(u.topic=[]),y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:_.q.replace(/[_%]/g,"")},_.left){_.left.name&&(y.topicName=_.left.name),_.left.id&&(y.topicId=_.left.id),_.left.url&&_.left.url.head&&(y.topicSearchUrl=_.left.url.head);var k;if(_.left.url&&_.left.url.param&&(k=_.left.url.param),_.left.click)if(k)for(var b in _.left.click)k[b]=_.left.click[b];else k=_.left.click;k&&(y.topicSearchParams=s.stringify(k))}_.right&&(_.right.pic_url&&(y.topicPicUrl=_.right.pic_url),_.right.land_url&&(y.topicMarketUrl=_.right.land_url),_.right.click&&(y.topicMarketParams=s.stringify(_.right.click))),h+="_"+y.val+"_topic_"+y.topicId,u.topic.push(y)}else if("normal"==_.type){u.normal||(u.normal=[]);var w=_.q.replace(/[_%]/g,"");if(y={q:_.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:w},_.left&&_.left.click&&(y.leftExtendParams=s.stringify(_.left.click)),_.right&&(_.right.click&&(y.rightExtendParams=s.stringify(_.right.click)),_.right.data)){y.rightData=[];for(var S=0,I=_.right.data.length;I>S;S++){var T=_.right.data[S],q=T.data;T.data=[];for(var L=0;L<q.length;L++){var D={q:q[L],val:w+" "+q[L]};L===T.hot&&(D.hot=!0),T.data.push(D)}y.rightData.push(T)}}h+="_"+y.val,u.normal.push(y)}}o&&(u.history=e.query(r,2)),"history"in u&&t.each(u.history,function(t,e){h+="_"+e.key+"history",e.val=e.value}),"undefined"!=typeof window.dmtrack?dmtrack.clickstat("//stat.1688.com/sectionexp.html","?sectionexp="+h):(new Image).src="//stat.1688.com/sectionexp.html?sectionexp="+h+"&time="+ +new Date,u.currentMod=g.currentMod;var E="se_keyword="+r.replace(/%/g,"%25").replace(/&/g,"%26")+"&area=left";for(var R in u)E=E+"&"+C(R,u[R]);P("EXP",E);var $=p.call(g,u);if(m.call(g,$,a,i),window.data&&window.data.promotionSuggestionData&&window.data.promotionSuggestionData.suggestionLink&&window.data.promotionSuggestionData.suggestionLink.linkImgUrl&&0===t(".promotion-suggest").length){var U=t(".suggest_left_list");U.append(function(){return"<li class='promotion-suggest'><a target='_blank' href="+window.data.promotionSuggestionData.suggestionLink.linkUrl+"><img src="+window.data.promotionSuggestionData.suggestionLink.linkImgUrl+"></a></li>"})}setTimeout(function(){a.resetHeight()},500)})},y=function(e){var a=e.get("el"),i=this;if(i.$currentLi){if(i.$lastCurrentLi&&i.$lastCurrentLi.removeClass("list_item_hover"),i.$currentLi.addClass("list_item_hover"),i.$currentLi.hasClass("item_has_right")&&""!=i.currentMod){a.find(".suggest_input_ctn").addClass("ctn_has_right"),a.find(".suggest_right_item").hide();var r=t(".relation_"+i.$currentLi.data("relation"));r.show(),r.css("top","0px");var l=e.resetHeight(),s=r.outerHeight();if(r.hasClass("suggest_right_topic"))l>s&&r.css("top",parseInt((l-s)/2,10)+"px");else{var o=i.$currentLi.offset().top-a.offset().top,g=o-(s-26)/2;if(g>16){var c=l-20-s;g>c&&(g=c),g>16&&r.css("top",g-16+"px")}}r.hasClass("power_seller_tab")&&!r.data("hasInit")&&(r.data("hasInit",!0),i.powerSellerTabs.push(new n({tpl:r,boxSelector:".tab_content ul li",isLoop:!1,prev:".prev",next:".next",currentCls:"current"})))}else a.find(".suggest_input_ctn").removeClass("ctn_has_right"),e.resetHeight();k.call(i),i.$lastCurrentLi=i.$currentLi,i.$currentLi=null}},w=function(t){return t},x=function(a){var i,r=a.get("el"),l=this,s=!1,n=-1;r.on("mouseenter",".suggest_input_ctn .suggest_left_list .suggest_left_list_item",function(e){if(l.$currentLi=t(e.currentTarget),!s){var i=t(a.get("target")).val(),r=I(l.$currentLi),n="";try{var o=l.$currentLi.attr("data-relation"),g=document.getElementsByClassName("suggest_right_item suggest_right_normal relation_"+o)[0],c=Array.prototype.slice.call(g.querySelectorAll(".suggest_right_normal_tag")).map(function(t){return t.innerText});n=c.join(",")}catch(h){n=""}var u="se_keyword="+i+"&"+r+"="+(l.$currentLi&&l.$currentLi[0]?l.$currentLi[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right&pandoraRightWords="+n;P("OTHER",u),y.call(l,a)}}),r.on("mouseleave",".suggest_input_ctn .suggest_left_list",function(t){i&&(clearTimeout(i),i=null)});var o;r.on("mousemove",".suggest_input_ctn .suggest_left_list",function(t){return""==l.currentMod?void(s=!1):void(o||(o=setTimeout(function(){o=null},10),i&&(clearTimeout(i),i=null),-1==n?n=t.pageX:(t.pageX>n?(s=!0,i=setTimeout(function(){i=null,s=!1,n=-1,y.call(l,a)},100)):s&&(s=!1,y.call(l,a)),n=t.pageX)))}),r.on("click",".suggest_content_left .suggest_left_list_item",function(e){var i=t(e.currentTarget),r=(i.data(),t(a.get("target")).val());a.setTargetValue(i.data("value"));var l={actionParams:i.data("action-param"),trace:i.data("trace")};i.data("action-url")&&(l.actionUrl=i.data("action-url")),i.data("type")&&(l.type=i.data("type"));var s=I(i),n="se_keyword="+r+"&"+s+"="+i.data("value")+"&area=left";P("CLK",n),a.hide()}),r.on("click",".suggest_content_left .history_item_remove",function(i){i.stopPropagation();var r=t(i.target),l=r.data("key")+"";e.remove(l),r.parent().remove(),a.resetHeight()}),r.on("click",".suggest_right_ctn .suggest_right_normal_tag",function(e){var i=t(e.target),r=t(a.get("target")).val(),s="se_keyword="+r+"&normal="+i.data("value")+"&area=right&pandora=1";P("CLK",s),a.setTargetValue(i.data("value")),a.trigger("submit",w.call(l,{actionParams:i.data("action-param")})),a.hide()}),r.on("click",".suggest_right_ctn .powerfulSeller .seller_ctn",function(e){e.preventDefault();var i=t(e.currentTarget),r=t(a.get("target")).val(),l="se_keyword="+r+"&powerfulSeller="+(i&&i[0]?i[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right";P("CLK",l),a.trigger("submit",{type:"link",actionUrl:i.attr("href"),actionParams:i.data("action-param")}),a.hide()}),r.on("click",".suggest_right_ctn .brandSeller .seller_ctn",function(e){e.preventDefault();var i=t(e.currentTarget),r=t(a.get("target")).val(),l="se_keyword="+r+"&brand="+(i&&i[0]?i[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right";P("CLK",l),a.trigger("submit",{type:"link",actionUrl:i.attr("href"),actionParams:i.data("action-param")}),a.hide()}),r.on("mouseenter",".suggest_right_ctn .suggest_right_normal_tag",function(e){t(e.target).addClass("suggest_right_tag_hover")}),r.on("mouseleave",".suggest_right_ctn .suggest_right_normal_tag",function(e){t(e.target).removeClass("suggest_right_tag_hover")}),r.on("click",".suggest_right_ctn .suggest_right_topic",function(e){var i=t(e.currentTarget);a.setTargetValue(""),a.trigger("submit",{type:"link",actionUrl:i.data("action-url"),actionParams:i.data("action-param")}),a.hide()})},b=function(e,a){var i=e.get("el").find(".suggest_content_left .suggest_left_list_item");if(i.length){var r=-1,l=this;l.$lastCurrentLi&&l.$lastCurrentLi.length&&(r=i.index(l.$lastCurrentLi[0])),r+=a,0>r?r=i.length-1:r>=i.length&&(r=0),l.$currentLi=t(i[r]),e.setTargetValue(l.$currentLi.data("value")),this.enterSubmitObj={};var s=l.$currentLi.data("action-url");s&&(this.enterSubmitObj.actionUrl=s);var n=l.$currentLi.data("type");n&&(this.enterSubmitObj.type=n),this.enterSubmitObj.actionParams=l.$currentLi.data("action-param"),w.call(this,this.enterSubmitObj),y.call(this,e)}},k=function(){this.curRightTagIndex>-1&&t(this.$allCurrentRightItems[this.curRightTagIndex]).removeClass("suggest_right_tag_hover"),this.rightItemKeyOver=!1,this.$allCurrentRightItems=null,this.curRightTagIndex=-1},S=function(e){this.curRightTagIndex>-1&&t(this.$allCurrentRightItems[this.curRightTagIndex]).removeClass("suggest_right_tag_hover"),this.curRightTagIndex+=e;var a=this.maxVisibleTagCount;this.maxVisibleTagCount>this.$allCurrentRightItems.length&&(a=this.$allCurrentRightItems.length),this.curRightTagIndex>a-1?this.curRightTagIndex=0:this.curRightTagIndex<0&&(this.curRightTagIndex=a-1);var i=t(this.$allCurrentRightItems[this.curRightTagIndex]);i.addClass("suggest_right_tag_hover"),this.enterSubmitObj={};var r=i.data("action-url");r&&(this.enterSubmitObj.actionUrl=r),this.enterSubmitObj.actionParams=i.data("action-param"),w.call(this,this.enterSubmitObj),this.context.setTargetValue(i.data("value"))},P=function(t,e){var a="visitorId="+l.get("__cn_logon_id__")+"&",i="fromSuggest=1&",r="";try{r=window.data.pageConfigData.requestId}catch(s){r=""}var n=r?"requestId="+r+"&":"";if(window&&window.goldlog)window.goldlog.record("/ctr.search.suggestion",t,i+n+a+e);else{var o=new Image;o.src="//gm.mmstat.com/ctr.search.suggestion?gmkey="+t+"&gokey=_g_encode=utf-8"+i+n+a+e}},C=function(t,e){var a="";if("currentMod"===t)return t+"="+e;if(e&&e.length>0)for(var i=0;i<e.length;i++){var r=e[i];r.val&&(a=""===a?r.val:a+","+r.val)}return t+"="+a},I=function(t){var e="normal";return t.hasClass("brand_list_item")?e="brand":t.hasClass("power_seller_list_item")?e="powerfulSeller":t.hasClass("history_list_item")&&(e="history"),e};return i(r,{options:{mod:"mohe",type:"offer",industryFlag:"",bottomBanner:null,listCount:13},init:function(t){r.prototype.init.call(this,t||{}),this.tplRender=null,this.$lastCurrentLi=null,this.$currentLi=null,this.enterSubmitObj=null,this.rightItemKeyOver=!1,this.$allCurrentRightItems=null,this.curRightTagIndex=-1,this.maxVisibleTagCount=null,this.powerSellerTabs=[],h=this.get("extraParams"),u=this.get("encoding")||"gbk"},setContext:function(t){this.context=t,x.call(this,t)},getSubmitInfo:function(){return this.enterSubmitObj},onTargetMouseDown:function(t,e){this.context._hasShow||(this.enterSubmitObj=null,v.call(this,this.context,t,e))},onTargetInput:function(t,e){this.enterSubmitObj=null,v.call(this,this.context,t,e)},onTargetKeyUp:function(t,e,a){this.context._hasShow&&(a.preventDefault(),b.call(this,this.context,-1))},onTargetKeyDown:function(t,e,a){this.context._hasShow&&(a.preventDefault(),b.call(this,this.context,1))},onTargetKeyEnter:function(t,e,a){a.preventDefault(),k.call(this),this.enterSubmitObj?this.context.trigger("submit",w.call(this,this.enterSubmitObj)):this.context.trigger("submit")},onTargetKeyLeft:function(t,e,a){this.rightItemKeyOver&&this.context._hasShow&&""!=this.currentMod&&(a.preventDefault(),S.call(this,-1))},onTargetKeyRight:function(t,e,a){if(""!=this.currentMod&&this.context._hasShow){var i=this;if(!this.rightItemKeyOver){if(!i.$lastCurrentLi)return;if(!i.$lastCurrentLi.hasClass("item_has_right"))return;var r=this.context.get("el").find(".suggest_content_right .relation_"+i.$lastCurrentLi.data("relation"));if(!r.hasClass("suggest_right_normal"))return;this.rightItemKeyOver=!0,this.maxVisibleTagCount=6*parseInt(r.width()/76,10),this.curRightTagIndex=-1,this.$allCurrentRightItems=r.find(".suggest_right_normal_tag")}a.preventDefault(),S.call(this,1)}},onShow:function(){if(this.powerSellerTabs.length){for(var t=0,e=this.powerSellerTabs.length;e>t;t++)this.powerSellerTabs[t].destroy();this.powerSellerTabs.length=0}}})});;