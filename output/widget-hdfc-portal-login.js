(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"), require("module-users"), require("feature-hdfc-common-utility"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-portal-login", ["base", "core", "ui", "module-users", "feature-hdfc-common-utility"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-portal-login"] = factory(require("base"), require("core"), require("ui"), require("module-users"), require("feature-hdfc-common-utility"));
	else
		root["widget-hdfc-portal-login"] = factory(root["base"], root["core"], root["ui"], root["module-users"], root["feature-hdfc-common-utility"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_129__) {
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

	module.exports = __webpack_require__(187);

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

/***/ 111:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-portal-login";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      users = __webpack_require__(111),
	      utility = __webpack_require__(129),
	      deps = [core.name, ui.name, users.name, utility.name];module.exports = base.createModule(module.name, deps).constant("WIDGET_NAME", module.name).controller(__webpack_require__(188)).service(__webpack_require__(189)).run(function (lpWidget, lpPortal) {});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.MainCtrl = function ($scope, $timeout, lpCoreBus, lpUsersPreference, WidgetModel, lpWidget, lpCoreUtils, lpPortal, lpCoreError, lpUsersAuthentication, $window, $http, LogoutService) {
	    this.model = WidgetModel, this.utils = lpCoreUtils, this.error = lpCoreError, this.widget = lpWidget;var ctrl = this,
	        redirectUrl = b$.portal.urlRedirect,
	        subDetails = [];ctrl.loginmenuClosed = !0, ctrl.deviceType = b$.portal.typeOfDevice(), window.location.href;var currentActiveSection = this.widget.model.getPreference("section-name"),
	        pwsSiteURL = $(".pws link").attr("href"),
	        isPWS = -1 < window.location.href.indexOf(pwsSiteURL),
	        pwsPortal = $("#main").hasClass("web-portal");if ($(".cookie-overlay button").on("click", function (event) {
	      $(".cookie-overlay .modal.popup-container").removeClass("opened"), $(".cookie-overlay .modal.popup-container").css("display", "none"), event.stopPropagation();
	    }), ctrl.onlyClick = !1, ctrl.onlyClick = "default" === currentActiveSection, ctrl.userStatus = !1, lpPortal.userId) ctrl.userStatus = !0, ctrl.logout = function () {
	      gadgets.pubsub.publish("logoutPopup");
	    };else {
	      ctrl.userStatus = !1;var loginLink = this.widget.model.getPreference("login-button");ctrl.login = function () {
	        var isCookieEnabled = function () {
	          if (0 == b$.portal.isLogin && 1 == pwsPortal && 1 == isPWS) {
	            document.cookie = "testcookie=1";var cookieEnabled = -1 !== document.cookie.indexOf("testcookie=");if (document.cookie = "testcookie=valid; expires=Thu, 01-Jan-1970 00:00:01 GMT", !cookieEnabled) {
	              $(".container-fluid .cover, .container-fluid .cover-video").each(function (index, element) {
	                if ("block" === $(element).css("display")) return $(element).css("display", ""), $(element).siblings(".modal").removeClass("opened"), $(element).children(".modal").removeClass("opened"), !1;
	              });var urlText = window.location.host + " says";$("#cookieURL").text(urlText), $("body").addClass("no-scroll"), $("body").css("overflow", "hidden"), $("html").css("overflow", "hidden"), $(".cookie-overlay .cover").css("display", "block"), $(".cookie-overlay .modal.popup-container").addClass("opened"), $(".search-result-wrapper").css("display", "none"), $(document).keydown(function (objEvent) {
	                9 != objEvent.keyCode && 13 != objEvent.keyCode || objEvent.preventDefault();
	              });
	            }return cookieEnabled;
	          }
	        }(),
	            screenFreezed = $(".cookie-overlay .cover").css("display");isCookieEnabled && "block" == screenFreezed ? location.reload(!0) : $(".cookie-overlay .modal.popup-container").css("display", "block"), "mobile" === ctrl.deviceType ? (ctrl.loginmenuClosed = !1, subDetails.push("mobileLoginOverlay")) : "tablet" === ctrl.deviceType ? (ctrl.loginmenuClosed = !1, subDetails.push("tabletLoginOverlay")) : "web" === ctrl.deviceType && subDetails.push("desktopLoginOverlay"), subDetails.push(currentActiveSection), "default" != currentActiveSection ? gadgets.pubsub.publish("otherLogin", subDetails) : ($window.sessionStorage.clear(), b$.portal.navigateTo(redirectUrl + loginLink));
	      }, ctrl.closeNewMenu = function () {
	        ctrl.loginmenuClosed = !0, $(".position-find").css({ display: "block" }), $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"), ctrl.loginmenuClosed || (ctrl.loginmenuClosed = !0, $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".portal-cross").css({ display: "none" }), $(".nav-cross").css({ display: "none" }), $(".position-find").css({ display: "block" }), $(".portal-log-btn").css({ display: "block" }), $(".nav-log-btn").css({ display: "block" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"));
	      };
	    }$(window).resize(function () {
	      var check, posButton;960 < $(window).width() ? (posButton = $(window).width() - ($(".position-find").offset().left + $(".position-find").outerWidth()), posButton += "px", $(".login_dropdown").css("right", posButton)) : $(window).width() < 768 && (0 != (check = $(".navbar-collapse .lp-navbar-advanced-root .slick-list").offset().top) && "undefined" != check || $(".login-button-new .login_dropdown").css("top", "101px"));
	    });
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.WidgetModel = function (lpWidget) {
	    this.data = [], this.widget = lpWidget;
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-portal-login.js.map