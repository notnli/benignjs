

//logo_ettoday =======================================
(function(){
	var etLogoRightNow = new Date();

	//端午節
	var etLogoStartTime1 = new Date(2023, 6-1, 17, 0, 0, 0);
	var etLogoEndTime1 = new Date(2023, 6-1, 22, 23, 59, 59);
	// var etLogoSrc1 = "./images/logo/dragon_day_2023.gif"; 
	var etLogoSrc1 = "https://static.ettoday.net/style/ettoday2017/images/logo/dragon_day_2023.gif";


	if(etLogoRightNow > etLogoStartTime1 && etLogoRightNow < etLogoEndTime1){
		document.write('<a href="http://www.ettoday.net/?from=logo" title="回首頁"><img src="'+etLogoSrc1+'" border="0" alt="ETtoday 新聞雲"/></a>');
	}else{//下檔期間-預設Logo		
		document.write('<a href="http://www.ettoday.net/?from=logo" title="回首頁"><img src="//static.ettoday.net/style/ettoday2017/images/logo_ettoday.png" border="0" alt="ETtoday 新聞雲"/></a>');
	}

})();




