function lowIE() {
	        var browser = navigator.appVersion;
	        var version = browser.split(";");
	     	if (version.length > 1) {
	            var ie_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
	            if (ie_Version < 10) {
	                alert("蠟腔銡擬ん唳掛徹腴ㄛ③汔撰ㄐ");
	            }
	        }
	      
}
lowIE();