// 使用方法

var slideBoxList = []

// Slide.init(轮播图容器，container元素，slide元素，配置项)
var Slide = function (domBox, container, slideName, config) {
  if (!domBox) {
    console.error('没有指定轮播图外层Dom!')
  }
  config = config || {}
  // 初始化样式
  this._addStyle()
  this._addClass(domBox, "people-slide")
  // 设置标号
  domBox.setAttribute('boxindex', slideBoxList.length)
  this._box = domBox
  this.slideList = domBox.querySelectorAll(slideName)
  this.activeEl = this.slideList[0]
  this.slideName = slideName
  this.activeIndex = 0
  this.config = config
  this.slideCount = this.slideList.length
  this.slideWidth = domBox.offsetWidth
  this.slideHeight = domBox.offsetHeight
  this.sliderUlWidth = this.slideWidth * this.slideCount
  // 设置每个slide的class
  for (var index = 0; index < this.slideList.length; index++) {
    var element = this.slideList[index];
    // 兼容IE写法
    this._addClass(element, "slide")
    this._addClass(element, "slide-" + index)
    element.style.width = this.slideWidth + 'px'
    element.style.height = this.slideHeight + 'px'
  }
  // 盒子
  this.container = domBox.querySelector(container)
  this.container.style.width = this.sliderUlWidth + 'px'
  this.container.style.height = this.slideHeight + 'px'
  if (this.slideList.length > 1) {
    this.container.style.marginLeft = -this.slideWidth + 'px'
  }
  
  this.container.style.left = '0px'
  // 添加盒子的class
  this._addClass(this.container, "people-container")
  slideBoxList.push(this)
  // 兼容IE写法
  if (this.container.prepend) {
    var slideList = this.container.querySelectorAll(slideName)
    var last = slideList[slideList.length - 1]
    this.container.prepend(last)
  } else if (this.container.insertBefore) {
    var slideList = this.container.querySelectorAll(slideName)
    var last = slideList[slideList.length - 1]
    this.container.insertBefore(last, this.container.childNodes[0])
  }
  var _this = this
  // 判断是否自动播放
  if (config.autoPlay && this.slideList.length > 1) {
    setTimeout(function () { _this.startAutoPlay(config.autoPlay); }, 0);
  }

  // 判断是否有上一个下一个按钮配置
  if (config.nextEl) {
    
    var button = domBox.querySelector(config.nextEl)
    //console.log(config.nextEl)
    if (button) {
      button.onclick = function () {
        _this.next()
      }
    }
  }
  if (config.prevEl) {
    var button = domBox.querySelector(config.prevEl)
    // console.log(domBox)
    if (button) {
      button.onclick = function () {
        _this.prev()
      }
    }
  }
  // 判断是否有分页器
  if (config.numberPaginationEL) {
    var el = domBox.querySelector(config.numberPaginationEL)
    if (el) this.numberPaginationEL = el
  }

  // 初始化成功也算改变slide
  _this._changeSlide()

  // 定义一些方法
  this.next = function () {
    var _this = this
    if (_this.isBusy || this.slideList.length < 2) return
    // 设置状态为忙碌
    _this.isBusy = true
    
    _this.container.style.transition = 'left 0.2s'
    _this.container.style.left = -this.slideWidth + 'px'
    this.activeIndex++
    if (this.activeIndex >= this.slideCount) this.activeIndex = 0
    setTimeout(function () {
      _this.container.style.transition = ''
      var slideList = _this.container.querySelectorAll(_this.slideName)
      _this._appendChild(_this.container, slideList[0])
      _this.container.style.left = '0px'
    }, this.slideList.length > 2 ? 300 : 0);
    // 轮播图改变事件
    _this._changeSlide()
    // 三秒后解除忙碌状态
    setTimeout(function () {
      _this.isBusy = false
    }, 300);
    // console.log('下一个')
  }
  this.prev = function () {
    var _this = this
    if (_this.isBusy || this.slideList.length < 2) return
    // 设置状态为忙碌
    _this.isBusy = true
    this.container.style.transition = 'left 0.2s'
    _this.container.style.left = this.slideWidth + 'px'
    this.activeIndex--
    if (this.activeIndex < 0) this.activeIndex = this.slideCount - 1
    // 轮播图改变事件
    _this._changeSlide()
    setTimeout(function () {
      _this.container.style.transition = ''
      if (_this.container.prepend) {
        var slideList = _this.container.querySelectorAll(_this.slideName)
        _this.container.prepend(slideList[slideList.length - 1])
      } else if (_this.container.insertBefore) {
        var slideList = _this.container.querySelectorAll(_this.slideName)
        var last = slideList[slideList.length - 1]
        _this.container.insertBefore(last, _this.container.childNodes[0])
      }
      _this.container.style.left = '0px'
    }, this.slideList.length > 2 ? 300 : 0);
    // 三秒后解除忙碌状态
    setTimeout(function () {
      _this.isBusy = false
    }, 300);
  }
  this.startAutoPlay = function (interval) {
    // 没有设置自动播放间隔默认三秒
    interval = interval || 3000
    if (!this._autoPlayIsInit) this._initAutoPlay(interval)
    if (this.clock != undefined) return
    // console.log('开始自动播放')
    var _this = this
    this.clock = setInterval(function () {
      // console.log('自动播放!')
      if (!_this.isBusy) _this.next()
    }, interval);
  }
  this.stopAutoPlay = function () {
    if (this.clock == undefined) return
    // console.log('停止自动播放')
    clearInterval(this.clock)
    this.clock = undefined
  }
  this.resize = function (e) {
    //console.log(e)
    this.slideWidth = domBox.offsetWidth
    this.slideHeight = domBox.offsetHeight
    this.sliderUlWidth = this.slideWidth * this.slideCount
    //console.log(this.slideWidth)
    // 设置每个slide的class
    for (var index = 0; index < this.slideList.length; index++) {
      var element = this.slideList[index];
      // 兼容IE写法
      this._addClass(element, "slide")
      this._addClass(element, "slide-" + index)
      element.style.width = this.slideWidth + 'px'
      element.style.height = this.slideHeight + 'px'
    }
    this.container.style.width = this.sliderUlWidth + 'px'
    this.container.style.height = this.slideHeight + 'px'
    if (this.slideList.length > 1) {
      this.container.style.marginLeft = -this.slideWidth + 'px'
    }
  }
}

