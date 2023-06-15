"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8025],{48245:function(e,n,t){t.d(n,{SC:function(){return l},ai:function(){return d},o_:function(){return s},vg:function(){return i}});var r=t(56947),o=t(70926);const a="320px",i={xxs:"12",xs:"15",sm:"18.75",md:"23.4375",lg:"29.296875",xl:"36.62109375",xxl:"45.7763671875",xxxl:"57.220458984375"},l=(e,n)=>{const t=Number((0,o._K)(e));return Number(n)/t*100+"vw"},s=`\n  @media (min-width: 0) {\n    .storycard--headline {\n      font-size: ${l(a,i.md)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(a,i.xs)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.md}) {\n    .storycard--headline {\n      font-size: ${l(r.breakpoints.md,i.lg)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(r.breakpoints.md,i.sm)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.lg}) {\n    .storycard--headline {\n      font-size: ${l(r.breakpoints.lg,i.lg)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(r.breakpoints.lg,i.sm)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.xl}) {\n    .storycard--headline {\n      font-size: ${+i.xl}px;\n    }\n\n    .storycard--detail {\n      font-size: ${+i.md}px;\n    }\n  }\n`,d=`\n  @media (min-width: 0) {\n    .storycard--headline {\n      font-size: ${l(a,i.xxs)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(a,i.xxs)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.md}) {\n    .storycard--headline {\n      font-size: ${l(r.breakpoints.md,i.xs)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(r.breakpoints.md,i.xxs)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.lg}) {\n    .storycard--headline {\n      font-size: ${l(r.breakpoints.lg,i.xs)};\n    }\n\n    .storycard--detail {\n      font-size: ${l(r.breakpoints.lg,i.xxs)};\n    }\n  }\n\n  @media (min-width: ${r.breakpoints.xl}) {\n    .storycard--headline {\n      font-size: ${+i.sm}px;\n    }\n\n    .storycard--detail {\n      font-size: ${+i.xs}px;\n    }\n  }\n`},25884:function(e,n,t){t.r(n),t.d(n,{BANNER_TEST_ID:function(){return y},Banner:function(){return h}});var r=t(85893),o=t(55390),a=t(19521),i=t(56947),l=t(48245);const s=e=>{const n=i.space.generic;switch(e){case"tiny":return n.x1;case"tight":return n.x3;case"standard":case"default":return n.x4;case"wide":return n.x5;case"jumbo":return n.x8;default:return"0"}},d=a.ZP.div.withConfig({displayName:"styles__BannerWrapper",componentId:"sc-184cqtp-0"})(["position:relative;z-index:0;display:block;overflow:hidden;max-width:1200px;margin:"," auto ",";line-height:1;border-bottom:1.5px solid white;background-color:",";",";.banner--link{color:",";}.storycard--text{color:",";justify-content:center;text-align:center;padding:"," 0;}.storycard--headline{margin-bottom:",";padding-bottom:0;}"],(e=>s(e.marginTop)),(e=>s(e.marginBottom)),(e=>{var n;return null!==(n=e.bgColor)&&void 0!==n?n:i.colors.palette.gray.darkest}),l.o_,(e=>e.textColor),(e=>e.textColor),i.space.generic.x3,i.space.generic.x1);var c=t(28794);const p=({children:e,links:n=[],linkType:t="none"})=>{var o;if("url"!==t||null===(o=n[0])||void 0===o||!o.link_url)return(0,r.jsx)(r.Fragment,{children:e});const a=n[0];return(0,r.jsx)(c.r,{className:"banner--link","data-lnk":a.link_tag,"data-test":"banner-link",href:a.link_url,underline:"invert",children:e})};p.displayName="BannerLink";const u={gray:i.colors.palette.gray.medium,grayDark:i.colors.palette.gray.dark,grayDarkest:i.colors.palette.gray.darkest,grayLight:i.colors.palette.gray.light,grayLightest:i.colors.palette.gray.lightest,green:i.colors.palette.green.default,greenDark:i.colors.palette.green.dark,orange:i.colors.palette.orange.default,orangeDark:i.colors.palette.orange.dark,orangeLight:i.colors.palette.orange.light,blue:i.colors.palette.blue.default,red:i.colors.palette.red.default,redDark:i.colors.palette.red.dark,redDarkest:i.colors.interactive.primary.active,transparent:"transparent",white:i.colors.palette.white,yellow:i.colors.palette.yellow.default,darkRed:i.colors.palette.red.dark,black:i.colors.palette.gray.darkest},g={dark:i.colors.palette.gray.darkest,light:i.colors.palette.white},m=(e,n)=>e&&g[e]?g[e]:"white"===n?i.colors.palette.gray.darkest:i.colors.palette.white,y="@web/SlingshotComponents/Banner",h=({content:e})=>{return(0,r.jsx)(d,{bgColor:(n=null===e||void 0===e?void 0:e.background_color,n&&Object.keys(u).includes(n)?u[n]:n),"data-test":y,marginBottom:null===e||void 0===e?void 0:e.margin_bottom,marginTop:null===e||void 0===e?void 0:e.margin_top,textColor:m(null===e||void 0===e?void 0:e.text_color,null===e||void 0===e?void 0:e.background_color),children:(0,r.jsx)(p,{links:null===e||void 0===e?void 0:e.links,linkType:null===e||void 0===e?void 0:e.link_type,children:(0,r.jsxs)("div",{className:"storycard--text",children:[(null===e||void 0===e?void 0:e.headline)&&(0,o.K)(null===e||void 0===e?void 0:e.headline,"h2","storycard--headline"),(null===e||void 0===e?void 0:e.subhead)&&(0,o.K)(null===e||void 0===e?void 0:e.subhead,"div","storycard--detail")]})})});var n};h.displayName="Banner"},55390:function(e,n,t){t.d(n,{K:function(){return i}});var r=t(59499),o=t(85893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}const i=(e,n="div",t,i)=>(0,o.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({className:t,dangerouslySetInnerHTML:{__html:e}},i))}}]);