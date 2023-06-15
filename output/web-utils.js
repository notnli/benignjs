锘�/**
 * ���濮���� Cookie
 */
function initCookie(){
	try{
		if(getCounterCookie('tmg_utma') == null){		// 濡���� UV 涓�瀛����
			addCookie('tmg_utma',getUID(),2*12*30*24*60);
		}
		if(getCounterCookie('tmg_utmb') != null){		// 30���������娲诲��
			setCookieTime('tmg_utmb',30);
		}else{				  				// 30������澶辨�����
			addCookie('tmg_utmb',getUID(),30); // ��存�� UID
		}
	}catch(error){}
}

/**
 *  ������璇锋��
 */
var isSended = '-1'; // ��ゆ��������宸叉�归��
function sentParamter(AID,TYPE,parm1,parm2,parm3){
	if(!AID) AID = -1;
	if(!TYPE) TYPE = -1;
	if(!parm1) parm1 = -1;
	if(!parm2) parm2 = -1;
	if(!parm3) parm3 = -1;
	var editorid = editorid || "";
	if(isSended == '-1'){
		document.write("<img src='//counter.yesky.com/counter.shtml?UV="
			+ getCounterCookie("tmg_utma")+"&amp;VS="
			+ getCounterCookie("tmg_utmb")+"&amp;refer="
			+ encodeURIComponent(document.referrer)+"&amp;rand="
			+ new Date().getTime()+"&amp;cur="
			+ encodeURIComponent(document.URL)+"&amp;language="
			+ getSystemLanguage()+"&amp;system="
			+ getSystem()+"&amp;browser="
			+ getBrowser()+"&amp;flashVesion="
			+ getFlashVesion()+"&amp;resolution="
			+ getResolution()+"&amp;colorDepath="
			+ getColorDepth()+"&amp;AID="
			+ AID+"&amp;editorid="
			+ editorid + "&amp;TYPE="
			+ TYPE+"&amp;PARM1="
			+ parm1+"&amp;PARM2="
			+ parm2+"&amp;PARM3="
			+ parm3+"&amp;isAdd="
			+ getIsAdd()
			+ "' border='0' alt='' width='0' height='0'>");
	}
	isSended = '1';
}

// ��ゆ��������������
function getIsAdd(){
	if (getCounterCookie('tmg_counter') == 'tmg20100223' || document.referrer.indexOf('base_new') != -1) {
		return 1;
	}
	else if (getCounterCookie('tmg_counter') == 'tmg20100226') {
			return 2;
	}else {
			return -1;
	}
}

/**
 * 寰���板��涓����璇�绗� UserID
 */
function getUID(){
	var chars = Math.random().toString().split('.')[1].split('');
	var randomId = '';
	while(chars.length != 19){
		if(chars.length < 19)
			chars[chars.length] = Math.round(Math.random());
		else if(chars.length > 19)
			chars[chars.length] = null;
	}
	for(var i = 0 ; i < 19 ; i++){
		randomId += chars[i];
	}
	var dateTemp = (new Date()).valueOf(); // ��峰�� 13 浣���堕�存��
	return dateTemp + randomId;
}

/**
 * 娣诲�����淇���� Cookie 
 * @param {Object} key
 * @param {Object} value
 * @param {Object} time	 ������
 */
function addCookie(key,value,time){
    var exp = new Date();    // new Date("December 31, 9998");
    exp.setTime(exp.getTime() + time*60*1000);   // exp.getTime() 寰���扮�������堕�存��
	// expires ���瀹���������堕�达����兼��濞�娌绘�������堕�� (GMT)���document.cookie = 'key=xx'锛�娌℃��娣诲��锛�濡�娌℃����惧�拌�� key ��存�ュ氨淇���瑰�跺��
    document.cookie = key + "="+ escape (value) + ";expires=" + exp.toUTCString() + ";path=/"; // "05 Jan 1996 00:00:00 GMT"���
}

/**
 * ������ Cookie
 * @param {Object} key
 */
function deleteCookie(key){
	var exp  = new Date();
    exp.setTime(exp.getTime());
    document.cookie = key + "="+''+ ";expires=" + exp.toUTCString();
}

/**
 * 寰���� Cookie
 * @param {Object} key
 */
function getCounterCookie(key){
	var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)")); // ��存�ュ����� Cookie
	if(arr != null) 
		return unescape(arr[2]); 
	return null;
}

