/* =========================================================

 /script/search/malltag.js
 サーチモールタグ作成用スクリプト
 151202

========================================================= */
/* namespace
--------------------------------------------------------- */
var malltag = window.malltag || {};

malltag = {
	'domain' : 'kakaku.com',
	'cookie' : 'MalltagRoute',
	'cookieval' : {
		'entrance' : 0,
		'via1' : 1,
		'via2' : 2,
		'via3' : 3,
		'time' : 4
	},
	'val' : {
		'base' : null,
		'bbstabno' : null,
		'topcategorycd' : null,
		'categorycd' : null,
		'articleid' : null
	},
	'param' : 'p',
	'defaultVal' : '00000',
	'maxAgeMinute' : 60,
	'set' : function(){
		var cookie  = malltag.getCookie();
		var time = new Date().getTime();
		var p = malltag.getP();
		var tc = malltag.getTwoCharacters(p);

		if(cookie){
			var cookieAry = cookie.split(',');
			var diff = ((time - cookieAry[malltag.cookieval.time]) / 1000) / 60;

			if(diff > malltag.maxAgeMinute){
				cookie = "";
			}else{
				cookieAry[malltag.cookieval.time] = time;

				for(var i = cookieAry.length - 2; i >= 0; i--){
					if(cookieAry[i]){
						if(malltag.getTwoCharacters(cookieAry[i]) == tc){
							cookieAry[i] = p;
							malltag.setCookie(cookieAry);
						}else{
							switch(i){
								case malltag.cookieval.via3:
									cookieAry[malltag.cookieval.via1] = cookieAry[malltag.cookieval.via2];
									cookieAry[malltag.cookieval.via2] = cookieAry[malltag.cookieval.via3];
									cookieAry[malltag.cookieval.via3] = p;
									break;
								case malltag.cookieval.via2:
								case malltag.cookieval.via1:
								case malltag.cookieval.entrance:
									cookieAry[i + 1] = p;
									break;
							}

							malltag.setCookie(cookieAry);
						}
						
						return true;
					}
				}
			}
		}

		if(!cookie){
			var result = p + ",,,," + time;
			malltag.setCookie(result.split(','));

			return true;
		}

		return false;
	},
	'getP' : function(){
		if(!malltag.val.base) return malltag.defaultVal;
		if(malltag.val.bbstabno){
			var result = parseInt(malltag.val.base) + parseInt(malltag.val.bbstabno);
			return (malltag.defaultVal + result.toString(16)).slice(-5);
		}
		if(malltag.val.topcategorycd){
			var result = parseInt(malltag.val.base) + parseInt(malltag.val.topcategorycd);
			return (malltag.defaultVal + result.toString(16)).slice(-5);
		}
		if(malltag.val.categorycd){
			var result = parseInt(malltag.val.base) + parseInt(malltag.val.categorycd);
			return (malltag.defaultVal + result.toString(16)).slice(-5);
		}
		if(malltag.val.articleid){
			var result = parseInt(malltag.val.base) + parseInt(malltag.val.articleid);
			return (malltag.defaultVal + result.toString(16)).slice(-5);
		}
		
		return (malltag.defaultVal + parseInt(malltag.val.base).toString(16)).slice(-5);
	},
	'getCookie' : function(){
		var result = null;
		var cookieName = malltag.cookie + '=';
		var allcookies = document.cookie;
		var position = allcookies.indexOf(cookieName);
		if(position != -1){
			var startIndex = position + cookieName.length;
			var endIndex = allcookies.indexOf(';', startIndex);
			if(endIndex == -1){
				endIndex = allcookies.length;
			}
			result = decodeURIComponent(allcookies.substring(startIndex, endIndex));
		}
		return result;
	},
	'setCookie' : function(valueAry){
		var value = encodeURIComponent(valueAry.join(','));
		var cookie = malltag.cookie + '=' + value + '; domain=.' + malltag.domain + '; path=/;';
		document.cookie = cookie;
	},
	'getDecimal' : function(hexa){
		return ('000000' + parseInt(hexa, 16)).slice(-6);
	},
	'getTwoCharacters' : function(hexa){
		return malltag.getDecimal(hexa).substring(0, 2);
	}
};
