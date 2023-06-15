"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73453],{273453:function(e,n,t){t.d(n,{sO:function(){return M},Dw:function(){return L},HL:function(){return R},MC:function(){return b},nU:function(){return P},jn:function(){return N},vg:function(){return g},dd:function(){return w},Sx:function(){return v},Dl:function(){return h},Un:function(){return C},KJ:function(){return D}});var r=t(76911),o=t(599689),a=t(425288),s=t(773285);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){switch(n.type){case"SET_MODAL":return n.payload;case"CLEAR_MODAL":return{modalType:null};default:return e}}var p={payload:{},type:null};function c(e,n){switch(n.type){case"CLEAR_INTENT":return p;case"OPEN_SHEET":return{type:n.type,payload:n.payload};default:return e}}var E={businessId:"",business:null,managerId:"",manager:null,detailId:"",profile:null,adAccount:null,partnerId:"",employeeId:"",intents:p,modal:{modalType:null}};function y(){var e,n,t,r,o,a,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,d=arguments.length>1?arguments[1]:void 0;switch(d.type){case"SET_ROUTER_PARAMS":return l(l({},s),{},{businessId:null!==(e=d.payload.businessId)&&void 0!==e?e:"",detailId:null!==(n=d.payload.detailId)&&void 0!==n?n:""});case"SET_SELECTED_BUSINESS":return l(l({},s),{},{businessId:null!==(t=d.payload.business.user.id)&&void 0!==t?t:"",business:d.payload.business});case"SET_SELECTED_ORGANIZATION_MANAGER":return l(l({},s),{},{managerId:null!==(r=null===(o=d.payload.manager)||void 0===o?void 0:o.user.id)&&void 0!==r?r:"",manager:d.payload.manager});case"SET_SELECTED_DETAIL":return l(l({},s),{},{detailId:null!==(a=d.payload.detailId)&&void 0!==a?a:""});case"SET_SELECTED_PROFILE":return l(l({},s),{},{profile:d.payload.profile});case"SET_SELECTED_AD_ACCOUNT":return l(l({},s),{},{adAccount:d.payload.adAccount});case"SET_SELECTED_PARTNER_ID":return l(l({},s),{},{partnerId:d.payload.partnerId});case"SET_SELECTED_EMPLOYEE_ID":return l(l({},s),{},{employeeId:d.payload.employeeId});case"CLEAR_INTENT":case"OPEN_SHEET":return l(l({},s),{},{intents:c(s.intents,d)});case"SET_MODAL":case"CLEAR_MODAL":return l(l({},s),{},{modal:u(s.modal,d)});default:return s}}var _=t(515198);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],s=!0,d=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);s=!0);}catch(l){d=!0,o=l}finally{try{s||null==t.return||t.return()}finally{if(d)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var O=(0,a.Z)("BusinessAccess"),m=O.Provider,R=O.useHook;function M(e){var n=e.children,t=I((0,r.useReducer)(y,E),2),o=t[0],a=t[1],s=(0,r.useMemo)((function(){return{setRouterParams:function(e){var n=e.detailId,t=e.businessId;return a({type:"SET_ROUTER_PARAMS",payload:{detailId:n,businessId:t}})},setSelectedBusiness:function(e){return a({type:"SET_SELECTED_BUSINESS",payload:{business:e}})},setSelectedOrganizationManager:function(e){return a({type:"SET_SELECTED_ORGANIZATION_MANAGER",payload:{manager:e}})},setSelectedDetail:function(e){var n=e.detailId;return a({type:"SET_SELECTED_DETAIL",payload:{detailId:n}})},setSelectedProfile:function(e){return a({type:"SET_SELECTED_PROFILE",payload:{profile:e}})},setSelectedAdAccount:function(e){return a({type:"SET_SELECTED_AD_ACCOUNT",payload:{adAccount:e}})},setSelectedPartnerId:function(e){return a({type:"SET_SELECTED_PARTNER_ID",payload:{partnerId:null!=e?e:""}})},setSelectedEmployeeId:function(e){return a({type:"SET_SELECTED_EMPLOYEE_ID",payload:{employeeId:null!=e?e:""}})},clearIntent:function(){return a({type:"CLEAR_INTENT"})},openSheet:function(e){return a({type:"OPEN_SHEET",payload:e})},setAddPeopleModal:function(){return a({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE"}})},setAddPeopleInviteConfirmationModal:function(e){var n=e.inviteIds,t=e.role,r=e.isPendingTabActive;return a({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_CONFIRMATION",modalProps:{inviteIds:n,role:t,isPendingTabActive:r}}})},setAddPeopleInviteWithAssetsConfirmationModal:function(e){var n=e.inviteIds,t=e.invitedPeopleIdentifiers;return a({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_WITH_ASSETS_CONFIRMATION",modalProps:{inviteIds:n,invitedPeopleIdentifiers:t}}})},setAddPartnerInviteConfirmationModal:function(e){var n=e.selectedId,t=e.role,r=e.inviteId;return a({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_INVITE_CONFIRMATION",modalProps:{selectedId:n,role:t,inviteId:r}}})},setRemovePersonModal:function(e){var n=e.selectedId;return a({type:"SET_MODAL",payload:{modalType:"REMOVE_PERSON",modalProps:{selectedId:n}}})},setRemoveProfilePermissionsModal:function(e){var n=e.userData,t=e.selectionType,r=e.profileId,o=e.dataToRefresh,s=e.refreshData;return a({type:"SET_MODAL",payload:{modalType:"REMOVE_PROFILE_PERMISSIONS",modalProps:{userData:n,selectionType:t,profileId:r,dataToRefresh:o,refreshData:s}}})},setEditPersonRoleModal:function(e){var n=e.selectedId;return a({type:"SET_MODAL",payload:{modalType:"EDIT_PERSON_ROLE",modalProps:{selectedId:n}}})},setInviteRequestPartnerModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"INVITE_REQUEST_PARTNER",modalProps:{partnershipType:null==e?void 0:e.partnershipType,pageForLogger:null==e?void 0:e.pageForLogger}}})},setRequestPartnerConfirmationModal:function(e){var n=e.partnerId,t=e.role,r=e.requestId;return a({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION",modalProps:{partnerId:n,role:t,requestId:r}}})},setRequestPartnerConfirmationSuccessModal:function(e){var n=e.requestId;return a({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION_SUCCESS",modalProps:{requestId:n}}})},setRemoveChildBusinessModal:function(){return a({type:"SET_MODAL",payload:{modalType:"REMOVE_CHILD_BUSINESS"}})},setRemoveOrganizationManagerModal:function(){return a({type:"SET_MODAL",payload:{modalType:"REMOVE_ORGANIZATION_MANAGER"}})},setRemovePartnerModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"REMOVE_PARTNER",modalProps:A({},e)}})},setRemoveSharedPartnerModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_PARTNER",modalProps:A({},e)}})},setRemoveSharedAdAccountModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_AD_ACCOUNT",modalProps:A({},e)}})},setCreateAdAccountModal:function(){return a({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT"}})},setCreateAdAccountConfirmationModal:function(e){var n=e.ownerInfo,t=e.accountInfo,r=e.refreshData;return a({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT_CONFIRMATION",modalProps:{accountInfo:t,ownerInfo:n,refreshData:r}}})},setAssignAdAccountsModal:function(e){var n=e.selectedIds,t=e.selectionType,r=e.dataToRefresh,o=e.assignmentType,s=e.inviteIds,d=e.peopleIdentifiers,l=e.roleType,i=e.showProfiles;return a({type:"SET_MODAL",payload:{modalType:"ASSIGN_AD_ACCOUNTS",modalProps:{selectedIds:n,selectionType:t,dataToRefresh:r,assignmentType:o,peopleIdentifiers:d,inviteIds:s,roleType:l,showProfiles:i}}})},setRequestAdAccountsModal:function(e){var n=e.requestId,t=e.partnerId;return a({type:"SET_MODAL",payload:{modalType:"REQUEST_AD_ACCOUNTS",modalProps:{requestId:n,partnerId:t}}})},setEditAdAccountAccessModal:function(e){var n=e.resourceId,t=e.principalId,r=e.dataToRefresh,o=e.assignmentType,s=e.rolesForAoaa,d=e.clientBusinessId;return a({type:"SET_MODAL",payload:{modalType:"EDIT_AD_ACCOUNT_ACCESS",modalProps:{resourceId:n,principalId:t,dataToRefresh:r,assignmentType:o,rolesForAoaa:s,clientBusinessId:d}}})},setRemoveAdAccountAccessModal:function(e){var n=e.resourceId,t=e.principalId,r=e.dataToRefresh,o=e.assignmentType;return a({type:"SET_MODAL",payload:{modalType:"REMOVE_AD_ACCOUNT_ACCESS",modalProps:{resourceId:n,principalId:t,dataToRefresh:r,assignmentType:o}}})},setOnboardingModal:function(e){var n=e.onComplete,t=e.onDismiss;return a({type:"SET_MODAL",payload:{modalType:"ONBOARDING",modalProps:{onComplete:n,onDismiss:t}}})},setSwitchAdAccountModal:function(e){var n=e.id,t=e.name,r=e.owner_user_id,o=e.merchant_id;return a({type:"SET_MODAL",payload:{modalType:"SWITCH_AD_ACCOUNT",modalProps:{id:n,name:t,owner_user_id:r,merchant_id:o}}})},setAssignProfilesModal:function(e){var n=e.selectedIds,t=e.selectionType,r=e.dataToRefresh,o=e.assignmentType,s=e.refreshData;return a({type:"SET_MODAL",payload:{modalType:"ASSIGN_PROFILES",modalProps:{selectedIds:n,selectionType:t,dataToRefresh:r,assignmentType:o,refreshData:s}}})},setAssignAssetsModal:function(e){var n=e.selectedIds,t=e.inviteId,r=e.dataToRefresh;return a({type:"SET_MODAL",payload:{modalType:"ASSIGN_ASSETS",modalProps:{selectedIds:n,inviteId:t,dataToRefresh:r}}})},setRequestProfileAccessModal:function(e){var n=e.requestId,t=e.requesteeId,r=e.adAccounts;return a({type:"SET_MODAL",payload:{modalType:"REQUEST_PROFILE_ACCESS",modalProps:{requestId:n,requesteeId:t,adAccounts:r}}})},setAssetGroupsFormModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"ASSET_GROUPS_FORM",modalProps:e}})},setDeleteAssetGroupConfirmationModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"DELETE_ASSET_GROUP_CONFIRMATION",modalProps:e}})},setAOAAPermissionAssignmentModal:function(e){var n=e.partnerBusinessInfo,t=e.ownerInfo,r=e.accountInfo;return a({type:"SET_MODAL",payload:{modalType:"AOAA_PERMISSION_ASSIGNMENT",modalProps:{partnerBusinessInfo:n,ownerInfo:t,accountInfo:r}}})},setUnsavedPermissionsConfirmationModal:function(e){var n=e.partnerBusinessInfo,t=e.ownerInfo,r=e.accountInfo;return a({type:"SET_MODAL",payload:{modalType:"UNSAVED_PERMISSIONS_CONFIRMATION",modalProps:{partnerBusinessInfo:n,ownerInfo:t,accountInfo:r}}})},setAOAARequestCreationSuccessModal:function(e){var n=e.partnerBusinessInfo,t=e.ownerInfo,r=e.businessIdToPermissions;return a({type:"SET_MODAL",payload:{modalType:"AOAA_REQUEST_CREATION_SUCCESS",modalProps:{partnerBusinessInfo:n,ownerInfo:t,businessIdToPermissions:r}}})},setAddAssetOrUserToAssetGroup:function(e){var n=e.assetOrMemberType,t=e.assetGroupInfo;return a({type:"SET_MODAL",payload:{modalType:"ADD_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:n,assetGroupInfo:t}}})},setAddUserToAssetGroupConfirmation:function(e){return a({type:"SET_MODAL",payload:{modalType:"ADD_USER_TO_ASSET_GROUP_CONFIRMATION",modalProps:e}})},setRemoveAssetOrUserFromAssetGroup:function(e){var n=e.assetOrMemberType,t=e.toRemove;return a({type:"SET_MODAL",payload:{modalType:"REMOVE_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:n,toRemove:t}}})},setAddManagersModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"ADD_MANAGERS",modalProps:A({},e)}})},setEditBusinessDetailsModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"EDIT_BUSINESS_DETAILS",modalProps:e}})},setViewBusinessDetailsModal:function(e){return a({type:"SET_MODAL",payload:{modalType:"VIEW_BUSINESS_DETAILS",modalProps:e}})},clearModal:function(){return a({type:"CLEAR_MODAL"})}}}),[]),d=(0,r.useMemo)((function(){return A({businessAccess:o},s)}),[o,s]);return(0,_.jsx)(m,{value:d,children:n})}function D(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,s.F)().checkExperiment,t=n("web_business_access_table_reload_fix").anyEnabled,r=n("web_m10n_business_hierarchy_beta").anyEnabled,a=R().businessAccess.businessId,d=(0,o.useRouteMatch)().params.userBizId;return r&&e?a:t?null!=d?d:"":a}function P(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,s.F)().checkExperiment,t=n("web_business_access_table_reload_fix").anyEnabled,r=n("web_m10n_business_hierarchy_beta").anyEnabled,a=R().businessAccess.detailId,d=(0,o.useRouteMatch)().params.detailId;return r&&e?a:t?null!=d?d:"":a}function b(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,n=R().businessAccess.business;return e?n:null}function v(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,n=R().businessAccess.manager;return e?n:null}function C(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,n=R().businessAccess.profile;return e?n:null}function L(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,n=R().businessAccess.adAccount;return e?n:null}function h(){return R().businessAccess.partnerId}function N(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,n=R().businessAccess.employeeId;return e?n:""}function g(){return R().businessAccess.intents}function w(){return R().businessAccess.modal}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73453-d356d98ca0e9710b.js.map