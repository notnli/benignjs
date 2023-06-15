"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8617],{98617:function(e,t,r){var n=r(1717),i=r(31750),a=r(27378),o=r(88038),c=r(7839),l=r(62882),s=r(66581),u=r(1319),d=r(73627),v=r(62961),p=r(81577),m=r(56528),g=r(25867),f=r(42457),y=r(6129),O=r(43781),b=r(15140),j=r(24246),h=["contentItem","pageData"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.contentItem,r=e.pageData,n=(0,i.Z)(e,h),E=n.size,D=n.variant,I=n.contentType,w=n.action,N=n.hide,L=n.className,A=n.imgVariant,Z=n.imgSize,S=n.imgLazy,x=n.preload,T=n.onClick,C=(0,a.useContext)(u.Z).lang,U=(0,a.useContext)(b.ZP).transformImageUrl,z=(0,s.jX)(C,t,A),B={type:c.f$.IMAGE,imageUrl:z.imageUrl||l.DN.LAZYIMAGE_PLACEHOLDER,alt:z.title||"",variant:A,size:Z,lazy:S},M=null;if(x&&z.imageUrl){var k=U(A,Z,z.imageUrl);M=(0,j.jsx)(o.default,{children:(0,j.jsx)("link",{rel:"preload",as:"image",href:k})})}var _=(0,j.jsx)(c.ZP,{variant:D,size:E,title:z.title,description:null!==N&&void 0!==N&&N.description?void 0:z.summary,anchorType:{href:z.url,data:P({},w&&{action:w}),onClick:T},contentType:I,media:B,className:L}),R={title:z.title,summary:z.summary,imageUrl:z.imageUrl};switch(t.type){case d.Bg.IMAGE:_=(0,j.jsx)(p.Z,P(P({},n),{},{image:P(P({},t.image),{},{dateTaken:null,capturedOn:null}),override:R,className:L}));break;case d.Bg.GALLERY:_=(0,j.jsx)(v.Z,P(P({},n),{},{gallery:t.gallery,override:R,className:L}));break;case d.Bg.STORY:_=(0,j.jsx)(m.Z,P(P({},n),{},{story:t.story,override:R,className:L}));break;case d.Bg.VIDEO:_=(0,j.jsx)(g.Z,P(P({},n),{},{video:t.video,override:R,className:L,modal:t.video.origin.type===d.i0.CLIP,pageData:r}));break;case d.Bg.MATCH:_=(0,j.jsx)(f.Z,{layout:y.KO.FEED,match:t.match,className:L,action:w}),M=null;break;case d.Bg.POLL:var V=t.poll;_=(0,j.jsx)(O.Z,{poll:V}),M=null}return(0,j.jsxs)(j.Fragment,{children:[M,_]})}},32467:function(e,t,r){r.d(t,{H:function(){return n}});var n=["top headlines","news headlines"]},66581:function(e,t,r){r.d(t,{Mg:function(){return y},jX:function(){return E},fD:function(){return P},oW:function(){return D}});var n,i=r(1717),a=r(73627),o=r(97458),c=r(80598),l=r(78364),s=r(92572),u=r(83649),d=r(99889),v=r(93405),p=r(69731),m=r(64650),g=r(50348),f=r(32467),y=function(e,t){switch(t.type){case a.Bg.STORY:var r=t;return(0,p.S1)(r.story);case a.Bg.GROUND:var n=t;return(0,u.dB)(n.ground);case a.Bg.GALLERY:var i=t;return(0,c.q)(i.gallery);case a.Bg.MATCH:var o=t;return(0,s.n1)(e,o.match);case a.Bg.PLAYER:var l=t;return(0,d.hy)(l.player);case a.Bg.SERIES:var f=t;return(0,v.l8)(e,f.series);case a.Bg.TEAM:var y=t;return(0,m.nv)(e,y.team);case a.Bg.VIDEO:var O=t;return(0,g.Hb)(O.video);case a.Bg.DOWNLOAD:var b=t;return(0,u.cQ)(b.download);case a.Bg.PAGE:var j=t;return(0,u.DG)(j.page);case a.Bg.SQUAD:var h=t;return(0,u.iw)(h.squad);case a.Bg.QUOTE:var E=t;return(0,u.vb)(E.quote);case a.Bg.RECORD:var P=t;return(0,u.Dn)(P.record);case a.Bg.SITE:var D=t;return(0,u.zg)(D.site);case a.Bg.URL:var I=t;return(0,u.V4)(I.url);default:return""}},O=function(e){switch(e.type){case a.Bg.STORY:return e.summary;case a.Bg.VIDEO:return e.summary;default:return e.summary}},b=function(e){var t=e.previewImage;switch(e.type){case a.Bg.STORY:return t||e.story.image;case a.Bg.IMAGE:return t||e.image;case a.Bg.PLAYER:return t||e.player.image;case a.Bg.TEAM:return t||e.team.image;case a.Bg.GALLERY:return t||e.gallery.image;default:return t}},j=(n={},(0,i.Z)(n,o.N6.FILM,a.rh.FILM),(0,i.Z)(n,o.N6.SQUARE,a.rh.SQUARE),(0,i.Z)(n,o.N6.WIDE,a.rh.WIDE),(0,i.Z)(n,o.N6.NONE,null),n),h=function(e,t){var r=null,n=t?j[t]:null;if(e.previewImage&&(r=n?(0,l.lX)(e.previewImage,n):e.previewImage.url),null===r)switch(e.type){case a.Bg.VIDEO:r=e.video.imageUrl;break;default:var i=b(e);i&&(r=n?(0,l.lX)(i,n):i.url)}return r},E=function(e,t,r){return{type:t.type,title:t.title,summary:O(t),url:y(e,t),imageUrl:h(t,r)}},P=function(e){return e.containers.reduce((function(e,t){if([a.ut.RELATED_LINKS,a.ut.CAROUSEL].includes(t.type)){var r=t;return e.concat(r.items)}return e}),[])},D=function(e,t){var r=e.find((function(e){var r;return(null!==t&&void 0!==t?t:f.H).includes((null===(r=e.title)||void 0===r?void 0:r.toLowerCase())||"")}));return r?P(r):[]}},62961:function(e,t,r){var n=r(1717),i=r(31750),a=(r(27378),r(80598)),o=r(7839),c=r(62882),l=r(32549),s=r(97458),u=r(10626),d=r(24246),v=["gallery","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r=e.gallery,n=e.size,p=e.variant,g=e.contentType,f=e.action,y=e.override,O=e.hide,b=e.className,j=e.imgVariant,h=e.imgSize,E=e.imgLazy,P=e.onClick,D=(0,i.Z)(e,v),I=r.title,w=r.image,N=r.publishedOn,L=null!==(t=null===y||void 0===y?void 0:y.title)&&void 0!==t?t:I,A=null===y||void 0===y?void 0:y.summary,Z=null!==y&&void 0!==y&&y.imageUrl?null===y||void 0===y?void 0:y.imageUrl:w.url,S={type:o.f$.IMAGE_MEDIA,mediaType:l._L.GALLERY,imageUrl:Z||c.DN.LAZYIMAGE_PLACEHOLDER,alt:L||"",variant:j||s.N6.NONE,size:h,lazy:E},x=(0,u.HH)(N),T=x?[{label:x}]:[];return(0,d.jsx)(o.ZP,m({variant:p,size:n,title:L,description:null!==O&&void 0!==O&&O.description?void 0:A,anchorType:{href:(0,a.q)(r),data:m({},f&&{action:f}),onClick:P},contentType:g,media:S,attributes:null!==O&&void 0!==O&&O.attributes?void 0:T,className:b},D))}},80598:function(e,t,r){r.d(t,{y:function(){return n},q:function(){return i}});var n=function(){return"/gallery"},i=function(e){var t=e.objectId,r=e.slug;return"/gallery/".concat(r,"-").concat(t)}},81577:function(e,t,r){var n=r(1717),i=r(31750),a=(r(27378),r(29881)),o=r(7839),c=r(62882),l=r(16311),s=r(10626),u=r(24246),d=["image","navigate","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.image,r=e.navigate,n=void 0===r||r,v=e.size,m=e.variant,g=e.contentType,f=e.action,y=e.override,O=e.hide,b=e.className,j=e.imgVariant,h=e.imgSize,E=e.imgLazy,P=e.onClick,D=(0,i.Z)(e,d),I=t.caption,w=t.credit,N=t.photographer,L=t.capturedOn,A=(null===y||void 0===y?void 0:y.title)||t.caption||void 0,Z=(null===y||void 0===y?void 0:y.summary)||void 0,S=null!==y&&void 0!==y&&y.imageUrl?null===y||void 0===y?void 0:y.imageUrl:t.url,x=!1===n&&void 0===P?"ds-cursor-default ".concat(b):b,T={type:o.f$.IMAGE,imageUrl:S||c.DN.LAZYIMAGE_PLACEHOLDER,alt:A||"",variant:j,size:h,lazy:E},C=[];I&&C.push({label:(0,u.jsx)(l.Z,{className:"ds-text-typo",element:"span",html:I})});var U,z=(0,s.HH)(L);z&&C.push({label:(0,u.jsx)("time",{children:z})}),N&&(U=N),w&&(U=U?"".concat(U,"/").concat(w):w),U&&C.push({label:U});return(0,u.jsx)(o.ZP,p({variant:m,size:v,title:null!==O&&void 0!==O&&O.title?void 0:A,description:null!==O&&void 0!==O&&O.description?void 0:Z,anchorType:n?{href:(0,a.g)(t),data:p({},f&&{action:f}),onClick:P}:function(){return!!P&&P()},contentType:g,media:T,attributes:null!==O&&void 0!==O&&O.attributes?void 0:C,className:x},D))}},29881:function(e,t,r){r.d(t,{E:function(){return n},g:function(){return i}});var n=function(){return"/photo"},i=function(e,t){var r=e.objectId,n=e.slug;return"/photo/".concat(n||"image","-").concat(r).concat(t?"?objectId=".concat(t):"")}},43781:function(e,t,r){var n=r(1717),i=r(6952),a=r(88742),o=r.n(a),c=r(60042),l=r.n(c),s=r(27378),u=r(78392),d=r(36077),v=r(5273),p=r(2251),m=r(1305),g=r(37182),f=r(62882),y=r(45938),O=r.n(y),b=r(4550),j=r(47086),h=r(24246);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.poll,r=e.className,a=(0,s.useState)(null),c=a[0],y=a[1],P=(0,s.useState)(t),D=P[0],I=P[1],w=D.title,N=D.objectId,L=D.id,A=D.options,Z=D.generatedAt,S=D.modifiedAt,x=0;A.forEach((function(e){x+=e.votes})),(0,u.Z)((function(){var e,t=null===(e=(0,g.Vy)(f.dm.POLL_ANSWERS,[]))||void 0===e?void 0:e.find((function(e){return e.includes("".concat(N,":"))}));t&&y(parseInt(t.split(":")[1],10)),(new Date).getTime()-new Date(Z).getTime()>6e4?(new Date).getTime()-new Date(S).getTime()<1728e5&&(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.UN)();case 2:return t=e.sent,e.t0=I,e.next=6,t.getPollInfo({pollId:N,latest:!0});case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))():t&&(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.UN)();case 2:return t=e.sent,e.t0=I,e.next=6,t.getPollInfo({pollId:N,latest:!0});case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))()}));var T=function(e){if(c)return null;var t="".concat(b.Z.global.submitBaseUrl,"/ci/content/submit/poll/poll_v2.json?object_id=").concat(N,"&content_id=").concat(L,"&vote=1&poll_id=").concat(e.id,"&mode=POSITIVE");O()(t,{timeout:3e3}).then((function(e){return e.json()})).then((function(t){(0,g.eW)(f.dm.POLL_ANSWERS,"".concat(N,":").concat(e.id)),y(e.id),I((function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),i={};return r.options.forEach((function(e){i[e.id]=e})),t.vote.forEach((function(e){i[e.optionId]&&(i[e.optionId].votes=e.count)})),r}))}))};return(0,h.jsxs)("div",{className:l()("ds-bg-fill-content-alternate ds-p-3",r),children:[(0,h.jsxs)("div",{className:"ds-flex ds-items-center ds-justify-between",children:[(0,h.jsxs)("div",{className:"ds-flex",children:[(0,h.jsx)(d.ZP,{name:p.v.POLL_OUTLINE,size:d.XR.SM}),(0,h.jsx)(v.ZP,{variant:v.Fu.TITLE_SUBTLE_M,className:"ds-ml-1",children:w})]}),(0,h.jsxs)(v.ZP,{variant:v.Fu.COMPACT_XS,className:"ds-text-typo-mid3",children:[x>=1e3?"".concat((x/1e3).toFixed(1),"K"):x," votes"]})]}),(0,h.jsx)("div",{className:l()("ds-grid ds-gap-1 ds-mt-4 ds-grid-cols-1",A.length>3?"lg:ds-grid-cols-1":"lg:ds-grid-cols-3"),children:A.map((function(e,t){var r=x>0?Math.round((0,m.Ux)(e.votes,x)):0;return(0,h.jsxs)("div",{className:l()("ds-bg-ui-fill ds-border ds-border-line ds-rounded-lg ds-p-2 ds-relative ds-flex ds-justify-between ds-items-center",{"ds-cursor-pointer":!c}),onClick:function(){return T(e)},children:[(0,h.jsx)("div",{className:"ds-bg-raw-blue20 ds-absolute ds-left-0 ds-top-0 ds-h-full ds-rounded-lg ds-transition-all",style:{width:c?"".concat(r,"%"):0}}),(0,h.jsx)(v.ZP,{element:"div",variant:v.Fu.COMPACT_XS_MEDIUM,children:e.title}),c?(0,h.jsxs)(v.ZP,{element:"div",variant:v.Fu.COMPACT_XS_MEDIUM,children:[c===e.id?"You & ":""," ",r,"%"]}):null]},t)}))})]})}},25867:function(e,t,r){var n=r(1717),i=r(31750),a=r(27378),o=r(60042),c=r.n(o),l=r(27693),s=r.n(l),u=r(50348),d=r(7839),v=r(62882),p=r(64991),m=r(32549),g=r(10626),f=r(47086),y=r(73627),O=r(16453),b=r(31229),j=r(1319),h=r(24246),E=["video","size","variant","contentType","action","override","hide","className","modal","imgVariant","imgSize","imgLazy","onClick","mediaInfo","autoplay","muted","pageData"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r,n=e.video,o=e.size,l=e.variant,P=e.contentType,I=e.action,w=e.override,N=e.hide,L=e.className,A=e.modal,Z=e.imgVariant,S=e.imgSize,x=e.imgLazy,T=e.onClick,C=e.mediaInfo,U=void 0===C||C,z=e.autoplay,B=void 0!==z&&z,M=e.muted,k=e.pageData,_=(0,i.Z)(e,E),R=n.title,V=n.summary,Y=n.genreId,G=n.genreName,H=n.publishedAt,F=n.imageUrl,X=(0,a.useContext)(j.Z).adVideo,W=null!==(t=null===w||void 0===w?void 0:w.title)&&void 0!==t?t:R,Q=null!==(r=null===w||void 0===w?void 0:w.summary)&&void 0!==r?r:V,q=null!==w&&void 0!==w&&w.imageUrl?null===w||void 0===w?void 0:w.imageUrl:F||void 0,$=[];H&&$.push({label:(0,h.jsx)("time",{children:s()(H).format("MMM DD, YYYY")})});return(0,h.jsx)(p.Z,{video:n,modal:A,autoplay:B,muted:void 0!==M?M:B,userInitiated:!B,className:L,embedPlayerSelector:!1===A?".embedVideoCnt":void 0,children:function(e){return function(e){var t=void 0;U&&(n.origin.type===y.i0.CLIP?t=(0,g.zj)(n.duration):n.origin.type===y.i0.LIVE_STREAM&&(t="LIVE"));var r={type:d.f$.IMAGE_MEDIA,mediaType:m._L.VIDEO,info:t,imageUrl:q||v.DN.LAZYIMAGE_PLACEHOLDER,alt:W||"",variant:Z,size:S,lazy:x};return!e.showPlayer||n.origin.type!==y.i0.YOUTUBE&&!1!==A||(r={type:d.f$.NODE,node:(0,h.jsx)("div",{className:"ds-w-full",onClick:function(e){e.stopPropagation(),e.preventDefault()},children:e.player})}),(0,h.jsx)(d.ZP,D(D({className:L,variant:l,size:o,title:null!==N&&void 0!==N&&N.title?void 0:W,description:null!==N&&void 0!==N&&N.description?void 0:Q,category:null!==N&&void 0!==N&&N.category?void 0:G||void 0,anchorType:{href:(0,u.Hb)(n),data:D({},I&&{action:I}),onClick:function(){return(!T||!1!==T())&&((0,O.FQ)()&&n.origin.type===y.i0.CLIP?(b.ZP.handleNativeVideoPlayer(D({ad:{video:X||null},videoId:n.objectId,genreId:Y||void 0},k)),!1):void 0!==A?(I&&(0,f.Yg)().trackEvent(I),e.setVideoPlayerState({type:"PLAY",options:{volumeNamespace:"ESPNCricinfoVideoModal",muted:void 0!==M&&M}}),n.origin.type===y.i0.YOUTUBE):void 0)}},contentType:P,media:r,attributes:null!==N&&void 0!==N&&N.attributes?void 0:$},_),{},{mediaContainerClassName:c()(_.mediaContainerClassName,!1===A?"embedVideoCnt":void 0)}))}(e)}})}}}]);