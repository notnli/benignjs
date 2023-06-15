let networkid = '22689983766';

<!--HB-->


<!-- END HB-->
<!-- var path dynamic  parent,child/aplmcm/child/-->
<!-- native -->
<!-- optional var path player tag ID and Publisher ID --> 

let gambannerpath = '/7047,'+networkid+'/apl/pod/'; <!-- var path ad manager parent,child/aplmcm/child/ -->
let interstitialpath = '/7047,'+networkid+'/apl/pod'; <!-- interstitial path -->  
let anchorpath = '/21939239661,'+networkid+'/apl/anchor/anchortop'; <!-- interstitial path -->
let native = '/21939239661,'+networkid+'/apl/nativefeedapl'; <!-- native path -->

<!-- ************ Settings above ************* -->


var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

<!--Ad Manager Definition --> 

var gptAdSlots = [];
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  gptAdSlots[1] =  googletag.defineSlot(gambannerpath+'cube', [[300,250],[336,280]], 'div-gpt-ad-8176806-1')
             .addService(googletag.pubads());
  gptAdSlots[2] =  googletag.defineSlot(gambannerpath+'cube2', [[300,250],[336,280]], 'div-gpt-ad-8176806-2')
             .addService(googletag.pubads());
  gptAdSlots[3] =  googletag.defineSlot(gambannerpath+'cube3', [[300,250],[336,280]], 'div-gpt-ad-8176806-3')
             .addService(googletag.pubads());
  gptAdSlots[4] =  googletag.defineSlot(gambannerpath+'rich', [[728,90],[320,50],[320,100]], 'div-gpt-ad-8176806-4')
             .addService(googletag.pubads());
   var mapping = googletag.sizeMapping()
  .addSize([640, 480], [728,90])
  .addSize([360, 640], [[320, 50],[320, 100]])
  .build();
  gptAdSlots[4].defineSizeMapping(mapping); 
  gptAdSlots[5] =  googletag.defineSlot(gambannerpath+'rich2', [[728,90],[320,50],[320,100]], 'div-gpt-ad-8176806-5')
             .addService(googletag.pubads());
  var mapping = googletag.sizeMapping()
  .addSize([640, 480], [728,90])
  .addSize([360, 640], [[320, 50],[320, 100]])
  .build();
  gptAdSlots[5].defineSizeMapping(mapping); 
 gptAdSlots[11] =  googletag.defineSlot(native, ['fluid'], 'nativefluid')
             .addService(googletag.pubads());
  gptAdSlots[6] =  googletag.defineSlot(gambannerpath+'sky', [[120,600],[160,600],[300,600]], 'div-gpt-ad-8176806-6')
             .addService(googletag.pubads());
  gptAdSlots[7] =  googletag.defineSlot(gambannerpath+'responsive', [[970,250],[970,90],[728,90],[300,250]], 'div-gpt-ad-8176806-7')
             .addService(googletag.pubads());
var mapping = googletag.sizeMapping()
  .addSize([640, 480], [970,250])
  .addSize([360, 640], [300, 250])
  .build();
  gptAdSlots[7].defineSizeMapping(mapping);
    gptAdSlots[8] =  googletag.defineSlot(gambannerpath+'responsive3', [[970,250],[970,90],[728,90],[300,250]], 'div-gpt-ad-8176806-8')
             .addService(googletag.pubads());

var mapping = googletag.sizeMapping()
  .addSize([640, 480], [970,250])
  .addSize([360, 640], [300, 250])
  .build();
  gptAdSlots[8].defineSizeMapping(mapping);
  gptAdSlots[9] =  googletag.defineSlot(gambannerpath+'responsive4', [[970,250],[970,90],[728,90],[300,250]], 'div-gpt-ad-8176806-9')
             .addService(googletag.pubads());

var mapping = googletag.sizeMapping()
  .addSize([640, 480], [970,250])
  .addSize([360, 640], [300, 250])
  .build();
  gptAdSlots[9].defineSizeMapping(mapping);
  gptAdSlots[10] =  googletag.defineSlot(gambannerpath+'responsive5', [[970,250],[970,90],[728,90],[300,250]], 'div-gpt-ad-8176806-10')
             .addService(googletag.pubads());

