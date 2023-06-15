var _paqMatomo = (window._paqMatomo = window._paqMatomo || [])
;(function () {
  var u = 'https://analytics.proxad.net/'
  _paqMatomo.push(['setTrackerUrl', u + 'matomo.php'])
  _paqMatomo.push(['setSiteId', '2'])
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0]
  g.type = 'text/javascript'
  g.async = true
  g.src = '/assets/tracking/matomo_custom_client.js'
  s.parentNode.insertBefore(g, s)
})()
