(self.webpackChunklite=self.webpackChunklite||[]).push([[1957],{57477:(e,n,i)=>{"use strict";i.d(n,{_C:()=>r,$l:()=>c});var t=i(319),a=i.n(t),d=i(33974),o=i(12746),l=i(88398),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat(a()(d.S.definitions),a()(o.F.definitions),a()(l.m.definitions))},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}}]}}].concat(a()(s.definitions))}},65331:(e,n,i)=>{"use strict";i.d(n,{a:()=>te});var t=i(67154),a=i.n(t),d=i(6479),o=i.n(d),l=i(63038),r=i.n(l),s=i(64718),c=i(67294),u=i(59713),m=i.n(u),v=i(319),p=i.n(v),k=i(39210),g=i(65368),f=i(77355),y=i(93310),C=i(87691),N=i(14646),b=i(78285),I=i(14813),S=i(87529),P=i(61609),h=i(97217);function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var E=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",fill:"#A8A8A8"});const O=function(e){return c.createElement("svg",w({width:10,height:13,viewBox:"0 0 10 13",fill:"none"},e),E)};var F=i(92305),T=i(54758);function D(e){var n,i,t=e.children,a=e.target,d=e.kind,o=e.catalog,l=e.viewer,s=c.useMemo((function(){if(o.predefined){var e,n=null===(e=a.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===o.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var i,t=null===(i=a.viewerEdge.catalogsConnection)||void 0===i?void 0:i.catalogsContainingThis.find((function(e){return e.catalogId===o.id}));return[!!t,null==t?void 0:t.catalogItemIds]}),[o.predefined,o.id,a.viewerEdge]),u=r()(s,2),m=u[0],v=u[1],p=(0,T.qY)(l.id,o.id,o.version,a.id,d,null!==(n=o.predefined)&&void 0!==n?n:void 0),k=r()(p,2),g=k[0],f=k[1].loading,y=(0,T.Yi)(l.id,o.id,o.version,[{entityId:a.id,entityType:d,catalogItemIds:v||[]}],null!==(i=o.predefined)&&void 0!==i?i:void 0),C=r()(y,2),N=C[0],b=C[1].loading;return t({toggleInsideCatalog:m?N:g,isInsideCatalog:m,loading:f||b})}var _={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},j=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.border.normal}}};function V(e){var n=e.catalog,i=e.target,t=e.kind,a=e.viewer,d=(0,N.I)();return c.createElement(D,{viewer:a,target:i,kind:t,catalog:n},(function(e){var i=e.toggleInsideCatalog,t=e.isInsideCatalog,a=e.loading,o=n.predefined?(0,F.S6)(n.predefined):n.name;return c.createElement("div",{className:d(_)},c.createElement(P.X,{key:n.id,checked:t,checkboxStyle:"OBVIOUS",onChange:i,disabled:a||n.visibility===h.n2.LOCKED,textScale:"L",clampText:1},o),n.visibility!==h.n2.PUBLIC&&c.createElement(f.x,{paddingLeft:"8px"},c.createElement(O,{className:d(j)})))}))}function A(e){var n=e.target,i=e.kind,t=e.catalogs,a=e.isLoading,d=e.viewer,o=e.fetchMore,l=e.scrollableEl;return a?c.createElement(f.x,{display:"flex",justifyContent:"center",padding:"40px 0"},c.createElement(C.F,{color:"DARKER",scale:"L",tag:"div"},c.createElement(S.T,null))):t?c.createElement(I.P,{fetchMore:o,scrollableEl:l},t.map((function(e){return c.createElement(V,{viewer:d,key:e.id,catalog:e,target:n,kind:i})}))):null}function x(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function R(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?x(Object(i),!0).forEach((function(n){m()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var M={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function B(e){var n,i,t,a=e.target,d=e.kind,o=e.showCreateModal,l=e.hidePanel,r=e.viewer,u=c.useRef(null),m=(0,N.I)(),v=(0,k.Ln)({limit:k.W,userId:r.id}),I=(0,b.w)(),S=(0,s.a)(g.D,{variables:v}),P=S.data,h=S.error,w=S.loading,E=S.fetchMore;c.useEffect((function(){h&&I({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[h]);var O,F=c.useCallback((function(){o(),l()}),[o,l]),T=null==P?void 0:P.catalogsByUser.catalogs;return T&&"Catalog"===(null==P||null===(n=P.readingList)||void 0===n?void 0:n.__typename)&&(T=[P.readingList].concat(p()(T))),null!=P&&null!==(i=P.catalogsByUser)&&void 0!==i&&null!==(t=i.paging)&&void 0!==t&&t.nextPageCursor&&(O=function(){return E({variables:R(R({},v),{},{pagingOptions:R(R({},v.pagingOptions),{},{cursor:{id:P.catalogsByUser.paging.nextPageCursor.id}})})})}),c.createElement(f.x,{width:"300px"},c.createElement("div",{className:m(M),ref:u},c.createElement(A,{target:a,kind:d,viewer:r,catalogs:T,isLoading:w,fetchMore:O,scrollableEl:u.current})),!w&&c.createElement(f.x,{borderTop:"BASE_LIGHTER",padding:"20px 24px 24px"},c.createElement(C.F,{color:"ACCENT",scale:"L"},c.createElement(y.r,{onClick:F},"Create new list"))))}var L=i(63508),H=i(50361),K=i.n(H),Q=i(21919),U=i(12476),$=i(18627),z=i(11462),Y=i(12746);function q(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function G(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?q(Object(i),!0).forEach((function(n){m()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var W="temp-catalog-id",J=i(73917),X=i(66227),Z=i(68894),ee=i(57477),ne=i(62212);function ie(e){var n=e.children,i=e.isPanelVisible,t=e.hidePanel,a=e.togglePanel,d=e.target,o=e.kind,l=e.viewer,s=e.bookmarkIcon,u=e.isInACatalog,m=e.isInReadingList,v=e.catalogsCount,p=e.popoverDisplay,k=(0,Z.O)(!1),g=r()(k,3),f=g[0],y=g[1],C=g[2],N=function(e,n,i,t){var a=(0,$.Av)(),d=(0,Q.D)(Y.Q,{variables:{type:n,operation:{preprend:{type:t,id:i}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:T.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:W,catalogItemId:T.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&t===h.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;a.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(a,d){var o,l=null===(o=d.data)||void 0===o?void 0:o.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var r,s,c=l.insertedItem,u=l.version;if(c.catalogId!==W&&((0,U.UV)(a,c.catalogId,u),(0,U.Rx)(a,c.catalogId,[c.catalogItemId],t)),t===h.ej.POST){r="PostViewerEdge:".concat((0,z.Q)(i,e)),s=Y.F;var m=a.readFragment({id:r,fragment:s});if(null!=m&&m.catalogsConnection){var v=K()(m.catalogsConnection.predefinedContainingThis),p=v.findIndex((function(e){return e.predefined===n}));if(-1!==p)v[p].catalogItemIds.push(c.catalogItemId);else{var k={catalogId:c.catalogId,predefined:n,version:u,catalogItemIds:[c.catalogItemId]};v.push(k)}a.writeFragment({id:r,fragment:s,data:G(G({},m),{},{catalogsConnection:G(G({},m.catalogsConnection),{},{predefinedContainingThis:v})})})}}}}});return r()(d,1)[0]}(l.id,h.l8.READING_LIST,d.id,o),b=c.useCallback((function(){a(),m||u||N()}),[a,u,m,N]);return c.createElement(J.J,{isVisible:i,popoverRenderFn:function(){return c.createElement(B,{showCreateModal:y,hidePanel:t,target:d,kind:o,viewer:l})},hide:t,targetDistance:15,display:p},c.createElement(L.a,{isVisible:f,hide:C,target:d,kind:o,viewer:l}),null==n?void 0:n({onClick:b,bookmarkIcon:s,catalogsCount:v,isPanelVisible:i}))}function te(e){var n,i,t,d=e.viewer,l=e.defaultToBookmarkIcon,r=o()(e,["viewer","defaultToBookmarkIcon"]),u=c.useMemo((function(){return r.kind===h.ej.POST?{postId:r.target.id,isPostKind:!0}:{postId:"",isPostKind:!1}}),[r.kind,r.target]),m=(0,s.a)(ee.$l,{ssr:!1,variables:u}).data,v=null,p=null;"Post"===(null==m||null===(n=m.postResult)||void 0===n?void 0:n.__typename)&&(v=m.postResult.viewerEdge.catalogsConnection,p=m.postResult);var k=(null===(i=v)||void 0===i?void 0:i.catalogsContainingThis)&&v.catalogsContainingThis.length>0,g=c.useMemo((function(){var e,n;return!!(null===(e=v)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===h.l8.READING_LIST})))}),[v]),f=c.useMemo((function(){var e;return((null===(e=v)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(g?1:0)}),[null===(t=v)||void 0===t?void 0:t.catalogsContainingThis.length,g]),y=c.createElement(ne.l,{insideACatalog:!!k||g});return u.isPostKind?d&&v&&p?c.createElement(X.B,null,(function(e){var n=e.isVisible,i=e.toggle,t=e.hide;return c.createElement(ie,a()({},r,{target:p,viewer:d,isPanelVisible:n,togglePanel:i,hidePanel:t,bookmarkIcon:y,isInACatalog:!!k,isInReadingList:g,catalogsCount:f}))})):l||!r.children?y:r.children({onClick:function(){return null},bookmarkIcon:y,catalogsCount:f,isPanelVisible:!1,isDisabled:!0}):null}},62212:(e,n,i)=>{"use strict";i.d(n,{l:()=>k,K:()=>u});var t=i(67294),a=i(14646);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var o=t.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"});const l=function(e){return t.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),o)};function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var s=t.createElement("path",{d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",fill:"#000"});const c=function(e){return t.createElement("svg",r({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),s)};var u=function(e){return{"& path":{fill:e.baseColor.border.darker}}},m=function(e){return{"& path":{fill:e.baseColor.fill.darker}}},v=function(){var e=(0,a.I)();return t.createElement(l,{className:e(u)})},p=function(){var e=(0,a.I)();return t.createElement(c,{className:e(m)})};function k(e){return e.insideACatalog?t.createElement(p,null):t.createElement(v,null)}},12746:(e,n,i)=>{"use strict";i.d(n,{F:()=>t,Q:()=>a});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToPredefinedCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"operation"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogAddOperationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToPredefinedCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"operation"},value:{kind:"Variable",name:{kind:"Name",value:"operation"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AddToPredefinedCatalogSucces"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"insertedItem"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}}]}}]}}]}}]}},13195:(e,n,i)=>{"use strict";i.d(n,{CP:()=>I});var t=i(59713),a=i.n(t),d=i(63038),o=i.n(d),l=i(28655),r=i.n(l),s=i(92471),c=i(21919),u=i(67294),m=i(11462),v=i(70836);function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function k(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){a()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function g(){var e=r()(["\n  mutation ClapMutation($targetPostId: ID!, $userId: ID!, $numClaps: Int!) {\n    clap(targetPostId: $targetPostId, userId: $userId, numClaps: $numClaps) {\n      viewerEdge {\n        ...ClapMutation_viewerEdge\n      }\n      ...ClapMutation_post\n    }\n  }\n  ","\n  ","\n"]);return g=function(){return e},e}function f(){var e=r()(["\n  fragment ClapMutation_viewerEdge on PostViewerEdge {\n    __typename\n    id\n    clapCount\n  }\n"]);return f=function(){return e},e}function y(){var e=r()(["\n  fragment ClapMutation_post on Post {\n    __typename\n    id\n    clapCount\n    ...MultiVoteCount_post\n  }\n  ","\n"]);return y=function(){return e},e}var C=(0,s.Ps)(y(),v.U),N=(0,s.Ps)(f()),b=(0,s.Ps)(g(),C,N),I=function(){var e=(0,c.D)(b),n=o()(e,1)[0];return(0,u.useCallback)((function(e,i,t,a){var d;return n({variables:{targetPostId:e.id,userId:i,numClaps:t},optimisticResponse:{clap:k(k({__typename:"Post"},e),{},{clapCount:(null!==(d=e.clapCount)&&void 0!==d?d:0)+t,viewerEdge:{__typename:"PostViewerEdge",id:(0,m.Q)(e.id,i),clapCount:t}})},update:function(n,i){var d,o,l=null==i||null===(d=i.data)||void 0===d?void 0:d.clap;if(l){var r=n.readFragment({id:"Post:".concat(l.id),fragment:C,fragmentName:"ClapMutation_post"});n.writeFragment({id:"Post:".concat(l.id),fragment:C,fragmentName:"ClapMutation_post",data:k(k({},r),{},{clapCount:(null!==(o=e.clapCount)&&void 0!==o?o:0)+t,viewerClapCount:((null==a?void 0:a.clapCount)||0)+t})})}}})}),[])}},70836:(e,n,i)=>{"use strict";i.d(n,{U:()=>a});var t=i(319),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MultiVoteCount_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostVotersNetwork_post"}}]}}].concat(i.n(t)()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostVotersNetwork_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"voterCount"}},{kind:"Field",name:{kind:"Name",value:"recommenders"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]))}},39507:(e,n,i)=>{"use strict";i.d(n,{T:()=>d});var t=i(64718),a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostViewerEdgeQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"readingList"}},{kind:"Field",name:{kind:"Name",value:"shareKey"}},{kind:"Field",name:{kind:"Name",value:"creatorPartnerProgramEnrollmentStatus"}}]}}]}}]}}]}}]},d=function(e){var n,i=(0,t.a)(a,{variables:{postId:(null==e?void 0:e.id)||""},ssr:!1,skip:!(null!=e&&e.id)}),d=i.loading,o=i.error,l=i.data;return d?{loading:d}:o?{error:o}:{viewerEdge:null==l||null===(n=l.post)||void 0===n?void 0:n.viewerEdge}}},51681:(e,n,i)=>{"use strict";function t(e,n,i){return!!n&&e[n.id]||{clapCount:(null==n?void 0:n.clapCount)||0,viewerClapCount:(null==i?void 0:i.clapCount)||0,viewerHasClappedSinceFetch:!1}}i.d(n,{l:()=>t})}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1957.2eaca8bb.chunk.js.map