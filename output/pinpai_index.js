window.onload = function() {
	var dourl = window.location.href;

	if (dourl.indexOf("CMS/producePage/producePage?pageId=PAGEPDB2vhvSivDmKM8szduz201111") > -1) {
		$(".nav_wrapper_bg").css("height", "290px");
		$(".nav_wrapper").css("height", "280px");
		$(".nav_wrapper_bg .nav_wrapper .slide_down").css("padding-top", "50px");
		$("#SUBD1605066532559805").css({
			"height": "150px",
			"padding-top": "80px"
		});
		$("#SUBD1605066532559852").css({
			"height": "160px",
			"padding-top": "370px"
		});
		$("#SUBD1605066532559848").css({
			"height": "900px"
		});
		$(".ELMT2jI6Ua6dnPkYlHHKHtMW201111").css({
			"height": "800px"
		});
		$("#SUBD1546831101488214").css("float", "none");
		$(".modelCon").css("height", "2000px");
		$(".ELMTFGWjAl3vmeCcYPk2ERkN201111.slicTab .box").css({
			"height": "540px"
		});
		$("#ELMTkMUs7C2tr49KEE53IMmy201111").css("padding-top", "320px");
		$("#ELMTtQWA5qWey6hhj3RrPGzc201111").css("padding-top", "120px");
		$("#ELMTkcfT7XAVykimqcOaOsKG201111").css("height", "80px");
		$("#ELMTpk7guiC7rg8j1PpyAKTK201111").css("padding-top", "200px");
		$("#shadowmsg").css("top", "480px");
		$(".modeNews .modelCon .cont").css("width", "1200px");
		$(".slicTab .box .inside").css("overflow", "visible");
		$("#ELMTFGgc9PJyRAIn3kTg5h52210607").css("min-height","30px");
	} 
	
	if (dourl.indexOf("CMS/producePage/producePage?pageId=PAGEGRxiNJPvYdSJnYUJ1wij201216") > -1) {
		$(".nav_wrapper_bg").css("height", "290px");
		$(".nav_wrapper").css("height", "280px");
		$(".nav_wrapper_bg .nav_wrapper .slide_down").css("padding-top", "50px");
		$("#SUBD1605066532559805").css({
			"height": "150px",
			"padding-top": "80px"
		});
		$("#SUBD1605066532559852").css({
			"height": "160px",
			"padding-top": "370px"
		});
		$("#SUBD1605066532559848").css({
			"height": "900px"
		});
		$(".ELMT2jI6Ua6dnPkYlHHKHtMW201111").css({
			"height": "800px"
		});
		$("#SUBD1546831101488214").css("float", "none");
		$(".modelCon").css("height", "2000px");
		$(".ELMTFGWjAl3vmeCcYPk2ERkN201111.slicTab .box").css({
			"height": "540px"
		});
		$("#ELMTkMUs7C2tr49KEE53IMmy201111").css("padding-top", "320px");
		$("#ELMTtQWA5qWey6hhj3RrPGzc201111").css("padding-top", "120px");
		$("#ELMTkcfT7XAVykimqcOaOsKG201111").css("height", "80px");
		$("#ELMTpk7guiC7rg8j1PpyAKTK201111").css("padding-top", "200px");
		$("#shadowmsg").css("top", "480px");
		$(".modeNews .modelCon .cont").css("width", "1200px");
		$(".slicTab .box .inside").css("overflow", "visible");
		$("#ELMTFGgc9PJyRAIn3kTg5h52210607").css("min-height","30px");
	} 
	
	if (dourl.split('/')[2] == "big5.cctv.com") {
		var Simplified = "<a href='https://www.cctv.com'>簡體</a>";
		$(".lan .slide_con ul li:first").html(Simplified);
	}
	//测试1pageId:PAGEGRxiNJPvYdSJnYUJ1wij201216；2：PAGEPDB2vhvSivDmKM8szduz201111
	//刷新时间
	/*
	var d=now;
	d = d.getTime();
	var shauxintime=new Date('01/17/2020 18:18:00').getTime()-d;
	if(shauxintime>0){
	setTimeout(function(){window.location.reload()},shauxintime)	
	}
	*/
}

$(document).ready(function(){
		$('#scrollbar1').tinyscrollbar();
	});

/*号外轮播图*/
	function extra_carousel(obj){
		var Car_index = 0;
		var Car_sIt = 0;
		var box_conts = $("#"+obj);
		var box_img = box_conts.find(".con");
		var box_btn = box_conts.find(".extra_btn");
		var box_left = box_conts.find(".extra_btn .left_btn");
		var box_right = box_conts.find(".extra_btn .right_btn");
		var box_pics = box_conts.find(".pics_btn");
		var btn_leng =  box_img.find("ul li").length;
		box_pics.find(".btn2").html(btn_leng);
		if(btn_leng>1){
			box_pics.show();
			box_left.show();
			box_right.show();
		}
		box_pics.find("i").click(function(){//小按钮控制轮播
		  var btn_index = $(this).index();
		  Car_nextImg(btn_index);
		});
		box_left.click(function(){
			Car_index -- ;
			Car_nextImg(Car_index);
		});
		box_right.click(function(){//右耳朵控制轮播
			Car_index ++ ;
			Car_nextImg(Car_index);
		});
		if(btn_leng > 1 ){
			box_btn.show();
			var Car_sIt = setInterval(function(){
				Car_index ++ ;
				Car_nextImg(Car_index);
			},5000);
			box_conts.live("mouseleave",function(){
				Car_sIt = setInterval(function(){
					Car_index ++ ;
					Car_nextImg(Car_index);
				},5000);
			})
			box_conts.live("mouseover",function(){
				clearInterval(Car_sIt);
			})
		}
		function Car_nextImg(Car_index1){
			Car_index = Car_index1;
			if (Car_index >= btn_leng){
				Car_index = 0;
			}
			if (Car_index < 0){
				Car_index = btn_leng - 1 ;
			};
			box_pics.find("i").eq(Car_index).addClass("blue").siblings().removeClass("blue");
			box_img.find("li").eq(Car_index).addClass("show").siblings("li").removeClass("show");
			box_img.find("li").eq(Car_index).find("img").attr("src",box_img.find("li").eq(Car_index).find("img").attr("data"));
			box_pics.find(".btn1").html(Car_index+1);
		};
	  }
	  extra_carousel("extra_carousel");

if($("#player_container").length>=1){
var flvChannel = $("#player_container").attr("data-xinh");
var playerParas = {
		divId: "player_container",
		/*播放器容器id，必填项*/
		w: "960",
		/*播放器宽度，必填项*/
		h: "540",
		/*播放器高度，必填项*/
		t: flvChannel,
		/*台名称，比如cctv1,cctv13等，必填项*/
		isAutoPlay: "true",
		/*是否自动播放，只有false为不自动播放，其它值为自动播放*/
		br: "",
		/*设置默认码率*/
		posterImg: "",
		/*播放器前贴图片*/
		isLive4k: "false",
		/*是否为4k播放器，true是4k,false不是*/
		isHttps: "true",
		/*是否https视频，true是,false不是*/
		wmode: "opaque",
		/*flash播放器的窗口模式，默认为opaque*/
		hasBarrage: "false",
		/*是否有弹幕功能，默认false，false时不显示弹幕、不显示弹幕设置按钮、不显示弹幕开关、不访问弹幕接口和表情包配置接口e*/
		playerType: "live",
		/*播放器类型，small表示小窗播放器*/
		webFullScreenOn: "false",
		/*是否显示网页全屏按钮，默认true表示显示*/
		others: "" /*其它待定参数*/
	};
	createLivePlayer(playerParas);
}

/*低版ie判断*/
var browser = navigator.appName
var b_version = navigator.appVersion
var version = b_version.split(";");
var BrowserIE = false,
	BrowserIE9 = false,
	BrowserIE10 = false,
	equipmentMove = false;
if (version[1] != undefined) {
	var trim_Version = version[1].replace(/[ ]/g, "");
	if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0" || trim_Version == "MSIE7.0" || trim_Version ==
		"MSIE8.0") {
		BrowserIE = true;
	} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
		BrowserIE9 = true;
	}else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE10.0") {
		BrowserIE10 = true;
	}
}


/*无障碍功能*/
if(BrowserIE || BrowserIE9){
	$(".jkAging_icon").hide();
}

$(".nav_wrapper_bg .nav_wrapper .nav_list .jkAging_icon").click(function(){
	window.goldlog.record("/nav.1.9", "", "snsScene=banner&product=pcweb&navname=无障碍", "");
	window.robotInitFun();
});

if (/AppleWebKit.*mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || (
		/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
		.test(navigator.userAgent))) {
	equipmentMove = true;
}


if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)|| (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
	equipmentMove = true;
}

/*监听*/
var scrollTop,windowWidth;
var windowH = window.innerHeight; 
var windowW = window.innerWidth;

if(windowW <= 1417){windowWidth = true;
}else{windowWidth = false;}

window.onscroll = function(){
	scrollTop = $(window).scrollTop();
	if(equipmentMove == false){videoPlayer();}	//直播播放器监听
	inspect();		//悬浮导航显影、高亮监听
};

window.onresize=function(){
	windowH = window.innerHeight; 
	windowW = window.innerWidth;
   // setTimeout(function(){
	if (windowW <= 1417 && windowWidth == false){
		windowWidth = true;
		MonitorOnresize();		/*直点播播放器*/
		activityStar();			/*特别推荐*/
		wrapStar();				/*手风琴*/
	}else if (windowW > 1417 && windowWidth == true){
		windowWidth = false;
		MonitorOnresize();		/*直点播播放器*/
		activityStar();			/*特别推荐*/
		wrapStar();				/*手风琴 */
	}
   // },100); 
}
/*
window.onresize=function(){

};*/


/*套头*/
$(".wrapper_TaotouBg .emblem .embclose").click(function(){
	$(".wrapper_TaotouBg").hide();
	for(var i=0;i<idTop.length;i++){
		idTop[i]=idTop[i]-180;
	}	
});

var isHttps = location.href.split("/")[0].indexOf("https") > 0 ? "true" : "false";
/*监听*/
var scrollTop,windowWidth;
var windowH = window.innerHeight; 
var windowW = window.innerWidth;
if(windowW <= 1417){windowWidth = true;
}else{windowWidth = false;}

window.onscroll = function(){
	scrollTop = $(window).scrollTop();
	if(equipmentMove == false){videoPlayer();}	//直播播放器监听
	inspect();		//悬浮导航显影、高亮监听
};
//window.onresize=function(){

$(window).resize(function () {
	windowH = window.innerHeight; 
	windowW = window.innerWidth;
	if (windowW <= 1417 && windowWidth == false){
		windowWidth = true;
		MonitorOnresize();		/*直播播放器 */
		activityStar();			/*特别推荐*/
		wrapStar();				/*手风琴 */
	}else if (windowW > 1417 && windowWidth == true){
		windowWidth = false;
		MonitorOnresize();		/*直播播放器 */
		activityStar();			/*特别推荐*/
		wrapStar();				/*手风琴 */
	}
	channelListScrollbarFun();
   if($("#classify").height() > 0){
	   $("#classify").css("height",windowH);
   }
})

