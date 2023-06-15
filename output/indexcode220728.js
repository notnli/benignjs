var globalUrlremark="https://apin.eastday.com/apiplus/Special/specialnewslistbyremark";
var globalUrllist="https://apin.eastday.com/apiplus/Special/specialnewslistbyurl";
var newglobalUrllist="https://apin.eastday.com/apiplus/fnews/listpc";



//------------------------------------------------------------------------------------------------
//首页-天气预报
var index_weather = function () {
	$.ajax({
		type: 'GET',
		url:"https://apin.eastday.com/apiplus/user/weather",
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"city": "上海",
					}), 

		success: function (data) {
				$("#weather").append(data.data.weather+" "+data.data.minTemperature+"℃-"+data.data.maxTemperature+"℃");
		},
		error: function () {
			console.error("获取天气预报失败!");
		}
	});

}
index_weather();
//------------------------------------------------------------------------------------------------
//首页-东方图闻
var index_photo = function () {
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',

		success: function (data) {
			var list = data.data.list;
			var cntlist;
			console.log("list"+list);			
			$.each(list, function (i, value) {
				if(list[i].styleType==2){
				cntlist=list[i].carouselList;
				console.log(cntlist);
			}
			});	
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				var imgUrl = cntlist[i].imgUrl;
				if (cntlist && cntlist.length > 0 && i<3) {
					$("#gallery .swiper-wrapper").append('<li class="swiper-slide"><div class="img"><a target="_blank" href="'+ linkUrl +'" title="'+title+'"><img src="'+ imgUrl +'" alt="'+title+'"></a></div><div class="title"><a target="_blank" href="'+ linkUrl +'" class="blueb16 lh28" title="'+title+'">'+ title +'</a></div></li>');
					$("#thumbs .swiper-wrapper").append('<div class="swiper-slide"><a>'+ title +'</a></div>');
				}
			});			
		},
		error: function () {
			console.error("获取东方图闻失败!");
		},
		complete: function(XMLHttpRequest,status){ //请求完成后最终执行参数
if(status=="success"){
			//大图滚动
				var thumbsSwiper = new Swiper('#thumbs',{
				  spaceBetween: 0,
				  slidesPerView: 3,
				  direction : 'vertical',
				  watchSlidesVisibility: true,/*避免出现bug*/
				})
				var gallerySwiper = new Swiper('#gallery',{
				  spaceBetween: 0,
				  autoplay:true,
				  pagination: {
					el: '.swiper-pagination',
					clickable: true,
				  },
				  thumbs: {
					swiper: thumbsSwiper,
				  }
				});
			}
		}
	});
}
index_photo();
//------------------------------------------------------------------------------------------------
//首页-要闻
var index_yw = function () {
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
		success: function (data) {
			var list = data.data.list;
			var cntlist;
			$.each(list, function (i, value) {
				if(list[i].styleType==24){
				cntlist=list[i].list;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				// var title = cntlist[i].title;
				// var linkUrl = cntlist[i].url;
				//二十大专版
				if(i>=0){
					var title = cntlist[i].title;
					var linkUrl = cntlist[i].url;
					if (cntlist && cntlist.length > 0) {
						if(i%4==0){
							$("#ywwrap").append('<li class="Fontbold"><a href="'+ linkUrl +'" target="_blank" class="greyc18" title="'+ title +'"><b>'+ title +'</b></a></li>');
						}else{
							$("#ywwrap").append('<li><a href="'+ linkUrl +'" target="_blank" class="grey16" title="'+ title +'">'+ title +'</a></li>');
						}
						if(i%4==3){
							$("#ywwrap").append('<div class="blank20"></div>');
						}
					}
				}
			});
		},
		error: function () {
			console.error("获取要闻失败!");
		}
	});

}
index_yw();
//------------------------------------------------------------------------------------------------
//首页-视频
var index_ship = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1585303695013466",// 
						"skipCount": 0, 
						"limitCount": 6
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$(".spwrap ul").append('<li><a href="'+linkUrl+'" target="_blank" title="'+title+'"><img src="'+imgUrl+'" alt="'+title+'" /><img src="images/spplay.png" class="spbtn" /></a><h1><a href="'+linkUrl+'" target="_blank" class="greya16" title="'+title+'">'+title+'</a></h1></li>');
				}
			});
		},
		error: function () {
			console.error("获取视频数据失败!");
		}
	});

}
index_ship();
//------------------------------------------------------------------------------------------------
//首页-中国
var index_china = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1578098222011690",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#chinawrap").append('<li><div><a href="'+ linkUrl +'" target="_blank"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取中国失败!");
		}
	});

}
index_china();
//------------------------------------------------------------------------------------------------
//首页-国际
var index_world = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1578272736010591",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#worldwrap").append('<li><div><a href="'+ linkUrl +'" target="_blank" alt="'+title+'"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取国际失败!");
		}
	});

}
index_world();
//------------------------------------------------------------------------------------------------
//首页-财经
var index_finance = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1578272800010598",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#financewrap").append('<li><div><a href="'+ linkUrl +'" target="_blank"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取财经失败!");
		}
	});

}
index_finance();
//------------------------------------------------------------------------------------------------
//首页-社会
var index_society = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1578272609010588",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#societywrap").append('<li><div><a href="'+ linkUrl +'" target="_blank" alt="'+title+'"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取社会失败!");
		}
	});

}
index_society();
//------------------------------------------------------------------------------------------------
//首页-政法
var index_politics = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1628057888011202",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#politicswrap").append('<li><div><a href="'+ linkUrl +'" target="_blank" alt="'+title+'"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取政法数据失败!");
		}
	});

}
index_politics();
//------------------------------------------------------------------------------------------------
//首页-娱乐
var index_enjoy = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1571969134014839",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				if (list && list.length > 0) {
					$("#enjoywrap").append('<li><div><a href="'+ linkUrl +'" target="_blank" alt="'+title+'"><img src="'+ imgUrl +'" alt="'+title+'"></a><p><a href="'+ linkUrl +'" target="_blank" class="greya14 lh28" title="'+title+'">'+ title +'</a></p></div></li>');
				}
			});

		},
		error: function () {
			console.error("获取娱乐失败!");
		}
	});

}
index_enjoy();
//------------------------------------------------------------------------------------------------
//首页-教育
var index_jynews = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1628059813011214",// 
						"skipCount": 0, 
						"limitCount": 7
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
				if(i==0){
					$("#jyIndex_img").append('<div class="lh24"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+title+'">'+ title +'</a></div><div class="blank10"></div><div class="fl"><a href="'+ linkUrl +'" target="_blank" title="'+title+'"><img width="147" height="110" src="'+ imgUrl +'" alt="'+title+'"></a></div><div class="tx2 grey12 lh22 fl" style="height:110px"><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+title+'">'+ zhaiyao +'</a></div><div class="blank15"></div>');
				}
				else if(i>=1 && i<7){
					$("#jyIndex_list ul").append('<li><a target="_blank"  class="grey12" href="' + linkUrl + '" title="'+title+'">' + title + '</a></li>');
					
				}

			});

		},
		error: function () {
			console.error("获取教育数据失败!");
		}
	});

}
index_jynews();
//------------------------------------------------------------------------------------------------
//首页-导报
var index_dbnews = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "161709106377018156",// 
						"skipCount": 0, 
						"limitCount": 1
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			//console.log(list);
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgurls_hd[0];
					$("#dbnews").append('<a target="_blank" href="'+ linkUrl +'" title="'+title+'"><img border="0" width="200" height="296" src="'+ imgUrl +'" alt="'+ title +'"></a>');
			});

		},
		error: function () {
			console.error("获取导报失败!");
		}
	});

}
index_dbnews();
//------------------------------------------------------------------------------------------------
//首页-军事
var index_mil = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1578272908010599",// 
						"skipCount": 0, 
						"limitCount": 1
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zy = list[i].abstracts;
				if (list && list.length > 0) {
					$("#milwrap").append('<div class="lh24"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+ title +'">'+ title +'</a></div><div class="blank10"></div><div class="fl"><a target="_blank" href="'+ linkUrl +'" title="'+ title +'"><img width="147" height="110" src="'+ imgUrl +'" alt="'+ title +'"></a></div><div class="tx2 grey12 lh22 fl"><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+ title +'">'+ zy +'</a></div>');
				}
			});

		},
		error: function () {
			console.error("获取军事失败!");
		}
	});

}
index_mil();
//------------------------------------------------------------------------------------------------
//首页-市民修身
var index_smxsnews = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1628059564011209",// 
						"skipCount": 0, 
						"limitCount": 4
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
				if(i==0){
					$("#dfpw_con_0 #smxs_pic").append('<div class="pic1 fl"><p><a target="_blank" href="'+ linkUrl +'" title="'+title+'"><img border="0" src="'+ imgUrl +'" width="147" height="110" alt="'+ title +'"></a></p><p class="blank9"></p><p class="lh24 fc"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+ title +'">'+ title +'</a></p></div>');
				}
				else if(i>=1 && i<4){
				$("#dfpw_con_0 ul").append('<li><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+ title +'">'+ title +'</a></li>');
				}



			});

		},
		error: function () {
			console.error("获取市民修身数据失败!");
		}
	});

}
index_smxsnews();
//------------------------------------------------------------------------------------------------
//首页-食药安全
var index_syaqnews = function () {
	
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1628060623011221",// 
						"skipCount": 0, 
						"limitCount": 4
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
				if(i==0){
					$("#dfpw_con_1 #syaq_pic").append('<div class="pic1 fl"><p><a target="_blank" href="'+ linkUrl +'" title="'+title+'"><img border="0" src="'+ imgUrl +'" width="147" height="110" alt="'+ title +'"></a></p><p class="blank9"></p><p class="lh24 fc"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+ title +'">'+ title +'</a></p></div>');
				}
				else if(i>=1 && i<4){
				$("#dfpw_con_1 ul").append('<li><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+ title +'">'+ title +'</a></li>');
				}


			});

		},
		error: function () {
			console.error("获取食药安全数据失败!");
		}
	});

}
index_syaqnews();
//------------------------------------------------------------------------------------------------
//首页-图片左侧滚动
var index_tp = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1598581940023692",// 
						"skipCount": 0, 
						"limitCount": 5
					}), 


		success: function (data) {
			var list = data.data.list;
			if(data.data.specialImgUrlsPCMax){
				$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgurls_hd[0];
				var zy = list[i].abstracts;
				if (list && list.length > 0) {
					$(".swiper-container2 .swiper-wrapper").append('<div class="swiper-slide"><img src="'+ imgUrl +'" alt="'+title+'" /><div><h1><a href="'+ linkUrl +'" target="_blank" class="white16" title="'+title+'">'+ title +'</a></h1><p><a href="'+ linkUrl +'" target="_blank" class="white14" title="'+title+'">'+ zy +'</a></p></div></div>');
				}
			});					
			}					
		},
		error: function () {
			console.error("获取图片左侧失败!");
		},
		complete: function(XMLHttpRequest,status){ //请求完成后最终执行参数
	　　　　if(status=="success"){
					//图片频道图片滚动
				var photoSwiper = new Swiper('.swiper-container2',{
				  scrollbar: {
					el: '.swiper-scrollbar',
				  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				}); 
				photoSwiper.scrollbar.$dragEl.css('background','#b90602');  
				$(".swiper-container2 .swiper-slide").hover(function(){
					$(this).find("div").show();    
				},function(){
					$(this).find("div").hide();  
				});
			}
	　　}
	});

}
//index_tp();
//------------------------------------------------------------------------------------------------
//首页-栏目右侧
var index_lmright = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1659065535047611",// 
						"skipCount": 0, 
						"limitCount": 5
					}), 


		success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgurls_hd[0];
				if (list && list.length > 0) {
					$(".applm").append('<p><a href="'+linkUrl+'" target="_blank" class="black12a" title="'+title+'"><img src="'+imgUrl+'" alt="'+title+'" />'+title+'</a></p>');
				}
			});

		},
		error: function () {
			console.error("获取图片右侧失败!");
		}
	});

}
index_lmright();

