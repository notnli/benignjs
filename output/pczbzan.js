
var cids = [];


function shnewszan(contentid,obj){
	var obj = $(obj);
	if(!contentid){
		return false;
	}
	var check = obj.find('img').attr('src');

	if(check.indexOf('dzon.png') > 0 ){
		//return false;
	}

	$.ajax({
		url:'https://lyb.eastday.com/gd/zanzhutie/?',
		dataType : 'jsonp',
		data: ({"content_id":contentid}),
		success:function(data){
			var num = data.num;
			if(num > 9999){
				num = '9999+';
			}	
			obj.find('img').attr("src","https://news.eastday.com/images/china20191209/dzon.png");
			$(".zbzannum[data-id="+contentid+"]").html(num);
		}
	});	
}

function zbzan(contentid,obj){
	var obj = $(obj);
	if(!contentid){
		return false;
	}
	var check = obj.css('background');

	//if(check.indexOf('dzon.png') > 0 ){
		//return false;
	//}else{
		check = obj.css('background-image');
		//if(check.indexOf('dzon.png') > 0 ){
			//return false;
		//}
	//}
	$.ajax({
		url:'https://lyb.eastday.com/gd/zanzhutie/?',
		dataType : 'jsonp',
		data: ({"content_id":contentid}),
		success:function(data){
			var num = data.num;
			if(num > 9999){
				num = '9999+';
			}	
			obj.css("background","url(https://news.eastday.com/images/china20191209/dzon.png) 0 center no-repeat");
			$(".zbzannum[data-id="+contentid+"]").html(num);	
			
		}
	});	
}

getzan();

function getzan(){
	$(".zbzannum").each(function(){
		cids.push($(this).attr('data-id'));
	});
	
	if(cids.length > 0){
		$.ajax({
			url:'https://lyb.eastday.com/gd/getZanCount/?',
			dataType : 'jsonp',
			data: ({"cids":cids}),
			success:function(data){
				var zannum = data.zan;	
				for(var i in zannum){
            		$(".zbzannum[data-id="+i+"]").html(zannum[i]);	
    			}
			}
		});	
	}

}

