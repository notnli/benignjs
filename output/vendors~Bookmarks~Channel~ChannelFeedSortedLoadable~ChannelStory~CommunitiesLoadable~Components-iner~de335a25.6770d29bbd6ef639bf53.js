(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{Bm8A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){return i.default.createElement("svg",{style:{width:e.size||"24px",height:e.size||"24px"},viewBox:e.viewBox||"0 0 24 24",className:e.className},i.default.createElement("path",{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}))};a.displayName="ChevronDown",t.default=a},I7VN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1];return r.useEffect((function(){return function(){s(null)}}),[s]),r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:s},t))}var s=function(e){return Array.isArray(e)?e[0]:e},f=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},c=function(e,t){if("function"==typeof e)return f(e,t);null!=e&&(e.current=t)},u=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},p="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect;function l(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function d(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function m(e){var t=d(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function h(e){return e instanceof d(e).Element||e instanceof Element}function v(e){return e instanceof d(e).HTMLElement||e instanceof HTMLElement}function g(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){return(h(e)?e.ownerDocument:e.document).documentElement}function b(e){return l(y(e)).left+m(e).scrollLeft}function w(e){return d(e).getComputedStyle(e)}function O(e){var t=w(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function x(e,t,n){void 0===n&&(n=!1);var r,o,i=y(t),a=l(e),s=v(t),f={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!n)&&(("body"!==g(t)||O(i))&&(f=(r=t)!==d(r)&&v(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:m(r)),v(t)?((c=l(t)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=b(i))),{x:a.left+f.scrollLeft-c.x,y:a.top+f.scrollTop-c.y,width:a.width,height:a.height}}function j(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function E(e){return"html"===g(e)?e:e.assignedSlot||e.parentNode||e.host||y(e)}function M(e){return["html","body","#document"].indexOf(g(e))>=0?e.ownerDocument.body:v(e)&&O(e)?e:M(E(e))}function D(e,t){void 0===t&&(t=[]);var n=M(e),r="body"===g(n),o=d(n),i=r?[o].concat(o.visualViewport||[],O(n)?n:[]):n,a=t.concat(i);return r?a:a.concat(D(E(i)))}function L(e){return["table","td","th"].indexOf(g(e))>=0}function A(e){if(!v(e)||"fixed"===w(e).position)return null;var t=e.offsetParent;if(t){var n=y(t);if("body"===g(t)&&"static"===w(t).position&&"static"!==w(n).position)return n}return t}function P(e){for(var t=d(e),n=A(e);n&&L(n)&&"static"===w(n).position;)n=A(n);return n&&"body"===g(n)&&"static"===w(n).position?t:n||function(e){for(var t=E(e);v(t)&&["html","body"].indexOf(g(t))<0;){var n=w(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var B="top",k="bottom",S="right",_="left",R="auto",U=[B,k,S,_],C="start",H="end",W="viewport",N="popper",T=U.reduce((function(e,t){return e.concat([t+"-"+C,t+"-"+H])}),[]),q=[].concat(U,[R]).reduce((function(e,t){return e.concat([t,t+"-"+C,t+"-"+H])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var F={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?F:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},F),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,u={state:s,setOptions:function(n){p(),s.options=Object.assign(Object.assign(Object.assign({},i),s.options),n),s.scrollParents={reference:h(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var o=function(e){var t=z(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=o.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r}),a=function(){};f.push(i||a)}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(I(t,n)){s.rects={reference:x(t,P(n),"fixed"===s.options.strategy),popper:j(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:p,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),c=!0}};if(!I(e,t))return u;function p(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var X={passive:!0};function Y(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?$(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case B:t={x:s,y:n.y-r.height};break;case k:t={x:s,y:n.y+n.height};break;case S:t={x:n.x+n.width,y:f};break;case _:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?Z(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case C:t[c]=Math.floor(t[c])-Math.floor(n[u]/2-r[u]/2);break;case H:t[c]=Math.floor(t[c])+Math.ceil(n[u]/2-r[u]/2)}}return t}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,f=e.adaptive,c=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(i),u=c.x,p=c.y,l=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),h=_,v=B,g=window;if(f){var b=P(n);b===d(n)&&(b=y(n)),o===B&&(v=k,p-=b.clientHeight-r.height,p*=s?1:-1),o===_&&(h=S,u-=b.clientWidth-r.width,u*=s?1:-1)}var w,O=Object.assign({position:a},f&&J);return s?Object.assign(Object.assign({},O),{},((w={})[v]=m?"0":"",w[h]=l?"0":"",w.transform=(g.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",w)):Object.assign(Object.assign({},O),{},((t={})[v]=m?p+"px":"",t[h]=l?u+"px":"",t.transform="",t))}var ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ie(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ae(e,t){return t===W?ie(function(e){var t=d(e),n=y(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+b(e),y:s}}(e)):v(t)?function(e){var t=l(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t=y(e),n=m(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+b(e),s=-n.scrollTop;return"rtl"===w(r||t).direction&&(a+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:a,y:s}}(y(e)))}function se(e,t,n){var r="clippingParents"===t?function(e){var t=D(E(e)),n=["absolute","fixed"].indexOf(w(e).position)>=0&&v(e)?P(e):e;return h(n)?t.filter((function(e){return h(e)&&oe(e,n)&&"body"!==g(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ae(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),ae(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,f=void 0===s?W:s,c=n.elementContext,u=void 0===c?N:c,p=n.altBoundary,d=void 0!==p&&p,m=n.padding,v=void 0===m?0:m,g=fe("number"!=typeof v?v:ce(v,U)),b=u===N?"reference":N,w=e.elements.reference,O=e.rects.popper,x=e.elements[d?b:u],j=se(h(x)?x:x.contextElement||y(e.elements.popper),a,f),E=l(w),M=G({reference:E,element:O,strategy:"absolute",placement:o}),D=ie(Object.assign(Object.assign({},O),M)),L=u===N?D:E,A={top:j.top-L.top+g.top,bottom:L.bottom-j.bottom+g.bottom,left:j.left-L.left+g.left,right:L.right-j.right+g.right},P=e.modifiersData.offset;if(u===N&&P){var _=P[o];Object.keys(A).forEach((function(e){var t=[S,k].indexOf(e)>=0?1:-1,n=[B,k].indexOf(e)>=0?"y":"x";A[e]+=_[n]*t}))}return A}function pe(e,t,n){return Math.max(e,Math.min(t,n))}function le(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[B,S,k,_].some((function(t){return e[t]>=0}))}var me=K({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=d(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,X)})),s&&f.addEventListener("resize",n.update,X),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,X)})),s&&f.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),Q(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),Q(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];v(o)&&g(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});v(r)&&g(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[_,B].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[_,S].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=Y(v),y=f||(g===v||!m?[te(v)]:function(e){if(Y(e)===R)return[];var t=te(e);return[re(e),t,re(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(Y(n)===R?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?q:f,u=$(r),p=u?s?T:T.filter((function(e){return $(e)===u})):U,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,j=!0,E=b[0],M=0;M<b.length;M++){var D=b[M],L=Y(D),A=$(D)===C,P=[B,k].indexOf(L)>=0,H=P?"width":"height",W=ue(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),N=P?A?S:_:A?k:B;w[H]>O[H]&&(N=te(N));var V=te(N),z=[];if(i&&z.push(W[L]<=0),s&&z.push(W[N]<=0,W[V]<=0),z.every((function(e){return e}))){E=D,j=!1;break}x.set(D,z)}if(j)for(var F=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},I=m?3:1;I>0;I--){if("break"===F(I))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=ue(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=Y(t.placement),y=$(t.placement),b=!y,w=Z(g),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,E=t.rects.reference,M=t.rects.popper,D="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,L={x:0,y:0};if(x){if(i){var A="y"===w?B:_,R="y"===w?k:S,U="y"===w?"height":"width",H=x[w],W=x[w]+v[A],N=x[w]-v[R],T=d?-M[U]/2:0,q=y===C?E[U]:M[U],V=y===C?-M[U]:-E[U],z=t.elements.arrow,F=d&&z?j(z):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=I[A],X=I[R],G=pe(0,E[U],F[U]),J=b?E[U]/2-T-G-K-D:q-G-K-D,Q=b?-E[U]/2+T+G+X+D:V+G+X+D,ee=t.elements.arrow&&P(t.elements.arrow),te=ee?"y"===w?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,re=x[w]+J-ne-te,oe=x[w]+Q-ne,ie=pe(d?Math.min(W,re):W,H,d?Math.max(N,oe):N);x[w]=ie,L[w]=ie-H}if(s){var ae="x"===w?B:_,se="x"===w?k:S,fe=x[O],ce=pe(fe+v[ae],fe,fe-v[se]);x[O]=ce,L[O]=ce-fe}t.modifiersData[r]=L}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=Y(n.placement),s=Z(a),f=[_,S].indexOf(a)>=0?"height":"width";if(o&&i){var c=n.modifiersData[r+"#persistent"].padding,u=j(o),p="y"===s?B:_,l="y"===s?k:S,d=n.rects.reference[f]+n.rects.reference[s]-i[s]-n.rects.popper[f],m=i[s]-n.rects.reference[s],h=P(o),v=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,g=d/2-m/2,y=c[p],b=v-u[f]-c[l],w=v/2-u[f]/2+g,O=pe(y,w,b),x=s;n.modifiersData[r]=((t={})[x]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&oe(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:fe("number"!=typeof s?s:ce(s,U))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),f=le(a,r),c=le(s,o,i),u=de(f),p=de(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),he=n("Ug0v"),ve=n.n(he),ge=[],ye=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ge},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),s=a[0],f=a[1],c=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);f({styles:u(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:u(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),l=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return ve()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),d=r.useRef();return p((function(){d.current&&d.current.setOptions(l)}),[l]),p((function(){if(null!=e&&null!=t){var r=(n.createPopper||me)(e,t,l);return d.current=r,function(){r.destroy(),d.current=null}}}),[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:s.styles,attributes:s.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},be=function(){},we=function(){return Promise.resolve(null)},Oe=[];function xe(e){var t=e.placement,n=void 0===t?"bottom":t,i=e.strategy,a=void 0===i?"absolute":i,f=e.modifiers,u=void 0===f?Oe:f,p=e.referenceElement,l=e.onFirstUpdate,d=e.innerRef,m=e.children,h=r.useContext(o),v=r.useState(null),g=v[0],y=v[1],b=r.useState(null),w=b[0],O=b[1];r.useEffect((function(){return c(d,g)}),[d,g]);var x=r.useMemo((function(){return{placement:n,strategy:a,onFirstUpdate:l,modifiers:[].concat(u,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,a,l,u,w]),j=ye(p||h,g,x),E=j.state,M=j.styles,D=j.forceUpdate,L=j.update,A=r.useMemo((function(){return{ref:y,style:M.popper,placement:E?E.placement:n,hasPopperEscaped:E&&E.modifiersData.hide?E.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:E&&E.modifiersData.hide?E.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:M.arrow,ref:O},forceUpdate:D||be,update:L||we}}),[y,O,n,E,M,L,D]);return s(m)(A)}var je=n("xNoo"),Ee=n.n(je);function Me(e){var t=e.children,n=e.innerRef,o=r.useContext(i),a=r.useCallback((function(e){c(n,e),f(o,e)}),[n,o]);return r.useEffect((function(){return function(){return c(n,null)}})),r.useEffect((function(){Ee()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),s(t)({ref:a})}n.d(t,"Popper",(function(){return xe})),n.d(t,"Manager",(function(){return a})),n.d(t,"Reference",(function(){return Me})),n.d(t,"usePopper",(function(){return ye}))},T63A:function(e,t,n){var r=n("I+eb"),o=n("b1O7").entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},Ug0v:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var s,f,c,u;if(Array.isArray(e)){if((s=e.length)!=t.length)return!1;for(f=s;0!=f--;)if(!a(e[f],t[f]))return!1;return!0}if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!t.has(f.value[0]))return!1;for(u=e.entries();!(f=u.next()).done;)if(!a(f.value[1],t.get(f.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!t.has(f.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((s=e.length)!=t.length)return!1;for(f=s;0!=f--;)if(e[f]!==t[f])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(f=s;0!=f--;)if(!Object.prototype.hasOwnProperty.call(t,c[f]))return!1;if(n&&e instanceof Element)return!1;for(f=s;0!=f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!e.$$typeof)&&!a(e[c[f]],t[c[f]]))return!1;return!0}return e!=e&&t!=t}e.exports=function(e,t){try{return a(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},xNoo:function(e,t,n){"use strict";var r=function(){};e.exports=r}}]);
//# sourceMappingURL=vendors~Bookmarks~Channel~ChannelFeedSortedLoadable~ChannelStory~CommunitiesLoadable~Components-iner~de335a25.6770d29bbd6ef639bf53.js.map