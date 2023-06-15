/**
* dWidget
* detikTime
* breakingNews
* callSticky
* dFramebar
* dRecShow
* getuseragent smartbanner
**/
var dcInfo  = null,
    dLoop   = 0;

var helper = {
    inview: function (el, sz = "-500")
    {
        let
        percentVisible = sz,
        rect = el[0].getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        return !(
            Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
            Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
    },
    loaded:function (el, val)
    {
        let selector = 'd-loaded';
        if (typeof val == 'undefined')
        {
            return el.attr(selector)
        }
        return el.attr(selector, 1)
    },
    getextention: function(value)
    {
        return value.split('.').pop();
    },
    loadscript: function (src)
    {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        $("head").append(s);
    },
    setimage: function(src, title, ratio='169', qs='', _class = '', urlonly = false, attrs = '')
    {
        if(typeof src == 'undefined') {
            return;
        }
        try{
            if(src.indexOf('/visual/') != -1) {
                if (!helper.is20dtk(baseurl)) {
                  src = src.replace(/\_[0-9]+/, '_' + ratio) + qs;
                  if(src.indexOf('_' + ratio) == -1) {
                      let ext = helper.getextention(src);
                      src = src.replace('.' + ext, '_' + ratio + '.' + ext );
                  }
                }
            }

            if (helper.is20dtk(baseurl) && src.indexOf('/videoservice/') != -1) {
                src = src + qs;
            }

            if(urlonly) {
                return src;
            }
        }catch(e){}

        // convert to HTML attributes
        if (typeof attrs == 'object') attrs = Object.keys(attrs).map(key => key + '="' + attrs[key] + '"' ).join(' ');
        else attrs = '';

        return '<img src="'+ src +'" title="'+ title +'" alt="'+ title +'" class="'+ _class +'" '+ attrs +'/>';
    },
    timeago: function (timestamp) {
        var suffix  = ' yang lalu';
        var date    = timestamp * 1000;
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return false;
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + " jam" + suffix;
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + " menit" + suffix;
        }
        return "0 menit" + suffix;
    },
    prettydate: function(_date)
    {
        let _month = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'Desember'
        ];
        let _day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

        var offs = new Date().getTimezoneOffset();
        var diff = offs * 60000;
        var rec = _date + diff;
        var _ndate = new Date(rec);

        let h = _day[_ndate.getDay()];
        let b = _month[_ndate.getMonth()];

        return h + ', ' + this.addzero(_ndate.getDate()) + ' ' + b.slice(0,3) + ' ' + _ndate.getFullYear() + ' ' +
        this.addzero(_ndate.getHours()) + ':' + this.addzero(_ndate.getMinutes()) + ' WIB';
    },
    loop:function (callback, interval, max_loop) {
        callback();
        var time = 1;
        var _interval = setInterval(function() {
            if (time < max_loop) {
                callback()
                time++;
            }
            else {
                clearInterval(_interval);
            }
        }, interval);
    },
    addzero: function(i)
    {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    },
    ismobile: function()
    {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true;
        }
        return false;
    },
    set_paneltracking: function(name, title, type, obj, is_new)
    {
        var append_obj = '';
        if(obj !== '' && typeof obj !== 'undefined') {
            append_obj = ', ' + obj + '';
        }
        return (is_new) ? '_pt(this)' : '_pt(this, "' + name + '", "' + title + '", "' + type + '"' + append_obj + ')';
    },
    dev_user: function()
    {
        var match = window.location.href.match(/~\w*/g)
        if (match) {
            return match[0] + "/"
        }

        if ( (typeof DEVEL_USER) != 'undefined' ) {
            return `~${DEVEL_USER}/`;
        }

        return ""
    },
    isdevel: function()
    {
        return this.dev_user() != ""
    },
    imageloaded: function(el)
    {
        var $imgs = el.find('img[src!=""]');
        if (!$imgs.length) {return $.Deferred().resolve().promise();}

        var dfds = [];
        $imgs.each(function(){

            var dfd = $.Deferred();
            dfds.push(dfd);
            var img = new Image();
            img.onload = function(){dfd.resolve();}
            img.onerror = function(){dfd.resolve();}
            img.src = this.src;

        });
        return $.when.apply($,dfds);
    },
    ws: function (url, callback)
    {
        if(window.WebSocket)
        {
            if (helper.isdevel())
            {
                url += '_dev';
            }
            helper.log('ws: listening to', url);
            var ws = new WebSocket(url);
            ws.onopen = function(){helper.log('ws:','is open')};
            ws.onmessage = function(me)
            {
                helper.log('ws result:', me);
                callback(me.data);
            }
        }
    },
    log: function (...data)
    {
        if (!this.isdevel()) {
            return;
        }
        console.log('detikjs', ...data);
    },
    lqd_img: function(i)
    {
        var d = $(i);
        $(d).each(function(d) {
            var a = $(this).find("img").attr("src");
            i.indexOf('.lqd_block') != -1 ? $(this).append('<div class="lqd_img" style="background-image:url(' + a + ');"></div>') : ($(this).find("img").hide(), $(this).css("background-image", "url(" + a + ")"))
        })
    },
    login_serv: function()
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        	if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.response);
        		return res.status;
        	}
        };
        xhttp.open("POST", baseurl + '/ajax/is_login', true);
        xhttp.send();
    },
    getuseragent: function()
    {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "Android";
    },
    current_uri: function(key)
    {
        var urlwoqs = window.location.href;
        var q = urlwoqs.indexOf(key);
        var w = urlwoqs.substring(q);
        var e = urlwoqs.replace(w,"");
        return (e !== '') ? e : urlwoqs;
    },
    randomize: function(obj)
    {
        $.each(obj, function(i, v){
            let j = i + Math.floor(Math.random() * (obj.length - i));
            let temp = obj[j];
            obj[j] = obj[i];
            obj[i] = temp;
        });

        return obj;
    },
    get_the_user: function()
    {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 1000);
        }).then(function() {
            return dcInfo;
        });
    },
    sitename: function (url)
    {
        var urlInstance = new URL(url);
        var hostname = urlInstance.hostname;
        var pathname = urlInstance.pathname;
        var explodeStr = hostname.split('.');
        var segments = pathname.split('/');

        if (hostname == 'sport.detik.com') {
            if (segments[1] == 'sepakbola') {
                return 'Sepakbola';
            }
        }

        switch (segments[1]) {
            case 'edu': return 'detikEdu';
            case 'jateng': return 'detikJateng';
            case 'jatim': return 'detikJatim';
            case 'jabar': return 'detikJabar';
            case 'sulsel': return 'detikSulsel';
            case 'sumut': return 'detikSumut';
            case 'bali': return 'detikBali';
            case 'hikmah': return 'detikHikmah';
            case 'sumbagsel': return 'detikSumbagsel';
        }


        if (explodeStr.length == 3) {
            var singleName = ['wolipop'];
            var siteDomain = explodeStr[1];
            var subDomain = explodeStr[0];
            var ucFirst = subDomain.charAt(0).toUpperCase() + subDomain.slice(1);

            if (['20', 'tv'].indexOf(subDomain) !== -1) {
                return '20Detik';
            }

            if (singleName.indexOf(subDomain) !== -1) {
                return ucFirst;
            }

            return siteDomain + ucFirst;
        }

        return 'detikcom';
    },
    deferrer_rec: async function (el) {
        var deferrer = new Promise(function (resolve) {
            var counter = 0;

            var defaultdsrec = {
                'src': 'internal',
                'url': helper.endpoint_rec(baseurl, dWidget.rec_source(el)),
            };


            var waitForElement = function () {
                console.log('[portal][listen-rec] : wait');
                console.log('[portal][type-rec] : ', dWidget.rec_source(el));

                // json from gtm found...!!!
                if (
                    typeof window.dsrec !== 'undefined'
                    && typeof window.dsrec[dWidget.rec_source(el)] !== "undefined"
                ) {
                    console.log('[portal][listen-rec] : done');
                    var dsrec = window.dsrec[dWidget.rec_source(el)];

                    // if dsrec prop is an array, randomize the element.
                    if ($.isArray(dsrec)) {
                        var randdsrec = dsrec[Math.floor(Math.random() * dsrec.length)];
                        // make sure the attribute is correct and has value
                        if (
                            typeof randdsrec.url !== "undefined"
                            && typeof randdsrec.src !== "undefined"
                        ) {
                            return resolve(randdsrec);
                        }

                        // dsrec found but the property of object is incomplete, give default
                        return resolve(defaultdsrec);
                    }

                    // make sure the attribute is correct and has value
                    if (
                        typeof dsrec.url !== "undefined"
                        && typeof dsrec.src !== "undefined"
                    ) {
                        return resolve(dsrec);
                    }

                    // dsrec found but the property of object is incomplete, give default
                    return resolve(defaultdsrec);

                    // loop under available treshold, request again
                } else if (counter <= 9) {
                    counter++;
                    console.log('[portal][listen-rec] : count..', counter);
                    return setTimeout(waitForElement, 500);
                }

                // request exceed than given, give default
                console.log('[portal][listen-rec] : limit exeeded');
                return resolve(defaultdsrec);
            }

            // wait and request again json from gtm
            waitForElement();
        });

        return await deferrer.then(function (dsrec) {
            return [dsrec, dWidget.rec_source(el)];
        });

    },
    endpoint_rec: function (url, type_rec = 'dsrec')
    {
        var rec_slug = 'article-recommendation/keywordsxchannelsandtagsmospopxchannels/';
        var rec_dtk = '//recg.detik.com/' + rec_slug;
        var rec_20 = '//recg20.detik.com/' + rec_slug;

        if (helper.is20dtk(url) == true) {
            return rec_20;
        }

        return rec_dtk;

    },
    is20dtk: function(url)
    {
        if( url.indexOf('20.detik.com') > -1 )
        {
            return true;
        }
        return false;
    },
    duration_pretty: function(second)
    {
       // handle empty second
       if ( second.toString().length <= 0 || second == 0 ) return '';

       var sec_num = parseInt(second, 10);
       var hours   = Math.floor(sec_num / 3600);
       var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
       var seconds = sec_num - (hours * 3600) - (minutes * 60);

       if (hours   < 10) { hours   = '0' + hours; }
       if (minutes < 10) { minutes = '0' + minutes; }
       if (seconds < 10) { seconds = '0' + seconds; }

       return ( hours == '00' ? '' : (hours + ':') ) + minutes  + ':' + seconds;
   },
}

