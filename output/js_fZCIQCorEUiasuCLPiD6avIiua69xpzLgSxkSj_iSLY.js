/**
 * @file
 * Defines the userTracker JavaScript API.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  const euList = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "CH", "IS", "LI", "NO"];

  /**
   * Global userTracker object.
   *
   * All userTracker JavaScript APIs are contained in this namespace.
   *
   * @global
   *
   * @namespace
   */
  window.userTracker = {

    /**
     * Saved country.
     */
    country: null,

    /**
     * Determines whether location is already saved.
     *
     * This is necessary, since some events that bind to "userTracker:load"
     * might initialize their binding too late and their event will never fire.
     */
    initialisationComplete: false,

    /**
     * Determines whether current site is a EU/EEA subdomain.
     */
    euSubdomain: false,

    /**
     * Get user's country code.
     *
     * @returns {String}
     *   User country code.
     */
    getUserCountry: function getUserCountry() {
      return userTracker.country;
    },

    /**
     * Set user's country code.
     */
    setUserCountry: function setUserCountry() {

      // Prevent duplicate re-runs.
      if (userTracker.initialisationComplete) {
        return;
      }

      let storedCountry = sessionStorage.getItem('userCountry'),
        locationStatus = $.cookie('location_is_verified');

      // Determine user's location.
      // Load from storage.

      if (storedCountry && typeof(locationStatus) !== 'undefined' && locationStatus) {
        userTracker.country = storedCountry;

        // Trigger load event.
        userTracker.initialisationComplete = true;
        $(window).once('locationLoad').trigger('userTracker:load');
      }
      // Load from IP-API.
      else {
        var endpoint = 'https://pro.ip-api.com/json/?key=NsI877AefRmEbY3&fields=countryCode';
        if (typeof(drupalSettings.apiEndpoint) !== 'undefined' && drupalSettings.apiEndpoint) {
          endpoint = drupalSettings.apiEndpoint;
        }

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);
            if(response.countryCode) {
              userTracker.country = response.countryCode;
              // Uncomment or change the line below for debugging as Germany.
              // userTracker.country = 'DE';

              // Save the country value.
              sessionStorage.setItem('userCountry', userTracker.country);
              userTracker.initialisationComplete = true;

              // Init all tracker post-load events.
              $(window).once('locationLoad').trigger('userTracker:load');
              userTracker.verifyLocation(true);
            }
          }
        };
        xhr.open('GET', endpoint, true);
        xhr.send();
      }
      if (typeof(drupalSettings.disableModal) !== 'undefined' && drupalSettings.disableModal) {
        localStorage.setItem('automaticRedirect', 'accept');
      }
    },

    /**
     * Set the status of location call.
     *
     * This is done to make sure we call maxmind services no more than once a
     * day per user.
     *
     * @param verified
     *   Verification status. true to mark verification as complete, false to
     *   invalidate it.
     */
    verifyLocation: function verifyLocation(verified) {
      let domain = "." + document.domain;

      if (verified) {
        $.cookie('location_is_verified', 1, {
          expires: 1,
          path: '/',
          domain: domain
        });
      }
      else {
        $.removeCookie('location_is_verified', {
          path: '/',
          domain: domain
        });
      }
    },

    /**
     * Determine user's country and execute a function once it's located.
     *
     * @param callback
     *   Function to execute once country is determined.
     * @param callbackData
     *   Data to pass into the callback function.
     */
    executeOnCountryLookup: function executeOnCountryLookup(callback, callbackData) {

      if (typeof callback === "function") {
        if (userTracker.initialisationComplete) {
          callback(callbackData);
        }
        else {
          $(window).on('userTracker:load', function () {
            callback(callbackData);
          });
        }
      }
    }

  };

  // Main starting point.
  userTracker.setUserCountry();

}(jQuery, Drupal, window.drupalSettings));
;
/**
 * @file
 * Defines the Regional Redirect functionality.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Initialize redirect logic for the country.
   *
   * @param {Array} redirects
   *   Redirect data array for the all available countries.
   */
  function initCountryRedirect(redirects) {
    let country = userTracker.getUserCountry(),
      redirectData = redirects[country];

    if (redirectData) {

      let automaticRedirect = localStorage.getItem('automaticRedirect');

      // If users saved their redirect decision - redirect immediately.
      if (automaticRedirect === 'accept') {
        let targetUrl = redirectData['to'];

        // Don't redirect if we're already on the target page.
        if (window.location.href !== targetUrl) {
          if (localStorage.getItem('stopRedirect')) {
            console.log('no redirect');
          }else {
            // Redirect to region page.
            window.location.replace(targetUrl);
          }
        }
      }
      else if (automaticRedirect === 'decline') {
        // Remove the redirect block from the dom.
        $('.block-regional-redirect-block').remove();
      }
      else {
        // Inject the modal.
        injectRedirectModal(redirectData);
        initRedirectEventListeners(redirectData);
      }
    }
    else {
      // No redirects for current user's country - remove the redirect
      // block from the dom.
      $('.block-regional-redirect-block').remove();
    }
  }

  /**
   * Inject HTML for redirect modal.
   *
   * @param {Array} redirectData
   *   Redirect data for the country.
   */
  const injectRedirectModal = function (redirectData) {

    let $modalCopy = $('.modal-redirect-copy'),
      $acceptLink = $('.accept-redirect'),
      $cancelLink = $('.cancel-redirect'),
      $rememberBox = $('.form-item-remember-choice label');

    // Add modal copy.
    $modalCopy.once('inject-modal-copy').append(redirectData['modalCopy']);

    // Inject the right checkbox label.
    $rememberBox.once('inject-modal-box').text(redirectData['modalBoxText']);

    // Inject correct button text.
    $acceptLink.once('inject-accept').val(redirectData['acceptText']);
    $cancelLink.once('inject-cancel').val(redirectData['cancelText']);

    // Show the form.
    $('.regional-redirect-wrapper').removeClass('hidden');
  };

  /**
   * Initialize event listeners for Redirect form.
   *
   * @param {Array} redirectData
   *   Redirect data for the country.
   */
  const initRedirectEventListeners = function (redirectData) {
    let $acceptLink = $('.accept-redirect'),
      $cancelLink = $('.cancel-redirect'),
      $rememberBox = $('.modal-redirect-remember'),
      targetUrl = redirectData['to'];

    // "Accept" handler.
    $acceptLink.once('accept-redirect-click').click(function (e) {
      e.preventDefault();

      // Save the value of "Remember my Choice" box.
      if ($rememberBox.prop('checked')) {
        localStorage.setItem('automaticRedirect', 'accept');
      }
      else {
        localStorage.removeItem('automaticRedirect');
      }

      // Redirect after a small timeout.
      setTimeout(function () {
        window.location.replace(targetUrl)
      }, 200);
    });

    // "Cancel" handler.
    $cancelLink.once('cancel-redirect-click').click(function (e) {
      e.preventDefault();

      // Save the value of "Remember my Choice" box.
      if ($rememberBox.prop('checked')) {
        localStorage.setItem('automaticRedirect', 'decline')
      }
      else {
        localStorage.removeItem('automaticRedirect');
      }
    });

    $('.regional-redirect-wrapper').once('modal-injected')
      .trigger('regionRedirect:load')
      .addClass('modal-injected');
  };

  /**
   * Attaches the country redirects behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the country redirects behaviors.
   */
  Drupal.behaviors.countryRedirects = {

    attach: function (context, settings) {

      /**
       * General initialization of country redirect functionality.
       */
      const preInit = function () {

        if (settings.disableModal === 'undefined') {
          // Check for the modal.
          let $redirectModal = $('.regional-redirect-wrapper');
          if (!$redirectModal.length) {
            return false;
          }
        }

        let redirects = getRedirects();

        // Initialize the functionality once country is determined.
        userTracker.executeOnCountryLookup(initCountryRedirect, redirects);
      };

      /**
       * Retrieve Regional Redirects.
       *
       * @return {Array}
       *   Array of defined redirect Settings.
       */
      const getRedirects = function () {
        if (typeof(settings.crrData) !== 'undefined' && settings.crrData) {

          return settings.crrData;
        }

        return [];
      };

      preInit();
    }
  };

}(jQuery, Drupal, window.drupalSettings));
;
