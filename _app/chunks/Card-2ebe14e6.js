import{S as K,i as L,s as U,H as R,e as v,k as j,c as b,a as k,n as C,d,b as E,f as w,E as p,I,J as O,K as S,x as h,j as z,m as B,o as G,u as g,v as M,r as T,w as q,t as N,g as P,h as Q,U as V}from"./vendor-36a9727b.js";import"./timeline.module-f5620689.js";import"./i18n-caeecd5f.js";import{D as W}from"./util-843ea866.js";const X=f=>({}),y=f=>({});function F(f){let e,i,t;const u=f[5].footer,a=R(u,f,f[4],y);let s=f[2]&&J(f);return{c(){e=v("footer"),a&&a.c(),i=j(),s&&s.c(),this.h()},l(l){e=b(l,"FOOTER",{class:!0});var o=k(e);a&&a.l(o),i=C(o),s&&s.l(o),o.forEach(d),this.h()},h(){E(e,"class","svelte-1orxuey")},m(l,o){w(l,e,o),a&&a.m(e,null),p(e,i),s&&s.m(e,null),t=!0},p(l,o){a&&a.p&&(!t||o&16)&&I(a,u,l,l[4],t?S(u,l[4],o,X):O(l[4]),y),l[2]?s?(s.p(l,o),o&4&&h(s,1)):(s=J(l),s.c(),h(s,1),s.m(e,null)):s&&(T(),g(s,1,1,()=>{s=null}),q())},i(l){t||(h(a,l),h(s),t=!0)},o(l){g(a,l),g(s),t=!1},d(l){l&&d(e),a&&a.d(l),s&&s.d()}}}function J(f){let e,i;return e=new W({props:{date:f[2]}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,u){G(e,t,u),i=!0},p(t,u){const a={};u&4&&(a.date=t[2]),e.$set(a)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){g(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Y(f){let e,i,t,u,a,s,l,o;const m=f[5].default,c=R(m,f,f[4],null);let r=(f[3].footer||f[2])&&F(f);return{c(){e=v("article"),i=v("header"),t=v("a"),u=v("h3"),a=N(f[0]),s=j(),c&&c.c(),l=j(),r&&r.c(),this.h()},l(n){e=b(n,"ARTICLE",{class:!0});var _=k(e);i=b(_,"HEADER",{});var A=k(i);t=b(A,"A",{href:!0,class:!0});var D=k(t);u=b(D,"H3",{class:!0});var H=k(u);a=P(H,f[0]),H.forEach(d),D.forEach(d),A.forEach(d),s=C(_),c&&c.l(_),l=C(_),r&&r.l(_),_.forEach(d),this.h()},h(){E(u,"class","svelte-1orxuey"),E(t,"href",f[1]),E(t,"class","svelte-1orxuey"),E(e,"class","svelte-1orxuey")},m(n,_){w(n,e,_),p(e,i),p(i,t),p(t,u),p(u,a),p(e,s),c&&c.m(e,null),p(e,l),r&&r.m(e,null),o=!0},p(n,[_]){(!o||_&1)&&Q(a,n[0]),(!o||_&2)&&E(t,"href",n[1]),c&&c.p&&(!o||_&16)&&I(c,m,n,n[4],o?S(m,n[4],_,null):O(n[4]),null),n[3].footer||n[2]?r?(r.p(n,_),_&12&&h(r,1)):(r=F(n),r.c(),h(r,1),r.m(e,null)):r&&(T(),g(r,1,1,()=>{r=null}),q())},i(n){o||(h(c,n),h(r),o=!0)},o(n){g(c,n),g(r),o=!1},d(n){n&&d(e),c&&c.d(n),r&&r.d()}}}function Z(f,e,i){let{$$slots:t={},$$scope:u}=e;const a=V(t);let{title:s}=e,{href:l=void 0}=e,{date:o=void 0}=e;return f.$$set=m=>{"title"in m&&i(0,s=m.title),"href"in m&&i(1,l=m.href),"date"in m&&i(2,o=m.date),"$$scope"in m&&i(4,u=m.$$scope)},[s,l,o,a,u,t]}class se extends K{constructor(e){super();L(this,e,Z,Y,U,{title:0,href:1,date:2})}}export{se as C};
