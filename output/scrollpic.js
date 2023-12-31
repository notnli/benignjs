/*
Author:Jason Yu
Date  :2013-09-27
*/
(function(){
	function MaMaScrollPic(o){
		this.init(o);
	}
	MaMaScrollPic.prototype = {
		init:function(o){
			this.ScrollList = document.getElementById(o.id);
			if(!this.ScrollList){
				return
			}
			
			this.aScrollListLi = this.ScrollList.getElementsByTagName("li");
			this.oScrollTab = this.ScrollList.nextSibling;
			var ILENGTH = this.ScrollList.parentNode.childNodes.length;
			for(var i=0; i<ILENGTH; i++){
				if(this.oScrollTab.nodeType != 1){
					this.oScrollTab = this.oScrollTab.nextSibling;
				}else{
					break;
				}
			}
			
			this.time = o.time || 3000;
			this.iLen = this.aScrollListLi.length;
			this.iOpacity = 0;
			this.iNow = 0;
			this.iLast = this.iLen-1;
			var that = this;
			this.iTimer = setTimeout(function(){that.autoRun()},that.time);
			this.iFilterTimer = null;
			this.appendTab();
			this.addEv();
			
			if(o.btn){
				this.lbtn = this.oScrollTab.nextSibling;
				for(var i=0; i<ILENGTH; i++){
					if(this.lbtn.nodeType != 1){
						this.lbtn = this.lbtn.nextSibling;
					}else{
						break;
					}
				}
				
				this.rbtn = this.lbtn.nextSibling;
				for(var i=0; i<ILENGTH; i++){
					if(this.rbtn.nodeType != 1){
						this.rbtn = this.rbtn.nextSibling;
					}else{
						break;
					}
				}
				this.addBtn();
			}
		},
		appendTab:function(){
			this.oFragment = document.createDocumentFragment();
			for(var i=0; i<this.iLen; i++){
				var oSpan = document.createElement("span");
				if(i==0){
					oSpan.className = "hover";
				}
				oSpan.innerHTML = i+1;
				this.oFragment.appendChild(oSpan);
			}
			this.oScrollTab.appendChild(this.oFragment);
		},
		addEv:function(){
			this.aScrollTabSpan = this.oScrollTab.getElementsByTagName("span");
			var that = this;
			for(var i=0; i<this.iLen; i++){
				that.aScrollTabSpan[i].index = i;
				that.aScrollTabSpan[i].onmouseover = function(){
					clearTimeout(that.iTimer);
					if(that.iNow==this.index){
						return
					}
					that.iLast = that.iNow;
					that.iNow = this.index;
					that.tabClass();
				}
				that.aScrollTabSpan[i].onmouseout = function(){
					that.iTimer = setTimeout(function(){that.autoRun()},that.time);
				}
			}
		},
		filterChange:function(){
			var that = this;
			clearTimeout(that.iFilterTimer);
			this.iOpacity += 20;
			
			for(var i=0; i<this.iLen; i++){
				this.aScrollListLi[i].style.opacity = 0;
				this.aScrollListLi[i].style.filter = "alpha(opacity=0)";
				this.aScrollListLi[i].style.display = "none";
			}
			this.aScrollListLi[this.iNow].style.opacity = this.iOpacity/100;
			this.aScrollListLi[this.iNow].style.filter = "alpha(opacity=" + this.iOpacity + ")";
			this.aScrollListLi[this.iNow].style.display = "block";
			
			this.aScrollListLi[this.iLast].style.opacity = (100-this.iOpacity)/100;
			this.aScrollListLi[this.iLast].style.filter = "alpha(opacity=" + (100-this.iOpacity) + ")";
			this.aScrollListLi[this.iLast].style.display = "block";
			
			if(this.iOpacity<100){
				this.iFilterTimer = setTimeout(function(){that.filterChange()},1000/30);
			}else{
				this.iOpacity = 0;
				this.aScrollListLi[this.iLast].style.display = "none";
				this.aScrollListLi[this.iNow].removeAttribute("style");
			}
			
		},
		addBtn:function(){
			var that = this;
			this.lbtn.onclick = function(){
				clearTimeout(that.iTimer);
				that.iLast = that.iNow;
				that.iNow--;
				if(that.iNow<0){
					that.iNow = that.iLen-1;
				}
				that.tabClass();
			}
			
			this.rbtn.onclick = function(){
				clearTimeout(that.iTimer);
				that.iLast = that.iNow;
				that.iNow++;
				if(that.iNow>=that.iLen){
					that.iNow = 0;
				}
				that.tabClass();
			}
			
			this.lbtn.onmouseout = this.rbtn.onmouseout = function(){
				that.iTimer = setTimeout(function(){that.autoRun()},that.time);
			}
		},
		autoRun:function(){
			var that = this;
			clearTimeout(that.iTimer);
			that.iLast = that.iNow;
			this.iNow++;
			if(this.iNow>=this.iLen){
				this.iNow = 0;
			}
			this.tabClass();
			this.iTimer = setTimeout(function(){that.autoRun()},that.time);
		},
		tabClass:function(){
			for(var j=0; j<this.iLen; j++){
				this.aScrollTabSpan[j].className = "";
				this.aScrollListLi[j].className = "";
			}
			this.aScrollTabSpan[this.iNow].className = "hover";
			this.aScrollListLi[this.iNow].className = "on";
			this.iOpacity = 0;
			this.filterChange();
		}
	}
	window.MaMaScrollPic = MaMaScrollPic;
})()
