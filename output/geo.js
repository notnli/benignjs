var az_country_code;
az_country_code = "SG";

(function() {
    var ep = document.createElement("input");
    ep.setAttribute("type", "hidden");
    ep.setAttribute("name", "x");
    ep.setAttribute("value", "db73d64de55ee2dfe00d4874bd92ff02bb2911a87556ceb02f8345d8ba69da07");
    var els = document.querySelectorAll('form.search');
    for (var n = 0; n < els.length; n++) {
        els[n].appendChild(ep.cloneNode());
    }
})();

