import{W as t,C as n}from"./vendor-d52601ec.js";import{l as r}from"./i18n-ee1672a9.js";const s=t(r,e=>`/${e}`),p=t(s,e=>`${e}/home`),u=t(s,e=>`${e}/blog`),d=t(s,e=>`${e}/gallery`),b=t(s,e=>`${e}/projects`),f=t(s,e=>`${e}/about`),k=e=>`/content/${e}`,j="https://github.com/EricRovell/ericrovell.me/blob/main/LICENSE",$="";function o(){if(globalThis.window){const e=document.documentElement.getAttribute("theme");if(e==="dark"||e==="light")return e}return"auto"}function i(){const e=o(),{subscribe:a,update:_}=n(e);return{subscribe:a,change:()=>_(l=>l==="light"?"dark":l==="dark"?"auto":"light")}}const v=i();v.subscribe(e=>{!globalThis.window||(e!=="auto"?document.documentElement.setAttribute("theme",e):document.documentElement.removeAttribute("theme"))});const c="_timeline_1ahjh_1",m="_item_1ahjh_47",h="_marker_1ahjh_79";var E={timeline:c,item:m,marker:h};export{d as a,u as b,j as c,$ as d,p as e,b as f,k as g,f as p,E as s,v as t};
