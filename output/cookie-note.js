function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    if (typeof baseDomain === "undefined") {
        baseDomain = "/";
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=" + baseDomain;
}
function approveCookie() {
    setCookie("cookie_accepted", "1", 60);
    document.getElementById("cookie-note").style.display = "none";
}
(function() {
    setTimeout(function() {document.getElementById("cookie-note-button").onclick = approveCookie;}, 300);
})();