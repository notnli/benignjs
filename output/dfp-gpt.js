//_dfp_ToAMP_AllChannel #readMore Mode 2 #Taboola(海外)
//2023-06-05 18:15, 6/7 09:10 updated
if (document.cookie.indexOf("CookieReseted") === -1 && window.location.hostname.includes("media.")) {
  //調用清除所有cookie的函數
  clearAllCookie();
  console.log("All ET Cookies cleared!!!");
}

function clearAllCookie(){
  //取得當前的日期時間
  const currentDate = new Date();

  //設定過期時間為過去的日期，使 cookie 失效
  currentDate.setFullYear(currentDate.getFullYear() - 1);

  //取得所有的 cookie 名稱
  const cookies = document.cookie.split(';');
  //設定白名單
  whitelist = [
    //DCS用
    "et_token",
    "dcs_local_cid",
    "dcs_cookie_id",
   //標籤用
    "et_tag",
    "et_MAD",
   //其它
    "AMP_TOKEN",
    "AMP-Readmore",
    "AMP-Readmore-expire",
    "AMP-Switch",
    "__gads",
    "__gpi",
    "__htid",
    "_ss_pp_id",
    "et_client_country",
    "CookieReseted"
  ];

  cookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim();
    //忽略 whielist cookie
    if (!whitelist.includes(cookieName)) {
      document.cookie = `${cookieName}=; expires=${currentDate.toUTCString()}; path=/; domain=.ettoday.net`;
    }
  });
  //寫入cookie: CookieReseted
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);//效期 7 天
  document.cookie = `CookieReseted=true; expires=${expirationDate.toUTCString()}; path=/; domain=.ettoday.net`;
}

//2023-03-26~04/04
/*
if ( (window.location.href.indexOf("www.ettoday.net") !== -1 || window.location.href.indexOf("star.ettoday.net") !== -1) && window.location.href.indexOf("from=line_et_news") !== -1 && (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("iPhone") > -1) ) {
  let str = window.location.href;
  let redir = str.replace("line_et_news", "%20line_et_news");
  window.location.href = redir;
}
*/
console.log("top.location:"+top.location);
console.log("self.location:"+self.location);
console.log("document.referrer:"+document.referrer);
console.log("window.location.href:"+window.location.href);
console.log("document.location.href:"+document.location.href);
console.log("top.location.href:"+top.location.href);
/*
if (top.location != self.location && document.referrer.search("ettoday.net") < 0) {
  top.location.href = window.location.href;
}
*/
/*
if (window.location.href.indexOf("moneylife.vip") > 0) {
  var oriURL = decodeURIComponent(window.location.href.split("url=")[1]);
  console.log("oriURL:"+oriURL);
  //window.location.href = oriURL;
  window.location.href = "https://www1.tipo.gov.tw/lp.asp?CtNode=7853&CtUnit=3885&BaseDSD=7&mp=1";
}
*/

/* 20210421
if (document.referrer.indexOf("google.com") > 0 && window.location.href.indexOf("dx688") > 0) {
	var AmpHtmlUrl_1 = "";
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i ++) {
	    if (links[i].getAttribute("rel").toLowerCase() === "amphtml") {
	        AmpHtmlUrl_1 = links[i].getAttribute("href")
	    }
	}
	var fromStr_1 = "dx688.net"; 
	console.log("AmpHtmlUrl_1:"+AmpHtmlUrl_1);
	window.location.href = "https://www.ettoday.net"+AmpHtmlUrl_1+ "&from="+ fromStr_1;
}


if (window.location.href.indexOf("xn--uis76ch9al24a1k5b.net") > 0) {
	var canonicalUrl = "";
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i ++) {
	    if (links[i].getAttribute("rel").toLowerCase() === "canonical") {
	        canonicalUrl = links[i].getAttribute("href")
	    }
	}
	var fromStr = "贏家娛樂城"; 
	console.log("canonicalUrl:"+canonicalUrl);
	window.location.href = "https://www.ettoday.net"+canonicalUrl+ "&from="+ fromStr;
}
*/

// ============================================================
var u = navigator.userAgent;
 isLineApp = u.indexOf("Line") > -1;
 isFbApp = u.indexOf("FB") > -1 && u.indexOf("Messenger") === -1 && u.indexOf("Orca-Android") === -1; 
 isMessenger = u.indexOf("Messenger") > -1 || u.indexOf("Orca-Android") > -1; 
 isIGApp = u.indexOf("Instagram") > -1; 
 isNewsRepublic = u.indexOf("TopBuzz") > -1; 
 isPuffin = u.indexOf("Puffin") > -1; 
 isEdge = u.indexOf("Edg") > -1; 
 isXiaoMi = u.indexOf("XiaoMi") > -1; 
 isSamsung = u.indexOf("SamsungBrowser") > -1; 
 isWeixinApp = u.indexOf("MicroMessenger") > -1; 
 isOpera = u.indexOf("Opera") > -1 || u.indexOf("OPR/") > -1;
 isFF = u.indexOf("Firefox") > -1 || u.indexOf("FxiOS") > -1;
 isIE = (u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera) || u.indexOf("Trident") > -1;

 isWindows = u.indexOf("Windows") > -1;

 isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1 && u.indexOf("CriOS") === -1 && u.indexOf("FxiOS") === -1;

 isAndroid = u.indexOf("Android") > -1; 
 isIphone = u.indexOf("iPhone") > -1; 
 isIpad = u.indexOf("iPad") > -1; 

