/**
 * 本js为播放器右键分享提供支持，放到：http://tv.people.com.cn/img/player/v.js
 * @type String
 */
var xmlPathSite="http://tv_html5.people.com.cn/";
var video_mp4 = 3; //mp4 
var ptv_domain = "people.com.cn";
var _replay = false;
var _objName = null;
var ptvXmlDoc=null,ptvXmlhttp=null;
var b__ua=navigator.userAgent.toLowerCase();
var isSafari=b__ua.match(/version\/([\d.]+).*safari/)?true:false;

var isMac = b__ua.indexOf("macintosh") != -1;
//isSafari?(isSafari=b__ua.indexOf("mobile")!=-1):null;
//如果是iphone、ipad、android平台的走HTML5
//isSafari = (b__ua.indexOf("iphone")!=-1 || b__ua.indexOf("ipad")!=-1 || b__ua.indexOf("android")!=-1) ? true : false;
//isSafari = (b__ua.indexOf("iphone")!=-1 || b__ua.indexOf("ipad")!=-1 || (isMac && 'ontouchend' in document)|| b__ua.indexOf("android")!=-1) ? true : false;
isSafari = true;
//如果是android平台返回MP4，而不是m3u8
var isAndroid = (b__ua.indexOf("android")!=-1) ? true : false;
var isUC = (b__ua.indexOf("uc")!=-1) ? true : false;
//如果IOS系统走m3u8
var isIOS = (b__ua.indexOf("iphone")!=-1 || b__ua.indexOf("ipad")!=-1) ? 1 : 0;
var isHTTPError=false;
var safariObj=new Object();
var objname=null;
//取得页面宽度
var clientWidth = document.body.clientWidth;

function showPlayer(obj){
	var _name=obj.name?obj.name:("_v_p_"+Math.round(Math.random()*1000));
	var w=obj.width?obj.width:600;
	//如果为手机并且页面宽度小于600，表示为自动适应页面，计算宽度，不能超过整体的90%
	if(clientWidth <= 600 && isSafari) {
		w = parseInt(clientWidth * 0.9);
		var h = parseInt(w / 1.3333);
	}
	//支持百分比，如果width是百分比，根据页面计算宽高,只有手机支持
	else if(typeof(w) == "string" && w.indexOf("%") != -1 && isSafari) {
		if(isUC) {
			w = getVideoWH(w);
			var h = parseInt(w / 1.3333);
		}else {
			var h = "auto";
		}
	}else {
		var h=obj.height?obj.height:497.5;
	}
	_replay = obj.replay;
	_objName = _name;
	obj.cdn = '100,0,0,0';
	obj.sl = '5';
	//obj.key='十八大';
	objname=_name;
	if(isSafari){
		safariObj.w=w;
		safariObj.h=h;
		safariObj.name=_name;
		safariObj.ap=obj.autoplay;
		//如果为1，宽高设定为100%
		safariObj.fullscreen = obj.fullscreen
		//设定可以去原始视频，手机有效
		safariObj.ori = obj.ori
		if(safariObj.ap==null || safariObj.ap==undefined){
			safariObj.ap=true;
		}
		safariObj.toid=obj.showid;
		safariObj.xml=obj.id;
		if(!safariObj.xml){
			safariObj.xml=obj.xml;
		}
		if(safariObj.xml){
			//if(isAndroid) {
				document.write('<script src="http://tvplayer.people.com.cn/getXML.php?path=' + safariObj.xml +'&callback=playForMobile&ios=' + isIOS + '&ori=' + safariObj.ori + '" type="text/javascript"></script>');
			//	return;
			//}
			//window.onAgentLoaded=function(win){window.agentWindow=win;loadByAjax();}
			//document.domain="people.com.cn";
			//document.write('<iframe src="'+xmlPathSite+'ajaxAgent.html" style="display:none;"></iframe>');
		}else{
			isHTTPError=true;
			showVideoCodeInPage();
		}
	}else{
		var _vinfo=new Array();
		for(var key in obj){
			_vinfo.push(key+"="+_$_getTransStr(obj[key]));
		}
		if(isMaxthon()) _vinfo.push("ism=1");
		_vinfo.push("key="+_$_getPageKey());
		var _vars=_vinfo.join("&");
		if(obj.fullscreen == 1) {
			w = "100%";
			h = "100%";
		}
		var _swfpaths= (obj.skin == 2) ? "http://tv.people.com.cn/img/2011ptv2/playerByOsmfnb.swf"+(isMaxthon()?("?"+Math.random()):"") : "http://tv.people.com.cn/img/2011ptv2/playerByOsmf.swf"+(isMaxthon()?("?"+Math.random()):"");
		var _flash_str='<object id="'+_name+'" name="'+_name+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,1,85,3" width="'+w+'" height="'+h+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ><param name="movie" value="'+_swfpaths+'" /><param name="FlashVars" value="'+_vars+'" /><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><embed name="'+_name+'" width="'+w+'" height="'+h+'" src="'+_swfpaths+'" wmode="opaque" allowFullScreen="true" allowScriptAccess="always" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" FlashVars="'+_vars+'" type="application/x-shockwave-flash"></embed></object>';
		document.write(_flash_str);
		//alert(_name);
	}
}

