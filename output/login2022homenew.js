var $=jQuery;


/*登录JS*/
var Url_domainname=location.href;
var Url_domainname1 = '';
var shorturl = (Url_domainname.substr(0,Url_domainname.indexOf("/",7)));
var zhuceurl = "http://reg.cctv.com/regist.html?from="+shorturl+"&backurl="+encodeURI(Url_domainname);
$("#SI_Top_LoginLayer .log_option .register_lnk").attr("href",zhuceurl);

if(Url_domainname.indexOf("?")==-1){
Url_domainname1 = Url_domainname;
}else{
Url_domainname1 = Url_domainname.substr(0,Url_domainname.indexOf("?"));
}

var qq_url = "https://reg.cctv.com/openapi/v2/user/oauth/qq?timestamp="+timestamp+"&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl="+encodeURIComponent(encodeURIComponent(Url_domainname));
var weixin_url = "https://reg.cctv.com/openapi/v2/user/oauth/weChat?timestamp="+timestamp+"&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl="+encodeURIComponent(encodeURIComponent(Url_domainname));
var xl_url = " https://reg.cctv.com/openapi/v2/user/oauth/sina?timestamp="+timestamp+"&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl="+encodeURIComponent(encodeURIComponent(Url_domainname));
var zf_url="https://reg.cctv.com/openapi/v2/user/oauth/alipay?timestamp="+timestamp+"&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl="+encodeURIComponent(encodeURIComponent(Url_domainname));
$("#qq_url").attr("href",qq_url);
$("#weixin_url").attr("href",weixin_url);
$("#xl_url").attr("href",xl_url);
$("#zfb_url").attr("href",zf_url);
var sns_userid = "";
var userSeqId = "";
var sns_userid = getCookie1('userSeqId');
function getCookie_main() {
var userSeqId=getCookie1('userSeqId');
var flag = passport.isLoginedStatus();
if(flag){
var verifycode=getCookie1("verifycode")
var muurl='https://reg.cctv.com/openapi/v2/user/getNickNameAndFace';               		
  $.ajax({
        url : muurl,
        type : 'GET',
        dataType : 'json',
        data:{
        	"timestamp":timestamp,
        	"appid":"dgtGyfXwN9Gcr7ow",
        	"verifycode":verifycode,
        	"type":"ALL"
        },
        xhrFields: {
	        withCredentials: true
	    },
	    crossDomain: true,
        cache:true,
        success : function(data) {
        	if(data.code == 0){
		    islogin=true;
var namecookie = data.data.nickname;
if(namecookie.length>21){
namecookie = namecookie.substr(0,20)+"...";
}else{
namecookie = namecookie;
}

$(".user_icon").attr("title",data.data.nickname);
$(".user_icon").find("a").attr("href","//user.cctv.com/");
$(".user_icon").find("a").attr("target","_blank")
$("#loginForm").hide();
$(".user_icon").find(".btn_icon").css("background-image","url(//p1.img.cctvpic.com/photoAlbum/templet/common/DEPA1652643499621200/nav_icon_spirit.png)");
$(".user_icon").find(".btn_icon").css("background-position","-20px -20px")
$(".user_icon").addClass("cur");
}else{
	
}
    }
    })
}else{
//展示 “登录” 按钮

$('#SI_Top_LoginLayer .loginformlist table').eq(0).find('tr').eq(0).find('td').html('<input type="text" name="username" onfocus="if(this.value==this.defaultValue){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=this.defaultValue}" value="账号" id="username" class="styles" autocomplete="off" onkeypress="getOnkeyDown_login(event)"><input type="hidden" value="client_transaction" id="service" name="service"><input type="hidden" value="http://www.cntv.cn" id="from" name="from">')
document.getElementById("passwd_view").style.display = "block";
document.getElementById("password").value = "";
document.getElementById("password").style.display = "none";
}
}
getCookie_main();
document.getElementById("from").value = shorturl;
function loadjquery(m){
var d=document.createElement("script");
d.setAttribute("charset","utf-8");
d.type="text/javascript";
d.language="javascript";
d.src=m;
document.getElementsByTagName("body")[0].appendChild(d);
if(d.readyState){
d.onreadystatechange=function(){
if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){
delete d;
}
}
}else{
d.onload=function(){
delete d;
}
}
}
function handleResult (result){
var msg = result.msg;//提示信息
var errorCode = result.errorCode;//错误码，i18n展示用
if(passport.usernameError==result.type){//如果是用户名有问题
//在用户名的位置展示错误提示信息
//alert(msg);
if(errorCode == "-1"){	
	alert("格式不正确，请使用邮箱，手机号码或名字");
}else if(errorCode == "-2"){
	alert("请输入密码!");
}else if(errorCode == "-4"){
	alert("账户不存在!");
}else if(errorCode == "-11"){
	alert("不能用昵称登录，请使用邮箱、手机号或用户名");
}else if(errorCode == "-36"){
	alert("帐户信息进行审查中...");
}else if(errorCode == "-40"){
	alert("该帐号已被封，请联系客服!");
}else if(errorCode == "104"){
	alert("账号或密码错误，请重新输入!");
}else if(errorCode == "106"){
	alert("您尚未激活，请去reg.cctv.com激活!");
}else if(errorCode == "109"){
	alert("操作频繁，请24小时后重试。");
}else if(errorCode == "-21014"){
	alert("格式不正确，请使用邮箱，手机号码或名字");
}else if(errorCode == "-21003"){
	alert("请输入密码!");
}else if(errorCode == "-21023"){
	alert("账号未激活");
}else if(errorCode == "-21025"){
	alert("账号已被注销");
}else if(errorCode == "-21024"){
	alert("该帐号已被封，请联系客服!");
}else if(errorCode == "-21018"){
	alert("账号或密码错误，请重新输入!");
}
}else if(passport.passwordError==result.type){//如果是密码有问题
//在密码的位置展示错误提示信息
//alert(msg);
if(errorCode == "-1"){	
	alert("格式不正确，请使用邮箱，手机号码或名字");
}else if(errorCode == "-2"){
	alert("请输入密码!");
}else if(errorCode == "-4"){
	alert("账户不存在!");
}else if(errorCode == "-11"){
	alert("不能用昵称登录，请使用邮箱、手机号或用户名");
}else if(errorCode == "-36"){
	alert("帐户信息进行审查中...");
}else if(errorCode == "-40"){
	alert("该帐号已被封，请联系客服!");
}else if(errorCode == "104"){
	alert("账号或密码错误，请重新输入!");
}else if(errorCode == "106"){
	alert("您尚未激活，请去reg.cctv.com激活!");
}else if(errorCode == "109"){
	alert("操作频繁，请24小时后重试。");
}else if(errorCode == "-21014"){
	alert("格式不正确，请使用邮箱，手机号码或名字");
}else if(errorCode == "-21003"){
	alert("请输入密码!");
}else if(errorCode == "-21023"){
	alert("账号未激活");
}else if(errorCode == "-21025"){
	alert("账号已被注销");
}else if(errorCode == "-21024"){
	alert("该帐号已被封，请联系客服!");
}else if(errorCode == "-21018"){
	alert("账号或密码错误，请重新输入!");
}
} else if(passport.success==result.type){//登录成功
//处理用户id：result.usrid 或者 result.user_seq_id
if ($("#check_user").attr('checked') == 'checked') {
setCookie('cntv_main_usr', $("#username").attr("value"));
}else{
}
setTimeout(function(){
	var verifycode=getCookie1("verifycode")
	muurl='https://reg.cctv.com/openapi/v2/user/getNickNameAndFace';               		
	  $.ajax({
        url : muurl,
        type : 'GET',
        dataType : 'json',
        data:{
        	"timestamp":timestamp,
        	"appid":"dgtGyfXwN9Gcr7ow",
        	"verifycode":verifycode,
        	"type":"ALL"
        },
        xhrFields: {
	        withCredentials: true
	    },
	    crossDomain: true,
        cache:true,
        success : function(data) {
        	 callbackfun(data)
        }   
    })
},100)
}
}
function callbackfun(data){
if(data.code == 0){
var nickname = data.data.nickname;
if(nickname.length>21){
nickname = nickname.substr(0,20)+"...";
}else{
nickname = nickname;
}
$(".user_icon").attr("title",data.data.nickname);
$(".user_icon").find("a").attr("href","http://i.cctv.com");
$(".user_icon").find("a").attr("target","_blank")
$("#loginForm").hide();
$(".user_icon").find(".btn_icon").css("background-image","url(//p1.img.cctvpic.com/photoAlbum/templet/common/DEPA1652643499621200/nav_icon_spirit.png)");
$(".user_icon").find(".btn_icon").css("background-position","-20px -20px")

}else{
alert(data.message);
}
}
function getOnkeyDown_login(e){
var ev = e;
ev = ev || event;
if(ev.keyCode == 13){
loginDemo();
}
}
function loginDemo(){
document.getElementById("username").value = document.getElementById("username").value;
document.getElementById("password").value = document.getElementById("password").value;
var re = /[^\u4e00-\u9fa5]/;
var flg = re.test(document.getElementById("username").value);
if (document.getElementById("username").value == "" || document.getElementById("username").value == "账号") {
document.getElementById("username").focus();
return false
} else if (document.getElementById("password").value == "") {
document.getElementById("password").style.display = "block";
document.getElementById("password").focus();
return false
} else if (flg == false) {
alert("帐号或密码错误");
document.getElementById("username").value = "";
document.getElementById("username").focus();
return false;
}
var form = document.getElementById("loginForm");
if ($("#check_user").attr('checked') == 'checked') {
$("#check_user").attr("value", "checktrue");
}else{
$("#check_user").attr("value","");
}
passport.checkJsonpForm(form, handleResult);
}

