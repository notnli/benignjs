
//shuffle 亂數排序dom========================
(function($){
    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };
})(jQuery);


$(function(){
	//有上稿才出現
	if($("#hot-trip .piece").length > 0){
		$("#hot-trip").show();
	}
	
	//調用shuffle 亂數排序
	$(".block_travel .part_travel_pictxt .piece").shuffle();

	//GA 點擊追蹤
	$("#hot-trip .pic a").click(function() {
		gtag('event', '出國趣-廣告點擊-'+$(this).parent().text(), { //點擊LOGO
			'點擊文字': 'Logo圖',
			'所在頻道': location.hostname,
			'send_to': 'G-MZKD6GE0R1'
		});

		gtag('event', 'Logo圖', { 
			'event_category': $(this).parent().text(), 
			'event_label': location.hostname, 
			'send_to': 'UA-52510577-12'
		});
	});
	
	$("#hot-trip h3 a").click(function() {
		gtag('event', '出國趣-廣告點擊-'+$(this).parent().parent().parent().find(".pic").text(), { //點擊文字
			'點擊文字': $(this).parent().index()+'-'+$(this).text(),
			'所在頻道': location.hostname,
			'send_to': 'G-MZKD6GE0R1'
		});

		gtag('event', $(this).parent().index()+"-"+$(this).text(), { 
			'event_category': $(this).parent().parent().parent().find(".pic").text(), 
			'event_label': location.hostname, 
			'send_to': 'UA-52510577-12'
		});
	});
	
});