//------------------------------------------------------------------------------------------------
//首页-声音图片
var index_sypic = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1589866948016029",// 
						"skipCount": 0, 
						"limitCount": 1
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
					$("#syIndex_img").append('<div class="lh24"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+title+'">'+ title +'</a></div><div class="blank10"></div><div class="fl"><a href="'+ linkUrl +'" target="_blank" title="'+title+'"><img width="147" height="110" src="'+ imgUrl +'" alt="'+title+'"></a></div><div class="tx2 grey12 lh22 fl" style="height:110px"><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+title+'">'+ zhaiyao +'</a></div><div class="blank15"></div>');
			});

		},
		error: function () {
			console.error("获取声音失败!");
		}
	});

}
// index_sypic();
//------------------------------------------------------------------------------------------------
//首页-声音列表
var index_sylist = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1589867129016093",// 
						"skipCount": 0, 
						"limitCount": 9
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
					$("#syIndex_list ul").append('<li><a target="_blank"  class="grey12" href="' + linkUrl + '" title="'+title+'">' + title + '</a></li>');
			});

		},
		error: function () {
			console.error("获取声音列表失败!");
		}
	});

}
index_sylist();
//------------------------------------------------------------------------------------------------
//首页-政务
var index_zw = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "161708773077017813",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$("#zwIndex_list").append('<ul  class="newslist4"></ul>')
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgurls_hd[0];
				var zhaiyao = list[i].abstracts;
				if(i==0){
					$("#zwIndex_img").append('<div class="lh24"><a href="'+ linkUrl +'" target="_blank" class="blueb14" title="'+title+'">'+ title +'</a></div><div class="blank10"></div><div class="fl"><a href="'+ linkUrl +'" target="_blank" title="'+title+'"><img width="147" height="110" src="'+ imgUrl +'" alt="'+title+'"></a></div><div class="tx2 grey12 lh22 fl" style="height:110px"><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+title+'">'+ zhaiyao +'</a></div><div class="blank15"></div>');
				}
				else if(i>=1 && i<3){
				$("#zwIndex_list ul").append('<li><a target="_blank"  class="grey12" href="' + linkUrl + '" title="'+title+'">' + title + '</a></li>');
				}


			});

		},
		error: function () {
			console.error("获取政务失败!");
		}
	});

}
index_zw();
//------------------------------------------------------------------------------------------------
//首页-区情-右栏
var index_spnews = function () {
	$.ajax({
		type: 'GET',
		url: "https://apin.eastday.com/apiplus/special/specialnewslistbyurl",
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1591951247017048",// 
						"skipCount": 0, 
						"limitCount": 6
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
				var zhaiyao = list[i].abstracts;
				if(i==0){
					$("#ts_con_1 .sp").append('<p><a target="_blank" href="'+ linkUrl +'" title="'+title+'"><img border="0" width="300" height="202" src="'+ imgUrl +'" alt="'+ title +'"></a></p><div><a href="'+ linkUrl +'" target="_blank" class="white12" title="'+ title +'">'+ title +'</a></div>');
				}
				else if(i>=1 && i<5){
				$("#ts_con_1 ul").append('<li><a href="'+ linkUrl +'" target="_blank" class="grey12" title="'+ title +'">'+ title +'</a></li>');
				}


			});

		},
		error: function () {
			console.error("获取区情数据失败!");
		}
	});

}
index_spnews();

