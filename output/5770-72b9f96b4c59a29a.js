"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5770],{5770:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(9496),i=n(3279),u=n(3315),o=n(7285),c=n(4637),f=i.default.button.withConfig({componentId:"sc-1xnj3r7-0"})(["appearance:none;background:transparent;border:none;cursor:pointer;padding:0;"]);var s=n(7073),a="left 0.4s linear",l=(0,i.default)(s.cK).withConfig({componentId:"sc-1ovxvek-0"})(["cursor:grab;"]),d=i.default.ul.withConfig({componentId:"sc-1ovxvek-1"})(["position:relative;white-space:nowrap;",";> *{display:inline-block;width:",";white-space:normal;vertical-align:top;}grid-gap:2%;display:flex;padding:0 4vw;"],(function(e){return e.oneItemPerSlide&&"transition : ".concat(a)}),(function(e){return e.oneItemPerSlide?"100%":"auto"}));var v=i.default.button.withConfig({componentId:"sc-1lgehr1-0"})(["appearance:none;background:transparent;border:none;cursor:pointer;padding:0;"]);var p=i.default.button.withConfig({componentId:"sc-pn7gv4-0"})(["appearance:none;background:transparent;border:none;cursor:pointer;padding:0;"]);var h=i.default.div.withConfig({componentId:"sc-1seop9-0"})(["position:relative;max-width:100%;"]);function m(e){var t=e.pauseOnHover,n=e.pauseOnClickMob,i=e.children,u=e.slidesCount,f=e.autoRotate,a=e.slideDelay,l=void 0===a?5e3:a,d=e.animateInLoop,v=void 0!==d&&d,p=e.speed,m=e.maxPXtoSlidePerClick,g=e.alwaysScrollToRight,w=e.disableTouchActionOnMobile,L=e.arrowRefs,E=(0,r.useState)(0),C=E[0],b=E[1],R=(0,r.useState)(!1),x=R[0],I=R[1],W=(0,r.useState)(s.Nm.right),k=W[0],S=W[1],A=u-1,P=(0,r.useRef)(),O=function(){P.current&&(window.clearInterval(P.current),P.current=void 0)},y=function(){P.current=window.setInterval((function(){b((function(e){return e===A?0:e+1}))}),l)};return(0,r.useEffect)((function(){if(f)return y(),function(){return O()};O()}),[f]),(0,r.useEffect)((function(){f&&!P.current&&y()}),[C,f]),(0,c.jsx)(o.r.Provider,{value:{idx:C,pauseOnHover:t,pauseOnClickMob:n,goLeft:function(){n||(O(),S(s.Nm.left),I(!0),b(0!==C||v?C-1:A))},goRight:function(){n||(O(),S(s.Nm.right),I(!0),b(C!==A||v?C+1:0))},goToSlide:function(e){O(),I(!0),b(e)},slidesCount:u,animateInLoop:v,isNavigating:x,setIsNavigating:I,direction:k,speed:p,maxPXtoSlidePerClick:m,keepScrollingRight:function(){g&&S(s.Nm.right)},disableTouchActionOnMobile:w,arrowRefs:L},children:(0,c.jsx)(h,{children:i})})}m.ArrowLeft=function(e){var t=e.icon,n=(0,r.useContext)(o.r).goLeft;return(0,c.jsx)(v,{onClick:n,children:t})},m.ArrowRight=function(e){var t=e.icon,n=(0,r.useContext)(o.r).goRight;return(0,c.jsx)(p,{onClick:n,children:t})},m.Slides=s.ZP,m.SlidesWithClick=function(e){var t=e.children,n=(0,r.useContext)(o.r),i=n.isNavigating,u=n.direction,f=n.setIsNavigating,v=n.speed,p=n.maxPXtoSlidePerClick,h=n.arrowRefs,m=(0,r.useRef)(null),g=(0,r.useState)(0),w=g[0],L=g[1],E=(0,r.useRef)(v||s.cY),C=(0,r.useRef)(w),b=(0,r.useRef)(null),R=(0,r.useRef)(!1),x=(0,r.useRef)(0),I=(0,r.useRef)(0),W=(0,r.useRef)(E.current.LOW),k=(0,r.useRef)(0),S=(0,r.useRef)(u),A=(0,r.useState)(0),P=A[0],O=A[1],y=(0,r.useRef)(""),H=function(){window&&O(.96*window.innerWidth)};(0,r.useEffect)((function(){var e=p||window.innerWidth;L((function(t){if(S.current===s.Nm.right){var n=t+e*W.current;return n<=8&&(n=0),C.current=n,n}return C.current=t-e*W.current,t-e*W.current})),R.current=!1,D(w,!0)}),[i]),(0,r.useEffect)((function(){return H(),window.addEventListener("resize",H),function(){window.removeEventListener("resize",H)}}),[]);var N=function(e){var t,n=e.target;null===n||void 0===n||n.setPointerCapture(e.pointerId),null!==m&&void 0!==m&&m.current&&(m.current.style.transition="left 0s linear"),I.current=0;var r=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.parentElement;r&&r.addEventListener("pointermove",j),x.current=e.clientX},j=(0,r.useCallback)((function(e){if(e.preventDefault(),I.current=x.current-e.clientX,Math.abs(I.current)>s.U9){var t;if(!R.current&&m&&m.current){R.current=!0;var n=e.target,r=null===n||void 0===n?void 0:n.closest("li");r&&m.current.contains(r)&&(y.current=r.getAttribute("id"),r.removeAttribute("id"))}var i=null===(t=m.current)||void 0===t?void 0:t.lastChild;w>=0&&w<=i.offsetLeft+i.offsetWidth-P&&D(C.current+I.current)}}),[w]),T=function(e){var t,n=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.parentElement;if(n){var r=e.target;e.pointerId&&(null===r||void 0===r||r.releasePointerCapture(e.pointerId)),n.removeEventListener("pointermove",j)}},M=function(e){e.preventDefault();var t=e.target;if(0!==I.current){var n,r=null===(n=m.current)||void 0===n?void 0:n.lastChild;if(m&&m.current){var i=null===t||void 0===t?void 0:t.closest("li");y.current&&i&&m.current.contains(i)&&window.setTimeout((function(){null===i||void 0===i||i.setAttribute("id",y.current),y.current=""}),200)}C.current+I.current>=r.offsetLeft+r.offsetWidth-P?(C.current=r.offsetLeft+r.offsetWidth-P,L(r.offsetLeft+r.offsetWidth-P)):C.current+I.current<=0?(C.current=0,L(0)):L(C.current+I.current)}T(e)},X=function(e){T(e)};(0,r.useEffect)((function(){var e,t=null===m||void 0===m||null===(e=m.current)||void 0===e?void 0:e.parentElement;return t&&(t.addEventListener("pointerdown",N),t.addEventListener("contextmenu",X),t.addEventListener("pointerup",M)),function(){m&&t&&(t.removeEventListener("pointerdown",N),t.removeEventListener("contextmenu",X),t.removeEventListener("pointerup",M))}}),[]),(0,r.useEffect)((function(){if(m&&m.current){var e=m.current.lastChild;if(R.current){var t=C.current+I.current;t>e.offsetLeft+e.offsetWidth-P&&(t=e.offsetLeft+e.offsetWidth-P),C.current=t,L(t),D(t),R.current=!1}else{var n=p||window.innerWidth;W.current===E.current.HIGH&&(w>=k.current+n||w<k.current&&w>=n-(e.offsetLeft+e.offsetWidth-k.current))&&(W.current=E.current.LOW,f(!1)),w>e.offsetLeft+e.offsetWidth-P?(L(e.offsetLeft+e.offsetWidth-P),C.current=e.offsetLeft+e.offsetWidth-P):w<0?(L(0),C.current=0):D(w)}h&&h.left.current&&h.right.current&&(h.left.current.style.display=w<=0?"none":"block",w>=e.offsetLeft+e.offsetWidth-P?h.right.current.style.display="none":h.right.current.style.display="block")}}),[w,P]),(0,r.useEffect)((function(){i&&(W.current=E.current.HIGH,k.current=w)}),[i]),(0,r.useEffect)((function(){S.current=u}),[u]);var D=function(e,t){var n,r=null===(n=m.current)||void 0===n?void 0:n.lastChild;m&&m.current&&(t&&(m.current.style.transition=a),e>=0&&e<=r.offsetLeft+r.offsetWidth-P&&(m.current.style.left="".concat(-e,"px")))};return(0,c.jsx)(l,{ref:b,children:(0,c.jsx)(d,{ref:m,oneItemPerSlide:!1,children:t})})},m.Bullets=function(e){var t=e.bullet,n=e.activeBullet,i=(0,r.useContext)(o.r),s=i.goToSlide,a=i.idx,l=i.slidesCount;return(0,c.jsx)(c.Fragment,{children:(0,u.Z)(Array(l)).map((function(e,r){return(0,c.jsx)(f,{onClick:function(){return s(r)},children:a===r?n:t},r)}))})};var g=m},7073:function(e,t,n){n.d(t,{Nm:function(){return r},U9:function(){return l},ZP:function(){return p},cK:function(){return d},cY:function(){return a}});var r,i=n(9496),u=n(3279),o=n(3891),c=n(4786),f=n(7285),s=n(4637),a={HIGH:3,LOW:.08},l=20,d=u.default.div.withConfig({componentId:"sc-1m22ve8-0"})(["overflow:hidden;"," @media screen and (min-width:","){touch-action:none;}"],(function(e){return!e.disableTouchActionOnMobile&&"touch-action: none;"}),c.Eg.tablet),v=u.default.div.withConfig({componentId:"sc-1m22ve8-1"})(["position:relative;white-space:nowrap;",";> *{display:inline-block;width:",";white-space:normal;vertical-align:top;}"],(function(e){return e.oneItemPerSlide&&"transition : ".concat("transform 0.4s linear")}),(function(e){return e.oneItemPerSlide?"100%":"auto"}));!function(e){e[e.left=0]="left",e[e.right=1]="right"}(r||(r={}));function p(e){var t=e.children,n=(0,i.useContext)(f.r),u=n.idx,c=n.animateInLoop,p=n.isNavigating,h=n.direction,m=n.setIsNavigating,g=n.speed,w=n.maxPXtoSlidePerClick,L=n.pauseOnHover,E=n.pauseOnClickMob,C=n.keepScrollingRight,b=n.disableTouchActionOnMobile,R=(0,i.useRef)(null),x=(0,i.useState)(0),I=x[0],W=x[1],k=(0,i.useRef)(g||a),S=(0,i.useRef)(I),A=(0,i.useRef)(null),P=(0,i.useRef)(0),O=(0,i.useRef)(!1),y=(0,i.useRef)(0),H=(0,i.useRef)(0),N=(0,i.useRef)(k.current.LOW),j=(0,i.useRef)(0),T=(0,i.useRef)(h),M=(0,i.useRef)(""),X=(0,i.useState)(!1),D=X[0],G=X[1],F=function(){c||R&&R.current&&W(R.current.offsetWidth)};(0,i.useEffect)((function(){return F(),window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}}),[]);var q=function(e,t){var n=i.useRef(-1),r=function r(i){if(void 0!=n.current){var u=i-n.current;e(u)}n.current=i,t.current=requestAnimationFrame(r)};return{startAnimation:function(){return requestAnimationFrame(r)},requestRef:t,cancelAnimation:function(){cancelAnimationFrame(t.current)}}}((function(e){W((function(t){return T.current!==r.right&&c?(S.current=t-e*N.current,t-e*N.current):(S.current=t+e*N.current,t+e*N.current)}))}),P),z=q.startAnimation,Z=q.requestRef,_=q.cancelAnimation,B=function(e){e.preventDefault(),H.current=0;var t=e.target;null===t||void 0===t||t.setPointerCapture(e.pointerId),R&&R.current&&R.current.addEventListener("pointermove",K),y.current=e.clientX,Z.current&&_()},K=function(e){if(e.preventDefault(),Z.current&&_(),H.current=y.current-e.clientX,Math.abs(H.current)>l){if(!O.current&&R&&R.current){O.current=!0;var t=e.target,n=null===t||void 0===t?void 0:t.closest("a");n&&R.current.contains(n)&&(M.current=n.getAttribute("href"),n.removeAttribute("href"))}$(S.current+H.current)}},U=function(e){if(R&&R.current){var t=e.target;e.pointerId&&(null===t||void 0===t||t.releasePointerCapture(e.pointerId)),R.current.removeEventListener("pointermove",K)}},Y=function(e){e.preventDefault();var t=e.target;if(0!==H.current&&(W(S.current+H.current),R&&R.current)){var n=null===t||void 0===t?void 0:t.closest("a");M.current&&n&&R.current.contains(n)&&window.setTimeout((function(){null===n||void 0===n||n.setAttribute("href",M.current),M.current=""}),200)}z(),U(e)},J=function(e){z(),U(e)},Q=function(){_()},V=function(){z()};(0,i.useEffect)((function(){return c&&R&&R.current&&(L?(0,o.os)()?E?(G(!0),_()):(G(!1),z()):(R.current.addEventListener("mouseenter",Q),R.current.addEventListener("mouseleave",V)):(R.current.removeEventListener("mouseenter",Q),R.current.removeEventListener("mouseleave",V))),function(){c&&R&&R.current&&(R.current.removeEventListener("mouseenter",Q),R.current.removeEventListener("mouseleave",V))}}),[L,E]),(0,i.useEffect)((function(){return c&&R&&R.current&&(z(),R.current.addEventListener("pointerdown",B),R.current.addEventListener("contextmenu",J),R.current.addEventListener("pointerup",Y)),function(){R&&R.current&&(R.current.removeEventListener("pointerdown",B),R.current.removeEventListener("contextmenu",J),R.current.removeEventListener("pointerup",Y)),Z.current&&_()}}),[]),(0,i.useEffect)((function(){if(R&&R.current){var e=R.current.lastChild;if(O.current){var t=S.current+H.current;t>(e.offsetLeft+e.offsetWidth)/2&&(t-=(e.offsetLeft+e.offsetWidth)/2),S.current=t,W(t),O.current=!1}else if(c){var n=w||window.innerWidth;h===r.right?(N.current===k.current.HIGH&&(I>=j.current+n||I<j.current&&I>=n-((e.offsetLeft+e.offsetWidth)/2-j.current))&&(N.current=k.current.LOW,m(!1)),I>(e.offsetLeft+e.offsetWidth)/2?(_(),W(0),S.current=0,z()):D||$(I)):(N.current===k.current.HIGH&&(I<j.current-n||I>j.current&&I<=(e.offsetLeft+e.offsetWidth)/2-(n-j.current))&&(N.current=k.current.LOW,m(!1),C()),I<0&&W((e.offsetLeft+e.offsetWidth)/2),D||$(I))}else $(u*I)}}),[u,I]),(0,i.useEffect)((function(){p&&(N.current=k.current.HIGH,j.current=I)}),[p]),(0,i.useEffect)((function(){T.current=h}),[h]);var $=function(e){R&&R.current&&(R.current.style.transform="translateX(".concat(-e,"px)"))};return(0,s.jsx)(d,{ref:A,disableTouchActionOnMobile:b,children:(0,s.jsxs)(v,{ref:R,oneItemPerSlide:!c,children:[t,c&&(0,s.jsx)(s.Fragment,{children:t})]})})}},7285:function(e,t,n){n.d(t,{r:function(){return i}});var r=function(){},i=(0,n(9496).createContext)({idx:0,goLeft:r,goRight:r,goToSlide:r,slidesCount:0})}}]);