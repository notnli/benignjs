(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-homepage-popup", ["base", "core", "ui"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-homepage-popup"] = factory(require("base"), require("core"), require("ui"));
	else
		root["widget-hdfc-homepage-popup"] = factory(root["base"], root["core"], root["ui"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(123);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-homepage-popup";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      deps = [core.name, ui.name];module.exports = base.createModule(module.name, deps).constant("WIDGET_NAME", module.name).controller(__webpack_require__(124)).run(function () {});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.MainCtrl = function (lpWidget, lpCoreUtils, lpCoreError, $scope, lpPortal, $rootScope, $http) {
	    this.utils = lpCoreUtils, this.error = lpCoreError, this.widget = lpWidget;var loggedInCheck = lpPortal.userId,
	        ctrl = this,
	        isPopup = getCookie("hpPopup"),
	        enablePopup = lpWidget.getPreference("enablePopup"),
	        contentPath = lpWidget.getPreference("contentPath"),
	        repoId = lpWidget.getPreference("repoId");ctrl.myPortalName = lpPortal.root;var popUpResponse,
	        json_url = ctrl.myPortalName + "/content/bbp/repositories/" + repoId + "/?path=" + contentPath,
	        loggedInStatus = "" != loggedInCheck && void 0 !== loggedInCheck;function getCookie(cname) {
	      for (var name = cname + "=", ca = decodeURIComponent(document.cookie).split(";"), i = 0; i < ca.length; i++) {
	        for (var c = ca[i]; " " == c.charAt(0);) {
	          c = c.substring(1);
	        }if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
	      }return "";
	    }"" == isPopup && enablePopup ? ("" == (isPopup = getCookie("hpPopup")) && enablePopup ? ctrl.isPopup = !0 : ctrl.isPopup = !1, $rootScope.$$phase || $rootScope.$apply()) : ctrl.isPopup = !1, enablePopup && $http.get(json_url).success(function (response) {
	      popUpResponse = response, $("#okBtn").text(popUpResponse.buttonOne.btnTxt), ctrl.linkUrl = popUpResponse.buttonTwo.btnLink, ctrl.notEmptyUrl = !0, null != ctrl.linkUrl && "" != ctrl.linkUrl || (ctrl.notEmptyUrl = !1), $("#secBtn").text(popUpResponse.buttonTwo.btnTxt), $("#secBtn").attr("href", popUpResponse.buttonTwo.btnLink), ctrl.paraText = popUpResponse.detailText.richTextItemHPPU, "" != isPopup || loggedInStatus || $("body").toggleClass("noscroll-hppu"), $(".cache-home-page-popup .para-text").append(ctrl.paraText), ctrl.notEmptyUrl && $("#secBtn").css("display", "inline-block"), $(".cache-home-page-popup").find("a").each(function () {
	        var pdfPath,
	            pathOfContent2,
	            newUrl,
	            urlAppend,
	            chooseUrl = !1,
	            currHost = window.location.hostname,
	            contextRoot = b$.portal.config.serverRoot;if (urlAppend = null == contextRoot ? "default" : "" == contextRoot ? contextRoot : contextRoot + "/" + portalName, $(this).attr("data-linktype")) {
	          var hrefVal2 = $(this).attr("href");void 0 !== hrefVal2 && -1 < hrefVal2.indexOf("http") && hrefVal2.indexOf(currHost) < 0 && $(this).attr("value", "ext-link-type");
	        } else {
	          "_blank" == $(this).attr("target") && $(this).attr("rel", "noopener noreferrer");var hrefVal = $(this).attr("href");if (void 0 !== hrefVal) if (0 <= hrefVal.indexOf("/http") && (hrefVal = hrefVal.replace("/http", "http"), $(this).attr("href", hrefVal)), -1 < hrefVal.indexOf("http") && function (url) {
	            for (var hostArray = url.split("."), returnValue = !0, i = 0; i < hostArray.length; i++) {
	              "hdfcbank" !== hostArray[i] && "HDFCBANK" !== hostArray[i] || (returnValue = !1);
	            }return returnValue;
	          }(this.hostname) ? (chooseUrl = !0, 1 == b$.portal.isLogin ? $(this).attr("value", "ext-link-nb") : ($(this).attr("value", "ext-link-type"), $(this).attr("target", "_blank"))) : (-1 < hrefVal.indexOf("/sme/") || -1 < hrefVal.indexOf("/nri-banking/") || -1 < hrefVal.indexOf("/wholesale/") || -1 < hrefVal.indexOf("/agri/")) && 1 == b$.portal.isLogin && $(this).attr("value", "ext-link-nb"), -1 < hrefVal.indexOf("mailto") && (chooseUrl = !0), -1 < hrefVal.indexOf(".pdf")) {
	            if (chooseUrl = !0, $(this).attr("target", "_blank"), pdfPath = $(this).attr("href"), -1 < hrefVal.indexOf("contentstream-id")) {
	              var pathOfContent3 = window.location.origin + pdfPath.substring(pdfPath.indexOf("=/") + 1, pdfPath.length);$(this).attr("href", pathOfContent3);
	            } else {
	              var pathOfContent = window.location.origin + contextRoot + "/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=" + pdfPath;$(this).attr("href", pathOfContent);
	            }
	          } else -1 < hrefVal.indexOf("content?id") ? (pdfPath = $(this).attr("href"), $(this).attr("target", "_blank"), pathOfContent2 = contextRoot + pdfPath.substring(pdfPath.indexOf("/content"), pdfPath.length), $(this).attr("href", pathOfContent2)) : -1 < hrefVal.indexOf("contentstream-id") && (pdfPath = $(this).attr("href"), $(this).attr("target", "_blank"), pathOfContent2 = contextRoot + pdfPath.substring(pdfPath.indexOf("/content"), pdfPath.length), $(this).attr("href", pathOfContent2));if (void 0 !== $(this).attr("href") && "#" != $(this).attr("href") && "javascript:void(0)" != $(this).attr("href") && !$(this).hasClass("exclude-me") && !chooseUrl && $(this).attr("href").indexOf("hdfcbank") < 0) {
	            var generateUrl = $(this).attr("href");$(this).hasClass("friendly-url") ? (newUrl = contextRoot + generateUrl, $(this).attr("href", newUrl)) : -1 < generateUrl.indexOf("content?id") || -1 < generateUrl.indexOf("contentstream-id") ? $(this).attr("href", generateUrl) : (newUrl = urlAppend + generateUrl, $(this).attr("href", newUrl));
	          }
	        }
	      });
	    }), ctrl.hideNotification = function () {
	      !function (cname, cvalue, exdays) {
	        var d = new Date();d.setTime(d.getTime() + 24 * exdays * 60 * 60 * 1e3);var expires = "expires=" + d.toGMTString();document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/", loggedInStatus || $("body").toggleClass("noscroll-hppu");
	      }("hpPopup", !(ctrl.isPopup = !1), 7);
	    }, loggedInStatus && ctrl.hideNotification();
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-homepage-popup.js.map