if (window.screen.width < window.screen.height) {//直式
  var isPortrait = true;
  var isLandscape = false;
}else {//橫式
  var isPortrait = false;
  var isLandscape = true;
}

if (u.indexOf("Mobile") > -1) {
  var isDesktop = false;
  if (window.screen.width < window.screen.height) {//直式
     if (window.screen.width/window.screen.height >= 0.600) {
       //直 Pad - 固定用 336x280, 320x100
       var isMobilePhone = false;
       var isPad = true;
       var isPadPortrait = true;
       var isPadLandscape = false;
     }else {
       //直 Phone - 滿版
       var isMobilePhone = true;
       var isPad = false;
       var isPadPortrait = false;
       var isPadLandscape = false;
     }
  }else {//橫式
     if (window.screen.width/window.screen.height <= 1.778) {
       //橫 Pad - 固定用 336x280, 320x100
       var isMobilePhone = false;
       var isPad = true;
       var isPadPortrait = false;
       var isPadLandscape = true;
     }else {
       //橫 Phone - 固定用 336x280, 320x50
       var isMobilePhone = true;
       var isPad = false;
       var isPadPortrait = false;
       var isPadLandscape = false;
     }
  }
}else{
  //是桌機 固定用 336x280, 320x100
  var isDesktop = true;
  var isPad = false;
  var isPadPortrait = false;
  var isPadLandscape = false;
}

var isMobile = false;
var isChrome = false;

if (isIphone){
  isMobile = true;
  isChrome = u.indexOf("CriOS") > -1;
} else if (isIpad) {
  isMobile = false;
  isChrome = u.indexOf("CriOS") > -1;
} else if (isAndroid) {
  isMobile = true;
  if ( u.indexOf("wv") > -1 ) {//Line, IG, FB, Messenger
      isChrome = false;
  } else if ( u.indexOf("Safari") > -1 && u.indexOf("Chrome") > -1 ) {
      if (isEdge || isOpera || isXiaoMi || isSamsung || isPuffin) {
         isChrome = false;
      } else {
         isChrome = true;
      }
  } else {
      isChrome = false;
  }
} else {
  if ( u.indexOf("Mobile") > -1 ) {
      isMobile = true;
  } else {
      isMobile = false;
      isChrome = u.indexOf("Chrome") > -1 && !isWeixinApp && !isEdge && !isOpera && !isPuffin;
  }
}

var myCountry = $.cookie("et_client_country"); //取得目前cookie值(國家代碼)

//tynt 複製內文帶標題==============================
if(myCountry==null || (myCountry!="CN" && myCountry!="cn")){//非大陸才執行
	var Tynt=Tynt||[];Tynt.push('bGee2M3Q0r4iaCacwqm_6r');
	(function(){var h,s=document.createElement('script');
	s.src='https://cdn.tynt.com/ti.js';
	h=document.getElementsByTagName('script')[0];
	h.parentNode.insertBefore(s,h);})();
}

var docReferrer = document.referrer;
var isFreeTV = false;
var isMBNews = false;
if (isIphone){
  isFreeTV = u.indexOf("Safari") === -1 && u.indexOf("FB") === -1 && u.indexOf("Instagram") === -1; 
} else if (isAndroid) {
  isFreeTV = u.indexOf("wv") > -1 && u.indexOf("FB") === -1 && u.indexOf("Instagram") === -1 && u.indexOf("Line") === -1 && (myCountry === null || myCountry === "" || typeof(myCountry) === "undefined") && document.referrer === ""; 
  isMBNews = u.indexOf("wv") > -1 && u.indexOf("FB") === -1 && u.indexOf("Instagram") === -1 && u.indexOf("Line") === -1 && (myCountry !== null || myCountry !== "" || typeof(myCountry) !== "undefined") && document.referrer === "" && (window.location.href.indexOf("m.ettoday.net") !== -1 || docReferrer.indexOf("m.ettoday.net") !== -1 || window.location.href.indexOf("redirect=1") !== -1 || window.location.href.indexOf("from=ettoday_app") !== -1); 
}
if (isFreeTV || isMBNews) {isChrome = false;}

// 台灣 or 海外★
isNotChrome = ((myCountry === "TW") && !isChrome) || isFreeTV || isMBNews || isLineApp || isFbApp || isIGApp || isSamsung;
//isNotChrome = ((myCountry === "TW") && !isChrome) || isFreeTV || isMBNews;
//isNotChrome = ((myCountry === "TW" || myCountry === "HK" || myCountry === "MO" || myCountry === "CN" || myCountry === "MY" || myCountry === "SG") && !isChrome) || isFreeTV || isMBNews || isLineApp || isFbApp || isIGApp || isSamsung;
//isNotChrome = ((myCountry === "TW" || myCountry === "HK" || myCountry === "MO" || myCountry === "CN" || myCountry === "MY" || myCountry === "SG") && !isChrome) || isFreeTV || isMBNews;

//Get Meta name="xxx" 的內容，以取得新聞發佈時間
function GetMetaItemprop(meta_name) {
  var my_arr = document.getElementsByTagName("meta");
  for (var counter = 0; counter < my_arr.length; counter++) {
    //console.log(my_arr[counter].getAttribute('name'));
    if (my_arr[counter].getAttribute('name') == meta_name) {
      return my_arr[counter].content;
    }
  }
  return "N/A";
}

