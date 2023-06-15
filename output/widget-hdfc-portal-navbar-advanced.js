(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"), require("feature-hdfc-common-utility"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-portal-navbar-advanced", ["base", "core", "ui", "module-users", "jquery", "feature-hdfc-common-utility"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-portal-navbar-advanced"] = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"), require("feature-hdfc-common-utility"));
	else
		root["widget-hdfc-portal-navbar-advanced"] = factory(root["base"], root["core"], root["ui"], root["module-users"], root["jquery"], root["feature-hdfc-common-utility"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_112__, __WEBPACK_EXTERNAL_MODULE_129__) {
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

	module.exports = __webpack_require__(193);

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

/***/ 112:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-portal-navbar-advanced";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      users = __webpack_require__(111),
	      utility = __webpack_require__(129),
	      deps = [core.name, ui.name, users.name, utility.name];module.exports = base.createModule(module.name, deps).factory("Utils", __webpack_require__(194)).controller(__webpack_require__(195)).directive(__webpack_require__(196)).run(function (lpWidget, lpPortal) {
	    var navRoot = lpWidget.getPreference("navRoot");if (lpPortal.designMode) {
	      var links = top && top.bd && top.bd.pm && top.bd.pm.model && top.bd.pm.model.links;links && !navRoot && (navRoot = Object.keys(links).filter(function (id) {
	        return "navroot_mainmenu" === links[id].linkname;
	      })) && navRoot[0] && (lpWidget.setPreference("navRoot", navRoot[0]), lpWidget.model.save(function () {
	        lpWidget.refreshHTML();
	      }));
	    }
	  });
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  return function (lpWidget, lpPortal) {
	    return { addCustomBaseJS: function addCustomBaseJS() {
	        $(document).ready(function () {
	          function getWidth() {
	            return self.innerWidth ? self.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body ? document.body.clientWidth : void 0;
	          }$(window).load(function () {
	            setTimeout(function () {
	              $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.sub-section-0.active a").attr("href", $(".header-menu .navbar-collapse .normal-main-header li.active a").attr("href"));
	            }, 2e3), 0 == $(".quick-navbar.middle-quick-menus.top-stick-menus").length && 767 < $(window).outerWidth() && ($($(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.sub-section-0.active a")[1]).find(".general").css("display", "block"), $($(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.sub-section-0.active a")[1]).find(".hover").css("display", "none")), $(window).outerWidth(), $(window).outerWidth() < 768 && setTimeout(function () {
	              var imgSrc = $($(".quick-navbar.mobile-humburger-menu .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.sub-section-0 a")[0]).find(".general img").attr("src");$($(".quick-navbar.mobile-humburger-menu .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.sub-section-0 a")[0]).find(".hover img").attr("src", imgSrc);
	            }, 1e3);
	          }), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar .navbar-collapse .navbar-nav .level-1.inaccessible").remove(), $(".quick-navbar.middle-quick-menus.top-stick-menus .full-width-bg .container .middle-menu-bar.navbar .navbar-collapse .navbar-nav .level-1 .toggleTopMenu").hover(function () {
	            $(this).parent("li").find("ul:first").css("display", "block");
	          }), setTimeout(function () {
	            $(window).resize();
	          }, 2e3);var width = getWidth();if ($(".sub-menu li.withIcon a i").remove(), $(".quick-navbar.middle-quick-menus .sub-menu li.level-3 a span.new-item img[src=false]").parent().addClass("not-new"), $(".quick-navbar.middle-quick-menus .sub-menu li.level-3 a span.new-item.not-new").remove(), $(".sub-collapse .navbar-nav li.dropdown ul.dropdown-menu li .sub-parent .toggleSubMenu").on("click", function () {
	            var $currentDiv = $(this).next("ul.sub-menu").toggle("slow");$("ul.sub-menu").not($currentDiv).hide(), $(this).toggleClass("slide"), $("span.toggleSubMenu").not($(this)).removeClass("glyphicon-menu-up"), $("span.toggleSubMenu").not($(this)).addClass("glyphicon-menu-down"), $(this).hasClass("slide") ? ($(this).removeClass("glyphicon-menu-down"), $(this).addClass("glyphicon-menu-up")) : ($(this).removeClass("glyphicon-menu-up"), $(this).addClass("glyphicon-menu-down"));
	          }), parseInt(width) < parseInt(767)) {
	            $("ul.dropdown-menu li.level-2 .sub-parent").each(function (index, itemList) {
	              0 < $(itemList).find("ul.sub-menu").length && 0 == $(itemList).hasClass("no-parent") ? ($(this).addClass("no-link"), $(itemList).find("ul.sub-menu").removeClass("child-list")) : ($(this).addClass("enable-link"), $(itemList).find("ul.sub-menu").addClass("child-list"));
	            }), $(".offer-special-image").parent().addClass("special-offer"), $(".offer-special-image").parent().parent().parent().addClass("special-offer-images"), $(".navbar-nav li").not(".sub-section-1").find(".megamenu-content .special-offer a.offer-special-image").hide(), $(".sub-collapse .navbar-nav li:last-child .special-offer-images .level-2:last-child .special-offer a.offer-special-image").show(), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.hover").css("display", "block"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.general").css("display", "none"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.active-hover").css("display", "none !important"), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.dropdown.megamenu-fw:nth-child(7)").removeClass("shop-child"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw a").unbind("click"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw").addClass("mobileview"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a.sub-title-heading").bind("click", function (e) {
	              $(this).next("ul.dropdown-menu").css("height", "100%"), $("body").css("overflow-y", "hidden"), $(this).next("ul.dropdown-menu").css("overflow-y", "scroll"), $(this).parents(".bp-widget").prevAll(".bp-container").css("visibility", "hidden"), $(this).parents(".bp-widget").nextAll(".bp-container").css("visibility", "hidden"), $(this).parents(".bp-widget").next(".bp-container").find(".bp-container").css("visibility", "hidden"), $("footer").css("visibility", "hidden"), $(this).addClass("slide");var $curentDiv = $(this).next("ul.dropdown-menu").slideToggle("slow");$("ul.dropdown-menu").not($curentDiv).hide("slow"), $("span.toggleTopMenu").not($(this)).removeClass("down-default"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar.navbar-static-top").css("z-index", "0"), $(".top-menu .row.main-nav-container").css("z-index", "0"), $(".web-portal header").css("z-index", "0"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".nb-portal header").css("z-index", "0"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "0");var offerSpecialImage = $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw:last-child .dropdown-menu.special-offer-images  .sub-parent.special-offer a.offer-special-image");offerSpecialImage.show(), offerSpecialImage.css("top", "-6"), offerSpecialImage.css("padding-left", "40"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.tile-menus").removeClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").removeClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleTopMenu").removeClass("down"), $(this).find("span.toggleTopMenu").addClass("up")) : ($(this).find("span.toggleTopMenu").removeClass("up"), $(this).find("span.toggleTopMenu").addClass("down"));
	            }), $(".sub-collapse .navbar-nav li.dropdown a ul").show(), $(".sub-collapse .navbar-nav li.dropdown a.sub-title-heading ").on("click", function (e) {
	              e.preventDefault();var sub_title = $(this).find(".sub-title").text();$("ul.dropdown-menu.megamenu-content li .dropdown-heading .text-heading").text(sub_title), $(this).next("ul").show();
	            }), $(".dropdown-menu .sub-parent.no-link ul.sub-menu").hide(), $(".level-2 .sub-parent.no-link a.tile-menus").removeAttr("href"), $(".level-2 .sub-parent.no-link a.offer-special-image").removeAttr("href"), $(".dropdown .dropdown-menu .sub-parent.no-link a.tile-menus").click(function (e) {
	              var $curentDiv = $(this).next("ul.sub-menu").slideToggle("slow");$("ul.sub-menu:not(.child-list)").not($curentDiv).hide("fast"), $(".level-2 .sub-parent:last-child ul.sub-menu .level-3:last-child").css("border-bottom", "2px solid #486D99"), $("ul.sub-menu .level-3").removeClass("withIcon"), $("ul.sub-menu .level-3").addClass("withIcon"), $("ul.sub-menu:not(.child-list) .level-3.withIcon a i").remove(), $(this).toggleClass("slide"), $(".dropdown-menu .sub-parent a.tile-menus").not($(this)).removeClass("slide"), $("a.tile-menus span.toggleIcon").addClass("down"), $("a.tile-menus span.toggleIcon").removeClass("up"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	            });for (var redAttrSecLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a"), j = 0, i = 0; i < redAttrSecLevel.length; i++) {
	              var getUrl = j,
	                  setUrl = j + 1,
	                  redirectUrlSecondLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + getUrl + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + setUrl + ")").attr("href", redirectUrlSecondLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + setUrl + ")").prop("href", redirectUrlSecondLast), j += 2;
	            }for (var redAttrThrdLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a"), k = 0, l = 0; l < redAttrThrdLevel.length; l++) {
	              var getUrlK = k,
	                  setUrlK = k + 1,
	                  redirectUrlThirdLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + getUrlK + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + setUrlK + ")").attr("href", redirectUrlThirdLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + setUrlK + ")").prop("href", redirectUrlThirdLast), k += 2;
	            }$(".dropdown .dropdown-menu .sub-parent.special-offer a.tile-menus").unbind("click").bind("click", function (e) {
	              $(this).next().next("ul.sub-menu").slideToggle("600"), $(this).toggleClass("slide"), $(".dropdown-menu .sub-parent.special-offer a.tile-menus").not($(this)).removeClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").toggleClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	            }), $(".dropdown .dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").unbind("click").bind("click", function (e) {
	              $(this).next("ul.sub-menu").slideToggle("slow"), $(this).toggleClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.tile-menus").toggleClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	            }), $(".dropdown-heading .close-middle-layer").on("click", function (e) {
	              $(".bp-container").css("visibility", "visible"), $(".bp-container .bp-container").css("visibility", "visible"), $("footer").css("visibility", "visible"), $("ul.dropdown-menu.megamenu-content").hide("500"), $("body").css("overflow-y", "visible"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a.sub-title-heading").removeClass("slide"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar.navbar-static-top").css("z-index", "99999"), $(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "0"), $(".web-portal header").css("z-index", "1"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "1"), $(".nb-portal header").css("z-index", "1"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "1");
	            }), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1").unbind("hover");
	          } else $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw").removeClass("mobileview"), $("ul.dropdown-menu").removeAttr("style");$(window).resize(function () {
	            var width = getWidth();if ($(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw a").unbind("click"), parseInt(width) < parseInt(767)) {
	              $("ul.dropdown-menu li.level-2 .sub-parent").each(function () {
	                if (!b$.portal.isLogin) {
	                  var pwsNavMenu = $(this).hasClass("txn-item"),
	                      pwsHumburger = $(this).hasClass("pws-item");if (pwsNavMenu) {
	                    var navTitle = $(this).find("ul li:first-child a span.menus-heading").text();$(this).find("a span.sub-menu-title").html(navTitle), $(this).find("ul li:first-child").css("display", "none"), $(this).removeClass("txn-item");
	                  }pwsHumburger && ($(this).removeClass("pws-item"), $(this).css("display", "none"));
	                }
	              }), $("ul.dropdown-menu li.level-2 .sub-parent").each(function (index, itemList) {
	                0 < $(itemList).find("ul.sub-menu").length && 0 == $(itemList).hasClass("no-parent") ? ($(this).addClass("no-link"), $(itemList).find("ul.sub-menu").removeClass("child-list")) : ($(this).addClass("enable-link"), $(itemList).find("ul.sub-menu").addClass("child-list"));
	              }), $(".offer-special-image").parent().addClass("special-offer"), $(".offer-special-image").parent().parent().parent().addClass("special-offer-images"), $(".navbar-nav li").not(".sub-section-1").find(".megamenu-content .special-offer a.offer-special-image").hide(), $(".sub-collapse .navbar-nav li:last-child .special-offer-images .level-2:last-child .special-offer a.offer-special-image").show(), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.dropdown.megamenu-fw:nth-child(7)").removeClass("shop-child"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1 a").unbind("hover"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw a").unbind("hover"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.hover").css("display", "block"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.general").css("display", "none"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.active-hover").css("display", "none"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .sub-collapse .nav.navbar-nav .level-1 a i.active-hover").css("display", "none !important"), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.dropdown.megamenu-fw:nth-child(7)").removeClass("shop-child"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw").addClass("mobileview"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw a").unbind("click"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a.sub-title-heading").bind("click", function (e) {
	                $(this).next("ul.dropdown-menu").css("height", "100%"), $("body").css("overflow-y", "hidden"), $(this).next("ul.dropdown-menu").css("overflow-y", "scroll");var $curentDiv = $(this).next("ul.dropdown-menu").slideToggle("slow");$("ul.dropdown-menu").not($curentDiv).hide("slow"), $(this).parents(".bp-widget").prevAll(".bp-container").css("visibility", "hidden"), $(this).parents(".bp-widget").nextAll(".bp-container").css("visibility", "hidden"), $(this).parents(".bp-widget").next(".bp-container").find(".bp-container").css("visibility", "hidden"), $("footer").css("visibility", "hidden"), $(this).addClass("slide"), $("span.toggleTopMenu").not($(this)).removeClass("down-default"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar.navbar-static-top").css("z-index", "0"), $(".web-portal header").css("z-index", "0"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".nb-portal header").css("z-index", "0"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw:last-child .dropdown-menu.special-offer-images  .sub-parent.special-offer a.offer-special-image").show(), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw:last-child .dropdown-menu.special-offer-images  .sub-parent.special-offer a.offer-special-image").css("top", "-6"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw:last-child .dropdown-menu.special-offer-images  .sub-parent.special-offer a.offer-special-image").css("padding-left", "40"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.tile-menus").removeClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").removeClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleTopMenu").removeClass("down"), $(this).find("span.toggleTopMenu").addClass("up")) : ($(this).find("span.toggleTopMenu").removeClass("up"), $(this).find("span.toggleTopMenu").addClass("down"));
	              });for (var redAttrSecLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a"), j = 0, i = 0; i < redAttrSecLevel.length; i++) {
	                var setUrl = j + 1,
	                    redirectUrlSecondLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + j + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + setUrl + ")").attr("href", redirectUrlSecondLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-menu .level-3.redirect > a:eq(" + setUrl + ")").prop("href", redirectUrlSecondLast), j += 2;
	              }for (var redAttrThrdLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a"), k = 0, l = 0; l < redAttrThrdLevel.length; l++) {
	                var setUrlK = k + 1,
	                    redirectUrlThirdLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + k + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + setUrlK + ")").attr("href", redirectUrlThirdLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2 .sub-parent.no-parent.redirect > a:eq(" + setUrlK + ")").prop("href", redirectUrlThirdLast), k += 2;
	              }$(".sub-collapse .navbar-nav li.dropdown a ul").show(), $(".sub-collapse .navbar-nav li.dropdown a.sub-title-heading ").on("click", function (e) {
	                e.stopPropagation(), $(".bp-container.c-template-hdfc-lifestage").css("visibility", "hidden");var sub_title = $(this).find(".sub-title").text();$("ul.dropdown-menu.megamenu-content li .dropdown-heading .text-heading").text(sub_title), $(this).next("ul").show();
	              }), $(".dropdown-menu .sub-parent.no-link ul.sub-menu").hide(), $(".level-2 .sub-parent.no-link a.tile-menus").removeAttr("href"), $(".level-2 .sub-parent.no-link a.offer-special-image").removeAttr("href"), $(".dropdown .dropdown-menu .sub-parent.no-link a.tile-menus").click(function (e) {
	                var $curentDiv = $(this).next("ul.sub-menu").slideToggle("slow");$("ul.sub-menu:not(.child-list)").not($curentDiv).hide("fast"), $(".level-2 .sub-parent:last-child ul.sub-menu .level-3:last-child").css("border-bottom", "2px solid #486D99"), $(".dropdown-menu .sub-parent a.tile-menus").not($(this)).removeClass("slide"), $("ul.sub-menu .level-3").removeClass("withIcon"), $("ul.sub-menu .level-3").addClass("withIcon"), $("ul.sub-menu:not(.child-list) .level-3.withIcon a i").remove(), $(this).toggleClass("slide"), $(".dropdown-menu .sub-parent a.tile-menus").not($(this)).removeClass("slide"), $("a.tile-menus span.toggleIcon").addClass("down"), $("a.tile-menus span.toggleIcon").removeClass("up"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	              }), $(".dropdown .dropdown-menu .sub-parent.special-offer a.tile-menus").unbind("click").bind("click", function (e) {
	                $(this).next().next("ul.sub-menu").slideToggle("slow"), $(this).toggleClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").toggleClass("slide"), $(".dropdown-menu .sub-parent.special-offer a.tile-menus").not($(this)).removeClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	              }), $(".dropdown .dropdown-menu.special-offer-images .sub-parent.special-offer a.offer-special-image").unbind("click").bind("click", function (e) {
	                $(this).next("ul.sub-menu").slideToggle("slow"), $(this).toggleClass("slide"), $(".dropdown-menu.special-offer-images .sub-parent.special-offer a.tile-menus").toggleClass("slide"), $(this).hasClass("slide") ? ($(this).find("span.toggleIcon").removeClass("down"), $(this).find("span.toggleIcon").addClass("up")) : ($(this).find("span.toggleIcon").removeClass("up"), $(this).find("span.toggleIcon").addClass("down"));
	              }), $(".dropdown-heading .close-middle-layer").on("click", function (e) {
	                $(".bp-container").css("visibility", "visible"), $(".bp-container .bp-container").css("visibility", "visible"), $("footer").css("visibility", "visible"), $("body").css("overflow-y", "visible"), $(".dropdown-menu.megamenu-content").hide("500"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a.sub-title-heading").removeClass("slide"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar.navbar-static-top").css("z-index", "99999"), $(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "0"), $(".web-portal header").css("z-index", "1"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "1"), $(".nb-portal header").css("z-index", "1"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "1");
	              }), $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1").unbind("hover");
	            } else $(".quick-navbar.middle-quick-menus .middle-menu-bar .navbar-nav .level-1.megamenu-fw").removeClass("mobileview"), $("ul.dropdown-menu").removeAttr("style");
	          });if (parseInt(width) > parseInt(767)) {
	            if (1 == b$.portal.isLogin) {
	              var curentHref = window.location.href;if (null != curentHref) {
	                var lastWord = curentHref.substr(curentHref.lastIndexOf("/") + 1);null != lastWord && ("dashboard" == lastWord ? $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").addClass("dashboard") : $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").removeClass("dashboard"));
	              }
	            }$(".navbar-nav li").not(".sub-section-1").find(".megamenu-content .special-offer a.offer-special-image").show(), $(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "99999"), $("html.bd-designMode-true .quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "0"), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav .level-1.dropdown.megamenu-fw .megamenu-content .level-2.right-side").parent().addClass("section-right"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1.dropdown.megamenu-fw").mouseover(function () {
	              $(this).parents(".row.full-width-bg").addClass("overlay");
	            }), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1.dropdown.megamenu-fw").mouseenter(function () {
	              $(this).parents(".row.full-width-bg").addClass("overlay");
	            }), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1.dropdown.megamenu-fw").mouseout(function () {
	              $(this).parents(".row.full-width-bg").removeClass("overlay");
	            }), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1.dropdown.megamenu-fw").mouseleave(function () {
	              $(this).parents(".row.full-width-bg").removeClass("overlay");
	            });$(window).scroll(function () {
	              $(window).outerWidth() < 768 && $(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $("html, body").is(":animated") || $("html, body").stop(!0), $(this).scrollTop() > parseInt(343) ? $(".quick-navbar.middle-quick-menus").hasClass("top-stick-menus") || $(".quick-navbar.middle-quick-menus").addClass("top-stick") : $(".quick-navbar").removeClass("top-stick"), 767 < $(window).width() && ($(this).scrollTop() > parseInt(343) ? ($(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "0")) : ($(".web-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "99999")));
	            }), $(".middle-menu-bar .navbar-nav .level-1").unbind("hover");for (redAttrSecLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a"), j = 0, i = 0; i < redAttrSecLevel.length; i++) {
	              getUrl = j, setUrl = j + 1, redirectUrlSecondLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + getUrl + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + setUrl + ")").attr("href", redirectUrlSecondLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + setUrl + ")").prop("href", redirectUrlSecondLast), j += 2;
	            }for (redAttrThrdLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a"), k = 0, l = 0; l < redAttrThrdLevel.length; l++) {
	              getUrlK = k, setUrlK = k + 1, redirectUrlThirdLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + getUrlK + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").attr("href", redirectUrlThirdLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").prop("href", redirectUrlThirdLast), k += 2;
	            }$(".middle-menu-bar .navbar-nav .level-1.megamenu-fw > a").hover(function (event) {
	              event.preventDefault(), $(this).offset().top - $(window).scrollTop() + $(this).outerHeight() + $(this).next().outerHeight() > $(window).outerHeight() && 0 < $(this).parents(".quick-navbar.middle-menus").length && $(window).scrollTop() < 264 && ($("html, body").stop(!0), $("html, body").animate({ scrollTop: 240 }, "slow"));
	            }), $(".header-menu .navbar-collapse .nav.navbar-nav.normal-main-header").each(function (i, items_list) {
	              $(items_list).find("li").each(function (j, li) {
	                $(li).hasClass("active") && $(".quick-navbar .middle-menu-bar .navbar-collapse .nav.navbar-nav li:first-child").addClass("active");
	              });
	            }), $(".sub-menu-level-1.dropdown-menu.megamenu-content a").on("click touchend", function (e) {
	              if (b$.portal.isLogin) {
	                -1 < (link = $(this).attr("href")).indexOf("http") && link.indexOf(window.location.hostname) < 0 && $(this).attr("target", "_blank");
	              } else {
	                var link = $(this).attr("href");sessionStorage.setItem("allowReload", !0), -1 < link.indexOf("http") && link.indexOf(window.location.hostname) < 0 ? $(this).attr("target", "_blank") : b$.portal.navigateTo(link);
	              }
	            });
	          } else $(".quick-navbar").removeClass("top-stick"), $(".middle-menu-bar .navbar-nav .level-1").unbind("hover"), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1:first-child").removeClass("default");$(window).resize(function () {
	            var width = ($(window).width() || window.innerWidth) + 17;if (parseInt(width) > parseInt(767)) {
	              if (1 == b$.portal.isLogin) {
	                var curentHref = window.location.href;if (null != curentHref) {
	                  var lastWord = curentHref.substr(curentHref.lastIndexOf("/") + 1);null != lastWord && ("dashboard" == lastWord ? $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").addClass("dashboard") : $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").removeClass("dashboard"));
	                }
	              }$(".navbar-nav li").not(".sub-section-1").find(".megamenu-content .special-offer a.offer-special-image").show(), $(".navbar-nav .level-1.dropdown.megamenu-fw .dropdown-menu.megamenu-content .level-2 a.offer-special-image").css("position", "unset"), $(".shop-child.special-offer-images .dropdown-menu>li>a:first-child").css("display", "none"), $(".quick-navbar.middle-quick-menus .navbar-collapse .navbar-nav .level-1.shop-child>ul>li>ul").css("margin-top", "0px"), $(".quick-navbar.middle-quick-menus .navbar-collapse .navbar-nav .level-2.special-offer").css("margin-left", "auto"), $(".navbar-nav .level-1.dropdown.megamenu-fw.shop-child .dropdown-menu.megamenu-content .level-2").css("border-left", "1px solid #ddd"), $(".navbar-nav .level-1.dropdown.megamenu-fw.shop-child .dropdown-menu.megamenu-content .level-2 a.offer-special-image").css("border-bottom", "1px solid #ddd"), $(".navbar-nav .level-1.dropdown.megamenu-fw.shop-child .dropdown-menu.megamenu-content .level-2").css("width", "auto"), $(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "99999"), $("html.bd-designMode-true .quick-navbar.middle-quick-menus .middle-menu-bar.navbar-static-top").css("z-index", "0");var megaMenuFw = $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1.dropdown.megamenu-fw"),
	                  fullWidthBg = $(this).parents(".row.full-width-bg");megaMenuFw.mouseover(function () {
	                fullWidthBg.addClass("overlay");
	              }), megaMenuFw.mouseenter(function () {
	                fullWidthBg.addClass("overlay");
	              }), megaMenuFw.mouseout(function () {
	                fullWidthBg.removeClass("overlay");
	              }), megaMenuFw.mouseleave(function () {
	                fullWidthBg.removeClass("overlay");
	              }), $(window).scroll(function () {
	                345 < $(this).scrollTop() ? $(".quick-navbar.middle-quick-menus").hasClass("top-stick-menus") || $(".quick-navbar.middle-quick-menus").addClass("top-stick") : $(".quick-navbar").removeClass("top-stick"), 767 < $(window).width() && ($(this).scrollTop() > parseInt(345) ? ($(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "0")) : ($(".web-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "99999")));
	              });for (var redAttrSecLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a"), j = 0, i = 0; i < redAttrSecLevel.length; i++) {
	                var setUrl = j + 1,
	                    redirectUrlSecondLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + j + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + setUrl + ")").attr("href", redirectUrlSecondLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.redirect.sub-parent > a:eq(" + setUrl + ")").prop("href", redirectUrlSecondLast), j += 2;
	              }for (var redAttrThrdLevel = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a"), k = 0, l = 0; l < redAttrThrdLevel.length; l++) {
	                var setUrlK = k + 1,
	                    redirectUrlThirdLast = $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + k + ")").attr("href");$(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").attr("href", redirectUrlThirdLast), $(".quick-navbar .middle-menu-bar .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").prop("href", redirectUrlThirdLast), k += 2;
	              }$(".middle-menu-bar .navbar-nav .level-1.megamenu-fw > a").hover(function (event) {
	                event.preventDefault(), $(this).offset().top - $(window).scrollTop() + $(this).outerHeight() + $(this).next().outerHeight() > $(window).outerHeight() && 0 < $(this).parents(".quick-navbar.middle-menus").length && $(window).scrollTop() < 264 && ($("html, body").stop(!0), $("html, body").animate({ scrollTop: 260 }, "slow"));
	              }), $(".sub-menu-level-1.dropdown-menu.megamenu-content a").on("click touchend", function (e) {
	                if (b$.portal.isLogin) {
	                  -1 < (link = $(this).attr("href")).indexOf("http") && link.indexOf(window.location.hostname) < 0 && $(this).attr("target", "_blank");
	                } else {
	                  var link = $(this).attr("href");sessionStorage.setItem("allowReload", !0), -1 < link.indexOf("http") && link.indexOf(window.location.hostname) < 0 ? $(this).attr("target", "_blank") : b$.portal.navigateTo(link);
	                }
	              });
	            } else $(".quick-navbar").removeClass("top-stick"), $(".middle-menu-bar .navbar-nav .level-1").unbind("hover");
	          });var privateBankingName = lpWidget.getPreference("privateBanking");if (void 0 !== privateBankingName) var currentName = privateBankingName.toLowerCase().replace(/\s/g, "");1 == b$.portal.isLogin && $("body").find("a").each(function () {
	            var privateBanking = $(this).attr("href");void 0 !== privateBanking && "" !== privateBanking && void 0 !== privateBankingName && function (url, currentName) {
	              for (var hostArray = url.split("."), returnValue = !0, i = 0; i < hostArray.length; i++) {
	                hostArray[i] === currentName && (returnValue = !1);
	              }return returnValue;
	            }(privateBanking, currentName) && $(this).attr("target", "_blank");
	          });
	        });
	      }, addGapJS: function addGapJS() {
	        $(document).ready(function () {
	          sessionStorage.setItem("eventFired", "0"), $(document).on("click", "li.level-3.withIcon", function () {
	            if (!b$.portal.isGapDisabled() && !b$.portal.isLogin) {
	              var data = sessionStorage.getItem("eventFired"),
	                  clickedMenuName = $(this).children().find("span.menus-heading").text(),
	                  parentMenuName = $(this).parent(".sub-menu").siblings("a").children("span.menus-heading").text(),
	                  grandParentMenu = $(this).parents(".level-1.dropdown").children("a").find("span.menus-heading").text(),
	                  referral = document.referrer,
	                  pagePath = window.location.href,
	                  pageSection = $(".header-menu .navbar-collapse .normal-main-header li.active a").text(),
	                  deviceType = b$.portal.typeOfDevice();0 != data && data || (dataLayer.push({ navtop: grandParentMenu, navdetail: parentMenuName, navsection: clickedMenuName, "page path": pagePath, "Page section": pageSection, referral: referral, userID: "null", deviceType: deviceType, userType: "null", event: "navtracking" }), sessionStorage.setItem("eventFired", "1"));
	            }
	          });var currentUrl = lpWidget.getPreference("currentUrl"),
	              redirectUrl = b$.portal.urlRedirect;currentUrl = redirectUrl + currentUrl;var interval = setInterval(function () {
	            "complete" === document.readyState && (0 < $(".middle-quick-menus ul li").length && ($(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar .nav.navbar-nav li").first().find("a").attr("href", currentUrl), clearInterval(interval)), $(".quick-navbar.middle-quick-menus .middle-menu-bar.navbar .nav.navbar-nav li").first().on("click", function () {
	              b$.portal.isLogin || (window.location.href = currentUrl);
	            }));
	          }, 500);
	        });
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  var $ = __webpack_require__(112);exports.NavBarAdvancedController = function (Utils, $scope, $timeout, lpWidget, lpPortal, lpCoreBus, lpCoreUtils, lpUsersPreference, lpUsersAuthentication, $window, $http, LogoutService, KeepAliveService) {
	    Utils.addCustomBaseJS(), Utils.addGapJS();var bus = lpCoreBus,
	        util = lpCoreUtils,
	        redirectUrl = b$.portal.urlRedirect;$scope.deviceType = b$.portal.typeOfDevice(), "tablet" === $scope.deviceType && ($scope.loginmenuClosed = !0);$scope.toggleMenu = function () {
	      $scope.showMenu = !$scope.showMenu, 0 < $scope.animationHook.length && ($scope.showMenu ? ($scope.animationCloseClass = "", $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass) : ($scope.animationCloseClass = "close", $scope.animationClass = $scope.animationPrepend + $scope.animationHook));
	    }, $scope.closeMenu = function () {
	      $scope.showMenu || ($scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass);
	    }, $scope.updateSize = function (data) {
	      $scope.navSticky && $scope.elementHeight !== data.height && ($scope.elementHeight = data.height, setTimeout(function () {
	        var isStatic = ["absolute", "fixed"].indexOf($(".navbar", lpWidget.body).css("position")) < 0;bus.publish("launchpad-retail.offsetTopCorrection", { isStatic: isStatic, offsetTopCorrection: $scope.elementHeight });
	      }, 10));
	    }, $scope.toggleLauncherMenu = function () {
	      bus.publish("launchpad-retail.toggleLauncherMenu");
	    }, $scope.getLinkClick = function (event, link) {
	      var conditionalLink = link,
	          parentClass = event.target.parentNode.parentElement.className;if (1 == b$.portal.isLogin && -1 != parentClass.indexOf("withIcon") && conditionalLink.indexOf("https") < 0 && -1 === parentClass.indexOf("others") && -1 === parentClass.indexOf("own")) {
	        var the_arr = conditionalLink.split("/");the_arr.pop(), conditionalLink = the_arr.join("/");
	      }event.target.parentNode.href = conditionalLink;
	    }, $scope.accordionBehaviour = function (option, event, mainMenuURL) {
	      angular.element($(".others")).on("click", function (event) {
	        sessionStorage.setItem("setAccountFlag", "others");
	      }), angular.element($(".own")).on("click", function (event) {
	        sessionStorage.setItem("setAccountFlag", "own");
	      });var dataObj = { count: 0, eventCategory: "menu", eventAction: "menuItemClick", eventLabel: event.currentTarget.innerHTML };if (gadgets.pubsub.publish("nbGap", dataObj), mainMenuURL.contains("/")) var url = mainMenuURL;else url = option;var urlArray = url.split("#")[0].split("/");if (1 < urlArray.length) {
	        var menuTargetUrl,
	            currUrl = window.location.pathname.split("/"),
	            currHashUrl = window.location.hash,
	            menuTarget = event.target.parentNode.getAttribute("target");if ("" != window.location.port && (menuTargetUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + url), "" != window.location.port && null != window.location.port || (menuTargetUrl = window.location.protocol + "//" + window.location.hostname + url), 1 == b$.portal.isLogin) {
	          if (-1 != event.target.parentNode.parentElement.className.indexOf("withIcon")) {
	            currUrl.shift(), currUrl = currUrl.join("/");var the_arr = url.split("/"),
	                val = the_arr[the_arr.length - 1];sessionStorage.setItem("scrollId", val), -1 < url.indexOf(currUrl) && (event.preventDefault(), gadgets.pubsub.publish("scrollId", val), gadgets.pubsub.publish("seamlessAnchorScroll", val), gadgets.pubsub.publish("seamlessAnchorAccordionScroll"));
	          }mainMenuURL.contains(currUrl) && ($("#webPay>ul.sub-menu-level-1.dropdown-menu.megamenu-content").hide(), $("li#webPay.dropdown").css({ background: "transparent" }), $("li#webPay.dropdown a>span").css({ color: "#ccc" }), $("li#webPay.dropdown a>span.pay-icon-large-off").css({ "background-position": "-51px -221px" }), $("#webPay>a, li#webPay .dropdown-menu.megamenu-content").mouseenter(function () {
	            $("li#webPay .dropdown-menu.megamenu-content").css("display", "flex"), $("li#webPay.dropdown").css("background", "#fff"), $("li#webPay.dropdown a>span").css({ color: "#444" }), $("li#webPay.dropdown a>span.pay-icon-large-off").css({ "background-position": "-100px -221px" });
	          }), $("#webPay>a, li#webPay .dropdown-menu.megamenu-content").mouseleave(function () {
	            $("li#webPay .dropdown-menu.megamenu-content").css("display", "none"), $("li#webPay.dropdown").css("background", "transparent"), $("li#webPay.dropdown a>span").css({ color: "#ccc" }), $("li#webPay.dropdown a>span.pay-icon-large-off").css({ "background-position": "-51px -221px" });
	          }), $("#webSave>ul.sub-menu-level-1.dropdown-menu.megamenu-content").hide(), $("li#webSave.dropdown").css({ background: "transparent" }), $("li#webSave.dropdown a>span").css({ color: "#ccc" }), $("li#webSave.dropdown a>span.Save-icon-large-off").css({ "background-position": "-51px -221px" }), $("#webSave>a, li#webSave .dropdown-menu.megamenu-content").mouseenter(function () {
	            $("li#webSave .dropdown-menu.megamenu-content").css("display", "flex"), $("li#webSave.dropdown").css("background", "#fff"), $("li#webSave.dropdown a>span").css({ color: "#444" }), $("li#webSave.dropdown a>span.Save-icon-large-off").css({ "background-position": "-100px -221px" });
	          }), $("#webSave>a, li#webSave .dropdown-menu.megamenu-content").mouseleave(function () {
	            $("li#webSave .dropdown-menu.megamenu-content").css("display", "none"), $("li#webSave.dropdown").css("background", "transparent"), $("li#webSave.dropdown a>span").css({ color: "#ccc" }), $("li#webSave.dropdown a>span.Save-icon-large-off").css({ "background-position": "-51px -221px" });
	          }), $("#webInvest>ul.sub-menu-level-1.dropdown-menu.megamenu-content").hide(), $("li#webInvest.dropdown").css({ background: "transparent" }), $("li#webInvest.dropdown a>span").css({ color: "#ccc" }), $("li#webInvest.dropdown a>span.Invest-icon-large-off").css({ "background-position": "-51px -221px" }), $("#webInvest>a, li#webInvest .dropdown-menu.megamenu-content").mouseenter(function () {
	            $("li#webInvest .dropdown-menu.megamenu-content").css("display", "flex"), $("li#webInvest.dropdown").css("background", "#fff"), $("li#webInvest.dropdown a>span").css({ color: "#444" }), $("li#webInvest.dropdown a>span.Invest-icon-large-off").css({ "background-position": "-100px -221px" });
	          }), $("#webInvest>a, li#webInvest .dropdown-menu.megamenu-content").mouseleave(function () {
	            $("li#webInvest .dropdown-menu.megamenu-content").css("display", "none"), $("li#webInvest.dropdown").css("background", "transparent"), $("li#webInvest.dropdown a>span").css({ color: "#ccc" }), $("li#webInvest.dropdown a>span.Invest-icon-large-off").css({ "background-position": "-51px -221px" });
	          }), $("#webBorrow>ul.sub-menu-level-1.dropdown-menu.megamenu-content").hide(), $("li#webBorrow.dropdown").css({ background: "transparent" }), $("li#webBorrow.dropdown a>span").css({ color: "#ccc" }), $("li#webBorrow.dropdown a>span.Borrow-icon-large-off").css({ "background-position": "-51px -221px" }), $("#webBorrow>a, li#webBorrow .dropdown-menu.megamenu-content").mouseenter(function () {
	            $("li#webBorrow .dropdown-menu.megamenu-content").css("display", "flex"), $("li#webBorrow.dropdown").css("background", "#fff"), $("li#webBorrow.dropdown a>span").css({ color: "#444" }), $("li#webBorrow.dropdown a>span.Borrow-icon-large-off").css({ "background-position": "-100px -221px" });
	          }), $("#webBorrow>a, li#webBorrow .dropdown-menu.megamenu-content").mouseleave(function () {
	            $("li#webBorrow .dropdown-menu.megamenu-content").css("display", "none"), $("li#webBorrow.dropdown").css("background", "transparent"), $("li#webBorrow.dropdown a>span").css({ color: "#ccc" }), $("li#webBorrow.dropdown a>span.Borrow-icon-large-off").css({ "background-position": "-51px -221px" });
	          }), $("#webInsure>ul.sub-menu-level-1.dropdown-menu.megamenu-content").hide(), $("li#webInsure.dropdown").css({ background: "transparent" }), $("li#webInsure.dropdown a>span").css({ color: "#ccc" }), $("li#webInsure.dropdown a>span.Insure-icon-large-off").css({ "background-position": "-51px -221px" }), $("#webInsure>a, li#webInsure .dropdown-menu.megamenu-content").mouseenter(function () {
	            $("li#webInsure .dropdown-menu.megamenu-content").css("display", "flex"), $("li#webInsure.dropdown").css("background", "#fff"), $("li#webInsure.dropdown a>span").css({ color: "#444" }), $("li#webInsure.dropdown a>span.Insure-icon-large-off").css({ "background-position": "-100px -221px" });
	          }), $("#webInsure>a, li#webInsure .dropdown-menu.megamenu-content").mouseleave(function () {
	            $("li#webInsure .dropdown-menu.megamenu-content").css("display", "none"), $("li#webInsure.dropdown").css("background", "transparent"), $("li#webInsure.dropdown a>span").css({ color: "#ccc" }), $("li#webInsure.dropdown a>span.Insure-icon-large-off").css({ "background-position": "-51px -221px" });
	          }));
	        }urlArray[urlArray.length - 1] == currUrl[currUrl.length - 1] && (currHashUrl ? b$.portal.navigateTo(mainMenuURL) : (sessionStorage.setItem("allowReload", !0), location.reload())), 0 == b$.portal.isLogin && "_blank" == menuTarget && (event.stopPropagation(), "chrome" == b$.portal.knowYourBrowser && window.open(menuTargetUrl, "_blank"));
	      } else sessionStorage.setItem("allowReload", !0), b$.portal.navigateTo = function (mainMenuURL) {
	        window.location.assign(mainMenuURL);
	      };
	    }, $(lpWidget.body).find('a[data-uuid="' + lpPortal.page.id + '"]').parents("li").addClass("active"), function () {
	      $scope.showPageTitle = !1, $scope.navSticky = lpWidget.getPreference("navSticky"), $scope.containerType = lpWidget.getPreference("containerType"), $scope.scrollSetting = "lp-" + lpWidget.getPreference("scrollSetting") + "-scroll" || "lp-normal-scroll", $scope.showPageTitle = util.parseBoolean(lpWidget.getPreference("showPageTitle"));var parentPage = parseInt(lpWidget.getPreference("parentPage") || "");switch ($scope.visibleStatus = !1, $scope.logoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("logoURL")) || "", $scope.mobileLogoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("mobileLogoURL")) || "", $scope.launcherIcon = lpWidget.getPreference("launcherIcon") || "arrow-left", $scope.animationHook = lpWidget.getPreference("navigationIconAnimationHook") || "arrow", $scope.showNotificationsBadge = util.parseBoolean(lpWidget.getPreference("showNotificationsBadge")), $scope.locales = lpWidget.getPreference("locales"), $scope.showMenu = !0, $scope.activePage = "", $scope.activeContext = "", $scope.elementHeight = 0, $scope.elementCloseImage = lpPortal.root + "/static/widgets/%5BBBHOST%5D/widget-hdfc-portal-navbar-advanced/media/close.png", $scope.animationPrepend = "animation-", $scope.defaultAnimationClass = "none", $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass, parentPage) {case 1:
	          $scope.parentClass = "personal-navbar";break;case 2:
	          $scope.parentClass = "nri-navbar";break;case 3:
	          $scope.parentClass = "sme-navbar";break;case 4:
	          $scope.parentClass = "wholesale-navbar";break;case 5:
	          $scope.parentClass = "agri-navbar";break;default:
	          $scope.parentClass = "";}$scope.portalName = lpPortal.root;var useLoc = util.resolvePortalPlaceholders(lpWidget.getPreference("useLocation")) || "";$scope.pageType = "other" == useLoc ? "top-stick-menus" : "middle-menus";var showMenus = util.resolvePortalPlaceholders(lpWidget.getPreference("showMenu")) || "";"req" == showMenus ? ($scope.menuToShow = !0, $scope.showNavbar = !0, $scope.menuClass = "navbar-available") : ($scope.menuToShow = !1, $scope.showNavbar = !1), $scope.requiredHere = { display: "none" };var screenWidth = $window.innerWidth;$scope.requiredHere = "req" == showMenus ? { display: "block" } : { display: "none" }, "other" == useLoc ? $(window).resize(function () {
	        767 < angular.element(window).width() ? ($scope.requiredHere = { display: "block" }, $scope.middleNavbar = !1) : ($scope.requiredHere = { display: "none" }, $scope.middleNavbar = !0);
	      }) : screenWidth < 768 && ($scope.middleNavbar = !0), $scope.extraClass = "", 767 < screenWidth ? "top-stick-menus" == $scope.pageType && ($scope.required = "display:block;") : "top-stick-menus" == $scope.pageType && ($scope.required = "display:none;"), $scope.showProfileInfo = lpCoreUtils.parseBoolean(lpWidget.getPreference("showProfileInfo")), $scope.showProfileInfo && ($scope.profileTitle = lpWidget.getPreference("profileTitle"), $scope.profileTitleLink = lpWidget.getPreference("profileTitleLink"), lpPortal.userId ? ($scope.profileInfo = { preferredName: lpPortal.userId }, $scope.profileInfo.profileImgBg = lpWidget.getPreference("profileImgBg") || "#CCC") : $scope.signinLink = lpWidget.getPreference("signinLink"));var merchantLogin = sessionStorage.getItem("merchantLogin"),
	          eBrokingLogin = sessionStorage.getItem("eBrokingLogin"),
	          isEPACustomer = sessionStorage.getItem("decryptedValue");$scope.displayLink = !0, $scope.displayLink = void 0 === (merchantLogin && eBrokingLogin) || "N" != merchantLogin && "N" != eBrokingLogin, null != isEPACustomer && null != isEPACustomer && (isEPACustomer.includes("PFMS") ? $scope.displayLink = !0 : $scope.displayLink = !1, isEPACustomer.includes("RBIBOND") || $timeout(function () {
	        $(".noroleNB").attr("style", "display: none !important");
	      }, 500));var subDetails = [];$scope.userStatus = !1, $scope.loginmenuClosed = !0;window.location.href;var currentActiveSection = lpWidget.getPreference("section-name"),
	          pwsSiteURL = $(".pws link").attr("href"),
	          isPWS = -1 < window.location.href.indexOf(pwsSiteURL),
	          pwsPortal = $("#main").hasClass("web-portal");if ($(".cookie-overlay button").on("click", function (event) {
	        $(".cookie-overlay .modal.popup-container").removeClass("opened"), $(".cookie-overlay .modal.popup-container").css("display", "none"), event.stopPropagation();
	      }), $scope.onlyClick = !1, $scope.onlyClick = "default" === currentActiveSection, lpPortal.userId) $scope.userStatus = !0, $scope.logout = function () {
	        gadgets.pubsub.publish("nbGap", { eventCategory: "Header", eventAction: "$login", eventLabel: "Logout", count: 0 }), gadgets.pubsub.publish("logoutPopup");
	      };else {
	        $scope.userStatus = !1;var loginLink = lpWidget.getPreference("login-button");$scope.login = function () {
	          var currentUrl = $window.location.pathname;$scope.loginmenuClosed = !1, localStorage.setItem("sourceId", currentUrl);var isCookieEnabled = function () {
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
	              screenFreezed = $(".cookie-overlay .cover").css("display");isCookieEnabled && "block" == screenFreezed ? location.reload(!0) : $(".cookie-overlay .modal.popup-container").css("display", "block"), "mobile" === $scope.deviceType ? ($scope.loginmenuClosed = !1, subDetails.push("mobileLoginOverlay")) : "tablet" === $scope.deviceType ? ($scope.loginmenuClosed = !1, subDetails.push("tabletLoginOverlay")) : "web" === $scope.deviceType && subDetails.push("desktopLoginOverlay"), subDetails.push(currentActiveSection), "default" != currentActiveSection ? gadgets.pubsub.publish("otherLogin", subDetails) : ($window.sessionStorage.clear(), b$.portal.navigateTo(redirectUrl + loginLink));
	        }, $scope.closeNewMenu = function () {
	          $scope.loginmenuClosed = !0, $(".position-find").css({ display: "block" }), $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"), $scope.loginmenuClosed || ($scope.loginmenuClosed = !0, $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".portal-cross").css({ display: "none" }), $(".nav-cross").css({ display: "none" }), $(".position-find").css({ display: "block" }), $(".portal-log-btn").css({ display: "block" }), $(".nav-log-btn").css({ display: "block" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"));
	        };
	      }$scope.buttons = { logo: "logo", icon: "icon" }, $scope.scrollSettingsEnum = { normal: "lp-normal-scroll", transparency: "lp-transparency-scroll", "hide-show": "lp-hide-show-scroll" }, bus.subscribe("launchpad-retail.activeContextChanged", function (data) {
	        $timeout(function () {
	          $scope.activeContext = 0 < data.newActiveContext.length ? data.newActiveContext : $scope.activePage;
	        }, 25);
	      }), bus.subscribe("logoutFromMenu", function (data) {
	        1 == data.openNewTab ? LogoutService.goLogout(data.redirectUrl, { showMegaMenuOverlay: !0, openNewTab: !0 }) : 1 == data.ckStatus ? LogoutService.goLogout(data.redirectUrl, { showMegaMenuOverlay: !0 }) : LogoutService.goLogout("#");
	      }), bus.subscribe("logoutNBSession", function () {
	        LogoutService.goLogout("#", { isLogOutBtn: !0 });
	      }), bus.subscribe("logoutNBSessionTimeout", function (data) {
	        var flag;flag = data.logoutBtn ? { isLogOutBtn: !0 } : { isSessionTimeOut: !0 }, LogoutService.goLogout("#", flag);
	      }), $scope.navSticky && bus.publish("launchpad-retail.stickyNavBar");
	    }();
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.displayLoginAction = function () {
	    return { restrict: "A", scope: { datauserstatus: "=" }, link: function link(scope, element, attrs) {
	        1 == scope.datauserstatus ? element.addClass("show") : (element.addClass("hide"), element.remove());
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-portal-navbar-advanced.js.map