jQuery.fn.extend({
    detikTime: function() {
        var t = $(this)
        helper.loop(function(){
            t.each(function (i, v) {
                var _this = $(v), time = _this.attr('d-time'), pretty = _this.attr('title'), timeago = helper.timeago(time)
                if (timeago != false) {
                    _this.text(timeago);
                }else{
                    _this.text(pretty);
                }
            })
        }, 60*1000, 10)
    }
})

var breakingNews = {
    title:document.title,
    init:function () {
        try {
            this.cek_live();
        } catch (e) {
            helper.log(e);
        }
    },
    cek_live: function() {
        $.getJSON(`https://tv.detik.com/${helper.dev_user()}statuslive/wpnewsfeed_2`, function(data_bn){
            //disable refresh
            $.getJSON(`https://tv.detik.com/${helper.dev_user()}statuslive/livestreaming`, function(data_ls){

                $.getJSON(`https://tv.detik.com/${helper.dev_user()}statuslive/livestreaming_sponsorship`, function(data_sp){
                    var disable_refresh_bn = false
                    var disable_refresh_ls = false
                    var disable_refresh_sp = false

                    if (data_bn) {
                        if (data_bn.status == "off") {
                            disable_refresh_bn = false
                        } else if (data_bn.status == "on" && data_bn.disablerefresh == "off") {
                            disable_refresh_bn = false
                        } else {
                            disable_refresh_bn = true
                        }
                    }

                    if (data_ls) {
                        if (data_ls.status == "off") {
                            disable_refresh_ls = false
                        } else if (data_ls.status == "on" && data_ls.disablerefresh == "off") {
                            disable_refresh_ls = false
                        } else {
                            disable_refresh_ls = true
                        }
                    }

                    if (data_sp) {
                        if (data_sp.status == "off") {
                            disable_refresh_sp = false
                        } else if (data_sp.status == "on" && data_sp.disablerefresh == "off") {
                            disable_refresh_sp = false
                        } else {
                            disable_refresh_sp = true
                        }
                    }

                    if ((disable_refresh_bn) || (disable_refresh_ls) || (disable_refresh_sp)) {
                        console.log("[portal]: breaking news no refresh");
                    }else{
                        console.log("[portal]: breaking news refresh");
                        // breakingNews.refresh_page()
                        dRefresh.init()
                    }
                })
            })
        })
    },
    refresh_page: function(){
        setTimeout(function() {
            if (helper.isdevel())
            {
                location.reload(false)
            }
            else
            {
                window.location.href = "https://www.detik.com/";
            }
        }, 15*60*1000);
    }
}

var dRefresh = {
    time: 15*60*1000, // 15 minutes
    idtimeout:null,
    init: function() {
        helper.log("drefresh", "init")
        this.start(this.time)
    },
    start: function(time){
        this.idtimeout = setTimeout(function() {
            if (helper.isdevel())
            {
                location.reload(false)
            }
            else
            {
                window.location.href = "https://www.detik.com/";
            }
        }, time);
        helper.log("drefresh started", this.idtimeout, time)
    },
    stop: function() {
        clearTimeout(this.idtimeout)
        helper.log("drefresh stoped", this.idtimeout)
    }
}

