var currUrl = new URL(window.location.href.toLowerCase());
var NNhost = "https://www.nownews.com";
if (currUrl.hostname.indexOf("uat") > -1) {
    NNhost = "https://uat.nownews.com";
}	

$(document).ready(function () {
	// ------------ 共用項目 ------------	
	// 漢堡按鈕
	$(".toggleBlk .btn").on("click", function () {
		$(this).parent().toggleClass("active");
		$("body").toggleClass("fix");
		$(".navOverlay").toggleClass("active");
		$(".aside").toggleClass("active");
	});
	$(".navOverlay").on("click", function () {
		$(this).removeClass("active");
		$("body").removeClass("fix");
		$(".aside").removeClass("active");
	});
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	if (isIE) {
		$("body").addClass("ie");
	}	
	//when .modal close, iframe not playing
	$('.modal').on('hide.bs.modal', function () {
		var memory = $(this).html();
		$(this).html(memory);
	});
	//------------ 主選單------------ 
	$('#slider-navBar').owlCarousel({
		loop: false,
		autoWidth: true,
		navRewind: false,
		margin: 0,
		dots: false,
		nav: true,
		autoplay: false,
		lazyLoad: true,
		autoplayHoverPause: true,
		responsive: {
			0: { items: 3, slideBy: 3 },
			375: { items: 5, slideBy: 5 },
			480: { items: 8, slideBy: 8 },
			960: { items: 12, slideBy: 12 },
			1200: { items: 10, slideBy: 10 },
		}
	});
	// ------------ 側選單	------------ 
	// NAV sticky
	if ($('#header, .breakingNews').length > 0){
		var stickyNavTop = $('#header, .breakingNews').offset().top;
		var stickyNav = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyNavTop) {
				$('#header, .breakingNews').addClass('sticky');
			} else {
				$('#header, .breakingNews').removeClass('sticky');
			}
		};
		stickyNav();
		$(window).on("scroll", function () {
			stickyNav();
		});
	}
	// 關閉按鈕
	$(".aside .btn-close").on("click", function () {
		$(".navOverlay").removeClass("active");
		$("body").removeClass("fix");
		$(".aside").removeClass("active");
	});
	
	$("img.resize").fillBox();
	$(".owl-carousel img.resize").fillBox();
	// ------------ 快訊------------ 
	// marquee
	if ($("#marquee").length > 0){
		$("#marquee").marquee({
			yScroll: "bottom",
			fxEasingShow: "swing",
			showSpeed: 550
		});
	}

	//列表頁-swiper 3D slider
	$(".sliderBlk img.resize").fillBox();

	var mq = window.matchMedia("(max-width: 959px)");
	if (mq.matches) {//手機
		//RWD Nav
		$(".navOverlay").on("click", function () {
			$(this).removeClass("active");
			$(".toggleBlk").removeClass("active");
			$("body").removeClass("fix");
			$("header nav").removeClass("active");
		});
	} else {//PC
		//mouseenter
		$(".slider-navBar .owl-item>li").on("mouseenter", function () {
			$(this).children(".box").show().css('display', 'flex');
			$(this).parent().siblings().children(".box").hide();
		});
		//mouseleave
		$(".slider-navBar .owl-item>li").on("mouseleave", function () {
			$(this).children(".box").hide();
		});
		$(".slider-navBar .owl-item>li>.box").on("mouseleave", function () {
			$(this).hide();
		});
		$(".slider-navBar .subMenu>li").on("mouseenter", function () {
			$(this).children(".box").show();
			$(this).siblings().children(".box").hide();
		});
		$(".slider-navBar .subMenu>li").on("mouseleave", function () {
			$(this).children(".box").hide();
		});
	};
	//APP download icon處理
	//  pc版download prompt控制
	$('#getApp').on("click", function () {
		$("#appQrcode").attr('style', 'display:flex;');
	});	
	$('#btnDownloadClose').on("click", function () {
		$("#appQrcode").attr('style', 'display:none;');
	});		
	//  m版download url控制
	var appStoreUrl = "";
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	if (bIsIpad || bIsIphoneOs){
		appStoreUrl = "https://apps.apple.com/tw/app/nownews%E4%BB%8A%E6%97%A5%E6%96%B0%E8%81%9E/id388356807";
	}else{
		appStoreUrl = "https://play.google.com/store/apps/details?id=com.nownews.news2&hl=zh_TW&gl=US";		
	}
	$("#appDownload , .appDownload").attr("href", appStoreUrl);	
});
//--------------------------------------------------------
//主選單 Active
//--------------------------------------------------------
$(function(){
		// menu 上下頁
		$("button.owl-prev").attr("aria-label", "上一頁");
		$("button.owl-next").attr("aria-label", "下一頁");
		var selectedFlag = false;
		var cateMain = $("meta[name='main_category']").attr("content");
		if (cateMain == null || cateMain == "" || cateMain == "homepage" || cateMain == "searchList" || cateMain == "tagList") {
			return;
		}
		// 內文頁
		if (traceData.page == "news"){
			var mainCateUrl = (typeof dataLayer[0].mainCateUrl !== "undefined"? dataLayer[0].mainCateUrl : "");
			var subCateUrl = (typeof dataLayer[0].subCateUrl !== "undefined"? dataLayer[0].subCateUrl : "");
			// 新聞有次分類先找主選單有沒有次分類menu
			if (subCateUrl != ""){
				if (findMenu('li.cateMain a.Menu1st-menu', 2, subCateUrl))	return false;
			}
			// 找不到的話再以主分類去找
			if (mainCateUrl != ""){
				if (findMenu('li.cateMain a.Menu1st-menu', 2, mainCateUrl))	return false;
			}else{
				if (findMenu('li.cateMain a.Menu1st-menu', 1, cateMain))	return false;				
			}
		}else{
			// 頻道頁
			var canonical = $("link[rel='canonical']").attr("href").toLowerCase();
			if (findMenu('li.cateMain a.Menu1st-menu', 2, canonical))	return false;
			if (findMenu('li.cateMain a.Menu2nd-menu', 2, canonical))	return false;
			if (findMenu('li.cateMain a.Menu3rd-menu', 2, canonical))	return false;
		}
		/* //menu頻道捲動
		var maxIdx = 0;
		if (selectedFlag){
			if ($("#txtDeviceType").val() == "mb"){
				maxIdx = 3;
			}
			else{
				maxIdx = 14;
			}
			$('li.cateMain').each(function(idx) {
				if (this.id == "menuItemSelected" && idx>maxIdx){
					$("#slider-navBar").trigger('to.owl.carousel', idx);
					return false;
				}
			});
		}
		*/
});
function findMenu(queryItem, kind, compare_str){
	var flag = false;
	$(queryItem).each(function () {
		var judge = false;
		if (kind == 1){
			judge = (this.href.indexOf("/" + compare_str + "/") > -1? true : false);
		}else{
			judge = (this.href.toLowerCase() == compare_str? true : false);	
		}
		if (judge) {
			$(this).closest("li.cateMain").addClass('act');
			$(this).closest("li.cateMain").attr("id", "menuItemSelected");
			flag = true;
			return false;
		}
	});
	return flag;	
}
//--------------------------------------------------------
// 內文頁專用
//--------------------------------------------------------
$(function(){
	if (traceData.page == "news"){
		//字型大小
		$('.fontSize .change-fs, .cog .change-fs').on("click", function () {
			$('body').css('font-size', $(this).attr('data-size'));
			$(this).parent().toggleClass("active");
			$(this).parent().siblings().removeClass("active");
		});
		$('.fontSize .xl a').on("click", function () {
			$('.chart-fdt, .cw').addClass("xl");
			$('.chart-fdt, .cw').removeClass("lg md sm");
		});
		$('.fontSize .lg a').on("click", function () {
			$('.chart-fdt, .cw').addClass("lg");
			$('.chart-fdt, .cw').removeClass("xl md sm");
		});
		$('.fontSize .md a').on("click", function () {
			$('.chart-fdt, .cw').addClass("md");
			$('.chart-fdt, .cw').removeClass("xl lg sm");
		});
		$('.fontSize .sm a').on("click", function () {
			$('.chart-fdt, .cw').addClass("sm");
			$('.chart-fdt, .cw').removeClass("xl lg md");
		});	
		//pswp相簿	
		var flag = false;
		var div_id = "#divGallery";
		$(div_id).find('figure.image').each(function(index, item){
			var imgObj =  $(item).children("img");
			if (imgObj.length>0){
				var imgUrl = (typeof imgObj[0].currentSrc !== "undefined"? imgObj[0].currentSrc : imgObj[0].src); 
				var capObj =  $(item).children("figcaption");
				capObj.attr("class","pswp__dynamic-caption--below");		
				$(item).prepend($('<a />').attr(
						{"href": imgUrl, "class":"gallery-image","data-pswp-width":imgObj[0].width, "data-pswp-height":imgObj[0].height, "style":"width:100%"})
						.append(imgObj[0].outerHTML));
					imgObj.remove();
			}
		});	
	}
});
//--------------------------------------------------------
// 置底廣告、回到頂端
//--------------------------------------------------------
//function hide(target) { document.getElementById(target).style.display = 'none';}
function hide(target) { $(target).hide(); }
$(function() {
	var scroll_top = 0;
	if ($("#txtDeviceType").val() == "pc"){
		scroll_top = 700;
	}else{
		scroll_top = 500;
	}
	$(window).on("scroll",function(){
		if ($(this).scrollTop() > scroll_top)  {
			// 置底ad
			$('#close-ad').addClass('show');
			$('#close-ad').removeClass('hideit');
			// 回到top
			$(".gotop").css("display", "block");
		 } else {
			$('#close-ad').removeClass('show');
			$('#close-ad').addClass('hideit');
			$(".gotop").css("display", "none");
		 }		
	});
    $(".gotop").on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });	
});
//--------------------------------------------------------
// swiper for專題icon
//--------------------------------------------------------
function swiperTopicInit(selectorName) {
	var swiper = new Swiper(selectorName, {
        loop: false,
        init: true,
        lazy: true,
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        grabCursor: true,
        mousewheel: { releaseOnEdges: true },
        navigation: {
            nextEl: '.topic-container .swiper-button-next',
            prevEl: '.topic-container .swiper-button-prev',
        },
        breakpoints: {
			0: {
                slidesPerView: 3.1,
                slidesPerGroup: 1
            },
            576: {
                slidesPerView: 5,
                slidesPerGroup: 2
            },
            800: {
                slidesPerView: 6.5
            },
            1024: {
                slidesPerView: 7.5
            },
            1200: {
                slidesPerView: 10
            }
        },
    });
}
//--------------------------------------------------------
// swiper for 列表頁
//--------------------------------------------------------
function swiperListPageInit(selectorName) {
    var sliderSelector = selectorName,
        options = {
            init: false,
            loop: true,
            speed: 500,
            autoplay: { delay: 3000, disableOnInteraction: false },
            slidesPerView: 4,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: { rotate: 30, stretch: 10, depth: 150, modifier: 1, slideShadows: true },
            grabCursor: true,
            parallax: true,
            pagination: false,
            pagination: { el: '.slider3D .swiper-pagination', clickable: true },
            navigation: {
                nextEl: '.slider3D .swiper-button-next',
                prevEl: '.slider3D .swiper-button-prev',
            },
            breakpoints: {
                1199: { slidesPerView: 3.5, pagination: false },
                991: { slidesPerView: 3.3, pagination: false },
                799: { slidesPerView: 2.8, pagination: false},
                1: { slidesPerView: 1, spaceBetween: 0 }
            },
            on: {
                imagesReady: function () {
                    this.el.classList.remove('loading');
                }
            }
        };
    var mySwiper = new Swiper(sliderSelector, options);
    mySwiper.init();	
}
//--------------------------------------------------------
// 產生header menu item
//--------------------------------------------------------
function genMenu(obj){
	var menuContentAside = "";
	var subMenuHtmlAside = "";
	var menuHtml = "";
	var menuContent = "";
	var subMenuHtml = "";
	var subNewsHtml = "";
	var thirdMenusHtml = "";
	var thirdMenusTemp1 =
	        "<li><div class='nn-card'>" +
	        "<a href='{0}' class='Menu3rd-menu'>" +
	        "<div class='img'><img class='lazyload' src='{1}' alt='{2}' loading='lazy'></div>" +
	        "<div class='txt'><p>{3}</p></div>" +
	        "</a></div></li>";
	var thirdMenusTemp =
	            "<li><div class='nn-card'>" +
	            "<a href='{0}' class='Menu3rd-menu'>" +
	            "<div class='img' style='background-image: url(&quot;{1}&quot;);'><img class='lazyload' src='{1}' alt='{2}' loading='lazy'></div>" +
	            "<div class='txt'><p>{2}</p></div>" +
	            "</a></div></li>";        
	var thirdMenuLgTemp =
	        "<div class='nn-card'><a href='{0}' class='Menu2nd-menu'>" +
	        "<div class='img'><img class='lazyload' src='{1}' alt='{2}' loading='lazy'></div>" +
	        "<div class='txt'><p>{3}</p></div></a></div>";
	var thirdMenuLg = "";
	var lgFlag = false;
	$.each(obj, function (index1, item) {
		var name = item.name;
		lgFlag = false;
		var subMenuContentAside = "";
		var subMenuContent = "";
		subMenuHtml = "";
	    thirdMenusHtml = "";
	    thirdMenuLg = "";	
		// 有第二層選單
		if(typeof item.subList !="undefined" && item.subList.length>0){
			$.each(item.subList, function (index2, item) {
	            // 有第三層選單
	            if(typeof item.newsList !="undefined"){
	                var newsList = item.newsList;
	                var newsMenuContent = "";
	                $.each(newsList, function (index3, item) {
	                    var postTitle = item.postTitle;
	                    var postUrl = item.postOnlyUrl;
	                    var imageUrl = item.imageUrl;
	                    if(postUrl.substr(0,1) =="/"){
	                        postUrl = NNhost + postUrl;
	                    }
	                    // 第三層第一則要顯示在第二層
	                    if (index2== 0 && index3 == 0) {
	                        thirdMenuLg = String.format(thirdMenuLgTemp, postUrl, imageUrl, postTitle, postTitle);
	                        lgFlag = true;
	                    }
	                    //newsMenuContent += String.format(thirdMenusTemp, postUrl, imageUrl, postTitle, postTitle);
	                    newsMenuContent += String.format(thirdMenusTemp, postUrl, imageUrl, postTitle);
	                });
	                thirdMenusHtml = "<div class='box'><ul>" + newsMenuContent + "</ul></div>";	
	            }
	            var subName = item.name;
	            var subTarget = "_blank";
	            var subRelOpenner = " rel=\"noopener\"";
	            var subtracetype = "brand";
	            if(item.url == null || item.url==""){
	                subUrl = item.link;
	                subTarget = "";
	                subRelOpenner = "";
	                subtracetype = "category";
	            }else{
	            	subUrl = item.url;
	            }
	            if(subUrl.substr(0,1) =="/"){
	                subUrl = NNhost + subUrl;
	            }
	            subMenuContent += String.format("<li><a href=\"{0}\" target=\"{1}\"{2} class='Menu2nd-menu trace-click' data-tracetype='{3}' data-sec='main_menu' data-maincat='{4}'>{5}</a>{6}</li>", subUrl, subTarget, subRelOpenner, subtracetype, name, subName, thirdMenusHtml);
	            subMenuContentAside += String.format("<li><a href=\"{0}\" target=\"{1}\" class='SnowplowCategoryName Menu2nd-aside trace-click' rel='noopener' data-tracetype='{2}' data-sec='hamburger_menu' data-maincat='{3}'>{4}</a></li>", subUrl, subTarget, subtracetype, name, subName);
			});
			subMenuHtml = "<div class='box'>" + thirdMenuLg + "<ul class='subMenu'>" + subMenuContent + "</ul></div>";
			subMenuHtmlAside = "<div class='box'><ul>" + subMenuContentAside + "</ul></div>";
			menuContentAside += String.format("<div class='nnBlk'><div class='title'>{0}</div>{1}</div>", name, subMenuHtmlAside);		
		}
	    var url = item.url;
	    var target = "_blank";
	    var relOpenner = " rel=\"noopener\"";
	    var tracetype = "brand";
	    if(item.url == null || item.url==""){
			url = item.link;
			target = ""; // url 新開, link 當前 reload
			relOpenner = "";
			tracetype = "category";
	    }
	    if(url.substr(0,1) =="/"){
	        url = NNhost + url;
	    }
	    var mainClass = "cateMain";
	    if (lgFlag) {
	    	mainClass = "lg cateMain";
	    }
	    menuContent += String.format("<li class='{0}'><a href='{1}' target='{2}' class='SnowplowCategoryName Menu1st-menu trace-click'{3} data-tracetype='{4}' data-sec='main_menu'>{5}</a>{6}</li>", mainClass, url, target, relOpenner, tracetype, name, subMenuHtml);
	});
	$(".aside .nn-body").append(menuContentAside);	
	$("#slider-navBar").append(menuContent);
}
//--------------------------------------------------------
// 產生header 專題icon
//--------------------------------------------------------
function genTopics(obj){
	var topicContent = "";
	var topicContentTemp =
	        "<div class='swiper-slide'>" +
                "<div class='topic-icon-wrap @HL@'>" +
                    "<button class='topic-logo'  type='button' aria-label='{0}'>" +
                        "<img src='{1}' alt='{0}' />" +
                    "</button>" +
                    "<div class='dropdown-content'>" +
                        "<a class='trace-click' href='{2}' target='_blank' aria-label='{0}' data-sec='topics_menu' data-tracetype='brand' rel='noopener'>專頁</a>" +
                        "<a class='trace-click' href='{3}' target='_blank' aria-label='{0}' data-sec='topics_menu' data-tracetype='category' rel='noopener'>新聞</a>" +
                    "</div>" +
                "</div>" +
            "</div>";
	var topicContentTempSingle =
	        "<div class='swiper-slide'>" +
                "<div class='topic-icon-wrap @HL@'>" +
                    "<a class='topic-logo single-item' href='{2}' aria-label='{0}' target='_blank' data-sec='topics_menu' data-tracetype='{3}' rel='noopener'>" +
                        "<img src='{1}' alt='{0}' />" +
                    "</a>" +
                "</div>" +
            "</div>";
	var cnt = 0;
	$.each(obj, function (index1, item) {
		var name =  (typeof item.name !== "undefined"? item.name.trim() : "");
	    var link = (typeof item.link !== "undefined"? item.link.trim() : "");
	    var iconUrl = (typeof item.iconUrl !== "undefined"? item.iconUrl.trim() : "");
	    var catUrl = (typeof item.catUrl !== "undefined"? (item.catUrl.trim()!=""? NNhost+item.catUrl.trim():"") : "");
	    var target = "_blank";
	    var relOpenner = " rel=\"noopener\"";
	    var tracetype = "brand";
	    var catClass = "";
	    var linkClass = "";
		if (link != "" && catUrl != ""){
	    	topicContent += String.format(topicContentTemp, name, iconUrl, link, catUrl);			
		}else{
			var url = (link != ""? link : catUrl);
			var data_type = (link != ""? "brand" : "category");
			if (url!=""){
	    		topicContent += String.format(topicContentTempSingle, name, iconUrl, url, data_type);
			}			
		}
		if (cnt++==0){
			topicContent = topicContent.replace("@HL@", "highlight");
		}else{
			topicContent = topicContent.replace(" @HL@", "");			
		}
	});
	$("#divTopicSwiper").append(topicContent);	
	swiperTopicInit(".topic-container .swiper-container");
}

