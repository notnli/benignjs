
//DROPDOWN MENU
$.fn.dropdown = function( options ) {

	var settings = $.extend({
        // do setting
        hover : false
    }, options);
	var dropdown = $(this);

	function dropdown_hover(){
		dropdown.parent(".dropdown-wrap").hover(
	        function() {
	            $(this).addClass("dropdown-aktif");
	        },
	        function() {
	            $(this).removeClass("dropdown-aktif");
	    });
	}
	function dropdown_click(){
	    dropdown.click(function(e){
	    	e.preventDefault();
			if (!($(this).parents(".dropdown-wrap").hasClass("dropdown-aktif"))) {
				$(".dropdown-wrap").removeClass("dropdown-aktif");
			}
			$(this).parent().toggleClass("dropdown-aktif");
	    });
	}

	if(settings.hover == true) {
		dropdown_hover();
	} else {
		dropdown_click();
	}

    return $(document).bind("mouseup", function(e)
    {
    	e.preventDefault();
        var container_drop = dropdown.parent(".dropdown-wrap");

        if (!container_drop.is(e.target) // if the target of the click isn't the container...
            && container_drop.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container_drop.removeClass("dropdown-aktif");
        }

    });
}

//DROPDOWN MENU
$(".dropdown").dropdown();
