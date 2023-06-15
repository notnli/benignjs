var NaviApiIsInternal = function () {
  NaviApiIsInternal.isInternal = 'true';
};

/**
 * initialize
 */
NaviApiIsInternal.init = function () {
  NaviApiIsInternal.root = document.getElementById('naviapi-is-internal');
  NaviApiIsInternal.isInternal = NaviApiIsInternal.root.getAttribute('data-is-internal');
};

NaviApiIsInternal.getDomain = function () {
  var hostname = window.location.hostname;
  var domain = /dmm\.co\.jp$/.test(hostname) ? '.dmm.co.jp' : '.dmm.com';
  return domain;
};

NaviApiIsInternal.setCookie = function () {
  var domain = NaviApiIsInternal.getDomain();
  document.cookie = 'is_intarnal=' + NaviApiIsInternal.isInternal + '; Domain=' + domain + '; Path=/;';
};

/**
 * main (precondition: this script is loaded in defer mode)
 */
NaviApiIsInternal.init();
NaviApiIsInternal.setCookie();
