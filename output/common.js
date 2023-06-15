//搜索提交
function PSearch() { var vSearchVal = $.trim($("#txtSearch").val()); if (vSearchVal == "") { alert("请输入关键词!"); return false; } if (vSearchVal.indexOf('<') > -1 || vSearchVal.indexOf('>') > -1) { return false; } location.href = "http://" + document.domain + "/View_Aspx/PSearch.aspx?q=" + escape(vSearchVal); }
$(function (){$("#txtSearch").keydown(function (e){var curKey=e.which; if (curKey==13){PSearch();}}); $('#A_1,#A_2,#A_3,#A_4,#A_5,#A_6,#A_7').click(function (){$.ajax({type: 'POST', url: '/OutOpen/AddEmailRecord', data: {fromEmail: $(this).text(), pathPage: document.URL, ipAddress: vIpAddress, siteLangId: vSiteLangId }, dataType: 'json', error: function (){}, success: function (msg){}, async: false });});});

//搜索提交1
function NSearch(){var vSearchVal=$.trim($("#txtSearch").val()); if (vSearchVal==""){return false;} location.rel="nofollow" href="http://"+ document.domain +"/View_Aspx/NSearch.aspx?q="+ escape(vSearchVal);}

//邮件订阅
function submitEmail(){var footEmail=$("#FootEmail").val();if (footEmail==""){alert("请输入一个电子邮件！"); $("#FootEmail").focus();
return false;}var mail_filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!mail_filter.test(footEmail) && $.trim(footEmail) !== ""){alert("请输入一个有效的电子邮件格式！");$("#FootEmail").focus();return false;}
$.ajax({type: "POST", url: "/OutOpen/SubmitEmail", data: {siteLangId: vSiteLangId, email: $("#FootEmail").val(), name: $("#FootEM_Name").val(), ipAddress: vIpAddress, pageUrl: document.URL }, dataType: "json", error: function (XMLHttpRequest, textStatus, errorThrown){alert('发送失败，请重新提交！'); $("#FootEmail").val(""); return false;}, success: function (msg){alert('提交成功，我们会尽快与您联系！');}, async: false });}

//修复乱码
function FixJqText(str){var tempstr=str.replace(/\+/g, "＋"); return tempstr;}

//提交留言
function submitInquiry(){
var vContent=$.trim($("#SubmitContent_I").val());
if (vContent=="" || vContent=="Content"){
alert("请输入内容！");
$("#SubmitContent_I").val("").focus();
return false;}
var vSubName="";
var vSubCompany="";
var vTitle="";
if ($.trim($("#SubmitName_I").val()) != ""){
vSubName=escape(FixJqText($("#SubmitName_I").val()));}
if ($.trim($("#SubmitCompanyName_I").val()) != ""){
vSubCompany=escape(FixJqText($("#SubmitCompanyName_I").val()));}
if ($.trim($("#SubmitTitle_I").val()) != ""){
vTitle=escape(FixJqText($("#SubmitTitle_I").val()));}
$.ajax({type: "POST",url: "/OutOpen/AddInquiry",
data: {name: vSubName,company: vSubCompany,
siteLangId: vSiteLangId,ipAddress: vIpAddress,
proId: 0,phone: $("#SubmitPhone_I").val(),
email: $("#SubmitEmail_I").val(),title: vTitle,
content: escape(FixJqText($("#SubmitContent_I").val())),
pageUrl: document.URL
},dataType: "json",error: function (XMLHttpRequest, textStatus, errorThrown){
alert('提交失败，请稍后重试！');
},success: function (data){
$("#ImgSend_I").removeAttr("disabled");
alert('成功提交，我们会尽快与您联系！');
$("#SubmitContent_I").val("");
},async: false});
return false;}

//显示隐藏
function ShowHid(pLeftId,pRightId){var vDisplay=$("#"+ pLeftId +"").css("display");if (vDisplay=="none"){$("#"+ pLeftId +"").show();$("#"+ pRightId +"").removeClass("bodyRight100").addClass("bodyRight");} else {$("#"+ pLeftId +"").hide();$("#"+ pRightId +"").removeClass("bodyRight").addClass("bodyRight100");}}

//手机提交
function IsMobile(){var userAgentInfo=navigator.userAgent; var Agents=["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]; var vIs=false; for (var i=0; i < Agents.length; i++){if (userAgentInfo.indexOf(Agents[i]) > 0){vIs=true; break;}} return vIs;}

//显示子菜单

function displaySubMenu(li) {
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "block"
}

function hideSubMenu(li) {
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "none"
};

//手机跳转
var vIsMobile=IsMobile();
if (vIsMobile){var homeUrl=document.URL;
if (homeUrl.indexOf("http://www.") > -1){
location.href=document.URL.replace("http://www.", "http://m.")
}else if(homeUrl.indexOf("https://www.") > -1){
location.href=document.URL.replace("https://www.", "http://m.")
}else{if (homeUrl.indexOf("http://m.")==-1){
location.href=document.URL.replace("http://", "http://m.")}}}