//获取浏览器标识
var ua = navigator.userAgent.toLowerCase();
var testUa = function(regexp){
    return regexp.test(ua)
}

var map = [{reg: /micromessenger/g, value: 'wechat'},
    {reg: /(chrome.+?edg)/g, value: 'edge'},
    {reg: /qqbrowser/g, value: 'qq'},
    {reg: /ucbrowser/g, value: 'uc'},
    {reg: /qihu 360se/g, value: '360'},
    {reg: /2345explorer/g, value: '2345'},
    {reg: /metasr/g, value: 'sougou'},
    {reg: /lbbrowser/g, value: 'liebao'},
    {reg: /maxthon/g, value: 'maxthon'},
    {reg: /firefox/g, value: 'firefox'},
    {reg: /chrome/g, value: 'chrome'},
    {reg: /safari/g, value: 'safari'}]

$(document).ready(function() {
    del_cookies('filetype');
    del_cookies('nodeid');
    del_cookies('newsid');
    //检查cookies是否存在
    Page_code = $.cookie('identity');
    if(Page_code == null || Page_code == ""){
        var oDate = new Date();
        var iM = oDate.getTime();   //得到毫秒数
        var rand_num = random_number();
        var user = md5(iM+rand_num);
        recondingCookie('identity',user)
    }
    //读取meta
    var filetype = $("meta[name='filetype']").attr("content"); //新闻类型
    var nodeid   = $("meta[name='nodeid']").attr("content"); //节点id
    var newsid   = $("meta[name='newsid']").attr("content"); //新闻id
    var domain   = $("meta[name='domain']").attr("content"); //域名
    recondingCookie('filetype',filetype);
    recondingCookie('nodeid',nodeid);
    recondingCookie('newsid',newsid);
    recondingCookie('browsertype',getBrowserType());
    recondingCookie('domain',domain);

    //加载图片
    add_imgs();
});

function random_number() {
    //x上限，y下限
    var x = 10000;
    var y = 0;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    return rand;
}

function recondingCookie(cookies_key,data) {
/*    var t = new Date();
    t.setDate(t.getDate()+1);
    t.setHours(0);
    t.setMinutes(0);
    t.setSeconds(0);*/
    $.cookie(cookies_key,data);
}

function del_cookies(cookies_key)
{
    $.cookie(cookies_key,'',{ expires:-1});
}

function add_imgs()
{
    $('#dot').append('<img src="./dotsrc/dot.png">');
    return true;
}

function getBrowserType(){
    var browserType = 'other';
    for (var item of map) {
        if (testUa(item['reg'])) {
            browserType = item['value']
            return browserType;
        }
    }

}