var dNotif = {
    el:$('#notification_newsfeed'),
    title:document.title,
    init:function(){
        if (this.el.length) {
            this.listen();
        }
    },
    listen:function() {
        var url = 'wss://push.detik.com/ws/wpnewsfeed_'+channel_id;
        helper.ws(url, function (data) {
            helper.log('dnotif listen:', data);
            if(data)
            {
                var d = JSON.parse(data)
				if(typeof d.type != 'undefined')
                {

                    var site_id_with_breakingnews = [
                        '2',
                        '120',
                        '118',
                        '119',
                        '121',
                        '122',
                        '123',
                    ];

					if(d.type == 'breakingnews' && site_id_with_breakingnews.includes(site_id))
                    {
                        dNotif.breaking(d)
					}
				}
				else
                {
                    dNotif.show(d.count);
                    $(window).trigger('scroll');
				}
            }
        })
    },
    breaking:function(d) {
        if (d.status == 'on' || d.status == 'off') {
            dNotif.refresh();
        }
    },
    refresh:function () {
        setTimeout(function(){
            location.reload(false);
        }, 10000);
    },
    show:function(c) {
        var notif = this.el;
        var count = $('#count_newsfeed');
        var current_count = parseInt(count.text());
        var new_count = current_count + c;
        count.text(new_count)
        // document.title = '('+new_count+') '+ this.title;
        $(window).on('scroll', function() {
            helper.log('dNotif: scrolled');
            if (!notif.is(':visible') && $(window).scrollTop() >= $('.section.nhl').offset().top)
            {
                if(notif.attr('popup-notif') == 'enable')
                {
                    helper.log('dNotif: fadein');
                    notif.fadeIn();
                }
            }
        })
    }
}

var dLvr = {
    el: $('.livereport_notif'),
    title:document.title,
    count: $('#count_lvr'),
    init: function() {
        helper.log('push channel:',ARTICLE.pushChannel);
        if(typeof ARTICLE !== 'undefined'){
            this.listen(ARTICLE.pushChannel);
        }
    },
    listen: function(channel) {
        var url = 'wss://push.detik.com/ws/'+channel;
        helper.ws(url, function(data) {
            helper.log('livereport data:', data)
            if (data) {
                var d = JSON.parse(data)
                var current_count = parseInt(dLvr.count.text());
                var new_count = current_count + d.count;
                helper.log('current, new: ', current_count, new_count);
                dLvr.count.text(new_count);
                document.title = '('+new_count+') '+ dLvr.title;
                dLvr.el.fadeIn('slow');
            }
        })
    }
}