//排除業配稿 
var isAdvertorial = window.location.href.indexOf("2165754") !== -1 || window.location.href.indexOf("2166538") !== -1 || GetMetaItemprop("section2") === "Advertorial";
var AmpHtmlUrl = "";
var ETnewsID = "";
if (isAdvertorial) {
	AmpHtmlUrl = "";
}else{
	//Get amphtml 的值======================*/
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i ++) {
	    if (links[i].getAttribute("rel").toLowerCase() === "amphtml") {
	        AmpHtmlUrl = links[i].getAttribute("href");//取得 amphtml 網址
	    }
	}
	if (AmpHtmlUrl !==""){
		var ETnewsID = AmpHtmlUrl.split("news_id=")[1]; //取得 news id (用news_id=分隔網址，取出news_id=右邊的字串)
		if(myCountry === "US" || myCountry === "CA" || myCountry === "HK" || myCountry === "MO" || myCountry === "MY" || myCountry === "SG"){ //海外特定國家，轉 Taboola
			if (window.location.href.indexOf("www.ettoday.net/dalemon") !== -1) {//大檸檬
				AmpHtmlUrl = "https://www.ettoday.net/amp/lemon_amp_news_taboola.php?lemon_news_id="+ETnewsID;
			}else{//新聞
				AmpHtmlUrl = "/amp/amp_news_taboola.php?news_id="+ETnewsID;
			}
		}
	}
}
console.log("isAdvertorial:"+isAdvertorial);
console.log("amphtml:"+AmpHtmlUrl);
console.log("news ID:"+ETnewsID);
console.log("section2:"+GetMetaItemprop("section2"));

if(isChrome) {// Chrome
	var toAMP = true;
}else{// 非 Chrome
	if (myCountry === "" || myCountry === null || myCountry === "TW") {//無國家cookie 或 台灣
		if($.cookie("AMP-Switch")===null){ // ★沒有 cookie 時★
			var toAMP = true;
			//var toAMP = false;
		}else{
			if($.cookie("AMP-Switch")==="On"){ //cookie 設為 On 時
				var toAMP = true;
			} else {
				var toAMP = false;
			}
		}
	}else{//非台灣
		var toAMP = true;
	}
}
console.log("toAMP:" + toAMP);
console.log("AMP-Switch:" + $.cookie("AMP-Switch"));

if (isMobile) {//手機
	// etInterstitialAd ===================================
	var etInterstitialAd_JS = document.createElement("script");
	etInterstitialAd_JS.type = "text/javascript";
	etInterstitialAd_JS.src = "https://cdn1.ettoday.net/banners/0/3-4.js";
	document.head.appendChild(etInterstitialAd_JS);
}

function setCookie(cookieName, cookieValue, minutesToExpire) {
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (minutesToExpire * 60 * 1000));//以分鐘為單位
  var expires = "expires=" + expirationDate.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires + "; domain=ettoday.net; path=/";
}

//取得 from 值
var fromStr = "";
if (toAMP && isMobile && AmpHtmlUrl !== "" && window.location.href.indexOf("forum.ettoday.net") === -1 && window.location.href.indexOf("www.ettoday.net/events/") === -1){ 
	if (document.referrer.indexOf("search.yahoo.com") > 0){ 
		fromStr = "search.yahoo.com"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("bing.com") > 0){ 
		fromStr = "bing.com"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf(".cc") > 0 && document.referrer.indexOf("popin") === -1){ 
		fromStr = ".cc"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("amp_news") > 0 && window.location.href.indexOf("boba.ettoday.net") === -1){ //排除播吧
		fromStr = "amp_news"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("amp-logo") > 0){ 
		fromStr = "amp-logo"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("amp-hnav") > 0){ 
		fromStr = "amp-hnav"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("amp-sidenav") > 0){ 
		fromStr = "amp-sidenav"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("ampproject.org") > 0){ 
		fromStr = "ampproject.org"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("googleads.g.doubleclick.net") > 0){ 
		fromStr = "googleads.g.doubleclick.net"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("googleapis.com") > 0){ 
		fromStr = "googleapis.com"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("news.google.com") > 0){ 
		fromStr = "news.google.com"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("googlequicksearchbox") > 0){ 
		fromStr = "googlequicksearchbox"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("google.com") > 0){ 
		if (window.location.href.indexOf("dx688") > 0) {
			var fromStr = "dx688.net"; 
			window.location.href = "https://www.ettoday.net"+AmpHtmlUrl_1+ "&ref=mw&from="+ fromStr;
		} else {
			fromStr = "google.com"; 
			window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
		}
/* 20210530
	} else if (document.referrer.indexOf("m.facebook.com") > 0 && window.location.href.indexOf("from=") === -1){ 
		fromStr = "m.facebook.com"; 
		window.location.href = AmpHtmlUrl + "&from="+ fromStr;
*/
	} else if (document.referrer.indexOf("socialife") > 0){ 
		fromStr = "socialife"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf("taoo.in") > 0){ 
		fromStr = "taoo.in"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf(".org") > 0){ 
		fromStr = ".org"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	} else if (document.referrer.indexOf(".edu") > 0){ 
		fromStr = ".edu"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	//MBNews-Android
	} else if (isMBNews && isAndroid){ 
		fromStr = "freetv_MBNews_android"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	//FreeTV-Android (帶 ettoday_app 參數)
	//}else if (window.location.href.indexOf("from=ettoday_app") > 0 && isAndroid && u.indexOf("wv") > -1 && (myCountry === null || myCountry === "" || typeof(myCountry) === "undefined") && document.referrer === "") {
	} else if (window.location.href.indexOf("from=ettoday_app") > 0 && isFreeTV && isAndroid) {
		fromStr = "ettoday_app_freetv_android"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
		//fromStr = "ettoday_app"; 
		//window.location.href = AmpHtmlUrl + "&redirect=freetv_android&from="+ fromStr;
	//FreeTV-Android (由 FreeTV 新聞頁中再點擊)
	} else if (isFreeTV && isAndroid){ 
		fromStr = "freetv_android"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	//FreeTV-iPhone (帶 ettoday_app 參數)
	} else if (window.location.href.indexOf("from=ettoday_app") > 0 && isFreeTV && isIphone) {
		fromStr = "ettoday_app_freetv_iphone"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
		//fromStr = "ettoday_app"; 
		//window.location.href = AmpHtmlUrl + "&redirect=freetv_iphone&from="+ fromStr;
	//FreeTV-iPhone (由 FreeTV 新聞頁中再點擊)
	} else if (isFreeTV && isIphone){ 
		fromStr = "freetv_iphone"; 
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	//} else if (document.referrer.indexOf("nativeapp.toutiao.com") > 0){ 
	} else if (isNewsRepublic){
		if (isIphone) {
			fromStr = "NewsRepublic"; 
			window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
		}
	}
}

