/* Copyright (c) 2014 Taylor Hakes
 * Copyright (c) 2014 Forbes Lindesay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software").
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS"...
 * https://gist.github.com/akrisiun/a9d9645492af474f6cac2b2dd092dc78
 */
// Polyfills
if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function (name, force) {
    if (force !== void 0) force = !!force

    if (this.hasAttribute(name)) {
      if (force) return true

      this.removeAttribute(name)
      return false
    }
    if (force === false) return false

    this.setAttribute(name, '')
    return true
  }
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length
    }
    return this.substring(this_len - search.length, this_len) === search
  }
}

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append () {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment()

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.appendChild(docFrag)
      }
    })
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend () {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment()

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.insertBefore(docFrag, this.firstChild)
      }
    })
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype])

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
}

(function () {
  if (typeof window.CustomEvent === 'function') return false

  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  CustomEvent.prototype = window.Event.prototype

  window.CustomEvent = CustomEvent
})()

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function (search, rawPos) {
      var pos = rawPos > 0 ? rawPos | 0 : 0
      return this.substring(pos, pos + search.length) === search
    }
  })
}

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj)
    var i = ownProps.length
    var resArray = new Array(i)
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]]
    }

    return resArray
  }
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function (search, start) {
    'use strict'

    if (search instanceof RegExp) {
      throw TypeError('First argument must not be a RegExp')
    }
    if (start === undefined) { start = 0 }
    return this.indexOf(search, start) !== -1
  }
}

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout

  function noop () {}

  // Polyfill for Function.prototype.bind
  function bind (fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments)
    }
  }

  function Promise (fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new')
    if (typeof fn !== 'function') throw new TypeError('not a function')
    this._state = 0
    this._handled = false
    this._value = undefined
    this._deferreds = []

    doResolve(fn, this)
  }

  function handle (self, deferred) {
    while (self._state === 3) {
      self = self._value
    }
    if (self._state === 0) {
      self._deferreds.push(deferred)
      return
    }
    self._handled = true
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value)
        return
      }
      var ret
      try {
        ret = cb(self._value)
      } catch (e) {
        reject(deferred.promise, e)
        return
      }
      resolve(deferred.promise, ret)
    })
  }

  function resolve (self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.')
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then
        if (newValue instanceof Promise) {
          self._state = 3
          self._value = newValue
          finale(self)
          return
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self)
          return
        }
      }
      self._state = 1
      self._value = newValue
      finale(self)
    } catch (e) {
      reject(self, e)
    }
  }

  function reject (self, newValue) {
    self._state = 2
    self._value = newValue
    finale(self)
  }

  function finale (self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value)
        }
      })
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i])
    }
    self._deferreds = null
  }

  function Handler (onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
    this.onRejected = typeof onRejected === 'function' ? onRejected : null
    this.promise = promise
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve (fn, self) {
    var done = false
    try {
      fn(function (value) {
        if (done) return
        done = true
        resolve(self, value)
      }, function (reason) {
        if (done) return
        done = true
        reject(self, reason)
      })
    } catch (ex) {
      if (done) return
      done = true
      reject(self, ex)
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected)
  }

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop)

    handle(this, new Handler(onFulfilled, onRejected, prom))
    return prom
  }

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr)

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([])
      var remaining = args.length

      function res (i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val)
              }, reject)
              return
            }
          }
          args[i] = val
          if (--remaining === 0) {
            resolve(args)
          }
        } catch (ex) {
          reject(ex)
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i])
      }
    })
  }

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value
    }

    return new Promise(function (resolve) {
      resolve(value)
    })
  }

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value)
    })
  }

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject)
      }
    })
  }

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn) }) ||
    function (fn) {
      setTimeoutFunc(fn, 0)
    }

  Promise._unhandledRejectionFn = function _unhandledRejectionFn (err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err) // eslint-disable-line no-console
    }
  }

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn (fn) {
    Promise._immediateFn = fn
  }

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn (fn) {
    Promise._unhandledRejectionFn = fn
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise
  } else if (!root.Promise) {
    root.Promise = Promise
  }

})(this)

// end of Polyfills

var _this = {}

function _slicedToArray (arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest() }

function _nonIterableRest () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

function _unsupportedIterableToArray (o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray (arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] }
  return arr2
}