//}
function MonitorOnresize(){/*直点播监听*/
	if(windowWidth){
		$(".video_play").css({"width":"368px","height":"207px"});
		$(".video_play embed").css({"width":"368px","height":"207px"});
		$("#video").css({"width":"876px","height":"580px"});
	}else{
		$(".video_play").css({"width":"400px","height":"225px"});
		$(".video_play embed").css({"width":"400px","height":"225px"});
		$("#video").css({"width":"980px","height":"634px"});
	}
}
/*登录密码输入框区域*/
function show_pwd() {
	document.getElementById("passwd_view").style.display = "none";
	document.getElementById("password").style.display = "block";
	setTimeout(function() {
		$("#SI_Top_LoginLayer").css("display", "block")
		document.getElementById("password").focus()
	}, 1)
}



function channelListScrollbarFun() {
	var channelListH = $("#channelListScroll").height();
	$("#channelListScroll").css("height",windowH-130);
	
	if(channelListH>(windowH-130)){
		$(".nav_wrapper_bg .nav_wrapper .slide_down .slide_bottom .channelList").css("overflow-y","scroll")
		$("#channelListScroll").scroll(function(){
			var top = $("#channelListScroll").scrollTop();
			if(top>0){
				$(".nav_wrapper_bg .nav_wrapper .slide_down .classify .titlist").addClass("curTop")
			}else{
				$(".nav_wrapper_bg .nav_wrapper .slide_down .classify .titlist").removeClass("curTop")
			}
		})
	}else{
		$(".nav_wrapper_bg .nav_wrapper .slide_down .slide_bottom .channelList").css("overflow-y","auto")
		
		$(".nav_wrapper_bg .nav_wrapper .slide_down .classify .titlist").removeClass("curTop")
		$("#channelListScrollbar .scrollbar").hide();
	}
}



$(".classify .titlist .close").click(function(event){
	$("body").attr("style","overflow-y: inherit;");
	slide_uper_top(top_slide.parents(".slide_down").find(".classify"),0,-windowH,true);
})


/*****************************搜索***************************************************/
var check = $('#search_type');
var check_box = $('#select_menu');
var _input = $('#mytxtdafdfasdf');
var check_slide = $('#sContent');
var _inputbot = $('#mytxtbottom');
var none_check = '#search_type';
var none_search = '#search_outer';
var none_input = '#kw';
var none_a = '#select_menu a';
var none_btn = '#search_btn';
var _index;
var _nav = $('.nav_list .navli');
var _slide = $('.slide_down .slide');
var _signS = $(".slide_down .sign");
var _classifyS = $(".slide_down .classify");

var none_classify='#classify';

var topindex;
var top_nav=$('.nav_wrapper_bg .nav_list .navli');
var top_slide=$('.nav_wrapper_bg .slide_down .slide');
/*登录框*/
var login01 = $('#username');
var login02 = $('#passwd_view');
var login022 = $('#password');
var login03 = $('#check_user');
var login04 = $('.dl');
var asee = $('#password').parent("td");
var login05 = $('.nav_wrapper_bg .nav_wrapper .slide_down .sign');

//选择搜索类型
check.click(function() {
	check_box.css({
		'display': 'block'
	});
})
check_box.find('a').click(function() {
	check_box.css({	'display': 'none'});
	var type = $(this).attr('type');
	var dom_inner = $(this).html();
	check.attr('value', type);
	check.html(dom_inner);
})
//$('body').click(function(e) {
//	var target = $(e.target);
//	if (!target.is('.nav_wrapper_bg .nav_wrapper .slide_down .search .slide_con .search_box .box_con .input')) {
//		check_slide.css({
//			'display': 'none'
//		});
//	}
//	if (!target.is(none_search) && !target.is(check) && !target.is(none_a) && !target.is(_input) && !target.is(none_btn)) {
//		search_n($('.nav_wrapper_bg .nav_wrapper .slide_down .search'), 0);
//	}
//});

$('body').click(function(e) {
    var target = $(e.target);
    if(!target.is('.nav_wrapper_bg .nav_wrapper .slide_down .search .slide_con .search_box .box_con .input')){
        check_slide.css({'display':'none'});
    }
    if(!target.is(none_search) && !target.is(check) && !target.is(none_a) && !target.is(_input) && !target.is(none_btn)){
        search_n($('.nav_wrapper_bg .nav_wrapper .slide_down .search'),0);
    }
	slide_uper_top(top_slide.parents(".slide_down").find(".sign"),0,-290,true);
});


//搜索联想功能 BEGIN
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
/*提交搜索*/
function searchForm_submit() {
	var str = trim(document.getElementById("mytxtdafdfasdf").value);
	if (str.length > 0) {
		document.getElementById("inputBox").submit();
	} else {

		window.open("https://search.cctv.com/index.php");
	}
}
//点击选中搜索
function queryByInput(qtext) {
	var sel_type = $("#search_type").attr('value');
	document.getElementById("sContent").style.display = "none";
	if (trim(qtext) != "") {
		window.open("https://search.cctv.com/search.php?qtext=" + encodeURIComponent(qtext) + "&type=" + sel_type, "_blank");
	} else {

		window.open("https://search.cctv.com/index.php");
	}
}

function queryByInputbottom(qtext) {

	var boottomtype = "web"
	if (trim(qtext) != "") {
		window.open("https://search.cctv.com/search.php?qtext=" + encodeURIComponent(qtext) + "&type=" + boottomtype,
			"_blank");
	} else {

		window.open("https://search.cctv.com/index.php");
	}
}

function queryByType(qtype) {
	var sel_type = $("#text").val();
	document.getElementById("qtype_web").className = "";
	document.getElementById("qtype_video").className = "";
	document.getElementById("qtype_blog").className = "";
	var q_obj = document.getElementById("qtype_" + qtype);
	q_obj.className = "cur";
	document.getElementById("text").value = qtype
	var str = trim(document.getElementById("mytxtdafdfasdf").value);
	if (str.length > 0) {
		document.getElementById("inputBox").submit();
	}
}
/*用于搜索下拉框输出*/
var selectSuggestNum = -1;
var checkFlag = true;
var _ajax2;
var _oldtext = "";
////点击其它地方收起下拉
//if (document.all) {
//	document.body.attachEvent("onclick", hideSuggest);
//} else {
//	document.body.addEventListener("click", hideSuggest);
//}
//
//function hideSuggest() {
//	document.getElementById("sContent").style.display = "none";
//}
//点击其它地方收起下拉
if(document.all) {
	document.body.attachEvent("onclick", hideSuggestnewtop);
} else {
	document.body.addEventListener("click", hideSuggestnewtop);
}
function hideSuggestnewtop() {
	document.getElementById("sContent").style.display = "none";
	$(".sContent").hide();
}

document.getElementById("mytxtdafdfasdf").onkeydown = function() {
	var event = window.event || arguments[0];
	if (event.keyCode == 13) { //回车       
		try {
			event.cancelBubble = true;
			event.returnValue = false;
			event.stopPropagation();
			event.preventDefault();
		} catch (e) {}
		queryByInput(document.getElementById("mytxtdafdfasdf").value);
	}
	if (event.keyCode == 40 || event.keyCode == 38) {
		var keycode = event.keyCode;
		if (keycode == 40 || keycode == 38) {
			//向下向上
			changeSuggest(keycode);
		}
	}
	if (event.keyCode >= 16 && event.keyCode <= 47 || event.keyCode == 13) {
		checkFlag = false;
	} else {
		checkFlag = true;
	}
}

//点击下拉
function clickSuggest(_csuggest) {
	try {
		event.cancelBubble = true;
		event.returnValue = false;
		event.stopPropagation();
		event.preventDefault();
	} catch (e) {}
	if (_csuggest != "" && _csuggest != undefined) {
		document.getElementById("mytxtdafdfasdf").value = _csuggest;
		queryByInput(document.getElementById("mytxtdafdfasdf").value);
		resetSelect();
	}
}

function changeSuggest(keycode) {
	var rownum = document.getElementById("sContent").getElementsByTagName("li").length;
	if (selectSuggestNum == -1 || selectSuggestNum == undefined) {
		if (keycode == 40) rowON = 0;
		if (keycode == 38) rowON = rownum + selectSuggestNum;
	} else {
		if (keycode == 40) rowON = selectSuggestNum + 1;
		if (keycode == 38) rowON = selectSuggestNum - 1;
	}
	if (rowON < 0 || rowON >= rownum) {
		resetSelect();
		return false;
	} else {
		document.getElementById("mytxtdafdfasdf").value = suggestJSON[rowON]['name'];
		onSuggest(rowON);
	}
	if (rownum > 0 && document.getElementById("sContent").style.display != "block") {
		document.getElementById("sContent").style.display = "block";
		return false;
	}
}

function resetSelect() {
	var sel_suggest = "suggest_" + selectSuggestNum;
	if (document.getElementById(sel_suggest) != undefined)
		document.getElementById(sel_suggest).className = "";
	selectSuggestNum = -1;
	document.getElementById("mytxtdafdfasdf").value = _oldtext;
	document.getElementById("sContent").style.display = "block";
	checkFlag = false;
}

function checkSuggest(qtext) {
	if (checkFlag) {
		if (qtext != "" && qtext != undefined && qtext != _oldtext) {
			var sug_url = "https://search.cctv.com/webtvsuggest.php?q=" + encodeURIComponent(qtext);
			_oldtext = qtext;
			loadData_sug(sug_url, createSuggest);
		} else {
			if (qtext == "")
				document.getElementById("sContent").style.display = "none";
			else if (qtext == _oldtext)
				document.getElementById("sContent").style.display = "block";
		}
	}
}

function loadData_sug(url, func) {
	var ds2 = document.createElement("script");
	ds2.src = url;
	ds2.setAttribute("charset", "utf-8");
	ds2.type = "text/javascript";
	ds2.language = "javascript";
	ds2.onload = ds2.onreadystatechange = function() {
		if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
			if (_ajax2) {
				try {
					_ajax2.parentNode.removeChild(_ajax2);
				} catch (e) {
					_ajax2.parentElement.removeChild(_ajax2);
				}
			}
			_ajax2 = ds2;
			func();
		}
	}
	document.getElementById("ajaxdata2").appendChild(ds2);
}

function createSuggest() {
	if (document.getElementById("search_div_head") != undefined) {
		var _top = getTop(document.getElementById("search_div_head")) + 40;
		var _left = getLeft(document.getElementById("search_div_head")) + 1;
		document.getElementById("sContent").style.left = _left + "px";
		document.getElementById("sContent").style.top = _top + "px";
	}
	if (suggestJSON.length > 0) {
		resetSelect();
		var sug_str = '<ul id="sContent">';
		for (var fv in suggestJSON) {
			sug_str += '<li id="suggest_' + fv + '" onmouseover="onSuggest(' + fv + ')" onclick="clickSuggest(\'' + suggestJSON[
				fv]['name'] + '\')" ><a>' + suggestJSON[fv]['name'] + '</a></li>';
		}
		sug_str += '</ul>';
		document.getElementById("sContent").innerHTML = sug_str;
		document.getElementById("sContent").style.display = "block";
	} else {
		document.getElementById("sContent").style.display = "none";
	}
}
function onSuggest(rowON) {
	var rownum = document.getElementById("sContent").getElementsByTagName("li").length;
	var _suggest = "suggest_" + rowON;
	if (selectSuggestNum != -1 && selectSuggestNum != undefined) {
		var sel_suggest = "suggest_" + selectSuggestNum;
		document.getElementById(sel_suggest).className = "";
	}
	if (rowON < 0 || rowON >= rownum) {
		resetSelect();
		return false;
	} else {
		document.getElementById(_suggest).className = "lx_dq";
		selectSuggestNum = rowON;
	}
}
//搜索联想功能 END
var search_type = "web";
$(function() {
	$('.selectMenu a').click(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		search_type = $(this).attr("type");
	});
});
String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, 'g'), s2);
}

