"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[84992],{584992:function(n,t,a){a.d(t,{Z:function(){return R}});var e=a(76911),r=a(425288),i=a(790348),o=a(198462),s=a(383434),p=a(543059),c=a(607150),u=a(638089),m=a(860273),d=a(453821),l=a(558775),b=a(505771),y=a(729524),f=a(169213),v=a(358864),g=a(985271);function T(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var a=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==a)return;var e,r,i=[],o=!0,s=!1;try{for(a=a.call(n);!(o=(e=a.next()).done)&&(i.push(e.value),!t||i.length!==t);o=!0);}catch(p){s=!0,r=p}finally{try{o||null==a.return||a.return()}finally{if(s)throw r}}return i}(n,t)||h(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n){return function(n){if(Array.isArray(n))return I(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||h(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){if(n){if("string"==typeof n)return I(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);return"Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a?Array.from(n):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?I(n,t):void 0}}function I(n,t){(null==t||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function w(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function N(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){S(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function S(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var C=(0,s.XV)("PwtStopwatch"),O=function(n,t){if(g.Z){if("start"===t.type&&!n.isTiming){var a=t.name,e=t.startTime,r=t.navigationType;return(0,i.A9)("TIMING.".concat(a)),{isTiming:!0,name:a,isSampled:t.isSampled,startTime:"number"==typeof e?e:g.Z.now(),metricId:{type:"stopwatch",name:a,navigationType:r},pwtStaticContext:t.pwtStaticContext,annotations:n.annotations,binaryAnnotations:n.binaryAnnotations,spans:n.spans,traceId:n.traceId,spanNameUpdates:n.spanNameUpdates}}if(!n.isTiming){if(!t.bypassIsTimingCheck){var o=t.name||n.name;return C("ignoring action - stopwatch is not actively timing",t),(0,i.A9)("WARN.".concat(o,".noTiming.").concat(t.type)),n}C("allowing action while stopwatch is not actively timing (bypassIsTimingCheck is set to true)",t)}if("annotate"===t.type){var s=g.Z.now();return C("adding annotation {".concat(t.label,": ").concat(s,"}")),N(N({},n),{},{annotations:n.annotations.concat([{label:t.label,timestamp:s}])})}if("binaryAnnotate"===t.type)return C("adding binary annotation {".concat(t.name,": ").concat(String(t.value),"}")),N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),S({},t.name,{value:t.value,type:t.annotationType}))});if("binaryAnnotateOperation"===t.type){var f=t.binaryAnnotationValueAndType,T=f.value,h=f.type;if(n.binaryAnnotations[t.name]){var I=n.binaryAnnotations[t.name].value||0;return C("operating on binary annotation {\n          name: ".concat(t.name,"\n          pervious value: ").concat(String(I),"\n          operand: ").concat(String(T),"\n        }")),N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),S({},t.name,{value:T?t.operation(I,T):I,type:h}))})}return N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),S({},t.name,{value:T,type:h}))})}if("addSubspan"===t.type){C("adding subspan {".concat(t.name,"}")),-1!==n.spans.findIndex((function(n){return n.name===t.name}))&&C("WARNING: adding duplicate subspan name {".concat(t.name,"}"));var w=t.id||(0,v.Z)();-1!==n.spans.findIndex((function(n){return n.id===w}))&&C("WARNING: adding duplicate subspan id {".concat(t.name,": ").concat(w,"}"));var O=0;return t.startTime?O=t.startTime:n.startTime?O=n.startTime:C("WARNING: adding subspan {".concat(t.name,"} without start time")),N(N({},n),{},{spans:[].concat(A(n.spans),[{name:t.name,id:w,startTime:O,endTime:t.endTime||1/0,annotationMap:N({},t.annotations),binaryAnnotationMap:N({},t.binaryAnnotations),parentId:t.parentId}])})}if("subspanStart"===t.type){var k;C("starting subspan {".concat(t.name,"}")),-1!==n.spans.findIndex((function(n){return n.name===t.name}))&&C("WARNING: starting duplicate subspan name {".concat(t.name,"}"));var _=t.id||(0,v.Z)();-1!==n.spans.findIndex((function(n){return n.id===_}))&&C("WARNING: starting duplicate subspan id {".concat(t.name,": ").concat(_,"}"));var R=t.parentName?null===(k=n.spans.find((function(n){return n.name===t.parentName})))||void 0===k?void 0:k.id:null;return N(N({},n),{},{spans:[].concat(A(n.spans),[{name:t.name,id:_,parentId:t.parentId||R,startTime:g.Z.now(),endTime:1/0,annotationMap:N({},t.annotations),binaryAnnotationMap:N({},t.binaryAnnotations)}])})}if("subspanStop"===t.type){if(C("stopping subspan {".concat(t.name,"}")),!t.id)n.spans.reduce((function(n,a){return a.name===t.name&&n.push(a),n}),[]).length>1&&(0,i.H)("duplicate_subspan_stop_name",{name:t.name,type:t.type});var P=t.id?n.spans.findIndex((function(n){return n.id===t.id})):n.spans.findIndex((function(n){return n.name===t.name}));return P>-1?(n.spans[P].endTime=g.Z.now(),t.annotations&&(n.spans[P].annotationMap=N(N({},n.spans[P].annotationMap),t.annotations)),t.binaryAnnotations&&(n.spans[P].binaryAnnotationMap=N(N({},n.spans[P].binaryAnnotationMap),t.binaryAnnotations))):(0,i.H)("invalid_subspan_stop_name",{name:t.name}),n}if("subspanUpdateName"===t.type){n.spans.reduce((function(n,a){return a.name===t.currentName&&n.push(a),n}),[]).length>1&&(0,i.H)("duplicate_subspan_stop_name",{name:t.currentName,type:t.type});var U=n.spans.findIndex((function(n){return n.name===t.currentName}));return U>-1?t.updateWhenStopwatchCompletes?n.spanNameUpdates=[].concat(A(n.spanNameUpdates),[{currentName:t.currentName,newName:t.newName}]):(C("renaming subspan {".concat(t.currentName,"} to {").concat(t.newName,"}")),n.spans[U].name=t.newName):(0,i.H)("no_subspan_found_to_rename",{name:t.currentName}),n}if("stop"===t.type&&n.isTiming){var Z=n.startTime,j=n.metricId,M=n.pwtStaticContext,x=n.annotations,W=n.binaryAnnotations,E=n.isSampled,D=n.spans,B=n.traceId;if(t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect(),E){var H=t.stopTime||g.Z.now(),L=A(D.map((function(t){t.endTime===1/0&&(t.endTime=H);var a=n.spanNameUpdates.findIndex((function(n){return t.name===n.currentName}));return a>-1&&(C("renaming subspan {".concat(t.name,"} to {").concat(n.spanNameUpdates[a].newName,"}")),t.name=n.spanNameUpdates[a].newName,n.spanNameUpdates=n.spanNameUpdates.filter((function(n){return n.newName!==t.name}))),t})));if(t.manualAndResourceSpans||0===D.length){var G=(0,v.Z)();L.push.apply(L,[{name:"network_resources",id:G,startTime:Z,endTime:H,annotationMap:{},binaryAnnotationMap:{},parentId:null}].concat(A((t.customStopwatchBuffer||[]).map((function(n){return(0,b.Z)((0,d.p)(n,[]),G)})).filter(Boolean))))}var V="initial_app_load"===j.navigationType&&(0,m.Z)(),K={type:"COMPLETE",traceId:B,startTime:Z,endTime:H,spans:L,annotationMap:N(N(N({},(0,y.Z)(x)),(0,c.jh)("browser_",V?(0,c.D3)(V):{})),(0,c.jh)("mark_",(0,p.gQ)())),binaryAnnotationMap:(0,u.ng)({metricId:j,pwtStaticContext:M,binaryAnnotations:W,performanceResourceTimings:t.customStopwatchBuffer||[]})};(0,l.Z)({metricId:j,pwtStaticContext:M,result:K})}return{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}if("error"===t.type){var Q=t.error,X=t.stopwatchPerformanceObserver;return Q&&(0,i.H)(Q),X&&X.disconnect(),{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}if("abort"===t.type&&n.isTiming){t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect();var $=n.metricId,q=n.pwtStaticContext,z=t.reason||"";return(0,l.Z)({metricId:$,pwtStaticContext:q,result:{type:"ABORT",reason:z}}),{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}}return n},k=function(n){var t=n.name,a=n.sampleRate,r=n.navigationType,i=n.manualAndResourceSpans,s=void 0!==i&&i,p=(0,o.N5)(),c=(0,e.useRef)([]),u=(0,e.useRef)(null),m=T((0,e.useReducer)(O,{isTiming:!1,name:t,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}),2),d=m[0],l=m[1];return p?{isTiming:d.isTiming,start:function(n){if(window.PerformanceObserver){c.current=[],u.current=(0,f.Z)({entryTypes:["resource"]},(function(n){c.current=c.current.concat(n.getEntries()),c.current.length>1e3&&(c.current=c.current.slice(-1e3))}))}var e={type:"start",startTime:n,name:t,navigationType:r,pwtStaticContext:p,isSampled:!a||Math.random()<a};return l(e)},stop:function(n){return l({type:"stop",stopTime:n,stopwatchPerformanceObserver:u.current,customStopwatchBuffer:c.current,manualAndResourceSpans:s})},error:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){l({type:"error",stopwatchPerformanceObserver:u.current,error:n})})),abort:function(n){return l({type:"abort",stopwatchPerformanceObserver:u.current,customStopwatchBuffer:c.current,reason:n})},annotate:function(n,t){return l({type:"annotate",label:n,parentId:t,bypassIsTimingCheck:arguments.length>2&&void 0!==arguments[2]&&arguments[2]})},binaryAnnotate:function(n,t,a,e){return l({type:"binaryAnnotate",name:n,value:t,annotationType:a,parentId:e,bypassIsTimingCheck:arguments.length>4&&void 0!==arguments[4]&&arguments[4]})},binaryAnnotateOperation:function(n){var t=n.name,a=n.binaryAnnotationValueAndType,e=n.operation,r=n.parentId,i=n.bypassIsTimingCheck;return l({type:"binaryAnnotateOperation",name:t,binaryAnnotationValueAndType:a,operation:e,parentId:r,bypassIsTimingCheck:void 0!==i&&i})},addSubspan:function(n){var t=n.name,a=n.startTime,e=n.endTime,r=n.annotations,i=void 0===r?{}:r,o=n.binaryAnnotations,s=void 0===o?{}:o,p=n.parentId,c=void 0===p?null:p,u=n.id,m=void 0===u?null:u,d=n.bypassIsTimingCheck;return l({type:"addSubspan",name:t,startTime:a,endTime:e,annotations:i,binaryAnnotations:s,parentId:c,id:m,bypassIsTimingCheck:void 0!==d&&d})},subspanStart:function(n){var t=n.name,a=n.annotations,e=void 0===a?{}:a,r=n.binaryAnnotations,i=void 0===r?{}:r,o=n.parentId,s=void 0===o?null:o,p=n.parentName,c=void 0===p?null:p,u=n.id,m=void 0===u?null:u,d=n.bypassIsTimingCheck;return l({type:"subspanStart",name:t,annotations:e,binaryAnnotations:i,parentId:s,parentName:c,id:m,bypassIsTimingCheck:void 0!==d&&d})},subspanStop:function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.id,i=n.parentId,o=n.bypassIsTimingCheck;return l({type:"subspanStop",name:t,annotations:a,binaryAnnotations:e,id:r,parentId:i,bypassIsTimingCheck:void 0!==o&&o})},subspanUpdateName:function(n){var t=n.currentName,a=n.newName,e=n.bypassIsTimingCheck,r=n.updateWhenStopwatchCompletes;return l({type:"subspanUpdateName",currentName:t,newName:a,bypassIsTimingCheck:e,updateWhenStopwatchCompletes:void 0===r||r})},getSpans:function(n,t){return d.spans.filter((function(a){return a[n]===t}))},getTraceId:function(){return d.traceId}}:null},_=a(515198),R=function(n){var t=n.name,a=n.sampleRate,s=n.abortOnUnloadOrClientNavigation,p=void 0===s||s,c=n.navigationType,u=n.manualAndResourceSpans,m=void 0!==u&&u,d=(0,r.Z)("Stopwatch_".concat(t)),l=d.Provider;return{Provider:function(n){var r=n.children,s=k({name:t,sampleRate:a,navigationType:c,manualAndResourceSpans:m}),u=(0,o.fM)(),d=u?u.time:0,b=(0,e.useRef)(!1),y=null==s?void 0:s.isTiming,f=(0,e.useCallback)((function(n){b.current?(b.current=!1,null==s||s.abort(n)):(0,i.A9)("WARN.".concat(t,".noTiming.abort"))}),[s]),v=(0,e.useCallback)((function(n,t){null==s||s.annotate(n,t)}),[s]),g=(0,e.useCallback)((function(n,t,a,e){null==s||s.binaryAnnotate(n,t,a,e)}),[s]),T=(0,e.useCallback)((function(n){var t=n.name,a=n.binaryAnnotationValueAndType,e=n.operation,r=n.parentId,i=n.bypassIsTimingCheck;null==s||s.binaryAnnotateOperation({name:t,binaryAnnotationValueAndType:a,operation:e,parentId:r,bypassIsTimingCheck:i})}),[s]),A=(0,e.useCallback)((function(n){var t=n.name,a=n.startTime,e=n.endTime,r=n.annotations,i=n.binaryAnnotations,o=n.parentId,p=n.id,c=n.bypassIsTimingCheck;null==s||s.addSubspan({name:t,startTime:a,endTime:e,annotations:r,binaryAnnotations:i,parentId:o,id:p,bypassIsTimingCheck:c})}),[s]),h=(0,e.useCallback)((function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.parentId,i=n.parentName,o=n.id,p=n.bypassIsTimingCheck;null==s||s.subspanStart({name:t,annotations:a,binaryAnnotations:e,parentId:r,parentName:i,id:o,bypassIsTimingCheck:p})}),[s]),I=(0,e.useCallback)((function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.id,i=n.parentId,o=n.bypassIsTimingCheck;null==s||s.subspanStop({name:t,annotations:a,binaryAnnotations:e,id:r,parentId:i,bypassIsTimingCheck:o})}),[s]),w=(0,e.useCallback)((function(n){var t=n.currentName,a=n.newName,e=n.bypassIsTimingCheck,r=n.updateWhenStopwatchCompletes;null==s||s.subspanUpdateName({currentName:t,newName:a,bypassIsTimingCheck:e,updateWhenStopwatchCompletes:r})}),[s]),N=(0,e.useCallback)((function(n,t){return s?s.getSpans(n,t):[]}),[s]),S=(0,e.useCallback)((function(){return s?s.getTraceId():0}),[s]),C=(0,e.useCallback)((function(n){b.current?(b.current=!1,null==s||s.error(n)):(0,i.A9)("WARN.".concat(t,".noTiming.error"))}),[s]),O=(0,e.useCallback)((function(n){b.current&&(null==s||s.abort("duplicated_init_stopwatch_action")),b.current=!0,null==s||s.start(n)}),[s]),R=(0,e.useCallback)((function(n){b.current?(b.current=!1,null==s||s.stop(n)):(0,i.A9)("WARN.".concat(t,".noTiming.stop"))}),[s]);(0,e.useEffect)((function(){return function(){p&&f("unloadOrClientNavigation")}}),[d]);var P=(0,e.useMemo)((function(){return{isTiming:y,abort:f,addAnnotation:v,addBinaryAnnotation:g,binaryAnnotationOperation:T,addSubspan:A,subspanStart:h,subspanStop:I,getSpans:N,getTraceId:S,updateSubspanName:w,stop:R,error:C,start:O}}),[y,f,v,g,T,A,h,I,N,S,w,R,C,O]);return(0,_.jsx)(l,{value:P,children:r})},useHook:d.useMaybeHook}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/84992-87df3c3604f065f8.js.map