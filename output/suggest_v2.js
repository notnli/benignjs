/* Git */
;
(function($, window){

	// /script/search/ecl_new.js
	// /script/search/ecl_wrap.js
	// jquery-1.4.2.js or later
	
	// settings
	//   formID          :Required
	//   class           :
	//   width           :Required
	//   categoryTagNm   :
	//   pageCategory    :
	//   lid             :
	//   lidCategory     :
	//   viewCnt         :Default >> 10
	//   hideCnt         :Default >> 0
	//   pageType        :Default >> 1
	//   adjustment      :[top, left]
	
	var _key        = {UP: 38, DOWN: 40, ESC: 27, ENTER: 13};
	
	var _cache      = {};
	var _input      = null;
	var _noData     = '';
	var _noData_c   = '';
	
	var _div        = null;
	
	var _current    = null;
	var _listCnt    = null;
	var _lineCnt    = 0;
	var _fViewCnt   = 0;
	var _isFull     = true;
	var _isHide     = false;
	
	var _categoryCD = null;
	var _isApiCall  = false;
	var _isJump     = false;
	var _isOnList   = false;

	$.fn.suggest = function(options) {
		
		var document = window.document;
		var settings = $.extend({
				'formID'            : null,
				'class'             : null,
				'width'             : null,
				'categoryTagNm'     : null,
				'pricePageCategory' : null,
				'lid'               : null,
				'lidCategory'       : null,
				'viewCnt'           : 10,
				'hideCnt'           : 0,
				'pageType'          : 1,
				'adjustment'        : [0, 0]
				}, options);
	
		init(document, $(this), settings);

		return this.each(function() {
			$(this).bind({
			keyup:function (e) {
				if(e.keyCode === _key.UP ||
				   e.keyCode === _key.DOWN ||
				   e.keyCode === _key.ESC ||
				   _isJump === true){
				}else{
					viewSuggest(document, $(this), settings);
				}
			},
			keydown:function (e) {
				if(e.keyCode === _key.UP ||
				   e.keyCode === _key.DOWN ||
				   e.keyCode === _key.ESC){
					switch(e.keyCode) {
				    case _key.UP:
				    	if(_current == null || _current == 0){
				    		if(_isFull){
				    			_current = _listCnt + _lineCnt;
				    		}else{
				    			_current = _fViewCnt;
				    		}
				    		setFocus($(this), true);
				    	}else{
				    		_current--;
				    		setFocus($(this), true);
				    	}
				    	break;
					case _key.DOWN:
						if(_current === null)
						{
							if (_div.text() == '' && (_input + ' ' + _categoryCD in _cache)){
								createSuggest(_cache[_input + ' ' + _categoryCD], document, $(this), settings);
							}
							_current = 0;
						}else{
							_current++;
						}
						
						if(_isFull){
							if(_current > (_listCnt + _lineCnt)){
								_current = 0;
							}
						}else{
							if(_fViewCnt > _listCnt){
								if(_current >= (_fViewCnt - 1)){
									_current = 0;
								}
							}else{
								if(_current > (_fViewCnt - 1)){
									$('#suggestion > div').show();
									$('#suggestMore').hide();
									
									_isFull = true;
								}
							}
						}
						setFocus($(this), false);
				    	break;
					case _key.ESC:
						hideSuggest();
						break;
					}
				}
			},
			blur:function (e) {
				if(!_isOnList){
					hideSuggest();
				}
			},
			mousedown:function (e) {
				if(!_isOnList){
					hideSuggest();
				}
			}
			}, this.settings);
		});

	};
	
	function init(doc, thisInput, s) {
		
		$('#' + s['formID']).bind({
			keypress:function (e) {
				if (e.keyCode === _key.ENTER) {
					if(_current !== null){
						var div = $($('#suggestion > div').get(_current));
						jumpPage(thisInput, div, s);
						return false;
					}
				}
			}
		});

		if(s['categoryTagNm'] != null){
			
			var categoryTag = $('#' + s['formID'] + ' *[name=' + s['categoryTagNm'] + ']');
			if(categoryTag.size() > 0){
				if(categoryTag.filter(':checked').val() == ''){
					_categoryCD = null;
				}else{
					_categoryCD = categoryTag.filter(':checked').val();
				}
				categoryTag.bind({
					change:function (e) {
						if($(this).val()){
							_categoryCD = $(this).val();
						}else{
							_categoryCD = null;
						}
					}
				});
			}
			
		}
		
		thisInput.attr('autocomplete', 'off');
		
		_isApiCall  = false;
		_isJump = false;
		
		var parentTag;
		var top;
		var left;
		if(thisInput.offsetParent()[0]){
			parentTag = thisInput.offsetParent()[0];
			top = thisInput.position().top + 
					thisInput.outerHeight() +
					s['adjustment'][0];
			left = thisInput.position().left + 
					getNum(thisInput.css('padding-left')) + 
					getNum(thisInput.css('border-left-width')) +
					s['adjustment'][1];
			
		}else{
			parentTag = thisInput.parent()[0];
			top = thisInput.offset().top + 
					thisInput.outerHeight() +
					s['adjustment'][0];
			left = thisInput.offset().left + 
					getNum(thisInput.css('padding-left')) + 
					getNum(thisInput.css('border-left-width')) +
					s['adjustment'][1];
		}

		if($('#suggestion').size() == 0){
			_div = $('<div />')
			_div.attr('id', 'suggestion');
		}else{
			_div = $('#suggestion');
		}
		_div.hide();
		
		if(s['class'] != null){
			_div.addClass(s['class']);
		}
		
		_div.css({
			display: 'none'
		}).appendTo(parentTag);
		
		_fViewCnt = s['viewCnt'] - s['hideCnt'];
		if(s['hideCnt'] > 0){
			_isFull = false;
			_isHide = true;
		}
	}
	
	function setFocus(thisInput, prv){
		if(_current === null) { return; }
		
		var div;
		var i = 0;
		while(true){
			div = $($('#suggestion > div').get(_current));
			if(div.find('*[name=suggestName]').text() == ''){
				if(i > 10) { break; }
				if(prv){
					_current--;
				}else{
					_current++;
				}
				i++;
			}else{
				break;
			}
		}
	    thisInput.val(div.find('*[name=suggestName]').text());
	    div.siblings().removeClass('focused');
	    div.addClass('focused');
	}
		
	function hideSuggest() {
	
		_div.hide();
		_div.text('');
		if(_isHide){
			_isFull = false;
		}

		setupInit();
	
	}
	
	function setupInit() {
	
		_current = null;
		_listCnt = null;
		_lineCnt  = 0;
		_isOnList = false;

	}
	
	function isNoData(){
		
		if(_categoryCD != null){
			if(_noData_c != '' && _noData_c == _input.substr(0, _noData_c.length)){
				return true;
			}
		}else{
			if(_noData != '' && _noData == _input.substr(0, _noData.length)){
				return true;
			}
		}
		
		return false;
		
	}
	
	function setNoData(){
	
		if(_categoryCD != null){
			_noData_c = _input;
		}else{
			_noData = _input;
		}
		
	}
	
	function clearNoData(){
		if(_categoryCD != null){
			_noData_c = '';
		}else{
			_noData = '';
		}
	}
	
	function viewSuggest(doc, thisInput, s) {
		
		_input = $.trim(thisInput.val());
		
		if(_input === ''){
			hideSuggest();
			return false;
		}
		
		setupInit();
			
		if (_input + ' ' + _categoryCD in _cache){
			createSuggest(_cache[_input + ' ' + _categoryCD], doc, thisInput, s);
		}else{
			apiSuggest(doc, thisInput, s);
		}
		
	}
	
	function apiSuggest(doc, thisInput, s) {
		
		if(_input == '' || _isApiCall){
			return false;
		}
		if(isNoData()){
			return false;
		}

		var apiUrl = '/apiSuggest/ApiSuggest.aspx';
		apiUrl += "?kw=" + encodeURIComponent(thisInput.val());
		if(_categoryCD != null)
		{
			apiUrl += "&cd=" + encodeURIComponent(_categoryCD);
		}
		apiUrl += "&pt=" + encodeURIComponent(s['pageType']);
		if(s['pricePageCategory'] != null){
			apiUrl += "&pc=" + encodeURIComponent(s['pricePageCategory']);
		}
		
		_isApiCall = true;
		$.ajax({
			type: 'GET',
			url: apiUrl,
			dataType: "json",
			cache: false,
			success: function(json, status, xhr) {
				if (json.status==0){
					_cache[_input + ' ' + _categoryCD] = json;
					createSuggest(json, doc, thisInput, s)
				}else{
					hideSuggest();
					setNoData();
				}
			},
			error: function (xhr, status, errorThrown) {
				hideSuggest();
				setNoData();
			},
			complete:
			function (xhr, status, errorThrown) {
				_isApiCall = false;
			}
		});

	}

	function createSuggest(json, doc, thisInput, s) {
	
		if(json.suggestion == null || json.suggestion.length == 0){
			hideSuggest();
			setNoData();
			return;
		}
		
		_div.text('');
		_listCnt = json.suggestion.length -1;
		var viewCnt = s['viewCnt'] - 1;
		if(viewCnt < 0) { viewCnt = 0; }
		if(_listCnt > viewCnt) { _listCnt = viewCnt }
		
		var lineStyle = '';
		if (!_isFull){
			lineStyle = 'display:none;';
		}
		
		for(var i = 0; i <= _listCnt; i++){

			var item = json.suggestion[i];
			var name = htmlEncode(htmlDecode(item.orgName));
			var orgName = htmlEncode(htmlDecode(item.orgName));
			var cd = htmlEncode(item.categoryCD);
			var path = htmlEncode(item.path);
			
			var itemStyle = '';
			if (!_isFull && _fViewCnt <= i){
				itemStyle = 'display:none;';
			}
			
			var innerDiv = '<div style="width:' + s['width'] + 'px;' + itemStyle + '">';
			
			if(item.categoryName == null){
				innerDiv += '<span class="type_a wide">' + name.replace(htmlEncode(_input), '<b>' + htmlEncode(_input) + '</b>') + '</span>';
			}else{
				if(item.categoryName == 'ѓJѓeѓSѓЉ‚МѓyЃ[ѓW‚Ц'){
					innerDiv += '<span class="type_a ic_f">';
				}else{
					innerDiv += '<span class="type_a">';
				}
				innerDiv += name.replace(htmlEncode(_input), '<b>' + htmlEncode(_input) + '</b>') + '</span>';
				innerDiv += '<span class="type_b">' + htmlEncode(item.categoryName) + '</span>';
			}
			innerDiv += '<span name="suggestName" style="display:none;">' + orgName + '</span>';
			innerDiv += '<span name="suggestCD" style="display:none;">' + cd + '</span>';
			innerDiv += '<span name="suggestPath" style="display:none;">' + path + '</span>';
			innerDiv += '</div>';

			$(innerDiv)
				.click(function(e) {
				    jumpPage(thisInput, $(this), s);
				})
				.hover(function(e) {
					_isOnList = true;
				    $(this).siblings().removeClass('focused');
				    $(this).addClass('focused');
				},function() {
					_isOnList = false;
				    $(this).removeClass('focused');
				})
			    .appendTo(_div);

			if(item.categoryName != 'ѓJѓeѓSѓЉ‚МѓyЃ[ѓW‚Ц' && i < _listCnt && i < viewCnt && json.suggestion[i + 1].categoryName == null ^ item.categoryName == null){
				_div.append('<div class="line" style="width:' + s['width'] + 'px;' + lineStyle + '" />');
				_lineCnt++;
			}
		}
		if (!_isFull && _fViewCnt <= _listCnt){
			var moreDiv = '<div id="suggestMore" class="see_more" style="width:' + s['width'] + 'px;"><span>‚а‚Б‚ЖЊ©‚й</span></div>'; 
			$(moreDiv)
				.click(function(e) {
				    $('#suggestion > div').show();
					$(this).hide();
				    $(this).removeClass('focused');
				    thisInput.focus();
				    _isOnList = false;
					_isFull = true;
				})
				.hover(function(e) {
					_isOnList = true;
				    $(this).siblings().removeClass('focused');
				    $(this).addClass('focused');
				},function() {
					_isOnList = false;
				    $(this).removeClass('focused');
				})
			    .appendTo(_div);
		}
		
		_div.show();
		
		clearNoData();
	
	}
	
	function jumpPage(thisInput, thisDiv, s){

		var name = thisDiv.find('*[name=suggestName]').text();
		var cd = thisDiv.find('*[name=suggestCD]').text();
		var path = thisDiv.find('*[name=suggestPath]').text();
		
		hideSuggest();
		thisInput.val(name);
		
		if(path == ''){
			_isJump = true;
			if(name != ''){
				if(cd == ''){
					window.location.href = '/search_results/' + UrlEncSJIS(name) + '/?act=Suggest';
				}else{
					window.location.href = '/search_results/' + UrlEncSJIS(name) + '/?category=' + UrlEncSJIS(cd) + '&act=Suggest';
				}
			}
		}else{
			window.open(path);
		}
		
		return false;

	}
	
	function htmlEncode(value){
		if(value == null){
			return '';
		}
		return $('<div/>').text(value).html();
	}
	
	function htmlDecode(value){
		if(value == null){
			return '';
		}
		return $('<div/>').html(value).text();
	}
	
	function getNum(val){
		
		var num = parseInt(val, 10);
		if(isNaN(num)){
			return 0;
		}else{
			return num;
		}
	}
	
})(jQuery, window);