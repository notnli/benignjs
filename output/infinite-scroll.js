(function(){function findLastElementInScroll(){for(lastElementInScroll=infiniteScrollParent.lastElementChild;lastElementInScroll.previousElementSibling&&-1==lastElementInScroll.className.indexOf("news-item")&&-1==lastElementInScroll.className.indexOf("post")&&-1==lastElementInScroll.className.indexOf("news-text-item")&&-1!==lastElementInScroll.className.indexOf("ad-news-inline");)lastElementInScroll=lastElementInScroll.previousElementSibling;lastElementInScrollID=(lastElementInScroll.querySelector(".news-item a:first-child")||lastElementInScroll.querySelector(".feat-item-link")).href.match(/(\d+)\.php$/)[1]}function setLoading(e){loadingMoreElements=e,e?$gsm.tag("div",{class:"loading-spinner"},"",infiniteScrollParent):infiniteScrollParent.removeChild(infiniteScrollParent.querySelector(".loading-spinner"))}function setFooter(e){footerBottom.style.display="bottom"==e?"block":"none",footerLeft.style.display="left"==e?"block":"none"}function itemRenderer(item){var domElement=document.createElement("div"),SMALL_THUMB_FOLDER=/\/-(\d+)?x?(\d+)?(m)?(w\d)?\//,BIG_THUMB_FOLDER="/-728x314/";if("promo"==item.type)domElement.className="post",domElement.innerHTML='<article class="feat-item flex-item">\t <div class="meta-line">    \t <span class="meta-item-time"><i class="head-icon icon-clock2"></i>'+item.date+'</span>        <a class="meta-item-comments" href="'+item.commentHref+'"><i class="head-icon icon-comments"></i>'+item.comments+'</a>\t </div>    <header class="feat-item-header">        <h3 class="feat-item-title">'+item.title+'</h3>    </header>    <span class="feat-item-image" style="background-image:url(\''+item.img.replace(SMALL_THUMB_FOLDER,BIG_THUMB_FOLDER)+'\');"></span>    <a href="'+item.href+'" class="feat-item-link link-faux"></a></article>';else if("news"==item.type)domElement.className="news-item",domElement.innerHTML='<a href="'+item.href+'">\t<div class="news-item-media-wrap left">   \t<img src="'+item.img+'" alt="'+item.title+'">\t</div>\t<h3>'+item.title+"</h3>\t<p>"+item.text+'</p></a><div class="meta-line">    <span class="meta-item-time"><i class="head-icon icon-clock2"></i>'+item.date+'</span>    <a class="meta-item-comments" href="'+item.commentHref+'"><i class="head-icon icon-comments"></i>'+item.comments+"</a></div>";else if("text"==item.type)domElement.className="news-item news-item-text",domElement.innerHTML='<a href="'+item.href+'">    <h3>'+item.title+'</h3>    <p></p></a><div class="meta-line">    <span class="meta-item-time"><i class="head-icon icon-clock2"></i>'+item.date+'</span>    <a class="meta-item-comments" href="'+item.commentHref+'"><i class="head-icon icon-comments"></i>'+item.comments+"</a></div>";else if("ad"==item.type){domElement.classList="ad";for(var scripts=item.text.split("</script>"),i=0;i<scripts.length;i++){var match=scripts[i].match(/<script[^>]*?src="([^"]+?)"[^>]*?>/);if(match)$gsm.tag("script",{src:match[1]},"",domElement);else{var script=scripts[i].replace(/<script[^>]*?>/,"");eval(script)}}domElement.style.height="200px"}return domElement}var MORE_NEWS_URL=DESKTOP_BASE_URL+"news-json.php3",infiniteScrollParent=document.querySelector("div.floating-title"),lastElementInScroll,lastElementInScrollID,loadingMoreElements=!1,hasMoreElementsToLoad=!0;findLastElementInScroll();var footerLeft=document.querySelector("#footer-side"),footerBottom=document.querySelector("#footer"),footerLeftOriginalTop;setFooter("left");var lastButOneElement=footerLeft.previousElementSibling;$gsm.addEventListener(window,"scroll",function(e){hasMoreElementsToLoad&&(""!==footerLeft.style.position&&(window.scrollY||window.pageYOffset)<footerLeftOriginalTop?(footerLeft.style.position="",footerLeft.style.left=""):"fixed"!==footerLeft.style.position&&footerLeft.getBoundingClientRect().bottom<window.innerHeight&&(footerLeftOriginalTop=window.scrollY||window.pageYOffset,footerLeft.style.position="fixed",footerLeft.style.left="auto"),loadingMoreElements||lastElementInScroll.getBoundingClientRect().top<document.documentElement.clientHeight&&(setLoading(!0),$gsm.xhr("GET",MORE_NEWS_URL,function(e){for(var t=0;t<e.news.length;t++)infiniteScrollParent.appendChild(itemRenderer(e.news[t]));findLastElementInScroll(),hasMoreElementsToLoad=e.hasMore,setLoading(!1),hasMoreElementsToLoad||setFooter("bottom")},{nAfterID:lastElementInScrollID},function(){hasMoreElementsToLoad=!1,setLoading(!1)})))})})();