Slide.prototype._addClass = function (dom, className) {
  if (dom.classList) {
    dom.classList.add(className)
  } else {
    dom.className += " " + className
  }
}

// 兼容IE的事件监听
Slide.prototype._addEventListener = function (dom, name, func) {
  if (dom.attachEvent) {    
    dom.attachEvent(name, func);    
  } else if (window.addEventListener) {    
    dom.addEventListener(name, func, false);      
  }  
}
// 兼容IE的appendChild
Slide.prototype._appendChild = function (dom, appendDom) {
  if (dom.append) {
    dom.append(appendDom)
  } else if (dom.appendChild) {
    dom.appendChild(appendDom)
  }
}

// 添加必要的css代码
Slide.prototype._addStyle = function (dom, appendDom) {
  var styleElement = document.getElementById('peopleSlideStyle');
  if (!styleElement) {
    var needStyle = ".people-slide {position: relative;overflow: hidden;}.people-container {margin: 0;padding: 0;list-style: none;position: relative;height: 100%;}"
    needStyle += ".people-container:after {content:'';height: 0;line-height: 0;display: block;visibility: hidden;clear: both;zoom: 1;}"
    needStyle += ".people-container .slide {position: relative;display: block;float: left;margin: 0;padding: 0;}"
    
    if (document.all) {
      var styleSheet = document.createStyleSheet("");
      styleSheet.cssText = needStyle;
    } else { 
      var style = document.createElement('style'); 
      style.type = 'text/css'; 
      style.innerHTML = needStyle; 
      document.getElementsByTagName('HEAD').item(0).appendChild(style); 
    }
  }
}