//取得新聞發佈日期
console.log("pubDate:"+GetMetaItemprop("pubdate").split("T")[0].replace(/-/g, "/")); //用T分隔網址，取出T右邊的字串,再將-取代為/ (本地時間)
var pubDateTime = new Date(GetMetaItemprop("pubdate").split("T")[0].replace(/-/g, "/")).getTime(); 
var nowDateTime = new Date().getTime();
console.log("pubDateTime:"+pubDateTime); 
console.log("nowDateTime:"+nowDateTime);
//if (window.location.href.indexOf("www.ettoday.net") !== -1 || window.location.href.indexOf("star.ettoday.net") !== -1){//www 或 star 舊聞才轉 AMP
if (window.location.href.indexOf("forum.ettoday.net") === -1 && window.location.href.indexOf("pets.ettoday.net") === -1){//非 forum 且 非 pets 舊聞才轉 AMP
//if (window.location.href.indexOf("m.ettoday.net") !== -1){//m 舊聞才轉 AMP
	var dayDiff = parseInt((nowDateTime - pubDateTime) / (1000 * 60 * 60 * 24));//昨天(含)以前的舊聞才轉 (only from line. fb & ig)
}else{
	var dayDiff = 0;//其它頻道舊聞不轉 AMP
}
console.log("dayDiff:"+dayDiff);

//to AMP
if (toAMP && isMobile && AmpHtmlUrl !== "" && (window.location.href.indexOf("from=") > 0 || window.location.href.indexOf("utm_source=dable") > 0) && window.location.href.indexOf("forum.ettoday.net") === -1 && window.location.href.indexOf("www.ettoday.net/events/") === -1){ //非 forum && 非 /events/ 才轉
	fromStr = window.location.href.split("from=")[1];//用from=分隔網址，取出from=右邊的字串
	if ( (fromStr === null || fromStr === "" || typeof(fromStr) === "undefined") && window.location.href.indexOf("utm_source=dable") > 0){//沒有 from 參數，且有 utm_source=dable
		fromStr = "dable_banner";
	} else {//有 from 參數
		if(fromStr.indexOf("&") >= 0){//如果from=右邊的字串中有&號時
			fromStr = fromStr.split("&")[0];//用&分隔網址，取出&左邊的字串，即為 from 值
		}
	}
	//var toAMP1 = (window.location.href.indexOf("from=dable") > 0) && (fromStr !=="dable_Customised_bottom") && (window.location.href.indexOf("boba.ettoday.net") === -1); //排除播吧
	var toAMP1 = (window.location.href.indexOf("dable") > 0) && (window.location.href.indexOf("boba.ettoday.net") === -1); //網址中有 dable 字串一律轉AMP，但排除播吧 20223-01-02 13:00
	var toAMP2 = window.location.href.indexOf("from=popin") > 0 || window.location.href.indexOf("from=mwebtaglist") > 0 || window.location.href.indexOf("from=rss") > 0 || window.location.href.indexOf("from=feature") > 0 || window.location.href.indexOf("from=etstar_app") > 0 || window.location.href.indexOf("from=amp_newslist") > 0;
	//var toAMP3 = window.location.href.indexOf("from=ettoday_app") > 0;
	var toAMP3 = window.location.href.indexOf("from=ettoday_app") > 0 && docReferrer.indexOf("FromApps") === -1 && docReferrer.indexOf("facebook.com") === -1;
	var toAMP4 = (window.location.href.indexOf("from=line") > 0) && (dayDiff > 0);//Line舊聞
	var toAMP5 = (window.location.href.indexOf("from=fb") > 0) && (dayDiff > 0);//FB舊聞
	var toAMP6 = (window.location.href.indexOf("from=ig") > 0) && (dayDiff > 0);//IG舊聞
	var toAMP7 = window.location.href.indexOf("newsshare") > 0;
	if ( toAMP1 || toAMP2 || toAMP3 || toAMP4 || toAMP5 || toAMP6 || toAMP7){
		//setCookie('stopGA4', 'On', 1);
		window.location.href = AmpHtmlUrl + "&ref=mw&from="+ fromStr;
	}
}

