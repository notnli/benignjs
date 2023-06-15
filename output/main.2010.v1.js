/*
 * 顶部多语种下拉
 */
function topLangMore(){
    if($('.js_top_header_lang_more').length<1)return false;
    $('.js_top_header_lang_more').hover(
        function(){
            $(this).addClass('over');
        },
        function(){
            $(this).removeClass('over');
        }
    );
};
/*
 * 地方频道下拉
 */
function localChannelMore(){
    if($('.js_localChannel').length<1)return false;
    $('.js_localChannel').hover(
        function(){
            $(this).addClass('over');
        },
        function(){
            $(this).removeClass('over');
        }
    );
};

/*
显示时间
 */
function DispDate() {
    var _elem = document.getElementById('js-dispDate'),
        now = new Date(),
      Week=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
      curDate = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() + ' ' + Week[now.getDay()];
    if ( !_elem ) { return false };
    document.getElementById('js-dispDate').innerHTML = curDate;
};

/*
设为首页
 */
function SetHome() {
    var _elem = document.getElementById("js-setHome");
    if ( !_elem ) { return false };
    _elem.onclick = function() {
        var url = window.location;
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        } else {
            alert("您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
    }
};

/*
 * 首屏分地区tab切换
 */
function spotlightTab(){
    if ($('#spotlight').length < 1)return false;
    $('#spotlight').slide({
        titCell:'.spotTabHd span',
        mainCell:'.spotTabCon',
        titOnClassName:'active',
        trigger:'mouseover',
        effect:'fade'
    });
};

/*
 * 轮播焦点图
 */
function indexFocus(){
    if($('.js-focus').length < 1)return false;
    var slideAmount = $('.js-focus .focusConItem').length;
    $('.focusSlider').html('');
    for(var i = 0; i < slideAmount; i++){
        $('.focusSlider').append('<i></i>');
    }
    $('.focus').slide({
        titCell: '.focusSlider i',
        mainCell: '.focusCon',
        prevCell: '#focusPrev',
        nextCell: '#focusNext',
        titOnClassName: 'current',
        trigger: 'click',
        effect: 'left',
        autoPlay: true
    });
    $('.js-focus').hover(function(){
        $('#focusNav').show();
    }, function(){
        $('#focusNav').hide();
    });
};

/*
 * 轮播图样式
 */
function slideFocusFn(){
    if($('.slide_bd').length<1)return false;
    $('.slide_bd').slide({
        mainCell:'ul',
        prevCell:'.prev',
        nextCell:'.next',
        effect:'left',
    });
};

/*
 * 单张轮播
 */
function visSlideScroll(){
	if($('.js_slide_vis').length<1)return false;
    var _this = $('.js_slide_vis');
	_this.slide({
		mainCell:'ul',
		autoPage:true,
		effect:'leftLoop',
		autoPlay:true,
		vis:6,
		pnLoop:false
	});
    $('#js_slide_vis_btnshow').hover(function(){
        _this.addClass('show');
    },function(){
        _this.removeClass('show');
    });
};

/**/
function cityMove(){
    if($('#js-city-move').length<1)return false;
    $('#js-city-move').slide({
        mainCell:'ul',
        prevCell:'.prev',
        nextCell:'.next',
        effect:'left',
    });
};

function showHotIcon(){
    $('#js-show-hot').find('span').each(function(){
        var _this = $(this);
        if(_this.html()!='')_this.addClass('hot');
    });
};

/*
 * 下方多语种展示
 */
function moreLangShow(){
    var _this = $('#js-more-lang');
    _this.find('i').on('click',function(){
        _this.toggleClass('show');
    });
};

function goTop(){
    if($('#js-gotop').length<1)return false;
    $(window).scroll(function(){     
        var wh = $(window).height(),
            st = $(window).scrollTop();  
        if(st > wh/2){
            $('#js-gotop').fadeIn(300); 
        }else{    
            $('#js-gotop').fadeOut(300);    
        }  
    });
    $('#js-gotop').on('click',function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},500);
    });
};

function rankTopShow(){
    $('#js-ranktop').find('i').each(function(i){
        $(this).html('0'+(i+1));
    });
};

/*
 * 军事模块整体、首屏焦点图军事区
 */
