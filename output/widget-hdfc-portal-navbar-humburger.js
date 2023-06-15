(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"), require("feature-hdfc-common-utility"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-portal-navbar-humburger", ["base", "core", "ui", "module-users", "jquery", "feature-hdfc-common-utility"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-portal-navbar-humburger"] = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"), require("feature-hdfc-common-utility"));
	else
		root["widget-hdfc-portal-navbar-humburger"] = factory(root["base"], root["core"], root["ui"], root["module-users"], root["jquery"], root["feature-hdfc-common-utility"]);
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

	module.exports = __webpack_require__(194);

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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-hdfc-portal-navbar-humburger";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      users = __webpack_require__(111),
	      utility = __webpack_require__(129),
	      deps = [core.name, ui.name, users.name, utility.name];module.exports = base.createModule(module.name, deps).controller(__webpack_require__(195)).factory("Utils", __webpack_require__(196)).service(__webpack_require__(197)).run(function (lpWidget, lpPortal) {
	    var navRoot = lpWidget.getPreference("navRoot");if (lpPortal.designMode) {
	      var links = top && top.bd && top.bd.pm && top.bd.pm.model && top.bd.pm.model.links;lpPortal.designMode && links && !navRoot && (navRoot = Object.keys(links).filter(function (id) {
	        return "navroot_mainmenu" === links[id].linkname;
	      })) && navRoot[0] && (lpWidget.setPreference("navRoot", navRoot[0]), lpWidget.model.save(function () {
	        lpWidget.refreshHTML();
	      }));
	    }
	  });
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  var $ = __webpack_require__(112);exports.NavBarAdvancedController = function (Utils, $scope, $timeout, lpWidget, lpPortal, lpCoreBus, lpCoreUtils, lpUsersPreference, lpUsersAuthentication, $location, $http, $window, setProfileService) {
	    Utils.addCustomBaseJS();var bus = lpCoreBus,
	        util = lpCoreUtils,
	        ctrl = this;$scope.closeNewMenu = function () {
	      $scope.loginmenuClosed = !0, $(".position-find").css({ display: "block" }), $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"), $scope.loginmenuClosed || ($scope.loginmenuClosed = !0, $(".login-button-new .login_dropdown").css({ display: "none" }), $(".removeicon").css({ display: "none" }), $(".portal-cross").css({ display: "none" }), $(".nav-cross").css({ display: "none" }), $(".position-find").css({ display: "block" }), $(".portal-log-btn").css({ display: "block" }), $(".nav-log-btn").css({ display: "block" }), $(".new-login-overlay.new-overlay-opened").addClass("dnd-body").removeClass("new-overlay-opened"), $("body").find(".position-find span").removeClass("icon-up-open-big"), $("body").find(".position-find span").addClass("icon-down-open-big"), $("body").removeClass("no-scroll-dropdown"));
	    }, ctrl.displayFlag = !0, 1 == b$.portal.isLogin && (ctrl.profilePicture = setProfileService.profilePicture, ctrl.appID = sessionStorage.getItem("AppId"), ctrl.fullName = sessionStorage.getItem("fullName"), $scope.showHide = function () {
	      ctrl.appID = sessionStorage.getItem("AppId");sessionStorage.getItem("decryptedValue");"RS" == ctrl.appID ? setProfileService.getAccountList().then(function (businessFlagResponse) {
	        businessFlagResponse.isSuccess ? ctrl.flagResponse = businessFlagResponse.relationshipCodeFlag : ctrl.flagResponse = !1;
	      }) : ctrl.flagResponse = !1;
	    }, $scope.businessHide = function () {
	      $($("#Business")[0]).addClass("hideMenu"), ctrl.flagResponse && $($("#Business")[0]).removeClass("hideMenu");
	    }, "LN" != ctrl.appID && "CC" != ctrl.appID || (ctrl.userName = sessionStorage.getItem("custId")), gadgets.pubsub.subscribe("userImage", function (data) {
	      setProfileService.profilePicture.setPic = data.profileImage, ctrl.profilePicture.setPic = setProfileService.profilePicture.setPic, setProfileService.profilePicture.isDefaultImage = !1, "" === ctrl.profilePicture.setPic && (setProfileService.profilePicture.isDefaultImage = !0), $scope.$apply();
	    }), "RS" == ctrl.appID && (ctrl.userName = ctrl.fullName));var merchantLogin = sessionStorage.getItem("merchantLogin"),
	        eBrokingLogin = sessionStorage.getItem("eBrokingLogin"),
	        isEPACustomer = sessionStorage.getItem("decryptedValue");$scope.displayLink = !0, $scope.displayLink = void 0 === (merchantLogin && eBrokingLogin) || "N" != merchantLogin && "N" != eBrokingLogin, null != isEPACustomer && null != isEPACustomer && (isEPACustomer.includes("PFMS") ? $scope.displayLink = !0 : $scope.displayLink = !1);var cacheImage = sessionStorage.getItem("profileImageCache");"true" !== sessionStorage.getItem("profileFlag") ? 1 == b$.portal.isLogin && (setProfileService.setProfile().then(function (response) {
	      var confirmKycDapUrl = response.customerProfile.confirmKycDapUrl;if (sessionStorage.setItem("profileFlag", !0), sessionStorage.setItem("kycDap", confirmKycDapUrl), response.customerProfile.thumbnail) {
	        setProfileService.profilePicture.setPic = response.customerProfile.thumbnail;var profileImageCache = setProfileService.profilePicture.setPic;sessionStorage.setItem("profileImageCache", profileImageCache), setProfileService.profilePicture.isDefaultImage = !1;
	      } else setProfileService.profilePicture.isDefaultImage = !0;
	    }).catch(function (err) {
	      setProfileService.profilePicture.isDefaultImage = !0;
	    }), window.headerProfileCall = !0) : null == cacheImage || "" == cacheImage ? (setProfileService.profilePicture.setPic = cacheImage, setProfileService.profilePicture.isDefaultImage = !0) : (setProfileService.profilePicture.setPic = cacheImage, setProfileService.profilePicture.isDefaultImage = !1);$scope.showProfileInfo = lpCoreUtils.parseBoolean(lpWidget.getPreference("showProfileInfo")), $scope.profileTitleLink = b$.portal.urlRedirect + "/" + lpWidget.getPreference("profileTitleLink"), $scope.toggleMenu = function () {
	      $scope.showMenu = !$scope.showMenu, 0 < $scope.animationHook.length && ($scope.showMenu ? ($scope.animationCloseClass = "", $scope.animationBGDisabledClass = "", $scope.animationLoginButtonClass = "", $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass) : ($scope.animationCloseClass = "close", $scope.animationBGDisabledClass = "disabled", $scope.animationLoginButtonClass = "navbar-top-log-button", $scope.animationClass = $scope.animationPrepend + $scope.animationHook));
	    }, $scope.closeMenu = function () {
	      $scope.showMenu || ($scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass);
	    }, $scope.updateSize = function (data) {
	      $scope.navSticky && $scope.elementHeight !== data.height && ($scope.elementHeight = data.height, setTimeout(function () {
	        var isStatic = ["absolute", "fixed"].indexOf($(".navbar", lpWidget.body).css("position")) < 0;bus.publish("launchpad-retail.offsetTopCorrection", { isStatic: isStatic, offsetTopCorrection: $scope.elementHeight });
	      }, 10));
	    }, $scope.toggleLauncherMenu = function () {
	      bus.publish("launchpad-retail.toggleLauncherMenu");
	    }, $scope.accordionBehaviour = function (option) {
	      var dataObj = { count: 0, eventCategory: "menu", eventAction: "menuItemClick", eventLabel: event.currentTarget.innerHTML };gadgets.pubsub.publish("nbGap", dataObj), sessionStorage.setItem("linkClicked", !0), localStorage.setItem("menuItemClicked", option);
	    }, $(lpWidget.body).find('a[data-uuid="' + lpPortal.page.id + '"]').parents("li").addClass("active"), gadgets.pubsub.subscribe("POPUP_HAS_HISTORY", function () {
	      b$.portal.popUpOpened = !0, $(".middle-menu-bar.navbar.navbar-inverse").addClass("hide"), $(".popup-back").removeClass("hide").addClass("popup-back-style"), $(".lp-navbar-advanced.container").css("background", "#3B536F");
	    }), gadgets.pubsub.subscribe("POPUP_GO_BACK", function (data) {
	      ctrl.backClick(data);
	    }), ctrl.backClick = function (data) {
	      b$.portal.popUpOpened = !1, delete b$.portal.popUpOpened, $(".middle-menu-bar.navbar.navbar-inverse").removeClass("hide"), $(".popup-back").removeClass("popup-back-style").addClass("hide"), $(".hdfc-logo-icon, .secondary-logo-image").removeClass("hide"), $(".lp-navbar-advanced.container").css("background", "#3B536F"), $(".popup-title-heading").removeClass("popup-heading-style").addClass("hide"), null == data && gadgets.pubsub.publish("goBack", "");
	    }, function () {
	      $scope.showPageTitle = !1;var pageUrl = window.location.href;$scope.checkUp = function (current) {
	        return -1 < pageUrl.indexOf(current);
	      };var redirectUrl = b$.portal.urlRedirect;$scope.navSticky = lpWidget.getPreference("navSticky"), $scope.containerType = lpWidget.getPreference("containerType"), $scope.scrollSetting = "lp-" + lpWidget.getPreference("scrollSetting") + "-scroll" || "lp-normal-scroll", $scope.showPageTitle = util.parseBoolean(lpWidget.getPreference("showPageTitle")), $scope.logoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("logoURL")) || "", $scope.mobileLogoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("mobileLogoURL")) || "", angular.element(".top-layer .mobile-logo").attr("src", $scope.mobileLogoUrl), $scope.launcherIcon = lpWidget.getPreference("launcherIcon") || "arrow-left", $scope.animationHook = lpWidget.getPreference("navigationIconAnimationHook") || "arrow", $scope.showNotificationsBadge = util.parseBoolean(lpWidget.getPreference("showNotificationsBadge")), $scope.locales = lpWidget.getPreference("locales"), $scope.portalName = lpPortal.root;var absoluteUrlArr = $location.$$absUrl.split("/");$scope.absUrl = absoluteUrlArr[0] + "//" + absoluteUrlArr[2] + redirectUrl + "/";var humburgerObject,
	          parentPage = lpWidget.getPreference("parentPage") || "",
	          humburgerDrpdownValue = lpWidget.getPreference("humburgerDropdownValue"),
	          humburgerDrpdownLinks = lpWidget.getPreference("humburgerDropdownLinks");humburgerDrpdownValue = humburgerDrpdownValue.split("#"), humburgerDrpdownLinks = humburgerDrpdownLinks.split("#"), $scope.finalDropdown = [], $(humburgerDrpdownValue).each(function (index) {
	        humburgerObject = 1 == b$.portal.isLogin ? { val: humburgerDrpdownValue[index], links: "https://www.hdfcbank.com/" + humburgerDrpdownLinks[index] } : { val: humburgerDrpdownValue[index], links: $scope.absUrl + humburgerDrpdownLinks[index] }, $scope.finalDropdown.push(humburgerObject);
	      }), $scope.selectedItem = $scope.finalDropdown[0].val, $scope.visibleStatus = !1, 1 == parentPage ? ($scope.parentClass = "personal-navbar", $scope.shortTitle = "personal") : 2 == parentPage ? ($scope.parentClass = "nri-navbar", $scope.shortTitle = "nri") : 3 == parentPage ? ($scope.parentClass = "sme-navbar", $scope.shortTitle = "sme") : 4 == parentPage ? ($scope.parentClass = "wholesale-navbar", $scope.shortTitle = "wholesale", $scope.visibleStatus = !0) : 5 == parentPage ? ($scope.parentClass = "agri-navbar", $scope.shortTitle = "agri") : $scope.parentClass = "", $scope.locateUs = lpWidget.getPreference("locateUs"), $(".navbar-collapse personal-navbar collapse inn .navbar-top-section .mid-layer, .navbar-top-question").on("click", function (event) {
	        event.preventDefault(), toggleEvaChat();
	      }), $scope.showMenu = !0, $scope.activePage = "", $scope.activeContext = "", $scope.elementHeight = 0, $scope.elementCloseImage = util.resolvePortalPlaceholders("$(contextRoot)/static/widgets/%5BBBHOST%5D/widget-hdfc-portal-navbar-humburger/media/close.png"), angular.element(".close-top-layer img").attr("src", $scope.elementCloseImage), $scope.animationPrepend = "animation-", $scope.defaultAnimationClass = "none", $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass;var activeUrl = lpWidget.getPreference("activeUrl");activeUrl = redirectUrl + activeUrl;var interval = setInterval(function () {
	        "complete" === document.readyState && 0 < $(".mobile-humburger-menu .navbar-nav li a").length && ($(".quick-navbar.mobile-humburger-menu .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav li").first().find("a").attr("href", activeUrl), clearInterval(interval));
	      }, 500);if ($(".quick-navbar.mobile-humburger-menu .full-width-bg .middle-menu-bar.navbar.navbar-inverse .navbar-nav li").first().find("a").attr("href", activeUrl), $scope.showProfileInfo && ($scope.profileTitle = lpWidget.getPreference("profileTitle"), $scope.profileTitleLink = b$.portal.urlRedirect + "/" + lpWidget.getPreference("profileTitleLink"), lpPortal.userId ? ($scope.profileInfo = { preferredName: lpPortal.userId }, $scope.profileInfo.profileImgBg = lpWidget.getPreference("profileImgBg") || "#CCC") : $scope.signinLink = lpWidget.getPreference("signinLink")), $scope.userStatus = !1, lpPortal.userId) $scope.userStatus = !0, $scope.logout = function () {
	        gadgets.pubsub.publish("logoutPopup");
	      };else {
	        $scope.userStatus = !1;var currentActiveSection = lpWidget.getPreference("section-name");$scope.login = function () {
	          "default" != currentActiveSection ? gadgets.pubsub.publish("otherLogin", currentActiveSection) : ($window.sessionStorage.clear(), b$.portal.navigateTo(redirectUrl + "/login"));
	        };
	      }var logoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("logoURL"));$(".navbar-top-section .top-layer .exclude-me").attr("href", logoUrl), $(".navbar-toggle.visible-xs .hdfc-logo-icon").click(function () {
	        sessionStorage.setItem("allowReload", !0), $window.location.reload();
	      }), $scope.buttons = { logo: "logo", icon: "icon" }, $scope.scrollSettingsEnum = { normal: "lp-normal-scroll", transparency: "lp-transparency-scroll", "hide-show": "lp-hide-show-scroll" }, bus.subscribe("launchpad-retail.activeContextChanged", function (data) {
	        $timeout(function () {
	          $scope.activeContext = 0 < data.newActiveContext.length ? data.newActiveContext : $scope.activePage;
	        }, 25);
	      }), $scope.navSticky && bus.publish("launchpad-retail.stickyNavBar");
	    }();
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  return function () {
	    return { addCustomBaseJS: function addCustomBaseJS() {
	        function setHamburger() {
	          if ($(".navbar-humburger-menu .navbar-collapse.collapse").hasClass("inn")) {
	            var width = self.innerWidth ? self.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body ? document.body.clientWidth : void 0,
	                deviceHeight = $(window).height();$(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("height", deviceHeight), width < 481 && ($(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("width", width - 80), $(".navbar-humburger-menu .navbar-header .navbar-top-layer .close-top-layer").css({ left: width - 80 })), 480 < width && ($(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("width", 330), $(".navbar-humburger-menu .navbar-header .navbar-top-layer .close-top-layer").css({ left: 330 })), 767 < $(window).width() && ($(".web-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "block"), $(".nb-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "block"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu").removeClass("disabled"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-hidden", "false"), $(".main-nav .lp-navbar-advanced .navbar.navbar-inverse .header-menu .navbar-header.clearfix").css("display", "block"), $(".main-nav .lp-navbar-advanced .navbar.navbar-inverse .navbar-collapse").css("display", "block"), $(".web-portal .top-menu .main-header .locate-us .help-img").css("display", "inline-block"), $(".nb-portal .top-menu .main-header .locate-us .help-img").css("display", "inline-block"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-expanded", "false"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("visibility", "hidden"), $("html, body").css("overflow-y", "visible"), $("html,body").css("position", "relative"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").removeClass("inn")), $(window).width() < 768 && ($(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".web-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "none"), $(".nb-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "none"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu button.navbar-toggle").removeClass("animation-arrow"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu button.navbar-toggle").addClass("animation-none"));var menuHeight = $(window).height() - $(".navbar-top-section").outerHeight();$(".sub-menu-items .nav.navbar-nav.lp-navbar-advanced-root").height(menuHeight);
	          } else $(window).width() < 768 && ($(".web-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .main-nav-container .main-header.bp-container .navbar .header-menu .navbar-collapse").css("display", "none"));$(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent a , .quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .level-3 a").on("click", function (e) {
	            var link = $(this).attr("href");sessionStorage.setItem("allowReload", !0), -1 < link.indexOf("http") && link.indexOf(window.location.hostname) < 0 ? $(this).attr("target", "_blank") : b$.portal.navigateTo(link);
	          });
	        }$(document).ready(function () {
	          $(".quick-navbar.mobile-humburger-menu .sub-menu li.withIcon a i").remove(), $(".quick-navbar.mobile-humburger-menu .sub-collapse .navbar-nav li.dropdown ul.dropdown-menu li .sub-parent .toggleSubMenu").on("click", function () {
	            var $currentDiv = $(this).next("ul.sub-menu").toggle("slow");$("ul.sub-menu").not($currentDiv).hide("slow"), $(this).toggleClass("slide"), $("span.toggleSubMenu").not($(this)).removeClass("glyphicon-menu-up"), $("span.toggleSubMenu").not($(this)).addClass("glyphicon-menu-down"), $(this).hasClass("slide") ? ($(this).removeClass("glyphicon-menu-down"), $(this).addClass("glyphicon-menu-up")) : ($(this).removeClass("glyphicon-menu-up"), $(this).addClass("glyphicon-menu-down"));
	          });var helpPath = $(".help-img img").attr("src"),
	              locatePath = $(".locate-img img").attr("src");$(".navbar-top-question img").attr("src", helpPath), $(".navbar-top-map img").attr("src", locatePath), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu button.navbar-toggle").on("click", function (e) {
	            if (0 != $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").length) {
	              var helpPath = $(".help-img img").attr("src"),
	                  locatePath = $(".locate-img img").attr("src");$(".navbar-top-question img").attr("src", helpPath), $(".navbar-top-map img").attr("src", locatePath), $(this).addClass("animation-arrow"), $(this).removeClass("animation-none"), $(".navbar-top-section").show(), $(".navbar-top-section .login-button").show(), 1 == b$.portal.isLogin && $(".navbar-top-section .pb-profile-title span.glyphicon.glyphicon-lock").css("display", "none"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu").addClass("disabled"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").addClass("inn");var urlPage = function (url) {
	                var defaultMenu = 1;-1 < url.toUpperCase().indexOf("INDEX") || -1 < url.toUpperCase().indexOf("PERSONAL") ? defaultMenu = 1 : -1 < url.toUpperCase().indexOf("NRI") ? defaultMenu = 2 : -1 < url.toUpperCase().indexOf("SME") ? defaultMenu = 3 : -1 < url.toUpperCase().indexOf("WHOLESALE") ? defaultMenu = 4 : -1 < url.toUpperCase().indexOf("AGRI") && (defaultMenu = 5);return defaultMenu;
	              }(window.location.href),
	                  currentPageSelect = "personal",
	                  pageNameForSelect = "Personal";1 == urlPage ? (currentPageSelect = "personal", pageNameForSelect = "Personal") : 2 == urlPage ? (currentPageSelect = "nri", pageNameForSelect = "NRI") : 3 == urlPage ? (currentPageSelect = "sme", pageNameForSelect = "SME") : 4 == urlPage ? (currentPageSelect = "wholesale", pageNameForSelect = "Wholesale") : 5 == urlPage && (currentPageSelect = "agri", pageNameForSelect = "Agri"), $(".hamburgerTopNavigation>option").filter(function () {
	                return $(this).text() == pageNameForSelect;
	              }).prop("selected", !0), $(".hamburgerTopNavigation").on("change", function (event) {
	                var $el = $(this).find("option:selected").val();1 == b$.portal.isLogin ? (event.preventDefault(), gadgets.pubsub.publish("externalNBPopup", $el)) : $(location).attr("href", $el);
	              }), $(".sub-menu-items .navbar-nav.lp-navbar-advanced-root.items-" + currentPageSelect).css("display", "block"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("visibility", "visible"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("overflow-y", "hidden"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("left", "0px"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-expanded", "true"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-hidden", "true"), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-static-top").css("z-index", "0"), $(".top-menu .main-nav-container .main-header.bp-container .navbar .header-menu .navbar-header").css("display", "none"), $(".top-menu .main-nav-container .main-header.bp-container .navbar .header-menu .navbar-collapse").css("display", "none"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".web-portal .top-menu .main-header .locate-us .help-img").css("display", "none"), $(".web-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "none"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "0"), $(".nb-portal .top-menu .main-header .locate-us .help-img").css("display", "none"), $(".nb-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "none"), $("html, body").css("overflow-y", "hidden"), $("html,body").css("position", "fixed"), $(".top-menu .main-nav-container .main-header .slick-slider-main-header").css("display", "none"), $(".top-menu .main-nav-container").css("z-index", "1"), $(".top-menu .main-nav-container .main-header .navbar").css("z-index", "0"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-header.clearfix").css("height", "0"), $(".top-menu .main-nav-container .main-header .navbar").css("min-height", "0"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("ul.dropdown-menu").css("display", "block"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("ul.dropdown-menu").show(), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").addClass("slide"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").children(".toggleTopMenu").removeClass("down"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").children(".toggleTopMenu").addClass("up"), setHamburger();
	            }
	          }), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-top-layer .close-top-layer").on("click", function () {
	            setTimeout(function () {
	              $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu").removeClass("disabled"), $(".top-menu .main-nav-container .main-header .slick-slider-main-header").css("display", "block"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-header.clearfix").css("height", "44"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-header.clearfix .visible-xs").css("display", "block"), $(".quick-navbar.middle-quick-menus .full-width-bg .middle-menu-bar.navbar.navbar-static-top").css("z-index", "1000"), $(".web-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".top-menu .main-nav-container .main-header.bp-container .navbar .header-menu .navbar-header").css("display", "block"), 1 != b$.portal.isLogin && $(".top-menu .main-nav-container .main-header.bp-container .navbar .header-menu .navbar-collapse").css("display", "block"), $(".web-portal .top-menu .main-header .locate-us .help-img").css("display", "inline-block"), $(".nb-portal .top-menu .main-header .locate-us .help-img").css("display", "inline-block"), $(".web-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "block"), $(".nb-portal .top-menu .main-header .locate-us .search-icon-mobile").css("display", "block"), $("html, body").css("overflow-y", "visible"), $("html,body").css("position", "relative"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").removeClass("inn");
	            }, 600), $(".navbar-humburger-menu.disabled .navbar-header .navbar-top-layer .close-top-layer").css("left", "-100px"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu button.navbar-toggle").removeClass("animation-arrow"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu button.navbar-toggle").addClass("animation-none"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("height", "auto"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-expanded", "false"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").attr("aria-hidden", "false"), $(".quick-navbar.mobile-humburger-menu").css("width", "auto"), $(".top-menu .main-nav-container").css("z-index", "0"), $(".top-menu .main-nav-container").css("width", "auto"), $(".logged-in .top-menu .main-nav-container").css("height", "48"), $(".top-menu .main-nav-container .main-header .navbar").css("z-index", "1"), $(".top-menu .row.main-nav-container .main-header .hamer").css("z-index", "0"), $(".navbar-top-section .login-button").hide(), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("width", 0), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("ul.dropdown-menu").css("display", "none"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("ul.dropdown-menu").hide(), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").removeClass("slide"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").children(".toggleTopMenu").removeClass("up"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview.active").children("a").children(".toggleTopMenu").addClass("down");
	          }), $(window).on("orientationchange", function () {
	            setTimeout(function () {
	              setHamburger(), 767 < $(window).width() && ($(".web-portal .top-menu .row.main-search-container").css("z-index", "99999"), $(".nb-portal .top-menu .row.main-search-container").css("z-index", "99999"));
	            }, 600);
	          }), $("body").on("click", ".navbar-humburger-menu .sub-menu-items .level-1.megamenu-fw.mobileview a", function (e) {
	            var totalNumber = $(this).parent().siblings("li").length;$(this).parent().index() == totalNumber && $(".items-personal").animate({ scrollTop: 100 }, 2e3);var $curentDiv = $(this).next("ul.dropdown-menu").slideToggle("500");$("ul.dropdown-menu").not($curentDiv).hide("500");var $curentHref = $(this);$(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a").not($curentHref).removeClass("slide");var $curentIcon = $(this).find(".toggleTopMenu");$(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a .toggleTopMenu").not($curentIcon).addClass("down"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview a .toggleTopMenu").not($curentIcon).removeClass("up"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw.mobileview .megamenu-content .level-2 > a").unbind("click"), $(this).toggleClass("slide"), $(this).parent().toggleClass("slided"), $("span.toggleTopMenu").not($(this)).removeClass("down-default"), $(this).hasClass("slide") ? ($(this).find("span.toggleTopMenu").removeClass("down"), $(this).find("span.toggleTopMenu").addClass("up")) : ($(this).find("span.toggleTopMenu").removeClass("up"), $(this).find("span.toggleTopMenu").addClass("down"));
	          }), $(".quick-navbar.mobile-humburger-menu .sub-collapse .navbar-nav li.dropdown a.sub-title-heading ").on("click", function (e) {
	            e.preventDefault();var sub_title = $(this).find(".sub-title").text();$("ul.dropdown-menu.megamenu-content li .dropdown-heading .text-heading").text(sub_title), $(this).next("ul").show();
	          }), $(window).resize(function () {
	            parseInt(window.innerWidth) < 768 && ($(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").length = 0) && $(".web-portal .top-menu .row.main-search-container").css("z-index", "9999"), $(".offer-special-image").parent().addClass("special-offer"), $(".offer-special-image").parent().parent().parent().addClass("special-offer-images"), $(".navbar-nav li").not(".sub-section-1").find(".megamenu-content .special-offer a.offer-special-image").hide(), $(".quick-navbar.mobile-humburger-menu .sub-collapse .navbar-nav li:last-child .special-offer-images .level-2:last-child .special-offer a.offer-special-image").show(), $(".quick-navbar.middle-quick-menus .middle-menu-bar .nav.navbar-nav .level-1:first-child").removeClass("default"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw a").unbind("click"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1.megamenu-fw").addClass("mobileview"), $(".quick-navbar.mobile-humburger-menu .sub-collapse .navbar-nav li.dropdown a ul").show(), $(".dropdown-heading .close-middle-layer").on("click", function (e) {
	              $(".dropdown-menu.megamenu-content").hide("500");
	            }), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-nav .level-1").unbind("hover"), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-header button.navbar-toggle").on("click", function (e) {
	              var activeClassName = $("header .top-menu .main-header.bp-container .navbar.navbar-inverse .header-menu .navbar-collapse .nav.navbar-nav.normal-main-header li.active a").text();$(".navbar-humburger-menu .navbar-collapse .navbar-top-section .navbar-top-heading").text(activeClassName);
	            });for (var redAttrSecLevel = $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a"), j = 0, i = 0; i < redAttrSecLevel.length; i++) {
	              var setUrl = j + 1,
	                  redirectUrlSecondLast = $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a:eq(" + j + ")").attr("href");$(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a:eq(" + setUrl + ")").attr("href", redirectUrlSecondLast), $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent.redirect > a:eq(" + setUrl + ")").prop("href", redirectUrlSecondLast), j += 2;
	            }for (var redAttrThrdLevel = $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a"), k = 0, l = 0; l < redAttrThrdLevel.length; l++) {
	              var setUrlK = k + 1,
	                  redirectUrlThirdLast = $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + k + ")").attr("href");$(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").attr("href", redirectUrlThirdLast), $(".quick-navbar .middle-menu-bar .navbar-humburger-menu .navbar-collapse .sub-menu-items .nav.navbar-nav .level-1 .megamenu-content .level-2.sub-parent .sub-menu .level-3.redirect > a:eq(" + setUrlK + ")").prop("href", redirectUrlThirdLast), k += 2;
	            }$(window).width() || window.innerWidth;if (1 == b$.portal.isLogin) {
	              var curentHref = window.location.href;if (null != curentHref) {
	                var lastWord = curentHref.substr(curentHref.lastIndexOf("/") + 1);null != lastWord && ("personal" == lastWord && curentHref.indexOf("my-profile") < 0 && (window.location.href = curentHref + "/dashboard"), "dashboard" == lastWord ? $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").addClass("dashboard") : $(".middle-menu-bar .navbar-collapse .nav.navbar-nav .level-1.sub-section-0").removeClass("dashboard"));
	              }
	            }$(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-header button.navbar-toggle").on("click", function (e) {
	              var activeClassName = $("header .top-menu .main-header.bp-container .navbar.navbar-inverse .header-menu .navbar-collapse .nav.navbar-nav.normal-main-header li.active a").text();$(".navbar-humburger-menu .navbar-collapse .navbar-top-section .navbar-top-heading").text(activeClassName);
	            }), $(".quick-navbar.mobile-humburger-menu .middle-menu-bar .navbar-humburger-menu .navbar-collapse.collapse").css("height", "auto");var currentUrl = window.location.href;var url,
	                defaultMenu,
	                urlPage = (-(defaultMenu = 1) < (url = currentUrl).toUpperCase().indexOf("INDEX") || -1 < url.toUpperCase().indexOf("PERSONAL") ? defaultMenu = 1 : -1 < url.toUpperCase().indexOf("NRI") ? defaultMenu = 2 : -1 < url.toUpperCase().indexOf("SME") ? defaultMenu = 3 : -1 < url.toUpperCase().indexOf("WHOLESALE") ? defaultMenu = 4 : -1 < url.toUpperCase().indexOf("AGRI") && (defaultMenu = 5), defaultMenu),
	                currentPageSelect = "personal",
	                pageNameForSelect = "Personal";1 == urlPage ? (currentPageSelect = "personal", pageNameForSelect = "Personal") : 2 == urlPage ? (currentPageSelect = "nri", pageNameForSelect = "NRI") : 3 == urlPage ? (currentPageSelect = "sme", pageNameForSelect = "SME") : 4 == urlPage ? (currentPageSelect = "wholesale", pageNameForSelect = "Wholesale") : 5 == urlPage && (currentPageSelect = "agri", pageNameForSelect = "Agri"), $(".hamburgerTopNavigation>option").filter(function () {
	              return $(this).text() == pageNameForSelect;
	            }).prop("selected", !0), $(".hamburgerTopNavigation").on("change", function (event) {
	              var $el = $(this).find("option:selected").val();1 == b$.portal.isLogin ? ($("option:selected", this).attr("custom-val"), event.preventDefault(), gadgets.pubsub.publish("externalNBPopup", $el)) : $(location).attr("href", $el);
	            }), $(".sub-menu-items .navbar-nav.lp-navbar-advanced-root").css("display", "none"), $(".sub-menu-items .navbar-nav.lp-navbar-advanced-root.items-" + currentPageSelect).css("display", "block");
	          });
	        });
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  var ENDPOINTS = { UploadImageURL: "{contextRoot}/services/proxy/current/profile", businessFlagServiceUrl: "{contextRoot}/services/proxy/current/businessLandingPageGetAccountRelationshipDetails" };function setProfileService(lpWidget, $q, lpPortal, NetworkService) {
	    this.lpWidget = lpWidget, this.NetworkService = NetworkService, this.data = [], this.$q = $q, this.lpPortal = lpPortal, this.profilePicture = { setPic: "" }, this.profileAction, ENDPOINTS.UploadImageURL = ENDPOINTS.UploadImageURL.replace("{contextRoot}", lpPortal.root), ENDPOINTS.businessFlagServiceUrl = ENDPOINTS.businessFlagServiceUrl.replace("{contextRoot}", lpPortal.root), setProfileService.prototype.getAccountList = function () {
	      var deferred = $q.defer(),
	          request = { url: ENDPOINTS.businessFlagServiceUrl, method: "GET" };return NetworkService.makeCall(request).then(function (response) {
	        var resp = response.data.businessAccountRelationshipDetails;resp.isSuccess = !0, resp && resp.rc && resp.rc.returncode && "0" !== resp.rc.returncode && (resp.isSuccess = !1, deferred.resolve(resp));deferred.resolve(resp);
	      }).catch(function (err) {
	        console.log(err), err.isSuccess = !1, deferred.resolve(err);
	      }), deferred.promise;
	    };
	  }setProfileService.prototype.setProfile = function () {
	    var request = { url: ENDPOINTS.UploadImageURL, method: "GET" };return this.NetworkService.makeCall(request).then(function (response) {
	      var res = response.data;if (res.rc && res.rc.returncode && "0" !== res.rc.returncode) throw { code: res.rc.returncode, message: res.rc.message };return res;
	    }).catch(function (error) {
	      throw error;
	    });
	  }, exports.setProfileService = setProfileService;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-portal-navbar-humburger.js.map