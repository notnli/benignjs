function updateSliderNavigation(a){var b=$("#slider-"+a).slider("option","value"),c=$(".level-navigation-"+a+' .level-item[data-level="'+b+'"]');$(".level-navigation-"+a+" .level-item").removeClass("active"),$(c).addClass("active")}!function(){"use strict";var a=$("#help-me-choose .tabs-link"),b=$("#help-me-choose .tab .button"),c=$("#help-me-choose .tab .line-1"),d=$("#help-me-choose .tab .line-2"),e=$("#help-me-choose .tab .line-3"),f=$("#help-me-choose .tabs-link .tab-1"),g=$("#help-me-choose .tabs-link .tab-2"),h=$("#help-me-choose .tabs-link .tab-3"),i=$("#help-me-choose .tab-1 .button"),j=$("#help-me-choose .tab-2 .button"),k=$("#help-me-choose .tab-3 .button");a.on("click",function(){b.addClass("ds-none")}),b.on("click",function(){b.addClass("ds-none")}),f.on("click",function(){c.removeClass("ds-none"),d.addClass("ds-none"),e.addClass("ds-none")}),g.on("click",function(){c.addClass("ds-none"),d.removeClass("ds-none"),e.addClass("ds-none")}),h.on("click",function(){c.addClass("ds-none"),d.addClass("ds-none"),e.removeClass("ds-none")}),i.on("click",function(){c.removeClass("ds-none"),d.addClass("ds-none"),e.addClass("ds-none")}),j.on("click",function(){c.addClass("ds-none"),d.removeClass("ds-none"),e.addClass("ds-none")}),k.on("click",function(){c.addClass("ds-none"),d.addClass("ds-none"),e.removeClass("ds-none")})}(),sessionStorage.setItem("hmct",!0),$(".hmct-categories .item").click(function(){if($(this).hasClass("inactive")){$("#help-me-choose-tool").addClass("expanded"),$(".hmct-categories .item").addClass("inactive"),$(this).removeClass("inactive");var a=$(this).data("hmctcategory");$(".hmct-categories .item .button-wrapper").hide(),$(".hmct-content .hmct-content-item").hide().removeClass("active"),$(".hmct-content .hmct-content-item-"+a).show().addClass("active")}});var hideTooltip=function(){$(".ui-slider-handle").on("click",function(){$(".ui-slider .tooltip").hide()})};$(".level-navigation .level-item").on("click",function(){var a=$(this).data("levelnavigationname");$(".level-navigation-"+a+" .level-item").removeClass("active"),$(this).addClass("active");var b=$(this).data("level");$("#slider-"+a).slider("value",b),$(".hmct-product-"+a).removeClass("selected"),$(".hmct-product-"+a+"-"+b).addClass("selected"),$(".ui-slider .tooltip").hide()}),$(".level-navigation a").on("click",function(a){a.preventDefault()}),$(function(){$(".slider").slider({min:1,range:!1,step:1e-4,max:3,value:2,range:"min",animate:"slow",orientation:"horizontal",slide:function(a,b){hideTooltip()},stop:function(a,b){var c=$(this).data("category");$("#slider-"+c).slider("value",Math.round(b.value));var d=Math.round(b.value);$(".hmct-product-"+c).removeClass("selected"),$(".hmct-product-"+c+"-"+d).addClass("selected"),updateSliderNavigation(c),dataLayer.push({event:"sliderMove",sliderPosition:d,sliderName:c})}})}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length&&(a.preventDefault(),$("html, body").animate({scrollTop:b.offset().top},1e3,function(){var a=$(b);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}});
//# sourceMappingURL=help-me-choose-tool-v2.js.map