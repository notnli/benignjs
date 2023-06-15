(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-place-holder", ["base", "core", "ui"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-place-holder"] = factory(require("base"), require("core"), require("ui"));
	else
		root["widget-hdfc-place-holder"] = factory(root["base"], root["core"], root["ui"]);
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

	module.exports = __webpack_require__(134);

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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-place-holder";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      deps = [core.name, ui.name];module.exports = base.createModule(module.name, deps).constant("WIDGET_NAME", module.name).controller(__webpack_require__(135)).run(function () {});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.MainCtrl = function (lpWidget, lpCoreUtils, lpCoreError, $scope, lpPortal, $window) {
	    this.utils = lpCoreUtils, this.error = lpCoreError, this.widget = lpWidget;var ctrl = this;ctrl.normalText1 = lpWidget.getPreference("normalText1"), ctrl.normalText2 = lpWidget.getPreference("normalText2"), ctrl.normalText3 = lpWidget.getPreference("normalText3");var colorFont = lpWidget.getPreference("colorFont"),
	        colorBack = lpWidget.getPreference("colorBack"),
	        toggleShow = lpWidget.getPreference("toggleShow");ctrl.textSize = lpWidget.getPreference("textSize"), ctrl.linkUrl1 = lpWidget.getPreference("linkUrl1"), ctrl.linkUrl2 = lpWidget.getPreference("linkUrl2"), ctrl.linkUrl3 = lpWidget.getPreference("linkUrl3"), ctrl.plchldrtoshw = !0;var tab1 = lpWidget.model.getPreference("selectTab1"),
	        tab2 = lpWidget.model.getPreference("selectTab2"),
	        tab3 = lpWidget.model.getPreference("selectTab3");function windowFunction(linkPlace, link) {
	      "sametab" == linkPlace && (event.preventDefault(), $window.open(link, "_self")), "newtab" == linkPlace && (event.preventDefault(), window.open(link)), "newwindow" == linkPlace && (event.preventDefault(), window.open(link, "newWin", "width=" + screen.availWidth + ",height=" + screen.availHeight));
	    }ctrl.getLinkClick = function (linkName) {
	      1 == linkName && windowFunction(tab1, ctrl.linkUrl1), 2 == linkName && windowFunction(tab2, ctrl.linkUrl2), 3 == linkName && windowFunction(tab3, ctrl.linkUrl3);
	    }, setTimeout(function () {
	      $(".breadcrum-container").hasClass("needed") && $(".container.placeholder-message").addClass("placeholder-extend");
	    }, 200), ctrl.myObj = { "font-size": ctrl.textSize, "background-color": colorBack }, ctrl.myCol = { color: colorFont }, ctrl.plchldrtoshw = !toggleShow;
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-place-holder.js.map