import{S as s,i as t,s as e,D as a,e as n,k as l,t as r,Y as i,c,d as o,n as h,a as d,g as u,b as $,E as m,f as p,h as f,F as y,G as E,H as v,x as g,u as k,N as x,Z as A,l as H,_ as M,R,$ as T}from"./vendor-c811b0ff.js";import{t as b}from"./theme-a188ce45.js";function j(s){let t,e,x,A,H,M,R,T,b,j,w;document.title=t=s[0];const D=s[4].default,I=a(D,s,s[3],null);return{c(){e=n("meta"),x=n("link"),H=l(),M=n("header"),R=n("h1"),T=r(s[0]),b=l(),j=n("article"),I&&I.c(),this.h()},l(t){const a=i('[data-svelte="svelte-16zstqs"]',document.head);e=c(a,"META",{property:!0,content:!0}),x=c(a,"LINK",{rel:!0,href:!0}),a.forEach(o),H=h(t),M=c(t,"HEADER",{class:!0});var n=d(M);R=c(n,"H1",{class:!0});var l=d(R);T=u(l,s[0]),l.forEach(o),n.forEach(o),b=h(t),j=c(t,"ARTICLE",{class:!0});var r=d(j);I&&I.l(r),r.forEach(o),this.h()},h(){$(e,"property","og:title"),$(e,"content",s[0]),$(x,"rel","stylesheet"),$(x,"href",A=`/styles/prism-${s[1]}.css`),$(R,"class","svelte-1y6a74n"),$(M,"class","svelte-1y6a74n"),$(j,"class","svelte-1y6a74n")},m(s,t){m(document.head,e),m(document.head,x),p(s,H,t),p(s,M,t),m(M,R),m(R,T),p(s,b,t),p(s,j,t),I&&I.m(j,null),w=!0},p(s,[a]){(!w||1&a)&&t!==(t=s[0])&&(document.title=t),(!w||1&a)&&$(e,"content",s[0]),(!w||2&a&&A!==(A=`/styles/prism-${s[1]}.css`))&&$(x,"href",A),(!w||1&a)&&f(T,s[0]),I&&I.p&&(!w||8&a)&&y(I,D,s,s[3],w?v(D,s[3],a,null):E(s[3]),null)},i(s){w||(g(I,s),w=!0)},o(s){k(I,s),w=!1},d(s){o(e),o(x),s&&o(H),s&&o(M),s&&o(b),s&&o(j),I&&I.d(s)}}}function w(s,t,e){let a,n;x(s,b,(s=>e(2,n=s)));let{$$slots:l={},$$scope:r}=t,{title:i}=t;return s.$$set=s=>{"title"in s&&e(0,i=s.title),"$$scope"in s&&e(3,r=s.$$scope)},s.$$.update=()=>{4&s.$$.dirty&&e(1,a="dark"===n?"dark":"light")},[i,a,n,r,l]}class D extends s{constructor(s){super(),t(this,s,w,j,e,{title:0})}}function I(s){let t,e;return{c(){t=new A,e=H(),this.h()},l(s){t=M(s),e=H(),this.h()},h(){t.a=e},m(a,n){t.m(s[0],a,n),p(a,e,n)},p(s,[e]){1&e&&t.p(s[0])},i:R,o:R,d(s){s&&o(e),s&&t.d()}}}function L(s,t,e){let a,{math:n}=t,{inline:l=!1}=t;return s.$$set=s=>{"math"in s&&e(1,n=s.math),"inline"in s&&e(2,l=s.inline)},s.$$.update=()=>{6&s.$$.dirty&&e(0,a=T.renderToString(n,{throwOnError:!1,displayMode:!l}))},[a,n,l]}class N extends s{constructor(s){super(),t(this,s,L,I,e,{math:1,inline:2})}}export{D as B,N as M};
