"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{4500:function(e,n,a){a.r(n);var l=a(7294),t=a(5390),r=a(3030),i=a(6383),c=a(77),o=a(5893);n.default=(0,l.memo)(function(e){var n,a,s=e.taxonomy,u=e.handleProductNavigation,d=e.showFilters,m=e.toggleMobileFilters,f=e.taxonomyFiltersRef,v=e.panelBackground,g=e.hideMobileFilters,p=e.currentTaxonomySelected,x=e.isEnterKey,h=e.dummyTaxonomyRef,b=e.isPanelOpen,y=(0,l.useRef)(),N=(0,l.useRef)(null),j=(0,l.useRef)(null),k=(0,l.useContext)(t.Z).viewport,w=k||{},E=w.isMobile,C=w.isSmTablet,F=(0,l.useContext)(r.N),R=s||{},T=R.parentId,M=R.parentName,S=(0,l.useRef)();(0,l.useEffect)(function(){var e;null==S||null===(e=S.current)||void 0===e||e.setAttribute("aria-label","".concat(s.categories[0].parent.name," menu list scrollable region"))},[null==s?void 0:s.parentId]),(0,l.useEffect)(function(){if(s&&s.parentId){if(x){var e;null==N||null===(e=N.current)||void 0===e||e.focus()}j.current=setTimeout(function(){if(x&&null!=h&&h.current){var e;null==h||null===(e=h.current)||void 0===e||e.focus()}},500)}return function(){clearTimeout(null==j?void 0:j.current)}},[s.parentId,x]);var _=function(){var e,n,a=(null==s?void 0:null===(e=s.categories)||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:n.parent)||{},l=a.id,t=a.apiName;return(0,o.jsxs)(o.Fragment,{children:[(!E&&!C||d)&&(0,o.jsxs)("ul",{children:[" ",s.categories[0].parent&&(0,o.jsx)("li",{className:l===p?"active parent-taxonomy":"parent-taxonomy",children:(0,o.jsx)("a",{"data-txnmy-id":l,"data-lbl":t,className:"filter",onClick:function(e){e.persist(),u(e,l,null,null,t)},children:s.categories[0].parent.name})},-1),s.categories.map(function(e,n){var a=e||{},l=a.id,t=a.name,r=a.apiName;return(0,o.jsx)("li",{className:e.id===p?"active filter-child":"filter-child",children:(0,o.jsx)("a",{"data-txnmy-id":e.id,"data-lbl":e.apiName,className:"filter",href:"#",onClick:function(e){var n=(null==e?void 0:e.buttons)===1;u(e,l,t,null,r,n)},onKeyDown:function(e){var n=e||{},a=n.type,i=n.code,c=n.detail,o=n.buttons;("keydown"!=a||"Enter"===i)&&u(e,l,t,null,r,"keydown"==a&&"Enter"===i||1==c&&1==o)},children:e.name})},n)})]}),(0,o.jsx)("div",{className:"rc20bottomspacing"})]})};return(0,o.jsxs)("div",{className:"rc20menu",children:[(0,o.jsxs)(i.Z,{className:"parent-nav",src:v&&v.image?v.image:null,children:[T&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"dummydiv",ref:N}),(0,o.jsx)("button",{className:"rc20back icn-chevron-left","data-txnmy-id":T,ref:h,"data-lbl":"prev-back-button",onClick:function(e){var n=(null==e?void 0:e.buttons)===1;g(e),u(e,T,null,null,M,n)},onKeyDown:function(e){var n=e||{},a=n.type,l=n.code;("keydown"!=a||"Enter"===l||"Space"===l)&&(g(e),u(e,T,null,null,M,"keydown"==a&&("Enter"===l||" "===l||"Space"===l)))},children:F.prodnav_back||"Back"})]}),b&&(0,o.jsx)("button",{className:"rc20toggle ".concat(d?"icn-close":"icn-overflow-vert"),"aria-label":"Toggle menu",onClick:function(e){m(e)}})]}),(n=null,s&&s.categories&&s.categories[0].ancestors&&s.categories[0].ancestors[0].name&&(n=s.categories[0].ancestors[0].name.split(" ")),a=n,(0,o.jsx)("div",{className:"rc20category",children:a&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"".concat(a[0]," ").concat(a[1])}),(0,o.jsx)("div",{children:"".concat(a[2]?a[2]:"")}),(0,o.jsxs)("div",{role:"heading","aria-level":"2",className:"sr-only",children:["".concat(a[0]," ").concat(a[1])," ","".concat(a[2]?a[2]:"")]})]})})),(0,o.jsx)("div",{className:"rc20filters",ref:y,children:k.isMobile?s&&s.categories&&s.categories.length>0&&_():s&&s.categories&&s.categories.length>0&&(0,o.jsx)(c.Z,{scrollableNodeProps:{ref:S},ref:f,scrollbarMaxSize:100,children:_()})})]})})}}]);