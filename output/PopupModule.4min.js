var PopupModule={type:{error:"confirmErrorPopup",trash:"confirmDeletePopup",wait:"bgTaskWaitPopup"},popupWithButtons:function(d){var e=$($("#confirmPopup").clone());var f=$(".jsPopupBody",e);var g=d.type||"simple";if(!PopupModule.type.hasOwnProperty(g)){g="simple"}g=g.toLowerCase();if(g=="simple"){$(".jsConfirmMsg",f).remove();f.append(d.content)}else{f.addClass(PopupModule.type[g]);var c=f.find(".jsConfirmMsg");d.useHtml?c.html(d.content):c.text(d.content)}d.confirmButtonText&&e.find(".jsConfirmOk").text(d.confirmButtonText);if(!d.buttonsType){e.find(".jsClose").hide()}else{d.cancelButtonText&&e.find(".jsClose").text(d.cancelButtonText)}var h=function(j){if(j.which==13){if(d.buttonsType){d.confirmCallback&&d.confirmCallback()}a.closePopup()}};var b=function(){d.cancelCallback&&d.cancelCallback();$("body").unbind("keydown",h)};var i=d.title||(d.type=="error"?$(".jsErrorDefaultTitle").val():$(".jsInfoDefaultTitle").val());var a=PopupModule.popup({title:i,element:e,afterClose:b,closeOnClickOnOutsideArea:true,notCloseOthers:d.notCloseOthers});if(!d.buttonsType){$(".jsConfirmOk",a).click(a.closePopup)}else{$(".jsConfirmOk",a).click(function(){d.confirmCallback&&d.confirmCallback();a.closePopup()})}$(window).resize(a.calculatePosition);$("body").keydown(h);return a},popup:function(e){if(!e.notCloseOthers){$(".p_window").remove();$(".p_overlay").remove()}var a=e.closeButton!==false?"<a class='close jsClose'></a>":"";var b=$('<div class="p_window"><div class="ii"><div class="hh"><span id="accountPopupTitle"></span>'+a+"</div><div class='cc'>"+(e.content?e.content:"")+'<div class="clear"></div></div></div></div>');if(e.element){if(e.insertElement){b.find(".cc").html("").append(e.element)}else{b.find(".cc").html("").append(e.element.html())}}var d=$('<div class="p_overlay"></div>');if(e.notCloseOthers&&$("body .p_window:first").length){$("body .p_window:first").after(d,b)}else{$("body").prepend(d,b)}b.find("#accountPopupTitle").html(e.title);b.css({"visibility":"visible","display":"block"});b.calculatePosition=function(){var i=$(window).height()/2;var h=$(window).width()/2;var g=b.outerHeight()/2;var f=b.outerWidth()/2;b.css({"top":i,"left":"50%","margin-left":"-"+f+"px","margin-top":"-"+g+"px"});if(g>i){b.css({"top":"0","margin-top":"0","position":"absolute"})}};b.calculatePosition();$(window).resize(b.calculatePosition);var c=function(f){if(f.which==27){b.closePopup()}};if(e.closeButton!==false){$("body").keydown(c)}b.closePopup=function(){$("body").unbind("keydown",c);if(e.onClose&&!e.onClose()){return}b.remove();d.remove();if(e.afterClose){e.afterClose()}};b.setTitle=function(f){b.find("#accountPopupTitle").html(f)};b.find(".jsClose").click(b.closePopup);if(e.closeOnClickOnOutsideArea){d.click(b.closePopup)}b.show();if(e.loadingDiv){b.showLoading=function(){$("#"+e.loadingDiv).show()};b.hideLoading=function(){$("#"+e.loadingDiv).hide()};b.showLoading()}if(typeof attachTips!="undefined"){attachTips(true)}$.fn.placeholder&&b.find(".jsDynamicPlaceholder[placeholder]").placeholder();return b}};