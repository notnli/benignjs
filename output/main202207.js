$(document).ready(function() {
	/*list*/
	$('.list2 ul:nth-child(4n+1)').css("margin-left",0);
	$(".Comment .col-2 h3").eq(0).css({"padding-top":"0px","border":"none"})
	$(".Comment .col-2 h3").eq(0).css({"padding-top":"0px","border":"none"})
	/*Message_rmrb*/
	var mrnum =$(".Leader_switch li").eq(0).attr("data");
	if(mrnum){
		$(".Leader_switch_con").hide();
		$(".Leader_switch_con").eq(mrnum-1).show();
	}
	$(".Leader_switch li").click(function(){		
		$(".Leader_switch li").attr("class","");
		$(".Leader_switch_con").hide();
		$(this).attr("class","active");
		var num =$(this).attr("data");
		if(num){
			$(".Leader_switch_con").eq(num-1).show();
			if(num == 3){
				$(".Leader_switch span").show()
			}
			else{
				$(".Leader_switch span").hide()
			}
		}else{
			$(".Leader_switch_con").eq($(this).index()).show();
			if($(this).index() == 2){
				$(".Leader_switch span").show()
			}
			else{
				$(".Leader_switch span").hide()
			}
		}		
	});
	/*Classify*/	
	$(window).on("load", function () {
		/*if ($(".bav .col-2 p").text().length < 2){
			$(".adwzl").hide();
		}*/		
		$(".Classify a").each(function(index, element) {
			$(this).click(function(){
				$(this).addClass("active").siblings().removeClass("active");
				if(index == 0){
					$('html,body').animate({scrollTop:$(this.hash).offset().top-30},1000);
				}else{
					$('html,body').animate({scrollTop:$(this.hash).offset().top-60},1000);}
			})
		});
	   var banOffTop=$(".Classify").offset().top;
		var banOffTop1=$(".pdao1").offset().top-170;
		var banOffTop2=$(".pdao2").offset().top-170;
		var banOffTop3=$(".pdao3").offset().top-170;
		var banOffTop4=$(".pdao4").offset().top-170;
		var banOffTop5=$(".pdao5").offset().top-170;
		var banOffTop6=$(".pdao6").offset().top-170;		
		var scTop=0;
		$(document).scroll(function(){
			scTop=$(this).scrollTop();
			//console.log(scTop);
			if(scTop>=banOffTop){
				$(".Classify").addClass("topping");
			}else{
				$(".Classify").removeClass("topping");
			}
			if(scTop>=banOffTop1 && scTop < banOffTop2){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(0).addClass("active")
			}else if(scTop>=banOffTop2 && scTop < banOffTop3){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(1).addClass("active")
			}else if(scTop>=banOffTop3 && scTop < banOffTop4){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(2).addClass("active")
			}else if(scTop>=banOffTop4 && scTop < banOffTop5){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(3).addClass("active")
			}else if(scTop>=banOffTop5 && scTop < banOffTop6){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(4).addClass("active")
			}else if(scTop>=banOffTop6 ){
				$(".Classify span a").removeClass("active")
				$(".Classify span a").eq(5).addClass("active")
			}
		})
	})	
	$(".list6").each(function() {
		$(this).find("li").eq(0).css("padding-top","5px");
		$(this).find("li").eq(-1).css({
			"padding-bottom":0,
			"border-bottom":"none"
		})
	})
	$('.Repeat1:odd').addClass("Repeat_odd");
	$('.Repeat2:odd').addClass("Repeat_odd");
	$('.Repeat3:odd').addClass("Repeat_odd");
	$('.Repeat4:odd').addClass("Repeat_odd");
	$('.Repeat5:odd').addClass("Repeat_odd");
	$(".picg1").each(function() {
		$(this).find("li").eq(0).css("padding-left",0);
		$(this).find("li").eq(-1).css({
			"padding-right":0,
			"border-right":"none"
		})
	})
	$('.picg2 li:nth-child(2n+1)').css("margin-left",0);
	$('.picg3 li:nth-child(2n+1)').css("margin-left",0);
	$('.picg4 li:nth-child(3n+1)').css("margin-left",0);
	$(".picg5 li").bind('mouseover',function(){
		$(".picg5 li em").hide();
	  
		$(this).find("em").show();
	});
	$(".picg5 ul.w376").each(function() {
		$(this).find("li:nth-child(1)").addClass("img1");
		$(this).find("li:nth-child(2)").addClass("img2");
	});
	$(".picg5 ul.w893").each(function() {
		$(this).find("li:nth-child(1)").addClass("img3");
		$(this).find("li:nth-child(2)").addClass("img4");
		$(this).find("li:nth-child(3)").addClass("img5");
		$(this).find("li:nth-child(4)").addClass("img6");
	});
	$(".picg5").mouseout(function() {
		$(".picg5 li em").hide();
	})
	/*change img*/
	var listitem = 1;
	var listitemmax = $(".picg5").length;
	$(".Change .tit1 em").click(function() {
		$(".change" + listitem).siblings("div").show();
		$(".Change .tit1").show();
		$(".change" + listitem).hide();
		if (listitem < listitemmax) {
			listitem++;
		} else {
			listitem = 1;
		}
	});	
	$.ajax({
		type: "get",
		url: "https://messageboard.peopletech.cn/newIndex_stat.jsonp",
		cache: false,
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback: "IndexStat",
		success: function(data) {
			//console.log(data);
			var answersNum = data['answersNum'];
			var yearAnswersNum = data['yearAnswersNum'];
			var totalAnswersNum = data['totalAnswersNum'];
			
			var threadsNum = data['threadsNum'];
			var yearThreadsNum = data['yearThreadsNum'];
			var totalThreadsNum = data['totalThreadsNum'];			
			$("#totalAnswersNum").html(answersNum);
			$("#totalThreadsNum").html(threadsNum);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
			$(".Leader_switch_ly span").remove();
		}
	});
	function getFid(){
		$.ajax({
			type: "get",
			url: "//liuyan.people.com.cn/cms/getFidByRequestIP?callback=getFid",
			cache: false,
			dataType: "jsonp",
			jsonp: "callback",
			jsonpCallback: "getFid",
			async : false,
			success: function(data) {
				Fid = data.fid;
				console.log(Fid);
				if(Fid != 4){
					var difanghtml="";
					var ipname=eval("list"+Fid);
					var ipname1=eval("list"+Fid+"a");				
					if(ipname[0].type == 1){
						difanghtml+="<li><a href=\""+ipname[0].url+"\" target=\"_blank\">"+ipname[0].title+"</a></li>";
					}
					if(ipname[0].type == 4){
						difanghtml+="<li>"+ipname[0].desc+"</li>";
					}
					if(ipname1[0].type == 1){
						difanghtml+="<li><a href=\""+ipname1[0].url+"\" target=\"_blank\">"+ipname1[0].title+"</a></li>";
					}
					if(ipname1[0].type == 4){
						difanghtml+="<li>"+ipname1[0].desc+"</li>";
					}
					if(ipname[0].title){
						$("#difang").html(difanghtml).show();
					}
				}
				//ShuJu(Fid);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});
	}
	getFid();
	function HFShuJu() {	
		$.ajax({
			type: "get",
			url: "http://messageboard.peopletech.cn/answered/new_answered_all.jsonp",
			timeout : 3000,
			cache: false,
			dataType: "jsonp",
			jsonp: "callback",
			jsonpCallback: "IndexThreads",
			success: function(data) {
				var hftime;
				var arr = [];
				var size = 10;
				var sum = 6;			
				while(true){
					var num = Math.floor(Math.random()*size);
					if (!Array.indexOf) {
						Array.prototype.indexOf = function (obj) {
							for(var i = 0;i < this.length;i++){
								if (this[i] == obj) {
									return i;
								}
							}
							return -1;
						}
					}				
					if(arr.indexOf(num) == -1){
						arr.push(num)
					}				
					if(arr.length == sum){
						break;
					}
				}
				arr.sort(function(a, b){return a - b});		
				var localHtml='';
				var zlength=0;
				$.each(data,function(i,n){
					if (i == 6) {
						 return false;
					}					
					if(data[arr[i]].typeName == "感谢"){						
						localHtml += '<li><a href="'+ data[arr[i]].threadUrl +'" target="_blank">网友给'+ data[arr[i]].forumName +'发来感谢信</a></li>';					
					}else{
					localHtml += '<li><a href="'+ data[arr[i]].threadUrl +'" target="_blank">网友给'+ data[arr[i]].forumName +'反映的“'+ data[arr[i]].domainName +'”问题获回应</a></li>';
					}
				});
				$("#ldlyb").html(localHtml);				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
				$(".Leader_switch li").eq(1).remove();
			}
		});
	}
	//HFShuJu();
	function ShuJu(localIp) {	
		var localIp = localIp;
		var localUrl = "https://messageboard.peopletech.cn/new_threads_"+ localIp +".jsonp"
		console.log(localUrl);
		$.ajax({
			type: "get",
			url: localUrl,
			cache: false,
			contentType: 'text/json,charset=utf-8',
			dataType: "jsonp",
			jsonp: "callback",
			
			jsonpCallback: "IndexThreads",
			success: function(data) {
				//console.log(data);
				//localHtml
				var localHtml='';
				$.each(data,function(i,n){
					localHtml += '<li><b><a href="'+ data[i].threadUrl +'" target="_blank">'+ data[i].subject +'</a></b><em class="gray">'+ data[i].forumName +'</em></li>';
					if(i==5){return false;}
				});
				$("#ldlyb").html(localHtml);			
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});
	}
	function answerRate(){
		$.ajax({
			type: "get",
			url: "https://messageboard.peopletech.cn/provinceAnswerRate.jsonp",
			cache: false,
			scriptCharset:'utf-8',
			dataType: "jsonp",
			jsonp: "callback",
			jsonpCallback: "answerRate",
			async : false,
			success: function(data) {
				//console.log(data);				
				var lHtml='';
				var hshuzhi='';
				var hshuzhi1='';
				var hshuzhi2='';
				var tmd;
				$.each(data,function(i,n){
					var fn=30-i;
					hshuzhi=Math.ceil(data[fn].num.replace(/[~'!<>@#$%^&*()-+_=:]/g, ""));
					hshuzhi1=Math.ceil(data[fn].num.replace(/[~'!<>@#$%^&*()-+_=:]/g, "")*1.2);
					hshuzhi2=120-hshuzhi1;
					//tmd=1-0.05*i;
					tmd=1;
					
					if(data[fn].name.indexOf("黑龙江") >= 0 ) { 
						data[fn].name="黑龙江";
					}else if(data[fn].name.indexOf("内蒙古") >= 0 ) { 
						data[fn].name="内蒙古";
					}else{
						data[fn].name=data[fn].name.substring(0,2);
					}
					lHtml += '<li style="margin-top:'+ hshuzhi2 +'px;">'+ hshuzhi/*data[i].num*/ +'%<br /><span style="height:'+ hshuzhi1 +'px;opacity:'+ tmd +';"></span><p>'+ data[fn].name +'</p></li>';
					//if(i==15){return false;}
				});
				$("#ldhfl").html(lHtml);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
				$(".Leader_switch li").eq(2).remove();
			}
		});
	}
	answerRate();
	$(".UnderCon img").eq(0).css("padding-left","0px");
	$(".UnderCon img").eq(5).css("border","none");
	$(".UnderCon img").eq(6).css("padding-left","0px");
	$(".UnderCon img").eq(11).css("border","none");
	if($(".UnderCon li").length>1){
		$(".UnderCon").jCarouselLite({    
			speed: 1000,
			auto: 4000,	
			visible:1,
			vertical:true
		});
	}
	function myBrowser(){
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera
		var isMaxthon = userAgent.indexOf("Maxthon") > -1 ; //判断是否傲游3.0
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera ; //判断是否IE 
		var isFF = userAgent.indexOf("Firefox") > -1 ; //判断是否Firefox
		var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ; //判断是否Safari
		var isChrome = userAgent.indexOf("Chrome") > -1 ; //判断是否Chrome
		if(isIE){ 
		   var IE5 = IE55 = IE6 = IE7 = IE8 = false;
		   var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		   reIE.test(userAgent);
		   var fIEVersion = parseFloat(RegExp["$1"]);
		 
		   IE55 = fIEVersion == 5.5 ;
		   IE6 = fIEVersion == 6.0 ;
		   IE7 = fIEVersion == 7.0 ;
		   IE8 = fIEVersion == 8.0 ;
		 
		   if(IE55){ return "IE55"; }
		   if(IE6){ return "IE6"; }
		   if(IE7){ return "IE7"; }
		   if(IE8){ return "IE8"; }
		}		 
		if(isFF){ return "FF"; }
		if(isOpera){ return "Opera"; }
		if(isMaxthon){ return "Maxthon"; }
		if(isSafari){
		$(".fbold").css("font-family","SimHei");
		}
		if(isChrome){ return "Chrome"; }	 
	}
	myBrowser();
});
