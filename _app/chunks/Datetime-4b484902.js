import{S as h,i as D,s as w,e as _,t as y,c as v,a as g,g as T,d as u,b as m,f as E,E as I,h as j,Q as d}from"./vendor-81997168.js";import"./timeline.module-65744982.js";function F(r){let e,n;return{c(){e=_("time"),n=y(r[0]),this.h()},l(t){e=v(t,"TIME",{datetime:!0,class:!0});var a=g(e);n=T(a,r[0]),a.forEach(u),this.h()},h(){m(e,"datetime",r[0]),m(e,"class","svelte-1ugyifs")},m(t,a){E(t,e,a),I(e,n)},p(t,[a]){a&1&&j(n,t[0]),a&1&&m(e,"datetime",t[0])},i:d,o:d,d(t){t&&u(e)}}}const f={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};function c(r=new Date,e,n=f){return new Intl.DateTimeFormat(e,n).format(new Date(r))}function R(r=new Date,e,n=f){const t=Date.now()-new Date(r).getTime(),a=new Intl.RelativeTimeFormat(e);for(let i=1;i<23;i++)if(t<i*3600*1e3)return a.format(-1*i,"hour");for(let i=1;i<4;i++)if(t<i*24*3600*1e3)return a.format(-1*i,"day");return t<7*24*3600*1e3?a.format(-1,"week"):c(r,e,n)}function S(r,e,n){let t,{date:a=new Date}=e,{options:i=f}=e,{locale:s=void 0}=e,{relative:l=!1}=e;return r.$$set=o=>{"date"in o&&n(1,a=o.date),"options"in o&&n(2,i=o.options),"locale"in o&&n(3,s=o.locale),"relative"in o&&n(4,l=o.relative)},r.$$.update=()=>{r.$$.dirty&30&&n(0,t=l?R(a,s,i):c(a,s,i))},[t,a,i,s,l]}class q extends h{constructor(e){super();D(this,e,S,F,w,{date:1,options:2,locale:3,relative:4})}}export{q as D};
