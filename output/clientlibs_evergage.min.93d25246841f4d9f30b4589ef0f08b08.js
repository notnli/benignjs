var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.evergage=SfdcWwwBase.evergage||{};
(function(){SfdcWwwBase.evergage.checkEvergage=function(b,a){if(typeof Evergage!=="undefined"){if(b){Evergage.init().then(function(c){b(a)
})
}}else{document.addEventListener("evergage:onInit",function(){if(b){b(a)
}})
}};
SfdcWwwBase.evergage.sendAction=function(a){if(a&&typeof Evergage!=="undefined"){try{Evergage.sendEvent({action:a})
}catch(b){Evergage.sendException(b,a)
}}}
}());
(function(){var b={init:"sfdc-chatInitialize",view:"sfdc-chatView"},a=function(){document.addEventListener(b.init,function(c){SfdcWwwBase.evergage.checkEvergage(SfdcWwwBase.evergage.sendAction,"Chat Initialize")
});
document.addEventListener(b.view,function(c){SfdcWwwBase.evergage.checkEvergage(SfdcWwwBase.evergage.sendAction,"Chat View")
})
};
document.addEventListener("DOMContentLoaded",function(){a()
})
}());
(function(){var d={init:"init-form",success:"success-form"},b=function(f){var e="";
if(f.signup){e="Trial Form"
}else{if(f.formType==="lead"){e="Regular Form"
}}return e
},a=function(h,g){var f=b(h),e=f?f+" "+g:"";
return e
},c=function(){document.addEventListener(d.init,function(f){var e=a(f.detail,"View");
SfdcWwwBase.evergage.checkEvergage(SfdcWwwBase.evergage.sendAction,e)
});
document.addEventListener(d.success,function(f){var e=a(f.detail,"Complete");
SfdcWwwBase.evergage.checkEvergage(SfdcWwwBase.evergage.sendAction,e)
})
};
document.addEventListener("DOMContentLoaded",function(){c()
})
}());