Slide.prototype._initAutoPlay = function (interval) {
  var _this = this
  this._autoPlayIsInit = true
  interval = interval || 3000
  // 鼠标悬浮停止轮播
  this._addEventListener(this._box, 'mouseover', function (e) {
    setTimeout(function() {
      _this.stopAutoPlay()
    }, 0);
  })
  // 鼠标移出开始轮播
  this._addEventListener(this._box, 'mouseout', function (e) {
    setTimeout(function() {
      if (_this.clock == undefined) _this.startAutoPlay(interval)
    }, 0);
  })
}

Slide.prototype._changeSlide = function () {
  if (this.numberPaginationEL) {
    this.numberPaginationEL.innerHTML = '<b class="active-index">' + (this.activeIndex + 1) + '</b><span class="separator">/</span><em class="slide-count">' + (this.slideCount) + '</em>'
  }
  // 清除上一个活跃class
  if (this.activeEl.classList) {
    this.activeEl.classList.remove('active-slide')
  } else {
    this.activeEl.className = this.activeEl.className.replace(/(^|\s+)active-slide(?=$|\s+)/,"")
  }
  // 给活跃slide设置class
  this.activeEl = this.slideList[this.activeIndex]
  this._addClass(this.activeEl, 'active-slide')
  
  // 轮播图改变回调
  if (this.config.onSlideChange) {
    this.config.onSlideChange(this)
  }
}

function showPlayerBox(a) {
  // 瀹瑰櫒
  if (a.box) box = a.box
  clientWidth = document.body.clientWidth;
  var b = a.name ? a.name: "_v_p_" + Math.round(1E3 * Math.random()),
  c = a.width ? a.width: 600;
  if (600 >= clientWidth && isSafari) var c = parseInt(.9 * clientWidth),
  d = parseInt(c / 1.3333);
  else "string" == typeof c && -1 != c.indexOf("%") && isSafari ? isUC ? (c = getVideoWH(c), d = parseInt(c / 1.3333)) : d = "auto": d = a.height ? a.height: 497.5;
  _replay = a.replay;
  _objName = b;
  a.cdn = "100,0,0,0";
  a.sl = "5";
  objname = b;
  if (isSafari) {
    safariObj.w = c;
    safariObj.h = d;
    safariObj.name = b;
    safariObj.ap = a.autoplay;
    safariObj.fullscreen = a.fullscreen;
    safariObj.ori = a.ori;
    if (null == safariObj.ap || void 0 == safariObj.ap) safariObj.ap = !0;
    safariObj.toid = a.showid;
    safariObj.xml = a.id;
    safariObj.xml || (safariObj.xml = a.xml);
    safariObj.xml ? $.getScript('http://tvplayer.people.com.cn/getXML.php?path=' + safariObj.xml + "&callback=playForMobile&ios=" + isIOS + "&ori=" + safariObj.ori,function(){}) : (isHTTPError = !0, showVideoCodeInPage())
  } else {
    var e = [],
    f;
    for (f in a) e.push(f + "=" + _$_getTransStr(a[f]));
    isMaxthon() && e.push("ism=1");
    e.push("key=" + _$_getPageKey());
    e = e.join("&");
    1 == a.fullscreen && (d = c = "100%");
    a = 2 == a.skin ? "http://tv.people.com.cn/img/2011ptv2/playerByOsmfnb.swf" + (isMaxthon() ? "?" + Math.random() : "") : "http://tv.people.com.cn/img/2011ptv2/playerByOsmf.swf" + (isMaxthon() ? "?" + Math.random() : "");
    box.innerHTML ='<object id="' + b + '" name="' + b + '" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,1,85,3" width="' + c + '" height="' + d + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ><param name="movie" value="' + a + '" /><param name="FlashVars" value="' + e + '" /><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><embed name="' + b + '" width="' + c + '" height="' + d + '" src="' + a + '" wmode="opaque" allowFullScreen="true" allowScriptAccess="always" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" FlashVars="' + e + '" type="application/x-shockwave-flash"></embed></object>'
  }
}