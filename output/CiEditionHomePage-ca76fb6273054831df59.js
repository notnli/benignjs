(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7658],{9009:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var s=n(60042),a=n.n(s),i=n(27378),r=n(58331),o=n(15140),c=n(24246),l=(0,i.forwardRef)((function(e,t){var n=e.className,s=e.children,l=e.colCount,d=void 0===l?2:l,u=(0,i.useContext)(o.ZP).device,p=u.screen,m=u.isMobile,h={width:"calc(100% - 322px)"};return 3===d&&p===r.QU.DESKTOP_LG&&(h.width="calc(100% - 604px)"),m&&(h.width="100%"),(0,c.jsx)("div",{ref:t,className:a()("ds-grow",n,{"ds-px-2":m}),style:h,children:s},"content")}));l.displayName="DSLayoutPageContent";var d=l,u=n(31283),p=(0,i.forwardRef)((function(e,t){var n=e.className,s=e.children;e.colCount;return(0,c.jsx)(u.Z,{screen:[r.QU.DESKTOP,r.QU.DESKTOP_LG],children:(0,c.jsx)("div",{ref:t,className:a()(["ds-flex-none",n]),style:{width:"302px"},children:s})},"right")}));p.displayName="DSLayoutPageRight";var m=p,h=n(78392),b=(0,i.forwardRef)((function(e,t){var n=e.className,s=e.children,o=e.colCount,l=void 0===o?2:o,d=(0,i.useState)([r.QU.DESKTOP,r.QU.DESKTOP_LG]),p=d[0],m=d[1],b={width:"302px"};return 3===l&&(b.width="264px"),(0,h.Z)((function(){3===l&&m([r.QU.DESKTOP_LG])})),(0,c.jsx)(u.Z,{screen:p,children:(0,c.jsx)("div",{ref:t,className:a()(["ds-flex-none",n]),style:b,children:s},"left")},"left")}));b.displayName="DSLayoutPageLeft";var f=b,x=n(1717);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,i.forwardRef)((function(e,t){var n=e.className,s=e.children,r=i.Children.map(s,(function(e){if(i.isValidElement(e)){var t=N(N({},e.props),{},{colCount:i.Children.count(s)});return i.cloneElement(e,t)}return e}));return(0,c.jsx)("div",{ref:t,className:a()(["ds-flex","ds-space-x-5",n]),children:r})}));v.displayName="DSLayoutPage";var g=v,j=Object.assign(g,{Left:f,Content:d,Right:m})},90179:function(e,t,n){"use strict";var s=n(60042),a=n.n(s),i=n(27378),r=n(24246),o=(0,i.forwardRef)((function(e,t){var n=e.className,s=e.label,i=e.name,o=e.valueLink,c=e.id,l=e.disabled,d=e.onBlur;return(0,r.jsxs)("span",{ref:t,className:a()("ds-radio",n),onClick:function(){l||o.setValue(!o.value)},children:[(0,r.jsx)("input",{type:"radio",id:c,checked:o.value,disabled:l,name:i,onBlur:function(){return d&&d()}}),(0,r.jsx)("span",{className:"checkmark"}),s?(0,r.jsx)("label",{htmlFor:c,className:"label",children:s}):null]})}));o.displayName="DSRadio",t.Z=o},6831:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var s=n(1717),a=n(27378),i=n(17218),r=n(60042),o=n.n(r),c=n(90179),l=n(65031),d=n(61931),u=n(51826),p=n(24246),m=(0,a.forwardRef)((function(e,t){var n=e.name,s=e.className,a=e.options,i=e.columns,r=e.columnMinWidth,m=void 0===r?220:r,h=e.searchable,b=e.valueLink,f=(0,d.Z)({search:""}).getLink("search"),x=a;return""!==f.value.trim()&&(x=a.filter((function(e){return!!(0,u.HD)(e.label)&&e.label.toLowerCase().includes(f.value)}))),(0,p.jsxs)("div",{className:o()(s,{"ds-w-full":1===i}),style:{width:i>1?m*i:void 0},children:[h?(0,p.jsx)("div",{className:"ds-mb-3",children:(0,p.jsx)(l.ZP,{valueLink:f,placeholder:h.placeholder})}):null,(0,p.jsx)("div",{className:"ds-grid ds-grid-cols-".concat(i),children:x.map((function(e,t){var s={value:b.value===e.key,setValue:function(t){t&&b.setValue(e.key)}};return(0,p.jsx)("div",{className:"ds-mb-2",children:(0,p.jsx)(c.Z,{label:e.label,valueLink:s,name:n})},t)}))})]})}));m.displayName="DSRadioGroup";var h=m;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.groupName,n=e.header,s=e.selectedKey,r=e.options,o=e.onChange,c=e.onClose,l=e.footer,d=e.variant,u=void 0===d?i.bT.BOTTOM_SHEET:d,m=(0,a.useRef)(null),b={value:s,setValue:function(e){var t;null===(t=m.current)||void 0===t||t.close(),o(r.find((function(t){return t.key==e})))}};return(0,p.jsxs)(i.ZP,{ref:m,variant:u,onClose:c,children:[(0,p.jsx)(i.ZP.Header,f({},n)),(0,p.jsx)(i.ZP.Content,{children:(0,p.jsx)(h,{options:r,valueLink:b,columns:1,name:t})}),l?(0,p.jsx)(i.ZP.Footer,{children:l}):null]})}},54304:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});var s=n(17452),a={exclusions:{unit:"exclusions",type:s.Ft.OUT_OF_PAGE,attributes:{pos:"exclusions"}},overlay:{unit:"overlay",type:s.Ft.OUT_OF_PAGE,attributes:{pos:"outofpage"}},wallpaper:{unit:"wallpaper",type:s.Ft.IN_PAGE,attributes:{pos:"wallpaper"}},scoresCarousel:{unit:"scoresCarousel",type:s.Ft.IN_PAGE,attributes:{pos:"scoresCarousel"}},presbyHeader:{unit:"presbyHeader",type:s.Ft.IN_PAGE,attributes:{pos:"presbyHeader"}},bannerTop:{unit:"banner",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerTopRoW:{unit:"bannerRoW",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerBottom:{unit:"banner",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottom2:{unit:"banner",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom2"}},bannerNewBottom:{unit:"banner",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"newbottom"}},bannerBottomRoW:{unit:"bannerRoW",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},longstrip:{unit:"longstrip",type:s.Ft.IN_PAGE,attributes:{pos:"longstrip"}},longstrip2:{unit:"longstrip2",type:s.Ft.IN_PAGE,attributes:{pos:"longstrip2"}},incontentstrip:{unit:"incontentstrip",type:s.Ft.IN_PAGE,attributes:{pos:"incontentstrip"}},incontent:{unit:"incontent",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentNewBottom:{unit:"incontent",type:s.Ft.IN_VIEW,attributes:{pos:"newbottom",kvpos:"top"}},incontentRoW:{unit:"incontentRoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},promobox:{unit:"promobox",type:s.Ft.IN_PAGE,attributes:{pos:"promobox"}},promoboxTop:{unit:"promobox",type:s.Ft.IN_PAGE,attributes:{pos:"promobox",kvpos:"top"}},incontent2:{unit:"incontent2",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent2RoW:{unit:"incontent2RoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent3:{unit:"incontent3",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3RoW:{unit:"incontent3RoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3Bottom2:{unit:"incontent3",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom2"}},incontent4:{unit:"incontent4",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"newtop"}},incontentStory:{unit:"incontentStory",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentStoryRoW:{unit:"incontentStoryRoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},promoboxBottom:{unit:"promobox",type:s.Ft.IN_VIEW,attributes:{pos:"promobox",kvpos:"bottom"}},bannerSticky:{unit:"bannerSticky",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},bannerStickyRoW:{unit:"bannerStickyRoW",type:s.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},scoresCarouselApp:{unit:"scoresCarouselApp",type:s.Ft.IN_PAGE,attributes:{pos:"scoresCarouselApp",kvpos:"hsb"}},incontentApp:{unit:"incontent",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentAppRoW:{unit:"incontentRoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentApp2:{unit:"incontent2",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp2RoW:{unit:"incontent2RoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp3:{unit:"incontent3",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontentApp3RoW:{unit:"incontent3RoW",type:s.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},bannerTopApp:{unit:"banner",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerTopAppRoW:{unit:"bannerRoW",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerBottomApp:{unit:"banner",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottomAppRoW:{unit:"bannerRoW",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerNewBottomApp:{unit:"banner",type:s.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"newbottom"}}}},65057:function(e,t,n){"use strict";n(27378);var s=n(60042),a=n.n(s),i=n(17809),r=n(24246);t.Z=function(e){var t=e.className;return(0,r.jsxs)("div",{className:a()("lg:ds--mx-5",t),children:[(0,r.jsx)(i.Z,{pageUnitId:"bannerTop",className:"ds-mb-2"}),(0,r.jsx)(i.Z,{pageUnitId:"bannerTopRoW",className:"ds-mb-2"})]})}},25203:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var s,a=n(27378),i=n(4550),r=n(1319),o=n(57544),c=n(36786),l=n(97458),d=n(15140),u=n(3982),p=n(44757),m=n(2251),h=n(36077),b=n(5273),f=n(47086),x=n(60042),y=n.n(x),N=n(24246);!function(e){e.INFO="INFO",e.DETAIL="DETAIL"}(s||(s={}));t.Z=function(e){var t=e.layout,n=e.siteAreaId,x=e.className,v=(0,a.useState)([]),g=v[0],j=v[1],I=(0,a.useRef)(!1),P=(0,a.useContext)(r.Z),E=P.theme,Z=P.lang;return(0,a.useEffect)((function(){return I.current=!0,(0,f.JI)().getSiteAreaFeed({siteAreaId:n,page:1,records:10,lang:Z}).then((function(e){if(e.results){var t=(0,o.oF)(e.results);I.current&&j(t)}})).catch(console.error),function(){I.current=!1}}),[]),i.Z.features.nlp?t===s.INFO?(0,N.jsx)(u.ZP,{className:y()("ds-mb-4",x),children:(0,N.jsx)(u.ZP.Content,{children:(0,N.jsxs)("div",{className:"ds-flex ds-flex-col",children:[(0,N.jsx)("div",{children:(0,N.jsx)(c.Z,{href:(0,o.HS)(),className:"ds-flex ds-justify-center ds-pb-4",data:{action:"ask:asklogo"},children:(0,N.jsx)(l.ZP,{variant:l.N6.SQUARE,size:l.Ui.WIDTH_160,width:135,alt:"AskESPNcricinfo Logo",url:E===d.Wi.DARK?"/static/images/nlp-logo-dark.svg":"/static/images/nlp-logo.svg"},"nlp-widget-".concat(E))})}),g.length>0?(0,N.jsx)("div",{className:"ds-mb-4 ds-text-center",children:(0,N.jsx)(c.Z,{href:g[0].answerUrl,data:{action:"ask:askquestion:".concat(g[0].question)},children:(0,N.jsx)("span",{className:"ds-text-typo-mid2 ds-text-compact-s",children:g[0].question})})}):null,(0,N.jsx)("div",{children:(0,N.jsx)(p.ZP,{size:p.NA.SM,variant:p.Tu.SECONDARY,href:(0,o.HS)(),label:"Ask a question",startIcon:{name:m.v.SEARCH_OUTLINE,color:h.BG.PRIMARY}})})]})})}):t===s.DETAIL?(0,N.jsx)(u.ZP,{className:y()("ds-mb-4",x),children:(0,N.jsx)(u.ZP.Content,{size:u.kC.FULL,children:(0,N.jsxs)("div",{className:"ds-flex ds-flex-col",children:[(0,N.jsx)("div",{children:(0,N.jsx)(c.Z,{href:(0,o.HS)(),className:"ds-flex ds-justify-center ds-py-4 ds-border-b ds-border-line",data:{action:"ask:asklogo"},children:(0,N.jsx)(l.ZP,{variant:l.N6.SQUARE,size:l.Ui.WIDTH_160,width:135,alt:"AskESPNcricinfo Logo",url:E===d.Wi.DARK?"/static/images/nlp-logo-dark.svg":"/static/images/nlp-logo.svg"},"nlp-widget-".concat(E))})}),(0,N.jsxs)("div",{className:"ds-m-4",children:[(0,N.jsx)(b.ZP,{variant:b.Fu.TITLE_XS,className:"ds-mb-4 ds-text-typo",children:"Instant answers to T20 questions"}),(0,N.jsx)("div",{children:g.map((function(e){var t=e.question,n=e.answerUrl;return(0,N.jsxs)("div",{className:"ds-flex ds-items-center ds-mb-2",children:[(0,N.jsx)(h.ZP,{name:m.v.SEARCH_SOLID,className:"ds-self-start"}),(0,N.jsx)(c.Z,{href:n,className:"ds-ml-1 ds-text-typo ds-text-tight-m",data:{action:"ask:askquestion:".concat(t)},children:(0,N.jsx)("span",{children:t})})]},t)}))}),(0,N.jsx)("div",{className:"ds-flex ds-justify-center",children:(0,N.jsx)(p.ZP,{size:p.NA.SM,variant:p.Tu.SECONDARY,href:(0,o.HS)(),label:"Ask a question",data:{action:"ask:askbutton"},fullWidth:!0})})]})]})})}):null:null}},30050:function(e,t,n){"use strict";var s=n(60042),a=n.n(s),i=n(27378),r=n(3982),o=n(36786),c=n(36077),l=n(97458),d=n(99011),u=n(5273),p=n(2251),m=n(62882),h=n(1319),b=n(67646),f=n(24246),x=function(e,t){return(0,b.O)(e)?m.ah.PARTIALLY_ALLOWED_URL:t};t.Z=function(e){var t=e.children,n=(0,i.useContext)(h.Z).country,s=(0,b.O)(n);return(0,f.jsxs)(r.ZP,{className:"ds-mb-4 ds-text-tight-s",children:[(0,f.jsx)(r.ZP.Header,{title:(0,f.jsxs)("div",{className:"ds-flex ds-justify-between",children:[(0,f.jsxs)(o.Z,{href:x(n,m.ah.WIDGET_PROMO_URL),className:"ds-inline-flex ds-items-center ds-text-typo-primary",children:[(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_M_BOLD,children:"Betting Odds"}),"\xa0",(0,f.jsx)(c.ZP,{name:p.v.LAUNCH_OUTLINE,size:c.XR.SM,color:c.BG.PRIMARY})]}),(0,f.jsxs)(o.Z,{href:x(n,m.ah.WIDGET_PROMO_URL),className:"",children:[(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_XS,className:"ds-text-typo-primary",children:"Presented by"}),(0,f.jsx)(l.ZP,{variant:l.N6.NONE,size:l.Ui.NONE,url:m.ah.LOGO_URL,alt:"Bet 365 Logo",width:44,height:12})]})]})}),(0,f.jsxs)(r.ZP.Content,{size:r.kC.FULL,children:[(0,f.jsx)("div",{children:t}),(0,f.jsxs)("div",{className:"ds-bg-[#117a5c] ds-p-4 ds-text-raw-white",children:[(0,f.jsxs)("div",{className:a()("ds-flex ds-items-start ds-mb-3",{"ds-justify-between":!s}),children:[(0,f.jsx)(o.Z,{href:x(n,m.ah.WIDGET_PROMO_URL),isExternal:!0,children:(0,f.jsx)(l.ZP,{variant:l.N6.NONE,size:l.Ui.NONE,url:m.ah.LOGO_URL,alt:"Bet 365 Logo",width:44,height:12,className:"ds-min-w-[44px]"})}),(0,f.jsxs)("div",{className:a()(s?"ds-ml-[2rem]":"ds-ml-4"),children:[(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_M_MEDIUM,className:"ds-uppercase ds-text-[#f8db16]",children:s?"Bet On Cricket":"Open Account Offer"}),s?null:(0,f.jsx)(u.ZP,{variant:u.Fu.COMFORTABLE_XS,className:"ds-block",children:"Bet \xa310 & Get \xa330 in Free Bets for new customers at bet365."})]})]}),(0,f.jsx)("div",{className:"ds-mb-3",children:(0,f.jsx)(o.Z,{href:x(n,m.ah.WIDGET_PROMO_URL),className:"ds-rounded-full ds-border ds-border-raw-white ds-p-3 ds-w-full ds-text-center ds-block",children:(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_L_MEDIUM,children:"Join Here"})})}),(0,f.jsx)("div",{children:s?(0,f.jsx)("div",{className:"ds-text-center",children:(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_XS,children:"Gamble Responsibly"})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"ds-mb-4",children:[(0,f.jsx)(u.ZP,{variant:u.Fu.TIGHT_XS,children:"Min deposit requirement. Free Bets are paid as Bet Credits and are available for use upon settlement of bets to value of qualifying deposit. Min odds, bet and payment method exclusions apply. Returns exclude Bet Credits stake. Time limits and T&Cs apply.\xa0"}),(0,f.jsx)("div",{className:"ds-block",children:(0,f.jsx)(d.Z,{anchorType:{href:x(n,m.ah.WIDGET_PROMO_URL)},label:"More Details",labelVariant:u.Fu.TIGHT_XS,variant:d.I.HIGHLIGHTED_PRIMARY})})]}),(0,f.jsxs)("div",{className:"ds-flex ds-items-center ds-mb-4",children:[(0,f.jsx)(l.ZP,{variant:l.N6.NONE,size:l.Ui.NONE,url:"https://a.espncdn.com/redesign/assets/img/logos/begambleawareorg_white_1400x182.png",alt:"disclaimer-logo",width:134,height:18}),(0,f.jsx)(l.ZP,{variant:l.N6.NONE,size:l.Ui.NONE,url:"https://a.espncdn.com/redesign/assets/img/logos/logo_18plus_white_40x40.png",alt:"disclaimer-logo-espn",width:40,height:40,className:"ds-ml-4"})]})]})})]})]}),(0,f.jsx)(r.ZP.Footer,{className:"ds-p-4 ds-text-center",children:(0,f.jsx)(d.Z,{anchorType:{href:x(n,m.ah.WIDGET_PROMO_URL)},label:"FIND MORE ODDS",labelVariant:u.Fu.TIGHT_S_BOLD,variant:d.I.HIGHLIGHTED_PRIMARY})})]})}},32581:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var s,a=n(27378),i=n(1319),r=n(36786),o=n(97458),c=n(3982),l=n(44757),d=n(5273),u=n(69271),p=n(62882),m=n(60042),h=n.n(m),b=n(18797),f=n(73627),x=n(10626),y=n(24246);!function(e){e.STRIP_COMPACT="STRIP_COMPACT",e.STRIP_DETAILED="STRIP_DETAILED",e.DEFAULT="DEFAULT"}(s||(s={}));t.Z=function(e){var t,n,m=e.layout,N=void 0===m?s.DEFAULT:m,v=e.data,g=e.match,j=void 0===g?null:g,I=e.className,P=(0,a.useContext)(i.Z).device.isMobile,E=(0,u.eV)(),Z=function(e,t){var n={height:0,width:0};switch(e){case s.STRIP_COMPACT:t?(n.width=32,n.height=32):(n.width=24,n.height=24);break;case s.STRIP_DETAILED:t?(n.width=34,n.height=34):(n.width=48,n.height=42);break;default:n.width=76,n.height=64}return n}(N,P),_=Z.width,T=Z.height;if(j){var w=j.state,k=j.startTime,O=j.timePublished;n=w===f.xd.LIVE,t=(0,x.Ge)(k,!!O)}return N==s.STRIP_COMPACT?(0,y.jsx)(c.ZP,{className:h()("ds-bg-ui-fill-alternate",I),rounded:!1,children:(0,y.jsx)(c.ZP.Content,{size:c.kC.FULL,children:(0,y.jsxs)(r.Z,{href:E,data:v,className:h()("ds-flex ds-items-center ds-justify-between ds-px-4 ds-py-2 ds-relative"),children:[(0,y.jsx)(b.ZP,{variant:b.ZV.SECONDARY,size:b.l2.XXS,label:"NEW",className:h()("ds-font-medium ds-absolute ds--rotate-45 ds-top-0 ds-pt-2 ds-pl-6 ds-pr-5 ds-h-5 ds-left-[-26px] ds-text-center")}),(0,y.jsxs)("div",{className:"ds-flex ds-items-center lg:ds-ml-4",children:[(0,y.jsx)(o.ZP,{variant:o.N6.NONE,size:o.Ui.WIDTH_80,width:_,height:T,url:p.DN.GAME_PW_LOGO,alt:"play-and-watch"}),(0,y.jsxs)("div",{className:h()("ds-flex ds-ml-3 lg:ds-ml-2",{"ds-flex-col":P,"ds-items-center":!P}),children:[(0,y.jsxs)(d.ZP,{variant:P?d.Fu.EYEBROW_XS_BOLD:d.Fu.COMPACT_XS_MEDIUM,element:"div",className:"ds-text-raw-red ds-uppercase",children:[n?(0,y.jsx)("span",{children:"Live\xa0\u2022\xa0"}):null,(0,y.jsxs)(d.ZP,{variant:P?d.Fu.EYEBROW_XS_BOLD:d.Fu.TITLE_SUBTLE_S,className:"ds-text-typo",children:["".concat(P?"":"Play & watch: ","A Cricinfo Game"),P?null:(0,y.jsx)("span",{children:"\xa0\u2022\xa0"})]})]}),(0,y.jsx)(d.ZP,{variant:P?d.Fu.TIGHT_XS:d.Fu.COMPACT_XS,element:"div",className:h()("ds-text-typo"),children:"Play alongside batters in a live match and score as many runs as they do!"})]})]}),(0,y.jsx)(l.ZP,{variant:l.Tu.PRIMARY,label:"Play",size:P?l.NA.XS:l.NA.XXS,className:"ds-border-0 ds-whitespace-nowrap ds-ml-3"})]})})}):N===s.STRIP_DETAILED?(0,y.jsx)(c.ZP,{className:h()("ds-mb-4",I),rounded:!P,children:(0,y.jsx)(c.ZP.Content,{size:c.kC.FULL,children:(0,y.jsxs)(r.Z,{href:E,data:v,className:h()("ds-flex ds-items-center ds-justify-between ds-px-4 ds-py-4 lg:ds-py-6 ds-relative"),children:[(0,y.jsx)(b.ZP,{variant:b.ZV.SECONDARY,label:"NEW",size:b.l2.XXS,className:h()("ds-font-medium ds-absolute ds--rotate-45 ds-top-0 ds-pt-2 ds-pl-6 ds-pr-5 ds-h-5 ds-left-[-26px] ds-text-center")}),(0,y.jsxs)("div",{className:"ds-flex ds-items-center",children:[(0,y.jsx)(o.ZP,{variant:o.N6.NONE,size:o.Ui.WIDTH_80,width:_,height:T,url:p.DN.GAME_PW_LOGO,alt:"play-and-watch"}),(0,y.jsxs)("div",{className:h()("ds-flex ds-flex-col ds-ml-3 lg:ds-ml-4"),children:[(0,y.jsxs)(d.ZP,{variant:d.Fu.TITLE_SUBTLE_M,element:"div",className:"ds-text-typo",children:[(0,y.jsx)("span",{className:"ds-whitespace-nowrap",children:"A CRICINFO GAME"}),P&&t?(0,y.jsxs)("span",{className:"ds-whitespace-nowrap",children:["\xa0\u2022\xa0",t.date,t.time?", ".concat(t.time):""]}):null]}),(0,y.jsxs)("div",{className:"ds-flex ds-justify-between",children:[(0,y.jsx)(d.ZP,{className:h()("ds-text-typo"),element:"div",variant:P?d.Fu.COMPACT_XXS:d.Fu.COMPACT_S,children:"Play alongside batters in a live match and score as many runs as they do!"}),P?(0,y.jsx)(l.ZP,{variant:l.Tu.TERTIARY,label:"Get started",size:l.NA.XXS,className:"ds-whitespace-nowrap ds-mt-auto ds-ml-4"}):null]})]})]}),P?null:(0,y.jsxs)("div",{className:"ds-flex ds-items-center",children:[t?(0,y.jsxs)("div",{className:h()("ds-flex ds-flex-col ds-ml-4"),children:[(0,y.jsxs)(d.ZP,{variant:d.Fu.TIGHT_XS,element:"div",className:"ds-text-typo ds-text-right",children:["Live ",t.date,t.time?" at":""]}),(0,y.jsx)(d.ZP,{variant:d.Fu.TITLE_SUBTLE_S,element:"div",className:"ds-text-typo ds-text-right",children:t.time})]}):null,(0,y.jsx)(l.ZP,{variant:l.Tu.TERTIARY,label:"Get started",size:l.NA.XS,className:"ds-whitespace-nowrap ds-ml-4"})]})]})})}):(0,y.jsx)(c.ZP,{className:h()("ds-mb-4",I),children:(0,y.jsx)(c.ZP.Content,{size:c.kC.FULL,className:"ds-h-full ds-flex ds-items-center",children:(0,y.jsxs)(r.Z,{href:E,data:v,className:"ds-flex ds-flex-col ds-items-center ds-justify-center ds-py-6 ds-px-4 ds-relative",children:[(0,y.jsx)(b.ZP,{variant:b.ZV.SECONDARY,label:"NEW",className:"ds-font-medium ds-pl-7 ds-pt-1 ds-pr-6 ds-absolute ds-top-0 ds-left-[-29px] ds--rotate-45 ds-text-center"}),(0,y.jsx)(o.ZP,{variant:o.N6.NONE,size:o.Ui.WIDTH_80,width:_,height:T,url:p.DN.GAME_PW_LOGO,alt:"play-and-watch"}),(0,y.jsx)(d.ZP,{variant:d.Fu.TITLE_SUBTLE_M,element:"div",className:"ds-text-typo ds-text-center ds-mt-2",children:"A CRICINFO GAME"}),(0,y.jsx)(d.ZP,{variant:d.Fu.COMPACT_XS,element:"div",className:"ds-text-typo ds-text-center ds-mt-1",children:"Play alongside batters in a live match and score as many runs as they do!"}),(0,y.jsx)(l.ZP,{variant:l.Tu.TERTIARY,label:"Get started",size:l.NA.XS,fullWidth:!0,className:"ds-mt-3"})]})})})}},51148:function(e,t,n){"use strict";n(27378);var s=n(73627),a=n(94993),i=n(3982),r=n(98617),o=n(7839),c=n(60042),l=n.n(c),d=n(97458),u=n(24246);t.Z=function(e){var t=e.items,n=e.dynamicNodes,c=t.map((function(e,n){var a=e.type===s.Bg.VIDEO?"video":"story",i="righttrail:".concat(a,":").concat(n+1);return(0,u.jsx)("div",{className:l()("ds-p-4",{"ds-border-b ds-border-line":n<t.length-1}),children:(0,u.jsx)(r.Z,{contentItem:e,variant:o.YQ.BOTTOM,size:o.io.SM,imgVariant:d.N6.WIDE,imgSize:d.Ui.SIDEBAR_FULL,action:i,hide:{category:!0,description:!0,attributes:!0}})},n)})),p=(0,a.sc)(c,n);return(0,u.jsx)(i.ZP,{className:"ds-mb-4",children:(0,u.jsx)(i.ZP.Content,{size:i.kC.FULL,className:"ds-flex ds-flex-col",children:p})})}},69271:function(e,t,n){"use strict";n.d(t,{MM:function(){return s},cO:function(){return a},dr:function(){return i},k1:function(){return r},W4:function(){return o},gX:function(){return c},eV:function(){return l}});var s=function(){return"/game"},a=function(){return"/game/daily-streak"},i=function(){return"/game/trump"},r=function(){return"/embed/game"},o=function(){return"/embed/game/daily-streak"},c=function(){return"/embed/game/trump"},l=function(){return"/game/playandwatch"}},14097:function(e,t,n){"use strict";n.d(t,{e:function(){return u},P:function(){return p}});var s=n(31750),a=n(1717),i=n(54304),r=n(17452),o=n(77571),c=["wallpaper","overlay"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){return{gpt:{webAdUnitPath:"frontpage/index",appAdUnitPath:"frontpage/index",attributes:{kvpt:"frontpage",pgtyp:"index"},units:d(d({},i.s),{},{native:{unit:"native",type:r.Ft.IN_VIEW,attributes:{pos:"native",loc:"news"}},presby:{unit:"presby",type:r.Ft.IN_VIEW,attributes:{pos:"presby"}},incontent3:{unit:"incontent3",type:r.Ft.IN_VIEW,attributes:{kvpos:"advertorial"}},incontentApp4:{unit:"incontent4",type:r.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"advertorial"}}})},video:{adUnitPath:"frontpage/index",siteSection:"espn:cricinfo:cricket:frontpage"}}},p=function(e){switch(e){case o.i.FANTASY_PICK:return{gpt:{webAdUnitPath:"fantasy/picks/index",appAdUnitPath:"fantasy/picks/index",attributes:{kvpt:"fantasypick",pgtyp:"fantasypick"},units:d(d({},i.s),{},{native:{unit:"native",type:r.Ft.IN_VIEW,attributes:{pos:"native",loc:"news"}},presby:{unit:"presby",type:r.Ft.IN_VIEW,attributes:{pos:"presby"}}})},video:{adUnitPath:"fantasy/picks/index",siteSection:"espn:cricinfo:cricket:fantasy"}};case o.i.FANCRAZE:i.s.wallpaper,i.s.overlay;return{gpt:{webAdUnitPath:"fancraze",appAdUnitPath:"fancraze",attributes:{kvpt:"fancraze",pgtyp:"fancraze"},units:d(d({},(0,s.Z)(i.s,c)),{},{native:{unit:"native",type:r.Ft.IN_VIEW,attributes:{pos:"native",loc:"news"}},presby:{unit:"presby",type:r.Ft.IN_VIEW,attributes:{pos:"presby"}}})},video:{adUnitPath:"fancraze",siteSection:"espn:cricinfo:cricket:fancraze"}};case o.i.CRICINFO30:return{gpt:{webAdUnitPath:"others",appAdUnitPath:"others",attributes:{kvpt:"others",pgtyp:"others"},units:d({},i.s)}};default:throw new Error("Dynamic Home Page Name ".concat(e," is invalid"))}}},25308:function(e,t,n){"use strict";n.d(t,{b:function(){return a},H:function(){return i}});var s=n(77571),a=function(e){return{attributes:{pageName:"frontpage",siteSection:"frontpage",contentType:"frontpage-index",subSection:"frontpage",league:"no-league"}}},i=function(e){switch(e){case s.i.FANTASY_PICK:case s.i.CRICINFO30:return{attributes:{pageName:"fantasy",siteSection:"fantasy",contentType:"fantasy-index",subSection:"fantasy",league:"no-league"}};case s.i.FANCRAZE:return{attributes:{pageName:"fancraze",siteSection:"fancraze",contentType:"fancraze-index",subSection:"fancraze",league:"no-league"}};default:throw new Error("Dynamic Home Page Name ".concat(e," is invalid"))}}},83500:function(e,t,n){"use strict";n.d(t,{x:function(){return r},j:function(){return o}});var s=n(659),a=n(77571),i=n(55543),r=function(e,t){var n=t.lang,a=t.edition;return(0,s.RQ)(n,a)},o=function(e){switch(e){case a.i.FANTASY_PICK:return{title:"Fantasy league playing 11, team prediction, for todays cricket match with fantasy cricket tips",description:"Find the complete Fantasy league team prediction, prediction of todays playing 11, team prediction for todays match, fantasy playing 11 for todays match and fantasy cricket tips for todays match. Find team prediction and playing 11 for all major fantasy leagues like dream 11, my11circle, myteam11, fanfight, gamezy, Halaplay, Ballebazzi and many more. Find fantasy league tips for IPL, CPL, BBL, English county cricket with all international cricket matches between India, Australia, Pakistan, England, Bangladesh, Sri Lanka, South Africa, Zimbabwe, New Zealand and West Indies.",canonical:(0,i.B)(e),keywords:["Fantasy league playing 11 for todays match","Fantasy league team prediction for todays match","Fantasy league team prediction","Fantasy League playing 11","Fantasy cricket team prediction","Fantasy cricket playing 11","Fantasy cricket team prediction for todays match","Fantasy cricket playing 11 for todays match"]};case a.i.FANCRAZE:return{title:"FanCraze - The metaverse for cricket! Join to own, collect, & play with officially-licensed ICC digital moments and player cards.",description:"Fancraze",canonical:(0,i.B)(e),keywords:["Fancraze"]};case a.i.CRICINFO30:return{title:"30 Years of Cricinfo: A Journey Through Time with ESPNcricinfo",description:"Experience 30 years of cricket history with ESPNcricinfo as we mark our anniversary. Explore our timeline of key milestones and see how we've shaped the way the game is covered.",canonical:(0,i.B)(e),keywords:["cricinfo 30 years","cricinfo at 30"]};default:throw new Error("Dynamic Home Page Name ".concat(e," is invalid"))}}},88819:function(e,t,n){"use strict";n(27378);var s=n(3982),a=n(39156),i=n(36077),r=n(2251),o=n(4203),c=n(24246);t.Z=function(e){var t=e.title,n=e.items,l=e.subtitle,d=e.externalLinks,u=void 0!==d&&d,p=e.className;return(0,c.jsxs)(s.ZP,{className:p,children:[(0,c.jsx)(s.ZP.Header,{title:t,subtitle:l}),(0,c.jsx)(s.ZP.Content,{size:s.kC.FULL,children:(0,c.jsx)(a.ZP,{className:"ds-py-2",children:n.map((function(e){return(0,c.jsx)(a.ZP.Item,{leftNode:(0,c.jsx)(i.ZP,{name:r.v.KEYBOARD_RIGHT_SOLID,color:i.BG.PRIMARY}),anchorType:{href:(0,o.$)(e),isExternal:u},children:(0,c.jsx)("span",{className:"ds-line-clamp-2",children:e.title})},e.id)}))})})]})}},4203:function(e,t,n){"use strict";n.d(t,{$:function(){return s},Q:function(){return a}});var s=function(e){return"/sponsored-content/".concat(e.slug,"-").concat(e.objectId)},a=function(e){return"/sponsored-content".concat(e?"?page=".concat(e):"")}},30779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return oe}});var s=n(48978),a=n(6952),i=n(88742),r=n.n(i),o=n(27378),c=n(1319),l=n(51148),d=n(51935),u=n(66581),p=n(25203),m=n(25480),h=n(77215),b=n(67646),f=n(4550),x=n(31229),y=n(58331),N=n(65057),v=n(17809),g=n(30050),j=n(71749),I=n(14097),P=n(25308),E=n(83500),Z=n(32172),_=n(46723),T=n(31283),w=n(9009),k=n(33622),O=n(95917),A=n(21600),S=n(97458),F=n(36786),R=n(94993),L=n(83649),C=n(84789),W=n(5273),D=n(44757),G=n(47086),U=n(73627),z=n(39156),H=n(3982),B=n(63103),M=n(78392),V=n(99011),X=n(4203),Y=n(88819),K=n(24246),Q=function(e){var t=e.count,n=void 0===t?5:t,s=e.className,a=(0,o.useRef)(!1),i=(0,o.useState)([]),r=i[0],l=i[1],d=(0,o.useContext)(c.Z).country;return(0,M.Z)((function(){return a.current=!0,(0,G.mR)().then((function(e){return e.getPageIndexPage({page:null})})).then((function(e){a.current&&l(e.content.pages.results.slice(0,n))})),function(){a.current=!1}})),r.length>0&&["in","lk","pk","bd"].includes(d)?(0,K.jsx)(Y.Z,{title:(0,K.jsx)(V.Z,{label:"SPOTLIGHT",labelVariant:W.Fu.TITLE_XS,variant:V.I.PRIMARY,anchorType:{href:(0,X.Q)(null),isExternal:!0}}),items:r,externalLinks:!0,className:s}):null},q=n(62882),J=n(32581),$=n(6831),ee=n(2251),te=n(33489),ne=n(8325),se=n(86677),ae=n(15140),ie=function(e){var t=e.promotedItems,n=(0,o.useContext)(c.Z),s=n.country,a=n.lang,i=(0,o.useContext)(m.Z).translate,r=t.filter((function(e){return(0,G.zC)(e.countryCodes,s)}));return(0,R.G5)(r)?null:(0,K.jsx)("div",{className:"ds-mb-4 ds--mx-2",children:(0,K.jsxs)(C.Z,{containerClassName:"ds-items-center ds-space-x-1 ds-pr-2",className:"ds-whitespace-nowrap",children:[(0,K.jsxs)(W.ZP,{variant:W.Fu.TITLE_SUBTLE_S,className:"ds-text-typo ds-pl-2",children:[i("cm_quick_links","Quick Links"),":"]}),r.map((function(e,t){return(0,K.jsx)(D.ZP,{title:e.title,label:e.title,href:(0,u.Mg)(a,e),isExternal:!1,variant:D.Tu.TERTIARY,size:D.NA.XS,data:{action:"quicklinks".concat(t+1,":").concat(e.title)}},t)}))]})})},re=function(e){var t=e.content.feed,n=(0,o.useContext)(c.Z),s=n.editionDetails,i=n.globalDetails,h=n.edition,j=n.device,I=j.isMobile,P=j.screen,E=n.country,O=n.lang,A=(0,o.useContext)(m.Z).translate,S=f.Z.features.storiesEmbed&&(O===U.IB.ENGLISH||O===U.IB.HINDI)&&I,F=O===U.IB.HINDI?["hi"]:void 0,L=O===U.IB.ENGLISH,C=(0,b.E)(E)||(0,b.O)(E),W=f.Z.features.gamePWPromotion&&q.E4.includes(E),D=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.dT)().getEditionFeed({edition:h,lang:O,page:t,records:10});case 2:return n=e.sent,e.abrupt("return",{total:n.total,collections:n.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={};return M=x._I.isApp()?{2:(0,K.jsx)(K.Fragment,{children:S?(0,K.jsx)("div",{className:"ds--mx-2 ds-mb-4",children:(0,K.jsx)(B.F4,{rounded:L,categoryId:F,siteSection:"frontpage"})},"lang-stories-embed"):null}),3:(0,K.jsxs)(K.Fragment,{children:[W?(0,K.jsx)(J.Z,{layout:J.b.STRIP_DETAILED,data:{action:"promotion:homepage:banner:playnwatch"}},"home-playnwatch-game-banner"):null,(0,K.jsxs)("div",{children:[(0,K.jsx)(Z.Z,{units:["bannerTopApp","bannerTopAppRoW"],className:"ds-mb-4"}),null!==s.promotedItems?(0,K.jsx)(ie,{promotedItems:s.promotedItems}):null]},"app-home-banner-ads-1")]}),4:(0,K.jsx)("div",{children:(0,K.jsx)(Z.Z,{units:["incontentApp","incontentAppRoW"],className:"ds-mb-4"})},"app-home-incontent-ads-3"),5:(0,K.jsx)(Z.Z,{units:["incontentApp2","incontentApp2RoW"],className:"ds-mb-4"},"app-home-incontent-ads-5"),7:(0,K.jsx)(Z.Z,{units:["native"],className:"ds-mb-4"},"app-home-native-ads-7"),8:(0,K.jsx)(Z.Z,{units:["incontentApp3","incontentApp3RoW"],className:"ds-mb-4"},"app-home-incontent-ads-9"),9:(0,K.jsx)(Q,{className:"ds-mb-4"},"sponsored-content-app")}:I?(0,y.t)(P)?{2:(0,K.jsx)(K.Fragment,{children:S?(0,K.jsx)("div",{rounded:!1,className:"ds--mx-2 ds-mb-4",children:(0,K.jsx)(B.F4,{rounded:L,categoryId:F,siteSection:"frontpage"})},"lang-stories-embed"):null}),3:(0,K.jsxs)(K.Fragment,{children:[W?(0,K.jsx)(J.Z,{layout:J.b.STRIP_DETAILED,data:{action:"promotion:homepage:banner:playnwatch"},className:"ds-rounded-xl"},"home-playnwatch-game-banner"):null,(0,K.jsxs)("div",{children:[(0,K.jsx)(Z.Z,{units:["bannerBottom"],className:"ds-mb-4"}),null!==s.promotedItems?(0,K.jsx)(ie,{promotedItems:s.promotedItems}):null]},"mobile-home-banner-ads-1")]}),4:(0,K.jsx)(Z.Z,{units:["incontent4"],className:"ds-mb-4"},"mobile-home-incontentstrip-ads-2"),5:(0,K.jsx)("div",{children:(0,K.jsx)(Z.Z,{units:["bannerNewBottom"],className:"ds-mb-4"})},"mobile-home-banner-ads-3"),6:(0,K.jsx)(Z.Z,{units:["incontent","incontentRoW"],className:"ds-mb-4"},"mobile-home-incontent-ads-4"),7:(0,K.jsx)(Z.Z,{units:["incontent2","incontent2RoW"],className:"ds-mb-4"},"mobile-home-incontent-ads-6"),8:(0,K.jsx)(Z.Z,{units:["native"],className:"ds-mb-4"},"mobile-home-native-ads-7"),9:(0,K.jsx)(Q,{className:"ds-mb-4"},"sponsored-content-mobile-small")}:{2:(0,K.jsx)(K.Fragment,{children:S?(0,K.jsx)("div",{className:"ds--mx-2 ds-mb-4",children:(0,K.jsx)(B.F4,{rounded:L,categoryId:F,siteSection:"frontpage"})},"lang-stories-embed"):null}),3:(0,K.jsxs)(K.Fragment,{children:[W?(0,K.jsx)(J.Z,{layout:J.b.STRIP_DETAILED,data:{action:"promotion:homepage:banner:playnwatch"},className:"ds-rounded-xl"},"home-playnwatch-game-banner"):null,(0,K.jsxs)("div",{children:[(0,K.jsx)(Z.Z,{units:["bannerBottom"],className:"ds-mb-4"}),null!==s.promotedItems?(0,K.jsx)(ie,{promotedItems:s.promotedItems}):null]},"mobile-home-banner-ads-1")]}),4:(0,K.jsx)("div",{children:(0,K.jsx)(Z.Z,{units:["bannerNewBottom"],className:"ds-mb-4"})},"mobile-home-banner-btm-ads-3"),5:(0,K.jsx)(Z.Z,{units:["incontent"],className:"ds-mb-4"},"mobile-home-incontent-ads-4"),6:(0,K.jsx)(Z.Z,{units:["incontent2"],className:"ds-mb-4"},"mobile-home-incontent-ads-6"),7:(0,K.jsx)(Z.Z,{units:["native"],className:"ds-mb-4"},"mobile-home-native-ads-7"),9:(0,K.jsx)(Q,{className:"ds-mb-4"},"sponsored-content-mobile")}:{6:(0,K.jsx)(Z.Z,{units:["native"],className:"ds-mb-4"},"home-native-ads-6"),9:(0,K.jsx)(Q,{className:"ds-mb-4"},"sponsored-content-desktop")},(0,K.jsxs)(_.Z,{className:"ds-pt-4",children:[(0,K.jsx)(T.Z,{app:!0,match:T.d.NEGATIVE,children:(0,K.jsx)(N.Z,{className:"ds-mb-2"})}),(0,K.jsxs)(w.Z,{children:[(0,K.jsxs)(w.Z.Left,{children:[W?(0,K.jsx)(J.Z,{data:{action:"promotion:homepage:banner:playnwatch"}},"home-playnwatch-game-banner"):(0,K.jsx)(p.Z,{layout:p.X.INFO,siteAreaId:f.Z.nlp.objectIds.sidebarWidgetInfo}),(0,R.G5)(s.keySeriesItems)?null:(0,K.jsx)(d.Z,{title:A("cm_key_series","Key Series"),items:s.keySeriesItems,headerSizeType:H.y2.XS}),(0,R.G5)(s.sponsoredItems)?null:(0,K.jsx)(d.Z,{title:A("cm_quick_links","Quick Links"),items:s.sponsoredItems,headerSizeType:H.y2.XS}),(0,R.G5)(i.appItems)?null:(0,K.jsx)(d.Z,{title:A("cm_espncricinfo_apps","ESPNcricinfo Apps"),items:i.appItems,headerSizeType:H.y2.XS}),(0,R.G5)(i.followItems)?null:(0,K.jsx)(d.Z,{title:A("cm_follow_espncricinfo","Follow ESPNcricinfo"),items:i.followItems,headerSizeType:H.y2.XS}),(0,R.G5)(i.siteItems)?null:(0,K.jsx)(d.Z,{title:A("cm_espn_sites","ESPN Sites"),items:i.siteItems,headerSizeType:H.y2.XS})]}),(0,K.jsx)(w.Z.Content,{children:(0,K.jsx)(k.Z,{total:t.total,collections:t.results,loadNext:D,dynamicNodes:M,scrollToTop:!1})}),(0,K.jsxs)(w.Z.Right,{children:[(0,K.jsx)("div",{className:"ds-mb-4",children:(0,K.jsx)(d.Z,{title:A("cm_news_headlines","News Headlines"),items:(0,u.oW)(t.results),listItemWeightType:z.Uv.MEDIUM,headerSizeType:H.y2.XS})}),(0,K.jsxs)("div",{children:[(0,K.jsx)(v.Z,{pageUnitId:"incontentstrip",className:"ds-mb-4"}),(0,K.jsx)(v.Z,{pageUnitId:"incontent",className:"ds-mb-4"}),(0,K.jsx)(v.Z,{pageUnitId:"incontentRoW",className:"ds-mb-4"}),(0,K.jsx)(v.Z,{pageUnitId:"promoboxTop",className:"ds-mb-4"})]},"rhs-ads"),(0,K.jsx)(l.Z,{items:i.featuredItems,dynamicNodes:{5:(0,K.jsx)(Z.Z,{units:["incontent2","incontent2RoW"],className:"ds-mb-4"},"home-sidebar-incontent-ads-5")}}),(0,K.jsxs)("div",{children:[(0,K.jsx)(v.Z,{pageUnitId:"promoboxBottom",className:"ds-mb-4"}),(0,K.jsx)(Z.Z,{units:["incontent3","incontent3RoW"],className:"ds-mb-4"},"home-sidebar-incontent-ads-10")]}),(0,K.jsx)("div",{className:"ds-w-[100] ds-mb-4",children:C?(0,K.jsx)("div",{children:(0,K.jsx)(g.Z,{})},"bet365"):null})]})]})]})};re.getMobileAppBar=function(){var e=(0,o.useContext)(c.Z),t=e.country,n=e.edition,a=e.lang,i=(0,se.useRouter)().asPath,r=(0,o.useContext)(ae.ZP).showModal,l=f.Z.editions.options.find((function(e){return n===e.key})),d=[],u=(0,K.jsx)(F.Z,{href:(0,L.oK)(),className:"ds-p-2",data:{action:"fantasy:header"},children:(0,K.jsx)(S.ZP,{height:22,variant:S.N6.NONE,size:S.Ui.WIDTH_80,alt:"Fantasy Home",url:"/static/images/fantasy-home.png",lazy:!1})},"fantasy"),p=(0,K.jsx)(F.Z,{href:"https://cricinfoverse.com/",className:"ds-p-2",data:{action:"cricinfoverse:header"},children:(0,K.jsx)(S.ZP,{height:40,variant:S.N6.NONE,size:S.Ui.WIDTH_80,alt:"Cricinfoverse",url:"/static/images/cricinfo-verse.png",lazy:!1})},"cricinfoverse"),m=(0,K.jsx)(F.Z,{href:"/fancraze",className:"ds-p-2",data:{action:"fancraze:header"},children:(0,K.jsx)(S.ZP,{height:32,width:32,variant:S.N6.NONE,size:S.Ui.WIDTH_80,alt:"Fancraze",url:"/static/images/fancraze/fancraze-logo-white.svg",lazy:!1})},"fancraze");return(0,A.M)(t)&&d.push(u),f.Z.features.cricinfoVerseEntry&&d.push(p),f.Z.features.fancrazeEntry&&d.push(m),(0,K.jsx)(O.default,{rightNodes:d,icons:l.supportedLang.length>0?[{name:ee.v.CI_TRANSLATE_SOLID,onClick:function(){var e=[];l.supportedLang.length>0&&[U.IB.ENGLISH].concat((0,s.Z)(l.supportedLang)).forEach((function(t){var n;(null===(n=f.Z.language[t])||void 0===n||n)&&e.push({key:t,label:te.h4[t].localName})}));return r((0,K.jsx)($.Z,{groupName:"appLanguages",header:{title:"Choose your language",iconName:ee.v.CI_TRANSLATE_SOLID},selectedKey:a,options:e,onChange:function(e){var t=e.key;if(a!==t){var n=i;n=a!==U.IB.ENGLISH?n.replace("".concat((0,ne.P_)(a)),"".concat((0,ne.P_)(t))):"".concat((0,ne.P_)(t)).concat(n),(0,G.Yg)().trackEvent("frontpage:language"),window.location.href="".concat(f.Z.global.baseUrl).concat(n)}}})),!1}}]:void 0,defaultIconsFirst:!0})},re.getInitialProps=function(){var e=(0,a.Z)(r().mark((function e(t){var n,s,a,i,o,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.appNextJsContext,s=n.edition,a=n.lang,i=n.country,e.next=3,(0,G.dT)().getEditionHomePage({edition:s,lang:a,page:1,records:10});case 3:return o=e.sent,c=f.Z.features.gamePWPromotion&&q.E4.includes(i),(0,j.es)(t,120),e.abrupt("return",{data:o,layout:{type:h.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!0,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!0,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!c,mobileStickyGamePW:c,appStickyAd:!0,appStickyAsk:!c,appStickyGamePW:c},ad:(0,I.e)(o),analytics:(0,P.b)(o),seo:(0,E.x)(o,{lang:a,edition:s})}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var oe=re},55059:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/CiEditionHomePage",function(){return n(30779)}])}},function(e){e.O(0,[5917,7839,4991,6528,8617,35,3622,9774,2888,179],(function(){return t=55059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);