KISSY.add("wangpu/version-config",function(){return{modulesVersion:"0.9.4",init:{wangpuVersion:"1.7.5"},multi:{wangpuVersion:"1.3.0"}}}),KISSY.add("wangpu/c/utils/index",function(){var a=function(){return"4567"===location.port||/cdef.taobao.net/.test(location.host)?"local":/(tmall|taobao)\.net/.test(location.host)?"daily":"production"}(),b={env:a,isTaobao:/taobao\.(com|net)/.test(location.host),isTmall:/tmall\.(com|net)/.test(location.host),getUrlParam:function(a,b){var c=b||window.location.href,d=encodeURIComponent(a)+"=",e=c.indexOf(d),f=null;if(e>-1){var g=c.indexOf("&",e);-1===g&&(g=c.length),f=decodeURIComponent(c.substring(e+d.length,g))}return f}};return b}),KISSY.add("init-async",function(a,b,c){var d="daily"===c.env,e="local"===c.env,f=b.init.wangpuVersion;KISSY.config({combine:e||d?!1:!0,debug:e||d?!0:!1,packages:[{name:"wangpu",tag:"20140409",base:e?"/repos/wangpu/src/":"//g.alicdn.com/shop/wangpu/"+f,ignorePackageNameInUri:!0,charset:"utf-8"}]});try{var g=document.domain.split(".");document.domain=g.slice(g.length-2).join(".")}catch(h){}KISSY.use("wangpu/dc-async",function(a,b){b.init({assetsHost:window.g_config.assetsHost,pageType:window.g_config.pageType,lazyContainers:"body",isvParams:window.shop_config?window.shop_config.isvStat:{}})})},{requires:["wangpu/version-config","wangpu/c/utils/index"]}),KISSY.use("init-async");