function _iterableToArrayLimit (arr, i) {
  var _i = arr == null ? null : typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']
  if (_i == null) return
  var _arr = []
  var _n = true
  var _d = false
  var _s, _e
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally { try { if (!_n && _i['return'] != null) _i['return']() } finally { if (_d) throw _e } }
  return _arr
}

function _arrayWithHoles (arr) { if (Array.isArray(arr)) return arr }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

if (!window.SiteInfo) {
  window.SiteInfo = {}
}

window.SiteInfo.TrackLibPageId = Math.random().toString(36).substr(2, 9)
var updatePixelSent = false
var initDone = false
var site = window.PageConfig.site === 'hp' ? 'homepage' : 'logout'

var getMeta = function getMeta (metaName) {
  var _document$querySelect

  return ((_document$querySelect = document.querySelector('meta[name='.concat(metaName, ']'))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('content')) || ''
}

window.PageConfig.softwareVersion = getMeta('templateVersion')

var getDomainName = function getDomainName (hostName) {
  return hostName.substring(hostName.lastIndexOf('.', hostName.lastIndexOf('.') - 1) + 1).replace('.', '')
}

var getBrand = function getBrand () {
  var _window$location$host

  var brand = (_window$location$host = window.location.hostname.split('.').reverse()) === null || _window$location$host === void 0 ? void 0 : _window$location$host[1]
  return brand === 'web' ? 'webde' : brand
}

var updateTrackLibPixel = function updateTrackLibPixel () {
  if (!updatePixelSent) {
    var _window$adData, _window$adData2

    var trackObject = {
      section: ''.concat(site, '.update'),
      trackingtype: 'ev',
      cont_page_id: window.SiteInfo.TrackLibPageId,
      cont_reco: '',
      visit_calc: 1,
      sett_privatemode: !window.availableResponse,
      soft_name: 'hpll',
      soft_version: window.PageConfig.softwareVersion,
      soft_variant: document.querySelector('html').getAttribute('data-variant-name'),
      brand: trackingBrand,
      cont_a_format: ((_window$adData = window.adData) === null || _window$adData === void 0 ? void 0 : _window$adData.type) || 'default',
      cont_a_variant: ((_window$adData2 = window.adData) === null || _window$adData2 === void 0 ? void 0 : _window$adData2.variant) || 'default',
      cont_mode: window.SiteInfo.stickyLogin ? 'sticky' : ''
    }
    getPiTrackingData(trackObject)

    _this.tracker.track(trackObject)

    updatePixelSent = true
  }
}

var trackMe = function trackMe (trackObject, event) {
  if (!window.trackingQueue) {
    window.trackingQueue = []
  }

  if (!window.TrackLib) {
    if (trackObject) {
      window.trackingQueue.push([trackObject, event])
    }
  } else {
    while (window.trackingQueue.length) {
      var element = window.trackingQueue.shift()
      var trackingInfo = element[0]
      var originalEvent = element[1]
      getPiTrackingData(trackingInfo, originalEvent)

      _this.tracker.track(trackingInfo)
    }

    if (trackObject) {
      getPiTrackingData(trackObject, event)

      _this.tracker.track(trackObject)
    }
  }
}

window.piTracking = {}
window.piTracking.trackMe = trackMe

var getCookieValue = function getCookieValue (cookieName) {
  var findMe = '(?:^|; )' + cookieName + '=([^;]*)'
  return (document.cookie.match(findMe) || [0, ''])[1]
}

var getPiTrackingData = function getPiTrackingData (trackObject, event) {
  const consentLevel = +getCookieValue('consentLevel') || 0

  if (window.PageConfig.reco === undefined && window.location.hostname.includes('1und1')) {
    window.PageConfig.reco = 'control'
  }

  trackObject.cont_pagevariant = window.PageConfig.cont_pagevariant
  trackObject.resu_error = 'none' // TODO: get error message (doesnt exist yet)

  trackObject.sett_consentlevel = consentLevel
  trackObject.cont_tb_bbrowser = '' // TODO: get branded browser (I don't know where from yet but the values are 0 and 1)

  trackObject.cont_category = window.PageConfig.cont_category
  trackObject.cont_lvts = '' + (window.PageConfig.brain || {}).lvts
  trackObject.cont_segment = '' + (window.PageConfig.brain || {}).segment
  trackObject.cont_reco = '' + window.PageConfig.reco
  trackObject.cont_page_id = window.SiteInfo.TrackLibPageId
  trackObject.visit_calc = 1

  if (initDone) {
    trackObject.cont_pagelayout = getComputedStyle(document.documentElement).getPropertyValue('--col-count') + 'col'
  } else {
    const setPageReadyOnColCountChange = function () {
      initDone = true
      document.removeEventListener('colCountChanged', setPageReadyOnColCountChange)
    }
    document.addEventListener('colCountChanged', setPageReadyOnColCountChange)
  }

  if (window.availableResponse !== undefined) {
    trackObject.sett_privatemode = !window.availableResponse
  } else {
    if (!window.SiteInfo.waitingForUpdatePixel) {
      window.SiteInfo.waitingForUpdatePixel = true
      document.addEventListener('pageVisible', updateTrackLibPixel)
    }
  }

  getAndSetClickParams(trackObject)

  if (event) {
    var blockNumber = getBlockNumber(event.target)

    if (blockNumber) {
      var element = document.querySelector('[data-block-number="1"]')

      for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].getAttribute('data-component') === 'login') {
          trackObject.cont_block_name = 'layer'
          break
        }
      }

      trackObject.posi_block = blockNumber
    }
  }
}

