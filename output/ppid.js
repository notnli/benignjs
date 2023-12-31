(function () {
    var allowDomain = "kakaku.com"
    var apiDomain = "kakaku.com"

    if (document.domain.indexOf(allowDomain) === -1) {
        return;
    }

    // リクエストヘッダの中にppidが存在するかどうかチェック
    var hasAdManagerPPID = function() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var kv = cookie.split("=");
            if (kv.length !== 2) {
                continue;
            }
    
            if (kv[0] === "gam_ppid") {
                return true;
            }
        }
    
        return false;
    }

    // cookie発行用のapiにpost
    var initializePPID = function() {
        var xhr = new XMLHttpRequest();
        var url = "https://" + apiDomain + "/ad/adadmin/ppid/";
        xhr.open("POST", url, true);
        
        // ドメインを跨いだajaxリクエストでcookieを発行させるための設定
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (xhr.status !== 200) {
                    console.error("[ppid.js] ppid set error");
                }
            }
        }
        xhr.send();
    }

    if (!hasAdManagerPPID()) {
        initializePPID();
    }
})();