var mapping = googletag.sizeMapping()
  .addSize([640, 480], [970,250])
  .addSize([360, 640], [300, 250])
  .build();
  gptAdSlots[10].defineSizeMapping(mapping);
gptAdSlots[0] = googletag.defineSlot(gambannerpath+'sticky', [[970,90],[728,90],[320,50],[320,100]], 'stick').setTargeting('test', 'refresh')
             .addService(googletag.pubads());

var mappingstick = googletag.sizeMapping()
  .addSize([640, 480], [[970,90], [728,90]])
  .addSize([360, 640], [[320, 100], [320, 50]])
  .build();
  gptAdSlots[0].defineSizeMapping(mappingstick);

    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
  });

googletag.cmd.push(function() {googletag.display(gptAdSlots[0]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[1]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[2]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[3]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[4]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[5]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[6]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[7]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[8]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[9]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[10]);});
googletag.cmd.push(function() {googletag.display(gptAdSlots[11]);});

setInterval(function(){googletag.pubads().refresh([gptAdSlots[0]]);}, '30000'); //refresh sticky

/*
corelating divs 
<div id="stick"></div> stick
<div id="div-gpt-ad-8176806-1"></div> cube
<div id="div-gpt-ad-8176806-2"></div> cube2
<div id="div-gpt-ad-8176806-3"></div> cube3
<div id="div-gpt-ad-8176806-4"></div> rich
<div id="div-gpt-ad-8176806-5"></div> sky
<div id="div-gpt-ad-8176806-6"></div> sticky
<div id="div-gpt-ad-8176806-7"></div> responsive
<div id="div-gpt-ad-8176806-8"></div> sky

*/
<!--Ad Manager Definition end --> 

/* interstitial */
window.googletag=window.googletag||{cmd:[]};var interstitialSlot,staticSlot;googletag.cmd.push(function(){interstitialSlot=googletag.defineOutOfPageSlot(interstitialpath,googletag.enums.OutOfPageFormat.INTERSTITIAL);if(interstitialSlot){interstitialSlot.addService(googletag.pubads());googletag.pubads().addEventListener('slotOnload',function(event){});} googletag.enableServices();});googletag.cmd.push(function(){googletag.display(interstitialSlot);});
/* interstitial end*/



let body = document.body;
let adDiv = document.createElement("div");
adDiv.innerHTML = '<div id="id-custom_banner" style="width: 100%; position: fixed; left: 0; bottom: 0; z-index: 999999; opacity: 1; transition: bottom 1.5s ease-out 0s, opacity .2s ease-out 1s, transform .2s ease-out 0s; background-color: rgba(0, 0, 0, 0.7); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center;"><div style="position: absolute; right: 0; top: -21px; cursor: pointer" onclick="removeCustomBanner(this.parentNode)"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16.6 17" style="width: 20px; height: 20px; filter: drop-shadow(1px 1px 2px #333); -webkit-filter: drop-shadow(1px 1px 2px #333)"><polygon fill="#FFF" points="15.5,1.7 13.7,0 7.7,6.1 1.8,0 0,1.7 6,7.9 0,14.1 1.8,15.9 7.7,9.7 13.7,15.9 15.5,14.1 9.5,7.9 "></polygon></svg></div><div class="timer" style="position: absolute; left: 0; top: 0; z-index: 10; padding: 5px; color: #fff"></div><div id=\'stick\'></div></div>';
adDiv.style.width = "100%";
adDiv.style.position = "fixed";
adDiv.style.left = "0";
adDiv.style.bottom = "0";
adDiv.style.zIndex = "999999";
adDiv.style.opacity = "1";
adDiv.style.transition = "bottom 1.5s ease-out 0s, opacity .2s ease-out 1s, transform .2s ease-out 0s";
adDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
adDiv.style.backdropFilter = "blur(5px)";

body.appendChild(adDiv);

function removeCustomBanner(element) {
  element.remove();
}