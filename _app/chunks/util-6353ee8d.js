import{S as c,i as h,s as D,e as w,t as y,c as _,a as g,g as v,d as f,b as u,f as T,E,R as s}from"./vendor-d52601ec.js";import"./timeline.module-432d345e.js";function I(r){let e,n;return{c(){e=w("time"),n=y(r[0]),this.h()},l(a){e=_(a,"TIME",{datetime:!0,class:!0});var t=g(e);n=v(t,r[0]),t.forEach(f),this.h()},h(){u(e,"datetime",r[0]),u(e,"class","svelte-1ugyifs")},m(a,t){T(a,e,t),E(e,n)},p:s,i:s,o:s,d(a){a&&f(e)}}}function d(r=new Date,e,n){return new Intl.DateTimeFormat(e,n!=null?n:{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).format(new Date(r))}function R(r=new Date,e){const n=Date.now()-new Date(r).getTime(),a=new Intl.RelativeTimeFormat(e);for(let t=1;t<23;t++)if(n<t*3600*1e3)return a.format(-1*t,"hour");for(let t=1;t<4;t++)if(n<t*24*3600*1e3)return a.format(-1*t,"day");return n<7*24*3600*1e3?a.format(-1,"week"):d(r,e)}function j(r,e,n){let{date:a=new Date}=e,{options:t=void 0}=e,{locale:o=void 0}=e,{relative:l=!1}=e,m=l?R(a,o):d(a,o,t);return r.$$set=i=>{"date"in i&&n(1,a=i.date),"options"in i&&n(2,t=i.options),"locale"in i&&n(3,o=i.locale),"relative"in i&&n(4,l=i.relative)},[m,a,t,o,l]}class S extends c{constructor(e){super();h(this,e,j,I,D,{date:1,options:2,locale:3,relative:4})}}function b(r,e){return r.reduce((n,a)=>{const t=e(a);return n[t]||(n[t]=[]),n[t].push(a),n},{})}export{S as D,b as g};
