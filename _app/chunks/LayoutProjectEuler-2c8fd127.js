import{S as Y,i as w,s as B,D as S,e as E,k as q,t as J,Y as O,c as v,d as n,n as D,a as z,g as Q,b as c,E as k,f as A,h as U,F as T,G as F,H as G,x as K,u as M,N as V}from"./vendor-5f5924ad.js";import{t as W}from"./theme-dba92e55.js";const X="_header_1ludz_1",Z="_article_1ludz_23",$="_problem_1ludz_53";var R={header:X,article:Z,problem:$};const x=t=>({}),P=t=>({});function ee(t){let f,r,_,h,p,u,d,i,y,m,b,H,o;document.title=f=t[0];const L=t[4].problem,l=S(L,t,t[3],P),j=t[4].default,a=S(j,t,t[3],null);return{c(){r=E("meta"),_=E("link"),p=q(),u=E("header"),d=E("h1"),i=J(t[0]),y=q(),m=E("article"),b=E("header"),l&&l.c(),H=q(),a&&a.c(),this.h()},l(e){const s=O('[data-svelte="svelte-16zstqs"]',document.head);r=v(s,"META",{property:!0,content:!0}),_=v(s,"LINK",{rel:!0,href:!0}),s.forEach(n),p=D(e),u=v(e,"HEADER",{class:!0});var C=z(u);d=v(C,"H1",{});var I=z(d);i=Q(I,t[0]),I.forEach(n),C.forEach(n),y=D(e),m=v(e,"ARTICLE",{class:!0});var g=z(m);b=v(g,"HEADER",{class:!0});var N=z(b);l&&l.l(N),N.forEach(n),H=D(g),a&&a.l(g),g.forEach(n),this.h()},h(){c(r,"property","og:title"),c(r,"content",t[0]),c(_,"rel","stylesheet"),c(_,"href",h=`/styles/prism-${t[1]}.css`),c(u,"class",R.header),c(b,"class",R.problem),c(m,"class",R.article)},m(e,s){k(document.head,r),k(document.head,_),A(e,p,s),A(e,u,s),k(u,d),k(d,i),A(e,y,s),A(e,m,s),k(m,b),l&&l.m(b,null),k(m,H),a&&a.m(m,null),o=!0},p(e,[s]){(!o||s&1)&&f!==(f=e[0])&&(document.title=f),(!o||s&1)&&c(r,"content",e[0]),(!o||s&2&&h!==(h=`/styles/prism-${e[1]}.css`))&&c(_,"href",h),(!o||s&1)&&U(i,e[0]),l&&l.p&&(!o||s&8)&&T(l,L,e,e[3],o?G(L,e[3],s,x):F(e[3]),P),a&&a.p&&(!o||s&8)&&T(a,j,e,e[3],o?G(j,e[3],s,null):F(e[3]),null)},i(e){o||(K(l,e),K(a,e),o=!0)},o(e){M(l,e),M(a,e),o=!1},d(e){n(r),n(_),e&&n(p),e&&n(u),e&&n(y),e&&n(m),l&&l.d(e),a&&a.d(e)}}}function te(t,f,r){let _,h;V(t,W,i=>r(2,h=i));let{$$slots:p={},$$scope:u}=f,{title:d}=f;return t.$$set=i=>{"title"in i&&r(0,d=i.title),"$$scope"in i&&r(3,u=i.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&r(1,_=h==="dark"?"dark":"light")},[d,_,h,u,p]}class ae extends Y{constructor(f){super();w(this,f,te,ee,B,{title:0})}}export{ae as L};