function getVideoWH(w) {
	//取得页面宽度
	var clientWidth = document.body.clientWidth;
	//计算宽度
	var tmp = w.replace("%", "");
	w = parseInt(clientWidth * (tmp / 100) * 0.9);
	return w;	
}

function playForMobile(url, img) {
	var w__str;
	if(safariObj.fullscreen == 1) {
		safariObj.w = "100%";
		safariObj.h = "100%";
	}
	w__str = '<video id="' + safariObj.name + '" class="video-js vjs-default-skin" '
  			+ 'controls ' + (safariObj.ap?'autoplay="autoplay"':'') + ' width="' + safariObj.w + '" height="' + safariObj.h + '" '
  			+ 'poster="' + img + '" data-setup=\'{"example_option":true}\' '
  			+ '<source src="' + url + '" type="video/mp4" />'
			+ '</video>';
	try{
		document.getElementById(safariObj.toid).innerHTML=w__str;
	}catch(e){
		document.write(w__str);
	}	
}

function isMaxthon(){
	if(window.navigator.userAgent.toLowerCase().indexOf("maxthon")>-1){
		return true;
	}else{
		return false;
	}
}
function _$_getTransStr(obj){
	if(typeof(obj)=="boolean"){
		return Number(obj);
	}else{
		return escape(obj);
	}
}
function _$_getPageKey(){
	//先判断有没有关键字，如果有关键字优先，如果没有保持以前的不变
	//videoadvertype格式：videotype=commonVideo;keywordvideo=测试2010:测试2010;测试2012:测试2012
	//关键字格式：维度:关键字;维度:关键字
	try {
		var keywordHTML = document.getElementById('videoadvertype').innerHTML;
		var arrTmp = keywordHTML.split(';');
		var arrKeywordTmp = arrTmp[1].split('=');
		var keyword = new Array();
		keyword.push(arrKeywordTmp[1]);
		for(var i = 2; i < arrTmp.length; i++) {
			keyword.push(arrTmp[i]);
		}
		var result = keyword.join(';');	
		return encodeURIComponent(result);
	} catch(e) {}
	
	var pu=window.location.href;
	if(pu.indexOf("GB")==-1) return "";
	return "人民电视:"+pu.substring(pu.indexOf("GB")+2,pu.lastIndexOf("/")+1);
}
function _$_getSwfMovie(movieName) {
	var dn=document[movieName];
	if(dn){
		if(dn.length) return dn[1];
		return dn;
	}
	return window[movieName];
}
function changePlayerVideo(str,name){
	if(name){
		_$_getSwfMovie(name).refreshPlayer(escape(str));		
	}
}
function setRelevantVideoToPage(arr){
	arr.shift();
	var rvlobj=document.getElementById("relevantVideoList");
	//var rvlobj=document.getElementById("relevantVideoList1");
	if(rvlobj){
		var rvlHtml="";
		for(var i=0;i<arr.length;i++){
			var to=arr[i];
			rvlHtml+=(i==0?'<li onmouseover=this.className="current" onmouseout=this.className="current01" class="current">':'<li onmouseover=this.className="current" onmouseout=this.className="current01" class="current01">')+
					 '<a href="'+to.link+'" titlr="'+to.title+'">'+
					 '<img src="'+to.image+'" width="80" height="60" alt="'+to.title+'" onerror="onErrorVideoImage(this)"  />'+
					 '</a>'+
					 '<div class="txt"><h4>'+
					 '<a href="'+to.link+'" titlr="'+to.title+'">'+to.title+'</a>'+
					 '</h4><p><span>'+
					 ((to.pt=="" || !to.pt)?"":to.pt)+
					 '</span><span>'+
					 ((to.len=="" || !to.len)?"":('时长：'+to.len))+
					 '</span></p></div>'+
					 (i==0?'</li>':'</li>');
		}
		//rvlHtml+='<style type="text/css">'+
		//		 '.ScrCont{ width:'+(180*arr.length)+'px; }'+
		//		 '</style>';
		rvlobj.innerHTML=rvlHtml;
		try{
			document.getElementById("relevantVideoNumber").innerHTML=arr.length;
		}catch(e){};
	}
}
function onErrorVideoImage(obj){
	var dimg="http://tv.people.com.cn/img/2010tv_flash/tv_logo.jpg";
	if(obj) obj.src=dimg;
	return dimg;
}
function setQuotePageInfo(flashurl,htmlcode){
	try{
		document.getElementById("pageUrlInput").value=window.location.href;
	}catch(e){};
	try{
		document.getElementById("flashUrlInput").value=flashurl;
	}catch(e){};
	try{
		document.getElementById("htmlCodeInput").value=htmlcode;
	}catch(e){};
}
//
function loadByAjax(){
	ptvXmlhttp=window.agentWindow.createHttpRequest();
    if(ptvXmlhttp==null) {
      	isHTTPError=true;
		showVideoCodeInPage();
    }else{
		ptvXmlhttp.open("GET",xmlPathSite+safariObj.xml,true);
		ptvXmlhttp.setRequestHeader("Content-Type","text/xml");
		ptvXmlhttp.onreadystatechange=getPtvVideoToApple;
		ptvXmlhttp.send(null);
	}
}
function getPtvVideoToApple(){
	if(ptvXmlhttp.readyState==4&&ptvXmlhttp.status==200){
		ptvXmlDoc=ptvXmlhttp.responseXML.documentElement;
		if(ptvXmlDoc==null){
			isHTTPError=true;
		}else{
			safariObj.video=getDecoderVideoForMP4(ptvXmlDoc.getElementsByTagName("video")[0].getElementsByTagName("item")[0].firstChild.nodeValue,ptvXmlDoc.getElementsByTagName("video")[0].getAttribute("type"),false);
			if(safariObj.video=="ERROR"){
				isHTTPError=true;
			}
			parsePlayListXml(ptvXmlDoc.getElementsByTagName("associations")[0].getElementsByTagName("item"));
		}
		showVideoCodeInPage();
	}
}
function getDecoderVideo(str,isImage){
	var newstr="";
	if(!str || str=="") return newstr;
	if(str.indexOf("http://")!=0){
		var offset=3,pos=0,index=0;
		while(pos<str.length){
			var ch1=str.charCodeAt(pos++);
			var ch2=str.charCodeAt(pos++);
			newstr=newstr.concat(String.fromCharCode(ch2-offset));
			newstr=newstr.concat(String.fromCharCode(ch1-offset));
		}
	}else{
		newstr=str;
	}
	newstr=trimString(newstr);
	if(isImage) return newstr;
	var cdns=newstr.substr(7,4).toLowerCase();
	var fpxs=newstr.substr(-3).toLowerCase();
	if(cdns=="flv2"&&(fpxs=="mp4"||fpxs=="f4v")){
		var fn=newstr.substring(newstr.lastIndexOf("/")+1,newstr.lastIndexOf("."));
		var pt=newstr.substring(0,newstr.lastIndexOf("/")+1);
		newstr=pt+fn+".ssm/"+fn+".m3u8";
	}else if(cdns=="flv."&&fpxs=="mp4"){
	}else{
		newstr="ERROR";
	}
	return newstr;
}