function setMilitaryCon(){
    if ($('#js-c-military').length<1)return false;
    var ts = new Date().getTime();
    
    function milSlideTab(){
        if ($('#js-mil-tab').length<1)return false;
        $('#js-mil-tab').slide({
            titCell:'.hd h2',
            mainCell:'.slide_bd',
            titOnClassName:'active',
            trigger:'mouseover',
            effect:'fade'
        });
    };
    
    $.ajax({
        url: '//junshi.china.com/api/artical?ts=' + ts,
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function() {
          if ( typeof(mili_data) != "object" ) { return false; };

          // 首屏焦点图，军事模块
          if ( mili_data.banner.length > 0  ) {
              var elemF1 = $('#js-mil-focus1'),
                  elemF2 = $('#js-mil-focus2'),
                  htmlF1 = '',
                  htmlF2 = '',
                  dataF = mili_data.banner;
              for ( var i=0; i<1; i++ ) {
                  htmlF1 += '<div class="item">';
                  htmlF1 += '  <a target="_blank" href="'+ dataF[i].url +'">';
                  htmlF1 += '    <img alt="'+ dataF[i].title +'" src="'+ dataF[i].img +'">';
                  htmlF1 += '    <h3>'+ dataF[i].title +'</h3>';
                  htmlF1 += '  </a>';
                  htmlF1 += '</div>';
              };
              for ( var i=1; i<3; i++ ) {
                  htmlF2 += '<div class="item">';
                  htmlF2 += '  <a target="_blank" href="'+ dataF[i].url +'">';
                  htmlF2 += '    <img alt="'+ dataF[i].title +'" src="'+ dataF[i].img +'">';
                  htmlF2 += '    <h3>'+ dataF[i].title +'</h3>';
                  htmlF2 += '  </a>';
                  htmlF2 += '</div>';
              };

              elemF1.html(htmlF1);
              elemF2.html(htmlF2);
          };

          // 左侧大图、两个小图
          if ( mili_data.left_pic.length > 0  ) {
              var elem_L1 = $('#js-mil-imgWide'),
                  elem_L2 = $('#js-mil-imgList'),
                  html_L1 = '',
                  html_L2 = '',
                  data_L = mili_data.left_pic;
              for ( var i=0; i<1; i++ ) {
                  html_L1 += '<div class="item">';
                  html_L1 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L1 += '    <img alt="'+ data_L[i].short_title +'" src="'+ data_L[i].art_img +'">';
                  html_L1 += '    <h3>'+ data_L[i].short_title +'</h3>';
                  html_L1 += '  </a>';
                  html_L1 += '</div>';
              };
              for ( var i=1; i<3; i++ ) {
                  html_L2 += '<div class="item">';
                  html_L2 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L2 += '    <img alt="'+ data_L[i].short_title +'" src="'+ data_L[i].art_img +'">';
                  html_L2 += '    <h3>'+ data_L[i].short_title +'</h3>';
                  html_L2 += '  </a>';
                  html_L2 += '</div>';
              };

              elem_L1.html(html_L1);
              elem_L2.html(html_L2);
          };
          
          // 中间14条
          if( mili_data.middle_art.length > 0){
              var elem_M = $('#js-mil-longList'),
                  html_M_t = '',
                  html_M_b = '',
                  data_M = mili_data.middle_art,
                  data_M_Length = data_M.length<12?data_M.length:12;
              for(var j=0;j<data_M_Length;j++){
                if(j<6){
                    if(j<1){
                        html_M_t += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                    }else{
                        html_M_t += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                    }
                }else{
                    if(j<7){
                        html_M_b += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                    }else{
                        html_M_b += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                    }
                }
              };
              $('#js-mil-longListTop').html(html_M_t);
              $('#js-mil-longListBottom').html(html_M_b);
          };

          // 右侧-军事评论
          if ( mili_data.right_topic.length > 0  ) {
              var elem_R1 = $('#js-mil-jspl'),
                  html_R1 = '',
                  data_R1 = mili_data.right_topic;
              for ( var m=0; m<3; m++ ) {
                  if ( m == 0 ) {
                    html_R1 += '<li class="current"><a href="'+ data_R1[m].url +'" target="_blank"><img src="'+ data_R1[m].art_img +'"><h3>'+ data_R1[m].short_title +'</h3></a></li>';
                  } else {
                    html_R1 += '<li><a href="'+ data_R1[m].url +'" target="_blank"><h3>'+ data_R1[m].short_title +'</h3></a></li>';
                  }
              };
              elem_R1.html(html_R1);
          };
          // 右侧-军史秘闻
          if ( mili_data.right_history.length > 0  ) {
              var elem_R2 = $('#js-mil-jsmw'),
                  html_R2 = '',
                  data_R2 = mili_data.right_history;
              for ( var n=0; n<3; n++ ) {
                  if ( n == 0 ) {
                    html_R2 += '<li class="current"><a href="'+ data_R2[n].url +'" target="_blank"><img src="'+ data_R2[n].art_img +'"><h3>'+ data_R2[n].short_title +'</h3></a></li>';
                  } else {
                    html_R2 += '<li><a href="'+ data_R2[n].url +'" target="_blank"><h3>'+ data_R2[n].short_title +'</h3></a></li>';
                  }
              };
              elem_R2.html(html_R2);
          };
            //
            milSlideTab();
            //军事右侧展开列表
            /*$('.js-sideFeatList>li').on('mouseover',function(){
                $(this).addClass('current').siblings().removeClass('current');
            });*/
        },
        error: function(){
            console.log('失败');
        }
    });
};