console.log("document.referrer:"+document.referrer);
console.log("from:"+fromStr);

//廣告個別處理=================================================
(function() {
  if (window.location.href.indexOf("1565046") > 0){ //2019/12/20
    const adCustomziedStyle = document.createElement("style");
    adCustomziedStyle.type = 'text/css';
    adCustomziedStyle.textContent = '.adM14 {display:none!important}';
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(adCustomziedStyle);
  }
})();

//Adsense Auto Ads =========================== Start

//指定時段設定
var etStartHour = 2;//<--開始：時
var etStartMinute = 00;//<---開始：分
var etPlayStopHour = 5;//<---結束：時
var etPlaySopMinute = 59;//<---結束：分

//抓取現在時間
var RightNOW = new Date();
var this_hour = RightNOW.getHours();
var this_minute = RightNOW.getMinutes();
var this_second = RightNOW.getSeconds();

//靜音期間設定：以0時為0，分別計數出各時間點距0時幾秒
var AutoStartTime = (etStartHour*60*60)+(etStartMinute*60);
var AutoStopTime = (etPlayStopHour*60*60)+(etPlaySopMinute*60);
var RightTime = (this_hour*60*60)+(this_minute*60);

//依時段不同
if (AutoStartTime <= RightTime && RightTime <= AutoStopTime) {//現在時間在指定時段內
	if (fromStr === "") { fromStr = "redirect3" };
	var isAbroad = myCountry !== "" && myCountry !== null; //全球
	//var isAbroad = myCountry !== "" && myCountry !== null && myCountry !== "TW" && myCountry !== "US" && myCountry !== "HK"; //非台灣,非美國,非香港
	//if (toAMP && isMobile && window.location.href.indexOf("from=") > 0 && AmpHtmlUrl !== ""){ 
	if (toAMP && isMobile && AmpHtmlUrl !== "" && window.location.href.indexOf("www.ettoday.net/events/") === -1){ 
		if (window.location.href.indexOf("from=") > 0 && window.location.href.indexOf("from=dmp") === -1){ 
			window.location.href = AmpHtmlUrl + "&ref=mw&redirect=3&from="+ fromStr;
		} else if (document.referrer.indexOf("m.facebook.com") > 0 && window.location.href.indexOf("from=") === -1){ 
			fromStr = "m.facebook.com"; 
			window.location.href = AmpHtmlUrl + "&ref=mw&redirect=3&from="+ fromStr;
		}
	}
} else {//其它時段
	var isAbroad = myCountry !== "" && myCountry !== null && myCountry !== "TW" && myCountry !== "US"; //非台灣,非美國
	//var isAbroad = myCountry !== "" && myCountry !== null && myCountry !== "TW" && myCountry !== "US" && myCountry !== "HK"; //非台灣,非美國,非香港
}

var myChannle = window.location.href.indexOf("travel") >0 || window.location.href.indexOf("pets") >0 || window.location.href.indexOf("game") >0;
console.log("isAbroad:"+isAbroad);
console.log("myChannle:"+myChannle);

var etPath = window.location.href.split("ettoday.net/")[1];//用 ettoday.net/ 分隔網址，取出 ettoday.net/ 右邊的字串
var isHomepage = etPath === "";
var isNotHomepage = etPath !== "" && etPath !== "?from=logo" && etPath !== "?from=rf";
console.log("etPath:"+etPath);
console.log("isNotHomepage:"+isNotHomepage);

//if ( isAbroad && isMobile && myChannle && isHomepage ) { //非台灣 & 指定的頻道 & 非首頁 & 手機
//if ( isAbroad && isMobile && isNotHomepage ) { //非台灣 & 全頻道 & 非首頁 & 手機
//if ( isAbroad && isMobile && window.location.href.indexOf("star") === -1 ) { //非台灣 & ★非星光雲 & 手機
//if ( isAbroad && isMobile ) { //非台灣 & ★全頻道 & 手機 
/* 2021/8/5
if ( isAbroad && isMobile && isChrome ) { //非台灣 & ★全頻道 & 手機 & isChrome
	var script5 = document.createElement("script");
	script5.type = "text/javascript";
	script5.async = true;
	script5.id = "AdsenseAutoAd";
	//script5.setAttribute("data-ad-client","ca-pub-7504183592568612");
	script5.setAttribute("crossorigin","anonymous");
	script5.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7504183592568612";
	document.head.appendChild(script5);
	console.log("★Adsense JS Loaded!★");
}
*/
//Adsense Auto Ads =========================== End

//DFP ============================== Start
var script0 = document.createElement("script");
script0.type = "text/javascript";
script0.async = true; //dfp async
script0.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
document.head.appendChild(script0);
window.googletag = window.googletag || {cmd: []};

//DFP ============================== End

