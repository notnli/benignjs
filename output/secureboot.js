// Release version information is replaced by the build scripts
var buildVersion = {"website":"4.39.2","chrome":"4.39.2","chromeSize":8175507,"firefox":"4.24.0","firefoxSize":8599527,"commit":"0594ae77700bb819637e7927454c095e87173014","timestamp":1686786411,"dateTime":"Thu, 15 Jun 2023 11:46:51 +1200"};

var m, tmp;
var browserUpdate = 0;
var apipath;
var pageLoadTime;
var silent_loading = false;
var cookiesDisabled = false;
var storageQuotaError = false;
var lastactive = new Date().getTime();
var seqno = Math.ceil(Math.random()*1000000000);
var staticpath = null;
var cmsStaticPath = null;
var defaultStaticPath = 'https://eu.static.mega.co.nz/4/';
var defaultCMSStaticPath = 'https://eu.static.mega.co.nz/cms/';
var ua = window.navigator.userAgent.toLowerCase();
var uv = window.navigator.appVersion.toLowerCase();
var storage_version = '1'; // clear localStorage when version doesn't match
var contenterror = 0;
var nocontentcheck = false;
var l, d = false;

// Cache location.search parameters early as the URL may get rewritten later
var locationSearchParams = location.search;

var is_electron = false;
if (typeof process !== 'undefined') {
    var mll = process.moduleLoadList || [];

    if (mll.indexOf('NativeModule ELECTRON_ASAR') !== -1) {
        is_electron = module;
        module = undefined; // prevent factory loaders from using the module

        // localStorage.jj = 1;
    }
}

var is_mobile = (function isMobile() {
    'use strict';
    var mobileStrings = [
        'iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'ucbrowser',
        'windows mobile', 'windows phone', 'iemobile', 'mobile safari', 'bb10; touch'
    ];
    for (var i = mobileStrings.length; i--;) {
        if (ua.indexOf(mobileStrings[i]) > 0) {
            return true;
        }
    }
})();

var is_android = is_mobile && ua.indexOf('android') > 0;
var is_uc_browser = is_mobile && ua.indexOf('ucbrowser') > 0;
var is_ios = is_mobile && (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1);
var is_old_windows_phone = is_mobile && /windows phone 8|iemobile\/9|iemobile\/10|iemobile\/11/i.test(ua);
var is_windowsphone = is_old_windows_phone || is_mobile && ua.indexOf('windows phone') > 0;
var is_huawei = is_mobile && (ua.indexOf('huawei') > 0 || ua.indexOf('hmscore') > 0);

if (is_android && !is_huawei) {
    // detect huawei devices by model
    tmp = [
        'ana-al00', 'ana-nx9', 'ang-an00', 'art-l28', 'brq-an00', 'cdy-nx9b', 'dra-lx9', 'els-n39', 'els-nx9',
        'jef-nx9', 'jny-lx2', 'lio-an00m', 'lio-l29', 'lio-n29', 'med-lx9', 'noh-an00', 'noh-lg', 'noh-nx9',
        'nop-an00', 'oce-an10', 'oce-an50', 'tas-l29', 'tet-an00'
    ];
    for (m = tmp.length; m--;) {
        if (ua.indexOf(tmp[m]) > 0) {
            is_huawei = tmp[m];
            break;
        }
    }
}

// @todo get rid of 'm' around the codebase!
m = !!is_mobile;

tmp = getCleanSitePath();
var is_selenium = !ua.indexOf('mozilla/5.0 (selenium; ');
var is_embed = String(location.pathname).substr(0, 6) === '/embed' || tmp.substr(0, 2) === 'E!';
var is_drop = location.pathname === '/filerequest' || location.pathname === '/drop' || tmp.substr(0, 2) === 'D!';
var is_iframed = is_embed || is_drop;
var is_karma = !is_iframed && /^localhost:987[6-9]/.test(window.top.location.host);

var is_chrome_firefox = document.location.protocol === 'chrome:' &&       // Only true for Palemoon/Legacy FF extension
    document.location.host === 'mega' || document.location.protocol === 'mega:';
var location_sub = document.location.href.substr(0, 16);
var is_chrome_web_ext = location_sub === 'chrome-extension' || location_sub === 'ms-browser-exten';
var is_firefox_web_ext = location_sub === 'moz-extension://';
var is_extension = is_chrome_firefox || is_electron || is_chrome_web_ext || is_firefox_web_ext;
var is_microsoft = /msie|edge|trident/i.test(ua);
var is_bot = !is_extension && /bot|crawl/i.test(ua);
var is_webcache = location.host === 'webcache.googleusercontent.com';
var is_livesite = location.host === 'mega.nz' || location.host === 'mega.io'
    || location.host === 'smoketest.mega.nz' || is_extension;
var is_eplusplus = false;
var is_filerequest_page = String(location.pathname).substr(0, 13) === '/filerequest/' ||
    String(location.pathname).substr(0, 10) === '/megadrop/';


self.fetchStreamSupport = (
    window.fetch && !window.MSBlobBuilder
    && typeof ReadableStream === 'function'
    && typeof AbortController === 'function'
    && typeof Object(AbortController.prototype).abort === 'function'
);

var staticServerLoading = {
    loadFailuresOriginal: 0,        // Count of failures on the original static server (from any thread)
    loadFailuresDefault: {},        // Count of failures on the EU static server per file
    maxRetryAttemptsOriginal: 2,    // Max retry attempts on the original static server before switching to the default
    maxRetryAttemptsDefault: 3,     // Max retry attempts on the default static server per file before it shows dialog
    failureLoggedOriginal: false,   // Flag to indicate failure of original static server was logged to the API
    failureLoggedDefault: false,    // Flag to indicate failure of the default static server was logged to the API
    failureLoggedCorrupt: false,    // Flag to indicate that file corruption (hash mismatch) was logged to the API
    flippedToDefault: false         // Flag to indicate if the static server was flipped
};
var load_error_types = {
    /** The file is corrupt i.e. mismatch on SHA-2 hash check */
    file_corrupt: 1,
    /** A file loading issue, network issue or the static server is down */
    file_load_error: 2
};

function getMobileStoreLink() {
    'use strict';

    if (is_ios) {
        return 'https://itunes.apple.com/app/mega/id706857885';
    }
    if (is_windowsphone) {
        return 'zune://navigate/?phoneappID=1b70a4ef-8b9c-4058-adca-3b9ac8cc194a';
    }
    if (is_huawei) {
        return 'https://appgallery.huawei.com/#/app/C102009895';
    }
    return 'https://play.google.com/store/apps/details?id=mega.privacy.android.app&referrer=meganzindexandroid';
}

function goToMobileApp(aBaseLink) {
    'use strict';
    var testbed = tryCatch(function() {
        return localStorage.testOpenInApp;
    }, false)();

    if (is_ios || testbed === 'ios') {
        tryCatch(function() {
            sessionStorage.setItem('__mobile_app_tap', 1);
        }, false)();

        var link = 'https://' + location.host + '/' + aBaseLink;
        openExternalLink('mega://' + aBaseLink, link + '?mobileapptap');
    }
    else if (is_windowsphone || testbed === 'winphone') {
        top.location = 'mega://' + aBaseLink;
    }
    else if (is_android || testbed === 'android') {
        var tmp = 'intent://' + aBaseLink + '/#Intent;scheme=mega;package=mega.privacy.android.app;end';
        tmp = tmp.replace('id.app', 'id.app;S.browser_fallback_url=' + encodeURIComponent(getMobileStoreLink()));
        if (is_huawei) {
            tmp = tmp.replace('.app;', '.app.huawei;');
        }
        top.location = tmp;
    }
    else {
        // eslint-disable-next-line no-alert
        alert('This device is unsupported.');
    }
    return false;
}

function openExternalLink(aExternalLink, aFallbackLink, aTimeout) {
    'use strict';
    var vis = 0;
    var dsp = function() {
        // failed to go to the external link if visibility hasn't changed
        if (vis !== 1) {
            if (aFallbackLink) {
                if (top.location.href === aFallbackLink) {
                    vis = 3;
                }
                top.location = aFallbackLink;
            }
            // we came back from the external link if visibility changed twice.
            if (vis > 1) {
                location.reload();
            }
        }
    };
    if (aFallbackLink === 'self') {
        aFallbackLink = 'https://' + location.host + '/#' + getCleanSitePath().replace('?mobileapptap', '');
    }
    setTimeout(dsp, parseInt(aTimeout) || 3e3);
    document.addEventListener('visibilitychange', function() {
        if (++vis > 1) {
            dsp();
        }
    });
    tryCatch(function() {
        top.location = aExternalLink;
    }, dsp)();
}

function getSitePath() {
    'use strict';
    var hash = location.hash.replace('#', '');

    if (hashLogic || isPublicLink(hash)) {
        return '/' + hash;
    }

    if (is_webcache) {
        var m = String(location.href).match(/mega\.nz\/([\w-]+)/);
        if (m) {
            return '/' + m[1];
        }
    }

    if (isPublickLinkV2(document.location.pathname)) {
        return document.location.pathname + document.location.hash;
    }

    return hash && location.pathname.substr(0, 6) === '/chat/' ? location.pathname + '#' + hash : location.pathname;
}