/*
首屏，要闻区，军事数据
 */
function setMilitaryYw(){
    if ($('#js-yw-hangye').length<1)return false;
    var ts = new Date().getTime();
    $.ajax({
        url: '//junshi.china.com/api/oneArtical?ts=' + ts,
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function(){
            if(typeof(mili_one_data)!= 'object')return false;
            if(mili_one_data.length>0){
                var elem = $('#js-yw-hangye'),
                    html = '',
                    data = mili_one_data;
                for( var i=0; i<1; i++ ){
                    html += '<a href="//military.china.com" target="_blank">军事</a>&nbsp;<a href="'+ data[i].url +'" target="_blank">'+ data[i].title +'</a>';
                };
                elem.html(html);
            };
        },
        error: function(){
            console.log('失败');
        }
    })
};

/*
 * 财经模块整体数据
 */
function setEconomyCon(){
    if($('#js-c-economy').length<1)return false;
    $.ajax({
        url: '//finance.china.com/api/article',
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function(){
            if(typeof(cjchina_data)!='object')return false;
          // 左侧大图、两个小图
          if ( cjchina_data.focusMap.length > 0  ) {
              var elem_L1 = $('#js-cj-imgWide'),
                  elem_L2 = $('#js-cj-imgList'),
                  html_L1 = '',
                  html_L2 = '',
                  data_L = cjchina_data.focusMap;
              for ( var i=0; i<1; i++ ) {
                  html_L1 += '<div class="item">';
                  html_L1 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L1 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].img +'">';
                  html_L1 += '    <h3>'+ data_L[i].title +'</h3>';
                  html_L1 += '  </a>';
                  html_L1 += '</div>';
              };
              for ( var i=1; i<3; i++ ) {
                  html_L2 += '<div class="item">';
                  html_L2 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L2 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].img +'">';
                  html_L2 += '    <h3>'+ data_L[i].title +'</h3>';
                  html_L2 += '  </a>';
                  html_L2 += '</div>';
              };

              elem_L1.html(html_L1);
              elem_L2.html(html_L2);
          };

        // 中间12条
        if(cjchina_data.middle.length>0){
            var html_M_t = '',
                html_M_b = '',
                data_M = cjchina_data.middle,
                data_M_Length = data_M.length<12?data_M.length:12;
            for(var j=0;j<data_M_Length;j++){
                if(j<6){
                    if(j<1){
                    html_M_t += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                    }else{
                        html_M_t += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                    }
                }else{
                    if(j<7){
                    html_M_b += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                    }else{
                        html_M_b += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                    }
                    //html_M_b += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                }
            };
            $('#js-cj-longListTop').html(html_M_t);
            $('#js-cj-longListBottom').html(html_M_b);
        };

        // 右侧-天天315
        if(cjchina_data.consume.length>0){
            var elem_R1 = $('#js-cj-consume1'),
                  html_R1 = '',
                  data_R = cjchina_data.consume;
            for ( var m=0; m<5; m++ ) {
                  if ( m == 0 ) {
                    html_R1 += '<li><a href="'+ data_R[m].url +'" target="_blank"><h3>'+ data_R[m].title +'</h3></a></li>';
                  } else {
                    html_R1 += '<li><a href="'+ data_R[m].url +'" target="_blank"><h3>'+ data_R[m].title +'</h3></a></li>';
                  }
            };
            elem_R1.html(html_R1);
            /*$('#js-cj-consume1>li').on('mouseover',function(){
                $(this).addClass('current').siblings().removeClass('current');
            });*/
        };

          // 右侧-财富故事
          if ( cjchina_data.jiu.length > 0  ) {
              var elem_R3 = $('#js-cj-cfgs'),
                  html_R3 = '',
                  data_R3 = cjchina_data.jiu;
              for( var n=0; n<2; n++ ){
                  html_R3 += '<li><a href="'+ data_R3[n].url +'" class="item_img" target="_blank"><img src="'+ data_R3[n].art_img +'" alt="'+ data_R3[n].title +'"></a><h3 class="item_txt"><a href="'+ data_R3[n].url +'" target="_blank">'+ data_R3[n].title +'</a></h3></li>';
              };
              elem_R3.html(html_R3);
          };

        },
        error: function() {
          console.log('失败');
        }
    })
};

