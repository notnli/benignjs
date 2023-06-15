(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"v4/d":function(t,i,e){var r,n,o;n=[],void 0===(o="function"==typeof(r=function(){"use strict";var i={target:1,scrollSensitivity:1,touchSensitivity:1,scrollCb:1,touchCb:1,scrollPreventDefault:1,touchPreventDefault:1};function e(t){var e=this;if(Object.keys(t).forEach((function(r){if(!i[r])throw new Error("unknown options for ScrollSwipe: "+r);e[r]=t[r]})),!t.target)throw new Error("must provide DOM target element to ScrollSwipe");return(!this.scrollSensitivity||this.scrollSensitivity<0)&&(this.scrollSensitivity=0),(!this.touchSensitivity||this.touchSensitivity<0)&&(this.touchSensitivity=0),(this.target.style||""===this.target.style.touchAction)&&(this.target.style.touchAction+="manipulation"),this.scrollPending=!1,this.startTouchEvent=null,this.latestTouchEvent=null,this.latestTouch=null,this.startScrollEvent=null,this.latestScrollEvent=null,this.latestScroll=null,this.intent=0,this.currentDirection="VERTICAL",this.touchArr=[],this.xArr=[],this.yArr=[],this.touchArrX=[],this.touchArrY=[],this.intentMap={VERTICAL:{0:"UP",1:"DOWN"},HORIZONTAL:{0:"LEFT",1:"RIGHT"}},this.scrollCb&&this.initScroll(),this.touchCb&&this.initTouch(),this}function r(t,i){this.previousIntent=this.currentIntent,this.currentIntent=t,this.previousDirection=this.currentDirection,this.currentDirection=i}return t.exports=e,e.prototype.listen=function(){return this.flush(),this.scrollPending=!1,this},e.prototype.onWheel=function(t){var i=this;if(this.scrollPreventDefault&&t.preventDefault(),!this.scrollPending){this.startScrollEvent=t;var e=t.deltaX,r=t.deltaY;this.addXScroll(e),this.addYScroll(r),this.scrollFulfilled((function(e,r,n){if(e){i.lockout(),i.latestScrollEvent=t;var o=i.buildResult({startEvent:i.latestScrollEvent,lastEvent:i.latestScrollEvent,direction:r,intent:n});i.scrollCb(o),i.undoLockout()}}))}},e.prototype.initScroll=function(){return this.newOnWheel=this.onWheel.bind(this),this.target&&this.target.addEventListener&&this.target.addEventListener("wheel",this.newOnWheel,!1),this},e.prototype.touchMove=function(t){this.touchPreventDefault&&t.preventDefault();var i=t.changedTouches[0],e=i.clientX,r=i.clientY;this.startTouchEvent=t,this.addXTouch(e),this.addYTouch(r)},e.prototype.buildResult=function(t){var i=t.startEvent,e=t.lastEvent,r=t.direction,n=t.intent;return{startEvent:i,lastEvent:e,direction:r,intent:n,scrollPending:this.scrollPending,mappedIntent:this.intentMap[r][n]}},e.prototype.touchEnd=function(t){var i=this;this.touchFulfilled(t,(function(t,e,r){if(t){var n=i.buildResult({startEvent:i.startTouchEvent,lastEvent:i.latestTouchEvent,direction:e,intent:r});i.touchCb(n)}}))},e.prototype.initTouch=function(){return this.newTouchMove=this.touchMove.bind(this),this.newTouchEnd=this.touchEnd.bind(this),this.target.addEventListener("touchmove",this.newTouchMove,!1),this.target.addEventListener("touchend",this.newTouchEnd,!1),this},e.prototype.touchFulfilled=function(t,i){if(!t)throw new Error("must provide event to touchFulfilled");if(!i)throw new Error("must provide callback to touchFulfilled");var e=this.touchSensitivity,n=this.touchArrX,o=this.touchArrY;if(!(n.length>e&&o.length>e))return i(!1,null);var s=t.changedTouches[0],h=n[0],l=o[0],c=s.clientX,u=s.clientY,a=h<c?0:1,d=l<u?0:1,p="VERTICAL";Math.abs(h-c)>Math.abs(l-u)&&(p="HORIZONTAL");var v="VERTICAL"===p?d:a;return r.call(this,v,p),this.resetTouches(),this.scrollPending=!0,this.latestTouchEvent=t,i(this.scrollPending,this.currentDirection,this.currentIntent),this},e.prototype.getTouch=function(t){return this.touchArr[t]},e.prototype.addXTouch=function(t){return this.pending()||(this.latestTouch=t,this.touchArrX.push(t)),this},e.prototype.addYTouch=function(t){return this.pending()||(this.latestTouch=t,this.touchArrY.push(t)),this},e.prototype.resetTouches=function(){return this.touchArrX=[],this.touchArrY=[],this},e.prototype.addXScroll=function(t){return this.pending()||(this.latestScroll=t,this.xArr.push(t)),this},e.prototype.addYScroll=function(t){return this.pending()||(this.latestScroll=t,this.yArr.push(t)),this},e.prototype.getDirection=function(){return this.currentDirection},e.prototype.resetScroll=function(){return this.xArr=[],this.yArr=[],this},e.prototype.flush=function(){return this.resetScroll(),this.resetTouches(),this},e.prototype.lockout=function(){var t=function(){};return this.originalAddXTouch=this.addXTouch,this.originalAddYTouch=this.addYTouch,this.originalAddXScroll=this.addXScroll,this.originalAddYScroll=this.addYScroll,this.addXScroll=t,this.addYScroll=t,this.addXTouch=t,this.addYTouch=t,this},e.prototype.undoLockout=function(){return this.addXScroll=this.originalAddXScroll,this.addYScroll=this.originalAddYScroll,this.addXTouch=this.originalAddXTouch,this.addYTouch=this.originalAddYTouch,this},e.prototype.scrollFulfilled=function(t){if(!t)throw new Error("must provide callback to scrollFulfilled");var i=this.xArr,e=this.yArr,n=this.scrollSensitivity,o=i.length>n&&e.length>n,s=this.evalScrollDirection(),h=s.direction,l=s.intent;return o&&(r.call(this,l,h),this.resetScroll(),this.scrollPending=!0),t(this.scrollPending,this.currentDirection,this.currentIntent),this},e.prototype.evalScrollDirection=function(){var t=this.getSums(),i=t.x,e=t.y,r=t.xIntent,n=t.yIntent,o=i>e?"HORIZONTAL":"VERTICAL",s=0;return("VERTICAL"===o?n:r)>0&&(s=1),{direction:o,intent:s}},e.prototype.getSums=function(){var t=this.xArr,i=this.yArr,e=0,r=0;return{x:t.reduce((function(t,i){return e+=i,t+Math.abs(i)}),0),y:i.reduce((function(t,i){return r+=i,t+Math.abs(i)}),0),xIntent:e,yIntent:r}},e.prototype.getScrollDirection=function(){return this.currentDirection},e.prototype.pending=function(){return this.scrollPending},e.prototype.killScroll=function(){return this.target&&this.target.removeEventListener&&this.target.removeEventListener("wheel",this.newOnWheel,!1),this},e.prototype.killTouch=function(){return this.target&&this.target.removeEventListener&&(this.target.removeEventListener("touchmove",this.newTouchMove,!1),this.target.removeEventListener("touchend",this.newTouchEnd,!1)),this},e.prototype.killAll=function(){return this.killScroll().killTouch(),this.flush(),this},e})?r.apply(i,n):r)||(t.exports=o)}}]);