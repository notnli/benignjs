/* Git */
/* =========================================================
 /script/history/history_navi_top.js
 140116 sm13
 ※prototype.jsの有り無しどちらのページでも対応するために
　 “jQuery”を省略せずに記述しています。
========================================================= */


jQuery(function ($) {
    //IE6判定
    var _ua = (function () {
        return {
            ltIE6: typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined"
        }
    })();
    //IE6以外
    if (_ua.ltIE6 == false) {
        //IE透過png対応
        if (navigator.userAgent.indexOf("MSIE") != -1) {
            $('#historyFrame img').each(function () {
                if ($(this).attr('src').indexOf('.png') != -1) {
                    $(this).css({
                        'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                            $(this).attr('src') +
                            '", sizingMethod="image");'
                    });
                }
            });
        }
        //初期の位置
        var w = $(window).width();
        var x = 1291;
        var historyContainer = $("#historyContainer");
        var historyNavi = $("#historyNavi");
        if (w <= x) {
            $(historyContainer).css("width", "100%");
            $(historyNavi).css("right", "0");
        } else {
            $(historyContainer).css("width", "1035px");
            $(historyNavi).css("left", "auto");
        }
        //ウィンドウリサイズ時
        $(window).resize(function () {
            var w = $(window).width();
            var x = 1291;
            if (w <= x) {
                $(historyContainer).css("width", "100%");
                $(historyNavi).css("left", "");
                $(historyNavi).css("margin-left", "");
                $(historyNavi).css("right", "0");
            } else {
                $(historyContainer).css("width", "1035px");
                $(historyNavi).css("right", "");
                $(historyNavi).css("margin-right", "");
                $(historyNavi).css("left", "auto");
            }
        });
        //マウスオーバー
        $("#historyFrame a").css("opacity", "0.8");
        $("#historyFrame a").hover(function () {
            $(this).fadeTo(100, 1.0);
        }, function () {
            $(this).fadeTo(100, 0.8);
        });
    }
});

//ウィンドウを閉じる
function displaynone() {
	jQuery("#historyFrame #naviClose").css({
		"display": "none"
	});
	jQuery("#historyFrame #naviBtn").css({
		"display": "none"
	});
	jQuery("#historyFrame #naviTxt").css({
		"display": "block"
	});
	setTimeout(function () {
		jQuery("#historyFrame #naviTxt").fadeTo("1500", 0);
	}, 4000);
}

// cookie取得 160509 sm29
// function getCookie(name) {
//     var dc = document.cookie;
//     var prefix = name + "=";
//     var begin = dc.indexOf("; " + prefix);
//     if (begin == -1) {
//         begin = dc.indexOf(prefix);
//         if (begin != 0) return null;
//     }
//     else
//     {
//         begin += 2;
//         var end = document.cookie.indexOf(";", begin);
//         if (end == -1) {
//         end = dc.length;
//         }
//     }
//     return unescape(dc.substring(begin + prefix.length, end));
// }
// // cookie取得 end

// // 右固定広告 160509 sm29
// jQuery(function ($) {

