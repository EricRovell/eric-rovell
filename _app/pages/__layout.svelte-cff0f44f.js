import{S as P,i as T,s as y,D as B,e as E,c as k,a as p,d as h,b as u,f as b,E as w,F as M,G as R,H as D,x as $,u as d,I as W,J as H,y as ue,K as J,L as me,M as _e,N as X,O as L,P as F,Q as V,R as he,j as S,m as C,o as z,T as ge,v as A,k as j,n as O,r as K,w as Q,U as $e,t as q,g as N}from"../chunks/vendor-5f5924ad.js";import{p as Z,a as de,b as pe,c as ve,d as be}from"../chunks/paths-bc636671.js";import{I as we,i as Ee}from"../chunks/default-2d4a8e8c.js";import"../chunks/timeline.module-4482dd15.js";import{t as x}from"../chunks/theme-dba92e55.js";import"../chunks/paths-28a87002.js";function ke(a){let e,t,l;const n=a[1].default,s=B(n,a,a[0],null);return{c(){e=E("footer"),t=E("div"),s&&s.c(),this.h()},l(r){e=k(r,"FOOTER",{class:!0});var o=p(e);t=k(o,"DIV",{class:!0});var f=p(t);s&&s.l(f),f.forEach(h),o.forEach(h),this.h()},h(){u(t,"class","wrapper svelte-r1i9oz"),u(e,"class","svelte-r1i9oz")},m(r,o){b(r,e,o),w(e,t),s&&s.m(t,null),l=!0},p(r,[o]){s&&s.p&&(!l||o&1)&&M(s,n,r,r[0],l?D(n,r[0],o,null):R(r[0]),null)},i(r){l||($(s,r),l=!0)},o(r){d(s,r),l=!1},d(r){r&&h(e),s&&s.d(r)}}}function Se(a,e,t){let{$$slots:l={},$$scope:n}=e;return a.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,l]}class Ce extends P{constructor(e){super();T(this,e,Se,ke,y,{})}}const ze=()=>{const a=W("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},Ae={subscribe(a){return ze().page.subscribe(a)}};function Ie(a){let e,t,l;const n=a[4].default,s=B(n,a,a[3],null);return{c(){e=E("nav"),t=E("ul"),s&&s.c(),this.h()},l(r){e=k(r,"NAV",{class:!0});var o=p(e);t=k(o,"UL",{class:!0});var f=p(t);s&&s.l(f),f.forEach(h),o.forEach(h),this.h()},h(){u(t,"class","svelte-l9ya3k"),H(t,"equal-spacing",a[2]==="equal"),u(e,"class","svelte-l9ya3k"),H(e,"border",a[1]),H(e,"wide",a[0])},m(r,o){b(r,e,o),w(e,t),s&&s.m(t,null),l=!0},p(r,[o]){s&&s.p&&(!l||o&8)&&M(s,n,r,r[3],l?D(n,r[3],o,null):R(r[3]),null),o&4&&H(t,"equal-spacing",r[2]==="equal"),o&2&&H(e,"border",r[1]),o&1&&H(e,"wide",r[0])},i(r){l||($(s,r),l=!0)},o(r){d(s,r),l=!1},d(r){r&&h(e),s&&s.d(r)}}}function je(a,e,t){let{$$slots:l={},$$scope:n}=e,{wide:s=!1}=e,{border:r=!1}=e,{spacing:o=void 0}=e;return ue("page",Ae),a.$$set=f=>{"wide"in f&&t(0,s=f.wide),"border"in f&&t(1,r=f.border),"spacing"in f&&t(2,o=f.spacing),"$$scope"in f&&t(3,n=f.$$scope)},[s,r,o,n,l]}class Oe extends P{constructor(e){super();T(this,e,je,Ie,y,{wide:0,border:1,spacing:2})}}function qe(a,{pattern:e,current:t}){const l=a.getAttribute("href");function n({pattern:s,current:r}){s&&s instanceof RegExp?s.test(r)?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"):!s&&r===l?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")}return n({pattern:e,current:t}),{update:n}}function Ne(a){let e,t,l,n,s,r,o;const f=a[9].default,c=B(f,a,a[8],null);return{c(){e=E("li"),t=E("a"),c&&c.c(),this.h()},l(m){e=k(m,"LI",{class:!0});var i=p(e);t=k(i,"A",{class:!0,style:!0,href:!0,"sapper:prefetch":!0});var _=p(t);c&&c.l(_),_.forEach(h),i.forEach(h),this.h()},h(){u(t,"class",l="menu-item underline-"+a[3]+" svelte-13l374e"),J(t,"--menu-item-decoration-color","var(--color-"+a[4]+")"),J(t,"--menu-item-decoration-size",a[5]),u(t,"href",a[0]),u(t,"sapper:prefetch",a[1]),u(e,"class","svelte-13l374e")},m(m,i){b(m,e,i),w(e,t),c&&c.m(t,null),s=!0,r||(o=me(n=qe.call(null,t,{current:a[6].path,pattern:a[2]})),r=!0)},p(m,[i]){c&&c.p&&(!s||i&256)&&M(c,f,m,m[8],s?D(f,m[8],i,null):R(m[8]),null),(!s||i&8&&l!==(l="menu-item underline-"+m[3]+" svelte-13l374e"))&&u(t,"class",l),(!s||i&16)&&J(t,"--menu-item-decoration-color","var(--color-"+m[4]+")"),(!s||i&32)&&J(t,"--menu-item-decoration-size",m[5]),(!s||i&1)&&u(t,"href",m[0]),(!s||i&2)&&u(t,"sapper:prefetch",m[1]),n&&_e(n.update)&&i&68&&n.update.call(null,{current:m[6].path,pattern:m[2]})},i(m){s||($(c,m),s=!0)},o(m){d(c,m),s=!1},d(m){m&&h(e),c&&c.d(m),r=!1,o()}}}function Pe(a,e,t){let l,{$$slots:n={},$$scope:s}=e,{href:r}=e,{prefetch:o=void 0}=e,{pattern:f=null}=e,{decorationPosition:c="bottom"}=e,{decorationColor:m="primary"}=e,{decorationSize:i="0.2em"}=e;const _=W("page");return X(a,_,g=>t(6,l=g)),a.$$set=g=>{"href"in g&&t(0,r=g.href),"prefetch"in g&&t(1,o=g.prefetch),"pattern"in g&&t(2,f=g.pattern),"decorationPosition"in g&&t(3,c=g.decorationPosition),"decorationColor"in g&&t(4,m=g.decorationColor),"decorationSize"in g&&t(5,i=g.decorationSize),"$$scope"in g&&t(8,s=g.$$scope)},[r,o,f,c,m,i,l,_,s,n]}class Y extends P{constructor(e){super();T(this,e,Pe,Ne,y,{href:0,prefetch:1,pattern:2,decorationPosition:3,decorationColor:4,decorationSize:5})}}function ee(a,e,t){const l=a.slice();return l[5]=e[t].x,l[6]=e[t].y,l}function te(a){let e,t,l;return{c(){e=L("circle"),this.h()},l(n){e=F(n,"circle",{cx:!0,cy:!0,r:!0,class:!0}),p(e).forEach(h),this.h()},h(){u(e,"cx",t=le+a[5]),u(e,"cy",l=ne+a[6]),u(e,"r",a[2]),u(e,"class","svelte-q6f2xr")},m(n,s){b(n,e,s)},p(n,s){s&24&&t!==(t=le+n[5])&&u(e,"cx",t),s&24&&l!==(l=ne+n[6])&&u(e,"cy",l),s&4&&u(e,"r",n[2])},d(n){n&&h(e)}}}function Te(a){let e,t,l,n,s,r,o,f,c,m=se(a[4],a[3]),i=[];for(let _=0;_<m.length;_+=1)i[_]=te(ee(a,m,_));return{c(){e=L("svg"),t=L("defs"),l=L("mask"),n=L("rect"),s=L("circle"),o=L("circle"),f=L("g");for(let _=0;_<i.length;_+=1)i[_].c();this.h()},l(_){e=F(_,"svg",{xmlns:!0,viewBox:!0,class:!0});var g=p(e);t=F(g,"defs",{});var v=p(t);l=F(v,"mask",{class:!0,id:!0});var I=p(l);n=F(I,"rect",{fill:!0,x:!0,y:!0,width:!0,height:!0}),p(n).forEach(h),s=F(I,"circle",{fill:!0,cx:!0,cy:!0,r:!0,class:!0}),p(s).forEach(h),I.forEach(h),v.forEach(h),o=F(g,"circle",{class:!0,mask:!0,cx:!0,cy:!0,r:!0}),p(o).forEach(h),f=F(g,"g",{class:!0});var U=p(f);for(let G=0;G<i.length;G+=1)i[G].l(U);U.forEach(h),g.forEach(h),this.h()},h(){u(n,"fill","white"),u(n,"x","0"),u(n,"y","0"),u(n,"width","100"),u(n,"height","100"),u(s,"fill","black"),u(s,"cx","50"),u(s,"cy","50"),u(s,"r",r=a[1]/2),u(s,"class","svelte-q6f2xr"),u(l,"class","mask svelte-q6f2xr"),u(l,"id","theme-toggle-mask"),u(o,"class","center svelte-q6f2xr"),u(o,"mask","url(#theme-toggle-mask)"),u(o,"cx","50"),u(o,"cy","50"),u(o,"r",a[1]),u(f,"class","rays svelte-q6f2xr"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 100 100"),u(e,"class",c="indicator "+a[0]+" svelte-q6f2xr")},m(_,g){b(_,e,g),w(e,t),w(t,l),w(l,n),w(l,s),w(e,o),w(e,f);for(let v=0;v<i.length;v+=1)i[v].m(f,null)},p(_,[g]){if(g&2&&r!==(r=_[1]/2)&&u(s,"r",r),g&2&&u(o,"r",_[1]),g&28){m=se(_[4],_[3]);let v;for(v=0;v<m.length;v+=1){const I=ee(_,m,v);i[v]?i[v].p(I,g):(i[v]=te(I),i[v].c(),i[v].m(f,null))}for(;v<i.length;v+=1)i[v].d(1);i.length=m.length}g&1&&c!==(c="indicator "+_[0]+" svelte-q6f2xr")&&u(e,"class",c)},i:V,o:V,d(_){_&&h(e),he(i,_)}}}function se(a,e){const t=new Array(a);for(let l=0;l<a;l++)t[l]={x:e*Math.cos(2*Math.PI*l/a),y:e*Math.sin(2*Math.PI*l/a)};return t}const le=50,ne=50;function ye(a,e,t){let{theme:l}=e,{sunSize:n=25}=e,{raySize:s=5}=e,{rayOffset:r=40}=e,{rays:o=8}=e;return a.$$set=f=>{"theme"in f&&t(0,l=f.theme),"sunSize"in f&&t(1,n=f.sunSize),"raySize"in f&&t(2,s=f.raySize),"rayOffset"in f&&t(3,r=f.rayOffset),"rays"in f&&t(4,o=f.rays)},[l,n,s,r,o]}class Be extends P{constructor(e){super();T(this,e,ye,Te,y,{theme:0,sunSize:1,raySize:2,rayOffset:3,rays:4})}}function Me(a){let e,t,l,n,s;return t=new Be({props:{theme:a[1]}}),{c(){e=E("button"),S(t.$$.fragment),this.h()},l(r){e=k(r,"BUTTON",{title:!0,class:!0});var o=p(e);C(t.$$.fragment,o),o.forEach(h),this.h()},h(){u(e,"title",a[0]),u(e,"class","switcher svelte-1ro5526")},m(r,o){b(r,e,o),z(t,e,null),l=!0,n||(s=ge(e,"click",x.change),n=!0)},p(r,[o]){const f={};o&2&&(f.theme=r[1]),t.$set(f),(!l||o&1)&&u(e,"title",r[0])},i(r){l||($(t.$$.fragment,r),l=!0)},o(r){d(t.$$.fragment,r),l=!1},d(r){r&&h(e),A(t),n=!1,s()}}}function Re(a,e,t){let l;X(a,x,s=>t(1,l=s));let{title:n="Click to switch theme"}=e;return a.$$set=s=>{"title"in s&&t(0,n=s.title)},[n,l]}class De extends P{constructor(e){super();T(this,e,Re,Me,y,{title:0})}}const Le=a=>({}),re=a=>({}),Fe=a=>({}),ae=a=>({}),Ge=a=>({}),oe=a=>({});function ie(a){let e,t;const l=a[2].logo,n=B(l,a,a[1],oe);return{c(){e=E("section"),n&&n.c(),this.h()},l(s){e=k(s,"SECTION",{label:!0,class:!0});var r=p(e);n&&n.l(r),r.forEach(h),this.h()},h(){u(e,"label","logo"),u(e,"class","svelte-j0mwh5")},m(s,r){b(s,e,r),n&&n.m(e,null),t=!0},p(s,r){n&&n.p&&(!t||r&2)&&M(n,l,s,s[1],t?D(l,s[1],r,Ge):R(s[1]),oe)},i(s){t||($(n,s),t=!0)},o(s){d(n,s),t=!1},d(s){s&&h(e),n&&n.d(s)}}}function fe(a){let e,t;const l=a[2].navigation,n=B(l,a,a[1],ae);return{c(){e=E("section"),n&&n.c(),this.h()},l(s){e=k(s,"SECTION",{label:!0,class:!0});var r=p(e);n&&n.l(r),r.forEach(h),this.h()},h(){u(e,"label","navigation"),u(e,"class","svelte-j0mwh5")},m(s,r){b(s,e,r),n&&n.m(e,null),t=!0},p(s,r){n&&n.p&&(!t||r&2)&&M(n,l,s,s[1],t?D(l,s[1],r,Fe):R(s[1]),ae)},i(s){t||($(n,s),t=!0)},o(s){d(n,s),t=!1},d(s){s&&h(e),n&&n.d(s)}}}function ce(a){let e,t;const l=a[2].controls,n=B(l,a,a[1],re);return{c(){e=E("section"),n&&n.c(),this.h()},l(s){e=k(s,"SECTION",{label:!0,class:!0});var r=p(e);n&&n.l(r),r.forEach(h),this.h()},h(){u(e,"label","controls"),u(e,"class","svelte-j0mwh5")},m(s,r){b(s,e,r),n&&n.m(e,null),t=!0},p(s,r){n&&n.p&&(!t||r&2)&&M(n,l,s,s[1],t?D(l,s[1],r,Le):R(s[1]),re)},i(s){t||($(n,s),t=!0)},o(s){d(n,s),t=!1},d(s){s&&h(e),n&&n.d(s)}}}function He(a){let e,t,l,n,s=a[0].logo&&ie(a),r=a[0].navigation&&fe(a),o=a[0].controls&&ce(a);return{c(){e=E("header"),s&&s.c(),t=j(),r&&r.c(),l=j(),o&&o.c(),this.h()},l(f){e=k(f,"HEADER",{class:!0});var c=p(e);s&&s.l(c),t=O(c),r&&r.l(c),l=O(c),o&&o.l(c),c.forEach(h),this.h()},h(){u(e,"class","svelte-j0mwh5")},m(f,c){b(f,e,c),s&&s.m(e,null),w(e,t),r&&r.m(e,null),w(e,l),o&&o.m(e,null),n=!0},p(f,[c]){f[0].logo?s?(s.p(f,c),c&1&&$(s,1)):(s=ie(f),s.c(),$(s,1),s.m(e,t)):s&&(K(),d(s,1,1,()=>{s=null}),Q()),f[0].navigation?r?(r.p(f,c),c&1&&$(r,1)):(r=fe(f),r.c(),$(r,1),r.m(e,l)):r&&(K(),d(r,1,1,()=>{r=null}),Q()),f[0].controls?o?(o.p(f,c),c&1&&$(o,1)):(o=ce(f),o.c(),$(o,1),o.m(e,null)):o&&(K(),d(o,1,1,()=>{o=null}),Q())},i(f){n||($(s),$(r),$(o),n=!0)},o(f){d(s),d(r),d(o),n=!1},d(f){f&&h(e),s&&s.d(),r&&r.d(),o&&o.d()}}}function Ue(a,e,t){let{$$slots:l={},$$scope:n}=e;const s=$e(l);return a.$$set=r=>{"$$scope"in r&&t(1,n=r.$$scope)},[s,n,l]}class Ve extends P{constructor(e){super();T(this,e,Ue,He,y,{})}}function Ye(a){let e,t,l,n,s,r;return t=new we({props:{path:Ee}}),{c(){e=E("a"),S(t.$$.fragment),l=j(),n=E("span"),s=q("eric/rovell"),this.h()},l(o){e=k(o,"A",{class:!0,href:!0,slot:!0});var f=p(e);C(t.$$.fragment,f),l=O(f),n=k(f,"SPAN",{});var c=p(n);s=N(c,"eric/rovell"),c.forEach(h),f.forEach(h),this.h()},h(){u(e,"class","logo"),u(e,"href",Z),u(e,"slot","logo")},m(o,f){b(o,e,f),z(t,e,null),w(e,l),w(e,n),w(n,s),r=!0},p:V,i(o){r||($(t.$$.fragment,o),r=!0)},o(o){d(t.$$.fragment,o),r=!1},d(o){o&&h(e),A(t)}}}function Je(a){let e;return{c(){e=q("Home")},l(t){e=N(t,"Home")},m(t,l){b(t,e,l)},d(t){t&&h(e)}}}function Ke(a){let e;return{c(){e=q("Blog")},l(t){e=N(t,"Blog")},m(t,l){b(t,e,l)},d(t){t&&h(e)}}}function Qe(a){let e;return{c(){e=q("Gallery")},l(t){e=N(t,"Gallery")},m(t,l){b(t,e,l)},d(t){t&&h(e)}}}function We(a){let e;return{c(){e=q("Projects")},l(t){e=N(t,"Projects")},m(t,l){b(t,e,l)},d(t){t&&h(e)}}}function Xe(a){let e;return{c(){e=q("About")},l(t){e=N(t,"About")},m(t,l){b(t,e,l)},d(t){t&&h(e)}}}function Ze(a){let e,t,l,n,s,r,o,f,c,m;return e=new Y({props:{href:Z,$$slots:{default:[Je]},$$scope:{ctx:a}}}),l=new Y({props:{href:de,pattern:/\/blog|\/content/,$$slots:{default:[Ke]},$$scope:{ctx:a}}}),s=new Y({props:{href:pe,pattern:/\/gallery/,$$slots:{default:[Qe]},$$scope:{ctx:a}}}),o=new Y({props:{href:ve,$$slots:{default:[We]},$$scope:{ctx:a}}}),c=new Y({props:{href:be,$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){S(e.$$.fragment),t=j(),S(l.$$.fragment),n=j(),S(s.$$.fragment),r=j(),S(o.$$.fragment),f=j(),S(c.$$.fragment)},l(i){C(e.$$.fragment,i),t=O(i),C(l.$$.fragment,i),n=O(i),C(s.$$.fragment,i),r=O(i),C(o.$$.fragment,i),f=O(i),C(c.$$.fragment,i)},m(i,_){z(e,i,_),b(i,t,_),z(l,i,_),b(i,n,_),z(s,i,_),b(i,r,_),z(o,i,_),b(i,f,_),z(c,i,_),m=!0},p(i,_){const g={};_&2&&(g.$$scope={dirty:_,ctx:i}),e.$set(g);const v={};_&2&&(v.$$scope={dirty:_,ctx:i}),l.$set(v);const I={};_&2&&(I.$$scope={dirty:_,ctx:i}),s.$set(I);const U={};_&2&&(U.$$scope={dirty:_,ctx:i}),o.$set(U);const G={};_&2&&(G.$$scope={dirty:_,ctx:i}),c.$set(G)},i(i){m||($(e.$$.fragment,i),$(l.$$.fragment,i),$(s.$$.fragment,i),$(o.$$.fragment,i),$(c.$$.fragment,i),m=!0)},o(i){d(e.$$.fragment,i),d(l.$$.fragment,i),d(s.$$.fragment,i),d(o.$$.fragment,i),d(c.$$.fragment,i),m=!1},d(i){A(e,i),i&&h(t),A(l,i),i&&h(n),A(s,i),i&&h(r),A(o,i),i&&h(f),A(c,i)}}}function xe(a){let e,t;return e=new Oe({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}}),{c(){S(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,n){z(e,l,n),t=!0},p(l,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){d(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function et(a){let e,t;return e=new De({props:{size:"30px"}}),{c(){S(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,n){z(e,l,n),t=!0},p:V,i(l){t||($(e.$$.fragment,l),t=!0)},o(l){d(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function tt(a){let e,t,l=new Date().getFullYear()+"",n,s;return{c(){e=E("section"),t=q("\xA9 "),n=q(l),s=q(" eric/rovell, v0.1.0 | CC BY-NC-SA 4.0 Licence."),this.h()},l(r){e=k(r,"SECTION",{class:!0});var o=p(e);t=N(o,"\xA9 "),n=N(o,l),s=N(o," eric/rovell, v0.1.0 | CC BY-NC-SA 4.0 Licence."),o.forEach(h),this.h()},h(){u(e,"class","copyright svelte-1fl6ap9")},m(r,o){b(r,e,o),w(e,t),w(e,n),w(e,s)},p:V,d(r){r&&h(e)}}}function st(a){let e,t,l,n,s,r,o;t=new Ve({props:{$$slots:{controls:[et],navigation:[xe],logo:[Ye]},$$scope:{ctx:a}}});const f=a[0].default,c=B(f,a,a[1],null);return r=new Ce({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){e=E("div"),S(t.$$.fragment),l=j(),n=E("section"),c&&c.c(),s=j(),S(r.$$.fragment),this.h()},l(m){e=k(m,"DIV",{id:!0,class:!0});var i=p(e);C(t.$$.fragment,i),l=O(i),n=k(i,"SECTION",{label:!0,class:!0});var _=p(n);c&&c.l(_),_.forEach(h),s=O(i),C(r.$$.fragment,i),i.forEach(h),this.h()},h(){u(n,"label","content"),u(n,"class","content svelte-1fl6ap9"),u(e,"id","app"),u(e,"class","svelte-1fl6ap9")},m(m,i){b(m,e,i),z(t,e,null),w(e,l),w(e,n),c&&c.m(n,null),w(e,s),z(r,e,null),o=!0},p(m,[i]){const _={};i&2&&(_.$$scope={dirty:i,ctx:m}),t.$set(_),c&&c.p&&(!o||i&2)&&M(c,f,m,m[1],o?D(f,m[1],i,null):R(m[1]),null);const g={};i&2&&(g.$$scope={dirty:i,ctx:m}),r.$set(g)},i(m){o||($(t.$$.fragment,m),$(c,m),$(r.$$.fragment,m),o=!0)},o(m){d(t.$$.fragment,m),d(c,m),d(r.$$.fragment,m),o=!1},d(m){m&&h(e),A(t),c&&c.d(m),A(r)}}}function lt(a,e,t){let{$$slots:l={},$$scope:n}=e;return a.$$set=s=>{"$$scope"in s&&t(1,n=s.$$scope)},[l,n]}class nt extends P{constructor(e){super();T(this,e,lt,st,y,{})}}function rt(a){let e;const t=a[0].default,l=B(t,a,a[1],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,s){l&&l.m(n,s),e=!0},p(n,s){l&&l.p&&(!e||s&2)&&M(l,t,n,n[1],e?D(t,n[1],s,null):R(n[1]),null)},i(n){e||($(l,n),e=!0)},o(n){d(l,n),e=!1},d(n){l&&l.d(n)}}}function at(a){let e,t;return e=new nt({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),{c(){S(e.$$.fragment)},l(l){C(e.$$.fragment,l)},m(l,n){z(e,l,n),t=!0},p(l,[n]){const s={};n&2&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){d(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function ot(a,e,t){let{$$slots:l={},$$scope:n}=e;return a.$$set=s=>{"$$scope"in s&&t(1,n=s.$$scope)},[l,n]}class ht extends P{constructor(e){super();T(this,e,ot,at,y,{})}}export{ht as default};