function getDecoderVideoForMP4(str,videoType,isImage){
	var newstr="";
	if(!str || str=="") return newstr;
	if(str.indexOf("http://")!=0){
		var offset=3,pos=0,index=0;
		while(pos<str.length){
			var ch1=str.charCodeAt(pos++);
			var ch2=str.charCodeAt(pos++);
			newstr=newstr.concat(String.fromCharCode(ch2-offset));
			newstr=newstr.concat(String.fromCharCode(ch1-offset));
		}
	}else{
		newstr=str;
	}
	newstr=trimString(newstr);
	if(isImage) return newstr;
	var cdns=newstr.substr(7,4).toLowerCase();
	var fpxs=newstr.substr(-3).toLowerCase();
	if(cdns=="flv2"&&(fpxs=="mp4"||fpxs=="f4v")){
		if(videoType == 3){
			newstr = joinForMP4(newstr);
		}else{
			var fn=newstr.substring(newstr.lastIndexOf("/")+1,newstr.lastIndexOf("."));
			var pt=newstr.substring(0,newstr.lastIndexOf("/")+1);
			newstr=pt+fn+".ssm/"+fn+".m3u8";
		}
	}else if(cdns=="flv."&&fpxs=="mp4"){
		if(videoType == 3){
			newstr = joinForMP4(newstr);
		}
	}else{
		if(videoType == 3){
			newstr = joinForMP4(newstr);
		}else{
			newstr="ERROR";
		}
	}
	return newstr;
}