if (isMobile) {//手機

	//新聞雲_全頻道_流量統計(MobileWeb)
	var ts = Math.random();
	var script3 = document.createElement("script");
	script3.type = "text/javascript";
	script3.src = "https://ad1.ettoday.net/ads.php?bid=all_pageviews_mobileweb&rr="+ ts;
	document.head.appendChild(script3);

	// Avivid 禾多
	//var script_Avivid = document.createElement("script");
	//script_Avivid.type = "text/javascript";
	//script_Avivid.src = "https://cdn2.ettoday.net/ad/avivid/ettoday.js";
	//document.head.appendChild(script_Avivid);

}else{////非手機

	// AndBeyond JS =============================================
	/*
	var AndBeyond_JS = document.createElement("script");
	AndBeyond_JS.type = "text/javascript";
	AndBeyond_JS.async = true;
	AndBeyond_JS.src = "https://rtbcdn.andbeyond.media/prod-global-550782.js";
	document.head.appendChild(AndBeyond_JS);
	*/

	//新聞雲_全頻道_流量統計(電腦版)
	var ts = Math.random();
	var script3 = document.createElement("script");
	script3.type = "text/javascript";
	script3.src = "https://ad1.ettoday.net/ads.php?bid=all_pageviews_desktop&rr="+ ts;
	document.head.appendChild(script3);

	// 閒置廣告 =============================================================
	var myCountry = $.cookie("et_client_country");
	if (myCountry === "TW" || myCountry === "HK" || myCountry === "MO" || myCountry === "CN" || myCountry === "MY" || myCountry === "SG") { //台港澳中星馬
		if (window.location.href.indexOf("fashion") === -1 && window.location.href.indexOf("house") === -1 && window.location.href.indexOf("boba") === -1) { //非時尚, 且非房產, 且非播吧
			var script1 = document.createElement("script");
			script1.type = "text/javascript";
			script1.async = true;
			script1.src = "//static.ettoday.net/ad/idle-ad/idle-ad-970.js";
			document.head.appendChild(script1);
		}
	}

}

// Prebid (Truvid) ============================================
/*
var script6 = document.createElement("script");
script6.type = "text/javascript";
script6.src = "https://cnt.trvdp.com/prebid/ettoday/prebid.js";
document.head.appendChild(script6);
*/

// Prebid ===================================================
var script4 = document.createElement("script");
script4.type = "text/javascript";
script4.src = "https://static.ettoday.net/ad/prebid/prebid.js?v=7.47.0";
document.head.appendChild(script4);

// CRITEO CDB =============================================
var script2 = document.createElement("script");
script2.type = "text/javascript";
script2.async = true;
script2.src = "https://static.criteo.net/js/ld/publishertag.js";
document.head.appendChild(script2);
if (isMobile) {//手機
	var CriteoAdUnits = { "placements": [
	    /* Criteo Placements List */
	    //{ "slotid": "criteo_783188", "zoneid": 783188 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Top
	    { "slotid": "criteo_783189", "zoneid": 783189 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Bottom
	    { "slotid": "criteo_1191499", "zoneid": 1191499 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Inread
	]};
}else{//非手機
	var CriteoAdUnits = { "placements": [
	    /* Criteo Placements List */
	    { "slotid": "criteo_1191499", "zoneid": 1191499 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Inread
	    { "slotid": "criteo_943528", "zoneid": 943528 }, // EtToday - TW - CDB - SA - 300x250 - Article UP Left (PC)
	    { "slotid": "criteo_1086336", "zoneid": 1086336 }, // EtToday - TW - CDB - SA - 970x250 - Top (PC)
	    { "slotid": "criteo_806580", "zoneid": 806580 }, // EtToday - TW - CHB - SA - 300x250 (PC)
	    { "slotid": "criteo_1086335", "zoneid": 1086335 }, // EtToday - TW - CDB - SA - 300x250 - #2  (PC)
	    { "slotid": "criteo_806581", "zoneid": 806581 }, // EtToday - TW - CHB - SA - 300x600 (PC)
	    { "slotid": "criteo_845893", "zoneid": 845893 }, // EtToday - TW - CDB - SA - 300x250 - Bottom Right (PC)
	]};
}
window.Criteo = window.Criteo || {}; window.Criteo.events = window.Criteo.events || [];
var CriteoBids=CriteoBids||{},CriteoBidsReceived=function(){for(var t in CriteoAdUnits.placements){var e=CriteoAdUnits.placements[t],i=Criteo.GetBidsForAdUnit(e.slotid);CriteoBids[e.slotid]=i.length>0?i[0]:null}},CriteoDisplayAd=function(t,e,i){if(void 0===i&&(i=0),null!==CriteoBids[t])if(void 0===CriteoBids[t]&&null!==CriteoBids[t])100>i&&setTimeout(function(){CriteoDisplayAd(t,e,i+1)},200);else{var r=document.getElementById(t);if(r){var s=document.createElement("iframe");s.setAttribute("id",t+"_iframe"),s.setAttribute("frameborder","0"),s.setAttribute("allowtransparency","true"),s.setAttribute("hspace","0"),s.setAttribute("marginwidth","0"),s.setAttribute("marginheight","0"),s.setAttribute("scrolling","no"),s.setAttribute("vspace","0"),s.setAttribute("width",CriteoBids[t].width),s.setAttribute("height",CriteoBids[t].height),r.appendChild(s);var o='<script src="'+CriteoBids[t].displayUrl+'"></scr'+'ipt>',d=s.contentWindow.document;d.open(),d.write(o),d.close()}}else"function"==typeof e&&e()};
Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, CriteoBidsReceived, 2000); });

