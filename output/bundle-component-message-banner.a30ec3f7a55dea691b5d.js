"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4742],{78763:function(e,a,n){n.d(a,{Z:function(){return A}});var t=n(27378),r=n(68442),o=n(93372),i=n(69301),l=n(45182),d=n(62999),m=n(21123),c=n(62753),u=n(90811),g=n(72055),s=n(58676),p=(n(17827),n(9957)),b=n(79908),h={[u.Yt]:u.c1,[u.c1]:u.Dq,[u.Dq]:u.W3,[u.W3]:u.nP,[u.nP]:u.J8},k=(e,a)=>{var{urlTemplate:n}=e,t=h[a];return n&&t?n.replace("{width}",t):n},f=e=>e?"\n    background-size: cover;\n    background-image: url(".concat(k(e,u.Yt),");\n\n    @media (min-width: ").concat(u.Xo,") {\n      background-image: url(").concat(k(e,u.c1),");\n    }\n\n    @media (min-width: ").concat(u.TN,") {\n      background-image: url(").concat(k(e,u.Dq),");\n    }\n\n    @media (min-width: ").concat(u.O9,") {\n      background-image: url(").concat(k(e,u.W3),");\n    }\n\n    @media (min-width: ").concat(u.lK,") {\n      background-image: url(").concat(k(e,u.nP),");\n    }\n    "):"",v=(e,a)=>e?a:"100%",I=(0,r.default)("div",{target:"e1ksmnp88",label:"ColouredContainer"})("position:relative;background-color:",(e=>{var{backgroundColour:a,theme:n,home:t}=e;return a||s.r[t]||n.colourPalette.accent}),";"),w=(0,r.default)("div",{target:"e1ksmnp87",label:"StyledBackground"})("top:0;bottom:0;width:100%;position:absolute;",(e=>{var{backgroundImage:a,loadImage:n}=e;return a&&n&&f(a)})," html.no-js &{",(e=>{var{backgroundImage:a}=e;return a&&f(a)}),";}",(e=>{var{backgroundImage:a,home:n}=e;return!a&&n&&b&&"\n      background-size: cover;\n      background-image: url('".concat(b,"');\n      mix-blend-mode: soft-light;\n    ")}),";"),C=(0,r.default)("div",{target:"e1ksmnp86",label:"StyledContent"})(d.eV," display:flex;position:relative;flex-direction:column;width:100%;color:",(e=>{var{foregroundColour:a,theme:n}=e;return a||n.colourPalette.accent}),";"),_=(0,r.default)("h2",{target:"e1ksmnp85",label:"StyledTitle"})(m.aD," margin-bottom:",c.SPACING_2,";font-weight:500;"),T=(0,r.default)("p",{target:"e1ksmnp84",label:"StyledSubTitle"})(m.WM,"@media (min-width: ",u.TN,"){",m.o$,";}"),S=(0,r.default)("div",{target:"e1ksmnp82",label:"LinkAndImageWrapper"})("display:flex;flex-direction:column-reverse;@media (min-width: ",u.TN,"){flex-direction:row;margin-top:0;}"),E=(0,r.default)("div",{target:"e1ksmnp81",label:"LinkWrapper"})("margin-bottom:",c.SPACING_4,";z-index:1;line-height:0;",(e=>{var{isWrapped:a}=e;return a&&"\n    @media (min-width: ".concat(u.TN,") {\n       margin-bottom: ").concat(c.SPACING_6,";\n     }\n   ")}),";"),N=(0,r.default)("div",{target:"e1ksmnp80",label:"StyledImage"})("display:inline;width:100%;height:",(0,g.s)(156),";",(e=>{var{lazyLoadImages:a,loadBackgroundImage:n,foregroundImage:t}=e;return"\n    ".concat((null==t?void 0:t.src)&&(!a||n)&&"\n      background-image: url('".concat(t.src,"');\n      "),";\n  ")})," html.no-js &{",(e=>{var{foregroundImage:a}=e;return(null==a?void 0:a.src)&&"\n      background-image: url('".concat(a.src,"');\n      ")}),";}background-position:right bottom;background-size:contain;background-repeat:no-repeat;@media (min-width: ",u.TN,"){position:absolute;top:0;right:0;bottom:0;width:50%;height:100%;}@media (min-width: ",u.O9,"){width:33%;}"),y=e=>{var{bypassSafeContrastThemeProvider:a,children:n,onDarkImage:r}=e;return a?n:t.createElement(i.Z,{on:r},n)},A=e=>{var{title:a,subTitle:n,linkText:i,linkUrl:d,backgroundImage:m,foregroundImage:g,unsafeViewTrackRef:b,unsafeClickTrackRef:h,lazyLoadImages:k=!1,openInNewTab:f=!1,home:A,isWrapped:P=!1,buttonIcon:D="",backgroundColour:W,foregroundColour:x,backgroundType:L=""}=e,G=(e=>{var{foregroundImage:a,isWrapped:n}=e;return(0,r.default)("div",{target:"e1ksmnp83",label:"TextWrapper"})("margin-top:",c.SPACING_6,";",!a&&"margin-bottom: ".concat(c.SPACING_6,";"),"@media (min-width: ",u.TN,"){max-width:",v(a,"50%"),";margin-bottom:",c.SPACING_4,";margin-top:",n?c.SPACING_6:c.SPACING_4,";}@media (min-width: ",u.O9,"){max-width:",v(a,"66%"),";}")})({foregroundImage:g,isWrapped:P}),z=m&&m.urlTemplate||s.r[A]?"dark-image":void 0,[O,B]=(0,t.useState)(!1),[Z,q]=(0,p.YD)({threshold:0}),K="midground"===L;(0,t.useEffect)((()=>{q&&B(!0)}),[q]);var R=O||!k;return t.createElement(I,{ref:Z,home:A,backgroundColour:W},t.createElement(w,{ref:b,backgroundImage:m,loadImage:R,home:A}),t.createElement(l.Z,null,t.createElement(y,{bypassSafeContrastThemeProvider:K,onDarkImage:z},t.createElement(C,{foregroundColour:x},t.createElement(G,null,a&&t.createElement(_,null,a),t.createElement(T,null,n)),t.createElement(S,null,t.createElement(E,{isWrapped:P},t.createElement(o.Z,{iconType:D,trackRef:h,target:f?"_blank":"",href:d,width:"full",emphasis:"high"},i)),(null==g?void 0:g.src)&&t.createElement(N,{foregroundImage:g,loadBackgroundImage:O,lazyLoadImages:k}))))))}}}]);