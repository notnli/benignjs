
window.addEventListener('load', (event) => {
    userCountryLibrary.getLocalStorageData();
});
/* başka yerlerde de localstorage kullanılıyor, eventin dışına çıkarıldı */
var checkLocalDb = function () {
    var t, e = new Date;
    try {
        return localStorage.setItem(e, e),
            t = localStorage.getItem(e) == e,
            localStorage.removeItem(e),
            t && localStorage
    } catch (t) {
        return !1
    }
}
var userCountryLibrary = {
    getCityRequestProcessStatus: false,
    writeUserCountry: function (userCountry) {
        try {
            localStorage.setItem("usercountry", JSON.stringify(userCountry));
        } catch (t) {
            return !1;
        }
    },
    addMonths: function (date, months) {
        var d = date.getDate();
        date.setMonth(date.getMonth() + +months);
        if (date.getDate() != d) {
            date.setDate(0);
        }
        return date;
    },
    addHours: function (date, hours) {
        date.setHours(date.getHours() + hours);
        return date;
    },
    checkLocalStorageData: function (isDaily, time) {

        var userCountryData = localStorage.getItem("usercountry");
        if (null != userCountryData) {
            var obj = JSON.parse(userCountryData);
            var expDate = new Date(obj.CreateDate);
            expDate = isDaily ? this.addHours(expDate, time) : expDate = this.addMonths(expDate, time);
            var today = new Date();
            if (typeof obj.CityName === 'undefined' || expDate.getTime() < today.getTime())
                this.setLocalStorageData();
        }
        else
            this.setLocalStorageData();

    },
    // <isDaily> Local DB'de gün larak mı ay olarak mı tutulacağını belirtir.
    // <time>    ne kadar süre tutulacağını belirtir.
    getLocalStorageData: function (isDaily = true, time = 1) {
        if (window.jQuery) {
            this.checkLocalStorageData(isDaily, time);
            var userCountry = localStorage.getItem("usercountry");
            if (userCountry) {
                //geçerli zaman sürekli localsotrage e yazıldığı zaman olarak kalmasın diye eklendi.
                var userCountryParse = JSON.parse(userCountry);
                userCountryParse.CurrentDate = new Date().getTime();
            }
            return userCountryParse;
        }
    },
    setLocalStorageData: function () {
        if (!userCountryLibrary.getCityRequestProcessStatus) {
            userCountryLibrary.getCityRequestProcessStatus = true;
            userCountryLibrary.getCityAjaxCall();
        }
    },
    getCityAjaxCall: function () {
        $.ajax({
            type: "GET",
            url: "https://ipcheck.tmgrup.com.tr/ipcheck/getcity",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data.Status != undefined) {
                    if (data.CountryName != undefined && data.CountryCode != undefined) {
                        if (checkLocalDb()) {
                            var obj = {
                                "CountryName": data.CountryName, "CountryCode": data.CountryCode, "CreateDate": new Date().getTime(),
                                "Domain": location.protocol + '//' + location.hostname, "Status": data.Status, "CurrentDate": data.CurrentDate, "Latitude": data.Latitude,
                                "Longitude": data.Longitude, "IP": data.IP, "SubDivisionCode": data.SubDivisionCode, "CityName": data.CityName, "CityNameForUrl": data.CityNameForUrl
                            };
                            userCountryLibrary.writeUserCountry(obj);
                        }
                    }
                }
                userCountryLibrary.getCityRequestProcessStatus = false;
            },
            error: function (error) {
                userCountryLibrary.getCityRequestProcessStatus = false;
            },
        });

    }

};
userCountryLibrary.getLocalStorageData();