// Dable =============================================================
if (window.location.href.indexOf("fashion.ettoday.net") === -1) {//非時尚
	(function(d,a,b,l,e,_) {
	d[b]=d[b]||function(){(d[b].q=d[b].q||[]).push(arguments)};e=a.createElement(l);
	e.async=1;e.charset='utf-8';e.src='//static.dable.io/dist/plugin.min.js';
	_=a.getElementsByTagName(l)[0];_.parentNode.insertBefore(e,_);
	})(window,document,'dable','script');

	if (window.location.href.indexOf("star.ettoday.net") !== -1) {//星光雲
	  dable('setService', 'star.ettoday.net');
	} else if (window.location.href.indexOf("boba.ettoday.net") !== -1) {//播吧
	  dable('setService', 'boba.ettoday');
	} else if (window.location.href.indexOf("www.ettoday.net/dalemon") !== -1) {//大檸檬
	  dable('setService', 'dalemon.ettoday');
	} else {//其它頻道
	    if (isMobile) {//手機
	      dable('setService', 'm.ettoday.net');
	    }else{////非手機
	      dable('setService', 'pc.ettoday.net');
	    }
	}
	dable('sendLogOnce');
}

// Popin for Boba only =============================================================
if (window.location.href.indexOf("boba.ettoday.net") !== -1) {//播吧
    (function() {
        var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.charset = "utf-8"; pa.async = true;
        pa.src = window.location.protocol + "//api.popin.cc/searchbox/boba_ettoday.js";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
    })();
}

// CSS 修正 =========================================================
(function() {
  //const myHotTopicCss = '.block_1 .part_menu_3, .block_a .part_menu_3{display:none;} .ad_in_news {margin:30px auto;text-align:center} .ad_in_news img {display:inline!important} .ad_in_news .adIF01, .ad_in_news .adJS01 {margin:0 auto!important}/*修正新聞中圖片廣告置中問題*/';
  //const myHotTopicCss = '#hot-trip{display:none!important} .ad_in_news {margin:30px auto;text-align:center} .ad_in_news img {display:inline!important} .ad_in_news .adIF01, .ad_in_news .adJS01 {margin:0 auto!important}/*隱藏出國趣*/ .ad_320x50_fixed { z-index:9999} /*修正 Trvuvid 問題，把置底廣告重在 Truvid 下方*/';
  //const myHotTopicCss = '#oneadICIPTag{margin-bottom:10px!important}.ad_in_news .ad_readmore{margin-bottom:5px}.ad_in_news {margin:30px auto;text-align:center} .ad_in_news img {display:inline!important} .ad_in_news .adIF01, .ad_in_news .adJS01 {margin:0 auto!important}/*修正新聞中圖片廣告置中問題*/ .ad_320x50_fixed { z-index:99999!important} /*修正 Trvuvid 問題，把置底廣告重在 Truvid 下方*/';
  ////const myHotTopicCss = '#oneadICIPTag{margin-bottom:10px!important}.ad_in_news .ad_readmore{margin-bottom:5px}.ad_in_news {margin:30px auto;text-align:center} .ad_in_news img {display:inline!important} .ad_in_news .adIF01, .ad_in_news .adJS01 {margin:0 auto!important}/*修正新聞中圖片廣告置中問題*/ .ad_320x50_fixed { z-index:99999!important} /*修正 Trvuvid 問題，把置底廣告重在 Truvid 下方*/ .c2 .ad_300, .c2 .ad_300x250, .c2 .banner_300x250, .c3 .ad_300, #mobileweb_320x50_top .adP01{min-height:250px} .c2 #all_300x600_2, .c2 #all_300x600_1, .c3 #index_300x450, .c3 #index_300x600_1 {min-height:600px} #fashion .c2 .ad_300x250, .c3 #index_370x450{min-height:auto} #aics-ad {min-height:460px}';
  const myHotTopicCss = '#oneadICIPTag{margin-bottom:10px!important}.ad_in_news .ad_readmore{margin-bottom:5px}.ad_in_news {margin:30px auto;text-align:center} .ad_in_news img {display:inline!important} .ad_in_news .adIF01, .ad_in_news .adJS01 {margin:0 auto!important}/*修正新聞中圖片廣告置中問題*/ .ad_320x50_fixed { z-index:99999!important} /*修正 Trvuvid 問題，把置底廣告重在 Truvid 下方*/ .c2 .ad_300, .c2 .ad_300x250, .c2 .banner_300x250, .c3 .ad_300, #mobileweb_320x50_top .adP01{min-height:250px} .c2 #all_300x600_2, .c2 #all_300x600_1, .c3 #index_300x450, .c3 #index_300x600_1 {min-height:600px} #fashion .c2 .ad_300x250, .c3 #index_370x450{min-height:auto} #aics-ad {min-height:460px} #abp1, #abp2, #abp3{height:auto!important}';
  const myHotTopicStyle = document.createElement('style');
  myHotTopicStyle.setAttribute('type', 'text/css');
  myHotTopicStyle.textContent = myHotTopicCss;
  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(myHotTopicStyle);
})();

