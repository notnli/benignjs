"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4598],{24333:function(e,t,i){i.d(t,{D:function(){return n}});var a=i(67294);function n(){const e=(0,a.useRef)(!1),t=(0,a.useCallback)((()=>e.current),[]);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t}},90584:function(e,t,i){i.d(t,{J:function(){return k}});var a=i(85893),n=i(67294),o=i(10833),l=i(63546),r=i(72604),s=i(38927),d=i(67530),c=i(88517),p=i(28794);const m=({shoppableDrawerData:e})=>{var t,i;const n=null!==(t=null===e||void 0===e||null===(i=e.tcins)||void 0===i?void 0:i.replace(/\s+/g,""))&&void 0!==t?t:"",[o]=(0,c.Y)({tcins:n,pricing_store_id:"3991"}),l=o((e=>null===e||void 0===e?void 0:e.product_summaries));return(0,a.jsx)("div",{children:l&&(0,a.jsx)("ul",{"data-test":"shoppableDrawer-seo-list",children:null===l||void 0===l?void 0:l.map((e=>{var t,i,n,o,l,r;return(0,a.jsx)("li",{children:(0,a.jsx)(p.r,{"data-test":"shoppableDrawer-seo-link",href:null===(t=e.item)||void 0===t||null===(i=t.enrichment)||void 0===i?void 0:i.buy_url,children:null===(n=e.item)||void 0===n||null===(o=n.product_description)||void 0===o?void 0:o.title})},`${e.tcin} - ${null===(l=e.item)||void 0===l||null===(r=l.product_description)||void 0===r?void 0:r.title}`)}))})})};m.displayName="ShoppableDrawerSeoLinks";var u=i(19521),g=i(70926),h=i(46652);const b=(0,u.ZP)(h._).withConfig({displayName:"styles__StyledIcon",componentId:"sc-c0dwwo-0"})(["z-index:",";"],g.kg.inlineOverlay),k=({blockIndex:e=0,children:t,componentId:i,linkType:c,shoppableDrawerData:p})=>{var u;const g=(0,s.rS)(),{isBot:h}=(0,n.useContext)(o.I.Context),[k,{open:x,close:v}]=(0,l.I)({type:"drawer",shouldStack:!0,ModalProps:{onCloseClick:()=>{v()}}}),y=(0,n.useCallback)((t=>{t.stopPropagation(),g.trackEvent({guest:{eventType:"customInteraction"},customInteraction:{type:"click",value:`${i}_ShoppableDrawerOpen_${e+1}`}}),x()}),[e,i,g,x]);if(!t)return null;if("shoppable_drawer"!==c||!n.isValidElement(t))return(0,a.jsx)(a.Fragment,{children:t});const _=n.cloneElement(t,{storycardChildren:(0,a.jsx)(b,{onClick:y}),onStoryblockImageContainerButtonClick:y});return(0,a.jsxs)("div",{children:[_,h?(0,a.jsx)(m,{shoppableDrawerData:p}):(0,a.jsx)(k,{headingText:null!==(u=null===p||void 0===p?void 0:p.headline)&&void 0!==u?u:"Explore items",children:(0,a.jsx)(d.M,{addToCartTrackingPlacementType:r.bo.StoryblockShoppableDrawer,componentId:i,shoppableDrawerData:null!==p&&void 0!==p?p:{}})})]})};k.displayName="StoryblockShoppableDrawerWrapper"},80296:function(e,t,i){i.d(t,{K:function(){return L}});var a=i(59499),n=i(85893),o=i(67294),l=i(17619),r=i(57159),s=i(94184),d=i.n(s),c=i(19521),p=i(7337),m=i(64334),u=i(73125),g=i(3636),h=i(62986),b=i(55390),k=i(56947);const x=({className:e,buttonColor:t,buttonUrl:i,buttonText:a,buttonTag:o,dataIndex:l,onClick:r,textAlignment:s="left"})=>{let d;switch(t){case"default":case"white":default:d=p.P;break;case"primary":d=m.D;break;case"darkRed":d=u.e;break;case"darkGray":d=g.q}return(0,n.jsx)(h.J,{className:`${e} mediaBlock--button h-text-${s}`,xs:!0,children:(0,n.jsx)(d,{"data-index":l,"data-lnk":o,href:i,onClick:r,role:i?"link":"button",children:(0,b.K)(a,"span")})})};x.displayName="StoryblockButton";const v=(0,c.ZP)(x).withConfig({displayName:"StoryblockButton__StyledStoryblockButton",componentId:"sc-zskg6c-0"})(["",";margin:0 "," ",";flex-grow:0;flex-basis:auto;@media (min-width:","){margin-bottom:0;}"],(e=>e.hasShoppableDrawer?`padding-top: ${k.space.generic.x3}`:`padding-top: ${k.space.generic.x4};`),k.space.generic.x4,k.space.generic.x4,k.breakpoints.md);var y=i(87389),_=i(90075),f=i(24333),w=i(28794),j=i(48245);const C=c.ZP.div.withConfig({displayName:"styles__FilmstripWrapper",componentId:"sc-1nk1lqw-0"})(["--filmstrip-item-spacing:0;--filmstrip-button-dodge:0;--filmstrip-button-width:32px;[data-test='pagination-dots']{ul{position:relative;top:-20px;}}"]),S=c.ZP.div.withConfig({displayName:"styles__FilmstripItemContainer",componentId:"sc-1nk1lqw-1"})(["position:relative;width:100%;padding:",";a{display:block;color:",";}"],k.space.generic.x1,k.colors.palette.gray.darkest),N=c.ZP.div.withConfig({displayName:"styles__FilmstripItemText",componentId:"sc-1nk1lqw-2"})(["position:absolute;bottom:20px;text-align:center;width:100%;line-height:1.1;@media (min-width:0){.headline{font-size:",";}.subhead{font-size:",";}}@media (min-width:","){.headline{font-size:",";}.subhead{font-size:",";}}@media (min-width:","){.headline{font-size:",";}.subhead{font-size:",";}}@media (min-width:","){.headline{font-size:","px;}.subhead{font-size:","px;}}"],(0,j.SC)(k.breakpoints.sm,j.vg.md),(0,j.SC)(k.breakpoints.sm,j.vg.sm),k.breakpoints.md,(0,j.SC)(k.breakpoints.md,j.vg.sm),(0,j.SC)(k.breakpoints.md,j.vg.xs),k.breakpoints.lg,(0,j.SC)(k.breakpoints.lg,j.vg.sm),(0,j.SC)(k.breakpoints.lg,j.vg.xs),k.breakpoints.xl,j.vg.lg,j.vg.sm),I=c.ZP.div.withConfig({displayName:"styles__StoryblockBody",componentId:"sc-1nk1lqw-3"})(["margin:0 ",";flex-grow:1;a{text-decoration:underline;&:focus{text-decoration:none;outline:1px dashed ",";}}"],k.space.generic.x4,k.colors.palette.gray.darkest),D=c.ZP.button.withConfig({displayName:"styles__StoryblockButtonWrapper",componentId:"sc-1nk1lqw-4"})(["",";margin-bottom:auto;width:100%;&:hover,&:focus{text-decoration:underline;}"],(e=>e.hasBody&&`padding-bottom: ${k.space.generic.x4};`)),P=(0,c.ZP)(w.r).withConfig({displayName:"styles__StoryblockLinkWrapper",componentId:"sc-1nk1lqw-5"})(["flex-grow:1;display:block;"]);function $({aspectRatio:e,image:t}){var i,a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.t,{alt:null===(i=t.image)||void 0===i?void 0:i.alt,aspectRatio:e,src:null===(a=t.image)||void 0===a?void 0:a.url}),(0,n.jsxs)(N,{children:[t.head&&(0,b.K)(t.head,"span","h-text-bold headline"),t.subhead&&(0,b.K)(t.subhead,"p","subhead")]})]})}function O({aspectRatio:e,image:t}){return(0,n.jsx)(S,{children:t.link_url?(0,n.jsx)(w.r,{"data-lnk":t.link_tag,href:t.link_url,children:(0,n.jsx)($,{aspectRatio:e,image:t})}):(0,n.jsx)($,{aspectRatio:e,image:t})})}$.displayName="FilmstripItemContent",O.displayName="FilmstripItem";const B=e=>{const{children:t,className:i}=e;return(0,n.jsx)("div",{className:i,children:t})};B.displayName="StoryblockImageContainer";const z=(0,c.ZP)(B).withConfig({displayName:"StoryblockImageContainer__StyledStoryblockImageContainer",componentId:"sc-43626a-0"})(["width:100%;display:block;height:auto;padding-top:",";",";",";.storycard{overflow:visible;}"],k.space.generic.x4,(e=>"shoppable_drawer"===e.buttonType&&"flex-grow: 1;"),(e=>e.hasHorizontalSpacing?`\n      padding-left: ${k.space.generic.x4};\n      padding-right: ${k.space.generic.x4};\n      @media (min-width: ${k.breakpoints.md}) {\n        padding: ${k.space.generic.x4} ${k.space.generic.x4} 0;\n    }`:null));z.displayName="StyledStoryblockImageContainer";const T=({className:e,aspectRatio:t,images:i})=>{var a,o;return(0,f.D)()?(0,n.jsx)(C,{children:(0,n.jsx)(y.T,{alignItems:"carousel",className:e,hasNativeScrolling:!1,hasPaginationDots:!0,children:null===i||void 0===i?void 0:i.map(((e,i)=>(0,n.jsx)(O,{aspectRatio:t,image:e},i)))})}):(0,n.jsx)(z,{className:"h-padding-h-tight h-margin-b-tight",children:(0,n.jsx)(_.t,{alt:null===i||void 0===i||null===(a=i[0].image)||void 0===a?void 0:a.alt,aspectRatio:t,src:null===i||void 0===i||null===(o=i[0].image)||void 0===o?void 0:o.url})})};T.displayName="StoryblockCarousel";var R=i(41609),F=i.n(R);const Z=e=>F()(e)?[]:[e.image_path_xl&&{media:k.breakpoints.xl,imageUrl:e.image_path_xl},e.image_path_lg&&{media:k.breakpoints.lg,imageUrl:e.image_path_lg},e.image_path_md&&{media:k.breakpoints.md,imageUrl:e.image_path_md},e.image_path&&{media:"0px",imageUrl:e.image_path}].filter(Boolean);var E=i(18267);function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){(0,a.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const L=e=>{const{button_color:t,componentId:i,image_aspect_ratio:a,image_aspect_ratio_md:s,index:c,item:p,storycardChildren:m,onClick:u,dataIndex:g,hasHorizontalSpacing:h,onStoryblockButtonClick:b,onStoryblockImageContainerButtonClick:k,text_alignment:x}=e,y=p.link_type,_=p.image&&Object.keys(p.image).some((e=>e.includes("image_path"))),f=!("url"!==p.link_type||!p.link_url),{screenMd:w}=(0,l.l)(),j=e=>{var t,i,o,l,r;return(0,n.jsx)("div",{className:"h-margin-b-tight",children:(0,n.jsx)(E.e,{altText:null===p||void 0===p||null===(t=p.image)||void 0===t?void 0:t.image_alt_text,cardSizes:{base:a,mediumUp:s},dataIndex:g,dataLnk:p.link_tag,headline:null===p||void 0===p||null===(i=p.image)||void 0===i?void 0:i.image_headline,images:Z(p.image),link_type:p.link_type,onClick:u,secondary_image:w?Z(p.secondary_image):void 0,subhead:null===p||void 0===p||null===(o=p.image)||void 0===o?void 0:o.image_subhead,tagName:e?"div":null,textPosition:null===p||void 0===p||null===(l=p.image)||void 0===l?void 0:l.image_text_alignment,textPositionMd:null===p||void 0===p||null===(r=p.image)||void 0===r?void 0:r.image_text_alignment_md,url:p.link_url,video:p.video,children:m})})},C=()=>(0,n.jsxs)(I,{className:d()("mediaBlock mediaBlock-story",{[`h-text-${x}`]:x,[`mediaBlock-${x}`]:x,[`mediaBlock-${a}`]:a,[`mediaBlock-${s}-md`]:s}),children:[p.headline&&(0,n.jsx)(r.X,{className:"h-margin-b-none",innerHTML:p.headline,level:3,size:2}),p.details&&(0,n.jsx)("div",{className:"h-text-hd4",dangerouslySetInnerHTML:{__html:p.details}})]}),S=()=>(0,n.jsxs)(n.Fragment,{children:[_&&(0,n.jsx)(z,{hasHorizontalSpacing:h,children:j(f)}),C()]}),N=(0,o.useRef)(null);function $(e){k(e,N)}let O;return O="carousel"===p.type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{hasHorizontalSpacing:!0,children:(0,n.jsx)(T,{aspectRatio:a,images:p.images})}),C()]}):f?(()=>{var e;return(0,n.jsx)(P,{className:"h-display-flex h-flex-direction-col","data-lnk":null!==(e=p.link_tag)&&void 0!==e?e:`${i}-${c+1}`,"data-test":"storyblock-storyblockLinkWrapper",href:p.link_url,underline:"invert",children:S()})})():"shoppable_drawer"===p.link_type?(0,n.jsxs)(D,{"data-index":c,"data-test":"storyblock-storyblockLinkWrapper",hasBody:!!p.headline||!!p.details,onClick:$,ref:N,type:"button",children:[S(),(0,n.jsx)("span",{className:"h-sr-only",children:" - shows more content"})]}):(0,n.jsxs)(n.Fragment,{children:[_&&(0,n.jsx)(z,{buttonType:y,hasHorizontalSpacing:h,onClick:k,children:j(!1)}),C()]}),(0,n.jsxs)("div",{"data-test":"@web/SlingshotComponents/common/Storyblock",children:[O,p.button_text&&(0,n.jsx)(v,H(H({},e),{},{buttonColor:t,buttonTag:p.button_tag,buttonText:p.button_text,buttonUrl:p.button_url,className:"",hasShoppableDrawer:"shoppable_drawer"===y,onClick:b,textAlignment:x}))]})};L.displayName="Storyblock"},72656:function(e,t,i){i.d(t,{A:function(){return l}});var a=i(56947),n=i(19521);const o={light:a.colors.palette.white,dark:a.colors.palette.gray.darkest},l=(0,n.iv)(["",";"],(({$focusColor:e})=>{var t;return e?`\n    *:focus {\n      outline-color: ${null!==(t=o[e])&&void 0!==t?t:o.dark} !important;\n    }\n  `:""}))}}]);