/**
 * 璁剧疆 Cookie ��������堕��
 * @param {Object} time ������
 */
function setCookieTime(key,time){
	var exp  = new Date();
    exp.setTime(exp.getTime() + time*60*1000);
    document.cookie = key + "="+ escape (getCounterCookie(key)) + ";expires=" + exp.toUTCString() + ";path=/";
}


/**
 * ��峰��褰�������娴�瑙���ㄧ�����绉�
 */
function getBrowser(){
  	var sAgent = navigator.userAgent.toLowerCase();
	var browserName = '';
	if(sAgent.indexOf("msie")!=-1){
		browserName = 'IE';
		try{
			var sAgent = navigator.userAgent.toLowerCase();
			var a = sAgent.indexOf('msie');
			for(var i = 4 ; i < 8 ; i++){
				browserName += sAgent.charAt(a+i);
			}
		}catch(e){
			browserName = 'IE';
		}
	}else if(sAgent.indexOf("firefox")!=-1){
		browserName = 'firefox';
	}else if(sAgent.indexOf("chrome")!=-1){
		browserName = 'chrome';
	}else if(sAgent.indexOf("safari")!=-1){
		browserName = 'safari';
	}else if(sAgent.indexOf("opera")!=-1){
		browserName = 'opera';
	}else if(sAgent.indexOf("netscape")!=-1){
		browserName = 'netscape';
	}else if(sAgent.indexOf("maxthon")!=-1){
		browserName = 'maxthon';
	}else{
		browserName = 'other';
	}
	return browserName;
}

/**
 * 寰���扮郴缁�榛�璁よ��瑷�
 */
function getSystemLanguage(){
	var language = '';
	if(getBrowser().indexOf('IE') != '-1'){
		language = navigator.browserLanguage;
	}else if(getBrowser() == "firefox" || getBrowser() == "chrome"){
		var language = '';
		var sAgent = navigator.userAgent.toLowerCase();
		var sign = '';
		if(sAgent.indexOf('rv') != -1)
		sign = '; r';
		else 
		sign = ')';
		var a = sAgent.indexOf('nt');
		var b = sAgent.indexOf(sign);
		var sum = '';
		
		for(var i = 0;i < b - a + 2 && b - a > 0; i++){
			sum += sAgent.charAt(a + i);
		}
		var a_ = sum.indexOf('; ') + 2;
		var b_ = sum.length - 2;
		for(var n = 0;n < b_ - a_ && b_ - a_ > 0; n++){
			language += sum.charAt(a_ + n);
		}
	}else{
		language = "undefind```111";
	}
	return language;
}

/**
 * ��峰�� flash ������
 */
function getFlashVesion() { 
	var f = "-", n = navigator; 
	if (n.plugins && n.plugins.length) {
	    for (var ii = 0; ii < n.plugins.length; ii++) {
	          if (n.plugins[ii].name.indexOf('Shockwave Flash') != -1) { 
	              f = n.plugins[ii].description.split('Shockwave Flash ')[1]; 
	              break; 
	         } 
	    } 
	} else if (window.ActiveXObject) { 
	     for (var ii = 10; ii >= 2; ii--) { 
	        try { 
	           var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');"); 
	           if (fl) { 
	               f = ii + '.0'; 
	              break; 
	           }
	        } catch (e) { 
	       } 
	   } 
	}
	return f; 
}

/**
 * ��峰��灞�骞����杈ㄧ��
 */
function getResolution(){
	return (screen.width + '*' + screen.height);
}

/**
 * ��峰��棰���蹭�����
 */
function getColorDepth(){
	return screen.colorDepth;
}

/**
 * ��峰�����浣�绯荤��
 */
function getSystem(){
	var sys	= '';
	try{
		var sAgent = navigator.userAgent.toLowerCase();
		var a = sAgent.indexOf('windows');
		for(var i = 0 ; i < 14 ; i++){
			sys += sAgent.charAt(a+i);
		}
	}catch(e){
		sys = navigator.platform;
	}
	return sys;
}
/**
 * 娴����缁�璁′唬���
 */
<!--Product Counter code-->
//if(productId && productId>9){ 淇���逛负浠ヤ����ゆ��
if(typeof(productId)!="undefined"){
document.write('<img src=\"//pinterface.yesky.com/counter?rtype=2&rfid='+productId+'"  alt=\'\' border=\'0\' width=\'0\' height=\'0\'>');
}