function openkeyword(obj) {
	var loc = location.href;
	var searchUrl = '';
	searchUrl = 'https://so.cntv.cn/index.php?qtext=' + encodeURIComponent(obj) + '&sid=0000&pid=0002';
	window.open(searchUrl);
}

function getOnkeyDown(e) {
	var ev = e;
	ev = ev || event;
	if (ev.keyCode == 13) {
		submitSearch();
	}
}

function submitSearch() {
	var sp_id = arguments.length == 0 ? "&type=" + search_type + "&sid=0000&pid=0000" : "&type=" + search_type +
		"&sid=0000&pid=0003";
	var loc = location.href;
	var searchUrl = '';
	var keywords = document.getElementById("mytxtdafdfasdf").value;
	var integer = /^\+?[1-9][0-9]*$/;
	var key = keywords.replace(/[^\d]*/ig, '').length;
	if (keywords.indexOf('条') != -1 && (key + 1) == keywords.length) {
		alert('请输入关键词');
		setTextFocus;
		return false;
	}
	if (keywords.replaceAll(' ', '') == '') {
		alert('请输入关键词');
		setTextFocus;
		return false;
	}
	var wenzi = document.getElementById("mytxtdafdfasdf").value
	var z_length = wenzi.length;
	if (z_length > 75) {
		alert("输入文字过多,请重新输入!");
		return false;
	}
	var type = "-1";
	searchUrl = 'https://so.cntv.cn/index.php?qtext=' + encodeURIComponent(keywords) + sp_id;
	window.open(searchUrl);
}
/*$("a").bind("focus", function() {
	if (this.blur) {
		this.blur()
	};
});
$("#search_outer .buttonVal input").bind("focus", function() {
	if (this.blur) {
		this.blur()
	};
});*/
/*****************************搜索end***************************************************/

//2022春晚/网春腰封
$(".chunwan19875_ind01 .top .title a").mouseenter(function(){
	var t_ind=$(this).index();
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".chunwan19875_ind01 .center .right .img_txt").eq(t_ind).addClass("cur").siblings().removeClass("cur");
})

$(".chunwan19875_ind01 .center .left .tit ul li .con").click(function(){
	$(this).parent("li").siblings().find(".con").removeClass("cur");
	$(this).addClass("cur");
	$(".chunwan19875_ind01 .center .left .img_box a").attr({"href":$(this).attr("data-href")});
	$(".chunwan19875_ind01 .center .left .img_box img").attr({"src":$(this).attr("data-src")});
})


$(".chunwan19875_ind01 .bottom ul li").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
})


/*****************************导航部分js***************************************************/
/*****************************导航右侧点击展开区域***************************************************/
var nav_iconSeveral = "";
$(".slide_down .sign").click(function(event){
	event.stopPropagation();
})
$(".slide_down .classify").click(function(event){
	event.stopPropagation();
})

$(".nav_list .icon").click(function(event){
	event.stopPropagation();
	slide_up_top();
	if($(this).hasClass("search_icon")){
		searchHide();									//搜索
		search_b($('.slide_down .search'),440);
	}else if($(this).hasClass("user_icon")&&!$(this).hasClass("cur")){				//登录
		if($("#loginFloat").length > 0){
			$("#loginFloat").show();
		}else{
			if(top_slide.parents(".slide_down").find(".sign").height() == 0){
			searchHide();
			slide_uper_top(top_slide.parents(".slide_down").find(".sign"),290,0,true);
			}else{
				slide_uper_top(top_slide.parents(".slide_down").find(".sign"),0,-290,true);
			}
		}
	}else if($(this).hasClass("class_icon")){//全站地图
		$("body").attr("style","overflow-y: hidden;");
		$("#channelListScroll").scrollTop(0);
		channelListScrollbarFun();
		if(top_slide.parents(".slide_down").find(".classify").height() == 0){
			$(".nav_wrapper_bg .nav_wrapper .slide_down .classify").show();
			searchHide();
			slide_uper_top(top_slide.parents(".slide_down").find(".classify"),windowH,0,true);
		}else{
			slide_uper_top(top_slide.parents(".slide_down").find(".classify"),0,-windowH,true);
		}
	}
})
// $('body').click(function(e) {
//     var target = $(e.target);
// 	console.log(e)
//     if(!target.is(none_classify) && !target.is(none_search) && !target.is(check) && !target.is(none_a) && !target.is(_input) && !target.is(none_btn) && !target.is(login01) && !target.is(login02) && !target.is(login03) && !target.is(login04)&& !target.is(login022)&&!target.is(login05)){
// 		searchHide();
//     }
// });

function searchHide(){ //右侧点击区域 收起所有
	check_box.css("display","none");	
	check_slide.css("display","none");
	search_n($('.slide_down .search'),0);
	slide_uper_top(top_slide.parents(".slide_down").find(".sign"),0,-290);	
	slide_uper_top(top_slide.parents(".slide_down").find(".classify"),0,-windowH);
}

function search_b(dom,dis){
	dom.css({'display':'block','overflow': 'visible'});
	dom.stop().animate({'width':''+dis+'px'},500);
}
function search_n(dom,dis){
	dom.stop().animate({'width':''+dis+'px'},500,function(){
		dom.css({'display':'none','overflow': 'hidden'});
	});
	check_box.css({'display':'none'});
	check_slide.css({'display':'none'});
}


/*搜索表层点击事件*/
check.click(function(){
	check_box.css({'display':'block'});
})
check_box.find('a').click(function(){
	check_box.css({'display':'none'});
	var type=$(this).attr('type');
	var dom_inner=$(this).html();
	check.attr('value',type);
	check.html(dom_inner);
})
_input.bind('input propertychange',function(event){
	check_slide.css({'display':'block'});
});


/*****************************导航左侧移入移出区域js***************************************************/
//判断鼠标移入移出的方向函数
function MouseDirection_top(element, opts) {
	var $element = $(element);
	//enter leave代表鼠标移入移出时的回调
	opts = $.extend({}, {
		enter: $.noop,
		leave: $.noop
	}, opts || {});
	var dirs = ['top', 'right', 'bottom', 'left'];
	var calculate = function (e) {
		var w = $element.outerWidth(),
			h = $element.outerHeight(),
			offset = $element.offset(),
			x = (e.pageX - offset.left - (w / 2)) * (w > h ? (h / w) : 1),
			y = (e.pageY - offset.top - (h / 2)) * (h > w ? (w / h) : 1);
		return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
	};
	$element.on('mouseenter', function (e) {
		var r = calculate(e);
		opts.enter($element, dirs[r]);
	}).on('mouseleave', function (e) {
		var r = calculate(e);
		opts.leave($element, dirs[r]);
	});
};


//展开收起方法	
function slide_uper_top(dom,dis,top,cla){
	if(cla){
		dom.stop().animate({'height':''+dis+'px'},500);
		dom.find('.slide_con').stop().animate({'margin-top':''+top+'px'},500);
	}else{
		dom.stop().css("height",dis+'px');
		dom.find('.slide_con').stop().css('margin-top',top+'px');
	}
}
//	其他消失
function slide_up_top(){
	slide_uper_top(top_slide.eq(0),0,-48);
	slide_uper_top(top_slide.eq(1),0,-48);
	slide_uper_top(top_slide.eq(2),0,-48);
}


//鼠标移上移出导航栏
top_nav.each(function(){
	var _this=$(this);
	new MouseDirection_top(_this,{
		enter:function(){
			if(!_this.hasClass('slide')){
				slide_up_top();
			}
			topindex=_this.index('.slide');
			_this.removeClass('rotate0');
			_this.siblings().removeClass('rotate180 hov3').addClass('rotate0');//WEB-8369
			
			switch (topindex){
				case 0:
					slide_up_top();
					searchHide();
					_this.addClass('rotate180');
					slide_uper_top(top_slide.eq(topindex),48,0);
					break;
				case 1:
					slide_up_top();
					searchHide();
					_this.addClass('rotate180');
					slide_uper_top(top_slide.eq(topindex),48,0);
					break;
				case 2:
					slide_up_top();
					searchHide();
					_this.addClass('rotate180');
					slide_uper_top(top_slide.eq(topindex),48,0);
					break;
				default:
					break;
			}
		},
		leave:function($element,dir){
			if(dir!='bottom'){
				_this.removeClass('rotate0 hov3');
				switch (topindex){
					case 0:
						_this.removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					case 1:
						_this.removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					case 2:
						_this.removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					default:
						break;
				}
			}
		}
	})
});

//鼠标移上移出下拉框
top_slide.each(function(){
	var _this=$(this);
	new MouseDirection_top(_this,{
		enter:function(){
			
		},
		leave:function($element,dir){
			
			if(dir!='top'){
				switch (topindex){
					case 0:
						top_nav.parent().find('.slide').eq(topindex).removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					case 1:
						top_nav.parent().find('.slide').eq(topindex).removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					case 2:
						top_nav.parent().find('.slide').eq(topindex).removeClass('rotate180 rotate90').addClass('rotate0');
						slide_uper_top(top_slide.eq(topindex),0,-48);
						break;
					default:
						break;
				}
			}
		}
	})
})
$('.nav_wrapper_bg .nav_wrapper').each(function(){
	var _this=$(this);
	new MouseDirection_top(_this,{
		enter:function(){},
		leave:function($element,dir){
			//if(dir!='bottom'){
			top_nav.parent().find('.slide').removeClass('rotate180 rotate90 hov1 hov2 hov3').addClass('rotate0');
			slide_up_top();
			//}
		}
	})
})
/*****************************导航部分js end**************************************************/

//轮播图
var SwipersUl = $('#firstRotation')
var SwipersChild = SwipersUl.find('.boxImage .slide');
var SwipersList = SwipersUl.find('.boxTitle .title');
var isAuto, _indexCur = "",
	_index = 0;
var isFlag = true;
$(".focusBox .boxTitle .title").each(function(index, element) {
	if ($(this).find(".txt").attr("data-guid") != "") {
		$(this).find(".txt a").attr("target", "");
		$(this).find(".txt a").attr("href", "javascript:vide_guid('" + $(this).find(".txt").attr("data-guid") + "')");
		SwipersChild.eq(index).find(".img a").attr("target", "");
		SwipersChild.eq(index).find(".img a").attr("href", "javascript:vide_guid('" + $(this).find(".txt").attr("data-guid") +
			"')");
		SwipersChild.eq(index).append('<a class="play" href="javascript:vide_guid(\'' + $(this).find(".txt").attr(
			"data-guid") + '\');"></a>')
	}
});
SwipersList.bind("mouseenter", function() {
	clearInterval(isAuto);
	_index = $(this).index();
	switch_ind01(_index - 1);
})
SwipersUl.hover(function() {
	clearInterval(isAuto);
}, function() {
	if (SwipersUl.find('.boxVideo').css('display') == 'none') {
		clearInterval(isAuto);
		isAuto = setInterval(function() {
			switch_ind01(_index);
		}, 5000)
	}
})
isAuto = setInterval(function() {
	switch_ind01(_index);
}, 5000)

