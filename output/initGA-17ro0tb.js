(function initGA() {
  var options = window.ikeaExternalScriptOptions || {};
  var gaOptions = options.ga || {};
  var trackingIds = gaOptions.trackingIds || '';
  var ids = trackingIds
    .split(/[\s\n,;]/gi)
    .map((x) => x.trim())
    .filter((x) => x);

  if (ids.length === 0) {
    return; // no ids = no tracking
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag('js', new Date());

  for (var id of ids) {
    gtag('config', id, {
      transport_type: 'beacon',
      anonymize_ip: true,
      // default dimensions
      site_language: 'en',
      site_platform: 'global',
    });
  }
})();
