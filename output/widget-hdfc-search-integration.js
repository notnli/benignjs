(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-search-integration", ["base", "core", "ui"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-search-integration"] = factory(require("base"), require("core"), require("ui"));
	else
		root["widget-hdfc-search-integration"] = factory(root["base"], root["core"], root["ui"]);
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

	module.exports = __webpack_require__(211);

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-search-integration";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      deps = [core.name, ui.name];module.exports = base.createModule(module.name, deps).factory("Utils", __webpack_require__(212)).constant("WIDGET_NAME", module.name).controller(__webpack_require__(213)).run(function () {});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  return function () {
	    return { searchIntegrationJS: function searchIntegrationJS() {
	        $(window).on("load resize scroll", function () {
	          767 < $(window).width() && ($(".quick-navbar.middle-quick-menus.middle-menus").hasClass("top-stick") ? $("#custom-search-input .search-input-wrapper .sfSearchWrap").appendTo(".quick-navbar.middle-quick-menus.middle-menus .menu-search-input") : $(".quick-navbar.middle-quick-menus.top-stick-menus").hasClass("middle-menus") || $(".quick-navbar.middle-quick-menus.middle-menus .menu-search-input .sfSearchWrap").appendTo("#custom-search-input .search-input-wrapper"), setTimeout(function () {
	            $(".middle-quick-menus").hasClass("top-stick-menus") && $("#custom-search-input .search-input-wrapper .sfSearchWrap").appendTo(".menu-search-input");
	          }, 5e3));
	        });
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.MainCtrl = function (Utils, lpWidget, lpCoreUtils, lpCoreError, $scope, lpPortal) {
	    if (1 == lpWidget.getPreference("integrateSearch") || 1 == b$.portal.isLogin) {
	      angular.element(".locate-us").find(".search-icon-mobile").addClass("search-toggle"), Utils.searchIntegrationJS(), this.utils = lpCoreUtils, this.error = lpCoreError, this.widget = lpWidget, $scope.portalName = lpPortal.root, this.portalName = lpPortal.root;var templateNeed = this.widget.model.getPreference("need");this.templateNeed = "required" == templateNeed;var templatePref = this.widget.model.getPreference("searchTemplate");"si" == templatePref && (this.templateName = lpPortal.root + "/static/widgets/%5BBBHOST%5D/widget-hdfc-search-integration/templates/search-bar.html", setTimeout(function () {
	        var tag = document.createElement("script");tag.src = "//hbsearch.senseforth.com/js/sf-searchLoader-newui.js", document.getElementsByTagName("head")[0].appendChild(tag);
	      }, 5e3)), "sr" == templatePref && (this.templateName = lpPortal.root + "/static/widgets/%5BBBHOST%5D/widget-hdfc-search-integration/templates/search-result.html");
	    } else angular.element(".locate-us .search-icon-mobile").addClass("hidden");
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-search-integration.js.map