function uranai_mental_get_result(t,a){$.ajax({type:"post",url:"/uranai_mental_result",dataType:"html",cache:!1,data:{choice:t,MD:a},async:!1,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}).done(function(a){if("reset"==t){var n=document.location.href;return void(document.location.href=n)}$("#div_uranai_mental_contents").html(a)}).fail(function(t){$("#div_uranai_mental_msg").html("ERROR!!")})}