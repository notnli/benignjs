//  Domain
var CstKakakuDomain		= location.protocol + "//kakaku.com";
var CstHistoryDomain		= "https://history.kakaku.com";

var KeepShortcutDisplay;
var HistoryShortcutDisplay;

//ショートカット枠初期表示
jQuery(function(){
	//一覧非表示の場合は以降の処理を未実施
	if(document.getElementById("historyFrame") == null){
		return;
	}

	if(KeepShortcutDisplay === undefined){
		jQuery('#historyFrame').css({
			'width' : '88px',
			'padding': '0 4px',
			'margin': '0px',
			'position': 'relative',
			'background': 'url(\'https://img1.kakaku.k-img.com/images/history/bg_historyframe_v2.png\') no-repeat 0 0'
		});
	}else{
		//稀にchangeShowShortcutSizeの後で初期化処理が実行されるため、特殊制御
		jQuery('#historyFrame').css({
			'width' : '88px',
			'padding': '0 4px',
			'margin': '0px',
			'position': 'relative',
			'background': 'url(\'https://img1.kakaku.k-img.com/images/history/bg_historyframe_v2.png\') no-repeat 0 0'
		});
		if(KeepShortcutDisplay === false){
			jQuery('#historyFrame').css('padding-top','4px');
		}
	}
});

// キープ、ヒストリーデータ読み取り
if(window.addEventListener){
  addEventListener('message', changeShowShortcutSize, false);
}else{
  attachEvent('onmessage', changeShowShortcutSize);
}

function changeShowShortcutSize(event){
	//キープデータを受け取った場合
	if(event.origin == CstKakakuDomain){
		var res;
		try {
			res = jQuery.parseJSON(event.data);
		} catch(e) {
			return;
		}
		//パラメータがない場合、処理を行わない
		if(res == null || res.keepAllCnt == null || res.keepState == null){
			return;
		}

		//製品情報を保存
		if(typeof(res.allproductids) !== "undefined"){
			categorycd = res.categoryCD;
			productids = res.productids;
			allproductids = res.allproductids;
		}

		//ショートカットボタン状態更新
		if (res.keepAllCnt > 0) {
			jQuery('#f_keep').css('display', '');
			KeepShortcutDisplay = true;
		}else{
			jQuery('#f_keep').css('display', 'none');
			KeepShortcutDisplay = false;
		}
		
		//キープボタン状態更新
		jQuery('#bt_keep').removeClass();
		jQuery('#bt_keep span').html("この製品をキープ");
		if (res.keepState === "true") {
			jQuery('#bt_keep').addClass("keep_on");
			jQuery('#bt_keep span').html("キープ済み");
		}
		
		//吹き出し更新
		if(res.keepResult === "add"){
			keep_txt =	jQuery(
				'<div id="pop_keep02"><div>'+
				'<p><a onclick="RedirectToKeepItemView();" href="javascript:void(0);">キープ一覧を見る</a></p>'+
				'</div></div>'
			);
		}else if(res.keepResult === "delete"){
			keep_txt =	jQuery(
				'<div id="pop_keep03"><div>'+
				'<p>キープ一覧から<br>製品を削除しました。</p>' +
				'</div></div>'
			);
		}else if(res.keepResult === "over20"){
		keep_txt =	jQuery(
				'<div id="pop_keep04"><div>'+
				'<p>キープできる製品数はカテゴリごとに最大20件となります。<br>キープ一覧から製品を削除してください。</p>'+
				'<p><a onclick="RedirectToKeepItemView();" href="javascript:void(0);">キープ一覧を見る</a></p>'+
				'</div></div>'
			);
		}else if(res.keepResult === "over99"){
		keep_txt =	jQuery(
				'<div id="pop_keep04"><div>'+
				'<p>キープ可能な製品は最大で99件です。<br>キープ一覧から製品を削除してください。</p>'+
				'<p><a onclick="RedirectToKeepItemView();" href="javascript:void(0);">キープ一覧を見る</a></p>'+
				'</div></div>'
			);
		}else if(res.keepResult === "first"){
		keep_txt =	jQuery(
				'<div id="pop_keep01"><div>'+
				'<p>キープ一覧に製品を追加しました。<br>複数の製品を一覧で比較できます。</p>'+
				'<p><a onclick="RedirectToKeepItemView();" href="javascript:void(0);">キープ一覧を見る</a></p>'+
				'</div></div>'
			);

		}else{
		keep_txt =	jQuery(
				''
			);
		}
		if(typeof(res.keepResult) !== "undefined"){
			jQuery('#bt_keep').data('powertipjq', keep_txt );
			openPowerTip('#bt_keep');
		}
	}
	//ヒストリーデータを受け取った場合
	if(event.origin == CstHistoryDomain){
		var res;
		try {
			res = jQuery.parseJSON(event.data);
			if (res === null) return;
		} catch(e) {
			return;
		}
		//パラメータがない場合、処理を行わない
		if(typeof(res.display) == "undefined"){
			return;
		}

		if (res.display === "false") {
			jQuery('#f_history').css('display', 'none');
			HistoryShortcutDisplay = false;
		}else{
			jQuery('#f_history').css('display', '');
			HistoryShortcutDisplay = true;
		}
	}

	if(event.origin === CstKakakuDomain || event.origin === CstHistoryDomain){
		//キープ、ヒストリー両データが揃った場合、ショートカット枠の表示調整
		if(KeepShortcutDisplay !== undefined && HistoryShortcutDisplay !== undefined){
			jQuery('#f_keep').css('height','49px');
		
			//キープ登録ボタン表示
			if(document.getElementById("bt_keep") != null){
				jQuery("#bt_keep").css("display", "block");
			}
			if(KeepShortcutDisplay === true || HistoryShortcutDisplay === true){
				jQuery('#ShowShortcutBox').css('display', '');
				if(KeepShortcutDisplay === true && HistoryShortcutDisplay === true){
					if(document.getElementById("historyNavi") != null){
						jQuery('#historyNavi').css({ 'bottom' : '0px' });
					}else if(document.getElementById("historyNaviAll") != null){
						jQuery('#historyNaviAll').css({ 'bottom' : '0px' });
					}
				}else{
					if(document.getElementById("historyNavi") != null){
						jQuery('#historyNavi').css({ 'bottom' : '-45px' });
						jQuery('#f_keep').css('height','55px');
					}else if(document.getElementById("historyNaviAll") != null){
						jQuery('#historyNaviAll').css({ 'bottom' : '-45px' });
						jQuery('#f_keep').css('height','55px');
					}
				}
				if(KeepShortcutDisplay === false){
					jQuery('#historyFrame').css('padding-top','4px');				
				}else{
					jQuery('#historyFrame').css('padding-top','0px');			
				}
			}else{
				jQuery('#ShowShortcutBox').css('display', 'none');
			}
			//ディスプレイ表示
			if (typeof(flgBuySmartBanner) == "undefined"){
				if(document.getElementById("historyContainer") != null){
					jQuery("#historyContainer").css("display", "block");
				}else if(document.getElementById("historyContainerAll") != null){
					jQuery("#historyContainerAll").css("display", "block");
				}
			}
		}
	}
}

