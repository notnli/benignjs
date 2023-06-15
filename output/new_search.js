// submitƒtƒ‰ƒO
var isSearchProcessing = false

//kakakuItem PriceMenu Search
function search(query,category){
 if(document.getElementById(query).value != "" && isSearchProcessing === false){
	isSearchProcessing = true;
  if(document.getElementById(category) != undefined && document.getElementById(category).checked){
   window.location.href = "/search_results/" + UrlEncSJIS(document.getElementById(query).value) + "/?category=" + UrlEncSJIS(document.getElementById(category).value);
  }
  else{
   window.location.href = "/search_results/" + UrlEncSJIS(document.getElementById(query).value) + "/";
  }
  setTimeout(function() {isSearchProcessing = false;}, 500)
  return false;
 }
 else{
  return false;
 }
}

//kakakuItem PriceMenu Search
function searchToGlobalSearch(query,category,spath){
	if(document.getElementById(query).value != "" && isSearchProcessing === false){
		isSearchProcessing = true;
		//selectCategory
		if(document.getElementById(category) != undefined && document.getElementById(category).checked){
			window.location.href = spath.replace("/-/", "/" + urlEncodeRFC3986(document.getElementById(query).value) + "/");
		}
		else{
			window.location.href = spath.substring(0, spath.indexOf("?")).replace("/-/", "/" + urlEncodeRFC3986(document.getElementById(query).value) + "/");
		}
		setTimeout(function() {isSearchProcessing = false;}, 500)
		return false;
	}
	else{
		return false;
	}
}

//SearchItem PriceMenu Search
function searchPriceMenuSearch(frm,query,category,title){
	if(document.getElementById(query).value != "" && isSearchProcessing === false){
		isSearchProcessing = true;
        var baseURL = "";
		var params = "";
		if(document.getElementById(category) != undefined && document.getElementById(category).checked){
			// local search
			baseURL = document.getElementById(frm).action;
			params = "?query=" + UrlEncSJIS(document.getElementById(query).value) + "&act=Input";
		}
		else{
			// global search
			baseURL = "/search_results/" + UrlEncSJIS(document.getElementById(query).value) + "/?act=Input";
		}
		if(document.getElementById(title) != undefined && document.getElementById(title).checked){
			params += "&nameonly=on";
		}
	window.location.href = baseURL + params;
	setTimeout(function() {isSearchProcessing = false;}, 500)
	return false;
	}
	else{
		return false;
	}
}

//SearchItem CategoryLevel or MakerLevel Search
function searchLocalCategorySearch(frm,query,category,title,color,shopnarrow,colorsimple){
	var baseURL = "";
	var params = "";
	if (isSearchProcessing === fasle){
		isSearchProcessing = true;
	}
	else{
		return false;
	}
	if(document.getElementById(category) != undefined && document.getElementById(category).checked){
		// local search
		baseURL = document.getElementById(frm).action;
		params = "?query=" + UrlEncSJIS(document.getElementById(query).value) + "&act=Input";
	}
	else{
		// global search
		baseURL = "/search_results/" + UrlEncSJIS(document.getElementById(query).value) + "/?act=Input";
	}

	if(document.getElementById(color) != undefined && document.getElementById(color).value != "")
	{
		if(document.getElementById(category) != undefined && document.getElementById(category).checked)
		{
			params += "&rgb=" + UrlEncSJIS(document.getElementById(color).value);
		}
	}

	if(document.getElementById(colorsimple) != undefined && document.getElementById(colorsimple).value != "")
	{
		if(document.getElementById(category) != undefined && document.getElementById(category).checked)
		{
			params += "&rgbs=" + UrlEncSJIS(document.getElementById(colorsimple).value);
		}
	}

	if(document.getElementById(shopnarrow) != undefined && document.getElementById(shopnarrow).value != "")
	{
		if(document.getElementById(category) != undefined && document.getElementById(category).checked)
		{
			params += "&shop=" + UrlEncSJIS(document.getElementById(shopnarrow).value);
		}
	}
	if(document.getElementById(title) != undefined && document.getElementById(title).checked){
		params += "&nameonly=on";
	}
window.location.href = baseURL + params;
setTimeout(function() {isSearchProcessing = false;}, 500)
return false;
}


function focusQuery(){
  document.getElementById('query').focus();
}


function focusQuery2(){
  document.getElementById('keyword').focus();
}

//Search cateTop leftmenu open_close
function smenu_l(menu_name,menu_code){
  var strName;
  var strName0;
  var strName1;
  if((menu_name=="")||(menu_name==null))return true;
  strName=menu_name;
  strName0 = "smenu-" + strName;
  strName1 = "smenu+" + strName;
  if(menu_code==0){
    document.getElementById(strName0).className="submenuBtn listClose";
    document.getElementById(strName1).className="submenuBtn";
  }else{
    document.getElementById(strName1).className="submenuBtn listClose";
    document.getElementById(strName0).className="listOpen";
  }
  return true;
}