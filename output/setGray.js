// 置灰数据
if (window.apub_5e857945 && window.apub_5e857945.skin) {
  apub_5e857945.skin.forEach((item) => {
    if (item.title == '腾讯网首页') {
      var beginTime = item.starttime;
      var overTime = item.endtime;
      var nowTime = new Date().getTime();
      if (beginTime && overTime && nowTime > (new Date(`${beginTime}+08:00`).getTime()) && nowTime < (new Date(`${overTime}+08:00`).getTime())) {
        // 兼容IE9及以下和谷歌
        $('html').addClass('grayBody');
        $('head').append('<style>*{filter:gray; color:gray;}</style>');
      }
    }
  });
}