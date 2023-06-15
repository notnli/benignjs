(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-eva-chat", ["base", "core", "ui"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-eva-chat"] = factory(require("base"), require("core"), require("ui"));
	else
		root["widget-hdfc-eva-chat"] = factory(root["base"], root["core"], root["ui"]);
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

	module.exports = __webpack_require__(99);

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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-eva-chat";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      deps = [core.name, ui.name];module.exports = base.createModule(module.name, deps).constant("WIDGET_NAME", module.name).controller(__webpack_require__(100)).run(function () {});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.MainCtrl = function (lpWidget, lpCoreUtils, lpCoreError) {
	    this.utils = lpCoreUtils, this.error = lpCoreError, 1 == (this.widget = lpWidget).getPreference("integrateChat") || 1 == b$.portal.isLogin ? (angular.element(".locate-us").find(".help-img").addClass("locate-toggle-on"), angular.element(".locate-us").find(".help").addClass("locate-toggle-on"), $("body").find(".locate-us .help-img, .locate-us .help").on("click", function (event) {
	      gadgets.pubsub.publish("intEvaTogg");
	    }), $("head").append("<script defer='true' type='text/javascript' src='//hbchat.senseforth.com/HDFC_Chat/chat_new.js'><\/script>")) : (angular.element(".locate-us").find(".help-img").addClass("hidden"), angular.element(".locate-us").find(".help").addClass("hidden"), angular.element(".navbar-collapse .mid-layer .navbar-top-question").addClass("hidden"));var countSeconds = 0,
	        evaRequired = !0;function clearTimer() {
	      countSeconds = 0;
	    }gadgets.pubsub.subscribe("needOfEva", function (data) {
	      data.evaNotRequired && (evaRequired = !1);
	    }), b$.portal.isLogin && setInterval(function () {
	      120 <= countSeconds ? evaRequired && (toggleEvaChat(), clearTimer()) : countSeconds++;
	    }, 1e3), document.onclick = function () {
	      clearTimer();
	    };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-eva-chat.js.map