!function(){"use strict";try{var a=document.querySelector(".countdown"),b=a.dataset.expiration,c=new Date(b).getTime(),d=a.querySelector(".days .numbers"),e=a.querySelector(".hrs .numbers"),f=a.querySelector(".mins .numbers"),g=a.querySelector(".sec .numbers"),h=setInterval(function(){var b=(new Date).getTime(),i=c-b,j=Math.floor(i/864e5),k=Math.floor(i%864e5/36e5),l=Math.floor(i%36e5/6e4),m=Math.floor(i%6e4/1e3);d.innerHTML=j<10?"0"+j:j,e.innerHTML=k<10?"0"+k:k,f.innerHTML=l<10?"0"+l:l,g.innerHTML=m<10?"0"+m:m,i<0&&(clearInterval(h),a.remove())},1e3)}catch(i){"undefined"!=typeof sdl&&(console.error(i),sdl.push({system:{error:{type:i.name,message:i.message}},event:"system.error"}))}}();
//# sourceMappingURL=cmp-countdown.js.map