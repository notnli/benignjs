(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();window["homepage-puff"]={};const B="WINE",f="FULL_ACCESS",A="EDITORIAL_ACCESS",m="NO_EDITORIAL_ACCESS",T=["All Digital Access","7 Day Print","Saturday Print Classic","Complete 6 Day","All Digital Access plus Weekend Newspaers","2 Day Print Classic","Print Editions","Complete 5 Day","Saturday Print","Print Editions 6 Day","All Digital Access plus Sunday Newspaper","Print Editions 5 Day","Unlimited Web Access plus Sunday Newspaper","Events Standard","Events All Digital Access","Unlimited Web Access plus Saturday Newspaper","Print Editions Weekend","Newspaper+"],U=["Standard","Digital Light"];window["homepage-puff"].bannerFuncs={getGeoLocation:()=>{const t=document.querySelector('meta[name="tmgads.geo"]'),e=t.content.includes("US");return{geo:t,isUS:e}},getAccessType:()=>{const{subTypes:t}=window["homepage-puff"];if(!t)return m;switch(!0){case T.some(e=>t.some(o=>o.toLowerCase().includes(e.toLowerCase()))):return f;case U.some(e=>t.some(o=>o.toLowerCase().includes(e.toLowerCase()))):return A;default:return m}},getSelectedBanner:t=>{const{displayLogic:e,subTypes:o}=window["homepage-puff"];switch(t){case A:return o.some(r=>r.toLowerCase().includes("puzzles"))?e.puzzleseditorialaccess:o.some(r=>r.toLowerCase().includes("wine"))?e.wineeditorialaccess:e.editorialaccess;case f:return o.some(r=>r.toLowerCase().includes("puzzles"))?e.puzzlesfullaccess:o.some(r=>r.toLowerCase().includes("wine"))?e.winefullaccess:e.fullaccess;default:return displayBanner.noeditorialaccess}},displayBanner:t=>{const{subTypes:e,displayLogic:o,bannerVariants:r}=window["homepage-puff"],{getSelectedBanner:n,paintBanner:s}=window["homepage-puff"].bannerFuncs;if(!t||!e||t===m){const{noeditorialaccess:i}=o;return s(r[i])}const a=i=>i==="UKRAINE_US"?!0:e.some(l=>i.toLowerCase().includes(l.toLowerCase())||t===f),u=n(t);return s(r[`${u}`],a(u))},paintBanner:(t,e=!1)=>{const o=document.querySelector(".hp-puff"),r=document.querySelector(".hp-puff__container"),n=document.querySelectorAll(".hp-puff__cta"),s=document.querySelectorAll(".hp-puff__img > *"),a=document.querySelector(".hp-puff__logo > img"),u=document.querySelector(".hp-puff__logo > source"),i=document.querySelector(".hp-puff__copy"),{name:l,bg:g,icon320url:d,icon768url:p,icon1280url:E,logo320url:C,logo1280url:_,acquisitionheadline:w,acquisitionheadlinemobile:P,engageheadline:y,engageheadlinemobile:D,acquisitionctatext:N,engagectatext:O,acquisitionbody:h,acquisitionbodymobile:q,engagebody:b,engagebodymobile:I,acquisitionctaurl:S,engagectaurl:L}=t;s.forEach(c=>{if(c.tagName==="IMG")return c.src=d;switch(c.getAttribute("media")){case"(min-width:1280px)":{c.srcset=E;break}case"(min-width:768px)":{c.srcset=p;break}default:{c.srcset=d;break}}}),o.dataset.type=l,o.addEventListener("click",()=>{window.location.href=e?L:S}),n.forEach(c=>{c.innerText=e?O:N,c.href=e?L:S}),a.src=C,u.srcset=_,u.media=l===B?"(min-width: 768px)":"(min-width: 1280px)",i.dataset.headline=e?y:w,i.dataset.headline_mb=e?D??y:P??w,i.dataset.body=e?b:h,i.dataset.body_mb=e?I??b:q??h,o.style["border-color"]="#222",r.style.opacity="1"},getProfile:()=>{var t,e;return(((t=window.tmg)==null?void 0:t.user.isLoggedIn())&&((e=window.tmg)==null?void 0:e.user.getProfile()))??null},getBannerVariants:t=>Object.assign({},...t.BANNERS.filter(e=>e.name).map(e=>({[e.name]:e}))),loadEmbed:async()=>{const t=await fetch("https://cf-particle-html.eip.telegraph.co.uk/data-source/57691b05-8f82-4c7d-a525-a895a3b4800b.json").then(p=>p.json());if(!t)return;const{getGeoLocation:e,getProfile:o,getBannerVariants:r,displayBanner:n,getAccessType:s}=window["homepage-puff"].bannerFuncs,a=e(),{isUS:u}=a,i=o(),l=(i==null?void 0:i.subscriptionTypeExtension)??null,g=r(t),[d]=u?t["US-PROMO"]:t.PROMO;return window["homepage-puff"]={...window["homepage-puff"],subTypes:l,bannerVariants:g,displayLogic:d},n(s())}};window.tmg.pubsub.subscribe({topic:"tmg.user.ready",func:()=>window["homepage-puff"].bannerFuncs.loadEmbed(),runIfAlreadyPublished:!0});