function joinForMP4(newstr){
	var pos = newstr.indexOf(ptv_domain)+ptv_domain.length+1;
	newstr = newstr.substring(0,pos)+"hls-vod"+"/"+newstr.substring(pos)+".m3u8";
	return newstr;
}

function trimString(str){
	str=str.replace(/^(\s|\u00A0)+/,'');
	for(var i=str.length-1;i>=0;i--){
		if(/\S/.test(str.charAt(i))){
			str=str.substring(0,i+1);
			break;
		}
	}
	return str;
}
function showVideoCodeInPage(){
	var w__str;
	if(isHTTPError){
		w__str='<div style="width:'+safariObj.w+'px;height:'+safariObj.h+'px;background:#000;line-height:'+safariObj.h+'px;text-align:center;color:#fff;font-size:14px;clear:both;padding:0 20px;">此视频暂时不支持苹果设备，请在电脑上浏览观看！</div>';
	}else{
		w__str='<video width="'+safariObj.w+'" height="'+safariObj.h+'" controls="controls" '+(safariObj.ap?'autoplay="autoplay"':'')+' id="'+safariObj.name+'" src="'+safariObj.video+'"></video>';
	}
	try{
		document.getElementById(safariObj.toid).innerHTML=w__str;
	}catch(e){
		document.write(w__str);
	}
}
function parsePlayListXml(xlist){
	var plarr=new Array();
	plarr.push(null);
	for(var i=0;i<xlist.length;i++){
		plarr.push(getPlayListObject(xlist[i]));
	}
	setRelevantVideoToPage(plarr);
}
function getPlayListObject(xmlinfo){
	var reobj=new Object();
	reobj.link=getXMLNodeValue(xmlinfo,"staticpage");
	reobj.title=getXMLNodeValue(xmlinfo,"title");
	reobj.image=getDecoderVideo(getXMLNodeValue(xmlinfo,"image"),true);
	reobj.pt=getPLTimeByNumber(getXMLNodeValue(xmlinfo,"publishDate"));
	reobj.len=getLENTimeByNumber(getXMLNodeValue(xmlinfo,"length"));
	return reobj;
}
function getXMLNodeValue(node,key){
	try{
		return node.getElementsByTagName(key)[0].firstChild.nodeValue;
	}catch(e){
		return "";
	}
}
function getPLTimeByNumber(str){
	if(str=="") return "";
	var rd=new Date(Number(str));
	return rd.getFullYear()+"-"+
		   checkNumberString(rd.getMonth()+1)+"-"+
		   checkNumberString(rd.getDate())+" "+
		   checkNumberString(rd.getHours())+":"+
		   checkNumberString(rd.getMinutes())+":"+
		   checkNumberString(rd.getSeconds());
}
function getLENTimeByNumber(str){
	if(str=="") return "";
	var t=new Date(Number(str));
	var uh=t.getUTCHours();
	return (uh>0?(checkNumberString(t.getUTCHours())+":"):"")+
			checkNumberString(t.getUTCMinutes())+":"+
			checkNumberString(t.getUTCSeconds());
}
function checkNumberString(num){
	return num<10?("0"+num):num.toString();
}
function controlWidescreen(b){
	//alert(objname);
	document.getElementById(objname).style.width=b?"600px":"600px";
	//document.getElementById(objname).style.width=b?"800px":"600px";
	//getFlashDom(objname).style.width=b?"1002px":"650px";
}

function rmw_videoPlayOver(vid){
	//第2个参数和showPlayer里面的name一致即可
	if(_replay) {
		changePlayerVideo(vid,_objName);
	}
}