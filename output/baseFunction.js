// IE detector
(function (a) { window.isIE = (a.indexOf('MSIE ') > -1 || a.indexOf('Trident/') > -1 || a.indexOf('Edge/') > -1); })(navigator.userAgent || navigator.vendor || window.opera);

(function () {
    /* Start - MobileDetect */
    var MobileDetect = function () { var e = function () { }; e.isTablet = !1, e.isPhone = !1, e.isDesktop = !1; var o = navigator.userAgent.toLowerCase(); return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(o) ? e.isTablet = !0 : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(o) ? e.isPhone = !0 : e.isDesktop = !0, e.prototype.phone = function () { return !!e.isPhone || null }, e.prototype.tablet = function () { return !!e.isTablet || null }, e.prototype.desktop = function () { return !!e.isDesktop || null }, e }();
    /* End - MobileDetect */

    var md = new MobileDetect(window.navigator.userAgent);

    window.deviceInfo = {
        isMobile: md.phone() != null,
        isTablet: md.tablet() != null
    };
})();

if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

var base = {},
    tmdEvent = {},
    _lazyLoadImage = GlobalVariables.LazyLoadImage;

// Popup
function PopUpWindow(url, width, height) {
    window.open(url,
        "newpage",
        "toolbar=0, scrollbars=yes, location=0, statusbar=0, menubar=0, status=0, resizable=1, width=" + width + ", height=" + height);
}

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function getProtokol() {
    return document.location.protocol + '//';
}

// Prototypes
String.prototype.ToUpper = function () {
    var _value = this;
    var _letters = {
        "i": "İ",
        "ş": "Ş",
        "ğ": "Ğ",
        "ü": "Ü",
        "ö": "Ö",
        "ç": "Ç",
        "ı": "I"
    };
    _value = _value.replace(/(([iışğüçö]))/g, function (_letter) {
        return _letters[_letter];
    });
    return _value.toUpperCase();
};

String.prototype.ToLower = function () {
    var _value = this;
    var _letters = {
        "İ": "i",
        "I": "ı",
        "Ş": "ş",
        "Ğ": "ğ",
        "Ü": "ü",
        "Ö": "ö",
        "Ç": "ç"
    };
    _value = _value.replace(/(([İIŞĞÜÇÖ]))/g, function (_letter) {
        return _letters[_letter];
    });
    return _value.toLowerCase();
};

String.prototype.ToBool = function () {
    var _value = this.toLowerCase();
    return _value == "true" || _value == true || _value == "on";
};

String.prototype.trimEnd = function (c) {
    c = c ? c : ' ';
    var i = this.length - 1;
    for (; i >= 0 && this.charAt(i) == c; i--);
    return this.substring(0, i + 1);
};

// İstatistik 
tmdEvent.SendGemius = function (id) {
    if (typeof (pp_gemius_hit) !== "undefined") {
        var _id = id || pp_gemius_identifier.replace("USED_", "");
        pp_gemius_hit(_id);
    }
};
tmdEvent.SendPageView = function (url) {
    if (typeof (ga) !== "undefined") {
        ga('send', 'pageview', url || location.pathname, GlobalVariables.CustomDimensions);
    }
    try { sendPageViewGA4(GlobalVariables.CustomDimensions); } catch (e) { console.log(e) }
};
tmdEvent.SendEvent = function (category, action, label) {
    if (typeof (ga) !== "undefined") {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        });
    }
    try { sendActionGA4(category, action, label, null); } catch (e) { console.log(e) }
};

// Seo url oluşturmak için kullanılır
base.Slugify = function (text) {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };
    for (var key in trMap) {
        text = text.toString().replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
        .replace(/\s/gi, "-") // convert spaces to dashes
        .replace(/[-]+/gi, "-") // trim repeated dashes
        .toLowerCase();

};

// Fonksiyona gönderilen verileri birleştirmek için kullanılır. Örn. base.ConcatKeys("11", "22", 33, 44);
base.ConcatKeys = function () {
    var all = "";
    for (var i = 0; i < arguments.length; i++) {
        all = all.concat(base.Slugify(arguments[i]));
    }
    return all;
};

base.IsOnScreen = function (element, nearVal) {
    if (verge) {
        var _value = parseInt(nearVal) || 0;
        return verge.inViewport(element, _value);
    }
    return false;
};