//     //ユーザーエージェント判定
//     var _ua = (function (u) {
//         return {
//             ltIE6: typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
//             isIE: (u.indexOf('msie') > -1) && (u.indexOf('opera') == -1) || (u.indexOf('trident/7') > -1),
//             isEdge: (u.indexOf('edge') > -1),
//             Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
//               || u.indexOf("ipad") != -1
//               || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
//               || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
//               || u.indexOf("kindle") != -1
//               || u.indexOf("silk") != -1
//               || u.indexOf("playbook") != -1
//         }
//     })(window.navigator.userAgent.toLowerCase());
//     //ジャック広告判定（ジャック広告非掲載時には判定文をコメントアウト）
//     //if ($('.s-jack').length == 0) {
//       //IE6・タブレット以外
//       if (_ua.ltIE6 == false && _ua.Tablet == false) {
//         function keepWatch() {
//           if ($('#f_history').is(':hidden') && $('#f_keep').is(':hidden')){
//             $('.fixedRightAd').css({'bottom': 10});
//           } else if($('#f_keep').is(':hidden') || $('#f_history').is(':hidden')){
//             $('.fixedRightAd').css({'bottom': 60});
//           } else {
//             $('.fixedRightAd').css({'bottom': 110});
//           }
//         }
//         var bnrStr = [{
//           'bnrLink': 'https://kakaku.com/campaign/kcpoint-back-202303/?lid=kcpoint-back-202303_all',  // ★★★★★★ バナーリンク ★★★★★★
//           'bnrImgPath': 'https://img1.kakaku.k-img.com/images/campaign/kcpoint-back-202303/bnr/96x200.png', // ★★★★★★ バナー画像パス ★★★★★★
//           'bnrImgAlt': '' // ★★★★★★ バナー画像alt ★★★★★★
//         }];
//         if(document.location.protocol === 'https:'){
//           for(var i = 0; i < bnrStr.length; i++){
//             if(bnrStr[i].bnrLink){
//               bnrStr[i].bnrLink = bnrStr[i].bnrLink.replace('http:', 'https:').replace('http%3A', 'https%3A');
//             }
//           }
//         }
//         var bnrRandom = Math.floor(Math.random() * bnrStr.length);
//         var fixedRightAdHtml = '<div class="fixedRightAdContainer"><div class="fixedRightAd"><span class="fixedRightAdClose" onclick="fixedRightAdClose()">' +
//                                 '<img src="https://img1.kakaku.k-img.com/images/ad/fixedbnr/btn_close_gray.png" alt="" width="23" height="23"></span><div class="fixedRightAdBnr">' +
//                                 '<a href="' + bnrStr[bnrRandom].bnrLink +'" target="_blank">' +
//                                 '<img src="' + bnrStr[bnrRandom].bnrImgPath + '" alt="' + bnrStr[bnrRandom].bnrImgAlt + '" width="96" height="200"></a></div></div></div>';
//         var fixedRightAdContainer = '.fixedRightAdContainer';
//         var fixedRightAd = '.fixedRightAd';
//         var w = $(window).width();
//         var x = 1291;
//         var n = 0;
//         var count = 0;
//         var fixedRightAdClose = getCookie("fixedRightAdClose2303"); // ★★★★★★ キャッシュ名 ★★★★★★
//         $(fixedRightAdHtml).insertBefore('#historyContainer');
//         keepWatch();
//         var showFlag = 0;
//         function fixedRightAdStyle() {
//           var w = $(window).width();
//           var x = 1291;
//           if (fixedRightAdClose === 'on' || $('.fixedRightAdContainer').hasClass('is-hide')) {
//               $(fixedRightAdContainer).hide();
//           } else if (w <= x) {
//             $(fixedRightAdContainer).show();
//             $(fixedRightAdContainer).css("width", "100%");
//             $(fixedRightAd).css("right", "0");
//             $(fixedRightAd).css("left", "");
//             showFlag++;
//           } else {
//             	$(fixedRightAdContainer).show();
//               $(fixedRightAdContainer).css("width", "1035px");
//               $(fixedRightAd).css("left", "auto");
//               $(fixedRightAd).css("right", "");
//               showFlag++;
//           }
//         }


//         // サイドバナーに衝突時、全ジャンルバナーを非表示にする設定
//         var sideBnr = $('.c-jack-sideBnr_cell');
//         var winH = $(window).height();
//         var winScrollpx = $(window).scrollTop();
//         var sideBnrH;
//         var bnrH;

//         function sideBnrCollisionInit() {
//           setTimeout(function(){
//             // 全ジャンルバナーのみ表示されている場合
//             bnrH = 205 + 20; 

//             // 閲覧履歴 and キープ and 全ジャンルバナーが表示されている場合
//             if($('#f_history').is(':visible') && $('#f_keep').is(':visible')){
//               bnrH = 205 + 129;
//             }

//             // （閲覧履歴 or キープ） and 全ジャンルバナーが表示されている場合
//             else if($('#f_history').is(':visible') || $('#f_keep').is(':visible')) {
//               bnrH = 205 + 84;
//             }

//             // サイドバナーの高さを取得
//             sideBnrH = sideBnr.height() + sideBnr.offset().top;

//             // 透明にしていた全ジャンルバナーを表示
//             $('.is-jack .fixedRightAd').css('opacity',1);

//             // サイドバナーに衝突時、全ジャンルバナーを非表示
//             sideBnrCollision();
            
//           },100);
//         }

//         // サイドバナーに衝突時、全ジャンルバナーを非表示
//         function sideBnrCollision() {
//           winScrollpx = $(window).scrollTop();
//           if ((winScrollpx + winH > sideBnrH + bnrH) && !(fixedRightAdClose === 'on' || $('.fixedRightAdContainer').hasClass('is-hide'))) {
//             $('.fixedRightAd').show();
//           } else {
//             $('.fixedRightAd').hide();
//           }
//         }

//         // スクロール
//         $(window).on('scroll',function () {
//           if($('.is-jack')[0]){
//             sideBnrCollision();
//           }
//         });

//         // IE&Edge
//         if(_ua.isIE || _ua.isEdge){
//           setInterval(keepWatch,1000);
//         } else {
//           // キープが表示されたら実行
//           if($('#f_history').is(':visible')){
//             keepWatch();
//             fixedRightAdStyle();