/*
 * 汽车搜索框
 */
function autoSearch(){
    if($('.js-autoSearch').length < 1)return false;
    
    $.getScript('//auto.china.com/index/search_js?r=20190531',function(){
        $('.auto-main-search').html(auto_search_content + '');
    // 首页顶部选择框
    function indexMainSearch(){
        if($('.auto-main-search').length<1)return false;
        $brand = $("#js-carpicker-brand1");
        $spec = $("#js-carpicker-spec1");

      //展开品牌
      $brand.find(".atcn-select__selected").click(function() {
        $(this).parent().toggleClass("active");
      });
      //点击ABC
      $brand.find('.brand .index li').on('click', function(event) {
        var $this = $(this),
          navT = $this.text(),
          $list = $this.closest('.brand').find('.list');

        $this.addClass('active').siblings().removeClass('active');
        $list.animate({
          scrollTop: $list.find('dt:contains(' + navT + ')').prop('offsetTop')
        }, 'fast');
      });
      //展开二级列表
      $brand.find('.brand .list dd').on('click', function(event) {
        var $this = $(this);
        var pid = $this.attr('data-value');
        console.log($this);
        $('#sl' + pid).show().siblings().hide();
        $subList = $this.closest('.pop-wrapper').find('.series');
        $subList.length > 0 ? $subList.show() : false;
      });

      //展开车型
      $brand.find('.series .list dd').on('click', function(event) {
        var $this = $(this);


        $spec.length > 0 ? $spec.removeClass('disabled') : false;
        $this.closest('.atcn-select').removeClass('active');
        $this.closest('.atcn-select').find('.atcn-select_text').html($this.text());
      });

      //展开车型列表
      $brand.find('.series .list dd').on('click', function(event) {
        console.log(event);
        event.stopPropagation();
        $spec.removeClass('disabled');
        var xid = $(this).attr('data-value');
        $('#js-carpicker-spec1 .atcn-select_text').text('选择车型(可不选)');
        xiId = xid;
        kuId = 0;
        //根据车系id获得车款
        $.get("https://auto.china.com/index/getKuan/xid/" + xid, function(res) {
          $('.spec').html(res);
        });

      });
      $spec.find(".atcn-select__selected").click(function() {
        event.stopPropagation();
        $(this).parent().toggleClass("active");
        $spec.find(".spec").show();
      });

      $('.spec').on("click", ".listdd", function() {
        var $this = $(this);
        kuId = $this.attr('data-value');
        $spec.find('.atcn-select_text').html($this.text());
        $spec.removeClass('active');
      });
    };
        indexMainSearch();
    });
};
var kuId = 0;
xiId = 0;
function goToAuto(){
    if(kuId){
        window.open('//auto.china.com/spec/' + kuId);
    }else if(xiId){
        window.open('//auto.china.com/' + xiId);
    }
};

// 加载地方站信息
/* ads add by zhangyan 20091116, ck20150923*/
var allcookies = document.cookie;
// Look for the start of the cookie named "version"
var pos = allcookies.indexOf("area_name=");
var value = ""; 
// If we find a cookie by that name, extract and use its value
if (pos != -1) 
{
var start = pos + 10; // Start of cookie value
var end = allcookies.indexOf(";", start); // End of cookie value
if (end == -1) end = allcookies.length;
value = allcookies.substring(start, end); // Extract the value
}
if (value.length < 1)
{
document.write('<scr'+'ipt type="text/javas'+'cript" src="//iparea.china.com/query"></scr'+'ipt>');
}
/*end ads*/

// $(document).ready(function(){
    cn.getScript("//www.china.com/zh_cn/js1905/home_city_data2019.js?5875");
// });

/*
 * 房产模块整体数据
 */
