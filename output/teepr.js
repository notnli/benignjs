//Share Button + Subscribe Popup Code
// var modal;
// var sTop = window.screen.height/2-(218);
// var sLeft = window.screen.width/2-(313);

jQuery(document).ready(function(){
  jQuery('#vdsShare').on("click",function(event){
    event.preventDefault();
    // var child=window.open('https://www.facebook.com/sharer/sharer.php?u='+pw_script_vars.permalink,'facebook-share-dialog','width=626,height=436');

    FB.ui(
     {
      method: 'share',
      href: pw_script_vars.permalink
    }, function(response){});

    // if(readCookie('TeeprEmailOpt') === null) {
    //   var timer=setInterval(checkChild, 500);
    // }
    // function checkChild() {
    //   if (child.closed) {
    //     clearInterval(timer);
    //     if (!jQuery.cookie('TeeprEmailOpt')) {
    //       //jQuery('.modalLink').trigger('click');
    //     }
    //   }
    //   return false;
    // }

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i=0;i < ca.length;i++) {
    //   var c = ca[i];
    //   while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //   }
    //   return null;
    //   }
    //   return false;
  });

  jQuery('#vdsShare2').on("click",function(event){
    event.preventDefault();
    // var child=window.open('https://www.facebook.com/sharer/sharer.php?u='+pw_script_vars.permalink,'facebook-share-dialog','width=626,height=436');

    FB.ui(
     {
      method: 'share',
      href: pw_script_vars.permalink
    }, function(response){});

    // if(readCookie('TeeprEmailOpt') === null) {
    //   var timer=setInterval(checkChild, 500);
    // }
    // function checkChild() {
    //   if (child.closed) {
    //     clearInterval(timer);
    //     if (!jQuery.cookie('TeeprEmailOpt')) {
    //       //jQuery('.modalLink').trigger('click');
    //     }
    //   }
    //   return false;
    // }

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i=0;i < ca.length;i++) {
    //   var c = ca[i];
    //   while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //   }
    //   return null;
    //   }
    //   return false;
  });

  jQuery('#vdsShare3').on("click",function(event){
    event.preventDefault();
    // var child=window.open('https://www.facebook.com/sharer/sharer.php?u='+pw_script_vars.permalink,'facebook-share-dialog','width=626,height=436');

    FB.ui(
     {
      method: 'share',
      href: pw_script_vars.permalink
    }, function(response){});

    // if(readCookie('TeeprEmailOpt') === null) {
    //   var timer=setInterval(checkChild, 500);
    // }
    // function checkChild() {
    //   if (child.closed) {
    //     clearInterval(timer);
    //     if (!jQuery.cookie('TeeprEmailOpt')) {
    //       //jQuery('.modalLink').trigger('click');
    //     }
    //   }
    //   return false;
    // }

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i=0;i < ca.length;i++) {
    //   var c = ca[i];
    //   while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //   }
    //   return null;
    //   }
    //   return false;
  });

  jQuery('#vdsShare4').on("click",function(event){
    event.preventDefault();
    // var child=window.open('https://www.facebook.com/sharer/sharer.php?u='+pw_script_vars.permalink,'facebook-share-dialog','width=626,height=436');

    FB.ui(
     {
      method: 'share',
      href: pw_script_vars.permalink
    }, function(response){});

    // if(readCookie('TeeprEmailOpt') === null) {
    //   var timer=setInterval(checkChild, 500);
    // }
    // function checkChild() {
    //   if (child.closed) {
    //     clearInterval(timer);
    //     if (!jQuery.cookie('TeeprEmailOpt')) {
    //       //jQuery('.modalLink').trigger('click');
    //     }
    //   }
    //   return false;
    // }

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i=0;i < ca.length;i++) {
    //   var c = ca[i];
    //   while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //   }
    //   return null;
    //   }
    //   return false;
  });


    // jQuery('.modalLink').modal({
    //     trigger: '.modalLink',          // id or class of link or button to trigger modal
    //     olay:'div.overlay',             // id or class of overlay
    //     modals:'div.modal',             // id or class of modal
    //     animationEffect: 'slideDown',   // overlay effect | slideDown or fadeIn | default=fadeIn
    //     animationSpeed: 400,            // speed of overlay in milliseconds | default=400
    //     moveModalSpeed: 'fast',         // speed of modal movement when window is resized | slow or fast | default=false
    //     background: '333333',           // hexidecimal color code - DONT USE #
    //     opacity: 0.7,                   // opacity of modal |  0 - 1 | default = 0.8
    //     openOnLoad: false,              // open modal on page load | true or false | default=false
    //     docClose: true,                 // click document to close | true or false | default=true
    //     closeByEscape: true,            // close modal by escape key | true or false | default=true
    //     moveOnScroll: true,             // move modal when window is scrolled | true or false | default=false
    //     resizeWindow: true,             // move modal when window is resized | true or false | default=false
    //     video: 'http://player.vimeo.com/video/2355334?color=eb5a3d',    // enter the url of the video
    //     videoClass:'video',             // class of video element(s)
    //     close:'.closeBtn'               // id or class of close button
    // });

    // jQuery('#vdsNoMore').on('click', function() {
    //   jQuery('.closeBtn').trigger('click');
    //   //setting cookie
    //   var days=15;
    //   var date = new Date();
    //   date.setTime(date.getTime()+(days*24*60*60*1000));
    //   var expires = "; expires="+date.toGMTString();
    //   document.cookie = "TeeprEmailOpt=1"+expires+"; path=/";
    //   return false;
    // });

    if ( window.location.pathname !== '/' ) {
        // setTimeout(function() {
        //     jQuery('html,body').scrollTop(105); //To prevent users from refreshing from page bottom and stopping at the post auto-load area, causing website crash
        // }, 3000);

        function noFbCookieCheck() {
          return Cookies.get("popmake-fb-popup-cookie") === undefined;
        };
    }

    // REMOVE SPACE BETWEEN <p> AND <img> TAGS
    // var markUpContent = $('.post-single-content').html();
    // markUpNew = markUpContent.replace(/\>\&nbsp\;\<img/, "><img");
    // $('.post-single-content').html((markUpNew));

    // Show fb popup when reached share button
    // if ( window.location.pathname !== '/' ) {
    //     window.fbLikeOpened = 0;
    //     jQuery(window).scroll(function() {

    //         if (jQuery('.share-wrapper').length > 0) {
    //             var cue = jQuery('.share-wrapper').offset().top;
    //         } else {
    //             var cue = 300;
    //         }

    //       if (jQuery(this).scrollTop()+ jQuery(window).height() > (cue)&&window.fbLikeOpened == 0){
    //         window.fbLikeOpened = 1;
    //         if (noFbCookieCheck()) {
    //             jQuery('#popmake-145753').popmake('open');
    //             jQuery('#popmake-145753').on('popmakeAfterClose', function () {
    //               if (noFbCookieCheck()) {
    //                 Cookies.set('popmake-fb-popup-cookie', true, { expires: 1 });
    //               }
    //             });
    //         } //end of no ad section
    //       }
    //     });
    // }
});

$(document).ajaxComplete(function( event, xhr, settings ) {
  if (settings.url.indexOf('alm_query')!== -1||settings.url.indexOf('alm-cache')!== -1) {
    $('.alm-reveal a').each(function(){
      var hrefSplit = $(this).attr('href').split('/');
      if (hrefSplit[2]!==window.location.host) {
        // console.log(hrefSplit);
        hrefSplit[2] = window.location.host;
        $(this).attr('href', hrefSplit.join('/'));
      }
    })
  }
});

// jQuery(document).on("abd_status_change", function(event, data) {
//   if (data.blockerDetected) {
//     ga('send', 'event', 'ADB', data.detectionMethod);
//   }
//
