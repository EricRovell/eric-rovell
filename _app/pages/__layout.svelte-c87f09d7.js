import{S as e,i as t,s,D as r,e as n,c as l,a as c,d as a,b as o,f as i,E as $,F as u,G as f,H as p,x as h,u as m,I as d,J as g,y as v,K as y,L as b,M as x,N as w,O as E,P as z,k,t as S,n as A,g as C,Q as j,h as I,R as O,T as N,r as P,w as T,U as B,j as L,m as D,o as M,v as _}from"../chunks/vendor-c811b0ff.js";import{p as q,a as H,b as R,c as F,d as G}from"../chunks/paths-bc636671.js";import{I as U,i as V}from"../chunks/default-8f81cb3d.js";/* empty css                                                       */import{t as Y}from"../chunks/theme-a188ce45.js";import"../chunks/paths-28a87002.js";function J(e){let t,s,d;const g=e[1].default,v=r(g,e,e[0],null);return{c(){t=n("footer"),s=n("div"),v&&v.c(),this.h()},l(e){t=l(e,"FOOTER",{class:!0});var r=c(t);s=l(r,"DIV",{class:!0});var n=c(s);v&&v.l(n),n.forEach(a),r.forEach(a),this.h()},h(){o(s,"class","wrapper svelte-r1i9oz"),o(t,"class","svelte-r1i9oz")},m(e,r){i(e,t,r),$(t,s),v&&v.m(s,null),d=!0},p(e,[t]){v&&v.p&&(!d||1&t)&&u(v,g,e,e[0],d?p(g,e[0],t,null):f(e[0]),null)},i(e){d||(h(v,e),d=!0)},o(e){m(v,e),d=!1},d(e){e&&a(t),v&&v.d(e)}}}function K(e,t,s){let{$$slots:r={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&s(0,n=e.$$scope)},[n,r]}class Q extends e{constructor(e){super(),t(this,e,K,J,s,{})}}const W={subscribe:e=>(()=>{const e=d("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function X(e){let t,s,d;const v=e[4].default,y=r(v,e,e[3],null);return{c(){t=n("nav"),s=n("ul"),y&&y.c(),this.h()},l(e){t=l(e,"NAV",{class:!0});var r=c(t);s=l(r,"UL",{class:!0});var n=c(s);y&&y.l(n),n.forEach(a),r.forEach(a),this.h()},h(){o(s,"class","svelte-l9ya3k"),g(s,"equal-spacing","equal"===e[2]),o(t,"class","svelte-l9ya3k"),g(t,"border",e[1]),g(t,"wide",e[0])},m(e,r){i(e,t,r),$(t,s),y&&y.m(s,null),d=!0},p(e,[r]){y&&y.p&&(!d||8&r)&&u(y,v,e,e[3],d?p(v,e[3],r,null):f(e[3]),null),4&r&&g(s,"equal-spacing","equal"===e[2]),2&r&&g(t,"border",e[1]),1&r&&g(t,"wide",e[0])},i(e){d||(h(y,e),d=!0)},o(e){m(y,e),d=!1},d(e){e&&a(t),y&&y.d(e)}}}function Z(e,t,s){let{$$slots:r={},$$scope:n}=t,{wide:l=!1}=t,{border:c=!1}=t,{spacing:a}=t;return v("page",W),e.$$set=e=>{"wide"in e&&s(0,l=e.wide),"border"in e&&s(1,c=e.border),"spacing"in e&&s(2,a=e.spacing),"$$scope"in e&&s(3,n=e.$$scope)},[l,c,a,n,r]}class ee extends e{constructor(e){super(),t(this,e,Z,X,s,{wide:0,border:1,spacing:2})}}function te(e,{pattern:t,current:s}){const r=e.getAttribute("href");function n({pattern:t,current:s}){t&&t instanceof RegExp?t.test(s)?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):t||s!==r?e.removeAttribute("aria-current"):e.setAttribute("aria-current","page")}return n({pattern:t,current:s}),{update:n}}function se(e){let t,s,d,g,v,w,E;const z=e[9].default,k=r(z,e,e[8],null);return{c(){t=n("li"),s=n("a"),k&&k.c(),this.h()},l(e){t=l(e,"LI",{class:!0});var r=c(t);s=l(r,"A",{class:!0,style:!0,href:!0,"sapper:prefetch":!0});var n=c(s);k&&k.l(n),n.forEach(a),r.forEach(a),this.h()},h(){o(s,"class",d="menu-item underline-"+e[3]+" svelte-13l374e"),y(s,"--menu-item-decoration-color","var(--color-"+e[4]+")"),y(s,"--menu-item-decoration-size",e[5]),o(s,"href",e[0]),o(s,"sapper:prefetch",e[1]),o(t,"class","svelte-13l374e")},m(r,n){i(r,t,n),$(t,s),k&&k.m(s,null),v=!0,w||(E=b(g=te.call(null,s,{current:e[6].path,pattern:e[2]})),w=!0)},p(e,[t]){k&&k.p&&(!v||256&t)&&u(k,z,e,e[8],v?p(z,e[8],t,null):f(e[8]),null),(!v||8&t&&d!==(d="menu-item underline-"+e[3]+" svelte-13l374e"))&&o(s,"class",d),(!v||16&t)&&y(s,"--menu-item-decoration-color","var(--color-"+e[4]+")"),(!v||32&t)&&y(s,"--menu-item-decoration-size",e[5]),(!v||1&t)&&o(s,"href",e[0]),(!v||2&t)&&o(s,"sapper:prefetch",e[1]),g&&x(g.update)&&68&t&&g.update.call(null,{current:e[6].path,pattern:e[2]})},i(e){v||(h(k,e),v=!0)},o(e){m(k,e),v=!1},d(e){e&&a(t),k&&k.d(e),w=!1,E()}}}function re(e,t,s){let r,{$$slots:n={},$$scope:l}=t,{href:c}=t,{prefetch:a}=t,{pattern:o=null}=t,{decorationPosition:i="bottom"}=t,{decorationColor:$="primary"}=t,{decorationSize:u="0.2em"}=t;const f=d("page");return w(e,f,(e=>s(6,r=e))),e.$$set=e=>{"href"in e&&s(0,c=e.href),"prefetch"in e&&s(1,a=e.prefetch),"pattern"in e&&s(2,o=e.pattern),"decorationPosition"in e&&s(3,i=e.decorationPosition),"decorationColor"in e&&s(4,$=e.decorationColor),"decorationSize"in e&&s(5,u=e.decorationSize),"$$scope"in e&&s(8,l=e.$$scope)},[c,a,o,i,$,u,r,f,l,n]}class ne extends e{constructor(e){super(),t(this,e,re,se,s,{href:0,prefetch:1,pattern:2,decorationPosition:3,decorationColor:4,decorationSize:5})}}function le(e,t,s){const r=e.slice();return r[7]=t[s].x,r[8]=t[s].y,r}function ce(e){let t,s,r;return{c(){t=E("circle"),this.h()},l(e){t=z(e,"circle",{cx:!0,cy:!0,r:!0,class:!0}),c(t).forEach(a),this.h()},h(){o(t,"cx",s=ie+e[7]),o(t,"cy",r=$e+e[8]),o(t,"r",e[3]),o(t,"class","svelte-884vdz")},m(e,s){i(e,t,s)},p(e,n){48&n&&s!==(s=ie+e[7])&&o(t,"cx",s),48&n&&r!==(r=$e+e[8])&&o(t,"cy",r),8&n&&o(t,"r",e[3])},d(e){e&&a(t)}}}function ae(e){let t,s,r,u,f,p,h,m,d,g,v,b,x,w,P,T,B=oe(e[5],e[4]),L=[];for(let n=0;n<B.length;n+=1)L[n]=ce(le(e,B,n));return{c(){t=n("label"),s=n("input"),u=k(),f=E("svg"),p=E("title"),h=S(e[0]),m=E("defs"),d=E("mask"),g=E("rect"),v=E("circle"),b=E("circle"),x=E("g");for(let e=0;e<L.length;e+=1)L[e].c();this.h()},l(r){t=l(r,"LABEL",{style:!0,class:!0});var n=c(t);s=l(n,"INPUT",{type:!0,class:!0}),u=A(n),f=z(n,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=c(f);p=z(o,"title",{});var i=c(p);h=C(i,e[0]),i.forEach(a),m=z(o,"defs",{});var $=c(m);d=z($,"mask",{id:!0});var y=c(d);g=z(y,"rect",{fill:!0,x:!0,y:!0,width:!0,height:!0}),c(g).forEach(a),v=z(y,"circle",{fill:!0,cx:!0,cy:!0,r:!0,class:!0}),c(v).forEach(a),y.forEach(a),$.forEach(a),b=z(o,"circle",{mask:!0,cx:!0,cy:!0,r:!0,style:!0,class:!0}),c(b).forEach(a),x=z(o,"g",{class:!0});var w=c(x);for(let e=0;e<L.length;e+=1)L[e].l(w);w.forEach(a),o.forEach(a),n.forEach(a),this.h()},h(){o(s,"type","checkbox"),s.checked=r="light"===e[6],o(s,"class","svelte-884vdz"),o(g,"fill","white"),o(g,"x","0"),o(g,"y","0"),o(g,"width","100"),o(g,"height","100"),o(v,"fill","black"),o(v,"cx","65"),o(v,"cy","40"),o(v,"r","25"),o(v,"class","svelte-884vdz"),o(d,"id","theme-toggle-mask"),o(b,"mask","url(#theme-toggle-mask)"),o(b,"cx","50"),o(b,"cy","50"),o(b,"r",e[2]),y(b,"stroke-miterlimit","10"),y(b,"stroke-width","8px"),o(b,"class","svelte-884vdz"),o(x,"class","rays svelte-884vdz"),o(f,"xmlns","http://www.w3.org/2000/svg"),o(f,"viewBox","0 0 100 100"),o(f,"class","svelte-884vdz"),o(t,"style",w=e[1]?`--toggle-size: ${e[1]}`:""),o(t,"class","svelte-884vdz")},m(e,r){i(e,t,r),$(t,s),$(t,u),$(t,f),$(f,p),$(p,h),$(f,m),$(m,d),$(d,g),$(d,v),$(f,b),$(f,x);for(let t=0;t<L.length;t+=1)L[t].m(x,null);P||(T=j(s,"change",Y.change),P=!0)},p(e,[n]){if(64&n&&r!==(r="light"===e[6])&&(s.checked=r),1&n&&I(h,e[0]),4&n&&o(b,"r",e[2]),56&n){let t;for(B=oe(e[5],e[4]),t=0;t<B.length;t+=1){const s=le(e,B,t);L[t]?L[t].p(s,n):(L[t]=ce(s),L[t].c(),L[t].m(x,null))}for(;t<L.length;t+=1)L[t].d(1);L.length=B.length}2&n&&w!==(w=e[1]?`--toggle-size: ${e[1]}`:"")&&o(t,"style",w)},i:O,o:O,d(e){e&&a(t),N(L,e),P=!1,T()}}}function oe(e,t){const s=new Array(e);for(let r=0;r<e;r++)s[r]={x:t*Math.cos(2*Math.PI*r/e),y:t*Math.sin(2*Math.PI*r/e)};return s}const ie=50,$e=50;function ue(e,t,s){let r;w(e,Y,(e=>s(6,r=e)));let{title:n="Click to switch theme"}=t,{size:l}=t,{sunSize:c=25}=t,{raySize:a=5}=t,{rayOffset:o=40}=t,{rays:i=8}=t;return e.$$set=e=>{"title"in e&&s(0,n=e.title),"size"in e&&s(1,l=e.size),"sunSize"in e&&s(2,c=e.sunSize),"raySize"in e&&s(3,a=e.raySize),"rayOffset"in e&&s(4,o=e.rayOffset),"rays"in e&&s(5,i=e.rays)},e.$$.update=()=>{64&e.$$.dirty&&globalThis.window&&document.documentElement.setAttribute("theme",r)},[n,l,c,a,o,i,r]}class fe extends e{constructor(e){super(),t(this,e,ue,ae,s,{title:0,size:1,sunSize:2,raySize:3,rayOffset:4,rays:5})}}const pe=e=>({}),he=e=>({}),me=e=>({}),de=e=>({}),ge=e=>({}),ve=e=>({});function ye(e){let t,s;const $=e[2].logo,d=r($,e,e[1],ve);return{c(){t=n("section"),d&&d.c(),this.h()},l(e){t=l(e,"SECTION",{label:!0,class:!0});var s=c(t);d&&d.l(s),s.forEach(a),this.h()},h(){o(t,"label","logo"),o(t,"class","svelte-j0mwh5")},m(e,r){i(e,t,r),d&&d.m(t,null),s=!0},p(e,t){d&&d.p&&(!s||2&t)&&u(d,$,e,e[1],s?p($,e[1],t,ge):f(e[1]),ve)},i(e){s||(h(d,e),s=!0)},o(e){m(d,e),s=!1},d(e){e&&a(t),d&&d.d(e)}}}function be(e){let t,s;const $=e[2].navigation,d=r($,e,e[1],de);return{c(){t=n("section"),d&&d.c(),this.h()},l(e){t=l(e,"SECTION",{label:!0,class:!0});var s=c(t);d&&d.l(s),s.forEach(a),this.h()},h(){o(t,"label","navigation"),o(t,"class","svelte-j0mwh5")},m(e,r){i(e,t,r),d&&d.m(t,null),s=!0},p(e,t){d&&d.p&&(!s||2&t)&&u(d,$,e,e[1],s?p($,e[1],t,me):f(e[1]),de)},i(e){s||(h(d,e),s=!0)},o(e){m(d,e),s=!1},d(e){e&&a(t),d&&d.d(e)}}}function xe(e){let t,s;const $=e[2].controls,d=r($,e,e[1],he);return{c(){t=n("section"),d&&d.c(),this.h()},l(e){t=l(e,"SECTION",{label:!0,class:!0});var s=c(t);d&&d.l(s),s.forEach(a),this.h()},h(){o(t,"label","controls"),o(t,"class","svelte-j0mwh5")},m(e,r){i(e,t,r),d&&d.m(t,null),s=!0},p(e,t){d&&d.p&&(!s||2&t)&&u(d,$,e,e[1],s?p($,e[1],t,pe):f(e[1]),he)},i(e){s||(h(d,e),s=!0)},o(e){m(d,e),s=!1},d(e){e&&a(t),d&&d.d(e)}}}function we(e){let t,s,r,u,f=e[0].logo&&ye(e),p=e[0].navigation&&be(e),d=e[0].controls&&xe(e);return{c(){t=n("header"),f&&f.c(),s=k(),p&&p.c(),r=k(),d&&d.c(),this.h()},l(e){t=l(e,"HEADER",{class:!0});var n=c(t);f&&f.l(n),s=A(n),p&&p.l(n),r=A(n),d&&d.l(n),n.forEach(a),this.h()},h(){o(t,"class","svelte-j0mwh5")},m(e,n){i(e,t,n),f&&f.m(t,null),$(t,s),p&&p.m(t,null),$(t,r),d&&d.m(t,null),u=!0},p(e,[n]){e[0].logo?f?(f.p(e,n),1&n&&h(f,1)):(f=ye(e),f.c(),h(f,1),f.m(t,s)):f&&(P(),m(f,1,1,(()=>{f=null})),T()),e[0].navigation?p?(p.p(e,n),1&n&&h(p,1)):(p=be(e),p.c(),h(p,1),p.m(t,r)):p&&(P(),m(p,1,1,(()=>{p=null})),T()),e[0].controls?d?(d.p(e,n),1&n&&h(d,1)):(d=xe(e),d.c(),h(d,1),d.m(t,null)):d&&(P(),m(d,1,1,(()=>{d=null})),T())},i(e){u||(h(f),h(p),h(d),u=!0)},o(e){m(f),m(p),m(d),u=!1},d(e){e&&a(t),f&&f.d(),p&&p.d(),d&&d.d()}}}function Ee(e,t,s){let{$$slots:r={},$$scope:n}=t;const l=B(r);return e.$$set=e=>{"$$scope"in e&&s(1,n=e.$$scope)},[l,n,r]}class ze extends e{constructor(e){super(),t(this,e,Ee,we,s,{})}}function ke(e){let t,s,r,u,f,p;return s=new U({props:{path:V}}),{c(){t=n("a"),L(s.$$.fragment),r=k(),u=n("span"),f=S("eric/rovell"),this.h()},l(e){t=l(e,"A",{class:!0,href:!0,slot:!0});var n=c(t);D(s.$$.fragment,n),r=A(n),u=l(n,"SPAN",{});var o=c(u);f=C(o,"eric/rovell"),o.forEach(a),n.forEach(a),this.h()},h(){o(t,"class","logo"),o(t,"href",q),o(t,"slot","logo")},m(e,n){i(e,t,n),M(s,t,null),$(t,r),$(t,u),$(u,f),p=!0},p:O,i(e){p||(h(s.$$.fragment,e),p=!0)},o(e){m(s.$$.fragment,e),p=!1},d(e){e&&a(t),_(s)}}}function Se(e){let t;return{c(){t=S("Home")},l(e){t=C(e,"Home")},m(e,s){i(e,t,s)},d(e){e&&a(t)}}}function Ae(e){let t;return{c(){t=S("Blog")},l(e){t=C(e,"Blog")},m(e,s){i(e,t,s)},d(e){e&&a(t)}}}function Ce(e){let t;return{c(){t=S("Gallery")},l(e){t=C(e,"Gallery")},m(e,s){i(e,t,s)},d(e){e&&a(t)}}}function je(e){let t;return{c(){t=S("Projects")},l(e){t=C(e,"Projects")},m(e,s){i(e,t,s)},d(e){e&&a(t)}}}function Ie(e){let t;return{c(){t=S("About")},l(e){t=C(e,"About")},m(e,s){i(e,t,s)},d(e){e&&a(t)}}}function Oe(e){let t,s,r,n,l,c,o,$,u,f;return t=new ne({props:{href:q,$$slots:{default:[Se]},$$scope:{ctx:e}}}),r=new ne({props:{href:H,pattern:/\/blog|\/content/,$$slots:{default:[Ae]},$$scope:{ctx:e}}}),l=new ne({props:{href:R,pattern:/\/gallery/,$$slots:{default:[Ce]},$$scope:{ctx:e}}}),o=new ne({props:{href:F,$$slots:{default:[je]},$$scope:{ctx:e}}}),u=new ne({props:{href:G,$$slots:{default:[Ie]},$$scope:{ctx:e}}}),{c(){L(t.$$.fragment),s=k(),L(r.$$.fragment),n=k(),L(l.$$.fragment),c=k(),L(o.$$.fragment),$=k(),L(u.$$.fragment)},l(e){D(t.$$.fragment,e),s=A(e),D(r.$$.fragment,e),n=A(e),D(l.$$.fragment,e),c=A(e),D(o.$$.fragment,e),$=A(e),D(u.$$.fragment,e)},m(e,a){M(t,e,a),i(e,s,a),M(r,e,a),i(e,n,a),M(l,e,a),i(e,c,a),M(o,e,a),i(e,$,a),M(u,e,a),f=!0},p(e,s){const n={};2&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n);const c={};2&s&&(c.$$scope={dirty:s,ctx:e}),r.$set(c);const a={};2&s&&(a.$$scope={dirty:s,ctx:e}),l.$set(a);const i={};2&s&&(i.$$scope={dirty:s,ctx:e}),o.$set(i);const $={};2&s&&($.$$scope={dirty:s,ctx:e}),u.$set($)},i(e){f||(h(t.$$.fragment,e),h(r.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),h(u.$$.fragment,e),f=!0)},o(e){m(t.$$.fragment,e),m(r.$$.fragment,e),m(l.$$.fragment,e),m(o.$$.fragment,e),m(u.$$.fragment,e),f=!1},d(e){_(t,e),e&&a(s),_(r,e),e&&a(n),_(l,e),e&&a(c),_(o,e),e&&a($),_(u,e)}}}function Ne(e){let t,s;return t=new ee({props:{$$slots:{default:[Oe]},$$scope:{ctx:e}}}),{c(){L(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){M(t,e,r),s=!0},p(e,s){const r={};2&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Pe(e){let t,s;return t=new fe({props:{size:"30px"}}),{c(){L(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){M(t,e,r),s=!0},p:O,i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Te(e){let t,s,r,u,f=(new Date).getFullYear()+"";return{c(){t=n("section"),s=S("© "),r=S(f),u=S(" eric/rovell, v0.1.0 | CC BY-NC-SA 4.0 Licence."),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=c(t);s=C(n,"© "),r=C(n,f),u=C(n," eric/rovell, v0.1.0 | CC BY-NC-SA 4.0 Licence."),n.forEach(a),this.h()},h(){o(t,"class","copyright svelte-1fl6ap9")},m(e,n){i(e,t,n),$(t,s),$(t,r),$(t,u)},p:O,d(e){e&&a(t)}}}function Be(e){let t,s,d,g,v,y,b;s=new ze({props:{$$slots:{controls:[Pe],navigation:[Ne],logo:[ke]},$$scope:{ctx:e}}});const x=e[0].default,w=r(x,e,e[1],null);return y=new Q({props:{$$slots:{default:[Te]},$$scope:{ctx:e}}}),{c(){t=n("div"),L(s.$$.fragment),d=k(),g=n("section"),w&&w.c(),v=k(),L(y.$$.fragment),this.h()},l(e){t=l(e,"DIV",{id:!0,class:!0});var r=c(t);D(s.$$.fragment,r),d=A(r),g=l(r,"SECTION",{label:!0,class:!0});var n=c(g);w&&w.l(n),n.forEach(a),v=A(r),D(y.$$.fragment,r),r.forEach(a),this.h()},h(){o(g,"label","content"),o(g,"class","content svelte-1fl6ap9"),o(t,"id","app"),o(t,"class","svelte-1fl6ap9")},m(e,r){i(e,t,r),M(s,t,null),$(t,d),$(t,g),w&&w.m(g,null),$(t,v),M(y,t,null),b=!0},p(e,[t]){const r={};2&t&&(r.$$scope={dirty:t,ctx:e}),s.$set(r),w&&w.p&&(!b||2&t)&&u(w,x,e,e[1],b?p(x,e[1],t,null):f(e[1]),null);const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),y.$set(n)},i(e){b||(h(s.$$.fragment,e),h(w,e),h(y.$$.fragment,e),b=!0)},o(e){m(s.$$.fragment,e),m(w,e),m(y.$$.fragment,e),b=!1},d(e){e&&a(t),_(s),w&&w.d(e),_(y)}}}function Le(e,t,s){let{$$slots:r={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&s(1,n=e.$$scope)},[r,n]}class De extends e{constructor(e){super(),t(this,e,Le,Be,s,{})}}function Me(e){let t;const s=e[0].default,n=r(s,e,e[1],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,r){n&&n.p&&(!t||2&r)&&u(n,s,e,e[1],t?p(s,e[1],r,null):f(e[1]),null)},i(e){t||(h(n,e),t=!0)},o(e){m(n,e),t=!1},d(e){n&&n.d(e)}}}function _e(e){let t,s;return t=new De({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}}),{c(){L(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){M(t,e,r),s=!0},p(e,[s]){const r={};2&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function qe(e,t,s){let{$$slots:r={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&s(1,n=e.$$scope)},[r,n]}class He extends e{constructor(e){super(),t(this,e,qe,_e,s,{})}}export{He as default};