function fixBlock($Main, $Sticky, pos, hh) {
    $(window).scroll(function() {
        var iWinScrollT = $(this).scrollTop();
        var iPoint_1 = pos;
        if ($Main.height() > $Sticky.height() && iWinScrollT > iPoint_1) {
            $Sticky.css({
                "position": "fixed",
                "bottom": $('footer').height()+hh,
                "z-index": "1"
            });
        } else {
            $Sticky.css({
                "position": "static",
                "bottom": "unset"
            });
        }
    });	
}
//--------------------------------------------------------
// 列表頁 更多新聞
//--------------------------------------------------------
function getMoreNews(nQueryLength, div_id){
	if (nQueryLength < 8){
		$("#moreNews").text("沒有更多了");
		return;
	}	
	var template = "<li><a href='{3}'><div class='card'>" +
	"<div class='img' style='background-image: url(&quot;{0}&quot;); background-size: cover; background-position: center center;'></div>" +
	"<div class='txt'><h3>{1}</h3>" +
	"<p class='time'><span class='i-calendar'></span>{2}</p>" +
	"</div></div></a></li>"	
	 template = "<li>" +
			"<a href='{3}' class='trace-click' data-tracetype='content' data-sec='category_item' aria-label='{1}'>" +
				"<div class='card'>" +
					"<div class='img'><img src='{0}' alt='{1}' loading='lazy' onerror='imgNotFound()'></div>" +
					"<div class='txt'>" +
						"<h3>{1}</h3>" +
						"<p class='time'><span class='i-calendar'></span>{2}</p>" +
					"</div>" +
				"</div>" +
			"</a>" +
	"</li>";
	var rtn = "";
	var dataUrl = $('#'+div_id).attr("data-url")+$('#'+div_id).attr("data");
	$.ajax({
	    type: 'GET',
	    url: dataUrl,
	    contentType: 'application/json',
	    success: function(obj) {
	    	if (obj == null){
	    		$("#moreNews").text("沒有更多了");
	    		return;
	    	}
			var newslist = obj.data.newsList;
	    	if (newslist == null){
	    		$("#moreNews").text("沒有更多了");
	    		return;
	    	}
	    	nQueryLength = newslist.length;
	    	var pos = $(document).scrollTop();
			$.each(newslist, function(index,item) {
				var html = String.format(template, item.imageUrl, item.postTitle, item.newsDate, NNhost+item.postOnlyUrl);
				$("#ulNewsList").append(html);
				$('#'+div_id).attr("data", item.id);
			});
			$('html, body').scrollTop(pos);
	    }
	}); 
}

