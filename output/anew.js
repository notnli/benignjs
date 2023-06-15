var cf_az_resize_delay,
cf_last_size = !1;
function cfResizePageFooter() {
  var e = document.querySelectorAll('nav.navbar-footer') [0].offsetHeight,
  t = document.querySelectorAll('div.lboard-wrap') [0].offsetHeight,
  n = document.querySelectorAll('nav.navbar-footer') [0].offsetHeight,
  c = document.querySelectorAll('div.footer-wrap') [0].offsetHeight;
  document.getElementById('fake-footer').style.height = e + t + n + c + 'px'
}
function cfMakeFlexAd() {
  cf_adunit_id = '39381789',
  cf_flex = !0;
  var e = document.createElement('div'),
  t = document.querySelectorAll('nav.navbar-footer') [0];
  e.style.width = '0px',
  e.style.visibility = 'hidden',
  e.style.position = 'absolute',
  e.setAttribute('id', 'fake-footer'),
  t.appendChild(e),
  cfResizePageFooter(),
  window.cf_page_header = 'nav.navbar-fixed-top, nav.navbar-static-top',
  window.cf_page_footer = '#fake-footer',
  window.cf_page_element = 'div.main-page',
  window.cf_top_mobile_adhesion_div = 'cf_text_top',
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('resize', function () {
      cfResizePageFooter()
    })
  }),
  document.write('<div class="noprint"><script src="//srv.tunefindforfans.com/fruits/apricots.js"></script></div>')
}
function cfMakeTfpAdOld(e, t) {
  if (document.getElementById(e)) {
    var n = 'cf.showAsyncAd({artist: cf_page_artist,song: cf_page_song,genre: cf_page_genre,adunit_id: ' + t + ',div_id: "' + e + '"});';
    document.write('<script>' + n + '</script>')
  }
}
function cfMakeTfpAd(e, t) {
    var el = document.getElementById(e);
    if (el) {
        var el_id = "cf_async_" + Math.floor((Math.random() * 999999999));
        el.setAttribute("id", el_id);
        document.write('<script>cf.showAsyncAd({artist: cf_page_artist, song: cf_page_song, adunit_id: ' + t + ', div_id: "' + el_id + '"});</script>');
    }
}
function resizeIFrameToFitContent(e) {
  var t = e.contentWindow.document.body.scrollHeight;
  250 == t && (e.width = 300),
  e.height = t,
  e.parentElement.parentElement.style.height = t + 'px'
}
cfMakeFlexAd(),
cfMakeTfpAd('cf_text_top', 39382074),
cfMakeTfpAd('cf_text_bottom', 39382075),
window.addEventListener('load', function (e) {
  for (var t = document.querySelectorAll('.cf_hybrid'), n = 0; n < t.length; n++) resizeIFrameToFitContent(t[n])
});

