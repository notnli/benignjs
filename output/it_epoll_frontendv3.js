(function () {
jQuery(function () {
	return jQuery('[data-toggle]').on('click', function () {
		var toggle;
		toggle = $(this).addClass('active').attr('data-toggle');
		jQuery(this).siblings('[data-toggle]').removeClass('active');
		return jQuery('.surveys').removeClass('grid list').addClass(toggle);
	});
});
}.call(this));