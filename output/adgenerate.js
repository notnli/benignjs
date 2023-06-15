var mcategory;
var scategory;
$(function(){
	rtn = getDeviceType();
	//主分類
	mcategory = $("meta[name='main_category']").attr("content");
	//次分類	
	scategory = ($("meta[name='sub_category']").attr("content"));	
});
function createDFP(pos_id, slot_id, slot_size, device_type, display_flag, display_style)  
{
	if (!display_flag)	return;
	if (device_type != "" && $("#txtDeviceType").val() != device_type.toLowerCase())	return;
	if (!$("#"+pos_id).length)	return;
	if ($("#"+pos_id).html().trim().length>0)	return;
	var div_id = "divad-" + createGuid();
	var div_template1 = "<div id=\"@ID@\"></div>";
	var div_template2 = "<div class=\"hr-separator\">我是廣告 請繼續往下閱讀</div><div class=\"adcolumn\">"+div_template1+"</div><div class=\"hr-separator-noword\"></div>";
	var div_template;
	switch(display_style){
		case 0:
			div_template = div_template1;
			break;
		case 1:
			div_template = div_template2;	
			break;			
		default:
			div_template = div_template1;				
	}
	googletag.cmd.push(function() {
	    googletag.defineSlot("/5799246/"+slot_id, slot_size, div_id).addService(googletag.pubads());
	    googletag.pubads().enableSingleRequest();
	    googletag.pubads().collapseEmptyDivs();
	    googletag.enableServices();
	});
	$("#"+pos_id).html(div_template.replace("@ID@", div_id));
	googletag.cmd.push(function() { googletag.display(div_id); });
}
function createGuid()  
{  
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
}  
function getDeviceType1() {
	var device = "";
	if ($("#txtDeviceType").length > 0) {
		device = $("#txtDeviceType").val();
	}
	else{
		$("body").append("<input type='hidden' id='txtDeviceType' />");
	}
	if (device == ""){
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			device = "mb";
		} else {
			device = "pc";
		}
		$("#txtDeviceType").val(device);
	}
	return device;
}






