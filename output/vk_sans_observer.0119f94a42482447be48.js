(self.webpackChunkvk=self.webpackChunkvk||[]).push([[6569],{30179:function(e,t,n){"use strict";var o=n(52648);const s=e=>document.documentElement.style.setProperty(e,getComputedStyle(document.documentElement).getPropertyValue(e).replace(/^ *?["']VK Sans Display["'], ?/,""));(e=>{const t="vkSansCached";if("fonts"in document&&!o.vkSessionStorage.getItem(t)){const n="aа",a=[e,"--vk-sans-display"],r=()=>{a.forEach((e=>document.documentElement.style.removeProperty(e))),o.vkSessionStorage.setItem(t,String(!0))};a.forEach(s),Promise.all(['700 1em "VK Sans Display"'].map((e=>document.fonts.load(e,n)))).then(r).catch(r)}document.addEventListener("keydown",(e=>{e.altKey&&"KeyK"===e.code&&o.vkSessionStorage.removeItem(t)}))})("--base-fonts");try{stManager.done("vk_sans_observer.js")}catch(e){console.error(e)}}},function(e){"use strict";e.O(0,[1216,9522,8,7822,220,4952,6320,4687,2450,2082,7342,6781,5411,9233,3351,4076,7542,6574,6174,7144,7739,2247,91,4294,5333,8331,6614,8592],(function(){return t=30179,e(e.s=t);var t}));e.O()}]);