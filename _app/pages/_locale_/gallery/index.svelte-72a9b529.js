import{S as H,i as U,s as V,C,e as k,c as S,a as E,d,_ as J,b as y,g as z,H as I,z as W,a4 as ie,V as O,a0 as Q,a1 as re,E as oe,k as L,w as M,m as B,x as q,y as P,W as D,P as fe,M as ce,N as ue,O as he,q as p,a5 as me,a6 as ge,o as v,a7 as de,B as T,a8 as _e,l as X,n as le,p as ae,a9 as pe,L as ye,aa as Y,A as se,ab as we,ac as be,f as Z,ad as ve,I as ke}from"../../../chunks/vendor-2b63bcc2.js";import{h as G,i as R}from"../../../chunks/timeline.module-b536b1c3.js";import{I as Se,d as Ee}from"../../../chunks/default-55213390.js";import{p as ze}from"../../../chunks/util-0ff25a74.js";import{P as Ie}from"../../../chunks/PageMeta-ec195f1f.js";import"../../../chunks/Meta-731d21ba.js";function Ne(n){let e,l,o,f,t=[{src:o=n[0]},{width:n[1]},{height:n[2]},{alt:n[3]},{loading:f=n[4]?"lazy":void 0},{class:n[6]},n[7]],s={};for(let a=0;a<t.length;a+=1)s=C(s,t[a]);return{c(){e=k("picture"),l=k("img"),this.h()},l(a){e=S(a,"PICTURE",{style:!0});var c=E(e);l=S(c,"IMG",{src:!0,width:!0,height:!0,alt:!0,loading:!0,class:!0}),c.forEach(d),this.h()},h(){J(l,s),y(e,"style",n[5])},m(a,c){z(a,e,c),I(e,l)},p(a,[c]){J(l,s=W(t,[c&1&&!ie(l.src,o=a[0])&&{src:o},c&2&&{width:a[1]},c&4&&{height:a[2]},c&8&&{alt:a[3]},c&16&&f!==(f=a[4]?"lazy":void 0)&&{loading:f},c&64&&{class:a[6]},c&128&&a[7]])),c&32&&y(e,"style",a[5])},i:O,o:O,d(a){a&&d(e)}}}function Me(n,e,l){const o=["src","width","height","alt","lazy","style","className"];let f=Q(e,o),{src:t}=e,{width:s}=e,{height:a}=e,{alt:c}=e,{lazy:h=!1}=e,{style:w=""}=e,{className:r=void 0}=e;return n.$$set=i=>{e=C(C({},e),re(i)),l(7,f=Q(e,o)),"src"in i&&l(0,t=i.src),"width"in i&&l(1,s=i.width),"height"in i&&l(2,a=i.height),"alt"in i&&l(3,c=i.alt),"lazy"in i&&l(4,h=i.lazy),"style"in i&&l(5,w=i.style),"className"in i&&l(6,r=i.className)},[t,s,a,c,h,w,r,f]}class ne extends H{constructor(e){super();U(this,e,Me,Ne,V,{src:0,width:1,height:2,alt:3,lazy:4,style:5,className:6})}}function qe(n,e="body"){let l;async function o(t){if(e=t,typeof e=="string"){if(l=document.querySelector(e),l||(await oe(),l=document.querySelector(e)),!l)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)l=e;else throw new TypeError("Unknown portal target type. Allowed types: string ot istance of HTMLElement");l.appendChild(n),n.hidden=!1}function f(){n.parentElement&&n.parentElement.removeChild(n)}return o(e),{update:o,destroy:f}}function $(n){let e,l,o,f,t,s,a,c,h,w,r,i,m,u,N,j;s=new Se({props:{path:Ee,size:"1.25rem"}});const A=n[4].default,_=ye(A,n,n[3],null);return{c(){e=k("div"),l=k("div"),f=L(),t=k("button"),M(s.$$.fragment),a=L(),c=k("div"),_&&_.c(),this.h()},l(g){e=S(g,"DIV",{class:!0,role:!0,"aria-modal":!0});var b=E(e);l=S(b,"DIV",{class:!0}),E(l).forEach(d),f=B(b),t=S(b,"BUTTON",{shape:!0});var K=E(t);q(s.$$.fragment,K),K.forEach(d),a=B(b),c=S(b,"DIV",{class:!0});var F=E(c);_&&_.l(F),F.forEach(d),b.forEach(d),this.h()},h(){y(l,"class",o=G.backdrop),y(t,"shape","square"),t.autofocus=!0,y(c,"class",h=G.contents),y(e,"class",w=G.modal),e.hidden=!0,y(e,"role","dialog"),y(e,"aria-modal","true")},m(g,b){z(g,e,b),I(e,l),I(e,f),I(e,t),P(s,t,null),I(e,a),I(e,c),_&&_.m(c,null),u=!0,t.focus(),N||(j=[D(l,"click",n[1]),D(t,"click",n[1]),fe(r=qe.call(null,e))],N=!0)},p(g,b){_&&_.p&&(!u||b&8)&&ce(_,A,g,g[3],u?he(A,g[3],b,null):ue(g[3]),null)},i(g){u||(p(s.$$.fragment,g),p(_,g),me(()=>{m&&m.end(1),i=ge(e,Y,{}),i.start()}),u=!0)},o(g){v(s.$$.fragment,g),v(_,g),i&&i.invalidate(),m=de(e,Y,{}),u=!1},d(g){g&&d(e),T(s),_&&_.d(g),g&&m&&m.end(),N=!1,_e(j)}}}function Pe(n){let e,l,o,f,t=n[0]&&$(n);return{c(){t&&t.c(),e=X()},l(s){t&&t.l(s),e=X()},m(s,a){t&&t.m(s,a),z(s,e,a),l=!0,o||(f=D(window,"keydown",n[2]),o=!0)},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&p(t,1)):(t=$(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(le(),v(t,1,1,()=>{t=null}),ae())},i(s){l||(p(t),l=!0)},o(s){v(t),l=!1},d(s){t&&t.d(s),s&&d(e),o=!1,f()}}}function Te(n,e,l){let{$$slots:o={},$$scope:f}=e;const t=pe();let{open:s=!1}=e;const a=()=>{l(0,s=!1),t("close")},c=h=>h.key==="Escape"&&a();return n.$$set=h=>{"open"in h&&l(0,s=h.open),"$$scope"in h&&l(3,f=h.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&ze(s)},[s,a,c,f,o]}class Ce extends H{constructor(e){super();U(this,e,Te,Pe,V,{open:0})}}function x(n,e,l){const o=n.slice();return o[9]=e[l],o[11]=l,o}function ee(n){let e,l,o,f,t,s,a;const c=[{src:n[3](n[9])},n[9]];let h={};for(let r=0;r<c.length;r+=1)h=C(h,c[r]);l=new ne({props:h});function w(){return n[7](n[11])}return{c(){e=k("li"),M(l.$$.fragment),o=L(),this.h()},l(r){e=S(r,"LI",{style:!0});var i=E(e);q(l.$$.fragment,i),o=B(i),i.forEach(d),this.h()},h(){y(e,"style",f=te(n[9],n[1]))},m(r,i){z(r,e,i),P(l,e,null),I(e,o),t=!0,s||(a=D(e,"click",w),s=!0)},p(r,i){n=r;const m=i&9?W(c,[{src:n[3](n[9])},i&1&&se(n[9])]):{};l.$set(m),(!t||i&3&&f!==(f=te(n[9],n[1])))&&y(e,"style",f)},i(r){t||(p(l.$$.fragment,r),t=!0)},o(r){v(l.$$.fragment,r),t=!1},d(r){r&&d(e),T(l),s=!1,a()}}}function Le(n){let e,l;const o=[{src:n[3](n[5])},n[5],{className:R["modal-image"]}];let f={};for(let t=0;t<o.length;t+=1)f=C(f,o[t]);return e=new ne({props:f}),{c(){M(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){P(e,t,s),l=!0},p(t,s){const a=s&40?W(o,[s&40&&{src:t[3](t[5])},s&32&&se(t[5]),s&0&&{className:R["modal-image"]}]):{};e.$set(a)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Be(n){let e,l,o,f,t,s=n[0],a=[];for(let r=0;r<s.length;r+=1)a[r]=ee(x(n,s,r));const c=r=>v(a[r],1,1,()=>{a[r]=null});function h(r){n[8](r)}let w={$$slots:{default:[Le]},$$scope:{ctx:n}};return n[4]!==void 0&&(w.open=n[4]),o=new Ce({props:w}),we.push(()=>be(o,"open",h)),{c(){e=k("ul");for(let r=0;r<a.length;r+=1)a[r].c();l=L(),M(o.$$.fragment),this.h()},l(r){e=S(r,"UL",{class:!0,style:!0});var i=E(e);for(let m=0;m<a.length;m+=1)a[m].l(i);i.forEach(d),l=B(r),q(o.$$.fragment,r),this.h()},h(){y(e,"class",R.gallery),Z(e,"--cell-size",n[2]+"px")},m(r,i){z(r,e,i);for(let m=0;m<a.length;m+=1)a[m].m(e,null);z(r,l,i),P(o,r,i),t=!0},p(r,[i]){if(i&75){s=r[0];let u;for(u=0;u<s.length;u+=1){const N=x(r,s,u);a[u]?(a[u].p(N,i),p(a[u],1)):(a[u]=ee(N),a[u].c(),p(a[u],1),a[u].m(e,null))}for(le(),u=s.length;u<a.length;u+=1)c(u);ae()}(!t||i&4)&&Z(e,"--cell-size",r[2]+"px");const m={};i&4136&&(m.$$scope={dirty:i,ctx:r}),!f&&i&16&&(f=!0,m.open=r[4],ve(()=>f=!1)),o.$set(m)},i(r){if(!t){for(let i=0;i<s.length;i+=1)p(a[i]);p(o.$$.fragment,r),t=!0}},o(r){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)v(a[i]);v(o.$$.fragment,r),t=!1},d(r){r&&d(e),ke(a,r),r&&d(l),T(o,r)}}}function te({width:n,height:e},l=400){const o=Math.floor(n/l),f=Math.floor(e/l);return`--column-end: span ${o}; --row-end: span ${f};`}function De(n,e,l){let{items:o=[]}=e,{cellScale:f=400}=e,{cellSize:t=100}=e,{getSrc:s}=e,a=!1,c;const h=i=>{l(5,c=o[i]),l(4,a=!0)},w=i=>h(i);function r(i){a=i,l(4,a)}return n.$$set=i=>{"items"in i&&l(0,o=i.items),"cellScale"in i&&l(1,f=i.cellScale),"cellSize"in i&&l(2,t=i.cellSize),"getSrc"in i&&l(3,s=i.getSrc)},[o,f,t,s,a,c,h,w,r]}class He extends H{constructor(e){super();U(this,e,De,Be,V,{items:0,cellScale:1,cellSize:2,getSrc:3})}}var Ue=[{path:"/img/gallery/2018-08-19",format:"webp",width:1200,height:800,alt:"Sunset at the shore with scarlet clouds."},{path:"/img/gallery/2019-02-17",format:"webp",width:1200,height:800,alt:"Black and white photography of the tall building."},{path:"/img/gallery/2020-06-13",format:"webp",width:800,height:1200,alt:"White nights view at the shore."},{path:"/img/gallery/2020-03-05",format:"webp",width:1200,height:1200,alt:"Tree leaves illuminated by the night lamp."},{path:"/img/gallery/2020-10-10",format:"webp",width:1200,height:1200,alt:"Photoart with bridge photo rotated repeatedly around 4 times resulting in a square."},{path:"/img/gallery/2021-04-04",format:"webp",width:1e3,height:1500,alt:"Sunset at the river with light clouds and flying bird at the sky."},{path:"/img/gallery/0047",format:"webp",width:1500,height:844,alt:"Reflection of the Lamp on the wet ground."},{path:"/img/gallery/2021-03-07",format:"webp",width:910,height:1500,alt:"Heavy snowfall at night illuminated by the lamp."},{path:"/img/gallery/3378",format:"webp",width:1500,height:1e3,alt:"Bird sitting on the lamp."}];function Ve(n){let e,l,o,f,t;return e=new Ie({props:{route:"gallery"}}),f=new He({props:{items:Ue,getSrc:Ae}}),{c(){M(e.$$.fragment),l=L(),o=k("main"),M(f.$$.fragment),this.h()},l(s){q(e.$$.fragment,s),l=B(s),o=S(s,"MAIN",{class:!0});var a=E(o);q(f.$$.fragment,a),a.forEach(d),this.h()},h(){y(o,"class","svelte-zk6vcg")},m(s,a){P(e,s,a),z(s,l,a),z(s,o,a),P(f,o,null),t=!0},p:O,i(s){t||(p(e.$$.fragment,s),p(f.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),v(f.$$.fragment,s),t=!1},d(s){T(e,s),s&&d(l),s&&d(o),T(f)}}}const Ae=({path:n,format:e})=>`${n}.${e}`;class Fe extends H{constructor(e){super();U(this,e,null,Ve,V,{})}}export{Fe as default};
