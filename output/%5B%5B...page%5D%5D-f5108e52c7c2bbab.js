(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{7538:function(e,t,n){"use strict";var r=n(1380),a=n(3340),o=n(6334),i=n(8374),l=n(5916);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=d(n(9496)),u=d(n(3544));function d(e){return e&&e.__esModule?e:{default:e}}var f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p=function(e){o(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=void 0===n||n,a=this.props.title||f[t]||"An unexpected error has occurred";return s.default.createElement("div",{style:m.error},s.default.createElement(u.default,null,s.default.createElement("title",null,t?"".concat(t,": ").concat(a):"Application error: a client-side exception has occurred")),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ".concat(r?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),t?s.default.createElement("h1",{className:"next-error-h1",style:m.h1},t):null,s.default.createElement("div",{style:m.desc},s.default.createElement("h2",{style:m.h2},this.props.title||t?a:s.default.createElement(s.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n}(s.default.Component);p.displayName="ErrorPage",p.getInitialProps=h,p.origGetInitialProps=h;var m={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}};t.default=p},374:function(e,t,n){"use strict";n.d(t,{td:function(){return i},zr:function(){return o}});n(2457);var r=n(9496),a=(n(999),n(4637));var o=(0,r.createContext)({});function i(e){var t=e.children,n=e.__next_ssg_data;return n?(0,a.jsx)(o.Provider,{value:n||{},children:t}):(0,a.jsx)(a.Fragment,{children:t})}},9584:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g}});var r=n(3764),a=n(9779),o=n(6855),i=n.n(o),l=n(588),c=n(9496),s=n(3279),u=n(6911),d=n(374),f=n(5926),h=n(68),p=(n(716),n(4637)),m=s.default.div.withConfig({componentId:"sc-8nrd46-0"})(["width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;"]),g=!0;t.default=function(e){var t=e.page,n=e.__next_ssg_data,o=(0,l.useRouter)(),s=t.length>1&&!!t[0].data.abTestName,g=(0,c.useState)(s?null:t[0]),x=g[0],v=g[1],_=(0,c.useState)(!t[0].data.abTestName),b=_[0],y=_[1],j=(0,f.b$)();(0,c.useEffect)((function(){t[0].data.abTestName&&j({namespace:t[0].data.abTestName,paramName:t[0].data.abTestParamName,defaultValue:"control",callback:function(e){var n=e.success,r=e.value,a=t.find((function(e){return e.data.abTestChoice===(n?r:"control")}));v(a),y(!0)}})}),[j,t]);if(null!==o&&void 0!==o&&o.isFallback)return(0,p.jsx)("h1",{children:"Loading..."});var E=!r.Ib.isEditing&&!r.Ib.isPreviewing;return!t&&E?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i(),{children:[(0,p.jsx)("meta",{name:"robots",content:"noindex"}),(0,p.jsx)("meta",{name:"title"})]}),(0,p.jsx)(a.default,{statusCode:404})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(d.td,{__next_ssg_data:n,children:[(0,p.jsx)(i(),{children:(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),s?(0,p.jsx)(p.Fragment,{children:b?(0,p.jsx)(r.VD,{model:"page",content:x,context:{locale:"en",trackFa:h.m7,doSomething:function(){console.log("something done")}}}):(0,p.jsx)(m,{children:(0,p.jsx)(u.Z,{})})}):(0,p.jsx)(r.VD,{model:"page",content:x,context:{locale:"en",trackFa:h.m7,doSomething:function(){console.log("something done")}}})]})})}},8888:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...page]]",function(){return n(9584)}])},9779:function(e,t,n){e.exports=n(7538)},588:function(e,t,n){e.exports=n(7577)}},function(e){e.O(0,[2020,716,9774,2888,179],(function(){return t=8888,e(e.s=t);var t}));var t=e.O();_N_E=t}]);