if (SwipersChild.eq(0).find('.nesting').length == 1) {
    SwipersChild.eq(0).find('.nesting ul li').each(function(index) {
        SwipersChild.eq(0).find('.nesting ul li').eq(index).find('.img_nes img').attr('src', SwipersChild.eq(0).find('.nesting ul li').eq(index).find('.img_nes img').attr('data-src'));
        SwipersChild.eq(0).find('.nesting .list01').css({
        'top': '-238px'
      });
      SwipersChild.eq(0).find('.nesting .list02').css({
        'bottom': '-238px'
      });
      SwipersChild.eq(0).find('.nesting .list01').stop().animate({
        'top': '0px'
      }, 300);
      SwipersChild.eq(0).find('.nesting .list02').stop().animate({
        'bottom': '0px'
      }, 300);
    })

}

function switch_ind01(id) {
	if (id == SwipersChild.length - 1) {
		_index = 0;
	} else {
		_index = id + 1;
	}
	if (isFlag && _index != _indexCur) {
		SwipersChild.stop(true, true);
		if (SwipersChild.eq(_index).find('.nesting').length == 1) {
			SwipersChild.eq(_index).find('.nesting ul li').each(function(index) {
				SwipersChild.eq(_index).find('.nesting ul li').eq(index).find('.img_nes img').attr('src', SwipersChild.eq(_index)
					.find('.nesting ul li').eq(index).find('.img_nes img').attr('data-src'));
			})
			SwipersChild.eq(_index).find('.img a').addClass("noClick");
			SwipersChild.eq(_index).find('.img a').attr("href", "javascript:;");
			SwipersChild.eq(_index).find('.img a').removeAttr("target");
			SwipersChild.eq(_index).find('.nesting .list01').css({
				'top': '-238px'
			});
			SwipersChild.eq(_index).find('.nesting .list02').css({
				'bottom': '-238px'
			});
			SwipersChild.eq(_index).find('.nesting .list01').stop().animate({
				'top': '0px'
			}, 300);
			SwipersChild.eq(_index).find('.nesting .list02').stop().animate({
				'bottom': '0px'
			}, 300);
		}
		SwipersList.eq(_index).addClass('active').siblings().removeClass('active')
		SwipersChild.eq(_index).find('.img img').attr('src', SwipersChild.eq(_index).find('.img img').attr('data-src'));
		SwipersChild.eq(_indexCur).css({
			"z-index": "1"
		}).fadeOut(400);
		SwipersChild.eq(_index).css({
			"z-index": "2"
		}).fadeIn(400);
		_indexCur = _index;
	}
}
var SwipersUlWit = $('.boxImage .slide .nesting ul li .text').height();
SwipersUl.find('.boxImage .slide .nesting ul li').hover(function() {
	$(this).find('.text').animate({
		'height': '160px'
	}, 500);
	$(this).find('.text').addClass('cur');
}, function() {
	$(this).find('.text').animate({
		'height': SwipersUlWit
	}, 500);
	$(this).find('.text').removeClass('cur');
});
/*播放器*/
function vide_guid1(guid) {
	var videoW = SwipersUl.find('.boxVideo .video').width();
	var videoH = SwipersUl.find('.boxVideo .video').height();
	 playerParas1 = {
		divId: "video",/*播放器容器id，必填项*/
		w: videoW, /*播放器宽度，必填项*/
		h: videoH,
		t: "news", /*台名称，比如news,sports,tv等，必填项*/
		videoCenterId: guid, /*视频生产中心guid，必填项*/
		br: "", /*设置默认码率*/
		id: "null", /*可填null,必填项*/
		videoId: "", /*视频集id*/
		url: "", /*视频页面url，如http://tv.cntv.cn/video/C18472/a28126e5e0424a44af6a9bc4c5a47742*/
		articleId: "", /*文章id*/
		filePath: "", /*文件路径*/
		sysSource: "", /*视频来源*/
		channelId: "", /*可为空*/
		scheduleId: "", /*关键字*/
		isLogin: "", /*用户中心相关，是否登录*/
		userId: "", /*用户中心相关，用户登录id*/
		isDefaultPreImage: "false", /*是否默认从vdn取图，非自动播放情况下才有效*/
		isAutoPlay: "true", /*是否自动播放，只有false为不自动播放，其它值为自动播放*/
		posterImg: "", /*播放器前贴图片*/
		isLeftBottom: "true", /*播放按钮是否在播放器左下角,为true表示是，false表示播放按钮在播放器中间*/
		isAudio: "false", /*是否是音频播放器,为true表示是音频，false表示是视频*/
		isVod4k: "false", /*是否为4k播放器，true是4k,false不是*/
		isHttps: isHttps, /*是否https视频，true是,false不是*/
		wmode: "opaque", /*flash播放器的窗口模式，默认为opaque*/
		wideMode: "normal", /*flash播放器的窗口模式，默认为opaque*/
		listMode: "false", /*点播播放器初始化参数：是否列表模式，默认false，false时不显示下一集按钮，不发送新增的下一集事件，设置中没有“自动播放下一集”选项；字符串类型*/
		nextTitle: "", /*下一集标题，与listMode 配对使用*/
		nextThumbnail: "", /*下一集预览图URL，与listMode 配对使用*/
		setupOn: "false", /*是否显示设置按钮，默认为false*/
		hasBarrage: "false", /*是否有弹幕功能，默认false，false时不显示弹幕、不显示弹幕设置按钮、不显示弹幕开关、不访问弹幕接口和表情包配置接口e*/
		playerType: "vod_h5", /*播放器类型，vod表示普通播放器*/
		webFullScreenOn: "false",/*是否显示全屏按钮，默认true表示显示*/
		drm:"true"//,
		//h5:{   /*倍速*/
		//	ui_rate: true
		//}
	};
	createVodPlayer(playerParas1);
	SwipersUl.find('.boxVideo').show();
	isFlag = false;
	clearInterval(isAuto);
};

function vide_guid(guid){ /*销毁播放器*/
			if(typeof(playerParas1)!="undefined"){
				if(playerParas1._isH5 !== undefined && playerParas1._isH5){
					player = vodh5player.namespace.getVodPlayer();
					if(player && !player.isDisposed_){
						// dispose
						vodh5player.namespace.dispose(player);
						vide_guid1(guid)
					}
				}else{
					document.getElementById("video").innerHTML = '';
					vide_guid1(guid)
				}
			}else{
				vide_guid1(guid)
			}
}


function boxVideoClose() {
	isFlag = true;
	SwipersUl.find('.boxVideo .video').html("");
	SwipersUl.find('.boxVideo').css('display', 'none');
	clearInterval(isAuto);
	isAuto = setInterval(function() {
		switch_ind01(_index);
	}, 5000)
}
/*直播播放器*/
var videoPlay = true,
	videoPause = true;
var imgTrue = false,
	videoTrue = false;
var country_code, flvChannel, is0HomepagePlayer;
var is0HomepagePlayer = true;
var isPlayerOpaque = true;
var player_box = $("#_video_player_box");
var video = player_box.attr("data-video");
var img = player_box.attr("data-img");
var href = player_box.attr("data-href");

function getCookie_main() {
	country_code = getCookie_tvzhibo("country_code");
	if (country_code == null || country_code == undefined || country_code == "") {
		var chunwan_for_area = document.getElementsByTagName('head')[0];
		var chunwan_ForArea = document.createElement('script');
		chunwan_ForArea.setAttribute('type', 'text/javascript');
		chunwan_ForArea.charset = "utf-8";
		var chunwan_areaJsUrl = "https://ip.apps.cntv.cn/whereis?client=html5";
		chunwan_ForArea.setAttribute('src', chunwan_areaJsUrl);
		chunwan_for_area.appendChild(chunwan_ForArea);
	} else {
		video_player_box();
	}
}
if (img != "") {
	imgTrue = true;
	player_box.html('<a href="' + href + '" target="_blank"><img src="' + img + '" height="225" width="400" /></a>');
} else {
	getCookie_main();
}

function video_player_box() {
	videoTrue = true;
	if (country_code != "CN") {
		flvChannel = "cctv4";

	} else {
		flvChannel = video;
	}
	if (windowWidth) {
		var _player_width = 368;
		var _player_height = 207;
	} else {
		var _player_width = 400;
		var _player_height = 225;
	}
	var playerParas = {
		divId: "_video_player_box",
		/*播放器容器id，必填项*/
		w: _player_width,
		/*播放器宽度，必填项*/
		h: _player_height,
		/*播放器高度，必填项*/
		t: flvChannel,
		/*台名称，比如cctv1,cctv13等，必填项*/
		isAutoPlay: "true",
		/*是否自动播放，只有false为不自动播放，其它值为自动播放*/
		br: "",
		/*设置默认码率*/
		posterImg: "",
		/*播放器前贴图片*/
		isLive4k: "false",
		/*是否为4k播放器，true是4k,false不是*/
		isHttps: "true",
		/*是否https视频，true是,false不是*/
		wmode: "opaque",
		/*flash播放器的窗口模式，默认为opaque*/
		hasBarrage: "false",
		/*是否有弹幕功能，默认false，false时不显示弹幕、不显示弹幕设置按钮、不显示弹幕开关、不访问弹幕接口和表情包配置接口e*/
		playerType: "live_homepage",
		/*播放器类型，small表示小窗播放器*/
		webFullScreenOn: "true",
		/*是否显示网页全屏按钮，默认true表示显示*/
		others: "" /*其它待定参数*/
	};
	createLivePlayer(playerParas);
	videoPlay = false;
}
function videoPlayer() {
	var box_h = player_box.height();
	var box_t = player_box.position().top;
	if (scrollTop + windowH >= box_t && scrollTop < box_t + box_h) {
		if (videoTrue && videoPlay) {
			$("#video").html("");
			videoPlay = false;
			videoPause = true;
			if (livePlayerObjs && livePlayerObjs["_video_player_box"] && livePlayerObjs["_video_player_box"].video) {
				if (typeof LivePlayOrPauseBtn !== "undefined" && livePlayerObjs["_video_player_box"].isByclick === false) {
					LivePlayOrPauseBtn.prototype.playOrPause("_video_player_box");
				}
			} else {
				//flash的播放
				live0ShouyePlayOrPause("play"); //播放
				try {
					thisMovie("flashplayer__video_player_box").smallPlayer_playVideo();
				} catch (e) {}
			}
			/*清空轮播图播放器*/
			boxVideoClose();
		}
	} else {
		if (videoTrue && videoPause && player_box.html() != "") {
			videoPlay = true;
			videoPause = false;
			if (livePlayerObjs && livePlayerObjs["_video_player_box"] && livePlayerObjs["_video_player_box"].video) {
				if (typeof LivePlayOrPauseBtn !== "undefined" && livePlayerObjs["_video_player_box"].isByclick === false) {
					LivePlayOrPauseBtn.prototype.playOrPause("_video_player_box");
				}
			} else {
				//flash的暂停
				live0ShouyePlayOrPause("pause"); //暂停
				try {
					thisMovie("flashplayer__video_player_box").smallPlayer_pauseVideo();
				} catch (e) {}
			}
		}
	}
}

