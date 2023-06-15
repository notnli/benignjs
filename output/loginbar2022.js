/*=====================定义URL变量=====================*/
var indexUrl = "http://www.eastday.com";  //东方网首页链接
var phoneUrl = "http://wap.eastday.com";  //手机版链接
var newsUrl = "http://ej.eastday.com/images/zspt/index.html";  //新闻客户端
//var emailUrl = "http://mail.eastday.com/";  //东方网邮箱链接
var weiboUrl = "http://t.eastday.com";  //东方网微博链接
var bbsUrl = "http://bbs.eastday.com/";    //东方网论坛链接
var syUrl = "http://sheying.eastday.com"; //东方摄影链接
var regUrl = "http://login.eastday.com/EastdayUserFront/eu/user_registerPage";    //用户注册链接
var findPwdUrl = "http://login.eastday.com/EastdayUserFront/eu/user_findPwdPage"; //忘记密码链接
var questpath = "http://login.eastday.com/loginbar/"; //请求页面
var eastUrl = "http://shurufa.eastday.com";  //东方输入法链接
var loginResourceUrl="http://news.eastday.com/images/login/";
var domainUrl = "https://apin.eastday.com/apiplus/"; 
var isSendMessage = false; // 是否已经发送验证码
var isAgree = false; // 是否同意用户协议 

var rssurl = "http://rss.eastday.com/";
var big5url = "http://big5.eastday.com:82/gate/big5/www.eastday.com/";
var englishurl = "http://english.eastday.com/";
var jpurl = "http://jp.eastday.com/node2/home/index.html"; 

var cookiepath = "/";
var cookiedomain = "eastday.com";
/*=====================================================*/
document.write("<link href='https://www.eastday.com/images/index2013/loginTop201402.css' rel='stylesheet' type='text/css' />");
document.write("<link href='https://j.eastday.com/EastUI/eastdayindex/styles/loginbar2022.css' rel='stylesheet' type='text/css' />");

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
    if (init == true) with (navigator) {
        if ((appName == "Netscape") && (parseInt(appVersion) == 4)) {
            document.MM_pgW = innerWidth; document.MM_pgH = innerHeight; onresize = MM_reloadPage;
        }
    }
    else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH) location.reload();
}
MM_reloadPage(true);

var Cookies = {};
Cookies.set = function (name, value) {
    var argv = arguments;
    var argc = arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : '/';
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};
Cookies.get = function (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while (i < clen) {
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
};
Cookies.getCookieVal = function (offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
};
Cookies.clear = function (name) {
    if (Cookies.get(name)) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
        Cookies.set(name, "", expdate, cookiepath, cookiedomain);
    }
};
Cookies.esatdayset = function (name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + (86400 * 1000 * 15));
    Cookies.set("EastUser", name, expdate, cookiepath, cookiedomain);
};


