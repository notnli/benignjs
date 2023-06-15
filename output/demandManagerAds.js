$(function(){

    var deviceWidth = $(window).width();
    var interval;


    
    if(pub === "hello" && isGallery===false && adslot0 && adslot1) {

        if(deviceWidth >= 375){

          //console.log("___ Hello inskin_yes_m");

          if(positions['OOP']===true)
            adslot1.setTargeting("inskin_yes_m","true");
          else
            adslot0.setTargeting("inskin_yes_m","true");
        }


        if(deviceWidth >= 1540){

          //console.log("___ Hello inskin_yes_d");

          if(positions['OOP']===true)
            adslot1.setTargeting("inskin_yes_d","true");
          else
            adslot0.setTargeting("inskin_yes_d","true");
        }


      }
    // if(pub === "hello" && isGallery===false) {
    //     if(deviceWidth >= 375) {

    //         if(positions['OOP']===true)
    //             adslot1.setTargeting("inskin_yes_m","true");
    //         else
    //             adslot0.setTargeting("inskin_yes_m","true");
    //     }

    //     if(deviceWidth >= 1540){

    //         if(positions['OOP']===true)
    //             adslot1.setTargeting("inskin_yes_d","true");
    //         else
    //             adslot0.setTargeting("inskin_yes_d","true");
    //     }
    // }
    console.log("Resolving ids for mediaqueries");
    console.log("Rendering slots with adunit -> %c"+adUnit, 'color:orange; font-weight: bold;');
    setWinnerSlots(deviceWidth, positions);
});


function setWinnerSlots(deviceWidth, positions) {
    
    var arr = document.querySelectorAll("[ad]");

    for(var i = 0; i < arr.length; i++) {
      
        var slot = arr[i],
            id = slot.getAttribute('data-js-ad-manager-slot'),
            shortcode = slot.getAttribute('data-shortcode'),
            slotActivated = positions[shortcode];

        // If slot is active on settings
        if(slotActivated === true) {
            // Render slots with no media queries or the one selected by width
            var maxw = slot.getAttribute('data-js-maxw'), minw = slot.getAttribute('data-js-minw');

            if( minw === null && maxw === null || minw === null && deviceWidth <= maxw || minw <= deviceWidth && deviceWidth <= maxw || minw <= deviceWidth && maxw === null ) {
                // Set the id in the winner slot. We use media queries on slots and it should be a winner always depending of devide width
                slot.id = id;
                console.log("\t" + id);

                //cambiado por problema en movil test así estaba hasta 13-10-2020
                // if(i === (arr.length - 1)){
                //     console.log("-> idsLoaded is true");
                //     idsLoaded = true;
                // }

            }
        }
        //cambiado por problema en movil test así está ahora 13-10-2020
        if(i === (arr.length - 1)){
            console.log("-> idsLoaded is true");
            idsLoaded = true;
        }
    }
}