function getCookie_tvzhibo(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null
}
//鼠标移入动态加载gif及video
var titInImg = $('.videoTitle');
titInImg.hover(function() {
	var _this = $(this);
	var src = _this.find(".image").attr("data-src")
	var img = _this.find(".image").attr("data-img")
	var href = _this.find("a").attr("href")
	if (img != "") {
		_this.find(".con").fadeIn();
		_this.find(".con").html('<a href="' + href + '" target="_blank"><img src="' + img + '" alt="" /></a>');
	} else if (src != "" && BrowserIE == false) {
		_this.find(".con").fadeIn();
		if (_this.find('.con video').length == 0) {
			_this.find('.con').html('<a href="' + href + '" target="_blank">' + getVideo(src) + '</a>');
		} else {
			_this.find('.con video').get(0).play();
		}
	}
}, function() {
	var _this = $(this);
	_this.find(".con").hide();
	if (_this.find(".con video").length == 1) {
		_this.find(".con video").get(0).pause();
	}
});
/*热点专题*/
$('#hotspot .img_hover li').mouseenter(function() {
	$('#hotspot .img_enlarge li').stop();
	$('#hotspot .img_enlarge li').attr('style', '');
	var li_index = $(this).index();
	$('#hotspot .img_enlarge li').eq(li_index).find("img").attr("src", $('#hotspot .img_enlarge li').eq(li_index).find(
		"img").attr("data-src"));
	if (li_index <= 1) {
		$('#hotspot .img_enlarge .imgL').eq(li_index).animate({
			'left': '0'
		}, 400);
	} else {
		$('#hotspot .img_enlarge .imgR').eq(li_index - 2).animate({
			'right': '0'
		}, 400);
	}
})
$('#hotspot').mouseleave(function() {
	$("#hotspot .img_enlarge li").fadeOut();
})


/* 品牌强国工程 */

function picListFun(obj){
	var picListInt;
	var picPageList = -1;
	var picLiLength = obj.find("ul li").length;
	var objTrue = true;
	if(picLiLength > 4){
		if(picLiLength % 4 > 0){
			objTrue = false;
			obj.find("ul li").each(function(index){
				
				if(index < 3){
					obj.find("ul").append(obj.find("ul li").eq(index).clone());
				}
			})
		}
		for (var i = 0; i < 4; i++) {
			picPageList = picPageList + 1;
			obj.find("ul li").eq(picPageList).addClass("cur");
		}
		picListIntfun();
		function picListIntfun(){
			picListInt = setInterval(function(){
				obj.find("ul li").removeClass("cur");
				if(objTrue){
					if((obj.find("ul li").length) == (picPageList+1)){
						picPageList = -1
					}
				}else{
					picPageListSur = (obj.find("ul li").length - (picPageList+1));
					if(picPageListSur == 0){ picPageList = 2}
					else if(picPageListSur == 1){picPageList = 1;}
					else if(picPageListSur  == 2){picPageList = 0;}
					else if(picPageListSur  == 3){picPageList = -1;}
				}
				for (var j = 1; j <= 4; j++) {
					picPageList = picPageList + 1;
					obj.find("ul li").eq(picPageList).addClass("cur");
					obj.find("ul li").eq(picPageList).find("img").attr("src",obj.find("ul li").eq(picPageList).find("img").attr("data-echo"));
				}
			},5000)
		}
		$(".picList .btn .btn-prev").click(function(){
			obj.find("ul li").removeClass("cur");
			if(objTrue){
				picPageList = picPageList - 3
				if(picPageList <= 0){
					picPageList = obj.find("ul li").length - 5;
				}else{
					picPageList = picPageList - 5;
				}
			}else{
				picPageList = picPageList - 3;
				if(picPageList <= 3){
					if(picPageList == 0){ picPageList = obj.find("ul li").length - 8}
					else if(picPageList == 1){picPageList = obj.find("ul li").length - 7;}
					else if(picPageList  == 2){picPageList = obj.find("ul li").length - 6;}
					else if(picPageList  == 3){picPageList = obj.find("ul li").length - 5;}
				}else{
					picPageList = picPageList - 5;
				}
			}
			for (var n = 1; n <= 4; n++) {
				picPageList = picPageList + 1;
				obj.find("ul li").eq(picPageList).addClass("cur");
				obj.find("ul li").eq(picPageList).find("img").attr("src",obj.find("ul li").eq(picPageList).find("img").attr("data-echo"));
			}
		})
		$(".picList .btn .btn-next").click(function(){
			obj.find("ul li").removeClass("cur");
			if(objTrue){
				if((obj.find("ul li").length) == (picPageList+1)){
					picPageList = -1
				}
			}else{
				picPageListSur = (obj.find("ul li").length - (picPageList+1));
				if(picPageListSur == 0){ picPageList = 2}
				else if(picPageListSur == 1){picPageList = 1;}
				else if(picPageListSur  == 2){picPageList = 0;}
				else if(picPageListSur  == 3){picPageList = -1;}
			}
			for (var m = 1; m <= 4; m++) {
				picPageList = picPageList + 1;
				obj.find("ul li").eq(picPageList).addClass("cur");
				obj.find("ul li").eq(picPageList).find("img").attr("src",obj.find("ul li").eq(picPageList).find("img").attr("data-echo"));
			}
		})
		
	}else{
		for (var i = 0; i < 4; i++) {
			obj.find("ul li").eq(i).addClass("cur");
		}
	}
	$(".picList").mouseenter(function() {
		clearInterval(picListInt);
	});
	$(".picList").mouseleave(function() {
		picListIntfun();
	});
	
}
//picListFun($(".picList .left"));
//picListFun($(".picList .right"));

/*棋盘模块*/
/*
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38
5,3,14,1,10,18,2,7,13,20,4,9,17,22,6,12,16,25,8,28,11,32,15,27,32,19,24,31,36,21,26,33,38,23,30,35,37,29
	1-5
	1,2,3,4,5,6,7,9,10,13,14,18
	5,3,14,1,10,18,2,7,13,4,9,6
	6-11
	8,11,12,15,16,17,19,20,22,25,28
	20,17,22,12,16,25,8,28,11,15,19
	12-13
	11,15,16,19,22,21,25,24,28,27,32
	22,25,16,28,11,32,15,27,19,24,21
	14-15
	29,23,37,30,35,38,26,33,31,36,34
*/
var timing, Order01, Order02, icon_index, iconClick = true,
	iconClose = true;
var cctvidname = "";
$('#chess_con .icon').click(function() {
	if (iconClick) {
		iconClick = false;
		icon_index = $(this).attr('class').split(' ')[1].substring(4, 6);

		var chessnavname = $(this).find("td").text();
		window.goldlog.record("/nav.1.2", "", "snsScene=hpnav&product=pcweb&navname=" + chessnavname + "", "");

		$('#chess_con .special' + icon_index).show();
		switch (Number(icon_index)) {
			case 1:
				cctvidname = "cctv1"
				break;
			case 2:
				cctvidname = "cctv2"
				break;
			case 13:
				cctvidname = "cctv3"
				break;
			case 21:
				cctvidname = "cctv4"
				break;
			case 4:
				cctvidname = "cctv5"
				break;
			case 30:
				cctvidname = "cctv5plus"
				break;
			case 15:
				cctvidname = "cctv6"
				break;
			case 23:
				cctvidname = "cctv7"
				break;
			case 6:
				cctvidname = "cctv8"
				break;
			case 32:
				cctvidname = "cctvjilu"
				break;
			case 8:
				cctvidname = "cctv10"
				break;
			case 9:
				cctvidname = "cctv17"
				break;
			case 34:
				cctvidname = "cctv11"
				break;
			case 17:
				cctvidname = "cctv12"
				break;
			case 24:
				cctvidname = "cctv13"
				break;
			case 36:
				cctvidname = "cctvchild"
				break;
			case 37:
				cctvidname = "cctv15"
				break;
			default:
				cctvidname = ""
				break;
		}
		if (icon_index == 20) {
			iconClick = true;
//			Order01 = [20, 12, 29, 1, 21, 30, 2, 13, 22, 31, 3, 14, 23, 32, 4, 15, 16, 33, 5, 34, 6, 35, 7, 24, 36, 8, 17, 25,
//				37, 9, 18, 26, 38, 10, 19, 27, 11, 28
//			];
//			Order02 = [1, 2, 12, 3, 20, 4, 13, 5, 14, 21, 6, 15, 22, 29, 7, 16, 23, 30, 8, 31, 9, 32, 10, 17, 33, 18, 24, 34,
//				11, 19, 25, 35, 26, 36, 27, 37, 28, 38
//			];
//			executionOpen(Order01, cctvidname, icon_index);
		} else if (icon_index == 1 || icon_index == 2 || icon_index == 4 || icon_index == 13 || icon_index == 21 ||
			icon_index == 30) {
			Order01 = [1, 2, 3, 12, 4, 13, 20, 14, 21, 22, 29, 30];
			Order02 = [20, 12, 29, 1, 21, 30, 2, 13, 22, 3, 14, 4];
			executionOpen(Order01, cctvidname, icon_index);
		} else if (icon_index == 6 || icon_index == 8 || icon_index == 15 || icon_index == 23 || icon_index == 32 ||
			icon_index == 34) {
			Order01 = [5, 6, 15, 7, 23, 8, 16, 31, 32, 33, 34];
			Order02 = [31, 23, 32, 15, 33, 5, 16, 34, 6, 7, 8];
			executionOpen(Order01, cctvidname, icon_index);
		} else if (icon_index == 9 || icon_index == 17 || icon_index == 24) {
			Order01 = [9, 8, 17, 7, 24, 6, 16, 35, 34, 33, 32];
			Order02 = [35, 24, 34, 17, 33, 9, 16, 32, 8, 7, 6];
			executionOpen(Order01, cctvidname, icon_index);
		} else if (icon_index == 10 || icon_index == 11 || icon_index == 36 || icon_index == 37) {
			Order01 = [11, 10, 19, 27, 28, 38, 18, 26, 25, 37, 36];
			Order02 = [38, 28, 37, 27, 36, 26, 11, 25, 19, 18, 10];
			executionOpen(Order01, cctvidname, icon_index);
		} else if (icon_index == 16) {
			Order01 = [16];
			Order02 = [16];
			executionOpen(Order01, cctvidname, icon_index);
		} else {
			iconClick = true;
		}
		$('#chess_con .special' + icon_index).css("display", "block");
	}
})
var alltime = 24 * 60 * 60 * 1000;
Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}