base.IsElementInViewport = function (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

base.ShuffleArray = function (array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
};

base.ZeroPad = function (n, width) {
    var charForPad = '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(charForPad) + n;
};

base.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

base.validateNumber = function (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    if (!base.isNumber(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
    if (theEvent.currentTarget)
        theEvent.currentTarget.value = theEvent.currentTarget.value.replace(/\D/g, '');
};

base.AppendStyleSheet = function (source) {
    var css = document.createElement('link');
    css.href = source;
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);
};

base.AppendScript = function (source, isAsync) {
    var script = document.createElement('script');
    script.src = source;
    script.async = isAsync !== undefined ? isAsync : true;
    script.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(script);
};

base.AppendScriptCallBack = function (src, callback) {
    var script = document.createElement('script'),
        loaded;
    script.setAttribute('src', src);
    if (callback) {
        script.onreadystatechange = script.onload = function () {
            if (!loaded) {
                callback();
            }
            loaded = true;
        };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
};

// Sayfa QueryString'lerini jSON olarak getirir. Kullanım: base.GetUrlParams()["querystring"]; sonucu string olarak verir.
base.GetUrlParams = function () {
    var match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);

    return urlParams;
};

base.RemoveSolrSpecialCharacters = function (key) {
    return key.replace(/[{}!&|()^"?\[\]~+*:\\-]/g, "").trim();
};

/***** COOKIE İŞLEMLERİ *****/
function setCookie(name, value, expireMinutes, path, domain, secure) {
    var date = new Date();
    date.setTime(date.getTime() + (expireMinutes * 60 * 1000));
    var expires = date.toGMTString();

    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

// primary function to retrieve cookie by name
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return "";
}

// utility function called by getCookie( )
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}
// remove the cookie by setting ancient expiration date
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
/***** /COOKIE İŞLEMLERİ *****/



// HeaderMenu arama
base.HeaderQuickSearch = function () {
    var key = base.RemoveSolrSpecialCharacters($("#txtHeaderSearch").val());
    if (key == '') { $("#txtHeaderSearch").focus(); return; }
    window.location.href = '/arama?query=' + encodeURI(key);
};

function HeaderQuickSearch() {
    return base.HeaderQuickSearch();
}

base.LoginControl = function () {
    var _cookie = $.cookie(".AuthDecr");
    var _linkToSignUp = "PopUpWindow('https://uyelik.tmgrup.com.tr/Authentication/CreateUserBySite/50450B66-F39E-4DD8-867B-4D2E15726A5F', 530, 590);";
    var _linkToMembershipInfo = "PopUpWindow('https://uyelik.tmgrup.com.tr/Authentication/EditUserFromSite/50450B66-F39E-4DD8-867B-4D2E15726A5F', 530, 590);";

    var _container = $("li#liMembership");
    var _signIn = $("ol > li.login-enter", _container);
    var _signUp = $("ol > li.login-new", _container);
    var _memberName = $("ol > li.login-name", _container);
    var _signOut = $("ol > li.login-exit", _container);
    var _pushSubscribe = $("ol > li.notification-control", _container);

    var isSofra = location.pathname == "/sofra" || location.pathname.indexOf("/sofra/") > - 1;
    if (isSofra) {
        _signUp = $("[data-type='signup']");
    }

    var _userName = _cookie != null && _cookie.split('|')[0];
    var _isLogged = _userName !== undefined && _userName !== null && _userName != "";

    var _isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (_isSafari)
        $(_pushSubscribe).remove();

    try {
        if (_isLogged) {
            var _userNameSurname = _cookie.split('|')[2];
            $("a", _memberName).attr('onClick', _linkToMembershipInfo).attr('href', 'javascript:;')
                .html(_userNameSurname.replace(/\+/g, " "));

            //document.write(unescape("%3Cscript src=\"https://i.tmgrup.com.tr/editor-menu/menu.js?" + new Date().toISOString().substring(0, 10) + "\" %3E%3C/script%3E"));

            var script = document.createElement("script");

            // Add script content

            script.src = "https://i.tmgrup.com.tr/editor-menu/menu2.js?" + new Date().toISOString().substring(0, 10);

            // Append

            document.head.appendChild(script);
        }
        else {
            $(_signUp).attr("onclick", _linkToSignUp);
        }

        // Start - Push Notification On/Off
        $("a", _pushSubscribe).click(function () {
            popupCenter('https://psabah.tmgrup.com.tr', 'Sabah Bildirimler', 480, 440)
            deleteCookie("notificationBarClosed", "/");
            var d = new Date();
            d.setDate(d.getDate() + 365);
            setCookie("notificationBarClosed", "1", d.toGMTString(), "/");
        });
        // End - Push Notification On/Off
    }
    catch (e) { }

    if (_signIn.length)
        $(_signIn).toggle(!_isLogged);

    if (_signUp.length)
        $(_signUp).toggle(!_isLogged);

    if (_memberName.length)
        $(_memberName).toggle(_isLogged);

    if (_signOut.length)
        $(_signOut).toggle(_isLogged);

    if (_pushSubscribe.length)
        $(_pushSubscribe).toggle(true);
};

base.CheckWebIsTrue = function () {
    var COOKIE_NAME = "fromMobile";
    var _value = false;

    // Url check
    var checkWeb = base.GetUrlParams()["web"];
    if (checkWeb && checkWeb.ToBool()) {
        setCookie(COOKIE_NAME, true, 5);
        _value = true;
    }

    // Cookie check
    var cookie = getCookie(COOKIE_NAME);
    if (cookie.ToBool()) {
        _value = true;
    }

    return _value;
};

base.CheckMobile = function () {
    var _isIpad = (/ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

    var _isDev = GlobalVariables.IsDevelopment,
        _hasMobile = GlobalVariables.HasMobile;

    if (!_isDev && deviceInfo.isMobile && !_isIpad && _hasMobile && !base.CheckWebIsTrue()) {
        var _protocol = getProtocol(),
            _host = "m.sabah.com.tr",
            _pathName = location.pathname;

        if (isIE)
            document.execCommand("Stop");
        else
            window.stop();

        location.href = _protocol + _host + _pathName;
    }
};

base.PrintPage = function (elem, type) {
    var printProcess = function (logo, title, image, content_container, spot) {
        var disp_setting = "toolbar=yes,scrollbars=yes,width=770, height=600";
        var docprint = window.open("", "", disp_setting);
        var htmlContent = "";
        $.each(content_container, function (ix, el) {
            htmlContent += el.outerHTML;
        });
        htmlContent = htmlContent.replace(/<\/?a[^>]*>/g, "").replace(/<\/a>/g, "");

        var printDoc = "";
        printDoc += "<!doctype html>";
        printDoc += "<html class=\"no-js\" lang=\"en-US\">";
        printDoc += "    <head>";
        printDoc += "        <meta charset=\"utf-8\">";
        printDoc += "        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">";
        printDoc += "        <title>" + title + " - Sabah<\/title> ";
        printDoc += "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
        printDoc += "        <style type=\"text\/css\">";
        printDoc += "            body{";
        printDoc += "                font-family: Arial, sans-serif;";
        printDoc += "                font-size: 14px;";
        printDoc += "                line-height: 130%;";
        printDoc += "            }  ";
        printDoc += "            header {";
        printDoc += "                padding-bottom:10px;";
        printDoc += "            }";
        printDoc += "            h1{";
        printDoc += "                line-height: 140%;";
        printDoc += "                font-size:1.8em;";
        printDoc += "            }";
        printDoc += "             h2{";
        printDoc += "                line-height: 120%;";
        printDoc += "                font-size:1.4em;";
        printDoc += "            }";
        printDoc += "        <\/style>";
        printDoc += "    <\/head>";
        printDoc += "    <body onload=\"window.print();window.close();\">";
        printDoc += "        <header>";
        printDoc += "            <img src=\"" + logo + "\">";
        printDoc += "        <\/header>";
        printDoc += "        <article>";
        printDoc += "            <h1>" + title + "</h1>";
        printDoc += (image ? "<p style=\"text-align:center\"><img src=\"" + image + "\" \/><\/p>" : "");
        printDoc += (spot ? "<h2>" + spot + "<\/h2>" : "");
        printDoc += htmlContent;
        printDoc += "        <\/article> ";
        printDoc += "    <\/body>";
        printDoc += "<\/html>";

        docprint.document.open();
        docprint.document.write(printDoc);
        docprint.document.close();
        docprint.focus();
    };

    type = type || "article";
    var img_logo = $(".logo:first img:first").attr("src");
    if (type == "article") {
        var container = $($(elem).closest('.topDetail')[0] ||
            $(elem).parents('.row').find('.author-detail-text') || // sofra yazar
            $(elem).closest('.row.frame')[0]);
        var img_value = $(".newsImage > img", container).attr("src");
        var title_value = $("h1:first", container).text().trim();
        var spot_value = $("h2.spot:first", container).text().trim();
        if (!spot_value) {
            spot_value = $("[data-item=spot]", container).text().trim();
        }
        var content_container = $(".newsBox", container);
        if (content_container.length == 0)
            content_container = container;

        printProcess(img_logo, title_value, img_value, content_container, spot_value);
    }
    else if (type == "aktuelyazar") {

        var container = $($(elem).closest('.row'));
        var img_value = $(".img > img", container).attr("src");
        var title_value = $("h1.title:first", container).text().trim();
        var spot_value = $("h2:first", container).text().trim();
        var content_container = $(".textFrame > p", container);

        printProcess(img_logo, title_value, img_value, content_container, spot_value);
    }
    else if (type == "gallery") {
        var container = $(elem).closest('.gallery');
        var img_value = $(".galleryImg img:first", container).attr("src");
        var title_value = $("h1:first", container).text().trim();
        var content_container = $(".newsContent", container);

        printProcess(img_logo, title_value, img_value, content_container, spot_value);
    }
};

base.GeneralShare = function (element) {
    function DoShare(type, pathname, _title, _image) {
        pathname = pathname
            .replace('/spor/yazarlar', '/yazarlar/spor')
            .replace('/site/yazarlar', '/yazarlar/site')
            .replace('/kitap/yazarlar', '/yazarlar/kitap')
            .replace('/pazar/yazarlar', '/yazarlar/pazar')
            .replace('/gunaydin/yazarlar', '/yazarlar/gunaydin')
            .replace('/bolgeler/yazarlar', '/yazarlar/bolgeler')
            .replace('/cumartesi/yazarlar', '/yazarlar/cumartesi')
            .replace('/perspektif/yazarlar', '/yazarlar/perspektif');

        var url = "";
        if (pathname.indexOf("http") > -1)
            url = pathname;
        else
            url = (getProtokol() + "www.sabah.com.tr" + pathname);

        url = encodeURIComponent(url);
        var title = encodeURIComponent(_title);
        var windowUrl, redirectUrl;

        if (type == "facebook")
            windowUrl = "https://www.facebook.com/sharer/sharer.php?s=100&u=" + url + encodeURIComponent("?f=sm&utm_source=facebook.com");
        else if (type == "twitter") {

            var newUrl = url + encodeURIComponent("?f=sm&utm_source=twitter.com");

            windowUrl = "https://twitter.com/intent/tweet?text=" + title + "&url=" + newUrl + "&original_referer=" + url;
        }
        else if (type == "googleplus")
            windowUrl = "https://plus.google.com/share?url=" + url;
        else if (type == "pinterest")
            windowUrl = "https://pinterest.com/pin/create/button/?url=" + url + "&media=" + _image + "&description=" + title;
        else if (type == "whatsapp")
            redirectUrl = "https://api.whatsapp.com/send/?phone&text=" + title + "%20" + url;
        else if (type == "mail")
            redirectUrl = "mailto:?body=" + title + "%0D%0A" + url;
        else if (type == "flipboard")
            windowUrl = "https://share.flipboard.com/bookmarklet/popout?v=2&url=" + url;


        if (redirectUrl) {
            if (redirectUrl.substring(0, 4).indexOf("http") > -1)
                window.open(redirectUrl);
            else
                window.location.href = redirectUrl;
        }
        else if (windowUrl)
            window.open(windowUrl, type + "-share-dialog", "width=626, height=436");
        else
            return false;
    }


    var pageuri = location.pathname.replace(/\/[0-9]+/, "");
    var isGallery = pageuri.indexOf("galeri/") != -1;

    var container = $(
        $(element).parents(".row.frame")[0] ||
        $(element).parents(".row.section")[0] ||
        $(element).parents("article")[0] ||
        $(element).parents(".videoDetailBox")[0] ||
        $(element).parents(".newsContent")[0] ||
        $(element).parents(".news-detail-content")[0] || // sofra
        $(element).parents("[data-container='recipeDetail']")[0] || // sofra
        $(element).parents("[data-container='galleryDetail']")[0] || // sofra
        $(element).parents(".video-detail-top")[0] // sofra
    );

    if (!container.length && !isGallery) return;

    var itemContainer = $($(element).parents(".galleryItem")[0] || $(element).parents(".gallery")[0]);

    var _type = $(element).data("type"),
        _url = $("input[name='Url']", container).val() || window.location.pathname,
        _title = $("input[name='Title']", container).val() || $("h1:first", container).text();

    var _page = parseInt($(".pager:first strong", itemContainer).text().trim());

    var _image = "";
    $("img", container).each(function () {
        if ($(this).width() > 300) {
            _image = $(this).attr("src");
            return false;
        }
    });

    if (isGallery && _page > 1)
        _url += "/" + _page;

    DoShare(_type, _url, _title, _image);
};

base.LoadAfterDom = function () {
    var domElems = document.querySelectorAll('[data-domload]');
    Array.prototype.forEach.call(domElems, function (value, index) {
        var domdata = value.getAttribute("data-domload")
        if (domdata) {
            value.setAttribute("src", domdata)
        }
    });
};
base.MakeSticky = function () {
    //sticky kaldırıldı.
};
base.GetFlashBar = function () {
    if (location.pathname.indexOf("/sofra") > -1 || location.pathname.indexOf("/bebegimvebiz") > -1 || location.pathname.indexOf("/sozluk") > -1) return;
    $.getJSON('/json/getflashbar', function (data) {
        if (data.List.length <= 0)
            return;

        var _html = "";
        _html += "<dl class=\"flashNews\">";
        _html += "  <dt>";
        _html += "      <img src=\"" + GlobalVariables.ImageServer.replace("/v3", "").replace("/v4", "") + "/i/flas2.gif" + GlobalVariables.StaticFilesVersion + "\" width=\"124\" height=\"36\" alt=\"Flaş\" />";
        _html += "  </dt>";

        $.each(data.List, function (index, item) {
            _html += "<dd>";
            _html += "  <a href=\"" + item.Url + "\">" + item.TitleShort + "</a>";
            _html += "</dd>";
        });

        _html += "<dd><a href=\"/son-dakika-haberleri\" class=\"goto\" target=\"_blank\"><span>TÜM SON DAKİKA HABERLERİ</span></a></dd>";
        _html += "</dl>";


        if ($(".extra-navwrapper").length) {
            $(".extra-navwrapper").after(_html);
        }
        else if ($("header").length) {
            $("header").after(_html);
        }
    });
};

//*** INIT İŞLEMLERİ ***//

(function JSInit() {
    base.CheckMobile();

})();


// jQuery ready init
$(function () {
    base.LoginControl();
    base.GetFlashBar();

    $(document).on('click', '#btnHeaderSearch', function () {
        base.HeaderQuickSearch();
    });

    var slickProcess = false;

    $(window).scroll(function () {
        if (!slickProcess) {
            slickProcess = true;
            $(".headlineWriter.type01 ul.slick-initialized:not([data-played]), .headlineCarousel.type01 ul.slick-initialized:not([data-played])").each(function (ix, elem) {
                if (base.IsOnScreen(elem, 100)) {
                    elem.setAttribute("data-played", "true")
                    $(elem).slick('slickPlay');
                }
            });
            slickProcess = false;
        }
    });

    base.LoadAfterDom();
});

/* ========[ global image change function ]============ */
var wWidth;
function globImgChange() {
    wWidth = $(window).width();

    $('.globImgChange').each(function () {
        var _src = $(this).attr('src') == 'c/i/blank.gif' ? 'data-src' : 'src';

        if (wWidth < 768) {
            $(this).attr(_src, $(this).attr('data-simg'));
        }
        else {
            $(this).attr(_src, $(this).attr('data-img'));
        }
    });

}

$(window).scroll(function () {
    globImgChange();
});

$(window).on('load', globImgChange);


function puzzleSrcSet() {
    if (document.getElementById('kare-bulmaca') != null) {
        var puzzleRandom = Math.floor(Math.random() * (178 - 158)) + 157;

        var defaultPuzzle = 157;
        var getPuzzle = localStorage.getItem("RandomPuzzle");

        if (getPuzzle != null) {
            var splitRnd = getPuzzle.split(",");
            if (splitRnd.length > 0 & splitRnd.length < 22) {
                puzzleRandom = splitRnd[splitRnd.length - 1];
            }
            else {
                puzzleRandom = defaultPuzzle;
                localStorage.removeItem("RandomPuzzle");
            }
        }
        else {
            localStorage.setItem("RandomPuzzle", puzzleRandom.toString());
        }

        if (puzzleRandom != null) {
            document.getElementById('kare-bulmaca').src = "https://statics.tmgrup.com.tr/iframe/sabah/bulmaca/" + puzzleRandom + "-5x5.html";
        }


        if (window.location.search.indexOf('sabahbulmaca_web_anasayfa') > -1) {
            document.getElementById("puzzle").focus({ preventScroll: false });
        }

        
        //const urlSearchParams = new URLSearchParams(window.location.search);
        //const params = Object.fromEntries(urlSearchParams.entries());

        //if (params != null && params["utm_source"] != undefined) {
        //    if (params.utm_source == "sabahbulmaca_web_anasayfa") {
        //        document.getElementById("puzzle").focus({ preventScroll: false });
        //    }
        //}

    }
}



function PuzzleNewGame() {
    var puzzleRandom = Math.floor(Math.random() * (178 - 158)) + 157;
    var getPuzzle = localStorage.getItem("RandomPuzzle");
    if (getPuzzle != null) {
        var splitRnd = getPuzzle.split(",");
        for (var i = 0; i < splitRnd.length; i++) {
            var item = splitRnd[i];
            if (puzzleRandom == item) {
                puzzleRandom = Math.floor(Math.random() * (178 - 158)) + 157;
                i = 0;
            }
            else {
                localStorage.setItem("RandomPuzzle", getPuzzle + "," + puzzleRandom.toString());
                break
            }
        }
    }

    window.location.href = "/?utm_source=sabahbulmaca_web_anasayfa&utm_medium=sabahbulmaca_web_anasayfa&utm_campaign=sabahbulmaca_web_anasayfa";
}

$(document).ready(function () {
    $(window).on('resize', globImgChange);
    globImgChange();

    puzzleSrcSet();
    // ie <= 11 control
    var isIE = window.navigator.msPointerEnabled;

    var _failure_limit = (!isIE || $('.column-left').length > 0 || $('.column-right').length > 0) ? Math.max($("img[src='" + _lazyLoadImage + "']").length - 1, 0) : 0,
        _effect = !isIE ? "fadeIn" : "show";

    var $topFrameMenu = $('header .topFrame .menu > ul'),
        $topFrameTopMenu = $('header .topFrame .menuTop > ul'),
        arrCtrl = false,
        arrLocal = 0,
        selectArr = null;

    function selectArrMove(o, s) {

        if ($topFrameMenu.find('li.selected').length > 0) {
            if (!arrCtrl) {
                arrCtrl = true;
                s = selectArr = arrCtrl ? $topFrameMenu.find('li.selected').position().left + ($topFrameMenu.find('li.selected').width() / 2) : null;
            }

            if (o == 0)
                $topFrameMenu.parents('.menu').addClass('current').find('.arrow').css({ left: s, opacity: 1 });
            else if (o == 1)
                $topFrameMenu.removeClass('current').parents('.menu').removeClass('current').find('.arrow').css({ left: selectArr });
        }
    }


    if ($topFrameMenu.find('li.selected').length > 0) {
        arrCtrl = true;
        selectArrMove();
        $topFrameMenu.parents('.menu').find('.arrow').css({ left: selectArr, opacity: 1 });
    }

    $topFrameMenu.find('> li').each(function (index, el) {

        $(this).find('.subMenu > div').is('.listFrame') ? $(this).addClass('list-none') : null;

        $(this).hover(function () {

            arrLocal = $(this).position().left + ($(this).width() / 2);
            selectArrMove(0, arrLocal);


            $(this).addClass('current');

        }, function () {
            selectArrMove(1, arrLocal);

            $(this).removeClass('current').parents('.menu').removeClass('current');

        });

    });


    $topFrameTopMenu.find('> li').each(function (index, el) {
        $(this).hover(function () {
            $(this).addClass('current');
        }, function () {
            $(this).removeClass('current').parents('.menu').removeClass('current');
        });

    });


    selectArrMove(0, 0);

    $(window).scroll(function () {
        arrCtrl = false,
            selectArrMove(0, selectArr);
    });

    $(window).resize(function () {
        arrCtrl = false,
            selectArrMove(0, selectArr);
    });


    $('.sub-menu-title').click(function () {
        $(this).toggleClass('active');
        $(this).parent().find('ul').stop(true).slideToggle();
    });

    var $searchFrameBtn = $topFrameMenu.find(' > li .search'),
        $searchMShareBtn = $('header.sabah-tatil .mediaShare').find('.search'),
        $searchFrame = $('header .searchFrame'),
        $inputBox = $('header .searchFrame .wrapper .endList .inputBox .inputtext'),
        isOpen = false,
        searchFrameTimer,
        searchFrameDelay = 5000;

    function searchFrameClose() {
        $searchFrameBtn.removeClass('show');
        $searchFrame.removeClass('show');
        isOpen = false;
    }

    // $searchFrameBtn.click(function () {
    function searchFrameShow() {
        clearTimeout(searchFrameTimer);
        searchFrameTimer = setTimeout(searchFrameClose, searchFrameDelay);

        if ($('.menuSideBar').hasClass('show')) sideBarClose();

        // $(this).stop().toggleClass('show');

        $searchFrame.stop().toggleClass('show');

        if (isOpen == false) {
            $inputBox.focus();
            isOpen = true;
        } else {
            $inputBox.focusout();
            isOpen = false;
        }
    }
    //});
    $searchMShareBtn.click(function () {
        $(this).stop().toggleClass('show');
        searchFrameShow();
    });

    $searchFrameBtn.click(function () {
        $(this).stop().toggleClass('show');
        searchFrameShow();
    });

    $searchFrame.hover(function () {
        clearTimeout(searchFrameTimer);
    }, function () {
        searchFrameTimer = setTimeout(searchFrameClose, searchFrameDelay);
    });

    /* *************** */
    var sideBarTimer,
        sideBarDelay = 5000,
        meteorMenuW = 170,
        modalCtrl = modalHoverCtrl = meteorCtrl = false,
        headerH,
        modalW,
        modalH,
        menuSideBarH,
        sideNavLocal,
        menuSideBarTop,
        navModalTop,
        $this,
        $nav = $('header'),
        $navModal = $('.nav-modal'),
        $menuSideBar = $('.menuSideBar'),
        $sideBarBtn = $topFrameMenu.find(' > li .sidebar'),
        sideBarMove = true;


    function sideBarClose() {
        $sideBarBtn.removeClass('show');
        $menuSideBar.removeClass('show');
        sideMenuLocation();
    }

    function sideMenuLocation() {

        windowScroll = $(window).scrollTop();
        documentH = $(window).height();

        $('header .bottomFrame').length > 0 ? $menuSideBar.addClass('custom') : null;

        headerH = documentH - (($nav.position().top + $nav.height()) - ($('body').hasClass('sticky') ? 0 : windowScroll));

        $menuSideBar.css({ height: headerH });


        $menuSideBar.find('nav').css({
            'overflow-y': 'auto',
            //height: $menuSideBar.find('nav > ul').outerHeight(true) > headerH
            //    ? (headerH - $menuSideBar.find('.mediaShare').outerHeight(true))
            height: $menuSideBar.find('nav > ul').outerHeight(true) > (headerH - $menuSideBar.find('.mediaShare').outerHeight(true))
                ? (headerH - $menuSideBar.find('.mediaShare').outerHeight(true))
                : 'auto'
        });

    }

    sideMenuLocation();

    $(window).resize(stickyMenuLocation);

    $sideBarBtn.on('click', function () {

        if (sideBarMove) {
            $menuSideBar.appendTo('.header .topFrame');
            sideBarMove = false;
        }

        clearTimeout(sideBarTimer);
        sideBarTimer = setTimeout(sideBarClose, sideBarDelay);

        if ($searchFrameBtn.hasClass('show')) searchFrameClose();

        $(this).stop().toggleClass('show');

        $menuSideBar.stop().toggleClass('show');

        sideMenuLocation();


    });


    function navModalLocal(a, b, c, d, e) {

        if (a <= (b + c)) {

            $navModal.css({ top: 'auto', bottom: e });
            $navModal.find('.modalPointer').css({ top: d - (a - c) });

        }

    }

    $menuSideBar.hover(function () {
        $this = $(this);
        clearTimeout(sideBarTimer);
    }, function () {

        sideBarTimer = setTimeout(sideBarClose, sideBarDelay);

    }).find('nav ').hover(function () {
        //
    }, function () {
        modalHoverCtrl = false;

        $this.stop().delay(200, 'fx').queue('fx', function (next) {

            $(this).removeClass('current');
            if (!modalHoverCtrl) $menuSideBar.removeClass('active').find('.nav-modal').css({ width: 0 });
            next();

        });

    }).find('> ul > li').each(function (index, el) {

        $(this).hover(function () {

            $this = $(this);
            $this.addClass('current');
            sideNavLocal = $this.position().top;

            $this.find('ol').length > 0 || $this.hasClass('meteor') ? modalHoverCtrl = true : modalHoverCtrl = false;
            $this.hasClass('meteor') ? meteorCtrl = true : meteorCtrl = false;

            if (modalHoverCtrl) {

                $navModal.find('ol').remove();
                $navModal.find('.meteorMenu').removeClass('show');

                if (meteorCtrl) {
                    $navModal.find('.meteorMenu').addClass('show');
                    modalW = meteorMenuW;
                } else {

                    $this.find('ol').clone(true).prependTo('.nav-modal .wrapper');
                    modalW = $this.find('ol').outerWidth(true) + 10;
                    $navModal.find('ol').addClass('show');
                }

                $this.parents('.menuSideBar').addClass('active');
                $navModal.width(modalW);
                menuSideBarTop = $menuSideBar.position().top - $menuSideBar.find('.mediaShare').outerHeight(true);
                menuSideBarH = $menuSideBar.outerHeight(true) - menuSideBarTop;
                modalH = $navModal.outerHeight(true);

                if (sideNavLocal < modalH / 2) {

                    $navModal.css({ bottom: 'auto', top: 0 });
                    $navModal.find('.modalPointer').css({ top: sideNavLocal });
                    navModalLocal(menuSideBarH, 0, modalH, sideNavLocal, menuSideBarTop);

                } else if (sideNavLocal >= modalH / 2) {

                    navModalTop = (sideNavLocal - (modalH / 2)) + 20;
                    $navModal.css({ bottom: 'auto', top: navModalTop });
                    $navModal.find('.modalPointer').css({ top: (modalH / 2) - 20 });
                    navModalLocal(menuSideBarH, navModalTop, modalH, sideNavLocal, menuSideBarTop);
                }


                $navModal.hover(function () {

                    $this.addClass('current').clearQueue('fx');

                }, function () {
                    modalHoverCtrl = false;
                    $(this).css({ width: 0 });
                    $menuSideBar.removeClass('active').find('li').removeClass('current');

                });

            }

        }, function () {

            $this.stop().delay(200, 'fx').queue('fx', function (next) {

                $(this).removeClass('current');
                if (!modalHoverCtrl) $menuSideBar.removeClass('active').find('.nav-modal').css({ width: 0 });
                next();

            });

        });
    });

    // Mobile & Responsive Menu

    $(".wrapper").addClass("navobile-content");
    $("body").prepend("<nav class='menu navobile-mobile-only navobile-navigation' id='navobile-navigation'> </nav>");
    $("#navigation > ul").clone().appendTo("#navobile-navigation");

    if ($('[data-bbtrk]').length) {
        var $bbuTrkArea = {};
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 992) {
            $bbuTrkArea = $('.navobile-desktop-only [data-bbtrk]');
        }
        else {
            $bbuTrkArea = $('.navobile-mobile-only [data-bbtrk]');
        }
        $bbuTrkArea.append(BBUFunctions.BForPlatform("CustomMenuItem", "CustomMenuItem"));
    }

    if ($('[data-bbtrk2]').length) {
        var $bbuTrkArea2 = {};
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 992) {
            $bbuTrkArea2 = $('.menuTop [data-bbtrk2]');
        }
        else {
            $bbuTrkArea2 = $('.menuTop [data-bbtrk2]');
        }
        $bbuTrkArea2.append(BBUFunctions.BForPlatform("CustomMenuItem2", "CustomMenuItem2"));

    }

    BBUFunctions.SetElements();


    function mobileMenuAction() {
        $("html, body").removeClass("navobile-bound");
        $("#navobile-navigation").removeClass("navobile-navigation-visible");
        $("#content").removeClass("navobile-content-hidden");
        $(".menu.navobile-navigation > ul > li").find(".subMenu").hide();
        $(".mobilMask").remove();
    }

    $(".show-navobile").click(function () {
        $("html, body").addClass("navobile-bound");
        $("#navobile-navigation").addClass("navobile-navigation-visible");
        $("#content").addClass("navobile-content-hidden");
        $("body").prepend("<div class='mobilMask'></div>");
        $(".mobilMask").click(function () {
            mobileMenuAction();
        });

        $(".mobilMask").swipe({
            threshold: 20,
            swipeLeft: function () {
                mobileMenuAction();
            }
        });
    });

    var navobileCtrl = true;

    // mobile menu dropdown 
    $(".show-navobile").on("click", function () {
        if (navobileCtrl) {
            $(".menu.navobile-navigation > ul > li").each(function () {
                $(this).find('.down').click(function () {
                    $(".menu.navobile-navigation > ul > li").find(' .down > i').removeClass('fa-angle-up').addClass('fa-angle-down');
                    $(".menu.navobile-navigation > ul > li").find(".subMenu").slideUp("fast");
                    if ($(this).parent('li').find(".subMenu").is(':hidden') == true) {
                        $(this).find('> i').removeClass('fa-angle-down').addClass('fa-angle-up');
                        $(this).parent('li').find(".subMenu").slideDown('fast');
                    }
                });
            });
            navobileCtrl = false;
        }
    });

    try {
        $("#navobile-navigation").swipe({
            threshold: 20,
            swipeLeft: function () {
                mobileMenuAction();
            }
        });
    } catch (e) {

    }


    /* sticky menu function */
    try {
        if (location.pathname == "/sofra" || location.pathname.indexOf("/sofra/") > -1) return;

        var $body = $('body'),
            $nav = $('header'),
            $headBanner = $('.headBannerCover'),
            documentH = $(window).height(),
            windowScroll,
            banHeight,
            pageSkinTopCount,
            mobileStickyCtrl = false,
            menuOffset = $nav.offset().top,
            lastScrollTop = 0;

        $nav.wrap('<div class="extra-navwrapper"></div>');
        $headBanner.wrap('<div class="extra-banwrapper"></div>');

        // for mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            if (location.pathname.indexOf("/bebegimvebiz") <= -1) {
                mobileStickyCtrl = true;
                $headBanner.css({ position: 'relative' })
                $nav.css({ position: 'relative', top: '0' });
            }
        }


        function stickyMenuLocation() {
            if (location.pathname == "/sofra" || location.pathname.indexOf("/sofra/") > -1) return;

            menuOffset = banHeight = $headBanner.css('display') == 'none' || $headBanner.css('display') == undefined ? 0 : $headBanner.outerHeight(true);

            $('.extra-banwrapper').css({ height: banHeight });
            $('.extra-navwrapper').css({ height: $nav.outerHeight(true) });

            windowScroll = $(window).scrollTop();

            // if (!mobileStickyCtrl) windowScroll > menuOffset ? $body.addClass("sticky") : $body.removeClass("sticky");

            if ((!mobileStickyCtrl) && windowScroll > menuOffset) {
                $body.addClass("sticky");
            } else {
                $body.removeClass("sticky");
                $('.extra-navwrapper').css({ height: $nav.outerHeight(true) });
            }

            var st = $(this).scrollTop();
            if (st >= 200 && st > lastScrollTop) {
                // downscroll code
                $body.is('.pageHome') ? $body.addClass('fixed') : false;

            } else {
                // upscroll code
                $body.is('.pageHome') ? $body.removeClass('fixed') : false;
            }
            lastScrollTop = st;

            // ------- halkbank 'aklınızdan ne geçiyor' reklam projesi
            if ($('.halkbankANGframe').length > 0) {
                !$body.is(".sticky")
                    ? $('.halkbankANGframe').css({ top: (menuOffset - windowScroll) })
                    : $('.halkbankANGframe').css({ top: 0 });
            }
            // -------- halkbank


            sideMenuLocation();

        }

        $(window).scroll(stickyMenuLocation);

        function setWindow(r) {

            $nav.css({ top: $('.pageSkinTop').length >= 1 && $body.hasClass("sticky") && !mobileStickyCtrl ? $('.pageSkinTop').outerHeight(true) : 0 });

            if (r > 0) {
                setTimeout(setWindow, 250, r - 1);
                stickyMenuLocation();
            }
            else if (r == 0) {

                stickyMenuLocation();
            }
        }

        setWindow(10);



    } catch (err) {

        console.log('err: ', err);
        return false;

    }


    /* viewport set function */
    var viewportCtrl = true, setViewport, viewportNum = 0;

    function viewportOpt() {

        if (!$('body').hasClass('data-mobile')) {

            if ($(window).width() < 769 && viewportCtrl) {
                $('html > head').find('meta[name="viewport"]').attr({ content: 'width=768' });
                viewportCtrl = false;
            }
            else if ($(window).width() >= 769 && !viewportCtrl) {
                $('html > head').find('meta[name="viewport"]').attr({ content: 'width=device-width, initial-scale=1' });
                viewportCtrl = true;
            }


        }
        else if ($('body').hasClass('data-mobile')) {
            $('html > head').find('meta[name="viewport"]').attr({ content: 'width=device-width, initial-scale=1' });
            viewportCtrl = true;

        }


    }



    function loopViewport() {
        viewportNum += 1;
        if (viewportNum >= 10) clearInterval(setViewport);
        viewportOpt();
    }

    setViewport = setInterval(loopViewport, 250);

    $(window).resize(viewportOpt);

});

