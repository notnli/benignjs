/*!
 * china_api_login
 * https://www.china.com
 *
 * Copyright (c) 2011 china.com
 *
 * Date: 2014-7
 * Revision: 3.x
 * Edit: F7
 *
 */
(function(window){var login_instantiation=[],isIE=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp['\x241']):undefined;var login_batch=function(){for(var i=0,l=login_instantiation.length;i<l;i++){window[login_instantiation[i]].setHTML();}};var login_outer={};login_outer.postOut=function(callback){if(callback)login_outer.callback=callback;if(confirm("\u786e\u8ba4\u9000\u51fa\uff1f")){var s=document.createElement("script");s.src="https://passport1.china.com/user/passportLogoff.do?callback=china_api_login_outerOutCallback";document.getElementsByTagName("head")[0].appendChild(s);return false;}};var outer_out_callback=function(){if(login_outer.callback)login_outer.callback();login_batch();};window.china_api_login_work=login_outer;window.china_api_login_outerOutCallback=outer_out_callback;login_outer.getCookie=function(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null){return unescape(arr[2]);};return null;};login_outer.getNickname=function(){var nickname=login_outer.getCookie("nickname");if(nickname==null){return false;}else{return nickname;};};window.china_api_login_nickname=login_outer.getNickname;var Login=function(o){this.params={};this.init(o);};Login.prototype.model=function(who,methods){var n;for(n in methods){who[n]=methods[n];}};Login.prototype.getCookie=function(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null){return unescape(arr[2]);};return null;};Login.prototype.setCookie=function(name,value,expires,path,domain){if(expires&&isNaN(expires)===false){expires=new Date(new Date().getTime()+expires);};document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"; path=/")+((domain)?";domain="+domain:"");};Login.prototype.trim=function(source){var re=new RegExp(" ","g");return String(source).replace(re,"");};Login.prototype.init=function(o){var that=this;this.setParams(o);this.setHTML();if(!this.getCookie("nickname")){that.setForm();};if(this.params.initFn)this.params.initFn();};Login.prototype.setParams=function(o){this.model(this.params,{elem:o.id.nodeType==1?o.id:document.getElementById(o.id),userNameInitValue:o.userNameInitValue!=undefined?this.trim(o.userNameInitValue):"\u6ce8\u518c\u90ae\u7bb1\u002f\u7528\u6237\u540d",passwordInitValue:o.passwordInitValue!=undefined?this.trim(o.passwordInitValue):"",initHTML:o.initHTML||"",logonHTML:o.logonHTML||"",hiddenForm:o.hiddenForm||"",initFn:o.initFn||"",submitAfterFn:o.submitAfterFn||"",submitBackFn:o.submitBackFn||"",name:o.name,loginUrl:o.loginUrl||"https://passport1.china.com/user/passportLogon.do",outUrl:o.outUrl||"https://passport.china.com/user/passportLogoff.do"});this.model(this.params,{tag_form:'<form name="'+this.params.name+'_form" method="post" action="">',tag_username:'<input type="text" name="username" />',tag_password:'<input type="password" name="password" />',tag_select_cookietime:'<select name="cookietime"><option value="-1" selected>\u65e0</option><option value="86400">\u4e00\u5929</option><option value="604800">\u4e00\u5468</option><option value="2592000">\u4e00\u6708</option></select>',tag_checkbox_cookietime:'<input type="checkbox" name="checkbox_cookietime" /><input type="hidden" name="cookietime" value="-1" />',tag_out:'<a href="#" onclick="'+this.params.name+'.out(); return false;">\u9000\u51fa</a>',succeed:{},error:{notUserName:function(elem){alert("\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01");elem.focus();},notPassword:function(elem){alert("\u8bf7\u8f93\u5165\u5bc6\u7801\uff01");elem.focus();},notCheckCode:function(){alert("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01");},errorUserName:function(){alert("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff01");},errorPassword:function(){alert("\u5bc6\u7801\u9519\u8bef\uff01");},errorCheckCode:function(){alert("\u9a8c\u8bc1\u7801\u9519\u8bef\uff01");},loginFull:function(){alert("\u60a8\u5df2\u8fde\u7eed\u0035\u6b21\u7528\u6237\u540d\u6216\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01");},loginIpLock:function(){alert("\u60a8\u7684\u0049\u0050\u5df2\u88ab\u7981\u7528\uff01");},errorServer:function(){alert("\u670d\u52a1\u5668\u54cd\u5e94\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u64cd\u4f5c\uff01");},errorOut:function(){alert("\u9000\u51fa\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u64cd\u4f5c\uff01");}}});if(o.error){for(var n in o.error){if(typeof o.error[n]=="function"){this.params.error[n]=o.error[n];};}}
if(o.succeed){for(var n in o.succeed){if(typeof o.succeed[n]=="function"){this.params.succeed[n]=o.succeed[n];};}
this.params.succeed.loginOkUrl=o.succeed.loginOkUrl||"";this.params.succeed.outOkUrl=o.succeed.outOkUrl||"";}};Login.prototype.setHTML=function(){var elem=this.params.elem;if(!this.getCookie("nickname")){elem.innerHTML=this.getInitHTML();this.setForm();this.addFormEvent();}else{elem.innerHTML=this.getLogonHTML();this.loginOk();}};Login.prototype.getInitHTML=function(){var initStr;if(!this.params.initHTML){initStr='{F7:form}';initStr+='<p class="userName">';initStr+='<em>';initStr+="\u7528\u6237\u540d\uff1a";initStr+='</em>';initStr+='<label>{F7:username /}</label>';initStr+='</p>';initStr+='<p class="password">';initStr+='<em>';initStr+="\u5bc6\u7801\uff1a";initStr+='</em>';initStr+='<label>{F7:password /}</label>';initStr+='</p>';initStr+='<p class="loginLink">';initStr+='<a href="https://passport.china.com/logon.do?processID=register1" class="loginReg">';initStr+="\u6ce8\u518c\u5e10\u53f7";initStr+='</a>';initStr+='<a href="https://passport.china.com/jsp/user/findpassword.jsp" class="loginLose">';initStr+="\u5fd8\u8bb0\u5bc6\u7801\uff1f";initStr+='</a>';initStr+='</p>';initStr+='<p class="loginBut">';initStr+='<label class="loginSubmit"><input type="submit" name="button" value="\u767b\u5f55" /></label>';initStr+='<label class="loginReset"><input type="reset" name="button" value="\u91cd\u7f6e" /></label>';initStr+='</p>';initStr+='{/F7:form}';this.params.initHTML=initStr;};return this.converter(this.params.initHTML);};Login.prototype.getLogonHTML=function(){var logomStr,hours;if(!this.params.logonHTML){logomStr='<div class="logon">';logomStr+='<em class="logonGreet">';hours=new Date().getHours();if(hours<12){logomStr+="\u65e9\u4e0a\u597d\uff01";}else if(hours>18){logomStr+="\u665a\u4e0a\u597d\uff01";}else{logomStr+="\u4e0b\u5348\u597d\uff01";};logomStr+='</em>';logomStr+='<em class="logonName">[F7:nickname /]</em>';logomStr+='<em class="logonOut">[F7:out /]</em>';logomStr+='</div>';this.params.logonHTML=logomStr;};return this.converter(this.params.logonHTML);};Login.prototype.converter=function(msg){var parse_html=/{F7.\w*}|({\/F7:{1}).\w*}|({F7:{1}).\w*.(\/}{1})|(\[F7:{1}).\w*.(\/\]{1})/g;var that=this;msg=msg.replace(parse_html,function(word){if(word==="{F7:form}"){if(that.params.hiddenForm){return that.params.tag_form+that.params.hiddenForm;}else{return that.params.tag_form;};};if(word==="{/F7:form}")return'</form>';if(word==="{F7:username /}"||word==="{F7:username/}")return that.params.tag_username;if(word==="{F7:password /}"||word==="{F7:password/}")return that.params.tag_password;if(word==="{F7:select_cookietime /}"||word==="{F7:select_cookietime/}"||word==="{F7:select_cookieTime /}"||word==="{F7:select_cookieTime/}")return that.params.tag_select_cookietime;if(word==="{F7:checkbox_cookietime /}"||word==="{F7:checkbox_cookietime/}"||word==="{F7:checkbox_cookieTime /}"||word==="{F7:checkbox_cookieTime/}")return that.params.tag_checkbox_cookietime;if(word==="[F7:nickname /]"||word==="[F7:nickname/]")return that.getCookie("nickname");if(word==="[F7:out /]"||word==="[F7:out/]")return that.params.tag_out;});return msg;};Login.prototype.setForm=function(str){if(!document[this.params.name+"_form"])return false;var elem=document[this.params.name+"_form"],text=elem.username,pass=elem.password;var nameValue=this.params.userNameInitValue,passValue=this.params.passwordInitValue;if(!str){if(text.value==""||text.value==nameValue){if(isIE&&isIE<10){text.value=nameValue;}else{text.placeholder=nameValue;};text.className="dead";}else{text.className="";};if(this.getCookie("china_login_userID")&&(text.value==""||text.value==nameValue)){text.value=this.getCookie("china_login_userID");text.className="";this.setForm();};if(pass.value==""){if(isIE&&isIE<10){}else{pass.placeholder=passValue;};pass.className="dead";}else{pass.className="";};pass.value==""?pass.className="dead":pass.className="";};if(str=="text"){if(text.value==nameValue){text.value="";}
text.className="current";}
if(str=="password"){pass.className="current";}};Login.prototype.addFormEvent=function(){if(!document[this.params.name+"_form"])return false;var elem=document[this.params.name+"_form"],text=elem.username,pass=elem.password,that=this;text.onfocus=function(){that.setForm("text");};pass.onfocus=function(){that.setForm("password");};text.onblur=function(){that.setForm();this.value=that.trim(this.value);};pass.onblur=function(){that.setForm();};elem.onsubmit=function(){that.checkForm();return false;};};Login.prototype.checkForm=function(){var elem=document[this.params.name+"_form"];if(!elem.username.value||elem.username.value==this.params.userNameInitValue){this.params.error.notUserName(elem.username);return false;};if(!elem.password.value){this.params.error.notPassword(elem.password);return false;};if(elem.checkbox_cookietime&&elem.checkbox_cookietime.checked){elem.cookietime.value=2592000;};this.submit();return false;};Login.prototype.submit=function(){var s,url,params,hiddenParams,_ins,elem=document[this.params.name+"_form"];s=document.createElement("script");url=this.params.loginUrl;params="username="+encodeURI(this.trim(elem.username.value))+"&password="+elem.password.value;if(elem.cookietime){params+="&cookietime="+elem.cookietime.value;}else{params+="&cookietime=-1";}
_ins=elem.getElementsByTagName("input");for(var i=0,l=_ins.length;i<l;i++){if(_ins[i].getAttribute("type")=="hidden"){params+="&"+_ins[i].getAttribute("name")+"="+_ins[i].getAttribute("value");}};params+="&callback="+this.params.name+".callback";s.src=url+"?"+params;if(this.params.submitAfterFn)this.params.submitAfterFn();document.getElementsByTagName("head")[0].appendChild(s);};Login.prototype.out=function(){if(confirm("\u786e\u8ba4\u9000\u51fa\uff1f")){var s=document.createElement("script");s.src=this.params.outUrl+"?callback="+this.params.name+".callback";document.getElementsByTagName("head")[0].appendChild(s);return false;};};Login.prototype.loginOk=function(){if(this.params.succeed.loginOkUrl){window.location=this.params.succeed.loginOkUrl;return false;}
if(this.params.succeed.loginOk)this.params.succeed.loginOk();};Login.prototype.outOk=function(){login_batch();if(this.params.succeed.outOkUrl){window.location=this.params.succeed.outOkUrl;return false;}
if(this.params.succeed.outOk)this.params.succeed.outOk();};Login.prototype.firstLogin=function(){login_batch();if(this.params.succeed.firstLogin)this.params.succeed.firstLogin();this.setCookie("china_login_userID",this.getCookie("nickname"),1000*60*60*24*365);};Login.prototype.callback=function(flag){if(this.params.submitBackFn)this.params.submitBackFn();if(flag==="1"){this.firstLogin();}else if(flag==="0"){this.params.error.errorUserName();}else if(flag==="-2"){this.params.error.loginFull();}else if(flag==="-1"){this.params.error.loginIpLock();}else if(flag==="11"){this.outOk();}else if(flag==="10"){this.params.error.errorOut();}else{this.params.error.errorServer();};};var stack_login=function(o){var name;if(typeof o==="string"){o={id:o};}
if(!o.id)return false;if(o.id.nodeType==1){if(o.id.getAttribute("id")){name="china_api_login_"+o.id.getAttribute("id");}else{name="china_api_login_"+new Date().getTime();}}else{if(!document.getElementById(o.id))return false;name="china_api_login_"+o.id;}
name=name.replace(/-/g,"_");o.name=name;login_instantiation.push(name);window[name]=new Login(o);};window.china_api_login=stack_login;})(window);