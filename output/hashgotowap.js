if(/Android|iPhone|ipod|baidu/i.test(navigator.userAgent))
{
var urlhref = window.location.search;
typeUrl = urlhref.replace('?type=','');
//typeUrl=urlhref.substr(urlhref.lastIndexOf("?type=")+6);
if (typeUrl == "pc") {}else{
		// window.location.href='http://wap.eastday.com/';
		}
		
 }