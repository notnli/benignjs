!function (a) {
    a.fn.autoMail = function (b) {
        var c = a.extend({}, a.fn.autoMail.defaults, b);
        return this.each(function () {
            function f(b) {
                a("#search_btn li").removeClass("cmail").eq(b).addClass("cmail")
            }

            function g(b) {
                if (b && 13 == b.keyCode || void 0 == b) {
                    var c = a("#search_in").val();
                    "搜索" != c && "关键字太短" != c && c.length > 1 ? a("#searchForm").submit() : (a("#search_in").val("关键字太短"), setTimeout(function () {
                        a("#search_in").val("")
                    }, 1e3))
                }
            }

            var b = a(this), d = a.meta ? a.extend({}, c, b.data()) : c, e = a("#search_btn"), i = (d.emails, function (b) {
                b.attr("autocomplete", "off"), "" != b.val() ? e.stop().fadeIn(500) : e.stop().fadeOut(500), a("#search_btn li").hover(function () {
                    a(this).addClass("cmail")
                }, function () {
                    a(this).removeClass("cmail")
                }).click(function () {
                    0 == a(this).index() ? a("#hidden_input").val("title") : a("#hidden_input").val("content"), g(), e.stop().fadeOut(500)
                })
            }), j = -1;
            b.focus(function () {
                -1 == b.val().indexOf("搜索") ? i(b) : (e.stop().fadeOut(500), a("#search_btn li").removeClass("cmail"))
            }).blur(function () {
                a("#search_btn li").removeClass("cmail"), setTimeout(function () {
                    e.stop().fadeOut(500), a("#search_btn li").removeClass("cmail")
                }, 1e3)
            }).keyup(function (c) {
                -1 == b.val().indexOf("搜索") ? 40 == c.keyCode ? (j++, j >= a("#search_btn li").length && (j = 0), f(j)) : 38 == c.keyCode ? (j--, j < 0 && (j = a("#search_btn li").length - 1), f(j)) : 13 == c.keyCode ? j >= 0 && (g(), e.stop().fadeOut(500)) : (j = -1, f(2), i(b)) : (e.stop().fadeOut(500), a("#search_btn li").removeClass("cmail")), 0 == j ? a("#hidden_input").val("title") : a("#hidden_input").val("content")
            }).keydown(function (a) {
                if (13 == a.keyCode) return !1
            })
        })
    }, a.fn.autoMail.defaults = {emails: []}
}(jQuery), $(document).ready(function () {
    $("#search_in").autoMail()
});