var getAndSetClickParams = function getAndSetClickParams (trackObject) {
  var clickParams = []
  var clickParamsRaw

  try {
    clickParamsRaw = getCookie('trace') || (localStorage ? localStorage.getItem('trace') : clickParamsRaw)
  } catch (e) {}

  if (typeof clickParamsRaw === 'string') {
    try {
      var clickParamsObject = JSON.parse(clickParamsRaw)

      if (typeof clickParamsObject.brainZone === 'string') {
        clickParams = clickParamsObject.brainZone.split('.')
      }
    } catch (e) {}
  }

  deleteCookie('trace')
  localStorage.removeItem('trace')
  trackObject.cont_src_site = clickParams[1]
  trackObject.cont_src_comp = clickParams[2]
  trackObject.cont_src_title = clickParams[3]
  trackObject.cont_src_posi = clickParams[4]
}

var getCookie = function getCookie (key) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + key + '=')

  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}

var deleteCookie = function deleteCookie (key) {
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

var getBlockNumber = function getBlockNumber (element) {
  return getDataAttrValue(element, 'data-block-number')
}

var getDataAttrValue = function getDataAttrValue (element, dataAttribute) {
  if (element === document.body || element === document) {
    return
  }

  if (element.hasAttribute(dataAttribute)) {
    return element.getAttribute(dataAttribute)
  } else {
    return getDataAttrValue(element.parentElement, dataAttribute)
  }
}

var trackingBrand = getDomainName(window.location.hostname).toLowerCase()

if (trackingBrand === '1und1de') {
  trackingBrand = '1and1access'
}

if (trackingBrand === 'gmxnet') {
  trackingBrand = 'gmxde'
}

var preset = {
  lib: {
    properties: {
      lib: {
        stage: window.PageConfig.stage.includes('qa') ? 'qa' : window.PageConfig.stage
      }
    },
    parameter: {
      soft_name: 'hpll',
      soft_version: window.PageConfig.softwareVersion,
      soft_variant: document.querySelector('html').getAttribute('data-variant-name'),
      // name des tickets + variantentestname aus sitespect
      brand: trackingBrand // 1and1access, gmx, webde
    }
  }
}

// using a promise cause tracklib isnt ready right away
var trackLibReady = new Promise(function (resolve) {
  (function waitForIt () {
    if (window.TrackLib) {
      return resolve()
    }

    setTimeout(waitForIt, 30)
  })()
})
trackLibReady.then(function () {
  _this.tracker = new window.TrackLib(preset)
  var trackObject = {
    section: ''.concat(site, '.view'),
    trackingtype: 'pi',
    cont_page_id: window.SiteInfo.TrackLibPageId,
    cont_reco: '',
    visit_calc: 1,
    cont_tcflayer: window.PageConfig.cont_tcflayer || '',
    referrer: window.PageConfig.referrer
  }
  getPiTrackingData(trackObject)

  _this.tracker.track(trackObject) // first thing to track (pi)
  // TODO: no js pi pixel is still missing
  // queue abarbeiten

  trackMe() // empty just to trigger the queue process. At this point in time the TrackLib is available
}, function (error) {
  console.log(error) // we don't have TrackLib... but should never happen
});
