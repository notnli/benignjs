function getPageId() {
  var title = document.getElementsByTagName("title")[0].textContent;
  return title.substring(title.indexOf("(") + 1, title.length - 1)
}

/**
 * Main requirejs config file
 * @param  {object} root    window / global
 * @param  {function} factory function definition
 * @return {object}         requirejs configuration
 * @todo use flat folder structure
 */
(function (root, factory) {
  'use strict';

  // flag to use distribution folder for features / modules
  root.launchpad = root.launchpad || {};
  root.launchpad.config = root.launchpad.config || {
    usemin: true
  };

  var USEMIN = Boolean(root.launchpad.config.usemin);
  var DIST = USEMIN ? 'dist/' : '';
  var host;

  if (typeof exports === 'object') {
    host = require('os').hostname();
    module.exports = factory(root, '');
  } else if (typeof requirejs === 'function') {
    require.config(factory(root, DIST));
    host = root.location.host;
  }
  if (!USEMIN && host.indexOf('local') > -1) {
    console.warn('You are using unminified version of modules/features !!! @', host);
  }

}(this, function (root, dist) {
  'use strict';

  var path = root.launchpad.config.path || 'features/%5BBBHOST%5D';

  var widgetPath='widgets/%5BBBHOST%5D';

  var portalFeaturesPath = root.launchpad.config.path || 'features/%5BBBHOST%5D';

  var config = {

    waitSeconds: 500,

    baseUrl: (function (launchpad) {
      return launchpad.staticRoot || './';
    })(root.launchpad || {}),

    paths: {
      /**
       * Common libs
       */
      // utility belt
      'lodash': [path + '/lodash/lodash.min', path + '/lodash/lodash'],
      // fetch
      'fetch': [path + '/fetch/fetch'],
      // Mobile and gestures
      'hammerjs': [path + '/hammerjs/hammer.min', path + '/hammerjs/hammer'],
      // date
      'moment': [path + '/moment/min/moment.min', path + '/moment/moment'],
      // graphics and animation
      'd3': [path + '/d3/d3.min', path + '/d3/d3'],
      // Template-ing systems
      'handlebars': [path + '/handlebars/handlebars.min', path + '/handlebars/handlebars'],
      // User Agent utility
      'ua-parser-js': [path + '/ua-parser-js/dist/ua-parser.pack', path + '/ua-parser-js/src/ua-parser'],
      // SetImmediate
      'setimmediate': [path + '/setimmediate/setImmediate', path + '/setimmediate/setImmediate'],

      // angular & 3rd party ng libs
      'angular': [path + '/angular/angular.min', path + '/angular/angular'],
      'angular-filter': [path + '/feature-hdfc-common-utility/scripts/angular-filter.min'],
      'angular-resource': [path + '/angular-resource/angular-resource.min'],
      'angular-sanitize': [path + '/angular-sanitize/angular-sanitize.min'],
      'angular-translate': [path + '/angular-translate/angular-translate.min'],
      'angular-dynamic-locale': [path + '/angular-dynamic-locale/tmhDynamicLocale.min'],

      // LP foundation
      'base': path + '/base/' + dist + 'scripts',
      'core': path + '/core/' + dist + 'scripts',
      'ui': path + '/ui/' + dist + 'scripts',
      // Bootstrap
      'collapse': [path + '/theme/core/bootstrap3/js/collapse'],
      'transition': [path + '/theme/core/bootstrap3/js/transition'],
      'tab': [path + '/theme/core/bootstrap3/js/tab'],

      // LP modules
      'module-currencies': path + '/module-currencies/' + dist + 'scripts',
      'module-accounts': path + '/module-accounts/' + dist + 'scripts',
      'module-automation': path + '/module-automation/' + dist + 'scripts',
      'module-estatements': path + '/module-estatements/' + dist + 'scripts',
      'module-payments': path + '/module-payments/' + dist + 'scripts',
      'module-users': path + '/module-users/' + dist + 'scripts',
      'module-wealth': path + '/module-wealth/' + dist + 'scripts',
      'module-freshness': path + '/module-freshness/' + dist + 'scripts',
      'module-tags': path + '/module-tags/' + dist + 'scripts',
      'module-charts': path + '/module-charts/' + dist + 'scripts',
      'module-badges': path + '/module-badges/' + dist + 'scripts',
      'module-expenses': path + '/module-expenses/' + dist + 'scripts',
      'module-places': path + '/module-places/' + dist + 'scripts',
      'module-ebilling': path + '/module-ebilling/' + dist + 'scripts',
      'module-transactions': path + '/module-transactions/' + dist + 'scripts',
      'module-contacts': path + '/module-contacts/' + dist + 'scripts',
      //'module-spring-transition': path + '/module-spring-transition/' + dist + 'scripts',
      'module-devices': path + '/module-devices/' + dist + 'scripts',
      'module-enrollment': path + '/module-enrollment/' + dist + 'scripts',
      'module-behaviors': path + '/module-behaviors/' + dist + 'scripts',
      'module-addressbook': path + '/module-addressbook/' + dist + 'scripts',
      'module-p2p': path + '/module-p2p/' + dist + 'scripts',
      'module-cards': path + '/module-cards/' + dist + 'scripts',
      'module-content': path + '/module-content/' + dist + 'scripts',

      // requirejs-plugins
      'async': [path + '/requirejs-plugins/src/async'],
      'goog': [path + '/requirejs-plugins/src/goog'],

      // HDFC Specific
      'feature-hdfc-common-utility': [path + '/feature-hdfc-common-utility/scripts'],
      'feature-hdfc-personal-cache': [path + '/feature-hdfc-personal-cache/scripts'],
      'feature-hdfc-components': [path + '/feature-hdfc-components/scripts'],
      'feature-hdfc-nb-utility': [path + '/feature-hdfc-nb-utility/scripts'],
      'feature-hdfc-nb-share': [path + '/feature-hdfc-nb-share/scripts'],
      'feature-hdfc-casa': [path + '/feature-hdfc-casa/scripts'],
      'feature-hdfc-nb-pagination': [path + '/feature-hdfc-nb-pagination/scripts'],
      'feature-hdfc-download': [path + '/feature-hdfc-download/scripts'],
      'feature-hdfc-nb-ui-select': [path + '/feature-hdfc-nb-ui-select/scripts'],
      'feature-hdfc-mb-cheque-book-request': [path + '/feature-hdfc-mb-cheque-book-request/scripts'],
      'feature-hdfc-deposit-account-error': [path + '/feature-hdfc-deposit-account-error/scripts'],
      'feature-hdfc-product-detail-service': [path + '/feature-hdfc-product-detail-service/scripts'],
      'feature-hdfc-casa-sweepin': [path + '/feature-hdfc-casa-sweepin/scripts'],
      'feature-hdfc-rsa-new': [path + '/feature-hdfc-rsa-new/scripts'],
      'feature-hdfc-nli-auditing': [path + '/feature-hdfc-nli-auditing/scripts'],
      'feature-hdfc-mb-fd-details-info': [path + '/feature-hdfc-mb-fd-details-info/scripts'],
      'feature-hdfc-mb-employee-assist': [path + '/feature-hdfc-mb-employee-assist/scripts'],
      'feature-hdfc-addPayee': [path + '/feature-hdfc-addPayee/scripts'],
      'feature-hdfc-navigation': [path + '/feature-hdfc-navigation/scripts'],
      'feature-hdfc-cryptojs': [path + '/feature-hdfc-cryptojs/scripts'],

      'feature-hdfc-utility': [path + '/feature-hdfc-utility/scripts'],

      'feature-hdfc-mb-add-update-aadhar': [path + '/feature-hdfc-mb-add-update-aadhar/scripts'],
      'feature-hdfc-statement-download': [path + '/feature-hdfc-statement-download/scripts'],
      'feature-hdfc-nb-change-ipin': [path + '/feature-hdfc-nb-change-ipin/scripts'],

      'feature-hdfc-nb-payzapp-pin-setting': [path + '/feature-hdfc-nb-payzapp-pin-setting/scripts'],
      'feature-hdfc-debit-card': [path + '/feature-hdfc-debit-card/scripts'],
      'feature-hdfc-credit-card': [path + '/feature-hdfc-credit-card/scripts'],
      'feature-hdfc-nb-download-mandate-form': [path + '/feature-hdfc-nb-download-mandate-form/scripts'],
      'feature-hdfc-nb-personalise-rd': [path + '/feature-hdfc-nb-personalise-rd/scripts'],
      'feature-hdfc-consent-form': [path + '/feature-hdfc-consent-form/scripts'],
      //'feature-hdfc-nb-download-screenshot': [path + '/feature-hdfc-nb-download-screenshot/scripts'],
      'feature-hdfc-nb-rupee-decimal': [path + '/feature-hdfc-nb-rupee-decimal/scripts'],
      'feature-hdfc-nb-stop-payment-cheque': [path + '/feature-hdfc-nb-stop-payment-cheque/scripts'],
      'feature-hdfc-nb-view-cheque-status': [path + '/feature-hdfc-nb-view-cheque-status/scripts'],

      'feature-hdfc-nb-find-branch': [path + '/feature-hdfc-nb-find-branch/scripts'],
      'feature-hdfc-nb-add-update-pan': [path + '/feature-hdfc-nb-add-update-pan/scripts'],
      'feature-hdfc-nb-add-update-aadhar': [path + '/feature-hdfc-nb-add-update-aadhar/scripts'],
      'feature-hdfc-nb-change-occupation': [path + '/feature-hdfc-nb-change-occupation/scripts'],
      'feature-hdfc-nb-set-profile-picture': [path + '/feature-hdfc-nb-set-profile-picture/scripts'],
      'feature-hdfc-nb-track-noc': [path + '/feature-hdfc-nb-track-noc/scripts'],
      'feature-hdfc-nb-cheque-book-request': [path + '/feature-hdfc-nb-cheque-book-request/scripts'],
      'feature-hdfc-nb-fd-deposit-change-link': [path + '/feature-hdfc-nb-fd-deposit-change-link/scripts'],
      'feature-hdfc-nb-fd-details-info': [path + '/feature-hdfc-nb-fd-details-info/scripts'],
      'feature-hdfc-nb-fd-liquidate': [path + '/feature-hdfc-nb-fd-liquidate/scripts'],
      'feature-hdfc-nb-rd-liquidate': [path + '/feature-hdfc-nb-rd-liquidate/scripts'],
      'feature-hdfc-rsa': [path + '/feature-hdfc-rsa/scripts'],
      'feature-hdfc-nb-tds-download-format': [path + '/feature-hdfc-nb-tds-download-format/scripts'],

      'feature-hdfc-nb-slick-slider': [path + 'feature-hdfc-nb-slick-slider/scripts'],

      'widget-hdfc-mb-accounts-landing-page':[widgetPath + '/widget-hdfc-mb-accounts-landing-page/scripts'],
      'widget-hdfc-mb-account-actions':[widgetPath + '/widget-hdfc-mb-account-actions/scripts'],

     'widget-hdfc-account-detail' : [widgetPath + '/widget-hdfc-account-detail/scripts'],
     'widget-hdfc-mb-accounts-detail-page': [widgetPath + '/widget-hdfc-mb-accounts-detail-page/scripts'],
     'widget-hdfc-protect-insufficient-funds':[widgetPath + '/widget-hdfc-protect-insufficient-funds/scripts'],
     'widget-hdfc-account-detail-action': [widgetPath + '/widget-hdfc-account-detail-action/scripts'],
//     'widget-hdfc-favorite-nb': [widgetPath + '/widget-hdfc-favorite-nb/scripts'],


     'feature-hdfc-portal-common-utility': [portalFeaturesPath + '/feature-hdfc-portal-common-utility/scripts'],
     'feature-hdfc-portal-components': [portalFeaturesPath + '/feature-hdfc-portal-components/scripts'],
     'feature-hdfc-portal-slick-slider': [portalFeaturesPath + '/feature-hdfc-slick-slider/scripts'],
     'feature-hdfc-portal-calculators': [portalFeaturesPath + '/feature-hdfc-calculators/scripts'],
     'feature-hdfc-portal-download-pdf': [portalFeaturesPath + '/feature-hdfc-download-pdf/scripts'],
     'feature-hdfc-portal-insurance': [path + '/feature-hdfc-portal-insurance/scripts'],
     //Neha Changes

     'feature-hdfc-casa-sweepin-popup': [path + '/feature-hdfc-casa-sweepin-popup/scripts'],
     'feature-hdfc-nb-personalise': [path + '/feature-hdfc-nb-personalise/scripts'],
     'feature-hdfc-download-mandate-form': [path + '/feature-hdfc-download-mandate-form/scripts'],
     'feature-hdfc-download-interest-certificate': [path + '/feature-hdfc-download-interest-certificate/scripts'],
     'feature-hdfc-add-update-nominee': [path + '/feature-hdfc-add-update-nominee/scripts'],
     'feature-hdfc-gst': [path + '/feature-hdfc-gst/scripts'],
     'feature-hdfc-open-mkt-error-popup': [path + '/feature-hdfc-open-mkt-error-popup/scripts'],
     'feature-hdfc-nb-setpin': [path + '/feature-hdfc-nb-setpin/scripts'],
     'feature-hdfc-nb-slider': [path + '/feature-hdfc-nb-slider/scripts'],
     'feature-hdfc-pending-otp': [path + '/feature-hdfc-pending-otp/scripts'],
     'feature-hdfc-break-deposit': [path + '/feature-hdfc-break-deposit/scripts'],
     'feature-hdfc-nb-addLoan': [path + '/feature-hdfc-nb-addLoan/scripts'],
     'feature-hdfc-nb-update-contact-details': [path + '/feature-hdfc-nb-update-contact-details/js'],
     'feature-hdfc-nb-download-tds-certificate': [path + '/feature-hdfc-nb-download-tds-certificate/scripts'],
     'feature-hdfc-nb-efiling-returns': [path + '/feature-hdfc-nb-efiling-returns/scripts'],
     'feature-hdfc-nb-tax-credit-statement': [path + '/feature-hdfc-nb-tax-credit-statement/scripts'],
     'feature-hdfc-add-credit-card': [path + '/feature-hdfc-add-credit-card/scripts'],
     'feature-hdfc-add-update-aadhar': [path + '/feature-hdfc-add-update-aadhar/scripts'],
     'feature-hdfc-add-update-landline-email': [path + '/feature-hdfc-add-update-landline-email/scripts'],
     'feature-hdfc-add-update-pan': [path + '/feature-hdfc-add-update-pan/scripts'],
     'feature-hdfc-change-address': [path + '/feature-hdfc-change-address/scripts'],
     'feature-hdfc-change-ipin': [path + '/feature-hdfc-change-ipin/scripts'],
     'feature-hdfc-cibil-report': [path + '/feature-hdfc-cibil-report/scripts'],
     'feature-hdfc-dynamic-auth': [path + '/feature-hdfc-dynamic-auth/scripts'],
     'feature-hdfc-favorite-nb': [path + '/feature-hdfc-favorite-nb/scripts'],
     'feature-hdfc-html-screenshot': [path + '/feature-hdfc-html-screenshot/scripts'],
     'feature-hdfc-recharge': [path + '/feature-hdfc-recharge/scripts'],
     'feature-hdfc-digital-certificate':[path + '/feature-hdfc-digital-certificate/scripts'],
     'feature-hdfc-set-profile-pic': [path + '/feature-hdfc-set-profile-pic/scripts'],
    },

    // Register packages
    packages: [
      'base',
      'core',
      'ui',

      'module-currencies',
      'module-accounts',
      'module-automation',
      'module-estatements',
      'module-payments',
      'module-users',
      'module-wealth',
      'module-freshness',
      'module-tags',
      'module-charts',
      'module-badges',
      'module-expenses',
      'module-places',
      'module-ebilling',
      'module-transactions',
      'module-contacts',
      //'module-spring-transition',
      'module-devices',
      'module-enrollment',
      'module-behaviors',
      'module-p2p',
      'module-cards',
      'module-content',
      'module-addressbook',

      //'feature-hdfc-common-utility',
      {'name': 'feature-hdfc-common-utility', 'main': 'feature-hdfc-common-utility'},
      {'name': 'feature-hdfc-personal-cache', 'main': 'feature-hdfc-personal-cache'},
      {'name': 'feature-hdfc-components', 'main': 'feature-hdfc-components'},
      'feature-hdfc-nb-utility',
      {'name': 'feature-hdfc-nb-share', 'main': 'feature-hdfc-nb-share'},
      {'name': 'feature-hdfc-casa', 'main': 'feature-hdfc-casa'},
      {'name': 'feature-hdfc-nb-pagination', 'main': 'feature-hdfc-nb-pagination'},
      'feature-hdfc-download',
      'feature-hdfc-nb-ui-select',
      'feature-hdfc-mb-cheque-book-request',
      {'name': 'feature-hdfc-deposit-account-error', 'main': 'feature-hdfc-deposit-account-error'},
      {'name': 'feature-hdfc-product-detail-service', 'main': 'feature-hdfc-product-detail-service'},
      {'name': 'feature-hdfc-casa-sweepin', 'main': 'feature-hdfc-casa-sweepin'},
      {'name': 'feature-hdfc-rsa-new', 'main': 'feature-hdfc-rsa-new'},
      'feature-hdfc-nli-auditing',
      'feature-hdfc-mb-fd-details-info',
      'feature-hdfc-mb-employee-assist',
      'feature-hdfc-addPayee',
      {'name': 'feature-hdfc-navigation', 'main': 'feature-hdfc-navigation'},
      'feature-hdfc-cryptojs',

      'feature-hdfc-utility',

      'feature-hdfc-mb-add-update-aadhar',
      {'name': 'feature-hdfc-statement-download', 'main': 'feature-hdfc-statement-download'},
      'feature-hdfc-nb-change-ipin',

      'feature-hdfc-nb-payzapp-pin-setting',
      {'name': 'feature-hdfc-debit-card', 'main': 'feature-hdfc-debit-card'},
      {'name': 'feature-hdfc-credit-card', 'main': 'feature-hdfc-credit-card'},
      'feature-hdfc-nb-download-mandate-form',
      'feature-hdfc-nb-personalise-rd',

     // 'feature-hdfc-nb-download-screenshot',
      'feature-hdfc-nb-rupee-decimal',
      'feature-hdfc-nb-stop-payment-cheque',
      'feature-hdfc-nb-view-cheque-status',

      'feature-hdfc-nb-find-branch',
      'feature-hdfc-nb-add-update-pan',
      'feature-hdfc-nb-add-update-aadhar',
      'feature-hdfc-nb-change-occupation',
      'feature-hdfc-nb-set-profile-picture',
      'feature-hdfc-nb-track-noc',
      {'name': 'feature-hdfc-nb-cheque-book-request', 'main': 'feature-hdfc-nb-cheque-book-request'},
      'feature-hdfc-nb-fd-deposit-change-link',
      'feature-hdfc-nb-fd-details-info',
      'feature-hdfc-nb-fd-liquidate',
      'feature-hdfc-nb-rd-liquidate',
      {'name': 'feature-hdfc-rsa', 'main': 'feature-hdfc-rsa'},
      'feature-hdfc-nb-tds-download-format',

      'widget-hdfc-mb-accounts-landing-page',
      'widget-hdfc-mb-account-actions',
      'widget-hdfc-account-detail',
      'widget-hdfc-mb-accounts-detail-page',
      'widget-hdfc-protect-insufficient-funds',
      'widget-hdfc-account-detail-action',
//      'widget-hdfc-favorite-nb',

      'feature-hdfc-portal-common-utility',
      'feature-hdfc-portal-components',
      'feature-hdfc-portal-slick-slider',
      'feature-hdfc-portal-calculators',
      'feature-hdfc-portal-download-pdf',
      'feature-hdfc-portal-insurance',
      //Neha Changes
      {'name': 'feature-hdfc-casa-sweepin-popup', 'main': 'feature-hdfc-casa-sweepin-popup'},
      {'name': 'feature-hdfc-nb-personalise', 'main': 'feature-hdfc-nb-personalise'},
      {'name': 'feature-hdfc-download-mandate-form', 'main': 'feature-hdfc-download-mandate-form'},
      {'name': 'feature-hdfc-download-interest-certificate', 'main': 'feature-hdfc-download-interest-certificate'},
      {'name': 'feature-hdfc-add-update-nominee', 'main': 'feature-hdfc-add-update-nominee'},
      {'name': 'feature-hdfc-gst', 'main': 'feature-hdfc-gst'},
      {'name': 'feature-hdfc-open-mkt-error-popup', 'main': 'feature-hdfc-open-mkt-error-popup'},
      {'name': 'feature-hdfc-nb-setpin', 'main': 'feature-hdfc-nb-setpin'},
      {'name': 'feature-hdfc-nb-slider', 'main': 'feature-hdfc-nb-slider'},
      {'name': 'feature-hdfc-pending-otp', 'main': 'feature-hdfc-pending-otp'},
      {'name': 'feature-hdfc-break-deposit', 'main': 'feature-hdfc-break-deposit'},
      {'name': 'feature-hdfc-nb-addLoan', 'main': 'feature-hdfc-nb-addLoan'},
      'feature-hdfc-nb-update-contact-details',
      'feature-hdfc-nb-download-tds-certificate',
      'feature-hdfc-nb-efiling-returns',
      'feature-hdfc-nb-tax-credit-statement',
      {'name': 'feature-hdfc-add-update-aadhar', 'main' : 'feature-hdfc-add-update-aadhar'},
      {'name': 'feature-hdfc-add-update-landline-email', 'main' : 'feature-hdfc-add-update-landline-email'},
      {'name': 'feature-hdfc-add-update-pan', 'main' : 'feature-hdfc-add-update-pan'},
      {'name': 'feature-hdfc-change-address', 'main' : 'feature-hdfc-change-address'},
      {'name': 'feature-hdfc-change-ipin', 'main': 'feature-hdfc-change-ipin'},
      {'name': 'feature-hdfc-consent-form', 'main': 'feature-hdfc-consent-form'},
      {'name': 'feature-hdfc-cibil-report', 'main': 'feature-hdfc-cibil-report'},
      {'name':'feature-hdfc-dynamic-auth', 'main':'feature-hdfc-dynamic-auth'},
      {'name':'feature-hdfc-favorite-nb', 'main':'feature-hdfc-favorite-nb'},
      'feature-hdfc-html-screenshot',
      {'name':'feature-hdfc-recharge', 'main':'feature-hdfc-recharge'},
      {'name':'feature-hdfc-add-credit-card', 'main':'feature-hdfc-add-credit-card'},
      'feature-hdfc-nb-slick-slider',
      'feature-hdfc-digital-certificate',
      'feature-hdfc-set-profile-pic'
    ],

    shim: {
      'angular': {
        exports: 'angular'
      },
      'angular-filter': {
        deps: ['angular']
      },
      'angular-resource': {
        deps: ['angular']
      },
      'angular-translate': {
        deps: ['angular']
      },
      'd3': {
        exports: 'd3'
      }
    }
  };

  // helpers
  // shim libraries loaded as <script> tag
  if (root.jQuery) {
    requirejs.undef('jquery');
    define('jquery', function () {
      return root.jQuery
    });
  }
  if (root.angular) {
    requirejs.undef('angular');
    define('angular', function () {
      return root.angular
    });
  }

  /**
   * RequireJS plugin to load Launchpad style modules without having to individually
   * add each module to the `paths` and `packages` configuration.
   *
   * Usage: `var eg = require('module!example');`
   *
   * With the default configuration, this will load the module in file
   * `/static/features/%5BBBHOST%5D/module-example/scripts/main.js`
   *
   */
  define('module', {
    load: function (name, req, onload, config) {
      var moduleName = name.substring(0, name.indexOf('/'));

      if (!(moduleName in config.paths)) {
        config.paths[moduleName] = path + '/' + moduleName + '/' + dist + 'scripts';
      }

      req([name], function (mod) {
        onload(mod);
      });
    },

    normalize: function (name, normalize) {
      var prefix = (name.indexOf('module-') !== 0)
        ? 'module-'
        : '';

      var suffix = (name.indexOf('/') < 0)
        ? '/main'
        : '';

      return prefix + name + suffix;
    }
  });

  return config;
}));