var dWidget = {
    elm: 'd-widget',
    rec: helper.endpoint_rec(baseurl),
    app: ( ( typeof baseurl !== 'undefined' ) ? baseurl : base_url ) + '/ajax/',
    _method: 'GET',
    init: function()
    {
        $('[' +dWidget.elm+ ']').each(function (i,v) {
            dWidget.create($(this));
        })
    },
    create: function(el)
    {
        var attr_rec = el.attr('d-recommendation'),
        attr_rec_wp = el.attr('d-recommendation-wp'),
        appurl = this.app + this._name(el) + this._flush(),
        params = ( el.attr('d-params')) ? el.attr('d-params' ) : {},
        is_rec_detail = ( typeof attr_rec !== typeof undefined && attr_rec !== false ) ? true : false,
        is_rec_wp = ( typeof attr_rec_wp !== typeof undefined && attr_rec_wp !== false ) ? true : false,
        is_rec = is_rec_wp || is_rec_detail ? true : false,
        type_rec = is_rec_wp ? 'wp' : 'detail';

        this._create(el, appurl, params, is_rec, type_rec);

    },
    _flush: function()
    {
        var qs = new URLSearchParams(window.location.search),
            fl = (qs.has('flush') ? '?flush' : ''),
            dv = (qs.has('device') ? '?device=' + qs.get('device') : ''),
            pr = fl + dv;

        if((pr.split('?').length - 1) > 1)
        {
            pr = pr.replace(/\?([^?]*)$/, '&' + '$1');
        }

        return pr;
    },
    _params: function(el) {
        return ( el.attr('d-params') ) ? el.attr('d-params') : {};
    },
    _name: function(el)
    {
        return el.attr(dWidget.elm);
    },
    _create: function(el, appurl, params, is_rec, typerec = 'detail')
    {
        if (is_rec) {

            if (helper.loaded(el)) {
              return;
            }

            // displays on load event
            helper.loaded(el, 1);
            this.rec_get(el, typerec);

            return;
        }

        if(!helper.inview(el) || helper.loaded(el)){
            return;
        }

        helper.loaded(el,1)

        if( typeof is_rec !== typeof undefined && is_rec !== false ) {
            this.rec_get(el, typerec);
        } else {
            this._request({
                url: appurl,
                type: dWidget._method,
                data: {param : params},
                success:function(response ){
                    dWidget._generate(response, el)
                },
                fail:function(xhr, status, errorthrown){
                    dWidget._failed(xhr, status, errorthrown)
                }
            });
        }
    },
    _append: function(el, res)
    {
        el.html(res.html);
        try {
            var _cell = el.attr(dWidget.elm);
            helper.lqd_img('div['+dWidget.elm+'='+_cell+'] .lqd');
            if(res.html.indexOf('lqd_block') !== -1)
            {
                helper.lqd_img('div['+dWidget.elm+'='+_cell+'] .lqd_block');
            }

            $(".lqd").imgLiquid();

            setTimeout(function(){
                helper.log('__',this.complete);
                $(document.body).trigger("sticky_kit:recalc");
            },3000);
        } catch (e) {}
        dWidget._aftergenerate(el);
    },
    _generate: function(res, el)
    {
        var is_image = $(res.html);
        if (is_image.find('img').length>0) {
            is_image.find('img').each(function() {
                var tmpImg = new Image();
                tmpImg.src = $(this).attr('src');
                tmpImg.onload = function() {
                    dWidget._append(el, res);
                };
                tmpImg.onerror = function() {
                    dWidget._append(el, res);
                }
            });
        }else{
            this._append(el, res);
            $(document.body).trigger("sticky_kit:recalc");
        }
    },
    _aftergenerate: function(el)
    {
        el.find('[d-time]').detikTime();
        this._refreshads(el);
        this._hoveredimg(el);
    },
    _hoveredimg: function(el)
    {
        if(el.find('.block-link').length !== -1) {
            setTimeout(function(){
                helper.imageloaded(el).then(function(){
                    el.find('.block-link').hover(function(){
                        $(this).toggleClass("block-link--hover");
                    })
                });
            }, 500)
        }
    },
    _refreshads: function(el)
    {
        let ads = el.find('ins').length;
        if(ads > 0) {
            try {
                window.reviveAsync["0cceecb9cae9f51a31123c541910d59b"].refresh();
            } catch (e) { helper.log('___',e); }
        }
    },
    _failed: function(xhr, status, errorthrown)
    {
        helper.log('__xhr',xhr);
        helper.log('__status',status);
        helper.log('__errorthrown',errorthrown);
    },
    _limit: function()
    {
        return ( $('meta[name=platform]').attr("content") == 'desktop' ) ? 6 : 4;
    },
    rec_source: function(el) {
        // set detail as default
        if (typeof el.attr('d-rec-src') == 'undefined') return 'detail';

        // backward compatibility
        switch (el.attr('d-rec-src')) {
            case 'dsrecwp':
                return 'newsfeed';
            case 'dsrecsticky':
                return 'sticky';
        }

        return el.attr('d-rec-src');
    },
    rec_get: async function(el, typerec = 'detail')
    {
        var dtma = this._dtma(),
            size = ( el.attr('d-rec-size') ) ? el.attr('d-rec-size') : this._limit(),
            excids = $('meta[name="articleid"]').attr('content'),
            acctyp = $('meta[name="dtk:acctype"]').attr('content');

        if (helper.is20dtk(baseurl)) {
            return this._request({
                url: this.rec + dtma + '?size=' + size + '&excludeProgId=170724519,190313542' + '&nocache=1',
                type: 'GET',
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json',
                success:function(data) {
                    dWidget.rec_pull(data, el);
                }
            });
        }

        var [dsrec, key] = await helper.deferrer_rec(el);
        console.log(`[portal][src-rec-ab_${key}] : done.`, dsrec);
        var trcname = (typeof dsrec.tracking_rec !== 'undefined') ? dsrec.tracking_rec : 'internal';

        switch (dsrec.src) {
            case 'bytedance':
                var loc = {};
                var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

                var meta = {
        			'reqId': MD5('bytedance'+Date.now()),
        			'appkey': '58399ee40738706045e0b81e902f3f94',
        		};
        		meta.nonce = Date.now();
        		meta.sign = MD5('Nzc0Njc4NGZkYWQ2ZDgxNWUwMzE5ZGY3NjQ4YzEyYWI' + meta.appkey + meta.nonce).toUpperCase();
                if (typeof localStorage !== 'undefined') {
                // var tokenKey = helper.isdevel() ? '252707' : '226201';
                   var tokenKey = '226201';
                   var tokenCache = JSON.parse(localStorage.getItem('__tea_cache_tokens_' + tokenKey));
                   loc.uid = [tokenCache.web_id, tokenCache.user_unique_id].join('$##$');
                }

                var payload_rec = {
                    reqId: meta.reqId,
                    user: loc,
                    rec: {
                        extra : {
                            platform: (helper.ismobile()) ? "wap" : "web",
                            subsitename: document.querySelector('meta[property="og:site_name"]').content,
                        }
                    },
                    size: parseInt(size),
                };

                if (typeof itp_include_filter_categories !== 'undefined') {
                    payload_rec.rec.extra.include_filter_categories = itp_include_filter_categories;
                }

                if (typerec == 'detail') {
                    payload_rec.rec.extra.parent_good_id = `alldetik_${document.querySelector('meta[name~="dtk:articleid"]').content}`, //the current article ID you are calling the API from;
                    payload_rec.rec.extra.parent_good_title = document.title;
                    payload_rec.rec.extra.parent_good_tags = document.querySelector('meta[name~="keywords"]').content
                        .replace(/\,/g,"$##$");
                    payload_rec.rec.extra.parent_good_cate = document.querySelector('meta[name~="kanalid"]').content
                        .split('-')
                        .slice(-2)
                        .join("$##$");
                }

                var client = $.ajax({
                    type: "POST",
                    url: dsrec.url,
                    headers: {
                        "metadata": JSON.stringify(meta),
                        "Content-Type": "application/json",
                    },
                    data: JSON.stringify(payload_rec),
                }).then(function (response) {

                    var items = []
                    var responseArticles = response.value.data

                    items = responseArticles.map(function (row) {
                        var imgUrl = row.extra.image_url
                        var arrImages = imgUrl.split('$##$')

                        if (arrImages.length > 1) {
                            imgUrl = arrImages[0]
                        }

                        var id_bd = row.idStr.split("_");
                        if (typeof id_bd[1] !== 'undefined') {
                            id_bd = id_bd[1];
                        }

                        return {
                            articleurl: row.extra.article_url,
                            desktopurl: row.extra.article_url + '?bytedance=true',
                            id: id_bd,
                            imageurl: imgUrl,
                            title: row.extra.title,
                            unixtime: parseInt(row.extra.pub_time + '000')
                        }
                    })

                    return {body: items}
                }).then(function (data) {
                    dWidget.rec_pull(data, el, trcname);
                });
                break;
            case 'internal':
                var client = {
                    url: dsrec.url + dtma + '?size=' + size + '&nocache=1&ids=' + excids + "&acctype=" + acctyp,
                    type: 'GET',
                    xhrFields: {
                        withCredentials: true
                    },
                    dataType: 'json',
                    success:function(data) {
                        dWidget.rec_pull(data, el, trcname);
                    }
                };

                if (typeof itp_internal_included_channels !== 'undefined') {
                    client.type = 'POST';
                    client.data = JSON.stringify({
                        excludeChannels: [],
                        includeChannels: itp_internal_included_channels,
                    });
                    client.contentType = "application/json; charset=utf-8";

                }

                this._request(client);
                break;
        }
    },
    rec_pull: function(datarec, el, datasrc = "internal")
    {
        let params = dWidget._params(el);
        dWidget._request({
            url: dWidget.app + dWidget._name(el) + dWidget._flush(),
            type: 'GET',
            dataType: 'json',
            data: {param : params},
            success:function(response) {
                dWidget.rec_generate(response, el, datarec, datasrc);
            }
        });
    },
    rec_generate: function(resapp, el, rec, datasrc)
    {
        if(typeof rec.body !== 'undefined') {
            let pf      = '_itp';
            let _pfx    = 'd-panel-';
            let _attr   = ['name', 'type', 'disable-source'];
            let _numb   = '[pt_number]';
            let _types  = 'artikel';
            let _panel  = 'berita rekomendasi';
            let _sec    = '';
            let _act    = '';
            var the_data= {};
            var firrec  = 'recommendation_firstrow';
            var secrec  = 'recommendation_secondrow';

            el.attr('d-recsource', datasrc);

            el.html(resapp.html).hide();

            the_data = rec.body;

            $.each(the_data, function(index, item) {
              if(typeof index !== 'undefined'){
                let is = '#rec_loop_' + index + ' .rec_';
                let newtrc = false;

                $(el).find(is + 'title' + pf).html(decodeURIComponent(encodeURIComponent(unescape(item.title))));
                $(el).find(is + 'subtitle' + pf).text((helper.is20dtk(baseurl)) ? item.programname : helper.sitename(item.articleurl));

                if( helper.is20dtk(baseurl) == true) {
                    $(el).find(is + 'duration' + pf).replaceWith(helper.duration_pretty(item.duration));
                }

                let panel   = $(el).find(is + 'link' + pf);
                let _source = '{"source_rekomendasi":"' + item.type + '"}';

                if(typeof panel.attr(_pfx+'name') !== 'undefined')
                {
                  _panel = panel.attr(_pfx+'name');
                }
                if(typeof panel.attr(_pfx+'section') !== 'undefined')
                {
                  _sec = panel.attr(_pfx+'section');
                }
                if(typeof panel.attr(_pfx+'action') !== 'undefined')
                {
                  _act = panel.attr(_pfx+'action');
                }
                if(typeof panel.attr(_pfx+'type') !== 'undefined')
                {
                  _types = panel.attr(_pfx+'type');
                  if(_types.indexOf(_numb) != 1)
                  {
                    _types = _types.replace(_numb, (index+1));
                  }
                }
                if(typeof panel.attr(_pfx+'disable-source') !== 'undefined')
                {
                  _source = '';
                }
                if(typeof panel.attr(_pfx+'newtrc') !== 'undefined' && panel.attr(_pfx+'newtrc') == 'true')
                {
                  newtrc = panel.attr(_pfx+'newtrc');
                }

                $(el).find(is + 'link' + pf).attr({
                  // 'href': (helper.ismobile()) ? item.mobileurl : item.desktopurl,
                  'href': (helper.is20dtk(baseurl)) ? item.videourl : item.desktopurl,
                  'onclick': helper.set_paneltracking(
                    _panel,
                    item.title,
                    _types,
                    _source,
                    newtrc
                  )
                });

                if(newtrc)
                {
                    $(el).find(is + 'link' + pf).attr({
                        'dtr-evt': _panel,
                        'dtr-sec': _sec,
                        'dtr-act': _act != '' ? _act : _panel,
                        'dtr-idx': (index+1),
                        'dtr-ttl': item.title,
                        'dtr-id': item.id,
                        'dtr-src': datasrc
                    });
                    (el).find(is + 'link' + pf).removeAttr(_pfx+'newtrc');
                    (el).find(is + 'link' + pf).removeAttr(_pfx+'section');
                    (el).find(is + 'link' + pf).removeAttr(_pfx+'action');
                }

                try{
                  let wo_rep = $(el).find(is + 'resume_woreplace' + pf);
                  if(wo_rep.length > 0) {
                    wo_rep.text(item.resume);
                  } else {
                    $(el).find(is + 'resume' + pf).replaceWith(item.resume);
                  }
                }catch(e){}

                let el_img = $(el).find(is + 'image' + pf);
                let ratio = el_img.data('ratio');
                let qs = el_img.data('qsimg');

                let attrs = { };
                if (item.animated) attrs['data-thumbnail'] = item.animated;

                $(el).find(is + 'image' + pf).replaceWith(
                  helper.setimage(item.imageurl, item.title, ratio, qs, '', false, attrs)
                );
                $.each(_attr, function(i, val) {
                  $(el).find(is + 'link' + pf).removeAttr(_pfx + val);
                });
              }
            })
            setTimeout(function(){
                $('article[id^="rec_loop_"]').each(function(i, el){
                    if($(el).find('.rec_link_itp').attr('href') == '#') {
                        el.remove();
                    }
                    if(helper.ismobile()) {
                        if(i <= 1) {
                            $(el).addClass(firrec);
                        } else {
                            $(el).addClass(secrec);
                        }
                    } else {
                        if(i <= 2) {
                            $(el).addClass(firrec);
                        } else {
                            $(el).addClass(secrec);
                        }
                    }
                });
            }, 1000)
            try {
                liquid_img();
                $(".lqd").imgLiquid();
            } catch (e) {}
            el.show();
            setTimeout(function(){
                dWidget._refreshads(el);
            }, 1000);
        }
    },
    _request: function(args)
    {
        $.ajax(args);
    },
    _dtma: function()
    {
        var key = '__dtma',
        match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
        if ( match ) {
            var _d = match[2].split('.');
            var _dtma = _d[0] + '.' + _d[1] + '.' + _d[2];
            return _dtma;
        }
        else{
            return '-';
        }
    }
}

