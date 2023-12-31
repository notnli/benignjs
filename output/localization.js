var currencyList = { 
    'usd': {
        'country': 'USA',
        'currency': 'usd',
        'symbol': '&#36;',
        'format': 'en-US'
    },
    'inr': {
        'country': 'INDIA',
        'currency': 'inr',
        'symbol': '&#8377;',
        'format': 'en-IN'
    },
    'cad': {
        'country': 'CANADA',
        'currency': 'cad',
        'symbol': '&#36;',
        'format': 'en-CA'
    },
    'aud': {
        'country': 'AUSTRALIA',
        'currency': 'aud',
        'symbol': '&#36;',
        'format': 'en-AU'
    },
    'gbp': {
        'country': 'BRITAN',
        'currency': 'gbp',
        'symbol': '&#163;',
        'format': 'en-GB'
    },
    'eur': {
        'country': 'EUROPE',
        'currency': 'eur',
        'symbol': '&#8364;',
        'format': 'en-US'
    }
};
/*
* LOCALIZATION STARTS HERE 
*/
async function getLocation() {
    var url = "https://www.tutorialspoint.com/market/localization.php";
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
// Set Price of Products 
async function setPrice() {
    var localization = getLocalData('localization');

    var locationCurrency;
    if (localization != null) {
        // Set currency from location 
        locationCurrency = localization.currency;
    } else {
        // Fetch currecny  from back end
        var currentLocation = await getLocation();
        if (currentLocation == false) {
            currentLocation = currencyList['usd'];
        }
        // var ttl = 300000;
        var ttl = 1800000;
        setLocalData('localization', currentLocation, ttl);
        locationCurrency = currentLocation['currency'];
    }
    var localFormatSettings = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
        currency: locationCurrency
    };
    // Set various currecny values 
   var num = 30000.030
   //console.log( num.toLocaleString(undefined, localFormatSettings ));
   document.querySelectorAll('.price').forEach( element => {
	var price = parseInt(element.getAttribute('data-' + locationCurrency ));
        element.innerHTML = price.toLocaleString(undefined, localFormatSettings);
    });
    document.querySelectorAll('.actual-price').forEach( element => {
        var price = parseInt(element.getAttribute('data-' + locationCurrency ));
        element.innerHTML = price.toLocaleString(undefined, localFormatSettings);
    });
    document.querySelectorAll('.discount-amount').forEach( element => {
        var price = parseInt(element.getAttribute('data-' + locationCurrency ));
        element.innerHTML = price.toLocaleString(undefined, localFormatSettings);
    });
    document.querySelectorAll('.ebook-off').forEach( element => {
        var price = element.getAttribute('data-' + locationCurrency ) + ' % off';
        element.innerHTML = price;
        element.style.display =  "block";
    });

    document.querySelectorAll('div .pricing-loader,.course-price, .course-card-body .pricing-loader').forEach( element => {
          element.style.display =  'none';
    });
    document.querySelectorAll('div .ebook-price').forEach( element => {
          element.style.display =  'block';
    });
}

function setLocalData(key, data, ttl) {
    const now = new Date();
    const item = {
        value: data,
        expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}
function getLocalData(key) {
    // Check localization expiry time
    //    key = "localization";
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date();

    // compare the expiry time of the item with the current time
    if (now.getTime() >= item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}
setPrice();