function addEpgList(channelNames, channelIndex) {
	if (channelNames == "" || channelNames == null || channelNames == "undefined" || channelNames == " ") {
		return
	}
	var _nownew1 = "",
		nowYear = "";
	if (typeof(now) == "undefined") {
		_nownew1 = new Date();
	} else {
		_nownew1 = now;
	}
	var _yy = _nownew1.getFullYear();
	var _mm = parseInt(_nownew1.getMonth() + 1);
	var _dd = _nownew1.getDate();
	_mm < 10 ? _mm = "0" + _mm : null;
	_dd < 10 ? _dd = "0" + _dd : null;
	nowYear = _yy + "" + _mm + "" + _dd;
	var nowTime = Date.parse(_nownew1) / 1000;
	var olddate = new Date(parseInt(Date.parse(_nownew1) - alltime)).Format('yyyyMMdd');
	var newdate = new Date(parseInt(Date.parse(_nownew1) + alltime)).Format('yyyyMMdd');
	//正式地址 
	var url = "//api.cntv.cn/epg/getEpgInfoByDate?c=" + channelNames + "&serviceId=tvcctv&d=" + olddate + "," + nowYear +
		"," + newdate + "&t=jsonp";
	$.ajax({
		type: "get",
		url: url,
		cache: true,
		dataType: 'jsonp',
		jsonp: "cb",
		jsonpCallback: channelNames,
		success: function(data) {
			var data = data.data[channelNames];
			var dataStr = "";
			var programArray = data[nowYear];
			var oldList = data[olddate];
			var newlList = data[newdate];
			for (var i = 0; i < programArray.length; i++) {
				if (programArray[0].start_time > nowTime) { //今天未开始
					dataStr += '<ul><li><div class="time"><span class="">' + oldList[oldList.length - 2].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames + '/index.shtml?stime=' + oldList[oldList.length -
							2].start_time + '&&etime=' + oldList[oldList.length - 2].end_time +
						'&type=lbacks\" target="_blank">回看</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
						channelNames + '/index.shtml?stime=' + oldList[oldList.length - 2].start_time + '&&etime=' + oldList[oldList.length -
							2].end_time + '&type=lbacks\" class="title" target="_blank">' + oldList[oldList.length - 2].title +
						'</a></td></tr></tbody></table></div></li>';
					dataStr += '<li class="last"><div class="time"><span class="">' + oldList[oldList.length - 1].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="now" target="_blank">直播中</a></div><div class="cont"><a href=\"//tv.cctv.com/live/' +
						channelNames + '/\" class="image" target="_blank"><img src=\"//t.live.cntv.cn/imagehd/' + channelNames +
						'_01.png" width="100%" height="100%"></a><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="title" target="_blank">' + oldList[oldList.length - 1].title + '</a></div></li>';
					dataStr += '<li><div class="time"><span class="">' + programArray[0].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="not" target="_blank">未开始</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
						channelNames + '/\" class="title" target="_blank">' + programArray[0].title +
						'</a></td></tr></tbody></table></div></li></ul>';
					break;
				} else if (programArray[i].start_time <= nowTime && programArray[i].end_time > nowTime) { //今天直播中
					if (i == "0") {
						dataStr += '<ul><li><div class="time"><span class="">' + oldList[oldList.length - 1].show_time +
							'</span><br><a href=\"//tv.cctv.com/live/' + channelNames + '/index.shtml?stime=' + oldList[oldList.length -
								1].start_time + '&&etime=' + oldList[oldList.length - 1].end_time +
							'&type=lbacks\" target="_blank">回看</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
							channelNames + '/index.shtml?stime=' + oldList[oldList.length - 1].start_time + '&&etime=' + oldList[oldList.length -
								1].end_time + '&type=lbacks\" class="title" target="_blank">' + oldList[oldList.length - 1].title +
							'</a></td></tr></tbody></table></div></li>';
					} else {
						dataStr += '<ul><li><div class="time"><span class="">' + programArray[i - 1].show_time +
							'</span><br><a href=\"//tv.cctv.com/live/' + channelNames + '/index.shtml?stime=' + programArray[i - 1].start_time +
							'&&etime=' + programArray[i - 1].end_time +
							'&type=lbacks\" target="_blank">回看</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
							channelNames + '/index.shtml?stime=' + programArray[i - 1].start_time + '&&etime=' + programArray[i - 1].end_time +
							'&type=lbacks\" class="title" target="_blank">' + programArray[i - 1].title +
							'</a></td></tr></tbody></table></div></li>';
					}
					dataStr += '<li class="last"><div class="time"><span class="">' + programArray[i].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="now" target="_blank">直播中</a></div><div class="cont"><a href=\"//tv.cctv.com/live/' +
						channelNames + '/\" class="image" target="_blank"><img src=\"//t.live.cntv.cn/imagehd/' + channelNames +
						'_01.png" width="100%" height="100%"></a><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="title" target="_blank">' + programArray[i].title + '</a></div></li>';
					if (i == programArray.length - 1) {
						dataStr += '<li><div class="time"><span class="">' + newlList[0].show_time +
							'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
							'/\" class="not" target="_blank">未开始</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
							channelNames + '/\" class="title" target="_blank">' + newlList[0].title +
							'</a></td></tr></tbody></table></div></li></ul>';
					} else {
						dataStr += '<li><div class="time"><span class="">' + programArray[i + 1].show_time +
							'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
							'/\" class="not" target="_blank">未开始</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
							channelNames + '/\" class="title" target="_blank">' + programArray[i + 1].title +
							'</a></td></tr></tbody></table></div></li></ul>';
					}

				} else if (programArray[programArray.length - 1].end_time <= nowTime) { //今天已结束
					dataStr += '<ul><li><div class="time"><span class="">' + programArray[programArray.length - 2].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames + '/index.shtml?stime=' + programArray[
							programArray.length - 2].start_time + '&&etime=' + programArray[programArray.length - 2].end_time +
						'&type=lbacks\" target="_blank">回看</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
						channelNames + '/index.shtml?stime=' + programArray[programArray.length - 2].start_time + '&&etime=' +
						programArray[programArray.length - 2].end_time + '&type=lbacks\" class="title" target="_blank">' +
						programArray[programArray.length - 2].title + '</a></td></tr></tbody></table></div></li>';
					dataStr += '<li class="last"><div class="time"><span class="">' + programArray[programArray.length - 1].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="now" target="_blank">直播中</a></div><div class="cont"><a href=\"//tv.cctv.com/live/' +
						channelNames + '/\" class="image" target="_blank"><img src=\"//t.live.cntv.cn/imagehd/' + channelNames +
						'_01.png" width="100%" height="100%"></a><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="title" target="_blank">' + programArray[programArray.length - 1].title + '</a></div></li>';
					dataStr += '<li><div class="time"><span class="">' + newlList[0].show_time +
						'</span><br><a href=\"//tv.cctv.com/live/' + channelNames +
						'/\" class="not" target="_blank">未开始</a></div><div class="cont"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href=\"//tv.cctv.com/live/' +
						channelNames + '/\" class="title" target="_blank">' + newlList[0].title +
						'</a></td></tr></tbody></table></div></li></ul>';
					break;
				}
			}
			$(".special" + channelIndex + " .programList .left").html(dataStr);
		}
	});
}
$('#chess_con .location').mouseleave(function() {
	if (iconClose) {
		iconClose = false;
		executionClose(Order02);
	}
});

function executionOpen(order, cctvidname, icon_index) {
	var icon_01 = 0;
	addEpgList(cctvidname, icon_index);
	if (order == 20) {
		var time = 4;
	} else {
		var time = 20;
	}
	if (order == 16) {
		if ($('#chessVideo').attr("data-img") != "") {
			$('#chessVideo').html('<a href="' + $('#chessVideo').attr("data-href") + '" target="_blank"><img src="' + $(
				"#chessVideo").attr("data-img") + '" width="100%" height="100%"></a>');
		} else if ($('#chessVideo').attr("data-src") != "" && BrowserIE == false) {
			if ($('#chessVideo video').length == 0) {
				$('#chessVideo').html('<a href="' + $('#chessVideo').attr("data-href") + '" target="_blank">' + getVideo($(
					'#chessVideo').attr("data-src")) + '</a>');
			} else {
				$('#chessVideo').find("video").get(0).play();
			}
		}
	}
	var timing = setInterval(function() {
		if (icon_01 < order.length) {
			$('#chess_con .icon.icon' + order[icon_01]).find('.tet').animate({
				'width': '0px'
			}, 50, function() {
				$(this).parent('.icon').hide();
			});
			icon_01 = icon_01 + 1;
		} else {
			clearInterval(timing);
		}
	}, time);
}

function executionClose(order) {
	var icon_02 = 0;
	if (order == 20) {
		var time = 7;
	} else {
		var time = 30;
	}
	if (order == 16 && $('#chessVideo video').length != 0) {
		$('#chessVideo').find("video").get(0).pause();
	}
	var timing = setInterval(function() {
		if (order.length >= icon_02) {
			var tetWidth;
			if (order[icon_02] == 10 || order[icon_02] == 11 || order[icon_02] == 12 || order[icon_02] == 20 || order[icon_02] ==
				38) {
				if (windowWidth) {
					tetWidth = '170px';
				} else {
					tetWidth = '186px';
				}
			} else if (order[icon_02] == 16) {
				if (windowWidth) {
					tetWidth = '255px';
				} else {
					tetWidth = '279px';
				}
			} else {
				if (windowWidth) {
					tetWidth = '85px';
				} else {
					tetWidth = '93px';
				}
			}
			$('#chess_con .icon.icon' + order[icon_02]).css({
				'z-index': '3'
			}).show();
			$('#chess_con .icon.icon' + order[icon_02]).find('.tet').stop(false).animate({
				'width': tetWidth
			}, 50);
			icon_02 = icon_02 + 1;
		} else {
			clearInterval(timing);
			$('#chess_con .icon').attr('style', '');
			$('#chess_con .tet').attr('style', '');
			$('#chess_con .special' + icon_index).hide();
			setTimeout(function() {
				iconClick = true;
				iconClose = true;
			}, 300);
		}
	}, time);
}

/*创建video播放器*/
function getVideo(src) {
	var video = '<video muted="true" width="100%" height="100%" autoplay="autoplay" loop="loop" src="' + src +
		'"><source src="' + src + '" type="video/mp4"></video>';

	return video;
}

/*体育疯背后的数据*/
if (BrowserIE || BrowserIE9 || window.location.href.indexOf("big5.cctv.com") > 1 || window.location.href.indexOf("big5.cntv.cn") > 1 || equipmentMove || country_code != "CN"  || window.location.href.indexOf("www.cctv.cn") > 1 ) {
	$("#sports .sportsfeng").remove();
} else {
	var iframeHtml = '<iframe src="' + $("#sports .sportsfeng").attr("data-iframe") +
		'" scrolling="no" width="100%" height="240" frameborder="0"></iframe>';
	$("#sports .sportsfeng").html(iframeHtml);
	$("#sports ul li").each(function(index) {
		if (index >= 3) {
			$(this).remove();
		}
	});
}
/*红心点赞*/
var oImage_Tex = true;
$('.textBot').find('.aixin').bind('click', function() {
	if (oImage_Tex) {
		oImage_Tex = false;
		var _this = $(this);
		if (_this.hasClass("cur") == false) {
			$.ajax({
				url: '//api.itv.cntv.cn/praise/add?type=other&id=homepage2019&num=1',
				jsonp: "jsonp_callback",
				jsonpCallback: "homepage2019",
				cache: true,
				dataType: "jsonp",
				success: function(data) {}
			});
		}
		_this.addClass('cur').siblings('.aixin_top').show();
		_this.siblings('.aixin_top').animate({
			top: '-10px'
		}, 400, function() {
			$(this).fadeOut(100);
			$(this).css('top', '5px');
			oImage_Tex = true;
		});
	}
});
//熊猫蠕动
var upMove;
var moveTop = 152;