var callSticky = {
    setsticky: function()
    {
        var time = 1;
        var interval = setInterval(function() {
            if (time <= 10) {
                $(document.body).trigger("sticky_kit:recalc");
                time++;
            }
            else {
                clearInterval(interval);
            }
        }, 1000);
    }
}
var dNewsfeed = {
    elm: '.article_inview',
    prefix: 'i-',
    att: ['title','img','info','link','img-ratio','img-qs','subtitle','type'],
    identify: 'loop',
    appendclass: 'd-append-class',
    allow_html: ['ai_title'],
    init: function()
    {
        $(dNewsfeed.elm).each(function (i,v) {
            dNewsfeed.show($(this));
        })
    },
    show: function(el)
    {
        if(!helper.inview(el) || helper.loaded(el)){
            return;
        }

        helper.loaded(el,1)

        var loop = el.attr(this.prefix + this.identify);
        var article = $(dNewsfeed.elm + '[' + this.prefix + this.identify + '=' + loop + ']');
        var allowed_html = dNewsfeed.allow_html;

        $(el).find('[class^="ai_replace_"]').each(function(i,v){
            var className   = this.className.match(/ai_replace_\w+/);
            var finder      = className[0].replace('replace_', '');
            var type_rep    = article.find("."+className[0]);
            var replacer    = (allowed_html.indexOf(finder) != -1) ? type_rep.html() : type_rep.text();
            article.find("."+finder).replaceWith(replacer);
        });

        try {
            var sbtitle = article.attr('i-subtitle');
            article.find('.ai_subtitle').replaceWith(sbtitle);
        } catch(e){}

        var title = article.find('.ai_replace_title').text().trim().replace(/\"/g,"'");
        this.appendimg(article, title);

        var info = article.attr('i-info');
        article.find('.ai_info').replaceWith(info);

        this.appendpt(article, title);

        try {
            let ca = el.find('[d-append-class]');
            if(typeof ca !== 'undefined') {
                el.find('[' + dNewsfeed.appendclass + ']').each( function (i, v) {
                    setTimeout(function(){
                        $(v).addClass(
                            $(v).attr(dNewsfeed.appendclass)
                        );
                        helper.imageloaded(el).then(function(){
                            el.find('.block-link').hover(function(){
                                $(this).toggleClass("block-link--hover");
                            })
                        });
                    }, 500)
                });
            }
            el.find('.ai_toggle').each(function(i,v)
            {
                $(v).show();
            })
        }catch(e){}

        this.removeel(article);
    },
    removeel: function(e)
    {
        helper.log('___',e);
        e.find('[d-time]').detikTime();
        $.each(this.att, function(i, val) {
            e.removeAttr(dNewsfeed.prefix + val);
        });
        $(e).find('[class*="ai_replace_"]').each(function(){
            $(this).remove();
        });
        e.find('.media__date').removeClass('ph-date');
        e.find('.media__text').removeClass('ph-item');
        e.find('.block-link').removeClass('ai_link');
        e.find('.media__link').removeClass('ai_link');
    },
    appendpt: function(e, title)
    {
        var box  = (typeof e.attr('i-box') !== 'undefined') ? e.attr('i-box') : 'newsfeed';
        var type = (typeof e.attr('i-type') !== 'undefined') ? e.attr('i-type') : 'artikel';
        var dtre = (typeof e.attr('i-dtre') !== 'undefined') ? e.attr('i-dtre') : false;
        var link = e.attr('i-link');
        e.find('.ai_link').attr({
            'href': link,
            'onclick': helper.set_paneltracking(
                box,
                title,
                type,
                '',
                dtre
            )
        });
    },
    appendimg: function(e, title)
    {
        let img = e.attr('i-img');
        let ratio = e.attr('i-img-ratio');
        let defaultimg = 'https://cdn.detik.net.id/detik2/images/default-'+ratio+'.gif';
        if( typeof img == 'undefined' || img == '' ) {
            img = defaultimg;
        }
        let qs = e.attr('i-img-qs');
        if(e.find('.ai_original_img').length == 0) {
            var _img = helper.setimage(img, title, ratio, qs, '', true);
        } else {
            var _img = img + qs;
        }
        var __img = new Image();
        __img.src = _img;
        __img.style = 'display:none';
        __img.onload = function() {
            setTimeout(function(){
                dNewsfeed.print_img(e, _img);
                e.find('.ai_img').replaceWith(__img);
            }, 500);
        };
        __img.onerror = function() {
            setTimeout(function(){
                dNewsfeed.print_img(e, defaultimg);
                e.find('.ai_img').replaceWith(__img);
            }, 500)
        }
    },
    print_img: function(e, img)
    {
        e.find('.ai_lqd').css('background-image','url(' + img + ')');
        e.find('.ratiobox').removeClass('ph-item');
    }
}

var dFramebar = {
    init: function ()
    {
        if(!helper.ismobile()) {
            helper.loadscript('https://cdn.detik.net.id/assets/js/framebar/jquery.autocomplete.js');
        }

        this.dc_get()
        $('#search_navbar input[type="text"]').focus(function() {
            dFramebar.auto_complete($(this));
        });
    },
    oncomplete: function () {
        $('.dtkframebar__user__login').removeAttr('style');
        helper.loadscript('https://cdn.detik.net.id/libs/assets/js/framebar/dtkframebar-controller.js');
    },
    dc_get: function()
    {
        baseurl = baseurl.replace("detik.com/edu", "detik.com");
        baseurl = baseurl.replace("detik.com/jatim", "detik.com");
        $.ajax({
            type: "GET",
            url: baseurl + '/ajax/detik_id',
            dataType: 'json',
            xhrFields: {
               withCredentials: true
            },
            success: function (r) {
                dcInfo = r;
                var c = dFramebar.block(r);
                $('body').find('#status_user_nf').replaceWith(c);
                dFramebar.oncomplete();
                // dFramebar.qc_init(r);
            },
            error: function(jqxhr, status, exception)
            {
                var c = dFramebar.block({
                    is_login: false
                });
                $('body').find('#status_user_nf').replaceWith(c);
                dFramebar.oncomplete();
            }
        });
    },
    auto_complete: function(el)
    {
        el.keypress(function(){
            el.autocomplete({
                serviceUrl: "//suggestqueries.google.com/complete/search?client=chrome&callback=?",
                dataType: "jsonp",
                paramName: "q",
                lookupLimit: 5,
                transformResult: function(n) {
                    return {
                        suggestions: $.map(n[1], function(n) {
                            try {
                                n = n.replace(/[\<\>\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "");
                            } catch (e) {helper.log(e);}
                            return {
                                value: n,
                                data: n
                            }
                        })
                    }
                }
            })
        });
    },
    platform: function()
    {
        if(helper.ismobile() && !responsive) {
            return 'mobile';
        }
        return 'desktop';
    },
    block: function(obj)
    {
        var box, qc;
        if(obj.is_login)
        {
            if(this.platform() == 'mobile')
            {
                box = '<div id="status_user_nf" class="framebar_user" style="display:inherit">\
                <div class="media__author-image-avatar">\
                <img src="'+obj.avatar+'" alt="">\
                </div>\
                <div class="media__text">\
                <div class="user-log__name"><a href="'+obj.framebar_url.profile+'">'+obj.first_name+' '+obj.last_name.replace(/(\w+).*/,"$1")+'</a></div>\
                <a href="'+obj.framebar_url.logout+'" class="user-log__login">Keluar</a>\
                </div></div>';
            }
            else
            {
                qc  = `
                  <li style="padding-top:0px;">
                   <!-- Allo Bank -->
                   <div class="allobank__container">
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta open-modal-2">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/logo-allobank.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              Allo Balance
                           </span>
                           <span id="dtkqc-balance">
                              Activate Wallet
                           </span>
                         </a>
                      </div>
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/mpc.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              MPC Points
                           </span>
                           <span id="dtkqc-point">
                              Login or register
                           </span>
                         </a>
                      </div>
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta open-modal">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/coupon.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              My Coupons
                           </span>
                           <span id="dtkqc-coupon">
                              See Coupons
                           </span>
                         </a>
                      </div>
                   </div>
                   <!-- Allo Bank -->
                  </li>
                `;

                box = '<div class="dtkframebar__user__login__in">'+
                '<div id="dtkframebar-user">'+
                '<h4 class="pull-left">'+obj.first_name+' '+obj.last_name.replace(/(\w+).*/,"$1")+'</h4>'+
                '<span class="dtkframebar__user__login__in__img"><img src="'+obj.avatar+'" alt=""></span>'+
                '<i class="dtkframebar__caret dtkframebar__caret-down"></i>'+
                '</div>'+
                '<div class="dtkframebar__user__login__in__db" style="min-width: 200px;">'+
                '<ul><li>'+
                '<a href="'+obj.framebar_url.profile+'">Profile Saya</a>'+
                '</li><li>'+
                '<a href="'+obj.framebar_url.logout+'">Keluar</a>'+
                '</li></ul>'+
                '</div></div>';
            }
        }
        else
        {
            if(this.platform() == 'mobile')
            {
                box = '<div class="framebar_user" style="display:inherit"><div class="media__author-image-avatar">\
                <img src="https://cdn.detik.net.id/assets/images/framebar/user_default.webp" alt="">\
                </div>\
                <div class="media__text">\
                <div class="user-log__name">Halo Detiker</div>\
                <a href="'+obj.framebar_url.login+'" alt="'+obj.framebar_url.login+'" class="user-log__login to_login">Masuk/Daftar</a>\
                </div></div>';
            }
            else
            {
                // variable itp_dtkid_redirect_url for redirect url login & register
                let class_box_modal_dtkid = (typeof itp_dtkid_redirect_url !== 'undefined' && itp_dtkid_redirect_url == true) ? '' : 'box_modal_dtkid';
                box = '<a alt="'+obj.framebar_url.register+'" href="'+obj.framebar_url.register+'" class="daftar to_reg '+class_box_modal_dtkid+' dtkframebar__btn gtm_framebardc_daftar active">'+
                'Daftar MPC</a>\n'+
                '<a alt="'+obj.framebar_url.login+'" href="'+obj.framebar_url.login+'" class="masuk to_login '+class_box_modal_dtkid+' dtkframebar__btn gtm_framebardc_masuk">Masuk</a>';
            }
        }
        return box;
    },
    qc_init: function(detikid) {
      if (detikid.is_login) {
        this.qc_apiurl   = baseurl + '/discc/getabc';
        this.qc_features = ['balance', 'point'];

        this.qc_first_actions();
        this.qc_init_events();
        this.qc_init_modal();
      }
    },
    qc_first_actions: function() {
      // call quickcard on the first load
      if(dFramebar.platform() == 'mobile'){
        dFramebar.qc_mobile_init_el();
        dFramebar.qc_mobile_activate();
      }else{
        dFramebar.qc_desktop_activate();
      }
    },
    qc_init_events: function() {
      let dtkframebarMobileHamburger = $('#menuClick'), dtkframebarDesktopUserSelector = '#dtkframebar-user';

      if (this.platform() == 'mobile') {
        dtkframebarMobileHamburger.click(function() {
          setTimeout(function() {
            if ($('body').hasClass('js-menu-active')) {
              dFramebar.qc_mobile_activate();
            }
          }, 100)
        });
        if (typeof plugins !== 'undefined') {
            $('body').append(`
              <script type="text/javascript">
              	plugins({
              		"modal_box": true
              	});
              </script>
              `);
        }
      } else {
        $('body').delegate(dtkframebarDesktopUserSelector, 'mouseup', function() {
          setTimeout(function() {
            let dtkframebarDropdown = $('.dtkframebar__user__login__in__db');
            if (dtkframebarDropdown.hasClass('show')) {
                dFramebar.qc_desktop_activate();
            }
          }, 100);
        });
      }

    },
    qc_mobile_init_el: function() {
      let qc_mobile_el = $(`
    		<div class="allobank__container">
    			 <div class="allobank__item">
              <a href="#" data-href="${baseurl}/discc/getghi" modal-id="modal-coupon" class="allobank__cta p_modal_show">
                <span class="allobank__img">
      						 <img src="${ asset_common }/images/webp/framebar/logo-allobank.webp" height="31" alt="">
      					</span>
      					<span class="allobank__title">
      						 Allo Balance
      					</span>
      					<span class="font-semibold" id="dtkqc-balance">
      						 Activate Wallet
      					</span>
              </a>
    			 </div>
    			 <div class="allobank__item">
              <a href="#" class="allobank__cta">
      					<span class="allobank__img">
      						 <img src="${ asset_common }/images/webp/framebar/mpc.webp" height="31" alt="">
      					</span>
      					<span class="allobank__title">
      						 MPC Points
      					</span>
      					<span class="font-semibold" id="dtkqc-point">
      						 Login or register
      					</span>
              </a>
    			 </div>
    			 <div class="allobank__item">
              <a href="#" data-href="${baseurl}/discc/getdef" modal-id="modal-coupon" class="allobank__cta p_modal_show">
                <span class="allobank__img">
      						 <img src="${ asset_common }/images/webp/framebar/coupon.webp" height="31" alt="">
      					</span>
      					<span class="allobank__title">
      						 My Coupons
      					</span>
      					<span class="font-semibold" id="dtkqc-coupon">
      						 See Coupons
      					</span>
              </a>
    			 </div>
    		</div>
        `);
    //   $('.box-overlay__body').prepend(qc_mobile_el);
    },
    qc_mobile_activate: function() {
      this.qc_get(this.qc_apiurl, function(response) {
        if (response.status) {
          dFramebar.qc_features.forEach(function(item){
            if (response.data && response.data[item]) {
              $(`#dtkqc-${ item }`).html(response.data[item])
            }
          })
        }
      });
    },
    qc_desktop_activate: function() {
      this.qc_get(this.qc_apiurl, function(response){
        if (response.status) {
          dFramebar.qc_features.forEach(function(item){
            if (response.data && response.data[item]) {
              $(`#dtkqc-${ item }`).html(response.data[item])
            }
          })
        }
      });
    },
    qc_get: function(url, success) {
      return $.ajax({ method: 'GET', url, success });
    },
    qc_init_modal: function() {
      if (this.platform() != 'mobile') {
        this.qc_modal = $(`
          <div id="modal-background" style="display: none;">
            <div id="modal-allobank">
              <span class="close-allo-modal close-x">×</span>
              <div class="form-block">
                  <div class="akun__content">
                      <div style="text-align:center;"><img src="${ asset_common }/images/framebar/gift.png" style="width:143px;" alt=""></div>
                      <p style="text-align:center;margin-top:24px;">Exciting features and products from<br>
                          CT Corp are coming your way!<br>
                          Stay tuned!</p>

                      <div class="text-center" style="margin-top:24px;">
                          <a href="#" class="btn--coupon-modal close-allo-modal">I got it!</a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          `);

          this.qc_modal_2 = $(`
            <div id="modal-background-2" style="background-color: rgba(0,0,0,0.5); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 25; display: none;">
          	<div id="modal-allobank-2" style="background: #FFFFFF; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 16px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); min-width: 316px; width: -webkit-min-content; width: -moz-min-content; width: min-content; padding: 20px; box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); font-weight: 600; font-size: 14px; line-height: 17px; color: #333; -webkit-animation-name: animatemodal; animation-name: animatemodal; -webkit-animation-duration: 0.4s; animation-duration: 0.4s; font-family: "Inter", sans-serif;">
          		<span class="close-allo-modal close-x">&times;</span>
          		<div class="form-block">
                      <div class="akun__content">
                          <div style="text-align:center;"><img src="${ asset_common }/images/framebar/gift.png" style="width:143px;" alt=""></div>
                          <p style="text-align:center;margin-top:24px;">
                          <!-- Download AlloBank Apps to activate your wallet. <br> <br>
                          Exciting features and products from<br />
                              CT Corp are coming your way!<br />
                              Stay tuned! -->
                              Download AlloBank Apps to activate your wallet.
                          </p>
                          <div class="text-center mgt-24">
                              <!-- <button class="btn btn--coupon-modal btn--rounded modal-batal">I got it!</button> -->
                              <a class="btn btn--coupon-modal btn--rounded" target="_blank" href="https://get.allobank.com">Get AlloBank Apps</a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            `);

        $('body').append(this.qc_modal);
        $('body').append(this.qc_modal_2);
        this.qc_modal_events();
      }
    },
    qc_modal_events: function() {
      // show modal
      $('body').delegate('.open-modal', 'mouseup', function(e) {
        e.preventDefault();
        dFramebar.qc_modal.css({ display: 'block' });
      });

      $('.open-modal, .open-modal-2').click(function (event) {
        event.preventDefault();
      });

      // show modal 2
      $('body').delegate('.open-modal-2', 'mouseup', function(e) {
        e.preventDefault();
        dFramebar.qc_modal_2.css({ display: 'block' });
      });

      // hide modal
      $('body').delegate('.close-allo-modal', 'click', function(e) {
        e.preventDefault();
        dFramebar.qc_modal.css({ display: 'none' });
        dFramebar.qc_modal_2.css({ display: 'none' });
      });
    }
}

var dRecShow = {
    f: 'recommendation_firstrow',
    s: 'recommendation_secondrow',
    fs: false,
    ss: false,
    init: function()
    {
        var elf = $('.'+this.f);
        var els = $('.'+this.s);
        var attr_parent_f = elf.parents('[d-widget]').attr('d-widget');
        var attr_parent_s = els.parents('[d-widget]').attr('d-widget');

        if(elf.length > 0) {
            if(!helper.inview(elf, "1"))
                return;

            if(!this.fs) {
                this.send_evt(this.f, attr_parent_f);
                this.fs = true;
            }

        }

        if(els.length > 0) {
            if(!helper.inview(els, "1"))
                return;

            if(!this.ss) {
                this.send_evt(this.s, attr_parent_s);
                this.ss = true;
            }
        }
    },
    send_evt: function(cls, type_rec)
    {
        if (typeof sendTheShowRec === "function")
        {
            sendTheShowRec(cls, type_rec);
        }
    }
}

var inviewHandler = function()
{
    dWidget.init();
    dNewsfeed.init();
    dRecShow.init();
}

var enableBtnForm = function()
{
    $('#buttonKirim').prop('disabled', false);
}

var smartbanner =  {
    detail: {
        'Android': {
            'text': 'Get it on the Play Store',
            'link': 'https://play.google.com/store/apps/details?id=org.detikcom.rss',
            'pt_btn': '_pt(this, "header", "smartbanner", "button get play store")'
        },
        'iOS': {
            'text': 'Get it on the App Store',
            'link': 'https://apps.apple.com/id/app/detikcom-berita-terlengkap/id442914988',
            'pt_btn': '_pt(this, "header", "smartbanner", "button get app store")'
        }
    },
    run: function()
    {
        var useragent = helper.getuseragent();
        $('.itpp_sb_text').text(this.detail[useragent].text);
        $('.itpp_sb_url').attr('href', this.detail[useragent].link);
        $('.itpp_sb_url').attr('onclick', this.detail[useragent].pt_btn);
        $('.itpp_sb').show();
    }
}

var submitIndeks = function()
{
    var indeks_date = $('.it-indeks-date').val();
    var current_uri = window.location.href;
    var clear_uri   = current_uri.split("?")[0];
    var next_uri    = clear_uri+'?date='+indeks_date;

    _pt({href:next_uri}, 'indeks navbar', 'button cari', 'button cari');
    window.location.href = next_uri;
}

var dComments = {
    elmClass: ".latest_comment",
    attrClass: "data-comment-article",
    reqUrl: "https://apicomment.detik.com/graphql",
    reqPayload: {
        query: "query search($type: String!, $size: Int!,$anchor: Int!, $sort: String!,  $query: [ElasticSearchAggregation]) {search(type: $type, size: $size,page: $anchor, sort: $sort, query: $query){ paging sorting counter counterparent profile hits { posisi  results {id author content like prokontra  status news create_date pilihanredaksi refer liker { id } reporter { id status_report } child { id child parent author content like prokontra status create_date pilihanredaksi refer liker { id } reporter { id status_report } authorRefer } } } }}",
        variables: {
            type: "comment",
            size: 1,
            anchor:1,
            sort: "newest",
         }
    },
    init: function ()
    {
        if ($(dComments.elmClass)[0]){
            $(dComments.elmClass).each(async function(i, obj) {
                let data_articleId = $(this).attr(dComments.attrClass)
                let payloadData = dComments.reqPayload
                payloadData.variables.query = [
                    {"name": "news.artikel", "terms": data_articleId},
                    {"name": "news.site", "terms": "dtk"}
                ]
                await dComments.fetchComments(payloadData, $(this))
            });
        }
    },
    fetchComments: function (payloadData, elm) {
        fetch(dComments.reqUrl, {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(payloadData)
        }).then(function(res){
            return res.json()
        }).then(function(resp){
            dComments.populateComment(resp, elm)
        })
    },
    decodeContentHtml: function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return decodeURIComponent(unescape(txt.value));
    },
    trimComment: function (content) {
        let contentComment = dComments.decodeContentHtml(content)
        return contentComment.replace(/^(.{70}[^\s]*).*/, "$1") + "..."
    },
    populateComment: function (resp, elm) {
        if (resp.data.search.hits.results.length > 0) {
            let comment = resp.data.search.hits.results[0]
            let authorName = comment.author.name
            let contentComment = comment.content
            $(elm).html(`<strong class="color-black">${authorName} -</strong> ${dComments.trimComment(contentComment)}`)
        }else{
            $(elm).html('')
        }
    }
}

// var highLightNav = {
//     init: function () {
//         var hasActiveClass = $('.navbar').find('.nav__item').hasClass('nav__item--active')
//
//         if (hasActiveClass === false) {
//             highLightNav.request()
//             .then(function (req) {
//                 var data = req.html.data
//                 var scrollLevel = req.html.scroll_level
//
//                 for (var i = 0; i < data.length; i++) {
//                     var linkHref = data[i]
//                     $('.nav').find('.nav__item').each(function(){
//                         if (linkHref === $(this).find('a').attr('href')) {
//                             $(this).addClass('nav__item--active')
//                         }
//                     })
//                 }
//
//                 if (scrollLevel === true) {
//                     highLightNav.activateScrollLevel()
//                 }
//             })
//         }
//     },
//     request: function () {
//         return new Promise(function (resolve, reject) {
//             var kanalId = $('meta[name=kanalid]').attr('content')
//
//             if (! kanalId) {
//                 kanalId = ''
//             }
//
//             $.ajax(baseurl + '/ajax/active_nav?param=' + kanalId)
//             .done(function (data) {
//                 resolve(data)
//             })
//             .fail(function (xhr, status, error) {
//                 reject({xhr: xhr, status: status, error: error})
//             })
//         })
//     },
//     activateScrollLevel: function () {
//         try {
//     		var myScrollPos = $('.navbar-first ul li.nav__item--active').position().left - $('.navbar-first ul li.nav__item--active').width();
//
//     		if($('.scroll__wrap li:nth-child(2)').hasClass('nav__item--active')){
//     			$('.navbar-first ul').animate({scrollLeft:0});
//     		} else {
//     			$('.navbar-first ul').animate({scrollLeft:myScrollPos});
//     		}
//     	} catch (e) {
//     		console.log('Error activeScrollLevel!')
//     	}
//     }
// }
//
// highLightNav.init();

var panelTrackingNav = {
    init: function () {
        var navIsSticky = $('.navbar-sticky');
        if (navIsSticky.hasClass('is-sticky') === true){
            navIsSticky.find('.nav__item a').attr(this.setPanelTrackingNav('sticky navbar','sticky navbar'));
        } else {
            navIsSticky.find('.nav__item a').attr(this.setPanelTrackingNav('','first navbar'));
        }
    },

    setPanelTrackingNav: function (sec, act) {
        return ({
            'dtr-sec': sec,
            'dtr-act': act
        })
    }
}

$(function(){
    callSticky.setsticky();
    dNotif.init();
    dFramebar.init();
    if (site_id == 2) {
        breakingNews.init();
    }
    dComments.init()
    inviewHandler()
    $(window).scroll(function(){
        inviewHandler()
        panelTrackingNav.init()
    });
})