function openPowerTip(target){
	jQuery.powerTip.show(jQuery(target));
}

//**********************************************************************
// RedirectToKeep()
// キープ画面へpost遷移
//**********************************************************************
var categorycd = "";
var productids = "";
var allproductids = "";
function RedirectToKeepItemView()
{
	//dummyページを表示し、画面遷移
	var target = "win_keep";
	var form = document.createElement("form");	
	form.action = CstKakakuDomain + "/keep/keep.aspx?lid=keep_" + categorycd;	
	form.target = target;
	form.method = 'post';
	var qs = new Array();
	qs.unshift(jQuery.parseJSON("{\"type\":\"hidden\",\"name\":\"ispost\",\"value\":\"1\"}"));
	qs.unshift(jQuery.parseJSON("{\"type\":\"hidden\",\"name\":\"ccd\",\"value\":\""  + categorycd + "\"}"));
	qs.unshift(jQuery.parseJSON("{\"type\":\"hidden\",\"name\":\"prds\",\"value\":\"" + productids + "\"}"));
	qs.unshift(jQuery.parseJSON("{\"type\":\"hidden\",\"name\":\"allprds\",\"value\":\"" + allproductids + "\"}"));
	for (var i = 0; i < qs.length; i++) {
		var ol = qs[i];
		var input = document.createElement("input");
		for (var p in ol) {
		    input.setAttribute(p, ol[p]);
		}
		form.appendChild(input);
	}
	window.open("", target, "width=1240, height=900, menubar=1, toolbar=1, location=1, resizable=1, scrollbars=1").focus();
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(form);
	form.submit();
	body.removeChild(form);
}