/*
document.addEventListener("DOMContentLoaded", function(event) { 
  if (document.getElementsByClassName('ad_readmore').length >0) {
    //document.getElementsByClassName("ad_readmore")[0].innerHTML = "[廣告] 請繼續往下閱讀...";
    var InNewsNode=document.createElement("span");
    var InNewsTextnode=document.createTextNode("[廣告] ");
    InNewsNode.appendChild(InNewsTextnode);
    document.getElementsByClassName("ad_readmore")[0].prepend(InNewsNode);
  }
});
*/
/*
$(function(){
	if($(".part_menu_3 a:contains('★★★')").index() != -1 || $("#tag-cloud a:contains('★★★')").index() != -1){
		$(".part_menu_3 a:contains('★★★'), #tag-cloud a:contains('★★★')").css({"visibility":"hidden","position":"absolute","bottom":"0"});
	}
	$(".block_1 .part_menu_3, .block_a .part_menu_3").show();
});
*/

//變數 =========================================
console.log("navigator.userAgent:"+navigator.userAgent);
console.log("myCountry:"+myCountry);
console.log("isMobile:"+isMobile);
console.log("isChrome:"+isChrome);
console.log("isNotChrome:"+isNotChrome);
console.log("window.innerWidth:"+window.innerWidth);
console.log("window.screen.width:"+window.screen.width);

//新聞雲 MW 廣告被封鎖時 ========================================= 
$(function() {
  //if (isMobile && $("#mobileweb_pageviews").length > 0 && window.location.href.indexOf("www.ettoday.net") > 0 && window.location.href.indexOf("dalemon") === -1 && $(".news-page").length > 0 && $(".adM14").length === 0 && $("#hot-news").length > 0 && $("#mobileweb_70x35").length === 0) { //手機 & Msite & 主站 & 新聞頁 & 沒有天空大看板 & 有熱門新聞區 & 沒有 Header_小圖
  if (isMobile && $("#mobileweb_pageviews").length > 0 && window.location.href.indexOf("www.ettoday.net") > 0 && window.location.href.indexOf("dalemon") === -1 && $(".news-page").length > 0 && $("#hot-news").length > 0 && $("#mobileweb_70x35").length === 0) { //手機 & Msite & 主站 & 新聞頁 & 有熱門新聞區 & 沒有 Header_小圖
	
	//$("#hot-news").before('<div class="ad_300x250"><iframe width="100%" height="300" frameborder="0" vspace="0" marginheight="0" marginwidth="0" hspace="0" scrolling="no" allowtransparency="true" src="https://www.ettoday.net/events/passback/prebid/mw_inread-popin.htm?from=ad-blocked"></iframe></div>');

	/*
	console.log("%c 插入 Dable 文章推薦", "color:#fff;background:red");
	$("#hot-news").after('<div id="dablewidget_M7N5Dbob" data-widget_id="M7N5Dbob"></div>');
	(function(d,a,b,l,e,_) {
	if(d[b]&&d[b].q)return;d[b]=function(){(d[b].q=d[b].q||[]).push(arguments)};e=a.createElement(l);
	e.async=1;e.charset='utf-8';e.src='//static.dable.io/dist/plugin.min.js';
	_=a.getElementsByTagName(l)[0];_.parentNode.insertBefore(e,_);
	})(window,document,'dable','script');
	dable('setService', 'm.ettoday.net');
	dable('sendLogOnce');
	dable('renderWidget', 'dablewidget_M7N5Dbob');

	console.log("%c 插入 MicroAd 文章推薦", "color:#fff;background:red");
	$("#hot-news").after('<div id="compass-fit-4295137"></div>');
	(function(){
	  var _lgy_lw = document.createElement("script");
	  _lgy_lw.type = "text/javascript";
	  _lgy_lw.charset = "UTF-8";
	  _lgy_lw.async = true;
	  _lgy_lw.src= "https://nt.compass-fit.jp/lift_widget.js?adspot_id=4295137";
	  var _lgy_lw_0 = document.getElementsByTagName("script")[0];
	  _lgy_lw_0.parentNode.insertBefore(_lgy_lw, _lgy_lw_0);
	})();
	*/
	/*
	console.log("%c 插入 PopIn 文章推薦", "color:#fff;background:red");
	$("#hot-news").after('<div id="_popIn_recommend"></div>');
	(function() {
	  var pa = document.createElement("script"); pa.type = "text/javascript"; pa.charset = "utf-8"; pa.async = true;
	  pa.src = window.location.protocol + "//api.popin.cc/searchbox/ettoday.js";
	  var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(pa, s);
	})();
	*/
  }
});

//模組：快問快答 開始====================
var quickQA_JS = document.createElement("script");
quickQA_JS.type = "text/javascript";
quickQA_JS.src = "https://cdn2.ettoday.net/events/dmpfastvote/js/dmpfastvote-common.js";
document.head.appendChild(quickQA_JS);
//模組：快問快答 結束====================

//readMore：推薦模組 開始==================== Mode 2
var readMore_JS = document.createElement("script");
readMore_JS.type = "text/javascript";
readMore_JS.src = "https://cdn1.ettoday.net/banners/0/4-2.js";
document.head.appendChild(readMore_JS);
//readMore：推薦模組 結束====================