function setFangCon(){
    $.ajax({
        url: '//finance.china.com/api/fangArticle',
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function(){
            if(typeof(cjchina_data)!='object')return false;
            if($('#js-fang-img').length>0 && cjchina_data.branner.length>0){
                var _htmlimg = '',
                    _dataBranner = cjchina_data.branner;
                for(var i=0; i<1; i++){
                    _htmlimg += '<div class="item"><a href="'+ _dataBranner[i].url +'" target="_blank"><img alt="'+ _dataBranner[i].title +'" src="'+ _dataBranner[i].img +'"><h3>'+ _dataBranner[i].title +'</h3></a></div>';
                }
                $('#js-fang-img').html(_htmlimg);
            }
            if($('#js-fang-txt').length>0 && cjchina_data.art_list.length>0){
                var _htmltxt = '',
                    _dataList = cjchina_data.art_list;
                for(var i=0; i<5; i++){
                    _htmltxt += '<li><a href="'+ _dataList[i].url +'" target="_blank">'+ _dataList[i].title +'</a></li>';
                }
                $('#js-fang-txt').html(_htmltxt);
            }
            cjchina_data.branner
            cjchina_data.art_list
        },
        error: function(){
            console.log('失败');
        }
    })
};

function hotCon(callback){
    if($('#js-ranktop').length<1)return false;
    function getLength(str){
        var realLength=0,len=str.length,charCode=-1;
        for(var i=0; i<len; i++){
            charCode = str.charCodeAt(i);
            if(charCode>=0 && charCode<=128) realLength+=1;
            else realLength+=2;
        }
        return realLength;
    };
    $.ajax({
        url: '//rank.china.com/rank/cms/news/day/rank.js',
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function(){
            var d_t = day_top['305'];
            if(typeof(d_t)!='object')return false;
            if(d_t.list.length>0){
                var _html = '';
                var _data = d_t.list;
                var _dataLength = _data.length;
                var _c = 0;
                for(var i=0; i<_dataLength; i++){
                    if(getLength(_data[i].title)>30){
                        _html += '<li style="background-position:left 13px;margin-top:5px;"><h3 style="height:60px;"><a href="'+ _data[i].url +'" target="_blank">'+ _data[i].title +'</a></h3></li>';
                        _c++;
                    }
                    if(_c>5)break;
                }
                $('#js-ranktop').html(_html);
            };
            if(callback)callback();
        },
        error: function(){
            if(callback)callback();
        }
    });
};





/*
 * 佛学模块整体数据
 */