function pandaUp() {
	$(".pandaModel .animate .img").delay(700).animate({
		"top": "" + 152 + "px"
	}, 1000);
	for (var i = 1; i < 17; i++) {
		moveTop = moveTop - 8;
		$(".pandaModel .animate .img").delay(1000).animate({
			"top": "" + moveTop + "px"
		}, 1000);
	}
	$(".pandaModel .animate .img").animate({
		"top": "" + moveTop + "px"
	}, 1000, function() {
		$(".pandaModel .animate .img").removeClass("show");
		$(".pandaModel .animate .img").delay(100).animate({
			"top": "160px"
		}, 500, function() {
			moveTop = 152;
			$(".pandaModel .animate .img").addClass("show");
			upMove = setTimeout(function() {
				pandaUp();
			}, 300);
		});
		clearTimeout(upMove);
	});
}
if (BrowserIE || BrowserIE9) {} else {
	pandaUp();
}

//城市显示
var City_Model = $('.cityModel .title');
City_Model.hover(function() {
	$(this).find('.city_list').show();
}, function() {
	$(this).find('.city_list').hide();
});

/*图库*/
var gallery = $('.gallery ul li');
var positionBottom = $('.gallery ul li').height();
$('.gallery ul li').mouseenter(function() {
	$(this).find('.txt').stop().animate({
		bottom: 0
	}, 500);
})
$('.gallery ul li').mouseleave(function() {
	$(this).find('.txt').stop().animate({
		bottom: -positionBottom + "px"
	}, 500);
})

//片库
var slicInside = $("#slicInside");
var slicInsideCont = $("#slicInside .cont");
var slicInside_tab = $("#slicInside_tab");
var slicTab_index = 0,
	slicTab_chus = 0,
	slicTab_top = 0;
slicInsideCont.eq(0).css('left', 0);
var slicInsideWidth = $('#slicInside').find(".inside").outerWidth(true) + 22;
slicInside_tab.find('.tab_right a').mouseover(function() {
	slicInside.find(".inside").addClass("cur");
	$(this).addClass('cur').siblings().removeClass('cur');
	slicTab_index = $(this).index();
	if (slicTab_index == slicTab_chus) {} else {
		if (slicInsideCont.is(':animated')) {
			slicInsideCont.eq(slicTab_top).stop(true, true).css('left', slicInsideWidth + 'px');
			slicInsideCont.eq(slicTab_chus).stop(true, true).css('left', 0);
			slicInsideCont.eq(slicTab_chus).animate({
				'left': '-' + slicInsideWidth + 'px',
				'z-index': '1'
			}, 500, function() {
				$(this).css('left', slicInsideWidth + 'px');
			})
			slicTab_top = slicTab_chus;
			slicTab_chus = slicTab_index;
			slicInsideCont.eq(slicTab_index).animate({
				'left': '0px',
				'z-index': '3'
			}, 500)
		} else {
			slicInsideCont.eq(slicTab_chus).animate({
				'left': '-' + slicInsideWidth + 'px',
				'z-index': '1'
			}, 500, function() {
				$(this).css('left', slicInsideWidth + 'px');
			})
			slicTab_top = slicTab_chus;
			slicTab_chus = slicTab_index;
			slicInsideCont.eq(slicTab_index).animate({
				'left': '0px',
				'z-index': '3'
			}, 500)
		}
	}
})
slicInsideCont.find("ul li").hover(function() {
	if (BrowserIE == false && BrowserIE9 == false) {
		slicInside.find(".inside").removeClass("cur");
		$(this).css('z-index', 3);
		$(this).find(".hover").show();
		$(this).find(".hover").css({"box-shadow":"0px 2px 3px 1px rgba(0, 0, 0, 0.2)"});
		var src = $(this).find(".hover .img").attr("data-src")
		var img = $(this).find(".hover .img").attr("data-img")
		if (img != "") {
			$(this).find(".hover .img a").html('<img src="' + img + '" alt="" />');
		} else if (src != "") {
			if ($(this).find('.hover .img video').length == 0) {
				$(this).find('.hover .img a').html(getVideo(src));
			} else {
				$(this).find('.hover .img video').get(0).play();
			}
		}
	}
}, function() {
	if (BrowserIE == false && BrowserIE9 == false) {
		slicInside.find(".inside").addClass("cur");
		$(this).css('z-index', 1);
		$(this).find(".hover").hide();
		$(this).find(".hover").css({"box-shadow":"none","-webkit-box-shadow":"none"});
		if ($(this).find(".hover .img video").length == 1) {
			$(this).find(".hover .img video").get(0).pause();
		}
	}
});

/*******底部节目单************/
function chboxTab_tv(obj) {
	var cctv_arr = [];
	var chboxId = $("#" + obj);
	var chboxTag = chboxId.find(".kjf td");
	var chboxBlock = chboxId.find(".list_box");
	var num = 0;
	var id_tv = chboxBlock.eq(0).attr("lang");
	chboxBlock.eq(0).find(".conBox .playBox .imageBox .hd img").attr("src", chboxBlock.eq(0).find(
		".conBox .playBox .imageBox .hd img").attr("lang"));

	function dsjurl(url, changeurl) {
		var callb = changeurl.split("/")[4];
		$.ajax({
			type: "get",
			url: url,
			cache: true,
			dataType: "jsonp",
			jsonp: "cb",
			jsonpCallback: callb,
			async: false,
			success: function(data) {
				cctv_arr[num] = data;
				chboxBlock.eq(num).find(".tr").html('<p>正在播出：</p><a href="' + changeurl + '" target = "_blank">' + data.programs[
					0].ptitle + '</a><p>精彩预告：</p><a href!="">' + data.programs[1].ptitle + '</a>');
			}
		});
	}
	var cctv1url = "//api.cntv.cn/epg/epglist?serviceId=channel&c=" + id_tv;
	var cctv1changeurl = "//tv.cctv.com/live/cctv1";
	dsjurl(cctv1url, cctv1changeurl);
	chboxTag.each(function(i) {
		$(this).click(function() {
			var navname = $(this).find("a").text();
			window.goldlog.record("/nav.1.3", "", "snsScene=hpnav&product=pcweb&navname=" + navname + "", "");
			num = i;
			//if (num == 17) {} else {
				chboxTag.removeClass("cur");
				$(this).addClass("cur");
				chboxBlock.hide(0);
				chboxBlock.eq(num).show(0)
				id_tv = chboxBlock.eq(num).attr("lang");
				if (chboxBlock.eq(num).find(".conBox .playBox .imageBox .hd img").attr("src") != chboxBlock.eq(num).find(
						".conBox .playBox .imageBox .hd img").attr("lang")) {
					chboxBlock.eq(num).find(".conBox .playBox .imageBox .hd img").attr("src", chboxBlock.eq(num).find(
						".conBox .playBox .imageBox .hd img").attr("lang"));
					if (chboxBlock.eq(num).attr("lang") == "cctv4") {
						chboxBlock.eq(num).find(".conBox .playBox .imageBox .hd a").attr("href", "//tv.cctv.com/cctv4asia");
					}
				};
				if (cctv_arr[num] == undefined) {
					if (chboxBlock.eq(num).attr("lang") == "cctv9") {
						var cctv9jlurl = "//api.cntv.cn/epg/epglist?serviceId=channel&c=cctvjilu";
						var cctv9changeurl = "//tv.cctv.com/live/cctvjilu";
						dsjurl(cctv9jlurl, cctv9changeurl);
					} else if (chboxBlock.eq(num).attr("lang") == "cctv14") {
						var cctvchildurl = "//api.cntv.cn/epg/epglist?serviceId=channel&c=cctvchild";
						var cctv14changeurl = "//tv.cctv.com/live/cctvchild";
						dsjurl(cctvchildurl, cctv14changeurl);
					} else {
						var otherurl = "//api.cntv.cn/epg/epglist?serviceId=channel&c=" + id_tv;
						var otherchangeurl = "//tv.cctv.com/live/" + chboxBlock.eq(num).attr('lang');
						dsjurl(otherurl, otherchangeurl);
					}
				} else {
					if (chboxBlock.eq(num).attr("lang") == "cctv9") {
						chboxBlock.eq(num).find(".tr").html(
							'<p>正在播出：</p><a href="//tv.cctv.com/live/cctvjilu" target = "_blank">' + cctv_arr[num].programs[0].ptitle +
							'</a><p>精彩预告：</p><a href!="">' + cctv_arr[num].programs[1].ptitle + '</a>');
					} else if (chboxBlock.eq(num).attr("lang") == "cctv14") {
						chboxBlock.eq(num).find(".tr").html(
							'<p>正在播出：</p><a href="//tv.cctv.com/live/cctvchild" target = "_blank">' + cctv_arr[num].programs[0].ptitle +
							'</a><p>精彩预告：</p><a href!="">' + cctv_arr[num].programs[1].ptitle + '</a>');
					} else {
						chboxBlock.eq(num).find(".tr").html('<p>正在播出：</p><a href="//tv.cctv.com/live/' + chboxBlock.eq(num).attr(
								'lang') + '" target = "_blank">' + cctv_arr[num].programs[0].ptitle +
							'</a><p>精彩预告：</p><a href!="">' + cctv_arr[num].programs[1].ptitle + '</a>');
					}
				}
			//}
		});
	});
};
chboxTab_tv("nav13");
$("#nav13 .list_box").eq(0).css("display", "block");
//返回顶部
$(".floatNav .backTop").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 300);
	return false;
});
//导航动画
var navBar = $(".floatNav .nav li");
navBar.bind("click", function() {
	var navname = $(this).find("a").html();
	navname = encodeURI(navname);
	window.goldlog.record("/nav.1.1", "", "snsScene=hpnav&product=pcweb&navname=" + navname + "", "");
	var _this = $(this);
	var hs_hight = $($(this).find("a").attr("href")).offset().top;
	$("html, body").animate({
		scrollTop: hs_hight - 10 + "px"
	}, 500);
	return false;
});

//品质生活 点击事件
var pzshClick = $(".picTitle .act li");
pzshClick.bind("click", function() {
	var navname = $(".ELMTtX84I56zm9TmLZU61MsJ201111 .title").html();
	var titlename = $(this).find(".text a").html();
	navname = encodeURI(navname);
	titlename = encodeURI(titlename);
	window.goldlog.record("/nav.1.7", "", "snsScene=newstab&product=pcweb&navname="+navname+"&title=" + titlename + "", "");
});
//特别推荐 点击事件
var tbtjClick = $(".ELMTrat6huXjNsYqjkme8jYo201111 .con li .txt");
tbtjClick.bind("click", function() {
	var navname = $(".ELMTpG1eADtPANWl9CU89Gh0201111 .title").html();
	var titlename = $(this).find(".title").html();
	navname = encodeURI(navname);
	titlename = encodeURI(titlename);
	window.goldlog.record("/nav.1.7", "", "snsScene=newstab&product=pcweb&navname="+navname+"&title=" + titlename + "", "");
});
// 监听滚动需要的 屏幕高 和  两个开关变量
var pingMuHeight = $(window).height();
var ad_switch1 = true;
var ad_switch2 = true;