//*** INIT İŞLEMLERİ ***//

/* ========[ slick slider global mouse over method ]============ */
function SlickInitialize(obj, show) {
    $('.slick-dots li', $(obj)).on('mouseover', function () {
        $('ul.items', $(obj)).slick('slickGoTo', ($(this).index() * show), true);
    });
}

var economy = {};
economy.setStateProp = function (item) {
    var satis = item.dblSatis || item.dblSon;
    var oncekiKapanis = item.dblOncekiKapanis || item.dblOncekiKapanis1;

    var change = satis - oncekiKapanis;
    item.State = change > 0 ? "up" : (change < 0 ? "down" : "normal");
};

/** Array içerisinden istenilen sembollü item'ı döner. **/
economy.getItemBySymbol = function (arr, symbol, setStateData) {
    return arr.filter(function (item) {
        // Varsayılan olarak state (up/down) set edilecek şekilde ayarlandı
        var setState = setStateData || true;
        var isTrue = (item.strKod || item.strSembol) === symbol;
        if (isTrue && !setStateData) {
            //var change = item.dblSatis - item.dblOncekiKapanis;
            //item.State = change > 0 ? "up" : (change < 0 ? "down" : "normal");
            economy.setStateProp(item);
        }
        return isTrue;
    })[0];
};
economy.calculateBarPercent = function (simdiki, endusuk, enyuksek) {
    var sonuc = 0;
    if (simdiki && endusuk && enyuksek) {
        var _dusukfark = simdiki - endusuk;
        var _yuksekfark = enyuksek - simdiki;
        var _toplam = _dusukfark + _yuksekfark;
        sonuc = (_dusukfark / _toplam) * 100;
    }
    return sonuc.toFixed(0);
};
economy.getState = function (item) {
    var satis = item.dblSatis || item.dblSon;
    var oncekiKapanis = item.dblOncekiKapanis || item.dblOncekiKapanis1;

    var change = satis - oncekiKapanis;
    return change > 0 ? "up" : (change < 0 ? "down" : "normal");
};