var html = "";
//有无障碍按钮
// var htmlNoLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a><a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='#' id='btn_login' class='grey12'>登录</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a><a href='#'><span onclick=window.open('http://jp.eastday.com') style='cursor:pointer;' class='grey12'>日本語</span></a></p><p class='fr'><img src='http://www.eastday.com/images/index2013/2014topbanner.gif' alt='上海城市精神海纳百川追求卓越开明睿智大气谦和'><div class='wzawrap'><p setedaria='true'><a href='javascript:;' onclick='aria.start()' clickhide='false'><img src='images/2022wza1.png' title='点击打开无障碍辅助阅读工具条' id='wzz' /></a></p><p setedaria='true'><a onclick='aria.oldFixedStart()' clickhide='false'><img src='images/2022wza3.png' title='点击打开关怀版' id='zzb' /></a></p></div></p></div></div><div class='login' id='login_panel' style='display:none;'><div class='loginwrap'><div><input placeholder='请输入手机号码' maxlength='11' autocomplete='off' id='phonenumber'></div><div><div><input placeholder='验证码' id='kaptchaCode'></div><div id='piccode'><img src='' /></div><div id='changecode'>换一张</div></div><div><div><input placeholder='短信验证码' id='verifyCode'></div><div class='getCodeBtn' id='getCodeBtn' onclick='getCode()'>获取验证码</div></div><div><div class='radioIcon' id='radioIcon' onclick='agreeRule()' ></div><div>已阅读并同意<a href='https://j.eastday.com/EastUI/eastplus/agreementpc.html' target='_blank'>《用户协议》</a>、<a href='https://j.eastday.com/EastUI/eastplus/privacypc.html' target='_blank'>《隐私协议》</a></div></div><div><div class='btn' id='login'>登录</div></div><div id='errorTxt'></div><div id='close' class='login_close'><img src='images/close.png' /></div></div></div>");
// var htmlLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a>  <a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='" + big5url + "' target='_blank' class='grey12'>BIG5</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a><a href='#'><span onclick=window.open('http://jp.eastday.com') style='cursor:pointer;' class='grey12'>日本語</span></a></p><p class='grey12 fr'><span>欢迎您 </span><span id='username'></span><span><a href='#' class='grey12' id='logoff'> 安全退出</a></span><div class='wzawrap'><p setedaria='true'><a href='javascript:;' onclick='aria.start()' clickhide='false'><img src='images/2022wza1.png' title='点击打开无障碍辅助阅读工具条' id='wzz' /></a></p><p setedaria='true'><a onclick='aria.oldFixedStart()' clickhide='false'><img src='images/2022wza3.png' title='点击打开关怀版' id='zzb' /></a></p></div></p></div></div>");
//有无障碍按钮无日本语
var htmlNoLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a><a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='#' id='btn_login' class='grey12'>登录</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a></p><p class='fr'><img src='http://www.eastday.com/images/index2013/2014topbanner.gif' alt='上海城市精神海纳百川追求卓越开明睿智大气谦和'><div class='wzawrap'><p setedaria='true'><a href='javascript:;' onclick='aria.start()' clickhide='false'><img src='images/2022wza1.png' title='点击打开无障碍辅助阅读工具条' id='wzz' /></a></p><p setedaria='true'><a onclick='aria.oldFixedStart()' clickhide='false'><img src='images/2022wza3.png' title='点击打开关怀版' id='zzb' /></a></p></div></p></div></div><div class='login' id='login_panel' style='display:none;'><div class='loginwrap'><div><input placeholder='请输入手机号码' maxlength='11' autocomplete='off' id='phonenumber'></div><div><div><input placeholder='验证码' id='kaptchaCode'></div><div id='piccode'><img src='' /></div><div id='changecode'>换一张</div></div><div><div><input placeholder='短信验证码' id='verifyCode'></div><div class='getCodeBtn' id='getCodeBtn' onclick='getCode()'>获取验证码</div></div><div><div class='radioIcon' id='radioIcon' onclick='agreeRule()' ></div><div>已阅读并同意<a href='https://j.eastday.com/EastUI/eastplus/agreementpc.html' target='_blank'>《用户协议》</a>、<a href='https://j.eastday.com/EastUI/eastplus/privacypc.html' target='_blank'>《隐私协议》</a></div></div><div><div class='btn' id='login'>登录</div></div><div id='errorTxt'></div><div id='close' class='login_close'><img src='images/close.png' /></div></div></div>");
var htmlLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a>  <a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='" + big5url + "' target='_blank' class='grey12'>BIG5</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a></p><p class='grey12 fr'><span>欢迎您 </span><span id='username'></span><span><a href='#' class='grey12' id='logoff'> 安全退出</a></span><div class='wzawrap'><p setedaria='true'><a href='javascript:;' onclick='aria.start()' clickhide='false'><img src='images/2022wza1.png' title='点击打开无障碍辅助阅读工具条' id='wzz' /></a></p><p setedaria='true'><a onclick='aria.oldFixedStart()' clickhide='false'><img src='images/2022wza3.png' title='点击打开关怀版' id='zzb' /></a></p></div></p></div></div>");