/*悬浮导航高亮*/
var idTop = new Array();
for (var k = 0; k < $("[id^='nav']").length; k++) {
	idTop[k] = $("[id^='nav']").eq(k).position().top;
}
//悬浮导航显影
function inspect(){ 
	var oshh=$("[id^='nav']").eq(0).position().top;
	if(scrollTop>oshh-25){
		$(".floatNav").show();
	}else{
		$(".floatNav").hide();
	}
	var  floatBottomShow = $("#nav02").eq(0).position().top;
	if(scrollTop > floatBottomShow ){
		$(".floatBottom").show(100);
	}else{
		$(".floatBottom").hide(100);
	}
	for(var i=0;i<idTop.length;i++){
		if(idTop[i] <= scrollTop+40){
			navBar.eq(i).addClass("cur").siblings().removeClass("cur");
		}
	}
	if(Number(pingMuHeight+scrollTop)>=idTop[1] && Number(scrollTop)<=idTop[2]){
		if(ad_switch1){
			ad_switch1 = false;
			var navname = $(".ELMTtX84I56zm9TmLZU61MsJ201111 .title").html();
			navname = encodeURI(navname);
			window.goldlog.record("/nav.1.8", "", "snsScene=newstab&product=pcweb&navname="+navname + "", "");
		}
	}
	if(Number(pingMuHeight+scrollTop)>=idTop[7] && Number(scrollTop)<=idTop[8]){
		if(ad_switch2){
			ad_switch2 = false;
			var navname = $(".ELMTpG1eADtPANWl9CU89Gh0201111 .title").html();
			navname = encodeURI(navname);
			window.goldlog.record("/nav.1.8", "", "snsScene=newstab&product=pcweb&navname="+navname + "", "");
		}
	}
}
inspect();

/*4K专区*/
$(".special4K ul li").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(this).find("img").attr("src",$(this).find("img").attr("data-img"));
})

/*特别推荐*/
$(".activityTab .con ul li").on('mouseenter', function (e) {
	$(this).find(".txt").stop(true).animate({"top":"0"},500);
}).on('mouseleave', function (e) {
	$(this).find(".txt").stop(true).animate({"top":"100%"},300);
});

/* 特别推荐 */
var activityUl = $(".activityTab .con ul");
var activityLi = $(".activityTab .con ul li");
var activityTabArrow = $(".activityTab .tab-arrow");
var activityTab_left = $(".activityTab .tab-arrow span.tab-prev");
var activityTab_right = $(".activityTab .tab-arrow span.tab-next");
var activityLiW = activityLi.outerWidth(true)
var activityLiLeng = activityLi.size();
if(activityLiLeng <= 5){
	activityTabArrow.hide();
}
var activityUlW = activityLiW * activityLiLeng;
var activityUlPer,activityUlLeft;
var indexNum=0;
if(windowWidth){
	activityUlPer = parseFloat((activityUlW/1100*100).toFixed(3));
	activityUlLeft = (activityUlW*activityLiW/1100/activityUlW*100).toFixed(3)
	$(".activityTab .con ul").css({left:-indexNum*activityUlLeft+"%"})
	activityUl.css("width",(activityUlPer+0.01)+"%");
}else{
	activityUlPer = parseFloat((activityUlW/1200*100).toFixed(3));
	activityUlLeft = (activityUlW*activityLiW/1200/activityUlW*100).toFixed(3)
	$(".activityTab .con ul").css({left:-indexNum*activityUlLeft+"%"})
	activityUl.css("width",(activityUlPer+0.01)+"%");
}
function activityStar(){
	activityLiW = activityLi.outerWidth(true)
	activityUlW = activityLiW * activityLiLeng;
	activityUlPer,activityUlLeft;
	if(windowWidth){
		activityUlPer = parseFloat((activityUlW/1100*100).toFixed(3));
		activityUlLeft = (activityUlW*activityLiW/1100/activityUlW*100).toFixed(3)
		$(".activityTab .con ul").css({left:-indexNum*activityUlLeft+"%"})
		activityUl.css("width",(activityUlPer+0.01)+"%");
	}else{
		activityUlPer = parseFloat((activityUlW/1200*100).toFixed(3));
		activityUlLeft = (activityUlW*activityLiW/1200/activityUlW*100).toFixed(3)
		$(".activityTab .con ul").css({left:-indexNum*activityUlLeft+"%"})
		activityUl.css("width",(activityUlPer+0.01)+"%");
	}
}
activityTab_left.click(function(){
	indexNum--;
	activityTab_right.removeClass("end");
	if(indexNum < 0){
		indexNum = 0
		return false;
	}else{
		$(".activityTab .con ul").animate({left:-indexNum*activityUlLeft+"%"},200)
		if(indexNum-1 < 0){
			activityTab_left.addClass("end");
		}
	}
});
activityTab_right.click(function(){
	indexNum++;
	activityTab_left.removeClass("end");
	if(indexNum > activityLiLeng-5){
		indexNum = activityLiLeng-5;
		return false;
	}else{
		$(".activityTab .con ul").animate({left:-indexNum*activityUlLeft+"%"},200)
		if(indexNum+1 >= activityLiLeng-4 ){
			activityTab_right.addClass("end");
		}
	}
});
/*产经*/
var spanIndex = 3;
$(".other .label span").mouseenter(function(){
	$(".other .label span").removeClass("cur");
	if(spanIndex != $(this).index()){
		$(".other .secondaryList").fadeOut(300);
	}
	if($(this).hasClass("floatTrue")){
		$(this).addClass("cur").siblings().removeClass("cur");
		spanIndex = $(this).index();
		$(this).parents(".other").find(".secondaryList").eq($(this).index()).stop(true,true).fadeIn(300);
		$(this).parents(".other").find("img").each(function(index){
			$(this).parents(".other").find("img").eq(index).attr("src",$(this).parents(".other").find("img").eq(index).attr("data-img"));
		})
	}
})
$('.other').mouseleave(function(){
	$(".other .label span").removeClass("cur");
	$(".other .secondaryList").fadeOut(300);
})
/*产经轮播图*/
function otherSwitch(id){
	var star = $("#"+id);
	var switchLi = star.find("li");
	var switchLiLeng = star.find("li").length;
	var switchArrow = star.find(".tab-arrow");
	var switchPrev = star.find(".tab-arrow span.tab-prev");
	var switchNext = star.find(".tab-arrow span.tab-next");
	var switchPageA = star.find(".tab-arrow .page .a");
	var switchPageB = star.find(".tab-arrow .page .b");
	if(switchLiLeng > 1){
		switchArrow.show(100);
		switchPageB.html(switchLiLeng);
	}
	var page = 0
	var pageTrue = true;
	switchPrev.click(function(){
		if(pageTrue){pageTrue = false;
			page --
			if(page <0){
				page = switchLiLeng-1;
			}
			switchLi.eq(page).find("img").attr("src",switchLi.eq(page).find("img").attr("data-img"));
			switchLi.eq(page).stop(true,true).fadeIn().css("z-index",2).siblings().fadeOut(function(){
				pageTrue = true;
			}).css("z-index","1"); 
			switchPageA.html(page+1);
		}
	})
	switchNext.click(function(){
		if(pageTrue){pageTrue = false;
			page ++
			if(page >= switchLiLeng){
				page = 0
			}
			switchLi.eq(page).find("img").attr("src",switchLi.eq(page).find("img").attr("data-img"));
			switchLi.eq(page).stop(true,true).fadeIn().css("z-index",2).siblings().fadeOut(function(){
				pageTrue = true;
			}).css("z-index","1"); 
			switchPageA.html(page+1);
		}
	})
}

otherSwitch("switch01");
otherSwitch("switch02");
otherSwitch("switch03");
otherSwitch("switch04");
otherSwitch("switch05");
otherSwitch("switch06");
otherSwitch("switch07");
otherSwitch("switch08");
otherSwitch("switch09");


/* 手风琴 */

var imgOuter = $('.wrap');
var imgDiv = $('.pic');
var imgNow = 0;
var imgMouse = 0;
var imgOuterWidth = imgOuter.width();
if(windowWidth){
	var imgWidth = 444;
	var edgeDistance = 82;
}else{
	var imgWidth = 480;
	var edgeDistance = 90;
}
imgDiv.each(function(index){
	if(index !=0 ){
		imgDiv.eq(index).css({"left":(index-1)*edgeDistance+imgWidth,"z-index":index+1});
	}
})
function wrapStar(){
	imgNow = 0;
	imgOuterWidth = imgOuter.width();
	if(windowWidth){
		imgWidth = 444;
		edgeDistance = 82;
	}else{
		imgWidth = 480;
		edgeDistance = 90;
	}
	imgDiv.eq(0).css({"left":0,"z-index":1});
	imgDiv.eq(0).addClass("cur").siblings().removeClass("cur")
	imgDiv.eq(0).find(".txt .title").show();
	imgDiv.eq(0).find(".txt .brief").show();
	imgDiv.each(function(index){
		if(index !=0 ){
			imgDiv.eq(index).css({"left":(index-1)*edgeDistance+imgWidth,"z-index":index+1});
		}
		
	})
}

function mouseSlide(){
	imgDiv.find(".txt .title").hide();
	imgDiv.find(".txt .brief").hide();
	if(imgMouse > imgNow){
		for(var i= imgNow+1;i<=imgMouse;i++){
			imgDiv.eq(imgMouse).addClass("cur").siblings().removeClass("cur")
			imgDiv.eq(imgMouse).find(".txt .title").fadeIn(400);
			imgDiv.eq(imgMouse).find(".txt .brief").fadeIn(500);
			imgDiv.eq(i).stop().animate({'left':edgeDistance*i+'px'},200);
		}
		imgNow = imgMouse;
	}else{
		for(var i= imgNow;i>imgMouse;i--){
			imgDiv.eq(imgMouse).addClass("cur").siblings().removeClass("cur")
			imgDiv.eq(imgMouse).find(".txt .title").fadeIn(400);
			imgDiv.eq(imgMouse).find(".txt .brief").fadeIn(500);
			imgDiv.eq(i).stop().animate({'left':imgOuterWidth-(imgDiv.size()-i)*edgeDistance+'px'},200);
		}
		imgNow = imgMouse;
	}
}
imgDiv.hover(function(){
	imgMouse = $(this).index();
	if(imgMouse != imgNow){
		mouseSlide();
	}		
});


/*走马灯广告js*/
if( $('.galaxyAdvert02 .img .list a').length > 9 ){
	var autoAdvertInterval;
	function autoAdvertFun(){
		autoAdvertInterval= setInterval(function() {
			var autoAdvertIntervalW = $('.galaxyAdvert02 .img .list a').outerWidth(true);
			$(".galaxyAdvert02 .img .list").stop().animate({left: -autoAdvertIntervalW},function(){
				$('.galaxyAdvert02 .img .list').append($('.galaxyAdvert02 .img .list a:eq(0)'));
				$(".galaxyAdvert02 .img .list").css({left: 0});
			});	
		},3000)
	}
	autoAdvertFun();
	$(".galaxyAdvert02").mouseenter(function() {
		clearInterval(autoAdvertInterval);
	});
	$(".galaxyAdvert02").mouseleave(function() {
		autoAdvertFun();
	});
}