// remove dangling characters from the pathname/hash
function getCleanSitePath(path) {
    'use strict';

    if (path === undefined) {
        path = getSitePath();

        if (location.search && path.indexOf('#') < 0) {
            location.search.replace(/\w+=[^&]+/g, function(m) {
                path += '/' + m;
            });
        }
    }

    if (path.indexOf('lang_') > -1) {
        path = path.replace('lang_', 'lang=');
    }

    // cleanup and handle affiliate tags.
    path = mURIDecode(path).replace(/^[#/]+|\/+$/g, '').split(/(\/\w+=)/);

    if (/^\w+=/.test(path[0])) {
        path = [''].concat(path[0].split('=')).concat(path.slice(1));
    }

    // Allow search the folder with '=' symbol
    if (path[0] === 'fm/search' && path.length > 1) {
        path = [path.join('')];
    }

    if (path.length > 1) {
        for (var s = 1; s < path.length; s += 2) {
            var v = mURIDecode(path[s + 1]);
            var k = String(path[s]).replace(/\W/g, '');

            path[k] = v;

            v = k.substr(0, 3);
            if (v === 'utm' || v === 'mtm') {
                /** @property window.uTagUTM */
                /** @property window.uTagMTM */
                v = 'uTag' + v.toUpperCase();
                window[v] = window[v] || {};
                window[v][k] = path[k];
            }
        }

        if (path.uao) {
            var target = window.mega || window;
            target.uaoref = path.uao;
        }
        if (path.aff) {
            if (!path.aff_time) {
                sessionStorage.affid = path.aff;
                sessionStorage.affts = Date.now();
                sessionStorage.afftype = 1;
            }
            else if (!(sessionStorage.affts > (path.aff_time *= 1000))) {
                sessionStorage.affid = path.aff;
                sessionStorage.affts = path.aff_time;

                // Future proof, currently only public link affiliate data is coming from other agent.
                // Later, url from other agents will contains type for it to support other type.
                sessionStorage.afftype = path.aff_type || 2;
            }
        }
        if (path.csp) {
            localStorage.csp = path.csp >>> 0 & 0xff;
        }
        if (path.sra) {
            localStorage.utm = b64decode(path.sra);
        }
        if (path.mt) {
            window.uTagMT = path.mt;
        }
        if (path.next) {
            window.nextPage = b64decode(path.next);
            if (path.plan) {
                window.pickedPlan = path.plan;
            }
            else if (path.articleUrl) {
                window.helpOrigin = b64decode(path.articleUrl);
            }
        }
        if (path.lang && path.lang.length < 6) {
            localStorage.lang = path.lang;
        }
    }

    return path[0];
}

// Check whether the provided `page` points to a public link
function isPublicLink(page) {
    'use strict';
    page = getCleanSitePath(page);

    var types = {'F!': 1, 'P!': 1, 'E!': 1, 'D!': 1};
    return (page[0] === '!' || types[page.substr(0, 2)]) ? page : false;
}

function isPublickLinkV2(page) {
    'use strict';
    page = getCleanSitePath(page);

    var types = {'file': 6, 'folder': 8, 'embed': 7};
    return page.length > types[page.split('/')[0]];
}

// Safer wrapper around decodeURIComponent
function mURIDecode(path) {
    path = String(path);

    if (path.indexOf('%25') >= 0) {
        do {
            path = path.replace(/%25/g, '%');
        } while (path.indexOf('%25') >= 0);
    }
    if (path.indexOf('%21') >= 0) {
        path = path.replace(/%21/g, '!');
    }
    try {
        path = decodeURIComponent(path);
    }
    catch (e) {}

    return path;
}

/**
 * Based on the user's geographic location, set the closest static path.
 * This is detected by the mega.nz server and set as a cookie e.g. "geoip=SG".
 * @returns {String} Returns the nearest static server to be used or the EU one as default
 */
// eslint-disable-next-line complexity
function geoStaticPath(cms) {

    'use strict';

    var finalPath = cms ? 'cms/' : '4/';
    try {
        // If flag is not set to force the default EU static server
        if (!sessionStorage.skipGeoStaticPath) {

            // Set which countries will use which static server
            var northAmericaStaticCountries = 'AG AI AR BB BL BO BR BS BZ CA CL CO CO CR CU DO EC FK GD GF GL GT GY HN HT IS JM KN LC MX NI PA PE PR PY SR SR TT US UY VC VE VE VG VI';
            var newZealandStaticCountries = 'AU FJ NC NZ';
            var japanStaticCountries = 'JP TW PH HK MO KR SG KP BN BT MM MY TH VN';

            // Match on cookie e.g. "geoip=SG" returns array ['geoip=SG', 'SG']
            var cookieMatch = String(document.cookie).match(/geoip\s*\=\s*([A-Z]{2})/);

            // Check the country code to return a closer static server
            if (cookieMatch && cookieMatch[1] && japanStaticCountries.indexOf(cookieMatch[1]) > -1) {
                return 'https://jp.static.mega.co.nz/' + finalPath;
            }
            else if (cookieMatch && cookieMatch[1] && northAmericaStaticCountries.indexOf(cookieMatch[1]) > -1) {
                return 'https://na.static.mega.co.nz/' + finalPath;
            }
            else if (cookieMatch && cookieMatch[1] && newZealandStaticCountries.indexOf(cookieMatch[1]) > -1) {
                return 'https://nz.static.mega.co.nz/' + finalPath;
            }
        }
    }
    catch (ex) {}

    return cms ? defaultCMSStaticPath : defaultStaticPath;
}

if (is_chrome_firefox) {
    var Cu = Components.utils;
    var Cc = Components.classes;
    var Ci = Components.interfaces;

    Cu['import']("resource://gre/modules/XPCOMUtils.jsm");
    Cu['import']("resource://gre/modules/Services.jsm");

    ['userAgent', 'appName', 'appVersion', 'platform', 'oscpu']
        .forEach(function(k) {
            var pref = 'general.' + k.toLowerCase() + '.override';

            if (Services.prefs.prefHasUserValue(pref)
                    && Services.prefs.getPrefType(pref) === 32) {

                try {
                    var value = Services.prefs.getCharPref(pref);
                    Services.prefs.clearUserPref(pref);

                    Object.defineProperty(navigator, k, {
                        enumerable: true,
                        value: Cc["@mozilla.org/network/protocol;1?name=http"]
                                    .getService(Ci.nsIHttpProtocolHandler)[k]
                    });
                    Services.prefs.setCharPref(pref, value);
                }
                catch (e) {}
            }
        });

    ua = navigator.userAgent.toLowerCase();
}

var myURL = window.URL;

// Check whether we should redirect the user to the browser update.html page (triggered for Edge 18 and worse browsers)
browserUpdate = browserUpdate || !myURL || typeof DataView === 'undefined' || window.MSBlobBuilder
    || typeof history !== 'object' || typeof history.replaceState !== 'function'
    || window.chrome && !document.exitPointerLock
;

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
if (!String.prototype.localeCompare) {
    String.prototype.localeCompare = function(to) {
        var s1 = this.toLowerCase();
        var s2 = String(to).toLowerCase();
        return s1 > s2 ? 1 : (s1 < s2 ? -1 : 0);
    };
}
if (!String.trim) {
    String.trim = function(s) {
        return String(s).trim();
    };
}
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

try {
    // Browser compatibility
    // Fx 4.0   Chrome 5   MSIE 9   Opera 11.60   Safari 5.1
    Object.defineProperty(this, 'megaChatIsDisabled', (function() {
        var status;
        return {
            set: function(val) {
                status = val;
                if (status) {
                    $(document.body).addClass("megaChatDisabled");
                }
                else {
                    $(document.body).removeClass("megaChatDisabled");
                }
            },
            get: function() {
                return status || localStorage.testChatDisabled || window.mega.flags.mcs === 0;
            }
        };
    })());

    // Check whether Mega Chat is enabled *and* initialized
    Object.defineProperty(this, 'megaChatIsReady', {
        get: function() {
            return !megaChatIsDisabled
                && typeof megaChat !== 'undefined'
                && megaChat.is_initialized;
        }
    });
}
catch (ex) {
    console.error(ex);
    window.megaChatIsReady = false;
    window.megaChatIsDisabled = false;
    browserUpdate = true;
}

if (!browserUpdate) try
{
    if (is_chrome_firefox)
    {
        XPCOMUtils.defineLazyModuleGetter(this, "NetUtil", "resource://gre/modules/NetUtil.jsm");

        (function(global) {
            global.loadSubScript = function(file,scope) {
                var loader = Services.scriptloader;

                if (global.d && loader.loadSubScriptWithOptions) {
                    loader.loadSubScriptWithOptions(file, {
                        charset: "UTF-8",
                        ignoreCache: true,
                        target: scope || global
                    });
                } else {
                    loader.loadSubScript(file, scope || global);
                }
            };
        })(this);

        try {
            var mozBrowserID =
            [   Services.appinfo.name,
                Services.appinfo.platformVersion,
                Services.appinfo.platformBuildID,
                Services.appinfo.OS,
                Services.appinfo.XPCOMABI].join(" ");
        } catch(e) {
            var mozBrowserID = ua;
        }

        loadSubScript('chrome://mega/content/strg.js');

        if (!(localStorage instanceof Ci.nsIDOMStorage)) {
            throw new Error('Invalid DOM Storage instance.');
        }
    }
    try {
        if (typeof localStorage === 'undefined' || localStorage === null) {
            throw new Error('SecurityError: DOM Exception 18');
        }

        d = localStorage.d | 0;
        jj = localStorage.jj;
        dd = localStorage.dd;

        // Write test
        localStorage['$!--foo'] = Array(100).join(",");
        delete localStorage['$!--foo'];
    }
    catch (ex) {

        storageQuotaError = (ex.code === 22);
        cookiesDisabled = ex.code && ex.code === DOMException.SECURITY_ERR
            || ex.message === 'SecurityError: DOM Exception 18'
            || storageQuotaError;

        if (!cookiesDisabled) {
            throw ex;
        }

        // Cookies are disabled, therefore we can't use localStorage.
        // We could either show the user a message about the issue and let him
        // enable cookies, or rather setup a tiny polyfill so that they can use
        // the site even in such case, even though this solution has side effects.
        tmp = Object.create({}, {
                length:     { get: function() { return Object.keys(this).length; }},
                key:        { value: function(pos) { return Object.keys(this)[pos]; }},
                removeItem: { value: function(key) { delete this[key]; }},
                setItem:    { value: function(key, value) { this[key] = String(value); }},
                getItem:    { value: function(key) {
                    if (this.hasOwnProperty(key)) {
                        return this[key];
                    }
                    return null;
                }},
                clear: {
                    value: function() {
                        var obj = this;
                        Object.keys(obj).forEach(function(memb) {
                            if (obj.hasOwnProperty(memb)) {
                                delete obj[memb];
                            }
                        });
                    }
                }
            });

        try {
            delete window.localStorage;
            Object.defineProperty(window, 'localStorage', { value: tmp });
            Object.defineProperty(window, 'sessionStorage', { value: tmp });
        }
        catch (e) {
            if (!is_mobile) {
                throw ex;
            }
        }
        tmp = undefined;

        setTimeout(function() {
            console.warn('Apparently you have Cookies disabled, ' +
                'please note this session is temporal, ' +
                'it will die once you close/reload the browser/tab.');
        }, 4000);
    }

    if (is_mobile && String(location.href).indexOf("mobileapptap") > 0) {
        tmp = true;
        tryCatch(function() {
            'use strict';
            tmp = sessionStorage.getItem('__mobile_app_tap');
            sessionStorage.removeItem('__mobile_app_tap');
        })();
        tryCatch(function() {
            'use strict';
            if (tmp) {
                openExternalLink(getMobileStoreLink(), 'self');
            }
        })();
    }

    if (!is_livesite && !is_karma && !is_webcache) {
        d = d > 0 ? d : !localStorage.nfd;
        jj = d > 0 && !sessionStorage.dbgContentCheck;
        dd = 1;
    }

    if (!is_livesite && window.dd) {
        nocontentcheck = sessionStorage.dbgContentCheck ? 0 : true;

        staticpath = location.origin + '/';
        defaultStaticPath = staticpath;

        if (window.d) {
            console.debug('StaticPath set to "' + staticpath + '"');
        }
    }

    if (location.host === 'smoketest.mega.nz') {
        staticpath = 'https://smoketest.static.mega.nz/4/';
        cmsStaticPath = 'https://smoketest.static.mega.nz/cms/';
        defaultStaticPath = staticpath;
        d = 1;
        sessionStorage.rad = 1;
    }

    if (d > 0) {
        localStorage.minLogLevel |= 0;
    }

    // Override the default static path to test recovery after standard static server failure
    if (localStorage.getItem('defaultstaticpath') !== null) {
        defaultStaticPath = localStorage.defaultstaticpath;
    }

    staticpath = localStorage.staticpath || staticpath || geoStaticPath(false);
    cmsStaticPath = localStorage.cms || cmsStaticPath || geoStaticPath(true);

    apipath = localStorage.apipath || 'https://g.api.mega.co.nz/';

    // If dark mode flag is enabled, change styling
    if (localStorage.getItem('darkMode') === '1') {
        document.getElementsByTagName('html')[0].classList.add('dark-mode');
    }
}
catch(e) {
    if (!m || !cookiesDisabled) {
        var extraInfo = '';
        if (storageQuotaError) {
            extraInfo = "\n\nTip: We've detected this issue is likely caused by " +
                "browsing in private mode, please try turning it off.";
        }
        else if (cookiesDisabled) {
            extraInfo = "\n\nTip: We've detected this issue is likely related to " +
                "having Cookies disabled, please check your browser settings.";
        }
        alert(
            "Sorry, we were unable to initialize the browser's local storage, " +
            "either you're using an outdated/misconfigured browser or " +
            "it's something from our side.\n" +
            "\n"+
            "If you think it's our fault, please report the issue back to us.\n" +
            "\n" +
            "Reason: " + (e.message || e) +
            "\nBrowser: " + (typeof mozBrowserID !== 'undefined' ? mozBrowserID : ua)
            + extraInfo
        );
        browserUpdate = 1;
    }
}

if (location.host === 'mega.io') {
    tmp = document.head.querySelector('meta[property="og:url"]');
    if (tmp) {
        tmp.content = 'https://mega.io/';
    }
    tmp = document.head.querySelector('meta[property="twitter:url"]');
    if (tmp) {
        tmp.content = 'https://mega.io/';
    }
    tmp = document.head.querySelector('link[rel="icon"]');
    if (tmp) {
        tmp.href = 'https://mega.io/favicon.ico?v=3';
    }
    tmp = undefined;
}

tmp = is_mobile && Object(window.clientInformation).vendor === 'Google Inc.';

var mega = {
    ui: {},
    state: 0,
    utils: {},
    slideshow: {settings: {}},
    uaoref: window.uaoref,
    updateURL: defaultStaticPath + 'current_ver.txt',
    chrome: (
        typeof window.chrome === 'object'
        && (window.chrome.runtime !== undefined || tmp)
        && String(window.webkitRTCPeerConnection).indexOf('native') > 0
    ),
    browserBrand: [
        0, 'Torch', 'Epic', 'Edgium'
    ],
    whoami: 'We make secure cloud storage simple. Create an account and get up to 50 GB ' +
            'free on MEGA\'s end-to-end encrypted cloud collaboration platform today!',

    maxWorkers: Math.min(navigator.hardwareConcurrency || 4, 6),

    /** An object with flags detailing which features are enabled on the API
     *  XXX: This is now meant to be a legacy private property, use `mega.flags` instead.
     */
    apiMiscFlags: null,

    /** Get browser brancd internal ID */
    getBrowserBrandID: function() {
        if (Object(window.chrome).torch) {
            return 1;
        }
        else {
            var plugins = Object(navigator.plugins);
            var len = plugins.length | 0;

            while (len--) {
                var plugin = Object(plugins[len]);

                // XXX: This plugin might be shown in other browsers than Epic,
                //      hence we check for chrome.webstore since it won't appear
                //      in Google Chrome, although it might does in other forks?
                if (plugin.name === 'Epic Privacy Browser Installer') {
                    return Object(window.chrome).webstore ? 2 : 0;
                }
            }

            if (this.chrome && !String(this.userAgentBrands).indexOf('MicrosoftEdge:')) {
                return 3;
            }
        }

        return 0;
    },

    /** get cryptographically strong random values. */
    getRandomValues: function(len) {
        'use strict';
        var seed = new Uint8Array(len || 128);
        return asmCrypto.getRandomValues(seed);
    },

    /** Load performance report */
    initLoadReport: function() {
        var r = {startTime: Date.now(), stepTimeStamp: Date.now(), EAGAINs: 0, e500s: 0, errs: 0, mode: 1};

        r.aliveTimer = setInterval(function() {
            var now = Date.now();
            if ((now - r.aliveTimeStamp) > 20000) {
                // Either the browser froze for too long or the computer
                // was resumed from sleep/hibernation... let's hope it's
                // the later and do not send this report.
                r.sent = true;
                clearInterval(r.aliveTimer);
            }
            else if (r.scSent && now - r.scSent > 6e4 && (scqhead > scqtail * 2)) {

                // Do not tell API to rebuild the treecache if we were loading from indexedDB
                if (r.mode === 1 && !sessionStorage.lightTreeReload) {
                    sessionStorage.lightTreeReload = true;
                    fm_forcerefresh(true);
                }
                else {
                    api_req({a: 'log', e: 99679}); // sc processing took too long

                    msgDialog('warninga:!^' + l[17704] + '!' + l[17705], l[882], l[17706], 0, function(yes) {
                        if (yes) {
                            fm_forcerefresh();
                        }
                    });

                    r.scSent = now;
                    delete sessionStorage.lightTreeReload;
                }
            }
            r.aliveTimeStamp = now;
        }, 2000);

        this.loadReport = r;
        this.state |= window.MEGAFLAG_LOADINGCLOUD;
    },

    redirect: function(to, page, kv, urlQs, st) {
        'use strict';
        var storage = localStorage;
        var toMegaIo = to === 'mega.io';
        var getCount = 0;
        st = typeof st === 'undefined' || st;

        to = (String(to).indexOf('//') < 0 ? 'https://' : '') + to;

        var uLang = sessionStorage.lang || storage.lang;
        if (uLang) {
            // Map webclient language codes to those that are supported on mega.io
            to += '/' + mega.getMegaIoMappedLang(uLang);
        }

        if (page) {
            to += '/' + page;
        }

        var affid = sessionStorage.affid || storage.affid;
        var affts = sessionStorage.affts || storage.affts;
        if (affid && affts && !(Date.now() - affts > 864e5)) {
            to += '?aff=' + affid;
            getCount++;
        }

        var _getSeperator = function() {
            if (toMegaIo) {
                return getCount++ ? '&' : '?';
            }
            else {
                return '/';
            }
        }

        if (storage.csp) {
            to += `${_getSeperator()}csp=${storage.csp}`;
        }

        if (storage.utm) {
            to += `${_getSeperator()}sra=${b64encode(storage.utm)}`;
        }

        if (Array.isArray(kv)) {
            for (var i = kv.length; i--;) {
                var k = kv[i][0];
                var v = kv[i][1];
                v = !kv[i][2] && typeof v === 'string' ? b64encode(v) : v;
                if (v || v === 0) {
                    to += '/' + k + '=' + v;
                }
            }
        }
        if (st) {
            window.onload = window.onerror = null;
            return location.replace(to + (urlQs || ''));
        }
        window.open(to + (urlQs || ''), '_blank', 'noopener,noreferrer');
    },

    /**
     * Map webclient language codes to those that are supported on mega.io
     * @param {String} userLang The current webclient user language code e.g. EN, NL etc
     * @returns {String} Returns the mapped language for mega.io (could be empty string for English or not supported)
     */
    getMegaIoMappedLang(userLang) {

        // Webclient (mega.nz) to mega.io mappings
        var mappings = {
            'en': '',
            'ar': 'ar',
            'br': 'pt-br',
            'cn': 'zh-hans',
            'ct': 'zh-hant',
            'de': 'de',
            'es': 'es',
            'fr': 'fr',
            'he': '',   // Hebrew not supported
            'hu': '',   // Hungarian not supported
            'id': 'id',
            'it': 'it',
            'jp': 'ja',
            'ka': '',   // Georgian not supported
            'kr': 'ko',
            'nl': 'nl',
            'pl': 'pl',
            'pt': 'pt',
            'ro': 'ro',
            'ru': 'ru',
            'th': 'th',
            'tl': '',   // Filipino not supported
            'tr': '',   // Turkish not supported
            'uk': '',   // Ukrainian not supported
            'vi': 'vi'
        };

        var mappedLang = mappings[userLang];

        return typeof mappedLang === 'undefined' ? '' : mappedLang;
    },

    /** Parameters to append to API requests */
    urlParams: function() {
        if (!this._urlParams) {
            var params = '&domain=meganz'; // domain origin
            if (location.host === 'mega.io') {
                params = '&domain=megaio';
            }

            // If using an extension, the version is passed through to the API for the helpdesk tool
            if (is_extension) {
                params += '&ext=' + (is_chrome_web_ext ? buildVersion.chrome : buildVersion.firefox);
            }

            // Append browser brand for easier troubleshoting
            var brand = this.getBrowserBrandID();
            if (brand) {
                params += '&bb=' + parseInt(brand);
            }

            var apiut = localStorage.apiut ? '&ut=' + localStorage.apiut : "";
            params += apiut;

            params += '&v=2&lang=' + window.lang;
            this._urlParams = params;
        }

        return this._urlParams;
    }
};

Object.defineProperty(mega, 'flags', {
    get: function() {
        'use strict';
        return typeof u_attr === 'object' && u_attr.flags || this.apiMiscFlags || false;
    }
});

Object.defineProperty(mega, 'user', {
    get: function() {
        'use strict';
        return typeof u_attr === 'object' && u_attr.u === window.u_handle && u_attr.u || false;
    }
});

Object.defineProperty(mega, 'ipcc', {
    get: function() {
        'use strict';
        return typeof u_attr === 'object' && u_attr.ipcc || window.ipcc || false;
    }
});

Object.defineProperty(mega, 'BID', {
    get: function() {
        'use strict';
        if (!mega.flags.bid) {
            return 'gTxFhlOd_LQ';
        }
        else if (mega.flags.bid === 3) {
            return '-aw4PbDRAKo';
        }

        console.error("Invalid/unknown bid.");
        return 'gTxFhlOd_LQ';
    }
});

Object.defineProperty(mega, 'paywall', {
    get: function() {
        'use strict';
        return typeof u_attr === 'object' &&
            (u_attr.uspw || u_attr.b && u_attr.b.s === -1 || u_attr.pf && u_attr.pf.s === -1) || false;
    }
});

Object.defineProperty(mega, 'active', {
    get: (function() {
        'use strict';
        // Number of milliseconds past the user will be considered inactive.
        var THRESHOLD = 3e4;
        return function() {
            return Date.now() - lastactive < THRESHOLD;
        };
    })()
});

(function(chrome) {
    'use strict';
    delete mega.chrome;

    /** @property mega.chrome */
    lazy(mega, 'chrome', function() {
        return chrome || String(this.userAgentBrands).split(':').includes('Chromium');
    });
})(mega.chrome);

/** @property mega.userAgentBrands */
lazy(mega, 'userAgentBrands', function() {
    'use strict';
    var res = [];
    var userAgentData = (window.navigator || !1).userAgentData;

    if (userAgentData) {
        var brands = userAgentData.brands;

        if (Array.isArray(brands)) {

            for (var i = brands.length; i--;) {
                var brand = (brands[i] || !1).brand;

                res.push(String(brand).replace(/[\s:]/g, ''));
            }
        }
    }

    return res.join(':');
});

if (window.crypto && typeof crypto.getRandomValues === 'function') {
    (function(crypto, rand) {
        'use strict';
        mega.getRandomValues = function(len) {
            var seed = new Uint8Array(len || 128);
            return rand.call(crypto, seed);
        };
        mega.getRandomValues.strong = true;
    })(crypto, crypto.getRandomValues);
}

// nb: can overflow..
Object.defineProperty(window, 'mIncID', {value: 0, writable: true});

var hashLogic = false;
if (localStorage.hashLogic) hashLogic=true;
if (localStorage.testMobileSite) is_mobile = m = true;
if (typeof history == 'undefined') hashLogic=true;

var bootstaticpath = staticpath;
var urlrootfile = '';

// Disable hash checking for search engines to speed the site load up
if (is_bot) {
    nocontentcheck = true;
}
else if (is_karma) {
    nocontentcheck = true;
    bootstaticpath = 'base/';
}

// Disable hash checking if requested for development
/*
else if (localStorage.disablecontentcheck) {
    nocontentcheck = true;
}
//*/

tmp = getCleanSitePath(location.hash || undefined);
if (tmp.substr(0, 12) === 'sitetransfer') {
    try {
        sessionStorage.sitet = tmp;
        location.hash = 'hashtransfer';
    }
    catch (ex) {
        console.warn(ex);
    }
    hashLogic = true; // temporarily prevent the history.* calls in case they are reached...
}
else if (tmp.substr(0, 4) === 'test') {
    hashLogic = true;
}

if (!browserUpdate && is_extension)
{
    hashLogic = true;
    nocontentcheck=true;

    if (is_chrome_firefox)
    {
        bootstaticpath = 'chrome://mega/content/';
        urlrootfile = 'secure.html';
        if (d > 1) {
            staticpath = bootstaticpath;
        }
        else {
            staticpath = defaultStaticPath;
        }
        try {
            loadSubScript(bootstaticpath + 'fileapi.js');
        } catch(e) {
            browserUpdate = 1;
            Cu.reportError(e);
            alert('Unable to initialize core functionality:\n\n' + e + '\n\n' + mozBrowserID);
        }
        if (location.protocol === 'mega:') {
            try {
                var url = mObjectURL([""]);
                myURL.revokeObjectURL(url);
            }
            catch (e) {
                console.error('mObjectURL failed, is this TOR?', e);
                document.location = bootstaticpath + urlrootfile + location.hash;
            }
        }
    }
    else if (is_electron) {
        urlrootfile = 'index.html';
        bootstaticpath = location.href.replace(urlrootfile, '');
    }
    else {
        // WebExtensions
        urlrootfile = 'mega/secure.html';

        tmp = 'extStageReload' + (is_iframed | 0) + (is_embed | 0) + (is_drop | 0);

        if (typeof chrome !== 'object' || typeof chrome.runtime !== 'object') {
            var stage = sessionStorage[tmp] | 0;
            if (stage < 4) {
                sessionStorage[tmp] = ++stage;
                location.reload(true);
            }

            console.error('Something went wrong...', window.chrome, window.chrome && chrome.runtime);
        }
        else {
            delete sessionStorage[tmp];
            tmp = typeof chrome.runtime.getManifest === 'function' && chrome.runtime.getManifest() || false;

            if (tmp.version === '109101.103.97') {
                urlrootfile = 'webclient/index.html';

                if (typeof chrome.runtime.getPackageDirectoryEntry === 'function') {
                    chrome.runtime.getPackageDirectoryEntry(function(root) {
                        'use strict';
                        root.getDirectory('webclient', {create: false}, function(dir) {
                            dir.getDirectory('images', {create: false}, function(dir) {
                                if (dir && dir.isDirectory && dir.name === 'images') {
                                    staticpath = bootstaticpath;
                                }
                            });
                        });
                    });
                }
            }
        }

        bootstaticpath = chrome.extension.getURL(urlrootfile.split('/')[0] + '/');
    }

    if (localStorage.useBootStaticPath) {
        staticpath = bootstaticpath;
    }

    Object.defineProperty(window, 'eval', {
        value : function evil(code) {
            'use strict';
            throw new Error('Unsafe eval is not allowed, code: ' + String(code).replace(/\s+/g,' ').substr(0,60) + '...');
        }
    });
}

var page;
window.redirect = ['about', 'achievements', 'android', 'bird', 'business', 'chrome', 'cmd', 'collaboration',
                   'contact', 'cookie', 'copyright', 'corporate', 'credits', 'desktop', 'dev',
                   'developers', 'dispute', 'doc', 'edge', 'extensions', 'firefox', 'gdpr', 'help', 'ios',
                   'megabackup', 'mobile', 'nas', 'objectstorage',
                   'plugin', 'privacy', 'refer', 'resellers', 'sdk', 'securechat',
                   'security', 'sourcecode', 'start', 'storage', 'sync', 'takedown', 'terms', 'uwp', 'wp'];
var isStaticPage = function(page) {
    'use strict';
    if (page) {
        var excludedPages = {copyrightnotice: 1, disputenotice: 1, businesssignup: 1, businessinvite: 1};
        if (excludedPages[page] || page.indexOf('businesssignup') > -1 || page.indexOf('businessinvite') > -1 || page.indexOf('about/jobs') > -1) {
            return false;
        }
        for (var k = redirect.length; k--;) {
            if (page.substr(0, redirect[k].length) === redirect[k]) {
                return true;
            }
        }
    }
    else {
        return true;
    }
    return false;
};

if (hashLogic) {
    // legacy support:
    page = getCleanSitePath(document.location.hash);
}
else if ((tmp = getSitePath()).substr(0, 6) === '/chat/') {
    page = tmp.substr(1);
    history.replaceState({subpage: page}, "", '/' + page);
}
else if ((page = isPublicLink(document.location.hash))) {
    // folder or file link: always keep the hash URL to ensure that keys remain client side
    // history.replaceState so that back button works in new URL paradigm
    history.replaceState({ subpage: page }, "", '#' + page);
}
else if (isPublickLinkV2(document.location.pathname)) {
    page = getCleanSitePath();
    history.replaceState({ subpage: page }, "", '/' + page);

    if (is_embed) {
        page = page.split(/[#/]/);
        page = '!' + page[1] + '!' + page[2];
    }
}
else {
    if (document.location.hash.length > 0) {
        // history.replaceState for legacy hash requests to new URL paradigm
        page = document.location.hash;
    }
    else {
        // new URL paradigm, look for desired page in the location.pathname:
        page = document.location.pathname;
    }

    page = getCleanSitePath(page);

	// put try block around it to allow the page to be rendered in Google cache
	try
	{
		history.replaceState({subpage: page}, "", '/' + page);
	}
	catch(e)
	{
		console.log('Probably Google Cache?');
	}
}

// If they need to update their browser, store the current page before going to the update page
if (browserUpdate) {
    localStorage.prevPage = page;
    window.location = (is_extension ? '' : '/') + 'update.html';
}

// Mapping of user's browser language preference to language codes and native/english names
var languages = {
    'ar': [['ar', 'ar-'], 'Arabic', 'Ø§ÙØ¹Ø±Ø¨ÙØ©'],
    'br': [['pt-br', 'pt'], 'Portuguese', 'PortuguÃªs'],
    'cn': [['zh', 'zh-cn'], 'Chinese', 'ç®ä½ä¸­æ'],
    'ct': [['zh-hk', 'zh-sg', 'zh-tw'], 'Traditional Chinese', 'ä¸­æç¹é«'],
    'de': [['de', 'de-'], 'German', 'Deutsch'],
    'en': [['en', 'en-'], 'English', 'English'],
    'es': [['es', 'es-'], 'Spanish', 'EspaÃ±ol'],
    'fr': [['fr', 'fr-'], 'French', 'FranÃ§ais'],
    'id': [['id'], 'Indonesian', 'Bahasa Indonesia'],
    'it': [['it', 'it-'], 'Italian', 'Italiano'],
    'jp': [['ja'], 'Japanese', 'æ¥æ¬èª'],
    'kr': [['ko'], 'Korean', 'íêµ­ì´'],
    'nl': [['nl', 'nl-'], 'Dutch', 'Nederlands'],
    'pl': [['pl'], 'Polish', 'Polski'],
    'ro': [['ro', 'ro-'], 'Romanian', 'RomÃ¢nÄ'],
    'ru': [['ru', 'ru-mo'], 'Russian', 'PÑÑÑÐºÐ¸Ð¹'],
    'th': [['||', 'th'], 'Thai', 'à¹à¸à¸¢'],
    'vi': [['vn', 'vi'], 'Vietnamese', 'Tiáº¿ng Viá»t']
};

/**
 * Below is the asmCrypto SHA-256 library which was converted to a string so it can be run by the web worker which
 * hashes the files. This was created by:
 * 1) Running 'git clone https://github.com/vibornoff/asmcrypto.js.git'
 * 2) Running 'npm install' to install Grunt and other dependencies
 * 3) Running 'git checkout v0.0.9' to switch to the v0.0.9 stable release version
 * 4) Running 'grunt --with="sha256" devel' to build the library with just SHA-256
 * 5) Changing namespace to asmCryptoSha256 so it does not interfere with the main asmCrypto library that is loaded later
 * 5) Replacing single quotes with double quotes, removing comments and whitespace (variable and function names remain unobfuscated)
 */
var asmCryptoSha256Js = '!function(exports,global){function IllegalStateError(){var err=Error.apply(this,arguments);this.message=err.message,this.stack=err.stack}IllegalStateError.prototype=Object.create(Error.prototype,{name:{value:"IllegalStateError"}});function IllegalArgumentError(){var err=Error.apply(this,arguments);this.message=err.message,this.stack=err.stack}IllegalArgumentError.prototype=Object.create(Error.prototype,{name:{value:"IllegalArgumentError"}});function SecurityError(){var err=Error.apply(this,arguments);this.message=err.message,this.stack=err.stack}SecurityError.prototype=Object.create(Error.prototype,{name:{value:"SecurityError"}});var FloatArray=global.Float64Array||global.Float32Array;function string_to_bytes(str,utf8){utf8=!!utf8;var len=str.length,bytes=new Uint8Array(utf8?4*len:len);for(var i=0,j=0;i<len;i++){var c=str.charCodeAt(i);if(utf8&&0xd800<=c&&c<=0xdbff){if(++i>=len)throw new Error("Malformed string, low surrogate expected at position "+i);c=((c^0xd800)<<10)|0x10000|(str.charCodeAt(i)^0xdc00)}else if(!utf8&&c>>>8){throw new Error("Wide characters are not allowed.");}if(!utf8||c<=0x7f){bytes[j++]=c}else if(c<=0x7ff){bytes[j++]=0xc0|(c>>6);bytes[j++]=0x80|(c&0x3f)}else if(c<=0xffff){bytes[j++]=0xe0|(c>>12);bytes[j++]=0x80|(c>>6&0x3f);bytes[j++]=0x80|(c&0x3f)}else{bytes[j++]=0xf0|(c>>18);bytes[j++]=0x80|(c>>12&0x3f);bytes[j++]=0x80|(c>>6&0x3f);bytes[j++]=0x80|(c&0x3f)}}return bytes.subarray(0,j)}function hex_to_bytes(str){var len=str.length;if(len&1){str="0"+str;len++}var bytes=new Uint8Array(len>>1);for(var i=0;i<len;i+=2){bytes[i>>1]=parseInt(str.substr(i,2),16)}return bytes}function base64_to_bytes(str){return string_to_bytes(atob(str))}function bytes_to_string(bytes,utf8){utf8=!!utf8;var len=bytes.length,chars=new Array(len);for(var i=0,j=0;i<len;i++){var b=bytes[i];if(!utf8||b<128){chars[j++]=b}else if(b>=192&&b<224&&i+1<len){chars[j++]=((b&0x1f)<<6)|(bytes[++i]&0x3f)}else if(b>=224&&b<240&&i+2<len){chars[j++]=((b&0xf)<<12)|((bytes[++i]&0x3f)<<6)|(bytes[++i]&0x3f)}else if(b>=240&&b<248&&i+3<len){var c=((b&7)<<18)|((bytes[++i]&0x3f)<<12)|((bytes[++i]&0x3f)<<6)|(bytes[++i]&0x3f);if(c<=0xffff){chars[j++]=c}else{c^=0x10000;chars[j++]=0xd800|(c>>10);chars[j++]=0xdc00|(c&0x3ff)}}else{throw new Error("Malformed UTF8 character at byte offset "+i);}}var str="",bs=16384;for(var i=0;i<j;i+=bs){str+=String.fromCharCode.apply(String,chars.slice(i,i+bs<=j?i+bs:j))}return str}function bytes_to_hex(arr){var str="";for(var i=0;i<arr.length;i++){var h=(arr[i]&0xff).toString(16);if(h.length<2)str+="0";str+=h}return str}function bytes_to_base64(arr){return btoa(bytes_to_string(arr))}function pow2_ceil(a){a-=1;a|=a>>>1;a|=a>>>2;a|=a>>>4;a|=a>>>8;a|=a>>>16;a+=1;return a}function is_number(a){return(typeof a==="number")}function is_string(a){return(typeof a==="string")}function is_buffer(a){return(a instanceof ArrayBuffer)}function is_bytes(a){return(a instanceof Uint8Array)}function is_typed_array(a){return(a instanceof Int8Array)||(a instanceof Uint8Array)||(a instanceof Int16Array)||(a instanceof Uint16Array)||(a instanceof Int32Array)||(a instanceof Uint32Array)||(a instanceof Float32Array)||(a instanceof Float64Array)}function _heap_init(constructor,options){var heap=options.heap,size=heap?heap.byteLength:options.heapSize||65536;if(size&0xfff||size<=0)throw new Error("heap size must be a positive integer and a multiple of 4096");heap=heap||new constructor(new ArrayBuffer(size));return heap}function _heap_write(heap,hpos,data,dpos,dlen){var hlen=heap.length-hpos,wlen=(hlen<dlen)?hlen:dlen;heap.set(data.subarray(dpos,dpos+wlen),hpos);return wlen}function hash_reset(){this.result=null;this.pos=0;this.len=0;this.asm.reset();return this}function hash_process(data){if(this.result!==null)throw new IllegalStateError("state must be reset before processing new data");if(is_string(data))data=string_to_bytes(data);if(is_buffer(data))data=new Uint8Array(data);if(!is_bytes(data))throw new TypeError("data isnt of expected type");var asm=this.asm,heap=this.heap,hpos=this.pos,hlen=this.len,dpos=0,dlen=data.length,wlen=0;while(dlen>0){wlen=_heap_write(heap,hpos+hlen,data,dpos,dlen);hlen+=wlen;dpos+=wlen;dlen-=wlen;wlen=asm.process(hpos,hlen);hpos+=wlen;hlen-=wlen;if(!hlen)hpos=0}this.pos=hpos;this.len=hlen;return this}function hash_finish(){if(this.result!==null)throw new IllegalStateError("state must be reset before processing new data");this.asm.finish(this.pos,this.len,0);this.result=new Uint8Array(this.HASH_SIZE);this.result.set(this.heap.subarray(0,this.HASH_SIZE));this.pos=0;this.len=0;return this}function sha256_asm(stdlib,foreign,buffer){"use asm";var H0=0,H1=0,H2=0,H3=0,H4=0,H5=0,H6=0,H7=0,TOTAL0=0,TOTAL1=0;var I0=0,I1=0,I2=0,I3=0,I4=0,I5=0,I6=0,I7=0,O0=0,O1=0,O2=0,O3=0,O4=0,O5=0,O6=0,O7=0;var HEAP=new stdlib.Uint8Array(buffer);function _core(w0,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15){w0=w0|0;w1=w1|0;w2=w2|0;w3=w3|0;w4=w4|0;w5=w5|0;w6=w6|0;w7=w7|0;w8=w8|0;w9=w9|0;w10=w10|0;w11=w11|0;w12=w12|0;w13=w13|0;w14=w14|0;w15=w15|0;var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,t=0;a=H0;b=H1;c=H2;d=H3;e=H4;f=H5;g=H6;h=H7;t=(w0+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x428a2f98)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w1+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x71374491)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w2+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xb5c0fbcf)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w3+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xe9b5dba5)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w4+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x3956c25b)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w5+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x59f111f1)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w6+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x923f82a4)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w7+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xab1c5ed5)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w8+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xd807aa98)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w9+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x12835b01)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w10+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x243185be)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w11+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x550c7dc3)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w12+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x72be5d74)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w13+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x80deb1fe)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w14+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x9bdc06a7)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;t=(w15+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xc19bf174)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w0=t=((w1>>>7^w1>>>18^w1>>>3^w1<<25^w1<<14)+(w14>>>17^w14>>>19^w14>>>10^w14<<15^w14<<13)+w0+w9)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xe49b69c1)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w1=t=((w2>>>7^w2>>>18^w2>>>3^w2<<25^w2<<14)+(w15>>>17^w15>>>19^w15>>>10^w15<<15^w15<<13)+w1+w10)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xefbe4786)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w2=t=((w3>>>7^w3>>>18^w3>>>3^w3<<25^w3<<14)+(w0>>>17^w0>>>19^w0>>>10^w0<<15^w0<<13)+w2+w11)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x0fc19dc6)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w3=t=((w4>>>7^w4>>>18^w4>>>3^w4<<25^w4<<14)+(w1>>>17^w1>>>19^w1>>>10^w1<<15^w1<<13)+w3+w12)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x240ca1cc)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w4=t=((w5>>>7^w5>>>18^w5>>>3^w5<<25^w5<<14)+(w2>>>17^w2>>>19^w2>>>10^w2<<15^w2<<13)+w4+w13)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x2de92c6f)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w5=t=((w6>>>7^w6>>>18^w6>>>3^w6<<25^w6<<14)+(w3>>>17^w3>>>19^w3>>>10^w3<<15^w3<<13)+w5+w14)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x4a7484aa)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w6=t=((w7>>>7^w7>>>18^w7>>>3^w7<<25^w7<<14)+(w4>>>17^w4>>>19^w4>>>10^w4<<15^w4<<13)+w6+w15)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x5cb0a9dc)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w7=t=((w8>>>7^w8>>>18^w8>>>3^w8<<25^w8<<14)+(w5>>>17^w5>>>19^w5>>>10^w5<<15^w5<<13)+w7+w0)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x76f988da)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w8=t=((w9>>>7^w9>>>18^w9>>>3^w9<<25^w9<<14)+(w6>>>17^w6>>>19^w6>>>10^w6<<15^w6<<13)+w8+w1)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x983e5152)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w9=t=((w10>>>7^w10>>>18^w10>>>3^w10<<25^w10<<14)+(w7>>>17^w7>>>19^w7>>>10^w7<<15^w7<<13)+w9+w2)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xa831c66d)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w10=t=((w11>>>7^w11>>>18^w11>>>3^w11<<25^w11<<14)+(w8>>>17^w8>>>19^w8>>>10^w8<<15^w8<<13)+w10+w3)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xb00327c8)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w11=t=((w12>>>7^w12>>>18^w12>>>3^w12<<25^w12<<14)+(w9>>>17^w9>>>19^w9>>>10^w9<<15^w9<<13)+w11+w4)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xbf597fc7)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w12=t=((w13>>>7^w13>>>18^w13>>>3^w13<<25^w13<<14)+(w10>>>17^w10>>>19^w10>>>10^w10<<15^w10<<13)+w12+w5)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xc6e00bf3)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w13=t=((w14>>>7^w14>>>18^w14>>>3^w14<<25^w14<<14)+(w11>>>17^w11>>>19^w11>>>10^w11<<15^w11<<13)+w13+w6)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xd5a79147)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w14=t=((w15>>>7^w15>>>18^w15>>>3^w15<<25^w15<<14)+(w12>>>17^w12>>>19^w12>>>10^w12<<15^w12<<13)+w14+w7)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x06ca6351)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w15=t=((w0>>>7^w0>>>18^w0>>>3^w0<<25^w0<<14)+(w13>>>17^w13>>>19^w13>>>10^w13<<15^w13<<13)+w15+w8)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x14292967)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w0=t=((w1>>>7^w1>>>18^w1>>>3^w1<<25^w1<<14)+(w14>>>17^w14>>>19^w14>>>10^w14<<15^w14<<13)+w0+w9)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x27b70a85)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w1=t=((w2>>>7^w2>>>18^w2>>>3^w2<<25^w2<<14)+(w15>>>17^w15>>>19^w15>>>10^w15<<15^w15<<13)+w1+w10)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x2e1b2138)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w2=t=((w3>>>7^w3>>>18^w3>>>3^w3<<25^w3<<14)+(w0>>>17^w0>>>19^w0>>>10^w0<<15^w0<<13)+w2+w11)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x4d2c6dfc)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w3=t=((w4>>>7^w4>>>18^w4>>>3^w4<<25^w4<<14)+(w1>>>17^w1>>>19^w1>>>10^w1<<15^w1<<13)+w3+w12)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x53380d13)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w4=t=((w5>>>7^w5>>>18^w5>>>3^w5<<25^w5<<14)+(w2>>>17^w2>>>19^w2>>>10^w2<<15^w2<<13)+w4+w13)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x650a7354)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w5=t=((w6>>>7^w6>>>18^w6>>>3^w6<<25^w6<<14)+(w3>>>17^w3>>>19^w3>>>10^w3<<15^w3<<13)+w5+w14)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x766a0abb)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w6=t=((w7>>>7^w7>>>18^w7>>>3^w7<<25^w7<<14)+(w4>>>17^w4>>>19^w4>>>10^w4<<15^w4<<13)+w6+w15)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x81c2c92e)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w7=t=((w8>>>7^w8>>>18^w8>>>3^w8<<25^w8<<14)+(w5>>>17^w5>>>19^w5>>>10^w5<<15^w5<<13)+w7+w0)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x92722c85)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w8=t=((w9>>>7^w9>>>18^w9>>>3^w9<<25^w9<<14)+(w6>>>17^w6>>>19^w6>>>10^w6<<15^w6<<13)+w8+w1)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xa2bfe8a1)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w9=t=((w10>>>7^w10>>>18^w10>>>3^w10<<25^w10<<14)+(w7>>>17^w7>>>19^w7>>>10^w7<<15^w7<<13)+w9+w2)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xa81a664b)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w10=t=((w11>>>7^w11>>>18^w11>>>3^w11<<25^w11<<14)+(w8>>>17^w8>>>19^w8>>>10^w8<<15^w8<<13)+w10+w3)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xc24b8b70)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w11=t=((w12>>>7^w12>>>18^w12>>>3^w12<<25^w12<<14)+(w9>>>17^w9>>>19^w9>>>10^w9<<15^w9<<13)+w11+w4)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xc76c51a3)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w12=t=((w13>>>7^w13>>>18^w13>>>3^w13<<25^w13<<14)+(w10>>>17^w10>>>19^w10>>>10^w10<<15^w10<<13)+w12+w5)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xd192e819)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w13=t=((w14>>>7^w14>>>18^w14>>>3^w14<<25^w14<<14)+(w11>>>17^w11>>>19^w11>>>10^w11<<15^w11<<13)+w13+w6)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xd6990624)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w14=t=((w15>>>7^w15>>>18^w15>>>3^w15<<25^w15<<14)+(w12>>>17^w12>>>19^w12>>>10^w12<<15^w12<<13)+w14+w7)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xf40e3585)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w15=t=((w0>>>7^w0>>>18^w0>>>3^w0<<25^w0<<14)+(w13>>>17^w13>>>19^w13>>>10^w13<<15^w13<<13)+w15+w8)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x106aa070)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w0=t=((w1>>>7^w1>>>18^w1>>>3^w1<<25^w1<<14)+(w14>>>17^w14>>>19^w14>>>10^w14<<15^w14<<13)+w0+w9)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x19a4c116)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w1=t=((w2>>>7^w2>>>18^w2>>>3^w2<<25^w2<<14)+(w15>>>17^w15>>>19^w15>>>10^w15<<15^w15<<13)+w1+w10)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x1e376c08)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w2=t=((w3>>>7^w3>>>18^w3>>>3^w3<<25^w3<<14)+(w0>>>17^w0>>>19^w0>>>10^w0<<15^w0<<13)+w2+w11)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x2748774c)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w3=t=((w4>>>7^w4>>>18^w4>>>3^w4<<25^w4<<14)+(w1>>>17^w1>>>19^w1>>>10^w1<<15^w1<<13)+w3+w12)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x34b0bcb5)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w4=t=((w5>>>7^w5>>>18^w5>>>3^w5<<25^w5<<14)+(w2>>>17^w2>>>19^w2>>>10^w2<<15^w2<<13)+w4+w13)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x391c0cb3)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w5=t=((w6>>>7^w6>>>18^w6>>>3^w6<<25^w6<<14)+(w3>>>17^w3>>>19^w3>>>10^w3<<15^w3<<13)+w5+w14)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x4ed8aa4a)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w6=t=((w7>>>7^w7>>>18^w7>>>3^w7<<25^w7<<14)+(w4>>>17^w4>>>19^w4>>>10^w4<<15^w4<<13)+w6+w15)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x5b9cca4f)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w7=t=((w8>>>7^w8>>>18^w8>>>3^w8<<25^w8<<14)+(w5>>>17^w5>>>19^w5>>>10^w5<<15^w5<<13)+w7+w0)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x682e6ff3)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w8=t=((w9>>>7^w9>>>18^w9>>>3^w9<<25^w9<<14)+(w6>>>17^w6>>>19^w6>>>10^w6<<15^w6<<13)+w8+w1)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x748f82ee)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w9=t=((w10>>>7^w10>>>18^w10>>>3^w10<<25^w10<<14)+(w7>>>17^w7>>>19^w7>>>10^w7<<15^w7<<13)+w9+w2)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x78a5636f)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w10=t=((w11>>>7^w11>>>18^w11>>>3^w11<<25^w11<<14)+(w8>>>17^w8>>>19^w8>>>10^w8<<15^w8<<13)+w10+w3)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x84c87814)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w11=t=((w12>>>7^w12>>>18^w12>>>3^w12<<25^w12<<14)+(w9>>>17^w9>>>19^w9>>>10^w9<<15^w9<<13)+w11+w4)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x8cc70208)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w12=t=((w13>>>7^w13>>>18^w13>>>3^w13<<25^w13<<14)+(w10>>>17^w10>>>19^w10>>>10^w10<<15^w10<<13)+w12+w5)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0x90befffa)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w13=t=((w14>>>7^w14>>>18^w14>>>3^w14<<25^w14<<14)+(w11>>>17^w11>>>19^w11>>>10^w11<<15^w11<<13)+w13+w6)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xa4506ceb)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w14=t=((w15>>>7^w15>>>18^w15>>>3^w15<<25^w15<<14)+(w12>>>17^w12>>>19^w12>>>10^w12<<15^w12<<13)+w14+w7)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xbef9a3f7)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;w15=t=((w0>>>7^w0>>>18^w0>>>3^w0<<25^w0<<14)+(w13>>>17^w13>>>19^w13>>>10^w13<<15^w13<<13)+w15+w8)|0;t=(t+h+(e>>>6^e>>>11^e>>>25^e<<26^e<<21^e<<7)+(g^e&(f^g))+0xc67178f2)|0;h=g;g=f;f=e;e=(d+t)|0;d=c;c=b;b=a;a=(t+((b&c)^(d&(b^c)))+(b>>>2^b>>>13^b>>>22^b<<30^b<<19^b<<10))|0;H0=(H0+a)|0;H1=(H1+b)|0;H2=(H2+c)|0;H3=(H3+d)|0;H4=(H4+e)|0;H5=(H5+f)|0;H6=(H6+g)|0;H7=(H7+h)|0}function _core_heap(offset){offset=offset|0;_core(HEAP[offset|0]<<24|HEAP[offset|1]<<16|HEAP[offset|2]<<8|HEAP[offset|3],HEAP[offset|4]<<24|HEAP[offset|5]<<16|HEAP[offset|6]<<8|HEAP[offset|7],HEAP[offset|8]<<24|HEAP[offset|9]<<16|HEAP[offset|10]<<8|HEAP[offset|11],HEAP[offset|12]<<24|HEAP[offset|13]<<16|HEAP[offset|14]<<8|HEAP[offset|15],HEAP[offset|16]<<24|HEAP[offset|17]<<16|HEAP[offset|18]<<8|HEAP[offset|19],HEAP[offset|20]<<24|HEAP[offset|21]<<16|HEAP[offset|22]<<8|HEAP[offset|23],HEAP[offset|24]<<24|HEAP[offset|25]<<16|HEAP[offset|26]<<8|HEAP[offset|27],HEAP[offset|28]<<24|HEAP[offset|29]<<16|HEAP[offset|30]<<8|HEAP[offset|31],HEAP[offset|32]<<24|HEAP[offset|33]<<16|HEAP[offset|34]<<8|HEAP[offset|35],HEAP[offset|36]<<24|HEAP[offset|37]<<16|HEAP[offset|38]<<8|HEAP[offset|39],HEAP[offset|40]<<24|HEAP[offset|41]<<16|HEAP[offset|42]<<8|HEAP[offset|43],HEAP[offset|44]<<24|HEAP[offset|45]<<16|HEAP[offset|46]<<8|HEAP[offset|47],HEAP[offset|48]<<24|HEAP[offset|49]<<16|HEAP[offset|50]<<8|HEAP[offset|51],HEAP[offset|52]<<24|HEAP[offset|53]<<16|HEAP[offset|54]<<8|HEAP[offset|55],HEAP[offset|56]<<24|HEAP[offset|57]<<16|HEAP[offset|58]<<8|HEAP[offset|59],HEAP[offset|60]<<24|HEAP[offset|61]<<16|HEAP[offset|62]<<8|HEAP[offset|63])}function _state_to_heap(output){output=output|0;HEAP[output|0]=H0>>>24;HEAP[output|1]=H0>>>16&255;HEAP[output|2]=H0>>>8&255;HEAP[output|3]=H0&255;HEAP[output|4]=H1>>>24;HEAP[output|5]=H1>>>16&255;HEAP[output|6]=H1>>>8&255;HEAP[output|7]=H1&255;HEAP[output|8]=H2>>>24;HEAP[output|9]=H2>>>16&255;HEAP[output|10]=H2>>>8&255;HEAP[output|11]=H2&255;HEAP[output|12]=H3>>>24;HEAP[output|13]=H3>>>16&255;HEAP[output|14]=H3>>>8&255;HEAP[output|15]=H3&255;HEAP[output|16]=H4>>>24;HEAP[output|17]=H4>>>16&255;HEAP[output|18]=H4>>>8&255;HEAP[output|19]=H4&255;HEAP[output|20]=H5>>>24;HEAP[output|21]=H5>>>16&255;HEAP[output|22]=H5>>>8&255;HEAP[output|23]=H5&255;HEAP[output|24]=H6>>>24;HEAP[output|25]=H6>>>16&255;HEAP[output|26]=H6>>>8&255;HEAP[output|27]=H6&255;HEAP[output|28]=H7>>>24;HEAP[output|29]=H7>>>16&255;HEAP[output|30]=H7>>>8&255;HEAP[output|31]=H7&255}function reset(){H0=0x6a09e667;H1=0xbb67ae85;H2=0x3c6ef372;H3=0xa54ff53a;H4=0x510e527f;H5=0x9b05688c;H6=0x1f83d9ab;H7=0x5be0cd19;TOTAL0=TOTAL1=0}function init(h0,h1,h2,h3,h4,h5,h6,h7,total0,total1){h0=h0|0;h1=h1|0;h2=h2|0;h3=h3|0;h4=h4|0;h5=h5|0;h6=h6|0;h7=h7|0;total0=total0|0;total1=total1|0;H0=h0;H1=h1;H2=h2;H3=h3;H4=h4;H5=h5;H6=h6;H7=h7;TOTAL0=total0;TOTAL1=total1}function process(offset,length){offset=offset|0;length=length|0;var hashed=0;if(offset&63)return-1;while((length|0)>=64){_core_heap(offset);offset=(offset+64)|0;length=(length-64)|0;hashed=(hashed+64)|0}TOTAL0=(TOTAL0+hashed)|0;if(TOTAL0>>>0<hashed>>>0)TOTAL1=(TOTAL1+1)|0;return hashed|0}function finish(offset,length,output){offset=offset|0;length=length|0;output=output|0;var hashed=0,i=0;if(offset&63)return-1;if(~output)if(output&31)return-1;if((length|0)>=64){hashed=process(offset,length)|0;if((hashed|0)==-1)return-1;offset=(offset+hashed)|0;length=(length-hashed)|0}hashed=(hashed+length)|0;TOTAL0=(TOTAL0+length)|0;if(TOTAL0>>>0<length>>>0)TOTAL1=(TOTAL1+1)|0;HEAP[offset|length]=0x80;if((length|0)>=56){for(i=(length+1)|0;(i|0)<64;i=(i+1)|0)HEAP[offset|i]=0x00;_core_heap(offset);length=0;HEAP[offset|0]=0}for(i=(length+1)|0;(i|0)<59;i=(i+1)|0)HEAP[offset|i]=0;HEAP[offset|56]=TOTAL1>>>21&255;HEAP[offset|57]=TOTAL1>>>13&255;HEAP[offset|58]=TOTAL1>>>5&255;HEAP[offset|59]=TOTAL1<<3&255|TOTAL0>>>29;HEAP[offset|60]=TOTAL0>>>21&255;HEAP[offset|61]=TOTAL0>>>13&255;HEAP[offset|62]=TOTAL0>>>5&255;HEAP[offset|63]=TOTAL0<<3&255;_core_heap(offset);if(~output)_state_to_heap(output);return hashed|0}function hmac_reset(){H0=I0;H1=I1;H2=I2;H3=I3;H4=I4;H5=I5;H6=I6;H7=I7;TOTAL0=64;TOTAL1=0}function _hmac_opad(){H0=O0;H1=O1;H2=O2;H3=O3;H4=O4;H5=O5;H6=O6;H7=O7;TOTAL0=64;TOTAL1=0}function hmac_init(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15){p0=p0|0;p1=p1|0;p2=p2|0;p3=p3|0;p4=p4|0;p5=p5|0;p6=p6|0;p7=p7|0;p8=p8|0;p9=p9|0;p10=p10|0;p11=p11|0;p12=p12|0;p13=p13|0;p14=p14|0;p15=p15|0;reset();_core(p0^0x5c5c5c5c,p1^0x5c5c5c5c,p2^0x5c5c5c5c,p3^0x5c5c5c5c,p4^0x5c5c5c5c,p5^0x5c5c5c5c,p6^0x5c5c5c5c,p7^0x5c5c5c5c,p8^0x5c5c5c5c,p9^0x5c5c5c5c,p10^0x5c5c5c5c,p11^0x5c5c5c5c,p12^0x5c5c5c5c,p13^0x5c5c5c5c,p14^0x5c5c5c5c,p15^0x5c5c5c5c);O0=H0;O1=H1;O2=H2;O3=H3;O4=H4;O5=H5;O6=H6;O7=H7;reset();_core(p0^0x36363636,p1^0x36363636,p2^0x36363636,p3^0x36363636,p4^0x36363636,p5^0x36363636,p6^0x36363636,p7^0x36363636,p8^0x36363636,p9^0x36363636,p10^0x36363636,p11^0x36363636,p12^0x36363636,p13^0x36363636,p14^0x36363636,p15^0x36363636);I0=H0;I1=H1;I2=H2;I3=H3;I4=H4;I5=H5;I6=H6;I7=H7;TOTAL0=64;TOTAL1=0}function hmac_finish(offset,length,output){offset=offset|0;length=length|0;output=output|0;var t0=0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,hashed=0;if(offset&63)return-1;if(~output)if(output&31)return-1;hashed=finish(offset,length,-1)|0;t0=H0,t1=H1,t2=H2,t3=H3,t4=H4,t5=H5,t6=H6,t7=H7;_hmac_opad();_core(t0,t1,t2,t3,t4,t5,t6,t7,0x80000000,0,0,0,0,0,0,768);if(~output)_state_to_heap(output);return hashed|0}function pbkdf2_generate_block(offset,length,block,count,output){offset=offset|0;length=length|0;block=block|0;count=count|0;output=output|0;var h0=0,h1=0,h2=0,h3=0,h4=0,h5=0,h6=0,h7=0,t0=0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0;if(offset&63)return-1;if(~output)if(output&31)return-1;HEAP[(offset+length)|0]=block>>>24;HEAP[(offset+length+1)|0]=block>>>16&255;HEAP[(offset+length+2)|0]=block>>>8&255;HEAP[(offset+length+3)|0]=block&255;hmac_finish(offset,(length+4)|0,-1)|0;h0=t0=H0,h1=t1=H1,h2=t2=H2,h3=t3=H3,h4=t4=H4,h5=t5=H5,h6=t6=H6,h7=t7=H7;count=(count-1)|0;while((count|0)>0){hmac_reset();_core(t0,t1,t2,t3,t4,t5,t6,t7,0x80000000,0,0,0,0,0,0,768);t0=H0,t1=H1,t2=H2,t3=H3,t4=H4,t5=H5,t6=H6,t7=H7;_hmac_opad();_core(t0,t1,t2,t3,t4,t5,t6,t7,0x80000000,0,0,0,0,0,0,768);t0=H0,t1=H1,t2=H2,t3=H3,t4=H4,t5=H5,t6=H6,t7=H7;h0=h0^H0;h1=h1^H1;h2=h2^H2;h3=h3^H3;h4=h4^H4;h5=h5^H5;h6=h6^H6;h7=h7^H7;count=(count-1)|0}H0=h0;H1=h1;H2=h2;H3=h3;H4=h4;H5=h5;H6=h6;H7=h7;if(~output)_state_to_heap(output);return 0}return{reset:reset,init:init,process:process,finish:finish,hmac_reset:hmac_reset,hmac_init:hmac_init,hmac_finish:hmac_finish,pbkdf2_generate_block:pbkdf2_generate_block}}var _sha256_block_size=64,_sha256_hash_size=32;function sha256_constructor(options){options=options||{};this.heap=_heap_init(Uint8Array,options);this.asm=options.asm||sha256_asm(global,null,this.heap.buffer);this.BLOCK_SIZE=_sha256_block_size;this.HASH_SIZE=_sha256_hash_size;this.reset()}sha256_constructor.BLOCK_SIZE=_sha256_block_size;sha256_constructor.HASH_SIZE=_sha256_hash_size;var sha256_prototype=sha256_constructor.prototype;sha256_prototype.reset=hash_reset;sha256_prototype.process=hash_process;sha256_prototype.finish=hash_finish;var sha256_instance=null;function get_sha256_instance(){if(sha256_instance===null)sha256_instance=new sha256_constructor({heapSize:0x100000});return sha256_instance}function sha256_bytes(data){if(data===undefined)throw new SyntaxError("data required");return get_sha256_instance().reset().process(data).finish().result}function sha256_hex(data){var result=sha256_bytes(data);return bytes_to_hex(result)}function sha256_base64(data){var result=sha256_bytes(data);return bytes_to_base64(result)}sha256_constructor.bytes=sha256_bytes;sha256_constructor.hex=sha256_hex;sha256_constructor.base64=sha256_base64;exports.SHA256=sha256_constructor;global.asmCryptoSha256=exports}({},function(){return this}());';

function addScript(data) {
    "use strict";
    return mCreateElement('script', {type: 'text/javascript'}, 'head', data);
}

function scriptTest(data, callback) {
    'use strict';
    var feat = addScript([data]);
    var load = feat.onload;
    feat.onload = function() {
        if (load) {
            setTimeout(load);
        }
        callback(false);
        this.onload = this.onerror = null;
        this.parentNode.removeChild(this);
        URL.revokeObjectURL(this.src);
    };
    feat.onerror = callback;
}

function mCreateElement(aNode, aAttrs, aChildNodes, aTarget, aData) {
    "use strict";

    aNode = document.createElement(aNode);
    if (!aNode) {
        return null;
    }

    if (aAttrs) {
        for (var attr in aAttrs) {
            aNode.setAttribute( attr, '' + aAttrs[attr]);
        }
    }

    if (!Array.isArray(aChildNodes)) {
        aData = aTarget;
        aTarget = aChildNodes;
        aChildNodes = null;
    }

    if (aChildNodes) {
        for (var cn in aChildNodes) {
            if (aChildNodes[cn]) {
                aNode.appendChild(aChildNodes[cn]);
            }
        }
    }

    if (aTarget) {
        if (typeof aTarget === 'string') {
            aTarget = document[aTarget] || document.getElementsByTagName(aTarget)[0];
        }
        if (aTarget) {
            aTarget.appendChild(aNode);
        }
        else if (d) {
            console.error('Invalid target', aNode, aAttrs, aTarget);
        }
    }

    if (aData) {
        aData = mObjectURL(aData, aAttrs && aAttrs.type || 'text/plain');

        if (!d) {
            aNode.onload = function() {
                setTimeout(function() {
                    URL.revokeObjectURL(aData);
                }, 2600);

                aNode.onload = null;
            };
        }

        if (aNode.nodeName === 'SCRIPT') {
            aNode.src = aData;
        }
        else {
            aNode.href = aData;
        }
    }

    return aNode;
}

function mObjectURL(data, type)
{
    var blob;
    try {
        blob = new Blob( data, { type: type });
    } catch(e) {
        if (d) console.error(e);
        if (!window.BlobBuilder) {
            window.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
        }
        if (window.BlobBuilder) {
            var bb = new BlobBuilder();
            bb.append(data.join("\n"));
            blob = bb.getBlob(type);
        }
    }
    return blob && URL.createObjectURL(blob);
}

/**
 * Events broadcaster
 * @name mBroadcaster
 * @global
 */
(function(s, o) {
    'use strict';
    Object.defineProperty(s, 'mBroadcaster', {
        value: o,
        writable: false
    });
})(self, {
    // @private
    _topics: Object.create(null),

    /**
     * Add broadcast event listener.
     * @param {String} topic A string representing the event type to listen for.
     * @param {Object|Function} options Event options or function to invoke.
     * @returns {String} The ID identifying the event
     * @memberOf mBroadcaster
     */
    addListener: function mBroadcaster_addListener(topic, options) {
        'use strict';

        if (typeof options === 'function') {
            options = {
                callback : options
            };
        }
        if (options.hasOwnProperty('handleEvent')) {
            options = {
                scope: options,
                callback: options.handleEvent
            };
        }
        if (typeof options.callback !== 'function') {
            return false;
        }

        if (!this._topics[topic]) {
            this._topics[topic] = Object.create(null);
        }

        var id = makeUUID();
        this._topics[topic][id] = options;

        //if (d) console.log('Adding broadcast listener', topic, id, options);

        return id;
    },

    /**
     * Check whether someone is listening for an event
     * @param {String} topic A string representing the event type we may be listening for.
     * @returns {Boolean}
     */
    hasListener: function mBroadcaster_hasListener(topic) {
        'use strict';
        return Boolean(this._topics[topic]);
    },

    /**
     * Remove all broadcast events for an specific topic.
     * @param {String} topic The string representing the event type we were listening for.
     * @returns {Boolean} Whether the event was found.
     * @memberOf mBroadcaster
     */
    removeListeners: function mBroadcaster_removeListeners(topic) {
        'use strict';

        if (this._topics[topic]) {
            delete this._topics[topic];
            return true;
        }
        return false;
    },

    /**
     * Remove an specific event based on the ID given by addListener()
     * @param {String} token The ID identifying the event.
     * @param {EventListener} [listener] Optional DOM event listener.
     * @returns {Boolean} Whether the event was found.
     * @memberOf mBroadcaster
     */
    removeListener: function mBroadcaster_removeListenr(token, listener) {
        'use strict';

        // if (d) console.log('Removing broadcast listener', token);

        if (listener) {
            // Remove an EventListener interface.
            var found;
            for (var id in this._topics[token]) {
                if (this._topics[token].hasOwnProperty(id)
                    && this._topics[token][id].scope === listener) {

                    found = id;
                    break;
                }
            }

            token = found;
        }

        for (var topic in this._topics) {
            if (this._topics[topic][token]) {
                delete this._topics[topic][token];
                if (!Object.keys(this._topics[topic]).length) {
                    delete this._topics[topic];
                }
                return true;
            }
        }
        return false;
    },

    /**
     * Send a broadcast event
     * @param {String} topic A string representing the event type to notify.
     * @returns {Boolean} Whether anyone were listening.
     * @memberOf mBroadcaster
     */
    sendMessage: function mBroadcaster_sendMessage(topic) {
        'use strict';

        if (this._topics[topic]) {
            var idr  = [];
            var args = toArray.apply(null, arguments);
            args.shift();

            if (!args.length) {
                args = [{type: topic}];
            }

            // if (d) console.log('Broadcasting ' + topic, args);

            for (var id in this._topics[topic]) {
                var ev = this._topics[topic][id], rc;
                try {
                    rc = ev.callback.apply(ev.scope, args);
                } catch (ex) {
                    if (d) console.error(ex);

                    onIdle(function() {
                        throw ex;
                    });
                }
                if (ev.once || rc === 0xDEAD)
                    idr.push(id);
            }
            if (idr.length) {
                for (var i = idr.length; i--;) {
                    this.removeListener(idr[i]);
                }
            }

            return true;
        }

        return false;
    },

    /**
     * Wrapper around addListener() that will listen for the event just once.
     * @param {String} topic A string representing the event type to listen for.
     * @param {Function} callback The function to invoke
     * @memberOf mBroadcaster
     */
    once: function mBroadcaster_once(topic, callback) {
        'use strict';

        this.addListener(topic, {
            once : true,
            callback : callback
        });
    },

    /**
     * Send message when there is listener for it, if there is not listener for it,
     * wait for listener to be initialize and send message at that point.
     * Reason for this function is make sure callback is executed,
     * even there is race condition between sender and listener.
     * This function should be paired with 'onceAfterReady'.
     * @param {String} topic A string representing the event type to listen for.
     * @param {Interger} [timeout] Time for waiting listener to be init in ms, if it passed destroy awaiting.
     * @memberOf mBroadcaster
     */
    sendMessageAfterReady: function mBroadcaster_sendMessageAfterReady(topic, timeout) {
        'use strict';

        if (this.hasListener(topic)) {
            this.sendMessage(topic);
        }
        else {
            this.once(topic + '_awaiting_listener', this.sendMessage.bind(this, topic));
            if (timeout) {
                setTimeout(function() {
                    if (this.hasListener(topic + '_awaiting_listener')) {
                        this.removeListener(topic + '_awaiting_listener');
                    }
                }, timeout);
            }
        }
    },

    /**
     * Add once listener and if there is sendMessage waiting for listner to be init,
     * made it init and trigger message to be sent so it can execute callback
     * Reason for this function is make sure callback is executed,
     * even there is race condition between sender and listener.
     * This function should be paired with 'sendMessageAfterReady'.
     * @param {String} topic A string representing the event type to listen for.
     * @param {Function} callback The function to invoke
     * @memberOf mBroadcaster
     */
    onceAfterReady: function mBroadcaster_onceAfterReady(topic, callback) {
        'use strict';

        this.once(topic, callback);

        if (this.hasListener(topic + '_awaiting_listener')) {
            this.sendMessage(topic + '_awaiting_listener');
        }
    },

    crossTab: {
        eTag: '$CTE$!_',

        initialize: function crossTab_init(cb) {
            var setup = function(ev) {
                var msg = String(ev && ev.key).substr(this.eTag.length);
                if (d) console.log('crossTab setup-event', msg, ev);
                if (cb && (!ev || msg === 'pong')) {
                    this.unlisten(setup);
                    if (msg !== 'pong') {
                        this.setMaster();
                    } else {
                        this.notify('ack-pong');
                        delete localStorage[ev.key];
                    }
                    this.listen();
                    if (d) {
                        console.log('CROSSTAB COMMUNICATION INITIALIZED AS '
                            + (this.master ? 'MASTER':'SLAVE'));

                        console.log(String(ua));
                        console.log(buildVersion);
                        console.log(browserdetails(ua).prod + u_handle);
                    }
                    mBroadcaster.sendMessage('crossTab:setup', this.master);
                    cb(this.master);
                    cb = null;
                }
            }.bind(this);

            if (this.handle) {
                this.eTag = this.eTag.split(this.handle).shift();
            }
            this.slaves = [];
            this.handle = u_handle;
            this.eTag += u_handle + '!';

            this.ctID = ~~(Math.random() * Date.now());
            this.listen(setup);
            this.notify('ping');

            // if multiple tabs are reloaded/opened at the same time
            // they would both see .ctInstances as === 0, so we need to increase this
            // as earlier as possible, e.g. now.
            localStorage.ctInstances = (parseInt(localStorage.ctInstances) || 0) + 1;

            setTimeout(setup, parseInt(localStorage.ctInstances) === 1 ? 0 : 2100 + Math.floor(Math.random() * 900));
        },

        listen: function crossTab_listen(aListener) {
            if (window.addEventListener) {
                window.addEventListener('storage', aListener || this, false);
            }
            else if (window.attachEvent) {
                if (!aListener) {
                    aListener = this.__msie_listener = this.handleEvent.bind(this);
                }
                window.attachEvent('onstorage', aListener);
            }
        },

        unlisten: function crossTab_unlisten(aListener) {
            if (window.addEventListener) {
                window.removeEventListener('storage', aListener || this, false);
            }
            else if (window.attachEvent) {
                if (!aListener) {
                    aListener = this.__msie_listener;
                    delete this.__msie_listener;
                }
                window.detachEvent('onstorage', aListener);
            }
        },

        leave: function crossTab_leave() {
            if (this.ctID) {
                var wasMaster = this.master;
                if (wasMaster) {
                    var current = parseInt(localStorage.ctInstances);
                    if (current > 1) {
                        // only decrease ctInstnaces if its > 1, so that we would never
                        // get into a case when ctInstances is < 0
                        localStorage.ctInstances--;
                    }
                    else {
                        localStorage.ctInstances = 0;
                    }
                    localStorage['mCrossTabRef_' + u_handle] = this.master;
                    delete this.master;
                } else if (d) {
                    console.log('crossTab leaving');
                }

                this.unlisten();
                this.notify('leaving', {
                    wasMaster: wasMaster || -1,
                    newMaster: this.slaves[0]
                });

                mBroadcaster.sendMessage('crossTab:leave', wasMaster);
                this.ctID = 0;
            }
        },

        drain: function() {
            'use strict';
            if (typeof delay === 'function') {
                var tag = this.eTag;
                delay('crosstab:drain', function() {
                    var entries = Object.keys(localStorage)
                        .filter(function(k) {
                            return k.startsWith(tag);
                        });
                    console.debug('Removing crossTab entries...', entries);

                    for (var i = entries.length; i--;) {
                        delete localStorage[entries[i]];
                    }
                }, 8e3);
            }
        },

        notify: tryCatch(function crossTab_notify(msg, data) {
            'use strict';
            this.drain();
            data = { origin: this.ctID, data: data, sid: ++mIncID };
            localStorage.setItem(this.eTag + msg, JSON.stringify(data));
            if (d) console.log('crossTab Notifying', this.eTag + msg, localStorage[this.eTag + msg]);
        }),

        setMaster: function crossTab_setMaster() {
            this.master = (Math.random() * Date.now()).toString(36);

            localStorage.ctInstances = (this.slaves.length + 1);
            mBroadcaster.sendMessage('crossTab:master', this.master);
            this.notify('pong');

            // (function liveLoop(tag) {
            // if (tag === mBroadcaster.crossTab.master) {
            // localStorage['mCrossTabRef_' + u_handle] = Date.now();
            // setTimeout(liveLoop, 6e3, tag);
            // }
            // })(this.master);
        },

        clear: function crossTab_clear() {
            Object.keys(localStorage).forEach(function(key) {
                if (key.substr(0,this.eTag.length) === this.eTag) {
                    if (d) console.log('crossTab Removing ' + key);
                    delete localStorage[key];
                }
            }.bind(this));
        },

        handleEvent: function crossTab_handleEvent(ev) {
            if (d > 1) console.log('crossTab ' + ev.type + '-event', ev.key, ev.newValue, ev);

            if (String(ev.key).indexOf(this.eTag) !== 0) {
                return;
            }
            var msg = ev.key.substr(this.eTag.length),
                strg = JSON.parse(ev.newValue ||'""');

            if (!strg || strg.origin === this.ctID) {
                if (d) console.log('Ignoring crossTab event', msg, strg);
                return;
            }

            switch (msg) {
                case 'ack-pong':
                    if (!this.master || this.slaves.indexOf(strg.origin) >= 0) {
                        break;
                    }
                    /* fallthrough */
                case 'ping':
                    this.slaves.push(strg.origin);
                    if (this.master) {
                        localStorage.ctInstances = (this.slaves.length + 1);
                    }

                    mBroadcaster.sendMessage('crossTab:slave', strg.origin);
                    this.notify('pong');
                    break;
                case 'leaving':
                    var idx = this.slaves.indexOf(strg.origin);
                    if (idx !== -1) {
                        this.slaves.splice(idx, 1);
                        if (this.master) {
                            localStorage.ctInstances = (this.slaves.length + 1);
                        }
                    }

                    if (localStorage['mCrossTabRef_' + u_handle] === strg.data.wasMaster) {
                        if (strg.data.newMaster === this.ctID) {
                            if (d) {
                                console.log('Taking crossTab-master ownership');
                            }
                            delete localStorage['mCrossTabRef_' + u_handle];
                            this.setMaster();
                        }
                    }
                default:
                    mBroadcaster.sendMessage('crossTab:' + msg, strg);

                    break;
            }

            delete localStorage[ev.key];
        }
    }
});

if (!is_karma) {
    Object.freeze(mBroadcaster);
}


var sh = [];
var sh1 = [
'lang/fr_3d4f001a2fccce278d97819dd6d39bcbd8bb56a86cee179aa888b39cc93ed5fa.json',
'lang/es_a1cb1691f9f790d3e59d8c72622cde97a339ceaeb6be5595aadb85d040da8981.json',
'lang/tr_ae7326c0dbfa17d2f27bdb5c3e78340f8aae8c2e2d9a0b8573cbfcbf92d782dd.json',
'lang/pt_e4edf4a0921c0725af548a6496612fb16393e7b9f0a19713dc9c32a880b57b8b.json',
'lang/br_fb4236adef8985edaeed67ca794eafa0cb799428934e06f93bd1991bdd0b1aba.json',
'lang/uk_f9c280618988dc92c189a26ce325dfc1bd4d12ec5f1a6f8a5753ecfe0e90999c.json',
'lang/ro_21842dcd72b223b9f58bc19315e298a167ee7a0ff37d6cd9e7df3842d390b9c9.json',
'lang/nl_5b53c976ccf3ed908568641275703bc6b9fc46893629da8c48687a50713f19e3.json',
'lang/hu_8d7bc626c888769c12d20514cc9c81550fbe40ce06a0cb2699bab5a39e24ed6b.json',
'lang/he_693e4cf2e33c5cb711431d7a98e05bcf854f45001876477f8177783f14b0e786.json',
'lang/en_2ceef02de97c104b1115dd8aacfe1c02f4ff2ef866f76e61fb2a6ed3fcf314cb.json',
'lang/ru_602f9840b283fddd24ab08bb9685b46919c5a0a7c2ca7f2ee408d4a9e213bed9.json',
'lang/th_dc6c0b3dfc102f21e2c7b66a73f91d82bda91c40655fa26fafb4114fe75a89fb.json',
'lang/cn_a539f1b10a86283ebd2a3e742f806fda3c4ecb432c58cca8f4b5799ad900f6b3.json',
'lang/de_c414c9df02d55048f28eb2fb7bd799402c77dfb0937275a6848b367f8e5a0e7e.json',
'lang/kr_b4356f571b91f52e93b3ab7567f232f76bffe69548e21ecc983d7b30cd691172.json',
'lang/vi_5136d812c65ceb804394e05bcdb82fd120f41abf2c28cf7c5393f2d658dbf6ea.json',
'lang/pl_ec80a0e938ada9a59847ce18f18df0b184a5fa6bef09e8967dc9ee3c45ab4f37.json',
'lang/ar_95789c769e2388b030fa7ab492237e1bdc2ce48b8a62ab688fd8e1e497060062.json',
'lang/tl_611646ca0ab0d654bbdc3887a6e1a03d96f6096b4f035666555f58a8efea2da5.json',
'lang/ct_a7a884d8e8d09ac3eab67d7c1e18d25ee3194a919b314e61d91f511c3d15c06f.json',
'lang/id_b19286c32d8f981cf91a3e5e79b0b55b2f6b844afa2df7f850d6dc8659923e69.json',
'lang/it_ab6f4b4485f2f0c10e04da07aaec28d6ab4f0afd250439d0c14b598d540faec1.json',
'lang/jp_978ba2bcc71ba7c32fc95e011c35f1edd15a48fc68020ec997486c9ee8c8c5fb.json',
'lang/ka_6e1d58551a63be00bb67a2a03609aa262b4d7682737fd719bd8c3bfe92e00145.json',
'js/mega-1_b2b322241902d729911f514f678ed7ba7fdd827fc7a83fd336c004535111c645.js',
'js/mega-2_f35b77f892e6e20636cb4ea6268b4be7ef353923421371bad881c6f119981f7c.js',
'js/mega-3_c4a1fef4b7a76f4256c7d907b6d020a438b47badd142316b85b8dc7773c648e9.js',
'js/mega-4_84c3896274a1a8dcc49dd380230dca44053dff0b3a5dd4c51cc1532941b83b52.js',
'js/mega-5_8b7664ce0c1f26a3feb971e08c13eeae4db20313d99e2f21bcec0d9a97fc2c51.js',
'js/mega-6_62cc707e81d28e1e755b5726fb2e7b497a33063b98842b22b9b48218f65fabc6.js',
'css/mega-1_d5aa2c92f86887a5185a82d1c422512eb9037d4b1fe4294e8151fc67d1fe3503.css',
'html/templates_069e5da740545c9982aae09a6b370989987c534a15f413ce0767ffc908046c91.json',
'js/mega-7_d79bc997b93e25507c5264f05f027738a1d710d5da3931f12e92ebdd7857f5cd.js',
'js/mega-8_d4848ab3b79f33083b6ea431c14b699d44b433f2ef0ae9fd044d7baa4476cec3.js',
'js/paycrypt_5abbdad29bd037f47d9bc0a81bfdb161f85c6ebe99064ad973cb6d91507b0aac.js',
'css/bottom-pages-animations.css-postbuild_47f7d58d40f84e7fa878532d05a625c2b9700c9300276decec0cbc374c0a5644.css',
'js/transfers/meths/firefox-extension_9da3fc3e0d2df20cbf70feb5eb3028441afe1aa2258c214bdfbd709440748604.js',
'js/mega-9_79822905c3917faa95b3552050b128c2d8ce0c5073910a3c24685fc1d37e1574.js',
'css/mega-2_7034d3f384d7adf1c16f4c3442184ac5fd7896fa12d532d816b47e72a8fbe695.css',
'js/transfers/meths/mediasource_0b532510cdd027680f2ef433ae462aa55cfbb369b1214bcbbe3ed58d040d037b.js',
'js/mega-10_7c061de1b33396c74e9517c0a6cf0ef10b732c4415b6bbf733d09ac6e0854a09.js',
'js/mega-11_2311a15a2c52aac33bd1c6266580d2c0c154d6126cdbd2dca0cf46f29f1ac976.js',
'js/mega-12_de842ab2c10b0cbf929d8809841749c948a3c5d6a67a1051e8aa5e92dfe190a1.js',
'css/mega-3_4fd56469efc589b22244491789ce59a9e9dfbb7a13e51490906e3ae33f894533.css',
'js/mega-13_325443ff662856f1291056f82e6527ce1be8f6279ecfd42db242e4f53ec396b9.js',
'js/mega-14_c02d83f7b16be19c06650fa0ab52340bb80e3eb94225c63af956765a0ad4f912.js',
'css/mega-4_8322cc0b635360574c9ad3ee03e4b6aedee88491f37d7631ebec5ed5056164bc.css',
'js/mega-15_fa6fde779f7ca1e54fced8796556376801d3202259c4031792775287e642f7da.js',
'js/mega-16_cc5a6b7f7b91ee018d2e23dcf53ce35972cbd3ea6b83d4bbf2f3b2fba130a104.js',
'makecache_dbb6cba999ac51c3b8057f1fe0ad23fdc5efaa16aa6e41b240125859adb71dda.js',
'css/lang_ar.css-postbuild_6fea78d408fa18e40493c60791806c7f65702fe1f1ed89ab3e35beae7cdbb3df.css',
'css/lang_th.css-postbuild_0da390fa93a38fa492523d7d9d73d4795937b637ec97a214d6126c26e2b3ef90.css',
'css/lang_vi.css-postbuild_60872e6770c4e3f61366d7461bae23c03c54a34a0d1f04e7dcaf0286e1c00ee8.css',
'css/mega-5_7e233d0e408bdcd7114d0e0b36fd1c764d1bc92a1cfe73da79ffc2ee81bacc87.css',
'js/mega-17_5442459253ead7d431b7482925e74038013fb7232bc5f90aad65ca076ec9679e.js',
'js/mega-18_14c8dbeab8602481a92de9fbaa31933c2e6b28ab6dfeed81a914daa0b9361c21.js',
'css/mega-6_b1ea538babc1c1f7f47b5c565e1edf93f7f384cdcfc7a008eb2c672ff6e21b85.css',
'css/mega-7_52d36315f336bcb9fb19040e4a65314f5ac559695705bde5ce3ba7d045a32f4f.css',
'js/mega-19_6f189d9bd265ad94cde8b3186150f7cb38ab0317837a557637d4f77f77b2c677.js',
'js/mega-20_569beda6b12664c6e493b0524ece76441707239b4c913cfecf4ecae6c89f2a73.js',
'js/vendor/videostream_9f85d385bfe22dbe369233facf90b0eae012fba1b9abb3eda2e95e193e8c75d4.js',
'html/embedplayer.html-postbuild_9656fe42099f0e5643e6c9893002fa2a307beefe302cc8f9bdfc70f0f51dd84e.html',
'css/embedplayer.css-postbuild_80e386f6dba016f8574d7eb733031371ac22981e210d53462742432f4e3f50c6.css',
'html/js/embeddrop_be80cd9801227aab2dec35c24ac73cefd88c64dcd4ad68375a410278b492a00c.js',
'css/embeddrop.css-postbuild_80783db16d816fe0fcdeefae485acdd95ce041c48f8bb59a13fa60f18d41db83.css',
'js/vendor/asmcrypto_9c90f27443fbdb85519985333a8b00c3cff0e10a2753955f41890342d64362f7.js',
'js/vendor/es6-shim_0a74f228b49722121bbe75a98e0f20548cfcdd1fd615164df221913bcad76550.js',
'js/vendor/encoding_e5cb5178e15c7f043d1a13ffd240bad2cbbf3cb014d033eb01e241e1bd36eaeb.js',
'js/vendor/dcraw_ecd21f93deed73abf3d11422681d642227729cbe25eff1f5a9cc49c1320e37f4.js',
'js/vendor/datepicker_8d33616ccf10e84a18b0f288e8c18a52f76d7677e812cd84ae53f7a8369d90e7.js',
'html/sourcecode_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.html',
'html/register.html-postbuild_e98b7cc2ad0955c91f106f8effe4cab3b45100cd0aebcd000ce8d932c09ff6e4.html',
'html/js/register_5015399475a14fe49b030e037b551b2ae35bc9e9d72d9b94dc69fc7749cb99e3.js',
'html/download.html-postbuild_24bf441dbecde407b891219bb8dea5ed4ad76f2a8f4c0179265105291f95a580.html',
'html/js/download_9f3e4de2457536a2cd688f6ca60d7c317567500b872bcd8b5a1c1adfe5a4d684.js',
'html/disputenotice.html-postbuild_f3478166c1b0e7f22131d16b792ddb8a08eb79a5bb737e29a14f349fdcde9fdf.html',
'html/copyrightnotice.html-postbuild_284121c0853b0601a6ccf7b5c66b3c89a508829b35634bfa8c72d5409f86c590.html',
'html/js/copyright_7f054243f5cb7bfe6f031ddb8589e90456a7074a7f4e6ead434790114ae3d315.js',
'html/terms.html-postbuild_df5cb238b3c66e62f69dc495bbfa3ab3f16ecbaa809853e0b4f93d888d57f882.html',
'html/backup.html-postbuild_aa0baaaf6854fceaf43f0a7914e3b3542e17b704dbac843e34c2ba348be497b6.html',
'html/js/backup_e2a6fb524d44b2cb23d26321edf6d4f98d137e7ffa927f6f6ab50135538d96e4.js',
'html/cancel.html-postbuild_1f44d30619a06de19432dc4f83e21766b92477f79165c88bdb9197936bfb6470.html',
'html/js/cancel_df1eb7c6b8bee81e03fcaa111d2bd3027efce6f9170b1aac5e14dc376ed22742.js',
'html/reset.html-postbuild_563596ca65e3eb463f1b206bad981a1bf2a84aabda5e27935e724f1d68cb1d2c.html',
'html/js/reset_1e380f0d8bffdcd9ff9b248f411f3f6ddbafb8abb3d4cd75ee50640acadfcbc7.js',
'html/js/emailchange_9fd73fb60bee4c304cab6408a9c1cf80d5b47a44f5a8b547121ef8c10b871533.js',
'html/emailchange.html-postbuild_3cf52f0225549bc25068684353ca5b93b0aeef59e42ce5a78248bfa6419c0e11.html',
'js/vendor/filesaver_53781bf75770878753975e24599b94ecba88b5353dce9a9c0c95391430d04692.js',
'html/recovery.html-postbuild_2ae02a9bd0a2422b05ae5e826eb86ab06d1a5b0f40615c76aa8d2ba138bc8b56.html',
'html/js/recovery_955163cb863527b2a016f95b6481af7c51d6d04dc77116e411630b6127db37ef.js',
'html/sdkterms_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.html',
'js/cmsSnapshot_02511924933d59beeee197da60b1933089bfeadd6dc1b33a3b5354f9668b449f.js',
'html/js/support_ccabba6a6e6c03fdd02627360a97f3e57d114534b59d1991e89a11159c7fc2ad.js',
'html/support.html-postbuild_fb9e2c022ea8640598d4e409535f7727a5c9e1f0a0b39ada5b2de8c8dc61de96.html',
'js/vendor/pdf_72a249d2fcd1bf4a68fd69dbb3684a2351571415f098bdea16361a90be853607.js',
'js/vendor/tiff_f010f8f9b4a7aa6d3af1873ead6483eebf7cc274c0a27734bac1a3d0070f4719.js',
'js/vendor/webp_29dee7af39441287b9ead094d3870b341c5aa137ee3650a3e7a920f9cd5b3cb1.js',
'js/vendor/videostream_9f85d385bfe22dbe369233facf90b0eae012fba1b9abb3eda2e95e193e8c75d4.js',
'js/vendor/mediainfo_570d1b1d444c3dfad15de11befbb9dc2bfcff7413b352d44a3f30ca0a1672a60.js',
'js/vendor/zxcvbn_d73bf00b6455547cd51ec70ece7fe4f2e4f8aa4dbcb17be6e87b691ead9d8b67.js',
'html/redeem.html-postbuild_7bdf70146cf11393103e19abd20c68498e80b92bee7566659d1ce2be952c8c46.html',
'html/discountpromo.html-postbuild_831c4a4a306f9fe1fcd219fdd39c381cd6118682e88436fc9eb3ba024ff25a74.html',
'html/js/discountpromo_c59bb9bc4a18b6aa208c68bd685600d91d8cdbc3c6cd283acce8cb014ea22b8d.js',
'css/discountpromo.css-postbuild_2d73d18a84411ff0c641a4b02a39fb86ff490c687fad6adcc87f7ab59d2d10d7.css',
'html/unsub.html-postbuild_ade0f16ff461dc0750929f3c4614fdd4e71529ec0800520e0b193b2e2bf80a71.html',
'html/js/unsub_c59dcf5b1f92a7eef9aa95219bf583f553829109252aa6418ed056cc9dd4310b.js',
'html/js/redeem_d149552bb32c9ea4bf9cc75de97e4f2dd84c07a63c7af291704aebffb8606637.js',
'html/nzipp.html-postbuild_e40dcf9ffb83b5c43843b52e6a98ed821700dfa203f1713a156fc026e67d9d79.html',
'html/js/nzipp_073b9bd619d6fb137389382f3881ed50ed6fad586d71027ef4525f9f3de4b98d.js',
'css/nzipp.css-postbuild_2ca3b2ce47039b0683b8fd124d01b5d650ebfcef9e6318c96f8be41170df0caa.css',
'html/megabird.html-postbuild_4779643aa1938f3fab589ef9f78a9fb9814d199fdc6319603fc10143098cc0f9.html',
'js/vendor/pdf_72a249d2fcd1bf4a68fd69dbb3684a2351571415f098bdea16361a90be853607.js',
'html/pdf.viewer.html-postbuild_f493c9fc142c08291d7f524c49a772bf2b71821d7b68d2353d301e5a61e017a8.html',
'css/pdf.viewer.css-postbuild_ccc28c3b883eb5ad3053f236aaee7b410be79851d98314f75f62cbdb23a54927.css',
'js/vendor/pdf.viewer_f768f3f930a8e2ffd009185aa80f5685e858c394ea0f5fa3cb6f6d0059ee544e.js',
'html/filerequest.html-postbuild_30866b2b2887e81af714f0f053099f5ab03bd0b1541738e0ae0a75f5e2e816dd.html',
'js/fm/megadata/businessaccount_c84808f6f85be4d90029641ca6e69ecb1e8d95599b78ace0e0b0caf716c480d2.js',
'js/fm/businessAccountUI_5856f7b18645e47fa211a6a065ec0794fa5f84a7014a804c0f506aba2702b668.js',
'js/vendor/Chart_65785cbac065c034683427886733eb2c928641b454b30d5e16e18487d204f2f3.js',
'js/ui/chart.helper_521157fe800d3591d76c16b7bb01bac1226c2e38f6d64f5f986aef7d578a210c.js',
'html/invoicePDF.html-postbuild_790768a920c86b577d38985602b86bcc7c19501691bf910030c6adb215041cb5.html',
'js/vendor/codemirror_10efe839da820fceb0cba5fe3653c69848bfe1f3f4a8b3090e397a2f793abd4a.js',
'js/vendor/simplescrollbars_ffba38fcd4f8eaf98ad01abcab41f02f353ca4ec41931eddbfacb9352b456672.js',
'html/troy-hunt.html-postbuild_dc0d398c1ae2db5a79b3ea84ee53d0079a39fedd93ceaf07ca125a2d4ad82f7f.html',
'html/js/troy-hunt_19d96f28a57ce22a049da0a94261b7190aa1410ff1c0403f5b0ac8260ed39301.js',
'css/troy-hunt.css-postbuild_ad3a74cecf9176844bca43ec16565477b7d3d1453f9c5fd6dbe27e5b1a96280c.css',
'js/ui/reportAbuse_f8d99c6be6361fcc455bfd58637b0007f122bd1eae0f2dd0e299fd7cd9379742.js',
'css/folder-link.css-postbuild_748bdeb3a219c7381accfdf10545c5fd554ee2ddd17a2d2478d4112215cd1d0f.css',
'js/time_checker_39c5b115b88f9e0d63371d028e11082a7113eb35abc17c9a7b00a00fd96b8aa9.js',
'js/filerequest_281166018a2f08a844c16b34a1a6077997938376e7714fd0b8428d52073d412b.js',
'js/filerequest_upload_1b295772bba575854002a647f841094fdb3b5940fea51e24f70402d287d163fd.js',
'js/vendor/docx-preview_68717acbd58970a0bdb7a2e816e02c45e7530437ed8c6ff809bce1d459cb463a.js',
'js/ui/docx.viewer_701c9d2f4ca5ea28a4f32c107ffc6e278ea7fe29b7d5495a5cf656f724e79781.js',
'html/docx.viewer.html-postbuild_1e30475878ae78c8fdf7e93ced5e0473b3801346ea345270894c98230d4e2a52.html',
'css/docx.viewer.css-postbuild_df5fa940f8812789f201c8420634b7749e571484c5fae8cb20735583dacc2f39.css',
'js/webgl-group1_4b1bd6ffe82e026ab73cd0f6fecaec1d82eaecc39f97295e76e236bb450c4876.js',
'js/chat-group1_a36b69b69831b2dca8396888d1d5795d9a983aa02ae5f2c76782732f5f809922.js',
'js/chat-group2_dfe2c8e97238260a42551d3e1023befd4317f8ced700b5104771dfd5a3ecaf87.js',
'js/chat-group3_dd855918764edee672973dd0347ce477a2370e824e8e8dd00d4d9c61012f2771.js',
'js/chat-group4_956c4f965c67445ca11416ce67203ea5efe38069ad46fa9e852c0fa50f105d68.js',
'js/chat-group5_3ab9e61000327daecf1e4eb367f599534c047753b00cc7eb44a231e70e641caf.js',
'js/chat-group6_4e2ad9bb803612891a926cbd35c3819c40a65f2073ba2a98af0e710abe0c433d.js',
'css/chat-group1_700fcb21477039250a1eb0b1031dab4a02675a2083a193218e1f4ff621a70ed5.css'
];


/**
 * Check that the hexadecimal hash of the file from the worker thread matches the correct one created at deployment time
 * @param {String} hashFromWorker A hexadecimal string
 * @param {String} fileName The file name with the SHA-256 hash appended at the end
 * @returns {Boolean}
 */
function compareHashes(hashFromWorker, fileName) {

    // Retrieve the SHA-256 hash that was appended to the file name
    var startOfHash = fileName.lastIndexOf('_') + 1;
    var endOfHash = fileName.lastIndexOf('.');
    var hashFromDeployment = fileName.substring(startOfHash, endOfHash);

    if (hashFromWorker === hashFromDeployment) {
        return true;
    }
    else {
        console.error('Hash mismatch on file: ' + fileName + '. Hash from worker thread: ' + hashFromWorker + ' Hash from deployment script: ' + hashFromDeployment);
        return false;
    }
}

function init_storage ( storage ) {
    var v = storage.v || 0,
        d = storage.d,
        dd = storage.dd,
        sp = storage.staticpath;

    // Graceful storage version upgrade
    if ( v == 0 ) {
        // array of limbs -> mpi-encoded number
        function b2mpi (b) {
            var bs = 28, bm = (1 << bs) - 1, bn = 1, bc = 0, r = [0], rb = 1, rn = 0;
            var bits = b.length * bs;
            var n, rr='';

            for ( n = 0; n < bits; n++ ) {
                if ( b[bc] & bn ) r[rn] |= rb;
                if ( (rb <<= 1) > 255 ) rb = 1, r[++rn] = 0;
                if ( (bn <<= 1) > bm ) bn = 1, bc++;
            }

            while ( rn && r[rn] == 0 ) rn--;

            bn = 256;
            for ( bits = 8; bits > 0; bits-- ) if ( r[rn] & (bn >>= 1) ) break;
            bits += rn * 8;

            rr += String.fromCharCode(bits/256)+String.fromCharCode(bits%256);
            if ( bits ) for ( n = rn; n >= 0; n-- ) rr += String.fromCharCode(r[n]);
            return rr;
        }

        if ( storage.privk && storage.privk.substr(0, 1) == "[") { /* is json serialized array which need to be migrated */
            // Upgrade key format
            try {
                var privk = JSON.parse(storage.privk), str = '';
                for ( var i = 0; i < privk.length; i++ ) str += b2mpi( privk[i] );
                storage.privk = btoa(str).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
                v++;
            }
            catch ( e ) {
                console.error("Could not migrate storage - priv key could not be converted to the new format: ", e);
            }
        }
        else {
            v++;
        }

        storage.v = v;
    }
    // if ( v == 1 ) { ... }
    // if ( v == 2 ) { ... }
    // ... and so on

    // Or upgrade hard when graceful method isn't provided
    if ( v != storage_version ) {
        storage.clear();
        storage.v = storage_version;
        if ( d ) storage.d = d;
        if ( dd ) storage.dd = dd;
        if ( sp ) storage.staticpath = sp;
    }

    return storage;
}

if (typeof XDomainRequest !== 'undefined' && typeof ArrayBuffer === 'undefined') {
    window.getxhr = function _getxhr() {
        return new XDomainRequest();
    };
}
else {
    window.getxhr = function _getxhr() {
        return new XMLHttpRequest();
    };
}

/**
 * Logs errors when loading/verifying files. This will log once for a file load error on the regular static server
 * (after x retries of any file), log once for any error on the default static server (after x retries per file) and
 * log once for any file corruption errors.
 * @param {Number} errorType The error code (see load_error_types object)
 * @param {String} filename The file that failed to load
 * @param {String} staticPathToLog The static path to be logged
 */
function logStaticServerFailure(errorType, filename, staticPathToLog) {

    'use strict';

    // Don't log if the build is older than 10 days
    if (window.buildOlderThan10Days) {
        return false;
    }

    // If file loading error
    if (errorType === load_error_types.file_load_error) {

        // If using the default static path
        if (staticpath === defaultStaticPath) {

            // If already logged that the default static server failed, exit
            if (staticServerLoading.failureLoggedDefault) {
                return false;
            }

            // Otherwise set flag to not log it again
            staticServerLoading.failureLoggedDefault = true;
        }
        else {
            // If already logged that the regular static server failed, exit
            if (staticServerLoading.failureLoggedOriginal) {
                return false;
            }

            staticServerLoading.failureLoggedOriginal = true;
        }
    }

    // If file corruption (hash mismatch) error
    else if (errorType === load_error_types.file_corrupt) {

        // If already logged that there was a corrupt file error, exit
        if (staticServerLoading.failureLoggedCorrupt) {
            return false;
        }

        staticServerLoading.failureLoggedCorrupt = true;
    }
    else {
        // Otherwise if already logged some other error, exit
        if (window.log99723) {
            return false;
        }

        if (typeof errorType !== 'number') {
            errorType = String(errorType).split('\n').slice(0, 3).join(' ').substr(0, 96);
        }
        window.log99723 = true;
    }

    // Send log. NB: Not using staticpath global here, in case it changed in the main thread
    // and due to the onIdle timeout below it hasn't actually sent the log yet
    onIdle(function() {
        var xhr = getxhr();
        xhr.open('POST', apipath + 'cs?id=0' + mega.urlParams(), true);
        xhr.send(
            JSON.stringify(
                [{ a: 'log', e: 99723, m: JSON.stringify([1, errorType, filename, staticPathToLog]) }]
            )
        );
    });
}

/**
 * Show a site load error alert with OK and Cancel buttons
 * @param {Number|Error|String} error The type of error e.g. loadErrorType.file_corrupt/file_load_error, or an
 *                                    Error/exception, or an error message to be displayed.
 * @param {String} filename The file that failed to load
 */
function siteLoadError(error, filename) {

    'use strict';

    logStaticServerFailure(error, filename, staticpath);

    var message = ['MEGA failed to load because '];
    if (location.host !== 'mega.nz') {
        message[0] += '..';
    }

    if (error === load_error_types.file_corrupt) {
        message.push('The file "' + filename + '" is corrupt.');
    }
    else if (error === load_error_types.file_load_error) {
        message.push('The file "' + filename + '" could not be loaded.');
    }
    else {
        message.push('Filename: ' + filename + "\nException: " + error);

        var stack = String(error.stack).split('\n').splice(1, 4).join('\n');
        if (stack) {
            message.push('Stack trace: ' + stack);
        }
    }

    message.push('Please click OK to refresh and try again.');
    message.push("If the problem persists, please try disabling all third-party browser extensions, " +
                 "update your browser and MEGA browser extension to the latest version. " +
                 "If that does not help, contact support@mega.nz");

    message.push('BrowserID: ' + (typeof mozBrowserID !== 'undefined' ? mozBrowserID : ua) + '\n' +
                 'Static server: ' + staticpath + '\n' +
                 'Flipped to default static: ' + (staticServerLoading.flippedToDefault ? 'yes' : 'no') + '\n' +
                 'Date/time: ' + new Date().toISOString());

    message = message.join("\n\n");
    console.error(message);
    contenterror = 1;

    if (window.sleTick) {
        return;
    }

    // Give time for window.onerror to fire 'cd2' before showing the blocking confirm-dialog
    window.sleTick = setTimeout(function() {

        // Show confirm dialog, if 'OK' is pressed it will reload
        if (confirm(message) === true) {

            // Force EU static on page reload
            sessionStorage.skipGeoStaticPath = '1';
            location.reload(true);
        }

        window.sleTick = null;

    }, 2e3);
}

// Add manifest.json so this can be used on latest browsers.
var tag=document.createElement('link');
tag.rel = "manifest";
tag.href = "/manifest.json";
document.getElementsByTagName('head')[0].appendChild(tag);

if (m || (typeof localStorage !== 'undefined' && localStorage.mobile))
{
    var tag=document.createElement('meta');
    tag.name = "viewport";
    tag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('meta');
    tag.name = "apple-mobile-web-app-capable";
    tag.content = "yes";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('meta');
    tag.name = "apple-mobile-web-app-status-bar-style";
    tag.content = "black";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('link');
    tag.rel = "apple-touch-icon-precomposed";
    tag.sizes = "144x144";
    tag.href = staticpath + "images/favicons/apple-touch-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('link');
    tag.rel = "apple-touch-icon-precomposed";
    tag.sizes = "114x114";
    tag.href = staticpath + "images/favicons/apple-touch-icon-114x114.png";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('link');
    tag.rel = "apple-touch-icon-precomposed";
    tag.sizes = "72x72";
    tag.href = staticpath + "images/favicons/apple-touch-icon-72x72.png";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('link');
    tag.rel = "apple-touch-icon-precomposed";
    tag.href = staticpath + "images/favicons/apple-touch-icon-57x57.png";
    document.getElementsByTagName('head')[0].appendChild(tag);
    var tag=document.createElement('link');
    tag.rel = "shortcut icon";
    tag.type = "image/vnd.microsoft.icon";
    tag.href = "https://mega.nz/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(tag);
    m=true;
}

if (is_ios) {
    tmp = document.querySelector('meta[name="apple-itunes-app"]');
    if (tmp) {
        tmp.setAttribute('content',
            'app-id=706857885, app-argument=mega://#' + page);
    }

    // http://whatsmyuseragent.com/Devices/iPhone-User-Agent-Strings
    // http://www.enterpriseios.com/wiki/Complete_List_of_iOS_User_Agent_Strings
    tmp = ua.match(/(?:iphone|cpu) os (\d+)[\._](\d+)/);
    if (tmp) {
        var rev = tmp.pop();
        tmp = tmp.pop();

        console.log('Found iOS ' + tmp + '.' + rev);

        is_ios = parseInt(tmp);
        if (!is_ios) {
            // Huh?
            is_ios = true;
        }
    }
    tmp = undefined;

    if (m) {
        // Prevent Safari's copy&paste bug..
        window.onhashchange = function() {
            location.reload();
        };
    }
}

// Determine whether to show the legacy mobile page for these links so that they redirect back to the app
var showLegacyMobilePage = m && (
    page.substr(0, 9) === 'newsignup'
    || page.substr(0, 7) === 'account'
    || is_old_windows_phone && page.substr(0, 7) === 'confirm'
);

/**
 * Some legacy secureboot mobile code that has been refactored to keep just the blog working and also redirect to the
 * app if any cancel, verify, fm/ipc, newsignup, recover or account links are clicked in the app
 * because the new mobile site is not designed for those yet.
 */
if (showLegacyMobilePage) {

    var app;
    var android;
    var intent;
    var link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.type = 'text/css';
    link.href = staticpath + 'css/mobile-app-old.css';
    document.head.appendChild(link);

    // AMO: Markup should not be passed to `innerHTML` dynamically. -- This isnt reached for the extension, anyway
    // jscs:disable
    // eslint-disable-next-line no-unsanitized/property, no-restricted-properties
    document.body.innerHTML = '<div class="bottom-page scroll-block selectable-txt"><div class="main-content-block">'
                            + '<div class="main-centered-bl">'
                            + '<div class="main-logo"></div><div class="main-head-txt" id="m_title"></div>'
                            + '<div class="main-head-txt" id="m_desc"></div><br /><br />'
                            + '<a href="" class="main-button" id="m_appbtn"></a><div class="main-social hidden">'
                            + '<a href="https://www.facebook.com/MEGAprivacy" class="main-social-icon facebook"></a>'
                            + '<a href="https://www.twitter.com/MEGAprivacy" class="main-social-icon twitter"></a>'
                            + '<div class="clear"></div></div></div> </div><div class="scrolling-content">'
                            + '<div class="mid-logo"></div><div class="mid-gray-block">MEGA provides free cloud '
                            + 'storage with convenient and powerful always-on privacy</div>'
                            + '<div class="scrolling-block-icon encription"></div><div class="scrolling-block-header">'
                            + 'End-to-end encryption</div><div class="scrolling-block-txt">Unlike other cloud storage '
                            + 'providers, your data is encrypted & decrypted during transfer by your client devices '
                            + 'only and never by us.</div><div class="scrolling-block-icon access"></div>'
                            + '<div class="scrolling-block-header">Secure Global Access</div>'
                            + '<div class="scrolling-block-txt">Your data is accessible any time, from any device, '
                            + 'anywhere. Only you control the keys to your files.</div>'
                            + '<div class="scrolling-block-icon colaboration"></div>'
                            + '<div class="scrolling-block-header">Secure Collaboration</div>'
                            + '<div class="scrolling-block-txt">Share folders with your contacts and see their '
                            + 'updates in real time. Online collaboration has never been more private and secure.'
                            + '</div><div class="bottom-menu full-version"><div class="copyright-txt">Mega Limited '
                            + new Date().getFullYear() + '</div><div class="language-block"></div><div class="clear">'
                            + '</div><iframe src="" width="1" height="1" frameborder="0" style="width:1px; '
                            + 'height:1px; border:none;" id="m_iframe"></iframe></div></div></div>';

    if (is_windowsphone) {
        app = 'zune://navigate/?phoneappID=1b70a4ef-8b9c-4058-adca-3b9ac8cc194a';
        document.body.className = 'wp full-mode supported';
    }
    else if (is_android) {
        app = 'https://play.google.com/store/apps/details?id=mega.privacy.android.app&referrer=meganzsb';
        if (is_huawei) {
            app = 'https://appgallery.huawei.com/#/app/C102009895';
        }
        document.body.className = 'android full-mode supported';
        android = 1;
        var ver = ua.match(/android (\d+)\.(\d+)/);
        if (ver) {
            var rev = ver.pop();
            ver = ver.pop();
            // Check for Android 2.3+
            if (ver > 2 || (ver === 2 && rev > 3)) {
                intent = 'intent://#' + page + '/#Intent;scheme=mega;package=mega.privacy.android.app;end';
            }
        }
        if (intent) {
            if (is_huawei) {
                intent = intent.replace('.app;', '.app.huawei;');
            }
            document.location = intent;
        }
    }
    else if (ua.indexOf('bb10') > -1) {
        app = 'http://appworld.blackberry.com/webstore/content/46810890/';
        document.body.className = 'blackberry full-mode supported';
    }
    else if (is_ios) {
        app = 'https://itunes.apple.com/app/mega/id706857885';
        document.body.className = 'ios full-mode supported';
    }
    else {
        document.body.className = 'another-os full-mode unsupported';
    }
    document.getElementById('m_title').innerHTML = 'This link should be opened in the MEGA app.';

    if (app) {
        document.getElementById('m_appbtn').href = app;
        document.getElementById('m_desc').innerHTML = 'Otherwise, you can also open the link on a '
                                                    + 'desktop/laptop browser, or download the MEGA app.';
    }
    else {
        document.getElementById('m_desc').innerHTML = 'Otherwise you can also open the link on a '
                                                    + 'desktop/laptop browser.';
    }

    var prechar = '#';
    if (ua.indexOf('windows phone') > -1) {
        prechar = '';
    }
    if (ua.indexOf('chrome') > -1) {
        window.location = 'mega://' + prechar + page;
    }
    else if (is_ios > 8) {
        setTimeout(function() {
            var text = 'This link should be opened in the MEGA app. '
                + 'Click OK if you already have the MEGA app installed';
            if (confirm(text)) {
                document.location = 'mega://#' + page;
            }
        }, 1500);
    }
    else {
        document.getElementById('m_iframe').src = 'mega://' + prechar + page;
    }
    if (intent) {
        document.getElementById('m_title').innerHTML
            += '<br/><em>If you already have the app installed, <a href="' + intent + '">click here!</a></em>';
    }
}
else if (!browserUpdate) {
    d = window.d || 0;
    jj = window.jj || 0;

    // Do not report exceptions if this build is older than 10 days
    var exTimeLeft = (is_extension || !nocontentcheck) && (buildVersion.timestamp + 10 * 86400) * 1000 > Date.now();
    window.buildOlderThan10Days = !exTimeLeft;

    // Override to see logs being sent
    if (localStorage.getItem('sendStaticFailureLogs') !== null) {
        window.buildOlderThan10Days = false;
    }

    if (!d && exTimeLeft && is_livesite)
    {
        var __cdumps = [], __cd_t;
        window.onerror = function __MEGAExceptionHandler(msg, url, ln, cn, errobj)
        {
            function mTrim(s)
            {
                return String(s)
                    .replace(/resource:.+->\s/,'')
                    .replace(/blob:[^:\s]+/, '..')
                    .replace(/([^'])\w+:\/\/[^\s:]+/, '$1..')
                    .replace(/\.\.:\/\/[^:\s]+/, '..')
                    .replace('chrome://mega/content','..')
                    .replace(/file:.+extensions/,'..fx')
                    .replace(/(?: line \d+ > eval)+/g,' >.eval')
                    .trim();
            }
            if (__cdumps.length > 3) return false;

            if (url && ln < 2) {
                console.debug([errobj || msg]);
                return;
            }

            var expectedSourceOrigin = url || ln > 10;
            if (url === '@srvlog') {
                url = '';
            }

            var dump = {
                l: ln,
                f: mTrim(url),
                m: mTrim(msg)
                    .replace(/'[a-z]+:\/+[^']+(?:'|$)/gi, function(url) {
                        url = url.substr(1);
                        if (url[url.length - 1] === "'") {
                            url = url.substr(0, url.length - 1);
                        }
                        var a = document.createElement('a');
                        a.href = url;
                        return "'" + (a.origin !== 'null' && a.origin
                            || (a.protocol + '//' + a.hostname)) + "...'";
                    })
                    .replace(/(Cannot read property )('[\w-]{8}')/, "$1'<h>?'")
                    .replace(/(Access to '\.\.).*(' from script denied)/, '$1$2')
                    .replace(/gfs\w+\.userstorage/, 'gfs...userstorage')
                    .replace(/^Uncaught\W*(?:exception\W*)?/i, ''),
            }, cc;
            var sbid = +(''+(document.querySelector('script[src*="secureboot"]')||{}).src).split('=').pop()|0;

            if (~dump.m.indexOf('[[:i]]')) {
                return false;
            }

            if (dump.m.indexOf("Failed to construct 'Worker'") !== -1) {
                errobj = {};
                dump.l = ln = 1; // enforce deduplication..
            }

            if (~dump.m.indexOf("\n")) {
                var lns = dump.m.split(/\r?\n/).map(String.trim).filter(String);

                if (lns.length > 6) {
                    dump.m = [].concat(lns.slice(0,2), "[..!]", lns.slice(-2)).join(" ");
                }
            }
            dump.m = (
                is_mobile ? '[mobile] ' :
                    is_embed ? '[embed] ' :
                        is_drop ? '[drop] ' : ''
            ) + dump.m.replace(/\s+/g, ' ');

            if (expectedSourceOrigin && !window.u_checked) {
                // Alert the user if there was an uncaught exception while
                // loading the site, this should only happen on some fancy
                // browsers other than what we use during development, and
                // hopefully they'll report it back to us for troubleshoot
                return siteLoadError(dump.m, url + '^~' + ln);
            }

            if (/userscript|user\.js|EvalError/.test(dump.m + url + (errobj && errobj.stack))
                || dump.m.indexOf('Permission denied to access property') !== -1
                || dump.m.indexOf('Cannot redefine property') !== -1
                || dump.m.indexOf("evaluating 'r(a,c)'") !== -1
                || dump.m.indexOf('Error: hookFull') !== -1) {

                // Some third party extension is injecting bogus script(s)...
                console.warn('Your account is only as secure as your computer...');
                console.warn('Check your installed extensions for the one injecting bogus scripts on this page...');
                console.error(dump.m, dump, errobj);
                return false;
            }

            if (!expectedSourceOrigin) {
                window.onerror = null;
                console.error(dump.m, dump, errobj);

                if (!/SyntaxError|Script\serror/.test(dump.m)) {
                    onIdle(function() {
                        var xhr = getxhr();
                        xhr.open('POST', apipath + 'cs?id=0' + mega.urlParams(), true);
                        xhr.send(
                            JSON.stringify(
                                [{a: 'log', e: 99806, m: JSON.stringify([1, dump.m, url + ':' + ln])}]
                            )
                        );
                    });
                }
                return;
            }

            var version = buildVersion.website;

            if (is_extension) {
                if (is_chrome_firefox || is_firefox_web_ext) {
                    version = buildVersion.firefox;
                }
                else if (mega.chrome) {
                    version = buildVersion.chrome;
                }
            }

            if (errobj)
            {
                if (errobj.udata) dump.d = errobj.udata;
                if (errobj.stack)
                {
                    var maxStackLines = 15;
                    var omsg = String(msg).trim();
                    var re = RegExp(
                        omsg.substr(0, 70)
                        .replace(/^\w+:\s/, '')
                        .replace(/([^\w])/g, '\\$1')
                        + '[^\r\n]+'
                    );

                    dump.s = String(errobj.stack)
                        .replace(omsg, '').replace(re, '')
                        .split("\n").map(mTrim)
                        .filter(function(s, idx, a) {
                            return s.length && a[idx - 1] !== s;
                        });

                    for (var idx = 1; idx < dump.s.length; idx++) {
                        var s = dump.s[idx];

                        if (s.indexOf('@resource:') > 0 || s.indexOf('@jar:') > 0) {
                            maxStackLines = idx;
                            break;
                        }
                    }

                    if (dump.m.indexOf(':skull:') > 0) {
                        maxStackLines = 50;
                    }

                    dump.s = dump.s.splice(0, maxStackLines).join("\n");

                    if (dump.s.indexOf('Unknown script code:') !== -1
                        || dump.s.indexOf('Function code:') !== -1
                        || dump.s.indexOf('(eval code:') !== -1
                        || dump.s.indexOf('(unknown source)') !== -1
                        || /<anonymous>:\d+:/.test(dump.s)) {

                        console.warn('Got uncaught exception from unknown resource,'
                            + ' your MEGA account might be compromised.');
                        console.error(msg, errobj, errobj && errobj.stack, url, ln);
                        return false;
                    }
                }

                if (typeof eventlog === 'function' && !errobj.udata && /\w/.test(msg || '')) {
                    eventlog(99702, JSON.stringify([version, ln, msg]), true);
                }
            }
            if (cn) dump.c = cn;

            if (/Access to (?:the script at )?'.*(?:' from script|is) denied/.test(dump.m)) {
                console.error(dump.m, dump);
                return false;
            }

            if (ln == 0 && !dump.s)
            {
                if (dump.m.toLowerCase().indexOf('out of memory') != -1) dump.m = '!Fatal! Out Of Memory.';
                else dump.m = dump.m.replace(/[^\s\w]/gi,'') || ('[!] ' + msg);
            }

            try
            {
                var crashes = JSON.parse(localStorage.crashes || '{}');
                var checksum = wchecksum(JSON.stringify(dump), 0x4ef5391a);

                if (crashes.v != sbid) crashes = { v : sbid };

                if (crashes[checksum])
                {
                    // Reported less than 10 days ago?
                    if (Date.now() - crashes[checksum] < 864000000) return false;
                }
                dump.x = checksum;
                crashes[checksum] = Date.now();
                localStorage.crashes = JSON.stringify(crashes);
                cc = Object.keys(crashes).length;
            }
            catch(e) {
                delete localStorage.crashes;
            }

            __cdumps.push(dump);
            if (__cd_t) clearTimeout(__cd_t);
            var report = tryCatch(function()
            {
                function ctx(id)
                {
                    return {
                        callback : function(res)
                        {
                            if (res === EOVERQUOTA)
                            {
                                __cdumps = new Array(4);
                                if (__cd_t) clearTimeout(__cd_t);

                                if (id)
                                {
                                    var crashes = JSON.parse(localStorage.crashes || '{}');
                                    delete crashes[id];
                                    localStorage.crashes = JSON.stringify(crashes);
                                }
                            }
                        }
                    };
                }
                var ids = [], uds = [], r = 1;
                for (var i in __cdumps)
                {
                    var dump = __cdumps[i];

                    if (dump.x) { ids.push(dump.x); delete dump.x; }
                    if (dump.d) { uds.push(dump.d); delete dump.d; }
                    if (dump.l < 0) r = 0;
                }

                var report = {};
                report.ua = navigator.userAgent;
                report.io = window.dlMethod && dlMethod.name;
                report.sb = sbid;
                report.tp = typeof $ !== 'undefined' && $.transferprogress;
                report.id = ids.join(",");
                report.ud = uds;
                report.cc = cc;

                if (is_chrome_firefox)
                {
                    report.mo = mozBrowserID + '::' + is_chrome_firefox + '::' + mozMEGAExtensionVersion;
                }
                report = JSON.stringify(r? report:{});

                for (var i = __cdumps.length; i--;)
                {
                    if (!/\w/.test(__cdumps[i].m || '')) continue;

                    api_req({
                        a: 'cd2',
                        c: JSON.stringify(__cdumps[i]),
                        // v: report,
                        // s: window.location.host,
                        t: version
                    }, ctx(ids[i]));
                }
                __cd_t = 0;
                __cdumps = [];
            });
            __cd_t = setTimeout(function() {
                report();
            }, 3000);

            return false;
        };
    }

    /**
     * Detects which language the user currently has set in their browser
     * @returns {String} Returns the two letter language code e.g. 'en', 'es' etc
     */
    var detectLang = function() {
        'use strict';

        // Get the preferred language in their browser
        var userLangs, userLang, ourLangs, k, v, j, i, u;

        // Otherwise get the user's preferred language in their browser settings
        userLangs = navigator.languages || navigator.language || navigator.userLanguage;

        // If a language can't be detected, default to English
        if (!userLangs) {
            return 'en';
        }

        if (!Array.isArray(userLangs)) {
            userLangs = [userLangs];
        }

        for (u = 0; u < userLangs.length; u++) {

            // Lowercase it
            userLang = String(userLangs[u]).toLowerCase();

            // Language mapping handling.
            ourLangs = Object.keys(languages);

            // Match on language code variants e.g. 'pt-br' returns 'br'
            for (i = ourLangs.length; i--;) {
                k = ourLangs[i];
                v = languages[k][0];

                for (j = v.length; j--;) {
                    if (v[j] === userLang || v[j] === userLang.substr(0, 3)) {
                        return k;
                    }
                }
            }

            // If no exact match supported, normalise to base language code e.g. en-gb, en-us, en-ca returns 'en'
            for (i = ourLangs.length; i--;) {
                k = ourLangs[i];
                v = languages[k][0];

                for (j = v.length; j--;) {
                    if (v[j].substr(0, 3) === userLang.substr(0, 3)) {
                        return k;
                    }
                }
            }
        }

        // Default to English
        return 'en';
    };

    /**
     * Gets the file path for a language file
     * @param {String} language
     * @returns {String}
     */
    var getLanguageFilePath = function(language) {
        'use strict';

        // If the sh1 (filename with hashes) array has been created from deploy script
        if (typeof sh1 === 'undefined') {
            // Otherwise return the filename.json when in Development
            return 'lang/' + language + '.json';
        }

        var enLang;
        for (var i = 0, length = sh1.length; i < length; i++) {
            var filePath = sh1[i];

            // If the language e.g. 'en' matches part of the filename from the deploy script e.g.
            // 'lang/en_0a8e1591149050ef1884b0c4abfbbeb759bbe9eaf062fa54e5b856fdb78e1eb3.json'
            if (filePath.indexOf('lang/' + language) > -1) {
                return filePath;
            }

            // Catch the English language file.
            if (filePath.indexOf('lang/en_') > -1) {
                enLang = filePath;
            }
        }

        console.warn('Failed to find language file for %s...', language);
        return enLang;
    };

    tryCatch(function() {
        if (!is_mobile && 'serviceWorker' in navigator) {
            // The service worker isn't listened to until much later so just queue any messages for now.
            var handler = function(ev) {
                mega.pendingServiceWorkerMsgs.push({data: ev.data});
            };
            navigator.serviceWorker.addEventListener('message', handler);

            mega.pendingServiceWorkerMsgs = [];
            mega.pendingServiceWorkerHandler = handler;
        }
    })();


    var lang = sessionStorage.lang || localStorage.lang;
    var jsl = [];

    // If they've already selected a language, use that
    if (lang && !languages[lang]) {
        console.warn('Language "%s" is no longer available...', lang);
        delete localStorage.lang;
        delete sessionStorage.lang;
        lang = 0;
    }
    lang = lang || detectLang();

    // Get the language file path e.g. lang/en.json or 'lang/en_7a8e15911490...f1878e1eb3.json'
    var langFilepath = getLanguageFilePath(lang);
    jsl.push({f:langFilepath, n: 'lang', j:3});
    /* Bundle Includes:
     *   sjcl.js
     *   nodedec.js
     *   js/vendor/jquery.js
     *   js/jquery.protect.js
     */
    jsl.push({f:'js/mega-1_b2b322241902d729911f514f678ed7ba7fdd827fc7a83fd336c004535111c645.js', n: 'js-mega-1-js', j: 1, w: 23});
    /* Bundle Includes:
     *   js/vendor/jquery-ui.js
     *   js/vendor/jquery-ui-touch.js
     *   js/vendor/jquery.mousewheel.js
     *   js/scrolling.utils.js
     *   js/jquery.misc.js
     *   js/vendor/megaLogger.js
     *   js/vendor/jquery.fullscreen.js
     *   js/jquery-ui.extra.js
     *   js/utils/polyfills.js
     *   js/utils/browser.js
     *   js/utils/clipboard.js
     *   js/utils/conv.js
     *   js/utils/crypt.js
     *   js/utils/csp.js
     */
    jsl.push({f:'js/mega-2_f35b77f892e6e20636cb4ea6268b4be7ef353923421371bad881c6f119981f7c.js', n: 'js-mega-2-js', j: 1, w: 30});

    /* Bundle Includes:
     *   js/utils/debug.js
     *   js/utils/dom.js
     *   js/utils/events.js
     *   js/utils/icu.js
     *   js/keymgr.js
     *   js/utils/locale.js
     *   js/utils/media.js
     *   js/utils/network.js
     *   js/utils/splitter.js
     *   js/utils/test.js
     *   js/utils/timers.js
     *   js/utils/watchdog.js
     *   js/utils/workers.js
     *   js/utils/trans.js
     *   js/utils/webgl.js
     *   js/utils/sets.js
     */
    jsl.push({f:'js/mega-3_c4a1fef4b7a76f4256c7d907b6d020a438b47badd142316b85b8dc7773c648e9.js', n: 'js-mega-3-js', j: 1, w: 27});

    // Sets and elements

    /* Bundle Includes:
     *   js/vendor/dexie.js
     *   js/functions.js
     *   js/config.js
     *   js/crypto.js
     *   js/account.js
     *   js/security.js
     */
    jsl.push({f:'js/mega-4_84c3896274a1a8dcc49dd380230dca44053dff0b3a5dd4c51cc1532941b83b52.js', n: 'js-mega-4-js', j: 1, w: 29});
    /* Bundle Includes:
     *   js/two-factor-auth.js
     *   js/attr.js
     *   js/mega.js
     *   js/megaPromise.js
     *   js/reqstatclient.js
     *   js/mDB.js
     *   js/mouse.js
     *   js/datastructs.js
     *   js/idbkvstorage.js
     *   js/sharedlocalkvstorage.js
     *   js/tlvstore.js
     *   js/vendor/jsbn.js
     *   js/vendor/jsbn2.js
     */
    jsl.push({f:'js/mega-5_8b7664ce0c1f26a3feb971e08c13eeae4db20313d99e2f21bcec0d9a97fc2c51.js', n: 'js-mega-5-js', j: 1, w: 29});


    /* Bundle Includes:
     *   js/vendor/nacl-fast.js
     *   js/authring.js
     *   html/js/login.js
     *   js/ui/export.js
     *   html/js/key.js
     *   js/ui/simpletip.js
     *   js/useravatar.js
     *   js/cms.js
     *   html/js/bottompage.js
     *   js/filedrag.js
     *   js/thumbnail.js
     *   js/vendor/exif.js
     *   js/vendor/smartcrop.js
     *   js/vendor/jquery.qrcode.js
     *   js/vendor/qrcode.js
     *   js/ui/password-revert.js
     *   js/ui/publicServiceAnnouncement.js
     *   js/ui/megaInputs.js
     *   js/ui/megaInputs-underlinedText.js
     *   js/ui/megaInputs-currencyField.js
     *   html/js/developersettings.js
     *   html/js/repay.js
     */
    jsl.push({f:'js/mega-6_62cc707e81d28e1e755b5726fb2e7b497a33063b98842b22b9b48218f65fabc6.js', n: 'js-mega-6-js', j: 1, w: 29});



    /* Bundle Includes:
     *   css/avatars.css
     *   css/fonts.css
     *   css/bottom-pages.css
     *   css/bottom-menu.css
     *   css/business.css
     *   css/pro.css
     *   css/planpricing.css
     *   css/startpage.css
     *   css/icons.css
     *   css/spinners.css
     *   css/business-register.css
     *   css/psa.css
     *   css/features.css
     *   css/dialogs-common.css
     *   css/dialogs/cookie-dialog.css
     *   css/jquery-ui.extra.css
     */
    jsl.push({f:'css/mega-1_d5aa2c92f86887a5185a82d1c422512eb9037d4b1fe4294e8151fc67d1fe3503.css', n: 'css-mega-1-css', j: 2, w: 27});

    // Common desktop and mobile, bottom pages
    jsl.push({f:'html/templates_069e5da740545c9982aae09a6b370989987c534a15f413ce0767ffc908046c91.json', n: 'templates', j: 0, w: 43});
    /* Bundle Includes:
     *   js/ui/passwordReminderDialog.js
     *   js/metatags.js
     *   js/vendor/verge.js
     */
    jsl.push({f:'js/mega-7_d79bc997b93e25507c5264f05f027738a1d710d5da3931f12e92ebdd7857f5cd.js', n: 'js-mega-7-js', j: 1, w: 4});

    if (!is_mobile) {
    /* Bundle Includes:
     *   js/ui/nicknames.js
     *   js/jquery.tokeninput.js
     *   js/jquery.checkboxes.js
     *   js/vendor/notification.js
     *   js/vendor/moment.js
     *   js/vendor/perfect-scrollbar.js
     *   js/ui/megaRender.js
     *   js/ui/dialog.js
     *   js/ui/credentialsWarningDialog.js
     *   js/ui/loginRequiredDialog.js
     *   js/ui/registerDialog.js
     *   js/ui/keySignatureWarningDialog.js
     *   js/ui/feedbackDialog.js
     *   js/ui/languageDialog.js
     *   js/ui/alarm.js
     *   js/ui/toast.js
     *   js/ui/top-tooltip-login.js
     *   js/fm/transfer-progress-widget.js
     */
    jsl.push({f:'js/mega-8_d4848ab3b79f33083b6ea431c14b699d44b433f2ef0ae9fd044d7baa4476cec3.js', n: 'js-mega-8-js', j: 1, w: 29});

        // This is not used anymore, unless we process and store credit card details for renewals again
        // jsl.push({f:'js/paycrypt_5abbdad29bd037f47d9bc0a81bfdb161f85c6ebe99064ad973cb6d91507b0aac.js', n: 'paycrypt_js', j:1 });

        // Desktop notifications

        // Other

        // UI Elements

        // Bottom pages for desktop
        jsl.push({f:'css/bottom-pages-animations.css-postbuild_47f7d58d40f84e7fa878532d05a625c2b9700c9300276decec0cbc374c0a5644.css', n: 'bottom-pages-animations_css', j:2,w:5,c:1,d:1,cache:1});
    } // !is_mobile

    if (is_chrome_firefox && parseInt(Services.appinfo.version) > 27) {
        is_chrome_firefox |= 4;
        jsl.push({f:'js/transfers/meths/firefox-extension_9da3fc3e0d2df20cbf70feb5eb3028441afe1aa2258c214bdfbd709440748604.js', n: 'dl_firefox', j: 1, w: 3});
    }

    // TextEditor
    /* Bundle Includes:
     *   js/fm/fileTextEditor.js
     *   js/fm/textEditorUI.js
     *   js/transfers/xhr2.js
     *   js/transfers/queue.js
     *   js/transfers/utils.js
     *   js/transfers/meths/cache.js
     *   js/transfers/meths/flash.js
     *   js/transfers/meths/memory.js
     *   js/transfers/meths/filesystem.js
     *   js/transfers/downloader.js
     *   js/transfers/decrypter.js
     *   js/transfers/download2.js
     *   js/transfers/meths.js
     *   js/transfers/upload2.js
     *   js/transfers/reader.js
     *   js/transfers/zip64.js
     *   js/transfers/cloudraid.js
     *   js/vendor/int64.js
     *   index.js
     */
    jsl.push({f:'js/mega-9_79822905c3917faa95b3552050b128c2d8ce0c5073910a3c24685fc1d37e1574.js', n: 'js-mega-9-js', j: 1, w: 29});
    /* Bundle Includes:
     *   css/codemirror.css
     *   css/txteditor.css
     *   css/vars/theme.css
     *   css/switches.css
     *   css/sprites/fm-uni@uni.css
     *   css/sprites/fm-mono@mono.css
     *   css/sprites/fm-theme@dark.css
     *   css/sprites/fm-theme@light.css
     *   css/sprites/fm-illustrations.css
     *   css/mega-dialog.css
     *   css/vars/dialog.css
     *   css/vars/button.css
     *   css/radios.css
     *   css/mega-button.css
     *   css/checkboxes.css
     *   css/media-viewer.css
     */
    jsl.push({f:'css/mega-2_7034d3f384d7adf1c16f4c3442184ac5fd7896fa12d532d816b47e72a8fbe695.css', n: 'css-mega-2-css', j: 2, w: 12});

    // Transfers
    // jsl.push({f:'js/transfers/meths/mediasource_0b532510cdd027680f2ef433ae462aa55cfbb369b1214bcbbe3ed58d040d037b.js', n: 'dl_mediasource', j:1,w:3});

    // Everything else...

    /* Bundle Includes:
     *   js/filetypes.js
     *   js/fm/removenode.js
     *   js/fm/ufssizecache.js
     *   html/js/pro.js
     *   html/js/proplan.js
     *   html/js/planpricing.js
     *   html/js/propay.js
     *   html/js/propay-dialogs.js
     *   js/states-countries.js
     *   js/ui/miniui.js
     *   js/fm/achievements.js
     *   js/fm/fileversioning.js
     *   js/fm/fileconflict.js
     *   js/ui/gdpr-download.js
     */
    jsl.push({f:'js/mega-10_7c061de1b33396c74e9517c0a6cf0ef10b732c4415b6bbf733d09ac6e0854a09.js', n: 'js-mega-10-js', j: 1, w: 30});

    // Pro pages Step 1 (Pro plan) and Step 2 (Pro payment)

    /* Bundle Includes:
     *   html/js/registerb.js
     *   js/emailNotify.js
     *   js/ui/slideshow/file.js
     *   js/ui/slideshow/manager.js
     *   js/ui/slideshow/playlist.js
     *   js/ui/slideshow/step.js
     *   js/ui/slideshow/utils.js
     *   js/ui/slideshow/settings/base/options.js
     *   js/ui/slideshow/settings/base/switch.js
     *   js/ui/slideshow/settings/order.js
     *   js/ui/slideshow/settings/speed.js
     *   js/ui/slideshow/settings/repeat.js
     *   js/ui/slideshow/settings/sub.js
     *   js/ui/slideshow/settings/settingsManager.js
     *   js/ui/imagesViewer.js
     *   js/filerequest_common.js
     *   js/filerequest_components.js
     *   js/filerequest.js
     */
    jsl.push({f:'js/mega-11_2311a15a2c52aac33bd1c6266580d2c0c154d6126cdbd2dca0cf46f29f1ac976.js', n: 'js-mega-11-js', j: 1, w: 16});

    // Variables which can be used across all stylesheets

    // Sprites

    // Dialog templates

    // Inputs


    if (!is_mobile) {
    /* Bundle Includes:
     *   js/ui/theme.js
     *   js/ui/mcomponents/classes/MComponent.js
     *   js/ui/mcomponents/classes/MButton.js
     *   js/ui/mcomponents/classes/MContextMenu.js
     *   js/ui/mcomponents/classes/MDialog.js
     *   js/ui/mcomponents/classes/MEmptyPad.js
     *   js/ui/mcomponents/classes/MMenuSelect.js
     *   js/ui/mcomponents/classes/MMenuSelectItem.js
     *   js/ui/mcomponents/classes/MSidebarButton.js
     *   js/ui/mcomponents/classes/MTab.js
     *   js/ui/mcomponents/classes/MTabs.js
     *   js/vendor/megalist.js
     *   js/vendor/megaDynamicList.js
     *   js/fm/quickfinder.js
     *   js/fm/selectionManager2.js
     *   js/fm.js
     *   js/fm/backupsUI.js
     *   js/fm/dashboard.js
     *   js/fm/recents.js
     *   js/time_checker.js
     */
    jsl.push({f:'js/mega-12_de842ab2c10b0cbf929d8809841749c948a3c5d6a67a1051e8aa5e92dfe190a1.js', n: 'js-mega-12-js', j: 1, w: 25});

    /* Bundle Includes:
     *   css/buttons.css
     *   css/components.css
     *   css/ui/mcomponents.css
     *   css/style.css
     *   css/fm-lists.css
     *   css/grid-table.css
     *   css/tabs.css
     *   css/empty-pages.css
     *   css/gallery.css
     *   css/onboarding.css
     *   css/download.css
     *   css/user-card.css
     *   css/account.css
     *   css/banners.css
     *   css/dropdowns.css
     *   css/jq-ui-custom.css
     *   css/labels-and-filters.css
     *   css/dialogs.css
     */
    jsl.push({f:'css/mega-3_4fd56469efc589b22244491789ce59a9e9dfbb7a13e51490906e3ae33f894533.css', n: 'css-mega-3-css', j: 2, w: 41});

        // MComponents

    /* Bundle Includes:
     *   js/fm/account.js
     *   js/fm/account-change-password.js
     *   js/fm/account-change-email.js
     *   js/fm/dialogs.js
     *   js/fm/properties.js
     *   js/ui/dropdowns.js
     *   js/notify.js
     *   js/vendor/avatar.js
     *   js/fm/affiliate.js
     *   js/ui/contextMenu.js
     *   js/ui/searchbar.js
     *   js/ui/dragselect.js
     *   js/fm/gallery/helpers/GalleryTitleControl.js
     *   js/fm/gallery/helpers/GalleryEmptyBlock.js
     *   js/fm/gallery/helpers/GalleryEmptyPhotos.js
     *   js/fm/gallery/helpers/GalleryEmptyImages.js
     *   js/fm/gallery/helpers/GalleryEmptyVideos.js
     *   js/fm/gallery/helpers/GalleryEmptyFavourites.js
     *   js/fm/gallery/helpers/GalleryEmptyDiscovery.js
     */
    jsl.push({f:'js/mega-13_325443ff662856f1291056f82e6527ce1be8f6279ecfd42db242e4f53ec396b9.js', n: 'js-mega-13-js', j: 1, w: 30});


        // Gallery helpers

    /* Bundle Includes:
     *   js/fm/gallery/gallery.js
     *   js/fm/albums/Albums.js
     *   js/ui/onboarding.js
     *   js/ui/sms.js
     */
    jsl.push({f:'js/mega-14_c02d83f7b16be19c06650fa0ab52340bb80e3eb94225c63af956765a0ad4f912.js', n: 'js-mega-14-js', j: 1, w: 19});

        // Albums




    /* Bundle Includes:
     *   css/share-dialog.css
     *   css/filerequest.css
     *   css/popups.css
     *   css/data-blocks-view.css
     *   css/perfect-scrollbar.css
     *   css/recovery.css
     *   css/settings.css
     *   css/media-print.css
     *   css/animations.css
     *   css/affiliate-program.css
     *   css/backup-center.css
     *   css/top-menu.css
     *   css/context-menu.css
     *   css/tables.css
     *   css/recents.css
     *   css/transfer-widget.css
     *   css/components/fm-left-pane.css
     *   css/chat-bundle.css
     *   css/topbar.css
     */
    jsl.push({f:'css/mega-4_8322cc0b635360574c9ad3ee03e4b6aedee88491f37d7631ebec5ed5056164bc.css', n: 'css-mega-4-css', j: 2, w: 14});


        // CSS Revamp changes

        // `Meetings` UI styles

    } // !is_mobile

    // do not change the order...
    /* Bundle Includes:
     *   js/fm/filemanager.js
     *   js/fm/utils.js
     *   js/fm/megadata.js
     *   js/fm/megadata/account.js
     *   js/fm/megadata/avatars.js
     *   js/fm/megadata/contacts.js
     *   js/fm/megadata/filters.js
     *   js/fm/megadata/menus.js
     *   js/fm/megadata/nodes.js
     */
    jsl.push({f:'js/mega-15_fa6fde779f7ca1e54fced8796556376801d3202259c4031792775287e642f7da.js', n: 'js-mega-15-js', j: 1, w: 30});
    /* Bundle Includes:
     *   js/fm/megadata/openfolder.js
     *   js/fm/megadata/render.js
     *   js/fm/megadata/render-breadcrumbs.js
     *   js/fm/megadata/reset.js
     *   js/fm/megadata/shares.js
     *   js/fm/megadata/sort.js
     *   js/fm/megadata/transfers.js
     *   js/fm/megadata/tree.js
     *   html/js/megasync.js
     *   js/fm/linkinfohelper.js
     *   js/fm/affiliatedata.js
     *   js/fm/affiliateRedemption.js
     */
    jsl.push({f:'js/mega-16_cc5a6b7f7b91ee018d2e23dcf53ce35972cbd3ea6b83d4bbf2f3b2fba130a104.js', n: 'js-mega-16-js', j: 1, w: 18});

    if (localStorage.makeCache) {
        jsl.push({f:'makecache_dbb6cba999ac51c3b8057f1fe0ad23fdc5efaa16aa6e41b240125859adb71dda.js', n: 'makecache', j:1});
    }

    if (lang === 'ar' || lang === 'fa') {
        jsl.push({f:'css/lang_ar.css-postbuild_6fea78d408fa18e40493c60791806c7f65702fe1f1ed89ab3e35beae7cdbb3df.css', n: 'lang_arabic_css', j: 2, w: 30, c: 1, d: 1, m: 1});
    }
    else if (lang === 'th') {
        jsl.push({f:'css/lang_th.css-postbuild_0da390fa93a38fa492523d7d9d73d4795937b637ec97a214d6126c26e2b3ef90.css', n: 'lang_thai_css', j: 2, w: 30, c: 1, d: 1, m: 1});
    }
    else if (lang === 'vi') {
        jsl.push({f:'css/lang_vi.css-postbuild_60872e6770c4e3f61366d7461bae23c03c54a34a0d1f04e7dcaf0286e1c00ee8.css', n: 'lang_viet_css', j: 2, w: 30, c: 1, d: 1, m: 1});
    }

    // Load files common to all mobile pages
    if (is_mobile) {
    /* Bundle Includes:
     *   css/mobile.css
     *   css/mobile-help.css
     *   css/mobile-top-menu.css
     *   css/mobile-toast.css
     *   css/mobile-media-viewer.css
     */
    jsl.push({f:'css/mega-5_7e233d0e408bdcd7114d0e0b36fd1c764d1bc92a1cfe73da79ffc2ee81bacc87.css', n: 'css-mega-5-css', j: 2, w: 26});
    /* Bundle Includes:
     *   js/vendor/jquery.mobile.js
     *   js/mobile/mobile.js
     *   js/mobile/mobile.account.js
     *   js/mobile/mobile.account.cancel.js
     *   js/mobile/mobile.account.history.js
     *   js/mobile/mobile.account.paymentcard.js
     *   js/mobile/mobile.account.change-password.js
     *   js/mobile/mobile.account.change-email.js
     *   js/mobile/mobile.account.notifications.js
     *   js/mobile/mobile.account.file-management.js
     *   js/mobile/mobile.achieve.js
     *   js/mobile/mobile.achieve.how-it-works.js
     *   js/mobile/mobile.achieve.invites.js
     *   js/mobile/mobile.achieve.referrals.js
     *   js/mobile/mobile.affiliate.js
     *   js/mobile/mobile.backup.js
     *   js/mobile/mobile.cloud.js
     *   js/mobile/mobile.cloud.action-bar.js
     *   js/mobile/mobile.cloud.context-menu.js
     *   js/mobile/mobile.cloud.sort.js
     *   js/mobile/mobile.create-folder-overlay.js
     *   js/mobile/mobile.decryption-key-overlay.js
     *   js/mobile/mobile.decryption-password-overlay.js
     *   js/mobile/mobile.delete-overlay.js
     *   js/mobile/mobile.download-overlay.js
     *   js/mobile/mobile.chatlink.js
     *   js/mobile/mobile.language-menu.js
     *   js/mobile/mobile.link-overlay.js
     *   js/mobile/mobile.message-overlay.js
     *   js/mobile/mobile.not-found-overlay.js
     *   js/mobile/mobile.pro-signup-prompt.js
     *   js/mobile/mobile.propay.js
     *   js/mobile/mobile.recovery.js
     *   js/mobile/mobile.recovery.send-email.js
     *   js/mobile/mobile.recovery.from-email-link.js
     *   js/mobile/mobile.recovery.enter-key.js
     *   js/mobile/mobile.recovery.change-password.js
     *   js/mobile/mobile.register.js
     *   js/mobile/mobile.rename-overlay.js
     *   js/mobile/mobile.signin.js
     *   js/mobile/mobile.support.js
     *   js/mobile/mobile.upload-overlay.js
     *   js/mobile/mobile.contact-link.js
     *   js/mobile/mobile.twofactor.js
     *   js/mobile/mobile.twofactor.intro.js
     *   js/mobile/mobile.twofactor.setup.js
     *   js/mobile/mobile.twofactor.verify-setup.js
     *   js/mobile/mobile.twofactor.enabled.js
     *   js/mobile/mobile.twofactor.verify-disable.js
     *   js/mobile/mobile.twofactor.disabled.js
     *   js/mobile/mobile.twofactor.verify-login.js
     *   js/mobile/mobile.twofactor.verify-action.js
     *   js/mobile/mobile.sms.phone-input.js
     *   js/mobile/mobile.sms.verify-code.js
     *   js/mobile/mobile.sms.verify-success.js
     *   js/mobile/mobile.sms.achievement.js
     *   js/mobile/mobile.titlemenu.js
     *   js/mobile/mobile.rubbish-bin-empty-overlay.js
     *   js/mobile/mobile.rubbishbin.js
     *   js/mobile/mobile.alertbanner.js
     *   js/mobile/mobile.conflict-resolution-overlay.js
     *   js/mobile/mobile.over-storage-quota-overlay.js
     *   js/mobile/mobile.resume-transfers-overlay.js
     *   js/mobile/mobile.verify.js
     */
    jsl.push({f:'js/mega-17_5442459253ead7d431b7482925e74038013fb7232bc5f90aad65ca076ec9679e.js', n: 'js-mega-17-js', j: 1, w: 31});

        if (is_filerequest_page) {
    /* Bundle Includes:
     *   js/vendor/perfect-scrollbar.js
     *   js/ui/theme.js
     *   js/ui/languageDialog.js
     */
    jsl.push({f:'js/mega-18_14c8dbeab8602481a92de9fbaa31933c2e6b28ab6dfeed81a914daa0b9361c21.js', n: 'js-mega-18-js', j: 1, w: 3});
    /* Bundle Includes:
     *   css/perfect-scrollbar.css
     *   css/filerequest.css
     *   css/filerequest-mobile.css
     */
    jsl.push({f:'css/mega-6_b1ea538babc1c1f7f47b5c565e1edf93f7f384cdcfc7a008eb2c672ff6e21b85.css', n: 'css-mega-6-css', j: 2, w: 1});
        }
    }

    /* Bundle Includes:
     *   css/toast.css
     *   css/general.css
     *   css/megainput.css
     *   css/vars/text-input.css
     *   css/retina-images.css
     */
    jsl.push({f:'css/mega-7_52d36315f336bcb9fb19040e4a65314f5ac559695705bde5ce3ba7d045a32f4f.css', n: 'css-mega-7-css', j: 2, w: 2});

    // We need to keep a consistent order in loaded resources, so that if users
    // send us logs we won't get different line numbers on stack-traces from
    // different browsers. Hence, do NOT add more jsl entries after this block,
    // unless they're optional (such as polyfills) or third-party resources.

    if (is_embed) {
        jsl = [{f: langFilepath, n: 'lang', j: 3}];
    /* Bundle Includes:
     *   sjcl.js
     *   nodedec.js
     *   js/vendor/jquery.js
     *   js/vendor/jquery.fullscreen.js
     *   js/jquery.misc.js
     *   html/js/embedplayer.js
     *   js/transfers/cloudraid.js
     *   js/utils/polyfills.js
     *   js/utils/browser.js
     *   js/utils/clipboard.js
     *   js/utils/conv.js
     *   js/utils/dom.js
     *   js/utils/events.js
     */
    jsl.push({f:'js/mega-19_6f189d9bd265ad94cde8b3186150f7cb38ab0317837a557637d4f77f77b2c677.js', n: 'js-mega-19-js', j: 1, w: 30});

    /* Bundle Includes:
     *   js/utils/locale.js
     *   js/utils/media.js
     *   js/utils/network.js
     *   js/utils/timers.js
     *   js/utils/watchdog.js
     *   js/utils/workers.js
     *   js/crypto.js
     *   js/account.js
     *   js/transfers/queue.js
     *   js/transfers/decrypter.js
     */
    jsl.push({f:'js/mega-20_569beda6b12664c6e493b0524ece76441707239b4c913cfecf4ecae6c89f2a73.js', n: 'js-mega-20-js', j: 1, w: 24});


        jsl.push({f:'js/vendor/videostream_9f85d385bfe22dbe369233facf90b0eae012fba1b9abb3eda2e95e193e8c75d4.js', n: 'videostream', j: 1, w: 3});

        jsl.push({f:'html/embedplayer.html-postbuild_9656fe42099f0e5643e6c9893002fa2a307beefe302cc8f9bdfc70f0f51dd84e.html', n: 'index', j: 0});
        jsl.push({f:'css/embedplayer.css-postbuild_80e386f6dba016f8574d7eb733031371ac22981e210d53462742432f4e3f50c6.css', n: 'embedplayer_css', j: 2, w: 5});
    }

    if (is_drop) {
        u_checked = true;
        jsl = [{f: langFilepath, n: 'lang', j: 3}];
        jsl.push({f:'html/js/embeddrop_be80cd9801227aab2dec35c24ac73cefd88c64dcd4ad68375a410278b492a00c.js', n: 'embeddrop_js', j: 1, w: 4});
        jsl.push({f:'css/embeddrop.css-postbuild_80783db16d816fe0fcdeefae485acdd95ce041c48f8bb59a13fa60f18d41db83.css', n: 'embeddrop_css', j: 2, w: 5});
    }
    else {
        jsl.push({f:'js/vendor/asmcrypto_9c90f27443fbdb85519985333a8b00c3cff0e10a2753955f41890342d64362f7.js', n: 'asmcrypto_js', j: 1, w: 5});

        if (typeof Number.isNaN !== 'function' || typeof Set === 'undefined' || !Object.assign) {
            jsl.push({f:'js/vendor/es6-shim_0a74f228b49722121bbe75a98e0f20548cfcdd1fd615164df221913bcad76550.js', n: 'es6shim_js', j: 1});
        }
    }

    // If the TextEncoder is not supported natively (IE, Edge) then load the polyfill
    if (typeof TextEncoder !== 'function') {
        jsl.push({f:'js/vendor/encoding_e5cb5178e15c7f043d1a13ffd240bad2cbbf3cb014d033eb01e241e1bd36eaeb.js', n: 'encoding_js', j:1});
    }
    if (page.substr(0, 5) === 'chat/') {
    }

    var jsl2 =
    {
        'dcrawjs': {f:'js/vendor/dcraw_ecd21f93deed73abf3d11422681d642227729cbe25eff1f5a9cc49c1320e37f4.js', n: 'dcraw_js', j: 1},
        'datepicker_js': {f:'js/vendor/datepicker_8d33616ccf10e84a18b0f288e8c18a52f76d7677e812cd84ae53f7a8369d90e7.js', n: 'datepicker_js', j:1},
        'sourcecode': {f:'html/sourcecode_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.html', n: 'sourcecode', j:0},
        'register': {f:'html/register.html-postbuild_e98b7cc2ad0955c91f106f8effe4cab3b45100cd0aebcd000ce8d932c09ff6e4.html', n: 'register', j:0},
        'register_js': {f:'html/js/register_5015399475a14fe49b030e037b551b2ae35bc9e9d72d9b94dc69fc7749cb99e3.js', n: 'register_js', j:1},
        'download': {f:'html/download.html-postbuild_24bf441dbecde407b891219bb8dea5ed4ad76f2a8f4c0179265105291f95a580.html', n: 'download', j:0},
        'download_js': {f:'html/js/download_9f3e4de2457536a2cd688f6ca60d7c317567500b872bcd8b5a1c1adfe5a4d684.js', n: 'download_js', j:1},
        'disputenotice': {f:'html/disputenotice.html-postbuild_f3478166c1b0e7f22131d16b792ddb8a08eb79a5bb737e29a14f349fdcde9fdf.html', n: 'disputenotice', j:0},
        'copyrightnotice': {f:'html/copyrightnotice.html-postbuild_284121c0853b0601a6ccf7b5c66b3c89a508829b35634bfa8c72d5409f86c590.html', n: 'copyrightnotice', j:0},
        'copyright_js': {f:'html/js/copyright_7f054243f5cb7bfe6f031ddb8589e90456a7074a7f4e6ead434790114ae3d315.js', n: 'copyright_js', j:1},
        'terms': {f:'html/terms.html-postbuild_df5cb238b3c66e62f69dc495bbfa3ab3f16ecbaa809853e0b4f93d888d57f882.html', n: 'terms', j:0},
        'keybackup': {f:'html/backup.html-postbuild_aa0baaaf6854fceaf43f0a7914e3b3542e17b704dbac843e34c2ba348be497b6.html', n: 'keybackup', j:0},
        'keybackup_js': {f:'html/js/backup_e2a6fb524d44b2cb23d26321edf6d4f98d137e7ffa927f6f6ab50135538d96e4.js', n: 'keybackup_js', j:1},
        'cancel': {f:'html/cancel.html-postbuild_1f44d30619a06de19432dc4f83e21766b92477f79165c88bdb9197936bfb6470.html', n: 'cancel', j:0},
        'cancel_js': {f:'html/js/cancel_df1eb7c6b8bee81e03fcaa111d2bd3027efce6f9170b1aac5e14dc376ed22742.js', n: 'cancel_js', j:1},
        'reset': {f:'html/reset.html-postbuild_563596ca65e3eb463f1b206bad981a1bf2a84aabda5e27935e724f1d68cb1d2c.html', n: 'reset', j:0},
        'reset_js': {f:'html/js/reset_1e380f0d8bffdcd9ff9b248f411f3f6ddbafb8abb3d4cd75ee50640acadfcbc7.js', n: 'reset_js', j:1},
        'change_email_js': {f:'html/js/emailchange_9fd73fb60bee4c304cab6408a9c1cf80d5b47a44f5a8b547121ef8c10b871533.js', n: 'change_email_js', j:1},
        'change_email': {f:'html/emailchange.html-postbuild_3cf52f0225549bc25068684353ca5b93b0aeef59e42ce5a78248bfa6419c0e11.html', n: 'change_email', j:0},
        'filesaver': {f:'js/vendor/filesaver_53781bf75770878753975e24599b94ecba88b5353dce9a9c0c95391430d04692.js', n: 'filesaver', j:1},
        'recovery': {f:'html/recovery.html-postbuild_2ae02a9bd0a2422b05ae5e826eb86ab06d1a5b0f40615c76aa8d2ba138bc8b56.html', n: 'recovery', j:0},
        'recovery_js': {f:'html/js/recovery_955163cb863527b2a016f95b6481af7c51d6d04dc77116e411630b6127db37ef.js', n: 'recovery_js', j:1},
        'sdkterms': {f:'html/sdkterms_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.html', n: 'sdkterms', j:0},
        'cms_snapshot_js': {f:'js/cmsSnapshot_02511924933d59beeee197da60b1933089bfeadd6dc1b33a3b5354f9668b449f.js', n: 'cms_snapshot_js', j:1},
        'support_js': {f:'html/js/support_ccabba6a6e6c03fdd02627360a97f3e57d114534b59d1991e89a11159c7fc2ad.js', n: 'support_js', j:1},
        'support': {f:'html/support.html-postbuild_fb9e2c022ea8640598d4e409535f7727a5c9e1f0a0b39ada5b2de8c8dc61de96.html', n: 'support', j:0},
        'pdfjs': {f:'js/vendor/pdf_72a249d2fcd1bf4a68fd69dbb3684a2351571415f098bdea16361a90be853607.js', n: 'pdfjs', j:1},
        'tiffjs': {f:'js/vendor/tiff_f010f8f9b4a7aa6d3af1873ead6483eebf7cc274c0a27734bac1a3d0070f4719.js', n: 'tiffjs', j:1},
        'webpjs': {f:'js/vendor/webp_29dee7af39441287b9ead094d3870b341c5aa137ee3650a3e7a920f9cd5b3cb1.js', n: 'webpjs', j:1},
        'videostream': {f:'js/vendor/videostream_9f85d385bfe22dbe369233facf90b0eae012fba1b9abb3eda2e95e193e8c75d4.js', n: 'videostream', j:1},
        'mediainfo': {f:'js/vendor/mediainfo_570d1b1d444c3dfad15de11befbb9dc2bfcff7413b352d44a3f30ca0a1672a60.js', n: 'mediainfo', j:1},
        'zxcvbn_js': {f:'js/vendor/zxcvbn_d73bf00b6455547cd51ec70ece7fe4f2e4f8aa4dbcb17be6e87b691ead9d8b67.js', n: 'zxcvbn_js', j:1},
        'redeem': {f:'html/redeem.html-postbuild_7bdf70146cf11393103e19abd20c68498e80b92bee7566659d1ce2be952c8c46.html', n: 'redeem', j:0},
        'discountpromo': {f:'html/discountpromo.html-postbuild_831c4a4a306f9fe1fcd219fdd39c381cd6118682e88436fc9eb3ba024ff25a74.html', n: 'discountpromo', j:0},
        'discountpromo_js': {f:'html/js/discountpromo_c59bb9bc4a18b6aa208c68bd685600d91d8cdbc3c6cd283acce8cb014ea22b8d.js', n: 'discountpromo_js', j:1},
        'discountpromo_css': {f:'css/discountpromo.css-postbuild_2d73d18a84411ff0c641a4b02a39fb86ff490c687fad6adcc87f7ab59d2d10d7.css', n:'discountpromo_css', j:2},
        'unsub': {f:'html/unsub.html-postbuild_ade0f16ff461dc0750929f3c4614fdd4e71529ec0800520e0b193b2e2bf80a71.html', n: 'unsub', j:0},
        'unsub_js': {f:'html/js/unsub_c59dcf5b1f92a7eef9aa95219bf583f553829109252aa6418ed056cc9dd4310b.js', n: 'unsub_js', j:1},
        'redeem_js': {f:'html/js/redeem_d149552bb32c9ea4bf9cc75de97e4f2dd84c07a63c7af291704aebffb8606637.js', n: 'redeem_js', j:1},
        'nzipp': {f:'html/nzipp.html-postbuild_e40dcf9ffb83b5c43843b52e6a98ed821700dfa203f1713a156fc026e67d9d79.html', n: 'nzipp', j:0},
        'nzipp_js': {f:'html/js/nzipp_073b9bd619d6fb137389382f3881ed50ed6fad586d71027ef4525f9f3de4b98d.js', n: 'nzipp_js', j:1},
        'nzipp_css': {f:'css/nzipp.css-postbuild_2ca3b2ce47039b0683b8fd124d01b5d650ebfcef9e6318c96f8be41170df0caa.css', n: 'nzipp_css', j:2},
        'megabird': {f:'html/megabird.html-postbuild_4779643aa1938f3fab589ef9f78a9fb9814d199fdc6319603fc10143098cc0f9.html', n: 'megabird', j:0},
        'pdfjs2': {f:'js/vendor/pdf_72a249d2fcd1bf4a68fd69dbb3684a2351571415f098bdea16361a90be853607.js', n: 'pdfjs2', j:4 },
        'pdfviewer': {f:'html/pdf.viewer.html-postbuild_f493c9fc142c08291d7f524c49a772bf2b71821d7b68d2353d301e5a61e017a8.html', n: 'pdfviewer', j:0 },
        'pdfviewercss': {f:'css/pdf.viewer.css-postbuild_ccc28c3b883eb5ad3053f236aaee7b410be79851d98314f75f62cbdb23a54927.css', n: 'pdfviewercss', j:4 },
        'pdfviewerjs': {f:'js/vendor/pdf.viewer_f768f3f930a8e2ffd009185aa80f5685e858c394ea0f5fa3cb6f6d0059ee544e.js', n: 'pdfviewerjs', j:4 },
        'filerequest': {f:'html/filerequest.html-postbuild_30866b2b2887e81af714f0f053099f5ab03bd0b1541738e0ae0a75f5e2e816dd.html', n: 'filerequest', j:0 },
        'businessAcc_js': {f:'js/fm/megadata/businessaccount_c84808f6f85be4d90029641ca6e69ecb1e8d95599b78ace0e0b0caf716c480d2.js', n: 'businessAcc_js', j:1 },
        'businessAccUI_js': {f:'js/fm/businessAccountUI_5856f7b18645e47fa211a6a065ec0794fa5f84a7014a804c0f506aba2702b668.js', n: 'businessAccUI_js', j:1 },
        'charts_js': {f:'js/vendor/Chart_65785cbac065c034683427886733eb2c928641b454b30d5e16e18487d204f2f3.js', n: 'charts_js', j:1},
        'charthelper_js': {f:'js/ui/chart.helper_521157fe800d3591d76c16b7bb01bac1226c2e38f6d64f5f986aef7d578a210c.js', n: 'charthelper_js', j:1},
        'business_invoice': {f:'html/invoicePDF.html-postbuild_790768a920c86b577d38985602b86bcc7c19501691bf910030c6adb215041cb5.html', n: 'business_invoice', j:0},
        'codemirror_js': {f:'js/vendor/codemirror_10efe839da820fceb0cba5fe3653c69848bfe1f3f4a8b3090e397a2f793abd4a.js', n: 'codemirror_js', j:1},
        'codemirrorscroll_js': {f:'js/vendor/simplescrollbars_ffba38fcd4f8eaf98ad01abcab41f02f353ca4ec41931eddbfacb9352b456672.js', n: 'codemirrorscroll_js', j:1},
        'special': {f:'html/troy-hunt.html-postbuild_dc0d398c1ae2db5a79b3ea84ee53d0079a39fedd93ceaf07ca125a2d4ad82f7f.html', n:'special', j:0},
        'special_js': {f:'html/js/troy-hunt_19d96f28a57ce22a049da0a94261b7190aa1410ff1c0403f5b0ac8260ed39301.js', n:'special_js', j:1},
        'special_css': {f:'css/troy-hunt.css-postbuild_ad3a74cecf9176844bca43ec16565477b7d3d1453f9c5fd6dbe27e5b1a96280c.css', n:'special_css', j:2},
        'reportabuse_js': {f:'js/ui/reportAbuse_f8d99c6be6361fcc455bfd58637b0007f122bd1eae0f2dd0e299fd7cd9379742.js', n:'reportabuse_js', j:1},
        'folderlink_css':{f:'css/folder-link.css-postbuild_748bdeb3a219c7381accfdf10545c5fd554ee2ddd17a2d2478d4112215cd1d0f.css', n: 'folderlink_css', j: 2, w: 5, c: 1, d: 1, cache: 1},
        'time_checker_js': {f:'js/time_checker_39c5b115b88f9e0d63371d028e11082a7113eb35abc17c9a7b00a00fd96b8aa9.js', n:'time_checker_js', j:1},
        'filerequest_js': {f:'js/filerequest_281166018a2f08a844c16b34a1a6077997938376e7714fd0b8428d52073d412b.js', n: 'filerequest_js', j:1 },
        'filerequest_upload_js': {f:'js/filerequest_upload_1b295772bba575854002a647f841094fdb3b5940fea51e24f70402d287d163fd.js', n: 'filerequest_upload_js', j:1 },
        'docxpreview_js': {f:'js/vendor/docx-preview_68717acbd58970a0bdb7a2e816e02c45e7530437ed8c6ff809bce1d459cb463a.js', n: 'docxpreview_js', j:4},
        'docxviewer_js': {f:'js/ui/docx.viewer_701c9d2f4ca5ea28a4f32c107ffc6e278ea7fe29b7d5495a5cf656f724e79781.js', n: 'docxviewer_js', j:4},
        'docxviewer': {f:'html/docx.viewer.html-postbuild_1e30475878ae78c8fdf7e93ced5e0473b3801346ea345270894c98230d4e2a52.html', n: 'docxviewer', j:0},
        'docxviewercss': {f:'css/docx.viewer.css-postbuild_df5fa940f8812789f201c8420634b7749e571484c5fae8cb20735583dacc2f39.css', n: 'docxviewercss', j:4},
    };

    /* eslint-disable max-len */
    var jsl3 = {'webgl':{'webgl_group1_js':{f:'js/webgl-group1_4b1bd6ffe82e026ab73cd0f6fecaec1d82eaecc39f97295e76e236bb450c4876.js',n:'webgl_group1_js',j:5,w:0}},'chat':{'chat_group1_js':{f:'js/chat-group1_a36b69b69831b2dca8396888d1d5795d9a983aa02ae5f2c76782732f5f809922.js',n:'chat_group1_js',j:1,w:7},'chat_group2_js':{f:'js/chat-group2_dfe2c8e97238260a42551d3e1023befd4317f8ced700b5104771dfd5a3ecaf87.js',n:'chat_group2_js',j:1,w:45},'chat_group3_js':{f:'js/chat-group3_dd855918764edee672973dd0347ce477a2370e824e8e8dd00d4d9c61012f2771.js',n:'chat_group3_js',j:1,w:22},'chat_group4_js':{f:'js/chat-group4_956c4f965c67445ca11416ce67203ea5efe38069ad46fa9e852c0fa50f105d68.js',n:'chat_group4_js',j:1,w:30},'chat_group5_js':{f:'js/chat-group5_3ab9e61000327daecf1e4eb367f599534c047753b00cc7eb44a231e70e641caf.js',n:'chat_group5_js',j:1,w:23},'chat_group6_js':{f:'js/chat-group6_4e2ad9bb803612891a926cbd35c3819c40a65f2073ba2a98af0e710abe0c433d.js',n:'chat_group6_js',j:1,w:64},'chat_group1_css':{f:'css/chat-group1_700fcb21477039250a1eb0b1031dab4a02675a2083a193218e1f4ff621a70ed5.css',n:'chat_group1_css',j:2,w:7}}}
    var subpages =
    {
        'terms': ['terms'],
        'keybackup': ['keybackup', 'keybackup_js', 'filesaver'],
        'recovery': ['recovery', 'recovery_js'],
        'reset': ['reset', 'reset_js'],
        'verify': ['change_email', 'change_email_js'],
        'cancel': ['cancel', 'cancel_js'],
        'register': ['register', 'register_js', 'zxcvbn_js'],
        'newsignup': ['register', 'register_js', 'zxcvbn_js'],
        'emailverify': ['zxcvbn_js'],
        '!': ['download', 'download_js'],
        'file': ['download', 'download_js'],
        'F!': ['folderlink_css'],
        'folder': ['folderlink_css'],
        'discountpromo': ['discountpromo', 'discountpromo_js', 'discountpromo_css'],
        's': ['discountpromo', 'discountpromo_js', 'discountpromo_css'], // Short URL for 'sale' e.g. /s/blackfriday
        'disputenotice': ['disputenotice', 'copyright_js'],
        'copyrightnotice': ['copyrightnotice', 'copyright_js'],
        'support': ['support_js', 'support'],
        'recover': ['reset', 'reset_js'],
        'redeem': ['redeem', 'redeem_js'],
        'bird': ['megabird'],
        'unsub': ['unsub', 'unsub_js'],
        'developersettings': ['developersettings', 'developersettings_js'],
        'filerequest': ['filerequest', 'filerequest_upload_js'],
        'nzippmember': ['nzipp', 'nzipp_js', 'nzipp_css'],
        'nziphotographer': ['nzipp', 'nzipp_js', 'nzipp_css'],
        'special': ['special', 'special_js', 'special_css']
    };

    if (is_mobile) {
        // Page specific
        subpages['!'] = ['download_js'];
    }

    if (page.substr(0, 5) === 'chat/') {
        // jsl = [{f: langFilepath, n: 'lang', j: 3}];
        // ^ @todo: consider loading only needed files...

        tmp = Object.keys(jsl3.chat);
        for (var u = 0; u < tmp.length; ++u) {
            jsl.push(jsl3.chat[tmp[u]]);
        }
        tmp = 0;
    }

    page = ({
        'megacmd': 'cmd',
        'computerbild2019': 'redeem'
    })[page] || page;

    if (page && !is_iframed)
    {
        for (var p in subpages)
        {
            if (page.substr(0,p.length) == p)
            {
                for (var i in subpages[p]) jsl.push(jsl2[subpages[p][i]]);
            }
        }
    }
    var xhr_slots = d && jj ? 5 : localStorage.testSingleThreadLoad ? 1 : 2;
    var waitingToBeLoaded = 0,jsl_done,jj_done = !jj;
    if (!nocontentcheck) {
        addScript([asmCryptoSha256Js]);
    }
    if (typeof Worker !== 'undefined' && typeof window.URL !== 'undefined' && !nocontentcheck)
    {
        var hashdata = ['self.postMessage = self.webkitPostMessage || self.postMessage;', asmCryptoSha256Js, 'self.onmessage = function(e) { try { var hashHex = asmCryptoSha256.SHA256.hex(e.data.text); e.data.hash = hashHex; self.postMessage(e.data); } catch(err) { e.data.error = err.message; self.postMessage(e.data);  } };'];
        var hash_url = mObjectURL(hashdata, "text/javascript");
        var hash_workers = [];
        var i =0;
        // eslint-disable-next-line block-scoped-var
        while (i < xhr_slots)
        {
            try
            {
                hash_workers[i] = new Worker(hash_url);
                hash_workers[i].postMessage = hash_workers[i].webkitPostMessage || hash_workers[i].postMessage;
                hash_workers[i].onmessage = function(e)
                {
                    if (e.data.error)
                    {
                        console.log('error',e.data.error);
                        console.log(e.data.text);
                        alert('error');
                    }
                    var file = Object(jsl[e.data.jsi]).f || 'unknown.js';

                    if (nocontentcheck === false && !compareHashes(e.data.hash, file)) {
                        siteLoadError(load_error_types.file_corrupt, bootstaticpath + file);
                        contenterror = 1;
                    }
                    if (!contenterror)
                    {
                        jsl_current += jsl[e.data.jsi].w || 1;
                        jsl_progress();
                        if (++jslcomplete == jsl.length) initall();
                        else jsl_load(e.data.xhri);
                    }
                };
            }
            catch(e)
            {
                hash_workers = undefined;
                break;
            }
            i++;
        }
        hashdata = null;
    }
    asmCryptoSha256Js = null;

    if (jj)
    {
        var _queueWaitToBeLoaded = function(id, elem) {
            waitingToBeLoaded++;
            elem.onload = function() {
                // if (d) console.log('jj.progress...', waitingToBeLoaded);

                jsl_loaded[Object(jsl[id]).n] = 1;
                jsl_current += Object(jsl[id]).w || 1;
                jsl_progress();

                if (--waitingToBeLoaded == 0) {
                    jj_done = true;
                    boot_done();
                }
                elem.onload = null;
            };
        };

        var createScriptTag = function(id, src) {
            var elem = mCreateElement('script', {type: 'text/javascript'}, 'head');
            elem.async = false;
            _queueWaitToBeLoaded(id, elem);
            elem.src = src;
            return elem;
        };

        var createStyleTag = function(id, src) {
            var elem = mCreateElement('link', {type: 'text/css', rel: "stylesheet"}, 'head');
            _queueWaitToBeLoaded(id, elem);
            elem.href = src;
            return elem;
        };
    }

    var pages = [],xhr_progress,xhr_stack,jsl_fm_current,jsl_current,jsl_total,jsl_perc,jsli,jslcomplete;

    function jsl_start()
    {
        if (xhr_stack) {
            console.error('jsl_start: invalid procedure, pending requests are running...');
            return false;
        }
        jslcomplete = 0;
        xhr_progress = Array(xhr_slots);
        xhr_stack = Array(xhr_progress.length);
        jsl_fm_current = 0;
        jsl_current = 0;
        jsl_total = 0;
        jsl_perc = 0;
        jsli=0;
        var i;
        var jjNoCache = '';
        if (localStorage.jjnocache) {
            jjNoCache = '?r=' + (new Date().toISOString().replace(/[^\w]/g, ''));
        }
        for (i = 0; i < jsl.length; i++) {
            if (jsl[i] && !jsl[i].text) {
                jsl_total += jsl[i].w || 1;

                if (jj) {

                    if (jsl[i].j === 1) {
                        jj_done = false;
                        jsl[i].text = '/**/';
                        createScriptTag(i, bootstaticpath + jsl[i].f + jjNoCache);
                    }
                    else if (jsl[i].j === 2) {

                        jj_done = false;
                        jsl[i].text = '/**/';
                        createStyleTag(i, bootstaticpath + jsl[i].f + jjNoCache);
                    }
                }

                if (!jj || !jsl[i].j || jsl[i].j > 2) {
                    jsl_done = false;
                }
            }
        }
        if (d) {
            console.log('jj.total...', waitingToBeLoaded);
        }

        for (i = xhr_progress.length; i--;) {
            jsl_load(i);
        }
    }

    // Set a 15 second timeout for receiving an initial response from the normal static server. If the static server is
    // completely dead, the longest wait a user will have is 15 seconds before they are switched to the EU servers. If
    // the server is ok, but their connection is slow, then it's likely they will still receive an initial response
    // within 15 seconds. Once that first byte is received then the XHR onprogress handler will set the timeout to
    // unlimited (0 ms) and let the lower layers handle it (e.g. use the browser default timeout) which can let the
    // site load slowly over 5 minutes if they are on a really bad connection. For the EU static server (which we
    // assume never fails) we set the timeout to unlimited.
    var xhr_timeout = (staticpath === defaultStaticPath) ? 0 : 15000;

    /**
     * Handles the XHR loading error. It tries reloading the file multiple times and switches the static path to the
     * default static server if necessary. NB: there may be 2 or more concurrent XHR threads running which can arrive
     * into this function (order of arrival not guaranteed). Using a regular static server counts errors overall,
     * whereas using the default static counts errors per file.
     */
    var xhr_error = function() {

        'use strict';

        var url = this.url;
        var jsi = this.jsi;
        var xhri = this.xhri;

        // If on original staticpath (NA, SG, NZ)
        if (staticpath !== defaultStaticPath) {

            // Increment count
            staticServerLoading.loadFailuresOriginal++;

            // If the number of regular static load failures (any file from any thread) are less than the max allowed
            if (staticServerLoading.loadFailuresOriginal < staticServerLoading.maxRetryAttemptsOriginal) {

                // Set short timeout to go to new thread
                setTimeout(function() {

                    // Try loading the file again from the same static
                    xhr_progress[xhri] = 0;
                    xhr_load(url, jsi, xhri);

                }, 50);
            }
            else {
                // Log that the original static server failed
                logStaticServerFailure(load_error_types.file_load_error, url, staticpath);

                // If not using an extension, set the bootstaticpath to EU static
                // NB: extensions load JS, CSS and lang files locally, only fonts, images come from the statics
                if (!is_extension) {
                    bootstaticpath = defaultStaticPath;
                }

                // Set the static path to EU static, then continue to default static path handling below...
                staticpath = defaultStaticPath;

                // Set flag to show the static server was flipped to the default EU server
                staticServerLoading.flippedToDefault = true;

                // Set the timeout to unlimited now it's on EU static
                xhr_timeout = 0;

                // Log that the loading was flipped to load from the default static servers
                if (d) {
                    console.log('Flipped to failsafe static server path: ' + defaultStaticPath);
                }
            }
        }

        // If on default EU static server
        if (staticpath === defaultStaticPath) {

            // If the failure count for this file on the default static server is not initialised
            if (typeof staticServerLoading.loadFailuresDefault[url] === 'undefined') {

                // Initialise count to 1 if they were originally on EU static server as they have already had one error
                staticServerLoading.loadFailuresDefault[url] = (staticServerLoading.flippedToDefault) ? 0 : 1;
            }

            // If the failure count for this file on the default static server is less than the max allowed retries
            if (staticServerLoading.loadFailuresDefault[url] < staticServerLoading.maxRetryAttemptsDefault) {

                // Set to retry after 0~ ms, then 100ms, then 200ms
                setTimeout(function() {

                    // Try loading the file again from the default EU static
                    xhr_progress[xhri] = 0;
                    xhr_load(url, jsi, xhri);

                }, staticServerLoading.loadFailuresDefault[url] * 100);

                // Increment count of failures
                staticServerLoading.loadFailuresDefault[url]++;
            }
            else {
                // Show site load error and log that it failed
                console.error('gave up retrying for', url);
                siteLoadError(load_error_types.file_load_error, url);
            }
        }
    };

    function xhr_load(url,jsi,xhri)
    {
        xhr_stack[xhri] = getxhr();
        xhr_stack[xhri].onload = function()
        {
            try {
                jsl[this.jsi].text = this.response || this.responseText;
                if (!is_livesite) {
                    var entry = jsl[this.jsi];
                    if (entry && entry.j === 3 && entry.f.indexOf('_prod') === -1
                        && entry.text.indexOf('<!DOCTYPE html>') > -1) {
                        console.warn('Lang file ' +
                            entry.f + ' cannot be found. Switching to _prod lang file');
                        entry.f = entry.f.replace('.json', '_prod.json');
                        entry.text = null;
                        jsl[this.jsi] = entry;
                        return xhr_load(jsl[this.jsi].f, this.jsi, xhri);
                    }
                }

            }
            catch (ex) {
                return siteLoadError(ex, bootstaticpath + Object(jsl[this.jsi]).f);
            }

            if (typeof hash_workers !== 'undefined' && !nocontentcheck)
            {
                hash_workers[this.xhri].postMessage({'text':jsl[this.jsi].text,'xhr':'test','jsi':this.jsi,'xhri':this.xhri});
            }
            else
            {
                if (nocontentcheck === false) {

                    // Hash the file content and convert to hex
                    var hashHex = asmCryptoSha256.SHA256.hex(jsl[this.jsi].text);

                    // Compare the hash from the file and the correct hash determined at deployment time
                    if (!compareHashes(hashHex, jsl[this.jsi].f)) {
                        siteLoadError(load_error_types.file_corrupt, jsl[this.jsi].f);
                        contenterror = 1;
                    }
                }

                if (!contenterror)
                {
                    jsl_current += jsl[this.jsi].w || 1;
                    jsl_progress();
                    if (++jslcomplete == jsl.length) initall();
                    else jsl_load(this.xhri);
                }
            }
        };
        xhr_stack[xhri].onreadystatechange = tryCatch(function() {
            if (this.readyState === 2) {
                xhr_timeout = 0;
                this.timeout = 0;
            }
        }, false);
        xhr_stack[xhri].onerror = xhr_error;
        xhr_stack[xhri].ontimeout = xhr_error;
        if (jsl[jsi].text)
        {
            if (++jslcomplete == jsl.length) initall();
            else jsl_load(xhri);
        }
        else
        {
            xhr_stack[xhri].url = url;
            xhr_stack[xhri].jsi = jsi;
            xhr_stack[xhri].xhri = xhri;
            if (localStorage.dd) url += '?t=' + Date.now();
            xhr_stack[xhri].open("GET", bootstaticpath + url, true);

            if (xhr_timeout > 0) {
                xhr_stack[xhri].timeout = xhr_timeout;
            }

            if (is_chrome_firefox || is_firefox_web_ext) {
                xhr_stack[xhri].overrideMimeType('text/plain');
            }
            xhr_stack[xhri].send(null);
        }
    }

    window.onload = function() {
        'use strict';

        window.onload = null;
        if (is_karma) {
            window.jsl = [];
            return;
        }

        pageLoadTime = Date.now();
        mBroadcaster.once('startMega', function() {
            var now = Date.now();

            pageLoadTime = now - pageLoadTime;

            tryCatch(function() {
                /* @property window.ipcc */
                Object.defineProperty(window, 'ipcc', {
                    value: (String(document.cookie).match(/geoip\s*=\s*([A-Z]{2})/) || [])[1]
                });
            })();
        });

        scriptTest(
            'es6s =' +
            ' ({...{a:23}}).a === 23' + // C60 E79 F55 O47 S11
            ' && Promise.prototype.finally' + // C63 E18 F58 O50 S11
            ' && (Array.prototype.values === Array.prototype[Symbol.iterator])' + // C66 E12 F60 O53 S9
            ' && (function *(a=1,){yield a})(2).next().value === 2', // C58 E14 F52 O45 S10
            function(error) {
                if (error || !window.es6s) {
                    document.location = (is_extension ? '' : '/') + 'update.html';
                    return;
                }
                jsl_start();
                delete window.es6s;
            });
    };
    function jsl_load(xhri)
    {
        if (jsl[jsli]) xhr_load(jsl[jsli].f, jsli++,xhri);
    }
    function jsl_progress()
    {
        // if (d) console.log('done',(jsl_current+jsl_fm_current));
        // if (d) console.log('total',jsl_total);
        var p = Math.floor((jsl_current+jsl_fm_current)/jsl_total*100);
        var deg = 0;
        var leftProgressBlock = document.getElementById('loadinganimleft');
        var rightProgressBlock = document.getElementById('loadinganimright');

        // Fix exception thrown when going from mobile web /login page to mobile web /register page
        if (!rightProgressBlock || !leftProgressBlock) {
            return false;
        }

        if ((p > jsl_perc) && (p <= 100))
        {
            jsl_perc = p;
            if (d) console.log('jsl.progress... ' + p + '%', (jsl_current+jsl_fm_current), jsl_total);
            if (is_extension) p=100;
            deg = 360 * p / 100;
            if (deg <= 180) {
                rightProgressBlock.style.webkitTransform = 'rotate(' + deg + 'deg)';
                rightProgressBlock.style.MozTransform = 'rotate(' + deg + 'deg)';
                rightProgressBlock.style.msTransform = 'rotate(' + deg + 'deg)';
                rightProgressBlock.style.OTransform = 'rotate(' + deg + 'deg)';
                rightProgressBlock.style.transform = 'rotate(' + deg + 'deg)';
            } else {
                rightProgressBlock.style.webkitTransform = 'rotate(180deg)';
                rightProgressBlock.style.MozTransform = 'rotate(180deg)';
                rightProgressBlock.style.msTransform = 'rotate(180deg)';
                rightProgressBlock.style.OTransform = 'rotate(180deg)';
                rightProgressBlock.style.transform = 'rotate(180deg)';
                leftProgressBlock.style.webkitTransform = 'rotate(' + (deg - 180) + 'deg)';
                leftProgressBlock.style.MozTransform = 'rotate(' + (deg - 180) + 'deg)';
                leftProgressBlock.style.msTransform = 'rotate(' + (deg - 180) + 'deg)';
                leftProgressBlock.style.OTransform = 'rotate(' + (deg - 180) + 'deg)';
                leftProgressBlock.style.transform = 'rotate(' + (deg - 180) + 'deg)';
            }
        }
    }
    var cssCache=false;
    var jsl_loaded={};
    function initall() {
        var temp;
        var jsar = [];
        var cssar = [];
        var j2re1 = /(?:\.\.\/)+/g;
        var j2re2 = /\/en\//g;
        var j2tr2 = '/' + lang + '/';
        var j4re = /url\(["']?images\/([^"')]+)["']?\)/g;
        var j4tr = "url('" + staticpath + "images/pdfV/$1')";

        if (lang === 'en') {
            j2tr2 = 0;
        }

        xhr_stack = false;
        for (var i = 0; i < jsl.length; ++i)
        {
            if ((jsl[i].j == 1) && (!jj))
            {
                jsar.push(jsl[i].text + '\n\n');
            }
            else if ((jsl[i].j == 2) && (!jj))
            {
                if (tmp !== -23 && (tmp = document.getElementById('bootbottom'))) {
                    tmp.style.display = 'none';
                    tmp = -23;
                }

                var text = jsl[i].text.replace(j2re1, staticpath);
                if (j2tr2) {
                    text = text.replace(j2re2, j2tr2);
                }

                cssar.push(text);
            }
            else if (jsl[i].j == 3) {
                try {
                    l = !jj && l || JSON.parse(jsl[i].text);
                } catch(ex) {
                    console.error(ex);
                    if (lang !== 'en') {
                        localStorage.lang = 'en';
                        setTimeout(function() {
                            document.location.reload();
                        }, 300);
                    }
                    throw new Error('Error parsing language file '+lang+'.json');
                }
            }
            else if (jsl[i].j === 4) { // new type to distinguish files to be used on iframes
                if (!window[jsl[i].n]) {
                    var blobLink;
                    if ((jsl[i].n || '').indexOf('css') > -1) {
                        blobLink = mObjectURL([jsl[i].text.replace(j4re, j4tr)], 'text/css');
                    }
                    else {
                        blobLink = mObjectURL([jsl[i].text], 'text/javascript');
                    }
                    window[jsl[i].n] = blobLink;
                }
            }
            else if (jsl[i].j === 5) {
                /** @property window.sbj5rsc_webgl */
                temp = 'sbj5rsc_' + jsl[i].n.split(/[:_]/)[0];
                if (!window[temp]) {
                    window[temp] = '';
                }
                window[temp] += jsl[i].text;
                jsl[i].text = '/*j5*/';
            }
            else if (jsl[i].j === 0 && jsl[i].f.match(/\.json$/)) {
                try {
                    var templates = JSON.parse(jsl[i].text);
                    for (var e in templates) {
                        pages[e] = templates[e];
                        jsl_loaded[e] = 1;
                    }
                } catch (ex) {
                    console.error("Error parsing template", ex, jsl[i]);
                    throw new Error("Error parsing template, " + String(ex.message || ex).substr(0, 88));
                }
            }
            else if (jsl[i].j == 0) pages[jsl[i].n] = jsl[i].text;

            jsl[i].text = ' ';
        }
        if (window.URL)
        {
            if (localStorage.makeCache && !cssCache) cssCache=cssar;
            if (cssar.length)
            {
                mCreateElement('link', {type: 'text/css', rel: 'stylesheet'}, 'head', cssar);
            }
            if (!jsl_done || jsar.length) {
                jsar.push('jsl_done=true; boot_done();');
            } else {
                boot_done();
            }
            if (jsar.length) {
                if (is_chrome_firefox) {
                    console.error('jsar must be empty here...');
                }
                else {
                    addScript(jsar);
                }
            }
            jsar=undefined;
            cssar=undefined;
        }
        else
        {
            jsl_done=true;
            boot_done();
        }
    }

    // For live we want the loading-sprite served from the root web servers so that if a static server is down we can
    // detect that quickly with our JS static loading logic. Otherwise, these images will block the loading before then
    var istaticpath = '/';

    // The loading-sprite images are embedded inside the extensions
    if (is_chrome_web_ext || is_firefox_web_ext) {
        istaticpath = '../images/mega/';
    }
    else if (is_chrome_firefox) {
        istaticpath = 'chrome://mega/content/images/mega/';
    }

    mCreateElement('style', {type: 'text/css'}, 'body').textContent = '.div, span, input {outline: none;}.hidden {display: none;}.clear {clear: both;margin: 0px;padding: 0px;display: block;}.loading-main-block {width: 100%;height: 100%;position: fixed;z-index: 10000;font-family:Arial, Helvetica, sans-serif;}.main-blur-block,.bottom-page.scroll-block{display:none}.loading-mid-white-block {height: 100%;width:100%;}.loading-cloud {width: 222px;position: fixed;height: 158px;background-image: url(' + istaticpath + 'loading-sprite_v4.png);background-repeat: no-repeat;background-position: 0 0;left:50%;top:50%;margin:-79px 0 0 -111px;}.loading-m-block{width:60px;height:60px;position:absolute; left:81px;top:65px;background-color:white;background-image: url(' + istaticpath + 'loading-sprite_v4.png);background-repeat: no-repeat;background-position: -81px -65px;border-radius: 100%;-webkit-border-radius: 100%;border-radius: 100%;z-index:10;}.loading-percentage { width: 80px;height: 80px; background-color: #e1e1e1;position: absolute;-moz-border-radius: 100%;-webkit-border-radius: 100%;border-radius: 100%;overflow: hidden;background-image: url(' + istaticpath + 'loading-sprite_v4.png);background-repeat: no-repeat;background-position: -70px -185px;left:71px;top:55px;}.loading-percentage ul {list-style-type: none;-moz-border-radius: 100%;-webkit-border-radius: 100%;border-radius: 100%;overflow: hidden;}.loading-percentage li {position: absolute;top: 0px;}.loading-percentage p, .loading-percentage li, .loading-percentage ul{width: 80px;height: 80px;padding: 0;margin: 0;}.loading-percentage span {display: block;width: 40px;height: 80px;}.loading-percentage ul :nth-child(odd) {clip: rect(0px, 80px, 80px, 40px);}.loading-percentage ul :nth-child(even) {clip: rect(0px, 40px, 80px, 0px);}.loading-percentage .right-c span {-moz-border-radius-topleft: 40px;-moz-border-radius-bottomleft: 40px;-webkit-border-top-left-radius: 40px;-webkit-border-bottom-left-radius: 40px;border-top-left-radius: 40px;border-bottom-left-radius: 40px;background-color:#dc0000;}.loading-percentage .left-c span {margin-left: 40px;-moz-border-radius-topright: 40px;-moz-border-radius-bottomright: 40px;-webkit-border-top-right-radius: 40px;-webkit-border-bottom-right-radius: 40px;border-top-right-radius: 40px;border-bottom-right-radius: 40px;background-color:#dc0000;}.loading-main-bottom {max-width: 940px;width: 100%;position: absolute;bottom: 20px;left: 50%;margin: 0 0 0 -470px;text-align: center;}.loading-bottom-button {height: 29px;width: 29px;float: left;background-image: url(' + istaticpath + 'loading-sprite_v4.png);background-repeat: no-repeat;cursor: pointer;}.st-social-block-load {position: fixed;bottom: 20px;left: 0;width: 100%;height: 43px;text-align: center;}.st-bottom-button {height: 24px;width: 24px;margin: 0 8px;display: inline-block;background-image: url(' + istaticpath + 'loading-sprite_v4.png);background-repeat: no-repeat;background-position:11px -405px;cursor: pointer;-moz-border-radius: 100%;-webkit-border-radius: 100%;border-radius: 100%;-webkit-transition: all 200ms ease-in-out;-moz-transition: background-color 200ms ease-in-out;-o-transition: background-color 200ms ease-in-out;-ms-transition: background-color 200ms ease-in-out;transition: background-color 200ms ease-in-out;background-color:#999999;}.st-bottom-button.st-google-button {background-position: 11px -405px;}.st-bottom-button.st-google-button {background-position: -69px -405px;}.st-bottom-button.st-twitter-button{background-position: -29px -405px;}.st-bottom-button:hover {background-color:#334f8d;}.st-bottom-button.st-twitter-button:hover {background-color:#1a96f0;}.st-bottom-button.st-google-button:hover {background-color:#d0402a;}@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {.maintance-block, .loading-percentage, .loading-m-block, .loading-cloud, .loading-bottom-button,.st-bottom-button, .st-bottom-scroll-button {background-image: url(' + istaticpath + 'loading-sprite_v4@2x.png);    background-size: 222px auto;}}';

    mCreateElement('div', { "class": "loading-main-block", id: "loading"}, 'body')
        .innerHTML =
            '<div class="loading-mid-white-block">'+
            '    <div class="loading-cloud">'+
            '        <div class="loading-percentage">'+
            '            <ul>'+
            '                <li class="right-c"><p id="loadinganimright"><span></span></p></li>'+
            '                <li class="left-c"><p  id="loadinganimleft"><span></span></p></li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="loading-m-block"></div>'+
            '    </div>'+
            '    <div class="st-social-block-load" id="bootbottom">'+
            '        <a href="https://www.facebook.com/MEGAprivacy" target="_blank" rel="noopener noreferrer" class="st-bottom-button st-facebook-button"></a>'+
            '        <a href="https://www.twitter.com/MEGAprivacy" target="_blank" rel="noopener noreferrer" class="st-bottom-button st-twitter-button"></a>'+
            '    </div>'+
            '</div>';

    if (is_iframed || window.top !== window) {
        try {
            // if this does fail, we're under a mis-configured sandbox, and loading Worker()ers won't work.
            tmp = 1 + (document.cookie | 0);

            document.body.textContent = '';
            document.body.style.background = is_drop ? '#fff' : '#000';
            jsl_progress = function() {};
        }
        catch (ex) {
            if (ex.code === 18 || ex.name === 'SecurityError') {
                window.onload = window.onerror = null;
                tmp = String(ex.message || ex.name || ex);
                document.body.textContent = tmp.substr(tmp.lastIndexOf(':') + 1);
                throw ex;
            }
        }
    }

    var u_storage, loginresponse, u_sid, dl_res, voucher, gmf_res;
    u_storage = init_storage(localStorage.sid ? localStorage : sessionStorage);

    (function _crossTabSession(u_storage) {
        'use strict';

        var xhr = function(params, data, callback) {
            var xhr = getxhr();
            xhr.onloadend = function() {
                var response = false;

                if (this.status === 200) {
                    try {
                        response = this.response || this.responseText || false;
                        if (response[0] === '[') {
                            response = JSON.parse(response);
                        }
                    }
                    catch (ex) {
                        console.warn(ex);
                        response = false;
                    }
                }

                if (!callback(response)) {
                    boot_done();
                }
            };

            xhr.open("POST", apipath + 'cs?id=0' + mega.urlParams() + (params || ''), true);
            xhr.send(JSON.stringify([].concat(data)));
        };

        var gmf = function() {
            gmf_res = true;

            xhr(false, {a: 'gmf'}, function(result) {
                if (Array.isArray(result) && typeof result[0] === 'object') {
                    // Cache flags object
                    mega.apiMiscFlags = result[0];
                    mBroadcaster.sendMessage('global-mega-flags');
                }
                else {
                    if (d) {
                        console.error('API request error, no flags given...');
                    }

                    mBroadcaster.once('startMega', function() {
                        setTimeout(function() {
                            if (typeof M.req === 'function') {
                                M.req('gmf').always(function(result) {
                                    if (typeof result === 'object') {
                                        mega.apiMiscFlags = result;
                                        mBroadcaster.sendMessage('global-mega-flags');
                                    }
                                    else if (d) {
                                        console.error('Giving up retrieving API flags...');
                                    }
                                });
                            }
                        }, 700);
                    });
                }
                gmf_res = false;
            });
        };

        var ack = function() {
            if (!(u_sid = u_storage.sid)) {
                loginresponse = false;
                gmf();
            }

            if (loginresponse) {
                xhr('&sid=' + u_storage.sid, {'a': 'ug'}, function(response) {
                    loginresponse = false;

                    if (parseInt(response) === -15 /* ESID */) {
                        loginresponse = -15;
                    }
                    else if (parseInt(response) === -16 /* EBLOCKED */) {
                        loginresponse = -16;
                    }
                    else if (typeof response[0] === 'object') {
                        loginresponse = response;
                    }

                    if (!Array.isArray(loginresponse)) {
                        // Invalid login session, retrieve raw API flags.
                        gmf();
                    }
                });
            }

            if (dl_res) {
                var g = {
                    a: 'g',
                    p: page.substr(0, 5) === 'file/' ? page.substr(5, 8) : page.split('!')[1]
                };

                xhr(u_sid ? '&sid=' + u_sid : false, g, function(response) {
                    dl_res = Array.isArray(response) && response[0];
                });
            }

            if (voucher) {
                var code = localStorage.voucher || page.substr(7);
                var request = [
                    {a: 'uavq', f: 1, v: code},
                    {a: 'uq', pro: 1, gc: 1},
                    {a: 'utqa', nf: 2, p: 1}
                ];

                xhr(u_sid ? ('&sid=' + u_sid) : false, request, function(res) {
                    voucher = false;

                    if (Array.isArray(res) && typeof res[0] === 'object') {
                        var v = res[0];
                        v.balance = parseFloat((((res[1] || []).balance || [])[0] || [])[0]) || 0;
                        v.plans = Array.isArray(res[2]) && res[2].length && res[2];
                        v.value = parseFloat(v.value);
                        v.code = code;

                        if (v.plans && v.value) {
                            mega.voucher = v;
                        }
                    }
                });
            }

            boot_done();
            ack = undefined;
        };

        // No session handling needed for
        if (is_drop || is_karma) {
            return;
        }

        // Redirect static pages to mega.io if there isn't a stored session ID (regardless of its validity),
        // since without a session-id it's not possible to access any internal page.
        if (location.host === 'mega.nz' && !u_storage.sid && !is_iframed && isStaticPage(page) && !location.hash) {
            return mega.redirect('mega.io', page, false, locationSearchParams);
        }

        if (page[0] === 'F' && page[1] === '!' || page.substr(0, 7) === 'folder/') {
            var n = page.split(/\W+/);

            if (n && !n[2] && n[1] && n[1].length === 8) {
                xhr('&v=1&n=' + n[1], null, function(res) {
                    res |= 0;

                    if (res === -9 || res === -16) {
                        window['preflight-folder-link-error:' + n[1]] = res;
                    }
                    return -1;
                });
            }
        }

        if (!(parseInt(localStorage.voucherExpiry) > Date.now())) {
            delete localStorage.voucher;
        }

        loginresponse = true;
        voucher = localStorage.voucher !== undefined || page.substr(0, 7) === 'voucher';
        dl_res = page[0] === '!' || page[0] === 'E' && page[1] === '!' || page.substr(0, 5) === 'file/';

        if (localStorage === u_storage) {
            ack();
        }
        else {
            var setLSItem = tryCatch(function(k, v) {
                localStorage.setItem(k, JSON.stringify(v));
            });
            var onStorageEvent = function(ev) {
                if (ev.key === 'sb!sid') {
                    var value = JSON.parse(ev.newValue || '""');

                    if (typeof value === 'number') {
                        // Requesting session storage

                        var data = {};

                        if (sessionStorage.sid) {
                            data.k = sessionStorage.k;
                            data.sid = sessionStorage.sid;
                        }

                        onIdle(function() {
                            setLSItem('sb!sid', data);
                        });
                    }
                    else if (typeof value === 'object') {
                        // Received session storage

                        if (ack) {
                            if (value.sid) {
                                u_storage.k = value.k;
                                u_storage.sid = value.sid;
                            }
                            ack();
                        }
                    }

                    delete localStorage[ev.key];
                }
            };

            if (window.addEventListener) {
                window.addEventListener('storage', onStorageEvent, false);
            }
            else if (window.attachEvent) {
                window.attachEvent('onstorage', onStorageEvent);
            }
            onStorageEvent = undefined;

            if (u_storage.sid) {
                ack();
            }
            else {
                setTimeout(function() {
                    if (ack) {
                        ack();
                    }
                    delete localStorage['sb!sid'];
                }, 800);
                setLSItem('sb!sid', Math.random());
            }
        }
    })(u_storage);

    function boot_auth(u_ctx,r)
    {
        u_type = r;
        u_checked=true;
        startMega();
    }

    var boot_done_makecache=false;

    function boot_done()
    {
        if (boot_done_makecache)
        {
            boot_done_makecache=false;
            makeCache();
            return false;
        }

        if (d) console.log('boot_done', loginresponse === true, dl_res === true, !jsl_done, !jj_done);

        // eslint-disable-next-line max-len
        if (loginresponse === true || dl_res === true || gmf_res === true || voucher === true || !jsl_done || !jj_done) {
            return;
        }

        // turn the `ua` (userAgent) string into an object which holds the browser details
        try {
            ua = Object(ua);
            ua.details = Object.create(browserdetails(ua));
        }
        catch (e) {}

        // announce the loading finish of relevant resources in jsl
        for (var i = 0; i < jsl.length; i++) {
            if (!jj || !jsl[i].j || jsl[i].j > 2) {
                jsl_loaded[jsl[i].n] = 1;
            }
        }

        mBroadcaster.sendMessage('boot_done');

        if (u_checked) {
            startMega();
        }
        else if (loginresponse === -15) {
            u_logout(true);
            boot_auth(null, false);
        }
        else if (loginresponse === -16) {
            api_setsid(u_sid);
            boot_auth(null, false);
        }
        else if (loginresponse)
        {
            api_setsid(u_sid);
            u_checklogin3a(loginresponse[0],{checkloginresult:boot_auth});
            loginresponse = undefined;
        }
        else u_checklogin({checkloginresult:boot_auth},false);
    }
}

/* jshint -W098 */
/**
 * History API's pushState helper that takes into account whether we're running through an extension or public-link
 * @param {Object|String} page The page to change to, or an history's state object
 * @param {Object} [state] An optional state object, if an String is provided for the 1st parameter.
 */
function pushHistoryState(page, state) {
    'use strict';

    try {
        var method = 'pushState';
        if (page === true) {
            method = 'replaceState';
            page = state;
            state = undefined;
        }

        if (typeof page !== 'object') {
            page = page ? {subpage: page} : history.state || {subpage: getCleanSitePath()};
        }
        state = Object.assign({}, page, state);
        page = state.subpage || state.fmpage || location.hash;

        if (page.substr(0, 9) === 'fm/search') {
            state.searchString = page.substr(9) || state.searchString;
            page = state.subpage = 'fm/search';
        }

        if (d > 1 && method === 'pushState' && JSON.stringify(history.state) === JSON.stringify(state)) {
            console.warn('duplicate push state attempt.');
        }

        history[method](state, '', (hashLogic || isPublicLink(page) ? '#' : '/') + page);
    }
    catch (ex) {
        console.warn(ex);
    }
}

/**
 * Simple .toArray method to be used to convert `arguments` to a normal JavaScript Array
 *
 * Please note there is a huge performance degradation when using `arguments` outside their
 * owning function, to mitigate it use this function as follow: toArray.apply(null, arguments)
 *
 * @returns {Array}
 */
function toArray() {
    var len = arguments.length;
    var res = Array(len);
    while (len--) {
        res[len] = arguments[len];
    }
    return res;
}

function tryCatch(fn, onerror)
{
    fn.foo = function __tryCatchWrapper()
    {
        try {
            return fn.apply(this, arguments);
        } catch (e) {
            if (onerror !== false) {
                console.error(e);
            }

            if (typeof onerror === 'function') {
                onIdle(onerror.bind(null, e));
            }
        }
    };
    fn.foo.bar = fn;
    return fn.foo;
}

/** fast weak checksum */
function wchecksum(data, seed) {
    'use strict';
    seed = seed || 0x9f00eb1f;

    var l = data.length;
    while (l--) {
        seed += data.charCodeAt(l) * l;
    }
    return seed >>> 0;
}

var onIdle = function(handler) {
        var startTime = Date.now();

        return setTimeout(function() {
            handler({
                didTimeout: false,
                timeRemaining: function() {
                    return Math.max(0, 50.0 - (Date.now() - startTime));
                }
            });
        }, 1);
    };

if (window.requestIdleCallback) {
    onIdle = function onIdle(callback) {
        'use strict';

        return window.requestIdleCallback(callback, {timeout: 20});
    };
}

function makeUUID(a) {
    'use strict';

    return a
        ? (a ^ Math.random() * 16 >> a / 4).toString(16)
        : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, makeUUID);
}

function inherits(target, source) {
    'use strict';

    target.prototype = Object.create(source && source.prototype || source);
    Object.defineProperty(target.prototype, 'constructor', {
        value: target,
        enumerable: false
    });

    Object.defineProperty(target.prototype, 'toString', {
        value: function() {
            return '[object ' + this.constructor.name + ']';
        },
        writable: true,
        configurable: true
    });

    if (!target.prototype.valueOf) {
        Object.defineProperty(target.prototype, 'valueOf', {
            value: function() {
                return this;
            },
            configurable: true
        });
    }

    if (source) {
        Object.setPrototypeOf(target, source);
    }
}

// eslint-disable-next-line strict
function lazy(target, property, stub) {
    Object.defineProperty(target, property, {
        get: function() {
            Object.defineProperty(this, property, {
                value: stub.call(this),
                enumerable: property[0] !== '_'
            });
            return this[property];
        },
        configurable: true
    });
    return target;
}

function b64encode(str) {
    'use strict';
    // eslint-disable-next-line local-rules/hints
    try {
        return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    catch (ex) {}
}
function b64decode(str) {
    'use strict';
    // eslint-disable-next-line local-rules/hints
    try {
        return atob((str + '=='.substr(2 - str.length * 3 & 3)).replace(/-/g, '+').replace(/_/g, '/'));
    }
    catch (ex) {}
}

function clip(str) {
    'use strict';
    var elm = document.getElementById('chromeclipboard');
    if (elm) {
        elm.textContent = str;
        var res = tryCatch(function() {
            elm.focus();
            elm.setSelectionRange(0, str.length);
            return document.execCommand('copy');
        })();

        elm.textContent = '';
        return res;
    }
}

// Promise.catch helper
function nop() {
    'use strict';
}

// Promise.catch helper
function echo(a) {
    'use strict';
    return a;
}

var dump = nop;
mBroadcaster.once('startMega', function() {
    'use strict';

    var data = sessionStorage.sitet;

    if (data) {
        delete sessionStorage.sitet;
        onIdle(function() {
            M.transferFromMegaCoNz(data);
        });
    }

    if (window.uTagMT) {
        var mt = window.uTagMT;
        delete window.uTagMT;

        setTimeout(function() {
            M.req({a: 'mrt', t: mt}).dump('uTagMT');
        });
    }

    if (sessionStorage.affid && 'csp' in window) {
        delay('aff:cspchk:movelocal', function() {
            if ('affiliate' in M) {
                M.affiliate.persist();
            }
        });
    }

    Object.defineProperty(window, 'dump', {value: console.warn.bind(console, '[dump]')});
});