//             if($('.is-jack')[0]){
//               sideBnrCollisionInit();
//             }
//           }
//         }
//         // リサイズ時実行
//         $(window).on('resize',function () {
//           if($('#f_history').is(':visible') || $('#f_keep').is(':visible') || count > 0){
//             keepWatch();
//             fixedRightAdStyle();
//           }

//           if($('.is-jack')[0]){
//             winH = $(window).height();
//             sideBnrCollision();
//           }
//         });
//         // すべて読み込まれてからアニメーション実行
//         $(window).load(function(){
//           keepWatch();
//           fixedRightAdStyle();

//           if($('.is-jack')[0]){
//             sideBnrCollisionInit();
//           }

//           count++;
//         });
//         // IE&Edge
//         setTimeout(function(){
//           if((_ua.isIE || _ua.isEdge) && count === 0){
//             keepWatch();
//             fixedRightAdStyle();

//             if($('.is-jack')[0]){
//               sideBnrCollisionInit();
//             }

//             count++;
//           }
//         },5000);



//         // 広告被り回避 -- ここから
//         var ovX = [];
//         var ovY = [];
//         var tH, tW, tOT, tOL;
//         var aT, aB, aL, aR;
//         $(window).on('load scroll resize', function () {
//            $('.c-ad-size3, .is-fixedAdNone').each(function (i) { // 固定広告かぶらせたくない箇所にはis-fixedAdNoneのクラスを付与
//             tH = $(this).height();
//             tW = $(this).width();
//             tOT = $(this).offset().top;
//             tOL = $(this).offset().left;
//             ovX[i] = [];
//             ovY[i] = [];
//             ovX[i].push(tOL);
//             ovX[i].push(tW + tOL);
//             ovY[i].push(tOT);
//             ovY[i].push(tH + tOT);
//           });
//           aT = $('#historyNavi').offset().top - 200 - 20;
//           aB = aT + 200;
//           aL = $('#historyNavi').offset().left;
//           aR = aL + 96;
//           var flag = 0;
//           for(var i = 0;i < ovX.length;i++) {
//               if (ovX[i][0] < aL && aR < ovX[i][1]) { // 左右中央
//                 if (aT < ovY[i][0] && ovY[i][0] < aB) { // 上部被り
//                   flag++;
//                 } else if (aT < ovY[i][1] && ovY[i][1] < aB) { // 下部被り
//                   flag++;
//                 } else if (ovY[i][0] < aT && aB < ovY[i][1]) { // 全被り
//                   flag++;
//                 }
//               } else if (ovY[i][0] < aT && aB < ovY[i][1]) { // 天地中央
//                 if (aL < ovX[i][0] && ovX[i][0] < aR) { // 左被り
//                   flag++;
//                 } else if (aL < ovX[i][1] && ovX[i][1] < aR) { // 右被り
//                   flag++;
//                 }
//               } else if (aT < ovY[i][0] && ovY[i][0] < aB) { // 上部被り
//                 if (aL < ovX[i][0] && ovX[i][0] < aR) { // 左被り
//                   flag++;
//                 } else if (aL < ovX[i][1] && ovX[i][1] < aR) { // 右被り
//                   flag++;
//                 }
//               } else if (aT < ovY[i][1] && ovY[i][1] < aB) { // 下部被り
//                  if (aL < ovX[i][0] && ovX[i][0] < aR) { // 左被り
//                   flag++;
//                 } else if (aL < ovX[i][1] && ovX[i][1] < aR) { // 右被り
//                   flag++;
//                 }
//               }
//            }
//            if (showFlag > 0 && !($('.fixedRightAdContainer').hasClass('is-hide'))) {
//              $('.fixedRightAdContainer').show();
//            }
//            if(flag > 0) {
//             $('.fixedRightAdContainer').hide();
//            }
//         });
//         // 広告被り回避 -- ここまで
//       }
//     // }
// });
// //右固定広告 end

// //右固定広告非表示 160509 sm29
// function fixedRightAdClose() {
// 	jQuery(".fixedRightAdContainer").addClass('is-hide').hide();
//   var strCookie;
//   var date1,date2;
//   var days = 30;   //cookieの期限
//   date1 = new Date();
//   date1.setTime(date1.getTime() + days*24*60*60*1000);
//   date2 = date1.toUTCString();
//   strCookie = 'fixedRightAdClose2303=on; '; // ★★★★★★ キャッシュ名 ★★★★★★
//   strCookie += 'expires=' + date2 + ';';
//   strCookie += 'domain=.kakaku.com; ';
//   strCookie += 'path=/; ';
//   document.cookie = strCookie;
// }
// //右固定広告非表示 end