function setFoCon() {
    if ($('#js-c-fo').length < 1) return false;
    $.ajax({
        url: '//third-data.china.com/api/get-fo-index/index?access-token=vIHZ0HC7pR5sm321',
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function(data) {

            // console.log(fochina_data['20001205'].length);

            if (typeof(fochina_data) != 'object') return false;

            // 左侧大图
            if (fochina_data['20001205'].length > 0) {
                var elem_L1 = $('#js-fo-imgWide'),
                    html_L1 = '',
                    data_L1 = fochina_data['20001205'];

                    html_L1 += '<div class="item">';
                    html_L1 += '  <a target="_blank" href="' + data_L1[0].redirect_url + '">';
                    html_L1 += '    <img alt="' + data_L1[0].title + '" src="' + data_L1[0].old_pic + '">';
                    html_L1 += '    <h3>' + data_L1[0].title + '</h3>';
                    html_L1 += '  </a>';
                    html_L1 += '</div>';

                elem_L1.html(html_L1);
            };
            
            // 左侧小图1
            if (fochina_data['20001286'].length > 0) {
                var elem_L2 = $('#js-fo-imgList1'),
                    html_L2 = '',
                    data_L2 = fochina_data['20001286'];

                    html_L2 += '  <a target="_blank" href="' + data_L2[0].redirect_url + '">';
                    html_L2 += '    <img alt="' + data_L2[0].title + '" src="' + data_L2[0].old_pic + '">';
                    html_L2 += '    <h3>' + data_L2[0].title + '</h3>';
                    html_L2 += '  </a>';

                elem_L2.html(html_L2);
            };
            
            // 左侧小图2
            if (fochina_data['20001209'].length > 0) {
                var elem_L3 = $('#js-fo-imgList2'),
                    html_L3 = '',
                    data_L3 = fochina_data['20001209'];

                    html_L3 += '  <a target="_blank" href="' + data_L3[0].redirect_url + '">';
                    html_L3 += '    <img alt="' + data_L3[0].title + '" src="' + data_L3[0].old_pic + '">';
                    html_L3 += '    <h3>' + data_L3[0].title + '</h3>';
                    html_L3 += '  </a>';

                elem_L3.html(html_L3);
            };

            // 中间上6条
            if (fochina_data['20001205'].length > 0) {
                var html_M_t = '',
                    data_M = fochina_data['20001205'],
                    data_M_Length = data_M.length < 7 ? data_M.length : 7;
                for (var j = 0; j < data_M_Length; j++) {
                    if (j > 0 && j < 7) {
                        if (j == 1) {
                            html_M_t += '<li><strong><a href="' + data_M[j].redirect_url + '" target="_blank">' + data_M[j].title + '</a></strong></li>';
                        } else {
                            html_M_t += '<li><a href="' + data_M[j].redirect_url + '" target="_blank">' + data_M[j].title + '</a></li>';
                        }
                    }
                };
                $('#js-fo-longListTop').html(html_M_t);
            };

            // 中间下6条
            if (fochina_data['20001215'].length > 0) {
                var html_M_b = '',
                    data_M = fochina_data['20001215'],
                    data_M_Length = data_M.length < 6 ? data_M.length : 6;
                for (var j = 0; j < data_M_Length; j++) {
                    if (j < 6) {
                        if (j == 0) {
                            html_M_b += '<li><strong><a href="' + data_M[j].redirect_url + '" target="_blank">' + data_M[j].title + '</a></strong></li>';
                        } else {
                            html_M_b += '<li><a href="' + data_M[j].redirect_url + '" target="_blank">' + data_M[j].title + '</a></li>';
                        }
                    }
                };
                $('#js-fo-longListBottom').html(html_M_b);
            };

            // 右侧-精彩视频
            if (fochina_data['20001228'].length > 0) {
                var elem_R1 = $('#js-fo-video'),
                    html_R1 = '',
                    data_R1 = fochina_data['20001228'];
                for (var m = 0; m < 2; m++) {
                    html_R1 += '<li><a href="' + data_R1[m].redirect_url + '" class="item_img item_video" target="_blank"><img src="' + data_R1[m].old_pic + '" alt="' + data_R1[m].title + '"></a><h3 class="item_txt"><a href="' + data_R1[m].redirect_url + '" target="_blank">' + data_R1[m].title + '</a></h3></li>';
                };
                elem_R1.html(html_R1);
                /*$('#js-fo-consume1>li').on('mouseover',function(){
                    $(this).addClass('current').siblings().removeClass('current');
                });*/
            };

            // 右侧-佛学专题
            if (fochina_data['20001226'].length > 0) {
                var elem_R3 = $('#js-fo-zt'),
                    html_R3 = '',
                    data_R3 = fochina_data['20001226'];

                    html_R3 += '<li><a href="' + data_R3[0].redirect_url + '" class="item_img" target="_blank"><img src="' + data_R3[0].old_pic + '" alt="' + data_R3[0].title + '"></a><h3 class="item_txt"><a href="' + data_R3[0].redirect_url + '" target="_blank">' + data_R3[0].title + '</a></h3></li>';
                    
                elem_R3.html(html_R3);
            };

        },
        error: function() {
            console.log('失败');
        }
    })
};



/**
 * 整体函数调用相关
 */
function init(){
    
    hotCon();
    
    
    // 顶部多语种下拉
    topLangMore();
    // 地方频道下拉
    localChannelMore();
    // 显示时间
    DispDate();
    // 设为首页
    SetHome();
    // 轮播焦点图
    indexFocus();
    // 顶部排行榜
    rankTopShow();
    // 首屏分地区tab切换
    spotlightTab();
    //
    showHotIcon();
    //
    slideFocusFn();
    //
    visSlideScroll();
    //
    moreLangShow();
    
    //财经模块整体数据
    setEconomyCon();
    //汽车搜索
    autoSearch();
    //地产模块
    setFangCon();
    
    //军事模块整体、首屏焦点图军事区
    // setMilitaryCon();
    //首屏，要闻区，军事数据
    //setMilitaryYw();

    // 佛学模块整体数据
    setFoCon();

    //
    goTop();

    //login
    china_api_login({
        id:'headNavLogin',
        initHTML:'<a id="headNav_login" href="//passport.china.com/" class="login">登录</a><a id="headNav_reg" href="//passport.china.com/reg/mobile" class="reg">注册</a>',
        logonHTML:'<em class="headNavLogout"><span title="[F7:nickname /]">[F7:nickname /]</span>[F7:out /]</em>',
        succeed:{
            // loginOk:function(){fixedHeaderSub();},
            // outOk:function(){fixedHeaderSub();}
        }
    });
};

$(function(){
    init();
});