//------------------------------------------------------------------------------------------------
//首页-头条
var index_title = function () {
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			success: function (data) {
			var list = data.data.list;
			var cntlist;
			console.log(list);
			$.each(list, function (i, value) {
				if(list[i].styleType==21){
				cntlist=list[i].topNewsList;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				//var imgurls_hd = cntlist[i].imgurls_hd[0];
				if(i==0){
					if(cntlist[i].imgurls_hd != null && cntlist[i].imgurls_hd.length>0){
						$(".indextt1").append('<a href="'+ linkUrl +'" target="_blank" class="blue24a" title="'+title+'"><img src="'+ cntlist[i].imgurls_hd[0] +'" alt="'+title+'" /></a>');
					}else{
						$(".indextt1").append('<h1><a href="'+ linkUrl +'" target="_blank" class="blue24" title="'+title+'">'+ title +'</a></h1>');
					}
				}				
			});

		},
		error: function () {
			console.error("获取头条失败!");
		}
	});

}
index_title();
//------------------------------------------------------------------------------------------------
//首页-换一换
var index_hyh = function () {
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			success: function (data) {
			var list = data.data.list;
console.log(list);
			var cntlist;
			$.each(list, function (i, value) {
				if(list[i].styleType==21){
				cntlist=list[i].topNewsList;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				if(i!=0){
					if(i==1 || i==2){
						$(".swiper-container3 .swiper-wrapper").append('<li class="swiper-slide"><a href="'+ linkUrl +'" target="_blank" class="greyc18" title="'+title+'"><b>'+ title +'</b></a></li>');
					}else{
						$(".swiper-container3 .swiper-wrapper").append('<li class="swiper-slide"><a href="'+ linkUrl +'" target="_blank" class="greyc18" title="'+title+'">'+ title +'</a></li>');
					}
					
				}				
			});			
		},
		error: function () {
			console.error("获取换一换失败!");
		},
		complete: function(XMLHttpRequest,status){ //请求完成后最终执行参数
	　　　　if(status=="success"){
					//换一换
				var wySwiper = new Swiper('.swiper-container3',{
					slidesPerView: 'auto',
					spaceBetween :30,
					autoplay:{
						delay: 5000,
					  },
				});
			}
	　　}
	});

}
index_hyh();

