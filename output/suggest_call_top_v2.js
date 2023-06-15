/* Git */
jQuery(function($){
	
	$('#FrmKeyword #query').suggest({
		'formID'       : 'FrmKeyword',
		'class'        : 'sugestHome',
		'width'        : 454,
		'viewCnt'      : 10,
		'hideCnt'      : 7,
		'pageType'     : 1,
		'lid'          : '',
		'adjustment'   : [-1, 0]
	});
	
});

