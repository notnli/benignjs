(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("widget-hdfc-footer", ["base", "core", "ui", "module-users", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["widget-hdfc-footer"] = factory(require("base"), require("core"), require("ui"), require("module-users"), require("jquery"));
	else
		root["widget-hdfc-footer"] = factory(root["base"], root["core"], root["ui"], root["module-users"], root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_112__) {
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

	module.exports = __webpack_require__(110);

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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  "use strict";
	  module.name = "widget-navfooter";var base = __webpack_require__(3),
	      core = __webpack_require__(4),
	      ui = __webpack_require__(5),
	      users = __webpack_require__(111),
	      $ = __webpack_require__(112),
	      deps = [core.name, ui.name, users.name],
	      NavFooter = function NavFooter(widget) {
	    this.widget = widget, this.$widget = $(widget.body);
	  };NavFooter.prototype.init = function () {
	    var self = this,
	        url = window.location.href,
	        lpWidget = this.widget;if ("true" === bd.designMode) {
	      var navRoot = lpWidget.getPreference("navRoot");if (navRoot) this.$widget.find(".bp-g-model").children().is(":empty") && be.utils.ajax({ url: b$.portal.config.serverRoot + "/portals/" + b$.portal.portalName + "/widgets/" + lpWidget.model.name + ".html", success: function success(responseHTML) {
	          var html = $(responseHTML).find(".bp-g-model").children().is(":empty") ? "<div class=\"alert alert-block\"><h4>Warning!</h4><p>This navigation bar's root menu couldn't be found.</p></div>" : $(responseHTML).find(".bp-widget-body").contents();self.$widget.html(html);
	        } });else {
	        var links = top && top.bd && top.bd.pm && top.bd.pm.model && top.bd.pm.model.links;links && (navRoot = Object.keys(links).filter(function (id) {
	          return "navroot_mainmenu" === links[id].linkname;
	        })) && navRoot[0] && (lpWidget.setPreference("navRoot", navRoot[0]), lpWidget.model.save(function () {
	          lpWidget.refreshHTML();
	        }));
	      }
	    }return self.$widget.find("a").off().on("click", function (ev) {
	      return be.Nav.URLHandler(this);
	    }).filter(function () {
	      var href = $(this).attr("href"),
	          lastUrlPart = url.substr(url.lastIndexOf("/"));return -1 < href.indexOf(lastUrlPart);
	    }).parent().addClass("active"), this;
	  }, module.exports = function (widget) {
	    var widgetWrapper = new NavFooter(widget);return widgetWrapper.init(), widgetWrapper;
	  }, module.exports = base.createModule(module.name, deps).factory("Utils", __webpack_require__(113)).factory("utilsCopyright", __webpack_require__(114)).controller(__webpack_require__(115)).controller(__webpack_require__(116));
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var hitCounter = 0;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  return function () {
	    return { customFooterBaseJS: function customFooterBaseJS() {
	        setTimeout(function () {
	          var epiFooter;epiFooter = null == localStorage ? sessionStorage.getItem("epiFooter") : localStorage.getItem("epiFooter");var loginFooter = sessionStorage.getItem("loginFooter"),
	              tncFooter = sessionStorage.getItem("tncFooter");"true" == epiFooter ? ($("footer #copyright-template .login-accordion-action .glyphicon").css({ display: "none" }), $("footer #copyright-template .copyright-text .copy").css({ display: "none" }), $("footer #copyright-template .copyright-text .terms").css({ display: "none" }), $("footer #copyright-template .copyright-text .privacyPolicy").css({ display: "none" }), $(".container-fluid .logged-in.nb-portal footer").css({ top: "0px" })) : "true" == tncFooter ? ($("footer #copyright-template .login-accordion-action .glyphicon").css({ display: "none" }), $("footer #copyright-template .copyright-text .copy").css({ display: "none" }), $("footer #copyright-template .copyright-text .termsEpi").css({ display: "none" }), $("footer #copyright-template .copyright-text .privacyPolicyEpi").css({ display: "none" })) : "true" != loginFooter || "" != b$.portal.loggedInUserId && null != b$.portal.loggedInUserId ? ($("footer #copyright-template .copyright-text .copyEpi").css({ display: "none" }), $("footer #copyright-template .copyright-text .termsEpi").css({ display: "none" }), $("footer #copyright-template .copyright-text .privacyPolicyEpi").css({ display: "none" }), $(".container-fluid .logged-in.nb-portal footer").css({ top: "105px", position: "relative" })) : ($("footer #copyright-template .login-accordion-action .glyphicon").css({ display: "none" }), $("footer #copyright-template .copyright-text .copyEpi").css({ display: "none" }), $("footer #copyright-template .copyright-text .termsEpi").css({ display: "none" }), $("footer #copyright-template .copyright-text .privacyPolicyEpi").css({ display: "none" }));
	        }, 50);var bottomScrollPos,
	            footerSet = !1,
	            topHeight = 0,
	            topHeightAdd = 0;$(window).on("load resize", function (e) {
	          $(".widget-footer img.social-icons").each(function (index) {
	            "" == $(".widget-footer img.social-icons").attr("src") && $(this).addClass("image-src-unknown");
	          });var loginStatus,
	              width = $(window).width() || window.innerWidth;loginStatus = "" != b$.portal.loggedInUserId && null != b$.portal.loggedInUserId;var url = window.location.href;1 == loginStatus || -1 !== url.indexOf("login") ? ($(".bp-page.bp-portal-area").hasClass("logged-in") && !$("footer#footer-accordion").hasClass("slide-down") && ($("footer#footer-accordion").addClass("slide-up"), $("footer .widget-footer .footer-float.show-here").slideUp(200), $("footer .widget-footer .footer-float.show-here.sec-child").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child .text-left").slideUp(200), $("footer #copyright-template").slideDown(200), $(".container-fluid .logged-in.web-portal footer").css({ display: "block" }), $("footer #copyright-template .cooki-msg").css({ display: "none" })), $("footer #copyright-template .login-accordion-action a").unbind("click").click(function () {
	            if ($("footer#footer-accordion").hasClass("slide-up") && 0 == hitCounter) {
	              hitCounter = 1, $("footer#footer-accordion").removeClass("slide-up"), $("footer#footer-accordion").addClass("slide-down"), $("footer #copyright-template .login-accordion-action .glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus"), topHeight = $(".widget-footer .footer-float:nth-child(8)").height(), topHeightAdd = topHeight + 20;$("footer #copyright-template .copy-right-bg").css({ position: "relative", "margin-top": "0px" }), width < 768 && $("footer #copyright-template .copy-right-bg").css({ position: "inherit", top: topHeight + "px", "margin-top": "0px" }), topHeightAdd = !0 === jQuery.browser.mozilla ? (topHeight = $(".widget-footer .footer-float:nth-child(8)").height(), (topHeight -= 20) - 265) : (topHeight = $(".widget-footer .footer-float:nth-child(8)").height()) - 265, $("footer#footer-accordion").hasClass("slide-down") && $(".widget-footer .footer-float:nth-child(9)").addClass("sec-child").css({ position: "absolute", top: topHeightAdd + "px" }), $("footer .widget-footer .footer-float.show-here").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child .text-left").slideDown(200), $("footer #copyright-template").slideDown(200), bottomScrollPos = document.body.scrollHeight || document.documentElement.scrollHeight, $("html, body").animate({ scrollTop: bottomScrollPos }, "slow"), console.log("in if - hitCounter", hitCounter);
	            } else 1 == hitCounter && (hitCounter = 0, $("footer#footer-accordion").removeClass("slide-down"), $("footer#footer-accordion").addClass("slide-up"), $("footer #copyright-template .login-accordion-action .glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus"), $("footer #copyright-template .copy-right-bg").css({ position: "inherit", top: topHeightAdd + "px", "margin-top": "10px" }), $(".widget-footer .footer-float:nth-child(9)").addClass("sec-child").css({ position: "absolute", top: "0px" }), $("footer .widget-footer .footer-float.show-here").slideUp(200), $("footer .widget-footer .footer-float.show-here.sec-child").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child .text-left ").slideUp(200), $("footer #copyright-template").slideDown(200), bottomScrollPos = document.body.scrollHeight || document.documentElement.scrollHeight, $("html, body").animate({ scrollTop: bottomScrollPos }, "slow"), console.log("in else - hitCounter", hitCounter));
	          })) : $(".nb-portal footer, .web-portal footer").css({ display: "block" }), topHeightAdd = !0 === jQuery.browser.mozilla ? (topHeight = $(".widget-footer .footer-float:nth-child(8)").height(), (topHeight -= 20) + 20) : (topHeight = $(".widget-footer .footer-float:nth-child(8)").height()) + 20, $(".widget-footer .footer-float:nth-child(9)").addClass("sec-child"), 767 < width && $(".login-access .widget-footer .footer-float:nth-child(9)").css({ top: "0px" }), width < 768 && ($(".footer-float:not(:last-child)>ul li:first-child a").removeAttr("href"), $(".container-fluid .logged-in.nb-portal footer").css({ display: "block" }), $(".container-fluid .logged-in.web-portal footer").css({ display: "block" }));var redirectUrl = b$.portal.urlRedirect;$("footer .widget-footer .footer-float ul li").each(function (index, itemList) {
	            1 < $(itemList).find("a").length && null != (t = $(itemList).find("a")[0].attributes.href) && $(this).find("a.h6.text-light").attr("href", redirectUrl + t.value);if ($(this).hasClass("external") && 1 < $(itemList).find("a").length) {
	              var t = $(itemList).find("a")[0].attributes.href;if ($(this).find("a.h6.text-light").attr("href", t.value), b$.portal.isLogin) {
	                var count = 0;$(".widget-footer .footer-float>ul>li.external").click(function () {
	                  0 == count && (b$.portal.sameTab = !0, count++);
	                }), $(this).find("a.h6.text-light").attr("value", "ext-link-nb");
	              } else $(this).find("a.h6.text-light").attr("value", "ext-link");
	            }if ($(this).hasClass("internal") && 1 < $(itemList).find("a").length) {
	              t = $(itemList).find("a")[0].attributes.href;var t1 = $(this).find("a.h6.text-light").attr("href");if (t1) {
	                t1.split("/");var fullUrl = redirectUrl + t.value;$(this).find("a.h6.text-light").attr("href", fullUrl);
	              }if ($(this).find("a.h6.text-light").click(function () {
	                b$.portal.navigateTo($(this).attr("href"));
	              }), 767 < width) {
	                var tmp1 = $(this).find("a.text-dark").attr("href");if (tmp1) {
	                  var tmp12 = tmp1.split("/"),
	                      tmpFullUrl = "/" + tmp12[1] + "/" + tmp12[2] + t.value;$(this).find("a.text-dark").attr("href", tmpFullUrl);
	                }$(this).find("a.text-dark").click(function () {
	                  b$.portal.navigateTo($(this).attr("href"));
	                });
	              }
	            }
	          }), $("footer .widget-footer .footer-float ul li a.h6.text-light.remove-link").removeAttr("href"), $("footer .widget-footer .footer-float ul li a.h6.text-light.remove-link").css("text-decoration", "none"), $("footer .widget-footer .footer-float ul li a.h6.text-light.remove-link").removeAttr("href"), $("footer .widget-footer .footer-float ul li a.h6.text-light.remove-link").css("text-decoration", "none"), $(window).width() < 768 && !footerSet && ($(".footer-float:nth-child(8)").after($(".footer-float:last-child")), footerSet = !0);
	        });var prev = null;$(document).on("click", ".footer-float:not(:last-child)>ul li:first-child", function () {
	          $(window).width() < 768 && (prev && ($(prev).find(".footer-arrow").hasClass("icon-down-open-big") ? $(this).css({ "background-color": "#224872" }) : $(prev).css({ "background-color": "#025296" }), $(prev).find(".footer-arrow").toggleClass("icon-down-open-big").toggleClass("icon-up-open-big"), $(prev).siblings().toggle("slow").addClass("sub-menu-data")), prev = prev !== this ? ($(this).find(".footer-arrow").hasClass("icon-down-open-big") ? $(this).css({ "background-color": "#224872" }) : $(this).css({ "background-color": "#025296" }), $(this).find(".footer-arrow").toggleClass("icon-down-open-big").toggleClass("icon-up-open-big"), $(this).siblings().toggle("slow").addClass("sub-menu-data"), this) : null);
	        }), -1 < window.location.href.indexOf("dashboard") ? ($(".container-fluid .logged-in.nb-portal footer").css({ display: "none" }), null == localStorage ? sessionStorage.setItem("footer", !0) : localStorage.setItem("footer", !0)) : -1 == window.location.href.indexOf("dashboard") && $(".container-fluid .nb-portal footer").css({ display: "block" });
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var hitCounter = 0;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  return function () {
	    return { utilsCopyrightJS: function utilsCopyrightJS() {
	        setTimeout(function () {
	          "true" == (null == localStorage ? sessionStorage.getItem("epiFooter") : localStorage.getItem("epiFooter")) ? ($("footer #copyright-template .login-accordion-action .glyphicon").css({ display: "none" }), $("footer #copyright-template .copyright-text .copy").css({ display: "none" }), $(".container-fluid .logged-in.nb-portal footer").css({ top: "0px" })) : ($("footer #copyright-template .copyright-text .copyEpi").css({ display: "none" }), $(".container-fluid .logged-in.nb-portal footer").css({ top: "105px", position: "relative" }));
	        }, 50);var bottomScrollPos,
	            topHeight = 0,
	            topHeightAdd = 0;$(window).on("load resize", function (e) {
	          var loginStatus,
	              width = $(window).width() || window.innerWidth;loginStatus = "" != b$.portal.loggedInUserId && null != b$.portal.loggedInUserId;var url = window.location.href;1 == loginStatus || -1 !== url.indexOf("login") ? ($(".bp-page.bp-portal-area").hasClass("logged-in") && !$("footer#footer-accordion").hasClass("slide-down") && ($("footer #copyright-template").slideDown(200), $("footer #copyright-template .cooki-msg").css({ display: "none" })), $("footer #copyright-template .login-accordion-action a").unbind("click").click(function () {
	            if ($("footer#footer-accordion").hasClass("slide-up") && 0 == hitCounter) {
	              hitCounter = 1, $("footer#footer-accordion").removeClass("slide-up"), $("footer#footer-accordion").addClass("slide-down"), $("footer #copyright-template .login-accordion-action .glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus"), topHeight = $(".widget-footer .footer-float:nth-child(8)").height(), topHeightAdd = topHeight + 20;$("footer #copyright-template .copy-right-bg").css({ position: "relative", "margin-top": "0px" }), width < 768 && $("footer #copyright-template .copy-right-bg").css({ position: "inherit", top: topHeight + "px", "margin-top": "0px" }), $("footer .widget-footer .footer-float.show-here").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child .text-left").slideDown(200), $("footer #copyright-template").slideDown(200), bottomScrollPos = document.body.scrollHeight || document.documentElement.scrollHeight, $("html, body").animate({ scrollTop: bottomScrollPos }, "slow"), console.log("in if - hitCounter", hitCounter);
	            } else 1 == hitCounter && (hitCounter = 0, $("footer#footer-accordion").removeClass("slide-down"), $("footer#footer-accordion").addClass("slide-up"), $("footer #copyright-template .login-accordion-action .glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus"), $("footer #copyright-template .copy-right-bg").css({ position: "inherit", top: topHeightAdd + "px", "margin-top": "10px" }), $(".widget-footer .footer-float:nth-child(9)").addClass("sec-child").css({ position: "absolute", top: "0px" }), $("footer .widget-footer .footer-float.show-here").slideUp(200), $("footer .widget-footer .footer-float.show-here.sec-child").slideDown(200), $("footer .widget-footer .footer-float.show-here.sec-child .text-left ").slideUp(200), $("footer #copyright-template").slideDown(200), bottomScrollPos = document.body.scrollHeight || document.documentElement.scrollHeight, $("html, body").animate({ scrollTop: bottomScrollPos }, "slow"), console.log("in else - hitCounter", hitCounter));
	          })) : $(".nb-portal footer, .web-portal footer").css({ display: "block" });
	        });
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  var $ = __webpack_require__(112);exports.NavBarAdvancedController = function (utilsCopyright, $scope, $timeout, lpWidget, lpPortal, lpCoreBus, lpCoreUtils, lpUsersPreference, lpUsersAuthentication) {
	    var bus = lpCoreBus,
	        util = lpCoreUtils;utilsCopyright.utilsCopyrightJS();$scope.toggleMenu = function () {
	      $scope.showMenu = !$scope.showMenu, 0 < $scope.animationHook.length && ($scope.showMenu ? $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass : $scope.animationClass = $scope.animationPrepend + $scope.animationHook);
	    }, $scope.updateSize = function (data) {
	      $scope.navSticky && $scope.elementHeight !== data.height && ($scope.elementHeight = data.height, setTimeout(function () {
	        var isStatic = ["absolute", "fixed"].indexOf($(".navbar", lpWidget.body).css("position")) < 0;bus.publish("launchpad-retail.offsetTopCorrection", { isStatic: isStatic, offsetTopCorrection: $scope.elementHeight });
	      }, 10));
	    };for (var i = $(".widget-footer").children().size(); 0 < i; i--) {
	      if ($(".widget-footer .footer-float").eq(i).hasClass("show-here")) {
	        $(".widget-footer .footer-float").eq(i).addClass("choosing-lastchild");break;
	      }
	    }$scope.toggleLauncherMenu = function () {
	      bus.publish("launchpad-retail.toggleLauncherMenu");
	    }, $(lpWidget.body).find('a[data-uuid="' + lpPortal.page.id + '"]').parents("li").addClass("active"), $scope.tempUrl = lpPortal.root + "/static/widgets/%5BBBHOST%5D/widget-hdfc-footer/templates/copyright.html", $scope.socialMediaIconUrl = lpPortal.root, $scope.socialImage = lpWidget.getPreference("socialImage"), $scope.navSticky = lpWidget.getPreference("navSticky"), $scope.containerType = lpWidget.getPreference("containerType"), $scope.scrollSetting = "lp-" + lpWidget.getPreference("scrollSetting") + "-scroll" || "lp-normal-scroll", $scope.showPageTitle = util.parseBoolean(lpWidget.getPreference("showPageTitle")), $scope.logoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("logoURL")) || "", $scope.mobileLogoUrl = util.resolvePortalPlaceholders(lpWidget.getPreference("mobileLogoURL")) || "", $scope.launcherIcon = lpWidget.getPreference("launcherIcon") || "arrow-left", $scope.animationHook = lpWidget.getPreference("navigationIconAnimationHook") || "arrow", $scope.showNotificationsBadge = util.parseBoolean(lpWidget.getPreference("showNotificationsBadge")), $scope.locales = lpWidget.getPreference("locales"), $scope.showMenu = !0, $scope.activePage = "", $scope.activeContext = "", $scope.elementHeight = 0, $scope.animationPrepend = "animation-", $scope.defaultAnimationClass = "none", $scope.animationClass = $scope.animationPrepend + $scope.defaultAnimationClass, $scope.showProfileInfo = lpCoreUtils.parseBoolean(lpWidget.getPreference("showProfileInfo")), $scope.showProfileInfo && ($scope.profileTitle = lpWidget.getPreference("profileTitle"), $scope.profileTitleLink = lpWidget.getPreference("profileTitleLink"), lpPortal.userId ? ($scope.profileInfo = { preferredName: lpPortal.userId }, $scope.profileInfo.profileImgBg = lpWidget.getPreference("profileImgBg") || "#CCC") : $scope.signinLink = lpWidget.getPreference("signinLink")), $scope.logout = function () {
	      lpUsersAuthentication.logOut();
	    }, 1 == b$.portal.isLogin && angular.element(document.querySelector("#footer-accordion")).addClass("login-access"), $scope.buttons = { logo: "logo", icon: "icon" }, $scope.scrollSettingsEnum = { normal: "lp-normal-scroll", transparency: "lp-transparency-scroll", "hide-show": "lp-hide-show-scroll" }, bus.subscribe("launchpad-retail.activeContextChanged", function (data) {
	      $timeout(function () {
	        $scope.activeContext = 0 < data.newActiveContext.length ? data.newActiveContext : $scope.activePage;
	      }, 25);
	    }), $scope.navSticky && bus.publish("launchpad-retail.stickyNavBar");
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	  "use strict";
	  exports.ccCopyrightCtrl = function (Utils, lpWidget, lpPortal, $scope) {
	    this.widget = lpWidget;var ctrl = this,
	        redirectUrl = b$.portal.urlRedirect;Utils.customFooterBaseJS(), ctrl.cookiMsg = this.widget.model.getPreference("cookiesmsg"), ctrl.cookiTitle1 = this.widget.model.getPreference("cookipolicy1"), ctrl.cookipolicyurl1 = redirectUrl + "/" + this.widget.model.getPreference("cookipolicyurl1"), ctrl.cookiTitle2 = this.widget.model.getPreference("cookipolicy2"), ctrl.cookipolicyurl2 = redirectUrl + "/" + this.widget.model.getPreference("cookipolicyurl2"), ctrl.cookiTitle3 = this.widget.model.getPreference("cookipolicy3"), ctrl.cookipolicyurl3 = redirectUrl + "/" + this.widget.model.getPreference("cookipolicyurl3"), ctrl.copyRight = this.widget.model.getPreference("copyright"), ctrl.copyRightepi = this.widget.model.getPreference("copyrightepi"), ctrl.termsCond = this.widget.model.getPreference("termscond"), ctrl.termsCondUrl = redirectUrl + "/" + this.widget.model.getPreference("termscondurl"), ctrl.termsCondEpi = this.widget.model.getPreference("termscondepi"), ctrl.termsCondEpiUrl = this.widget.model.getPreference("termscondepiurl"), ctrl.privacyPol = this.widget.model.getPreference("privacypol"), ctrl.privacyPolUrl = redirectUrl + "/" + this.widget.model.getPreference("privacypolurl"), ctrl.privacyPolEpi = this.widget.model.getPreference("privacypolepi"), ctrl.privacyPolEpiUrl = this.widget.model.getPreference("privacypolepiurl"), -1 < window.location.href.indexOf("login") && (angular.element(".nbTerms").css("display", "block"), angular.element(".privacyPolicyNB").css("display", "block"), angular.element(".TermsPWS").css("display", "none"), angular.element(".privacyPolicyPWS").css("display", "none")), ctrl.termsCondUrlNB = this.widget.model.getPreference("termscondnburl"), ctrl.privacyPolUrlNB = this.widget.model.getPreference("privacypolnburl"), ctrl.openLinkTerms = function () {
	      return window.open(ctrl.termsCondUrlNB, "link", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=515,top=50,left=50"), !1;
	    }, ctrl.openLinkPolicy = function () {
	      return window.open(ctrl.privacyPolUrlNB, "link", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=515,top=50,left=50"), !1;
	    }, ctrl.loginStatus = b$.portal.isLogin, -1 !== window.location.href.indexOf("login") && "true" == ctrl.loginStatus && (ctrl.loginPage = !0, $("div.bp-page.bp-portal-area").addClass("logged-in"), angular.element(document.querySelector("#footer-accordion")).addClass("login-access"));
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-hdfc-footer.js.map