function setSlotsObservables(){
	const deviceWidth = $(window).width();
	
	$("[ad-dynamic]").each(function() {

		let slot = $(this),
			id = slot['context'].dataset['jsAdManagerSlot'],
			maxw = slot['context'].dataset['jsMaxw'],
            minw = slot['context'].dataset['jsMinw'];

        if( minw === undefined && maxw === undefined ||  /* No media queries */
        minw === undefined && deviceWidth <= maxw || /* Device less maxw -> mobile */
        minw <= deviceWidth && deviceWidth <= maxw || /* Intermediate devices -> tablets */
        minw <= deviceWidth && maxw === undefined ) /* Device upper minw -> desktop */
    	{
            slot.attr('id',id);
            slot.attr('data-observable','');
    	}
    });
}

$(function() {
	console.log('/// Dynamic Home ADS');
	setSlotsObservables();
});

const elements = document.querySelectorAll('[data-observable]');

const resolveAd = function(ad) {
	console.log("Dynamic ad - %c"+ad, 'color:orange; font-weight: bold;');
	const adUnitPath = "/87824813/hola/home";
	if (ad.includes('bannerinferior-dinamico')) {
		let indexAd = ad.replace('bannerinferior-dinamico', '');
		let mapping2 = googletag.sizeMapping().addSize([0,0], [[120,600],[200,200],[250,250],[300,250],[300,600],[320,50],[320,100],[320,480],[300,100],[300,75]]).addSize([728,0], [[728,90],[728,200],[468,60],[300,250],[300,600],[250,250],[200,200],[120,600]]).addSize([980,0], [[980,250],[980,90],[970,90],[970,250],[728,90]]).build();
        let dm_mapping = {
            "mapping2": [
				{ minViewPort: [0,0], sizes: [[120,600],[200,200],[250,250],[300,250],[300,600],[320,50],[320,100],[320,480],[300,100],[300,75]]},
				{ minViewPort: [728,0], sizes: [[728,90],[728,200],[468,60],[300,250],[300,600],[250,250],[200,200],[120,600]]},
				{ minViewPort: [980,0], sizes: [[980,250],[980,90],[970,90],[970,250],[728,90]]}
			]
        };
		let slotA = googletag.defineSlot(adUnitPath, [[980,250],[980,90],[970,250],[970,90],[728,200],[728,90],[468,60],[300,600],[320,480],[300,250],[300,100],[300,75],[320,100],[320,50],[250,250],[200,200],[120,600]], ad).
            setTargeting('position','bannerinferior').
            setTargeting('place','BTF').
            setTargeting('sequence',indexAd).
            defineSizeMapping(mapping2).
            addService(googletag.pubads());
        console.log("\t" + "- ad created %c"+"✓", 'color:green; font-weight: bold;');
        pbjs.que.push(function() {
            pbjs.rp.requestBids({
                callback: callAdserver,
                gptSlotObjects: [slotA],
                sizeMappings: dm_mapping
            });
        });
	} else if (ad.includes('robainferior-dinamico')) {
		let indexAd = ad.replace('robainferior-dinamico', '');
		let slotB = googletag.defineSlot(adUnitPath, ["fluid",[120,600],[160,600],[200,200],[250,250],[300,250],[300,600],[336,280]], ad).
            setTargeting('position','robainferior').
            setTargeting('place','BTF').
            setTargeting('sequence',indexAd).
            addService(googletag.pubads());
        console.log("\t" + "- ad created %c"+"✓", 'color:green; font-weight: bold;');
        pbjs.que.push(function() {
            pbjs.rp.requestBids({
                callback: callAdserver,
                gptSlotObjects: [slotB]
            });
        });
	}
};

const observer = new IntersectionObserver(handleIntersection);

elements.forEach(obs => {
  observer.observe(obs);
});

function handleIntersection(entries, observer){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {

      resolveAd(entry.target.getAttribute('id'));

      // Dejamos de observar
      observer.unobserve(entry.target);
    }
  });
}

function callAdserver(gptSlots) {
    console.log("\t" + "- ad displayed %c"+"✓", 'color:green; font-weight: bold;');
    googletag.pubads().refresh(gptSlots);
}
