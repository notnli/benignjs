"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7985],{392911:function(e,n,t){t.r(n),t.d(n,{amountClaimed:function(){return xe},arrowDownIcon:function(){return I},avg:function(){return Ee},avgPrice:function(){return ve},babyRegistry:function(){return o},bestSeller:function(){return M},cashAvailable:function(){return ue},cashClaimed:function(){return de},cashEarned:function(){return me},cashPending:function(){return pe},classroomReg:function(){return d},clearance:function(){return A},colorOptions:function(){return J},colorOptnsCount:function(){return Ie},creditCardIcon:function(){return S},ctaText:function(){return y},currentPrice:function(){return j},customerPick:function(){return V},details:function(){return p},discountPrice:function(){return Ve},displayOptions:function(){return oe},displaySizes:function(){return ie},down:function(){return Le},eachLabel:function(){return Se},earnReward:function(){return le},ebtEligible:function(){return a},ebtText:function(){return Ne},eventMultiplierStr:function(){return re},eventRegistry:function(){return c},finalCostByWeight:function(){return Oe},flashPick:function(){return O},flyoutText:function(){return Y},getWalmartCash:function(){return ce},holidayDeal:function(){return h},itemFrom:function(){return E},joinWalmartPlus:function(){return te},multiplierCash:function(){return ge},multiplierCashBack:function(){return we},offerSavedToList:function(){return be},ok:function(){return D},onlyAt:function(){return Be},onlyAtWalmart:function(){return _e},optionText:function(){return Z},outOfStock:function(){return v},petRxIcon:function(){return ae},popularPick:function(){return F},prescriptionRequired:function(){return ee},priceEachString:function(){return Ae},pricesMayVary:function(){return ne},product:function(){return f},ratingText:function(){return R},reducedPrice:function(){return C},remainingItems:function(){return je},rewardAdded:function(){return B},rewardApplied:function(){return k},rewardAvailable:function(){return W},rewardLogo:function(){return _},rewardSaved:function(){return P},rewards:function(){return $},rollback:function(){return N},save:function(){return w},savedPrice:function(){return x},seePriceInCart:function(){return Me},shippingEligibilityText:function(){return Ce},signIn:function(){return G},sorryText:function(){return z},sorryTextOffer:function(){return fe},sparkGoodRegistry:function(){return u},sponsored:function(){return H},storeAvailabilityText:function(){return Fe},substitution:function(){return i},supplierSourced:function(){return Pe},swatchAltText:function(){return q},termsAndConditions:function(){return m},tryAgain:function(){return X},unlockEarnOfferMessage:function(){return se},unlockOffer:function(){return ye},unlockReward:function(){return U},variantDisplayName:function(){return Re},variantOptnsCount:function(){return he},viewAll:function(){return T},viewList:function(){return Q},walmartPlus:function(){return K},walmartPlusIcon:function(){return L},wasPrice:function(){return g},weddingRegistry:function(){return s},youSave:function(){return b}});var l=t(40656),r=t(491288);const a=()=>"EBT eligible",i=()=>"Substitution",o=()=>"Baby Registry",s=()=>"Wedding Registry",c=()=>"Event Registry",d=()=>"Classroom Registry",u=()=>"Spark Good Registry",m=()=>"Terms and Conditions",p=()=>"Details",y=e=>"Show "+l.Ys(e.isExpanded,{true:"less",other:"more"})+" selections",f=()=>"product",w=()=>"SAVE",g=e=>"Was "+e.wasPrice,x=e=>"save "+e.savedPrice,b=()=>"YOU SAVE",E=e=>"Item from "+e.registryName,v=()=>"Out of stock",L=()=>"walmart plus early access",S=()=>"credit card",I=()=>"arrow down",h=()=>"Holiday deal",A=()=>"Clearance",N=()=>"Rollback",V=()=>"Customer pick",C=()=>"Reduced price",F=()=>"Popular pick",M=()=>"Best seller",O=()=>"Flash Pick",j=e=>"current price "+e.price,R=e=>e.averageRating+" out of 5 Stars. "+l.Ys(e.numberOfReviews,{undefined:"",other:e.numberOfReviews+" reviews"}),P=()=>"Reward saved to your list",B=()=>"Reward added",_=()=>"Reward Logo",k=()=>"Reward applied",W=()=>"Reward available",U=()=>"Unlock reward",G=()=>"Sign in",D=()=>"Ok",z=()=>"Sorry! We were unable to add your reward.",X=()=>"We're working on fixing it. Please try again later.",$=()=>"Rewards",q=()=>"Product variant swatch image",T=()=>"View All",H=()=>"Sponsored",Y=e=>"show "+l.Ys(e.showFlyout,{true:"fewer",other:"more"})+" variants",J=e=>"show "+l.Ys(e.showFlyout,{true:"less",other:"more"})+" color options",Z=e=>"option"+l.Ho(e.variantsSize,0,r.en,{"1":"",other:"s"}),K=()=>"Walmart Plus",Q=()=>"View list",ee=()=>"Prescription required",ne=()=>"Prices may vary based on quantity",te=()=>"Join Walmart+",le=e=>"Earn $"+e.rewardAmt+" reward with",re=e=>e.rewardMultiplier+" rewards",ae=()=>"Walmart pharmacy for pets",ie=e=>"Available in additional "+e.displayString,oe=e=>"Available in additional "+e.variantsSize+" option"+l.Ho(e.variantsSize,0,r.en,{"1":"",other:"s"}),se=e=>"Earn $"+e.rewardAmt+" "+e.walmartCash,ce=e=>"Get $"+e.rewardAmt+" "+e.walmartCash,de=e=>e.walmartCash+" claimed",ue=e=>e.walmartCash+" available",me=e=>e.walmartCash+" earned",pe=e=>e.walmartCash+" pending",ye=()=>"Unlock offer",fe=()=>"Sorry! We were unable to add your offer.",we=e=>e.rewardMultiplier+" cash back",ge=e=>e.rewardMultiplier+" "+e.walmartCash,xe=e=>"$"+e.rewardAmt+" claimed",be=()=>"Offer saved to your Claimed Offers list",Ee=()=>"avg",ve=()=>"avg price",Le=()=>"down",Se=e=>e.unitPrice+" ea",Ie=e=>"Available in additional "+l.Ho(e.hiddenOptnsCount,0,r.en,{"1":l.Rx("en",e.hiddenOptnsCount,0)+" color",other:l.Rx("en",e.hiddenOptnsCount,0)+" colors"}),he=e=>"Available in additional "+l.Ho(e.hiddenOptnsCount,0,r.en,{"1":l.Rx("en",e.hiddenOptnsCount,0)+" variant",other:l.Rx("en",e.hiddenOptnsCount,0)+" variants"}),Ae=e=>e.price+" ea",Ne=()=>"ebt",Ve=e=>"Discount price "+e.linePrice,Ce=()=>"Shipping eligibility varies",Fe=()=>"Store availability varies",Me=()=>"See price in cart",Oe=()=>"Final cost by weight",je=e=>"+"+e.remainingItems+" more "+l.Ho(e.remainingItems,0,r.en,{"1":"selection",other:"selections"}),Re=e=>"+"+e.variantsSize+" "+e.displayName,Pe=()=>"Supplier-sourced",Be=()=>"Only at",_e=()=>"Only at Walmart"}}]);