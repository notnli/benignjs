// JavaScript Document
/*焦点图切换*/
$(function() {
	var sWidth = $("#focus_ad").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus_ad ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;

    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#focus_ad").append(btn);
    $("#focus_ad .btnBg").css("opacity", 0.0);
	
    $("#focus_ad .btn span").css("opacity", 0.3).mouseenter(function () {
        index = $("#focus_ad .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
	
	
    $("#focus_ad .preNext").css("opacity", 0.3).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.7" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0.3" }, 300);
    });
    $("#focus_ad .pre").click(function () {
        index -= 1;
        if (index == -1) { index = len - 1; }
        showPics(index);
    });
    $("#focus_ad .next").click(function () {
        index += 1;
        if (index == len) { index = 0; }
        showPics(index);
    });
	
	//为数字按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus_ad ol li").mouseenter(function() {
		index = $("#focus_ad ol li").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	
	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus_ad ul").css("width",sWidth * (len + 1));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus_ad").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			if(index == len) { //如果索引值等于li元素个数，说明最后一张图播放完毕，接下来要显示第一张图，即调用showFirPic()，然后将索引值清零
				showFirPic();
				index = 0;
			} else { //如果索引值不等于li元素个数，按普通状态切换，调用showPics()
				showPics(index);
			}
			index++;
		},5000); //此5000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus_ad ul").stop(true,false).animate({"left":nowLeft},500); //通过animate()调整ul元素滚动到计算出的position
		$("#focus_ad ol li").removeClass("current").eq(index).addClass("current"); //为当前的按钮切换到选中的效果
		$("#focus_ad .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);
	}
	
	function showFirPic() { //最后一张图自动切换到第一张图时专用
		$("#focus_ad ul").append($("#focus_ad ul li:first").clone());
		var nowLeft = -len*sWidth; //通过li元素个数计算ul元素的left值，也就是最后一个li元素的右边
		$("#focus_ad ul").stop(true,false).animate({"left":nowLeft},500,function() {
			//通过callback，在动画结束后把ul元素重新定位到起点，然后删除最后一个复制过去的元素
			$("#focus_ad ul").css("left","0");
			$("#focus_ad ul li:last").remove();
		}); 
		$("#focus_ad ol li").removeClass("current").eq(0).addClass("current"); //为第一个按钮添加选中的效果
	}
});