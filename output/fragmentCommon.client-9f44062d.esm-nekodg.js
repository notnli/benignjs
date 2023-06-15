window.ikeaExternalScriptOptions={"onetrust":{"id":2,"apiKey":"80238e1a-3de0-4556-9817-3c9165b937f2"},"ga":{"id":2,"trackingIds":"UA-172012033-1\nG-S4EX53B760"},"sentry":{"id":2,"dsn":"https://75f51570d7fc47bc92a5565007146415@o437184.ingest.sentry.io/5399384","env":"production"},"mpulse":{"id":2,"apiKey":"QQ8SB-48FHQ-ZCVVT-UD7Q4-5VS6B"},"oneweb":{"id":2,"apiUrl":"https://favs.oneweb.ingka.com/graphql","clientId":"54180e80-6930-4e57-b76c-d705bc03eeb5"}};window.oneWebConfig={"id":2,"apiUrl":"https://favs.oneweb.ingka.com/graphql","clientId":"54180e80-6930-4e57-b76c-d705bc03eeb5"};// See docs/onetrust.md for details

(function initOnetrust() {
  window.OptanonWrapper = function () {
    _initCustomCookie();
  };

  function _initCustomCookie() {
    var opts = {
      domain: '.' + window.location.hostname,
      onetrustCookieName: 'OptanonAlertBoxClosed',
      customCookieName: 'interIkeaConsent',
      customCookieVersion: 'v1.0',
    };

    var hasOnetrustCookie = !!_getCookie(opts.onetrustCookieName);
    var hasCustomCookie =
      _getCookie(opts.customCookieName) === opts.customCookieVersion;
    var shouldHideBanner = hasOnetrustCookie || hasCustomCookie;

    if (shouldHideBanner) {
      _setCookie(opts.customCookieName, opts.customCookieVersion, 365, false);
      _setCookie(opts.onetrustCookieName, '', -1, opts.domain);
      document.querySelector('html').classList.add('onetrust-box-closed');
    }
  }

  function _getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  function _setCookie(cname, cvalue, exdays, domain) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    var setDomain = domain ? 'domain=' + domain + ';' : '';
    document.cookie =
      cname + '=' + cvalue + ';' + setDomain + expires + ';path=/';
  }
})();