//可在Javascript中使用如同C#中的string.format
//使用方式 : var fullName = String.format('Hello. My name is {0} {1}.', 'FirstName', 'LastName');
String.format = function () {
	var s = arguments[0];
	if (s == null) return "";
	for (var i = 0; i < arguments.length - 1; i++) {
		var reg = getStringFormatPlaceHolderRegEx(i);
		s = s.replace(reg, (arguments[i + 1] == null ? "" : arguments[i + 1]));
	}
	return cleanStringFormatResult(s);
}
//可在Javascript中使用如同C#中的string.format (對jQuery String的擴充方法)
//使用方式 : var fullName = 'Hello. My name is {0} {1}.'.format('FirstName', 'LastName');
String.prototype.format = function () {
	var txt = this.toString();
	for (var i = 0; i < arguments.length; i++) {
		var exp = getStringFormatPlaceHolderRegEx(i);
		txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
	}
	return cleanStringFormatResult(txt);
}
//讓輸入的字串可以包含{}
function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
	return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}
//當format格式有多餘的position時，就不會將多餘的position輸出
//ex:
//var fullName = 'Hello. My name is {0} {1} {2}.'.format('firstName', 'lastName');
//輸出的 fullName 為 'firstName lastName', 而不會是 'firstName lastName {2}'
function cleanStringFormatResult(txt) {
	if (txt == null) return "";
	return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
}
//動態create js
function createScript(sSrc, sId, obj) {
	var oScript = document.createElement("script");
	oScript.type = "text/javascript";
	oScript.defer = true;
	oScript.src = sSrc;
	if (sId != null && sId != "") oScript.id = sId;
	obj.appendChild(oScript);
	oScript.onload = function () {
	}
	oScript.onerror = function () {
	}
}
//取得裝置種類
function getDeviceType() {
	var device = "";
	if ($("#txtDeviceType").length > 0) {
		device = $("#txtDeviceType").val();
	}
	else{
		$("body").append("<input type='hidden' id='txtDeviceType' />");
	}
	if (device == ""){
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			device = "mb";
		} else {
			device = "pc";
		}
		$("#txtDeviceType").val(device);
	}
	return device;
}
// 產生動態亂數
function getRandom(x) {
	return Math.floor(Math.random() * x) + 1;
};
// 頻道頁 image缺圖handle
function imgNotFound(){
    var img=event.srcElement;
    img.src="/NOWnews/images/listpage-item-blank.png";
    img.onerror=null;
}