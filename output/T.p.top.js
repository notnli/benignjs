(function(b){T.p.top={member:{},notiMessageContainerIdPrifix:"notiMessageContainer_"};b(document).ready(function(){function g(){var c=location.pathname,a="";if(0==c.indexOf("/category")||0==c.indexOf("/info")||0==c.indexOf("/feed"))a="head_type1";return a}var f={toggleGnb:function(c){0===c?(a.removeClass("gnb_mv"),a.removeClass("scoll_mv")):c>e?(a.addClass("gnb_mv"),a.removeClass("scoll_mv")):500<c<e&&a.addClass("scoll_mv")},initGnb:function(){1==b(".init_slide").length?b(".init_slide").hasClass("white")?
(a.removeClass("head_type1"),b(".btn_scene").removeClass("btn_scene_type2")):(a.addClass("head_type1"),b(".btn_scene").addClass("btn_scene_type2")):a.addClass(g())}},a=b(".kakao_head"),d=b(window),e=d.height()/2;f.initGnb();d.scroll(function(a){a=d.scrollTop();f.toggleGnb(a)})})})(jQuery);