function show_pwd() {
	document.getElementById("passwd_view").style.display = "none";
    document.getElementById("password").style.display = "block";
    setTimeout(function(){
        $("#SI_Top_LoginLayer").css("display","block")
        document.getElementById("password").focus()
    },1)
}
function checkTime(i) {
if (i < 10) {
i = "0" + i
}
return i
}
var array = [{
"id": "1",
"img_title": "电脑",
"className": "client01"
},
{
"id": "2",
"img_title": "手机",
"className": "client02"
},
{
"id": "3",
"img_title": "平板",
"className": "client03"
}];
function callback(json) {
if (json.code === 0) {
html = [];
for (var i in json.list) {
var time = json.list[i].position;
var img_clienttype = json.list[i].clienttype;
var className = "";
var width = 0;
var img_title = "";
var title = "";
if (json.list[i].title.length > 13) {
title = json.list[i].title.substring(0, 13) + "..."
} else {
title = json.list[i].title
}
if (img_clienttype == 1) {
className = array[0].className;
img_title = array[0].img_title
} else if (img_clienttype == 2) {
className = array[1].className;
img_title = array[1].img_title
} else if (img_clienttype == 3) {
className = array[2].className;
img_title = array[2].img_title
} else {
className = array[0].className;
img_title = array[0].img_title
}
if (time == -1) {
fina = "已看完"
} else {
var hour = checkTime(parseInt(time / 60 / 60));
var minutes = checkTime(parseInt(time / 60));
var seconds = checkTime(time % 60);
if (hour == 0 && minutes == 0 & seconds == 0) {
fina = "已看到&nbsp;00：00：00"
} else {
fina = "已看到&nbsp;" + hour + "：" + minutes + "：" + seconds
}
}
if(json.list[i].pageurl.length == 0){
html.push('<dd><span class="client ' + className + '"></span><span class="info"><em><a id="'+json.list[i].vid+'" class="url_null" target="_blank" href="' + json.list[i].pageurl + '" title="' + json.list[i].title + '">' + title + '</a></em><i>' + fina + '</i></span></dd>');
}else{
html.push('<dd><span class="client ' + className + '"></span><span class="info"><em><a target="_blank" href="' + json.list[i].pageurl + '" title="' + json.list[i].title + '">' + title + '</a></em><i>' + fina + '</i></span></dd>');
}
}
document.getElementById('gkjl').innerHTML = html.join("");
var page_num = $("#track .url_null").length;
for(var j=0;j<page_num;j++){
var page_vid = $("#track .url_null").eq(j).attr("id");

var url = '//api.cntv.cn/video/videoinfoByGuid?serviceId=cbox&guid='+page_vid+'&cb=?&t=jsonp';
$.ajax({
    url : url,
    type : 'get',
    dataType : 'jsonp',
    jsonp:'callback',
    jsonpCallback:"newpage",
    cache:true,
    success : function(data) {
		var page_url = data.url;
		var new_vid = data.vid;
		$("#"+new_vid).attr("href",page_url);
	}
   })
}
} else if (json.code === -201) {
document.getElementById('gkjl').innerHTML = '<dd><span class="client client01" style="display:none;"></span><span class="info"><em><a href="javascript:;" title="">没有任何视频观看记录</a></em><i style="display:none;"></i></span></dd>'
}
tc()
}
$(".track").hover(function() {
$(".tracklist").css({
"display": "block"
});
var o = document.createElement('script');
o.src = "//history.apps.cntv.cn/interface/jsonp/service.php?client=3&method=video.getUserVideoRecordList&cb=callback&data=" + encodeURIComponent('{"uid":' + sns_userid + '}') + "&" + Math.random();
document.getElementsByTagName("HEAD")[0].appendChild(o)
},
function() {
$(".tracklist").css({
"display": "none"
});
delete o
});
function tc() {
$(".tracklist .box .item_list dl dd").hover(function() {
$(this).addClass("active")
},
function() {
$(this).removeClass("active")
})
}
function getCookie1(name) {
var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
if (arr = document.cookie.match(reg)) return unescape(arr[2]);
else return null
}
function setCookie(name, value) {
var Days = 14;
var exp = new Date();
exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}
function delCookie(name) {
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval = getCookie1(name);
if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}
function get_main_usr() {
if (getCookie1('cntv_main_usr') == "" || getCookie1('cntv_main_usr') == null) {} else {
$("#username").attr("value", getCookie1('cntv_main_usr'));
$("#username").attr("onblur", "").attr("onfocus", "");
$("#check_user").attr('checked', true);
}
}
$(function() {
get_main_usr()
});

