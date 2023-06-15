/*! For license information please see 802.85c02b7e.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"]=self["b-index-lp-web-mfe"]||[]).push([[802],{59006:function(t,e,n){"use strict";n.d(e,{V:function(){return a}});var r=n(66022),i=n(82497),o=n(14222),a=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!(0,i.D)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;__DEV__?(0,r.kG)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!t,29);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var n=(0,o.E2)(t),i=(0,o.mw)(e),a=(0,o.mw)(n.type);__DEV__?(0,r.kG)(n.type===e,"Running a "+i+" requires a graphql "+i+", but a "+a+" was used instead."):(0,r.kG)(n.type===e,30)},t}()},43083:function(t,e,n){"use strict";n.d(e,{D:function(){return f}});var r=n(31191),i=n(32735),o=n(82497),a=n(14222),s=n(24605),u=n(59006),c=n(12700),l=function(t){function e(e){var n=e.options,r=e.context,i=e.result,o=e.setResult,s=t.call(this,n,r)||this;return s.runMutation=function(t){void 0===t&&(t={}),s.onMutationStart();var e=s.generateNewMutationId();return s.mutate(t).then((function(t){return s.onMutationCompleted(t,e),t})).catch((function(t){var n=s.getOptions().onError;if(s.onMutationError(t,e),n)return n(t),{data:void 0,errors:t};throw t}))},s.verifyDocumentType(n.mutation,a.n_.Mutation),s.result=i,s.setResult=o,s.mostRecentMutationId=0,s}return(0,r.ZT)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,a.n_.Mutation),[this.runMutation,(0,r.pi)((0,r.pi)({},t),{client:this.refreshClient().client})]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){return this.refreshClient().client.mutate((0,c.J)(this.getOptions(),t))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var n=this.getOptions(),r=n.onCompleted,i=n.ignoreResults,o=t.data,a=t.errors,u=a&&a.length>0?new s.c({graphQLErrors:a}):void 0;this.isMostRecentMutation(e)&&!i&&this.updateResult({called:!0,loading:!1,data:o,error:u}),r&&r(o)},e.prototype.onMutationError=function(t,e){this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0})},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){if(this.isMounted&&(!this.previousResult||!(0,o.D)(this.previousResult,t)))return this.setResult(t),this.previousResult=t,t},e}(u.V),p=n(55261);function f(t,e){var n=(0,i.useContext)((0,p.K)()),o=(0,i.useState)({called:!1,loading:!1}),a=o[0],s=o[1],u=e?(0,r.pi)((0,r.pi)({},e),{mutation:t}):{mutation:t},c=(0,i.useRef)();var f=(c.current||(c.current=new l({options:u,context:n,result:a,setResult:s})),c.current);return f.setOptions(u),f.context=n,(0,i.useEffect)((function(){return f.afterExecute()})),f.execute(a)}},13260:function(t,e,n){"use strict";n.d(e,{a:function(){return i}});var r=n(51099);function i(t,e){return(0,r.r)(t,e,!1)}},51099:function(t,e,n){"use strict";n.d(e,{r:function(){return p}});var r=n(31191),i=(n(66022),n(32735)),o=n(82497),a=n(24605),s=n(6637),u=n(14222),c=function(t){function e(e){var n=e.options,r=e.context,i=e.onNewData,o=t.call(this,n,r)||this;return o.runLazy=!1,o.previous=Object.create(null),o.runLazyQuery=function(t){o.cleanup(),o.runLazy=!0,o.lazyOptions=t,o.onNewData()},o.obsRefetch=function(t){var e;return null===(e=o.currentObservable)||void 0===e?void 0:e.refetch(t)},o.obsFetchMore=function(t){var e;return null===(e=o.currentObservable)||void 0===e?void 0:e.fetchMore(t)},o.obsUpdateQuery=function(t){var e;return null===(e=o.currentObservable)||void 0===e?void 0:e.updateQuery(t)},o.obsStartPolling=function(t){var e;null===(e=o.currentObservable)||void 0===e||e.startPolling(t)},o.obsStopPolling=function(){var t;null===(t=o.currentObservable)||void 0===t||t.stopPolling()},o.obsSubscribeToMore=function(t){var e;return null===(e=o.currentObservable)||void 0===e?void 0:e.subscribeToMore(t)},o.onNewData=i,o}return(0,r.ZT)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,n=t.query;return(e||n!==this.previous.query)&&(this.removeQuerySubscription(),this.removeObservable(!e),this.previous.query=n),this.updateObservableQuery(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:s.I.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this,e=this.getOptions();return!e.skip&&!1!==e.ssr&&new Promise((function(e){return t.startQuerySubscription(e)}))},e.prototype.afterExecute=function(t){var e=(void 0===t?{}:t).lazy,n=void 0!==e&&e;this.isMounted=!0;var r=this.getOptions();return this.currentObservable&&!this.ssrInitiated()&&this.startQuerySubscription(),n&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=r,this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),this.removeObservable(!0),delete this.previous.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=(0,r.pi)((0,r.pi)({},e.variables),this.lazyOptions.variables),e.context=(0,r.pi)((0,r.pi)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t=this.getOptions(),e=t.ssr,n=t.skip,i=!1===e,o=this.refreshClient().client.disableNetworkFetches,a=(0,r.pi)({loading:!0,networkStatus:s.I.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());if(i&&(this.ssrInitiated()||o))return this.previous.result=a,a;if(this.ssrInitiated()){var u=this.getExecuteResult()||a;return u.loading&&!n&&this.context.renderPromises.addQueryPromise(this,(function(){return null})),u}},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,u.n_.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),(0,r.pi)((0,r.pi)({},t),{displayName:e,context:t.context})},e.prototype.initializeObservableQuery=function(){if(this.ssrInitiated()&&(this.currentObservable=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable){var t=this.prepareObservableQueryOptions();this.previous.observableQueryOptions=(0,r.pi)((0,r.pi)({},t),{children:void 0}),this.currentObservable=this.refreshClient().client.watchQuery((0,r.pi)({},t)),this.ssrInitiated()&&this.context.renderPromises.registerSSRObservable(this.currentObservable,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable){var t=(0,r.pi)((0,r.pi)({},this.prepareObservableQueryOptions()),{children:void 0});this.getOptions().skip?this.previous.observableQueryOptions=t:(0,o.D)(t,this.previous.observableQueryOptions)||(this.previous.observableQueryOptions=t,this.currentObservable.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(t){var e=this;void 0===t&&(t=this.onNewData),this.currentSubscription||this.getOptions().skip||(this.currentSubscription=this.currentObservable.subscribe({next:function(n){var r=n.loading,i=n.networkStatus,a=n.data,s=e.previous.result;s&&s.loading===r&&s.networkStatus===i&&(0,o.D)(s.data,a)||t()},error:function(n){if(e.resubscribeToQuery(),!n.hasOwnProperty("graphQLErrors"))throw n;var r=e.previous.result;(r&&r.loading||!(0,o.D)(n,e.previous.error))&&(e.previous.error=n,t())}}))},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable;if(t){var e=t.last;try{t.resetLastResults(),this.startQuerySubscription()}finally{t.last=e}}},e.prototype.getExecuteResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=(0,r.pi)((0,r.pi)({},t),{data:void 0,error:void 0,loading:!1,networkStatus:s.I.ready,called:!0});else if(this.currentObservable){var n=this.currentObservable.getCurrentResult(),i=n.data,o=n.loading,u=n.partial,c=n.networkStatus,l=n.errors,p=n.error;if(l&&l.length>0&&(p=new a.c({graphQLErrors:l})),t=(0,r.pi)((0,r.pi)({},t),{data:i,loading:o,networkStatus:c,error:p,called:!0}),o);else if(p)Object.assign(t,{data:(this.currentObservable.getLastResult()||{}).data});else{var f=this.currentObservable.options.fetchPolicy;if(e.partialRefetch&&u&&(!i||0===Object.keys(i).length)&&"cache-only"!==f)return Object.assign(t,{loading:!0,networkStatus:s.I.loading}),t.refetch(),t}}t.client=this.client,this.setOptions(e,!0);var h=this.previous.result;return this.previous.loading=h&&h.loading||!1,t.previousData=h&&(h.data||h.previousData),this.previous.result=t,this.currentObservable&&this.currentObservable.resetQueryStoreErrors(),t},e.prototype.handleErrorOrCompleted=function(){if(this.currentObservable&&this.previous.result){var t=this.previous.result,e=t.data,n=t.loading,r=t.error;if(!n){var i=this.getOptions(),a=i.query,s=i.variables,u=i.onCompleted,c=i.onError,l=i.skip;if(this.previousOptions&&!this.previous.loading&&(0,o.D)(this.previousOptions.query,a)&&(0,o.D)(this.previousOptions.variables,s))return;!u||r||l?c&&r&&c(r):u(e)}}},e.prototype.removeQuerySubscription=function(){this.currentSubscription&&(this.currentSubscription.unsubscribe(),delete this.currentSubscription)},e.prototype.removeObservable=function(t){this.currentObservable&&(this.currentObservable.tearDownQuery(),t&&delete this.currentObservable)},e.prototype.observableQueryFields=function(){var t;return{variables:null===(t=this.currentObservable)||void 0===t?void 0:t.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(n(59006).V);var l=n(55261);function p(t,e,n){void 0===n&&(n=!1);var a=(0,i.useContext)((0,l.K)()),s=(0,i.useReducer)((function(t){return t+1}),0),u=s[0],p=s[1],f=e?(0,r.pi)((0,r.pi)({},e),{query:t}):{query:t},h=(0,i.useRef)(),d=h.current||(h.current=new c({options:f,context:a,onNewData:function(){d.ssrInitiated()?p():Promise.resolve().then((function(){return h.current&&h.current.isMounted&&p()}))}}));d.setOptions(f),d.context=a;var v=function(t,e){var n=(0,i.useRef)();return n.current&&(0,o.D)(e,n.current.key)||(n.current={key:e,value:t()}),n.current.value}((function(){return n?d.executeLazy():d.execute()}),{options:(0,r.pi)((0,r.pi)({},f),{onError:void 0,onCompleted:void 0}),context:a,tick:u}),m=n?v[1]:v;return __DEV__&&function(t){if(__DEV__){var e=(0,i.useRef)(!1);(0,i.useEffect)((function(){return function(){e.current=!0}}),[]),(0,i.useEffect)((function(){!0===e.current&&(e.current=!1,t())}),[])}}(p),(0,i.useEffect)((function(){return function(){d.cleanup(),h.current=void 0}}),[]),(0,i.useEffect)((function(){return d.afterExecute({lazy:n})}),[m.loading,m.networkStatus,m.error,m.data,d.currentObservable]),v}},14222:function(t,e,n){"use strict";n.d(e,{E2:function(){return s},mw:function(){return a},n_:function(){return r}});var r,i=n(66022);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(r||(r={}));var o=new Map;function a(t){var e;switch(t){case r.Query:e="Query";break;case r.Mutation:e="Mutation";break;case r.Subscription:e="Subscription"}return e}function s(t){var e,n,a=o.get(t);if(a)return a;__DEV__?(0,i.kG)(!!t&&!!t.kind,"Argument of "+t+" passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,i.kG)(!!t&&!!t.kind,34);var s=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),c=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),l=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));__DEV__?(0,i.kG)(!s.length||u.length||c.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,i.kG)(!s.length||u.length||c.length||l.length,35),__DEV__?(0,i.kG)(u.length+c.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+t+" had "+u.length+" queries, "+l.length+" subscriptions and "+c.length+" mutations. You can use 'compose' to join multiple operation types to a component"):(0,i.kG)(u.length+c.length+l.length<=1,36),n=u.length?r.Query:r.Mutation,u.length||c.length||(n=r.Subscription);var p=u.length?u:c.length?c:l;__DEV__?(0,i.kG)(1===p.length,"react-apollo only supports one definition per HOC. "+t+" had "+p.length+" definitions. You can use 'compose' to join multiple operation types to a component"):(0,i.kG)(1===p.length,37);var f=p[0];e=f.variableDefinitions||[];var h={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:n,variables:e};return o.set(t,h),h}},55392:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(92577),i=n(32735),o=n(62691),a=n(47354),s="e2ae75f32a",u="bbdbdc7fa5",c="be43524cf2",l="df2cdc47c1",p="e91f322559";function f(t){var e=t.primaryCta,n=t.onClickArgs,r=t.buttonClassName;return e?i.createElement(o.Kq,{className:r,alignItems:"center",gap:3},i.createElement(o.zx,{href:e.link,size:"large",onClick:function(){return e.onClick&&e.onClick(n)},wide:!0},i.createElement(a.Z,{text:e.title}))):null}var h=function(t){var e=t.title,n=t.header,h=t.subtitle,d=t.secondaryCta,v=t.primaryCta,m=t.closeAriaLabel,b=t.onClose,g=t.onCloseTrigger,y=t.onAfterOpen,O=t.position,_=t.size,S=(0,i.useState)(!0),k=(0,r.Z)(S,2),E=k[0],w=k[1],x={closeBottomSheet:function(){return w(!1)}};return i.createElement(o.br,{size:_,position:O,closeAriaLabel:m,active:E,onCloseTrigger:function(){w(!1),g&&g()},onClose:b,onAfterOpen:y,fill:!0,footer:i.createElement(f,{primaryCta:v,onClickArgs:x,buttonClassName:l})},i.createElement(o.Kq,{alignItems:"center",className:s,gap:3},n,i.createElement(o.xv,{tagName:"strong",variant:"headline_2",align:"center"},e),h&&h.map((function(t){return i.createElement(o.xv,{align:"center",key:t,variant:"body_1",tagName:"p",className:u},i.createElement(a.Z,{text:t,variables:{start_bold:"<0>",end_bold:"</0>"},components:[i.createElement("b",{className:p,key:"not used"})]}))})),d&&i.createElement(o.zx,{href:d.link,onClick:function(){return d.onClick&&d.onClick(x)},variant:"tertiary",className:c,wide:!0},i.createElement(a.Z,{text:d.title}))))}},21141:function(t,e,n){"use strict";var r=n(60633);e.Z=r.Z},47354:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(32735),i=n(92577),o=n(72594),a=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,s=/(?:\r\n|\r|\n)/g;function u(t,e){var n=t.replace(s,"").split(a);if(1===n.length)return t;var l=[],p=n.shift();p&&l.push(p);for(var f=0,h=0,d=c(n);h<d.length;h++){var v=(0,i.Z)(d[h],3),m=v[0],b=v[1],g=v[2];if(e&&e[m]){f+=1;var y=e[m];if((0,o.isElement)(y))l.push((0,r.cloneElement)(y,{key:f},b?u(b,e):y.props.children));else{if(!(0,o.isValidElementType)(y)){l.push("\ud83d\udca2");continue}l.push((0,r.createElement)(y,{key:f},b&&u(b,e)))}}else l.push("\ud83d\udca2");g&&l.push(g)}return l}function c(t){if(!t.length)return[];var e=t.slice(0,4),n=(0,i.Z)(e,4),r=n[0],o=n[1],a=n[2],s=n[3];return[[parseInt(r||a,10),o||"",s]].concat(c(t.slice(4,t.length)))}var l=function(t){var e=t.text,n=t.variables,i=t.components,o=function(t,e){if(!e)return t;return Object.keys(e).reduce((function(t,n){return t.split("[".concat(n,"]")).join(e[n]+"")}),t)}(e,n);return r.createElement(r.Fragment,null,u(o,i))}},45875:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return F}});var r,i,o,a=n(20011),s=n(32735),u=n(55392),c=n(21141),l=n(62691),p=n(98178),f=n(79399),h=n(60170);!function(t){t.APP_BANNER="CAPLA_EVENT_app_banner_will_be_displayed"}(r||(r={})),function(t){t.EXPERIMENT_VARIANT="CAPLA_EVENT_genius_sign_in_sheet_sr_variant",t.DISPATCH_TRACK_CLOSE_CUSTOM_GOAL="CAPLA_EVENT_genius_sign_in_sheet_sr_track_close",t.DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE="CAPLA_EVENT_genius_sign_in_sheet_sr_track_on_sheet_shown"}(i||(i={})),function(t){t.EXPERIMENT_VARIANT="CAPLA_EVENT_genius_sign_in_sheet_index_variant",t.DISPATCH_TRACK_CLOSE_CUSTOM_GOAL="CAPLA_EVENT_genius_sign_in_sheet_index_track_close",t.DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE="CAPLA_EVENT_genius_sign_in_sheet_index_track_on_sheet_shown"}(o||(o={}));var d=n(18950),v=n(92577),m=n(72975),b=n.n(m),g=n(6959);function y(t,e){var n=(0,s.useState)(),r=(0,v.Z)(n,2),i=r[0],o=r[1];return(0,s.useEffect)((function(){var n=!0;function r(){return(r=(0,d.Z)(b().mark((function r(){var a;return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!i){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,new Promise((function(n){g.Y.publish(t,{metaData:e,resolve:n})}));case 5:a=r.sent,n&&o(a),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(2);case 11:case"end":return r.stop()}}),r,null,[[2,9]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n=!1}}),[]),i}var O=function(){var t=(0,s.useState)("LOADING"),e=(0,v.Z)(t,2),n=e[0],r=e[1];return(0,s.useEffect)((function(){function t(t){var e=t.detail.willBannerBeShown?"WILL_BE_SHOWN":"WILL_NOT_BE_SHOWN";r(e)}return document.addEventListener("cookie_banner_loaded",t),function(){return document.removeEventListener("cookie_banner_loaded",t)}}),[]),n};function _(){var t,e,n,i=O(),o=function(){var t=y(r.APP_BANNER);return void 0===t?"LOADING":t?"WILL_BE_SHOWN":"WILL_NOT_BE_SHOWN"}(),a=(0,f.T)(),s=null!==(t=null===(e=a.getUserIdentity())||void 0===e?void 0:e.authLevel)&&void 0!==t?t:0,u=null===(n=a.getAffiliate())||void 0===n?void 0:n.isGeniusAffiliate;return!(0!==s||!u||"WILL_NOT_BE_SHOWN"!==o||"WILL_NOT_BE_SHOWN"!==i)}var S=["mousemove","click","keypress","scroll"];function k(t){var e=t.expVariant,n=_(),r=function(t){var e=t.skip,n=(0,s.useState)(!1),r=(0,v.Z)(n,2),i=r[0],o=r[1],a=(0,s.useRef)(null),u=(0,s.useRef)(null);return(0,s.useEffect)((function(){return u.current=function(){o(!0)},function(){u.current=function(){}}}),[o]),(0,s.useEffect)((function(){if(!e)return i?n():(a.current||t(),S.forEach((function(e){return document.addEventListener(e,t)})),n);function t(){a.current&&clearTimeout(a.current),a.current=u.current&&setTimeout(u.current,5e3)}function n(){a.current&&clearTimeout(a.current),S.forEach((function(e){return document.removeEventListener(e,t)}))}}),[e,i]),{hasBeenIdle:i}}({skip:!(n&&2===e)}),i=r.hasBeenIdle;return n&&(1===e||2===e&&i)}var E=(0,s.createContext)({signInLink:"",shouldShow:!1});function w(t){var e=t.children,n=(0,f.T)().getBasePageUrl(),r=(0,h.z)(n.toString()),i=_();return s.createElement(E.Provider,{value:{signInLink:r,shouldShow:i}},e)}var x=n(72335);function P(t){var e,n,r=(0,f.T)();return(0,x.w)({componentId:t,encryptedCommonOauthState:r.getEncryptedCommonOauthState(),environment:r.getBPlatformEnvironment(),affiliateId:(null===(e=r.getAffiliate())||void 0===e||null===(n=e.id)||void 0===n?void 0:n.toString())||"",language:r.getLanguage(),actionName:r.getActionName()||"",webview:!1,prompt:"sign-in",anon:!1})}var L=function(t){var e,n=t.experimentEvents;return{expVariant:y(null!==(e=null===n||void 0===n?void 0:n.EXPERIMENT_VARIANT)&&void 0!==e?e:"")||0,trackOnSheetShown:function(){n&&g.Y.publish(n.DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE)},trackClose:function(){n&&g.Y.publish(n.DISPATCH_TRACK_CLOSE_CUSTOM_GOAL)}}};function N(t){var e=t.children,n=P("genius_index_sheet"),r=L({experimentEvents:o}),i=r.expVariant,a=r.trackOnSheetShown,u=r.trackClose,c=function(t){var e=t.expVariant;return _()&&e>0}({expVariant:i});return s.createElement(E.Provider,{value:{signInLink:n,shouldShow:c,trackOnSheetShown:a,trackClose:u}},e)}function T(t){var e=t.children,n=P("genius_searchresults_sheet"),r=L({experimentEvents:i}),o=r.expVariant,a=r.trackOnSheetShown,u=r.trackClose,c=k({expVariant:o});return s.createElement(E.Provider,{value:{signInLink:n,shouldShow:c,trackOnSheetShown:a,trackClose:u}},e)}var C=n(47169),D=n(43083);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){(0,C.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={},R={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DismissGeniusSignInSheet"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"geniusGuestMutation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"dismissSignInBottomSheet"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isSuccess"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorMessage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:155,source:{body:"\n  mutation DismissGeniusSignInSheet {\n    geniusGuestMutation {\n      dismissSignInBottomSheet {\n        isSuccess\n        errorMessage\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var M=n(13260);function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){(0,C.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={},Z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeniusSignInSheet"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"GeniusSignInBottomSheetInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"geniusGuestData"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"signInBottomSheet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"closeAriaLabel"},name:{kind:"Name",value:"closeAccessibilityText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"signInCta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:273,source:{body:"\n  query GeniusSignInSheet($input: GeniusSignInBottomSheetInput!) {\n    geniusGuestData {\n      signInBottomSheet(input: $input) {\n        title\n        subtitle\n        closeAriaLabel: closeAccessibilityText\n        signInCta {\n          title\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var z=function(){var t=(0,s.useContext)(E),e=t.signInLink,n=t.shouldShow,r=t.trackOnSheetShown,i=t.trackClose,o=(0,f.T)().getSiteType()===p.N.MDOT,a=function(t){var e=G(G({},V),t);return M.a(Z,e)}({variables:{input:{dismissedSince:void 0}},skip:!1===n}).data,u=function(t){var e=j(j({},A),t);return D.D(R,e)}(),c=(0,v.Z)(u,1)[0];if(null===a||void 0===a||!a.geniusGuestData.signInBottomSheet)return null;var l=o?"bottom":"center",h=a.geniusGuestData.signInBottomSheet,d=h.title,m=h.subtitle,b=h.signInCta.title;return{onClose:function(){i&&i()},onAfterOpen:function(){r&&r(),c()},closeAriaLabel:h.closeAriaLabel,primaryCta:{onClick:function(t){return(0,t.closeBottomSheet)()},title:b,link:e},position:l,subtitle:m,title:d}},q=function(){var t=z();return t?s.createElement(u.Z,(0,a.Z)({},t,{header:s.createElement(l.xu,{padding:6},s.createElement(c.Z,{size:"larger"}))})):null};var F=function(t){var e=t.isSearchResultsExperiment,n=(0,f.T)().getSiteType();return e?s.createElement(T,null,s.createElement(q,null)):n===p.N.MDOT?s.createElement(N,null,s.createElement(q,null)):s.createElement(w,null,s.createElement(q,null))}},60170:function(t,e,n){"use strict";n.d(e,{M:function(){return o},z:function(){return i}});var r=n(80827);function i(t){return o(t)}var o=function(t){var e=(0,r.K)({pathname:"index.html"});return e.searchParams.set("login_redirect",t),e.toString()}},602:function(t,e,n){"use strict";n.d(e,{p:function(){return r}});var r="Booking.com"},60633:function(t,e,n){"use strict";var r=n(20011),i=n(47169),o=n(13613),a=n(20547),s=n(62691),u=n(24094),c=n(39476),l=n(32735),p=n(602),f=["inverted","ariaLabel","size"];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.Z=function(t){var e=t.inverted,n=void 0!==e&&e,d=t.ariaLabel,v=t.size,m=(0,o.Z)(t,f),b=(0,c.QT)().trans;return l.createElement(s.JO,(0,r.Z)({},function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({ariaLabel:d||b((0,u.t)("www_ge_screenreader_generic_logo",{variables:{b_companyname:p.p}})),size:v||"small"},m),{svg:n?a.ob:a.YU}))}},6959:function(t,e,n){"use strict";n.d(e,{Y:function(){return i}});var r=n(12958),i=n.n(r)()},80827:function(t,e,n){"use strict";n.d(e,{K:function(){return w}});var r,i,o=n(79399),a=n(98178);!function(t){t.admin="admin",t.app="app",t.book="book",t.join="join"}(r||(r={}));var s,u,c,l,p=((i={DEFAULT:["label","sid","utm_source","utm_medium","utm_term","utm_content","utm_campaign","gclid"]})[a.N.EXTRANET]=["hotel_id","lang","ses"],i),f={PRODUCTION:(s={},s[r.admin]="admin",s[r.app]="www",s[r.book]="secure",s[r.join]="join",s),STAGING:(u={},u[r.admin]="a",u[r.app]="w",u[r.book]="b",u[r.join]="j",u),KVM:(c={},c[r.admin]=["adm","devadmin"],c[r.app]=["app","devapp"],c[r.book]=["book","devbook"],c[r.join]=["joinapp","devjoinapp"],c),DQS:(l={},l[r.admin]="admin",l[r.app]="app",l[r.book]="book",l[r.join]="join",l)},h="booking.com",d=S(f.PRODUCTION),v=S(f.STAGING),m=S(f.KVM),b=S(f.DQS),g=new RegExp("^(.*?)\\.?("+h+"|booking.cn)$"),y=new RegExp("^(?:"+v.join("|")+")(\\d+)$"),O=new RegExp("^(\\w+)-("+m.join("|")+").*?\\.dev$"),_=new RegExp("(?:"+b.join("|")+")\\.dqs$");function S(t){return Object.values(t).flat()}function k(t,e){var n=new Set;null==e||e.forEach((function(e,r){n.has(r)?t.append(r,e):(t.set(r,e),n.add(r))}))}function E(t){return Array.isArray(t)?t[0]:t}function w(t){return function(){var t=(0,o.T)(),e=t.getBasePageUrl();if(!e)throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");var n=function(t,e,n,r){var i=new URLSearchParams,o=e&&p.hasOwnProperty(e)?e:"DEFAULT";return p[o].forEach((function(e){var n=t.searchParams.get(e);n&&i.set(e,n)})),"number"===typeof(null==n?void 0:n.id)&&i.set("aid",n.id.toString()),(null==n?void 0:n.label)&&i.set("label",n.label.toString()),r&&t.searchParams.forEach((function(t,e){var n;(0===(n=e).indexOf("exp_")||0===n.indexOf("b_feature_running_")||"exp_all"===n||"hotel_account_id"===n||"i_am_from"===n||"my_ip"===n)&&i.set(e,t)})),i}(e,t.getSiteType(),t.getAffiliate(),t.isInternalIp());return function(r){var i=new URL(""+e.origin+e.pathname),o=r.host?function(t,e){var n=t.host.match(g);if(!n)return t;var r=n[1],i=n[2];if(""===r||d.includes(r)){var o=E(f.PRODUCTION[e]);t.host=o+"."+i}else if(O.test(r)){var a=E(f.KVM[e]);t.host=r.replace(O,"$1-"+a+".dev."+h)}else if(_.test(r)){var s=E(f.DQS[e]);t.host=s+".dqs."+h}else if(y.test(r)){var u=E(f.STAGING[e]);t.host=r.replace(y,u+"$1."+h)}return t}(i,r.host):i;return r.pathname&&(o.pathname=r.pathname),o.hash=r.hash||"",t.isRobotRequest()||(k(o.searchParams,n),k(o.searchParams,r.searchParams)),o}}()(t)}},72335:function(t,e,n){"use strict";n.d(e,{w:function(){return r}});var r=function(t){var e=t.encryptedCommonOauthState,n="prod"===t.environment,r=t.affiliateId,i=t.language,o=t.actionName,a=n?"vO1Kblk7xX9tUn2cpZLS":"b_test_fe",s="https://".concat(function(t){return t?"account.booking.com":"account.dqs.booking.com"}(n),"/auth/oauth2"),u="https://".concat(function(t){return t?"secure.booking.com":"book.dqs.booking.com"}(n),"/login.html?op=oauth_return"),c=new URL(s);if(c.searchParams.set("client_id",a),c.searchParams.set("redirect_uri",u),c.searchParams.set("response_type",t.anon?"anon_session":"code"),i&&c.searchParams.set("lang",i),r&&c.searchParams.set("aid",r),o&&c.searchParams.set("bkng_action",o),e){t.encryptedCommonOauthState,t.environment;var l=function(t,e){try{var n=void 0,r=JSON.stringify(e);return n=btoa(r),"".concat(t,"*").concat(n)}catch(i){return"".concat(t,"*")}}(e,function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["encryptedCommonOauthState","environment"]));l&&c.searchParams.set("state",l)}return c.toString()}},39649:function(t,e,n){var r=n(8114).default;function i(){"use strict";t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(C){p=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),s=new L(r||[]);return a(o,"_invoke",{value:E(t,n,s)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=f;var d={};function v(){}function m(){}function b(){}var g={};p(g,u,(function(){return this}));var y=Object.getPrototypeOf,O=y&&y(y(N([])));O&&O!==n&&o.call(O,u)&&(g=O);var _=b.prototype=v.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,a,s,u){var c=h(t[i],t,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==r(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function E(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:m,configurable:!0}),m.displayName=p(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,p(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},S(k.prototype),p(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(_),p(_,l,"Generator"),p(_,u,(function(){return this})),p(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},8114:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},72975:function(t,e,n){var r=n(39649)();t.exports=r;try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},18950:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,u,"next",t)}function u(t){r(a,i,o,s,u,"throw",t)}s(void 0)}))}}n.d(e,{Z:function(){return i}})},13613:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(66017);function i(t,e){if(null==t)return{};var n,i,o=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}}}]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/802.85c02b7e.chunk.js.map