import{S as q,i as C,s as L,M as O,C as b,e as P,c as S,a as y,d as c,_ as B,G as h,g as z,N as A,O as E,P as G,z as M,q as N,o as D,a0 as j,a1 as F}from"./vendor-bff07850.js";import"./timeline.module-cb7c36d6.js";function H(l){let t,a,s;const o=l[10].default,n=O(o,l,l[9],null);let u=[{href:l[1]},{target:l[4]},{rel:l[3]},{title:l[2]},l[5],{tabindex:a=l[0]?-1:void 0}],f={};for(let e=0;e<u.length;e+=1)f=b(f,u[e]);return{c(){t=P("a"),n&&n.c(),this.h()},l(e){t=S(e,"A",{href:!0,target:!0,rel:!0,title:!0,tabindex:!0});var i=y(t);n&&n.l(i),i.forEach(c),this.h()},h(){B(t,f),h(t,"disabled",l[0]),h(t,"svelte-1hkyx4j",!0)},m(e,i){z(e,t,i),n&&n.m(t,null),s=!0},p(e,[i]){n&&n.p&&(!s||i&512)&&A(n,o,e,e[9],s?G(o,e[9],i,null):E(e[9]),null),B(t,f=M(u,[(!s||i&2)&&{href:e[1]},(!s||i&16)&&{target:e[4]},(!s||i&8)&&{rel:e[3]},(!s||i&4)&&{title:e[2]},i&32&&e[5],(!s||i&1&&a!==(a=e[0]?-1:void 0))&&{tabindex:a}])),h(t,"disabled",e[0]),h(t,"svelte-1hkyx4j",!0)},i(e){s||(N(n,e),s=!0)},o(e){D(n,e),s=!1},d(e){e&&c(t),n&&n.d(e)}}}function I(l,t,a){let s,o,n;const u=["href","targetBlank","nofollow","disabled","title"];let f=j(t,u),{$$slots:e={},$$scope:i}=t,{href:d}=t,{targetBlank:g=!1}=t,{nofollow:m=!1}=t,{disabled:_=!1}=t,{title:k=void 0}=t;return l.$$set=r=>{t=b(b({},t),F(r)),a(5,f=j(t,u)),"href"in r&&a(1,d=r.href),"targetBlank"in r&&a(6,g=r.targetBlank),"nofollow"in r&&a(7,m=r.nofollow),"disabled"in r&&a(0,_=r.disabled),"title"in r&&a(2,k=r.title),"$$scope"in r&&a(9,i=r.$$scope)},l.$$.update=()=>{l.$$.dirty&3&&a(0,_=d?_:!0),l.$$.dirty&2&&a(8,s=d.indexOf("://")!==-1),l.$$.dirty&320&&a(4,o=g||s?"_blank":void 0),l.$$.dirty&384&&a(3,n=`${s?"noopener noreferrer":""}${m?"nofollow":""}`)},[_,d,k,n,o,f,g,m,s,i,e]}class Q extends q{constructor(t){super();C(this,t,I,H,L,{href:1,targetBlank:6,nofollow:7,disabled:0,title:2})}}export{Q as L};