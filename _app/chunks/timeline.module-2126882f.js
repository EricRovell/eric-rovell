import{N as l,V as t,C as _}from"./vendor-81997168.js";import{l as o}from"./i18n-935aa682.js";const i=()=>{const e=l("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},c={subscribe(e){return i().page.subscribe(e)}},d=t(c,e=>`https://www.${e.host}${e.path}`),s=t(o,e=>`/${e}`),f=t(s,e=>`${e}/home`),$=t(s,e=>`${e}/blog`),w=t(s,e=>`${e}/gallery`),k=t(s,e=>`${e}/projects`),C=t(s,e=>`${e}/about`),E=t(s,e=>n=>`${e}/blog/${n}`),S="https://github.com/EricRovell/ericrovell.me/blob/main/LICENSE",T="";var j={"menu-container":"_menu-container_75rn0_1","menu-items":"_menu-items_75rn0_17","menu-item":"_menu-item_75rn0_17"};function v(){if(globalThis.window){const e=document.documentElement.getAttribute("theme");if(e==="dark"||e==="light")return e}return"auto"}function g(){const e=v(),{subscribe:n,update:r}=_(e);return{subscribe:n,change:()=>r(a=>a==="light"?"dark":a==="dark"?"auto":"light")}}const m=g();m.subscribe(e=>{!globalThis.window||(e!=="auto"?document.documentElement.setAttribute("theme",e):document.documentElement.removeAttribute("theme"))});const u="_gallery_ualue_1";var A={gallery:u};const p="_timeline_1vzdc_1",b="_item_1vzdc_91";var I={timeline:p,"timeline-section":"_timeline-section_1vzdc_19",item:b};export{C as a,w as b,$ as c,S as d,T as e,f,k as g,A as h,E as i,I as j,c as p,j as s,m as t,d as w};