//无无障碍按钮
// var htmlNoLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a><a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='#' id='btn_login' class='grey12'>登录</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a><a href='#'><span onclick=window.open('http://jp.eastday.com') style='cursor:pointer;' class='grey12'>日本語</span></a></p><p class='fr'><img src='http://www.eastday.com/images/index2013/2014topbanner.gif' alt='上海城市精神海纳百川追求卓越开明睿智大气谦和'><div class='wzawrap'><p setedaria='true'></p><p setedaria='true'></p></div></p></div></div><div class='login' id='login_panel' style='display:none;'><div class='loginwrap'><div><input placeholder='请输入手机号码' maxlength='11' autocomplete='off' id='phonenumber'></div><div><div><input placeholder='验证码' id='kaptchaCode'></div><div id='piccode'><img src='' /></div><div id='changecode'>换一张</div></div><div><div><input placeholder='短信验证码' id='verifyCode'></div><div class='getCodeBtn' id='getCodeBtn' onclick='getCode()'>获取验证码</div></div><div><div class='radioIcon' id='radioIcon' onclick='agreeRule()' ></div><div>已阅读并同意<a href='https://j.eastday.com/EastUI/eastplus/agreementpc.html' target='_blank'>《用户协议》</a>、<a href='https://j.eastday.com/EastUI/eastplus/privacypc.html' target='_blank'>《隐私协议》</a></div></div><div><div class='btn' id='login'>登录</div></div><div id='errorTxt'></div><div id='close' class='login_close'><img src='images/close.png' /></div></div></div>");
// var htmlLogin = $("<div id='headerindex'><div class='blank12'></div><div class='top2 lh22'><p class='fl'><a href='" + indexUrl + "' target='_blank' class='grey12'>东方网首页</a>  <a href='" + phoneUrl + "' target='_blank' class='grey12'>手机版</a><a href='" + newsUrl + "' target='_blank' class='grey12'>客户端</a><a href='" + eastUrl + "' target='_blank' class='grey12'>东方输入法</a><a href='" + big5url + "' target='_blank' class='grey12'>BIG5</a><a href='" + englishurl + "' target='_blank' class='grey12'>ENGLISH</a><a href='#'><span onclick=window.open('http://jp.eastday.com') style='cursor:pointer;' class='grey12'>日本語</span></a></p><p class='grey12 fr'><span>欢迎您 </span><span id='username'></span><span><a href='#' class='grey12' id='logoff'> 安全退出</a></span><div class='wzawrap'><p setedaria='true'></p><p setedaria='true'></p></div></p></div></div>");
var uuid = "";
// 获取appId 
function getAppId() { 
    return "190503"; 
} 
//获取短信验证码
function getCode() {
    if (isSendMessage) return; 
    if ($("#phonenumber").val() == "") { 
        $("#errorTxt").html("手机号码不能为空！"); 
        $("#errorTxt").css({"padding-top":"10px"});
    }
    else if ($("#kaptchaCode").val() == ""){
        $("#errorTxt").html("图形验证码不能为空！"); 
        $("#errorTxt").css({"padding-top":"10px"});
    }
     else { 
        isSendMessage = true; 
        if ($("#getCodeBtn").hasClass("count")) { 
        } else {
            $("#getCodeBtn").addClass("count"); 
            let currentTime = 60; 
            $("#getCodeBtn").html(currentTime+"秒"); 
            let countTime = setInterval(() => { 
                $("#getCodeBtn").html((--currentTime)+"秒"); 
                if (currentTime == 0) {
                    $("#getCodeBtn").removeClass("count"); 
                    $("#getCodeBtn").html("获取验证码"); 
                    clearInterval(countTime); 
                    isSendMessage = false; 
                } 
            }, 1000); 
        } 
        $.ajax({
            type: "GET", 
            headers: {
                appId: getAppId(), 
                ver: "1.0.1", 
                timestamp: Date.parse(new Date()) 
            }, 
            url: domainUrl + "user/web/getCodeByKaptcha?type=1&mobile=" + $("#phonenumber").val()+"&kaptcha=" + $("#kaptchaCode").val()+"&uuid="+uuid, 
            //xhrFields: {
            //    withCredentials: true                
            //},
            crossDomain: true,
            success: function(data) { 
                if (data.success) { 
                    fromToken = data.data.fromToken; 
                    window.localStorage.setItem("eastLoginFromToken", fromToken); 
                    $("#errorTxt").html(""); 
                } else { 
                    $("#errorTxt").css({"padding-top":"10px"});
                    $("#errorTxt").html(data.message); 
                } 
            }, 
            error: function(data) { 
                console.log("获取验证码失败!"); 
            } 
        }); 
    } 
} 
// 协议同意
function agreeRule() { 
    if ($("#radioIcon").hasClass("selected")) { 
        isAgree = false; 
        $("#radioIcon").removeClass("selected"); 
    } else { 
        isAgree = true; 
        $("#radioIcon").addClass("selected"); 
    } 
} 