//直播上海滚动
var scrollDiv = function (id) {
	id.niceScroll({
		cursorcolor: "#000",
		//background:bgcolor,
		cursoropacitymax: "0.1", //滚动条的透明度值
		touchbehavior: false,
		cursorwidth: "0px", //滚动条width
		cursorborder: "0px",
		cursorborderradius: "0",
		autohidemode: false
	});
}

function showdate(n) {
var uom = new Date(new Date()-0+n*86400000);
uom = uom.getFullYear() + "-" + (uom.getMonth()+1) + "-" + uom.getDate();
return uom;
}
var startTime = String(showdate(-1));
var endTime = String(showdate(0));
//直播上海列表
var zbsh = function () {
	infoAvailable = true;
	$.ajax({
		type: 'GET',
		url: globalUrlremark,
		dataType: 'json',
		crossDomain: true,
		contentType: 'application/json',
		data: ({
			"remarkIds":"1848",
            "skipCount": 0,
            "limitCount": 30,
			"startTime":startTime,
			"remarkType":1,
		}),

		success: function (data) {
			var list = data.data.list
				$.each(list, function (i, value) {
					var title = list[i].title;
					var zhaiyao = list[i].abstracts;
					var imgUrl1 = list[i].imgUrl[0];
					if(list[i].imgurls_hd!=null&&list[i].imgurls_hd.length>0){
						var imgUrl2 = list[i].imgurls_hd[0];
					}
					var date = list[i].time.substr(list[i].time.indexOf("-")+1,list[i].time.lastIndexOf(":")-5);
					var linkUrl = list[i].url.replace("/news/","/pnews/");
					
					if (imgUrl2) {
						$("#zbsh").append('<div class="gdbb"><div class="date">'+date+'</div><div class="title"><a title="'+title+'">'+title+'</a></div><div class="img"><img src="'+imgUrl2+'" alt="'+title+'"></div><div class="zy"><a href="'+linkUrl+'" target="_blank" title="'+zhaiyao+'">'+zhaiyao+'</a></div><div class="line"></div></div>');
					}else if (imgUrl1) {
						$("#zbsh").append('<div class="gdbb"><div class="date">'+date+'</div><div class="title"><a title="'+title+'">'+title+'</a></div><div class="img"><img src="'+imgUrl1+'" alt="'+title+'"></div><div class="zy"><a href="'+linkUrl+'" target="_blank" title="'+zhaiyao+'">'+zhaiyao+'</a></div><div class="line"></div></div>');
					}else{
						$("#zbsh").append('<div class="gdbb"><div class="date">'+date+'</div><div class="title"><a title="'+title+'">'+title+'</a></div><div class="zy"><a href="'+linkUrl+'" target="_blank" title="'+zhaiyao+'">'+zhaiyao+'</a></div><div class="line"></div></div>');
					}

				});

		},
		error: function () {
			console.error("获取直播上海失败!");
		}
	});

}

