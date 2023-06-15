$(function () {
  iSearch('#selectClass', '#selectform');
  $('.topleft li').hover(
    function () {
      $(this).find('p').show();
      $(this).find('span').addClass('show');
    },
    function () {
      $(this).find('p').hide();
      $(this).find('span').removeClass('show');
    }
  );
  $('.log').hover(
    function () {
      $('#userLogin').show();
      $(this).find('a').addClass('show');
    },
    function () {
      $('#userLogin').hide();
      $(this).find('a').removeClass('show');
    }
  );
  $('#selectClass').hover(
    function () {
      $(this).find('ul').show();
    },
    function () {
      $(this).find('ul').hide();
    }
  );
  $('#selectClass ul li').click(function () {
    var html = $(this).html();
    var qb = $(this).attr('qb');
    $('#selectClass span').html(html);
    $('#selectClass span').attr('qb', qb);
    $('#selectClass ul').hide();
  });
  $('.picvieo li').hover(
    function () {
      $(this).find('p').show();
    },
    function () {
      $(this).find('p').hide();
    }
  );
  $('.otherweb .gozh').click(function () {
    $('.gzh').toggle();
  });
  picFuns('.hotpics', 0, '.prev', '.next');
  picFuns('.zdbox', 2, '.zprev', '.znext');
  for (var i = 0; i <= 7; i++) {
    picFuns('#hotcapic' + i + '', 0, '#hprev' + i + '', '#hnext' + i + '');
  }
  tabs('.hotcatebt span', '.hotcapic blockquote', 'show', 'mouseover');
  tabs('.prophtit1 span', '.prophbox1 blockquote', 'show', 'click');
  tabs('.prophtit2 span', '.prophbox2 blockquote', 'show', 'click');
  tabs('.sotit span', '.soft blockquote', 'show', 'click');
  togshow('.prophbox dl');

  if (window.screen.width < 750) {
    $('.midnav,#foot').css('width', '1200px');
  }
  $('.prophbox dl.show').find('img.delaypic').lazyload();
});
function iSearch(id, form) {
  //搜索
  $(form).submit(function () {
    var oWd = $(this).find('.seltext').val();
    var oType = $(id + ' span').attr('qb');
    if (oType == 'wy') {
      document
        .getElementById('selectform')
        .setAttribute('action', 'http://search.yesky.com/search.do');
    } else if (oType == 'cp') {
      document
        .getElementById('selectform')
        .setAttribute('action', 'http://search.yesky.com/searchproduct.do');
    } else if (oType == 'tp') {
      document
        .getElementById('selectform')
        .setAttribute('action', 'http://search.yesky.com/searchpicture.do');
    } else if (oType == 'bj') {
      document
        .getElementById('selectform')
        .setAttribute('action', 'http://search.yesky.com/searchproduct.do');
    } else if (oType == 'xz') {
      document
        .getElementById('selectform')
        .setAttribute('action', 'http://search.yesky.com/searchdownload.do');
    }
  });
}
$('.icon-shousuo').click(function () {
  $('.selsbmt').submit();
});
//tab栏切换
function tabs(tab, object, active, event) {
  $(tab).bind(event, function () {
    $(this).addClass(active).siblings().removeClass(active);
    $(object)
      .eq($(this).index())
      .addClass(active)
      .siblings()
      .removeClass(active);
    $(object).find('img.delaypic').lazyload();
  });
}
//下拉
function togshow(obj) {
  $(obj).mouseover(function () {
    $(this).addClass('show').siblings().removeClass('show');
    $(this).find('img.delaypic').lazyload();
  });
}
//轮播图
function picFuns(obj, num, arra, arrb) {
  var sWidth = $(obj + ' ul li').width();
  var len = $(obj + '  ul li').length;
  var index = 0;
  var adTimer;
  var timea = 5000; //  time ctrl
  $(obj + ' ul').css('width', sWidth * len);
  //intialize function
  function init() {
    $(obj).hover(
      function () {
        clearInterval(adTimer);
      },
      function () {
        timer();
      }
    );
    timer();
  }
  function showImg(index) {
    var newLeft = -index * sWidth;
    $(obj + ' ul')
      .stop()
      .animate(
        {
          left: newLeft,
        },
        300
      );
  }
  function showTab(index) {
    $(obj + ' div span')
      .eq(index)
      .addClass('show')
      .siblings()
      .removeClass('show');
  }
  function timer() {
    adTimer = setInterval(function () {
      index++;
      if (index == len - num) {
        index = 0;
      }
      showImg(index);
      showTab(index);
    }, timea);
  }
  $(arra).click(function () {
    index -= 1;
    if (index == -1) {
      index = len - num - 1;
    }
    showImg(index);
    showTab(index);
  });
  $(arrb).click(function () {
    index += 1;
    if (index == len - num) {
      index = 0;
    }
    showImg(index);
    showTab(index);
  });

  $(obj + ' div span').click(function () {
    index = $(this).index();
    showImg(index);
    showTab(index);
  });

  init();
}
//收藏
function AddFavorite(title, url) {
  try {
    window.external.addFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, '');
    } catch (e) {
      alert(
        '抱歉，您所使用的浏览器无法完成此操作。\n\n请使用快捷键Ctrl+D进行添加！'
      );
    }
  }
}
//判断浏览器
function bro() {
  var user = navigator.userAgent.toLowerCase();
  var bro;
  var bro1 = {};
  (bro = user.match(/version\/([\d.]+).*safari/)) ? (bro1.safari = bro[1]) : 0;
  if (bro1.safari) {
  }
}