$(function () {
    $.fn.extend({
        "loginBar": function () {
            if (Cookies.get("EastUser") != null) {
                html = htmlLogin;                
                html.find("#username").text(Cookies.get("EastUser"));
            }
            else {
                html = htmlNoLogin;
            }
            $(html).prependTo("body #container");
            //登录单击事件显示登录框
            $("#btn_login").click(function () {
                $("#login_panel").show();
                html.find("#errorTxt").text("");
                changePiccode();
            });
            //登录关闭按钮单击事件
            $(".login_close").click(function () {
                $("#login_panel").hide();
                html.find("#errorTxt").text("");
                changePiccode();
            });
            //换验证码图
            $("#changecode").click(function(){
                changePiccode();
            });
            //更换验证码图
            var changePiccode = function(){
                console.log("change");
				$("#piccode").html("");
				//
				$.ajax({
                        type: "GET", 
                        url: domainUrl + "user/web/getkaptchaBase64", 
                        dataType: "json", 
                        contentType: "application/json", 
                        crossDomain: true, 
                        success: function(data) { 
                            if (data.success) { 
								uuid = data.data.uuid;
								$("#piccode").html("<img src='data:image/jpeg;base64,"+data.data.base64Image+"'/>");	
                            }
                        }, 
                        error: function(data) { 
                            console.log("图形验证码失败！");                              
                        } 
				}); 
				//
                //$("#piccode").html("<img src='https://apin.eastday.com/apiplus/user/web/getkaptcha?"+Math.random()+"'/>");
            }
            //登录按钮单击事件，调用后台验证登录方法
            $("#login").click(function () {
                login();
            });
            //登录
            var login = function(){
                if ($("#phonenumber").val() == "") { 
                    $("#errorTxt").html("手机号码不能为空！"); 
                } else if ($("#verifyCode").val() == "") {
                    $("#errorTxt").html("短信验证码不能为空！"); 
                } else if (isAgree == false) {
                    $("#errorTxt").html("您必须先阅读并同意《用户协议》和《隐私协议》，方可登录！"); 
                } else { 
                    let params = { 
                        mobile: $("#phonenumber").val(), 
                        captcha: $("#verifyCode").val(), 
                        formToken: fromToken ? fromToken : window.localStorage.getItem("eastLoginFromToken"), 
                    }; 
                    $("#errorTxt").html(""); 
                    $.ajax({
                        type: "POST", 
                        headers: {
                            appId: getAppId(), 
                            ver: "1.0.1", 
                            timestamp: Date.parse(new Date()), 
                            deviceId: "123" 
                        }, 
                        url: domainUrl + "user/web/login", 
                        dataType: "json", 
                        contentType: "application/json", 
                        crossDomain: true, 
                        data: JSON.stringify(params), 
                        success: function(data) { 
                            if (data.success) { 
                                window.localStorage.setItem("askQubodyestionUserToken", data.data.token); 
                                $("#errorTxt").html(""); 
                                console.log(data.data.nickName);
                                Cookies.esatdayset(data.data.nickName);
                                if ($("#login_panel")) {
                                    $("#login_panel").hide();
                                }
                                if ($("#headerindex")) {
                                    $("#headerindex").remove();
                                }
                                    html = htmlLogin;
                                    $("body #container").loginBar();
                                    changePiccode();
                            } else { 
                                $("#errorTxt").html(data.message); 
                            } 
                        }, 
                        error: function(data) { 
                            console.log("登录失败！");                              
                        } 
                    }); 
                } 
            }

            //登出按钮单击事件，调用后台验证方法
            $("#logoff").click(function () {
                if ($("#headerindex")) {
                    $("#headerindex").remove();
                }
                html = htmlNoLogin;
                Cookies.clear("EastUser");
                $("body #container").loginBar();
                $("#login_panel").hide();
                $("#phonenumber").val("");
                $("#verifyCode").val("");
                $("#kaptchaCode").val(""); 
                isAgree=false;
                $("#radioIcon").removeClass("selected");
                $("#errorTxt").html("");
            });
        }
    });

    loginbar = $("body #container").loginBar();
	
});