$(document).ready(function () {
scrollDiv($("#zbsh"));
zbsh();
setInterval("zbsh()",600000);


$(document).on("click",".gdbb .img img",function(){console.log("img");
  $(".pimg").remove();
  var imgsrc=this.src;
  var $inner;
  $inner='<img src="'+imgsrc+'" />';
  $(".tanc").append('<p class="pimg">'+$inner+'</p>');
  $(".tanc").show();
});
  $("#closetan").click(function(){
    $(".tanc").hide();
    $(".pimg").remove();
  });
    $(window).scroll(function(){
if($(document).scrollTop()>1100){
$(".tanc").hide();
$(".pimg").remove();}
    });	
 $("#shrefresh").click(function(){
	$("#zbsh").html('');
    setTimeout("zbsh()",100);
	$("#zbsh").getNiceScroll(0).doScrollTop(0);
 });
if($(window).width()>1500){
    $(".tanc").css({"left":"20%","top":"100px"});  
  }
});  
//========================================================================
//首页-信息
$.getJSON("https://www.eastday.com/eastday/shouye/07index/node766351/index_T43983.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData);
function ProcessData (data){
		var listnews=data.listnews;
        $("#qqs_con_0").html("");
        var html=[];
		for(i=0;i<listnews.length;i++){
			var name=listnews[i].name;
			var newsUrl=listnews[i].newsUrl;
			var sText=listnews[i].sText;
			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
		} 
        $("#qqs_con_0").html(html.join(""));
}
//========================================================================
//首页-商务
$.getJSON("https://www.eastday.com/eastday/shouye/07index/shangwu/index_T43983.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData1);
function ProcessData1 (data){
		var listnews=data.listnews;
        $("#qqs_con_1").html("");
        var html=[];
		for(i=0;i<listnews.length;i++){
			var name=listnews[i].name;
			var newsUrl=listnews[i].newsUrl;
			var sText=listnews[i].sText;
			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
		} 
        $("#qqs_con_1").html(html.join(""));
}
//========================================================================
//首页-网友投诉
// $.getJSON("https://news.eastday.com/eastday/06news/2013xwzx/dfztc/ts/index_T43982.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData2);
// function ProcessData2 (data){
// 		var listnews=data.listnews;
//         $("#wmts").html("");
//         var html=[];
// 		for(i=0;i<listnews.length;i++){
// 			var name=listnews[i].name;
// 			var newsUrl=listnews[i].newsUrl;
// 			var sText=listnews[i].sText;
// 			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
// 		} 
//         $("#wmts").html(html.join(""));
// }
//========================================================================
//首页-消费提示
// $.getJSON("https://news.eastday.com/eastday/06news/2013xwzx/dfztc/hf/index_T43982.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData3);
// function ProcessData3 (data){	
// 		var listnews=data.listnews;
//         $("#xfts").html("");
//         var html=[];
// 		for(i=0;i<listnews.length;i++){
// 			var name=listnews[i].name;
// 			var newsUrl=listnews[i].newsUrl;
// 			var sText=listnews[i].sText;
// 			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
// 		} 
//         $("#xfts").html(html.join(""));
// }
//========================================================================
//首页-活动推广
var index_hdtglist = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1636685902030784",// 
						"skipCount": 0, 
						"limitCount": 7
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
					$("#ws_con_0").append('<li><a target="_blank"  class="grey12" href="' + linkUrl + '" title="'+title+'">' + title + '</a></li>');
			});

		},
		error: function () {
			console.error("获取活动推广列表失败!");
		}
	});

}
index_hdtglist();
// $.getJSON("https://www.eastday.com/eastday/shouye/07index/hdtg/index_T43980.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData4);
// function ProcessData4 (data){
// 		var listnews=data.listnews;		
//         $("#ws_con_0").html("");
//         var html=[];
// 		for(i=0;i<listnews.length;i++){
// 			var name=listnews[i].name;
// 			var newsUrl=listnews[i].newsUrl;
// 			var sText=listnews[i].sText;
// 			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
// 		} 
//         $("#ws_con_0").html(html.join(""));
// }
//========================================================================
//首页-服务合作
var index_fwhzlist = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1636685912030786",// 
						"skipCount": 0, 
						"limitCount": 40
					}), 



			success: function (data) {
			var list = data.data.list;
			var imgUrl;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
					$("#ws_con_1").append('<a target="_blank"  class="grey12" href="' + linkUrl + '" title="'+title+'">' + title + '</a>');
			});

		},
		error: function () {
			console.error("获取服务合作列表失败!");
		}
	});

}
index_fwhzlist();
// $.getJSON("https://www.eastday.com/eastday/shouye/07index/fwhz/index_T43981.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData5);
// function ProcessData5 (data){
// 		var listnews=data.listnews;		
//         $("#ws_con_1").html("");
//         var html=[];
// 		for(i=0;i<listnews.length;i++){
// 			var name=listnews[i].name;
// 			var newsUrl=listnews[i].newsUrl;
// 			var sText=listnews[i].sText;
// 			html.push('<a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a>');
// 		} 
//         $("#ws_con_1").html(html.join(""));
// }
//========================================================================
//首页-汽车
$.getJSON("https://www.eastday.com/eastday/shouye/07index/node208520/index_T43984.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData7);
function ProcessData7 (data){
		var listnews=data.listnews;
        $("#auto").html("");
        var html=[];
		html.push('<div class="lh24"><a href="'+listnews[0].newsUrl+'" target="_blank" class="blueb14" title="'+listnews[0].sText+'">'+listnews[0].name+'</a></div><div class="blank10"></div>');
		html.push('<div class="fl"><a target="_blank" href="'+listnews[0].newsUrl+'" title="'+listnews[0].sText+'"><img border="0" src="http://www.eastday.com'+listnews[0].imgUrl+'" width="147" height="110" alt="'+listnews[0].sText+'"></a></div>');
		html.push('<div class="tx2 grey12 lh22 fl"><a href="'+listnews[0].newsUrl+'" target="_blank" class="grey12 lh22" title="'+listnews[0].sText+'">'+listnews[0].newszyt+'</a></div><div class="blank20"></div><ul class="newslist9">');
		for(i=1;i<listnews.length;i++){
			var name=listnews[i].name;
			var newsUrl=listnews[i].newsUrl;
			var sText=listnews[i].sText;
			html.push('<li><a href="'+newsUrl+'" target="_blank" class="grey12" title="'+sText+'">'+name+'</a></li>');
		} 
		html.push('</ul>');
        $("#auto").html(html.join(""));
}
//========================================================================
//首页-公司新闻左
$.getJSON("https://www.eastday.com/eastday/shouye/07index/enews/index_T43985.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData8);
function ProcessData8 (data){
		var listnews=data.listnews;
        $("#dtleft").html("");
        var html=[];
		html.push('<div class="lh24"><a href="https://www.eastday.com'+listnews[0].newsUrl+'" target="_blank" class="grey16" title="'+listnews[0].sText+'">'+listnews[0].name+'</a></div><div class="blank10"></div>');
		html.push('<div class="fl"><a target="_blank" href="https://www.eastday.com'+listnews[0].newsUrl+'"><img border="0" src="https://www.eastday.com'+listnews[0].imgUrl+'" width="147" height="110" title="'+listnews[0].sText+'"></a></div>');
		html.push('<div class="tx1 lh22 greya12 fr"><a href="https://www.eastday.com'+listnews[0].newsUrl+'" target="_blank" class="lh22 greya12">'+listnews[0].newszyt+'</a></div><div class="blank20"></div><ul class="newslist11">');
		for(i=2;i<5;i++){
			var name=listnews[i].name;
			var newsUrl=listnews[i].newsUrl;
			var sText=listnews[i].sText;
			html.push('<li><a href="https://www.eastday.com'+newsUrl+'" target="_blank" class="greya14" title="'+sText+'">'+name+'</a></li>');
		} 
		html.push('</ul>');
        $("#dtleft").html(html.join(""));
}
//========================================================================
//首页-公司新闻右
$.getJSON("https://www.eastday.com/eastday/shouye/07index/enews/index_T43985.txt?t="+(new Date().getTime()),{time:new Date().getTime()},ProcessData9);
function ProcessData9 (data){
		var listnews=data.listnews;
        $("#dtright").html("");
        var html=[];
		html.push('<div class="lh24"><a href="https://www.eastday.com'+listnews[1].newsUrl+'" target="_blank" class="grey16" title="'+listnews[1].sText+'">'+listnews[1].name+'</a></div><div class="blank10"></div>');
		html.push('<div class="fl"><a target="_blank" href="https://www.eastday.com'+listnews[1].newsUrl+'"><img border="0" src="https://www.eastday.com'+listnews[1].imgUrl+'" width="147" height="110" title="'+listnews[1].sText+'"></a></div>');
		html.push('<div class="tx1 lh22 greya12 fr"><a href="https://www.eastday.com'+listnews[1].newsUrl+'" target="_blank" class="lh22 greya12">'+listnews[1].newszyt+'</a></div><div class="blank20"></div><ul class="newslist11">');
		for(i=6;i<9;i++){
			var name=listnews[i].name;
			var newsUrl=listnews[i].newsUrl;
			var sText=listnews[i].sText;
			html.push('<li><a href="https://www.eastday.com'+newsUrl+'" target="_blank" class="greya14" title="'+sText+'">'+name+'</a></li>');
		} 
		html.push('</ul>');
        $("#dtright").html(html.join(""));
}
//========================================================================

//------------------------------------------------------------------------------------------------
//首页-二十大头条
var index_cpctt = function () {
		$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			success: function (data) {
			var list = data.data.list;
			var cntlist;
			console.log(list);
			$.each(list, function (i, value) {
				if(list[i].styleType==21){
				cntlist=list[i].topNewsList;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				//var imgurls_hd = cntlist[i].imgurls_hd[0];
				if(i==0){
					if(cntlist[i].imgurls_hd.length>0){
						$(".cpcwrap > h1").append('<a href="'+ linkUrl +'" target="_blank" class="blue24a" title="'+title+'"><img src="'+ cntlist[i].imgurls_hd[0] +'" alt="'+title+'" /></a>');
					}else{
						$(".cpcwrap > h1").append('<a href="'+linkUrl+'" target="_blank" title="'+title+'">'+title+'</a>');
					}
				}				
			});

		},
		error: function () {
			console.error("获取头条失败!");
		}
	});

}
index_cpctt();
//------------------------------------------------------------------------------------------------
//首页-二十大滚动
var index_cpcgd = function () {
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			success: function (data) {
			var list = data.data.list;
console.log(list);
			var cntlist;
			$.each(list, function (i, value) {
				if(list[i].styleType==21){
				cntlist=list[i].topNewsList;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				if(i!=0){
					$(".cpcwrap .swiper-containercpc1 .swiper-wrapper").append('<li class="swiper-slide"><a href="'+linkUrl+'" target="_blank" title="'+title+'">'+title+'</a></li>');					
				}				
			});			
		},
		error: function () {
			console.error("获取换一换失败!");
		},
		complete: function(XMLHttpRequest,status){ //请求完成后最终执行参数
	　　　　if(status=="success"){
					//换一换
				var wySwipercpc = new Swiper('.swiper-containercpc1',{
					slidesPerView: 'auto',
					spaceBetween :30,
					autoplay:{
						delay: 5000,
					  },
				});
			}
	　　}
	});

}
index_cpcgd();
//------------------------------------------------------------------------------------------------
//首页-二十大图片滚动
var index_cpctpgd = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1664271164031483",// 
						"skipCount": 0, 
						"limitCount": 10
					}), 



			success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgurls_hd[0];
					$(".cpcmain .swiper-containercpc2 .swiper-wrapper").append('<div class="swiper-slide"><a href="'+linkUrl+'" target="_blank" title="'+title+'"><img src="'+imgUrl+'" alt="'+title+'" /><p></p></a><h1><a href="'+linkUrl+'" target="_blank" title="'+title+'">'+title+'</a></h1></div>');
			});
			var wySwipercpc = new Swiper('.swiper-containercpc2',{
					slidesPerView : 1,
					slidesPerGroup : 1,
					spaceBetween : 0,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});

		},
		error: function () {
			console.error("获取政务失败!");
		}
	});

}
index_cpctpgd();
//------------------------------------------------------------------------------------------------
//首页-二十大原创
var index_cpcyc = function () {	
	$.ajax({
		type: 'GET',
		url: newglobalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
		success: function (data) {
			var list = data.data.list;
			var cntlist;
			$.each(list, function (i, value) {
				if(list[i].styleType==24){
				cntlist=list[i].list;
				console.log(cntlist);
			}
			});
			$.each(cntlist, function (i, value) {
				var title = cntlist[i].title;
				var linkUrl = cntlist[i].url;
				if (cntlist && cntlist.length >0 && i<4) {
					$(".cpcmain > div.fr ul").append('<li><h1><a href="'+linkUrl+'" target="_blank" title="'+title+'">'+title+'</a></h1></li>');
				}
			});
		},
		error: function () {
			console.error("获取要闻失败!");
		}
	});
}
index_cpcyc();
//------------------------------------------------------------------------------------------------
//首页-二十大视频
var index_cpcsp = function () {
	$.ajax({
		type: 'GET',
		url: globalUrllist,
			 dataType:'json',
			 crossDomain: true,
			 contentType: 'application/json',
			 data: ({
						"specialUrl": "1664271158031481",// 
						"skipCount": 0, 
						"limitCount": 3
					}), 



			success: function (data) {
			var list = data.data.list;
			$.each(list, function (i, value) {
				var title = list[i].title;
				var linkUrl = list[i].url;
				var imgUrl = list[i].imgUrl[0];
					$(".cpcsp").append('<li><a href="'+linkUrl+'" target="_blank" title="'+title+'"><img src="'+imgUrl+'" alt="'+title+'" /><p><img src="images/cpcplay.png" /></p></a><h2><a href="'+linkUrl+'" target="_blank" title="'+title+'">'+title+'</a></h2></li>');
			});
		},
		error: function () {
			console.error("获取政务失败!");
		}
	});

}
index_cpcsp();
//document.writeln(" <script src=\'https://jhelper.shanghai.gov.cn/publicJS/3100003000089.js\' type=\'text/javascript\'></script>");
 document.writeln(" <script src=\'https://gov.govwza.cn/dist/aria.js?appid=2246343207856932766ae5f47c170a1e\' type=\'text/javascript\'></script>");