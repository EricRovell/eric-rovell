import{S as B,i as F,s as J,D as T,e as E,k as D,t as O,a5 as Q,c as k,d as n,n as I,a as g,g as U,b as h,L as v,f as j,h as V,G as z,H as G,I as K,x as M,u as P,N as W}from"./vendor-00375881.js";import{t as X}from"./theme-fc6b43bb.js";import{s as R}from"./katex.min-184f10e4.js";const Y=t=>({}),w=t=>({});function Z(t){let u,r,f,c,p,_,d,i,y,m,b,A,o;document.title=u=t[0];const H=t[4].problem,l=T(H,t,t[3],w),q=t[4].default,a=T(q,t,t[3],null);return{c(){r=E("meta"),f=E("link"),p=D(),_=E("header"),d=E("h1"),i=O(t[0]),y=D(),m=E("article"),b=E("header"),l&&l.c(),A=D(),a&&a.c(),this.h()},l(e){const s=Q('[data-svelte="svelte-16zstqs"]',document.head);r=k(s,"META",{property:!0,content:!0}),f=k(s,"LINK",{rel:!0,href:!0}),s.forEach(n),p=I(e),_=k(e,"HEADER",{class:!0});var C=g(_);d=k(C,"H1",{});var N=g(d);i=U(N,t[0]),N.forEach(n),C.forEach(n),y=I(e),m=k(e,"ARTICLE",{class:!0});var L=g(m);b=k(L,"HEADER",{class:!0});var S=g(b);l&&l.l(S),S.forEach(n),A=I(L),a&&a.l(L),L.forEach(n),this.h()},h(){h(r,"property","og:title"),h(r,"content",t[0]),h(f,"rel","stylesheet"),h(f,"href",c=`/styles/prism-${t[1]}.css`),h(_,"class",R.header),h(b,"class",R.problem),h(m,"class",R.article)},m(e,s){v(document.head,r),v(document.head,f),j(e,p,s),j(e,_,s),v(_,d),v(d,i),j(e,y,s),j(e,m,s),v(m,b),l&&l.m(b,null),v(m,A),a&&a.m(m,null),o=!0},p(e,[s]){(!o||s&1)&&u!==(u=e[0])&&(document.title=u),(!o||s&1)&&h(r,"content",e[0]),(!o||s&2&&c!==(c=`/styles/prism-${e[1]}.css`))&&h(f,"href",c),(!o||s&1)&&V(i,e[0]),l&&l.p&&(!o||s&8)&&z(l,H,e,e[3],o?K(H,e[3],s,Y):G(e[3]),w),a&&a.p&&(!o||s&8)&&z(a,q,e,e[3],o?K(q,e[3],s,null):G(e[3]),null)},i(e){o||(M(l,e),M(a,e),o=!0)},o(e){P(l,e),P(a,e),o=!1},d(e){n(r),n(f),e&&n(p),e&&n(_),e&&n(y),e&&n(m),l&&l.d(e),a&&a.d(e)}}}function $(t,u,r){let f,c;W(t,X,i=>r(2,c=i));let{$$slots:p={},$$scope:_}=u,{title:d}=u;return t.$$set=i=>{"title"in i&&r(0,d=i.title),"$$scope"in i&&r(3,_=i.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&r(1,f=c==="dark"?"dark":"light")},[d,f,c,_,p]}class se extends B{constructor(u){super();F(this,u,$,Z,J,{title:0})}}export{se as L};
