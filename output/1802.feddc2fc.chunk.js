(self.webpackChunklite=self.webpackChunklite||[]).push([[1802],{92001:(e,n,i)=>{"use strict";i.d(n,{m:()=>t,G:()=>a});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MutePopoverOptions_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MutePopoverOptions_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},41802:(e,n,i)=>{"use strict";i.d(n,{Z:()=>_e});var t=i(67154),a=i.n(t),o=i(63038),l=i.n(o),r=i(59713),d=i.n(r),c=i(48403),s=i.n(c),m=i(64718),u=i(67294),p=i(14045),k=i(24415),v=i(75150),f=i(65331),E=i(32947),g=i(70028),S=i(66021),b=i(90833),h=i(70679),y=i(16880),N=i(49989),F=i(75412),C=i(71652),x=i(319),w=i.n(x),O=i(84683),P={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionSubmissionOption_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}}].concat(w()(O.d.definitions))},I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionSubmissionPopoverQuery"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewer"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"writerCollections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionSubmissionOption_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"adminCollections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionSubmissionOption_collection"}}]}}]}}]}}].concat(w()(P.definitions))},T=i(8981),D=i(25267),R=i(38352),A=i(77355),_=i(93310),V=i(91583),M=i(47230),L=i(66227),U=i(73917),B=i(70310),j=i(87691),K=i(20113),z=i(90586),H=i(34135),Q="collectionSubmissionPopover",G=[{name:"",value:"No publication",content:u.createElement(A.x,{height:"32px",display:"flex",alignItems:"center",marginLeft:"5px"},u.createElement(j.F,{scale:"M",color:"DARKER"},"No publication"))}];function q(e){var n=e.collection;return n.name?u.createElement(A.x,{display:"flex",justifyContent:"space-between",width:"200px",alignItems:"center",marginLeft:"5px"},u.createElement(j.F,{scale:"M",color:"DARKER"},n.name),u.createElement(C.v,{collection:n,size:32})):null}function W(e){var n=e.show,i=e.post,t=i.statusForCollection,a=i.isPublished,o=u.useState(!1),r=l()(o,2),d=r[0],c=r[1];return d||H.V6.on("load",(function(){return c(!0)})),!t&&a&&d?u.createElement(X,{post:i,noQueryReturn:null},(function(e){var t=e.loading,a=e.error,o=e.data;if(t||a)return null;var l=(void 0===o?{viewer:void 0}:o).viewer,r=i.creator;if(!l||!r||l.id!==r.id)return null;var d=l.adminCollections,c=l.writerCollections;return 0===d.length&&0===c.length?null:u.createElement(R.Sl,null,u.createElement(_.r,{"aria-controls":Q,"aria-expanded":"false",onClick:n},"Add to publication"))})):null}function J(e){var n=e.isVisible,i=e.hide;return u.createElement(V.V,{isVisible:n,hide:i,withCloseButton:!0},u.createElement(A.x,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"480px"},u.createElement(K.X6,{scale:"M",tag:"h3"},"Story submitted"),u.createElement(A.x,{paddingTop:"8px",paddingBottom:"24px"},u.createElement(z.QE,{scale:"M"},"We’ll email you when the publication editor has reviewed your submission.")),u.createElement(M.z,{buttonStyle:"OBVIOUS",onClick:i},"OK")))}var X=function(e){var n=e.children,i=e.post,t=e.noQueryReturn,a=i.creator;return a?u.createElement(D.I,null,(function(e){return e?e.id!==a.id?t:u.createElement(F.A,{query:I,ssr:!1},(function(e){var i=e.loading,t=e.error,a=e.data;return n({loading:i,error:t,data:a})})):t})):t},Y=function(e){var n=e.post,i=e.hide,t=e.showLoadingIndicator,a=e.isVisible,o=e.children,r=u.useState(!1),d=l()(r,2),c=d[0],s=d[1],m=u.useState(""),p=l()(m,2),k=p[0],v=p[1],f=(0,T.h3)(n),E=(0,T.Lf)(n);return c||H.V6.on("load",(function(){return s(!0)})),n.isPublished&&c?u.createElement(L.B,null,(function(e){var l=e.isVisible,r=e.hide,d=e.show;return u.createElement(u.Fragment,null,u.createElement(J,{hide:r,isVisible:l}),u.createElement(X,{post:n,noQueryReturn:o},(function(e){var l=e.loading,r=e.error,c=e.data;if(l||r)return o;var s=(void 0===c?{viewer:void 0}:c).viewer,m=n.creator;if(!s||!m||s.id!==m.id)return o;var p=s.adminCollections,g=s.writerCollections;if(0===p.length&&0===g.length)return o;var S=p.concat(g).filter((function(e){return!!e&&!!e.slug&&!!e.name})).map((function(e){return{name:e.slug||"",value:e.name||"",content:u.createElement(q,{collection:e})}})),b=G.concat(S),h=p.reduce((function(e,n){return e[n.slug||""]=n,e}),{}),y=g.reduce((function(e,n){return e[n.slug||""]=n,e}),{}),N="";if(k){var F=b.find((function(e){return e.name===k}));F&&(N=F.value)}var C="addStoryToPublicationTitle";return u.createElement(U.J,{ariaId:Q,hide:i,isVisible:a,popoverRenderFn:function(){return u.createElement(A.x,{padding:"20px",width:"280px",display:"flex",flexDirection:"column"},u.createElement(j.F,{scale:"M",color:"DARKER",ariaLabelledById:C},"Add your story to a publication:"),u.createElement(A.x,{marginTop:"10px",position:"relative"},u.createElement(A.x,{position:"absolute",height:"16px",width:"100%",bottom:"0",zIndex:"100",backgroundImage:"linear-gradient(transparent, #ffffff)"}),u.createElement(A.x,{maxHeight:"160px",overflow:"auto"},u.createElement(B.E,{value:N,onChange:v,options:b,radioButtonsName:"addStory",ariaLabelledBy:C}))),u.createElement(A.x,{display:"flex",marginTop:"20px"},k in h?u.createElement(M.z,{onClick:function(){var e=h[k];i(),t(),f(e).then((function(){window.location.reload()}))},buttonStyle:"OBVIOUS"},"Add story"):u.createElement(M.z,{onClick:function(){var e=y[k];E(e),i(),d()},disabled:!k},"Submit"),u.createElement(A.x,{marginLeft:"10px"},u.createElement(j.F,{scale:"M",color:"LIGHTER"},u.createElement(_.r,{onClick:i},u.createElement(A.x,{padding:"10px"},"Cancel"))))),u.createElement(A.x,{marginTop:"10px"},u.createElement(j.F,{scale:"M"},"This story will be automatically submitted to the publication. When you submit your story, the publication's editors will be notified and will be able to edit your story.")))}},o)})))})):o},Z=i(27517),$=i(78285),ee=function(e){var n=e.children,i=e.isVisible,t=e.post,a=e.hide,o=e.showLoadingIndicator,l=(0,T.h3)(t),r=(0,T.yb)(t),d=(0,Z.I0)(),c=t.pendingCollection;return c?u.createElement(U.J,{ariaId:"manageSubmissionPopover",isVisible:i,hide:a,popoverRenderFn:function(){return u.createElement(A.x,{padding:"16px",maxWidth:"280px"},u.createElement(A.x,{display:"flex",flexDirection:"row",alignItems:"center"},u.createElement(A.x,{paddingRight:"8px"},u.createElement(C.v,{collection:c,size:40})),u.createElement(j.F,{scale:"S"},"This draft is submitted to ",c.name,".")),u.createElement(A.x,{flexDirection:"row",display:"flex",paddingTop:"16px"},u.createElement(A.x,{paddingRight:"8px"},u.createElement(M.z,{buttonStyle:"OBVIOUS",onClick:function(){a(),o(),l(t.pendingCollection).then((function(){window.location.reload()}))}},"Accept")),u.createElement(M.z,{buttonStyle:"SUBTLE",onClick:function(){r(t.pendingCollection).then((function(){d((0,$.Dx)({message:"Story removed from ".concat(c.name||"publication")}))})),a()}},"Don't accept")))}},n):n},ne=function(e,n){return n&&e.creator&&n.id===e.creator.id},ie=i(39727),te="removeFromPublicationPopover",ae=function(e){var n=e.viewer,i=e.show,t=e.post,a=(0,ie.g)(t.pendingCollection||t.collection).viewerEdge,o=null==a?void 0:a.isEditor;return n&&("APPROVED"===t.statusForCollection&&(o||function(e,n){var i=e.pendingCollection||e.collection;return i&&i.creator&&n.id===i.creator.id}(t,n)||ne(t,n))||"PENDING"===t.statusForCollection&&ne(t,n))?u.createElement(R.Sl,null,u.createElement(_.r,{"aria-controls":te,"aria-expanded":"false",onClick:i},"Remove story from publication")):null},oe=function(e){var n=e.children,i=e.isVisible,t=e.hide,a=e.post,o=e.viewer,l=(0,Z.I0)(),r=(0,T.yb)(a),d=a.collection||a.pendingCollection;return d?u.createElement(U.J,{ariaId:te,isVisible:i,hide:t,popoverRenderFn:function(){return u.createElement(A.x,{padding:"16px",maxWidth:"280px"},u.createElement(A.x,{display:"flex",flexDirection:"row",alignItems:"center"},u.createElement(A.x,{paddingRight:"8px"},u.createElement(C.v,{collection:d,size:40})),"APPROVED"===a.statusForCollection?u.createElement(j.F,{scale:"S"},ne(a,o)?"Your":"This"," story is published in"," ",d.name,"."):"PENDING"===a.statusForCollection?u.createElement(j.F,{scale:"S"},"Your story is being reviewed by ",d.name," editors."):u.createElement(j.F,{scale:"S"},"This draft is submitted to ",d.name)),u.createElement(A.x,{flexDirection:"row",display:"flex",paddingTop:"16px"},u.createElement(A.x,{paddingRight:"8px"},u.createElement(M.z,{buttonStyle:"SUBTLE",onClick:function(){r(d).then((function(){l((0,$.Dx)({message:"Story removed from ".concat(d.name||"publication")}))}),(function(){l((0,$.Dx)({message:"There was a problem removing the story from ".concat(d.name||"publication"),toastStyle:"ERROR"}))})),t()}},"PENDING"===a.statusForCollection?"Cancel submission":"Remove from ".concat(d.name||"")))))}},n):n},le=i(43220),re=i(31048),de=i(74302),ce=i(36405),se=i(6443),me=i(39507),ue=i(18733),pe=i(26350),ke=i(96462),ve=i(48517),fe=i(51066),Ee=i(1383),ge=i(14646),Se=i(92661),be=i(75221),he=i(43487),ye=i(43303),Ne=i(68894),Fe=i(50458),Ce=i(92001),xe=i(93647),we=i(36736),Oe=i(91727),Pe=i(48172),Ie=i(57477),Te={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CreatorActionOverflowPopover_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allowResponses"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"isLocked"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"pinnedAt"}},{kind:"Field",name:{kind:"Name",value:"pinnedByCreatorAt"}},{kind:"Field",name:{kind:"Name",value:"curationEligibleAt"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"responseDistribution"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"inResponseToPostResult"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}}]}},{kind:"Field",name:{kind:"Name",value:"inResponseToCatalogResult"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}}]}},{kind:"Field",name:{kind:"Name",value:"pendingCollection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MutePopoverOptions_creator"}},{kind:"FragmentSpread",name:{kind:"Name",value:"auroraHooks_publisher"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MutePopoverOptions_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"auroraHooks_publisher"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsPinnedInContext_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3EmailToSubscribersMenuItem_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"OverflowMenuItemUndoClaps_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat(w()(Ce.m.definitions),w()(xe.C.definitions),w()(Ce.G.definitions),w()(we.x.definitions),w()(Oe.S.definitions),w()(Pe.g.definitions),w()(Ie._C.definitions))},De={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CreatorActionOverflowPopoverQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CreatorActionOverflowPopover_post"}}]}}]}}].concat(w()(Te.definitions))};function Re(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function Ae(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?Re(Object(i),!0).forEach((function(n){d()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Re(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var _e=function(e){var n=(0,m.a)(De,{variables:{postId:e.post.id}}).data;if(null==n||!n.post)return null;var i=Ae(Ae({},e),{},{post:n.post});return u.createElement(Ve,i)},Ve=function(e){var n,i,t=e.post,o=e.showLoadingIndicator,r=e.setIsAuthorOrPubMuted,d=e.setMutedAuthorId,c=e.setMutedPubId,m=e.isMutingFromHomeFeed,F=e.hideUndoApplause,C=void 0!==F&&F,x=e.isResponsive,w=e.popoverPositioningStrategy,O=e.hideAddToList,P=void 0===O||O,I=e.hideOnScroll,T=t.creator,D=t.collection,V=u.useState(!1),M=l()(V,2),L=M[0],B=M[1],j=u.useState(!1),K=l()(j,2),z=K[0],H=K[1],Q=u.useState(!1),G=l()(Q,2),q=G[0],J=G[1],X=(0,ge.I)(),Z=(0,ue.Uo)(),ne=t.allowResponses,te=t.pendingCollection,Ce=t.mediumUrl,xe=t.visibility,we=(0,ie.g)(D).viewerEdge,Oe=(0,ie.g)(te).viewerEdge,Pe=(0,me.T)(t).viewerEdge,Ie=(0,$.w)(),Te=(0,se.H)().value,De=null==Te?void 0:Te.id,Re=t.responseDistribution===be.Et.DISTRIBUTED,Ae=!!t.inResponseToPostResult||!!t.inResponseToCatalogResult,_e=Ae?"response":"story",Ve=(0,re.KQ)(t),Me=l()(Ve,2),Le=Me[0],Ue=Me[1],Be=(0,le.U)(t.collection),je=(0,le.U)(t.creator),Ke=u.useCallback((function(e){var n;Ie({extraParams:{collectionName:(null===(n=t.collection)||void 0===n?void 0:n.name)||"",becamePinned:!!e.data.setPinnedAt.pinnedAt},toastStyle:"POST_PINNED_TO_COLLECTION_HOMEPAGE"})}),[null===(n=t.collection)||void 0===n?void 0:n.name]),ze=u.useCallback((function(e){Ie({message:e.data.postSetPinnedByCreatorAt.pinnedByCreatorAt?"This ".concat(_e," has been pinned to your profile's homepage"):"This ".concat(_e," has been unpinned from your profile's homepage")})}),[]),He=u.useCallback((function(){Ue().then(Ke)}),[Ue,Ke,null==t||null===(i=t.collection)||void 0===i?void 0:i.name]),Qe=(0,re.In)(t),Ge=l()(Qe,2),qe=Ge[0],We=Ge[1],Je=u.useCallback((function(){We().then(ze)}),[We,ze]),Xe=(0,he.v9)((function(e){return e.config.authDomain})),Ye=u.useState(!1),Ze=l()(Ye,2),$e=Ze[0],en=Ze[1],nn=(0,Ne.O)(!1),tn=l()(nn,3),an=tn[0],on=tn[1],ln=tn[2],rn=(0,Ne.O)(!1),dn=l()(rn,4),cn=dn[0],sn=dn[2],mn=dn[3],un=(0,g.j)(t.id),pn=l()(un,1)[0],kn=(0,Ne.O)(!1),vn=l()(kn,3),fn=vn[0],En=vn[1],gn=vn[2],Sn=(0,Se.qt)("ShowHome",{}),bn=u.useCallback((function(){pn().then((function(){window.location.assign(Sn)}))}),[pn,Sn]),hn="Delete story";Re?hn="Delete story and response":Ae&&(hn="Delete response");var yn=Re?de.Q:u.createElement(p.M,{entityName:_e}),Nn=(0,ce.P5)("can_edit_members_only_posts");if(!T||!Te)return null;var Fn=De===T.id,Cn=(null==we?void 0:we.isEditor)||(null==Oe?void 0:Oe.isEditor),xn=Fn||Cn,wn=Nn&&t&&t.isLocked,On=xn||wn,Pn="creatorActionOverflowMenu",In="LOCKED"===xe,Tn=Cn&&!Fn||!xn,Dn=!Ae||Re,Rn=function(){Re&&(sn(),on())};if($e)return u.createElement(b.l,{to:(0,Fe.d0)(Xe,t.id)});var An={kind:be.ej.POST,target:t};return u.createElement(u.Fragment,null,u.createElement(Ee.Q,{buttonStyle:"STRONG",cancelText:"Cancel",isVisible:an,onConfirm:function(){en(!0)},hide:ln,titleText:"Edit story and response",confirmText:"Continue",isDestructiveAction:!1},de.t),u.createElement(Ee.Q,{buttonStyle:"ERROR",cancelText:"Cancel",isVisible:fn,onConfirm:bn,hide:gn,titleText:hn,confirmText:"Delete",isDestructiveAction:!0},yn),u.createElement(f.a,a()({},An,{viewer:Te}),(function(e){var n=e.onClick;return u.createElement(U.J,{targetDistance:10,ariaId:Pn,isVisible:cn,hide:sn,positioningStrategy:w,hideOnOutsideClick:!0,hideOnScroll:I,popoverRenderFn:function(){return u.createElement(R.mX,null,u.createElement(u.Fragment,null,u.createElement(E.l,{type:"popover",handleClick:Rn,href:(0,Fe.d0)(Xe,t.id),isVisible:!!On},"Edit ",_e),D&&Cn&&Be&&Dn&&u.createElement(R.Sl,null,u.createElement(_.r,{onClick:He},Le?"Unpin this ".concat(_e," from "):"Pin this ".concat(_e," to "),D.name)),Fn&&je&&Dn&&u.createElement(R.Sl,null,u.createElement(_.r,{onClick:Je},qe?"Unpin this ".concat(_e," from your profile"):"Pin this ".concat(_e," to your profile"))),u.createElement(h.w4,{post:t,onClick:sn,menuStyle:"TEXT"}),xn?u.createElement(u.Fragment,null,u.createElement(R.oK,null),u.createElement(R.Sl,null,u.createElement(_.r,{href:(0,Fe.KI)(Xe,t.id)},s()(_e)," settings"))):null,xn&&u.createElement(R.Sl,null,u.createElement(_.r,{href:(0,Fe.T0)(Xe,t.id)},s()(_e)," stats")),xn&&In&&Ce&&(null==Pe?void 0:Pe.shareKey)&&u.createElement(y.$,{post:t,shareKey:null==Pe?void 0:Pe.shareKey}),xn&&u.createElement(R.oK,null),xn?u.createElement(u.Fragment,null,u.createElement(N.r,{hidePopover:sn,postId:t.id,allowResponses:ne}),!P&&u.createElement(R.Sl,null,u.createElement(_.r,{"aria-controls":Pn,"aria-expanded":"false",onClick:function(e){sn(),n(e)}},"Add to list")),u.createElement(W,{post:t,show:function(){H(!0),sn()}}),u.createElement(ae,{viewer:Te,post:t,show:function(){J(!0),sn()}}),Fn&&u.createElement(R.Sl,null,u.createElement("div",{className:X({color:Z.baseTheme.colorTokens.foreground.error.primary.base})},u.createElement(_.r,{onClick:(0,ye.B)(sn,En)},"Delete ",_e)))):null,Tn?u.createElement(u.Fragment,null,Cn&&u.createElement(R.oK,null),!C&&u.createElement(v.T,{post:t,hidePopover:sn}),u.createElement(u.Fragment,null,De?u.createElement(fe.z,{targetUserId:T.id,postId:t.id,hidePopover:sn,viewerId:De}):u.createElement(R.Sl,null,u.createElement(pe.R,{operation:"register",post:t,susiEntry:"report_footer"},"Report this ",_e))),u.createElement(S.q,{hidePopover:sn,creator:T,collection:D,postId:t.id,setIsAuthorOrPubMuted:r,setMutedAuthorId:d,setMutedPubId:c,isMutingFromHomeFeed:m}),u.createElement(ke.F,{hidePopover:sn,creator:T,viewer:Te}),u.createElement(ve.j,{hidePopover:sn,creator:T,viewer:Te})):null))}},u.createElement(Y,{post:t,isVisible:z,hide:function(){H(!1)},showLoadingIndicator:o},u.createElement(oe,{viewer:Te,post:t,isVisible:q,hide:function(){J(!1)}},u.createElement(ee,{post:t,isVisible:L,hide:function(){B(!1)},showLoadingIndicator:o},u.createElement(A.x,{flexGrow:"0",marginRight:"-4px"},u.createElement(k.c,{"aria-controls":Pn,"aria-expanded":cn?"true":"false","aria-label":"More options",onClick:function(){L?B(!1):z?H(!1):mn()},isResponsive:x,tooltipText:"More"}))))))})))}},93647:(e,n,i)=>{"use strict";i.d(n,{C:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"auroraHooks_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraEligible"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}]}},43220:(e,n,i)=>{"use strict";i.d(n,{U:()=>t,I:()=>a});var t=function(e){return!!e&&(e.isAuroraVisible||"Collection"===e.__typename&&e.isAuroraEligible&&e.viewerEdge.isEditor)},a=function(e){return!!e&&("Collection"===e.__typename?e.isAuroraVisible||e.isAuroraEligible&&e.viewerEdge.isEditor:e.isAuroraVisible)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1802.feddc2fc.chunk.js.map