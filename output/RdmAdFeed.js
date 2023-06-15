<!--
//DATA
var ctopRdm = [
'<div class="c-feed_cell"><a href="https:\/\/kakakumag.com\/camera\/?id=19637" class="c-feed_item c-feed_item-magazine" onclick="onclickcatalyst_togroupsite(\'waku_top_exp_E_102442_3151\');" target="_blank"><div class="c-feed_visual" data-original="https:\/\/img1.kakaku.k-img.com\/images\/maga\/19637\/250_130.jpg"></div><div class="c-feed_lines"><p class="p-cat p-cat-magazine c-feed_lines_cat">価格.comマガジン - カメラ</p><p class="c-feed_lines_ttl c-feed_lines_ttl-icon-1">キヤノン「EOS R10」を携えて秩父市の羊山公園と三峯神社を巡る</p></div><!-- /c-feed_lines --></a><!-- /c-feed_item --></div><!-- /c-feed_cell -->',
'<div class="c-feed_cell"><a href="https:\/\/kakakumag.com\/pc-smartphone\/?id=19656" class="c-feed_item c-feed_item-magazine" onclick="onclickcatalyst_togroupsite(\'waku_top_exp_E_102549_3151\');" target="_blank"><div class="c-feed_visual" data-original="https:\/\/img1.kakaku.k-img.com\/images\/maga\/19656\/250.jpg"></div><div class="c-feed_lines"><p class="p-cat p-cat-magazine c-feed_lines_cat">価格.comマガジン - PC・スマホ</p><p class="c-feed_lines_ttl c-feed_lines_ttl-icon-1">「Galaxy S23 Ultra」と「S22 Ultra」を徹底比較！</p></div><!-- /c-feed_lines --></a><!-- /c-feed_item --></div><!-- /c-feed_cell -->',
'<div class="c-feed_cell"><a href="https:\/\/kakakumag.com\/hobby\/?id=19662" class="c-feed_item c-feed_item-magazine" onclick="onclickcatalyst_togroupsite(\'waku_top_exp_E_102604_3151\');" target="_blank"><div class="c-feed_visual" data-original="https:\/\/img1.kakaku.k-img.com\/images\/maga\/19662\/img250.jpg"></div><div class="c-feed_lines"><p class="p-cat p-cat-magazine c-feed_lines_cat">価格.comマガジン - ホビー</p><p class="c-feed_lines_ttl c-feed_lines_ttl-icon-1">南国風味「テリア トロピカル メンソール」に爽快ブラック登場</p></div><!-- /c-feed_lines --></a><!-- /c-feed_item --></div><!-- /c-feed_cell -->',
'<div class="c-feed_cell"><a href="https:\/\/kakakumag.com\/camera\/?id=19633" class="c-feed_item c-feed_item-magazine" onclick="onclickcatalyst_togroupsite(\'waku_top_exp_E_102602_3151\');" target="_blank"><div class="c-feed_visual" data-original="https:\/\/img1.kakaku.k-img.com\/images\/maga\/19633\/250_130.jpg"></div><div class="c-feed_lines"><p class="p-cat p-cat-magazine c-feed_lines_cat">価格.comマガジン - カメラ</p><p class="c-feed_lines_ttl c-feed_lines_ttl-icon-1">湿気からカメラ・レンズを守ろう！対策方法と人気の防湿庫を紹介</p></div><!-- /c-feed_lines --></a><!-- /c-feed_item --></div><!-- /c-feed_cell -->',
'<div class="c-feed_cell"><a href="https:\/\/kakakumag.com\/sports\/?id=19659" class="c-feed_item c-feed_item-magazine" onclick="onclickcatalyst_togroupsite(\'waku_top_exp_E_102600_3151\');" target="_blank"><div class="c-feed_visual" data-original="https:\/\/img1.kakaku.k-img.com\/images\/maga\/19659\/250.jpg"></div><div class="c-feed_lines"><p class="p-cat p-cat-magazine c-feed_lines_cat">価格.comマガジン - スポーツ</p><p class="c-feed_lines_ttl c-feed_lines_ttl-icon-1">価格.comゴルフ「人気売れ筋ランキング」5月に売れたのはどれ？</p></div><!-- /c-feed_lines --></a><!-- /c-feed_item --></div><!-- /c-feed_cell -->'
];

function NAVI_1(){
	var len = ctopRdm.length;
	if(len > 0){
		if(len > 1){
			while (len){
				var j = Math.floor(Math.random()*len);
				var t = ctopRdm[--len];
				ctopRdm[len] = ctopRdm[j];
				ctopRdm[j] = t;
			}
		}
		for(i=0; i < 1; i++){
			document.write(ctopRdm[i]);
		}
	}
}
//-->