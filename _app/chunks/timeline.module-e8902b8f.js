import{P as l,Y as t,D as o}from"./vendor-5e564936.js";import{l as _}from"./i18n-97c796a3.js";const i=()=>{const e=l("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},c={subscribe(e){return i().page.subscribe(e)}},k=t(c,e=>`https://www.${e.host}${e.url.pathname}`),s=t(_,e=>`/${e}`),w=t(s,e=>`${e}/home`),E=t(s,e=>`${e}/blog`),S=t(s,e=>`${e}/gallery`),T=t(s,e=>`${e}/projects`),C=t(s,e=>`${e}/about`),P=t(s,e=>a=>`${e}/blog/${a}`),A="https://github.com/EricRovell/ericrovell.me/blob/main/LICENSE",I="";var L={"menu-container":"_menu-container_75rn0_1","menu-items":"_menu-items_75rn0_17","menu-item":"_menu-item_75rn0_17"};function v(){if(globalThis.window){const e=document.documentElement.getAttribute("theme");if(e==="dark"||e==="light")return e}return"auto"}function m(){const e=v(),{subscribe:a,update:r}=o(e);return{subscribe:a,change:()=>r(n=>n==="light"?"dark":n==="dark"?"auto":"light")}}const g=m();g.subscribe(e=>{!globalThis.window||(e!=="auto"?document.documentElement.setAttribute("theme",e):document.documentElement.removeAttribute("theme"))});const u="_modal_14rdi_1",p="_backdrop_14rdi_3",d="_contents_14rdi_63";var j={modal:u,backdrop:p,contents:d};const b="_gallery_1mvq2_1";var x={gallery:b,"modal-image":"_modal-image_1mvq2_123"};const y="_timeline_1vzdc_1",h="_item_1vzdc_91";var z={timeline:y,"timeline-section":"_timeline-section_1vzdc_19",item:h};export{C as a,S as b,E as c,A as d,I as e,w as f,T as g,j as h,x as i,P as j,z as k,c as p,L as s,g as t,k as w};
