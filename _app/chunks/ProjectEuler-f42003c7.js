import{S as W,i as Y,s as Z,H as D,e as k,t as F,k as $,c as j,a as A,g as M,d as g,n as O,b as R,f as q,E,h as P,x as L,j as y,m as x,o as ee,u as H,v as te,r as G,w as J,F as le,a5 as se,I as K,J as N,K as X,G as oe,X as ne}from"./vendor-d52601ec.js";import{s as C}from"./katex.min-82fbe678.js";import"./i18n-ee1672a9.js";import"./timeline.module-933e31ac.js";import{L as ae}from"./Link-e4135475.js";function z(n,e,t){const a=n.slice();return a[5]=e[t].label,a[6]=e[t].href,a}const re=n=>({}),Q=n=>({class:C.problem});function U(n){let e,t,a=n[2]("message.reference-list")+"",r,i,c,b,m,p=n[1],f=[];for(let l=0;l<p.length;l+=1)f[l]=V(z(n,p,l));const T=l=>H(f[l],1,1,()=>{f[l]=null});return{c(){e=k("footer"),t=k("h2"),r=F(a),i=$(),c=k("ol");for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){e=j(l,"FOOTER",{class:!0});var _=A(e);t=j(_,"H2",{});var s=A(t);r=M(s,a),s.forEach(g),i=O(_),c=j(_,"OL",{});var v=A(c);for(let h=0;h<f.length;h+=1)f[h].l(v);v.forEach(g),_.forEach(g),this.h()},h(){R(e,"class",b=C.footer)},m(l,_){q(l,e,_),E(e,t),E(t,r),E(e,i),E(e,c);for(let s=0;s<f.length;s+=1)f[s].m(c,null);m=!0},p(l,_){if((!m||_&4)&&a!==(a=l[2]("message.reference-list")+"")&&P(r,a),_&2){p=l[1];let s;for(s=0;s<p.length;s+=1){const v=z(l,p,s);f[s]?(f[s].p(v,_),L(f[s],1)):(f[s]=V(v),f[s].c(),L(f[s],1),f[s].m(c,null))}for(G(),s=p.length;s<f.length;s+=1)T(s);J()}},i(l){if(!m){for(let _=0;_<p.length;_+=1)L(f[_]);m=!0}},o(l){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)H(f[_]);m=!1},d(l){l&&g(e),le(f,l)}}}function fe(n){let e=n[5]+"",t;return{c(){t=F(e)},l(a){t=M(a,e)},m(a,r){q(a,t,r)},p(a,r){r&2&&e!==(e=a[5]+"")&&P(t,e)},d(a){a&&g(t)}}}function V(n){let e,t,a,r;return t=new ae({props:{href:n[6],$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){e=k("li"),y(t.$$.fragment),a=$()},l(i){e=j(i,"LI",{});var c=A(e);x(t.$$.fragment,c),a=O(c),c.forEach(g)},m(i,c){q(i,e,c),ee(t,e,null),E(e,a),r=!0},p(i,c){const b={};c&2&&(b.href=i[6]),c&18&&(b.$$scope={dirty:c,ctx:i}),t.$set(b)},i(i){r||(L(t.$$.fragment,i),r=!0)},o(i){H(t.$$.fragment,i),r=!1},d(i){i&&g(e),te(t)}}}function ie(n){let e,t,a,r,i,c,b,m,p,f,T,l;document.title=e=n[0];const _=n[3].problem,s=D(_,n,n[4],Q),v=n[3].default,h=D(v,n,n[4],null);let u=n[1].length&&U(n);return{c(){t=k("meta"),a=$(),r=k("article"),i=k("header"),c=k("h1"),b=F(n[0]),m=$(),p=k("main"),s&&s.c(),f=$(),h&&h.c(),T=$(),u&&u.c(),this.h()},l(o){const d=se('[data-svelte="svelte-1fi5dar"]',document.head);t=j(d,"META",{property:!0,content:!0}),d.forEach(g),a=O(o),r=j(o,"ARTICLE",{class:!0});var I=A(r);i=j(I,"HEADER",{class:!0});var S=A(i);c=j(S,"H1",{});var B=A(c);b=M(B,n[0]),B.forEach(g),S.forEach(g),m=O(I),p=j(I,"MAIN",{});var w=A(p);s&&s.l(w),f=O(w),h&&h.l(w),w.forEach(g),T=O(I),u&&u.l(I),I.forEach(g),this.h()},h(){R(t,"property","og:title"),R(t,"content",n[0]),R(i,"class",C.header),R(r,"class",C.article)},m(o,d){E(document.head,t),q(o,a,d),q(o,r,d),E(r,i),E(i,c),E(c,b),E(r,m),E(r,p),s&&s.m(p,null),E(p,f),h&&h.m(p,null),E(r,T),u&&u.m(r,null),l=!0},p(o,[d]){(!l||d&1)&&e!==(e=o[0])&&(document.title=e),(!l||d&1)&&R(t,"content",o[0]),(!l||d&1)&&P(b,o[0]),s&&s.p&&(!l||d&16)&&K(s,_,o,o[4],l?X(_,o[4],d,re):N(o[4]),Q),h&&h.p&&(!l||d&16)&&K(h,v,o,o[4],l?X(v,o[4],d,null):N(o[4]),null),o[1].length?u?(u.p(o,d),d&2&&L(u,1)):(u=U(o),u.c(),L(u,1),u.m(r,null)):u&&(G(),H(u,1,1,()=>{u=null}),J())},i(o){l||(L(s,o),L(h,o),L(u),l=!0)},o(o){H(s,o),H(h,o),H(u),l=!1},d(o){g(t),o&&g(a),o&&g(r),s&&s.d(o),h&&h.d(o),u&&u.d()}}}function ce(n,e,t){let a;oe(n,ne,m=>t(2,a=m));let{$$slots:r={},$$scope:i}=e,{title:c}=e,{references:b=[]}=e;return n.$$set=m=>{"title"in m&&t(0,c=m.title),"references"in m&&t(1,b=m.references),"$$scope"in m&&t(4,i=m.$$scope)},[c,b,a,r,i]}class de extends W{constructor(e){super();Y(this,e,ce,ie,Z,{title:0,references:1})}}export{de as P};
